"""ALL THE SCHOOL'S A STAGE, episode 6 ("Friends, Romans, Year 8"):
Teaches Public Speaking & Rhetoric (lib/topics/public-speaking.ts).

Rumour spreads that the canteen might replace curry puffs with plain rice cakes, so Mei enters the Year 8 Public
Speaking Competition. Her terrible opening ("Hello, my name is Mei...") summons Aristotle's rhetorical triad as a
three-piece band: Ethos (credibility), Pathos (emotion), and Logos (logic & evidence). With Mr Hargreaves, Will,
Nib and Kevin (who gets his heroic strategic pause!), they teach writing for the ear (GAP), speech structure
(hook, signpost, three points + counter-argument, call to action), DAFOREST and advanced rhetoric (tricolon,
anaphora, epistrophe, antithesis, hypophora), Lincoln at Gettysburg, Mark Antony, Henry V, Elizabeth I, and
vocal/physical delivery (the four Ps, cue cards, and competition nerves).
"""

META = {
    "name": "Friends, Romans, Year 8",
    "kicker": "Claude Sitcom · Ep 6 · Public Speaking & Rhetoric",
    "dek": "Mei enters the school Public Speaking Competition to save the canteen curry puff, backed by Aristotle's loud three-piece band. {chapters} scenes.",
    "gap": 0.32,
    "unit": "Scene",
    "lab": "public-speaking",
    "kit": ["sitcom", "english"],
    "title": "Claude Sitcom Ep 6: Friends, Romans, Year 8 (Public Speaking & Rhetoric)",
    "h1": "All the School's a Stage: Friends, Romans, Year 8",
    "quiz_name": "Public Speaking & Rhetoric",
}

CAST = {
    "narr":   {"voice": "bf_emma",    "speed": 0.96, "name": "Narrator"},
    "mei":    {"voice": "af_bella",   "speed": 1.04, "name": "Mei"},
    "mrh":    {"voice": "bm_lewis",   "speed": 0.92, "name": "Mr H"},
    "will":   {"voice": "bm_fable",   "speed": 0.9,  "name": "Will"},
    "nib":    {"voice": "bm_george",  "speed": 0.9,  "name": "Nib"},
    "kevin":  {"voice": "am_puck",    "speed": 1.1,  "name": "Kevin"},
    "ethos":  {"voice": "bm_daniel",  "speed": 0.96, "name": "Ethos"},
    "pathos": {"voice": "af_nova",    "speed": 1.04, "name": "Pathos"},
    "logos":  {"voice": "am_michael", "speed": 1.0,  "name": "Logos"},
}


def L(id, who, text, pause=0.0, say=None):
    line = {"id": id, "who": who, "cap": f"**{CAST[who]['name']}:** {text}", "pause": pause}
    line["say"] = say if say else text.replace("**", "")
    return line


