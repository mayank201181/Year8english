"""ALL THE SCHOOL'S A STAGE, episode 13 ("Read the Question"):
Teaches Reading Comprehension (lib/topics/comprehension.ts).

Question 4 — an exasperated four-mark exam question sheet — turns up in Room 8H in floods of
tears because Year 8 never reads line numbers, copies chunks under 'in your own words', and
writes 'makes the reader want to read on'. With Sherlock (a magnifying-glass detective), Mr H,
Will, Nib and Kevin, Mei learns the seven question types, skimming vs scanning, retrieval vs
inference, vocabulary in context, What-How-Why language analysis, structural shifts, fact vs
opinion, summary, and 'How far do you agree?' evaluation.
"""

META = {
    "name": "Read the Question",
    "kicker": "Claude Sitcom · Ep 13 · Reading Comprehension",
    "dek": "An exam Question turns up in Room 8H in tears because nobody ever reads as far as 'in your own words'. {chapters} scenes.",
    "gap": 0.32,
    "unit": "Scene",
    "lab": "comprehension",
    "kit": ["sitcom", "english"],
    "title": "Claude Sitcom Ep 13: Read the Question (Reading Comprehension)",
    "h1": "All the School's a Stage: Read the Question",
    "quiz_name": "Reading Comprehension",
}

CAST = {
    "narr":     {"voice": "bf_emma",   "speed": 0.96, "name": "Narrator"},
    "mei":      {"voice": "af_bella",  "speed": 1.04, "name": "Mei"},
    "mrh":      {"voice": "bm_lewis",  "speed": 0.92, "name": "Mr H"},
    "will":     {"voice": "bm_fable",  "speed": 0.9,  "name": "Will"},
    "nib":      {"voice": "bm_george", "speed": 0.9,  "name": "Nib"},
    "kevin":    {"voice": "am_puck",   "speed": 1.1,  "name": "Kevin"},
    "qmark":    {"voice": "bf_alice",  "speed": 1.02, "name": "Question 4"},
    "sherlock": {"voice": "bm_daniel", "speed": 0.95, "name": "Sherlock"},
}


def L(id, who, text, pause=0.0, say=None):
    line = {"id": id, "who": who, "cap": f"**{CAST[who]['name']}:** {text}", "pause": pause}
    line["say"] = say if say else text.replace("**", "")
    return line


