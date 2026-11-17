"""ALL THE SCHOOL'S A STAGE, episode 12 ("On the Other Hand"): Discursive Writing.
Teaches Discursive Writing (lib/topics/discursive-writing.ts).

Banyan Hill is debating banning mobile phones, and Mr Hargreaves sets the essay: "'Mobile phones
should be banned in schools.' Discuss." Mei writes a furious ALL-CAPS rant ("PHONES ARE AMAZING AND
BANNING THEM IS STUPID!!!"), summoning a gleaming pair of brass scales and a double act of giant
scale-gloves: On-the-One-Hand (calm, golden, measured) and On-the-Other-Hand (sharp, teal, always
countering). Together with Nib, Will and Kevin (who survives a terrifying '; however,' comma splice),
Mei masters discursive vs persuasive/argumentative writing, CID introductions, block vs alternating
structure, formal register and hedging, discourse markers, evidence and steelmanning, PEER paragraphs,
WJF qualified conclusions, and discursive essays on Dickens's Scrooge.
"""

META = {
    "name": "On the Other Hand",
    "kicker": "Claude Sitcom · Ep 12 · Discursive Writing",
    "dek": "Mei writes an ALL-CAPS rant to save her phone, two giant scale-gloves hijack Room 8H, and Kevin survives a comma splice. {chapters} scenes.",
    "gap": 0.32,
    "unit": "Scene",
    "lab": "discursive-writing",
    "kit": ["sitcom", "english"],
    "title": "Claude Sitcom Ep 12: On the Other Hand (Discursive Writing)",
    "h1": "All the School's a Stage: On the Other Hand",
    "quiz_name": "Discursive Writing",
}

CAST = {
    "narr":      {"voice": "bf_emma",   "speed": 0.96, "name": "Narrator"},
    "mei":       {"voice": "af_bella",  "speed": 1.04, "name": "Mei"},
    "mrh":       {"voice": "bm_lewis",  "speed": 0.92, "name": "Mr H"},
    "will":      {"voice": "bm_fable",  "speed": 0.9,  "name": "Will"},
    "nib":       {"voice": "bm_george", "speed": 0.9,  "name": "Nib"},
    "kevin":     {"voice": "am_puck",   "speed": 1.1,  "name": "Kevin"},
    "onehand":   {"voice": "am_eric",   "speed": 0.95, "name": "One Hand"},
    "otherhand": {"voice": "af_nova",   "speed": 1.02, "name": "Other Hand"},
}


def L(id, who, text, pause=0.0, say=None):
    line = {"id": id, "who": who, "cap": f"**{CAST[who]['name']}:** {text}", "pause": pause}
    line["say"] = say if say else text.replace("**", "")
    return line


