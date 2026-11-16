import type { Topic } from "../types";

// ---- Key texts (all public domain or original), reused in the guide, passages and papers ----

const TILBURY = {
  id: "elizabeth-tilbury",
  title: "Queen Elizabeth I: Speech to the Troops at Tilbury (1588)",
  source: "Elizabeth I, Tilbury, Essex, August 1588 (the best-known version, recorded by Dr Leonel Sharp)",
  text:
    "My loving people,\n\nWe have been persuaded by some that are careful of our safety, to take heed how we commit ourselves to armed multitudes, for fear of treachery; but I assure you I do not desire to live to distrust my faithful and loving people. Let tyrants fear. I have always so behaved myself that, under God, I have placed my chiefest strength and safeguard in the loyal hearts and good-will of my subjects; and therefore I am come amongst you, as you see, at this time, not for my recreation and disport, but being resolved, in the midst and heat of the battle, to live and die amongst you all; to lay down for my God, and for my kingdom, and for my people, my honour and my blood, even in the dust.\n\nI know I have the body but of a weak and feeble woman; but I have the heart and stomach of a king, and of a king of England too, and think foul scorn that Parma or Spain, or any prince of Europe, should dare to invade the borders of my realm; to which rather than any dishonour shall grow by me, I myself will take up arms, I myself will be your general, judge, and rewarder of every one of your virtues in the field.\n\nI know already, for your forwardness you have deserved rewards and crowns; and We do assure you on a word of a prince, they shall be duly paid you. In the meantime, my lieutenant general shall be in my stead, than whom never prince commanded a more noble or worthy subject; not doubting but by your obedience to my general, by your concord in the camp, and your valour in the field, we shall shortly have a famous victory over those enemies of my God, of my kingdom, and of my people.",
  note:
    "Context: the Spanish Armada threatened England in summer 1588, and an invasion army under the Duke of Parma waited in the Netherlands. Elizabeth visited her soldiers at Tilbury camp on the Thames. Glossary: disport = entertainment; stomach = courage, fighting spirit; Parma = the Spanish commander; forwardness = eagerness; crowns = coins (and rewards); in my stead = in my place; concord = harmony.",
};

const ANTONY = {
  id: "antony-funeral",
  title: "Mark Antony: 'Friends, Romans, countrymen'",
  source: "William Shakespeare, Julius Caesar (c.1599), Act 3 Scene 2",
  text:
    "Friends, Romans, countrymen, lend me your ears;\nI come to bury Caesar, not to praise him.\nThe evil that men do lives after them;\nThe good is oft interred with their bones;\nSo let it be with Caesar. The noble Brutus\nHath told you Caesar was ambitious:\nIf it were so, it was a grievous fault,\nAnd grievously hath Caesar answer'd it.\nHere, under leave of Brutus and the rest—\nFor Brutus is an honourable man;\nSo are they all, all honourable men—\nCome I to speak in Caesar's funeral.\nHe was my friend, faithful and just to me:\nBut Brutus says he was ambitious;\nAnd Brutus is an honourable man.\nHe hath brought many captives home to Rome\nWhose ransoms did the general coffers fill:\nDid this in Caesar seem ambitious?\nWhen that the poor have cried, Caesar hath wept:\nAmbition should be made of sterner stuff:\nYet Brutus says he was ambitious;\nAnd Brutus is an honourable man.\nYou all did see that on the Lupercal\nI thrice presented him a kingly crown,\nWhich he did thrice refuse: was this ambition?\nYet Brutus says he was ambitious;\nAnd, sure, he is an honourable man.\nI speak not to disprove what Brutus spoke,\nBut here I am to speak what I do know.\nYou all did love him once, not without cause:\nWhat cause withholds you then, to mourn for him?\nO judgment! thou art fled to brutish beasts,\nAnd men have lost their reason. Bear with me;\nMy heart is in the coffin there with Caesar,\nAnd I must pause till it come back to me.",
  note:
    "Context: Brutus and the conspirators have just assassinated Julius Caesar, claiming he was too ambitious. Brutus has calmly explained his reasons to the crowd of ordinary Romans (the plebeians) in prose, and the crowd cheers him. He allows Antony, Caesar's friend, to speak at the funeral on condition that he does not blame the conspirators. Brutus then leaves. Glossary: interred = buried; answer'd = paid the price for; under leave of = with the permission of; general coffers = the public treasury; the Lupercal = a Roman festival; thrice = three times.",
};

const HENRY = {
  id: "henry-breach",
  title: "King Henry: 'Once more unto the breach'",
  source: "William Shakespeare, Henry V (c.1599), Act 3 Scene 1 (lines from the opening and the close of the speech)",
  text:
    "Once more unto the breach, dear friends, once more;\nOr close the wall up with our English dead.\nIn peace there's nothing so becomes a man\nAs modest stillness and humility:\nBut when the blast of war blows in our ears,\nThen imitate the action of the tiger;\nStiffen the sinews, summon up the blood,\nDisguise fair nature with hard-favour'd rage;\nThen lend the eye a terrible aspect;\n[...]\nNow set the teeth and stretch the nostril wide,\nHold hard the breath and bend up every spirit\nTo his full height. On, on, you noblest English,\nWhose blood is fet from fathers of war-proof!\n[...]\nDishonour not your mothers; now attest\nThat those whom you call'd fathers did beget you.\n[...]\nI see you stand like greyhounds in the slips,\nStraining upon the start. The game's afoot:\nFollow your spirit, and upon this charge\nCry 'God for Harry, England, and Saint George!'",
  note:
    "Context: in 1415 King Henry V's English army is besieging the French port of Harfleur. The soldiers have already attacked a gap (breach) blasted in the town walls and been pushed back. Henry rallies them to charge again. [...] marks lines left out. Glossary: breach = a gap in a wall; sinews = muscles and tendons; hard-favour'd = ugly, grim; aspect = look, expression; fet = fetched, descended; of war-proof = proven in war; attest = prove; beget = father (a child); slips = leashes that hold hunting dogs; the game's afoot = the hunt has begun.",
};

const GETTYSBURG = {
  id: "gettysburg",
  title: "Abraham Lincoln: The Gettysburg Address (1863)",
  source: "Abraham Lincoln, Gettysburg, Pennsylvania, 19 November 1863",
  text:
    "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.\n\nNow we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.\n\nBut, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.",
  note:
    "Context: in July 1863 the Battle of Gettysburg, one of the bloodiest of the American Civil War, left thousands dead. Four months later President Lincoln spoke at the dedication of a new national cemetery there. The main speaker, Edward Everett, spoke for about two hours; Lincoln spoke for about two minutes. Glossary: four score and seven = 87 (a score is 20), so 87 years back from 1863 is 1776, the Declaration of Independence; consecrate / hallow = make holy; detract = take away; resolve = firmly decide. (American spelling 'honored' is kept as in the original.)",
};

const CUPS = {
  id: "every-cup-counts",
  title: "Every Cup Counts",
  source: "Original Year 8 competition speech written for this app",
  text:
    "[1] Last Tuesday, after lunch, I did something slightly strange. I put on a pair of rubber gloves, opened the canteen bins, and counted. Two hundred and twelve plastic cups. Two hundred and twelve, from one lunchtime, in one school, on one ordinary Tuesday.\n\n[2] Good afternoon, judges, teachers and fellow students. Today I want to persuade you that our canteen should ban single-use plastic by the end of this year. I have three reasons: the size of the problem, the ease of the solution, and the kind of school we want to be.\n\n[3] First, the size of the problem. If we throw away two hundred cups a day, that is a thousand a week and around thirty-eight thousand a school year. Every one of those cups will outlive us. Every one will outlive our children. Every one will still be drifting somewhere long after we have forgotten what we ate for lunch.\n\n[4] Secondly, the solution is easy. Some of you are thinking, 'But reusable bottles cost money.' That is true, at first. But a steel bottle costs about the same as a few weeks of plastic cups, and it lasts for years. Reusable is not the expensive choice; throwing away is the expensive choice.\n\n[5] Finally, this is about who we are. We are the school that raised money for the flood appeal. We are the school that planted the garden by the sports hall. We are the school that should lead, not follow. Do we really want our legacy to be a mountain of plastic taller than the clock tower?\n\n[6] So here is what I am asking. Sign the petition at the library desk this week. Bring a bottle tomorrow. Tell the School Council you want change. Two hundred and twelve cups last Tuesday. Let's make it zero by next Tuesday. Thank you.",
  note: "Paragraph numbers [1] to [6] are for reference only; they are not read aloud.",
};

