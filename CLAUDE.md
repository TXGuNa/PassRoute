# PassRoute — Project Rules & Requirements

PassRoute is a static, multilingual practice-test web app hosted at **passroute.ai**.
This file records the **non-negotiable rules** the project must always follow. Read it before
making any change to questions, translations, or the app.

## Architecture (multi-vertical, 50-state)
This repo (`PassRoute/`) **is the whole site root**. Three verticals share one engine + design system:
- `/home/` → **homepage chooser** (`home/index.html`): a 5-language landing page with three cards
  (CDL / DL / US Citizenship) + a state selector (for CDL & DL). Picking a card sets `pr_exam`
  (+`pr_state`) and routes into the app. **First-time** visitors to `/` are redirected here.
- `/` → **CDL app** (`index.html`). Boot routing: a deep link (`?v=`/`?cat=`) or cached
  `pr_exam==='cdl'` renders CDL; `pr_exam==='dl'`→`/dl/`, `'civ'`→`/citizenship/`, none→`/home/`.
  Header **exam switcher** offers DL, US Citizenship, and 🏠 All exams (homepage); **state selector**
  (all 50) always available. (The legacy inline onboarding overlay still exists but is no longer the
  entry path — `/home/` is.)
- `/dl/` → **DL app** (`dl/index.html` + `dl/dl-data.js` + `dl/dl-signs.js`) — regular driver license.
  `dl-signs.js` adds inline SVG road signs (STOP/YIELD/…) + image-based sign-recognition questions in
  the Road Signs Learning Test. Its OWN hub; landing-gen does NOT write a static `/dl/index.html`.
- `/citizenship/` → **US Citizenship app** (`citizenship/index.html` + `citizenship/citizenship-data.js`):
  the official USCIS civics test (2008 version), 3 subjects (Government / History / Symbols & Holidays),
  65 questions × 5 languages, practice + learn lessons. Federal (NO state selector); volatile
  current-officeholder/state-specific items are intentionally omitted (noted on the home screen).
- `/cdl/...` and `/dl/*.html` → SEO landing pages (built by `content-engine/landing-gen.cjs`).
- `/states-meta.js` → **shared 50-state metadata** (agency, CDL+DL handbook, appointment & apply URLs)
  loaded by CDL, DL, and the homepage. Real researched official .gov URLs.
