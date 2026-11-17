import type { ComprehensiveExam, MCQ, Paper, QA } from "./types";

// The cross-topic "Big Exam": four MCQ papers and four written papers, shaped like
// real end-of-year Year 8 English assessments. Papers 1–3 of each kind are built
// around an unseen extract (Shakespeare, poetry, prose); Paper 4 tests language
// and writing skills. Printed texts are public domain (Shakespeare; authors who
// died before 1955) or original. Copyrighted modern poems are only named or
// quoted a short phrase at a time.

// ---------------------------------------------------------------------------
// MCQ PAPER 1: SHAKESPEARE
// ---------------------------------------------------------------------------
const mcqP1: Paper<MCQ> = {
  id: "exam-mcq-p1",
  title: "MCQ Paper 1: Shakespeare",
  passage: {
    id: "exam-tempest-revels",
    title: "\"Our revels now are ended\"",
    source: "William Shakespeare, The Tempest (c. 1611), Act 4 Scene 1 (Prospero)",
    text:
      "You do look, my son, in a moved sort,\nAs if you were dismay'd: be cheerful, sir.\nOur revels now are ended. These our actors,\nAs I foretold you, were all spirits and\nAre melted into air, into thin air:\nAnd, like the baseless fabric of this vision,\nThe cloud-capp'd towers, the gorgeous palaces,\nThe solemn temples, the great globe itself,\nYea, all which it inherit, shall dissolve\nAnd, like this insubstantial pageant faded,\nLeave not a rack behind. We are such stuff\nAs dreams are made on, and our little life\nIs rounded with a sleep. Sir, I am vex'd;\nBear with my weakness; my old brain is troubled:\nBe not disturb'd with my infirmity:\nIf you be pleased, retire into my cell\nAnd there repose: a turn or two I'll walk,\nTo still my beating mind.",
    note:
      "Prospero's spirits have been performing a magical show (a masque) for the newly engaged Ferdinand and Miranda. Prospero has just stopped it abruptly. Glossary: moved sort = troubled state; baseless fabric = structure with no foundation; inherit = occupy; pageant = show; vex'd = agitated; cell = Prospero's simple dwelling.",
  },
  questions: [
    {
      id: "exam-mcq-p1-q01",
      question: "In line 1, who is Prospero addressing as \"my son\"?",
      options: [
        "Alonso, the King of Naples",
        "Caliban, whom he has raised on the island",
        "Ferdinand, who is engaged to Miranda",
        "Ariel, his spirit servant",
      ],
      answerIndex: 2,
      hint: "The show was a celebration for a young couple. Which of them would Prospero call 'son'?",
      explanation:
        "Ferdinand is about to become Prospero's son-in-law, so Prospero calls him 'my son' and 'sir'; Miranda is with him. Alonso is Ferdinand's father and is not present at the masque, and Prospero never calls Caliban 'son' (he calls him a slave).",
    },
    {
      id: "exam-mcq-p1-q02",
      question: "What does Prospero mean by \"Our revels now are ended. These our actors... were all spirits\"?",
      options: [
        "The magical show performed by his spirits is over, and the performers have vanished",
        "His plan for revenge has failed and his enemies have escaped",
        "A company of travelling players has finished a play in Naples",
        "The storm he raised at the start of the play has finally stopped",
      ],
      answerIndex: 0,
      hint: "'Revels' are entertainments. Who were the 'actors' in this one?",
      explanation:
        "The 'revels' are the masque Prospero's spirits have just performed; the 'actors' were spirits who have 'melted into air'. The storm distractor is tempting because Prospero's magic raised it in Act 1, but that tempest ended long before this scene.",
    },
    {
      id: "exam-mcq-p1-q03",
      question: "Why do many readers think \"the great globe itself\" has a double meaning?",
      options: [
        "It refers both to Prospero's crystal ball and to the moon",
        "It refers both to the island and to the ship that was wrecked",
        "It refers both to Miranda's innocence and to the 'brave new world'",
        "It refers both to the whole Earth and to the Globe, the theatre where Shakespeare's company performed",
      ],
      answerIndex: 3,
      hint: "Think about where the play's first audiences may have been sitting.",
      explanation:
        "'Globe' means the whole world, but Shakespeare's company performed at the Globe Theatre, so the line also suggests the theatre (and the play) will one day vanish. Prospero has no crystal ball in the play, so that option is invented.",
    },
    {
      id: "exam-mcq-p1-q04",
      extract: "The cloud-capp'd towers, the gorgeous palaces,\nThe solemn temples, the great globe itself,",
      question: "Which technique best describes these two lines?",
      options: [
        "A rhyming couplet that closes the speech",
        "A list that builds in scale from great buildings to the whole world",
        "An oxymoron that combines opposite ideas",
        "A rhetorical question addressed to Ferdinand",
      ],
      answerIndex: 1,
      hint: "Count the items. Does each one get bigger or smaller?",
      explanation:
        "The lines list towers, palaces, temples and then 'the great globe itself', so the list widens to everything that exists, making the claim that all of it 'shall dissolve' more overwhelming. The lines do not rhyme ('palaces'/'itself'), so it is not a rhyming couplet.",
    },
    {
      id: "exam-mcq-p1-q05",
      extract: "We are such stuff\nAs dreams are made on, and our little life\nIs rounded with a sleep.",
      question: "What does \"our little life / Is rounded with a sleep\" most likely suggest?",
      options: [
        "Human life is short and is surrounded, before birth and after death, by a sleep-like nothingness",
        "Prospero is tired and wants to go to bed",
        "Life is full and complete, like a perfect circle",
        "Everyone's dreams will eventually come true",
      ],
      answerIndex: 0,
      hint: "'Rounded' can mean 'surrounded' or 'finished off'. What 'sleep' comes at the end of every life?",
      explanation:
        "Life is pictured as a brief dream that is surrounded by sleep, a gentle image for death (and for not yet existing). The literal reading that Prospero just wants a nap is tempting because he does say he needs to 'repose', but 'our little life' makes the line about all humans, not his bedtime.",
    },
    {
      id: "exam-mcq-p1-q06",
      question: "Prospero stops the masque suddenly because he has just remembered what?",
      options: [
        "That his promise to free Ariel is overdue",
        "That Antonio and Sebastian are plotting to kill Alonso",
        "The plot by Caliban, Stephano and Trinculo to murder him",
        "That Ferdinand has not yet finished carrying the logs",
      ],
      answerIndex: 2,
      hint: "Which characters have been drinking and planning to seize the island?",
      explanation:
        "In Act 4 Scene 1 Prospero remembers 'that foul conspiracy / Of the beast Caliban and his confederates / Against my life'. The Antonio and Sebastian plot is tempting, but it targets Alonso, not Prospero, and Ariel has already foiled it in Act 2.",
    },
    {
      id: "exam-mcq-p1-q07",
      question: "This speech is written mainly in which form?",
      options: ["Prose", "Rhyming couplets", "Free verse", "Blank verse (unrhymed iambic pentameter)"],
      answerIndex: 3,
      hint: "Look at the line lengths and the line endings. Do they rhyme? Is there a regular beat?",
      explanation:
        "The lines are roughly ten syllables long with a da-DUM rhythm and do not rhyme: blank verse, the form Shakespeare gives to noble, serious characters. It is not prose, because it is set out in lines of regular metre.",
    },
    {
      id: "exam-mcq-p1-q08",
      extract: "And, like this insubstantial pageant faded,\nLeave not a rack behind.",
      question: "In this context, what does \"Leave not a rack behind\" mean?",
      options: [
        "Leave no prisoners to be tortured",
        "Leave not even a wisp of cloud, so no trace at all",
        "Leave no building standing except the temples",
        "Leave no stage scenery for the next performance",
      ],
      answerIndex: 1,
      hint: "The towers were 'cloud-capp'd' a moment ago. In Shakespeare's time, a 'rack' could be a drifting scrap of cloud.",
      explanation:
        "'Rack' here means a thin wisp of cloud: when everything dissolves it will leave not even that behind. The torture-rack meaning is the tempting modern reading, but nothing in the speech is about punishment; the imagery is of melting air and clouds.",
    },
    {
      id: "exam-mcq-p1-q09",
      extract: "These our actors,\nAs I foretold you, were all spirits and\nAre melted into air, into thin air:",
      question: "What is the most likely effect of ending the line on the word \"and\"?",
      options: [
        "It creates a rhyme with the line before",
        "It shows Prospero is lying to Ferdinand",
        "The sentence spills over the line-break, so the verse itself seems to drift and dissolve like the spirits",
        "It marks the moment the speech switches from verse into prose",
      ],
      answerIndex: 2,
      hint: "This is enjambment. What is happening to the spirits at this moment?",
      explanation:
        "Ending on a weak word like 'and' forces the sense to run on (enjambment), so the line does not hold firm, matching the spirits melting 'into thin air'. There is no rhyme here, and the speech stays in verse throughout.",
    },
    {
      id: "exam-mcq-p1-q10",
      extract: "a turn or two I'll walk,\nTo still my beating mind.",
      question: "What does the metaphor \"my beating mind\" suggest about Prospero?",
      options: [
        "His thoughts are racing and agitated, pounding like a heart",
        "He is plotting to beat Caliban as a punishment",
        "He is calm and has accepted everything that happened",
        "He is ill with a fever and close to death",
      ],
      answerIndex: 0,
      hint: "What else in the body 'beats', and when does it beat fastest?",
      explanation:
        "A mind cannot literally beat, so the metaphor borrows the image of a pounding heart to show his thoughts are racing; he needs to 'still' (calm) them. 'Calm and accepting' is wrong because he has just admitted he is 'vex'd' and 'troubled'.",
    },
    {
      id: "exam-mcq-p1-q11",
      extract: "You taught me language; and my profit on't\nIs, I know how to curse.",
      question: "Who speaks these lines, and in which scene of The Tempest?",
      options: [
        "Ariel, to Prospero, in Act 1 Scene 2",
        "Trinculo, to Stephano, in Act 2 Scene 2",
        "Ferdinand, to Miranda, in Act 3 Scene 1",
        "Caliban, to Prospero and Miranda, in Act 1 Scene 2",
      ],
      answerIndex: 3,
      hint: "Which character was taught to speak by the newcomers to the island and resents it?",
      explanation:
        "Caliban says this in Act 1 Scene 2, turning the 'gift' of language into a weapon against his masters. Ariel also appears in Act 1 Scene 2, which makes that option tempting, but Ariel speaks to Prospero with obedience, not curses.",
    },
    {
      id: "exam-mcq-p1-q12",
      extract: "this thing of darkness I\nAcknowledge mine.",
      question: "Prospero says this about Caliban in Act 5 Scene 1. Why do critics see it as significant?",
      options: [
        "Prospero finally forgives Antonio for stealing his dukedom",
        "Prospero admits some ownership of, and perhaps responsibility for, Caliban",
        "Prospero reveals that Caliban is his son",
        "Prospero announces that he will take Caliban to Milan as a prisoner",
      ],
      answerIndex: 1,
      hint: "'Acknowledge' means 'admit' or 'accept'. What is Prospero accepting?",
      explanation:
        "Prospero accepts Caliban as 'mine', which can be read as possession but also as a reluctant admission that Caliban's 'darkness' is partly his responsibility. He does not claim Caliban is his son: Caliban's mother was the witch Sycorax.",
    },
    {
      id: "exam-mcq-p1-q13",
      extract: "To be, or not to be: that is the question:",
      question: "Hamlet speaks these words believing himself alone, voicing his private thoughts to the audience. What is this kind of speech called?",
      options: ["An aside", "A dialogue", "A soliloquy", "A prologue"],
      answerIndex: 2,
      hint: "The Latin 'solus' means 'alone'.",
      explanation:
        "A soliloquy is a speech in which a character, usually alone, speaks thoughts aloud so the audience hears their inner conflict. An aside is the tempting distractor, but an aside is a brief remark while other characters are on stage and supposedly cannot hear.",
    },
    {
      id: "exam-mcq-p1-q14",
      extract: "Something is rotten in the state of Denmark.",
      question: "Who says this, and when?",
      options: [
        "Marcellus, in Act 1 Scene 4, as Hamlet follows the Ghost",
        "Hamlet, in Act 1 Scene 2, in his first soliloquy",
        "Horatio, in Act 5 Scene 2, after Hamlet's death",
        "The Ghost, in Act 1 Scene 5, describing his murder",
      ],
      answerIndex: 0,
      hint: "It is not Hamlet. It is a guard watching the battlements.",
      explanation:
        "Marcellus, one of the guards, says it in Act 1 Scene 4 as Hamlet goes off with the Ghost. Many people assume Hamlet says it because it sums up his view, but the line belongs to Marcellus.",
    },
    {
      id: "exam-mcq-p1-q15",
      extract: "The time is out of joint: O cursed spite,\nThat ever I was born to set it right!",
      question: "What do these lines at the end of Act 1 Scene 5 reveal about Hamlet?",
      options: [
        "He is excited and eager to take revenge immediately",
        "He believes the Ghost is a devil and plans to ignore it",
        "He feels the world is disordered and resents the burden of having to fix it",
        "He is planning to leave Denmark and return to university",
      ],
      answerIndex: 2,
      hint: "'Out of joint' is like a dislocated bone. And how does he feel about being 'born to set it right'?",
      explanation:
        "The metaphor of a dislocated joint shows Denmark is disordered, and 'O cursed spite' shows he resents being the one who must 'set it right'. 'Eager for revenge' is the tempting misreading: he swore revenge moments earlier, but this couplet sounds burdened, not excited.",
    },
    {
      id: "exam-mcq-p1-q16",
      extract: "Though this be madness, yet there is method in't.",
      question: "Polonius says this aside after talking with Hamlet (Act 2 Scene 2). What does he mean?",
      options: [
        "Hamlet is completely mad and his words make no sense",
        "Hamlet's strange words seem to have a logic or purpose behind them",
        "Hamlet has a medical method for curing madness",
        "Polonius is admitting that he himself is mad",
      ],
      answerIndex: 1,
      hint: "'Method' here means order or sense. Is Polonius suspicious?",
      explanation:
        "Polonius notices that Hamlet's 'mad' replies are pointed and clever (he has just mocked old men), so there is 'method' (sense) in them. 'Completely mad' is wrong because the word 'yet' introduces a contrast with 'madness'.",
    },
    {
      id: "exam-mcq-p1-q17",
      extract: "From forth the fatal loins of these two foes\nA pair of star-cross'd lovers take their life;",
      question: "In the Prologue to Romeo and Juliet, what does \"star-cross'd\" mean?",
      options: [
        "Famous, like stars of the stage",
        "Angry with each other",
        "Lovers who meet secretly at night",
        "Ill-fated: their destiny, written in the stars, works against them",
      ],
      answerIndex: 3,
      hint: "Elizabethans believed the stars controlled human fate. What does 'crossed' do to a plan?",
      explanation:
        "'Star-cross'd' means thwarted by the stars, so doomed by fate, which prepares the audience for tragedy. 'Meet secretly at night' is tempting because of the balcony scene, but the word is about fate, not timing.",
    },
    {
      id: "exam-mcq-p1-q18",
      extract: "My only love sprung from my only hate!",
      question: "Juliet says this on learning Romeo is a Montague (Act 1 Scene 5). Which technique is at its heart?",
      options: [
        "Antithesis: the opposites 'love' and 'hate' are balanced in parallel phrases",
        "Onomatopoeia: the words imitate sounds",
        "Pathetic fallacy: the weather reflects her mood",
        "Personification: hate is given human qualities",
      ],
      answerIndex: 0,
      hint: "Look at the parallel pattern 'my only ___ ... my only ___'.",
      explanation:
        "Antithesis sets opposite ideas against each other in a balanced structure ('my only love' / 'my only hate'), capturing the conflict at the centre of the play. It is not personification: 'hate' here means the hated family, not hate acting like a person.",
    },
    {
      id: "exam-mcq-p1-q19",
      extract: "These violent delights have violent ends",
      question: "Friar Laurence says this just before marrying Romeo and Juliet (Act 2 Scene 6). Why is it an example of foreshadowing?",
      options: [
        "It describes a fight that has already happened",
        "It hints at the deaths that will end the lovers' passion",
        "It reveals the Friar's secret plan for the sleeping potion",
        "It is spoken directly to the audience by the Chorus",
      ],
      answerIndex: 1,
      hint: "Foreshadowing looks forward. What 'violent end' is coming?",
      explanation:
        "The Friar warns that intense passion burns out violently, and the audience, who know from the Prologue that the lovers die, hear it as a hint of the tragedy ahead. It is not spoken by the Chorus, and the potion plan does not exist until Act 4.",
    },
    {
      id: "exam-mcq-p1-q20",
      extract: "A plague o' both your houses!",
      question: "Mercutio cries this after he is fatally wounded (Act 3 Scene 1). Whom does he blame?",
      options: [
        "Only Tybalt and the Capulets",
        "Only Romeo, for coming between the fighters",
        "Both the Montagues and the Capulets, whose feud has killed him",
        "The Prince, for failing to keep order",
      ],
      answerIndex: 2,
      hint: "'Houses' means families. How many does he curse?",
      explanation:
        "He curses 'both your houses', the Montagues and the Capulets, because their feud caused his death even though he belongs to neither family. He does blame Romeo for intervening ('I was hurt under your arm'), which makes that distractor tempting, but this line curses both families.",
    },
    {
      id: "exam-mcq-p1-q21",
      question: "Which statement about 'thou' and 'you' in Shakespeare is accurate?",
      options: [
        "'Thou' is always more polite than 'you'",
        "'Thou' and 'you' mean exactly the same and are chosen only for rhythm",
        "'You' is only used by servants to their masters",
        "'Thou' can show closeness or affection, but used to a stranger or superior it can be insulting; 'you' is more formal",
      ],
      answerIndex: 3,
      hint: "Think how 'thou' is used between lovers, and how Tybalt uses it to Romeo.",
      explanation:
        "'Thou' was the intimate (or contemptuous) form, used to loved ones, children and inferiors, or to insult; 'you' was the polite, formal form. A switch between them often signals a change in feeling. It is not 'always more polite': Tybalt's 'thou art a villain' is an insult.",
    },
    {
      id: "exam-mcq-p1-q22",
      question: "Which of these lines is a perfectly regular iambic pentameter (five da-DUM beats, ten syllables)?",
      options: [
        "To be, or not to be: that is the question",
        "But, soft! what light through yonder window breaks?",
        "Double, double toil and trouble",
        "O Romeo, Romeo! wherefore art thou Romeo?",
      ],
      answerIndex: 1,
      hint: "Count the syllables first, then tap the beat.",
      explanation:
        "'but SOFT what LIGHT through YON-der WIN-dow BREAKS' has ten syllables in five iambs. 'To be, or not to be' is the tempting choice, but it has eleven syllables (an extra unstressed 'feminine ending'), and 'Double, double toil and trouble' is trochaic tetrameter with eight syllables (four DUM-da beats), not ten.",
    },
    {
      id: "exam-mcq-p1-q23",
      question: "Which is the best-written stage direction for a script?",
      options: [
        "(Mia snatches the letter, turns her back and grips the table.)",
        "Mia was really angry so she took the letter.",
        "(Mia feels angry inside because of what happened last year with her brother.)",
        "MIA: I am angry now and I am taking the letter!",
      ],
      answerIndex: 0,
      hint: "Stage directions are in the present tense and describe what an audience can actually see.",
      explanation:
        "A good stage direction is concise, present tense and shows visible action an actor can perform. The 'feels angry inside...' option is tempting because it is in brackets, but it describes hidden thoughts and back-story that an audience cannot see.",
    },
    {
      id: "exam-mcq-p1-q24",
      extract: "Friends, Romans, countrymen, lend me your ears;",
      question: "Mark Antony opens his funeral speech in Julius Caesar (Act 3 Scene 2) with this line. Which techniques does it combine?",
      options: [
        "An oxymoron and a rhetorical question",
        "Pathetic fallacy and onomatopoeia",
        "A tricolon of direct address and an imperative",
        "A statistic and an anecdote",
      ],
      answerIndex: 2,
      hint: "Count the groups he names, then look at the verb 'lend'.",
      explanation:
        "He addresses three groups in a row (a tricolon: friends, Romans, countrymen), then gives a command ('lend me your ears'), which is an imperative. There is no question mark, so it is not a rhetorical question.",
    },
    {
      id: "exam-mcq-p1-q25",
      question: "In Act 5 Scene 3, Romeo kills himself believing Juliet is dead, while the audience knows she has only taken a sleeping potion. What is this technique called?",
      options: ["Soliloquy", "Pathetic fallacy", "Comic relief", "Dramatic irony"],
      answerIndex: 3,
      hint: "Who knows more here: the character or the audience?",
      explanation:
        "Dramatic irony is when the audience knows something a character does not, which makes Romeo's death agonising to watch. A soliloquy is a speech alone on stage; Romeo does speak alone, but that does not describe the gap in knowledge the question asks about.",
    },
  ],
};