CHAPTERS = [
    {
        "id": "cold", "title": "Cold open", "short": "Cold open", "card": False,
        "lines": [
            L("crisis", "narr", "Wednesday. School hall. Emergency: the canteen committee is considering replacing curry puffs with plain rice cakes.", 0.3),
            L("enter", "mei", "I've entered the **Public Speaking Competition**. I wrote six pages! Listen:", 0.25),
            L("bad", "mei", "Hello, my name is Mei, and today I am going to talk to you about snacks...", 0.35),
            L("sigh", "mrh", "You have lost the judges in four seconds, and you are hiding behind A4 paper.", 0.3,
              say="You have lost the judges in four seconds, and you are hiding behind A four paper."),
            L("chord", "ethos", "Hold the lectern! Did someone call for **rhetoric** — the ancient art of persuasion?", 0.3),
            L("band", "pathos", "We're **Aristotle's Triad**! Formed in Greece, **4th century BC**, still topping the charts!", 0.3,
              say="We're Aristotle's Triad! Formed in Greece, fourth century B C, still topping the charts!"),
            L("math", "logos", "Statistically, eighty-seven per cent of crowds fall asleep during 'today I am going to talk about'.", 0.3),
            L("jealous", "will", "Why does a Greek boy band get a spotlight?! My soliloquies get fluorescent tubes!", 0.35),
            L("review", "mei", "Current speech: **one star**. Curry puff survival odds: grim.", 0.45),
            L("title", "narr", "All the School's a Stage. Episode six: Friends, Romans, Year 8.", 1.1,
              say="All the School's a Stage. Episode six: Friends, Romans, Year eight."),
        ],
    },
    {
        "id": "triad", "title": "Writing for the ear & Aristotle's triad", "short": "Ethos, pathos, logos",
        "lines": [
            L("ear", "mrh", "Rule one: a speech is written for the **ear**, not the eye. Listeners hear each sentence **once**, at your speed.", 0.28),
            L("gap", "nib", "Pin down **GAP** before you write: **Genre**, **Audience**, and **Purpose** — to persuade, inform, inspire, or commemorate.", 0.28),
            L("short", "mrh", "So mix **short punchy sentences** with longer ones, repeat key ideas, and address the room as '**you**' and '**we**'.", 0.28),
            L("eth", "ethos", "Now meet the **rhetorical triangle**! I am **Ethos**: character and **credibility**. Why should the audience trust *you*?", 0.28),
            L("eth2", "ethos", "Build ethos through experience, fairness, and honesty — like **Malala Yousafzai** arguing at the UN that 'one book and one pen' can change the world.", 0.3,
              say="Build ethos through experience, fairness, and honesty, like Malala Yousafzai arguing at the U N that one book and one pen can change the world."),
            L("pat", "pathos", "I am **Pathos**: **emotion**! Pity, pride, outrage, hope — stirred through **emotive language** and vivid personal stories!", 0.28),
            L("log", "logos", "And I am **Logos**: **logic** and **evidence**! Facts, statistics, clear examples, and step-by-step cause and effect.", 0.28),
            L("kairos", "nib", "Held together by **Kairos**: choosing the right words for the **right moment** and occasion.", 0.25,
              say="Held together by Kigh-ross: choosing the right words for the right moment and occasion."),
            L("lie", "mei", "Wait — isn't rhetoric just a posh word for lying and manipulating people?", 0.28),
            L("neutral", "mrh", "No. The tools are neutral. Blend all three appeals honestly, and explain **how** each one moves the listener.", 0.45),
        ],
    },
    {
        "id": "structure", "title": "Structuring a speech that holds a room", "short": "Speech structure",
        "lines": [
            L("hstc", "logos", "Every winning speech follows one skeleton: **Happy Speakers Thrill Crowds** — **Hook, Signpost, Three points, Close**!", 0.3),
            L("hook", "pathos", "First twenty seconds: the **hook**! Open with a **rhetorical question**, a startling **statistic**, a bold claim, or a short **anecdote**.", 0.28),
            L("tryhook", "mei", "Put your hand up if a warm, crispy curry puff has ever saved your Tuesday. Keep it up if a rice cake tastes like cardboard!", 0.32),
            L("sign", "logos", "Better! Step two: **signposting** — a roadmap for listeners who can't flip back a page. 'I have three reasons: heritage, price, and joy.'", 0.3),
            L("three", "nib", "Step three: **three points** — the **rule of three**, or **tricolon**, guided by **discourse markers** like 'Firstly' and 'Finally'.", 0.28,
              say="Step three: three points — the rule of three, or try-koh-lon, guided by discourse markers like Firstly and Finally."),
            L("counter", "ethos", "And include a **counter-argument** and **rebuttal**! Raise their objection — 'Some say fried pastry is unhealthy' — then answer it fairly.", 0.3),
            L("close", "mrh", "Step four: the **close**. Give a specific **call to action** using **imperatives**: 'Sign the petition. Vote tomorrow.'", 0.28),
            L("cycle", "nib", "Then **circle back** to your opening hook — a **cyclical structure** — and land one memorable line before 'Thank you'.", 0.3),
            L("two", "mei", "Bye-bye 'Hello my name is'. Speech rating: **two and a half stars**!", 0.45),
        ],
    },
    {
        "id": "devices", "title": "DAFOREST, Lincoln & power devices", "short": "Rhetorical toolkit",
        "lines": [
            L("lib", "narr", "Lunchtime. Library. Nib is drilling persuasive devices.", 0.25),
            L("dafor", "nib", "Start with **DAFOREST**: **D**irect address, **A**necdote, **F**acts, **O**pinions, **R**hetorical questions, **E**motive language, **S**tatistics, **T**riplets.", 0.3),
            L("anaph", "pathos", "Now level up! **Anaphora** repeats words at the **start** of clauses — like Martin Luther King's 'I have a dream' or Greta Thunberg's 'How dare you'!", 0.3,
              say="Now level up! Uh-naff-uh-ruh repeats words at the start of clauses — like Martin Luther King's I have a dream or Greta Thunberg's How dare you!"),
            L("epist", "nib", "**Epistrophe** repeats at the **end**; **antithesis** balances opposites side by side; **hypophora** asks a question and immediately answers it!", 0.3,
              say="Eh-piss-truh-fee repeats at the end; an-tith-uh-sis balances opposites side by side; high-poff-uh-ruh asks a question and immediately answers it!"),
            L("hyper", "mei", "So if I say a mountain of rice cakes taller than the Marina Bay Sands, that's **hyperbole** — deliberate exaggeration?", 0.28),
            L("spotf", "nib", "Precisely, darling! Never just name a device: write **Device + Quotation + Effect on the listener**.", 0.28),
            L("linc", "logos", "Need proof that shorter beats longer? **Gettysburg, 1863**. The main speaker talked for **two hours**. **Abraham Lincoln** spoke for **two minutes** — about 270 words!", 0.32,
              say="Need proof that shorter beats longer? Gettysburg, eighteen sixty-three. The main speaker talked for two hours. Abraham Lincoln spoke for two minutes — about two hundred and seventy words!"),
            L("past", "mrh", "Lincoln moves cleanly from **past** ('Four score and seven years ago') to **present** war to **future** freedom.", 0.28),
            L("note", "ethos", "Listen to his **antithesis**: 'The world will little note, nor long remember what we say here, but it can never forget what they did here.'", 0.3),
            L("people", "nib", "And his closing **tricolon** with **epistrophe**: 'government **of the people, by the people, for the people**'.", 0.35,
              say="And his closing try-koh-lon with eh-piss-truh-fee: government of the people, by the people, for the people."),
        ],
    },
    {
        "id": "antony", "title": "Mark Antony & rallying the troops", "short": "Antony & monarchs",
        "lines": [
            L("globe", "will", "Enough modern amateurs! To Rome — **Julius Caesar**, Act 3 Scene 2! Brutus has killed Caesar and calmed the crowd in **prose**.", 0.3,
              say="Enough modern amateurs! To Rome — Julius Caesar, Act three, Scene two! Brutus has killed Caesar and calmed the crowd in prose."),
            L("brutus", "logos", "Brutus uses clean **antithesis** and logos: 'Not that I loved Caesar less, but that I loved Rome more.' Then he leaves!", 0.3),
            L("ears", "will", "Fatal mistake! **Mark Antony** steps up in **blank verse**: '**Friends, Romans, countrymen**, lend me your ears; I come to **bury** Caesar, not to **praise** him.'", 0.32),
            L("irony", "nib", "Antony promised not to blame Brutus, so he uses **verbal irony** — repeating 'For Brutus is an **honourable** man' beside proof that Caesar cared for Rome!", 0.32),
            L("weep", "pathos", "Caesar wept for the poor! Refused the crown thrice! By the fifth '**honourable**', praise has curdled into pure **sarcasm**!", 0.3),
            L("coffin", "will", "Then Antony weeps: 'My heart is in the coffin there with Caesar, / And I must pause till it come back to me' — letting the crowd persuade itself!", 0.3),
            L("henry", "will", "Compare two battle rallies! My **Henry V** uses urgent **imperatives** and animal imagery: 'Once more unto the breach, dear friends, once more' and 'Stiffen the sinews'!", 0.3,
              say="Compare two battle rallies! My Henry the Fifth uses urgent imperatives and animal imagery: Once more unto the breach, dear friends, once more, and Stiffen the sinews!"),
            L("eliz", "ethos", "While **Elizabeth I** at **Tilbury** in **1588** uses a bold concession and **antithesis**: 'I have the body but of a weak and feeble woman; but I have the heart and stomach of a king'!", 0.32,
              say="While Elizabeth the First at Tilbury in fifteen eighty-eight uses a bold concession and an-tith-uh-sis: I have the body but of a weak and feeble woman; but I have the heart and stomach of a king!"),
            L("p1", "mrh", "On the exam, climb **PEEL**: **Point** — Antony turns the crowd using repetition that becomes **verbal irony**.", 0.25),
            L("p2", "mei", "**Evidence** & **Explain**: placing '**honourable**' beside 'Caesar hath wept' makes the word sound hollow without breaking his promise.", 0.28),
            L("p3", "mei", "**Link**: Shakespeare shows rhetoric's dangerous power to steer a crowd while letting them think they chose it themselves!", 0.45),
        ],
    },
    {
        "id": "delivery", "title": "Voice, body & competition nerves", "short": "Voice & delivery",
        "lines": [
            L("hall2", "narr", "Period 5. Final rehearsal in the hall.", 0.25,
              say="Period five. Final rehearsal in the hall."),
            L("stress", "mrh", "Delivery is half the battle. Change which word you **stress** in 'I never said she stole my money' and you get **seven** different meanings.", 0.3),
            L("fourp", "ethos", "Master the **four Ps** of voice! **Pace**: around 130 to 150 words per minute — about **420 words** for three minutes. Over time? **Cut** lines, don't rush!", 0.3,
              say="Master the four Ps of voice! Pace: around one hundred and thirty to one hundred and fifty words per minute — about four hundred and twenty words for three minutes. Over time? Cut lines, don't rush!"),
            L("proj", "pathos", "**Projection**: breathe from your diaphragm to the back wall without shouting! **Pitch**: vary intonation — no flat **monotone** and no rising **uptalk**!", 0.3),
            L("pause", "kevin", "And the best P: **Pause**! Even Mark Antony paused mid-speech! Stop **before** your key line for suspense, and **after** so it sinks in!", 0.3),
            L("kevtry", "mei", "Two hundred curry puffs... gone.", 0.9),
            L("kevjoy", "kevin", "She paused! Two whole seconds! Nobody spliced me! Best day of my life!", 0.32),
            L("body", "mrh", "Body: sweep **eye contact** like a lighthouse, use open **gestures**, stand **grounded**, and hold small **keyword cue cards**, never a full script.", 0.3),
            L("nerves", "logos", "Heart pounding? That's adrenaline! Breathe **four in, six out**, relabel 'scared' as '**excited**', and remember the **illusion of transparency**: you look calmer than you feel!", 0.32),
            L("four", "mei", "Judges check content, structure, delivery, engagement, and timing. Ready! **Four stars**!", 0.45),
        ],
    },
    {
        "id": "recap", "title": "Save yourself some marks", "short": "Exam traps",
        "lines": [
            L("intro", "narr", "Before Mei takes the microphone: six public-speaking traps.", 0.25),
            L("mnem", "mei", "Hooks! **GAP**; **Ethos, Pathos, Logos, Kairos**; **Happy Speakers Thrill Crowds**; **DAFOREST**; and the **four Ps**: Pace, Pause, Projection, Pitch!", 0.3,
              say="Hooks! GAP; Ethos, Pathos, Logos, Kigh-ross; Happy Speakers Thrill Crowds; DAFOREST; and the four Ps: Pace, Pause, Projection, Pitch!"),
            L("t1", "pathos", "One. Never waste your opening on 'Hello, my name is...'. Start with a **hook**!", 0.28),
            L("t2", "nib", "Two. Don't feature-spot! Use **Device + Quotation + Effect on the listener**.", 0.28),
            L("t3", "logos", "Three. Don't mix up the appeals: **ethos** is trust, **pathos** is emotion, **logos** is logic and evidence.", 0.28),
            L("t4", "will", "Four. '**Friends, Romans, countrymen**' is spoken by **Mark Antony**, not Julius Caesar — Caesar is in the coffin!", 0.3),
            L("t5", "mrh", "Five. Don't write an essay and call it a speech: use **signposting**, **direct address**, and a **call to action**.", 0.28),
            L("t6", "kevin", "Six. Use **keyword cue cards**, pause around key lines, and never rush over the time limit!", 0.32),
            L("win", "narr", "4:15 p.m. The canteen keeps the curry puffs.", 0.3,
              say="Four fifteen p m. The canteen keeps the curry puffs."),
            L("rev", "mei", "Public speaking: **four and a half stars**. Deducting half because Will tried to speak for two hours like Edward Everett.", 0.35),
            L("brief", "will", "Hamlet is four hours, and every syllable is gold!", 0.8),
        ],
    },
    {
        "id": "quiz", "title": "Quick-fire quiz", "short": "Quiz",
        "lines": [
            L("intro", "mrh", "Quick-fire quiz! Say each answer out loud before it appears.", 0.3),
            L("q1", "mrh", "Which of Aristotle's appeals relies on the speaker's **credibility and character**?", 4.0),
            L("a1", "ethos", "**Ethos** — why the audience should trust *you*!"),
            L("q2", "mrh", "Repeating a phrase at the **start** of successive clauses is called what?", 4.0),
            L("a2", "nib", "**Anaphora** — whereas **epistrophe** repeats at the end.", say="Uh-naff-uh-ruh — whereas eh-piss-truh-fee repeats at the end."),
            L("q3", "mrh", "Who says '**Friends, Romans, countrymen, lend me your ears**', and in which play?", 4.0),
            L("a3", "will", "**Mark Antony**, in **Julius Caesar**, Act 3 Scene 2!", say="Mark Antony, in Julius Caesar, Act three, Scene two!"),
            L("q4", "mrh", "Why does Mark Antony keep calling Brutus '**an honourable man**'?", 4.0),
            L("a4", "mei", "**Verbal irony**! Placed beside evidence of Caesar's goodness, it sounds more sarcastic each time without breaking his promise."),
            L("q5", "mrh", "What are the **four Ps** of vocal delivery?", 4.0),
            L("a5", "kevin", "**Pace, Pause, Projection, and Pitch**! Especially Pause!"),
            L("outro", "mrh", "Brilliant work. Now try the **Public Speaking & Rhetoric** quiz in your English Lab.", 0.4,
              say="Brilliant work. Now try the Public Speaking and Rhetoric quiz in your English Lab."),
            L("st1", "kevin", "Wait... everybody hold a dramatic pause...", 1.1),
            L("st2", "kevin", "Nailed it.", 1.1),
        ],
    },
]
