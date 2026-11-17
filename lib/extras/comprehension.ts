import type { TopicExtras } from "../types";

// Engagement extras for Reading Comprehension.
export const comprehensionExtras: TopicExtras = {
  interactive: "comprehension-decoder",
  interactives: ["comprehension-decoder", "device-spotter"],
  hook:
    "Captain Oates's famous last words, 'I am just going outside and may be some time', survive in only one place on Earth: a pencilled journal found in a frozen tent. Everything we believe about that moment depends on how carefully we read ten words.",
  didYouKnow: [
    "Scott's journals were found with the bodies of Scott, Wilson and Bowers in November 1912, about eight months after the last entry. They are now kept at the British Library in London.",
    "Jack London wrote two versions of 'To Build a Fire'. In the 1902 version, written for young readers, the man survives with frostbite; in the far more famous 1908 version, he does not.",
    "Dickens wrote A Christmas Carol in about six weeks in late 1843, and it was published just before Christmas that year.",
    "When you read, your eyes do not glide smoothly along a line. They jump in tiny leaps called saccades and pause in fixations of roughly a quarter of a second, which is when you actually take in the words.",
    "A 2016 world atlas of night-sky brightness named Singapore the most light-polluted country on Earth: the night sky is so bright that people's eyes never fully adapt to the dark.",
    "Smooth-coated otters returned to Singapore's waterways in the late 1990s, after a ten-year clean-up of the Singapore River that began in 1977.",
  ],
  experiments: [
    {
      title: "The newspaper scan race",
      emoji: "📰",
      materials: [
        "A newspaper or news website article (one each)",
        "A timer",
        "A pencil and paper",
        "A family member or friend to compete against",
      ],
      steps: [
        "One person secretly writes five 'scan targets' from the article: a number, a name, a place, a date and one unusual word.",
        "Read out the first target and start the timer. The other player must find it by scanning, without reading every word.",
        "Record each time, then swap roles with a new article.",
        "Finally, each player skims their article for 30 seconds and explains its gist in one sentence. Compare who did better at scanning and who did better at skimming.",
      ],
      science:
        "Scanning and skimming are different skills. Scanning is target-hunting: your eyes jump looking for a shape (capital letters, digits), so you get faster with practice. Skimming is about meaning: you read headlines, first sentences and endings to build the big picture. Practising both under time pressure makes the opening minutes of a real exam calmer and more efficient.",
    },
    {
      title: "Fact or opinion? The advert detective",
      emoji: "🕵️",
      materials: [
        "Three adverts, brochures or travel webpages (e.g. a holiday resort, a phone, a food product)",
        "Two highlighters in different colours",
        "A sheet of paper divided into FACT and OPINION columns",
      ],
      steps: [
        "Read each advert once quickly to get the gist and identify its purpose and audience.",
        "Highlight facts (things that could be checked) in one colour and opinions (judgements) in the other.",
        "Copy five of each into your columns. Circle any opinion words such as 'best', 'perfect', 'stunning' or 'must-have'.",
        "Rewrite one advert using facts only. Is it still persuasive? Discuss why or why not.",
      ],
      science:
        "Persuasive texts mix checkable facts with opinions dressed up to sound like facts. Separating them trains the 'Check it or Challenge it' test used in comprehension papers. Rewriting the advert with facts only shows how much of its power comes from connotation and judgement words, which is exactly what language analysis questions ask you to explain.",
    },
    {
      title: "Storyboard the structure",
      emoji: "🎬",
      materials: [
        "A short story opening or one of the extracts in this topic (e.g. 'Monsoon' or 'Number 47')",
        "A sheet of paper folded into six boxes",
        "Coloured pencils",
      ],
      steps: [
        "Read the extract and divide it into six moments, from beginning to end.",
        "Draw each moment as a film shot. Label it WIDE SHOT, MID SHOT, CLOSE-UP or FLASHBACK.",
        "Under each box, write one sentence explaining why the writer moves the 'camera' here.",
        "Use your storyboard to write a 4-sentence answer to: 'How has the writer structured the text to interest the reader?'",
      ],
      science:
        "Structure questions ask how a text is built, not what its words mean. Thinking like a film director makes shifts in focus, zooming in and out and flashbacks visible, so you can describe them precisely ('The writer narrows the focus from the sky to a single raindrop...'). Turning your storyboard into sentences gives you a ready-made, ordered structure answer.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Fact or opinion? A two-question test",
      svg: `<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flowchart for deciding whether a statement is a fact or an opinion"><rect x="100" y="10" width="140" height="36" rx="8" fill="#e0f2fe" stroke="#0284c7"/><text x="170" y="32" font-size="12" text-anchor="middle" fill="#075985">Can it be CHECKED?</text><line x1="130" y1="46" x2="70" y2="86" stroke="#475569" stroke-width="1.5"/><line x1="210" y1="46" x2="270" y2="86" stroke="#475569" stroke-width="1.5"/><text x="88" y="66" font-size="11" fill="#14532d">yes</text><text x="245" y="66" font-size="11" fill="#7f1d1d">no</text><rect x="15" y="86" width="110" height="36" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="70" y="108" font-size="12" text-anchor="middle" fill="#14532d" font-weight="bold">FACT</text><rect x="195" y="86" width="140" height="36" rx="8" fill="#fef3c7" stroke="#d97706"/><text x="265" y="102" font-size="11" text-anchor="middle" fill="#78350f">Could someone</text><text x="265" y="116" font-size="11" text-anchor="middle" fill="#78350f">CHALLENGE it?</text><line x1="265" y1="122" x2="265" y2="146" stroke="#475569" stroke-width="1.5"/><rect x="200" y="146" width="130" height="36" rx="8" fill="#fee2e2" stroke="#dc2626"/><text x="265" y="168" font-size="12" text-anchor="middle" fill="#7f1d1d" font-weight="bold">OPINION</text><text x="70" y="145" font-size="11" text-anchor="middle" fill="#475569">'In 1977...'</text><text x="70" y="160" font-size="11" text-anchor="middle" fill="#475569">'11 miles away'</text><text x="140" y="168" font-size="11" text-anchor="middle" fill="#475569">'best', 'awful'</text></svg>`,
      caption: "Check it or Challenge it: dates, numbers and events can be checked; judgement words signal opinions.",
    },
  ],
};
