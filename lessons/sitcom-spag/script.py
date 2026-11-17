"""ALL THE SCHOOL'S A STAGE, episode 16 ("Let's Eat, Grandma"):
Series finale! Teaches Grammar, Punctuation & Vocabulary (lib/topics/spag.ts).

Mei texts her family group chat 'Let's eat Grandma!' without a comma of direct address, prompting
Ah Ma to lock the kitchen door and Kevin the Comma to hyperventilate into his paper bag. With Mr H
(finally on mug twenty-three!), Will, Nib, Kevin's cool older cousin Semicolon, blunt Full Stop,
and exhausted Apostrophe, Room 8H masters word classes, morphology and RAVEN, phrases, clauses and
sentence types, defeating the comma splice and the 'however' trap, colons, dashes and brackets,
apostrophes and speech marks, Standard English, passive voice and code-switching — before Kevin
saves dinner in Queenstown.
"""

META = {
    "name": "Let's Eat, Grandma",
    "kicker": "Claude Sitcom · Ep 16 · Grammar, Punctuation & Vocabulary",
    "dek": "Mei texts her family group chat 'Let's eat Grandma!' without a comma, Ah Ma locks the kitchen door, and Kevin the Comma finally gets his hero moment in the series finale. {chapters} scenes.",
    "gap": 0.32,
    "unit": "Scene",
    "lab": "spag",
    "kit": ["sitcom", "english"],
    "title": "Claude Sitcom Ep 16: Let's Eat, Grandma (Grammar, Punctuation & Vocabulary)",
    "h1": "All the School's a Stage: Let's Eat, Grandma",
    "quiz_name": "Grammar, Punctuation & Vocabulary",
}

CAST = {
    "narr":  {"voice": "bf_emma",   "speed": 0.96, "name": "Narrator"},
    "mei":   {"voice": "af_bella",  "speed": 1.04, "name": "Mei"},
    "mrh":   {"voice": "bm_lewis",  "speed": 0.92, "name": "Mr H"},
    "will":  {"voice": "bm_fable",  "speed": 0.9,  "name": "Will"},
    "nib":   {"voice": "bm_george", "speed": 0.9,  "name": "Nib"},
    "kevin": {"voice": "am_puck",   "speed": 1.1,  "name": "Kevin"},
    "ahma":  {"voice": "af_kore",   "speed": 1.0,  "name": "Ah Ma"},
    "semi":  {"voice": "bm_daniel", "speed": 0.95, "name": "Semicolon"},
    "stop":  {"voice": "am_onyx",   "speed": 0.92, "name": "Full Stop"},
    "apos":  {"voice": "bf_lily",   "speed": 1.04, "name": "Apostrophe"},
}


def L(id, who, text, pause=0.0, say=None):
    line = {"id": id, "who": who, "cap": f"**{CAST[who]['name']}:** {text}", "pause": pause}
    line["say"] = say if say else text.replace("**", "")
    return line