// ---------------------------------------------------------------------------
// MCQ PAPER 2: POETRY
// ---------------------------------------------------------------------------
const mcqP2: Paper<MCQ> = {
  id: "exam-mcq-p2",
  title: "MCQ Paper 2: Poetry",
  passage: {
    id: "exam-tropics-new-york",
    title: "The Tropics in New York",
    source: "Claude McKay (1889–1948), collected in Harlem Shadows (1922)",
    text:
      "Bananas ripe and green, and ginger-root,\nCocoa in pods and alligator pears,\nAnd tangerines and mangoes and grape fruit,\nFit for the highest prize at parish fairs,\n\nSet in the window, bringing memories\nOf fruit-trees laden by low-singing rills,\nAnd dewy dawns, and mystical blue skies\nIn benediction over nun-like hills.\n\nMy eyes grew dim, and I could no more gaze;\nA wave of longing through my body swept,\nAnd, hungry for the old, familiar ways,\nI turned aside and bowed my head and wept.",
    note:
      "Claude McKay was born in Jamaica and moved to the United States in 1912. Glossary: alligator pears = avocados; parish fairs = village shows where local produce wins prizes; rills = small streams; benediction = a blessing.",
  },
  questions: [
    {
      id: "exam-mcq-p2-q01",
      question: "Where does the speaker see the fruit described in stanza 1?",
      options: [
        "Growing on trees in his childhood garden",
        "At a parish fair in Jamaica",
        "Displayed in a window in New York",
        "In a painting hanging in a gallery",
      ],
      answerIndex: 2,
      hint: "Look at the first line of stanza 2 and at the title.",
      explanation:
        "'Set in the window' and the title place the fruit in a (shop) window in New York. The parish fair is tempting because it is named, but it is only a comparison: the fruit is good enough to win a prize there.",
    },
    {
      id: "exam-mcq-p2-q02",
      question: "Which technique dominates lines 1–3?",
      options: [
        "A list of tropical fruits linked by a repeated 'and' (polysyndeton)",
        "A series of rhetorical questions",
        "Onomatopoeia imitating the sounds of a market",
        "An extended metaphor comparing fruit to jewels",
      ],
      answerIndex: 0,
      hint: "What do the first three lines mostly consist of, and which small word keeps returning?",
      explanation:
        "The lines pile up fruits joined by 'and... and...', a list with polysyndeton that makes the display feel abundant and lingering. There is no comparison to jewels anywhere, so the extended metaphor option is invented.",
    },
    {
      id: "exam-mcq-p2-q03",
      extract: "Fit for the highest prize at parish fairs,",
      question: "What does this line suggest about the speaker?",
      options: [
        "He works as a judge at agricultural shows in New York",
        "He measures the fruit against the village shows of his home island, so home is still his standard",
        "He thinks the fruit is overpriced",
        "He is planning to enter the fruit in a competition",
      ],
      answerIndex: 1,
      hint: "Where would a Jamaican-born speaker have seen 'parish fairs'?",
      explanation:
        "Judging the fruit by the prizes at 'parish fairs' shows his yardstick is still the rural home he left. Nothing suggests he will actually enter a competition; the line is a comparison that reveals memory.",
    },
    {
      id: "exam-mcq-p2-q04",
      question: "What is the rhyme scheme of each stanza?",
      options: ["AABB", "ABBA", "ABCB", "ABAB"],
      answerIndex: 3,
      hint: "Match the line endings in stanza 3: gaze / swept / ways / wept.",
      explanation:
        "In each quatrain lines 1 and 3 rhyme and lines 2 and 4 rhyme (gaze/ways, swept/wept): alternate rhyme, ABAB. AABB would need gaze/swept to rhyme, which they do not.",
    },
    {
      id: "exam-mcq-p2-q05",
      extract: "And dewy dawns, and mystical blue skies\nIn benediction over nun-like hills.",
      question: "What effect do the words \"mystical\", \"benediction\" and \"nun-like\" create together?",
      options: [
        "A semantic field of religion that makes the remembered homeland feel sacred and blessed",
        "A semantic field of danger that makes the homeland seem threatening",
        "A semantic field of money that shows the fruit is valuable",
        "A semantic field of science that explains the tropical climate",
      ],
      answerIndex: 0,
      hint: "Where would you hear a 'benediction', and who are nuns?",
      explanation:
        "All three words belong to religion, so the memory of home is made holy and peaceful, almost like a paradise. Nothing in these lines is threatening, so the 'danger' reading has no evidence.",
    },
    {
      id: "exam-mcq-p2-q06",
      question: "How does the final stanza differ from the first two?",
      options: [
        "It moves from New York back to a description of Jamaica",
        "It changes from rhymed verse into free verse",
        "It moves from describing objects and memories to the speaker's own overwhelming emotion in the present",
        "It introduces a second speaker who answers the first",
      ],
      answerIndex: 2,
      hint: "Count the uses of 'I' and 'my' in each stanza.",
      explanation:
        "Stanzas 1–2 have no 'I' at all; stanza 3 suddenly uses 'My eyes', 'I could', 'my body', 'I turned', shifting from what he sees and remembers to how he reacts. It still rhymes ABAB, so it is not free verse.",
    },
    {
      id: "exam-mcq-p2-q07",
      extract: "A wave of longing through my body swept,",
      question: "Which technique is used here?",
      options: ["Simile", "Metaphor", "Oxymoron", "Personification of the fruit"],
      answerIndex: 1,
      hint: "Is there a 'like' or 'as'?",
      explanation:
        "Longing is described as if it were a wave, without 'like' or 'as', so it is a metaphor; it suggests a feeling that overpowers him (and recalls the sea between him and home). Simile is the tempting answer, but a simile needs 'like' or 'as'.",
    },
    {
      id: "exam-mcq-p2-q08",
      extract: "And, hungry for the old, familiar ways,",
      question: "Why is the word \"hungry\" especially effective here?",
      options: [
        "It shows the speaker has not eaten all day and wants to buy the fruit",
        "It suggests the speaker is greedy",
        "It shows the shopkeeper is starving",
        "It links back to the food in stanza 1: his real hunger is for home, which the fruit cannot satisfy",
      ],
      answerIndex: 3,
      hint: "What is he 'hungry' for, according to the line?",
      explanation:
        "He is hungry 'for the old, familiar ways', not for food; the word echoes the fruit of stanza 1 and shows his longing is for a whole way of life. The literal 'not eaten all day' reading ignores what the line says he hungers for.",
    },
    {
      id: "exam-mcq-p2-q09",
      extract: "I turned aside and bowed my head and wept.",
      question: "What is the main effect of the repeated \"and\" in this final line?",
      options: [
        "It slows the line down so each action of grief lands separately, ending on the climax 'wept'",
        "It speeds the line up to show he is running away",
        "It creates a cheerful, sing-song rhythm",
        "It shows the speaker is confused about what happened",
      ],
      answerIndex: 0,
      hint: "Read the line aloud. Does it feel fast or slow?",
      explanation:
        "The polysyndeton separates three actions (turned, bowed, wept), slowing the line so the grief builds to the final word. It does not speed the line up: each 'and' adds a pause.",
    },
    {
      id: "exam-mcq-p2-q10",
      question: "Which statement best sums up the poem's central idea?",
      options: [
        "City life in New York is exciting and full of variety",
        "A shop window of fruit triggers an emigrant's overwhelming homesickness",
        "Shopkeepers charge too much for imported goods",
        "The speaker is in love with someone he left behind",
      ],
      answerIndex: 1,
      hint: "What does the sight of the fruit make the speaker do in the last line?",
      explanation:
        "Ordinary fruit in a window brings back memories of home and makes the speaker weep: the poem is about displacement and longing to belong. The 'excitement of city life' option is wrong because New York is barely described; the focus is the lost homeland.",
    },
    {
      id: "exam-mcq-p2-q11",
      question: "What is the most likely purpose of the title \"The Tropics in New York\"?",
      options: [
        "To tell readers where to buy tropical fruit",
        "To suggest that New York has a tropical climate",
        "To juxtapose two worlds, mirroring a speaker caught between his old home and his new one",
        "To show the speaker prefers New York to the Caribbean",
      ],
      answerIndex: 2,
      hint: "Two very different places are pushed together in four words.",
      explanation:
        "The title places the tropics inside New York, the same clash the speaker feels in himself between where he lives and where he belongs. The poem ends in weeping for 'the old, familiar ways', so it clearly does not prefer New York.",
    },
    {
      id: "exam-mcq-p2-q12",
      question: "What is enjambment?",
      options: [
        "A pause in the middle of a line, often marked by punctuation",
        "The repetition of a consonant sound at the start of nearby words",
        "A group of lines forming a unit, like a paragraph",
        "When a sentence runs on from one line of poetry into the next without punctuation at the line-end",
      ],
      answerIndex: 3,
      hint: "Think of a sentence 'stepping over' the end of a line.",
      explanation:
        "Enjambment is when the sense runs over a line-break, pulling the reader on. The tempting confusion is with caesura, which is a pause in the middle of a line.",
    },
    {
      id: "exam-mcq-p2-q13",
      extract: "Yes. I remember Adlestrop—",
      question: "Edward Thomas opens 'Adlestrop' (1917) with this line. What does the full stop after \"Yes\" create?",
      options: ["A caesura", "Enjambment", "Sibilance", "A refrain"],
      answerIndex: 0,
      hint: "A pause inside a line has a name from the Latin for 'cutting'.",
      explanation:
        "The full stop makes a strong pause within the line, a caesura, so the poem begins like someone answering a question in conversation. It is not enjambment, which happens at the end of a line, not in the middle.",
    },
    {
      id: "exam-mcq-p2-q14",
      question: "Which line is the clearest example of sibilance?",
      options: [
        "\"Tyger Tyger, burning bright\" (William Blake)",
        "\"Half a league, half a league\" (Alfred, Lord Tennyson)",
        "\"And the silken, sad, uncertain rustling of each purple curtain\" (Edgar Allan Poe)",
        "\"Bent double, like old beggars under sacks\" (Wilfred Owen)",
      ],
      answerIndex: 2,
      hint: "Sibilance is the repetition of hissing 's' and soft 'c' sounds.",
      explanation:
        "'silken, sad, uncertain rustling' repeats soft 's' sounds that imitate the whisper of the curtain. Owen's line has hard 'b' alliteration ('Bent... beggars'), which is the tempting but wrong choice.",
    },
    {
      id: "exam-mcq-p2-q15",
      extract: "I'm Nobody! Who are you?\nAre you – Nobody – too?",
      question: "In this poem, Emily Dickinson's speaker goes on to suggest that being 'Somebody' is...",
      options: [
        "glamorous and something everyone should aim for",
        "dreary and public, like a frog announcing its own name to an admiring bog",
        "dangerous, like being a soldier in war",
        "impossible for women in her society",
      ],
      answerIndex: 1,
      hint: "The poem compares a 'Somebody' to a noisy creature in a swamp.",
      explanation:
        "The speaker says 'How dreary – to be – Somebody! / How public – like a Frog –', mocking fame and celebrating a private identity. The 'glamorous' option is the opposite of the poem's playful scorn for being Somebody.",
    },
    {
      id: "exam-mcq-p2-q16",
      extract: "Give me your tired, your poor,\nYour huddled masses yearning to breathe free,",
      question: "In Emma Lazarus's sonnet 'The New Colossus' (1883), who speaks these lines?",
      options: [
        "A ship's captain bringing migrants to America",
        "A migrant arriving in New York",
        "The President of the United States",
        "The Statue of Liberty, the 'Mother of Exiles'",
      ],
      answerIndex: 3,
      hint: "The poem's title refers to a giant statue, and she cries 'with silent lips'.",
      explanation:
        "The statue, named 'Mother of Exiles' in the poem, speaks these words of welcome to the world's migrants. A migrant is tempting because the lines are about migrants, but they are the ones being welcomed, not speaking.",
    },
    {
      id: "exam-mcq-p2-q17",
      question: "Why does John Agard write 'Half-Caste' largely in phonetically spelled Caribbean English rather than Standard English?",
      options: [
        "To assert his cultural voice and challenge the idea that Standard English is the only 'correct' or 'whole' way to speak",
        "Because he was unable to write Standard English",
        "To make the poem easier for young children to read",
        "To imitate the way Shakespeare's characters speak",
      ],
      answerIndex: 0,
      hint: "The poem argues against the idea that a mixed identity is 'half' of something. How might the language itself make the same argument?",
      explanation:
        "The form enacts the message: by writing in his own voice, Agard refuses to be judged 'half' by Standard English norms. The idea that he could not write Standard English is wrong; the choice is deliberate and political.",
    },
    {
      id: "exam-mcq-p2-q18",
      question: "In Grace Nichols's 'Island Man', what is contrasted with the man's morning in London?",
      options: [
        "His job in a busy London office",
        "A holiday he is planning in Europe",
        "His dream or memory of a Caribbean island: sea, surf and birds",
        "His childhood in a cold northern village",
      ],
      answerIndex: 2,
      hint: "What does he hear as he wakes up, before London's traffic takes over?",
      explanation:
        "The poem moves between the island he dreams of (blue surf, wild seabirds) and the grey roar of London traffic, showing a divided sense of home. There is no office or European holiday in the poem.",
    },
    {
      id: "exam-mcq-p2-q19",
      question: "In 'Search For My Tongue', why does Sujata Bhatt print lines in Gujarati script in the middle of an English poem?",
      options: [
        "To show off her knowledge of other languages",
        "So the poem looks more decorative on the page",
        "Because the publisher made a printing error",
        "So the form shows her mother tongue 'growing back' and refusing to be lost",
      ],
      answerIndex: 3,
      hint: "The poem fears losing a mother tongue, then imagines it returning like a plant.",
      explanation:
        "The Gujarati lines physically appear in the poem just as the speaker describes her mother tongue growing back, so the form proves her point that it survives. 'Decorative' misses the link between form and meaning.",
    },
    {
      id: "exam-mcq-p2-q20",
      question: "Which poetic form has 14 lines, often in iambic pentameter, with a turn in thought (a volta)?",
      options: ["Haiku", "Sonnet", "Ballad", "Limerick"],
      answerIndex: 1,
      hint: "Shakespeare wrote 154 of them, and Romeo and Juliet's first conversation is one.",
      explanation:
        "A sonnet has 14 lines and usually a volta. A ballad is a narrative poem in quatrains with no fixed length, and a haiku has just three lines.",
    },
    {
      id: "exam-mcq-p2-q21",
      question: "What is a dramatic monologue?",
      options: [
        "Any poem with more than one speaker",
        "A poem written by a playwright",
        "A poem spoken by a single character (a persona, not the poet) to a silent listener, revealing more than they intend",
        "A speech that ends a play",
      ],
      answerIndex: 2,
      hint: "Robert Browning's 'My Last Duchess' is the classic example.",
      explanation:
        "In a dramatic monologue a persona speaks to a silent listener and gives away their character, as Browning's Duke does. It is not 'any poem by a playwright': the form is defined by its single invented speaker.",
    },
    {
      id: "exam-mcq-p2-q22",
      question: "Which is the strongest opening for a one-minute spoken analysis of an unseen poem?",
      options: [
        "\"This poem is about fruit and it is quite sad and I liked it.\"",
        "\"In 'The Tropics in New York', Claude McKay shows how one ordinary sight can unlock an emigrant's grief; I'll look at how the imagery, and then the shift in the final stanza, build that longing.\"",
        "\"Claude McKay was born in 1889 in Jamaica and he wrote many poems and novels in his life.\"",
        "\"The rhyme scheme is ABAB. There is a metaphor in line 10.\"",
      ],
      answerIndex: 1,
      hint: "A strong spoken opening names the poem, gives a clear overall idea, and tells the listener where you are going.",
      explanation:
        "The best opening names the poem and poet, offers an interpretation (a thesis) and signposts the structure of the talk. The ABAB option is accurate but just lists features with no interpretation or effect, which spoken analysis marks heavily penalise.",
    },
    {
      id: "exam-mcq-p2-q23",
      question: "You have written a poem about moving to Singapore. Which is the best sentence for your commentary?",
      options: [
        "\"My poem is good because it rhymes and has lots of describing words.\"",
        "\"I wrote this poem because my teacher asked me to write about identity.\"",
        "\"I used similes and metaphors in my poem.\"",
        "\"I ended each stanza on a short, two-word line so the reader pauses on the gap between my two homes, just as I kept pausing between them.\"",
      ],
      answerIndex: 3,
      hint: "A commentary explains a specific choice and its intended effect.",
      explanation:
        "The best commentary names a precise choice (short final lines), its effect (a pause) and links it to meaning (being between two homes). 'I used similes and metaphors' is tempting because it names techniques, but it gives no example and no effect.",
    },
    {
      id: "exam-mcq-p2-q24",
      extract: "I hear lake water lapping with low sounds by the shore;\nWhile I stand on the roadway, or on the pavements grey,\nI hear it in the deep heart's core.",
      question: "In W. B. Yeats's 'The Lake Isle of Innisfree', what effect does the repeated 'l' sound in the first line create?",
      options: [
        "A gentle, soothing sound that imitates the lake and contrasts with the grey city pavements",
        "A harsh, violent sound that suggests a storm",
        "A fast, urgent rhythm that suggests panic",
        "A comic effect that makes the reader laugh",
      ],
      answerIndex: 0,
      hint: "Say 'lake water lapping with low' aloud. Is the sound soft or hard?",
      explanation:
        "The soft, liquid alliteration of 'l' mimics water lapping and makes the remembered place feel calm, set against the 'pavements grey' where he actually stands. A 'harsh' effect would need hard sounds like 'k' or 'b'.",
    },
    {
      id: "exam-mcq-p2-q25",
      extract: "Bent double, like old beggars under sacks,",
      question: "Wilfred Owen opens 'Dulce et Decorum Est' with this simile describing soldiers. What is its main effect?",
      options: [
        "It shows the soldiers are carrying food to the poor",
        "It makes the soldiers seem strong and heroic",
        "It shatters the glorious image of soldiers, showing them as exhausted, aged and broken",
        "It shows the soldiers are pretending to be beggars to trick the enemy",
      ],
      answerIndex: 2,
      hint: "Young soldiers are compared to old beggars. What does that do to the idea of glorious war?",
      explanation:
        "Comparing young men to 'old beggars' makes them seem worn out and pitiful, attacking the idea that war is noble. 'Strong and heroic' is the exact opposite of what the simile suggests.",
    },
  ],
};

