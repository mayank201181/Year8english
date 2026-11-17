"""ALL THE SCHOOL'S A STAGE, episode 5 ("Exit, Pursued by a Deadline"):
Teaches Script Writing & Commentary (lib/topics/script-writing.ts).

Mei has until Period 5 to write an original playscript scene and reflective commentary. When she writes novel-style
feelings and reads "(pause)" out loud, Bracket (an italicised Stage Direction in brackets) and Clapper (a dramatic
clapperboard director) intervene. Together with Mr Hargreaves, Will, Nib and Kevin, they teach script layout,
distinct character voices, stage directions ("See it? Hear it? Or cut it"), conflict, subtext, dramatic irony,
speech forms (soliloquy, aside, monologue, stichomythia), pace ("arrive late, leave early"), stagecraft (blocking,
proxemics, levels, stage left vs audience right), adapting Shakespeare, and the CQTEL commentary ladder.
"""

META = {
    "name": "Exit, Pursued by a Deadline",
    "kicker": "Claude Sitcom · Ep 5 · Script Writing & Commentary",
    "dek": "Mei has until Period 5 to write a playscript and commentary, and a talking Stage Direction refuses to be read aloud. {chapters} scenes.",
    "gap": 0.32,
    "unit": "Scene",
    "lab": "script-writing",
    "kit": ["sitcom", "english"],
    "title": "Claude Sitcom Ep 5: Exit, Pursued by a Deadline (Script Writing & Commentary)",
    "h1": "All the School's a Stage: Exit, Pursued by a Deadline",
    "quiz_name": "Script Writing & Commentary",
}

CAST = {
    "narr":    {"voice": "bf_emma",   "speed": 0.96, "name": "Narrator"},
    "mei":     {"voice": "af_bella",  "speed": 1.04, "name": "Mei"},
    "mrh":     {"voice": "bm_lewis",  "speed": 0.92, "name": "Mr H"},
    "will":    {"voice": "bm_fable",  "speed": 0.9,  "name": "Will"},
    "nib":     {"voice": "bm_george", "speed": 0.9,  "name": "Nib"},
    "kevin":   {"voice": "am_puck",   "speed": 1.1,  "name": "Kevin"},
    "brack":   {"voice": "bf_alice",  "speed": 1.02, "name": "Bracket"},
    "clapper": {"voice": "am_eric",   "speed": 1.04, "name": "Clapper"},
}


def L(id, who, text, pause=0.0, say=None):
    line = {"id": id, "who": who, "cap": f"**{CAST[who]['name']}:** {text}", "pause": pause}
    line["say"] = say if say else text.replace("**", "")
    return line


