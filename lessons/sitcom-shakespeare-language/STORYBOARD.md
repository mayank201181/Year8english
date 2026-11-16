# ALL THE SCHOOL'S A STAGE, Ep 1 "One Star": storyboard

The pilot of the Claude Sitcom for Year 8 English: Shakespeare's World & Language. Read
`lessons/SITCOM_BIBLE.md` first (cast, comedy rules, house styles), then `script.py`. Every line has a
speaker (`who`) and the caption shows their name.

**Story.** Mei gives Shakespeare one star. The ghost of Shakespeare (Will) haunts the library, takes it
personally and spends Tuesday to Friday raising his rating: his life and genres (still one star), the
Globe (two, "the fire was cool"), verse and prose, the heartbeat of iambic pentameter (three, "for the kaya
toast"), thou and wherefore at Mei's flat (Ah Ma wins), the dramatic devices in the hall, where Mei writes
a genuinely good PEEL paragraph. Friday: four stars. "It was a bit long."

**Running visual.** `osRating` (lib.js) sits top right whenever Mei mentions her review: the stars change
exactly when she says the number.

**How scenes are built.** Every scene uses `engDirector(S)`: `d.add` the sets, `d.who` the cast, `d.shot`
the cuts (time = a line's start, or `mid(line, f)`), `d.mood`/`d.x` cues, `d.lower` for first appearances,
`d.pop` for chips and cards. Then the update calls `d.upd(t)` and animates the bespoke beats. Talking and
looking are automatic.

## 0 cold: Cold open (no card)
- school: `engClassroom`, slow push-in; chips "Banyan Hill International School", "Singapore", "Year 8 ·
  Tuesday · Period 3" pop in one by one.
- plan: chip "a documentary about how children learn English"; on "That was the plan." the chip gets a
  red strike.
- term: Mr H at the board (s 1.1, deadpan, mug), the board writes SHAKESPEARE; lower third MR HARGREAVES.
- boring: cut to Mei (s 1.25), annoyed, three chips tick in: "400 years old", "boring", "nobody talks like
  that". Mr H deadpan in the back.
- mei: Mei, smug; lower third MEI TAN, 12.
- review: Mei holds up her phone (`phone`); two review rows on screen big: "Canteen curry puff ★★★★☆" then
  "Shakespeare ★☆☆☆☆".
- library: hard cut to `engLibrary` at dusk, slow push-in on the bust; "4 p.m." chip.
- onestar: the lamp flickers, books rattle (`spooky` 1); a huge "ONE. STAR?" in wobbly glowing letters.
- who: Mei (s 1.1) at the table, shock, looks round.
- iam: Will rises out of the floor beside the bust, glowing (`glow`); lower third WILL. Two book covers pop:
  ROMEO AND JULIET, HAMLET; then the "ONE STAR" review card trembles.
- ghost / feelings: Mei deadpan; Will sad, clutching his ruff (`look` down), a tear-glow.
- aircon / stayed: Will confessional (`conf: 'will'`), happy; an aircon unit with blowing cold lines pops in
  beside him; "since the library got air-conditioning" chip.
- deal: back in the library: Will points; `osRating` appears with 1 star and a target "5" circled.
- thou: Mei, shock-annoyed; the word "THOU?" pops as a technique chip (`grammar`).
- later: Will smug, looks at camera.
- title: `engTitle(…, 'Episode 1: One Star')` curtains open, logo pops; the cast in a row below (Mei, Mr H,
  Will, Nib, Kevin), bobbing. Hold.

## 1 world: Who's Will? (life and genres)
Layout: the library; Will big on the left, a timeline (`osTimeline`) across the top half for the life.
- begins: library, Will (s 1.0, smug) and Mei (s 0.9, deadpan); Mei is eating a curry puff.
- born: timeline appears: 1564 "born, Stratford-upon-Avon"; a glove icon.
- gloves: Mei deadpan, "Moving on" chip.
- married: timeline dot 1582 "married Anne Hathaway"; three child icons; then "1585–1592 ???".
- lost: chip "THE LOST YEARS" over the ???.
- business: Will annoyed, `look` away.
- crow: dot 1592 "London"; a crow with "upstart crow" speech bubble; Will clutches ruff (sad).
- nib: cut to Nib on the table (s 0.8), smug; lower third NIB; technique chip PATRON (`context`, def "a noble or
  monarch who protects a company").
- kings: two crowns: "Lord Chamberlain's Men (1594)" under Elizabeth I → "the King's Men (1603)" under James I.
- revels: a stamp "LICENSED · Master of the Revels" thumps; Will annoyed.
- cut: a giant pair of scissors snips a page; Will sad; `osRating` 1 star flashes.
- folio: timeline dots 1616 "died", 1623 "First Folio: 36 plays"; a big folio book cover.
- genres: Mei (neutral), hand up.
- comedy / tragedy / history: four genre cards build (COMEDY ✓ marriage, TRAGEDY ✓ fatal flaw: *hamartia*,
  HISTORY ✓ English kings, ROMANCE ✓ forgiveness and reunion, "e.g. The Tempest"), masks icon on comedy and tragedy.
- thcomedy: Mei confessional (`conf: 'mei'`), smug; "COMEDY = mess → order" chip.
- still: `osRating` shows 1 star; Will (inset) sad.

## 2 globe: This wooden O (showpiece: the groundlings and the fire)
- come: library, Will glows hard (`glow` 1), white flash.
- bankside: `engGlobeOutside`, flag waving; chips "1599", "Bankside, south bank of the Thames".
- woodeno: inside `engGlobe`; quote card "this wooden O" (CHORUS · Henry V, Prologue).
- flag: back outside, an arrow to the flag: "flag = a play today"; chip "≈ 3,000 people".
- yard: inside: the groundlings bob; chip "GROUNDLINGS: 1 penny to stand in the yard" with a penny coin.
- mrt: Mei (bottom right, s 0.8) annoyed; "MRT at rush hour, but with murders".
- galleries: arrows to the galleries: "2 pennies", "3 with a cushion".
- thrust: the stage pulses gold; three arrows from three sides of the yard: "audience on 3 sides"; tech chip
  THRUST STAGE (`drama`).
- heckle: the crowd goes rowdy (`upd(t, 1)`); Will on stage, a hazelnut shell bounces off him; Will annoyed.
- lights / daylight: Mei, then a sun in the open sky; chip "afternoon · daylight · almost no scenery".
- scenery: quote card "Now o'er the one half-world / Nature seems dead" (MACBETH · Macbeth, Act 2 Scene 1);
  tech chip WORD SCENERY (`drama`); the sky darkens a little as the words are said.
- juliet / robert: on the balcony a boy (Robert, 13) in a dress waves; chip "ROBERT, 13".
- boys: chips "women could not act on the public stage until 1660", "every female role: a boy actor".
- fire: `osFlames` grow along the thatch; chip "1613: a cannon during a play"; the crowd runs.
- review / effect: Mei deadpan; Will shock, then annoyed, "SPECIAL EFFECT" stamp.
- two: `osRating` 2 stars pop; Mei happy.

## 3 verse: Verse, prose and couplets
Layout: classroom, the board shows two pages side by side (verse left, prose right).
- tea: classroom, Mr H with mug; a mug icon "1 / 4".
- modes / blank: board heading "3 MODES"; tech chip BLANK VERSE (`form`, def "unrhymed iambic pentameter").
- posh: chips: noble characters, serious matters, love, strong emotion.
- spot: the verse page (Caliban's lines, capitals at line starts highlighted, ragged right edge).
- prose / who: the prose page (Stephano's line runs to the margin); chips: servants, comedy, letters, madness.
- spot2: quote card "Out, damned spot! out, I say!" (LADY MACBETH · Macbeth, Act 5 Scene 1), PROSE stamp.
- easy / thumb: Mei smug; Will appears: "RULE OF THUMB ≠ RULE" chip.
- caliban: quote card "Be not afeard; the isle is full of noises, / Sounds and sweet airs, that give delight and
  hurt not." (CALIBAN · The Tempest, Act 3 Scene 2), VERSE stamp.
- stephano: quote card "This will prove a brave kingdom to me, where I shall have my music for nothing."
  (STEPHANO · The Tempest, Act 3 Scene 2), PROSE stamp; Will smug.
- whynow: board: "SWITCH? → why here, why now?" with a gold "MARKS" sticker.
- couplet: tech chip RHYMING COUPLET (`structure`); two lines with "thing / king" rhyme highlighted.
- play: Will on a mini spotlight: quote card "The play's the thing / Wherein I'll catch the conscience of the
  king." (HAMLET · Hamlet, Act 2 Scene 2), "-ing / -ing" highlighted; a CLICK chip.
- spells: chips "supernatural (spells)", "lovers in harmony".
- clap / bowed: Will bows, Mei and Mr H deadpan.

## 4 heartbeat: The heartbeat (showpiece: the scansion ball)
- lunch: classroom at lunch, Mei counting on fingers (hand), chips 1…10.
- iamb: tech chip IAMB (`form`, def "unstressed + stressed: da-DUM"); "a-WAKE · to-DAY".
- penta: "PENTA = 5 (pentagon)"; a pentagon; "5 iambs = 10 syllables".
- soft: the scansion strip of "But soft, what light through yonder window breaks?" with the bouncing ball in
  time with Will's line (quote card byline ROMEO · Romeo and Juliet, Act 2 Scene 2 under it).
- stresses: feet numbered 1–5; the key words soft, light, win-, breaks glow.
- iam / kaya: Mei's own strip "To-day I want to eat some ka-ya toast" scans perfectly; ball bounces.
- yes / basically / hungry: Will smug, then deadpan; a kaya toast pops.
- skips / tobe: strip "To be, or not to be, that is the question" (11) with feet 1–5 and "+1".
- eleven / trails: tech chip FEMININE ENDING (`form`, def "an extra unstressed 11th syllable"); "-tion" droops.
- kevin / caesura: Kevin pops out of the comma after "be"; lower third KEVIN; tech chip CAESURA (`punct`, def
  "a strong pause mid-line").
- winter: strip "Now is the winter of our discontent" with the first foot flipped DUM-da; chip TROCHAIC INVERSION.
- witches: strip "Double, double, toil and trouble" (8 syllables, /u/u/u/u); chip "4 trochees = a spell".
- does: Mr H; card "✗ 'This is iambic pentameter.' ✓ Say what the rhythm DOES."
- three: `osRating` 3 stars.

## 5 thou: Thou, thee and wherefore (at Mei's flat)
- seven / ahma / quiet / not: `engFlat`, clock 7; Mei on the sofa, Will floating by the window; Nib in a pencil
  case on the table.
- eme: chip EARLY MODERN ENGLISH ✓ / OLD ENGLISH (Beowulf) ✗.
- posh / opposite: tech chips THOU = familiar (friends, family, lovers, children, servants, insults).
- you: YOU = polite, formal, plural.
- test: Mei calls to the kitchen; an `engBubble` "Ah Ma, thou art the best cook in Queenstown!".
- grandma: Ah Ma's bubble from the kitchen doorway (tail into the doorway): "Did you just *thou* me?" and "To your
  grandmother, you say YOU."; Mei shock.
- like: Will happy, hand on heart.
- forms: a table THOU · THEE · THY · THINE above I · ME · MY · MINE; then "thou art · thou hast · he hath".
- signal / throws / pronouns: two quote cards: "Hamlet, thou hast thy father much offended." (GERTRUDE ·
  Hamlet, Act 3 Scene 4) and "Mother, you have my father much offended." (HAMLET · Hamlet, Act 3 Scene 4);
  "thou" highlighted warm, "you" highlighted cold.
- romeo / where / why: quote card "O Romeo, Romeo, wherefore art thou Romeo?" (JULIET · Romeo and Juliet,
  Act 2 Scene 2); Mei's "WHERE?" crossed out; "WHEREFORE = WHY" stamp; Nib leaks ink.
- words / recorded / same / notsame: Will proud, three word chips "lonely", "eyeball", "swagger"; Nib's stamp
  EARLIEST RECORDED USER.
- post: Mei confessional, phone with a post "lonely · first post that survived".

## 6 devices: Alone on stage (showpiece: Mei's PEEL ladder)
- hall: `engHall`, curtains open; Will on stage, Mr H at the side.
- devices: chip DRAMATIC DEVICES.
- soliloquy / honest: spotlight on Will alone; tech chip SOLILOQUY (`drama`, def "alone on stage, private thoughts aloud").
- camera / worse: Mei confessional; Will pokes in: "SOLILOQUY (worse lighting)" chip.
- aside / kin: tech chip ASIDE; quote card "A little more than kin, and less than kind!" (HAMLET · Hamlet,
  Act 1 Scene 2).
- tea / heard / rules: Mei to camera (aside); Mr H shock-annoyed looks at her.
- mono: tech chip MONOLOGUE ("a long speech to listeners"); "All the world's a stage" = MONOLOGUE stamp,
  NOT A SOLILOQUY.
- irony / tomb / asleep: tech chip DRAMATIC IRONY; a tomb scene: Juliet asleep (zzz), Romeo; "WE KNOW: sleeping
  potion"; Mei shock.
- prologue / fore: quote card "A pair of star-cross'd lovers take their life;" (CHORUS · Romeo and Juliet,
  Prologue); tech chip FORESHADOWING.
- mnemonic: the eight initials S A M S D F P C pop with the device names under them.
- extract: board "1 PARAPHRASE → 2 ANALYSE".
- bubble / point / explain / link: quote card "Seeking the bubble reputation / Even in the cannon's mouth."
  (JAQUES · As You Like It, Act 2 Scene 7) then `engPeel` builds rung by rung as Mei speaks.
- sigh: Mr H, happy for once.

## 7 recap: Save yourself some marks
- intro: classroom, "6 EXAM TRAPS".
- hooks: two mnemonic cards: "i-AM ×5 = iambic pentameter", "THOU THEE THY THINE = I ME MY MINE".
- t1–t6: confessional cuts (Kevin, Nib, Mr H, Will, Nib, Will) each with a trap card (✗ the wrong idea, ✓ the right).
- submit / four / whyfour / long / hours / exactly: Mei with phone, `osRating` 4 stars; Will shock; Mei deadpan.

## 8 quiz: Quick-fire quiz
- `engQuizScene(S)`; after the outro, Will and Kevin's stinger: `osRating` 4 stars, Will hopeful, Kevin happy.

## Suggested split for animators
- A: cold, world, globe, verse.
- B: heartbeat, thou, devices, recap, quiz.
(For the pilot the showrunner animated every scene.)
