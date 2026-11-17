"""ALL THE SCHOOL'S A STAGE, episode 14 ("It Was a Dark and Stormy Period 3"):
Teaches Descriptive Writing (lib/topics/descriptive-writing.ts).

At 4 p.m. a Sumatra squall hits Banyan Hill. Mei starts her descriptive coursework with 'It was a
dark and stormy night and the hawker centre was very, very busy!!!' — summoning Addie (an
over-caffeinated Adjective Addict) and Cam (a bossy cinema zoom-lens camera). With Mr H, Will,
Nib and Kevin, Mei masters show don't tell, all five senses and synaesthesia, fresh imagery and
pathetic fallacy, vivid verbs over adjective piles, camera-lens structure without car chases,
sentence rhythm, punctuation for timing, and ARMS redrafting.
"""

META = {
    "name": "It Was a Dark and Stormy Period 3",
    "kicker": "Claude Sitcom · Ep 14 · Descriptive Writing",
    "dek": "A 4 p.m. monsoon traps Room 8H inside a flat paragraph, with an over-caffeinated Adjective Addict and a bossy cinema zoom lens. {chapters} scenes.",
    "gap": 0.32,
    "unit": "Scene",
    "lab": "descriptive-writing",
    "kit": ["sitcom", "english"],
    "title": "Claude Sitcom Ep 14: It Was a Dark and Stormy Period 3 (Descriptive Writing)",
    "h1": "All the School's a Stage: It Was a Dark and Stormy Period 3",
    "quiz_name": "Descriptive Writing",
}

CAST = {
    "narr":  {"voice": "bf_emma",   "speed": 0.96, "name": "Narrator"},
    "mei":   {"voice": "af_bella",  "speed": 1.04, "name": "Mei"},
    "mrh":   {"voice": "bm_lewis",  "speed": 0.92, "name": "Mr H"},
    "will":  {"voice": "bm_fable",  "speed": 0.9,  "name": "Will"},
    "nib":   {"voice": "bm_george", "speed": 0.9,  "name": "Nib"},
    "kevin": {"voice": "am_puck",   "speed": 1.1,  "name": "Kevin"},
    "cam":   {"voice": "am_eric",   "speed": 1.0,  "name": "Cam"},
    "adj":   {"voice": "af_sarah",  "speed": 1.12, "name": "Addie"},
}


def L(id, who, text, pause=0.0, say=None):
    line = {"id": id, "who": who, "cap": f"**{CAST[who]['name']}:** {text}", "pause": pause}
    line["say"] = say if say else text.replace("**", "")
    return line


