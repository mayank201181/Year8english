# ALL THE SCHOOL'S A STAGE: series bible

The Claude Sitcom for Year 8 English. Sixteen animated mockumentary episodes (about 9–11 minutes, 8 scenes
each), one per topic in `lib/topics/_meta.ts`. Read this, then `lessons/engine/english.js` (the recurring
cast and props) and `lessons/EPISODE_WORKFLOW.md` (how an episode gets made). The pilot,
`lessons/sitcom-shakespeare-language/`, is the reference episode: copy its shape, its comedy rhythm and its
level of English detail.

**The audience.** A strong Year 8 student (12–13) at a British international school in Singapore, watching
while eating. FUNNY FIRST: if a twelve-year-old does not laugh at least once a minute, rewrite. EXACT
ALWAYS: every quotation word-perfect with speaker and act/scene, every term defined the way an IGCSE-track
English department defines it, every exam trap from the topic file. The jokes can be silly; the English
cannot be wrong.

## 1. Premise

A documentary crew is following Year 8 English at **Banyan Hill International School, Singapore** (fictional)
for a whole school year. Officially the film is about "how children learn English". Unofficially, the crew
has discovered that the English department is haunted, staffed and occasionally run by things that should
not be able to talk: the ghost of William Shakespeare in the library, a pompous fountain pen, an anxious
comma. They all talk to camera. Nobody else at school seems to notice, except Mei.

The title is a twist on "All the world's a stage" (Jaques, *As You Like It*, Act 2 Scene 7). Will reminds
people he wrote it.

**Tone.** *The Office* / *Abbott Elementary* talking heads + *Horrible Histories* energy. Warm, never mean.
Characters tease ideas, not people. Singapore is home, not a gimmick: hawker food, HDB flats, the MRT,
aircon, rain at 4 p.m., Ah Ma, kopi and teh, Fort Canning, the Merlion. Never mock an accent, a culture, a
religion or a family. Singlish, if any, is light and affectionate ("lah" once an episode at most, from Mei
or Ah Ma).

## 2. The recurring cast (in every episode)

Draw them with `engCast(parent, kind, o)`; mouths with `scTalk(S, t, who)`. Moods: neutral, happy, smug,
annoyed, sad, shock, deadpan. The `who` key in `script.py` is the `kind`.

| who | Character | Look (english.js) | Voice (Kokoro) | What they are for |
| --- | --- | --- | --- | --- |
| `narr` | **The Narrator**, the documentary's voice. Calm, dry, BBC-nature-documentary, studies Year 8 like meerkats. Never drawn. | — | `bf_emma`, 0.96 | Sets scenes ("Tuesday. Period 3."), states facts plainly, delivers the driest jokes. |
| `mei` | **Mei Tan**, 12. Clever, impatient, last-minute, honest to camera. Lives in an HDB flat in Queenstown with her parents and Ah Ma. Eats curry puffs in every scene she legally can. Writes star reviews of everything on her phone. | teal BH polo, black bob with fringe, yellow clip, round red glasses. Extras: `hand`, `phone` | `af_bella`, 1.04 | The audience. Asks the question the viewer is thinking, gets it slightly wrong, then gets it right. Ends most episodes with a review. |
| `mrh` | **Mr Hargreaves** ("Mr H"), Head of English. From Yorkshire, 23 years in Singapore, 23 mugs. Weary, kind, secretly delighted when anyone gets it. | bald, grey sides and beard, glasses on his head, tweed, maroon tie, lanyard. Extra: `mug` ("TO TEA OR NOT TO TEA") | `bm_lewis`, 0.92 | The exam voice. Owns the exam traps, the PEEL ladder and the word "Evidence?". Sighs before good news. |
| `will` | **Will**, the ghost of William Shakespeare (1564–1616). Has haunted the school library since it got air-conditioning ("I came for the theatre. I stayed for the aircon."). Vain, theatrical, wounded by reviews, actually brilliant. | pale blue glowing ghost, domed forehead, side hair, beard, gold earring, ruff, ghost tail. Extras: `quill`, `glow` | `bm_fable`, 0.9 | Context, quotations, the plays from the inside. Every Shakespeare quote is "his", so he can be smug about it. In poetry and novel episodes he is a jealous rival ("A *novel*? Where are the *iambs*?"). |
| `nib` | **Nib**, Mr H's fountain pen. Pompous, Latin-loving, monocle, believes every essay is beneath him. Leaks when shocked. | burgundy barrel, gold bands and nib, monocle, black moustache. Extra: `ink` | `bm_george`, 0.9 | The terminology police. Names every technique precisely and corrects near-misses ("It is *dramatic irony*, darling, not 'a plot twist'"). Presents the technique chips. |
| `kevin` | **Kevin**, a comma. Anxious, polite, always being put in the wrong place (comma splices are his nightmare). Breathes into a paper bag. Secretly the bravest of them. | indigo comma, round head, curled tail, stubby arms. Extras: `bag`, `sweat` | `am_puck`, 1.1 | Punctuation, grammar and pauses in every episode, even Shakespeare (caesura, lists, line ends). One "Kevin moment" per episode minimum. |

