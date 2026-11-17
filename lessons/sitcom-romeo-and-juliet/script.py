"""ALL THE SCHOOL'S A STAGE, episode 4 ("Two Households, One Group Chat"): Romeo and Juliet.
Teaches Romeo and Juliet (lib/topics/romeo-and-juliet.ts & lib/extras/romeo-and-juliet.ts).

Someone adds the Montagues and Capulets to the Year 8 WhatsApp group chat. Tybalt types exclusively in
caps lock, Mercutio roasts everyone, Romeo posts tragic oxymorons about Rosaline before meeting Juliet in
fourteen lines of shared sonnet, and four frantic days hurtle from street brawl to tomb. With Mei, Mr H,
Will, Nib and Kevin.
"""

META = {
    "name": "Two Households, One Group Chat",
    "kicker": "Claude Sitcom · Ep 4 · Romeo and Juliet",
    "dek": "The Montagues and Capulets start a WhatsApp war, Romeo discovers oxymorons, and Friar Laurence forgets how couriers work. {chapters} scenes.",
    "gap": 0.32,
    "unit": "Scene",
    "lab": "romeo-and-juliet",
    "kit": ["sitcom", "english"],
    "title": "Claude Sitcom Ep 4: Two Households, One Group Chat (Romeo and Juliet)",
    "h1": "All the School's a Stage: Two Households, One Group Chat",
    "quiz_name": "Romeo and Juliet",
}

CAST = {
    "narr":     {"voice": "bf_emma",     "speed": 0.96, "name": "Narrator"},
    "mei":      {"voice": "af_bella",    "speed": 1.04, "name": "Mei"},
    "mrh":      {"voice": "bm_lewis",    "speed": 0.92, "name": "Mr H"},
    "will":     {"voice": "bm_fable",    "speed": 0.9,  "name": "Will"},
    "nib":      {"voice": "bm_george",   "speed": 0.9,  "name": "Nib"},
    "kevin":    {"voice": "am_puck",     "speed": 1.1,  "name": "Kevin"},
    "romeo":    {"voice": "am_fenrir",   "speed": 1.0,  "name": "Romeo"},
    "juliet":   {"voice": "bf_isabella", "speed": 1.02, "name": "Juliet"},
    "mercutio": {"voice": "am_eric",     "speed": 1.06, "name": "Mercutio"},
    "tybalt":   {"voice": "am_michael",  "speed": 0.96, "name": "Tybalt"},
}


def L(id, who, text, pause=0.0, say=None):
    line = {"id": id, "who": who, "cap": f"**{CAST[who]['name']}:** {text}", "pause": pause}
    line["say"] = say if say else text.replace("**", "")
    return line


