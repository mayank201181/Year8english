import type { TopicExtras } from "../types";

// Engagement extras for The Tempest.
export const theTempestExtras: TopicExtras = {
  interactive: "tempest-power",
  interactives: ["tempest-power", "connotation-zoom"],
  hook:
    "A magician spends twelve years planning revenge, finally traps every one of his enemies on his island — and then lets them all go. Why would anyone do that?",
  didYouKnow: [
    "In 1609 a ship called the Sea Venture was wrecked on Bermuda on its way to Virginia. Everyone thought the passengers had drowned, but all of them survived and turned up in Jamestown about a year later — and The Tempest even mentions 'the still-vex'd Bermoothes' (the stormy Bermudas).",
    "The Tempest's first recorded performance was at court, in front of King James I, on 1 November 1611.",
    "Although it was one of the last plays Shakespeare wrote, The Tempest was printed first in the 1623 First Folio, the collected edition of his plays.",
    "The Tempest is one of only a few Shakespeare plays with no single known source story — he seems to have invented most of the plot himself, borrowing ideas from travellers' letters, Montaigne and the Roman poet Ovid.",
    "Many of the moons of Uranus are named after Tempest characters, including Miranda, Caliban, Sycorax, Prospero, Stephano and Trinculo.",
    "Aldous Huxley's 1932 novel Brave New World takes its title from Miranda's cry of wonder in Act 5 — and uses it just as ironically as Prospero does.",
  ],
  experiments: [
    {
      title: "Perform 'My liberty' three ways",
      emoji: "🎭",
      materials: [
        "A copy of the Ariel–Prospero exchange from Act 1 Scene 2 (in the guide)",
        "A partner or family member",
        "A phone to record yourselves (optional)",
      ],
      steps: [
        "Read the exchange from 'Is there more toil?' to 'I will discharge thee' with your partner, one as Ariel and one as Prospero.",
        "Version 1: play Ariel as timid and frightened, and Prospero as a kind but tired father figure.",
        "Version 2: play Ariel as bold and defiant, and Prospero as a furious tyrant.",
        "Version 3: play it as a fond, teasing argument between old friends who trust each other.",
        "Watch back or discuss: which version do the actual words support best? Which lines resisted each version?",
      ],
      science:
        "Shakespeare's scripts contain very few stage directions, so actors and directors must make choices about tone. Trying three versions shows that interpretation is built into performance — and that some readings fit the words better than others. The threat to 'peg thee in his knotty entrails', for example, is hard to play as gentle teasing. This is exactly the skill you need for analytical writing: testing an interpretation against the evidence.",
    },
    {
      title: "Connotation zoom: one word, five ideas",
      emoji: "🔍",
      materials: ["A large sheet of paper", "Coloured pens", "The quotation bank from this topic"],
      steps: [
        "Choose one powerful word from a key quotation — for example 'sty', 'thing', 'rough', 'perfidious' or 'brave'.",
        "Write it in a circle in the middle of the page.",
        "Around it, draw at least five branches. On each, write one thing the word suggests: a feeling, an image, a colour, a sound, a type of person or place.",
        "Circle the two connotations that best fit the character or theme, then write one sentence of analysis using them.",
        "Swap with a family member: can they add a branch you missed?",
      ],
      science:
        "Words carry connotations — associations beyond their dictionary meaning. Mapping them makes you slow down and see why Shakespeare chose one word rather than another. The best analytical paragraphs zoom in on a single word in exactly this way, and having several connotations ready lets you offer alternative interpretations, which examiners reward.",
    },
    {
      title: "Put Caliban on trial",
      emoji: "⚖️",
      materials: [
        "Notes on Caliban from the guide and quotation bank",
        "Two or more people (one prosecution, one defence, others as jury)",
        "A timer",
      ],
      steps: [
        "The prosecution has three minutes to argue that Caliban is a villain, using at least three quotations.",
        "The defence has three minutes to argue that Caliban is a victim, also using at least three quotations.",
        "Each side gets one minute to reply to the other.",
        "The jury votes — but must explain which single piece of evidence changed their minds most.",
        "Finally, write a balanced paragraph that uses the strongest point from each side.",
      ],
      science:
        "Arguing one side forces you to find evidence; hearing the other side shows you what you ignored. The best 'How far do you agree?' answers do both: they weigh the evidence and reach a judgement. Spoken argument also builds the persuasive skills you need for the Public Speaking Competition.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Who holds the power?",
      svg:
        '<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Power pyramid: Prospero at the top controlling Ariel and Caliban, with the spellbound shipwrecked court below; an arrow shows that in the Epilogue the audience holds power over Prospero"><polygon points="160,40 290,200 30,200" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><line x1="105" y1="108" x2="215" y2="108" stroke="#d97706"/><line x1="70" y1="156" x2="250" y2="156" stroke="#d97706"/><text x="160" y="92" font-size="13" font-weight="bold" text-anchor="middle" fill="#78350f">Prospero</text><text x="160" y="137" font-size="12" text-anchor="middle" fill="#78350f">Ariel · Caliban (servants)</text><text x="160" y="184" font-size="12" text-anchor="middle" fill="#78350f">the court (spellbound)</text><rect x="95" y="4" width="130" height="24" rx="12" fill="#ffe4e6" stroke="#e11d48"/><text x="160" y="21" font-size="12" font-weight="bold" text-anchor="middle" fill="#881337">The audience</text><line x1="160" y1="28" x2="160" y2="70" stroke="#e11d48" stroke-width="2" stroke-dasharray="4 3"/><text x="168" y="54" font-size="11" fill="#881337">Epilogue: ‘set me free’</text><text x="160" y="222" font-size="11" text-anchor="middle" fill="#334155">On the island, power flows downward</text></svg>',
      caption:
        "On the island Prospero sits at the top, commanding his servants and holding the shipwrecked court under his spells — but in the Epilogue the pyramid flips, and the audience holds the power to set Prospero free.",
    },
  ],
};