CHAPTERS = [
    {
        "id": "cold", "title": "Cold open", "short": "Cold open", "card": False,
        "lines": [
            L("tues", "narr", "Tuesday. Room 8H. Mock reading papers have just come back.", 0.25,
              say="Tuesday. Room eight H. Mock reading papers have just come back."),
            L("mugs", "narr", "Mr Hargreaves is on mug twenty. Something on his desk is crying.", 0.35),
            L("sob", "qmark", "Nobody reads me! They read my first four words, panic, and start copying paragraph six!", 0.35),
            L("who", "mei", "Sir... why is **Question 4** sobbing on my curry puff napkin?", 0.28,
              say="Sir... why is Question four sobbing on my curry puff napkin?"),
            L("mrh", "mrh", "Because I wrote '**From lines 10 to 18, explain in your own words**', and half the class quoted line thirty-two.", 0.32,
              say="Because I wrote: From lines ten to eighteen, explain in your own words, and half the class quoted line thirty-two."),
            L("good", "mei", "Line thirty-two was a really good quote!", 0.25),
            L("zero", "qmark", "Wrong lines score **zero**! And you copied the text word for word! Look at my bold print: **OWN. WORDS.**", 0.35),
            L("will", "will", "Worse! The unseen extract was an article about Singapore **otters**. Where were the kings? Where were the **iambs**?", 0.35),
            L("nib", "nib", "Unseen **comprehension**, Will. Reading closely under pressure. Currently, Mei gives it **one star**.", 0.3),
            L("star", "mei", "Unfair! How am I supposed to know what the examiner wants?", 0.3),
            L("tell", "qmark", "I LITERALLY TELL YOU IN THE QUESTION!", 0.45),
            L("title", "narr", "All the School's a Stage. Episode thirteen: Read the Question.", 1.1),
        ],
    },
    {
        "id": "decode", "title": "Decode the question and beat the clock", "short": "Decode & time",
        "lines": [
            L("anat", "qmark", "Right. Look at me properly. Every question gives you **three clues** before you write a word.", 0.25),
            L("three", "mrh", "Clue one: **where to look**, like lines 10 to 18. Clue two: the **command word**. Clue three: the **marks**.", 0.3,
              say="Clue one: where to look, like lines ten to eighteen. Clue two: the command word. Clue three: the marks."),
            L("seven", "nib", "Every paper is built from **seven question types**. Learn the mnemonic: **R**eally **I**nquisitive **V**ictors **L**ove **S**olving **S**neaky **E**xams.", 0.32,
              say="Every paper is built from seven question types. Learn the mnemonic: Really Inquisitive Victors Love Solving Sneaky Exams."),
            L("list1", "qmark", "**Retrieval**: find facts on the surface. **Inference**: read between the lines. **Vocabulary**: explain a word in context.", 0.28),
            L("list2", "qmark", "**Language**: how words create effects. **Structure**: how the text is ordered. **Summary**: condense in your own words. **Evaluation**: judge how far you agree.", 0.32),
            L("marks", "mrh", "And **marks map to points**. Two marks? Give two brief points. Six marks for language? About **three developed points**.", 0.3),
            L("slow", "mei", "Okay, so I read every single word of the passage three times first?", 0.28),
            L("skim", "mrh", "No! Change gears. First, **skim** for the **gist**: title, opening, ending and first lines, to see what it's about.", 0.28),
            L("scan", "nib", "Second, **scan** for a target: sweep your eyes in tiny leaps called **saccades** to spot a date, name or number.", 0.3,
              say="Second, scan for a target: sweep your eyes in tiny leaps called sa-caydz to spot a date, name or number."),
            L("close", "mrh", "Third, **close-read** the named lines slowly for analysis, pencil in hand.", 0.28),
            L("clock", "kevin", "Watch the clock! Spend ten minutes reading, then **a mark a minute, a point per mark**!", 0.28),
            L("trap", "qmark", "Spend ten minutes polishing a two-mark question and you'll run out of time on Question eight. Don't break my heart.", 0.45),
        ],
    },
    {
        "id": "clues", "title": "On the lines and between them", "short": "Retrieve & infer",
        "lines": [
            L("lib", "narr", "Wednesday, the library. Question 4 has called in a specialist.", 0.3,
              say="Wednesday, the library. Question four has called in a specialist."),
            L("enter", "sherlock", "Sherlock. Magnifying glass. **Retrieval** finds what is **explicit** — written plainly on the lines.", 0.28),
            L("trap5", "sherlock", "Watch out for nearby traps. In **Monsoon**, Mei's mother told her to be home by **five**. 'Ten past' is the time **now**.", 0.3),
            L("own", "qmark", "And if I say **in your own words**, you must **paraphrase**. Never copy the writer's key phrase!", 0.28),
            L("sewer", "mei", "The otter article says the Singapore River was 'an open sewer'. Can I write 'an uncovered sewer'?", 0.3),
            L("stamp", "qmark", "BANNED! Reword the whole idea: **so polluted with waste that almost nothing could live in it**.", 0.32),
            L("infer", "sherlock", "Now **inference**: working out what is **implicit** — suggested between the lines.", 0.25),
            L("guess", "mei", "Oh, so guessing! Maybe Mei's brother Wei Jie was kidnapped by space pirates!", 0.32),
            L("leak", "nib", "Space pirates?! Inference is **deduction from textual clues**, darling, never wild invention.", 0.3),
            L("scrooge", "sherlock", "Look at Dickens on **Scrooge**: even **blind men's dogs** tugged their owners into doorways when he approached.", 0.28),
            L("deduce", "mrh", "**Point**: everyone dreads Scrooge. **Evidence**: 'tug their owners into doorways'. **Explain**: even animals sense his cruelty.", 0.3),
            L("oates", "will", "Or Captain Oates in Scott's **1912** journal, walking into a blizzard: 'I am just going outside and may be some time.'", 0.3,
              say="Or Captain Oates in Scott's nineteen twelve journal, walking into a blizzard: I am just going outside and may be some time."),
            L("under", "nib", "**Understatement**. Casual words hide deliberate self-sacrifice. We infer his courage from what he leaves unsaid.", 0.3),
            L("vocab", "sherlock", "Same trick for **vocabulary in context**. Jack London writes: 'an intangible **pall** over the face of things, a subtle gloom'.", 0.3),
            L("pall", "mrh", "The phrase next door explains the **denotation**: a dark covering. Its **connotation** — a cloth over a coffin — hints at **death**.", 0.45),
        ],
    },
    {
        "id": "language", "title": "What, How, Why: analysing language", "short": "Language",
        "lines": [
            L("thurs", "narr", "Thursday. Mei is tackling a six-mark language question on Scrooge.", 0.28),
            L("bad", "mei", "'Dickens uses a simile, solitary as an oyster, to create a vivid image and make the reader want to read on.' Done!", 0.32),
            L("ink", "nib", "My nib! I am leaking! '**Makes the reader want to read on**' says NOTHING! Every writer wants you to read on!", 0.35),
            L("whw", "mrh", "Use **What, How, Why**. **What**: a short embedded quote. **How**: the technique or word class. **Why**: the precise **effect**.", 0.3),
            L("why", "qmark", "The **Why** is where my marks live! Spotting 'simile' without explaining its effect is just **feature-spotting**.", 0.3),
            L("oyster", "will", "Unpack Dickens's simile: '**solitary as an oyster**'. What is an oyster like, child?", 0.28),
            L("shell", "mei", "Hard, rough shell... clamped tightly shut! So Scrooge locks himself away from human warmth.", 0.28),
            L("pearl", "will", "Aye! And **alternatively**, what hides inside an oyster? A **pearl** — hinting something precious still lies buried within him.", 0.32),
            L("zoom", "nib", "**Zoom in** on single words. Dickens writes that Scrooge's inner cold '**nipped** his pointed nose'.", 0.28),
            L("nip", "mei", "The verb '**nipped**' means pinched or bitten — like frostbite, and like a miser **pinching** every penny!", 0.3),
            L("list", "nib", "Then **zoom out** to patterns: the **present participles** 'squeezing, wrenching, grasping, scraping, clutching' pile up relentlessly.", 0.3),
            L("ext", "mrh", "And across the whole paragraph, frost, ice and winter form an **extended metaphor** of emotional coldness.", 0.28),
            L("stars", "mei", "Two stars. The pearl inside the oyster actually blew my mind.", 0.48),
        ],
    },
    {
        "id": "structure", "title": "Structure: follow the writer's camera", "short": "Structure",
        "lines": [
            L("trap", "qmark", "Warning! Question five says: **How has the writer structured the text to interest the reader?**", 0.28),
            L("para", "mei", "Easy! 'The writer uses paragraphs and punctuation, and also the metaphor silver curtain—'", 0.25),
            L("buzz", "qmark", "STOP! 'Silver curtain' is **language**! Analysing metaphors in a **structure** question scores zero!", 0.32),
            L("arch", "mrh", "Language is the **words**. Structure is the **architecture**: order, focus, pace, openings and endings.", 0.3),
            L("marley", "will", "Look at how Dickens opens: '**Marley was dead: to begin with.**' A blunt shock — then 'to begin with' **foreshadows** a ghost!", 0.32),
            L("cam", "sherlock", "Track the text like a **camera** from start to middle to end. Watch the passage **Monsoon**.", 0.28),
            L("wide", "mrh", "**At the start**, a **wide shot**: the whole sky over Toa Payoh holding its breath, establishing tension.", 0.28),
            L("mid", "nib", "**In the middle**, the focus narrows to Mei waiting, with **foreshadowing**: Wei Jie never broke a promise — 'not until today'.", 0.3),
            L("drop", "mrh", "Then a **close-up**: one fat raindrop landing on her wrist. Followed by a tiny **one-line paragraph**.", 0.28),
            L("minor", "mei", "'**Then another. Then a thousand.**' Two short **minor sentences** speed up the **pace** as the storm explodes!", 0.3),
            L("kevin", "kevin", "And nobody put me between them! Thank goodness! Two separate punches, not a comma splice!", 0.28),
            L("cliff", "sherlock", "**By the end**, one isolated line: '**It was not Wei Jie.**' A **cliffhanger** shifting tension from storm to stranger.", 0.3),
            L("cyc", "nib", "And if an ending echoes the opening — like the stubborn key in **Number 47** — call it a **cyclical structure**.", 0.45,
              say="And if an ending echoes the opening — like the stubborn key in Number forty-seven — call it a cyclical structure."),
        ],
    },
    {
        "id": "judge", "title": "Non-fiction, summary and evaluation", "short": "Summary & judge",
        "lines": [
            L("fri", "narr", "Friday. Non-fiction, summary and the big ten-mark evaluation question.", 0.28),
            L("nonfic", "mrh", "For **non-fiction** — articles, journals, speeches, travel writing — spot **form**, **audience**, **purpose** and **viewpoint**.", 0.3),
            L("check", "sherlock", "Separate **fact** from **opinion**: **Check it or Challenge it**. 'In **1977** the clean-up began' — you can **check** it. Fact!", 0.3,
              say="Separate fact from opinion: Check it or Challenge it. In nineteen seventy-seven the clean-up began — you can check it. Fact!"),
            L("chal", "mei", "'Otters are the **best news** our city has had in years' — someone with a koi pond could **challenge** 'best'. Opinion!", 0.3),
            L("scott", "nib", "Even if everyone agrees with Scott calling the South Pole 'an **awful** place', 'awful' is still a **judgement**, so it's an **opinion**.", 0.3),
            L("sum", "qmark", "For a **summary**: select relevant points, condense them **in your own words**, one point per mark. **No quotes, no language analysis!**", 0.32),
            L("eval", "mrh", "Finally, **evaluation**: '**How far do you agree?**' Those words '**how far**' are a gift — weigh **both** sides.", 0.3),
            L("task", "qmark", "Statement: 'Scott's journal is as much a **public message** as a **private diary**.' Climb the ladder, Mei!", 0.28),
            L("p1", "mei", "**Verdict**: I **largely agree** — it begins as a private log, yet is shaped for the nation to read.", 0.25),
            L("p2", "mei", "**Counter-view**: dated entries about gale winds and '**two cups of tea**' feel like practical survival notes.", 0.25),
            L("p3", "mei", "**Evidence for**: **However**, 'Should this be found' and praising Oates as 'an **English gentleman**' address future readers.", 0.28),
            L("p4", "mei", "**Link**: knowing '**our dead bodies must tell the tale**', Scott turns a tent diary into public testimony.", 0.3),
            L("tears", "qmark", "She read the question! She weighed both sides! These are **happy** tears! Full marks!", 0.48),
        ],
    },
    {
        "id": "recap", "title": "Save yourself some marks", "short": "Exam traps",
        "lines": [
            L("bell", "narr", "Before the bell, Room 8H's mark-saving checklist.", 0.28,
              say="Before the bell, Room eight H's mark-saving checklist."),
            L("hooks", "mei", "Memory hooks! Seven types: **Really Inquisitive Victors Love Solving Sneaky Exams**. Analysis: **What, How, Why**. Timing: **a mark a minute**. Facts: **Check it or Challenge it**.", 0.35),
            L("t1", "qmark", "One. Stay inside the **line numbers**! Evidence from the wrong paragraph scores **nothing**.", 0.28),
            L("t2", "nib", "Two. Never **feature-spot** or write 'makes the reader want to read on'. Marks come from the **specific effect**.", 0.28),
            L("t3", "sherlock", "Three. '**In your own words**' means genuine paraphrase — never recycle the writer's key words, and never guess without clues.", 0.3),
            L("t4", "mrh", "Four. In a **structure** question, track shifts in focus, zoom and pace — don't analyse metaphors or retell the plot.", 0.3),
            L("t5", "kevin", "Five. In a **summary**, no quotations and no language analysis! And watch the clock on one-mark questions!", 0.3),
            L("t6", "will", "Six. On '**How far do you agree?**', give a clear verdict like '**I largely agree, although...**' and include a counter-view.", 0.35),
            L("rev", "mei", "Reading Comprehension: **four stars**. Way easier once you actually read the question.", 0.32),
            L("four", "qmark", "Four stars out of five?! Show your evidence!", 0.28),
            L("long", "mei", "The passages are a bit long, lah.", 0.9),
        ],
    },
    {
        "id": "quiz", "title": "Quick-fire quiz", "short": "Quiz",
        "lines": [
            L("intro", "mrh", "Quick-fire quiz! Say each answer out loud before it appears.", 0.3),
            L("q1", "mrh", "What is the difference between **skimming** and **scanning**?", 4.0),
            L("a1", "mei", "**Skimming** reads quickly for the overall **gist**; **scanning** hunts for one **specific detail**."),
            L("q2", "mrh", "A question asks what a character's behaviour **suggests**. Which question type is that?", 4.0),
            L("a2", "sherlock", "**Inference** — reading between the lines using **clues** from the text."),
            L("q3", "mrh", "In Jack London's phrase 'an intangible **pall**', what does **pall** connote beyond darkness?", 4.0),
            L("a3", "nib", "**Death and funerals** — a pall is the cloth laid over a coffin, foreshadowing danger."),
            L("q4", "mrh", "Why does a **one-line paragraph** like 'It was not Wei Jie.' count as **structure**?", 4.0),
            L("a4", "qmark", "Because isolating a short sentence controls **pace** and **focus**, ending on a **cliffhanger**."),
            L("q5", "mrh", "Is 'This is an **awful** place' a **fact** or an **opinion**?", 4.0),
            L("a5", "kevin", "An **opinion**! Even if everyone agrees, '**awful**' is a judgement you can challenge, not check."),
            L("outro", "mrh", "Brilliant work. Now try the **Reading Comprehension** quiz in your English Lab.", 0.4),
            L("st1", "qmark", "And read every word of the question before you click!", 0.28),
            L("st2", "will", "Especially if it's about me.", 1.2),
        ],
    },
]
