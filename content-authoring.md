# Content authoring spec (for content agents) — Year 8 English

You are writing **one** topic for a Year 8 (age 12–13) English web app for a strong student at
Tanglin Trust School, Singapore (British curriculum, Cambridge Lower Secondary → IGCSE First
Language English / Literature foundations). The school's Year 8 course: **Term 1** Shakespeare
(extracts from *The Tempest*, *Hamlet*, *Romeo and Juliet*) with comprehension, descriptive writing,
analytical writing, script writing + commentary and a Public Speaking Competition; **Term 2** a
poetry collection themed around **Identity and Culture** with poetry writing + commentary,
analytical writing and **verbal (spoken) analysis of a poem**; **Term 3** a novel (various options)
with comprehension, analytical writing and **discursive writing**.

## Hard rules
1. **Write exactly two files**: `lib/topics/<id>.ts` and `lib/extras/<id>.ts` (both exist as
   placeholders — overwrite them). Do not touch any other file.
2. Topic file: `import type { Topic } from "../types";` and `export const <exportName>: Topic = { ... };`
   Extras file: `import type { TopicExtras } from "../types";` and `export const <exportName>Extras: TopicExtras = { ... };`
3. **Read first**: `lib/types.ts` (the contract — note the English additions `Passage`, `QuoteCard`,
   `ModelWriting`, `GuideSection.discovery`/`passage`, `MCQ.extract`, `QA.extract`, `Paper.passage`),
   `lib/topics/_example.ts` (shape + escaping) and `docs/ref/science-heat-topic.ts.txt` +
   `docs/ref/science-heat-extras.ts.txt` (a finished topic from the sister Science app: match its richness).
4. **Do NOT run `npm run build` / `next build`** (other agents share this folder). Check syntax with
   `npx tsc --noEmit --skipLibCheck --target es2020 --moduleResolution bundler --module esnext lib/topics/<id>.ts lib/extras/<id>.ts`
   and fix every error until it is clean.
5. `subject` must be exactly the value given in your task.

## Copyright rules (IMPORTANT)
- **Public domain — quote freely and print whole speeches/poems/extracts**: Shakespeare; any author who
  died before 1955 (e.g. Dickens, the Brontës, Austen, Stevenson, Conan Doyle, Wells, Kipling, Twain,
  Jack London, L. M. Montgomery, F. H. Burnett, Saki, Christina Rossetti, Wordsworth, Keats, Blake,
  Tennyson, Dickinson, Whitman, Paul Laurence Dunbar, Claude McKay, Rabindranath Tagore, Sarojini Naidu,
  Toru Dutt, Emma Lazarus, Edward Thomas, Wilfred Owen, W. B. Yeats (d.1939)). Quote them **accurately** —
  if you are not certain of the exact words, use a different passage you are certain of.
- **Copyrighted modern texts** (e.g. John Agard, Grace Nichols, Moniza Alvi, Sujata Bhatt, Imtiaz
  Dharker, Benjamin Zephaniah, Carol Ann Duffy, Seamus Heaney, Maya Angelou, Langston Hughes, modern
  novels such as *Wonder*, *Holes*, *The Boy in the Striped Pyjamas*): you may name them and discuss them,
  and quote **at most a short phrase (≤ 8 words) at a time**, never a full line run or stanza.
- **Original texts**: you are encouraged to write your own original poems, prose extracts, speeches and
  scripts for practice. Label them `source: "Original … written for this app"`. Make them genuinely good.

