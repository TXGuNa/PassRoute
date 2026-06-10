# PassRoute — Texas CDL Class A Practice

A static, multilingual (EN / RU / TR) practice-test web app for the Texas
Class A CDL knowledge exams: **Special Requirements, General Knowledge,
Air Brakes, Combination Vehicles**. Instant answers with handbook-cited
explanations, pass/fail tracking, and a step-by-step CLP guide.

Live: https://passroute.ai

## Files
- `index.html` — the app (UI, test engine, i18n, theme)
- `questions.js` — English question bank (193 questions)
- `translations.js` — EN/RU/TR interface + question translations
- `Texas-CDL-Study-Guide.pdf` — downloadable study guide

It is 100% static — no build step, no server. Just these files served as-is.

## Deploy (Cloudflare Pages + GitHub)
1. Push this repo to GitHub.
2. Cloudflare → Workers & Pages → **Create → Pages → Connect to Git** → pick this repo.
3. Build settings: **Framework preset: None · Build command: (empty) · Build output directory: `/`**
4. Deploy. Every `git push` to `main` redeploys automatically.

## Local preview
Open `index.html` in a browser (keep all files in the same folder).
