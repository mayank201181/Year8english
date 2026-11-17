"""ALL THE SCHOOL'S A STAGE, episode 9 ("Show, Don't Haiku"): Writing Poetry & Commentary.
Teaches Writing Poetry & Commentary (lib/topics/poetry-writing.ts).

Mr Hargreaves sets the Term 2 poetry portfolio: write an original identity poem AND a critical
commentary explaining your craft. Mei writes a forced-rhyme disaster ("sad / bad"), summoning
Lady Cliché (a sparkly greeting card obsessed with worn-out phrases) and Thesaurus Rex (a
monocled emerald thesaurus who replaces "rain" with "pluvial precipitation" and eats drafts).
Across a week in Room 8H, the school library and Ah Ma's Queenstown kitchen, Mei learns to start
from small concrete objects, climb down the ladder of abstraction, choose a poetic form on
purpose (free verse, list poem, dramatic monologue, sonnet, haiku, ghazal, pantoum), master line
breaks and sound without "rhyme crimes", redraft ruthlessly, and write a top-band commentary.
"""

META = {
    "name": "Show, Don't Haiku",
    "kicker": "Claude Sitcom · Ep 9 · Writing Poetry & Commentary",
    "dek": "Mei tries to rhyme 'sad' with 'bad', a pompous Thesaurus swallows her draft, and Ah Ma's kitchen saves the poem. {chapters} scenes.",
    "gap": 0.32,
    "unit": "Scene",
    "lab": "poetry-writing",
    "kit": ["sitcom", "english"],
    "title": "Claude Sitcom Ep 9: Show, Don't Haiku (Writing Poetry & Commentary)",
    "h1": "All the School's a Stage: Show, Don't Haiku",
    "quiz_name": "Writing Poetry & Commentary",
}

CAST = {
    "narr":   {"voice": "bf_emma",   "speed": 0.96, "name": "Narrator"},
    "mei":    {"voice": "af_bella",  "speed": 1.04, "name": "Mei"},
    "mrh":    {"voice": "bm_lewis",  "speed": 0.92, "name": "Mr H"},
    "will":   {"voice": "bm_fable",  "speed": 0.9,  "name": "Will"},
    "nib":    {"voice": "bm_george", "speed": 0.9,  "name": "Nib"},
    "kevin":  {"voice": "am_puck",   "speed": 1.1,  "name": "Kevin"},
    "ahma":   {"voice": "af_kore",   "speed": 1.0,  "name": "Ah Ma"},
    "rex":    {"voice": "bm_daniel", "speed": 0.93, "name": "Rex"},
    "cliche": {"voice": "af_sarah",  "speed": 1.08, "name": "Cliché"},
}


def L(id, who, text, pause=0.0, say=None):
    line = {"id": id, "who": who, "cap": f"**{CAST[who]['name']}:** {text}", "pause": pause}
    line["say"] = say if say else text.replace("**", "")
    return line


