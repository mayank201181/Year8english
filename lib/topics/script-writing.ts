import type { Topic, Passage } from "../types";

// ---- Shared passages (used in the guide, the "Read the texts" list and the papers) ----

const SATURDAY_SHIFT: Passage = {
  id: "saturday-shift",
  title: "Saturday Shift",
  source: "Original short scene written for this app",
  text:
    "SCENE 1. The back room of a small family bakery. 6 a.m. Flour on every surface. A radio murmurs.\n\n(NIA, 14, is icing buns too quickly. SAM, 19, enters with a rucksack. He stops when he sees her.)\n\nNIA: You're early.\nSAM: Couldn't sleep.\nNIA: Mum said you weren't coming home till Christmas.\nSAM: Change of plan.\n(He puts the rucksack down. Picks it up again. Pushes it behind the door.)\nNIA: Exams finished, then?\nSAM: Something like that.\nNIA: (not looking up) She's told everyone, you know. The whole street. 'My son, the engineer.'\nSAM: Has she.\nNIA: Made a banner for the shop window and everything. It's in the cupboard.\n(Pause. SAM opens the cupboard. Looks. Closes it.)\nSAM: It's nice. The lettering.\nNIA: I did the lettering.\nSAM: I know. You always do your E's like that. Curly.\n(The bell above the shop door jangles, off. Both freeze.)\nMUM: (off) Nia? Is that the delivery?\n(NIA looks at SAM. SAM shakes his head, very slightly.)\nNIA: (calling) Just the wind, Mum!\n(She holds out a piping bag. After a moment, SAM takes it.)\nNIA: Curly E's. Don't mess them up.\n(They ice side by side, not speaking. Lights fade slowly.)",
  note:
    "Nobody ever says that Sam has left university. Look for the subtext: the short replies, the rucksack he cannot put down, the banner, and Nia's lie to protect him.",
};

const OPHELIA_REMEMBRANCES: Passage = {
  id: "ophelia-remembrances",
  title: "Ophelia's Remembrances (a missing scene from Hamlet)",
  source: "Original scene written for this app, set between Act 3 Scenes 1 and 2 of Hamlet",
  text:
    "Ophelia's chamber. Night. A single candle. A small wooden box lies open on the bed.\n\n(OPHELIA enters slowly, still holding the bundle of letters HAMLET would not take back. She stands very still. Then she sits and unties the ribbon.)\n\nOPHELIA: 'I never gave you aught.'\n(She lifts the top letter.)\nThen whose hand is this? Whose ink?\n(She reads, half-smiling despite herself.)\n'Doubt thou the stars are fire...'\n(The smile goes.)\nMy father read this one aloud. To the King. To the Queen. As if it were a riddle in a play.\n(She folds the letter very small.)\nThey hid and listened while he broke me. And I let them. I held the book they gave me, and I stood where I was put.\n(She rises and walks to the exact spot, downstage centre, where she stood before. She looks out at the audience.)\nWalk here, Ophelia. Read this, Ophelia. Give these back, Ophelia.\n(Beat.)\nNo one has ever said: speak, Ophelia.\n(Three sharp knocks, off.)\nPOLONIUS: (off) Daughter? Are you abed?\n(OPHELIA looks at the letters, then at the candle. She holds one letter close to the flame... and stops.)\nOPHELIA: (calling, brightly) Yes, father. Fast asleep.\n(She blows out the candle. Blackout.)",
  note:
    "Echoes of the original: Hamlet tells Ophelia 'I never gave you aught' (3.1); Polonius reads Hamlet's love letter, including 'Doubt thou the stars are fire', to the King and Queen (2.2); Polonius tells her 'Ophelia, walk you here' and gives her a book to read (3.1).",
};

const NURSE_SCENE: Passage = {
  id: "juliet-nurse-3-5",
  title: "Juliet and the Nurse after the banishment",
  source: "William Shakespeare, Romeo and Juliet (c. 1595), Act 3 Scene 5",
  text:
    "JULIET: What say'st thou? hast thou not a word of joy?\nSome comfort, nurse.\nNURSE: Faith, here it is.\nRomeo is banished; and all the world to nothing,\nThat he dares ne'er come back to challenge you;\nOr, if he do, it needs must be by stealth.\nThen, since the case so stands as now it doth,\nI think it best you married with the county.\nO, he's a lovely gentleman!\nRomeo's a dishclout to him: an eagle, madam,\nHath not so green, so quick, so fair an eye\nAs Paris hath. Beshrew my very heart,\nI think you are happy in this second match,\nFor it excels your first: or if it did not,\nYour first is dead; or 'twere as good he were,\nAs living here and you no use of him.\nJULIET: Speakest thou from thy heart?\nNURSE: And from my soul too;\nOr else beshrew them both.\nJULIET: Amen!\nNURSE: What?\nJULIET: Well, thou hast comforted me marvellous much.\nGo in: and tell my lady I am gone,\nHaving displeased my father, to Laurence' cell,\nTo make confession and to be absolved.\nNURSE: Marry, I will; and this is wisely done.\n(Exit)\nJULIET: Ancient damnation! O most wicked fiend!\nIs it more sin to wish me thus forsworn,\nOr to dispraise my lord with that same tongue\nWhich she hath praised him with above compare\nSo many thousand times? Go, counsellor;\nThou and my bosom henceforth shall be twain.\nI'll to the friar, to know his remedy:\nIf all else fail, myself have power to die.",
  note:
    "Glossary: county = Count (Paris); dishclout = dishcloth; beshrew = curse; forsworn = breaking a solemn promise; twain = separated. Juliet has secretly married Romeo, who has just been banished for killing Tybalt. Her father has ordered her to marry Paris.",
};

const CALIBAN_SPEECH: Passage = {
  id: "caliban-island",
  title: "'This island's mine'",
  source: "William Shakespeare, The Tempest (c. 1611), Act 1 Scene 2 (Caliban to Prospero)",
  text:
    "This island's mine, by Sycorax my mother,\nWhich thou tak'st from me. When thou cam'st first,\nThou strok'st me and made much of me; wouldst give me\nWater with berries in't; and teach me how\nTo name the bigger light, and how the less,\nThat burn by day and night: and then I lov'd thee,\nAnd show'd thee all the qualities o' th' isle,\nThe fresh springs, brine-pits, barren place and fertile:\nCurs'd be I that did so! All the charms\nOf Sycorax, toads, beetles, bats, light on you!\nFor I am all the subjects that you have,\nWhich first was mine own king: and here you sty me\nIn this hard rock, whiles you do keep from me\nThe rest o' th' island.",
  note:
    "Glossary: Sycorax = Caliban's mother, a witch who ruled the island before Prospero arrived; the bigger light and the less = the sun and the moon; brine-pits = salt pools; sty me = pen me up like a pig.",
};

const HAMLET_OPHELIA: Passage = {
  id: "hamlet-ophelia-3-1",
  title: "'Are you honest?'",
  source: "William Shakespeare, Hamlet (c. 1600), Act 3 Scene 1",
  text:
    "OPHELIA: My lord, I have remembrances of yours,\nThat I have longed long to re-deliver;\nI pray you, now receive them.\nHAMLET: No, not I;\nI never gave you aught.\nOPHELIA: My honour'd lord, you know right well you did;\nAnd, with them, words of so sweet breath composed\nAs made the things more rich: their perfume lost,\nTake these again; for to the noble mind\nRich gifts wax poor when givers prove unkind.\nThere, my lord.\nHAMLET: Ha, ha! are you honest?\nOPHELIA: My lord?\nHAMLET: Are you fair?\nOPHELIA: What means your lordship?",
  note:
    "Polonius and King Claudius are hidden nearby, spying on this meeting. 'Remembrances' = love tokens and letters; 'honest' here means both truthful and chaste; 'fair' = beautiful.",
};

