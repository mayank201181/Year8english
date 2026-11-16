import type { TopicExtras } from "../types";

// Engagement extras for Grammar, Punctuation & Vocabulary.
export const spagExtras: TopicExtras = {
  interactive: "sentence-mixer",
  hook:
    "“Let's eat, Grandma!” and “Let's eat Grandma!” contain exactly the same words. One is an invitation to dinner; the other is a crime. Everything that separates them is a single comma.",
  didYouKnow: [
    "The semicolon is usually credited to the Venetian printer Aldus Manutius, who used it in books he printed in the 1490s, more than 500 years ago.",
    "In 2017 a US appeals court case about overtime pay for dairy delivery drivers in Maine turned on a missing Oxford comma in state law; the dairy later agreed to a $5 million settlement.",
    "The word 'nice' once meant 'foolish' or 'ignorant'. It comes from the Latin 'nescius', meaning 'not knowing', and has changed its meaning several times over the centuries.",
    "The Oxford English Dictionary includes Singapore English words such as 'kiasu' (afraid of losing out), 'shiok' (delicious or wonderful) and 'lepak' (to loaf around).",
    "The word 'ampersand' comes from schoolchildren reciting the alphabet: after Z they said '& per se and', meaning '& by itself is and', which slurred into 'ampersand'.",
    "In 1962 an American advertising executive, Martin Speckter, invented the 'interrobang' (‽), a question mark and exclamation mark combined, for sentences like 'You did WHAT‽'. It never quite caught on.",
  ],
  experiments: [
    {
      title: "The comma that changes everything",
      emoji: "✏️",
      materials: ["Paper or index cards", "A pen", "Two or three family members or friends"],
      steps: [
        "Write these pairs on cards: 'Let's eat, Grandma!' / 'Let's eat Grandma!'; 'A woman, without her man, is nothing.' / 'A woman: without her, man is nothing.'; 'The students, who had revised, passed.' / 'The students who had revised passed.'",
        "Show each pair to someone and ask them to explain, in their own words, what each version means.",
        "Now invent two pairs of your own in which moving or adding ONE punctuation mark changes the meaning.",
        "Test your pairs on your audience. Score a point for every pair where they spot the difference.",
      ],
      science:
        "Punctuation is part of grammar, not decoration. Commas of direct address, commas around non-defining clauses and colons all tell the reader how the words relate to each other. Inventing your own examples forces you to understand the rule well enough to exploit it, which is the best way to remember it.",
    },
    {
      title: "Sentence-length heartbeat",
      emoji: "📈",
      materials: ["A favourite novel or short story", "Squared paper or a spreadsheet", "A pencil"],
      steps: [
        "Choose a tense or exciting page from the book.",
        "Count the number of words in each sentence and write the counts down in order.",
        "Plot them as a bar chart: sentence number along the bottom, word count up the side.",
        "Mark where the most dramatic moment happens. What happens to the sentence lengths just before and at that point?",
        "Now plot a page of your own writing. Is your 'heartbeat' flat? Rewrite one paragraph to give it peaks and dips.",
      ],
      science:
        "Skilled writers vary sentence length to control pace. Long sentences slow the reader and build detail; a sudden short sentence after a long one creates a jolt. Seeing the pattern as a graph makes this hidden structure visible, and a flat graph is a sign that your own writing needs more variety.",
    },
    {
      title: "Etymology detective",
      emoji: "🔍",
      materials: ["Your science, maths or geography textbook", "A dictionary or online etymology dictionary", "A notebook"],
      steps: [
        "Find ten long or technical words in your textbook (for example photosynthesis, geography, perimeter, microscope).",
        "Before looking anything up, split each word into prefix, root and suffix and guess what each part means.",
        "Check your guesses in a dictionary that shows word origins.",
        "Make a 'root family' page: for each root, list three more words that contain it (e.g. graph: autograph, paragraph, graphic).",
      ],
      science:
        "A large share of academic English comes from Latin and Greek roots. Learning a root once lets you decode dozens of unfamiliar words, which helps in every subject and in comprehension tasks where you must work out vocabulary from context.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Four sentence types at a glance",
      svg:
        '<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Formulas for simple, compound, complex and minor sentences with examples"><rect x="10" y="10" width="285" height="100" rx="8" fill="#dbeafe" stroke="#1d4ed8"/><text x="152" y="34" font-size="14" font-weight="bold" text-anchor="middle" fill="#1d4ed8">Simple</text><text x="152" y="58" font-size="12" text-anchor="middle" fill="#1e3a8a">one main clause</text><text x="152" y="86" font-size="12" text-anchor="middle" fill="#1e3a8a">The wolf howled.</text><rect x="305" y="10" width="285" height="100" rx="8" fill="#dcfce7" stroke="#15803d"/><text x="447" y="34" font-size="14" font-weight="bold" text-anchor="middle" fill="#15803d">Compound</text><text x="447" y="58" font-size="12" text-anchor="middle" fill="#14532d">main + FANBOYS (or ;) + main</text><text x="447" y="86" font-size="12" text-anchor="middle" fill="#14532d">I knocked, but nobody answered.</text><rect x="10" y="120" width="285" height="100" rx="8" fill="#fef3c7" stroke="#b45309"/><text x="152" y="144" font-size="14" font-weight="bold" text-anchor="middle" fill="#b45309">Complex</text><text x="152" y="168" font-size="12" text-anchor="middle" fill="#78350f">main + subordinate clause</text><text x="152" y="196" font-size="12" text-anchor="middle" fill="#78350f">Although I knocked, nobody came.</text><rect x="305" y="120" width="285" height="100" rx="8" fill="#fce7f3" stroke="#be185d"/><text x="447" y="144" font-size="14" font-weight="bold" text-anchor="middle" fill="#be185d">Minor</text><text x="447" y="168" font-size="12" text-anchor="middle" fill="#831843">no main verb</text><text x="447" y="196" font-size="12" text-anchor="middle" fill="#831843">Silence. What a night!</text></svg>',
      caption: "Sentence types are defined by their clauses, not their length. Choose each one for its effect.",
    },
  ],
};
