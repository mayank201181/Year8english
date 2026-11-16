import type { Topic } from "../types";

export const poetryToolkit: Topic = {
  id: "poetry-toolkit",
  title: "How Poems Work",
  subject: "Poetry",
  icon: "🔍",
  summary: "Imagery, sound, rhythm, rhyme, form and structure: the poet's toolkit, and how to explain what each tool does.",
  intro:
    "Every poem is a small machine built from words, sounds, line breaks and silences, and every part has been chosen on purpose. In this topic you will learn the poet's whole toolkit, from similes and sibilance to sonnets and the volta, and, more importantly, how to explain what each tool does to a reader. Master this and every poem in the Identity and Culture collection, every unseen poem and every spoken analysis becomes something you can open up with confidence.",

  guide: [
    {
      id: "technique-and-effect",
      heading: "The golden rule: technique + effect, never just spotting",
      body:
        "A poem is a machine for making meaning. Every choice a poet makes (a word, a sound, a line break, a full stop in the middle of a line) is a gear in that machine. Your job as a reader is not to list the gears but to explain **what each one does**.\n\n**Feature spotting** means naming a technique without explaining it: 'Blake uses alliteration.' It earns almost nothing, because anyone with a glossary could write it. **Analysis** means explaining the **effect** of a technique (what it makes us see, hear or feel) and **why** the poet might want that effect.\n\nThe golden formula is **technique + evidence + effect + meaning**:\n- **Technique**: name the device precisely, e.g. *personification*, not just 'language' or 'imagery'.\n- **Evidence**: embed a short quotation (two to six words is ideal) inside your own sentence.\n- **Effect**: zoom in on one word. What are its **connotations** (the associations and feelings a word carries beyond its dictionary meaning)?\n- **Meaning**: link to the poem's **theme** (the central idea a text explores, such as hope, death, power or identity).\n\nCompare these two answers about Emily Dickinson's poem on hope:\n- Weak: 'Dickinson uses a metaphor. This makes the poem more interesting.'\n- Strong: 'Dickinson's metaphor of hope as a bird that ‘perches in the soul’ suggests something light and easily startled; the verb ‘perches’ implies hope could fly off at any moment, yet it chooses to stay inside us.'\n\nThe strong version names the device, quotes precisely, zooms in on a single word and says what the image teaches us about hope.\n\nA useful planning framework is **SMILE**: **S**tructure, **M**eaning, **I**magery, **L**anguage, **E**ffect. Use it as a checklist when you first meet a poem, but remember that **E** (effect) belongs in every sentence you write, not just at the end.",
      diagram:
        '<svg viewBox="0 0 470 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four linked boxes: technique, evidence, effect, meaning"><defs><marker id="ptkA1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs><rect x="8" y="30" width="96" height="60" rx="8" fill="#dbeafe" stroke="#2563eb"/><text x="56" y="56" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Technique</text><text x="56" y="74" font-size="11" text-anchor="middle" fill="#1e3a8a">What is it?</text><rect x="128" y="30" width="96" height="60" rx="8" fill="#fef3c7" stroke="#d97706"/><text x="176" y="56" font-size="13" font-weight="bold" text-anchor="middle" fill="#78350f">Evidence</text><text x="176" y="74" font-size="11" text-anchor="middle" fill="#78350f">Short quote</text><rect x="248" y="30" width="96" height="60" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="296" y="56" font-size="13" font-weight="bold" text-anchor="middle" fill="#14532d">Effect</text><text x="296" y="74" font-size="11" text-anchor="middle" fill="#14532d">How? Zoom in</text><rect x="368" y="30" width="96" height="60" rx="8" fill="#fce7f3" stroke="#db2777"/><text x="416" y="56" font-size="13" font-weight="bold" text-anchor="middle" fill="#831843">Meaning</text><text x="416" y="74" font-size="11" text-anchor="middle" fill="#831843">Why? Theme</text><line x1="104" y1="60" x2="124" y2="60" stroke="#334155" stroke-width="2" marker-end="url(#ptkA1)"/><line x1="224" y1="60" x2="244" y2="60" stroke="#334155" stroke-width="2" marker-end="url(#ptkA1)"/><line x1="344" y1="60" x2="364" y2="60" stroke="#334155" stroke-width="2" marker-end="url(#ptkA1)"/><text x="235" y="116" font-size="12" text-anchor="middle" fill="#475569">Stopping after the first box = feature spotting</text></svg>',
      diagramCaption: "Analysis travels the whole chain. Stopping at 'Technique' is feature spotting and scores very little.",
      keyPoints: [
        "Naming a device is the start of analysis, never the end of it.",
        "Always zoom in on a single word and explore its connotations.",
        "Finish by linking the effect to the poem's theme or the poet's purpose.",
      ],
      thinkDeeper:
        "Two students both write about the same simile. One writes three techniques in one sentence; the other writes about one word for three sentences. Which is likely to score higher, and why might 'less' be 'more' in poetry analysis?",
      discovery: {
        problem:
          "Read these two sentences about the line 'Hope is the thing with feathers'. (A) 'Dickinson uses a metaphor to describe hope.' (B) 'By giving hope feathers, Dickinson makes it seem soft and fragile, something that could be blown away, which makes its survival in the storm more impressive.' Which would a teacher reward more, and what exactly does B do that A does not?",
        idea:
          "B never even names the technique, yet it is far better, because it explains the effect of a precise word ('feathers'), explores its connotations (soft, fragile) and links to the poem's meaning (hope surviving the storm). The best answers name the technique AND do everything B does.",
      },
    },
    {
      id: "imagery",
      heading: "Imagery: pictures made of words",
      body:
        "**Imagery** is language that creates a picture or sensation in the reader's mind, appealing to sight, sound, touch, taste or smell. Poets use several kinds of figurative (non-literal) language to build images:\n\n- **Simile**: a comparison using 'like' or 'as'. 'O my Luve's like a red, red rose' (Robert Burns). Similes keep the two things separate: love is *like* a rose, not a rose.\n- **Metaphor**: a comparison that says one thing *is* another. In 'The Tyger', Blake's tiger is 'burning bright'; it is not literally on fire, but its stripes become flames. A metaphor is bolder than a simile because it fuses the two things.\n- **Extended metaphor**: a metaphor developed across several lines or a whole poem. Dickinson's hope is a bird that perches, sings, survives a gale and never asks for 'a crumb'.\n- **Personification**: giving human qualities to something non-human. In Tennyson's 'The Eagle', 'The wrinkled sea beneath him crawls', as if the sea were an old, slow creature.\n- **Pathetic fallacy**: a kind of personification where weather or nature reflects human feelings. In Keats's 'La Belle Dame sans Merci', 'The sedge has withered from the lake, / And no birds sing', and the dead landscape mirrors the knight's despair.\n- **Symbolism**: an object, colour or creature that stands for a bigger idea. A lamb often symbolises innocence; a storm can symbolise conflict.\n- **Semantic field**: a group of words from the same area of meaning. Wilfred Owen fills 'Anthem for Doomed Youth' with church words (passing-bells, orisons, prayers, choirs, candles), so a soldier's death becomes a funeral the soldiers never got.\n\nWhen you analyse an image, ask three questions: *What two things are being compared? What do they share? What does the comparison make me feel about the subject?*",
      diagram:
        '<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Connotation web around the word feathers"><line x1="210" y1="100" x2="80" y2="40" stroke="#94a3b8" stroke-width="2"/><line x1="210" y1="100" x2="340" y2="40" stroke="#94a3b8" stroke-width="2"/><line x1="210" y1="100" x2="60" y2="125" stroke="#94a3b8" stroke-width="2"/><line x1="210" y1="100" x2="360" y2="125" stroke="#94a3b8" stroke-width="2"/><line x1="210" y1="100" x2="140" y2="180" stroke="#94a3b8" stroke-width="2"/><line x1="210" y1="100" x2="285" y2="180" stroke="#94a3b8" stroke-width="2"/><ellipse cx="210" cy="100" rx="62" ry="24" fill="#fde68a" stroke="#b45309" stroke-width="2"/><text x="210" y="105" font-size="15" font-weight="bold" text-anchor="middle" fill="#78350f">feathers</text><rect x="35" y="26" width="90" height="26" rx="13" fill="#e0f2fe" stroke="#0284c7"/><text x="80" y="44" font-size="12" text-anchor="middle" fill="#0c4a6e">light, airy</text><rect x="295" y="26" width="90" height="26" rx="13" fill="#e0f2fe" stroke="#0284c7"/><text x="340" y="44" font-size="12" text-anchor="middle" fill="#0c4a6e">flight, freedom</text><rect x="10" y="112" width="100" height="26" rx="13" fill="#e0f2fe" stroke="#0284c7"/><text x="60" y="130" font-size="12" text-anchor="middle" fill="#0c4a6e">soft, gentle</text><rect x="310" y="112" width="100" height="26" rx="13" fill="#e0f2fe" stroke="#0284c7"/><text x="360" y="130" font-size="12" text-anchor="middle" fill="#0c4a6e">warmth, comfort</text><rect x="90" y="167" width="100" height="26" rx="13" fill="#fee2e2" stroke="#dc2626"/><text x="140" y="185" font-size="12" text-anchor="middle" fill="#7f1d1d">fragile, delicate</text><rect x="235" y="167" width="100" height="26" rx="13" fill="#e0f2fe" stroke="#0284c7"/><text x="285" y="185" font-size="12" text-anchor="middle" fill="#0c4a6e">a small bird</text></svg>',
      diagramCaption: "Zoom in on one word: a single noun like 'feathers' opens a web of connotations you can write about.",
      keyPoints: [
        "Simile says 'like' or 'as'; metaphor says something IS something else.",
        "Pathetic fallacy is weather or nature mirroring human emotion.",
        "A semantic field is a cluster of related words that builds an atmosphere or idea.",
      ],
      thinkDeeper:
        "Burns could have written 'My love is a red, red rose' (a metaphor) instead of 'like a red, red rose' (a simile). Does the simile make his love seem weaker, more honest, or something else? Argue your case.",
      discovery: {
        problem:
          "Read Dickinson's first stanza in the box below. List every word that belongs to a bird. Then ask: why would a poet describe an invisible feeling as if it were a creature?",
        idea:
          "You should find 'feathers', 'perches' and 'sings' (and later 'Bird' and 'crumb'). Abstract ideas such as hope are hard to picture, so poets make them concrete. A bird lets Dickinson show that hope is small and light, yet alive, musical and able to survive storms. A metaphor developed this far is an extended metaphor.",
      },
      passage: {
        title: "\"Hope\" is the thing with feathers (stanza 1)",
        source: "Emily Dickinson (written c.1861, published 1891)",
        text: "\"Hope\" is the thing with feathers -\nThat perches in the soul -\nAnd sings the tune without the words -\nAnd never stops - at all -",
        note: "Dickinson's dashes are part of her style: they create pauses, hesitations and emphasis.",
      },
    },
    {
      id: "sound",
      heading: "Sound: poems are made to be heard",
      body:
        "Poetry began as something spoken and sung, so poets choose words for their **sound** as well as their meaning. Always read a poem aloud (or mouth it silently in an exam) before you analyse it.\n\n- **Alliteration**: the same consonant sound at the start of nearby words. 'He clasps the crag with crooked hands' (Tennyson): the hard 'c/k' sounds make the eagle's grip feel tight and rough.\n- **Sibilance**: repeated 's', 'sh' or soft 'c' sounds. 'The shrill, demented choirs of wailing shells' (Owen) hisses like shells flying through the air. Sibilance can be soothing (a whisper, the sea) or sinister (a snake, a threat), so always say which.\n- **Assonance**: repeated **vowel** sounds inside nearby words, even when the consonants around them differ. 'Hear the mellow wedding bells' (Edgar Allan Poe): the same short 'e' sound rings through 'mellow', 'wedding' and 'bells', chiming like the bells themselves. (Repeating the *same word*, as in Coleridge's 'Alone, alone, all, all alone', is best called **repetition**, not assonance.)\n- **Consonance**: repeated consonant sounds in the middle or at the end of words, e.g. 'black, cracked rocks', where the 'k' sounds click like breaking stone.\n- **Onomatopoeia**: a word that imitates the sound it describes: 'rattle', 'patter', 'hiss', 'smack'.\n- **Plosives**: the 'explosive' consonants **p, b, t, d, k, g**, made by stopping air and releasing it suddenly. 'Bent double, like old beggars under sacks' (Owen): the heavy 'b' and 'k' sounds feel like exhausted, stumbling steps.\n\nOwen's line 'Only the stuttering rifles' rapid rattle' combines nearly everything: alliteration ('rifles' rapid rattle'), onomatopoeia ('rattle', 'stuttering'), and harsh 't' plosives that imitate machine-gun fire. Notice that you can *hear* the meaning.\n\nThe key skill is to say **what the sound does**: Is it harsh or soft? Fast or slow? Does it imitate something? Does it slow the reader down or speed them up?",
      keyPoints: [
        "Alliteration = first sounds; assonance = vowel sounds; consonance = consonant sounds within or at the end of words.",
        "Sibilance can be gentle or menacing: always say which and why.",
        "Plosives (p, b, t, d, k, g) create harsh, violent or abrupt effects.",
      ],
      thinkDeeper:
        "Someone says, 'Sound effects are just decoration: the poem would mean the same without them.' Using Owen's 'stuttering rifles' rapid rattle', argue against them.",
      discovery: {
        problem:
          "Say these two lines aloud, slowly: (1) 'Only the stuttering rifles' rapid rattle' (2) 'Season of mists and mellow fruitfulness'. Which feels harsh and which feels soft? Which letters are doing the work?",
        idea:
          "Owen's line is packed with hard 't' and 'r' sounds that rattle like gunfire; Keats's line ('To Autumn') is full of soft 's', 'm' and 'f' sounds that feel warm, slow and drowsy. Sound alone can create mood before you even think about meaning.",
      },
    },
    {
      id: "rhythm-metre",
      heading: "Rhythm and metre: the heartbeat of a poem",
      body:
        "Every English word of more than one syllable has a **stressed** syllable (said more strongly) and **unstressed** ones. Say 'a-WAY', 'TI-ger', 'po-ET-ic'. **Rhythm** is the pattern of stresses in a line. When that pattern is regular, we call it **metre**.\n\nThe building block of metre is the **foot**, a small unit of stresses:\n- **Iamb**: unstressed + stressed (da-DUM), as in 'a-WAY'. **Iambic** rhythm sounds natural, like a heartbeat or ordinary speech.\n- **Trochee**: stressed + unstressed (DUM-da), as in 'TI-ger'. **Trochaic** rhythm sounds forceful, chant-like or like a spell.\n- **Anapaest** (da-da-DUM) and **dactyl** (DUM-da-da) are three-syllable feet that feel fast or galloping: 'HALF a league, HALF a league' (Tennyson) gallops like the cavalry charging.\n\nWe count the feet in a line: **tetrameter** = four feet, **pentameter** = five feet. So **iambic pentameter** is five iambs, ten syllables: 'Shall I com-PARE thee TO a SUM-mer's DAY?' (Shakespeare, Sonnet 18). Wordsworth's 'I WAN-dered LONE-ly AS a CLOUD' is **iambic tetrameter**.\n\nBlake's 'TY-ger TY-ger, BURN-ing BRIGHT' is **trochaic**: it begins on a hammer-blow stress, which suits a poem full of hammers, anvils and furnaces.\n\n**Regular rhythm** can create calm, order, song or inevitability. **Irregular rhythm** (or a sudden break in the pattern) can suggest shock, chaos, hesitation or natural speech. Poems written in **free verse** have no fixed metre at all.\n\nYou do not need to scan every line in an exam. You do need to notice when rhythm is doing something: driving forward, slowing down, or breaking.",
      diagram:
        '<svg viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Iambic pentameter: five da-DUM beats in Shall I compare thee to a summer’s day"><text x="240" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">Iambic pentameter: five da-DUMs</text><g font-size="12" text-anchor="middle"><rect x="10" y="32" width="88" height="80" rx="8" fill="#f1f5f9" stroke="#64748b"/><circle cx="36" cy="62" r="7" fill="#93c5fd"/><circle cx="72" cy="62" r="15" fill="#1d4ed8"/><text x="36" y="98" fill="#334155">Shall</text><text x="72" y="98" fill="#1d4ed8" font-weight="bold">I</text><rect x="104" y="32" width="88" height="80" rx="8" fill="#f1f5f9" stroke="#64748b"/><circle cx="130" cy="62" r="7" fill="#93c5fd"/><circle cx="166" cy="62" r="15" fill="#1d4ed8"/><text x="130" y="98" fill="#334155">com</text><text x="166" y="98" fill="#1d4ed8" font-weight="bold">PARE</text><rect x="198" y="32" width="88" height="80" rx="8" fill="#f1f5f9" stroke="#64748b"/><circle cx="224" cy="62" r="7" fill="#93c5fd"/><circle cx="260" cy="62" r="15" fill="#1d4ed8"/><text x="224" y="98" fill="#334155">thee</text><text x="260" y="98" fill="#1d4ed8" font-weight="bold">TO</text><rect x="292" y="32" width="88" height="80" rx="8" fill="#f1f5f9" stroke="#64748b"/><circle cx="318" cy="62" r="7" fill="#93c5fd"/><circle cx="354" cy="62" r="15" fill="#1d4ed8"/><text x="318" y="98" fill="#334155">a</text><text x="354" y="98" fill="#1d4ed8" font-weight="bold">SUM</text><rect x="386" y="32" width="88" height="80" rx="8" fill="#f1f5f9" stroke="#64748b"/><circle cx="412" cy="62" r="7" fill="#93c5fd"/><circle cx="448" cy="62" r="15" fill="#1d4ed8"/><text x="412" y="98" fill="#334155">mer’s</text><text x="448" y="98" fill="#1d4ed8" font-weight="bold">DAY</text></g><text x="240" y="136" font-size="12" text-anchor="middle" fill="#475569">small dot = unstressed (da) | big dot = stressed (DUM) | 1 box = 1 foot</text></svg>',
      diagramCaption: "Each box is one iambic foot (da-DUM). Five feet make a pentameter: the steady heartbeat of the sonnet.",
      keyPoints: [
        "Iamb = da-DUM (a-WAY); trochee = DUM-da (TI-ger).",
        "Tetrameter = 4 feet; pentameter = 5 feet; iambic pentameter = 10 syllables.",
        "Comment on rhythm only when it creates an effect: steady, galloping, hammering or broken.",
      ],
      thinkDeeper:
        "Iambic pentameter is often said to be close to the natural rhythm of English speech. If that is true, why might a poet deliberately break it at the most emotional moment of a poem?",
      discovery: {
        problem:
          "Tap the beat on your desk as you read each line aloud: (1) 'I wandered lonely as a cloud' (2) 'Tyger Tyger, burning bright'. Where does your first strong tap land in each line? How does each line feel different?",
        idea:
          "Wordsworth's line starts softly ('i-WAN') and drifts in gentle da-DUMs, like the cloud; Blake's line slams down on the very first syllable ('TY'), like a hammer. The first is iambic, the second trochaic, and the rhythm matches the mood: a peaceful stroll versus a blacksmith's forge.",
      },
    },
    {
      id: "rhyme",
      heading: "Rhyme: echoes that bind a poem together",
      body:
        "**Rhyme** is the repetition of the same end sound in two or more words (night / bright). Rhyme makes a poem musical and memorable, links ideas together, and creates a sense of order or completion.\n\n- **Full rhyme** (perfect rhyme): the vowel and final consonant sounds match exactly: 'cloud / crowd', 'trees / breeze' (Wordsworth).\n- **Half rhyme** (also called **slant rhyme** or near rhyme): the sounds are close but not identical: 'soul / all' (Dickinson). Half rhyme can feel unsettled, uneasy or quietly unfinished, as though something does not quite fit.\n- **Internal rhyme**: a rhyme *within* a line: 'The fair breeze blew, the white foam flew' (Coleridge). It speeds the line up and makes it ring.\n- **Eye rhyme**: words that look as if they rhyme but do not sound alike: 'love / move'.\n- **Be careful with older poems**: pronunciation changes over time. Blake's 'eye / symmetry' sounds like a near miss today, but it was probably a full rhyme in his time, so some readers call it an eye rhyme or a historical rhyme rather than a half rhyme. Say what you hear and why it matters, rather than forcing one label.\n- A **rhyming couplet** is two consecutive lines that rhyme, often used to give a neat, final-sounding ending.\n\nWe describe a **rhyme scheme** with letters. Give the first end sound **A**, the next new sound **B**, and so on; when a sound returns, reuse its letter. Wordsworth's 'Daffodils' stanzas are **ABABCC**: cloud (A), hills (B), crowd (A), daffodils (B), trees (C), breeze (C). Each stanza ends on a rhyming couplet, like a satisfied sigh.\n\nAsk: *Is the rhyme regular or broken? Full or half? Does a rhyme link two words whose meanings connect or clash?* In Rossetti's 'Remember', 'grieve' rhymes with 'leave': the sound joins the grief to the departure that causes it.",
      diagram:
        '<svg viewBox="0 0 420 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rhyme scheme letters for the octave of Remember by Christina Rossetti: A B B A A B B A"><text x="210" y="18" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">Labelling a rhyme scheme: Rossetti, Remember (lines 1 to 8)</text><g font-size="12"><text x="20" y="45" fill="#334155">1  ...when I am gone</text><text x="200" y="45" fill="#b91c1c" font-weight="bold">away</text><text x="20" y="69" fill="#334155">2  ...into the silent</text><text x="200" y="69" fill="#1d4ed8" font-weight="bold">land</text><text x="20" y="93" fill="#334155">3  ...hold me by the</text><text x="200" y="93" fill="#1d4ed8" font-weight="bold">hand</text><text x="20" y="117" fill="#334155">4  ...yet turning</text><text x="200" y="117" fill="#b91c1c" font-weight="bold">stay</text><text x="20" y="141" fill="#334155">5  ...no more day by</text><text x="200" y="141" fill="#b91c1c" font-weight="bold">day</text><text x="20" y="165" fill="#334155">6  ...future that you</text><text x="200" y="165" fill="#1d4ed8" font-weight="bold">planned</text><text x="20" y="189" fill="#334155">7  ...me; you</text><text x="200" y="189" fill="#1d4ed8" font-weight="bold">understand</text><text x="20" y="213" fill="#334155">8  ...to counsel then or</text><text x="200" y="213" fill="#b91c1c" font-weight="bold">pray</text></g><g font-size="15" font-weight="bold" text-anchor="middle"><circle cx="330" cy="41" r="11" fill="#fee2e2"/><text x="330" y="46" fill="#b91c1c">A</text><circle cx="330" cy="65" r="11" fill="#dbeafe"/><text x="330" y="70" fill="#1d4ed8">B</text><circle cx="330" cy="89" r="11" fill="#dbeafe"/><text x="330" y="94" fill="#1d4ed8">B</text><circle cx="330" cy="113" r="11" fill="#fee2e2"/><text x="330" y="118" fill="#b91c1c">A</text><circle cx="330" cy="137" r="11" fill="#fee2e2"/><text x="330" y="142" fill="#b91c1c">A</text><circle cx="330" cy="161" r="11" fill="#dbeafe"/><text x="330" y="166" fill="#1d4ed8">B</text><circle cx="330" cy="185" r="11" fill="#dbeafe"/><text x="330" y="190" fill="#1d4ed8">B</text><circle cx="330" cy="209" r="11" fill="#fee2e2"/><text x="330" y="214" fill="#b91c1c">A</text></g><text x="385" y="130" font-size="12" text-anchor="middle" fill="#475569">ABBA</text><text x="385" y="146" font-size="12" text-anchor="middle" fill="#475569">ABBA</text></svg>',
      diagramCaption: "First new end sound = A, next new sound = B. Rossetti's octave rhymes ABBA ABBA, the classic Petrarchan pattern.",
      keyPoints: [
        "Full rhyme matches exactly; half (slant) rhyme nearly matches; internal rhyme happens inside a line.",
        "Label rhyme schemes with letters: a returning sound keeps its letter.",
        "Ask what a rhyme connects and whether a broken or half rhyme signals unease.",
      ],
      thinkDeeper:
        "Many modern poets avoid full rhyme because it can sound like a greeting card. When might a perfect, chiming rhyme actually be the most powerful choice a poet could make?",
      discovery: {
        problem:
          "Look at the end words of Wordsworth's first stanza: cloud, hills, crowd, daffodils, trees, breeze. Try to give each one a letter so that rhyming words share a letter. What pattern do you get, and what do the last two lines have in common?",
        idea:
          "You get ABABCC: alternating rhyme for four lines, then a rhyming couplet (trees / breeze). Every stanza of the poem ends with a couplet, which gives each one a neat, contented 'click' of completion, matching the speaker's happiness.",
      },
    },
    {
      id: "form",
      heading: "Form: the shape a poem chooses",
      body:
        "**Form** is the type or overall shape of a poem, usually defined by its length, rhyme scheme, metre or purpose. Poets choose forms because each one carries expectations, and they can then meet or break those expectations.\n\n- **Sonnet**: 14 lines, usually in iambic pentameter, traditionally about love. A **Petrarchan** (Italian) sonnet has an **octave** (8 lines, ABBAABBA) and a **sestet** (6 lines, e.g. CDECDE or CDDECE), with a **volta** (Italian for 'turn': a shift in argument or mood) at line 9. A **Shakespearean** (English) sonnet has three **quatrains** and a final **rhyming couplet** (ABAB CDCD EFEF GG); its turn often comes at line 13. Rossetti's 'Remember' is Petrarchan and turns on the word 'Yet'.\n- **Ballad**: a poem that tells a story, often in quatrains rhyming ABCB, with a strong song-like rhythm and sometimes a **refrain** (a repeated line or chorus). Keats's 'La Belle Dame sans Merci' is a literary ballad.\n- **Free verse**: poetry with no regular rhyme scheme or metre, shaped by natural speech and line breaks. Walt Whitman's 'Song of Myself' is a famous example. Free verse is *not* 'anything goes': its line breaks are still deliberate.\n- **Dramatic monologue**: a poem spoken by a single character (not the poet) to a silent listener, revealing more about the speaker than they realise. In Robert Browning's 'My Last Duchess', a Duke shows off a portrait of his dead wife and accidentally reveals his jealous, controlling nature.\n- **Haiku**: a Japanese form of three lines, usually 5, 7 and 5 syllables in English, capturing a single moment in nature, often with a seasonal reference.\n- **Villanelle**: 19 lines (five tercets and a final quatrain) using only two rhyme sounds and two **refrains** that repeat in a fixed pattern. Its circling repetition suits obsession or grief, as in Dylan Thomas's 'Do not go gentle into that good night'.\n- **Elegy**: a poem of mourning for someone who has died, often moving from grief towards consolation. Thomas Gray's 'Elegy Written in a Country Churchyard' begins 'The curfew tolls the knell of parting day'.\n- **Ode**: a serious, often elaborate lyric poem that addresses and celebrates a subject, such as Keats's 'To Autumn'.\n\nThe question to ask is always: *Why this form for this subject?* A strict form can show control or a struggle for control; free verse can show freedom, honesty or a mind thinking aloud.",
      diagram:
        '<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Petrarchan sonnet with octave and sestet against Shakespearean sonnet with three quatrains and a couplet"><text x="115" y="18" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">Petrarchan</text><text x="345" y="18" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">Shakespearean</text><rect x="40" y="28" width="150" height="88" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="115" y="66" font-size="13" text-anchor="middle" fill="#1e3a8a">Octave (8 lines)</text><text x="115" y="84" font-size="12" text-anchor="middle" fill="#1e3a8a">ABBA ABBA</text><text x="115" y="101" font-size="11" text-anchor="middle" fill="#1e3a8a">problem / question</text><rect x="40" y="132" width="150" height="66" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="115" y="160" font-size="13" text-anchor="middle" fill="#14532d">Sestet (6 lines)</text><text x="115" y="178" font-size="12" text-anchor="middle" fill="#14532d">CDECDE or similar</text><path d="M20 118 L20 130 L36 124 Z" fill="#dc2626"/><text x="16" y="112" font-size="11" fill="#dc2626">volta</text><text x="200" y="128" font-size="11" fill="#dc2626">line 9</text><rect x="270" y="28" width="150" height="38" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="345" y="51" font-size="12" text-anchor="middle" fill="#78350f">Quatrain 1: ABAB</text><rect x="270" y="72" width="150" height="38" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="345" y="95" font-size="12" text-anchor="middle" fill="#78350f">Quatrain 2: CDCD</text><rect x="270" y="116" width="150" height="38" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="345" y="139" font-size="12" text-anchor="middle" fill="#78350f">Quatrain 3: EFEF</text><rect x="270" y="166" width="150" height="30" rx="6" fill="#fce7f3" stroke="#db2777"/><text x="345" y="186" font-size="12" text-anchor="middle" fill="#831843">Couplet: GG</text><path d="M252 156 L252 168 L266 162 Z" fill="#dc2626"/><text x="222" y="152" font-size="11" fill="#dc2626">volta (13)</text></svg>',
      diagramCaption: "Both sonnets have 14 lines, but they turn in different places: Petrarchan at line 9, Shakespearean usually at the final couplet.",
      keyPoints: [
        "Sonnet = 14 lines; Petrarchan = octave + sestet; Shakespearean = 3 quatrains + couplet.",
        "Dramatic monologue: a character (not the poet) speaks to a silent listener.",
        "Always ask why a poet chose this form for this subject.",
      ],
      thinkDeeper:
        "The sonnet was traditionally a form for love poetry. Rossetti uses it for a poem about death and being forgotten. What might she gain by using a love form for that subject?",
      passage: {
        id: "remember-in-form",
        title: "Remember",
        source: "Christina Rossetti (written 1849, published 1862 in Goblin Market and Other Poems)",
        text: "Remember me when I am gone away,\nGone far away into the silent land;\nWhen you can no more hold me by the hand,\nNor I half turn to go yet turning stay.\nRemember me when no more day by day\nYou tell me of our future that you planned:\nOnly remember me; you understand\nIt will be late to counsel then or pray.\nYet if you should forget me for a while\nAnd afterwards remember, do not grieve:\nFor if the darkness and corruption leave\nA vestige of the thoughts that once I had,\nBetter by far you should forget and smile\nThan that you should remember and be sad.",
        note: "silent land: death or the grave. counsel: give advice. corruption: the decay of the body. vestige: a small trace.",
      },
    },
    {
      id: "structure",
      heading: "Structure: stanzas, line breaks and turns",
      body:
        "**Structure** is how a poem is organised and how it moves from beginning to end: its stanzas, line lengths, line breaks, repetitions and shifts.\n\n**Stanzas** are the 'paragraphs' of a poem (the word is Italian for 'room'). Learn their names by length:\n- **Couplet** = 2 lines; **tercet** = 3; **quatrain** = 4; **cinquain** = 5; **sestet** = 6; **septet** = 7; **octave** = 8.\n\n**How lines end and pause:**\n- **End-stopping**: a line that ends with punctuation, so the sense and the voice pause naturally. End-stopped lines feel controlled, firm or final.\n- **Enjambment**: a sentence that runs over the end of one line into the next without punctuation. In Rossetti's 'Yet if you should forget me for a while / And afterwards remember', the sentence spills forward just as time does. Enjambment can create flow, excitement, overflowing emotion or a surprise when the next line changes the meaning.\n- **Caesura**: a pause in the *middle* of a line, created by punctuation such as a full stop, comma, semicolon or dash. Wordsworth's 'I gazed—and gazed—but little thought' uses dashes to make us pause and stare with him.\n\n**How a poem moves:**\n- **Volta**: a turn in thought, argument or mood, often signalled by words like 'but', 'yet' or 'then'.\n- **Repetition**: repeating words or phrases for emphasis. In 'The Tyger', 'What the hammer? what the chain' pounds like a smith at work.\n- **Refrain**: a line or phrase repeated at intervals, like a chorus. Tennyson's 'Rode the six hundred' returns again and again in 'The Charge of the Light Brigade'.\n- **Cyclical structure**: a poem that ends where it began, often with a significant change. 'The Tyger' repeats its first stanza at the end, but 'Could frame' becomes 'Dare frame'.\n\nStructure questions often ask how a poem *develops*. Track the **shift**: where does the tone, time, place or focus change, and why there?",
      keyPoints: [
        "Couplet 2, tercet 3, quatrain 4, cinquain 5, sestet 6, septet 7, octave 8.",
        "Enjambment runs on; end-stopping pauses at the line end; caesura pauses mid-line.",
        "Track the volta: where does the poem turn, and what changes?",
      ],
      thinkDeeper:
        "'The Tyger' ends with almost exactly the same stanza it began with. Has the poem got anywhere? Explain how a cyclical structure can show both change and no change at the same time.",
      discovery: {
        problem:
          "Compare the first and last stanzas of 'The Tyger' in the box below. Find the ONE word that has changed. Why might Blake change just that word?",
        idea:
          "'Could frame' becomes 'Dare frame'. The first asks whether any creator was able to make the tiger; the last asks who would be brave or reckless enough. After the poem's terrifying forge imagery, the question has grown from one about skill to one about courage, so the cyclical structure shows how the speaker's awe has deepened.",
      },
      passage: {
        id: "tyger-in-structure",
        title: "The Tyger",
        source: "William Blake, Songs of Experience (1794)",
        text: "Tyger Tyger, burning bright,\nIn the forests of the night;\nWhat immortal hand or eye,\nCould frame thy fearful symmetry?\n\nIn what distant deeps or skies\nBurnt the fire of thine eyes?\nOn what wings dare he aspire?\nWhat the hand, dare seize the fire?\n\nAnd what shoulder, and what art,\nCould twist the sinews of thy heart?\nAnd when thy heart began to beat,\nWhat dread hand? and what dread feet?\n\nWhat the hammer? what the chain,\nIn what furnace was thy brain?\nWhat the anvil? what dread grasp,\nDare its deadly terrors clasp!\n\nWhen the stars threw down their spears\nAnd water'd heaven with their tears:\nDid he smile his work to see?\nDid he who made the Lamb make thee?\n\nTyger Tyger burning bright,\nIn the forests of the night:\nWhat immortal hand or eye,\nDare frame thy fearful symmetry?",
        note: "Blake printed '&' for 'and'. symmetry: perfect balance of form. sinews: tendons, muscles. The companion poem 'The Lamb' appears in Songs of Innocence (1789).",
      },
    },
    {
      id: "tone-voice",
      heading: "Tone, mood and voice: who is speaking, and how?",
      body:
        "**Tone** is the attitude of the speaker towards the subject or listener, the 'tone of voice' you would hear if the poem were read aloud: tender, bitter, playful, awed, angry, nostalgic, ironic. **Mood** (or **atmosphere**) is the feeling the poem creates in the reader: tense, peaceful, eerie, joyful. Tone belongs to the speaker; mood belongs to the reader's experience. They often match, but not always.\n\n**Voice** is the distinctive personality of the speaker: their vocabulary, rhythms and way of seeing the world.\n\nThe **speaker** (or **persona**) is the voice that says the poem. The speaker is **not automatically the poet**. Browning was not a murderous Duke; Blake may not share every fear of his awestruck speaker. Even when a poem uses 'I', write 'the speaker' unless you are discussing the poet's choices ('Rossetti uses a volta...'). A neat rule: **the poet chooses, the speaker says**.\n\nTo pin down tone, use precise adjectives. Instead of 'happy', try *exhilarated, content, playful, triumphant*. Instead of 'sad', try *wistful, bitter, mournful, resigned, nostalgic*.\n\nWatch for **tonal shifts**, which are often the most rewarding thing to write about. Rossetti's speaker moves from *pleading* ('Remember me') to *selfless, tender acceptance* ('Better by far you should forget and smile'). In the original poem below, the mood moves from tense and threatening to calm and affectionate.\n\nTone is created by everything else in the toolkit: word choice, sound, rhythm, punctuation and form. That is why tone is a perfect thing to link your analysis back to.",
      keyPoints: [
        "Tone = the speaker's attitude; mood = the atmosphere the reader feels.",
        "The poet chooses; the speaker says. Do not assume the 'I' is the poet.",
        "Use precise tone words (wistful, defiant, awed) and track tonal shifts.",
      ],
      thinkDeeper:
        "A poem can have a cheerful rhythm but a dark subject (many nursery rhymes do). What happens to the reader's mood when tone and content clash like this? Can you think of an example?",
      discovery: {
        problem:
          "Read the original poem below twice. Pick one adjective for the mood of the first stanza and one for the last four lines. Which single word or phrase marks the change?",
        idea:
          "The opening feels tense and urgent (the sky 'clenches like a fist', people rush, the rain 'smack[s]'). The ending is calm, even affectionate: the old man is 'unhurried, smiling'. The shift arrives with the move 'Under the void deck', where the camera cuts from chaos to stillness. The final simile turns the storm from an enemy into 'an old friend'.",
      },
      passage: {
        id: "monsoon-in-tone",
        title: "Monsoon, Four O'Clock",
        source: "Original poem written for this app",
        text: "The sky over Toa Payoh\nclenches like a fist.\nWashing snaps on bamboo poles,\naunties shout the laundry in,\nand the first fat drops\nsmack the hot pavement —\ntik, tik, tik —\nthen the whole sky lets go.\n\nGutters gulp and gargle.\nUmbrellas bloom at the bus stop\nlike a sudden garden.\nUnder the void deck\nan old man folds his newspaper,\nunhurried, smiling,\nas if the storm were only\nan old friend, arriving late.",
        note: "Toa Payoh: a neighbourhood in Singapore. void deck: the open ground floor beneath a Singapore HDB block of flats.",
      },
    },
    {
      id: "whole-poem",
      heading: "Putting it together: analysing a whole poem",
      body:
        "In an exam or a spoken analysis you will meet a whole poem and have limited time. Use a clear routine so you never freeze.\n\n**1. Read it twice.** First for the 'story' or situation (who is speaking, to whom, about what?), then slowly with a pencil.\n\n**2. Sum it up in one sentence.** 'The speaker remembers a field of daffodils and realises the memory still brings him joy.' This becomes the backbone of your answer.\n\n**3. SMILE through it.**\n- **S**tructure: stanza forms, line lengths, shifts, the volta, how it ends.\n- **M**eaning: the surface meaning, then the deeper theme.\n- **I**magery: similes, metaphors, personification, symbols.\n- **L**anguage: precise word choices, sound devices, tone words, tense, pronouns.\n- **E**ffect: what all of this does to the reader, and why.\n\n**4. Choose your best three or four moments.** You cannot write about everything. Pick the richest quotations, ideally from the beginning, middle and end so you can show how the poem **develops**.\n\n**5. Write analytical paragraphs** (point, embedded evidence, explanation of technique and connotation, link to theme). Use tentative, thoughtful language: *suggests, implies, perhaps, could also be read as*. Offering an **alternative interpretation** is a sign of a top answer.\n\nLook at how Wordsworth's 'I Wandered Lonely as a Cloud' rewards this routine. **Structure**: four sestets, each rhyming ABABCC in iambic tetrameter, a steady and contented music. **Meaning**: a lonely walker is cheered by daffodils, and later the memory cheers him again. **Imagery**: the daffodils are personified as a dancing 'crowd' and compared to stars. **Language**: a semantic field of joy ('glee', 'jocund', 'sprightly') and wealth ('golden', 'wealth'). **Effect**: the final stanza shifts into the present tense, revealing the real subject: memory and imagination, 'that inward eye / Which is the bliss of solitude'.",
      keyPoints: [
        "Read twice, then sum the poem up in one sentence.",
        "Choose quotations from the start, middle and end to show development.",
        "Tentative language and an alternative reading lift an answer to the top band.",
      ],
      thinkDeeper:
        "The first line of 'Daffodils' calls the speaker 'lonely'; the last stanza calls being alone 'the bliss of solitude'. Has the speaker's situation changed, or only the way he sees it? What does that suggest about the power of poetry itself?",
      passage: {
        id: "daffodils-whole",
        title: "I Wandered Lonely as a Cloud",
        source: "William Wordsworth (written 1804; this revised version published 1815)",
        text: "I wandered lonely as a cloud\nThat floats on high o'er vales and hills,\nWhen all at once I saw a crowd,\nA host, of golden daffodils;\nBeside the lake, beneath the trees,\nFluttering and dancing in the breeze.\n\nContinuous as the stars that shine\nAnd twinkle on the milky way,\nThey stretched in never-ending line\nAlong the margin of a bay:\nTen thousand saw I at a glance,\nTossing their heads in sprightly dance.\n\nThe waves beside them danced; but they\nOut-did the sparkling waves in glee:\nA poet could not but be gay,\nIn such a jocund company:\nI gazed—and gazed—but little thought\nWhat wealth the show to me had brought:\n\nFor oft, when on my couch I lie\nIn vacant or in pensive mood,\nThey flash upon that inward eye\nWhich is the bliss of solitude;\nAnd then my heart with pleasure fills,\nAnd dances with the daffodils.",
        note: "host: a large crowd (also an army, or a host of angels). gay: joyful (its meaning in 1815). jocund: cheerful. pensive: thoughtful. inward eye: the imagination or memory.",
      },
    },
  ],

  passages: [
    {
      id: "hope-feathers",
      title: "\"Hope\" is the thing with feathers",
      source: "Emily Dickinson (written c.1861, published after her death in 1891)",
      text: "\"Hope\" is the thing with feathers -\nThat perches in the soul -\nAnd sings the tune without the words -\nAnd never stops - at all -\n\nAnd sweetest - in the Gale - is heard -\nAnd sore must be the storm -\nThat could abash the little Bird\nThat kept so many warm -\n\nI've heard it in the chillest land -\nAnd on the strangest Sea -\nYet - never - in Extremity,\nIt asked a crumb - of me.",
      note: "Gale: a very strong wind. abash: embarrass or silence. Extremity: the most desperate situation. Dickinson's dashes and capital letters are deliberate.",
    },
    {
      id: "the-tyger",
      title: "The Tyger",
      source: "William Blake, Songs of Experience (1794)",
      text: "Tyger Tyger, burning bright,\nIn the forests of the night;\nWhat immortal hand or eye,\nCould frame thy fearful symmetry?\n\nIn what distant deeps or skies\nBurnt the fire of thine eyes?\nOn what wings dare he aspire?\nWhat the hand, dare seize the fire?\n\nAnd what shoulder, and what art,\nCould twist the sinews of thy heart?\nAnd when thy heart began to beat,\nWhat dread hand? and what dread feet?\n\nWhat the hammer? what the chain,\nIn what furnace was thy brain?\nWhat the anvil? what dread grasp,\nDare its deadly terrors clasp!\n\nWhen the stars threw down their spears\nAnd water'd heaven with their tears:\nDid he smile his work to see?\nDid he who made the Lamb make thee?\n\nTyger Tyger burning bright,\nIn the forests of the night:\nWhat immortal hand or eye,\nDare frame thy fearful symmetry?",
      note: "frame: build, construct. aspire: rise up, soar. sinews: tendons, muscles. anvil: the iron block a blacksmith hammers metal on.",
    },
    {
      id: "remember",
      title: "Remember",
      source: "Christina Rossetti (written 1849, published 1862)",
      text: "Remember me when I am gone away,\nGone far away into the silent land;\nWhen you can no more hold me by the hand,\nNor I half turn to go yet turning stay.\nRemember me when no more day by day\nYou tell me of our future that you planned:\nOnly remember me; you understand\nIt will be late to counsel then or pray.\nYet if you should forget me for a while\nAnd afterwards remember, do not grieve:\nFor if the darkness and corruption leave\nA vestige of the thoughts that once I had,\nBetter by far you should forget and smile\nThan that you should remember and be sad.",
      note: "A Petrarchan sonnet: octave ABBAABBA, sestet CDDECE, volta at 'Yet' (line 9).",
    },
    {
      id: "daffodils",
      title: "I Wandered Lonely as a Cloud",
      source: "William Wordsworth (1815 version)",
      text: "I wandered lonely as a cloud\nThat floats on high o'er vales and hills,\nWhen all at once I saw a crowd,\nA host, of golden daffodils;\nBeside the lake, beneath the trees,\nFluttering and dancing in the breeze.\n\nContinuous as the stars that shine\nAnd twinkle on the milky way,\nThey stretched in never-ending line\nAlong the margin of a bay:\nTen thousand saw I at a glance,\nTossing their heads in sprightly dance.\n\nThe waves beside them danced; but they\nOut-did the sparkling waves in glee:\nA poet could not but be gay,\nIn such a jocund company:\nI gazed—and gazed—but little thought\nWhat wealth the show to me had brought:\n\nFor oft, when on my couch I lie\nIn vacant or in pensive mood,\nThey flash upon that inward eye\nWhich is the bliss of solitude;\nAnd then my heart with pleasure fills,\nAnd dances with the daffodils.",
      note: "Inspired by a walk Wordsworth took with his sister Dorothy beside Ullswater in the Lake District in April 1802; Dorothy described the daffodils in her journal.",
    },
    {
      id: "the-eagle",
      title: "The Eagle",
      source: "Alfred, Lord Tennyson (published 1851)",
      text: "He clasps the crag with crooked hands;\nClose to the sun in lonely lands,\nRing'd with the azure world, he stands.\n\nThe wrinkled sea beneath him crawls;\nHe watches from his mountain walls,\nAnd like a thunderbolt he falls.",
      note: "crag: a steep, rugged rock. azure: bright sky-blue. Two tercets, each on a single rhyme (AAA BBB), in iambic tetrameter.",
    },
  ],

  quoteBank: [
    {
      quote: "\"Hope\" is the thing with feathers - / That perches in the soul -",
      source: "Emily Dickinson, \"Hope\" is the thing with feathers, lines 1 to 2",
      analysis:
        "An extended metaphor begins: an invisible feeling becomes a small bird. 'Feathers' suggests lightness and fragility, while 'perches' implies hope could fly away but chooses to stay. The vague 'thing' shows how hard hope is to define, which is exactly why the poet needs an image.",
      themes: ["hope", "extended metaphor", "resilience"],
    },
    {
      quote: "What immortal hand or eye, / Could frame thy fearful symmetry?",
      source: "William Blake, The Tyger, stanza 1",
      analysis:
        "A rhetorical question that the poem never answers, creating awe and unease. 'Fearful symmetry' is a paradox: perfect, balanced beauty that is also terrifying. 'Frame' makes creation sound like construction, preparing for the forge imagery to come.",
      themes: ["creation", "awe", "rhetorical question"],
    },
    {
      quote: "What the hammer? what the chain, / In what furnace was thy brain?",
      source: "William Blake, The Tyger, stanza 4",
      analysis:
        "A semantic field of blacksmithing (hammer, chain, furnace, anvil) presents the creator as a mighty smith forging the tiger in fire. The short, repeated questions and trochaic rhythm hammer like blows on an anvil, so sound enacts meaning.",
      themes: ["creation", "power", "semantic field"],
    },
    {
      quote: "Better by far you should forget and smile / Than that you should remember and be sad.",
      source: "Christina Rossetti, Remember, lines 13 to 14 (the final two lines)",
      analysis:
        "Antithesis (forget / remember, smile / sad) completes the volta: the speaker who began by begging to be remembered now gives permission to be forgotten. The balanced lines sound calm and resolved, presenting love as selfless.",
      themes: ["love", "death", "memory", "volta"],
    },
    {
      quote: "They flash upon that inward eye / Which is the bliss of solitude;",
      source: "William Wordsworth, I Wandered Lonely as a Cloud, stanza 4",
      analysis:
        "The verb 'flash' makes memory sudden and bright, like light. The metaphor 'inward eye' presents imagination as a second way of seeing. 'Bliss of solitude' reverses the 'lonely' of line 1: being alone is now joyful, revealing the poem's real subject, memory.",
      themes: ["memory", "nature", "imagination"],
    },
    {
      quote: "The wrinkled sea beneath him crawls;",
      source: "Alfred, Lord Tennyson, The Eagle, line 4",
      analysis:
        "Personification makes the vast sea seem old ('wrinkled') and feeble ('crawls'). From the eagle's height the ocean is reduced to something small and slow, which magnifies the eagle's power. 'Wrinkled' is also visually exact: waves seen from above look like creased skin.",
      themes: ["power", "nature", "perspective"],
    },
    {
      quote: "Only the stuttering rifles' rapid rattle / Can patter out their hasty orisons.",
      source: "Wilfred Owen, Anthem for Doomed Youth (1917), lines 3 to 4",
      analysis:
        "Alliteration, onomatopoeia and harsh 't' plosives imitate machine-gun fire. 'Orisons' (prayers) belongs to a semantic field of funerals: the only prayers said for these soldiers are the guns. The bitter irony attacks the waste of young lives.",
      themes: ["war", "sound", "irony"],
    },
    {
      quote: "Water, water, every where, / Nor any drop to drink.",
      source: "Samuel Taylor Coleridge, The Rime of the Ancient Mariner (1798; wording of the revised 1817 text)",
      analysis:
        "Repetition of 'water' and the irony of thirst in an ocean capture torment. The ballad rhythm makes the lines unforgettable, which is why they became a proverb.",
      themes: ["suffering", "irony", "ballad"],
    },
    {
      quote: "The sedge has withered from the lake, / And no birds sing.",
      source: "John Keats, La Belle Dame sans Merci (1819), stanza 1",
      analysis:
        "Pathetic fallacy: the dead, silent landscape mirrors the knight's despair. The final line is shorter than expected (only four syllables), so the stanza itself seems to fall silent, like the birds.",
      themes: ["despair", "pathetic fallacy", "ballad"],
    },
    {
      quote: "And mark in every face I meet / Marks of weakness, marks of woe.",
      source: "William Blake, London, stanza 1 (Songs of Experience, 1794)",
      analysis:
        "Repetition of 'mark' and alliteration of 'w' make the suffering seem everywhere and inescapable. 'Marks' suggests scars or stains, as if the city has branded its people.",
      themes: ["suffering", "society", "repetition"],
    },
    {
      quote: "Shall I compare thee to a summer's day?",
      source: "William Shakespeare, Sonnet 18 (published 1609)",
      analysis:
        "A perfect line of iambic pentameter that opens with a question, making the sonnet feel like a conversation. The poem goes on to argue the beloved is better than summer, because summer fades but the poem lasts.",
      themes: ["love", "time", "sonnet"],
    },
    {
      quote: "Do I contradict myself? / Very well then I contradict myself, / (I am large, I contain multitudes.)",
      source: "Walt Whitman, Song of Myself (1892 edition)",
      analysis:
        "Free verse with a confident, conversational voice. The parenthesis feels like a private aside. Whitman celebrates identity as many-sided rather than fixed, a useful idea for poems about identity and culture.",
      themes: ["identity", "free verse", "voice"],
    },
    {
      quote: "Yes. I remember Adlestrop—",
      source: "Edward Thomas, Adlestrop (1917)",
      analysis:
        "The full stop after 'Yes' is a caesura that makes the line sound like someone answering a question mid-conversation. The dash then trails into memory, creating a quiet, reflective tone.",
      themes: ["memory", "caesura", "voice"],
    },
  ],

  modelWriting: [
    {
      title: "PEEL paragraph: forge imagery in 'The Tyger'",
      task: "How does Blake present the creator of the tiger as powerful?",
      text:
        "Blake presents the creator as a terrifyingly powerful craftsman by building a semantic field of blacksmithing. In the fourth stanza the speaker demands, 'What the hammer? what the chain, / In what furnace was thy brain?', as if the tiger had been forged in fire like a sword. The noun 'furnace' suggests intense heat and danger, implying that the tiger's fierce mind was made in a place no ordinary being could survive. The questions are short and repetitive, and their trochaic rhythm lands like hammer blows, so the sound of the poem enacts the violent work of creation. This leaves the reader, like the speaker, overwhelmed with awe: if the creature is this frightening, its maker must be greater still. Perhaps Blake is also asking a darker question here: what kind of creator would deliberately make something so deadly?",
      annotations: [
        "Opens with a clear point that answers the question directly.",
        "Short, embedded quotation fits into the sentence grammatically.",
        "Zooms in on a single word ('furnace') and its connotations.",
        "Links sound (rhythm) to meaning: 'the sound enacts the work'.",
        "Ends with the effect on the reader and a tentative alternative reading ('Perhaps...').",
      ],
    },
    {
      title: "Analytical paragraph with an alternative interpretation: 'Hope'",
      task: "How does Dickinson use imagery to present hope?",
      text:
        "Dickinson uses an extended metaphor to present hope as a small but unbreakable bird living inside us. The bird 'sings the tune without the words', which suggests that hope is instinctive rather than logical: it does not need reasons or explanations to keep us going. In the second stanza the bird is 'sweetest' in 'the Gale', so hope is most precious exactly when life is at its stormiest. The adjective 'little' is important; a reader might expect hope to be grand and heroic, but Dickinson makes it tiny and vulnerable, which makes its survival more moving. However, the final line, 'It asked a crumb - of me', could be read in two ways: as gratitude for a gift that costs nothing, or as a faint note of guilt that the speaker has never repaid it. Either way, Dickinson presents hope as generous, resilient and quietly essential.",
      annotations: [
        "Names the technique (extended metaphor) and the big idea in the first sentence.",
        "Tracks the image through the poem, showing development.",
        "Explores a surprising word choice ('little') against reader expectations.",
        "Offers two interpretations of the ending: a hallmark of top-band answers.",
        "Concluding sentence uses three precise adjectives to sum up the presentation.",
      ],
    },
    {
      title: "Spoken analysis opening (about 60 seconds): 'The Eagle'",
      task: "Introduce a verbal analysis of Tennyson's 'The Eagle' to your class.",
      text:
        "Tennyson's 'The Eagle' is only six lines long, but in that space it manages to make a bird seem like a king, and then like a god. I want to show you how he does it through sound, perspective and one explosive final simile. Listen to the first line: 'He clasps the crag with crooked hands.' Those hard 'c' sounds are like talons gripping rock, and the word 'hands' gives the eagle a human, almost royal grip on the world. Then the perspective drops. From up there, 'The wrinkled sea beneath him crawls' — the whole ocean is shrunk into something old and weak. And finally, after all that stillness, everything happens at once: 'like a thunderbolt he falls.' A thunderbolt is the weapon of Zeus, king of the gods. So in six lines, Tennyson has turned a bird into a ruler and then into a god. Let's look at how he builds that.",
      annotations: [
        "Hooks the audience with a bold overview claim.",
        "Previews the structure of the talk ('sound, perspective and one simile').",
        "Uses 'Listen to...' and reads quotations aloud: ideal for a spoken format.",
        "Explains sound effects in plain, vivid language.",
        "Brings in relevant context (Zeus) to deepen the final image.",
      ],
    },
  ],

  mnemonics: [
    {
      topic: "A framework for analysing any poem",
      device: "SMILE",
      explanation:
        "Structure (stanzas, shifts, volta, ending), Meaning (surface and deeper theme), Imagery (similes, metaphors, symbols), Language (word choice, sound, tone), Effect (what it all does to the reader, and why). Remember: Effect belongs in every sentence, not just at the end.",
    },
    {
      topic: "Stanza names from 2 to 8 lines",
      device: "Cool Tigers Quietly Creep, Silently Stalking Owls",
      explanation:
        "Couplet (2), Tercet (3), Quatrain (4), Cinquain (5), Sestet (6), Septet (7), Octave (8). Picture Blake's tiger creeping through 'the forests of the night'.",
    },
    {
      topic: "Iamb versus trochee",
      device: "An iamb runs a-WAY; a trochee is a TI-ger",
      explanation:
        "Say 'a-WAY': soft then strong = iamb (da-DUM), the heartbeat rhythm of the sonnet. Say 'TI-ger': strong then soft = trochee (DUM-da), the hammering rhythm of 'Tyger Tyger, burning bright'.",
    },
    {
      topic: "Turning feature spotting into analysis",
      device: "WHAT? HOW? WHY?",
      explanation:
        "WHAT technique is it (name it precisely and quote it)? HOW does it work (zoom in on one word: connotations, sound, image)? WHY did the poet use it (effect on the reader, link to theme)? If you stop at WHAT, you are only spotting.",
    },
  ],

  examMistakes: [
    "Feature spotting: 'The poet uses alliteration and a simile' with no explanation of what either does.",
    "Writing 'this makes the reader want to read on' or 'this creates imagery' as an effect. Every technique 'creates imagery'; say WHAT image and what it makes us feel.",
    "Calling the speaker 'the poet' and assuming the 'I' is always the writer, especially in dramatic monologues.",
    "Copying out long quotations (whole lines or stanzas) instead of embedding two to six precise words.",
    "Retelling what happens in the poem line by line instead of analysing how it is written.",
    "Ignoring form and structure entirely: writing only about language when the volta, line breaks or rhyme scheme are doing important work.",
    "Mislabelling techniques, e.g. calling 'like a thunderbolt' a metaphor, or calling any repeated sound 'alliteration'.",
    "Using vague tone words ('happy', 'sad') instead of precise ones ('exhilarated', 'wistful', 'bitter', 'resigned').",
  ],

  misconceptions: [
    {
      wrong: "A poem has to rhyme to be a proper poem.",
      right: "Free verse has no regular rhyme or metre and is one of the most widely used forms today. What makes a poem a poem is concentrated, deliberately shaped language, especially the line break.",
    },
    {
      wrong: "The 'I' in a poem is always the poet talking about their own life.",
      right: "The voice is the speaker or persona. It may be close to the poet, but it may be an invented character, as in Browning's dramatic monologues. Write 'the speaker'.",
    },
    {
      wrong: "Any repeated letter is alliteration.",
      right: "Alliteration is a repeated sound at the START of nearby words. Repeated vowel sounds are assonance; repeated consonants inside or at the end of words are consonance; repeated 's' sounds are sibilance.",
    },
    {
      wrong: "There is one correct meaning of a poem that you have to find.",
      right: "Poems can support several readings. You are rewarded for interpretations you can support with evidence, especially when you weigh two possible readings against each other.",
    },
    {
      wrong: "The more techniques you name, the higher your mark.",
      right: "Depth beats breadth. One technique explored in detail (connotations, effect, link to theme) scores far more than a list of five named devices.",
    },
    {
      wrong: "Enjambment just means a long line.",
      right: "Enjambment is when a sentence or phrase runs over the end of a line into the next without a pause. It is about how lines END, not how long they are.",
    },
  ],

  expertDebates: [
    {
      question: "Is 'The Tyger' a poem of admiration or of horror?",
      detail:
        "Some readers see the speaker's questions as pure wonder at a creator capable of such 'fearful symmetry'. Others notice the violence of the forge imagery and the question 'Did he who made the Lamb make thee?' and argue the poem is troubled, even frightened, by a God who would make something so deadly. Many critics argue that Blake wants us to hold both feelings at once, which is exactly what the paradox 'fearful symmetry' does.",
    },
    {
      question: "Is the speaker of 'Remember' truly selfless?",
      detail:
        "The sestet seems generous: the speaker would rather be forgotten than make her loved one sad. Yet the octave repeats 'Remember me' insistently, and even the final lines are instructions about how the listener should feel. Some readers see heartfelt, mature love; others hear a speaker who still wants control over her loved one's emotions, even after death. Both readings use the same volta as evidence.",
    },
    {
      question: "Does the poet's intention matter, or only the words on the page?",
      detail:
        "Some critics argue that we can never know what a poet 'meant' and should analyse only the text and its effects. Others believe that context (Owen's experience in the trenches, Rossetti's faith, Blake's radical politics) is essential to understanding a poem. In exams, the best approach is usually both: analyse the words first, then use context to deepen, not replace, your reading.",
    },
  ],

  realWorld: [
    {
      title: "Song lyrics",
      detail:
        "Every chart song uses the poet's toolkit: rhyme schemes in the verses, a refrain in the chorus, and a change of key or mood in the bridge that works just like a volta.",
      emoji: "🎵",
    },
    {
      title: "Rap and spoken word",
      detail:
        "Rappers are masters of internal rhyme, assonance and rhythm. Spoken-word poets perform free verse where every pause and line break is part of the meaning.",
      emoji: "🎤",
    },
    {
      title: "Advertising slogans",
      detail:
        "Brands use alliteration, rhyme and strong rhythm because sound makes words memorable. A jingle is a tiny poem engineered to stick in your head.",
      emoji: "📺",
    },
    {
      title: "Speeches",
      detail:
        "Great speakers use repetition, tricolon and rhythm just as poets do. A speech that repeats a key phrase at the start of each sentence is using a poetic refrain.",
      emoji: "🗣️",
    },
    {
      title: "Nursery rhymes and playground chants",
      detail:
        "Many nursery rhymes use trochaic rhythm and full rhyme, which is why toddlers can remember them. Some have surprisingly dark meanings hidden under a cheerful beat.",
      emoji: "🧸",
    },
    {
      title: "Funerals and celebrations",
      detail:
        "People still turn to poems at the biggest moments of life. Rossetti's 'Remember' and other elegies are often read at funerals because a poem can hold feelings that ordinary speech cannot.",
      emoji: "🕯️",
    },
  ],

  flashcards: [
    { front: "Simile vs metaphor", back: "A simile compares using 'like' or 'as' (like a thunderbolt); a metaphor says one thing IS another (Tyger... burning bright)." },
    { front: "Extended metaphor", back: "A metaphor developed over several lines or a whole poem, e.g. hope as a bird throughout Dickinson's poem." },
    { front: "Pathetic fallacy", back: "Weather or nature reflecting human feelings, e.g. 'The sedge has withered from the lake, / And no birds sing' (Keats)." },
    { front: "Semantic field", back: "A group of words from the same area of meaning, e.g. hammer, chain, furnace, anvil (blacksmithing) in 'The Tyger'." },
    { front: "Sibilance", back: "Repeated 's', 'sh' or soft 'c' sounds, which can be soothing or sinister, e.g. 'shrill, demented choirs of wailing shells' (Owen)." },
    { front: "Assonance vs consonance", back: "Assonance repeats vowel sounds inside nearby words (mellow wedding bells); consonance repeats consonant sounds within or at the end of words (black, cracked rocks)." },
    { front: "Plosives", back: "The 'explosive' consonants p, b, t, d, k, g. They create harsh, violent or abrupt effects." },
    { front: "Iamb / trochee", back: "Iamb = da-DUM (a-WAY), natural and heartbeat-like. Trochee = DUM-da (TI-ger), forceful and chant-like." },
    { front: "Iambic pentameter", back: "Five iambs per line, ten syllables: 'Shall I compare thee to a summer's day?'" },
    { front: "Half rhyme (slant rhyme)", back: "Words whose sounds nearly but not exactly match, e.g. soul / all. Often creates unease or incompleteness." },
    { front: "Petrarchan sonnet", back: "14 lines: an octave (ABBAABBA) and a sestet, with a volta at line 9. e.g. Rossetti's 'Remember'." },
    { front: "Shakespearean sonnet", back: "14 lines: three quatrains and a rhyming couplet, ABAB CDCD EFEF GG. The turn often comes at the couplet." },
    { front: "Dramatic monologue", back: "A poem spoken by a character (not the poet) to a silent listener, revealing their personality, e.g. Browning's 'My Last Duchess'." },
    { front: "Enjambment / caesura / end-stopping", back: "Enjambment: sentence runs over a line break. Caesura: a pause mid-line. End-stopping: punctuation at the line end." },
    { front: "Volta", back: "Italian for 'turn': a shift in argument, mood or perspective, often signalled by 'but' or 'yet'." },
    { front: "Tone vs mood", back: "Tone is the speaker's attitude (bitter, tender, awed); mood is the atmosphere the reader feels (tense, peaceful)." },
  ],

  mustKnow: [
    "Can you explain the effect of a technique, not just name it, using technique + evidence + effect + meaning?",
    "Can you tell a simile, metaphor, extended metaphor, personification, pathetic fallacy and symbol apart?",
    "Can you identify alliteration, sibilance, assonance, consonance, onomatopoeia and plosives, and say what each sound does?",
    "Can you mark stressed and unstressed syllables and recognise iambic and trochaic rhythm, tetrameter and pentameter?",
    "Can you label a rhyme scheme with letters and distinguish full, half and internal rhyme?",
    "Can you recognise a Petrarchan and a Shakespearean sonnet, a ballad, free verse, a dramatic monologue, a haiku, a villanelle, an elegy and an ode?",
    "Can you name stanzas from couplet to octave and explain enjambment, caesura, end-stopping, volta, refrain and cyclical structure?",
    "Can you describe tone and mood with precise adjectives and track a tonal shift?",
    "Can you explain why the speaker is not automatically the poet?",
    "Can you plan and write an analytical paragraph on an unseen poem that offers an alternative interpretation?",
  ],

  videos: [
    {
      title: "How to analyse a poem",
      channel: "Mr Bruff",
      url: "https://www.youtube.com/results?search_query=mr+bruff+how+to+analyse+a+poem",
    },
    {
      title: "Poetic techniques and their effects",
      channel: "Mr Salles Teaches English",
      url: "https://www.youtube.com/results?search_query=mr+salles+poetry+techniques+effects",
    },
    {
      title: "Iambic pentameter and metre explained",
      channel: "BBC Bitesize",
      url: "https://www.youtube.com/results?search_query=bbc+bitesize+iambic+pentameter+metre+poetry",
    },
    {
      title: "Unseen poetry: form and structure",
      channel: "Stacey Reay",
      url: "https://www.youtube.com/results?search_query=stacey+reay+unseen+poetry+form+structure",
    },
  ],

  quiz: {
    mcq: [
      {
        id: "ptk-quiz-mcq-1",
        question: "Which of these lines contains a simile?",
        options: [
          "\"Hope\" is the thing with feathers",
          "The wrinkled sea beneath him crawls",
          "And like a thunderbolt he falls",
          "Tyger Tyger, burning bright",
        ],
        answerIndex: 2,
        hint: "Look for the comparison word that keeps the two things separate.",
        explanation:
          "'Like a thunderbolt' compares the eagle to a thunderbolt using 'like', so it is a simile. 'Hope is the thing with feathers' is the most tempting distractor, but it says hope IS a feathered thing, which makes it a metaphor. The other two are personification and metaphor.",
        guideRef: "imagery",
      },
      {
        id: "ptk-quiz-mcq-2",
        extract: "Tyger Tyger, burning bright,\nIn the forests of the night;",
        question: "Read the first line aloud. Which rhythm does it use?",
        options: [
          "Trochaic: stressed then unstressed (DUM-da)",
          "Iambic: unstressed then stressed (da-DUM)",
          "Free verse: no regular rhythm",
          "Anapaestic: two unstressed then one stressed (da-da-DUM)",
        ],
        answerIndex: 0,
        hint: "Where does your voice land hardest: on the first syllable or the second?",
        explanation:
          "'TY-ger TY-ger, BURN-ing BRIGHT' starts on a stressed syllable and alternates, so it is trochaic. Iambic is the tempting wrong answer because it is the most common metre in English, but iambs start soft (a-WAY), and this line slams down on its very first syllable.",
        guideRef: "rhythm-metre",
      },
      {
        id: "ptk-quiz-mcq-3",
        question: "Which description fits a Petrarchan sonnet?",
        options: [
          "Three quatrains and a rhyming couplet, rhyming ABAB CDCD EFEF GG",
          "Nineteen lines with two refrains that repeat throughout",
          "Three lines of 5, 7 and 5 syllables",
          "An octave and a sestet, with a volta (turn) at line 9",
        ],
        answerIndex: 3,
        hint: "It comes from Italy and splits 14 lines into 8 + 6.",
        explanation:
          "A Petrarchan sonnet is divided into an octave (8 lines) and a sestet (6 lines), with the turn at line 9. The option ‘Three quatrains and a rhyming couplet, rhyming ABAB CDCD EFEF GG’ is tempting because it is also a sonnet, but that is the Shakespearean pattern. B describes a villanelle and C a haiku.",
        guideRef: "form",
      },
      {
        id: "ptk-quiz-mcq-4",
        question: "Which sentence is the best analysis rather than feature spotting?",
        options: [
          "Tennyson uses alliteration and personification in the poem, which is very effective.",
          "The verb 'crawls' personifies the sea as old and feeble, shrinking the vast ocean to emphasise how high and powerful the eagle is.",
          "In line 4 there is personification because the sea crawls.",
          "Tennyson uses lots of techniques to make the reader want to read on.",
        ],
        answerIndex: 1,
        hint: "Which one explains WHAT a word suggests and WHY that matters?",
        explanation:
          "The option ‘The verb 'crawls' personifies the sea as old and feeble, shrinking…’ zooms in on one word, explains its connotations (old, feeble) and links the effect to the eagle's power. The option ‘In line 4 there is personification because the sea crawls.’ is tempting because it correctly names the technique and quotes, but it never explains the effect, so it is still feature spotting.",
        guideRef: "technique-and-effect",
      },
    ],
    qa: [
      {
        id: "ptk-quiz-qa-1",
        question: "Explain the difference between a simile and a metaphor, giving a poetic example of each.",
        marks: 4,
        hint: "One uses a comparison word; one fuses the two things together.",
        modelAnswer:
          "A simile compares two things using 'like' or 'as', keeping them separate, for example Tennyson's eagle falls 'like a thunderbolt'. A metaphor states that one thing is another, fusing them, for example Dickinson writes that 'Hope is the thing with feathers', so hope actually becomes a bird. Because a metaphor removes the comparison word, it often feels bolder and more complete than a simile.",
        markScheme: [
          { point: "Defines a simile as a comparison using 'like' or 'as'", keywords: ["like or as", "like' or 'as", "using like", "uses like", "uses as", "with like"] },
          { point: "Defines a metaphor as saying one thing is another (no comparison word)", keywords: ["is another", "is something else", "says it is", "directly", "without like", "fuses", "becomes"] },
          { point: "Gives a valid simile example", keywords: ["like a thunderbolt", "lonely as a cloud", "like a red", "like a fist", "like a sudden garden", "as a cloud"] },
          { point: "Gives a valid metaphor example", keywords: ["thing with feathers", "burning bright", "inward eye", "umbrellas bloom", "silent land", "metaphor example"] },
        ],
        commonError: "Saying a metaphor is 'a comparison without like or as' and then giving an example that actually contains 'like'.",
        guideRef: "imagery",
      },
      {
        id: "ptk-quiz-qa-2",
        extract: "\"Hope\" is the thing with feathers -\nThat perches in the soul -\nAnd sings the tune without the words -\nAnd never stops - at all -",
        question: "How does Dickinson use an extended metaphor to present hope in this stanza?",
        marks: 4,
        hint: "Track the bird through the stanza. What does each bird-word suggest about hope?",
        modelAnswer:
          "Dickinson presents hope through an extended metaphor of a small bird living inside us. 'Feathers' suggests hope is light and delicate, while the verb 'perches' implies it has settled in 'the soul' but could fly away at any moment, so hope is precious and must be valued. It 'sings the tune without the words', suggesting hope is instinctive and cannot be fully explained in language. Finally, the dashes around 'at all' slow the line and stress that this song 'never stops', presenting hope as constant and resilient.",
        markScheme: [
          { point: "Identifies the extended metaphor of hope as a bird", keywords: ["extended metaphor", "bird", "hope as a", "compares hope", "metaphor"] },
          { point: "Analyses 'feathers' or 'perches' (lightness, fragility, could fly away)", keywords: ["feathers", "perches", "light", "fragile", "delicate", "fly away"] },
          { point: "Analyses 'sings the tune without the words' (instinctive, beyond language)", keywords: ["without the words", "tune", "sings", "instinct", "beyond words", "cannot be explained"] },
          { point: "Explains hope as constant or resilient ('never stops')", keywords: ["never stops", "constant", "resilient", "always there", "endless", "persistent"] },
        ],
        commonError: "Only saying 'hope is compared to a bird' and never explaining what the bird details suggest about hope.",
        guideRef: "imagery",
      },
      {
        id: "ptk-quiz-qa-3",
        extract: "Yet if you should forget me for a while\nAnd afterwards remember, do not grieve:",
        question: "Identify one example of enjambment and one example of caesura in these lines (Rossetti, 'Remember') and explain the effect of each.",
        marks: 4,
        hint: "Enjambment happens at a line ending; caesura happens in the middle of a line.",
        modelAnswer:
          "There is enjambment between 'for a while' and 'And afterwards remember': the sentence runs on without a pause, so the reader moves forward in time just as the listener might move on from grief, making the forgetting feel natural and gentle. There is a caesura at the comma in 'remember, do not grieve', which creates a pause before the instruction, giving the command 'do not grieve' extra weight and a tender, firm emphasis.",
        markScheme: [
          { point: "Identifies the enjambment between lines 9 and 10", keywords: ["for a while", "and afterwards", "runs on", "enjambment", "line 9", "flows"] },
          { point: "Explains the effect of the enjambment (time passing, natural flow, moving on)", keywords: ["time passing", "moving on", "natural", "flow", "forward", "continues"] },
          { point: "Identifies the caesura at the comma in line 10", keywords: ["caesura", "comma", "remember, do not", "mid-line", "pause in the middle"] },
          { point: "Explains the effect of the caesura (pause, emphasis on 'do not grieve')", keywords: ["emphasis", "do not grieve", "weight", "stress", "firm", "highlights"] },
        ],
        commonError: "Confusing the two terms: calling the comma at the end of a line a caesura, or calling any long sentence enjambment.",
        guideRef: "structure",
      },
      {
        id: "ptk-quiz-qa-4",
        extract: "He clasps the crag with crooked hands;\nClose to the sun in lonely lands,\nRing'd with the azure world, he stands.\n\nThe wrinkled sea beneath him crawls;\nHe watches from his mountain walls,\nAnd like a thunderbolt he falls.",
        question: "Identify the rhyme scheme of 'The Eagle' and suggest why this pattern suits the poem.",
        marks: 3,
        hint: "Count how many different end sounds each stanza uses.",
        modelAnswer:
          "The rhyme scheme is AAA BBB: each tercet uses a single rhyme sound (hands / lands / stands, then crawls / walls / falls). This repeated triple rhyme feels solid and controlled, matching the eagle's steady grip and dominance. The final rhyme 'falls' lands with force, so the sound pattern builds up and then strikes, like the eagle's dive.",
        markScheme: [
          { point: "Correctly identifies AAA BBB (triplets or tercets on one rhyme)", keywords: ["aaa bbb", "aaa", "triplet", "same rhyme", "one rhyme sound", "tercet"] },
          { point: "Links the regular, repeated rhyme to control, power or stillness", keywords: ["control", "power", "solid", "stable", "dominance", "steady", "order"] },
          { point: "Comments on the final rhyme 'falls' and the sudden ending", keywords: ["falls", "final", "ending", "dive", "strike", "sudden"] },
        ],
        commonError: "Writing 'AABBCC' because each line pair rhymes, without noticing all three lines in each stanza share one sound.",
        guideRef: "rhyme",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "ptk-mcq-p1",
        title: "MCQ Paper 1",
        passage: {
          title: "The Tyger",
          source: "William Blake, Songs of Experience (1794)",
          text: "Tyger Tyger, burning bright,\nIn the forests of the night;\nWhat immortal hand or eye,\nCould frame thy fearful symmetry?\n\nIn what distant deeps or skies\nBurnt the fire of thine eyes?\nOn what wings dare he aspire?\nWhat the hand, dare seize the fire?\n\nAnd what shoulder, and what art,\nCould twist the sinews of thy heart?\nAnd when thy heart began to beat,\nWhat dread hand? and what dread feet?\n\nWhat the hammer? what the chain,\nIn what furnace was thy brain?\nWhat the anvil? what dread grasp,\nDare its deadly terrors clasp!\n\nWhen the stars threw down their spears\nAnd water'd heaven with their tears:\nDid he smile his work to see?\nDid he who made the Lamb make thee?\n\nTyger Tyger burning bright,\nIn the forests of the night:\nWhat immortal hand or eye,\nDare frame thy fearful symmetry?",
          note: "Questions 1 to 12 and 19 to 20 are about this poem. Questions 13 to 18 test sound and imagery using other short extracts.",
        },
        questions: [
          {
            id: "ptk-mcq-p1-q01",
            question: "'The Tyger' is written in stanzas of four lines. What is a four-line stanza called?",
            options: ["Couplet", "Tercet", "Quatrain", "Sestet"],
            answerIndex: 2,
            hint: "Think of 'quad' meaning four.",
            explanation:
              "A quatrain is a four-line stanza. A tercet (three lines) is the tempting near-miss; a couplet has two lines and a sestet six.",
            guideRef: "structure",
          },
          {
            id: "ptk-mcq-p1-q02",
            question: "What is the rhyme scheme of each stanza of 'The Tyger'?",
            options: ["ABAB", "AABB", "ABBA", "ABCB"],
            answerIndex: 1,
            hint: "Look at bright / night, then eye / symmetry.",
            explanation:
              "Each stanza is two rhyming couplets: bright / night (AA), eye / symmetry (BB, a pair that probably rhymed fully in Blake's pronunciation). ABAB is tempting if you assume alternate rhyme, but here the rhymes come in neighbouring pairs.",
            guideRef: "rhyme",
          },
          {
            id: "ptk-mcq-p1-q03",
            question: "'bright' and 'night' (lines 1 and 2) share exactly the same vowel and final consonant sound. What kind of rhyme is this?",
            options: ["Internal rhyme", "Full rhyme", "Half (slant) rhyme", "Onomatopoeia"],
            answerIndex: 1,
            hint: "Say the two words aloud: is the match exact or only close?",
            explanation:
              "An exact match of vowel and final sound at the ends of lines is full (perfect) rhyme. Half rhyme is the tempting distractor, but it needs sounds that are close and NOT identical, which 'bright / night' are not. Internal rhyme happens within a single line. (By contrast, 'eye / symmetry' sounds like a near miss today but was probably a full rhyme in Blake's time, so it is not a safe example of either term.)",
            guideRef: "rhyme",
          },
          {
            id: "ptk-mcq-p1-q04",
            question: "Say 'Tyger Tyger, burning bright' aloud. What is its rhythm?",
            options: [
              "Iambic pentameter",
              "Free verse with no pattern",
              "Anapaestic, like a gallop",
              "Trochaic: a stressed syllable followed by an unstressed one",
            ],
            answerIndex: 3,
            hint: "Does the line begin with a strong beat or a weak one?",
            explanation:
              "TY-ger TY-ger BURN-ing BRIGHT starts on a stress and alternates DUM-da: trochaic. Iambic pentameter is the tempting answer, but iambs begin unstressed and pentameter needs ten syllables; this line has seven.",
            guideRef: "rhythm-metre",
          },
          {
            id: "ptk-mcq-p1-q05",
            question: "What effect does the trochaic rhythm most likely have in this poem?",
            options: [
              "It creates a forceful, chant-like beat, like hammer blows",
              "It makes the poem sound relaxed and conversational",
              "It slows the poem down to a whisper",
              "It hides the rhyme so the poem sounds like prose",
            ],
            answerIndex: 0,
            hint: "Think about the blacksmith imagery in stanza 4.",
            explanation:
              "Starting each line on a stress gives a pounding, incantatory beat that echoes the hammer and anvil. 'Relaxed and conversational' is closer to the effect of iambic rhythm, which mirrors everyday speech.",
            guideRef: "rhythm-metre",
          },
          {
            id: "ptk-mcq-p1-q06",
            question: "'Hammer', 'chain', 'furnace' and 'anvil' create a semantic field of...",
            options: ["the jungle", "religion", "a blacksmith's forge", "warfare"],
            answerIndex: 2,
            hint: "Where would you find an anvil?",
            explanation:
              "All four words belong to metalworking in a forge. 'Warfare' is tempting because chains and hammers can be weapons, but the anvil and furnace fix the field firmly in the smithy.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p1-q07",
            question: "What does the forge imagery suggest about the tiger's creator?",
            options: [
              "The creator is gentle and loving",
              "The creator is a mighty craftsman whose work is dangerous and violent",
              "The creator made the tiger by accident",
              "The creator is weak and afraid of the tiger",
            ],
            answerIndex: 1,
            hint: "What kind of person works with fire, hammers and chains?",
            explanation:
              "Forging is skilled, powerful and dangerous work, so the creator appears immensely strong. 'Gentle and loving' suits the creator of 'the Lamb', which is exactly the contrast the poem questions.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p1-q08",
            question: "Which technique dominates the whole poem?",
            options: ["Simile", "Onomatopoeia", "Pathetic fallacy", "Rhetorical questions"],
            answerIndex: 3,
            hint: "Count the question marks.",
            explanation:
              "The poem is built almost entirely from questions that are never answered, creating awe and mystery. Simile is tempting as a common technique, but there is no 'like' or 'as' comparison in the poem.",
            guideRef: "technique-and-effect",
          },
          {
            id: "ptk-mcq-p1-q09",
            question: "In stanza 1 the creator 'Could frame' the tiger; in stanza 6 he 'Dare frame' it. What does this change suggest?",
            options: [
              "The question has moved from whether the creator was able to make the tiger to whether he was brave enough",
              "Blake made a copying mistake",
              "The speaker now knows the answer to the question",
              "The tiger has become less frightening",
            ],
            answerIndex: 0,
            hint: "What is the difference between 'could' and 'dare'?",
            explanation:
              "'Could' is about ability; 'dare' is about courage or recklessness, so the speaker's awe and fear have grown. The speaker does not 'know the answer': the poem still ends on a question.",
            guideRef: "structure",
          },
          {
            id: "ptk-mcq-p1-q10",
            question: "The final stanza almost repeats the first. This is called...",
            options: ["a volta", "an octave", "a cyclical structure", "enjambment"],
            answerIndex: 2,
            hint: "The poem comes back round to where it began.",
            explanation:
              "Ending where you began is a cyclical structure. A volta is a turn or shift; the single-word change ('Dare') is a small shift, but the overall technique of returning to the opening is cyclical structure.",
            guideRef: "structure",
          },
          {
            id: "ptk-mcq-p1-q11",
            question: "'Did he who made the Lamb make thee?' What does the Lamb most likely symbolise?",
            options: ["Danger and fury", "Innocence and gentleness", "Wealth and power", "Loneliness"],
            answerIndex: 1,
            hint: "Think of the companion poem in Songs of Innocence.",
            explanation:
              "The lamb traditionally symbolises innocence (and, in Christian imagery, Christ). The question sets innocence against the tiger's fury. 'Danger and fury' describes the tiger, not the lamb.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p1-q12",
            extract: "When the stars threw down their spears\nAnd water'd heaven with their tears:",
            question: "Which technique is used in these lines?",
            options: ["Onomatopoeia", "Internal rhyme", "Simile", "Personification"],
            answerIndex: 3,
            hint: "Can stars really throw or cry?",
            explanation:
              "The stars are given human actions (throwing spears, weeping), which is personification. It is not a simile, because there is no 'like' or 'as'.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p1-q13",
            extract: "The shrill, demented choirs of wailing shells;\n(Wilfred Owen, Anthem for Doomed Youth)",
            question: "Which sound device is most prominent in this line?",
            options: ["Plosives", "Sibilance", "Assonance", "Internal rhyme"],
            answerIndex: 1,
            hint: "Listen for the hissing sounds.",
            explanation:
              "The repeated 's' and 'sh' sounds (shrill, shells) are sibilance, imitating the hiss of shells in flight. Plosives are harsh p, b, t, d, k, g sounds, which are not the main pattern here.",
            guideRef: "sound",
          },
          {
            id: "ptk-mcq-p1-q14",
            extract: "Only the stuttering rifles' rapid rattle\n(Wilfred Owen, Anthem for Doomed Youth)",
            question: "Which word in this line is the clearest example of onomatopoeia?",
            options: ["rattle", "Only", "rifles'", "rapid"],
            answerIndex: 0,
            hint: "Which word sounds like the noise it describes?",
            explanation:
              "'Rattle' imitates the sound of rapid gunfire. 'Rapid' is tempting because it alliterates with 'rattle' and 'rifles', but it describes speed rather than imitating a sound.",
            guideRef: "sound",
          },
          {
            id: "ptk-mcq-p1-q15",
            extract: "Bent double, like old beggars under sacks,\n(Wilfred Owen, Dulce et Decorum Est)",
            question: "What is the effect of the repeated 'b' and 'k' sounds in this line?",
            options: [
              "They create a soft, soothing lullaby",
              "They imitate birdsong",
              "Their harsh plosive sounds make the soldiers' movement feel heavy and laboured",
              "They make the line speed up joyfully",
            ],
            answerIndex: 2,
            hint: "Are 'b' and 'k' gentle sounds or hard ones?",
            explanation:
              "'B' and 'k' are plosives: hard, abrupt sounds that make the line feel heavy and exhausting, like the soldiers trudging. A 'soft, soothing' effect would come from sounds like 's', 'm' or 'l'.",
            guideRef: "sound",
          },
          {
            id: "ptk-mcq-p1-q16",
            extract: "Hear the mellow wedding bells\n(Edgar Allan Poe, The Bells, 1849)",
            question: "The same short 'e' vowel sound repeated in 'mellow', 'wedding' and 'bells' is an example of...",
            options: ["consonance", "sibilance", "plosives", "assonance"],
            answerIndex: 3,
            hint: "Is the repeated sound a vowel or a consonant?",
            explanation:
              "A vowel sound repeated inside nearby words, with different consonants around it, is assonance; here the ringing 'e' chimes like the bells. Consonance is the tempting wrong answer (there are repeated 'l' sounds too), but the question asks about the vowel, and consonance repeats consonant sounds.",
            guideRef: "sound",
          },
          {
            id: "ptk-mcq-p1-q17",
            extract: "The cold wind whipped the black, cracked rocks.",
            question: "The 'k' sounds at the END of 'black', 'cracked' and 'rocks' are an example of...",
            options: ["consonance", "alliteration", "assonance", "onomatopoeia"],
            answerIndex: 0,
            hint: "The sound is not at the start of the words.",
            explanation:
              "Repeated consonant sounds within or at the end of words are consonance. Alliteration is tempting, but it needs the sound at the START of the words (as in 'wind whipped').",
            guideRef: "sound",
          },
          {
            id: "ptk-mcq-p1-q18",
            extract: "What passing-bells for these who die as cattle?\n... Can patter out their hasty orisons.\n(Wilfred Owen, Anthem for Doomed Youth; 'orisons' means prayers)",
            question: "'Passing-bells' and 'orisons' belong to which semantic field?",
            options: ["Farming", "Religion and funerals", "Music and dance", "The weather"],
            answerIndex: 1,
            hint: "Where would you hear bells rung for the dead and prayers said?",
            explanation:
              "Passing-bells were rung for the dying and orisons are prayers, so both belong to religion and funerals; Owen highlights that soldiers get no proper funeral. 'Farming' is tempting because of 'cattle', but that word is a simile for how the soldiers die, not part of the field.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p1-q19",
            question: "Which of these is the WEAKEST piece of analysis of 'The Tyger'?",
            options: [
              "Blake uses rhetorical questions in the poem, which makes it interesting.",
              "The paradox 'fearful symmetry' suggests the tiger is both beautiful and terrifying.",
              "The verb 'seize' makes the creator's act sound bold and dangerous, like grabbing fire.",
              "The repeated 'What' questions in stanza 4 pound like hammer blows, matching the forge imagery.",
            ],
            answerIndex: 0,
            hint: "Which one names a technique but never explains its effect?",
            explanation:
              "The option ‘Blake uses rhetorical questions in the poem, which makes it…’ is feature spotting: 'makes it interesting' could be said of any technique in any poem. The other three each explain a specific effect linked to a precise word or pattern.",
            guideRef: "technique-and-effect",
          },
          {
            id: "ptk-mcq-p1-q20",
            question: "Stanza 4 ends with an exclamation mark ('Dare its deadly terrors clasp!') rather than a question mark. What is the most convincing explanation?",
            options: [
              "Blake had run out of question marks",
              "The speaker's questioning bursts into an exclamation of horror and amazement at the poem's climax",
              "It shows the speaker has found the answer to all the questions",
              "It signals that the poem is about to end",
            ],
            answerIndex: 1,
            hint: "Think about where this stanza sits and how emotion builds.",
            explanation:
              "After a relentless build-up of questions, the exclamation marks an emotional peak: the speaker is overwhelmed by the 'deadly terrors'. It does not mean the answer has been found; the poem continues to ask questions to the very end.",
            guideRef: "structure",
          },
        ],
      },
      {
        id: "ptk-mcq-p2",
        title: "MCQ Paper 2",
        passage: {
          title: "\"Hope\" is the thing with feathers",
          source: "Emily Dickinson (written c.1861, published 1891)",
          text: "\"Hope\" is the thing with feathers -\nThat perches in the soul -\nAnd sings the tune without the words -\nAnd never stops - at all -\n\nAnd sweetest - in the Gale - is heard -\nAnd sore must be the storm -\nThat could abash the little Bird\nThat kept so many warm -\n\nI've heard it in the chillest land -\nAnd on the strangest Sea -\nYet - never - in Extremity,\nIt asked a crumb - of me.",
          note: "Gale: a strong wind. abash: embarrass or silence. Extremity: the most desperate situation. Questions 1 to 14 and 20 are about this poem; questions 15 to 19 test imagery more widely.",
        },
        questions: [
          {
            id: "ptk-mcq-p2-q01",
            question: "Which technique runs through the whole of Dickinson's poem?",
            options: ["Onomatopoeia", "Extended metaphor", "Pathetic fallacy", "Dramatic monologue"],
            answerIndex: 1,
            hint: "Hope is described as the same thing from first line to last.",
            explanation:
              "Hope is presented as a bird across all three stanzas, so it is an extended metaphor. Pathetic fallacy is tempting because of the storm, but the weather is a symbol of hardship, not a mirror of the speaker's mood.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p2-q02",
            question: "What does the verb 'perches' suggest about hope?",
            options: [
              "Hope is heavy and permanent, like a stone",
              "Hope is violent and aggressive",
              "Hope is hidden deep underground",
              "Hope rests lightly inside us and could fly off, yet it chooses to stay",
            ],
            answerIndex: 3,
            hint: "Think about how a bird sits on a branch.",
            explanation:
              "A bird perches lightly and can leave at any moment, so hope is delicate yet present. 'Heavy and permanent' is the opposite connotation of 'perch'.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p2-q03",
            question: "'And sings the tune without the words' suggests that hope...",
            options: [
              "is instinctive and felt rather than explained in language",
              "is a song everyone knows by heart",
              "is silent and cannot be heard",
              "is only found in music",
            ],
            answerIndex: 0,
            hint: "What is a tune without words?",
            explanation:
              "A tune without words is felt, not reasoned: hope works beneath language and logic. 'Silent' is wrong because the bird does sing; it simply has no words.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p2-q04",
            question: "What is the most distinctive feature of Dickinson's punctuation in this poem?",
            options: [
              "Long chains of commas",
              "Question marks at the end of every line",
              "Frequent dashes that create pauses and hesitations",
              "No punctuation at all",
            ],
            answerIndex: 2,
            hint: "Look at the end of nearly every line.",
            explanation:
              "Dickinson uses dashes throughout, creating pauses, breathless fragments and emphasis. There are commas, but very few; the dash is her trademark.",
            guideRef: "structure",
          },
          {
            id: "ptk-mcq-p2-q05",
            question: "In stanza 2, what does 'the storm' most likely symbolise?",
            options: ["Happiness", "Hardship and trouble in life", "A real weather forecast", "Anger at the bird"],
            answerIndex: 1,
            hint: "When do people most need hope?",
            explanation:
              "Storms commonly symbolise hardship; hope sings 'sweetest' in the gale, when life is hardest. Reading it as a literal storm misses the symbolic meaning the extended metaphor creates.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p2-q06",
            question: "'soul' and 'all' (lines 2 and 4) are an example of...",
            options: ["internal rhyme", "full rhyme", "eye rhyme", "half (slant) rhyme"],
            answerIndex: 3,
            hint: "Do the vowel sounds match exactly?",
            explanation:
              "Soul and all share the 'l' ending but not the vowel sound, so it is half rhyme. Eye rhyme is tempting, but eye rhymes look alike on the page (love / move); 'soul' and 'all' do not.",
            guideRef: "rhyme",
          },
          {
            id: "ptk-mcq-p2-q07",
            question: "Which pair of words from the poem is a FULL rhyme?",
            options: ["Sea / me", "soul / all", "storm / Bird", "Extremity / crumb"],
            answerIndex: 0,
            hint: "Find the pair whose sounds match perfectly.",
            explanation:
              "Sea and me match exactly in vowel and ending. 'Soul / all' is tempting because those words are a rhyme pair, but their vowel sounds differ, so they are only a half rhyme.",
            guideRef: "rhyme",
          },
          {
            id: "ptk-mcq-p2-q08",
            question: "The poem's lines alternate between about eight and six syllables in quatrains. This pattern, used in many hymns and ballads, is called...",
            options: ["iambic pentameter", "free verse", "common metre (ballad or hymn metre)", "a villanelle"],
            answerIndex: 2,
            hint: "It is the metre of many church hymns Dickinson grew up singing.",
            explanation:
              "Alternating lines of eight and six syllables is common metre, the rhythm of hymns and ballads. Iambic pentameter has ten syllables in every line.",
            guideRef: "rhythm-metre",
          },
          {
            id: "ptk-mcq-p2-q09",
            question: "What is the effect of the dashes in 'And never stops - at all -'?",
            options: [
              "They show the poem is unfinished",
              "They isolate and stress 'at all', emphasising that hope's song is truly unending",
              "They make the line read faster",
              "They show that the bird is angry",
            ],
            answerIndex: 1,
            hint: "What happens to the words trapped between dashes?",
            explanation:
              "The dashes create pauses that spotlight 'at all', insisting that hope never stops. They slow the line down rather than speeding it up.",
            guideRef: "structure",
          },
          {
            id: "ptk-mcq-p2-q10",
            question: "'I've heard it in the chillest land - / And on the strangest Sea -'. What do the superlatives 'chillest' and 'strangest' suggest?",
            options: [
              "Hope survives even in the most extreme, hostile situations",
              "The speaker enjoys travelling",
              "Hope only exists in cold countries",
              "The bird is lost",
            ],
            answerIndex: 0,
            hint: "A superlative means 'the most'.",
            explanation:
              "The superlatives push to extremes, showing hope endures in the harshest places. Taking the lines literally as travel misses that 'land' and 'Sea' are part of the metaphor of life's trials.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p2-q11",
            question: "What does the final stanza reveal about hope?",
            options: [
              "Hope demands a high price from us",
              "Hope abandons us in hard times",
              "Hope is only for the lucky",
              "Hope gives endlessly but asks nothing in return",
            ],
            answerIndex: 3,
            hint: "What did the bird never ask for?",
            explanation:
              "'Never... It asked a crumb - of me' means hope has never demanded even the tiniest payment. 'Demands a high price' reverses the meaning.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p2-q12",
            question: "Why is the word 'crumb' especially well chosen?",
            options: [
              "It suggests the speaker is hungry",
              "It is a long, impressive word",
              "It continues the bird metaphor and is the smallest thing one could give",
              "It rhymes with 'storm'",
            ],
            answerIndex: 2,
            hint: "What do people feed to small birds?",
            explanation:
              "We feed birds crumbs, so the word keeps the extended metaphor going, and a crumb is almost nothing, which stresses hope's generosity. It does not rhyme with 'storm'.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p2-q13",
            question: "How does the voice of the poem change in stanza 3?",
            options: [
              "It switches from statements to questions",
              "It moves from general description to personal first-person experience ('I've heard it')",
              "It switches from first person to third person",
              "It changes from English to Latin",
            ],
            answerIndex: 1,
            hint: "Look for the first pronoun referring to the speaker.",
            explanation:
              "'I've heard it' introduces the speaker's own testimony, making the claims about hope feel personal and proven. The poem does not use questions, so the option ‘It switches from statements to questions’ is wrong.",
            guideRef: "tone-voice",
          },
          {
            id: "ptk-mcq-p2-q14",
            question: "Which word best describes the overall tone of the poem?",
            options: ["Quietly confident and grateful", "Bitter and angry", "Mocking", "Terrified"],
            answerIndex: 0,
            hint: "How does the speaker feel about hope?",
            explanation:
              "The speaker admires hope's constancy and is thankful that it asks nothing: a quietly confident, grateful tone. The storm is frightening, but the speaker is not terrified, because hope survives it.",
            guideRef: "tone-voice",
          },
          {
            id: "ptk-mcq-p2-q15",
            question: "Which of these is a METAPHOR rather than a simile?",
            options: [
              "Her voice was like honey",
              "He ran as fast as a cheetah",
              "The clouds were like grey wool",
              "The classroom was a zoo",
            ],
            answerIndex: 3,
            hint: "Which one has no 'like' or 'as'?",
            explanation:
              "'The classroom was a zoo' says one thing IS another: a metaphor. The others all use 'like' or 'as', so they are similes.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p2-q16",
            question: "What is an extended metaphor?",
            options: [
              "A very long simile",
              "A metaphor that uses more than ten words",
              "A metaphor developed across several lines or a whole poem",
              "A metaphor that is repeated word for word",
            ],
            answerIndex: 2,
            hint: "Think of Dickinson's bird.",
            explanation:
              "An extended metaphor keeps developing the same comparison, adding new details. Repeating a metaphor word for word is repetition, not extension.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p2-q17",
            question: "In a poem about a family argument, a cracked mirror hangs in the hallway. What does it most likely symbolise?",
            options: [
              "Wealth",
              "A broken relationship or a family that no longer 'reflects' itself as whole",
              "Good luck",
              "The weather outside",
            ],
            answerIndex: 1,
            hint: "What has happened to the family, and what has happened to the mirror?",
            explanation:
              "A cracked mirror mirrors the broken family: an object standing for a bigger idea is a symbol. 'Good luck' is the opposite of the traditional superstition about broken mirrors.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p2-q18",
            question: "Which sentence uses pathetic fallacy?",
            options: [
              "On the day of the funeral, the sky hung low and grey, weeping steadily onto the mourners.",
              "The sky was blue.",
              "He was as tall as a tree.",
              "The bell rang: ding, dong, ding.",
            ],
            answerIndex: 0,
            hint: "Look for weather that matches human feelings.",
            explanation:
              "The grey, 'weeping' sky mirrors the mourners' grief, which is pathetic fallacy. 'The sky was blue' mentions weather but does not link it to any emotion.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p2-q19",
            question: "Which line uses personification?",
            options: [
              "Ten thousand saw I at a glance",
              "Beside the lake, beneath the trees",
              "I wandered lonely as a cloud",
              "Tossing their heads in sprightly dance",
            ],
            answerIndex: 3,
            hint: "Which line gives flowers human actions?",
            explanation:
              "Daffodils with 'heads' that toss in a 'dance' are given human qualities: personification. 'I wandered lonely as a cloud' is a simile, the tempting distractor.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p2-q20",
            question: "Why might Dickinson have chosen a 'little Bird' rather than a powerful creature such as an eagle to represent hope?",
            options: [
              "Because eagles do not have feathers",
              "Because she did not know about eagles",
              "A small, fragile bird makes hope's survival through the storm more surprising and moving",
              "Because little birds are louder than eagles",
            ],
            answerIndex: 2,
            hint: "Which is more impressive: a tank surviving a storm, or a sparrow?",
            explanation:
              "Making hope tiny and vulnerable means its endurance in 'the Gale' is remarkable, which heightens the reader's admiration. The other options are factually wrong or irrelevant.",
            guideRef: "technique-and-effect",
          },
        ],
      },
      {
        id: "ptk-mcq-p3",
        title: "MCQ Paper 3",
        passage: {
          title: "Remember",
          source: "Christina Rossetti (written 1849, published 1862)",
          text: "Remember me when I am gone away,\nGone far away into the silent land;\nWhen you can no more hold me by the hand,\nNor I half turn to go yet turning stay.\nRemember me when no more day by day\nYou tell me of our future that you planned:\nOnly remember me; you understand\nIt will be late to counsel then or pray.\nYet if you should forget me for a while\nAnd afterwards remember, do not grieve:\nFor if the darkness and corruption leave\nA vestige of the thoughts that once I had,\nBetter by far you should forget and smile\nThan that you should remember and be sad.",
          note: "counsel: give advice. corruption: decay of the body. vestige: a small trace. Questions 16, 17 and 19 test structure more widely.",
        },
        questions: [
          {
            id: "ptk-mcq-p3-q01",
            question: "'Remember' has fourteen lines in iambic pentameter. What form is it?",
            options: ["A sonnet", "A ballad", "A villanelle", "A haiku"],
            answerIndex: 0,
            hint: "Which form is defined by having 14 lines?",
            explanation:
              "Fourteen lines of iambic pentameter with a set rhyme scheme make a sonnet. A villanelle is tempting as another fixed form, but it has 19 lines and two refrains.",
            guideRef: "form",
          },
          {
            id: "ptk-mcq-p3-q02",
            question: "Which type of sonnet is 'Remember'?",
            options: [
              "Shakespearean, because it ends with a rhyming couplet",
              "Free-verse sonnet with no rhyme",
              "Petrarchan, because it divides into an octave and a sestet",
              "Spenserian, because its quatrains interlock",
            ],
            answerIndex: 2,
            hint: "Look at the rhyme scheme of the first eight lines and where the poem turns.",
            explanation:
              "Its octave rhymes ABBAABBA and the poem turns at line 9, which is Petrarchan. It is tempting to call it Shakespearean, but the last two lines (smile / sad) do not rhyme with each other, so there is no final couplet.",
            guideRef: "form",
          },
          {
            id: "ptk-mcq-p3-q03",
            question: "What is the rhyme scheme of lines 1 to 8?",
            options: ["ABAB CDCD", "ABBA ABBA", "AABB CCDD", "ABCB DEFE"],
            answerIndex: 1,
            hint: "away ‘ABAB CDCD’, land ‘ABBA ABBA’, hand, stay...",
            explanation:
              "away / land / hand / stay / day / planned / understand / pray gives ABBA ABBA, the classic Petrarchan octave. ABAB CDCD is the Shakespearean pattern.",
            guideRef: "rhyme",
          },
          {
            id: "ptk-mcq-p3-q04",
            question: "Where is the volta (turn) in the poem?",
            options: [
              "At 'Gone far away' in line 2",
              "At 'Only remember me' in line 7",
              "At 'Better by far' in line 13",
              "At 'Yet' at the start of line 9",
            ],
            answerIndex: 3,
            hint: "Look for a contrasting conjunction at the start of the sestet.",
            explanation:
              "'Yet' begins the sestet and turns the poem from 'remember me' to 'forget me if it makes you happy'. Line 13 completes the new argument, but the turn has already happened at line 9.",
            guideRef: "structure",
          },
          {
            id: "ptk-mcq-p3-q05",
            question: "What does 'the silent land' most likely refer to?",
            options: ["A foreign country", "A quiet library", "Death or the grave", "The countryside"],
            answerIndex: 2,
            hint: "Where is the speaker 'gone away' to, permanently?",
            explanation:
              "'The silent land' is a gentle metaphor (a euphemism) for death, where no one speaks. A 'foreign country' is tempting if the poem is read literally, but the later references to 'darkness and corruption' confirm that death is meant.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p3-q06",
            question: "What is the effect of repeating 'Remember me' in the octave?",
            options: [
              "It shows the speaker has forgotten what she was saying",
              "It creates a pleading, insistent tone",
              "It makes the poem sound like a joke",
              "It shows the speaker does not care",
            ],
            answerIndex: 1,
            hint: "Why do people repeat a request?",
            explanation:
              "The repeated imperative sounds like a heartfelt plea, stressing how much the speaker wants to be remembered. That insistence is what makes the volta's reversal so striking.",
            guideRef: "structure",
          },
          {
            id: "ptk-mcq-p3-q07",
            question: "'Nor I half turn to go yet turning stay.' What does this line show?",
            options: [
              "The lovers' reluctance to part: the speaker would start to leave, then stay",
              "The speaker is dizzy",
              "The speaker is angry and leaves quickly",
              "The lovers have argued",
            ],
            answerIndex: 0,
            hint: "She turns to go... and then what?",
            explanation:
              "The line captures the tender hesitation of lovers who cannot bear to part, which death will end. There is no sign of anger or argument.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p3-q08",
            question: "How does the speaker's request change in the sestet?",
            options: [
              "She demands to be remembered more often",
              "She asks to be buried in a particular place",
              "She asks her loved one to pray for her",
              "She says it is better to be forgotten than to cause her loved one sadness",
            ],
            answerIndex: 3,
            hint: "Read the last two lines.",
            explanation:
              "'Better by far you should forget and smile / Than that you should remember and be sad' reverses the octave's plea. The option ‘She asks her loved one to pray for her’ is tempting because 'pray' appears in line 8, but the line says it will then be too late to pray.",
            guideRef: "structure",
          },
          {
            id: "ptk-mcq-p3-q09",
            question: "'forget and smile' versus 'remember and be sad'. Which technique is this?",
            options: ["Onomatopoeia", "Pathetic fallacy", "Antithesis (balanced contrast)", "Internal rhyme"],
            answerIndex: 2,
            hint: "The two halves set opposites against each other.",
            explanation:
              "Placing opposites (forget / remember, smile / sad) in balanced phrases is antithesis, which makes the choice clear and memorable. There is no rhyme within the line, so it is not internal rhyme.",
            guideRef: "technique-and-effect",
          },
          {
            id: "ptk-mcq-p3-q10",
            question: "'Re-MEM-ber ME when I am GONE a-WAY'. What metre is this line?",
            options: ["Trochaic tetrameter", "Iambic pentameter", "Free verse", "Dactylic dimeter"],
            answerIndex: 1,
            hint: "Count the syllables and notice whether the line starts soft or strong.",
            explanation:
              "Ten syllables in five da-DUM feet make iambic pentameter, the usual sonnet metre. Trochaic is wrong because the line starts on an unstressed syllable ('re-').",
            guideRef: "rhythm-metre",
          },
          {
            id: "ptk-mcq-p3-q11",
            question: "In 'the darkness and corruption', what does 'corruption' mean here?",
            options: [
              "The physical decay of the body after death",
              "Dishonest behaviour by politicians",
              "A computer error",
              "Bad manners",
            ],
            answerIndex: 0,
            hint: "What happens to a body in the grave?",
            explanation:
              "In this older sense, 'corruption' means decay, which links with 'darkness' to describe the grave. The modern meaning of dishonesty does not fit the context.",
            guideRef: "whole-poem",
          },
          {
            id: "ptk-mcq-p3-q12",
            question: "'A vestige of the thoughts that once I had'. What does 'vestige' mean?",
            options: ["A garment", "A loud cry", "A promise", "A small trace or remnant"],
            answerIndex: 3,
            hint: "Think of 'vestigial': something left over.",
            explanation:
              "A vestige is a trace of something that has mostly disappeared, here a faint memory of the speaker's love. 'A garment' is tempting because of 'vest', but it is unrelated.",
            guideRef: "whole-poem",
          },
          {
            id: "ptk-mcq-p3-q13",
            question: "'It will be late to counsel then or pray.' What does this line suggest?",
            options: [
              "The speaker is late for church",
              "Once she has died, it will be too late for advice or prayer to change anything",
              "Her loved one gives bad advice",
              "The speaker never prayed",
            ],
            answerIndex: 1,
            hint: "When is 'then'?",
            explanation:
              "'Then' refers to after death, when advice ('counsel') or prayer can no longer help. The line stresses the finality of death, reinforcing why she wants to be remembered.",
            guideRef: "whole-poem",
          },
          {
            id: "ptk-mcq-p3-q14",
            question: "Which best describes the shift in tone from octave to sestet?",
            options: [
              "From joyful to furious",
              "From calm to panicked",
              "From pleading and insistent to selfless and tender",
              "From serious to comic",
            ],
            answerIndex: 2,
            hint: "Compare 'Remember me' with 'Better by far you should forget and smile'.",
            explanation:
              "The octave pleads to be remembered; the sestet lovingly releases the listener. 'Calm to panicked' reverses the actual movement, which ends in calm acceptance.",
            guideRef: "tone-voice",
          },
          {
            id: "ptk-mcq-p3-q15",
            question: "Which pair of lines from the poem contains ENJAMBMENT across the line break?",
            options: [
              "Remember me when I am gone away, / Gone far away into the silent land;",
              "Yet if you should forget me for a while / And afterwards remember, do not grieve:",
              "Nor I half turn to go yet turning stay. / Remember me when no more day by day",
              "It will be late to counsel then or pray. / Yet if you should forget me for a while",
            ],
            answerIndex: 1,
            hint: "Find the first line that ends with no punctuation at all.",
            explanation:
              "'for a while' has no punctuation and the sentence runs straight on into 'And afterwards remember', which is enjambment. The other first lines end with a comma or full stop, so they are end-stopped.",
            guideRef: "structure",
          },
          {
            id: "ptk-mcq-p3-q16",
            question: "A six-line stanza (or a six-line section of a sonnet) is called a...",
            options: ["quatrain", "tercet", "octave", "sestet"],
            answerIndex: 3,
            hint: "Think 'sextet' in music.",
            explanation:
              "A sestet has six lines. An octave has eight; the two together make a Petrarchan sonnet.",
            guideRef: "structure",
          },
          {
            id: "ptk-mcq-p3-q17",
            question: "How many lines are in an octave?",
            options: ["Eight", "Six", "Four", "Ten"],
            answerIndex: 0,
            hint: "Think of an octopus.",
            explanation:
              "Octave comes from the Latin for 'eight'. Six lines is a sestet, the second half of a Petrarchan sonnet.",
            guideRef: "structure",
          },
          {
            id: "ptk-mcq-p3-q18",
            question: "Which line from 'Remember' contains a clear CAESURA in the middle of the line?",
            options: [
              "Gone far away into the silent land;",
              "When you can no more hold me by the hand,",
              "Only remember me; you understand",
              "Than that you should remember and be sad.",
            ],
            answerIndex: 2,
            hint: "Look for punctuation in the middle, not at the end.",
            explanation:
              "The semicolon after 'Only remember me' creates a strong mid-line pause, which is a caesura. The other lines have punctuation only at the end, which is end-stopping.",
            guideRef: "structure",
          },
          {
            id: "ptk-mcq-p3-q19",
            extract: "Half a league, half a league,\nHalf a league onward,\nAll in the valley of Death\nRode the six hundred.\n(Alfred, Lord Tennyson, The Charge of the Light Brigade, 1854)",
            question: "The line 'Rode the six hundred' returns at the end of several stanzas. A line repeated at intervals through a poem is called a...",
            options: ["volta", "refrain", "caesura", "couplet"],
            answerIndex: 1,
            hint: "Think of the chorus of a song.",
            explanation:
              "A refrain is a line repeated at intervals, like a chorus; here it hammers home the doomed soldiers. A volta is a single turn in thought, not a repeated line.",
            guideRef: "structure",
          },
          {
            id: "ptk-mcq-p3-q20",
            question: "Why does the Petrarchan form particularly suit what happens in 'Remember'?",
            options: [
              "Because Petrarchan sonnets must be about death",
              "Because the form is short and quick to read",
              "Because Rossetti was Italian and had to use it",
              "Because the volta between octave and sestet enacts the speaker's change of heart",
            ],
            answerIndex: 3,
            hint: "What structural feature of the form matches the poem's argument?",
            explanation:
              "The form's built-in turn at line 9 mirrors the speaker's shift from 'remember me' to 'forget and smile', so form and meaning work together. Rossetti did have Italian heritage, but no poet 'has to' use a form; the point is how the form serves the meaning.",
            guideRef: "form",
          },
        ],
      },
      {
        id: "ptk-mcq-p4",
        title: "MCQ Paper 4",
        passage: {
          title: "The Eagle",
          source: "Alfred, Lord Tennyson (published 1851)",
          text: "He clasps the crag with crooked hands;\nClose to the sun in lonely lands,\nRing'd with the azure world, he stands.\n\nThe wrinkled sea beneath him crawls;\nHe watches from his mountain walls,\nAnd like a thunderbolt he falls.",
          note: "crag: a steep, rugged rock. azure: sky-blue. Questions 1 to 11 are about this poem; questions 12 to 20 test sound, form and imagery more widely.",
        },
        questions: [
          {
            id: "ptk-mcq-p4-q01",
            question: "'The Eagle' is made of two three-line stanzas. What is a three-line stanza called?",
            options: ["Couplet", "Quatrain", "Tercet", "Octave"],
            answerIndex: 2,
            hint: "'Ter-' means three.",
            explanation:
              "A tercet has three lines. A couplet (two lines) is the tempting near-miss.",
            guideRef: "structure",
          },
          {
            id: "ptk-mcq-p4-q02",
            question: "What is the rhyme scheme of 'The Eagle'?",
            options: ["AAA BBB", "ABA BCB", "AAB CCB", "ABC ABC"],
            answerIndex: 0,
            hint: "hands, lands, stands...",
            explanation:
              "Each tercet uses one rhyme sound: hands / lands / stands (AAA) and crawls / walls / falls (BBB). ABA BCB is the linking pattern of terza rima, which this poem does not use.",
            guideRef: "rhyme",
          },
          {
            id: "ptk-mcq-p4-q03",
            question: "'He clasps the crag with crooked hands'. Which sound device is most obvious?",
            options: ["Sibilance", "Assonance", "Onomatopoeia", "Alliteration of hard 'c/k' sounds"],
            answerIndex: 3,
            hint: "Listen to the start of 'clasps', 'crag', 'crooked'.",
            explanation:
              "Clasps, crag and crooked all begin with a hard 'k' sound: alliteration (of plosives), making the grip sound harsh and tight. Sibilance is tempting because 'clasps' contains an 's', but the dominant pattern is the repeated hard 'c'.",
            guideRef: "sound",
          },
          {
            id: "ptk-mcq-p4-q04",
            question: "Describing the eagle's talons as 'hands' is an example of...",
            options: ["Simile", "Personification", "Onomatopoeia", "Pathetic fallacy"],
            answerIndex: 1,
            hint: "Do eagles really have hands?",
            explanation:
              "Giving the bird human hands is personification, making it seem like a powerful human ruler. It is not a simile because there is no 'like' or 'as'.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p4-q05",
            question: "What is the effect of 'The wrinkled sea beneath him crawls'?",
            options: [
              "The vast sea seems old and feeble from the eagle's height, emphasising the eagle's power",
              "The sea is rough and dangerous",
              "The eagle is afraid of the sea",
              "The sea is rising to attack the eagle",
            ],
            answerIndex: 0,
            hint: "What kind of creature crawls? What has wrinkles?",
            explanation:
              "'Wrinkled' suggests age and 'crawls' suggests slowness and weakness; from the eagle's perspective the mighty ocean is tiny. 'Rough and dangerous' is tempting, but the verbs make the sea seem weak, not threatening.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p4-q06",
            question: "'And like a thunderbolt he falls.' Which statement about this line is most accurate?",
            options: [
              "It is a metaphor showing the eagle is made of lightning",
              "It is pathetic fallacy showing a storm is coming",
              "It is a simile suggesting sudden speed, power and even god-like force",
              "It is onomatopoeia imitating thunder",
            ],
            answerIndex: 2,
            hint: "Spot the comparison word first.",
            explanation:
              "'Like' makes it a simile; a thunderbolt is fast, deadly and (in myth) the weapon of Zeus, so the eagle seems god-like. It is not a metaphor because of 'like'.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p4-q07",
            question: "What does 'Close to the sun in lonely lands' suggest about the eagle?",
            options: [
              "It is sad and wants friends",
              "It is lost",
              "It is too hot",
              "It lives in majestic isolation, high above everything else",
            ],
            answerIndex: 3,
            hint: "Think about status as well as location.",
            explanation:
              "Being 'close to the sun' and alone suggests supremacy, like a king above his subjects. 'Lonely' could imply sadness, but in context it stresses solitary grandeur rather than self-pity.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p4-q08",
            question: "Which describes a Shakespearean sonnet?",
            options: [
              "An octave and a sestet with a volta at line 9",
              "Three quatrains and a rhyming couplet: ABAB CDCD EFEF GG",
              "Five tercets and a quatrain with two refrains",
              "Any poem of exactly 12 lines",
            ],
            answerIndex: 1,
            hint: "It ends with two rhyming lines.",
            explanation:
              "Three alternately rhymed quatrains plus a final couplet is the Shakespearean (English) sonnet. The option ‘An octave and a sestet with a volta at line 9’ is the Petrarchan sonnet, the most tempting confusion.",
            guideRef: "form",
          },
          {
            id: "ptk-mcq-p4-q09",
            question: "'He CLASPS the CRAG with CROOK-ed HANDS'. What is the metre?",
            options: ["Iambic pentameter", "Trochaic pentameter", "Iambic tetrameter", "Free verse"],
            answerIndex: 2,
            hint: "Count the stressed beats.",
            explanation:
              "Eight syllables in four da-DUM feet make iambic tetrameter. Iambic pentameter is tempting, but it needs five stresses and ten syllables.",
            guideRef: "rhythm-metre",
          },
          {
            id: "ptk-mcq-p4-q10",
            question: "How does the second stanza contrast with the first?",
            options: [
              "The first stanza shows the eagle still and watchful; the second ends in sudden movement",
              "The first stanza is set at night; the second during the day",
              "The first stanza is happy; the second is about death",
              "There is no contrast; both stanzas describe the same stillness",
            ],
            answerIndex: 0,
            hint: "Compare 'he stands' with 'he falls'.",
            explanation:
              "The verbs move from 'clasps' and 'stands' (stillness) to 'falls' (explosive action): the poem builds tension and then releases it. The option ‘There is no contrast; both stanzas describe the same stillness’ ignores the dramatic final line.",
            guideRef: "structure",
          },
          {
            id: "ptk-mcq-p4-q11",
            question: "Why is ending the poem on the word 'falls' so effective?",
            options: [
              "It is the longest word in the poem",
              "It shows the eagle has died",
              "It rhymes with nothing else",
              "The poem ends at the instant of the dive, leaving the reader suspended in its speed and power",
            ],
            answerIndex: 3,
            hint: "What do we never see after the dive begins?",
            explanation:
              "The poem stops mid-action, so the dive's force lingers in the reader's imagination. 'The eagle has died' misreads 'falls', which here means 'dives'.",
            guideRef: "structure",
          },
          {
            id: "ptk-mcq-p4-q12",
            extract: "The fair breeze blew, the white foam flew,\nThe furrow followed free;\n(Samuel Taylor Coleridge, The Rime of the Ancient Mariner)",
            question: "'blew' and 'flew' rhyming within the same line is an example of...",
            options: ["half rhyme", "internal rhyme", "eye rhyme", "a rhyming couplet"],
            answerIndex: 1,
            hint: "Where in the poem do the two rhyming words sit?",
            explanation:
              "Rhymes inside a single line are internal rhyme; here they make the ship seem to race along. A rhyming couplet is two consecutive lines that rhyme at their ends.",
            guideRef: "rhyme",
          },
          {
            id: "ptk-mcq-p4-q13",
            question: "Which lines are the clearest example of pathetic fallacy?",
            options: [
              "Shall I compare thee to a summer's day?",
              "I wandered lonely as a cloud",
              "The sedge has withered from the lake, / And no birds sing. (Keats)",
              "Water, water, every where, / Nor any drop to drink.",
            ],
            answerIndex: 2,
            hint: "Which landscape seems to share a character's despair?",
            explanation:
              "In 'La Belle Dame sans Merci' the withered, silent landscape reflects the knight's misery. 'I wandered lonely as a cloud' is a simile about the speaker, not nature reflecting feeling.",
            guideRef: "imagery",
          },
          {
            id: "ptk-mcq-p4-q14",
            question: "A 19-line poem of five tercets and a final quatrain, with two refrains and only two rhyme sounds, is a...",
            options: ["villanelle", "sonnet", "ballad", "haiku"],
            answerIndex: 0,
            hint: "Dylan Thomas's 'Do not go gentle into that good night' is a famous example.",
            explanation:
              "That is the strict definition of a villanelle. A sonnet has 14 lines and does not use refrains.",
            guideRef: "form",
          },
          {
            id: "ptk-mcq-p4-q15",
            question: "A poem of mourning written for someone who has died is called...",
            options: ["an ode", "a ballad", "a haiku", "an elegy"],
            answerIndex: 3,
            hint: "Thomas Gray wrote one 'in a Country Churchyard'.",
            explanation:
              "An elegy mourns the dead, often moving from grief to consolation. An ode is the tempting distractor: it is a serious lyric that celebrates a subject, but it is not defined by mourning.",
            guideRef: "form",
          },
          {
            id: "ptk-mcq-p4-q16",
            question: "In Robert Browning's 'My Last Duchess', a Duke speaks to a silent visitor and reveals his jealous, controlling nature. What form is this?",
            options: ["Elegy", "Dramatic monologue", "Ode", "Free verse"],
            answerIndex: 1,
            hint: "One character speaks; the listener never replies.",
            explanation:
              "A single invented speaker addressing a silent listener and revealing their character is a dramatic monologue. It is not free verse: the poem is written in rhyming couplets of iambic pentameter.",
            guideRef: "form",
          },
          {
            id: "ptk-mcq-p4-q17",
            question: "What is the usual syllable pattern of a haiku in English?",
            options: ["7-5-7", "4-4-4", "5-7-5", "10-10-10"],
            answerIndex: 2,
            hint: "Seventeen syllables in total.",
            explanation:
              "Haiku in English traditionally use three lines of 5, 7 and 5 syllables (17 in total). 7-5-7 also has three lines but reverses the pattern.",
            guideRef: "form",
          },
          {
            id: "ptk-mcq-p4-q18",
            question: "Which statement about free verse is correct?",
            options: [
              "It has no regular rhyme scheme or metre, but its line breaks are still deliberate",
              "It is any poem that is free to read online",
              "It must rhyme but can have any rhythm",
              "It has no line breaks at all",
            ],
            answerIndex: 0,
            hint: "'Free' refers to freedom from what?",
            explanation:
              "Free verse is free from fixed rhyme and metre, but poets still shape it carefully, especially through line breaks. A poem with no line breaks would be prose (or a prose poem).",
            guideRef: "form",
          },
          {
            id: "ptk-mcq-p4-q19",
            question: "Which set of features is most typical of a traditional ballad?",
            options: [
              "Fourteen lines, a volta and a final couplet",
              "Three lines and a seasonal word",
              "Long unrhymed lines with no story",
              "It tells a story, uses quatrains often rhyming ABCB, and may include a refrain",
            ],
            answerIndex: 3,
            hint: "Ballads were originally sung stories.",
            explanation:
              "Ballads are narrative songs, typically in quatrains rhyming ABCB, with strong rhythm and often a refrain. The option ‘Fourteen lines, a volta and a final couplet’ describes a sonnet.",
            guideRef: "form",
          },
          {
            id: "ptk-mcq-p4-q20",
            question: "Keats's 'To Autumn' addresses the season directly and celebrates it in rich, formal language. What form is it?",
            options: ["A haiku", "An ode", "A dramatic monologue", "A villanelle"],
            answerIndex: 1,
            hint: "Keats wrote several of these, including one 'to a Nightingale'.",
            explanation:
              "An ode is a serious lyric poem that addresses and praises its subject. A dramatic monologue has a character speaking to a listener, whereas 'To Autumn' speaks directly to the season itself in the poet's own lyrical voice.",
            guideRef: "form",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "ptk-qa-p1",
        title: "Written Paper 1",
        passage: {
          title: "Monsoon, Four O'Clock",
          source: "Original poem written for this app",
          text: "The sky over Toa Payoh\nclenches like a fist.\nWashing snaps on bamboo poles,\naunties shout the laundry in,\nand the first fat drops\nsmack the hot pavement —\ntik, tik, tik —\nthen the whole sky lets go.\n\nGutters gulp and gargle.\nUmbrellas bloom at the bus stop\nlike a sudden garden.\nUnder the void deck\nan old man folds his newspaper,\nunhurried, smiling,\nas if the storm were only\nan old friend, arriving late.",
          note: "Toa Payoh: a neighbourhood in Singapore. void deck: the open ground floor of a Singapore HDB block of flats. All questions refer to this poem.",
        },
        questions: [
          {
            id: "ptk-qa-p1-q01",
            question: "Identify TWO different sound devices in the first stanza, quoting an example of each.",
            marks: 2,
            hint: "Listen for words that imitate sounds, and for repeated first letters.",
            modelAnswer:
              "Onomatopoeia: 'tik, tik, tik' (also 'smack' and 'snaps') imitates the sound of raindrops hitting the ground. Alliteration: 'first fat drops' repeats the 'f' sound.",
            markScheme: [
              { point: "Identifies onomatopoeia with a valid quotation", keywords: ["onomatopoeia", "tik", "smack", "snaps", "sound of the rain"] },
              { point: "Identifies alliteration (or another valid device) with a valid quotation", keywords: ["alliteration", "first fat", "fat drops", "f sound", "plosive", "sibilance"] },
            ],
            commonError: "Naming two devices but giving no quotation, or quoting from stanza 2 when the question asks about stanza 1.",
            guideRef: "sound",
          },
          {
            id: "ptk-qa-p1-q02",
            question: "Analyse the image 'The sky over Toa Payoh / clenches like a fist.'",
            marks: 3,
            hint: "Name the technique, then think about when people clench their fists.",
            modelAnswer:
              "The poet uses a simile, which also personifies the sky, comparing it to a clenched fist. A fist is clenched in anger or before a blow, so the image suggests the sky is tense, threatening and about to strike. This builds suspense, making the reader expect the violent downpour that follows.",
            markScheme: [
              { point: "Identifies the simile (and/or personification)", keywords: ["simile", "personification", "personifies", "like a fist", "compares"] },
              { point: "Explores connotations of a clenched fist (anger, tension, about to strike)", keywords: ["anger", "angry", "tension", "tense", "threat", "punch", "violence", "about to strike"] },
              { point: "Explains the effect: builds suspense or foreshadows the storm", keywords: ["suspense", "foreshadow", "anticipation", "about to", "expect", "build up"] },
            ],
            commonError: "Calling it a metaphor despite the word 'like', or only saying 'it shows the sky is dark'.",
            guideRef: "imagery",
          },
          {
            id: "ptk-qa-p1-q03",
            question: "How does the poet use imagery in 'Umbrellas bloom at the bus stop / like a sudden garden'?",
            marks: 4,
            hint: "There are two techniques here. What do flowers and gardens suggest?",
            modelAnswer:
              "The verb 'bloom' is a metaphor that turns opening umbrellas into flowers, and the simile 'like a sudden garden' extends the image. Flowers suggest colour, beauty and new life, so the scene at the bus stop becomes cheerful rather than miserable. 'Sudden' captures how quickly the umbrellas appear, just as the rain arrives all at once. This image marks a shift in mood: the storm is no longer only threatening but also creates something beautiful.",
            markScheme: [
              { point: "Identifies the metaphor 'bloom'", keywords: ["metaphor", "bloom", "blooming", "flowers"] },
              { point: "Identifies the simile 'like a sudden garden'", keywords: ["simile", "like a sudden garden", "garden", "like a"] },
              { point: "Explores connotations (colour, beauty, life, joy)", keywords: ["colour", "colourful", "beauty", "beautiful", "life", "bright", "cheerful", "joy"] },
              { point: "Links to a shift in mood or the speed of the storm ('sudden')", keywords: ["shift", "change", "mood", "sudden", "quickly", "positive", "transform"] },
            ],
            commonError: "Explaining what umbrellas are for, rather than what the flower comparison suggests.",
            guideRef: "imagery",
          },
          {
            id: "ptk-qa-p1-q04",
            question: "Explain how the lines 'smack the hot pavement — / tik, tik, tik — / then the whole sky lets go.' create a sense of the storm arriving.",
            marks: 3,
            hint: "Think about sound, the dashes, and the contrast between small and huge.",
            modelAnswer:
              "The onomatopoeia 'smack' and 'tik, tik, tik' lets us hear the first individual drops. The dashes isolate 'tik, tik, tik' on its own line, creating a pause like a held breath. Then 'the whole sky lets go' contrasts with those tiny sounds: the personified sky releases everything at once, so the structure enacts the sudden downpour.",
            markScheme: [
              { point: "Comments on onomatopoeia ('smack', 'tik')", keywords: ["onomatopoeia", "tik", "smack", "hear", "sound"] },
              { point: "Comments on the dashes or short line creating a pause or build-up", keywords: ["dash", "pause", "short line", "build", "suspense", "held breath", "isolate"] },
              { point: "Explains the contrast or release in 'the whole sky lets go'", keywords: ["lets go", "whole sky", "release", "contrast", "all at once", "downpour", "sudden"] },
            ],
            commonError: "Spotting the onomatopoeia but ignoring how the layout of the lines builds and releases tension.",
            guideRef: "structure",
          },
          {
            id: "ptk-qa-p1-q05",
            question: "The poem is written in free verse. Define free verse and suggest why it suits this poem.",
            marks: 2,
            hint: "What does free verse NOT have? What is a storm like?",
            modelAnswer:
              "Free verse has no regular rhyme scheme or metre. This suits a poem about a sudden storm, because the uneven line lengths and unpredictable rhythm mirror the chaotic, unpredictable weather and the rush of everyday life.",
            markScheme: [
              { point: "Defines free verse (no regular rhyme or metre)", keywords: ["no regular", "no rhyme", "no metre", "no fixed", "doesn't rhyme", "does not rhyme", "irregular"] },
              { point: "Links free verse to the storm's unpredictability or natural speech", keywords: ["unpredictable", "chaotic", "chaos", "natural", "storm", "sudden", "uneven", "wild"] },
            ],
            commonError: "Saying free verse has 'no rules at all', ignoring that line breaks are still deliberate.",
            guideRef: "form",
          },
          {
            id: "ptk-qa-p1-q06",
            question: "How does the mood change between the beginning and the end of the poem?",
            marks: 4,
            hint: "Find one quotation from the start and one from the last five lines.",
            modelAnswer:
              "At the start the mood is tense and hectic: the sky 'clenches like a fist' and aunties 'shout the laundry in', so everything feels urgent. By the end the mood is calm and warm. The old man is 'unhurried, smiling', and the final simile presents the storm as 'an old friend, arriving late'. The shift suggests that the storm is only frightening if you rush; for someone who knows it well, it is familiar and even welcome.",
            markScheme: [
              { point: "Describes the opening mood as tense, urgent or threatening", keywords: ["tense", "tension", "urgent", "hectic", "threatening", "chaotic", "rush"] },
              { point: "Supports the opening with a quotation", keywords: ["clenches", "fist", "shout", "snaps", "smack"] },
              { point: "Describes the ending mood as calm, peaceful or affectionate", keywords: ["calm", "peaceful", "relaxed", "warm", "affectionate", "content", "gentle"] },
              { point: "Supports the ending with a quotation and explains the shift", keywords: ["unhurried", "smiling", "old friend", "arriving late", "void deck", "shift"] },
            ],
            commonError: "Describing only one part of the poem, or using vague words like 'happy' and 'sad' without quotations.",
            guideRef: "tone-voice",
          },
          {
            id: "ptk-qa-p1-q07",
            question: "Analyse the line 'Gutters gulp and gargle.'",
            marks: 3,
            hint: "There is a sound device and a type of imagery. What creature gulps and gargles?",
            modelAnswer:
              "The alliteration of the hard 'g' sound imitates the noisy, choking rush of water down the drains. The verbs 'gulp' and 'gargle' personify the gutters as if they were greedy throats struggling to swallow, which suggests the sheer quantity of rain overwhelming the city. The short, single-sentence line also makes the moment feel abrupt.",
            markScheme: [
              { point: "Identifies alliteration of 'g' (or onomatopoeia)", keywords: ["alliteration", "g sound", "'g'", "onomatopoeia", "gulp", "gargle"] },
              { point: "Identifies personification (gutters as mouths or throats)", keywords: ["personification", "personifies", "mouth", "throat", "swallow", "human", "drinking"] },
              { point: "Explains the effect: overwhelming amount of rain or noise", keywords: ["overwhelm", "so much", "quantity", "noisy", "flood", "struggling", "choking"] },
            ],
            commonError: "Naming alliteration but not explaining what the 'g' sound imitates.",
            guideRef: "sound",
          },
          {
            id: "ptk-qa-p1-q08",
            question: "Comment on the use of enjambment in the final two lines: 'as if the storm were only / an old friend, arriving late.'",
            marks: 3,
            hint: "What does the reader expect after 'only'? What does the line break do?",
            modelAnswer:
              "The line breaks after 'only' with no punctuation, so the sentence runs on into the final line. This creates a brief moment of suspense: 'only' makes us wonder what the storm could be 'only' compared to. The answer, 'an old friend, arriving late', is a gentle surprise that completes the transformation of the storm from threat to companion, and the comma before 'arriving late' slows the ending to a calm close.",
            markScheme: [
              { point: "Identifies that the sentence runs over the line break", keywords: ["enjambment", "runs on", "runs over", "no punctuation", "line break", "continues"] },
              { point: "Explains the suspense or emphasis created by breaking after 'only'", keywords: ["suspense", "after only", "wonder", "anticipation", "pause", "delay", "expect"] },
              { point: "Explains the effect of the final image or the slow ending", keywords: ["old friend", "surprise", "gentle", "calm", "slow", "arriving late", "companion"] },
            ],
            commonError: "Defining enjambment correctly but not explaining what this particular line break achieves.",
            guideRef: "structure",
          },
          {
            id: "ptk-qa-p1-q09",
            question: "Why is it better to write about 'the speaker' rather than 'the poet' when discussing who is describing this scene?",
            marks: 2,
            hint: "Is the voice in a poem always the writer themselves?",
            modelAnswer:
              "The voice in a poem is a constructed persona, not necessarily the poet; the speaker may be an invented observer. Writing 'the speaker' keeps your focus on the choices in the text rather than guessing about the writer's real life, while 'the poet' is used when discussing deliberate techniques.",
            markScheme: [
              { point: "Explains the speaker is a persona or voice, not necessarily the poet", keywords: ["persona", "voice", "not necessarily", "not the poet", "invented", "character", "narrator"] },
              { point: "Explains why this matters (avoid assumptions; poet = choices)", keywords: ["assume", "assumption", "real life", "choices", "techniques", "biograph", "guess"] },
            ],
            commonError: "Saying 'the poet is describing what happened to them' without any evidence that the poem is autobiographical.",
            guideRef: "tone-voice",
          },
          {
            id: "ptk-qa-p1-q10",
            question: "Write your own four-line continuation of the poem that uses one simile and one sound device. Then label each technique.",
            marks: 4,
            hint: "Stay with the storm or its aftermath. Label clearly, e.g. '(simile)'.",
            modelAnswer:
              "When the rain stops, the street steams\nlike a kettle just off the boil;\nslippers slap through silver puddles\nand the drains hum their last low song.\n\nSimile: 'like a kettle just off the boil' suggests heat and calm after the storm.\nSound device: alliteration and sibilance in 'slippers slap through silver puddles' imitate wet footsteps.",
            markScheme: [
              { point: "Includes a simile using 'like' or 'as'", keywords: ["like a", "as a", "as if", "like the", "simile"] },
              { point: "Includes and labels a sound device", keywords: ["alliteration", "sibilance", "onomatopoeia", "assonance", "consonance", "plosive"] },
              { point: "Stays on the subject of the storm or its aftermath", keywords: ["rain", "storm", "puddle", "drain", "wet", "thunder", "clouds", "drops"] },
              { point: "Explains or labels the effect of a technique", keywords: ["suggests", "effect", "imitates", "creates", "shows", "makes the reader"] },
            ],
            commonError: "Forgetting to label the techniques, or writing a simile without 'like' or 'as'.",
            guideRef: "imagery",
          },
          {
            id: "ptk-qa-p1-q11",
            question: "Write a PEEL paragraph answering: How does the poet present the storm as powerful?",
            marks: 5,
            hint: "Point, Evidence, Explain (technique + connotation), Link. Zoom in on one word.",
            modelAnswer:
              "The poet presents the storm as overwhelmingly powerful by personifying the sky as a living force. Before the rain, the sky 'clenches like a fist', and then 'the whole sky lets go'. The verb phrase 'lets go' suggests something that has been held back with great effort and is finally released, as though the sky has been straining against its own weight. The word 'whole' emphasises the scale: not a shower but the entire sky collapsing at once. This makes the storm feel like an unstoppable force of nature, which is why the people below rush to 'shout the laundry in'. However, by the end the poem suggests that power need not be frightening, since the old man greets it 'smiling'.",
            markScheme: [
              { point: "Makes a clear point answering the question", keywords: ["powerful", "power", "force", "overwhelming", "strong", "unstoppable"] },
              { point: "Embeds relevant evidence", keywords: ["lets go", "clenches", "fist", "whole sky", "smack", "gulp"] },
              { point: "Names a relevant technique", keywords: ["personification", "personifies", "simile", "onomatopoeia", "alliteration", "verb"] },
              { point: "Explains connotations of a specific word", keywords: ["suggests", "connotation", "implies", "connotes", "held back", "scale", "whole"] },
              { point: "Links to the reader, the theme or an alternative reading", keywords: ["reader", "however", "by the end", "old man", "nature", "theme"] },
            ],
            commonError: "Writing a list of techniques without explaining any word in detail.",
            guideRef: "technique-and-effect",
          },
          {
            id: "ptk-qa-p1-q12",
            question: "'The old man under the void deck is the most important image in the poem.' How far do you agree? Refer closely to the poem.",
            marks: 6,
            hint: "Consider both sides: what the old man adds, and what the storm images do. Reach a judgement.",
            modelAnswer:
              "I largely agree, because the old man changes how we read everything before him. Most of the poem presents the storm as aggressive: the sky 'clenches like a fist' and the rain 'smack[s]' the pavement, so the reader shares the residents' panic. The old man, however, is 'unhurried, smiling', and the simile 'as if the storm were only / an old friend' completely reframes the storm as familiar and welcome. His calm acts like a volta, turning the poem from description into reflection about how experience changes the way we face life's storms. On the other hand, the poem would have no impact without the vivid storm imagery: the image 'Umbrellas bloom' already begins the shift towards beauty before the old man appears. So while the storm images create the drama, the old man gives the poem its meaning, which is why he is arguably the most important image.",
            markScheme: [
              { point: "Gives a clear judgement on 'how far'", keywords: ["agree", "disagree", "largely", "to some extent", "partly", "i think", "overall"] },
              { point: "Analyses the old man image with quotation", keywords: ["unhurried", "smiling", "old friend", "folds his newspaper", "arriving late"] },
              { point: "Explains his role in the structure (volta, shift, contrast)", keywords: ["volta", "shift", "turn", "contrast", "change", "reframe"] },
              { point: "Considers the importance of the storm imagery (counter-argument)", keywords: ["however", "on the other hand", "fist", "bloom", "smack", "gulp", "storm imagery"] },
              { point: "Explores the poem's deeper meaning or theme", keywords: ["experience", "age", "familiar", "perspective", "meaning", "message", "theme"] },
              { point: "Reaches a reasoned conclusion", keywords: ["therefore", "so while", "ultimately", "in conclusion", "overall", "arguably"] },
            ],
            commonError: "Only agreeing, without weighing up the importance of the storm images before reaching a judgement.",
            guideRef: "whole-poem",
          },
        ],
      },
      {
        id: "ptk-qa-p2",
        title: "Written Paper 2",
        passage: {
          title: "I Wandered Lonely as a Cloud",
          source: "William Wordsworth (1815 version)",
          text: "I wandered lonely as a cloud\nThat floats on high o'er vales and hills,\nWhen all at once I saw a crowd,\nA host, of golden daffodils;\nBeside the lake, beneath the trees,\nFluttering and dancing in the breeze.\n\nContinuous as the stars that shine\nAnd twinkle on the milky way,\nThey stretched in never-ending line\nAlong the margin of a bay:\nTen thousand saw I at a glance,\nTossing their heads in sprightly dance.\n\nThe waves beside them danced; but they\nOut-did the sparkling waves in glee:\nA poet could not but be gay,\nIn such a jocund company:\nI gazed—and gazed—but little thought\nWhat wealth the show to me had brought:\n\nFor oft, when on my couch I lie\nIn vacant or in pensive mood,\nThey flash upon that inward eye\nWhich is the bliss of solitude;\nAnd then my heart with pleasure fills,\nAnd dances with the daffodils.",
          note: "host: a large crowd (also an army or a host of angels). gay: joyful (its meaning in 1815). jocund: cheerful. pensive: thoughtful. All questions refer to this poem.",
        },
        questions: [
          {
            id: "ptk-qa-p2-q01",
            question: "Identify the rhyme scheme of each stanza and the metre of the poem.",
            marks: 2,
            hint: "Label the end words of stanza 1 with letters; then tap out 'I wandered lonely as a cloud'.",
            modelAnswer:
              "Each stanza rhymes ABABCC (cloud / hills / crowd / daffodils / trees / breeze), ending in a rhyming couplet. The metre is iambic tetrameter: four da-DUM feet per line, as in 'i WAN-dered LONE-ly AS a CLOUD'.",
            markScheme: [
              { point: "Identifies the rhyme scheme ABABCC", keywords: ["ababcc", "abab cc", "rhyming couplet", "couplet"] },
              { point: "Identifies iambic tetrameter", keywords: ["iambic tetrameter", "tetrameter", "four feet", "iambic", "eight syllables"] },
            ],
            commonError: "Writing 'iambic pentameter' automatically; these lines have eight syllables, not ten.",
            guideRef: "rhyme",
          },
          {
            id: "ptk-qa-p2-q02",
            question: "Analyse the opening simile 'I wandered lonely as a cloud'.",
            marks: 3,
            hint: "What is a cloud like? How does it move? Where is it?",
            modelAnswer:
              "The simile compares the speaker to a cloud, which drifts aimlessly and alone across the sky. The verb 'wandered' reinforces this sense of purposeless movement. A cloud is also high above the world, so the image suggests the speaker feels detached and isolated from life below, which makes the sudden sight of the joyful 'crowd' of daffodils a stronger contrast.",
            markScheme: [
              { point: "Identifies the simile", keywords: ["simile", "as a cloud", "compares", "comparison"] },
              { point: "Explains connotations: drifting, aimless, alone, detached", keywords: ["drift", "aimless", "alone", "isolated", "detached", "floating", "purposeless"] },
              { point: "Links to the contrast with the 'crowd' or the poem's development", keywords: ["crowd", "contrast", "daffodils", "later", "changes", "solitude"] },
            ],
            commonError: "Saying 'the speaker is a cloud' and calling it a metaphor.",
            guideRef: "imagery",
          },
          {
            id: "ptk-qa-p2-q03",
            question: "How does Wordsworth use personification to present the daffodils?",
            marks: 3,
            hint: "Find verbs and nouns that make the flowers seem human.",
            modelAnswer:
              "Wordsworth personifies the daffodils as joyful dancers: they are 'Fluttering and dancing in the breeze' and 'Tossing their heads in sprightly dance'. 'Heads' and 'dance' give them human bodies and feelings, so they seem full of life and celebration. This makes them feel like companions for the lonely speaker, a 'jocund company' that lifts his mood.",
            markScheme: [
              { point: "Identifies personification", keywords: ["personification", "personifies", "human", "like people"] },
              { point: "Supports with a relevant quotation", keywords: ["dancing", "tossing their heads", "sprightly", "crowd", "jocund company", "glee"] },
              { point: "Explains the effect: joyful, lively, companionship", keywords: ["joy", "joyful", "lively", "alive", "celebrat", "companion", "company", "friends"] },
            ],
            commonError: "Quoting 'lonely as a cloud', which is about the speaker, not the flowers.",
            guideRef: "imagery",
          },
          {
            id: "ptk-qa-p2-q04",
            question: "Explore the effect of the comparison 'Continuous as the stars that shine / And twinkle on the milky way'.",
            marks: 4,
            hint: "Think about number, light and scale. Is it realistic?",
            modelAnswer:
              "Wordsworth uses a simile comparing the daffodils to the stars of the Milky Way. 'Continuous' and 'never-ending' create hyperbole, suggesting the flowers are countless. The stars' 'shine' and 'twinkle' link to the 'golden' colour of the flowers, making them seem to glow. By moving from earth to the heavens, the comparison gives the daffodils a cosmic, almost spiritual significance, showing how awe-inspiring nature felt to the speaker.",
            markScheme: [
              { point: "Identifies the simile", keywords: ["simile", "continuous as", "compares", "stars"] },
              { point: "Comments on exaggeration or vast number", keywords: ["hyperbole", "exaggerat", "countless", "never-ending", "endless", "huge number", "infinite"] },
              { point: "Comments on light or colour ('shine', 'twinkle', 'golden')", keywords: ["shine", "twinkle", "light", "glow", "golden", "sparkle", "bright"] },
              { point: "Explains the wider effect: cosmic, spiritual, awe", keywords: ["cosmic", "spiritual", "heaven", "awe", "wonder", "universe", "divine"] },
            ],
            commonError: "Writing only 'the daffodils are compared to stars because there are a lot of them' without exploring light or significance.",
            guideRef: "imagery",
          },
          {
            id: "ptk-qa-p2-q05",
            question: "What are the connotations of the words 'host' and 'golden' in 'A host, of golden daffodils'?",
            marks: 2,
            hint: "'Host' has several meanings. What is gold associated with?",
            modelAnswer:
              "'Host' means a large crowd but can also mean an army or a 'host' of angels, suggesting the flowers are numerous, impressive and almost heavenly. 'Golden' suggests wealth and value as well as bright colour, preparing for the later idea of the 'wealth' the memory brings.",
            markScheme: [
              { point: "Explores 'host' (crowd, army, angels, heavenly)", keywords: ["host", "angels", "army", "crowd", "heavenly", "many", "numerous"] },
              { point: "Explores 'golden' (wealth, value, precious, bright)", keywords: ["golden", "wealth", "valuable", "precious", "rich", "treasure"] },
            ],
            commonError: "Saying 'golden means yellow' without exploring the connotations of value.",
            guideRef: "technique-and-effect",
          },
          {
            id: "ptk-qa-p2-q06",
            question: "Explain the effect of the caesuras in 'I gazed—and gazed—but little thought'.",
            marks: 3,
            hint: "What do the dashes do to the reader's pace? Why is 'gazed' repeated?",
            modelAnswer:
              "The dashes create caesuras that break the line into pauses, slowing the reader down. Combined with the repetition of 'gazed', this makes us linger and stare just as the speaker did, so the structure imitates his absorbed looking. The final 'but little thought' then signals a turn: at the time, he did not realise how valuable the moment would become.",
            markScheme: [
              { point: "Identifies caesura created by the dashes", keywords: ["caesura", "dash", "pause", "break"] },
              { point: "Explains the slowing effect linked to repetition of 'gazed'", keywords: ["slow", "linger", "stare", "repetition", "repeated", "absorbed", "mesmerised"] },
              { point: "Explains the turn in 'but little thought' (later realisation)", keywords: ["little thought", "did not realise", "didn't realise", "later", "turn", "future", "value"] },
            ],
            commonError: "Saying the dashes 'add drama' without explaining how they control the pace.",
            guideRef: "structure",
          },
          {
            id: "ptk-qa-p2-q07",
            question: "How does the final stanza change the time and focus of the poem?",
            marks: 4,
            hint: "Look at the verb tenses and the phrase 'inward eye'.",
            modelAnswer:
              "The first three stanzas are in the past tense ('wandered', 'saw', 'gazed'), but the last stanza shifts into the present tense ('lie', 'flash', 'fills'), showing the memory repeating in his life now. The focus moves from the outside world to the speaker's mind: the 'inward eye' is a metaphor for memory and imagination. This reveals the poem's real subject, that nature's beauty is stored up and can return to comfort us, and the final image of his heart that 'dances with the daffodils' echoes the dancing flowers, closing the poem neatly.",
            markScheme: [
              { point: "Identifies the shift from past to present tense", keywords: ["present tense", "past tense", "tense", "the present", "oft", "lie"] },
              { point: "Explains the 'inward eye' as memory or imagination", keywords: ["inward eye", "memory", "imagination", "mind", "remember"] },
              { point: "Explains the shift of focus from outside nature to inner feelings", keywords: ["inner", "inside", "reflect", "mind", "focus", "external", "internal"] },
              { point: "Comments on the ending's echo of dancing or its effect", keywords: ["dances with the daffodils", "dance", "echo", "heart", "pleasure", "circular", "joy"] },
            ],
            commonError: "Summarising the stanza without commenting on the change of tense or focus.",
            guideRef: "structure",
          },
          {
            id: "ptk-qa-p2-q08",
            question: "'What wealth the show to me had brought'. Explain what kind of 'wealth' the speaker means and how it links to other words in the poem.",
            marks: 3,
            hint: "It is not money. Which other word in the poem suggests riches?",
            modelAnswer:
              "The 'wealth' is not money but emotional and spiritual riches: the joyful memory he can return to. This is a metaphor that links to 'golden' in stanza 1, creating a semantic field of value. Wordsworth suggests that nature's gifts are more precious than material wealth, because they can be 'spent' again and again in memory.",
            markScheme: [
              { point: "Explains wealth as emotional, spiritual or memory, not money", keywords: ["not money", "emotional", "spiritual", "memory", "happiness", "joy", "metaphor"] },
              { point: "Links to 'golden' or a semantic field of value", keywords: ["golden", "semantic field", "value", "riches", "treasure"] },
              { point: "Explains the message about nature or memory being precious", keywords: ["nature", "precious", "more valuable", "again and again", "lasting", "material"] },
            ],
            commonError: "Taking 'wealth' literally or ignoring the link with 'golden'.",
            guideRef: "imagery",
          },
          {
            id: "ptk-qa-p2-q09",
            question: "Identify the semantic field created by 'glee', 'gay', 'jocund' and 'sprightly', and explain its effect.",
            marks: 2,
            hint: "What do all four words have in common?",
            modelAnswer:
              "These words form a semantic field of happiness and liveliness. Clustering them in stanzas 2 and 3 fills the poem with infectious joy, showing how completely the flowers lifted the speaker from his loneliness.",
            markScheme: [
              { point: "Identifies the semantic field of happiness or joy", keywords: ["happiness", "joy", "happy", "cheerful", "merriment", "delight"] },
              { point: "Explains the effect (infectious joy, contrast with loneliness)", keywords: ["lonely", "loneliness", "contrast", "lift", "infectious", "mood", "uplift"] },
            ],
            commonError: "Thinking 'gay' has its modern meaning; in 1815 it meant joyful.",
            guideRef: "imagery",
          },
          {
            id: "ptk-qa-p2-q10",
            question: "Wordsworth was a Romantic poet, and the poem grew from a walk with his sister Dorothy in 1802, which she recorded in her journal. How does this context deepen our understanding of the poem?",
            marks: 4,
            hint: "What did the Romantics value? What is surprising about the 'lonely' speaker?",
            modelAnswer:
              "The Romantic poets valued nature, emotion and the imagination over reason and city life, and this poem celebrates all three: nature brings joy, and imagination (the 'inward eye') preserves it. The context also reveals that Wordsworth was not actually alone; Dorothy was with him. Presenting the speaker as 'lonely' is a deliberate choice that makes the experience feel private and spiritual, a meeting between one person and nature. This reminds us that the speaker is a crafted persona, not a factual record of events.",
            markScheme: [
              { point: "Explains Romantic values (nature, emotion, imagination)", keywords: ["romantic", "nature", "emotion", "imagination", "feeling"] },
              { point: "Links Romantic ideas to a specific part of the poem", keywords: ["inward eye", "daffodils", "bliss of solitude", "heart", "pleasure", "dance"] },
              { point: "Notes that Dorothy was present, so 'lonely' is a deliberate choice", keywords: ["dorothy", "not alone", "sister", "deliberate", "chose", "not actually"] },
              { point: "Explains the effect: private or spiritual experience, speaker as persona", keywords: ["private", "spiritual", "persona", "speaker", "personal", "crafted", "intimate"] },
            ],
            commonError: "Listing facts about Wordsworth's life without linking them to the words of the poem.",
            guideRef: "whole-poem",
          },
          {
            id: "ptk-qa-p2-q11",
            question: "Compare the speaker's feelings in the first line with his feelings in the final two lines of the poem.",
            marks: 5,
            hint: "Quote both moments. Has his situation changed, or only how he feels about it?",
            modelAnswer:
              "In the first line the speaker 'wandered lonely as a cloud', isolated and aimless. By the end, 'my heart with pleasure fills, / And dances with the daffodils': he is full of joy and connected to the flowers. The verb 'fills' contrasts with the empty drifting of 'wandered', while 'dances' shows that his heart has taken on the daffodils' energy. Strikingly, he is still alone ('on my couch I lie', 'solitude'), but solitude has become 'bliss'. The change is therefore not in his situation but in his inner life, and the poem suggests that memory of nature can transform loneliness into happiness.",
            markScheme: [
              { point: "Describes the opening feeling (lonely, isolated, aimless) with quotation", keywords: ["lonely", "wandered", "isolated", "aimless", "alone"] },
              { point: "Describes the ending feeling (joy, connection) with quotation", keywords: ["pleasure fills", "dances", "joy", "happy", "heart", "pleasure"] },
              { point: "Analyses a specific word in either quotation", keywords: ["verb", "fills", "dances", "wandered", "suggests", "implies"] },
              { point: "Notes he is still alone but now experiences solitude as bliss", keywords: ["still alone", "solitude", "bliss", "couch", "same situation"] },
              { point: "Draws a conclusion about memory or nature transforming feelings", keywords: ["memory", "nature", "transform", "change", "imagination", "message"] },
            ],
            commonError: "Describing the two moments separately without explicitly comparing them.",
            guideRef: "whole-poem",
          },
          {
            id: "ptk-qa-p2-q12",
            question: "'This poem is more about the power of memory than about daffodils.' How far do you agree?",
            marks: 6,
            hint: "Weigh stanzas 1 to 3 (the scene) against stanza 4 (the memory). Use evidence from both.",
            modelAnswer:
              "I mostly agree. Three of the four stanzas describe the daffodils vividly, personified as 'dancing' and compared to the 'stars that shine', so at first the poem seems to be about nature. However, the turn comes at the end of stanza 3, where the speaker 'little thought / What wealth the show to me had brought', telling us that the real value of the scene lay in the future. The final stanza moves into the present tense and inside his mind, where the flowers 'flash upon that inward eye'. The metaphor presents memory as a second way of seeing that can recreate joy. On the other hand, without the energetic description of the daffodils, the memory would have no power, so nature remains essential. Overall, the daffodils are the spark, but the poem's purpose is to celebrate memory and imagination, a central Romantic idea.",
            markScheme: [
              { point: "Gives a clear judgement", keywords: ["agree", "disagree", "mostly", "partly", "to some extent", "overall"] },
              { point: "Acknowledges the poem's detailed focus on the daffodils with evidence", keywords: ["dancing", "stars", "golden", "host", "personif", "three stanzas"] },
              { point: "Analyses the turn towards memory ('little thought', 'wealth')", keywords: ["little thought", "wealth", "turn", "realise", "later", "volta"] },
              { point: "Analyses the final stanza ('inward eye', present tense)", keywords: ["inward eye", "present tense", "flash", "bliss of solitude", "memory", "imagination"] },
              { point: "Considers a counter-argument (nature is essential)", keywords: ["however", "on the other hand", "without", "essential", "spark", "nature"] },
              { point: "Reaches a reasoned conclusion, ideally linked to context or purpose", keywords: ["overall", "therefore", "ultimately", "romantic", "purpose", "conclusion"] },
            ],
            commonError: "Agreeing without analysing the descriptive stanzas, so the argument becomes one-sided.",
            guideRef: "whole-poem",
          },
        ],
      },
      {
        id: "ptk-qa-p3",
        title: "Written Paper 3",
        passage: {
          title: "The Name I Carry",
          source: "Original poem written for this app",
          text: "My grandmother gave me her name to keep,\na small, warm stone pressed into my hand.\nAt school they bend it, snap it short,\na word they do not understand.\n\nI let them. Every register,\nI flinch and answer to the break.\nBut home, she says it whole and slow —\na bell, a river, something awake.\n\nSo now I say it loud, in full,\neach syllable a stepping stone,\nand cross the river she once crossed\nto reach a country of my own.",
          note: "register: the list of names a teacher calls at the start of a lesson. Questions 1 to 11 refer to this poem; question 12 also uses lines from Rossetti's 'Remember'.",
        },
        questions: [
          {
            id: "ptk-qa-p3-q01",
            question: "Identify the rhyme scheme of the first stanza and give one pair of full rhymes from anywhere in the poem.",
            marks: 2,
            hint: "Label keep, hand, short, understand. Then look at 'break' and 'awake'.",
            modelAnswer:
              "The first stanza rhymes ABCB: only lines 2 and 4 rhyme (hand / understand). A full rhyme pair is 'break / awake' (or 'stone / own').",
            markScheme: [
              { point: "Identifies ABCB", keywords: ["abcb", "lines 2 and 4", "second and fourth", "2nd and 4th"] },
              { point: "Gives a correct full rhyme pair", keywords: ["break / awake", "break and awake", "stone / own", "stone and own", "hand / understand", "hand and understand"] },
            ],
            commonError: "Writing ABAB because the poem 'sounds rhymed', without checking that 'keep' and 'short' do not rhyme.",
            guideRef: "rhyme",
          },
          {
            id: "ptk-qa-p3-q02",
            question: "Analyse the metaphor 'a small, warm stone pressed into my hand'.",
            marks: 3,
            hint: "What do 'small', 'warm' and 'pressed' each suggest about the name?",
            modelAnswer:
              "The name is presented as a metaphorical stone, something solid and lasting that can be carried. 'Warm' suggests love and closeness, as if the stone still holds the grandmother's body heat, while 'small' makes it feel precious and personal. The verb 'pressed' implies a deliberate, tender handing-over, like an heirloom passed from one generation to the next.",
            markScheme: [
              { point: "Identifies the metaphor of the name as a stone", keywords: ["metaphor", "stone", "name is", "compares"] },
              { point: "Explores 'warm' or 'small' (love, closeness, precious)", keywords: ["warm", "love", "affection", "close", "precious", "small", "personal"] },
              { point: "Explores 'pressed' or the idea of inheritance", keywords: ["pressed", "heirloom", "inherit", "generation", "gift", "passed down", "tender"] },
            ],
            commonError: "Explaining what a stone is like (hard, heavy) without linking it to the name or to the grandmother.",
            guideRef: "imagery",
          },
          {
            id: "ptk-qa-p3-q03",
            question: "What do the verbs in 'At school they bend it, snap it short' suggest about how others treat the speaker's name?",
            marks: 3,
            hint: "What else do people bend and snap?",
            modelAnswer:
              "The verbs 'bend' and 'snap' belong to the violence of breaking objects, suggesting that people at school mispronounce and shorten the name carelessly, damaging it. Continuing the stone metaphor, a precious inheritance is being broken. The quick, monosyllabic verbs sound abrupt and harsh, making the reader feel the speaker's hurt.",
            markScheme: [
              { point: "Explains that others mispronounce or shorten the name", keywords: ["mispronounce", "shorten", "nickname", "cut", "get it wrong", "change"] },
              { point: "Explores the violence or damage of 'bend' / 'snap'", keywords: ["violent", "break", "damage", "snap", "bend", "destroy", "careless"] },
              { point: "Explains the effect on the reader or speaker (hurt, disrespect)", keywords: ["hurt", "pain", "disrespect", "upset", "sympathy", "harsh", "abrupt"] },
            ],
            commonError: "Taking the verbs literally rather than as metaphors for how the name is said.",
            guideRef: "imagery",
          },
          {
            id: "ptk-qa-p3-q04",
            question: "Explain the effect of the caesura in 'I let them. Every register,'",
            marks: 2,
            hint: "What does the full stop after three short words do?",
            modelAnswer:
              "The full stop after 'I let them' creates a caesura, a hard stop in the middle of the line. The short, blunt sentence sounds resigned, as if the speaker has given up protesting, and the pause lets that defeat sink in.",
            markScheme: [
              { point: "Identifies the caesura or full stop mid-line", keywords: ["caesura", "full stop", "pause", "short sentence", "stop"] },
              { point: "Explains the tone or effect (resigned, defeated, blunt)", keywords: ["resigned", "given up", "defeat", "blunt", "accept", "passive", "helpless"] },
            ],
            commonError: "Saying the pause 'adds tension' without explaining what feeling it expresses.",
            guideRef: "structure",
          },
          {
            id: "ptk-qa-p3-q05",
            question: "How does the word 'But' in line 7 mark a turn in the poem? Refer to the contrast between school and home.",
            marks: 4,
            hint: "Compare 'snap it short' with 'whole and slow'.",
            modelAnswer:
              "'But' is a volta that shifts the setting from school to home. At school the name is snapped 'short', but at home the grandmother 'says it whole and slow'. 'Whole' suggests the name is complete and respected, while 'slow' shows care and patience. The contrast reveals two worlds: one where the speaker's identity is broken, and one where it is honoured.",
            markScheme: [
              { point: "Identifies 'But' as a volta or turn", keywords: ["volta", "turn", "shift", "contrast", "but home"] },
              { point: "Identifies the move from school to home", keywords: ["school", "home", "setting", "grandmother", "place"] },
              { point: "Analyses 'whole' and/or 'slow'", keywords: ["whole", "slow", "complete", "care", "patience", "respect"] },
              { point: "Explains the wider meaning (two worlds, identity honoured vs broken)", keywords: ["identity", "two worlds", "belong", "honour", "respected", "culture", "valued"] },
            ],
            commonError: "Identifying the contrast without analysing the adjectives 'whole' and 'slow'.",
            guideRef: "structure",
          },
          {
            id: "ptk-qa-p3-q06",
            question: "Analyse 'a bell, a river, something awake'.",
            marks: 3,
            hint: "This is a list of three images. What does each suggest about the name when spoken lovingly?",
            modelAnswer:
              "The tricolon (list of three) of metaphors builds the name into something beautiful. 'A bell' suggests a clear, ringing sound, perhaps one that calls the speaker home; 'a river' suggests flow, length and a journey; 'something awake' suggests the name comes alive when said properly. The list grows more abstract, as if words can barely capture what the name means.",
            markScheme: [
              { point: "Identifies the list of three or metaphors", keywords: ["tricolon", "list of three", "metaphor", "list", "three images"] },
              { point: "Explores at least one image (bell, river, awake)", keywords: ["bell", "ring", "river", "flow", "awake", "alive"] },
              { point: "Explains the overall effect (beauty, life, beyond words)", keywords: ["beautiful", "alive", "life", "precious", "abstract", "beyond words", "musical"] },
            ],
            commonError: "Listing the three images without explaining what any of them suggests.",
            guideRef: "imagery",
          },
          {
            id: "ptk-qa-p3-q07",
            question: "Trace how the stone metaphor from stanza 1 is extended and developed in stanza 3.",
            marks: 4,
            hint: "Look for 'stone' and 'river' in the final stanza.",
            modelAnswer:
              "The 'small, warm stone' of stanza 1 returns as 'each syllable a stepping stone' in stanza 3, so the extended metaphor develops. The name is no longer something kept in the hand but something to walk on, a path. The speaker uses these stones to 'cross the river she once crossed', which suggests following the grandmother's journey, perhaps her migration. The destination, 'a country of my own', implies that the speaker builds her own identity from her inheritance. The metaphor therefore moves from receiving the name to using it.",
            markScheme: [
              { point: "Links 'stone' in stanza 1 to 'stepping stone' in stanza 3", keywords: ["stepping stone", "stone", "extended metaphor", "returns", "develops"] },
              { point: "Explains the change from holding the name to using it as a path", keywords: ["path", "walk", "use", "journey", "cross", "move forward"] },
              { point: "Explores 'the river she once crossed' (grandmother's journey, migration)", keywords: ["river", "crossed", "migration", "migrate", "grandmother's journey", "ancestor", "follow"] },
              { point: "Explains 'a country of my own' (own identity)", keywords: ["country of my own", "identity", "belong", "own place", "independence", "self"] },
            ],
            commonError: "Discussing stanza 3 alone without showing how it connects back to the stone in stanza 1.",
            guideRef: "imagery",
          },
          {
            id: "ptk-qa-p3-q08",
            question: "Describe the tone of the final stanza and explain how it is created.",
            marks: 3,
            hint: "Compare 'I say it loud, in full' with 'I flinch'.",
            modelAnswer:
              "The tone of the final stanza is confident and proud. 'So now' signals a conclusion reached, and 'I say it loud, in full' contrasts with the earlier 'I flinch', showing the speaker has moved from shame to pride. The forward-moving verbs 'cross' and 'reach' create a sense of purpose and arrival.",
            markScheme: [
              { point: "Names a precise tone (confident, proud, defiant, determined)", keywords: ["confident", "proud", "defiant", "determined", "assertive", "triumphant"] },
              { point: "Supports with a quotation from the stanza", keywords: ["loud", "in full", "so now", "cross", "reach", "country of my own"] },
              { point: "Explains a contrast with earlier or how language creates the tone", keywords: ["flinch", "contrast", "earlier", "change", "verbs", "shame"] },
            ],
            commonError: "Using a vague word such as 'happy' instead of a precise tone word.",
            guideRef: "tone-voice",
          },
          {
            id: "ptk-qa-p3-q09",
            question: "The poem is written in the first person. Why might a reader still refer to 'the speaker' rather than assuming this is the poet's own life?",
            marks: 2,
            hint: "Think about personas and invented voices.",
            modelAnswer:
              "Poets often create a persona, so the 'I' may be an invented character rather than the writer. Calling the voice 'the speaker' avoids making assumptions about the poet's biography and keeps the focus on how the poem is crafted.",
            markScheme: [
              { point: "Explains the 'I' may be a persona or invented voice", keywords: ["persona", "invented", "character", "not the poet", "not necessarily", "voice"] },
              { point: "Explains why this matters (avoid biographical assumptions, focus on craft)", keywords: ["assume", "assumption", "biography", "crafted", "choices", "real life"] },
            ],
            commonError: "Thinking that first-person poems must be autobiographical.",
            guideRef: "tone-voice",
          },
          {
            id: "ptk-qa-p3-q10",
            question: "How does the poem explore the theme of identity and culture?",
            marks: 4,
            hint: "Think about inheritance, belonging in two places, and finding confidence.",
            modelAnswer:
              "The poem explores identity through a name inherited from the grandmother, suggesting identity is passed down through family and culture. It presents the struggle of belonging to two worlds: at school the name is broken by people who 'do not understand', while at home it is spoken 'whole'. The image of the river 'she once crossed' hints at migration and a cultural heritage from another place. Finally, the speaker's decision to say the name 'loud, in full' shows identity as something one can choose to claim with pride, creating 'a country of my own'.",
            markScheme: [
              { point: "Identifies inherited or family identity", keywords: ["grandmother", "inherit", "family", "passed down", "heritage", "generation"] },
              { point: "Explores the tension between two worlds (school and home)", keywords: ["two worlds", "school", "home", "do not understand", "belong", "outsider"] },
              { point: "Links the river or crossing to migration or cultural heritage", keywords: ["migration", "migrate", "river", "crossed", "another country", "culture"] },
              { point: "Explains the speaker's choice to claim identity with pride", keywords: ["pride", "proud", "loud", "in full", "claim", "confidence", "own"] },
            ],
            commonError: "Writing in general terms about identity without quoting the poem.",
            guideRef: "whole-poem",
          },
          {
            id: "ptk-qa-p3-q11",
            question: "Write a PEEL paragraph answering: How does the speaker's attitude towards her name change across the poem?",
            marks: 5,
            hint: "Choose one quotation from early in the poem and one from the end, and explain a key word in each.",
            modelAnswer:
              "The speaker's attitude changes from quiet shame to proud ownership. Early in the poem she admits, 'I flinch and answer to the break', where the verb 'flinch' suggests a physical wince, as if each mispronunciation were a blow, and 'the break' reminds us the name has been damaged. By the end, however, she says it 'loud, in full', and the adverbial phrase 'in full' directly reverses the 'snap it short' of stanza 1. The extended metaphor of 'stepping stone[s]' shows that her name has become a way forward rather than a source of pain. This change suggests that identity, once claimed, can carry us across even the hardest divides.",
            markScheme: [
              { point: "Makes a clear point about the change", keywords: ["shame", "pride", "proud", "change", "ownership", "confidence"] },
              { point: "Embeds evidence from early in the poem", keywords: ["flinch", "break", "let them", "snap", "bend"] },
              { point: "Embeds evidence from late in the poem", keywords: ["loud", "in full", "stepping stone", "country of my own", "so now"] },
              { point: "Analyses a specific word's connotations", keywords: ["suggests", "connotation", "implies", "verb", "wince", "reverses"] },
              { point: "Links to theme or wider meaning", keywords: ["identity", "theme", "culture", "belong", "message", "heritage"] },
            ],
            commonError: "Retelling the poem in order rather than building a point about change.",
            guideRef: "technique-and-effect",
          },
          {
            id: "ptk-qa-p3-q12",
            extract: "From Rossetti's 'Remember' (1862):\nYet if you should forget me for a while\nAnd afterwards remember, do not grieve:\n...\nBetter by far you should forget and smile\nThan that you should remember and be sad.",
            question: "Compare how 'The Name I Carry' and Rossetti's 'Remember' use their endings to resolve the speaker's feelings about memory and what is passed on.",
            marks: 6,
            hint: "Both poems turn ('But', 'Yet'). Compare what each speaker decides, and the tone of each ending.",
            modelAnswer:
              "Both poems turn before their endings: 'The Name I Carry' at 'But home', and 'Remember' at 'Yet'. In each case the turn leads to a resolution. Rossetti's speaker resolves her fear of being forgotten by letting go: 'Better by far you should forget and smile', where the antithesis of 'forget' and 'remember' presents forgetting as an act of love. In contrast, the speaker of 'The Name I Carry' resolves her pain by holding on more firmly, saying her grandmother's name 'loud, in full'. Both endings are calm and controlled: Rossetti's balanced iambic pentameter and the modern poem's steady rhymes ('stone / own') create a sense of peace. However, the meaning of what is passed on differs: Rossetti hopes only a 'vestige' of her thoughts survives, while the name is passed on whole. One poem accepts that memory fades; the other insists that heritage can be kept alive.",
            markScheme: [
              { point: "Identifies the turn or volta in both poems", keywords: ["volta", "turn", "yet if", "but home", "shift"] },
              { point: "Analyses Rossetti's resolution (letting go, forget and smile)", keywords: ["forget and smile", "let go", "letting go", "selfless", "antithesis", "release"] },
              { point: "Analyses the modern speaker's resolution (holding on, saying the name)", keywords: ["loud", "in full", "hold on", "claim", "pride", "stepping stone"] },
              { point: "Compares tone or form of the endings", keywords: ["calm", "controlled", "peace", "rhyme", "pentameter", "tone", "resolved"] },
              { point: "Uses comparative connectives", keywords: ["whereas", "in contrast", "similarly", "both", "however", "while"] },
              { point: "Reaches an overall comparative judgement about memory or inheritance", keywords: ["memory fades", "kept alive", "heritage", "inheritance", "accept", "overall", "vestige"] },
            ],
            commonError: "Writing about one poem and then the other in separate blocks without ever comparing them directly.",
            guideRef: "whole-poem",
          },
        ],
      },
      {
        id: "ptk-qa-p4",
        title: "Written Paper 4",
        questions: [
          {
            id: "ptk-qa-p4-q01",
            extract: "Shall I compare thee to a summer's day?\n(William Shakespeare, Sonnet 18)",
            question: "Show the pattern of stressed and unstressed syllables in this line, then name its metre and explain how you know.",
            marks: 3,
            hint: "Write it out with the stressed syllables in capitals. Count the feet.",
            modelAnswer:
              "shall I / com-PARE / thee TO / a SUM / mer's DAY. Each foot is unstressed then stressed (da-DUM), which is an iamb. There are five feet and ten syllables, so the metre is iambic pentameter.",
            markScheme: [
              { point: "Marks the stresses correctly (da-DUM pattern)", keywords: ["com-pare", "compare", "sum", "day", "da-dum", "unstressed then stressed"] },
              { point: "Identifies five feet or ten syllables", keywords: ["five", "ten syllables", "5 feet", "10 syllables", "pentameter"] },
              { point: "Names iambic pentameter", keywords: ["iambic pentameter", "iambic", "iamb", "five iambs"] },
            ],
            commonError: "Putting the stress on the wrong syllable of 'compare' (com-PARE is correct).",
            guideRef: "rhythm-metre",
          },
          {
            id: "ptk-qa-p4-q02",
            question: "Explain the differences between a Petrarchan sonnet and a Shakespearean sonnet.",
            marks: 4,
            hint: "Compare their divisions, rhyme schemes and where the volta falls.",
            modelAnswer:
              "Both have fourteen lines, usually in iambic pentameter. A Petrarchan sonnet divides into an octave (eight lines, rhyming ABBAABBA) and a sestet (six lines, such as CDECDE). A Shakespearean sonnet divides into three quatrains and a final rhyming couplet (ABAB CDCD EFEF GG). In a Petrarchan sonnet the volta usually comes at line 9, whereas in a Shakespearean sonnet the turn is often delayed until the final couplet.",
            markScheme: [
              { point: "Petrarchan structure: octave + sestet", keywords: ["octave", "sestet", "8 and 6", "eight and six"] },
              { point: "Shakespearean structure: three quatrains + couplet", keywords: ["three quatrains", "quatrains", "couplet", "4 4 4 2"] },
              { point: "Correct rhyme scheme for at least one type", keywords: ["abbaabba", "abba", "abab cdcd efef gg", "ababcdcdefefgg", "gg"] },
              { point: "Volta position: line 9 vs final couplet", keywords: ["volta", "line 9", "ninth line", "line 13", "final couplet", "turn"] },
            ],
            commonError: "Describing only one type of sonnet, or mixing up which form uses the octave.",
            guideRef: "form",
          },
          {
            id: "ptk-qa-p4-q03",
            extract: "Half a league, half a league,\nHalf a league onward,\nAll in the valley of Death\nRode the six hundred.\n(Alfred, Lord Tennyson, The Charge of the Light Brigade, 1854)",
            question: "How do rhythm and repetition create the sense of a cavalry charge in these lines?",
            marks: 3,
            hint: "Read it aloud and tap the beat. What does it sound like?",
            modelAnswer:
              "The rhythm is dactylic (DUM-da-da: 'HALF a league'), creating a fast, galloping beat that imitates horses' hooves. The repetition of 'Half a league' three times drives the soldiers relentlessly forward, as if nothing can stop them. The capitalised 'Death' and the stark final line 'Rode the six hundred' create a sense of doom, since the soldiers are riding straight into the 'valley of Death'.",
            markScheme: [
              { point: "Describes the galloping or dactylic rhythm", keywords: ["gallop", "dactyl", "dum-da-da", "hooves", "horses", "fast rhythm"] },
              { point: "Analyses the repetition of 'Half a league'", keywords: ["repetition", "repeated", "half a league", "relentless", "driving", "forward"] },
              { point: "Explains the sense of doom ('valley of Death')", keywords: ["death", "doom", "valley of death", "six hundred", "fate", "danger"] },
            ],
            commonError: "Naming 'repetition' without explaining how it creates movement or momentum.",
            guideRef: "rhythm-metre",
          },
          {
            id: "ptk-qa-p4-q04",
            extract: "What passing-bells for these who die as cattle?\n— Only the monstrous anger of the guns.\nOnly the stuttering rifles' rapid rattle\nCan patter out their hasty orisons.\n(Wilfred Owen, Anthem for Doomed Youth, written 1917; 'orisons' = prayers)",
            question: "How does Owen use sound and imagery in these lines to present the deaths of soldiers?",
            marks: 4,
            hint: "Consider the simile, the sound devices in line 3 and the religious words.",
            modelAnswer:
              "The simile 'die as cattle' suggests soldiers are slaughtered in huge numbers without dignity, like animals in an abattoir. In line 3, alliteration and onomatopoeia ('rifles' rapid rattle', 'stuttering') imitate machine-gun fire, while the harsh 't' plosives make the line sound violent. The semantic field of religion ('passing-bells', 'orisons') contrasts with the guns: the only funeral these men receive is the noise of the weapons that killed them. This bitter irony presents their deaths as a terrible waste.",
            markScheme: [
              { point: "Analyses the simile 'die as cattle'", keywords: ["cattle", "simile", "animals", "slaughter", "dignity", "dehumanis"] },
              { point: "Analyses sound devices in line 3", keywords: ["alliteration", "onomatopoeia", "rapid rattle", "stuttering", "plosive", "gunfire"] },
              { point: "Identifies the religious semantic field", keywords: ["religion", "religious", "passing-bells", "orisons", "prayers", "funeral", "church"] },
              { point: "Explains the irony or Owen's message about waste", keywords: ["irony", "ironic", "waste", "bitter", "anger", "no proper funeral", "contrast"] },
            ],
            commonError: "Focusing only on sound devices and missing the contrast between funerals and guns.",
            guideRef: "sound",
          },
          {
            id: "ptk-qa-p4-q05",
            extract: "O what can ail thee, knight-at-arms,\nAlone and palely loitering?\nThe sedge has withered from the lake,\nAnd no birds sing.\n(John Keats, La Belle Dame sans Merci, 1819)",
            question: "Explain how Keats uses pathetic fallacy and structure in this opening stanza.",
            marks: 3,
            hint: "What is the landscape like, and why? Look at the length of the last line.",
            modelAnswer:
              "Keats uses pathetic fallacy: the 'withered' sedge and the silence where 'no birds sing' make the landscape seem dead, mirroring the knight's sick, despairing state ('palely loitering'). Structurally, the final line is much shorter than the others, so the stanza seems to fall silent, just like the birds. This creates an eerie, empty mood from the start of the ballad.",
            markScheme: [
              { point: "Identifies pathetic fallacy with evidence", keywords: ["pathetic fallacy", "withered", "no birds sing", "landscape", "nature"] },
              { point: "Links the landscape to the knight's feelings", keywords: ["knight", "despair", "palely", "sick", "mirror", "reflect", "misery"] },
              { point: "Comments on the short final line and its effect", keywords: ["short", "shorter", "final line", "silence", "silent", "cut off", "abrupt"] },
            ],
            commonError: "Calling any description of nature 'pathetic fallacy' without linking it to a character's emotion.",
            guideRef: "imagery",
          },
          {
            id: "ptk-qa-p4-q06",
            extract: "That's my last Duchess painted on the wall,\nLooking as if she were alive. I call\nThat piece a wonder, now: Frà Pandolf's hands\nWorked busily a day, and there she stands.\n(Robert Browning, My Last Duchess, 1842)",
            question: "Using these lines, explain two features of a dramatic monologue and what we begin to learn about the speaker.",
            marks: 3,
            hint: "Who is speaking? To whom? What does 'my last Duchess' hint at?",
            modelAnswer:
              "A dramatic monologue has a single speaker who is a character, not the poet: here a Duke. He addresses a silent listener ('I call / That piece a wonder' is spoken to a visitor who never replies). We already learn something sinister: 'my last Duchess' suggests there have been others, and 'as if she were alive' reveals she is dead. The possessive 'my' hints that he sees his wife as an object he owned, like the painting.",
            markScheme: [
              { point: "Identifies a single speaker who is a character, not the poet", keywords: ["character", "duke", "not the poet", "persona", "single speaker"] },
              { point: "Identifies the silent listener", keywords: ["silent listener", "listener", "visitor", "addresses", "never replies", "someone"] },
              { point: "Infers something about the speaker from the language", keywords: ["possessive", "my last", "controlling", "dead", "sinister", "object", "owned"] },
            ],
            commonError: "Assuming Browning himself is speaking about his own wife.",
            guideRef: "form",
          },
          {
            id: "ptk-qa-p4-q07",
            question: "Explain the rules of a traditional haiku, then write one of your own about a moment in nature.",
            marks: 2,
            hint: "Three lines; count your syllables carefully. Include a seasonal or nature image.",
            modelAnswer:
              "A haiku is a Japanese form of three lines with 5, 7 and 5 syllables (17 in total), capturing a single moment, often with a reference to a season or nature.\n\nMorning monsoon rain (5)\nthe frangipani petals (7)\nface down on the path (5)",
            markScheme: [
              { point: "Explains the 5-7-5 three-line structure", keywords: ["5-7-5", "5 7 5", "three lines", "seventeen", "17 syllables", "syllables"] },
              { point: "Writes a haiku with a nature or seasonal image", keywords: ["rain", "season", "nature", "flower", "petal", "moon", "leaf", "sun"] },
            ],
            commonError: "Writing three lines with the wrong syllable count, or forgetting the focus on a single moment in nature.",
            guideRef: "form",
          },
          {
            id: "ptk-qa-p4-q08",
            extract: "Do I contradict myself?\nVery well then I contradict myself,\n(I am large, I contain multitudes.)\n(Walt Whitman, Song of Myself, 1892 edition)",
            question: "How do form and voice help Whitman present identity in these lines?",
            marks: 4,
            hint: "Think about free verse, the question, the conversational tone and the brackets.",
            modelAnswer:
              "Whitman writes in free verse, so the lines follow the rhythm of natural speech rather than a fixed metre, matching his idea that identity cannot be forced into one pattern. The rhetorical question and the casual 'Very well then' create a confident, conversational voice that shrugs off criticism. The brackets around '(I am large, I contain multitudes.)' feel like a private aside, yet they hold the boldest claim: one person contains many selves. Together these choices present identity as many-sided and something to celebrate rather than resolve.",
            markScheme: [
              { point: "Identifies free verse and links it to the idea of identity", keywords: ["free verse", "no regular", "natural speech", "no fixed", "pattern"] },
              { point: "Comments on the question or the conversational, confident voice", keywords: ["question", "conversational", "confident", "very well", "casual", "voice"] },
              { point: "Analyses the brackets or 'multitudes'", keywords: ["brackets", "parenthesis", "aside", "multitudes", "large", "many selves"] },
              { point: "Explains the view of identity (many-sided, celebrated)", keywords: ["identity", "many-sided", "complex", "multiple", "celebrate", "contradict"] },
            ],
            commonError: "Treating free verse as 'random' rather than explaining what freedom from rhyme and metre achieves.",
            guideRef: "tone-voice",
          },
          {
            id: "ptk-qa-p4-q09",
            extract: "So long as men can breathe or eyes can see,\nSo long lives this, and this gives life to thee.\n(William Shakespeare, Sonnet 18, final couplet)",
            question: "What does this rhyming couplet claim, and how do its structure and repetition make the claim powerful?",
            marks: 3,
            hint: "What is 'this'? Why repeat 'So long'?",
            modelAnswer:
              "The couplet claims that the poem ('this') will last as long as humans exist, and so it will keep the beloved alive for ever. The repetition of 'So long' at the start of both lines (anaphora) creates a confident, ceremonial rhythm, while the full rhyme 'see / thee' clicks shut like a final seal. As the end of a Shakespearean sonnet, the couplet works as a closing statement that resolves the poem's worry about time and decay.",
            markScheme: [
              { point: "Explains the claim: the poem will make the beloved immortal", keywords: ["immortal", "for ever", "forever", "live on", "poem will last", "eternal"] },
              { point: "Analyses the repetition of 'So long'", keywords: ["so long", "repetition", "anaphora", "repeated", "emphasis"] },
              { point: "Comments on the rhyming couplet as a strong, final conclusion", keywords: ["couplet", "rhyme", "see / thee", "final", "conclusion", "resolve", "closure"] },
            ],
            commonError: "Thinking 'this' refers to the summer's day rather than the poem itself.",
            guideRef: "form",
          },
          {
            id: "ptk-qa-p4-q10",
            extract: "Weak answer: 'Owen uses onomatopoeia in \"rapid rattle\". This is effective and makes the reader want to read on.'",
            question: "Explain why this answer would score poorly, then rewrite it as a strong piece of analysis.",
            marks: 4,
            hint: "What is missing from the chain technique, evidence, effect, meaning?",
            modelAnswer:
              "The answer is feature spotting: it names a technique and quotes, but 'effective' and 'makes the reader want to read on' are generic comments that could apply to any poem. It never explains what the sound does.\n\nRewrite: Owen's onomatopoeic phrase 'rapid rattle' imitates the relentless clatter of machine-gun fire, and the harsh repeated 'r' and 't' sounds make the line itself seem to shoot. This turns the guns into the only 'mourners' at the soldiers' deaths, exposing the brutal, impersonal way they died.",
            markScheme: [
              { point: "Identifies the problem: feature spotting or generic comment", keywords: ["feature spotting", "generic", "vague", "doesn't explain", "does not explain", "no effect", "could apply to any"] },
              { point: "Rewrite explains what the sound imitates", keywords: ["gunfire", "machine gun", "guns", "imitates", "clatter", "shooting"] },
              { point: "Rewrite zooms in on specific sounds or words", keywords: ["'r'", "'t'", "harsh", "plosive", "rattle", "stuttering"] },
              { point: "Rewrite links to meaning or theme (brutality, no funeral)", keywords: ["brutal", "death", "funeral", "mourners", "waste", "war", "impersonal"] },
            ],
            commonError: "Rewriting with more technique names but still not explaining an effect.",
            guideRef: "technique-and-effect",
          },
          {
            id: "ptk-qa-p4-q11",
            extract: "And on the pedestal these words appear:\nMy name is Ozymandias, King of Kings;\nLook on my Works, ye Mighty, and despair!\nNothing beside remains. Round the decay\nOf that colossal Wreck, boundless and bare\nThe lone and level sands stretch far away.\n(Percy Bysshe Shelley, Ozymandias, 1818)",
            question: "How does Shelley use language and structure in these lines to present the idea that power does not last?",
            marks: 5,
            hint: "Contrast the king's words with what surrounds them. Look at the caesura after 'remains' and the sounds of the last two lines.",
            modelAnswer:
              "Shelley contrasts the king's boastful words with the emptiness around them. The imperative 'Look on my Works, ye Mighty, and despair!' was meant to terrify rival rulers, but it is now dramatically ironic, because there are no works left to see. The short sentence 'Nothing beside remains.' ends with a caesura, a blunt full stop in mid-line that cuts the boast dead. The phrase 'colossal Wreck' sets enormous size against total ruin. Finally, the alliteration of 'boundless and bare' and 'lone and level' creates long, flat sounds that stretch across the line like the endless desert. The structure moves from proud speech to silent sand, showing that time erases even the greatest power.",
            markScheme: [
              { point: "Analyses the boastful imperative or 'King of Kings'", keywords: ["imperative", "boast", "arrogant", "king of kings", "look on my works", "despair"] },
              { point: "Identifies the irony", keywords: ["irony", "ironic", "nothing left", "no works", "ruins"] },
              { point: "Analyses the caesura or short sentence 'Nothing beside remains.'", keywords: ["caesura", "nothing beside remains", "full stop", "short sentence", "blunt", "abrupt"] },
              { point: "Analyses sound or imagery in the final lines", keywords: ["alliteration", "boundless and bare", "lone and level", "colossal wreck", "desert", "sands", "stretch"] },
              { point: "Links to the theme of power and time", keywords: ["power", "time", "temporary", "does not last", "fades", "pride", "decay"] },
            ],
            commonError: "Summarising the scene without analysing how the structure undercuts the king's words.",
            guideRef: "whole-poem",
          },
          {
            id: "ptk-qa-p4-q12",
            question: "'Form and structure are just decoration: only the words' meaning really matters.' Using at least two poems from this topic, argue how far you agree.",
            marks: 6,
            hint: "Choose poems where form or structure clearly shapes meaning (e.g. the volta in 'Remember', the cyclical structure of 'The Tyger'). Consider the other side too.",
            modelAnswer:
              "I strongly disagree, because in the best poems form and structure ARE part of the meaning. In Rossetti's 'Remember', the Petrarchan volta at 'Yet' does more than decorate: the speaker's change of heart happens exactly where the form turns, so the reader experiences her shift from pleading to selfless release. Similarly, the cyclical structure of Blake's 'The Tyger' returns to its first stanza with one change, 'Could' becoming 'Dare', showing how the speaker's awe has deepened without the mystery being solved. The trochaic rhythm that hammers through the poem also enacts the forge imagery. On the other hand, free verse poems such as Whitman's 'Song of Myself' show that a poem need not follow a strict form to be powerful, and a reader who knew nothing about sonnets could still be moved by Rossetti's words. However, even free verse uses line breaks and pauses deliberately. Overall, meaning and form cannot be separated: form is the way a poem makes us feel its meaning.",
            markScheme: [
              { point: "States a clear position on the statement", keywords: ["agree", "disagree", "strongly", "partly", "to some extent", "i think"] },
              { point: "Uses a first poem's form or structure as evidence", keywords: ["volta", "petrarchan", "sonnet", "octave", "remember", "rossetti"] },
              { point: "Uses a second poem's form or structure as evidence", keywords: ["cyclical", "could frame", "dare frame", "tyger", "trochaic", "blake", "eagle", "refrain"] },
              { point: "Explains how form creates meaning or effect", keywords: ["enacts", "mirrors", "reflects", "experience", "creates", "shapes", "reinforces"] },
              { point: "Considers a counter-argument", keywords: ["on the other hand", "however", "free verse", "words alone", "could still", "some readers"] },
              { point: "Reaches a reasoned conclusion", keywords: ["overall", "ultimately", "therefore", "cannot be separated", "in conclusion"] },
            ],
            commonError: "Describing the forms of two poems without explaining how they affect the meaning, or never considering the opposing view.",
            guideRef: "form",
          },
        ],
      },
    ],
  },
};
