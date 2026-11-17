"""ALL THE SCHOOL'S A STAGE, episode 11 ("Unreliable"): Reading the Novel.
Teaches Reading the Novel (lib/topics/the-novel.ts).

Term 3 arrives in Room 8H with a heavy thud: the class novel. Will is horrified ("A NOVEL? Three
hundred pages of PROSE? Where are the iambs?!"). Worse, two rival narrators move into Banyan Hill:
Shady, an Unreliable Narrator in a trenchcoat whose speech bubbles blatantly contradict what is
happening right behind him, and Lady Omni, an Omniscient Narrator floating in a cloud with brass
binoculars who reads everyone's secret thought bubbles. Using Dickens, Brontë, Stevenson and Burnett,
Mei masters narrative perspective, STEAL characterisation, foils and arcs, setting and pathetic
fallacy, Freytag's pyramid and pacing, themes/motifs/symbols, and whole-novel PEEL paragraphs.
"""

META = {
    "name": "Unreliable",
    "kicker": "Claude Sitcom · Ep 11 · Reading the Novel",
    "dek": "Term 3 brings three hundred pages of prose, Will is outraged by the lack of iambs, and a narrator in a trenchcoat lies to the camera. {chapters} scenes.",
    "gap": 0.32,
    "unit": "Scene",
    "lab": "the-novel",
    "kit": ["sitcom", "english"],
    "title": "Claude Sitcom Ep 11: Unreliable (Reading the Novel)",
    "h1": "All the School's a Stage: Unreliable",
    "quiz_name": "Reading the Novel",
}

CAST = {
    "narr":  {"voice": "bf_emma",     "speed": 0.96, "name": "Narrator"},
    "mei":   {"voice": "af_bella",    "speed": 1.04, "name": "Mei"},
    "mrh":   {"voice": "bm_lewis",    "speed": 0.92, "name": "Mr H"},
    "will":  {"voice": "bm_fable",    "speed": 0.9,  "name": "Will"},
    "nib":   {"voice": "bm_george",   "speed": 0.9,  "name": "Nib"},
    "kevin": {"voice": "am_puck",     "speed": 1.1,  "name": "Kevin"},
    "shady": {"voice": "am_fenrir",   "speed": 0.96, "name": "Shady"},
    "omni":  {"voice": "bf_isabella", "speed": 0.96, "name": "Omni"},
}


def L(id, who, text, pause=0.0, say=None):
    line = {"id": id, "who": who, "cap": f"**{CAST[who]['name']}:** {text}", "pause": pause}
    line["say"] = say if say else text.replace("**", "")
    return line