## Required content (fill EVERY field)
- `intro`: 2–3 motivating sentences.
- `guide`: **7–9 sections**. Each: unique kebab-case `id`, `heading`, a rich multi-paragraph `body`
  (`**bold**` key terms, blank lines between paragraphs, `- ` bullets; define every term the first time;
  give short examples inline), 2–4 `keyPoints`, a `thinkDeeper` prompt (make them reason/argue, not
  recall), and a **`discovery`** `{ problem, idea }` on at least 4 sections (a "try this first" task the
  student attempts before the explanation — e.g. "Read these two lines aloud and tap the beat. What do you
  notice?" — with `idea` revealing the insight). Put a `passage` on sections where a text is analysed.
  A `diagram` (inline SVG, backtick string) on **at least 3 sections** where a visual genuinely helps
  (e.g. the iambic heartbeat da-DUM ×5, a PEEL paragraph ladder, a plot/tension arc, a Globe Theatre
  cross-section, a family tree of Montagues/Capulets, a "zoom in on one word" connotation web, a
  sentence-structure diagram). SVG rules: `viewBox`, `xmlns="http://www.w3.org/2000/svg"`, `role="img"`,
  `aria-label`; no backticks or `${` inside; text ≥ 11px in viewBox units; keep it clean; add `diagramCaption`.
- `passages`: **2–5** key texts for the topic (whole speeches / poems / extracts) — see copyright rules.
  Use `\n` for line breaks; keep verse lineation.
- `quoteBank`: **8–14** `QuoteCard`s (for literature topics: the key quotations with technique + effect +
  theme; for skills topics: model sentences / famous examples with what makes them work).
- `modelWriting`: **2–4** annotated model pieces (e.g. a PEEL paragraph at a high level, a descriptive
  paragraph, a short scene of script + commentary paragraph, a speech opening, a discursive paragraph).
  These are what a top Year 8 answer looks like — make them excellent but age-appropriate.
- `mnemonics`: 2–4 genuinely helpful (e.g. PEEL, AFOREST, SMILE, TIPTOP, FANBOYS).
- `examMistakes`: 6–8 specific mistakes that lose marks in English assessments.
- `misconceptions`: 4–6 `{ wrong, right }`.
- `expertDebates`: 2–3 real interpretive debates (e.g. "Is Caliban a villain or a victim?").
- `realWorld`: 4–6 with `emoji`.
- `flashcards`: 12–16 `{ front, back }` (terms, quotations → speaker/meaning, techniques).
- `mustKnow`: 6–10 "can you…?" skill statements.
- `videos`: 3–4 **YouTube search URLs** (`https://www.youtube.com/results?search_query=...`) from channels
  like Mr Bruff, Mr Salles Teaches English, Stacey Reay, BBC Bitesize, Shakespeare's Globe, RSC, National Theatre.
- `quiz`: exactly **4 MCQ + 4 QA**.
- `questionBank`:
  - `mcqPapers`: **4 papers**, titled "MCQ Paper 1".."MCQ Paper 4", **20 questions each**.
  - `qaPapers`: **4 papers**, titled "Written Paper 1".."Written Paper 4", **12 questions each**.
  - For reading-heavy topics give some papers a `passage` (an extract the paper is built around) and/or
    put short `extract`s on individual questions. The student can't analyse what they can't see: if a
    question asks about specific lines, print them in `extract` or the paper `passage`.

## Question quality (this is what parents judge the app on)
- Mix question types: terminology, identify the technique, interpret meaning, analyse effect
  ("What does the word 'X' suggest?"), structure, context, character/theme, choose the best quotation
  to support a point, choose the best-written sentence/paragraph, punctuation/grammar fixes, spot the
  weakest analysis, compare, evaluate, and short creative tasks (write a sentence using X; rewrite this
  to show not tell; write a stage direction; write an opening line for a speech).
- Every MCQ: 4 plausible options, **exactly one defensibly correct** (in English, avoid questions where two
  readings are equally valid — make the key unarguable), `answerIndex` 0–3 (double-check it), a hint that
  nudges without giving it away, and an `explanation` saying why the right answer is right AND why the most
  tempting distractor is wrong. Vary the position of the correct answer across A–D.
- Every QA: `marks` 2–6 and **`marks` = number of `markScheme` points**; a `hint`; a full `modelAnswer`
  that would earn full marks (analytical answers use PEEL: point, embedded evidence, explanation of
  technique/connotation/effect, link to theme/purpose); a `markScheme` where each point has **4–8
  lower-case `keywords`** a real student might write for that point (synonyms, technique names, key
  words from the quotation) — the app credits a point if ANY keyword appears, so avoid over-generic
  keywords like "the" or "is"; and a `commonError`.
- Set `guideRef` on most questions to the `id` of the guide section it tests.
- Difficulty: roughly 30% warm-up, 50% core, 20% challenge (challenge = genuinely stretching for a strong
  Year 8: alternative interpretations, writer's purpose, evaluating effectiveness, linking context).
- Unique ids using the pattern in your task, e.g. `<prefix>-quiz-mcq-1`, `<prefix>-quiz-qa-1`,
  `<prefix>-mcq-p1-q01` … `<prefix>-mcq-p4-q20`, `<prefix>-qa-p1-q01` … `<prefix>-qa-p4-q12`.
- British English spelling (colour, analyse, realise). Accurate facts (dates, who-says-what, act/scene).
  **Every quotation must be attributed to the right character and scene.** If unsure, don't use it.

## Extras file (`lib/extras/<id>.ts`)
- `hook`: a 1–2 sentence curiosity hook.
- `didYouKnow`: 5–6 surprising, true facts (e.g. Shakespeare coined or first recorded ~1,700 words…
  phrase claims carefully: "is the first recorded user of").
- `experiments`: 2–3 at-home **activities** (use the Experiment shape: `title`, `emoji`, `materials`,
  `steps`, `science` = "why this works / what you learn"), e.g. "Perform a soliloquy three ways",
  "Found-poem from a newspaper", "Read a speech to your family and score it".
- `bonusDiagrams`: 1–2 extra inline SVGs if genuinely useful (optional).
- `interactive`: set to the widget key given in your task (if any).

Aim for genuinely useful, exam-style material a demanding parent would be proud to hand their child.
