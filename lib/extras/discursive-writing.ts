import type { TopicExtras } from "../types";

// Engagement extras for Discursive Writing.
export const discursiveWritingExtras: TopicExtras = {
  interactive: "argument-scales",
  hook:
    "Judges, scientists and the best debaters all share one secret habit: before they decide what they think, they argue the other side as well as they possibly can. What would happen to your own opinions if you tried it?",
  didYouKnow: [
    "The word 'discursive' comes from the Latin 'discurrere', meaning 'to run to and fro': a discursive mind runs back and forth between viewpoints before settling.",
    "The word 'essay' comes from the French 'essayer', 'to try'. Michel de Montaigne called his famous collection 'Essais' (first published in 1580) because each one was an attempt to think a question through.",
    "The famous line 'I disapprove of what you say, but I will defend to the death your right to say it' is usually credited to Voltaire, but it was actually written by Evelyn Beatrice Hall (under the pen name S. G. Tallentyre) in her 1906 book The Friends of Voltaire, as a summary of his attitude. Always check your sources!",
    "For centuries the Catholic Church had an official 'Devil's Advocate' whose job was to argue against declaring someone a saint, so that every weakness in the case was tested. That is where the phrase 'playing devil's advocate' comes from.",
    "Charles Dickens wrote A Christmas Carol in about six weeks in late 1843, and it was published on 19 December that year. Its first printing sold out within days.",
    "The Oxford Union, one of the world's most famous debating societies, was founded in 1823. Speakers there are sometimes asked to argue for a side they personally disagree with.",
  ],
  experiments: [
    {
      title: "The switch-sides debate",
      emoji: "🔄",
      materials: [
        "A family member or friend",
        "A timer",
        "A list of debate questions (phones in school, school uniform, a four-day week, zoos)",
        "Paper and a pen",
      ],
      steps: [
        "Each choose a question and say honestly which side you agree with.",
        "Now swap: each person must argue the side they DISAGREE with for one minute, as convincingly as possible.",
        "The listener scores the speech out of 5 for 'Would someone who really holds this view be happy with how it was put?'",
        "Then each person gives a one-sentence rebuttal to the speech they have just heard, starting 'Admittedly…, however…'.",
        "Finally, write down whether your own view changed, even slightly, and why.",
      ],
      science:
        "Arguing the side you disagree with forces you to find its strongest form (steelmanning) instead of a straw man. That is exactly what a top discursive essay does in its counter-argument paragraphs, and it often leaves you with a more careful, qualified judgement than you started with.",
    },
    {
      title: "Discourse-marker detective",
      emoji: "🕵️",
      materials: [
        "A newspaper opinion piece or a 'for and against' article (print or online)",
        "Three coloured highlighters or pens",
        "A sheet of paper divided into three columns: Adding, Contrasting, Concluding",
      ],
      steps: [
        "Read the article once all the way through for meaning.",
        "On a second read, highlight adding markers (furthermore, moreover) in one colour, contrast markers (however, conversely, nevertheless) in another, and concluding or result markers (therefore, on balance) in a third.",
        "List each marker in the correct column of your table.",
        "Count which colour appears most. Is the article genuinely balanced, or mostly one-sided?",
        "Pick one paragraph and rewrite it with the markers removed. Read both versions aloud.",
      ],
      science:
        "Discourse markers are the signposts of an argument. Spotting them shows you how professional writers move between sides, and removing them shows how quickly an argument becomes hard to follow. The colour count is also a quick test of balance: an article with almost no contrast markers is probably persuasive, not discursive.",
    },
    {
      title: "The six-minute T-chart challenge",
      emoji: "⏱️",
      materials: ["A timer", "Paper and a pen", "A discursive question chosen by someone else"],
      steps: [
        "Ask someone to give you an unseen question, such as 'Should AI be allowed in schoolwork?'.",
        "Set the timer for six minutes. Draw a T-chart and brainstorm as many 'for' and 'against' ideas as you can.",
        "In the last two minutes, star the best three on each side, number them in order and write your judgement at the bottom in one sentence.",
        "Explain your plan aloud to the person who set the question in under one minute.",
        "Repeat with a new question each week and track how many ideas you can generate.",
      ],
      science:
        "Timed planning is a trainable skill. Practising fast T-charts builds a habit of looking at both sides before writing, and deciding your judgement at the planning stage means every paragraph has a clear destination when you write under exam conditions.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Anatomy of a discursive paragraph (PEER)",
      svg: `<svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A ladder of four steps for a discursive paragraph: Point, Evidence, Explain, Reply, each with an example sentence starter"><text x="180" y="20" font-size="14" font-weight="bold" text-anchor="middle" fill="#78350f">PEER: building a discursive paragraph</text><rect x="20" y="34" width="70" height="36" rx="6" fill="#fde68a" stroke="#b45309"/><text x="55" y="57" font-size="13" font-weight="bold" text-anchor="middle" fill="#78350f">Point</text><text x="100" y="57" font-size="11" fill="#374151">The strongest argument for… is…</text><rect x="20" y="78" width="70" height="36" rx="6" fill="#bfdbfe" stroke="#1d4ed8"/><text x="55" y="101" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Evidence</text><text x="100" y="101" font-size="11" fill="#374151">For example, … / Experts suggest…</text><rect x="20" y="122" width="70" height="36" rx="6" fill="#bbf7d0" stroke="#15803d"/><text x="55" y="145" font-size="13" font-weight="bold" text-anchor="middle" fill="#14532d">Explain</text><text x="100" y="145" font-size="11" fill="#374151">This suggests that… because…</text><rect x="20" y="166" width="70" height="36" rx="6" fill="#fecaca" stroke="#b91c1c"/><text x="55" y="189" font-size="13" font-weight="bold" text-anchor="middle" fill="#7f1d1d">Reply</text><text x="100" y="189" font-size="11" fill="#374151">Admittedly… However… Therefore…</text></svg>`,
      caption: "PEER adds a 'Reply' to the familiar PEEL paragraph, so every paragraph weighs as well as argues.",
    },
  ],
};