// ---------------------------------------------------------------------------
// MCQ PAPER 3: PROSE & THE NOVEL
// ---------------------------------------------------------------------------
const mcqP3: Paper<MCQ> = {
  id: "exam-mcq-p3",
  title: "MCQ Paper 3: Prose & the Novel",
  passage: {
    id: "exam-great-expectations-ch1",
    title: "Pip in the churchyard",
    source: "Charles Dickens, Great Expectations (1861), Chapter 1",
    text:
      "Ours was the marsh country, down by the river, within, as the river wound, twenty miles of the sea. My first most vivid and broad impression of the identity of things seems to me to have been gained on a memorable raw afternoon towards evening. At such a time I found out for certain that this bleak place overgrown with nettles was the churchyard; and that Philip Pirrip, late of this parish, and also Georgiana wife of the above, were dead and buried; and that Alexander, Bartholomew, Abraham, Tobias, and Roger, infant children of the aforesaid, were also dead and buried; and that the dark flat wilderness beyond the churchyard, intersected with dikes and mounds and gates, with scattered cattle feeding on it, was the marshes; and that the low leaden line beyond was the river; and that the distant savage lair from which the wind was rushing was the sea; and that the small bundle of shivers growing afraid of it all and beginning to cry, was Pip.\n\n\"Hold your noise!\" cried a terrible voice, as a man started up from among the graves at the side of the church porch. \"Keep still, you little devil, or I'll cut your throat!\"\n\nA fearful man, all in coarse grey, with a great iron on his leg. A man with no hat, and with broken shoes, and with an old rag tied round his head. A man who had been soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars; who limped, and shivered, and glared and growled; and whose teeth chattered in his head as he seized me by the chin.\n\n\"O! Don't cut my throat, sir,\" I pleaded in terror. \"Pray don't do it, sir.\"",
    note:
      "Pip, an orphan, is visiting the graves of his parents and five baby brothers on the Kent marshes. Glossary: dikes = ditches or banks that control water; leaden = grey and heavy, like lead.",
  },
  questions: [
    {
      id: "exam-mcq-p3-q01",
      question: "According to the passage, what is \"this bleak place overgrown with nettles\"?",
      options: ["The marshes", "The churchyard", "Pip's garden", "The riverbank"],
      answerIndex: 1,
      hint: "Find the phrase and read to the end of that clause.",
      explanation:
        "Pip 'found out for certain that this bleak place overgrown with nettles was the churchyard'. The marshes are tempting because they are also bleak, but they are 'the dark flat wilderness beyond the churchyard'.",
    },
    {
      id: "exam-mcq-p3-q02",
      question: "What does the phrase \"late of this parish\" (copied from a gravestone) tell us about Philip Pirrip?",
      options: [
        "He always arrived late to church",
        "He recently moved to another parish",
        "He has died; he used to live in this parish",
        "He was the parish priest",
      ],
      answerIndex: 2,
      hint: "On a gravestone, what does 'the late Mr Smith' mean?",
      explanation:
        "'Late' here means deceased, and the sentence confirms he is 'dead and buried'. 'Always arrived late' takes the everyday meaning of the word and ignores the gravestone context.",
    },
    {
      id: "exam-mcq-p3-q03",
      question: "Which best describes the narrative voice of this passage?",
      options: [
        "A first-person narrator looking back on his childhood as an adult",
        "A third-person omniscient narrator who knows every character's thoughts",
        "A child narrating events as they happen, in the present tense",
        "The convict telling his own story",
      ],
      answerIndex: 0,
      hint: "Look at 'Ours', 'My first... impression' and 'seems to me to have been gained'.",
      explanation:
        "The pronouns 'my', 'me' and 'I' make it first person, and 'seems to me to have been gained' shows an older Pip remembering. It is not a child in the present tense: the passage uses the past tense ('found out', 'cried').",
    },
    {
      id: "exam-mcq-p3-q04",
      extract: "and that the small bundle of shivers growing afraid of it all and beginning to cry, was Pip.",
      question: "Why does the narrator describe his younger self as \"the small bundle of shivers\" rather than 'I'?",
      options: [
        "Because Pip has forgotten his own name",
        "To show that Pip is wrapped in warm blankets",
        "Because the narrator dislikes his younger self",
        "To make the child seem tiny, vulnerable and almost lost in the landscape, seen from an adult distance",
      ],
      answerIndex: 3,
      hint: "How big is a 'bundle'? And what does 'shivers' suggest he is feeling?",
      explanation:
        "Turning himself into a 'small bundle of shivers' shrinks the child against the vast marshes and sea and lets the adult narrator look back with gentle sympathy. 'Dislikes his younger self' is not supported: the tone is tender, not scornful.",
    },
    {
      id: "exam-mcq-p3-q05",
      question: "What is the effect of the very long sentence built from repeated \"and that...\" clauses in paragraph 1?",
      options: [
        "It shows the narrator cannot write clearly",
        "It sweeps outward across graves, marshes, river and sea, then narrows to tiny Pip at the end, building his dawning realisation",
        "It creates a fast, action-packed pace",
        "It lists the people who will appear later in the novel",
      ],
      answerIndex: 1,
      hint: "Track what each 'and that...' clause adds. Where does the sentence finish?",
      explanation:
        "The cumulative sentence moves from the churchyard out to the sea, then lands on 'was Pip', so the reader experiences the child's realisation piece by piece and sees how small he is. It is not fast or action-packed: the action only starts with 'Hold your noise!'",
    },
    {
      id: "exam-mcq-p3-q06",
      extract: "the distant savage lair from which the wind was rushing was the sea",
      question: "What does the metaphor \"savage lair\" suggest about the sea?",
      options: [
        "It is a wild beast's den, so the sea seems dangerous and predatory",
        "It is a calm, sheltered harbour",
        "It is a place where Pip likes to play",
        "It is full of fish for the villagers to catch",
      ],
      answerIndex: 0,
      hint: "What kind of creature lives in a 'lair'?",
      explanation:
        "A 'lair' is a wild animal's den, and 'savage' adds ferocity, so the wind 'rushing' from it seems like a beast attacking. 'Calm harbour' contradicts both words.",
    },
    {
      id: "exam-mcq-p3-q07",
      question: "What is the main structural effect of the line \"Hold your noise!\" coming straight after the long first paragraph?",
      options: [
        "It slows the story down for more description",
        "It introduces a flashback to Pip's parents",
        "It shocks the reader with a sudden, short burst of speech that breaks the slow, reflective mood",
        "It reveals the narrator is talking to the reader",
      ],
      answerIndex: 2,
      hint: "Compare the length and punctuation of 'Hold your noise!' with the sentence before it.",
      explanation:
        "After a long, quiet, reflective sentence, an exclaimed command bursts in, so the reader jumps just as Pip does. It speeds things up rather than slowing them down.",
    },
    {
      id: "exam-mcq-p3-q08",
      extract: "A fearful man, all in coarse grey, with a great iron on his leg.",
      question: "What can the reader infer about the man from this description?",
      options: [
        "He is a blacksmith who has been working at his forge",
        "He is Pip's long-lost uncle",
        "He is a soldier in uniform",
        "He is probably an escaped convict, still wearing a leg-iron",
      ],
      answerIndex: 3,
      hint: "Who wears an iron fastened to the leg?",
      explanation:
        "A 'great iron on his leg' is a shackle, and the coarse grey clothing suggests a prison uniform, so he is an escaped convict. The blacksmith option is tempting because of 'iron', but it is on his leg, not in his hand.",
    },
    {
      id: "exam-mcq-p3-q09",
      extract: "A man who had been soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars;",
      question: "Which is the most perceptive comment on this list?",
      options: [
        "The list shows the man is a careless person who does not look after his clothes",
        "The passive verbs show things being done to him, so beneath the terror Dickens hints that he is also a suffering victim",
        "The list makes the man seem powerful and in complete control",
        "The list is there only to describe the weather",
      ],
      answerIndex: 1,
      hint: "Who or what is doing the soaking, smothering and cutting: the man, or the landscape?",
      explanation:
        "Every verb is passive ('soaked in', 'lamed by', 'cut by'): the landscape attacks him. Combined with polysyndeton, this builds sympathy as well as fear. 'Powerful and in control' is the opposite of what the passive verbs suggest.",
    },
    {
      id: "exam-mcq-p3-q10",
      extract: "A man with no hat, and with broken shoes, and with an old rag tied round his head.",
      question: "Grammatically, what kind of sentence is this?",
      options: [
        "A compound sentence joined by 'and'",
        "A complex sentence with a subordinate clause",
        "A minor sentence (fragment): it has no main verb",
        "A rhetorical question",
      ],
      answerIndex: 2,
      hint: "Look for a verb that tells you what the man does or is. Is there one?",
      explanation:
        "There is no main verb, only a noun ('A man') with descriptive phrases, so it is a minor sentence; the fragments feel like quick glimpses through Pip's frightened eyes. It is not compound: 'and' here joins phrases, not two main clauses.",
    },
    {
      id: "exam-mcq-p3-q11",
      question: "Which phrase best supports the idea that the setting is threatening?",
      options: [
        "\"with scattered cattle feeding on it\"",
        "\"within, as the river wound, twenty miles of the sea\"",
        "\"Alexander, Bartholomew, Abraham, Tobias, and Roger\"",
        "\"the distant savage lair from which the wind was rushing\"",
      ],
      answerIndex: 3,
      hint: "Choose the words that make the place sound dangerous, not just sad or factual.",
      explanation:
        "'savage lair' and the 'rushing' wind make the landscape sound like an attacking beast. The list of the dead brothers' names is sad, which makes it tempting, but sadness is not the same as threat.",
    },
    {
      id: "exam-mcq-p3-q12",
      extract: "a memorable raw afternoon towards evening",
      question: "What does \"raw\" mean in this context?",
      options: [
        "Uncooked",
        "Cold, damp and bitter",
        "Bright and sunny",
        "Inexperienced",
      ],
      answerIndex: 1,
      hint: "This is a word about the weather on the marshes.",
      explanation:
        "A 'raw' day is cold and damp in a way that chills you, matching the 'bleak' churchyard and Pip's 'shivers'. 'Uncooked' is the everyday meaning, but it does not fit an afternoon.",
    },
    {
      id: "exam-mcq-p3-q13",
      question: "Which famous opening line is narrated in the first person?",
      options: [
        "\"Call me Ishmael.\" (Herman Melville, Moby-Dick)",
        "\"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.\" (Jane Austen, Pride and Prejudice)",
        "\"Mr. Utterson the lawyer was a man of a rugged countenance that was never lighted by a smile\" (R. L. Stevenson)",
        "\"When Mary Lennox was sent to Misselthwaite Manor to live with her uncle everybody said she was the most disagreeable-looking child ever seen.\" (F. H. Burnett)",
      ],
      answerIndex: 0,
      hint: "Look for the narrator referring to himself.",
      explanation:
        "'Call me Ishmael' has the narrator speaking about himself ('me'), so it is first person. The Stevenson and Burnett lines describe characters as 'he' or 'she' from outside, which is third person.",
    },
    {
      id: "exam-mcq-p3-q14",
      extract: "Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster.",
      question: "In A Christmas Carol (1843), what does the simile \"solitary as an oyster\" suggest about Scrooge?",
      options: [
        "He is rich, like a pearl",
        "He enjoys the seaside",
        "He is closed up inside a hard shell, cut off from other people",
        "He is slippery and dishonest",
      ],
      answerIndex: 2,
      hint: "Think about what an oyster's shell does.",
      explanation:
        "An oyster lives sealed inside a tough shell, so Scrooge is shut off from others, which also hints that something precious (a 'pearl' of goodness) might be hidden inside. The 'rich like a pearl' option twists that hint into a claim the simile does not make: it is about isolation, not wealth.",
    },
    {
      id: "exam-mcq-p3-q15",
      question: "Which sentence uses indirect characterisation (showing rather than telling)?",
      options: [
        "Mrs Lim was an impatient woman.",
        "Mr Tan was kind and generous to everyone.",
        "Aunt Rose was very strict.",
        "Grandpa drummed his fingers on the counter and checked his watch for the third time in a minute.",
      ],
      answerIndex: 3,
      hint: "Which sentence makes you work out the trait for yourself?",
      explanation:
        "Drumming fingers and checking the watch let the reader infer impatience without being told; that is indirect characterisation. The other three simply state the trait ('impatient', 'kind', 'strict'), which is direct characterisation.",
    },
    {
      id: "exam-mcq-p3-q16",
      question: "A writer drops an early hint about an event that will happen later in the novel. What is this called?",
      options: ["Flashback", "Foreshadowing", "Cliffhanger", "Resolution"],
      answerIndex: 1,
      hint: "It casts a 'shadow' of the future ahead of time.",
      explanation:
        "Foreshadowing hints at what is to come. A flashback goes the other way, back in time to an earlier event.",
    },
    {
      id: "exam-mcq-p3-q17",
      question: "A novel begins in the middle of a car chase, with no background given. What is this opening technique called?",
      options: ["In medias res", "Exposition", "Denouement", "Epilogue"],
      answerIndex: 0,
      hint: "It is Latin for 'into the middle of things'.",
      explanation:
        "'In medias res' means starting in the middle of the action. Exposition is the opposite approach: it sets out background information first.",
    },
    {
      id: "exam-mcq-p3-q18",
      question: "What is an unreliable narrator?",
      options: [
        "A narrator who changes from chapter to chapter",
        "A narrator who tells the story in the third person",
        "A narrator whose account cannot be fully trusted, because of bias, ignorance, youth or deception",
        "A narrator who is not a main character",
      ],
      answerIndex: 2,
      hint: "Think about a narrator who does not understand, or does not tell the truth about, what is happening.",
      explanation:
        "An unreliable narrator's version of events is limited or distorted, so the reader must read between the lines. Changing narrators between chapters is a different technique: multiple narrators.",
    },
    {
      id: "exam-mcq-p3-q19",
      question: "Which of these is a theme rather than a plot event?",
      options: [
        "Pip receives a fortune from a secret benefactor",
        "Jane leaves Gateshead for Lowood School",
        "Scrooge is visited by three spirits",
        "The way social class shapes how people are judged",
      ],
      answerIndex: 3,
      hint: "A theme is a big idea that a text explores; a plot event is something that happens.",
      explanation:
        "A theme is an abstract idea (class, identity, ambition) that runs through a text; the other three are events in the story. The Scrooge option is tempting because it carries a message, but the visit itself is plot.",
    },
    {
      id: "exam-mcq-p3-q20",
      extract: "The old woman's knuckles whitened on the handle of her bag as the stranger crossed the empty platform towards her.",
      question: "What is the most reasonable inference about the old woman?",
      options: [
        "She is cold and needs gloves",
        "She is anxious or afraid of the stranger",
        "She is angry with her bag",
        "She is excited to see an old friend",
      ],
      answerIndex: 1,
      hint: "Why might someone grip something so tightly that their knuckles turn white?",
      explanation:
        "Gripping her bag hard as a stranger approaches on an empty platform suggests fear or anxiety. 'Excited to see a friend' does not fit: he is a 'stranger'.",
    },
    {
      id: "exam-mcq-p3-q21",
      question: "Which is the best thesis statement for a discursive essay on 'Should mobile phones be banned in schools?'",
      options: [
        "\"Phones are bad and everyone knows it.\"",
        "\"In this essay I will write about phones.\"",
        "\"Although phones can be powerful learning tools, the evidence on distraction and wellbeing suggests that schools should restrict, rather than completely ban, their use.\"",
        "\"Phones were invented in the twentieth century and are now used by billions of people.\"",
      ],
      answerIndex: 2,
      hint: "A strong thesis weighs both sides and makes a clear, nuanced judgement.",
      explanation:
        "The best thesis acknowledges the other side ('Although...') and commits to a precise, reasoned position. 'In this essay I will write about phones' announces the topic but takes no position at all.",
    },
    {
      id: "exam-mcq-p3-q22",
      question: "Which discourse marker best introduces a counter-argument in a discursive essay?",
      options: ["Furthermore,", "For example,", "As a result,", "On the other hand,"],
      answerIndex: 3,
      hint: "You need a phrase that turns to the opposite view.",
      explanation:
        "'On the other hand' signals a contrasting viewpoint. 'Furthermore' is tempting because it is a sophisticated connective, but it adds another point in the same direction.",
    },
    {
      id: "exam-mcq-p3-q23",
      question: "Which sentence embeds a quotation most effectively in analytical writing?",
      options: [
        "Dickens presents the convict as frightening. Quote: \"a terrible voice\".",
        "Dickens presents the convict as frightening when he \"started up from among the graves\", as if he were a corpse rising from the dead.",
        "\"Keep still, you little devil, or I'll cut your throat!\" This shows he is scary.",
        "The convict is frightening, this is shown in the text in many places.",
      ],
      answerIndex: 1,
      hint: "An embedded quotation fits smoothly into your own sentence and is then analysed.",
      explanation:
        "The best answer weaves a short quotation into the writer's sentence and immediately explores its connotation (rising like a corpse). The 'Keep still...' option uses a dropped-in quotation followed by a vague 'This shows he is scary', which is not embedded and barely analysed.",
    },
    {
      id: "exam-mcq-p3-q24",
      extract: "street after street, all lighted up as if for a procession and all as empty as a church",
      question: "In Strange Case of Dr Jekyll and Mr Hyde (1886), Mr Enfield describes London at three in the morning. What atmosphere do the similes create?",
      options: [
        "An eerie, unsettling emptiness: the streets are lit as if for a crowd, yet no one is there",
        "A joyful, festive atmosphere because a parade is about to begin",
        "A peaceful, religious atmosphere because people are at church",
        "A busy, noisy atmosphere of city nightlife",
      ],
      answerIndex: 0,
      hint: "Is there actually a procession? Is anyone in the 'church'?",
      explanation:
        "The streets are lit 'as if' for a procession but are 'as empty as a church' at night, so the contrast feels eerie and builds suspense before Hyde appears. The festive reading misses 'as if': there is no actual parade.",
    },
    {
      id: "exam-mcq-p3-q25",
      extract: "When Mary Lennox was sent to Misselthwaite Manor to live with her uncle everybody said she was the most disagreeable-looking child ever seen.",
      question: "The Secret Garden (1911) opens with this sentence. What is its most likely purpose?",
      options: [
        "To make the reader dislike Mary for the rest of the novel",
        "To describe Misselthwaite Manor in detail",
        "To introduce an unappealing, unloved heroine, setting up the reader to expect her to change",
        "To show that Mary's uncle is cruel",
      ],
      answerIndex: 2,
      hint: "Why might a novelist start with a heroine nobody likes?",
      explanation:
        "Opening with an unlikeable, unwanted child hooks the reader and sets up a character arc: we expect (and watch) Mary transform. 'Dislike her for the rest of the novel' ignores how novels develop characters; the manor and the uncle are only named, not described.",
    },
  ],
};