CHAPTERS = [
    {
        "id": "cold", "title": "Cold open", "short": "Cold open", "card": False,
        "lines": [
            L("fourpm", "narr", "Four p.m. Room 8H. Outside, Singapore's daily monsoon has arrived right on schedule.", 0.28,
              say="Four p m. Room eight H. Outside, Singapore's daily monsoon has arrived right on schedule."),
            L("mugs", "narr", "Mr Hargreaves has reached mug twenty-one. Mei has written one sentence.", 0.3),
            L("draft", "mei", "'It was a **dark and stormy** night, and the hawker centre was **very, very** busy and nice!!!'", 0.32),
            L("ink", "nib", "Three exclamation marks and Edward Bulwer-Lytton's **1830** cliché! I have leaked through the desk!", 0.32,
              say="Three exclamation marks and Edward Bulwer-Lytton's eighteen thirty cliché! I have leaked through the desk!"),
            L("addie", "adj", "Addie! Adjective enthusiast! Needs more adjectives! Make it a **big, loud, hot, crowded, amazing** hawker centre!", 0.32),
            L("cam", "cam", "Cut, cut, CUT! Cam. Cinema zoom lens. I can't film 'busy' or 'nice'! What am I actually **looking** at?!", 0.32),
            L("will", "will", "In **1599** I wrecked an entire ship on a bare wooden stage using nothing but **words**. Today Mei gives description **one star**.", 0.35,
              say="In fifteen ninety-nine I wrecked an entire ship on a bare wooden stage using nothing but words. Today Mei gives description one star."),
            L("hard", "mei", "Because nothing **happens** in a description! You just stare at a picture!", 0.28),
            L("mrh", "mrh", "Put the exclamation marks down, 8H. Let's step into the rain.", 0.4,
              say="Put the exclamation marks down, eight H. Let's step into the rain."),
            L("title", "narr", "All the School's a Stage. Episode fourteen: It Was a Dark and Stormy Period Three.", 1.1),
        ],
    },
    {
        "id": "show", "title": "Show, don't tell — and use all five senses", "short": "Show & senses",
        "lines": [
            L("street", "narr", "The hawker centre at dusk. Cam is framing the shot.", 0.28),
            L("tell", "mrh", "**Telling** names a quality or feeling directly: 'The hawker centre was busy. Mei was nervous.'", 0.28),
            L("show", "cam", "**Showing** gives the camera and microphone **evidence** so the reader infers the feeling themselves!", 0.3),
            L("stools", "mei", "Like: 'Every plastic stool was taken, and the chicken-rice queue coiled past the drinks stall'?", 0.3),
            L("coins", "mrh", "Spot on. Don't write 'the old man was poor'. Write: 'he counted his coins twice, then put the smallest one back.'", 0.32),
            L("plain", "nib", "Once you've **shown** the evidence, one short plain statement afterwards — 'It was the loudest place on earth' — lands hard.", 0.3),
            L("senses", "cam", "Now switch on **all five senses**! Remember: **S**ome **H**ungry **S**harks **T**aste **T**oes — Sight, Hearing, Smell, Taste, Touch.", 0.32,
              say="Now switch on all five senses! Remember: Some Hungry Sharks Taste Toes — Sight, Hearing, Smell, Taste, Touch."),
            L("check", "mei", "Got it! 'I could see smoke. I could hear a wok. I could smell garlic—'", 0.25),
            L("cut", "nib", "Stop! '**I could see, I could hear**' turns your paragraph into a shopping list and shoves **you** in the way!", 0.32),
            L("onom", "mrh", "Cut 'I could hear' and let **onomatopoeia** strike directly: the bright **clang** of the wok; bean sprouts **hissing** in hot oil.", 0.3),
            L("smell", "will", "**Smell** goes straight to memory: charcoal smoke, wet earth after rain, kaya toast at dawn.", 0.28),
            L("syn", "nib", "And for top marks, try **synaesthesia** — blending two senses: jasmine so fragrant '**the air tastes sweet**'.", 0.45,
              say="And for top marks, try sin-ess-theezia — blending two senses: jasmine so fragrant the air tastes sweet."),
        ],
    },
    {
        "id": "imagery", "title": "Fresh imagery and pathetic fallacy", "short": "Fresh imagery",
        "lines": [
            L("ice", "adj", "Ooh, metaphor time! 'The rain fell like cats and dogs, and the MRT was as **cold as ice**!'", 0.3,
              say="Ooh, metaphor time! The rain fell like cats and dogs, and the M R T was as cold as ice!"),
            L("cliche", "nib", "**Clichés**, darling! Dead comparisons examiners have read ten thousand times! Reject your first idea.", 0.3),
            L("ladder", "mrh", "Climb the **cliché ladder** using the world of your scene: not 'cold as ice', but '**cold as the MRT air-con at seven a.m.**'", 0.32,
              say="Climb the cliché ladder using the world of your scene: not cold as ice, but cold as the M R T air-con at seven a m."),
            L("rods", "mei", "And tropical rain isn't 'cats and dogs' — it falls in '**straight silver rods**', or dusk turns the colour of **teh tarik**!", 0.3),
            L("pers", "cam", "Use **personification**: 'At Raffles Place the doors **sighed** open, and the carriage **breathed out** a crowd.'", 0.3),
            L("pf", "nib", "When weather or setting mirrors human emotion, call it **pathetic fallacy** — coined by **John Ruskin** in **1856**.", 0.3,
              say="When weather or setting mirrors human emotion, call it pathetic fallacy — coined by John Ruskin in eighteen fifty-six."),
            L("pathos", "mei", "Wait — doesn't 'pathetic' mean sad and useless?", 0.25),
            L("greek", "nib", "Greek **pathos**, meaning **feeling**! Sunshine at a joyful wedding is pathetic fallacy too, not only storms.", 0.3),
            L("miranda", "will", "Hear Miranda's storm in **The Tempest**: 'the sea, mounting to th' welkin's cheek, / Dashes the fire out.'", 0.32),
            L("purple", "mrh", "One warning: don't cram five similes into one sentence. **Purple prose** Tangled in mixed metaphors blurs the picture.", 0.3,
              say="One warning: don't cram five similes into one sentence. Purple prose tangled in mixed metaphors blurs the picture."),
            L("two", "mei", "Two stars. Mainly because 'the carriage breathed out a crowd' is painfully accurate.", 0.48),
        ],
    },
    {
        "id": "verbs", "title": "Sack the adjectives, hire a verb", "short": "Precise verbs",
        "lines": [
            L("pile", "adj", "Look at my masterpiece! 'The **very big, dark, old, scary, creepy** shophouse!' Five adjectives! Beat that!", 0.32),
            L("dilute", "mrh", "That's an **adjective pile**, Addie. Each vague adjective dilutes the last, and most of them are tells.", 0.3),
            L("work", "nib", "In strong description, **precise nouns** and **vivid verbs** do the heavy lifting.", 0.28),
            L("nouns", "mei", "So not 'a bird in a tree eating food' — a **mynah** in a **rain tree** eyeing my **char kway teow**!", 0.3),
            L("adverb", "mrh", "And cut weak **verb plus adverb**. Don't write 'the jogger **ran quickly**'. Use one verb: '**sprinted**' or '**pounded**'.", 0.3),
            L("walk", "cam", "Watch how one verb changes the whole character: he **trudged**, he **stormed**, he **slunk** down the road.", 0.3),
            L("eagle", "will", "Lord Tennyson needed one verb for an ocean seen from a cliff: '**The wrinkled sea beneath him crawls.**'", 0.32),
            L("crawls", "mei", "'**Crawls**'! That makes the giant sea look tiny, slow and insect-like from the eagle's height!", 0.3),
            L("conn", "nib", "Check **connotations** too: **slim**, **skinny** and **scrawny** all denote thin, yet move from admiring to frail.", 0.3),
            L("thes", "adj", "Fine! I bought a thesaurus! 'The **effulgent** sun irradiated the **crepuscular** firmament!'", 0.32),
            L("trap", "mrh", "The **thesaurus trap**. Never swallow a dictionary to sound clever; pick words the reader can **picture**.", 0.45),
        ],
    },
    {
        "id": "camera", "title": "Move the camera — don't start a car chase", "short": "Camera & tense",
        "lines": [
            L("chase", "mei", "Paragraph two! Suddenly ninjas rob the drink stall, Uncle Lim jumps a motorbike, and—", 0.28),
            L("freeze", "cam", "FREEZE FRAME! That's a **story**, Mei! In a description, the **place and atmosphere** are the star!", 0.32),
            L("zoom", "cam", "Structure your piece by **moving the camera**: start with a wide **drone shot**, then zoom in step by step.", 0.3),
            L("p1", "mrh", "Paragraph one, **background**: from the bus, the hawker roof glows amber like a **lantern** among dark HDB blocks.", 0.3,
              say="Paragraph one, background: from the bus, the hawker roof glows amber like a lantern among dark H D B blocks."),
            L("p2", "cam", "Paragraph two, **midground**: inside the heat, ceiling fans churning, the char kway teow uncle inside a cloud of smoke.", 0.3),
            L("p3", "cam", "Paragraph three, **close-up detail**: table thirty-four — a grandmother's patient fingers peeling prawns beside a **packet of tissues**.", 0.32),
            L("shift", "mrh", "Paragraph four: a **shift in mood or weather**, signalled by a **one-line paragraph**: '**Then the sky split open.**'", 0.3),
            L("cyc", "nib", "End with a **cyclical structure**: return to the opening **lantern** roof from the bus stop — still glowing in the rain.", 0.3),
            L("tiptop", "kevin", "Start a new paragraph with **TiPToP**: change of **Time, Place, Topic or Person**!", 0.28,
              say="Start a new paragraph with Tip Top: change of Time, Place, Topic or Person!"),
            L("tense", "mrh", "And pick **one tense** and **one viewpoint**. 'The rain **hammers** the roof; a cyclist **skidded**' breaks the spell.", 0.45),
        ],
    },
    {
        "id": "rhythm", "title": "Sentence skylines, timing and ARMS", "short": "Rhythm & ARMS",
        "lines": [
            L("flat", "mrh", "Listen to your rhythm. If every sentence is twelve words starting with 'The', your paragraph flatlines.", 0.28),
            L("sky", "cam", "Build a **city skyline**: long flowing sentences for panorama, then a sudden **short sentence** for impact!", 0.3),
            L("cats", "nib", "Five shapes — **S**ome **L**azy **C**ats **F**ear **M**ice: **Short**, **List**, **Complex**, **Fronted adverbial**, and **Minor sentence**.", 0.32,
              say="Five shapes — Some Lazy Cats Fear Mice: Short, List, Complex, Fronted adverbial, and Minor sentence."),
            L("fog", "will", "Dickens opens **Bleak House** with a two-word minor sentence: '**Fog everywhere.**' No main verb — the fog simply sits there.", 0.32),
            L("punct", "nib", "Punctuation controls **timing**. A **colon** holds your breath before a reveal: 'There was only one sound**:** the drip of the tap.'", 0.3),
            L("semi", "mrh", "A **semicolon** balances two linked sentences; a **dash** jolts: 'The sea was calm **—** too calm.'", 0.28),
            L("splice", "kevin", "Never stick me between two full sentences! 'The rain stopped, the steam rose' is a **comma splice**! Put me after a **fronted adverbial**: 'Beneath the awning, steam rose!'", 0.35),
            L("arms", "mrh", "Finally, plan your picture in **three layers** — background, midground, foreground — and redraft with **ARMS**.", 0.28),
            L("r1", "mei", "**Remove** & **Substitute**: cut 'very busy and nice'; swap 'ran quickly' for 'sprinted' and 'food' for 'char kway teow'.", 0.28),
            L("r2", "mei", "**Add** & **Move**: add charcoal smoke and a short minor sentence — 'Nobody spoke.' — saving the strongest image for last!", 0.3),
            L("addie2", "adj", "Okay... one single precise verb **did** look cooler than five 'verys'. Don't tell anyone.", 0.45),
        ],
    },
    {
        "id": "recap", "title": "Save yourself some marks", "short": "Exam traps",
        "lines": [
            L("bell", "narr", "The rain eases. Room 8H packs its descriptive toolkit.", 0.28,
              say="The rain eases. Room eight H packs its descriptive toolkit."),
            L("hooks", "mei", "Memory hooks! Senses: **Some Hungry Sharks Taste Toes**. Sentences: **Some Lazy Cats Fear Mice**. Paragraphs: **TiPToP**. Redrafting: **ARMS**!", 0.35,
              say="Memory hooks! Senses: Some Hungry Sharks Taste Toes. Sentences: Some Lazy Cats Fear Mice. Paragraphs: Tip Top. Redrafting: ARMS!"),
            L("t1", "cam", "One. Don't turn a description into an action **story**! Move the camera — wide shot to close-up to cyclical echo.", 0.3),
            L("t2", "adj", "Two. Ditch **adjective piles** and 'very'. Let **specific nouns** and **vivid verbs** do the work.", 0.28),
            L("t3", "nib", "Three. Ban the mechanical checklist '**I could see, I could hear**', and swap dead **clichés** for fresh local images.", 0.3),
            L("t4", "mrh", "Four. Never drift between **past and present tense** without a deliberate reason.", 0.28),
            L("t5", "kevin", "Five. No **comma splices** and no triple exclamation marks! Use a colon, semicolon and dash deliberately.", 0.3),
            L("t6", "will", "Six. Avoid the **thesaurus trap** and five-simile purple prose. Control beats showing off.", 0.32),
            L("rev", "mei", "Descriptive Writing: **four stars**. I can actually smell the char kway teow now.", 0.32),
            L("four", "will", "Four stars?! After Miranda's tempest?!", 0.28),
            L("wet", "mei", "My shoes got soaked during location filming.", 0.9),
        ],
    },
    {
        "id": "quiz", "title": "Quick-fire quiz", "short": "Quiz",
        "lines": [
            L("intro", "mrh", "Quick-fire quiz! Say each answer out loud before it appears.", 0.3),
            L("q1", "mrh", "What is the difference between **telling** and **showing**?", 4.0),
            L("a1", "mei", "**Telling** names a feeling directly; **showing** gives sensory details and actions so the reader infers it."),
            L("q2", "mrh", "When stormy weather mirrors a character's inner turmoil, what is that technique called?", 4.0),
            L("a2", "nib", "**Pathetic fallacy** — from the Greek **pathos**, meaning feeling."),
            L("q3", "mrh", "Why is 'The eagle watched as the wrinkled sea **crawls**' better than piling up five adjectives?", 4.0),
            L("a3", "will", "One **precise verb** carries movement, scale and mood without clutter."),
            L("q4", "mrh", "What is a **minor sentence**, and why must you use it sparingly?", 4.0),
            L("a4", "cam", "A deliberate fragment with **no main verb**, like '**Fog everywhere.**' Rare ones create impact; too many lose force."),
            L("q5", "mrh", "What do the four letters of **ARMS** stand for when redrafting?", 4.0),
            L("a5", "kevin", "**Add**, **Remove**, **Move**, **Substitute**!"),
            L("outro", "mrh", "Brilliant work. Now try the **Descriptive Writing** quiz in your English Lab.", 0.4),
            L("st1", "adj", "Can I keep just **one** tiny 'very'?", 0.25),
            L("st2", "nib", "No.", 1.2),
        ],
    },
]
