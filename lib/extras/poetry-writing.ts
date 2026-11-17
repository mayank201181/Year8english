import type { TopicExtras } from "../types";

// Engagement extras for Writing Poetry & Commentary.
export const poetryWritingExtras: TopicExtras = {
  interactive: "poem-forge",
  hook: "The most powerful poem you will ever write about who you are probably starts with something you could hold in one hand: a key, a bangle, a passport, the click of a rice cooker. Why does a tiny object often say more about identity than a whole page about 'culture'?",
  didYouKnow: [
    "The word 'sonnet' comes from the Italian 'sonetto', meaning 'little song'. The form is usually credited to Giacomo da Lentini, a poet at the Sicilian court of Emperor Frederick II in the 13th century.",
    "'Stanza' is the Italian word for 'room' — so when you add a stanza break, you are walking the reader into a new room of your poem.",
    "The pantoum began as the Malay pantun, a form of oral verse, before French writers in the 1800s adapted it. A poet in Singapore or Malaysia writing a pantoum is using a form with roots in their own region.",
    "Japanese haiku do not actually count syllables: they count sound units called 'on'. The English 5-7-5 syllable rule is an approximation, and many modern English haiku poets write even shorter lines.",
    "In a traditional ghazal the poet 'signs' the poem by placing their own name or pen-name (the takhallus) in the final couplet — rather like an artist painting their signature into the corner of the canvas.",
    "The word 'verse' comes from the Latin 'versus', meaning a turning — originally the turn of a plough at the end of a furrow, just as a line of poetry turns at the line break.",
  ],
  experiments: [
    {
      title: "The five-minute sound map of home",
      emoji: "👂",
      materials: [
        "A notebook and pen",
        "A timer",
        "A room at home where you spend a lot of time (the kitchen is ideal)",
      ],
      steps: [
        "Sit still in the room with your eyes closed and set a timer for five minutes.",
        "Write down EVERY sound you hear, however small: a fridge humming, a neighbour's door, a language on the radio, rain on a window.",
        "Next to each sound, write one word for the feeling it gives you (safe, bored, homesick, annoyed…).",
        "Circle the three sounds with the strongest feelings and write one line about each, using onomatopoeia where you can.",
        "Arrange the three lines into a short poem. Do NOT name the feelings: let the sounds carry them.",
      ],
      science:
        "Sound is the most underused sense in student poetry, yet it is closely tied to memory and belonging. By recording sounds first and feelings second, you train yourself to SHOW emotion through concrete detail instead of telling it. The final rule — do not name the feelings — forces you to trust your images, which is the heart of strong poetry writing.",
    },
    {
      title: "Interview an object",
      emoji: "🧳",
      materials: [
        "One object that matters to your family (a suitcase, photo, piece of jewellery, recipe card, old phone)",
        "A notebook and pen",
      ],
      steps: [
        "Hold or look closely at the object and describe it precisely: colour, weight, marks, smell, damage.",
        "Ask a family member what they remember about it and note any phrases they use.",
        "Write ten questions you would ask the object if it could talk (Where have you been? What have you seen? What do you wish we knew?).",
        "Answer the questions in the object's voice, in the first person.",
        "Shape your best answers into a dramatic monologue spoken by the object to its owner, ending on a request or a secret.",
      ],
      science:
        "Giving the voice to an object turns a family story into a dramatic monologue, where a single speaker addresses a silent listener. Objects make good speakers because they have 'witnessed' events without judging them, so they can reveal feelings indirectly. Interviewing a family member also gives you real, specific phrases that make the poem sound authentic.",
    },
    {
      title: "Line-break remix and family vote",
      emoji: "✂️",
      materials: [
        "A paragraph of prose you have written (or a sentence from a diary)",
        "Paper and scissors, or a computer",
        "Two or three family members as an audience",
      ],
      steps: [
        "Choose one or two sentences of your own prose about home or family.",
        "Lay them out as poetry in THREE different ways, breaking the lines in different places each time.",
        "Read each version aloud to your family, pausing slightly at every line break.",
        "Ask them which version they remember best and which word stood out most in each.",
        "Write a short note explaining which version you would choose for a poem, and why.",
      ],
      science:
        "Line breaks change which words the reader stresses and where they pause. Hearing three versions side by side shows you that the last word of a line gets the spotlight. Your written note is practice for the commentary, where you must justify your line-break choices and explain their effect.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The redrafting loop",
      svg: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Redrafting loop: generate, shape, cut, sharpen, listen, rest, then back to shape"><rect x="0" y="0" width="320" height="220" fill="#faf5ff"/><circle cx="160" cy="112" r="78" fill="none" stroke="#c4b5fd" stroke-width="2" stroke-dasharray="6 4"/><g font-size="12" text-anchor="middle" font-weight="bold"><rect x="112" y="16" width="96" height="28" rx="14" fill="#7c3aed"/><text x="160" y="35" fill="#ffffff">1 Generate</text><rect x="222" y="58" width="90" height="28" rx="14" fill="#6d28d9"/><text x="267" y="77" fill="#ffffff">2 Shape</text><rect x="222" y="138" width="90" height="28" rx="14" fill="#2563eb"/><text x="267" y="157" fill="#ffffff">3 Cut</text><rect x="112" y="178" width="96" height="28" rx="14" fill="#0891b2"/><text x="160" y="197" fill="#ffffff">4 Sharpen</text><rect x="8" y="138" width="90" height="28" rx="14" fill="#059669"/><text x="53" y="157" fill="#ffffff">5 Listen</text><rect x="8" y="58" width="90" height="28" rx="14" fill="#ca8a04"/><text x="53" y="77" fill="#ffffff">6 Rest</text></g><text x="160" y="106" font-size="12" text-anchor="middle" fill="#4c1d95">repeat until</text><text x="160" y="122" font-size="12" text-anchor="middle" fill="#4c1d95">every word earns</text><text x="160" y="138" font-size="12" text-anchor="middle" fill="#4c1d95">its place</text></svg>`,
      caption:
        "Poems are made in the loop, not the first draft: generate, shape, cut, sharpen, read aloud, rest — then go round again. Note each change for your commentary.",
    },
  ],
};