// ---------------------------------------------------------------------------
// MCQ PAPER 4: LANGUAGE & WRITING SKILLS
// ---------------------------------------------------------------------------
const mcqP4: Paper<MCQ> = {
  id: "exam-mcq-p4",
  title: "MCQ Paper 4: Language & Writing Skills (SPaG, rhetoric, structure)",
  questions: [
    {
      id: "exam-mcq-p4-q01",
      question: "Which sentence uses a semicolon correctly?",
      options: [
        "The monsoon arrived early; the drains overflowed by noon.",
        "The monsoon arrived; early in the morning.",
        "Because the monsoon arrived early; the drains overflowed.",
        "The monsoon brought; rain, wind and thunder.",
      ],
      answerIndex: 0,
      hint: "A semicolon joins two closely related main clauses, each of which could stand alone as a sentence.",
      explanation:
        "'The monsoon arrived early' and 'the drains overflowed by noon' are both complete sentences, so a semicolon can join them. The 'Because...' option fails because 'Because the monsoon arrived early' is a subordinate clause that cannot stand alone; it needs a comma.",
    },
    {
      id: "exam-mcq-p4-q02",
      question: "Which phrase uses the apostrophe correctly to show that the books belong to several children?",
      options: ["the childrens' books", "the children's books", "the childrens books", "the children's' books"],
      answerIndex: 1,
      hint: "'Children' is already plural. Add the possessive to the word as it is.",
      explanation:
        "For a plural that does not end in 's' (children, women, people), add apostrophe + s: children's. 'Childrens'' is the common error: it treats 'childrens' as if it were the plural.",
    },
    {
      id: "exam-mcq-p4-q03",
      question: "Which sentence is correct?",
      options: [
        "Its clear that the school has lost it's way.",
        "It's clear that the school has lost it's way.",
        "It's clear that the school has lost its way.",
        "Its clear that the school has lost its way.",
      ],
      answerIndex: 2,
      hint: "'It's' always means 'it is' or 'it has'. Test each one by expanding it.",
      explanation:
        "'It's clear' = 'it is clear' (needs the apostrophe); 'its way' is possessive (no apostrophe, like 'his' or 'hers'). The option ‘It's clear that the school has lost it's way.’ is tempting, but 'lost it is way' makes no sense.",
    },
    {
      id: "exam-mcq-p4-q04",
      question: "Which of these is a comma splice?",
      options: [
        "The bell rang, and everyone rushed out.",
        "When the bell rang, everyone rushed out.",
        "The bell rang; everyone rushed out.",
        "The bell rang, everyone rushed out.",
      ],
      answerIndex: 3,
      hint: "A comma splice joins two complete sentences with only a comma.",
      explanation:
        "'The bell rang' and 'everyone rushed out' are both main clauses joined by a bare comma: a comma splice. The option ‘The bell rang, and everyone rushed out.’ is fine because the conjunction 'and' joins the clauses, and ‘The bell rang; everyone rushed out.’ uses a semicolon correctly.",
    },
    {
      id: "exam-mcq-p4-q05",
      question: "Which sentence uses a colon correctly?",
      options: [
        "She packed three things: a torch, a map and a compass.",
        "She packed: a torch, a map and a compass.",
        "She: packed a torch, a map and a compass.",
        "She packed three things, a torch: a map and a compass.",
      ],
      answerIndex: 0,
      hint: "What comes before a colon should be a complete sentence.",
      explanation:
        "'She packed three things' is complete, and the colon introduces the list that explains it. 'She packed: a torch...' is tempting, but the colon splits a verb from its object, which is incorrect.",
    },
    {
      id: "exam-mcq-p4-q06",
      extract: "Her courage astonished the crowd that had gathered by the river.",
      question: "Which word in this sentence is an abstract noun?",
      options: ["crowd", "courage", "river", "astonished"],
      answerIndex: 1,
      hint: "An abstract noun names an idea, quality or feeling you cannot touch.",
      explanation:
        "'Courage' is a quality, not a physical thing, so it is an abstract noun. 'Crowd' is a (collective) concrete noun: you can see a crowd. 'Astonished' is a verb.",
    },
    {
      id: "exam-mcq-p4-q07",
      extract: "Although the hawker centre was crowded, we found a table near the satay stall.",
      question: "Which part of this sentence is the subordinate clause?",
      options: [
        "we found a table",
        "near the satay stall",
        "Although the hawker centre was crowded",
        "we found a table near the satay stall",
      ],
      answerIndex: 2,
      hint: "Which part cannot stand on its own as a sentence? Look for the subordinating conjunction.",
      explanation:
        "'Although the hawker centre was crowded' begins with the subordinating conjunction 'although' and does not make sense alone, so it is the subordinate clause. 'Near the satay stall' is a phrase, not a clause: it has no verb.",
    },
    {
      id: "exam-mcq-p4-q08",
      question: "Which sentence is punctuated correctly?",
      options: [
        "My cousin who lives in Perth, is a doctor.",
        "My cousin, who lives in Perth is a doctor.",
        "My cousin who lives, in Perth is a doctor.",
        "My cousin, who lives in Perth, is a doctor.",
      ],
      answerIndex: 3,
      hint: "Extra information in the middle of a sentence needs a comma on both sides, like brackets.",
      explanation:
        "'who lives in Perth' is a non-essential relative clause, so it is enclosed by a pair of commas (parenthesis). The options with only one comma are the common error: parenthetical commas come in pairs.",
    },
    {
      id: "exam-mcq-p4-q09",
      question: "Which sentence is in the passive voice?",
      options: [
        "The storm flooded the road.",
        "The road was flooded by the storm.",
        "The road flooded quickly.",
        "The storm is flooding the road.",
      ],
      answerIndex: 1,
      hint: "In the passive, the thing affected comes first, often with 'was... by'.",
      explanation:
        "In 'The road was flooded by the storm', the subject (the road) receives the action, using 'was' + past participle: passive. 'The road flooded quickly' is tempting because the road comes first, but there the road itself is doing the verb in the active voice.",
    },
    {
      id: "exam-mcq-p4-q10",
      question: "Which sentence uses 'there', 'their' and 'they're' correctly?",
      options: [
        "They're leaving their bags over there.",
        "Their leaving there bags over they're.",
        "There leaving their bags over they're.",
        "They're leaving there bags over their.",
      ],
      answerIndex: 0,
      hint: "they're = they are; their = belonging to them; there = a place.",
      explanation:
        "'They're (they are) leaving their (belonging to them) bags over there (place).' Each of the other options swaps at least one homophone.",
    },
    {
      id: "exam-mcq-p4-q11",
      question: "Which sentence is grammatically correct in formal Standard English?",
      options: [
        "There were less students in the hall than last year.",
        "There was fewer students in the hall than last year.",
        "There were fewer students in the hall than last year.",
        "There was less students in the hall than last year.",
      ],
      answerIndex: 2,
      hint: "Can you count students? Then check that the verb agrees with a plural.",
      explanation:
        "Use 'fewer' with countable plural nouns (students) and 'less' with uncountable ones (water, time); the plural 'students' also needs 'were'. 'There was fewer students' has the right quantifier but the wrong verb.",
    },
    {
      id: "exam-mcq-p4-q12",
      extract: "Ninety per cent of plastic bags used in Singapore are thrown away within twenty minutes. That is not convenience; that is waste.",
      question: "This practice speech extract (the statistic is invented for the exercise) relies mainly on which persuasive appeal?",
      options: [
        "Ethos: appealing to the speaker's own authority and good character",
        "Pathos: appealing to the audience's emotions through a sad story",
        "Humour: making the audience laugh",
        "Logos: appealing to logic with a statistic and a reasoned conclusion",
      ],
      answerIndex: 3,
      hint: "What kind of evidence does the speaker open with?",
      explanation:
        "A statistic followed by a reasoned conclusion appeals to logic: logos. Pathos is tempting because 'waste' carries some feeling, but there is no emotive story or image; the persuasion rests on the figure.",
    },
    {
      id: "exam-mcq-p4-q13",
      question: "What is the main purpose of a rhetorical question in a speech?",
      options: [
        "To get the audience to shout out an answer",
        "To make the audience think, with an answer the speaker implies",
        "To show the speaker does not know the answer",
        "To fill time while the speaker remembers the next point",
      ],
      answerIndex: 1,
      hint: "The speaker does not actually want hands up.",
      explanation:
        "A rhetorical question is asked for effect: it makes listeners reflect and usually steers them to the speaker's answer. 'Get the audience to shout out' misunderstands it; no reply is expected.",
    },
    {
      id: "exam-mcq-p4-q14",
      extract: "government of the people, by the people, for the people, shall not perish from the earth.",
      question: "This is from Abraham Lincoln's Gettysburg Address (1863). Which technique makes it memorable?",
      options: [
        "A tricolon with repetition: three parallel phrases each ending in 'the people'",
        "An oxymoron",
        "A simile",
        "Onomatopoeia",
      ],
      answerIndex: 0,
      hint: "Count the phrases and look at how each one ends.",
      explanation:
        "Three parallel phrases ('of... by... for the people') form a tricolon, and repeating 'the people' at the end of each (epistrophe) drives the point home. There is no comparison using 'like' or 'as', so it is not a simile.",
    },
    {
      id: "exam-mcq-p4-q15",
      question: "Which sentence is an example of hyperbole?",
      options: [
        "The bus was ten minutes late.",
        "The bus crawled like a tired snail.",
        "I've told you a million times to tidy your room!",
        "The bus driver smiled at the passengers.",
      ],
      answerIndex: 2,
      hint: "Hyperbole is deliberate, obvious exaggeration.",
      explanation:
        "Nobody has literally said it a million times: the exaggeration is for emphasis, which is hyperbole. 'Crawled like a tired snail' is tempting because it exaggerates slowness, but its main technique is a simile.",
    },
    {
      id: "exam-mcq-p4-q16",
      extract: "O brawling love! O loving hate!",
      question: "Romeo says this in Act 1 Scene 1. What technique is \"loving hate\"?",
      options: ["Alliteration", "Personification", "Pathetic fallacy", "Oxymoron"],
      answerIndex: 3,
      hint: "Two words with opposite meanings are placed side by side.",
      explanation:
        "An oxymoron pairs contradictory words ('loving' and 'hate'), showing Romeo's confused feelings and the play's mix of love and violence. It is not alliteration: the words do not begin with the same sound.",
    },
    {
      id: "exam-mcq-p4-q17",
      question: "A short story begins and ends with the narrator standing at the same bus stop in the rain, but by the end she sees it differently. What structure is this?",
      options: ["Linear structure", "Cyclical structure", "In medias res", "Non-linear flashback structure"],
      answerIndex: 1,
      hint: "The story comes back round to where it started.",
      explanation:
        "A cyclical structure returns to its opening image or place, often to show how a character has changed. Linear is tempting because events might be in time order, but 'linear' does not capture the return to the start.",
    },
    {
      id: "exam-mcq-p4-q18",
      question: "In a story, when should you start a new paragraph?",
      options: [
        "Only every five sentences, to keep paragraphs equal",
        "Only when a character speaks for the first time",
        "Whenever you use a long word",
        "When there is a change of time, place, topic or person speaking (TiPToP)",
      ],
      answerIndex: 3,
      hint: "Remember the mnemonic TiPToP.",
      explanation:
        "TiPToP: a new paragraph for a new Time, Place, Topic or Person (including each new speaker in dialogue). Paragraphing by a fixed sentence count ignores meaning entirely.",
    },
    {
      id: "exam-mcq-p4-q19",
      question: "Which sentence best shows (rather than tells) that a character is nervous before a speech?",
      options: [
        "Arjun was extremely nervous before his speech.",
        "Arjun felt very, very worried.",
        "Arjun's cue cards trembled; he read the first line three times without taking in a word.",
        "Arjun was nervous because he hated public speaking.",
      ],
      answerIndex: 2,
      hint: "Which sentence never names the emotion but lets you see it?",
      explanation:
        "Trembling cards and rereading without understanding let the reader infer nerves through physical detail. The other options name the feeling ('nervous', 'worried'), which is telling.",
    },
    {
      id: "exam-mcq-p4-q20",
      question: "Which of these is a compound sentence?",
      options: [
        "The thunder rolled, but the match continued.",
        "Because the thunder rolled, the match stopped.",
        "The thunder rolling across the field.",
        "The match, which had started late, stopped.",
      ],
      answerIndex: 0,
      hint: "A compound sentence joins two main clauses with a coordinating conjunction (FANBOYS).",
      explanation:
        "'The thunder rolled' and 'the match continued' are both main clauses joined by 'but' (a FANBOYS conjunction): compound. The 'Because...' option is complex, as it contains a subordinate clause.",
    },
    {
      id: "exam-mcq-p4-q21",
      question: "Which sentence uses dashes correctly to add parenthesis?",
      options: [
        "Our teacher – usually so calm was furious.",
        "Our teacher usually – so calm – was – furious.",
        "Our teacher – usually so calm – was furious.",
        "Our – teacher usually so calm was furious –.",
      ],
      answerIndex: 2,
      hint: "Parenthetical dashes come in a pair and wrap around extra information that could be removed.",
      explanation:
        "Remove the words between the dashes and 'Our teacher was furious' still works, so the pair of dashes correctly encloses the extra detail. The option ‘Our teacher – usually so calm was furious.’ is missing its second dash, so the parenthesis is never closed.",
    },
    {
      id: "exam-mcq-p4-q22",
      extract: "After the long hike, the exhausted students ______ back to the campsite.",
      question: "Which verb fits best, conveying exhaustion most precisely?",
      options: ["walked", "skipped", "trudged", "strolled"],
      answerIndex: 2,
      hint: "Choose the verb that shows heavy, effortful movement.",
      explanation:
        "'Trudged' means to walk slowly and heavily with effort, so it shows exhaustion without needing an adverb. 'Strolled' suggests relaxed, leisurely walking, which contradicts 'exhausted'.",
    },
    {
      id: "exam-mcq-p4-q23",
      question: "Which line of dialogue is punctuated correctly?",
      options: [
        "\"Close the window\" said Mum, \"the rain is coming in.\"",
        "\"Close the window,\" said Mum. \"The rain is coming in.\"",
        "\"Close the window\", said Mum. \"the rain is coming in\".",
        "Close the window, said Mum, \"The rain is coming in.\"",
      ],
      answerIndex: 1,
      hint: "Punctuation goes inside the speech marks, and a new sentence of speech starts with a capital letter.",
      explanation:
        "The comma sits inside the speech marks before 'said Mum', a full stop ends that sentence, and the second spoken sentence opens with a capital 'The'. The option ‘\"Close the window\", said Mum. \"the rain is coming in\".’ puts the comma outside the speech marks and loses the capital.",
    },
    {
      id: "exam-mcq-p4-q24",
      question: "You are giving a speech to the Head of School and governors. Which opening uses the most appropriate register?",
      options: [
        "\"Hey guys, so basically I'm gonna talk about the canteen.\"",
        "\"Yo, listen up, the canteen is well bad.\"",
        "\"Like, the canteen food is literally the worst thing ever.\"",
        "\"Good morning. Today I would like to propose three practical changes to our school canteen.\"",
      ],
      answerIndex: 3,
      hint: "Register should match audience and purpose: who is listening here?",
      explanation:
        "A formal greeting, Standard English and a clear signposted purpose suit a formal audience. The 'Hey guys' option is tempting because it sounds friendly, but its slang ('gonna', 'basically') is too informal for governors.",
    },
    {
      id: "exam-mcq-p4-q25",
      question: "Which sentence opens with a subordinate clause and is correctly punctuated?",
      options: [
        "Although the monsoon rain had stopped the hawker centre was still flooded.",
        "Although the monsoon rain had stopped, the hawker centre was still flooded.",
        "Although, the monsoon rain had stopped the hawker centre was still flooded.",
        "Although the monsoon rain had stopped. The hawker centre was still flooded.",
      ],
      answerIndex: 1,
      hint: "When a subordinate clause comes first, where does the comma go?",
      explanation:
        "A fronted subordinate clause is followed by a comma before the main clause ('...had stopped, the hawker centre...'). The final option is the tempting error: the full stop leaves 'Although the monsoon rain had stopped' as a fragment.",
    },
  ],
};

