import type { TopicExtras } from "../types";

// Engagement extras for Shakespeare's World & Language.
export const shakespeareLanguageExtras: TopicExtras = {
  interactive: "meter-tapper",
  hook:
    "Put your hand on your chest and feel your heartbeat: da-DUM, da-DUM. Over 400 years ago Shakespeare built almost every great speech on exactly that rhythm, and once you can hear it, you can hear the moments when his characters' hearts skip.",
  didYouKnow: [
    "The Oxford English Dictionary lists Shakespeare as the earliest recorded user of well over a thousand words (about 1,700 is the figure usually quoted), including 'lonely', 'eyeball' and 'assassination'.",
    "When the Globe burned down in 1613, a witness wrote that nobody died, but one man's breeches caught fire and he put them out with a bottle of ale.",
    "In Antony and Cleopatra, Cleopatra fears that actors will one day show 'Some squeaking Cleopatra boy my greatness': a joke the audience would have loved, because the line was spoken by a boy actor playing Cleopatra.",
    "Not one complete manuscript of a Shakespeare play survives in his own handwriting. The only pages that may be his are a few scenes in a play called Sir Thomas More.",
    "Spelling was not fixed in Shakespeare's time: his six surviving signatures spell his surname in several different ways.",
    "When the modern Shakespeare's Globe opened in 1997, it had the first thatched roof allowed in London since the Great Fire of 1666.",
  ],
  experiments: [
    {
      title: "Tap the heartbeat",
      emoji: "🥁",
      materials: [
        "A table to tap on (or a pencil)",
        "A highlighter",
        "The lines below copied onto paper: 'But soft, what light through yonder window breaks?', 'To be, or not to be, that is the question', 'Now is the winter of our discontent', 'Double, double toil and trouble'",
      ],
      steps: [
        "Read the first line aloud slowly, tapping the table on every loud syllable. Write x over quiet syllables and / over loud ones.",
        "Count the syllables and the taps. Highlight the words that land on a tap.",
        "Repeat for the other three lines. For each, note: how many syllables? Does it start quiet-LOUD or LOUD-quiet? Does it end on a stress?",
        "Decide which line is regular iambic pentameter, which has a feminine ending, which opens with a trochaic inversion, and which is a witches' trochaic chant.",
        "Finally, write one sentence for each saying what the rhythm does: why might Hamlet's line trail off, or Richard's start with a punch?",
      ],
      science:
        "Hearing metre with your body is far more reliable than counting on paper. Once the regular heartbeat is in your ears, variations jump out, and those variations (an extra syllable, a flipped first foot, a different chant) are exactly what examiners reward you for explaining.",
    },
    {
      title: "Perform a soliloquy three ways",
      emoji: "🎭",
      materials: [
        "The opening of Hamlet's 'To be, or not to be' (in the guide)",
        "A family member or friend as audience",
        "A phone to record yourself (optional)",
      ],
      steps: [
        "First, paraphrase the lines in your own words so you know exactly what you are saying.",
        "Performance 1: whisper it to yourself, as private thoughts, looking at the floor.",
        "Performance 2: speak it directly to your audience, looking them in the eye, as if asking for their advice.",
        "Performance 3: say it angrily and quickly, as if Hamlet is furious with himself for not acting.",
        "Ask your audience which version felt most convincing and why. Which pauses (at dashes and full stops) mattered most?",
      ],
      science:
        "A soliloquy is a conversation with the audience as much as with oneself, and the thrust stage of the Globe made that eye contact possible. Trying different readings shows you that the words support several interpretations, which is exactly the thinking you need for 'how might an audience respond?' questions. It is also brilliant practice for the Public Speaking Competition.",
    },
    {
      title: "Walk the punctuation",
      emoji: "🚶",
      materials: [
        "Jaques' 'All the world's a stage' speech printed out",
        "A room or garden with space to walk",
      ],
      steps: [
        "Read the speech aloud while walking in a straight line.",
        "Every time you reach a comma, keep walking but turn slightly; every time you reach a full stop, colon or semicolon, stop and change direction completely.",
        "Notice where you walk a long way without stopping (enjambment across line-ends) and where you change direction in the middle of a line (a caesura).",
        "Now read it again standing still. Is the sense clearer?",
        "Write down two places where a mid-line stop matches a change in Jaques' subject, e.g. 'And then the lover,'.",
      ],
      science:
        "This is a rehearsal technique used by professional actors. It trains you to read to the punctuation, not the line-ends, which is the single most useful habit for understanding Shakespeare. It also shows how sentences in verse run across lines and how Jaques' speech moves from one 'age' to the next in mid-line.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Three rhythms to recognise",
      svg: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of an iamb, a trochee and a feminine ending"><g font-family="sans-serif"><rect x="10" y="10" width="460" height="54" rx="8" fill="#dbeafe"/><text x="24" y="32" font-size="13" font-weight="bold" fill="#1e3a8a">Iamb (da-DUM)</text><text x="24" y="52" font-size="12" fill="#1e3a8a">but SOFT, what LIGHT through YON-der WIN-dow BREAKS</text><rect x="10" y="73" width="460" height="54" rx="8" fill="#fee2e2"/><text x="24" y="95" font-size="13" font-weight="bold" fill="#7f1d1d">Trochee (DUM-da): inversion at the start</text><text x="24" y="115" font-size="12" fill="#7f1d1d">NOW is the WIN-ter OF our DIS-con-TENT</text><rect x="10" y="136" width="460" height="54" rx="8" fill="#ede9fe"/><text x="24" y="158" font-size="13" font-weight="bold" fill="#4c1d95">Feminine ending (extra weak syllable)</text><text x="24" y="178" font-size="12" fill="#4c1d95">to BE, or NOT to BE, that IS the QUES-tion</text></g></svg>`,
      caption:
        "Regular iambs, a trochaic inversion that punches the first word, and a feminine ending that trails off. Capitals show the stressed syllables.",
    },
  ],
};
