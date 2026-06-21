/*
 * PassRoute Worker — serves the static site (via the ASSETS binding) and adds a tiny
 * first-party analytics API + password-protected admin dashboard.
 *
 *   /api/track            POST  record events (pageview / test_start / exam_pick / exam_switch)
 *   /api/admin/state      GET   { needsSetup, authed }
 *   /api/admin/setup      POST  { password }  — first-run only (creates the admin password)
 *   /api/admin/login      POST  { password }  — sets a signed HttpOnly session cookie
 *   /api/admin/logout     POST  — clears the cookie
 *   /api/admin/stats      GET   ?days=30  — aggregated stats (auth required)
 *   everything else             -> env.ASSETS.fetch(request)  (the static site, unchanged)
 *
 * Storage is an embedded SQLite Durable Object (no external D1/KV to provision — it ships with
 * the deploy). Admin password is set on first /admin visit, or pre-seeded via the ADMIN_PASSWORD
 * secret. Sessions are HMAC-signed tokens (12h) in an HttpOnly+Secure+SameSite=Strict cookie.
 */
import { DurableObject } from "cloudflare:workers";

const COOKIE = "pr_admin";
const SESSION_MS = 12 * 60 * 60 * 1000; // 12h
const ALLOWED_TYPES = new Set(["pageview", "test_start", "exam_pick", "exam_switch", "test_result"]);
const BOT_RE = /bot|crawl|spider|slurp|bingpreview|headless|lighthouse|pingdom|monitor|curl\/|wget|python-requests|facebookexternalhit|preview/i;