// ---------------------------------------------------------------------------
// WRITTEN PAPER 1: SHAKESPEARE UNSEEN
// ---------------------------------------------------------------------------
const qaP1: Paper<QA> = {
  id: "exam-qa-p1",
  title: "Written Paper 1: Shakespeare unseen",
  passage: {
    id: "exam-macbeth-dagger",
    title: "\"Is this a dagger which I see before me\"",
    source: "William Shakespeare, Macbeth (c. 1606), Act 2 Scene 1 (Macbeth, alone)",
    text:
      "Is this a dagger which I see before me,\nThe handle toward my hand? Come, let me clutch thee.\nI have thee not, and yet I see thee still.\nArt thou not, fatal vision, sensible\nTo feeling as to sight? or art thou but\nA dagger of the mind, a false creation,\nProceeding from the heat-oppressed brain?\nI see thee yet, in form as palpable\nAs this which now I draw.\nThou marshall'st me the way that I was going;\nAnd such an instrument I was to use.\nMine eyes are made the fools o' the other senses,\nOr else worth all the rest; I see thee still,\nAnd on thy blade and dudgeon gouts of blood,\nWhich was not so before. There's no such thing:\nIt is the bloody business which informs\nThus to mine eyes.",
    note:
      "Context: Macbeth, a Scottish nobleman, has been told by three witches that he will be king. Urged on by his wife, he is about to murder King Duncan, who is a guest asleep in Macbeth's castle. Alone at night, he sees a dagger floating in the air. Glossary: sensible to feeling = able to be touched; heat-oppressed = feverish; palpable = solid, touchable; marshall'st = lead, as an officer leads soldiers; dudgeon = handle; gouts = thick drops; informs = creates shapes.",
  },
  questions: [
    {
      id: "exam-qa-p1-q01",
      question: "Retrieval: Give two details Macbeth notices about the dagger he sees.",
      marks: 2,
      hint: "Look at what he says about the handle, and what appears on the blade later in the speech.",
      modelAnswer:
        "First, the dagger's handle is pointing towards him ('The handle toward my hand'), as if inviting him to take it. Second, later in the speech he sees 'gouts of blood' on its blade and handle, 'Which was not so before'.",
      markScheme: [
        {
          point: "The handle points towards his hand / it seems to invite him to take it",
          keywords: ["handle", "toward my hand", "towards his hand", "pointing at him", "offered", "grab it"],
        },
        {
          point: "Blood appears on the blade / handle (it was not there before)",
          keywords: ["blood", "gouts", "bloody", "on the blade", "dudgeon", "not so before"],
        },
      ],
      commonError:
        "Giving two versions of the same detail (e.g. 'it is a dagger' and 'it is a knife'), or analysing instead of retrieving. Retrieval needs two separate facts from the text.",
    },
    {
      id: "exam-qa-p1-q02",
      question: "Find one rhetorical question in lines 1–7 and explain what it shows about Macbeth's state of mind.",
      marks: 2,
      hint: "Look for the question marks. Is Macbeth sure what he is seeing?",
      modelAnswer:
        "Macbeth asks, 'Is this a dagger which I see before me, / The handle toward my hand?' The question shows he is uncertain and unsettled: he cannot trust his own eyes, which suggests his mind is disturbed by the murder he is about to commit.",
      markScheme: [
        {
          point: "Quotes an accurate rhetorical question from lines 1–7",
          keywords: ["is this a dagger", "art thou not", "or art thou but", "dagger of the mind", "sensible to feeling", "fatal vision"],
        },
        {
          point: "Explains it shows uncertainty / confusion / a disturbed or anxious mind",
          keywords: ["uncertain", "unsure", "confused", "doubt", "disturbed", "questioning", "cannot trust", "anxious"],
        },
      ],
      commonError:
        "Saying the question shows Macbeth 'wants an answer from the audience'. A rhetorical question in a soliloquy reveals the speaker's own inner doubt.",
    },
    {
      id: "exam-qa-p1-q03",
      extract: "A dagger of the mind, a false creation,\nProceeding from the heat-oppressed brain?",
      question: "Inference: What do these lines suggest about Macbeth's state of mind? Give three ideas.",
      marks: 3,
      hint: "'Of the mind' and 'false creation' suggest one thing; 'heat-oppressed' suggests another. Why might his mind be in this state tonight?",
      modelAnswer:
        "Macbeth wonders whether the dagger is only a hallucination, 'a dagger of the mind', so he realises he may be imagining things. 'Heat-oppressed' suggests his brain is feverish and under pressure, as if he is ill with stress. This implies that his guilty conscience about the planned murder of Duncan is already tormenting him before he has even acted.",
      markScheme: [
        {
          point: "He suspects the dagger is imaginary / a hallucination",
          keywords: ["hallucinat", "imagin", "not real", "false creation", "of the mind", "seeing things"],
        },
        {
          point: "His mind is feverish / overheated / under pressure or stress",
          keywords: ["fever", "heat", "oppressed", "pressure", "stress", "overwhelmed"],
        },
        {
          point: "Links this to guilt / fear / the murder he is planning",
          keywords: ["guilt", "conscience", "murder", "duncan", "kill the king", "afraid"],
        },
      ],
      commonError:
        "Treating the dagger as definitely real or definitely magic. The lines show Macbeth himself is unsure, and that uncertainty is the point.",
    },
    {
      id: "exam-qa-p1-q04",
      extract: "Thou marshall'st me the way that I was going;\nAnd such an instrument I was to use.",
      question: "Language analysis: How does Shakespeare use language in these two lines to present Macbeth's thoughts?",
      marks: 4,
      hint: "Who or what does 'thou' refer to? What does an officer who 'marshals' do? Then look closely at 'the way that I was going'.",
      modelAnswer:
        "Macbeth personifies the dagger, addressing it as 'thou', as if it were a living guide. The verb 'marshall'st' has military connotations of an officer directing soldiers, suggesting the dagger is commanding him towards murder. However, the phrase 'the way that I was going' reveals that he was already heading there, so the vision only confirms an intention he already had. This creates tension for the audience, because Macbeth seems partly to be shifting responsibility on to the supernatural.",
      markScheme: [
        {
          point: "Identifies personification / direct address to the dagger ('thou')",
          keywords: ["personif", "thou", "address", "talks to the dagger", "speaks to the dagger", "as if alive"],
        },
        {
          point: "Analyses 'marshall'st': military / commanding connotations",
          keywords: ["marshal", "military", "officer", "command", "lead", "soldier", "orders"],
        },
        {
          point: "Notes 'the way that I was going': he already intended the murder",
          keywords: ["already", "was going", "intended", "intention", "own choice", "planned"],
        },
        {
          point: "Effect on audience / shifting blame to the supernatural",
          keywords: ["audience", "blame", "responsib", "excuse", "supernatural", "tension"],
        },
      ],
      commonError:
        "Spotting a technique ('this is personification') without explaining what it suggests. Every technique named must be followed by its effect.",
    },
    {
      id: "exam-qa-p1-q05",
      question: "Structure: How does the speech develop from beginning to end? Track three stages.",
      marks: 3,
      hint: "Compare the start (questions), the middle (what changes about the dagger), and the end ('There's no such thing').",
      modelAnswer:
        "The speech opens with uncertain questions as Macbeth tries to grasp the dagger and cannot ('I have thee not'). In the middle, the vision grows more vivid and violent, as blood appears on the blade 'Which was not so before', so the tension rises. Finally, he forcefully rejects it ('There's no such thing') and admits that the 'bloody business' of the murder is creating the image, so the speech turns from confusion to grim acceptance.",
      markScheme: [
        {
          point: "Opening: questions / uncertainty / trying to clutch the dagger",
          keywords: ["question", "uncertain", "unsure", "clutch", "grasp", "opens", "begins"],
        },
        {
          point: "Middle: the vision intensifies with blood, raising tension",
          keywords: ["blood", "gouts", "intensif", "more vivid", "worse", "tension", "escalat"],
        },
        {
          point: "Ending: rejects the vision and admits the 'bloody business' / turns to the murder",
          keywords: ["no such thing", "bloody business", "rejects", "dismiss", "ends", "accept", "turn"],
        },
      ],
      commonError:
        "Retelling the speech line by line without commenting on how it changes. Structure answers should use words like 'opens', 'shifts', 'builds' and 'ends'.",
    },
    {
      id: "exam-qa-p1-q06",
      extract: "Mine eyes are made the fools o' the other senses,\nOr else worth all the rest;",
      question: "Explain the two possibilities Macbeth considers in these lines.",
      marks: 2,
      hint: "His eyes see the dagger, but his hands cannot feel it. Which sense is right?",
      modelAnswer:
        "Either his eyes are being made 'fools', tricked into seeing something his other senses (such as touch) prove is not there, or his eyes are 'worth all the rest' because they can see a truth, perhaps a supernatural sign, that his other senses cannot detect.",
      markScheme: [
        {
          point: "Possibility 1: his eyes are fooled / tricked, and the dagger is not real",
          keywords: ["fooled", "tricked", "deceived", "fools", "not real", "lying"],
        },
        {
          point: "Possibility 2: his eyes see a truth the other senses cannot / it is real or supernatural",
          keywords: ["worth all the rest", "real", "truth", "supernatural", "more than the other senses", "sign"],
        },
      ],
      commonError:
        "Only explaining one half of the 'Or else' choice. The lines balance two opposite possibilities, and both are needed.",
    },
    {
      id: "exam-qa-p1-q07",
      extract: "Come, let me clutch thee.\nI have thee not, and yet I see thee still.",
      question: "Script and performance: Write a stage direction for an actor delivering these lines, then explain in one sentence how it helps the audience understand Macbeth.",
      marks: 3,
      hint: "Stage directions are in the present tense and in brackets. What must the actor's hands do on 'clutch' and 'I have thee not'?",
      modelAnswer:
        "(He lunges forward and snatches at the empty air, then stares at his closed, empty fist.) Because the audience sees nothing in his hand, this physical action makes it clear that the dagger exists only in Macbeth's mind, heightening our sense of his unravelling.",
      markScheme: [
        {
          point: "Stage direction shows a physical action of grasping at the air / empty hand",
          keywords: ["reaches", "snatches", "grabs", "clutches", "lunges", "empty", "grasps"],
        },
        {
          point: "Written as a stage direction: present tense, concise, in brackets / italics",
          keywords: ["he reaches", "he snatches", "he grabs", "he stares", "he lunges", "he clutches", "he freezes"],
        },
        {
          point: "Commentary explains the effect: shows the dagger is imaginary / his disturbed mind to the audience",
          keywords: ["audience", "imaginary", "not real", "hallucinat", "mind", "unravel", "madness"],
        },
      ],
      commonError:
        "Writing the stage direction in the past tense ('he reached') or describing thoughts the audience cannot see ('he feels guilty'). Directions show visible action.",
    },
    {
      id: "exam-qa-p1-q08",
      question: "Comparison: Both Macbeth here and Hamlet (in Act 3 Scene 3, when he finds Claudius praying) are alone, thinking about killing a king. Give one similarity and one difference between the two soliloquies.",
      marks: 2,
      hint: "Both speeches reveal inner conflict. But what does each man decide to do next?",
      modelAnswer:
        "A similarity is that both men use a soliloquy to reveal private inner conflict about killing a king, so the audience sees their doubts directly. A difference is that Hamlet holds back, deciding not to kill Claudius while he prays in case his soul goes to heaven, whereas Macbeth moves forward, following the dagger towards Duncan's chamber.",
      markScheme: [
        {
          point: "Similarity: both soliloquies reveal inner conflict / doubt about killing a king",
          keywords: ["both", "inner conflict", "doubt", "soliloquy", "torn", "hesitat", "alone"],
        },
        {
          point: "Difference: Hamlet delays / spares Claudius, while Macbeth proceeds to murder",
          keywords: ["hamlet delays", "spares", "does not kill", "holds back", "macbeth goes", "proceeds", "whereas"],
        },
      ],
      commonError:
        "Writing two separate summaries with no comparison. Use comparative connectives such as 'both', 'similarly', 'whereas' and 'in contrast'.",
    },
    {
      id: "exam-qa-p1-q09",
      question: "Extended response: How does Shakespeare present Macbeth's state of mind in this soliloquy? Write two developed PEEL paragraphs, referring closely to language and structure.",
      marks: 6,
      hint: "Paragraph 1: the questions and the 'dagger of the mind' (uncertainty, hallucination). Paragraph 2: the blood imagery and the broken rhythm. Link to guilt and to Jacobean beliefs about the supernatural and regicide.",
      modelAnswer:
        "Shakespeare presents Macbeth as a man whose mind is fracturing under the weight of the murder he is about to commit. The soliloquy opens with a rhetorical question, 'Is this a dagger which I see before me', which immediately shows that Macbeth cannot trust his own senses. He wonders whether it is 'a dagger of the mind, a false creation, / Proceeding from the heat-oppressed brain'; the adjective 'heat-oppressed' suggests a feverish, overloaded mind, as if guilt were already a sickness. For a Jacobean audience, who believed killing a king (regicide) was a crime against God, this hallucination would signal that Macbeth's conscience knows the deed is unnatural.\n\nAs the speech develops, the vision becomes more violent, revealing Macbeth's mind moving from doubt towards murder. He sees 'gouts of blood' on the blade, 'Which was not so before': the noun 'gouts', meaning thick drops, makes the image grotesque and foreshadows the real blood that will soon stain his hands. Structurally, the verse fractures here, with the short line 'As this which now I draw' and the caesura before 'There's no such thing', so the broken rhythm mirrors his breaking composure. Yet the speech ends with Macbeth admitting it is 'the bloody business' that 'informs' the vision; some readers see this as clear-eyed self-awareness, others as a man simply silencing his conscience so he can act. Either way, Shakespeare makes the audience watch a mind talking itself into murder.",
      markScheme: [
        {
          point: "Clear argument / overview about Macbeth's disturbed or divided mind",
          keywords: ["mind", "guilt", "conscience", "disturbed", "fractur", "torn", "unstable"],
        },
        {
          point: "Analyses the rhetorical questions / uncertainty with embedded evidence",
          keywords: ["is this a dagger", "rhetorical question", "question", "uncertain", "doubt", "art thou not"],
        },
        {
          point: "Analyses hallucination language ('dagger of the mind', 'heat-oppressed')",
          keywords: ["dagger of the mind", "false creation", "heat oppressed", "hallucinat", "fever", "imagin"],
        },
        {
          point: "Analyses blood imagery and its effect / foreshadowing",
          keywords: ["blood", "gouts", "bloody business", "foreshadow", "violent", "grotesque"],
        },
        {
          point: "Comments on structure or verse form (short lines, caesura, shift from questions to acceptance)",
          keywords: ["caesura", "short line", "rhythm", "structure", "shift", "turn", "broken"],
        },
        {
          point: "Links to context or offers an alternative interpretation / evaluation",
          keywords: ["jacobean", "regicide", "supernatural", "witches", "alternatively", "some readers", "audience"],
        },
      ],
      commonError:
        "Narrating what happens ('Macbeth sees a dagger and then sees blood') instead of analysing how the language and structure present his mind. Every quotation needs a zoomed-in comment on a word or technique and its effect.",
    },
    {
      id: "exam-qa-p1-q10",
      question: "Evaluation: A student wrote, 'The dagger is a supernatural sign from the witches, pushing Macbeth into murder.' To what extent do you agree? Use evidence from the extract.",
      marks: 3,
      hint: "Find evidence on both sides: does the speech suggest the dagger is real and external, or created by Macbeth's own mind? Then decide.",
      modelAnswer:
        "There is some evidence for the student's view: the dagger seems to act independently, as Macbeth says 'Thou marshall'st me the way', as if an outside force were leading him, and in a play full of witches the audience might suspect magic. However, Macbeth himself suggests it is 'a dagger of the mind' from a 'heat-oppressed brain', and the dagger only leads him 'the way that I was going'. Overall, I only partly agree: the vision may feel supernatural, but the text suggests it grows out of Macbeth's own ambition and guilt, so he cannot escape responsibility.",
      markScheme: [
        {
          point: "Evidence supporting the supernatural reading",
          keywords: ["marshall", "leads him", "witches", "supernatural", "fatal vision", "magic"],
        },
        {
          point: "Evidence against: the dagger comes from his own mind / intentions",
          keywords: ["dagger of the mind", "heat oppressed", "false creation", "was going", "his own mind", "however"],
        },
        {
          point: "Reaches a reasoned judgement (to what extent)",
          keywords: ["partly agree", "overall", "to some extent", "i agree", "i disagree", "largely", "ultimately"],
        },
      ],
      commonError:
        "Agreeing or disagreeing completely without weighing the other side. 'To what extent' questions reward a balanced judgement backed by evidence.",
    },
  ],
};

