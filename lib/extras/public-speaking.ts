import type { TopicExtras } from "../types";

// Engagement extras for Public Speaking & Rhetoric.
export const publicSpeakingExtras: TopicExtras = {
  interactive: "rhetoric-meter",
  hook:
    "In Shakespeare's Julius Caesar, a crowd cheers the men who have just killed Caesar. Then one man speaks for a few minutes, never once openly attacks them, and the same crowd ends up rioting through the streets hunting for them. How can words alone do that?",
  didYouKnow: [
    "Lincoln's Gettysburg Address is only about 270 words and took roughly two minutes. The main speaker that day, Edward Everett, spoke for about two hours, yet it is Lincoln's speech that is carved into the wall of the Lincoln Memorial.",
    "In Julius Caesar, Brutus addresses the crowd in prose, while Mark Antony answers in blank verse. Shakespeare uses the switch to contrast cool reasoning with an emotional, musical performance, and Antony wins.",
    "The words ethos, pathos and logos come from Aristotle's Rhetoric, written in the 4th century BC. Over two thousand years later, speechwriters and advertisers still use the same three appeals.",
    "Tudor grammar-school pupils spent years studying Latin rhetoric, learning to argue both sides of a question. Most scholars think the young Shakespeare was educated this way, which may be why his characters are such skilled persuaders.",
    "The most famous version of Elizabeth I's Tilbury speech was written down decades after 1588 by Dr Leonel Sharp, a chaplain who was there, so historians still debate how closely it matches her exact words.",
    "Psychologists call it the 'illusion of transparency': nervous speakers believe their nerves are obvious to everyone, but audiences usually notice far less than the speaker imagines.",
  ],
  experiments: [
    {
      title: "One line, seven meanings",
      emoji: "🎙️",
      materials: ["Your voice", "A phone to record yourself", "A family member as a listener"],
      steps: [
        "Write the sentence 'I never said she stole my money' on a piece of paper.",
        "Say it seven times, stressing a different word each time: I, never, said, she, stole, my, money.",
        "Record each version on your phone.",
        "Play the recordings to a family member in a random order and ask them to explain what each version means.",
        "Now pick the most important line of your own speech and try stressing different words in it. Which version is strongest?",
      ],
      science:
        "Stress and intonation carry meaning, not just the words. This is why delivery gets its own marks in a speaking competition, and why Antony can make 'Brutus is an honourable man' mean the opposite of what it says. Practising deliberate stress helps you choose, rather than leave to chance, what your audience hears.",
    },
    {
      title: "Perform Antony three ways",
      emoji: "🎭",
      materials: ["The 'Friends, Romans, countrymen' extract from this topic", "A space to stand", "An audience of one or two people (or a camera)"],
      steps: [
        "Read the extract aloud once as a sincere friend who truly respects Brutus.",
        "Read it again as a grieving friend who is slowly realising Brutus has lied.",
        "Read it a third time as a cunning politician deliberately turning the crowd, with growing sarcasm on 'honourable'.",
        "Ask your audience which version was most persuasive and at which line they started to doubt Brutus.",
        "Try adding a long pause after 'And I must pause till it come back to me' and see how it changes the room.",
      ],
      science:
        "The same words can create very different effects depending on tone, pace and pauses. By performing the speech three ways you discover that much of Antony's irony is unlocked by delivery, and you practise the vocal control you will need for your own competition speech.",
    },
    {
      title: "The kitchen-table competition",
      emoji: "🏆",
      materials: ["A two-minute speech you have written (about 280 words)", "A timer", "Score sheets for your family with five headings: content, structure, delivery, audience engagement, timing", "Keyword cue cards"],
      steps: [
        "Give each family member a score sheet and ask them to mark each heading out of 5.",
        "Deliver your speech using only cue cards, while someone times you.",
        "Collect the score sheets and ask each judge for one thing that worked and one thing to improve.",
        "Make one change to the script and one change to your delivery.",
        "Deliver it again a day later and compare the scores and the time.",
      ],
      science:
        "Rehearsing in front of real people under real conditions is the fastest way to improve, because you get honest feedback on all five criteria judges actually use. It also reduces nerves: the more familiar the situation feels, the less threatening it is on competition day.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Anatomy of a persuasive sentence",
      svg: '<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The sentence We are the school that should lead, not follow, labelled with inclusive pronoun, anaphora and antithesis"><rect x="0" y="0" width="360" height="170" fill="#ffffff"/><text x="180" y="22" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">Three devices in one line</text><rect x="20" y="70" width="320" height="34" rx="6" fill="#fff7ed" stroke="#ea580c"/><text x="180" y="92" font-size="13" text-anchor="middle" fill="#7c2d12">We are the school that should lead, not follow.</text><line x1="62" y1="70" x2="62" y2="48" stroke="#2563eb" stroke-width="1.5"/><text x="62" y="42" font-size="11" text-anchor="middle" fill="#1e3a8a">inclusive we</text><line x1="130" y1="104" x2="130" y2="128" stroke="#16a34a" stroke-width="1.5"/><text x="130" y="142" font-size="11" text-anchor="middle" fill="#14532d">anaphora when</text><text x="130" y="156" font-size="11" text-anchor="middle" fill="#14532d">repeated 3 times</text><line x1="268" y1="70" x2="268" y2="48" stroke="#e11d48" stroke-width="1.5"/><text x="268" y="42" font-size="11" text-anchor="middle" fill="#881337">antithesis</text><text x="268" y="128" font-size="11" text-anchor="middle" fill="#475569">effect: pride + duty</text></svg>',
      caption:
        "Strong speech lines stack devices: an inclusive pronoun pulls the audience in, anaphora builds rhythm when the opening is repeated, and antithesis makes the choice sound obvious.",
    },
  ],
};