export const scriptWriting: Topic = {
  id: "script-writing",
  title: "Script Writing & Commentary",
  subject: "Shakespeare",
  icon: "🎬",
  summary: "Write a scene that works on stage, then explain your choices.",
  intro:
    "A script is a set of instructions for bringing people to life in front of an audience: every word must be speakable and every stage direction must be something we can see or hear. In this topic you will learn the layout and conventions of a script, the dramatic devices that create tension (subtext, dramatic irony, stichomythia, the soliloquy), and the stagecraft that turns words into theatre. Then you will learn to adapt Shakespeare (giving Caliban, Ophelia or the Nurse their own scene) and to write the commentary that proves every choice you made was deliberate.",

  guide: [
    {
      id: "script-conventions",
      heading: "How a script looks on the page",
      discovery: {
        problem:
          "Here is a sentence from a story: Mia slammed the door. \"I'm not going,\" she shouted angrily, and she thought about how unfair it all was. Rewrite it as a script. What do you have to delete or change, and which part cannot be shown on stage at all?",
        idea:
          "The speech marks and 'she shouted' disappear; MIA goes in the margin; the action becomes a short present-tense stage direction: (She slams the door.) 'Angrily' can become a brief bracketed direction, but often the words do that job alone. Her private thought cannot be staged at all: it must become something she says, something she does, or be cut. That is the golden rule of scripts: they show, they never narrate.",
      },
      body:
        "A **script** (or **playscript**) is the written text of a play, film or broadcast. Unlike a story, it has no narrator. Everything the audience learns must come from what characters **say** (the **dialogue**) and what the audience can **see and hear** (the action, described in **stage directions**).\n\nScripts follow a set of **conventions** (agreed rules of layout) so that actors and directors can read them quickly:\n\n- **Scene heading**: a scene number, the place and the time, e.g. *SCENE 2. The Capulets' kitchen. Late at night.*\n- **Character list** (sometimes called the *dramatis personae*, Latin for 'the persons of the drama'): who is in the play, with a few words about each.\n- **Character names** in CAPITALS at the left margin, usually followed by a colon.\n- **Dialogue** straight after the name, with **no speech marks** and no 'she said'.\n- **Stage directions** in the **present tense**, in *italics* when typed or in (brackets) when handwritten. Some sit on their own line; short ones (called **parentheticals**) sit just before a line, e.g. JULIET: (whispering) Is he gone?\n- A **new line for every new speaker**.\n- **Entrances and exits** are marked: *Enter NURSE.* / *Exit.* / *Exeunt* (Latin for 'they go out', used when several characters leave).\n\nHere is a tiny example laid out correctly:\n\nSCENE 1. A bus shelter. Night. Rain.\n(LEO sits alone. KAI enters, soaked.)\nKAI: You waited.\nLEO: (not looking at him) Bus is late.\n\nIn a handwritten exam you cannot use italics, so put every stage direction in brackets. Whatever system you choose, **be consistent**: examiners notice a script that switches format halfway through.",
      diagram: `<svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An annotated script page showing a scene heading, a stage direction, character names in capitals and dialogue without speech marks"><rect x="10" y="10" width="200" height="190" rx="6" fill="#fffbeb" stroke="#d97706"/><text x="20" y="32" font-size="11" font-weight="bold" fill="#1f2937">SCENE 1. A bus shelter. Night.</text><text x="20" y="54" font-size="11" font-style="italic" fill="#6b7280">(LEO sits alone. KAI enters.)</text><text x="20" y="80" font-size="11" font-weight="bold" fill="#be123c">KAI:</text><text x="52" y="80" font-size="11" fill="#1f2937">You waited.</text><text x="20" y="104" font-size="11" font-weight="bold" fill="#be123c">LEO:</text><text x="52" y="104" font-size="11" font-style="italic" fill="#6b7280">(quietly)</text><text x="52" y="120" font-size="11" fill="#1f2937">Bus is late.</text><text x="20" y="146" font-size="11" font-style="italic" fill="#6b7280">(Pause. Thunder.)</text><text x="20" y="172" font-size="11" font-style="italic" fill="#6b7280">(Exit KAI.)</text><line x1="210" y1="28" x2="232" y2="28" stroke="#d97706"/><text x="236" y="32" font-size="11" fill="#92400e">Scene heading</text><line x1="210" y1="50" x2="232" y2="50" stroke="#6b7280"/><text x="236" y="54" font-size="11" fill="#374151">Stage direction:</text><text x="236" y="67" font-size="11" fill="#374151">present tense</text><line x1="210" y1="80" x2="232" y2="80" stroke="#be123c"/><text x="236" y="84" font-size="11" fill="#9f1239">NAME in capitals</text><line x1="210" y1="104" x2="232" y2="104" stroke="#6b7280"/><text x="236" y="108" font-size="11" fill="#374151">Parenthetical</text><line x1="210" y1="120" x2="232" y2="120" stroke="#1f2937"/><text x="236" y="124" font-size="11" fill="#1f2937">Dialogue: no</text><text x="236" y="137" font-size="11" fill="#1f2937">speech marks</text><line x1="210" y1="168" x2="232" y2="168" stroke="#6b7280"/><text x="236" y="172" font-size="11" fill="#374151">Exit marked</text></svg>`,
      diagramCaption: "The anatomy of a script page: every element has its own place and its own style.",
      keyPoints: [
        "Names in CAPITALS in the margin; dialogue with no speech marks and no 'he said'.",
        "Stage directions: present tense, brief, in italics or brackets.",
        "Scene headings give place and time; entrances and exits are always marked.",
      ],
      thinkDeeper:
        "Stories are usually told in the past tense, but stage directions are always in the present tense. What does that tell you about the difference between reading a story and watching a play?",
    },
    {
      id: "dialogue-voice",
      heading: "Dialogue: making every character sound like themselves",
      discovery: {
        problem:
          "Two lines with the names hidden. A: Right. Bags down, phones away, eyes on me. B: I literally just sat down, Miss. Who is speaking in each line, how old are they, and how do you know?",
        idea:
          "A is a teacher (commands, short imperatives, the confidence of authority); B is a student (the informal 'literally', the defensive tone, 'Miss'). You worked it out from vocabulary, sentence type and attitude alone. That is what a strong character **voice** does: we know who is speaking before we see the name.",
      },
      body:
        "**Dialogue** is the conversation between characters, and in a script it carries almost everything. Good dialogue is not a transcript of real speech (which is full of 'um' and repetition); it is a sharpened version of it.\n\nEvery character needs a distinct **voice** (sometimes called an **idiolect**: an individual's personal way of speaking). You build a voice from:\n\n- **Vocabulary**: formal or slangy, simple or technical, old-fashioned or modern.\n- **Sentence length**: a nervous character might babble in long run-on sentences; a cold one might answer in single words.\n- **Habits**: a catchphrase, a way of avoiding questions, always answering a question with a question.\n- **What they will not say**: often more revealing than what they do say.\n\nReal speech is messy, so use punctuation to show it: a **dash** for an interruption (*I only meant—* / *I know what you meant.*), an **ellipsis** (...) for trailing off or hesitation, and short broken lines for panic.\n\nAvoid the **exposition dump**: lines where characters tell each other things they both already know, just to inform the audience (*As you know, Mother, Father was banished to Mantua last Tuesday for killing your cousin Tybalt.*). Instead, let information slip out in the middle of conflict: *Don't say his name in this house.*\n\nFinally, every line should do a job: reveal character, move the plot forward or raise the tension. If a line does none of these, cut it.\n\nShakespeare does this brilliantly. The Nurse in *Romeo and Juliet* rambles, repeats herself and drifts into old memories; Juliet speaks in quick, tightly argued thoughts. You could tell them apart with the names removed.",
      keyPoints: [
        "Give each character a distinct voice: vocabulary, sentence length, habits, what they avoid.",
        "Dashes show interruptions; ellipses show hesitation or trailing off.",
        "Avoid exposition dumps: let information emerge through conflict.",
        "Test it: cover the names. Can you still tell who is speaking?",
      ],
      thinkDeeper:
        "Some writers say the most important lines in a scene are the ones a character almost says but does not. How could a character's silence, or a change of subject, tell the audience more than a speech would?",
    },
    {
      id: "stage-directions",
      heading: "Stage directions: show it, don't narrate it",
      discovery: {
        problem:
          "Which of these could an actor actually perform? (a) She crosses to the window. (b) She feels a wave of guilt about last summer. (c) A phone buzzes on the table. (d) He has always hated Tuesdays.",
        idea:
          "Only (a) and (c). The audience can see a cross to the window and hear a buzzing phone. Guilt about last summer and a lifelong hatred of Tuesdays are thoughts and backstory: invisible on stage. If they matter, turn them into something the audience can see or hear, such as a line of dialogue or an action (He tears Tuesday off the calendar).",
      },
      body:
        "**Stage directions** are the instructions in a script that are not spoken aloud. They tell the actors and the production team what happens.\n\nThere are four main kinds:\n\n- **Entrances and exits**: *Enter ARIEL.* / *Exit HAMLET.*\n- **Movement and action**: *She tears up the letter.*\n- **Delivery**: a short parenthetical before a line, e.g. (bitterly), (to the audience), (aside).\n- **Technical cues**: lighting and sound, e.g. *Lights fade. A clock strikes twelve.*\n\nThe test for every direction is simple: **can the audience see it or hear it?** If not, it does not belong in a stage direction. This is the most common mistake in student scripts: **novel-style narration**, where the writer slips back into storytelling (*She walks in, remembering the day her grandmother died and wondering if anyone will ever understand her*). An actor cannot perform 'remembering' or 'wondering'.\n\nThe second most common mistake is **too many stage directions**. If every line has (angrily) or (sadly) in front of it, you are not trusting your dialogue or your actors. Strong dialogue already carries its tone. Use a parenthetical only when the line could be misread, e.g. when a character says something kind but means it sarcastically.\n\nShakespeare wrote very few stage directions; his most famous is *Exit, pursued by a bear* (*The Winter's Tale*, Act 3 Scene 3). Instead he built directions into the speech, so-called **embedded stage directions**. When Juliet says *Wilt thou be gone? it is not yet near day* (Act 3 Scene 5), the line tells the actors it is the very early morning and that Romeo is about to leave.",
      diagram: `<svg viewBox="0 0 340 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A decision flowchart: can the audience see it or hear it? If yes keep it short and in the present tense; if no turn it into dialogue or action, or cut it"><rect x="95" y="10" width="150" height="40" rx="8" fill="#e0f2fe" stroke="#0284c7"/><text x="170" y="28" font-size="11" text-anchor="middle" fill="#0c4a6e">Can the audience</text><text x="170" y="42" font-size="11" text-anchor="middle" fill="#0c4a6e">SEE it or HEAR it?</text><line x1="130" y1="50" x2="80" y2="88" stroke="#16a34a" stroke-width="2"/><text x="88" y="70" font-size="11" fill="#15803d">Yes</text><line x1="210" y1="50" x2="260" y2="88" stroke="#dc2626" stroke-width="2"/><text x="240" y="70" font-size="11" fill="#b91c1c">No</text><rect x="10" y="90" width="145" height="70" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="82" y="110" font-size="11" text-anchor="middle" fill="#14532d">KEEP IT</text><text x="82" y="126" font-size="11" text-anchor="middle" fill="#14532d">brief, present tense</text><text x="82" y="142" font-size="11" text-anchor="middle" font-style="italic" fill="#14532d">(She drops the key.)</text><rect x="185" y="90" width="145" height="70" rx="8" fill="#fee2e2" stroke="#dc2626"/><text x="257" y="110" font-size="11" text-anchor="middle" fill="#7f1d1d">CHANGE IT OR CUT IT</text><text x="257" y="126" font-size="11" text-anchor="middle" fill="#7f1d1d">turn the thought into</text><text x="257" y="142" font-size="11" text-anchor="middle" fill="#7f1d1d">dialogue or an action</text></svg>`,
      diagramCaption: "The see-or-hear test for every stage direction.",
      keyPoints: [
        "A stage direction must be something the audience can see or hear.",
        "Thoughts, feelings and backstory must become dialogue or action, or be cut.",
        "Fewer, sharper directions beat a direction on every line.",
        "Shakespeare embeds directions in the dialogue itself.",
      ],
      thinkDeeper:
        "George Bernard Shaw wrote very long, detailed stage directions; Shakespeare wrote almost none. Which approach gives actors and directors more freedom, and which protects the writer's vision? Which would you rather work with?",
    },
    {
      id: "dramatic-devices",
      heading: "Conflict, subtext and dramatic irony",
      discovery: {
        problem:
          "Your friend says: 'No, it's fine. Honestly. Go to the party without me.' Write down three things she might really mean. Then decide: how could an actor show the real meaning without changing a single word?",
        idea:
          "She might mean 'I'm hurt you didn't notice I wasn't invited', 'Please stay with me' or 'I'm testing whether you care'. An actor shows this through tone, a pause before 'Honestly', avoiding eye contact, or turning away. The gap between what is said and what is meant is called **subtext**, and it is one of the most powerful tools a scriptwriter has.",
      },
      body:
        "**Conflict** is the engine of drama: a character **wants** something and something stands in the way. Without conflict a scene is just people chatting. Conflict can be:\n\n- **External**: character against character (Caliban against Prospero), or against society or circumstances (Juliet against her father's order to marry Paris).\n- **Internal**: a character torn between two choices (Hamlet unable to decide whether to act).\n\n**Subtext** is the meaning beneath the words: what a character really thinks or feels but does not say. Real people rarely announce their feelings (*I am deeply hurt by your betrayal*). They say *Fine.* and leave the room. Subtext makes the audience lean in and work out the truth, which makes them part of the scene. In *Saturday Shift* (below), nobody ever says that Sam has left university, but the audience knows.\n\n**Dramatic irony** is when the **audience knows something a character does not**. It creates tension (we want to shout a warning), sympathy and sometimes dark comedy. Shakespeare uses it from the very first lines of *Romeo and Juliet*: the Prologue tells us that *a pair of star-cross'd lovers take their life*, so every hopeful moment afterwards is shadowed by what we know is coming. In Act 3 Scene 5, when Juliet answers the Nurse's advice with *Amen!*, the Nurse thinks Juliet agrees; the audience knows Juliet is quietly cursing her.\n\nA **cliffhanger** ends a scene on an unanswered question, a shock or a decision, so the audience is desperate to know what happens next.",
      diagram: `<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An iceberg diagram: the small part above the water is what the character says; the huge part below is subtext, what they really mean"><rect x="0" y="70" width="320" height="120" fill="#dbeafe"/><line x1="0" y1="70" x2="320" y2="70" stroke="#2563eb" stroke-width="2"/><polygon points="130,70 160,30 190,70" fill="#ffffff" stroke="#1e3a8a"/><polygon points="130,70 190,70 240,150 160,182 80,150" fill="#bfdbfe" stroke="#1e3a8a"/><text x="160" y="22" font-size="12" text-anchor="middle" font-weight="bold" fill="#1e3a8a">SAID: Fine. Go without me.</text><text x="160" y="98" font-size="11" text-anchor="middle" fill="#1e3a8a">SUBTEXT:</text><text x="160" y="114" font-size="11" text-anchor="middle" fill="#1e3a8a">I am hurt.</text><text x="160" y="130" font-size="11" text-anchor="middle" fill="#1e3a8a">Why didn't you notice?</text><text x="160" y="146" font-size="11" text-anchor="middle" fill="#1e3a8a">Please stay.</text><text x="256" y="62" font-size="11" fill="#1e3a8a">dialogue</text><text x="250" y="178" font-size="11" fill="#1e3a8a">feelings</text></svg>`,
      diagramCaption: "Subtext is the iceberg: the words are the small tip; the real meaning lies underneath.",
      passage: SATURDAY_SHIFT,
      keyPoints: [
        "Conflict = a want + an obstacle. No conflict, no drama.",
        "Subtext is what characters mean but do not say.",
        "Dramatic irony: the audience knows more than the character.",
        "End scenes on a cliffhanger to pull the audience forward.",
      ],
      thinkDeeper:
        "In Saturday Shift, Nia lies to her mother to protect Sam. Is the audience on Nia's side, Sam's side or Mum's side at the end, and how has the writer made you feel that way without anyone explaining it?",
    },
    {
      id: "speech-forms",
      heading: "Monologue, soliloquy, aside and stichomythia",
      discovery: {
        problem:
          "Read the Hamlet and Ophelia exchange below aloud with a partner, as fast as you can once you reach 'are you honest?'. What happens to the mood when the lines suddenly get very short?",
        idea:
          "The long, formal lines about returning gifts suddenly collapse into short, sharp questions and confused replies. The pace jumps, the tension rises, and Ophelia is knocked off balance. Rapid exchanges of short lines like this are called **stichomythia** (stick-oh-MITH-ee-uh), and they are perfect for arguments, interrogations and flirting.",
      },
      body:
        "Drama has special forms of speech, and knowing their names gives you precise terminology for your commentary.\n\n- **Monologue**: a long, uninterrupted speech by one character. It may be addressed to other characters on stage (a speech to an army) or to the audience.\n- **Soliloquy**: a speech in which a character **alone on stage** speaks their thoughts aloud. Because no other character hears it, the audience assumes it is the truth. Hamlet's *O, that this too too solid flesh would melt* (Act 1 Scene 2) comes the moment the court leaves him alone. After the Nurse exits in Act 3 Scene 5, Juliet's soliloquy begins *Ancient damnation! O most wicked fiend!*, revealing the fury she hid.\n- **Aside**: a short remark spoken to the audience (or to one character) that the other characters on stage do **not** hear. Hamlet's very first line, *A little more than kin, and less than kind* (Act 1 Scene 2), is usually played as an aside: a bitter joke about his uncle that the court does not catch. Asides create instant dramatic irony.\n- **Stichomythia**: rapid dialogue in alternating single lines or half-lines, often in conflict. It speeds up the pace and makes characters sound as if they are fencing with words.\n\nShakespeare also uses **shared lines**, where one character finishes another's line of verse, which can show intimacy or an aggressive interruption.\n\nIn your own scripts: use a soliloquy when you want the audience to hear the truth beneath the subtext; an aside to make the audience your secret ally; stichomythia to turn up the tension; a monologue for a big moment of persuasion, confession or breakdown.",
      passage: HAMLET_OPHELIA,
      keyPoints: [
        "Soliloquy: alone on stage, private thoughts, assumed to be honest.",
        "Aside: a brief remark other characters on stage do not hear.",
        "Monologue: a long speech, which may be addressed to others.",
        "Stichomythia: rapid one-line exchanges that build tension and pace.",
      ],
      thinkDeeper:
        "Polonius and the King are hiding and listening during Hamlet and Ophelia's exchange. How does knowing that change the way the short, sharp lines feel? Is this still 'private' speech?",
    },
    {
      id: "pace-structure",
      heading: "Pace, tension and shaping a scene",
      discovery: {
        problem:
          "Two endings for the same scene. Ending 1: SAM: Anyway, I'd better go to bed. Night. (Exit.) Ending 2: (The shop bell rings, off. Both freeze.) MUM: (off) Who's there? Which ending makes you want to watch the next scene, and why?",
        idea:
          "Ending 2: it stops at a moment of danger with a question unanswered (will Mum find out?). Ending 1 lets all the tension drain away. Professional writers say: arrive late, leave early. Start the scene as close to the conflict as you can, and leave it while the audience still has a burning question.",
      },
      body:
        "A scene is not just a conversation; it is a small journey with a shape. Most strong scenes follow a pattern like this:\n\n- **Set-up**: who, where, what each character wants. Do it quickly: *arrive late*.\n- **Complication**: an obstacle, a secret or a new arrival.\n- **Escalation**: the stakes rise; the lines may get shorter and sharper.\n- **Turning point**: something changes: a revelation, a decision, a reversal of power.\n- **Ending**: often a **cliffhanger**, a striking image or a blackout: *leave early*.\n\n**Pace** is the speed at which a scene seems to move. You control it through:\n\n- **Speeding up**: short lines, stichomythia, interruptions, characters entering and exiting, overlapping speech.\n- **Slowing down**: long speeches, (Pause.), (Silence.), a **beat** (a tiny pause where something shifts), slow physical business like folding a letter.\n\nVariety is the key. A scene that is all shouting becomes numbing; a sudden silence after an argument can be the loudest moment of all. Shakespeare often places comedy right before tragedy (the Nurse's chatter just before terrible news) so that the drop feels steeper. This is called **contrast** or **juxtaposition**.",
      diagram: `<svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A tension graph for a scene rising from set-up through complication and escalation to a turning point, then ending on a cliffhanger while tension is still high"><line x1="30" y1="150" x2="320" y2="150" stroke="#374151" stroke-width="1.5"/><line x1="30" y1="150" x2="30" y2="15" stroke="#374151" stroke-width="1.5"/><text x="12" y="85" font-size="11" fill="#374151" transform="rotate(-90 12 85)" text-anchor="middle">tension</text><text x="175" y="172" font-size="11" text-anchor="middle" fill="#374151">time in the scene</text><polyline points="35,135 90,120 150,95 210,60 250,35 300,45" fill="none" stroke="#be123c" stroke-width="3"/><circle cx="250" cy="35" r="5" fill="#be123c"/><circle cx="300" cy="45" r="5" fill="#7c3aed"/><text x="55" y="145" font-size="11" fill="#1f2937">set-up</text><text x="100" y="112" font-size="11" fill="#1f2937">complication</text><text x="150" y="70" font-size="11" fill="#1f2937">escalation</text><text x="196" y="28" font-size="11" fill="#be123c">turning point</text><text x="256" y="66" font-size="11" fill="#7c3aed">cliffhanger</text><text x="256" y="80" font-size="11" fill="#7c3aed">(leave early)</text></svg>`,
      diagramCaption: "A scene's tension rises to a turning point; a cliffhanger ends it while the tension is still high.",
      keyPoints: [
        "Arrive late, leave early: start near the conflict, end on a question.",
        "Short lines and interruptions speed the pace; pauses and long speeches slow it.",
        "A turning point changes the power or the situation.",
        "Contrast (comedy before tragedy, noise before silence) sharpens the effect.",
      ],
      thinkDeeper:
        "Why might a single word of silence, (Pause.), be more powerful in a script than a whole paragraph of emotional dialogue? When could it be less powerful?",
    },
    {
      id: "stagecraft",
      heading: "Stagecraft: making the stage tell the story",
      discovery: {
        problem:
          "Two characters are arguing. In version A they stand nose to nose in the centre of the stage. In version B one stands on a chair while the other sits on the floor in the far corner. Before anyone speaks, what does each picture tell the audience?",
        idea:
          "Version A suggests equal power and explosive closeness: they might fight or kiss. Version B shows a huge gap in status and emotional distance: one dominates, the other is crushed or withdrawn. Where characters stand (**blocking**), how close they are (**proxemics**) and how high they are (**levels**) tell a story without a single word.",
      },
      body:
        "**Stagecraft** means all the visual and sound elements a playwright and director use to tell the story. A writer suggests these through stage directions; a commentary explains why.\n\n- **Set**: the physical setting. It can be **naturalistic** (a realistic kitchen with a working tap) or **minimalist/symbolic** (a single chair, a bare stage). Shakespeare's Globe performed in daylight with very little scenery, so the words painted the setting.\n- **Props** (properties): objects the actors use. A good prop carries meaning: Juliet's vial, Ophelia's returned letters, Prospero's staff.\n- **Costume**: shows status, period, personality and change (a character who gradually loosens their tie is unravelling).\n- **Lighting**: a **spotlight** isolates one character (ideal for a soliloquy); a **blackout** ends a scene sharply; a slow **fade** lets a moment linger; colour washes create mood (cold blue, warm amber, red).\n- **Sound**: effects (a knock, thunder, a phone), music, and silence.\n- **Blocking**: the planned positions and movements of actors on stage.\n- **Proxemics**: the use of **distance** between characters to show their relationship. Moving closer can show trust, love or threat; stepping away shows rejection.\n- **Levels**: height on stage. A character standing above another usually holds more power or **status**.\n\nActors and directors name the parts of the stage from the actor's point of view, facing the audience. **Downstage** is nearest the audience; **upstage** is furthest away. **Stage left** is the actor's left, which is the audience's right. **Downstage centre** is the most powerful spot: close, central and impossible to ignore.",
      diagram: `<svg viewBox="0 0 330 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A stage map showing nine areas from upstage right to downstage left, with the audience at the bottom; stage right is on the audience's left"><rect x="20" y="15" width="290" height="150" fill="#fef3c7" stroke="#92400e" stroke-width="2"/><line x1="116" y1="15" x2="116" y2="165" stroke="#d97706" stroke-dasharray="4 3"/><line x1="213" y1="15" x2="213" y2="165" stroke="#d97706" stroke-dasharray="4 3"/><line x1="20" y1="65" x2="310" y2="65" stroke="#d97706" stroke-dasharray="4 3"/><line x1="20" y1="115" x2="310" y2="115" stroke="#d97706" stroke-dasharray="4 3"/><text x="68" y="44" font-size="11" text-anchor="middle" fill="#78350f">Upstage Right</text><text x="165" y="44" font-size="11" text-anchor="middle" fill="#78350f">Upstage Centre</text><text x="262" y="44" font-size="11" text-anchor="middle" fill="#78350f">Upstage Left</text><text x="68" y="94" font-size="11" text-anchor="middle" fill="#78350f">Stage Right</text><text x="165" y="94" font-size="11" text-anchor="middle" fill="#78350f">Centre Stage</text><text x="262" y="94" font-size="11" text-anchor="middle" fill="#78350f">Stage Left</text><text x="68" y="144" font-size="11" text-anchor="middle" fill="#78350f">Downstage Right</text><rect x="118" y="117" width="93" height="46" fill="#fde68a"/><text x="165" y="144" font-size="11" text-anchor="middle" font-weight="bold" fill="#78350f">Downstage Centre</text><text x="262" y="144" font-size="11" text-anchor="middle" fill="#78350f">Downstage Left</text><text x="165" y="188" font-size="12" text-anchor="middle" font-weight="bold" fill="#1f2937">AUDIENCE</text></svg>`,
      diagramCaption: "Stage directions are named from the actor's view: stage right is on the audience's left. Downstage centre is the power spot.",
      keyPoints: [
        "Set, props, costume, lighting and sound create meaning, not just decoration.",
        "Blocking = movement; proxemics = distance; levels = height and status.",
        "Downstage is nearest the audience; stage left is the actor's left.",
        "A spotlight suits a soliloquy; a blackout makes a sharp ending.",
      ],
      thinkDeeper:
        "At the Globe there was no stage lighting and plays were performed in daylight. How did that shape the way Shakespeare wrote? What might a modern adaptation gain, and lose, by adding spotlights and blackouts?",
    },
    {
      id: "adapting-shakespeare",
      heading: "Adapting Shakespeare: modernise, fill a gap, flip the viewpoint",
      discovery: {
        problem:
          "Read Caliban's speech below. Prospero has far more lines in The Tempest than Caliban does. If you told the story of the island from Caliban's point of view, which moment would you show first, and why?",
        idea:
          "Many writers would start with Prospero's arrival, when Caliban was kind to him ('then I lov'd thee, / And show'd thee all the qualities o' th' isle'). Starting there makes the audience see the betrayal through Caliban's eyes, so we sympathise with him before we hear Prospero call him a slave. Choosing whose story to tell, and where to begin, completely changes how an audience judges a character.",
      },
      body:
        "An **adaptation** is a new version of an existing story. Writers have been adapting Shakespeare for four hundred years: *West Side Story* (1957) moves *Romeo and Juliet* to rival gangs in New York; Baz Luhrmann's film *Romeo + Juliet* (1996) keeps Shakespeare's words but sets them among guns and fast cars; Tom Stoppard's *Rosencrantz and Guildenstern Are Dead* (1966) shows *Hamlet* from the viewpoint of two minor characters; Aimé Césaire's *A Tempest* (1969) retells the island story from Caliban's anti-colonial point of view.\n\nIn class tasks you will usually do one of three things:\n\n- **Modernise a scene**: move it to a modern setting and language while keeping its **dramatic core** (the relationships, the conflict and the outcome). Juliet and the Nurse could become a teenager and the family's live-in carer arguing in a modern kitchen.\n- **Write a missing scene**: a moment that happens **offstage** in the original, such as Juliet and the Nurse the evening Juliet brings home the Friar's potion, or Ophelia alone after Hamlet's rejection.\n- **Change the point of view**: tell events from a voice the play sidelines. **Caliban's version** of the island; **Ophelia's perspective** (she is constantly instructed by her father and brother but rarely asked what she thinks).\n\nThe rules for a strong adaptation:\n\n- **Stay consistent with the original.** Do not let characters know things they cannot know (the Nurse never learns of the potion plan) or contradict established events.\n- **Show your knowledge of the text**: echo or adapt key quotations, so a reader recognises the source. Caliban's *This island's mine* could become the last line of a modern monologue.\n- **Choose a register** (level of formality) deliberately: fully modern, a Shakespearean pastiche, or a blend where one original line lands with special force.\n- **Know your audience**: a modern teenage audience, theatre-goers who know the play, or a younger audience.\n- **Add something**: an adaptation should make us see the original afresh, not just repeat it.",
      passage: CALIBAN_SPEECH,
      keyPoints: [
        "Three task types: modernise, write a missing scene, change the viewpoint.",
        "Keep the dramatic core and stay consistent with the original's facts.",
        "Echo key quotations to show knowledge of the source text.",
        "An adaptation should reveal something new about the original.",
      ],
      thinkDeeper:
        "Is it possible to write 'Caliban's version' that makes him wholly sympathetic without ignoring things he does in the play, such as plotting to murder Prospero with Stephano and Trinculo? Should an adaptation be fair to everyone?",
    },
    {
      id: "writing-commentary",
      heading: "Writing the commentary: explaining your choices",
      discovery: {
        problem:
          "Which commentary sentence is stronger, and why? (1) In my scene Juliet comes home and hides the potion from the Nurse and then the Nurse leaves. (2) I used dramatic irony when the Nurse says 'Your mother will weep', because the audience knows the tears will be of grief, not joy; this mirrors Shakespeare's Act 4 Scene 5, where the family mourn Juliet.",
        idea:
          "Sentence 2. Sentence 1 only retells the plot. Sentence 2 names a technique, quotes the student's own script, explains the intended effect on the audience and links back to Shakespeare. A commentary is not a summary; it is an argument that your choices were deliberate and effective.",
      },
      body:
        "A **commentary** (sometimes called a **rationale** or **reflective commentary**) is a short analytical piece in which you explain the choices you made in your own creative writing. It is your chance to prove that nothing in your script happened by accident.\n\nA strong commentary covers:\n\n- **Purpose**: what you were trying to do (e.g. to give a voice to a sidelined character; to show the breakdown of trust between Juliet and the Nurse).\n- **Audience**: who the scene is for and how that shaped your choices (a modern teenage audience might connect with a contemporary setting).\n- **Intended effect**: how you wanted the audience to think or feel at key moments.\n- **Links to the original text**: quotations you echoed, events you stayed faithful to, themes you developed.\n- **Terminology**: precise dramatic and literary terms (subtext, dramatic irony, soliloquy, proxemics, cliffhanger, juxtaposition).\n\nWrite in the **first person** (*I chose... in order to...*). **Quote your own script** as evidence, just as you would quote Shakespeare in an essay. Use tentative, precise language about effects (*I intended the audience to feel...*, *this should create...*).\n\nA good structure:\n\n- **Introduction**: the task, the form, where your scene fits in the original, your purpose and audience.\n- **Two to four analytical paragraphs**, each on one key choice: Choice → Quote from your script → Technique named → Effect intended → Link to Shakespeare.\n- **Brief evaluation**: what worked, and what you would develop with more time.\n\nThe biggest mistake is **retelling the plot of your own scene**. The marker has just read it; they want to know *why*.",
      diagram: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A five-rung ladder for a commentary paragraph: Choice, Quote, Term, Effect, Link"><rect x="60" y="10" width="200" height="34" rx="6" fill="#ede9fe" stroke="#7c3aed"/><text x="160" y="31" font-size="12" text-anchor="middle" fill="#4c1d95">C: the Choice you made</text><rect x="60" y="50" width="200" height="34" rx="6" fill="#e0e7ff" stroke="#4f46e5"/><text x="160" y="71" font-size="12" text-anchor="middle" fill="#312e81">Q: Quote your own script</text><rect x="60" y="90" width="200" height="34" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="160" y="111" font-size="12" text-anchor="middle" fill="#1e3a8a">T: name the Technique</text><rect x="60" y="130" width="200" height="34" rx="6" fill="#cffafe" stroke="#0891b2"/><text x="160" y="151" font-size="12" text-anchor="middle" fill="#164e63">E: the Effect on the audience</text><rect x="60" y="170" width="200" height="34" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="160" y="191" font-size="12" text-anchor="middle" fill="#14532d">L: Link to Shakespeare</text></svg>`,
      diagramCaption: "Climb the CQTEL ladder for every commentary paragraph.",
      keyPoints: [
        "Explain why, not what: never retell your own plot.",
        "Cover purpose, audience, intended effect and links to the original.",
        "Quote your own script and name techniques precisely.",
        "Write in the first person and end with a brief evaluation.",
      ],
      thinkDeeper:
        "Is a commentary more convincing if you admit a weakness in your script? How could a short, honest evaluation actually raise your mark?",
    },
  ],

  passages: [SATURDAY_SHIFT, NURSE_SCENE, CALIBAN_SPEECH, OPHELIA_REMEMBRANCES],

  quoteBank: [
    {
      quote: "Exit, pursued by a bear.",
      source: "Stage direction, The Winter's Tale, Act 3 Scene 3",
      analysis:
        "Shakespeare's most famous stage direction is just five words long, in the present tense, and describes only what the audience will see. It proves that a direction does not need adjectives or feelings to be unforgettable: the action speaks for itself.",
      themes: ["stage directions", "brevity"],
    },
    {
      quote: "Suit the action to the word, the word to the action",
      source: "Hamlet, advising the Players, Act 3 Scene 2",
      analysis:
        "Hamlet tells the actors that movement and speech must match. It is perfect advice for scriptwriters too: every stage direction should fit the dialogue around it, and every line should be something an actor can physically play.",
      themes: ["acting", "stagecraft"],
    },
    {
      quote: "to hold, as 'twere, the mirror up to nature",
      source: "Hamlet, advising the Players, Act 3 Scene 2",
      analysis:
        "Hamlet argues that the purpose of drama is to reflect real life back at the audience. The metaphor of the mirror is a useful test for dialogue: does it sound like real people, sharpened and shaped?",
      themes: ["purpose of drama", "realism"],
    },
    {
      quote: "All the world's a stage, / And all the men and women merely players",
      source: "Jaques, As You Like It, Act 2 Scene 7",
      analysis:
        "An extended metaphor comparing life to a play, with 'exits' and 'entrances' for birth and death. It reminds a writer that every character, however minor, has their own story and 'part', which is the starting point for any change-of-viewpoint adaptation.",
      themes: ["theatre", "perspective"],
    },
    {
      quote: "A little more than kin, and less than kind.",
      source: "Hamlet, Act 1 Scene 2 (usually played as an aside)",
      analysis:
        "Hamlet's first line is a bitter pun: Claudius is now more than a relative (uncle and stepfather) but not 'kind' (loving or natural). As an aside, the court cannot hear it, so the audience instantly becomes Hamlet's confidant. Dramatic irony from the very first line.",
      themes: ["aside", "dramatic irony"],
    },
    {
      quote: "Ha, ha! are you honest? / My lord? / Are you fair? / What means your lordship?",
      source: "Hamlet and Ophelia, Hamlet, Act 3 Scene 1",
      analysis:
        "Stichomythia: Hamlet's short, aggressive questions and Ophelia's confused replies speed up the pace and show the power shifting to Hamlet. Because the King and Polonius are secretly listening, the audience feels the tension of a private moment that is not private at all.",
      themes: ["stichomythia", "power", "pace"],
    },
    {
      quote: "Amen! / What?",
      source: "Juliet and the Nurse, Romeo and Juliet, Act 3 Scene 5",
      analysis:
        "A one-word reply full of subtext. The Nurse has just said she speaks from her soul, 'Or else beshrew them both' (curse them both); Juliet's 'Amen!' secretly agrees with the curse. The Nurse's puzzled 'What?' shows the gap between what Juliet says and what she means, which the audience can see but the Nurse cannot.",
      themes: ["subtext", "dramatic irony", "betrayal"],
    },
    {
      quote: "Ancient damnation! O most wicked fiend!",
      source: "Juliet, soliloquy after the Nurse exits, Romeo and Juliet, Act 3 Scene 5",
      analysis:
        "The moment the Nurse leaves, Juliet's polite mask drops. The exclamations and the insult 'fiend' reveal the fury hidden by her calm 'thou hast comforted me marvellous much'. It shows why a soliloquy is so powerful: it gives the audience the truth behind the subtext.",
      themes: ["soliloquy", "betrayal", "independence"],
    },
    {
      quote: "If all else fail, myself have power to die.",
      source: "Juliet, final line of Act 3 Scene 5, Romeo and Juliet",
      analysis:
        "A chilling scene-ending line that works like a cliffhanger: it leaves the audience fearing what Juliet will do. The monosyllables and the final word 'die' give it a heavy, decisive close, and the line foreshadows the tragedy we were promised in the Prologue.",
      themes: ["cliffhanger", "fate", "foreshadowing"],
    },
    {
      quote: "This island's mine, by Sycorax my mother, / Which thou tak'st from me.",
      source: "Caliban to Prospero, The Tempest, Act 1 Scene 2",
      analysis:
        "A blunt, possessive declaration: the short contraction 'island's mine' and the accusation 'thou tak'st' frame Prospero as a thief. This is the line most 'Caliban's version' adaptations echo, because it puts the conflict over ownership and power at the centre.",
      themes: ["power", "colonialism", "conflict"],
    },
    {
      quote: "You taught me language; and my profit on't / Is, I know how to curse.",
      source: "Caliban to Miranda and Prospero, The Tempest, Act 1 Scene 2",
      analysis:
        "Caliban turns the gift of language back on his teachers: the only 'profit' he gained is the ability to curse them. A writer adapting Caliban's story could use this as the key to his voice: proud, bitter and sharply intelligent, not just monstrous.",
      themes: ["language", "power", "resistance"],
    },
    {
      quote: "O brave new world, / That has such people in't! / 'Tis new to thee.",
      source: "Miranda and Prospero, The Tempest, Act 5 Scene 1",
      analysis:
        "Miranda's wonder at seeing the shipwrecked lords is answered by Prospero's dry four-word reply. The subtext: he knows these men include those who betrayed him. A perfect example of how a short, flat reply can undercut a long, excited line.",
      themes: ["subtext", "innocence", "experience"],
    },
    {
      quote: "Wilt thou be gone? it is not yet near day",
      source: "Juliet to Romeo, Romeo and Juliet, Act 3 Scene 5",
      analysis:
        "An embedded stage direction: the line tells the actors (and the daylight audience at the Globe) that it is just before dawn and that Romeo is about to leave. Shakespeare builds the setting and the action into the dialogue instead of writing separate directions.",
      themes: ["embedded stage directions", "time"],
    },
    {
      quote: "The play's the thing / Wherein I'll catch the conscience of the king.",
      source: "Hamlet, end of his soliloquy, Act 2 Scene 2",
      analysis:
        "A rhyming couplet that ends the scene with a plan and a promise of action: a cliffhanger. It also shows Hamlet's belief that drama can expose the truth, which is exactly what a script with strong subtext and dramatic irony does to its audience.",
      themes: ["cliffhanger", "purpose of drama"],
    },
  ],

  modelWriting: [
    {
      title: "Model missing scene: Juliet and the Nurse, the evening of the potion",
      task: "Write a missing scene from Romeo and Juliet that takes place between Act 4 Scene 1 and Act 4 Scene 2, when Juliet returns from Friar Laurence's cell with the sleeping potion.",
      text:
        "A passage outside Juliet's chamber. Late afternoon. Wedding finery is heaped on a chest: a pale dress, ribbons, a veil.\n\n(JULIET enters quickly, one hand pressed flat against her sleeve. The NURSE bustles in behind her with a basket of flowers.)\n\nNURSE: There you are! Your father has been roaring like a bear with a sore head. Where have you been all this while?\nJULIET: At confession.\nNURSE: Confession! Three hours! What sins can a girl your age have that take three hours?\nJULIET: (quietly) More than you would think.\nNURSE: (holding up the veil) Now. The County sent this himself. Feel it. Like a cloud. Didn't I say he was a lovely gentleman?\nJULIET: You did. You said it very well.\n(The NURSE does not hear the edge in it. She drapes the veil over JULIET's head.)\nNURSE: There. A bride. Your mother will weep.\nJULIET: (very still beneath the veil) Yes. I think she will.\n(The NURSE reaches to straighten JULIET's sleeve. JULIET steps back sharply.)\nNURSE: What? What is it?\nJULIET: Nothing. A bruise. I knelt too long.\n(Beat. The NURSE studies her. For a moment she almost asks. Then she picks up the flowers instead.)\nNURSE: Rosemary, for the wedding. It keeps.\nJULIET: (lifting the veil, looking out) Leave me tonight, Nurse. I'll sleep alone.\nNURSE: Alone? The night before your wedding?\nJULIET: The night before my wedding.\n(Exit NURSE. JULIET draws a small glass vial from her sleeve and holds it up to the light.)\nJULIET: My husband is on earth. My faith in heaven. And this... this is the bridge between.\n(Blackout.)",
      annotations: [
        "Arrives late: the scene opens at the moment Juliet returns, already hiding something (the hand on her sleeve).",
        "Dramatic irony: the audience knows about the vial, so 'Your mother will weep' and 'The night before my wedding' carry a second, darker meaning.",
        "Subtext and an echo of the original: 'You did. You said it very well' recalls the Nurse's praise of Paris in Act 3 Scene 5, quietly sarcastic like Juliet's 'Amen!'.",
        "Proxemics: Juliet stepping back from the Nurse's touch shows their broken trust without a word of explanation.",
        "Consistent with the play: the Nurse never learns of the potion, and 'Leave me tonight' echoes Juliet's request in Act 4 Scene 3.",
        "Leaves early: a short soliloquy echoing 'My husband is on earth, my faith in heaven' (3.5), then a blackout as a cliffhanger.",
      ],
    },
    {
      title: "Model commentary on the missing scene",
      task: "Write a commentary explaining the choices you made in your missing scene and how it links to Shakespeare's play.",
      text:
        "My missing scene takes place between Act 4 Scenes 1 and 2 of Romeo and Juliet, when Juliet returns from Friar Laurence's cell carrying the sleeping potion. Shakespeare never shows Juliet and the Nurse alone together at this moment, yet it is the point at which their relationship has silently broken: since her soliloquy 'Ancient damnation!' in Act 3 Scene 5, Juliet no longer trusts her. My purpose was to dramatise that break through subtext rather than an open argument, for a modern audience who already know how the play ends.\n\nMy central technique is dramatic irony. Because the audience has just watched the Friar give Juliet the vial, every innocent line from the Nurse becomes painful. When she says 'Your mother will weep', she means tears of joy; the audience knows they will be tears of grief. I placed Juliet 'very still beneath the veil' so that the wedding veil visually becomes a shroud, foreshadowing Act 4 Scene 5, where the family find her apparently dead.\n\nI also wanted Juliet's language to carry an edge the Nurse cannot hear. Her reply, 'You did. You said it very well,' echoes the Nurse's 'O, he's a lovely gentleman!' and is quietly sarcastic, just as Juliet's 'Amen!' was in the original. The stage direction 'The NURSE does not hear the edge in it' guides the actor without explaining the line to the audience.\n\nStagecraft supports the conflict. The proxemics change when Juliet 'steps back sharply' from the Nurse's touch: the woman who nursed her as a baby is now physically shut out. The rosemary is a deliberate prop, because in Shakespeare's time rosemary was used at both weddings and funerals, and Friar Laurence later tells the family to 'stick your rosemary' on Juliet's body.\n\nFinally, I ended with a short soliloquy and a blackout so that the scene closes on a cliffhanger. If I redrafted, I would cut one of the Nurse's opening lines to make the start even quicker.",
      annotations: [
        "Introduction states where the scene fits, its purpose and its audience in three sentences.",
        "Each paragraph follows Choice → Quote → Technique → Effect → Link (CQTEL).",
        "Quotes both the student's own script and Shakespeare's original.",
        "Uses precise terminology: subtext, dramatic irony, foreshadowing, proxemics, prop, soliloquy, cliffhanger.",
        "Never retells the plot; every sentence explains a choice.",
        "Ends with a brief, honest evaluation, which shows critical awareness.",
      ],
    },
    {
      title: "Model change-of-viewpoint monologue: Caliban's version",
      task: "Write a short modern adaptation of The Tempest that tells the story from Caliban's point of view.",
      text:
        "A beach at dusk. Upstage, the glowing windows of a luxury villa. Music drifts from inside. Downstage, CALIBAN, 17, in a crisp staff uniform, rakes the sand.\n\nCALIBAN: (to the audience) See that tree? The big one, by the pool. My mother planted it.\n(He rakes.)\nNow there's a sign on it. 'Guests only.'\n(He stops. Lowers the rake slowly to the sand.)\nWhen he came, he was kind. He gave me sweets. He taught me the names of the stars: the big light, the little light. And I showed him everything. Where the fresh water bubbles up. Which rocks are safe. Which fish you can eat.\n(Beat.)\nI showed him everything. That was my mistake.\n(A bell rings sharply from the villa.)\nPROSPERO: (off, through a speaker, pleasantly) Caliban. The sand by the pool, please. Guests are arriving.\n(CALIBAN does not move. The bell rings again. Slowly, he picks up the rake.)\nCALIBAN: (to the audience, very quietly) This island's mine.\n(He turns upstage and walks towards the light.)",
      annotations: [
        "Modernises the setting (a luxury resort) while keeping the dramatic core: land taken, kindness turned to control.",
        "Echoes the original closely: 'the big light, the little light' adapts 'the bigger light, and how the less'; 'the fresh water' recalls 'the fresh springs'.",
        "Addressing the audience directly makes them Caliban's confidants and builds sympathy, reversing the original where Prospero controls the story.",
        "Prospero is heard but never seen: his power is everywhere, polite and impersonal.",
        "Levels and blocking: Caliban is downstage and low with a rake; the villa glows upstage; walking 'towards the light' leaves the ending ambiguous: obedience or a coming rebellion?",
        "Saves the most famous original line, 'This island's mine', for the final moment so it lands with full force.",
      ],
    },
    {
      title: "Before and after: turning story-writing into a script",
      task: "Rewrite a novel-style passage as a script, removing narration and using subtext.",
      text:
        "BEFORE (novel-style, loses marks):\nTom walked into the kitchen feeling nervous because he had broken his mum's favourite vase earlier that day. \"Hi Mum,\" he said nervously. Mum was cooking. She was annoyed because she had found the pieces. \"Is there something you want to tell me?\" she asked angrily.\n\nAFTER (a script):\nSCENE 3. The kitchen. Evening. Steam rises from a pan.\n(MUM stirs. On the table behind her: a sandwich bag full of blue china pieces.)\n(TOM enters. Sees the bag. Stops.)\nTOM: Smells good.\nMUM: (not turning round) Does it.\nTOM: Is that... lasagne?\nMUM: Sit down, Tom.\n(He doesn't.)\nTOM: I was going to tell you.\nMUM: (turning, at last) Tell me what?",
      annotations: [
        "Speech marks, 'he said' and the narrator are gone; names are in capitals in the margin.",
        "Invisible feelings ('nervous', 'annoyed') become things we can see: the bag of broken china, Tom stopping dead.",
        "Subtext: Tom talks about food to avoid the subject; Mum's flat 'Does it.' (a full stop, not a question mark) shows she is not fooled.",
        "Minimal parentheticals: only where the tone or action could not be guessed.",
        "The final question flips the power: Tom has confessed before being accused, and the scene ends on a hook.",
      ],
    },
  ],

  mnemonics: [
    {
      topic: "Script layout conventions",
      device: "SCRIPT",
      explanation:
        "Scene heading (place and time) · Capitals for character names · Remove speech marks and 'he said' · Italics or brackets for stage directions · Present tense for directions · Tell nothing: show it through action and dialogue.",
    },
    {
      topic: "Building a commentary paragraph",
      device: "CQTEL: 'Can Quiet Teens Explain Lines?'",
      explanation:
        "Choice (what you decided) · Quote (from your own script) · Term (name the technique) · Effect (on the audience) · Link (to Shakespeare's original).",
    },
    {
      topic: "The elements of stagecraft",
      device: "Some People Can't Leave Sound Behind",
      explanation:
        "Set · Props · Costume · Lighting · Sound · Blocking. Then add the two ways of using space: proxemics (distance) and levels (height).",
    },
    {
      topic: "Testing a stage direction",
      device: "See it? Hear it? Or cut it.",
      explanation:
        "If the audience cannot see it or hear it, it is narration, not a stage direction. Turn thoughts and backstory into dialogue or visible action, or delete them.",
    },
  ],

  examMistakes: [
    "Writing novel-style narration in a script, such as 'She walks in, thinking about how unfair her life is'. Thoughts cannot be staged.",
    "Using speech marks and reporting clauses ('\"Leave me,\" she said') instead of script layout.",
    "Writing stage directions in the past tense ('He walked to the door') or making them so long they read like a story.",
    "Putting a parenthetical such as (angrily) or (sadly) before almost every line, instead of letting strong dialogue carry the tone.",
    "Making every character sound the same, so the Nurse, Juliet and Lord Capulet all speak in identical modern sentences.",
    "Exposition dumps: characters telling each other what they both already know just to inform the audience.",
    "Breaking consistency with the original in an adaptation, e.g. the Nurse knowing about the potion, or Ophelia talking to Polonius after he has died.",
    "Writing a commentary that retells the plot of your own scene instead of explaining why you made each choice, with no terminology and no link to Shakespeare.",
  ],

  misconceptions: [
    {
      wrong: "A script is just a story with the speech set out differently.",
      right:
        "A script has no narrator. Everything must be revealed through dialogue and visible or audible action, so writers must turn thoughts into speech, action or silence.",
    },
    {
      wrong: "The more stage directions you write, the better your script.",
      right:
        "Over-directing makes a script slow to read and leaves actors no room. Strong scripts use a few precise directions and let the dialogue carry the meaning.",
    },
    {
      wrong: "Stage left means the left side of the stage as the audience sees it.",
      right: "Stage left is the actor's left when facing the audience, so it is on the audience's right.",
    },
    {
      wrong: "A soliloquy is any long speech.",
      right:
        "A long speech is a monologue. A soliloquy is spoken by a character alone on stage (or believing themselves alone), revealing their private thoughts to the audience.",
    },
    {
      wrong: "Good characters always say exactly what they feel, so the audience understands.",
      right:
        "Real people hide their feelings. Subtext (meaning beneath the words) is more realistic and more gripping, because the audience works out the truth for themselves.",
    },
    {
      wrong: "In an adaptation you can change anything you like.",
      right:
        "You can change the setting, language and viewpoint, but strong adaptations keep the dramatic core and stay consistent with the original's events, so the reader recognises and rethinks the source.",
    },
  ],

  expertDebates: [
    {
      question: "Should modern adaptations keep Shakespeare's language?",
      detail:
        "Baz Luhrmann's Romeo + Juliet keeps the original words in a modern world, arguing that the poetry is the point. West Side Story replaces every word, arguing that the story and emotions are what matter. Some say keeping the language preserves Shakespeare's genius; others say modern language lets new audiences feel the drama directly. Many of the best school adaptations blend the two, saving one original line for maximum impact.",
    },
    {
      question: "How much should a playwright control the performance through stage directions?",
      detail:
        "George Bernard Shaw wrote pages of detailed directions describing characters and rooms; Samuel Beckett insisted that his directions, including exact pauses, be followed precisely. Shakespeare left almost everything to the actors. Detailed directions protect the writer's vision; sparse ones give directors freedom to reinterpret a play for new times, which may be one reason Shakespeare is still performed in so many different ways.",
    },
    {
      question: "Is a 'change of viewpoint' adaptation a correction of Shakespeare or a distortion?",
      detail:
        "Retellings such as Aimé Césaire's A Tempest present Caliban as a colonised man resisting an invader, and many modern productions give Ophelia far more agency. Supporters argue these versions uncover voices the original silences; critics argue they impose modern values on a play from 1611. A strong commentary can acknowledge both: an adaptation can question the original while staying faithful to its events.",
    },
  ],

  realWorld: [
    {
      title: "Television and film",
      detail:
        "Every TV drama, soap and film begins as a script. Screenwriters use the same tools you are learning: scene headings, subtext, cliffhangers at the end of every episode. A common rule of thumb is that one page of screenplay equals about one minute of screen time.",
      emoji: "📺",
    },
    {
      title: "Shakespeare reborn",
      detail:
        "West Side Story, the film 10 Things I Hate About You (from The Taming of the Shrew) and Disney's The Lion King (which borrows Hamlet's story of a murdered king and a wicked uncle) all show how adaptations keep Shakespeare's plots alive for new audiences.",
      emoji: "🦁",
    },
    {
      title: "Video games",
      detail:
        "Game writers script cutscenes and branching dialogue, giving every character a distinct voice so players can recognise them instantly. Many famous games employ teams of writers just to write dialogue.",
      emoji: "🎮",
    },
    {
      title: "Radio drama and podcasts",
      detail:
        "With no visuals at all, audio scripts rely entirely on dialogue and sound effects, which is the ultimate test of 'show it through what we can hear'.",
      emoji: "🎧",
    },
    {
      title: "Adverts and short films",
      detail:
        "A 30-second advert is a tiny script with a set-up, a turning point and a punchline. Writers cut every unnecessary word, exactly as you should in a timed exam.",
      emoji: "🎞️",
    },
    {
      title: "Explaining your choices at work",
      detail:
        "Designers, architects and engineers all write rationales explaining why they made their decisions, for clients and teams. Writing a commentary is early practice for justifying creative choices with evidence.",
      emoji: "🗂️",
    },
  ],

  flashcards: [
    { front: "Subtext", back: "The meaning beneath the words: what a character really thinks or feels but does not say aloud." },
    { front: "Dramatic irony", back: "When the audience knows something a character does not, creating tension, sympathy or dark humour." },
    { front: "Soliloquy", back: "A speech by a character alone on stage, revealing private thoughts to the audience. E.g. Juliet's 'Ancient damnation!' after the Nurse exits (R&J 3.5)." },
    { front: "Aside", back: "A brief remark to the audience (or one character) that others on stage do not hear. E.g. Hamlet's 'A little more than kin, and less than kind' (1.2)." },
    { front: "Monologue", back: "A long, uninterrupted speech by one character, which may be addressed to other characters or to the audience." },
    { front: "Stichomythia", back: "Rapid dialogue in alternating single lines or half-lines, used for conflict, tension or wit. E.g. Hamlet and Ophelia: 'are you honest?' / 'My lord?'" },
    { front: "Exeunt", back: "Latin for 'they go out': the stage direction when two or more characters leave the stage." },
    { front: "Parenthetical", back: "A short bracketed direction before a line telling the actor how to deliver it, e.g. (whispering). Use sparingly." },
    { front: "Proxemics", back: "The use of distance between characters on stage to show their relationship (closeness, threat, rejection)." },
    { front: "Blocking", back: "The planned positions and movements of actors on stage." },
    { front: "Levels", back: "The use of height on stage; a character placed higher usually has more power or status." },
    { front: "Downstage / upstage", back: "Downstage = nearest the audience. Upstage = furthest from the audience." },
    { front: "Stage left", back: "The actor's left when facing the audience, which is the audience's right." },
    { front: "Embedded stage direction", back: "A direction built into the dialogue itself, e.g. Juliet's 'it is not yet near day' tells us it is just before dawn." },
    { front: "Cliffhanger", back: "A scene ending on an unresolved moment of tension or a question, making the audience desperate to know what happens next." },
    { front: "Commentary", back: "A reflective analytical piece explaining the purpose, audience, intended effects and links to the original behind your creative choices." },
  ],

  mustKnow: [
    "Can you lay out a script correctly: scene heading, names in capitals, no speech marks, present-tense directions in italics or brackets?",
    "Can you turn a character's thoughts into something an audience can see or hear?",
    "Can you give two characters clearly different voices through vocabulary, sentence length and habits?",
    "Can you define and use subtext, dramatic irony, soliloquy, aside, monologue and stichomythia?",
    "Can you control pace with short lines, interruptions, pauses and silences, and end a scene on a cliffhanger?",
    "Can you use set, props, costume, lighting, sound, blocking, proxemics and levels to create meaning?",
    "Can you name the stage areas correctly (upstage, downstage, stage left, stage right)?",
    "Can you modernise a Shakespeare scene, write a missing scene or retell events from another character's viewpoint while staying consistent with the original?",
    "Can you write a commentary that explains purpose, audience and intended effect, quotes your own script, uses terminology and links to Shakespeare?",
  ],

  videos: [
    {
      title: "How to write a playscript",
      channel: "BBC Bitesize",
      url: "https://www.youtube.com/results?search_query=bbc+bitesize+how+to+write+a+playscript",
    },
    {
      title: "Dramatic devices: soliloquy, aside and dramatic irony",
      channel: "Mr Bruff",
      url: "https://www.youtube.com/results?search_query=mr+bruff+dramatic+irony+soliloquy+aside",
    },
    {
      title: "Stage directions and stage positions explained",
      channel: "National Theatre",
      url: "https://www.youtube.com/results?search_query=national+theatre+stage+positions+upstage+downstage+blocking",
    },
    {
      title: "Romeo and Juliet Act 3 Scene 5 in performance",
      channel: "Shakespeare's Globe",
      url: "https://www.youtube.com/results?search_query=shakespeare%27s+globe+romeo+and+juliet+act+3+scene+5",
    },
  ],

  quiz: {
    mcq: [
      {
        id: "scr-quiz-mcq-1",
        question: "Which of these is set out correctly as a line of script?",
        options: [
          "MIA: \"I'm not going.\"",
          "MIA: (slamming the door) I'm not going.",
          "\"I'm not going,\" Mia shouted, slamming the door.",
          "Mia: I'm not going, she said angrily.",
        ],
        answerIndex: 1,
        hint: "Look for the version with no speech marks and no 'she said'.",
        explanation:
          "The option ‘MIA: (slamming the door) I'm not going.’ has the name in capitals, a short present-tense direction in brackets and the dialogue with no speech marks. The option ‘MIA: \"I'm not going.\"’ is tempting because the name is in capitals, but scripts never put dialogue in speech marks.",
        guideRef: "script-conventions",
      },
      {
        id: "scr-quiz-mcq-2",
        question: "Juliet is left alone on stage and speaks her true feelings about the Nurse to the audience. This is called…",
        options: ["an aside", "stichomythia", "a soliloquy", "a prologue"],
        answerIndex: 2,
        hint: "Which speech form needs the character to be alone?",
        explanation:
          "A soliloquy is spoken by a character alone on stage, revealing private thoughts. An aside is tempting, but an aside is a brief remark made while other characters are present and do not hear it.",
        guideRef: "speech-forms",
      },
      {
        id: "scr-quiz-mcq-3",
        question: "Which stage direction could an actor actually perform?",
        options: [
          "(She feels guilty about what she said last summer.)",
          "(He has always been jealous of his brother.)",
          "(She wonders whether anyone will ever understand her.)",
          "(She folds the letter very small and hides it in her shoe.)",
        ],
        answerIndex: 3,
        hint: "Apply the test: can the audience see it or hear it?",
        explanation:
          "Folding and hiding a letter is visible action. Feelings of guilt, lifelong jealousy and private wondering are thoughts or backstory, which an audience cannot see; the option ‘(She feels guilty about what she said last summer.)’ is tempting because guilt matters, but it must be shown through action or dialogue.",
        guideRef: "stage-directions",
      },
      {
        id: "scr-quiz-mcq-4",
        question: "Which is the strongest sentence for a commentary on your own script?",
        options: [
          "I used dramatic irony in 'Your mother will weep': the audience knows the tears will be of grief, not joy, which foreshadows the family's mourning in Act 4 Scene 5.",
          "In my scene, Juliet comes home, hides the potion, talks to the Nurse and then the Nurse leaves.",
          "My scene is very good because it has lots of drama and emotion in it.",
          "I used a lot of techniques such as dramatic irony, subtext and proxemics.",
        ],
        answerIndex: 0,
        hint: "Look for the sentence that names a technique, quotes, explains an effect and links to Shakespeare.",
        explanation:
          "The option ‘I used dramatic irony in 'Your mother will weep': the audience…’ follows Choice, Quote, Technique, Effect, Link. The option ‘I used a lot of techniques such as dramatic irony, subtext and…’ is tempting because it names techniques, but it lists them without evidence or effect; the option ‘In my scene, Juliet comes home, hides the potion, talks to the…’ only retells the plot.",
        guideRef: "writing-commentary",
      },
    ],
    qa: [
      {
        id: "scr-quiz-qa-1",
        extract:
          "Leah stormed into the classroom, feeling embarrassed because everyone had seen her fall over at lunch. \"Stop staring,\" she said crossly to Raj, who was trying not to laugh.",
        question: "Rewrite this extract as a short piece of script. Then explain one change you made. (3 marks)",
        marks: 3,
        hint: "Remove the narrator: names in capitals, no speech marks, present-tense directions, and turn the hidden feeling into something visible.",
        modelAnswer:
          "(LEAH storms in. RAJ is biting his lip, shoulders shaking.)\nLEAH: Stop staring.\nRAJ: (straight-faced) I'm not.\n\nI removed the speech marks and the narrator, and set LEAH's name in capitals in the margin. I turned her invisible feeling of embarrassment into the line 'Stop staring' and Raj's visible struggle not to laugh, written as a present-tense stage direction, because an audience cannot see a thought.",
        markScheme: [
          {
            point: "Uses script layout: name in capitals/margin, no speech marks or 'she said'",
            keywords: ["leah:", "raj:", "no speech marks", "capitals", "margin", "removed the speech marks"],
          },
          {
            point: "Writes a stage direction in the present tense",
            keywords: ["storms in", "enters", "storms", "(she", "biting", "present tense"],
          },
          {
            point: "Turns the hidden feeling into visible action or dialogue, and explains why",
            keywords: ["cannot see", "can't see", "visible", "thought", "embarrass", "turned", "into action"],
          },
        ],
        commonError:
          "Keeping 'feeling embarrassed' as a stage direction: an audience cannot see a feeling unless it is turned into action or dialogue.",
        guideRef: "stage-directions",
      },
      {
        id: "scr-quiz-qa-2",
        extract:
          "NURSE: And from my soul too;\nOr else beshrew them both.\nJULIET: Amen!\nNURSE: What?\n(Romeo and Juliet, Act 3 Scene 5)",
        question:
          "The Nurse has just advised Juliet to forget Romeo and marry Paris. 'Beshrew them both' means 'curse them both'. Explain how Shakespeare uses dramatic irony and subtext in this exchange. (4 marks)",
        marks: 4,
        hint: "What does the Nurse think 'Amen!' means? What does Juliet really mean? Who understands the truth?",
        modelAnswer:
          "Shakespeare uses subtext in Juliet's one-word reply 'Amen!'. On the surface it sounds like agreement with the Nurse's advice, but underneath Juliet is agreeing with the curse: she wishes the Nurse's heart and soul cursed for betraying Romeo. This creates dramatic irony, because the audience understands Juliet's real meaning while the Nurse does not, as her baffled 'What?' shows. The effect is tense and bitter: the audience watches the close bond between Juliet and the Nurse break, and senses that Juliet is now alone, which prepares for her soliloquy 'Ancient damnation!' once the Nurse leaves.",
        markScheme: [
          {
            point: "Identifies the subtext: 'Amen' secretly agrees with the curse / Juliet means the opposite of agreement",
            keywords: ["curse", "beshrew", "secretly", "really means", "underneath", "subtext", "double meaning"],
          },
          {
            point: "Explains dramatic irony: the audience understands but the Nurse does not",
            keywords: ["dramatic irony", "audience knows", "audience understands", "nurse does not", "doesn't realise", "unaware"],
          },
          {
            point: "Uses the Nurse's 'What?' as evidence of her confusion",
            keywords: ["what?", "confused", "puzzled", "baffled", "doesn't understand", "misunderstands"],
          },
          {
            point: "Explains the effect: the broken bond / Juliet now alone / tension",
            keywords: ["betray", "alone", "isolated", "trust", "relationship", "tension", "bond"],
          },
        ],
        commonError:
          "Saying Juliet simply agrees with the Nurse. The whole point is that she does not, and the audience can tell.",
        guideRef: "dramatic-devices",
      },
      {
        id: "scr-quiz-qa-3",
        question:
          "You are staging Ophelia's soliloquy in a missing scene from Hamlet. Write one stage direction that uses lighting and one that uses blocking or proxemics, and explain the intended effect of each. (4 marks)",
        marks: 4,
        hint: "Think spotlight, fade or blackout; then think where Ophelia stands and how close she is to anything or anyone.",
        modelAnswer:
          "Lighting: (The stage darkens until a single cold spotlight picks out OPHELIA.) The spotlight isolates her, showing how alone she is in a court full of spies, and focuses the audience on her private thoughts.\n\nBlocking: (She walks slowly downstage centre, to the exact spot where she stood when Hamlet rejected her, and faces the audience.) Moving downstage brings her closer to the audience, making the soliloquy feel intimate and honest, and returning to the same spot suggests she is trapped by that memory.",
        markScheme: [
          {
            point: "Writes a lighting stage direction",
            keywords: ["spotlight", "light", "lights", "fade", "blackout", "dim", "darken"],
          },
          {
            point: "Explains the lighting effect (isolation, focus, mood)",
            keywords: ["isolat", "alone", "focus", "loneliness", "mood", "atmosphere", "attention"],
          },
          {
            point: "Writes a blocking/proxemics stage direction",
            keywords: ["downstage", "upstage", "walks", "moves", "steps", "crosses", "centre", "distance"],
          },
          {
            point: "Explains the blocking effect (intimacy with audience, distance, entrapment)",
            keywords: ["closer to the audience", "intimate", "connect", "trapped", "distance", "honest", "direct"],
          },
        ],
        commonError:
          "Writing the direction but not explaining the effect, or writing a direction about her feelings ('she feels lonely') rather than something the audience can see.",
        guideRef: "stagecraft",
      },
      {
        id: "scr-quiz-qa-4",
        question:
          "Write one commentary paragraph explaining a choice you could make in a 'Caliban's version' adaptation of The Tempest. Use the CQTEL structure. (5 marks)",
        marks: 5,
        hint: "Choice, Quote (invent a line from 'your' script), Term, Effect on the audience, Link to Shakespeare's Caliban.",
        modelAnswer:
          "I chose to have Caliban speak directly to the audience rather than to Prospero. For example, my scene opens with Caliban saying, 'See that tree? My mother planted it.' This direct address works like a soliloquy, giving Caliban an uninterrupted voice that he never has in the original, where Prospero dominates their scenes. I intended the audience to feel like his confidants, so that they sympathise with him before they hear Prospero call him a slave. This links to Shakespeare's 'This island's mine, by Sycorax my mother', which I echoed through the tree his mother planted, to remind the audience that the island was Caliban's inheritance before Prospero took it.",
        markScheme: [
          {
            point: "States a clear choice (Choice)",
            keywords: ["i chose", "i decided", "i wanted", "i made", "my choice", "i used"],
          },
          {
            point: "Quotes from own script (Quote)",
            keywords: ["for example", "such as", "says", "saying", "my line", "the line", "opens with", "my script"],
          },
          {
            point: "Names a dramatic technique (Term)",
            keywords: ["soliloquy", "direct address", "monologue", "dramatic irony", "subtext", "aside", "proxemics", "levels"],
          },
          {
            point: "Explains the intended effect on the audience (Effect)",
            keywords: ["audience", "sympath", "feel", "intended", "effect", "empathy"],
          },
          {
            point: "Links to Shakespeare's original Caliban (Link)",
            keywords: ["this island's mine", "sycorax", "shakespeare", "original", "prospero", "taught me language", "the tempest"],
          },
        ],
        commonError:
          "Describing what happens in the adaptation instead of explaining why the choice was made and how it relates to Shakespeare's text.",
        guideRef: "writing-commentary",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "scr-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "scr-mcq-p1-q01",
            question: "In a script, where and how are character names usually written?",
            options: [
              "In CAPITALS at the left margin, before the line they speak",
              "In speech marks after the line they speak",
              "In italics in the middle of the page",
              "Only in the character list at the start, never beside the lines",
            ],
            answerIndex: 0,
            hint: "The actor needs to find their own lines at a glance.",
            explanation:
              "Names go in capitals in the margin so actors can spot their lines quickly. The option ‘Only in the character list at the start, never beside the lines’ is tempting because a character list does appear at the start, but names must also appear beside every line of dialogue.",
            guideRef: "script-conventions",
          },
          {
            id: "scr-mcq-p1-q02",
            question: "Which of these should you NOT use when writing dialogue in a script?",
            options: ["A colon after the character's name", "A new line for each new speaker", "Speech marks around the words spoken", "Dashes to show an interruption"],
            answerIndex: 2,
            hint: "Which belongs to story-writing, not script-writing?",
            explanation:
              "Scripts do not use speech marks: the layout itself shows who is speaking. Dashes are tempting to rule out, but they are a useful way to show interruptions in script dialogue.",
            guideRef: "script-conventions",
          },
          {
            id: "scr-mcq-p1-q03",
            question: "In which tense should stage directions be written?",
            options: ["The past tense", "The present tense", "The future tense", "Any tense, as long as it is consistent"],
            answerIndex: 1,
            hint: "Stage directions describe what is happening in front of the audience right now.",
            explanation:
              "Stage directions use the present tense (She opens the door) because the action is happening now, live. 'Any tense, as long as it is consistent' sounds reasonable, but the past tense makes a script read like a novel.",
            guideRef: "script-conventions",
          },
          {
            id: "scr-mcq-p1-q04",
            question: "What does the stage direction 'Exeunt' mean?",
            options: ["One character leaves the stage", "The scene ends with a blackout", "Everyone freezes in position", "Two or more characters leave the stage"],
            answerIndex: 3,
            hint: "It is Latin for 'they go out'.",
            explanation:
              "'Exeunt' means 'they go out', used when several characters leave. 'Exit' (one character leaves) is the tempting distractor: it is the singular form.",
            guideRef: "script-conventions",
          },
          {
            id: "scr-mcq-p1-q05",
            question: "Which is the best scene heading?",
            options: [
              "Scene 2, where things get tense",
              "SCENE 2. Juliet is very upset because of what happened earlier.",
              "SCENE 2. The Capulets' kitchen. Late at night.",
              "SCENE 2. A kitchen which reminds Juliet of her happy childhood.",
            ],
            answerIndex: 2,
            hint: "A scene heading tells the production team where and when.",
            explanation:
              "A scene heading gives the place and time briefly. The option ‘SCENE 2. A kitchen which reminds Juliet of her happy childhood.’ is tempting because it describes a place, but 'reminds Juliet of her happy childhood' is a thought the audience cannot see.",
            guideRef: "script-conventions",
          },
          {
            id: "scr-mcq-p1-q06",
            extract:
              "(Ellie sits on the bench. She thinks about the day her dog died and wonders if she will ever be happy again.)",
            question: "What is the main problem with this stage direction?",
            options: [
              "It narrates thoughts the audience cannot see",
              "It should be written in the past tense",
              "It needs speech marks around it",
              "It is too short to be useful",
            ],
            answerIndex: 0,
            hint: "Apply the see-or-hear test.",
            explanation:
              "'Thinks' and 'wonders' are novel-style narration: invisible on stage. The past tense option is wrong because stage directions should be in the present tense, as this one already is.",
            guideRef: "stage-directions",
          },
          {
            id: "scr-mcq-p1-q07",
            extract: "JAY: (sarcastically) Oh, brilliant. Just brilliant.",
            question: "Why might a writer include the parenthetical '(sarcastically)' here?",
            options: [
              "Because every line in a script needs a parenthetical",
              "To show that Jay is thinking privately",
              "To tell the lighting team what to do",
              "Because the words alone could be read as genuine praise",
            ],
            answerIndex: 3,
            hint: "Parentheticals are best used when a line could be misread.",
            explanation:
              "Without the direction an actor might say 'brilliant' sincerely, so the parenthetical prevents a misreading. The option ‘Because every line in a script needs a parenthetical’ is tempting but wrong: putting a parenthetical before every line is a common error.",
            guideRef: "stage-directions",
          },
          {
            id: "scr-mcq-p1-q08",
            question: "On a stage, 'upstage' means…",
            options: ["nearest the audience", "furthest from the audience", "on the audience's left", "on a raised platform"],
            answerIndex: 1,
            hint: "Old stages sloped upwards away from the audience.",
            explanation:
              "Upstage is the back of the stage, furthest from the audience (historically stages were raked, sloping up away from the audience). 'Nearest the audience' is downstage, the opposite.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-mcq-p1-q09",
            question: "An actor is told to move 'stage left'. Which way does the actor go?",
            options: [
              "To the audience's left",
              "Towards the back of the stage",
              "To the actor's own left, while facing the audience",
              "Towards the audience",
            ],
            answerIndex: 2,
            hint: "Stage directions are given from the actor's point of view.",
            explanation:
              "Stage left is the actor's left when facing the audience, which is the audience's right. 'The audience's left' is the classic mistake.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-mcq-p1-q10",
            question: "What is an aside?",
            options: [
              "A short remark heard by the audience but not by the other characters on stage",
              "A long speech by a character alone on stage",
              "A stage direction written at the side of the page",
              "A conversation between two minor characters",
            ],
            answerIndex: 0,
            hint: "The other characters are present but 'cannot hear' it.",
            explanation:
              "An aside is a brief remark the other characters on stage do not hear, which makes the audience a confidant. A long speech by a character alone is a soliloquy, the tempting distractor.",
            guideRef: "speech-forms",
          },
          {
            id: "scr-mcq-p1-q11",
            question: "Which term describes rapid dialogue in which characters exchange single lines, often in an argument?",
            options: ["Monologue", "Soliloquy", "Exposition", "Stichomythia"],
            answerIndex: 3,
            hint: "It comes from Greek words meaning 'line' and 'speech'.",
            explanation:
              "Stichomythia is a fast exchange of single lines or half-lines. A monologue is the opposite: one character speaking at length.",
            guideRef: "speech-forms",
          },
          {
            id: "scr-mcq-p1-q12",
            extract: "MUM: How was the exam?\nZARA: Fine.\n(She goes straight upstairs. A door slams, off.)",
            question: "What does the extract suggest through subtext?",
            options: [
              "Zara is tired and wants to sleep",
              "The exam went badly and Zara is upset",
              "Zara is angry with her mother about something else",
              "The exam went well but Zara is modest",
            ],
            answerIndex: 1,
            hint: "Compare what she says with what she does straight after.",
            explanation:
              "'Fine' plus going straight upstairs and a slammed door suggests the opposite of fine: the exam went badly. The option ‘Zara is angry with her mother about something else’ is possible in theory, but the only thing mentioned is the exam, so the most supported reading is B.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-mcq-p1-q13",
            question: "Which situation creates dramatic irony?",
            options: [
              "The audience has seen a character hide poison in a cup; another character cheerfully picks it up",
              "A character tells a joke that the audience laughs at",
              "Two characters argue loudly in the street",
              "A character delivers a long speech about their childhood",
            ],
            answerIndex: 0,
            hint: "Dramatic irony depends on the audience knowing more than a character.",
            explanation:
              "The audience knows about the poison and the character does not: that knowledge gap is dramatic irony. An argument (the option ‘Two characters argue loudly in the street’) creates conflict, but not dramatic irony.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-mcq-p1-q14",
            question: "Which line best avoids an 'exposition dump'?",
            options: [
              "As you know, Mother, Romeo was banished yesterday for killing our cousin Tybalt.",
              "I will now explain to you that Romeo has been banished to Mantua.",
              "Don't you dare say that name in this house. Not after Tybalt.",
              "Romeo, who is a Montague, killed Tybalt, who is a Capulet, and so he is banished.",
            ],
            answerIndex: 2,
            hint: "Which line sounds like a real person in the middle of an emotion?",
            explanation:
              "The option ‘Don't you dare say that name in this house. Not after Tybalt.’ lets the information slip out through conflict and emotion. The option ‘As you know, Mother, Romeo was banished yesterday for killing our…’ is the classic exposition dump: 'As you know' tells a character what they already know purely to inform the audience.",
            guideRef: "dialogue-voice",
          },
          {
            id: "scr-mcq-p1-q15",
            question: "What does 'proxemics' mean in drama?",
            options: [
              "The height of actors on stage",
              "The speed at which lines are delivered",
              "The use of props to show status",
              "The use of distance between characters to show their relationship",
            ],
            answerIndex: 3,
            hint: "Think of the word 'proximity'.",
            explanation:
              "Proxemics is about distance and closeness between characters. Height on stage is a different tool, called levels.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-mcq-p1-q16",
            question: "A king stands on a raised platform while a servant kneels below him. What is this use of levels most likely to show?",
            options: ["That the servant is about to leave", "The difference in power or status", "That the scene is set outdoors", "That both characters are equally important"],
            answerIndex: 1,
            hint: "Height on stage often equals power.",
            explanation:
              "A character placed higher usually has more power or status, so the levels show the king's dominance. The option ‘That both characters are equally important’ is the opposite of what the picture suggests.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-mcq-p1-q17",
            question: "What is the main purpose of a commentary on your own script?",
            options: [
              "To summarise the plot of your scene",
              "To list every technique you know",
              "To explain and justify the choices you made and their intended effects",
              "To rewrite your scene as a story",
            ],
            answerIndex: 2,
            hint: "The marker has already read your scene. What do they still want to know?",
            explanation:
              "A commentary explains why you made your choices and how they affect an audience. Summarising the plot (the option ‘To summarise the plot of your scene’) is the most common mistake: the marker already knows what happens.",
            guideRef: "writing-commentary",
          },
          {
            id: "scr-mcq-p1-q18",
            question: "Which is the best opening sentence for a commentary?",
            options: [
              "My scene is set between Act 3 Scenes 1 and 2 of Hamlet and gives a voice to Ophelia, whose own thoughts are rarely heard in the play.",
              "I really enjoyed writing my scene and I think it is good.",
              "Hamlet is a play by William Shakespeare written around 1600.",
              "In my scene, Ophelia goes to her room and reads some letters.",
            ],
            answerIndex: 0,
            hint: "A good opening places the scene and states the purpose.",
            explanation:
              "The option ‘My scene is set between Act 3 Scenes 1 and 2 of Hamlet and gives a…’ locates the scene in the play and states a clear purpose. The option ‘Hamlet is a play by William Shakespeare written around 1600.’ is tempting because it gives accurate context, but it says nothing about the student's own choices.",
            guideRef: "writing-commentary",
          },
          {
            id: "scr-mcq-p1-q19",
            question: "In a missing scene from Romeo and Juliet, which prop would carry the most meaning?",
            options: ["A chair for Juliet to sit on", "A cup of water on a table", "A candle to light the room", "The small vial of potion Juliet hides in her sleeve"],
            answerIndex: 3,
            hint: "A strong prop connects to the plot and creates tension.",
            explanation:
              "The vial links to the plot, creates dramatic irony and builds tension whenever someone comes close to finding it. A candle (the option ‘A candle to light the room’) can create atmosphere, but it does not carry the same plot meaning.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-mcq-p1-q20",
            question: "Which ending line creates the strongest cliffhanger?",
            options: [
              "SAM: Anyway, I'm off to bed. Goodnight, everyone.",
              "(A key turns in the front door. Both freeze. Lights snap to black.)",
              "NIA: Well, that's all sorted, then.",
              "(They tidy up the kitchen and leave together.)",
            ],
            answerIndex: 1,
            hint: "Which ending leaves an urgent question unanswered?",
            explanation:
              "A key in the door, a freeze and a snap blackout leave the audience asking 'who is it?' at a moment of danger. The option ‘NIA: Well, that's all sorted, then.’ closes the conflict, so all the tension drains away.",
            guideRef: "pace-structure",
          },
        ],
      },
      {
        id: "scr-mcq-p2",
        title: "MCQ Paper 2",
        passage: NURSE_SCENE,
        questions: [
          {
            id: "scr-mcq-p2-q01",
            question: "In the passage, the Nurse says she speaks 'from my soul too; / Or else beshrew them both.' Juliet replies 'Amen!' What does Juliet secretly mean?",
            options: [
              "She agrees that she should marry Paris",
              "She is praying for Romeo's safety",
              "She wishes the Nurse's heart and soul cursed",
              "She is thanking God for the Nurse's advice",
            ],
            answerIndex: 2,
            hint: "'Beshrew' means 'curse'. What is Juliet saying 'Amen' to?",
            explanation:
              "Juliet says 'Amen' to the curse, secretly wishing the Nurse's heart and soul cursed for betraying Romeo. The option ‘She agrees that she should marry Paris’ is what the Nurse thinks she means, which is exactly the dramatic irony.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-mcq-p2-q02",
            question: "Juliet's speech beginning 'Ancient damnation! O most wicked fiend!' is spoken after the Nurse exits. What kind of speech is it?",
            options: ["An aside", "A soliloquy", "A prologue", "Stichomythia"],
            answerIndex: 1,
            hint: "Who else is on stage when she says it?",
            explanation:
              "Juliet is alone, speaking her private thoughts, so this is a soliloquy. An aside is tempting, but asides are spoken while others are present.",
            guideRef: "speech-forms",
          },
          {
            id: "scr-mcq-p2-q03",
            question: "Why is Juliet's line 'Well, thou hast comforted me marvellous much' an example of subtext?",
            options: [
              "Because she means the opposite: the Nurse has not comforted her at all",
              "Because she is speaking in verse",
              "Because the Nurse really has comforted her",
              "Because she is speaking to the audience",
            ],
            answerIndex: 0,
            hint: "Compare these polite words with her soliloquy a moment later.",
            explanation:
              "Her words are polite but her meaning is bitter: her soliloquy calls the Nurse a 'wicked fiend'. The option ‘Because she is speaking in verse’ is true (it is verse) but verse is not what makes it subtext.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-mcq-p2-q04",
            question: "What does the Nurse's line 'Romeo's a dishclout to him' reveal about her?",
            options: [
              "She is secretly loyal to Romeo",
              "She does not know who Paris is",
              "She is confused about which man Juliet married",
              "She now dismisses Romeo as worthless compared with Paris",
            ],
            answerIndex: 3,
            hint: "A dishclout is a dishcloth.",
            explanation:
              "Calling Romeo a dishcloth next to Paris shows she has practically switched sides. The option ‘She is secretly loyal to Romeo’ is the opposite: her loyalty to Romeo has collapsed.",
            guideRef: "dialogue-voice",
          },
          {
            id: "scr-mcq-p2-q05",
            question: "Which feature of the Nurse's long speech best shows her distinctive voice?",
            options: [
              "She speaks in short, single-word replies",
              "She uses lots of scientific vocabulary",
              "She piles up comparisons and exclamations ('O, he's a lovely gentleman!') as she persuades",
              "She addresses the audience directly",
            ],
            answerIndex: 2,
            hint: "Look at how she praises Paris.",
            explanation:
              "The Nurse gushes, piling up exclamations and comparisons (the eagle's eye) in a chatty, practical voice. Short single-word replies are actually Juliet's style in this exchange ('Amen!').",
            guideRef: "dialogue-voice",
          },
          {
            id: "scr-mcq-p2-q06",
            question: "Juliet's last line is 'If all else fail, myself have power to die.' Why is this an effective way to end the scene?",
            options: [
              "It resolves the conflict happily",
              "It ends on a frightening threat, creating a cliffhanger",
              "It introduces a new character",
              "It tells the audience exactly what will happen next",
            ],
            answerIndex: 1,
            hint: "What question does the audience leave the scene with?",
            explanation:
              "It ends with a chilling threat, so the audience leaves fearing for Juliet: a cliffhanger. The option ‘It tells the audience exactly what will happen next’ is wrong because it hints at danger without revealing the plan.",
            guideRef: "pace-structure",
          },
          {
            id: "scr-mcq-p2-q07",
            question: "Juliet tells the Nurse she is going to Friar Laurence 'To make confession'. What is she really doing?",
            options: [
              "Going to confess her love for Paris",
              "Going to tell the Friar about the Nurse",
              "Going to find Romeo in Mantua",
              "Using confession as a cover to seek the Friar's help ('his remedy')",
            ],
            answerIndex: 3,
            hint: "Read her soliloquy: 'I'll to the friar, to know his remedy'.",
            explanation:
              "Her soliloquy reveals the real purpose: to find a remedy. The option ‘Going to find Romeo in Mantua’ is tempting because she loves Romeo, but she says nothing about going to Mantua.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-mcq-p2-q08",
            question: "How does the Nurse's exit change the scene?",
            options: [
              "It allows Juliet to drop her mask and speak honestly in a soliloquy",
              "It ends the scene with a blackout",
              "It brings Romeo back on stage",
              "It makes the pace faster through stichomythia",
            ],
            answerIndex: 0,
            hint: "What can Juliet say once she is alone that she could not say before?",
            explanation:
              "With the Nurse gone, Juliet can reveal her true feelings to the audience. The scene does not end there, so the option ‘It ends the scene with a blackout’ is wrong.",
            guideRef: "speech-forms",
          },
          {
            id: "scr-mcq-p2-q09",
            question: "If you were writing a modern version of this scene, which line would best keep the meaning of 'Romeo's a dishclout to him'?",
            options: [
              "Romeo is very nice, but Paris is also nice.",
              "Honestly? Next to Paris, Romeo's a dirty old dishcloth.",
              "Romeo has gone to Mantua, so you can't see him.",
              "I have always loved Romeo the most.",
            ],
            answerIndex: 1,
            hint: "Keep the insult and the comparison, but update the language.",
            explanation:
              "The option ‘Honestly? Next to Paris, Romeo's a dirty old dishcloth.’ keeps the comparison and the insulting image while sounding modern. The option ‘Romeo is very nice, but Paris is also nice.’ loses the scornful tone completely.",
            guideRef: "adapting-shakespeare",
          },
          {
            id: "scr-mcq-p2-q10",
            question: "The Nurse knows nothing of the Friar's potion plan in the original play. In a missing scene, which line would break consistency with the original?",
            options: [
              "NURSE: Your father is roaring like a bear.",
              "NURSE: The County sent you this veil.",
              "NURSE: Now, did the Friar give you that sleeping potion?",
              "NURSE: Rosemary, for the wedding.",
            ],
            answerIndex: 2,
            hint: "Which line shows the Nurse knowing something she cannot know?",
            explanation:
              "The Nurse never learns of the potion, so the option ‘NURSE: Now, did the Friar give you that sleeping potion?’ contradicts the play. The other lines fit what she knows: the wedding to Paris is being prepared.",
            guideRef: "adapting-shakespeare",
          },
          {
            id: "scr-mcq-p2-q11",
            question: "Shakespeare's most famous stage direction, 'Exit, pursued by a bear', comes from which play?",
            options: ["The Winter's Tale", "Hamlet", "The Tempest", "Romeo and Juliet"],
            answerIndex: 0,
            hint: "It is a late play with a lost baby princess and a shipwreck on the coast of Bohemia.",
            explanation:
              "It appears in The Winter's Tale (Act 3 Scene 3). The Tempest is tempting as another late play, but its stage directions feature storms and spirits, not a bear.",
            guideRef: "stage-directions",
          },
          {
            id: "scr-mcq-p2-q12",
            question: "Why did Shakespeare write so few separate stage directions?",
            options: [
              "Stage directions had not been invented",
              "His actors could not read",
              "He wanted the plays to be performed exactly the same every time",
              "Much of the setting and action is built into the dialogue itself",
            ],
            answerIndex: 3,
            hint: "Think of 'Wilt thou be gone? it is not yet near day'.",
            explanation:
              "Shakespeare embedded directions in the speech, which suited a daylight theatre with little scenery. The option ‘Stage directions had not been invented’ is wrong: stage directions did exist, and he wrote some, such as 'Exit, pursued by a bear'.",
            guideRef: "stage-directions",
          },
          {
            extract: "JULIET: Wilt thou be gone? it is not yet near day:\nIt was the nightingale, and not the lark...\n(Romeo and Juliet, Act 3 Scene 5)",
            id: "scr-mcq-p2-q13",
            question: "What does this embedded stage direction tell the actors?",
            options: [
              "That it is midday and the lovers are in a garden",
              "That it is about dawn and Romeo is preparing to leave",
              "That Juliet is alone on stage",
              "That a nightingale must be heard as a sound effect",
            ],
            answerIndex: 1,
            hint: "Why would Juliet ask 'Wilt thou be gone?'",
            explanation:
              "The question and the debate about whether it is day tell us it is around dawn and Romeo is about to leave. The option ‘That a nightingale must be heard as a sound effect’ is tempting, but the birdsong is described in the dialogue, not demanded as a sound cue.",
            guideRef: "stage-directions",
          },
          {
            extract: "HAMLET: A little more than kin, and less than kind.\n(Hamlet, Act 1 Scene 2: Hamlet's first line, after Claudius calls him 'my cousin Hamlet, and my son')",
            id: "scr-mcq-p2-q14",
            question: "This line is usually performed as an aside. What effect does that create?",
            options: [
              "The court hears Hamlet insult the King openly",
              "It slows the pace with a long speech",
              "The audience alone hears Hamlet's bitterness, becoming his confidants",
              "It shows Hamlet and Claudius are close friends",
            ],
            answerIndex: 2,
            hint: "Who hears an aside?",
            explanation:
              "As an aside, only the audience hears the bitter pun, so we share Hamlet's secret hostility from his first line. The option ‘The court hears Hamlet insult the King openly’ would be true only if he said it openly.",
            guideRef: "speech-forms",
          },
          {
            extract: "HAMLET: Ha, ha! are you honest?\nOPHELIA: My lord?\nHAMLET: Are you fair?\nOPHELIA: What means your lordship?\n(Hamlet, Act 3 Scene 1)",
            id: "scr-mcq-p2-q15",
            question: "What is the main effect of the stichomythia here?",
            options: [
              "It creates a calm, romantic mood",
              "It speeds up the pace and shows Hamlet unsettling Ophelia",
              "It gives Ophelia control of the conversation",
              "It provides background information about Denmark",
            ],
            answerIndex: 1,
            hint: "Who is asking the questions and who is confused?",
            explanation:
              "The rapid short lines speed the pace and show Hamlet attacking while Ophelia struggles to follow. The option ‘It gives Ophelia control of the conversation’ is the reverse: her confused questions show she has lost control.",
            guideRef: "speech-forms",
          },
          {
            id: "scr-mcq-p2-q16",
            question: "What is the difference between a monologue and a soliloquy?",
            options: [
              "A monologue may be addressed to other characters; a soliloquy is spoken alone, revealing private thoughts",
              "A soliloquy is always shorter than a monologue",
              "A monologue is always in verse; a soliloquy is always in prose",
              "There is no difference: they are the same thing",
            ],
            answerIndex: 0,
            hint: "Think about who is listening.",
            explanation:
              "A soliloquy is a special kind of long speech: the character is alone and speaks private thoughts. The option ‘There is no difference: they are the same thing’ is tempting because both are long speeches, but the audience situation is different.",
            guideRef: "speech-forms",
          },
          {
            id: "scr-mcq-p2-q17",
            question: "Which of these is a soliloquy?",
            options: [
              "Hamlet's 'O, that this too too solid flesh would melt', spoken after the court leaves him alone",
              "The Nurse's long speech persuading Juliet to marry Paris",
              "Hamlet's 'are you honest?' exchange with Ophelia",
              "Caliban's 'This island's mine' speech to Prospero",
            ],
            answerIndex: 0,
            hint: "Find the speech where nobody else is on stage.",
            explanation:
              "Hamlet speaks 'O, that this too too solid flesh would melt' alone, revealing his private despair. Caliban's speech is long, but it is addressed to Prospero, so it is a monologue, not a soliloquy.",
            guideRef: "speech-forms",
          },
          {
            id: "scr-mcq-p2-q18",
            question: "The Prologue to Romeo and Juliet tells the audience that 'A pair of star-cross'd lovers take their life'. What effect does this have on the rest of the play?",
            options: [
              "It removes all tension because we know the ending",
              "It confuses the audience about who the main characters are",
              "It creates dramatic irony: every hopeful moment is shadowed by what we know is coming",
              "It is a stage direction telling the actors where to stand",
            ],
            answerIndex: 2,
            hint: "The audience knows; the lovers do not.",
            explanation:
              "Knowing the ending creates dramatic irony and a sense of fate. The option ‘It removes all tension because we know the ending’ is tempting, but knowing the outcome makes us watch more anxiously, not less.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-mcq-p2-q19",
            question: "Which is an example of internal conflict?",
            options: [
              "Tybalt challenges Romeo to a fight",
              "Juliet's father orders her to marry Paris",
              "Prospero raises a storm to wreck the ship",
              "Hamlet cannot decide whether to take revenge",
            ],
            answerIndex: 3,
            hint: "Internal conflict happens inside one character's mind.",
            explanation:
              "Hamlet's struggle with himself is internal. Juliet versus her father (the option ‘Juliet's father orders her to marry Paris’) is external conflict: a character against another character.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-mcq-p2-q20",
            question: "In Act 4 Scene 5, the Capulets mourn Juliet, believing she is dead. Why is this dramatic irony?",
            options: [
              "Because the Capulets are pretending to be sad",
              "Because the audience knows Juliet has only taken a sleeping potion",
              "Because Juliet speaks to the audience during the scene",
              "Because Romeo is hiding on stage",
            ],
            answerIndex: 1,
            hint: "What does the audience know that the family does not?",
            explanation:
              "The audience knows about the potion, while the family believes Juliet is dead. The option ‘Because the Capulets are pretending to be sad’ is wrong: their grief is real, which is what makes the irony painful.",
            guideRef: "dramatic-devices",
          },
        ],
      },
      {
        id: "scr-mcq-p3",
        title: "MCQ Paper 3",
        passage: CALIBAN_SPEECH,
        questions: [
          {
            id: "scr-mcq-p3-q01",
            question: "In the passage, what is the central conflict between Caliban and Prospero?",
            options: [
              "Who is the better magician",
              "Whether Miranda should marry",
              "How to escape the island by ship",
              "Who rightfully owns and rules the island",
            ],
            answerIndex: 3,
            hint: "Look at the very first line.",
            explanation:
              "'This island's mine... Which thou tak'st from me' puts ownership and power at the centre. Magic is part of the play, but Caliban is not competing as a magician here.",
            guideRef: "adapting-shakespeare",
          },
          {
            id: "scr-mcq-p3-q02",
            question: "Caliban says 'When thou cam'st first, / Thou strok'st me and made much of me'. Why is this useful to a writer creating 'Caliban's version'?",
            options: [
              "It shows a time of kindness that can make Prospero's later treatment feel like betrayal",
              "It proves Caliban was always Prospero's servant",
              "It shows that Caliban never trusted Prospero",
              "It describes the storm at the start of the play",
            ],
            answerIndex: 0,
            hint: "What was the relationship like at the beginning?",
            explanation:
              "The early kindness gives a writer a 'before' to contrast with the 'after', making the audience feel the betrayal. The option ‘It shows that Caliban never trusted Prospero’ is the opposite: 'then I lov'd thee' shows he did trust Prospero.",
            guideRef: "adapting-shakespeare",
          },
          {
            id: "scr-mcq-p3-q03",
            question: "In a modern 'Caliban's version', which line best echoes 'teach me how / To name the bigger light, and how the less'?",
            options: [
              "He taught me how to read the clock on his phone.",
              "He gave me a job raking sand.",
              "He taught me the names of the stars: the big light, the little light.",
              "He told me the island was beautiful.",
            ],
            answerIndex: 2,
            hint: "The bigger light and the less are the sun and the moon.",
            explanation:
              "The option ‘He taught me the names of the stars: the big light, the little light.’ directly adapts the image of naming the lights, so a reader recognises the source. The option ‘He taught me how to read the clock on his phone.’ modernises the idea of teaching, but loses the link to the sun and moon.",
            guideRef: "adapting-shakespeare",
          },
          {
            id: "scr-mcq-p3-q04",
            question: "'Here you sty me / In this hard rock'. If you staged this, which set would best support the idea of Caliban being penned in?",
            options: [
              "A bright, open beach with Caliban free to roam",
              "A low, cramped rock structure that forces Caliban to crouch, with open sky beyond him",
              "A luxurious palace room",
              "An empty stage with no set at all",
            ],
            answerIndex: 1,
            hint: "'Sty' means a pig pen. How could the set make him look confined?",
            explanation:
              "A cramped rock forcing him to crouch makes the confinement visible, with the open island he is kept from just beyond. An empty stage (the option ‘An empty stage with no set at all’) can work symbolically, but alone it does nothing to show him penned in.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-mcq-p3-q05",
            question: "Prospero stands on a raised rock while Caliban crouches below. What is this an example of?",
            options: ["Levels used to show status", "Stichomythia", "An embedded stage direction", "A cliffhanger"],
            answerIndex: 0,
            hint: "It is about height on stage.",
            explanation:
              "Using height to show who has power is called levels. Proxemics would be about distance, not height, and none of the other options describe staging.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-mcq-p3-q06",
            question: "A character delivers a soliloquy. Which lighting choice best suits it?",
            options: [
              "Bright, full lighting across the whole stage",
              "Flashing strobe lights",
              "A sudden blackout at the start",
              "A single spotlight isolating the character while the rest of the stage darkens",
            ],
            answerIndex: 3,
            hint: "A soliloquy is private and solitary.",
            explanation:
              "A spotlight isolates the speaker and focuses the audience on their private thoughts. Full bright lighting (the option ‘Bright, full lighting across the whole stage’) works against the sense of intimacy.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-mcq-p3-q07",
            question: "Why might a writer end a scene with a sudden blackout?",
            options: [
              "To give the actors time to rest",
              "To show that the characters have fallen asleep",
              "To cut the scene off sharply at a moment of shock, leaving the audience with a question",
              "Because every scene must end in a blackout",
            ],
            answerIndex: 2,
            hint: "Compare a blackout with a slow fade.",
            explanation:
              "A blackout snaps the scene shut at a moment of tension, which suits a cliffhanger. The option ‘Because every scene must end in a blackout’ is wrong: a slow fade is often better for a quiet, lingering ending.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-mcq-p3-q08",
            question: "What is 'blocking'?",
            options: [
              "Stopping an actor from speaking",
              "The planned positions and movements of actors on stage",
              "Building the set out of wooden blocks",
              "Cutting lines from a script",
            ],
            answerIndex: 1,
            hint: "It is planned in rehearsal.",
            explanation:
              "Blocking is the planned movement and positioning of actors. It has nothing to do with cutting lines (the option ‘Cutting lines from a script’).",
            guideRef: "stagecraft",
          },
          {
            id: "scr-mcq-p3-q09",
            question: "When one character confesses a secret, the other slowly walks to the far side of the stage. What does this use of proxemics suggest?",
            options: [
              "They want to hear better",
              "The scene is about to end",
              "They are about to sit down",
              "Emotional distance or rejection opening up between them",
            ],
            answerIndex: 3,
            hint: "Distance on stage often mirrors distance in a relationship.",
            explanation:
              "Moving away after a confession shows a growing emotional gap. 'The scene is about to end' could be true, but it does not explain what the movement means.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-mcq-p3-q10",
            question: "Which stage direction is an example of over-directing?",
            options: [
              "(She picks up the cup with her right hand, lifts it exactly ten centimetres, tilts her head slightly left, sighs softly twice and puts it down gently.)",
              "(She slams the cup down.)",
              "(Pause.)",
              "(Exit NURSE.)",
            ],
            answerIndex: 0,
            hint: "Which one leaves the actor no room at all?",
            explanation:
              "The option ‘(She picks up the cup with her right hand, lifts it exactly ten…’ micromanages every tiny movement, slowing the script and leaving the actor nothing to interpret. The option ‘(Pause.)’ is very short, but a well-placed pause is a precise, useful direction.",
            guideRef: "stage-directions",
          },
          {
            id: "scr-mcq-p3-q11",
            question: "Which idea is a 'missing scene' rather than a modernisation?",
            options: [
              "Moving the balcony scene to a block of flats in London",
              "Turning the Capulets and Montagues into rival football clubs",
              "Showing Ophelia alone in her room on the night Hamlet rejects her",
              "Replacing the swords in the fight scenes with phones",
            ],
            answerIndex: 2,
            hint: "A missing scene shows something that happens offstage in the original.",
            explanation:
              "Ophelia's night alone is never shown by Shakespeare, so it fills a gap. The option ‘Moving the balcony scene to a block of flats in London’, B and D all change the setting or objects of existing scenes: they are modernisations.",
            guideRef: "adapting-shakespeare",
          },
          {
            id: "scr-mcq-p3-q12",
            question: "Why is Ophelia's perspective a strong choice for an adaptation of Hamlet?",
            options: [
              "She is the main character of the play",
              "She is constantly instructed by her father and brother, so her own view is rarely heard",
              "She has more lines than Hamlet",
              "She is the only character who survives",
            ],
            answerIndex: 1,
            hint: "Whose voice does the play sideline?",
            explanation:
              "Ophelia is told what to do and think by Polonius and Laertes, so giving her a voice reveals something new. She is certainly not the main character (the option ‘She is the main character of the play’), and she dies in the play, so D is wrong too.",
            guideRef: "adapting-shakespeare",
          },
          {
            id: "scr-mcq-p3-q13",
            question: "Which modern opening line best echoes Caliban's 'This island's mine' while modernising the language?",
            options: [
              "Good morning, everyone, welcome to the resort.",
              "This island was mine before you ever stepped off that boat.",
              "I like living on islands very much.",
              "Thou hast tak'st mine island, villain!",
            ],
            answerIndex: 1,
            hint: "Keep the claim of ownership; update the words.",
            explanation:
              "The option ‘This island was mine before you ever stepped off that boat.’ keeps the defiant claim of ownership in modern speech. The option ‘Thou hast tak'st mine island, villain!’ keeps an old-fashioned style but garbles the grammar ('hast tak'st'), and it does not modernise anything.",
            guideRef: "adapting-shakespeare",
          },
          {
            id: "scr-mcq-p3-q14",
            question: "Which of these is NOT an element of stagecraft?",
            options: ["Lighting", "Costume", "Sound effects", "A metaphor in a character's speech"],
            answerIndex: 3,
            hint: "Stagecraft is what the audience sees and hears beyond the words themselves.",
            explanation:
              "A metaphor is a language technique within the dialogue, not part of the staging. Sound effects (the option ‘Sound effects’) are a stagecraft element even though they are heard rather than seen.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-mcq-p3-q15",
            question: "The Tempest opens with a storm: thunder, lightning and a ship in danger. What does this sound and lighting do at the very start of the play?",
            options: [
              "It plunges the audience into chaos and danger immediately",
              "It calms the audience before the action starts",
              "It tells the audience that the play is a comedy",
              "It shows that Caliban is in charge of the island",
            ],
            answerIndex: 0,
            hint: "Arrive late: start in the middle of the action.",
            explanation:
              "The storm throws the audience straight into chaos and tension. The option ‘It shows that Caliban is in charge of the island’ is wrong: the storm is Prospero's doing, as we soon learn, which is itself a twist.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-mcq-p3-q16",
            question: "In a staging of Ophelia's missing scene, she holds Hamlet's returned letters. What do the letters most clearly symbolise?",
            options: ["Her father's power", "The weather in Denmark", "Hamlet's rejected love, and her rejected self", "Her plan to escape"],
            answerIndex: 2,
            hint: "Hamlet refused to take them back: 'I never gave you aught'.",
            explanation:
              "The letters are the physical trace of a love Hamlet now denies. Her father's power (the option ‘Her father's power’) is part of her story, but the letters themselves represent the relationship with Hamlet.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-mcq-p3-q17",
            question: "Which of these would SLOW the pace of a scene most?",
            options: [
              "A rapid exchange of one-word lines",
              "A character interrupting another mid-sentence",
              "Several characters entering at once, shouting",
              "A long silence while a character slowly folds a letter",
            ],
            answerIndex: 3,
            hint: "Look for stillness rather than speed.",
            explanation:
              "Silence and slow physical business slow the pace and build suspense. Interruptions (the option ‘A character interrupting another mid-sentence’) speed the pace up.",
            guideRef: "pace-structure",
          },
          {
            id: "scr-mcq-p3-q18",
            question: "West Side Story (1957) is an adaptation of which Shakespeare play?",
            options: ["Romeo and Juliet", "Hamlet", "The Tempest", "Macbeth"],
            answerIndex: 0,
            hint: "Two young lovers from rival groups in New York.",
            explanation:
              "West Side Story turns the Montagues and Capulets into rival New York gangs. Hamlet is the source most associated with The Lion King, not West Side Story.",
            guideRef: "adapting-shakespeare",
          },
          {
            id: "scr-mcq-p3-q19",
            question: "What does the phrase 'arrive late, leave early' mean for a scriptwriter?",
            options: [
              "Characters should always enter late and leave before the end",
              "The audience should be allowed to arrive late",
              "Start a scene as close to the conflict as possible and end it while tension is high",
              "Write the ending first and the beginning last",
            ],
            answerIndex: 2,
            hint: "It is about where a scene begins and ends.",
            explanation:
              "It means cutting the slow build-up and the tidy wind-down, so a scene starts in the action and ends on a question. The option ‘Characters should always enter late and leave before the end’ takes the phrase too literally.",
            guideRef: "pace-structure",
          },
          {
            id: "scr-mcq-p3-q20",
            question: "A character wears a smart suit in Scene 1, but by Scene 4 the tie is gone and the shirt is untucked. What is the costume most likely showing?",
            options: [
              "That time has not passed",
              "That the character is gradually falling apart",
              "That the character has become richer",
              "That the play is set in summer",
            ],
            answerIndex: 1,
            hint: "Costume changes can track a character's journey.",
            explanation:
              "A gradually loosening costume suggests the character is unravelling. Summer heat (the option ‘That the play is set in summer’) is possible, but in drama such a progressive change usually signals a character's decline.",
            guideRef: "stagecraft",
          },
        ],
      },
      {
        id: "scr-mcq-p4",
        title: "MCQ Paper 4",
        questions: [
          {
            id: "scr-mcq-p4-q01",
            question: "Which commentary sentence uses terminology accurately?",
            options: [
              "I used a soliloquy when Juliet and the Nurse argue together.",
              "I used stichomythia in Ophelia's long speech to the audience.",
              "I used dramatic irony when Juliet tells her parents and the Nurse her plan openly.",
              "I used an aside so that only the audience hears Juliet's bitter 'I'm sure she will', while the Nurse carries on talking.",
            ],
            answerIndex: 3,
            hint: "Check each term against its definition.",
            explanation:
              "An aside is heard only by the audience while others are on stage, so D is accurate. The option ‘I used a soliloquy when Juliet and the Nurse argue together.’ misuses 'soliloquy', which requires the character to be alone, not arguing with someone; the option ‘I used dramatic irony when Juliet tells her parents and the Nurse…’ is not dramatic irony, because if everyone on stage hears the plan the audience knows nothing the characters do not.",
            guideRef: "writing-commentary",
          },
          {
            id: "scr-mcq-p4-q02",
            question: "Which commentary sentence is weakest?",
            options: [
              "The rosemary is a deliberate prop because it was used at both weddings and funerals.",
              "Then the Nurse leaves and Juliet takes out the potion and looks at it, and then it goes dark.",
              "I placed Juliet downstage centre for her soliloquy so that the audience feel closest to her at her most vulnerable.",
              "I echoed 'My husband is on earth, my faith in heaven' to link my ending to Act 3 Scene 5.",
            ],
            answerIndex: 1,
            hint: "Which sentence explains nothing?",
            explanation:
              "The option ‘Then the Nurse leaves and Juliet takes out the potion and looks at…’ only retells the plot with no technique or effect. The option ‘The rosemary is a deliberate prop because it was used at both…’ is short, but it explains why the prop was chosen.",
            guideRef: "writing-commentary",
          },
          {
            id: "scr-mcq-p4-q03",
            question: "Which sentence makes the best link to the original text?",
            options: [
              "Shakespeare is a very famous writer and my script is like his.",
              "My scene is set in the olden days, like Shakespeare's.",
              "Caliban's final line, 'This island's mine', deliberately repeats his first words to Prospero in Act 1 Scene 2, so the audience recognises his claim has never changed.",
              "I read the whole play before writing my scene.",
            ],
            answerIndex: 2,
            hint: "A good link quotes the original and explains why it was echoed.",
            explanation:
              "The option ‘Caliban's final line, 'This island's mine', deliberately repeats…’ quotes the original precisely, locates it and explains the effect of the echo. The option ‘My scene is set in the olden days, like Shakespeare's.’ makes a vague link that could apply to any scene.",
            guideRef: "writing-commentary",
          },
          {
            id: "scr-mcq-p4-q04",
            question: "In a commentary, what does 'audience' mean?",
            options: [
              "The people the scene is written for, whose knowledge and age shape your choices",
              "Only the examiner marking the work",
              "The actors performing the scene",
              "Anyone who has read Shakespeare",
            ],
            answerIndex: 0,
            hint: "Who will watch the play, and what do they already know?",
            explanation:
              "Audience means the people you are writing for, e.g. a modern teenage audience who know the play's ending. The examiner (the option ‘Only the examiner marking the work’) reads the commentary, but the scene's audience is who you imagine watching it.",
            guideRef: "writing-commentary",
          },
          {
            id: "scr-mcq-p4-q05",
            question: "Which sentence uses the most precise, appropriately tentative language about effect?",
            options: [
              "This makes everyone cry.",
              "I intended the sudden silence to make the audience hold their breath, sensing that the lie might be discovered.",
              "This is good because it is dramatic.",
              "Everyone will definitely think Ophelia is the best character.",
            ],
            answerIndex: 1,
            hint: "Look for 'intended' and a specific feeling.",
            explanation:
              "The option ‘I intended the sudden silence to make the audience hold their…’ names the intended effect precisely and links it to a specific technique. The option ‘Everyone will definitely think Ophelia is the best character.’ is over-certain: you cannot guarantee how every audience member will react.",
            guideRef: "writing-commentary",
          },
          {
            id: "scr-mcq-p4-q06",
            extract: "SCENE 4. A park.\nAVA: \"Where were you?\" she asked.\nBEN: I was at football.",
            question: "What is wrong with Ava's line?",
            options: [
              "Her name should be in lower case",
              "It needs a stage direction in the past tense",
              "It is too short",
              "It uses speech marks and a reporting clause ('she asked'), which do not belong in a script",
            ],
            answerIndex: 3,
            hint: "Compare it with Ben's line.",
            explanation:
              "Scripts drop speech marks and 'she asked'. The option ‘It needs a stage direction in the past tense’ would make it worse: stage directions should be in the present tense.",
            guideRef: "script-conventions",
          },
          {
            id: "scr-mcq-p4-q07",
            extract: "(The NURSE walked over to the window and looked out sadly.)",
            question: "How should this stage direction be corrected?",
            options: [
              "(The NURSE crosses to the window. Looks out.)",
              "(The NURSE had walked over to the window and had looked out sadly.)",
              "(The NURSE will walk to the window.)",
              "\"The NURSE walks over to the window,\" she said.",
            ],
            answerIndex: 0,
            hint: "Present tense, short, actable.",
            explanation:
              "The option ‘(The NURSE crosses to the window. Looks out.)’ is in the present tense and crisp; the action can show the sadness. The option ‘(The NURSE will walk to the window.)’ changes to the future tense, which is still wrong for stage directions.",
            guideRef: "stage-directions",
          },
          {
            id: "scr-mcq-p4-q08",
            question: "A student's adaptation has Juliet, the Nurse and Lord Capulet all speaking in the same casual modern sentences. What is the best fix?",
            options: [
              "Add more stage directions saying who is speaking",
              "Give each a distinct voice: Capulet's blunt commands, the Nurse's rambling chatter, Juliet's sharp, guarded replies",
              "Remove two of the characters",
              "Put everyone's lines in Shakespearean language",
            ],
            answerIndex: 1,
            hint: "Each character needs their own way of speaking.",
            explanation:
              "Distinct vocabulary, sentence lengths and habits make characters recognisable. The option ‘Put everyone's lines in Shakespearean language’ changes the register but would still leave them sounding identical to one another.",
            guideRef: "dialogue-voice",
          },
          {
            id: "scr-mcq-p4-q09",
            question: "Which is the most effective cliffhanger for a 'Caliban's version' scene?",
            options: [
              "CALIBAN: Well, I'd better get back to work, then.",
              "CALIBAN: I hope tomorrow is a nicer day.",
              "(CALIBAN finishes raking and goes to bed.)",
              "(Prospero's staff lies forgotten on the sand. CALIBAN sees it. He reaches out. Blackout.)",
            ],
            answerIndex: 3,
            hint: "Which ending leaves a dangerous question hanging?",
            explanation:
              "Caliban reaching for Prospero's source of power, then a blackout, leaves the audience asking what he will do. The other endings settle the scene down instead of raising the stakes.",
            guideRef: "pace-structure",
          },
          {
            id: "scr-mcq-p4-q10",
            question: "Which of these best describes the difference between subtext and dramatic irony?",
            options: [
              "Subtext is the meaning beneath a character's words; dramatic irony is when the audience knows something a character does not",
              "Subtext is only used in comedies; dramatic irony only in tragedies",
              "They are the same thing",
              "Subtext is a stage direction; dramatic irony is a type of lighting",
            ],
            answerIndex: 0,
            hint: "One is about what a character means; the other is about what the audience knows.",
            explanation:
              "Subtext is hidden meaning in speech; dramatic irony is a gap in knowledge between audience and character. They often work together (as in Juliet's 'Amen!'), which is why the option ‘They are the same thing’ is tempting, but they are different devices.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-mcq-p4-q11",
            question: "In a missing scene, Juliet hides the vial in her sleeve. Which moment would raise the tension most?",
            options: [
              "The Nurse talks about the weather",
              "Juliet leaves the stage",
              "The Nurse reaches to straighten Juliet's sleeve",
              "Lady Capulet calls from offstage about dinner",
            ],
            answerIndex: 2,
            hint: "Bring the danger physically close to the secret.",
            explanation:
              "The Nurse's hand moving towards the hidden vial threatens discovery, so the audience holds its breath. An offstage call (the option ‘Lady Capulet calls from offstage about dinner’) can interrupt, but it does not threaten the secret directly.",
            guideRef: "pace-structure",
          },
          {
            id: "scr-mcq-p4-q12",
            extract: "SAM: I passed all my exams.\n(He looks at the floor. His hands are shaking.)",
            question: "What does the stage direction suggest about Sam's line?",
            options: [
              "That he is proud and confident",
              "That he is cold",
              "That he is excited to share his news",
              "That he is probably lying",
            ],
            answerIndex: 3,
            hint: "Do the words and the body agree?",
            explanation:
              "Avoiding eye contact and shaking hands contradict his words, creating subtext: he is probably lying. Being cold (the option ‘That he is cold’) could explain shaking hands, but not looking at the floor while sharing good news.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-mcq-p4-q13",
            extract: "MUM: Did you eat the last slice of cake?\n(Silence.)",
            question: "What is the effect of the stage direction '(Silence.)' here?",
            options: [
              "It answers the question without words and builds tension",
              "It tells the lighting team to switch off the lights",
              "It shows that the scene has ended",
              "It means the actor has forgotten their line",
            ],
            answerIndex: 0,
            hint: "Sometimes saying nothing says everything.",
            explanation:
              "The silence is an answer in itself (guilt) and stretches the tension. It does not end the scene (the option ‘It shows that the scene has ended’): the silence invites what happens next.",
            guideRef: "pace-structure",
          },
          {
            id: "scr-mcq-p4-q14",
            question: "Baz Luhrmann's film Romeo + Juliet (1996) is best described as…",
            options: [
              "a missing scene written in modern English",
              "a modern setting that keeps Shakespeare's original language",
              "a retelling from the Nurse's point of view",
              "a musical with entirely new songs and dialogue",
            ],
            answerIndex: 1,
            hint: "Guns and cars, but 'thee' and 'thou'.",
            explanation:
              "Luhrmann moves the story to a modern city but keeps the original words. A musical with entirely new dialogue (the option ‘a musical with entirely new songs and dialogue’) describes West Side Story.",
            guideRef: "adapting-shakespeare",
          },
          {
            id: "scr-mcq-p4-q15",
            question: "Tom Stoppard's play Rosencrantz and Guildenstern Are Dead (1966) retells Hamlet from the viewpoint of two minor characters. Why is this a useful model for a school adaptation?",
            options: [
              "It shows you should rewrite the whole play",
              "It shows minor characters should be cut",
              "It shows how giving minor characters a voice can make us see familiar events afresh",
              "It shows adaptations must use Shakespeare's exact words",
            ],
            answerIndex: 2,
            hint: "What does a new viewpoint add?",
            explanation:
              "Seeing Hamlet's events through two sidelined characters reveals new meanings. The option ‘It shows you should rewrite the whole play’ goes too far: you only need one well-chosen scene.",
            guideRef: "adapting-shakespeare",
          },
          {
            id: "scr-mcq-p4-q16",
            question: "A student writing 'Caliban's version' chooses a monologue addressed to the audience, with Prospero heard only offstage. What is the strongest justification?",
            options: [
              "It means fewer actors are needed",
              "Monologues are easier to write than dialogue",
              "It gives Caliban an uninterrupted voice and makes the audience his confidants, reversing the original where Prospero dominates their scenes",
              "Prospero is not an important character",
            ],
            answerIndex: 2,
            hint: "Think about whose voice controls the story.",
            explanation:
              "The option ‘It gives Caliban an uninterrupted voice and makes the audience his…’ explains the effect on the audience and links to the original power balance. The option ‘It means fewer actors are needed’ may be true practically, but it is not a dramatic justification for a commentary.",
            guideRef: "writing-commentary",
          },
          {
            id: "scr-mcq-p4-q17",
            question: "Which line of a modern Nurse best shows guilt through subtext, without stating it?",
            options: [
              "NURSE: I feel very guilty about the advice I gave you.",
              "NURSE: I am sorry I told you to marry Paris.",
              "NURSE: I think I made a mistake and I regret it.",
              "NURSE: (fussing with the veil, not meeting her eye) You'll... you'll look lovely. Everyone says so.",
            ],
            answerIndex: 3,
            hint: "Which one hints instead of announcing?",
            explanation:
              "The hesitation, avoiding eye contact and hiding behind 'Everyone says so' suggest guilt without stating it. The option ‘NURSE: I feel very guilty about the advice I gave you.’ to C announce the feeling directly, which removes the subtext.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-mcq-p4-q18",
            question: "Which is the best evaluative sentence to end a commentary?",
            options: [
              "Overall my scene is perfect.",
              "If I redrafted, I would cut the Nurse's first speech so the scene arrives at the conflict more quickly.",
              "I hope you liked my scene.",
              "That is the end of my commentary.",
            ],
            answerIndex: 1,
            hint: "Good evaluation is specific and honest.",
            explanation:
              "The option ‘If I redrafted, I would cut the Nurse's first speech so the scene…’ identifies a precise improvement and the reason for it, which shows critical awareness. The option ‘Overall my scene is perfect.’ claims perfection, which shows no reflection at all.",
            guideRef: "writing-commentary",
          },
          {
            id: "scr-mcq-p4-q19",
            question: "A student's scene begins with three pages of characters saying hello, making tea and chatting about the weather before the argument starts. What is the most useful advice?",
            options: [
              "Arrive late: start the scene much closer to the argument",
              "Add more stage directions to the tea-making",
              "Make the tea-making scene funnier",
              "Add a narrator to explain the background",
            ],
            answerIndex: 0,
            hint: "Where should a scene start?",
            explanation:
              "Cutting the slow build-up and starting near the conflict grips the audience. Adding a narrator (the option ‘Add a narrator to explain the background’) would bring novel-style telling into the script.",
            guideRef: "pace-structure",
          },
          {
            id: "scr-mcq-p4-q20",
            question: "In Saturday Shift, Sam never says he has left university. Why is this more effective than a line such as 'I've dropped out of my course'?",
            options: [
              "Because the audience does not need to know",
              "Because the audience works out the truth from clues (the rucksack, 'Something like that', the banner), which draws them in and creates tension",
              "Because Sam has actually passed his exams",
              "Because scripts are not allowed to state facts",
            ],
            answerIndex: 1,
            hint: "Think about what subtext asks the audience to do.",
            explanation:
              "Subtext makes the audience active detectives, and the unspoken truth hangs over every line. The option ‘Because scripts are not allowed to state facts’ is wrong: scripts can state facts, but holding them back is often more powerful.",
            guideRef: "dramatic-devices",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "scr-qa-p1",
        title: "Written Paper 1",
        passage: NURSE_SCENE,
        questions: [
          {
            id: "scr-qa-p1-q01",
            question: "Find the only separate stage direction in the passage and explain why it is important to the scene. (2 marks)",
            marks: 2,
            hint: "Look for the bracketed word near the end.",
            modelAnswer:
              "The stage direction is '(Exit)', when the Nurse leaves. It matters because it leaves Juliet alone on stage, which allows her to speak a soliloquy and reveal her true feelings about the Nurse.",
            markScheme: [
              { point: "Identifies '(Exit)' / the Nurse leaving", keywords: ["exit", "nurse leaves", "nurse exits", "leaves the stage", "goes off"] },
              { point: "Explains it leaves Juliet alone for her soliloquy / honest feelings", keywords: ["alone", "soliloquy", "true feelings", "honest", "by herself", "reveal"] },
            ],
            commonError: "Identifying a line of dialogue as a stage direction, or not explaining what the exit allows Juliet to do.",
            guideRef: "stage-directions",
          },
          {
            id: "scr-qa-p1-q02",
            question: "What does the Nurse advise Juliet to do, and what two reasons does she give? (3 marks)",
            marks: 3,
            hint: "Find 'I think it best...' and read the lines before and after it.",
            modelAnswer:
              "The Nurse advises Juliet to marry Paris ('I think it best you married with the county'). Her first reason is that Romeo is banished and will never dare come back, or only 'by stealth'. Her second reason is that Paris is better than Romeo: 'Romeo's a dishclout to him', with a finer eye than an eagle's, and in any case Romeo is as good as dead to Juliet.",
            markScheme: [
              { point: "Advises Juliet to marry Paris (the County)", keywords: ["marry paris", "married with the county", "marry the county", "paris", "second match", "marry"] },
              { point: "Reason: Romeo is banished and cannot return / only by stealth", keywords: ["banished", "never come back", "dares ne'er", "stealth", "can't return", "cannot return"] },
              { point: "Reason: Paris is better / Romeo is worthless or as good as dead", keywords: ["dishclout", "dishcloth", "eagle", "better", "excels", "as good as dead", "lovely gentleman"] },
            ],
            commonError: "Giving the advice but no reasons, or confusing Paris with Romeo.",
            guideRef: "dialogue-voice",
          },
          {
            id: "scr-qa-p1-q03",
            question: "How does Shakespeare show the change in Juliet's feelings towards the Nurse in this passage? Refer to language and structure. (4 marks)",
            marks: 4,
            hint: "Compare how Juliet speaks to the Nurse at the start, while the Nurse is present, and after she exits.",
            modelAnswer:
              "At the start Juliet turns to the Nurse for help, pleading for 'Some comfort, nurse', which shows her trust and dependence. After the Nurse's advice, Juliet's replies become short and loaded with subtext: 'Amen!' secretly agrees with the curse, and 'thou hast comforted me marvellous much' is bitterly ironic. Structurally, Shakespeare saves the truth for the soliloquy after the Nurse's exit, where Juliet calls her 'Ancient damnation! O most wicked fiend!'. The exclamations show her fury, and 'Thou and my bosom henceforth shall be twain' shows she has cut the Nurse out of her confidence for good, leaving her isolated.",
            markScheme: [
              { point: "Shows initial trust/dependence ('Some comfort, nurse')", keywords: ["some comfort", "word of joy", "trust", "depend", "turns to", "pleads"] },
              { point: "Analyses subtext/irony in Juliet's replies ('Amen', 'comforted me')", keywords: ["amen", "comforted me", "sarcas", "ironic", "subtext", "double meaning"] },
              { point: "Analyses the soliloquy's language of fury ('wicked fiend', 'damnation')", keywords: ["fiend", "damnation", "wicked", "exclamation", "anger", "fury"] },
              { point: "Explains the structural shift: truth saved for soliloquy / break shown by 'twain'", keywords: ["twain", "after the nurse leaves", "exit", "soliloquy", "structure", "isolated", "alone"] },
            ],
            commonError: "Only discussing the soliloquy and missing how the shift is built up through the short, ironic replies before it.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-qa-p1-q04",
            question: "Explain the subtext in Juliet's line 'Well, thou hast comforted me marvellous much.' How might an actor show it? (3 marks)",
            marks: 3,
            hint: "Does she mean it? What could her voice, face or body do?",
            modelAnswer:
              "On the surface Juliet thanks the Nurse, but the subtext is the opposite: the Nurse has not comforted her at all, and she now feels betrayed. 'Marvellous much' is exaggerated, which hints at sarcasm. An actor could deliver it in a flat, controlled voice with a fixed smile, or turn away from the Nurse before speaking, so the audience sees the hurt the Nurse misses.",
            markScheme: [
              { point: "Identifies that she means the opposite / has not been comforted", keywords: ["opposite", "not comforted", "doesn't mean", "does not mean", "sarcas", "ironic"] },
              { point: "Links to betrayal or hurt", keywords: ["betray", "hurt", "let down", "abandoned", "angry", "alone"] },
              { point: "Suggests a performance choice (tone, expression, movement)", keywords: ["flat", "tone", "smile", "turns away", "voice", "pause", "eye contact", "cold"] },
            ],
            commonError: "Taking the line at face value and saying Juliet feels comforted.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-qa-p1-q05",
            question: "What is a soliloquy? Quote the first words of Juliet's soliloquy in the passage. (2 marks)",
            marks: 2,
            hint: "It begins straight after the stage direction.",
            modelAnswer:
              "A soliloquy is a speech by a character alone on stage, speaking their private thoughts aloud to the audience. Juliet's soliloquy begins 'Ancient damnation! O most wicked fiend!'",
            markScheme: [
              { point: "Defines soliloquy: alone on stage, private thoughts", keywords: ["alone", "private thoughts", "by themselves", "inner thoughts", "true feelings", "on their own"] },
              { point: "Quotes the opening of Juliet's soliloquy", keywords: ["ancient damnation", "wicked fiend", "most wicked", "damnation", "o most wicked"] },
            ],
            commonError: "Defining a soliloquy simply as 'a long speech', which is a monologue.",
            guideRef: "speech-forms",
          },
          {
            id: "scr-qa-p1-q06",
            question: "How does the final line, 'If all else fail, myself have power to die', work as a scene ending? (4 marks)",
            marks: 4,
            hint: "Think about cliffhangers, foreshadowing and the sound of the line.",
            modelAnswer:
              "The line works as a cliffhanger because it ends the scene on a frightening threat: the audience leaves fearing what Juliet will do. It foreshadows the tragic ending already promised in the Prologue ('star-cross'd lovers take their life'), so it also builds dramatic irony. The line is made of short, mostly single-syllable words, which makes it sound blunt and decisive, ending heavily on 'die'. It also shows Juliet's new independence: having lost the Nurse, she now relies only on herself ('myself have power').",
            markScheme: [
              { point: "Identifies it as a cliffhanger / ends on tension or a threat", keywords: ["cliffhanger", "tension", "threat", "suspense", "fear", "worried"] },
              { point: "Links to foreshadowing / the Prologue / tragic ending", keywords: ["foreshadow", "prologue", "star-cross", "tragic", "fate", "death", "suicide"] },
              { point: "Comments on sound/structure (monosyllables, final word 'die')", keywords: ["monosyllab", "short words", "blunt", "final word", "single-syllable", "decisive", "rhythm"] },
              { point: "Links to Juliet's isolation/independence ('myself')", keywords: ["myself", "independen", "alone", "isolated", "relies on herself", "no one else"] },
            ],
            commonError: "Saying it is 'a good ending' without explaining the effect on the audience.",
            guideRef: "pace-structure",
          },
          {
            id: "scr-qa-p1-q07",
            question: "Rewrite the Nurse's advice ('I think it best you married with the county... Romeo's a dishclout to him') as two or three lines of modern script dialogue. Keep the Nurse's voice and the dishclout image. Then explain one choice. (3 marks)",
            marks: 3,
            hint: "Modern words, but keep her chatty, practical voice and the insult.",
            modelAnswer:
              "NURSE: Listen to me, pet. Romeo's gone. He's not coming back. Marry Paris. Honestly? Next to Paris, Romeo's a soggy old dishcloth.\n\nI kept the dishcloth comparison but made it 'soggy' and 'old' so a modern audience still hears how dismissive she has become. Her short, practical sentences and the affectionate 'pet' keep her warm, chatty voice, which makes the betrayal feel even more casual.",
            markScheme: [
              { point: "Writes in script layout with modern language", keywords: ["nurse:", "marry paris", "he's gone", "not coming back", "listen"] },
              { point: "Keeps the dishcloth/dishclout insult", keywords: ["dishcloth", "dishclout", "rag", "tea towel", "cloth"] },
              { point: "Explains a choice and its effect", keywords: ["i kept", "i chose", "modern audience", "voice", "dismissive", "effect", "so that"] },
            ],
            commonError: "Translating line by line into stiff modern English and losing the Nurse's warm, chatty voice.",
            guideRef: "adapting-shakespeare",
          },
          {
            id: "scr-qa-p1-q08",
            question: "You are directing the moment the Nurse exits and Juliet is left alone. Write two stage directions (one using lighting or sound, one using movement or proxemics) and explain the effect of each. (4 marks)",
            marks: 4,
            hint: "How could the stage change when Juliet's mask drops?",
            modelAnswer:
              "(As the door closes behind the NURSE, the warm light narrows to a cold white spotlight on JULIET.) The shift from warm to cold light marks the moment Juliet's polite mask drops and isolates her, showing she is now completely alone.\n\n(JULIET stares at the door, then strides downstage, as far from it as she can go.) Moving away from the Nurse's exit shows the emotional distance she is putting between them, and bringing her downstage makes her soliloquy intimate and direct.",
            markScheme: [
              { point: "Writes a lighting or sound stage direction", keywords: ["spotlight", "light", "lights", "door closes", "sound", "silence", "dim"] },
              { point: "Explains its effect (isolation, change of mood, mask dropping)", keywords: ["isolat", "alone", "mood", "mask", "cold", "focus", "change"] },
              { point: "Writes a movement/proxemics stage direction", keywords: ["downstage", "strides", "moves", "walks", "steps", "away from", "turns"] },
              { point: "Explains its effect (distance, intimacy with audience, rejection)", keywords: ["distance", "intimate", "closer to the audience", "rejection", "direct", "break"] },
            ],
            commonError: "Writing stage directions about feelings ('Juliet feels betrayed') instead of visible or audible actions.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-qa-p1-q09",
            question: "You are writing a missing scene in which Juliet and the Nurse meet again later that day. List five things from the original play your scene must stay consistent with. (5 marks)",
            marks: 5,
            hint: "What does each character know? What has happened? How do they feel?",
            modelAnswer:
              "1. Juliet is secretly married to Romeo, and the Nurse knows this because she helped arrange it. 2. Romeo has been banished to Mantua for killing Tybalt. 3. Juliet's father has ordered her to marry Paris. 4. Juliet no longer trusts the Nurse after her advice to marry Paris, so she must hide her plans from her. 5. The Nurse does not know about Juliet's visit to the Friar's 'remedy' (the potion plan), so she cannot mention it.",
            markScheme: [
              { point: "Juliet is secretly married to Romeo (Nurse knows)", keywords: ["married to romeo", "secret marriage", "secretly married", "husband", "wedding to romeo"] },
              { point: "Romeo is banished (to Mantua) for killing Tybalt", keywords: ["banished", "mantua", "tybalt", "exile"] },
              { point: "Her father insists she marry Paris", keywords: ["paris", "father", "capulet", "arranged", "forced to marry"] },
              { point: "Juliet no longer trusts the Nurse / hides things from her", keywords: ["trust", "hide", "secret from", "betray", "confide", "suspicious"] },
              { point: "The Nurse does not know the Friar's plan/potion", keywords: ["doesn't know", "does not know", "potion", "friar", "remedy", "plan"] },
            ],
            commonError: "Letting the Nurse know about the potion, or having Romeo appear in Verona.",
            guideRef: "adapting-shakespeare",
          },
          {
            id: "scr-qa-p1-q10",
            question: "The Nurse replies to Juliet's plan to visit the Friar with 'Marry, I will; and this is wisely done.' Explain the dramatic irony of this line. (4 marks)",
            marks: 4,
            hint: "What does the Nurse think Juliet is going to do? What does the audience soon learn?",
            modelAnswer:
              "The Nurse believes Juliet is going to confession because she regrets displeasing her father, so she praises the plan as 'wisely done'. The audience, however, soon hears Juliet reveal in her soliloquy that she is going 'to know his remedy', and that she is prepared to die. This gap between the Nurse's understanding and the audience's knowledge is dramatic irony. It makes the Nurse's approving words painful and even slightly comic, and it shows how completely Juliet has shut the Nurse out.",
            markScheme: [
              { point: "Explains what the Nurse believes (confession, obedience)", keywords: ["confession", "obey", "repent", "believes", "thinks", "absolved"] },
              { point: "Explains what the audience knows (remedy, plan, willing to die)", keywords: ["remedy", "audience knows", "plan", "power to die", "soliloquy", "friar's help"] },
              { point: "Names dramatic irony accurately", keywords: ["dramatic irony", "audience knows more", "the nurse doesn't know", "unaware", "gap in knowledge"] },
              { point: "Explains the effect (painful, tension, shows Nurse shut out)", keywords: ["shut out", "painful", "tension", "sympathy", "comic", "isolat", "excluded"] },
            ],
            commonError: "Explaining what the line means without saying what the audience knows that the Nurse does not.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-qa-p1-q11",
            question: "Imagine you have written a modern version of this exchange in which Juliet replies 'Amen to that' to the Nurse. Write a commentary paragraph explaining this choice. Use the CQTEL structure. (5 marks)",
            marks: 5,
            hint: "Choice, Quote, Term, Effect, Link to Act 3 Scene 5.",
            modelAnswer:
              "I chose to keep Juliet's reply almost unchanged from Shakespeare's, so that one line of the original survives into my modern scene. When the Nurse says she means it 'from the bottom of my heart, or I'll be cursed', Juliet replies, 'Amen to that.' This creates subtext and dramatic irony: the Nurse hears agreement, while the audience hears Juliet wishing the curse on her. I intended the audience to feel the chill of the moment the relationship breaks, without either character saying it openly. This links directly to Act 3 Scene 5, where Juliet's 'Amen!' answers 'beshrew them both', and keeping the word 'Amen' signals to anyone who knows the play exactly which moment I am reimagining.",
            markScheme: [
              { point: "States the choice clearly", keywords: ["i chose", "i decided", "i kept", "i wanted", "my choice"] },
              { point: "Quotes from own (imagined) script", keywords: ["amen to that", "for example", "replies", "says", "my line"] },
              { point: "Names the technique (subtext / dramatic irony)", keywords: ["subtext", "dramatic irony", "double meaning", "irony"] },
              { point: "Explains the intended effect on the audience", keywords: ["audience", "feel", "intended", "chill", "tension", "effect"] },
              { point: "Links to Shakespeare's Act 3 Scene 5", keywords: ["beshrew", "act 3 scene 5", "shakespeare", "original", "amen!"] },
            ],
            commonError: "Explaining what Juliet means but forgetting to say why you, the writer, chose to keep the line.",
            guideRef: "writing-commentary",
          },
          {
            id: "scr-qa-p1-q12",
            question: "Is the Nurse a betrayer or a realist in this scene? Write a balanced answer using evidence, and explain how you would stage her to guide the audience's view. (5 marks)",
            marks: 5,
            hint: "Consider both readings, then make a judgement and a staging choice.",
            modelAnswer:
              "On one hand, the Nurse can be seen as a betrayer: she helped arrange Juliet's marriage to Romeo, yet now calls him 'a dishclout' and advises a second marriage that would be a sin. Juliet's 'O most wicked fiend!' shows that Juliet certainly feels betrayed. On the other hand, the Nurse may be a realist trying to protect Juliet: Romeo 'is banished', Lord Capulet has threatened to throw Juliet out, and the Nurse, as a servant, has no power to resist him. Her advice is practical, even if it is morally wrong. Overall, I think she is a realist whose practicality is a betrayal of Juliet's love. To show this on stage, I would have her glance nervously towards the door where Lord Capulet exited before she begins, so that the audience sees fear behind her advice even while Juliet sees only treachery.",
            markScheme: [
              { point: "Argues she is a betrayer, with evidence", keywords: ["betray", "dishclout", "fiend", "switched sides", "disloyal", "second match"] },
              { point: "Argues she is a realist/protective, with evidence", keywords: ["realist", "practical", "protect", "banished", "servant", "no power", "afraid"] },
              { point: "Considers context (Capulet's power, her position as servant)", keywords: ["capulet", "father", "servant", "threat", "power", "throw her out"] },
              { point: "Reaches a clear judgement", keywords: ["overall", "i think", "in my view", "ultimately", "on balance", "i believe"] },
              { point: "Gives a staging choice that guides the audience", keywords: ["stage", "glance", "door", "actor", "nervous", "tone", "direction", "blocking"] },
            ],
            commonError: "Arguing only one side, or making a judgement without any staging idea.",
            guideRef: "adapting-shakespeare",
          },
        ],
      },
      {
        id: "scr-qa-p2",
        title: "Written Paper 2",
        passage: SATURDAY_SHIFT,
        questions: [
          {
            id: "scr-qa-p2-q01",
            question: "Identify two script conventions used in the opening of Saturday Shift and explain the purpose of each. (2 marks)",
            marks: 2,
            hint: "Look at the very first line and the way speeches are set out.",
            modelAnswer:
              "The scene heading, 'SCENE 1. The back room of a small family bakery. 6 a.m.', tells the production team the place and time. Character names in capitals in the margin (NIA:, SAM:) show clearly who speaks each line, without speech marks.",
            markScheme: [
              { point: "Scene heading with place/time, and its purpose", keywords: ["scene heading", "scene 1", "bakery", "6 a.m", "place and time", "setting"] },
              { point: "Another convention (names in capitals / no speech marks / bracketed directions) with purpose", keywords: ["capitals", "no speech marks", "brackets", "stage direction", "margin", "present tense"] },
            ],
            commonError: "Naming conventions without saying what each one is for.",
            guideRef: "script-conventions",
          },
          {
            id: "scr-qa-p2-q02",
            question: "What does the audience infer has happened to Sam? Give two pieces of evidence. (3 marks)",
            marks: 3,
            hint: "Nobody says it directly. Look at his replies and his rucksack.",
            modelAnswer:
              "The audience infers that Sam has dropped out of, or failed, his university engineering course and has not told his mother. When Nia asks 'Exams finished, then?' he replies evasively, 'Something like that'. He also arrives long before Christmas, when he was not expected, with a rucksack he cannot settle on putting down, then hides it behind the door, which suggests he has come home for good and is hiding it.",
            markScheme: [
              { point: "Infers he has left/failed university and is hiding it", keywords: ["dropped out", "left university", "failed", "quit", "left his course", "hiding", "secret"] },
              { point: "Evidence from dialogue ('Something like that' / 'Change of plan')", keywords: ["something like that", "change of plan", "couldn't sleep", "evasive", "vague"] },
              { point: "Evidence from action (rucksack, arriving early)", keywords: ["rucksack", "behind the door", "early", "christmas", "puts it down", "bag"] },
            ],
            commonError: "Stating the inference without quoting the clues that support it.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-qa-p2-q03",
            question: "Explain how the stage direction '(He puts the rucksack down. Picks it up again. Pushes it behind the door.)' creates subtext. (4 marks)",
            marks: 4,
            hint: "What does each action suggest? Why short sentences?",
            modelAnswer:
              "The rucksack represents everything Sam has brought home, and possibly his whole university life packed up. Putting it down and then picking it up again shows his hesitation: he cannot decide whether to stay or admit the truth. Pushing it behind the door suggests he is literally hiding the evidence, revealing his guilt without a word. The short, separate sentences slow the action into three distinct beats, so the audience watches each movement closely and senses his anxiety.",
            markScheme: [
              { point: "Explains what the rucksack represents (his secret / life packed up)", keywords: ["represents", "symbol", "secret", "university", "everything he owns", "home for good"] },
              { point: "Analyses the hesitation (down, up again)", keywords: ["hesitat", "indecis", "unsure", "can't decide", "nervous", "uncertain"] },
              { point: "Analyses hiding it behind the door (concealment, guilt)", keywords: ["hiding", "hide", "conceal", "guilt", "behind the door", "evidence"] },
              { point: "Comments on the short sentences/pace or the effect on the audience", keywords: ["short sentences", "beats", "pace", "slow", "audience", "tension"] },
            ],
            commonError: "Describing what Sam does without explaining what the actions suggest he is feeling or hiding.",
            guideRef: "stage-directions",
          },
          {
            id: "scr-qa-p2-q04",
            question: "Sam's reply 'Has she.' ends with a full stop rather than a question mark. What does this suggest? (3 marks)",
            marks: 3,
            hint: "Say it aloud with a question mark, then with a full stop.",
            modelAnswer:
              "The full stop makes the line flat rather than curious, so Sam does not sound surprised or pleased that his mother has told the whole street. It suggests dread and guilt: each person she has told is another person he will disappoint. The flatness gives the actor a clear signal for tone without a parenthetical such as '(flatly)', so the punctuation itself carries the subtext.",
            markScheme: [
              { point: "Explains the flat/unquestioning tone", keywords: ["flat", "not a question", "monotone", "no surprise", "dull", "statement"] },
              { point: "Links it to his guilt/dread/discomfort", keywords: ["guilt", "dread", "disappoint", "uncomfortable", "ashamed", "sinking"] },
              { point: "Explains that punctuation guides the actor / replaces a parenthetical", keywords: ["punctuation", "actor", "tone", "parenthetical", "delivery", "instead of"] },
            ],
            commonError: "Assuming the missing question mark is a mistake.",
            guideRef: "dialogue-voice",
          },
          {
            id: "scr-qa-p2-q05",
            question: "How does the writer use sound and an offstage character to create tension when the shop bell rings? (4 marks)",
            marks: 4,
            hint: "Look at the bell, the freeze, Mum's voice and Nia's reply.",
            modelAnswer:
              "The sudden jangle of the bell is an offstage sound that breaks the quiet and signals that someone might discover Sam. The direction 'Both freeze' turns the moment into a still picture, so the audience holds its breath with them. Mum's voice from off makes her presence felt without her being seen, which keeps the threat of discovery hanging over the scene. Finally, Sam's tiny head-shake and Nia's lie, 'Just the wind, Mum!', resolve the moment but deepen the secret, which keeps the tension simmering.",
            markScheme: [
              { point: "Bell as a sudden sound breaking the quiet / threat of discovery", keywords: ["bell", "sudden", "sound", "jangle", "discover", "interrupt"] },
              { point: "The freeze creates suspense", keywords: ["freeze", "still", "hold their breath", "suspense", "pause"] },
              { point: "Mum heard but not seen (offstage presence)", keywords: ["offstage", "off", "unseen", "not seen", "voice", "presence"] },
              { point: "Nia's lie / head-shake deepens the secret", keywords: ["lie", "just the wind", "shakes his head", "protect", "secret", "covers"] },
            ],
            commonError: "Mentioning the bell but not explaining why it creates tension.",
            guideRef: "pace-structure",
          },
          {
            id: "scr-qa-p2-q06",
            question: "Why might the writer have chosen to keep Mum offstage for the whole scene? (3 marks)",
            marks: 3,
            hint: "Think about pressure, focus and what an unseen character makes us imagine.",
            modelAnswer:
              "Keeping Mum offstage keeps the focus on the relationship between Nia and Sam, the siblings sharing the secret. Her unseen presence makes her feel like a constant pressure that could walk in at any moment, which sustains tension. It also lets the audience build her up in their imagination through the banner and 'My son, the engineer', so her pride feels even heavier.",
            markScheme: [
              { point: "Keeps focus on the siblings' relationship", keywords: ["focus", "siblings", "nia and sam", "relationship", "brother and sister"] },
              { point: "Creates constant pressure/threat of discovery", keywords: ["pressure", "threat", "could walk in", "tension", "discover", "any moment"] },
              { point: "Lets the audience imagine her through others' words (banner, 'my son, the engineer')", keywords: ["imagine", "banner", "engineer", "proud", "expectations", "build her up"] },
            ],
            commonError: "Saying 'to save money on actors' instead of giving a dramatic reason.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-qa-p2-q07",
            question: "How does the writer make Nia's voice different from Sam's? Use evidence. (4 marks)",
            marks: 4,
            hint: "Who talks more? Who asks questions? Who gives orders?",
            modelAnswer:
              "Nia does most of the talking: she asks questions ('Exams finished, then?') and offers information about Mum and the banner, so she drives the conversation and probes for the truth. Sam's replies are clipped and evasive ('Change of plan.', 'Something like that.'), showing he wants to say as little as possible. Nia is also sharper and more confident; she ends the scene with a teasing command, 'Curly E's. Don't mess them up.', which shows she has taken charge and is protecting him in her own blunt way.",
            markScheme: [
              { point: "Nia asks questions / drives the conversation", keywords: ["questions", "exams finished", "drives", "probes", "talks more", "asks"] },
              { point: "Sam's replies are short/evasive, with evidence", keywords: ["short", "clipped", "evasive", "change of plan", "something like that", "few words"] },
              { point: "Nia's confidence/bluntness/teasing", keywords: ["blunt", "confident", "teasing", "command", "don't mess them up", "in charge"] },
              { point: "Explains what the difference shows about their relationship", keywords: ["protect", "relationship", "takes charge", "younger", "older", "role reversal"] },
            ],
            commonError: "Making general statements ('Nia is nicer') without analysing how vocabulary and sentence length create the voices.",
            guideRef: "dialogue-voice",
          },
          {
            id: "scr-qa-p2-q08",
            question: "Find one pause or silence in the scene and explain its effect. (2 marks)",
            marks: 2,
            hint: "Look for (Pause.) or a moment when characters do something without speaking.",
            modelAnswer:
              "'(Pause. SAM opens the cupboard. Looks. Closes it.)' The pause slows the pace as Sam sees the banner celebrating a success he has not achieved, letting the weight of his mother's expectations sink in for the audience.",
            markScheme: [
              { point: "Identifies a pause/silence", keywords: ["pause", "silence", "not speaking", "cupboard", "without speaking", "freeze"] },
              { point: "Explains its effect (slows pace, lets emotion sink in, tension)", keywords: ["slow", "sink in", "tension", "weight", "realis", "emotion", "pace"] },
            ],
            commonError: "Identifying the pause without explaining its effect.",
            guideRef: "pace-structure",
          },
          {
            id: "scr-qa-p2-q09",
            question: "The scene ends: '(They ice side by side, not speaking. Lights fade slowly.)' Explain why this ending is effective and what it shows about Nia and Sam. (4 marks)",
            marks: 4,
            hint: "Compare a slow fade with a blackout. What does working side by side suggest?",
            modelAnswer:
              "The slow fade lets the moment linger, giving a quiet, tender ending instead of a shock. Working 'side by side' shows that the siblings are now united in keeping the secret: Nia has chosen to protect Sam. The silence suggests they understand each other without needing words, which is a final example of subtext. However, the problem has not been solved, because Mum still does not know, so the ending leaves a gentle unanswered question about what will happen when she finds out.",
            markScheme: [
              { point: "Slow fade creates a quiet, lingering/tender mood", keywords: ["fade", "linger", "quiet", "gentle", "tender", "calm"] },
              { point: "Side by side shows unity/alliance", keywords: ["side by side", "united", "together", "alliance", "team", "support"] },
              { point: "Silence as subtext / understanding without words", keywords: ["silence", "not speaking", "without words", "subtext", "understand"] },
              { point: "Problem unresolved / question left for the audience", keywords: ["unresolved", "mum still", "doesn't know", "question", "find out", "next"] },
            ],
            commonError: "Saying the ending is 'happy' and missing that the central problem is unresolved.",
            guideRef: "pace-structure",
          },
          {
            id: "scr-qa-p2-q10",
            question: "Write the next 6–8 lines of the scene, in which Mum enters. Keep the subtext: Sam must not directly say what has happened. (5 marks)",
            marks: 5,
            hint: "Correct layout, distinct voices, at least one stage direction, subtext, and a hook at the end.",
            modelAnswer:
              "(MUM enters, untying an apron. She sees SAM. Stops.)\nMUM: Sam?\nSAM: Hi, Mum.\nMUM: (hugging him, then holding him at arm's length) Look at you. Thin. Are they not feeding you up there?\nSAM: Not really.\nMUM: Well. Christmas came early. (She notices the rucksack behind the door. Her smile stays, but she does not move.) That's a big bag. For a visit.\n(NIA's piping bag freezes mid-letter.)\nSAM: Mum. Can we sit down?",
            markScheme: [
              { point: "Correct script layout (names in capitals, no speech marks)", keywords: ["mum:", "sam:", "nia:", "enters"] },
              { point: "At least one present-tense stage direction", keywords: ["(she", "(he", "enters", "notices", "hugging", "freezes", "stops"] },
              { point: "Subtext: the truth is hinted but not stated", keywords: ["big bag", "rucksack", "for a visit", "not really", "christmas came early", "can we sit down"] },
              { point: "Distinct voice for Mum", keywords: ["look at you", "thin", "feeding you", "love", "pet", "proud", "engineer"] },
              { point: "Ends on a hook/cliffhanger", keywords: ["sit down", "freezes", "can we", "need to tell", "silence", "blackout"] },
            ],
            commonError: "Having Sam blurt out 'I've dropped out of university', which destroys the subtext.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-qa-p2-q11",
            question: "Write a commentary paragraph explaining one choice in your continuation (or in the original scene) using the CQTEL structure. (5 marks)",
            marks: 5,
            hint: "Choice, Quote, Term, Effect. For the Link, connect to how the earlier part of the scene set it up.",
            modelAnswer:
              "I chose to have Mum notice the rucksack rather than have Sam confess, because the rucksack had already become a symbol of his secret. When she says 'That's a big bag. For a visit.', the line carries subtext: she is beginning to suspect, but neither of them names the truth. The stage direction 'Her smile stays, but she does not move' shows the gap between her words and her feelings. I intended the audience to realise that Mum may already half-know, which creates dramatic irony and tension. This links back to the opening, where Sam 'Pushes it behind the door', so the hidden object finally exposes him.",
            markScheme: [
              { point: "States the choice", keywords: ["i chose", "i decided", "i wanted", "my choice", "i used"] },
              { point: "Quotes own script", keywords: ["big bag", "for a visit", "my line", "for example", "says"] },
              { point: "Names a technique", keywords: ["subtext", "dramatic irony", "symbol", "prop", "stage direction", "cliffhanger"] },
              { point: "Explains intended effect", keywords: ["audience", "intended", "tension", "realise", "feel", "effect"] },
              { point: "Links to earlier in the scene / the original", keywords: ["links", "opening", "earlier", "behind the door", "set up", "original"] },
            ],
            commonError: "Retelling the continuation instead of explaining one choice in depth.",
            guideRef: "writing-commentary",
          },
          {
            id: "scr-qa-p2-q12",
            question: "'Saturday Shift is powerful because of what the characters do not say.' How far do you agree? Evaluate the scene's use of subtext and suggest one improvement. (6 marks)",
            marks: 6,
            hint: "Agree with evidence, consider a limitation, judge, then suggest a specific improvement.",
            modelAnswer:
              "I largely agree. The scene's power comes from Sam's silence about university: his evasive 'Something like that' and the hidden rucksack let the audience piece the truth together, which makes them active and tense. Nia's lie, 'Just the wind, Mum!', reveals her loyalty without any speech about sibling love, and the final silent icing shows their alliance more movingly than words could. The banner is especially effective because a visual prop carries the weight of Mum's pride. However, there is a risk that some audience members might not be certain what Sam has done, since 'engineer' and 'exams' are the only clues; one could argue the scene relies on the audience being very attentive. Overall, the subtext is the scene's greatest strength. To improve it, I would add a moment where Sam's phone buzzes with a message he rejects, labelled on screen as 'University Admissions', which would confirm the secret visually without anyone saying it.",
            markScheme: [
              { point: "Agrees/disagrees with a clear position", keywords: ["i agree", "i largely agree", "i disagree", "to a great extent", "i partly agree"] },
              { point: "Evidence of subtext in Sam's dialogue/action", keywords: ["something like that", "rucksack", "change of plan", "has she", "evasive"] },
              { point: "Evidence of subtext in Nia's lie or the silent ending", keywords: ["just the wind", "lie", "side by side", "silent", "not speaking", "curly e"] },
              { point: "Considers a limitation/counter-argument", keywords: ["however", "risk", "might not", "unclear", "confus", "on the other hand"] },
              { point: "Reaches a judgement", keywords: ["overall", "on balance", "ultimately", "greatest strength", "in conclusion"] },
              { point: "Suggests a specific, justified improvement", keywords: ["improve", "i would add", "i would change", "could add", "phone", "would make"] },
            ],
            commonError: "Agreeing without any evaluation of limitations, or suggesting a vague improvement such as 'make it longer'.",
            guideRef: "dramatic-devices",
          },
        ],
      },
      {
        id: "scr-qa-p3",
        title: "Written Paper 3",
        passage: OPHELIA_REMEMBRANCES,
        questions: [
          {
            id: "scr-qa-p3-q01",
            question: "Where and when is this scene set, and how does the opening stage direction establish the mood? (2 marks)",
            marks: 2,
            hint: "Look at the first line before any dialogue.",
            modelAnswer:
              "It is set in Ophelia's chamber at night. The 'single candle' creates a dim, lonely, intimate mood, suggesting Ophelia's isolation and fragility.",
            markScheme: [
              { point: "Identifies setting: Ophelia's chamber at night", keywords: ["chamber", "bedroom", "room", "night"] },
              { point: "Explains mood created (single candle: lonely, intimate, fragile)", keywords: ["candle", "dim", "lonely", "isolat", "intimate", "dark", "fragile"] },
            ],
            commonError: "Giving the setting but not explaining the mood it creates.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-qa-p3-q02",
            question: "Identify three ways this missing scene echoes or links to Shakespeare's Hamlet. (3 marks)",
            marks: 3,
            hint: "Read the note under the passage, and think about who is offstage.",
            modelAnswer:
              "First, Ophelia quotes Hamlet's denial 'I never gave you aught' from Act 3 Scene 1. Second, she reads 'Doubt thou the stars are fire', the line from Hamlet's love letter that Polonius read to the King and Queen in Act 2 Scene 2. Third, 'Walk here, Ophelia. Read this, Ophelia' echoes Polonius's instructions 'Ophelia, walk you here' and his giving her a book before the meeting with Hamlet.",
            markScheme: [
              { point: "Echo of 'I never gave you aught' (3.1)", keywords: ["never gave you aught", "aught", "act 3 scene 1", "denies", "denial"] },
              { point: "Echo of Hamlet's letter 'Doubt thou the stars are fire' (2.2)", keywords: ["stars are fire", "doubt thou", "letter", "act 2 scene 2", "read aloud"] },
              { point: "Echo of Polonius's instructions / the book / spying", keywords: ["walk you here", "walk here", "book", "polonius", "hid", "listened", "spying"] },
            ],
            commonError: "Listing general similarities ('Ophelia is in it') rather than specific echoes.",
            guideRef: "adapting-shakespeare",
          },
          {
            id: "scr-qa-p3-q03",
            question: "How does the writer use the letters as a prop to show Ophelia's feelings? (4 marks)",
            marks: 4,
            hint: "Track what she does with them: untie, read, fold, nearly burn.",
            modelAnswer:
              "The letters are physical proof of Hamlet's love, so when Ophelia asks 'Then whose hand is this?' they expose his denial as a lie. She reads one 'half-smiling despite herself', showing she still loves him. Folding a letter 'very small' suggests she is trying to shrink the painful memory, or that she feels made small herself. Finally, holding one to the flame and stopping shows her torn between destroying the past and keeping it, a moment of internal conflict played out through an object rather than words.",
            markScheme: [
              { point: "Letters as proof of Hamlet's love / expose his denial", keywords: ["proof", "evidence", "whose hand", "lie", "denial", "love"] },
              { point: "Reading 'half-smiling' shows she still loves him", keywords: ["half-smiling", "smile", "still loves", "despite herself", "fond"] },
              { point: "Folding it 'very small' (shrinking memory / herself)", keywords: ["folds", "very small", "shrink", "small", "diminish", "hide"] },
              { point: "Near-burning shows internal conflict", keywords: ["flame", "burn", "candle", "torn", "internal conflict", "hesitat", "stops"] },
            ],
            commonError: "Saying the letters are 'important' without tracking how each action with them reveals a feeling.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-qa-p3-q04",
            question: "Explain the effect of 'Walk here, Ophelia. Read this, Ophelia. Give these back, Ophelia.' followed by 'No one has ever said: speak, Ophelia.' (3 marks)",
            marks: 3,
            hint: "Look at the pattern, the verbs and what breaks the pattern.",
            modelAnswer:
              "The three commands form a rule of three, with repeated imperatives and her name at the end of each, mimicking how she is constantly ordered about. Repetition makes the commands sound relentless and controlling. The beat and the final line break the pattern: 'speak' is the one command no one gives her, which reveals the play's central injustice for Ophelia, that she is never allowed her own voice. The adaptation's purpose is summed up in that line.",
            markScheme: [
              { point: "Identifies the rule of three / repeated imperatives / repetition of her name", keywords: ["rule of three", "triple", "repetition", "imperative", "command", "repeated"] },
              { point: "Explains the effect: relentless control by others", keywords: ["control", "ordered", "told what to do", "relentless", "powerless", "instructed"] },
              { point: "Explains the final line: she is never allowed to speak / her voice", keywords: ["voice", "never asked", "never allowed", "silenced", "unheard", "own view"] },
            ],
            commonError: "Spotting repetition without explaining why the final line breaks the pattern.",
            guideRef: "dialogue-voice",
          },
          {
            id: "scr-qa-p3-q05",
            question: "Ophelia walks 'to the exact spot, downstage centre, where she stood before' and looks out at the audience. Explain the effect of this blocking. (4 marks)",
            marks: 4,
            hint: "Why downstage centre? Why the same spot? Why look at the audience?",
            modelAnswer:
              "Downstage centre is the most powerful and intimate position on stage, closest to the audience, so the moment feels like a direct confession. Returning to the exact spot where she was placed for Hamlet's rejection suggests she is reliving it, trapped by the memory. Looking out at the audience turns them into the listeners who were hiding before, which can make them feel uncomfortable, almost like spies. At the same time, it gives Ophelia control of the stage for the first time.",
            markScheme: [
              { point: "Downstage centre: powerful/intimate/close to the audience", keywords: ["downstage centre", "close to the audience", "closest", "intimate", "powerful", "direct"] },
              { point: "Returning to the same spot: reliving/trapped by memory", keywords: ["same spot", "reliving", "memory", "trapped", "where she stood", "remember"] },
              { point: "Looking at the audience: direct address / audience as spies", keywords: ["looks out", "audience", "direct address", "spies", "watching", "uncomfortable"] },
              { point: "Shows a shift in power/control for Ophelia", keywords: ["control", "power", "takes the stage", "for the first time", "her own", "agency"] },
            ],
            commonError: "Confusing downstage (near the audience) with upstage.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-qa-p3-q06",
            question: "How does the writer build tension in the moment Ophelia holds a letter close to the candle? (3 marks)",
            marks: 3,
            hint: "Think about the knocks, fire and the ellipsis.",
            modelAnswer:
              "The 'three sharp knocks' and Polonius's offstage voice interrupt the private moment, raising the threat of being caught. Holding a letter near the flame creates suspense because the audience does not know if she will destroy Hamlet's love letters. The ellipsis in '... and stops' stretches the moment out before the decision, slowing the pace so the audience holds its breath.",
            markScheme: [
              { point: "The knocks/offstage voice interrupt and threaten discovery", keywords: ["knock", "polonius", "offstage", "interrupt", "caught", "discover"] },
              { point: "The flame creates suspense: will she burn the letters?", keywords: ["flame", "burn", "fire", "destroy", "suspense", "will she"] },
              { point: "The ellipsis/pause slows the pace before the decision", keywords: ["ellipsis", "pause", "slow", "stops", "hesitat", "holds"] },
            ],
            commonError: "Describing the action without explaining how it affects the audience.",
            guideRef: "pace-structure",
          },
          {
            id: "scr-qa-p3-q07",
            question: "Explain the subtext and dramatic irony of Ophelia's final line, '(calling, brightly) Yes, father. Fast asleep.' (4 marks)",
            marks: 4,
            hint: "Is she asleep? Who knows the truth? What does 'brightly' show?",
            modelAnswer:
              "The line is an obvious lie, since she is awake, and the joke of claiming to be 'Fast asleep' while speaking is darkly comic. The parenthetical 'brightly' shows her putting on the obedient, cheerful mask her father expects. The dramatic irony is that the audience has just seen her real anger and grief, which Polonius knows nothing about. The subtext is that she has learned to hide herself to survive, and her small lie is perhaps her first act of rebellion.",
            markScheme: [
              { point: "Identifies the lie / comedy of claiming to be asleep", keywords: ["lie", "lying", "awake", "not asleep", "comic", "joke"] },
              { point: "Explains 'brightly' as a mask of obedience", keywords: ["brightly", "mask", "obedient", "cheerful", "pretend", "act"] },
              { point: "Explains dramatic irony: the audience knows her true feelings; Polonius does not", keywords: ["dramatic irony", "audience knows", "polonius doesn't", "does not know", "unaware"] },
              { point: "Interprets the subtext: hiding to survive / small rebellion", keywords: ["rebellion", "rebel", "hide", "survive", "defy", "resist", "secret"] },
            ],
            commonError: "Explaining that she is lying without connecting it to the gap between the audience's and Polonius's knowledge.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-qa-p3-q08",
            question: "Why is it effective that Polonius is only heard '(off)' and never seen in this scene? (2 marks)",
            marks: 2,
            hint: "Think about focus and about how he controls Ophelia.",
            modelAnswer:
              "Keeping Polonius offstage keeps the focus entirely on Ophelia, giving her the stage for once. His disembodied voice also suggests that his control reaches her even when he is not present, which makes him feel like a constant, invisible pressure.",
            markScheme: [
              { point: "Keeps the focus on Ophelia", keywords: ["focus", "ophelia's stage", "her scene", "centre", "her voice"] },
              { point: "Suggests his control/presence is constant even when unseen", keywords: ["control", "presence", "invisible", "always there", "pressure", "unseen", "watching"] },
            ],
            commonError: "Saying it is because Polonius is dead: he is still alive at this point in the play (he dies in Act 3 Scene 4).",
            guideRef: "stagecraft",
          },
          {
            id: "scr-qa-p3-q09",
            question: "Suggest two lighting or sound cues you would add to this scene (beyond those already there) and explain the effect of each. (4 marks)",
            marks: 4,
            hint: "Think about the moment she reads the letter and the moment she looks out at the audience.",
            modelAnswer:
              "When Ophelia reads 'Doubt thou the stars are fire', I would add (Faintly, off, the sound of court music and laughter.) This contrasts her loneliness with the celebrating court and suggests the world carries on without her. When she moves downstage centre, I would add (The candlelight fades; a narrow, cold spotlight finds her.) This isolates her and makes her speech to the audience feel like a confession, separating her inner truth from the room around her.",
            markScheme: [
              { point: "First lighting/sound cue written as a direction", keywords: ["music", "sound", "laughter", "off", "bell", "wind", "clock"] },
              { point: "Explains the first cue's effect", keywords: ["contrast", "lonely", "isolat", "mood", "atmosphere", "carries on"] },
              { point: "Second lighting/sound cue written as a direction", keywords: ["spotlight", "light", "fade", "dim", "blackout", "flicker"] },
              { point: "Explains the second cue's effect", keywords: ["isolat", "focus", "confession", "intimate", "alone", "separate"] },
            ],
            commonError: "Repeating the cues already in the scene (the candle and the blackout).",
            guideRef: "stagecraft",
          },
          {
            id: "scr-qa-p3-q10",
            question: "Write the introduction to a commentary on this scene, as if you had written it. Cover where it fits in Hamlet, your purpose, your audience and your viewpoint. (5 marks)",
            marks: 5,
            hint: "Four or five sentences: place, purpose, audience, viewpoint, a preview of key techniques.",
            modelAnswer:
              "My scene is a missing scene from Hamlet, set on the night after Act 3 Scene 1, when Hamlet rejects Ophelia while her father and the King secretly listen. Shakespeare gives her only a brief soliloquy grieving for Hamlet ('O, what a noble mind is here o'erthrown!'); we never hear what she feels about being used by her father, and the next time she speaks at length, in Act 4, she has lost her mind. My purpose was to give her the voice the play denies her, and to show how she is used by the men around her. I wrote for a modern audience who know the play, so that they recognise the echoes of Hamlet's letters and Polonius's commands. By telling the scene from Ophelia's point of view, using a soliloquy, symbolic props and a final moment of quiet defiance, I wanted the audience to see her not as a victim only, but as someone beginning to resist.",
            markScheme: [
              { point: "Places the scene in the play (after 3.1 / missing scene)", keywords: ["act 3 scene 1", "missing scene", "after hamlet rejects", "after the nunnery", "between act 3"] },
              { point: "States the purpose", keywords: ["purpose", "i wanted", "my aim", "to give her", "voice", "to show"] },
              { point: "Identifies the audience", keywords: ["audience", "modern", "teenage", "who know the play", "readers"] },
              { point: "Identifies the viewpoint/perspective", keywords: ["point of view", "perspective", "viewpoint", "ophelia's", "her side", "through her eyes"] },
              { point: "Previews key techniques", keywords: ["soliloquy", "props", "symbol", "dramatic irony", "subtext", "stagecraft", "blocking"] },
            ],
            commonError: "Summarising the scene's plot rather than setting out purpose and audience.",
            guideRef: "writing-commentary",
          },
          {
            id: "scr-qa-p3-q11",
            question: "Imagine Polonius enters instead of calling from off. Write a 6–8 line exchange between Polonius and Ophelia using stichomythia, and explain its effect in one sentence. (5 marks)",
            marks: 5,
            hint: "Short, alternating lines. Polonius is fussy and controlling; Ophelia is hiding the letters.",
            modelAnswer:
              "(POLONIUS enters with a lamp. OPHELIA sits on the letters.)\nPOLONIUS: You are not abed.\nOPHELIA: I could not sleep.\nPOLONIUS: What is that?\nOPHELIA: Nothing, father.\nPOLONIUS: Nothing has corners.\nOPHELIA: Old letters.\nPOLONIUS: His?\nOPHELIA: (beat) Mine.\n\nThe stichomythia speeds the pace like an interrogation, showing Polonius's control and Ophelia's quick defensiveness, until her final claim 'Mine' becomes a small act of defiance.",
            markScheme: [
              { point: "Uses correct script layout with a stage direction", keywords: ["polonius:", "ophelia:", "enters", "(polonius", "sits", "(ophelia"] },
              { point: "Uses stichomythia: short alternating lines", keywords: ["nothing", "his?", "mine", "short lines", "stichomythia"] },
              { point: "Distinct voices: Polonius controlling, Ophelia guarded", keywords: ["what is that", "not abed", "father", "my lord", "controlling", "guarded"] },
              { point: "Creates tension around the hidden letters", keywords: ["letters", "hide", "sits on", "corners", "hidden", "secret"] },
              { point: "Explains the effect of the stichomythia", keywords: ["pace", "interrogation", "tension", "control", "defiance", "speed"] },
            ],
            commonError: "Writing long speeches instead of short, alternating lines, or having Ophelia meekly confess everything.",
            guideRef: "speech-forms",
          },
          {
            id: "scr-qa-p3-q12",
            question: "To what extent does this missing scene stay faithful to Shakespeare's Ophelia while also changing how we see her? Evaluate. (6 marks)",
            marks: 6,
            hint: "What does it keep from the original? What does it add? Is the change justified?",
            modelAnswer:
              "The scene is faithful in several ways. It keeps the events of the play: Hamlet's denial ('I never gave you aught'), Polonius reading the love letter to the King and Queen, and the spying. It also keeps Ophelia's outward obedience, since she still answers her father 'brightly' and does what she is told. However, the scene changes how we see her by giving her a private, angry voice that Shakespeare's Ophelia rarely has: lines such as 'They hid and listened while he broke me' show sharp awareness of how she has been used. The final lie is a small act of resistance not found in the original. I think this change is justified, because it grows from real gaps in the play rather than contradicting it, and it helps a modern audience question why Ophelia is so silenced. One limitation is that her clear-headed anger makes her later madness in Act 4 harder to explain, so a writer might hint at her fragility too. Overall, it is faithful to the events but radically rethinks her inner life.",
            markScheme: [
              { point: "Faithful to events (denial, letter, spying)", keywords: ["faithful", "never gave you aught", "letter", "spying", "events", "keeps"] },
              { point: "Faithful to her outward obedience", keywords: ["obedient", "obedience", "brightly", "does what she is told", "yes, father", "submissive"] },
              { point: "Changes: gives her a private, angry voice, with evidence", keywords: ["voice", "angry", "broke me", "speak, ophelia", "aware", "inner life"] },
              { point: "Identifies the final lie/act as new resistance", keywords: ["lie", "resist", "rebellion", "defiance", "fast asleep", "new"] },
              { point: "Considers a limitation (e.g. her later madness)", keywords: ["however", "limitation", "madness", "act 4", "fragile", "harder to explain"] },
              { point: "Reaches a judgement on the extent", keywords: ["overall", "to a large extent", "i think", "justified", "on balance", "ultimately"] },
            ],
            commonError: "Listing similarities and differences without weighing them up or reaching a judgement.",
            guideRef: "adapting-shakespeare",
          },
        ],
      },
      {
        id: "scr-qa-p4",
        title: "Written Paper 4",
        questions: [
          {
            id: "scr-qa-p4-q01",
            question: "Define subtext and give an original example of a line of dialogue that uses it. (2 marks)",
            marks: 2,
            hint: "A line where the words and the real meaning differ.",
            modelAnswer:
              "Subtext is the meaning beneath a character's words: what they really think or feel but do not say. For example: (Her best friend shows off a new necklace from someone else.) PRIYA: It's lovely. Really. You must be so happy. The words are kind, but the subtext is jealousy and hurt.",
            markScheme: [
              { point: "Defines subtext: hidden meaning beneath the words", keywords: ["beneath", "underneath", "hidden meaning", "really means", "unspoken", "doesn't say"] },
              { point: "Gives an example where words and meaning differ, with explanation", keywords: ["for example", "e.g", "but means", "fine", "jealous", "actually means"] },
            ],
            commonError: "Defining subtext as 'the text underneath the main text', which doesn't explain anything.",
            guideRef: "dramatic-devices",
          },
          {
            id: "scr-qa-p4-q02",
            extract: "Scene: in the garden it was a sunny day\nEMMA: \"Have you seen my phone?\" She asked.\n(Jack looked under the bench and thought about lying)",
            question: "Identify three errors in the layout or conventions of this script extract and correct them. (3 marks)",
            marks: 3,
            hint: "Check the scene heading, the dialogue and the stage direction.",
            modelAnswer:
              "1. The scene heading is written like a story; it should be brief: 'SCENE 1. A garden. A sunny afternoon.' 2. Emma's line uses speech marks and 'She asked'; it should be: EMMA: Have you seen my phone? 3. The stage direction is in the past tense and includes an unstageable thought; it should be: (JACK looks under the bench. Hesitates.)",
            markScheme: [
              { point: "Corrects the scene heading (brief, place/time)", keywords: ["scene heading", "scene 1", "place and time", "a garden", "brief"] },
              { point: "Removes speech marks / 'she asked'", keywords: ["speech marks", "she asked", "reporting", "remove the", "no speech marks"] },
              { point: "Fixes the stage direction: present tense / remove the thought", keywords: ["present tense", "past tense", "looks", "thought", "can't be seen", "cannot be seen", "hesitates"] },
            ],
            commonError: "Spotting errors but not writing the corrected version.",
            guideRef: "script-conventions",
          },
          {
            id: "scr-qa-p4-q03",
            extract:
              "Grandad sat in his armchair, staring at the old photograph of his wife. He missed her terribly. When Lucy came in, he quickly hid the photo, because he didn't want her to see him cry. \"Hello, love,\" he said, trying to sound cheerful.",
            question: "Rewrite this extract as a script. Show Grandad's feelings without stating them. (4 marks)",
            marks: 4,
            hint: "Turn 'missed her terribly' and 'didn't want her to see him cry' into visible actions.",
            modelAnswer:
              "(GRANDAD sits in an armchair, holding a framed photograph. He traces the face with one finger. LUCY enters. He slides the photo under a cushion and sits up straight.)\nGRANDAD: (too brightly) Hello, love! Kettle's on, is it?\nLUCY: Grandad... is that Nan's picture?\nGRANDAD: (not looking at the cushion) What picture?",
            markScheme: [
              { point: "Correct script layout (names in capitals, no speech marks)", keywords: ["grandad:", "lucy:", "grandad :", "lucy :", "no speech marks", "capitals"] },
              { point: "Present-tense stage directions", keywords: ["sits", "enters", "slides", "holds", "traces", "hides"] },
              { point: "Turns grief into visible action (e.g. touching the photo)", keywords: ["traces", "touches", "stares", "photo", "photograph", "holds"] },
              { point: "Shows the cover-up through action/subtext (hiding photo, forced cheer)", keywords: ["slides", "hides", "cushion", "too brightly", "what picture", "cheerful"] },
            ],
            commonError: "Keeping 'he missed her terribly' as a stage direction.",
            guideRef: "stage-directions",
          },
          {
            id: "scr-qa-p4-q04",
            question: "Explain the difference between a monologue, a soliloquy and an aside. (3 marks)",
            marks: 3,
            hint: "Think about the length of each, and who can hear it.",
            modelAnswer:
              "A monologue is a long, uninterrupted speech by one character, which can be addressed to other characters on stage or to the audience. A soliloquy is a speech by a character alone on stage, sharing private thoughts that the audience takes to be honest. An aside is a short remark made while other characters are on stage, heard only by the audience (or one chosen character).",
            markScheme: [
              { point: "Monologue: long speech, may be addressed to others", keywords: ["monologue", "long speech", "to other characters", "uninterrupted", "addressed"] },
              { point: "Soliloquy: alone on stage, private thoughts", keywords: ["soliloquy", "alone", "private thoughts", "by themselves", "honest"] },
              { point: "Aside: short remark others on stage do not hear", keywords: ["aside", "short", "others don't hear", "do not hear", "only the audience", "brief"] },
            ],
            commonError: "Mixing up a soliloquy and a monologue by saying both are just 'long speeches'.",
            guideRef: "speech-forms",
          },
          {
            id: "scr-qa-p4-q05",
            question: "In a staging of The Tempest, Prospero stands upstage on a raised rock and Caliban enters downstage left. Explain what these positions mean and the effect of this blocking. (4 marks)",
            marks: 4,
            hint: "Define upstage, downstage left and levels, then explain the effect.",
            modelAnswer:
              "Upstage is the back of the stage, furthest from the audience, and the raised rock gives Prospero a higher level, showing his power and control over the island. Downstage left is at the front of the stage on the actor's left, which is the audience's right. Placing Caliban low and close to the audience could build sympathy, because we see his face clearly while Prospero looms behind. The distance and height between them shows the gulf in status and the hostility in their relationship.",
            markScheme: [
              { point: "Explains upstage (back, furthest from audience)", keywords: ["back of the stage", "furthest from the audience", "upstage", "away from the audience"] },
              { point: "Explains downstage left (front, actor's left/audience's right)", keywords: ["front", "nearest the audience", "actor's left", "audience's right", "downstage"] },
              { point: "Levels: Prospero higher shows power/status", keywords: ["higher", "raised", "levels", "power", "status", "dominan"] },
              { point: "Effect: sympathy for Caliban / distance shows hostility", keywords: ["sympathy", "closer to the audience", "distance", "hostility", "gulf", "looms"] },
            ],
            commonError: "Saying stage left is the audience's left.",
            guideRef: "stagecraft",
          },
          {
            id: "scr-qa-p4-q06",
            extract: "LADY CAPULET: As you know, Juliet, your cousin Tybalt, who was killed yesterday by Romeo Montague, who is now banished to Mantua, was very dear to us.",
            question: "Explain why this line is an 'exposition dump', and rewrite it so the information comes through emotion and conflict. (3 marks)",
            marks: 3,
            hint: "Would Lady Capulet really tell Juliet facts Juliet already knows?",
            modelAnswer:
              "It is an exposition dump because Lady Capulet tells Juliet things they both already know ('As you know') purely to inform the audience, which sounds unnatural. Rewrite: LADY CAPULET: Still weeping? Tybalt is in his grave and that villain breathes in Mantua. Dry your eyes. Your father has news. This works better because the facts slip out through her anger and grief while moving the scene forward.",
            markScheme: [
              { point: "Explains the problem: telling characters what they already know / for the audience", keywords: ["as you know", "already know", "for the audience", "unnatural", "information dump", "unrealistic"] },
              { point: "Rewrites with emotion/conflict", keywords: ["villain", "weeping", "grave", "dry your eyes", "how dare", "lady capulet:"] },
              { point: "Explains why the rewrite is better", keywords: ["emotion", "natural", "conflict", "slips out", "moves the scene", "realistic"] },
            ],
            commonError: "Rewriting the line but keeping all the same facts in one long, flat sentence.",
            guideRef: "dialogue-voice",
          },
          {
            id: "scr-qa-p4-q07",
            question: "Write a four-to-six line exchange between Prospero and Caliban using stichomythia, then explain the effect. (4 marks)",
            marks: 4,
            hint: "Short, sharp, alternating lines. Who wins the exchange?",
            modelAnswer:
              "PROSPERO: Fetch wood.\nCALIBAN: My island.\nPROSPERO: My orders.\nCALIBAN: My mother's land.\nPROSPERO: Your mother's dead.\n(Silence. CALIBAN picks up the wood.)\n\nThe stichomythia makes the exchange feel like a fight with words, speeding up the pace and raising tension. The repeated 'My' shows them battling for ownership, and Prospero's cruel final line wins the exchange, showing his power.",
            markScheme: [
              { point: "Correct layout with short alternating lines", keywords: ["prospero:", "caliban:", "prospero :", "caliban :", "short lines", "alternat"] },
              { point: "Content reflects their conflict (ownership/power)", keywords: ["island", "mine", "orders", "mother", "sycorax", "slave", "wood"] },
              { point: "Explains effect on pace/tension", keywords: ["pace", "tension", "fast", "quick", "speed", "fight"] },
              { point: "Explains what the exchange shows about power", keywords: ["power", "wins", "control", "ownership", "battle", "dominat"] },
            ],
            commonError: "Writing long speeches, which is not stichomythia.",
            guideRef: "speech-forms",
          },
          {
            id: "scr-qa-p4-q08",
            question: "Plan a 'Caliban's version' scene. State which moment you would dramatise, whose viewpoint you would use, one quotation you would echo and why. (4 marks)",
            marks: 4,
            hint: "Moment, viewpoint, quotation, purpose.",
            modelAnswer:
              "I would dramatise Prospero's first arrival on the island, a moment only described in the original. I would tell it from Caliban's viewpoint, with Caliban as a young boy speaking directly to the audience. I would echo 'Thou strok'st me and made much of me' by showing Prospero gently teaching Caliban the names of the sun and moon. My purpose is to show the kindness that came before the betrayal, so the audience understands why Caliban feels so cheated when Prospero later takes control.",
            markScheme: [
              { point: "Chooses a specific moment", keywords: ["arrival", "first arrives", "moment", "scene", "when prospero", "first met"] },
              { point: "States the viewpoint", keywords: ["viewpoint", "point of view", "caliban's", "perspective", "through his eyes"] },
              { point: "Names a quotation to echo", keywords: ["this island's mine", "strok'st me", "taught me language", "bigger light", "curse", "sycorax"] },
              { point: "Explains the purpose/effect", keywords: ["purpose", "so that", "sympathy", "betrayal", "audience", "understand"] },
            ],
            commonError: "Choosing a moment without saying why it matters or how it links to the original.",
            guideRef: "adapting-shakespeare",
          },
          {
            id: "scr-qa-p4-q09",
            question: "Why is it a problem if every character in a script sounds the same? Suggest one way to fix it. (2 marks)",
            marks: 2,
            hint: "What does the audience lose if voices are identical?",
            modelAnswer:
              "If every character sounds the same, the audience cannot tell them apart or learn about their personalities through how they speak, so the characters feel flat. To fix it, give each a distinct voice, for example making one speak in short, blunt commands and another in long, rambling sentences with a catchphrase.",
            markScheme: [
              { point: "Explains the problem (flat characters / hard to tell apart)", keywords: ["tell apart", "flat", "same", "personality", "confus", "boring", "unrealistic"] },
              { point: "Suggests a fix (vocabulary, sentence length, catchphrase, dialect)", keywords: ["vocabulary", "sentence length", "catchphrase", "dialect", "slang", "formal", "distinct voice"] },
            ],
            commonError: "Suggesting stage directions like '(in a different voice)' instead of changing the dialogue itself.",
            guideRef: "dialogue-voice",
          },
          {
            id: "scr-qa-p4-q10",
            question: "Write a commentary paragraph explaining how you used proxemics or levels in an adaptation of The Tempest or Hamlet. Use CQTEL. (5 marks)",
            marks: 5,
            hint: "Quote your stage direction as your evidence.",
            modelAnswer:
              "I chose to use levels to show the shift in power at the end of my Tempest adaptation. In the final moment, my stage direction reads '(PROSPERO steps down from the rock and kneels to CALIBAN's height.)' This change of levels reverses the staging of every earlier scene, where Prospero towered above Caliban. I intended the audience to read it as a silent apology, showing Prospero giving up his dominance without a single word. This links to Shakespeare's Act 5, where Prospero says of Caliban, 'this thing of darkness I / Acknowledge mine', a moment that critics interpret either as ownership or as Prospero accepting responsibility; my staging chooses the second reading.",
            markScheme: [
              { point: "States the choice (proxemics/levels)", keywords: ["i chose", "i used", "i decided", "levels", "proxemics"] },
              { point: "Quotes own stage direction", keywords: ["steps down", "kneels", "my stage direction", "reads", "(prospero", "(ophelia", "(hamlet"] },
              { point: "Uses technical terminology accurately", keywords: ["levels", "proxemics", "blocking", "status", "upstage", "downstage"] },
              { point: "Explains intended effect on the audience", keywords: ["intended", "audience", "read it as", "suggest", "effect", "feel"] },
              { point: "Links to the original play", keywords: ["shakespeare", "act 5", "thing of darkness", "original", "act 3", "the tempest"] },
            ],
            commonError: "Describing the movement but not explaining what it means or how it links to Shakespeare.",
            guideRef: "writing-commentary",
          },
          {
            id: "scr-qa-p4-q11",
            extract:
              "In my scene, Juliet comes home from the Friar's and she talks to the Nurse about the wedding. Then the Nurse goes and Juliet looks at the potion. I think my scene is good because it is very dramatic and the audience will like it. I used lots of techniques.",
            question: "Identify four weaknesses in this commentary extract and explain how to improve it. (5 marks)",
            marks: 5,
            hint: "Think about plot summary, evidence, terminology, effect and links to Shakespeare. The fifth mark is for a rewritten sentence.",
            modelAnswer:
              "First, it retells the plot ('Juliet comes home... Then the Nurse goes') instead of explaining choices. Second, it gives no quotations from the student's own script as evidence. Third, it claims 'lots of techniques' without naming any, such as dramatic irony or subtext. Fourth, it makes vague claims about effect ('very dramatic', 'the audience will like it') and has no link to Shakespeare. An improved sentence: 'I used dramatic irony when the Nurse says \"Your mother will weep\", because the audience knows the tears will be of grief, foreshadowing Act 4 Scene 5.'",
            markScheme: [
              { point: "Identifies plot summary/retelling", keywords: ["retell", "plot", "summary", "summaris", "what happens", "narrat"] },
              { point: "Identifies lack of quotation/evidence from the script", keywords: ["no quot", "evidence", "quote", "no examples", "quotation"] },
              { point: "Identifies lack of named techniques/terminology", keywords: ["terminology", "techniques", "doesn't name", "name the", "dramatic irony", "subtext"] },
              { point: "Identifies vague effect and/or no link to Shakespeare", keywords: ["vague", "very dramatic", "will like it", "no link", "shakespeare", "effect"] },
              { point: "Provides an improved sentence", keywords: ["i used", "because the audience", "for example", "improved", "act 4", "instead"] },
            ],
            commonError: "Saying the extract is 'too short' rather than identifying specific weaknesses.",
            guideRef: "writing-commentary",
          },
          {
            id: "scr-qa-p4-q12",
            question: "'An adaptation of Shakespeare should always keep his original language.' Discuss, referring to at least one real adaptation, and conclude with your own view. (6 marks)",
            marks: 6,
            hint: "Arguments for, arguments against, real examples, then a judgement.",
            modelAnswer:
              "Some argue that Shakespeare's language is the heart of his plays, so an adaptation that removes it loses the poetry. Baz Luhrmann's Romeo + Juliet (1996) supports this: it sets the story among guns and cars but keeps the original words, and the clash between old language and modern setting makes the lines feel urgent rather than dusty. On the other hand, West Side Story replaces every word, yet it keeps the dramatic core of two lovers destroyed by a feud, showing that the story and emotions can survive a complete change of language and reach audiences who might never watch the original. Modern language can also make a change of viewpoint, like Caliban's version, feel personal and immediate. Overall, I believe an adaptation should not always keep the original language, but the strongest adaptations often blend the two: a mostly modern script in which one original line, such as 'This island's mine', lands with special force because it is the only Shakespeare we hear.",
            markScheme: [
              { point: "Argument for keeping the language (poetry, power)", keywords: ["poetry", "heart of", "language is", "keeps the original", "beauty", "power of the words"] },
              { point: "Real example supporting keeping the language", keywords: ["luhrmann", "romeo + juliet", "1996", "keeps the original words"] },
              { point: "Argument against (modern language reaches new audiences / dramatic core)", keywords: ["new audiences", "accessible", "modern language", "dramatic core", "understand", "relatable"] },
              { point: "Real example of changing the language", keywords: ["west side story", "lion king", "10 things", "a tempest", "césaire", "cesaire", "stoppard"] },
              { point: "Considers a blend / nuance", keywords: ["blend", "mix", "one original line", "both", "combine", "middle"] },
              { point: "Reaches a clear personal judgement", keywords: ["overall", "i believe", "in my view", "i think", "on balance", "ultimately"] },
            ],
            commonError: "Arguing only one side, or naming adaptations without explaining what they show.",
            guideRef: "adapting-shakespeare",
          },
        ],
      },
    ],
  },
};
