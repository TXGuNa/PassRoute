/*
 * PassRoute Worker — serves the static site (via the ASSETS binding) and adds a tiny
 * first-party analytics API + password-protected admin dashboard.
 *
 *   /api/track             POST  record events (pageview / test_start / exam_pick / exam_switch)
 *   /api/admin/state       GET   { needsSetup, authed, storage }
 *   /api/admin/setup       POST  { password }  — first-run only (creates the admin password)
 *   /api/admin/login       POST  { password }  — sets a signed HttpOnly session cookie
 *   /api/admin/logout      POST
 *   /api/admin/password    POST  { current, next }  — change the admin password (auth required)
 *   /api/admin/stats       GET   aggregated stats (auth required)
 *   everything else              -> env.ASSETS.fetch(request)  (the static site, unchanged)
 *
 * Storage is **Cloudflare KV** (binding ANALYTICS_KV) — not SQLite, not a Durable Object, so it
 * deploys with `wrangler versions upload` and is free on the Workers Free plan. Counts live in one
 * JSON value ("stats"); the admin password + session secret live in "config:*" keys. If the KV
 * binding is absent the API degrades gracefully (tracking no-ops, admin reports storage:false) so
 * the static site is never affected.
 */
const COOKIE = "pr_admin";
const SESSION_MS = 12 * 60 * 60 * 1000; // 12h
const ALLOWED_TYPES = new Set(["pageview", "test_start", "exam_pick", "exam_switch", "test_result"]);
const BOT_RE = /bot|crawl|spider|slurp|bingpreview|headless|lighthouse|pingdom|monitor|curl\/|wget|python-requests|facebookexternalhit|preview/i;
const MAX_KEYS = 500; // cap distinct names per bucket so the value can't grow unbounded