CHAPTERS = [
    {
        "id": "cold", "title": "Cold open", "short": "Cold open", "card": False,
        "lines": [
            L("mon", "narr", "Monday, Period 1. Room 8H. Mr Hargreaves is on mug number seven.", 0.25,
              say="Monday, Period one. Room eight H. Mr Hargreaves is on mug number seven."),
            L("due", "mrh", "Reminder: your **playscript** and **reflective commentary** are due at **Period 5**.", 0.3,
              say="Reminder: your playscript and reflective commentary are due at Period five."),
            L("draft", "mei", "Easy! Listen to my opening: \"I'm not going,\" Mia shouted angrily, thinking about last summer. Bracket, pause, unbracket.", 0.35),
            L("stop", "brack", "STOP! Did you just read a **stage direction** OUT LOUD?!", 0.4),
            L("who", "mei", "Why is a pair of square brackets yelling at me?", 0.25),
            L("iam", "brack", "I am **Bracket**, an italicised **stage direction**! Actors **do** me, darling, they never **say** me!", 0.3),
            L("clap", "clapper", "And cut! Take one: unstageable! How does an actor perform 'thinking about last summer'? Stare aggressively at a calendar?", 0.35),
            L("cues", "will", "In my theatre, actors weren't even handed the whole play: only **cue scripts** with their own lines and a few cue words!", 0.3),
            L("aircon", "will", "Though we also had no air-conditioning, so Singapore wins.", 0.3),
            L("review", "mei", "Current script draft: **one star**. Four periods till deadline.", 0.45),
            L("title", "narr", "All the School's a Stage. Episode five: Exit, Pursued by a Deadline.", 1.1),
        ],
    },
    {
        "id": "layout", "title": "Page layout & stage directions", "short": "Page & directions",
        "lines": [
            L("story", "mrh", "A **script** has **no narrator**. Everything must be **heard** in dialogue or **seen** in action.", 0.25),
            L("scriptm", "nib", "Follow the layout conventions, mnemonic **SCRIPT**: **S**cene heading first, giving place and time.", 0.25),
            L("castlist", "nib", "Optional **character list**, or **dramatis personae**, then character names in **CAPITALS** at the left margin with a colon.", 0.25,
              say="Optional character list, or dram-uh-tis per-soh-igh, then character names in CAPITALS at the left margin with a colon."),
            L("nomarks", "mrh", "**Remove speech marks** and 'she shouted'. Start a **new line** for every speaker.", 0.25),
            L("pres", "brack", "Put stage directions in **italics** when typed, or **brackets** when handwritten, always in the **present tense**!", 0.25),
            L("exits", "nib", "Mark *Enter*, *Exit*, or **Exeunt** — Latin for 'they go out' when several characters leave.", 0.25,
              say="Mark Enter, Exit, or Ex-ee-unt, Latin for they go out when several characters leave."),
            L("test", "brack", "My golden rule: **See it? Hear it? Or cut it.** 'She feels guilty' is novel narration — turn it into '(She hides the broken china.)'.", 0.3),
            L("basic", "mei", "So I basically put '(angrily)' before every single line so the actor gets it?", 0.3),
            L("leak", "nib", "She said 'basically'. I am leaking. Over-directing strangles actors! Use a short **parenthetical** like '(whispering)' only when tone isn't obvious.", 0.3),
            L("bear", "will", "My most famous direction is five words: **Exit, pursued by a bear**, from The Winter's Tale, Act 3 Scene 3.", 0.3,
              say="My most famous direction is five words: Exit, pursued by a bear, from The Winter's Tale, Act three, Scene three."),
            L("embed", "will", "Mostly I used **embedded stage directions** inside the speech: Juliet's 'Wilt thou be gone? it is not yet near day' tells us it is dawn!", 0.3),
            L("onepage", "clapper", "Screenwriter's rule of thumb: one formatted page equals roughly **one minute** on stage. Keep it crisp!", 0.45),
        ],
    },
    {
        "id": "voices", "title": "Distinct voices & speech forms", "short": "Voices & forms",
        "lines": [
            L("lib", "narr", "Period 2. The library. The SILENCE PLEASE sign has given up.", 0.25,
              say="Period two. The library. The silence please sign has given up."),
            L("same", "mrh", "Next trap: making every character sound identical. Each needs a distinct **voice**, or **idiolect**.", 0.25),
            L("how", "nib", "Build voice from **vocabulary**, **sentence length**, speech **habits**, and what they refuse to say.", 0.25),
            L("nurse", "will", "Cover the names in Romeo and Juliet: my **Nurse** rambles through warm memories, while **Juliet** speaks in quick, sharp thoughts.", 0.3),
            L("punct", "kevin", "Ooh! Real talk is messy! Use a **dash** for interruptions, an **ellipsis** for trailing off... and me, a comma, for little hesitations!", 0.28),
            L("dump", "clapper", "And ban the **exposition dump**! Nobody says, 'As you know, Mother, Father was banished last Tuesday.' Let facts slip out through conflict!", 0.3),
            L("forms", "mrh", "Know your four speech forms. A **monologue** is a long speech when others are **listening**.", 0.2),
            L("solil", "will", "A **soliloquy** is spoken **alone on stage**, revealing honest private truth — like Juliet's 'Ancient damnation! O most wicked fiend!' after the Nurse exits.", 0.3),
            L("cam", "mei", "Or like talking to the documentary camera when Mr H isn't looking.", 0.25),
            L("light", "will", "Still a soliloquy with worse lighting.", 0.3),
            L("aside", "nib", "An **aside** is a brief remark to the audience that others on stage do **not** hear, like Hamlet's 'A little more than kin, and less than kind.'", 0.28),
            L("stich", "nib", "And **stichomythia**: rapid alternating one-line exchanges, like fencing with words! Hamlet's 'Are you honest?' / 'My lord?' / 'Are you fair?'", 0.35,
              say="And stick-oh-mith-ee-uh: rapid alternating one-line exchanges, like fencing with words! Hamlet's Are you honest? My lord? Are you fair?"),
            L("two", "mei", "Okay, stichomythia is cool. Script writing moves up to **two stars**.", 0.45,
              say="Okay, stick-oh-mith-ee-uh is cool. Script writing moves up to two stars."),
        ],
    },
    {
        "id": "subtext", "title": "Conflict, subtext & shaping pace", "short": "Subtext & pace",
        "lines": [
            L("snack", "narr", "Break time. Mei has a curry puff and a scene where everyone agrees politely.", 0.25),
            L("want", "clapper", "Boring! **Conflict** is the engine of drama: a **want** plus an **obstacle**, either **external** between characters or **internal** inside one mind!", 0.28),
            L("fine", "mei", "So if a character is hurt, she says, 'I am deeply hurt by your betrayal'?", 0.28),
            L("ice", "brack", "Never! Real people say 'Fine.' What lies underneath is **subtext** — the hidden nine-tenths of the iceberg!", 0.28),
            L("amen", "will", "When the Nurse tells Juliet to marry Paris or 'beshrew' her soul, Juliet answers one word: '**Amen!**' Polite on top; a secret curse underneath!", 0.3),
            L("irony", "nib", "Add **dramatic irony**: when the **audience knows** about Juliet's sleeping potion, 'Your mother will weep' breaks our hearts.", 0.28),
            L("late", "clapper", "Now shape the journey: **arrive late, leave early**! Start right near the conflict, and cut out before the tension drains.", 0.28),
            L("arc", "mrh", "Climb from **set-up** to **complication**, **escalation**, and a **turning point** where power shifts.", 0.25),
            L("cliff", "will", "Then end on a **cliffhanger**, like Juliet's chilling final line in Act 3 Scene 5: 'If all else fail, myself have power to die.'", 0.3,
              say="Then end on a cliffhanger, like Juliet's chilling final line in Act three, Scene five: If all else fail, myself have power to die."),
            L("pace", "brack", "Control **pace**! Short lines and interruptions speed up; a **(Pause.)** or a tiny **(Beat.)** makes silence the loudest thing in the room!", 0.28),
            L("jux", "nib", "And use **juxtaposition**: placing light chatter right before tragedy makes the drop feel twice as steep.", 0.45),
        ],
    },
    {
        "id": "stage", "title": "Stagecraft & adapting Shakespeare", "short": "Stagecraft & adapt",
        "lines": [
            L("hall", "narr", "Period 3. The school hall. Clapper has claimed the stage.", 0.25,
              say="Period three. The school hall. Clapper has claimed the stage."),
            L("spclsb", "clapper", "**Stagecraft** tells the story visually! Remember: **S**ome **P**eople **C**an't **L**eave **S**ound **B**ehind — **Set, Props, Costume, Lighting, Sound, Blocking**!", 0.3),
            L("space", "nib", "Plus two spatial tools: **proxemics** — distance between actors showing closeness or rejection — and **levels**, where height signals **status**.", 0.28),
            L("left", "mei", "So if Juliet steps left, I write 'stage left' for the left side I'm looking at?", 0.25),
            L("actor", "brack", "Trap! Stage directions use the **actor's view**, facing the audience! **Stage left** is the audience's right.", 0.28),
            L("dsc", "clapper", "**Downstage** is nearest the audience, **upstage** furthest away, and **downstage centre** is the power spot for a soliloquy under a spotlight!", 0.28),
            L("adapt", "mrh", "For your **Shakespeare adaptation**, pick one of three routes: **modernise** the setting, write an offstage **missing scene**, or **flip the viewpoint**.", 0.28),
            L("caliban", "will", "Tell the island through **Caliban's** eyes, echoing 'This island's mine, by Sycorax my mother' — or show **Ophelia** alone with Hamlet's letters!", 0.3),
            L("rules", "mrh", "Keep the **dramatic core**, echo a real quotation, and stay **consistent** with the play's facts: the Nurse never learns about the potion.", 0.28),
            L("swag", "will", "And give Caliban swagger. I invented 'swagger', you know.", 0.25),
            L("stamp", "nib", "**Earliest recorded user**, Will. Not the same thing.", 0.3),
            L("three", "mei", "Missing scene chosen, blackout ending locked. Up to **three and a half stars**!", 0.45),
        ],
    },
    {
        "id": "commentary", "title": "Writing the reflective commentary", "short": "The commentary",
        "lines": [
            L("p4", "narr", "Period 4. Mei finishes her script and writes: 'In my scene, Juliet comes home and hides the potion.'", 0.28,
              say="Period four. Mei finishes her script and writes: In my scene, Juliet comes home and hides the potion."),
            L("sigh", "mrh", "Mei. I have just read your script. Never retell your own plot. Tell me **why**.", 0.3),
            L("what", "nib", "A **commentary** proves every choice was deliberate! Write in the **first person**: cover **purpose**, **audience**, **intended effect**, and **links to Shakespeare**.", 0.3),
            L("cqtel", "nib", "Build each paragraph with **CQTEL** — 'Can Quiet Teens Explain Lines?': **Choice, Quote your own script, Term, Effect, Link**!", 0.3,
              say="Build each paragraph with C, Q, T, E, L — Can Quiet Teens Explain Lines?: Choice, Quote your own script, Term, Effect, Link!"),
            L("p_rung", "mei", "Right! **Point** and **Choice**: I used **dramatic irony** to show the silent break in trust between Juliet and the Nurse.", 0.25),
            L("e_rung", "mei", "**Evidence** — quoting myself! The Nurse says 'Your mother will weep', while Juliet stands 'very still beneath the veil'.", 0.28),
            L("ex_rung", "mei", "**Explain**: the audience knows the potion will fake Juliet's death, turning wedding joy into grief and the veil into a shroud.", 0.28),
            L("l_rung", "mei", "**Link**: this foreshadows the family mourning Juliet in Act 4 Scene 5, echoing her secret 'Amen!' in Act 3 Scene 5.", 0.3,
              say="Link: this foreshadows the family mourning Juliet in Act four, Scene five, echoing her secret Amen in Act three, Scene five."),
            L("eval", "mrh", "Finish with one honest sentence of **evaluation** — what you'd sharpen in a redraft.", 0.25),
            L("good", "mrh", "Self-quotation embedded. Terminology exact. That... will score very well.", 0.45),
        ],
    },
    {
        "id": "recap", "title": "Save yourself some marks", "short": "Exam traps",
        "lines": [
            L("intro", "narr", "Five minutes to Period 5. Six exam traps before you hand it in.", 0.25,
              say="Five minutes to Period five. Six exam traps before you hand it in."),
            L("mnem", "mei", "Hooks first! **SCRIPT** for layout; **See it? Hear it? Or cut it**; **Some People Can't Leave Sound Behind**; and **CQTEL** for commentary!", 0.3,
              say="Hooks first! SCRIPT for layout; See it? Hear it? Or cut it; Some People Can't Leave Sound Behind; and C, Q, T, E, L for commentary!"),
            L("t1", "brack", "One. Never write invisible thoughts like '(remembering last summer)'. If we can't see or hear it, cut it!", 0.28),
            L("t2", "kevin", "Two. **CAPITALS** and a colon in the margin, **no speech marks**, and stage directions in the **present tense**!", 0.28),
            L("t3", "nib", "Three. Don't slap '(angrily)' on every line, and give each character a distinct **idiolect**.", 0.28),
            L("t4", "clapper", "Four. **Stage left** is the **actor's left** facing the crowd — **downstage** is closest to the audience!", 0.28),
            L("t5", "will", "Five. In an adaptation, stay **consistent** with my play's events — don't tell the Nurse about the potion!", 0.28),
            L("t6", "mrh", "Six. Never retell your plot in the **commentary**. Quote your own script, name the device, and explain the **intended effect**.", 0.35),
            L("bell", "narr", "Period 5. Mei hands it in.", 0.3, say="Period five. Mei hands it in."),
            L("four", "mei", "Script writing: **four stars**. Deducting one because I had to analyse myself.", 0.3),
            L("exit", "brack", "Bracket, **Exeunt**, pursued by a school bell!", 0.8,
              say="Bracket, Ex-ee-unt, pursued by a school bell!"),
        ],
    },
    {
        "id": "quiz", "title": "Quick-fire quiz", "short": "Quiz",
        "lines": [
            L("intro", "mrh", "Quick-fire quiz! Say each answer out loud before it appears.", 0.3),
            L("q1", "mrh", "Do dialogue lines in a playscript use **speech marks**?", 4.0),
            L("a1", "brack", "**No**! Character name in **CAPITALS** with a colon, no speech marks, and stage directions in the **present tense**."),
            L("q2", "mrh", "What do we call the hidden meaning **beneath** what a character says aloud?", 4.0),
            L("a2", "mei", "**Subtext** — the nine-tenths of the iceberg under the surface."),
            L("q3", "mrh", "Rapid alternating **one-line exchanges** in an argument — what is the technical term?", 4.0),
            L("a3", "nib", "**Stichomythia**.", say="Stick-oh-mith-ee-uh."),
            L("q4", "mrh", "Where is **downstage**, and whose left is **stage left**?", 4.0),
            L("a4", "clapper", "**Downstage** is nearest the audience, and **stage left** is the **actor's left**!"),
            L("q5", "mrh", "In a **reflective commentary**, should you retell your plot or **quote your own script** to explain why?", 4.0),
            L("a5", "mei", "**Quote your own script**, name the technique, explain the **intended effect**, and link to Shakespeare!"),
            L("outro", "mrh", "Brilliant work. Now try the **Script Writing & Commentary** quiz in your English Lab.", 0.4,
              say="Brilliant work. Now try the Script Writing and Commentary quiz in your English Lab."),
            L("bearq", "will", "Wait — did nobody use my bear?", 0.35),
            L("roar", "clapper", "Save the bear for the sequel, Will. Cut!", 1.2),
        ],
    },
]
