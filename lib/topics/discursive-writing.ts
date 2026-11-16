import type { Topic, MCQ, QA, Passage } from "../types";

// ---------------------------------------------------------------------------
// Paper passages
// ---------------------------------------------------------------------------

const zooEssay: Passage = {
  id: "zoo-essay",
  title: "Student essay: Should zoos still exist?",
  source: "Original model essay written for this app (paragraphs numbered for reference)",
  text:
    "[1] Few childhood memories are as vivid as a first trip to the zoo: the roar behind the glass, the sticky ice cream, the giraffe bending down to stare. Yet the places that delight millions of visitors each year have become the subject of fierce debate. Supporters see modern zoos as arks for endangered species; critics see them as prisons, however well decorated. Before deciding whether zoos still deserve a place in the twenty-first century, it is worth weighing both views carefully.\n\n[2] The strongest argument in favour of zoos is conservation. Some species survive today largely because of captive breeding: the Arabian oryx, for example, had been wiped out in the wild by the early 1970s and was later reintroduced from animals bred in captivity. Furthermore, many zoos fund field research and help to protect habitats far beyond their own walls. Without such programmes, it could be argued, the list of extinct animals would be considerably longer.\n\n[3] Conversely, opponents argue that conservation is the exception rather than the rule. Many animals kept in zoos are not endangered at all, and large, wide-ranging animals such as elephants and polar bears may show signs of stress in enclosures that are a tiny fraction of their natural territory. Animal-welfare campaigners also question whether a child watching a pacing tiger is really learning about tigers at all.\n\n[4] Admittedly, these concerns are serious. However, they are arguments for better zoos rather than no zoos. The best modern zoos have replaced concrete cages with large, varied enclosures, and some have stopped keeping species that cannot thrive in captivity. Consequently, the question is perhaps not whether zoos should exist, but which kinds of zoo deserve to.\n\n[5] On balance, the case for keeping well-run, conservation-focused zoos is stronger than the case for closing them all. Shutting every zoo would end vital breeding programmes overnight, whereas raising standards would answer most of the critics' concerns. Zoos should therefore have to earn their place: if they protect species and put welfare first, they remain one of our best tools for keeping the wild alive.",
  note: "Use the paragraph numbers [1] to [5] to answer the questions.",
};

const fourDayPack: Passage = {
  id: "four-day-pack",
  title: "Source pack: Should schools move to a four-day week?",
  source: "Original practice source pack written for this app (Sources A to C are invented and labelled as such)",
  text:
    "Source A (hypothetical survey, invented for practice): In an imaginary survey of 500 pupils at one school, 78% said they would prefer a four-day week, and 41% said they would use the extra day mainly to rest.\n\nSource B (invented quotation from an imaginary head teacher): 'Stretching five days of lessons into four would leave our youngest pupils exhausted by mid-afternoon.'\n\nSource C (invented parent's anecdote): 'My partner and I both work on Fridays. Who is supposed to look after our eight-year-old?'\n\nSource D (real background): Some school districts in the United States, many of them rural, have moved to a four-day week, often citing savings on transport and heating and the hope of attracting teachers.",
  note: "When you use Sources A to C in your answers, refer to them as hypothetical or invented.",
};

const scroogeExtracts: Passage = {
  id: "scrooge-extracts",
  title: "A Christmas Carol: Scrooge before and after",
  source: "Charles Dickens, A Christmas Carol (1843), Stave One and Stave Five",
  text:
    "Extract 1 (Stave One)\nOh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster.\n\nExtract 2 (Stave Five)\nScrooge was better than his word. He did it all, and infinitely more; and to Tiny Tim, who did not die, he was a second father. He became as good a friend, as good a master, and as good a man, as the good old city knew, or any other good old city, town, or borough, in the good old world.",
  note:
    "Question focus: 'Is Scrooge's change believable?' Remember the novel's structure: Stave Two (Christmas Past) shows Scrooge's lonely childhood, Fezziwig and Belle; Stave Three (Christmas Present) shows the Cratchits and Tiny Tim; Stave Four (Yet to Come) shows Scrooge's own unmourned death.",
};

// ---------------------------------------------------------------------------
// Quiz
// ---------------------------------------------------------------------------

const quizMcq: MCQ[] = [
  {
    id: "dis-quiz-mcq-1",
    question: "Which task is asking for a discursive essay?",
    options: [
      "Write a speech persuading your head teacher to scrap uniform.",
      "'School uniform does more good than harm.' Discuss.",
      "Write a leaflet convincing parents to buy second-hand uniform.",
      "Argue that school uniform should be abolished.",
    ],
    answerIndex: 1,
    hint: "Look for the command word that invites you to consider more than one side.",
    explanation:
      "'Discuss' asks you to weigh both sides before judging, so B is discursive. D is tempting because it is about argument, but 'Argue that…' tells you which side to take from the start: that is argumentative writing. A and C are persuasive.",
    guideRef: "what-is-discursive",
  },
  {
    id: "dis-quiz-mcq-2",
    question: "Which sentence would be most suitable for the introduction of a discursive essay on zoos?",
    options: [
      "In this essay I will be talking about zoos and whether they are good or bad.",
      "Zoos are cruel prisons and every single one should be closed immediately.",
      "The dictionary defines a zoo as a place where animals are kept for people to see.",
      "Some see zoos as arks that rescue endangered species; others see them as prisons, however comfortable.",
    ],
    answerIndex: 3,
    hint: "A good introduction shows the disagreement without taking sides.",
    explanation:
      "D sets out both views in a vivid, balanced contrast, which is the 'Issue' step of CID. B is tempting because it is lively, but it gives a one-sided verdict in the introduction. A and C are the classic weak openings: mechanical and dictionary-based.",
    guideRef: "introductions",
  },
  {
    id: "dis-quiz-mcq-3",
    question: "Which sentence is correctly punctuated?",
    options: [
      "Homework can build independence; however, it can also cause stress.",
      "Homework can build independence, however, it can also cause stress.",
      "Homework can build independence however it can also cause stress.",
      "Homework can build independence; however it can, also cause stress.",
    ],
    answerIndex: 0,
    hint: "'However' is joining two complete sentences here. What punctuation does that need?",
    explanation:
      "When 'however' links two independent clauses, use a semicolon before and a comma after, as in A. B is the most tempting, but the comma before 'however' creates a comma splice, joining two full sentences with only a comma.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-quiz-mcq-4",
    question: "What is the best description of a rebuttal?",
    options: [
      "Repeating your strongest argument again in the conclusion",
      "Ignoring the opposing view so that your own side looks stronger",
      "A reasoned reply showing why an opposing point is weaker, limited or outweighed",
      "Exaggerating the other side's view so that it is easy to defeat",
    ],
    answerIndex: 2,
    hint: "A rebuttal is a response to something.",
    explanation:
      "A rebuttal answers a counter-argument with reasons, as in C. D is tempting because it also 'defeats' the other side, but exaggerating an opposing view is a straw man, which weakens your essay rather than strengthening it.",
    guideRef: "counter-rebuttal",
  },
];

const quizQa: QA[] = [
  {
    id: "dis-quiz-qa-1",
    question: "Explain two differences between discursive writing and persuasive writing.",
    marks: 2,
    hint: "Think about how many sides are explored and what kind of language is used.",
    modelAnswer:
      "First, discursive writing explores more than one side of an issue fairly and saves the writer's judgement for the conclusion, whereas persuasive writing pushes one view from the start. Second, discursive writing uses a calm, formal and impersonal tone with hedging ('it could be argued'), whereas persuasive writing often uses emotive language, rhetorical questions and direct address to the reader.",
    markScheme: [
      { point: "Discursive explores both/several sides and judges at the end; persuasive pushes one side", keywords: ["both sides", "one side", "balanced", "several sides", "more than one", "one view", "two sides"] },
      { point: "Discursive uses a calm, formal or impersonal tone; persuasive uses emotive techniques", keywords: ["emotive", "formal", "impersonal", "rhetorical question", "calm", "direct address", "neutral"] },
    ],
    commonError: "Saying only that 'persuasive is one-sided' and not explaining a second, separate difference such as tone or language.",
    guideRef: "what-is-discursive",
  },
  {
    id: "dis-quiz-qa-2",
    question: "Rewrite this sentence so that it is suitable for a discursive essay, then explain two changes you made: 'Phones in school are a total nightmare and anyone who disagrees is clueless.'",
    marks: 3,
    hint: "Remove the insults and absolute claims; add an impersonal construction and some hedging.",
    modelAnswer:
      "Rewrite: 'It could be argued that phones in school can be a serious distraction, although some people believe they are useful learning tools.' Changes: I replaced the slang and exaggeration ('total nightmare') with a formal, hedged claim ('can be a serious distraction'), and I removed the insult ('clueless') and replaced it with a fair acknowledgement of the opposing view, using the impersonal construction 'It could be argued that'.",
    markScheme: [
      { point: "Provides a formal, balanced rewrite", keywords: ["it could be argued", "it is often claimed", "many people believe", "some argue", "can be", "may be", "might"] },
      { point: "Explains removing slang/exaggeration or adding hedging", keywords: ["slang", "informal", "exaggerat", "hedg", "absolute", "total", "nightmare"] },
      { point: "Explains removing the insult/loaded language or acknowledging the other view", keywords: ["insult", "clueless", "loaded", "opposing view", "other side", "fair", "bias"] },
    ],
    commonError: "Rewriting the sentence but keeping a loaded word, or forgetting to explain the changes.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-quiz-qa-3",
    question: "Name the three things a discursive conclusion should do, and explain why a writer should not introduce a new argument there.",
    marks: 4,
    hint: "Remember WJF.",
    modelAnswer:
      "A discursive conclusion should weigh the strongest points on each side, reach a clear, reasoned judgement (for example 'On balance…'), and finish with a final thought such as a recommendation or a callback to the opening. A new argument should not appear in the conclusion because it has not been weighed against the other side, so the judgement would no longer grow out of the essay's reasoning.",
    markScheme: [
      { point: "Weigh / summarise the strongest points on both sides", keywords: ["weigh", "summarise", "both sides", "strongest point", "recap", "remind"] },
      { point: "Give a reasoned judgement", keywords: ["judgement", "judge", "on balance", "verdict", "decision", "conclude", "opinion"] },
      { point: "End with a final thought / recommendation / callback", keywords: ["final thought", "recommend", "callback", "finish", "final line", "wider", "implication"] },
      { point: "New argument has not been weighed / judgement not earned", keywords: ["not been weighed", "unweighed", "not discussed", "no evidence", "not earned", "not been considered", "unbalanced"] },
    ],
    commonError: "Listing 'summarise' only and forgetting that the conclusion must reach a judgement.",
    guideRef: "conclusions",
  },
  {
    id: "dis-quiz-qa-4",
    question: "Write a two-sentence rebuttal to this counter-argument, using 'Admittedly' and 'However': 'Banning phones in school would stop parents contacting their children in an emergency.'",
    marks: 3,
    hint: "Concede the real point first, then show why it does not defeat the case for a ban.",
    modelAnswer:
      "Admittedly, parents understandably want to be able to reach their children quickly in an emergency. However, a ban on using phones during lessons would still allow pupils to carry them on the journey, and in a genuine emergency the school office can contact any pupil within minutes.",
    markScheme: [
      { point: "Uses 'Admittedly' to concede the point fairly", keywords: ["admittedly", "concede", "understandably", "it is true", "granted"] },
      { point: "Uses 'However' to pivot to a reply", keywords: ["however", "nevertheless", "yet", "even so"] },
      { point: "Gives a reasoned rebuttal (alternative solution, limits the point or shows it is outweighed)", keywords: ["school office", "reception", "journey", "switched off", "lessons only", "still carry", "contact the school", "locker"] },
    ],
    commonError: "Simply denying the concern ('Parents will be fine') instead of answering it with a reason or solution.",
    guideRef: "counter-rebuttal",
  },
];

// ---------------------------------------------------------------------------
// MCQ Paper 1: foundations
// ---------------------------------------------------------------------------

const mcqP1: MCQ[] = [
  {
    id: "dis-mcq-p1-q01",
    question: "What does the word 'discursive' come from?",
    options: [
      "Greek for 'to persuade a crowd'",
      "French for 'to argue loudly'",
      "Latin for 'to run to and fro'",
      "Old English for 'to decide'",
    ],
    answerIndex: 2,
    hint: "Think about a mind that moves back and forth between viewpoints.",
    explanation:
      "'Discursive' comes from the Latin discurrere, 'to run to and fro', which fits writing that moves between viewpoints. 'To persuade' is tempting, but persuasion is a different kind of writing.",
    guideRef: "what-is-discursive",
  },
  {
    id: "dis-mcq-p1-q02",
    question: "Which feature is most typical of discursive writing?",
    options: [
      "A fair presentation of more than one viewpoint before a judgement",
      "Frequent rhetorical questions aimed at the reader",
      "A clear opinion stated in the first sentence",
      "Emotive language designed to make the reader angry",
    ],
    answerIndex: 0,
    hint: "Discursive writing 'runs to and fro'.",
    explanation:
      "Discursive writing weighs several viewpoints fairly before judging. An opinion in the first sentence (C) is tempting because good essays are clear, but it belongs to argumentative writing.",
    guideRef: "what-is-discursive",
  },
  {
    id: "dis-mcq-p1-q03",
    question: "Which task wording signals argumentative rather than discursive writing?",
    options: [
      "To what extent should homework be limited?",
      "Consider the arguments for and against a four-day week.",
      "Explore the case for and against zoos.",
      "Argue that AI should be banned from schoolwork.",
    ],
    answerIndex: 3,
    hint: "Which wording already tells you which side to take?",
    explanation:
      "'Argue that…' fixes your position before you start, so it is argumentative. 'To what extent' (A) can look one-sided, but it invites you to weigh how far something is true, which is discursive.",
    guideRef: "what-is-discursive",
  },
  {
    id: "dis-mcq-p1-q04",
    question: "In a block structure, what usually links the 'for' section to the 'against' section?",
    options: [
      "A new introduction",
      "A turning-point sentence such as 'However, there is another side to this debate.'",
      "The writer's final verdict",
      "A list of statistics",
    ],
    answerIndex: 1,
    hint: "The reader needs a signpost that the essay is switching sides.",
    explanation:
      "A turning-point sentence tells the reader the essay is moving to the other side. The final verdict (C) is tempting but belongs in the conclusion, not halfway through.",
    guideRef: "structures",
  },
  {
    id: "dis-mcq-p1-q05",
    question: "What is the main advantage of an alternating (point–counterpoint) structure?",
    options: [
      "It needs no planning at all.",
      "The arguments directly answer each other within each paragraph.",
      "It allows you to ignore the opposing side.",
      "It is always shorter than a block structure.",
    ],
    answerIndex: 1,
    hint: "Think about how the two sides interact.",
    explanation:
      "Alternating structure sets point and counterpoint side by side, so they genuinely clash and are weighed. A is wrong: alternating structure actually needs more careful planning than block.",
    guideRef: "structures",
  },
  {
    id: "dis-mcq-p1-q06",
    question: "Why is it often wise to present the side you finally agree with second?",
    options: [
      "Examiners only read the second half of essays.",
      "It means you can leave out the other side's best points.",
      "It leaves the reader with your stronger side fresh in mind as you reach your conclusion.",
      "It makes the essay longer.",
    ],
    answerIndex: 2,
    hint: "What does the reader remember best: the first thing or the latest thing?",
    explanation:
      "The side presented last leads naturally into the judgement. B is tempting but wrong: you must still present the other side's best points fairly.",
    guideRef: "structures",
  },
  {
    id: "dis-mcq-p1-q07",
    question: "In the CID model for introductions, what does 'I' stand for?",
    options: [
      "Issue: why the topic is debated",
      "Insult: attacking the other side",
      "Instruction: telling the reader what to think",
      "Information: a dictionary definition",
    ],
    answerIndex: 0,
    hint: "It is the step where you show the disagreement.",
    explanation:
      "CID = Context, Issue, Direction. The Issue step names the sides of the debate. 'Information: a dictionary definition' (D) is tempting but dictionary definitions are a weak, overused opening.",
    guideRef: "introductions",
  },
  {
    id: "dis-mcq-p1-q08",
    question: "Which opening is the weakest for a discursive essay on homework?",
    options: [
      "At half past nine on a school night, a pupil stares at an unfinished worksheet.",
      "Homework divides opinion like few other school traditions.",
      "Should pupils' evenings belong to the school or to the family?",
      "Since the dawn of time, humans have always done homework.",
    ],
    answerIndex: 3,
    hint: "One of these is both vague and untrue.",
    explanation:
      "'Since the dawn of time' is a cliché and is plainly untrue. C, a question, is tempting to reject, but a genuine question that the essay will answer can be an effective opening.",
    guideRef: "introductions",
  },
  {
    id: "dis-mcq-p1-q09",
    question: "What is 'register'?",
    options: [
      "The number of paragraphs in an essay",
      "A list of evidence at the end of an essay",
      "The order in which arguments appear",
      "The level of formality in language",
    ],
    answerIndex: 3,
    hint: "Discursive essays need a formal one.",
    explanation:
      "Register means how formal or informal language is. Structure (C) is about the order of arguments, which is a different concept.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-mcq-p1-q10",
    question: "Which is an impersonal construction?",
    options: [
      "I reckon uniforms are a pain.",
      "It is often claimed that uniforms reduce bullying.",
      "You know uniforms are rubbish.",
      "We all hate uniforms, don't we?",
    ],
    answerIndex: 1,
    hint: "Which one keeps the writer and the reader out of the sentence?",
    explanation:
      "'It is often claimed that…' presents a view without the writer or reader appearing in it. D may look formal because it is a question, but 'we all' and 'don't we' are personal and persuasive.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-mcq-p1-q11",
    question: "Which sentence uses hedging most effectively?",
    options: [
      "Many pupils report that homework can increase stress before exams.",
      "All pupils hate homework.",
      "Homework definitely ruins every pupil's evening.",
      "Homework always improves results.",
    ],
    answerIndex: 0,
    hint: "Look for cautious words such as 'many', 'can' or 'may'.",
    explanation:
      "'Many', 'report' and 'can' make the claim cautious and accurate. D sounds positive and calm, but 'always' is an absolute claim that one counter-example would disprove.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-mcq-p1-q12",
    question: "Which word is 'loaded' (carries a built-in judgement) and should be avoided in a balanced essay?",
    options: ["Suggest", "Significant", "Ridiculous", "Concern"],
    answerIndex: 2,
    hint: "Which word mocks a view rather than describing it?",
    explanation:
      "'Ridiculous' dismisses a view instead of weighing it. 'Significant' (B) expresses importance but is a neutral, measured word suitable for formal writing.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-mcq-p1-q13",
    question: "Which discourse marker introduces a result?",
    options: ["Similarly", "Admittedly", "Consequently", "For instance"],
    answerIndex: 2,
    hint: "Cause → ?",
    explanation:
      "'Consequently' means 'as a result'. 'Similarly' (A) adds a comparable point; it does not show cause and effect.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-mcq-p1-q14",
    question: "Which marker is used to concede (admit) a point before answering it?",
    options: ["Therefore", "Moreover", "In conclusion", "Admittedly"],
    answerIndex: 3,
    hint: "It shows you accept part of the other side's argument.",
    explanation:
      "'Admittedly' concedes a point, ready for a 'however'. 'Moreover' (B) adds a further point to the same side; it does not concede anything.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-mcq-p1-q15",
    question: "Which is the weakest kind of evidence on its own?",
    options: [
      "A large study across many schools",
      "A single anecdote about one friend",
      "The view of a relevant expert",
      "A well-known real example",
    ],
    answerIndex: 1,
    hint: "Which one cannot show a pattern?",
    explanation:
      "One anecdote is vivid but cannot prove a general pattern. An expert view (C) could be challenged, but a relevant expert still carries more weight than one personal story.",
    guideRef: "evidence",
  },
  {
    id: "dis-mcq-p1-q16",
    question: "If you invent a statistic in a timed practice essay, what should you do?",
    options: [
      "Label it clearly as hypothetical, e.g. 'imagine a survey that found…'",
      "Attach a real organisation's name so it sounds convincing",
      "Present it as fact and hope nobody checks",
      "Put it in brackets with no explanation",
    ],
    answerIndex: 0,
    hint: "Honesty matters even in practice.",
    explanation:
      "Invented evidence must be clearly labelled as hypothetical. B is the most tempting because it sounds authoritative, but putting words or numbers in a real organisation's mouth is dishonest.",
    guideRef: "evidence",
  },
  {
    id: "dis-mcq-p1-q17",
    question: "What is a 'straw man' argument?",
    options: [
      "A weak, exaggerated version of the opposing view set up to be knocked down",
      "An argument supported by a statistic",
      "The strongest version of the opposing view",
      "A conclusion that sits on the fence",
    ],
    answerIndex: 0,
    hint: "A scarecrow is easy to knock over.",
    explanation:
      "A straw man misrepresents the opposition so it is easy to defeat. C describes the opposite, steelmanning, which is what you should aim for.",
    guideRef: "counter-rebuttal",
  },
  {
    id: "dis-mcq-p1-q18",
    question: "Which sentence presents a counter-argument at its strongest?",
    options: [
      "Opponents of homework think pupils should never learn anything.",
      "Some lazy pupils just want to play games instead.",
      "People who dislike homework have obviously not thought about it.",
      "Opponents argue that homework widens the gap between pupils with quiet study space and those without.",
    ],
    answerIndex: 3,
    hint: "Which version would an opponent of homework actually agree with?",
    explanation:
      "D states a serious, reasoned objection fairly. A is tempting because it names opponents, but it exaggerates their view into a straw man.",
    guideRef: "counter-rebuttal",
  },
  {
    id: "dis-mcq-p1-q19",
    question: "Which conclusion opening best signals a reasoned judgement?",
    options: [
      "In this essay I have talked about zoos.",
      "There are lots of points on both sides, so you decide.",
      "On balance, the evidence suggests that well-run zoos should remain open.",
      "Zoos are bad.",
    ],
    answerIndex: 2,
    hint: "Look for weighing plus a verdict.",
    explanation:
      "'On balance, the evidence suggests…' weighs and judges. B is tempting because it mentions both sides, but it sits on the fence and dodges the task.",
    guideRef: "conclusions",
  },
  {
    id: "dis-mcq-p1-q20",
    question: "In a 45-minute discursive essay, roughly how long should you spend planning?",
    options: ["None: start writing at once", "5–8 minutes", "20 minutes", "The last 5 minutes"],
    answerIndex: 1,
    hint: "Long enough for a T-chart and a judgement, short enough to leave writing time.",
    explanation:
      "5–8 minutes allows a T-chart, choosing the best points and deciding a judgement. Starting at once (A) feels efficient but usually leads to drifting and repetition.",
    guideRef: "planning-novel",
  },
];

