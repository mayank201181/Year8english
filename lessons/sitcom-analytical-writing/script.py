"""ALL THE SCHOOL'S A STAGE, episode 15 ("Climbing the PEEL Ladder"):
Teaches Analytical Writing (lib/topics/analytical-writing.ts).

Mei drops a sixteen-word Romeo and Juliet quote onto the floor of her essay as its own sentence,
causing Quotey (a glamorous pair of golden quotation marks) to crash onto the tiles in outrage,
while Zoom (a jeweller's loupe) inspects her zero-analysis 'This shows he loves her'. With Mr H,
Will, Nib and Kevin, Mei learns the four levels from retelling to perceptive analysis, arguable
theses, PEEL and PETAL, embedding short quotes, word-level zoom, analytical verbs, alternative
interpretations, integrated context, and comparing two poems side by side.
"""

META = {
    "name": "Climbing the PEEL Ladder",
    "kicker": "Claude Sitcom · Ep 15 · Analytical Writing",
    "dek": "A pair of golden quotation marks refuses to be dropped onto the floor on her own, and Room 8H learns how to turn retelling into top-band analysis. {chapters} scenes.",
    "gap": 0.32,
    "unit": "Scene",
    "lab": "analytical-writing",
    "kit": ["sitcom", "english"],
    "title": "Claude Sitcom Ep 15: Climbing the PEEL Ladder (Analytical Writing)",
    "h1": "All the School's a Stage: Climbing the PEEL Ladder",
    "quiz_name": "Analytical Writing",
}

CAST = {
    "narr":   {"voice": "bf_emma",    "speed": 0.96, "name": "Narrator"},
    "mei":    {"voice": "af_bella",   "speed": 1.04, "name": "Mei"},
    "mrh":    {"voice": "bm_lewis",   "speed": 0.92, "name": "Mr H"},
    "will":   {"voice": "bm_fable",   "speed": 0.9,  "name": "Will"},
    "nib":    {"voice": "bm_george",  "speed": 0.9,  "name": "Nib"},
    "kevin":  {"voice": "am_puck",    "speed": 1.1,  "name": "Kevin"},
    "quotey": {"voice": "af_aoede",   "speed": 1.05, "name": "Quotey"},
    "zoom":   {"voice": "am_michael", "speed": 0.98, "name": "Zoom"},
}


def L(id, who, text, pause=0.0, say=None):
    line = {"id": id, "who": who, "cap": f"**{CAST[who]['name']}:** {text}", "pause": pause}
    line["say"] = say if say else text.replace("**", "")
    return line


