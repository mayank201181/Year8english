"""ALL THE SCHOOL'S A STAGE, episode 8 ("Home Is Where the Kopi Is"):
Teaches Poems of Identity & Culture (lib/topics/identity-culture-poetry.ts).

At a Queenstown hawker centre at 7 p.m., Mei reserves a table with a tissue packet and orders kopi-O kosong in five
words after Will's Early Modern English baffles the stall-holder. When Nib calls Singlish 'broken English', Lexi
(Mother Tongue, a warm dual-script talking dictionary) and Suitcase (a sticker-covered migrant suitcase) step in.
With Mr Hargreaves, Ah Ma (from her HDB kitchen doorway) and Kevin (guarding Dickinson's dashes), they explore
identity, culture and heritage (PLACE), dialect and code-switching, symbolic objects and family memory, migration
and displacement, masks and form (Dunbar's rondeau, Tagore's anaphora, Lazarus's sonnet), D-C-E-L word zoom-ins,
and integrated poem comparison (Message, Methods, Context + PEEL).
"""

META = {
    "name": "Home Is Where the Kopi Is",
    "kicker": "Claude Sitcom · Ep 8 · Poems of Identity & Culture",
    "dek": "Over kopi and tissue packets at a Queenstown hawker centre, Mei discovers how language, migration, masks and heritage shape poetry. {chapters} scenes.",
    "gap": 0.32,
    "unit": "Scene",
    "lab": "identity-culture-poetry",
    "kit": ["sitcom", "english"],
    "title": "Claude Sitcom Ep 8: Home Is Where the Kopi Is (Poems of Identity & Culture)",
    "h1": "All the School's a Stage: Home Is Where the Kopi Is",
    "quiz_name": "Poems of Identity & Culture",
}

CAST = {
    "narr":     {"voice": "bf_emma",   "speed": 0.96, "name": "Narrator"},
    "mei":      {"voice": "af_bella",  "speed": 1.04, "name": "Mei"},
    "mrh":      {"voice": "bm_lewis",  "speed": 0.92, "name": "Mr H"},
    "will":     {"voice": "bm_fable",  "speed": 0.9,  "name": "Will"},
    "nib":      {"voice": "bm_george", "speed": 0.9,  "name": "Nib"},
    "kevin":    {"voice": "am_puck",   "speed": 1.1,  "name": "Kevin"},
    "ahma":     {"voice": "af_kore",   "speed": 1.0,  "name": "Ah Ma"},
    "lexi":     {"voice": "bf_lily",   "speed": 0.98, "name": "Lexi"},
    "suitcase": {"voice": "am_fenrir", "speed": 0.96, "name": "Suitcase"},
}


def L(id, who, text, pause=0.0, say=None):
    line = {"id": id, "who": who, "cap": f"**{CAST[who]['name']}:** {text}", "pause": pause}
    line["say"] = say if say else text.replace("**", "")
    return line