// ---------------------------------------------------------------------------
// MCQ Paper 2: language, markers and punctuation
// ---------------------------------------------------------------------------

const mcqP2: MCQ[] = [
  {
    id: "dis-mcq-p2-q01",
    question: "Which word best completes the sentence? 'Supporters say uniform saves families money; ___, opponents claim it costs more than ordinary clothes.'",
    options: ["consequently", "conversely", "similarly", "furthermore"],
    answerIndex: 1,
    hint: "The second half gives the opposite view.",
    explanation:
      "'Conversely' introduces the opposite view. 'Consequently' (A) is tempting because it is formal, but the second half is not a result of the first.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-mcq-p2-q02",
    question: "Which word best completes the sentence? 'Uniform can be expensive. ___, it may reduce competition over designer clothes.'",
    options: ["Therefore", "For example", "Nevertheless", "Similarly"],
    answerIndex: 2,
    hint: "You need a word meaning 'despite that'.",
    explanation:
      "'Nevertheless' means 'despite what has just been said'. 'Therefore' (A) would wrongly suggest that expense causes reduced competition.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-mcq-p2-q03",
    question: "Which group contains only 'adding' discourse markers?",
    options: [
      "However, whereas, conversely",
      "Therefore, thus, hence",
      "Admittedly, granted, although",
      "Furthermore, moreover, in addition",
    ],
    answerIndex: 3,
    hint: "Which words mean 'and also'?",
    explanation:
      "Furthermore, moreover and in addition all add a point to the same side. B contains cause-and-effect markers, which show results rather than adding.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-mcq-p2-q04",
    question: "Which sentence contains a comma splice?",
    options: [
      "Zoos protect species, however they also confine animals.",
      "Zoos protect species; however, they also confine animals.",
      "Although zoos protect species, they also confine animals.",
      "Zoos protect species. However, they also confine animals.",
    ],
    answerIndex: 0,
    hint: "Which sentence joins two complete sentences with only a comma?",
    explanation:
      "A joins two independent clauses with just a comma before 'however', which is a comma splice. C also has a comma between clauses, but 'Although' makes the first clause subordinate, so it is correct.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-mcq-p2-q05",
    question: "Which sentence is written in a formal register?",
    options: [
      "Loads of kids think homework is pointless.",
      "Homework's a bit of a drag, to be honest.",
      "A significant number of pupils question the value of homework.",
      "Let's face it, nobody actually likes homework.",
    ],
    answerIndex: 2,
    hint: "Look for no slang, no contractions and no chatty asides.",
    explanation:
      "C uses precise, formal vocabulary ('significant number', 'question the value'). D is tempting because it sounds confident, but 'Let's face it' is a chatty aside and 'nobody' is an over-generalisation.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-mcq-p2-q06",
    question: "Which reporting verb suggests a view is held very firmly?",
    options: ["Suggest", "Insist", "Wonder", "Concede"],
    answerIndex: 1,
    hint: "Which verb sounds the most determined?",
    explanation:
      "'Insist' signals a very firmly held view. 'Concede' (D) means to admit a point, which is the opposite of holding firm.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-mcq-p2-q07",
    question: "What does the reporting verb 'concede' mean?",
    options: [
      "To admit that a point has some truth",
      "To refuse to listen to the other side",
      "To prove a point with statistics",
      "To repeat a point for emphasis",
    ],
    answerIndex: 0,
    hint: "It is what a fair debater does when the other side makes a good point.",
    explanation:
      "To concede is to admit a point has some force. 'Refuse to listen' (B) is the opposite of conceding.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-mcq-p2-q08",
    question: "Which is the passive-voice impersonal construction?",
    options: [
      "I think phones damage concentration.",
      "Teachers say phones damage concentration.",
      "Phones totally wreck concentration.",
      "It has been suggested that phones damage concentration.",
    ],
    answerIndex: 3,
    hint: "Who is doing the suggesting? The sentence does not say.",
    explanation:
      "'It has been suggested that…' is passive and impersonal: the suggester is not named. B is tempting because it is formal and reports a view, but it is active voice with a named subject.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-mcq-p2-q09",
    question: "Which revision best hedges the claim 'Social media causes depression in teenagers'?",
    options: [
      "Social media always causes depression in every teenager.",
      "Some research suggests that heavy social media use may be linked to low mood in some teenagers.",
      "Social media is evil and causes depression.",
      "Social media might possibly perhaps maybe be linked to something.",
    ],
    answerIndex: 1,
    hint: "Cautious, but still saying something definite.",
    explanation:
      "B hedges sensibly ('some research', 'may be linked', 'some teenagers') while still making a clear point. D is over-hedged: it piles up cautious words until the sentence says nothing.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-mcq-p2-q10",
    question: "Which modal verb expresses the greatest certainty?",
    options: ["Might", "Could", "May", "Will"],
    answerIndex: 3,
    hint: "Think of the certainty ladder.",
    explanation:
      "'Will' is at the top of the certainty ladder and should be used only when the evidence is overwhelming. 'May' (C) expresses possibility, not certainty.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-mcq-p2-q11",
    question: "Which word best completes the sentence? 'Pupils who use AI to write their essays may not practise planning. ___, they may struggle in exams where AI is not allowed.'",
    options: ["Conversely", "As a result", "Admittedly", "On the other hand"],
    answerIndex: 1,
    hint: "The second sentence is a consequence of the first.",
    explanation:
      "Struggling in exams is a result of not practising, so 'As a result' fits. 'On the other hand' (D) would wrongly signal a switch to the opposite view.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-mcq-p2-q12",
    question: "Which marker would you use to introduce a final weighing in the conclusion?",
    options: ["For instance", "Moreover", "On balance", "Similarly"],
    answerIndex: 2,
    hint: "It literally refers to weighing scales.",
    explanation:
      "'On balance' signals that the writer is weighing both sides to reach a judgement. 'Moreover' (B) adds another point, which suits a body paragraph, not a final weighing.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-mcq-p2-q13",
    question: "What is wrong with this paragraph opening? 'However, furthermore, homework is useful.'",
    options: [
      "Nothing is wrong with it.",
      "It is too formal.",
      "It uses no discourse markers.",
      "It stacks two markers with contradictory jobs (contrast and addition).",
    ],
    answerIndex: 3,
    hint: "What does each marker tell the reader to expect?",
    explanation:
      "'However' signals a contrast and 'furthermore' signals an addition, so together they confuse the logic. B is wrong: the problem is muddled logic, not formality.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-mcq-p2-q14",
    question: "Which sentence is the best example of formal, balanced phrasing for an opposing view?",
    options: [
      "Critics of the four-day week point out that working parents may struggle to arrange childcare.",
      "Moaning parents say they can't cope with kids at home.",
      "Only selfish parents would oppose a four-day week.",
      "Parents will definitely all hate a four-day week.",
    ],
    answerIndex: 0,
    hint: "Fair, formal, hedged.",
    explanation:
      "A reports the objection fairly ('point out', 'may struggle'). D is calm in tone but over-generalises with 'definitely all', which a single counter-example disproves.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-mcq-p2-q15",
    question: "Which of these is NOT an appropriate use of 'I' in a discursive essay?",
    options: [
      "In the conclusion: 'I believe, on balance, that a partial ban is fairer.'",
      "In the introduction: 'I think zoos are disgusting and here is why.'",
      "Defining a term: 'By \"AI tools\" I mean programs that can draft text.'",
      "A brief, clearly signalled personal example used as an anecdote",
    ],
    answerIndex: 1,
    hint: "Where does the writer's verdict belong?",
    explanation:
      "B gives a loaded verdict in the introduction, which breaks the balance. A is acceptable because the judgement belongs in the conclusion and is reasoned.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-mcq-p2-q16",
    question: "Which word best completes the sentence? 'Zoos keep some animals that are not endangered, ___ conservation charities focus only on threatened species.'",
    options: ["whereas", "therefore", "furthermore", "for example"],
    answerIndex: 0,
    hint: "The sentence compares two different approaches.",
    explanation:
      "'Whereas' links two contrasting clauses within one sentence. 'Furthermore' (C) would wrongly suggest the second clause adds to the first rather than contrasting with it.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-mcq-p2-q17",
    question: "Which sentence would most improve the flow between a 'for' paragraph and an 'against' paragraph in a block structure?",
    options: [
      "Here are some more points.",
      "Furthermore, uniform is good.",
      "Despite these benefits, many pupils and parents see uniform very differently.",
      "In conclusion, uniform is complicated.",
    ],
    answerIndex: 2,
    hint: "You need a turning point that looks back and forwards.",
    explanation:
      "C sums up what came before ('these benefits') and signals the switch. B is tempting because it uses a discourse marker, but 'Furthermore' continues the same side instead of turning.",
    guideRef: "structures",
  },
  {
    id: "dis-mcq-p2-q18",
    question: "Which sentence uses a semicolon correctly to balance two views?",
    options: [
      "Some see homework as practice; others see it as a burden.",
      "Some see homework; as practice, others as a burden.",
      "Some see homework as practice; and others see it as a burden.",
      "Some; see homework as practice others as a burden.",
    ],
    answerIndex: 0,
    hint: "A semicolon sits between two balanced halves, with no 'and' needed.",
    explanation:
      "A joins two balanced, complete clauses with a semicolon. C is tempting, but a semicolon should not normally be followed by 'and': that is the job of a comma or nothing.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-mcq-p2-q19",
    question: "A student writes: 'Uniform is great. Moreover, it is good. Furthermore, it is nice.' What is the main weakness?",
    options: [
      "It is too balanced.",
      "It uses too few discourse markers.",
      "It uses semicolons wrongly.",
      "The markers add nothing because the 'points' are repetitive and vague.",
    ],
    answerIndex: 3,
    hint: "Do the markers introduce genuinely new ideas?",
    explanation:
      "Markers only work when they link real ideas; here 'great', 'good' and 'nice' are the same vague point repeated. B is wrong: adding more markers would not fix empty content.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-mcq-p2-q20",
    question: "Which sentence is the most precise use of 'consequently'?",
    options: [
      "Consequently, some people like zoos.",
      "Large animals have far less space in zoos than in the wild; consequently, some show signs of stress.",
      "Zoos are fun. Consequently, they have gift shops.",
      "Consequently, in conclusion, overall, zoos are good.",
    ],
    answerIndex: 1,
    hint: "'Consequently' must introduce a genuine result of the previous idea.",
    explanation:
      "In B the stress is a plausible result of the lack of space. C is tempting because it follows the same pattern, but gift shops are not a consequence of zoos being fun.",
    guideRef: "discourse-markers",
  },
];

// ---------------------------------------------------------------------------
// MCQ Paper 3: reading a discursive essay (built around the zoo essay passage)
// ---------------------------------------------------------------------------

const mcqP3: MCQ[] = [
  {
    id: "dis-mcq-p3-q01",
    question: "What is the main job of paragraph [1]?",
    options: [
      "To give the writer's final verdict on zoos",
      "To list every statistic about zoos",
      "To set the scene, show why zoos are debated and promise a balanced discussion",
      "To attack people who visit zoos",
    ],
    answerIndex: 2,
    hint: "Think CID: Context, Issue, Direction.",
    explanation:
      "Paragraph [1] gives context (a childhood visit), the issue (arks versus prisons) and direction ('worth weighing both views'). It does not give a verdict (A); that is saved for paragraph [5].",
    guideRef: "introductions",
  },
  {
    id: "dis-mcq-p3-q02",
    question: "Which phrase from paragraph [1] provides the 'Context' that draws the reader in?",
    options: [
      "'it is worth weighing both views carefully'",
      "'Few childhood memories are as vivid as a first trip to the zoo'",
      "'critics see them as prisons'",
      "'the twenty-first century'",
    ],
    answerIndex: 1,
    hint: "Which phrase creates a familiar, vivid scene?",
    explanation:
      "The vivid childhood memory hooks the reader with a familiar experience. A is tempting, but it is the 'Direction' step, signposting the essay's method rather than setting the scene.",
    guideRef: "introductions",
  },
  {
    id: "dis-mcq-p3-q03",
    question: "In paragraph [1], what is the effect of describing zoos as 'arks' and 'prisons'?",
    options: [
      "It sums up the two opposing views in a pair of memorable, contrasting metaphors.",
      "It proves that zoos are cruel.",
      "It shows the writer agrees with the critics.",
      "It gives statistical evidence about zoos.",
    ],
    answerIndex: 0,
    hint: "An ark saves; a prison confines.",
    explanation:
      "The two metaphors capture each side's view of zoos in a single vivid contrast. C is tempting because 'prisons' is negative, but the writer gives 'arks' equal weight and attributes each view to others ('Supporters', 'critics').",
    guideRef: "introductions",
  },
  {
    id: "dis-mcq-p3-q04",
    question: "Does paragraph [1] reveal the writer's final judgement?",
    options: [
      "Yes: the writer says zoos should close.",
      "Yes: the writer says zoos are arks.",
      "No: it promises to weigh both views before deciding.",
      "Yes: the phrase 'however well decorated' shows the final verdict.",
    ],
    answerIndex: 2,
    hint: "Look at the last sentence of the paragraph.",
    explanation:
      "'Before deciding… it is worth weighing both views carefully' keeps the verdict back. D is tempting because 'however well decorated' sounds sharp, but it is part of describing what critics think, not the writer's own verdict.",
    guideRef: "introductions",
  },
  {
    id: "dis-mcq-p3-q05",
    question: "What type of evidence is the Arabian oryx in paragraph [2]?",
    options: ["An anecdote", "Expert opinion", "A hypothetical invented statistic", "A real example"],
    answerIndex: 3,
    hint: "Is it a personal story, a quoted expert, a number or a real case?",
    explanation:
      "The Arabian oryx is a real case of a species reintroduced to the wild from captive-bred animals. It is not an anecdote (A), which would be a personal story.",
    guideRef: "evidence",
  },
  {
    id: "dis-mcq-p3-q06",
    question: "In paragraph [2], why does the writer include the phrase 'it could be argued'?",
    options: [
      "To show the writer is completely certain",
      "To present the claim cautiously and impersonally, without overstating it",
      "To introduce the opposing side",
      "To give a statistic",
    ],
    answerIndex: 1,
    hint: "It is both an impersonal construction and a hedge.",
    explanation:
      "'It could be argued' presents a claim cautiously, keeping the writer in the background. C is tempting because the phrase is often used to introduce other views, but here it supports the same 'for' side.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-mcq-p3-q07",
    question: "What does 'Furthermore' signal in paragraph [2]?",
    options: [
      "A switch to the opposing view",
      "A result of the previous sentence",
      "An additional point on the same side",
      "The beginning of the conclusion",
    ],
    answerIndex: 2,
    hint: "It means 'in addition'.",
    explanation:
      "'Furthermore' adds a second pro-zoo point (funding research and habitats). A is wrong: the switch to the opposing view comes with 'Conversely' in paragraph [3].",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-mcq-p3-q08",
    question: "Which best describes how the body of the essay is organised?",
    options: [
      "Alternating: every paragraph contains both sides equally",
      "A 'for' paragraph, an 'against' paragraph, then a paragraph that weighs and rebuts before the conclusion",
      "Only arguments against zoos",
      "Chronological: the history of zoos from earliest to latest",
    ],
    answerIndex: 1,
    hint: "Look at what each of paragraphs [2], [3] and [4] does.",
    explanation:
      "[2] is for, [3] is against, [4] concedes and rebuts, then [5] concludes: a block structure with a weighing paragraph. A is tempting because [4] mentions both sides, but [2] and [3] each focus on one side.",
    guideRef: "structures",
  },
  {
    id: "dis-mcq-p3-q09",
    question: "What does 'Conversely' at the start of paragraph [3] tell the reader?",
    options: [
      "The essay is now considering the opposite viewpoint.",
      "The writer is giving another reason to support zoos.",
      "The essay is about to end.",
      "The next sentence is a statistic.",
    ],
    answerIndex: 0,
    hint: "It is a contrast marker.",
    explanation:
      "'Conversely' signals a switch to the opposite view (the opponents). B is wrong because 'conversely' contrasts; it does not add support to the same side.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-mcq-p3-q10",
    question: "Which phrase in paragraph [3] is an example of hedging?",
    options: [
      "'Conversely, opponents argue'",
      "'such as elephants and polar bears'",
      "'Animal-welfare campaigners'",
      "'may show signs of stress'",
    ],
    answerIndex: 3,
    hint: "Look for a modal verb.",
    explanation:
      "'May' is a modal verb that makes the claim cautious. B is tempting because it gives examples, but examples support a point; they do not hedge it.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-mcq-p3-q11",
    question: "What is the purpose of the last sentence of paragraph [3] (about a child watching a pacing tiger)?",
    options: [
      "To prove that zoos are popular with children",
      "To challenge the claim that zoos educate visitors",
      "To give the writer's final verdict",
      "To support captive breeding",
    ],
    answerIndex: 1,
    hint: "What does a 'pacing' tiger suggest about what the child really sees?",
    explanation:
      "The image questions whether visitors learn about real tiger behaviour from a stressed animal, challenging the educational argument. A misreads it: the sentence is critical, not a point about popularity.",
    guideRef: "counter-rebuttal",
  },
  {
    id: "dis-mcq-p3-q12",
    question: "What technique does 'Admittedly, these concerns are serious.' (paragraph [4]) show?",
    options: ["A straw man", "A statistic", "A concession", "A rhetorical question"],
    answerIndex: 2,
    hint: "The writer accepts part of the other side's case.",
    explanation:
      "'Admittedly' concedes that the opponents have a real point before answering it. A straw man (A) would misrepresent the opponents' view, whereas this sentence takes it seriously.",
    guideRef: "counter-rebuttal",
  },
  {
    id: "dis-mcq-p3-q13",
    question: "Which rebuttal strategy does paragraph [4] mainly use?",
    options: [
      "Denying that zoo animals ever suffer",
      "Insulting animal-welfare campaigners",
      "Changing the subject to ice cream",
      "Reframing the concerns as reasons for better zoos rather than no zoos",
    ],
    answerIndex: 3,
    hint: "Look at 'arguments for better zoos rather than no zoos'.",
    explanation:
      "The writer accepts the concerns but argues they point towards reform, not closure: an alternative-solution rebuttal. A is wrong; the writer never denies that animals suffer and in fact calls the concerns 'serious'.",
    guideRef: "counter-rebuttal",
  },
  {
    id: "dis-mcq-p3-q14",
    question: "Why does the writer use 'perhaps' in paragraph [4] ('the question is perhaps not whether zoos should exist')?",
    options: [
      "To offer a new way of framing the debate tentatively rather than as a fixed fact",
      "To show the writer has no opinion",
      "To introduce a statistic",
      "To contradict the conclusion",
    ],
    answerIndex: 0,
    hint: "It is a hedging adverb.",
    explanation:
      "'Perhaps' softens a bold reframing so it sounds like a reasoned suggestion. B is tempting, but the writer does have a view, which is confirmed in paragraph [5].",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-mcq-p3-q15",
    question: "What kind of judgement does paragraph [5] reach?",
    options: [
      "No judgement: it leaves the reader to decide",
      "A qualified judgement: keep zoos, but only well-run, conservation-focused ones",
      "A total judgement: close every zoo",
      "A total judgement: every zoo is perfect as it is",
    ],
    answerIndex: 1,
    hint: "Look at 'well-run' and 'if they protect species'.",
    explanation:
      "The writer supports zoos only on conditions ('well-run', 'if they… put welfare first'). A is tempting if you skim, but 'On balance… is stronger' is a clear verdict.",
    guideRef: "conclusions",
  },
  {
    id: "dis-mcq-p3-q16",
    question: "In paragraph [5], what does 'whereas' do in the second sentence?",
    options: [
      "It contrasts the effects of two choices: closing every zoo and raising standards.",
      "It adds a further reason to close zoos.",
      "It introduces an example.",
      "It ends the essay.",
    ],
    answerIndex: 0,
    hint: "Compare what is said before and after 'whereas'.",
    explanation:
      "'Whereas' sets the damage of closure against the benefits of raising standards, helping justify the judgement. B is wrong: neither half argues for closing zoos.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-mcq-p3-q17",
    question: "How does the final sentence of the essay work as an ending?",
    options: [
      "It introduces a brand-new argument about ticket prices.",
      "It repeats the first sentence word for word.",
      "It asks the reader to decide for themselves.",
      "It ends with a clear condition and a memorable final thought about zoos' purpose.",
    ],
    answerIndex: 3,
    hint: "WJF: what does the 'F' stand for?",
    explanation:
      "The ending sets a condition ('if they protect species and put welfare first') and finishes with the memorable phrase 'keeping the wild alive'. C is wrong: the essay has already given its judgement and does not hand the decision back.",
    guideRef: "conclusions",
  },
  {
    id: "dis-mcq-p3-q18",
    question: "Which addition would most strengthen the opponents' side in paragraph [3]?",
    options: [
      "A named study by animal-welfare researchers on the health of elephants in zoos, with its source given",
      "'Everyone knows zoos are cruel.'",
      "An anecdote about the writer's cousin, who found the zoo boring",
      "A sentence about how much ice cream costs at the zoo",
    ],
    answerIndex: 0,
    hint: "Which is relevant, specific and checkable?",
    explanation:
      "A specific, sourced study is strong, checkable evidence that directly supports the welfare point. C is tempting because it is evidence of a kind, but one person's boredom says little about animal welfare.",
    guideRef: "evidence",
  },
  {
    id: "dis-mcq-p3-q19",
    question: "Which is the fairest criticism of this essay?",
    options: [
      "It never reaches a judgement.",
      "It uses informal register and slang throughout.",
      "The 'against' side in [3] relies on more general claims than the specific real example in [2], so it is presented slightly less strongly.",
      "It contains no discourse markers.",
    ],
    answerIndex: 2,
    hint: "Three of these are simply untrue about the essay.",
    explanation:
      "Paragraph [2] has a precise real example (the oryx), whereas [3] uses general claims, so the opposing side is a little less well supported. A, B and D are false: the essay judges clearly, is formal and uses many markers.",
    guideRef: "counter-rebuttal",
  },
  {
    id: "dis-mcq-p3-q20",
    question: "The essay says many zoos 'help to protect habitats far beyond their own walls'. What would a careful reader most want to know before relying on this claim?",
    options: [
      "What colour the zoo's logo is",
      "Which zoos do this, how much they contribute and who reports it",
      "Whether the writer enjoyed their last zoo visit",
      "How many words are in the paragraph",
    ],
    answerIndex: 1,
    hint: "Evaluating evidence: who, how much, how reliable?",
    explanation:
      "Good readers test claims by asking for specifics and sources. C is tempting because it concerns the writer, but personal enjoyment says nothing about whether the conservation claim is true.",
    guideRef: "evidence",
  },
];

