import type { Topic } from "../types";

// Writing Poetry & Commentary — Year 8 English, Term 2 (Identity and Culture).
// All poems labelled "Original" were written for this app. Public-domain poems are
// quoted in full; copyrighted anthology poems are named and quoted only a short phrase at a time.

export const poetryWriting: Topic = {
  id: "poetry-writing",
  title: "Writing Poetry & Commentary",
  subject: "Poetry",
  icon: "✍️",
  summary: "Craft your own poem, then write the commentary on it.",
  intro:
    "You have spent weeks analysing other people's poems about identity and culture. Now it is your turn: you will find ideas in the objects, places, sounds and words that make you *you*, shape them into a poem with a form chosen on purpose, and then write a commentary that explains your choices like a real critic. By the end you will know how to turn a feeling into an image, a sentence into a line, and a first draft into something worth reading aloud.",

  guide: [
    {
      id: "finding-ideas",
      heading: "Finding ideas: start with things, not themes",
      discovery: {
        problem:
          "Set a timer for three minutes. Write down every object in your home that would make a visitor ask a question about you or your family. Do not stop to judge. When the timer ends, circle the ONE object that gives you a feeling you cannot quite put into words.",
        idea:
          "The circled object is your poem. Strong identity poems almost never begin with big words like 'culture' or 'belonging'. They begin with something you can hold, hear or smell: a jade bangle, a second passport, a radio playing a language you half understand. The feeling you 'cannot quite explain' is exactly the space your poem will explore.",
      },
      body:
        "**Identity** is everything that makes up who you are: the languages you speak (or half-speak), the places you have lived, your family's stories, the food you eat, the rituals you follow and the moments when you feel you belong — or do not. The Term 2 anthology poets all write about identity, but notice that none of them simply *announces* 'I have a complicated identity'. Sujata Bhatt starts from a tongue, Imtiaz Dharker from a burst water pipe, Grace Nichols from a hurricane, John Agard from a single label someone uses about him.\n\nSo the first job of a poet is to **generate raw material**: lots of specific, true details. Try several of these **idea-generating strategies**:\n\n- **Memory list** — write 'I remember…' ten times, each with a different tiny moment (the smell of the car after swimming; your dad's laugh on the phone to his brother).\n- **Objects that matter** — list objects that carry a story: a key to a house you no longer live in, a recipe in someone's handwriting, a school badge from another country.\n- **Places** — draw a quick map of one place (a kitchen, a hawker centre, a grandparent's flat) and label what happens in each corner.\n- **The sounds of home** — sit still for five minutes and list every sound: the rice cooker clicking, the afternoon thunder, a language on the radio. Sound is the most underused sense in student poems.\n- **'I am from' lists** — the American poet George Ella Lyon's poem *Where I'm From* (1993) is used in classrooms all over the world as a template. The idea is simple: begin line after line with 'I am from…' and finish each one with a *specific* detail. Write your own list; do not copy hers.\n- **Sayings and languages** — list the phrases your family repeats, the words you use only at home, the moments you **code-switch** (move between languages or ways of speaking depending on who you are with).\n\nOnce you have a page of material, **narrow your focus**. A 20-line poem cannot hold your whole life. Choose *one* afternoon, *one* object, *one* conversation. Ask of every detail: *why does this matter to me?* The detail with the strongest pull — often the one that is slightly uncomfortable or hard to explain — is the one worth writing.",
      diagram: `<svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Idea web with ME in the centre and five branches: objects, places, sounds, sayings and memories"><rect x="0" y="0" width="340" height="210" fill="#faf5ff"/><circle cx="170" cy="105" r="30" fill="#7c3aed"/><text x="170" y="110" font-size="14" text-anchor="middle" fill="#ffffff" font-weight="bold">ME</text><line x1="170" y1="75" x2="170" y2="42" stroke="#7c3aed" stroke-width="2"/><line x1="142" y1="94" x2="90" y2="70" stroke="#7c3aed" stroke-width="2"/><line x1="198" y1="94" x2="250" y2="70" stroke="#7c3aed" stroke-width="2"/><line x1="148" y1="125" x2="95" y2="160" stroke="#7c3aed" stroke-width="2"/><line x1="192" y1="125" x2="245" y2="160" stroke="#7c3aed" stroke-width="2"/><rect x="110" y="10" width="120" height="34" rx="8" fill="#ede9fe" stroke="#7c3aed"/><text x="170" y="24" font-size="11" text-anchor="middle" fill="#4c1d95" font-weight="bold">OBJECTS</text><text x="170" y="38" font-size="11" text-anchor="middle" fill="#4c1d95">bangle, passport</text><rect x="8" y="50" width="110" height="34" rx="8" fill="#ede9fe" stroke="#7c3aed"/><text x="63" y="64" font-size="11" text-anchor="middle" fill="#4c1d95" font-weight="bold">PLACES</text><text x="63" y="78" font-size="11" text-anchor="middle" fill="#4c1d95">kitchen, airport</text><rect x="222" y="50" width="110" height="34" rx="8" fill="#ede9fe" stroke="#7c3aed"/><text x="277" y="64" font-size="11" text-anchor="middle" fill="#4c1d95" font-weight="bold">SOUNDS</text><text x="277" y="78" font-size="11" text-anchor="middle" fill="#4c1d95">rice cooker, rain</text><rect x="12" y="150" width="120" height="34" rx="8" fill="#ede9fe" stroke="#7c3aed"/><text x="72" y="164" font-size="11" text-anchor="middle" fill="#4c1d95" font-weight="bold">SAYINGS</text><text x="72" y="178" font-size="11" text-anchor="middle" fill="#4c1d95">home words, lah</text><rect x="208" y="150" width="124" height="34" rx="8" fill="#ede9fe" stroke="#7c3aed"/><text x="270" y="164" font-size="11" text-anchor="middle" fill="#4c1d95" font-weight="bold">MEMORIES</text><text x="270" y="178" font-size="11" text-anchor="middle" fill="#4c1d95">I remember...</text><text x="170" y="203" font-size="11" text-anchor="middle" fill="#6d28d9">Circle the detail with the strongest pull</text></svg>`,
      diagramCaption:
        "An idea web: fill each branch with specific details, then circle the one that carries the most feeling.",
      keyPoints: [
        "Generate lots of specific raw material before you write a single line.",
        "Objects, places, sounds, sayings and memories are richer starting points than abstract themes.",
        "Narrow your focus to one moment, object or conversation.",
        "'I am from' lists (inspired by George Ella Lyon) give you a frame — fill it with your own details.",
      ],
      thinkDeeper:
        "Bhatt, Dharker, Nichols and Agard all write about big questions of identity, yet each poem grows from one small, physical starting point. Why might a small, specific starting point let a poem say MORE about a big idea than a poem that tackles the big idea head-on?",
    },
    {
      id: "concrete-imagery",
      heading: "Concrete imagery: show, don't tell (and dodge the cliché)",
      discovery: {
        problem:
          "Read these two lines aloud. Which one makes you see a person — and which one could be about anybody?\n\nA: 'My grandmother was kind and loving and I miss her.'\nB: 'My grandmother kept a boiled sweet in every coat pocket, just in case.'",
        idea:
          "Line B never uses the word 'kind' or 'loving', yet you feel both — and you can picture her. That is the power of concrete detail. Line A TELLS you what to feel using abstract words; line B SHOWS you something and trusts you to feel it. Readers believe what they can see.",
      },
      body:
        "An **abstract noun** names an idea or feeling you cannot touch: *love, identity, culture, sadness, belonging, freedom*. A **concrete noun** names something you can perceive with your senses: *a cracked teacup, a jade bangle, the smell of durian, a stamped passport*. Weak student poems are full of abstract nouns; strong ones are built from concrete nouns.\n\n**Imagery** is language that appeals to the senses — sight, sound, smell, taste and touch. The golden rule of poetry writing is **show, don't tell**: instead of naming the feeling, give the reader the *thing* that causes the feeling, and let them feel it themselves.\n\n- Telling: *I felt like an outsider at my new school.*\n- Showing: *At lunch I learned which table was mine / by which one went quiet.*\n\nEmily Dickinson shows the trick in one line: **'“Hope” is the thing with feathers'**. She takes an abstract noun (hope) and makes it a concrete creature, a small bird. Abstract ideas become powerful when you anchor them in something physical.\n\n**Figurative language** — similes, metaphors and personification — is another way to make the abstract concrete. A **simile** compares using 'like' or 'as'; a **metaphor** says one thing *is* another; **personification** gives human qualities to something non-human. But comparisons must be *fresh*.\n\nA **cliché** is a phrase used so often it has lost its power: *as cold as ice, a heart of gold, tears streamed down like rain, home is where the heart is, a rich tapestry of cultures*. The reader's eye slides straight over clichés because their brain has seen them a thousand times. To fix one, ask: **what exactly?** Cold like *what, exactly, in my life?* — *cold as the tiled floor at 5 a.m.*, *cold as a coin left out in the rain*.\n\nThree tests for every image:\n- **Can I see/hear/smell it?** If not, it is probably abstract.\n- **Is it mine?** Could only you have written it, or could anyone?\n- **Is it precise?** *Frangipani* beats *flower*; *Hokkien* beats *a language*; *slammed* beats *closed loudly*.",
      diagram: `<svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ladder of abstraction from culture at the top to a specific concrete image at the bottom"><rect x="0" y="0" width="340" height="210" fill="#f0fdf4"/><line x1="40" y1="20" x2="40" y2="190" stroke="#166534" stroke-width="3"/><line x1="300" y1="20" x2="300" y2="190" stroke="#166534" stroke-width="3"/><rect x="50" y="22" width="240" height="30" rx="6" fill="#fee2e2" stroke="#b91c1c"/><text x="170" y="42" font-size="12" text-anchor="middle" fill="#7f1d1d">CULTURE (abstract)</text><rect x="50" y="62" width="240" height="30" rx="6" fill="#fef3c7" stroke="#b45309"/><text x="170" y="82" font-size="12" text-anchor="middle" fill="#78350f">food and family</text><rect x="50" y="102" width="240" height="30" rx="6" fill="#ecfccb" stroke="#4d7c0f"/><text x="170" y="122" font-size="12" text-anchor="middle" fill="#365314">my grandmother's dumplings</text><rect x="50" y="142" width="240" height="44" rx="6" fill="#dcfce7" stroke="#15803d"/><text x="170" y="160" font-size="11" text-anchor="middle" fill="#14532d">her floury thumb pinching each fold,</text><text x="170" y="176" font-size="11" text-anchor="middle" fill="#14532d">steam fogging her glasses (concrete)</text><text x="18" y="110" font-size="11" fill="#166534" transform="rotate(-90 18 110)" text-anchor="middle">climb DOWN</text><text x="325" y="110" font-size="11" fill="#166534" transform="rotate(90 325 110)" text-anchor="middle">more powerful</text></svg>`,
      diagramCaption:
        "The ladder of abstraction: climb down from the big idea until you reach a detail you could photograph.",
      keyPoints: [
        "Abstract nouns name ideas; concrete nouns name things you can sense. Build poems from concrete nouns.",
        "Show, don't tell: give the reader the thing that causes the feeling.",
        "Figurative language must be fresh — a cliché is a comparison worn out by overuse.",
        "Precise words (frangipani, Hokkien, slammed) beat general ones (flower, language, closed).",
      ],
      thinkDeeper:
        "Dickinson's 'Hope is the thing with feathers' uses a metaphor to make an abstract idea concrete. Is there ever a place for an abstract noun in a strong poem? Think about where it could appear (the title? the very last line?) and what would have to come before it to earn it.",
    },
    {
      id: "choosing-form",
      heading: "Choosing a form: free verse, list poems and dramatic monologues",
      discovery: {
        problem:
          "Imagine you are writing about the thirty things you would grab if your home were flooding. Would you write it as (a) one tight 14-line rhyming poem, or (b) a long, breathless list of items, each on its own line? Say why before reading on.",
        idea:
          "Most people pick (b), because a frantic list FEELS like grabbing things in a panic. That is the key insight: form is not decoration. The shape of a poem should do some of the work of its meaning. A poet chooses a form the way a director chooses a camera angle.",
      },
      body:
        "**Form** is the overall shape and pattern of a poem: its length, its stanzas, whether it rhymes, whether it has a regular rhythm, whether it follows a traditional rule-set. **Structure** is how the ideas are organised and develop inside that shape — where the turn comes, how it opens and closes. In your commentary you will be expected to explain *why* you chose your form, so choose on purpose.\n\n**Free verse** has no regular **metre** (beat pattern) and no fixed rhyme scheme. It is the most common form in modern poetry, and most of the Term 2 anthology is written in it. But 'free' does not mean 'anything goes': in free verse, the *line break* becomes your main tool, because nothing else is holding the shape. Choose free verse when you want the rhythms of natural speech, or when a regular pattern would feel false to your subject.\n\nA **list poem** (or **catalogue poem**) builds meaning by piling up items, often with a repeated opening phrase. Repeating words at the start of successive lines is called **anaphora** ('I am from… / I am from…'). The repetition creates a chant-like rhythm, and the *order* of the items matters: save the most surprising or painful item for last. List poems suit identity because a self is made of many small things.\n\nA **dramatic monologue** is a poem spoken by a single character — not necessarily the poet — to a silent listener, revealing more about the speaker than they mean to. Robert Browning's *My Last Duchess* (1842) is the classic example; Carol Ann Duffy has written many modern ones. You can even give the voice to an object: a suitcase, a passport, a school uniform. A dramatic monologue lets you explore an identity from the *inside* and from an unexpected angle.\n\nWhen choosing a form, ask:\n- Is my subject **calm or restless**, **ordered or chaotic**? Should the form match it — or deliberately clash with it?\n- Do I want the reader to feel **repetition** (memory, routine, obsession)? Try a list poem or a pantoum.\n- Is there a **turn** — a before and after, a problem and answer? A sonnet's volta might fit.\n- Is it one **frozen moment**? A haiku might fit.\n- Is there a **voice** other than mine that could tell it better? Try a dramatic monologue.",
      passage: {
        id: "suitcase-speaks",
        title: "The Suitcase Speaks",
        source: "Original dramatic monologue written for this app",
        text:
          "You think I'm empty now. Look closer.\nI still hold the shape of everything\nyou packed the night you left Manila:\nthe rice in its taped-up bag, the photo\nyou hid in the lining, face down,\nas if your grandmother might see you go.\nEvery move, you ask me to forget.\nI don't. I keep the creases. I keep the sand\nfrom a beach you've stopped describing.\nUnzip me in the dark sometimes. Listen.",
        note:
          "The speaker is the suitcase; the silent listener ('you') is its owner. Notice how the object reveals the owner's story — and the owner's guilt — without the owner ever speaking.",
      },
      keyPoints: [
        "Form = the poem's overall shape and rules; structure = how ideas are ordered and develop inside it.",
        "Free verse has no regular metre or rhyme, so line breaks carry the shape.",
        "List poems use accumulation and often anaphora; dramatic monologues use a character's voice and a silent listener.",
        "Choose a form whose shape mirrors (or deliberately clashes with) your subject — and be ready to explain why.",
      ],
      thinkDeeper:
        "In 'The Suitcase Speaks', the person who actually left home never speaks. What can a poet reveal about someone by letting an object talk about them that would be harder to reveal if that person told their own story?",
    },
    {
      id: "traditional-forms",
      heading: "Traditional forms: sonnet, haiku, ghazal and pantoum",
      discovery: {
        problem:
          "Here are four lines of a stanza: A, B, C, D. In the next stanza, the poet must reuse two of them. Which two would you reuse to make the poem feel like it is looping back on itself, moving forward but never quite escaping?",
        idea:
          "That is the puzzle of the PANTOUM, a form that came from the Malay pantun. Lines 2 and 4 of each stanza become lines 1 and 3 of the next, so every idea returns in a new context. The form literally enacts memory: you move forward, but the past keeps coming back.",
      },
      body:
        "Traditional forms come with rules. The rules are not a cage: they are a **pressure** that forces surprising word choices, and each form carries centuries of associations you can borrow.\n\n**The sonnet** ('little song', from Italian *sonetto*) has **14 lines**, usually in **iambic pentameter** (ten syllables, five da-DUM beats). Two main types:\n- **Petrarchan (Italian)**: an **octave** (8 lines) that sets up a problem, then a **sestet** (6 lines) that answers or shifts it. The shift is called the **volta** ('turn') and comes at line 9.\n- **Shakespearean (English)**: three **quatrains** (4-line stanzas) and a final rhyming **couplet**, rhyming ABAB CDCD EFEF GG. The volta often arrives in the couplet.\nSonnets are associated with love and argument, so a sonnet about, say, loving two countries at once borrows that tradition.\n\n**The haiku** is a Japanese form, perfected by poets such as Matsuo Bashō in the 17th century. In English it is usually written as three lines of **5, 7 and 5 syllables** (Japanese actually counts sound units called *on*, so this is an approximation). A traditional haiku contains a **kigo** (season word) and a **kireji** ('cutting word') — in English often shown by a dash — that sets two images side by side. Haiku capture one *present-tense moment* of noticing. No explaining, no abstract nouns.\n\n**The ghazal** (say 'guzzle') began in Arabic poetry, flourished in Persian (Rumi, Hafez) and Urdu (Ghalib), and is now written worldwide. It is made of self-contained **couplets** (*sher*). Every couplet ends with the same repeated word or phrase, the **radif**, just after a rhyming word, the **qafia**. In the last couplet the poet traditionally includes their own name or pen-name (the **takhallus**). Ghazals are poems of longing and loss — perfect for missing a place or a language. The poet Agha Shahid Ali championed 'real ghazals in English'.\n\n**The pantoum** comes from the Malay **pantun**; French poets adapted it in the 1800s. It is written in **quatrains**, and **lines 2 and 4 of each stanza become lines 1 and 3 of the next**. In the final stanza, the unused lines 1 and 3 of the very first stanza return, so the poem often ends with its own first line. The effect is hypnotic and circular: ideal for memory, routine, obsession, or a culture passed down by repetition. Poets may vary the repeated lines slightly for effect — a deliberate change stands out precisely because the reader expects an exact echo.",
      diagram: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pantoum repetition pattern: lines 2 and 4 of each stanza become lines 1 and 3 of the next"><rect x="0" y="0" width="340" height="200" fill="#eff6ff"/><text x="170" y="16" font-size="12" text-anchor="middle" fill="#1e3a8a" font-weight="bold">How a pantoum weaves</text><g font-size="13" font-family="monospace" text-anchor="middle"><rect x="10" y="26" width="70" height="120" rx="6" fill="#ffffff" stroke="#3b82f6"/><text x="45" y="48" fill="#1e3a8a">A</text><text x="45" y="76" fill="#dc2626" font-weight="bold">B</text><text x="45" y="104" fill="#1e3a8a">C</text><text x="45" y="132" fill="#16a34a" font-weight="bold">D</text><rect x="92" y="26" width="70" height="120" rx="6" fill="#ffffff" stroke="#3b82f6"/><text x="127" y="48" fill="#dc2626" font-weight="bold">B</text><text x="127" y="76" fill="#9333ea" font-weight="bold">E</text><text x="127" y="104" fill="#16a34a" font-weight="bold">D</text><text x="127" y="132" fill="#ea580c" font-weight="bold">F</text><rect x="174" y="26" width="70" height="120" rx="6" fill="#ffffff" stroke="#3b82f6"/><text x="209" y="48" fill="#9333ea" font-weight="bold">E</text><text x="209" y="76" fill="#0891b2" font-weight="bold">G</text><text x="209" y="104" fill="#ea580c" font-weight="bold">F</text><text x="209" y="132" fill="#be185d" font-weight="bold">H</text><rect x="256" y="26" width="74" height="120" rx="6" fill="#ffffff" stroke="#3b82f6"/><text x="293" y="48" fill="#0891b2" font-weight="bold">G</text><text x="293" y="76" fill="#1e3a8a">C</text><text x="293" y="104" fill="#be185d" font-weight="bold">H</text><text x="293" y="132" fill="#1e3a8a">A</text></g><text x="170" y="168" font-size="11" text-anchor="middle" fill="#1e3a8a">Lines 2 and 4 move forward to become lines 1 and 3.</text><text x="170" y="186" font-size="11" text-anchor="middle" fill="#1e3a8a">The last stanza brings back C and A: the poem ends where it began.</text></svg>`,
      diagramCaption:
        "The pantoum pattern for a four-stanza poem. Colour shows each repeated line travelling forward.",
      passage: {
        id: "sonnet-18",
        title: "Sonnet 18",
        source: "William Shakespeare, Sonnets (1609)",
        text:
          "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate:\nRough winds do shake the darling buds of May,\nAnd summer's lease hath all too short a date;\nSometime too hot the eye of heaven shines,\nAnd often is his gold complexion dimm'd;\nAnd every fair from fair sometime declines,\nBy chance or nature's changing course untrimm'd;\nBut thy eternal summer shall not fade,\nNor lose possession of that fair thou ow'st;\nNor shall Death brag thou wander'st in his shade,\nWhen in eternal lines to time thou grow'st:\n   So long as men can breathe or eyes can see,\n   So long lives this, and this gives life to thee.",
        note:
          "A Shakespearean sonnet: three quatrains and a couplet, ABAB CDCD EFEF GG. Notice the volta at line 9 ('But thy eternal summer…') and the couplet's final twist: the poem itself is what keeps the beloved alive. temperate = mild, calm; lease = rental period; ow'st = own; untrimm'd = stripped of beauty.",
      },
      keyPoints: [
        "Sonnet: 14 lines, usually iambic pentameter; Petrarchan = octave + sestet (volta at line 9); Shakespearean = ABAB CDCD EFEF GG.",
        "Haiku: 5-7-5 syllables in English, a season word (kigo) and a cut (kireji) between two images.",
        "Ghazal: independent couplets, each ending in the same radif after a rhyming qafia; poet's name (takhallus) in the last couplet.",
        "Pantoum (from the Malay pantun): lines 2 and 4 of each quatrain become lines 1 and 3 of the next.",
      ],
      thinkDeeper:
        "Many poets writing about identity choose a form from their own heritage (a Malaysian-Singaporean poet choosing the pantoum, a Pakistani-British poet choosing the ghazal). Others deliberately use an English form like the sonnet to write about a non-English experience. What different messages might each choice send?",
    },
    {
      id: "line-breaks",
      heading: "Line breaks and enjambment: the poet's secret punctuation",
      discovery: {
        problem:
          "Here is one sentence: 'I am from a suitcase that is never quite unpacked.' Write it out as two lines, breaking it in two different places. Read each version aloud. Which version makes you stop and think hardest about one word?",
        idea:
          "Breaking after 'never' ('…a suitcase that is never / quite unpacked') leaves 'never' hanging at the edge of the white space, so for a split second it sounds absolute — never unpacked, never settled — before the next line softens it to 'quite'. The last word of a line is the loudest seat in the house. Where you break changes what the reader hears.",
      },
      body:
        "A **line break** is where a line of poetry ends. It is the one tool prose writers do not have, and it is your most powerful one, especially in free verse. Every line break creates a tiny pause and puts a spotlight on the **last word of the line** and the **first word of the next**.\n\nKey terms:\n- **End-stopped line**: the sentence or clause finishes at the end of the line, usually with punctuation. It feels firm, complete, controlled.\n- **Enjambment**: the sentence runs on over the line break without punctuation. It creates momentum, surprise or suspense, and can make a word mean two things at once.\n- **Caesura**: a pause *in the middle* of a line, usually marked by punctuation (a full stop, comma or dash). It breaks the rhythm and can create hesitation or emphasis.\n- **Stanza**: a group of lines (Italian for 'room'). A **stanza break** is a bigger pause: a change of time, place, mood or idea.\n\nFour jobs a line break can do:\n- **Emphasise** a word by placing it at the end (or start) of a line.\n- **Create a double meaning**: 'I have forgotten / nothing' first reads as loss, then reverses.\n- **Control pace**: short lines and many breaks slow the reader; long enjambed lines speed them up.\n- **Enact the meaning**: a line that breaks at the edge of a cliff, or a sentence that 'falls' to the next line.\n\nLook at Edward Thomas's 'Adlestrop' (below). The train 'drew up there / Unwontedly' — the line break makes us stop, just as the train does, before the unexpected adverb. 'Unwontedly. It was late June.' then uses a **caesura** to halt the rhythm, creating the stillness of an empty station. Most daring of all, the second stanza ends 'only the name' and runs straight over the **stanza break** into 'And willows, willow-herb, and grass' — the blank space is like a held breath, and then the 'name' on the sign opens out into a living landscape.\n\nA warning: do not break lines randomly or just to look 'poetic'. Every break should be a decision you could defend in your commentary. Avoid ending lines on weak words like 'the', 'a', 'and' or 'of' unless you want a deliberate stumble.",
      diagram: `<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The same sentence set as one line and as two lines with the break after the word never"><rect x="0" y="0" width="340" height="190" fill="#fff7ed"/><text x="12" y="22" font-size="12" fill="#9a3412" font-weight="bold">As prose (one line):</text><text x="12" y="44" font-size="11" fill="#431407">I am from a suitcase that is never quite unpacked.</text><line x1="12" y1="62" x2="328" y2="62" stroke="#fdba74"/><text x="12" y="84" font-size="12" fill="#9a3412" font-weight="bold">As poetry (enjambed):</text><text x="12" y="108" font-size="12" fill="#431407">I am from a suitcase that is</text><rect x="176" y="94" width="48" height="20" rx="4" fill="#fed7aa" stroke="#ea580c"/><text x="200" y="108" font-size="12" text-anchor="middle" fill="#7c2d12" font-weight="bold">never</text><text x="12" y="132" font-size="12" fill="#431407">quite unpacked.</text><line x1="232" y1="104" x2="262" y2="104" stroke="#ea580c" stroke-width="2" stroke-dasharray="4 3"/><text x="268" y="100" font-size="11" fill="#9a3412">white space</text><text x="268" y="114" font-size="11" fill="#9a3412">= a pause</text><text x="12" y="160" font-size="11" fill="#7c2d12">The word before the break is in the spotlight:</text><text x="12" y="176" font-size="11" fill="#7c2d12">'never' rings out before 'quite' softens it.</text></svg>`,
      diagramCaption:
        "A line break turns the last word of a line into a spotlight and the white space after it into a pause.",
      passage: {
        id: "adlestrop",
        title: "Adlestrop",
        source: "Edward Thomas (written 1915, published 1917)",
        text:
          "Yes. I remember Adlestrop—\nThe name, because one afternoon\nOf heat the express-train drew up there\nUnwontedly. It was late June.\n\nThe steam hissed. Someone cleared his throat.\nNo one left and no one came\nOn the bare platform. What I saw\nWas Adlestrop—only the name\n\nAnd willows, willow-herb, and grass,\nAnd meadowsweet, and haycocks dry,\nNo whit less still and lonely fair\nThan the high cloudlets in the sky.\n\nAnd for that minute a blackbird sang\nClose by, and round him, mistier,\nFarther and farther, all the birds\nOf Oxfordshire and Gloucestershire.",
        note:
          "Adlestrop is a tiny village in Gloucestershire, England. unwontedly = unusually, not as normal; haycocks = small heaps of hay; no whit less = not one bit less.",
      },
      keyPoints: [
        "End-stopped lines feel firm and complete; enjambment runs on and creates momentum, surprise or double meaning.",
        "A caesura is a pause in the middle of a line, usually marked by punctuation.",
        "The last word of a line gets the most emphasis — do not waste it on 'the' or 'and'.",
        "Every line break should be a choice you can justify in your commentary.",
      ],
      thinkDeeper:
        "Thomas could have written 'Adlestrop' as one paragraph of prose with the same words. List three things the reader would lose. Which loss matters most to the poem's feeling of a single, still moment?",
    },
    {
      id: "sound-and-rhyme",
      heading: "Sound, rhythm and rhyme (without forcing it)",
      discovery: {
        problem:
          "Read this couplet aloud, then say what feels wrong:\n\n'To the market we did go,\nWhere the mangoes sat in a row.'\n\nNow read: 'We went to the market. / Mangoes, stacked like small suns.' Which sounds like a real person — and why?",
        idea:
          "The first version twists normal English ('we did go') and grabs a dull image ('in a row') purely to make a rhyme. That is FORCED RHYME: the rhyme is driving the poem instead of the meaning. The second version has no rhyme at all, yet it is more musical, because the sounds (stacked / small / suns) are chosen and the image is fresh.",
      },
      body:
        "Poems are written for the ear as much as the eye. Always **read your draft aloud** — you will hear clumsy bits you cannot see.\n\n**Sound devices** (name them in your commentary, then explain the effect):\n- **Alliteration**: repeated consonant sounds at the start of nearby words. Tennyson's eagle 'clasps the crag with crooked hands' — the hard 'c' sounds are as gripping as the claws.\n- **Assonance**: repeated vowel sounds inside nearby words: 'the low moan of the old road' (long 'o' = slow, mournful).\n- **Consonance**: repeated consonant sounds inside or at the end of words: 'the clock's thick tick'.\n- **Sibilance**: repeated 's', 'sh' or soft 'c' sounds — soothing, secretive or sinister depending on context. Keats's 'Season of mists and mellow fruitfulness' combines sibilance with soft 'm' alliteration to create a drowsy, ripe warmth.\n- **Plosives**: hard 'b', 'p', 't', 'd', 'k', 'g' sounds that burst out of the mouth — useful for anger, violence or sudden action.\n- **Onomatopoeia**: words that imitate sounds: *hiss, click, clatter, drum*.\n\n**Rhythm** is the pattern of beats in a line. **Metre** is a *regular* rhythm. An **iamb** is one unstressed syllable followed by a stressed one (da-DUM). **Iambic pentameter** has five iambs per line — ten syllables, like a heartbeat: 'so LONG as MEN can BREATHE or EYES can SEE'. You do not need strict metre in free verse, but you should *notice* rhythm: short, stressed words slow a line down; many light syllables speed it up.\n\n**Rhyme**: a **full rhyme** matches the final vowel and consonant sounds exactly (*night / light*). A **half-rhyme** (or **slant rhyme**) nearly matches (*kept / slipped*, *home / come*). **Internal rhyme** occurs within a line. A **rhyme scheme** is labelled with letters (ABAB).\n\n**Forced rhyme** is the most common reason student poems sound childish. Warning signs:\n- **Twisted word order** (inversion) to put the rhyme word last: *'Home I did come'*.\n- **Filler words** to make the beat fit: *'I do love my mother's food'*.\n- **The wrong word** chosen only because it rhymes: *'My grandmother is very wise / She always eats her apple pies'*.\n- **Predictable pairs**: heart/apart, love/above, fire/desire, day/away.\n\nFixes: use **half-rhyme**; move rhymes **inside** lines; let some lines **not rhyme**; or keep the meaning and find a new final word by rearranging the sentence. Rhyme should feel inevitable, never convenient.",
      diagram: `<svg viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Iambic pentameter shown as five da-DUM beats under a line from Sonnet 18"><rect x="0" y="0" width="340" height="150" fill="#fdf2f8"/><text x="170" y="20" font-size="12" text-anchor="middle" fill="#831843" font-weight="bold">Iambic pentameter: five da-DUM heartbeats</text><g font-size="12" text-anchor="middle"><text x="22" y="56" fill="#9d174d">so</text><text x="52" y="56" fill="#831843" font-weight="bold">LONG</text><text x="84" y="56" fill="#9d174d">as</text><text x="114" y="56" fill="#831843" font-weight="bold">MEN</text><text x="146" y="56" fill="#9d174d">can</text><text x="182" y="56" fill="#831843" font-weight="bold">BREATHE</text><text x="216" y="56" fill="#9d174d">or</text><text x="246" y="56" fill="#831843" font-weight="bold">EYES</text><text x="278" y="56" fill="#9d174d">can</text><text x="310" y="56" fill="#831843" font-weight="bold">SEE</text></g><g fill="#f9a8d4"><circle cx="22" cy="80" r="5"/><circle cx="84" cy="80" r="5"/><circle cx="146" cy="80" r="5"/><circle cx="216" cy="80" r="5"/><circle cx="278" cy="80" r="5"/></g><g fill="#be185d"><circle cx="52" cy="80" r="10"/><circle cx="114" cy="80" r="10"/><circle cx="182" cy="80" r="10"/><circle cx="246" cy="80" r="10"/><circle cx="310" cy="80" r="10"/></g><g stroke="#be185d" stroke-width="1.5"><line x1="10" y1="100" x2="66" y2="100"/><line x1="72" y1="100" x2="128" y2="100"/><line x1="134" y1="100" x2="198" y2="100"/><line x1="204" y1="100" x2="262" y2="100"/><line x1="268" y1="100" x2="328" y2="100"/></g><g font-size="11" text-anchor="middle" fill="#831843"><text x="38" y="116">iamb 1</text><text x="100" y="116">iamb 2</text><text x="166" y="116">iamb 3</text><text x="233" y="116">iamb 4</text><text x="298" y="116">iamb 5</text></g><text x="170" y="140" font-size="11" text-anchor="middle" fill="#831843">small dot = unstressed (da); big dot = stressed (DUM)</text></svg>`,
      diagramCaption:
        "Line 13 of Sonnet 18 tapped out as five iambs: ten syllables, five stresses.",
      keyPoints: [
        "Read every draft aloud: your ear catches what your eye misses.",
        "Name the sound device AND its effect: alliteration, assonance, consonance, sibilance, plosives, onomatopoeia.",
        "Iambic pentameter = five da-DUM beats, ten syllables.",
        "Forced rhyme shows itself through twisted word order, filler words and words chosen only for their sound — use half-rhyme or no rhyme instead.",
      ],
      thinkDeeper:
        "Many modern poets avoid full rhyme, yet rap and song lyrics are packed with it and rarely sound forced. What do skilled rappers do with rhyme (placement, half-rhyme, internal rhyme) that a forced-rhyme poem does not?",
    },
    {
      id: "titles-endings",
      heading: "Titles and endings: the first and last thing they read",
      discovery: {
        problem:
          "A poem about a grandmother's kitchen could end in one of these ways. Which ending will a reader remember tomorrow?\n\nA: 'And that is why my culture means so much to me.'\nB: 'I try again. It holds this time.'",
        idea:
          "Ending B. Ending A explains the poem's message in abstract words, which closes the poem down and tells the reader what to think. Ending B gives a small, concrete action — a dumpling that finally holds its shape — and lets the reader realise for themselves that a tradition has been passed on. Great endings resonate; weak endings summarise.",
      },
      body:
        "The **title** is the first line the reader meets and the last thing they look back at. Do not waste it.\n\nTypes of title:\n- **Label**: names the subject ('Adlestrop'). Simple and confident — works when the poem itself is surprising.\n- **Extra line**: adds information the poem does not say, such as a place, date or person ('Pantoum for My Grandmother's Kitchen').\n- **Phrase from the poem**: lifts a key line so the reader hears it twice.\n- **Question or twist**: creates tension or irony ('Which One to Show First').\n- **Form-naming**: tells the reader to watch the form ('Sonnet for Two Countries').\nAvoid 'Untitled', 'My Poem' or titles that give away the ending.\n\nThe **ending** is where the reader decides how they feel about the whole poem. Strong ending strategies:\n- **End on an image**: a concrete picture that holds the feeling ('show you both').\n- **The turn (volta)**: a final shift in perspective, like the couplet of Sonnet 18, where the poem itself becomes the thing that defeats time.\n- **Circular ending**: return to the opening line or image, changed by everything in between (the pantoum does this naturally).\n- **Widening out**: zoom from one thing to everything — 'Adlestrop' moves from one blackbird to 'all the birds / Of Oxfordshire and Gloucestershire'.\n- **Enacting**: let the form perform the meaning. Tennyson's 'The Eagle' ends 'And like a thunderbolt he falls' — the poem stops as the bird drops.\n- **A short final line**: after long lines, a short one lands like a door closing.\n\nEndings to avoid: the **moral summary** ('And that is why we should all respect each other'), the **sudden abstract noun** ('…and I felt true belonging'), the **'it was all a dream'** twist, and the ending that simply **stops** because you ran out of ideas.",
      keyPoints: [
        "A title can label, add information, echo a key phrase, ask a question or name the form.",
        "Strong endings use an image, a turn, a circular return, a widening out or a form that enacts the meaning.",
        "Avoid moral summaries and abstract nouns in the last line: trust the reader.",
      ],
      thinkDeeper:
        "Some poets write the title last, once they know what the poem is really about. Others write it first as a 'compass'. Which approach would work better for an identity poem — and why might the title you start with be the wrong title to finish with?",
    },
    {
      id: "drafting-redrafting",
      heading: "Drafting and redrafting: where poems are really made",
      discovery: {
        problem:
          "Compare these two versions of the same stanza. List every change you can spot, then decide which change made the biggest difference.\n\nDRAFT 1:\n'I have two passports, I feel confused,\nTwo different countries, I am bemused.'\n\nDRAFT 3:\n'I am from two passports in a drawer,\none blue, one red,\nthe same boy in both\ntrying hard not to blink.'",
        idea:
          "Draft 1 TELLS the feeling (confused, bemused), uses forced rhyme ('bemused' is chosen for the rhyme, not the meaning) and has no picture. Draft 3 drops the rhyme, swaps the abstract feelings for concrete objects (a drawer, two colours, a passport photo) and lets the image of a boy 'trying hard not to blink' suggest the pressure of being two people at once. The biggest change: from telling a feeling to showing a moment.",
      },
      body:
        "No poet gets it right first time. **Drafting** is the process of getting raw material onto the page; **redrafting** (or **revising**) is the process of re-seeing it and making deliberate improvements. Your commentary will ask you to explain your redrafting decisions, so **keep every draft** and jot down *why* you made each change.\n\nA reliable redrafting process:\n- **1. Generate** — write fast and messily. Do not edit while you create.\n- **2. Shape** — choose the strongest material and a form; decide where the poem starts and ends.\n- **3. Cut** — remove anything that repeats, explains, or exists only to rhyme. Most first drafts are improved by cutting the first and last lines.\n- **4. Sharpen** — replace general words with precise ones; replace abstract nouns with concrete images; replace clichés with fresh comparisons; check every verb (*walked* → *shuffled*; *said* → *muttered*).\n- **5. Listen** — read aloud; mark stumbles, accidental rhymes and flat rhythms; test line breaks.\n- **6. Rest and re-read** — leave it for a day, then read it as a stranger would.\n\nA second **before and after** example:\n\nBEFORE: *The hawker centre is very busy and loud. / There is lots of food and a big crowd. / It makes me feel happy and proud.*\n\nAFTER: *Uncle Lim's wok roars like a small jet. / A tray of satay sticks fans out like a hand of cards. / My mother orders in three languages / and gets her change in a fourth.*\n\nThe redraft cuts the forced rhyme (loud / crowd / proud), removes the empty adjectives (*very busy*, *lots of*, *big*), names a real person and real food, adds sound (*roars*) and saves the identity point for the final, slightly funny image of a mother moving easily between languages. 'Proud' is never said, but it is felt.\n\nUseful redrafting questions:\n- Where am I **telling** instead of **showing**?\n- Which word is the **weakest** in each line?\n- Is every **line break** doing a job?\n- Is my **ending** an image or a summary?\n- What could I **cut** without losing anything?",
      keyPoints: [
        "Drafting gets material down; redrafting re-sees it and makes deliberate improvements.",
        "Cut, sharpen, listen: remove explanations and filler, choose precise words, read aloud.",
        "Keep every draft and note why you changed things — that is the evidence your commentary needs.",
      ],
      thinkDeeper:
        "The poet Elizabeth Bishop is known to have worked through around seventeen drafts of her short poem 'One Art'. If good poems need that much revision, what does it suggest about the idea that poetry should come from 'pure inspiration'? Is anything lost when a poem is heavily revised?",
    },
    {
      id: "writing-commentary",
      heading: "Writing the commentary: explain your craft like a critic",
      discovery: {
        problem:
          "Which of these commentary sentences would earn more marks — and what exactly does the better one do that the weaker one does not?\n\nA: 'I used a simile in my poem because it makes it more interesting.'\nB: 'In stanza one, the simile 'tapping the table like a question / she never quite asks' turns a small sound into an unspoken worry; I wanted the reader to sense my grandmother's fear that I am drifting from her culture without her ever saying it.'",
        idea:
          "Sentence B does four things A does not: it says WHERE (stanza one), QUOTES the exact words with a slash for the line break, explains the EFFECT (a sound becomes a worry), and links to the poem's PURPOSE (a fear of losing culture). A commentary is analysis of your own writing — the same PEEL skills you use on the anthology, turned on yourself.",
      },
      body:
        "A **poetry commentary** (sometimes called a **reflective commentary** or **writer's statement**) is a piece of analytical prose — usually 300 to 600 words — in which you explain the choices you made in your own poem and evaluate how well they worked. It is assessed on your **understanding of poetic craft**, not just on the poem.\n\nA strong commentary covers six things. Remember them with **I Invent Fresh Tunes, Rewrite, Evaluate**:\n- **Intentions**: what is the poem about, and what did you want the reader to think or feel? ('I wanted to capture the feeling of belonging to two places and fully to neither.')\n- **Influences**: which anthology poems or poets shaped your choices — and *exactly how*? ('Like Sujata Bhatt in *Search for My Tongue*, I placed words from another language in the poem without translating them, so the reader experiences being an outsider.')\n- **Form and structure**: why this form, stanza pattern, line length, opening and ending?\n- **Techniques**: the key language and sound choices, each with a **quotation from your own poem** and an explanation of the intended **effect**.\n- **Redrafting**: one or two specific changes between drafts, quoting before and after, and why the change is an improvement.\n- **Evaluation**: what worked well, what is less successful, and what you would do next.\n\nStyle rules:\n- Write in the **first person** ('I chose…', 'I intended…') — this is your writing.\n- **Quote your own lines** in quotation marks and use a **slash** ( / ) to show a line break: 'a suitcase that is never / quite unpacked'.\n- Use **precise terminology** (enjambment, anaphora, caesura, half-rhyme, volta) — but every term must be followed by its **effect**.\n- Use **tentative language** about readers: 'I hoped the reader would…', 'this may suggest…', not 'the reader will definitely cry'.\n- **Depth beats breadth**: three techniques explored in detail beat ten techniques listed.\n- **Evaluate honestly**: an examiner trusts a writer who can say 'the second stanza is weaker because…' more than one who claims everything is perfect.",
      diagram: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Commentary staircase with six steps: intentions, influences, form, techniques, redrafting, evaluation"><rect x="0" y="0" width="340" height="200" fill="#f8fafc"/><text x="170" y="18" font-size="12" text-anchor="middle" fill="#0f172a" font-weight="bold">I Invent Fresh Tunes, Rewrite, Evaluate</text><g font-size="11" fill="#ffffff" font-weight="bold"><rect x="10" y="160" width="100" height="28" fill="#7c3aed"/><text x="60" y="178" text-anchor="middle">Intentions</text><rect x="62" y="130" width="100" height="28" fill="#6d28d9"/><text x="112" y="148" text-anchor="middle">Influences</text><rect x="114" y="100" width="100" height="28" fill="#2563eb"/><text x="164" y="118" text-anchor="middle">Form</text><rect x="166" y="70" width="100" height="28" fill="#0891b2"/><text x="216" y="88" text-anchor="middle">Techniques</text><rect x="196" y="40" width="70" height="28" fill="#059669"/><text x="231" y="58" text-anchor="middle">Rewrite</text><rect x="268" y="40" width="64" height="148" fill="#ca8a04"/><text x="300" y="118" text-anchor="middle" transform="rotate(-90 300 114)">Evaluate</text></g><text x="20" y="60" font-size="11" fill="#334155">Each step: claim +</text><text x="20" y="76" font-size="11" fill="#334155">own quotation +</text><text x="20" y="92" font-size="11" fill="#334155">effect + purpose</text></svg>`,
      diagramCaption:
        "Climb the commentary staircase: each step needs a claim, a quotation from your poem, its effect and its link to your purpose.",
      passage: {
        id: "inventory-in-commentary",
        title: "Inventory",
        source: "Original poem written for this app",
        text:
          "I am from the click of the rice cooker\nswitching itself to warm at six,\nfrom my grandmother's jade bangle\ntapping the table like a question\nshe never quite asks.\n\nI am from two passports in a drawer,\none blue, one red,\nthe same boy in both\ntrying hard not to blink.\n\nI am from thunder that comes every afternoon\non time, like a strict teacher,\nfrom flip-flops lined up at the door,\nfrom lah on the end of my sentences\nand cheers on the end of my emails.\n\nI am from a suitcase that is never\nquite unpacked,\nfrom airport carpets I could draw from memory,\nfrom Where are you really from?\nasked so often\nI have started to ask it too.\n\nI am from all of it.\nAsk me again\nand I will open the drawer\nand show you both.",
        note:
          "A free-verse list poem using an 'I am from' frame. The words 'lah' (Singlish) and 'cheers' (British English) show the speaker code-switching between cultures.",
      },
      keyPoints: [
        "Cover: Intentions, Influences, Form, Techniques, Redrafting, Evaluation (I Invent Fresh Tunes, Rewrite, Evaluate).",
        "Quote your own lines with quotation marks and slashes for line breaks; always explain the effect.",
        "Name influences precisely: which poem, which technique, how you adapted it.",
        "Evaluate honestly, with a specific improvement you would make.",
      ],
      thinkDeeper:
        "A commentary explains what you INTENDED. But a reader may find meanings you never planned. If a classmate finds a meaning in your poem that you did not intend, is your commentary wrong, or their reading wrong — or can both be right? How would you mention this in your evaluation?",
    },
  ],

  passages: [
    {
      id: "inventory",
      title: "Inventory",
      source: "Original poem written for this app (free-verse list poem)",
      text:
        "I am from the click of the rice cooker\nswitching itself to warm at six,\nfrom my grandmother's jade bangle\ntapping the table like a question\nshe never quite asks.\n\nI am from two passports in a drawer,\none blue, one red,\nthe same boy in both\ntrying hard not to blink.\n\nI am from thunder that comes every afternoon\non time, like a strict teacher,\nfrom flip-flops lined up at the door,\nfrom lah on the end of my sentences\nand cheers on the end of my emails.\n\nI am from a suitcase that is never\nquite unpacked,\nfrom airport carpets I could draw from memory,\nfrom Where are you really from?\nasked so often\nI have started to ask it too.\n\nI am from all of it.\nAsk me again\nand I will open the drawer\nand show you both.",
      note:
        "Written in the 'I am from' tradition made famous by George Ella Lyon's 'Where I'm From'. The speaker is a 'third-culture kid' who has grown up between countries. See the matching commentary in Model Writing.",
    },
    {
      id: "pantoum-kitchen",
      title: "Pantoum for My Grandmother's Kitchen",
      source: "Original poem written for this app (pantoum)",
      text:
        "The kettle starts its thin, high song.\nShe folds the dumplings, pinch by pinch.\nHer radio hums in Hokkien.\nI only understand the tune.\n\nShe folds the dumplings, pinch by pinch.\nHer fingers move like they remember.\nI only understand the tune;\nthe words slide past me, warm as steam.\n\nHer fingers move like they remember\na village I have never seen.\nThe words slide past me, warm as steam.\nI try to fold one. It falls apart.\n\nA village I have never seen\nhums from her radio in Hokkien.\nI try again. It holds this time.\nThe kettle starts its thin, high song.",
      note:
        "Hokkien is a Chinese language spoken by many families in Singapore and Malaysia. The pantoum itself comes from the Malay pantun. Notice the deliberate change in the final stanza: 'It falls apart' becomes 'It holds this time'.",
    },
    {
      id: "haiku-sequence",
      title: "Three Haiku: Between",
      source: "Original haiku sequence written for this app",
      text:
        "rain on the zinc roof —\nmy father's language drumming\nwords I almost know\n\ndeparture lounge glow —\na boy with two passports learns\nwhich one to show first\n\nmonsoon afternoon —\nthe frangipani lets go\none more white flower",
      note:
        "Each haiku follows the English 5-7-5 syllable pattern and uses a dash as a 'cut' (kireji) between two images. 'Monsoon' works as a season word (kigo).",
    },
    {
      id: "adlestrop-passage",
      title: "Adlestrop",
      source: "Edward Thomas (written 1915, published 1917)",
      text:
        "Yes. I remember Adlestrop—\nThe name, because one afternoon\nOf heat the express-train drew up there\nUnwontedly. It was late June.\n\nThe steam hissed. Someone cleared his throat.\nNo one left and no one came\nOn the bare platform. What I saw\nWas Adlestrop—only the name\n\nAnd willows, willow-herb, and grass,\nAnd meadowsweet, and haycocks dry,\nNo whit less still and lonely fair\nThan the high cloudlets in the sky.\n\nAnd for that minute a blackbird sang\nClose by, and round him, mistier,\nFarther and farther, all the birds\nOf Oxfordshire and Gloucestershire.",
      note:
        "A masterclass in line breaks, caesura and endings: a poem about a place that is 'only the name', built entirely from concrete detail. unwontedly = unusually; haycocks = small heaps of hay.",
    },
    {
      id: "sonnet-18-passage",
      title: "Sonnet 18",
      source: "William Shakespeare, Sonnets (1609)",
      text:
        "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate:\nRough winds do shake the darling buds of May,\nAnd summer's lease hath all too short a date;\nSometime too hot the eye of heaven shines,\nAnd often is his gold complexion dimm'd;\nAnd every fair from fair sometime declines,\nBy chance or nature's changing course untrimm'd;\nBut thy eternal summer shall not fade,\nNor lose possession of that fair thou ow'st;\nNor shall Death brag thou wander'st in his shade,\nWhen in eternal lines to time thou grow'st:\n   So long as men can breathe or eyes can see,\n   So long lives this, and this gives life to thee.",
      note:
        "The model Shakespearean sonnet: ABAB CDCD EFEF GG in iambic pentameter, with a volta at line 9 and a clinching couplet.",
    },
  ],

  quoteBank: [
    {
      quote: "“Hope” is the thing with feathers",
      source: "Emily Dickinson, opening line (written c. 1861)",
      analysis:
        "A metaphor that turns an abstract noun into a small, fragile, living creature. It is the perfect model for making the abstract concrete: instead of describing hope, Dickinson gives it wings, so the reader feels its lightness and persistence.",
      themes: ["concrete imagery", "metaphor"],
    },
    {
      quote: "Season of mists and mellow fruitfulness",
      source: "John Keats, 'To Autumn' (1819), line 1",
      analysis:
        "Soft 'm' alliteration and sibilance ('Season… mists') slow the line into a drowsy, warm hum. It shows how sound alone can create mood before the reader has pictured anything.",
      themes: ["sound", "alliteration", "sibilance"],
    },
    {
      quote: "He clasps the crag with crooked hands;",
      source: "Alfred, Lord Tennyson, 'The Eagle' (1851), line 1",
      analysis:
        "Harsh 'c'/'cr' alliteration makes the line sound as hard and gripping as the eagle's claws and the rock. Calling talons 'hands' adds personification: the bird becomes a powerful, almost human ruler.",
      themes: ["sound", "alliteration", "personification"],
    },
    {
      quote: "And like a thunderbolt he falls.",
      source: "Alfred, Lord Tennyson, 'The Eagle' (1851), final line",
      analysis:
        "An ending that enacts its meaning: the poem stops at the exact moment the eagle drops. The simile adds speed and violence, and the crisp surrounding monosyllables ('And like a … he falls') make the line land like an impact.",
      themes: ["endings", "simile"],
    },
    {
      quote: "Yes. I remember Adlestrop—",
      source: "Edward Thomas, 'Adlestrop' (1917), line 1",
      analysis:
        "The conversational 'Yes.' plunges us into the middle of a conversation, as if answering a question. The caesura after it and the dash at the end create the hesitant rhythm of memory being recovered.",
      themes: ["openings", "caesura", "memory"],
    },
    {
      quote: "the express-train drew up there / Unwontedly.",
      source: "Edward Thomas, 'Adlestrop' (1917), lines 3–4",
      analysis:
        "Enjambment delays 'Unwontedly', so the reader halts at the line break just as the train halts unexpectedly. The full stop that follows adds a caesura, deepening the stillness.",
      themes: ["enjambment", "line breaks"],
    },
    {
      quote: "So long as men can breathe or eyes can see, / So long lives this, and this gives life to thee.",
      source: "William Shakespeare, Sonnet 18 (1609), lines 13–14",
      analysis:
        "The rhyming couplet delivers the sonnet's final twist: 'this' (the poem) will keep the beloved alive forever. Anaphora ('So long… / So long') and regular iambic pentameter make the ending sound certain and permanent.",
      themes: ["sonnet", "endings", "volta"],
    },
    {
      quote: "Bent double, like old beggars under sacks,",
      source: "Wilfred Owen, 'Dulce et Decorum Est' (written 1917), line 1",
      analysis:
        "A shocking, concrete simile: young soldiers are compared to old beggars. The opening shows rather than tells the cost of war, and the heavy stresses make the line itself sound exhausted.",
      themes: ["simile", "concrete imagery", "openings"],
    },
    {
      quote: "it blossoms out of my mouth",
      source: "Sujata Bhatt, 'Search for My Tongue', final line",
      analysis:
        "An extended plant metaphor reaches its climax: the mother tongue the speaker feared losing grows back and flowers. A strong model for identity poems — the abstract idea of language is made physical, and the ending is an image of renewal rather than a summary.",
      themes: ["identity", "language", "endings"],
    },
    {
      quote: "Talk to me Huracan",
      source: "Grace Nichols, 'Hurricane Hits England'",
      analysis:
        "Apostrophe: the speaker addresses the hurricane directly, naming it after the Caribbean storm god. A useful influence for identity poems — speaking to something from 'home' makes it a presence rather than a memory.",
      themes: ["identity", "apostrophe", "voice"],
    },
    {
      quote: "so much depends / upon",
      source: "William Carlos Williams, 'The Red Wheelbarrow' (1923), opening",
      analysis:
        "The enjambment leaves 'depends' hanging, so the reader waits to discover what matters so much — and it turns out to be a humble wheelbarrow. A reminder that ordinary objects can carry enormous weight in a poem.",
      themes: ["line breaks", "objects"],
    },
    {
      quote: "my grandmother's jade bangle / tapping the table like a question / she never quite asks",
      source: "'Inventory', original poem written for this app, stanza 1",
      analysis:
        "A sound image (tapping) becomes a simile for an unspoken worry. The object carries culture (jade), and the enjambment withholds what the 'question' is, so the reader senses tension between generations without it being stated.",
      themes: ["concrete imagery", "simile", "identity"],
    },
    {
      quote: "a suitcase that is never / quite unpacked",
      source: "'Inventory', original poem written for this app, stanza 4",
      analysis:
        "The line break isolates 'never', so it briefly sounds absolute before 'quite' softens it. The half-packed suitcase is a concrete symbol of a life always ready to move on.",
      themes: ["enjambment", "symbol", "identity"],
    },
    {
      quote: "I try again. It holds this time.",
      source: "'Pantoum for My Grandmother's Kitchen', original poem written for this app, final stanza",
      analysis:
        "A deliberate break in the pantoum's repetition: the earlier line 'It falls apart' changes. Because the reader expects an exact echo, the change stands out, quietly showing that a skill — and a piece of heritage — has been passed on.",
      themes: ["pantoum", "endings", "heritage"],
    },
  ],

  modelWriting: [
    {
      title: "Full commentary on 'Inventory'",
      task: "Write a commentary (around 450 words) explaining the intentions, influences, techniques and redrafting of your identity poem, and evaluate its success.",
      text:
        "In 'Inventory' I wanted to capture what it feels like to belong to several places at once and completely to none of them. Rather than explaining this feeling, I tried to build it out of objects, sounds and phrases, so that the reader assembles my identity the way a customs officer might go through a suitcase.\n\nMy biggest influence was the 'I am from' frame popularised by George Ella Lyon's 'Where I'm From'. The anaphora of 'I am from' gives the poem a chant-like rhythm, almost like a pledge, but I deliberately filled each line with contradictory details — 'lah on the end of my sentences / and cheers on the end of my emails' — so that the confident repetition is undercut by the confusion of what follows. I was also influenced by Sujata Bhatt's 'Search for My Tongue': like Bhatt, I placed words from different Englishes into the poem without translating them, hoping that readers who do not know 'lah' would briefly feel like outsiders, as I often do.\n\nI chose free verse because a regular rhyme scheme felt too neat for a life that keeps being packed up. Instead, I used line breaks to carry meaning. In 'a suitcase that is never / quite unpacked', the enjambment leaves 'never' hanging at the edge of the white space, so it sounds absolute for a moment before 'quite' softens it; that hesitation is the feeling of never fully settling. Sound matters too: the onomatopoeic 'click' of the rice cooker in the first line is meant to be the sound of home, small and ordinary, while the simile of the thunder arriving 'on time, like a strict teacher' adds a touch of humour to the Singapore weather.\n\nMy most important redraft was stanza two. My first draft read 'I have two passports, I feel confused, / Two different countries, I am bemused.' The rhyme was forced and the feelings were simply told. In the final version, 'two passports in a drawer, / one blue, one red, / the same boy in both / trying hard not to blink', I let the image of the passport photograph suggest the pressure of being one person with two official identities.\n\nOverall, I think the poem succeeds most in its ending, which returns to the drawer from stanza two and offers to 'show you both', turning the hostile question 'Where are you really from?' into an invitation. However, the third stanza is weaker: the list of flip-flops and thunder is vivid but slightly random, and in a further redraft I would choose details that link more clearly to belonging, perhaps cutting the flip-flops altogether.",
      annotations: [
        "Opens with a clear INTENTION and the effect the writer wanted, not a plot summary.",
        "Names INFLUENCES precisely (Lyon's frame, Bhatt's untranslated words) and explains how each was adapted, not just copied.",
        "Justifies the FORM (free verse) by linking it to the poem's meaning.",
        "Every TECHNIQUE is quoted with slashes for line breaks and followed by its effect (enjambment, onomatopoeia, simile).",
        "Shows a real REDRAFT with before and after quotations and explains why it is better.",
        "EVALUATES honestly: identifies a strength (the ending) AND a weakness (stanza three) with a specific fix.",
      ],
    },
    {
      title: "Commentary paragraph: form in 'Pantoum for My Grandmother's Kitchen'",
      task: "Write one commentary paragraph explaining why you chose your poem's form and how you used it.",
      text:
        "I chose the pantoum for this poem partly because it began as the Malay pantun, so its roots lie in the same part of the world as my grandmother's kitchen, and partly because its repetition mirrors the way traditions are passed on: not in one lesson, but through the same actions repeated until they stick. Lines such as 'She folds the dumplings, pinch by pinch' return in the following stanza, so the reader watches the folding again and again, as I did as a child. The repetition also suggests memory looping back, and the circular ending, which returns to 'The kettle starts its thin, high song', implies that this ritual will go on after the poem ends. However, I deliberately broke the pattern in the final stanza: the line 'I try to fold one. It falls apart.' returns as 'I try again. It holds this time.' Because the form trains the reader to expect an exact echo, this small change becomes the turning point of the poem, quietly showing that I have finally inherited something from my grandmother, even if I still 'only understand the tune' of her language.",
      annotations: [
        "Gives TWO reasons for the form: cultural roots and a link between repetition and inheritance.",
        "Quotes lines from the poem and explains how the repetition affects the reader's experience.",
        "Explains a deliberate rule-break and WHY it works (expectation makes the change stand out) — a sophisticated point.",
        "Ends by linking back to the poem's central idea of language and heritage.",
      ],
    },
    {
      title: "Redrafting with reasons: 'Hawker Centre'",
      task: "Show a before-and-after redraft of a stanza and explain each decision.",
      text:
        "DRAFT 1:\nThe hawker centre is very busy and loud.\nThere is lots of food and a big crowd.\nIt makes me feel happy and proud.\n\nFINAL DRAFT:\nUncle Lim's wok roars like a small jet.\nA tray of satay sticks fans out like a hand of cards.\nMy mother orders in three languages\nand gets her change in a fourth.\n\nREDRAFTING NOTE (for the commentary):\nMy first draft relied on a forced triple rhyme ('loud / crowd / proud') and on general phrases such as 'very busy' and 'lots of food' that could describe any hawker centre in the world. In my final draft I removed the rhyme so that I could choose words for meaning rather than sound. I replaced the vague noise with a named person and the onomatopoeic verb 'roars', and the simile 'like a small jet' exaggerates the heat and noise with a touch of humour. Most importantly, I cut the line 'It makes me feel happy and proud', which told the reader what to feel. Instead the final image of my mother ordering 'in three languages' and getting 'her change in a fourth' shows the multilingual identity I am proud of, and leaves the reader to feel that pride for themselves.",
      annotations: [
        "The draft shows three classic weaknesses: forced rhyme, vague adjectives and a told emotion.",
        "The final draft uses a named person, precise nouns (wok, satay sticks), onomatopoeia and fresh similes.",
        "The note quotes BOTH versions and explains each change in terms of its effect on the reader.",
        "Notice the ending: an image with a twist ('a fourth') replaces a moral summary.",
      ],
    },
    {
      title: "Evaluation paragraph: 'Three Haiku: Between'",
      task: "Write the evaluation section of a commentary, judging how successful your poem is.",
      text:
        "Looking back at 'Three Haiku: Between', I think the first haiku is the most successful. The onomatopoeic image of rain 'drumming' on a zinc roof becomes a metaphor for my father's language, which I hear constantly but only partly understand, and the final line 'words I almost know' captures that frustrating closeness in five syllables without ever stating the emotion. The second haiku is weaker, because 'two passports' repeats an idea I have used in other poems and feels more like a statement than a sudden moment of noticing, which is what a haiku should be. If I redrafted it, I would replace it with a single sensory detail from the departure lounge, such as the smell of the duty-free perfume counter, and trust the reader to sense the in-between feeling. I also found the 5-7-5 syllable count useful as a discipline, because it forced me to cut every unnecessary word; however, it occasionally pushed me towards slightly awkward phrasing, as in 'the frangipani lets go / one more white flower', and in future I might follow the looser modern approach of writing short-long-short lines rather than counting exactly.",
      annotations: [
        "Makes a clear judgement (which part is MOST successful) and supports it with quotation and analysis.",
        "Identifies a genuine weakness and explains WHY it is weak with reference to the conventions of the form.",
        "Proposes a specific, believable improvement rather than 'I would make it better'.",
        "Evaluates the form itself — a sophisticated move that shows understanding of how constraints shape writing.",
      ],
    },
  ],

  mnemonics: [
    {
      topic: "The six parts of a poetry commentary",
      device: "I Invent Fresh Tunes, Rewrite, Evaluate",
      explanation:
        "Intentions (what you wanted the reader to think and feel), Influences (which anthology poems shaped you, and how), Form and structure (why this shape), Techniques (quoted from your poem, with effects), Rewrite (redrafting decisions, before and after), Evaluate (strengths, weaknesses, next steps).",
    },
    {
      topic: "Where to find ideas for an identity poem",
      device: "Old Photos Make Sounds",
      explanation:
        "Objects that matter, Places you know by heart, Memories ('I remember…' lists), Sounds of home (and the sayings and languages you hear there). Mine all four before you write a line.",
    },
    {
      topic: "The pantoum repetition rule",
      device: "Two and four go forth",
      explanation:
        "Lines 2 and 4 of each quatrain go forward to become lines 1 and 3 of the next quatrain. In the final stanza, the unused lines 1 and 3 of the first stanza come back, so the poem ends on its opening line.",
    },
    {
      topic: "The three tests for any image",
      device: "SEE it, OWN it, PIN it",
      explanation:
        "SEE it: can the reader see, hear, smell, taste or touch it? OWN it: could only you have written it, or is it a cliché anyone could write? PIN it: is it the most precise word (frangipani, not flower; muttered, not said)?",
    },
  ],

  examMistakes: [
    "Telling the reader the emotion with abstract nouns ('I felt sad and confused about my identity') instead of showing it through concrete images.",
    "Forcing rhymes: twisting word order ('home I did come'), adding filler words or choosing a word only because it rhymes.",
    "Using clichés ('heart of gold', 'rich tapestry of cultures', 'tears like rain') that make the poem sound like everyone else's.",
    "Breaking lines randomly or ending lines on weak words like 'the', 'and' or 'of', with no reason you can explain in the commentary.",
    "Ending with a moral summary ('And that is why we should respect all cultures') instead of a resonant image or turn.",
    "In the commentary, naming a technique without explaining its effect ('I used enjambment') or listing ten techniques with no depth.",
    "Mentioning influences vaguely ('I was inspired by the anthology') instead of naming the poem and the specific technique adapted.",
    "Leaving out redrafting and evaluation, or claiming the poem is perfect — examiners reward honest, specific self-criticism.",
  ],

  misconceptions: [
    {
      wrong: "A poem has to rhyme to count as a 'real' poem.",
      right: "Most modern poetry, including most of the Identity and Culture anthology, is free verse. Rhyme is one tool among many; rhythm, imagery, line breaks and sound devices matter just as much. Bad rhyme is worse than no rhyme.",
    },
    {
      wrong: "Free verse means there are no rules, so anything goes.",
      right: "Free verse has no fixed metre or rhyme scheme, but every line break, stanza break and sound choice still has to be deliberate. Because nothing else holds the shape, the craft of line breaking matters even more.",
    },
    {
      wrong: "Big, emotional words like 'love', 'pain' and 'identity' make a poem powerful.",
      right: "Abstract nouns name feelings but do not create them. Concrete, sensory detail (a jade bangle, a passport photo, the click of a rice cooker) makes the reader feel the emotion for themselves.",
    },
    {
      wrong: "Good poets write a poem in one go from pure inspiration; redrafting means you are not talented.",
      right: "Almost every published poem goes through many drafts. Redrafting — cutting, sharpening and listening — is where poems are actually made, and your commentary is expected to describe it.",
    },
    {
      wrong: "A commentary is a summary of what your poem is about.",
      right: "A commentary analyses your CHOICES: why you chose the form, techniques and words you did, what effects you intended, how drafts changed and how successful the result is. Summary earns little credit.",
    },
    {
      wrong: "A haiku is just any three-line poem with 5-7-5 syllables.",
      right: "Syllable count is only the outline. A traditional haiku captures a single present-tense moment, often includes a season word (kigo) and uses a 'cut' (kireji) to set two images side by side — and it avoids explaining or using abstract statements.",
    },
  ],

  expertDebates: [
    {
      question: "Do fixed forms free a poet or cage them?",
      detail:
        "Some poets argue that rules such as the sonnet's 14 lines or the pantoum's repeated lines force surprising word choices and give a poem shape and memorability; the poet Richard Wilbur compared form to the genie's bottle, whose pressure makes the genie powerful. Others argue that inherited forms, many of them European, can feel false for modern experiences or for writers from other traditions, and that free verse follows the natural rhythms of thought and speech. Many poets now mix the two, borrowing a form and then breaking its rules on purpose.",
    },
    {
      question: "Does the poet's intention decide what a poem means?",
      detail:
        "In 1946 the critics W. K. Wimsatt and Monroe Beardsley argued that relying on the author's intention to judge a poem is a mistake (the 'intentional fallacy'): the poem must stand on its own words. Yet a commentary asks you to explain your intentions. Is that a contradiction? A strong answer recognises that a commentary explains what you were TRYING to do and how far you achieved it, while accepting that readers may find other valid meanings in your poem.",
    },
    {
      question: "Whose identity can you write about?",
      detail:
        "Identity poetry raises questions about voice. Writing in the voice of someone from a culture that is not your own (for example, in a dramatic monologue) can build empathy, but it can also risk stereotypes or speaking over people who can tell their own stories. Writers and critics disagree about where the line is. Most agree that careful research, specific detail rather than stereotype, and respect for the people you depict are essential — and that your own lived experience is often your richest material.",
    },
  ],

  realWorld: [
    {
      title: "Song lyrics",
      detail:
        "Songwriters face exactly the same problems you do: avoiding forced rhyme, finding a fresh image, deciding where a line should break. Many of the best use half-rhyme and internal rhyme so their lyrics sound natural rather than sing-song.",
      emoji: "🎵",
    },
    {
      title: "Spoken word and slam poetry",
      detail:
        "Spoken word poets perform poems about identity, family and belonging to live audiences and online. Their poems depend on sound, repetition and rhythm — the same craft you use, but designed for the ear.",
      emoji: "🎤",
    },
    {
      title: "Poems on the Underground",
      detail:
        "Since 1986, London's Poems on the Underground scheme has displayed short poems in Tube carriages. Short poems with strong images survive being read by tired commuters in seconds — proof that concrete detail and a sharp ending matter.",
      emoji: "🚇",
    },
    {
      title: "Occasion poems",
      detail:
        "Poets are invited to write for big public moments, such as Amanda Gorman reading 'The Hill We Climb' at the 2021 US presidential inauguration. Writing for an occasion means making a shared, abstract idea (hope, unity) concrete and memorable.",
      emoji: "🏛️",
    },
    {
      title: "Writers' reflections and artist statements",
      detail:
        "Artists, designers and architects write statements explaining their intentions, influences and choices — the same skill as your poetry commentary. University applications and portfolios often ask for one.",
      emoji: "🖼️",
    },
    {
      title: "Advertising and slogans",
      detail:
        "Copywriters use alliteration, rhythm and concrete imagery to make a phrase stick in your head. Learning to hear sound effects in poetry makes you better at spotting how adverts try to persuade you.",
      emoji: "📢",
    },
  ],

  flashcards: [
    { front: "Concrete noun vs abstract noun", back: "Concrete: something you can sense (a jade bangle, rain on a roof). Abstract: an idea or feeling (identity, love, belonging). Build poems from concrete nouns." },
    { front: "Show, don't tell", back: "Give the reader the image or action that causes a feeling instead of naming the feeling. 'She kept a sweet in every pocket' shows kindness; 'She was kind' tells it." },
    { front: "Cliché", back: "A phrase or comparison so overused it has lost its impact, e.g. 'cold as ice', 'heart of gold'. Fix it by asking 'what exactly?' and finding your own comparison." },
    { front: "Enjambment", back: "When a sentence runs on over a line break without punctuation. Creates momentum, surprise, suspense or double meaning." },
    { front: "End-stopped line", back: "A line where the sentence or clause ends at the line break, usually with punctuation. Feels firm, controlled, complete." },
    { front: "Caesura", back: "A pause in the middle of a line, usually created by punctuation, e.g. 'Unwontedly. It was late June.'" },
    { front: "Anaphora", back: "Repeating a word or phrase at the start of successive lines or clauses, e.g. 'I am from… / I am from…'. Creates a chant-like rhythm and builds emphasis." },
    { front: "Volta", back: "The 'turn' in a poem — a shift in argument, mood or perspective. In a Petrarchan sonnet it comes at line 9; in a Shakespearean sonnet often at the couplet." },
    { front: "Shakespearean sonnet", back: "14 lines of iambic pentameter: three quatrains and a couplet, rhyming ABAB CDCD EFEF GG." },
    { front: "Haiku", back: "Japanese form; in English usually 5-7-5 syllables. Captures one present moment; traditionally includes a season word (kigo) and a cut (kireji)." },
    { front: "Ghazal", back: "Form from Arabic, Persian and Urdu poetry: independent couplets, each ending with the same repeated word or phrase (radif) after a rhyme (qafia); the poet's name (takhallus) often appears in the final couplet." },
    { front: "Pantoum", back: "Form from the Malay pantun, in quatrains. Lines 2 and 4 of each stanza become lines 1 and 3 of the next; the poem often ends with its first line." },
    { front: "Dramatic monologue", back: "A poem spoken by one character (not necessarily the poet) to a silent listener, revealing their personality, e.g. Browning's 'My Last Duchess'." },
    { front: "Iambic pentameter", back: "A line of five iambs (da-DUM): ten syllables, five stresses. 'So LONG as MEN can BREATHE or EYES can SEE.'" },
    { front: "Half-rhyme (slant rhyme)", back: "A near rhyme where sounds almost match, e.g. kept / slipped, home / come. Sounds subtler and less forced than full rhyme." },
    { front: "Poetry commentary", back: "Analytical prose explaining your own poem's intentions, influences, form, techniques (quoted), redrafting and evaluation. Written in the first person." },
  ],

  mustKnow: [
    "Can you generate a page of specific ideas about your identity using objects, places, sounds, memories and 'I am from' lists?",
    "Can you turn an abstract line ('I miss home') into a concrete, sensory image?",
    "Can you spot a cliché or a forced rhyme in your own draft and fix it?",
    "Can you explain the rules of the sonnet, haiku, ghazal and pantoum, and say why you might choose free verse, a list poem or a dramatic monologue?",
    "Can you use enjambment, end-stopping and caesura on purpose and explain the effect of each line break?",
    "Can you name and use sound devices (alliteration, assonance, sibilance, onomatopoeia) and explain their effect?",
    "Can you write a title that adds meaning and an ending that resonates rather than summarises?",
    "Can you show a before-and-after redraft and explain why the change improves the poem?",
    "Can you write a commentary covering intentions, influences, form, techniques, redrafting and evaluation, quoting your own lines with slashes?",
    "Can you evaluate your own poem honestly, naming a strength, a weakness and a specific improvement?",
  ],

  videos: [
    { title: "How to write a poem: tips and techniques", channel: "BBC Bitesize", url: "https://www.youtube.com/results?search_query=bbc+bitesize+how+to+write+a+poem" },
    { title: "Enjambment, caesura and line breaks explained", channel: "Mr Bruff", url: "https://www.youtube.com/results?search_query=mr+bruff+enjambment+caesura" },
    { title: "Writing a 'Where I'm From' poem", channel: "Teacher walkthroughs", url: "https://www.youtube.com/results?search_query=where+i%27m+from+poem+writing+lesson" },
    { title: "Poetic form: sonnet, haiku, ghazal and pantoum", channel: "Mr Salles Teaches English", url: "https://www.youtube.com/results?search_query=poetic+forms+sonnet+haiku+ghazal+pantoum+explained" },
  ],

  quiz: {
    mcq: [
      {
        id: "pwr-quiz-mcq-1",
        question: "Which line uses the most concrete imagery to suggest that the speaker misses home?",
        options: [
          "I miss my home so much that it really hurts inside.",
          "Homesickness fills my heart with endless sorrow.",
          "I still keep the old house key on a string, though the lock was changed in May.",
          "Home is where the heart is, and my heart is far away.",
        ],
        answerIndex: 2,
        hint: "Which line gives you something you could actually photograph?",
        explanation:
          "The house key on a string is a concrete object, and the detail that the lock has been changed shows the speaker clinging to a home that no longer exists — the feeling is shown, not told. Two distractors name the feeling directly with abstract words ('hurts', 'homesickness', 'sorrow'), and ‘Home is where the heart is…’ is built on a cliché.",
        guideRef: "concrete-imagery",
      },
      {
        id: "pwr-quiz-mcq-2",
        question: "In a pantoum, which lines of each quatrain are repeated as lines 1 and 3 of the next quatrain?",
        options: ["Lines 1 and 3", "Lines 2 and 4", "Lines 1 and 4", "Lines 3 and 4"],
        answerIndex: 1,
        hint: "Remember the mnemonic: 'Two and four go forth'.",
        explanation:
          "Lines 2 and 4 of each stanza move forward to become lines 1 and 3 of the next stanza. Lines 1 and 3 of the FIRST stanza are the tempting distractor: they do come back, but only in the final stanza, so the poem can end on its opening line.",
        guideRef: "traditional-forms",
      },
      {
        id: "pwr-quiz-mcq-3",
        extract: "I am from a suitcase that is never\nquite unpacked,",
        question: "Which technique is used across these two lines?",
        options: ["Caesura", "End-stopping", "Anaphora", "Enjambment"],
        answerIndex: 3,
        hint: "Does the sentence stop at the end of the first line, or run on?",
        explanation:
          "The sentence runs over the line break without punctuation, which is enjambment; it leaves 'never' hanging at the edge of the line before 'quite' softens it. 'I am from' is anaphora across the whole poem, but the question asks what happens across these two lines, and that is the run-on.",
        guideRef: "line-breaks",
      },
      {
        id: "pwr-quiz-mcq-4",
        question: "Which is the strongest sentence for a poetry commentary?",
        options: [
          "I used lots of techniques like similes, metaphors and alliteration to make my poem good.",
          "My poem is about my grandmother and it is a pantoum.",
          "The onomatopoeic 'click of the rice cooker' in my first line imitates a small, everyday sound, so the poem opens with an ordinary noise of home that the reader can hear.",
          "I think the reader will definitely cry when they read my poem because it is very sad.",
        ],
        answerIndex: 2,
        hint: "Look for a quotation, a technique AND an effect.",
        explanation:
          "The option ‘The onomatopoeic 'click of the rice cooker' in my first line…’ names a technique (onomatopoeia), quotes the poem and explains a precise effect linked to the poem's purpose (home). The option ‘I used lots of techniques like similes, metaphors and alliteration…’ lists techniques with no quotation or effect; the option ‘My poem is about my grandmother and…’ merely summarises; the option ‘I think the reader will definitely cry…’ makes an overconfident claim about the reader with no analysis.",
        guideRef: "writing-commentary",
      },
    ],
    qa: [
      {
        id: "pwr-quiz-qa-1",
        question: "Rewrite this line so that it SHOWS rather than TELLS, using concrete imagery: 'I felt like an outsider at my new school.' Then explain in one sentence what your rewrite does.",
        marks: 3,
        hint: "Think of a specific moment, object or sound at the school that would make someone feel like an outsider.",
        modelAnswer:
          "Rewrite: 'At lunch I learned which table was mine / by which one went quiet when I sat down.'\nExplanation: Instead of naming the feeling 'outsider', the rewrite gives a concrete moment — a table falling silent — so the reader experiences the rejection for themselves, and the line break after 'mine' sets up the painful twist.",
        markScheme: [
          { point: "Rewrite replaces the told feeling with a specific moment or setting (no 'felt like an outsider')", keywords: ["table", "lunch", "quiet", "silent", "corridor", "alone", "locker", "bench"] },
          { point: "Uses a specific concrete/sensory detail or action", keywords: ["concrete", "image", "detail", "object", "sound", "see", "sensory", "specific"] },
          { point: "Explains the effect: the reader feels it for themselves / shown not told", keywords: ["shows", "show", "reader feels", "instead of", "not tell", "experience", "picture", "rather than"] },
        ],
        commonError: "Replacing one abstract word with another ('I felt lonely and different') or adding a cliché ('I stuck out like a sore thumb') instead of giving a real, specific image.",
        guideRef: "concrete-imagery",
      },
      {
        id: "pwr-quiz-qa-2",
        extract: "the express-train drew up there\nUnwontedly. It was late June.",
        question: "Explain how Edward Thomas uses the line break and the caesura in these lines to create an effect.",
        marks: 3,
        hint: "Where does the reader pause — and what is the train doing at that moment?",
        modelAnswer:
          "The enjambment after 'drew up there' makes the reader pause at the line break before the word 'Unwontedly', so we stop unexpectedly just as the train stops unexpectedly. The full stop after 'Unwontedly' then creates a caesura in the middle of the line, halting the rhythm. The short, plain sentence 'It was late June.' adds to the stillness, so the form enacts the silent, suspended moment at the empty station.",
        markScheme: [
          { point: "Identifies the enjambment / line break delaying 'Unwontedly'", keywords: ["enjambment", "enjambed", "line break", "runs on", "run-on", "delay"] },
          { point: "Identifies the caesura / full stop mid-line", keywords: ["caesura", "full stop", "mid-line", "middle of the line", "pause"] },
          { point: "Explains the effect: mirrors the unexpected stop / stillness", keywords: ["stop", "stillness", "still", "halts", "mirrors", "enacts", "silence", "unexpected"] },
        ],
        commonError: "Naming 'enjambment' and 'caesura' correctly but not linking them to the train stopping or to the stillness of the moment.",
        guideRef: "line-breaks",
      },
      {
        id: "pwr-quiz-qa-3",
        extract: "My grandmother is very wise,\nShe always makes the best mince pies.",
        question: "Explain why this couplet is an example of forced rhyme, then rewrite it so it no longer depends on forced rhyme.",
        marks: 3,
        hint: "Why is 'mince pies' there? Is it the truest detail, or the one that rhymes?",
        modelAnswer:
          "The couplet is forced because 'mince pies' seems to have been chosen only to rhyme with 'wise' — it does not show wisdom at all — and 'very wise' simply tells us the quality instead of showing it. A rewrite: 'My grandmother reads the sky before the forecast does / and brings the washing in five minutes before the rain.' This drops the rhyme, so every word can be chosen for meaning, and her wisdom is shown through a concrete action.",
        markScheme: [
          { point: "Explains the rhyme word is chosen for sound not meaning", keywords: ["only to rhyme", "for the rhyme", "chosen to rhyme", "doesn't make sense", "random", "sound not meaning", "irrelevant", "forced"] },
          { point: "Notes the line tells rather than shows ('very wise')", keywords: ["tells", "telling", "very wise", "abstract", "doesn't show", "vague"] },
          { point: "Provides a rewrite using concrete detail / half-rhyme / no rhyme", keywords: ["rewrite", "washing", "half-rhyme", "no rhyme", "concrete", "image", "shows"] },
        ],
        commonError: "Rewriting it with a different forced rhyme ('My grandmother is very wise / She has kind and twinkly eyes') — the problem moves but does not disappear.",
        guideRef: "sound-and-rhyme",
      },
      {
        id: "pwr-quiz-qa-4",
        extract: "from my grandmother's jade bangle\ntapping the table like a question\nshe never quite asks.",
        question: "Imagine you wrote these lines from 'Inventory'. Write a commentary paragraph (PEEL) explaining the technique and the effect you intended.",
        marks: 4,
        hint: "Point (technique) → Evidence (quote with slashes) → Explain (effect of key words) → Link (identity / purpose).",
        modelAnswer:
          "In the first stanza I used a simile to turn an ordinary sound into an unspoken worry: my grandmother's jade bangle is 'tapping the table like a question / she never quite asks'. The tapping is a concrete, slightly restless sound, and comparing it to a 'question' suggests that something is troubling her. I used enjambment to delay 'she never quite asks', so the reader waits to find out what the question is and never gets an answer. I intended this to hint at the gap between generations: my grandmother may be worried that I am drifting away from her culture, symbolised by the jade, but the poem shows that this worry stays unspoken.",
        markScheme: [
          { point: "Identifies the simile (or personification/sound image)", keywords: ["simile", "like a question", "comparison", "compares", "sound image"] },
          { point: "Embeds quotation accurately with a slash for the line break", keywords: ["/", "tapping the table", "like a question", "never quite asks"] },
          { point: "Explains the effect of the comparison / the unspoken worry", keywords: ["worry", "unspoken", "tension", "restless", "anxious", "concern", "silence", "unasked"] },
          { point: "Links to identity / culture / generations / intention", keywords: ["culture", "generation", "identity", "heritage", "jade", "drifting", "intended", "wanted"] },
        ],
        commonError: "Writing about the grandmother as a real person ('my grandmother is nice') rather than analysing the writer's choices and their effect on the reader.",
        guideRef: "writing-commentary",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "pwr-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "pwr-mcq-p1-q01",
            question: "Which of these is a concrete noun?",
            options: ["a cracked teacup", "belonging", "loneliness", "freedom"],
            answerIndex: 0,
            hint: "Could you pick it up or photograph it?",
            explanation: "A cracked teacup can be seen and touched, so it is concrete. Loneliness, belonging and freedom are abstract nouns: ideas or feelings you cannot perceive with your senses. 'Belonging' is tempting because it sounds like 'belongings', but here it means the feeling of fitting in.",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-mcq-p1-q02",
            question: "Which line best SHOWS (rather than tells) that a family has moved house many times?",
            options: [
              "We have moved so many times that I feel confused.",
              "Moving house is hard and makes everybody stressed.",
              "Our life has been one long, exhausting journey.",
              "Mum still writes our address in pencil.",
            ],
            answerIndex: 3,
            hint: "Look for a small, specific action that implies the situation.",
            explanation: "Writing the address in pencil (so it can be rubbed out) is a concrete detail that implies the family expects to move again — the reader works it out. The other options name feelings ('confused', 'stressed') or use an abstract, clichéd metaphor ('one long journey').",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-mcq-p1-q03",
            question: "What is a cliché?",
            options: [
              "A phrase or comparison used so often that it has lost its impact",
              "A word from another language used in an English poem",
              "A comparison using 'like' or 'as'",
              "A line that runs on into the next line",
            ],
            answerIndex: 0,
            hint: "Think 'worn out'.",
            explanation: "A cliché is an overused phrase, such as 'heart of gold', which readers skim over. A comparison using 'like' or 'as' is a simile — similes are not automatically clichés, though many clichés are similes ('cold as ice').",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-mcq-p1-q04",
            question: "Which description of a cold morning avoids cliché?",
            options: [
              "The air was as cold as ice.",
              "It was freezing cold, chilled to the bone.",
              "The tiled floor bit my feet like a coin left out in the rain.",
              "The wind was bitter and icy.",
            ],
            answerIndex: 2,
            hint: "Which comparison have you never read before?",
            explanation: "'Like a coin left out in the rain' is a fresh, specific comparison, and 'bit' personifies the cold. 'Cold as ice', 'chilled to the bone' and 'bitter wind' are stock phrases readers have met hundreds of times.",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-mcq-p1-q05",
            question: "A list poem begins every stanza with 'I am from…'. What is this repetition at the start of lines called?",
            options: ["Epistrophe", "Caesura", "Enjambment", "Anaphora"],
            answerIndex: 3,
            hint: "It comes from Greek for 'carrying back' — repetition at the START.",
            explanation: "Anaphora is the repetition of a word or phrase at the start of successive lines or clauses. Epistrophe is the tempting distractor: it is repetition at the END of lines (as in a ghazal's radif).",
            guideRef: "choosing-form",
          },
          {
            id: "pwr-mcq-p1-q06",
            question: "Why is George Ella Lyon's poem 'Where I'm From' so often used as a model in classrooms?",
            options: [
              "It is a strict sonnet whose rhyme scheme students must copy.",
              "It avoids personal detail so that any reader can relate to it.",
              "It is written in Japanese and teaches the haiku form.",
              "Its repeated opening gives a frame for listing specific details of home, family and memory.",
            ],
            answerIndex: 3,
            hint: "Think about why it is easy to borrow its structure for your OWN poem.",
            explanation: "The repeated 'I'm from' opening provides a simple frame that students fill with their own specific details. It is free verse, not a sonnet, and it is powerful precisely because it is full of personal detail rather than avoiding it.",
            guideRef: "finding-ideas",
          },
          {
            id: "pwr-mcq-p1-q07",
            question: "Which writing prompt is MOST likely to generate specific material for an identity poem?",
            options: [
              "Write about your culture.",
              "Write about what identity means.",
              "Write about how you feel about belonging.",
              "List ten things you can hear from your bed on a Sunday morning at home.",
            ],
            answerIndex: 3,
            hint: "Which prompt forces you to notice real, sensory details?",
            explanation: "The listening prompt forces concrete, sensory detail (the sounds of home), which is the raw material of good poems. The other prompts invite abstract statements about culture, identity and belonging, which usually produce vague writing.",
            guideRef: "finding-ideas",
          },
          {
            id: "pwr-mcq-p1-q08",
            extract: "the hiss and spit of oil in the wok",
            question: "This image appeals MAINLY to which sense?",
            options: ["Sight", "Sound", "Touch", "Taste"],
            answerIndex: 1,
            hint: "Say 'hiss' and 'spit' aloud.",
            explanation: "'Hiss' and 'spit' are onomatopoeic verbs, so the image is mainly auditory (sound). You might imagine seeing the oil, but the words chosen are sound words.",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-mcq-p1-q09",
            question: "What does 'code-switching' mean?",
            options: [
              "Changing the rhyme scheme halfway through a poem",
              "Moving between languages, dialects or ways of speaking depending on the situation",
              "Translating a poem from one language into another",
              "Using a secret code word as the title of a poem",
            ],
            answerIndex: 1,
            hint: "Think of how you might speak differently to a grandparent, a friend and a teacher.",
            explanation: "Code-switching is moving between languages or varieties of language depending on who you are with. It is a rich subject for identity poems. Translation (the option ‘Translating a poem from one language into another’) turns a whole text into another language; code-switching mixes them in real life.",
            guideRef: "finding-ideas",
          },
          {
            id: "pwr-mcq-p1-q10",
            question: "Why might a poet include a word from another language WITHOUT translating it?",
            options: [
              "To make the reader experience what it is like to be on the outside of a language",
              "Because poems are not allowed to include translations",
              "To make the poem longer",
              "Because the poet has forgotten the English word",
            ],
            answerIndex: 0,
            hint: "Think about how Sujata Bhatt uses Gujarati in 'Search for My Tongue'.",
            explanation: "Leaving a word untranslated presents the culture from the inside and lets the reader feel briefly excluded, as the speaker may feel in other situations. Poems can include translations; the choice not to is deliberate, not forgetful.",
            guideRef: "finding-ideas",
          },
          {
            id: "pwr-mcq-p1-q11",
            question: "Which line relies MOST on abstract nouns?",
            options: [
              "Steam fogs my grandmother's glasses.",
              "Identity, culture and heritage are part of my soul.",
              "Two passports wait in the drawer.",
              "The radio hums in Hokkien.",
            ],
            answerIndex: 1,
            hint: "Which line contains nothing you could see or hear?",
            explanation: "'Identity', 'culture', 'heritage' and 'soul' are all abstract nouns, so the line is vague and could appear in any poem. The other lines are built from concrete nouns: steam, glasses, passports, drawer, radio.",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-mcq-p1-q12",
            extract: "My grandmother's voice is a lantern in the corridor.",
            question: "Which technique is used here?",
            options: ["Simile", "Onomatopoeia", "Metaphor", "Alliteration"],
            answerIndex: 2,
            hint: "Is there a 'like' or 'as'?",
            explanation: "The voice is said to BE a lantern, with no 'like' or 'as', so it is a metaphor (suggesting her voice guides and comforts in the dark). It would be a simile only if it said 'like a lantern'.",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-mcq-p1-q13",
            extract: "I am from thunder that comes every afternoon\non time, like a strict teacher,",
            question: "Which technique is signalled by the phrase 'like a strict teacher'?",
            options: ["Simile", "Metaphor", "Onomatopoeia", "Oxymoron"],
            answerIndex: 0,
            hint: "Look at the little word 'like'.",
            explanation: "A comparison using 'like' is a simile; it compares the punctual afternoon storms to a teacher who is never late. It is not a metaphor, because the thunder is not said to BE a teacher.",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-mcq-p1-q14",
            question: "Which simile for a crowded night market is the most original?",
            options: [
              "as busy as a beehive",
              "packed like sardines",
              "as noisy as a zoo",
              "the crowd folding and unfolding like a paper fan",
            ],
            answerIndex: 3,
            hint: "Three of these are stock phrases.",
            explanation: "'Folding and unfolding like a paper fan' is a fresh image that captures the movement of a crowd. 'Busy as a beehive', 'packed like sardines' and 'noisy as a zoo' are clichés.",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-mcq-p1-q15",
            question: "Which is the best focus for a short (16–20 line) identity poem?",
            options: [
              "My whole life story from birth to now",
              "Everything about Singapore",
              "Why culture is important to everyone",
              "One afternoon learning to fold dumplings with my grandmother",
            ],
            answerIndex: 3,
            hint: "A short poem needs a small, specific window.",
            explanation: "One afternoon gives a single, concrete scene through which bigger ideas (heritage, family, language) can be glimpsed. A whole life or a whole country is too big for 20 lines, and 'why culture is important' invites an essay, not a poem.",
            guideRef: "finding-ideas",
          },
          {
            id: "pwr-mcq-p1-q16",
            question: "A student changes 'a flower fell' to 'a frangipani let go'. What is the main improvement?",
            options: [
              "It rhymes better.",
              "It makes the line longer.",
              "The precise noun and the gentle verb create a specific image with a sense of release.",
              "It makes the poem more abstract.",
            ],
            answerIndex: 2,
            hint: "Think about precise nouns and verbs.",
            explanation: "'Frangipani' is a precise noun that places the poem (a tropical setting) and 'let go' gently personifies the tree, suggesting release or loss. Nothing in the change creates rhyme, and it is more concrete, not more abstract.",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-mcq-p1-q17",
            extract: "I am from two passports in a drawer,\none blue, one red,\nthe same boy in both\ntrying hard not to blink.",
            question: "What do the two passports MAINLY represent in this stanza?",
            options: [
              "The speaker's love of travel and holidays",
              "The speaker's double identity, officially belonging to two countries",
              "The speaker's fear of flying",
              "The speaker's untidy bedroom",
            ],
            answerIndex: 1,
            hint: "What is a passport, officially?",
            explanation: "A passport is an official statement of national identity; having two, each showing 'the same boy', symbolises belonging to two countries at once. 'Trying hard not to blink' adds the pressure of performing an identity. Travel is part of the context, but the stanza's focus is identity, not holidays.",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-mcq-p1-q18",
            question: "Which is the strongest OPENING line for an identity poem?",
            options: [
              "Identity is a very important thing to all of us.",
              "This poem is about where I come from.",
              "My name sounds different in each of my mother's languages.",
              "Culture is like a tree with many roots.",
            ],
            answerIndex: 2,
            hint: "Which line makes you want to read the next one?",
            explanation: "The name line is specific, intriguing and raises a question (how does it sound in each language?). The option ‘Identity is a very important thing to all of us.’ is an abstract statement, the option ‘This poem is about where I come…’ announces the topic instead of beginning the poem, and the option ‘Culture is like a tree with many…’ is a familiar, clichéd metaphor.",
            guideRef: "titles-endings",
          },
          {
            id: "pwr-mcq-p1-q19",
            question: "A student writes: 'My heritage is a rich tapestry.' What is the MAIN weakness?",
            options: [
              "It is too short to be a line of poetry.",
              "It uses a worn-out metaphor and an abstract noun, so no specific picture forms.",
              "It should be written as a simile.",
              "It contains a spelling mistake.",
            ],
            answerIndex: 1,
            hint: "Have you seen 'rich tapestry' before?",
            explanation: "'Rich tapestry' is a cliché (a dead metaphor) and 'heritage' is abstract, so the reader sees nothing specific. Turning it into a simile ('like a rich tapestry') would not fix the cliché; the student needs a concrete detail from their own heritage.",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-mcq-p1-q20",
            question: "A poem speaks directly to someone or something that cannot reply — for example, a grandmother who has died, or a hurricane. What is this technique called?",
            options: ["Apostrophe", "Onomatopoeia", "Enjambment", "Assonance"],
            answerIndex: 0,
            hint: "It shares its name with a punctuation mark.",
            explanation: "Apostrophe is direct address to an absent person, an object or an idea, as in Grace Nichols' 'Talk to me Huracan'. It creates intimacy and urgency. It has nothing to do with the apostrophe punctuation mark except the name.",
            guideRef: "choosing-form",
          },
        ],
      },
      {
        id: "pwr-mcq-p2",
        title: "MCQ Paper 2",
        questions: [
          {
            id: "pwr-mcq-p2-q01",
            question: "How many lines does a sonnet have?",
            options: ["12", "16", "10", "14"],
            answerIndex: 3,
            hint: "Count the lines of Sonnet 18.",
            explanation: "A sonnet has 14 lines. Ten is the number of syllables in a line of iambic pentameter, which is why 10 can be tempting.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-mcq-p2-q02",
            question: "What is the rhyme scheme of a Shakespearean sonnet?",
            options: ["ABBA ABBA CDE CDE", "ABAB CDCD EFEF GG", "AABB CCDD EEFF GG", "ABAB BCBC CDCD EE"],
            answerIndex: 1,
            hint: "Three quatrains of alternate rhyme, then a couplet.",
            explanation: "The Shakespearean sonnet has three alternately rhymed quatrains and a rhyming couplet: ABAB CDCD EFEF GG. ABBA ABBA is the usual opening octave of a Petrarchan sonnet. ABAB BCBC CDCD EE is the Spenserian sonnet.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-mcq-p2-q03",
            question: "What is a volta?",
            options: [
              "A line of ten syllables",
              "A repeated word at the end of each couplet",
              "A turn or shift in a poem's argument, mood or perspective",
              "A season word in a haiku",
            ],
            answerIndex: 2,
            hint: "It is Italian for 'turn'.",
            explanation: "The volta is the turn, most famously in a sonnet. A repeated word at the end of each couplet is a ghazal's radif, and a season word is a haiku's kigo.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-mcq-p2-q04",
            question: "In a Petrarchan sonnet, where does the volta usually come?",
            options: [
              "At the start of line 9, between the octave and sestet",
              "In the final couplet",
              "At line 1",
              "At line 5, after the first quatrain",
            ],
            answerIndex: 0,
            hint: "A Petrarchan sonnet divides into 8 + 6 lines.",
            explanation: "The Petrarchan sonnet splits into an octave (8 lines) and sestet (6 lines), so the turn comes at line 9. The final couplet is where a Shakespearean sonnet often turns, which is the tempting distractor.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-mcq-p2-q05",
            question: "In English, what syllable pattern is usually used for a haiku?",
            options: ["5-7-5", "5-5-5", "7-5-7", "3-5-3"],
            answerIndex: 0,
            hint: "Short, long, short.",
            explanation: "English haiku usually follow 5-7-5 syllables. Japanese haiku actually count sound units (on), so the English pattern is an approximation, but 5-7-5 is the standard school convention.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-mcq-p2-q06",
            question: "What is a 'kigo' in a traditional haiku?",
            options: ["A cutting word", "A season word", "The poet's signature", "A rhyming word"],
            answerIndex: 1,
            hint: "Monsoon, cherry blossom, first snow…",
            explanation: "A kigo is a word or phrase that signals the season, such as 'monsoon' or 'cherry blossom'. The 'cutting word' is the kireji, which is the tempting distractor.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-mcq-p2-q07",
            extract: "rain on the zinc roof —\nmy father's language drumming\nwords I almost know",
            question: "What does the dash at the end of line 1 do?",
            options: [
              "It acts as a 'cut', pausing between the first image and the second so the reader connects them",
              "It shows the poet has forgotten a word",
              "It marks the volta at line 9",
              "It replaces a missing rhyme",
            ],
            answerIndex: 0,
            hint: "In Japanese this job is done by a kireji.",
            explanation: "The dash works like a kireji (cutting word): it creates a pause that sets the rain beside the father's language, inviting the reader to link them. Haiku have only three lines, so there is no line 9 and no volta in the sonnet sense.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-mcq-p2-q08",
            question: "A ghazal is built from:",
            options: [
              "Three quatrains and a couplet",
              "Three lines of 5, 7 and 5 syllables",
              "Quatrains in which lines 2 and 4 repeat",
              "Self-contained couplets that each end with the same repeated word or phrase",
            ],
            answerIndex: 3,
            hint: "Think of the radif.",
            explanation: "A ghazal is made of independent couplets, each ending in the same radif. Quatrains with lines 2 and 4 repeating describe a pantoum; three quatrains and a couplet describe a Shakespearean sonnet.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-mcq-p2-q09",
            question: "In a ghazal, what is the 'radif'?",
            options: [
              "The rhyming word that comes just before the refrain",
              "The word or phrase repeated at the end of every couplet",
              "The poet's name in the last couplet",
              "The title of the poem",
            ],
            answerIndex: 1,
            hint: "It is the refrain at the very end of each couplet.",
            explanation: "The radif is the repeated end-word or phrase. The rhyming word just before it is the qafia (the tempting distractor), and the poet's name in the last couplet is the takhallus.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-mcq-p2-q10",
            question: "Where did the ghazal originate and flourish?",
            options: [
              "In Japanese court poetry",
              "In Elizabethan England",
              "In Arabic poetry, then in Persian and Urdu poetry",
              "In 19th-century France",
            ],
            answerIndex: 2,
            hint: "Think of Rumi, Hafez and Ghalib.",
            explanation: "The ghazal began in Arabic poetry and flourished in Persian (Rumi, Hafez) and Urdu (Ghalib). French poets in the 1800s adapted the pantoum, not the ghazal — a tempting confusion.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-mcq-p2-q11",
            question: "What is the 'takhallus' in a traditional ghazal?",
            options: [
              "The poet's own name or pen-name, placed in the final couplet",
              "A season word",
              "The opening couplet",
              "A line of ten syllables",
            ],
            answerIndex: 0,
            hint: "It is like the poet signing the poem.",
            explanation: "The takhallus is the poet's name or pen-name, traditionally included in the last couplet, almost like a signature. A season word is a haiku's kigo.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-mcq-p2-q12",
            question: "The pantoum developed from which earlier form?",
            options: ["The Italian sonetto", "The Japanese haiku", "The Persian ghazal", "The Malay pantun"],
            answerIndex: 3,
            hint: "The names sound alike.",
            explanation: "The pantoum comes from the Malay pantun, later adapted by French poets in the 1800s. That makes it a meaningful choice for a poet with roots in Malaysia or Singapore.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-mcq-p2-q13",
            extract: "Stanza 1:\nThe kettle starts its thin, high song.\nShe folds the dumplings, pinch by pinch.\nHer radio hums in Hokkien.\nI only understand the tune.",
            question: "Following the pantoum rule, which two lines must reappear as lines 1 and 3 of stanza 2?",
            options: [
              "'The kettle starts its thin, high song.' and 'Her radio hums in Hokkien.'",
              "'She folds the dumplings, pinch by pinch.' and 'I only understand the tune.'",
              "'The kettle starts its thin, high song.' and 'I only understand the tune.'",
              "'Her radio hums in Hokkien.' and 'I only understand the tune.'",
            ],
            answerIndex: 1,
            hint: "Two and four go forth.",
            explanation: "Lines 2 and 4 ('She folds the dumplings…' and 'I only understand the tune.') become lines 1 and 3 of the next stanza. Lines 1 and 3 are saved for the final stanza, which is why the option ‘'The kettle starts its thin, high song.' and 'Her radio hums in…’ is tempting but wrong.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-mcq-p2-q14",
            question: "Why might a pantoum suit a poem about memory?",
            options: [
              "Because it must always rhyme, which helps us remember",
              "Because it is the shortest form available",
              "Because its repeated lines keep returning, like thoughts and memories that loop back",
              "Because it has a volta at line 9",
            ],
            answerIndex: 2,
            hint: "What does the repetition feel like?",
            explanation: "Lines in a pantoum keep coming back in new contexts, mirroring the way memories return and are reinterpreted. Pantoums need not rhyme, are not especially short, and have no fixed volta.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-mcq-p2-q15",
            question: "What is free verse?",
            options: [
              "Poetry with no regular metre and no fixed rhyme scheme",
              "Poetry that may be published without paying for it",
              "Poetry that must have exactly 14 lines",
              "Poetry with no line breaks",
            ],
            answerIndex: 0,
            hint: "Free of what?",
            explanation: "Free verse is free of a regular metre and a fixed rhyme scheme, but it still uses line breaks — in fact line breaks are its main tool. Poetry with no line breaks is a prose poem.",
            guideRef: "choosing-form",
          },
          {
            id: "pwr-mcq-p2-q16",
            question: "Which statement about free verse is TRUE?",
            options: [
              "Free verse is easier because nothing needs to be planned.",
              "Free verse cannot use any sound devices.",
              "In free verse, line breaks become the poet's main way of shaping meaning and rhythm.",
              "Free verse was invented by Shakespeare.",
            ],
            answerIndex: 2,
            hint: "If there is no metre or rhyme, what is left to shape the poem?",
            explanation: "Without metre or rhyme to hold the shape, line breaks, stanza breaks and sound carry the structure. Free verse uses plenty of sound devices, and it is a modern form (Shakespeare wrote mainly in blank verse and rhyme).",
            guideRef: "choosing-form",
          },
          {
            id: "pwr-mcq-p2-q17",
            question: "What is a dramatic monologue?",
            options: [
              "A poem spoken by a single character to a silent listener, revealing the speaker's personality",
              "A poem with two speakers arguing",
              "A poem performed on stage with music",
              "A 14-line poem about love",
            ],
            answerIndex: 0,
            hint: "'Mono' means one; the listener does not reply.",
            explanation: "A dramatic monologue has one speaker — often a character, not the poet — addressing a silent listener, and it reveals more about the speaker than they intend. Two speakers would be a dialogue poem.",
            guideRef: "choosing-form",
          },
          {
            id: "pwr-mcq-p2-q18",
            question: "Robert Browning's 'My Last Duchess' (1842) is a famous example of which form?",
            options: ["Haiku", "Ghazal", "Pantoum", "Dramatic monologue"],
            answerIndex: 3,
            hint: "A duke speaks to a visitor who never replies.",
            explanation: "In 'My Last Duchess' the Duke speaks to a silent envoy and accidentally reveals his controlling, sinister character: the classic dramatic monologue.",
            guideRef: "choosing-form",
          },
          {
            id: "pwr-mcq-p2-q19",
            extract: "You think I'm empty now. Look closer.\nI still hold the shape of everything\nyou packed the night you left Manila:",
            question: "In 'The Suitcase Speaks', what is the effect of giving the voice to the suitcase?",
            options: [
              "It makes the poem a haiku.",
              "It reveals the owner's past and feelings indirectly, through an object that has 'witnessed' them",
              "It removes all emotion from the poem.",
              "It shows the poet dislikes travelling.",
            ],
            answerIndex: 1,
            hint: "What can the suitcase say that its owner might not?",
            explanation: "The object acts as a witness, revealing the owner's departure, secrets and guilt indirectly; this is the power of an object-voiced dramatic monologue. The poem is full of emotion — it simply arrives from an unexpected angle.",
            guideRef: "choosing-form",
          },
          {
            id: "pwr-mcq-p2-q20",
            question: "A student wants to write about feeling caught between two cultures, with the same worries circling round and round. Which form choice is BEST justified?",
            options: [
              "A haiku, because it is short",
              "A pantoum, because its repeated lines can mimic thoughts looping back without escape",
              "A limerick, because it is funny",
              "A single long prose paragraph, because poems should not have structure",
            ],
            answerIndex: 1,
            hint: "Which form's structure ENACTS circling thoughts?",
            explanation: "The pantoum's repetition literally circles back, so the form enacts the looping worry. A haiku captures a single moment, not an ongoing cycle, and a limerick's comic bounce would clash with the subject unless used ironically.",
            guideRef: "traditional-forms",
          },
        ],
      },
      {
        id: "pwr-mcq-p3",
        title: "MCQ Paper 3",
        passage: {
          id: "adlestrop-paper",
          title: "Adlestrop",
          source: "Edward Thomas (written 1915, published 1917)",
          text:
            "Yes. I remember Adlestrop—\nThe name, because one afternoon\nOf heat the express-train drew up there\nUnwontedly. It was late June.\n\nThe steam hissed. Someone cleared his throat.\nNo one left and no one came\nOn the bare platform. What I saw\nWas Adlestrop—only the name\n\nAnd willows, willow-herb, and grass,\nAnd meadowsweet, and haycocks dry,\nNo whit less still and lonely fair\nThan the high cloudlets in the sky.\n\nAnd for that minute a blackbird sang\nClose by, and round him, mistier,\nFarther and farther, all the birds\nOf Oxfordshire and Gloucestershire.",
          note: "unwontedly = unusually; haycocks = small heaps of hay; no whit less = not one bit less. Questions 4–8 and 20 refer to this poem; the rest test line breaks, sound, titles and endings in general.",
        },
        questions: [
          {
            id: "pwr-mcq-p3-q01",
            question: "What is enjambment?",
            options: [
              "A pause in the middle of a line",
              "A sentence that runs on over a line break without punctuation",
              "A line that ends with a full stop",
              "Repeating a word at the start of each line",
            ],
            answerIndex: 1,
            hint: "Think of a sentence 'stepping over' the end of the line.",
            explanation: "Enjambment is when a sentence continues across a line break. A pause in the middle of a line is a caesura, and repetition at the start of lines is anaphora.",
            guideRef: "line-breaks",
          },
          {
            id: "pwr-mcq-p3-q02",
            question: "An end-stopped line usually creates which effect?",
            options: [
              "A sense of rushing momentum",
              "A double meaning across the line break",
              "A firm, complete, controlled feeling",
              "A rhyme in the middle of the line",
            ],
            answerIndex: 2,
            hint: "The sentence finishes exactly where the line does.",
            explanation: "When the grammar and the line end together, the line feels complete and controlled. Rushing momentum and double meanings across the break are effects of enjambment.",
            guideRef: "line-breaks",
          },
          {
            id: "pwr-mcq-p3-q03",
            question: "What is a caesura?",
            options: [
              "A pause in the middle of a line, often marked by punctuation",
              "The last word of a poem",
              "A 14-line poem",
              "A word that imitates a sound",
            ],
            answerIndex: 0,
            hint: "It comes from Latin for 'a cutting'.",
            explanation: "A caesura is a mid-line pause, usually created by a full stop, comma or dash. A word that imitates a sound is onomatopoeia.",
            guideRef: "line-breaks",
          },
          {
            id: "pwr-mcq-p3-q04",
            extract: "Of heat the express-train drew up there\nUnwontedly. It was late June.",
            question: "What is the main effect of placing 'Unwontedly' at the start of a new line?",
            options: [
              "It makes the poem rhyme.",
              "The reader pauses at the line break before the surprising word, just as the train makes its unexpected stop",
              "It shows the train is moving very fast.",
              "It introduces a new speaker.",
            ],
            answerIndex: 1,
            hint: "What does the train do — and what does the reader do at the line break?",
            explanation: "The enjambment makes the reader halt, mirroring the train stopping 'unwontedly' (unusually). The train has stopped, so 'moving very fast' is the opposite of the effect.",
            guideRef: "line-breaks",
          },
          {
            id: "pwr-mcq-p3-q05",
            question: "Which line from 'Adlestrop' contains a caesura created by a full stop?",
            options: [
              "Farther and farther, all the birds",
              "And meadowsweet, and haycocks dry,",
              "Unwontedly. It was late June.",
              "Than the high cloudlets in the sky.",
            ],
            answerIndex: 2,
            hint: "Look for a full stop in the MIDDLE of a line.",
            explanation: "'Unwontedly. It was late June.' has a full stop mid-line, creating a strong caesura that halts the rhythm. 'Farther and farther, all the birds' has a comma pause, but the question asks for a full stop.",
            guideRef: "line-breaks",
          },
          {
            id: "pwr-mcq-p3-q06",
            extract: "And willows, willow-herb, and grass,\nAnd meadowsweet, and haycocks dry,",
            question: "The repeated 'and' in these lines is an example of:",
            options: ["Asyndeton", "Polysyndeton", "Oxymoron", "Onomatopoeia"],
            answerIndex: 1,
            hint: "'Poly' means many; 'syndeton' means bound together.",
            explanation: "Polysyndeton is the use of many conjunctions ('and… and… and'). It slows the list and makes each plant seem noticed one by one in the stillness. Asyndeton is the opposite: leaving conjunctions out.",
            guideRef: "sound-and-rhyme",
          },
          {
            id: "pwr-mcq-p3-q07",
            question: "How does the final stanza of 'Adlestrop' end the poem?",
            options: [
              "With a moral summary about the importance of nature",
              "By returning word for word to the first line",
              "With a question to the reader",
              "By widening out from one blackbird to all the birds of two counties",
            ],
            answerIndex: 3,
            hint: "Follow the movement from 'Close by' to 'Farther and farther'.",
            explanation: "The ending zooms out from one nearby blackbird to 'all the birds / Of Oxfordshire and Gloucestershire', so a tiny stop becomes a vast, shared moment. There is no moral summary, and the ending does not repeat the first line.",
            guideRef: "titles-endings",
          },
          {
            id: "pwr-mcq-p3-q08",
            question: "In 'The steam hissed.', the word 'hissed' is an example of:",
            options: ["Assonance", "Metaphor", "Onomatopoeia", "Enjambment"],
            answerIndex: 2,
            hint: "Say it aloud.",
            explanation: "'Hissed' imitates the sound it describes, so it is onomatopoeia. Its 's' sounds also contribute sibilance, but the device the word itself represents is onomatopoeia.",
            guideRef: "sound-and-rhyme",
          },
          {
            id: "pwr-mcq-p3-q09",
            extract: "He clasps the crag with crooked hands;\n(Tennyson, 'The Eagle')",
            question: "Which sound device dominates this line?",
            options: ["Alliteration of hard 'c' sounds", "Sibilance", "Assonance of 'ee' sounds", "Internal rhyme"],
            answerIndex: 0,
            hint: "Listen to the first sounds of 'clasps', 'crag' and 'crooked'.",
            explanation: "'Clasps', 'crag' and 'crooked' share a hard 'c' sound at the start: alliteration, which makes the line sound harsh and gripping like the claws. There are some 's' sounds, but they do not dominate.",
            guideRef: "sound-and-rhyme",
          },
          {
            id: "pwr-mcq-p3-q10",
            extract: "the low moan of the old road",
            question: "Which sound device is MOST prominent here?",
            options: ["Plosive alliteration", "Assonance", "Onomatopoeia", "Sibilance"],
            answerIndex: 1,
            hint: "Listen to the vowels in 'low', 'moan', 'old', 'road'.",
            explanation: "The repeated long 'o' vowel sound in low, moan, old and road is assonance, creating a slow, mournful tone. 'Moan' has a slightly sound-like quality, but the pattern that dominates is the repeated vowel.",
            guideRef: "sound-and-rhyme",
          },
          {
            id: "pwr-mcq-p3-q11",
            extract: "she sews in silence, sleeves of softest silk",
            question: "Which effect is the sibilance here most likely to create?",
            options: [
              "Harsh, violent anger",
              "A loud, chaotic atmosphere",
              "A fast, comic rhythm",
              "A hushed, gentle, soothing atmosphere",
            ],
            answerIndex: 3,
            hint: "Repeated soft 's' sounds — whispering or shouting?",
            explanation: "Combined with words like 'silence' and 'softest', the sibilance creates a hushed, gentle mood. Harsh anger is more typically created by plosives (b, p, t, d, k).",
            guideRef: "sound-and-rhyme",
          },
          {
            id: "pwr-mcq-p3-q12",
            question: "A line of iambic pentameter contains:",
            options: [
              "Five syllables",
              "Five rhyming words",
              "Five stanzas",
              "Five iambs: ten syllables, alternating unstressed and stressed",
            ],
            answerIndex: 3,
            hint: "'Penta' = five, and an iamb has two syllables.",
            explanation: "Iambic pentameter has five iambs (da-DUM) per line, which makes ten syllables. Five syllables is the first line of a haiku.",
            guideRef: "sound-and-rhyme",
          },
          {
            id: "pwr-mcq-p3-q13",
            question: "Which pair is a HALF-rhyme (slant rhyme)?",
            options: ["light / night", "tree / free", "kept / slipped", "cat / hat"],
            answerIndex: 2,
            hint: "Which pair nearly, but not quite, rhymes?",
            explanation: "'Kept' and 'slipped' share their final consonants (-pt) but have different vowels, so they almost rhyme: a half-rhyme. The others are all full rhymes.",
            guideRef: "sound-and-rhyme",
          },
          {
            id: "pwr-mcq-p3-q14",
            extract: "To the market we did go,\nWhere the mangoes sat in a row.",
            question: "What is the MAIN problem with this couplet?",
            options: [
              "It uses free verse.",
              "It uses too many abstract nouns.",
              "It contains a simile that is too original.",
              "The word order is twisted and 'did' is added just to reach the rhyme and the beat",
            ],
            answerIndex: 3,
            hint: "Would anyone actually say 'we did go'?",
            explanation: "'We did go' is unnatural word order with a filler word, both used to land on 'go' for the rhyme — classic forced rhyme. The couplet rhymes, so it is not free verse, and it contains no simile.",
            guideRef: "sound-and-rhyme",
          },
          {
            id: "pwr-mcq-p3-q15",
            question: "Which is the BEST way to fix a forced rhyme?",
            options: [
              "Add more rhymes to the same line",
              "Use a rhyming dictionary to find any word that rhymes",
              "Keep the meaning and try half-rhyme, internal rhyme or no rhyme",
              "Turn the line into a question",
            ],
            answerIndex: 2,
            hint: "The problem is that sound is controlling meaning.",
            explanation: "Half-rhyme, internal rhyme or no rhyme free you to choose words for meaning. A rhyming dictionary used to grab 'any word that rhymes' is exactly how forced rhymes happen.",
            guideRef: "sound-and-rhyme",
          },
          {
            id: "pwr-mcq-p3-q16",
            extract: "I sat on the mat in the light of the night.",
            question: "Which device is present in this line?",
            options: ["Internal rhyme", "Enjambment", "Caesura", "Volta"],
            answerIndex: 0,
            hint: "Look for words that rhyme within the same line.",
            explanation: "'Sat'/'mat' and 'light'/'night' rhyme inside the line: internal rhyme. There is no line break within it (so no enjambment) and no mid-line punctuation (so no caesura).",
            guideRef: "sound-and-rhyme",
          },
          {
            id: "pwr-mcq-p3-q17",
            question: "Which title adds the most meaning to a poem about a boy who carries two passports?",
            options: ["Untitled", "My Identity Poem", "A Poem by Me", "Which One to Show First"],
            answerIndex: 3,
            hint: "Which title creates a question or tension?",
            explanation: "'Which One to Show First' hints at the choice the boy faces at every border, creating tension before the poem begins. The others give no information or simply label the task.",
            guideRef: "titles-endings",
          },
          {
            id: "pwr-mcq-p3-q18",
            question: "What is a circular ending?",
            options: [
              "An ending that asks a question",
              "An ending that returns to the poem's opening line or image, often with new meaning",
              "An ending with a rhyming couplet",
              "An ending that summarises the moral",
            ],
            answerIndex: 1,
            hint: "Think of the pantoum.",
            explanation: "A circular ending comes back to the start, but the reader now sees the opening differently because of everything in between. A rhyming couplet ending is typical of a Shakespearean sonnet, but it is not necessarily circular.",
            guideRef: "titles-endings",
          },
          {
            id: "pwr-mcq-p3-q19",
            extract: "And that is why my culture means so much to me.",
            question: "Why is this a weak final line for an identity poem?",
            options: [
              "It summarises the message in abstract words, telling the reader what to think instead of letting the images resonate",
              "It is too short.",
              "It uses too much concrete imagery.",
              "It is written in the first person.",
            ],
            answerIndex: 0,
            hint: "Is this line showing or telling?",
            explanation: "A moral summary closes the poem down and repeats in abstract form what the images should already have shown. The first person is perfectly acceptable, and the line contains no concrete imagery at all.",
            guideRef: "titles-endings",
          },
          {
            id: "pwr-mcq-p3-q20",
            extract: "Was Adlestrop—only the name\n\nAnd willows, willow-herb, and grass,",
            question: "The sentence runs on across the stanza break. What is the most convincing interpretation of this choice?",
            options: [
              "The white space works like a held breath; then the bare 'name' on the sign opens out into a living landscape",
              "The stanza break shows that the train has left the station.",
              "Thomas forgot to put a full stop at the end of stanza two.",
              "It signals that a new speaker begins in stanza three.",
            ],
            answerIndex: 0,
            hint: "What is 'only the name' — and what does the next stanza add to it?",
            explanation: "Running the sentence over a stanza break creates a long pause of stillness, after which the name on the sign blossoms into willows, grass and meadowsweet: the place becomes more than a name. The train has not left yet, and the speaker does not change.",
            guideRef: "line-breaks",
          },
        ],
      },
      {
        id: "pwr-mcq-p4",
        title: "MCQ Paper 4",
        questions: [
          {
            id: "pwr-mcq-p4-q01",
            question: "What is a poetry commentary?",
            options: [
              "A summary of the plot of your poem",
              "Analytical writing that explains the choices in your own poem, their intended effects and how successful they are",
              "A list of every technique in the anthology",
              "A second poem that responds to your first",
            ],
            answerIndex: 1,
            hint: "It is analysis — of yourself.",
            explanation: "A commentary analyses YOUR choices: intentions, influences, form, techniques, redrafting and evaluation. A plot summary earns little credit.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-mcq-p4-q02",
            question: "Which is the strongest OPENING sentence for a commentary?",
            options: [
              "In 'Inventory' I wanted to capture the feeling of belonging to several places at once, building that feeling out of objects and sounds rather than explaining it.",
              "My poem is called 'Inventory' and I hope you like it.",
              "Poetry is a very old art form that many people enjoy.",
              "I wrote a poem for my English homework.",
            ],
            answerIndex: 0,
            hint: "It should state an intention and hint at a method.",
            explanation: "The option ‘In 'Inventory' I wanted to capture the feeling of belonging to…’ states the poem's intention (belonging to several places) and the method (objects and sounds instead of explanation), setting up the analysis. The others are chatty, generic or irrelevant.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-mcq-p4-q03",
            question: "Which is the correct way to quote two lines of your own poem inside a commentary sentence?",
            options: [
              "The enjambment in a suitcase that is never quite unpacked creates hesitation.",
              "The enjambment in (a suitcase that is never) (quite unpacked) creates hesitation.",
              "The enjambment in 'A SUITCASE THAT IS NEVER QUITE UNPACKED' creates hesitation.",
              "The enjambment in 'a suitcase that is never / quite unpacked' creates hesitation.",
            ],
            answerIndex: 3,
            hint: "Quotation marks plus a symbol to show the line break.",
            explanation: "Embed the quotation in quotation marks and use a slash ( / ) to show where the line breaks. This matters especially when your point is about the line break itself. The option ‘The enjambment in a suitcase that is never quite unpacked creates…’ has no quotation marks and loses the line break.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-mcq-p4-q04",
            question: "Which sentence shows an influence from the anthology MOST effectively?",
            options: [
              "I was inspired by all the poems we read in class.",
              "I like Sujata Bhatt's poem so I wrote one too.",
              "My poem is a bit like some of the anthology poems.",
              "Like Sujata Bhatt in 'Search for My Tongue', I placed words from another language in my poem without translating them, so the reader shares my sense of being outside a language.",
            ],
            answerIndex: 3,
            hint: "Name the poem AND the specific technique you adapted.",
            explanation: "The option ‘Like Sujata Bhatt in 'Search for My Tongue', I placed words from…’ names the poet and poem, identifies the specific technique borrowed (untranslated words) and explains the effect in the student's own poem. The option ‘I like Sujata Bhatt's poem so I wrote one too.’ names the poet but not what was learned from her.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-mcq-p4-q05",
            question: "Which person should a poetry commentary mainly be written in?",
            options: [
              "Third person ('the poet chose…') only",
              "Second person ('you chose…')",
              "First person ('I chose…', 'I intended…')",
              "It must avoid pronouns entirely",
            ],
            answerIndex: 2,
            hint: "Whose choices are you explaining?",
            explanation: "A commentary explains your own decisions, so the first person is natural and expected. Writing 'the poet chose…' about yourself can sound odd and distant, although it is not wrong in places.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-mcq-p4-q06",
            question: "Which is the WEAKEST piece of commentary analysis?",
            options: [
              "The end-stopped line 'I am from all of it.' creates a firm pause in which the speaker seems to gather courage.",
              "I used a simile because it makes the poem more interesting.",
              "The anaphora of 'I am from' gives the poem a chant-like rhythm, like a pledge of identity.",
              "Breaking the line after 'never' briefly makes the speaker's unsettledness sound permanent.",
            ],
            answerIndex: 1,
            hint: "Which one has no quotation and no specific effect?",
            explanation: "'I used a simile because it makes the poem more interesting' gives no quotation and a vague effect that could apply to any technique. The other three quote or locate the technique and explain a precise effect.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-mcq-p4-q07",
            extract: "the big, dark, scary, gloomy, frightening storm",
            question: "Why would a careful redraft cut most of these adjectives?",
            options: [
              "Adjectives are not allowed in poetry.",
              "Piling up similar adjectives weakens the image; one precise word or a strong verb hits harder",
              "The line is too short.",
              "The adjectives make the poem rhyme too much.",
            ],
            answerIndex: 1,
            hint: "Do five similar adjectives make the storm five times scarier?",
            explanation: "Stacked, overlapping adjectives (dark, scary, gloomy, frightening) dilute each other and tell rather than show. One precise detail — or a strong verb such as 'the storm shouldered the shutters' — creates a sharper image. Adjectives are allowed; overloading is the problem.",
            guideRef: "drafting-redrafting",
          },
          {
            id: "pwr-mcq-p4-q08",
            question: "Which redraft best changes TELLING into SHOWING?",
            options: [
              "'I was nervous at the airport.' → 'I was very, very nervous at the airport.'",
              "'I was nervous at the airport.' → 'I felt anxious and worried at the airport.'",
              "'I was nervous at the airport.' → 'At the airport, nervousness overwhelmed me.'",
              "'I was nervous at the airport.' → 'At passport control I practised my smile in the glass.'",
            ],
            answerIndex: 3,
            hint: "Which version gives an action you can picture?",
            explanation: "Practising a smile in the glass at passport control is a concrete action that implies nervousness without naming it. The other redrafts only intensify or swap the abstract emotion word.",
            guideRef: "drafting-redrafting",
          },
          {
            id: "pwr-mcq-p4-q09",
            question: "Which is the most effective EVALUATION sentence?",
            options: [
              "My poem is really good and I am proud of it.",
              "I think my poem is perfect and I would not change anything.",
              "The ending works because the drawer image returns from stanza two, but stanza three is weaker as its details feel random, so I would replace the flip-flops with a detail linked to belonging.",
              "Some parts are good and some parts are bad.",
            ],
            answerIndex: 2,
            hint: "Look for a judgement, a reason, a weakness AND a specific fix.",
            explanation: "The option ‘The ending works because the drawer image returns from stanza two,…’ makes a balanced judgement with evidence, identifies a specific weakness and proposes a concrete improvement. Claiming perfection ‘I think my poem is perfect and I would not change anything.’ shows no critical awareness, and the option ‘Some parts are good and some parts…’ is too vague to earn credit.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-mcq-p4-q10",
            question: "A student writes: 'I used enjambment in stanza 4.' What is MOST needed to improve this?",
            options: [
              "A longer list of other techniques used",
              "A quotation and an explanation of the effect the enjambment creates",
              "A definition of the word 'stanza'",
              "A comment on the font size",
            ],
            answerIndex: 1,
            hint: "Technique-spotting alone earns little.",
            explanation: "Naming a technique earns very little; marks come from quoting it and explaining its effect and purpose. Listing more techniques ‘A longer list of other techniques used’ would add breadth but still no depth.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-mcq-p4-q11",
            question: "Why should you read your draft ALOUD during redrafting?",
            options: [
              "To hear clumsy rhythms, accidental rhymes and where the natural pauses fall",
              "Because poems are only marked when performed",
              "To make the poem longer",
              "To memorise it for the test",
            ],
            answerIndex: 0,
            hint: "Your ear catches what your eye misses.",
            explanation: "Reading aloud reveals rhythm problems, tongue-twisting sounds, unintended rhymes and where line breaks naturally fall. Written poems are marked on the page too; the point is to improve the writing, not perform it.",
            guideRef: "drafting-redrafting",
          },
          {
            id: "pwr-mcq-p4-q12",
            question: "Which is the most sensible ORDER for writing a poem?",
            options: [
              "Write the commentary → write the poem → generate ideas",
              "Choose a rhyme scheme → find rhyming words → think of a subject",
              "Generate ideas → draft freely → shape and cut → sharpen and read aloud → redraft",
              "Write the final draft → generate ideas → choose a title",
            ],
            answerIndex: 2,
            hint: "Raw material first, polishing last.",
            explanation: "Ideas come first, then a free draft, then shaping, cutting and sharpening. Choosing rhymes before a subject ‘Choose a rhyme scheme → find rhyming words → think of a subject’ is a recipe for forced rhyme.",
            guideRef: "drafting-redrafting",
          },
          {
            id: "pwr-mcq-p4-q13",
            question: "Why do commentaries reward discussion of REDRAFTING?",
            options: [
              "Because examiners want to know how long you spent",
              "Because it proves the poem was not copied from the internet",
              "Because it shows your choices were deliberate and that you understand what makes writing better",
              "Because the first draft is always the best",
            ],
            answerIndex: 2,
            hint: "What does a before-and-after comparison reveal about the writer?",
            explanation: "Explaining a redraft shows conscious crafting: you can identify a weakness, fix it and say why the fix works. Time spent is not assessed, and first drafts are rarely the best.",
            guideRef: "drafting-redrafting",
          },
          {
            id: "pwr-mcq-p4-q14",
            question: "Which approach to the TECHNIQUES section of a commentary is better?",
            options: [
              "List as many techniques as possible in one sentence",
              "Explore two or three key techniques in depth, each with a quotation and its effect",
              "Only mention techniques you did NOT use",
              "Copy the definitions of each technique from a glossary",
            ],
            answerIndex: 1,
            hint: "Depth beats breadth.",
            explanation: "Analysing a few key choices in depth — quotation, effect, link to purpose — earns more than listing many. Definitions alone show knowledge of terms, not understanding of your poem.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-mcq-p4-q15",
            question: "A student writes: 'The reader will definitely feel sad.' Which revision is more appropriate for a commentary?",
            options: [
              "'Everyone who reads it will cry.'",
              "'The reader must feel sad.'",
              "'I hoped the reader would sense the speaker's quiet sadness through the image of the empty drawer.'",
              "'Sadness is felt.'",
            ],
            answerIndex: 2,
            hint: "Can you guarantee how every reader responds?",
            explanation: "Tentative language ('I hoped… would sense') acknowledges that readers respond differently, and pointing to the specific image makes the claim analytical. The option ‘'Everyone who reads it will cry.'’ and the option ‘The reader must feel sad.’ overclaim; the option ‘Sadness is felt.’ is vague and abstract.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-mcq-p4-q16",
            question: "Your point is: 'The pantoum's repetition mirrors the slow, repeated way skills are passed down.' Which quotation from 'Pantoum for My Grandmother's Kitchen' BEST supports it?",
            options: [
              "'She folds the dumplings, pinch by pinch.'",
              "'The kettle starts its thin, high song.'",
              "'Her radio hums in Hokkien.'",
              "'a village I have never seen'",
            ],
            answerIndex: 0,
            hint: "Which line shows a repeated, careful action being taught?",
            explanation: "'She folds the dumplings, pinch by pinch' shows a repeated, patient skill, and the line itself repeats in the next stanza. The kettle line is also repeated (it opens and closes the poem), but it does not show a skill being passed down.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-mcq-p4-q17",
            question: "Which anthology poem would MOST naturally influence a poem about fearing you are losing your family's language?",
            options: [
              "Sujata Bhatt, 'Search for My Tongue'",
              "Grace Nichols, 'Hurricane Hits England'",
              "Alfred, Lord Tennyson, 'The Eagle'",
              "Wilfred Owen, 'Dulce et Decorum Est'",
            ],
            answerIndex: 0,
            hint: "Which poem is about a 'mother tongue'?",
            explanation: "Bhatt's poem explores the fear of losing her mother tongue (Gujarati) while living in another language, and ends with it growing back. Nichols' poem is about identity and place too, but focuses on a storm reconnecting the speaker with the Caribbean, not on language loss.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-mcq-p4-q18",
            extract: "Talk to me Huracan\n(Grace Nichols, 'Hurricane Hits England')",
            question: "Which technique does this line use?",
            options: ["Onomatopoeia", "Enjambment", "Apostrophe (direct address to the hurricane)", "Sibilance"],
            answerIndex: 2,
            hint: "Who is the speaker talking to — and can it answer?",
            explanation: "The speaker addresses the hurricane directly, naming it after a Caribbean storm god: apostrophe. It makes the storm a living presence connected to her Caribbean roots. The line contains no imitated sound and no line break.",
            guideRef: "choosing-form",
          },
          {
            id: "pwr-mcq-p4-q19",
            question: "John Agard's 'Half-Caste' repeatedly uses the phrase 'Explain yuself', written in non-standard, phonetic spelling. What is the main effect?",
            options: [
              "It shows the poet cannot spell standard English.",
              "It makes the poem a sonnet.",
              "It hides the speaker's identity from the reader.",
              "It captures a Caribbean speaking voice and challenges the listener directly, asserting the speaker's identity",
            ],
            answerIndex: 3,
            hint: "Spelling as a deliberate choice.",
            explanation: "The phonetic spelling puts the speaker's Caribbean voice on the page and turns the poem into a direct, confident challenge to anyone who uses the label 'half-caste'. It is a deliberate choice, not an error, and it reveals identity rather than hiding it.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-mcq-p4-q20",
            question: "During redrafting a student realises the full rhymes in her poem are forcing awkward word order. Which commentary comment shows the MOST sophisticated decision?",
            options: [
              "'I kept the rhymes because poems are supposed to rhyme.'",
              "'I removed every line that rhymed.'",
              "'I switched to half-rhymes such as 'stone / gone', which kept a quiet music but freed me to choose words for meaning, so the voice sounds natural rather than sing-song.'",
              "'I added more rhymes so the reader would not notice the awkward ones.'",
            ],
            answerIndex: 2,
            hint: "Look for a decision that keeps a benefit AND fixes the problem — with a reason.",
            explanation: "The option ‘'I switched to half-rhymes such as 'stone / gone', which kept a…’ identifies the problem, chooses a precise solution (half-rhyme), gives an example and explains the effect: sound is kept, meaning is freed. Removing every rhyming line ‘'I removed every line that rhymed.'’ is drastic and unexplained.",
            guideRef: "drafting-redrafting",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "pwr-qa-p1",
        title: "Written Paper 1",
        questions: [
          {
            id: "pwr-qa-p1-q01",
            question: "Name THREE different strategies for generating ideas for an identity poem, and give a specific example of material each one might produce.",
            marks: 3,
            hint: "Think objects, places, sounds, memories, sayings, 'I am from' lists.",
            modelAnswer:
              "1. An objects-that-matter list: for example, my grandfather's watch that still runs ten minutes slow.\n2. A sounds-of-home list: for example, the rice cooker clicking to 'warm' and the afternoon thunder.\n3. An 'I am from' list, inspired by George Ella Lyon: for example, 'I am from Sunday dim sum and Monday spelling tests'.",
            markScheme: [
              { point: "Strategy 1 named with a specific example (e.g. objects that matter)", keywords: ["object", "objects", "watch", "bangle", "passport", "key", "photo"] },
              { point: "Strategy 2 named with a specific example (e.g. sounds of home / places)", keywords: ["sound", "sounds", "hear", "place", "places", "map", "kitchen"] },
              { point: "Strategy 3 named with a specific example (e.g. memory list / 'I am from' / sayings)", keywords: ["i am from", "memory", "memories", "i remember", "saying", "language", "phrase"] },
            ],
            commonError: "Naming strategies with no example, or giving abstract examples ('my culture') that show the strategy has not actually been used.",
            guideRef: "finding-ideas",
          },
          {
            id: "pwr-qa-p1-q02",
            extract: "I love my grandmother very much.",
            question: "Rewrite this line using concrete imagery so that the love is SHOWN, not told. Then explain what your rewrite does.",
            marks: 3,
            hint: "What does the love look like in an action, a habit or an object?",
            modelAnswer:
              "Rewrite: 'Every Sunday I wind my grandmother's wool / while she counts the stitches out loud in Cantonese.'\nExplanation: The word 'love' has gone; instead a shared, patient routine (winding wool, counting stitches) shows closeness, and the detail of Cantonese adds a link to heritage. The reader infers the love from the time they spend together.",
            markScheme: [
              { point: "Removes the abstract word 'love' / the told emotion", keywords: ["removed", "has gone", "gone", "no longer says", "instead", "without saying", "not tell", "doesn't say"] },
              { point: "Rewrite contains a specific concrete action, object or sensory detail", keywords: ["wool", "hands", "kitchen", "sunday", "cooking", "routine", "hair", "tea"] },
              { point: "Explains that the reader infers the feeling from the image", keywords: ["shows", "infer", "closeness", "picture", "imagine", "implies", "suggests"] },
            ],
            commonError: "Swapping 'love' for another abstract or clichéd phrase ('she means the world to me', 'my heart is full').",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-qa-p1-q03",
            extract: "When I left, my heart was as heavy as lead.",
            question: "Identify the cliché in this line, explain why it weakens the poem, and replace it with a fresh image of your own.",
            marks: 3,
            hint: "Ask 'heavy like what, exactly, in MY life?'",
            modelAnswer:
              "The cliché is 'heavy as lead' (with 'my heart was heavy'). It weakens the poem because readers have met it so often that their eyes slide over it; it creates no picture and could belong to anyone. A fresh replacement: 'When I left, I carried my sadness like the last bag of rice from the cupboard — too heavy to lift, too precious to leave.'",
            markScheme: [
              { point: "Identifies the cliché ('heavy as lead' / heavy heart)", keywords: ["heavy as lead", "as heavy as lead", "heavy heart", "heart was heavy", "lead"] },
              { point: "Explains why clichés weaken writing (overused, no impact, not personal)", keywords: ["overused", "worn out", "used so often", "no impact", "predictable", "anyone", "familiar", "stale"] },
              { point: "Offers a fresh, specific replacement image", keywords: ["like", "as if", "fresh", "rice", "suitcase", "bag", "my own", "new image"] },
            ],
            commonError: "Replacing one cliché with another ('my heart was broken into a million pieces').",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-qa-p1-q04",
            question: "Explain the difference between an abstract noun and a concrete noun, giving one example of each.",
            marks: 2,
            hint: "Can you touch it, see it, hear it?",
            modelAnswer:
              "An abstract noun names an idea, quality or feeling that cannot be perceived with the senses, such as 'belonging'. A concrete noun names something physical you can see, hear, touch, taste or smell, such as 'a jade bangle'.",
            markScheme: [
              { point: "Abstract noun defined (idea/feeling) with example", keywords: ["idea", "feeling", "cannot touch", "can't touch", "emotion", "belonging", "love", "identity"] },
              { point: "Concrete noun defined (can be sensed) with example", keywords: ["senses", "touch", "see", "physical", "object", "bangle", "passport", "table"] },
            ],
            commonError: "Thinking concrete nouns must be hard or solid like 'concrete'; 'steam' and 'thunder' are concrete too.",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-qa-p1-q05",
            question: "Write a four-line 'I am from' stanza about your own life. It should include at least one object, one sound and one place or person.",
            marks: 4,
            hint: "Repeat 'I am from' at least twice, and make every detail specific enough that only you could have written it.",
            modelAnswer:
              "I am from the clatter of mahjong tiles after midnight,\nfrom Auntie Mei's sandals slapping up the stairs,\nI am from a lunchbox that smelled of fish sauce\nand the boy who held his nose, then asked for some.",
            markScheme: [
              { point: "Uses the 'I am from' frame / anaphora", keywords: ["i am from", "i'm from", "anaphora", "repetition", "repeated"] },
              { point: "Includes a specific sound", keywords: ["clatter", "click", "hum", "slap", "ring", "drum", "hiss", "sound"] },
              { point: "Includes a specific object", keywords: ["lunchbox", "tiles", "sandals", "bangle", "passport", "key", "photo", "bowl"] },
              { point: "Includes a specific place or person (named or precise)", keywords: ["auntie", "uncle", "grandmother", "grandfather", "mum", "dad", "kitchen", "stairs"] },
            ],
            commonError: "Filling the frame with abstractions ('I am from love and kindness') instead of objects, sounds and people.",
            guideRef: "finding-ideas",
          },
          {
            id: "pwr-qa-p1-q06",
            question: "Explain why a poet writing about identity might choose to leave a word from another language untranslated. Refer to an anthology poem if you can.",
            marks: 3,
            hint: "Think about who understands the word, and who does not.",
            modelAnswer:
              "Leaving a word untranslated presents the culture from the inside, as the speaker actually lives it, rather than explaining it for an outsider. It can also make readers who do not know the word feel briefly excluded, sharing the speaker's experience of being between languages. Sujata Bhatt does something similar in 'Search for My Tongue' by including Gujarati script, so the reader literally sees the mother tongue they cannot read.",
            markScheme: [
              { point: "Shows the culture/identity from the inside, authentically", keywords: ["authentic", "inside", "real", "own voice", "identity", "culture", "heritage"] },
              { point: "Makes the reader feel like an outsider / excluded", keywords: ["outsider", "excluded", "left out", "don't understand", "confused", "alienated", "feel what"] },
              { point: "Refers to an anthology example (e.g. Bhatt / Agard)", keywords: ["bhatt", "search for my tongue", "gujarati", "agard", "half-caste", "nichols", "huracan"] },
            ],
            commonError: "Saying the poet 'didn't know the English word' — it is always a deliberate choice.",
            guideRef: "finding-ideas",
          },
          {
            id: "pwr-qa-p1-q07",
            extract: "from my grandmother's jade bangle\ntapping the table like a question\nshe never quite asks.",
            question: "Analyse how these lines use imagery to suggest the grandmother's feelings.",
            marks: 4,
            hint: "Consider the object (jade), the sound (tapping), the simile and the enjambment.",
            modelAnswer:
              "The lines use a concrete object, the 'jade bangle', which carries cultural associations, to represent the grandmother and her heritage. The sound image of it 'tapping the table' suggests restlessness, and the simile 'like a question' turns the sound into an unspoken worry. The enjambment delays the final line, 'she never quite asks', so the reader waits for a question that never comes, implying tension or distance between grandmother and grandchild, perhaps a fear that the child is drifting from their culture.",
            markScheme: [
              { point: "Comments on the jade bangle as a concrete/cultural object", keywords: ["jade", "bangle", "object", "cultural", "heritage", "tradition"] },
              { point: "Analyses the sound image 'tapping' (restless / impatient)", keywords: ["tapping", "sound", "restless", "impatient", "nervous", "habit"] },
              { point: "Analyses the simile 'like a question'", keywords: ["simile", "like a question", "question", "worry", "unspoken", "wondering"] },
              { point: "Comments on enjambment/structure or on generational distance", keywords: ["enjambment", "line break", "never quite asks", "delay", "distance", "generation", "drifting", "tension"] },
            ],
            commonError: "Spotting the simile but not explaining what the 'question' might be or why it is never asked.",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-qa-p1-q08",
            question: "Choose an object that matters to you or your family. Explain how it could represent an aspect of identity in a poem, and suggest one line featuring it.",
            marks: 3,
            hint: "Describe the object precisely, say what it stands for, then write the line.",
            modelAnswer:
              "Object: my mother's recipe book, written half in Tamil and half in English, with turmeric stains on the pages. It could represent a family identity that lives between two languages, and the stains show that the culture is used every day, not just kept on a shelf. Line: 'Mum's recipes switch languages halfway through a sentence, / yellow with fingerprints of turmeric.'",
            markScheme: [
              { point: "Names a specific, precisely described object", keywords: ["recipe", "book", "watch", "bangle", "passport", "photo", "key", "ring"] },
              { point: "Explains what aspect of identity it represents (symbol)", keywords: ["represents", "symbol", "symbolises", "stands for", "identity", "heritage", "culture", "belonging"] },
              { point: "Provides a line of poetry using concrete detail", keywords: ["verse", "stains", "yellow", "fingerprints", "smell", "colour", "sound", "cracked"] },
            ],
            commonError: "Choosing an object but describing it vaguely ('a special necklace') so it cannot carry any specific meaning.",
            guideRef: "finding-ideas",
          },
          {
            id: "pwr-qa-p1-q09",
            question: "Write THREE lines about a place that matters to you. Each line must appeal to a DIFFERENT sense, and you must label which sense each line uses.",
            marks: 3,
            hint: "Sight, sound, smell, taste, touch — pick three.",
            modelAnswer:
              "Sound: 'The MRT doors chime their two notes, then sigh shut.'\nSmell: 'Somewhere a durian has been opened, and the whole carriage knows it.'\nTouch: 'The pole is still warm from the last hand that held it.'",
            markScheme: [
              { point: "A line clearly appealing to one sense, labelled", keywords: ["sound", "hear", "chime", "smell", "scent", "sight", "see"] },
              { point: "A second line appealing to a different sense, labelled", keywords: ["smell", "taste", "touch", "warm", "cold", "rough", "sight"] },
              { point: "A third line appealing to another different sense, with concrete detail", keywords: ["touch", "taste", "sound", "warm", "bitter", "sweet", "texture"] },
            ],
            commonError: "Writing three sight images and labelling them as different senses.",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-qa-p1-q10",
            question: "Explain the advice 'narrow your focus' for writing an identity poem, with an example of a narrowed topic.",
            marks: 2,
            hint: "Big topic → small window.",
            modelAnswer:
              "'Narrow your focus' means choosing one small, specific moment, object or scene rather than trying to cover a huge topic like 'my culture' or 'my whole life'. For example, instead of writing about Chinese New Year in general, write about the moment your grandfather presses a red packet into your hand and says the same blessing he says every year.",
            markScheme: [
              { point: "Explains narrowing to one specific moment/object rather than a big theme", keywords: ["one moment", "specific", "small", "single", "one object", "one scene", "instead of"] },
              { point: "Gives a narrowed example", keywords: ["for example", "afternoon", "moment", "red packet", "dumpling", "kitchen", "one day"] },
            ],
            commonError: "Giving an example that is still too broad ('my holidays', 'my religion').",
            guideRef: "finding-ideas",
          },
          {
            id: "pwr-qa-p1-q11",
            extract: "I am from two passports in a drawer,\none blue, one red,\nthe same boy in both\ntrying hard not to blink.",
            question: "Evaluate how effectively this stanza presents the speaker's identity. Consider imagery, structure and what is left unsaid.",
            marks: 5,
            hint: "Judge: what works, why, and is there any limitation?",
            modelAnswer:
              "This stanza is highly effective because it presents a complex, double identity through simple concrete objects rather than abstract statements. The two passports symbolise official belonging to two nations, and the colours 'one blue, one red' are set side by side in a short, balanced line, as if the speaker is weighing them. The phrase 'the same boy in both' insists that the person is unchanged even though the documents differ, suggesting identity is more than nationality. The final image, 'trying hard not to blink', is the most powerful: it recalls the stiffness of a passport photograph but also implies the effort of performing an acceptable identity for officials. Much is left unsaid — we are never told how the speaker feels — which makes the reader do the work of inferring pressure and anxiety. A possible limitation is that passports are a fairly familiar symbol in poems about migration, but the specific detail of not blinking keeps it fresh.",
            markScheme: [
              { point: "Analyses the passports as a symbol of double/national identity", keywords: ["symbol", "two countries", "double", "nationality", "dual", "official"] },
              { point: "Comments on structure (short balanced line / stanza shape / enjambment)", keywords: ["short line", "balanced", "one blue, one red", "structure", "enjambment", "line break"] },
              { point: "Analyses 'the same boy in both' (identity beyond documents)", keywords: ["same boy", "unchanged", "same person", "more than", "both"] },
              { point: "Analyses 'trying hard not to blink' (pressure / performance)", keywords: ["blink", "pressure", "perform", "effort", "nervous", "stiff", "photo"] },
              { point: "Makes an evaluative judgement (e.g. shown not told / possible limitation)", keywords: ["effective", "successful", "powerful", "limitation", "however", "unsaid", "infer", "familiar"] },
            ],
            commonError: "Explaining what the stanza means without ever judging HOW WELL it works — 'evaluate' requires a judgement.",
            guideRef: "concrete-imagery",
          },
          {
            id: "pwr-qa-p1-q12",
            question: "'Identity poems should avoid big abstract words like \"belonging\" and \"culture\" entirely.' How far do you agree? Give reasons and examples.",
            marks: 4,
            hint: "Consider where an abstract word might EARN its place — e.g. after concrete images, in a title, or made concrete by metaphor.",
            modelAnswer:
              "I largely agree, because abstract words name feelings without creating them; a poem that says 'I struggle with my culture' gives the reader nothing to see. Concrete details, such as two passports in a drawer, let readers feel the struggle themselves. However, I do not agree that abstract words must be avoided entirely. An abstract word can be powerful if the concrete images have already earned it, or if it is made physical through metaphor, as Emily Dickinson does in '“Hope” is the thing with feathers'. A single abstract word in a title can also frame the images that follow. So the real rule is not 'never use abstract words' but 'never let them do the work that images should do'.",
            markScheme: [
              { point: "Agrees in part: abstract words tell rather than show", keywords: ["tell", "telling", "vague", "no picture", "abstract", "doesn't create", "general"] },
              { point: "Supports with a concrete alternative/example", keywords: ["passport", "bangle", "concrete", "image", "example", "detail", "object"] },
              { point: "Counter-argument: abstract words can work if earned / made concrete / in a title", keywords: ["however", "earned", "metaphor", "dickinson", "hope", "title", "sometimes", "can work"] },
              { point: "Reaches a balanced, reasoned conclusion", keywords: ["overall", "conclusion", "balance", "rule", "ultimately", "therefore", "depends"] },
            ],
            commonError: "Agreeing completely without considering any counter-example, so the answer is one-sided.",
            guideRef: "concrete-imagery",
          },
        ],
      },
      {
        id: "pwr-qa-p2",
        title: "Written Paper 2",
        passage: {
          id: "pantoum-paper",
          title: "Pantoum for My Grandmother's Kitchen",
          source: "Original poem written for this app (pantoum)",
          text:
            "The kettle starts its thin, high song.\nShe folds the dumplings, pinch by pinch.\nHer radio hums in Hokkien.\nI only understand the tune.\n\nShe folds the dumplings, pinch by pinch.\nHer fingers move like they remember.\nI only understand the tune;\nthe words slide past me, warm as steam.\n\nHer fingers move like they remember\na village I have never seen.\nThe words slide past me, warm as steam.\nI try to fold one. It falls apart.\n\nA village I have never seen\nhums from her radio in Hokkien.\nI try again. It holds this time.\nThe kettle starts its thin, high song.",
          note: "Questions 1–3 and 9 refer to this poem. The other questions test your knowledge of poetic forms.",
        },
        questions: [
          {
            id: "pwr-qa-p2-q01",
            question: "Using examples from the poem, explain how the pantoum's pattern of repetition works.",
            marks: 3,
            hint: "Track where lines 2 and 4 of stanza one reappear, then look at the last stanza.",
            modelAnswer:
              "In a pantoum, lines 2 and 4 of each stanza become lines 1 and 3 of the next. For example, line 2, 'She folds the dumplings, pinch by pinch', and line 4, 'I only understand the tune', return as lines 1 and 3 of stanza two. In the final stanza, the unused lines 1 and 3 of the first stanza come back: the Hokkien radio line returns (slightly varied) and the poem ends with its opening line, 'The kettle starts its thin, high song', so it comes full circle.",
            markScheme: [
              { point: "States the rule: lines 2 and 4 become lines 1 and 3 of the next stanza", keywords: ["2 and 4", "two and four", "lines 1 and 3", "next stanza", "repeated"] },
              { point: "Gives an accurate example from the poem", keywords: ["pinch by pinch", "folds the dumplings", "understand the tune", "fingers move", "warm as steam"] },
              { point: "Explains the final stanza / circular ending", keywords: ["final stanza", "last stanza", "first line", "kettle", "circular", "full circle", "ends"] },
            ],
            commonError: "Saying 'lines are repeated' without explaining WHICH lines and WHERE they reappear.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-qa-p2-q02",
            question: "Explain why the pantoum form suits this poem's ideas about heritage and memory.",
            marks: 4,
            hint: "Think about repeated actions, memory looping, the circular ending and the form's Malay origin.",
            modelAnswer:
              "The pantoum suits the poem because its repetition mirrors the way traditions are learned: through the same actions repeated, like folding dumplings 'pinch by pinch', until they stick. The returning lines also imitate memory, which loops back and sees the same moments in new light, such as the grandmother's fingers moving 'like they remember'. The circular ending, closing on the kettle's 'thin, high song', suggests that the ritual continues beyond the poem and will be repeated by the next generation. Finally, the pantoum developed from the Malay pantun, so the form has roots in the same region as the poem's Hokkien-speaking family, which makes it a culturally fitting choice.",
            markScheme: [
              { point: "Repetition mirrors repeated actions / learning a tradition", keywords: ["repeated", "repetition", "routine", "practice", "pinch by pinch", "learn", "ritual"] },
              { point: "Repetition mirrors memory looping back", keywords: ["memory", "remember", "loop", "return", "comes back", "recall"] },
              { point: "Circular ending suggests continuation / cycle of generations", keywords: ["circular", "cycle", "ends where", "first line", "continues", "generation", "kettle"] },
              { point: "Cultural link: Malay pantun origin", keywords: ["malay", "pantun", "origin", "malaysia", "singapore", "region", "southeast asia"] },
            ],
            commonError: "Describing the repetition pattern again (as in Q1) without linking it to the poem's MEANING.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-qa-p2-q03",
            question: "In stanza three the speaker says 'I try to fold one. It falls apart.' In the final stanza this becomes 'I try again. It holds this time.' Analyse the effect of this change.",
            marks: 4,
            hint: "What does the reader EXPECT in a pantoum — and what happens instead?",
            modelAnswer:
              "Because the pantoum trains the reader to expect lines to return exactly, the altered line stands out sharply and becomes the poem's turning point, or volta. 'It falls apart' suggests failure and perhaps the speaker's fear that their link to their grandmother's culture is fragile. 'It holds this time' shows success: the dumpling, and symbolically the tradition, now holds together. The short, simple sentences make the moment quiet and understated, so the speaker's growth is shown through an action rather than announced. The change suggests that heritage can be passed on through patience and repetition, even when language ('I only understand the tune') is still a barrier.",
            markScheme: [
              { point: "Notes the change breaks the expected repetition, so it stands out", keywords: ["expect", "break", "breaks the pattern", "variation", "stands out", "change", "different"] },
              { point: "Interprets 'falls apart' as failure/fragile connection", keywords: ["falls apart", "failure", "fail", "fragile", "struggle", "can't"] },
              { point: "Interprets 'holds this time' as success / tradition passed on (symbolic)", keywords: ["holds", "success", "passed on", "inherit", "symbol", "tradition", "learned"] },
              { point: "Comments on effect of short sentences / understated turning point", keywords: ["short sentence", "simple", "understated", "quiet", "volta", "turning point", "turn"] },
            ],
            commonError: "Treating the change as a mistake in the form rather than a deliberate, meaningful variation.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-qa-p2-q04",
            question: "Describe FOUR features of a Shakespearean sonnet.",
            marks: 4,
            hint: "Length, metre, rhyme scheme, structure/turn.",
            modelAnswer:
              "A Shakespearean sonnet has 14 lines. It is usually written in iambic pentameter: five da-DUM beats and ten syllables per line. It rhymes ABAB CDCD EFEF GG, which divides it into three quatrains and a final rhyming couplet. It often contains a volta, or turn, frequently in the final couplet, which twists or resolves the argument, as in Sonnet 18 where the poem itself becomes what keeps the beloved alive.",
            markScheme: [
              { point: "14 lines", keywords: ["14", "fourteen", "14-line", "fourteen-line"] },
              { point: "Iambic pentameter / ten syllables", keywords: ["iambic", "pentameter", "ten syllables", "10 syllables", "da-dum"] },
              { point: "Rhyme scheme ABAB CDCD EFEF GG / three quatrains + couplet", keywords: ["abab", "cdcd", "efef", "gg", "quatrain", "couplet"] },
              { point: "Volta / turn (often in the couplet)", keywords: ["volta", "turn", "shift", "twist", "change"] },
            ],
            commonError: "Giving the Petrarchan rhyme scheme (ABBA ABBA…) or saying the volta always comes at line 9 in a Shakespearean sonnet.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-qa-p2-q05",
            question: "Write a haiku about a place connected to your identity. Then label the season word and the 'cut'.",
            marks: 3,
            hint: "5-7-5 syllables; one present moment; use a dash for the cut.",
            modelAnswer:
              "Haiku:\nfirst rain on the field —\nmy brother's football boots steam\nby the kitchen door\n\nSyllables: 5-7-5. Season word: 'first rain' (the start of the monsoon). Cut: the dash after line 1, which sets the rain beside the steaming boots so the reader links the weather to home.",
            markScheme: [
              { point: "Follows 5-7-5 syllables in three lines", keywords: ["5-7-5", "five", "seven", "syllables", "three lines"] },
              { point: "A concrete, present-tense image (no explaining)", keywords: ["image", "boots", "rain", "steam", "roof", "present", "moment"] },
              { point: "Labels a season word (kigo) and a cut (kireji / dash)", keywords: ["season", "kigo", "cut", "kireji", "dash", "monsoon"] },
            ],
            commonError: "Getting the syllables right but writing a statement ('I love my home so much') rather than an image.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-qa-p2-q06",
            question: "Explain FOUR features of the ghazal form.",
            marks: 4,
            hint: "Couplets, radif, qafia, takhallus, origins, mood.",
            modelAnswer:
              "A ghazal is made of self-contained couplets (called sher), each of which could almost stand alone. Every couplet ends with the same repeated word or phrase, the radif. Just before the radif comes a rhyming word, the qafia. In the final couplet the poet traditionally includes their own name or pen-name, the takhallus. The form began in Arabic poetry and flourished in Persian and Urdu poetry (Rumi, Hafez, Ghalib), and it is associated with longing and loss.",
            markScheme: [
              { point: "Independent couplets (sher)", keywords: ["couplet", "couplets", "sher", "two lines", "stand alone"] },
              { point: "Repeated end word/phrase (radif)", keywords: ["radif", "repeated word", "refrain", "same word", "repeated phrase"] },
              { point: "Rhyme before the refrain (qafia) OR poet's name in last couplet (takhallus)", keywords: ["qafia", "rhyme", "takhallus", "name", "signature", "pen-name"] },
              { point: "Origins (Arabic/Persian/Urdu) or theme of longing", keywords: ["arabic", "persian", "urdu", "rumi", "hafez", "ghalib", "longing", "loss"] },
            ],
            commonError: "Confusing the ghazal with the pantoum (repeated lines in quatrains) or the haiku.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-qa-p2-q07",
            question: "What is a dramatic monologue, and why might it be a good choice for a poem about identity?",
            marks: 3,
            hint: "Define it, then think about voice and perspective.",
            modelAnswer:
              "A dramatic monologue is a poem spoken by a single character, who is not necessarily the poet, to a silent listener; the speaker reveals their personality, often more than they intend. It suits identity poems because it lets the poet explore identity from an unexpected perspective, such as a grandparent, a migrant or even an object like a suitcase. This can reveal feelings indirectly and create empathy, as the reader hears the experience from the inside.",
            markScheme: [
              { point: "Defines: single speaker/character", keywords: ["single", "one speaker", "character", "persona", "voice", "not the poet"] },
              { point: "Defines: silent listener / reveals character", keywords: ["silent listener", "listener", "reveals", "doesn't reply", "addressed", "audience"] },
              { point: "Explains suitability for identity (perspective / empathy / indirect revelation)", keywords: ["perspective", "empathy", "inside", "indirect", "object", "suitcase", "point of view"] },
            ],
            commonError: "Defining it as 'a poem with lots of drama' or forgetting the silent listener.",
            guideRef: "choosing-form",
          },
          {
            id: "pwr-qa-p2-q08",
            question: "Give TWO advantages and TWO challenges of writing an identity poem in free verse.",
            marks: 4,
            hint: "Freedom of voice vs the need for deliberate line breaks and shape.",
            modelAnswer:
              "Advantages: (1) Free verse follows the natural rhythms of speech, so the poem can sound like the speaker's real voice, including code-switching and dialect. (2) With no rhyme scheme, every word can be chosen for meaning, which avoids forced rhyme. Challenges: (1) Without metre or rhyme, the poem can become shapeless prose chopped into lines, so every line break must be deliberate. (2) The poet has to create music through other devices, such as anaphora, assonance and rhythm, or the poem may feel flat.",
            markScheme: [
              { point: "Advantage: natural voice / speech rhythms", keywords: ["natural", "speech", "voice", "conversational", "real", "dialect"] },
              { point: "Advantage: words chosen for meaning, no forced rhyme", keywords: ["meaning", "no rhyme", "forced rhyme", "freedom", "flexible", "choose any word"] },
              { point: "Challenge: line breaks must be deliberate / risk of chopped prose", keywords: ["line breaks", "prose", "shapeless", "random", "deliberate", "chopped"] },
              { point: "Challenge: must create music/structure in other ways", keywords: ["music", "sound", "rhythm", "flat", "structure", "repetition", "anaphora"] },
            ],
            commonError: "Saying free verse is 'easier because there are no rules' — the lack of rules makes craft MORE important.",
            guideRef: "choosing-form",
          },
          {
            id: "pwr-qa-p2-q09",
            question: "Analyse the line 'I only understand the tune.' What does it suggest about the speaker's identity, and why is it effective that this line repeats?",
            marks: 4,
            hint: "What is the difference between understanding a tune and understanding words?",
            modelAnswer:
              "The line suggests the speaker can feel the emotion and rhythm of the Hokkien songs but cannot understand the words, a metaphor for a partial connection to their heritage language. 'Only' emphasises the limit and carries a note of regret. Because the line repeats (as line 4, then as line 3 of stanza two), the reader hears it as a refrain, like the chorus of a song, so the form itself imitates the experience of hearing a tune again and again without grasping its words. The repetition also stresses that this gap is ongoing, which makes the final success with the dumpling more meaningful: some heritage can be passed on even without the language.",
            markScheme: [
              { point: "Interprets: feels the emotion/music but not the words — partial connection to heritage", keywords: ["partial", "not the words", "can't understand", "language", "heritage", "disconnect", "gap"] },
              { point: "Comments on 'only' (limitation / regret)", keywords: ["only", "limit", "regret", "sad", "loss", "merely"] },
              { point: "Explains the effect of repetition as a refrain / song-like", keywords: ["refrain", "repeat", "repetition", "chorus", "song", "echo"] },
              { point: "Links to wider meaning / ending (heritage passed on despite language gap)", keywords: ["ending", "dumpling", "holds", "passed on", "still", "despite", "ongoing"] },
            ],
            commonError: "Taking the line literally (the speaker likes music) and missing the language-and-heritage metaphor.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-qa-p2-q10",
            question: "Compare how a list poem and a sonnet would each shape a poem about moving house. Which would you choose, and why?",
            marks: 4,
            hint: "Think about what each form FEELS like and what it is good at.",
            modelAnswer:
              "A list poem would pile up the objects being packed or left behind, using anaphora such as 'We packed…', so the poem feels as cluttered and hurried as a move, and the final item could carry the biggest emotional weight. A sonnet would compress the move into 14 tightly controlled lines with a volta, perhaps turning from the old house in the octave to the new one in the sestet, which suits an argument or a before-and-after reflection. I would choose the list poem, because moving house is chaotic and made of countless small things, and the accumulation could build to one surprising last item — such as the height marks on the door frame that cannot be packed.",
            markScheme: [
              { point: "Explains the list poem's effect (accumulation / clutter / anaphora)", keywords: ["list", "accumulation", "pile", "anaphora", "cluttered", "objects", "catalogue"] },
              { point: "Explains the sonnet's effect (compression / control / volta / before-after)", keywords: ["sonnet", "14", "volta", "turn", "control", "octave", "before and after"] },
              { point: "Makes a clear choice", keywords: ["i would choose", "i would", "choose", "prefer", "better"] },
              { point: "Justifies the choice by linking form to meaning", keywords: ["fits", "suits", "mirrors", "chaotic", "reflects", "matches", "enacts"] },
            ],
            commonError: "Describing the forms but never actually choosing, or choosing without linking the form to the subject.",
            guideRef: "choosing-form",
          },
          {
            id: "pwr-qa-p2-q11",
            question: "'Breaking a form's rules is always a weakness.' Discuss this statement, referring to the final stanza of 'Pantoum for My Grandmother's Kitchen'.",
            marks: 5,
            hint: "When does a rule-break look careless, and when does it look deliberate?",
            modelAnswer:
              "I disagree with the statement. A rule-break is a weakness when it is careless — for example, a sonnet with fifteen lines because the writer lost count, or a pantoum whose lines repeat randomly. However, a deliberate break can be the most powerful moment in a poem, precisely because the form has created an expectation. In the pantoum, the reader expects 'I try to fold one. It falls apart.' to return exactly, so when it changes to 'I try again. It holds this time.', the difference leaps out and becomes the poem's turning point, showing the speaker finally inheriting a skill. The same happens with the slight variation of the Hokkien radio line. This shows that rules are useful not just to follow but to break meaningfully. Therefore, rule-breaking is only a weakness when the writer cannot explain why they did it; in a commentary, a deliberate break should be explained and justified.",
            markScheme: [
              { point: "Takes a clear position (e.g. disagrees)", keywords: ["disagree", "not always", "i disagree", "partly agree", "do not agree"] },
              { point: "Acknowledges when rule-breaking IS a weakness (careless/accidental)", keywords: ["careless", "accidental", "random", "lost count", "mistake", "only a weakness"] },
              { point: "Explains that forms create expectation so a deliberate break stands out", keywords: ["expect", "expectation", "stands out", "noticeable", "surprise", "deliberate"] },
              { point: "Uses the pantoum's changed line as evidence", keywords: ["falls apart", "holds this time", "try again", "changed line", "final stanza"] },
              { point: "Concludes: deliberate, explained breaks are a strength", keywords: ["therefore", "conclusion", "overall", "justify", "explain", "strength", "purpose"] },
            ],
            commonError: "Agreeing automatically because 'rules are rules', or citing the pantoum without explaining WHY the break works.",
            guideRef: "traditional-forms",
          },
          {
            id: "pwr-qa-p2-q12",
            question: "You are planning a poem about your grandmother's language, which you are slowly forgetting. Choose a form for it (sonnet, haiku, ghazal, pantoum, list poem, dramatic monologue or free verse) and justify your choice in detail.",
            marks: 4,
            hint: "Link specific features of the form to specific ideas in your planned poem.",
            modelAnswer:
              "I would choose a ghazal. Its couplets are self-contained, like the fragments of a language that I only half remember, each a separate memory. The radif could be a word in my grandmother's language — for example, the word she uses for 'eat' — repeated at the end of every couplet, so that even as the poem moves on, that one word keeps returning, just as some words survive when others are forgotten. The ghazal's traditional mood of longing and loss suits a poem about losing a language. Finally, by placing my name in the final couplet, as the takhallus tradition suggests, I could end by asking whether my name still sounds right in her language, linking language loss to identity.",
            markScheme: [
              { point: "Clearly chooses one form", keywords: ["i would choose", "ghazal", "pantoum", "sonnet", "haiku", "free verse", "list poem", "monologue"] },
              { point: "Links a structural feature to an idea (e.g. couplets as fragments / repetition as memory)", keywords: ["couplet", "fragment", "repetition", "repeated", "loop", "structure", "stanza"] },
              { point: "Links a second feature of the form to the subject", keywords: ["radif", "refrain", "volta", "turn", "season", "silent listener", "circular", "name"] },
              { point: "Explains the overall effect / mood fit (longing, loss, memory)", keywords: ["longing", "loss", "memory", "forgetting", "mood", "suits", "mirrors"] },
            ],
            commonError: "Choosing a form for a general reason ('it's my favourite') instead of matching its features to the poem's ideas.",
            guideRef: "choosing-form",
          },
        ],
      },
      {
        id: "pwr-qa-p3",
        title: "Written Paper 3",
        questions: [
          {
            id: "pwr-qa-p3-q01",
            extract: "I am from a suitcase that is never\nquite unpacked,",
            question: "Define enjambment and explain the effect of the enjambment in these lines.",
            marks: 3,
            hint: "Which word sits at the edge of the line — and what happens when you read on?",
            modelAnswer:
              "Enjambment is when a sentence runs on over a line break without punctuation. Here the break after 'never' leaves that word at the edge of the white space, so for a moment it sounds absolute: the suitcase is never unpacked, the speaker never settles. The next line, 'quite unpacked', softens it, and this hesitation mirrors the speaker's half-settled life, always ready to move.",
            markScheme: [
              { point: "Accurate definition of enjambment", keywords: ["runs on", "run on", "continues", "over the line", "line break", "without punctuation", "next line"] },
              { point: "Identifies the emphasis on 'never' at the line end", keywords: ["never", "end of the line", "emphasis", "emphasises", "spotlight", "stands out"] },
              { point: "Explains the effect: hesitation / unsettled / softened by 'quite'", keywords: ["quite", "hesitation", "unsettled", "never settles", "softens", "moving", "half"] },
            ],
            commonError: "Defining enjambment correctly but giving a generic effect ('it makes it flow') instead of linking to the word 'never'.",
            guideRef: "line-breaks",
          },
          {
            id: "pwr-qa-p3-q02",
            extract: "My father phones his brother every Sunday and they laugh in a language I am still learning.",
            question: "Set out this sentence as poetry in TWO different ways (different line breaks). Then explain which version you prefer and why.",
            marks: 4,
            hint: "Try putting different words at the ends of lines. Which word deserves the spotlight?",
            modelAnswer:
              "Version 1:\nMy father phones his brother every Sunday\nand they laugh in a language\nI am still learning.\n\nVersion 2:\nMy father phones his brother every Sunday and they laugh\nin a language I am still\nlearning.\n\nI prefer Version 2. Ending the first line on 'laugh' spotlights the joy the speaker can hear but not share. Breaking after 'still' makes the reader pause and briefly hear 'I am still' — quiet, left out — before the final, isolated word 'learning' arrives on its own line, emphasising that the process is unfinished and that the speaker is alone in it.",
            markScheme: [
              { point: "Version 1 with deliberate line breaks", keywords: ["version 1", "version one", "first version", "1:"] },
              { point: "Version 2 with different line breaks", keywords: ["version 2", "version two", "second version", "2:"] },
              { point: "States a preference", keywords: ["prefer", "better", "choose", "more effective", "stronger"] },
              { point: "Explains the effect of specific line-end words/pauses", keywords: ["laugh", "still", "learning", "pause", "emphasis", "spotlight", "isolated", "end of the line"] },
            ],
            commonError: "Breaking lines in two random places and then saying 'it flows better' without referring to any particular word.",
            guideRef: "line-breaks",
          },
          {
            id: "pwr-qa-p3-q03",
            extract: "Season of mists and mellow fruitfulness,\n(John Keats, 'To Autumn')",
            question: "Identify TWO sound devices in this line and explain the mood they create.",
            marks: 3,
            hint: "Listen for repeated 'm' sounds and repeated 's' sounds.",
            modelAnswer:
              "The line uses alliteration of the soft 'm' sound in 'mists' and 'mellow', and sibilance in 'Season' and 'mists' (and the final 's' sounds). These soft, humming and hissing sounds slow the line down and create a drowsy, warm, gentle mood, like the hazy, ripe end of summer the poem describes.",
            markScheme: [
              { point: "Identifies alliteration of 'm' (mists, mellow)", keywords: ["alliteration", "m sound", "mists and mellow", "mellow", "'m'"] },
              { point: "Identifies sibilance ('s' sounds)", keywords: ["sibilance", "sibilant", "s sound", "'s'", "season", "hissing"] },
              { point: "Explains the mood (soft, slow, drowsy, warm, gentle)", keywords: ["soft", "slow", "drowsy", "gentle", "warm", "calm", "soothing", "hazy"] },
            ],
            commonError: "Listing the devices with no comment on how they make the line SOUND or feel.",
            guideRef: "sound-and-rhyme",
          },
          {
            id: "pwr-qa-p3-q04",
            extract: "My home is far across the sea,\nIt is the only place for me,\nI miss it more than you can see,\nAnd that is very sad for me.",
            question: "Explain FOUR weaknesses in this stanza caused by forced rhyme or telling, then rewrite the stanza in 3–4 lines of your own.",
            marks: 4,
            hint: "Look at the repeated rhyme sound, the repeated word, the vague feelings and the ending.",
            modelAnswer:
              "Weaknesses: (1) every line ends on the same 'ee' rhyme, which makes it sing-song and predictable; (2) 'me' is rhymed with itself, showing the rhyme is controlling the words; (3) 'more than you can see' is a filler phrase chosen for the rhyme; (4) the feelings are told ('I miss it', 'very sad') with no concrete image.\nRewrite:\n'Across the sea my mother's window still faces east.\nI keep my watch on her time,\ntwo hours behind every room I stand in.'",
            markScheme: [
              { point: "Identifies the monotonous/predictable rhyme sound", keywords: ["sing-song", "same rhyme", "predictable", "monotonous", "every line", "ee sound"] },
              { point: "Identifies filler / words chosen only for rhyme", keywords: ["filler", "only to rhyme", "for the rhyme", "you can see", "forced", "me with me"] },
              { point: "Identifies telling of feelings / no concrete image", keywords: ["tells", "telling", "very sad", "miss it", "abstract", "no image", "vague"] },
              { point: "Provides a rewrite with concrete detail and natural language", keywords: ["window", "watch", "rewrite", "image", "concrete", "half-rhyme", "time zone"] },
            ],
            commonError: "Rewriting with new rhymes that are just as forced ('far across the foam / I miss my lovely home').",
            guideRef: "sound-and-rhyme",
          },
          {
            id: "pwr-qa-p3-q05",
            extract: "Of heat the express-train drew up there\nUnwontedly. It was late June.\n(Edward Thomas, 'Adlestrop')",
            question: "Explain the effect of the caesura in the second line.",
            marks: 3,
            hint: "Where is the full stop, and what does the rhythm do?",
            modelAnswer:
              "The full stop after 'Unwontedly' creates a caesura in the middle of the line, so the rhythm halts abruptly. This mirrors the train's sudden, unexpected stop at the empty station. The short, flat sentence that follows, 'It was late June.', adds to the sense of stillness and heat, as though time itself has paused.",
            markScheme: [
              { point: "Identifies the caesura / full stop mid-line", keywords: ["caesura", "full stop", "mid-line", "middle of the line", "after unwontedly"] },
              { point: "Explains the rhythm halts / pause", keywords: ["halt", "stops", "pause", "abrupt", "break", "interrupts"] },
              { point: "Links to the train stopping / stillness / time pausing", keywords: ["train", "stillness", "still", "silence", "time", "unexpected", "mirrors"] },
            ],
            commonError: "Confusing caesura with enjambment (which is the run-on from the previous line).",
            guideRef: "line-breaks",
          },
          {
            id: "pwr-qa-p3-q06",
            extract: "So long as men can breathe or eyes can see,\n(Shakespeare, Sonnet 18)",
            question: "Show how this line is written in iambic pentameter, and explain one effect of the metre here.",
            marks: 3,
            hint: "Mark the stressed syllables in capitals and count them.",
            modelAnswer:
              "so LONG / as MEN / can BREATHE / or EYES / can SEE: there are ten syllables arranged in five iambs (unstressed, stressed), so it is iambic pentameter. The steady heartbeat rhythm sounds calm and certain, which suits the couplet's confident claim that the poem will last as long as there are people to read it; the stresses also fall on the key words 'long', 'breathe', 'see'.",
            markScheme: [
              { point: "Marks stresses correctly (LONG, MEN, BREATHE, EYES, SEE)", keywords: ["long", "men", "breathe", "eyes", "see", "stressed"] },
              { point: "States ten syllables / five iambs", keywords: ["ten syllables", "10 syllables", "five iambs", "5 iambs", "five beats", "da-dum"] },
              { point: "Explains an effect (steady, heartbeat, confident, emphasis on key words)", keywords: ["steady", "heartbeat", "confident", "certain", "regular", "calm", "emphasis"] },
            ],
            commonError: "Counting syllables but not identifying which ones are stressed.",
            guideRef: "sound-and-rhyme",
          },
          {
            id: "pwr-qa-p3-q07",
            question: "Suggest TWO alternative titles for the poem 'Inventory' and explain what each would add to the poem.",
            marks: 3,
            hint: "Try a phrase from the poem, a question or a title that adds new information.",
            modelAnswer:
              "Title 1: 'Where Are You Really From?' — lifting this phrase from the poem would make the hostile question the frame for everything, so the whole poem reads as the speaker's answer. Title 2: 'Customs Declaration' — this adds a new layer, suggesting the speaker is listing their identity for an official, as at an airport, which links to the passports and the suitcase. Both are more charged than 'Inventory', though 'Inventory' has the advantage of quietly suggesting a careful list of everything a person owns.",
            markScheme: [
              { point: "First alternative title with explanation of what it adds", keywords: ["really from", "title 1", "first title", "question", "frame", "phrase from"] },
              { point: "Second alternative title with explanation of what it adds", keywords: ["title 2", "second title", "customs", "declaration", "passport", "airport", "adds"] },
              { point: "Comment on the effect on the reader's reading of the poem", keywords: ["reads as", "frames", "suggests", "expectation", "layer", "meaning", "charged"] },
            ],
            commonError: "Suggesting titles that just label the topic ('Identity Poem') without explaining what they add.",
            guideRef: "titles-endings",
          },
          {
            id: "pwr-qa-p3-q08",
            extract: "The wrinkled sea beneath him crawls;\nHe watches from his mountain walls,\nAnd like a thunderbolt he falls.\n(Tennyson, 'The Eagle', final stanza)",
            question: "Explain why the final line is an effective ending.",
            marks: 3,
            hint: "What happens to the eagle — and to the poem — at the same moment?",
            modelAnswer:
              "The final line is effective because the ending enacts the action: the poem stops at the very moment the eagle dives, so the form 'falls' silent with it. The simile 'like a thunderbolt' adds speed, power and violence, contrasting with the slow, crawling sea of the first line of the stanza. Surrounding 'thunderbolt' with short monosyllables ('he falls') and ending on the full rhyme makes the line land with a sense of impact and finality.",
            markScheme: [
              { point: "The poem ends as the eagle falls — form enacts meaning", keywords: ["ends as", "enacts", "stops", "mirrors", "same moment", "falls"] },
              { point: "Analyses the simile 'like a thunderbolt' (speed/power)", keywords: ["simile", "thunderbolt", "speed", "power", "sudden", "violent"] },
              { point: "Comments on contrast, sound or rhyme for impact", keywords: ["contrast", "crawls", "monosyllab", "rhyme", "impact", "final", "short"] },
            ],
            commonError: "Explaining the simile but missing that the poem ENDS on the fall.",
            guideRef: "titles-endings",
          },
          {
            id: "pwr-qa-p3-q09",
            extract: "…and the steam rises from my grandmother's pot.\nThis poem has taught me that family and culture\nare the most important things in life.",
            question: "Explain why this ending is weak, then rewrite the last two lines to create a stronger ending.",
            marks: 3,
            hint: "Delete the moral. End on an image, an action or a turn.",
            modelAnswer:
              "The ending is weak because it switches from a concrete image (steam rising) to an abstract moral summary, telling the reader what to think and repeating, in vague words, what the images should already show. It also mentions 'this poem', breaking the spell. Rewrite: '…and the steam rises from my grandmother's pot. / She hands me the ladle. / This time she does not hold on.' The new ending uses a small action to suggest that responsibility for the family's food — and culture — is being handed on.",
            markScheme: [
              { point: "Identifies the moral summary / telling", keywords: ["moral", "summary", "summarises", "tells", "telling", "lesson", "preachy"] },
              { point: "Notes abstract words / repeats what images show", keywords: ["abstract", "family and culture", "vague", "repeats", "already shown", "obvious"] },
              { point: "Rewrite ends on a concrete image, action or turn", keywords: ["ladle", "hands", "image", "action", "concrete", "rewrite", "turn"] },
            ],
            commonError: "Rewriting the moral in different words ('I now realise how much my heritage matters') instead of replacing it with an image.",
            guideRef: "titles-endings",
          },
          {
            id: "pwr-qa-p3-q10",
            question: "Write TWO or THREE lines about a thunderstorm that use onomatopoeia AND either sibilance or plosives. Label the devices and explain their effect.",
            marks: 3,
            hint: "Choose sounds to match the storm: hushing rain? exploding thunder?",
            modelAnswer:
              "Lines: 'The sky cracks open. Thunder bangs its fists on the roof, / then the rain begins its long, slow shushing / over the sleeping street.'\nDevices: onomatopoeia in 'cracks', 'bangs' and 'shushing'; plosives in 'bangs', 'fists' and 'cracks' (hard b, k sounds); sibilance in 'slow shushing… sleeping street'.\nEffect: the plosives make the thunder sound violent and sudden, while the sibilance afterwards softens the mood, so the sounds trace the storm passing.",
            markScheme: [
              { point: "Uses and labels onomatopoeia", keywords: ["onomatopoeia", "crack", "bang", "shush", "drum", "boom", "hiss"] },
              { point: "Uses and labels sibilance or plosives", keywords: ["sibilance", "plosive", "plosives", "s sound", "b sound", "hard sounds", "soft sounds"] },
              { point: "Explains the effect of the sounds", keywords: ["violent", "sudden", "soft", "calm", "harsh", "mood", "loud", "gentle"] },
            ],
            commonError: "Labelling devices that are not actually in the lines (e.g. claiming sibilance with only one 's' word).",
            guideRef: "sound-and-rhyme",
          },
          {
            id: "pwr-qa-p3-q11",
            question: "'Rhyme is old-fashioned and modern poets should avoid it.' How far do you agree? Refer to examples and to your own writing.",
            marks: 5,
            hint: "Consider forced rhyme vs skilful rhyme, half-rhyme, internal rhyme, song lyrics and Sonnet 18.",
            modelAnswer:
              "I partly agree. Rhyme can sound old-fashioned when it is forced: twisted word order and words chosen only for their sound make a poem feel like a greeting card, which is why many modern poets, including most of the Identity and Culture anthology, write in free verse. However, rhyme is not old-fashioned in itself: rap and song lyrics are packed with it, and they sound modern because they use half-rhyme and internal rhyme rather than predictable end-rhymes. Used skilfully, rhyme also gives an ending authority, as the couplet of Sonnet 18 shows: 'see' and 'thee' make the claim feel sealed. In my own drafting, I found that full rhyme forced me into words like 'bemused', so I switched to half-rhymes, which kept some music without controlling my meaning. So rather than avoiding rhyme, modern poets should use it deliberately, choosing subtler forms when full rhyme would sound forced.",
            markScheme: [
              { point: "Takes a clear, nuanced position", keywords: ["partly agree", "disagree", "agree", "to some extent", "i think"] },
              { point: "Explains when rhyme fails (forced rhyme: word order, filler, sing-song)", keywords: ["forced", "sing-song", "greeting card", "word order", "filler", "predictable"] },
              { point: "Counter-example: rhyme in modern songs/rap or half/internal rhyme", keywords: ["rap", "song", "lyrics", "half-rhyme", "internal rhyme", "slant"] },
              { point: "Refers to a poem example (e.g. Sonnet 18 couplet)", keywords: ["sonnet 18", "couplet", "shakespeare", "see", "thee", "tennyson", "eagle"] },
              { point: "Refers to own writing / reaches a reasoned conclusion", keywords: ["my own", "in my poem", "i found", "my draft", "overall", "therefore", "deliberately"] },
            ],
            commonError: "Arguing only one side, or making general claims with no example from a poem or from your own drafting.",
            guideRef: "sound-and-rhyme",
          },
          {
            id: "pwr-qa-p3-q12",
            extract: "Opening line: 'I am from the click of the rice cooker'\nMiddle (stanza 2): 'I am from two passports in a drawer,'\nEnding:\n'I am from all of it.\nAsk me again\nand I will open the drawer\nand show you both.'",
            question: "Analyse how the ending of 'Inventory' links back to earlier parts of the poem, and explain why this makes it effective.",
            marks: 4,
            hint: "Which object returns? What has changed about the 'I am from' pattern? Who is 'you'?",
            modelAnswer:
              "The ending returns to the drawer from stanza two, so the passports reappear without being named: 'show you both'. This creates a circular structure, and the reader now understands 'both' as both passports and both identities. The anaphora 'I am from' reaches its last and shortest form, 'I am from all of it', which no longer lists contradictions but accepts them all. The direct address 'Ask me again' answers the hostile question 'Where are you really from?' from stanza four; instead of feeling interrogated, the speaker turns the question into an invitation. The final short lines slow the pace, so the poem ends calmly, on an image of openness rather than a summary.",
            markScheme: [
              { point: "Identifies the return of the drawer/passports ('both')", keywords: ["drawer", "passports", "both", "stanza two", "returns", "circular"] },
              { point: "Comments on the final form of the anaphora 'I am from all of it'", keywords: ["all of it", "anaphora", "i am from", "accepts", "shortest", "whole"] },
              { point: "Links 'Ask me again' to the earlier question / direct address", keywords: ["ask me again", "really from", "question", "direct address", "invitation", "addresses"] },
              { point: "Explains why this is effective (resolution / image not summary / pace)", keywords: ["effective", "resolution", "calm", "confident", "image", "not a summary", "short lines", "openness"] },
            ],
            commonError: "Noticing that the drawer returns but not explaining what 'both' now means or why the return matters.",
            guideRef: "titles-endings",
          },
        ],
      },
      {
        id: "pwr-qa-p4",
        title: "Written Paper 4",
        passage: {
          id: "inventory-paper",
          title: "Inventory",
          source: "Original poem written for this app (free-verse list poem)",
          text:
            "I am from the click of the rice cooker\nswitching itself to warm at six,\nfrom my grandmother's jade bangle\ntapping the table like a question\nshe never quite asks.\n\nI am from two passports in a drawer,\none blue, one red,\nthe same boy in both\ntrying hard not to blink.\n\nI am from thunder that comes every afternoon\non time, like a strict teacher,\nfrom flip-flops lined up at the door,\nfrom lah on the end of my sentences\nand cheers on the end of my emails.\n\nI am from a suitcase that is never\nquite unpacked,\nfrom airport carpets I could draw from memory,\nfrom Where are you really from?\nasked so often\nI have started to ask it too.\n\nI am from all of it.\nAsk me again\nand I will open the drawer\nand show you both.",
          note: "For this paper, imagine that YOU wrote 'Inventory' and are now writing its commentary. 'lah' is a Singlish particle; 'cheers' is British English.",
        },
        questions: [
          {
            id: "pwr-qa-p4-q01",
            question: "List and briefly explain the FIVE main things a strong poetry commentary should cover (besides form and structure).",
            marks: 5,
            hint: "I Invent Fresh Tunes, Rewrite, Evaluate — leave out 'Fresh' (form) for this question.",
            modelAnswer:
              "1. Intentions: what the poem is about and what I wanted the reader to think or feel.\n2. Influences: which anthology poems or poets shaped my choices, and exactly what I borrowed or adapted.\n3. Techniques: key language and sound choices, quoted from my poem, with their intended effects.\n4. Redrafting: specific before-and-after changes and why they improve the poem.\n5. Evaluation: what works well, what is weaker and what I would change next.",
            markScheme: [
              { point: "Intentions (purpose / desired effect on reader)", keywords: ["intention", "intentions", "intended", "purpose", "aim", "wanted the reader"] },
              { point: "Influences (named anthology poems / poets)", keywords: ["influence", "influences", "inspired", "anthology", "poet", "borrowed"] },
              { point: "Techniques with quotations and effects", keywords: ["technique", "techniques", "language", "quote", "quotation", "effect", "devices"] },
              { point: "Redrafting (before and after changes)", keywords: ["redraft", "redrafting", "draft", "before and after", "changes", "revision", "edited"] },
              { point: "Evaluation (strengths, weaknesses, improvements)", keywords: ["evaluation", "evaluate", "strengths", "weakness", "improve", "success", "next time"] },
            ],
            commonError: "Forgetting redrafting and evaluation, which are often the sections that separate good commentaries from excellent ones.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-qa-p4-q02",
            question: "Write the opening paragraph of a commentary on 'Inventory', explaining your intentions.",
            marks: 4,
            hint: "Subject → intended feeling for the reader → method (how the poem creates it) → why it matters to you.",
            modelAnswer:
              "In 'Inventory' I set out to explore what it feels like to grow up between countries, belonging to several places and fully to none. I wanted readers to feel both the richness and the strain of that position: the comfort of familiar sounds such as the rice cooker's click, but also the pressure of the question 'Where are you really from?'. Rather than explaining these feelings, I tried to build them out of an inventory of objects, sounds and phrases, so that the reader assembles my identity piece by piece, much as a customs officer goes through a suitcase. This mattered to me because, like many students in Singapore, I am asked about my identity far more often than I get to describe it in my own words.",
            markScheme: [
              { point: "States the poem's subject/theme", keywords: ["between countries", "identity", "belonging", "third culture", "two places", "grow up"] },
              { point: "States the intended effect on the reader", keywords: ["wanted readers", "wanted the reader", "i hoped", "reader to feel", "intended", "aimed"] },
              { point: "Explains the method (objects/sounds rather than explanation)", keywords: ["objects", "sounds", "inventory", "list", "rather than explaining", "concrete", "images"] },
              { point: "Uses first person and a brief embedded quotation or personal reason", keywords: ["i set out", "i wanted", "i tried", "mattered to me", "rice cooker", "really from"] },
            ],
            commonError: "Retelling what happens in each stanza instead of stating the PURPOSE and intended EFFECT.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-qa-p4-q03",
            question: "Write a commentary paragraph explaining your use of anaphora ('I am from…') in 'Inventory'.",
            marks: 4,
            hint: "Name it, quote it, explain the rhythm and the effect, link it to identity — and mention your influence.",
            modelAnswer:
              "The most important structural choice in 'Inventory' is the anaphora of 'I am from', which begins each of the five stanzas. I borrowed this frame from George Ella Lyon's 'Where I'm From', but I used it to create tension: the repeated phrase sounds confident, almost like a pledge, yet what follows it keeps contradicting itself, from 'lah on the end of my sentences' to 'cheers on the end of my emails'. The rhythm of repetition builds momentum, so the reader feels the sheer number of places and habits that make up one person. Finally, the anaphora shrinks to its shortest form, 'I am from all of it', which I intended as a moment of acceptance: the speaker stops sorting and claims everything.",
            markScheme: [
              { point: "Names anaphora and quotes the repeated phrase", keywords: ["anaphora", "i am from", "repetition", "repeated phrase"] },
              { point: "Explains the rhythmic/structural effect (chant, pledge, momentum)", keywords: ["chant", "pledge", "rhythm", "momentum", "builds", "list", "confident"] },
              { point: "Explains tension/contradiction or link to identity with quotation", keywords: ["lah", "cheers", "contradict", "tension", "identity", "both", "many"] },
              { point: "Mentions influence (Lyon) or the final 'all of it' development", keywords: ["lyon", "where i'm from", "all of it", "acceptance", "influence", "borrowed"] },
            ],
            commonError: "Explaining what anaphora is in general without discussing its specific effect in THIS poem.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-qa-p4-q04",
            extract: "Weak commentary sentence: 'I used enjambment to make it good.'",
            question: "Rewrite this weak commentary sentence into a strong one about 'Inventory', and explain what you improved.",
            marks: 3,
            hint: "Add a location, a quotation with a slash, and a specific effect.",
            modelAnswer:
              "Improved: 'In stanza four, the enjambment in 'a suitcase that is never / quite unpacked' leaves 'never' hanging at the end of the line, so for a moment it sounds permanent before 'quite' softens it — mirroring a life that is always half-ready to move.'\nWhat I improved: I located the technique, embedded a quotation with a slash for the line break, and replaced the vague 'make it good' with a precise effect linked to the poem's theme.",
            markScheme: [
              { point: "Includes an accurate embedded quotation (with slash)", keywords: ["/", "never", "quite unpacked", "suitcase", "tapping the table"] },
              { point: "Explains a precise effect of the enjambment", keywords: ["hanging", "emphasis", "pause", "permanent", "softens", "delays", "spotlight"] },
              { point: "Explains the improvement (location / quotation / precise effect replaces vague)", keywords: ["vague", "precise", "located", "quotation", "specific", "instead of", "replaced"] },
            ],
            commonError: "Making the sentence longer without adding a quotation or a specific effect.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-qa-p4-q05",
            extract: "Draft 1 of stanza 2:\n'I have two passports, I feel confused,\nTwo different countries, I am bemused.'\n\nFinal draft:\n'I am from two passports in a drawer,\none blue, one red,\nthe same boy in both\ntrying hard not to blink.'",
            question: "Write a redrafting paragraph for your commentary explaining the changes between these two versions and why the final draft is better.",
            marks: 4,
            hint: "Rhyme, abstract vs concrete, form/line length, the final image.",
            modelAnswer:
              "My most significant redraft was stanza two. In my first draft, 'I feel confused' and 'I am bemused' simply told the reader my emotions, and 'bemused' was chosen only because it rhymed with 'confused', which made the couplet sound forced and sing-song. In the final draft I abandoned rhyme so that I could choose words for meaning, and I replaced the abstract feelings with concrete objects: 'two passports in a drawer, / one blue, one red'. I also shortened the lines, so each detail is given space and the reader slows down, as if examining the passports. The new final image, 'the same boy in both / trying hard not to blink', suggests the pressure of performing an acceptable identity, so the feeling of confusion is now shown rather than stated, and the reader works it out for themselves.",
            markScheme: [
              { point: "Identifies forced rhyme in draft 1 ('confused/bemused')", keywords: ["forced", "rhyme", "bemused", "sing-song", "only because it rhymed", "couplet"] },
              { point: "Identifies telling/abstract emotion replaced by concrete objects", keywords: ["told", "telling", "abstract", "concrete", "passports", "drawer", "objects"] },
              { point: "Comments on changed line length / structure", keywords: ["shorter", "shortened", "line length", "short lines", "slows", "space", "line breaks"] },
              { point: "Explains effect of the new final image", keywords: ["blink", "pressure", "perform", "photo", "shown", "infer", "same boy"] },
            ],
            commonError: "Saying the final draft is 'better' and 'more descriptive' without identifying WHAT changed and WHY it works.",
            guideRef: "drafting-redrafting",
          },
          {
            id: "pwr-qa-p4-q06",
            question: "Explain how to quote your own poem correctly inside a commentary sentence, including how to show line breaks.",
            marks: 2,
            hint: "Quotation marks… and a symbol.",
            modelAnswer:
              "Put the words from your poem in quotation marks and embed them in your own sentence so it still reads grammatically, keeping quotations short. If the quotation crosses a line break, show it with a forward slash ( / ), for example: the enjambment in 'a suitcase that is never / quite unpacked' creates hesitation.",
            markScheme: [
              { point: "Quotation marks and embedding / keeping quotations short", keywords: ["quotation marks", "inverted commas", "embed", "embedded", "short", "within the sentence"] },
              { point: "Slash to show line breaks", keywords: ["slash", "/", "forward slash", "line break"] },
            ],
            commonError: "Copying out whole stanzas as block quotations instead of embedding short phrases.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-qa-p4-q07",
            question: "Write TWO sentences for your commentary explaining how an anthology poem influenced a specific choice in 'Inventory'.",
            marks: 3,
            hint: "Name the poet and poem, name the technique, show how you adapted it.",
            modelAnswer:
              "Sujata Bhatt's 'Search for My Tongue' influenced my decision to include 'lah' and 'cheers' without translating them; just as Bhatt puts Gujarati on the page to show a mother tongue the reader may not understand, I wanted readers who do not know Singlish to feel briefly outside the language, as I sometimes do. However, whereas Bhatt writes about one language threatening another, I adapted the idea to show two kinds of English coexisting in a single sentence, suggesting that my identity is mixed rather than divided.",
            markScheme: [
              { point: "Names an anthology poet and poem", keywords: ["bhatt", "search for my tongue", "agard", "half-caste", "nichols", "dharker", "alvi"] },
              { point: "Identifies the specific technique borrowed", keywords: ["untranslated", "without translating", "language", "dialect", "phonetic", "repetition", "direct address"] },
              { point: "Explains how it was adapted / its effect in 'Inventory'", keywords: ["adapted", "whereas", "lah", "cheers", "outside", "mixed", "my poem"] },
            ],
            commonError: "Writing 'I was influenced by the anthology' without naming a poem or a technique.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-qa-p4-q08",
            question: "Write an evaluation paragraph for 'Inventory', identifying a strength, a weakness and a specific improvement.",
            marks: 4,
            hint: "Be honest and specific. Quote to support each judgement.",
            modelAnswer:
              "I think the poem's greatest strength is its ending: returning to 'the drawer' and offering to 'show you both' transforms the hostile question 'Where are you really from?' into an invitation, giving the poem a calm, confident resolution. The second stanza also works well, as the passport image shows a double identity without naming any emotion. However, the third stanza is weaker. 'Flip-flops lined up at the door' is vivid, but it does not connect clearly to belonging, so the list starts to feel random. In a further draft I would replace it with a detail linked to identity, such as the shoes of visiting relatives from two countries lined up side by side, which would keep the image but sharpen its meaning.",
            markScheme: [
              { point: "Identifies a specific strength with quotation", keywords: ["strength", "works well", "effective", "successful", "show you both", "drawer", "passports"] },
              { point: "Explains WHY the strength works", keywords: ["reason", "transforms", "invitation", "resolution", "shows", "without naming"] },
              { point: "Identifies a specific weakness with reason", keywords: ["weaker", "weakness", "less successful", "random", "flip-flops", "however"] },
              { point: "Proposes a specific improvement", keywords: ["would replace", "would change", "further draft", "next time", "improve", "instead"] },
            ],
            commonError: "Claiming the poem is perfect, or naming a weakness with no suggestion for fixing it.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-qa-p4-q09",
            extract: "from lah on the end of my sentences\nand cheers on the end of my emails.",
            question: "Analyse the effect of these two lines, as you would in a commentary.",
            marks: 4,
            hint: "Code-switching, parallel structure, two kinds of English, what it says about identity.",
            modelAnswer:
              "These lines show the speaker code-switching between two varieties of English: 'lah', a Singlish particle used in casual speech, and 'cheers', a British sign-off used in emails. The parallel structure ('on the end of my sentences' / 'on the end of my emails') places them side by side as equals, suggesting that the speaker is fluent in both worlds rather than torn between them. The contrast between spoken 'sentences' and written 'emails' also hints that each identity has its own setting: one for family and friends, one for school or formal life. Leaving 'lah' unexplained lets readers who know it feel included and others feel briefly outside, mirroring the speaker's experience.",
            markScheme: [
              { point: "Identifies code-switching / two varieties of English", keywords: ["code-switching", "code switching", "singlish", "british", "two languages", "dialect", "varieties"] },
              { point: "Analyses the parallel structure / balance", keywords: ["parallel", "balance", "side by side", "equal", "repetition", "on the end of"] },
              { point: "Interprets what it shows about identity (fluent in both / mixed)", keywords: ["both worlds", "fluent", "mixed", "identity", "belongs", "comfortable", "blend"] },
              { point: "Comments on spoken vs written contexts or untranslated word effect", keywords: ["spoken", "written", "emails", "formal", "casual", "untranslated", "outside"] },
            ],
            commonError: "Simply explaining what 'lah' and 'cheers' mean without analysing why they are placed together.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-qa-p4-q10",
            extract: "from Where are you really from?\nasked so often\nI have started to ask it too.",
            question: "Explain the effect of including this question in the poem, as you would in a commentary.",
            marks: 3,
            hint: "Who asks it, how does it make the speaker feel, and what does the last line reveal?",
            modelAnswer:
              "The question 'Where are you really from?' is one that people with mixed or migrant backgrounds are often asked, and the word 'really' implies that the speaker's first answer is not accepted, which makes the question feel like an interrogation. Placing it inside the 'I am from' list suggests the question itself has become part of the speaker's identity. The final line, 'I have started to ask it too', is the most unsettling: the speaker has begun to doubt themselves, showing how other people's questions can shape how we see ourselves. I set 'asked so often' as a short line on its own to slow the pace and stress the repetition.",
            markScheme: [
              { point: "Explains the implication of 'really' (doubt / interrogation / not accepted)", keywords: ["really", "doubt", "not accepted", "interrogation", "suspicious", "outsider", "challenged"] },
              { point: "Explains that the question has become part of the identity / list", keywords: ["part of", "identity", "list", "i am from", "become", "shaped"] },
              { point: "Analyses 'I have started to ask it too' (self-doubt) or line structure", keywords: ["ask it too", "self-doubt", "doubt themselves", "unsure", "short line", "asked so often"] },
            ],
            commonError: "Treating the question as a real question to the reader rather than as an experience the speaker has repeatedly had.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-qa-p4-q11",
            question: "Is a poet's stated intention the final word on what their poem means? Discuss, with reference to commentary writing.",
            marks: 5,
            hint: "Consider the 'intentional fallacy', readers' interpretations, and what a commentary is actually for.",
            modelAnswer:
              "A poet's stated intention is valuable, but I do not think it is the final word. Intentions explain what the writer was trying to do, which is exactly what a commentary asks for, and they help readers understand deliberate choices such as a broken pantoum line. However, once a poem is written, its words can carry meanings the writer did not plan: a reader might see the drawer in 'Inventory' as a symbol of hiding one identity away, even if I only meant it as a place to keep passports. In 1946 the critics Wimsatt and Beardsley called relying on an author's intention the 'intentional fallacy', arguing that the poem must stand on its own words. A good commentary therefore uses tentative language — 'I intended', 'I hoped readers might' — and, in the evaluation, can acknowledge other readings. So intention explains the craft, but the reader's experience of the words is also part of the meaning.",
            markScheme: [
              { point: "Takes a clear position", keywords: ["not the final word", "i do not think", "i disagree", "partly", "i agree", "to some extent"] },
              { point: "Explains the value of intention (what the commentary is for)", keywords: ["intention", "explains", "deliberate", "choices", "commentary", "craft", "purpose"] },
              { point: "Explains that readers can find unplanned meanings (with example)", keywords: ["readers", "interpret", "unplanned", "did not intend", "other meanings", "symbol", "different"] },
              { point: "Refers to the intentional fallacy or critical debate", keywords: ["intentional fallacy", "wimsatt", "beardsley", "critics", "1946", "stand on its own"] },
              { point: "Concludes with how a commentary should handle this (tentative language / acknowledge readings)", keywords: ["tentative", "i hoped", "acknowledge", "evaluation", "other readings", "therefore", "conclusion"] },
            ],
            commonError: "Arguing that the poet is always right, or that intention is irrelevant, without considering the other side.",
            guideRef: "writing-commentary",
          },
          {
            id: "pwr-qa-p4-q12",
            extract: "rain on the zinc roof —\nmy father's language drumming\nwords I almost know",
            question: "Imagine you wrote this haiku. Write a mini-commentary (150–200 words) covering your intention, the form, two techniques with quotations, and a brief evaluation.",
            marks: 6,
            hint: "Intention → form (5-7-5, cut, season) → technique 1 → technique 2 → evaluation.",
            modelAnswer:
              "In this haiku I wanted to capture the feeling of hearing my father's language every day while only partly understanding it. I chose the haiku because its brevity forced me to find one precise moment rather than explain the feeling; it follows the 5-7-5 pattern, and the dash after 'rain on the zinc roof' acts as a cut, setting the rain beside my father's voice so the reader connects them. The onomatopoeic verb 'drumming' links the two images: the language becomes a steady, physical sound that surrounds me, like rain I cannot shut out. I also used a sensory, concrete detail, the 'zinc roof', which makes the sound metallic and loud and places the poem in a hot, rainy climate, hinting at the monsoon as a season word. The final line, 'words I almost know', leaves the emotion unspoken; 'almost' carries the frustration of nearly belonging. I think the haiku succeeds because nothing is explained, although a stronger season word might root it more clearly in the tradition.",
            markScheme: [
              { point: "States intention (partial understanding of father's language)", keywords: ["wanted", "intended", "father's language", "partly understanding", "aimed", "capture"] },
              { point: "Explains form choices (5-7-5 / brevity / one moment)", keywords: ["5-7-5", "haiku", "brief", "brevity", "one moment", "syllables"] },
              { point: "Explains the cut/dash or season word", keywords: ["dash", "cut", "kireji", "season", "kigo", "monsoon"] },
              { point: "Analyses 'drumming' (onomatopoeia / metaphor) with quotation", keywords: ["drumming", "onomatopoeia", "sound", "rhythm", "steady", "metaphor"] },
              { point: "Analyses a second technique (concrete 'zinc roof' or 'almost')", keywords: ["zinc", "roof", "almost", "concrete", "metallic", "unspoken", "frustration"] },
              { point: "Gives a brief, specific evaluation", keywords: ["succeeds", "successful", "effective", "although", "however", "stronger", "improve"] },
            ],
            commonError: "Spending all the words on the form and never analysing a single word choice, or forgetting the evaluation entirely.",
            guideRef: "writing-commentary",
          },
        ],
      },
    ],
  },
};
