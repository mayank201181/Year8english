import type { TopicExtras } from "../types";

// Engagement extras for Script Writing & Commentary.
export const scriptWritingExtras: TopicExtras = {
  interactive: "script-formatter",
  hook:
    "In Shakespeare's theatre, most actors were never handed the whole play: they got a scroll with only their own lines and the few words of the cue before each one. So how do you write a scene that works even when the actors cannot see the rest of it?",
  didYouKnow: [
    "Shakespeare's actors usually learned from 'parts' or 'cue scripts': just their own speeches plus the last few words of the line before each one, so they had to listen hard for their cues.",
    "Shakespeare wrote very few stage directions. Many of the ones you see in modern editions, such as 'Aside' or detailed entrances, were added by later editors.",
    "'Exit, pursued by a bear', from The Winter's Tale, is often called the most famous stage direction in English drama.",
    "Plays at the Globe were performed in the afternoon by daylight, so there was no stage lighting: when a scene was set at night, the dialogue told the audience it was dark.",
    "On the English public stage in Shakespeare's time, all female roles, including Juliet, Ophelia and Miranda, were played by boys and young men. Women did not appear as professional actors in England until after 1660.",
    "Screenwriters work to a rough rule that one page of a correctly formatted screenplay equals about one minute of screen time.",
  ],
  experiments: [
    {
      title: "One line, five meanings",
      emoji: "🎭",
      materials: [
        "A friend or family member",
        "Five small slips of paper",
        "A pen",
      ],
      steps: [
        "Write five hidden feelings on the slips, one each: jealous, terrified, in love, furious, secretly delighted.",
        "Choose one ordinary line, e.g. 'So you're going to the party, then.'",
        "Your partner draws a slip in secret and says the line, showing the feeling only through tone, pauses, face and body.",
        "Guess the hidden feeling. Swap roles and repeat.",
        "Finally, write each version as a script, using only one short stage direction or parenthetical per version.",
      ],
      science:
        "This is subtext in action: the words never change, but the meaning beneath them does. You learn how much an actor can communicate without the writer spelling it out, and how one well-chosen stage direction is often enough.",
    },
    {
      title: "Turn a story page into a script",
      emoji: "📝",
      materials: [
        "A page of dialogue from a novel you are reading",
        "Paper and two coloured pens",
      ],
      steps: [
        "Choose a page where two or three characters talk.",
        "In one colour, underline everything that is narration: thoughts, feelings, description and 'he said'.",
        "Rewrite the page as a script, keeping only dialogue and things an audience could see or hear.",
        "For every underlined thought, decide: turn it into a line, turn it into an action, or cut it.",
        "Read your script aloud with a partner and cut any line that does no job.",
      ],
      science:
        "Novels can tell us what characters think; scripts cannot. Converting one into the other trains you to apply the see-or-hear test automatically, which is the single most important skill for avoiding novel-style narration in an exam.",
    },
    {
      title: "Block a scene on the kitchen table",
      emoji: "♟️",
      materials: [
        "A table or large sheet of paper as your 'stage'",
        "Chess pieces, Lego figures or coins as characters",
        "A book to make a raised level",
        "The Juliet and Nurse passage from this topic",
      ],
      steps: [
        "Mark 'AUDIENCE' along one edge. Label upstage, downstage, stage left and stage right (remember: from the actor's view).",
        "Read the passage and move your figures for each moment: where is Juliet when she asks for comfort? Where does the Nurse go when she praises Paris?",
        "Use the book as a raised level. Who should stand on it, and when?",
        "Mark the moment the Nurse exits and move Juliet to the strongest position for her soliloquy.",
        "Write three stage directions describing your best blocking choices, then one commentary sentence explaining each.",
      ],
      science:
        "Blocking, proxemics and levels turn relationships into pictures. Physically moving the figures shows you how distance and height change meaning, and gives you precise stagecraft choices to explain in a commentary.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Script or story? Spot the difference",
      svg: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side-by-side comparison of a story version and a script version of the same moment"><rect x="0" y="0" width="440" height="200" fill="#ffffff"/><rect x="10" y="10" width="200" height="180" rx="8" fill="#fee2e2" stroke="#dc2626"/><text x="110" y="32" font-size="13" font-weight="bold" text-anchor="middle" fill="#7f1d1d">STORY (narrated)</text><text x="22" y="58" font-size="11" fill="#7f1d1d">Tom walked in nervously.</text><text x="22" y="78" font-size="11" fill="#7f1d1d">He felt guilty about</text><text x="22" y="94" font-size="11" fill="#7f1d1d">the vase.</text><text x="22" y="118" font-size="11" fill="#7f1d1d">"Hi Mum," he said.</text><text x="22" y="150" font-size="11" fill="#7f1d1d">past tense, thoughts,</text><text x="22" y="166" font-size="11" fill="#7f1d1d">speech marks, he said</text><rect x="230" y="10" width="200" height="180" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="330" y="32" font-size="13" font-weight="bold" text-anchor="middle" fill="#14532d">SCRIPT (shown)</text><text x="242" y="58" font-size="11" font-style="italic" fill="#14532d">(TOM enters. Sees the</text><text x="242" y="74" font-size="11" font-style="italic" fill="#14532d">bag of broken china.</text><text x="242" y="90" font-size="11" font-style="italic" fill="#14532d">Stops.)</text><text x="242" y="118" font-size="11" fill="#14532d">TOM: Hi, Mum.</text><text x="242" y="150" font-size="11" fill="#14532d">present tense, visible</text><text x="242" y="166" font-size="11" fill="#14532d">action, no speech marks</text></svg>`,
      caption: "A story tells us what Tom feels; a script shows us something that makes us realise it.",
    },
  ],
};
