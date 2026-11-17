import type { TopicExtras } from "../types";

// Engagement extras for Descriptive Writing.
export const descriptiveWritingExtras: TopicExtras = {
  interactive: "show-dont-tell",
  interactives: ["show-dont-tell", "sentence-mixer"],
  hook: "Charles Dickens once described a whole city using sentences with almost no main verbs — and readers have been able to smell his London fog for more than 170 years. What is it about the right words, in the right order, that lets a reader feel a place they have never visited?",
  didYouKnow: [
    "The term 'pathetic fallacy' was coined by the art critic John Ruskin in 1856, in the third volume of Modern Painters — and he meant it as a criticism of poets who gave nature false feelings. Today writers use it deliberately and proudly.",
    "'It was a dark and stormy night' is the opening of Edward Bulwer-Lytton's 1830 novel Paul Clifford. It became so famous as a cliché that a contest named after him invites people to write the worst possible opening sentence for a novel.",
    "The famous advice 'Don't tell me the moon is shining; show me the glint of light on broken glass' is usually credited to Anton Chekhov, but it is a later paraphrase of ideas from his letters, not his exact words.",
    "Smell signals travel to parts of the brain closely linked to memory and emotion, which is why a single scent — kaya toast, jasmine, wet earth after rain — can carry you straight back to a moment years ago. That makes smell a writer's secret weapon.",
    "Tennyson's poem 'The Eagle' is only six lines long, yet its precise verbs ('clasps', 'crawls', 'falls') make it one of the most quoted descriptive poems in English. Length is not what makes description powerful.",
    "Singapore's dramatic early-morning 'Sumatra squalls' are lines of thunderstorms that sweep in from the Strait of Malacca, mostly during the southwest monsoon — perfect material for a 'change over time' description.",
  ],
  experiments: [
    {
      title: "The eyes-closed sound map",
      emoji: "👂",
      materials: [
        "A notebook and pencil",
        "A timer",
        "A place with some life in it: a void deck, a kitchen, a balcony or a park bench",
      ],
      steps: [
        "Sit still, set the timer for five minutes and close your eyes.",
        "Listen. Each time you notice a sound, open your eyes briefly and mark it on a page as a dot: near sounds close to the centre, far sounds near the edge.",
        "Label each dot with the most precise word you can find for the sound (not 'noise' — 'clack of mahjong tiles', 'hiss of a bus door').",
        "Do the same for any smells or textures you notice.",
        "Now write one paragraph about the place using at least three of your sounds — without writing 'I could hear' even once.",
      ],
      science:
        "Closing your eyes switches off the sense that usually dominates, so you notice sounds, smells and textures you normally filter out. These are exactly the details that make readers believe in a place. Writing without 'I could hear' trains you to let the sound arrive directly through a strong verb — which is showing, not telling.",
    },
    {
      title: "Picture-to-paragraph zoom",
      emoji: "📷",
      materials: [
        "A photograph of a busy place (a magazine, a travel website, or your own photo of a hawker centre, market or street)",
        "A sheet of paper with a small square hole cut in the middle",
        "A pen",
      ],
      steps: [
        "Look at the whole photo and write ONE sentence describing the background — the sky, the skyline, the light.",
        "Write one sentence about the midground — the crowd, the stalls, the movement — adding a sound or smell the photo cannot show.",
        "Place the paper with the hole over the picture and slide it around until you find the most interesting small detail. Write one sentence about only what you see through the hole.",
        "Write a final sentence that returns to the background, but with something changed (the light fading, the rain starting).",
        "Read your four sentences aloud as one paragraph. You have just written a drone-to-zoom description with a cyclical ending.",
      ],
      science:
        "The paper 'viewfinder' forces you to select, which is the hardest skill in description: weak writers describe everything, strong writers choose. Moving from wide to narrow to an echo of the opening gives your writing a shape that readers feel even if they cannot name it.",
    },
    {
      title: "The family redraft relay",
      emoji: "🔁",
      materials: [
        "A sheet of paper",
        "Two to four players (family or friends)",
        "A deliberately flat sentence, e.g. 'The market was busy and it smelled nice.'",
      ],
      steps: [
        "Write the flat sentence at the top of the page.",
        "Player 1 applies R (Remove): cross out every tell or vague word.",
        "Player 2 applies S (Substitute): swap weak verbs and nouns for precise ones.",
        "Player 3 applies A (Add): add one non-visual sense or a short sentence for impact.",
        "Player 4 applies M (Move): reorder so the strongest detail is at the very end. Read the before and after versions aloud and vote on the best change.",
      ],
      science:
        "Breaking redrafting into four separate jobs (ARMS) shows that improving writing is a process of small, deliberate decisions, not waiting for inspiration. Hearing the before and after aloud trains your ear for rhythm and precision — the same ear you use when checking your own work in an exam.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Punctuation as timing",
      svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Punctuation as timing: comma short pause, semicolon balanced pause, colon held breath before a reveal, dash sudden jolt, full stop full stop">
  <text x="180" y="20" font-size="14" font-weight="bold" text-anchor="middle" fill="#1f2937">Punctuation as timing</text>
  <text x="14" y="50" font-size="13" font-weight="bold" fill="#1e3a8a">,</text>
  <rect x="40" y="38" width="30" height="16" rx="4" fill="#bfdbfe"/>
  <text x="84" y="51" font-size="12" fill="#1e3a8a">comma: a short breath</text>
  <text x="14" y="82" font-size="13" font-weight="bold" fill="#14532d">;</text>
  <rect x="40" y="70" width="60" height="16" rx="4" fill="#bbf7d0"/>
  <text x="114" y="83" font-size="12" fill="#14532d">semicolon: a balanced pause</text>
  <text x="14" y="114" font-size="13" font-weight="bold" fill="#78350f">:</text>
  <rect x="40" y="102" width="90" height="16" rx="4" fill="#fde68a"/>
  <text x="144" y="115" font-size="12" fill="#78350f">colon: held breath, then reveal</text>
  <text x="10" y="146" font-size="13" font-weight="bold" fill="#831843">—</text>
  <path d="M40 142 L70 142 L76 130 L82 154 L88 142 L120 142" stroke="#db2777" stroke-width="3" fill="none"/>
  <text x="134" y="147" font-size="12" fill="#831843">dash: a sudden jolt or twist</text>
  <text x="14" y="178" font-size="13" font-weight="bold" fill="#374151">.</text>
  <rect x="40" y="166" width="120" height="16" rx="4" fill="#d1d5db"/>
  <text x="174" y="179" font-size="12" fill="#374151">full stop: a complete halt</text>
</svg>`,
      caption:
        "Each punctuation mark controls how long the reader pauses and how the next words land. Choose the mark for the timing you want.",
    },
  ],
};
