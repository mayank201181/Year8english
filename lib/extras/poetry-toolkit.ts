import type { TopicExtras } from "../types";

// Engagement extras for How Poems Work.
export const poetryToolkitExtras: TopicExtras = {
  interactive: "device-spotter",
  hook: "A six-line poem about a bird can make you feel the height of a mountain and the speed of a lightning strike, using fewer than forty words. How can so few words do so much? Every one of them is a tool, and by the end of this topic you will know exactly what each tool does.",
  didYouKnow: [
    "The word 'stanza' comes from Italian, where it means 'room' or 'stopping place', so a poem's stanzas are like the rooms of a house you walk through.",
    "Shakespeare's sonnets, all 154 of them, were published together in 1609. Almost all are written in iambic pentameter, the same da-DUM heartbeat he used for most of the verse in his plays.",
    "Emily Dickinson wrote nearly 1,800 poems, but only around ten were published in her lifetime. Her sister Lavinia discovered the rest after Emily's death in 1886.",
    "William Blake did not just write 'The Tyger': he engraved and printed the pages of Songs of Innocence and of Experience himself, and he and his wife Catherine hand-coloured them, so every original copy is slightly different.",
    "Wordsworth's 'Daffodils' grew from a real walk in April 1802. His sister Dorothy described the same daffodils in her journal, writing that they 'danced' and seemed as if they 'laughed with the wind', two years before he wrote the poem.",
    "'Volta' is the Italian word for 'turn'. It comes from the Petrarchan sonnet, named after the 14th-century Italian poet Francesco Petrarca (Petrarch), who made the form famous.",
  ],
  experiments: [
    {
      title: "Device detective: song lyric edition",
      emoji: "🎧",
      materials: [
        "The lyrics of two favourite songs (printed or on screen)",
        "Three coloured highlighters or pens",
        "A notebook",
      ],
      steps: [
        "Choose two songs with very different moods (for example, one upbeat and one sad).",
        "Highlight imagery (similes, metaphors, personification) in one colour, sound devices (alliteration, rhyme, onomatopoeia) in a second colour, and repetition or refrain in a third.",
        "Label the rhyme scheme of one verse with letters (ABAB, AABB and so on).",
        "Pick the single most powerful line in each song and write a sentence explaining its EFFECT, not just its technique.",
        "Compare: which song uses more sound devices, and does that match its mood?",
      ],
      science:
        "Songwriters use exactly the same toolkit as poets: refrains are choruses, rhyme schemes organise verses, and sound devices make lines stick in your head. Practising on lyrics you already love trains you to hear techniques automatically, and writing about effect rather than just naming features is precisely the skill examiners reward.",
    },
    {
      title: "Read it three ways",
      emoji: "🎭",
      materials: [
        "A short poem from this topic (for example 'The Eagle' or the first stanza of 'Remember')",
        "A phone to record yourself (optional)",
        "A family member or friend as an audience",
      ],
      steps: [
        "Read the poem aloud three times, each in a different tone: (1) awed and amazed, (2) bitter or angry, (3) calm and tender.",
        "If you can, record each version and play them back.",
        "Ask your listener which version sounded most 'right' and why.",
        "Notice where you naturally paused: at line endings (end-stopping) or in the middle of lines (caesura)? Where did enjambment pull you on?",
        "Write three sentences on what the poem's punctuation, rhythm and word choices suggest the 'correct' tone is.",
      ],
      science:
        "Tone lives in the voice, so performing a poem reveals how the poet has built it. Some tones will feel wrong because the rhythm, punctuation and word choices resist them, which is evidence you can use in written and spoken analysis. This is excellent practice for the verbal poem analysis in Term 2.",
    },
    {
      title: "The one-word swap test",
      emoji: "🔁",
      materials: [
        "Any poem from this topic",
        "A pencil and paper",
        "A thesaurus (book or online)",
      ],
      steps: [
        "Choose five key words in the poem, e.g. 'perches', 'crawls', 'clasps', 'flash', 'snap'.",
        "For each, find a synonym and swap it in (e.g. 'The wrinkled sea beneath him moves').",
        "Read the changed line aloud next to the original.",
        "Write down exactly what has been lost: a sound, a connotation, a rhythm, an image?",
        "Rank your five words from 'most irreplaceable' to 'least' and justify your top choice.",
      ],
      science:
        "Swapping a word shows you its connotations and sound by their absence. 'Moves' is accurate but flat; 'crawls' brings age, weakness and slowness. Once you can say what a word does that its synonym cannot, you are analysing at the highest level, because you are explaining the poet's choice.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The poet's toolkit at a glance",
      svg: `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Six toolboxes: imagery, sound, rhythm, rhyme, form, structure, with examples of each">
  <rect x="0" y="0" width="480" height="250" fill="#ffffff"/>
  <text x="240" y="24" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="#1f2937">The poet's toolkit</text>
  <rect x="12" y="40" width="148" height="92" rx="8" fill="#dbeafe" stroke="#2563eb"/>
  <text x="86" y="60" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Imagery</text>
  <text x="86" y="80" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#1e3a8a">simile, metaphor</text>
  <text x="86" y="96" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#1e3a8a">personification</text>
  <text x="86" y="112" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#1e3a8a">symbol, semantic field</text>
  <rect x="166" y="40" width="148" height="92" rx="8" fill="#fef3c7" stroke="#d97706"/>
  <text x="240" y="60" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#78350f">Sound</text>
  <text x="240" y="80" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#78350f">alliteration, sibilance</text>
  <text x="240" y="96" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#78350f">assonance, consonance</text>
  <text x="240" y="112" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#78350f">onomatopoeia, plosives</text>
  <rect x="320" y="40" width="148" height="92" rx="8" fill="#dcfce7" stroke="#16a34a"/>
  <text x="394" y="60" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#14532d">Rhythm</text>
  <text x="394" y="80" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#14532d">iamb da-DUM</text>
  <text x="394" y="96" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#14532d">trochee DUM-da</text>
  <text x="394" y="112" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#14532d">tetrameter, pentameter</text>
  <rect x="12" y="142" width="148" height="92" rx="8" fill="#fce7f3" stroke="#db2777"/>
  <text x="86" y="162" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#831843">Rhyme</text>
  <text x="86" y="182" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#831843">full, half, internal</text>
  <text x="86" y="198" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#831843">scheme: ABAB, ABBA</text>
  <text x="86" y="214" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#831843">rhyming couplet</text>
  <rect x="166" y="142" width="148" height="92" rx="8" fill="#ede9fe" stroke="#7c3aed"/>
  <text x="240" y="162" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#4c1d95">Form</text>
  <text x="240" y="182" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#4c1d95">sonnet, ballad, ode</text>
  <text x="240" y="198" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#4c1d95">free verse, haiku</text>
  <text x="240" y="214" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#4c1d95">elegy, villanelle</text>
  <rect x="320" y="142" width="148" height="92" rx="8" fill="#e0f2fe" stroke="#0284c7"/>
  <text x="394" y="162" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#0c4a6e">Structure</text>
  <text x="394" y="182" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#0c4a6e">enjambment, caesura</text>
  <text x="394" y="198" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#0c4a6e">volta, refrain</text>
  <text x="394" y="214" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#0c4a6e">cyclical structure</text>
</svg>`,
      caption: "Six toolboxes. In every answer, pick a tool, quote it, and explain its effect.",
    },
  ],
};
