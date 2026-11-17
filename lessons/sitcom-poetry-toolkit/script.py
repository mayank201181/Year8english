"""ALL THE SCHOOL'S A STAGE, episode 7 ("Simile Is Not Like a Metaphor"):
Teaches How Poems Work (lib/topics/poetry-toolkit.ts).

Term 2 Poetry begins in Room 8H. Will assumes the entire term is about his 154 sonnets and is outraged to share
the whiteboard with Dickinson, Blake, Wordsworth, Tennyson, Rossetti and Owen. When Mei writes 'The poet uses a
metaphor, which makes the reader read on' and calls 'like a thunderbolt' a metaphor, Nib leaks ink and three
guests arrive: Metaphor ("I AM a lion!"), Simile ("I am LIKE a lion — we are NOT twins!"), and Volta (a spinning
turn-arrow who flips the mood at line 9 or 13). Together with Mr Hargreaves and Kevin (who adores caesuras),
they teach feature-spotting vs effect, speaker vs poet, tone & mood, imagery, sound, rhythm & metre, rhyme, form,
structure, SMILE, and a top-band PEEL paragraph on Blake's The Tyger.
"""

META = {
    "name": "Simile Is Not Like a Metaphor",
    "kicker": "Claude Sitcom · Ep 7 · How Poems Work",
    "dek": "Term 2 Poetry begins, Will is furious that other poets exist, and Metaphor and Simile refuse to be called twins. {chapters} scenes.",
    "gap": 0.32,
    "unit": "Scene",
    "lab": "poetry-toolkit",
    "kit": ["sitcom", "english"],
    "title": "Claude Sitcom Ep 7: Simile Is Not Like a Metaphor (How Poems Work)",
    "h1": "All the School's a Stage: Simile Is Not Like a Metaphor",
    "quiz_name": "How Poems Work",
}

CAST = {
    "narr":     {"voice": "bf_emma",     "speed": 0.96, "name": "Narrator"},
    "mei":      {"voice": "af_bella",    "speed": 1.04, "name": "Mei"},
    "mrh":      {"voice": "bm_lewis",    "speed": 0.92, "name": "Mr H"},
    "will":     {"voice": "bm_fable",    "speed": 0.9,  "name": "Will"},
    "nib":      {"voice": "bm_george",   "speed": 0.9,  "name": "Nib"},
    "kevin":    {"voice": "am_puck",     "speed": 1.1,  "name": "Kevin"},
    "metaphor": {"voice": "bf_isabella", "speed": 1.0,  "name": "Metaphor"},
    "simile":   {"voice": "af_sky",      "speed": 1.05, "name": "Simile"},
    "volta":    {"voice": "am_liam",     "speed": 1.06, "name": "Volta"},
}


def L(id, who, text, pause=0.0, say=None):
    line = {"id": id, "who": who, "cap": f"**{CAST[who]['name']}:** {text}", "pause": pause}
    line["say"] = say if say else text.replace("**", "")
    return line