CHAPTERS = [
    {
        "id": "cold", "title": "Cold open", "short": "Cold open", "card": False,
        "lines": [
            L("tues", "narr", "Tuesday. Room 8H. Mr Hargreaves has reached mug twenty-two. Essay drafts are due.", 0.28,
              say="Tuesday. Room eight H. Mr Hargreaves has reached mug twenty-two. Essay drafts are due."),
            L("read", "mei", "'Romeo climbs the wall. \"But, soft! what light through yonder window breaks? It is the east, and Juliet is the sun.\" This shows he loves her.'", 0.35),
            L("crash", "quotey", "OW! My serifs! You just **dropped** me onto the floor with no sentence holding me up!", 0.35),
            L("who", "mei", "Did... did my quotation marks just yell at me?", 0.25),
            L("iam", "quotey", "Quotey! Golden quotation marks! I am meant to be **woven into grammar**, not dumped between full stops like abandoned luggage!", 0.32),
            L("loupe", "zoom", "Zoom. Jeweller's loupe. Worse: you copied sixteen words of Will's poetry and explained **none** of them.", 0.3),
            L("mrh", "mrh", "Retelling the plot, a **dropped quotation**, and 'this shows'. Level one, Mei.", 0.3),
            L("will", "will", "I wrote the greatest metaphor in Christendom, and she gave essay writing **one star**.", 0.32),
            L("conf", "mei", "I proved he loved her! What else do they want from me?!", 0.28),
            L("climb", "mrh", "Not **what** happens. **How** and **why**. Fetch the ladder.", 0.4),
            L("title", "narr", "All the School's a Stage. Episode fifteen: Climbing the PEEL Ladder.", 1.1),
        ],
    },
    {
        "id": "levels", "title": "Analysis, not retelling — and your thesis", "short": "Levels & thesis",
        "lines": [
            L("greek", "nib", "**Analysis** comes from Greek **analusis** — untying a knot — and **essay** from French **essayer**, meaning **to try** an argument.", 0.3),
            L("pundit", "mrh", "A fan says 'we scored' — that's **retelling**. A pundit explains **how** the winger dragged the defender wide — that's **analysis**.", 0.32),
            L("cal", "will", "Take three words from **The Tempest**, Act 1 Scene 2: Caliban cries, '**This island's mine**'.", 0.3,
              say="Take three words from The Tempest, Act one, Scene two: Caliban cries, This island's mine."),
            L("l12", "mrh", "**Level one** retells: 'Caliban says it's his.' **Level two** explains meaning: 'He thinks Prospero stole it.' Still no methods.", 0.3),
            L("l3", "zoom", "**Level three** analyses method: the blunt possessive pronoun '**mine**' sounds fierce and defiant, rejecting Prospero's rule.", 0.3),
            L("l4", "nib", "**Level four** is perceptive: in **1611**, as English ships claimed land in the Americas, '**mine**' challenges whether newcomers own what they take.", 0.35,
              say="Level four is perceptive: in sixteen eleven, as English ships claimed land in the Americas, mine challenges whether newcomers own what they take."),
            L("announce", "mei", "Okay! So I start my essay: 'In this essay I am going to write about Caliban'?", 0.28),
            L("no", "nib", "Never **announce**! Open with an arguable **thesis** — the one-sentence argument your whole essay proves.", 0.3),
            L("form", "mrh", "Use the formula: **Shakespeare presents** Caliban as both monster and victim, **in order to** make the audience question power.", 0.32),
            L("although", "mei", "Or use **although** for nuance: '**Although** Prospero seems wise, Shakespeare **exposes** his cruelty towards Caliban'!", 0.45),
        ],
    },
    {
        "id": "embed", "title": "PEEL, PETAL and embedding short quotes", "short": "Embedding quotes",
        "lines": [
            L("peel", "mrh", "Each body paragraph climbs **PEEL**: **Point**, **Evidence**, **Explain**, **Link** — or **PETAL**, splitting Technique and Analysis.", 0.32),
            L("jmb", "will", "When Juliet cries '**My only love sprung from my only hate!**', your **Point** claims love is dangerous, **Evidence** quotes it, **Explain** unpacks the **antithesis**, and **Link** steps back to fate!", 0.35),
            L("longest", "zoom", "Golden rule: **Explain** is the **longest** part! Milk one tiny quote for three sentences of **What, How, Why**.", 0.3),
            L("snip", "quotey", "Which brings us to me! Remember my motto: **Snip it, slip it, unzip it!**", 0.3),
            L("how", "quotey", "**Snip** the quote down to **one to eight words** — only the words you will actually **unzip**!", 0.28),
            L("weave", "mei", "Then **slip** it into my own sentence: 'Romeo's metaphor of Juliet as \"**the sun**\" suggests his world revolves around her'!", 0.32),
            L("happy", "quotey", "Ooh, feel that grammar! Read it aloud without my quote marks — it flows as one smooth English sentence!", 0.3),
            L("colon", "kevin", "Two more ways! Put a **colon** after a full clause: 'Hamlet's disgust is clear**:** Denmark is \"an unweeded garden\".' Or use a comma after 'he cries,'!", 0.35),
            L("tools", "nib", "Keep quotations exact, like '**star-cross'd**'. Use a **slash** for a verse line break, **ellipsis** for cuts, and **square brackets** to adjust grammar.", 0.32),
            L("brack", "quotey", "Like: Caliban says Prospero taught '**[him]** language'! Stylish, accurate, and zero bruised quotation marks!", 0.3),
            L("stars", "mei", "Two stars. Snip it, slip it, unzip it is weirdly catchy.", 0.45),
        ],
    },
    {
        "id": "zoom", "title": "Word-level zoom and analytical verbs", "short": "Word-level zoom",
        "lines": [
            L("lib", "narr", "Thursday, the library. Zoom is inspecting Percy Bysshe Shelley's sonnet **Ozymandias**.", 0.3),
            L("ozy", "will", "A shattered statue in the sand wears a '**sneer of cold command**'. Good line. Wish I'd written it.", 0.3),
            L("den", "zoom", "**Zoom in** on one word! '**Sneer**': its **denotation** is a curling lip. Swap it for 'smile' and the tyrant vanishes!", 0.3),
            L("conn", "mei", "Because '**sneer**' **connotes** contempt, mockery and cruelty — and the hard 'c' **alliteration** in '**cold command**' sounds barked!", 0.32),
            L("sem", "nib", "Name the **word class** and **semantic field**: Dickens's frost, rime and ice build a semantic field of cold, while the verb '**clutching**' shows desperate greed.", 0.35),
            L("shows", "mei", "So I write: 'This metaphor **shows** imagery and **makes the reader want to read on**'?", 0.28),
            L("leak", "nib", "Ink emergency! Ban '**makes the reader want to read on**', '**creates imagery**' and '**paints a picture in the reader's head**'!", 0.32),
            L("spot", "mrh", "And never **feature-spot** — 'there is alliteration here' with no effect earns almost nothing.", 0.28),
            L("verbs", "zoom", "Retire 'shows' after one use! Upgrade to **analytical verbs**: **suggests**, **implies**, **conveys**, **evokes**, **emphasises**, **exposes**, **challenges**, **foreshadows**.", 0.35),
            L("suggest", "mrh", "Notice we say '**suggests**', rarely 'proves' — because great literature invites interpretation.", 0.45),
        ],
    },
    {
        "id": "alt", "title": "Alternative readings and integrated context", "short": "Deeper readings",
        "lines": [
            L("ambig", "will", "My best lines mean **two** things at once. Hamlet calls the world '**an unweeded garden / That grows to seed**'.", 0.32),
            L("tent", "nib", "Top-band essays explore **alternative interpretations** using **tentative language**: **perhaps**, **might**, **could**, **arguably**.", 0.3),
            L("r1", "mei", "'The adjective \"**unweeded**\" **perhaps** blames Hamlet's mother for neglecting Denmark through her hasty marriage...'", 0.28),
            L("r2", "zoom", "'**Alternatively**, it **may** point to King Claudius, suggesting corruption is choking the whole state.' Then judge which reading is stronger!", 0.32),
            L("mir", "will", "Or when Miranda cries '**O brave new world**', she sounds hopeful — yet Prospero's dry reply, '**'Tis new to thee**', makes it ironic!", 0.32),
            L("ctx", "mrh", "Now the **L** in PEEL: link to the writer's **purpose**, **audience** and **context**.", 0.28),
            L("bolt", "mei", "Easy! 'William Shakespeare was born in **1564** in Stratford-upon-Avon and married Anne Hathaway.'", 0.3,
              say="Easy! William Shakespeare was born in fifteen sixty-four in Stratford-upon-Avon and married Anne Hathaway."),
            L("cross", "mrh", "Cross it out. That's **bolted-on biography** — you could paste it into any essay and it explains zero words.", 0.3),
            L("hurt", "will", "Stratford is a very relevant market town!", 0.25),
            L("stars2", "nib", "**Integrate** context into the word: for an Elizabethan audience who feared astrology, '**star-cross'd**' marked the lovers as doomed by fate from line six.", 0.45),
        ],
    },
    {
        "id": "compare", "title": "Comparing two texts and the PEEL showpiece", "short": "Compare & PEEL",
        "lines": [
            L("skel", "mrh", "Whole-essay architecture: **introduction** with your thesis, **logical** body paragraphs, and a deeper **conclusion** with no new quotes.", 0.3),
            L("comp", "nib", "When **comparing two texts**, avoid writing all of Poem A then all of Poem B. Write **integrated** paragraphs comparing **methods**!", 0.3),
            L("conn", "kevin", "Use comparative connectives! Similarity: **similarly, likewise, both**. Difference: **whereas, in contrast, while**!", 0.3),
            L("blake", "zoom", "**Both** poets attack tyranny, **whereas** Shelley's '**sneer of cold command**' mocks one broken statue, William Blake's '**mind-forg'd manacles**' condemn mental chains across all London!", 0.35),
            L("ready", "mrh", "Right, Mei. Final test: how does Shakespeare present Romeo's feelings in Act 2 Scene 2? Climb the ladder.", 0.3,
              say="Right, Mei. Final test: how does Shakespeare present Romeo's feelings in Act two, Scene two? Climb the ladder."),
            L("p1", "mei", "**Point**: Shakespeare **presents** Romeo's love as worshipful and dangerously all-consuming.", 0.25),
            L("p2", "mei", "**Evidence**: seeing her at the window, Romeo declares that 'Juliet is **the sun**'.", 0.25),
            L("p3", "mei", "**Explain**: the metaphor places her at the centre of his universe; '**sun**' connotes light and life, yet **perhaps** hints at sudden obsession after Rosaline.", 0.32),
            L("p4", "mei", "**Link**: because the sun also **burns**, the image subtly **foreshadows** a blazing passion that destroys them both.", 0.3),
            L("sigh", "mrh", "Sigh... Level four, Mei. Quotey didn't even hit the floor.", 0.48),
        ],
    },
    {
        "id": "recap", "title": "Save yourself some marks", "short": "Exam traps",
        "lines": [
            L("bell", "narr", "Friday afternoon. Room 8H's analytical survival guide.", 0.28,
              say="Friday afternoon. Room eight H's analytical survival guide."),
            L("hooks", "mei", "Memory hooks! Paragraph shape: **PEEL** or **PETAL**. Explanation: **What, How, Why**. Quotes: **Snip it, slip it, unzip it**!", 0.35),
            L("t1", "mrh", "One. Never **retell the plot** or open with 'In this essay I will...'. Answer straight away with an arguable **thesis**.", 0.3),
            L("t2", "quotey", "Two. Never leave **dropped quotations** or copy four-line chunks! Weave **one to eight words** smoothly into your sentence.", 0.3),
            L("t3", "nib", "Three. Don't **feature-spot** or write 'makes the reader want to read on'. Name the method accurately and explain its **specific effect**.", 0.3),
            L("t4", "zoom", "Four. Swap tired 'shows' for precise **analytical verbs** — **suggests, implies, conveys, exposes** — and zoom in on **connotations**.", 0.3),
            L("t5", "will", "Five. Use '**perhaps**' and '**alternatively**' for second readings, and **integrate** context into the words — don't bolt on my birthday.", 0.32),
            L("t6", "kevin", "Six. Compare two texts **together** in each paragraph using **whereas**, **in contrast** and **similarly**!", 0.3),
            L("rev", "mei", "Analytical Writing: **four stars**. Unpacking one word is way faster than copying sixteen.", 0.32),
            L("four", "quotey", "Four stars?! After I taught you square brackets?!", 0.28),
            L("hand", "mei", "My hand still hurts from PEEL rung three.", 0.9),
        ],
    },
    {
        "id": "quiz", "title": "Quick-fire quiz", "short": "Quiz",
        "lines": [
            L("intro", "mrh", "Quick-fire quiz! Say each answer out loud before it appears.", 0.3),
            L("q1", "mrh", "Which part of a **PEEL** paragraph should always be the **longest**?", 4.0),
            L("a1", "zoom", "The **Explain** section — unpacking methods, connotations and effects."),
            L("q2", "mrh", "What does it mean to **embed** a quotation?", 4.0),
            L("a2", "quotey", "Weaving a **short quotation** smoothly inside your own **grammatical sentence**!"),
            L("q3", "mrh", "What is the difference between a word's **denotation** and its **connotations**?", 4.0),
            L("a3", "nib", "**Denotation** is its dictionary meaning; **connotations** are the feelings and ideas it suggests."),
            L("q4", "mrh", "Which words signal an **alternative interpretation**?", 4.0),
            L("a4", "mei", "Tentative words like **perhaps**, **might** or **could**, paired with **alternatively** or **on the other hand**."),
            L("q5", "mrh", "Why does writing 'Shakespeare was born in 1564' earn no context marks on its own?", 4.0,
              say="Why does writing: Shakespeare was born in fifteen sixty-four, earn no context marks on its own?"),
            L("a5", "will", "Because context must be **integrated** to explain how the **words** work on the audience, not bolted on!"),
            L("outro", "mrh", "Brilliant work. Now try the **Analytical Writing** quiz in your English Lab.", 0.4),
            L("st1", "quotey", "Promise you'll never drop me on the floor again?", 0.25),
            L("st2", "mei", "Snipped, slipped and unzipped. Promise.", 1.2),
        ],
    },
]