CHAPTERS = [
    {
        "id": "cold", "title": "Cold open", "short": "Cold open", "card": False,
        "lines": [
            L("term3", "narr", "Term 3. Room 8H. Mr Hargreaves is on mug number sixteen, and carrying a very thick book.", 0.25,
              say="Term three. Room eight H. Mr Hargreaves is on mug number sixteen, and carrying a very thick book."),
            L("novel", "mrh", "Right, 8H. This term: **the novel**.", 0.3,
              say="Right, eight H. This term: the novel."),
            L("outrage", "will", "A **NOVEL**?! Three hundred pages of **PROSE**?! Where are the **iambs**?! Where are the swords?!", 0.35),
            L("shady", "shady", "Relax, folks. I was there. Nobody panicked, Mr H wept with joy, and I saved everyone from a tiger.", 0.32),
            L("mei", "mei", "Excuse me, trenchcoat guy — Mr H is drinking tea, and that's a ceiling fan, not a tiger.", 0.28),
            L("omni", "omni", "Lady Omni, **omniscient narrator**. Through my binoculars I see Shady is lying, Mei wants a curry puff, and Will secretly envies Charles Dickens.", 0.35),
            L("deny", "will", "Get out of my thought bubble, madam! I do NOT envy his book sales!", 0.28),
            L("nib", "nib", "Remember: a novel is **constructed** prose fiction! Name the writer, and ask **WHAT, HOW, and WHY**.", 0.28),
            L("rev", "mei", "Three hundred pages and a lying detective: **one star**.", 0.4),
            L("title", "narr", "All the School's a Stage. Episode eleven: Unreliable.", 1.2),
        ],
    },
    {
        "id": "voice", "title": "Who's holding the camera?", "short": "Perspective",
        "lines": [
            L("lib", "narr", "Tuesday. The library. Shady and Omni are arguing over who gets to narrate Mei's homework.", 0.28),
            L("rule", "mrh", "Rule one: the **narrator** is NOT the **author**. Charlotte Brontë created Jane Eyre's voice; she wasn't locked in the red-room herself.", 0.3,
              say="Rule one: the narrator is not the author. Charlotte Brontay created Jane Eyre's voice; she wasn't locked in the red-room herself."),
            L("first", "nib", "**First person** uses '**I**'. Intimate access to one mind, like Pip or Jane — yet limited and potentially biased.", 0.28),
            L("second", "mei", "**Second person** uses '**you**' — pointing the camera straight at the reader! Rare in whole novels, and slightly creepy.", 0.28),
            L("thirdl", "mrh", "**Third person limited** uses 'he' or 'she', staying over **one** character's shoulder, like young Bruno in The Boy in the Striped Pyjamas.", 0.3),
            L("thirdo", "omni", "**Third person omniscient** sees **every** mind, past and future, and comments openly! Listen to Dickens: '**Marley was dead: to begin with.**'", 0.32),
            L("multi", "nib", "Some novels even switch between **multiple narrators**, like Wonder or Noughts and Crosses, so we compare sides.", 0.28),
            L("unrel", "shady", "Or pick me: an **unreliable narrator**! Maybe I'm **naïve**, **biased**, **deceptive**, or **remembering from long ago**!", 0.3),
            L("irony", "mei", "Wait — when a naïve narrator misses the danger, **we** see what they don't! That's **dramatic irony**!", 0.28),
            L("pip", "will", "Hark at Dickens's Great Expectations: 'the **small bundle of shivers** growing afraid of it all and beginning to cry, **was Pip**.'", 0.32),
            L("retro", "nib", "A frightened boy wouldn't say 'bundle of shivers'! That's a **retrospective narrator**: child's terror in the adult Pip's wry words.", 0.3),
            L("hide", "mrh", "Always explain both sides of perspective: what it **lets us feel**, and what it **hides**.", 0.48),
        ],
    },
    {
        "id": "steal", "title": "Building people out of words", "short": "Characterisation",
        "lines": [
            L("wed", "narr", "Wednesday. Mr Hargreaves writes five letters on the whiteboard: S, T, E, A, L.", 0.28,
              say="Wednesday. Mr Hargreaves writes five letters on the whiteboard: S, T, E, A, L."),
            L("direct", "mrh", "**Direct characterisation** tells us outright. In The Secret Garden: 'the **most disagreeable-looking child** ever seen. It was true, too.'", 0.3),
            L("indirect", "nib", "**Indirect characterisation** **shows** us through **STEAL**: **Speech, Thoughts, Effect on others, Actions, and Looks**.", 0.3,
              say="Indirect characterisation shows us through S T E A L: Speech, Thoughts, Effect on others, Actions, and Looks."),
            L("hyde", "shady", "In Jekyll and Hyde, I barely bumped that kid — 'the man **trampled calmly** over the child's body.' Calmly! See? Polite!", 0.3),
            L("horror", "mei", "'Trampled **calmly**' is terrifying! The contrast between violence and zero emotion shows Hyde is inhuman!", 0.28),
            L("scrooge", "will", "Listen to Dickens pile up verbs on Scrooge: 'a **squeezing, wrenching, grasping, scraping, clutching**, covetous, old sinner!'", 0.32),
            L("oyster", "omni", "And the simile: '**secret, and self-contained, and solitary as an oyster**.' Sibilant, hard shell — yet an oyster can hide a **pearl**!", 0.32),
            L("foil", "nib", "Writers also pair a protagonist with a **foil character** — warm, cheerful Fred or Fezziwig makes Scrooge's icy greed look even sharper!", 0.3),
            L("arc", "mrh", "A **dynamic** character changes across a **character arc** — **starting point**, **catalyst**, **end point** — whereas a **static** character stays the same.", 0.28),
            L("round", "nib", "And E. M. Forster separated one-note **flat** characters from complex **round** ones capable of surprising us!", 0.28,
              say="And E M Forster separated one-note flat characters from complex round ones capable of surprising us!"),
            L("end", "mei", "Three spirits crack Scrooge's shell until he's '**as good a friend, as good a master, and as good a man**'! Two stars!", 0.5),
        ],
    },
    {
        "id": "setting", "title": "Weather with an attitude", "short": "Setting & mood",
        "lines": [
            L("rain", "narr", "Four p.m. Queenstown. Rain hammers the windows on schedule.", 0.25,
              say="Four p m. Queenstown. Rain hammers the windows on schedule."),
            L("set", "mrh", "**Setting** is place, time and social world. **Atmosphere** is the mood it creates for the reader.", 0.28),
            L("red", "omni", "Look inside Jane Eyre's **red-room**: 'deep red damask', 'crimson cloth', a bed 'like a **tabernacle**', a chair 'like a **pale throne**'.", 0.32),
            L("judge", "mei", "Red connotes **anger**, **blood**, and **danger** — and 'throne' makes the furniture sit in judgement on ten-year-old Jane!", 0.3),
            L("pf", "nib", "When weather or nature mirrors human emotion — mournful rain for grief, howling wind for turmoil — that is **pathetic fallacy**.", 0.3),
            L("trap", "mrh", "Careful: when Dickens says 'No wind that blew was bitterer than' Scrooge, that's a **comparison**, not pathetic fallacy.", 0.28),
            L("marshes", "will", "Whereas Pip's 'bleak place overgrown with nettles' and 'dark flat wilderness' make the marshes threaten him before anyone speaks!", 0.3),
            L("door", "shady", "And in Jekyll and Hyde, my back door sits in 'a **blind forehead** of discoloured wall'! Totally welcoming, right?", 0.28),
            L("sec", "omni", "Personifying a wall as '**blind**' turns the setting into a symbol of Victorian secrecy and hypocrisy.", 0.28),
            L("link", "mei", "So never just write 'the room is scary' — link setting to **character**, **tension**, or **symbolism**!", 0.48),
        ],
    },
    {
        "id": "plot", "title": "Every rocket climbs, falls, returns", "short": "Plot & structure",
        "lines": [
            L("hall", "narr", "Thursday. The school hall. Will has discovered cliffhangers and refuses to come down.", 0.28),
            L("pvs", "mrh", "**Plot** is what happens. **Structure** is how the writer arranges it: order, **pacing**, shifts and chapter endings.", 0.28),
            L("frey", "nib", "**Freytag's pyramid** maps five stages — **Every Rocket Climbs, Falls, Returns**: **Exposition, Rising action, Climax, Falling action, Resolution**.", 0.32,
              say="Fry-tahg's pyramid maps five stages — Every Rocket Climbs, Falls, Returns: Exposition, Rising action, Climax, Falling action, Resolution."),
            L("climax", "mei", "Wait — the **climax** isn't the very last page! Tension peaks first, then drops into falling action and **dénouement**!", 0.3,
              say="Wait — the climax isn't the very last page! Tension peaks first, then drops into falling action and day-noo-mon!"),
            L("tools", "omni", "Writers bend time too: **in medias res** drops us mid-action; **flashbacks** jump back; **foreshadowing** plants warnings!", 0.3,
              say="Writers bend time too: in meddee-ahs rays drops us mid-action; flashbacks jump back; foreshadowing plants warnings!"),
            L("circ", "nib", "And **circular structure** ends right where the novel began, like Of Mice and Men returning to the same river pool.", 0.28),
            L("serial", "will", "Dickens published Great Expectations in **weekly instalments**! Every **cliffhanger** sold next week's magazine! Oh, I respect the hustle!", 0.32),
            L("kev", "kevin", "Watch **pacing** in Chapter 1! One giant reflective sentence with six of my commas lullabies you across the churchyard...", 0.28,
              say="Watch pacing in Chapter one! One giant reflective sentence with six of my commas lullabies you across the churchyard..."),
            L("shout", "shady", "'**Hold your noise!**' cried a terrible voice! Boom — short, violent imperative shatters the stillness!", 0.3),
            L("shift", "mrh", "When analysing structure, track those shifts: **opens with**, **zooms in**, **interrupts**, **returns to** — and say **why**. Three stars!", 0.5),
        ],
    },
    {
        "id": "themes", "title": "Across the whole novel", "short": "Themes & PEEL",
        "lines": [
            L("fri", "narr", "Friday. Room 8H. Essay day: writing about a **whole novel**.", 0.25,
              say="Friday. Room eight H. Essay day: writing about a whole novel."),
            L("theme", "mrh", "A one-word topic like 'loneliness' is just a **subject**. Phrase a **theme** as an **idea**: 'Burnett suggests being needed cures loneliness.'", 0.3),
            L("motsym", "nib", "A **motif** recurs across the novel, like cold and fire. A **symbol** is concrete standing for abstract, like the locked garden or Jekyll's 'blind' door.", 0.32),
            L("ctx", "mrh", "Weave in **context** only when it sharpens **writer's purpose**: in the 1843 Hungry Forties, Scrooge's workhouse line exposes real Victorian cruelty.", 0.32,
              say="Weave in context only when it sharpens writer's purpose: in the eighteen forty-three Hungry Forties, Scrooge's workhouse line exposes real Victorian cruelty."),
            L("ttt", "omni", "And don't quote only Chapter 1! Use **Then, Turn, The End**: evidence from the **beginning, turning point, and end**!", 0.3,
              say="And don't quote only Chapter one! Use Then, Turn, The End: evidence from the beginning, turning point, and end!"),
            L("p", "mei", "PEEL time! **Point**: Dickens presents Scrooge's greed as so extreme it physically freezes him.", 0.22,
              say="Peel time! Point: Dickens presents Scrooge's greed as so extreme it physically freezes him."),
            L("e", "mei", "**Evidence**: 'The **cold within him** froze his old features, **nipped** his pointed nose, **shrivelled** his cheek.'", 0.28),
            L("ex", "mei", "**Explain**: The **extended metaphor** of inner cold and harsh verbs 'nipped' and 'shrivelled' imply greed harms Scrooge himself.", 0.28),
            L("l", "mei", "**Link**: Setting coldness up like weather prepares his Stave Five thaw, proving Dickens's message that anyone can choose generosity.", 0.3),
            L("sigh", "mrh", "Named the writer, zoomed on two verbs, linked to the whole-novel arc. Splendid.", 0.5),
        ],
    },
    {
        "id": "recap", "title": "Save yourself some marks", "short": "Exam traps",
        "lines": [
            L("intro", "narr", "Before you close Chapter One, the department would like to save you some marks.", 0.28),
            L("h1", "mei", "Memory hooks! **WHAT, HOW, WHY** on every extract; **STEAL** for indirect characterisation!", 0.28,
              say="Memory hooks! What, how, why on every extract; S T E A L for indirect characterisation!"),
            L("h2", "nib", "**Every Rocket Climbs, Falls, Returns** for Freytag's pyramid; **Then, Turn, The End** for whole-novel essays!", 0.3,
              say="Every Rocket Climbs, Falls, Returns for Fry-tahg's pyramid; Then, Turn, The End for whole-novel essays!"),
            L("t1", "mrh", "One. Don't **retell the plot** or treat characters like real mates. Write '**Dickens presents**', '**Brontë suggests**'.", 0.28,
              say="One. Don't retell the plot or treat characters like real mates. Write Dickens presents, Brontay suggests."),
            L("t2", "shady", "Two. Never confuse the **narrator** with the **author** — and watch out for **unreliable** narrators like me!", 0.28),
            L("t3", "omni", "Three. Don't assume third person is always all-knowing: check **third limited** versus **omniscient**!", 0.28),
            L("t4", "kevin", "Four. Don't quote only Chapter 1 in a whole-novel essay! Track **beginning, middle, and end**!", 0.28,
              say="Four. Don't quote only Chapter one in a whole-novel essay! Track beginning, middle, and end!"),
            L("t5", "nib", "Five. State a **theme** as a full idea, not one word — and never bolt on random Victorian history!", 0.28),
            L("t6", "will", "Six. Keep quotations **short and embedded**, like 'solitary as an oyster'. Even prose can turn a phrase.", 0.32),
            L("rev", "mei", "Reading the Novel: **four stars**! Cliffhangers are sneaky, and Scrooge's oyster shell actually made sense.", 0.3),
            L("prose", "will", "Four stars for **prose**?! My plays don't even have chapters!", 0.28),
            L("ham", "mei", "Will, Hamlet is still four hours long.", 0.9),
        ],
    },
    {
        "id": "quiz", "title": "Quick-fire quiz", "short": "Quiz",
        "lines": [
            L("intro", "mrh", "Quick-fire quiz! Say each answer out loud before it appears.", 0.3),
            L("q1", "mrh", "Which third-person perspective stays close to **one** character's thoughts rather than knowing everyone's?", 4.0),
            L("a1", "omni", "**Third person limited** — also called close third person!"),
            L("q2", "mrh", "What do the five letters of **STEAL** stand for in indirect characterisation?", 4.0,
              say="What do the five letters of S T E A L stand for in indirect characterisation?"),
            L("a2", "mei", "**Speech, Thoughts, Effect on others, Actions, and Looks**."),
            L("q3", "mrh", "What technique uses **weather or nature** to mirror human emotion or mood?", 4.0),
            L("a3", "nib", "**Pathetic fallacy**."),
            L("q4", "mrh", "Name the five stages of **Freytag's pyramid** in order.", 4.0,
              say="Name the five stages of Fry-tahg's pyramid in order."),
            L("a4", "kevin", "**Exposition, Rising action, Climax, Falling action, and Resolution**!"),
            L("q5", "mrh", "In a whole-novel essay, from which **three parts** of the book should you choose quotations?", 4.0),
            L("a5", "mrh", "The **beginning**, the **turning point** in the middle, and the **end**."),
            L("outro", "mrh", "Brilliant work. Now try the **Reading the Novel** quiz in your English Lab.", 0.4),
            L("st1", "shady", "True story: Mei gave me six stars and bought me lunch.", 0.28),
            L("st2", "omni", "Binoculars confirm: she gave four stars and ate the curry puff herself.", 1.2),
        ],
    },
]