// ---------------------------------------------------------------------------
// WRITTEN PAPER 2: UNSEEN POETRY
// ---------------------------------------------------------------------------
const qaP2: Paper<QA> = {
  id: "exam-qa-p2",
  title: "Written Paper 2: Unseen poetry",
  passage: {
    id: "exam-we-wear-the-mask",
    title: "We Wear the Mask",
    source: "Paul Laurence Dunbar (1872–1906), from Majors and Minors (1895)",
    text:
      "We wear the mask that grins and lies,\nIt hides our cheeks and shades our eyes,—\nThis debt we pay to human guile;\nWith torn and bleeding hearts we smile,\nAnd mouth with myriad subtleties.\n\nWhy should the world be over-wise,\nIn counting all our tears and sighs?\nNay, let them only see us, while\nWe wear the mask.\n\nWe smile, but, O great Christ, our cries\nTo thee from tortured souls arise.\nWe sing, but oh the clay is vile\nBeneath our feet, and long the mile;\nBut let the world dream otherwise,\nWe wear the mask!",
    note:
      "Context: Paul Laurence Dunbar was the son of parents who had been enslaved in Kentucky, and he became one of the first African American poets to win national fame. He wrote this poem in the 1890s, a time of segregation and racial violence in the United States. Glossary: guile = cunning deception; myriad subtleties = countless small, careful evasions; over-wise = too knowing; clay = earth, ground.",
  },
  questions: [
    {
      id: "exam-qa-p2-q01",
      question: "Retrieval: According to lines 1–2, what does the mask do? Give two things.",
      marks: 2,
      hint: "Look at the verbs attached to 'the mask' and 'It'.",
      modelAnswer:
        "The mask 'grins and lies', putting on a false smile, and it 'hides our cheeks and shades our eyes', covering the wearer's real face.",
      markScheme: [
        {
          point: "It grins / lies (shows a false, smiling face)",
          keywords: ["grins", "lies", "smile", "false", "fake", "pretend"],
        },
        {
          point: "It hides the cheeks / shades the eyes (conceals the real face)",
          keywords: ["hides", "cheeks", "shades", "eyes", "covers", "conceal"],
        },
      ],
      commonError:
        "Explaining what the mask symbolises instead of retrieving what the lines say it does. Retrieval answers take details directly from the text.",
    },
    {
      id: "exam-qa-p2-q02",
      question: "Inference: The mask is a metaphor. What does it represent? Give two ideas.",
      marks: 2,
      hint: "Nobody is wearing a real mask. What are the speakers hiding, and from whom?",
      modelAnswer:
        "The mask represents the cheerful public face that the speakers put on to hide their real pain and suffering. It also suggests a survival strategy: in a hostile, racist society, showing true anger or grief could be dangerous, so they conceal their identity to protect themselves.",
      markScheme: [
        {
          point: "Represents hiding true feelings / pain behind a false, cheerful face",
          keywords: ["hide", "true feelings", "pain", "suffering", "false face", "pretend", "conceal"],
        },
        {
          point: "Explains why: survival / protection in a hostile or racist society",
          keywords: ["surviv", "protect", "racis", "prejudice", "society", "danger", "oppress"],
        },
      ],
      commonError:
        "Saying the mask is a real object or a costume. The poem uses it as an extended metaphor for a public identity hiding private suffering.",
    },
    {
      id: "exam-qa-p2-q03",
      extract: "With torn and bleeding hearts we smile,",
      question: "Language analysis: How does Dunbar use language in this line to present the speakers' experience?",
      marks: 3,
      hint: "Look at the contrast between the start and the end of the line, and at the violent adjectives.",
      modelAnswer:
        "Dunbar juxtaposes 'torn and bleeding hearts' with 'we smile', so the outward smile directly contradicts the inner wound. The violent adjectives 'torn' and 'bleeding' make emotional suffering sound like a physical injury, suggesting their pain is raw and severe. This makes the reader feel the cruelty of having to smile through such pain.",
      markScheme: [
        {
          point: "Identifies the contrast / juxtaposition between inner pain and outer smile",
          keywords: ["contrast", "juxtapos", "but smile", "outer", "inner", "contradict", "paradox"],
        },
        {
          point: "Analyses 'torn' / 'bleeding': violent, physical imagery for emotional pain",
          keywords: ["torn", "bleeding", "violent", "physical", "wound", "injur", "raw"],
        },
        {
          point: "Explains the effect on the reader (sympathy, sense of injustice)",
          keywords: ["sympath", "pity", "cruel", "injustice", "uncomfortable", "compassion"],
        },
      ],
      commonError:
        "Saying 'bleeding hearts' means the speakers are literally injured. It is a metaphor for emotional suffering.",
    },
    {
      id: "exam-qa-p2-q04",
      question: "The poem is written in the first-person plural ('we', 'our'). Who might 'we' be, and what is the effect of this choice?",
      marks: 3,
      hint: "Use the context note. Then think about why 'we' is more powerful than 'I'.",
      modelAnswer:
        "In the context of the 1890s, 'we' most likely refers to African Americans, who faced racism and had to hide their pain to survive. Using the collective 'we' rather than 'I' turns one person's feeling into a shared experience of a whole community. It also makes the poem feel universal, so any reader who has hidden their true self can recognise it.",
      markScheme: [
        {
          point: "Identifies 'we' as African Americans / an oppressed group in Dunbar's time",
          keywords: ["african american", "black", "enslaved", "oppressed", "community", "racism"],
        },
        {
          point: "Explains the collective / shared effect of 'we'",
          keywords: ["collective", "shared", "together", "group", "united", "whole community"],
        },
        {
          point: "Notes the universal appeal / anyone who hides their identity",
          keywords: ["universal", "anyone", "everyone", "all people", "relate", "readers today"],
        },
      ],
      commonError:
        "Assuming 'we' must mean the poet and his family. Use the context to suggest a wider group, and explain the effect of the pronoun.",
    },
    {
      id: "exam-qa-p2-q05",
      question: "Structure: Comment on the repeated phrase 'We wear the mask' and on how the poem ends.",
      marks: 3,
      hint: "Where does the phrase appear? What changes in its final punctuation?",
      modelAnswer:
        "The phrase 'We wear the mask' opens the poem and returns as a short refrain at the end of stanzas 2 and 3, so the poem keeps circling back to it, suggesting the speakers can never escape the mask. The refrain is much shorter than the surrounding lines, making it land like a blunt statement. The final version ends with an exclamation mark instead of a full stop, so the ending sounds more forceful, perhaps defiant or anguished.",
      markScheme: [
        {
          point: "Identifies the repetition / refrain (opening and end of stanzas 2 and 3)",
          keywords: ["refrain", "repeat", "repetition", "returns", "circular", "cyclical"],
        },
        {
          point: "Explains the effect: inescapable, trapped, constant",
          keywords: ["escape", "trapped", "constant", "always", "never ends", "inevitable"],
        },
        {
          point: "Comments on the final exclamation mark / short line / change in tone",
          keywords: ["exclamation", "short line", "forceful", "defiant", "anguish", "emphatic", "final line"],
        },
      ],
      commonError:
        "Saying 'the repetition emphasises it' without saying what it emphasises or why. Explain what the repetition suggests about the speakers' lives.",
    },
    {
      id: "exam-qa-p2-q06",
      extract: "Why should the world be over-wise,\nIn counting all our tears and sighs?",
      question: "Explain what this rhetorical question suggests about the speakers' attitude to 'the world'.",
      marks: 2,
      hint: "Do the speakers want the world to know about their tears? Why might they refuse?",
      modelAnswer:
        "The rhetorical question suggests the speakers refuse to let the world see their suffering: they will not give an unsympathetic world the satisfaction of 'counting' their tears. This implies distrust, and also a kind of pride or dignity, since they choose what to reveal.",
      markScheme: [
        {
          point: "They refuse to let the world see / know their suffering",
          keywords: ["refuse", "not let", "hide", "should not know", "keep private", "secret"],
        },
        {
          point: "Shows distrust of the world, or pride / dignity / control",
          keywords: ["distrust", "pride", "dignity", "control", "unsympathetic", "hostile", "defiant"],
        },
      ],
      commonError:
        "Answering the question as if it were real ('the world should not be over-wise because...') instead of explaining what it reveals about the speakers.",
    },
    {
      id: "exam-qa-p2-q07",
      question: "Form: The poem is a rondeau, a tightly controlled French form that uses only two rhyme sounds and a refrain. Why might Dunbar have chosen such a restrictive form for this subject?",
      marks: 3,
      hint: "Look at the line endings (lies, eyes, guile, smile...). How might a form with strict rules mirror the speakers' lives?",
      modelAnswer:
        "Almost every line ends on one of two rhyme sounds (-ise and -ile, as in 'lies'/'eyes' and 'guile'/'smile'), so the poem feels tightly controlled. This restriction mirrors the speakers' situation: they too are forced to stay within strict limits, always performing a controlled, smiling surface. The neat, polished form is itself a kind of mask, hiding raw pain beneath elegant verse.",
      markScheme: [
        {
          point: "Notes the limited / repeated rhyme sounds and tight control",
          keywords: ["rhyme", "two sounds", "lies", "smile", "controlled", "strict", "repeated sounds"],
        },
        {
          point: "Links restriction to the speakers being trapped / constrained",
          keywords: ["trapped", "restrict", "constrain", "confined", "limited", "no freedom", "forced"],
        },
        {
          point: "Suggests the polished form is itself a mask / hides pain",
          keywords: ["form is a mask", "itself a mask", "polished", "surface", "elegant", "hides the pain"],
        },
      ],
      commonError:
        "Describing the rhyme scheme without linking it to meaning. Form questions always ask: why this shape for this subject?",
    },
    {
      id: "exam-qa-p2-q08",
      question: "Comparison: Compare the speakers' attitude to showing their identity in 'We Wear the Mask' with the attitude in John Agard's 'Half-Caste' (or another identity poem you have studied).",
      marks: 3,
      hint: "Dunbar's speakers hide; how does Agard's speaker respond to people who judge him? Compare methods (tone, language) as well as ideas.",
      modelAnswer:
        "Both poems explore how others judge a person's identity. However, Dunbar's speakers choose to hide behind a smiling mask, protecting themselves by concealing their pain, whereas Agard's speaker openly confronts the label 'half-caste', challenging the listener directly with humour and sarcasm. Dunbar uses formal, controlled verse that itself acts as a mask, while Agard writes in his own Caribbean voice, refusing to disguise who he is.",
      markScheme: [
        {
          point: "Similarity: both concern identity being judged by others",
          keywords: ["both", "judged", "identity", "prejudice", "similarly", "outsiders"],
        },
        {
          point: "Difference in attitude: Dunbar hides / Agard confronts or challenges",
          keywords: ["whereas", "confront", "challenge", "open", "in contrast", "defiant", "however"],
        },
        {
          point: "Compares methods: formal, controlled verse vs voice / humour / sarcasm",
          keywords: ["formal", "humour", "sarcas", "caribbean", "dialect", "tone", "voice"],
        },
      ],
      commonError:
        "Writing about one poem, then the other, without linking them. Each point should compare, using 'whereas', 'both' or 'in contrast'.",
    },
    {
      id: "exam-qa-p2-q09",
      question: "Extended response: How does Dunbar explore the gap between public identity and private feeling in 'We Wear the Mask'? Write two developed PEEL paragraphs.",
      marks: 6,
      hint: "Paragraph 1: the mask metaphor and the contrast of smiles and pain. Paragraph 2: the shift in stanza 3 (the prayer, 'O great Christ') and the refrain/form. Bring in context and an alternative reading.",
      modelAnswer:
        "Dunbar presents public identity as a performance that conceals private agony. The extended metaphor of the mask 'that grins and lies' suggests the speakers' smiles are not just false but actively deceptive, and the verb 'grins' feels exaggerated, almost grotesque. The juxtaposition in 'With torn and bleeding hearts we smile' sharpens this gap: the violent adjectives 'torn' and 'bleeding' expose the wound beneath the surface. In the context of 1890s America, when African Americans faced segregation and violence, the mask can be read as a strategy for survival rather than simple dishonesty.\n\nIn the final stanza, Dunbar lets the reader see behind the mask, as the private voice breaks through in prayer: 'O great Christ, our cries / To thee from tortured souls arise'. The interjection 'O' and the word 'tortured' reveal a depth of suffering that 'the world' is never allowed to see, so only God, and the reader, witness the truth. Yet the poem closes by restoring the mask with the refrain 'We wear the mask!', now with an exclamation mark. Some readers hear this as despair at an inescapable role; others hear defiance, as the speakers take control of what the world may see. The tightly controlled rondeau form reinforces the idea, since the polished verse is itself a mask over raw pain.",
      markScheme: [
        {
          point: "Clear argument about the gap between public face and private pain",
          keywords: ["public", "private", "gap", "conceal", "perform", "surface", "hidden"],
        },
        {
          point: "Analyses the mask metaphor / 'grins and lies' with embedded evidence",
          keywords: ["mask", "metaphor", "grins and lies", "deceptive", "extended metaphor", "grins"],
        },
        {
          point: "Analyses the contrast in 'torn and bleeding hearts we smile'",
          keywords: ["torn", "bleeding", "juxtapos", "contrast", "smile", "wound"],
        },
        {
          point: "Analyses stanza 3: the prayer / 'tortured souls' / private voice breaking through",
          keywords: ["great christ", "tortured", "prayer", "cry", "cries", "god", "souls"],
        },
        {
          point: "Comments on structure or form (refrain, exclamation mark, rondeau)",
          keywords: ["refrain", "exclamation", "rondeau", "form", "structure", "repetition"],
        },
        {
          point: "Uses context or offers an alternative interpretation",
          keywords: ["african american", "segregation", "racism", "1890s", "alternatively", "some readers", "defiance"],
        },
      ],
      commonError:
        "Spending the whole answer on the first stanza. Strong answers track the poem's development, especially the shift into prayer in stanza 3 and the changed refrain at the end.",
    },
    {
      id: "exam-qa-p2-q10",
      question: "Spoken analysis: Write the opening 3–4 sentences you would say in a one-minute spoken analysis of this poem.",
      marks: 3,
      hint: "Name the poem and poet, give a clear overview (your big idea), and signpost what you will talk about. Use a technique term.",
      modelAnswer:
        "Paul Laurence Dunbar's 'We Wear the Mask' is a poem about the painful gap between the face we show the world and what we really feel. My big idea is that the mask is both a prison and a shield for the speakers. First, I'll look at the extended metaphor of the mask and the shocking contrast of 'bleeding hearts' that 'smile'; then I'll show how the refrain makes the mask feel impossible to escape.",
      markScheme: [
        {
          point: "Names the poem and the poet",
          keywords: ["dunbar", "we wear the mask", "this poem by", "paul laurence"],
        },
        {
          point: "Gives a clear overview / thesis about the poem's meaning",
          keywords: ["a poem about", "is about", "big idea", "explores", "my interpretation", "my view", "argue"],
        },
        {
          point: "Signposts the structure of the talk using a technique term",
          keywords: ["first", "then", "finally", "i will look at", "metaphor", "refrain", "contrast"],
        },
      ],
      commonError:
        "Starting a spoken analysis with biography ('Dunbar was born in 1872...') or a list of techniques. Lead with the poem and your interpretation, then signpost.",
    },
  ],
};

