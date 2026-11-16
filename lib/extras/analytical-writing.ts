import type { TopicExtras } from "../types";

// Engagement extras for Analytical Writing.
export const analyticalWritingExtras: TopicExtras = {
  interactive: "peel-builder",
  hook: "Three words spoken by Shakespeare's Caliban, 'This island's mine', have kept audiences arguing ever since 1611. How can three words hold so much? By the end of this topic you will be able to write a whole paragraph about one of them.",
  didYouKnow: [
    "The word 'analysis' comes from the Greek 'analusis', meaning 'a loosening' or 'undoing': analysing a text literally means untying it to see how it was put together.",
    "The word 'essay' comes from the French 'essayer', 'to try'. Michel de Montaigne called his famous collection 'Essais' (1580) because each one was an attempt to think something through.",
    "Shakespeare's own words are sometimes uncertain. In Hamlet's first soliloquy, the 1604 printing has 'too too sallied flesh' while the 1623 First Folio has 'solid'; many editors print 'sullied' (dirtied). Your analysis can depend on which edition you read!",
    "Even famous critics disagree wildly: in his 1919 essay 'Hamlet and His Problems', the poet T. S. Eliot called Hamlet 'most certainly an artistic failure', while countless others rank it among the greatest plays ever written.",
    "Shelley wrote 'Ozymandias' in a friendly competition with his friend Horace Smith, who wrote a sonnet on the same subject at the same time. Shelley's became one of the most famous poems in English; Smith's is now largely forgotten.",
    "In 1967 the French critic Roland Barthes wrote an essay called 'The Death of the Author', arguing that a text's meaning is made by its readers, not fixed by its writer. That is one reason your teachers welcome well-argued alternative interpretations.",
  ],
  experiments: [
    {
      title: "Build a connotation web",
      emoji: "🕸️",
      materials: [
        "A large sheet of paper or a whiteboard",
        "Coloured pens",
        "A short quotation from a text you are studying (e.g. 'sneer of cold command')",
        "A timer",
      ],
      steps: [
        "Write one key word from the quotation in a bubble in the middle of the page.",
        "Set a timer for three minutes and write every feeling, image, idea or memory the word suggests around it. Ask a family member to add theirs in a different colour.",
        "Swap the word for a synonym (e.g. 'smile' for 'sneer') and build a second web. Compare the two.",
        "Circle the three strongest associations and join them into one 'big idea' sentence.",
        "Turn that sentence into the Explain section of a PEEL paragraph using an analytical verb such as 'suggests' or 'evokes'.",
      ],
      science:
        "Words carry connotations as well as dictionary meanings. Brainstorming them visually trains you to zoom in, and comparing with a synonym reveals WHY the writer chose this exact word, which is the heart of top-level analysis. Hearing someone else's associations also shows you that more than one interpretation can be valid.",
    },
    {
      title: "The PEEL relay",
      emoji: "🏃",
      materials: [
        "Three or four people (family or friends)",
        "Paper and a pen for each person",
        "A short extract or poem everyone can see",
      ],
      steps: [
        "Agree on a question, e.g. 'How does Dickens present Scrooge?'",
        "Person 1 writes a Point and passes the paper on.",
        "Person 2 adds a short, embedded quotation as Evidence that supports the point.",
        "Person 3 writes the Explain section: name the technique and zoom in on one word.",
        "Person 4 (or Person 1 again) writes the Link back to the question or Dickens's purpose. Read the finished paragraph aloud and award a level from 1 to 4.",
      ],
      science:
        "Splitting a paragraph into stages makes each job visible: you quickly notice if the evidence doesn't actually prove the point, or if the explanation just repeats the quotation. Judging the result with levels trains the examiner's eye you need for your own writing.",
    },
    {
      title: "Trailer critic",
      emoji: "🎬",
      materials: [
        "A film trailer or advert (two minutes or less)",
        "A notebook",
      ],
      steps: [
        "Watch the trailer once just to enjoy it.",
        "Watch again and note three specific choices: a line of dialogue, a piece of music, a camera shot or a single word on screen.",
        "For each, write one sentence: 'The [choice] suggests… because…'.",
        "Write a one-sentence thesis: 'The trailer presents the film as ___ in order to ___.'",
        "Read your thesis and sentences aloud to someone who hasn't seen the trailer. Can they picture it AND understand its purpose?",
      ],
      science:
        "Analysis is the same skill whatever the medium: notice a specific choice, explain its effect, link it to the creator's purpose and audience. Practising on something quick and familiar builds the habit of asking 'how?' and 'why?' that you then bring to Shakespeare and poetry.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Comparison connectives",
      svg: `<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two columns of comparison connectives: similarity words on the left and difference words on the right"><rect x="10" y="10" width="150" height="170" rx="10" fill="#dcfce7" stroke="#22c55e"/><text x="85" y="32" font-size="13" text-anchor="middle" fill="#14532d">SIMILAR</text><g font-size="12" text-anchor="middle" fill="#166534"><text x="85" y="62">similarly</text><text x="85" y="86">likewise</text><text x="85" y="110">in the same way</text><text x="85" y="134">equally</text><text x="85" y="158">both</text></g><rect x="180" y="10" width="150" height="170" rx="10" fill="#fee2e2" stroke="#ef4444"/><text x="255" y="32" font-size="13" text-anchor="middle" fill="#991b1b">DIFFERENT</text><g font-size="12" text-anchor="middle" fill="#991b1b"><text x="255" y="62">whereas</text><text x="255" y="86">in contrast</text><text x="255" y="110">on the other hand</text><text x="255" y="134">conversely</text><text x="255" y="158">unlike</text></g></svg>`,
      caption: "Use these to compare two texts in the same paragraph. Compare HOW the writers write, not just WHAT they write about.",
    },
  ],
};
