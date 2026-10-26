# AccountEasy (MVP, English + Khmer)

Interactive accounting learning app. Plain HTML/CSS/JavaScript, no install or build step.

## Run it
1. Unzip the folder.
2. Double-click `index.html` (works offline in Chrome, Edge, Firefox, Safari).
   Optional local server: `python3 -m http.server 8000` then open http://localhost:8000

## Files
- `index.html`  page shell (sidebar, top bar)
- `css/styles.css`  navy / white / green theme, dark mode, responsive
- `js/data.js`  ALL content: translations, lessons, questions, exercises, simulator transactions, flashcards
- `js/app.js`  app logic (views, quiz engine, journal checker, simulator, flashcards, progress)

## What works
- Dashboard, Learning Paths, Lessons, Practice, Quiz Center, Simulator, Flashcards (+ Glossary tab), My Progress, Bookmarks, Settings, global search
- EN / ខ្មែរ switch (top bar) and light / dark theme
- 7 full lessons (Levels 1-3), 22 questions with explanations (MC, true/false), mastery check per lesson, exam mode with timer
- Journal practice (7 exercises): checks accounts, sides AND amounts, not just that debits = credits
- Simulator: 10 transactions, journal, ledger, trial balance, income statement, balance sheet
- Flashcards with spaced repetition (boxes: again / 1 / 3 / 7 / 14 days)
- Weak-topic detection (under 60% after 3+ answers) drives the "recommended" lesson
- Achievements are computed from real activity only

## Honest limitations
- Progress is saved in this browser only (localStorage). No accounts, no cloud sync.
- Only Levels 1-3 are written (7 lessons). Levels 4-7 are listed as "coming soon".
- No AI tutor yet (needs a backend to keep an API key secret). Nothing fake is shown in its place.
- Simulator records sales without cost of goods sold, to keep the MVP simple (noted in the transaction explanation).
- Weekly chart shows clearly-labelled SAMPLE data until you study; study time counts every minute the tab is visible.
- Khmer text was written by me; please have a Khmer speaker proofread the accounting terms.

## Add content
Edit `js/data.js`: add a lesson to `DATA.lessons` (and its id to a path in `DATA.paths`), a topic to `DATA.topics`, questions with `Q(...)`. Every text is `{en, km}`.
