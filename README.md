# Year 8 English Lab

**▶ Live app: https://year8english.vercel.app**

An interactive Year 8 English course mapped to the Tanglin Middle School curriculum (Cambridge Lower Secondary / IGCSE foundations), covering **Shakespeare**, **Poetry: Identity & Culture**, **The Novel**, and **Reading, Writing & Speaking Skills**.

## Features
- **16 complete curriculum topics** across Term 1 (Shakespeare: *Shakespeare's World & Language*, *The Tempest*, *Hamlet*, *Romeo and Juliet*, *Script Writing & Commentary*, *Public Speaking & Rhetoric*), Term 2 (Poetry: *How Poems Work*, *Poems of Identity & Culture*, *Writing Poetry & Commentary*, *Unseen Poems & Spoken Analysis*), Term 3 (*Reading the Novel*, *Discursive Writing*), and All-Year Core Skills (*Reading Comprehension*, *Descriptive Writing*, *Analytical Writing*, *Grammar, Punctuation & Vocabulary*).
- **All the School's a Stage (Claude Sitcom)** — 16 narrated, animated mockumentary episodes (~9–11 minutes each, multi-voice Kokoro TTS with captions, scene tracking, star rewards, and quick-fire quizzes) set at Banyan Hill International School, Singapore.
- **Interactive Explorables** — hands-on widgets on every topic's Interactive tab (scansion & metre tapping, connotation zoom, island power & perspective explorer, Hamlet delay decoder, dramatic tension graphs, script formatting, Aristotle's rhetoric meter, poetic device spotting, poem forge, dual-identity voice lab, unseen poem cold-read studio, narrative perspective lens, argument scales, comprehension question decoder, sensory show-don't-tell studio, PEEL paragraph builder, and sentence/comma-splice mixer).
- **Illustrated Study Guides** — public-domain extracts and speeches, annotated quotation banks, annotated model writing, inline SVG diagrams, mnemonics, common exam traps, misconceptions, critical debates, real-world connections, hands-on activities, and flashcards.
- **Practice & Self-Assessment** — a Quick Quiz per topic (4 MCQ + 4 written), a full Question Bank per topic (4 MCQ papers × 20 + 4 written papers × 12), timed Challenges, spaced-repetition Review, and a cross-topic **Big Exam** (4 MCQ papers + 4 written papers).
- **Progress, Profiles & AI Tutor** — multi-learner profiles, stars, streaks, certificates, parent dashboard, and Professor Quill AI hints/explanations.

## Tech
Next.js (App Router) + TypeScript + Tailwind CSS. Progress is saved per learner to Vercel Blob (with a `localStorage` cache for offline use). Deployable to Vercel.

## Develop
```bash
npm install
npm run dev
```

Run checks:
```bash
npm test
npm run lint
npm run build
```