// ---------------------------------------------------------------------------
// MCQ Paper 4: discursive essays on the novel, planning and challenge questions
// ---------------------------------------------------------------------------

const mcqP4: MCQ[] = [
  {
    id: "dis-mcq-p4-q01",
    question: "In a discursive essay on 'Is Scrooge's change believable?', what is the main source of evidence?",
    options: [
      "Statistics about Victorian London",
      "Short quotations and key events from the novel, briefly analysed",
      "Your personal opinion of Christmas",
      "Film versions of the story",
    ],
    answerIndex: 1,
    hint: "In a literature-based discursive essay, the text is your evidence.",
    explanation:
      "For a question about the novel, evidence means quotations and events from the text. A is tempting because context can help, but statistics about London cannot show whether Scrooge's change is prepared for in the story.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-mcq-p4-q02",
    extract: "'If they would rather die,' said Scrooge, 'they had better do it, and decrease the surplus population.'",
    question: "To whom does Scrooge say this, and in which stave?",
    options: [
      "To Bob Cratchit, Stave Five",
      "To the Ghost of Christmas Yet to Come, Stave Four",
      "To his nephew Fred, Stave Three",
      "To the gentlemen collecting for the poor, Stave One",
    ],
    answerIndex: 3,
    hint: "It is his reply to a request for charity.",
    explanation:
      "Scrooge says this in Stave One to the gentlemen collecting money for the poor. C is tempting because Fred also visits Scrooge in Stave One, but this line is Scrooge's reply to the charity collectors; it is the Ghost of Christmas Present who throws it back at him in Stave Three.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-mcq-p4-q03",
    extract: "secret, and self-contained, and solitary as an oyster",
    question: "Which technique is 'solitary as an oyster'?",
    options: ["Metaphor", "Personification", "Simile", "Onomatopoeia"],
    answerIndex: 2,
    hint: "Look for 'as'.",
    explanation:
      "It compares Scrooge to an oyster using 'as', so it is a simile. Metaphor (A) is tempting, but a metaphor would say Scrooge *is* an oyster, without 'as' or 'like'.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-mcq-p4-q04",
    question: "Which stave shows Scrooge's lonely childhood, Fezziwig's party and his lost love, Belle?",
    options: ["Stave One", "Stave Two", "Stave Three", "Stave Five"],
    answerIndex: 1,
    hint: "Which ghost shows him the past?",
    explanation:
      "The Ghost of Christmas Past appears in Stave Two. Stave Three (C) is tempting but belongs to the Ghost of Christmas Present and the Cratchits.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-mcq-p4-q05",
    extract: "'I am as light as a feather, I am as happy as an angel, I am as merry as a school-boy.'",
    question: "Which side of 'Is Scrooge's change believable?' does this quotation most obviously support?",
    options: [
      "That the change is sudden and exaggerated, more like a fairy tale than real life",
      "That Scrooge is still mean at heart",
      "That Scrooge never changes at all",
      "That Tiny Tim dies",
    ],
    answerIndex: 0,
    hint: "Three similes in a breathless rush on Christmas morning.",
    explanation:
      "The piled-up similes show joy so extreme that a sceptic could call the change unrealistic. B is wrong: the quotation shows happiness, not meanness.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-mcq-p4-q06",
    extract: "'I will honour Christmas in my heart, and try to keep it all the year.'",
    question: "When does Scrooge make this promise?",
    options: [
      "In Stave One, to Marley's Ghost",
      "In Stave Two, to Belle",
      "In Stave Five, to Bob Cratchit",
      "In Stave Four, to the Ghost of Christmas Yet to Come",
    ],
    answerIndex: 3,
    hint: "He is pleading in front of a gravestone.",
    explanation:
      "Scrooge makes the promise in Stave Four, at his own neglected grave, to the Ghost of Christmas Yet to Come. C is tempting because he keeps the promise in Stave Five, but he makes it the night before.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-mcq-p4-q07",
    question: "Which point best supports the view that Scrooge's change IS believable?",
    options: [
      "He changes in a single night.",
      "His joy in Stave Five is wildly exaggerated.",
      "Stave Two shows the causes of his coldness, such as his lonely childhood and lost love, so the reader can believe they might be undone.",
      "He is frightened by his own grave.",
    ],
    answerIndex: 2,
    hint: "Which option explains why his coldness is not fixed?",
    explanation:
      "Showing the causes of his hardness prepares the reader for the change. D is tempting because fear motivates him, but sceptics use that point to argue the change is selfish rather than genuine.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-mcq-p4-q08",
    question: "A sceptic argues: 'Scrooge only changes because he is scared of his own death.' Which is the best rebuttal?",
    options: [
      "Ghosts are not real, so nothing in the book matters.",
      "Before Stave Four, Scrooge already shows concern for Tiny Tim in Stave Three, so his change begins with sympathy, not only fear.",
      "Scrooge is rich, so he does not need to change.",
      "The sceptic is wrong because Dickens is famous.",
    ],
    answerIndex: 1,
    hint: "Find evidence from earlier in the novel than the graveyard.",
    explanation:
      "Scrooge's anxious question about whether Tiny Tim will live comes in Stave Three, before he sees his grave, so sympathy begins earlier than fear. D is an appeal to fame, not a reasoned reply.",
    guideRef: "counter-rebuttal",
  },
  {
    id: "dis-mcq-p4-q09",
    question: "What subtitle did Dickens give A Christmas Carol?",
    options: [
      "A Tale of Two Cities",
      "A Christmas Fable for Children",
      "A Ghost Story of Christmas",
      "The Miser's Redemption",
    ],
    answerIndex: 2,
    hint: "It points to the supernatural genre.",
    explanation:
      "The full title is 'A Christmas Carol. In Prose. Being a Ghost Story of Christmas.' A is a different Dickens novel entirely.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-mcq-p4-q10",
    question: "Why might the genre of A Christmas Carol matter when judging whether Scrooge's change is believable?",
    options: [
      "Because a moral fable aims to inspire change, so it may be judged by its purpose rather than strict realism",
      "Because ghost stories are always realistic",
      "Because genre has nothing to do with characters",
      "Because Dickens wrote it in one night",
    ],
    answerIndex: 0,
    hint: "What was Dickens trying to make his readers do?",
    explanation:
      "Dickens wanted readers to act more generously, so a clear, dramatic transformation suits his purpose. D is false: he wrote it over about six weeks in 1843.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-mcq-p4-q11",
    extract: "'This boy is Ignorance. This girl is Want.'",
    question: "Who speaks these words?",
    options: [
      "Scrooge",
      "Marley's Ghost",
      "The Ghost of Christmas Yet to Come",
      "The Ghost of Christmas Present",
    ],
    answerIndex: 3,
    hint: "He reveals two children hidden beneath his robe.",
    explanation:
      "The Ghost of Christmas Present shows Scrooge the two children in Stave Three. C is tempting because that ghost is the most frightening, but the Ghost of Christmas Yet to Come never speaks.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-mcq-p4-q12",
    question: "Which is the best-written discursive sentence about Scrooge?",
    options: [
      "Scrooge is a horrible man and the change is stupid.",
      "Although the narrator calls Scrooge 'solitary as an oyster', the image may hint that something precious lies hidden inside him.",
      "Scrooge changes. This is good. I like it.",
      "In the book it says Scrooge is like an oyster which is a simile.",
    ],
    answerIndex: 1,
    hint: "Look for an embedded quotation, hedging and interpretation.",
    explanation:
      "B embeds the quotation, uses hedging ('may hint') and interprets it. D is tempting because it names the technique, but it only labels the simile without explaining its effect.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-mcq-p4-q13",
    question: "Which is the most sophisticated judgement on 'Is Scrooge's change believable?'",
    options: [
      "Yes, because it is a nice story.",
      "No, because people do not change.",
      "It is impossible to say.",
      "The speed of the change strains realism, but Dickens prepares it so carefully that, within a ghostly moral fable, it is earned.",
    ],
    answerIndex: 3,
    hint: "Look for a qualified judgement with reasons.",
    explanation:
      "D weighs both sides and reaches a reasoned, qualified verdict that considers genre. C is tempting as 'balanced', but it sits on the fence and avoids the task.",
    guideRef: "conclusions",
  },
  {
    id: "dis-mcq-p4-q14",
    question: "During planning, what should you decide BEFORE you start writing?",
    options: [
      "Your judgement, so every paragraph can lead towards it",
      "The exact wording of every sentence",
      "How many words your conclusion will have",
      "Nothing: decide as you go",
    ],
    answerIndex: 0,
    hint: "Your essay needs a destination.",
    explanation:
      "Knowing your judgement lets you order points and save your stronger side for last. D is tempting because it sounds open-minded, but deciding as you go often produces contradictions and fence-sitting.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-mcq-p4-q15",
    question: "What is a T-chart used for in planning a discursive essay?",
    options: [
      "Timing each paragraph to the second",
      "Listing arguments for on one side and against on the other",
      "Drawing a diagram of the essay title",
      "Checking spelling",
    ],
    answerIndex: 1,
    hint: "Two columns, one line down the middle.",
    explanation:
      "A T-chart separates 'for' and 'against' ideas so you can pick the strongest of each. A is tempting because timing matters, but it is not what a T-chart is for.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-mcq-p4-q16",
    question: "The evidence on an issue overwhelmingly supports one side. What should a good discursive writer do?",
    options: [
      "Pretend both sides are equally supported, to look balanced",
      "Leave out the weaker side entirely",
      "Represent the weaker side accurately, but let the judgement reflect the weight of the evidence",
      "Refuse to give a judgement",
    ],
    answerIndex: 2,
    hint: "Fairness is not the same as false balance.",
    explanation:
      "Balance means fair representation, not pretending the evidence is equal. A is tempting because it sounds 'balanced', but this is false balance and misleads the reader.",
    guideRef: "conclusions",
  },
  {
    id: "dis-mcq-p4-q17",
    question: "Which conclusion sentence introduces a NEW argument and so should be avoided?",
    options: [
      "On balance, the benefits of uniform outweigh its costs.",
      "Both sides agree that fairness matters most.",
      "A uniform should make pupils equal, not identical.",
      "Also, uniform helps pupils find their way around school more quickly.",
    ],
    answerIndex: 3,
    hint: "Which sentence brings in a point not mentioned before?",
    explanation:
      "D adds a fresh argument that has not been weighed in the essay. B is a summary of common ground, which is appropriate in a conclusion.",
    guideRef: "conclusions",
  },
  {
    id: "dis-mcq-p4-q18",
    question: "Which presents the case AGAINST allowing AI in homework at its strongest?",
    options: [
      "AI is scary and robots will take over.",
      "Only cheats would use AI.",
      "If AI drafts their work, pupils may skip the struggle of planning and organising ideas, which is exactly the skill homework is meant to build.",
      "AI is bad because it is new.",
    ],
    answerIndex: 2,
    hint: "Steelman: the version a thoughtful opponent would actually make.",
    explanation:
      "C gives a specific, reasoned concern linked to the purpose of homework. B is tempting because it is short and confident, but it is a loaded generalisation that insults rather than reasons.",
    guideRef: "counter-rebuttal",
  },
  {
    id: "dis-mcq-p4-q19",
    question: "Which is a qualified judgement on phones in school?",
    options: [
      "Phones should be stored away during lessons but may be carried for the journey to and from school.",
      "Phones should be banned forever.",
      "Phones should be allowed everywhere at all times.",
      "Phones are a complicated issue.",
    ],
    answerIndex: 0,
    hint: "A judgement with conditions.",
    explanation:
      "A reaches a clear verdict with conditions attached. D is tempting because it sounds thoughtful, but it gives no judgement at all.",
    guideRef: "conclusions",
  },
  {
    id: "dis-mcq-p4-q20",
    question: "Which question is LEAST suitable for a discursive essay?",
    options: [
      "Should the school day start later?",
      "Is water made of hydrogen and oxygen?",
      "Should zoos still exist?",
      "Should social media have a minimum age of 16?",
    ],
    answerIndex: 1,
    hint: "Which one is a settled fact rather than a debate?",
    explanation:
      "The make-up of water is an established scientific fact, so there are no reasonable 'sides' to weigh. A is tempting because it sounds practical, but sleep, timetables and transport give it genuine arguments on both sides.",
    guideRef: "what-is-discursive",
  },
];

// ---------------------------------------------------------------------------
// Written Paper 1: core skills
// ---------------------------------------------------------------------------

const qaP1: QA[] = [
  {
    id: "dis-qa-p1-q01",
    question: "Define 'discursive writing'. Then say which of these tasks is discursive and why: (a) 'Persuade your council to build a skate park.' (b) 'Argue that skate parks are a waste of money.' (c) 'Should every town have a skate park? Discuss.'",
    marks: 2,
    hint: "Which command word asks you to weigh both sides?",
    modelAnswer:
      "Discursive writing explores more than one side of an issue fairly, in a formal and balanced tone, before reaching a reasoned judgement in the conclusion. Task (c) is discursive because 'Discuss' asks the writer to weigh the arguments for and against skate parks, whereas (a) asks for persuasion and (b) fixes one side from the start.",
    markScheme: [
      { point: "Defines discursive writing as balanced/both sides with a judgement", keywords: ["both sides", "balanced", "more than one side", "several sides", "for and against", "weigh"] },
      { point: "Identifies (c) with a reason linked to 'discuss'", keywords: ["(c)", "task c", "discuss", "option c", "the third"] },
    ],
    commonError: "Choosing (b) because it is about 'arguing', not noticing that 'Argue that…' tells you which side to take.",
    guideRef: "what-is-discursive",
  },
  {
    id: "dis-qa-p1-q02",
    question: "Explain the difference between a block structure and an alternating structure, and give one advantage of each.",
    marks: 3,
    hint: "One keeps the sides apart; one pairs them in every paragraph.",
    modelAnswer:
      "In a block structure the writer presents all the arguments on one side, then turns to all the arguments on the other side, before concluding. In an alternating (point–counterpoint) structure, each paragraph takes one aspect of the issue and sets the two sides against each other within it. Block structure is quick to plan and very clear, which is useful under time pressure; alternating structure is more sophisticated because the arguments directly answer each other, so the weighing is built into every paragraph.",
    markScheme: [
      { point: "Explains block: all for, then all against", keywords: ["all the arguments", "all for", "one side then", "for then against", "first half", "then the other"] },
      { point: "Explains alternating: point and counterpoint within each paragraph", keywords: ["each paragraph", "point-counterpoint", "point and counterpoint", "counterpoint", "both sides in", "aspect"] },
      { point: "Gives a valid advantage of each", keywords: ["easier to plan", "clear", "quick", "time pressure", "sophisticated", "answer each other", "weighing"] },
    ],
    commonError: "Describing both structures but forgetting to give an advantage for each.",
    guideRef: "structures",
  },
  {
    id: "dis-qa-p1-q03",
    question: "For the question 'Should school uniform be compulsory?', give two arguments for and two arguments against.",
    marks: 4,
    hint: "Think about cost, fairness, identity, belonging and practicality.",
    modelAnswer:
      "For: (1) Uniform may reduce competition and bullying over expensive brands, because everyone wears the same clothes. (2) It can create a sense of belonging and pride in the school community. Against: (1) Uniform can be expensive, especially when items must be bought from one specific supplier. (2) It restricts self-expression and individuality at an age when identity matters to young people.",
    markScheme: [
      { point: "First argument for (e.g. reduces bullying/competition over brands)", keywords: ["bullying", "brands", "designer", "competition", "equal", "same clothes", "fashion"] },
      { point: "Second argument for (e.g. belonging, smartness, safety, saves time)", keywords: ["belonging", "identity with the school", "pride", "smart", "community", "time in the morning", "identify pupils", "safety"] },
      { point: "First argument against (e.g. cost)", keywords: ["expensive", "cost", "price", "afford", "money", "supplier"] },
      { point: "Second argument against (e.g. self-expression, comfort)", keywords: ["self-expression", "individual", "express", "uncomfortable", "comfort", "freedom", "creativity"] },
    ],
    commonError: "Giving two versions of the same point (for example 'it is expensive' and 'it costs a lot') and counting them as two arguments.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-qa-p1-q04",
    question: "Write a three- or four-sentence introduction for 'Should homework be abolished?' using CID (Context, Issue, Direction). Do not give your verdict.",
    marks: 3,
    hint: "Start with a scene or a striking idea, name both sides, then signpost the weighing.",
    modelAnswer:
      "Every weeknight, millions of pupils sit at kitchen tables with worksheets that must be finished before bed. For some, this is valuable practice that turns classroom learning into lasting knowledge; for others, it is an unfair burden that eats into rest, hobbies and family time. Whether homework should be abolished, reformed or kept as it is depends on weighing these views carefully.",
    markScheme: [
      { point: "Context: an engaging opening that shows why the issue matters", keywords: ["every", "night", "kitchen", "today", "millions", "evening", "school night"] },
      { point: "Issue: names both sides of the debate", keywords: ["for some", "others", "supporters", "critics", "some argue", "on the other hand", "while"] },
      { point: "Direction: signposts a balanced discussion without a verdict", keywords: ["weigh", "consider", "explore", "deserves", "examine", "both views", "carefully"] },
    ],
    commonError: "Ending the introduction with 'I think homework should be banned', which gives away the verdict.",
    guideRef: "introductions",
  },
  {
    id: "dis-qa-p1-q05",
    extract: "In this essay I will talk about phones. The dictionary says a phone is a device for talking to people. I think phones should be banned because they are annoying.",
    question: "Identify three weaknesses in this introduction to a discursive essay and explain why each is a problem.",
    marks: 3,
    hint: "Look at the first words, the definition and the last sentence.",
    modelAnswer:
      "First, 'In this essay I will talk about' is a flat, mechanical opening that does not engage the reader or set up the debate. Second, the dictionary definition wastes the opening on something every reader already knows. Third, the writer gives a personal verdict ('I think phones should be banned') in the introduction, using an informal, loaded word ('annoying'), which destroys the balance before any arguments have been weighed.",
    markScheme: [
      { point: "Identifies the mechanical 'In this essay I will' opening", keywords: ["in this essay", "mechanical", "flat", "boring opening", "i will talk", "announc"] },
      { point: "Identifies the unnecessary dictionary definition", keywords: ["dictionary", "definition", "obvious", "already know", "defines"] },
      { point: "Identifies the verdict / loaded language in the introduction", keywords: ["verdict", "i think", "opinion", "annoying", "one-sided", "gives away", "not balanced"] },
    ],
    commonError: "Listing the weaknesses without explaining why each one is a problem in a discursive essay.",
    guideRef: "introductions",
  },
  {
    id: "dis-qa-p1-q06",
    question: "Rewrite each sentence in a formal register: (a) 'Loads of kids reckon zoos are well cruel.' (b) 'It's obvious school should start later, innit?' (c) 'Teachers who give tons of homework are just mean.'",
    marks: 3,
    hint: "Remove slang, contractions and insults; use impersonal constructions and hedging.",
    modelAnswer:
      "(a) 'Many young people believe that zoos can be cruel to animals.' (b) 'It could be argued that a later start to the school day would benefit pupils.' (c) 'Some pupils feel that large amounts of homework place an unfair burden on them.'",
    markScheme: [
      { point: "(a) formal rewrite without slang ('loads', 'kids', 'well')", keywords: ["many young people", "many pupils", "a significant number", "many people", "young people believe", "some pupils"] },
      { point: "(b) formal, hedged rewrite without 'innit' or contraction", keywords: ["it could be argued", "it is often suggested", "some argue", "may benefit", "would benefit", "later start"] },
      { point: "(c) removes the insult and presents the view fairly", keywords: ["some pupils feel", "burden", "large amounts", "excessive", "critics", "some argue", "heavy workload"] },
    ],
    commonError: "Changing a few words but keeping a contraction or loaded word, such as 'it's' or 'mean'.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-qa-p1-q07",
    question: "Explain what hedging is, then rewrite 'All teenagers are addicted to social media' using hedging.",
    marks: 2,
    hint: "Think about may, might, some, many, often, perhaps.",
    modelAnswer:
      "Hedging means using cautious language, such as modal verbs (may, might, could) and qualifiers (some, many, often), so that you only claim what the evidence can support. Rewrite: 'Many teenagers report that they find it difficult to spend time away from social media.'",
    markScheme: [
      { point: "Explains hedging as cautious language / avoiding overclaiming", keywords: ["cautious", "careful", "not overclaim", "soften", "modal", "less certain", "only claim"] },
      { point: "Provides a hedged rewrite", keywords: ["many teenagers", "some teenagers", "may", "might", "can", "often", "report"] },
    ],
    commonError: "Rewriting as 'Most teenagers are definitely addicted', which still overclaims.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-qa-p1-q08",
    question: "Give one discourse marker for each purpose and use one of them in a sentence about school uniform: (a) adding, (b) contrasting, (c) showing a result, (d) conceding.",
    marks: 4,
    hint: "Furthermore, however, consequently, admittedly… and their synonyms.",
    modelAnswer:
      "(a) Adding: furthermore. (b) Contrasting: however. (c) Result: consequently. (d) Conceding: admittedly. Example sentence: 'Admittedly, uniform can be expensive; however, it may save families from the cost of keeping up with fashion.'",
    markScheme: [
      { point: "(a) adding marker", keywords: ["furthermore", "moreover", "in addition", "additionally", "similarly", "also"] },
      { point: "(b) contrasting marker", keywords: ["however", "conversely", "on the other hand", "whereas", "by contrast", "in contrast"] },
      { point: "(c) result marker", keywords: ["consequently", "therefore", "as a result", "thus", "hence", "so"] },
      { point: "(d) conceding marker", keywords: ["admittedly", "granted", "it is true that", "although", "while it is true", "of course"] },
    ],
    commonError: "Giving 'nevertheless' as a result marker: it means 'despite that', not 'as a result'.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-qa-p1-q09",
    extract: "Phones can help pupils research, however they can also distract them in lessons.",
    question: "Correct the punctuation of this sentence and explain the error.",
    marks: 2,
    hint: "'However' is joining two complete sentences.",
    modelAnswer:
      "Corrected: 'Phones can help pupils research; however, they can also distract them in lessons.' The original is a comma splice: two complete sentences (independent clauses) are joined with only a comma. When 'however' links two complete sentences, it needs a semicolon (or a full stop) before it and a comma after it.",
    markScheme: [
      { point: "Correct version with semicolon before and comma after 'however' (or full stop)", keywords: ["; however,", ";however,", ". however,", "semicolon before", "full stop before"] },
      { point: "Explains the comma splice / two independent clauses", keywords: ["comma splice", "two sentences", "independent clause", "two complete", "main clauses", "joined with a comma"] },
    ],
    commonError: "Adding a comma after 'however' but leaving the comma before it, which is still a comma splice.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-qa-p1-q10",
    question: "Name four types of evidence used in discursive writing and give a brief example of each for an essay on a four-day school week. Label any invented example as hypothetical.",
    marks: 4,
    hint: "Statistics, expert opinion, examples, anecdote.",
    modelAnswer:
      "Statistics: a hypothetical survey might find that most pupils would prefer a four-day week. Expert opinion: a head teacher or sleep scientist might comment on whether longer school days would tire younger pupils. Example: some school districts in the United States, many of them rural, have adopted four-day weeks to save on transport and heating. Anecdote: a parent might describe the difficulty of finding childcare on the fifth day (an invented, illustrative story).",
    markScheme: [
      { point: "Statistics with an example", keywords: ["statistic", "survey", "percentage", "%", "figures", "data"] },
      { point: "Expert opinion with an example", keywords: ["expert", "head teacher", "scientist", "doctor", "researcher", "specialist"] },
      { point: "Real example with an example", keywords: ["example", "united states", "school districts", "american", "real case", "some schools"] },
      { point: "Anecdote with an example", keywords: ["anecdote", "personal story", "parent", "story", "experience", "friend"] },
    ],
    commonError: "Presenting invented statistics as real ('Research proves 90% of pupils…') instead of labelling them as hypothetical.",
    guideRef: "evidence",
  },
  {
    id: "dis-qa-p1-q11",
    question: "Explain what a 'straw man' is. Then rewrite this straw-man version of a view so that it presents the view at its strongest: 'People who want a later school start just want to lie in bed all day.'",
    marks: 3,
    hint: "What is the real, serious reason people give for a later start?",
    modelAnswer:
      "A straw man is a weak or exaggerated version of an opposing view, set up so that it can be knocked down easily. Stronger version: 'Supporters of a later school start argue that teenagers' body clocks naturally shift later in adolescence, so an earlier start may leave them tired and less able to concentrate in morning lessons.' This is fairer and therefore makes any rebuttal more convincing.",
    markScheme: [
      { point: "Defines straw man as a weak/exaggerated misrepresentation", keywords: ["exaggerat", "weak version", "misrepresent", "easy to knock down", "distort", "unfair version"] },
      { point: "Rewrites with a serious, specific reason", keywords: ["body clock", "sleep", "tired", "concentrat", "adolescen", "rhythm", "biolog"] },
      { point: "Uses fair, formal phrasing for the opposing view", keywords: ["supporters", "argue", "maintain", "point out", "it is claimed", "suggest"] },
    ],
    commonError: "Defining a straw man correctly but writing a rewrite that is still mocking ('they just want to sleep more').",
    guideRef: "counter-rebuttal",
  },
  {
    id: "dis-qa-p1-q12",
    question: "Write a conclusion (four or five sentences) for 'Should zoos still exist?' that weighs, judges and finishes (WJF).",
    marks: 4,
    hint: "Concede the best point on the losing side, then give 'On balance…' with a reason, then a memorable final line.",
    modelAnswer:
      "Critics are right that many zoo animals are not endangered and that some large species struggle in captivity. Yet closing every zoo would also end breeding programmes that have helped to save species such as the Arabian oryx. On balance, well-run zoos that put conservation and welfare first deserve to remain open, while those that cannot meet those standards should change or close. The question is not whether we need zoos, but what kind of zoos we are willing to accept.",
    markScheme: [
      { point: "Weighs: acknowledges the strongest point on each side", keywords: ["critics are right", "admittedly", "although", "while", "yet", "however", "concerns"] },
      { point: "Judges with a clear verdict ('on balance')", keywords: ["on balance", "overall", "ultimately", "should remain", "should close", "deserve", "judgement"] },
      { point: "Gives a reason for the judgement", keywords: ["because", "since", "breeding", "conservation", "welfare", "outweigh"] },
      { point: "Finishes with a final thought / qualified condition / callback", keywords: ["not whether", "provided", "only if", "must earn", "final", "kind of zoo", "the question is"] },
    ],
    commonError: "Ending with 'there are good points on both sides', which sits on the fence instead of judging.",
    guideRef: "conclusions",
  },
];