// ---------------------------------------------------------------------------
// WRITTEN PAPER 3: PROSE COMPREHENSION
// ---------------------------------------------------------------------------
const qaP3: Paper<QA> = {
  id: "exam-qa-p3",
  title: "Written Paper 3: Prose comprehension",
  passage: {
    id: "exam-jane-eyre-ch1",
    title: "Jane at Gateshead",
    source: "Charlotte Brontë, Jane Eyre (1847), Chapter 1",
    text:
      "There was no possibility of taking a walk that day. We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner (Mrs. Reed, when there was no company, dined early) the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further out-door exercise was now out of the question.\n\nI was glad of it: I never liked long walks, especially on chilly afternoons: dreadful to me was the coming home in the raw twilight, with nipped fingers and toes, and a heart saddened by the chidings of Bessie, the nurse, and humbled by the consciousness of my physical inferiority to Eliza, John, and Georgiana Reed.\n\nThe said Eliza, John, and Georgiana were now clustered round their mama in the drawing-room: she lay reclined on a sofa by the fireside, and with her darlings about her (for the time neither quarrelling nor crying) looked perfectly happy. Me, she had dispensed from joining the group; saying, \"She regretted to be under the necessity of keeping me at a distance; but that until she heard from Bessie, and could discover by her own observation, that I was endeavouring in good earnest to acquire a more sociable and childlike disposition, a more attractive and sprightly manner—something lighter, franker, more natural, as it were—she really must exclude me from privileges intended only for contented, happy, little children.\"\n\n\"What does Bessie say I have done?\" I asked.\n\n\"Jane, I don't like cavillers or questioners; besides, there is something truly forbidding in a child taking up her elders in that manner. Be seated somewhere; and until you can speak pleasantly, remain silent.\"",
    note:
      "Context: Jane, aged ten, is an orphan living with her aunt by marriage, Mrs Reed, and her cousins Eliza, John and Georgiana at Gateshead Hall. Glossary: chidings = scoldings; dispensed from = excused (here, shut out) from; disposition = personality; sprightly = lively; cavillers = people who raise petty objections; taking up = challenging, answering back.",
  },
  questions: [
    {
      id: "exam-qa-p3-q01",
      question: "Retrieval: Give two reasons from paragraph 1 why there could be no walk that day.",
      marks: 2,
      hint: "Look at what the 'cold winter wind' had brought with it.",
      modelAnswer:
        "The cold winter wind had brought 'clouds so sombre' (dark, gloomy clouds), and it had also brought 'a rain so penetrating' that it would soak through, so outdoor exercise was out of the question.",
      markScheme: [
        {
          point: "Dark / sombre clouds, or the cold winter wind",
          keywords: ["sombre", "clouds", "cold", "wind", "winter", "dark"],
        },
        {
          point: "Penetrating / heavy rain",
          keywords: ["rain", "penetrating", "wet", "soak", "pouring", "heavy rain"],
        },
      ],
      commonError:
        "Writing 'because of the weather' only once. Two marks need two distinct details (the clouds and the rain, or the wind and the rain).",
    },
    {
      id: "exam-qa-p3-q02",
      question: "Why was Jane 'glad' there was no walk? Give two reasons from paragraph 2.",
      marks: 2,
      hint: "What made coming home from walks 'dreadful' for her?",
      modelAnswer:
        "Jane disliked coming home in the cold with 'nipped fingers and toes'. She also hated being scolded by Bessie and feeling 'humbled' by her 'physical inferiority' to her cousins.",
      markScheme: [
        {
          point: "The cold: nipped fingers and toes / raw twilight / chilly afternoons",
          keywords: ["nipped", "fingers", "toes", "cold", "chilly", "raw twilight"],
        },
        {
          point: "Being scolded by Bessie or feeling inferior to / humbled by her cousins",
          keywords: ["bessie", "chidings", "scold", "inferior", "humbled", "cousins", "weaker"],
        },
      ],
      commonError:
        "Saying simply 'she was lazy' or 'she doesn't like exercise'. The text gives specific reasons: the cold and the emotional humiliation.",
    },
    {
      id: "exam-qa-p3-q03",
      question: "Inference: What can you infer about how Jane is treated by the Reed family? Make three points, using evidence.",
      marks: 3,
      hint: "Where is Jane while her cousins are 'clustered round their mama'? How does Mrs Reed speak to her?",
      modelAnswer:
        "Jane is excluded: while her cousins are 'clustered round their mama', she is 'dispensed from joining the group'. She is treated as inferior and blamed: Mrs Reed says she must acquire a more 'sociable and childlike disposition', as if Jane's personality is the problem. She is also silenced, since when she asks a question she is told to 'remain silent', showing she has no voice in the household.",
      markScheme: [
        {
          point: "She is excluded / left out / an outsider",
          keywords: ["exclud", "left out", "outsider", "dispensed", "not part", "isolated", "apart"],
        },
        {
          point: "She is treated as inferior / blamed for her personality",
          keywords: ["inferior", "blamed", "fault", "disposition", "not good enough", "criticised", "unfair"],
        },
        {
          point: "She is silenced / not allowed to question",
          keywords: ["silen", "remain silent", "questioners", "no voice", "not allowed to speak", "cavillers"],
        },
      ],
      commonError:
        "Making inferences without evidence ('they hate her'). Every inference needs a short quotation to support it.",
    },
    {
      id: "exam-qa-p3-q04",
      extract: "she lay reclined on a sofa by the fireside, and with her darlings about her (for the time neither quarrelling nor crying) looked perfectly happy.",
      question: "Language analysis: How does Brontë use language in this sentence to create a critical, ironic view of the Reeds?",
      marks: 3,
      hint: "Think about the connotations of 'darlings', then about what the words in brackets reveal.",
      modelAnswer:
        "The noun 'darlings' has connotations of being cherished and spoilt, emphasising how Mrs Reed adores her own children in contrast to Jane. The parenthesis '(for the time neither quarrelling nor crying)' undercuts this image with irony, quietly revealing that the 'darlings' usually do quarrel and cry. This makes the phrase 'perfectly happy' seem false, so the reader sees the family through Jane's sharp, critical eyes.",
      markScheme: [
        {
          point: "Analyses 'darlings': cherished / favoured / spoilt",
          keywords: ["darlings", "cherish", "favour", "spoilt", "adored", "loved", "precious"],
        },
        {
          point: "Explains the irony of the brackets / parenthesis",
          keywords: ["bracket", "parenthes", "ironic", "irony", "undercut", "neither quarrelling", "usually"],
        },
        {
          point: "Links to contrast with Jane / Jane's critical viewpoint",
          keywords: ["contrast", "jane", "critical", "outsider", "sarcas", "perfectly happy"],
        },
      ],
      commonError:
        "Ignoring the brackets. Parenthesis is often where a narrator's real opinion slips out.",
    },
    {
      id: "exam-qa-p3-q05",
      extract: "Me, she had dispensed from joining the group;",
      question: "Explain how the word order and word choice of this clause emphasise Jane's position in the family.",
      marks: 3,
      hint: "Normally you would write 'She had dispensed me...'. Why put 'Me' first? And how formal is 'dispensed'?",
      modelAnswer:
        "By fronting the sentence with 'Me', Brontë places Jane at the start, separated by a comma, as she is separated from the group. The formal verb 'dispensed' sounds cold and official, as though Jane were an unwanted item rather than a child. Together these choices emphasise that Jane is pushed out, an outsider within her own home.",
      markScheme: [
        {
          point: "Notes the unusual word order / 'Me' placed first, separated by a comma",
          keywords: ["word order", "me first", "fronted", "fronting", "begins with me", "inverted", "separated"],
        },
        {
          point: "Analyses 'dispensed': formal / cold / treated like an object",
          keywords: ["dispensed", "formal", "cold", "object", "official", "unwanted"],
        },
        {
          point: "Links to Jane's isolation / outsider status",
          keywords: ["isolat", "outsider", "exclud", "alone", "pushed out", "apart"],
        },
      ],
      commonError:
        "Saying the sentence is 'grammatically wrong'. It is a deliberate inversion that throws emphasis on to 'Me'.",
    },
    {
      id: "exam-qa-p3-q06",
      question: "Structure: How does Brontë structure this opening to interest the reader? Comment on three features.",
      marks: 3,
      hint: "Look at the very first sentence, at how the weather connects to Jane's feelings, and at how the extract ends.",
      modelAnswer:
        "The novel opens with a negative statement, 'There was no possibility of taking a walk that day', which immediately creates a sense of restriction. The bleak weather ('sombre' clouds, 'penetrating' rain) acts as pathetic fallacy, reflecting Jane's cold, unhappy life. The focus then narrows from the outdoors to the drawing-room and finally to a tense exchange of dialogue, ending with Mrs Reed's order to 'remain silent', which leaves the reader anticipating conflict.",
      markScheme: [
        {
          point: "Comments on the negative / restrictive opening sentence",
          keywords: ["no possibility", "opening sentence", "negative", "first sentence", "restrict", "begins"],
        },
        {
          point: "Identifies pathetic fallacy / weather reflecting mood",
          keywords: ["pathetic fallacy", "weather", "reflects", "mirrors", "mood", "sombre"],
        },
        {
          point: "Notes the narrowing focus / move to dialogue / ending on conflict or silence",
          keywords: ["dialogue", "narrows", "drawing room", "conflict", "ends", "remain silent", "tension"],
        },
      ],
      commonError:
        "Listing features ('there is dialogue') without explaining how they interest the reader. Say what each structural choice makes the reader feel or expect.",
    },
    {
      id: "exam-qa-p3-q07",
      extract: "\"Jane, I don't like cavillers or questioners; besides, there is something truly forbidding in a child taking up her elders in that manner. Be seated somewhere; and until you can speak pleasantly, remain silent.\"",
      question: "What does Mrs Reed's reply reveal about her character? Make two points.",
      marks: 2,
      hint: "Did Jane ask a rude question? How does Mrs Reed respond to it?",
      modelAnswer:
        "Mrs Reed is controlling and unfair: Jane asks a reasonable question, but Mrs Reed refuses to answer and orders her to 'remain silent'. She is also cold and dismissive, using imperatives ('Be seated somewhere') that treat Jane as unimportant, even telling her to sit just 'somewhere'.",
      markScheme: [
        {
          point: "Controlling / authoritarian / silences Jane (imperatives)",
          keywords: ["control", "silenc", "imperative", "commands", "orders", "authorit", "strict"],
        },
        {
          point: "Unfair / cold / dismissive / refuses to explain",
          keywords: ["unfair", "cold", "dismissive", "refuses", "unjust", "hypocrit", "uncaring"],
        },
      ],
      commonError:
        "Taking Mrs Reed's view at face value ('Jane is rude'). Jane's question is polite; the reader is meant to see Mrs Reed's response as unjust.",
    },
    {
      id: "exam-qa-p3-q08",
      question: "Narrative voice: The novel is narrated by Jane as an adult looking back on her childhood. What are the effects of this first-person retrospective narration? Give three.",
      marks: 3,
      hint: "Would a ten-year-old use words like 'consciousness of my physical inferiority'? How does 'I' make you feel about Jane?",
      modelAnswer:
        "First, the first-person 'I' creates intimacy, so we see events through Jane's eyes and sympathise with her. Second, the adult narrator's sophisticated vocabulary, such as 'consciousness of my physical inferiority', shows an older, wiser Jane reflecting on her past. Third, the voice is coloured by her bias, so the Reeds are presented critically and ironically; we only get Jane's side of the story.",
      markScheme: [
        {
          point: "Intimacy / sympathy through seeing events from Jane's perspective",
          keywords: ["intima", "sympath", "through her eyes", "her perspective", "close", "feel for"],
        },
        {
          point: "Adult hindsight / sophisticated vocabulary / reflection",
          keywords: ["adult", "hindsight", "looking back", "reflect", "vocabulary", "older", "retrospect"],
        },
        {
          point: "Bias / one-sided view / possibly unreliable or ironic",
          keywords: ["bias", "one sided", "her side", "unreliable", "ironic", "subjective"],
        },
      ],
      commonError:
        "Only saying 'it is in the first person so we know what she thinks'. Strong answers also notice the gap between the child who experiences and the adult who narrates.",
    },
    {
      id: "exam-qa-p3-q09",
      question: "Extended response: How does Brontë make the reader sympathise with Jane in this extract? Write two developed PEEL paragraphs.",
      marks: 6,
      hint: "Paragraph 1: Jane's physical and emotional suffering (cold, 'humbled', 'inferiority'). Paragraph 2: her exclusion and silencing by Mrs Reed (irony of 'darlings', 'dispensed', 'remain silent'). Add context: the position of orphans and children in Victorian families.",
      modelAnswer:
        "Brontë first builds sympathy by showing that Jane suffers both physically and emotionally. She dreads 'the raw twilight, with nipped fingers and toes'; the word 'nipped' suggests the cold bites at her, making her seem small and vulnerable. More painfully, she has 'a heart saddened by the chidings of Bessie' and is 'humbled by the consciousness of my physical inferiority'. The abstract nouns 'consciousness' and 'inferiority' show that Jane is constantly aware of being lesser, so her unhappiness goes far deeper than the weather.\n\nBrontë then deepens our sympathy by presenting Jane as an outsider in her own home. The Reed children are Mrs Reed's 'darlings', yet the ironic parenthesis '(for the time neither quarrelling nor crying)' suggests they are hardly perfect; the unfairness is obvious. Jane, by contrast, is 'dispensed from joining the group', a cold, formal verb that treats her like an object. When she politely asks what she has done, she is told to 'remain silent'. In Victorian society, a dependent orphan like Jane had little power, so the reader feels the injustice of a child being punished for simply asking a question. Some readers might find Jane proud, but Brontë's careful irony guides us firmly to her side.",
      markScheme: [
        {
          point: "Clear argument: Jane is presented as a suffering, unfairly treated child",
          keywords: ["sympath", "unfair", "suffer", "vulnerable", "injustice", "pity"],
        },
        {
          point: "Analyses physical / emotional suffering with embedded evidence (nipped, humbled, inferiority)",
          keywords: ["nipped", "humbled", "inferiority", "saddened", "chidings", "raw twilight"],
        },
        {
          point: "Analyses exclusion: 'dispensed', clustered group, outsider",
          keywords: ["dispensed", "exclud", "outsider", "clustered", "left out", "isolat"],
        },
        {
          point: "Analyses irony / contrast with the Reed 'darlings'",
          keywords: ["darlings", "irony", "ironic", "parenthes", "bracket", "contrast"],
        },
        {
          point: "Analyses silencing: Mrs Reed's dialogue / 'remain silent' / imperatives",
          keywords: ["remain silent", "silenc", "imperative", "questioners", "cavillers", "be seated"],
        },
        {
          point: "Links to Victorian context or evaluates / offers an alternative view",
          keywords: ["victorian", "orphan", "dependent", "social class", "some readers", "alternatively", "bronte"],
        },
      ],
      commonError:
        "Writing a summary of Jane's situation. Each paragraph needs a point, embedded quotations, close analysis of specific words, and a link back to the question (sympathy).",
    },
    {
      id: "exam-qa-p3-q10",
      question: "Evaluation: A reader said, 'In this opening, Jane seems just as rebellious as she is pitiful.' To what extent do you agree? Use evidence.",
      marks: 4,
      hint: "Find evidence that Jane is pitiful, then evidence that she shows spirit or answers back. Then decide which impression is stronger, and why.",
      modelAnswer:
        "Jane certainly seems pitiful: she is cold, 'humbled' by her 'physical inferiority' and shut out from the family group. However, there are signs of rebellion: she boldly asks, 'What does Bessie say I have done?', and Mrs Reed calls her a questioner who is 'taking up her elders'. Even her narration is quietly rebellious, mocking the Reeds with the ironic aside about the 'darlings'. Overall, I largely agree: Jane is a victim, but Brontë shows a spirited, questioning mind that refuses to accept unfairness in silence, which hints she will not stay powerless.",
      markScheme: [
        {
          point: "Evidence that Jane is pitiful / a victim",
          keywords: ["pitiful", "humbled", "inferiority", "victim", "excluded", "cold", "saddened"],
        },
        {
          point: "Evidence that Jane is rebellious / questioning",
          keywords: ["what does bessie say", "asks", "question", "taking up her elders", "answers back", "rebel"],
        },
        {
          point: "Notes the ironic, critical narrative voice as a form of rebellion",
          keywords: ["ironic", "irony", "mock", "narrat", "darlings", "sarcas"],
        },
        {
          point: "Reaches a reasoned judgement (to what extent)",
          keywords: ["overall", "largely agree", "to some extent", "partly", "i agree", "i disagree", "ultimately"],
        },
      ],
      commonError:
        "Only arguing one side. 'To what extent' needs both sides weighed and a clear final judgement.",
    },
  ],
};

