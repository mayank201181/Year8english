import type { TopicExtras } from "../types";

// Engagement extras for Romeo and Juliet.
export const romeoAndJulietExtras: TopicExtras = {
  interactive: "tension-graph",
  hook:
    "They meet on Sunday night, marry on Monday afternoon and are dead before dawn on Thursday. How can a love story that lasts less than a week still be the most famous one ever written, more than four hundred years later?",
  didYouKnow: [
    "The word 'balcony' never appears in Romeo and Juliet. Romeo sees Juliet at a 'window', and the balcony became part of the scene through later stage productions.",
    "Shakespeare's main source, Arthur Brooke's poem The Tragicall Historye of Romeus and Juliet (1562), stretches the story over about nine months. Shakespeare squeezed it into about four days.",
    "In Brooke's poem Juliet is not yet sixteen; Shakespeare made her not yet fourteen ('She's not fourteen', says the Nurse in 1.3), which makes her courage and her tragedy even more striking.",
    "On Shakespeare's stage Juliet was played by a boy actor, because women did not perform on the public stage in England until the 1660s.",
    "Thousands of letters addressed simply to 'Juliet, Verona' arrive every year, and volunteers known as Juliet's secretaries write back to them.",
    "'Wherefore art thou Romeo?' does not mean 'Where are you?'. 'Wherefore' means 'why', so Juliet is asking why he has to be a Montague.",
  ],
  experiments: [
    {
      title: "Perform the balcony scene three ways",
      emoji: "🎭",
      materials: [
        "A copy of Act 2 Scene 2 (the 'What's in a name?' speech)",
        "A chair or staircase to stand on",
        "A partner or family member",
        "A phone to record yourselves (optional)",
      ],
      steps: [
        "Read Juliet's speech from ''Tis but thy name that is my enemy' to 'Take all myself' aloud once, slowly, to understand it.",
        "Perform it as if Juliet is dreamy and romantic, speaking softly to the stars.",
        "Perform it again as if she is frustrated and angry with the feud, stressing 'enemy' and 'Montague'.",
        "Perform it a third time as if she is nervous and checking that no one is listening.",
        "Watch the recordings or ask your audience: which version made the meaning clearest? Which words changed most?",
      ],
      science:
        "Shakespeare's plays were written to be performed, and the same words can carry very different meanings depending on tone, pace and stress. Trying several readings shows you that interpretation is a choice, which is exactly what examiners want you to discuss when you write 'this could suggest...' or 'alternatively...'.",
    },
    {
      title: "Draw a tension graph of the play",
      emoji: "📈",
      materials: [
        "A large sheet of paper",
        "Coloured pens",
        "A list of the key scenes: 1.1, 1.5, 2.2, 2.6, 3.1, 3.5, 4.3, 4.5, 5.3",
      ],
      steps: [
        "Draw two axes: the acts along the bottom (1 to 5) and 'tension' up the side.",
        "Plot a point for each key scene, deciding how tense it feels from 0 to 10.",
        "Join the points and label each with a short quotation from that scene.",
        "Colour the line red where violence dominates and pink where love dominates.",
        "Compare your graph with someone else's and argue about any scene you rated differently.",
      ],
      science:
        "A tension graph makes the play's structure visible. You will notice that Shakespeare places calm, loving scenes right next to violent ones, so the audience never relaxes. Being able to talk about structure, not just language, is what lifts an analytical answer to the top band.",
    },
    {
      title: "Rewrite the Prologue as a news bulletin",
      emoji: "📰",
      materials: ["A copy of the Prologue", "Paper or a laptop", "A timer set to 60 seconds"],
      steps: [
        "Read the Prologue and underline every fact it gives: place, families, what happens, what it causes.",
        "Rewrite those facts as a 60-second TV news bulletin, starting with a dramatic headline.",
        "Read your bulletin aloud to your family and time it.",
        "Now read the original Prologue aloud. Discuss: which version is more powerful, and why?",
      ],
      science:
        "Turning Shakespeare's sonnet into plain modern news shows you exactly what information the Prologue contains, and comparing the two versions reveals what the poetry adds: rhythm, rhyme, imagery such as 'star-crossed' and 'death-marked', and a sense of fate that a news report cannot create.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Love vs hate: the two forces of Verona",
      svg: `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram contrasting the forces of love and hate in Romeo and Juliet, with key quotations for each, meeting in the tomb"><rect x="0" y="0" width="460" height="200" fill="#ffffff"/><rect x="10" y="20" width="190" height="130" rx="10" fill="#fce7f3" stroke="#be185d"/><text x="105" y="42" font-size="14" text-anchor="middle" font-weight="bold" fill="#831843">LOVE</text><text x="105" y="66" font-size="11" text-anchor="middle" fill="#374151">'Juliet is the sun'</text><text x="105" y="86" font-size="11" text-anchor="middle" fill="#374151">'two blushing pilgrims'</text><text x="105" y="106" font-size="11" text-anchor="middle" fill="#374151">'What's in a name?'</text><text x="105" y="126" font-size="11" text-anchor="middle" fill="#374151">light, stars, religion</text><rect x="260" y="20" width="190" height="130" rx="10" fill="#fee2e2" stroke="#b91c1c"/><text x="355" y="42" font-size="14" text-anchor="middle" font-weight="bold" fill="#7f1d1d">HATE</text><text x="355" y="66" font-size="11" text-anchor="middle" fill="#374151">'I hate the word'</text><text x="355" y="86" font-size="11" text-anchor="middle" fill="#374151">'A plague o' both your houses!'</text><text x="355" y="106" font-size="11" text-anchor="middle" fill="#374151">'disobedient wretch'</text><text x="355" y="126" font-size="11" text-anchor="middle" fill="#374151">swords, blood, heat</text><line x1="200" y1="85" x2="230" y2="170" stroke="#be185d" stroke-width="2"/><line x1="260" y1="85" x2="230" y2="170" stroke="#b91c1c" stroke-width="2"/><circle cx="230" cy="175" r="8" fill="#1f2937"/><text x="230" y="196" font-size="12" text-anchor="middle" fill="#1f2937">they meet in the tomb (5.3)</text></svg>`,
      caption:
        "Love and hate run side by side through the play and finally meet in the tomb, where, as the Prince says, heaven kills the families' 'joys with love'.",
    },
  ],
};
