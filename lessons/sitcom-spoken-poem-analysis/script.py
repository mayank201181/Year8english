"""ALL THE SCHOOL'S A STAGE, episode 10 ("Unseen, Unheard Of"): Unseen Poems & Spoken Analysis.
Teaches Unseen Poems & Spoken Analysis (lib/topics/spoken-poem-analysis.ts).

Mr Hargreaves wheels out the school hall lectern for the Term 2 spoken assessment: an unseen poem,
limited prep time, and a three-to-five-minute live spoken analysis followed by teacher questions.
Mei meets Mike the Microphone (who has crippling stage fright and feedback-screeches whenever anyone
says "Um, basically, this poem is about...") and Coach Timer (a brisk stopwatch referee). With Will,
Nib and Kevin, Mei learns the calm read-by-read routine (TSST gist, shift/volta, zooming in on 2–3
rich details for connotations), the "On the surface... but really..." thesis, cue-card planning,
spoken PEEL delivery (PEEP, signposting, tentative phrasing), and handling follow-up questions (PACE).
"""

META = {
    "name": "Unseen, Unheard Of",
    "kicker": "Claude Sitcom · Ep 10 · Unseen Poems & Spoken Analysis",
    "dek": "Mei faces a poem she has never met, a terrified stage microphone, and a brisk stopwatch referee. {chapters} scenes.",
    "gap": 0.32,
    "unit": "Scene",
    "lab": "spoken-poem-analysis",
    "kit": ["sitcom", "english"],
    "title": "Claude Sitcom Ep 10: Unseen, Unheard Of (Unseen Poems & Spoken Analysis)",
    "h1": "All the School's a Stage: Unseen, Unheard Of",
    "quiz_name": "Unseen Poems & Spoken Analysis",
}

CAST = {
    "narr":  {"voice": "bf_emma",   "speed": 0.96, "name": "Narrator"},
    "mei":   {"voice": "af_bella",  "speed": 1.04, "name": "Mei"},
    "mrh":   {"voice": "bm_lewis",  "speed": 0.92, "name": "Mr H"},
    "will":  {"voice": "bm_fable",  "speed": 0.9,  "name": "Will"},
    "nib":   {"voice": "bm_george", "speed": 0.9,  "name": "Nib"},
    "kevin": {"voice": "am_puck",   "speed": 1.1,  "name": "Kevin"},
    "mike":  {"voice": "am_liam",   "speed": 1.05, "name": "Mike"},
    "timer": {"voice": "bf_alice",  "speed": 1.06, "name": "Timer"},
}


def L(id, who, text, pause=0.0, say=None):
    line = {"id": id, "who": who, "cap": f"**{CAST[who]['name']}:** {text}", "pause": pause}
    line["say"] = say if say else text.replace("**", "")
    return line