/* ---------------- helpers (module scope) ---------------- */
const enc = (s) => new TextEncoder().encode(s);
const dec = (b) => new TextDecoder().decode(b);
function b64u(bytes) {
  let s = "";
  const a = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  for (let i = 0; i < a.length; i++) s += String.fromCharCode(a[i]);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function ub64u(str) {
  str = String(str).replace(/-/g, "+").replace(/_/g, "/");
  while (str.length % 4) str += "=";
  const bin = atob(str);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
function ctEqBytes(a, b) {
  const la = a.length, lb = b.length, n = Math.max(la, lb);
  let diff = la ^ lb;
  for (let i = 0; i < n; i++) diff |= (a[i % la || 0] ^ b[i % lb || 0]);
  return diff === 0 && la === lb;
}
function ctEqStr(a, b) {
  return ctEqBytes(enc(String(a)), enc(String(b)));
}
async function pbkdf2(pw, salt, iter) {
  const key = await crypto.subtle.importKey("raw", enc(pw), "PBKDF2", false, ["deriveBits"]);
  return new Uint8Array(await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations: iter, hash: "SHA-256" }, key, 256));
}
async function hashPw(pw) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const h = await pbkdf2(pw, salt, 100000);
  return `pbkdf2$100000$${b64u(salt)}$${b64u(h)}`;
}
async function verifyPw(pw, stored) {
  const p = String(stored || "").split("$");
  if (p.length !== 4 || p[0] !== "pbkdf2") return false;
  const h = await pbkdf2(pw, ub64u(p[2]), parseInt(p[1], 10) || 100000);
  return ctEqBytes(h, ub64u(p[3]));
}
async function hmac(secretB64u, msg) {
  const key = await crypto.subtle.importKey("raw", ub64u(secretB64u), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return b64u(new Uint8Array(await crypto.subtle.sign("HMAC", key, enc(msg))));
}

/* ---------------- Durable Object: all storage + auth lives here ---------------- */
export class Analytics extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.sql = ctx.storage.sql;
    this.sql.exec(`CREATE TABLE IF NOT EXISTS events(
      id INTEGER PRIMARY KEY AUTOINCREMENT, ts INTEGER NOT NULL, day TEXT NOT NULL,
      type TEXT NOT NULL, name TEXT NOT NULL, lang TEXT, ref TEXT, dev TEXT);`);
    this.sql.exec(`CREATE INDEX IF NOT EXISTS idx_ev_type_name ON events(type,name);`);
    this.sql.exec(`CREATE INDEX IF NOT EXISTS idx_ev_ts ON events(ts);`);
    this.sql.exec(`CREATE INDEX IF NOT EXISTS idx_ev_day ON events(day);`);
    this.sql.exec(`CREATE TABLE IF NOT EXISTS config(k TEXT PRIMARY KEY, v TEXT);`);
    if (!this.#cfg("session_secret")) {
      this.#setCfg("session_secret", b64u(crypto.getRandomValues(new Uint8Array(32))));
    }
  }
  #cfg(k) { const r = [...this.sql.exec("SELECT v FROM config WHERE k=?", k)]; return r.length ? r[0].v : null; }
  #setCfg(k, v) { this.sql.exec("INSERT INTO config(k,v) VALUES(?,?) ON CONFLICT(k) DO UPDATE SET v=excluded.v", k, String(v)); }

  track(events, meta) {
    const now = Date.now();
    const day = new Date(now).toISOString().slice(0, 10);
    let n = 0;
    for (const e of (Array.isArray(events) ? events : [])) {
      if (n >= 50) break;
      if (!e || !ALLOWED_TYPES.has(e.type)) continue;
      const name = String(e.name == null ? "" : e.name).slice(0, 200).trim();
      if (!name) continue;
      const lang = e.lang ? String(e.lang).slice(0, 8) : null;
      this.sql.exec("INSERT INTO events(ts,day,type,name,lang,ref,dev) VALUES(?,?,?,?,?,?,?)",
        now, day, e.type, name, lang, meta?.ref || null, meta?.dev || null);
      n++;
    }
    // keep the table bounded (~1 year); cheap because of the ts index
    if (now % 50 === 0) this.sql.exec("DELETE FROM events WHERE ts < ?", now - 400 * 86400000);
    return { ok: true, n };
  }

  needsSetup(envHasPw) { return !(envHasPw || this.#cfg("pw_hash")); }

  async setup(password, envHasPw) {
    if (envHasPw || this.#cfg("pw_hash")) return { ok: false, error: "already_configured" };
    if (typeof password !== "string" || password.length < 8) return { ok: false, error: "weak" };
    this.#setCfg("pw_hash", await hashPw(password));
    return { ok: true, token: await this.#sign() };
  }

  async login(password, envPassword) {
    const lock = Number(this.#cfg("lock_until") || 0);
    if (Date.now() < lock) return { ok: false, error: "locked", retryMs: lock - Date.now() };
    let valid = false;
    if (envPassword != null) valid = ctEqStr(password, envPassword);
    else { const h = this.#cfg("pw_hash"); valid = h ? await verifyPw(password, h) : false; }
    if (!valid) {
      const f = Number(this.#cfg("fail") || 0) + 1;
      this.#setCfg("fail", f);
      if (f >= 5) this.#setCfg("lock_until", Date.now() + Math.min(15 * 60000, (f - 4) * 60000));
      return { ok: false, error: "invalid" };
    }
    this.#setCfg("fail", 0); this.#setCfg("lock_until", 0);
    return { ok: true, token: await this.#sign() };
  }

  async verify(token) {
    if (!token || typeof token !== "string") return false;
    const p = token.split(".");
    if (p.length !== 3 || p[0] !== "v1") return false;
    const sig = await hmac(this.#cfg("session_secret"), p[0] + "." + p[1]);
    if (!ctEqStr(sig, p[2])) return false;
    try { return JSON.parse(dec(ub64u(p[1]))).exp > Date.now(); } catch { return false; }
  }
  async #sign() {
    const body = b64u(enc(JSON.stringify({ exp: Date.now() + SESSION_MS, iat: Date.now() })));
    return `v1.${body}.${await hmac(this.#cfg("session_secret"), "v1." + body)}`;
  }

  stats(days) {
    days = Math.min(365, Math.max(1, days || 30));
    const since = Date.now() - days * 86400000;
    const Q = (sql, ...a) => [...this.sql.exec(sql, ...a)];
    return {
      days,
      total: Q("SELECT COUNT(*) c FROM events WHERE ts>=?", since)[0].c,
      totalAll: Q("SELECT COUNT(*) c FROM events")[0].c,
      byType: Q("SELECT type, COUNT(*) c FROM events WHERE ts>=? GROUP BY type ORDER BY c DESC", since),
      pages: Q("SELECT name, COUNT(*) c FROM events WHERE type='pageview' AND ts>=? GROUP BY name ORDER BY c DESC LIMIT 50", since),
      tests: Q("SELECT name, COUNT(*) c FROM events WHERE type='test_start' AND ts>=? GROUP BY name ORDER BY c DESC LIMIT 50", since),
      exams: Q("SELECT name, COUNT(*) c FROM events WHERE type IN ('exam_pick','exam_switch') AND ts>=? GROUP BY name ORDER BY c DESC LIMIT 50", since),
      langs: Q("SELECT COALESCE(lang,'(unknown)') AS name, COUNT(*) c FROM events WHERE ts>=? GROUP BY COALESCE(lang,'(unknown)') ORDER BY c DESC", since),
      daily: Q("SELECT day, COUNT(*) c FROM events WHERE ts>=? GROUP BY day ORDER BY day", since),
      recent: Q("SELECT ts, type, name, lang FROM events ORDER BY id DESC LIMIT 40"),
    };
  }
}

/* ---------------- Worker: thin router ---------------- */
const J = (obj, status = 200, extra = {}) =>
  new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...extra } });

function cookieFrom(req) {
  const h = req.headers.get("cookie") || "";
  const m = h.match(new RegExp("(?:^|;\\s*)" + COOKIE + "=([^;]+)"));
  return m ? decodeURIComponent(m[1]) : null;
}
function setCookie(token, secure) {
  const flags = ["Path=/", "HttpOnly", "SameSite=Strict", "Max-Age=" + Math.floor(SESSION_MS / 1000)];
  if (secure) flags.push("Secure");
  return `${COOKIE}=${encodeURIComponent(token)}; ${flags.join("; ")}`;
}
function clearCookie(secure) {
  const flags = ["Path=/", "HttpOnly", "SameSite=Strict", "Max-Age=0"];
  if (secure) flags.push("Secure");
  return `${COOKIE}=; ${flags.join("; ")}`;
}
async function readJson(req) {
  try { return JSON.parse(await req.text()); } catch { return null; }
}
function stub(env) { return env.ANALYTICS.get(env.ANALYTICS.idFromName("global")); }

async function handleApi(req, env, url) {
  const path = url.pathname;
  const secure = url.protocol === "https:";
  const a = stub(env);
  const envPw = env.ADMIN_PASSWORD || null;

  // ---- public: record events ----
  if (path === "/api/track") {
    if (req.method !== "POST") return J({ error: "method" }, 405);
    const ua = req.headers.get("user-agent") || "";
    if (BOT_RE.test(ua)) return new Response(null, { status: 204 });
    const body = await readJson(req);
    let events = [];
    if (Array.isArray(body)) events = body;
    else if (body && Array.isArray(body.events)) events = body.events;
    else if (body && body.type) events = [body];
    let ref = null;
    try { const r = req.headers.get("referer"); if (r) ref = new URL(r).host.slice(0, 120); } catch {}
    const dev = /mobile|android|iphone|ipad/i.test(ua) ? "mobile" : "desktop";
    try { await a.track(events, { ref, dev }); } catch {}
    return new Response(null, { status: 204 }); // never leak storage state to the client
  }

  // ---- admin ----
  if (path === "/api/admin/state") {
    const [needsSetup, authed] = await Promise.all([a.needsSetup(!!envPw), a.verify(cookieFrom(req))]);
    return J({ needsSetup, authed });
  }
  if (path === "/api/admin/setup") {
    if (req.method !== "POST") return J({ error: "method" }, 405);
    if (envPw) return J({ ok: false, error: "managed_by_secret" }, 403);
    const body = await readJson(req);
    const r = await a.setup(body && body.password, false);
    if (!r.ok) return J(r, 400);
    return J({ ok: true }, 200, { "set-cookie": setCookie(r.token, secure) });
  }
  if (path === "/api/admin/login") {
    if (req.method !== "POST") return J({ error: "method" }, 405);
    const body = await readJson(req);
    const r = await a.login(body && body.password, envPw);
    if (!r.ok) return J({ ok: false, error: r.error }, r.error === "locked" ? 429 : 401);
    return J({ ok: true }, 200, { "set-cookie": setCookie(r.token, secure) });
  }
  if (path === "/api/admin/logout") {
    return J({ ok: true }, 200, { "set-cookie": clearCookie(secure) });
  }
  if (path === "/api/admin/stats") {
    if (!(await a.verify(cookieFrom(req)))) return J({ error: "unauthorized" }, 401);
    const days = parseInt(url.searchParams.get("days") || "30", 10);
    return J(await a.stats(days));
  }

  return J({ error: "not_found" }, 404);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      try { return await handleApi(request, env, url); }
      catch (e) { console.error("api error", e && e.stack || e); return J({ error: "server" }, 500); }
    }
    return env.ASSETS.fetch(request);
  },
};