CHAPTERS = [
    {
        "id": "cold", "title": "Cold open", "short": "Cold open", "card": False,
        "lines": [
            L("ping", "narr", "Monday, break time. Mei's phone has pinged ninety-four times. Someone has added Verona to the class group chat.", 0.28),
            L("hate", "tybalt", "'What, drawn and talk of peace? I hate the word / As I hate hell, all Montagues, and thee!'", 0.28),
            L("cats", "mercutio", "Calm down, **Tybalt**, 'Prince of Cats'. Stop typing in caps lock.", 0.25,
              say="Calm down, Tibbalt, Prince of Cats. Stop typing in caps lock."),
            L("mope", "romeo", "Leave me in the dark. **Rosaline** doesn't text back. 'O brawling love, O loving hate!'", 0.28),
            L("fourdays", "juliet", "He forgets Rosaline tonight, marries me tomorrow afternoon, and we're both dead by Thursday dawn.", 0.3),
            L("spoiler", "mei", "Whoa, spoiler alert! Wait — **four days**? That's shorter than a geography project! **One star** for life choices.", 0.3),
            L("chorus", "will", "It's not a spoiler if I put it in the **Prologue**, child! Welcome to **1595**!", 0.3,
              say="It's not a spoiler if I put it in the Prologue, child! Welcome to fifteen ninety-five!"),
            L("title", "narr", "All the School's a Stage. Episode four: Two Households, One Group Chat.", 1.2),
        ],
    },
    {
        "id": "prologue", "title": "Spoilers in fourteen lines", "short": "Prologue & feud",
        "lines": [
            L("brooke", "mrh", "Shakespeare didn't invent this plot. He adapted **Arthur Brooke's** **1562** poem — compressing **nine months** into **four frantic days**.", 0.28,
              say="Shakespeare didn't invent this plot. He adapted Arthur Brooke's fifteen sixty-two poem, compressing nine months into four frantic days."),
            L("sonnet", "nib", "The **Chorus** opens with a **Shakespearean sonnet**: **fourteen lines** of **iambic pentameter** — three quatrains and a couplet, **4 + 4 + 4 + 2**.", 0.28,
              say="The Chorus opens with a Shakespearean sonnet: fourteen lines of iambic pen tammiter, three quatrains and a couplet, four plus four plus four plus two."),
            L("clash", "will", "A sonnet was the classic **love-poem** form! Yet I pack mine with a **semantic field** of violence: '**grudge**', '**mutiny**', '**civil blood**', '**death-marked love**'.", 0.3),
            L("stars", "will", "'A pair of **star-crossed lovers** take their life'. Elizabethans believed in **astrology**: the stars themselves block their path.", 0.28),
            L("irony", "mrh", "And because we know the ending from minute one, the entire play runs on **dramatic irony**.", 0.25),
            L("sides", "mei", "Okay, let's sort the group chat. Left side: **Montagues** — **Romeo**, and his peaceful cousin **Benvolio**.", 0.25),
            L("capulets", "juliet", "Right side: **Capulets** — me, not yet **fourteen**; my fiery **cousin** **Tybalt** — NOT my brother! — my parents, and **the Nurse**.", 0.28,
              say="Right side: Capulets, me, not yet fourteen; my fiery cousin Tibbalt, NOT my brother! my parents, and the Nurse."),
            L("middle", "mercutio", "And stuck in the middle: **Friar Laurence**, **Prince Escalus**, and the Prince's kinsmen — Count **Paris**, and me, **Mercutio**! Neither house!", 0.35),
        ],
    },
    {
        "id": "love", "title": "Pilgrims, the sun and 'wherefore'", "short": "Sonnet & window",
        "lines": [
            L("petrarch", "nib", "In **Act 1 Scene 1**, Romeo performs **Petrarchan love** for absent **Rosaline**: one-sided, dramatic, stuffed with **oxymorons** like '**cold fire, sick health**'.", 0.28,
              say="In Act one, Scene one, Romeo performs Petrarchan love for absent Rosaline: one-sided, dramatic, stuffed with oxymorons like cold fire, sick health."),
            L("feast", "romeo", "Then I gatecrash the Capulet ball in **Act 1 Scene 5** — and meet Juliet! 'My lips, two blushing **pilgrims**, ready stand'", 0.3,
              say="Then I gatecrash the Capulet ball in Act one, Scene five, and meet Jooliet! My lips, two blushing pilgrims, ready stand"),
            L("shared", "juliet", "'Good pilgrim, you do wrong your hand too much'. Our first **fourteen lines** together form one **shared sonnet**, ending in a kiss!", 0.3),
            L("sacred", "mrh", "Notice the **extended religious metaphor** — **pilgrim, holy shrine, saint, prayer**. Unlike Rosaline, this love is **mutual** and **sacred**.", 0.28),
            L("nobalk", "will", "**Act 2 Scene 2**: Capulet's orchard at night! Fun fact: the word '**balcony**' never appears in my script. Juliet is at a **window**!", 0.28,
              say="Act two, Scene two: Capulet's orchard at night! Fun fact: the word balcony never appears in my script. Juliet is at a window!"),
            L("sun", "romeo", "'But soft, what light through yonder window breaks? / It is the East, and **Juliet is the sun**.'", 0.32,
              say="But soft, what light through yonder window breaks? It is the East, and Jooliet is the sun."),
            L("why", "juliet", "Not knowing he's below, I ask: 'O Romeo, Romeo, **wherefore** art thou Romeo?' Remember: **wherefore** means **WHY**!", 0.28),
            L("rose", "juliet", "'What's in a name? That which we call a **rose** / By any other word would smell as sweet.' Names shouldn't matter — though in Verona, they kill.", 0.3),
            L("lightning", "nib", "Juliet is the practical one! She warns their love is '**Too like the lightning**' — a **simile** that **foreshadows** brilliant, brief destruction.", 0.28),
            L("two", "mei", "Shared sonnet at a party? Okay, smooth. **Two stars**.", 0.48),
        ],
    },
    {
        "id": "turning", "title": "Mad blood and fortune's fool", "short": "Act 3 Scene 1",
        "lines": [
            L("slow", "kevin", "In **Act 2**, Friar Laurence agrees to marry them secretly to end the feud, warning: 'Wisely and slow. They stumble that run fast.' Good pause!", 0.28,
              say="In Act two, Friar Laurence agrees to marry them secretly to end the feud, warning: Wisely and slow. They stumble that run fast. Good pause!"),
            L("violent", "mrh", "And right before the wedding: '**These violent delights have violent ends**.' Then Shakespeare slams straight into **Act 3 Scene 1**.", 0.28,
              say="And right before the wedding: These violent delights have violent ends. Then Shakespeare slams straight into Act three, Scene one."),
            L("heat", "nib", "**Act 3 Scene 1** is the **turning point**. Blazing noon heat: 'these **hot days**, is the **mad blood stirring**' — **pathetic fallacy**!", 0.28,
              say="Act three, Scene one is the turning point. Blazing noon heat: these hot days, is the mad blood stirring, pathetic fallacy!"),
            L("villain", "tybalt", "Romeo, thou art a villain! Draw thy sword!", 0.22),
            L("refuse", "romeo", "I've literally just married your cousin thirty minutes ago, **Tybalt**, so I love thee! (**Dramatic irony**: Mercutio doesn't know why!)", 0.28,
              say="I've literally just married your cousin thirty minutes ago, Tibbalt, so I love thee! Dramatic irony: Mercutio doesn't know why!"),
            L("grave", "mercutio", "Tybalt stabs me under Romeo's arm! Dying in **prose**, I still pun: 'Ask for me tomorrow, and you shall find me a **grave** man.'", 0.3,
              say="Tibbalt stabs me under Romeo's arm! Dying in prose, I still pun: Ask for me tomorrow, and you shall find me a grave man."),
            L("plague", "mercutio", "And because neither family is mine, I curse them both three times: '**A plague o' both your houses!**'", 0.32,
              say="And because neither family is mine, I curse them both three times: A plague o' both your houses!"),
            L("fool", "romeo", "Grief-stricken, I kill **Tybalt** and cry: '**O, I am fortune's fool!**' Prince Escalus **banishes** me to Mantua.", 0.3,
              say="Grief-stricken, I kill Tibbalt and cry: O, I am fortune's fool! Prince Escalus banishes me to Mantua."),
            L("shift", "mrh", "Right here the genre shifts: comedy and hope die with Mercutio. Every disaster after **Act 3 Scene 1** flows from this street fight.", 0.42,
              say="Right here the genre shifts: comedy and hope die with Mercutio. Every disaster after Act three, Scene one flows from this street fight."),
        ],
    },
    {
        "id": "tomb", "title": "Patriarchy, potion and a glooming peace", "short": "Potion & tomb",
        "lines": [
            L("pat", "mrh", "**Act 3 Scene 5**: **patriarchy** — a society where fathers rule daughters' lives. In **Act 1**, Lord Capulet said Juliet's consent mattered. Now she refuses Paris:", 0.28,
              say="Act three, Scene five: patriarchy, a society where fathers rule daughters' lives. In Act one, Lord Capulet said Juliet's consent mattered. Now she refuses Paris:"),
            L("wretch", "will", "'Hang thee, **young baggage, disobedient wretch**! ... get thee to church o' Thursday, / Or never after look me in the face.'", 0.3),
            L("alone", "juliet", "Violent **imperatives** and insults! My mother turns away, even the Nurse says marry Paris. Alone in **Act 4 Scene 3**, I face the **42-hour** potion.", 0.3,
              say="Violent imperatives and insults! My mother turns away, even the Nurse says marry Paris. Alone in Act four, Scene three, I face the forty-two-hour potion."),
            L("vial", "juliet", "My **soliloquy** asks terrifying **rhetorical questions** — 'What if it be a poison?' — yet I drink: 'My dismal scene I needs must act alone.'", 0.3),
            L("letter", "mei", "And the Friar's letter explaining the plan? Blocked because Friar John gets quarantined for **plague**! Mercutio's curse came true!", 0.28),
            L("debate", "mrh", "**Fate versus free will**: the stars and the plague look like **fate**, yet the feud, Romeo's rage, Capulet's rush and **haste** are **human choices**. Argue **both**.", 0.3),
            L("kiss", "romeo", "**Act 5 Scene 3**, the tomb. Thinking Juliet dead, I drink poison: 'Thus with a kiss I die' — seconds before she wakes!", 0.28,
              say="Act five, Scene three, the tomb. Thinking Jooliet dead, I drink poison: Thus with a kiss I die, seconds before she wakes!"),
            L("peace", "nib", "Juliet takes Romeo's dagger. Only over their children's bodies do the fathers shake hands. Prince Escalus closes with a **rhyming couplet**:", 0.25),
            L("woe", "will", "'For never was a story of more woe / Than this of Juliet and her Romeo.' '**A glooming peace**' — peace, at a terrible price.", 0.32),
            L("three", "mei", "Three stars! Devastating, brilliant... and Friar Laurence should lose his teaching licence.", 0.48),
        ],
    },
    {
        "id": "peel", "title": "Eight Bs and the PEEL ladder", "short": "PEEL & zoom",
        "lines": [
            L("eightb", "mei", "Plot in **eight Bs**: **Brawl, Ball, Balcony, Bride, Blood, Banished, Bottle, Burial**! Boom!", 0.28),
            L("task", "mrh", "Mug Eleven is ready. Question: **How does Shakespeare present Romeo's feelings for Juliet in Act 2 Scene 2?**", 0.25,
              say="Mug Eleven is ready. Question: How does Shakespeare present Romeo's feelings for Juliet in Act two, Scene two?"),
            L("p1", "mei", "**Point**: Shakespeare presents Romeo's love for Juliet as overwhelming and almost worshipful.", 0.22,
              say="Point: Shakespeare presents Romeo's love for Jooliet as overwhelming and almost worshipful."),
            L("p2", "mei", "**Evidence**: seeing her at the window at night, he declares '**Juliet is the sun**' and urges her to '**kill the envious moon**'.", 0.25,
              say="Evidence: seeing her at the window at night, he declares Jooliet is the sun and urges her to kill the envious moon."),
            L("p3", "mei", "**Explain**: the **metaphor** makes her the centre of light and life in Verona's darkness, while **personifying** the pale moon rejects cold **Rosaline**.", 0.28),
            L("p4", "mei", "**Link**: **however**, the violent verb '**kill**' hints that even tender love here speaks the language of death, **foreshadowing** the tomb.", 0.3),
            L("kevin", "kevin", "She said 'however', zoomed in on 'kill', AND put me right after 'however'! Best day of my life!", 0.3),
            L("sigh", "mrh", "*Sigh.* Top band. Don't let it go to your head.", 0.48,
              say="Top band. Don't let it go to your head."),
        ],
    },
    {
        "id": "recap", "title": "Save yourself some marks", "short": "Exam traps",
        "lines": [
            L("intro", "narr", "Before Tybalt challenges the whiteboard to a duel, here are your memory hooks and six exam traps.", 0.28,
              say="Before Tibbalt challenges the whiteboard to a duel, here are your memory hooks and six exam traps."),
            L("hooks", "mei", "Plot: **8 Bs**. Sonnet: **4 + 4 + 4 + 2 = 14**. Six deaths: **My Teacher Paints Really Joyful Landscapes** — Mercutio, Tybalt, Paris, Romeo, Juliet, Lady Montague!", 0.32,
              say="Plot: eight Bs. Sonnet: four plus four plus four plus two equals fourteen. Six deaths: My Teacher Paints Really Joyful Landscapes: Mercutio, Tibbalt, Paris, Romeo, Jooliet, Lady Montague!"),
            L("t1", "juliet", "One! '**Wherefore** art thou Romeo?' means **WHY** are you a Montague — never 'where are you hiding'!", 0.28),
            L("t2", "romeo", "Two! The whole play takes **about four days**, Sunday to Thursday — NOT months!", 0.28),
            L("t3", "tybalt", "Three! I am Juliet's **cousin**, NOT her brother! And **Mercutio** belongs to **neither** family — he's the Prince's kinsman!", 0.28,
              say="Three! I am Jooliet's cousin, NOT her brother! And Mercutio belongs to neither family, he's the Prince's kinsman!"),
            L("t4", "mercutio", "Four! **Act 3 Scene 1** is the **turning point**! Don't confuse it with **Act 5 Scene 3**, which is the catastrophe.", 0.28,
              say="Four! Act three, Scene one is the turning point! Don't confuse it with Act five, Scene three, which is the catastrophe."),
            L("t5", "mrh", "Five! On **fate versus free will**, never pick only one. Show how human **haste** and hatred work **with** 'star-crossed' fate.", 0.28),
            L("t6", "nib", "Six! Don't retell the plot, darling! **Embed** two-to-five-word quotes and **zoom in** on single words and effects.", 0.32),
            L("four", "mei", "Final Term 1 Shakespeare verdict for Romeo and Juliet: **four stars**. Gorgeous poetry, minus one star because a single delivered WhatsApp would've saved six lives.", 0.4,
              say="Final Term one Shakespeare verdict for Romeo and Jooliet: four stars. Gorgeous poetry, minus one star because a single delivered WhatsApp would've saved six lives."),
            L("fair", "will", "In **1595** we had carrier friars, Mei! Four stars across Term 1 — I'll take it!", 0.8,
              say="In fifteen ninety-five we had carrier friars, Mei! Four stars across Term one, I'll take it!"),
        ],
    },
    {
        "id": "quiz", "title": "Quick-fire quiz", "short": "Quiz",
        "lines": [
            L("intro", "mrh", "Quick-fire quiz! Say each answer out loud before it appears.", 0.3),
            L("q1", "mrh", "What poetic form is the **Prologue**, and how many lines does it have?", 4.0),
            L("a1", "nib", "A **Shakespearean sonnet**: **14 lines** of iambic pentameter (**4 + 4 + 4 + 2**).",
              say="A Shakespearean sonnet: fourteen lines of iambic pen tammiter, four plus four plus four plus two."),
            L("q2", "mrh", "How do Romeo's **oxymorons** about **Rosaline** contrast with his first lines to **Juliet** in **Act 1 Scene 5**?", 4.0,
              say="How do Romeo's oxymorons about Rosaline contrast with his first lines to Juliet in Act one, Scene five?"),
            L("a2", "juliet", "Rosaline gets one-sided **Petrarchan** clichés; Romeo and I share a mutual **sonnet** of sacred **pilgrim** imagery!"),
            L("q3", "mrh", "Which scene is the **turning point** of the play, and who curses '**A plague o' both your houses!**'?", 4.0),
            L("a3", "mercutio", "**Act 3 Scene 1** — and **I** do, **Mercutio**, because neither feuding house is mine!",
              say="Act three, Scene one, and I do, Mercutio, because neither feuding house is mine!"),
            L("q4", "mrh", "Over roughly how many **days** does Shakespeare compress the entire story of Romeo and Juliet?", 4.0),
            L("a4", "romeo", "About **four days** — from Sunday morning to Thursday before dawn!"),
            L("q5", "mrh", "In **Act 3 Scene 5**, what does Lord Capulet's explosion ('**disobedient wretch!**') reveal about **Verona's society**?", 4.0,
              say="In Act three, Scene five, what does Lord Capulet's explosion, disobedient wretch, reveal about Verona's society?"),
            L("a5", "mei", "**Patriarchy**: fathers controlled daughters' marriages and expected total obedience."),
            L("outro", "mrh", "Brilliant work. Now try the **Romeo and Juliet** quiz in your English Lab.", 0.4),
            L("kick", "tybalt", "Who just removed me from the Year 8 WhatsApp group?!", 0.28,
              say="Who just removed me from the Year eight WhatsApp group?!"),
            L("admin", "mei", "Group admin privileges, **Tybalt**. Wisely and slow.", 1.2,
              say="Group admin privileges, Tibbalt. Wisely and slow."),
        ],
    },
]
