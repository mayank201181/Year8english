import type { Topic } from "../types";

export const spag: Topic = {
  id: "spag",
  title: "Grammar, Punctuation & Vocabulary",
  subject: "Skills",
  icon: "🔤",
  summary: "Clauses, commas, semicolons, word classes and precise vocabulary.",
  intro:
    "Grammar is not a list of fussy rules: it is the engine that lets a writer control exactly how a reader feels, from the breathless rush of a long sentence to the punch of a single word. In this topic you will learn how sentences are built, how every punctuation mark changes meaning and pace, and how to choose the precise word and the right register for any audience. Master this and every other piece of writing you do this year, from Shakespeare essays to discursive arguments, gets sharper.",

  guide: [
    {
      id: "word-classes",
      heading: "Word classes: the jobs words do",
      discovery: {
        problem:
          "Lewis Carroll's poem 'Jabberwocky' begins: ’Twas brillig, and the slithy toves / Did gyre and gimble in the wabe. None of the strange words is real English, yet you can probably say which one is a noun, which is an adjective and which is a verb. Try it: what word class are 'toves', 'slithy' and 'gyre'? How did you know?",
        idea:
          "'Toves' is a noun (it follows 'the' and has a plural -s), 'slithy' is an adjective (it sits between 'the' and a noun, describing it) and 'gyre' is a verb (it follows the auxiliary 'did'). You worked it out from **position and endings**, not meaning. That is the key insight: a word's class is decided by the **job it does in the sentence**.",
      },
      body:
        "Every word in a sentence belongs to a **word class** (sometimes called a part of speech). Knowing the classes lets you talk precisely about writing: 'the writer uses a verb' is far stronger than 'the writer uses a word'.\n\n- **Noun**: names a person, place, thing or idea. **Common nouns** (table, river), **proper nouns** with capitals (Singapore, Prospero), **abstract nouns** for ideas and feelings you cannot touch (courage, jealousy, freedom) and **collective nouns** for groups (a flock, a team).\n- **Verb**: an action or state (run, whisper, seem, is). **Auxiliary verbs** help other verbs (has eaten, was running) and **modal verbs** show possibility or obligation (can, could, might, must, should, will, would).\n- **Adjective**: describes a noun (a *jagged* rock; the rock was *jagged*).\n- **Adverb**: adds information to a verb, adjective or another adverb, often about how, when, where or how much (she spoke *softly*; *very* cold; we left *yesterday*).\n- **Pronoun**: stands in for a noun (I, she, they, it, mine, yours, who, which).\n- **Preposition**: shows the relationship (often place or time) between a noun and the rest of the sentence (under, through, before, beside, during).\n- **Conjunction**: joins words or clauses. **Coordinating** conjunctions join equal parts (and, but, so); **subordinating** conjunctions start a subordinate clause (because, although, when, if).\n- **Determiner**: comes before a noun to say which one or how many (the, a, an, this, those, my, your, some, every, three).\n\nThe same word can change class depending on its job: 'I read a **book**' (noun) versus 'We need to **book** tickets' (verb). Endings help but can mislead: most -ly words are adverbs, but 'friendly', 'lonely' and 'lovely' are adjectives ('a friendly dog').\n\nNotice the difference between **determiners** and **pronouns**: 'This is **my** bag' (my = determiner, it comes before the noun) but 'The bag is **mine**' (mine = pronoun, it stands alone).",
      diagram:
        '<svg viewBox="0 0 640 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The sentence The nervous drummer quickly hid his sticks under the stage with every word labelled by its word class"><text x="320" y="22" font-size="14" font-weight="bold" text-anchor="middle" fill="#1f2937">Every word has a job</text><rect x="44" y="38" width="40" height="30" rx="6" fill="#e5e7eb" stroke="#4b5563"/><text x="64" y="58" font-size="13" text-anchor="middle" fill="#111827">The</text><text x="64" y="88" font-size="11" text-anchor="middle" fill="#4b5563">det</text><rect x="90" y="38" width="66" height="30" rx="6" fill="#fef3c7" stroke="#b45309"/><text x="123" y="58" font-size="13" text-anchor="middle" fill="#111827">nervous</text><text x="123" y="88" font-size="11" text-anchor="middle" fill="#b45309">adj</text><rect x="162" y="38" width="66" height="30" rx="6" fill="#dbeafe" stroke="#1d4ed8"/><text x="195" y="58" font-size="13" text-anchor="middle" fill="#111827">drummer</text><text x="195" y="88" font-size="11" text-anchor="middle" fill="#1d4ed8">noun</text><rect x="234" y="38" width="62" height="30" rx="6" fill="#fce7f3" stroke="#be185d"/><text x="265" y="58" font-size="13" text-anchor="middle" fill="#111827">quickly</text><text x="265" y="88" font-size="11" text-anchor="middle" fill="#be185d">adverb</text><rect x="302" y="38" width="36" height="30" rx="6" fill="#dcfce7" stroke="#15803d"/><text x="320" y="58" font-size="13" text-anchor="middle" fill="#111827">hid</text><text x="320" y="88" font-size="11" text-anchor="middle" fill="#15803d">verb</text><rect x="344" y="38" width="36" height="30" rx="6" fill="#e5e7eb" stroke="#4b5563"/><text x="362" y="58" font-size="13" text-anchor="middle" fill="#111827">his</text><text x="362" y="88" font-size="11" text-anchor="middle" fill="#4b5563">det</text><rect x="386" y="38" width="56" height="30" rx="6" fill="#dbeafe" stroke="#1d4ed8"/><text x="414" y="58" font-size="13" text-anchor="middle" fill="#111827">sticks</text><text x="414" y="88" font-size="11" text-anchor="middle" fill="#1d4ed8">noun</text><rect x="448" y="38" width="50" height="30" rx="6" fill="#ede9fe" stroke="#6d28d9"/><text x="473" y="58" font-size="13" text-anchor="middle" fill="#111827">under</text><text x="473" y="88" font-size="11" text-anchor="middle" fill="#6d28d9">prep</text><rect x="504" y="38" width="36" height="30" rx="6" fill="#e5e7eb" stroke="#4b5563"/><text x="522" y="58" font-size="13" text-anchor="middle" fill="#111827">the</text><text x="522" y="88" font-size="11" text-anchor="middle" fill="#4b5563">det</text><rect x="546" y="38" width="50" height="30" rx="6" fill="#dbeafe" stroke="#1d4ed8"/><text x="571" y="58" font-size="13" text-anchor="middle" fill="#111827">stage</text><text x="571" y="88" font-size="11" text-anchor="middle" fill="#1d4ed8">noun</text><text x="320" y="122" font-size="11" text-anchor="middle" fill="#374151">det = determiner · adj = adjective · prep = preposition</text></svg>',
      diagramCaption: "Each word does a job: determiners point to nouns, adjectives describe them, adverbs modify the verb, prepositions show position.",
      keyPoints: [
        "Word class depends on the job a word does in its sentence, not on the word itself.",
        "Abstract nouns name ideas and feelings (fear, hope); proper nouns need capital letters.",
        "My/your/their are determiners; mine/yours/theirs are pronouns.",
        "Not every -ly word is an adverb: friendly, lonely and lovely are adjectives.",
      ],
      thinkDeeper:
        "Is 'running' a verb, a noun or an adjective? Write three sentences in which it does each job, then explain what test you used to decide.",
    },
    {
      id: "phrases-clauses",
      heading: "Phrases and clauses: the building blocks",
      discovery: {
        problem:
          "Which of these could stand on its own as a sentence? (a) under the old bridge (b) the river froze (c) because the river froze. What does the one that works have that (a) lacks, and why does (c) still feel unfinished?",
        idea:
          "Only (b) works. It is a **main clause**: it has a subject ('the river') and a verb ('froze') and makes complete sense alone. (a) is a **phrase**: there is no verb. (c) has a subject and a verb, but the word 'because' turns it into a **subordinate clause**, which depends on a main clause to finish the thought: 'The boats were trapped because the river froze.'",
      },
      body:
        "A **phrase** is a group of words that works as a unit but does **not** contain a subject doing a verb. A **noun phrase** is built around a noun ('the rusty old bicycle'); a **prepositional phrase** starts with a preposition ('across the frozen lake').\n\nA **clause** is a group of words that **does** contain a subject and a verb ('the dog barked').\n\n- A **main clause** (independent clause) makes sense on its own: 'We stayed indoors.'\n- A **subordinate clause** (dependent clause) adds information but cannot stand alone. It usually begins with a **subordinating conjunction** such as because, although, when, while, if, unless, since, until, after, before or as: 'because the storm was raging'.\n- A **relative clause** is a type of subordinate clause that gives more information about a noun. It begins with a **relative pronoun**: who, which, that, whose (or where/when): 'the girl **who won the race**'.\n\nSubordinate clauses can move. 'Although she was terrified, Lina stepped forward' delays the main action and builds suspense; 'Lina stepped forward although she was terrified' puts the action first. When the subordinate clause comes **first**, put a comma after it.\n\n**Bonus for strong writers:** a **non-finite clause** uses an -ing or -ed verb form with no tense of its own: '**Shivering in the doorway**, the boy waited.' These make excellent varied sentence openers.",
      diagram:
        '<svg viewBox="0 0 600 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A main clause joined to a subordinate clause, and a relative clause embedded inside a main clause"><text x="20" y="20" font-size="11" fill="#15803d">MAIN CLAUSE (makes sense alone)</text><text x="250" y="20" font-size="11" fill="#c2410c">SUBORDINATE CLAUSE (needs the main clause)</text><rect x="20" y="28" width="220" height="34" rx="6" fill="#dcfce7" stroke="#15803d"/><text x="130" y="50" font-size="13" text-anchor="middle" fill="#14532d">We stayed indoors</text><rect x="250" y="28" width="330" height="34" rx="6" fill="#ffedd5" stroke="#c2410c"/><text x="415" y="50" font-size="13" text-anchor="middle" fill="#7c2d12">because the storm was raging.</text><rect x="20" y="100" width="110" height="34" rx="6" fill="#dcfce7" stroke="#15803d"/><text x="75" y="122" font-size="13" text-anchor="middle" fill="#14532d">The storm,</text><rect x="140" y="100" width="250" height="34" rx="6" fill="#ede9fe" stroke="#6d28d9"/><text x="265" y="122" font-size="13" text-anchor="middle" fill="#4c1d95">which had lasted all night,</text><rect x="400" y="100" width="180" height="34" rx="6" fill="#dcfce7" stroke="#15803d"/><text x="490" y="122" font-size="13" text-anchor="middle" fill="#14532d">finally passed.</text><text x="265" y="156" font-size="11" text-anchor="middle" fill="#6d28d9">relative clause: extra information dropped inside the main clause</text></svg>',
      diagramCaption: "Top: main clause + subordinate clause = a complex sentence. Bottom: a relative clause embedded inside a main clause, fenced off by commas.",
      keyPoints: [
        "Phrase = no subject-and-verb; clause = has a subject and a verb.",
        "A main clause stands alone; a subordinate clause depends on it.",
        "Relative clauses start with who, which, that or whose and describe a noun.",
        "Put a comma after a subordinate clause that opens a sentence.",
      ],
      thinkDeeper:
        "'When the door opened' is a clause, yet it is not a sentence. Explain exactly what the word 'when' does to change it, and why removing that one word makes it a sentence again.",
    },
    {
      id: "sentence-types",
      heading: "Sentence types and their effects",
      discovery: {
        problem:
          "Read these two versions aloud. A: 'The door creaked open and a cold draught swept in and I froze.' B: 'The door creaked open. A cold draught swept in. I froze.' Which is tenser, and why?",
        idea:
          "Most readers find B tenser. The full stops force pauses, so each event lands separately like a heartbeat, and the final two-word sentence 'I froze.' stops the reader just as the narrator stops. Version A rushes the events together with 'and'. **Sentence length and structure control pace**, and pace controls emotion.",
      },
      body:
        "There are four sentence types you need to recognise and, more importantly, **use on purpose**.\n\n- A **simple sentence** has **one main clause**: 'The wolf howled.' Simple does not mean short: 'The exhausted, rain-soaked hikers on the ridge finally reached the hut before dark' is still simple, because it has only one verb with its subject. Short simple sentences create **tension, shock or emphasis**.\n- A **compound sentence** joins two (or more) main clauses of equal weight, usually with a **coordinating conjunction** (remember **FANBOYS**: for, and, nor, but, or, yet, so) or a semicolon: 'I knocked, but nobody answered.' Compound sentences create **balance, contrast or a sense of events piling up**.\n- A **complex sentence** has a main clause plus at least one **subordinate clause**: 'Although I knocked, nobody answered.' Complex sentences **explain causes, add detail and nuance**, and can **delay** the key information to build suspense.\n- A **minor sentence** has no main verb: 'Silence.' 'What a disaster!' 'Fog everywhere.' Minor sentences create **atmosphere, punch or a conversational voice**. Use them sparingly and deliberately.\n\nSentences also have **functions**: **statements** (tell), **questions** (ask), **commands** or imperatives (instruct: 'Look closer.') and **exclamations** (show strong feeling: 'What a goal!').\n\nThe real skill is **variety**. A paragraph of only short sentences sounds childish; a paragraph of only long ones becomes exhausting. Great writers mix them, and they place a short sentence straight after a long one when they want it to hit hard.",
      passage: {
        id: "power-cut",
        title: "Power Cut",
        source: "Original prose extract written for this app",
        text:
          "The lights died at 9.14 p.m. For a moment, nobody in the flat moved. Somewhere below, a dog began to bark, and the lift, which had been humming all evening, groaned to a halt between floors. Darkness. Then a voice, thin and unmistakable, drifted up the stairwell. My brother grabbed my arm. Although I told him it was only Mrs Tan from the fourth floor, I did not believe it myself.",
        note:
          "Spot the variety: a simple opening sentence; a compound sentence with an embedded relative clause ('which had been humming all evening'); the minor sentence 'Darkness.'; and a final complex sentence whose subordinate clause ('Although I told him...') sets up the twist in the main clause.",
      },
      keyPoints: [
        "Simple = one main clause (can be long); compound = two main clauses joined by FANBOYS or a semicolon.",
        "Complex = main clause + subordinate clause; minor = no main verb.",
        "Short sentences after long ones create impact; vary length for pace.",
        "Always link a sentence type to its effect: tension, contrast, explanation, atmosphere.",
      ],
      thinkDeeper:
        "Rewrite the 'Power Cut' extract using only simple sentences. What is lost? Then explain why a writer might still choose a run of simple sentences at the climax of a story.",
    },
    {
      id: "commas",
      heading: "Full stops, commas and the comma splice",
      discovery: {
        problem:
          "What is wrong with this sentence? 'The match was cancelled, it had rained all night.' Find three different ways to fix it.",
        idea:
          "It is a **comma splice**: two main clauses glued together with only a comma. Fix it with a full stop ('The match was cancelled. It had rained all night.'), a semicolon ('The match was cancelled; it had rained all night.') or a conjunction ('The match was cancelled because it had rained all night.'). A comma is simply not strong enough to hold two sentences together.",
      },
      body:
        "A **full stop** ends a complete sentence. A **comma** creates a smaller break *inside* a sentence. The most common and costly punctuation error at secondary school is the **comma splice**: joining two main clauses with only a comma ('I was tired, I went to bed.'). Its cousin is the **run-on (fused) sentence**, with no punctuation at all ('I was tired I went to bed.').\n\nThe test: could each half stand alone as a sentence? If yes, a comma alone is wrong. Use a full stop, a semicolon or a conjunction.\n\nWords like **however, therefore, moreover** and **nevertheless** are adverbs, not conjunctions, so they cannot join two clauses with a comma. Write: 'I was tired**; however,** I kept going.' or 'I was tired**. However,** I kept going.'\n\nUse commas correctly to:\n- **Separate items in a list**: 'I packed a torch, a map, some snacks and a whistle.' (A comma before the final 'and' is called the **Oxford comma**; it is optional, but use it if it prevents confusion, and be consistent.)\n- **Follow a fronted adverbial or opening subordinate clause**: 'After lunch, we left.' 'When the bell rang, everyone ran.'\n- **Mark parenthesis**, extra information that could be removed: 'My uncle, a chef in Penang, cooks every Sunday.'\n- **Enclose a non-defining relative clause**: 'My sister, who lives in London, is visiting.' But a **defining** relative clause takes **no commas**, because it tells you *which one*: 'Students who finish early may leave' (only those students).\n- **Separate a name in direct address**: 'Let's eat, Grandma!' versus 'Let's eat Grandma!'\n\nA comma is not just 'where you pause for breath'. It follows grammar, and moving it can change meaning completely.",
      keyPoints: [
        "Two main clauses joined only by a comma = comma splice. Use . ; or a conjunction.",
        "However/therefore are not conjunctions: use a semicolon or full stop before them.",
        "Commas go after fronted adverbials, between list items and around removable extra information.",
        "Defining relative clauses take no commas; non-defining ones do, and the meaning changes.",
      ],
      thinkDeeper:
        "'The students, who had revised, passed easily.' and 'The students who had revised passed easily.' Imagine you are a student who did NOT revise. Which sentence is worse news for you, and why?",
    },
    {
      id: "semicolons-colons-dashes",
      heading: "Semicolons, colons, dashes and brackets",
      discovery: {
        problem:
          "Put either a semicolon or a colon in each gap. (1) I had one goal __ to finish. (2) Mei loves maths __ her brother hates it. What is the difference between the two jobs?",
        idea:
          "(1) takes a **colon**: what follows delivers or explains what 'one goal' promised. (2) takes a **semicolon**: two balanced main clauses of equal weight, closely linked in meaning. Think of a colon as a **drumroll** pointing forward and a semicolon as a **see-saw** holding two equal sides.",
      },
      body:
        "A **semicolon (;)** has two jobs.\n- It joins two **closely related main clauses** without a conjunction: 'The sun had set; the bats came out.' Test: you could replace it with a full stop and both halves would still be sentences.\n- It separates items in a **complicated list** whose items already contain commas: 'We visited Paris, France; Rome, Italy; and Vienna, Austria.'\n\nA **colon (:)** introduces something. What comes **before** it must be a complete main clause; what comes after explains, lists, gives an example or delivers a dramatic reveal.\n- List: 'You will need three things: a torch, a rope and courage.'\n- Explanation: 'I couldn't sleep: the mosquitoes were relentless.'\n- Reveal: 'There was only one suspect: the butler.'\n\nA **dash (– or —)** is more informal and dramatic. A single dash adds an afterthought or a sudden twist: 'I opened the box and found — nothing.' A **pair of dashes** marks parenthesis with a strong interruption: 'My cousin — a famously terrible cook — offered to make dinner.'\n\n**Brackets ( )** also mark parenthesis, but more quietly, like a whispered aside: 'The Merlion (half fish, half lion) is a symbol of Singapore.' The sentence must still make complete sense if you remove the brackets and what is inside them.\n\nDo not confuse a dash with a **hyphen (-)**, which is shorter and joins words together: 'a well-known writer', 'twenty-one'.",
      diagram:
        '<svg viewBox="0 0 600 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three patterns: semicolon balancing two main clauses, colon pointing to an explanation, and dashes fencing off removable extra information"><text x="10" y="20" font-size="12" font-weight="bold" fill="#1d4ed8">Semicolon ;  two equal main clauses</text><rect x="10" y="28" width="230" height="32" rx="6" fill="#dbeafe" stroke="#1d4ed8"/><text x="125" y="49" font-size="12" text-anchor="middle" fill="#1e3a8a">Mei loves maths</text><text x="262" y="52" font-size="20" font-weight="bold" text-anchor="middle" fill="#1d4ed8">;</text><rect x="285" y="28" width="230" height="32" rx="6" fill="#dbeafe" stroke="#1d4ed8"/><text x="400" y="49" font-size="12" text-anchor="middle" fill="#1e3a8a">her brother hates it.</text><text x="10" y="90" font-size="12" font-weight="bold" fill="#b45309">Colon :  main clause, then what it promises</text><rect x="10" y="98" width="230" height="32" rx="6" fill="#fef3c7" stroke="#b45309"/><text x="125" y="119" font-size="12" text-anchor="middle" fill="#78350f">I had one goal</text><text x="262" y="122" font-size="20" font-weight="bold" text-anchor="middle" fill="#b45309">:</text><rect x="285" y="98" width="230" height="32" rx="6" fill="#fffbeb" stroke="#b45309" stroke-dasharray="5 3"/><text x="400" y="119" font-size="12" text-anchor="middle" fill="#78350f">to finish. (list / reason / reveal)</text><text x="10" y="160" font-size="12" font-weight="bold" fill="#6d28d9">Dashes or brackets: removable extra information</text><rect x="10" y="168" width="110" height="32" rx="6" fill="#dcfce7" stroke="#15803d"/><text x="65" y="189" font-size="12" text-anchor="middle" fill="#14532d">My cousin</text><rect x="130" y="168" width="230" height="32" rx="6" fill="#ede9fe" stroke="#6d28d9" stroke-dasharray="5 3"/><text x="245" y="189" font-size="12" text-anchor="middle" fill="#4c1d95">— a terrible cook —</text><rect x="370" y="168" width="200" height="32" rx="6" fill="#dcfce7" stroke="#15803d"/><text x="470" y="189" font-size="12" text-anchor="middle" fill="#14532d">offered to cook.</text></svg>',
      diagramCaption: "Semicolon = see-saw of two equal clauses; colon = drumroll pointing forward; dashes/brackets = a removable fence of extra information.",
      keyPoints: [
        "Semicolon: joins two related main clauses, or separates list items that contain commas.",
        "Colon: must follow a complete main clause; introduces a list, explanation or reveal.",
        "Dashes are dramatic and informal; brackets are quieter asides. Both mark parenthesis.",
        "A hyphen joins words (well-known); a dash separates parts of a sentence.",
      ],
      thinkDeeper:
        "'There was only one suspect: the butler.' / 'There was only one suspect — the butler.' / 'There was only one suspect (the butler).' Rank these for drama and explain how each mark changes the tone.",
    },
    {
      id: "apostrophes-speech",
      heading: "Apostrophes, homophones and speech punctuation",
      discovery: {
        problem:
          "Which of these are correct? (a) The dog wagged it's tail. (b) The girls' changing room was flooded. (c) The childrens' toys were everywhere. (d) Its raining again.",
        idea:
          "Only (b) is correct: 'girls' is a plural already ending in s, so the apostrophe goes after it. (a) needs **its** (possessive, no apostrophe, like his and hers). (c) should be **children's**, because 'children' is already plural without an s, so you add 's. (d) needs **It's**, short for 'it is'.",
      },
      body:
        "An **apostrophe (’)** has only two jobs.\n\n**1. Omission (contraction)**: it shows where letters are missing: do not → don't, I would → I'd, they are → they're, it is / it has → it's, who is → who's. Avoid contractions in formal writing.\n\n**2. Possession**: it shows that something belongs to someone.\n- Singular owner: add **'s**: the dog's bowl, Ms Lim's class, James's book (James' is also accepted; be consistent).\n- Plural owner ending in s: add **' only**: the dogs' bowls, the girls' changing room.\n- Plural owner **not** ending in s: add **'s**: the children's toys, the women's team, people's opinions.\n\n**Never** use an apostrophe to make a plural ('banana's £1' is wrong; it should be bananas). And **possessive pronouns never take an apostrophe**: its, hers, yours, ours, theirs, whose.\n\nThis causes some famous **homophone** confusions (words that sound the same but differ in meaning):\n- **it's** (it is/has) / **its** (belonging to it)\n- **they're** (they are) / **their** (belonging to them) / **there** (a place, or 'there is')\n- **you're** (you are) / **your** (belonging to you)\n- **who's** (who is/has) / **whose** (belonging to whom)\n\n**Speech punctuation** follows clear rules:\n- Speech marks go around the exact words spoken.\n- Punctuation at the end of the speech goes **inside** the closing speech mark.\n- If a **reporting clause** follows, end the speech with a comma (not a full stop) and use a lower-case letter: “I'm cold,” she said.\n- Question and exclamation marks stay, and the reporting clause still starts lower case: “Where are you?” he asked.\n- If the reporting clause comes first, put a comma before the speech opens: She said, “I'm cold.”\n- Interrupted speech: “If you go,” she said, “I'm coming too.” (lower case 'I'm coming' continues the same sentence; if a new sentence starts, use a full stop after the reporting clause and a capital).\n- **New speaker, new line.**",
      diagram:
        '<svg viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Apostrophe decision flowchart: is a letter missing, does it show belonging, is the owner a plural ending in s"><defs><marker id="spgArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#374151"/></marker></defs><rect x="10" y="10" width="270" height="36" rx="6" fill="#e0e7ff" stroke="#4338ca"/><text x="145" y="33" font-size="13" text-anchor="middle" fill="#312e81">1. Is a letter missing?</text><line x1="280" y1="28" x2="306" y2="28" stroke="#374151" stroke-width="1.5" marker-end="url(#spgArr)"/><text x="293" y="20" font-size="11" text-anchor="middle" fill="#15803d">yes</text><rect x="310" y="10" width="280" height="36" rx="6" fill="#dcfce7" stroke="#15803d"/><text x="450" y="33" font-size="12" text-anchor="middle" fill="#14532d">’ where letters were: it’s, don’t</text><line x1="145" y1="46" x2="145" y2="72" stroke="#374151" stroke-width="1.5" marker-end="url(#spgArr)"/><text x="160" y="63" font-size="11" fill="#b91c1c">no</text><rect x="10" y="76" width="270" height="36" rx="6" fill="#e0e7ff" stroke="#4338ca"/><text x="145" y="99" font-size="13" text-anchor="middle" fill="#312e81">2. Does it show belonging?</text><line x1="280" y1="94" x2="306" y2="94" stroke="#374151" stroke-width="1.5" marker-end="url(#spgArr)"/><text x="293" y="86" font-size="11" text-anchor="middle" fill="#b91c1c">no</text><rect x="310" y="76" width="280" height="36" rx="6" fill="#fee2e2" stroke="#b91c1c"/><text x="450" y="99" font-size="12" text-anchor="middle" fill="#7f1d1d">No apostrophe: apples, CDs, the 1990s</text><line x1="145" y1="112" x2="145" y2="138" stroke="#374151" stroke-width="1.5" marker-end="url(#spgArr)"/><text x="160" y="129" font-size="11" fill="#15803d">yes</text><rect x="10" y="142" width="270" height="36" rx="6" fill="#e0e7ff" stroke="#4338ca"/><text x="145" y="165" font-size="13" text-anchor="middle" fill="#312e81">3. Plural owner ending in s?</text><line x1="280" y1="160" x2="306" y2="160" stroke="#374151" stroke-width="1.5" marker-end="url(#spgArr)"/><text x="293" y="152" font-size="11" text-anchor="middle" fill="#15803d">yes</text><rect x="310" y="142" width="280" height="36" rx="6" fill="#dcfce7" stroke="#15803d"/><text x="450" y="165" font-size="12" text-anchor="middle" fill="#14532d">Add ’ only: the girls’ coats</text><line x1="145" y1="178" x2="145" y2="204" stroke="#374151" stroke-width="1.5" marker-end="url(#spgArr)"/><text x="160" y="195" font-size="11" fill="#b91c1c">no</text><rect x="10" y="208" width="270" height="36" rx="6" fill="#dcfce7" stroke="#15803d"/><text x="145" y="231" font-size="12" text-anchor="middle" fill="#14532d">Add ’s: the dog’s bowl, children’s toys</text><text x="300" y="262" font-size="11" text-anchor="middle" fill="#7f1d1d">Watch out: its, hers, yours, theirs and whose never take an apostrophe.</text></svg>',
      diagramCaption: "Ask three questions in order and the apostrophe almost places itself. Possessive pronouns are the exception to remember.",
      keyPoints: [
        "Apostrophes show omission (it's = it is) or possession (the dog's bowl). Never plurals.",
        "Plural ending in s: s' (the girls' room). Plural without s: 's (the children's toys).",
        "Its, hers, yours, theirs and whose never take an apostrophe.",
        "Speech: punctuation inside the speech marks; comma before a reporting clause; new speaker, new line.",
      ],
      thinkDeeper:
        "Why do you think English uses an apostrophe in 'the dog's bowl' but not in 'its bowl'? Think about which other possessive words (his, hers, ours) the word 'its' belongs with.",
    },
    {
      id: "paragraphing-tiptop",
      heading: "Paragraphing with TiPToP",
      discovery: {
        problem:
          "Where would you start new paragraphs in this block, and what tells you? We reached the hawker centre just after seven and joined the longest queue. “Two plates of chicken rice, please,” said Dad. “Make that three,” said a voice behind us. It was Auntie Lin, whom we had not seen for five years. Later that night, back at home, the thunderstorm finally broke.",
        idea:
          "Start a new paragraph when Dad speaks (new **person** speaking), when the voice behind says “Make that three” (another new speaker; the reveal that it was Auntie Lin can stay with her line) and at 'Later that night, back at home' (new **time** and new **place**). Those are the **TiPToP** triggers: Time, Place, Topic, Person.",
      },
      body:
        "A **paragraph** is a group of sentences about one idea, moment or speaker. Paragraphs give readers a rest, show them how your ideas are organised and are explicitly rewarded in mark schemes.\n\nUse **TiPToP** to know when to start a new one. Change of:\n- **Ti**me: 'Three hours later...', 'The next morning...'\n- **P**lace: 'Back at the station...', 'Meanwhile, in the kitchen...'\n- **To**pic: a new point in an argument or a new aspect of a description.\n- **P**erson: a new character enters the focus, or **a new speaker** in dialogue.\n\nIn non-fiction and essays, open each paragraph with a **topic sentence** that tells the reader what the paragraph is about, and link paragraphs with **discourse markers** (connectives):\n- adding: furthermore, moreover, in addition\n- contrasting: however, on the other hand, conversely\n- cause and effect: therefore, consequently, as a result\n- sequencing: firstly, subsequently, finally\n\nParagraph length is also a tool. A **one-sentence paragraph** after several long ones creates enormous impact, because the white space around it makes the reader pause: 'She never came back.' In analytical essays, keep to **one main point per paragraph** (PEEL: Point, Evidence, Explain, Link).",
      diagram:
        '<svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TiPToP: start a new paragraph for a change of Time, Place, Topic or Person"><text x="300" y="20" font-size="14" font-weight="bold" text-anchor="middle" fill="#1f2937">Start a new paragraph when you change…</text><rect x="10" y="34" width="135" height="100" rx="8" fill="#dbeafe" stroke="#1d4ed8"/><text x="77" y="62" font-size="20" font-weight="bold" text-anchor="middle" fill="#1d4ed8">Ti</text><text x="77" y="84" font-size="12" text-anchor="middle" fill="#1e3a8a">Time</text><text x="77" y="112" font-size="11" text-anchor="middle" fill="#1e3a8a">The next morning…</text><rect x="157" y="34" width="135" height="100" rx="8" fill="#dcfce7" stroke="#15803d"/><text x="224" y="62" font-size="20" font-weight="bold" text-anchor="middle" fill="#15803d">P</text><text x="224" y="84" font-size="12" text-anchor="middle" fill="#14532d">Place</text><text x="224" y="112" font-size="11" text-anchor="middle" fill="#14532d">Back at the flat…</text><rect x="304" y="34" width="135" height="100" rx="8" fill="#fef3c7" stroke="#b45309"/><text x="371" y="62" font-size="20" font-weight="bold" text-anchor="middle" fill="#b45309">To</text><text x="371" y="84" font-size="12" text-anchor="middle" fill="#78350f">Topic</text><text x="371" y="112" font-size="11" text-anchor="middle" fill="#78350f">Another reason is…</text><rect x="451" y="34" width="139" height="100" rx="8" fill="#fce7f3" stroke="#be185d"/><text x="520" y="62" font-size="20" font-weight="bold" text-anchor="middle" fill="#be185d">P</text><text x="520" y="84" font-size="12" text-anchor="middle" fill="#831843">Person / speaker</text><text x="520" y="112" font-size="11" text-anchor="middle" fill="#831843">“What colour?” he said.</text></svg>',
      diagramCaption: "TiPToP: Time, Place, Topic, Person. In dialogue, every new speaker gets a new line.",
      keyPoints: [
        "TiPToP: new paragraph for a change of Time, Place, Topic or Person (including each new speaker).",
        "Open essay paragraphs with a clear topic sentence.",
        "Use discourse markers (however, furthermore, consequently) to link paragraphs.",
        "A one-line paragraph is a powerful effect: use it rarely and on purpose.",
      ],
      thinkDeeper:
        "Some novelists write whole chapters with almost no paragraph breaks. What effect might a writer want from a huge unbroken block of text, and when would that choice backfire in a school essay?",
    },
    {
      id: "tense-agreement-voice",
      heading: "Standard English: tense, agreement and voice",
      discovery: {
        problem:
          "Spot every error: 'Me and Arjun was walking home when a car speeds past us.'",
        idea:
          "There are three. 'Me and Arjun' is the subject, so it should be '**Arjun and I**' (test: you would say 'I was walking', not 'me was walking'). '**was**' should be '**were**' because the subject is plural. And '**speeds**' slips into the present tense in a past-tense story: it should be '**sped**'. Each one is a Standard English rule examiners check.",
      },
      body:
        "**Standard English** is the form of English used in formal writing, exams, news reports and official documents. It is not 'posher' English; it is the shared, widely understood variety. Three areas cost students the most marks.\n\n**1. Tense consistency.** Choose a tense for your narrative (usually the **past**) and stay in it. Drifting ('I opened the door and I see a figure') confuses the reader. Only change tense for a reason, for example a flashback (I **had** never **seen**...) or a general truth.\n\n**2. Subject–verb agreement.** A singular subject takes a singular verb; a plural subject takes a plural verb.\n- Find the real subject: 'The **box** of chocolates **was** on the table' (the box, not the chocolates).\n- Each, every, everyone, nobody are singular: 'Each of the players **receives** a medal.'\n- With **neither...nor / either...or**, the verb agrees with the nearer subject: 'Neither the teacher nor the students **were** ready.'\n- Non-standard forms to avoid in formal writing: we was → we **were**; I done → I **did** / I **have done**; them books → **those** books; could of → could **have** (the contraction could've only *sounds* like 'could of').\n- Pronoun case: '**Arjun and I** went' (subject) but 'between you and **me**' (after a preposition).\n\n**3. Active and passive voice.**\n- **Active**: the subject does the action: 'The dog bit the postman.'\n- **Passive**: the subject receives the action, using a form of **be** + **past participle**, and the doer is optional: 'The postman was bitten (by the dog).'\n\nThe passive is not a mistake, and it is not the same as the past tense ('The cake **is being eaten**' is present passive). Use it to:\n- focus on the victim or object ('The Mona Lisa was stolen in 1911.')\n- hide or ignore the doer ('Mistakes were made.') which can be evasive\n- sound impersonal and objective in science ('The solution was heated to 60 °C.')\n- build suspense ('The door was opened from the inside.')\n\nOveruse makes writing vague and wordy, so in most storytelling and persuasive writing, prefer the active voice.",
      keyPoints: [
        "Keep narrative in one tense, usually the past, unless you have a reason to shift.",
        "Find the true subject: 'The list of rules IS long'; 'Each of them HAS'.",
        "Could have, not could of; we were, not we was; Arjun and I went; between you and me.",
        "Passive = form of 'be' + past participle; it shifts focus and can hide the doer.",
      ],
      thinkDeeper:
        "A company statement says: 'Customer data was accessed by unauthorised parties.' Rewrite it in the active voice. Why might the company have preferred the passive version?",
    },
    {
      id: "vocabulary-register",
      heading: "Vocabulary: roots, shades of meaning and register",
      discovery: {
        problem:
          "You may never have seen the word 'chronometer', but you can work it out. Clues: 'chron' as in chronological, and 'meter' as in thermometer. Now try 'malevolent' (think of 'malicious' and 'benevolent').",
        idea:
          "A **chronometer** measures time (Greek *chronos* = time + *metron* = measure); it is a very accurate clock. **Malevolent** means wishing harm on others (Latin *male* = badly + *volens* = wishing), the opposite of benevolent (*bene* = well). Knowing a few dozen **roots** unlocks thousands of words, including exam vocabulary you have never met.",
      },
      body:
        "**Morphology** is the study of how words are built.\n- A **root** carries the core meaning, often from **Latin** or **Greek**. Latin: *aud* (hear: audience), *spect* (look: spectator), *port* (carry: portable), *scrib/script* (write: manuscript), *dict* (say: predict), *rupt* (break: erupt), *vid/vis* (see: visible), *bene* (good/well: benefit), *mal* (bad: malfunction). Greek: *bio* (life), *graph* (write), *tele* (far), *phon* (sound), *chron* (time), *geo* (earth), *auto* (self), *micro* (small), *-logy* (study of).\n- A **prefix** goes at the front and changes meaning: un-, dis-, in-/im-/ir- (not), mis- (wrongly), re- (again), pre- (before), sub- (under), inter- (between), trans- (across), anti- (against).\n- A **suffix** goes at the end and often changes the **word class**: -ness, -ment, -tion (nouns: kindness, decision); -ful, -ous, -ive, -able (adjectives: hopeful, famous); -ly (adverbs); -ise, -ify (verbs: modernise, simplify).\n\n**Shades of meaning.** Synonyms are rarely identical. 'Walked', 'strolled', 'marched', 'trudged' and 'staggered' all mean moving on foot, but each paints a different picture. 'Slim', 'slender', 'skinny' and 'skeletal' move from positive to negative **connotations** (the associations a word carries). Precise vocabulary is the quickest way to raise the level of your writing: 'she said' → 'she snapped / pleaded / muttered'.\n\n**Register** is the level of formality you choose for your **audience and purpose**. Formal register: no slang, no contractions, precise vocabulary, often more complex sentences ('Many students are concerned about...'). Informal register: contractions, chatty tone, everyday words ('Loads of us are fed up with...'). Neither is 'better'; the skill is matching register to the task.\n\n**Standard English, dialect and Singlish.** A **dialect** is a variety of a language with its own vocabulary and grammar, linked to a region or community: Yorkshire English, Scots, or **Singlish** (Colloquial Singapore English). Singlish is rule-governed and expressive, with discourse particles such as *lah* and *lor*, and words borrowed from Malay (*makan*, to eat), Hokkien (*kiasu*, afraid of losing out) and other languages. It signals friendship and belonging. But it is not the right choice for an exam essay or a formal letter, just as a Yorkshire speaker would not write 'we were going' as 'we was going' in a job application. Moving between varieties to suit the situation is called **code-switching**, and it is a real skill, not a weakness. In creative writing, dialect in a character's speech can add authenticity.\n\n**Commonly confused words**\n- **affect** (verb: to influence) / **effect** (noun: a result): 'The noise affected me; it had a strange effect.'\n- **practice** (noun) / **practise** (verb) in British English, like advice/advise: 'I practise every day before football practice.'\n- **lose** (verb: to misplace, not win) / **loose** (adjective: not tight)\n- **then** (time) / **than** (comparison); **accept** (receive) / **except** (apart from); **quiet** / **quite**",
      keyPoints: [
        "Break unknown words into prefix + root + suffix to work out meaning.",
        "Synonyms differ in connotation: choose the word that carries exactly the right shade.",
        "Match register (formal/informal) to audience and purpose.",
        "Dialects such as Singlish are valid varieties; Standard English is expected in formal writing.",
      ],
      thinkDeeper:
        "Is it fair to call Singlish 'broken English'? Build an argument on both sides, using the ideas of rules, identity, audience and purpose, then decide which side you find more convincing.",
    },
  ],

  passages: [
    {
      id: "jabberwocky-stanza",
      title: "Jabberwocky (opening stanza)",
      source: "Lewis Carroll, Through the Looking-Glass (1871)",
      text: "’Twas brillig, and the slithy toves\nDid gyre and gimble in the wabe:\nAll mimsy were the borogoves,\nAnd the mome raths outgrabe.",
      note:
        "Almost every content word is invented, yet readers can tell which are nouns (toves, wabe, borogoves, raths), adjectives (slithy, mimsy, mome) and verbs (gyre, gimble, outgrabe) from position, determiners and endings. Proof that grammar carries meaning by itself.",
    },
    {
      id: "tale-of-two-cities-opening",
      title: "A Tale of Two Cities (opening sentence)",
      source: "Charles Dickens, A Tale of Two Cities (1859), Book 1 Chapter 1",
      text:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.",
      note:
        "One enormous sentence built from paired, opposite main clauses joined only by commas. In a school essay this would be a chain of comma splices; here it is a deliberate rhetorical choice that creates rhythm, balance and a sense of a world pulled between extremes. 'Epoch' = era; 'incredulity' = disbelief.",
    },
    {
      id: "power-cut-extract",
      title: "Power Cut",
      source: "Original prose extract written for this app",
      text:
        "The lights died at 9.14 p.m. For a moment, nobody in the flat moved. Somewhere below, a dog began to bark, and the lift, which had been humming all evening, groaned to a halt between floors. Darkness. Then a voice, thin and unmistakable, drifted up the stairwell. My brother grabbed my arm. Although I told him it was only Mrs Tan from the fourth floor, I did not believe it myself.",
      note: "A model of sentence variety: simple, compound, complex and minor sentences all working for suspense.",
    },
    {
      id: "proofreading-blog",
      title: "Trip to Pulau Ubin (proofreading practice)",
      source: "Original student-style blog post written for this app (contains deliberate errors)",
      text:
        "(1) Last Saturday, my class went on a trip to Pulau Ubin, its a small island off the north-east coast of Singapore. (2) We had to wake up at six o'clock, which was painful. (3) When we arrived at the jetty; our teacher, Ms Rahman, handed out bikes. (4) The bikes was old and rusty but they worked. (5) We cycled to Chek Jawa, where we seen crabs, mudskippers and a wild boar. (6) “Don't touch nothing,” Ms Rahman warned. (7) Me and Daniel nearly fell into the mangrove. (8) The boardwalk was long, we walked for nearly an hour. (9) By the time we got back, everyones legs were aching. (10) I would of stayed longer if I could.",
      note:
        "Nine of the ten sentences contain at least one error (sentence 2 is correct). Try to find and fix them all before checking MCQ Paper 4.",
    },
  ],

  quoteBank: [
    {
      quote: "It was a bright cold day in April, and the clocks were striking thirteen.",
      source: "George Orwell, Nineteen Eighty-Four (1949), opening sentence",
      analysis:
        "A compound sentence: the first main clause is reassuringly ordinary, then the coordinating conjunction 'and' carries us calmly into an impossible detail. Placing 'thirteen' at the very end (end focus) makes the wrongness land as a jolt and hooks the reader into a world that is subtly broken.",
      themes: ["compound sentence", "end focus", "openings"],
    },
    {
      quote: "It was the best of times, it was the worst of times",
      source: "Charles Dickens, A Tale of Two Cities (1859), opening",
      analysis:
        "Parallel main clauses joined only by commas build an incantation-like rhythm, and the antithesis (best/worst) sets up a novel about extremes. It shows that 'rules' such as avoiding comma splices can be broken deliberately by a skilled writer for effect.",
      themes: ["parallelism", "antithesis", "comma splice"],
    },
    {
      quote: "Fog everywhere.",
      source: "Charles Dickens, Bleak House (1853), Chapter 1",
      analysis:
        "A minor sentence with no main verb. Without a verb nothing moves or happens; the fog simply exists, everywhere and all at once. The stripped-down form mirrors the smothering, static atmosphere of London and its law courts.",
      themes: ["minor sentence", "atmosphere"],
    },
    {
      quote: "London. Michaelmas Term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November weather.",
      source: "Charles Dickens, Bleak House (1853), opening lines",
      analysis:
        "The novel opens with a run of minor sentences like camera shots or notes in a diary: place, time, people, weather. The missing main verbs create a frozen, stagnant scene, perfect for a story about a legal case that never moves forward.",
      themes: ["minor sentence", "openings", "setting"],
    },
    {
      quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      source: "Jane Austen, Pride and Prejudice (1813), Chapter 1",
      analysis:
        "A complex sentence whose grand, formal register ('universally acknowledged') is deliberately ironic: the 'truth' is really the gossip of families hunting for rich husbands. Its commas follow older conventions; a modern editor would remove both, which shows that punctuation norms change over time.",
      themes: ["register", "irony", "changing conventions"],
    },
    {
      quote: "Reader, I married him.",
      source: "Charlotte Brontë, Jane Eyre (1847), Chapter 38",
      analysis:
        "A comma of direct address ('Reader,') turns narration into a personal confession. The main clause that follows is short, simple and active: after hundreds of pages of struggle, the plainness of the sentence gives the moment quiet, decisive power.",
      themes: ["direct address", "simple sentence", "voice"],
    },
    {
      quote: "There was no possibility of taking a walk that day.",
      source: "Charlotte Brontë, Jane Eyre (1847), opening sentence",
      analysis:
        "A single simple sentence built around the abstract noun 'possibility' and a negative ('no'). Opening on a restriction immediately suggests confinement, the central situation of the young Jane's life.",
      themes: ["simple sentence", "abstract noun", "openings"],
    },
    {
      quote: "Jesus wept.",
      source: "The Bible, King James Version (1611), John 11:35",
      analysis:
        "The shortest verse in the King James Bible: subject + verb, the bare minimum for a simple sentence. Its brevity gives the grief enormous weight, a classic demonstration that a short sentence can carry more emotion than a long one.",
      themes: ["simple sentence", "emphasis"],
    },
    {
      quote: "Never use the passive where you can use the active.",
      source: "George Orwell, 'Politics and the English Language' (1946)",
      analysis:
        "An imperative (command) sentence giving one of Orwell's rules for clear writing. He argued that vague, passive language lets writers hide who is responsible. The rule is a useful default, but the passive still has genuine uses in science and when the doer is unknown.",
      themes: ["active and passive", "clarity"],
    },
    {
      quote: "“Let's eat, Grandma!” / “Let's eat Grandma!”",
      source: "Traditional classroom punctuation example",
      analysis:
        "The comma of direct address shows that Grandma is being spoken to. Remove it and 'Grandma' becomes the object of 'eat'. A single comma is the difference between dinner and disaster.",
      themes: ["commas", "meaning"],
    },
    {
      quote: "A woman, without her man, is nothing. / A woman: without her, man is nothing.",
      source: "Traditional punctuation puzzle",
      analysis:
        "Identical words, opposite meanings. In the first, the commas make 'without her man' removable parenthesis. In the second, the colon introduces an explanation and the comma moves 'man' into the subject of the second clause.",
      themes: ["commas", "colons", "meaning"],
    },
    {
      quote: "Although the rain had stopped, the streets still glittered like wet glass.",
      source: "Original model sentence written for this app",
      analysis:
        "A complex sentence opening with a subordinate clause, followed by a comma. The fronted clause sets up an expectation (the storm is over) which the main clause then complicates with a vivid simile, so the structure creates a small shift in mood.",
      themes: ["complex sentence", "fronted clause"],
    },
    {
      quote: "The plan was simple: wait until dark, slip past the guard, and run.",
      source: "Original model sentence written for this app",
      analysis:
        "A colon after a complete main clause delivers the 'simple plan' as a list of three imperative verb phrases. The rhythm speeds up towards the single-syllable 'run', mimicking the escape.",
      themes: ["colon", "list of three", "pace"],
    },
    {
      quote: "Mei had trained for months; she was not going to lose now.",
      source: "Original model sentence written for this app",
      analysis:
        "A semicolon joins two closely linked main clauses. It is stronger than a comma but softer than a full stop, so the second clause feels like the inevitable consequence of the first: training leads to determination.",
      themes: ["semicolon", "cause and effect"],
    },
  ],

  modelWriting: [
    {
      title: "Sentence variety for tension",
      task: "Write a paragraph in which a character waits to open their exam results. Use a deliberate range of sentence types for effect.",
      text:
        "The envelope lay on the kitchen table, exactly where Mum had left it before work, propped against the fruit bowl as if it were any ordinary letter. I circled it twice. Although I had told everyone I did not care about the results, my hands had been shaking since breakfast, and my tea had gone cold untouched. I picked it up. I put it down. Somewhere in the flat a clock ticked, louder than I had ever noticed, counting down to nothing. Then, before I could change my mind, I tore it open. Silence. Seven numbers stared up at me, and the first one was a nine.",
      annotations: [
        "Opens with a long, detailed simple sentence to slow the pace and fix the envelope in the reader's mind.",
        "Complex sentence ('Although I had told everyone...') reveals the gap between what the narrator says and feels.",
        "Paired short simple sentences ('I picked it up. I put it down.') mimic indecision through repetition and rhythm.",
        "The minor sentence 'Silence.' freezes time at the climax.",
        "The final compound sentence withholds the key detail until the last word ('nine'), using end focus to deliver the payoff.",
      ],
    },
    {
      title: "Analysing sentence structure (PEEL)",
      task: "How does Dickens use sentence structure in the opening of A Tale of Two Cities?",
      text:
        "Dickens uses a long sequence of parallel main clauses to present the era as one of violent contradiction. The novel opens: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness'. Each clause repeats the structure 'it was the...' and then pairs it with its opposite, so the antithesis is built into the grammar itself. Because the clauses are joined only by commas rather than full stops, the sentence refuses to pause; the contradictions pile up breathlessly, suggesting a society swinging wildly between extremes with no stable middle ground. The relentless rhythm also sounds almost like a chant or sermon, giving the narrator an authoritative, prophetic voice. This prepares the reader for a novel in which the same revolution brings both liberation and terror, and in which characters such as Sydney Carton embody both 'despair' and 'hope'.",
      annotations: [
        "Point: a clear opening claim about structure AND its purpose, not just 'Dickens uses repetition'.",
        "Evidence: a short, accurate, embedded quotation.",
        "Explain: names precise techniques (parallel main clauses, antithesis, comma-joined clauses) and explains their effect on rhythm and meaning.",
        "Develops a second, alternative effect (sermon-like authority), which is how top answers show depth.",
        "Link: connects the sentence structure to the novel's wider themes.",
      ],
    },
    {
      title: "Formal register: an email to the Head of Year",
      task: "Write a formal email to your Head of Year proposing a lunchtime reading club.",
      text:
        "Dear Mr Hughes,\n\nI am writing to propose a lunchtime reading club for Year 8 students, which I would be happy to help organise.\n\nMany students in my form have told me that they would like to read more widely but find it difficult to choose books or to make time for them. A weekly club would provide a quiet space, recommendations from older students and, most importantly, a chance to discuss what we have read. The library has already offered the use of its reading room on Thursdays.\n\nI would be grateful if we could meet briefly to discuss whether this might be possible. Thank you for considering my suggestion.\n\nYours sincerely,\n\nAisha Rahman\n8C",
      annotations: [
        "Formal greeting and sign-off: 'Dear Mr Hughes' pairs with 'Yours sincerely' because the recipient is named.",
        "No contractions ('I am writing', not 'I'm writing') and no slang.",
        "Clear purpose stated in the first sentence, then one paragraph per idea (TiPToP for non-fiction).",
        "Polite modal verbs and conditional phrasing ('I would be grateful if...') sound respectful without being weak.",
        "Precise vocabulary ('propose', 'recommendations', 'considering') rather than vague words like 'stuff' or 'things'.",
      ],
    },
    {
      title: "Proofread and corrected",
      task: "Correct this student paragraph: 'Its important to recycle, if we dont the planet will suffer. Me and my friends has started a campaign at school, we want to effect how people think. Their are bins in every classroom now but people still put there rubbish in the wrong one. We could of done more posters.'",
      text:
        "It's important to recycle; if we don't, the planet will suffer. My friends and I have started a campaign at school because we want to affect how people think. There are bins in every classroom now, but people still put their rubbish in the wrong one. We could have made more posters.",
      annotations: [
        "Its → It's (it is) and dont → don't: apostrophes of omission.",
        "Comma splice after 'recycle' fixed with a semicolon; a comma added after the subordinate clause 'if we don't'.",
        "'Me and my friends has' → 'My friends and I have': subject pronoun and plural verb agreement.",
        "Second comma splice fixed with the subordinating conjunction 'because'; 'effect' (noun) → 'affect' (verb).",
        "Their → There (place/existence) and there → their (belonging); a comma added before 'but' joining two main clauses.",
        "'could of' → 'could have'; 'done' → 'made' for a more precise verb.",
      ],
    },
  ],

  mnemonics: [
    {
      topic: "The coordinating conjunctions",
      device: "FANBOYS",
      explanation:
        "For, And, Nor, But, Or, Yet, So. These seven join two main clauses of equal weight to make a compound sentence. 'However' and 'therefore' are NOT on the list, so they cannot join clauses with just a comma.",
    },
    {
      topic: "When to start a new paragraph",
      device: "TiPToP",
      explanation:
        "Time, Place, Topic, Person. Change any one of them (including a new speaker in dialogue) and you need a new paragraph.",
    },
    {
      topic: "Common subordinating conjunctions",
      device: "AAAWWUBBIS",
      explanation:
        "After, Although, As, When, While, Until, Before, Because, If, Since. A clause starting with one of these is subordinate, so it needs a main clause, and if it opens the sentence it is followed by a comma.",
    },
    {
      topic: "Affect or effect?",
      device: "RAVEN: Remember, Affect = Verb, Effect = Noun",
      explanation:
        "'The weather affected (verb) my mood; it had a gloomy effect (noun).' A quick test: if you can put 'the' or 'an' in front, you need 'effect'. (Practice/practise works the same way in British English: c = noun, s = verb, just like advice/advise.)",
    },
  ],

  examMistakes: [
    "Comma splicing: joining two complete sentences with a comma ('It was late, we went home'). Examiners treat this as a serious control error; use a full stop, a semicolon or a conjunction.",
    "Writing 'however' between two clauses with only commas ('I was tired, however I kept going'). It needs a semicolon or full stop before it.",
    "Confusing its/it's, their/there/they're and your/you're. Test it: if you cannot expand it to 'it is', 'they are' or 'you are', drop the apostrophe.",
    "Using apostrophes for plurals ('the 1990's', 'two cat's') or leaving them out of possession ('the girls bags').",
    "Writing 'could of', 'should of' or 'would of' instead of 'could have', 'should have', 'would have'.",
    "Drifting between past and present tense in a narrative, especially at exciting moments.",
    "Forgetting to start a new line for each new speaker, or placing the comma or question mark outside the closing speech mark.",
    "Slipping into informal register, slang or Singlish particles in a formal or discursive task ('loads of', 'kinda', 'very shiok lah').",
  ],

  misconceptions: [
    {
      wrong: "You put a comma wherever you would pause for breath.",
      right: "Commas follow grammatical rules (lists, fronted clauses, parenthesis, direct address). A breath-pause comma between two main clauses creates a comma splice.",
    },
    {
      wrong: "A simple sentence is a short sentence, and a complex sentence is a long one.",
      right: "Sentence types are defined by clauses, not length. 'The exhausted hikers on the windswept ridge finally reached the hut' is simple (one main clause); 'If it rains, we stay' is complex.",
    },
    {
      wrong: "You must never start a sentence with 'And' or 'But'.",
      right: "Starting with a coordinating conjunction is grammatical and has been used by great writers for centuries (the King James Bible's 'And God said, Let there be light'). Use it occasionally and deliberately for emphasis.",
    },
    {
      wrong: "The passive voice is always wrong, or it is just the past tense.",
      right: "The passive (form of 'be' + past participle) can be any tense ('is being built', 'will be built'). It is a legitimate choice when the doer is unknown or unimportant, or to shift focus, but overusing it makes writing vague.",
    },
    {
      wrong: "Singlish or regional dialect is just bad English full of mistakes.",
      right: "Dialects are rule-governed varieties with their own grammar and vocabulary. The issue is context: Standard English is expected in formal writing and exams, while dialect suits informal talk or a character's voice in fiction.",
    },
    {
      wrong: "An apostrophe before an s means there is more than one of something.",
      right: "Plurals never need an apostrophe (apples, CDs, 1990s). Apostrophes show only possession or missing letters.",
    },
  ],

  expertDebates: [
    {
      question: "Is the Oxford comma necessary?",
      detail:
        "The Oxford (serial) comma is the optional comma before 'and' in a list: 'red, white, and blue'. Oxford University Press uses it as house style; many British newspapers leave it out unless it is needed to avoid confusion. Supporters point to ambiguities like 'I dedicate this book to my parents, Mrs Lim and Mr Tan', which could mean that Mrs Lim and Mr Tan ARE the parents. Opponents argue it is clutter that is rarely needed. Most teachers accept either, as long as you are consistent and clear.",
    },
    {
      question: "Should grammar be about rules or about how people actually speak?",
      detail:
        "Prescriptivists say there are correct forms we should all follow; descriptivists say linguists should describe how language is really used. The old 'rule' against split infinitives ('to boldly go') was promoted by grammarians copying Latin, where infinitives cannot be split, and most modern grammarians reject it. Yet shared standards help communication across countries. The same debate surrounds Singlish: Singapore's Speak Good English Movement, launched in 2000, promotes Standard English, while many writers and linguists celebrate Singlish as a marker of identity.",
    },
    {
      question: "Are comma splices in great literature mistakes or masterstrokes?",
      detail:
        "Dickens's 'It was the best of times, it was the worst of times...' strings main clauses together with commas, and many novelists use the device for breathless rhythm. Some argue that once you understand a rule you can break it for effect; others warn that examiners cannot tell a deliberate splice from a careless one in a student essay. A useful compromise: break rules only in creative writing, only once, and only when the effect is obvious.",
    },
  ],

  realWorld: [
    { title: "The million-dollar comma", detail: "In 2017 a US appeals court case about overtime pay for dairy delivery drivers in Maine turned on a missing Oxford comma in state law; the company later settled for $5 million.", emoji: "⚖️" },
    { title: "Job and university applications", detail: "Recruiters and admissions tutors often reject applications with careless errors such as 'your/you're' or comma splices, because accuracy signals care.", emoji: "💼" },
    { title: "Code-switching in Singapore", detail: "Many Singaporeans move smoothly between Singlish with friends and Standard English at school or work, choosing register to suit the situation.", emoji: "🇸🇬" },
    { title: "News headlines", detail: "Headlines drop words to save space, which can create accidental ambiguity; journalists rely on precise grammar to avoid being misread.", emoji: "📰" },
    { title: "Science vocabulary", detail: "Greek and Latin roots unlock scientific terms: photosynthesis (photo = light, synthesis = putting together), biology, microscope, thermometer.", emoji: "🔬" },
    { title: "Texting versus emailing a teacher", detail: "A message to friends and an email to a teacher need completely different registers; getting it wrong can come across as rude.", emoji: "📱" },
  ],

  flashcards: [
    { front: "What is a main clause?", back: "A group of words with a subject and a verb that makes complete sense on its own: 'The river froze.'" },
    { front: "What is a subordinate clause?", back: "A clause with a subject and a verb that cannot stand alone; it usually starts with a subordinating conjunction such as because, although, when or if." },
    { front: "What is a relative clause?", back: "A subordinate clause that describes a noun, starting with who, which, that or whose: 'the girl who won'." },
    { front: "Simple, compound, complex, minor?", back: "Simple = one main clause. Compound = two main clauses (FANBOYS or ;). Complex = main + subordinate clause. Minor = no main verb ('Silence.')." },
    { front: "FANBOYS", back: "For, And, Nor, But, Or, Yet, So: the coordinating conjunctions." },
    { front: "What is a comma splice?", back: "Two main clauses joined only by a comma: 'I was tired, I went to bed.' Fix with . ; or a conjunction." },
    { front: "Semicolon: two uses", back: "1) Join two closely related main clauses. 2) Separate list items that already contain commas." },
    { front: "Colon: the rule", back: "It must follow a complete main clause, and introduces a list, explanation, example or reveal." },
    { front: "its or it's?", back: "it's = it is / it has. its = belonging to it (no apostrophe, like his and hers)." },
    { front: "the girls' coats vs the children's coats", back: "Plural ending in s: apostrophe after the s (girls'). Plural not ending in s: add 's (children's)." },
    { front: "Speech punctuation with a reporting clause", back: "“I'm cold,” she said. The comma goes inside the speech marks; the reporting clause starts with a lower-case letter." },
    { front: "TiPToP", back: "New paragraph for a change of Time, Place, Topic or Person (including a new speaker)." },
    { front: "Active vs passive", back: "Active: 'The dog bit the postman.' Passive: 'The postman was bitten (by the dog).' Passive = form of 'be' + past participle." },
    { front: "affect vs effect", back: "Affect is usually a verb (to influence); effect is usually a noun (a result). RAVEN." },
    { front: "bene / mal / chron / spect", back: "good / bad / time / look (benefit, malicious, chronological, spectator)." },
    { front: "What is register?", back: "The level of formality of language, chosen to suit audience and purpose (formal vs informal)." },
  ],

  mustKnow: [
    "Can you identify nouns, verbs, adjectives, adverbs, pronouns, prepositions, conjunctions and determiners in any sentence?",
    "Can you tell a phrase from a clause, and a main clause from a subordinate or relative clause?",
    "Can you write simple, compound, complex and minor sentences on purpose and explain the effect of each?",
    "Can you spot and fix a comma splice in three different ways?",
    "Can you use commas for lists, fronted adverbials, parenthesis and non-defining relative clauses?",
    "Can you use semicolons, colons, dashes and brackets accurately and for effect?",
    "Can you place apostrophes correctly for omission and singular and plural possession, including its/it's?",
    "Can you punctuate dialogue perfectly, including interrupted speech and new speakers on new lines?",
    "Can you keep tense and subject–verb agreement consistent, and switch between active and passive voice?",
    "Can you use roots, prefixes and suffixes to work out unfamiliar words, and choose the right register for any task?",
  ],

  videos: [
    { title: "Semicolons and colons explained", channel: "Mr Bruff", url: "https://www.youtube.com/results?search_query=mr+bruff+semicolons+colons" },
    { title: "Sentence types: simple, compound and complex", channel: "BBC Bitesize", url: "https://www.youtube.com/results?search_query=bbc+bitesize+ks3+simple+compound+complex+sentences" },
    { title: "Using sentence structure for effect", channel: "Mr Salles Teaches English", url: "https://www.youtube.com/results?search_query=mr+salles+sentence+structure+for+effect" },
    { title: "Apostrophes and comma splices", channel: "Stacey Reay", url: "https://www.youtube.com/results?search_query=stacey+reay+comma+splice+apostrophes" },
  ],

  quiz: {
    mcq: [
      {
        id: "spg-quiz-mcq-1",
        question: "Which sentence contains a comma splice?",
        options: [
          "When the bell rang, everyone rushed out.",
          "The bell rang, everyone rushed out.",
          "The bell rang, and everyone rushed out.",
          "The bell rang; everyone rushed out.",
        ],
        answerIndex: 1,
        hint: "Look for two complete sentences held together by nothing stronger than a comma.",
        explanation:
          "'The bell rang' and 'everyone rushed out' are both main clauses, so a comma alone cannot join them. The tempting first option is fine: 'When the bell rang' is a subordinate clause, so the comma after it is correct.",
        guideRef: "commas",
      },
      {
        id: "spg-quiz-mcq-2",
        question: "Which sentence uses the apostrophe correctly?",
        options: [
          "The childrens' coats were soaked.",
          "The childrens coats were soaked.",
          "The children's' coats were soaked.",
          "The children's coats were soaked.",
        ],
        answerIndex: 3,
        hint: "Is 'children' already plural? Does it end in s?",
        explanation:
          "'Children' is a plural that does not end in s, so you add 's: children's. 'Childrens'' is the tempting error: it treats 'childrens' as if it were a word, but there is no such plural.",
        guideRef: "apostrophes-speech",
      },
      {
        id: "spg-quiz-mcq-3",
        question: "What type of sentence is this? 'Although she was exhausted, Priya kept running.'",
        options: ["Simple", "Compound", "Complex", "Minor"],
        answerIndex: 2,
        hint: "Could 'Although she was exhausted' stand on its own?",
        explanation:
          "It has a subordinate clause ('Although she was exhausted') plus a main clause ('Priya kept running'), so it is complex. It is not compound, because a compound sentence joins two main clauses with a coordinating conjunction such as 'but'.",
        guideRef: "sentence-types",
      },
      {
        id: "spg-quiz-mcq-4",
        question: "In 'She ran quickly to the gate', what word class is 'quickly'?",
        options: ["An adverb", "An adjective", "A preposition", "A pronoun"],
        answerIndex: 0,
        hint: "Which word does it tell you more about: a noun or the verb 'ran'?",
        explanation:
          "'Quickly' tells us how she ran, so it modifies a verb: it is an adverb. It is not an adjective, because adjectives describe nouns (a quick runner).",
        guideRef: "word-classes",
      },
    ],
    qa: [
      {
        id: "spg-quiz-qa-1",
        question:
          "Rewrite this sentence in Standard English and explain each change you make: 'me and my sister was late cause the bus never come'",
        marks: 4,
        hint: "Check the subject pronoun, the verb agreement, the informal word and the tense of 'come'.",
        modelAnswer:
          "My sister and I were late because the bus did not come (or: because the bus never came). 'Me and my sister' becomes 'My sister and I' because the subject of a sentence needs the subject pronoun 'I', and it is polite to put the other person first. 'Was' becomes 'were' because the subject is plural. 'Cause' is informal, so it becomes the full conjunction 'because'. 'Never come' is a non-standard past tense, so it becomes 'did not come' or 'never came'.",
        markScheme: [
          { point: "Changes 'me and my sister' to 'my sister and I' (subject pronoun)", keywords: ["my sister and i", "sister and i", "subject pronoun", "i instead of me", "not me"] },
          { point: "Changes 'was' to 'were' (plural agreement)", keywords: ["were", "plural", "agreement", "agree"] },
          { point: "Replaces informal 'cause' with 'because'", keywords: ["because", "informal", "slang", "full word"] },
          { point: "Corrects the verb to past tense 'came' / 'did not come'", keywords: ["came", "did not come", "didn't come", "didn’t come", "past tense"] },
        ],
        commonError: "Fixing the obvious capital letter but leaving 'was' unchanged, forgetting that 'my sister and I' is plural.",
        guideRef: "tense-agreement-voice",
      },
      {
        id: "spg-quiz-qa-2",
        question:
          "Explain the difference in meaning between: (A) 'Students who finish early may leave.' and (B) 'Students, who finish early, may leave.'",
        marks: 3,
        hint: "Which version is about only SOME students? Which says something about ALL of them?",
        modelAnswer:
          "Sentence A uses a defining relative clause with no commas, so it identifies which students may leave: only the ones who finish early. Sentence B uses a non-defining relative clause inside commas, which is extra information that could be removed; it suggests that all the students finish early and all may leave. So the commas change the meaning from 'some students' to 'every student'.",
        markScheme: [
          { point: "A (no commas) is defining: only the students who finish early may leave", keywords: ["only", "defining", "those who", "some students", "identifies"] },
          { point: "B (commas) is non-defining / extra removable information", keywords: ["non-defining", "extra information", "removable", "parenthesis", "could be removed"] },
          { point: "B implies all students finish early and may leave", keywords: ["all students", "all of them", "every student", "everyone", "all the students"] },
        ],
        commonError: "Saying the commas just add a pause, without explaining the change in meaning.",
        guideRef: "commas",
      },
      {
        id: "spg-quiz-qa-3",
        question:
          "Punctuate this dialogue correctly and explain the rules you used: where are you going asked mum im going to the library replied tom",
        marks: 4,
        hint: "Two speakers, one question, one statement, one contraction.",
        modelAnswer:
          "“Where are you going?” asked Mum.\n“I'm going to the library,” replied Tom.\n\nThe question mark goes inside the closing speech marks, and the reporting clause 'asked Mum' continues the same sentence so 'asked' stays lower case. Tom's speech ends with a comma inside the speech marks because a reporting clause follows. Tom is a new speaker, so he starts on a new line. 'I'm' needs an apostrophe for the missing letter, and Mum and Tom need capital letters because they are used as names.",
        markScheme: [
          { point: "Question mark placed inside the closing speech marks", keywords: ["question mark", "question mark inside", "within the speech marks", "inside the speech marks"] },
          { point: "Comma (not full stop) inside speech marks before a reporting clause", keywords: ["comma", "reporting clause", "before replied", "instead of a full stop"] },
          { point: "New line for a new speaker", keywords: ["new line", "new speaker", "new paragraph", "separate line"] },
          { point: "Apostrophe in I'm and capitals for names", keywords: ["i'm", "i’m", "apostrophe", "capital", "capital letter"] },
        ],
        commonError: "Writing a capital letter for the reporting verb ('Asked Mum') or putting the question mark after the closing speech mark.",
        guideRef: "apostrophes-speech",
      },
      {
        id: "spg-quiz-qa-4",
        extract:
          "We searched the whole house for an hour, opening every cupboard, checking under every bed and calling her name until our voices cracked. Nothing.",
        question: "Explain the effect of the final sentence 'Nothing.' in this extract.",
        marks: 3,
        hint: "What type of sentence is it, and how does it contrast with the one before?",
        modelAnswer:
          "'Nothing.' is a one-word minor sentence with no verb. It contrasts sharply with the long, list-like sentence before it, which builds up all the frantic searching through a series of -ing phrases. The sudden stop mirrors the characters' hopes collapsing: after all that effort there is only emptiness. Its isolation emphasises the despair and creates a heavy pause for the reader.",
        markScheme: [
          { point: "Identifies it as a minor / one-word / very short sentence", keywords: ["minor sentence", "one word", "one-word", "short sentence", "no verb"] },
          { point: "Contrast with the long previous sentence / change of pace", keywords: ["contrast", "long sentence", "pace", "sudden", "abrupt", "stops"] },
          { point: "Effect: emphasises failure, despair or emptiness", keywords: ["despair", "hopeless", "emptiness", "failure", "emphasis", "emphasises", "disappointment"] },
        ],
        commonError: "Just saying 'it is short to create tension' without explaining why the contrast matters here.",
        guideRef: "sentence-types",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "spg-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          { id: "spg-mcq-p1-q01", question: "Which word is a noun in the sentence 'Her courage astonished everyone'?", options: ["Her", "astonished", "courage", "everyone"], answerIndex: 2, hint: "Look for the word that names an idea or feeling.", explanation: "'Courage' is an abstract noun: it names a quality you cannot touch. 'Everyone' is tempting because it refers to people, but it is a pronoun, and 'Her' is a determiner here because it comes before the noun.", guideRef: "word-classes" },
          { id: "spg-mcq-p1-q02", question: "In 'The team sprinted onto the pitch', what word class is 'onto'?", options: ["Preposition", "Conjunction", "Adverb", "Determiner"], answerIndex: 0, hint: "It shows where the team went in relation to the pitch.", explanation: "'Onto' links the noun phrase 'the pitch' to the rest of the sentence and shows position or direction, so it is a preposition. It is not a conjunction because it does not join two clauses.", guideRef: "word-classes" },
          { id: "spg-mcq-p1-q03", question: "In 'This umbrella is mine', what word class is 'mine'?", options: ["Determiner", "Possessive pronoun", "Adjective", "Noun"], answerIndex: 1, hint: "Does it come before a noun, or stand on its own?", explanation: "'Mine' stands on its own in place of 'my umbrella', so it is a possessive pronoun. The tempting answer is 'determiner', but that would be 'my', which must come before a noun ('my umbrella').", guideRef: "word-classes" },
          { id: "spg-mcq-p1-q04", question: "In which sentence is 'book' a verb?", options: ["That book is overdue.", "She left her book on the bus.", "We need to book the tickets tonight.", "The book club meets on Friday."], answerIndex: 2, hint: "Which sentence uses 'book' as an action?", explanation: "In 'We need to book the tickets', 'book' is an action (to reserve), so it is a verb. In 'The book club', 'book' still names a thing; it is a noun describing which club.", guideRef: "word-classes" },
          { id: "spg-mcq-p1-q05", question: "Which of these is a simple sentence?", options: ["The ancient, moss-covered statue in the middle of the overgrown garden stared blindly at the sky.", "I knocked, but nobody answered.", "When it rained, we went inside.", "What a mess!"], answerIndex: 0, hint: "Count the main clauses, not the words.", explanation: "Despite its length, the first sentence has only one subject ('statue') and one verb ('stared'): one main clause, so it is simple. 'What a mess!' is tempting because it is short, but it has no verb, so it is a minor sentence.", guideRef: "sentence-types" },
          { id: "spg-mcq-p1-q06", question: "Which list gives all seven coordinating conjunctions (FANBOYS)?", options: ["for, also, now, because, or, yet, so", "furthermore, and, nevertheless, but, or, yet, since", "for, and, not, but, or, yet, since", "for, and, nor, but, or, yet, so"], answerIndex: 3, hint: "N is 'nor' and S is 'so'.", explanation: "FANBOYS = for, and, nor, but, or, yet, so. The third option is tempting but 'not' is an adverb and 'since' is a subordinating conjunction.", guideRef: "sentence-types" },
          { id: "spg-mcq-p1-q07", question: "Which sentence uses commas correctly in a list?", options: ["I packed, a torch, a map, some snacks and a whistle.", "I packed a torch, a map, some snacks and a whistle.", "I packed a torch a map, some snacks, and, a whistle.", "I packed a torch, a map, some snacks, and a whistle,"], answerIndex: 1, hint: "Commas go between the items, not before the list or after the last item.", explanation: "Commas separate the items, and none is needed before the first item. The last option uses an acceptable Oxford comma, but it then ends with a comma instead of a full stop, which is wrong.", guideRef: "commas" },
          { id: "spg-mcq-p1-q08", question: "Which sentence needs the word 'their' in the gap?", options: ["___ going to be late.", "Put the boxes over ___.", "The twins forgot ___ passports.", "___ is a problem with the printer."], answerIndex: 2, hint: "'Their' shows that something belongs to them.", explanation: "The passports belong to the twins, so 'their' (possessive) is needed. The first gap needs 'They're' (they are); the second and fourth need 'there'.", guideRef: "apostrophes-speech" },
          { id: "spg-mcq-p1-q09", question: "Choose the correct word: 'The dog chased ___ tail.'", options: ["it's", "its", "its'", "it is"], answerIndex: 1, hint: "Try expanding it to 'it is'. Does that make sense?", explanation: "The tail belongs to the dog, so we need the possessive 'its', which, like his and hers, has no apostrophe. 'It's' means 'it is' or 'it has', and 'The dog chased it is tail' makes no sense. 'Its'' does not exist.", guideRef: "apostrophes-speech" },
          { id: "spg-mcq-p1-q10", question: "Which sentence is written in Standard English?", options: ["I should of revised.", "I should've of revised.", "I should of had revised.", "I should have revised."], answerIndex: 3, hint: "What does the contraction 'should've' stand for?", explanation: "The correct form is 'should have'. People write 'should of' because the contraction 'should've' sounds like it, but 'of' is a preposition and cannot follow a modal verb.", guideRef: "tense-agreement-voice" },
          { id: "spg-mcq-p1-q11", question: "What type of sentence is 'Silence.'?", options: ["Minor", "Simple", "Compound", "Complex"], answerIndex: 0, hint: "Is there a verb?", explanation: "'Silence.' has no main verb, so it is a minor sentence. It is not simple, because a simple sentence must contain one main clause with a subject and a verb.", guideRef: "sentence-types" },
          { id: "spg-mcq-p1-q12", question: "After several long sentences describing a search, a writer adds: 'She was gone.' What is the most likely effect?", options: ["It slows the pace to add more description.", "It creates a sudden, shocking stop that emphasises the loss.", "It shows the writer has run out of ideas.", "It adds extra detail about where she went."], answerIndex: 1, hint: "Think about the contrast in length.", explanation: "A short simple sentence after long ones creates an abrupt halt, so the loss hits the reader hard. It does not slow the pace with description; it does the opposite.", guideRef: "sentence-types" },
          { id: "spg-mcq-p1-q13", question: "Which shows the bags belonging to three boys?", options: ["the boy's bags", "the boys bags", "the boys' bags", "the boys's bags"], answerIndex: 2, hint: "The owners are plural and already end in s.", explanation: "'Boys' is a plural ending in s, so the apostrophe goes after the s: the boys' bags. 'The boy's bags' would mean the bags of one boy.", guideRef: "apostrophes-speech" },
          { id: "spg-mcq-p1-q14", question: "Which is a compound sentence?", options: ["Because I was hungry, I made toast.", "I was hungry, so I made toast.", "Hungry and tired, I made toast.", "The toast that I made was burnt."], answerIndex: 1, hint: "Look for two main clauses joined by a FANBOYS word.", explanation: "'I was hungry' and 'I made toast' are both main clauses joined by 'so', a coordinating conjunction, so the sentence is compound. The first option is tempting, but 'Because I was hungry' is a subordinate clause, which makes it complex.", guideRef: "sentence-types" },
          { id: "spg-mcq-p1-q15", question: "Which word is a subordinating conjunction?", options: ["although", "and", "but", "however"], answerIndex: 0, hint: "Which word makes a clause depend on another clause?", explanation: "'Although' begins a subordinate clause ('although it rained'). 'And' and 'but' are coordinating conjunctions, and 'however' is an adverb, which is why it cannot join two clauses with only a comma.", guideRef: "phrases-clauses" },
          { id: "spg-mcq-p1-q16", question: "Fill the gaps: '___ going to love ___ new room.'", options: ["Your / you're", "You're / your", "Your / your", "You're / you're"], answerIndex: 1, hint: "Which gap means 'you are'?", explanation: "The first gap means 'you are' (You're going to love), and the second shows belonging (your new room). Swapping them is the classic error.", guideRef: "apostrophes-speech" },
          { id: "spg-mcq-p1-q17", question: "Which sentence contains an adverb?", options: ["The tired dog slept.", "The dog in the basket slept.", "The dog's basket was tiny.", "The dog slept soundly."], answerIndex: 3, hint: "Find the word that tells you how the action happened.", explanation: "'Soundly' tells us how the dog slept, so it is an adverb modifying the verb. 'Tired' and 'tiny' are adjectives describing nouns, and 'in the basket' is a prepositional phrase.", guideRef: "word-classes" },
          { id: "spg-mcq-p1-q18", question: "Which is a correct way to fix the comma splice 'It was late, we went home.'?", options: ["It was late, so we went home.", "It was late, however we went home.", "It was late we went home.", "It was, late we went home."], answerIndex: 0, hint: "Which option adds a proper joining word?", explanation: "Adding the coordinating conjunction 'so' properly joins the two main clauses. 'However' cannot join clauses with a comma (and makes no logical sense here), and removing the comma creates a fused sentence.", guideRef: "commas" },
          { id: "spg-mcq-p1-q19", question: "Which sentence uses capital letters correctly?", options: ["On monday we visited the national museum of singapore.", "On Monday we visited the national Museum of singapore.", "on Monday We visited the National Museum Of Singapore.", "On Monday we visited the National Museum of Singapore."], answerIndex: 3, hint: "Days and the main words of names are proper nouns.", explanation: "Days of the week and the main words of a named place are proper nouns and need capitals, but small linking words such as 'of' do not. The third option over-capitalises 'We' and 'Of' and misses the first word.", guideRef: "word-classes" },
          { id: "spg-mcq-p1-q20", question: "Which word is NOT the same word class as the other three?", options: ["quickly", "silently", "friendly", "eagerly"], answerIndex: 2, hint: "Try putting each word in front of a noun: 'a ___ dog'.", explanation: "'Friendly' is an adjective ('a friendly dog'), even though it ends in -ly. The other three are adverbs that describe how something is done. Endings are a clue, not a rule.", guideRef: "word-classes" },
        ],
      },
      {
        id: "spg-mcq-p2",
        title: "MCQ Paper 2",
        questions: [
          { id: "spg-mcq-p2-q01", question: "Which of these is a main clause?", options: ["because the lights went out", "under the flickering lamp", "the lights went out", "when the lights went out"], answerIndex: 2, hint: "Which one could stand alone as a sentence?", explanation: "'The lights went out' has a subject and a verb and makes sense alone. 'Because...' and 'when...' also have subjects and verbs, but the subordinating conjunctions make them dependent; 'under the flickering lamp' is a phrase with no verb.", guideRef: "phrases-clauses" },
          { id: "spg-mcq-p2-q02", question: "In 'The boy who sits next to me plays the cello', which part is the relative clause?", options: ["The boy", "who sits next to me", "plays the cello", "next to me"], answerIndex: 1, hint: "Relative clauses start with who, which, that or whose.", explanation: "'Who sits next to me' begins with the relative pronoun 'who' and tells us which boy. 'Next to me' is only a prepositional phrase inside that clause.", guideRef: "phrases-clauses" },
          { id: "spg-mcq-p2-q03", question: "Which sentence correctly punctuates a NON-defining relative clause?", options: ["My grandmother who lives in Ipoh makes the best curry puffs.", "My grandmother, who lives in Ipoh makes the best curry puffs.", "My grandmother who lives in Ipoh, makes the best curry puffs.", "My grandmother, who lives in Ipoh, makes the best curry puffs."], answerIndex: 3, hint: "Extra, removable information needs a comma at BOTH ends.", explanation: "A non-defining clause is extra information, so it needs a pair of commas around it. The second option is tempting but it opens the parenthesis and never closes it.", guideRef: "commas" },
          { id: "spg-mcq-p2-q04", question: "'Students who arrive late will miss the trip.' What does the lack of commas tell us?", options: ["All students will miss the trip.", "Only the students who arrive late will miss the trip.", "All the students are always late.", "Nothing: the commas are optional here."], answerIndex: 1, hint: "Is the clause identifying which students?", explanation: "Without commas, 'who arrive late' is a defining clause: it picks out which students miss the trip. With commas it would mean all students arrive late, so the commas are not optional.", guideRef: "commas" },
          { id: "spg-mcq-p2-q05", question: "Which sentence uses a semicolon correctly?", options: ["I love swimming; especially in the sea.", "We bought; apples, pears and plums.", "Although it was cold; we swam.", "The sun had set; the bats came out."], answerIndex: 3, hint: "Both sides of a semicolon should be able to stand alone as sentences.", explanation: "'The sun had set' and 'the bats came out' are both main clauses, closely linked, so a semicolon works. In the first option 'especially in the sea' is only a phrase, so a comma is needed instead.", guideRef: "semicolons-colons-dashes" },
          { id: "spg-mcq-p2-q06", question: "Which sentence uses a colon correctly?", options: ["She had one fear: spiders.", "Because the bus was late: we ran.", "The match was: cancelled because of rain.", "I like apples: and I like pears."], answerIndex: 0, hint: "What comes before a colon must be a complete main clause, and what follows should deliver on it.", explanation: "'She had one fear' is a complete clause, and 'spiders' delivers the fear it promised. In the second option, the words before the colon form a subordinate clause, which cannot come before a colon.", guideRef: "semicolons-colons-dashes" },
          { id: "spg-mcq-p2-q07", question: "What is the job of the dashes in 'My cousin — a famously terrible cook — offered to make dinner'?", options: ["They introduce a list.", "They mark parenthesis: extra information that could be removed.", "They join two main clauses.", "They show speech."], answerIndex: 1, hint: "Read the sentence without the part between the dashes.", explanation: "Remove 'a famously terrible cook' and the sentence still works, so the dashes fence off parenthesis. They are not joining two main clauses, because 'a famously terrible cook' has no verb.", guideRef: "semicolons-colons-dashes" },
          { id: "spg-mcq-p2-q08", question: "Which sentence uses brackets correctly to add extra information?", options: ["The Merlion is a (half-fish, half-lion) statue symbol (of Singapore).", "(The) Merlion is a symbol of Singapore.", "The Merlion (a half-fish, half-lion statue) is a symbol of Singapore.", "The Merlion is a symbol (of) Singapore."], answerIndex: 2, hint: "Brackets should hold a complete, removable aside.", explanation: "The bracketed phrase is a self-contained aside, and the sentence reads perfectly without it. The other options bracket random fragments, which confuses the reader rather than adding information.", guideRef: "semicolons-colons-dashes" },
          { id: "spg-mcq-p2-q09", question: "Which piece of dialogue is punctuated correctly?", options: ["“Hurry up,” said Dad, “we'll miss the ferry.”", "“Hurry up” said Dad. “We'll miss the ferry.”", "“Hurry up,” said Dad. “We'll miss the ferry.”", "“Hurry up,” Said Dad, “We'll miss the ferry.”"], answerIndex: 2, hint: "'Hurry up' and 'We'll miss the ferry' are two separate sentences.", explanation: "Because Dad speaks two complete sentences, a full stop follows the reporting clause and the second sentence starts with a capital. The first option is tempting, but its comma after 'said Dad' creates a comma splice between two sentences of speech.", guideRef: "apostrophes-speech" },
          { id: "spg-mcq-p2-q10", question: "Which is correctly punctuated?", options: ["“Are you ready?” she asked.", "“Are you ready?” She asked.", "“Are you ready”? she asked.", "“Are you ready,” she asked?"], answerIndex: 0, hint: "Where does the question mark go, and does the reporting clause start a new sentence?", explanation: "The question mark goes inside the closing speech marks, and 'she asked' continues the same sentence, so it is lower case. The second option wrongly capitalises 'She'.", guideRef: "apostrophes-speech" },
          { id: "spg-mcq-p2-q11", question: "When writing dialogue, you must start a new line when...", options: ["a character asks a question.", "the speech is longer than one sentence.", "a different person starts speaking.", "the reporting verb changes."], answerIndex: 2, hint: "Think TiPToP: the final P.", explanation: "Every new speaker gets a new line, so the reader always knows who is talking. One speaker can say several sentences in the same paragraph.", guideRef: "paragraphing-tiptop" },
          { id: "spg-mcq-p2-q12", question: "Which sentence is correctly punctuated?", options: ["Without a word the stranger, left.", "Without a word, the stranger left.", "Without, a word the stranger left.", "Without a word the, stranger left."], answerIndex: 1, hint: "Where does the fronted adverbial end?", explanation: "'Without a word' is a fronted adverbial, so the comma goes straight after it, before the main clause. The other commas split phrases in the middle.", guideRef: "commas" },
          { id: "spg-mcq-p2-q13", question: "Which sentence contains a subordinate clause?", options: ["The cat, sleek and black, slipped through the gate.", "The cat and the dog slept.", "Running late again!", "If you finish early, read your book."], answerIndex: 3, hint: "Look for a subordinating conjunction.", explanation: "'If you finish early' has a subject and verb but depends on the main clause, so it is subordinate. In the first option 'sleek and black' is an adjective phrase in parenthesis, not a clause, because it has no verb.", guideRef: "phrases-clauses" },
          { id: "spg-mcq-p2-q14", question: "How many main clauses are in 'I wanted to go, but it was raining, so I stayed home'?", options: ["One", "Two", "Three", "Four"], answerIndex: 2, hint: "Find each subject + verb that could stand alone.", explanation: "'I wanted to go', 'it was raining' and 'I stayed home' are all main clauses, joined by 'but' and 'so'. 'To go' is not a separate clause in its own right here.", guideRef: "phrases-clauses" },
          { id: "spg-mcq-p2-q15", question: "Which is the correct way to join 'I was exhausted' and 'I kept going' using 'however'?", options: ["I was exhausted, however, I kept going.", "I was exhausted; however, I kept going.", "I was exhausted however I kept going.", "I was exhausted, however I kept going."], answerIndex: 1, hint: "'However' is not a conjunction.", explanation: "Because 'however' cannot join clauses, you need a semicolon (or full stop) before it and a comma after it. The first option looks tidy but it is still a comma splice.", guideRef: "commas" },
          { id: "spg-mcq-p2-q16", question: "Which sentence uses a dash for a dramatic final reveal?", options: ["I opened — the box and found nothing.", "I — opened the box and found nothing.", "I opened the box and — found nothing —.", "I opened the box and found — nothing."], answerIndex: 3, hint: "A single dash can create a pause just before the punchline.", explanation: "The dash makes the reader pause before the anticlimax 'nothing', giving it weight. The other options put dashes where they break up the grammar for no reason.", guideRef: "semicolons-colons-dashes" },
          { id: "spg-mcq-p2-q17", question: "Why is the comma important in 'Let's eat, Grandma!'?", options: ["It shows Grandma is being spoken to, not eaten.", "It separates two verbs.", "It marks the start of a list.", "It shows Grandma is the subject of 'eat'."], answerIndex: 0, hint: "Who is the speaker talking to?", explanation: "This is a comma of direct address: Grandma is the person being spoken to. Without it, 'Grandma' becomes the object of 'eat'. She is never the subject either way.", guideRef: "commas" },
          { id: "spg-mcq-p2-q18", question: "Why are semicolons used in 'On tour we visited Paris, France; Rome, Italy; and Vienna, Austria'?", options: ["Because the list is long.", "Because they join main clauses.", "Because the list items already contain commas.", "Because the places are capital cities."], answerIndex: 2, hint: "What would happen if you used only commas?", explanation: "Each item already contains a comma (Paris, France), so semicolons separate the items clearly. Length alone does not require semicolons, and there are no main clauses being joined here.", guideRef: "semicolons-colons-dashes" },
          { id: "spg-mcq-p2-q19", question: "Which is a fused (run-on) sentence?", options: ["The rain stopped the sun came out.", "The rain stopped and the sun came out.", "When the rain stopped, the sun came out.", "The rain stopped. The sun came out."], answerIndex: 0, hint: "Look for two main clauses with nothing at all between them.", explanation: "Two main clauses with no punctuation or conjunction between them form a fused sentence. The other options join or separate the clauses correctly.", guideRef: "commas" },
          { id: "spg-mcq-p2-q20", question: "'The passengers, who had tickets, boarded the train.' Which rewrite CHANGES the meaning?", options: ["The passengers who had tickets boarded the train.", "The passengers (who had tickets) boarded the train.", "The passengers — who had tickets — boarded the train.", "The passengers, all of whom had tickets, boarded the train."], answerIndex: 0, hint: "Which version suggests some passengers did NOT have tickets?", explanation: "Removing the commas makes the clause defining: only the passengers with tickets boarded, implying others had none. Brackets and dashes still mark removable extra information, so they keep the original meaning.", guideRef: "commas" },
        ],
      },
      {
        id: "spg-mcq-p3",
        title: "MCQ Paper 3",
        questions: [
          { id: "spg-mcq-p3-q01", question: "The Latin root 'bene', found in 'benefit' and 'benevolent', means...", options: ["bad", "good or well", "before", "around"], answerIndex: 1, hint: "Think of a 'benefit' at work or school.", explanation: "'Bene' means good or well: a benefit does you good, and a benevolent person wishes others well. 'Bad' is its opposite root, 'mal'.", guideRef: "vocabulary-register" },
          { id: "spg-mcq-p3-q02", question: "What does the root 'spect' mean in 'inspect' and 'spectator'?", options: ["look", "carry", "write", "hear"], answerIndex: 0, hint: "What does a spectator do at a match?", explanation: "'Spect' comes from the Latin for 'look' or 'watch'. 'Carry' is 'port' (portable) and 'hear' is 'aud' (audience).", guideRef: "vocabulary-register" },
          { id: "spg-mcq-p3-q03", question: "Which prefix means 'against'?", options: ["pre-", "sub-", "anti-", "trans-"], answerIndex: 2, hint: "Think of 'antibiotic' or 'antisocial'.", explanation: "'Anti-' means against. 'Pre-' means before, 'sub-' means under and 'trans-' means across.", guideRef: "vocabulary-register" },
          { id: "spg-mcq-p3-q04", question: "Adding the suffix '-ness' to 'kind' makes 'kindness'. What word class is 'kindness'?", options: ["A verb", "An adverb", "An adjective", "A noun"], answerIndex: 3, hint: "Can you put 'the' or 'her' in front of it?", explanation: "'-ness' turns an adjective into an abstract noun ('her kindness'). 'Kind' itself is the adjective, and '-ly' would make the adverb 'kindly'.", guideRef: "vocabulary-register" },
          { id: "spg-mcq-p3-q05", question: "'Chronic', 'chronicle' and 'chronological' share a Greek root meaning...", options: ["colour", "order", "time", "sound"], answerIndex: 2, hint: "A chronological account goes from first to last.", explanation: "'Chron' means time: a chronicle records events over time, and a chronic illness lasts a long time. 'Order' is tempting because chronological order is sequential, but the root itself means time.", guideRef: "vocabulary-register" },
          { id: "spg-mcq-p3-q06", question: "Which word has the most negative connotation for describing a thin person?", options: ["slim", "slender", "skeletal", "lean"], answerIndex: 2, hint: "Which word makes you think of illness or death?", explanation: "'Skeletal' suggests a frightening, unhealthy thinness by linking the person to bones and death. 'Slim' and 'slender' are positive, and 'lean' suggests fitness.", guideRef: "vocabulary-register" },
          { id: "spg-mcq-p3-q07", question: "Which verb best suggests walking slowly and wearily?", options: ["strode", "trudged", "marched", "skipped"], answerIndex: 1, hint: "Which one sounds heavy and tired?", explanation: "'Trudged' suggests heavy, effortful, tired steps. 'Strode' suggests long, confident steps, the opposite of weariness.", guideRef: "vocabulary-register" },
          { id: "spg-mcq-p3-q08", question: "Which sentence is written in the most formal register?", options: ["We reckon the canteen food is pretty rubbish.", "The canteen food is, like, so bad.", "Many students feel that the quality of canteen food could be improved.", "Canteen food? Total disaster, mate."], answerIndex: 2, hint: "Look for precise vocabulary and no slang.", explanation: "The third sentence avoids slang, uses precise vocabulary ('quality', 'improved') and a measured tone. 'Reckon' and 'pretty rubbish' make the first one informal.", guideRef: "vocabulary-register" },
          { id: "spg-mcq-p3-q09", question: "Fill the gaps: 'The new timetable will ___ everyone, but its ___ won't be felt until January.'", options: ["effect / affect", "affect / effect", "affect / affect", "effect / effect"], answerIndex: 1, hint: "RAVEN: Affect = Verb, Effect = Noun.", explanation: "The first gap needs a verb (will affect everyone); the second needs a noun after 'its' (its effect). The first option swaps them, the most common error.", guideRef: "vocabulary-register" },
          { id: "spg-mcq-p3-q10", question: "Which sentence is correct in British English?", options: ["I need to practice my scales before orchestra practise.", "I need to practise my scales before orchestra practise.", "I need to practice my scales before orchestra practice.", "I need to practise my scales before orchestra practice."], answerIndex: 3, hint: "Like advice (noun) and advise (verb).", explanation: "In British English 'practise' with an s is the verb and 'practice' with a c is the noun. The third option is correct in American English, which uses 'practice' for both, but not in British English.", guideRef: "vocabulary-register" },
          { id: "spg-mcq-p3-q11", question: "Which sentence is correct?", options: ["If the screw is loose, you might lose the wheel.", "If the screw is lose, you might loose the wheel.", "If the screw is loose, you might loose the wheel.", "If the screw is lose, you might lose the wheel."], answerIndex: 0, hint: "Which word means 'not tight'?", explanation: "'Loose' (rhymes with goose) is the adjective meaning not tight; 'lose' is the verb meaning to misplace. The third option gets the first word right but uses the adjective where a verb is needed.", guideRef: "vocabulary-register" },
          { id: "spg-mcq-p3-q12", question: "Which sentence shows correct subject–verb agreement?", options: ["The box of chocolates was on the table.", "The box of chocolates were on the table.", "The box of chocolates are on the table.", "The box of chocolates have been on the table."], answerIndex: 0, hint: "What is the real subject: the box or the chocolates?", explanation: "The subject is 'box' (singular); 'of chocolates' is just a phrase describing it, so the verb is singular: was. The plural options are tempting because 'chocolates' sits right next to the verb.", guideRef: "tense-agreement-voice" },
          { id: "spg-mcq-p3-q13", question: "Complete correctly: 'Each of the players ___ a medal.'", options: ["receive", "were receiving", "have received", "receives"], answerIndex: 3, hint: "'Each' means each single one.", explanation: "'Each' is singular, so it takes a singular verb: receives. 'Have received' is tempting because 'players' is plural, but 'players' is not the subject.", guideRef: "tense-agreement-voice" },
          { id: "spg-mcq-p3-q14", question: "Keep the tense consistent: 'She opened the door and ___ a strange figure.'", options: ["sees", "is seeing", "saw", "will see"], answerIndex: 2, hint: "What tense is 'opened'?", explanation: "'Opened' is past tense, so the second verb should also be past: saw. 'Sees' creates a tense shift, a very common error in exciting moments of stories.", guideRef: "tense-agreement-voice" },
          { id: "spg-mcq-p3-q15", question: "Which sentence is in the passive voice?", options: ["The chef cooked the meal.", "The meal was cooked by the chef.", "The chef is cooking the meal.", "The chef had cooked the meal."], answerIndex: 1, hint: "Look for a form of 'be' + past participle, with the receiver of the action as the subject.", explanation: "The subject 'the meal' receives the action, and the verb is 'was' + 'cooked'. 'The chef had cooked the meal' is past perfect but still active, because the chef does the cooking.", guideRef: "tense-agreement-voice" },
          { id: "spg-mcq-p3-q16", question: "Why might a news report say 'Three windows were smashed overnight'?", options: ["The writer does not know (or does not want to name) who did it, so the focus is on what happened.", "The passive voice is always more exciting.", "It is written in the future tense.", "Passive sentences are always shorter than active ones."], answerIndex: 0, hint: "Who smashed the windows?", explanation: "The passive lets the writer leave out the doer and focus on the damage. It is in the past tense, not the future, and passives are often longer than active versions.", guideRef: "tense-agreement-voice" },
          { id: "spg-mcq-p3-q17", question: "Which sentence is in Standard English?", options: ["We was going to the beach.", "I done my homework.", "Them shoes are new.", "Arjun and I went to the beach."], answerIndex: 3, hint: "Check the verbs and the pronouns.", explanation: "'Arjun and I went' uses the correct subject pronoun and past tense. The others use non-standard forms: we were, I did (or have done), those shoes.", guideRef: "tense-agreement-voice" },
          { id: "spg-mcq-p3-q18", question: "Which statement about Singlish is most accurate?", options: ["It is a set of random mistakes in English.", "It is a rule-governed variety of English, best suited to informal situations among people who share it.", "It is the expected variety for Singapore exam essays.", "It contains no words from other languages."], answerIndex: 1, hint: "Think about dialects and register.", explanation: "Linguists describe Singlish as a rule-governed variety with its own grammar, drawing on Malay, Hokkien, Tamil and other languages. It is not random, but Standard English is expected in formal exams.", guideRef: "vocabulary-register" },
          { id: "spg-mcq-p3-q19", question: "The root 'port' in 'portable' and 'transport' means...", options: ["carry", "door", "strong", "look"], answerIndex: 0, hint: "What can you do with a portable speaker?", explanation: "'Port' comes from the Latin for 'carry': portable means able to be carried, and transport means to carry across. 'Door' is tempting because of 'portal', but that comes from a different Latin word.", guideRef: "vocabulary-register" },
          { id: "spg-mcq-p3-q20", question: "'Misanthrope' comes from Greek 'misein' (to hate) and 'anthropos' (human). A misanthrope is...", options: ["someone who loves books", "someone who studies insects", "someone who travels a lot", "someone who dislikes other people"], answerIndex: 3, hint: "Combine the two roots.", explanation: "A misanthrope hates or distrusts humankind. 'Anthropos' also appears in 'anthropology', the study of humans.", guideRef: "vocabulary-register" },
        ],
      },
      {
        id: "spg-mcq-p4",
        title: "MCQ Paper 4",
        passage: {
          id: "pulau-ubin-blog",
          title: "Trip to Pulau Ubin (proofreading)",
          source: "Original student-style blog post written for this app (contains deliberate errors)",
          text:
            "(1) Last Saturday, my class went on a trip to Pulau Ubin, its a small island off the north-east coast of Singapore. (2) We had to wake up at six o'clock, which was painful. (3) When we arrived at the jetty; our teacher, Ms Rahman, handed out bikes. (4) The bikes was old and rusty but they worked. (5) We cycled to Chek Jawa, where we seen crabs, mudskippers and a wild boar. (6) “Don't touch nothing,” Ms Rahman warned. (7) Me and Daniel nearly fell into the mangrove. (8) The boardwalk was long, we walked for nearly an hour. (9) By the time we got back, everyones legs were aching. (10) I would of stayed longer if I could.",
          note: "Questions 1–10 refer to this passage. Questions 11–20 are mixed challenge questions.",
        },
        questions: [
          { id: "spg-mcq-p4-q01", question: "Which is the best correction of sentence 1?", options: ["Last Saturday, my class went on a trip to Pulau Ubin, it's a small island off the north-east coast of Singapore.", "Last Saturday, my class went on a trip to Pulau Ubin, a small island off the north-east coast of Singapore.", "Last Saturday, my class went on a trip to Pulau Ubin its' a small island off the north-east coast of Singapore.", "Last Saturday, my class went on a trip to Pulau Ubin, its a small island, off the north-east coast of Singapore."], answerIndex: 1, hint: "Sentence 1 has TWO problems: an apostrophe and a comma splice.", explanation: "Turning the second clause into the phrase 'a small island...' removes the comma splice and the its/it's problem in one move. The first option fixes the apostrophe but still joins two main clauses with only a comma.", guideRef: "commas" },
          { id: "spg-mcq-p4-q02", question: "What is wrong with sentence 3?", options: ["The semicolon should be a comma, because 'When we arrived at the jetty' is a subordinate clause.", "There should be no commas around 'Ms Rahman'.", "'handed' should be 'hands'.", "Nothing is wrong with it."], answerIndex: 0, hint: "Can 'When we arrived at the jetty' stand alone?", explanation: "A semicolon must have a main clause on both sides, but 'When we arrived at the jetty' is subordinate, so it should be followed by a comma. The commas around 'Ms Rahman' are correct because her name is extra information.", guideRef: "semicolons-colons-dashes" },
          { id: "spg-mcq-p4-q03", question: "Which is the correct version of sentence 4?", options: ["The bikes was old and rusty, but they worked.", "The bike's were old and rusty but they worked.", "The bikes were old and rusty, but they worked.", "The bikes were old, and rusty but, they worked."], answerIndex: 2, hint: "Plural subject, plural verb; and no apostrophe for a plural.", explanation: "'Bikes' is plural so it needs 'were', and a comma before 'but' helps when it joins two main clauses. 'The bike's' wrongly uses an apostrophe to make a plural.", guideRef: "tense-agreement-voice" },
          { id: "spg-mcq-p4-q04", question: "In sentence 5, what should 'seen' be?", options: ["have saw", "seed", "had saw", "saw"], answerIndex: 3, hint: "You need the simple past tense of 'see'.", explanation: "'Seen' is a past participle and needs an auxiliary ('had seen'); the simple past is 'saw'. 'Had saw' combines an auxiliary with the wrong form.", guideRef: "tense-agreement-voice" },
          { id: "spg-mcq-p4-q05", question: "What is the problem in sentence 6?", options: ["The speech marks should be single quotation marks.", "It contains a double negative: Standard English is 'Don't touch anything.'", "The comma should be a full stop.", "'warned' should have a capital letter."], answerIndex: 1, hint: "Count the negative words.", explanation: "'Don't' and 'nothing' are both negatives, which is non-standard; Standard English uses 'Don't touch anything'. The comma before the reporting clause is correct, and single or double speech marks are both acceptable if used consistently.", guideRef: "tense-agreement-voice" },
          { id: "spg-mcq-p4-q06", question: "Which is the Standard English version of sentence 7?", options: ["Daniel and me nearly fell into the mangrove.", "Myself and Daniel nearly fell into the mangrove.", "Daniel and I nearly fell into the mangrove.", "Me and Daniel nearly fallen into the mangrove."], answerIndex: 2, hint: "Remove 'Daniel and'. Would you say 'me nearly fell'?", explanation: "The subject needs the subject pronoun 'I' ('I nearly fell'), and it is conventional to put the other person first. 'Myself' is a reflexive pronoun and cannot be used as a subject.", guideRef: "tense-agreement-voice" },
          { id: "spg-mcq-p4-q07", question: "What is the error in sentence 8?", options: ["A comma splice", "A missing apostrophe", "A tense shift", "A missing capital letter"], answerIndex: 0, hint: "Could each half stand alone as a sentence?", explanation: "'The boardwalk was long' and 'we walked for nearly an hour' are both main clauses joined only by a comma. Both verbs are already in the past tense, so there is no tense shift.", guideRef: "commas" },
          { id: "spg-mcq-p4-q08", question: "How should 'everyones legs' in sentence 9 be written?", options: ["everyones' legs", "everyone's legs", "everyones legs'", "every ones' legs"], answerIndex: 1, hint: "'Everyone' is a singular word.", explanation: "'Everyone' is singular and does not end in s, so the possessive is everyone's. 'Everyones'' is tempting because 'everyone' refers to many people, but grammatically it is singular.", guideRef: "apostrophes-speech" },
          { id: "spg-mcq-p4-q09", question: "Which is the correct version of sentence 10?", options: ["I would of stayed longer if I could.", "I would've of stayed longer if I could.", "I had of stayed longer if I could.", "I would have stayed longer if I could."], answerIndex: 3, hint: "What does 'would've' stand for?", explanation: "The correct form is 'would have'. 'Would've' is the contraction, which is why people mishear it as 'would of'.", guideRef: "tense-agreement-voice" },
          { id: "spg-mcq-p4-q10", question: "Which sentence in the passage contains no errors?", options: ["Sentence 2", "Sentence 4", "Sentence 7", "Sentence 10"], answerIndex: 0, hint: "One sentence uses a comma before a non-defining 'which' clause correctly.", explanation: "Sentence 2 is correct: 'which was painful' adds extra information after a comma. Sentences 4, 7 and 10 contain agreement, pronoun and 'would of' errors.", guideRef: "commas" },
          { id: "spg-mcq-p4-q11", question: "Which sentence uses a colon to introduce an explanation?", options: ["I couldn't: sleep because of the mosquitoes.", "The mosquitoes: were relentless.", "I couldn't sleep: the mosquitoes were relentless.", "Because of the mosquitoes: I couldn't sleep."], answerIndex: 2, hint: "Main clause first, then the reason.", explanation: "'I couldn't sleep' is a complete main clause and the part after the colon explains why. In the last option, 'Because of the mosquitoes' is only a phrase, so it cannot come before a colon.", guideRef: "semicolons-colons-dashes" },
          { id: "spg-mcq-p4-q12", question: "Which would be the best topic sentence for a paragraph arguing that school uniforms are useful?", options: ["Uniforms.", "School uniforms help to create a sense of belonging and equality.", "I wear a uniform every day and it is blue.", "However, some people disagree."], answerIndex: 1, hint: "A topic sentence states the main point of the paragraph clearly.", explanation: "It clearly states the paragraph's argument and gives two ideas to develop. 'However, some people disagree' introduces a counter-argument, so it could not open a paragraph arguing that uniforms are useful.", guideRef: "paragraphing-tiptop" },
          { id: "spg-mcq-p4-q13", question: "In a story, which change does NOT usually need a new paragraph?", options: ["A jump forward in time", "A new character speaking", "A move to a new location", "The use of a new adjective"], answerIndex: 3, hint: "Remember TiPToP.", explanation: "Time, Place, Topic and Person (including speaker) changes all need new paragraphs; a new adjective does not.", guideRef: "paragraphing-tiptop" },
          { id: "spg-mcq-p4-q14", question: "Which sentence is correct?", options: ["They're bringing their dog over there.", "Their bringing there dog over they're.", "There bringing their dog over there.", "They're bringing there dog over their."], answerIndex: 0, hint: "they are / belonging to them / a place.", explanation: "They're = they are; their = belonging to them; there = a place. The third option gets two right but uses 'There' where 'They are' is needed.", guideRef: "apostrophes-speech" },
          { id: "spg-mcq-p4-q15", question: "Which verb best shows anger? '“Get out!” she ___.'", options: ["said", "snapped", "whispered", "mentioned"], answerIndex: 1, hint: "Which verb sounds sharp and sudden?", explanation: "'Snapped' suggests a short, sharp, angry reply. 'Said' is neutral and tells the reader nothing about tone.", guideRef: "vocabulary-register" },
          { id: "spg-mcq-p4-q16", question: "Which phrase is most appropriate for a formal letter to a newspaper?", options: ["Loads of people are fed up with", "Everyone's well annoyed about", "Honestly, it's kinda bad that", "A significant number of residents are concerned about"], answerIndex: 3, hint: "Avoid slang and contractions.", explanation: "The last option uses precise, formal vocabulary. 'Loads of' and 'fed up' are informal, so the first option is the wrong register even though it makes the same point.", guideRef: "vocabulary-register" },
          { id: "spg-mcq-p4-q17", question: "In 'irreversible', the prefix 'ir-' means...", options: ["again", "before", "not", "very"], answerIndex: 2, hint: "Something irreversible cannot be...?", explanation: "'Ir-' is a form of 'in-' meaning 'not', used before words starting with r (irregular, irrelevant). 'Again' is the meaning of 're-', which is tempting because 'reversible' contains it.", guideRef: "vocabulary-register" },
          { id: "spg-mcq-p4-q18", question: "In 'Shivering in the doorway, the boy waited for an answer', what is 'Shivering in the doorway'?", options: ["A main clause", "A non-finite (-ing) clause used as a fronted opener", "A relative clause", "A minor sentence"], answerIndex: 1, hint: "Could it stand alone? Does it have a subject?", explanation: "It uses an -ing verb with no subject or tense of its own, so it is a non-finite clause, placed at the front and followed by a comma. It is not a main clause because it cannot stand alone.", guideRef: "phrases-clauses" },
          { id: "spg-mcq-p4-q19", question: "Why is 'I dedicate this book to my parents, Mrs Lim and Mr Tan' ambiguous?", options: ["It contains a comma splice.", "'parents' needs an apostrophe.", "It is in the passive voice.", "It could mean that Mrs Lim and Mr Tan ARE the parents; an Oxford comma (parents, Mrs Lim, and Mr Tan) would make it clearly a list."], answerIndex: 3, hint: "Read 'Mrs Lim and Mr Tan' as an explanation of 'my parents'.", explanation: "Without the Oxford comma, 'Mrs Lim and Mr Tan' can be read as parenthesis renaming 'my parents'. There is only one main clause, so it cannot be a comma splice.", guideRef: "commas" },
          { id: "spg-mcq-p4-q20", question: "Which sentence is grammatically correct in formal English?", options: ["Neither the teacher nor the students was ready.", "Neither the teacher or the students were ready.", "Neither the teacher nor the students were ready.", "Neither the teacher nor the students is ready."], answerIndex: 2, hint: "With neither...nor, the verb agrees with the nearer subject.", explanation: "'Students' is nearer the verb and plural, so 'were' is correct, and 'neither' pairs with 'nor', not 'or'. The second option has the right verb but the wrong pairing.", guideRef: "tense-agreement-voice" },
        ],
      },
    ],
    qaPapers: [
      {
        id: "spg-qa-p1",
        title: "Written Paper 1",
        questions: [
          {
            id: "spg-qa-p1-q01",
            question: "Name the word class of each of these words in the sentence 'The tiny kitten hid nervously under the sofa': (a) tiny (b) hid (c) nervously (d) under.",
            marks: 4,
            hint: "Ask what job each word does: describe a noun, show an action, describe how, or show position.",
            modelAnswer: "(a) 'tiny' is an adjective because it describes the noun 'kitten'. (b) 'hid' is a verb because it is the action the kitten does. (c) 'nervously' is an adverb because it tells us how the kitten hid. (d) 'under' is a preposition because it shows the position of the kitten in relation to 'the sofa'.",
            markScheme: [
              { point: "tiny = adjective", keywords: ["adjective", "describes the noun", "describes kitten", "describing word"] },
              { point: "hid = verb", keywords: ["verb", "action", "doing word", "past tense verb"] },
              { point: "nervously = adverb", keywords: ["adverb", "how it hid", "describes the verb", "modifies the verb"] },
              { point: "under = preposition", keywords: ["preposition", "position", "where", "shows place"] },
            ],
            commonError: "Calling 'under' an adverb. Here it is followed by a noun phrase ('the sofa'), so it is a preposition.",
            guideRef: "word-classes",
          },
          {
            id: "spg-qa-p1-q02",
            question: "Explain the difference between a phrase and a clause, giving an example of each.",
            marks: 3,
            hint: "One of them must contain a subject and a verb.",
            modelAnswer: "A phrase is a group of words that works as a unit but does not contain a subject doing a verb, for example 'across the frozen lake'. A clause does contain a subject and a verb, for example 'the lake froze', where 'the lake' is the subject and 'froze' is the verb. A main clause can stand alone as a sentence, but a phrase cannot.",
            markScheme: [
              { point: "A phrase has no subject + verb", keywords: ["no verb", "without a verb", "no subject", "does not contain a verb", "doesn't have a verb"] },
              { point: "A clause has a subject and a verb", keywords: ["subject and a verb", "subject and verb", "has a verb", "contains a verb", "subject + verb"] },
              { point: "Gives a correct example of each", keywords: ["for example", "e.g.", "such as", "for instance", "example"] },
            ],
            commonError: "Saying a phrase is 'a short sentence'. Phrases are not sentences at all.",
            guideRef: "phrases-clauses",
          },
          {
            id: "spg-qa-p1-q03",
            question: "Combine 'The storm was raging.' and 'We stayed inside.' into one complex sentence. Then explain what makes your sentence complex.",
            marks: 3,
            hint: "Use a subordinating conjunction such as because, as, since or while.",
            modelAnswer: "Because the storm was raging, we stayed inside. This is a complex sentence because it contains a main clause ('we stayed inside'), which makes sense on its own, and a subordinate clause ('Because the storm was raging'), which begins with the subordinating conjunction 'because' and cannot stand alone. The comma marks the end of the opening subordinate clause.",
            markScheme: [
              { point: "Writes a correct complex sentence using a subordinating conjunction", keywords: ["because the storm", "as the storm", "since the storm", "while the storm", "when the storm"] },
              { point: "Identifies the main clause", keywords: ["main clause", "independent clause", "stands alone", "makes sense on its own"] },
              { point: "Identifies the subordinate clause / subordinating conjunction", keywords: ["subordinate clause", "subordinating conjunction", "dependent clause", "cannot stand alone"] },
            ],
            commonError: "Joining the clauses with 'and' or 'so', which makes a compound sentence, not a complex one.",
            guideRef: "phrases-clauses",
          },
          {
            id: "spg-qa-p1-q04",
            question: "Write a compound sentence using 'yet'. Explain how 'yet' changes the meaning compared with using 'and'.",
            marks: 3,
            hint: "'Yet' signals something surprising or contrasting.",
            modelAnswer: "She had trained every morning for a year, yet she came last in the race. This is a compound sentence because 'yet' joins two main clauses of equal weight. 'Yet' signals a contrast or surprise: the second clause is unexpected given the first. If I used 'and', the two events would simply be added together with no sense that the result is surprising or unfair.",
            markScheme: [
              { point: "Writes a compound sentence correctly using 'yet' between two main clauses", keywords: ["yet she", "yet he", "yet i", "yet it", "yet they", "yet we"] },
              { point: "Explains that 'yet' shows contrast or surprise", keywords: ["contrast", "surprise", "unexpected", "despite", "opposite", "however"] },
              { point: "Explains that 'and' simply adds without contrast", keywords: ["and just adds", "adds", "simply joins", "no contrast", "addition", "continues"] },
            ],
            commonError: "Writing a sentence where 'yet' means 'so far' ('He hasn't arrived yet'), which is an adverb, not a conjunction.",
            guideRef: "sentence-types",
          },
          {
            id: "spg-qa-p1-q05",
            extract: "Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river ...\n(Charles Dickens, Bleak House, 1853)",
            question: "Explain how Dickens uses sentence structure in the opening words 'Fog everywhere.' to create atmosphere.",
            marks: 4,
            hint: "What is missing from the sentence? What word is repeated next?",
            modelAnswer: "'Fog everywhere.' is a minor sentence with no main verb. Without a verb nothing moves or happens; the fog simply exists, which creates a stagnant, frozen atmosphere. The brevity makes the statement blunt and emphatic, as if there is nothing else to say about London except the fog. Dickens then repeats 'fog' at the start of the following phrases, so the word seems to spread across the page just as the fog spreads across the city, making it feel oppressive and inescapable.",
            markScheme: [
              { point: "Identifies a minor sentence / no main verb", keywords: ["minor sentence", "no verb", "no main verb", "verbless", "fragment"] },
              { point: "Explains the effect of the missing verb: stillness, stagnation", keywords: ["still", "static", "stagnant", "nothing moves", "frozen", "nothing happens"] },
              { point: "Comments on brevity / emphasis", keywords: ["short", "blunt", "emphatic", "emphasis", "brief", "punchy"] },
              { point: "Links repetition of 'fog' to the fog spreading / feeling oppressive", keywords: ["repetition", "repeated", "spreads", "oppressive", "inescapable", "smothering"] },
            ],
            commonError: "Describing the fog itself without commenting on the sentence's grammar, which is what the question asks about.",
            guideRef: "sentence-types",
          },
          {
            id: "spg-qa-p1-q06",
            question: "Identify the relative clause in 'The house, which had been empty for years, was finally sold.' Explain why it is placed between commas.",
            marks: 3,
            hint: "Could you remove it and still have a full sentence?",
            modelAnswer: "The relative clause is 'which had been empty for years'. It begins with the relative pronoun 'which' and gives extra information about the house. It is a non-defining relative clause: it does not tell us which house, it just adds detail, so it could be removed and 'The house was finally sold' would still make sense. That is why it is enclosed by a pair of commas.",
            markScheme: [
              { point: "Identifies 'which had been empty for years'", keywords: ["which had been empty", "empty for years", "which had been", "which had been empty for years"] },
              { point: "States it is extra / non-defining information", keywords: ["extra information", "non-defining", "additional", "adds detail", "parenthesis"] },
              { point: "Explains it could be removed and the sentence still makes sense", keywords: ["removed", "remove", "take it out", "still makes sense", "without it"] },
            ],
            commonError: "Only putting one comma, after 'years' or after 'house', which leaves the parenthesis unclosed.",
            guideRef: "phrases-clauses",
          },
          {
            id: "spg-qa-p1-q07",
            question: "Rewrite 'When the whistle blew, the players froze.' so that the main clause comes first. Explain what happens to the comma.",
            marks: 2,
            hint: "Which clause makes sense on its own?",
            modelAnswer: "The players froze when the whistle blew. When the subordinate clause comes after the main clause, no comma is needed, because the main clause comes first and the sentence flows straight into the subordinate clause. The comma is only needed when the subordinate clause opens the sentence.",
            markScheme: [
              { point: "Correct rewrite with main clause first", keywords: ["the players froze when", "players froze when the whistle", "players froze when", "froze when the whistle blew"] },
              { point: "Explains no comma is needed when the main clause comes first", keywords: ["no comma", "comma is removed", "comma not needed", "don't need a comma", "without a comma", "remove the comma"] },
            ],
            commonError: "Keeping the comma ('The players froze, when the whistle blew'), which interrupts the sentence unnecessarily.",
            guideRef: "commas",
          },
          {
            id: "spg-qa-p1-q08",
            question: "Explain why 'The enormous, ancient oak tree at the edge of the silent village creaked.' is a simple sentence even though it is long.",
            marks: 3,
            hint: "Find the subject and the verb. How many clauses are there?",
            modelAnswer: "A simple sentence is defined by having one main clause, not by its length. Here there is only one verb, 'creaked', and one subject, 'the enormous, ancient oak tree at the edge of the silent village'. All the extra words are adjectives and a prepositional phrase that expand the noun phrase; none of them adds a second clause. So it is a simple sentence.",
            markScheme: [
              { point: "States a simple sentence has one main clause (not about length)", keywords: ["one main clause", "one clause", "single clause", "not about length", "length does not matter"] },
              { point: "Identifies the single verb 'creaked'", keywords: ["creaked", "one verb", "only verb", "single verb"] },
              { point: "Explains the extra words expand the noun phrase / are adjectives and a prepositional phrase", keywords: ["noun phrase", "adjectives", "prepositional phrase", "describe the tree", "expanded"] },
            ],
            commonError: "Assuming that commas or long descriptions mean the sentence must be compound or complex.",
            guideRef: "sentence-types",
          },
          {
            id: "spg-qa-p1-q09",
            question: "Write three sentences about arriving at a new school: one simple, one compound and one complex. Label each one.",
            marks: 3,
            hint: "Compound uses FANBOYS; complex uses a word like although, when or because.",
            modelAnswer: "Simple: The corridor smelled of fresh paint. Compound: I looked for my classroom, but every door looked the same. Complex: Although I had studied the map all summer, I was completely lost within five minutes.",
            markScheme: [
              { point: "A correct simple sentence (one main clause), labelled", keywords: ["simple", "simple:", "simple sentence", "one main clause"] },
              { point: "A correct compound sentence using a coordinating conjunction, labelled", keywords: ["compound", ", but", ", and", ", so", ", yet", ", or"] },
              { point: "A correct complex sentence with a subordinate clause, labelled", keywords: ["complex", "although", "because", "when", "while", "since"] },
            ],
            commonError: "Labelling a long sentence 'complex' when it only joins two main clauses with 'and'.",
            guideRef: "sentence-types",
          },
          {
            id: "spg-qa-p1-q10",
            question: "Using 'friendly' and 'quickly', explain why you cannot decide a word's class from its ending alone.",
            marks: 3,
            hint: "Try 'a ___ dog' and 'she ran ___'.",
            modelAnswer: "Both words end in -ly, which many people think marks an adverb. 'Quickly' is an adverb because it modifies a verb: 'she ran quickly'. But 'friendly' is an adjective because it describes a noun: 'a friendly dog'; you cannot say 'she ran friendly'. This shows that word class depends on the job the word does in the sentence, so endings are only a clue.",
            markScheme: [
              { point: "'quickly' is an adverb modifying a verb", keywords: ["quickly is an adverb", "adverb", "modifies the verb", "describes how"] },
              { point: "'friendly' is an adjective describing a noun", keywords: ["friendly is an adjective", "adjective", "describes a noun", "friendly dog"] },
              { point: "Word class depends on the job/function in the sentence", keywords: ["job", "function", "role", "how it is used", "depends on the sentence", "position"] },
            ],
            commonError: "Saying 'friendly' is an adverb because it ends in -ly.",
            guideRef: "word-classes",
          },
          {
            id: "spg-qa-p1-q11",
            extract: "It was a bright cold day in April, and the clocks were striking thirteen.\n(George Orwell, Nineteen Eighty-Four, 1949)",
            question: "Explain how Orwell uses sentence structure in this opening sentence to surprise and hook the reader.",
            marks: 5,
            hint: "What type of sentence is it? Where is the surprising detail placed?",
            modelAnswer: "Orwell uses a compound sentence made of two main clauses joined by 'and'. The first clause, 'It was a bright cold day in April', is completely ordinary and lulls the reader into expecting a normal story. The coordinating conjunction 'and' suggests the next clause will simply continue in the same way, so the reader is unprepared for the impossible detail that 'the clocks were striking thirteen'. Placing 'thirteen' at the very end of the sentence (end focus) makes the strangeness land with a jolt. This signals immediately that the world of the novel is subtly wrong and unsettling, which hooks the reader and hints at the dystopian society to come.",
            markScheme: [
              { point: "Identifies a compound sentence / two main clauses joined by 'and'", keywords: ["compound", "two main clauses", "coordinating conjunction", "joined by and", "two clauses"] },
              { point: "First clause is ordinary or normal", keywords: ["ordinary", "normal", "everyday", "calm", "familiar", "realistic"] },
              { point: "'and' makes the reader expect continuation, so the twist is unexpected", keywords: ["expect", "continuation", "unprepared", "unexpected", "lulls", "false sense"] },
              { point: "Comments on end focus / 'thirteen' placed last", keywords: ["end focus", "at the end", "last word", "final word", "placed last"] },
              { point: "Links to effect: unsettling, wrong world, dystopia, hook", keywords: ["unsettling", "wrong", "dystopia", "dystopian", "strange", "hook", "intrigue"] },
            ],
            commonError: "Only saying 'clocks can't strike thirteen' without explaining how the sentence's structure sets up and delivers the surprise.",
            guideRef: "sentence-types",
          },
          {
            id: "spg-qa-p1-q12",
            question: "Rewrite this passage to improve the sentence variety, using at least one complex sentence and keeping one short sentence for effect: 'I walked into the hall. It was dark. I heard a noise. I ran.' Then explain two of your choices.",
            marks: 4,
            hint: "Try a fronted subordinate clause, then save the shortest sentence for the climax.",
            modelAnswer: "As I stepped into the hall, the darkness folded around me like a heavy coat. Somewhere near the stairs, something shifted. I ran.\n\nI turned the first two sentences into a complex sentence opening with the subordinate clause 'As I stepped into the hall', which slows the pace and builds atmosphere with a simile. I kept 'I ran.' as a two-word simple sentence at the end, so the sudden short sentence matches the sudden action and creates a moment of panic.",
            markScheme: [
              { point: "Uses a complex sentence with a subordinate clause", keywords: ["as i", "when i", "although", "because", "while", "complex"] },
              { point: "Keeps a short sentence for effect at the climax", keywords: ["i ran.", "short sentence", "simple sentence", "two-word", "kept short"] },
              { point: "Varies sentence openings (e.g. fronted adverbial)", keywords: ["somewhere", "fronted", "opening", "varied", "adverbial", "slowly"] },
              { point: "Explains the effect of choices on pace or tension", keywords: ["pace", "tension", "panic", "suspense", "sudden", "builds"] },
            ],
            commonError: "Making every sentence long, which loses the punch of the original short ending.",
            guideRef: "sentence-types",
          },
        ],
      },
      {
        id: "spg-qa-p2",
        title: "Written Paper 2",
        questions: [
          {
            id: "spg-qa-p2-q01",
            question: "'I love reading, my sister prefers football.' Name the error and correct it in three different ways.",
            marks: 4,
            hint: "Full stop, semicolon, conjunction.",
            modelAnswer: "The error is a comma splice: two main clauses joined only by a comma. 1) Full stop: 'I love reading. My sister prefers football.' 2) Semicolon: 'I love reading; my sister prefers football.' 3) Conjunction: 'I love reading, but my sister prefers football.' (or 'I love reading, whereas my sister prefers football').",
            markScheme: [
              { point: "Names the error as a comma splice", keywords: ["comma splice", "spliced", "two main clauses", "two sentences joined by a comma"] },
              { point: "Correction with a full stop", keywords: ["reading. my", "full stop", "two sentences", "separate sentences"] },
              { point: "Correction with a semicolon", keywords: ["reading; my", "semicolon", "semi-colon", "reading ; my"] },
              { point: "Correction with a conjunction", keywords: ["but my", "whereas", "while my", "although", "conjunction", "yet my"] },
            ],
            commonError: "Replacing the comma with 'however' and a comma, which is still a comma splice.",
            guideRef: "commas",
          },
          {
            id: "spg-qa-p2-q02",
            question: "Explain two different uses of a colon, giving an example sentence for each.",
            marks: 4,
            hint: "A colon can introduce a list, an explanation or a dramatic reveal.",
            modelAnswer: "First, a colon can introduce a list after a complete main clause: 'You will need three things: a torch, a rope and courage.' Second, a colon can introduce an explanation or reason for what came before: 'I couldn't sleep: the mosquitoes were relentless.' In both cases the words before the colon form a complete main clause, and what follows delivers on it.",
            markScheme: [
              { point: "Use 1 identified (e.g. introducing a list)", keywords: ["list", "introduce a list", "introduces a list", "items"] },
              { point: "Correct example of use 1", keywords: ["things:", "need:", "following:", "three things", "for example", "e.g."] },
              { point: "Use 2 identified (e.g. explanation, reason, reveal or quotation)", keywords: ["explanation", "explain", "reason", "reveal", "dramatic", "quotation"] },
              { point: "Notes the colon follows a complete main clause / gives a second correct example", keywords: ["main clause", "complete sentence", "complete clause", "before the colon", "stand alone"] },
            ],
            commonError: "Putting a colon after an incomplete clause, such as 'My favourite foods are: pizza and laksa.'",
            guideRef: "semicolons-colons-dashes",
          },
          {
            id: "spg-qa-p2-q03",
            question: "Punctuate this interrupted speech correctly and explain each rule: tell me the truth said the inspector or you will regret it",
            marks: 4,
            hint: "It is one spoken sentence, broken in the middle by the reporting clause.",
            modelAnswer: "“Tell me the truth,” said the inspector, “or you will regret it.”\n\nThe first part of the speech ends with a comma inside the speech marks because the reporting clause follows. 'said the inspector' is lower case because it continues the same sentence. A comma comes after the reporting clause because the spoken sentence has not finished. The speech resumes with a lower-case 'or' because it is the same sentence continuing, and the final full stop goes inside the closing speech marks.",
            markScheme: [
              { point: "Comma inside the speech marks before the reporting clause", keywords: ["comma inside", "comma before said", "comma after truth", "inside the speech marks"] },
              { point: "Lower-case reporting clause", keywords: ["lower case", "lowercase", "small s", "not a capital", "no capital"] },
              { point: "Comma after the reporting clause because the sentence continues", keywords: ["comma after inspector", "comma after the reporting clause", "sentence continues", "same sentence", "not finished"] },
              { point: "Lower-case 'or' and full stop inside the final speech marks", keywords: ["lower-case or", "lowercase or", "small o", "full stop inside", "continues the sentence"] },
            ],
            commonError: "Putting a full stop after 'inspector' and a capital 'Or', which wrongly splits one spoken sentence into two.",
            guideRef: "apostrophes-speech",
          },
          {
            id: "spg-qa-p2-q04",
            question: "Explain why 'the girls' coats' and 'the women's coats' place the apostrophe differently.",
            marks: 3,
            hint: "Look at how each plural is formed.",
            modelAnswer: "Both show possession by plural owners. 'Girls' is a plural that already ends in s, so you add only an apostrophe after the s: the girls' coats. 'Women' is a plural that does not end in s, so you add an apostrophe and s, just as you would for a singular owner: the women's coats.",
            markScheme: [
              { point: "Both are plural possession", keywords: ["plural", "belong", "possession", "ownership", "more than one"] },
              { point: "'girls' already ends in s, so add only an apostrophe", keywords: ["ends in s", "ends with s", "after the s", "apostrophe only", "just an apostrophe"] },
              { point: "'women' does not end in s, so add 's", keywords: ["doesn't end in s", "does not end in s", "add 's", "apostrophe s", "irregular plural", "no s"] },
            ],
            commonError: "Writing 'womens'' because the owners are plural.",
            guideRef: "apostrophes-speech",
          },
          {
            id: "spg-qa-p2-q05",
            question: "Fill the gaps with its or it's and explain each choice: '___ been raining all day, and the garden has lost ___ colour.'",
            marks: 3,
            hint: "Can you replace the word with 'it is' or 'it has'?",
            modelAnswer: "It's been raining all day, and the garden has lost its colour. The first is 'It's' because it is short for 'It has' (It has been raining), so the apostrophe marks the missing letters. The second is 'its' because the colour belongs to the garden; possessive pronouns such as its, his and hers never take an apostrophe.",
            markScheme: [
              { point: "First gap: It's = it has", keywords: ["it's been", "it’s been", "it has", "it is"] },
              { point: "Second gap: its (possessive)", keywords: ["its colour", "belongs", "possessive", "belonging"] },
              { point: "Explains apostrophe = omission; possessive pronouns take no apostrophe", keywords: ["missing letter", "omission", "contraction", "no apostrophe", "like his", "like hers"] },
            ],
            commonError: "Thinking 'it's' can only mean 'it is', and so rejecting it in 'It's been raining'.",
            guideRef: "apostrophes-speech",
          },
          {
            id: "spg-qa-p2-q06",
            question: "Explain the difference in meaning between 'The students who had revised passed easily.' and 'The students, who had revised, passed easily.'",
            marks: 4,
            hint: "Which version suggests some students did not revise?",
            modelAnswer: "In the first sentence the relative clause is defining because there are no commas: it identifies which students passed easily, namely only those who had revised, implying that others did not revise and did not pass easily. In the second sentence the commas make the clause non-defining: it is extra information about all the students, so all of them had revised and all passed easily. The clause could be removed without changing who passed.",
            markScheme: [
              { point: "First sentence: defining clause, no commas", keywords: ["defining", "no commas", "without commas", "identifies"] },
              { point: "First sentence means only some students revised/passed easily", keywords: ["only", "some students", "only those", "not all", "others did not"] },
              { point: "Second sentence: non-defining, extra information in commas", keywords: ["non-defining", "extra information", "commas", "parenthesis", "removable"] },
              { point: "Second sentence means all the students revised and passed easily", keywords: ["all the students", "all students", "every student", "all of them", "everyone"] },
            ],
            commonError: "Saying the commas just create a pause, without explaining how they change who is included.",
            guideRef: "commas",
          },
          {
            id: "spg-qa-p2-q07",
            question: "Correct this sentence and explain the error: 'Our teacher said that the trip was cancelled, however, we could go next term.'",
            marks: 3,
            hint: "Is 'however' strong enough to join two clauses?",
            modelAnswer: "Our teacher said that the trip was cancelled; however, we could go next term. (A full stop before 'However' also works.) The original is a comma splice, because 'however' is an adverb, not a conjunction, so it cannot join two main clauses with commas. A semicolon or full stop is needed before 'however', with a comma after it.",
            markScheme: [
              { point: "Correct version with semicolon or full stop before however", keywords: ["; however", "cancelled; however", ". however", "semicolon before however", "full stop before however"] },
              { point: "Identifies comma splice", keywords: ["comma splice", "two main clauses", "two sentences", "run-on"] },
              { point: "Explains however is an adverb, not a conjunction", keywords: ["not a conjunction", "adverb", "cannot join", "can't join", "isn't a conjunction"] },
            ],
            commonError: "Moving the commas around 'however' instead of replacing the first one with a semicolon.",
            guideRef: "commas",
          },
          {
            id: "spg-qa-p2-q08",
            question: "Write a sentence that uses a pair of dashes for parenthesis. Then explain how the effect would differ if you used brackets instead.",
            marks: 3,
            hint: "Dashes shout; brackets whisper.",
            modelAnswer: "My grandfather — who once outran a monitor lizard — still walks five kilometres every morning. The dashes make the extra information stand out dramatically, inviting the reader to notice it and creating an energetic, informal tone. Brackets would make the same information feel like a quiet aside or afterthought, less important than the main sentence.",
            markScheme: [
              { point: "Writes a correct sentence with a pair of dashes around removable information", keywords: ["—", " - ", "dashes", "–"] },
              { point: "Dashes make the information dramatic, emphatic or informal", keywords: ["dramatic", "emphasis", "stand out", "emphatic", "informal", "noticeable"] },
              { point: "Brackets make it a quieter aside / less important", keywords: ["aside", "quieter", "less important", "afterthought", "whisper", "subtle"] },
            ],
            commonError: "Using only one dash, so the parenthesis is opened but never closed.",
            guideRef: "semicolons-colons-dashes",
          },
          {
            id: "spg-qa-p2-q09",
            question: "What is the Oxford comma? Give an example where it prevents ambiguity.",
            marks: 3,
            hint: "Think of a list where the last two items could be read as describing the first.",
            modelAnswer: "The Oxford (or serial) comma is the optional comma placed before 'and' or 'or' at the end of a list: 'red, white, and blue'. It can prevent ambiguity. 'I dedicate this book to my parents, Mrs Lim and Mr Tan' could mean that Mrs Lim and Mr Tan are my parents. 'I dedicate this book to my parents, Mrs Lim, and Mr Tan' makes it clear that there are four people.",
            markScheme: [
              { point: "Defines the Oxford comma as the comma before the final 'and' in a list", keywords: ["before and", "before the and", "final and", "serial comma", "last item"] },
              { point: "Gives an example list", keywords: ["for example", "e.g.", "my parents", "list"] },
              { point: "Explains how it removes ambiguity", keywords: ["ambiguity", "ambiguous", "confusion", "could mean", "unclear", "clear"] },
            ],
            commonError: "Saying the Oxford comma is always compulsory; it is a style choice, used when it helps clarity.",
            guideRef: "commas",
          },
          {
            id: "spg-qa-p2-q10",
            question: "Write a sentence that uses semicolons to separate list items, and explain why semicolons are needed.",
            marks: 2,
            hint: "Each item needs to contain a comma of its own.",
            modelAnswer: "The finalists came from Ipoh, Malaysia; Chennai, India; and Leeds, England. Semicolons are needed because each item already contains a comma, so using commas alone between the items would make it impossible to see where one item ends and the next begins.",
            markScheme: [
              { point: "Correct sentence with semicolons between items containing commas", keywords: ["; and", "semicolon", "semi-colon", ";"] },
              { point: "Explains the items already contain commas", keywords: ["already contain commas", "contain commas", "commas inside", "have commas", "confusing", "unclear"] },
            ],
            commonError: "Using semicolons in a simple list of single words, where commas are correct.",
            guideRef: "semicolons-colons-dashes",
          },
          {
            id: "spg-qa-p2-q11",
            extract: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity ...\n(Charles Dickens, A Tale of Two Cities, 1859)",
            question: "Dickens joins main clauses with commas here. Why might a reader argue this is a deliberate technique rather than an error?",
            marks: 5,
            hint: "Look at the repeated structure and the pairs of opposites.",
            modelAnswer: "Technically, joining these main clauses with commas creates comma splices, which would be an error in a school essay. However, Dickens uses them deliberately. Each clause repeats the same pattern, 'it was the...', creating parallelism and an almost chant-like rhythm. The clauses come in pairs of opposites (best/worst, wisdom/foolishness), so the antithesis is built into the structure. Because there are no full stops, the contradictions rush together breathlessly, suggesting an era swinging between extremes without pause. This matches the novel's theme of a society divided by revolution, so the 'rule-breaking' clearly serves a purpose.",
            markScheme: [
              { point: "Recognises the comma-joined main clauses (comma splices)", keywords: ["comma splice", "main clauses", "joined by commas", "commas instead of full stops"] },
              { point: "Identifies repetition / parallel structure", keywords: ["repetition", "repeated", "parallel", "parallelism", "it was the", "pattern"] },
              { point: "Identifies antithesis / pairs of opposites", keywords: ["antithesis", "opposites", "contrast", "best and worst", "juxtaposition"] },
              { point: "Explains effect on pace or rhythm (breathless, no pause)", keywords: ["breathless", "rhythm", "no pause", "rush", "pace", "chant"] },
              { point: "Links to purpose or theme (extremes, contradiction, revolution)", keywords: ["extremes", "contradiction", "revolution", "divided", "theme", "purpose", "deliberate"] },
            ],
            commonError: "Simply saying 'Dickens is famous so it isn't wrong', without explaining what the technique achieves.",
            guideRef: "commas",
          },
          {
            id: "spg-qa-p2-q12",
            question: "Explain how punctuation reverses the meaning of these two sentences: (A) 'A woman, without her man, is nothing.' (B) 'A woman: without her, man is nothing.'",
            marks: 4,
            hint: "In each sentence, who is 'nothing'?",
            modelAnswer: "In sentence A, the pair of commas turns 'without her man' into parenthesis, so the main clause is 'A woman is nothing', meaning a woman is nothing without a man. In sentence B, the colon after 'A woman' introduces an explanation, and the comma after 'her' makes 'man' the subject of the clause 'man is nothing'. So B means that a man is nothing without a woman. The words are identical, but the punctuation changes which noun is the subject, reversing the meaning.",
            markScheme: [
              { point: "A: commas make 'without her man' parenthesis, so the woman is nothing", keywords: ["woman is nothing", "parenthesis", "extra information", "commas around"] },
              { point: "B: colon introduces an explanation about the woman", keywords: ["colon", "introduces", "explanation", "explains"] },
              { point: "B: comma after 'her' makes 'man' the subject, so man is nothing", keywords: ["man is nothing", "man is the subject", "subject", "without her"] },
              { point: "States the same words have opposite meanings due to punctuation", keywords: ["opposite", "reverses", "same words", "changes the meaning", "reversed"] },
            ],
            commonError: "Describing the change in meaning without explaining what each punctuation mark does grammatically.",
            guideRef: "semicolons-colons-dashes",
          },
        ],
      },
      {
        id: "spg-qa-p3",
        title: "Written Paper 3",
        passage: {
          id: "lost-phone",
          title: "The Lost Phone (first draft)",
          source: "Original student-style draft written for this app (contains deliberate errors)",
          text:
            "Last Friday I was walking home from the MRT station when I realise my phone is gone. I check every pocket. Nothing. I ran back to the station, my heart pounding. “Excuse me, has anyone handed in a phone?” I asked the man at the counter. “What colour?” he said. “Blue, with a cracked screen,” I replied. He shook his head. Two hours later, back at home, my mum walks in holding it. It had been in the car the whole time.",
          note: "Questions 1 and 2 refer to this draft. The writer has drifted between tenses and has not used any paragraphs.",
        },
        questions: [
          {
            id: "spg-qa-p3-q01",
            question: "The draft is meant to be written in the past tense. Identify four verbs that slip into the present tense and give the correct past-tense form of each.",
            marks: 4,
            hint: "Check the first two sentences and the second-to-last sentence.",
            modelAnswer: "'realise' should be 'realised'; 'is' (my phone is gone) should be 'was'; 'check' should be 'checked'; and 'walks' (my mum walks in) should be 'walked'. Keeping the whole narrative in the past tense stops the reader being jolted between time frames.",
            markScheme: [
              { point: "realise → realised", keywords: ["realised", "realized", "realise should be", "realise to realised"] },
              { point: "is → was", keywords: ["was gone", "is should be was", "is to was", "phone was"] },
              { point: "check → checked", keywords: ["checked", "i checked", "checked every", "check should be"] },
              { point: "walks → walked", keywords: ["walked", "mum walked", "walked in", "walks should be"] },
            ],
            commonError: "Changing 'had been' at the end, which is correct: the past perfect shows the phone was in the car before Mum found it.",
            guideRef: "tense-agreement-voice",
          },
          {
            id: "spg-qa-p3-q02",
            question: "Using TiPToP, explain where at least four new paragraphs should begin in the draft, and why.",
            marks: 4,
            hint: "Look for new speakers, a change of place and a jump in time.",
            modelAnswer: "A new paragraph should start at 'I ran back to the station' because the place changes. Another should start at “What colour?” he said, because a new person speaks. Another at “Blue, with a cracked screen,” I replied, because the speaker changes again (and 'He shook his head' can stay with it or start its own line as the man reacts). Finally, 'Two hours later, back at home' needs a new paragraph because both time and place change.",
            markScheme: [
              { point: "New paragraph for a change of place (running back to the station)", keywords: ["place", "station", "ran back", "location"] },
              { point: "New paragraph for the man speaking (new speaker)", keywords: ["what colour", "new speaker", "the man", "he said", "person"] },
              { point: "New paragraph for the narrator's reply (speaker changes again)", keywords: ["blue, with", "i replied", "replied", "speaker changes", "each speaker"] },
              { point: "New paragraph for the time jump 'Two hours later'", keywords: ["two hours later", "time", "later", "back at home"] },
            ],
            commonError: "Starting new paragraphs at random every two sentences instead of at genuine changes of time, place, topic or person.",
            guideRef: "paragraphing-tiptop",
          },
          {
            id: "spg-qa-p3-q03",
            question: "Correct this sentence and explain the error: 'The list of rules on the wall are confusing.'",
            marks: 3,
            hint: "What is the real subject of the sentence?",
            modelAnswer: "The list of rules on the wall is confusing. The subject is 'list', which is singular, so it needs the singular verb 'is'. 'Of rules' and 'on the wall' are prepositional phrases that describe the list; they do not change the subject, even though the plural word 'rules' sits nearer to the verb.",
            markScheme: [
              { point: "Correct version uses 'is'", keywords: ["list of rules on the wall is", "is confusing", "should be is", "change are to is"] },
              { point: "Identifies 'list' as the singular subject", keywords: ["list is the subject", "subject is list", "singular", "the list"] },
              { point: "Explains 'of rules' is a phrase that does not change the subject", keywords: ["prepositional phrase", "of rules", "describes the list", "not the subject", "phrase"] },
            ],
            commonError: "Agreeing the verb with 'rules' or 'wall' because they are closer to it.",
            guideRef: "tense-agreement-voice",
          },
          {
            id: "spg-qa-p3-q04",
            question: "Rewrite in Standard English and name each change: 'We was well tired after the game and I done nothing all evening.'",
            marks: 3,
            hint: "Look for a verb agreement error, an informal intensifier and a non-standard past tense.",
            modelAnswer: "We were very tired after the game, and I did nothing all evening. 'We was' becomes 'We were' because a plural subject needs a plural verb. 'Well tired' is informal, so 'well' becomes 'very' (or 'extremely'). 'I done' is a non-standard past tense, so it becomes 'I did' (or 'I had done').",
            markScheme: [
              { point: "we was → we were", keywords: ["we were", "were", "we was should be", "plural verb"] },
              { point: "well tired → very / extremely tired", keywords: ["very tired", "extremely tired", "really tired", "exhausted", "informal"] },
              { point: "I done → I did / I had done", keywords: ["i did", "did nothing", "had done", "i'd done"] },
            ],
            commonError: "Fixing 'done' to 'have done' but leaving 'we was' unchanged.",
            guideRef: "tense-agreement-voice",
          },
          {
            id: "spg-qa-p3-q05",
            question: "Change 'The cat knocked over the vase.' into the passive voice. Explain how the focus of the sentence changes.",
            marks: 3,
            hint: "Make the vase the subject and use a form of 'be' + past participle.",
            modelAnswer: "The vase was knocked over (by the cat). In the active version the cat is the subject, so the focus is on who did the action. In the passive version the vase becomes the subject, so the focus moves to what happened to the vase, and the cat can be left out entirely, making the doer less important.",
            markScheme: [
              { point: "Correct passive: 'The vase was knocked over (by the cat)'", keywords: ["vase was knocked over", "was knocked over", "vase was knocked", "knocked over by the cat"] },
              { point: "Active focuses on the doer (the cat)", keywords: ["cat is the subject", "who did it", "the doer", "focus on the cat", "agent"] },
              { point: "Passive focuses on the vase / what happened; doer can be omitted", keywords: ["focus on the vase", "vase becomes the subject", "what happened", "left out", "omitted", "receiver"] },
            ],
            commonError: "Writing 'The vase knocked over the cat', which simply swaps the nouns and changes the meaning.",
            guideRef: "tense-agreement-voice",
          },
          {
            id: "spg-qa-p3-q06",
            question: "Explain why science reports often use the passive voice, for example 'The solution was heated to 60 °C.'",
            marks: 3,
            hint: "Does it matter who heated the solution?",
            modelAnswer: "In a science report the important thing is the process and the result, not the person who did it, so the passive keeps the focus on the substance and the method. Leaving out the doer also makes the writing sound impersonal and objective, as if anyone repeating the experiment would get the same result. This creates the formal register expected in scientific writing.",
            markScheme: [
              { point: "Focus is on the process / object, not the person", keywords: ["process", "method", "focus on the solution", "what was done", "experiment"] },
              { point: "The doer is unimportant or left out", keywords: ["doer", "who did it", "not important", "unimportant", "left out", "person doesn't matter"] },
              { point: "Creates an objective, impersonal or formal tone", keywords: ["objective", "impersonal", "formal", "scientific", "neutral"] },
            ],
            commonError: "Saying the passive is used because the experiment happened in the past; tense and voice are different things.",
            guideRef: "tense-agreement-voice",
          },
          {
            id: "spg-qa-p3-q07",
            question: "A politician says, 'Mistakes were made.' Explain how the passive voice can be used to avoid blame.",
            marks: 3,
            hint: "Who made the mistakes?",
            modelAnswer: "'Mistakes were made' is a passive sentence with no agent: it does not say who made the mistakes. By leaving out the doer, the speaker admits something went wrong without accepting personal responsibility. This can sound evasive or dishonest, which is why critics such as George Orwell warned against vague passive language.",
            markScheme: [
              { point: "Identifies that the doer / agent is missing", keywords: ["doesn't say who", "does not say who", "no agent", "doer", "who made"] },
              { point: "Explains this avoids responsibility or blame", keywords: ["responsibility", "blame", "avoid", "not admit", "escape"] },
              { point: "Comments on effect: evasive, vague, dishonest", keywords: ["evasive", "vague", "dishonest", "hiding", "sneaky", "slippery"] },
            ],
            commonError: "Just stating 'it is passive' without explaining what is hidden and why.",
            guideRef: "tense-agreement-voice",
          },
          {
            id: "spg-qa-p3-q08",
            question: "Explain why 'I could of helped' is incorrect and why people make this mistake.",
            marks: 3,
            hint: "Say the contraction 'could've' aloud.",
            modelAnswer: "The correct form is 'I could have helped': the modal verb 'could' is followed by the auxiliary verb 'have' and the past participle 'helped'. People write 'could of' because the spoken contraction 'could've' sounds exactly like 'could of'. But 'of' is a preposition, not a verb, so it cannot do the job of 'have'.",
            markScheme: [
              { point: "Correct form is 'could have'", keywords: ["could have", "could've", "could’ve", "should be have"] },
              { point: "Explains the mistake comes from the sound of 'could've'", keywords: ["sounds like", "sound the same", "pronounced", "contraction", "when spoken"] },
              { point: "'of' is a preposition, not a verb", keywords: ["preposition", "not a verb", "isn't a verb", "of is not"] },
            ],
            commonError: "Correcting it to 'could've of', which still contains the error.",
            guideRef: "tense-agreement-voice",
          },
          {
            id: "spg-qa-p3-q09",
            question: "Which is correct: 'between you and I' or 'between you and me'? Explain the rule and give a test you can use.",
            marks: 3,
            hint: "'Between' is a preposition.",
            modelAnswer: "'Between you and me' is correct. 'Between' is a preposition, and a pronoun after a preposition must be in the object form ('me'), not the subject form ('I'). A useful test is to remove the other person: you would say 'between us' or 'to me', never 'to I'. In contrast, as the subject of a verb you use 'I': 'You and I should talk.'",
            markScheme: [
              { point: "Identifies 'between you and me' as correct", keywords: ["between you and me", "you and me is correct", "me is correct", "me is right"] },
              { point: "Explains: after a preposition use the object pronoun", keywords: ["preposition", "object", "object pronoun", "after between"] },
              { point: "Gives a test (remove the other person)", keywords: ["remove", "take away", "take out", "to me", "test", "on its own"] },
            ],
            commonError: "Using 'I' everywhere because it 'sounds more correct', even after prepositions.",
            guideRef: "tense-agreement-voice",
          },
          {
            id: "spg-qa-p3-q10",
            question: "Give four discourse markers that could open paragraphs in a discursive essay, each with a different job: adding, contrasting, cause and effect, and sequencing.",
            marks: 4,
            hint: "Think 'Furthermore', 'However', 'Therefore', 'Finally'.",
            modelAnswer: "Adding: 'Furthermore' (or 'Moreover', 'In addition'). Contrasting: 'However' (or 'On the other hand', 'Conversely'). Cause and effect: 'Consequently' (or 'Therefore', 'As a result'). Sequencing: 'Firstly' (or 'Subsequently', 'Finally').",
            markScheme: [
              { point: "An adding marker", keywords: ["furthermore", "moreover", "in addition", "additionally", "also"] },
              { point: "A contrasting marker", keywords: ["however", "on the other hand", "conversely", "nevertheless", "in contrast"] },
              { point: "A cause-and-effect marker", keywords: ["therefore", "consequently", "as a result", "thus", "hence"] },
              { point: "A sequencing marker", keywords: ["firstly", "finally", "subsequently", "secondly", "lastly", "to begin with"] },
            ],
            commonError: "Using 'and' or 'but' to open every paragraph, which sounds informal in a discursive essay.",
            guideRef: "paragraphing-tiptop",
          },
          {
            id: "spg-qa-p3-q11",
            extract: "For three days we waited by the phone, jumping every time it buzzed, inventing reasons, telling ourselves that tomorrow, surely, there would be news.\n\nShe never came back.",
            question: "Explain the effect of placing 'She never came back.' as a one-sentence paragraph.",
            marks: 4,
            hint: "Think about white space, contrast and finality.",
            modelAnswer: "The writer isolates 'She never came back.' in its own paragraph after a long, list-like sentence full of hope and activity. The white space around it forces the reader to pause, giving the line great weight. Its short, simple structure contrasts with the breathless waiting before it, so the hope collapses suddenly. The word 'never' adds finality, and separating the sentence physically mirrors the permanent separation from the character, making the moment shocking and emotional.",
            markScheme: [
              { point: "Identifies the one-sentence paragraph / isolation / white space", keywords: ["one-sentence paragraph", "own paragraph", "isolated", "white space", "on its own", "stands alone"] },
              { point: "Contrast with the long previous sentence", keywords: ["contrast", "long sentence", "list", "after a long", "breathless"] },
              { point: "Creates emphasis / forces a pause", keywords: ["emphasis", "pause", "weight", "emphasises", "stops the reader", "impact"] },
              { point: "Effect on reader: shock, finality, loss, grief", keywords: ["shock", "final", "finality", "loss", "grief", "sadness", "permanent"] },
            ],
            commonError: "Only commenting on the shortness of the sentence and ignoring the effect of giving it its own paragraph.",
            guideRef: "paragraphing-tiptop",
          },
          {
            id: "spg-qa-p3-q12",
            question: "George Orwell advised: 'Never use the passive where you can use the active.' Is this always good advice? Evaluate, with examples.",
            marks: 5,
            hint: "Give the case for the rule, the case against it, and reach a judgement.",
            modelAnswer: "Orwell's rule is usually sensible. Active sentences are clearer, shorter and more direct ('The council closed the library' rather than 'The library was closed'), and they show who is responsible. The passive can be used to hide responsibility ('Mistakes were made'), which Orwell saw as dishonest. However, the passive is genuinely useful when the doer is unknown or unimportant ('My bike was stolen'), in science reports where the process matters more than the person ('The solution was heated'), and in stories to build suspense or shift focus ('The door was opened from the inside'). So the best advice is to prefer the active by default but choose the passive deliberately when it serves a purpose.",
            markScheme: [
              { point: "Active is clearer, more direct or shorter", keywords: ["clearer", "direct", "shorter", "concise", "easier to read"] },
              { point: "Passive can hide responsibility", keywords: ["hide", "responsibility", "blame", "evasive", "dishonest", "mistakes were made"] },
              { point: "Passive is useful when the doer is unknown or unimportant", keywords: ["unknown", "unimportant", "don't know who", "doesn't matter who", "was stolen"] },
              { point: "Passive is useful in science, formal writing or for suspense/focus", keywords: ["science", "scientific", "formal", "suspense", "focus", "experiment"] },
              { point: "Reaches a balanced judgement", keywords: ["overall", "therefore", "in conclusion", "by default", "deliberately", "usually but"] },
            ],
            commonError: "Agreeing completely without considering the legitimate uses of the passive.",
            guideRef: "tense-agreement-voice",
          },
        ],
      },
      {
        id: "spg-qa-p4",
        title: "Written Paper 4",
        questions: [
          {
            id: "spg-qa-p4-q01",
            question: "Use your knowledge of roots to work out the meanings of 'benefactor' and 'malediction'. Show how each word breaks down.",
            marks: 4,
            hint: "bene = good; mal = bad; fact = do or make; dict = say.",
            modelAnswer: "'Benefactor' = bene (good, well) + fact (do, make) + -or (a person who), so a benefactor is someone who does good, especially by giving money or help. 'Malediction' = male (badly, evil) + dict (say, speak) + -ion (noun), so a malediction is an evil saying: a curse.",
            markScheme: [
              { point: "bene = good / well", keywords: ["bene", "good", "well", "benefit"] },
              { point: "Benefactor = person who does good / gives help or money", keywords: ["does good", "helps", "gives money", "donor", "supporter", "gives help"] },
              { point: "mal = bad / evil; dict = say", keywords: ["mal", "bad", "evil", "dict", "say", "speak"] },
              { point: "Malediction = a curse / evil words", keywords: ["curse", "evil words", "saying bad", "bad words", "wishing harm", "speaking evil"] },
            ],
            commonError: "Guessing from the sound of the word rather than breaking it into its parts.",
            guideRef: "vocabulary-register",
          },
          {
            id: "spg-qa-p4-q02",
            question: "'Stubborn' and 'determined' can describe the same behaviour. Explain the difference in their connotations.",
            marks: 3,
            hint: "Which word would you use about yourself, and which about someone annoying you?",
            modelAnswer: "Both words describe someone who refuses to give up. 'Determined' has positive connotations: it suggests admirable willpower and focus on a worthwhile goal. 'Stubborn' has negative connotations: it suggests being unreasonable and refusing to change even when you should. So a writer's choice between them reveals their attitude towards the person.",
            markScheme: [
              { point: "Both mean refusing to give up / persisting", keywords: ["refuse to give up", "won't give up", "persist", "same behaviour", "keep going", "not give in"] },
              { point: "'Determined' is positive", keywords: ["determined is positive", "positive", "admirable", "praise", "good quality"] },
              { point: "'Stubborn' is negative / unreasonable", keywords: ["stubborn is negative", "negative", "unreasonable", "annoying", "won't listen", "criticism"] },
            ],
            commonError: "Saying the words simply 'mean the same', missing the point about the writer's attitude.",
            guideRef: "vocabulary-register",
          },
          {
            id: "spg-qa-p4-q03",
            question: "A character storms out of a room in anger. Choose the best verb from 'strolled', 'ambled', 'stomped' and 'wandered'. Explain your choice and why one other option would be wrong.",
            marks: 3,
            hint: "Which word sounds heavy and loud?",
            modelAnswer: "'Stomped' is the best choice. It suggests heavy, loud, forceful steps, so the reader can almost hear the character's anger in the way they walk. 'Strolled' would be wrong because it connotes a relaxed, leisurely walk, which contradicts the character's fury.",
            markScheme: [
              { point: "Chooses 'stomped'", keywords: ["stomped", "stomp", "i would choose stomped", "best verb is stomped"] },
              { point: "Explains connotations: heavy, loud, forceful, angry", keywords: ["heavy", "loud", "forceful", "aggressive", "angry", "noisy"] },
              { point: "Explains why another option (e.g. strolled/ambled/wandered) suggests calm or aimlessness", keywords: ["relaxed", "leisurely", "calm", "aimless", "slow", "casual"] },
            ],
            commonError: "Choosing the right verb but not explaining the connotations that make it right.",
            guideRef: "vocabulary-register",
          },
          {
            id: "spg-qa-p4-q04",
            question: "Rewrite this message in a formal register and explain four of your changes: 'Hey Mr Lee, can't come to footie cos I'm sick, sorry!!'",
            marks: 4,
            hint: "Think greeting, contractions, slang and punctuation.",
            modelAnswer: "Dear Mr Lee,\nI am afraid that I will not be able to attend football practice today because I am unwell. I apologise for any inconvenience.\nYours sincerely,\nRavi\n\nChanges: 'Hey' becomes the formal greeting 'Dear'; contractions ('can't', 'I'm') are written in full; slang and abbreviations ('footie', 'cos') become 'football practice' and 'because'; and the double exclamation marks are replaced by a polite, complete apology sentence.",
            markScheme: [
              { point: "Formal greeting (Dear Mr Lee) instead of 'Hey'", keywords: ["dear mr lee", "dear", "greeting", "instead of hey"] },
              { point: "Removes contractions", keywords: ["contraction", "i am", "cannot", "will not", "full form"] },
              { point: "Replaces slang / abbreviations ('footie', 'cos')", keywords: ["football", "because", "slang", "abbreviation", "footie"] },
              { point: "Replaces exclamation marks with a polite formal apology / sign-off", keywords: ["apologise", "exclamation", "yours sincerely", "polite", "inconvenience"] },
            ],
            commonError: "Keeping 'sorry!!' or a contraction in an otherwise formal message.",
            guideRef: "vocabulary-register",
          },
          {
            id: "spg-qa-p4-q05",
            question: "What is Standard English, and why is it expected in exam essays?",
            marks: 3,
            hint: "Think about who needs to understand the writing.",
            modelAnswer: "Standard English is the widely shared variety of English with agreed grammar, vocabulary and spelling, used in formal writing, news, education and official documents. It is not tied to one region or accent. It is expected in exams because it can be understood by any reader anywhere, it shows control of formal conventions, and examiners are assessing your ability to write accurately for a formal audience.",
            markScheme: [
              { point: "Defines Standard English as the shared, formal variety with agreed grammar", keywords: ["shared", "agreed", "formal", "widely understood", "not regional", "grammar"] },
              { point: "Understood by any reader / universal", keywords: ["understood", "anyone", "everyone", "universal", "anywhere", "international"] },
              { point: "Exams assess accuracy and formal register", keywords: ["accuracy", "accurate", "assess", "formal audience", "examiners", "mark scheme"] },
            ],
            commonError: "Saying Standard English means using long, posh words. It is about grammar and conventions, not fancy vocabulary.",
            guideRef: "vocabulary-register",
          },
          {
            id: "spg-qa-p4-q06",
            question: "Explain what code-switching is, and describe one situation where Singlish would be appropriate and one where Standard English would be expected.",
            marks: 4,
            hint: "Think about audience and purpose.",
            modelAnswer: "Code-switching means moving between different varieties of language depending on the situation, audience and purpose. Singlish would be appropriate when chatting with friends at a hawker centre, where it signals friendliness and shared identity, or in a story to give a Singaporean character an authentic voice. Standard English would be expected in a formal exam essay or a letter to a school principal, where the reader expects formal, widely understood language.",
            markScheme: [
              { point: "Defines code-switching", keywords: ["switching", "moving between", "change between", "different varieties", "depending on"] },
              { point: "Appropriate situation for Singlish (informal, friends, family, character voice)", keywords: ["friends", "family", "informal", "hawker", "chatting", "character"] },
              { point: "Situation needing Standard English (exam, formal letter, interview)", keywords: ["exam", "essay", "formal letter", "interview", "principal", "teacher"] },
              { point: "Links choice to audience and purpose / identity", keywords: ["audience", "purpose", "identity", "belonging", "context", "situation"] },
            ],
            commonError: "Implying that Singlish is always wrong, rather than explaining that the choice depends on context.",
            guideRef: "vocabulary-register",
          },
          {
            id: "spg-qa-p4-q07",
            question: "Write one sentence using 'affect' and one using 'effect' correctly, and explain the difference.",
            marks: 3,
            hint: "RAVEN.",
            modelAnswer: "The heat began to affect my concentration. The new rule had an immediate effect on behaviour. 'Affect' is usually a verb meaning to influence something; 'effect' is usually a noun meaning a result. A good test is that you can put 'an' or 'the' in front of 'effect'.",
            markScheme: [
              { point: "Correct sentence using affect as a verb", keywords: ["affect my", "affects", "affected", "to affect", "will affect"] },
              { point: "Correct sentence using effect as a noun", keywords: ["an effect", "the effect", "effect on", "effects of"] },
              { point: "Explains affect = verb, effect = noun", keywords: ["verb", "noun", "raven", "influence", "result"] },
            ],
            commonError: "Writing 'effected' when you mean 'influenced'.",
            guideRef: "vocabulary-register",
          },
          {
            id: "spg-qa-p4-q08",
            question: "Explain the difference between 'practice' and 'practise' in British English, using the advice/advise pattern to help.",
            marks: 3,
            hint: "Which one is a thing, and which one is something you do?",
            modelAnswer: "In British English, 'practice' with a c is the noun ('football practice') and 'practise' with an s is the verb ('I practise every day'). The same pattern appears in 'advice' (noun) and 'advise' (verb), where you can also hear the difference. So if you can say 'advice' in the sentence, use the c spelling; if 'advise' fits, use the s spelling.",
            markScheme: [
              { point: "practice = noun", keywords: ["practice is a noun", "practice is the noun", "noun", "c is the noun"] },
              { point: "practise = verb", keywords: ["practise is a verb", "practise is the verb", "verb", "s is the verb"] },
              { point: "Uses the advice/advise pattern correctly", keywords: ["advice", "advise", "same pattern", "like advice"] },
            ],
            commonError: "Using the American spelling 'practice' for the verb in a British English essay.",
            guideRef: "vocabulary-register",
          },
          {
            id: "spg-qa-p4-q09",
            question: "Explain how the prefix changes the meaning in each word: misunderstand, disagree, rewrite, preview.",
            marks: 4,
            hint: "mis-, dis-, re-, pre-.",
            modelAnswer: "'Mis-' means wrongly, so misunderstand means to understand wrongly. 'Dis-' means not or the opposite of, so disagree means not to agree. 'Re-' means again, so rewrite means to write again. 'Pre-' means before, so preview means to see before (something is released or happens).",
            markScheme: [
              { point: "mis- = wrongly", keywords: ["wrongly", "wrong", "incorrectly", "badly"] },
              { point: "dis- = not / opposite", keywords: ["not", "opposite", "reverse", "negative"] },
              { point: "re- = again", keywords: ["again", "once more", "repeat", "a second time"] },
              { point: "pre- = before", keywords: ["before", "in advance", "earlier", "ahead"] },
            ],
            commonError: "Explaining what the whole word means without isolating what the prefix adds.",
            guideRef: "vocabulary-register",
          },
          {
            id: "spg-qa-p4-q10",
            question: "Use suffixes to change word class: turn 'happy' into a noun and an adverb, 'decide' into a noun, and 'beauty' into an adjective.",
            marks: 4,
            hint: "-ness, -ly, -sion, -ful. Watch the spelling changes.",
            modelAnswer: "happy → happiness (noun); happy → happily (adverb); decide → decision (noun); beauty → beautiful (adjective). Notice that the y changes to i before the suffix in happiness, happily and beautiful.",
            markScheme: [
              { point: "happiness", keywords: ["happiness", "happiness (noun)", "noun: happiness", "happy to happiness"] },
              { point: "happily", keywords: ["happily", "happily (adverb)", "adverb: happily", "happy to happily"] },
              { point: "decision", keywords: ["decision", "decision (noun)", "noun: decision", "decide to decision"] },
              { point: "beautiful", keywords: ["beautiful", "beautiful (adjective)", "adjective: beautiful", "beauty to beautiful"] },
            ],
            commonError: "Spelling errors such as 'happyness' or 'beautyful': y changes to i before most suffixes.",
            guideRef: "vocabulary-register",
          },
          {
            id: "spg-qa-p4-q11",
            question: "'Singlish is just bad English.' Discuss this view, considering more than one side.",
            marks: 6,
            hint: "Rules, identity, borrowed words, audience, exams, code-switching: then reach a judgement.",
            modelAnswer: "Some people call Singlish 'bad English' because it does not follow the grammar of Standard English and could confuse readers from outside Singapore; the government's Speak Good English Movement, launched in 2000, reflects this worry about international communication and exam success. However, linguists point out that Singlish is not random: it is a rule-governed variety with its own consistent grammar and particles such as 'lah' and 'lor'. It also draws richly on Singapore's many languages, borrowing words such as 'makan' from Malay and 'kiasu' from Hokkien, so it reflects the country's multicultural history. For many Singaporeans it expresses identity and belonging in a way Standard English cannot. The real issue is context: Singlish suits informal conversation, while Standard English is needed for exams and formal or international writing. Overall, Singlish is not 'bad English' but a different variety, and the most skilled speakers can code-switch between the two.",
            markScheme: [
              { point: "Presents the view that it causes problems (exams, international communication)", keywords: ["international", "misunderstood", "confuse", "exams", "speak good english", "outside singapore"] },
              { point: "Explains it is rule-governed / has its own grammar", keywords: ["rule-governed", "rules", "own grammar", "consistent", "not random", "system"] },
              { point: "Gives examples of borrowings or particles", keywords: ["lah", "lor", "makan", "kiasu", "shiok", "malay", "hokkien"] },
              { point: "Links to identity, culture or belonging", keywords: ["identity", "culture", "belonging", "multicultural", "heritage", "community"] },
              { point: "Discusses context, register or code-switching", keywords: ["context", "register", "code-switch", "code switching", "informal", "situation"] },
              { point: "Reaches a reasoned conclusion", keywords: ["overall", "in conclusion", "therefore", "ultimately", "on balance"] },
            ],
            commonError: "Writing a one-sided answer, or treating 'formal' and 'correct' as the same thing.",
            guideRef: "vocabulary-register",
          },
          {
            id: "spg-qa-p4-q12",
            question: "Compare the headlines 'Government slashes school budget' and 'Government reduces school budget'. Explain how the choice of verb can reveal bias.",
            marks: 4,
            hint: "What image does 'slashes' create?",
            modelAnswer: "'Slashes' has violent connotations, suggesting a sudden, brutal and damaging cut, as if made with a knife. 'Reduces' is neutral and factual, simply stating that the budget is smaller. By choosing 'slashes', the writer reveals a critical attitude towards the government and encourages readers to feel angry or alarmed, whereas 'reduces' leaves readers to form their own opinion. So a single verb can make a report biased even when the facts are the same.",
            markScheme: [
              { point: "'Slashes' has violent / dramatic / negative connotations", keywords: ["violent", "knife", "brutal", "dramatic", "sudden", "aggressive"] },
              { point: "'Reduces' is neutral / factual", keywords: ["neutral", "factual", "objective", "unbiased", "plain"] },
              { point: "The verb reveals the writer's attitude or bias", keywords: ["bias", "biased", "attitude", "opinion", "critical", "viewpoint"] },
              { point: "Explains the effect on the reader", keywords: ["reader", "angry", "alarmed", "persuade", "influence", "feel"] },
            ],
            commonError: "Saying both mean the same thing without exploring connotation and effect.",
            guideRef: "vocabulary-register",
          },
        ],
      },
    ],
  },
};