CHAPTERS = [
    {
        "id": "cold", "title": "Cold open", "short": "Cold open", "card": False,
        "lines": [
            L("term2", "narr", "Term 2. Room 8H. Mug number nine. Today, Year 8 begins **Poetry**.", 0.25,
              say="Term two. Room eight H. Mug number nine. Today, Year eight begins Poetry."),
            L("154", "will", "Finally! **154** sonnets, published in **1609** — every single one a masterpiece by me!", 0.3,
              say="Finally! One hundred and fifty-four sonnets, published in sixteen oh-nine — every single one a masterpiece by me!"),
            L("others", "mrh", "And Blake, Dickinson, Wordsworth, Rossetti, Tennyson, Keats, and Wilfred Owen.", 0.3),
            L("cloud", "will", "**Wordsworth**?! The man wandered lonely as a cloud! Where are the sword fights?!", 0.35),
            L("spot", "mei", "Poetry's easy! 'Tennyson uses a metaphor, \"like a thunderbolt\", which makes the reader want to read on.'", 0.35),
            L("ink", "nib", "She wrote 'makes the reader want to read on'! Fetch a blotter, I am haemorrhaging ink!", 0.3),
            L("not", "simile", "Excuse me?! 'Like a thunderbolt' has **LIKE** right in front of it! That's **me** — **Simile**!", 0.3),
            L("lion", "metaphor", "And I am **Metaphor**! Simile says he is *like* a lion; **I AM a lion**! We are NOT twins!", 0.35),
            L("rev", "mei", "Term 2 Poetry: **one star**. Too many loud relatives.", 0.45,
              say="Term two Poetry: one star. Too many loud relatives."),
            L("title", "narr", "All the School's a Stage. Episode seven: Simile Is Not Like a Metaphor.", 1.1),
        ],
    },
    {
        "id": "golden", "title": "Effect, speaker & tone", "short": "Effect & speaker",
        "lines": [
            L("gear", "mrh", "A poem is a machine for making meaning. Just naming a gear is **feature spotting** — it earns almost nothing.", 0.28),
            L("chain", "nib", "Travel the whole chain — **WHAT? HOW? WHY?**: **Technique + short embedded Evidence + Effect + Meaning**!", 0.3),
            L("zoom", "mrh", "Zoom in on one word's **connotations** — its associations beyond the dictionary — and link to the **theme**.", 0.28),
            L("poet", "mei", "So when the poet says 'I', I write what the poet was feeling that Tuesday?", 0.28),
            L("persona", "nib", "Trap! The '**I**' is the **speaker** or **persona**, not automatically the poet! Remember: **the poet chooses, the speaker says**.", 0.3),
            L("duke", "mrh", "In Browning's **dramatic monologue** *My Last Duchess*, a jealous Duke speaks to a silent listener — Browning wasn't a murderer.", 0.3),
            L("tone", "nib", "Distinguish **tone** — the speaker's attitude, like *wistful*, *awed*, or *bitter* — from **mood**, the atmosphere the reader feels.", 0.28),
            L("shift", "mei", "Like that Singapore poem *Monsoon, Four O'Clock*! Over Toa Payoh the sky 'clenches like a fist', then under the HDB void deck the storm becomes 'an old friend'!", 0.32,
              say="Like that Singapore poem Monsoon, Four O'Clock! Over Toa Payoh the sky clenches like a fist, then under the H D B void deck the storm becomes an old friend!"),
            L("smile", "mrh", "Checklist any unseen poem with **SMILE**: **Structure, Meaning, Imagery, Language, Effect** — with **Effect** in every sentence.", 0.45),
        ],
    },
    {
        "id": "imagery", "title": "Imagery: pictures made of words", "short": "Imagery",
        "lines": [
            L("lib", "narr", "Library. Metaphor and Simile are still refusing to share a chair.", 0.25),
            L("sim", "simile", "Watch the badge! A **simile** compares two things using '**like**' or '**as**', keeping them separate: Tennyson's eagle 'like a thunderbolt he falls'!", 0.3),
            L("met", "metaphor", "A **metaphor** is bolder — it fuses them! Blake's 'Tyger Tyger, **burning bright**' turns stripes straight into fire!", 0.3),
            L("ext", "metaphor", "Stretch me across a whole poem and I'm an **extended metaphor**! Emily Dickinson wrote nearly **1,800** poems — and turned hope into a bird!", 0.3,
              say="Stretch me across a whole poem and I'm an extended metaphor! Emily Dickinson wrote nearly eighteen hundred poems — and turned hope into a bird!"),
            L("feath", "mei", "'\"Hope\" is the thing with **feathers** - / That **perches** in the soul -'. 'Feathers' connotes softness and flight, yet this tiny bird survives the gale!", 0.32),
            L("pers", "nib", "**Personification** gives human actions to the non-human: in Tennyson's *The Eagle*, 'The **wrinkled** sea beneath him **crawls**', shrinking the ocean into something old and weak.", 0.32),
            L("pathf", "nib", "**Pathetic fallacy** is weather or nature mirroring human emotion: Keats's 'The sedge has withered from the lake, / And no birds sing' mirrors despair.", 0.3),
            L("sem", "mrh", "Add **symbolism** — Blake's Lamb for innocence — and a **semantic field**: words from one area, like *hammer, chain, furnace, anvil* in *The Tyger*.", 0.3),
            L("two", "mei", "Okay, zooming in on 'feathers' actually made sense. **Two and a half stars**!", 0.45),
        ],
    },
    {
        "id": "sound", "title": "Sound: poems are made to be heard", "short": "Sound",
        "lines": [
            L("aloud", "mrh", "Poems began as song. Always mouth a poem silently in an exam so you **hear** what the sounds do.", 0.28),
            L("allit", "mei", "Any repeated letter anywhere is **alliteration**, right?", 0.25),
            L("start", "nib", "No, darling! **Alliteration** is repeated consonant sounds at the **start** of nearby words: 'He **c**lasps the **c**rag with **c**rooked hands' — hard talons gripping rock!", 0.32),
            L("asscon", "nib", "Repeated **vowel** sounds inside words are **assonance** — Poe's 'm**e**llow w**e**dding b**e**lls' — while inner or final consonants are **consonance**, like 'bla**ck**, cra**ck**ed ro**ck**s'.", 0.32),
            L("sib", "simile", "**Sibilance** repeats *s* or *sh* sounds! It can be a gentle sea whisper **or** sinister — Owen's '**s**hrill, demented choirs of wailing **sh**ells'! Always say which!", 0.32),
            L("plos", "metaphor", "**Plosives** — *p, b, t, d, k, g* — explode off the lips! And **onomatopoeia** imitates the sound itself!", 0.28),
            L("owen", "mrh", "Hear Wilfred Owen stack them all: 'Only the s**t**u**tt**ering **r**ifles' **r**apid **r**a**tt**le' — alliteration, onomatopoeia, and harsh *t* plosives firing like a machine gun.", 0.45),
        ],
    },
    {
        "id": "rhythm", "title": "Rhythm, metre & rhyme", "short": "Rhythm & rhyme",
        "lines": [
            L("beat", "mrh", "**Rhythm** is the pattern of stressed and unstressed syllables; regular rhythm is **metre**, measured in **feet**.", 0.28),
            L("trick", "mei", "Memory trick! **An iamb runs a-WAY** — da-DUM! **A trochee is a TI-ger** — DUM-da!", 0.3),
            L("son18", "will", "My turn! Five iambs make **iambic pentameter**: 'Shall I com-PARE thee TO a SUM-mer's DAY?' Steady as a heartbeat!", 0.32,
              say="My turn! Five iambs make iambic pen tammiter: Shall I compare thee to a summer's day? Steady as a heartbeat!"),
            L("tetra", "mrh", "Four feet make **tetrameter** — Wordsworth's gentle 'I WAN-dered LONE-ly AS a CLOUD' — while Blake's trochaic 'TY-ger TY-ger' hammers like a forge, and **anapaests** gallop!", 0.32,
              say="Four feet make teh trammiter — Wordsworth's gentle I wandered lonely as a cloud — while Blake's trochaic Tyger Tyger hammers like a forge, and anna-pests gallop!"),
            L("rhyme", "nib", "Now **rhyme**: **full rhyme** matches cleanly (*trees / breeze*); **half** or **slant rhyme** (*soul / all*) feels uneasy and unfinished; **internal rhyme** chimes mid-line.", 0.3),
            L("eye", "will", "And mind historical pronunciation! Blake's *eye* and *symmetry* looks like an **eye rhyme** today, though Georgian Londoners often rhymed it!", 0.3),
            L("scheme", "simile", "Label a **rhyme scheme** with letters! Wordsworth's *Daffodils* goes **ABABCC** — closing each stanza on a neat **rhyming couplet**!", 0.3,
              say="Label a rhyme scheme with letters! Wordsworth's Daffodils goes A B A B C C — closing each stanza on a neat rhyming couplet!"),
            L("three5", "mei", "Three and a half stars. Don't tell Will, his head won't fit through the library door.", 0.45),
        ],
    },
    {
        "id": "form", "title": "Form, structure & the Volta", "short": "Form & structure",
        "lines": [
            L("rooms", "mrh", "*Stanza* is Italian for 'room'. Count lines from two to eight: **Cool Tigers Quietly Creep, Silently Stalking Owls** — couplet, tercet, quatrain, cinquain, sestet, septet, octave.", 0.32,
              say="Stanza is Italian for room. Count lines from two to eight: Cool Tigers Quietly Creep, Silently Stalking Owls — couplet, tercet, quatrain, sing-kane, sestet, septet, octave."),
            L("ends", "nib", "**End-stopped** lines pause with punctuation at the end; **enjambment** spills the sentence straight over the line break without pausing!", 0.28),
            L("caes", "kevin", "And a pause right **inside** a line is a **caesura**! Edward Thomas writes 'Yes. I remember Adlestrop—' and Wordsworth's dashes make you stop and gaze with me!", 0.32,
              say="And a pause right inside a line is a si zyoor uh! Edward Thomas writes Yes. I remember Addle-strop — and Wordsworth's dashes make you stop and gaze with me!"),
            L("volta", "volta", "Stand back — **VOLTA** incoming! Italian for **turn**! Whenever a poem flips mood or argument on '**Yet**' or '**But**', that's me!", 0.3),
            L("sonnets", "volta", "A **Petrarchan sonnet** has an eight-line **octave** (ABBAABBA) and six-line **sestet**, turning at **line 9** — like Rossetti's *Remember*!", 0.3,
              say="A peh-trar-kan sonnet has an eight-line octave and six-line sestet, turning at line nine — like Rossetti's Remember!"),
            L("ross", "nib", "Rossetti begs 'Remember me', turns on '**Yet**', and closes tenderly: 'Better by far you should forget and smile / Than that you should remember and be sad.'", 0.3),
            L("wson", "will", "Whereas my **Shakespearean sonnet** has **three quatrains** and a final **rhyming couplet** — ABAB CDCD EFEF GG — saving the knockout turn for **line 13**!", 0.32,
              say="Whereas my Shakespearean sonnet has three quatrains and a final rhyming couplet — A B A B, C D C D, E F E F, G G — saving the knockout turn for line thirteen!"),
            L("free", "mrh", "Know **ballad**, **elegy**, **ode**, **haiku**, **villanelle**, **cyclical structure** — Blake changing 'Could frame' to '**Dare** frame' — and **free verse**: no fixed rhyme or metre, yet **deliberate** line breaks!", 0.32,
              say="Know ballad, elegy, ode, haiku, villa-nell, cyclical structure — Blake changing Could frame to Dare frame — and free verse: no fixed rhyme or metre, yet deliberate line breaks!"),
            L("p1", "mei", "Let's climb **PEEL** on *The Tyger*! **Point**: Blake presents the creator as terrifyingly powerful through a **semantic field** of blacksmithing.", 0.26),
            L("p2", "mei", "**Evidence** & **Explain**: in 'In what **furnace** was thy brain?', 'furnace' connotes blinding heat, while trochaic hammer-blows enact the forging.", 0.28),
            L("p3", "mei", "**Link**: this fills the reader with awe — or **perhaps** fear at a maker who *dares* create something so deadly!", 0.45),
        ],
    },
    {
        "id": "recap", "title": "Save yourself some marks", "short": "Exam traps",
        "lines": [
            L("intro", "narr", "End of lesson. Six poetry traps that cost Year 8 marks every year.", 0.25,
              say="End of lesson. Six poetry traps that cost Year eight marks every year."),
            L("mnem", "mei", "Hooks! **SMILE**; **WHAT? HOW? WHY?**; **An iamb runs a-WAY, a trochee is a TI-ger**; and **Cool Tigers Quietly Creep, Silently Stalking Owls**!", 0.32),
            L("t1", "nib", "One. Never stop at feature spotting, and ban 'makes the reader want to read on' — explain the exact **effect**!", 0.28),
            L("t2", "mrh", "Two. Say '**the speaker**', not 'the poet'. The 'I' may be an invented persona.", 0.28),
            L("t3", "kevin", "Three. Don't copy out whole stanzas! Embed **two to six** precise words inside your sentence.", 0.28),
            L("t4", "volta", "Four. Never ignore **form and structure** — track line breaks, caesuras, and the **volta**!", 0.28,
              say="Four. Never ignore form and structure — track line breaks, si zyoor uhs, and the volta!"),
            L("t5", "simile", "Five. **Simile** uses *like* or *as*; **Metaphor** says it *is*; and **alliteration** is **starting** sounds only!", 0.28),
            L("t6", "metaphor", "Six. **Free verse** is not 'anything goes' — its line breaks and pauses are still deliberate!", 0.3),
            L("rev", "mei", "How Poems Work: **four and a half stars**! Adding 'perhaps' for an alternative reading felt very smart.", 0.32),
            L("half", "will", "FOUR AND A HALF?! You gave *me* four in Episode One! Wordsworth wrote about **flowers**!", 0.8),
        ],
    },
    {
        "id": "quiz", "title": "Quick-fire quiz", "short": "Quiz",
        "lines": [
            L("intro", "mrh", "Quick-fire quiz! Say each answer out loud before it appears.", 0.3),
            L("q1", "mrh", "Is 'And **like** a thunderbolt he falls' a **simile** or a **metaphor**?", 4.0),
            L("a1", "simile", "A **simile**! It compares using '**like**', keeping the eagle and the thunderbolt separate."),
            L("q2", "mrh", "What do we call weather or nature mirroring human emotion, as in 'The sedge has withered'?", 4.0),
            L("a2", "nib", "**Pathetic fallacy** — a special type of personification."),
            L("q3", "mrh", "Does Blake's 'TY-ger TY-ger, BURN-ing BRIGHT' use **iambic** or **trochaic** rhythm?", 4.0),
            L("a3", "metaphor", "**Trochaic** — stressed then unstressed, **DUM-da**, hammering like a blacksmith's forge!"),
            L("q4", "mrh", "What is the difference between **enjambment** and a **caesura**?", 4.0,
              say="What is the difference between enjambment and a si zyoor uh?"),
            L("a4", "kevin", "**Enjambment** runs over the end of a line without punctuation; a **caesura** is a pause **mid-line**!",
              say="Enjambment runs over the end of a line without punctuation; a si zyoor uh is a pause mid-line!"),
            L("q5", "mrh", "What is a **volta**, and where does it usually fall in a **Petrarchan** versus a **Shakespearean** sonnet?", 4.0,
              say="What is a volta, and where does it usually fall in a peh-trar-kan versus a Shakespearean sonnet?"),
            L("a5", "volta", "The **turn** in mood or argument: at **line 9** in a Petrarchan sonnet, and usually **line 13** in a Shakespearean sonnet!",
              say="The turn in mood or argument: at line nine in a peh-trar-kan sonnet, and usually line thirteen in a Shakespearean sonnet!"),
            L("outro", "mrh", "Brilliant work. Now try the **How Poems Work** quiz in your English Lab.", 0.4),
            L("st1", "simile", "You were **like** a star today, Metaphor!", 0.3),
            L("st2", "metaphor", "Darling, I **AM** a star.", 1.1),
        ],
    },
]