CHAPTERS = [
    {
        "id": "cold", "title": "Cold open", "short": "Cold open", "card": False,
        "lines": [
            L("hall", "narr", "Wednesday. The school hall. Mr Hargreaves is on mug number fifteen.", 0.25),
            L("task", "mrh", "Practice run. One **unseen poem**. Prep with a pen, then a **three-to-five-minute spoken analysis**.", 0.3),
            L("timer", "timer", "Coach Timer! Ten minutes prep on the clock! Move those eyeballs, people!", 0.28),
            L("panic", "mei", "Sir, I've never seen this poem before! What if I guess the wrong secret meaning?!", 0.28),
            L("mike", "mike", "Please don't panic into me. I'm Mike. I have terrible stage fright, and 'um' gives me hives.", 0.3),
            L("um", "mei", "Testing... **Um, this poem is basically about**... lots of techniques?", 0.35),
            L("squeak", "mike", "SQUEEEEAK! She said 'um'! AND 'basically'! AND 'lots of techniques'!", 0.3),
            L("nib", "nib", "My ink! Right onto the stage floor! Technique-listing is not an argument, darling!", 0.28),
            L("will", "will", "In my Globe, groundlings pelted actors with turnips for less! Stand tall, child!", 0.3),
            L("rev", "mei", "Unseen poetry: **one star**. Even the microphone is sweating.", 0.4),
            L("title", "narr", "All the School's a Stage. Episode ten: Unseen, Unheard Of.", 1.2),
        ],
    },
    {
        "id": "reads", "title": "Read cold without panicking", "short": "Reading & zooming",
        "lines": [
            L("room", "narr", "Period 4. Room 8H. Mr Hargreaves confiscates Mei's highlighter.", 0.25,
              say="Period four. Room eight H. Mr Hargreaves confiscates Mei's highlighter."),
            L("myth", "mrh", "First: there is **no single secret meaning**. An unseen tests your **method**, not your memory.", 0.28),
            L("three", "timer", "Read it **more than once**! Read One: the **literal story**. Read Two: **shifts and structure**. Read Three: **language and sound**!", 0.3),
            L("tsst", "mrh", "On your first read, ask **WHAT** is happening with **TSST**: **Title, Speaker, Situation, Tone**.", 0.28,
              say="On your first read, ask what is happening with T S S T: Title, Speaker, Situation, Tone."),
            L("persona", "nib", "Say '**the speaker**' or '**persona**', never assume it's the poet! Christina Rossetti is not literally ghost-writing from the grave.", 0.3),
            L("gist", "mei", "Let's try Edward Thomas's **Adlestrop**. Gist: a train stops at a quiet country station, and a blackbird sings.", 0.28,
              say="Let's try Edward Thomas's Addlestrop. Gist: a train stops at a quiet country station, and a blackbird sings."),
            L("unwont", "mei", "Wait — what does '**Unwontedly**' mean?! My whole talk is ruined!", 0.25),
            L("context", "mrh", "Use context. An express train stopping at a tiny empty village? It means **unusually**. One hard word never sinks you.", 0.3),
            L("how", "nib", "Next read: **HOW** does it work? Annotate **feature plus effect** — never write 'sibilance' without 'so what?'", 0.28),
            L("zoom", "mrh", "Don't list ten devices. Pick **two or three rich details** and **zoom in** on single words for **connotations**.", 0.3),
            L("cage", "will", "Take '**cage**': literally bars, yet it connotes **imprisonment**, being **owned**, being **on display** — or even **protection**!", 0.3),
            L("unzip", "mei", "Or in 'The sky **unzips** at four o'clock' — 'unzips' sounds sudden and cheeky, like Singapore rain flinging open a bag!", 0.32),
            L("depth", "mike", "Three moments explored deeply... instead of ten yelled at me? Oh, my grille feels calmer already.", 0.48),
        ],
    },
    {
        "id": "volta", "title": "Titles, endings and the volta", "short": "Volta & shifts",
        "lines": [
            L("lib", "narr", "Thursday. The library. Will is pointing dramatically at line nine of everything.", 0.28),
            L("journey", "mrh", "Almost every poem **changes**. Spot that shift and your talk has a spine: **before, turn, after**.", 0.28),
            L("volta", "will", "In a sonnet, the turn is the **volta**! Watch Christina Rossetti's Petrarchan sonnet, **Remember**.", 0.28),
            L("octave", "nib", "Lines one to eight, the **octave**, repeat the plea: 'Remember me when I am gone away.'", 0.25),
            L("yet", "mei", "Then line nine starts with '**Yet**'! 'Yet if you should forget me for a while...'", 0.28),
            L("sestet", "will", "And the **sestet** releases them: 'Better by far you should **forget and smile** / Than that you should remember and be sad.'", 0.32),
            L("signals", "mrh", "Look for **turn words** — *but, yet, still, now, however* — or shifts in **tense**, **tone**, or **place**.", 0.28),
            L("yeats", "mei", "Like W. B. Yeats's **The Lake Isle of Innisfree**! Two stanzas of dreamy island peace, 'bee-loud glade'...", 0.28,
              say="Like W B Yeats's The Lake Isle of Innisfree! Two stanzas of dreamy island peace, bee-loud glade..."),
            L("grey", "nib", "Then stanza three shifts to the city: 'While I stand on the roadway, or on the **pavements grey**.' Innisfree is only in his '**deep heart's core**'!", 0.32),
            L("open", "mrh", "Always check the **title**, **opening** and **ending**. Adlestrop opens 'Yes.' — like answering a friend mid-conversation.", 0.28,
              say="Always check the title, opening and ending. Addlestrop opens Yes, like answering a friend mid-conversation."),
            L("caesura", "kevin", "And in 'The steam hissed. Someone cleared his throat.' — full-stop **caesura**! Two tiny sounds in huge silence! That's me!", 0.3,
              say="And in The steam hissed. Someone cleared his throat — full-stop si zyoor uh! Two tiny sounds in huge silence! That's me!"),
            L("enjamb", "mei", "Then 'only the name' **enjambs** across the stanza break into wild flowers and birds! Two stars — no, three!", 0.5),
        ],
    },
    {
        "id": "thesis", "title": "On the surface, but really", "short": "Thesis & cue card",
        "lines": [
            L("prep", "narr", "Lunchtime. Coach Timer is drilling Mei's ten-minute prep routine.", 0.25),
            L("split", "timer", "Split your prep! Ten percent **gist**, forty percent **annotate**, thirty-five percent **cue card**, fifteen percent **whispered rehearsal**!", 0.3),
            L("whatth", "mrh", "Your first thirty seconds need a **thesis**: an arguable big idea that every point proves.", 0.25),
            L("badth", "mei", "Like: 'Paul Laurence Dunbar's **Sympathy** is about a bird in a cage that wants to get out'?", 0.28),
            L("retell", "nib", "That merely **retells**, darling! Use the formula: '**On the surface... but really...**'", 0.28),
            L("dunbar", "will", "Listen to Dunbar: 'It is not a carol of joy or glee, / But a **prayer** that he sends from his heart's deep core.'", 0.3),
            L("goodth", "mei", "**On the surface**, Sympathy describes a trapped bird, **but really** its prayer-like song explores human suffering and the ache for freedom!", 0.32),
            L("mnem", "mrh", "Now structure your four-minute talk: **Only Lazy Students Forget Proper Conclusions**.", 0.28),
            L("olsfpc", "timer", "**Overview** thesis! **Language** point! **Structure** point! **Form** point! **Personal response**! **Conclusion** returning to your thesis!", 0.3),
            L("script", "mei", "I'll write out all five hundred and fifty words and read them super fast!", 0.25),
            L("no", "mike", "NO! Reading a full script makes you stare at your shoes in a flat robot voice! Use a **cue card**!", 0.3),
            L("card", "mrh", "Three columns on one small card: **Point**, **short Quote**, **Effect word**. Glance down, then talk to us.", 0.48),
        ],
    },
    {
        "id": "oracy", "title": "Sounding like a critic", "short": "Delivery & PEEL",
        "lines": [
            L("stage", "narr", "Thursday afternoon. Mei steps back up to Mike on the hall stage.", 0.25),
            L("peep", "mike", "Remember **PEEP** up from your notes: **Pace, Eye contact, Emphasis, and Pauses**! Swap 'um' for a calm silent pause!", 0.3,
              say="Remember P E E P up from your notes: Pace, Eye contact, Emphasis, and Pauses! Swap um for a calm silent pause!"),
            L("sign", "mrh", "Guide the listener with **signposting**: 'My first point focuses on...', 'Moving on to structure...', 'To conclude...'", 0.28),
            L("tent", "nib", "And use **tentative phrasing**: 'This **could suggest**', '**perhaps**'. It shows poems hold multiple meanings.", 0.28),
            L("over", "mei", "So: 'It could maybe perhaps possibly suggest the bird might sort of be sad'?", 0.28),
            L("hedge", "mrh", "One hedge is thoughtful; five is soup. Be tentative about interpretation, **confident** with evidence.", 0.28),
            L("quote", "will", "Never say 'quote, unquote'! Slow down slightly and lift your voice so we **hear** the quotation marks!", 0.28),
            L("p", "mei", "Watch me climb the ladder on Adlestrop! **Point**: Moving to structure, the final stanza shifts from silence to vast song.", 0.25,
              say="Watch me climb the ladder on Addlestrop! Point: Moving to structure, the final stanza shifts from silence to vast song."),
            L("e", "mei", "**Evidence**: One blackbird sings, then '**Farther and farther**, all the birds / Of Oxfordshire and Gloucestershire.'", 0.28),
            L("ex", "mei", "**Explain**: Repeating 'farther' and rolling out those long county names makes the birdsong **ripple outwards**.", 0.28),
            L("l", "mei", "**Link**: **Evaluating** this alongside 1914 context, perhaps that ordinary minute feels like a last glimpse of peaceful England.", 0.3,
              say="Link: Evaluating this alongside nineteen fourteen context, perhaps that ordinary minute feels like a last glimpse of peaceful England."),
            L("happy", "mike", "Not one 'um'! Eye contact! Embedded quote! I didn't squeak once!", 0.5),
        ],
    },
    {
        "id": "questions", "title": "Follow-up questions without panic", "short": "Q&A & criteria",
        "lines": [
            L("clock", "timer", "Four minutes on the dot! Now: **teacher follow-up questions**!", 0.28),
            L("ask", "mrh", "Mei. You argued Dunbar's Sympathy is about pain. Could someone argue the ending is actually **hopeful**?", 0.32),
            L("uhoh", "kevin", "He challenged her! Abort! Breathe into the bag! Say 'I don't know' and run!", 0.28),
            L("notrap", "mrh", "A follow-up question isn't a trap — it's a chance to lift your mark by **thinking on your feet**.", 0.28),
            L("pace", "timer", "Use **PACE**: **Pause**, **Answer directly**, **Cite the poem**, **Extend or Evaluate**!", 0.28,
              say="Use P A C E: Pause, Answer directly, Cite the poem, Extend or Evaluate!"),
            L("pause", "mei", "That's an interesting question — let me look at the last stanza again.", 0.35),
            L("ans", "mei", "I can see a hopeful reading, because the bird flings a '**plea, that upward to Heaven**' reaches — he hasn't given up.", 0.3),
            L("weigh", "mei", "**However**, his wing is still '**bruised**' and the cage never opens, so I think the hope is real, yet painful and fragile.", 0.32),
            L("crit", "nib", "Magnificent! Five mark-scheme pillars: **Understanding, Analysis, Terminology, Personal response, and Delivery**.", 0.3),
            L("pers", "will", "And for **personal response**, never just say 'I liked it'! Name a line that lingered — like Dickinson's '**It asked a crumb - of me.**'", 0.32),
            L("sigh", "mrh", "You paused, went back to the text, and weighed two readings. Top marks.", 0.5),
        ],
    },
    {
        "id": "recap", "title": "Save yourself some marks", "short": "Exam traps",
        "lines": [
            L("intro", "narr", "Before the next speaker enters the hall, the cast would like to save you some marks.", 0.28),
            L("h1", "mei", "Memory hooks! **TSST** on Read One; **Only Lazy Students Forget Proper Conclusions** to structure your talk.", 0.3,
              say="Memory hooks! T S S T on Read One; Only Lazy Students Forget Proper Conclusions to structure your talk."),
            L("h2", "mike", "**PEEP** up from your cue card for delivery, and **PACE** for follow-up questions!", 0.28,
              say="P E E P up from your cue card for delivery, and P A C E for follow-up questions!"),
            L("t1", "mrh", "One. Don't **retell** the poem stanza by stanza. Open with an '**On the surface... but really...**' thesis.", 0.28),
            L("t2", "nib", "Two. Never **feature-spot** ten techniques. Explore **three rich moments** with connotations and effects.", 0.28),
            L("t3", "mike", "Three. Don't read a **full script** to your shoes! Speak from keyword notes and swap 'um' for silence.", 0.28),
            L("t4", "will", "Four. Don't confuse the **speaker** with the **poet**, and never ignore the **volta** or the ending!", 0.28),
            L("t5", "kevin", "Five. Keep quotations **short and embedded** — voice them by slowing down, never 'quote unquote'!", 0.28),
            L("t6", "timer", "Six. At a follow-up question, never say 'I don't know' and stop — **pause** and check the poem!", 0.35),
            L("rev", "mei", "Unseen spoken analysis: **four and a half stars**! Mike didn't faint, and I sounded like an actual critic.", 0.32),
            L("half", "will", "Where is the other half-star?!", 0.25),
            L("ten", "mei", "Ten minutes prep is stressful, lah.", 0.9),
        ],
    },
    {
        "id": "quiz", "title": "Quick-fire quiz", "short": "Quiz",
        "lines": [
            L("intro", "mrh", "Quick-fire quiz! Say each answer out loud before it appears.", 0.3),
            L("q1", "mrh", "What does **TSST** stand for on your first read of an unseen poem?", 4.0,
              say="What does T S S T stand for on your first read of an unseen poem?"),
            L("a1", "mei", "**Title, Speaker, Situation, and Tone**."),
            L("q2", "mrh", "What is the Italian term for the **turning point** or shift in a poem?", 4.0),
            L("a2", "will", "The **volta**! Look for turn words like 'yet' or 'but'."),
            L("q3", "mrh", "Complete the thesis formula: '**On the surface** the poem describes..., **but**...'", 4.0),
            L("a3", "nib", "'...**but really** it explores...' — moving from literal gist to deeper meaning."),
            L("q4", "mrh", "Should you bring a **word-for-word script** or a **brief cue card** to a spoken analysis?", 4.0),
            L("a4", "mike", "A **brief cue card** of keywords and short quotes — so you look up and talk!"),
            L("q5", "mrh", "What four steps help you handle a follow-up question: **PACE**?", 4.0,
              say="What four steps help you handle a follow-up question: P A C E?"),
            L("a5", "timer", "**Pause, Answer directly, Cite the poem, and Extend or Evaluate**!"),
            L("outro", "mrh", "Brilliant work. Now try the **Unseen Poems & Spoken Analysis** quiz in your English Lab.", 0.4,
              say="Brilliant work. Now try the Unseen Poems and Spoken Analysis quiz in your English Lab."),
            L("st1", "will", "Mike! Ready for my four-hour Hamlet soliloquy?!", 0.28),
            L("st2", "mike", "Unplugging myself now. Goodbye.", 1.2),
        ],
    },
]