CHAPTERS = [
    {
        "id": "cold", "title": "Cold open", "short": "Cold open", "card": False,
        "lines": [
            L("hawk", "narr", "Queenstown hawker centre, Singapore. Seven p.m. UNESCO Intangible Cultural Heritage since **2020**.", 0.3,
              say="Queenstown hawker centre, Singapore. Seven p m. You-ness-koh Intangible Cultural Heritage since twenty twenty."),
            L("chope", "mei", "Packet of tissues on the table: seat **choped**. Now watch a local order coffee.", 0.28,
              say="Packet of tissues on the table: seat chohpt. Now watch a local order coffee."),
            L("willtry", "will", "Allow me! Ho, tapster! Pour forth thy darkest Arabian berry, unburdened by sweet cane!", 0.35),
            L("blank", "narr", "The kopi uncle did not pour forth.", 0.3),
            L("meitry", "mei", "Uncle, one **kopi-O kosong**, can?", 0.3,
              say="Uncle, one koh-pee oh koh-song, can?"),
            L("broken", "nib", "No 'please'? Non-standard grammar? Darling, that is *broken* English!", 0.3),
            L("lexi", "lexi", "Excuse me! That is **code-switching**, and it is **mended**, not broken! I am **Lexi** — **Mother Tongue**!", 0.32),
            L("suit", "suitcase", "And I'm **Suitcase**. Every sticker on me is a poem about **identity, migration, and belonging**.", 0.32),
            L("rev", "mei", "Will's hawker skills: **one star**. Let's learn identity poetry.", 0.45),
            L("title", "narr", "All the School's a Stage. Episode eight: Home Is Where the Kopi Is.", 1.1),
        ],
    },
    {
        "id": "language", "title": "Identity, dialect & code-switching", "short": "Tongues & dialect",
        "lines": [
            L("defs", "mrh", "Three foundations. **Identity** is your sense of who you are; **culture** is a group's shared way of life; **heritage** is what earlier generations hand down.", 0.3),
            L("place", "mrh", "Scan any poem through **PLACE**: **P**lace, **L**anguage, **A**ncestors, **C**ommunity, **E**xpression.", 0.28),
            L("switch", "lexi", "You already **code-switch** every day: **Standard English** in Room 8H, **Singlish** at the hawker stall, family words at home! That's fluency, not confusion!", 0.32,
              say="You already code-switch every day: Standard English in Room eight H, Singlish at the hawker stall, family words at home! That's fluency, not confusion!"),
            L("spell", "nib", "And when **John Agard** writes Caribbean **Creole** phonetic spelling — 'Explain yuself' and 'wha yu mean' — he isn't misspelling!", 0.3),
            L("voice", "lexi", "He forces the reader to hear his real accent, refusing to have his voice 'corrected' into Standard English!", 0.3),
            L("bhatt", "lexi", "In *Search For My Tongue*, **Sujata Bhatt** builds an **extended metaphor**: fearing her **mother tongue** will 'rot and die', she prints **Gujarati script** right on the page.", 0.32),
            L("out", "mei", "Wait — if an English-only reader can't read the Gujarati lines, *they* feel like the outsider for once!", 0.3),
            L("bloom", "lexi", "Exactly! Then overnight, 'a stump of a shoot' regrows until 'it blossoms out of my mouth'!", 0.3),
            L("mend", "mei", "Just like *Hawker Centre, 7 p.m.*: 'This is not broken. / This is mended:' — stitched from Hokkien, Malay, Tamil, and English!", 0.45,
              say="Just like Hawker Centre, seven p m: This is not broken. This is mended: stitched from Hokkien, Malay, Tamil, and English!"),
        ],
    },
    {
        "id": "heritage", "title": "Heritage, symbolic objects & Ah Ma", "short": "Heritage & roots",
        "lines": [
            L("flat", "narr", "Eight p.m. Mei's HDB flat in Queenstown. Mug count irrelevant; Ah Ma is making tea.", 0.28,
              say="Eight p m. Mei's H D B flat in Queenstown. Mug count irrelevant; Ah Ma is making tea."),
            L("sym", "nib", "Heritage poems turn concrete **objects** — clothes, bangles, recipes — into **symbols** of an abstract past.", 0.28),
            L("alvi", "lexi", "In *Presents from my Aunts in Pakistan*, **Moniza Alvi** admires a 'peacock-blue' outfit and 'candy-striped glass bangles', yet feels 'alien in the sitting-room'.", 0.32),
            L("unres", "mrh", "She ends 'of no fixed nationality'. Notice that: identity poems don't always end neatly resolved.", 0.28),
            L("naidu", "lexi", "Contrast **Sarojini Naidu's** *In the Bazaars of Hyderabad* from **1912**, under British rule: 'What do you sell, O ye merchants? / Richly your wares are displayed.'", 0.32,
              say="Contrast Sarojini Naidu's In the Bazaars of Hyderabad from nineteen twelve, under British rule: What do you sell, O ye merchants? Richly your wares are displayed."),
            L("cycle", "nib", "Rich sensory lists celebrate Indian craft, moving from wedding crowns to 'the sleep of the dead' — a whole human life inside one market.", 0.3),
            L("ahma", "ahma", "Mei! Come and taste the soup, tell me enough salt or not!", 0.3),
            L("paati", "mei", "Like *In Paati's Language*! Even when English and Tamil feel like 'two rivers running side by side', trying one clumsy sentence feels like putting on a grandmother's **bangle**!", 0.32,
              say="Like In Pah-tee's Language! Even when English and Tamil feel like two rivers running side by side, trying one clumsy sentence feels like putting on a grandmother's bangle!"),
            L("ahma2", "ahma", "Your Hokkien still clumsy, Mei, but better than the noisy ghost in the hall.", 0.3),
            L("bow", "will", "She knows I'm here?! Extraordinary woman. **Two and a half stars**? Make it **three**!", 0.45),
        ],
    },
    {
        "id": "belonging", "title": "Migration, place & two worlds", "short": "Place & migration",
        "lines": [
            L("lib", "narr", "Thursday. The library. Suitcase is unpacking two worlds.", 0.25),
            L("disp", "suitcase", "**Migration** poems live between **displacement** — feeling uprooted and out of place — and **belonging**.", 0.28),
            L("island", "suitcase", "In **Grace Nichols's** *Island Man*, a Caribbean man in London wakes to 'the sound of the sea' on his 'emerald island' before traffic drags him to 'Another London day'.", 0.32),
            L("drift", "nib", "Warm blue-green nature clashes with 'grey metallic' city noise, and unpunctuated lines drift across the page like waves.", 0.28),
            L("hurr", "lexi", "Yet in *Hurricane Hits England*, a storm from home teaches the speaker that 'the earth is the earth is the earth' — belonging in both places!", 0.3),
            L("laz", "suitcase", "Now flip to the welcoming shore! **Emma Lazarus** wrote *The New Colossus* in **1883** for the Statue of Liberty's pedestal:", 0.28,
              say="Now flip to the welcoming shore! Emma Lazarus wrote The New Colossus in eighteen eighty-three for the Statue of Liberty's pedestal:"),
            L("give", "lexi", "'Mother of Exiles... Give me your tired, your poor, / Your huddled masses yearning to breathe free.'", 0.32),
            L("tck", "mei", "And what if you've moved countries three times, like half of Banyan Hill? A **third culture kid**!", 0.28),
            L("gapm", "mei", "In *Where Are You From?*, the Singapore MRT says 'please mind the platform gap', and the speaker thinks: 'Maybe I am the gap' — where doors open **both ways**!", 0.45,
              say="In Where Are You From?, the Singapore M R T says please mind the platform gap, and the speaker thinks: Maybe I am the gap — where doors open both ways!"),
        ],
    },
    {
        "id": "masks", "title": "Masks, form & zooming in", "short": "Masks & zoom-in",
        "lines": [
            L("hall", "narr", "School hall. How poets answer **prejudice** through **form** and single words.", 0.25),
            L("dun", "mrh", "**Paul Laurence Dunbar**, son of formerly enslaved parents, wrote *We Wear the Mask* in **1895**: 'We wear the mask that grins and lies' and 'With torn and bleeding hearts we smile.'", 0.32,
              say="Paul Laurence Dunbar, son of formerly enslaved parents, wrote We Wear the Mask in eighteen ninety-five: We wear the mask that grins and lies, and With torn and bleeding hearts we smile."),
            L("rond", "nib", "Dunbar chooses a strict **rondeau**: only two rhyme sounds plus the returning **refrain** 'We wear the mask' — trapping the collective '**We**' just like the mask itself!", 0.32,
              say="Dunbar chooses a strict ron-doh: only two rhyme sounds plus the returning refrain We wear the mask — trapping the collective We just like the mask itself!"),
            L("agard", "lexi", "Whereas **John Agard** uses **free verse**! In *Half-Caste*, he mocks the label with Picasso and Tchaikovsky's black-and-white keys, telling the listener to return with 'de whole of yu eye'!", 0.32),
            L("hist", "lexi", "And in *Checking Out Me History*, the refrain 'Dem tell me' exposes Eurocentric schooling before turning to pride: 'I carving out me identity'!", 0.32),
            L("dick", "kevin", "And look at **Emily Dickinson's** dashes in 'I'm Nobody! Who are you? / Are you – Nobody – too?'! Every dash is a **caesura** — a conspiratorial whisper with me!", 0.32,
              say="And look at Emily Dickinson's dashes in I'm Nobody! Who are you? Are you — Nobody — too?! Every dash is a si zyoor uh — a conspiratorial whisper with me!"),
            L("tag", "mrh", "In **1912**, **Rabindranath Tagore** — first non-European Nobel laureate in **1913** — built one prayer-sentence of **anaphora**, repeating 'Where...' seven times!", 0.3,
              say="In nineteen twelve, Rabindranath Tagore — first non-European Nobel laureate in nineteen thirteen — built one prayer-sentence of uh-naff-uh-ruh, repeating Where seven times!"),
            L("dcel", "nib", "To zoom in on one word, use **D-C-E-L** — 'Dogs Chase Every Lizard': **Denotation, Connotations, Effect, Link**!", 0.3,
              say="To zoom in on one word, use D, C, E, L — Dogs Chase Every Lizard: Denotation, Connotations, Effect, Link!"),
            L("hudd", "suitcase", "Compare Lazarus writing '**huddled** masses' instead of 'crowded': *huddled* connotes cold, fear, and pressing together for warmth, building instant sympathy!", 0.3),
            L("walls", "mei", "In Tagore's 'narrow domestic walls', *walls* denotes barriers, but **connotes** petty prejudices splitting humanity into 'fragments' before 'let my country awake'! **Four stars**!", 0.45),
        ],
    },
    {
        "id": "compare", "title": "Comparing two poems & PEEL", "short": "Comparing poems",
        "lines": [
            L("room", "mrh", "Exam time: **comparing two poems**. Remember **Many Musicians Compose** — compare **Message**, **Methods**, and **Context**.", 0.3),
            L("block", "mrh", "Never write all about Poem A and then all about Poem B. That's a **block comparison**, and it drops marks.", 0.28),
            L("integ", "nib", "Write an **integrated comparison**! Put **both poems in every paragraph**, joined by **comparative connectives**: *similarly, both, whereas, in contrast*.", 0.3),
            L("venn", "lexi", "Compare responses to prejudice: **while** Dunbar's speakers hide pain behind a collective '**we**' in a strict **rondeau**, Agard's speaker confronts '**yu**' directly in **free verse**!", 0.32),
            L("p1", "mei", "Now our **PEEL** ladder on Dunbar! **Point**: Dunbar shows prejudice forcing a whole community to hide suffering behind a false smile.", 0.26),
            L("p2", "mei", "**Evidence** & **Explain**: the personified mask '**grins and lies**' over '**torn and bleeding hearts**'; 'grins' connotes a frozen, painful grimace rather than joy.", 0.3),
            L("p3", "mei", "**Link**: speaking as '**we**' in 1890s America, the inescapable **refrain** turns the smile into collective survival armour.", 0.3,
              say="Link: speaking as we in eighteen nineties America, the inescapable refrain turns the smile into collective survival armour."),
            L("own", "mrh", "And when you write **your own identity poem** or spoken analysis: signpost clearly, avoid **stereotypes**, and pick one concrete family detail.", 0.45),
        ],
    },
    {
        "id": "recap", "title": "Save yourself some marks", "short": "Exam traps",
        "lines": [
            L("intro", "narr", "Back at the hawker table. Six identity-poetry exam traps.", 0.25),
            L("mnem", "mei", "Hooks! **PLACE** for themes; **D-C-E-L** — Dogs Chase Every Lizard; **Many Musicians Compose**; and **PEEL**!", 0.3,
              say="Hooks! PLACE for themes; D, C, E, L — Dogs Chase Every Lizard; Many Musicians Compose; and PEEL!"),
            L("t1", "lexi", "One. Never call **dialect** or **Creole spelling** 'bad grammar' — analyse why the poet chose that voice!", 0.28),
            L("t2", "nib", "Two. Don't bolt on biography! Use **context** only to explain a choice inside the poem.", 0.28),
            L("t3", "kevin", "Three. Say '**the speaker**', not automatically 'the poet', and embed **short** quotations!", 0.28),
            L("t4", "mrh", "Four. Never write a block comparison: **integrate** both poems in every paragraph with *whereas* and *similarly*.", 0.28),
            L("t5", "suitcase", "Five. Watch the **ending**: some speakers claim pride, while others remain 'of no fixed nationality'.", 0.28),
            L("t6", "will", "Six. Avoid sweeping cultural **stereotypes** — discuss *this* speaker and *this* concrete symbol!", 0.3),
            L("rev", "mei", "Identity & Culture Poetry: **four and a half stars**. Though Ah Ma's kopi gets five, lah.", 0.35),
            L("kopi", "will", "Tapster! Might a ghost humbly request... one kopi-O kosong?", 0.8,
              say="Tapster! Might a ghost humbly request... one koh-pee oh koh-song?"),
        ],
    },
    {
        "id": "quiz", "title": "Quick-fire quiz", "short": "Quiz",
        "lines": [
            L("intro", "mrh", "Quick-fire quiz! Say each answer out loud before it appears.", 0.3),
            L("q1", "mrh", "What do we call moving between two languages or dialects depending on who we are talking to?", 4.0),
            L("a1", "lexi", "**Code-switching** — a marker of fluency and belonging, not confusion!"),
            L("q2", "mrh", "Why does **Sujata Bhatt** print **Gujarati script** in the middle of *Search For My Tongue*?", 4.0),
            L("a2", "mei", "To show her **mother tongue** alive on the page — and let an English-only reader feel like an **outsider**!"),
            L("q3", "mrh", "In **Paul Laurence Dunbar's** *We Wear the Mask*, how does the **rondeau** form reinforce the meaning?", 4.0,
              say="In Paul Laurence Dunbar's We Wear the Mask, how does the ron-doh form reinforce the meaning?"),
            L("a3", "nib", "Its tight two-rhyme pattern and returning **refrain** trap the speakers, mirroring the mask they cannot remove."),
            L("q4", "mrh", "What do the four steps of **D-C-E-L** stand for when zooming in on one word?", 4.0,
              say="What do the four steps of D, C, E, L stand for when zooming in on one word?"),
            L("a4", "kevin", "**Denotation, Connotations, Effect, and Link**! Dogs Chase Every Lizard!"),
            L("q5", "mrh", "When comparing two poems, why does an **integrated comparison** beat a block comparison?", 4.0),
            L("a5", "suitcase", "Because every paragraph links **both poems** by **Message and Method** using connectives like *whereas* and *similarly*!"),
            L("outro", "mrh", "Brilliant work. Now try the **Poems of Identity & Culture** quiz in your English Lab.", 0.4,
              say="Brilliant work. Now try the Poems of Identity and Culture quiz in your English Lab."),
            L("st1", "will", "Uncle! He understood me! I belong!", 0.3),
            L("st2", "mei", "You still owe him a dollar forty, Will.", 1.1),
        ],
    },
]