CHAPTERS = [
    {
        "id": "cold", "title": "Cold open", "short": "Cold open", "card": False,
        "lines": [
            L("open", "narr", "Monday. Room 8H. Mr Hargreaves is on mug number seventeen, and Mei is clutching her phone.", 0.25,
              say="Monday. Room eight H. Mr Hargreaves is on mug number seventeen, and Mei is clutching her phone."),
            L("task", "mrh", "Timed essay: '**Mobile phones should be banned in schools.**' **Discuss**.", 0.3),
            L("rant", "mei", "Line one: 'I THINK BANNING PHONES IS STUPID AND ANYONE WHO AGREES IS CLUELESS, EXCLAMATION MARK!'", 0.35),
            L("ink", "nib", "ALL CAPS?! Five exclamation marks?! I have leaked straight through the desk!", 0.28),
            L("one", "onehand", "Steady now. On the **one hand**, phones distract pupils and can fuel lunchtime cyberbullying.", 0.3),
            L("other", "otherhand", "**On the other hand**, phones are pocket dictionaries and keep parents in touch on the MRT!", 0.3,
              say="On the other hand, phones are pocket dictionaries and keep parents in touch on the M R T!"),
            L("gloves", "mei", "Why are two giant velvet gloves sitting on Mr H's desk?!", 0.25),
            L("will", "will", "In my plays, two sides settle an argument with rapiers! Though brass scales are shinier.", 0.28),
            L("rev", "mei", "Arguing fairly with people who want my phone: **one star**.", 0.4),
            L("title", "narr", "All the School's a Stage. Episode twelve: On the Other Hand.", 1.2),
        ],
    },
    {
        "id": "spectrum", "title": "Think before you shout", "short": "What & CID intro",
        "lines": [
            L("tue", "narr", "Tuesday. The brass scales have claimed the front desk.", 0.25),
            L("latin", "nib", "**Discursive** comes from Latin *discurrere*, '**to run to and fro**' — like Montaigne's *essayer*, 'to try' an idea.", 0.3),
            L("pers", "mrh", "Know the spectrum. **Persuasive** writing pushes **one** view using emotive language and rhetorical questions.", 0.28),
            L("arg", "mrh", "**Argumentative** writing also picks **one** side from paragraph one, defending it with logic.", 0.25),
            L("disc", "onehand", "**Discursive** writing explores **both sides fairly** in a calm tone, holding your verdict until the **conclusion**.", 0.3),
            L("words", "otherhand", "Spot the task command words: '**Discuss**', '**Consider both sides**', or '**To what extent**'!", 0.28),
            L("test", "mrh", "Fairness test: if a reader who **disagrees** with you finishes your essay and thinks, 'that was fair to my side', you've nailed it.", 0.3),
            L("cid", "mrh", "Open with **CID**: **Context** why it matters now, **Issue** naming both sides, **Direction** signposting the weighing.", 0.3,
              say="Open with C I D: Context why it matters now, Issue naming both sides, Direction signposting the weighing."),
            L("secret", "nib", "And like a detective in the CID, keep your **final verdict secret** in the introduction!", 0.28,
              say="And like a detective in the C I D, keep your final verdict secret in the introduction!"),
            L("bad", "mei", "So I cut 'In this essay I will talk about', dictionary definitions, and 'Since the dawn of time'?", 0.28),
            L("zoos", "otherhand", "Instead, contrast both views vividly: some see zoos as modern **arks**, others as **prisons** with a gift shop!", 0.48),
        ],
    },
    {
        "id": "structure", "title": "Block versus point-counterpoint", "short": "Plan & structure",
        "lines": [
            L("lib", "narr", "Wednesday. The library. Mei has forty-five minutes and zero plan.", 0.25),
            L("tchart", "mrh", "Never start writing at minute zero. Spend **five to eight minutes** on a **T-chart** plan: For and Against.", 0.3),
            L("pick", "onehand", "Star the **best three** points on each side, and decide your **final judgement** before you write line one.", 0.28),
            L("block", "mrh", "Way one: **block structure**. All arguments **for**, a turning-point sentence, then all arguments **against**. Safe and clear.", 0.3),
            L("alt", "otherhand", "Way two: **alternating structure** — point and counterpoint clash **inside each paragraph** by aspect, like cost or wellbeing!", 0.3),
            L("fourday", "mei", "Like on a four-day school week: paragraph one weighs rested pupils against tired eight-year-olds; paragraph two weighs school bills against childcare!", 0.32),
            L("mythbal", "onehand", "And remember: **balance** means treating both sides **fairly**, not counting out the exact same number of words!", 0.28),
            L("second", "nib", "Top-band secret: whichever structure you choose, put the side you finally **agree with second**.", 0.28),
            L("fresh", "mei", "Aha! Because the side the reader hears **last** leads straight into my conclusion! Two stars!", 0.3),
            L("check", "mrh", "Write for thirty minutes, and save **five minutes** at the end to check markers and punctuation.", 0.48),
        ],
    },
    {
        "id": "tone", "title": "Keep your claims light", "short": "Tone & markers",
        "lines": [
            L("thu", "narr", "Thursday. Room 8H. Nib is patrolling Mei's essay with a magnifying glass.", 0.25,
              say="Thursday. Room eight H. Nib is patrolling Mei's essay with a magnifying glass."),
            L("reg", "nib", "Discursive essays demand a **formal register**: no slang like 'loads of kids', no contractions, no loaded insults like '**ridiculous**'!", 0.3),
            L("imp", "onehand", "Use **impersonal constructions** and the **passive voice** to stay objective: '**It could be argued that**...', '**It has been suggested that**...'", 0.3),
            L("verbs", "otherhand", "And pick exact **reporting verbs**: critics **suggest**, campaigners **insist**, supporters **concede**!", 0.28),
            L("hedge", "mrh", "Climb only as high up the certainty ladder as your proof allows. **Could, may, might: keep your claims light**.", 0.3),
            L("qual", "mei", "Not 'All teenagers are addicted to phones' — '**Many** teenagers report they **may** find it hard to switch off'! Though don't over-hedge into mush!", 0.3),
            L("mark", "nib", "Signpost every turn with **discourse markers**: **furthermore** to add, **conversely** for the opposite side, **nevertheless** for 'despite that', **consequently** for a result!", 0.32),
            L("splice", "mei", "Look! 'Phones can distract pupils, **however**, they help with research.' Done!", 0.25),
            L("panic", "kevin", "COMMA SPLICE! You joined two complete sentences with just ME before 'however'! I can't hold two whole clauses! Get the bag!", 0.32),
            L("semi", "mrh", "When '**however**' joins two full sentences, put a **semicolon before** it and a **comma after** it.", 0.28),
            L("saved", "kevin", "Semicolon in front, Kevin right after 'however,'! Oh, look at us! Punctuation teamwork!", 0.5),
        ],
    },
    {
        "id": "rebuttal", "title": "Steelman, don't straw-man", "short": "Evidence & PEER",
        "lines": [
            L("hall", "narr", "Thursday afternoon. Debate stage in the school hall.", 0.25),
            L("evid", "mrh", "Four kinds of **evidence**, strongest to weakest: **large studies**, **expert opinion**, **real-world examples**, and a lone **anecdote**.", 0.3),
            L("oryx", "onehand", "Real example: captive breeding saved the **Arabian oryx** after it went extinct in the wild!", 0.28),
            L("honest", "mrh", "Never invent fake statistics and pin them on a real organisation. In practice essays, label them '**hypothetical**' — 'Imagine a survey...'", 0.32),
            L("testev", "otherhand", "And interrogate the other side's evidence! Who funded that uniform survey — a company that **sells school uniforms**?!", 0.28),
            L("straw", "will", "To crush my opponents, I shall claim homework-haters despise all human knowledge! Behold my scarecrow!", 0.3),
            L("steel", "otherhand", "That's a **straw man**, Will — exaggerating the other side so it's easy to knock over! Present their **strongest** case: **steelmanning**!", 0.32),
            L("engine", "nib", "Then answer with a **rebuttal** using the concede-then-counter engine: '**Admittedly... However... Therefore...**'", 0.3),
            L("p", "mei", "Let's build a **PEER** paragraph — PEEL with a **Reply**! **Point**: Supporters of a phone ban argue notifications fracture concentration.", 0.28,
              say="Let's build a peer paragraph — peel with a Reply! Point: Supporters of a phone ban argue notifications fracture concentration."),
            L("e", "mei", "**Evidence**: Teachers report pupils can take several minutes to refocus after a single buzz.", 0.25),
            L("ex", "mei", "**Explain**: **This suggests that** phones quietly erode lesson time, even when nobody is texting.", 0.28),
            L("r", "mei", "**Reply**: **Admittedly**, phones aid quick research; **however**, school laptops provide that benefit without personal group chats.", 0.32),
            L("tip", "onehand", "The scales just tipped! Three and a half stars!", 0.5),
        ],
    },
    {
        "id": "verdict", "title": "Weigh it, judge it, finish it", "short": "Conclusions & novel",
        "lines": [
            L("fri", "narr", "Friday. Mei reaches her final paragraph.", 0.25),
            L("fence", "mei", "Conclusion: 'There are good points on both sides, so it's up to the reader to decide!'", 0.28),
            L("nofence", "mrh", "Off the fence, Mei. '**Discuss**' still requires a reasoned verdict. Use **WJF**: **Weigh, Judge, Finish**.", 0.3,
              say="Off the fence, Mei. Discuss still requires a reasoned verdict. Use W J F: Weigh, Judge, Finish."),
            L("wjf", "onehand", "**Weigh** the strongest point on each side, **Judge** starting with '**On balance...**', and **Finish** with a final thought — **zero new arguments**!", 0.32),
            L("qual", "otherhand", "Even smarter is a **qualified judgement** — 'yes, **provided that**...': lock phones away in lessons, allow them on the journey home!", 0.3),
            L("equal", "nib", "Or on school uniform: 'A uniform should make pupils **equal, not identical**.' Crisp!", 0.28),
            L("novel", "mrh", "In Term 3, you'll also write discursive essays on the **novel**: 'Is Scrooge's change in A Christmas Carol **believable**?'", 0.3,
              say="In Term three, you'll also write discursive essays on the novel: Is Scrooge's change in A Christmas Carol believable?"),
            L("unbel", "otherhand", "Against: nobody reverses a lifetime of greed in **one night** just from a fright!", 0.28),
            L("bel", "onehand", "For: Dickens plants the lonely schoolboy in Stave Two and that '**solitary as an oyster**' pearl — plus it's a **moral fable**, not realism!", 0.32),
            L("earned", "mei", "**On balance**, the speed strains realism, yet within Dickens's ghostly fable the transformation feels earned!", 0.3),
            L("sigh", "mrh", "Balanced, hedged, and judged. I might even let you keep your phone at break.", 0.5),
        ],
    },
    {
        "id": "recap", "title": "Save yourself some marks", "short": "Exam traps",
        "lines": [
            L("intro", "narr", "Before pens down, the scales of Room 8H would like to save you some marks.", 0.28,
              say="Before pens down, the scales of Room eight H would like to save you some marks."),
            L("h1", "mei", "Memory hooks! **CID** for the intro — keep the verdict secret; **PEER** to add a Reply in body paragraphs!", 0.3,
              say="Memory hooks! C I D for the intro — keep the verdict secret; peer to add a Reply in body paragraphs!"),
            L("h2", "onehand", "**Could, may, might: keep your claims light**; and **WJF** — **Weigh, Judge, Finish** — in the conclusion!", 0.3,
              say="Could, may, might: keep your claims light; and W J F — Weigh, Judge, Finish — in the conclusion!"),
            L("t1", "mrh", "One. Never blurt your **final opinion** in the introduction — save it for the conclusion.", 0.28),
            L("t2", "nib", "Two. Don't write a one-sided **persuasive rant** or use slang and loaded words like 'stupid' or 'clueless'.", 0.28),
            L("t3", "otherhand", "Three. Don't **sit on the fence** at the end, and never drop a **brand-new argument** into the conclusion!", 0.28),
            L("t4", "will", "Four. Never set up a weak **straw man**, and never fake real statistics — label practice ones **hypothetical**!", 0.28),
            L("t5", "mrh", "Five. Always **explain** your evidence with 'This suggests that...' — never drop and run.", 0.28),
            L("t6", "kevin", "Six. Joining two full sentences with '**however**'? **Semicolon before, comma after**! Save a comma's life!", 0.32),
            L("rev", "mei", "**On balance**, discursive writing gets **four and a half stars** — provided nobody takes my phone on the MRT.", 0.32,
              say="On balance, discursive writing gets four and a half stars — provided nobody takes my phone on the M R T."),
            L("will2", "will", "Admittedly, she withheld half a star; nevertheless, her hedging was impeccable.", 0.9),
        ],
    },
    {
        "id": "quiz", "title": "Quick-fire quiz", "short": "Quiz",
        "lines": [
            L("intro", "mrh", "Quick-fire quiz! Say each answer out loud before it appears.", 0.3),
            L("q1", "mrh", "What do the three letters of **CID** stand for in a discursive introduction?", 4.0,
              say="What do the three letters of C I D stand for in a discursive introduction?"),
            L("a1", "mei", "**Context, Issue, and Direction** — keeping your final verdict secret!"),
            L("q2", "mrh", "How do you punctuate '**however**' when it joins two complete sentences?", 4.0),
            L("a2", "kevin", "A **semicolon before** 'however' and a **comma after** it!"),
            L("q3", "mrh", "What do we call a weak, exaggerated version of the opposing view set up just to knock down?", 4.0),
            L("a3", "otherhand", "A **straw man** argument! Present their strongest case instead."),
            L("q4", "mrh", "Which three discourse markers power the **concede-then-counter** rebuttal pattern?", 4.0),
            L("a4", "nib", "'**Admittedly... However... Therefore...**'"),
            L("q5", "mrh", "What three things must a discursive conclusion do: **WJF**?", 4.0,
              say="What three things must a discursive conclusion do: W J F?"),
            L("a5", "onehand", "**Weigh** the strongest points, **Judge** with a reason, and **Finish** with a final thought!"),
            L("outro", "mrh", "Brilliant work. Now try the **Discursive Writing** quiz in your English Lab.", 0.4),
            L("st1", "onehand", "After you, Other Hand.", 0.25),
            L("st2", "otherhand", "Conversely, after YOU, One Hand!", 0.25),
            L("st3", "mrh", "You're going to be in that doorway until June.", 1.2),
        ],
    },
]