// ---------------------------------------------------------------------------
// WRITTEN PAPER 4: WRITING
// ---------------------------------------------------------------------------
const qaP4: Paper<QA> = {
  id: "exam-qa-p4",
  title: "Written Paper 4: Writing (descriptive, discursive, script, speech, poem commentary)",
  questions: [
    {
      id: "exam-qa-p4-q01",
      question: "Discursive writing: Write the opening paragraph (4–6 sentences) of a discursive essay titled 'Should homework be abolished in secondary schools?'",
      marks: 4,
      hint: "Hook the reader, give brief context, show that there are two sides, and signal the line of argument you will weigh up.",
      modelAnswer:
        "Every evening, in homes across Singapore and beyond, the same battle is fought over the kitchen table: homework. For some, it is the backbone of learning, the place where lessons are practised until they stick; for others, it is a thief of sleep, family time and childhood itself. With students reporting rising stress, the question of whether homework should be abolished has never been more pressing. This essay will weigh the evidence on both sides before reaching a judgement on whether homework should be scrapped altogether, or simply rethought.",
      markScheme: [
        {
          point: "Engaging hook (scene, question, striking fact or image)",
          keywords: ["every evening", "imagine", "battle", "picture", "have you ever", "across"],
        },
        {
          point: "Context showing why the issue matters now",
          keywords: ["stress", "pressure", "debate", "pressing", "today", "increasingly", "wellbeing"],
        },
        {
          point: "Presents both sides of the debate in balance",
          keywords: ["for some", "others", "on the other hand", "however", "both sides", "supporters", "critics"],
        },
        {
          point: "Signposts the essay's direction / intention to reach a judgement",
          keywords: ["this essay will", "weigh", "judgement", "consider", "conclude", "explore", "examine"],
        },
      ],
      commonError:
        "Announcing a one-sided opinion in the first line ('Homework is pointless and should be banned'). A discursive opening introduces the debate and keeps the judgement for later.",
    },
    {
      id: "exam-qa-p4-q02",
      question: "Descriptive writing: Write one descriptive paragraph (5–7 sentences) about a sudden monsoon downpour in Singapore.",
      marks: 4,
      hint: "Use at least three senses, one original image (simile, metaphor or personification), precise verbs, and vary your sentence lengths, including one very short sentence.",
      modelAnswer:
        "The sky over Toa Payoh bruised from blue to a sullen purple in minutes. Then the first drops struck: fat, warm coins that smacked the pavement and released the sharp scent of hot tarmac. Within seconds the rain was a grey curtain, drumming on the zinc roof of the hawker centre so loudly that the uncles stopped arguing and simply stared. Drains gulped and choked. Office workers huddled under the void deck, clutching dripping umbrellas like defeated flags, while a lone delivery rider hunched over his handlebars and ploughed on. Then, as suddenly as it had come, it stopped. Steam rose from the road like breath.",
      markScheme: [
        {
          point: "Uses a range of senses (sound, smell, touch, sight)",
          keywords: ["scent", "smell", "drumming", "warm", "roar", "sound", "taste"],
        },
        {
          point: "Uses original figurative language (simile / metaphor / personification)",
          keywords: ["like", "as if", "bruised", "gulped", "curtain", "swallowed", "choked"],
        },
        {
          point: "Uses precise, vivid verbs rather than general ones",
          keywords: ["smacked", "hunched", "ploughed", "lashed", "hammered", "clutching", "huddled"],
        },
        {
          point: "Varies sentence length, including a short sentence, and anchors the scene in Singapore",
          keywords: ["drains", "hawker", "void deck", "hdb", "mrt", "singapore", "it stopped"],
        },
      ],
      commonError:
        "Relying on clichés ('it was raining cats and dogs', 'the rain was very heavy') and on adjectives instead of verbs. Strong description shows the rain through what it does.",
    },
    {
      id: "exam-qa-p4-q03",
      question: "Script writing: Write three lines of script in which two siblings argue about whether to tell their parents about a broken phone. Include at least one stage direction. Then write one sentence of commentary explaining a choice you made.",
      marks: 3,
      hint: "Set it out with character names in capitals, a colon, and no speech marks. Stage directions go in brackets, in the present tense.",
      modelAnswer:
        "MAYA: (holding up the cracked phone) We have to tell Mum tonight.\nDEV: (grabbing her wrist) Tell her what? That it fell? Phones fall.\nMAYA: (pulling free, quietly) Not off the balcony, Dev.\n\nCommentary: I gave Maya the quiet final line, after Dev's three short, panicky questions and statements, so that the power shifts to her and the audience realises the accident was more serious than Dev admits.",
      markScheme: [
        {
          point: "Script dialogue (names and colons, no speech marks) presents the siblings' argument about the phone",
          keywords: ["phone", "tell mum", "tell dad", "parents", "broken", "cracked", "smashed"],
        },
        {
          point: "At least one present-tense stage direction showing visible action",
          keywords: ["holding", "grabbing", "pulling", "snatches", "turns", "pauses", "quietly"],
        },
        {
          point: "Commentary sentence explains a deliberate choice and its effect on the audience",
          keywords: ["i gave", "i chose", "so that", "audience", "to show", "effect", "i used"],
        },
      ],
      commonError:
        "Writing the scene as a story with speech marks ('\"We have to tell Mum,\" said Maya'). Scripts use the character's name and a colon, and stage directions for action.",
    },
    {
      id: "exam-qa-p4-q04",
      question: "Public speaking: Write the opening hook (2–4 sentences) of a speech for a school public speaking competition titled 'Our screens are stealing our childhood'. Use a triplet (tricolon).",
      marks: 3,
      hint: "Grab attention in the first sentence (a question, a striking fact, an image), speak directly to the audience, and build a pattern of three.",
      modelAnswer:
        "Think back to the last time you were truly bored: no phone, no tablet, no screen. Can you even remember it? Because boredom is where we used to build dens, invent games and discover who we were. Today, I want to argue that our screens have quietly stolen that from us.",
      markScheme: [
        {
          point: "Uses a tricolon / triplet (a pattern of three)",
          keywords: ["no phone no tablet no screen", "build dens invent games", "three", "tricolon", "triplet", "and discover"],
        },
        {
          point: "Uses direct address to the audience ('you', 'we')",
          keywords: ["you", "we", "our", "ladies and gentlemen", "fellow students", "everyone here"],
        },
        {
          point: "Opens with an attention-grabbing hook (rhetorical question, striking image or fact)",
          keywords: ["think back", "imagine", "can you", "have you ever", "how many", "picture this"],
        },
      ],
      commonError:
        "Starting with 'Hello, my name is... and today I am going to talk about...'. That wastes the most powerful seconds of the speech; hook first, then state your purpose.",
    },
    {
      id: "exam-qa-p4-q05",
      question: "Poem commentary: You wrote a poem about your identity in which your grandmother's suitcase stands for your family's journey from India to Singapore. Write two sentences of commentary explaining this choice.",
      marks: 3,
      hint: "Name the technique (symbol or extended metaphor), explain the effect you intended, and link it to your theme of identity.",
      modelAnswer:
        "I used my grandmother's battered suitcase as a symbol of my family's migration, because an object that has been packed and unpacked in two countries captures the idea of carrying one home into another. By returning to the suitcase in the final stanza, now 'unpacked', I wanted to show that our identity has settled in Singapore without leaving India behind.",
      markScheme: [
        {
          point: "Names the technique (symbol / extended metaphor / motif)",
          keywords: ["symbol", "metaphor", "motif", "represents", "stands for", "extended metaphor"],
        },
        {
          point: "Explains the intended effect / meaning for the reader",
          keywords: ["i wanted", "to show", "suggest", "so that", "captures", "intended", "convey"],
        },
        {
          point: "Links the choice to identity / heritage / belonging / migration",
          keywords: ["identity", "heritage", "belong", "migration", "journey", "home", "culture"],
        },
      ],
      commonError:
        "Explaining what the poem is about instead of why you made a choice. Commentary sentences follow the pattern: I used X to create Y because Z.",
    },
    {
      id: "exam-qa-p4-q06",
      question: "Poetry writing: Write a short poem of 4–6 lines on the theme 'Where I am from'. Include one metaphor and one deliberate line break (enjambment) for effect.",
      marks: 4,
      hint: "Ground it in concrete, sensory details from your own life (food, sounds, words, places). Let one line run on so a key word lands at the start of the next line.",
      modelAnswer:
        "I am from kaya toast and Sunday roast,\nfrom two passports in one drawer,\nfrom a voice that switches accents\nmid-sentence, like a train changing tracks.\nMy home is a hyphen:\nit holds two words together.",
      markScheme: [
        {
          point: "Includes a clear metaphor",
          keywords: ["is a", "my home is", "i am a", "are a", "was a", "hyphen"],
        },
        {
          point: "Uses enjambment / a deliberate line break",
          keywords: ["mid sentence", "switches", "enjamb", "line break", "runs on", "accents"],
        },
        {
          point: "Uses concrete, sensory detail rather than abstract statements",
          keywords: ["toast", "smell", "taste", "rice", "rain", "sound", "kitchen"],
        },
        {
          point: "Explores identity / belonging / where the speaker is from",
          keywords: ["i am from", "home", "passport", "belong", "language", "heritage", "where i am from"],
        },
      ],
      commonError:
        "Writing in abstractions ('I am from love and happiness'). Strong identity poems use specific objects, foods, sounds and words that only you would choose.",
    },
    {
      id: "exam-qa-p4-q07",
      extract: "Priya was nervous before her speech.",
      question: "Show, don't tell: Rewrite this sentence as 2–3 sentences that show Priya's nerves without using the words 'nervous', 'scared' or 'worried'.",
      marks: 3,
      hint: "What would an audience see her body do? What might she hear or feel? What tiny action gives her away?",
      modelAnswer:
        "Priya smoothed her cue cards for the fourth time, though they were already perfectly flat. Her mouth had gone dry, and the applause for the speaker before her sounded strangely far away. When her name was called, her knees seemed to forget how to work.",
      markScheme: [
        {
          point: "Shows nerves through a physical action or body language",
          keywords: ["cue cards", "hands", "trembl", "shaking", "fidget", "knees", "smoothed"],
        },
        {
          point: "Uses a sensory or internal physical detail (dry mouth, heartbeat, sounds)",
          keywords: ["dry", "heart", "pounding", "sweat", "far away", "stomach", "breath"],
        },
        {
          point: "Avoids naming the emotion and uses a precise image or detail",
          keywords: ["fourth time", "seemed to forget", "as if", "like", "strangely", "though"],
        },
      ],
      commonError:
        "Swapping 'nervous' for a synonym ('Priya was anxious'). That is still telling. Showing means giving evidence the reader can interpret.",
    },
    {
      id: "exam-qa-p4-q08",
      question: "Discursive writing: Write a counter-argument paragraph for an essay on 'Should Singapore ban single-use plastic bags?' Present the opposing view fairly, then rebut it.",
      marks: 4,
      hint: "Open with a discourse marker for the other side, give their best reason with an example, then turn back with 'However...' and evaluate.",
      modelAnswer:
        "On the other hand, opponents argue that a ban would hit small businesses and shoppers hardest. Hawkers and provision shops rely on cheap plastic bags, and many families reuse them as bin liners, so a ban could simply push people to buy thicker bin bags instead. This concern is reasonable. However, it overlooks the fact that charges and bans elsewhere have dramatically reduced bag use without lasting harm to shops, and that affordable alternatives, such as reusable bags, already exist. Therefore, while the transition must be managed carefully, these practical worries do not outweigh the environmental case for change.",
      markScheme: [
        {
          point: "Uses a discourse marker to introduce the opposing view",
          keywords: ["on the other hand", "opponents", "critics argue", "some argue", "conversely", "it could be argued"],
        },
        {
          point: "Presents the opposing reason fairly with an example",
          keywords: ["hawkers", "small businesses", "bin liners", "reuse", "for example", "for instance", "cost"],
        },
        {
          point: "Rebuts the argument with evidence or reasoning",
          keywords: ["however", "overlooks", "nevertheless", "yet", "alternatives", "reusable"],
        },
        {
          point: "Evaluates / links back to the overall judgement",
          keywords: ["therefore", "outweigh", "ultimately", "overall", "on balance", "thus"],
        },
      ],
      commonError:
        "Presenting the opposing view as a straw man ('Some people foolishly think...'). Discursive writing earns marks for treating the other side fairly before rebutting it.",
    },
    {
      id: "exam-qa-p4-q09",
      question: "Public speaking: Write the final 2–4 sentences of a speech arguing that every student should learn a second language. End with a clear call to action.",
      marks: 3,
      hint: "Echo your opening if you can, tell the audience exactly what to do, and finish on a short, memorable line.",
      modelAnswer:
        "So next time you hear a language you do not understand on the MRT, do not tune it out; lean in. Sign up for that language club, download that app, ask your classmate how to say 'thank you' in their mother tongue. A new language does not just give you new words. It gives you a new world.",
      markScheme: [
        {
          point: "Includes a clear call to action (imperatives telling the audience what to do)",
          keywords: ["sign up", "join", "start", "download", "ask", "lean in", "choose"],
        },
        {
          point: "Uses a rhetorical technique (tricolon, repetition, direct address)",
          keywords: ["you", "we", "not just", "three", "tricolon", "repetition"],
        },
        {
          point: "Ends on a memorable, punchy final line or callback",
          keywords: ["new world", "so next time", "remember", "imagine", "finally", "today"],
        },
      ],
      commonError:
        "Ending with 'Thank you for listening' or 'That is the end of my speech'. A conclusion should leave the audience with an action and a line they will remember.",
    },
    {
      id: "exam-qa-p4-q10",
      extract: "The monsoon effected everyone's plans this week. Less students came to the CCA, and the ones who did should of brought umbrellas. Me and Priya was soaked by the time we reached the bus stop.",
      question: "Proofreading: This paragraph contains four errors of grammar or word choice. Rewrite it correctly.",
      marks: 4,
      hint: "Check: affect/effect; less/fewer; 'should of'; and the subject-verb agreement in the last sentence (and who should come first).",
      modelAnswer:
        "The monsoon affected everyone's plans this week. Fewer students came to the CCA, and the ones who did should have brought umbrellas. Priya and I were soaked by the time we reached the bus stop.",
      markScheme: [
        {
          point: "'effected' corrected to 'affected' (verb meaning 'had an impact on')",
          keywords: ["affected", "monsoon affected", "has affected", "had affected", "disrupted", "spoiled"],
        },
        {
          point: "'Less students' corrected to 'Fewer students' (countable noun)",
          keywords: ["fewer", "fewer students", "not as many", "fewer people", "a smaller number", "fewer of"],
        },
        {
          point: "'should of' corrected to 'should have'",
          keywords: ["should have", "should ve", "ought to have", "should have brought", "needed to bring", "ought to"],
        },
        {
          point: "'Me and Priya was' corrected to 'Priya and I were'",
          keywords: ["priya and i", "were soaked", "we were", "priya and i were", "both soaked", "we both"],
        },
      ],
      commonError:
        "Fixing 'Me and Priya' to 'Priya and me'. 'Me' cannot be the subject of a sentence: test it by removing Priya ('Me was soaked' is wrong; 'I was soaked' is right), so it must be 'Priya and I were'.",
    },
  ],
};

export const COMPREHENSIVE: ComprehensiveExam = {
  mcqPapers: [mcqP1, mcqP2, mcqP3, mcqP4],
  qaPapers: [qaP1, qaP2, qaP3, qaP4],
};