- All apps share `localStorage` (same origin): `pr_exam`, `pr_state`.
- Build tools live in `../content-engine/` (NOT in this repo): `import-dl.cjs` writes `dl/dl-data.js`;
  `build-dl.cjs` assembles `dl/index.html`; `build-citizenship.cjs` assembles `citizenship/index.html`
  (both reuse CDL's `<style>` from `/tmp/cdl-style-block.html`); `import-learn.cjs` builds `learn.cdl.js`.
  `learn.cristcdl.js` appends 180 extra handbook-accurate learn questions (20/subject, 5 langs, ORIGINAL
  wording modeled on cristcdl coverage — not verbatim) via `gen-cristcdl-workflow.cjs` (multi-agent gen)
  + `assemble-cristcdl.cjs` (dedup/validate); loaded right after `learn.cdl.js`.
- Learning tests are split into numbered "Lesson N" sized to each subject's real exam question count
  (General 50, Air Brakes 25, others 20/30) — every unique question shown once across a subject's lessons.
- State-awareness: federal CDL subjects are shared and restated per state (`stz()`); CDL Special
  Requirements is **hidden** for states without their own question bank; DL question bodies stay
  Texas-based (honestly labeled) with a per-state handbook/appointment banner.

## Stack & files
- Static single-page app, **no build step**. Served as-is.
- `index.html` — app shell, all CSS + JS (engine, router, render functions).
- `questions.js` — `window.CDL_DATA` (core categories + questions, EN).
- `translations.js` — `window.I18N` (UI + category + question translations TR/RU).
- `endorsements.js` — optional endorsement categories (HazMat, Tanker, Doubles/Triples,
  Passenger, School Bus) + their TR/RU translations. Loaded after translations.js.
- `Texas-CDL-Study-Guide.pdf` — downloadable study guide.
- Hosting: Cloudflare Worker (static assets, `wrangler.jsonc` → `assets.directory:"./"`) +
  GitHub auto-deploy. Domain passroute.ai on Cloudflare nameservers.

## Source of truth
1. **The official Texas CDL Handbook (DL-7C) is the single source of truth.** Every answer,
   number, and explanation must match the handbook — NOT the PDF study guide, NOT general
   knowledge, NOT other states. When in doubt, verify against the handbook / official Texas DPS.
2. Known handbook values to keep correct: total stopping distance at 55 mph ≈ **419 ft**;
   cargo first-check within **50 miles**; low-air warning at **60 psi**; governor **cut-out ≈ 125 psi**,
   **cut-in ≈ 100 psi** (single values, NOT a range); safety valve opens at **150 psi**;
   ABS required on tractors built on/after **March 1, 1997** (other vehicles/trailers 3/1/1998).
3. `handbook` (quote) and `hbref` (§ref) fields are **always English** and are never translated.

## Question quality rules (apply to EVERY category, including endorsements)
1. **Every question must be UNIQUE** — no duplicate or near-duplicate questions within or across
   tests of a category. Same goes for the concept being tested; vary the angle.
2. **Balanced, short options.** All four options similar in length and style. The **correct answer
   must NOT stand out** — never make it the longest, the only full sentence, the only exact date,
   the only range, or otherwise format-different from the distractors. Distractors must share the
   correct answer's format (all years, all psi values, all ranges, etc.).
3. **Easy → hard ordering.** Questions are stored easiest-first; the engine presents them in pool
   order so each test ramps from simple to difficult.
4. **Variety of question types:** include some "A, B, C correct → D = All of the above",
   some "which is NOT / which is false", some "which is TRUE", plus straightforward recall.
5. Each question object: `{q, options[4], answer (0–3 index), explanation, handbook, hbref}`.
   The `answer` is the index into the **English** options; TR/RU option arrays must be in the
   **same order** so the index stays correct in every language.
6. Reference style/coverage modeled on cristcdl.com/texas and official Texas DPS material.

## Languages (i18n)
1. Three languages: **EN (default), RU, TR**. A dropdown selects language; the active language is
   hidden from the menu, the others shown.
2. **Translate EVERYTHING** the user sees (UI, category names/blurbs, questions, options,
   explanations, roadmap, CLP guide) **EXCEPT** handbook quotes, PDFs, and external links.
3. After any EN question change, update the matching TR and RU entries (same index, same option
   order). Validate that all three languages stay answer-aligned.

## Engine behavior
1. Per-category numbered practice tests; each test draws `examSize` questions from the pool.
2. **Option positions are shuffled every attempt** so positions can't be memorized — EXCEPT
   "All/None of the above" style options, which are **pinned last**. The pinning works by index
   detected from English and applies identically to TR/RU.
3. **Pass mark = 80%** of `examSize` per test. Track best score / pass-fail per test.
4. **Timer:** each test is timed; results show how long it took (and average per question).
5. **Score history / statistics** are saved (localStorage) and shown on a stats page.
6. localStorage keys: progress `tx_cdl_progress_v2`, theme `tx_cdl_theme`, lang `tx_cdl_lang`,
   history `tx_cdl_history`.

## Roadmap
1. Title "Your Class A CDL roadmap" shows three groups:
   - **1 · Knowledge tests** — rich cards (tests count, questions each, pass %, progress, status)
     for the 4 required Class A categories: TX Special Requirements, General Knowledge,
     Air Brakes, Combination Vehicles.
   - **2 · Skills tests (in person at DPS)** — pre-trip inspection, basic control skills, on-road
     driving, plus a note on third-party testers, what to bring, CLP held 14 days, ~2–3 hours.
   - **3 · Optional endorsements** — HazMat (H), Tanker (N), Doubles/Triples (T), Passenger (P),
     School Bus (S), each a real practiceable category (20 tests, 80% pass).
2. A category shows "In progress" once **any** test is attempted (passed or failed), "Ready" once
   the readyTarget number of tests is passed, "Mastered" when all are passed.
3. Endorsement categories are `endorsement:true`, `classA:false` — excluded from the required
   "Class A ready" count and the overall progress ring.

## CLP application guide
Step-by-step guidance must stay accurate and translated: DOT physical, forms (CDL-1/CDL-4/5/10),
DPS appointment, what to bring; official links left untranslated.

## Workflow when editing questions
1. Make the EN change in `questions.js` / `endorsements.js`.
2. Mirror it in TR and RU (same index + option order).
3. Run the node validation: load the data, check every question has 4 options, valid answer index,
   TR/RU option counts match, no duplicate questions, easy→hard order, balanced option lengths,
   and 3-language answer alignment.
4. Tell the user to `git add -A && git commit && git push` to deploy.

## Google AdSense — publisher & ad slots
- **Publisher ID:** `ca-pub-5005909536075464` (in `index.html` head, landing pages, FAQ, and `ads.txt`).
- **Ad unit slots** (use these instead of any `0000000000` placeholder):
  - **Horizontal** (in-content banner): `3385282635` — use in content breaks, results screen, FAQ.
  - **Square** (rectangle): `3161921352` — use as a second in-content unit.
  - **Vertical** (skyscraper): `2432464479` — place ONLY in a fixed right-side rail shown at
    `min-width:1440px` (hidden below, so it never breaks the centered single-column layout).
- Rules: max 2–3 units per page, never next to answer/next buttons, never timer-refreshed.
  In the SPA, ads refresh only on genuine `pushState` navigation (results screen).

## Analytics & Admin (Cloudflare Worker)
The site is served by a Worker (`wrangler.jsonc` → `main: src/worker.js`) that **only** handles
`/api/*`; static assets take precedence, so the site is served exactly as before. Full details in
`analytics/README.md`.
- **Storage = Cloudflare KV** (binding `ANALYTICS_KV`). NOT SQLite, NOT a Durable Object — the DO was
  abandoned because this project's deploy command is `wrangler versions upload`, which can't run DO
  migrations (the deploy failed in 0s). KV deploys cleanly and is free on the Workers Free plan.
  Counts live in one `stats` JSON value; password hash + session secret in `config:*` keys.
  **Requires a one-time KV namespace id in `wrangler.jsonc`** (`npx wrangler kv namespace create
  ANALYTICS_KV`); until set, the API degrades gracefully (storage off) and the site is unaffected.
- **Tracking:** `pr-analytics.js` (on every app page; emitted by the app builders too) sends a
  pageview on load and auto-wraps the existing globals `startTest` / `pick` / `switchExam` — so
  test-starts and exam-clicks are tracked with **no engine edits**. POSTs to `/api/track`
  (bot-filtered, no cookies, no PII).
- **Admin:** `/admin/` — password set on first visit (or `ADMIN_PASSWORD` secret), **changeable in the
  panel**, PBKDF2 hash + HMAC session cookie, brute-force lockout. Dashboard: total clicks, top
  pages/tests/exams, language split, daily chart, recent events.
- **`.assetsignore`** excludes `.git`, `.wrangler`, `src/`, `wrangler.jsonc`, `analytics/`. NOTE:
  providing this file REPLACES Cloudflare's default ignores, so it must list `.git`/`node_modules`
  itself (omitting `.git` would publish the repo history).
- **Local test:** `wrangler dev --persist-to <dir outside the repo>` (avoids an asset-watch reload
  loop); send a browser `User-Agent` to `/api/track` (curl's default UA is filtered as a bot).