CHAPTERS = [
    {
        "id": "cold", "title": "Cold open", "short": "Cold open", "card": False,
        "lines": [
            L("flat", "narr", "Queenstown. Six-thirty p.m. Mei is texting the family group chat about dinner.", 0.28,
              say="Queenstown. Six thirty p m. Mei is texting the family group chat about dinner."),
            L("txt", "mei", "Sent! '**Let's eat Grandma!**'", 0.32),
            L("ahma", "ahma", "Excuse me?! I cook curry chicken for twelve years and now you want to **eat** your grandmother?!", 0.35),
            L("bag", "kevin", "You forgot me! Without a **comma of direct address**, 'Grandma' is the **object** of 'eat'! You've made dinner a crime!", 0.35),
            L("room", "narr", "Wednesday. Room 8H. Mr Hargreaves has finally reached mug twenty-three out of twenty-three.", 0.3,
              say="Wednesday. Room eight H. Mr Hargreaves has finally reached mug twenty-three out of twenty-three."),
            L("stop", "stop", "Full Stop. Kevin called backup. Sentence. Over.", 0.3),
            L("semi", "semi", "Semicolon; Kevin's older cousin. I hold two main clauses together without breaking a sweat.", 0.3),
            L("apos", "apos", "And I'm Apostrophe! Another hawker stall wrote **FRIED NOODLE'S** with an apostrophe and I haven't slept since Tuesday!", 0.35),
            L("mrh", "mrh", "Last episode of the year, 8H. Grammar, punctuation and vocabulary.", 0.32,
              say="Last episode of the year, eight H. Grammar, punctuation and vocabulary."),
            L("title", "narr", "All the School's a Stage. Episode sixteen: Let's Eat, Grandma.", 1.1),
        ],
    },
    {
        "id": "words", "title": "Word classes, roots and RAVEN", "short": "Words & roots",
        "lines": [
            L("jab", "mrh", "Lewis Carroll wrote: ''Twas brillig, and the **slithy toves** did **gyre** in the wabe.' Nonsense words — yet you know their **word classes**.", 0.32),
            L("pos", "mei", "Because of their **jobs**! '**Toves**' follows 'the', so it's a **noun**; '**slithy**' describes it — **adjective**; '**gyre**' follows 'did' — **verb**!", 0.32),
            L("nouns", "nib", "Know all eight! **Nouns** include **proper** capitals like Singapore and **abstract nouns** for untouchable ideas like courage.", 0.3),
            L("verbs", "mrh", "**Verbs** include **modals** of possibility and obligation: **can, could, might, must, should**.", 0.28),
            L("ly", "will", "Careful with '-ly': most are **adverbs**, like 'quickly', yet '**friendly**', '**lovely**' and my beloved '**lonely**' are **adjectives**!", 0.32),
            L("stamp", "nib", "**Earliest recorded user** of 'lonely', Will. Still not its inventor.", 0.28),
            L("det", "nib", "Spot the job: in '**my** bag', 'my' is a **determiner** before a noun; in 'the bag is **mine**', 'mine' stands alone as a **pronoun**. **Prepositions** show position: **under, through, beside**.", 0.35),
            L("roots", "mrh", "Unlock unfamiliar vocabulary with **roots**: Greek **chron** means time, Latin **bene** means good and **mal** means bad — so **malevolent** means wishing harm.", 0.32),
            L("raven", "kevin", "And for **affect** versus **effect**, use **RAVEN**: **R**emember, **A**ffect is a **V**erb, **E**ffect is a **N**oun! Just like British **practise** with an 's' for the verb!", 0.45),
        ],
    },
    {
        "id": "clauses", "title": "Phrases, clauses and four sentence types", "short": "Clauses & types",
        "lines": [
            L("phr", "mrh", "A **phrase** has no subject doing a verb: 'under the old bridge'. A **clause** has a **subject** and a **verb**: 'the river froze'.", 0.3),
            L("main", "stop", "'The river froze.' **Main clause**. Stands alone. Sentence. Over.", 0.28),
            L("sub", "nib", "Add a **subordinating conjunction** — **AAAWWUBBIS**: **After, Although, As, When, While, Until, Before, Because, If, Since** — and it becomes a **subordinate clause** that cannot stand alone.", 0.35,
              say="Add a subordinating conjunction — After, Although, As, When, While, Until, Before, Because, If, Since — and it becomes a subordinate clause that cannot stand alone."),
            L("front", "kevin", "And when that subordinate clause comes **first** — '**Although** she was terrified**,** Lina stepped forward' — put me right after it!", 0.3),
            L("rel", "nib", "A **relative clause** starts with **who, which, that** or **whose** to describe a noun: 'the lift, **which had been humming**, stopped'.", 0.3),
            L("simple", "mrh", "Sentence types depend on **clauses**, not length! Twenty words with **one** main clause is still a **simple sentence**.", 0.3),
            L("comp", "semi", "Join two equal main clauses with **FANBOYS** — **For, And, Nor, But, Or, Yet, So** — or with me, and you have a **compound sentence**.", 0.32),
            L("orwell", "will", "George Orwell opens **Nineteen Eighty-Four** with a compound jolt: 'It was a bright cold day in April, **and** the clocks were striking **thirteen**.'", 0.32),
            L("cmplx", "mei", "Main plus subordinate is **complex**; and no main verb at all — like '**Darkness.**' — is a **minor sentence** for impact!", 0.45),
        ],
    },
    {
        "id": "splice", "title": "Defeating the comma splice (enter Semicolon)", "short": "Splices & colons",
        "lines": [
            L("crime", "mei", "Look at my sentence: 'The match was cancelled, it had rained all night.' I paused for breath, so I used Kevin!", 0.3),
            L("panic", "kevin", "PAPER BAG! PAPER BAG! Those are **two main clauses**! I'm a comma, not structural concrete! That's a **comma splice**!", 0.35),
            L("fix3", "stop", "Three legal fixes. Fix one: use me. 'The match was cancelled**.** It had rained all night.'", 0.28),
            L("fixsemi", "semi", "Fix two: use a **semicolon** to balance two closely linked clauses: 'The match was cancelled**;** it had rained all night.' Venetian printer Aldus Manutius invented me in the **1490s**.", 0.35,
              say="Fix two: use a semicolon to balance two closely linked clauses: The match was cancelled; it had rained all night. Venetian printer Aldus Manutius invented me in the fourteen nineties."),
            L("fixconj", "mrh", "Fix three: add a conjunction like '**because**'. And watch the biggest exam trap: '**however**' and '**therefore**' are **adverbs**, NOT conjunctions!", 0.32),
            L("how", "semi", "Never write ', however,'. Put **me** or Full Stop in front: 'I was tired**; however,** I kept going.'", 0.3),
            L("dickens", "will", "Charles Dickens spliced on purpose in **A Tale of Two Cities** — 'It was the best of times, it was the worst of times' — for breathless antithesis. Do **not** try that in an essay.", 0.35),
            L("oxford", "kevin", "Use me for **lists** — a missing Oxford comma cost a dairy company **five million dollars** in **2017**! — and around removable **non-defining** clauses!", 0.32,
              say="Use me for lists — a missing Oxford comma cost a dairy company five million dollars in twenty seventeen! — and around removable non-defining clauses!"),
            L("colon", "nib", "A **colon** needs a **complete main clause** before it, then points like a drumroll to a list, explanation or reveal: 'The plan was simple**:** wait, slip past, and run.'", 0.35),
            L("dash", "mrh", "**Dashes** add a dramatic twist; **brackets** whisper a quiet aside; and a shorter **hyphen** joins words like '**well-known**'.", 0.45),
        ],
    },
    {
        "id": "apostrophe", "title": "Apostrophes, homophones and speech", "short": "Apostrophes",
        "lines": [
            L("sob", "apos", "Listen carefully, Year 8! I have **only two jobs** in the English language! **Never** use me to make a plural! Just write **bananas** and **the 1990s**!", 0.35,
              say="Listen carefully, Year eight! I have only two jobs in the English language! Never use me to make a plural! Just write bananas and the nineteen nineties!"),
            L("job1", "apos", "Job one: **omission** — showing missing letters, like **don't**, **they're**, and **it's** meaning **it is**.", 0.28),
            L("job2", "mrh", "Job two: **possession**. Singular owner: **the girl's bag**. Plural already ending in 's': after the 's' — **the girls' changing room**.", 0.32),
            L("child", "mei", "What about '**children**'? It's already plural without an 's' — so we add apostrophe 's': **the children's toys**!", 0.3),
            L("its", "apos", "And **possessive pronouns never take an apostrophe**: **its, hers, yours, theirs, whose**! The dog wagged **its** tail — no apostrophe!", 0.32),
            L("homo", "nib", "Test your **homophones**: **they're** means they are, **their** shows belonging, **there** is a place. **Who's** is who is; **whose** shows belonging.", 0.32),
            L("speech", "kevin", "In **dialogue**, put me **inside** the closing speech marks before a reporting clause: '\"I'm cold**,**\" she said.'", 0.3),
            L("tiptop", "mrh", "And start a **new line for every new speaker** — part of **TiPToP**: **Time, Place, Topic, Person**.", 0.45,
              say="And start a new line for every new speaker — part of Tip Top: Time, Place, Topic, Person."),
        ],
    },
    {
        "id": "finale", "title": "Standard English, register and Kevin's moment", "short": "Kevin's moment",
        "lines": [
            L("err", "mei", "Quick proofread! 'Me and Arjun was late, we could of ran faster.'", 0.28),
            L("std", "mrh", "Four fixes: subject '**Arjun and I**', plural '**were**', semicolon for the splice, and '**could have** run' — never 'could of'!", 0.32),
            L("agree", "nib", "Match the **true subject**: 'The **box** of chocolates **was** full', and '**Each** of the players **receives** a medal.'", 0.3),
            L("pass", "mrh", "**Active voice**: 'The dog bit the postman.' **Passive voice** uses **be** plus past participle — 'Mistakes **were made**' — shifting focus or hiding the blame!", 0.32),
            L("reg", "nib", "Match **register** to audience. **Singlish** words like **kiasu** and **shiok** are in the Oxford English Dictionary — brilliant with friends, while **code-switching** to formal **Standard English** wins exam marks.", 0.35),
            L("peel", "mei", "And in essays, we analyse grammar with **PEEL**: Dickens's parallel clauses in '**best of times, worst of times**' create breathless **antithesis**, linking to a world torn by revolution!", 0.35),
            L("home", "narr", "Friday, seven p.m. Queenstown. Mei picks up her phone one more time.", 0.3,
              say="Friday, seven p m. Queenstown. Mei picks up her phone one more time."),
            L("hero", "mei", "Kevin — right here, after 'eat'. '**Let's eat, Grandma!**'", 0.32),
            L("glow", "kevin", "Direct address! Grammatically necessary! Nobody gets eaten! Best day of my life!", 0.35),
            L("puffs", "ahma", "Much better! Come and eat — I fried twenty-three curry puffs!", 0.48),
        ],
    },
    {
        "id": "recap", "title": "Save yourself some marks", "short": "Exam traps",
        "lines": [
            L("bell", "narr", "End of the school year. One last round of mark-savers from Room 8H.", 0.28,
              say="End of the school year. One last round of mark-savers from Room eight H."),
            L("hooks", "mei", "Memory hooks! Compound clauses: **FANBOYS**. Subordinate clauses: **AAAWWUBBIS**. Paragraphs: **TiPToP**. Affect verb, effect noun: **RAVEN**!", 0.35,
              say="Memory hooks! Compound clauses: FANBOYS. Subordinate clauses: After, Although, As, When, While, Until, Before, Because, If, Since. Paragraphs: Tip Top. Affect verb, effect noun: RAVEN!"),
            L("t1", "kevin", "One. Never **comma-splice** two main clauses! Fix with a full stop, a semicolon or a conjunction.", 0.28),
            L("t2", "semi", "Two. '**However**' and '**therefore**' are adverbs — put a **semicolon** or **full stop** before them, never just a comma.", 0.3),
            L("t3", "apos", "Three. **Its** without an apostrophe shows belonging; **it's** means it is. And **never** use an apostrophe for plurals!", 0.3),
            L("t4", "mrh", "Four. Write **could have**, never 'could of', keep **one tense**, and match verbs to the **true subject**.", 0.28),
            L("t5", "nib", "Five. Keep speech punctuation **inside** closing speech marks, start a **new line per speaker**, and use formal **Standard English** in exams.", 0.32),
            L("t6", "stop", "Six. Simple sentences can be long; minor sentences have no main verb. Choose each for **effect**. Sentence. Over.", 0.32),
            L("rev", "mei", "Final Year 8 reviews! Will: **four and a half stars**.", 0.3,
              say="Final Year eight reviews! Will: four and a half stars."),
            L("will", "will", "Four and a HALF?! Why not five?!", 0.28),
            L("kfive", "mei", "Hamlet is still four hours long. **Kevin the Comma**: **five stars**. Saved my grandmother.", 0.35),
            L("kjoy", "kevin", "Five stars?! I don't even need my paper bag!", 1.0),
        ],
    },
    {
        "id": "quiz", "title": "Quick-fire quiz", "short": "Quiz",
        "lines": [
            L("intro", "mrh", "Final quick-fire quiz! Say each answer out loud before it appears.", 0.3),
            L("q1", "mrh", "Give **three ways** to fix the comma splice: 'The bell rang, everyone rushed out.'", 4.0),
            L("a1", "semi", "Use a **full stop**, a **semicolon**, or a **conjunction** like 'and' or 'when'."),
            L("q2", "mrh", "Should you write 'the **childrens'** coats' or 'the **children's** coats'?", 4.0),
            L("a2", "apos", "**The children's coats** — 'children' is already plural without an 's', so add apostrophe 's'!"),
            L("q3", "mrh", "What type of sentence is 'Although she was exhausted, Priya kept running'?", 4.0),
            L("a3", "mei", "A **complex sentence**: a subordinate clause plus a main clause."),
            L("q4", "mrh", "What must always come **before** a **colon**?", 4.0),
            L("a4", "nib", "A **complete main clause** that could stand alone as a sentence."),
            L("q5", "mrh", "In 'The dog wagged **its** tail', does **its** take an apostrophe?", 4.0),
            L("a5", "kevin", "**No!** Possessive **its** never takes an apostrophe — **it's** only means 'it is' or 'it has'!"),
            L("outro", "mrh", "Brilliant work all year, 8H. Now try the **Grammar, Punctuation & Vocabulary** quiz in your English Lab.", 0.42,
              say="Brilliant work all year, eight H. Now try the Grammar, Punctuation and Vocabulary quiz in your English Lab."),
            L("st1", "will", "All the school's a stage... and honestly? Not a bad cast.", 0.3),
            L("st2", "mrh", "Kettle's on. Who wants tea?", 1.3),
        ],
    },
]