/* ---------------- crypto / encoding helpers ---------------- */
const enc = (s) => new TextEncoder().encode(s);
const dec = (b) => new TextDecoder().decode(b);
function b64u(bytes) {
  const a = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let s = "";
  for (let i = 0; i < a.length; i++) s += String.fromCharCode(a[i]);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function ub64u(str) {
  str = String(str).replace(/-/g, "+").replace(/_/g, "/");
  while (str.length % 4) str += "=";
  const bin = atob(str), out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
function ctEqBytes(a, b) {
  const la = a.length, lb = b.length, n = Math.max(la, lb);
  let diff = la ^ lb;
  for (let i = 0; i < n; i++) diff |= (a[la ? i % la : 0] ^ b[lb ? i % lb : 0]);
  return diff === 0 && la === lb;
}
const ctEqStr = (a, b) => ctEqBytes(enc(String(a)), enc(String(b)));
async function pbkdf2(pw, salt, iter) {
  const key = await crypto.subtle.importKey("raw", enc(pw), "PBKDF2", false, ["deriveBits"]);
  return new Uint8Array(await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations: iter, hash: "SHA-256" }, key, 256));
}
async function hashPw(pw) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  return `pbkdf2$100000$${b64u(salt)}$${b64u(await pbkdf2(pw, salt, 100000))}`;
}
async function verifyPw(pw, stored) {
  const p = String(stored || "").split("$");
  if (p.length !== 4 || p[0] !== "pbkdf2") return false;
  return ctEqBytes(await pbkdf2(pw, ub64u(p[2]), parseInt(p[1], 10) || 100000), ub64u(p[3]));
}
async function hmac(secretB64u, msg) {
  const key = await crypto.subtle.importKey("raw", ub64u(secretB64u), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return b64u(new Uint8Array(await crypto.subtle.sign("HMAC", key, enc(msg))));
}

/* ---------------- KV-backed store ---------------- */
const KV = (env) => env.ANALYTICS_KV || null;
const EMPTY_STATS = () => ({ total: 0, types: {}, pages: {}, tests: {}, exams: {}, langs: {}, daily: {}, recent: [], countries: {}, devices: {}, referrers: {} });
async function getStats(env) {
  const kv = KV(env); if (!kv) return EMPTY_STATS();
  return Object.assign(EMPTY_STATS(), (await kv.get("stats", "json")) || {}); // backfills new fields on old data
}
const putStats = (env, s) => KV(env) ? KV(env).put("stats", JSON.stringify(s)) : Promise.resolve();
const getCfg = (env, k) => KV(env) ? KV(env).get("config:" + k) : Promise.resolve(null);
const putCfg = (env, k, v) => KV(env) ? KV(env).put("config:" + k, String(v)) : Promise.resolve();
async function sessionSecret(env) {
  let s = await getCfg(env, "secret");
  if (!s) { s = b64u(crypto.getRandomValues(new Uint8Array(32))); await putCfg(env, "secret", s); }
  return s;
}
function bump(obj, key) {
  if (obj[key] != null) { obj[key]++; return; }
  if (Object.keys(obj).length < MAX_KEYS) obj[key] = 1; // ignore brand-new keys past the cap
}

async function trackEvents(env, events, meta) {
  if (!KV(env)) return { ok: false, storage: false };
  const s = await getStats(env);
  const day = new Date().toISOString().slice(0, 10);
  let n = 0;
  for (const e of (Array.isArray(events) ? events : [])) {
    if (n >= 50) break;
    if (!e || !ALLOWED_TYPES.has(e.type)) continue;
    const name = String(e.name == null ? "" : e.name).slice(0, 200).trim();
    if (!name) continue;
    s.total = (s.total || 0) + 1;
    bump(s.types, e.type);
    bump(s.daily, day);
    if (e.lang) bump(s.langs, String(e.lang).slice(0, 8));
    if (e.type === "pageview") {
      bump(s.pages, name);
      if (meta) {
        if (meta.country) bump(s.countries, meta.country);
        bump(s.devices, meta.device || "desktop");
        bump(s.referrers, meta.ref || "(direct)");
      }
    }
    else if (e.type === "test_start") bump(s.tests, name);
    else if (e.type === "exam_pick" || e.type === "exam_switch") bump(s.exams, name);
    s.recent.unshift({ ts: Date.now(), type: e.type, name, lang: e.lang || null });
    n++;
  }
  if (n) {
    s.recent = s.recent.slice(0, 40);
    const days = Object.keys(s.daily).sort();
    if (days.length > 130) for (const d of days.slice(0, days.length - 130)) delete s.daily[d];
    await putStats(env, s);
  }
  return { ok: true, n };
}

/* ---------------- auth ---------------- */
async function isConfigured(env) { return !!(env.ADMIN_PASSWORD || (await getCfg(env, "pw"))); }
async function signToken(env) {
  const body = b64u(enc(JSON.stringify({ exp: Date.now() + SESSION_MS })));
  return `v1.${body}.${await hmac(await sessionSecret(env), "v1." + body)}`;
}
async function verifyToken(env, token) {
  if (!token || typeof token !== "string") return false;
  const p = token.split(".");
  if (p.length !== 3 || p[0] !== "v1") return false;
  if (!ctEqStr(await hmac(await sessionSecret(env), "v1." + p[1]), p[2])) return false;
  try { return JSON.parse(dec(ub64u(p[1]))).exp > Date.now(); } catch { return false; }
}
async function checkLogin(env, password) {
  const lock = Number(await getCfg(env, "lock") || 0);
  if (Date.now() < lock) return { ok: false, error: "locked" };
  let valid = false;
  if (env.ADMIN_PASSWORD) valid = ctEqStr(password || "", env.ADMIN_PASSWORD);
  else { const h = await getCfg(env, "pw"); valid = h ? await verifyPw(password || "", h) : false; }
  if (!valid) {
    const f = Number(await getCfg(env, "fail") || 0) + 1;
    await putCfg(env, "fail", f);
    if (f >= 5) await putCfg(env, "lock", Date.now() + Math.min(15 * 60000, (f - 4) * 60000));
    return { ok: false, error: "invalid" };
  }
  await putCfg(env, "fail", 0); await putCfg(env, "lock", 0);
  return { ok: true };
}

/* ---------------- HTTP helpers ---------------- */
const J = (obj, status = 200, extra = {}) =>
  new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...extra } });
function cookieFrom(req) {
  const m = (req.headers.get("cookie") || "").match(new RegExp("(?:^|;\\s*)" + COOKIE + "=([^;]+)"));
  return m ? decodeURIComponent(m[1]) : null;
}
function setCookie(token, secure) {
  const f = ["Path=/", "HttpOnly", "SameSite=Strict", "Max-Age=" + Math.floor(SESSION_MS / 1000)];
  if (secure) f.push("Secure");
  return `${COOKIE}=${encodeURIComponent(token)}; ${f.join("; ")}`;
}
function clearCookie(secure) {
  const f = ["Path=/", "HttpOnly", "SameSite=Strict", "Max-Age=0"];
  if (secure) f.push("Secure");
  return `${COOKIE}=; ${f.join("; ")}`;
}
const readJson = async (req) => { try { return JSON.parse(await req.text()); } catch { return null; } };
function topList(obj, limit = 50) {
  return Object.keys(obj || {}).map((name) => ({ name, c: obj[name] })).sort((a, b) => b.c - a.c).slice(0, limit);
}