// ---------------------------------------------------------------------------
// Written Paper 2: using a source pack (four-day school week)
// ---------------------------------------------------------------------------

const qaP2: QA[] = [
  {
    id: "dis-qa-p2-q01",
    question: "Which source in the pack gives real background, and why is it important to label Sources A to C as invented when you use them?",
    marks: 2,
    hint: "Read the brackets after each source title.",
    modelAnswer:
      "Source D gives real background (some US school districts, many rural, have moved to four-day weeks). Sources A to C must be labelled as hypothetical or invented because presenting made-up numbers or quotations as real research would be dishonest and would mislead the reader.",
    markScheme: [
      { point: "Identifies Source D as the real background", keywords: ["source d", "d is real", "the united states", "school districts", "real background"] },
      { point: "Explains that passing invented evidence off as real is dishonest/misleading", keywords: ["dishonest", "mislead", "not real", "made up", "invented", "fake", "honest"] },
    ],
    commonError: "Treating Source A's percentages as real research findings.",
    guideRef: "evidence",
  },
  {
    id: "dis-qa-p2-q02",
    question: "Source A is a survey. Give three questions a careful reader should ask before relying on a survey like this.",
    marks: 3,
    hint: "Who, how many, how, and when?",
    modelAnswer:
      "First, who carried out the survey, and might they be biased (for example, a group campaigning for a four-day week)? Second, how many people were asked, and were they representative? Source A asks pupils at only one school, which may not reflect pupils elsewhere. Third, how was the question worded and when was it asked? A question such as 'Would you like a day off every week?' would naturally get a 'yes'.",
    markScheme: [
      { point: "Who carried it out / possible bias", keywords: ["who carried", "who conducted", "bias", "who paid", "campaign", "who ran"] },
      { point: "Sample size / representativeness (one school only)", keywords: ["how many", "sample", "one school", "representative", "500", "only pupils"] },
      { point: "Question wording / timing / method", keywords: ["wording", "worded", "leading question", "when", "how was", "method", "date"] },
    ],
    commonError: "Asking vague questions such as 'Is it true?' rather than specific questions about source, sample and method.",
    guideRef: "evidence",
  },
  {
    id: "dis-qa-p2-q03",
    question: "What type of evidence is Source B, and how could it be used to support the case against a four-day week?",
    marks: 2,
    hint: "It is a quotation from someone in a particular role.",
    modelAnswer:
      "Source B is (invented) expert opinion, because it comes from a head teacher with professional experience of pupils. It supports the case against by suggesting that compressing five days of lessons into four would make each day longer and leave the youngest pupils too tired to learn well in the afternoon.",
    markScheme: [
      { point: "Identifies it as expert opinion (from an imaginary head teacher)", keywords: ["expert opinion", "expert", "head teacher", "professional", "authority"] },
      { point: "Explains how it supports the 'against' side (longer days, tiredness)", keywords: ["tired", "exhausted", "longer days", "younger pupils", "afternoon", "concentration", "fatigue"] },
    ],
    commonError: "Calling it a statistic because it comes from a school.",
    guideRef: "evidence",
  },
  {
    id: "dis-qa-p2-q04",
    question: "Source C is an anecdote. Explain one strength and one limitation of using it as evidence.",
    marks: 2,
    hint: "Think about emotional impact and how far one story can prove a pattern.",
    modelAnswer:
      "A strength is that it is vivid and human: the reader can picture a real family struggling with childcare, which makes the practical problem easy to understand. A limitation is that it is one family's experience, so it cannot show how many families would actually be affected; it illustrates a problem rather than proving its scale.",
    markScheme: [
      { point: "Strength: vivid, relatable, human, emotional impact", keywords: ["vivid", "relatable", "human", "emotional", "real-life", "picture", "personal"] },
      { point: "Limitation: one case cannot prove a pattern / scale", keywords: ["one family", "one person", "pattern", "not representative", "single", "how many", "scale"] },
    ],
    commonError: "Saying it is 'bad evidence' without explaining why a single story cannot prove a general point.",
    guideRef: "evidence",
  },
  {
    id: "dis-qa-p2-q05",
    question: "Write one sentence that uses the information in Source D with appropriate hedging, as part of a paragraph in favour of a four-day week.",
    marks: 2,
    hint: "Use 'some', 'may' or 'suggests' and avoid claiming it proves everything.",
    modelAnswer:
      "Some school districts in the United States, many of them rural, have adopted a four-day week, which suggests that the idea may offer practical savings on transport and heating as well as helping schools to attract teachers.",
    markScheme: [
      { point: "Accurately uses Source D's information", keywords: ["united states", "school districts", "rural", "transport", "heating", "teachers"] },
      { point: "Uses hedging rather than overclaiming", keywords: ["some", "may", "might", "suggests", "could", "many of them"] },
    ],
    commonError: "Writing 'America proves a four-day week works', which overclaims from a limited example.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-qa-p2-q06",
    question: "Write an introduction (three or four sentences) for a discursive essay on 'Should schools move to a four-day week?'.",
    marks: 3,
    hint: "CID: Context, Issue, Direction. No verdict.",
    modelAnswer:
      "Imagine every weekend lasting three days. For many pupils, that sounds like a dream; for many parents and teachers, it raises urgent practical questions. Some schools abroad have already made the change, hoping to save money and give pupils more rest, while critics warn of exhausting school days and childcare problems. Whether British schools should follow their lead depends on weighing these competing claims carefully.",
    markScheme: [
      { point: "Context: engaging opening", keywords: ["imagine", "three days", "weekend", "abroad", "already", "dream"] },
      { point: "Issue: both sides named", keywords: ["critics", "while", "for many", "others", "supporters", "warn", "hoping"] },
      { point: "Direction: signposts the weighing without a verdict", keywords: ["weigh", "consider", "depends on", "explore", "carefully", "examine"] },
    ],
    commonError: "Opening with 'In this essay I will discuss whether schools should have a four-day week', which simply repeats the title.",
    guideRef: "introductions",
  },
  {
    id: "dis-qa-p2-q07",
    question: "Plan an alternating structure for this essay. Name two aspects of the issue, and for each, note one point for and one point against (you may draw on the sources).",
    marks: 4,
    hint: "Good aspects include wellbeing, learning, cost and family life.",
    modelAnswer:
      "Aspect 1: wellbeing. For: an extra day off could give pupils more rest (Source A suggests many would use it to rest). Against: longer school days could exhaust younger pupils (Source B). Aspect 2: cost and family life. For: schools may save on transport and heating (Source D). Against: families may have to pay for childcare on the fifth day (Source C).",
    markScheme: [
      { point: "Names a first aspect (e.g. wellbeing/tiredness)", keywords: ["wellbeing", "tiredness", "rest", "health", "sleep", "energy"] },
      { point: "Gives a for and against point for aspect 1", keywords: ["rest", "exhaust", "tired", "longer days", "source a", "source b"] },
      { point: "Names a second aspect (e.g. cost/family/learning)", keywords: ["cost", "money", "family", "childcare", "learning", "practical"] },
      { point: "Gives a for and against point for aspect 2", keywords: ["transport", "heating", "savings", "childcare", "source c", "source d", "parents"] },
    ],
    commonError: "Writing a block plan (all for, then all against) when the task asks for an alternating structure.",
    guideRef: "structures",
  },
  {
    id: "dis-qa-p2-q08",
    question: "Write a paragraph in favour of a four-day week using Source A. Label the survey as hypothetical and explain what it suggests.",
    marks: 4,
    hint: "PEER: Point, Evidence, Explain, Reply.",
    modelAnswer:
      "One of the strongest arguments for a four-day week is that it could improve pupils' wellbeing. In a hypothetical survey of 500 pupils at one school, 78% said they would prefer a four-day week and 41% said they would use the extra day mainly to rest. If findings like these were confirmed more widely, they would suggest that many pupils feel tired by a five-day week and would value time to recover, which could make them more focused when they return. However, a preference is not the same as a benefit: pupils naturally like the idea of a day off, so a careful writer would want evidence about rest and results, not just popularity.",
    markScheme: [
      { point: "Clear point about the benefit (wellbeing/rest)", keywords: ["wellbeing", "rest", "tired", "recover", "health", "energy"] },
      { point: "Uses Source A's evidence and labels it hypothetical", keywords: ["hypothetical", "imaginary", "invented", "78%", "41%", "survey"] },
      { point: "Explains what the evidence suggests", keywords: ["suggests", "this shows", "this implies", "would suggest", "indicates", "means that"] },
      { point: "Replies / evaluates the evidence's limits", keywords: ["however", "preference", "not the same", "naturally", "popularity", "one school", "limitation"] },
    ],
    commonError: "Quoting the percentages as if they were real national research, or not explaining what they show.",
    guideRef: "evidence",
  },
  {
    id: "dis-qa-p2-q09",
    question: "Using Source C, write a counter-argument against the four-day week, then a rebuttal to it. Use 'Admittedly' or 'However' to signal the shift.",
    marks: 4,
    hint: "State the childcare problem fairly, then limit it or offer a solution.",
    modelAnswer:
      "Critics argue that a four-day week would place a heavy burden on working families. As one (invented) parent puts it, if both parents work on Fridays, someone must care for a young child, and paying for childcare could cost families more than any savings the school makes. Admittedly, this is a serious concern, especially for families with younger children. However, it could be reduced if schools offered optional supervised clubs or study sessions on the fifth day, and older pupils could use the day for independent study.",
    markScheme: [
      { point: "States the childcare counter-argument fairly", keywords: ["childcare", "working parents", "working families", "look after", "burden", "fridays"] },
      { point: "Refers to Source C as an invented anecdote", keywords: ["source c", "invented", "hypothetical", "parent", "anecdote", "one parent"] },
      { point: "Signals the shift with a concession/contrast marker", keywords: ["admittedly", "however", "nevertheless", "granted"] },
      { point: "Gives a reasoned rebuttal (solution or limit)", keywords: ["clubs", "supervised", "older pupils", "independent study", "reduce", "solution", "optional"] },
    ],
    commonError: "Rebutting by dismissing parents ('they will cope') instead of offering a genuine reason or solution.",
    guideRef: "counter-rebuttal",
  },
  {
    id: "dis-qa-p2-q10",
    question: "Source A says 41% of pupils would use the extra day 'mainly to rest'. Explain how this one figure could be used by BOTH sides of the debate.",
    marks: 3,
    hint: "What does it say about tiredness? What does it say about the other 59%?",
    modelAnswer:
      "Supporters of a four-day week could argue that the figure shows many pupils are tired and need recovery time, so the extra day would improve wellbeing. Opponents could reply that it suggests most pupils (59%) would not mainly rest, and that the day might be spent on screens or alone rather than learning. They could also argue that if pupils are already tired, longer school days on the other four days might make things worse.",
    markScheme: [
      { point: "Supporters' reading: pupils need rest/wellbeing benefit", keywords: ["need rest", "tired", "wellbeing", "recover", "supporters", "benefit"] },
      { point: "Opponents' reading: most would not rest / day may be wasted", keywords: ["59%", "most pupils", "majority", "screens", "wasted", "not rest", "opponents"] },
      { point: "Shows that evidence must be interpreted / longer days could worsen tiredness", keywords: ["longer days", "worse", "interpret", "both sides", "cuts both ways", "depends"] },
    ],
    commonError: "Using the figure for one side only, missing that the question asks how both sides could use it.",
    guideRef: "evidence",
  },
  {
    id: "dis-qa-p2-q11",
    question: "Write a qualified judgement (two or three sentences) for this essay, beginning 'On balance'.",
    marks: 3,
    hint: "A verdict + a reason + a condition ('provided that', 'except', 'only if').",
    modelAnswer:
      "On balance, a four-day week seems unsuitable for younger pupils, because longer days would tire them most and their families would bear the heaviest childcare costs. However, a carefully monitored trial for older students, who can study independently on the fifth day, might be worth considering.",
    markScheme: [
      { point: "Clear judgement beginning 'On balance'", keywords: ["on balance", "overall", "all things considered", "weighing", "ultimately"] },
      { point: "Gives a reason for the judgement", keywords: ["because", "since", "tire", "childcare", "cost", "as"] },
      { point: "Adds a condition or qualification", keywords: ["provided", "only if", "except", "however", "trial", "older", "unless", "for younger"] },
    ],
    commonError: "Giving a verdict without a reason, or a reason without a condition, so the judgement is not 'qualified'.",
    guideRef: "conclusions",
  },
  {
    id: "dis-qa-p2-q12",
    question: "Evaluate the four sources. Which would you rely on most in a real essay, and which least? Give reasons.",
    marks: 4,
    hint: "Real versus invented; large versus small; expert versus personal.",
    modelAnswer:
      "I would rely most on Source D because it is the only real information, describing what has actually happened in some US school districts, although it comes from a different country and education system, so it may not transfer directly to British schools. Source B carries some weight as expert opinion, but it is invented and expresses a prediction rather than evidence. Source A is invented and limited to one school, and it measures what pupils would prefer rather than what would benefit them. I would rely least on Source C, because a single invented anecdote can illustrate a problem but cannot show how widespread it is.",
    markScheme: [
      { point: "Identifies D as most reliable because it is real", keywords: ["source d", "real", "actually happened", "only real", "factual"] },
      { point: "Notes a limitation of D (different country/system)", keywords: ["different country", "america", "united states", "may not apply", "different system", "rural", "not transfer"] },
      { point: "Evaluates A or B (invented, one school, preference, prediction)", keywords: ["one school", "preference", "prediction", "invented", "opinion", "sample"] },
      { point: "Identifies C as least reliable (single anecdote)", keywords: ["source c", "anecdote", "single", "one family", "one parent", "least"] },
    ],
    commonError: "Ranking the sources without giving reasons, or ranking Source A highest because it contains numbers.",
    guideRef: "evidence",
  },
];

// ---------------------------------------------------------------------------
// Written Paper 3: debating current issues (AI, social media, uniform, phones, homework)
// ---------------------------------------------------------------------------