Occasional family (off-screen voice, never drawn; use `engBubble` from `engFlat`'s kitchen doorway, `g.door`):
**Ah Ma**, Mei's grandmother, `af_kore` 1.0: sharp, funny, loving, watches Chinese dramas, is never wrong.

**Guests** (each episode adds 2–4, drawn in the episode's `lib.js`): Prospero, Caliban, Ariel, Miranda;
Hamlet, the Ghost of Old Hamlet (Will is jealous: "I played him, you know"), Ophelia, Polonius; Romeo,
Juliet, the Nurse, Mercutio, Tybalt; a Semicolon (Kevin's cool older cousin), Full Stop (blunt), an
Apostrophe (forever misused on menus); an Unreliable Narrator; Ethos, Pathos and Logos as a boy band; a
Metaphor and a Simile who are not twins; a Thesaurus with no chill. Guests get lower thirds, a tinted
confessional (`ENG_TINT.<who> = [top, bottom]`) and a Kokoro voice from §8.

**Lower thirds** (first time a character appears in an episode): `engLower(root, kind)` for the recurring
cast (defaults in `ENG_CAST`), `scLowerThird(root, NAME, role)` for guests. The role line is a joke.

## 3. Sets (english.js)

| Set | Function | Use for |
| --- | --- | --- |
| `engClassroom` | Room 8H: whiteboard (`g.board`), Singapore windows, ceiling fan, Mr H's mugs (`g.setMugs(n)`), posters | Lessons, definitions on the board, Mr H's traps |
| `engLibrary` | dusk library, arched window, green lamp, SILENCE PLEASE sign, bust of Shakespeare | Will's home. Spooky entrances (`upd(t, spooky)`), quotation research |
| `engHall` | school hall stage, curtains (`g.curtain`), lectern, spotlight (`g.spot`) | Performances, public speaking, rehearsals, soliloquies |
| `engFlat` | Mei's HDB living room, laundry poles outside, Ah Ma's kitchen doorway | Homework at night, family comedy, Ah Ma |
| `engGlobe` | the Globe, 1599: thrust stage, pillars, heavens, galleries, groundlings (`g.crowd`) | Context, staging, audience, Will's past |
| `engGlobeOutside` | the Globe from the Thames, flag flying | "1599", "a play today", establishing shots |
| `engTitle` | red curtains, gold proscenium, show logo | The title card at the end of every cold open |
| `scConfessional` via `engConf(root, who)` | talking-head background tinted per character | Every confessional |

Episodes may add their own sets in `lib.js` (Prospero's island, Elsinore's battlements, a Verona street, a
hawker centre, an MRT carriage, a debate stage).

## 4. How English goes on screen

The screen must always show the English idea being spoken, big and exact. These are the house styles:

- **Quotations: the QUOTE CARD.** `engQuote(root, { text, who, where, hl })`. Parchment, rose quote marks,
  the quotation word-perfect (the topic file's wording; keep Shakespeare's punctuation), then
  `SPEAKER · Play, Act N Scene N`. Highlight the analysed words with `g.mark(k, p)` on the beat they are
  discussed. Never paraphrase on a quote card. Short quotations (one line) are best; at most about 25 words.
- **Techniques: the TECHNIQUE CHIP.** `engTech(root, 'SOLILOQUY', { kind, def })`: a luggage tag in its
  category colour with a one-line definition strip. Categories (`ENG_TECH`): `language` (metaphor, imagery,
  personification), `structure` (couplets, turning points, openings), `form` (verse, prose, sonnet, blank
  verse, free verse), `drama` (soliloquy, aside, dramatic irony, stage directions), `context`, `punct`,
  `grammar`. Nib usually "presents" chips.
- **Analysis: the MINI PEEL LADDER.** `engPeel(root, [P, E, E, L], { title })`: four rungs, top to bottom,
  built one rung per beat with `g.set(n)`. Use it at least once an episode, on a real exam-style question.
  The Evidence rung is a short embedded quotation in quote marks.
- **Metre: the SCANSION STRIP.** `engScan(root, syllables, { stress })` with a bouncing ball (`g.ball(x)`),
  stress marks (`g.marks`) and numbered feet (`g.feet`). Stressed syllables are rose.
- **Words on the board.** Definitions go on `engClassroom`'s board (`g.board`) in Mr H's marker colours.
- **Cards.** `engCard(root, text, { tab, icon })` for exam traps ("TRAP 3", ✗ wrong idea / ✓ right idea)
  and the quiz.
- **Stamps.** `engStamp(root, 'FIRST RECORDED USE')` thumps onto a claim. Nib's ruling stamps: VERSE,
  PROSE, ASIDE, NOT A SOLILOQUY.
- **Reviews.** `engReview` / `engStars`: Mei's running star rating.

Exact wording rules: British spelling; quotation punctuation as in the topic file; act and scene as
"Act 2 Scene 2" (no line numbers, editions differ); titles of plays and poems in the caption in plain text
(captions cannot italicise), on screen in the quote card's byline. Never invent a quotation. Never put
words in a real poet's mouth: modern copyrighted poems are quoted a phrase at a time, exactly as the topic
file gives them.

## 5. Running gags (use at least three per episode)

1. **Will and his reviews.** Will reads every review of himself. A bad one (Mei's stars, a groundling's
   rotten turnip) wounds him; he clutches his ruff and glows. Mei's star rating climbs through an episode as
   she starts to get it, and is never quite five ("It was a bit long.").
2. **"First RECORDED use, Will."** Will claims to have invented words ("swagger", "eyeball", "lonely").
   Nib stamps FIRST RECORDED USE: Shakespeare's plays are the earliest written use we have found, which
   is not the same as inventing them. Will: "Same thing." Nib: "It is not the same thing." (This is also
   exactly right, so it doubles as a lesson in precision.)
3. **Kevin in the wrong place.** Somebody puts Kevin where a full stop or a semicolon should be; he panics
   (`bag`, `sweat`). Once an episode he is used perfectly and is overwhelmed with gratitude.
4. **Mr H's mugs.** He has 23. Each episode one more appears on his desk (`setMugs`). He sighs before
   saying something positive. His catchphrase is "Evidence?"
5. **Nib's ink.** When someone says "Shakespeare is boring", "basically", or "the writer uses lots of
   techniques", Nib leaks (`ink: 1`).
6. **Talking heads are soliloquies.** Will cannot stand that the confessionals are "just soliloquies with
   worse lighting". Mei's asides to camera get noticed by the other characters only when it is funny.
7. **The library sign.** SILENCE PLEASE. Will is incapable of silence. In later episodes the sign has
   grown extra lines: "(this means you, Will)".
8. **The aircon.** Will came to Singapore for the theatre and stayed for the air-conditioning.

## 6. Comedy rules

- **Only the speaker's mouth moves**: every frame, every character on screen gets
  `c.set({ t, talk: scTalk(S, t, '<who>'), mood, look })`. Listeners look at the speaker (`look`
  -1..1) and change mood on the beat. Reactions sell the joke.
- **Pauses are punchlines.** A line with `pause` is followed by silence: hold a reaction there (a slow
  push-in on a deadpan face, Kevin blinking, Will glowing with hurt). Never put new information in a pause.
- **Rule of three, then break it.** List two serious things and a silly third.
- **Cut hard.** Sitcom cuts are instant (`engOn(t, a, b)`), 0.25 s fades at most. Confessionals cut in
  and out; the first appearance gets a lower third.
- **Specific beats generic.** "Curry puff" not "snack". "Period 3, Tuesday" not "a lesson".
- **The joke never contradicts the content.** If a character is wrong, someone corrects them on screen
  within two lines, and the correction is the exact exam wording.
- **Kind.** The class is never the butt of the joke; ideas and Will's ego are. Ah Ma always wins.
- **Each character keeps their voice.** Will speaks in grand, slightly archaic sentences and sometimes
  quotes himself; Nib in pompous terminology ("darling", "technically"); Kevin in short, worried
  sentences with too many pauses; Mr H in dry, tired, short ones; Mei in modern, quick, honest ones.

## 7. Episode shape (8 scenes, 9–11 minutes, 1,300–1,700 words)

| # | Chapter | id | Length | What happens |
| --- | --- | --- | --- | --- |
| 0 | Cold open | `cold` (`card: False`) | 45–70 s | A joke-first situation that sets up the topic's problem; the Narrator introduces the crew's day; ends on the title card `engTitle` "Episode N: <Title>". |
| 1–5 | Teaching scenes | one per guide section (merge small ones) | 60–100 s each | Each teaches its section's body, keyPoints and relevant mustKnow, with at least one quote card or technique chip and one confessional. One showpiece per scene. |
| 6 | Recap | `recap` (shows ★) | 60–80 s | The cast save you marks: the topic's mnemonics, then five or six exam traps from `examMistakes`, one per line, each spoken by the character it suits ("One: ..."). Then the story's payoff (Mei's review). |
| 7 | Quick-fire quiz | `quiz` (shows ?) | 60–75 s | `intro` "Quick-fire quiz! Say each answer out loud before it appears.", five `q`/`a` pairs (each `q` has `"pause": 4.0`), `outro` "Now try the <topic title> quiz in your English Lab." An optional stinger after the outro. Use `engQuizScene(S, o)`. |

Teaching scenes follow the guide's order. Every section's key points must be heard and seen. Weave in the
misconceptions (a character says the wrong idea, another corrects it), the mnemonics (in context and again
in the recap), a "did you know" fact or two from the extras, and a Singapore example where one fits
naturally.

## 8. Voices

Every line has a `who`; `make_audio.py` voices it from the episode's `CAST` dict. Copy this block into every
`script.py` and add the guests:

```python
CAST = {
    "narr":  {"voice": "bf_emma",   "speed": 0.96, "name": "Narrator"},
    "mei":   {"voice": "af_bella",  "speed": 1.04, "name": "Mei"},
    "mrh":   {"voice": "bm_lewis",  "speed": 0.92, "name": "Mr H"},
    "will":  {"voice": "bm_fable",  "speed": 0.9,  "name": "Will"},
    "nib":   {"voice": "bm_george", "speed": 0.9,  "name": "Nib"},
    "kevin": {"voice": "am_puck",   "speed": 1.1,  "name": "Kevin"},
    "ahma":  {"voice": "af_kore",   "speed": 1.0,  "name": "Ah Ma"},     # only when she speaks
}
```

Guest voices (pick distinct ones; British `b*` voices are read with en-gb, the rest with en-us):
`bm_daniel` (Prospero, Polonius, older men), `am_onyx` (deep: Caliban, the Ghost), `am_michael`, `am_eric`,
`am_fenrir`, `am_liam` (young men: Romeo, Hamlet, Mercutio, Tybalt), `bf_alice`, `bf_isabella`, `bf_lily`
(Juliet, Miranda, Ophelia, the Nurse), `af_aoede`, `af_nicole` (Ariel: airy), `af_sarah`, `af_nova`, `af_sky`,
`af_heart`. Avoid `am_adam`, `af_river`, `af_jessica` (weak quality) and the non-English voices.

Speeds: 0.86–1.15. Faster for excitable characters, slower for weary ones.

## 9. Pronunciation (check with the phonemizer before synthesising)

```bash
python3 -c "from kokoro_onnx.tokenizer import Tokenizer as T; print(T().phonemize('soliloquy', 'en-gb'))"
```

Already checked (put the respelling in `say`, keep the real word in the caption):

| Word | Kokoro's default | Say instead |
| --- | --- | --- |
| pentameter | PEN-ta-meeter (wrong) | `pen tammiter` ("iambic pen tammiter") |
| Juliet | jooli-ET (American) | `Jooliet` with British voices it is fine as `Juliet`; check per voice |
| Laertes | "lairts" (wrong) | `layerteez` |
| caesura | SEE-sura | `si zyoor uh` (or avoid: "a pause in the middle of the line") |
| Southwark | south-work | `Suthuck` |
| Tybalt | TIE-bolt | `Tibbalt` |
| Aiyoh | AY-yo | `eye-yoh` |
| da-DUM | fine | write `da-DUM` in both caption and `say` |
| HDB, MRT | fine as letters | `H D B`, `M R T` are safest |
| Act 2 Scene 2 | digits are risky | `Act two, Scene two` |
| 1564, 1616, 1599 | | `fifteen sixty-four`, `sixteen sixteen`, `fifteen ninety-nine` |
| thou, thee, thy, thine, doth, hath, wherefore, soliloquy, groundlings, Prospero, Caliban, Ariel, Ophelia, Horatio, Polonius, Mercutio, Capulet, Montague, Verona, Elsinore, Yorick, Sycorax, sonnet, enjambment, onomatopoeia, sibilance, juxtaposition | fine | |

Also: a sentence-initial word after a full stop can be misheard ("Aside" after a full stop can sound
like "A side"); keep such words mid-sentence. Old spellings ("o'er", "'tis", "ne'er") go in the caption
exactly; the `say` may expand them only if Whisper and a listener would both mishear them.

## 10. The look

- Stage 1200 × 750, chapter tag top-left (keep x < 560, y < 100 clear). Text ≥ 26 px (quote cards 34–44 px),
  ≥ 30 px from the edges, nothing over y 690 except lower thirds. Captions are below the stage.
- Recurring characters at s 0.9–1.3 in sets, about 1.5 in confessionals at (330–430, 400). Will is taller
  than the others (his tail): s 0.8–1.0 next to them. Nib and Kevin are about 330 px tall at s 1.
- Subject colours (the app's): Shakespeare rose `#F06A8A`, poetry violet `#B58CFF`, novel amber `#FFB547`,
  skills sky `#5AB4E0`. Use the topic's colour for its episode's accents (chips, title glows).
- No SVG filters, ≤ ~650 elements per scene, `rng(seed)` not `Math.random`, pure functions of time.

## 11. Workflow

See `lessons/EPISODE_WORKFLOW.md` for the exact briefs and commands. In short: the **scriptwriter** writes
`script.py` (META with `"kit": ["sitcom", "english"]`), `STORYBOARD.md`, the guest `lib.js`, makes and
checks the audio, writes the cold open, and splits the rest between **two animators**, who write and check
their scenes with contact sheets. Every episode ends with `build.py --variant app` and
`sitcom_index.py`.

## 12. Episode list (titles are suggestions; scriptwriters may improve them)

| Ep | Topic id | Title idea | Guests |
| --- | --- | --- | --- |
| 1 | shakespeare-language | One Star (the pilot) | groundlings, Ah Ma |
| 2 | the-tempest | The Isle Is Full of Noises | Prospero, Caliban, Ariel, Miranda |
| 3 | hamlet | To Be or Not to Be (Late) | Hamlet, the Ghost, Polonius, Ophelia |
| 4 | romeo-and-juliet | Two Households, One Group Chat | Romeo, Juliet, the Nurse, Tybalt |
| 5 | script-writing | Exit, Pursued by a Deadline | a Stage Direction, a Director |
| 6 | public-speaking | Friends, Romans, Year 8 | Ethos, Pathos and Logos (a boy band) |
| 7 | poetry-toolkit | Simile Is Not Like a Metaphor | Metaphor, Simile, Rhyme |
| 8 | identity-culture-poetry | Home Is Where the Kopi Is | Mother Tongue (a talking dictionary of two languages), Ah Ma |
| 9 | poetry-writing | Show, Don't Haiku | a Thesaurus, a Haiku |
| 10 | spoken-poem-analysis | Unseen, Unheard Of | a Microphone with stage fright |
| 11 | the-novel | Unreliable | an Unreliable Narrator, Chapter One |
| 12 | discursive-writing | On the Other Hand | On-the-One-Hand and On-the-Other-Hand (a double act) |
| 13 | comprehension | Read the Question | the Question (very upset nobody reads it) |
| 14 | descriptive-writing | It Was a Dark and Stormy Period 3 | an Adjective addict, the Five Senses |
| 15 | analytical-writing | Climbing the PEEL Ladder | a Quotation that hates being dropped in |
| 16 | spag | Let's Eat, Grandma | Semicolon, Full Stop, Apostrophe |