async function handleApi(req, env, url) {
  const path = url.pathname;
  const secure = url.protocol === "https:";

  if (path === "/api/track") {
    if (req.method !== "POST") return J({ error: "method" }, 405);
    const ua = req.headers.get("user-agent") || "";
    if (BOT_RE.test(ua)) return new Response(null, { status: 204 });
    const body = await readJson(req);
    let events = Array.isArray(body) ? body : (body && Array.isArray(body.events)) ? body.events : (body && body.type) ? [body] : [];
    // Cloudflare provides country per request (no IP stored). Device + external referrer host too.
    const country = ((req.headers.get("cf-ipcountry") || (req.cf && req.cf.country) || "") + "").toUpperCase().slice(0, 2) || null;
    const device = /ipad|tablet/i.test(ua) ? "tablet" : /mobile|android|iphone/i.test(ua) ? "mobile" : "desktop";
    let ref = null;
    try { const r = req.headers.get("referer"); if (r) { const h = new URL(r).host; if (h && h !== url.host) ref = h.slice(0, 80); } } catch {}
    try { await trackEvents(env, events, { country, device, ref }); } catch {}
    return new Response(null, { status: 204 });
  }

  if (path === "/api/admin/state") {
    const [configured, authed] = await Promise.all([isConfigured(env), verifyToken(env, cookieFrom(req))]);
    return J({ needsSetup: !configured, authed, storage: !!KV(env), envManaged: !!env.ADMIN_PASSWORD });
  }
  if (path === "/api/admin/setup") {
    if (req.method !== "POST") return J({ error: "method" }, 405);
    if (!KV(env)) return J({ ok: false, error: "no_storage" }, 503);
    if (await isConfigured(env)) return J({ ok: false, error: "already_configured" }, 400);
    const body = await readJson(req);
    if (!body || typeof body.password !== "string" || body.password.length < 8) return J({ ok: false, error: "weak" }, 400);
    await putCfg(env, "pw", await hashPw(body.password));
    await sessionSecret(env);
    return J({ ok: true }, 200, { "set-cookie": setCookie(await signToken(env), secure) });
  }
  if (path === "/api/admin/login") {
    if (req.method !== "POST") return J({ error: "method" }, 405);
    if (!(await isConfigured(env))) return J({ ok: false, error: "needs_setup" }, 400);
    const body = await readJson(req);
    const r = await checkLogin(env, body && body.password);
    if (!r.ok) return J({ ok: false, error: r.error }, r.error === "locked" ? 429 : 401);
    return J({ ok: true }, 200, { "set-cookie": setCookie(await signToken(env), secure) });
  }
  if (path === "/api/admin/logout") {
    return J({ ok: true }, 200, { "set-cookie": clearCookie(secure) });
  }
  if (path === "/api/admin/password") {
    if (req.method !== "POST") return J({ error: "method" }, 405);
    if (!(await verifyToken(env, cookieFrom(req)))) return J({ ok: false, error: "unauthorized" }, 401);
    if (env.ADMIN_PASSWORD) return J({ ok: false, error: "managed_by_secret" }, 403);
    const body = await readJson(req);
    if (!body || typeof body.next !== "string" || body.next.length < 8) return J({ ok: false, error: "weak" }, 400);
    const h = await getCfg(env, "pw");
    if (!h || !(await verifyPw(body.current || "", h))) return J({ ok: false, error: "invalid_current" }, 400);
    await putCfg(env, "pw", await hashPw(body.next));
    return J({ ok: true }, 200, { "set-cookie": setCookie(await signToken(env), secure) });
  }
  if (path === "/api/admin/stats") {
    if (!(await verifyToken(env, cookieFrom(req)))) return J({ error: "unauthorized" }, 401);
    const s = await getStats(env);
    return J({
      storage: !!KV(env),
      total: s.total || 0,
      byType: topList(s.types),
      pages: topList(s.pages),
      tests: topList(s.tests),
      exams: topList(s.exams),
      langs: topList(s.langs),
      countries: topList(s.countries),
      devices: topList(s.devices),
      referrers: topList(s.referrers),
      daily: Object.keys(s.daily || {}).sort().map((day) => ({ day, c: s.daily[day] })),
      recent: s.recent || [],
    });
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
