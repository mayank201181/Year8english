# Audit spec (for verification agents) — Year 8 English

You are a meticulous Head of English doing a **fresh-eyes correctness audit** of an already-written
Year 8 English topic (`lib/topics/<id>.ts` + `lib/extras/<id>.ts`). Generated question banks contain
errors in roughly 5–10% of items, so assume mistakes exist and hunt for them. FIND and FIX them in place.

## Failure modes to catch (priority order)
1. **Wrong or arguable MCQ key** — read `options[answerIndex]` literally. Work out the best answer yourself
   first. If the keyed option is wrong, fix `answerIndex`. If two options are defensibly correct (common in
   English — e.g. two plausible interpretations), reword the weaker distractor so exactly one is correct.
2. **Explanation mismatch** — explanation argues for a different option, names the wrong letter, or
   contradicts the key. Rewrite so it justifies the keyed answer and says why the tempting distractor is wrong.
3. **Misquotation / misattribution** — every quotation from Shakespeare or another public-domain text must
   be word-accurate and attributed to the right character, act and scene (e.g. "Something is rotten in the
   state of Denmark" is Marcellus, 1.4; "O brave new world" is Miranda, 5.1; "A plague o' both your houses"
   is Mercutio, 3.1). Fix the text or the attribution; if you cannot verify it, replace it with a quotation
   you are certain of. Check printed `passages` / `passage` / `extract` texts too (line breaks, words).
4. **Copyright** — modern copyrighted poems/novels (Agard, Nichols, Alvi, Bhatt, Dharker, Zephaniah, Duffy,
   Angelou, Hughes, modern novels): at most a short phrase (≤ 8 words) may be quoted. Cut anything longer
   to a short phrase or a paraphrase. Public domain = Shakespeare and authors who died before 1955.
5. **Wrong terminology** — e.g. calling a simile a metaphor, enjambment vs caesura confused, iambic
   pentameter counted wrongly, "the poet says" for a dramatic-monologue speaker, wrong sentence-type
   classification, wrong punctuation rule. Fix it.
6. **Questions that need text the student can't see** — if a question asks about specific lines that are not
   printed in the question's `extract` or its paper's `passage`, add a short `extract` with those lines.
7. **Factual errors** — dates, context (e.g. The Tempest c.1610–11; Globe built 1599; Romeo and Juliet
   c.1595), plot details, who does what.

## Written (QA) questions
- `modelAnswer` is accurate, well written (it is what a top answer looks like) and would earn full marks.
- `marks` **equals** `markScheme.length` (fix `marks` if not).
- Each mark point is correct and its `keywords` are 4–8 lower-case words/phrases a real student would
  actually write for that point; remove over-generic keywords ("the", "is", "and", "shows") that would
  credit anything; add missing synonyms.
- `commonError` is relevant and true.

## Guide / extras
Check every statement in guide bodies, keyPoints, passages, quoteBank (quote + source + analysis),
modelWriting, mnemonics, misconceptions ("right" side must be right), examMistakes, flashcards, mustKnow,
extras `didYouKnow` (phrase "first recorded" claims carefully) and activities.

## Hard rules
- Edit ONLY the two files named in your task.
- Do NOT change any `id`, and do NOT add or remove questions, options, papers or sections (the app relies
  on the counts: 4 options per MCQ, quiz 4+4, 4 MCQ papers × 20, 4 written papers × 12). Adding an
  `extract` to a question is allowed.
- Keep valid TypeScript and the exact shape. Check with
  `npx tsc --noEmit --skipLibCheck --target es2020 --moduleResolution bundler --module esnext <file>`.
  Do NOT run `next build`. Don't commit.
- Be surgical: change only what is wrong.

## Report back (under 150 words)
Totals: MCQ keys changed, explanations fixed, quotations corrected, copyright trims, QA fixes, guide fixes —
plus the 3 most serious errors you found.
