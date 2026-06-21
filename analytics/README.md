# PassRoute Analytics + Admin

First-party analytics ("which pages and tests are most clicked") with a password-protected admin
dashboard. No third-party trackers, no external database to provision, free on the Cloudflare
Workers Free plan.

## Status (built 2026-06-19)
- ✅ Worker API + embedded **SQLite Durable Object** storage (`src/worker.js`).
- ✅ Client tracker `pr-analytics.js` — auto pageview + auto-wraps `startTest` / `pick` /
  `switchExam`, so test-starts and exam-clicks are captured with **no edits to any engine**.
  Included on all 9 app pages and in the 6 app builders (so rebuilds keep it).
- ✅ Admin dashboard `/admin/` — first-run password setup, login, top pages / tests / exams,
  language split, daily activity chart, recent events.
- ✅ Tested end-to-end on real `workerd` (wrangler dev): tracking + bot-filter + validation,
  auth (setup / login / lockout / logout), stats aggregation, static serving untouched,
  worker source not publicly served. Client + admin-UI integration tests pass.

## How to use it
1. Deploy (push to `devMac` — the existing Cloudflare git integration runs `wrangler deploy`).
   The Durable Object + its SQLite table are created automatically by the `v1` migration; there is
   **nothing to set up in the Cloudflare dashboard**.
2. Visit **https://passroute.ai/admin/**. The first time, it asks you to **create an admin
   password** (min 8 chars). After that it's a normal login.
3. The dashboard shows, for a selectable date range (7 / 30 / 90 / 365 days): most-visited pages,
   most-started tests (e.g. `cdl:airbrakes:0`, `customs-broker:mock:0`), exam picks/switches,
   language breakdown, a per-day activity chart, and the most recent events.

## Architecture
```
browser ──(pageview / test_start / exam_pick / exam_switch)──▶ POST /api/track ─▶ Worker ─▶ Analytics DO (SQLite)
/admin/ (static) ──▶ /api/admin/{state,setup,login,logout,stats} ─▶ Worker ─▶ Analytics DO
everything else ─▶ env.ASSETS.fetch()  (the static site, unchanged — assets take precedence over the Worker)
```
- **Storage:** one `Analytics` Durable Object (singleton, `idFromName("global")`) with an embedded
  SQLite DB. Tables: `events(ts,day,type,name,lang,ref,dev)` and `config(k,v)`. Events older than
  ~400 days are pruned opportunistically.
- **Why a Durable Object and not D1/KV?** A SQLite-backed DO needs **zero provisioning** (no
  `database_id`, no dashboard step) and is **free** on the Workers Free plan (5 GB storage; free plan
  is excluded from SQLite-storage billing). It ships with the deploy.

## Auth & security
- Password is set on first `/admin` visit (PBKDF2-SHA256, 100k iterations, 16-byte random salt) and
  stored hashed in the DO. **Or** pre-seed/override it with a secret (see below).
- Sessions are HMAC-SHA256 signed tokens (12 h), in an `HttpOnly; Secure; SameSite=Strict` cookie.
  The signing secret is a 32-byte random value generated inside the DO on first run.
- Brute-force guard: after 5 failed logins, an escalating lockout (up to 15 min).
- Visitor privacy: tracking is first-party, sends **no cookies** (`credentials:"omit"`), stores **no
  IP and no PII** — only event type, a page/test key, language, referrer *host*, device kind
  (mobile/desktop), and timestamp. Known bots are filtered server-side.

### Set or reset the admin password via a secret (optional)
If you set the `ADMIN_PASSWORD` secret, it takes precedence over the first-run password — useful to
pre-seed it or to recover access if you forget the password you set in the UI:
```
cd PassRoute
npx wrangler secret put ADMIN_PASSWORD     # paste the password when prompted
```
While the secret is set, the in-UI "create password" flow is disabled and login checks the secret.

## Files
- `src/worker.js` — Worker router + `Analytics` Durable Object (track / auth / stats). Bundled via
  `wrangler.jsonc` `main`; excluded from public serving by `.assetsignore`.
- `pr-analytics.js` — client tracker (served to browsers; included on every app page).
- `admin/index.html` — the dashboard (static page; talks to `/api/admin/*`).
- `wrangler.jsonc` — adds `main`, the `ASSETS` binding, the `ANALYTICS` DO binding, and the `v1`
  migration. Static serving is unchanged (the Worker only runs for `/api/*`).
- `.assetsignore` — keeps `src/`, `wrangler.jsonc`, this `analytics/` dir out of public serving.

## Local dev / testing
Wrangler isn't committed (no `package.json` in the site root — keeps the deploy build-free). To run
locally, install it anywhere outside the repo and point it at this config:
```
npm i wrangler            # in a scratch dir, e.g. ../analytics-dev
../analytics-dev/node_modules/.bin/wrangler dev --port 8799 --persist-to /tmp/pr-state
```
Use `--persist-to` **outside** the repo so the DO's SQLite writes don't sit inside the watched
assets dir (`./`) and cause a reload loop. Test scripts used during the build:
`/tmp/pra-test.cjs` (client tracker), `/tmp/admin-it.cjs` (admin UI vs. the live server). When
testing `/api/track` with curl, send a browser `User-Agent` — curl's default UA is treated as a bot.