const qaP3: QA[] = [
  {
    id: "dis-qa-p3-q01",
    question: "Write the strongest version of ONE argument against compulsory school uniform, in one or two formal sentences.",
    marks: 2,
    hint: "Steelman it: what would a thoughtful opponent actually say?",
    modelAnswer:
      "Opponents of compulsory uniform argue that it can place a real financial strain on families, particularly when items must be bought from a single approved supplier at higher prices than ordinary clothes. They also maintain that adolescence is a time when young people are forming their identity, and that uniform removes one of the few everyday ways they can express it.",
    markScheme: [
      { point: "States a serious, specific argument (cost or identity/self-expression)", keywords: ["cost", "expensive", "supplier", "identity", "self-expression", "express", "financial"] },
      { point: "Uses formal, fair phrasing for the opposing view", keywords: ["opponents", "argue", "maintain", "critics", "point out", "it is claimed"] },
    ],
    commonError: "Writing a weak or mocking version ('people who hate uniform just want to wear trainers').",
    guideRef: "counter-rebuttal",
  },
  {
    id: "dis-qa-p3-q02",
    question: "Write an alternating (point–counterpoint) paragraph on ONE aspect of 'Should there be a minimum age of 16 for social media?'. Include a point, a counterpoint, discourse markers and a brief weighing.",
    marks: 5,
    hint: "Pick one aspect (wellbeing, friendship, safety, education) and let both sides speak about it.",
    modelAnswer:
      "One important aspect of the debate is safety. Supporters of a minimum age of 16 argue that younger teenagers are more vulnerable to contact from strangers, online bullying and harmful content, and that a later start gives them more time to develop judgement. Conversely, opponents suggest that age limits are easy to get around, so a ban might simply push younger users to lie about their age and use platforms without any of the protections designed for teenagers. Admittedly, no age limit can be enforced perfectly. Nevertheless, a clear legal age might still reduce the number of younger children on these platforms and give parents a firm rule to point to. On this aspect, therefore, the case for a higher age limit appears stronger, provided it is backed by effective age checks.",
    markScheme: [
      { point: "Clear point on one aspect", keywords: ["safety", "wellbeing", "vulnerable", "bullying", "harmful", "mental health", "strangers"] },
      { point: "Counterpoint on the same aspect", keywords: ["conversely", "on the other hand", "opponents", "critics", "get around", "lie about their age", "isolated"] },
      { point: "Uses discourse markers to signal shifts", keywords: ["conversely", "however", "admittedly", "nevertheless", "therefore", "consequently", "furthermore"] },
      { point: "Hedged, formal language", keywords: ["may", "might", "suggest", "could", "appears", "argue", "some"] },
      { point: "Brief weighing / mini-judgement", keywords: ["therefore", "on this aspect", "stronger", "on balance", "outweigh", "provided", "seems"] },
    ],
    commonError: "Writing two unrelated points (one about safety, one about cost) so the point and counterpoint never actually clash.",
    guideRef: "structures",
  },
  {
    id: "dis-qa-p3-q03",
    question: "Identify the rebuttal strategy in each sentence: (a) 'This survey questioned only twenty pupils.' (b) 'Rather than banning phones, schools could require them to be locked away in lessons.' (c) 'Uniform may cost money, but keeping up with fashion often costs far more.'",
    marks: 3,
    hint: "Challenge the evidence, offer an alternative solution, or show it is outweighed.",
    modelAnswer:
      "(a) challenges the evidence by pointing out that the sample is too small to be reliable. (b) offers an alternative solution that answers the problem without the drawbacks of a total ban. (c) shows the counter-argument is outweighed, because the cost of the alternative is greater.",
    markScheme: [
      { point: "(a) challenges the evidence / sample size", keywords: ["challenge the evidence", "sample", "too small", "unreliable", "evidence", "twenty"] },
      { point: "(b) offers an alternative/better solution", keywords: ["alternative", "solution", "compromise", "middle path", "instead", "better option"] },
      { point: "(c) shows it is outweighed", keywords: ["outweigh", "costs more", "greater", "heavier", "compare", "worse alternative"] },
    ],
    commonError: "Labelling all three as 'disagreeing' without naming the specific strategy each one uses.",
    guideRef: "counter-rebuttal",
  },
  {
    id: "dis-qa-p3-q04",
    question: "Give two arguments for and two arguments against allowing pupils to use AI tools for homework.",
    marks: 4,
    hint: "Think about learning, fairness, honesty, skills for the future and access.",
    modelAnswer:
      "For: (1) AI tools can explain difficult ideas at any time, acting like a patient tutor for pupils who have no one to ask at home. (2) Learning to use AI responsibly is a skill pupils will need in future study and work. Against: (1) If AI drafts the work, pupils may skip the thinking, planning and practice that homework is meant to build. (2) It becomes hard for teachers to judge what a pupil can really do, which raises questions of honesty and fairness.",
    markScheme: [
      { point: "First argument for (e.g. tutor/explanations/support)", keywords: ["tutor", "explain", "support", "help", "any time", "midnight", "feedback"] },
      { point: "Second argument for (e.g. future skill/access/efficiency)", keywords: ["future", "skill", "workplace", "jobs", "responsib", "digital literacy", "prepare"] },
      { point: "First argument against (e.g. skips the thinking/learning)", keywords: ["thinking", "skip", "practice", "learning", "struggle", "planning", "lazy"] },
      { point: "Second argument against (e.g. cheating/fairness/accuracy)", keywords: ["cheat", "honest", "fair", "plagiar", "assess", "errors", "inaccurate"] },
    ],
    commonError: "Writing 'AI is good' and 'AI is bad' without a specific reason for each point.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-qa-p3-q05",
    question: "Write a concede-then-counter sequence (two or three sentences) about homework using 'Admittedly', 'However' and 'Therefore'.",
    marks: 3,
    hint: "Admit the other side's best point, answer it, then draw a conclusion.",
    modelAnswer:
      "Admittedly, homework can cause stress, particularly when several subjects set long tasks on the same night. However, this is an argument for better-planned homework rather than none at all, since short, regular practice can help pupils remember what they have learned. Therefore, schools might be wiser to coordinate homework timetables than to abolish homework altogether.",
    markScheme: [
      { point: "'Admittedly' concedes a genuine point", keywords: ["admittedly", "granted", "it is true that", "of course", "concede"] },
      { point: "'However' introduces a reasoned reply", keywords: ["however", "yet", "nevertheless", "even so", "but"] },
      { point: "'Therefore' draws a logical conclusion from the reply", keywords: ["therefore", "consequently", "thus", "as a result", "hence"] },
    ],
    commonError: "Using the three words but with no logical link, for example conceding one point and then answering a different one.",
    guideRef: "counter-rebuttal",
  },
  {
    id: "dis-qa-p3-q06",
    extract: "Zoos are obviously terrible. Animals hate them. Everyone knows that zoos should be shut down, and anyone who visits one is helping animal cruelty.",
    question: "Identify three weaknesses in this paragraph from a discursive essay and suggest how to fix each.",
    marks: 3,
    hint: "Look at evidence, tone and balance.",
    modelAnswer:
      "First, it gives no evidence: 'obviously' and 'everyone knows' are assertions, so the writer should add a real example or expert view about animal welfare and explain it. Second, it uses loaded, absolute language ('terrible', 'everyone', 'anyone'), which should be replaced with hedged, formal phrasing such as 'some critics argue that…'. Third, it is completely one-sided and attacks zoo visitors; a discursive paragraph should acknowledge the opposing view, such as conservation, and then weigh it.",
    markScheme: [
      { point: "No evidence (assertion only) and how to fix", keywords: ["no evidence", "evidence", "obviously", "everyone knows", "assertion", "example", "expert"] },
      { point: "Loaded/absolute language and how to fix", keywords: ["loaded", "absolute", "terrible", "hedg", "emotive", "formal", "everyone"] },
      { point: "One-sided / attacks opponents and how to fix", keywords: ["one-sided", "other side", "opposing view", "balance", "conservation", "attack", "counter"] },
    ],
    commonError: "Spotting the problems but not suggesting how to fix them.",
    guideRef: "balanced-tone",
  },
  {
    id: "dis-qa-p3-q07",
    extract: "Scientists at a top university proved that 93% of pupils learn better without phones.",
    question: "A student invented this sentence in a timed essay. Explain why it is a problem, then rewrite it honestly.",
    marks: 3,
    hint: "It sounds real, but is it? How could you make a point without faking a source?",
    modelAnswer:
      "The sentence presents an invented statistic as if it were real research by 'scientists at a top university', which is dishonest and could mislead the reader. It also overclaims with 'proved'. An honest rewrite is: 'Imagine a school that locked phones away during lessons: teachers might well find that pupils concentrated for longer, although a real study would be needed to show how large the effect is.' Alternatively, the writer could rely on reasoning or a well-known real example instead of numbers.",
    markScheme: [
      { point: "Explains the invented statistic is presented as real / dishonest", keywords: ["invented", "made up", "fake", "dishonest", "mislead", "not real", "presented as real"] },
      { point: "Notes the overclaiming ('proved') or the false authority", keywords: ["proved", "overclaim", "too certain", "top university", "false authority", "scientists"] },
      { point: "Rewrites honestly (labelled hypothetical or reasoning-based)", keywords: ["imagine", "hypothetical", "suppose", "might", "could", "may"] },
    ],
    commonError: "Rewriting it as 'Some scientists proved…', which is still invented and still overclaims.",
    guideRef: "evidence",
  },
  {
    id: "dis-qa-p3-q08",
    question: "In a debate on social media, one writer uses a moving story about a single teenager who was bullied online; another uses a large survey of thousands of teenagers. Compare the strengths of each kind of evidence.",
    marks: 3,
    hint: "Emotional impact versus ability to show a pattern.",
    modelAnswer:
      "The single story (anecdote) has strong emotional impact: it makes the harm feel real and helps the reader to empathise. However, it cannot show how common the problem is. The large survey is less vivid, but because it includes thousands of teenagers it can reveal a pattern and is harder to dismiss as a one-off, provided it was carried out fairly. The strongest writing often combines both: a statistic to show the scale and a story to make it human.",
    markScheme: [
      { point: "Anecdote: emotional/vivid but cannot show scale", keywords: ["emotional", "vivid", "empath", "human", "moving", "one person", "cannot show"] },
      { point: "Survey: shows a pattern/scale, more reliable", keywords: ["pattern", "scale", "thousands", "reliable", "representative", "common", "widespread"] },
      { point: "Evaluates / suggests combining or checking the survey", keywords: ["combine", "both", "together", "provided", "carried out fairly", "who ran", "bias"] },
    ],
    commonError: "Saying the survey is simply 'better' without recognising what the anecdote does well.",
    guideRef: "evidence",
  },
  {
    id: "dis-qa-p3-q09",
    question: "Explain the difference in meaning between 'conversely' and 'nevertheless', and write one sentence about phones in school using each correctly.",
    marks: 4,
    hint: "One introduces the opposite view; one means 'despite that'.",
    modelAnswer:
      "'Conversely' introduces the opposite viewpoint or the reverse situation: 'Supporters of a ban say phones distract pupils; conversely, opponents say phones can be valuable research tools.' 'Nevertheless' means 'despite what has just been said', so it follows a concession: 'Phones can be useful research tools; nevertheless, many teachers find they distract pupils during lessons.'",
    markScheme: [
      { point: "Explains 'conversely' = the opposite view/reverse", keywords: ["opposite", "reverse", "other side", "contrary", "opposing"] },
      { point: "Explains 'nevertheless' = despite that", keywords: ["despite", "in spite of", "even so", "all the same", "still"] },
      { point: "Correct sentence using 'conversely'", keywords: ["conversely,", "; conversely", ". conversely", "conversely, opponents", "conversely, supporters"] },
      { point: "Correct sentence using 'nevertheless'", keywords: ["nevertheless,", "; nevertheless", ". nevertheless", "nevertheless, many", "nevertheless, they"] },
    ],
    commonError: "Treating the two words as interchangeable synonyms for 'however'.",
    guideRef: "discourse-markers",
  },
  {
    id: "dis-qa-p3-q10",
    extract: "In conclusion, there are lots of good points on both sides of the homework debate, so it is really up to the reader to decide what they think.",
    question: "Explain why this conclusion would lose marks, then rewrite it.",
    marks: 3,
    hint: "WJF: what is missing?",
    modelAnswer:
      "It sits on the fence: it does not weigh the arguments or reach a judgement, even though 'discuss' expects one, and it hands the decision to the reader. Rewrite: 'Both sides agree that pupils' time is precious. On balance, homework should not be abolished, because short, regular practice helps learning; however, schools should limit its length and coordinate deadlines so that it supports pupils rather than overwhelming them.'",
    markScheme: [
      { point: "Identifies fence-sitting / no judgement", keywords: ["fence", "no judgement", "no verdict", "does not decide", "up to the reader", "avoids"] },
      { point: "Rewrite gives a clear judgement with 'on balance' or similar", keywords: ["on balance", "should not", "should be", "overall", "ultimately"] },
      { point: "Rewrite gives a reason and/or condition", keywords: ["because", "however", "provided", "limit", "only if", "so that"] },
    ],
    commonError: "Rewriting it with a verdict but no reason ('On balance homework is good').",
    guideRef: "conclusions",
  },
  {
    id: "dis-qa-p3-q11",
    question: "'A balanced essay must give exactly equal space to both sides.' How far do you agree? Explain your view.",
    marks: 4,
    hint: "Think about fairness versus false balance.",
    modelAnswer:
      "I partly disagree. A discursive essay must treat both sides fairly, presenting each at its strongest, so the opposing side should not be squeezed into a single dismissive sentence. However, balance does not mean equal space. If the evidence on one side is much stronger, pretending that the two sides are equal would be 'false balance' and would mislead the reader. A fair essay represents the weaker side accurately, then lets the judgement reflect the real weight of the evidence.",
    markScheme: [
      { point: "Gives a clear view (partly disagrees)", keywords: ["partly", "disagree", "agree to an extent", "not entirely", "to some extent"] },
      { point: "Fairness: both sides presented accurately/at their strongest", keywords: ["fair", "strongest", "accurately", "steelman", "properly", "both sides"] },
      { point: "Equal space can mislead / false balance", keywords: ["false balance", "mislead", "not equal", "stronger evidence", "weight of evidence", "pretend"] },
      { point: "Links to the judgement reflecting the evidence", keywords: ["judgement", "conclusion", "verdict", "weight", "reflect", "evidence"] },
    ],
    commonError: "Simply agreeing because 'balanced' sounds like 'equal'.",
    guideRef: "conclusions",
  },
  {
    id: "dis-qa-p3-q12",
    question: "Write the first two sentences of a discursive essay on 'Should mobile phones be banned in schools?' that avoid clichés, then explain one choice you made.",
    marks: 3,
    hint: "A vivid scene, a surprising (true) fact or a crisp statement of the disagreement.",
    modelAnswer:
      "Walk into any school canteen at lunchtime and you may see rows of pupils sitting together, each staring silently at a glowing screen. To some, this proves that phones have taken over childhood; to others, it is simply what socialising looks like in the twenty-first century. I chose to open with a familiar scene because it draws the reader in visually, and then used a semicolon to balance the two interpretations so that neither side is favoured.",
    markScheme: [
      { point: "Engaging, non-clichéd opening sentence", keywords: ["walk into", "lunchtime", "canteen", "screen", "imagine", "picture", "scene"] },
      { point: "Second sentence sets out both sides", keywords: ["to some", "to others", "others", "some", "while", "critics", "supporters"] },
      { point: "Explains a deliberate choice and its effect", keywords: ["i chose", "because", "draws", "engage", "semicolon", "balance", "effect"] },
    ],
    commonError: "Opening with 'Since the dawn of time' or 'In this essay', or forgetting to explain a choice.",
    guideRef: "introductions",
  },
];

// ---------------------------------------------------------------------------
// Written Paper 4: discursive writing on the novel (A Christmas Carol)
// ---------------------------------------------------------------------------

const qaP4: QA[] = [
  {
    id: "dis-qa-p4-q01",
    question: "Identify two techniques Dickens uses in Extract 1 to present Scrooge, and explain the effect of each.",
    marks: 4,
    hint: "Look at the long list of adjectives and the comparisons.",
    modelAnswer:
      "First, Dickens uses a list of harsh adjectives, 'squeezing, wrenching, grasping, scraping, clutching, covetous', which piles up Scrooge's greed until it feels overwhelming; the -ing words suggest constant, grabbing action. Second, he uses similes such as 'Hard and sharp as flint' and 'solitary as an oyster', which present Scrooge as cold, unfeeling and closed off from other people, as though there is no warmth or 'generous fire' in him.",
    markScheme: [
      { point: "Identifies the list/accumulation of adjectives", keywords: ["list", "adjectives", "squeezing", "grasping", "accumulation", "asyndetic", "-ing"] },
      { point: "Explains the effect of the list (greed overwhelming, relentless)", keywords: ["greed", "overwhelming", "relentless", "grabbing", "mean", "miserly", "emphasis"] },
      { point: "Identifies a simile (flint/oyster)", keywords: ["simile", "as flint", "as an oyster", "oyster", "flint"] },
      { point: "Explains the effect of the simile (cold, hard, isolated)", keywords: ["cold", "hard", "isolated", "lonely", "closed", "unfeeling", "shut"] },
    ],
    commonError: "Naming techniques without explaining what they suggest about Scrooge.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-qa-p4-q02",
    question: "Explain how the simile 'solitary as an oyster' could be used as evidence by BOTH sides of the question 'Is Scrooge's change believable?'.",
    marks: 4,
    hint: "What is an oyster like on the outside? What might be hidden inside?",
    modelAnswer:
      "A sceptic could argue that the simile shows how deeply closed Scrooge is: an oyster's shell is hard and tightly shut, so it is hard to believe he could open up in a single night. However, a supporter of the change could argue that an oyster may contain a pearl, so the image hints that something precious is hidden inside him, waiting to be revealed. In that reading, Dickens plants the possibility of change in the very first stave, which makes the transformation feel prepared rather than sudden.",
    markScheme: [
      { point: "Sceptical reading: hard, tightly closed shell", keywords: ["hard shell", "closed", "shut", "tightly", "isolated", "hard to open"] },
      { point: "Links sceptical reading to change being unbelievable", keywords: ["unbelievable", "hard to believe", "single night", "too sudden", "sceptic", "unlikely"] },
      { point: "Supportive reading: pearl/hidden goodness", keywords: ["pearl", "hidden", "precious", "inside", "goodness", "treasure"] },
      { point: "Links supportive reading to change being prepared", keywords: ["prepared", "foreshadow", "hint", "possibility", "believable", "from the start", "stave one"] },
    ],
    commonError: "Giving only one reading when the question asks for both sides.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-qa-p4-q03",
    question: "How could Extract 2 be used to argue that Scrooge's change is NOT realistic?",
    marks: 3,
    hint: "Look at repetition and the size of the claims.",
    modelAnswer:
      "Extract 2 could be used to argue that the change is unrealistic because its language is deliberately exaggerated. The repetition of 'good' ('as good a friend, as good a master, and as good a man') and the ever-widening list ('city, town, or borough, in the good old world') make the ending sound like a fairy tale. 'Infinitely more' is hyperbole, suggesting a change so total that it seems more like a moral lesson than the gradual development of a real person.",
    markScheme: [
      { point: "Identifies the repetition of 'good'", keywords: ["repetition", "repeated", "good", "as good a"] },
      { point: "Identifies exaggeration/hyperbole ('infinitely', widening list)", keywords: ["hyperbole", "exaggerat", "infinitely", "list", "world", "borough"] },
      { point: "Explains why this suggests the change is unrealistic (fairy tale/moral lesson)", keywords: ["fairy tale", "unrealistic", "too perfect", "moral lesson", "fable", "not real life", "sudden"] },
    ],
    commonError: "Retelling what happens in Stave Five instead of analysing the language.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-qa-p4-q04",
    question: "Explain how events in Stave Two help to make Scrooge's later change believable.",
    marks: 3,
    hint: "What does the Ghost of Christmas Past show him, and how does he react?",
    modelAnswer:
      "In Stave Two, the Ghost of Christmas Past shows Scrooge himself as a lonely boy left at school over Christmas, and Scrooge is moved by the sight. He also sees the warmth of his old employer Fezziwig, and Belle, the young woman who leaves him because he has come to love money more than her. These scenes show the reader the causes of Scrooge's coldness, loneliness and loss, and his emotional reactions show that his feelings are not dead, only buried. Because we understand why he became hard, it is easier to believe he can soften.",
    markScheme: [
      { point: "Refers to the lonely childhood", keywords: ["lonely", "boy", "school", "childhood", "neglected", "alone"] },
      { point: "Refers to Fezziwig and/or Belle", keywords: ["fezziwig", "belle", "fiancée", "lost love", "employer", "money"] },
      { point: "Explains that showing causes / his emotional reactions makes change believable", keywords: ["cause", "reason", "why he became", "moved", "weeps", "feelings", "buried", "soften"] },
    ],
    commonError: "Mixing up the staves, for example placing the Cratchits' Christmas dinner in Stave Two.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-qa-p4-q05",
    question: "Write an introduction (three or four sentences) for the essay 'Is Scrooge's change in A Christmas Carol believable?'.",
    marks: 3,
    hint: "Context about the novel, the two views, and a signpost. No verdict.",
    modelAnswer:
      "At the start of A Christmas Carol, Dickens presents Ebenezer Scrooge as a 'covetous, old sinner' who refuses to give a penny to the poor; by the end, he is 'a second father' to Tiny Tim. Some readers find this transformation, completed in a single night, too sudden to be convincing. Others argue that Dickens prepares it carefully, stave by stave, so that the change feels earned. Weighing these views requires a close look at how, and why, Scrooge changes.",
    markScheme: [
      { point: "Context: the before/after contrast with textual detail", keywords: ["covetous", "sinner", "second father", "tiny tim", "at the start", "by the end", "dickens"] },
      { point: "Issue: both views named", keywords: ["some readers", "others", "too sudden", "prepared", "convincing", "earned", "critics"] },
      { point: "Direction: signposts the weighing without a verdict", keywords: ["weigh", "close look", "consider", "explore", "examine", "requires"] },
    ],
    commonError: "Retelling the plot of the whole novel instead of setting up the debate.",
    guideRef: "introductions",
  },
  {
    id: "dis-qa-p4-q06",
    question: "Counter-argument: 'Scrooge only changes because he is terrified of dying alone.' Write a rebuttal that uses evidence from the novel.",
    marks: 4,
    hint: "Concede the fear in Stave Four, then find signs of sympathy earlier.",
    modelAnswer:
      "Admittedly, fear plays a large part in Scrooge's change: in Stave Four he pleads at his own neglected grave and promises, 'I will honour Christmas in my heart, and try to keep it all the year.' However, his change begins well before this moment. In Stave Two he is moved by the sight of his lonely younger self, and in Stave Three he asks anxiously whether Tiny Tim will live, an interest in someone else that has nothing to do with his own death. Therefore, fear completes the change, but sympathy starts it, which makes it more than mere self-interest.",
    markScheme: [
      { point: "Concedes the role of fear in Stave Four", keywords: ["admittedly", "fear", "grave", "stave four", "terrified", "granted"] },
      { point: "Uses evidence of earlier sympathy (Stave Two or Three)", keywords: ["tiny tim", "stave three", "stave two", "younger self", "lonely boy", "will live"] },
      { point: "Explains that the change begins before the fear", keywords: ["before", "earlier", "begins", "already", "starts", "sympathy"] },
      { point: "Concludes with a reasoned judgement on the counter-argument", keywords: ["therefore", "more than", "not only", "self-interest", "completes", "so"] },
    ],
    commonError: "Denying that fear matters at all, which ignores clear evidence in Stave Four.",
    guideRef: "counter-rebuttal",
  },
  {
    id: "dis-qa-p4-q07",
    question: "Dickens subtitled the book 'A Ghost Story of Christmas' and wrote it partly to make readers think about how society treated the poor. Explain how this context might affect a judgement on whether Scrooge's change is believable.",
    marks: 3,
    hint: "Genre and purpose: what kind of story is this, and what did Dickens want readers to do?",
    modelAnswer:
      "Because A Christmas Carol is a ghost story and a moral fable rather than a realistic novel, it may be unfair to judge Scrooge's change by the standards of everyday life; supernatural visits and a single transforming night are part of the genre. Dickens's purpose was also to persuade readers to be more generous to the poor, so a clear, dramatic transformation serves that message: if even Scrooge can change, so can the reader. A judgement might therefore be that the change is not realistic in speed, but it is convincing within the rules of the fable.",
    markScheme: [
      { point: "Genre: ghost story/fable, not realism", keywords: ["ghost story", "fable", "supernatural", "genre", "not realistic", "allegory", "moral tale"] },
      { point: "Purpose: to make readers more generous to the poor", keywords: ["purpose", "poor", "generous", "readers", "message", "society", "charity"] },
      { point: "Links context to a judgement on believability", keywords: ["within", "judge", "standards", "convincing", "believable", "therefore", "earned"] },
    ],
    commonError: "Writing general facts about Victorian life without linking them to the question of believability.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-qa-p4-q08",
    question: "Write a full discursive paragraph on 'Is Scrooge's change believable?' using at least one embedded quotation from EACH extract. Present one side, then the other, then a brief weighing.",
    marks: 6,
    hint: "Counter-view first, 'Nevertheless' to pivot, analysis of quotations, then a mini-judgement.",
    modelAnswer:
      "Some readers argue that Scrooge's change is too extreme to be believable. In Stave One he is a 'squeezing, wrenching, grasping' man, yet by Stave Five he is described as 'as good a man, as the good old city knew', and the repetition of 'good' gives the ending the neatness of a fairy tale. Nevertheless, there are signs that Dickens prepares the change. The simile 'solitary as an oyster' suggests a hard shell rather than a hard heart, and an oyster may hide a pearl, implying that warmth is buried in Scrooge rather than absent. The phrase 'Scrooge was better than his word' also shows that his change lasts beyond the night of the ghosts, which makes it more than a passing mood. On balance, therefore, the change is exaggerated in its expression but prepared in its foundations, so within Dickens's moral fable it is convincing.",
    markScheme: [
      { point: "Presents the 'not believable' side clearly", keywords: ["too extreme", "too sudden", "unbelievable", "some readers", "sceptic", "fairy tale", "not realistic"] },
      { point: "Embedded quotation from Extract 1 (Stave One)", keywords: ["squeezing", "grasping", "oyster", "flint", "covetous", "tight-fisted", "solitary"] },
      { point: "Embedded quotation from Extract 2 (Stave Five)", keywords: ["as good a man", "better than his word", "second father", "good old city", "infinitely more"] },
      { point: "Pivots to the other side with a discourse marker", keywords: ["nevertheless", "however", "on the other hand", "conversely", "yet", "admittedly"] },
      { point: "Analyses language/technique in the quotations", keywords: ["simile", "repetition", "list", "suggests", "implies", "connotes", "hyperbole"] },
      { point: "Brief weighing / judgement", keywords: ["on balance", "therefore", "overall", "convincing", "within", "fable", "judgement"] },
    ],
    commonError: "Dropping in quotations without analysing them, or presenting only one side.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-qa-p4-q09",
    question: "Compare how Dickens uses lists in Extract 1 and Extract 2. What does the contrast suggest?",
    marks: 4,
    hint: "What kind of words are in each list, and how do they build?",
    modelAnswer:
      "In Extract 1, the list 'squeezing, wrenching, grasping, scraping, clutching, covetous' is made of harsh verbs turned into adjectives, which suggests constant grabbing and greed, and the sounds are rough and spiky. In Extract 2, the list 'as good a friend, as good a master, and as good a man' builds through repetition of 'good', rising from friend to master to man, and then widens out to 'city, town, or borough, in the good old world'. The contrast suggests a complete reversal: the first list closes in on Scrooge's selfishness, while the second opens outwards, showing his goodness spreading to the whole world.",
    markScheme: [
      { point: "Analyses the Extract 1 list (harsh, greed)", keywords: ["squeezing", "grasping", "harsh", "greed", "grabbing", "verbs", "clutching"] },
      { point: "Analyses the Extract 2 list (repetition of 'good', building)", keywords: ["as good a", "repetition", "good", "friend", "master", "builds"] },
      { point: "Notes structure: closing in versus widening out", keywords: ["widen", "outwards", "expands", "world", "borough", "spreads", "closes in"] },
      { point: "Explains the contrast shows a reversal/transformation", keywords: ["reversal", "transformation", "contrast", "opposite", "change", "mirror", "complete"] },
    ],
    commonError: "Analysing each list separately without drawing out what the contrast suggests.",
    guideRef: "planning-novel",
  },
  {
    id: "dis-qa-p4-q10",
    question: "Plan a block-structure essay on 'Is Scrooge's change believable?': give three points for 'not believable', three for 'believable', and say which side you would put second and why.",
    marks: 6,
    hint: "Six brief bullet points and one sentence of reasoning.",
    modelAnswer:
      "Not believable: (1) the change happens in a single night; (2) his joy in Stave Five is exaggerated ('as light as a feather'); (3) he may change mainly out of fear of his own lonely death in Stave Four. Believable: (1) Stave Two shows the causes of his coldness (lonely childhood, Belle), so they can be undone; (2) he shows growing sympathy, such as his concern for Tiny Tim in Stave Three; (3) the change lasts ('Scrooge was better than his word'), and the fable genre suits a dramatic transformation. I would put 'believable' second, because that is the side I find stronger, so it leads naturally into my judgement.",
    markScheme: [
      { point: "Not believable point 1 (e.g. one night/sudden)", keywords: ["one night", "single night", "sudden", "too quick", "overnight", "speed"] },
      { point: "Not believable point 2 (e.g. exaggerated joy)", keywords: ["exaggerat", "light as a feather", "hyperbole", "joy", "fairy tale", "giddy"] },
      { point: "Not believable point 3 (e.g. fear/self-interest)", keywords: ["fear", "grave", "scared", "self-interest", "selfish", "death"] },
      { point: "Believable points: causes in Stave Two", keywords: ["stave two", "childhood", "belle", "fezziwig", "causes", "lonely boy"] },
      { point: "Believable points: sympathy/lasting change/genre", keywords: ["tiny tim", "sympathy", "better than his word", "lasting", "fable", "genre", "gradual"] },
      { point: "States which side goes second, with a reason", keywords: ["second", "last", "leads into", "stronger", "judgement", "conclusion", "agree with"] },
    ],
    commonError: "Writing three versions of the same point (for example 'too fast', 'too quick', 'overnight') and counting them as three.",
    guideRef: "structures",
  },
  {
    id: "dis-qa-p4-q11",
    question: "Write a conclusion (four or five sentences) for 'Is Scrooge's change believable?' that weighs both sides and reaches a qualified judgement.",
    marks: 4,
    hint: "WJF, with a judgement that considers genre.",
    modelAnswer:
      "Scrooge's transformation certainly strains realism: no real miser becomes 'as good a man, as the good old city knew' overnight. Yet Dickens prepares the change with care, revealing the lonely boy and the lost love behind the 'solitary' oyster and showing Scrooge's sympathy stirring before his fear takes hold. On balance, the change is believable within the world of a ghostly moral fable, even if it would not be in a realistic novel. Perhaps that is exactly Dickens's point: if a man like Scrooge can change in a night, his readers have no excuse not to.",
    markScheme: [
      { point: "Weighs the 'not believable' side", keywords: ["strains", "realism", "overnight", "sudden", "admittedly", "certainly", "exaggerat"] },
      { point: "Weighs the 'believable' side", keywords: ["prepares", "lonely boy", "lost love", "sympathy", "oyster", "stave two", "careful"] },
      { point: "Qualified judgement ('on balance… within…')", keywords: ["on balance", "within", "fable", "qualified", "even if", "overall", "although"] },
      { point: "Final thought linked to Dickens's purpose", keywords: ["dickens's point", "readers", "purpose", "no excuse", "message", "we can change", "audience"] },
    ],
    commonError: "Introducing a new point in the conclusion, such as a new quotation that has not been discussed.",
    guideRef: "conclusions",
  },
  {
    id: "dis-qa-p4-q12",
    question: "Challenge: 'Dickens cares more about changing his readers than about making Scrooge realistic.' Discuss briefly, considering both sides and reaching a judgement.",
    marks: 5,
    hint: "Think about the narrator's voice, the ghosts' lessons, the social message, and the moments of psychological depth.",
    modelAnswer:
      "There is strong evidence that Dickens's main aim is to change his readers. The book is a fable with a clear moral, and Scrooge's cruel words to the charity collectors ('Are there no prisons?', 'decrease the surplus population') echo attitudes to the poor that some of Dickens's own readers held. When the Ghost of Christmas Present reveals the children 'Ignorance' and 'Want', the warning seems aimed at society, not just Scrooge. However, Dickens also gives Scrooge real psychological depth: the lonely schoolboy and the loss of Belle explain how he became hard, which a writer interested only in a message would not need. On balance, the statement is largely true, but Dickens is skilful enough to make the lesson work through a character who feels human, and that combination is why the story still moves readers today.",
    markScheme: [
      { point: "Argues for the statement: moral fable/aim to change readers", keywords: ["fable", "moral", "readers", "message", "purpose", "society", "change his readers"] },
      { point: "Uses evidence for the statement (charity collectors, Ignorance and Want)", keywords: ["ignorance", "want", "surplus population", "prisons", "workhouses", "charity"] },
      { point: "Argues against: psychological depth/realism of Scrooge", keywords: ["psychological", "depth", "lonely", "belle", "childhood", "human", "realistic"] },
      { point: "Uses a discourse marker to weigh/turn", keywords: ["however", "nevertheless", "conversely", "on the other hand", "admittedly", "yet"] },
      { point: "Reaches a reasoned judgement", keywords: ["on balance", "largely", "overall", "ultimately", "judgement", "combination", "both"] },
    ],
    commonError: "Agreeing completely without considering how Dickens also makes Scrooge psychologically convincing.",
    guideRef: "planning-novel",
  },
];

