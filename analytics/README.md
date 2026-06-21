# PassRoute Analytics + Admin

First-party analytics ("how many clicks, and which pages/tests are clicked") with a
password-protected admin dashboard. No third-party trackers. Free on the Cloudflare Workers plan.

## Status (built 2026-06-19)
- ✅ Worker API + **Cloudflare KV** storage (`src/worker.js`). KV is **not** SQLite and **not** a
  Durable Object — chosen because the original Durable Object could not be created by this project's
  deploy command (`wrangler versions upload` can't run DO migrations), and KV deploys cleanly and is
  free on the Workers Free plan.
- ✅ Client tracker `pr-analytics.js` — pageview on load + auto-wraps `startTest` / `pick` /
  `switchExam`, so test-starts and exam-clicks are captured with no edits to any engine. On all 9
  app pages + the 6 app builders.
- ✅ Admin dashboard `/admin/` — first-run password setup, login, **change password**, total clicks,
  most-visited pages, most-started tests, exam picks/switches, language split, daily chart, recent
  events.
- ✅ Tested end-to-end on real `workerd` (wrangler dev with KV): tracking + bot-filter + validation,
  auth (setup / login / lockout / logout / change-password), stats aggregation, static serving
  untouched, and `.assetsignore` blocking `.git` / worker source. Client + admin-UI tests pass.

## One-time setup (required to turn on storage)
KV needs a namespace. Create it once and put its id in `wrangler.jsonc`:
```
cd PassRoute
npx wrangler kv namespace create ANALYTICS_KV      # prints { binding = "ANALYTICS_KV", id = "..." }
```
or in the dashboard: **Storage & Databases → KV → Create namespace** (name it `passroute-analytics`),
then copy the **Namespace ID**. Put that id in `wrangler.jsonc`:
```jsonc
"kv_namespaces": [{ "binding": "ANALYTICS_KV", "id": "<your-namespace-id>" }]
```
Commit + push. Until the id is set, the API degrades gracefully (tracking no-ops; the admin page
shows "Storage not connected") and the static site is unaffected.

## How to use it
1. Visit **https://passroute.ai/admin/**. First time, **create an admin password** (min 8 chars).
2. The dashboard shows total clicks, most-visited pages, most-started tests
   (e.g. `cdl:airbrakes:0`, `customs-broker:mock:0`), exam picks/switches, language split, a daily
   activity chart (windowed by the range selector), and recent events.
3. **Change password** any time via the button in the dashboard header.

## Architecture
```
browser ──(pageview / test_start / exam_pick / exam_switch)──▶ POST /api/track ─▶ Worker ─▶ KV
/admin/ (static) ──▶ /api/admin/{state,setup,login,logout,password,stats} ─▶ Worker ─▶ KV
everything else ─▶ env.ASSETS.fetch()  (the static site, unchanged — assets take precedence)
```
- **Storage (KV keys):** `stats` = one JSON value `{ total, types, pages, tests, exams, langs, daily,
  recent }`; `config:pw` = PBKDF2 password hash; `config:secret` = HMAC session secret;
  `config:fail` / `config:lock` = brute-force guard. Counters are read-modify-write on the single
  `stats` value (1 read + 1 write per `/api/track` call).
- **Tradeoff vs SQLite:** KV is eventually consistent and has no atomic increment, so under heavy
  *simultaneous* traffic a few increments can be lost (counts are approximate at high concurrency),
  and the free plan allows ~1,000 writes/day. Fine for a growing site; if it gets very busy, move the
  counters to D1 or upgrade. Date-range filtering applies to the daily chart only; page/test/exam
  totals are all-time.

## Auth & security
- Password set on first `/admin` visit (PBKDF2-SHA256, 100k iters, random salt), stored hashed in KV.
  Or override/reset with the `ADMIN_PASSWORD` secret (`npx wrangler secret put ADMIN_PASSWORD`) —
  while set, first-run setup and in-app change-password are disabled and login checks the secret.
- Sessions: HMAC-SHA256 signed token (12 h) in an `HttpOnly; Secure; SameSite=Strict` cookie.
- Brute-force guard: 5 failed logins → escalating lockout (up to 15 min).
- Visitor privacy: first-party, **no cookies** (`credentials:"omit"`), **no IP, no PII** — only event
  type, a page/test key, language, device kind, and timestamp. Bots filtered server-side.

## Files
- `src/worker.js` — Worker router + KV store (track / auth / stats / change-password).
- `pr-analytics.js` — client tracker (served; on every app page).
- `admin/index.html` — the dashboard (static; talks to `/api/admin/*`).
- `wrangler.jsonc` — `main`, the `ASSETS` binding, and the `ANALYTICS_KV` KV binding.
- `.assetsignore` — keeps `.git`, `.wrangler`, `src/`, `wrangler.jsonc`, `analytics/` OUT of public
  serving. **Important:** providing this file replaces Cloudflare's built-in default ignores, so it
  must list `.git`/`node_modules` itself (an earlier version omitted `.git` and would have published
  the repo history).

## Local dev / testing
Wrangler isn't committed (no `package.json` at the site root → build-free deploy). Install it outside
the repo and run:
```
npm i wrangler            # in a scratch dir, e.g. ../analytics-dev
../analytics-dev/node_modules/.bin/wrangler dev --port 8799 --persist-to /tmp/pr-state
```
Use `--persist-to` **outside** the repo so KV/state writes don't sit in the watched assets dir (`./`)
and cause a reload loop. KV works locally in `wrangler dev` regardless of the namespace id. Test
scripts: `/tmp/pra-test.cjs` (client), `/tmp/admin-it.cjs` (admin UI vs. the live server). When
testing `/api/track` with curl, send a browser `User-Agent` (curl's default UA is filtered as a bot).