CHAPTERS = [
    {
        "id": "cold", "title": "Cold open", "short": "Cold open", "card": False,
        "lines": [
            L("open", "narr", "Room 8H. Monday. Period 3. Mr Hargreaves is on mug number fourteen.", 0.25,
              say="Room eight H. Monday. Period three. Mr Hargreaves is on mug number fourteen."),
            L("task", "mrh", "Term 2 portfolio. Write an original **identity poem**, plus a **commentary** explaining your craft.", 0.3,
              say="Term two portfolio. Write an original identity poem, plus a commentary explaining your craft."),
            L("easy", "mei", "Easy! 'My culture is big and sometimes I'm **sad**. Feeling confused is really quite **bad**.'", 0.35),
            L("leak", "nib", "I have leaked onto the mark book. 'Sad' and 'bad'? Darling, my nib is weeping.", 0.28),
            L("cliche", "cliche", "Ooh, I LOVE it! Add '**tears like rain**' and '**a heart of gold**'! Never fails!", 0.3),
            L("who1", "mei", "Why is a sparkly greeting card talking to me?", 0.25),
            L("rex", "rex", "Silence, greeting card! Replace 'rain' with **pluvial precipitation**! Replace 'sad' with **lugubrious**!", 0.32),
            L("chomp", "narr", "Thesaurus Rex has just eaten Mei's notebook. Nobody else in 8H has blinked.", 0.35,
              say="Thesaurus Rex has just eaten Mei's notebook. Nobody else in eight H has blinked."),
            L("will", "will", "Give her back her parchment, thou overgrown dictionary! Writing a poem requires **soul**!", 0.3),
            L("review", "mei", "Writing poetry: **one star**. My homework is inside a dinosaur.", 0.42),
            L("title", "narr", "All the School's a Stage. Episode nine: Show, Don't Haiku.", 1.2),
        ],
    },
    {
        "id": "ideas", "title": "Start with things, not themes", "short": "Ideas & imagery",
        "lines": [
            L("flat", "narr", "Six p.m. Queenstown. Mei is staring at the word 'IDENTITY' in capital letters.", 0.28,
              say="Six p m. Queenstown. Mei is staring at the word IDENTITY in capital letters."),
            L("stuck", "mei", "I don't have a giant tragic identity! I have curry puffs and homework!", 0.25),
            L("ahma", "ahma", "Mei-ah! Rice cooker just clicked! Come and fold dumplings before the skin dries out!", 0.32),
            L("web", "mrh", "Stop starting with big **abstract nouns** like 'culture' or 'belonging'. Start with **things**.", 0.25),
            L("opms", "nib", "Remember **Old Photos Make Sounds**: **Objects**, **Places**, **Memories**, and **Sounds** of home.", 0.28),
            L("lyon", "mei", "Like George Ella Lyon's '**I am from**' list! 'I am from the click of the rice cooker...'", 0.28),
            L("narrow", "mrh", "Generate a whole page, then **narrow your focus** to **one** object, **one** afternoon, **one** kitchen.", 0.28),
            L("ladder", "nib", "Climb down the **ladder of abstraction**! 'Culture' is abstract: you cannot photograph it.", 0.22),
            L("concrete", "mei", "Down to **concrete nouns**: Ah Ma's **jade bangle**, her **floury thumb** pinching each dumpling fold!", 0.3),
            L("show", "mrh", "Golden rule: **show, don't tell**. Give the reader the **thing** that causes the feeling.", 0.25),
            L("hope", "will", "Emily Dickinson wrote: '\"**Hope**\" is the thing with **feathers**.' Abstract idea, concrete bird. Exquisite.", 0.3),
            L("card", "cliche", "Or say Ah Ma is **as warm as toast** with a **rich tapestry of cultures**!", 0.25),
            L("tests", "nib", "Shoo! Test every image with **SEE it, OWN it, PIN it**. Sensory, uniquely yours, and **precise**.", 0.28),
            L("pin", "mei", "Not 'flower' — **frangipani**. Not 'a language' — **Hokkien**. Two stars!", 0.5),
        ],
    },
    {
        "id": "forms", "title": "Pick your shape on purpose", "short": "Poetic forms",
        "lines": [
            L("lib", "narr", "Tuesday. The library. The SILENCE PLEASE sign has grown a new sticky note.", 0.28),
            L("shape", "mrh", "**Form** is a poem's overall shape and rules. **Structure** is how ideas develop inside it.", 0.25),
            L("free", "mei", "I'm picking **free verse**! No regular metre, no rhyme scheme, so anything goes!", 0.28),
            L("notany", "nib", "Incorrect, darling! Free verse is **not** 'anything goes'. Without rhyme, every **line break** carries the shape.", 0.28),
            L("list", "mrh", "You could use a **list poem** with **anaphora**: repeating 'I am from' to build a chant.", 0.25),
            L("mono", "nib", "Or a **dramatic monologue**: one persona speaking to a silent listener, even an object like a suitcase!", 0.28),
            L("sonnet", "will", "Or the **sonnet**! **Fourteen lines** of **iambic pentameter**! My Sonnet 18: three quatrains and a rhyming **couplet**!", 0.3,
              say="Or the sonnet! Fourteen lines of iambic pen tammiter! My Sonnet eighteen: three quatrains and a rhyming couplet!"),
            L("petrarch", "nib", "Whereas a **Petrarchan sonnet** splits into an **octave** of eight lines and a **sestet** of six, turning at the **volta** on line nine.", 0.28),
            L("haiku", "mei", "What about a **haiku**? Five, seven, five syllables and I'm done by lunch!", 0.28),
            L("kigo", "mrh", "A real haiku captures one **present moment**, with a season word, **kigo**, and a cutting dash, **kireji**. No explaining.", 0.28,
              say="A real haiku captures one present moment, with a season word, kee-go, and a cutting dash, kee-reh-jee. No explaining."),
            L("ghazal", "nib", "A **ghazal** uses couplets ending in the same **radif** after a rhyming **qafia**, with the poet's name, **takhallus**, at the end.", 0.3,
              say="A guzzle uses couplets ending in the same rah-deef after a rhyming kah-fee-ah, with the poet's name, tah-kah-loos, at the end."),
            L("pantoum", "mei", "Wait — the **pantoum** comes from the Malay **pantun**! Right here in our region!", 0.28),
            L("twofour", "mrh", "**Two and four go forth**: lines **2 and 4** of each quatrain become lines **1 and 3** of the next, looping like memory.", 0.3,
              say="Two and four go forth: lines two and four of each quatrain become lines one and three of the next, looping like memory."),
            L("fit", "mei", "A pantoum for Ah Ma's kitchen — repeating like folding dumplings! Okay, that's cool.", 0.5),
        ],
    },
    {
        "id": "lines", "title": "Line breaks and rhyme crimes", "short": "Lines & sound",
        "lines": [
            L("wed", "narr", "Wednesday. Kevin is practising standing at the end of a line without panicking.", 0.28),
            L("endstop", "kevin", "When punctuation finishes a line, it's **end-stopped**! Firm! Safe! Nobody falls off!", 0.28),
            L("enjamb", "nib", "When a sentence runs over the line break without punctuation, that is **enjambment**.", 0.25),
            L("suitcase", "mrh", "Look: 'a suitcase that is **never** / quite unpacked.' The last word of a line gets the **spotlight**.", 0.28),
            L("never", "mei", "For a split second, '**never**' sounds permanent — until 'quite' softens it on the next line!", 0.28),
            L("thomas", "will", "In Edward Thomas's Adlestrop, the train 'drew up there / **Unwontedly**.' The line halts just like the train!", 0.3,
              say="In Edward Thomas's Addlestrop, the train drew up there, Unwontedly. The line halts just like the train!"),
            L("caesura", "kevin", "And after 'Unwontedly.' is a **caesura** — a pause **mid-line**! I'm creating stillness! I'm helping!", 0.3,
              say="And after Unwontedly is a si zyoor uh, a pause mid-line! I'm creating stillness! I'm helping!"),
            L("stanza", "nib", "**Stanza** is Italian for '**room**'. Never end a line on weak words like 'the' or 'and' by accident.", 0.25),
            L("rhyme", "cliche", "Now add rhyme! 'My grandmother is very **wise**, she always bakes her apple **pies**!'", 0.3),
            L("crime", "nib", "**Forced rhyme**! Twisted word order like 'to market we did go', filler words, and pies Ah Ma has never baked!", 0.3),
            L("sound", "mrh", "Read aloud for **sound**, not just rhyme: **alliteration** in Tennyson's 'clasps the crag with crooked hands'.", 0.28),
            L("keats", "will", "**Sibilance** and soft 'm' sounds in Keats's 'Season of mists and mellow fruitfulness'. Plus **assonance**, **plosives** and **onomatopoeia**!", 0.3),
            L("slant", "mei", "And if full rhyme sounds sing-song, use **half-rhyme** like 'kept' and 'slipped', or none at all. Three stars!", 0.5),
        ],
    },
    {
        "id": "drafts", "title": "Kill the thesaurus", "short": "Redrafting & endings",
        "lines": [
            L("thu", "narr", "Thursday. Mei is on Draft Two. Thesaurus Rex has broken into her bedroom.", 0.28),
            L("rex2", "rex", "Why write 'Uncle Lim's wok roars' when you can write 'the culinary cauldron **vociferates**'?!", 0.32),
            L("no", "mrh", "Out, Rex. Good poets don't stuff big words in — they **redraft** until every plain, concrete word earns its place.", 0.28),
            L("myth", "mei", "Wait, don't real poets write a masterpiece in one flash of pure inspiration?", 0.25),
            L("loop", "nib", "Elizabeth Bishop wrote seventeen drafts! Follow the loop: **Generate, Shape, Cut, Sharpen, Listen, Rest**.", 0.3),
            L("before", "mei", "Draft One: 'I have two passports, I feel **confused**, / Two different countries, I am **bemused**.' Yikes.", 0.28),
            L("after", "mei", "Draft Three: 'two passports in a drawer, / one blue, one red, / the same boy in both / **trying hard not to blink**.'", 0.32),
            L("why", "mrh", "You cut the forced rhyme, swapped abstract feelings for concrete colour, and **showed** the pressure.", 0.28),
            L("hawker", "will", "And 'Uncle Lim's wok **roars** like a small jet'! Onomatopoeia! Even I am hungry!", 0.28),
            L("titles", "nib", "Never call it 'Untitled'. Make your **title** work: name the form, echo a phrase, or add context.", 0.25),
            L("moral", "cliche", "And end with: 'And that is why we should all respect every culture!'", 0.28),
            L("ending", "mrh", "Never end with a **moral summary**. End on a **resonant image** or a quiet turn.", 0.25),
            L("holds", "mei", "In my dumpling pantoum, 'It falls apart' changes in the last stanza to: '**I try again. It holds this time.**'", 0.35),
            L("sigh", "mrh", "Keep both drafts. Your commentary needs the before and after.", 0.5),
        ],
    },
    {
        "id": "commentary", "title": "Be your own critic", "short": "The commentary",
        "lines": [
            L("fri", "narr", "Friday. The poem is finished. Now comes the three-hundred-to-six-hundred-word commentary.", 0.28),
            L("sum", "mei", "So I just summarise what my poem is about and say I used enjambment to make it flow?", 0.28),
            L("ink2", "nib", "'Make it flow'?! Summary earns pennies! A commentary analyses **your choices** like a critic, in the **first person**!", 0.3),
            L("mnem", "mrh", "Six steps: **I Invent Fresh Tunes, Rewrite, Evaluate**. **Intentions, Influences, Form, Techniques, Rewrite, Evaluate**.", 0.3),
            L("inf", "mei", "For **Influences**, I name the exact poem: like Sujata Bhatt's '**it blossoms out of my mouth**', I left Hokkien untranslated!", 0.3),
            L("slash", "kevin", "When you quote your own poem, put a **slash** to show a line break! Don't forget the slash!", 0.25),
            L("tent", "nib", "And use **tentative phrasing** about the reader: 'I **hoped** this **might suggest**', never 'the reader will definitely cry'.", 0.28),
            L("p", "mei", "Let's climb PEEL! **Point**: I used sound imagery in stanza one to show unspoken family worry.", 0.22,
              say="Let's climb peel! Point: I used sound imagery in stanza one to show unspoken family worry."),
            L("e", "mei", "**Evidence**: 'my grandmother's jade bangle / **tapping** the table like a **question** / she never quite asks.'", 0.25),
            L("ex", "mei", "**Explain**: Onomatopoeia in 'tapping' and enjambment after 'question' let the reader hear her quiet fear I'm losing Hokkien.", 0.28),
            L("l", "mei", "**Link**: And **Evaluate** honestly — stanza three is looser, so next time I'd cut the flip-flops line.", 0.28),
            L("top", "mrh", "Specific self-quotation, precise effect, and an honest weakness. That... is top band.", 0.5),
        ],
    },
    {
        "id": "recap", "title": "Save yourself some marks", "short": "Exam traps",
        "lines": [
            L("intro", "narr", "Before portfolio hand-in, the English department would like to save you some marks.", 0.28),
            L("hooks", "mei", "Memory hooks! **Old Photos Make Sounds** for ideas; **SEE it, OWN it, PIN it** for images; **Two and four go forth** for a pantoum.", 0.3),
            L("hooks2", "nib", "And for the commentary: **I Invent Fresh Tunes, Rewrite, Evaluate**.", 0.28),
            L("t1", "mrh", "One. Don't **tell** feelings with abstract nouns like 'sadness'. **Show** them with concrete objects and actions.", 0.28),
            L("t2", "cliche", "Two. Avoid **forced rhymes** and worn-out **clichés**. Apparently 'tears like rain' is banned now. Rude.", 0.28),
            L("t3", "kevin", "Three. Don't break lines randomly on 'the' or 'and'. Every **line break** needs a job you can explain!", 0.28),
            L("t4", "rex", "Four. Precise concrete nouns beat **thesaurus stuffing**. Even if 'pluvial precipitation' is magnificent.", 0.28),
            L("t5", "will", "Five. Never end your poem with a **moral summary**. End on an **image** that lingers.", 0.28),
            L("t6", "nib", "Six. In your **commentary**, quote yourself with slashes, explain **effects**, show a **redraft**, and **evaluate** honestly.", 0.35),
            L("kitchen", "ahma", "Mei! Your dumpling holds its shape today! And the poem is not bad, lah!", 0.35),
            L("four", "mei", "Ah Ma said 'not bad'! That's basically a Nobel Prize! Writing poetry: **four stars**.", 0.3),
            L("whyfour", "will", "Four?! You wrote a pantoum!", 0.28),
            L("drafts", "mei", "Seventeen drafts is a lot of work, Will.", 0.9),
        ],
    },
    {
        "id": "quiz", "title": "Quick-fire quiz", "short": "Quiz",
        "lines": [
            L("intro", "mrh", "Quick-fire quiz! Say each answer out loud before it appears.", 0.3),
            L("q1", "mrh", "Should an identity poem build mainly on **abstract nouns** or **concrete nouns**?", 4.0),
            L("a1", "mei", "**Concrete nouns**: things the reader can see, hear, smell or touch."),
            L("q2", "mrh", "In a **pantoum**, which two lines of each stanza become lines 1 and 3 of the next?", 4.0,
              say="In a pantoum, which two lines of each stanza become lines one and three of the next?"),
            L("a2", "will", "**Lines 2 and 4**. Two and four go forth!",
              say="Lines two and four. Two and four go forth!"),
            L("q3", "mrh", "What do we call it when a sentence runs over a **line break** without punctuation?", 4.0),
            L("a3", "nib", "**Enjambment**."),
            L("q4", "mrh", "How do you mark a **line break** when quoting your own poem inside your commentary?", 4.0),
            L("a4", "kevin", "With a forward **slash**, surrounded by spaces!"),
            L("q5", "mrh", "What six parts belong in a commentary: **I Invent Fresh Tunes, Rewrite, Evaluate**?", 4.0),
            L("a5", "mei", "**Intentions, Influences, Form, Techniques, Redrafting, and Evaluation**."),
            L("outro", "mrh", "Brilliant work. Now try the **Writing Poetry & Commentary** quiz in your English Lab.", 0.4,
              say="Brilliant work. Now try the Writing Poetry and Commentary quiz in your English Lab."),
            L("st1", "rex", "May I eat Cliché now?", 0.28),
            L("st2", "cliche", "Catch me if you can, greenosaurus!", 0.28),
            L("st3", "mrh", "Not in Room 8H.", 1.2, say="Not in Room eight H."),
        ],
    },
]