export const discursiveWriting: Topic = {
  id: "discursive-writing",
  title: "Discursive Writing",
  subject: "Novel",
  icon: "⚖️",
  summary: "Weigh both sides of an argument and reach a judgement.",
  intro:
    "Should phones be banned in school? Is Scrooge's change in *A Christmas Carol* believable? Discursive writing teaches you to think before you shout: to lay out the strongest case on each side, test the evidence, and only then reach a judgement you can defend. It is the skill behind every good debate, newspaper column and university essay, and by the end of this topic you will be able to plan and write a balanced, formal discursive essay under timed conditions.",

  guide: [
    {
      id: "what-is-discursive",
      heading: "Discursive, persuasive or argumentative?",
      body:
        "**Discursive writing** explores an issue from more than one side in a balanced, reasoned way and then reaches a considered judgement. The word comes from the Latin *discurrere*, 'to run to and fro': your thinking runs back and forth between viewpoints before it settles.\n\nIt is easy to confuse three related kinds of writing:\n\n- **Persuasive writing** tries to win the reader over to *one* view. It often uses emotive language, rhetorical questions and direct address ('*You* deserve better!'). Think of adverts, campaign speeches and charity appeals.\n- **Argumentative writing** also takes *one* clear position, usually from the very first paragraph, but relies mainly on logic and evidence. It mentions the other side chiefly in order to knock it down.\n- **Discursive writing** gives each side a fair hearing, in a calm and formal tone. Your own view is held back until the conclusion, where you weigh the arguments and reach a judgement.\n\nThe **task wording** tells you which kind of writing is wanted. 'Discuss', 'Consider both sides', 'Explore the arguments for and against' and 'To what extent…?' all signal discursive writing. 'Persuade' or 'Convince' signal persuasive writing; 'Argue that…' signals argumentative writing.\n\nA useful test: if a reader who disagrees with you finishes your essay and thinks 'that was fair to my side', you have written a discursive essay.",
      diagram: `<svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A spectrum from discursive writing, which is balanced, through argumentative writing, to persuasive writing, which is one-sided and emotive"><defs><marker id="disA1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#78350f"/></marker></defs><line x1="30" y1="60" x2="335" y2="60" stroke="#78350f" stroke-width="2" marker-end="url(#disA1)"/><circle cx="60" cy="60" r="9" fill="#fde68a" stroke="#b45309"/><circle cx="180" cy="60" r="9" fill="#fdba74" stroke="#c2410c"/><circle cx="300" cy="60" r="9" fill="#fca5a5" stroke="#b91c1c"/><text x="60" y="38" font-size="13" font-weight="bold" text-anchor="middle" fill="#78350f">Discursive</text><text x="180" y="38" font-size="13" font-weight="bold" text-anchor="middle" fill="#7c2d12">Argumentative</text><text x="300" y="38" font-size="13" font-weight="bold" text-anchor="middle" fill="#7f1d1d">Persuasive</text><text x="60" y="88" font-size="11" text-anchor="middle" fill="#374151">both sides fairly</text><text x="60" y="103" font-size="11" text-anchor="middle" fill="#374151">view at the end</text><text x="180" y="88" font-size="11" text-anchor="middle" fill="#374151">one side, logic</text><text x="180" y="103" font-size="11" text-anchor="middle" fill="#374151">view from the start</text><text x="300" y="88" font-size="11" text-anchor="middle" fill="#374151">one side, emotion</text><text x="300" y="103" font-size="11" text-anchor="middle" fill="#374151">wins the reader over</text><text x="180" y="135" font-size="11" text-anchor="middle" fill="#78350f">balanced and calm  ...........  one-sided and emotive</text></svg>`,
      diagramCaption: "The three kinds of writing sit on a spectrum from balanced to one-sided.",
      keyPoints: [
        "Discursive writing explores several sides fairly and gives a judgement at the end.",
        "Persuasive writing pushes one view, often with emotive techniques.",
        "Argumentative writing takes one side from the start and uses logic to defend it.",
        "Task words such as 'discuss', 'consider' and 'to what extent' signal a discursive essay.",
      ],
      thinkDeeper:
        "A newspaper prints an article headed 'Homework: the debate'. It quotes three teachers who support homework and one pupil who is against it, and ends 'Homework is here to stay.' Is it truly discursive? What would you change to make it fairer, and does 'fair' always mean 'equal space for each side'?",
      discovery: {
        problem:
          "Read these three openings on homework. Which one is discursive, and what gave it away?\n\n- A: 'Homework is ruining childhood, and it is time we said: enough!'\n- B: 'Homework should be abolished, and this essay will prove it.'\n- C: 'Few school traditions divide opinion as sharply as homework: some see it as vital practice, others as an unfair burden.'",
        idea:
          "C is discursive. It names *both* views calmly and keeps the writer's own opinion back. A is persuasive (emotive words 'ruining', exclamation). B is argumentative (it announces one side as fact before any evidence).",
      },
    },
    {
      id: "structures",
      heading: "Two ways to build the essay: block and alternating",
      body:
        "Every discursive essay needs an **introduction**, a set of **body paragraphs** that weigh the arguments, and a **conclusion** with a judgement. The big decision is how to arrange the body.\n\n**Block structure** (also called 'for then against'): you present all the arguments on one side, then all the arguments on the other.\n\n- Introduction\n- For 1, For 2, For 3\n- A turning-point sentence ('However, there is another side to this debate.')\n- Against 1, Against 2, Against 3\n- Conclusion\n\nIt is quick to plan and very clear, which makes it a safe choice under time pressure. Its weakness is that the two halves can read like two separate lists that never speak to each other.\n\n**Alternating structure** (also called 'point–counterpoint'): each paragraph takes one aspect of the issue (cost, health, learning, fairness…) and sets the two sides against each other within it.\n\n- Introduction\n- Aspect 1: point, counterpoint, brief weighing\n- Aspect 2: point, counterpoint, brief weighing\n- Aspect 3: point, counterpoint, brief weighing\n- Conclusion\n\nThis is more sophisticated because the arguments genuinely *answer* each other, but it is harder to plan quickly.\n\n**A top tip for either structure**: present the side you will finally agree with *second* (or let it have the last word in each paragraph). The reader's most recent impression then leads naturally into your conclusion.",
      diagram: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Block structure with all for paragraphs then all against paragraphs, beside alternating structure where each paragraph pairs a point with a counterpoint"><text x="90" y="18" font-size="13" font-weight="bold" text-anchor="middle" fill="#78350f">Block</text><text x="270" y="18" font-size="13" font-weight="bold" text-anchor="middle" fill="#78350f">Alternating</text><rect x="30" y="28" width="120" height="20" rx="4" fill="#e5e7eb" stroke="#6b7280"/><text x="90" y="42" font-size="11" text-anchor="middle" fill="#111827">Introduction</text><rect x="30" y="52" width="120" height="18" rx="4" fill="#bbf7d0" stroke="#15803d"/><text x="90" y="65" font-size="11" text-anchor="middle" fill="#14532d">For 1</text><rect x="30" y="73" width="120" height="18" rx="4" fill="#bbf7d0" stroke="#15803d"/><text x="90" y="86" font-size="11" text-anchor="middle" fill="#14532d">For 2</text><rect x="30" y="94" width="120" height="18" rx="4" fill="#bbf7d0" stroke="#15803d"/><text x="90" y="107" font-size="11" text-anchor="middle" fill="#14532d">For 3</text><rect x="30" y="115" width="120" height="18" rx="4" fill="#fecaca" stroke="#b91c1c"/><text x="90" y="128" font-size="11" text-anchor="middle" fill="#7f1d1d">Against 1</text><rect x="30" y="136" width="120" height="18" rx="4" fill="#fecaca" stroke="#b91c1c"/><text x="90" y="149" font-size="11" text-anchor="middle" fill="#7f1d1d">Against 2</text><rect x="30" y="157" width="120" height="18" rx="4" fill="#fecaca" stroke="#b91c1c"/><text x="90" y="170" font-size="11" text-anchor="middle" fill="#7f1d1d">Against 3</text><rect x="30" y="178" width="120" height="20" rx="4" fill="#fde68a" stroke="#b45309"/><text x="90" y="192" font-size="11" text-anchor="middle" fill="#78350f">Conclusion</text><rect x="210" y="28" width="120" height="20" rx="4" fill="#e5e7eb" stroke="#6b7280"/><text x="270" y="42" font-size="11" text-anchor="middle" fill="#111827">Introduction</text><rect x="210" y="56" width="60" height="34" rx="4" fill="#bbf7d0" stroke="#15803d"/><rect x="270" y="56" width="60" height="34" rx="4" fill="#fecaca" stroke="#b91c1c"/><text x="270" y="77" font-size="11" text-anchor="middle" fill="#111827">Aspect 1</text><rect x="210" y="96" width="60" height="34" rx="4" fill="#bbf7d0" stroke="#15803d"/><rect x="270" y="96" width="60" height="34" rx="4" fill="#fecaca" stroke="#b91c1c"/><text x="270" y="117" font-size="11" text-anchor="middle" fill="#111827">Aspect 2</text><rect x="210" y="136" width="60" height="34" rx="4" fill="#bbf7d0" stroke="#15803d"/><rect x="270" y="136" width="60" height="34" rx="4" fill="#fecaca" stroke="#b91c1c"/><text x="270" y="157" font-size="11" text-anchor="middle" fill="#111827">Aspect 3</text><rect x="210" y="178" width="120" height="20" rx="4" fill="#fde68a" stroke="#b45309"/><text x="270" y="192" font-size="11" text-anchor="middle" fill="#78350f">Conclusion</text></svg>`,
      diagramCaption: "Block keeps the sides apart; alternating sets them against each other inside every paragraph.",
      keyPoints: [
        "Block = all 'for' then all 'against', joined by a turning-point sentence.",
        "Alternating = each paragraph pairs a point with its counterpoint on one aspect.",
        "Block is safer under time pressure; alternating shows more sophisticated weighing.",
        "Put the side you finally support second, so it leads into your conclusion.",
      ],
      thinkDeeper:
        "You are writing on 'Should school uniform be compulsory?' and you have three arguments for and three against, but two of them are about cost. Which structure would handle that overlap better, and why?",
      discovery: {
        problem:
          "Here are four ideas about a four-day school week: (1) pupils would be more rested; (2) longer days would tire younger pupils; (3) schools would save on heating; (4) parents would need to pay for childcare on the fifth day. Group them into pairs that 'answer' each other. What does that suggest about how you could organise the essay?",
        idea:
          "Ideas 1 and 2 are both about tiredness and wellbeing; ideas 3 and 4 are both about money. Pairing them by aspect gives you an alternating structure (a wellbeing paragraph and a cost paragraph), in which the arguments genuinely clash rather than sitting in separate lists.",
      },
    },
    {
      id: "introductions",
      heading: "Introductions: open the debate, not your verdict",
      body:
        "A discursive introduction has three jobs, which you can remember as **CID**:\n\n- **Context**: why this issue matters *now*. A striking image, a recent change or a familiar scene draws the reader in.\n- **Issue**: why it is debated. Name the two (or more) sides briefly so the reader can see the disagreement.\n- **Direction**: signpost that the essay will weigh the arguments before reaching a judgement.\n\nWhat a discursive introduction should **not** do is announce your final opinion. 'I think homework is pointless' in the first line turns the essay into an argument and makes the 'balanced' paragraphs that follow look insincere.\n\nAvoid the three tired openings that examiners see every day:\n\n- 'In this essay I will talk about…' (flat and mechanical)\n- 'The dictionary defines a zoo as…' (wastes your best sentence on a definition nobody needed)\n- 'Since the dawn of time, humans have…' (vague and untrue)\n\nInstead, try one of these openings: a short vivid scene, a surprising fact *you are sure is true*, a question that the essay will genuinely answer, or a crisp statement of the disagreement.\n\nIf a key term is genuinely ambiguous, define it in your own words: 'By \"AI in schoolwork\" I mean tools that can draft or check written work for a pupil.' That shows control, not padding.",
      passage: {
        id: "model-intro-ai",
        title: "Model introduction: Should pupils be allowed to use AI for homework?",
        source: "Original model introduction written for this app",
        text:
          "Ten years ago, a pupil stuck on an essay had three options: ask a parent, open a textbook or stare at the ceiling. Today, a few typed words can produce a fluent paragraph in seconds. Artificial intelligence tools that can draft, summarise and correct writing have arrived in classrooms faster than the rules about how to use them. Some teachers welcome them as tireless tutors that can explain a tricky idea at midnight; others fear they will quietly do pupils' thinking for them. Whether schools should allow AI in homework, and on what terms, deserves careful consideration from both sides.",
        note:
          "Context: the 'then and now' contrast. Issue: two views set side by side with a semicolon. Direction: the final sentence signals a balanced discussion without revealing a verdict.",
      },
      keyPoints: [
        "CID: Context, Issue (why debated), Direction (signpost the weighing).",
        "Do not give your final judgement in the introduction.",
        "Avoid 'In this essay I will…', dictionary definitions and 'since the dawn of time'.",
        "Define a key term in your own words only if it is genuinely ambiguous.",
      ],
      thinkDeeper:
        "Some examiners say a discursive introduction may *hint* at the direction the essay will take. Where is the line between a helpful hint ('the answer may be less simple than it seems') and giving the game away?",
      discovery: {
        problem:
          "Which of these introductions to 'Should zoos still exist?' is stronger, and why?\n\n- A: 'In this essay I will discuss zoos. Zoos are places where animals are kept. I think zoos are cruel.'\n- B: 'For some, a zoo is a modern ark that saves species from extinction; for others, it is a prison with a gift shop. Both views deserve a hearing.'",
        idea:
          "B is far stronger. It establishes the two sides with a vivid contrast (ark versus prison) and signals a fair discussion. A is mechanical, defines the obvious and gives the writer's verdict in line three, which destroys the balance before the essay has begun.",
      },
    },
    {
      id: "balanced-tone",
      heading: "Balanced tone, formal register and hedging",
      body:
        "**Register** is the level of formality in your language. Discursive essays need a **formal register**: no slang ('loads of', 'kids'), no contractions ('don't', 'it's'), no chatty asides ('let's be honest').\n\n**Impersonal constructions** keep the focus on the ideas rather than on you. They also let you present views you do not hold without pretending to hold them:\n\n- 'It could be argued that…'\n- 'It is often claimed that…'\n- 'There is evidence to suggest that…'\n- 'Many people believe that…' / 'Critics point out that…' / 'Supporters maintain that…'\n- the **passive voice**: 'It has been suggested that phones damage concentration.'\n\n**Hedging** means using cautious language so that you claim only what you can support. Hedging tools include **modal verbs** (*may, might, could*), **adverbs** (*perhaps, arguably, possibly, often*) and **qualifiers** (*some, many, most*). Compare:\n\n- Overstated: 'All teenagers are addicted to their phones.'\n- Hedged: 'Many teenagers report that they find it difficult to put their phones down.'\n\nThe hedged version is more accurate and therefore *more* convincing: a reader can instantly think of one teenager who is not addicted, which would sink the first sentence.\n\nChoose precise **reporting verbs** to show how strongly each side holds its view: *suggest* (tentative), *claim* (not yet proved), *argue* and *maintain* (firm), *insist* (very firm), *concede* and *acknowledge* (admitting a point).\n\nFinally, avoid **loaded language** (words that carry a built-in judgement, such as 'ridiculous', 'evil', 'brainwashed'). It signals bias and costs you marks for tone. You may use 'I' sparingly in the conclusion, where your judgement belongs.",
      diagram: `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A certainty ladder from will at the top through is likely to, may and might, down to could possibly at the bottom"><text x="180" y="18" font-size="13" font-weight="bold" text-anchor="middle" fill="#78350f">The certainty ladder</text><line x1="70" y1="30" x2="70" y2="160" stroke="#92400e" stroke-width="3"/><line x1="130" y1="30" x2="130" y2="160" stroke="#92400e" stroke-width="3"/><line x1="70" y1="45" x2="130" y2="45" stroke="#92400e" stroke-width="3"/><line x1="70" y1="73" x2="130" y2="73" stroke="#92400e" stroke-width="3"/><line x1="70" y1="101" x2="130" y2="101" stroke="#92400e" stroke-width="3"/><line x1="70" y1="129" x2="130" y2="129" stroke="#92400e" stroke-width="3"/><line x1="70" y1="155" x2="130" y2="155" stroke="#92400e" stroke-width="3"/><text x="145" y="49" font-size="12" fill="#7f1d1d">will / definitely (only if proved)</text><text x="145" y="77" font-size="12" fill="#7c2d12">is likely to / probably</text><text x="145" y="105" font-size="12" fill="#78350f">may / often / many</text><text x="145" y="133" font-size="12" fill="#365314">might / perhaps / some</text><text x="145" y="159" font-size="12" fill="#14532d">could possibly (very tentative)</text><text x="18" y="49" font-size="11" fill="#7f1d1d">certain</text><text x="18" y="159" font-size="11" fill="#14532d">cautious</text></svg>`,
      diagramCaption: "Climb only as high up the certainty ladder as your evidence allows.",
      keyPoints: [
        "Formal register: no slang, no contractions, no chatty asides.",
        "Impersonal constructions ('It could be argued that…') present views fairly.",
        "Hedging (may, perhaps, many) makes claims accurate and harder to knock down.",
        "Avoid loaded words such as 'ridiculous' that reveal bias.",
      ],
      thinkDeeper:
        "Can you hedge too much? Rewrite 'Uniform reduces bullying' so that it is properly cautious, then write a version so over-hedged that it says nothing at all. Where is the sweet spot?",
      discovery: {
        problem:
          "Rewrite this sentence so it would fit a discursive essay: 'Homework is a total waste of time and teachers who set loads of it are just lazy.' What did you have to change?",
        idea:
          "Something like: 'It could be argued that some homework adds little to pupils' learning, particularly when it repeats work already completed in class.' You remove slang ('loads'), loaded attacks ('lazy'), absolute claims ('total waste') and replace them with an impersonal construction and hedging ('could', 'some', 'particularly when').",
      },
    },
    {
      id: "discourse-markers",
      heading: "Discourse markers: signposts for the reader",
      body:
        "**Discourse markers** (also called connectives or signposts) are words and phrases that show how one idea relates to the next. In a discursive essay they are vital, because the reader must always know whether you are adding to a side, switching sides, or weighing them up.\n\n- **Adding**: furthermore, moreover, in addition, similarly, likewise\n- **Contrasting**: however, on the other hand, conversely, whereas, by contrast\n- **Conceding** (admitting a point before answering it): admittedly, granted, it is true that, although\n- **Despite this**: nevertheless, nonetheless, even so\n- **Cause and effect**: consequently, therefore, as a result, thus, hence\n- **Exemplifying**: for example, for instance, notably, such as\n- **Concluding and weighing**: on balance, ultimately, overall, all things considered, in conclusion\n\nUse them **precisely**. *Conversely* means 'the opposite is true from the other side' ('Supporters say uniform saves money; conversely, opponents say it costs families more'). *Nevertheless* means 'despite what I have just said' ('Uniform can be expensive; nevertheless, it may reduce competition over clothes'). *Consequently* must introduce a genuine result.\n\nWatch the **punctuation**. When 'however' joins two complete sentences, use a semicolon before it and a comma after it: 'Phones can distract pupils; however, they can also be useful research tools.' Writing 'Phones can distract pupils, however they can…' creates a **comma splice** (two sentences wrongly joined with only a comma).\n\nDo not start every sentence with a marker. Two or three per paragraph, placed where the logic turns, is plenty.",
      keyPoints: [
        "Markers show whether you are adding, contrasting, conceding, concluding or showing a result.",
        "'Conversely' = the opposite view; 'nevertheless' = despite that; 'consequently' = as a result.",
        "Joining two sentences with 'however' needs a semicolon before and a comma after.",
        "'On balance' is the classic signal that you are weighing up in the conclusion.",
      ],
      thinkDeeper:
        "'However' and 'nevertheless' are both contrast markers, yet swapping them can change the meaning of a sentence. Write a pair of sentences where only 'nevertheless' makes sense, and explain why.",
      discovery: {
        problem:
          "Fill each gap with a different marker and see whether the logic still holds: 'Social media helps teenagers stay in touch with friends. ___, it can expose them to online bullying. ___, many parents favour a minimum age. ___, banning it outright may simply push young users towards unregulated sites.'",
        idea:
          "A strong set is 'However… Consequently… Nevertheless…'. The first switches sides, the second shows a result of the danger just described, and the third concedes that the result has a drawback. Swap 'Consequently' and 'Nevertheless' and the paragraph stops making sense: markers carry logic, not just decoration.",
      },
    },
    {
      id: "evidence",
      heading: "Evidence: statistics, experts, examples and anecdote",
      body:
        "An argument without evidence is just an opinion. Discursive essays use four main kinds of **evidence**:\n\n- **Statistics**: numbers and percentages ('In a survey of 1,000 parents…'). Powerful because they seem objective, but always ask who collected them, how many people were asked, and when.\n- **Expert opinion**: the view of someone with relevant knowledge (a paediatrician on screen time, a zoologist on captive breeding). Name their role so the reader knows why they count.\n- **Examples**: real cases ('The Arabian oryx, extinct in the wild by the early 1970s, was reintroduced to Oman from captive-bred herds'). Examples make abstract arguments concrete.\n- **Anecdote**: a short personal or illustrative story ('A friend who forgot her phone for a week said…'). Vivid and human, but the weakest evidence on its own, because one story does not prove a pattern.\n\n**Honesty with invented evidence.** In a timed piece you will not have research to hand, and some teachers allow plausible invented evidence. If you invent anything, *label it clearly*: 'Imagine a school where…', 'a hypothetical survey might find…', 'suppose that…'. Never present made-up numbers or quotations as if they were real research, and never attach a real person's or organisation's name to something they did not say. The best timed essays often rely on **logical reasoning** and **well-known real examples** instead.\n\n**Explain, don't just drop.** Evidence only earns marks when you say what it shows: 'This suggests that…', 'If this is true, then…'. A statistic left on its own is like a quotation in a literature essay with no analysis.\n\n**Evaluate** evidence from the other side, too. 'The survey was carried out by a company that sells school uniforms' is a fair and powerful challenge.",
      keyPoints: [
        "Four main types: statistics, expert opinion, examples and anecdote.",
        "Label any invented evidence clearly as hypothetical; never pass it off as real.",
        "Always explain what the evidence shows ('This suggests that…').",
        "Test evidence: who produced it, how much, how recent, and is it biased?",
      ],
      thinkDeeper:
        "A single powerful anecdote (a pupil who was bullied about their trainers) can move a reader more than a dry statistic. Is it fair to use emotional evidence in a *balanced* essay? When does it become manipulation?",
      discovery: {
        problem:
          "Rank these pieces of evidence for 'Phones harm concentration in lessons' from strongest to weakest: (A) 'My cousin says he can't focus with his phone nearby.' (B) 'A study of several thousand pupils across many schools found test scores rose after phone bans (as reported in the news).' (C) 'Phones are obviously distracting.' (D) 'A teacher with twenty years' experience notes that lessons run more smoothly when phones are locked away.'",
        idea:
          "B (a large study across many schools) is strongest, then D (relevant expert experience), then A (a single anecdote), then C, which is not evidence at all, just an assertion with 'obviously' attached. Notice that even B needs a check: who carried it out, and might other changes have raised the scores?",
      },
    },
    {
      id: "counter-rebuttal",
      heading: "Counter-argument and rebuttal",
      body:
        "A **counter-argument** is a point that opposes the view being discussed. A **rebuttal** is your response to it, showing why it is weaker, limited or outweighed.\n\nThere are several ways to rebut:\n\n- **Challenge the evidence**: 'This statistic comes from a small sample of one school.'\n- **Show it is outweighed**: 'Uniform may cost money, but the cost of keeping up with fashion is often higher.'\n- **Limit its scope**: 'This is true of younger pupils, but less so of sixth-formers.'\n- **Offer a better solution**: 'Rather than banning phones, schools could require them to be switched off in lessons.'\n- **Partly concede**: 'Admittedly, AI can produce errors; however, this is a reason to teach pupils to check it, not to ban it.'\n\nThe **concede-then-counter** pattern ('Admittedly… However… Therefore…') is the engine of a sophisticated discursive paragraph. It shows the examiner that you have genuinely weighed both sides rather than simply listing them.\n\nAlways present the opposing argument at its **strongest** (sometimes called **steelmanning**). Setting up a weak, exaggerated version of the other side just so you can knock it down is a **straw man**, and it makes your essay less convincing, not more: 'Opponents of homework think pupils should never learn anything at home' is a straw man; 'Opponents of homework argue that it widens the gap between pupils with quiet study space and those without' is a fair, strong version.",
      diagram: `<svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A pair of scales with arguments for on one pan and arguments against on the other, tipping slightly towards one side to show a judgement"><line x1="180" y1="40" x2="180" y2="160" stroke="#78350f" stroke-width="4"/><polygon points="150,165 210,165 180,150" fill="#92400e"/><line x1="70" y1="58" x2="290" y2="40" stroke="#78350f" stroke-width="4"/><circle cx="180" cy="49" r="6" fill="#b45309"/><line x1="70" y1="58" x2="45" y2="105" stroke="#6b7280"/><line x1="70" y1="58" x2="95" y2="105" stroke="#6b7280"/><path d="M35 105 Q70 128 105 105 Z" fill="#bbf7d0" stroke="#15803d"/><line x1="290" y1="40" x2="265" y2="87" stroke="#6b7280"/><line x1="290" y1="40" x2="315" y2="87" stroke="#6b7280"/><path d="M255 87 Q290 110 325 87 Z" fill="#fecaca" stroke="#b91c1c"/><text x="70" y="145" font-size="12" font-weight="bold" text-anchor="middle" fill="#14532d">Point + evidence</text><text x="70" y="160" font-size="11" text-anchor="middle" fill="#14532d">(heavier after rebuttal)</text><text x="290" y="128" font-size="12" font-weight="bold" text-anchor="middle" fill="#7f1d1d">Counter-argument</text><text x="290" y="143" font-size="11" text-anchor="middle" fill="#7f1d1d">(lightened by rebuttal)</text><text x="180" y="22" font-size="13" font-weight="bold" text-anchor="middle" fill="#78350f">Weigh, then judge</text></svg>`,
      diagramCaption: "A rebuttal does not delete the other side; it shows why it weighs less.",
      keyPoints: [
        "Counter-argument = the opposing view; rebuttal = your reasoned reply to it.",
        "Rebut by challenging evidence, showing it is outweighed, limiting it, or offering a better solution.",
        "'Admittedly… However… Therefore…' is the concede-then-counter engine.",
        "Present the other side at its strongest; a straw man weakens your essay.",
      ],
      thinkDeeper:
        "If you can rebut every counter-argument completely, was the issue really worth a discursive essay? What does it tell you if one side cannot be rebutted at all?",
      discovery: {
        problem:
          "Counter-argument: 'A four-day school week would leave working parents without childcare on the fifth day.' Write a one-sentence rebuttal. Then ask yourself: did you deny the problem, limit it, or solve it?",
        idea:
          "Possible rebuttals: limit it ('This affects families with younger children most; older pupils can manage a day of independent study'), solve it ('Schools could run optional supervised clubs on the fifth day'), or show it is outweighed. Denying a real problem ('Parents will cope') is the weakest move, because the reader knows it is not a reply at all.",
      },
    },
    {
      id: "conclusions",
      heading: "Conclusions: weigh it, judge it, finish it",
      body:
        "The conclusion is where a discursive essay earns its top marks. It should do three things (**WJF**):\n\n- **Weigh**: briefly remind the reader of the strongest point on each side, not every point.\n- **Judge**: reach a clear, reasoned judgement and explain *why* one side outweighs the other. 'On balance, the evidence suggests…' is the classic opening.\n- **Finish**: end with a final thought: a recommendation, a wider implication, or a callback to your opening image.\n\nA judgement does not have to be all-or-nothing. A **qualified (conditional) judgement** is often the most intelligent answer: 'Phones should be locked away during lessons but allowed at lunchtime', or 'Zoos deserve to survive, but only those that put conservation and welfare first.'\n\nThree conclusion traps:\n\n- **Sitting on the fence**: 'There are good points on both sides, so it is up to the reader.' This avoids the task. 'Discuss' still expects a judgement.\n- **New arguments**: introducing a fresh point now means it has not been weighed against anything.\n- **Repetition**: copying sentences from the introduction word for word.\n\nYour judgement should feel *earned*: the reader should be able to trace it back to the reasoning in your paragraphs.",
      passage: {
        id: "model-conclusion-uniform",
        title: "Model conclusion: Should school uniform be compulsory?",
        source: "Original model conclusion written for this app",
        text:
          "Both sides of the uniform debate are driven by the same concern: fairness. Opponents are right that uniform can be costly and that it restricts self-expression at an age when identity matters enormously. Yet the alternative, a daily contest of brands and labels, may impose a far heavier cost on families who cannot keep up. On balance, a simple, affordable uniform seems the fairer choice, provided schools keep prices low and allow some freedom in details such as hairstyles and accessories. A uniform should make pupils equal, not identical.",
        note:
          "Weigh: one sentence concedes the opponents' best points. Judge: 'On balance… provided…' gives a qualified judgement with a reason. Finish: a memorable final line built on a contrast (equal/identical).",
      },
      keyPoints: [
        "WJF: Weigh the strongest points, Judge with a reason, Finish with a final thought.",
        "'On balance' signals a reasoned judgement.",
        "A qualified judgement ('yes, provided that…') is often the most convincing.",
        "No fence-sitting, no new arguments, no copied introduction.",
      ],
      thinkDeeper:
        "Is a qualified judgement ('yes, but only if…') a clever answer or a polite way of sitting on the fence? What makes the difference?",
    },
    {
      id: "planning-novel",
      heading: "Planning under pressure and discursive essays on the novel",
      body:
        "**Planning under time pressure.** In a 45-minute task, spend about 5–8 minutes planning, around 30 minutes writing and the last 5 minutes checking. A quick plan:\n\n- Draw a **T-chart**: 'For' on one side, 'Against' on the other. Brainstorm fast.\n- Pick the **best three** on each side (or three aspects for an alternating structure).\n- Decide your **judgement now**, so every paragraph leads towards it.\n- Number the points in order, saving the side you agree with for second.\n- Jot one piece of evidence or one quotation beside each point.\n\nThis plan feels like lost time, but it is what stops essays from drifting, repeating or running out of ideas halfway through.\n\n**Discursive essays on the class novel.** In Term 3 you may be asked a discursive question about the novel itself, such as 'Is Scrooge's change in *A Christmas Carol* believable?' or 'Who is most to blame for…?'. The same rules apply, with one difference: your evidence is **quotations and events from the text**, analysed briefly, rather than statistics.\n\nFor 'Is Scrooge's change believable?' a balanced plan might be:\n\n- **Not believable**: he changes in a single night; his joy in Stave Five is wildly exaggerated ('I am as light as a feather'); he may be acting out of fear of his own lonely death rather than true kindness.\n- **Believable**: the change is gradual across the staves; Stave Two shows the lonely boy and the lost love (Belle) that hardened him, so his coldness has causes that can be undone; he shows small signs of softening, such as wishing he had given something to a boy who sang a carol at his door.\n- **Weighing the genre**: Dickens subtitled the book 'A Ghost Story of Christmas'. It is a moral fable meant to inspire readers to change, so perhaps 'believable' should be judged by fable standards, not by realism.\n\nA strong judgement might be: 'The speed of the change strains realism, but Dickens prepares it carefully, so within the world of a ghostly fable it is earned.'",
      passage: {
        id: "carol-stave-one",
        title: "A Christmas Carol: Scrooge introduced",
        source: "Charles Dickens, A Christmas Carol (1843), Stave One",
        text:
          "Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster.",
        note:
          "A list of seven harsh -ing adjectives, the simile 'hard and sharp as flint' and the image of an oyster: hard on the outside, perhaps with something precious hidden within. That last image is useful evidence for the 'believable' side.",
      },
      diagram: `<svg viewBox="0 0 360 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A 45-minute timeline: about 7 minutes planning, 33 minutes writing and 5 minutes checking"><text x="180" y="20" font-size="13" font-weight="bold" text-anchor="middle" fill="#78350f">A 45-minute discursive essay</text><rect x="20" y="40" width="56" height="36" fill="#fde68a" stroke="#b45309"/><rect x="76" y="40" width="224" height="36" fill="#bfdbfe" stroke="#1d4ed8"/><rect x="300" y="40" width="40" height="36" fill="#bbf7d0" stroke="#15803d"/><text x="48" y="62" font-size="11" text-anchor="middle" fill="#78350f">Plan</text><text x="188" y="62" font-size="12" text-anchor="middle" fill="#1e3a8a">Write: intro, 4 or 5 paragraphs, conclusion</text><text x="320" y="62" font-size="11" text-anchor="middle" fill="#14532d">Check</text><text x="48" y="95" font-size="11" text-anchor="middle" fill="#374151">5 to 8 min</text><text x="188" y="95" font-size="11" text-anchor="middle" fill="#374151">about 30 min</text><text x="320" y="95" font-size="11" text-anchor="middle" fill="#374151">5 min</text><text x="20" y="112" font-size="11" fill="#6b7280">0</text><text x="332" y="112" font-size="11" fill="#6b7280">45</text></svg>`,
      diagramCaption: "Plan first, write steadily, and always leave time to check.",
      keyPoints: [
        "Spend 5–8 minutes on a T-chart plan; decide your judgement before writing.",
        "For novel questions, evidence = short quotations and key events, briefly analysed.",
        "Consider genre and writer's purpose when judging 'believability'.",
        "Leave 5 minutes to check spelling, punctuation and discourse markers.",
      ],
      thinkDeeper:
        "Dickens wanted readers in 1843 to change *their own* behaviour towards the poor. Does a character's change need to be realistic to achieve that purpose, or might an exaggerated change work better? Use this to sharpen your judgement on Scrooge.",
      discovery: {
        problem:
          "You have 45 minutes for 'Is Scrooge's change believable?'. Before reading on, spend two minutes listing everything you can remember that suggests the change is sudden, and everything that suggests it was prepared for. Which list is longer?",
        idea:
          "Most students find the 'prepared for' list surprisingly long: the lonely schoolboy, Fezziwig's kindness, Belle leaving him, his concern for Tiny Tim, his fear at his own grave. That is the point of planning: your judgement should come *out* of the evidence, not be fixed before you look.",
      },
    },
  ],

  passages: [
    {
      id: "model-essay-phones",
      title: "Model essay: Should mobile phones be banned in schools?",
      source: "Original model discursive essay written for this app",
      text:
        "Walk into almost any secondary school at lunchtime and you will see the same scene: rows of pupils sitting together, each staring silently at a small glowing screen. For some, this picture proves that phones have taken over childhood and should be banned from schools altogether. For others, phones are simply the modern equivalent of a notebook, a dictionary and a calculator combined. Before deciding whether a ban is the right answer, it is worth examining the arguments on both sides.\n\nThe most common argument for a ban is that phones damage concentration. A single notification can pull a pupil's attention away from a lesson, and many teachers report that it takes several minutes to refocus afterwards. Furthermore, supporters of a ban argue that phones make bullying harder to escape, since cruel messages and photographs can follow a pupil from the classroom to the corridor and home again. If school is meant to be a place of focus and safety, they maintain, phones have no place in it.\n\nHowever, opponents of a ban point out that phones can be powerful learning tools. A pupil can check a fact, photograph homework instructions or record a science experiment in seconds. They also argue that many parents value being able to contact their children on the journey to and from school. Banning phones outright, critics suggest, treats the device as the problem rather than the way it is used.\n\nAdmittedly, the learning benefits are real. Nevertheless, most of them could be achieved with school laptops or tablets that are controlled by teachers, whereas the distraction and bullying caused by personal phones are much harder to manage. Consequently, many schools have chosen a middle path: phones are allowed on the journey but must be switched off and stored away during the school day.\n\nOn balance, a complete ban on bringing phones to school seems unnecessary, but a ban on using them during the school day is justified. It protects concentration and wellbeing while still allowing parents to keep in touch. The lunchtime scene of silent, glowing screens may then give way to something older and noisier: conversation.",
      note:
        "Notice the CID introduction, the block-then-weighing structure, the 'Admittedly… Nevertheless… Consequently…' paragraph and the qualified judgement that calls back to the opening scene.",
    },
    {
      id: "carol-stave-one-full",
      title: "A Christmas Carol: Scrooge before",
      source: "Charles Dickens, A Christmas Carol (1843), Stave One",
      text:
        "Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster. The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait; made his eyes red, his thin lips blue; and spoke out shrewdly in his grating voice.",
      note:
        "Useful for 'Is Scrooge's change believable?': the coldness is described as being 'within him', which could suggest it is part of his nature (hard to change) or an inner state that can thaw.",
    },
    {
      id: "carol-stave-five",
      title: "A Christmas Carol: Scrooge after",
      source: "Charles Dickens, A Christmas Carol (1843), Stave Five",
      text:
        "Scrooge was better than his word. He did it all, and infinitely more; and to Tiny Tim, who did not die, he was a second father. He became as good a friend, as good a master, and as good a man, as the good old city knew, or any other good old city, town, or borough, in the good old world.",
      note:
        "The repetition of 'good' and the escalating list ('city, town, or borough… world') are deliberately exaggerated, which suits a fable's happy ending but could be used to argue that the change is not realistic.",
    },
    {
      id: "source-pack-four-day",
      title: "Source pack: a four-day school week",
      source: "Original practice source pack written for this app (Sources A to C are invented and labelled as such)",
      text:
        "Source A (hypothetical survey, invented for practice): In an imaginary survey of 500 pupils at one school, 78% said they would prefer a four-day week, and 41% said they would use the extra day mainly to rest.\n\nSource B (invented quotation from an imaginary head teacher): 'Stretching five days of lessons into four would leave our youngest pupils exhausted by mid-afternoon.'\n\nSource C (invented parent's anecdote): 'My partner and I both work on Fridays. Who is supposed to look after our eight-year-old?'\n\nSource D (real background): Some school districts in the United States, many of them rural, have moved to a four-day week, often citing savings on transport and heating and the hope of attracting teachers.",
      note:
        "Use Sources A–C only as clearly labelled hypothetical evidence. Ask of each one: who, how many, how reliable?",
    },
  ],

  quoteBank: [
    {
      quote: "It could be argued that homework teaches independence, yet the evidence for younger pupils is less clear.",
      source: "Model sentence (impersonal construction + hedging)",
      analysis:
        "'It could be argued' presents a view without the writer claiming it as their own, and 'less clear' hedges honestly. The sentence weighs as it goes, which is exactly what discursive writing should do.",
      themes: ["hedging", "balance"],
    },
    {
      quote: "Admittedly, uniforms cost money; however, the daily pressure to wear the latest brands may cost families far more.",
      source: "Model sentence (concede and counter)",
      analysis:
        "The concession ('Admittedly') shows fairness to the other side; the semicolon and 'however' pivot to a rebuttal that shows the counter-argument is outweighed rather than simply denied.",
      themes: ["rebuttal", "discourse markers"],
    },
    {
      quote: "On balance, the case for well-run zoos is stronger than the case for closing them all.",
      source: "Model sentence (conclusion judgement)",
      analysis:
        "'On balance' signals weighing, and the comparative 'stronger than' makes the judgement explicit. The qualifier 'well-run' makes it a nuanced, conditional judgement rather than a blanket one.",
      themes: ["conclusion", "judgement"],
    },
    {
      quote: "Supporters see modern zoos as arks; critics see them as prisons, however well decorated.",
      source: "Model sentence (introduction contrast)",
      analysis:
        "Two contrasting metaphors (ark/prison) sum up the debate in a memorable way, and the semicolon balances the two halves so neither side dominates. Ideal for the 'Issue' step of an introduction.",
      themes: ["introduction", "balance"],
    },
    {
      quote: "A uniform should make pupils equal, not identical.",
      source: "Model final line (conclusion)",
      analysis:
        "A short antithesis (equal/identical) that captures a qualified judgement: yes to uniform's fairness, no to crushing individuality. Short final sentences give a conclusion a confident close.",
      themes: ["conclusion", "style"],
    },
    {
      quote: "Rather than banning phones outright, schools could require them to be switched off and stored during lessons.",
      source: "Model sentence (rebuttal by alternative solution)",
      analysis:
        "Instead of denying the problem of distraction, this offers a better solution that keeps the benefits. Offering a middle path is one of the most persuasive ways to rebut.",
      themes: ["rebuttal", "solution"],
    },
    {
      quote: "I disapprove of what you say, but I will defend to the death your right to say it.",
      source: "Evelyn Beatrice Hall, The Friends of Voltaire (1906), summing up Voltaire's attitude",
      analysis:
        "Often wrongly attributed to Voltaire himself, which is a lesson in checking the source of any quotation you use as evidence. Its spirit (respecting a view you disagree with) is the spirit of discursive writing.",
      themes: ["fairness", "checking sources"],
    },
    {
      quote: "solitary as an oyster",
      source: "Narrator describing Scrooge, A Christmas Carol, Stave One",
      analysis:
        "The simile presents Scrooge as shut away and hard-shelled. In a discursive essay on his change, it can support both sides: his hardness seems natural, yet an oyster can hold a pearl, hinting at hidden goodness that the ghosts unlock.",
      themes: ["Scrooge's change", "isolation"],
    },
    {
      quote: "If they would rather die, they had better do it, and decrease the surplus population.",
      source: "Scrooge to the gentlemen collecting for charity, A Christmas Carol, Stave One",
      analysis:
        "Scrooge's cold, economic language treats poor people as a statistic. The Ghost of Christmas Present later throws these exact words back at him in Stave Three, so evidence of his shame there supports the view that his change is prepared for.",
      themes: ["Scrooge's change", "poverty"],
    },
    {
      quote: "I will honour Christmas in my heart, and try to keep it all the year.",
      source: "Scrooge to the Ghost of Christmas Yet to Come, A Christmas Carol, Stave Four",
      analysis:
        "A promise made in terror at his own grave. Evidence for a sceptical reading (he changes out of fear for himself) but also for a sincere one: 'try' is modest and realistic, not a boast.",
      themes: ["Scrooge's change", "redemption"],
    },
    {
      quote: "I am as light as a feather, I am as happy as an angel, I am as merry as a school-boy.",
      source: "Scrooge on Christmas morning, A Christmas Carol, Stave Five",
      analysis:
        "Three similes in a breathless list show Scrooge's joy. Critics of the change's believability point to this exaggeration; others argue the childlike image ('school-boy') shows him recovering the lost boy we met in Stave Two.",
      themes: ["Scrooge's change", "joy"],
    },
    {
      quote: "He became as good a friend, as good a master, and as good a man, as the good old city knew",
      source: "Narrator, A Christmas Carol, Stave Five",
      analysis:
        "The repeated 'good' and the rising list (friend, master, man) give the ending the tone of a fairy tale. Useful evidence that Dickens is writing a moral fable, which matters when judging how 'realistic' the change needs to be.",
      themes: ["Scrooge's change", "genre"],
    },
  ],

  modelWriting: [
    {
      title: "Model introduction: Should homework be abolished?",
      task: "Write the introduction to a discursive essay: 'Should homework be abolished?'",
      text:
        "At half past nine on a school night, in kitchens across the country, the same quiet battle is fought: a tired pupil, an unfinished worksheet and a parent wondering whether any of it is worth the tears. Homework has been part of school life for generations, but it has rarely been so fiercely questioned. Its defenders argue that it builds independence and turns classroom learning into lasting knowledge; its critics reply that it eats into rest, play and family time, and that it favours pupils with quiet rooms and helpful adults at home. Whether homework should be abolished, reformed or left as it is depends on weighing these claims carefully.",
      annotations: [
        "Context: a vivid, relatable scene ('half past nine on a school night') instead of 'In this essay I will…'.",
        "Issue: both sides are named in a balanced sentence divided by a semicolon.",
        "Direction: the final sentence offers three possible outcomes (abolished, reformed, left) and promises weighing, without giving a verdict.",
        "Formal register throughout, with precise verbs: 'defenders argue', 'critics reply'.",
      ],
    },
    {
      title: "Model alternating paragraph: social media age limits",
      task: "Write one body paragraph for 'Should there be a minimum age of 16 for social media?'",
      text:
        "The most powerful argument for a higher age limit concerns wellbeing. Many parents and doctors worry that endless scrolling, comparison with filtered images and exposure to online cruelty can harm young people's mental health, and that a thirteen-year-old is less equipped than a sixteen-year-old to manage these pressures. Conversely, opponents of an age limit argue that social media is now where friendships, clubs and even school notices live, so excluding younger teenagers could leave them isolated. Admittedly, cutting young people off entirely carries real costs. However, those costs might be reduced by allowing messaging apps while delaying the endless-scroll platforms that cause the most concern. Consequently, the wellbeing argument seems stronger, provided any limit is targeted rather than total.",
      annotations: [
        "Alternating structure: point (wellbeing risk) and counterpoint (isolation) on the same aspect.",
        "Hedging: 'many', 'can harm', 'might be reduced', 'seems'.",
        "Discourse markers carry the logic: Conversely → Admittedly → However → Consequently.",
        "Mini-judgement at the end of the paragraph, qualified with 'provided'.",
        "No invented statistics: the paragraph relies on reasoning and clearly attributed general views.",
      ],
    },
    {
      title: "Model conclusion: Should schools move to a four-day week?",
      task: "Write the conclusion to a discursive essay on a four-day school week.",
      text:
        "A four-day week is an appealing idea, and it is easy to see why so many pupils would vote for it. The promise of more rest and lower running costs is real. However, the arguments against it are heavier: longer days would tire the youngest pupils most, and the families least able to pay for childcare would carry the burden of the fifth day. On balance, the evidence suggests that schools should not adopt a four-day week for younger pupils, although a trial for older students, who can study independently, might be worth considering. Sometimes the best reform is not a bigger weekend, but a better-planned week.",
      annotations: [
        "Weigh: concedes the strongest 'for' points first.",
        "Judge: 'On balance, the evidence suggests…' followed by a reason (who carries the burden).",
        "Qualified judgement: 'not for younger pupils… a trial for older students'.",
        "Finish: a memorable closing contrast (bigger weekend / better-planned week). No new arguments.",
      ],
    },
    {
      title: "Model novel paragraph: Is Scrooge's change believable?",
      task: "Write one discursive paragraph on 'Is Scrooge's change in A Christmas Carol believable?'",
      text:
        "Some readers find Scrooge's transformation too sudden to believe, since a man described in Stave One as 'solitary as an oyster' becomes, within a single night, 'as merry as a school-boy'. The comic exaggeration of his joy in Stave Five, with its tumbling similes, seems to belong to a fairy tale rather than to real life. Nevertheless, Dickens prepares the change carefully. The oyster image itself hints that something precious may be hidden inside the hard shell, and Stave Two reveals the lonely, neglected boy and the lost love that made Scrooge cold. Because the reader sees the causes of his coldness, the reader can also believe those causes might be undone. The change is therefore not realistic in its speed, but it is psychologically prepared, which is exactly what a moral fable requires.",
      annotations: [
        "Opens with the counter-view ('Some readers…') at its strongest, with embedded quotations.",
        "'Nevertheless' pivots to the writer's side, which comes second so it leads to the judgement.",
        "Analysis of the oyster simile turns the opponents' own evidence into support.",
        "Considers genre (moral fable) to reach a nuanced, qualified judgement.",
      ],
    },
  ],

  mnemonics: [
    {
      topic: "What goes in a discursive introduction",
      device: "CID: Context, Issue, Direction (and like a good detective, the CID keeps the verdict secret until the end)",
      explanation:
        "Context: why the topic matters now. Issue: why it is debated, naming both sides. Direction: signpost that you will weigh them. The detective joke reminds you not to reveal your judgement in the introduction.",
    },
    {
      topic: "Building a body paragraph",
      device: "PEER: Point, Evidence, Explain, Reply",
      explanation:
        "Make a Point, support it with Evidence, Explain what the evidence shows, then Reply to the opposing view (a counter-argument or rebuttal). The 'Reply' is what makes PEEL discursive.",
    },
    {
      topic: "Writing the conclusion",
      device: "WJF: Weigh it, Judge it, Finish it",
      explanation:
        "Weigh the strongest point on each side, give a reasoned Judgement ('On balance…'), then Finish with a final thought, recommendation or callback. No new arguments.",
    },
    {
      topic: "Hedging",
      device: "Could, may, might: keep your claims light (until the proof is tight)",
      explanation:
        "Modal verbs (could, may, might) and qualifiers (some, many, often) soften claims you cannot fully prove. Only use 'will' or 'all' when the evidence is overwhelming.",
    },
  ],

  examMistakes: [
    "Giving your final opinion in the introduction, so the 'balanced' paragraphs that follow look insincere.",
    "Writing a one-sided persuasive piece (emotive language, rhetorical questions) when the task says 'discuss'.",
    "Sitting on the fence in the conclusion ('it is up to the reader') instead of reaching a reasoned judgement.",
    "Introducing a brand-new argument in the conclusion that has not been weighed anywhere else.",
    "Presenting invented statistics or quotations as if they were real research instead of labelling them as hypothetical.",
    "Dropping in evidence without explaining what it shows ('This suggests that…').",
    "Using 'however' with only a comma to join two sentences, creating a comma splice.",
    "Slipping into informal register: contractions, slang ('loads of', 'kids') and chatty asides.",
  ],

  misconceptions: [
    {
      wrong: "Discursive writing means you must never give your own opinion.",
      right: "You hold your view back until the conclusion, but you must then give a clear, reasoned judgement. 'Discuss' still expects a verdict.",
    },
    {
      wrong: "Balance means giving exactly the same number of words or points to each side.",
      right: "Balance means treating each side fairly and at its strongest. If the evidence is stronger on one side, your judgement can say so; artificial equality can mislead.",
    },
    {
      wrong: "Discursive, argumentative and persuasive writing are just different names for the same thing.",
      right: "Persuasive writing pushes one view with emotive techniques; argumentative takes one side from the start using logic; discursive explores several sides fairly before judging.",
    },
    {
      wrong: "A rebuttal means proving the other side completely wrong.",
      right: "A rebuttal shows why an opposing point is weaker, limited or outweighed. Partly conceding ('Admittedly…') and then answering is often more convincing than flat denial.",
    },
    {
      wrong: "The more discourse markers you use, the higher your mark.",
      right: "Markers earn credit only when they are precise and match the logic. Starting every sentence with one makes writing clunky; 'consequently' must introduce a real consequence.",
    },
    {
      wrong: "Any evidence is good evidence, so an anecdote is as strong as a large study.",
      right: "Evidence varies in strength. One personal story is vivid but cannot prove a pattern; large, recent, independent studies and relevant experts carry more weight.",
    },
  ],

  expertDebates: [
    {
      question: "Should a discursive essay reveal the writer's view at all?",
      detail:
        "Some teachers and exam boards expect a firm judgement in the conclusion; others reward an essay that simply maps the debate clearly. Most top-band mark schemes in UK schools favour a reasoned, earned judgement, but they also reward a qualified one ('yes, provided that…'). The skill is to make sure your judgement grows out of your weighing rather than being bolted on.",
    },
    {
      question: "Is it acceptable to invent evidence in a timed essay?",
      detail:
        "Some teachers encourage pupils to invent plausible statistics to practise using evidence; others argue that this trains a habit of fabrication that would be dishonest in real life. A sensible middle position is that invented evidence must be clearly labelled as hypothetical ('imagine a survey that found…'), never attached to a real person or organisation, and never presented as fact.",
    },
    {
      question: "Is 'balance' always a virtue? The problem of false balance",
      detail:
        "Journalists debate 'false balance': giving equal time to two sides when the evidence overwhelmingly supports one, which can make a settled question look open. A discursive writer must therefore be fair without pretending every view is equally well supported. Fairness means representing the other side accurately, not inflating it.",
    },
  ],

  realWorld: [
    {
      title: "Parliament and select committees",
      detail:
        "Before a new law is passed, MPs debate it and committees take evidence from experts on both sides, then publish reports that weigh the arguments and make recommendations: discursive writing with real consequences.",
      emoji: "🏛️",
    },
    {
      title: "Newspaper 'the big debate' columns",
      detail:
        "Many newspapers run features that set out arguments for and against an issue (school phone bans, four-day weeks, AI) before a columnist gives a verdict. Spot the discourse markers next time you read one.",
      emoji: "📰",
    },
    {
      title: "Wikipedia's neutral point of view",
      detail:
        "Wikipedia requires articles to be written from a 'neutral point of view', representing significant views fairly and in proportion to the evidence. Editors argue constantly about what counts as balanced.",
      emoji: "🌐",
    },
    {
      title: "Social media age limits",
      detail:
        "In 2024 Australia passed a law setting a minimum age of 16 for many social media accounts. Governments, parents and tech companies around the world are still debating whether that is the right answer: a live discursive question.",
      emoji: "📱",
    },
    {
      title: "Judges and juries",
      detail:
        "In a courtroom, a judge sums up the evidence for both prosecution and defence so that the jury can weigh it and reach a verdict. That is introduction, balanced body and judgement in one.",
      emoji: "⚖️",
    },
    {
      title: "University and job applications",
      detail:
        "Interview questions such as 'What are the pros and cons of…?' test exactly the skill of weighing both sides calmly and reaching a reasoned view.",
      emoji: "🎓",
    },
  ],

  flashcards: [
    { front: "Discursive writing", back: "Writing that explores several sides of an issue fairly, in a formal tone, and reaches a reasoned judgement in the conclusion." },
    { front: "Persuasive vs argumentative", back: "Persuasive pushes one view using emotive techniques; argumentative takes one clear side from the start and defends it mainly with logic and evidence." },
    { front: "Block structure", back: "All arguments for, then a turning point, then all arguments against (or vice versa), then a conclusion." },
    { front: "Alternating structure", back: "Point–counterpoint: each paragraph takes one aspect and sets the two sides against each other within it." },
    { front: "CID", back: "Introduction checklist: Context, Issue (why debated), Direction (signpost the weighing). Keep the verdict secret." },
    { front: "Impersonal construction", back: "A phrase that keeps the writer in the background, e.g. 'It could be argued that…', 'It is often claimed that…'." },
    { front: "Hedging", back: "Cautious language that claims only what can be supported: may, might, could, perhaps, arguably, some, many." },
    { front: "Formal register", back: "A serious level of language: no slang, no contractions, no chatty asides; precise vocabulary." },
    { front: "Conversely", back: "A contrast marker meaning 'looking at it the opposite way'; used to introduce the other side's view." },
    { front: "Nevertheless", back: "A marker meaning 'despite what has just been said'; often follows a concession." },
    { front: "Counter-argument", back: "A point that opposes the view being discussed." },
    { front: "Rebuttal", back: "A reasoned reply to a counter-argument, showing it is weaker, limited or outweighed." },
    { front: "Straw man", back: "A weak, exaggerated version of an opposing view set up so it can be knocked down easily. Avoid it; present the other side at its strongest." },
    { front: "Qualified judgement", back: "A conclusion with conditions, e.g. 'Phones should be banned in lessons but allowed at lunch.'" },
    { front: "WJF", back: "Conclusion checklist: Weigh it, Judge it, Finish it." },
    { front: "'solitary as an oyster'", back: "Narrator on Scrooge, A Christmas Carol, Stave One. A simile of a hard, closed man, but an oyster may hide a pearl." },
  ],

  mustKnow: [
    "Can you tell discursive, persuasive and argumentative writing apart from a task or an extract?",
    "Can you plan a block structure and an alternating structure for the same question?",
    "Can you write an introduction with context, issue and direction that does not reveal your verdict?",
    "Can you rewrite an informal or biased sentence in a formal, balanced register using hedging?",
    "Can you choose precise discourse markers (however, conversely, nevertheless, consequently, on balance) and punctuate them correctly?",
    "Can you use and explain four kinds of evidence, labelling any invented evidence as hypothetical?",
    "Can you write a concede-then-counter rebuttal ('Admittedly… However… Therefore…')?",
    "Can you write a conclusion that weighs, reaches a qualified judgement and ends with a final thought?",
    "Can you plan a 45-minute essay in under 8 minutes using a T-chart?",
    "Can you write a discursive paragraph on the class novel using embedded quotations as evidence?",
  ],

  videos: [
    {
      title: "How to write a discursive essay",
      channel: "BBC Bitesize",
      url: "https://www.youtube.com/results?search_query=bbc+bitesize+discursive+essay",
    },
    {
      title: "Writing to argue: balanced viewpoint essays",
      channel: "Mr Bruff",
      url: "https://www.youtube.com/results?search_query=mr+bruff+writing+to+argue+viewpoint",
    },
    {
      title: "Discourse markers and structuring an argument",
      channel: "Mr Salles Teaches English",
      url: "https://www.youtube.com/results?search_query=mr+salles+argument+writing+discourse+markers",
    },
    {
      title: "A Christmas Carol: Scrooge's transformation",
      channel: "Stacey Reay",
      url: "https://www.youtube.com/results?search_query=stacey+reay+a+christmas+carol+scrooge+transformation",
    },
  ],

  quiz: {
    mcq: quizMcq,
    qa: quizQa,
  },

  questionBank: {
    mcqPapers: [
      { id: "dis-mcq-p1", title: "MCQ Paper 1", questions: mcqP1 },
      { id: "dis-mcq-p2", title: "MCQ Paper 2", questions: mcqP2 },
      { id: "dis-mcq-p3", title: "MCQ Paper 3", passage: zooEssay, questions: mcqP3 },
      { id: "dis-mcq-p4", title: "MCQ Paper 4", questions: mcqP4 },
    ],
    qaPapers: [
      { id: "dis-qa-p1", title: "Written Paper 1", questions: qaP1 },
      { id: "dis-qa-p2", title: "Written Paper 2", passage: fourDayPack, questions: qaP2 },
      { id: "dis-qa-p3", title: "Written Paper 3", questions: qaP3 },
      { id: "dis-qa-p4", title: "Written Paper 4", passage: scroogeExtracts, questions: qaP4 },
    ],
  },
};