export const publicSpeaking: Topic = {
  id: "public-speaking",
  title: "Public Speaking & Rhetoric",
  subject: "Shakespeare",
  icon: "🎤",
  summary: "Ethos, pathos, logos and how to hold a room.",
  intro:
    "For two and a half thousand years, people have studied how a single voice can change what a whole crowd thinks and feels. In this topic you will take apart some of the most famous speeches ever given, from Mark Antony turning a Roman mob and Henry V rallying his army to Elizabeth I at Tilbury and Lincoln at Gettysburg, and learn the tools they used: ethos, pathos, logos, the rule of three and many more. Then you will learn to use those tools yourself, with a voice and body that hold a room, so you can walk into the Public Speaking Competition calm, prepared and ready to persuade.",

  guide: [
    {
      id: "writing-for-the-ear",
      heading: "Writing for the ear: what makes a speech different",
      discovery: {
        problem:
          "Read this sentence silently, then aloud: 'Notwithstanding the aforementioned considerations, which, it must be acknowledged, are not insignificant, the proposal ought, on balance, to be rejected.' Now read this aloud: 'It sounds clever. It sounds careful. But it is wrong.' Which one would an audience still remember five minutes later, and why?",
        idea:
          "The second one wins easily. A listener cannot go back and re-read: they hear each sentence **once**, at your speed. Short sentences, repetition ('It sounds... It sounds...') and a strong rhythm make an idea stick in the ear. The first sentence would work on paper, where a reader can slow down, but out loud it is a fog. That is the whole secret of speech writing: you are writing for the **ear**, not the eye.",
      },
      body:
        "A **speech** is a piece of writing designed to be *heard*, usually once, by a live **audience**. **Rhetoric** is the art of using language to persuade, inform or inspire people. It has been studied since ancient Greece, when the philosopher **Aristotle** wrote a whole book on it in the 4th century BC, and Tudor grammar-school boys (very probably including the young Shakespeare) were drilled in it for years.\n\nBefore you write a word, pin down **GAP**:\n- **Genre**: a speech (and what kind: a competition speech, a eulogy, a rallying call, a debate speech).\n- **Audience**: who is listening? Judges, classmates, parents, soldiers, a nation?\n- **Purpose**: to **persuade** (change minds), **inform** (explain), **inspire** (stir to action), **entertain** or **commemorate** (honour someone or something).\n\nBecause listeners cannot re-read, good speeches use features that would look odd in an essay:\n- **Short sentences** mixed with longer ones, for punch and rhythm.\n- **Repetition** of key words and phrases, so the message lodges in memory.\n- **Signposting** ('My first reason...', 'So what can we do?') so the audience never gets lost.\n- **Direct address** ('you') and **inclusive pronouns** ('we', 'us', 'our') to build a relationship with the room.\n- A slightly more **conversational tone**: contractions such as 'let's' and 'don't' are fine if they suit the audience.\n\nThink of a speech as a conversation in which only you are talking. The audience is still taking part: they are reacting, judging and deciding whether to trust you. Every sentence should be written with that live reaction in mind.",
      keyPoints: [
        "A speech is written for the ear: the audience hears each sentence once, at your pace.",
        "Pin down GAP (genre, audience, purpose) before you write.",
        "Short sentences, repetition, signposting and direct address are virtues in a speech.",
      ],
      thinkDeeper:
        "In an essay, repeating the same phrase three times is usually marked down as clumsy. In a speech it is often praised. Is repetition a different skill in speech, or the same skill used for a different situation? Argue your case.",
    },
    {
      id: "speech-structure",
      heading: "Structure: hook, signpost, three points, memorable close",
      discovery: {
        problem:
          "Compare two openings for a speech about sleep. A: 'Hello, my name is Priya and today I am going to talk to you about sleep.' B: 'Put your hand up if you went to bed after eleven o'clock last night. Keep it up if you woke up tired. Now look around the room.' Which grabs the audience, and what exactly does B do that A does not?",
        idea:
          "B is a **hook**: it involves the audience physically, makes them curious, and proves the problem using the people in the room as evidence. A simply announces the topic, which wastes the most valuable seconds of the speech. Judges decide a lot in the first twenty seconds, so the opening should be the most carefully crafted part of the speech. You can introduce yourself after the hook if the competition requires it.",
      },
      body:
        "Almost every great speech follows the same skeleton. Learn it and you will never stare at a blank page again.\n\n**1. The hook (first 10 to 20 seconds).** A **hook** grabs attention before you have earned it. Strong hooks include:\n- A short **anecdote** (a personal story): 'Last Tuesday I opened the canteen bins and counted...'\n- A **rhetorical question**: 'What would you do with an extra hour every day?'\n- A startling **fact or statistic**.\n- A bold **statement**: 'Homework is a waste of your evenings.'\n- An 'imagine' scenario that puts the audience inside the problem.\n\n**2. The signpost (or roadmap).** **Signposting** means telling the audience where the speech is going: 'I have three reasons: cost, health and happiness.' It is a map for listeners, who cannot flip back a page.\n\n**3. The body: usually three points.** The **rule of three** (also called a **tricolon** when it is three words or phrases in a row) is the most famous pattern in rhetoric. Three points feel complete and balanced; two feels thin and five is hard to remember. Each point needs a clear claim, evidence or an example, and an explanation of why it matters to *this* audience. Use **discourse markers** to signpost each one: 'Firstly...', 'My second reason...', 'Finally, and most importantly...'.\n\nStrong speeches often include a **counter-argument**: you raise the objection your audience is already thinking ('Some of you are thinking it costs too much...') and then answer it. This shows you are fair and makes your case harder to dismiss.\n\n**4. The close.** The last thing you say is what the audience walks out with. A strong ending usually does at least two of these:\n- **Sums up** the three points in one sentence.\n- Gives a **call to action**: a specific thing the audience should do, often in **imperatives** (command verbs): 'Sign the petition. Bring a bottle. Tell the Council.'\n- **Circles back** to the hook (a **cyclical structure**), which makes the speech feel complete.\n- Ends on a short, **memorable line**, followed by a pause before 'Thank you'.",
      diagram:
        '<svg viewBox="0 0 360 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Speech structure: hook, signpost, three points, then a close with a call to action, with audience energy rising towards the end"><defs><marker id="spkA1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker></defs><path d="M10 40 C 60 18, 90 38, 140 34 S 250 30, 350 12" fill="none" stroke="#e11d48" stroke-width="2" stroke-dasharray="4 3"/><text x="300" y="34" font-size="11" fill="#be123c">energy</text><rect x="5" y="55" width="58" height="46" rx="8" fill="#fde68a" stroke="#d97706"/><text x="34" y="76" font-size="12" text-anchor="middle" fill="#78350f">Hook</text><text x="34" y="92" font-size="11" text-anchor="middle" fill="#78350f">grab</text><rect x="72" y="55" width="64" height="46" rx="8" fill="#e0e7ff" stroke="#4f46e5"/><text x="104" y="76" font-size="12" text-anchor="middle" fill="#312e81">Signpost</text><text x="104" y="92" font-size="11" text-anchor="middle" fill="#312e81">the map</text><rect x="145" y="55" width="44" height="46" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="167" y="82" font-size="11" text-anchor="middle" fill="#14532d">Point 1</text><rect x="195" y="55" width="44" height="46" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="217" y="82" font-size="11" text-anchor="middle" fill="#14532d">Point 2</text><rect x="245" y="55" width="44" height="46" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="267" y="82" font-size="11" text-anchor="middle" fill="#14532d">Point 3</text><rect x="297" y="55" width="58" height="46" rx="8" fill="#ffe4e6" stroke="#e11d48"/><text x="326" y="76" font-size="12" text-anchor="middle" fill="#881337">Close</text><text x="326" y="92" font-size="11" text-anchor="middle" fill="#881337">act!</text><line x1="63" y1="78" x2="70" y2="78" stroke="#475569" stroke-width="1.5" marker-end="url(#spkA1)"/><line x1="136" y1="78" x2="143" y2="78" stroke="#475569" stroke-width="1.5" marker-end="url(#spkA1)"/><line x1="289" y1="78" x2="295" y2="78" stroke="#475569" stroke-width="1.5" marker-end="url(#spkA1)"/><path d="M145 110 L145 116 L289 116 L289 110" fill="none" stroke="#16a34a" stroke-width="1.5"/><text x="217" y="132" font-size="11" text-anchor="middle" fill="#14532d">rule of three (+ counter-argument)</text><text x="326" y="122" font-size="11" text-anchor="middle" fill="#881337">call to</text><text x="326" y="136" font-size="11" text-anchor="middle" fill="#881337">action</text><path d="M326 146 C 230 158, 120 158, 34 108" fill="none" stroke="#d97706" stroke-width="1.2" stroke-dasharray="3 3"/><text x="150" y="154" font-size="11" fill="#92400e">circle back to the hook</text></svg>',
      diagramCaption:
        "The speech skeleton: hook, signpost, three points (with a counter-argument), then a close that calls the audience to act and circles back to the opening.",
      keyPoints: [
        "Hook first: never waste the opening on 'Today I am going to talk about...'.",
        "Signpost your three points so the audience can follow without a page to look at.",
        "End with a call to action and a memorable line, ideally echoing your hook.",
      ],
      thinkDeeper:
        "Why do you think three points feel 'complete' to an audience when two feel unfinished? Find three examples of the rule of three in everyday life (slogans, stories, sayings) and work out what they have in common.",
    },
    {
      id: "ethos-pathos-logos",
      heading: "The three appeals: ethos, pathos, logos (and kairos)",
      discovery: {
        problem:
          "You want your parents to let you get a dog. Here are three arguments. A: 'I've walked Mrs Tan's dog every day for a year without missing once.' B: 'Studies suggest owning a dog encourages families to walk more each week.' C: 'Imagine coming home after a hard day to a wagging tail that's thrilled to see you.' Each one persuades in a completely different way. What is each one appealing to?",
        idea:
          "A appeals to **trust in you**: it proves you are reliable (that is **ethos**). B appeals to **reason and evidence** (that is **logos**). C appeals to **feelings** by making your parents picture a happy moment (that is **pathos**). The strongest speeches combine all three, because different people in an audience are persuaded by different things.",
      },
      body:
        "Aristotle argued that a speaker can persuade in three ways, often called the **rhetorical triangle**.\n\n**Ethos** (Greek for 'character') is the appeal to the speaker's **credibility**: why should we trust *you*? You build ethos through expertise ('As captain of the swimming team...'), personal experience, fairness (admitting the other side has a point), good manners and confident delivery. Elizabeth I uses ethos when she promises rewards 'on a word of a prince'.\n\n**Pathos** (Greek for 'suffering' or 'experience') is the appeal to the audience's **emotions**: pity, pride, anger, fear, hope, guilt. You create pathos with **emotive language** (words loaded with feeling, such as 'abandoned' instead of 'left'), vivid images, anecdotes and appeals to shared values. Mark Antony's 'My heart is in the coffin there with Caesar' is pure pathos.\n\n**Logos** (Greek for 'word' or 'reason') is the appeal to **logic**: facts, statistics, examples, cause and effect, and step-by-step reasoning. 'If we throw away two hundred cups a day, that is a thousand a week' is logos.\n\nA fourth idea, **kairos** (Greek for 'the right moment'), means choosing the **right words for the right time, place and audience**. Lincoln's two-minute speech suited a solemn cemetery dedication; a joke that works in a class assembly might be a disaster at a funeral. Kairos also covers timing *inside* a speech: when to pause, when to bring out your strongest point.\n\nIn an analysis, do not just label an appeal. Explain **how** it works on the audience: 'This pathos makes the crowd feel guilty, so they are more willing to...'.",
      diagram:
        '<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The rhetorical triangle with ethos at the top, pathos bottom left, logos bottom right and kairos in the centre"><polygon points="160,30 40,190 280,190" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/><circle cx="160" cy="30" r="22" fill="#fde68a" stroke="#d97706"/><text x="160" y="34" font-size="12" font-weight="bold" text-anchor="middle" fill="#78350f">ETHOS</text><text x="160" y="66" font-size="11" text-anchor="middle" fill="#78350f">trust the speaker</text><circle cx="40" cy="190" r="22" fill="#fecdd3" stroke="#e11d48"/><text x="40" y="194" font-size="11" font-weight="bold" text-anchor="middle" fill="#881337">PATHOS</text><text x="62" y="224" font-size="11" text-anchor="middle" fill="#881337">feel emotion</text><circle cx="280" cy="190" r="22" fill="#bfdbfe" stroke="#2563eb"/><text x="280" y="194" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e3a8a">LOGOS</text><text x="262" y="224" font-size="11" text-anchor="middle" fill="#1e3a8a">follow logic</text><ellipse cx="160" cy="140" rx="48" ry="22" fill="#dcfce7" stroke="#16a34a"/><text x="160" y="138" font-size="11" font-weight="bold" text-anchor="middle" fill="#14532d">KAIROS</text><text x="160" y="152" font-size="11" text-anchor="middle" fill="#14532d">right moment</text></svg>',
      diagramCaption:
        "The rhetorical triangle: ethos (the speaker), pathos (the audience's feelings) and logos (the message's logic), with kairos (the right moment) holding them together.",
      keyPoints: [
        "Ethos = credibility of the speaker; pathos = emotions of the audience; logos = logic and evidence.",
        "Kairos = the right words at the right moment for this audience and occasion.",
        "Great speeches blend all three; good analysis explains how each appeal affects the listener.",
      ],
      thinkDeeper:
        "Is pathos a 'cheaper' way to persuade than logos? Think of a situation where an emotional appeal is the most honest and appropriate choice, and one where it would be manipulative. What is the difference?",
    },
    {
      id: "persuasive-devices",
      heading: "The persuasive toolkit: DAFOREST and beyond",
      discovery: {
        problem:
          "Read this aloud: 'We will not wait. We will not whisper. We will not give up.' What is repeated, where in each sentence does it appear, and what happens to the rhythm and your voice as you say it?",
        idea:
          "The words 'We will not' are repeated at the **start** of each sentence. That is **anaphora**. Said aloud, it builds a drumbeat: each sentence feels louder and more determined than the last. There are also three sentences, so it is a **tricolon** too, and 'we' is an **inclusive pronoun** that pulls the audience onto the speaker's side. One short line can stack three devices.",
      },
      body:
        "**DAFOREST** is a mnemonic for the core persuasive devices:\n- **D**irect address: speaking straight to the audience as 'you' ('You deserve better').\n- **A**necdote: a short personal story that makes an issue real.\n- **F**acts: things that can be checked and proved.\n- **O**pinions: views, often stated confidently *as if* they were facts ('This is the most important issue of our time').\n- **R**hetorical questions: questions asked for effect, not for an answer ('Is that really fair?').\n- **E**motive language: word choices that trigger feelings ('innocent', 'devastated', 'betrayed').\n- **S**tatistics: numbers and percentages, which sound precise and authoritative.\n- **T**riplets (the rule of three, or **tricolon**): three words, phrases or ideas in a row.\n\nBeyond DAFOREST, the best speakers use:\n- **Anaphora**: repeating a word or phrase at the **start** of successive sentences or clauses ('We shall... We shall... We shall...').\n- **Epistrophe**: repeating a word at the **end** of clauses ('...of the people, by the people, for the people').\n- **Antithesis**: placing opposites side by side in a balanced structure ('I come to bury Caesar, not to praise him'). It makes your choice sound obvious.\n- **Hyperbole**: deliberate exaggeration for effect ('a mountain of plastic taller than the clock tower').\n- **Inclusive pronouns**: 'we', 'us', 'our' make the audience feel part of a team with the speaker.\n- **Imperatives**: command verbs that push the audience to act ('Stiffen the sinews', 'Sign the petition').\n- **Hypophora**: asking a question and immediately answering it ('So why does this matter? Because...').\n- **Alliteration**: repeated initial consonant sounds that make a phrase memorable ('summon up the blood' after 'Stiffen the sinews').\n\nWhen you analyse, use the formula **Device + Quotation + Effect on the listener**. 'The anaphora of \"We are the school\" builds a rising rhythm of pride, making the audience feel they have a reputation to live up to' is worth far more than 'There is anaphora.'",
      keyPoints: [
        "DAFOREST: direct address, anecdote, facts, opinions, rhetorical questions, emotive language, statistics, triplets.",
        "Anaphora repeats at the start, epistrophe at the end; antithesis balances opposites.",
        "Always explain the effect on the listener, not just the name of the device.",
      ],
      thinkDeeper:
        "A speech crammed with every device on the list can sound fake. How would you decide which two or three devices to use for a particular audience? Write a rule of thumb.",
    },
    {
      id: "antony-funeral-speech",
      heading: "Shakespeare's master persuader: Mark Antony",
      passage: ANTONY,
      discovery: {
        problem:
          "Say the line 'And Brutus is an honourable man' as if you sincerely mean it. Now say it as if you mean the exact opposite. The words have not changed. What has?",
        idea:
          "Your **tone** (and probably your pace, stress and facial expression) changed. Antony repeats this line so often that by the end it sounds **sarcastic**, even though he never says a word against Brutus. This is **verbal irony**: saying one thing while meaning another. It lets Antony attack Brutus while technically keeping his promise not to blame the conspirators.",
      },
      body:
        "In *Julius Caesar* (Act 3 Scene 2), Brutus and the conspirators have just killed Caesar. Brutus speaks first, in calm, logical **prose**, arguing that Caesar was too ambitious. His most famous line is an antithesis: 'Not that I loved Caesar less, but that I loved Rome more.' The crowd cheers him. Then Brutus makes a fatal mistake: he lets Antony speak last, and leaves.\n\nAntony switches to **blank verse** (unrhymed lines of iambic pentameter), whose steady rhythm suits a more emotional, musical speech. He has promised not to blame the conspirators, so he must turn the crowd **without seeming to attack anyone**. Watch how he does it:\n- **False modesty and misdirection**: 'I come to bury Caesar, not to praise him' is an antithesis that lowers the crowd's guard. He then spends the whole speech praising Caesar.\n- **Repetition that becomes irony**: in this extract the word 'honourable' appears five times. Each time it is set beside evidence that contradicts Brutus, so it sounds hollower and more sarcastic.\n- **Evidence in threes (logos)**: Caesar filled Rome's treasury with ransoms; he wept for the poor; he refused the crown three times. Each is followed by a **rhetorical question** ('Did this in Caesar seem ambitious?') that lets the crowd reach the conclusion themselves.\n- **Shared memory**: 'You all did see' and 'You all did love him once' use **direct address** to make the crowd witnesses, not just listeners.\n- **Pathos and a calculated pause**: 'My heart is in the coffin there with Caesar, / And I must pause till it come back to me.' He weeps and stops, and the crowd starts talking among themselves, persuading each other.\n\nLater in the scene Antony shows them Caesar's will and his stabbed body, and the crowd riots. Shakespeare shows us that rhetoric is powerful, and also dangerous: Antony's words lead to violence and civil war.",
      diagram:
        '<svg viewBox="0 0 340 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Irony meter: each repetition of the word honourable sounds more sarcastic as Antony presents more evidence"><line x1="40" y1="140" x2="320" y2="140" stroke="#475569" stroke-width="1.5"/><line x1="40" y1="140" x2="40" y2="20" stroke="#475569" stroke-width="1.5"/><text x="14" y="84" font-size="11" fill="#475569" transform="rotate(-90 14 84)">sarcasm</text><text x="180" y="162" font-size="11" text-anchor="middle" fill="#475569">each time Antony says honourable</text><rect x="58" y="118" width="34" height="22" fill="#e0e7ff" stroke="#4f46e5"/><rect x="110" y="100" width="34" height="40" fill="#c7d2fe" stroke="#4f46e5"/><rect x="162" y="80" width="34" height="60" fill="#a5b4fc" stroke="#4f46e5"/><rect x="214" y="56" width="34" height="84" fill="#818cf8" stroke="#4338ca"/><rect x="266" y="28" width="34" height="112" fill="#6366f1" stroke="#3730a3"/><text x="75" y="112" font-size="11" text-anchor="middle" fill="#312e81">1</text><text x="127" y="94" font-size="11" text-anchor="middle" fill="#312e81">2</text><text x="179" y="74" font-size="11" text-anchor="middle" fill="#312e81">3</text><text x="231" y="50" font-size="11" text-anchor="middle" fill="#312e81">4</text><text x="283" y="22" font-size="11" text-anchor="middle" fill="#312e81">5</text><text x="75" y="134" font-size="11" text-anchor="middle" fill="#1e1b4b">sincere?</text><text x="231" y="134" font-size="11" text-anchor="middle" fill="#eef2ff">doubt</text><text x="283" y="134" font-size="11" text-anchor="middle" fill="#eef2ff">mock</text></svg>',
      diagramCaption:
        "The irony meter: the word 'honourable' stays the same, but each repetition, placed next to new evidence, sounds more sarcastic.",
      keyPoints: [
        "Antony promises not to blame the conspirators, so he uses irony, evidence and questions instead of open attack.",
        "Repeating 'honourable' beside contradicting evidence turns praise into sarcasm.",
        "His pause for grief is both genuine pathos and clever stagecraft: it lets the crowd persuade itself.",
      ],
      thinkDeeper:
        "Brutus's speech is logical and honest about his motives; Antony's is emotional and misleading, yet Antony wins. What does Shakespeare seem to be suggesting about crowds, and about the power of rhetoric? Do you agree?",
    },
    {
      id: "rallying-speeches",
      heading: "Rallying the troops: Henry V and Elizabeth I",
      passage: HENRY,
      discovery: {
        problem:
          "Henry V and Elizabeth I both face tired, frightened soldiers who might be about to die. Before you read on, predict: what kinds of sentences and techniques would you use to make soldiers charge into danger? What would you avoid saying?",
        idea:
          "You probably predicted **commands**, **pride**, **togetherness** and a **promise**: and you would avoid talking about death in detail or admitting you might lose. Henry relies on **imperatives** and vivid animal imagery; Elizabeth relies on **personal sacrifice**: she promises to fight and die alongside her people. Both make the listeners feel part of something bigger than themselves.",
      },
      body:
        "**Henry V at Harfleur (Act 3 Scene 1).** Henry's soldiers have been beaten back from a breach in the walls of Harfleur. His speech is short, physical and urgent.\n- **Inclusive opening**: 'dear friends' makes the king one of the soldiers, a comrade rather than a distant ruler (ethos).\n- **Antithesis**: in peace a man should show 'modest stillness and humility', but war demands something else. The contrast justifies the transformation he is asking for.\n- **Imperatives**: 'Stiffen the sinews, summon up the blood', 'set the teeth', 'Follow your spirit'. Notice the **alliteration** of 's' sounds, which almost hisses with effort.\n- **Animal imagery**: 'imitate the action of the tiger' asks the men to become fierce predators; 'like greyhounds in the slips, / Straining upon the start' is a **simile** showing them as eager hunting dogs held on a leash.\n- **Family pride (pathos)**: 'Dishonour not your mothers' warns that cowardice would shame their families.\n- **A climactic rallying cry**: the speech ends on a **tricolon**, 'God for Harry, England, and Saint George!', which the soldiers can shout back together.\n\n**Elizabeth I at Tilbury (1588).** With the Spanish Armada threatening invasion, Elizabeth visited her army at Tilbury. Accounts describe her riding among the troops. Her speech has a very different method.\n- **Warm direct address**: 'My loving people' presents her as their protector, not just their ruler.\n- **Courage through contrast**: advisers warned her not to go among armed crowds, but she says 'Let tyrants fear', a short, bold declarative sentence.\n- **Personal sacrifice**: she has come 'to live and die amongst you all'. This is the opposite of a ruler hiding behind her army.\n- **Concession and counter-argument**: 'I know I have the body but of a weak and feeble woman; but I have the heart and stomach of a king'. She faces head-on the prejudice that a woman cannot lead in war, admits it, then overturns it with antithesis.\n- **Anaphora and tricolon**: 'I myself will take up arms, I myself will be your general, judge, and rewarder'.\n- **Practical promise (logos and ethos)**: rewards 'shall be duly paid you', guaranteed 'on a word of a prince'.",
      keyPoints: [
        "Henry rallies through imperatives, animal imagery, family pride and a tricolon battle cry.",
        "Elizabeth rallies through personal sacrifice, a concession ('weak and feeble woman') turned into strength, and a royal promise.",
        "Both use inclusive language to make soldiers feel part of a shared cause.",
      ],
      thinkDeeper:
        "Henry tells his men how to behave; Elizabeth tells her men what she will do. Which approach would make you more willing to fight, and why? Could you combine both in a single speech?",
    },
    {
      id: "gettysburg-and-modern-voices",
      heading: "Lincoln at Gettysburg and the great modern speeches",
      passage: GETTYSBURG,
      discovery: {
        problem:
          "The Gettysburg Address is roughly 270 words long. Guess how long it took Lincoln to deliver. The speaker before him talked for about two hours. Which speech do you think people still learn by heart today, and what does that tell you?",
        idea:
          "Lincoln spoke for only about **two minutes**. The two-hour speech is almost forgotten; Lincoln's is carved into the wall of the Lincoln Memorial and learned by schoolchildren. **Length is not the same as impact.** A short speech forces you to choose your strongest words, and short speeches are easier to remember and repeat.",
      },
      body:
        "**The Gettysburg Address (19 November 1863)** was given during the American Civil War at the dedication of a cemetery for soldiers killed at the Battle of Gettysburg. In about 270 words Lincoln does something remarkable: he turns a funeral into a **mission statement** for the whole nation.\n\n- **Structure: past, present, future.** Paragraph one looks back to 1776 ('Four score and seven years ago'). Paragraph two is the present war. Paragraph three looks forward to 'a new birth of freedom'. This simple time structure gives the speech a sense of history and destiny.\n- **Formal, biblical register**: 'Four score and seven' echoes the language of the Bible, giving the speech solemnity, and 'consecrate' and 'hallow' are religious words.\n- **Ascending tricolon**: 'we can not dedicate—we can not consecrate—we can not hallow—this ground'. Each verb is more sacred than the last, and the anaphora of 'we can not' builds to a climax.\n- **Antithesis**: 'The world will little note, nor long remember what we say here, but it can never forget what they did here.' Words are set against deeds; the living against the dead.\n- **Inclusive pronouns**: 'we' and 'us' appear again and again, turning the listeners from mourners into people with a duty: 'It is for us the living...'.\n- **Memorable final tricolon**: 'government of the people, by the people, for the people', where the repetition of 'the people' at the end of each phrase is a form of **epistrophe**.\n\n**Modern speeches you should know** (they are still in copyright, so learn them by name and short phrases):\n- **Martin Luther King Jr, Washington DC, 28 August 1963**: the 'I have a dream' speech, built on powerful **anaphora** and vivid imagery of a fairer America.\n- **Malala Yousafzai, United Nations, 12 July 2013**: speaking on her sixteenth birthday, months after being shot for campaigning for girls' education, she argued that 'one book and one pen' could change the world. Her experience gives her enormous **ethos**.\n- **Greta Thunberg, UN Climate Action Summit, September 2019**: her repeated, accusing 'How dare you' is a famous example of **anaphora** and raw **pathos** directed at world leaders.",
      keyPoints: [
        "Gettysburg: about 270 words and two minutes, structured past, present, future.",
        "Key devices: ascending tricolon, antithesis, inclusive 'we', and the closing 'of the people, by the people, for the people'.",
        "King (1963), Malala (2013) and Thunberg (2019) show anaphora, ethos and pathos at work in modern speeches.",
      ],
      thinkDeeper:
        "Lincoln claims 'The world will little note, nor long remember what we say here.' He was wrong. Was he being genuinely modest, or was the modesty itself a persuasive technique? Find evidence for both readings.",
    },
    {
      id: "delivery",
      heading: "Delivery: voice and body",
      discovery: {
        problem:
          "Say the sentence 'I never said she stole my money' seven times, stressing a different word each time (I / never / said / she / stole / my / money). How many different meanings can one sentence carry?",
        idea:
          "Seven! Stressing 'I' suggests someone else said it; stressing 'she' suggests someone else stole it; stressing 'money' suggests she stole something else. **Stress and intonation change meaning.** In a speech, your voice is not just a delivery van for the words: it is part of the message. That is why judges give separate marks for delivery.",
      },
      body:
        "A brilliant script delivered badly loses to a good script delivered brilliantly. Delivery has two halves: **voice** and **body**.\n\n**Voice: the four Ps**\n- **Pace**: the speed you speak. Most confident speakers talk at roughly 120 to 160 words per minute. Nerves make you rush, so aim slightly slower than feels natural. Vary pace: slow down for serious or important lines, speed up slightly for excitement or lists.\n- **Pause**: a deliberate silence. Pause **before** a key line to build anticipation and **after** it to let it land. A two-second pause feels long to you but powerful to the audience. Antony even writes his pause into the speech.\n- **Projection**: making your voice carry to the back of the room without shouting, by breathing from low in your stomach (the diaphragm) and aiming your voice at the back wall.\n- **Pitch and intonation**: the rise and fall of your voice. A flat **monotone** sends audiences to sleep. Avoid **uptalk** (a rising tone at the end of statements), which makes confident claims sound like questions.\n\n**Body: eyes, hands, feet**\n- **Eye contact** builds trust (ethos). Sweep the room like a lighthouse, but hold one person's gaze for a whole sentence before moving on. Include the judges and the back corners.\n- **Gesture**: purposeful, open movements (counting three points on your fingers, an open palm towards the audience) reinforce meaning. Fidgeting, pen-clicking and hair-twirling distract.\n- **Posture**: stand with feet hip-width apart, weight even, shoulders relaxed. Being **grounded** (not swaying or rocking) looks confident even when you do not feel it.\n- **Facial expression** should match the content: a smile for a funny anecdote, seriousness for a hard fact.\n\n**Cue cards, not scripts.** Reading a script word for word kills eye contact and makes your voice flat. Use small, numbered **cue cards** with keywords and short prompts in large writing. Many speakers write out only the first and last lines in full, because those must be perfect. Rehearse until the cards are a safety net, not a crutch.",
      diagram:
        '<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Voice dials for pace, pause, projection and intonation, each with a sweet spot marked, plus three body skills"><text x="10" y="18" font-size="12" font-weight="bold" fill="#1f2937">Voice dials</text><text x="10" y="44" font-size="11" fill="#374151">Pace</text><line x1="90" y1="40" x2="250" y2="40" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/><circle cx="150" cy="40" r="7" fill="#16a34a"/><text x="90" y="56" font-size="11" fill="#64748b">slow</text><text x="250" y="56" font-size="11" text-anchor="end" fill="#64748b">rushed</text><text x="10" y="80" font-size="11" fill="#374151">Pause</text><line x1="90" y1="76" x2="250" y2="76" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/><circle cx="190" cy="76" r="7" fill="#16a34a"/><text x="90" y="92" font-size="11" fill="#64748b">none</text><text x="250" y="92" font-size="11" text-anchor="end" fill="#64748b">dramatic</text><text x="10" y="116" font-size="11" fill="#374151">Projection</text><line x1="90" y1="112" x2="250" y2="112" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/><circle cx="195" cy="112" r="7" fill="#16a34a"/><text x="90" y="128" font-size="11" fill="#64748b">mumble</text><text x="250" y="128" font-size="11" text-anchor="end" fill="#64748b">shout</text><text x="10" y="152" font-size="11" fill="#374151">Intonation</text><line x1="90" y1="148" x2="250" y2="148" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/><circle cx="200" cy="148" r="7" fill="#16a34a"/><text x="90" y="164" font-size="11" fill="#64748b">monotone</text><text x="250" y="164" font-size="11" text-anchor="end" fill="#64748b">varied</text><rect x="262" y="28" width="72" height="140" rx="8" fill="#fff7ed" stroke="#ea580c"/><text x="298" y="46" font-size="11" font-weight="bold" text-anchor="middle" fill="#9a3412">Body</text><text x="298" y="74" font-size="11" text-anchor="middle" fill="#9a3412">eye contact</text><text x="298" y="104" font-size="11" text-anchor="middle" fill="#9a3412">gesture</text><text x="298" y="134" font-size="11" text-anchor="middle" fill="#9a3412">posture</text><text x="10" y="190" font-size="11" fill="#14532d">green dot = a good default; vary it for effect</text></svg>',
      diagramCaption:
        "Treat your voice like a set of dials: a steady default for pace, pause, projection and intonation, adjusted on purpose for key moments; your body supports every word.",
      keyPoints: [
        "Voice: pace, pause, projection and pitch/intonation. Slow down and pause around key lines.",
        "Body: hold eye contact, use purposeful gestures, stand grounded.",
        "Use keyword cue cards, not a full script; learn your first and last lines by heart.",
      ],
      thinkDeeper:
        "Some great speakers (such as Lincoln) have reportedly had thin or high voices, yet were hugely persuasive. If delivery matters so much, how could that be? What can a speaker do to make the most of the voice they actually have?",
    },
    {
      id: "nerves-and-competition",
      heading: "Nerves, rehearsal and winning the competition",
      discovery: {
        problem:
          "Before a speech your heart pounds, your hands feel shaky and your mouth goes dry. Is your body telling you that you are going to do badly? What else could those exact same feelings mean?",
        idea:
          "They are the same physical signals as **excitement**: your body is releasing adrenaline to give you energy and sharpen your focus. Psychologists have found that telling yourself 'I'm excited' rather than 'I'm calm' can help, because it is easier to relabel the feeling than to switch it off. Nerves are fuel; the aim is to steer them, not to get rid of them.",
      },
      body:
        "**Managing nerves.** Almost everyone feels nervous before speaking in public, including professionals. Useful strategies:\n- **Breathe slowly**: in through the nose for a count of four, out through the mouth for a count of six. A long out-breath helps calm the body.\n- **Relabel the feeling**: 'I'm excited' rather than 'I'm scared'.\n- **Memorise your opening**: the first thirty seconds are the most nerve-racking, so know them perfectly. Once you are moving, nerves usually fade.\n- **Remember the audience is on your side**: they want you to do well. Studies of the 'illusion of transparency' suggest speakers think their nerves are far more visible than they really are.\n- **Have water nearby**, plant your feet and find a friendly face to start with.\n\n**Rehearsal.** Rehearse **out loud**, standing up, at least five times. Record yourself on a phone and watch it back for pace, fillers ('um', 'like', 'basically') and fidgeting. Rehearse in front of family, and if possible in the room you will use. Time every run.\n\n**What competition judges look for.** Most school competitions mark something like five areas:\n- **Content**: original, interesting ideas; well-chosen evidence; a clear argument.\n- **Structure**: a strong hook, clear signposting, logical points, a memorable conclusion.\n- **Delivery**: voice (pace, pause, projection, intonation) and body (eye contact, gesture, posture); fluency without reading.\n- **Audience engagement**: making the room think, laugh, feel or respond; adapting to the audience (kairos).\n- **Timing**: staying within the limit. Going over is often penalised, and finishing far too early can suggest thin content.\n\n**Timing maths.** At about 130 to 150 words per minute, a three-minute speech is roughly 400 to 450 words. Remember to allow for pauses and for the audience laughing or reacting. If you are over time in rehearsal, **cut a whole sentence or example** rather than speaking faster.\n\n**Questions.** If there is a question session, listen to the whole question, pause, repeat or rephrase it if useful, answer briefly, and link back to your main message. It is fine to say 'That's a good question; I'd want to look into that further.'",
      diagram:
        '<svg viewBox="0 0 340 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of a three-minute speech: hook, signpost, three points and close"><text x="10" y="18" font-size="12" font-weight="bold" fill="#1f2937">A 3-minute speech (about 420 words)</text><rect x="10" y="34" width="30" height="34" fill="#fde68a" stroke="#d97706"/><rect x="40" y="34" width="22" height="34" fill="#e0e7ff" stroke="#4f46e5"/><rect x="62" y="34" width="78" height="34" fill="#dcfce7" stroke="#16a34a"/><rect x="140" y="34" width="78" height="34" fill="#bbf7d0" stroke="#16a34a"/><rect x="218" y="34" width="78" height="34" fill="#86efac" stroke="#16a34a"/><rect x="296" y="34" width="34" height="34" fill="#ffe4e6" stroke="#e11d48"/><text x="25" y="56" font-size="11" text-anchor="middle" fill="#78350f">hook</text><text x="101" y="56" font-size="11" text-anchor="middle" fill="#14532d">point 1</text><text x="179" y="56" font-size="11" text-anchor="middle" fill="#14532d">point 2</text><text x="257" y="56" font-size="11" text-anchor="middle" fill="#14532d">point 3</text><text x="313" y="56" font-size="11" text-anchor="middle" fill="#881337">close</text><text x="10" y="86" font-size="11" fill="#475569">0:00</text><text x="40" y="86" font-size="11" fill="#475569">0:20</text><text x="140" y="86" font-size="11" text-anchor="middle" fill="#475569">1:10</text><text x="218" y="86" font-size="11" text-anchor="middle" fill="#475569">1:55</text><text x="296" y="86" font-size="11" text-anchor="middle" fill="#475569">2:40</text><text x="330" y="86" font-size="11" text-anchor="end" fill="#475569">3:00</text><text x="51" y="108" font-size="11" text-anchor="middle" fill="#312e81">signpost</text><text x="230" y="108" font-size="11" fill="#475569">over time? cut, do not rush</text></svg>',
      diagramCaption:
        "Plan your time like a budget: a short hook and signpost, three balanced points, and a close you never have to rush.",
      keyPoints: [
        "Nerves are adrenaline: breathe slowly, relabel the feeling as excitement, memorise your opening.",
        "Judges typically mark content, structure, delivery, audience engagement and timing.",
        "About 130 to 150 words per minute: a three-minute speech is roughly 400 to 450 words.",
      ],
      thinkDeeper:
        "Two students give a speech. One has a brilliant script but reads it with her head down; the other has a decent script but delivers it with superb eye contact and timing. Using the five judging criteria, who should win, and why? Is there a 'right' answer?",
    },
  ],

  passages: [TILBURY, ANTONY, HENRY, GETTYSBURG, CUPS],

  quoteBank: [
    {
      quote: "Friends, Romans, countrymen, lend me your ears;",
      source: "Mark Antony, Julius Caesar, Act 3 Scene 2",
      analysis:
        "A tricolon of direct address that moves from the most personal ('Friends') to the widest ('countrymen'), so Antony greets the crowd first as people he cares about. The polite metaphor 'lend me your ears' asks only for a loan of attention, a modest request that disarms a crowd which has just cheered his enemy.",
      themes: ["direct address", "tricolon", "ethos"],
    },
    {
      quote: "I come to bury Caesar, not to praise him.",
      source: "Mark Antony, Julius Caesar, Act 3 Scene 2",
      analysis:
        "An antithesis that sets 'bury' against 'praise' and claims Antony has no agenda. It is deliberately misleading: he goes on to praise Caesar throughout, so the line works as misdirection that lowers the crowd's guard.",
      themes: ["antithesis", "misdirection", "manipulation"],
    },
    {
      quote: "For Brutus is an honourable man;",
      source: "Mark Antony, Julius Caesar, Act 3 Scene 2",
      analysis:
        "Repeated with small variations throughout the speech, this line becomes verbal irony. Each repetition is placed beside evidence that contradicts Brutus, so 'honourable' sounds more and more sarcastic, letting Antony attack Brutus while keeping his promise not to blame him.",
      themes: ["repetition", "verbal irony", "manipulation"],
    },
    {
      quote: "My heart is in the coffin there with Caesar, / And I must pause till it come back to me.",
      source: "Mark Antony, Julius Caesar, Act 3 Scene 2",
      analysis:
        "A metaphor of grief so strong his heart has left his body creates intense pathos. The pause it announces is also clever stagecraft: in the silence the crowd begins discussing Caesar among themselves, persuading one another.",
      themes: ["pathos", "pause", "grief"],
    },
    {
      quote: "Not that I loved Caesar less, but that I loved Rome more.",
      source: "Brutus, Julius Caesar, Act 3 Scene 2 (prose)",
      analysis:
        "A perfectly balanced antithesis ('less' against 'more', 'Caesar' against 'Rome') that presents murder as patriotic duty. It is pure logos in calm prose, which contrasts with Antony's emotional verse, and it is memorable precisely because of its symmetry.",
      themes: ["antithesis", "logos", "patriotism"],
    },
    {
      quote: "Once more unto the breach, dear friends, once more;",
      source: "King Henry, Henry V, Act 3 Scene 1",
      analysis:
        "The repetition of 'once more' at the start and end of the line hammers home the urgent demand to attack again. 'Dear friends' is an inclusive, affectionate address that presents the king as a comrade beside his men, building ethos.",
      themes: ["repetition", "ethos", "leadership"],
    },
    {
      quote: "Stiffen the sinews, summon up the blood,",
      source: "King Henry, Henry V, Act 3 Scene 1",
      analysis:
        "Two imperatives in quick succession command the soldiers' bodies to transform for battle. The sibilant alliteration ('Stiffen... sinews... summon') sounds tense and effortful, so the line almost physically tightens the speaker and the listeners.",
      themes: ["imperatives", "alliteration", "war"],
    },
    {
      quote: "Cry 'God for Harry, England, and Saint George!'",
      source: "King Henry, Henry V, Act 3 Scene 1",
      analysis:
        "The speech ends on a rallying tricolon that links God, king and country with England's patron saint. It is designed to be shouted back by the whole army, turning a speech into a shared battle cry and a moment of national unity.",
      themes: ["tricolon", "climax", "patriotism"],
    },
    {
      quote: "I know I have the body but of a weak and feeble woman; but I have the heart and stomach of a king, and of a king of England too,",
      source: "Elizabeth I, speech at Tilbury, 1588",
      analysis:
        "A concession followed by a counter-argument: Elizabeth admits the prejudice of her age (a woman is 'weak and feeble') and then overturns it with antithesis, contrasting 'body' with 'heart and stomach' (courage). The extra phrase 'and of a king of England too' adds a surge of national pride.",
      themes: ["antithesis", "counter-argument", "ethos", "gender"],
    },
    {
      quote: "to live and die amongst you all;",
      source: "Elizabeth I, speech at Tilbury, 1588",
      analysis:
        "Elizabeth promises to share her soldiers' danger, which is a powerful source of ethos. The inclusive 'amongst you all' removes the distance between monarch and army, and the pairing 'live and die' shows total commitment.",
      themes: ["ethos", "sacrifice", "unity"],
    },
    {
      quote: "The world will little note, nor long remember what we say here, but it can never forget what they did here.",
      source: "Abraham Lincoln, Gettysburg Address, 1863",
      analysis:
        "An antithesis contrasting words ('what we say') with deeds ('what they did') and the living with the dead. Its modesty honours the soldiers; ironically, Lincoln's words became some of the most remembered in American history.",
      themes: ["antithesis", "humility", "remembrance"],
    },
    {
      quote: "government of the people, by the people, for the people, shall not perish from the earth.",
      source: "Abraham Lincoln, Gettysburg Address, 1863",
      analysis:
        "A tricolon in which 'the people' is repeated at the end of each phrase (epistrophe), so the final idea of the speech is the people themselves. Only the small prepositions change, making democracy sound simple, complete and worth dying for.",
      themes: ["tricolon", "epistrophe", "democracy"],
    },
    {
      quote: "I have a dream",
      source: "Martin Luther King Jr, Washington DC, 28 August 1963 (short phrase from a copyrighted speech)",
      analysis:
        "King repeats this phrase at the start of a series of sentences, a famous example of anaphora. Each repetition builds the rhythm and hope higher, and the word 'dream' shifts the speech from protest to a vision of the future that the audience can share.",
      themes: ["anaphora", "hope", "civil rights"],
    },
    {
      quote: "one book and one pen",
      source: "Malala Yousafzai, United Nations, 12 July 2013 (short phrase from a copyrighted speech)",
      analysis:
        "Simple, concrete nouns and the repeated 'one' make education sound small, cheap and achievable, yet the speech claims such things can change the world. Malala's ethos is immense: she was speaking months after being shot for campaigning for girls' education.",
      themes: ["ethos", "repetition", "education"],
    },
  ],

  modelWriting: [
    {
      title: "Speech opening: screen time",
      task: "Write the opening of a competition speech arguing that teenagers should have phone-free evenings.",
      text:
        "Last week I tried an experiment. For seven days I wrote down every time I picked up my phone. Not to send a message. Not to look something up. Just... because. By Sunday, the number was three hundred and forty. Three hundred and forty times my hand reached for that glowing rectangle before my brain had even asked it to.\n\nGood afternoon, judges and fellow students. I'm not here to tell you phones are evil; I'd be lost without mine. I'm here to argue something simpler: that every one of us deserves at least one phone-free evening a week. I have three reasons: our sleep, our focus, and our friendships.",
      annotations: [
        "Hook: a personal anecdote with a precise number creates curiosity and ethos: the speaker has done her own research.",
        "Short fragments ('Not to send a message. Not to look something up.') use anaphora and mimic the restless habit she describes.",
        "The pause marked by the ellipsis ('Just... because.') invites a laugh of recognition: audience engagement.",
        "Concession ('I'm not here to tell you phones are evil') builds fairness, which strengthens ethos.",
        "A clear signpost with a tricolon of reasons ('our sleep, our focus, and our friendships') maps the speech; the inclusive 'our' makes it everyone's problem.",
      ],
    },
    {
      title: "Speech opening and close: kindness",
      task: "Write the opening and the final lines of a speech titled 'Kindness is a superpower'.",
      text:
        "OPENING:\nThink of the last time someone was kind to you for no reason at all. Hold that moment in your head. Maybe someone saved you a seat. Maybe someone noticed you were quiet and asked if you were all right. Maybe someone simply smiled. Now ask yourself: how long ago was it? And when did you last do the same for someone else?\n\nCLOSING:\nSo here is my challenge. Tomorrow, before the first bell, do one kind thing that nobody asked you to do. Hold a door. Share a snack. Say one honest, generous word to someone who looks like they need it. It costs nothing. It takes seconds. And it might be the moment someone holds in their head for years. Kindness is not a soft skill. It is a superpower, and every single one of us already has it. Thank you.",
      annotations: [
        "The opening uses direct address and an instruction to visualise ('Hold that moment'), drawing every listener into a personal memory: pathos.",
        "Anaphora of 'Maybe someone...' builds a gentle tricolon of small, believable examples.",
        "The two rhetorical questions turn the speech back on the audience and quietly create a sense of challenge.",
        "The close is a clear call to action in imperatives ('Hold a door. Share a snack. Say...').",
        "Cyclical structure: 'holds in their head' echoes 'Hold that moment in your head' from the opening.",
        "Antithesis in the final lines ('not a soft skill... a superpower') ends on a memorable, quotable line before 'Thank you'.",
      ],
    },
    {
      title: "Speech opening: is Shakespeare still relevant?",
      task: "Write the opening of a speech arguing that Shakespeare is still relevant to teenagers today.",
      text:
        "A teenage girl falls for someone her family hates. A young man can't decide whether to act or wait. A powerful leader is brought down by people he trusted. Is that a news story? A Netflix series? A conversation from your group chat? No. Those are Romeo and Juliet, Hamlet and Julius Caesar, and they were written over four hundred years ago.\n\nSome people say Shakespeare is old, difficult and pointless for people our age. I understand why. I've stared at 'thou' and 'wherefore' and felt completely lost. But I want to convince you that Shakespeare isn't a museum piece. He's a mirror. Today I'll show you three ways he reflects our lives: the way we love, the way we argue, and the way we use words, often without even knowing they're his.",
      annotations: [
        "Hook: a tricolon of modern-sounding plot summaries, then a twist revealing they are Shakespeare: surprise grabs attention.",
        "A run of rhetorical questions ('A news story? A Netflix series?') builds rhythm and keeps the audience guessing.",
        "The counter-argument is stated fairly ('old, difficult and pointless'), and personal admission ('I've stared at...') builds ethos through honesty.",
        "Antithesis and metaphor ('not a museum piece. He's a mirror.') give the speech a memorable central image.",
        "Signposting with a tricolon of anaphora ('the way we love, the way we argue, and the way we use words') previews the structure.",
      ],
    },
    {
      title: "Analytical PEEL paragraph: how Antony persuades",
      task: "How does Mark Antony use language to turn the crowd against Brutus in Act 3 Scene 2 of Julius Caesar?",
      text:
        "Antony turns the crowd against Brutus without ever openly criticising him, mainly through repetition that becomes verbal irony. He keeps insisting that 'Brutus is an honourable man', but each time he places this claim directly after evidence of Caesar's goodness, such as the fact that 'When that the poor have cried, Caesar hath wept'. The word 'honourable' should suggest integrity and trustworthiness, yet set beside these examples it sounds increasingly hollow, until the crowd hears the opposite of what the words say. This is especially clever because Antony has promised not to blame the conspirators: the irony allows him to accuse Brutus of lying while technically keeping his word. Shakespeare therefore presents rhetoric as a powerful and slightly dangerous skill, able to make an audience feel it has reached its own conclusion when it has really been steered there.",
      annotations: [
        "Point: a clear, arguable topic sentence that names the technique (verbal irony through repetition).",
        "Evidence: short quotations embedded smoothly into the sentence, not dropped in on their own.",
        "Explanation: zooms in on the connotations of one word ('honourable') and how its meaning shifts in context.",
        "Context: links to Antony's promise not to blame the conspirators, which explains why he needs irony.",
        "Link: ends with a bigger idea about Shakespeare's view of rhetoric and its effect on the audience.",
      ],
    },
  ],

  mnemonics: [
    {
      topic: "The core persuasive devices",
      device: "DAFOREST",
      explanation:
        "Direct address, Anecdote, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Triplets (the rule of three). Add the 'power four' on top: anaphora, antithesis, hyperbole, inclusive pronouns.",
    },
    {
      topic: "The three appeals",
      device: "Ethos = Ethics and trust, Pathos = Passion (think 'sympathy'), Logos = Logic",
      explanation:
        "Ethos sounds like 'ethics': is the speaker trustworthy? Pathos is in 'sympathy' and 'empathy': does it stir feelings? Logos is the root of 'logic': does the argument add up? Kairos = the clock: is it the right moment?",
    },
    {
      topic: "Speech structure",
      device: "Happy Speakers Thrill Crowds (Hook, Signpost, Three points, Close)",
      explanation:
        "Hook to grab attention; Signpost to map the speech; Three points (with a counter-argument); Close with a call to action and a line that circles back to the hook.",
    },
    {
      topic: "Vocal delivery",
      device: "The four Ps: Pace, Pause, Projection, Pitch",
      explanation:
        "Pace: steady and slightly slower than feels natural. Pause: before and after key lines. Projection: from the diaphragm to the back wall. Pitch: vary your intonation, no monotone and no uptalk. Then add the body: eyes, hands, feet.",
    },
  ],

  examMistakes: [
    "Opening with 'Hello, my name is... and today I am going to talk about...' instead of a hook: the most valuable seconds are wasted.",
    "Feature-spotting: writing 'There is a rhetorical question' without explaining its effect on the audience.",
    "Mixing up the appeals, e.g. calling a moving story 'logos' or a statistic 'pathos'. Ask: is it working on trust, feelings or reason?",
    "Misattributing quotations: 'Friends, Romans, countrymen' is Mark Antony, not Brutus or Caesar; 'Once more unto the breach' is Henry V, not Richard III.",
    "Writing an essay and calling it a speech: no direct address, no signposting, no repetition and no call to action.",
    "Ending weakly with 'That's it, thank you' instead of a memorable final line or call to action.",
    "In the competition, reading a full script with head down, rushing because of nerves, and running over the time limit.",
    "Inventing statistics in a written speech without making clear where they come from: it damages ethos if a judge doubts them.",
  ],

  misconceptions: [
    {
      wrong: "A good speech should sound like a well-written essay read aloud.",
      right: "Speeches are written for the ear: shorter sentences, deliberate repetition, signposting and direct address work better than long, complex essay sentences.",
    },
    {
      wrong: "Rhetoric is just a fancy word for lying or manipulation.",
      right: "Rhetoric is the art of persuasion. It can be used honestly (Lincoln honouring the dead) or manipulatively (Antony stirring a mob). The tools are neutral; the speaker's purpose and truthfulness matter.",
    },
    {
      wrong: "Pathos is weaker or less respectable than logos.",
      right: "Most decisions involve feelings as well as reason. Pathos is appropriate when the emotion fits the facts, as when Lincoln honours fallen soldiers; it becomes manipulative only when it replaces or distorts the evidence.",
    },
    {
      wrong: "If you feel nervous, you are going to perform badly.",
      right: "Nerves are adrenaline, the same physical response as excitement. Slow breathing, a memorised opening and relabelling the feeling as excitement help you use that energy.",
    },
    {
      wrong: "Longer speeches are more impressive because they contain more points.",
      right: "Impact is not length. Lincoln's Gettysburg Address took about two minutes; the two-hour speech before it is largely forgotten. Judges also penalise going over time.",
    },
    {
      wrong: "Using cue cards means you have not learned your speech.",
      right: "Keyword cue cards are what skilled speakers use. They keep you on track while allowing eye contact; it is reading a full script word for word that loses marks.",
    },
  ],

  expertDebates: [
    {
      question: "Is Mark Antony a loyal friend seeking justice, or a manipulator who unleashes a mob?",
      detail:
        "Antony genuinely grieves for Caesar, and the conspirators did murder him. But Antony uses irony, misdirection and pathos to whip up a crowd that goes on to riot; in the very next scene the mob kills an innocent poet, Cinna, simply because he shares a conspirator's name. Some readers see Antony as a righteous avenger; others see Shakespeare warning how easily crowds can be moved by skilled speakers, whatever the truth.",
    },
    {
      question: "Did Elizabeth I really say the Tilbury speech?",
      detail:
        "The famous version was written down decades after 1588 by Dr Leonel Sharp, a chaplain who was at Tilbury, in a letter that was published later still. Historians debate how closely it matches what Elizabeth actually said, though many think it captures her message, and other contemporary accounts confirm she addressed the troops. The debate raises a useful question: when we analyse a famous speech, are we analysing the speaker, or the way history has recorded and polished her words?",
    },
    {
      question: "Is persuasion through emotion ever fair?",
      detail:
        "The ancient Greek philosopher Plato distrusted rhetoric, worrying that it could make the worse argument appear the better. His student Aristotle argued that persuasion is a skill that good people need too, so that the truth is not left defenceless. Today, debates about advertising, political speeches and social media continue the same argument: is pathos a natural part of human reasoning, or a shortcut that bypasses it?",
    },
  ],

  realWorld: [
    { title: "Job and university interviews", detail: "Interviews are short persuasive speeches about yourself: you need ethos, clear structure, eye contact and calm nerves.", emoji: "💼" },
    { title: "Advertising", detail: "Adverts use the same toolkit as speeches: emotive language, rule of three slogans, celebrity ethos and statistics such as '9 out of 10 users agree'. Spotting the techniques makes you a sharper consumer.", emoji: "📺" },
    { title: "Politics and protest", detail: "From Lincoln to Malala to modern climate activists, speeches have changed laws and public opinion. Understanding rhetoric lets you judge leaders by their arguments, not just their performance.", emoji: "🗳️" },
    { title: "Courtrooms", detail: "Barristers make closing speeches to persuade judges and juries, blending logos (evidence) with careful pathos, exactly as the ancient Romans trained their orators to do.", emoji: "⚖️" },
    { title: "Sport and leadership", detail: "Captains and coaches give half-time team talks that echo Henry V: inclusive 'we', imperatives, pride and a rallying cry.", emoji: "🏆" },
    { title: "Weddings, birthdays and farewells", detail: "Toasts and eulogies are speeches to commemorate: an anecdote, a touch of humour, sincere pathos and a short, memorable close.", emoji: "🥂" },
  ],

  flashcards: [
    { front: "Ethos", back: "Persuasion through the speaker's credibility and character: why should we trust you?" },
    { front: "Pathos", back: "Persuasion through the audience's emotions (pity, pride, fear, hope, guilt)." },
    { front: "Logos", back: "Persuasion through logic and evidence: facts, statistics, examples, reasoning." },
    { front: "Kairos", back: "Choosing the right words for the right moment, audience and occasion." },
    { front: "Anaphora", back: "Repeating a word or phrase at the START of successive sentences or clauses, e.g. 'I have a dream'." },
    { front: "Antithesis", back: "Opposites placed side by side in a balanced structure, e.g. 'I come to bury Caesar, not to praise him'." },
    { front: "Tricolon / rule of three", back: "Three words, phrases or ideas in a row, e.g. 'of the people, by the people, for the people'." },
    { front: "Hypophora", back: "Asking a question and immediately answering it yourself: 'Why does this matter? Because...'" },
    { front: "Signposting", back: "Words that tell the audience where the speech is going: 'I have three reasons...', 'Secondly...', 'So what can we do?'" },
    { front: "Call to action", back: "A specific instruction at the end of a speech telling the audience what to do next, usually in imperatives." },
    { front: "'Friends, Romans, countrymen, lend me your ears'", back: "Mark Antony, Julius Caesar, Act 3 Scene 2: opening of his funeral speech for Caesar." },
    { front: "'Once more unto the breach, dear friends, once more'", back: "King Henry, Henry V, Act 3 Scene 1: rallying his troops at the siege of Harfleur." },
    { front: "'I have the heart and stomach of a king'", back: "Elizabeth I at Tilbury, 1588, as the Spanish Armada threatened. 'Stomach' means courage." },
    { front: "'government of the people, by the people, for the people'", back: "Abraham Lincoln, Gettysburg Address, 19 November 1863: the closing tricolon." },
    { front: "The four Ps of vocal delivery", back: "Pace, Pause, Projection, Pitch (intonation)." },
    { front: "Five typical competition criteria", back: "Content, structure, delivery, audience engagement, timing." },
  ],

  mustKnow: [
    "Can you define ethos, pathos, logos and kairos and spot each in a speech?",
    "Can you name and explain the DAFOREST devices plus anaphora, antithesis, hyperbole and inclusive pronouns?",
    "Can you analyse a speech using Device + Quotation + Effect on the listener, in PEEL paragraphs?",
    "Can you explain how Mark Antony turns the crowd using irony, evidence, rhetorical questions and pathos?",
    "Can you compare how Henry V and Elizabeth I rally their troops?",
    "Can you explain why the Gettysburg Address is so effective despite being so short?",
    "Can you write a speech with a hook, signposting, three points, a counter-argument and a call to action?",
    "Can you plan your delivery: pace, pauses, projection, intonation, eye contact, gesture and posture?",
    "Can you prepare keyword cue cards and time a three-minute speech (roughly 400 to 450 words)?",
    "Can you use at least three strategies to manage nerves on competition day?",
  ],

  videos: [
    { title: "Ethos, pathos and logos explained", channel: "Mr Bruff", url: "https://www.youtube.com/results?search_query=mr+bruff+ethos+pathos+logos+persuasive+techniques" },
    { title: "Writing a persuasive speech", channel: "Mr Salles Teaches English", url: "https://www.youtube.com/results?search_query=mr+salles+how+to+write+a+speech+gcse+english" },
    { title: "Friends, Romans, countrymen: Mark Antony's speech performed", channel: "Shakespeare's Globe / RSC", url: "https://www.youtube.com/results?search_query=friends+romans+countrymen+mark+antony+speech+julius+caesar+rsc" },
    { title: "Persuasive techniques and speaking skills", channel: "BBC Bitesize", url: "https://www.youtube.com/results?search_query=bbc+bitesize+persuasive+speech+techniques+ks3" },
  ],

  quiz: {
    mcq: [
      {
        id: "spk-quiz-mcq-1",
        question: "A speaker says: 'As someone who has volunteered at the animal shelter every Saturday for two years, I have seen what happens to abandoned pets.' Which appeal is the speaker mainly using?",
        options: ["Logos", "Kairos", "Ethos", "Hyperbole"],
        answerIndex: 2,
        hint: "Is the sentence mainly about the evidence, the feelings, or the speaker's experience?",
        explanation:
          "Ethos is the appeal to the speaker's credibility. Two years of volunteering shows the speaker knows the subject first-hand. It is not mainly logos, because no facts or reasoning are given yet; the sentence is about why we should trust the speaker.",
        guideRef: "ethos-pathos-logos",
      },
      {
        id: "spk-quiz-mcq-2",
        question: "'We will not wait. We will not whisper. We will not give up.' Which device is created by repeating 'We will not' at the start of each sentence?",
        options: ["Anaphora", "Epistrophe", "Antithesis", "Hypophora"],
        answerIndex: 0,
        hint: "Where in each sentence is the repeated phrase?",
        explanation:
          "Anaphora is repetition at the start of successive sentences or clauses. Epistrophe is the tempting distractor, but that is repetition at the END of clauses (as in 'of the people, by the people, for the people').",
        guideRef: "persuasive-devices",
      },
      {
        id: "spk-quiz-mcq-3",
        question: "Which is the strongest opening for a competition speech arguing that school should start later?",
        options: [
          "Hello, my name is Sam, and today I am going to talk about why school should start later.",
          "School should start later. This is my speech about it.",
          "In this speech I will discuss the advantages and disadvantages of start times.",
          "Raise your hand if your alarm went off before six this morning. Keep it up if you felt ready to learn.",
        ],
        answerIndex: 3,
        hint: "Which one makes the audience do or feel something in the first few seconds?",
        explanation:
          "The option ‘Raise your hand if your alarm went off before six this morning.…’ is a hook: it involves the audience physically and proves the problem using the room itself. The option ‘Hello, my name is Sam, and today I am going to talk about why…’ is the classic tempting choice because it is polite, but it simply announces the topic and wastes the opening.",
        guideRef: "speech-structure",
      },
      {
        id: "spk-quiz-mcq-4",
        question: "Why should a speaker pause immediately AFTER their most important line?",
        options: [
          "To check their cue cards for the next point",
          "To let the line sink in and give the audience time to react",
          "To show the judges they have forgotten nothing",
          "To slow the speech down so it fills the time limit",
        ],
        answerIndex: 1,
        hint: "Think about what the audience is doing during that silence.",
        explanation:
          "A pause after a key line lets it land: the audience processes it, feels it and remembers it. Checking cue cards may happen, but it is not the reason for a deliberate, dramatic pause, and pauses should never be used just to pad time.",
        guideRef: "delivery",
      },
    ],
    qa: [
      {
        id: "spk-quiz-qa-1",
        question: "Explain the difference between ethos, pathos and logos, giving a short example sentence of each from a speech arguing for more trees in the school grounds.",
        marks: 3,
        hint: "One appeal is about the speaker, one about the audience's feelings, one about the argument's logic.",
        modelAnswer:
          "Ethos is the appeal to the speaker's credibility, for example: 'As a member of the Eco Club who has measured the playground temperature every day this term, I know how hot it gets.' Pathos is the appeal to the audience's emotions, for example: 'Imagine sitting in cool, green shade instead of baking on bare concrete while the birds sing above you.' Logos is the appeal to logic and evidence, for example: 'Trees cool the air around them through shade and evaporation, so more trees would mean cooler break times.'",
        markScheme: [
          { point: "Defines ethos as credibility/trust in the speaker with a fitting example", keywords: ["credib", "trust", "ethos", "expert", "experience", "reliab"] },
          { point: "Defines pathos as an appeal to emotions with a fitting example", keywords: ["emotion", "feeling", "pathos", "imagine", "pity", "sympathy"] },
          { point: "Defines logos as logic/evidence with a fitting example", keywords: ["logic", "evidence", "fact", "statistic", "logos", "reason"] },
        ],
        commonError: "Giving a definition without an example, or giving an example of pathos (an emotional story) and calling it logos.",
        guideRef: "ethos-pathos-logos",
      },
      {
        id: "spk-quiz-qa-2",
        question: "Write a hook for a speech titled 'Why we should all learn to cook' that uses a rhetorical question. Then explain in one sentence why your hook would work.",
        marks: 2,
        hint: "A good hook makes the audience think about their own lives straight away.",
        modelAnswer:
          "Hook: 'Who here could cook a proper meal for their family tonight, without a packet, a microwave or a phone call to a takeaway?' This works because the rhetorical question makes every listener silently test themselves, and most will realise the answer is 'not me', so they want to hear what comes next.",
        markScheme: [
          { point: "Writes an engaging hook containing a rhetorical question", keywords: ["?", "who here", "how many", "have you", "could you", "what if"] },
          { point: "Explains the effect on the audience (curiosity, self-reflection, engagement)", keywords: ["makes the audience", "makes listeners", "curious", "think about", "engage", "attention", "reflect"] },
        ],
        commonError: "Writing 'Today I am going to talk about cooking' (an announcement, not a hook) or forgetting to explain the effect.",
        guideRef: "speech-structure",
      },
      {
        id: "spk-quiz-qa-3",
        extract: "I know I have the body but of a weak and feeble woman; but I have the heart and stomach of a king, and of a king of England too,",
        question: "How does Elizabeth I use language in this line to persuade her soldiers to trust her as a war leader?",
        marks: 4,
        hint: "Look at what she admits first, the word 'but', and the contrast between body and heart.",
        modelAnswer:
          "Elizabeth begins with a concession, admitting she has 'the body but of a weak and feeble woman', which voices the prejudice her soldiers may hold and shows she is honest about it. The conjunction 'but' then pivots into an antithesis, contrasting her 'body' with her 'heart and stomach', where 'stomach' meant courage, so she claims the inner qualities that matter in war. The comparison 'of a king' places her on the same level as any male ruler, and the addition 'and of a king of England too' intensifies this with national pride, flattering her English audience. Together these techniques build ethos: she turns a possible weakness into a reason to trust her bravery.",
        markScheme: [
          { point: "Identifies the concession/admission of 'weak and feeble'", keywords: ["concession", "admit", "acknowledg", "weak and feeble", "prejudice", "counter-argument"] },
          { point: "Identifies the antithesis/contrast of body and heart", keywords: ["antithesis", "contrast", "pivot", "body and heart", "opposite", "juxtapos"] },
          { point: "Explains 'stomach'/'king' as courage and equal status to a male ruler", keywords: ["courage", "brave", "stomach", "king", "strength", "equal"] },
          { point: "Links to ethos/trust or national pride in 'king of England'", keywords: ["ethos", "trust", "credib", "england", "patriot", "national pride"] },
        ],
        commonError: "Taking 'stomach' literally (as the organ) or saying Elizabeth is insulting herself without seeing that the concession sets up a stronger counter-claim.",
        guideRef: "rallying-speeches",
      },
      {
        id: "spk-quiz-qa-4",
        question: "Give three pieces of advice to a nervous Year 8 student about how to use their voice during a competition speech. Explain why each helps.",
        marks: 3,
        hint: "Think about the four Ps: pace, pause, projection, pitch.",
        modelAnswer:
          "First, slow your pace slightly below what feels natural, because nerves make you rush and the audience needs time to follow ideas they can only hear once. Second, pause before and after your most important lines, because the silence builds anticipation and lets the point sink in. Third, project your voice from your diaphragm towards the back wall, so that everyone, including the judges, can hear you clearly without you shouting. You could also vary your intonation to avoid a monotone that makes the audience lose interest.",
        markScheme: [
          { point: "Advice on pace (slow down) with a reason", keywords: ["pace", "slow", "rush", "speed", "too fast"] },
          { point: "Advice on pausing with a reason", keywords: ["pause", "silence", "sink in", "let it land", "stop"] },
          { point: "Advice on projection or intonation with a reason", keywords: ["project", "loud", "diaphragm", "back of the room", "back wall", "intonation", "monotone", "pitch"] },
        ],
        commonError: "Giving advice about body language (eye contact, gestures) when the question asks specifically about voice, or listing tips without explaining why they help.",
        guideRef: "delivery",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "spk-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "spk-mcq-p1-q01",
            question: "What does the word 'rhetoric' mean?",
            options: [
              "Speaking without notes",
              "The art of using language to persuade, inform or inspire",
              "A question that does not need an answer",
              "Poetry written to be performed",
            ],
            answerIndex: 1,
            hint: "It is the big umbrella term for the whole topic.",
            explanation:
              "Rhetoric is the art of persuasive and effective speaking or writing. The tempting distractor 'a question that does not need an answer' is a RHETORICAL QUESTION, which is just one device within rhetoric.",
            guideRef: "writing-for-the-ear",
          },
          {
            id: "spk-mcq-p1-q02",
            question: "Logos is an appeal to...",
            options: ["the audience's emotions", "the speaker's reputation", "the right moment", "logic and evidence"],
            answerIndex: 3,
            hint: "It is the root of the word 'logic'.",
            explanation:
              "Logos persuades through facts, statistics, examples and reasoning. The speaker's reputation is ethos, emotions are pathos, and the right moment is kairos.",
            guideRef: "ethos-pathos-logos",
          },
          {
            id: "spk-mcq-p1-q03",
            question: "Which sentence relies MOST on pathos?",
            options: [
              "Seventy per cent of students surveyed said they wanted longer breaks.",
              "As head of the School Council, I have read every suggestion form this year.",
              "Picture a seven-year-old sitting alone on a bench while everyone else plays.",
              "If lessons start later, students will get more sleep and concentrate better.",
            ],
            answerIndex: 2,
            hint: "Which sentence makes you feel something before you think anything?",
            explanation:
              "The lonely seven-year-old creates an emotional image that makes the audience feel sympathy: pathos. The survey statistic and the cause-and-effect sentence are logos; the School Council sentence is ethos.",
            guideRef: "ethos-pathos-logos",
          },
          {
            id: "spk-mcq-p1-q04",
            question: "Kairos is best defined as...",
            options: [
              "choosing the right words for the right moment, audience and occasion",
              "the climax of a speech",
              "an appeal to the speaker's honesty",
              "a three-part list",
            ],
            answerIndex: 0,
            hint: "It comes from a Greek word connected with time.",
            explanation:
              "Kairos means 'the right moment': adapting a speech to its occasion and audience, and timing points well within it. The speech's climax may be well timed, but kairos is the broader idea of fitting the moment.",
            guideRef: "ethos-pathos-logos",
          },
          {
            id: "spk-mcq-p1-q05",
            question: "What is 'signposting' in a speech?",
            options: [
              "Pointing at a visual aid",
              "Using words that tell the audience where the speech is going",
              "Writing key words on cue cards",
              "Ending with a call to action",
            ],
            answerIndex: 1,
            hint: "Think of a road sign: it tells travellers what is coming up.",
            explanation:
              "Signposting phrases such as 'I have three reasons...' and 'Secondly...' give listeners a map. Cue cards help the speaker, not the audience, so they are not signposting.",
            guideRef: "speech-structure",
          },
          {
            id: "spk-mcq-p1-q06",
            question: "Which of these is an example of antithesis?",
            options: [
              "We will fight, we will win, we will celebrate.",
              "Isn't it time we acted?",
              "This is the worst problem in the history of the universe.",
              "We need action, not words.",
            ],
            answerIndex: 3,
            hint: "Look for two opposite ideas balanced against each other.",
            explanation:
              "'Action, not words' sets two opposites side by side: antithesis. The option ‘We will fight, we will win, we will celebrate.’ is a tricolon with anaphora, the second a rhetorical question, and the third hyperbole.",
            guideRef: "persuasive-devices",
          },
          {
            id: "spk-mcq-p1-q07",
            question: "'This homework took me roughly a million years.' Which device is this?",
            options: ["Statistic", "Hyperbole", "Anecdote", "Antithesis"],
            answerIndex: 1,
            hint: "Is the number meant to be taken literally?",
            explanation:
              "Hyperbole is deliberate exaggeration for effect. It contains a number, but it is not a statistic because it is not a real, measured figure.",
            guideRef: "persuasive-devices",
          },
          {
            id: "spk-mcq-p1-q08",
            question: "Which sentence uses inclusive pronouns to create unity with the audience?",
            options: [
              "You must stop wasting food.",
              "I think the canteen should change.",
              "Together, we can make our school greener.",
              "They never listen to students.",
            ],
            answerIndex: 2,
            hint: "Which pronouns include both the speaker and the listeners?",
            explanation:
              "'We' and 'our' include speaker and audience in the same team. 'You must...' is direct address, which can sound accusing; it separates the speaker from the listeners rather than uniting them.",
            guideRef: "persuasive-devices",
          },
          {
            id: "spk-mcq-p1-q09",
            question: "In DAFOREST, what does the 'O' stand for?",
            options: ["Opinions", "Onomatopoeia", "Oxymoron", "Openings"],
            answerIndex: 0,
            hint: "It comes between Facts and Rhetorical questions.",
            explanation:
              "DAFOREST = Direct address, Anecdote, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Triplets. Opinions are often stated confidently as if they were facts.",
            guideRef: "persuasive-devices",
          },
          {
            id: "spk-mcq-p1-q10",
            question: "'So why does this matter? Because every wasted minute is a minute we never get back.' This is an example of...",
            options: ["epistrophe", "an anecdote", "hypophora", "a call to action"],
            answerIndex: 2,
            hint: "The speaker asks a question... and then what?",
            explanation:
              "Hypophora is asking a question and immediately answering it. It is not simply a rhetorical question, because a rhetorical question is left unanswered for the audience to answer in their heads.",
            guideRef: "persuasive-devices",
          },
          {
            id: "spk-mcq-p1-q11",
            question: "Why do speeches use more repetition than written essays?",
            options: [
              "Because listeners hear each sentence only once and cannot re-read",
              "Because speakers run out of ideas",
              "Because repetition makes a speech longer",
              "Because judges count repeated words",
            ],
            answerIndex: 0,
            hint: "Think about the difference between reading and listening.",
            explanation:
              "Listeners cannot go back over a sentence, so repetition helps key ideas stick. Repetition used just to fill time would be a weakness, not a technique.",
            guideRef: "writing-for-the-ear",
          },
          {
            id: "spk-mcq-p1-q12",
            question: "Which is the best example of a call to action?",
            options: [
              "In conclusion, plastic is bad.",
              "Thank you for listening to my speech.",
              "Plastic has been a problem for many years.",
              "Sign the petition today, and bring a bottle tomorrow.",
            ],
            answerIndex: 3,
            hint: "A call to action tells the audience exactly what to DO.",
            explanation:
              "Two specific imperatives ('Sign', 'bring') tell the audience what to do and when. 'In conclusion, plastic is bad' sums up an opinion but asks nothing of the audience.",
            guideRef: "speech-structure",
          },
          {
            id: "spk-mcq-p1-q13",
            question: "A speech opens with a story about the speaker's grandmother and ends by returning to that same story. What is this structure called?",
            options: ["Chronological", "Cyclical", "Climactic", "Antithetical"],
            answerIndex: 1,
            hint: "Think of a circle.",
            explanation:
              "A cyclical structure ends where it began, which makes a speech feel complete and satisfying. Chronological means telling events in time order, which is not what is described.",
            guideRef: "speech-structure",
          },
          {
            id: "spk-mcq-p1-q14",
            question: "Which is the best advice about cue cards?",
            options: [
              "Write out the whole speech in small handwriting so you never forget a word.",
              "Use one card and keep it in your pocket.",
              "Number them and write keywords in large letters, with only the opening and closing lines in full.",
              "Avoid cue cards completely, even in a long speech.",
            ],
            answerIndex: 2,
            hint: "Cue cards should help you glance, not read.",
            explanation:
              "Numbered keyword cards let you glance down and look up again, keeping eye contact. Writing out the whole speech is tempting, but it turns the speech into a reading and kills eye contact.",
            guideRef: "delivery",
          },
          {
            id: "spk-mcq-p1-q15",
            question: "What does 'projection' mean in public speaking?",
            options: [
              "Using a projector for slides",
              "Speaking very quickly",
              "Predicting the audience's questions",
              "Making your voice carry clearly to the back of the room without shouting",
            ],
            answerIndex: 3,
            hint: "It is one of the four Ps of the voice.",
            explanation:
              "Projection is about volume and clarity, supported by breathing from the diaphragm. It is not shouting, which strains the voice and sounds aggressive.",
            guideRef: "delivery",
          },
          {
            id: "spk-mcq-p1-q16",
            question: "A speaker ends every statement with a rising tone, so 'Plastic is destroying our oceans' sounds like a question. What is the problem?",
            options: [
              "It makes confident claims sound uncertain",
              "It makes the speech too short",
              "It is too loud",
              "It breaks the rule of three",
            ],
            answerIndex: 0,
            hint: "What does a rising tone usually signal in English?",
            explanation:
              "This 'uptalk' makes statements sound like questions, so the speaker seems unsure and loses ethos. It has nothing to do with volume or the length of the speech.",
            guideRef: "delivery",
          },
          {
            id: "spk-mcq-p1-q17",
            question: "Which eye-contact technique is most effective?",
            options: [
              "Stare at one friendly person for the whole speech",
              "Look at a spot on the back wall above everyone's heads",
              "Look mainly at your cue cards",
              "Sweep the room and hold different people's gaze for about a sentence each",
            ],
            answerIndex: 3,
            hint: "You want everyone in the room to feel included.",
            explanation:
              "Holding different people's gaze around the room makes each listener feel spoken to and builds trust. Looking above heads is a common nerves trick, but the audience notices you are not really looking at them.",
            guideRef: "delivery",
          },
          {
            id: "spk-mcq-p1-q18",
            question: "Roughly how many words should you write for a three-minute speech, at a natural speaking pace?",
            options: ["About 150", "About 420", "About 900", "About 1,500"],
            answerIndex: 1,
            hint: "Confident speakers talk at about 130 to 150 words per minute.",
            explanation:
              "Three minutes at roughly 140 words per minute is about 420 words, leaving room for pauses. 900 words would force you to gabble at 300 words per minute.",
            guideRef: "nerves-and-competition",
          },
          {
            id: "spk-mcq-p1-q19",
            question: "Your heart is racing just before you speak. Which strategy is best supported by the guide?",
            options: [
              "Tell yourself to calm down and stop feeling nervous",
              "Breathe out slowly and tell yourself you are excited",
              "Speak as fast as possible to get it over with",
              "Skip your opening and start with your strongest point",
            ],
            answerIndex: 1,
            hint: "Nerves and excitement feel physically very similar.",
            explanation:
              "Slow out-breaths calm the body, and relabelling the feeling as excitement is easier than forcing calm. Trying to stop the feeling completely tends to make people focus on it even more.",
            guideRef: "nerves-and-competition",
          },
          {
            id: "spk-mcq-p1-q20",
            question: "Which sentence combines antithesis AND an inclusive pronoun?",
            options: [
              "You should be ashamed of the waste in this canteen.",
              "Is this really the best we can do?",
              "Let us be the generation that solved the problem, not the one that ignored it.",
              "Every day, every week, every year, the problem grows.",
            ],
            answerIndex: 2,
            hint: "Look for 'we/us/our' and two opposite ideas balanced together.",
            explanation:
              "'Let us' is inclusive, and 'solved the problem, not... ignored it' is antithesis. 'Is this really the best we can do?' has an inclusive pronoun but no balanced opposites; the option ‘Every day, every week, every year, the problem grows.’ is a tricolon with anaphora.",
            guideRef: "persuasive-devices",
          },
        ],
      },
      {
        id: "spk-mcq-p2",
        title: "MCQ Paper 2",
        passage: ANTONY,
        questions: [
          {
            id: "spk-mcq-p2-q01",
            question: "Who is Antony speaking to in this speech?",
            options: [
              "The conspirators who killed Caesar",
              "Caesar's soldiers before a battle",
              "The ordinary citizens of Rome at Caesar's funeral",
              "Brutus, alone, in private",
            ],
            answerIndex: 2,
            hint: "Who has just been listening to Brutus explain the assassination?",
            explanation:
              "Antony addresses the crowd of ordinary Romans (the plebeians) gathered for Caesar's funeral. Brutus has left before Antony speaks, so this is not a private conversation with him.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q02",
            question: "What does Antony mean by 'lend me your ears'?",
            options: [
              "Listen to me",
              "Give me money",
              "Repeat what I say",
              "Stop shouting",
            ],
            answerIndex: 0,
            hint: "What do we use our ears for?",
            explanation:
              "It is a polite metaphor asking for the crowd's attention. 'Lend' suggests a small, temporary favour, which makes the request sound modest.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q03",
            question: "Why might Antony begin with 'Friends' rather than 'Romans'?",
            options: [
              "Because he does not know whether they are really Romans",
              "To warm the crowd by presenting himself as one of them before making his case",
              "Because 'Friends' fits the rhyme scheme",
              "To show he is a friend of Brutus",
            ],
            answerIndex: 1,
            hint: "Which word is the most personal and affectionate?",
            explanation:
              "'Friends' is the most intimate term, so Antony first builds warmth and trust with a crowd that has just cheered his opponent. Blank verse does not rhyme, so the rhyme-scheme option cannot be right.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q04",
            question: "'I come to bury Caesar, not to praise him.' Which technique is this?",
            options: ["Hyperbole", "Rhetorical question", "Anecdote", "Antithesis"],
            answerIndex: 3,
            hint: "Look at the two verbs and the word 'not'.",
            explanation:
              "'Bury' and 'praise' are set against each other in a balanced structure: antithesis. There is no question mark and no exaggeration, so the other options do not fit.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q05",
            question: "Antony claims he has come 'not to praise' Caesar. What does he actually do in the rest of the speech?",
            options: [
              "He criticises Caesar's ambition",
              "He praises Caesar repeatedly while appearing not to",
              "He talks only about Brutus's achievements",
              "He refuses to say anything about Caesar",
            ],
            answerIndex: 1,
            hint: "Look at the examples he gives: the ransoms, the poor, the crown.",
            explanation:
              "Antony lists Caesar's generosity, compassion and refusal of the crown, which is praise. The opening line is misdirection that lowers the crowd's guard. He never criticises Caesar's ambition; he questions whether it existed.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q06",
            question: "In this extract, how many times does the word 'honourable' appear?",
            options: ["Two", "Three", "Five", "Seven"],
            answerIndex: 2,
            hint: "Count carefully, including the line 'So are they all, all honourable men'.",
            explanation:
              "It appears five times: 'For Brutus is an honourable man', 'all honourable men', two lines of 'And Brutus is an honourable man', and 'And, sure, he is an honourable man'. Students often miss 'honourable men' and count only the 'Brutus' lines.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q07",
            question: "By the end of the extract, what effect has the repetition of 'honourable' created?",
            options: [
              "It has become sarcastic, making the crowd doubt Brutus",
              "It proves that Antony admires Brutus",
              "It makes the speech sound more formal",
              "It shows Antony has forgotten his speech",
            ],
            answerIndex: 0,
            hint: "What is placed right before each repetition?",
            explanation:
              "Each repetition sits next to evidence of Caesar's goodness, so the word sounds increasingly ironic. The tempting distractor 'proves Antony admires Brutus' takes the words literally and misses the irony.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q08",
            question: "Which of these is NOT one of the pieces of evidence Antony gives that Caesar was not ambitious?",
            options: [
              "He brought captives home whose ransoms filled the treasury",
              "He wept when the poor cried",
              "He refused a kingly crown three times",
              "He gave all his land to Brutus",
            ],
            answerIndex: 3,
            hint: "Check each option against the lines in the extract.",
            explanation:
              "The extract mentions the ransoms, the weeping and the crown refused 'thrice'. Nothing in the extract says Caesar gave his land to Brutus; Caesar's will (which benefits the citizens) comes later in the scene.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q09",
            question: "'Did this in Caesar seem ambitious?' Why is a rhetorical question effective here?",
            options: [
              "It shows Antony is unsure of the answer",
              "It invites the crowd to reach the conclusion themselves, so it feels like their own idea",
              "It is the only way to speak in blank verse",
              "It gives the crowd a chance to defend Brutus",
            ],
            answerIndex: 1,
            hint: "Who supplies the answer to a rhetorical question?",
            explanation:
              "The obvious answer is 'no', and because the crowd answers it in their heads, they feel they have decided for themselves. Antony is not unsure: he has set the question up with evidence so the answer is certain.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q10",
            question: "What does 'Ambition should be made of sterner stuff' suggest?",
            options: [
              "Caesar was too ambitious",
              "An ambitious man would be harder and less soft-hearted than Caesar, who wept for the poor",
              "Brutus is tougher than Caesar",
              "Romans should be more ambitious",
            ],
            answerIndex: 1,
            hint: "Read the line just before it: 'When that the poor have cried, Caesar hath wept'.",
            explanation:
              "A truly ambitious man would be 'sterner' (harsher), so Caesar's tears for the poor suggest he was not ambitious. The option ‘Caesar was too ambitious’ is the exact opposite of Antony's point.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q11",
            question: "'You all did see that on the Lupercal / I thrice presented him a kingly crown'. What kind of evidence is Antony using?",
            options: [
              "A statistic from official records",
              "An opinion from Brutus",
              "An event the crowd witnessed for themselves",
              "A rumour he has heard",
            ],
            answerIndex: 2,
            hint: "Look at the first three words.",
            explanation:
              "'You all did see' turns the crowd into eyewitnesses, which is very hard to argue with. It is not a statistic, because no figures or records are involved.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q12",
            question: "'O judgment! thou art fled to brutish beasts, / And men have lost their reason.' What is Antony suggesting?",
            options: [
              "The crowd has stopped thinking clearly, like animals, if it cannot see the truth",
              "Brutus should be fed to wild animals",
              "The judges of Rome are corrupt",
              "Caesar behaved like a beast",
            ],
            answerIndex: 0,
            hint: "He addresses 'judgment' as if it were a person who has run away.",
            explanation:
              "Antony addresses good judgement as if it had fled to animals, implying the people have lost their reason if they believe Caesar was ambitious. Some readers also hear a pun on 'Brutus' in 'brutish', but the line is not literally about feeding Brutus to animals.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q13",
            question: "'My heart is in the coffin there with Caesar, / And I must pause till it come back to me.' Which is the best explanation of this moment?",
            options: [
              "Antony has forgotten his lines",
              "It is pure logos, giving the crowd facts about the funeral",
              "It creates pathos and gives the crowd silence in which to discuss what they have heard",
              "It shows Antony wants the speech to end",
            ],
            answerIndex: 2,
            hint: "What might a crowd do while a speaker pauses, overcome with grief?",
            explanation:
              "The metaphor of his heart in the coffin creates strong pathos, and the pause lets the crowd talk among themselves and start persuading one another. It is emotional, not factual, so it is not logos.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q14",
            question: "Brutus speaks to the crowd in prose; Antony speaks in blank verse. Which is the most convincing reason Shakespeare makes this choice?",
            options: [
              "Brutus is a less important character",
              "Verse gives Antony's emotional speech a musical rhythm that contrasts with Brutus's cool, logical prose",
              "Shakespeare ran out of time to write Brutus's speech in verse",
              "Prose was only used for kings",
            ],
            answerIndex: 1,
            hint: "Think about which speech is driven more by reason and which by feeling.",
            explanation:
              "The switch highlights the contrast between Brutus's reasoned argument and Antony's moving, rhythmic appeal. 'Prose was only used for kings' is false: Shakespeare often gives prose to ordinary characters, and kings usually speak verse.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q15",
            question: "'I speak not to disprove what Brutus spoke'. What is Antony actually doing?",
            options: [
              "Agreeing with Brutus",
              "Changing the subject",
              "Apologising to the crowd",
              "Disproving what Brutus said while claiming he is not",
            ],
            answerIndex: 3,
            hint: "Compare this claim with the evidence he has just given.",
            explanation:
              "Everything Antony has said about the ransoms, the poor and the crown disproves Brutus's claim that Caesar was ambitious. Like his opening line, this is misdirection: saying he will not do the very thing he is doing.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q16",
            question: "Why can Antony not simply say 'Brutus is a murderer and a liar'?",
            options: [
              "He promised not to blame the conspirators, and the crowd had just cheered Brutus",
              "Brutus is still standing beside him",
              "It would not fit into iambic pentameter",
              "Antony secretly agrees with Brutus",
            ],
            answerIndex: 0,
            hint: "Think about the conditions Brutus set and the crowd's mood.",
            explanation:
              "Antony was allowed to speak only if he did not blame the conspirators, and an open attack would turn a pro-Brutus crowd against him. Brutus has left, so he is not standing beside Antony.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q17",
            question: "Brutus leaves before Antony speaks. Why is this a mistake, in terms of rhetoric?",
            options: [
              "Antony now has the last word, and nobody can answer him",
              "The crowd will get bored without Brutus",
              "Brutus needed to hear the praise of Caesar",
              "Antony cannot speak without Brutus's permission",
            ],
            answerIndex: 0,
            hint: "Think about kairos: whose words will be freshest in the crowd's minds?",
            explanation:
              "Speaking last means Antony's words stay freshest, and with Brutus gone nobody can reply to his insinuations. Antony already has permission to speak, so the option ‘Antony cannot speak without Brutus's permission’ is wrong.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q18",
            question: "'You all did love him once, not without cause: / What cause withholds you then, to mourn for him?' What is the main effect of these lines?",
            options: [
              "They give a statistic about Caesar's popularity",
              "They prove that Brutus is honourable",
              "They tell the crowd to go home",
              "They remind the crowd of their own love for Caesar and make them question why they are not grieving",
            ],
            answerIndex: 3,
            hint: "Who is 'you all' and what are they being asked?",
            explanation:
              "Direct address and a rhetorical question turn the crowd's own past feelings into evidence, creating guilt and grief (pathos). There are no figures, so it is not a statistic.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q19",
            question: "Which phrase best sums up Antony's overall method in this extract?",
            options: [
              "Open, angry accusation",
              "Calm, purely logical argument",
              "Subtle persuasion that appears modest and grieving while steadily undermining Brutus",
              "Humorous storytelling",
            ],
            answerIndex: 2,
            hint: "He never openly attacks, yet the crowd ends up against Brutus.",
            explanation:
              "Antony's power comes from seeming humble and sorrowful while irony, evidence and questions do the attacking. 'Calm, purely logical' describes Brutus's speech better; Antony mixes logos with heavy pathos.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-mcq-p2-q20",
            question: "Which is the WEAKEST piece of analysis of this speech?",
            options: [
              "The repetition of 'honourable' becomes verbal irony because it is placed beside evidence that contradicts it.",
              "Antony uses lots of techniques, such as repetition, to make the speech interesting.",
              "The rhetorical question 'was this ambition?' lets the crowd reach Antony's conclusion as if it were their own.",
              "The metaphor of his heart 'in the coffin' creates pathos, and the pause gives the crowd time to persuade itself.",
            ],
            answerIndex: 1,
            hint: "Which one names a technique but never explains its specific effect?",
            explanation:
              "'Lots of techniques... to make the speech interesting' is vague feature-spotting: no quotation, no specific effect. The other three each link a precise technique and quotation to a clear effect on the crowd.",
            guideRef: "persuasive-devices",
          },
        ],
      },
      {
        id: "spk-mcq-p3",
        title: "MCQ Paper 3",
        passage: CUPS,
        questions: [
          {
            id: "spk-mcq-p3-q01",
            question: "What type of hook does the speaker use in paragraph [1]?",
            options: ["A quotation", "A personal anecdote", "A rhetorical question", "A joke"],
            answerIndex: 1,
            hint: "What is the speaker describing in the first few sentences?",
            explanation:
              "The speaker tells a short personal story about counting cups in the canteen bins: an anecdote. There is no question in paragraph [1], so it is not a rhetorical question.",
            guideRef: "speech-structure",
          },
          {
            id: "spk-mcq-p3-q02",
            question: "Why does the speaker repeat 'Two hundred and twelve'?",
            options: [
              "Because she miscounted the first time",
              "To fill time in the speech",
              "To show it is an exaggeration",
              "To make the number stick in the listeners' memory and emphasise its size",
            ],
            answerIndex: 3,
            hint: "Remember: listeners only hear each sentence once.",
            explanation:
              "Repeating the number gives it weight and helps it lodge in the audience's memory. It is a real count, not an exaggeration, so the hyperbole option is wrong.",
            guideRef: "writing-for-the-ear",
          },
          {
            id: "spk-mcq-p3-q03",
            question: "'from one lunchtime, in one school, on one ordinary Tuesday'. What is the main effect of this tricolon?",
            options: [
              "It shows how much waste comes from a very small, everyday slice of time and place",
              "It proves the school is worse than others",
              "It makes the speech sound like a poem",
              "It introduces the counter-argument",
            ],
            answerIndex: 0,
            hint: "Notice the repeated word 'one' and the word 'ordinary'.",
            explanation:
              "Each phrase shrinks the scale ('one... one... one ordinary'), so the large number seems even more shocking. Nothing compares this school with others, so the option ‘It proves the school is worse than others’ is not supported.",
            guideRef: "persuasive-devices",
          },
          {
            id: "spk-mcq-p3-q04",
            question: "What is the main function of paragraph [2]?",
            options: [
              "To tell a second anecdote",
              "To greet the audience, state the argument and signpost three reasons",
              "To give the call to action",
              "To answer the counter-argument",
            ],
            answerIndex: 1,
            hint: "Look at the last sentence of the paragraph.",
            explanation:
              "Paragraph [2] greets the judges and audience, states the main argument and maps three reasons: a roadmap. The call to action comes in paragraph [6].",
            guideRef: "speech-structure",
          },
          {
            id: "spk-mcq-p3-q05",
            question: "Why does the speaker greet the audience in paragraph [2] rather than in her very first sentence?",
            options: [
              "She forgot to do it at the start",
              "Greetings are not allowed in competitions",
              "It is required by the rule of three",
              "Starting with the anecdote grabs attention before the formalities",
            ],
            answerIndex: 3,
            hint: "What is the most valuable part of any speech?",
            explanation:
              "The opening seconds are precious, so she hooks the audience first and greets them once she has their attention. Greetings are allowed; they simply make a weak first line.",
            guideRef: "speech-structure",
          },
          {
            id: "spk-mcq-p3-q06",
            question: "'Every one of those cups will outlive us. Every one will outlive our children. Every one will still be drifting somewhere...' Which device is used?",
            options: ["Antithesis", "Hypophora", "Epistrophe", "Anaphora"],
            answerIndex: 3,
            hint: "Where does the repeated phrase appear in each sentence?",
            explanation:
              "'Every one' is repeated at the START of successive sentences: anaphora. Epistrophe would repeat words at the end of each sentence.",
            guideRef: "persuasive-devices",
          },
          {
            id: "spk-mcq-p3-q07",
            question: "Which phrase is the clearest example of hyperbole?",
            options: [
              "a mountain of plastic taller than the clock tower",
              "Two hundred and twelve plastic cups",
              "a thousand a week",
              "Bring a bottle tomorrow",
            ],
            answerIndex: 0,
            hint: "Which one is a deliberate exaggeration, not a real measurement?",
            explanation:
              "A plastic mountain taller than the clock tower is an obvious exaggeration for effect. 'Two hundred and twelve' is a real count and 'a thousand a week' is a calculation, so they are statistics, not hyperbole.",
            guideRef: "persuasive-devices",
          },
          {
            id: "spk-mcq-p3-q08",
            question: "In paragraph [4], 'Some of you are thinking, \"But reusable bottles cost money.\"' What is the speaker doing?",
            options: [
              "Changing her mind",
              "Asking the audience for money",
              "Raising a counter-argument so she can answer it",
              "Using hyperbole",
            ],
            answerIndex: 2,
            hint: "What does she do straight after this sentence?",
            explanation:
              "She anticipates an objection and then answers it ('That is true, at first. But...'). This makes her seem fair and strengthens her case. She does not change her mind; she rebuts the objection.",
            guideRef: "speech-structure",
          },
          {
            id: "spk-mcq-p3-q09",
            question: "'Reusable is not the expensive choice; throwing away is the expensive choice.' Which device is this?",
            options: ["Antithesis", "Anecdote", "Alliteration", "Tricolon"],
            answerIndex: 0,
            hint: "Two opposite choices are balanced against each other.",
            explanation:
              "'Reusable' and 'throwing away' are opposites placed in a balanced structure: antithesis. There are only two parts, not three, so it is not a tricolon.",
            guideRef: "persuasive-devices",
          },
          {
            id: "spk-mcq-p3-q10",
            question: "What is the main effect of 'We are the school that...' repeated in paragraph [5]?",
            options: [
              "It lists facts to prove the plastic statistics",
              "It builds a sense of shared pride and identity that the audience will want to live up to",
              "It makes the audience feel the school has always failed",
              "It introduces a new speaker",
            ],
            answerIndex: 1,
            hint: "Notice the inclusive 'We' and the good deeds listed.",
            explanation:
              "Anaphora with the inclusive 'We' lists proud achievements, so the audience feels part of a good community that should act. It praises the school rather than accusing it of failure.",
            guideRef: "persuasive-devices",
          },
          {
            id: "spk-mcq-p3-q11",
            question: "Which appeal dominates paragraph [3]?",
            options: ["Ethos", "Kairos", "Logos", "Pathos only"],
            answerIndex: 2,
            hint: "What is the speaker doing with the numbers?",
            explanation:
              "The speaker calculates from 200 a day to a thousand a week to thirty-eight thousand a year: step-by-step reasoning with numbers, which is logos. The end of the paragraph adds some pathos, but 'pathos only' ignores the calculation that dominates it.",
            guideRef: "ethos-pathos-logos",
          },
          {
            id: "spk-mcq-p3-q12",
            question: "'Do we really want our legacy to be a mountain of plastic taller than the clock tower?' This rhetorical question mainly appeals to...",
            options: [
              "logos, through precise measurement",
              "pathos, by stirring pride and a little shame",
              "ethos, by proving the speaker's expertise",
              "kairos, by mentioning the clock",
            ],
            answerIndex: 1,
            hint: "How is the audience meant to FEEL when they picture that mountain as their 'legacy'?",
            explanation:
              "The question makes the audience feel uncomfortable about how they will be remembered, appealing to pride and shame: pathos. The 'mountain' is an exaggeration, not a measurement, so it is not logos.",
            guideRef: "ethos-pathos-logos",
          },
          {
            id: "spk-mcq-p3-q13",
            question: "Which words act as signposts through the body of the speech?",
            options: [
              "'slightly strange', 'rubber gloves', 'counted'",
              "'Good afternoon', 'Thank you'",
              "'First', 'Secondly', 'Finally'",
              "'outlive', 'drifting', 'forgotten'",
            ],
            answerIndex: 2,
            hint: "Which words tell the audience which reason they are on?",
            explanation:
              "'First', 'Secondly' and 'Finally' mark each of the three reasons, matching the roadmap in paragraph [2]. 'Good afternoon' and 'Thank you' are courtesies, not signposts through the argument.",
            guideRef: "speech-structure",
          },
          {
            id: "spk-mcq-p3-q14",
            question: "'Sign the petition... Bring a bottle tomorrow. Tell the School Council you want change.' What is the main purpose of these sentences?",
            options: [
              "To summarise the statistics",
              "To tell an anecdote",
              "To introduce a new argument",
              "To give a call to action using imperatives",
            ],
            answerIndex: 3,
            hint: "What kind of verbs start each sentence?",
            explanation:
              "'Sign', 'Bring' and 'Tell' are imperatives giving the audience specific actions: a call to action (and another tricolon). No new argument is introduced at this stage.",
            guideRef: "speech-structure",
          },
          {
            id: "spk-mcq-p3-q15",
            question: "'Two hundred and twelve cups last Tuesday. Let's make it zero by next Tuesday.' Why is this an effective ending?",
            options: [
              "It introduces a new statistic",
              "It circles back to the opening anecdote and turns it into a clear goal",
              "It apologises for the length of the speech",
              "It uses hyperbole to scare the audience",
            ],
            answerIndex: 1,
            hint: "Where have we heard 'Two hundred and twelve' and 'Tuesday' before?",
            explanation:
              "The ending echoes the hook (cyclical structure) and sets a memorable, measurable target, so the audience leaves with a clear goal. The figure is not new; that is exactly why it works.",
            guideRef: "speech-structure",
          },
          {
            id: "spk-mcq-p3-q16",
            question: "Where in paragraph [1] would a pause be MOST effective?",
            options: [
              "Between 'Last' and 'Tuesday'",
              "After 'rubber gloves'",
              "Right after 'and counted.', before revealing 'Two hundred and twelve plastic cups.'",
              "There should be no pauses in a hook",
            ],
            answerIndex: 2,
            hint: "Pause just before a big reveal to build anticipation.",
            explanation:
              "A pause after 'and counted' makes the audience wonder what the number was, so the reveal hits harder. Pausing in the middle of 'Last Tuesday' would break up the meaning for no reason.",
            guideRef: "delivery",
          },
          {
            id: "spk-mcq-p3-q17",
            question: "This speech is about 300 words. At roughly 150 words per minute, about how long will it take to deliver (before pauses)?",
            options: ["About 30 seconds", "About 1 minute", "About 2 minutes", "About 5 minutes"],
            answerIndex: 2,
            hint: "Divide the words by the words per minute.",
            explanation:
              "300 ÷ 150 = 2 minutes. With pauses and audience reactions it might stretch a little longer, which is why speakers should time real rehearsals.",
            guideRef: "nerves-and-competition",
          },
          {
            id: "spk-mcq-p3-q18",
            question: "Which gesture would best support paragraph [2]'s final sentence ('I have three reasons...')?",
            options: [
              "Folding your arms",
              "Pointing at a judge",
              "Putting your hands in your pockets",
              "Counting the three reasons on your fingers",
            ],
            answerIndex: 3,
            hint: "A good gesture reinforces the meaning of the words.",
            explanation:
              "Counting on your fingers visually reinforces the three-part structure and helps the audience track it. Pointing at a judge would feel aggressive and has nothing to do with the words.",
            guideRef: "delivery",
          },
          {
            id: "spk-mcq-p3-q19",
            question: "A judge writes: 'Paragraph [4]'s claim that a steel bottle costs about the same as a few weeks of plastic cups needs more support.' Which change would MOST strengthen the logos here?",
            options: [
              "Saying the claim more loudly",
              "Adding another rhetorical question",
              "Giving a specific, sourced price comparison",
              "Adding an exaggeration about the cost",
            ],
            answerIndex: 2,
            hint: "Logos is about evidence the audience could check.",
            explanation:
              "Specific, sourced figures would turn a vague claim into solid evidence. More volume or another question might add emphasis or engagement, but they would not add evidence.",
            guideRef: "ethos-pathos-logos",
          },
          {
            id: "spk-mcq-p3-q20",
            question: "Besides hooking the audience, how does the anecdote in paragraph [1] build ETHOS?",
            options: [
              "It shows the speaker did her own first-hand research, so we trust her figures",
              "It makes the audience laugh",
              "It contains a large number",
              "It is the shortest paragraph",
            ],
            answerIndex: 0,
            hint: "Ethos is about why we should trust the speaker.",
            explanation:
              "Putting on gloves and counting the cups herself proves the speaker cares and knows the facts first-hand, which builds credibility. The number itself is logos; the act of gathering it builds ethos.",
            guideRef: "ethos-pathos-logos",
          },
        ],
      },
      {
        id: "spk-mcq-p4",
        title: "MCQ Paper 4",
        questions: [
          {
            id: "spk-mcq-p4-q01",
            extract: "Once more unto the breach, dear friends, once more;\nOr close the wall up with our English dead.",
            question: "What is the main effect of Henry calling his soldiers 'dear friends'?",
            options: [
              "It shows he does not know their names",
              "It presents the king as a comrade fighting alongside them, building trust",
              "It makes the speech sound sarcastic",
              "It tells the audience the scene is set in peacetime",
            ],
            answerIndex: 1,
            hint: "How would ordinary soldiers feel being called this by a king?",
            explanation:
              "'Dear friends' closes the gap between king and soldiers, building ethos and loyalty. Unlike Antony's 'honourable', nothing here signals irony, so 'sarcastic' does not fit.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-mcq-p4-q02",
            extract: "Stiffen the sinews, summon up the blood,",
            question: "Which TWO techniques are combined in this line?",
            options: [
              "Rhetorical question and statistic",
              "Antithesis and epistrophe",
              "Anecdote and hyperbole",
              "Imperatives and sibilant alliteration",
            ],
            answerIndex: 3,
            hint: "Look at the first word of each phrase, then listen to the 's' sounds.",
            explanation:
              "'Stiffen' and 'summon' are command verbs (imperatives), and the repeated 's' sounds ('Stiffen... sinews... summon') are sibilant alliteration. There is no opposition of ideas, so it is not antithesis.",
            guideRef: "rallying-speeches",
          },
          {
            extract: "But when the blast of war blows in our ears,\nThen imitate the action of the tiger;",
            id: "spk-mcq-p4-q03",
            question: "What does the image of 'the tiger' suggest Henry wants from his men?",
            options: [
              "Ferocity, strength and fearless attack",
              "Patience and quiet waiting",
              "Loyalty to their families",
              "Speed in running away",
            ],
            answerIndex: 0,
            hint: "Think about the connotations of a tiger in a hunt or a fight.",
            explanation:
              "A tiger connotes predatory power and aggression, exactly what Henry needs for a charge. 'Patience and quiet waiting' is what he says suits a man in PEACE, the opposite of what he wants now.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-mcq-p4-q04",
            extract: "I see you stand like greyhounds in the slips,\nStraining upon the start.",
            question: "What do these lines suggest about the soldiers?",
            options: [
              "They are exhausted and want to go home",
              "They are eager to charge, like hunting dogs pulling at their leashes",
              "They are lost and confused",
              "They are frightened of the enemy",
            ],
            answerIndex: 1,
            hint: "'Slips' are leashes that hold hunting dogs back.",
            explanation:
              "The simile shows the soldiers as greyhounds straining to be released: keen and full of energy. Henry may privately know they are tired, but by describing them as eager he encourages them to become eager.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-mcq-p4-q05",
            extract: "Cry 'God for Harry, England, and Saint George!'",
            question: "Why is this an effective last line for the speech?",
            options: [
              "It is a quiet, reflective ending",
              "It asks the soldiers a difficult question",
              "It is a short tricolon battle cry the soldiers can shout together",
              "It introduces a new argument",
            ],
            answerIndex: 2,
            hint: "Who is meant to say these words?",
            explanation:
              "The rallying tricolon links God, king and country, and Henry tells the soldiers to cry it themselves, turning the speech into a collective shout. It is the opposite of a quiet ending.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-mcq-p4-q06",
            extract: "My loving people,",
            question: "Why is this an effective opening to Elizabeth I's speech at Tilbury?",
            options: [
              "It warmly addresses the soldiers as her own beloved people, building loyalty",
              "It is a statistic about the army",
              "It reminds the soldiers that she is far away",
              "It is a rhetorical question",
            ],
            answerIndex: 0,
            hint: "Consider both 'My' and 'loving'.",
            explanation:
              "'My' creates a sense of belonging, and 'loving' suggests a bond of affection between queen and soldiers. Far from stressing distance, it brings her close to them.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-mcq-p4-q07",
            extract: "I know I have the body but of a weak and feeble woman; but I have the heart and stomach of a king,",
            question: "What is Elizabeth doing in this line?",
            options: [
              "Admitting she cannot lead the army",
              "Using hyperbole to insult the Spanish",
              "Asking the soldiers to protect her because she is weak",
              "Raising a common prejudice about women and then overturning it",
            ],
            answerIndex: 3,
            hint: "What happens after the word 'but'?",
            explanation:
              "She concedes the prejudice of the time, then counters it with antithesis: her body may be a woman's, but her courage is a king's. The option ‘Admitting she cannot lead the army’ stops reading at the semicolon and misses the turn.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-mcq-p4-q08",
            extract: "but I have the heart and stomach of a king,",
            question: "In Elizabeth's time, what does 'stomach' mean here?",
            options: ["Appetite", "Courage and fighting spirit", "Illness", "Wealth"],
            answerIndex: 1,
            hint: "We still say someone 'has no stomach for a fight'.",
            explanation:
              "'Stomach' here means courage or spirit. Reading it as 'appetite' takes the word in its modern, literal sense and misses the point about bravery.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-mcq-p4-q09",
            extract: "I myself will take up arms, I myself will be your general, judge, and rewarder of every one of your virtues in the field.",
            question: "What is the effect of repeating 'I myself'?",
            options: [
              "It stresses her personal commitment to share the danger and lead them",
              "It shows she will hand responsibility to others",
              "It makes the sentence sound uncertain",
              "It is an example of epistrophe",
            ],
            answerIndex: 0,
            hint: "Who will take up arms, according to this line?",
            explanation:
              "The anaphora of 'I myself' insists that she will personally fight, lead and reward them. It is repetition at the START of clauses, so it is anaphora, not epistrophe.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-mcq-p4-q10",
            extract: "and We do assure you on a word of a prince, they shall be duly paid you.",
            question: "Which appeal is 'on a word of a prince' mainly using?",
            options: ["Pathos", "Logos", "Ethos", "Hyperbole"],
            answerIndex: 2,
            hint: "What is she staking her promise on?",
            explanation:
              "She guarantees the reward with her royal honour: an appeal to her own authority and trustworthiness, which is ethos. The promise of payment has a practical, logical side, but the phrase itself rests on her credibility.",
            guideRef: "ethos-pathos-logos",
          },
          {
            id: "spk-mcq-p4-q11",
            extract: "Four score and seven years ago our fathers brought forth on this continent, a new nation,",
            question: "'Four score and seven years' is 87 years. Speaking in 1863, which event is Lincoln referring back to?",
            options: [
              "The start of the Civil War",
              "The Battle of Gettysburg",
              "The Declaration of Independence in 1776",
              "The discovery of America",
            ],
            answerIndex: 2,
            hint: "1863 minus 87.",
            explanation:
              "1863 − 87 = 1776, the year of the Declaration of Independence, when the nation was 'brought forth'. The Battle of Gettysburg was only four months earlier.",
            guideRef: "gettysburg-and-modern-voices",
          },
          {
            id: "spk-mcq-p4-q12",
            extract: "we can not dedicate—we can not consecrate—we can not hallow—this ground.",
            question: "Which description of this line is most accurate?",
            options: [
              "An ascending tricolon with anaphora, each verb more sacred than the last",
              "A single rhetorical question",
              "An anecdote about the battle",
              "Antithesis contrasting war and peace",
            ],
            answerIndex: 0,
            hint: "Count the parts and look at the repeated words at the start of each.",
            explanation:
              "Three parallel phrases, each starting 'we can not', build from 'dedicate' to the holier 'consecrate' and 'hallow'. There is no question mark, so it is not a rhetorical question.",
            guideRef: "gettysburg-and-modern-voices",
          },
          {
            id: "spk-mcq-p4-q13",
            extract: "The world will little note, nor long remember what we say here, but it can never forget what they did here.",
            question: "Which device is central to this sentence?",
            options: ["Hyperbole", "Antithesis", "Alliteration", "Statistics"],
            answerIndex: 1,
            hint: "Compare 'what we say' with 'what they did'.",
            explanation:
              "Words are set against deeds, and 'little note' against 'never forget': antithesis. There may be a little alliteration in places, but it is not what drives the sentence's meaning.",
            guideRef: "gettysburg-and-modern-voices",
          },
          {
            id: "spk-mcq-p4-q14",
            extract: "government of the people, by the people, for the people,",
            question: "Why is 'the people' placed at the end of each phrase?",
            options: [
              "Because Lincoln forgot another word",
              "To make the speech longer",
              "So that the people are the final, emphasised idea of each phrase, stressing democracy",
              "To introduce a statistic",
            ],
            answerIndex: 2,
            hint: "The end of a phrase is a position of emphasis.",
            explanation:
              "Repeating 'the people' at the end (epistrophe) puts the stress on the people every time; only the small prepositions change. This is deliberate emphasis, not padding.",
            guideRef: "gettysburg-and-modern-voices",
          },
          {
            id: "spk-mcq-p4-q15",
            question: "Lincoln's Gettysburg Address took about two minutes; the speech before it took about two hours. What lesson does this offer a competition speaker?",
            options: [
              "Always speak for as long as possible",
              "Short speeches are never taken seriously",
              "A short, carefully crafted speech can have more impact than a long one",
              "Never speak after someone else",
            ],
            answerIndex: 2,
            hint: "Which speech is still remembered and quoted?",
            explanation:
              "Lincoln's brief speech is famous while the two-hour one is largely forgotten: impact comes from precision, not length. It certainly does not show short speeches are ignored.",
            guideRef: "gettysburg-and-modern-voices",
          },
          {
            id: "spk-mcq-p4-q16",
            question: "Martin Luther King Jr's 1963 speech repeats 'I have a dream' at the start of several sentences. This is...",
            options: ["epistrophe", "antithesis", "hypophora", "anaphora"],
            answerIndex: 3,
            hint: "Where is the repeated phrase placed?",
            explanation:
              "Repetition at the START of successive sentences is anaphora. Epistrophe is repetition at the END, the most commonly confused alternative.",
            guideRef: "gettysburg-and-modern-voices",
          },
          {
            id: "spk-mcq-p4-q17",
            question: "Why did Malala Yousafzai have such strong ethos when she spoke about girls' education at the United Nations in 2013?",
            options: [
              "She was the oldest speaker there",
              "She had been shot for campaigning for girls' education, so she spoke from personal experience",
              "She used more statistics than anyone else",
              "She was a professional actor",
            ],
            answerIndex: 1,
            hint: "Ethos comes from who the speaker is and what they have lived through.",
            explanation:
              "Her personal suffering and courage in campaigning for education gave her enormous credibility. She was in fact only sixteen, so 'oldest speaker' is the opposite of the truth.",
            guideRef: "gettysburg-and-modern-voices",
          },
          {
            id: "spk-mcq-p4-q18",
            question: "In rehearsal, your speech lasts 3 minutes 25 seconds. The limit is 3 minutes. What is the best fix?",
            options: [
              "Speak faster on the day",
              "Cut a sentence or example that is least essential",
              "Remove all pauses",
              "Leave out your conclusion",
            ],
            answerIndex: 1,
            hint: "The fix should not damage your delivery or your ending.",
            explanation:
              "Cutting content keeps your pace and pauses intact. Speaking faster or removing pauses is tempting, but it makes the speech harder to follow and loses the impact of key lines.",
            guideRef: "nerves-and-competition",
          },
          {
            id: "spk-mcq-p4-q19",
            question: "Which of these is NOT usually one of the main judging criteria in a school public speaking competition?",
            options: ["Content", "Audience engagement", "Timing", "The length of the speaker's cue cards"],
            answerIndex: 3,
            hint: "Think of the five areas: content, structure, delivery, audience engagement, timing.",
            explanation:
              "Judges mark content, structure, delivery, audience engagement and timing. They may notice if you read too much from cards (delivery), but the length of the cards is not a criterion in itself.",
            guideRef: "nerves-and-competition",
          },
          {
            id: "spk-mcq-p4-q20",
            question: "Which statement best captures a key DIFFERENCE between Henry V's and Elizabeth I's rallying speeches?",
            options: [
              "Henry relies on imperatives telling his men how to fight; Elizabeth stresses her personal promise to live and die among her troops",
              "Henry uses no imagery at all; Elizabeth uses lots of animal imagery",
              "Henry speaks in prose; Elizabeth speaks in blank verse",
              "Henry admits he is weak; Elizabeth never mentions herself",
            ],
            answerIndex: 0,
            hint: "Think about who is the focus of each speech: the soldiers or the speaker.",
            explanation:
              "Henry's speech is built on commands ('Stiffen', 'set the teeth', 'Follow'), while Elizabeth's centres on her own sacrifice and promise. The option ‘Henry uses no imagery at all; Elizabeth uses lots of animal imagery’ reverses the truth: Henry is the one who uses animal imagery (tiger, greyhounds).",
            guideRef: "rallying-speeches",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "spk-qa-p1",
        title: "Written Paper 1",
        questions: [
          {
            id: "spk-qa-p1-q01",
            question: "Define 'rhetoric' and name the three persuasive appeals described by Aristotle.",
            marks: 2,
            hint: "One mark for the definition, one for naming all three appeals.",
            modelAnswer:
              "Rhetoric is the art of using language effectively to persuade, inform or inspire an audience. Aristotle described three appeals: ethos (the speaker's credibility), pathos (the audience's emotions) and logos (logic and evidence).",
            markScheme: [
              { point: "Defines rhetoric as the art of persuasive/effective language", keywords: ["persua", "art of", "convinc", "influence", "effective language", "inspire"] },
              { point: "Names ethos, pathos and logos", keywords: ["ethos", "pathos", "logos", "ethos, pathos", "pathos and logos"] },
            ],
            commonError: "Defining rhetoric as 'a rhetorical question' or naming kairos instead of one of the three main appeals.",
            guideRef: "writing-for-the-ear",
          },
          {
            id: "spk-qa-p1-q02",
            question: "Explain what 'kairos' means and give an example of a speaker getting it wrong.",
            marks: 2,
            hint: "Kairos is about time, place and audience.",
            modelAnswer:
              "Kairos means choosing the right words for the right moment, audience and occasion, including timing points well within a speech. A speaker would get it wrong by, for example, telling a string of jokes at a memorial assembly, or giving a ten-minute speech when the audience has been told it will be two minutes, because the words would clash with the mood and expectations of the moment.",
            markScheme: [
              { point: "Defines kairos as the right moment/timing/occasion", keywords: ["right moment", "right time", "timing", "occasion", "opportune", "appropriate"] },
              { point: "Gives a fitting example of poor kairos with a reason", keywords: ["joke", "funeral", "memorial", "inappropriate", "wrong time", "too long", "wrong audience", "clash"] },
            ],
            commonError: "Confusing kairos with pace (speaking speed) rather than fitting the speech to the occasion.",
            guideRef: "ethos-pathos-logos",
          },
          {
            id: "spk-qa-p1-q03",
            question: "Write a hook (one to three sentences) for a speech titled 'Homework should be optional'. Then explain two ways your hook grabs the audience.",
            marks: 3,
            hint: "Try an anecdote, a rhetorical question, a startling fact or an 'imagine' scenario. Avoid 'Today I am going to talk about...'.",
            modelAnswer:
              "Hook: 'Eleven fifteen on a Tuesday night. A Year 8 student is still at her desk, eyes stinging, copying out a worksheet she already understood at lunchtime. Is that really learning, or is it just staying up late?' This grabs the audience first because the precise time and the sensory detail ('eyes stinging') make the scene vivid and relatable, so many listeners recognise themselves. Second, the rhetorical question at the end challenges them to rethink homework, creating curiosity about the argument to come.",
            markScheme: [
              { point: "Writes an engaging hook that is not a mere announcement", keywords: ["imagine", "?", "last night", "o'clock", "picture", "raise your hand", "every night"] },
              { point: "Explains a first technique and its effect", keywords: ["anecdote", "rhetorical question", "vivid", "relatable", "statistic", "story", "sensory"] },
              { point: "Explains a second effect on the audience (curiosity, recognition, challenge)", keywords: ["curious", "curiosity", "recognise", "relate", "attention", "challenge", "want to hear", "engage"] },
            ],
            commonError: "Writing a hook and then explaining it only in general terms ('it is interesting') instead of naming techniques and specific effects.",
            guideRef: "speech-structure",
          },
          {
            id: "spk-qa-p1-q04",
            extract: "We can sit back. We can shrug. Or we can stand up and change everything.",
            question: "Identify THREE rhetorical devices in this extract and explain the effect of the speech as a whole.",
            marks: 4,
            hint: "Look at the start of each sentence, the number of sentences, the pronoun and the contrast in the last sentence.",
            modelAnswer:
              "The speaker uses anaphora, repeating 'We can' at the start of each sentence, which builds a strong, rising rhythm. The three sentences form a tricolon, with the third, longest one acting as a climax. There is also antithesis between the passive choices ('sit back', 'shrug') and the active choice ('stand up and change everything'). The inclusive pronoun 'we' makes the audience feel the decision belongs to them, so overall the extract presents action as the obvious, almost heroic choice and pushes the listeners towards it.",
            markScheme: [
              { point: "Identifies anaphora (repetition of 'We can' at the start)", keywords: ["anaphora", "repetition", "repeat", "we can"] },
              { point: "Identifies tricolon/rule of three or climax", keywords: ["tricolon", "rule of three", "three", "triplet", "climax"] },
              { point: "Identifies antithesis/contrast or inclusive pronoun", keywords: ["antithesis", "contrast", "inclusive", "pronoun", "'we'", "passive", "opposite"] },
              { point: "Explains the overall effect (pushes audience to act, unity, rising rhythm)", keywords: ["action", "act", "motivat", "unite", "rhythm", "obvious choice", "inspire", "persuade"] },
            ],
            commonError: "Listing three device names without explaining the overall effect on the audience.",
            guideRef: "persuasive-devices",
          },
          {
            id: "spk-qa-p1-q05",
            extract: "Some animals at the shelter are not adopted for a long time.",
            question: "Rewrite this flat sentence to create strong pathos, then name one technique you used.",
            marks: 2,
            hint: "Use emotive language, a specific detail or an image the audience can picture.",
            modelAnswer:
              "Rewrite: 'Every night, a scruffy grey dog called Biscuit curls up alone at the back of his cage, watching the door for a family that, after three hundred days, still has not come.' Technique: emotive language and a specific, named example ('Biscuit', 'alone', 'watching the door'), which makes the audience feel sympathy for one individual animal rather than an abstract statistic.",
            markScheme: [
              { point: "Rewrites with clear emotional impact (specific detail, emotive words)", keywords: ["alone", "lonely", "waiting", "abandoned", "cold", "every night", "watching", "heartbroken"] },
              { point: "Names a valid technique (emotive language, imagery, anecdote, specific example)", keywords: ["emotive", "imagery", "anecdote", "specific", "pathos", "named", "personif", "sympathy"] },
            ],
            commonError: "Adding a statistic instead of emotional detail: that strengthens logos, not pathos.",
            guideRef: "ethos-pathos-logos",
          },
          {
            id: "spk-qa-p1-q06",
            question: "Write a signposted introduction (after the hook) for a speech arguing that teenagers need less screen time. It should state your argument and preview three points.",
            marks: 3,
            hint: "Clear argument + three named points + signposting words.",
            modelAnswer:
              "Good afternoon, judges and fellow students. I'm not going to tell you to throw your phones in the sea, but I am going to argue that every one of us would be happier and healthier with less screen time. I have three reasons: first, our sleep; second, our concentration; and finally, the friendships we're missing while we stare at a screen.",
            markScheme: [
              { point: "States a clear argument/position", keywords: ["argue", "believe", "should", "need less", "persuade", "less screen time"] },
              { point: "Previews three distinct points", keywords: ["three reasons", "three", "sleep", "concentration", "friendship", "health", "focus"] },
              { point: "Uses signposting language", keywords: ["first", "second", "finally", "secondly", "my reasons", "i have three"] },
            ],
            commonError: "Starting the first point in detail instead of previewing all three, so the audience has no map.",
            guideRef: "speech-structure",
          },
          {
            id: "spk-qa-p1-q07",
            question: "Explain why repetition is used much more in speeches than in written essays. Refer to at least one famous example.",
            marks: 3,
            hint: "Think about how listeners receive a speech compared with readers.",
            modelAnswer:
              "Listeners hear each sentence only once and cannot go back and re-read, so repetition helps the main message stick in their memory. Repetition also creates rhythm and builds emotion when spoken aloud, so the speech gathers momentum. For example, Martin Luther King Jr's repeated 'I have a dream' uses anaphora so that each new vision feels bigger than the last and the phrase becomes the unforgettable heart of the speech. In an essay, by contrast, a reader can reread, so the same repetition would seem clumsy.",
            markScheme: [
              { point: "Listeners hear it once/cannot re-read", keywords: ["once", "re-read", "reread", "cannot go back", "can't go back", "hear", "listen"] },
              { point: "Repetition aids memory or builds rhythm/emotion", keywords: ["memor", "remember", "stick", "rhythm", "momentum", "emphasis", "build"] },
              { point: "Gives a valid famous example", keywords: ["i have a dream", "honourable", "we can not", "once more", "the people", "how dare you", "i myself"] },
            ],
            commonError: "Saying repetition is used 'to make the speech longer', or giving no example.",
            guideRef: "writing-for-the-ear",
          },
          {
            id: "spk-qa-p1-q08",
            question: "What is a call to action? Write a call to action (two or three sentences) to end a speech on kindness.",
            marks: 2,
            hint: "Specific actions, imperatives, a clear time frame.",
            modelAnswer:
              "A call to action is a specific instruction at the end of a speech telling the audience what to do next, usually in imperatives. Example: 'So tomorrow, before the first bell, do one kind thing nobody asked you to do. Hold a door, share your snack, or say one generous word to someone who looks lonely.'",
            markScheme: [
              { point: "Defines call to action as telling the audience what to do", keywords: ["tell the audience", "what to do", "instruction", "act", "action", "urge"] },
              { point: "Writes a specific call to action with imperatives", keywords: ["tomorrow", "today", "hold", "share", "say one", "do one", "smile", "help"] },
            ],
            commonError: "Writing a summary ('Kindness is important') instead of a specific action the audience can take.",
            guideRef: "speech-structure",
          },
          {
            id: "spk-qa-p1-q09",
            question: "Explain FOUR aspects of vocal delivery and how each should be used in a competition speech.",
            marks: 4,
            hint: "The four Ps.",
            modelAnswer:
              "Pace: speak at a steady pace slightly slower than feels natural, about 130 to 150 words per minute, slowing down for important lines. Pause: pause before a key line to build anticipation and after it so it sinks in. Projection: breathe from the diaphragm and aim your voice at the back wall so everyone can hear without you shouting. Pitch and intonation: vary the rise and fall of your voice to show emotion and emphasis, avoiding a flat monotone and avoiding uptalk, which makes statements sound like questions.",
            markScheme: [
              { point: "Pace explained", keywords: ["pace", "speed", "slow", "words per minute", "rush"] },
              { point: "Pause explained", keywords: ["pause", "silence", "sink in", "anticipation"] },
              { point: "Projection explained", keywords: ["project", "volume", "loud", "diaphragm", "back wall", "back of the room"] },
              { point: "Pitch/intonation explained", keywords: ["pitch", "intonation", "tone", "monotone", "uptalk", "rise and fall"] },
            ],
            commonError: "Including eye contact or gesture, which are body language rather than voice.",
            guideRef: "delivery",
          },
          {
            id: "spk-qa-p1-q10",
            question: "A friend plans to read her speech from a full script on A4 paper. Explain why cue cards are better and how she should prepare them.",
            marks: 3,
            hint: "Think about eye contact, voice and what to write on the cards.",
            modelAnswer:
              "Reading from a full script means she will spend most of the speech looking down, which loses eye contact and makes her voice flat because she is reading rather than speaking. Small cue cards let her glance down for a prompt and look straight back at the audience. She should number the cards, write only keywords or short prompts in large, clear writing, and write out just the opening and closing lines in full, then rehearse until the cards are only a safety net.",
            markScheme: [
              { point: "Full script loses eye contact/engagement", keywords: ["eye contact", "looking down", "head down", "lose the audience", "engage"] },
              { point: "Reading makes delivery flat/unnatural", keywords: ["flat", "monotone", "reading", "unnatural", "robotic", "read word for word"] },
              { point: "Good cue card preparation (keywords, numbered, large, first/last lines)", keywords: ["keyword", "number", "large", "bullet", "prompt", "first and last", "opening and closing"] },
            ],
            commonError: "Saying cue cards should contain the whole speech in small writing, which recreates the problem.",
            guideRef: "delivery",
          },
          {
            id: "spk-qa-p1-q11",
            question: "Give FOUR practical strategies for managing nerves before and during a speech, explaining why each helps.",
            marks: 4,
            hint: "Think about breathing, preparation, mindset and the opening.",
            modelAnswer:
              "First, breathe slowly, for example in for four counts and out for six, because a long out-breath calms the body's adrenaline response. Second, relabel the feeling as excitement rather than fear, because the physical signs are the same and it is easier to redirect the energy than to switch it off. Third, memorise your opening thirty seconds perfectly, because that is when nerves are strongest and a confident start builds momentum. Fourth, rehearse aloud many times, ideally in the actual room and in front of family, so that the situation feels familiar. It also helps to remember the audience wants you to succeed and cannot see your nerves as clearly as you feel them.",
            markScheme: [
              { point: "Breathing strategy with reason", keywords: ["breath", "breathe", "exhale", "inhale", "calm"] },
              { point: "Mindset/relabelling with reason", keywords: ["excite", "relabel", "reframe", "adrenaline", "positive", "mindset"] },
              { point: "Memorise opening/strong start with reason", keywords: ["memoris", "memoriz", "opening", "first line", "first thirty", "learn the start"] },
              { point: "Rehearsal or audience-on-your-side point with reason", keywords: ["rehears", "practi", "record", "family", "on your side", "familiar", "want you to succeed"] },
            ],
            commonError: "Suggesting 'don't be nervous' or 'imagine the audience isn't there', which don't give a practical method.",
            guideRef: "nerves-and-competition",
          },
          {
            id: "spk-qa-p1-q12",
            question: "'Rhetoric is just a polite word for manipulation.' How far do you agree? Refer to at least two speeches you have studied.",
            marks: 6,
            hint: "Consider both sides: a speech that manipulates and one that persuades honestly. Then reach a judgement.",
            modelAnswer:
              "There is some truth in the claim. In Julius Caesar, Mark Antony promises he has come 'to bury Caesar, not to praise him', then praises Caesar throughout, and turns 'Brutus is an honourable man' into sarcasm through repetition. He deliberately stirs the crowd's emotions until they riot, so his rhetoric is clearly manipulative. However, rhetoric can also serve honest purposes. Lincoln's Gettysburg Address uses tricolon and antithesis ('what we say here... what they did here') to honour real sacrifice and commit the nation to a just cause, without misleading anyone. Elizabeth I's promise to 'live and die amongst you all' uses pathos to strengthen soldiers facing a genuine threat. These examples suggest the tools of rhetoric are neutral: what makes them manipulative is a speaker who hides the truth or uses emotion to replace evidence. I therefore disagree with the statement overall: rhetoric is the art of persuasion, and whether it is manipulation depends on the honesty of the speaker and the purpose it serves.",
            markScheme: [
              { point: "Gives evidence for manipulation (e.g. Antony's misdirection/irony)", keywords: ["antony", "honourable", "manipulat", "irony", "misdirect", "mob", "riot"] },
              { point: "Gives a counter-example of honest/ethical rhetoric", keywords: ["lincoln", "gettysburg", "elizabeth", "malala", "honest", "ethical", "just cause"] },
              { point: "Uses an embedded quotation to support a point", keywords: ["bury caesar", "honourable man", "what we say here", "live and die", "of the people", "heart and stomach"] },
              { point: "Analyses a technique and its effect", keywords: ["tricolon", "antithesis", "pathos", "repetition", "anaphora", "rhetorical question"] },
              { point: "Argues the tools are neutral / it depends on purpose or truthfulness", keywords: ["neutral", "depends", "purpose", "intention", "truth", "honesty", "used for good"] },
              { point: "Reaches a clear, reasoned judgement", keywords: ["overall", "therefore", "i disagree", "i agree", "partly agree", "to some extent", "in conclusion"] },
            ],
            commonError: "Writing one-sided agreement without considering honest speeches, or arguing without any quotations.",
            guideRef: "ethos-pathos-logos",
          },
        ],
      },
      {
        id: "spk-qa-p2",
        title: "Written Paper 2",
        passage: HENRY,
        questions: [
          {
            id: "spk-qa-p2-q01",
            question: "Explain the situation in which King Henry gives this speech: who is he speaking to, where, and why do they need encouragement?",
            marks: 2,
            hint: "Look at the context note: Harfleur, 1415, the breach.",
            modelAnswer:
              "Henry is speaking to his English soldiers during the siege of the French town of Harfleur in 1415. They have already attacked the breach (gap) in the town walls and been driven back, so they are tired and discouraged, and he needs to rally them to charge again.",
            markScheme: [
              { point: "Identifies audience and place (English soldiers, siege of Harfleur, France)", keywords: ["soldier", "army", "troops", "harfleur", "france", "siege"] },
              { point: "Explains the need: they have been pushed back and must attack the breach again", keywords: ["breach", "pushed back", "driven back", "again", "once more", "tired", "discouraged", "failed"] },
            ],
            commonError: "Saying Henry is speaking before the Battle of Agincourt: that is a different speech ('band of brothers') in Act 4.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-qa-p2-q02",
            question: "Identify TWO imperatives in the speech and explain the effect of Henry's frequent use of commands.",
            marks: 3,
            hint: "Imperatives are command verbs, usually at the start of a clause.",
            modelAnswer:
              "Henry commands his men to 'Stiffen the sinews' and to 'set the teeth', and later to 'Follow your spirit'. The frequent imperatives give the speech urgency and authority: they leave no room for doubt or debate, and they tell the soldiers exactly what to do with their bodies, almost transforming them into fighters line by line. Commands also suit a leader in a crisis, where there is no time for gentle persuasion.",
            markScheme: [
              { point: "Quotes a first imperative", keywords: ["stiffen", "summon", "imitate", "disguise", "lend the eye"] },
              { point: "Quotes a second imperative", keywords: ["set the teeth", "stretch", "hold hard", "bend up", "follow your spirit", "cry", "dishonour not"] },
              { point: "Explains effect: urgency/authority/transformation", keywords: ["urgen", "authorit", "command", "decisive", "no doubt", "control", "transform"] },
            ],
            commonError: "Quoting nouns or descriptions (e.g. 'the tiger') as imperatives.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-qa-p2-q03",
            question: "How does Henry use animal imagery to change how the soldiers see themselves? Refer to two images.",
            marks: 4,
            hint: "The tiger and the greyhounds.",
            modelAnswer:
              "Henry tells the men to 'imitate the action of the tiger', an image with connotations of strength, ferocity and fearless attack, so he invites them to stop being tired men and become powerful predators. Later he says 'I see you stand like greyhounds in the slips, / Straining upon the start'. This simile presents them as eager hunting dogs pulling at their leashes, desperate to be released. By describing them as already eager, Henry encourages them to live up to the image, and the hunting metaphor continues in 'The game's afoot', which turns the terrifying assault into an exciting chase. Together the images make the soldiers feel fierce and keen rather than frightened.",
            markScheme: [
              { point: "Quotes/identifies the tiger image", keywords: ["tiger", "imitate the action", "action of the tiger", "imitate"] },
              { point: "Explains tiger connotations (ferocity, predator, strength)", keywords: ["fierce", "ferocity", "predator", "strength", "powerful", "aggressi", "dangerous"] },
              { point: "Quotes/identifies the greyhounds simile", keywords: ["greyhound", "slips", "straining", "simile", "hunting dog"] },
              { point: "Explains effect: eagerness/self-image/hunt makes battle exciting", keywords: ["eager", "keen", "excite", "hunt", "game's afoot", "chase", "live up to", "confiden"] },
            ],
            commonError: "Explaining what a tiger is like without linking it to how the soldiers should feel or behave.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-qa-p2-q04",
            extract: "In peace there's nothing so becomes a man\nAs modest stillness and humility:\nBut when the blast of war blows in our ears,\nThen imitate the action of the tiger;",
            question: "How does Henry use contrast in these lines to persuade his soldiers?",
            marks: 3,
            hint: "What is right in peace, and what is right in war?",
            modelAnswer:
              "Henry sets up an antithesis between peace and war. In peace, 'modest stillness and humility' suits a man, which shows Henry values gentleness and is not simply bloodthirsty. 'But' marks the turn: when 'the blast of war blows in our ears', the right behaviour changes to the ferocity of 'the tiger'. The contrast justifies the violent transformation he demands, because it presents fierceness as the correct, honourable response to war, not a loss of character. The plosive 'b' sounds in 'blast... blows' also mimic the noise of battle.",
            markScheme: [
              { point: "Identifies contrast/antithesis between peace and war", keywords: ["antithesis", "contrast", "peace and war", "peace", "opposite", "juxtapos"] },
              { point: "Explains the peace behaviour (stillness, humility) and its implication", keywords: ["stillness", "humility", "modest", "gentle", "calm", "not bloodthirsty"] },
              { point: "Explains how the contrast justifies ferocity in war", keywords: ["justif", "right response", "honourable", "transform", "ferocity", "tiger", "appropriate"] },
            ],
            commonError: "Describing peace and war separately without explaining why the contrast persuades.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-qa-p2-q05",
            question: "How does Henry build a sense of unity and pride between himself and his soldiers? Refer to at least two phrases.",
            marks: 3,
            hint: "Look at how he addresses them, and what he says about their ancestry.",
            modelAnswer:
              "Henry opens with 'dear friends', an affectionate, inclusive address that presents the king as a comrade rather than a distant commander, building ethos and loyalty. He later calls them 'you noblest English, / Whose blood is fet from fathers of war-proof', flattering every soldier as noble and descended from proven warriors, which creates national and family pride. The phrase 'our English dead' and the final cry of 'England' unite them all under one shared identity, so each soldier feels part of a great collective cause.",
            markScheme: [
              { point: "Analyses 'dear friends' as inclusive/comradely", keywords: ["dear friends", "friend", "comrade", "inclusive", "equal", "one of them"] },
              { point: "Analyses flattery/ancestry ('noblest English', 'fathers')", keywords: ["noblest", "noble", "fathers", "war-proof", "ancestor", "blood", "flatter"] },
              { point: "Explains effect: unity/national pride/loyalty", keywords: ["unity", "united", "pride", "national", "loyal", "together", "england", "patriot"] },
            ],
            commonError: "Quoting only the final line without explaining how the address builds a relationship.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-qa-p2-q06",
            extract: "I see you stand like greyhounds in the slips,\nStraining upon the start. The game's afoot:",
            question: "Analyse these lines closely. How do word choices and techniques create a sense of energy?",
            marks: 4,
            hint: "Zoom in on 'Straining', the simile and the short sentence.",
            modelAnswer:
              "The simile 'like greyhounds in the slips' compares the soldiers to racing or hunting dogs, animals famous for speed, held back on leashes. The verb 'Straining' suggests they are pulling forward with physical tension, desperate to run, so the line is full of pent-up energy waiting to be released. 'I see you' is direct address that tells the men how Henry views them, so they begin to see themselves that way. The short declarative 'The game's afoot' acts like the release of the leash: the hunt has begun, and the metaphor turns a dangerous charge into an exciting chase.",
            markScheme: [
              { point: "Identifies the simile and explains greyhounds (speed, hunting)", keywords: ["simile", "greyhound", "speed", "fast", "hunting", "racing"] },
              { point: "Analyses 'Straining' or 'slips' (pulling at leash, tension)", keywords: ["straining", "strain", "leash", "slips", "tension", "pulling", "held back"] },
              { point: "Analyses direct address 'I see you' (shaping self-image)", keywords: ["i see you", "direct address", "see themselves", "believe", "confidence", "self-image"] },
              { point: "Analyses 'The game's afoot' (hunt metaphor, release, short sentence)", keywords: ["game's afoot", "game", "hunt", "metaphor", "release", "short sentence", "begun"] },
            ],
            commonError: "Thinking 'game' means a sport or match rather than a hunted animal (the 'game' in hunting).",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-qa-p2-q07",
            extract: "Follow your spirit, and upon this charge\nCry 'God for Harry, England, and Saint George!'",
            question: "Explain why this is an effective climax to the speech.",
            marks: 3,
            hint: "Look at the structure of the cry and who will say it.",
            modelAnswer:
              "The speech ends with a tricolon, 'God for Harry, England, and Saint George', linking religion, king and country with England's patron saint, so the soldiers feel that heaven and the nation are on their side. Crucially, Henry tells them to 'Cry' it themselves: the speech turns from his words into their shout, uniting the whole army in one voice. Its short, punchy rhythm is easy to yell during a charge, making it the perfect launch point for action.",
            markScheme: [
              { point: "Identifies the tricolon/rule of three", keywords: ["tricolon", "three", "rule of three", "triplet", "list"] },
              { point: "Explains links to God/king/country (patriotism, divine support)", keywords: ["god", "king", "country", "england", "saint george", "patriot", "religio"] },
              { point: "Explains that the soldiers shout it together (unity, call to action)", keywords: ["cry", "shout", "together", "unite", "one voice", "call to action", "battle cry", "rallying"] },
            ],
            commonError: "Saying it is effective because 'it is the end' without analysing its structure or purpose.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-qa-p2-q08",
            extract: "Dishonour not your mothers; now attest\nThat those whom you call'd fathers did beget you.",
            question: "What is Henry suggesting in these lines, and how does he use pathos to persuade?",
            marks: 3,
            hint: "If the soldiers fight like cowards, what would people say about their parents?",
            modelAnswer:
              "Henry suggests that if the soldiers fight like cowards, people might think they are not truly the sons of their brave fathers, which would bring shame on their mothers. He uses the imperative 'Dishonour not' and the verb 'attest' (prove) to challenge them to prove their bloodline through courage. This is a sharp appeal to pathos, using family honour, shame and pride, emotions that would matter deeply to soldiers, to make retreat feel impossible.",
            markScheme: [
              { point: "Explains the meaning (prove they are their fathers' sons; cowardice would shame mothers)", keywords: ["prove", "sons", "fathers", "shame", "cowar", "attest", "mothers"] },
              { point: "Identifies the appeal to family honour/shame/pride as pathos", keywords: ["pathos", "honour", "shame", "pride", "family", "emotion", "guilt"] },
              { point: "Explains the effect on the soldiers' behaviour", keywords: ["fight", "brave", "courage", "not retreat", "impossible to retreat", "motivat", "challenge"] },
            ],
            commonError: "Reading 'Dishonour not your mothers' as a general instruction about respecting parents, without linking it to courage in battle.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-qa-p2-q09",
            question: "You are directing an actor playing Henry. Give three pieces of advice about how to deliver the first two lines ('Once more unto the breach... English dead'), explaining each.",
            marks: 3,
            hint: "Consider volume, pace, pause, gesture and eye contact. Think about the battlefield setting.",
            modelAnswer:
              "First, project strongly, because Henry is shouting over the noise of a siege and must reach every soldier; it should sound commanding, not strained. Second, slightly stress the repeated 'once more', perhaps with a short pause before the second one, to show his determination to try again. Third, use a sweeping gesture towards the breach and make eye contact with different soldiers on 'dear friends', so each man feels personally included. The darker second line ('our English dead') could be delivered more slowly and gravely to show he knows the cost.",
            markScheme: [
              { point: "Advice on projection/volume with reason", keywords: ["project", "loud", "volume", "shout", "carry", "noise"] },
              { point: "Advice on stress, pace or pause with reason", keywords: ["stress", "emphasis", "pause", "pace", "slow", "once more"] },
              { point: "Advice on gesture, movement or eye contact with reason", keywords: ["gesture", "point", "eye contact", "look at", "arm", "sword", "move"] },
            ],
            commonError: "Giving vague advice like 'say it with feeling' without explaining what that means or why.",
            guideRef: "delivery",
          },
          {
            id: "spk-qa-p2-q10",
            question: "Which of the three appeals (ethos, pathos, logos) is weakest in this speech, and why might Henry choose to rely so little on it?",
            marks: 3,
            hint: "Are there facts, statistics or reasoned arguments in the speech?",
            modelAnswer:
              "Logos is the weakest appeal: Henry offers almost no facts, evidence or reasoning about why the attack will succeed. This is a deliberate choice suited to the moment (kairos). The soldiers are exhausted and frightened mid-battle; a calm, logical argument about tactics would not give them courage. Instead Henry relies on pathos (pride, shame, excitement) and ethos (the king as their 'dear friend'), because what they need is energy and belief, not information.",
            markScheme: [
              { point: "Identifies logos as the weakest appeal", keywords: ["logos", "logic", "no facts", "no evidence", "reasoning"] },
              { point: "Explains the situation does not suit logic (kairos, mid-battle, emotion needed)", keywords: ["kairos", "moment", "battle", "no time", "frightened", "exhausted", "emotion", "urgent"] },
              { point: "Explains reliance on pathos/ethos instead", keywords: ["pathos", "ethos", "pride", "courage", "friend", "energy", "belief"] },
            ],
            commonError: "Choosing ethos or pathos as weakest without evidence, or not explaining why the choice suits the moment.",
            guideRef: "ethos-pathos-logos",
          },
          {
            id: "spk-qa-p2-q11",
            question: "Write the opening three or four sentences of a team talk to your school sports team before a final, using TWO techniques from Henry's speech. Label the techniques.",
            marks: 4,
            hint: "Try an inclusive address, imperatives, an animal simile or a tricolon rallying cry.",
            modelAnswer:
              "'Listen, team. One more half, my friends, one more half. They think we're tired; I see a pack of wolves that has smelled the finish line. So lift your heads, fill your lungs, and play like the whole school is watching, because it is.' Techniques: inclusive, affectionate address and repetition ('my friends', 'one more half', echoing 'Once more unto the breach, dear friends, once more'); an animal metaphor ('a pack of wolves'); and imperatives in a tricolon ('lift your heads, fill your lungs, and play').",
            markScheme: [
              { point: "Writes a fluent, motivating team talk", keywords: ["team", "come on", "let's", "together", "win", "final"] },
              { point: "Uses and labels a first technique from Henry (e.g. inclusive address, repetition)", keywords: ["inclusive", "friends", "repetition", "once more", "direct address", "one more"] },
              { point: "Uses and labels a second technique (e.g. imperatives, animal imagery)", keywords: ["imperative", "animal", "simile", "metaphor", "wolves", "lions", "tiger", "command"] },
              { point: "Includes a tricolon/rallying cry or strong close", keywords: ["tricolon", "rule of three", "rallying", "cry", "three", "climax"] },
            ],
            commonError: "Writing a good team talk but forgetting to label the techniques, or using techniques not found in Henry's speech.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-qa-p2-q12",
            question: "Some readers find Henry's speech inspiring; others find it troubling because it glorifies war. Evaluate both views and give your own judgement.",
            marks: 6,
            hint: "Use evidence for each reading. Consider the 'tiger', 'English dead', and the hunting imagery.",
            modelAnswer:
              "On one reading the speech is inspiring: Henry stands with his men as 'dear friends', flatters them as 'you noblest English', and gives frightened men the courage to act together, ending with a unifying cry for 'God', 'Harry' and 'England'. A modern sports coach or leader still borrows these techniques. However, the speech can also be troubling. Henry asks his men to 'Disguise fair nature with hard-favour'd rage', deliberately turning decent people into something ugly and violent. The hunting metaphors ('greyhounds', 'The game's afoot') make killing sound like a sport, and the casual 'close the wall up with our English dead' accepts mass death with frightening ease. Shakespeare may be showing both sides: the play elsewhere includes the ordinary soldiers' fears and the cost of war, so the speech could be read as a demonstration of how persuasive, and how dangerous, rhetoric can be. My judgement is that the speech is brilliantly effective as rhetoric, but its effectiveness is exactly what should make us cautious: it inspires by hiding the human cost of war behind pride and excitement.",
            markScheme: [
              { point: "Argues it is inspiring with evidence", keywords: ["inspir", "courage", "dear friends", "unite", "rally", "motivat"] },
              { point: "Argues it is troubling/glorifies war with evidence", keywords: ["troubl", "glorif", "violence", "rage", "hard-favour'd", "disguise fair nature", "dead"] },
              { point: "Analyses hunting/animal imagery as making war seem like sport", keywords: ["hunt", "game", "sport", "greyhound", "tiger", "chase"] },
              { point: "Analyses 'English dead' or the acceptance of death", keywords: ["english dead", "close the wall", "death", "cost", "sacrifice", "casual"] },
              { point: "Considers Shakespeare's purpose/alternative interpretation", keywords: ["shakespeare", "purpose", "both sides", "ambigu", "audience", "interpret"] },
              { point: "Reaches a clear, reasoned personal judgement", keywords: ["my judgement", "overall", "i think", "i believe", "in conclusion", "therefore"] },
            ],
            commonError: "Only arguing one side, or writing about war in general without close reference to the speech's language.",
            guideRef: "rallying-speeches",
          },
        ],
      },
      {
        id: "spk-qa-p3",
        title: "Written Paper 3",
        passage: GETTYSBURG,
        questions: [
          {
            id: "spk-qa-p3-q01",
            question: "Explain the occasion of the Gettysburg Address: when was it given, where, and for what purpose?",
            marks: 2,
            hint: "Use the context note: a battle, a cemetery, a war.",
            modelAnswer:
              "Lincoln gave the speech on 19 November 1863, during the American Civil War, at Gettysburg in Pennsylvania. The occasion was the dedication of a national cemetery for soldiers killed at the Battle of Gettysburg a few months earlier, so its purpose was to honour the dead and to inspire the living to continue the cause they died for.",
            markScheme: [
              { point: "Gives time/place/war context (1863, Gettysburg, Civil War)", keywords: ["1863", "civil war", "gettysburg", "pennsylvania", "november"] },
              { point: "States purpose: dedicating a cemetery/honouring the dead/inspiring the living", keywords: ["cemetery", "dedicat", "honour", "honor", "dead", "soldiers", "inspire"] },
            ],
            commonError: "Thinking the speech was given on the battlefield during the fighting; it was four months after the battle.",
            guideRef: "gettysburg-and-modern-voices",
          },
          {
            id: "spk-qa-p3-q02",
            question: "Explain the meaning and the effect of the opening words 'Four score and seven years ago'.",
            marks: 3,
            hint: "A score is twenty. Why not just say '87 years ago'?",
            modelAnswer:
              "'Four score and seven' means 87 years, so Lincoln is reaching back from 1863 to 1776 and the Declaration of Independence, the birth of the nation. Using 'score' rather than a plain number gives the opening a formal, old-fashioned and almost biblical tone, which suits a solemn occasion and lends the speech dignity. Starting in the past also places the war within the nation's whole history, suggesting the soldiers died to protect the founding ideals of 'Liberty' and equality.",
            markScheme: [
              { point: "Explains it means 87 years, back to 1776/the nation's founding", keywords: ["87", "eighty-seven", "1776", "declaration", "founding", "birth of the nation"] },
              { point: "Explains the formal/biblical/solemn tone", keywords: ["formal", "biblical", "bible", "solemn", "dignit", "old-fashioned", "grand"] },
              { point: "Explains the effect of beginning in the past (history, founding ideals)", keywords: ["history", "past", "ideals", "liberty", "equal", "context", "tradition"] },
            ],
            commonError: "Calculating the date wrongly or explaining the meaning without commenting on why Lincoln chose this phrasing.",
            guideRef: "gettysburg-and-modern-voices",
          },
          {
            id: "spk-qa-p3-q03",
            question: "Explain how Lincoln structures the speech across its three paragraphs, and why this structure is effective.",
            marks: 3,
            hint: "Look at the time each paragraph focuses on.",
            modelAnswer:
              "The speech moves from past to present to future. The first paragraph looks back to the nation's birth in 1776; the second describes the present civil war and the occasion of dedicating the cemetery; the third looks ahead to 'the great task remaining before us' and 'a new birth of freedom'. This structure is effective because it gives the soldiers' deaths meaning within a larger story, and it ends on the future, turning grief into a mission and leaving the audience with a sense of purpose.",
            markScheme: [
              { point: "Identifies past/present/future structure", keywords: ["past", "present", "future", "chronolog", "time"] },
              { point: "Supports with reference to paragraphs (1776, the war, new birth of freedom)", keywords: ["four score", "civil war", "new birth", "task remaining", "1776", "unfinished work"] },
              { point: "Explains effect (gives deaths meaning, ends with purpose/mission)", keywords: ["meaning", "purpose", "mission", "hope", "forward", "inspire", "grief"] },
            ],
            commonError: "Summarising each paragraph's content without naming the time structure or its effect.",
            guideRef: "gettysburg-and-modern-voices",
          },
          {
            id: "spk-qa-p3-q04",
            extract: "But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground.",
            question: "Analyse how Lincoln uses language and structure in this sentence.",
            marks: 4,
            hint: "Consider the repetition, the three verbs, the dashes and the meaning.",
            modelAnswer:
              "Lincoln uses anaphora, repeating 'we can not' at the start of each phrase, which creates a solemn, building rhythm. The three verbs form an ascending tricolon: 'dedicate', then 'consecrate' and 'hallow', which are religious words meaning 'make holy', so each step is more sacred than the last. The dashes force pauses when spoken, slowing the sentence and adding weight to each verb. Surprisingly, the point is humble: the living cannot make the ground holy because the soldiers' sacrifice already has, which honours the dead above the speakers, including Lincoln himself.",
            markScheme: [
              { point: "Identifies anaphora/repetition of 'we can not'", keywords: ["anaphora", "repetition", "repeat", "we can not"] },
              { point: "Identifies the ascending tricolon/climax of verbs", keywords: ["tricolon", "three", "ascending", "climax", "build"] },
              { point: "Analyses religious connotations of 'consecrate'/'hallow'", keywords: ["holy", "sacred", "religio", "consecrate", "hallow", "church"] },
              { point: "Explains the humility/meaning or the pauses created by dashes", keywords: ["humble", "humility", "sacrifice", "already", "dash", "pause", "honour"] },
            ],
            commonError: "Spotting the repetition but not explaining the humble meaning: that the dead, not the speakers, have made the ground holy.",
            guideRef: "gettysburg-and-modern-voices",
          },
          {
            id: "spk-qa-p3-q05",
            extract: "The world will little note, nor long remember what we say here, but it can never forget what they did here.",
            question: "Explain how antithesis works in this sentence and what it suggests about Lincoln's attitude to the soldiers.",
            marks: 3,
            hint: "Find the pairs of opposites.",
            modelAnswer:
              "The sentence balances opposites: 'what we say' against 'what they did', words against actions and the living speakers against the dead soldiers, and 'little note' against 'never forget'. This antithesis raises the soldiers' deeds far above the speeches being made, showing deep respect and humility. It suggests Lincoln believes action and sacrifice matter more than words, which honours the dead and makes the living audience feel their duty is to act, not just to talk.",
            markScheme: [
              { point: "Identifies the opposites (say/did, we/they, little note/never forget)", keywords: ["what we say", "what they did", "words", "actions", "deeds", "little note", "never forget"] },
              { point: "Names antithesis/balance and explains how it elevates the soldiers", keywords: ["antithesis", "contrast", "balance", "elevat", "above", "more important"] },
              { point: "Explains Lincoln's attitude (respect, humility, action over words)", keywords: ["respect", "humble", "humility", "honour", "honor", "admir", "action over words"] },
            ],
            commonError: "Saying this shows Lincoln thought his speech was bad, rather than recognising a deliberate, respectful technique.",
            guideRef: "gettysburg-and-modern-voices",
          },
          {
            id: "spk-qa-p3-q06",
            question: "Lincoln uses 'we', 'us' and 'our' many times. Explain the effect of these inclusive pronouns, referring to the final paragraph.",
            marks: 3,
            hint: "Who is included, and what are they being asked to do?",
            modelAnswer:
              "The inclusive pronouns bind Lincoln and his audience together as one people sharing a duty. In the final paragraph, 'It is for us the living, rather, to be dedicated here to the unfinished work' turns the listeners from passive mourners into active participants who must continue the cause. Because Lincoln includes himself in 'we', it sounds less like an order from the President and more like a promise everyone is making together, which makes the call harder to refuse.",
            markScheme: [
              { point: "Explains unity/shared identity created by the pronouns", keywords: ["unity", "together", "shared", "include", "inclusive", "one people"] },
              { point: "Quotes from the final paragraph", keywords: ["for us the living", "unfinished work", "great task", "we here highly resolve", "before us", "increased devotion"] },
              { point: "Explains the shift to shared duty/action (mourners into participants, promise not order)", keywords: ["duty", "responsib", "action", "continue", "promise", "not an order", "participa", "commit"] },
            ],
            commonError: "Saying 'we' makes the audience 'feel included' without explaining what they are included in, and why that matters.",
            guideRef: "gettysburg-and-modern-voices",
          },
          {
            id: "spk-qa-p3-q07",
            extract: "and that government of the people, by the people, for the people, shall not perish from the earth.",
            question: "Analyse why this final phrase has become one of the most quoted lines in history.",
            marks: 4,
            hint: "Consider the tricolon, what is repeated and where, what changes, and the position in the speech.",
            modelAnswer:
              "The phrase is a tricolon, three parallel parts that feel complete and are easy to remember. Each part ends with 'the people', a form of epistrophe, so emphasis falls repeatedly on ordinary citizens; only the small prepositions 'of', 'by' and 'for' change, which neatly defines democracy as government that comes from, is run by and serves the people. Placed as the final words of the speech, it is the climax and the last thing the audience hears, and 'shall not perish from the earth' gives it a grand, almost eternal scale. Its simplicity and rhythm make it ideal for repeating and quoting.",
            markScheme: [
              { point: "Identifies the tricolon/rule of three", keywords: ["tricolon", "three", "rule of three", "triplet"] },
              { point: "Identifies repetition of 'the people' at the end (epistrophe) and its emphasis", keywords: ["epistrophe", "the people", "repetition", "repeat", "emphasis"] },
              { point: "Explains the changing prepositions as a definition of democracy", keywords: ["preposition", "of, by", "democracy", "definition", "citizens", "run by"] },
              { point: "Explains its position as the climax/final words and its memorability", keywords: ["final", "climax", "last", "ending", "memorable", "quot", "perish"] },
            ],
            commonError: "Calling the repetition anaphora: 'the people' comes at the END of each phrase.",
            guideRef: "gettysburg-and-modern-voices",
          },
          {
            id: "spk-qa-p3-q08",
            question: "The Gettysburg Address is only about 270 words long. Explain why its brevity may be a strength rather than a weakness.",
            marks: 3,
            hint: "Compare it with the two-hour speech before it, and think about memory and occasion.",
            modelAnswer:
              "First, a short speech forces the speaker to choose only the most powerful words, so every sentence carries weight. Second, brevity makes it memorable: people could repeat and quote it, and schoolchildren still learn it, while Edward Everett's two-hour speech is largely forgotten. Third, a short, dignified speech suited the solemn occasion (kairos): at a cemetery, a few well-chosen words can show more respect than a long performance.",
            markScheme: [
              { point: "Brevity forces precision/every word counts", keywords: ["every word", "precise", "precision", "concise", "carefully chosen", "powerful words"] },
              { point: "Brevity aids memory/quotation (contrast with Everett)", keywords: ["memor", "remember", "quote", "learn", "everett", "two hours", "forgotten"] },
              { point: "Brevity suits the solemn occasion (kairos/respect)", keywords: ["kairos", "occasion", "solemn", "respect", "cemetery", "dignif", "appropriate"] },
            ],
            commonError: "Saying it is short 'so people don't get bored' without developing the point.",
            guideRef: "gettysburg-and-modern-voices",
          },
          {
            id: "spk-qa-p3-q09",
            question: "Lincoln never describes the horror of the battle in detail. How does he still create pathos?",
            marks: 3,
            hint: "Look at how he refers to the dead and what he asks of the living.",
            modelAnswer:
              "Lincoln creates pathos through dignified, respectful phrases rather than graphic description. He calls the battlefield 'a final resting place for those who here gave their lives that that nation might live', which presents death as a noble sacrifice. 'The last full measure of devotion' is a moving euphemism for dying that stresses how completely the soldiers gave themselves. Finally, the resolve 'that these dead shall not have died in vain' stirs the audience's grief and guilt, making them feel they must honour the sacrifice by finishing the work.",
            markScheme: [
              { point: "Notes respectful/dignified language instead of graphic detail", keywords: ["respect", "dignif", "noble", "sacrifice", "euphemism", "not graphic", "gentle"] },
              { point: "Quotes and analyses a phrase about the dead", keywords: ["gave their lives", "resting place", "full measure", "honored dead", "brave men", "struggled here"] },
              { point: "Explains emotional effect on the audience (grief, guilt, duty)", keywords: ["grief", "guilt", "sad", "duty", "in vain", "move", "emotion", "pathos"] },
            ],
            commonError: "Claiming Lincoln describes the battle vividly; he deliberately avoids gore.",
            guideRef: "gettysburg-and-modern-voices",
          },
          {
            id: "spk-qa-p3-q10",
            extract: "that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—",
            question: "If you were performing this part of the speech, where would you pause and which words would you stress? Explain your choices.",
            marks: 2,
            hint: "The dashes already suggest pauses. Which words carry the most meaning?",
            modelAnswer:
              "I would pause at each dash, after 'in vain' and after 'freedom', so each resolution lands separately and the audience can absorb it. I would stress 'not' and 'in vain', because the whole point is that the deaths must not be wasted, and 'new birth of freedom', slowing down slightly, because it is the hopeful vision the speech builds towards.",
            markScheme: [
              { point: "Identifies sensible pause points with a reason", keywords: ["pause", "dash", "after in vain", "after freedom", "let it land", "absorb"] },
              { point: "Identifies key words to stress with a reason", keywords: ["stress", "emphasis", "not", "in vain", "new birth", "freedom", "resolve"] },
            ],
            commonError: "Choosing stresses at random (e.g. 'that', 'here') without explaining why.",
            guideRef: "delivery",
          },
          {
            id: "spk-qa-p3-q11",
            question: "Both Lincoln and Mark Antony speak over the dead. Compare their purposes and their methods.",
            marks: 4,
            hint: "What does each want the audience to do? Is each speaker open about it?",
            modelAnswer:
              "Both speakers use the dead to move their audience, but their purposes differ sharply. Lincoln openly aims to honour the fallen soldiers and inspire the nation to continue their 'unfinished work'; his purpose is unifying and stated plainly. Antony's purpose is hidden: he claims he comes 'to bury Caesar, not to praise him', yet he aims to turn the crowd against Brutus. In method, Lincoln uses solemn, dignified language, tricolon and inclusive 'we' to create shared duty, while Antony uses irony ('Brutus is an honourable man'), rhetorical questions and dramatic displays of grief. Lincoln persuades by uniting; Antony persuades by stirring anger, which leads to violence.",
            markScheme: [
              { point: "Lincoln's purpose: honour the dead and inspire/unite the nation", keywords: ["honour", "honor", "inspire", "unite", "unfinished work", "continue"] },
              { point: "Antony's purpose: turn the crowd against Brutus (hidden agenda)", keywords: ["against brutus", "turn the crowd", "hidden", "revenge", "manipulat", "mob", "riot"] },
              { point: "Compares methods with evidence (tricolon/inclusive vs irony/questions)", keywords: ["tricolon", "inclusive", "irony", "honourable", "rhetorical question", "we can not"] },
              { point: "Uses comparative language and reaches a contrast in effect", keywords: ["whereas", "while", "however", "both", "in contrast", "similarly", "unlike"] },
            ],
            commonError: "Writing about the two speeches separately without directly comparing them.",
            guideRef: "antony-funeral-speech",
          },
          {
            id: "spk-qa-p3-q12",
            question: "'The world will little note, nor long remember what we say here.' Was Lincoln being genuinely modest, or was this modesty a persuasive strategy? Evaluate both possibilities.",
            marks: 5,
            hint: "Think about ethos, the focus on the soldiers and the irony of how famous the line became.",
            modelAnswer:
              "It is possible Lincoln was genuinely modest: he was not the main speaker that day, his speech was very short, and the line keeps the focus on 'what they did here' rather than on himself, which fits the respectful tone of a cemetery dedication. However, the modesty also works as a persuasive strategy. By downplaying his own words, Lincoln builds ethos as a humble leader who puts the soldiers first, which makes his later call to 'highly resolve' more trustworthy. The antithesis between saying and doing also shifts responsibility onto the audience: if words are unimportant, action is what matters, so they must act. There is a powerful irony, since the speech became one of the most remembered in history, partly because of this humility. My view is that the modesty was sincere but also skilful: a great speaker can be honest and strategic at the same time.",
            markScheme: [
              { point: "Argues for genuine modesty with evidence", keywords: ["genuine", "sincere", "modest", "not the main speaker", "short", "humble", "focus on the soldiers"] },
              { point: "Argues it is a strategy building ethos", keywords: ["ethos", "strategy", "credib", "trust", "humble leader", "deliberate"] },
              { point: "Explains how the antithesis shifts responsibility to the audience", keywords: ["antithesis", "action", "deeds", "responsib", "duty", "what they did"] },
              { point: "Notes the irony that the speech is famous", keywords: ["irony", "ironic", "remembered", "famous", "quoted", "memorial"] },
              { point: "Reaches a reasoned judgement", keywords: ["my view", "overall", "both", "i think", "in conclusion", "therefore"] },
            ],
            commonError: "Treating the question as either/or and not recognising that sincerity and strategy can coexist.",
            guideRef: "gettysburg-and-modern-voices",
          },
        ],
      },
      {
        id: "spk-qa-p4",
        title: "Written Paper 4",
        passage: TILBURY,
        questions: [
          {
            id: "spk-qa-p4-q01",
            question: "Explain the historical situation in which Elizabeth I gave this speech.",
            marks: 2,
            hint: "1588, Spain, the Armada, Tilbury.",
            modelAnswer:
              "In 1588 Spain sent the Spanish Armada against England, and an invasion army under the Duke of Parma waited in the Netherlands. Elizabeth visited her soldiers gathered at Tilbury, on the Thames in Essex, to encourage them to resist an invasion that many feared was coming.",
            markScheme: [
              { point: "Identifies the Spanish Armada / threat from Spain in 1588", keywords: ["armada", "spain", "spanish", "1588", "parma", "invasion"] },
              { point: "Identifies the audience and purpose (troops at Tilbury, encourage them)", keywords: ["troops", "soldiers", "army", "tilbury", "encourage", "rally", "inspire"] },
            ],
            commonError: "Mixing Elizabeth I up with Henry V or placing the speech in the wrong century.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-qa-p4-q02",
            question: "Why is 'My loving people' an effective way to begin this speech?",
            marks: 2,
            hint: "Consider the possessive 'My' and the adjective 'loving'.",
            modelAnswer:
              "The possessive 'My' presents the soldiers as belonging to her, like a family, which creates a personal bond rather than a distant, formal relationship. The adjective 'loving' suggests their loyalty and affection for her, and flatters them, so they are encouraged to live up to that description and fight for a queen who trusts them.",
            markScheme: [
              { point: "Analyses 'My' (belonging, personal bond, family)", keywords: ["'my'", "possessive", "belong", "personal", "family", "bond"] },
              { point: "Analyses 'loving' (affection, loyalty, flattery)", keywords: ["loving", "love", "affection", "loyal", "flatter", "warm"] },
            ],
            commonError: "Explaining that it is direct address without analysing the individual words.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-qa-p4-q03",
            extract: "but I assure you I do not desire to live to distrust my faithful and loving people. Let tyrants fear.",
            question: "Analyse how Elizabeth presents herself in these lines, focusing especially on 'Let tyrants fear.'",
            marks: 3,
            hint: "Her advisers warned her about going among armed crowds. How does she respond?",
            modelAnswer:
              "Elizabeth rejects her advisers' warnings, saying she does not want to live distrusting her 'faithful and loving people', which shows she trusts her soldiers completely and flatters their loyalty. 'Let tyrants fear' is a short, blunt declarative sentence that contrasts with her long, flowing sentences, so it lands with force. It implies that only tyrants need to fear their own people, presenting Elizabeth as a just ruler and, by contrast, hinting that her enemy, Spain, is the tyrant.",
            markScheme: [
              { point: "Explains her trust in the soldiers (rejecting advisers' warnings)", keywords: ["trust", "faithful", "loyal", "not afraid", "advisers", "distrust"] },
              { point: "Analyses the short declarative sentence and its force", keywords: ["short", "blunt", "declarative", "simple sentence", "contrast", "punch", "bold"] },
              { point: "Explains the implication: she is a just ruler, not a tyrant (Spain is the tyrant)", keywords: ["tyrant", "just", "fair", "good ruler", "spain", "enemy", "brave"] },
            ],
            commonError: "Reading 'Let tyrants fear' as a threat to her own soldiers rather than a contrast between herself and tyrants.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-qa-p4-q04",
            extract: "I know I have the body but of a weak and feeble woman; but I have the heart and stomach of a king, and of a king of England too,",
            question: "Write a PEEL paragraph analysing how Elizabeth uses this line to overcome her audience's possible doubts about her as a war leader.",
            marks: 5,
            hint: "Point, Evidence, Explain (concession, antithesis, 'stomach', 'king of England'), Link to purpose and context.",
            modelAnswer:
              "Elizabeth confronts the doubts of her age head-on by turning a supposed weakness into a source of strength. She concedes that she has 'the body but of a weak and feeble woman', voicing the common sixteenth-century belief that women were unfit to lead in war; admitting it openly makes her seem honest and disarms the objection before anyone can raise it. The conjunction 'but' then pivots into an antithesis between her 'body' and her 'heart and stomach', where 'stomach' meant courage, suggesting her true spirit is as fierce as any king's. The final addition 'and of a king of England too' builds to a climax of national pride, flattering her English troops and implying English courage is the finest of all. In this way Elizabeth builds powerful ethos, persuading soldiers who might have doubted a female commander that she is worthy of their loyalty in the face of the Armada.",
            markScheme: [
              { point: "Clear point about turning weakness into strength", keywords: ["weakness", "strength", "doubt", "overcome", "turn", "confront"] },
              { point: "Embedded evidence from the line", keywords: ["weak and feeble", "heart and stomach", "king of england", "body but of"] },
              { point: "Explains the concession and its effect", keywords: ["concession", "concede", "admit", "acknowledg", "honest", "disarm"] },
              { point: "Explains the antithesis and/or meaning of 'stomach'", keywords: ["antithesis", "contrast", "pivot", "stomach", "courage", "brave"] },
              { point: "Links to purpose/context (ethos, gender attitudes, Armada, national pride)", keywords: ["ethos", "context", "women", "female", "armada", "national pride", "loyal", "1588"] },
            ],
            commonError: "Taking 'stomach' literally, or describing the line without linking it to the audience's doubts and Elizabeth's purpose.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-qa-p4-q05",
            extract: "to lay down for my God, and for my kingdom, and for my people, my honour and my blood, even in the dust.",
            question: "Analyse the effect of the tricolon in this line.",
            marks: 3,
            hint: "What are the three things, and in what order? What will she sacrifice for them?",
            modelAnswer:
              "The tricolon 'for my God, and for my kingdom, and for my people' lists the three causes Elizabeth will die for, moving from the highest, God, down to the people standing in front of her, so the soldiers hear themselves named as the final, climactic item. The repetition of 'for my' and the extra 'and' (polysyndeton) slow the rhythm and make it sound solemn, like a vow. She offers 'my honour and my blood, even in the dust', a vivid image of dying on the ground, which shows total, personal sacrifice and builds both pathos and ethos.",
            markScheme: [
              { point: "Identifies the tricolon and its three items", keywords: ["tricolon", "three", "god", "kingdom", "people", "rule of three"] },
              { point: "Analyses order/repetition/rhythm (people as climax, 'for my', solemn vow)", keywords: ["order", "climax", "for my", "repetition", "polysyndeton", "solemn", "vow", "rhythm"] },
              { point: "Explains the sacrifice ('honour and blood, even in the dust') and its effect", keywords: ["sacrifice", "blood", "dust", "die", "death", "honour", "commit"] },
            ],
            commonError: "Naming the tricolon without explaining why the order and the sacrifice matter.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-qa-p4-q06",
            extract: "I myself will take up arms, I myself will be your general, judge, and rewarder of every one of your virtues in the field.",
            question: "Analyse how Elizabeth uses repetition and listing here to persuade the troops.",
            marks: 4,
            hint: "Look at 'I myself' and the list 'general, judge, and rewarder'.",
            modelAnswer:
              "The anaphora of 'I myself' stresses that Elizabeth will act personally rather than sending others: the reflexive 'myself' adds emphasis, as if she is insisting on her own involvement. 'Take up arms' shows a willingness to fight, which was striking for a monarch, let alone a woman, in 1588. The tricolon 'general, judge, and rewarder' presents her as leader in battle, fair judge of their conduct and generous source of rewards, so the soldiers know she will see and repay their bravery. Together these techniques build ethos and motivation: she is sharing their danger and promising that courage will be noticed.",
            markScheme: [
              { point: "Identifies anaphora of 'I myself'", keywords: ["anaphora", "i myself", "repetition", "repeat"] },
              { point: "Explains emphasis on personal commitment/fighting", keywords: ["personal", "herself", "take up arms", "fight", "commit", "involved", "share"] },
              { point: "Identifies the tricolon 'general, judge, and rewarder'", keywords: ["tricolon", "general, judge", "rewarder", "three", "list"] },
              { point: "Explains the effect on the soldiers (trust, motivation, reward)", keywords: ["ethos", "trust", "motivat", "reward", "noticed", "loyal", "brave"] },
            ],
            commonError: "Calling 'I myself' epistrophe: it is repeated at the START of clauses, so it is anaphora.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-qa-p4-q07",
            extract: "I know already, for your forwardness you have deserved rewards and crowns; and We do assure you on a word of a prince, they shall be duly paid you.",
            question: "How does Elizabeth combine practical persuasion with an appeal to her authority in this sentence?",
            marks: 2,
            hint: "What practical promise does she make? What does she stake it on?",
            modelAnswer:
              "Practically, she promises the soldiers 'rewards and crowns' (money) that 'shall be duly paid', a concrete incentive that appeals to their self-interest, a kind of logos. She guarantees this 'on a word of a prince', staking her royal honour on it and switching to the royal 'We', which is an appeal to her authority and trustworthiness (ethos).",
            markScheme: [
              { point: "Identifies the practical promise of payment/reward (logos, self-interest)", keywords: ["reward", "paid", "payment", "money", "crowns", "practical", "logos"] },
              { point: "Explains the appeal to royal authority ('word of a prince', royal 'We', ethos)", keywords: ["word of a prince", "royal", "authority", "ethos", "honour", "royal we", "trust"] },
            ],
            commonError: "Missing that 'crowns' are coins here, not literal crowns for the soldiers' heads.",
            guideRef: "ethos-pathos-logos",
          },
          {
            id: "spk-qa-p4-q08",
            question: "Explain FOUR different ways Elizabeth builds ethos across the whole speech.",
            marks: 4,
            hint: "Consider her courage, her promises, her personal sacrifice, her status and her honesty.",
            modelAnswer:
              "First, she shows courage by coming among armed troops despite advisers' warnings ('Let tyrants fear'). Second, she promises personal sacrifice, being 'resolved... to live and die amongst you all', which proves her commitment. Third, she is honest about her apparent weakness ('weak and feeble woman') before overturning it, which makes her seem trustworthy. Fourth, she uses her royal status, guaranteeing rewards 'on a word of a prince' and praising her lieutenant general, so the soldiers trust both her promises and their commander.",
            markScheme: [
              { point: "Courage/coming among the troops despite warnings", keywords: ["courage", "brave", "tyrants", "armed multitudes", "warning", "fear"] },
              { point: "Personal sacrifice/sharing the danger", keywords: ["live and die", "sacrifice", "blood", "dust", "amongst you", "share"] },
              { point: "Honesty through concession about her gender", keywords: ["weak and feeble", "honest", "admit", "concession", "woman"] },
              { point: "Royal authority/promise ('word of a prince', lieutenant general)", keywords: ["word of a prince", "prince", "royal", "authority", "lieutenant", "promise", "king"] },
            ],
            commonError: "Repeating the same point (e.g. 'she is brave') four times in different words.",
            guideRef: "ethos-pathos-logos",
          },
          {
            id: "spk-qa-p4-q09",
            question: "Accounts describe Elizabeth riding among her troops at Tilbury. Explain how a speaker's appearance, movement and body language can add to the persuasive power of a speech, using Elizabeth as an example.",
            marks: 3,
            hint: "Think about how seeing the speaker supports the words.",
            modelAnswer:
              "A speaker's appearance and movement can prove what the words claim. By coming in person and moving among her soldiers, Elizabeth acted out her promise to 'live and die amongst you all', so her ethos came from her actions as well as her language. Confident posture, eye contact and purposeful movement signal strength and calm, which the troops would read as a reason to feel confident themselves. In a competition, the same principle applies: an upright, grounded stance and open gestures make an argument look as convincing as it sounds.",
            markScheme: [
              { point: "Body language/appearance supports or proves the words", keywords: ["prove", "support", "match", "acting out", "reinforce", "show"] },
              { point: "Applies to Elizabeth (presence among troops matches 'live and die amongst you')", keywords: ["elizabeth", "among", "amongst", "riding", "present", "in person", "live and die"] },
              { point: "Explains effect of confident posture/eye contact/gesture on the audience", keywords: ["posture", "eye contact", "gesture", "confiden", "upright", "calm", "strength"] },
            ],
            commonError: "Writing only about voice, or only about Elizabeth's clothing, without linking body language to persuasion.",
            guideRef: "delivery",
          },
          {
            id: "spk-qa-p4-q10",
            question: "Write the opening of a Year 8 competition speech titled 'Shakespeare still matters'. Include ethos, a rhetorical question and a tricolon, and label each.",
            marks: 4,
            hint: "Hook first. Then show why the audience should trust you, ask a question, and use a group of three.",
            modelAnswer:
              "'A boy loves a girl his family hates. A prince can't decide whether to act. A leader is betrayed by his best friend. Sound familiar? [rhetorical question] It should: these stories fill our screens every week, and Shakespeare wrote all of them over four hundred years ago. This term I've read The Tempest, Hamlet and Romeo and Juliet [ethos: personal experience], and I'll admit I found 'thou' and 'wherefore' baffling at first. But I want to show you that Shakespeare still matters, because he understood how we love, how we argue and how we grieve [tricolon].'",
            markScheme: [
              { point: "Writes an engaging hook (not an announcement)", keywords: ["a boy", "a girl", "imagine", "picture", "loves", "raise your hand", "last week"] },
              { point: "Includes and labels ethos (experience, honesty, expertise)", keywords: ["ethos", "i've read", "i have read", "this term", "i'll admit", "as a student", "experience"] },
              { point: "Includes and labels a rhetorical question", keywords: ["rhetorical question", "?", "sound familiar", "why should", "isn't it"] },
              { point: "Includes and labels a tricolon", keywords: ["tricolon", "rule of three", "how we love", "three", "triplet"] },
            ],
            commonError: "Forgetting to label the techniques, or opening with 'Today I am going to talk about Shakespeare'.",
            guideRef: "speech-structure",
          },
          {
            id: "spk-qa-p4-q11",
            question: "Compare how Elizabeth I at Tilbury and Henry V at Harfleur try to inspire their soldiers. Refer to both speeches.",
            marks: 4,
            hint: "Similarities (inclusive address, pride) and differences (imperatives vs promises; who is the focus).",
            modelAnswer:
              "Both leaders use warm, inclusive address to close the gap between ruler and soldier: Henry calls his men 'dear friends' and Elizabeth calls hers 'My loving people'. Both also appeal to national pride, Henry with 'you noblest English' and 'England', and Elizabeth with 'a king of England too'. However, their methods differ. Henry relies on imperatives ('Stiffen the sinews') and animal imagery ('the tiger', 'greyhounds') to transform the soldiers' bodies and mood for an immediate charge. Elizabeth, by contrast, focuses on herself as a model of courage and sacrifice, promising 'to live and die amongst you all' and to be their 'general, judge, and rewarder'. Henry tells his men what to do; Elizabeth shows them what she will do.",
            markScheme: [
              { point: "Similarity: inclusive/warm address with evidence from both", keywords: ["dear friends", "loving people", "inclusive", "warm", "both"] },
              { point: "Similarity: national pride with evidence", keywords: ["england", "english", "noblest", "national", "patriot", "king of england"] },
              { point: "Difference: Henry's imperatives/animal imagery", keywords: ["imperative", "command", "stiffen", "tiger", "greyhound", "animal"] },
              { point: "Difference: Elizabeth's personal sacrifice/promise, with comparative language", keywords: ["live and die", "sacrifice", "promise", "whereas", "in contrast", "however", "general, judge"] },
            ],
            commonError: "Writing two separate summaries with no comparative connectives such as 'whereas' or 'similarly'.",
            guideRef: "rallying-speeches",
          },
          {
            id: "spk-qa-p4-q12",
            question: "The best-known version of this speech was written down decades after 1588 by a chaplain, Dr Leonel Sharp. Does it matter whether these are Elizabeth's exact words? Evaluate.",
            marks: 5,
            hint: "Consider historians' views, what we are really analysing, and whether the speech's power depends on its exact wording.",
            modelAnswer:
              "It matters to historians, because if the words were polished or partly invented later, we cannot be sure what Elizabeth actually said or how she presented herself, so we must treat the text with caution. Sharp was present at Tilbury, which gives his version some authority, and other accounts confirm she addressed the troops, so the core message is likely to be genuine. However, for a student of rhetoric it matters less: the techniques in the text, such as the concession 'weak and feeble woman' turned by antithesis into 'the heart and stomach of a king', work on readers regardless of who polished them. In fact, the speech's long survival shows how a powerful version of a speech can shape a leader's reputation. Overall, I think the uncertainty matters for history but not for analysing how persuasion works, as long as we are honest that we are analysing the recorded version.",
            markScheme: [
              { point: "Explains why authenticity matters for history (caution, polished later)", keywords: ["historian", "history", "caution", "accura", "polish", "invent", "reliab"] },
              { point: "Notes evidence supporting authenticity (Sharp present, other accounts)", keywords: ["present", "chaplain", "eyewitness", "other accounts", "sharp", "confirm"] },
              { point: "Argues techniques still work regardless of exact wording", keywords: ["techniques", "still work", "regardless", "rhetoric", "persuasi", "analys"] },
              { point: "Supports with a quotation from the speech", keywords: ["weak and feeble", "heart and stomach", "live and die", "let tyrants fear", "word of a prince"] },
              { point: "Reaches a reasoned judgement", keywords: ["overall", "i think", "therefore", "in conclusion", "it matters", "it does not matter"] },
            ],
            commonError: "Assuming the speech must be fake because it was written down later, or ignoring the question of authenticity altogether.",
            guideRef: "rallying-speeches",
          },
        ],
      },
    ],
  },
};
