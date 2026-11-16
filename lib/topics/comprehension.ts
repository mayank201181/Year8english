import type { Topic, Passage, Paper, MCQ, QA } from "../types";

// ---------------------------------------------------------------------------
// Passages (public-domain extracts quoted accurately, plus ORIGINAL texts)
// ---------------------------------------------------------------------------

const scroogePassage: Passage = {
  id: "scrooge",
  title: "Meet Ebenezer Scrooge",
  source: "Charles Dickens, A Christmas Carol (1843), Stave One",
  text:
    "Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster. The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait; made his eyes red, his thin lips blue; and spoke out shrewdly in his grating voice. A frosty rime was on his head, and on his eyebrows, and his wiry chin. He carried his own low temperature always about with him; he iced his office in the dog-days; and didn't thaw it one degree at Christmas.\n\nExternal heat and cold had little influence on Scrooge. No warmth could warm, no wintry weather chill him. No wind that blew was bitterer than he, no falling snow was more intent upon its purpose, no pelting rain less open to entreaty. Foul weather didn't know where to have him. The heaviest rain, and snow, and hail, and sleet, could boast of the advantage over him in only one respect. They often 'came down' handsomely, and Scrooge never did.\n\nNobody ever stopped him in the street to say, with gladsome looks, 'My dear Scrooge, how are you? When will you come to see me?' No beggars implored him to bestow a trifle, no children asked him what it was o'clock, no man or woman ever once in all his life inquired the way to such and such a place, of Scrooge. Even the blind men's dogs appeared to know him; and when they saw him coming on, would tug their owners into doorways and up courts; and then would wag their tails as though they said, 'No eye at all is better than an evil eye, dark master!'",
  note:
    "Glossary: tight-fisted hand at the grindstone = a mean, relentless worker who makes others work hard; covetous = greedily wanting things; flint = very hard stone that sparks when struck with steel; gait = way of walking; rime = frost; dog-days = the hottest days of summer; entreaty = pleading; 'came down' handsomely = a pun: rain 'comes down' heavily, and a generous person 'comes down' with money; trifle = a small amount of money.",
};

const fireP: Passage = {
  id: "to-build-a-fire",
  title: "To Build a Fire (opening)",
  source: "Jack London, 'To Build a Fire' (1908); London's original American spelling has been changed to British spelling (e.g. 'grey', 'little-travelled'). [...] marks words left out.",
  text:
    "Day had broken cold and grey, exceedingly cold and grey, when the man turned aside from the main Yukon trail and climbed the high earth-bank, where a dim and little-travelled trail led eastward through the fat spruce timberland. It was a steep bank, and he paused for breath at the top, excusing the act to himself by looking at his watch. It was nine o'clock. There was no sun nor hint of sun, though there was not a cloud in the sky. It was a clear day, and yet there seemed an intangible pall over the face of things, a subtle gloom that made the day dark, and that was due to the absence of sun. This fact did not worry the man. He was used to the lack of sun. It had been days since he had seen the sun, and he knew that a few more days must pass before that cheerful orb, due south, would just peep above the sky-line and dip immediately from view.\n\n[...]\n\nBut all this — the mysterious, far-reaching hair-line trail, the absence of sun from the sky, the tremendous cold, and the strangeness and weirdness of it all — made no impression on the man. It was not because he was long used to it. He was a newcomer in the land, a chechaquo, and this was his first winter. The trouble with him was that he was without imagination. He was quick and alert in the things of life, but only in the things, and not in the significances. Fifty degrees below zero meant eighty-odd degrees of frost. Such fact impressed him as being cold and uncomfortable, and that was all.",
  note:
    "Context: the Yukon is a region of north-west Canada, famous for the Klondike gold rush of the 1890s. Glossary: intangible = cannot be touched; pall = a heavy dark covering (originally the cloth laid over a coffin); orb = sphere, here the sun; chechaquo = a newcomer (Yukon slang word); fifty degrees below zero is in Fahrenheit, which is about −46 °C.",
};

const scottPassage: Passage = {
  id: "scott-journal",
  title: "Captain Scott's Last Journal",
  source: "Captain Robert Falcon Scott, journal of the Terra Nova expedition (1912). [...] marks words left out.",
  text:
    "Wednesday, January 17 [at the South Pole]\nThe Pole. Yes, but under very different circumstances from those expected. [...] Great God! this is an awful place and terrible enough for us to have laboured to it without the reward of priority. [...] Now for the run home and a desperate struggle. I wonder if we can do it.\n\nFriday, March 16 or Saturday, 17\nLost track of dates, but think the last correct. Tragedy all along the line. [...] Should this be found I want these facts recorded. [...] He [Oates] slept through the night before last, hoping not to wake; but he woke in the morning — yesterday. It was blowing a blizzard. He said, 'I am just going outside and may be some time.' He went out into the blizzard and we have not seen him since. [...] We knew that poor Oates was walking to his death, but though we tried to dissuade him, we knew it was the act of a brave man and an English gentleman.\n\nThursday, March 29\nSince the 21st we have had a continuous gale from W.S.W. and S.W. We had fuel to make two cups of tea apiece and bare food for two days on the 20th. Every day we have been ready to start for our depot 11 miles away, but outside the door of the tent it remains a scene of whirling drift. I do not think we can hope for any better things now. We shall stick it out to the end, but we are getting weaker, of course, and the end cannot be far.\nIt seems a pity, but I do not think I can write more.\nR. SCOTT.\nFor God's sake look after our people.\n\nFrom the 'Message to the Public'\nHad we lived, I should have had a tale to tell of the hardihood, endurance, and courage of my companions which would have stirred the heart of every Englishman. These rough notes and our dead bodies must tell the tale.",
  note:
    "Context: Scott's five-man team reached the South Pole on 17 January 1912, only to find that Roald Amundsen's Norwegian team had got there first, on 14 December 1911. All five men died on the return journey. Captain Lawrence Oates, suffering from severe frostbite, walked out of the tent into a blizzard so as not to slow his companions down. A search party found the tent, the bodies and this journal in November 1912. Glossary: priority = being first; depot = a store of food and fuel left on the route; dissuade = persuade not to; drift = blown snow; hardihood = toughness.",
};

const ottersPassage: Passage = {
  id: "otters",
  title: "The Otters Who Came Back",
  source: "Original feature article written for this app",
  text:
    "THE OTTERS WHO CAME BACK\nSingapore's most famous family doesn't pay rent, doesn't queue and has never once said thank you. It is also the best news our city has had in years.\n\nIf you have walked along the Singapore River at dawn, you may have seen them: a sleek, whiskered gang of smooth-coated otters, tumbling over each other on the steps beneath the office towers. Joggers stop mid-stride. Office workers lower their phones — then raise them again to film. For a few minutes, one of the busiest financial districts in Asia belongs to a family of fish-eaters.\n\nIt was not always like this. Fifty years ago, the Singapore River was little better than an open sewer. Waste from farms, factories and street stalls poured into it, and almost nothing could live there. In 1977 the government launched a ten-year clean-up, moving pig farms, relocating hawkers and dredging the riverbed. It worked. The water grew cleaner, the fish returned — and in the late 1990s, so did the otters.\n\nToday Singapore is home to more than a hundred wild smooth-coated otters, living in rivers, reservoirs and along the coast. Some people adore them. Others are less charmed: otters have raided private koi ponds and, on rare occasions, nipped people who came too close.\n\nBut to complain about the otters is to miss the point. They are not pests; they are proof. A predator near the top of the food chain can only survive where there are plenty of fish, and fish can only survive in clean water. Every otter you see is a living certificate that says our waterways are healthy again.\n\nSo next time you spot them, put down the phone, keep your distance and simply watch. You are looking at one of the greatest comeback stories this island has ever told.",
  note:
    "A feature article mixes facts (dates, numbers, events) with the writer's opinions and persuasive techniques. Smooth-coated otters are a real species that returned to Singapore's waterways after the 1977–1987 river clean-up.",
};

const monsoonPassage: Passage = {
  id: "monsoon",
  title: "Monsoon",
  source: "Original fiction extract written for this app",
  text:
    "The sky over Toa Payoh had been holding its breath all afternoon.\n\nMei sat on the low wall of the void deck, swinging her legs and pretending not to watch the clouds. They were stacking up behind the blocks like dirty laundry, grey on grey on purple, and the air had gone thick and sticky, as if the whole estate had been wrapped in cling film. Somewhere a radio was playing an old Hokkien song. Uncle Lim from the fourth floor shuffled past with his bird cage, glanced upward, and walked a little faster.\n\n'Rain coming,' he muttered, to nobody.\n\nMei did not move. Her mother had told her to be home by five. It was ten past. But her brother had promised to meet her here, and Wei Jie never broke a promise — at least, not until today.\n\nThen the wind arrived. It came racing across the basketball court, snatching up a plastic bag and a cloud of yellow petals and flinging them against the lift lobby. The palm trees bowed. A door slammed somewhere above. And the first drop landed on Mei's wrist: fat, warm, heavy as a coin.\n\nThen another. Then a thousand.\n\nWithin seconds the court had vanished behind a silver curtain. The noise was enormous — a roar like a crowd in a stadium, drumming on the zinc roof of the bicycle shelter, gurgling in the drains, hissing on the hot road. Mei pressed her back against the pillar. Her shoes were already soaked.\n\nThrough the curtain, a shape was running towards her.\n\nIt was not Wei Jie.",
  note:
    "Void deck = the open ground floor of a Singapore HDB block of flats, used as a shared space.",
};

const shophousePassage: Passage = {
  id: "shophouse",
  title: "Number 47",
  source: "Original fiction extract written for this app",
  text:
    "The key still stuck. Ah Ma's key had always stuck.\n\nDaniel jiggled it the way she used to — up, left, then a hard shove with the shoulder — and the old green door of number 47 groaned open. Inside, the shophouse smelled of dust and mothballs and, faintly, impossibly, of ginger.\n\nHe stood in the doorway and let his eyes adjust. The long room stretched away from him into shadow: the wooden counter, the empty glass jars, the calendar still turned to March. A gecko clicked somewhere in the rafters. Outside, the traffic on Joo Chiat Road went on as if nothing had happened.\n\nHe was seven the first time she let him behind the counter. He remembered the jars glowing like lanterns — dried plums, preserved lime, sweets wrapped in crackling paper — and Ah Ma lifting him onto the high stool so he could see over the top. 'Count properly,' she said, tapping the abacus with one bent finger, 'or the customers will cheat us and the ghosts will laugh.' He had counted properly. He had counted for her every Saturday for six years, until the Saturday he decided he was too old for it, and stayed at home with his phone instead.\n\nShe had not complained. She had simply kept a jar of preserved lime on the top shelf, just in case.\n\nDaniel crossed the room. The jar was still there.\n\nHe lifted it down, turned it in his hands, and held it up to the grey light from the street. Then he went back to the door, fought with the key — up, left, a hard shove — and locked it carefully behind him.\n\nSome things, he decided, you keep.",
  note:
    "Ah Ma = grandmother (Hokkien). Shophouse = a narrow two- or three-storey building with a shop on the ground floor and a home above; Joo Chiat in eastern Singapore is famous for them. Preserved lime = a traditional salty-sweet snack.",
};

const lightPassage: Passage = {
  id: "switch-off-the-sky",
  title: "Switch Off the Sky",
  source: "Original opinion article written for this app",
  text:
    "SWITCH OFF THE SKY\nWhen did you last see the Milky Way? If you live in Singapore, the honest answer is probably 'never'.\n\nIn 2016, scientists publishing a world atlas of night-sky brightness named Singapore the most light-polluted country on Earth. Our nights are so bright, they reported, that people's eyes never fully adjust to darkness. We have, in effect, abolished the night.\n\nOf course, light keeps us safe. Nobody wants to walk home down a pitch-black path, and nobody is suggesting we should. But there is a difference between lighting a path and lighting the sky. Every lamp that spills its glow upward, every empty office tower that blazes all night, every advertising screen shouting at an empty street at 3 a.m. is wasting electricity — and stealing something precious.\n\nThe cost is not only to stargazers. Scientists have linked artificial light at night to disrupted sleep in humans. Migrating birds, which use the night sky to navigate, can become disoriented by brightly lit buildings, and baby turtles hatching on beaches crawl towards city lights instead of the sea.\n\nThe solution is embarrassingly simple. Shield street lamps so they point down. Switch off office lights when the last worker goes home. Dim the giant screens after midnight. None of this needs a new invention; it needs only a decision.\n\nImagine it: a clear night over the city, the towers dimmed, and above them — for the first time in your life — the stars. Isn't that worth flicking a switch?",
  note:
    "The 2016 study is the 'New World Atlas of Artificial Night Sky Brightness', published in the journal Science Advances.",
};

const ubinPassage: Passage = {
  id: "pulau-ubin",
  title: "A Morning on Pulau Ubin",
  source: "Original travel writing written for this app",
  text:
    "The bumboat from Changi Point waits until it has twelve passengers, and not a moment before. There is no timetable. There is simply the boatman, his endless patience, and the slow slap of green water against the hull. Then the engine coughs into life, and for ten minutes Singapore — the Singapore of glass towers and air-conditioned malls — slides away behind us.\n\nPulau Ubin is only a short hop from the mainland, but it feels like travelling back fifty years. At the jetty, a row of bicycle-hire shops offers battered mountain bikes for a few dollars a day. I choose a red one with a basket and a bell that sounds like a disappointed duck.\n\nThe road out of the village is lined with durian and rubber trees, their trunks still scarred by old tapping marks. Wooden kampong houses sit on stilts behind flowering hedges; a dog lifts its head to inspect me, decides I am not worth the effort and goes back to sleep. Twice I have to stop for a monitor lizard crossing the road with the unhurried dignity of a retired headmaster.\n\nBy ten o'clock the heat is building and the sweat is running into my eyes, but I keep pedalling east, towards Chek Jawa. Here, where the island meets the sea, a boardwalk winds out across the mangroves. At low tide the mud below is alive: fiddler crabs waving one oversized claw, mudskippers flicking themselves from puddle to puddle, a heron standing as still as a statue.\n\nI stand there for a long time. Behind me, across the water, I can hear — just — the hum of a city of six million people. In front of me, a crab is waving at the sea.\n\nI know which one I would rather listen to.",
  note:
    "Pulau Ubin is a small island off the north-east coast of Singapore, reached by bumboat (a small motor boat) from Changi Point Ferry Terminal. Kampong = a traditional village. Chek Jawa is a wetland nature area on the island's eastern tip.",
};

// ---------------------------------------------------------------------------
// MCQ Paper 1: fiction ("Monsoon", original)
// ---------------------------------------------------------------------------

const mcqP1: Paper<MCQ> = {
  id: "cmp-mcq-p1",
  title: "MCQ Paper 1",
  passage: monsoonPassage,
  questions: [
    {
      id: "cmp-mcq-p1-q01",
      question: "By what time had Mei's mother told her to be home?",
      options: ["Four o'clock", "Five o'clock", "Ten past five", "Six o'clock"],
      answerIndex: 1,
      hint: "Scan the fourth paragraph for a time. Be careful: two times are mentioned.",
      explanation:
        "'Her mother had told her to be home by five.' The tempting distractor is 'ten past five', but that is the time it is NOW ('It was ten past'), which tells us Mei is already late. Retrieval questions reward precise reading.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-mcq-p1-q02",
      question: "Which two things does the wind snatch up?",
      options: [
        "A bird cage and a plastic bag",
        "Palm leaves and a newspaper",
        "A plastic bag and a cloud of yellow petals",
        "Yellow petals and a basketball",
      ],
      answerIndex: 2,
      hint: "Scan for the verb 'snatching'.",
      explanation:
        "'snatching up a plastic bag and a cloud of yellow petals'. The bird cage belongs to Uncle Lim and the palm trees 'bowed' rather than being snatched, so those options mix up nearby details, which is exactly the trap in retrieval questions.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-mcq-p1-q03",
      question: "'The sky over Toa Payoh had been holding its breath all afternoon.' Which technique is used here?",
      options: ["Personification", "Simile", "Alliteration", "Hyperbole"],
      answerIndex: 0,
      hint: "Can a sky really breathe?",
      explanation:
        "Giving the sky a human action ('holding its breath') is personification. It suggests tense, nervous waiting, as if the sky itself is about to burst. It is not a simile because there is no 'like' or 'as'.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p1-q04",
      question: "Uncle Lim 'glanced upward, and walked a little faster.' What can you infer from this?",
      options: [
        "He is late for his lunch",
        "He dislikes children sitting on the wall",
        "He wants Mei to follow him",
        "He reads the sky and expects a heavy storm very soon",
      ],
      answerIndex: 3,
      hint: "What does he look at, and how does he react? Then read the next line.",
      explanation:
        "He looks at the sky, speeds up and mutters 'Rain coming', so the clues add up to an experienced neighbour expecting a downpour. Nothing in the text suggests he is late or that he dislikes Mei; an inference must be built from evidence, not invented.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-mcq-p1-q05",
      question: "The clouds are 'stacking up behind the blocks like dirty laundry'. What does this simile suggest?",
      options: [
        "The clouds are bright, white and fluffy",
        "The clouds are heaped up, grubby-coloured and oppressive, and the image is homely and local",
        "The clouds are moving away quickly",
        "The weather is about to become fine and dry",
      ],
      answerIndex: 1,
      hint: "Picture a pile of dirty laundry. What colour and shape is it? Where would you see it in an HDB estate?",
      explanation:
        "Dirty laundry is piled up and greyish, so the clouds seem heavy, untidy and gloomy. The image also fits the setting (laundry poles are everywhere in HDB estates). 'Bright, white and fluffy' ignores the word 'dirty'.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p1-q06",
      question: "The air feels 'as if the whole estate had been wrapped in cling film'. What does this suggest about the air?",
      options: [
        "It is cold and fresh",
        "It is full of noise",
        "It is clear and sparkling",
        "It is close, airless and suffocating",
      ],
      answerIndex: 3,
      hint: "What happens to air under cling film?",
      explanation:
        "Cling film seals things in and stops air moving, so the comparison suggests humid, trapped, suffocating air before the storm. 'Clear and sparkling' picks up on cling film being transparent, but that misses the main point of the comparison: being sealed in.",
      guideRef: "vocab-in-context",
    },
    {
      id: "cmp-mcq-p1-q07",
      question: "'Then another. Then a thousand.' Why does the writer put these two short sentences in a paragraph of their own?",
      options: [
        "To mirror how quickly the rain grows from one drop to a downpour, speeding up the pace",
        "To begin a flashback to Mei's childhood",
        "To slow the pace and show that Mei is bored",
        "To give factual information about rainfall",
      ],
      answerIndex: 0,
      hint: "Count: one drop, another, a thousand. What is happening to the pace?",
      explanation:
        "The minor sentences jump from one drop to 'a thousand' in a few words, so the reader feels the sudden escalation. Isolating them in a one-line paragraph makes them hit hard. They do not slow the pace; they quicken it.",
      guideRef: "structure",
    },
    {
      id: "cmp-mcq-p1-q08",
      question: "'the court had vanished behind a silver curtain'. Which technique is 'a silver curtain'?",
      options: ["Simile", "Metaphor", "Onomatopoeia", "Oxymoron"],
      answerIndex: 1,
      hint: "Is the rain said to be LIKE a curtain, or said to BE one?",
      explanation:
        "The rain is described as if it IS a curtain, with no 'like' or 'as', so it is a metaphor. It suggests a solid shining wall of water that hides everything, like a curtain closing on a stage.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p1-q09",
      question: "Which word from the storm paragraph is an example of onomatopoeia?",
      options: ["silver", "enormous", "hissing", "pillar"],
      answerIndex: 2,
      hint: "Which word sounds like the noise it describes?",
      explanation:
        "'Hissing' imitates the sound of rain on a hot road. 'Enormous' describes the noise but does not sound like it, which is why it is the tempting wrong answer.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p1-q10",
      question: "'Wei Jie never broke a promise — at least, not until today.' What is the main effect of this sentence?",
      options: [
        "It proves Wei Jie has forgotten about Mei",
        "It shows that Mei distrusts her brother",
        "It describes the weather",
        "It hints that something has gone wrong today, building suspense",
      ],
      answerIndex: 3,
      hint: "The dash introduces a twist. Does the text tell us WHY he is late?",
      explanation:
        "The afterthought after the dash suggests that today is different, which foreshadows trouble and makes us read on. It does not 'prove' he has forgotten: the reader is not told why he is missing, and that uncertainty is the point.",
      guideRef: "structure",
    },
    {
      id: "cmp-mcq-p1-q11",
      question: "Why is the final line, 'It was not Wei Jie.', an effective ending?",
      options: [
        "It resolves the story neatly so the reader feels relieved",
        "It is a short one-line paragraph that creates a cliffhanger and leaves the reader asking who is running towards Mei",
        "It summarises everything that has happened",
        "It tells us directly how Mei is feeling",
      ],
      answerIndex: 1,
      hint: "Does the last line settle a question or raise one?",
      explanation:
        "The isolated short sentence raises a new mystery at the moment of greatest tension, which is a cliffhanger. It does the opposite of resolving the story neatly.",
      guideRef: "structure",
    },
    {
      id: "cmp-mcq-p1-q12",
      question: "How does the writer's focus shift across the extract?",
      options: [
        "From Mei's childhood to the present day",
        "From Uncle Lim's flat to the basketball court",
        "From the wide sky and estate, to the arrival of the storm, then narrowing to Mei and the running figure",
        "It stays fixed on Mei's thoughts throughout",
      ],
      answerIndex: 2,
      hint: "Look at the first line, the middle paragraphs and the last two lines. Wide or close?",
      explanation:
        "The extract opens with a wide shot of the sky over Toa Payoh, moves to the storm sweeping the estate, then zooms in on Mei pressed against a pillar and the shape coming towards her. There is no flashback, so the option ‘From Mei's childhood to the present day’ is wrong.",
      guideRef: "structure",
    },
    {
      id: "cmp-mcq-p1-q13",
      question: "Which quotation best supports the idea that the storm is powerful and overwhelming?",
      options: [
        "'Mei sat on the low wall of the void deck'",
        "'Somewhere a radio was playing an old Hokkien song'",
        "'a roar like a crowd in a stadium'",
        "'Her mother had told her to be home by five'",
      ],
      answerIndex: 2,
      hint: "Which quotation is actually about the storm?",
      explanation:
        "'a roar like a crowd in a stadium' compares the rain to a huge crowd's noise, suggesting overwhelming volume and power. The other quotations are about Mei or the setting before the storm, so they cannot support a point about its power.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p1-q14",
      question: "A question says: 'Give TWO things Mei can hear during the storm. (2 marks)'. What is the best approach?",
      options: [
        "Write a full paragraph analysing the writer's language",
        "Give two separate, brief, accurate details from the storm paragraph",
        "Copy out the whole paragraph so nothing is missed",
        "Give one detail and explain it in depth",
      ],
      answerIndex: 1,
      hint: "Look at the command word and the marks.",
      explanation:
        "Two marks for 'give two' means one mark per correct detail (e.g. drumming on the zinc roof; gurgling in the drains). Analysis earns nothing here, and copying a whole paragraph does not show you have selected the right details.",
      guideRef: "question-types",
    },
    {
      id: "cmp-mcq-p1-q15",
      question: "What is scanning?",
      options: [
        "Reading every word slowly and carefully, twice",
        "Running your eyes quickly over a text to get its general gist",
        "Searching quickly for a specific word, name, number or detail",
        "Reading only the last paragraph first",
      ],
      answerIndex: 2,
      hint: "Think of scanning a shelf for one particular book.",
      explanation:
        "Scanning means hunting for a specific item, such as a time, name or key word. Getting the general gist is skimming, which is the most commonly confused option.",
      guideRef: "skim-scan-timing",
    },
    {
      id: "cmp-mcq-p1-q16",
      question: "Which of these is an INFERENCE question?",
      options: [
        "Where does Mei sit while she waits?",
        "What time is it when Mei is waiting?",
        "Name two sounds the rain makes.",
        "What does Uncle Lim's behaviour suggest about the coming weather?",
      ],
      answerIndex: 3,
      hint: "Inference questions often use the word 'suggest' or 'imply'.",
      explanation:
        "'What does ... suggest' asks you to read between the lines and work out something not stated directly. The other three can be answered by finding facts on the surface of the text (retrieval).",
      guideRef: "question-types",
    },
    {
      id: "cmp-mcq-p1-q17",
      question: "The tense, stormy weather in this extract mirrors Mei's growing worry. What is this technique called?",
      options: ["Pathetic fallacy", "Onomatopoeia", "Dramatic irony", "Juxtaposition"],
      answerIndex: 0,
      hint: "It is a technique where the setting reflects mood.",
      explanation:
        "Pathetic fallacy is when weather or setting reflects a character's emotions or the atmosphere. Dramatic irony is when the reader knows something a character does not, which does not apply here.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p1-q18",
      question: "Which comment on the phrase 'fat, warm, heavy as a coin' is the STRONGEST analysis?",
      options: [
        "This is a simile which makes the writing more interesting.",
        "The writer uses a simile to describe the rain.",
        "The simile 'heavy as a coin' makes a single raindrop feel solid and weighty, hinting at the force of the storm to come.",
        "It shows that the rain is like money falling from the sky.",
      ],
      answerIndex: 2,
      hint: "The best analysis names the technique AND explains a precise effect.",
      explanation:
        "The option ‘The simile 'heavy as a coin' makes a single raindrop feel solid…’ zooms in on 'heavy as a coin' and explains exactly what it suggests (weight, solidity, a warning of force). 'Makes it more interesting' is a vague, empty comment that examiners do not credit.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p1-q19",
      question: "Which is the best summary of the extract, written in your own words?",
      options: [
        "A girl waits for her brother at her block as a violent tropical storm breaks, and a stranger runs towards her through the rain.",
        "Uncle Lim takes his bird for a walk before the rain.",
        "The sky over Toa Payoh had been holding its breath all afternoon.",
        "Mei is angry with her mother for making her come home.",
      ],
      answerIndex: 0,
      hint: "A good summary covers beginning, middle and end, in your own words.",
      explanation:
        "The option ‘A girl waits for her brother at her block as a violent tropical…’ covers the whole extract in fresh wording. The third simply copies the first line, and the second focuses on a minor detail.",
      guideRef: "summary-evaluation",
    },
    {
      id: "cmp-mcq-p1-q20",
      question: "A student argues: 'The storm is as important as any character in this extract.' Which evidence BEST supports this view?",
      options: [
        "Mei is named in the first paragraph.",
        "The extract is set in Toa Payoh.",
        "Uncle Lim speaks two words.",
        "The weather is given human actions ('holding its breath', the wind 'racing' and 'snatching') and the paragraphs follow its arrival step by step.",
      ],
      answerIndex: 3,
      hint: "Which option treats the storm like a character in both language AND structure?",
      explanation:
        "Personification makes the storm act like a living character, and the structure follows its arrival from tension to downpour. The other options are true but do not support the claim; evaluation questions need evidence that fits the statement.",
      guideRef: "summary-evaluation",
    },
  ],
};

// ---------------------------------------------------------------------------
// MCQ Paper 2: fiction (Jack London, "To Build a Fire")
// ---------------------------------------------------------------------------

const mcqP2: Paper<MCQ> = {
  id: "cmp-mcq-p2",
  title: "MCQ Paper 2",
  passage: fireP,
  questions: [
    {
      id: "cmp-mcq-p2-q01",
      question: "What time is it when the man looks at his watch?",
      options: ["Eight o'clock", "Noon", "Five o'clock", "Nine o'clock"],
      answerIndex: 3,
      hint: "Scan the first paragraph for a number.",
      explanation:
        "'It was nine o'clock.' Even at nine in the morning there is no sun, which helps to build the eerie, dark atmosphere.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-mcq-p2-q02",
      question: "In which direction does the little-travelled trail lead?",
      options: ["North", "South", "East", "West"],
      answerIndex: 2,
      hint: "Scan for a compass word in the first sentence.",
      explanation:
        "The trail 'led eastward'. 'South' is the tempting distractor because the sun is 'due south' later in the paragraph, so read the exact sentence the question refers to.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-mcq-p2-q03",
      question: "'Day had broken cold and grey, exceedingly cold and grey'. Which technique does London use here?",
      options: ["Repetition", "Onomatopoeia", "Simile", "Rhetorical question"],
      answerIndex: 0,
      hint: "Which words appear twice?",
      explanation:
        "'cold and grey' is repeated, intensified by 'exceedingly'. There is no comparison word, so it is not a simile.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p2-q04",
      question: "What is the main effect of that repetition in the opening sentence?",
      options: [
        "It suggests that the man is cheerful and relaxed",
        "It shows time passing quickly",
        "It introduces a conversation",
        "It hammers home the relentless, bleak cold from the very first line",
      ],
      answerIndex: 3,
      hint: "Why say something twice?",
      explanation:
        "Repeating 'cold and grey' makes the bleakness feel unending and inescapable, setting up the hostile environment. Nothing in the sentence suggests time passing quickly.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p2-q05",
      question: "The man pauses for breath, 'excusing the act to himself by looking at his watch.' What does this suggest about him?",
      options: [
        "He is proud and will not admit, even to himself, that he is tired",
        "He is late for an important meeting",
        "He has lost his way on the trail",
        "He is frightened of the dark",
      ],
      answerIndex: 0,
      hint: "Why would someone need an 'excuse' to rest?",
      explanation:
        "He pretends he has stopped to check the time rather than admit he is out of breath, so he is proud and over-confident. Nothing suggests he is lost; that reading has no evidence.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-mcq-p2-q06",
      question: "'there seemed an intangible pall over the face of things'. What does 'pall' most nearly mean here?",
      options: [
        "A bright, cheerful light",
        "A friend or companion",
        "A sudden loud noise",
        "A heavy, dark covering of gloom",
      ],
      answerIndex: 3,
      hint: "The next phrase, 'a subtle gloom that made the day dark', explains it.",
      explanation:
        "A pall is a dark covering, originally the cloth draped over a coffin. The context 'a subtle gloom that made the day dark' confirms it. 'Friend' confuses it with the informal word 'pal'.",
      guideRef: "vocab-in-context",
    },
    {
      id: "cmp-mcq-p2-q07",
      question: "Why might London have chosen the word 'pall' rather than simply 'shadow'?",
      options: [
        "'Pall' is a shorter, simpler word",
        "'Pall' rhymes with 'all'",
        "'Pall' has connotations of death and funerals, quietly foreshadowing danger",
        "'Pall' suggests warmth and comfort",
      ],
      answerIndex: 2,
      hint: "Where is a pall traditionally found?",
      explanation:
        "Because a pall covers a coffin, the word carries connotations of death, hinting at the fate awaiting the man. This is what makes it a richer choice than 'shadow'. Rhyme is irrelevant in prose.",
      guideRef: "vocab-in-context",
    },
    {
      id: "cmp-mcq-p2-q08",
      question: "The sun is called 'that cheerful orb'. What is the effect of this description in context?",
      options: [
        "Describing the sun warmly highlights how completely comfort and life are missing from this landscape",
        "It shows that it is summer in the Yukon",
        "It is a metaphor for the man's face",
        "It shows that the man is in a cheerful mood",
      ],
      answerIndex: 0,
      hint: "Is the sun actually present?",
      explanation:
        "The only cheerful thing in the passage is absent, so the contrast deepens the bleakness. It does not describe the man's mood; the narrator says the lack of sun simply 'did not worry' him.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p2-q09",
      question: "The sun 'would just peep above the sky-line and dip immediately from view.' Which technique is used?",
      options: ["Hyperbole", "Oxymoron", "Alliteration", "Personification"],
      answerIndex: 3,
      hint: "Who usually 'peeps'?",
      explanation:
        "'Peep' gives the sun a shy human action, so it is personification. It makes the sun seem timid and weak in this frozen world.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p2-q10",
      question: "After the gloomy description, London writes: 'This fact did not worry the man.' What is the effect of this short sentence?",
      options: [
        "It reassures the reader that he will be safe",
        "It creates unease, because the reader senses a danger that the man ignores",
        "It changes the setting to somewhere warmer",
        "It adds a light, comic tone",
      ],
      answerIndex: 1,
      hint: "Does the reader agree that there is nothing to worry about?",
      explanation:
        "The flat, short sentence contrasts with the ominous description, so the reader becomes more worried precisely because the man is not. It does not reassure; it makes us doubt his judgement.",
      guideRef: "structure",
    },
    {
      id: "cmp-mcq-p2-q11",
      question: "'The trouble with him was that he was without imagination.' Which reading is BEST supported by the next sentence?",
      options: [
        "He is unable to write stories or invent games",
        "He is unintelligent in every way",
        "He notices facts but cannot imagine what they mean, such as the danger they pose",
        "He is lonely and misses his friends",
      ],
      answerIndex: 2,
      hint: "Read: 'quick and alert in the things of life, but only in the things, and not in the significances.'",
      explanation:
        "He is 'quick and alert' about facts but blind to their 'significances' (consequences), so he cannot picture the danger. 'Unintelligent in every way' is contradicted by 'quick and alert'.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-mcq-p2-q12",
      question: "Why does London include the detail 'Fifty degrees below zero meant eighty-odd degrees of frost'?",
      options: [
        "To show that the man's maths is wrong",
        "To give a precise measurement that shows the man thinks in numbers rather than in terms of danger",
        "To show that the weather is warming up",
        "To make the reader laugh",
      ],
      answerIndex: 1,
      hint: "Read the next sentence: 'Such fact impressed him as being cold and uncomfortable, and that was all.'",
      explanation:
        "The precise figure is exactly the kind of 'fact' the man understands, while he misses its deadly 'significance'. The maths is correct (−50 °F is 82 degrees below freezing), so the option ‘To show that the man's maths is wrong’ is wrong.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p2-q13",
      question: "From which narrative viewpoint is the extract written?",
      options: [
        "First person, from the man's point of view",
        "Second person, addressing 'you'",
        "Third person, by a narrator who understands more than the man",
        "As a diary written by the man",
      ],
      answerIndex: 2,
      hint: "Look for 'he' or 'I', and who judges the man.",
      explanation:
        "The narrator uses 'he' and comments on the man's flaws ('The trouble with him was...'), so it is third person with a narrator who knows more than the character. It cannot be first person because the man never says 'I'.",
      guideRef: "structure",
    },
    {
      id: "cmp-mcq-p2-q14",
      question: "The main character is called only 'the man'. What is the most likely effect?",
      options: [
        "It shows that London forgot to name him",
        "It tells us he is a famous explorer",
        "It shows that he is very old",
        "It makes him an 'everyman' figure who could be anyone underestimating nature, and keeps the reader at a distance",
      ],
      answerIndex: 3,
      hint: "What does leaving out a name do?",
      explanation:
        "Without a name, the man becomes a type rather than an individual: anyone who trusts facts over imagination. A famous explorer would surely be named, so that option contradicts the text.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p2-q15",
      question: "How does the extract open?",
      options: [
        "With dialogue between two characters",
        "With a description of setting that establishes a hostile atmosphere",
        "With a flashback to the man's childhood",
        "With the ending of the story",
      ],
      answerIndex: 1,
      hint: "What does the first sentence focus on?",
      explanation:
        "The opening describes the cold, grey day and the dim trail, so the setting comes first and creates a threatening mood. There is no speech at all in the extract.",
      guideRef: "structure",
    },
    {
      id: "cmp-mcq-p2-q16",
      question: "A question asks: 'How does the writer use language to describe the setting?' What should a strong answer contain?",
      options: [
        "Well-chosen quotations, the technique or word choice used, and the effect on the reader",
        "A retelling of the plot in order",
        "Facts about Jack London's life only",
        "A list of every technique you can find, without explanation",
      ],
      answerIndex: 0,
      hint: "What, how, why.",
      explanation:
        "Language questions reward evidence + technique + effect. A list of techniques without explanation earns little, because the marks are for explaining effect.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p2-q17",
      question: "Which of these is a VOCABULARY IN CONTEXT question?",
      options: [
        "List two things the man notices about the weather.",
        "How far do you agree that the man is foolish?",
        "Summarise what we learn about the setting.",
        "Explain what 'significances' means as it is used in this sentence.",
      ],
      answerIndex: 3,
      hint: "Look for a question focused on the meaning of a single word.",
      explanation:
        "Asking what a word means 'as it is used in this sentence' tests vocabulary in context. 'How far do you agree' is evaluation and 'summarise' is a summary question.",
      guideRef: "question-types",
    },
    {
      id: "cmp-mcq-p2-q18",
      question: "Which is the best 'own words' explanation of 'he was without imagination'?",
      options: [
        "He was without imagination.",
        "He could not picture consequences or possibilities beyond the plain facts in front of him.",
        "He was imaginationless.",
        "He had no 'imagination' at all.",
      ],
      answerIndex: 1,
      hint: "Own words means rephrasing, not reshuffling the same word.",
      explanation:
        "The option ‘He could not picture consequences or possibilities beyond the…’ genuinely rephrases the idea. The others reuse the key word 'imagination' (or a form of it), so they show no understanding.",
      guideRef: "summary-evaluation",
    },
    {
      id: "cmp-mcq-p2-q19",
      question: "Which statement best describes the relationship between the man and the setting in this extract?",
      options: [
        "The man is terrified of the landscape",
        "The setting is vast and threatening, but the man fails to recognise the danger",
        "The setting is warm and welcoming",
        "The man and the setting are in peaceful harmony",
      ],
      answerIndex: 1,
      hint: "Compare how the narrator describes the setting with how the man reacts to it.",
      explanation:
        "The narrator stresses 'tremendous cold' and 'strangeness and weirdness', yet these 'made no impression on the man'. He is not terrified: that is exactly what he fails to be.",
      guideRef: "summary-evaluation",
    },
    {
      id: "cmp-mcq-p2-q20",
      question: "A reading paper lasts 60 minutes, worth 50 marks, and you spend the first 10 minutes reading. Roughly how long should you spend on an 8-mark question?",
      options: ["About 2 minutes", "About 8 minutes", "About 20 minutes", "About 30 minutes"],
      answerIndex: 1,
      hint: "50 minutes of writing time for 50 marks.",
      explanation:
        "50 minutes for 50 marks is about a minute a mark, so roughly 8 minutes. Spending 20 minutes on one 8-mark question would leave you short of time for questions worth far more.",
      guideRef: "skim-scan-timing",
    },
  ],
};

// ---------------------------------------------------------------------------
// MCQ Paper 3: non-fiction feature article ("The Otters Who Came Back", original)
// ---------------------------------------------------------------------------

const mcqP3: Paper<MCQ> = {
  id: "cmp-mcq-p3",
  title: "MCQ Paper 3",
  passage: ottersPassage,
  questions: [
    {
      id: "cmp-mcq-p3-q01",
      question: "In which year did the clean-up of the Singapore River begin?",
      options: ["1967", "1977", "1987", "The late 1990s"],
      answerIndex: 1,
      hint: "Scan the third paragraph for a year.",
      explanation:
        "'In 1977 the government launched a ten-year clean-up'. The late 1990s is when the otters returned, not when the clean-up began, so read the question carefully.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-mcq-p3-q02",
      question: "Which of these was part of the river clean-up, according to the article?",
      options: [
        "Building new office towers",
        "Bringing otters in from Malaysia",
        "Moving pig farms",
        "Banning joggers from the riverside",
      ],
      answerIndex: 2,
      hint: "Find the list after 'ten-year clean-up'.",
      explanation:
        "The clean-up involved 'moving pig farms, relocating hawkers and dredging the riverbed'. The article says the otters returned by themselves; nothing suggests they were brought in.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-mcq-p3-q03",
      question: "Which sentence from the article is a FACT?",
      options: [
        "'It is also the best news our city has had in years.'",
        "'They are not pests; they are proof.'",
        "'In 1977 the government launched a ten-year clean-up'",
        "'You are looking at one of the greatest comeback stories this island has ever told.'",
      ],
      answerIndex: 2,
      hint: "A fact can be checked and proved true or false.",
      explanation:
        "A date and an event can be checked in records, so this is a fact. 'Best news' and 'greatest comeback stories' are judgements people could disagree with, so they are opinions.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-mcq-p3-q04",
      question: "Which sentence from the article is an OPINION?",
      options: [
        "'It is also the best news our city has had in years.'",
        "'Singapore is home to more than a hundred wild smooth-coated otters'",
        "'otters have raided private koi ponds'",
        "'in the late 1990s, so did the otters'",
      ],
      answerIndex: 0,
      hint: "Look for a judgement word that people could argue about.",
      explanation:
        "'Best news' is the writer's judgement, so it is an opinion. The others are checkable claims about numbers, dates or events.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-mcq-p3-q05",
      question: "What is the MAIN purpose of this article?",
      options: [
        "To inform readers about otters without giving any opinion",
        "To inform readers about the otters' return and persuade them to value and respect the otters",
        "To advertise a paid otter-watching tour",
        "To complain that the otters are a nuisance",
      ],
      answerIndex: 1,
      hint: "Look at the ending: what does the writer want you to DO?",
      explanation:
        "The article gives facts (inform) but also uses opinion and imperatives ('put down the phone, keep your distance') to make us value the otters (persuade). The option ‘To inform readers about otters without giving any opinion’ is tempting, but the writer clearly takes a side.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-mcq-p3-q06",
      question: "How would you describe the writer's attitude towards the otters?",
      options: ["Hostile", "Completely neutral", "Admiring and protective", "Bored and dismissive"],
      answerIndex: 2,
      hint: "Look at words such as 'proof', 'living certificate' and 'greatest comeback'.",
      explanation:
        "Praise like 'living certificate' and 'greatest comeback stories' shows admiration, and 'keep your distance' shows protectiveness. The writer is not neutral, because opinions are stated openly.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-mcq-p3-q07",
      question: "'Singapore's most famous family doesn't pay rent, doesn't queue and has never once said thank you.' What is the main effect of this opening?",
      options: [
        "It gives scientific statistics to sound authoritative",
        "It asks the reader a rhetorical question",
        "It presents the counter-argument",
        "It uses a humorous list of three that hooks the reader by making them wonder who the 'family' is",
      ],
      answerIndex: 3,
      hint: "Does the opening tell you straight away that it is about otters?",
      explanation:
        "The playful list of three treats the otters like cheeky human neighbours and holds back who they are, which creates curiosity. There is no question mark, so it is not a rhetorical question.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p3-q08",
      question: "'Joggers stop mid-stride. Office workers lower their phones'. Why does the writer use the present tense here?",
      options: [
        "To make the scene feel immediate, as if it is happening in front of the reader",
        "Because the event happened a long time ago",
        "To show that the article is a flashback",
        "To make the facts easier to check",
      ],
      answerIndex: 0,
      hint: "How does 'stop' feel compared with 'stopped'?",
      explanation:
        "The present tense places the reader on the riverbank right now, making the scene vivid. It is not a flashback; the flashback comes in the next paragraph ('Fifty years ago...').",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p3-q09",
      question: "Paragraph 3 begins 'It was not always like this.' What structural shift does this signal?",
      options: [
        "A shift to the conclusion",
        "A shift from the present-day scene back to the river's history, to explain the comeback",
        "A shift to a counter-argument",
        "A shift into dialogue",
      ],
      answerIndex: 1,
      hint: "Look at the tense and time words that follow.",
      explanation:
        "The writer moves back in time ('Fifty years ago') to show how polluted the river was, which makes the otters' return more impressive. The counter-argument comes later, in paragraph 4.",
      guideRef: "structure",
    },
    {
      id: "cmp-mcq-p3-q10",
      question: "Where does the writer acknowledge an opposing view?",
      options: [
        "In the opening standfirst",
        "In the paragraph mentioning raided koi ponds and people being nipped",
        "In the final paragraph",
        "In the paragraph about 1977",
      ],
      answerIndex: 1,
      hint: "Look for 'Others are less charmed'.",
      explanation:
        "'Others are less charmed' introduces the counter-argument (koi ponds, nips). Acknowledging the other side before rebutting it makes the writer seem fair and reasonable.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-mcq-p3-q11",
      question: "'But to complain about the otters is to miss the point.' What is the function of this sentence?",
      options: [
        "It adds another example of otter damage",
        "It concludes the whole article",
        "It rebuts the counter-argument and turns back to the writer's own view",
        "It introduces a statistic",
      ],
      answerIndex: 2,
      hint: "What does the word 'But' do after the complaints?",
      explanation:
        "'But' signals a turn: the writer dismisses the complaints and moves to the main argument. It is not the conclusion, because there is another paragraph after it.",
      guideRef: "structure",
    },
    {
      id: "cmp-mcq-p3-q12",
      question: "'They are not pests; they are proof.' Which techniques make this sentence memorable?",
      options: [
        "Alliteration and a balanced contrast between two ideas",
        "A simile and onomatopoeia",
        "A rhetorical question and statistics",
        "Hyperbole and a flashback",
      ],
      answerIndex: 0,
      hint: "Look at the first letters of the two key nouns, and at the shape of the sentence.",
      explanation:
        "'Pests' and 'proof' alliterate, and the semicolon balances 'not X' against 'Y' (antithesis), giving a punchy, quotable line. There is no comparison word, so it is not a simile.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p3-q13",
      question: "What does the metaphor 'a living certificate' suggest?",
      options: [
        "The otters carry official documents",
        "The otters are registered pets",
        "The otters are endangered",
        "The otters' presence is evidence that the water is clean and healthy",
      ],
      answerIndex: 3,
      hint: "What does a certificate do?",
      explanation:
        "A certificate officially proves something; the otters 'prove' the waterways are clean because they can only survive where fish are plentiful. A literal reading (carrying documents) misses the metaphor.",
      guideRef: "vocab-in-context",
    },
    {
      id: "cmp-mcq-p3-q14",
      question: "'So next time you spot them, put down the phone, keep your distance and simply watch.' Which technique is used?",
      options: ["Flashback", "Statistics", "Personification", "Imperatives addressed directly to the reader"],
      answerIndex: 3,
      hint: "Look at the verbs 'put', 'keep' and 'watch'.",
      explanation:
        "These are imperative (command) verbs addressed to 'you', which turns the reader into a participant and gives a clear call to action. Nothing is given human qualities here, so it is not personification.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-mcq-p3-q15",
      question: "The ending mentions phones again, just as the second paragraph did. What is the effect?",
      options: [
        "It links back to the opening image to create a satisfying circular structure, but now with a new message",
        "It repeats an idea by accident",
        "It introduces a completely new topic",
        "It contradicts the rest of the article",
      ],
      answerIndex: 0,
      hint: "Compare what people do with phones early on and what the writer asks at the end.",
      explanation:
        "Early on, people 'raise them again to film'; at the end the writer asks us to 'put down the phone'. Echoing the opening gives a cyclical structure with a shift in message, which is deliberate, not accidental.",
      guideRef: "structure",
    },
    {
      id: "cmp-mcq-p3-q16",
      question: "Which features show that this text is a feature article?",
      options: [
        "Stage directions and a cast list",
        "A headline and standfirst, a mix of facts and opinions, and direct address to the reader",
        "A regular rhyme scheme",
        "A date, an address and 'Dear Sir'",
      ],
      answerIndex: 1,
      hint: "Look at the bold opening line and the sentence under it.",
      explanation:
        "The capitalised headline, the attention-grabbing standfirst, facts mixed with opinion and 'you' are typical of a feature article. A date and 'Dear Sir' are features of a formal letter.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-mcq-p3-q17",
      question: "Which set of features is most typical of a DIARY or JOURNAL?",
      options: [
        "A headline, subheadings and bullet points",
        "Stage directions and speaker names",
        "First person, dated entries and a private, reflective tone",
        "Rhetorical questions addressed to an audience",
      ],
      answerIndex: 2,
      hint: "Think of Captain Scott's journal.",
      explanation:
        "Diaries are written in the first person, organised by date and usually private and reflective. Rhetorical questions to an audience are more typical of speeches.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-mcq-p3-q18",
      question: "What best describes TRAVEL WRITING?",
      options: [
        "It describes a place through the writer's personal experience, mixing information with vivid description and opinion",
        "It only gives timetables and prices",
        "It is always invented fiction",
        "It never contains the writer's opinions",
      ],
      answerIndex: 0,
      hint: "Think of a writer describing a journey for readers who may never go.",
      explanation:
        "Travel writing is personal, descriptive and often opinionated, as well as informative. A guidebook timetable is purely informative, which is why the option ‘It only gives timetables and prices’ is too narrow.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-mcq-p3-q19",
      question: "Which is the best summary, in your own words, of why the otters returned?",
      options: [
        "'the fish returned — and in the late 1990s, so did the otters'",
        "Because a long clean-up made the river clean enough for fish to live in, giving otters food again",
        "Because otters enjoy living near office towers",
        "Because joggers began feeding them",
      ],
      answerIndex: 1,
      hint: "Own words, and the cause-and-effect chain.",
      explanation:
        "The option ‘Because a long clean-up made the river clean enough for fish to…’ explains the chain (clean-up → clean water → fish → otters) in fresh words. The first is a direct copy from the text, which does not count as a summary in your own words.",
      guideRef: "summary-evaluation",
    },
    {
      id: "cmp-mcq-p3-q20",
      question: "A student writes: 'The writer is fair to people who dislike the otters.' Which is the most convincing EVALUATION?",
      options: [
        "The writer is completely unfair because no problems are mentioned at all.",
        "The writer agrees with the critics and wants the otters removed.",
        "The writer has no viewpoint, so fairness is not relevant.",
        "Partly: the writer admits real problems (raided koi ponds, nips), but dismisses them in one sentence ('to complain... is to miss the point'), so the article is fair in acknowledging them but one-sided overall.",
      ],
      answerIndex: 3,
      hint: "A strong evaluation weighs both sides and uses evidence.",
      explanation:
        "The best evaluation gives a balanced judgement backed by quotations. The option ‘The writer is completely unfair because no problems are mentioned…’ is factually wrong, because problems ARE mentioned; checking claims against the text is essential in evaluation.",
      guideRef: "summary-evaluation",
    },
  ],
};

// ---------------------------------------------------------------------------
// MCQ Paper 4: non-fiction journal (Captain Scott, 1912)
// ---------------------------------------------------------------------------

const mcqP4: Paper<MCQ> = {
  id: "cmp-mcq-p4",
  title: "MCQ Paper 4",
  passage: scottPassage,
  questions: [
    {
      id: "cmp-mcq-p4-q01",
      question: "How far away was the depot that Scott's party was trying to reach?",
      options: ["1 mile", "11 miles", "21 miles", "Two days' march"],
      answerIndex: 1,
      hint: "Scan the 29 March entry for a number followed by 'miles'.",
      explanation:
        "'our depot 11 miles away'. '21' is a distractor based on 'Since the 21st', which is a date, not a distance.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-mcq-p4-q02",
      question: "According to the journal, what did Oates say before he left the tent?",
      options: [
        "'Look after our people.'",
        "'Great God! this is an awful place.'",
        "'Now for the run home.'",
        "'I am just going outside and may be some time.'",
      ],
      answerIndex: 3,
      hint: "Look for speech marks in the March 16/17 entry.",
      explanation:
        "Scott records Oates's words in speech marks. The other quotations are Scott's own words from other entries, so retrieval also means checking WHO said something.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-mcq-p4-q03",
      question: "What type of text is this?",
      options: [
        "A novel narrated by a fictional explorer",
        "A journal written at the time of the events",
        "A newspaper report written afterwards",
        "A speech delivered to an audience",
      ],
      answerIndex: 1,
      hint: "Look at how it is organised and who writes it.",
      explanation:
        "Dated, first-person entries written during the expedition make it a journal (diary). A newspaper report would be written afterwards, in the third person.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-mcq-p4-q04",
      question: "'Great God! this is an awful place'. What does this exclamation reveal about Scott's feelings at the Pole?",
      options: [
        "Joy and pride at reaching his goal",
        "Calm satisfaction",
        "Shock and bitter disappointment",
        "Anger with Oates",
      ],
      answerIndex: 2,
      hint: "Read on: 'without the reward of priority'.",
      explanation:
        "The exclamation and the word 'awful' show despair: they have suffered to get there and have not even been first. 'Joy and pride' would make sense for a winner, which is exactly what Scott was not.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p4-q05",
      question: "What does 'without the reward of priority' mean in context?",
      options: [
        "Without the reward of being first",
        "Without enough food",
        "Without a prize of money",
        "Without permission from the government",
      ],
      answerIndex: 0,
      hint: "'Priority' comes from 'prior', meaning 'before'.",
      explanation:
        "Priority here means coming first; Amundsen's team had reached the Pole before them. The context note explains this, which is why reading notes and glossaries matters.",
      guideRef: "vocab-in-context",
    },
    {
      id: "cmp-mcq-p4-q06",
      question: "Which piece of context explains why the Pole felt 'awful' to Scott?",
      options: [
        "Oates had already left the tent",
        "They had run out of tea",
        "Amundsen's Norwegian team had reached the Pole first",
        "The weather was unusually warm",
      ],
      answerIndex: 2,
      hint: "Use the context note.",
      explanation:
        "Amundsen arrived on 14 December 1911, about a month before Scott. Oates walked out in March, two months after the Pole entry, so that option gets the chronology wrong.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-mcq-p4-q07",
      question: "'I am just going outside and may be some time.' What is the effect of Oates's understated words?",
      options: [
        "They make a deliberate sacrifice sound casual, which makes his courage more moving",
        "They show that he expects to return shortly",
        "They show that he is lost and confused",
        "They show that he is angry with his companions",
      ],
      answerIndex: 0,
      hint: "Read Scott's comment: 'We knew that poor Oates was walking to his death'.",
      explanation:
        "Oates knew he would not return; the calm, ordinary phrasing ('just', 'some time') hides the enormity of the act, which makes it more powerful. Taking the words literally misses the understatement.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p4-q08",
      question: "'the act of a brave man and an English gentleman'. What does this phrase reveal about the values of Scott's time?",
      options: [
        "Edwardian ideals of courage, duty and self-sacrifice",
        "Modern ideas about health and safety",
        "Scott's dislike of Oates",
        "That Scott did not really believe Oates was brave",
      ],
      answerIndex: 0,
      hint: "What qualities does the phrase praise?",
      explanation:
        "The phrase links bravery and self-sacrifice with being a 'gentleman', which was a central ideal in Edwardian Britain. Scott clearly admires Oates, so 'dislike' contradicts the evidence.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-mcq-p4-q09",
      question: "Which statement from the journal is a FACT rather than an opinion?",
      options: [
        "'it was the act of a brave man'",
        "'this is an awful place'",
        "'We had fuel to make two cups of tea apiece and bare food for two days on the 20th.'",
        "'which would have stirred the heart of every Englishman'",
      ],
      answerIndex: 2,
      hint: "Which statement could be checked against the supplies?",
      explanation:
        "The quantity of fuel and food is a checkable record. 'Brave', 'awful' and 'stirred the heart' are judgements, even though we may agree with them.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-mcq-p4-q10",
      question: "'outside the door of the tent it remains a scene of whirling drift'. What does this image emphasise?",
      options: [
        "That the men are trapped by a blizzard that never stops",
        "That the weather is beautiful and calm",
        "That they have plenty of time",
        "That the depot has been found",
      ],
      answerIndex: 0,
      hint: "Look at 'remains' and 'whirling'.",
      explanation:
        "'Remains' shows the storm is unchanging day after day, and 'whirling drift' suggests chaotic, blinding snow, so the men are trapped only 11 miles from safety. 'Beautiful and calm' ignores 'continuous gale'.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p4-q11",
      question: "What is the tone of 'We shall stick it out to the end, but we are getting weaker, of course'?",
      options: ["Cheerful optimism", "Panic and terror", "Sarcasm", "Calm, determined acceptance"],
      answerIndex: 3,
      hint: "Notice the matter-of-fact 'of course'.",
      explanation:
        "Scott is resolute ('stick it out') yet accepts death plainly ('of course'), so the tone is stoical acceptance. He is not optimistic: he says 'the end cannot be far'.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p4-q12",
      question: "'It seems a pity, but I do not think I can write more.' Why is this sentence so moving?",
      options: [
        "Its understatement and restraint in the face of death make the tragedy more powerful",
        "It shows that Scott does not care what happens",
        "It is a joke to cheer up the reader",
        "It shows that Scott is bored of writing",
      ],
      answerIndex: 0,
      hint: "Is 'a pity' a big or small word for dying?",
      explanation:
        "Calling his own death 'a pity' is huge understatement; the reader feels the emotion Scott holds back. It does not show that he doesn't care: his last line is a plea for 'our people'.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p4-q13",
      question: "What is the purpose of the final line, 'For God's sake look after our people.'?",
      options: [
        "To order the team to keep marching",
        "To plead with the readers and the nation to care for the men's families",
        "To ask God for rescue",
        "To complain about the expedition's organisers",
      ],
      answerIndex: 1,
      hint: "Who are 'our people', and who will read the journal?",
      explanation:
        "Scott knows the journal will be found, so he appeals to future readers to support the families left behind. The team cannot march; they are dying in the tent.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-mcq-p4-q14",
      question: "Who did Scott expect would eventually read his journal?",
      options: [
        "The public and the families, after his death",
        "Only himself",
        "Nobody at all",
        "Amundsen's team",
      ],
      answerIndex: 0,
      hint: "Look at 'Should this be found' and the 'Message to the Public'.",
      explanation:
        "Phrases like 'Should this be found I want these facts recorded' and a 'Message to the Public' show he wrote with future readers in mind. So, although it is a journal, it is not purely private.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-mcq-p4-q15",
      question: "'These rough notes and our dead bodies must tell the tale.' What makes this sentence powerful?",
      options: [
        "A gentle simile comparing the notes to a story",
        "Rhyme and rhythm",
        "A rhetorical question",
        "Its blunt, stark phrasing: the men's bodies themselves become the evidence of their courage",
      ],
      answerIndex: 3,
      hint: "Is there any softening of the word 'dead'?",
      explanation:
        "The plain words 'dead bodies' shock the reader, and the bodies become the 'tale' itself. There is no 'like' or 'as', so it is not a simile.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-mcq-p4-q16",
      question: "How does the dated-entry structure add to the impact of the extract?",
      options: [
        "It lets us track the countdown from the Pole to the final entry, so we feel time and hope running out",
        "It confuses the reader about the order of events",
        "It proves that the text is fiction",
        "It has no effect at all",
      ],
      answerIndex: 0,
      hint: "Look at the dates: 17 January, 16/17 March, 29 March.",
      explanation:
        "The dates chart the decline from the Pole to death, and 'Lost track of dates' itself shows Scott's weakening grip. Dates are a feature of real journals, not proof of fiction.",
      guideRef: "structure",
    },
    {
      id: "cmp-mcq-p4-q17",
      question: "What is the most important rule for a SUMMARY question?",
      options: [
        "Quote whole sentences so that you are accurate",
        "Include your own opinion of the writer",
        "Select only the relevant points and express them in your own words, without analysing language",
        "Analyse as many techniques as possible",
      ],
      answerIndex: 2,
      hint: "Summary tests understanding, not analysis.",
      explanation:
        "Summaries reward relevant, concise points in your own words. Analysing techniques wastes time because no marks are available for it in a summary.",
      guideRef: "summary-evaluation",
    },
    {
      id: "cmp-mcq-p4-q18",
      question: "What should a strong answer to a 'How far do you agree...?' question include?",
      options: [
        "Only reasons why you agree",
        "A retelling of the whole text",
        "A list of techniques with no judgement",
        "A clear judgement, supported by evidence, which considers more than one view",
      ],
      answerIndex: 3,
      hint: "'How far' invites a judgement of degree.",
      explanation:
        "Evaluation needs a clear verdict (e.g. 'largely agree'), evidence and some weighing of other views. Agreeing completely without considering alternatives usually caps the mark.",
      guideRef: "summary-evaluation",
    },
    {
      id: "cmp-mcq-p4-q19",
      question: "A critic says: 'Scott's journal is as much a performance for future readers as a private record.' Which evidence BEST supports this?",
      options: [
        "He records the wind direction ('W.S.W. and S.W.')",
        "'Should this be found I want these facts recorded' and the 'Message to the Public' show he was consciously writing for an audience",
        "He mentions cups of tea",
        "He says 'I wonder if we can do it'",
      ],
      answerIndex: 1,
      hint: "Which evidence shows awareness of readers?",
      explanation:
        "Directly addressing whoever finds the journal, and writing a public message, show deliberate shaping for readers. Wind directions are practical records, which supports the 'private record' side instead.",
      guideRef: "summary-evaluation",
    },
    {
      id: "cmp-mcq-p4-q20",
      question: "A language question is worth 6 marks. What is usually needed?",
      options: [
        "One quotation with no comment",
        "Six one-word answers",
        "About three developed points, each with evidence and explained effect",
        "A summary of the plot",
      ],
      answerIndex: 2,
      hint: "Marks tell you how much to write.",
      explanation:
        "Higher-mark analysis questions reward several developed points (quotation + technique + effect). One quotation with no comment would earn very little.",
      guideRef: "question-types",
    },
  ],
};

// ---------------------------------------------------------------------------
// Written Paper 1: Dickens, A Christmas Carol
// ---------------------------------------------------------------------------

const qaP1: Paper<QA> = {
  id: "cmp-qa-p1",
  title: "Written Paper 1",
  passage: scroogePassage,
  questions: [
    {
      id: "cmp-qa-p1-q01",
      question: "From paragraph 1, give TWO effects that 'the cold within him' has on Scrooge's appearance: one from his nose or cheek, and one from his eyes, lips or walk.",
      marks: 2,
      hint: "Scan the sentence beginning 'The cold within him...'. It contains a list of verbs.",
      modelAnswer:
        "The cold 'nipped his pointed nose' and 'shrivelled his cheek', and it 'made his eyes red, his thin lips blue' and 'stiffened his gait' (made him walk stiffly).",
      markScheme: [
        { point: "An effect on his nose or cheek (nipped nose / shrivelled cheek)", keywords: ["nose", "nipped", "cheek", "shrivelled", "shriveled", "pinched"] },
        { point: "An effect on his eyes, lips or walk (red eyes / blue lips / stiff gait)", keywords: ["eyes", "lips", "blue", "gait", "stiffened", "walk", "stiff"] },
      ],
      commonError: "Giving two details from the same part of the body, or copying the whole sentence instead of selecting two clear details.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-qa-p1-q02",
      question: "Explain the meaning of these two words as they are used in the extract: (a) 'covetous' (b) 'solitary'.",
      marks: 2,
      hint: "Use the surrounding words: 'grasping, clutching, covetous' and 'secret, and self-contained, and solitary'.",
      modelAnswer:
        "(a) 'Covetous' means greedily wanting things, especially money or possessions, that you do not have. (b) 'Solitary' means alone or isolated, keeping away from other people.",
      markScheme: [
        { point: "'Covetous' = greedy / desperate to possess more", keywords: ["greedy", "greed", "wanting", "desire", "envious", "possess", "wants more"] },
        { point: "'Solitary' = alone / isolated", keywords: ["alone", "lonely", "isolated", "by himself", "on his own", "loner", "no company"] },
      ],
      commonError: "Defining 'solitary' as 'sad' (that is 'lonely' as a feeling, not the core meaning) or guessing without using the context.",
      guideRef: "vocab-in-context",
    },
    {
      id: "cmp-qa-p1-q03",
      question: "Read paragraph 3. What do the reactions of other people, and of the dogs, suggest about how Scrooge is seen? Support your answer with evidence.",
      marks: 3,
      hint: "Three groups: people in the street, beggars and children, and the dogs.",
      modelAnswer:
        "Nobody ever greets Scrooge 'with gladsome looks', which suggests he is so unfriendly that people avoid him completely. Even beggars do not ask him for 'a trifle' and children will not ask him the time, implying everyone knows he is mean and unapproachable. Most strikingly, 'even the blind men's dogs' pull their owners away, suggesting his cold, 'evil' nature is so obvious that even animals sense it.",
      markScheme: [
        { point: "People avoid / never greet him, so he is unfriendly and isolated", keywords: ["avoid", "nobody", "no one", "greet", "gladsome", "isolated", "unfriendly"] },
        { point: "Beggars and children don't approach him: his meanness is well known", keywords: ["beggar", "children", "trifle", "mean", "unapproachable", "reputation", "known"] },
        { point: "Even dogs shun him: his evil/cold nature is obvious even to animals", keywords: ["dog", "animals", "evil eye", "tug", "doorways", "dark master", "sense"] },
      ],
      commonError: "Retelling what happens ('the dogs pull their owners away') without saying what it SUGGESTS about Scrooge.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-qa-p1-q04",
      question: "'Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster.' Analyse the effect of the two similes.",
      marks: 4,
      hint: "Flint is a stone that makes sparks when hit with steel. What is hidden inside an oyster?",
      modelAnswer:
        "Dickens compares Scrooge to 'flint', a very hard stone, suggesting he is cold, unbreakable and cutting towards others. Flint normally gives off sparks when struck with steel, but 'no steel had ever struck out generous fire', implying that nobody has ever managed to spark any warmth or kindness from him. The second simile, 'solitary as an oyster', presents him as shut tight inside a hard shell, isolated and secretive. However, oysters can hide pearls, so the simile may hint that something precious lies hidden in Scrooge, preparing us for his later change.",
      markScheme: [
        { point: "Flint simile: hard, cold, sharp / unfeeling", keywords: ["flint", "hard", "stone", "unfeeling", "cold-hearted", "sharp", "harsh"] },
        { point: "No 'generous fire': no spark of warmth or kindness has ever come from him", keywords: ["spark", "generous fire", "warmth", "kindness", "generosity", "never generous"] },
        { point: "Oyster simile: closed, shut away, isolated, secretive", keywords: ["oyster", "shell", "closed", "shut", "isolated", "secretive", "clam"] },
        { point: "Developed or alternative reading (e.g. a hidden pearl suggests he can change)", keywords: ["pearl", "hidden", "inside", "change", "redemption", "transform", "potential"] },
      ],
      commonError: "Naming 'simile' twice without explaining what flint and an oyster actually suggest about Scrooge.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-qa-p1-q05",
      question: "How does Dickens use language in paragraph 1 to present Scrooge as cold-hearted and mean?",
      marks: 6,
      hint: "Look at the long list of '-ing' words, the cold imagery and the exaggeration about his office.",
      modelAnswer:
        "Dickens opens with an exclamation, 'Oh!', as if the narrator cannot contain his disgust. He then piles up a list of -ing words (present participles used as adjectives): 'squeezing, wrenching, grasping, scraping, clutching'. These words all describe tight, violent hand movements, suggesting that Scrooge grabs and hoards money relentlessly, and the build-up makes his greed seem overwhelming. The noun phrase 'old sinner' adds a moral judgement, implying his meanness is wicked. Dickens also uses an extended metaphor of cold: 'the cold within him froze his old features' and a 'frosty rime' sits on his eyebrows. His inner coldness is so strong that it shows on the outside, so his cruelty has become part of his body. Finally, the hyperbole that he 'iced his office in the dog-days; and didn't thaw it one degree at Christmas' exaggerates for comic effect, suggesting that even the warmest, most generous season cannot soften him.",
      markScheme: [
        { point: "Identifies the list of -ing words (present participles)", keywords: ["squeezing", "wrenching", "grasping", "scraping", "clutching", "list"] },
        { point: "Explains the list's effect: relentless, grabbing greed", keywords: ["greed", "greedy", "relentless", "hoard", "grab", "overwhelming", "tight"] },
        { point: "Identifies cold imagery / extended metaphor", keywords: ["froze", "frosty", "rime", "cold within", "extended metaphor", "ice", "cold imagery"] },
        { point: "Explains: inner coldness shows on his body / heartless", keywords: ["inside", "outside", "heartless", "unfeeling", "cold-hearted", "emotionless", "within"] },
        { point: "Identifies hyperbole of the office / dog-days / Christmas", keywords: ["iced his office", "dog-days", "hyperbole", "exaggerat", "thaw", "christmas"] },
        { point: "Explains a further effect (humour, moral judgement 'sinner', nothing can soften him)", keywords: ["sinner", "humour", "comic", "funny", "never changes", "soften", "judgement"] },
      ],
      commonError: "Spotting techniques ('there is a list') without explaining what each one suggests about Scrooge.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-qa-p1-q06",
      question: "Explain the joke in: 'They often ‘came down’ handsomely, and Scrooge never did.'",
      marks: 3,
      hint: "'Came down' has two meanings. Think of rain, and think of someone paying money.",
      modelAnswer:
        "This is a pun. Rain, snow and hail literally 'come down' heavily from the sky. 'To come down handsomely' also means to pay out money generously. Dickens jokes that even bad weather is more generous than Scrooge, because he never gives anything away.",
      markScheme: [
        { point: "Identifies it as a pun / double meaning", keywords: ["pun", "double meaning", "two meanings", "play on words", "wordplay"] },
        { point: "Literal meaning: weather falls heavily", keywords: ["rain", "falls", "falling", "weather", "snow", "heavily"] },
        { point: "Second meaning: giving money generously, which Scrooge never does", keywords: ["generous", "money", "give", "pay", "charity", "stingy", "mean"] },
      ],
      commonError: "Explaining only one meaning, so the joke disappears.",
      guideRef: "vocab-in-context",
    },
    {
      id: "cmp-qa-p1-q07",
      question: "How has Dickens structured this extract to build up our impression of Scrooge?",
      marks: 4,
      hint: "Track the focus: Scrooge himself → the weather → other people → the dogs.",
      modelAnswer:
        "Dickens begins with an explosive exclamation focused tightly on Scrooge's character and body, so our first impression is of greed and coldness. In paragraph 2 the focus widens to the weather, and Scrooge is compared with it and found to be harsher than any 'wind that blew'. Paragraph 3 widens again to society, showing how everyone avoids him. The extract ends with a climax: even the blind men's dogs reject him, and the paragraph closes on the comic punchline 'dark master!', which leaves the reader with a memorable and almost villainous image.",
      markScheme: [
        { point: "Opening: explosive exclamation / narrator's voice focused on Scrooge himself", keywords: ["opens", "opening", "begins", "exclamation", "oh!", "first impression"] },
        { point: "Shift/widening of focus to the weather comparison", keywords: ["weather", "widen", "shift", "paragraph 2", "second paragraph", "compares"] },
        { point: "Shift to society / other people's reactions", keywords: ["society", "other people", "paragraph 3", "third paragraph", "beggars", "nobody"] },
        { point: "Ending/climax with the dogs and punchline", keywords: ["ends", "ending", "climax", "dogs", "punchline", "dark master", "final"] },
      ],
      commonError: "Analysing language (similes, lists) instead of structure: how the focus moves and why.",
      guideRef: "structure",
    },
    {
      id: "cmp-qa-p1-q08",
      question: "'No warmth could warm, no wintry weather chill him.' Identify TWO techniques in this sentence.",
      marks: 2,
      hint: "Listen to the sounds, and look at the shape of the two halves.",
      modelAnswer:
        "The sentence uses alliteration ('warmth... warm... wintry weather'), and it is built from two balanced, parallel halves beginning 'no...', which uses repetition to stress that nothing affects him.",
      markScheme: [
        { point: "Alliteration of 'w'", keywords: ["alliteration", "w sound", "wintry weather", "repeated w", "alliterat"] },
        { point: "Parallelism / repetition of 'no' / balanced structure", keywords: ["parallel", "repetition", "repeated no", "balanced", "anaphora", "pattern"] },
      ],
      commonError: "Calling it a simile or personification when there is no comparison.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-qa-p1-q09",
      question: "In your own words, summarise what we learn about Scrooge's character from the whole extract.",
      marks: 4,
      hint: "Four separate ideas. Do not quote and do not analyse.",
      modelAnswer:
        "Scrooge is extremely mean and greedy with money, and he never gives anything to anyone. He is cold and unfeeling, so no kind of warmth or occasion softens him. He keeps himself to himself and lives a secretive, isolated life. As a result, everyone, from beggars to children to dogs, avoids him because of his unkind reputation.",
      markScheme: [
        { point: "Mean / greedy with money", keywords: ["mean", "greedy", "stingy", "miserly", "money", "selfish"] },
        { point: "Cold-hearted / unfeeling", keywords: ["cold-hearted", "unfeeling", "cold", "heartless", "unkind", "harsh"] },
        { point: "Isolated / secretive / keeps to himself", keywords: ["isolated", "secretive", "alone", "keeps to himself", "private", "lonely"] },
        { point: "Avoided / disliked by others", keywords: ["avoid", "disliked", "unpopular", "nobody", "no one", "reputation"] },
      ],
      commonError: "Copying phrases such as 'solitary as an oyster' instead of using your own words, or adding analysis that earns no marks in a summary.",
      guideRef: "summary-evaluation",
    },
    {
      id: "cmp-qa-p1-q10",
      question: "'Dickens makes the reader laugh at Scrooge as much as fear him.' How far do you agree? Refer closely to the extract.",
      marks: 5,
      hint: "Find evidence of comedy AND evidence of menace, then weigh them.",
      modelAnswer:
        "I largely agree, although the comedy is stronger than the fear. Dickens clearly wants us to laugh: the pun that rain 'came down handsomely' and Scrooge 'never did' is a joke at his expense, and the hyperbole that he 'iced his office in the dog-days' is absurd. The image of guide dogs dragging their owners 'into doorways' is almost slapstick. However, there is also menace: Scrooge is an 'old sinner', 'hard and sharp as flint', and the dogs call him an 'evil eye, dark master', which makes him sound almost devilish. Overall, the humour keeps Scrooge from being simply terrifying. He is a figure we mock as well as dislike, which makes his later change believable and entertaining.",
      markScheme: [
        { point: "Clear judgement on 'how far'", keywords: ["agree", "disagree", "largely", "partly", "to some extent", "overall"] },
        { point: "Evidence and explanation of humour", keywords: ["pun", "came down", "laugh", "comic", "humour", "funny", "dog-days"] },
        { point: "Evidence and explanation of fear/menace", keywords: ["sinner", "evil eye", "dark master", "flint", "menace", "frightening", "fear"] },
        { point: "Weighs the two sides / considers balance", keywords: ["however", "on the other hand", "balance", "although", "whereas", "more than"] },
        { point: "Links to Dickens's purpose (sets up change, keeps reader engaged, moral)", keywords: ["purpose", "change", "redemption", "transform", "moral", "engaged", "message"] },
      ],
      commonError: "Agreeing completely without considering the other side, or giving a judgement with no quotations.",
      guideRef: "summary-evaluation",
    },
    {
      id: "cmp-qa-p1-q11",
      question: "Creative task: write TWO sentences describing a mean modern character, using one simile and one list of three or more verbs, in the style of Dickens.",
      marks: 3,
      hint: "Think of a modern miser: someone who won't share their Wi-Fi password or snacks. Use 'like' or 'as' for the simile.",
      modelAnswer:
        "Mr Tan guarded his snacks like a dragon on a mountain of gold. He counted, recounted, hoarded and hid every last biscuit, and he would sooner let them go stale than hand one to a hungry child.",
      markScheme: [
        { point: "Uses a clear simile", keywords: ["like a", "like an", "as cold as", "as hard as", "as tight as", "as mean as", "as if"] },
        { point: "Uses a list of three or more verbs", keywords: ["counted", "hoarded", "hid", "grabbed", "clutched", "squeezed", "guarded", "snatched"] },
        { point: "Conveys meanness clearly", keywords: ["mean", "stingy", "refuse", "never share", "would not share", "hoard", "miser", "sooner"] },
      ],
      commonError: "Describing appearance only, so the reader never sees the character BEING mean.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-qa-p1-q12",
      question: "A Christmas Carol was written in 1843, when many people in London lived in terrible poverty. What do you think Dickens's purpose was in presenting Scrooge like this?",
      marks: 4,
      hint: "Who might Scrooge represent? Why mention beggars? What happens in the rest of the story?",
      modelAnswer:
        "Dickens uses Scrooge to represent wealthy Victorians who ignored the poor. The detail that 'no beggars implored him to bestow a trifle' shows that the poor have given up expecting help from people like him. By making Scrooge so cold and unlikeable, Dickens makes readers judge this attitude and perhaps question their own behaviour. Because the story later shows Scrooge transformed into a generous man, the exaggerated opening also sets up a powerful message: if even Scrooge can change, so can anyone, and so readers should be charitable, especially at Christmas.",
      markScheme: [
        { point: "Scrooge represents greedy rich people who ignore the poor", keywords: ["represent", "symbol", "rich", "wealthy", "upper class", "ignore the poor"] },
        { point: "Uses evidence linked to poverty (beggars, trifle)", keywords: ["beggar", "trifle", "poverty", "poor", "implored", "charity"] },
        { point: "Wants readers to judge this attitude / reflect on themselves", keywords: ["readers", "judge", "reflect", "criticise", "make us", "audience", "society"] },
        { point: "Sets up transformation / message of generosity", keywords: ["change", "transform", "redemption", "generous", "message", "moral", "christmas spirit"] },
      ],
      commonError: "Writing about Dickens's life in general instead of linking context to specific details in the extract.",
      guideRef: "non-fiction-viewpoint",
    },
  ],
};

// ---------------------------------------------------------------------------
// Written Paper 2: original fiction, "Number 47" (structure focus)
// ---------------------------------------------------------------------------

const qaP2: Paper<QA> = {
  id: "cmp-qa-p2",
  title: "Written Paper 2",
  passage: shophousePassage,
  questions: [
    {
      id: "cmp-qa-p2-q01",
      question: "Give TWO things that used to be kept in the glass jars.",
      marks: 2,
      hint: "Scan the flashback paragraph for a list inside dashes.",
      modelAnswer: "The jars held dried plums and preserved lime (and sweets wrapped in crackling paper).",
      markScheme: [
        { point: "One item from the jars", keywords: ["dried plums", "dried plum", "plums", "plum"] },
        { point: "A second item from the jars", keywords: ["preserved lime", "lime", "sweets", "crackling paper"] },
      ],
      commonError: "Listing items from the present-day room (the counter, the calendar) instead of what was in the jars.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-qa-p2-q02",
      question: "Name the THREE smells Daniel notices when he opens the door.",
      marks: 3,
      hint: "Paragraph 2, after 'smelled of'.",
      modelAnswer: "Dust, mothballs and (faintly) ginger.",
      markScheme: [
        { point: "Dust", keywords: ["dust", "dusty", "dustiness", "dusty smell"] },
        { point: "Mothballs", keywords: ["mothball", "mothballs", "moth balls", "moth-ball", "naphthalene"] },
        { point: "Ginger", keywords: ["ginger", "gingery", "root ginger", "smell of ginger"] },
      ],
      commonError: "Mentioning the gecko or traffic, which are sounds, not smells.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-qa-p2-q03",
      question: "What can you infer has happened to Ah Ma? Give evidence for your answer.",
      marks: 3,
      hint: "The text never says it directly. Look at the calendar, the empty jars and the traffic.",
      modelAnswer:
        "We can infer that Ah Ma has died, probably in March. The shophouse is empty and dusty, and 'the calendar still turned to March' suggests time stopped when she stopped running the shop. The traffic going on 'as if nothing had happened' implies that something huge has happened to Daniel, even though the outside world has not noticed.",
      markScheme: [
        { point: "Infers she has died / is gone", keywords: ["died", "dead", "death", "passed away", "gone", "no longer"] },
        { point: "Evidence: calendar/empty jars/dust: time has stopped", keywords: ["calendar", "march", "empty", "dust", "abandoned", "stopped"] },
        { point: "Evidence: 'as if nothing had happened' / Daniel's memories and grief", keywords: ["as if nothing had happened", "traffic", "memories", "grief", "remembers", "used to"] },
      ],
      commonError: "Stating 'she died' with no evidence, or quoting evidence without explaining what it implies.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-qa-p2-q04",
      question: "'faintly, impossibly, of ginger.' What does the word 'impossibly' suggest?",
      marks: 2,
      hint: "Why might the smell be impossible after months?",
      modelAnswer:
        "'Impossibly' suggests that the smell should not still be there after the shop has been closed for so long. This hints that Ah Ma's presence, or Daniel's memory of her, lingers in the building almost like a ghost.",
      markScheme: [
        { point: "The smell should not still be there / closed for a long time", keywords: ["should not", "shouldn't", "long time", "closed", "months", "not possible"] },
        { point: "Suggests her presence / memory lingers (almost ghostly)", keywords: ["presence", "memory", "ghost", "lingers", "still there", "spirit", "imagin"] },
      ],
      commonError: "Just saying 'it means it was not possible' without exploring what it suggests about Ah Ma or Daniel.",
      guideRef: "vocab-in-context",
    },
    {
      id: "cmp-qa-p2-q05",
      question: "How does the writer use language in paragraph 3 to create a sense of emptiness and loss?",
      marks: 4,
      hint: "Look at 'stretched away ... into shadow', the list of objects, the gecko, and the traffic.",
      modelAnswer:
        "The room 'stretched away from him into shadow', which makes the shop seem long, dark and lifeless, as if Daniel faces a void. The list 'the wooden counter, the empty glass jars, the calendar still turned to March' moves from object to object as his eyes adjust, and the adjectives 'empty' and 'still' show a place frozen in time. The onomatopoeic 'A gecko clicked' emphasises the silence, because a tiny sound is all there is. Finally, the traffic 'went on as if nothing had happened', a contrast suggesting the outside world is indifferent to Daniel's private loss.",
      markScheme: [
        { point: "'stretched ... into shadow': long, dark, lifeless", keywords: ["shadow", "stretched", "dark", "lifeless", "void", "gloom"] },
        { point: "List of objects / 'empty', 'still': frozen in time", keywords: ["list", "empty", "still turned", "frozen", "calendar", "jars"] },
        { point: "Gecko 'clicked': silence emphasised", keywords: ["gecko", "clicked", "onomatopoeia", "silence", "quiet", "sound"] },
        { point: "Traffic contrast: world indifferent to his loss", keywords: ["traffic", "as if nothing", "contrast", "indifferent", "outside world", "carries on"] },
      ],
      commonError: "Writing about the whole extract instead of the paragraph named in the question.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-qa-p2-q06",
      question: "Paragraph 4 is a flashback. Why do you think the writer places it here?",
      marks: 4,
      hint: "Compare the jars in the present ('empty') with the jars in the flashback ('glowing like lanterns').",
      modelAnswer:
        "The shift into the past ('He was seven the first time...') is a flashback that interrupts Daniel's view of the empty shop. It creates a strong contrast: in the present the jars are 'empty', but in the memory they glow 'like lanterns', so the reader feels how much warmth has been lost. It also fills in the backstory of their close relationship, shown through the abacus and Ah Ma's teasing advice. Finally, it reveals Daniel's guilt, because he stopped coming when he 'decided he was too old', which explains why returning is so emotional for him.",
      markScheme: [
        { point: "Identifies the shift into the past / flashback", keywords: ["flashback", "past", "memory", "he was seven", "shift", "back in time"] },
        { point: "Contrast between warm past and empty present", keywords: ["contrast", "lanterns", "glowing", "empty", "warmth", "then and now"] },
        { point: "Gives backstory of their relationship", keywords: ["relationship", "backstory", "close", "abacus", "taught", "saturday"] },
        { point: "Reveals guilt / explains present emotion", keywords: ["guilt", "regret", "too old", "phone", "stopped", "ashamed"] },
      ],
      commonError: "Retelling the flashback instead of explaining why it is placed at this point.",
      guideRef: "structure",
    },
    {
      id: "cmp-qa-p2-q07",
      question: "'She had not complained. She had simply kept a jar of preserved lime on the top shelf, just in case.' What does this reveal about Ah Ma?",
      marks: 3,
      hint: "What is she hoping for 'just in case'?",
      modelAnswer:
        "It shows that Ah Ma was patient and forgiving, because she 'had not complained' when Daniel stopped coming. Keeping his favourite treat 'just in case' shows her quiet love and hope that he would return. The understated way it is told, with the word 'simply', makes her love more touching and increases Daniel's guilt.",
      markScheme: [
        { point: "Patient / forgiving / did not blame him", keywords: ["patient", "forgiving", "forgave", "not complain", "accepting", "understanding"] },
        { point: "Loving / hoping he would return", keywords: ["love", "hope", "hoped", "return", "come back", "waiting", "cared"] },
        { point: "Effect of understatement ('simply') / adds to guilt", keywords: ["simply", "quiet", "understated", "guilt", "touching", "moving"] },
      ],
      commonError: "Saying she 'didn't care' because she didn't complain, which ignores the jar kept 'just in case'.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-qa-p2-q08",
      question: "'Daniel crossed the room. The jar was still there.' Why is this one-line paragraph effective?",
      marks: 2,
      hint: "What happens to the pace? Why is the jar important?",
      modelAnswer:
        "The two short sentences slow the pace and create a pause of tension, as if Daniel is holding his breath. Isolating them highlights the climax: the jar is a symbol of Ah Ma's patient love, and finding it 'still there' carries great emotional weight.",
      markScheme: [
        { point: "Short sentences/one-line paragraph slow pace or create tension/pause", keywords: ["short", "pause", "slow", "tension", "pace", "isolat"] },
        { point: "Emphasises the jar as a symbol / emotional climax", keywords: ["symbol", "climax", "emotional", "love", "still there", "emphasis"] },
      ],
      commonError: "Saying 'it's short so it's dramatic' without explaining why this moment matters.",
      guideRef: "structure",
    },
    {
      id: "cmp-qa-p2-q09",
      question: "How does the writer use a cyclical (circular) structure in this extract, and why?",
      marks: 5,
      hint: "Compare the first and last paragraphs: the key, the door, and what Daniel does differently.",
      modelAnswer:
        "The extract begins with the key that 'still stuck' and Daniel jiggling it 'the way she used to'. It ends with him fighting the same key ('up, left, a hard shove'), so the story comes full circle. However, the repetition contains a change: at the start he opens the door hesitantly into the past, but at the end he locks it 'carefully', suggesting he now takes responsibility for her memory. The jar he carries out shows what he has gained. The final line, 'Some things, he decided, you keep', gives a sense of resolution and the theme that love and memory should be treasured.",
      markScheme: [
        { point: "Identifies the opening image (key sticking / opening the door)", keywords: ["key", "stuck", "opening", "begins", "start", "door"] },
        { point: "Identifies the repetition at the end", keywords: ["repeat", "echo", "end", "up, left", "full circle", "returns"] },
        { point: "Explains the change: locks it carefully / responsibility", keywords: ["carefully", "locks", "change", "different", "responsib", "grown"] },
        { point: "Links to the jar / what he takes away", keywords: ["jar", "takes", "carries", "lime", "keeps", "gained"] },
        { point: "Explains the resolution or theme of the final line", keywords: ["resolution", "you keep", "theme", "memory", "treasure", "acceptance"] },
      ],
      commonError: "Noticing that the key appears twice but not explaining what has CHANGED between the beginning and the end.",
      guideRef: "structure",
    },
    {
      id: "cmp-qa-p2-q10",
      question: "In your own words, summarise Daniel's relationship with Ah Ma.",
      marks: 4,
      hint: "Four stages: as a child, the lessons, drifting apart, now.",
      modelAnswer:
        "When Daniel was young, he and his grandmother were very close, and he helped her in the shop every Saturday. She trusted him and taught him to count carefully. As a teenager he lost interest and stopped visiting, but she kept hoping he would come back. Now that she is gone, he feels regret and treasures what she left behind.",
      markScheme: [
        { point: "Close when young / helped every week", keywords: ["close", "helped", "every saturday", "weekly", "young", "child"] },
        { point: "She taught / trusted him", keywords: ["taught", "trusted", "count", "lessons", "showed", "trust"] },
        { point: "He drifted away as he grew older", keywords: ["stopped", "drifted", "lost interest", "older", "teenager", "stayed at home"] },
        { point: "She kept hoping / he now feels regret and treasures her memory", keywords: ["regret", "guilt", "treasure", "memory", "hoping", "values"] },
      ],
      commonError: "Quoting the abacus line instead of summarising in your own words.",
      guideRef: "summary-evaluation",
    },
    {
      id: "cmp-qa-p2-q11",
      question: "'The real subject of this extract is guilt rather than grief.' How far do you agree?",
      marks: 6,
      hint: "Find evidence of both guilt and grief. Which is stronger, and does the ending change things?",
      modelAnswer:
        "I partly agree. Guilt runs through the extract: the flashback ends with Daniel staying home 'with his phone instead', and Ah Ma's patient jar 'just in case' makes his neglect painful. However, grief is just as present: the empty shop, the calendar frozen in March and the 'impossibly' lingering smell of ginger show his sense of loss. The jar itself combines both feelings, because it reminds him of her love and of what he failed to give back. The ending suggests he moves beyond guilt towards acceptance: he locks the door 'carefully' and decides 'Some things... you keep'. Overall, I think the extract is about grief deepened by guilt, ending in a quiet sense of peace.",
      markScheme: [
        { point: "Clear judgement", keywords: ["agree", "disagree", "partly", "to some extent", "largely", "overall"] },
        { point: "Evidence of guilt", keywords: ["guilt", "phone", "too old", "stopped", "regret", "neglect"] },
        { point: "Evidence of grief / loss", keywords: ["grief", "loss", "empty", "calendar", "ginger", "mourning"] },
        { point: "Discusses the jar as combining both / symbol", keywords: ["jar", "symbol", "both", "combines", "lime", "just in case"] },
        { point: "Considers the ending (acceptance / resolution)", keywords: ["ending", "carefully", "you keep", "acceptance", "peace", "resolution"] },
        { point: "Weighs sides and reaches a balanced conclusion", keywords: ["however", "although", "on the other hand", "balance", "whereas", "conclusion"] },
      ],
      commonError: "Writing only about guilt (or only about grief) and ignoring the 'rather than' in the question.",
      guideRef: "summary-evaluation",
    },
    {
      id: "cmp-qa-p2-q12",
      question: "Creative task: write a one-line final paragraph for a different story about returning to an old place, then explain in one sentence why it works.",
      marks: 3,
      hint: "Short, resonant and linked to a feeling. Then say what it does to the reader.",
      modelAnswer:
        "Final line: 'The swing was still there; only I had grown.' This one-line ending works because its short, balanced structure isolates the moment and leaves the reader reflecting on how time changes us while places stay the same.",
      markScheme: [
        { point: "Writes a short, single-line ending", keywords: ["still", "only", "never", "again", "always", "last", "gone"] },
        { point: "Explains the effect (emphasis / reflection / lingering)", keywords: ["effect", "emphasis", "reflect", "lingers", "stand out", "isolat", "impact"] },
        { point: "Links to a theme or feeling (time, memory, change, loss)", keywords: ["time", "memory", "change", "loss", "grown", "nostalgia", "past"] },
      ],
      commonError: "Writing a long paragraph instead of one line, or forgetting to explain the effect.",
      guideRef: "structure",
    },
  ],
};

// ---------------------------------------------------------------------------
// Written Paper 3: original opinion article, "Switch Off the Sky"
// ---------------------------------------------------------------------------

const qaP3: Paper<QA> = {
  id: "cmp-qa-p3",
  title: "Written Paper 3",
  passage: lightPassage,
  questions: [
    {
      id: "cmp-qa-p3-q01",
      question: "Apart from humans, name TWO creatures that the writer says are harmed by artificial light.",
      marks: 2,
      hint: "Scan paragraph 4.",
      modelAnswer: "Migrating birds and baby turtles.",
      markScheme: [
        { point: "Migrating birds", keywords: ["bird", "birds", "migrating", "migratory"] },
        { point: "Baby turtles / hatchlings", keywords: ["turtle", "turtles", "hatchling", "hatching", "baby turtles"] },
      ],
      commonError: "Writing 'stargazers', who are people, not creatures.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-qa-p3-q02",
      question: "According to paragraph 2, what TWO things did the 2016 study report about Singapore?",
      marks: 2,
      hint: "One is a ranking; the other is about people's eyes.",
      modelAnswer:
        "It named Singapore the most light-polluted country on Earth, and it reported that the nights are so bright that people's eyes never fully adjust to darkness.",
      markScheme: [
        { point: "Most light-polluted country", keywords: ["most light-polluted", "most light polluted", "most polluted", "worst", "number one", "highest"] },
        { point: "Eyes never fully adjust to darkness", keywords: ["eyes", "adjust", "adapt", "darkness", "never fully", "dark"] },
      ],
      commonError: "Including the writer's comment 'We have... abolished the night', which is an opinion, not the study's finding.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-qa-p3-q03",
      question: "Find ONE fact and ONE opinion from the article, and explain how you can tell the difference.",
      marks: 3,
      hint: "Can it be checked, or could someone reasonably disagree?",
      modelAnswer:
        "Fact: 'In 2016, scientists publishing a world atlas of night-sky brightness named Singapore the most light-polluted country on Earth.' Opinion: 'The solution is embarrassingly simple.' The first can be checked by looking up the study, whereas the second is the writer's judgement; a business owner might argue the solution is complicated and expensive.",
      markScheme: [
        { point: "A correct fact", keywords: ["2016", "scientists", "atlas", "migrating birds", "turtles", "linked artificial light", "disrupted sleep"] },
        { point: "A correct opinion", keywords: ["embarrassingly simple", "stealing something precious", "abolished the night", "worth flicking", "honest answer", "precious"] },
        { point: "Explains the difference: checkable vs judgement/disputable", keywords: ["checked", "proved", "proven", "verified", "judgement", "disagree", "belief"] },
      ],
      commonError: "Choosing a sentence that mixes fact and opinion, or giving no explanation of how you know.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-qa-p3-q04",
      question: "'We have, in effect, abolished the night.' What does 'abolished' mean, and why is it a powerful word choice here?",
      marks: 2,
      hint: "What kinds of things are usually 'abolished'?",
      modelAnswer:
        "'Abolished' means officially got rid of or ended for good, as with a law. Using it for the night is a deliberate exaggeration that makes light pollution sound like a huge, deliberate decision to destroy something natural, which shocks the reader.",
      markScheme: [
        { point: "Meaning: got rid of / ended completely", keywords: ["got rid", "ended", "ended completely", "eliminated", "removed", "destroyed", "cancelled"] },
        { point: "Effect: dramatic / exaggeration / shocking, treats nature as something cancelled by humans", keywords: ["exaggerat", "hyperbole", "dramatic", "shock", "deliberate", "law", "powerful"] },
      ],
      commonError: "Giving the meaning but not explaining why the word is effective in this context.",
      guideRef: "vocab-in-context",
    },
    {
      id: "cmp-qa-p3-q05",
      question: "'every advertising screen shouting at an empty street at 3 a.m. is wasting electricity — and stealing something precious.' Analyse how language is used to persuade in this sentence.",
      marks: 4,
      hint: "Look at 'shouting', 'empty street at 3 a.m.', 'stealing' and 'precious'.",
      modelAnswer:
        "The personification of screens 'shouting' makes them sound loud, aggressive and rude, as if they are bullying the city. Placing them at 'an empty street at 3 a.m.' shows how pointless this is, because nobody is there to see the adverts, so the waste seems absurd. The dash builds to a second, stronger accusation: the lights are 'stealing', a verb that turns light pollution into a crime. Finally, 'something precious' presents the dark night sky as a treasure that belongs to everyone, which makes the reader feel robbed.",
      markScheme: [
        { point: "'Shouting': personification makes screens aggressive / loud", keywords: ["shouting", "personification", "aggressive", "loud", "rude", "bully"] },
        { point: "'Empty street at 3 a.m.': pointless waste / absurd", keywords: ["empty", "3 a.m", "nobody", "no one", "pointless", "absurd", "waste"] },
        { point: "'Stealing': crime / moral wrong", keywords: ["stealing", "steal", "crime", "theft", "robbed", "wrong"] },
        { point: "'Precious': night sky as treasure / dash builds emphasis", keywords: ["precious", "treasure", "valuable", "dash", "emphasis", "build"] },
      ],
      commonError: "Commenting on only one word, or calling 'shouting' onomatopoeia.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-qa-p3-q06",
      question: "How does the writer deal with the counter-argument in paragraph 3?",
      marks: 4,
      hint: "Concede, reassure, rebut.",
      modelAnswer:
        "The writer first concedes the opposing view with 'Of course, light keeps us safe', which shows fairness. They then reassure the reader that 'nobody is suggesting' we walk home in darkness, removing the fear that the idea is extreme. Next comes the rebuttal: there is 'a difference between lighting a path and lighting the sky', a neat, balanced distinction that narrows the argument to wasteful light only. This makes the writer seem reasonable and therefore more convincing.",
      markScheme: [
        { point: "Concedes ('Of course, light keeps us safe')", keywords: ["concede", "of course", "admits", "acknowledge", "safe", "accepts"] },
        { point: "Reassures ('nobody is suggesting')", keywords: ["reassure", "nobody is suggesting", "not suggesting", "pitch-black", "extreme"] },
        { point: "Rebuts with distinction path vs sky", keywords: ["rebut", "but there is a difference", "path", "lighting the sky", "distinction", "counter"] },
        { point: "Effect: seems reasonable / fair / credible", keywords: ["reasonable", "fair", "credible", "balanced", "trust", "convincing"] },
      ],
      commonError: "Just saying 'the writer gives the other side' without explaining how the writer then turns it to their advantage.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-qa-p3-q07",
      question: "Identify THREE persuasive techniques in the final paragraph and briefly explain the effect of each.",
      marks: 3,
      hint: "Look at 'Imagine it', 'for the first time in your life', and the final sentence.",
      modelAnswer:
        "The imperative 'Imagine it' invites the reader to picture the scene, so they experience the benefit for themselves. The direct address 'for the first time in your life' makes it personal and emotive, stressing what the reader has missed. The closing rhetorical question, 'Isn't that worth flicking a switch?', makes disagreement seem unreasonable, because the answer appears obviously 'yes'.",
      markScheme: [
        { point: "Imperative 'Imagine it': reader pictures the scene", keywords: ["imperative", "imagine", "command", "picture", "visualise", "visualize"] },
        { point: "Direct address / emotive 'your life'", keywords: ["direct address", "your life", "you", "personal", "emotive", "first time"] },
        { point: "Rhetorical question: answer seems obvious", keywords: ["rhetorical question", "isn't that worth", "obvious", "flicking", "question"] },
      ],
      commonError: "Naming techniques with no comment on their effect.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-qa-p3-q08",
      question: "In your own words, summarise the problems caused by excessive light at night AND the solutions the writer suggests.",
      marks: 4,
      hint: "Two problems, two solutions is a good balance. Keep it concise.",
      modelAnswer:
        "Too much light at night wastes energy and stops people seeing the stars. It can also disturb human sleep and confuse wildlife such as birds and newly hatched turtles. The writer suggests pointing street lamps downwards, turning off lights in empty offices and dimming large screens late at night.",
      markScheme: [
        { point: "Wastes energy / hides the stars", keywords: ["wastes", "energy", "electricity", "stars", "milky way", "night sky"] },
        { point: "Harms human sleep", keywords: ["sleep", "rest", "tired", "health", "insomnia"] },
        { point: "Confuses wildlife (birds/turtles)", keywords: ["wildlife", "animals", "birds", "turtles", "nature", "confus"] },
        { point: "Solutions: shield/point lamps down, switch off offices, dim screens", keywords: ["shield", "point down", "downwards", "switch off", "turn off", "dim", "screens"] },
      ],
      commonError: "Copying sentences from the article, or forgetting half of the question (the solutions).",
      guideRef: "summary-evaluation",
    },
    {
      id: "cmp-qa-p3-q09",
      question: "Who do you think is the intended audience of this article, and what is its main purpose?",
      marks: 2,
      hint: "Who is 'you' and 'our'? What does the writer want them to think or do?",
      modelAnswer:
        "The audience is people living in Singapore, especially ordinary residents and young readers (the writer says 'If you live in Singapore' and 'for the first time in your life'). The main purpose is to persuade them that light pollution is a problem and to support simple changes to reduce it.",
      markScheme: [
        { point: "Audience: people living in Singapore / general public / young people", keywords: ["singapore", "residents", "public", "young", "readers", "citizens", "people who live"] },
        { point: "Purpose: to persuade / argue for reducing light pollution", keywords: ["persuade", "convince", "argue", "change", "reduce", "action"] },
      ],
      commonError: "Saying the purpose is only 'to inform', which ignores the strongly opinionated language.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-qa-p3-q10",
      question: "How does the writer open the article to engage the reader?",
      marks: 4,
      hint: "Look at the first two paragraphs: a question, an answer, a fact and a dramatic claim.",
      modelAnswer:
        "The article opens with a direct question, 'When did you last see the Milky Way?', which immediately involves the reader personally. The blunt answer 'never' is surprising and makes Singaporean readers realise what they have lost. The writer then adds authority with a fact from a 2016 scientific study, which makes the problem seem real rather than just opinion. Paragraph 2 ends with the dramatic claim 'We have, in effect, abolished the night', a memorable line that raises the stakes and makes us read on.",
      markScheme: [
        { point: "Opening question / direct address involves reader", keywords: ["question", "milky way", "direct address", "personal", "involve", "engage"] },
        { point: "Surprising answer 'never'", keywords: ["never", "surprising", "shock", "realise", "realize", "honest answer"] },
        { point: "Authoritative fact / study adds credibility", keywords: ["2016", "study", "scientists", "fact", "evidence", "credib", "authority"] },
        { point: "Dramatic claim 'abolished the night'", keywords: ["abolished", "dramatic", "hyperbole", "exaggerat", "memorable", "stakes"] },
      ],
      commonError: "Describing what the opening says rather than how it engages the reader.",
      guideRef: "structure",
    },
    {
      id: "cmp-qa-p3-q11",
      question: "'The writer's argument is completely convincing.' How far do you agree?",
      marks: 6,
      hint: "Look at strengths (evidence, concession, simple solutions) and weaknesses (vague claims, missing viewpoints).",
      modelAnswer:
        "I mostly agree, but not completely. The argument is strengthened by expert evidence: the 2016 world atlas gives the claim scientific authority. The writer also seems fair by conceding that 'light keeps us safe', and the solutions ('Shield street lamps', 'Dim the giant screens') sound practical and cheap. However, some claims are vague: 'Scientists have linked' gives no figures or names, so a sceptical reader might want more proof. The writer also ignores other viewpoints, such as businesses that rely on bright advertising or tourists who come to see the lit-up skyline. Overall, it is highly persuasive for an ordinary reader, but a more balanced article would deal with the economic cost.",
      markScheme: [
        { point: "Clear judgement", keywords: ["agree", "disagree", "mostly", "partly", "largely", "not completely", "overall"] },
        { point: "Strength: expert / scientific evidence", keywords: ["2016", "study", "scientists", "evidence", "atlas", "expert"] },
        { point: "Strength: concession and practical solutions", keywords: ["concede", "of course", "solutions", "practical", "simple", "fair"] },
        { point: "Weakness: vague evidence / lacks figures", keywords: ["vague", "no figures", "statistics", "linked", "proof", "sceptical", "skeptical"] },
        { point: "Weakness: ignores other viewpoints (business, tourism, cost)", keywords: ["business", "tourism", "tourists", "cost", "advertis", "ignores", "economy"] },
        { point: "Balanced, reasoned conclusion", keywords: ["however", "overall", "on the other hand", "although", "balance", "conclusion"] },
      ],
      commonError: "Writing a list of persuasive techniques without evaluating whether the argument actually works.",
      guideRef: "summary-evaluation",
    },
    {
      id: "cmp-qa-p3-q12",
      question: "Creative task: write a 2–3 sentence counter-argument from the viewpoint of a shopping-mall manager who wants to keep the screens bright.",
      marks: 3,
      hint: "Give a clear opposing view, at least one reason, and one persuasive technique.",
      modelAnswer:
        "Our glowing city is not a mistake; it is the reason millions of tourists come here. Bright screens keep our streets lively and safe, support thousands of jobs and help local businesses survive. Would you really switch off the skyline that the whole world photographs?",
      markScheme: [
        { point: "Clear opposing viewpoint", keywords: ["not a mistake", "keep", "should stay", "need", "disagree", "important", "bright"] },
        { point: "At least one reason (tourism, jobs, safety, business)", keywords: ["tourist", "jobs", "business", "safe", "economy", "income", "customers"] },
        { point: "Uses a persuasive technique (rhetorical question, list, emotive language)", keywords: ["would you", "really", "imagine", "our city", "whole world", "millions", "rhetorical"] },
      ],
      commonError: "Accidentally agreeing with the original article instead of arguing the opposite side.",
      guideRef: "non-fiction-viewpoint",
    },
  ],
};

// ---------------------------------------------------------------------------
// Written Paper 4: original travel writing, "A Morning on Pulau Ubin"
// ---------------------------------------------------------------------------

const qaP4: Paper<QA> = {
  id: "cmp-qa-p4",
  title: "Written Paper 4",
  passage: ubinPassage,
  questions: [
    {
      id: "cmp-qa-p4-q01",
      question: "(a) How many passengers does the bumboat wait for? (b) How long is the crossing?",
      marks: 2,
      hint: "Both answers are in the first paragraph.",
      modelAnswer: "(a) Twelve passengers. (b) About ten minutes.",
      markScheme: [
        { point: "Twelve passengers", keywords: ["twelve", "12", "twelve passengers", "12 passengers"] },
        { point: "Ten minutes", keywords: ["ten minutes", "10 minutes", "ten min", "10 min"] },
      ],
      commonError: "Writing 'fifty' (from 'fifty years') for the crossing time.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-qa-p4-q02",
      question: "Name THREE creatures the writer sees from the boardwalk at Chek Jawa.",
      marks: 3,
      hint: "Look for the list after 'the mud below is alive:'.",
      modelAnswer: "Fiddler crabs, mudskippers and a heron.",
      markScheme: [
        { point: "Fiddler crabs", keywords: ["fiddler", "crab", "crabs", "fiddler crabs"] },
        { point: "Mudskippers", keywords: ["mudskipper", "mudskippers", "mud skipper", "skippers"] },
        { point: "A heron", keywords: ["heron", "herons", "bird", "wading bird"] },
      ],
      commonError: "Including the monitor lizard or the dog, which are seen on the road, not at Chek Jawa.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-qa-p4-q03",
      question: "The writer says the island 'feels like travelling back fifty years'. Give THREE details from the text that support this impression.",
      marks: 3,
      hint: "Look for things that seem old-fashioned compared with modern Singapore.",
      modelAnswer:
        "The boat has 'no timetable' and only leaves when full; the bicycles are 'battered' with an old-fashioned bell; and there are wooden 'kampong houses' on stilts and rubber trees 'scarred by old tapping marks'.",
      markScheme: [
        { point: "No timetable / boat leaves when full", keywords: ["timetable", "twelve passengers", "waits", "when full", "boatman"] },
        { point: "Battered bikes / bicycle hire / old bell", keywords: ["battered", "bicycle", "bike", "bell", "hire"] },
        { point: "Kampong houses on stilts / rubber trees / tapping marks / village", keywords: ["kampong", "stilts", "wooden", "rubber", "tapping", "village"] },
      ],
      commonError: "Choosing details about wildlife, which don't show the past, instead of old-fashioned human details.",
      guideRef: "retrieval-inference",
    },
    {
      id: "cmp-qa-p4-q04",
      question: "Analyse how the writer creates humour in 'a bell that sounds like a disappointed duck' and 'with the unhurried dignity of a retired headmaster'.",
      marks: 4,
      hint: "Both images give animals or objects human feelings or roles. Why is that funny?",
      modelAnswer:
        "The simile 'like a disappointed duck' is comic because it compares a bell, which should ring brightly, to a flat, sad quack; giving the duck a human emotion, 'disappointed', adds to the joke and shows the writer laughing at their own cheap bike. The monitor lizard is personified as a 'retired headmaster', whose slow, pompous 'unhurried dignity' captures the lizard's lazy walk and makes it seem self-important. Together these images create a relaxed, affectionate tone that makes the island charming and the narrator likeable.",
      markScheme: [
        { point: "Duck simile: bell sounds flat / unimpressive (comic)", keywords: ["simile", "duck", "quack", "flat", "unimpressive", "comic", "funny"] },
        { point: "'Disappointed': human emotion / self-mocking", keywords: ["disappointed", "emotion", "human", "self-mocking", "laughing at", "cheap"] },
        { point: "Lizard personified as headmaster: slow, pompous, self-important", keywords: ["headmaster", "personif", "slow", "pompous", "dignity", "self-important", "unhurried"] },
        { point: "Overall effect: affectionate, relaxed tone / engages reader", keywords: ["tone", "affectionate", "relaxed", "charming", "likeable", "engag", "warm"] },
      ],
      commonError: "Saying 'this is funny' without explaining WHY the comparison is funny.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-qa-p4-q05",
      question: "'Then the engine coughs into life'. What does the verb 'coughs' suggest about the boat?",
      marks: 2,
      hint: "When do people cough? What does that suggest about an engine?",
      modelAnswer:
        "'Coughs' personifies the engine as if it were an old or sick person, suggesting the boat is old, noisy and struggles to start. This fits the island's old-fashioned, unpolished character.",
      markScheme: [
        { point: "Engine is old / struggling / noisy", keywords: ["old", "struggl", "noisy", "splutter", "unreliable", "worn"] },
        { point: "Personification / fits rustic, old-fashioned feel", keywords: ["personif", "human", "sick", "rustic", "old-fashioned", "simple", "character"] },
      ],
      commonError: "Saying 'it makes it sound like a cough' without explaining what that implies.",
      guideRef: "vocab-in-context",
    },
    {
      id: "cmp-qa-p4-q06",
      question: "How has the writer structured this piece of travel writing to interest the reader?",
      marks: 4,
      hint: "Track the journey and the time. Where does it begin and end, and how does the final paragraph differ?",
      modelAnswer:
        "The piece follows the journey in chronological order, from the bumboat to the jetty, along the road and finally to Chek Jawa, so the reader feels they are travelling with the writer. Time markers such as 'By ten o'clock' show the morning progressing and the heat building. The focus gradually moves away from the city ('slides away behind us') towards wilder nature, ending at the sea's edge. The final paragraphs shift from description to reflection, contrasting 'the hum of a city of six million people' with a single crab, and the one-line ending delivers the writer's verdict.",
      markScheme: [
        { point: "Chronological journey order (boat → jetty → road → Chek Jawa)", keywords: ["chronolog", "journey", "order", "jetty", "boat", "follows"] },
        { point: "Time markers show progression", keywords: ["ten o'clock", "time", "morning", "heat building", "progress", "marker"] },
        { point: "Movement from city to wild nature", keywords: ["city", "nature", "slides away", "wild", "away from", "mangroves"] },
        { point: "Ending shifts to reflection / contrast / one-line paragraph", keywords: ["reflect", "ending", "contrast", "one-line", "final", "verdict", "six million"] },
      ],
      commonError: "Writing only about language features such as similes when the question is about structure.",
      guideRef: "structure",
    },
    {
      id: "cmp-qa-p4-q07",
      question: "How does the writer use language to make Chek Jawa seem full of life?",
      marks: 5,
      hint: "Look at 'the mud below is alive', the list of creatures, the verbs and the heron.",
      modelAnswer:
        "The metaphor 'the mud below is alive' transforms something we expect to be dull into a living world, which prepares us for the busy scene. A list of three creatures follows ('fiddler crabs..., mudskippers..., a heron'), giving a sense of variety and abundance. Dynamic present-participle verbs such as 'waving' and 'flicking themselves from puddle to puddle' create constant, playful movement. In contrast, the simile 'as still as a statue' shows the heron completely motionless, and this contrast makes the movement around it even more vivid. The present tense throughout makes the scene feel immediate, as if we are standing on the boardwalk.",
      markScheme: [
        { point: "Metaphor 'the mud below is alive'", keywords: ["alive", "metaphor", "mud", "living", "teeming"] },
        { point: "List of creatures: variety / abundance", keywords: ["list", "variety", "abundance", "three", "tricolon", "many"] },
        { point: "Dynamic verbs 'waving', 'flicking'", keywords: ["waving", "flicking", "verbs", "movement", "dynamic", "busy"] },
        { point: "Simile 'still as a statue' as contrast", keywords: ["statue", "still", "simile", "contrast", "motionless", "heron"] },
        { point: "Present tense / immediacy", keywords: ["present tense", "immediate", "now", "as if we", "reader is there", "vivid"] },
      ],
      commonError: "Listing the creatures (retrieval) instead of analysing the language used to describe them.",
      guideRef: "language-analysis",
    },
    {
      id: "cmp-qa-p4-q08",
      question: "'I know which one I would rather listen to.' Explain how this ending reveals the writer's viewpoint.",
      marks: 3,
      hint: "Which 'one'? Look at the paragraph before.",
      modelAnswer:
        "The ending shows that the writer prefers the peace of nature on Ubin to the noise of modern Singapore. The previous paragraph contrasts 'the hum of a city of six million people' with a single crab 'waving at the sea', and the writer chooses the crab. Because the viewpoint is stated indirectly, in a short one-line paragraph, the ending is gently humorous and leaves the reader to finish the thought.",
      markScheme: [
        { point: "Prefers nature / Ubin over the city", keywords: ["prefer", "nature", "crab", "rather", "peace", "quiet", "ubin"] },
        { point: "Refers to the contrast city hum vs crab", keywords: ["contrast", "hum", "six million", "city", "noise", "waving"] },
        { point: "Effect of understated / one-line / humorous ending", keywords: ["one-line", "short", "humour", "humor", "indirect", "understated", "reader"] },
      ],
      commonError: "Saying the writer hates Singapore. The tone is gentle, not hostile.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-qa-p4-q09",
      question: "Give ONE fact and ONE opinion from the text.",
      marks: 2,
      hint: "Facts: numbers and places. Opinions: feelings and judgements.",
      modelAnswer:
        "Fact: the bumboat leaves from Changi Point and waits for twelve passengers. Opinion: the island 'feels like travelling back fifty years'.",
      markScheme: [
        { point: "A fact", keywords: ["twelve", "changi", "chek jawa", "six million", "boardwalk", "mangroves", "bicycle-hire"] },
        { point: "An opinion", keywords: ["feels like", "rather listen", "disappointed duck", "dignity", "would rather", "i know which"] },
      ],
      commonError: "Choosing a description (e.g. 'the slow slap of green water') and calling it an opinion without explanation.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-qa-p4-q10",
      question: "In your own words, summarise what a visitor can do on Pulau Ubin, according to the writer.",
      marks: 4,
      hint: "Four activities, in your own words.",
      modelAnswer:
        "A visitor can take a small boat across from the mainland and rent a cheap bicycle near the pier. They can cycle past old village homes and fruit and rubber trees, spotting animals such as lizards on the way. At the eastern tip, they can walk along a raised path over the mangrove swamp and watch crabs, fish and birds in the mud.",
      markScheme: [
        { point: "Take a boat across", keywords: ["boat", "ferry", "cross", "bumboat", "sail"] },
        { point: "Hire / ride a bicycle", keywords: ["bicycle", "bike", "cycle", "hire", "rent", "ride"] },
        { point: "See village houses / trees / animals on the way", keywords: ["village", "houses", "kampong", "trees", "lizard", "wildlife"] },
        { point: "Walk the boardwalk over mangroves / watch creatures", keywords: ["boardwalk", "walkway", "mangrove", "wetland", "crabs", "birds", "path"] },
      ],
      commonError: "Including the writer's jokes and feelings, which don't belong in a summary of activities.",
      guideRef: "summary-evaluation",
    },
    {
      id: "cmp-qa-p4-q11",
      extract:
        "From Captain Scott's journal (1912): 'Great God! this is an awful place' ... 'outside the door of the tent it remains a scene of whirling drift.'",
      question: "Compare how the natural environment is presented in 'A Morning on Pulau Ubin' and in the lines from Captain Scott's journal.",
      marks: 6,
      hint: "Compare attitude, language and purpose. Use comparative connectives such as 'whereas' and 'similarly'.",
      modelAnswer:
        "Both writers describe nature from first-hand experience, but their attitudes are opposite. On Ubin nature is welcoming and full of life: 'the mud below is alive', and creatures are described with affection. Scott's Antarctica, by contrast, is hostile: he calls it 'an awful place', and the 'whirling drift' traps the men in their tent. The Ubin writer's tone is relaxed and humorous, whereas Scott's is despairing and stoical. Their purposes also differ: the travel writer wants to entertain readers and make them appreciate nature, whereas Scott is recording a desperate struggle for survival, partly for future readers. Ultimately the Ubin writer escapes into nature, while Scott is destroyed by it.",
      markScheme: [
        { point: "Ubin: nature welcoming / alive, with evidence", keywords: ["alive", "welcoming", "peaceful", "crab", "mangrove", "pleasant"] },
        { point: "Scott: nature hostile / deadly, with evidence", keywords: ["awful", "hostile", "deadly", "whirling drift", "blizzard", "trapped", "dangerous"] },
        { point: "Contrasts tone (humorous/relaxed vs despairing/stoical)", keywords: ["tone", "humorous", "relaxed", "despair", "stoical", "stoic", "desperate"] },
        { point: "Contrasts purpose / form (travel writing vs journal)", keywords: ["purpose", "travel writing", "journal", "diary", "entertain", "record", "survival"] },
        { point: "Uses comparative connectives", keywords: ["whereas", "by contrast", "in contrast", "similarly", "while", "both", "unlike"] },
        { point: "Overall comparative judgement", keywords: ["ultimately", "overall", "opposite", "escapes", "destroyed", "conclusion"] },
      ],
      commonError: "Writing about each text separately with no comparison between them.",
      guideRef: "non-fiction-viewpoint",
    },
    {
      id: "cmp-qa-p4-q12",
      question: "'The writer's main purpose is to persuade readers to visit Pulau Ubin.' How far do you agree?",
      marks: 5,
      hint: "Is it an advert? Look for both appealing and unappealing details, and the reflective ending.",
      modelAnswer:
        "I only partly agree. Some details are certainly appealing: the vivid wildlife at Chek Jawa and the humorous characters make the island sound charming, and readers may want to go. However, the writer also includes honest, unglamorous details ('battered mountain bikes', 'sweat running into my eyes'), which an advert would leave out. The ending is not a call to action like 'Go now!', but a quiet personal reflection on preferring nature to the city. So I think the main purpose is to entertain and to share a personal experience that makes readers think about modern city life; persuading them to visit is only a side effect.",
      markScheme: [
        { point: "Clear judgement", keywords: ["agree", "disagree", "partly", "to some extent", "largely", "only partly"] },
        { point: "Evidence of persuasive / appealing details", keywords: ["appealing", "charming", "wildlife", "chek jawa", "want to go", "attractive"] },
        { point: "Evidence of honest / unglamorous details", keywords: ["battered", "sweat", "heat", "honest", "unglamorous", "negative"] },
        { point: "Ending is reflection, not call to action", keywords: ["reflection", "reflect", "ending", "no call to action", "personal", "rather listen"] },
        { point: "Identifies alternative main purpose (entertain / reflect / share experience)", keywords: ["entertain", "share", "experience", "describe", "think about", "city life"] },
      ],
      commonError: "Assuming all travel writing is an advert and ignoring the writer's personal, reflective voice.",
      guideRef: "summary-evaluation",
    },
  ],
};

// ---------------------------------------------------------------------------
// The topic
// ---------------------------------------------------------------------------

export const comprehension: Topic = {
  id: "comprehension",
  title: "Reading Comprehension",
  subject: "Skills",
  icon: "🔎",
  summary: "Retrieve, infer, analyse language and structure, summarise and evaluate any text.",
  intro:
    "Every English exam you will ever sit begins with a text you have never seen before, and a set of questions designed to find out how closely you can read it. Good comprehension is not a talent you either have or lack: it is a set of learnable moves, from scanning for a detail in seconds to explaining exactly why one word was chosen over another. Master these moves on Dickens, Jack London, Captain Scott and texts set right here in Singapore, and you will be able to read any passage like a detective.",

  guide: [
    {
      id: "question-types",
      heading: "Decode the question: seven question types",
      body:
        "Before you write a single word, work out **what kind of question** you are being asked. Every comprehension paper is built from the same seven types, and each one wants a different kind of answer.\n\n- **Retrieval** (\"List four things...\", \"Give two...\", \"What time...\"): find information that is stated **directly** in the text. Short, precise answers. No analysis.\n- **Inference** (\"What does this suggest...\", \"What can you infer...\"): work out something that is **implied** but not stated, using clues. To **infer** means to read between the lines.\n- **Vocabulary in context** (\"Explain what 'pall' means as used here\"): give the meaning of a word **in this sentence**, using the words around it as clues.\n- **Language analysis** (\"How does the writer use language to...\"): explain how specific words, phrases and techniques create **effects** on the reader.\n- **Structure** (\"How is the text structured to interest the reader?\"): explain how the **order and shape** of the text (openings, shifts in focus, flashbacks, one-line paragraphs, endings) affects the reader.\n- **Summary** (\"In your own words, summarise...\"): select the relevant points and rewrite them **concisely in your own words**.\n- **Evaluation** (\"How far do you agree...?\"): make a **judgement** about the text and support it with evidence, weighing up more than one view.\n\n**Marks map to points.** As a rule of thumb, one mark is one point. A 2-mark question needs two clear points; a 6-mark language question usually needs about three developed points (quotation + technique + effect), each worth roughly 2 marks. The number of marks is the examiner telling you how much to write.",
      diagram: `<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A staircase of question types rising from retrieval to evaluation"><rect x="10" y="140" width="80" height="40" rx="4" fill="#dbeafe" stroke="#3b82f6"/><text x="50" y="157" font-size="11" text-anchor="middle" fill="#1e3a8a" font-weight="bold">FIND IT</text><text x="50" y="172" font-size="11" text-anchor="middle" fill="#1e3a8a">Retrieval</text><rect x="90" y="105" width="80" height="75" rx="4" fill="#dcfce7" stroke="#22c55e"/><text x="130" y="122" font-size="11" text-anchor="middle" fill="#14532d" font-weight="bold">WORK IT OUT</text><text x="130" y="138" font-size="11" text-anchor="middle" fill="#14532d">Inference</text><text x="130" y="152" font-size="11" text-anchor="middle" fill="#14532d">Vocabulary</text><text x="130" y="166" font-size="11" text-anchor="middle" fill="#14532d">Summary</text><rect x="170" y="70" width="80" height="110" rx="4" fill="#fef3c7" stroke="#f59e0b"/><text x="210" y="87" font-size="11" text-anchor="middle" fill="#78350f" font-weight="bold">HOW?</text><text x="210" y="103" font-size="11" text-anchor="middle" fill="#78350f">Language</text><text x="210" y="117" font-size="11" text-anchor="middle" fill="#78350f">Structure</text><rect x="250" y="35" width="80" height="145" rx="4" fill="#fce7f3" stroke="#db2777"/><text x="290" y="52" font-size="11" text-anchor="middle" fill="#831843" font-weight="bold">HOW WELL?</text><text x="290" y="68" font-size="11" text-anchor="middle" fill="#831843">Evaluation</text><text x="170" y="20" font-size="12" text-anchor="middle" fill="#334155">Each step needs more thinking and more marks</text></svg>`,
      diagramCaption: "The question-type staircase: the higher the step, the more you must explain and judge rather than simply find.",
      keyPoints: [
        "Identify the question type before you answer: the command word tells you what to do.",
        "One mark is roughly one point; marks tell you how much to write.",
        "Retrieval and summary need NO technique-spotting; language and structure questions need effects.",
      ],
      thinkDeeper:
        "Why do you think examiners give far more marks for 'How does the writer...?' than for 'List four things...'? What extra skill is being rewarded, and could a question ever be both retrieval and inference at once?",
      discovery: {
        problem:
          "Here are three questions on the same sentence, 'Uncle Lim glanced upward, and walked a little faster.' (a) What did Uncle Lim do? (b) What does his behaviour suggest? (c) How does the writer use this detail to build tension? Before reading on, decide how your three answers would DIFFER.",
        idea:
          "(a) is retrieval: just state the facts. (b) is inference: he expects a storm. (c) is analysis: the small, quick reaction of an experienced neighbour warns the reader that something is coming. Same sentence, three completely different jobs. The question type decides the answer, not the text.",
      },
    },
    {
      id: "skim-scan-timing",
      heading: "Skimming, scanning and beating the clock",
      body:
        "Good readers change speed depending on the job. There are two fast-reading skills you must master.\n\n**Skimming** means reading quickly to get the **gist** (the general idea): who, where, what is happening and what the writer's attitude is. Read the title, the first and last paragraphs and the first line of each paragraph. Always skim the whole passage before you look at the questions in detail.\n\n**Scanning** means hunting for a **specific** detail, such as a name, number, date or key word, without reading every word. You scan when a question says 'In paragraph 3, find...'. Let your eyes sweep the lines until the target word jumps out.\n\nThen, for analysis questions, you switch to **close reading**: slowing right down, reading the lines named in the question two or three times, and annotating.\n\n**Timing.** Most papers give you reading time and then a fixed number of marks. Work out your **minutes-per-mark** rate before you start. For example, in a 60-minute paper worth 50 marks, spend about 10 minutes reading and planning, which leaves 50 minutes, or about **a minute a mark**. A 2-mark retrieval question deserves about 2 minutes, while a 10-mark evaluation deserves about 10.\n\n- Read the questions BEFORE the second, closer read, so you know what to look for.\n- Underline the line references (e.g. 'lines 12–20') and stick to them.\n- If you are stuck, leave a gap and move on; come back at the end.\n- Leave 3–5 minutes to check that you have answered every part of every question.",
      diagram: `<svg viewBox="0 0 340 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A timing bar for a sixty minute reading paper"><text x="170" y="18" font-size="12" text-anchor="middle" fill="#334155">A 60-minute paper worth 50 marks</text><rect x="10" y="35" width="56" height="34" fill="#e2e8f0" stroke="#64748b"/><text x="38" y="56" font-size="11" text-anchor="middle" fill="#1e293b">Read 10</text><rect x="66" y="35" width="236" height="34" fill="#dbeafe" stroke="#3b82f6"/><text x="184" y="56" font-size="11" text-anchor="middle" fill="#1e3a8a">Answer: about 1 minute per mark (45 min)</text><rect x="302" y="35" width="28" height="34" fill="#dcfce7" stroke="#22c55e"/><text x="316" y="56" font-size="11" text-anchor="middle" fill="#14532d">5</text><text x="38" y="88" font-size="11" text-anchor="middle" fill="#475569">skim + scan</text><text x="184" y="88" font-size="11" text-anchor="middle" fill="#475569">close reading + writing</text><text x="316" y="88" font-size="11" text-anchor="middle" fill="#475569">check</text><text x="170" y="110" font-size="11" text-anchor="middle" fill="#475569">2 marks = 2 minutes; 10 marks = 10 minutes</text></svg>`,
      diagramCaption: "Plan your time by marks: reading time, about a minute a mark, then a few minutes to check.",
      keyPoints: [
        "Skim for the gist; scan for a specific detail; close-read for analysis.",
        "Work out minutes-per-mark before you start and stick to it.",
        "Always stay inside the line references the question gives you.",
      ],
      thinkDeeper:
        "Many students spend far too long on the first questions because they are easy and feel safe. Why is this a bad trade? Work out what happens to your total if you overspend 8 minutes on 4 marks' worth of retrieval.",
      discovery: {
        problem:
          "Set a timer for 20 seconds. Look at the 'Monsoon' passage in MCQ Paper 1 and find: (1) the name of Mei's brother, (2) the time she should have been home. Then, without looking again, try to say what the passage is about in one sentence.",
        idea:
          "You probably found the name and time quickly by SCANNING for capital letters and numbers, but struggled to summarise because you were not reading for meaning. The two skills are different, which is why you skim the whole text first and scan later for specific answers.",
      },
    },
    {
      id: "retrieval-inference",
      heading: "Retrieval and inference: on the lines and between the lines",
      body:
        "**Retrieval** questions test whether you can find what is **explicitly** stated, meaning it is written plainly on the page. Answer briefly and precisely, and take the information only from the lines named. You may quote short phrases or use your own words, unless the question says 'in your own words'. Beware of 'nearby' details: if the question asks what the WIND snatches, the bird cage two lines earlier is wrong.\n\n**Inference** questions test whether you can work out what is **implicit**, meaning suggested but not stated. You act like a detective: you notice a clue, then deduce what it reveals. Strong inference answers follow a simple pattern:\n\n- **Point**: what you infer (\"Scrooge is avoided by everyone\").\n- **Evidence**: a short quotation (\"even the blind men's dogs... would tug their owners into doorways\").\n- **Explain**: how the clue leads to the inference (\"if even animals sense his unkindness, it must be extreme and obvious\").\n\n**Own words vs quoting.** When a question says 'in your own words', you must **paraphrase**, which means rewriting the idea using different vocabulary. Swapping one word, or reusing the key word ('he was without imagination' → 'he had no imagination'), does not count. When a question asks you to 'use evidence' or 'quote', embed **short** quotations, usually 1–6 words, rather than copying whole sentences.\n\n**Read the context notes and glossaries.** They are there to help you, and examiners often build an inference question around them.",
      passage: {
        title: "Scrooge, paragraph 3",
        source: "Charles Dickens, A Christmas Carol (1843), Stave One",
        text:
          "Nobody ever stopped him in the street to say, with gladsome looks, 'My dear Scrooge, how are you? When will you come to see me?' No beggars implored him to bestow a trifle, no children asked him what it was o'clock, no man or woman ever once in all his life inquired the way to such and such a place, of Scrooge. Even the blind men's dogs appeared to know him; and when they saw him coming on, would tug their owners into doorways and up courts; and then would wag their tails as though they said, 'No eye at all is better than an evil eye, dark master!'",
      },
      keyPoints: [
        "Retrieval = explicit (on the lines). Inference = implicit (between the lines).",
        "Inference answers need Point + Evidence + Explanation of the clue.",
        "'Own words' means genuinely rephrasing, not reusing the key word.",
      ],
      thinkDeeper:
        "Dickens never says 'Scrooge is lonely'. Is Scrooge lonely, or simply alone? Use the passage to argue that the inference 'lonely' goes further than the evidence allows, then argue the opposite.",
      discovery: {
        problem:
          "Read the Scrooge paragraph above. Write ONE fact the text tells you directly, and ONE thing it makes you believe but never says outright.",
        idea:
          "A fact: 'no children asked him what it was o'clock'. A belief: everyone, even children, finds him so cold and frightening that they avoid him. The first is retrieval; the second is inference. You made a deduction from evidence, which is exactly what inference questions reward.",
      },
    },
    {
      id: "vocab-in-context",
      heading: "Vocabulary in context and the power of connotation",
      body:
        "Vocabulary questions ask what a word means **as it is used in this sentence**. Many words have several meanings, so the surrounding words (the **context**) tell you which one is meant.\n\n**How to crack an unknown word:**\n- Re-read the whole sentence and the one before and after.\n- Look for a **definition clue**: London follows 'an intangible pall' with 'a subtle gloom that made the day dark', which explains it.\n- Look at the word's parts: 'priority' contains 'prior' (before), so 'the reward of priority' means the reward of being first.\n- Test your meaning by swapping it into the sentence. Does it still make sense?\n\n**Denotation and connotation.** A word's **denotation** is its dictionary meaning. Its **connotations** are the feelings and associations it carries. 'Pall' denotes a dark covering, but because a pall is the cloth draped over a coffin, it connotes **death and mourning**. That is why a writer chooses it rather than 'shadow'.\n\nIn a vocabulary question, give a clear meaning first. If there are 2 marks, add what the word **suggests** in context. In language questions, connotations are where most of your marks come from.",
      diagram: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A connotation web around the word nipped"><circle cx="170" cy="100" r="36" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="170" y="98" font-size="14" text-anchor="middle" fill="#78350f" font-weight="bold">'nipped'</text><text x="170" y="114" font-size="11" text-anchor="middle" fill="#78350f">his pointed nose</text><line x1="140" y1="80" x2="95" y2="45" stroke="#94a3b8" stroke-width="1.5"/><line x1="200" y1="80" x2="245" y2="45" stroke="#94a3b8" stroke-width="1.5"/><line x1="140" y1="120" x2="95" y2="155" stroke="#94a3b8" stroke-width="1.5"/><line x1="200" y1="120" x2="245" y2="155" stroke="#94a3b8" stroke-width="1.5"/><rect x="10" y="22" width="130" height="34" rx="6" fill="#dbeafe" stroke="#3b82f6"/><text x="75" y="43" font-size="11" text-anchor="middle" fill="#1e3a8a">a small, sharp bite</text><rect x="200" y="22" width="130" height="34" rx="6" fill="#dbeafe" stroke="#3b82f6"/><text x="265" y="43" font-size="11" text-anchor="middle" fill="#1e3a8a">frost-nip: cold damage</text><rect x="10" y="145" width="130" height="34" rx="6" fill="#dcfce7" stroke="#22c55e"/><text x="75" y="166" font-size="11" text-anchor="middle" fill="#14532d">pinching: mean, tight</text><rect x="200" y="145" width="130" height="34" rx="6" fill="#dcfce7" stroke="#22c55e"/><text x="265" y="166" font-size="11" text-anchor="middle" fill="#14532d">cold acts like a predator</text></svg>`,
      diagramCaption: "Zoom in on one word: 'nipped' denotes a small bite, but connotes pain, cold, pinching meanness and a cold that attacks Scrooge from inside.",
      keyPoints: [
        "Meaning in context: use the surrounding sentences as clues.",
        "Denotation = dictionary meaning; connotation = associations and feelings.",
        "Test your definition by substituting it into the sentence.",
      ],
      thinkDeeper:
        "Dickens writes that the cold 'nipped his pointed nose'. Try replacing 'nipped' with 'touched', 'bit' and 'attacked'. Which loses the most meaning, and why might 'nipped' suit a man described as 'tight-fisted'?",
      discovery: {
        problem:
          "In 'there seemed an intangible pall over the face of things', you may not know 'intangible' or 'pall'. Without a dictionary, use the rest of London's sentence to work out what both mean.",
        idea:
          "'a subtle gloom that made the day dark' tells you a pall is a dark covering, and 'subtle' hints that 'intangible' means something you can feel but not touch. Writers often explain difficult words for you just afterwards, so always read on before you guess.",
      },
    },
    {
      id: "language-analysis",
      heading: "Language analysis: What, How, Why",
      body:
        "A language question (\"How does the writer use language to...?\") asks you to explain how words create **effects**. Every strong point has three parts:\n\n- **What**: a short, precise quotation, embedded in your sentence.\n- **How**: the technique or word class (e.g. **simile**, **personification**, **repetition**, a **verb**, an **adjective**, **onomatopoeia**, **pathetic fallacy**, a **list**).\n- **Why**: the **effect** on the reader, meaning what it makes us think, feel or picture, and how it links to the question's focus.\n\nThe 'Why' is where the marks are. Compare:\n\n- Weak: \"Dickens uses a simile, 'solitary as an oyster', which makes it more interesting.\"\n- Strong: \"The simile 'solitary as an oyster' presents Scrooge as clamped shut inside a hard shell, isolated and secretive; yet oysters can hide pearls, which hints that something precious may lie buried in him.\"\n\n**Zoom in** on single words: verbs and adjectives often carry the strongest connotations ('stealing', 'shouting', 'nipped'). **Zoom out** to patterns: a whole paragraph of cold imagery is an **extended metaphor**.\n\nAvoid empty phrases such as 'makes the reader want to read on' or 'creates a vivid image' unless you say exactly WHAT image and WHY it matters.",
      passage: fireP,
      keyPoints: [
        "What (quotation) + How (technique / word choice) + Why (effect).",
        "Most marks are for explaining effects, not for naming techniques.",
        "Zoom in on single words; zoom out to patterns across the passage.",
      ],
      thinkDeeper:
        "London calls the absent sun 'that cheerful orb'. Why might the only cheerful thing in the passage be something that is NOT there? What does that suggest about the world the man is entering?",
      discovery: {
        problem:
          "Here are two answers about 'Day had broken cold and grey, exceedingly cold and grey'. A: 'London uses repetition to describe the weather.' B: 'Repeating ‘cold and grey’, intensified by ‘exceedingly’, makes the bleakness feel endless and inescapable, warning us that this landscape is hostile.' Which earns more marks, and what exactly does B do that A doesn't?",
        idea:
          "B wins because it explains the EFFECT: endless bleakness and hostility. A only names the technique. Technique-spotting is the start of a point, never the end of it.",
      },
    },
    {
      id: "structure",
      heading: "Structure: how a text is built to grip the reader",
      body:
        "**Structure** is the order and shape of a text: what comes first, how the focus moves, where it speeds up or slows down, and how it ends. Language is about the words; structure is about the **architecture**.\n\n**Structural features to look for:**\n- **Openings**: does the text start with setting, action, dialogue or a striking statement ('Marley was dead: to begin with.')? Why?\n- **Shifts in focus**: the 'camera' moves from one thing to another, e.g. from the wide sky to one raindrop.\n- **Zooming in and out**: from a **wide shot** of a setting to a **close-up** of one detail, or back out again.\n- **Flashback**: a jump back in time that fills in backstory and often creates contrast between past and present.\n- **Foreshadowing**: early hints of what will happen ('at least, not until today').\n- **One-line paragraphs and short sentences**: they create emphasis, pauses, shocks and cliffhangers.\n- **Pace**: long, flowing sentences slow things down; short ones speed things up.\n- **Cyclical endings**: the ending echoes the opening, often with a change that shows what has been learned.\n- **Endings**: resolution, twist, cliffhanger or reflection.\n\n**How to answer.** Use structural vocabulary ('The writer shifts the focus from... to...', 'At the start..., by the end...') and always say WHY the shift interests the reader. Track the text from beginning to middle to end, rather than jumping randomly.",
      diagram: `<svg viewBox="0 0 340 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A camera zooming in from a wide shot to a close up and a cliffhanger"><rect x="10" y="20" width="90" height="130" rx="4" fill="#e0f2fe" stroke="#0284c7"/><text x="55" y="75" font-size="11" text-anchor="middle" fill="#075985" font-weight="bold">WIDE SHOT</text><text x="55" y="92" font-size="11" text-anchor="middle" fill="#075985">sky over</text><text x="55" y="106" font-size="11" text-anchor="middle" fill="#075985">Toa Payoh</text><rect x="110" y="40" width="80" height="90" rx="4" fill="#dcfce7" stroke="#16a34a"/><text x="150" y="75" font-size="11" text-anchor="middle" fill="#14532d" font-weight="bold">MID SHOT</text><text x="150" y="92" font-size="11" text-anchor="middle" fill="#14532d">wind across</text><text x="150" y="106" font-size="11" text-anchor="middle" fill="#14532d">the court</text><rect x="200" y="55" width="66" height="60" rx="4" fill="#fef3c7" stroke="#d97706"/><text x="233" y="80" font-size="11" text-anchor="middle" fill="#78350f" font-weight="bold">CLOSE-UP</text><text x="233" y="96" font-size="11" text-anchor="middle" fill="#78350f">drop on wrist</text><rect x="276" y="68" width="56" height="34" rx="4" fill="#fee2e2" stroke="#dc2626"/><text x="304" y="84" font-size="11" text-anchor="middle" fill="#7f1d1d" font-weight="bold">HOOK</text><text x="304" y="97" font-size="11" text-anchor="middle" fill="#7f1d1d">not Wei Jie</text><text x="170" y="166" font-size="11" text-anchor="middle" fill="#475569">The camera narrows: wide to close to a one-line cliffhanger</text></svg>`,
      diagramCaption: "In 'Monsoon' the writer's camera zooms from the whole sky to one raindrop, then ends on a one-line cliffhanger.",
      keyPoints: [
        "Structure = order, shifts in focus, pace, paragraphing, opening and ending.",
        "Use 'At the start... then... by the end...' to track the text in order.",
        "Always explain WHY a structural choice interests the reader.",
      ],
      thinkDeeper:
        "'Number 47' (Written Paper 2) begins and ends with the same stubborn key. If the ending repeats the opening, how can the story still feel as if it has moved forward? What has changed?",
      discovery: {
        problem:
          "Read the last four paragraphs of 'Monsoon' (MCQ Paper 1). Count the sentences in each paragraph. What do you notice about paragraph length as the story reaches its climax, and why might the writer do this?",
        idea:
          "The paragraphs shrink to single lines ('Then another. Then a thousand.' / 'It was not Wei Jie.'). Short, isolated paragraphs speed up the pace and make each moment hit harder, especially the final cliffhanger. That is a STRUCTURAL choice, separate from the words themselves.",
      },
      passage: monsoonPassage,
    },
    {
      id: "non-fiction-viewpoint",
      heading: "Non-fiction: forms, fact and opinion, viewpoint and purpose",
      body:
        "Comprehension papers often use **non-fiction**: real-world texts about real people and events. Each **form** has its own features:\n\n- **Articles** (news or feature): headline, standfirst, facts mixed with opinion, quotations, direct address.\n- **Travel writing**: a personal account of a place, rich description, humour and the writer's opinions.\n- **Letters**: an address or greeting, a clear relationship with the reader and a formal or informal tone.\n- **Diaries and journals**: first person, dated entries, private and reflective (though some, like Scott's, are written knowing others may read them).\n- **Speeches**: direct address, rhetorical questions, repetition and a call to action.\n\n**Fact vs opinion.** A **fact** can be checked and proved true or false ('In 1977 the government launched a ten-year clean-up'). An **opinion** is a belief or judgement that someone could reasonably disagree with ('It is also the best news our city has had in years'). Watch for judgement words: best, worst, greatest, should, awful, simple. Writers often blend the two so that opinions sound like facts.\n\n**Viewpoint and purpose.** The writer's **viewpoint** is their attitude to the subject (admiring, critical, nostalgic, angry). Their **purpose** is what they want the text to DO: inform, explain, persuade, argue, advise, entertain or describe. Most texts have more than one purpose. Ask: who is the **audience**, and what does the writer want them to think, feel or do by the end?\n\n**Context** matters too. Scott's praise of Oates as 'a brave man and an English gentleman' reflects Edwardian ideals of duty and self-sacrifice.",
      passage: scottPassage,
      keyPoints: [
        "Fact = can be checked. Opinion = judgement someone could dispute.",
        "Identify form, audience, purpose and viewpoint for every non-fiction text.",
        "Most texts blend purposes: e.g. inform AND persuade.",
      ],
      thinkDeeper:
        "Scott's journal is both a private record and a message to the world. Find one line that feels private and one that feels written for an audience. Does knowing he expected readers change how much you trust it?",
      discovery: {
        problem:
          "Sort these into FACT or OPINION: (1) 'We had fuel to make two cups of tea apiece.' (2) 'This is an awful place.' (3) 'Our depot 11 miles away.' (4) 'It was the act of a brave man.'",
        idea:
          "1 and 3 are facts: they could be checked. 2 and 4 are opinions: they are judgements, even if almost everyone would agree with them. 'Most people agree' does not make something a fact; the test is whether it can be proved.",
      },
    },
    {
      id: "summary-evaluation",
      heading: "Summary and evaluation: say it shorter, then judge it",
      body:
        "**Summary** questions test whether you can **select** the relevant information and express it **concisely in your own words**.\n\n- Read the question focus carefully, e.g. 'the problems caused by light pollution' is NOT the same as 'the article'.\n- Highlight relevant points in the named lines, and ignore examples, quotations and repetition.\n- Rewrite each point in fresh words. Aim for one clear point per mark.\n- Do not analyse language and do not add your own opinions.\n\n**Evaluation** questions (\"How far do you agree...?\", \"How effective...?\", \"A student said... To what extent...?\") ask for a **judgement**. A top answer:\n\n- states a **clear verdict** at the start ('I largely agree, although...');\n- supports it with **evidence** and analysis from across the text;\n- **weighs up** the other view ('However...', 'On the other hand...');\n- considers the writer's **purpose** or methods;\n- ends with a **balanced conclusion** that answers the question directly.\n\nThe phrase **'how far'** is a gift: it lets you agree partly. 'Completely agree' answers with no counter-view rarely reach the top band.",
      diagram: `<svg viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A set of scales weighing evidence for and against a statement"><line x1="170" y1="40" x2="170" y2="140" stroke="#475569" stroke-width="3"/><rect x="130" y="138" width="80" height="10" rx="3" fill="#475569"/><line x1="60" y1="55" x2="280" y2="45" stroke="#475569" stroke-width="3"/><circle cx="170" cy="50" r="5" fill="#475569"/><line x1="70" y1="55" x2="50" y2="95" stroke="#94a3b8"/><line x1="70" y1="55" x2="100" y2="95" stroke="#94a3b8"/><path d="M40 95 L110 95 L100 112 L50 112 Z" fill="#dcfce7" stroke="#16a34a"/><text x="75" y="130" font-size="11" text-anchor="middle" fill="#14532d">Evidence FOR</text><line x1="270" y1="45" x2="250" y2="85" stroke="#94a3b8"/><line x1="270" y1="45" x2="300" y2="85" stroke="#94a3b8"/><path d="M240 85 L310 85 L300 102 L250 102 Z" fill="#fee2e2" stroke="#dc2626"/><text x="275" y="120" font-size="11" text-anchor="middle" fill="#7f1d1d">Evidence AGAINST</text><text x="170" y="22" font-size="12" text-anchor="middle" fill="#334155">Verdict: 'I largely agree, although...'</text></svg>`,
      diagramCaption: "Evaluation means weighing evidence on both sides, then giving a clear verdict about how far you agree.",
      keyPoints: [
        "Summary: select, condense, own words, no analysis.",
        "Evaluation: verdict, evidence, counter-view, conclusion.",
        "'How far' invites a judgement of degree, so use it.",
      ],
      thinkDeeper:
        "Is it ever right to 'completely agree' in an evaluation answer? Think of a statement about a text where you might, and explain how you would still show the examiner you had considered alternatives.",
      discovery: {
        problem:
          "Summarise 'The Otters Who Came Back' (MCQ Paper 3) in exactly 25 words, without using any phrase of three or more words from the original.",
        idea:
          "The word limit forces you to choose only the main ideas (polluted river, clean-up, fish and otters returned, the otters show the water is healthy, so respect them), and the 'no copied phrases' rule forces real paraphrase. Both are exactly what summary questions test.",
      },
    },
  ],

  passages: [scroogePassage, fireP, scottPassage, ottersPassage],

  quoteBank: [
    {
      quote: "Marley was dead: to begin with.",
      source: "Charles Dickens, A Christmas Carol (1843), opening line",
      analysis:
        "A blunt, shocking opening statement hooks the reader at once. The odd addition 'to begin with' hints that death will not be the end of Marley, which is a playful piece of foreshadowing. It is a model of how an opening can create questions.",
      themes: ["openings", "structure", "foreshadowing"],
    },
    {
      quote: "solitary as an oyster",
      source: "Charles Dickens, A Christmas Carol, Stave One (describing Scrooge)",
      analysis:
        "A simile that presents Scrooge as clamped shut in a hard shell: isolated and secretive. The hidden pearl inside an oyster offers an alternative reading, suggesting there is something precious buried in him. This makes it ideal practice for 'develop an alternative interpretation'.",
      themes: ["simile", "character", "isolation"],
    },
    {
      quote: "No warmth could warm, no wintry weather chill him.",
      source: "Charles Dickens, A Christmas Carol, Stave One",
      analysis:
        "Parallel structure and 'w' alliteration make the sentence ring like a proverb. The balanced halves show that neither comfort nor hardship touches Scrooge, so his coldness is beyond the reach of nature itself.",
      themes: ["repetition", "alliteration", "character"],
    },
    {
      quote: "Day had broken cold and grey, exceedingly cold and grey",
      source: "Jack London, 'To Build a Fire' (1908), opening (original American 'gray' changed to British spelling)",
      analysis:
        "Repetition intensified by 'exceedingly' establishes a relentless, bleak setting in the first line. The verb 'broken' is usually neutral in 'day had broken', but beside so much grey it quietly suggests damage, which hints at the danger ahead.",
      themes: ["setting", "repetition", "openings"],
    },
    {
      quote: "an intangible pall over the face of things",
      source: "Jack London, 'To Build a Fire' (1908)",
      analysis:
        "'Pall' (a cloth over a coffin) carries connotations of death, while 'the face of things' personifies the landscape. Together they make the gloom feel like a funeral shroud: subtle foreshadowing of the man's fate.",
      themes: ["connotation", "foreshadowing", "setting"],
    },
    {
      quote: "The trouble with him was that he was without imagination.",
      source: "Jack London, 'To Build a Fire' (1908)",
      analysis:
        "The narrator's direct judgement reveals the man's fatal flaw: he sees facts but not their 'significances'. Because the reader is told more than the man understands, a sense of dread grows, which is a good example of how narrative voice creates tension.",
      themes: ["narrative voice", "character", "inference"],
    },
    {
      quote: "Great God! this is an awful place",
      source: "Captain Scott's journal, 17 January 1912, at the South Pole",
      analysis:
        "The exclamation captures raw shock and disappointment at finding Amundsen had arrived first. In 1912 'awful' could still carry its older sense of 'filling one with awe or dread', so the word suggests both horror and the overwhelming scale of the place.",
      themes: ["non-fiction", "viewpoint", "context"],
    },
    {
      quote: "I am just going outside and may be some time.",
      source: "Captain Oates, as recorded in Scott's journal, March 1912",
      analysis:
        "Perhaps the most famous understatement in British history: casual words ('just', 'some time') disguise a deliberate walk to death. Understatement often moves readers more than open emotion, because we feel what is left unsaid.",
      themes: ["understatement", "courage", "non-fiction"],
    },
    {
      quote: "These rough notes and our dead bodies must tell the tale.",
      source: "Captain Scott, 'Message to the Public' (1912)",
      analysis:
        "Blunt, stark words with no softening: the men's bodies become the evidence of their courage. Scott is consciously writing for future readers, which reminds us that journals can have a public purpose.",
      themes: ["purpose", "audience", "non-fiction"],
    },
    {
      quote: "Romance at short notice was her speciality.",
      source: "Saki (H. H. Munro), 'The Open Window' (1914), final line",
      analysis:
        "A one-line ending that reframes the whole story: the girl's tale was invented. It shows how a final sentence can create a twist and send the reader back to reread everything with new eyes.",
      themes: ["endings", "structure", "twist"],
    },
    {
      quote: "They are not pests; they are proof.",
      source: "'The Otters Who Came Back' (original article written for this app)",
      analysis:
        "Antithesis ('not X; Y') and alliteration ('pests... proof') make a memorable, quotable line that reverses the opposing argument. It is a good model for spotting persuasive sentence structures in non-fiction.",
      themes: ["persuasion", "antithesis", "viewpoint"],
    },
    {
      quote: "It was not Wei Jie.",
      source: "'Monsoon' (original fiction written for this app), final line",
      analysis:
        "A one-line paragraph and a short negative sentence create a cliffhanger: we learn who it is NOT, which raises the question of who it IS. It shows how structure can create suspense with just five plain words.",
      themes: ["structure", "cliffhanger", "suspense"],
    },
  ],

  modelWriting: [
    {
      title: "Language analysis: Scrooge's coldness",
      task: "How does Dickens use language to present Scrooge as cold-hearted in paragraph 1? (6 marks)",
      text:
        "Dickens presents Scrooge's cruelty as something physical, as if his heart has frozen his whole body. The narrator bursts out with a list of -ing words (present participles), 'squeezing, wrenching, grasping, scraping, clutching', all of which describe tight, violent hand movements. Piled up without pause, they suggest a man who grabs money relentlessly and never lets go, and the sheer length of the list makes his greed feel overwhelming.\n\nDickens then develops an extended metaphor of cold: 'The cold within him froze his old features, nipped his pointed nose'. The phrase 'cold within him' is crucial, because the cold comes from inside, so his unkind nature is literally showing on his skin. The verb 'nipped' is especially effective: it suggests a small, sharp, pinching bite, which fits a man who 'pinches' every penny.\n\nFinally, the hyperbole that he 'iced his office in the dog-days; and didn't thaw it one degree at Christmas' is darkly comic. Even the hottest days and the most generous season cannot warm him, which prepares the reader for how extraordinary his later transformation will be.",
      annotations: [
        "Opens with a conceptual point (cruelty made physical) rather than 'Dickens uses lots of techniques'.",
        "Short quotations are embedded in the writer's own sentences.",
        "Each technique is followed by a precise effect ('tight, violent hand movements').",
        "Zooms in on a single word ('nipped') and explores its connotations.",
        "Links to the wider story and to the writer's purpose in the final sentence.",
      ],
    },
    {
      title: "Structure: 'Monsoon'",
      task: "How has the writer structured the extract to interest the reader? (6 marks)",
      text:
        "The writer opens with a single-sentence paragraph, 'The sky over Toa Payoh had been holding its breath all afternoon', which establishes tension before any character appears. The focus is wide at this point: the whole sky over the estate.\n\nThe camera then narrows to Mei and her neighbourhood, and the writer plants a hint of trouble: Wei Jie 'never broke a promise — at least, not until today.' This foreshadowing gives the reader a second source of tension alongside the weather.\n\nAs the storm breaks, the pace accelerates. The minor sentences 'Then another. Then a thousand.' are isolated in their own paragraph, so the reader experiences the rain escalating from one drop to a downpour in a single breath. The focus then zooms in further, to Mei pressed against a pillar with soaked shoes.\n\nFinally, the writer ends on a one-line cliffhanger: 'It was not Wei Jie.' By telling us only who the figure is NOT, the ending turns the reader's attention from the storm to a new, human threat, leaving us desperate to read on.",
      annotations: [
        "Tracks the extract in order: opening, middle, climax, ending.",
        "Uses structural vocabulary: focus, narrows, foreshadowing, pace, zooms, cliffhanger.",
        "Discusses paragraph length and sentence length as STRUCTURE, not just language.",
        "Explains the effect of each shift on the reader.",
      ],
    },
    {
      title: "Summary in your own words",
      task: "In your own words, summarise why the otters returned to the Singapore River and why the writer thinks they matter. (5 marks)",
      text:
        "For decades the river was so dirty that very little could survive in it. From the late 1970s, a long government project removed the main sources of waste and cleaned the riverbed. As the water improved, fish came back, and eventually the otters followed because they had food again. The writer believes the otters matter because their presence proves that the water is healthy once more. For this reason, people should watch them respectfully rather than complain about them.",
      annotations: [
        "Five sentences, five marks: one clear point each.",
        "No quotations and no copied phrases ('open sewer' becomes 'so dirty that very little could survive').",
        "Follows the cause-and-effect chain logically.",
        "Covers both halves of the question: why they returned AND why they matter.",
      ],
    },
    {
      title: "Evaluation: is Scott's journal private or public?",
      task: "'Scott's journal is as much a message to the world as a private diary.' How far do you agree? (8 marks)",
      text:
        "I largely agree: although Scott's journal has the form of a private diary, much of it is clearly shaped for future readers.\n\nOn the surface it is private. It is written in the first person in dated entries, and it records practical details such as 'a continuous gale from W.S.W. and S.W.' and 'fuel to make two cups of tea apiece'. These are the notes of a leader keeping track of survival, not a performance.\n\nHowever, Scott repeatedly addresses an audience. 'Should this be found I want these facts recorded' speaks directly to whoever discovers the tent, and his account of Oates's death is carefully framed as 'the act of a brave man and an English gentleman', the language of a public tribute rather than private grief. The final plea, 'For God's sake look after our people', only makes sense if he expects the nation to read it.\n\nOverall, the journal begins as a working record but becomes, in its final weeks, a deliberate testimony. Scott knew that 'these rough notes and our dead bodies must tell the tale', so he wrote to make sure the tale would be told the way he wanted.",
      annotations: [
        "Clear verdict in the first sentence, using 'largely' to show degree.",
        "Gives the opposing view fair weight first, with evidence.",
        "Uses 'However' to turn to the main argument and stronger evidence.",
        "Considers context and purpose (public tribute, Edwardian ideals).",
        "The conclusion answers the question directly and ends with an apt quotation.",
      ],
    },
  ],

  mnemonics: [
    {
      topic: "The seven question types",
      device: "Really Inquisitive Victors Love Solving Sneaky Exams",
      explanation:
        "Retrieval, Inference, Vocabulary, Language, Structure, Summary, Evaluation. Before answering, name which one you are facing.",
    },
    {
      topic: "Language analysis points",
      device: "WHAT · HOW · WHY",
      explanation:
        "WHAT = the quotation (short, embedded). HOW = the technique or word choice. WHY = the effect on the reader and link to the question. No WHY, no marks.",
    },
    {
      topic: "Timing and length",
      device: "A Mark a Minute, a Point per Mark",
      explanation:
        "Spend roughly one minute per mark after reading time, and give roughly one clear point per mark (a 6-mark analysis question is about three developed points).",
    },
    {
      topic: "Fact or opinion?",
      device: "Check it or Challenge it",
      explanation:
        "If you could CHECK it (a date, number, event), it is a fact. If someone could reasonably CHALLENGE it (best, awful, should, simple), it is an opinion.",
    },
  ],

  examMistakes: [
    "Answering from the wrong lines. If the question says 'paragraph 3' or 'lines 10–18', evidence from elsewhere earns nothing.",
    "Spotting techniques without explaining effects ('The writer uses a simile'), which earns very few marks on its own.",
    "Copying long quotations instead of selecting the precise words that prove your point.",
    "Writing 'in your own words' answers that reuse the text's key words or phrases.",
    "Analysing language in a STRUCTURE question, or retelling the plot instead of explaining shifts in focus.",
    "Spending too long on early low-mark questions and running out of time for the big evaluation question.",
    "Giving a one-sided 'I completely agree' answer to a 'How far...?' question with no counter-view.",
    "Vague, empty comments such as 'it makes the reader want to read on' or 'it creates a vivid image' without saying what or why.",
  ],

  misconceptions: [
    {
      wrong: "The more techniques I name, the higher my mark.",
      right: "Marks come from explaining effects. Two techniques analysed in depth beat six techniques merely listed.",
    },
    {
      wrong: "An opinion that most people agree with is a fact.",
      right: "A fact can be checked and proved. 'This is an awful place' remains an opinion however many people would agree with it.",
    },
    {
      wrong: "Structure just means 'the text has paragraphs'.",
      right: "Structure is about deliberate choices in order, focus, pace and shape: openings, shifts, flashbacks, one-line paragraphs, cyclical endings, and WHY they interest the reader.",
    },
    {
      wrong: "Inference means guessing or making things up.",
      right: "Inference is a logical deduction from evidence in the text. If you cannot point to a clue, it is not an inference.",
    },
    {
      wrong: "Non-fiction is boring and just gives facts.",
      right: "Non-fiction uses all the same language and structural techniques as fiction, and is often highly opinionated and persuasive.",
    },
    {
      wrong: "A summary should include the best quotations.",
      right: "A summary must be in your own words and contain no quotations or analysis: select, condense, rephrase.",
    },
  ],

  expertDebates: [
    {
      question: "Do we analyse what the writer intended, or what the words do?",
      detail:
        "Exam questions say 'How does the WRITER use language...?', which suggests deliberate intention. But some critics argue we can never know an author's mind, only the effect of the words on readers. This is sometimes called the 'intentional fallacy'. Did Dickens consciously plant the pearl inside his oyster simile? Strong answers sidestep the problem with phrases like 'this suggests' or 'the reader may feel', which focus on effect.",
    },
    {
      question: "Is Scott's journal a reliable source?",
      detail:
        "It was written at the time, by an eyewitness, which makes it powerful evidence. Yet Scott knew it might be read by the public, he was exhausted and starving, and he had reasons to present his team's choices and courage favourably. Oates's famous last words survive ONLY in Scott's journal. Historians still debate how far the journal shaped the heroic legend of the expedition.",
    },
    {
      question: "Should comprehension tests ask 'how far do you agree' about texts written for different times?",
      detail:
        "Some teachers argue students should judge texts by the values of their own era (Dickens's view of the poor, Scott's 'English gentleman'). Others argue we should understand them first in their historical context. Top answers do both: they explain the context, then evaluate with a modern perspective.",
    },
  ],

  realWorld: [
    { title: "Reading the small print", detail: "Contracts, phone plans and app permissions hide key details in dense text. Scanning for the important clause is retrieval in real life.", emoji: "📄" },
    { title: "Spotting fake news", detail: "Separating fact from opinion, checking sources and noticing loaded words are the same skills you use on a persuasive article.", emoji: "📰" },
    { title: "Advertising decoder", detail: "Adverts rely on connotation ('fresh', 'natural', 'premium'). Analysing word choice helps you see what is really being sold.", emoji: "📺" },
    { title: "Future exams", detail: "IGCSE First Language English, and almost every university course, test whether you can read unseen texts closely and explain how they work.", emoji: "🎓" },
    { title: "Law and medicine", detail: "Lawyers infer intentions from documents and doctors interpret patients' descriptions. Both are careers built on close reading and inference.", emoji: "⚖️" },
    { title: "Travel and adventure", detail: "Explorers' journals like Scott's, and travel writers' accounts, shape how whole nations remember journeys and places.", emoji: "🧭" },
  ],

  flashcards: [
    { front: "Retrieval", back: "Finding information that is stated directly (explicitly) in the text. Short, precise answers." },
    { front: "Inference", back: "Working out what is suggested (implicit) but not stated, using clues from the text." },
    { front: "Skimming vs scanning", back: "Skimming = reading quickly for the gist. Scanning = searching quickly for a specific detail." },
    { front: "Connotation", back: "The associations and feelings a word carries beyond its dictionary meaning (denotation)." },
    { front: "Pathetic fallacy", back: "When weather or setting reflects a character's mood or the atmosphere (e.g. the storm in 'Monsoon')." },
    { front: "Extended metaphor", back: "A metaphor developed over several lines or a whole passage (e.g. Scrooge's inner cold)." },
    { front: "Flashback", back: "A shift back in time that gives backstory and often creates contrast between past and present." },
    { front: "Cyclical structure", back: "When the ending echoes the opening, usually with a change that shows what has been learned." },
    { front: "Foreshadowing", back: "An early hint of what will happen later (e.g. 'at least, not until today')." },
    { front: "Fact vs opinion", back: "A fact can be checked and proved; an opinion is a judgement someone could reasonably dispute." },
    { front: "Understatement", back: "Deliberately presenting something as less serious than it is (Oates: 'I am just going outside and may be some time')." },
    { front: "Writer's purpose", back: "What the text aims to do: inform, explain, persuade, argue, advise, entertain, describe." },
    { front: "Counter-argument", back: "The opposing view a persuasive writer acknowledges, often to rebut it (e.g. 'Of course, light keeps us safe. But...')." },
    { front: "'I am just going outside and may be some time.'", back: "Captain Oates, recorded in Scott's journal, March 1912: an understated farewell before walking to his death." },
    { front: "'solitary as an oyster'", back: "Dickens on Scrooge (A Christmas Carol): a simile suggesting isolation, a closed shell, and perhaps a hidden pearl." },
    { front: "Evaluation answer recipe", back: "Verdict + evidence + counter-view + conclusion. 'How far' invites a judgement of degree." },
  ],

  mustKnow: [
    "Can you identify the seven question types from the command words and marks?",
    "Can you skim a passage for its gist and scan it for a specific detail?",
    "Can you plan your time at about a minute per mark?",
    "Can you write an inference answer with point, embedded evidence and explanation?",
    "Can you work out the meaning of an unfamiliar word from its context, and explain its connotations?",
    "Can you analyse language using What (quotation), How (technique) and Why (effect)?",
    "Can you explain structural choices such as openings, shifts in focus, flashbacks, one-line paragraphs and cyclical endings?",
    "Can you tell fact from opinion and identify a writer's viewpoint, purpose and audience?",
    "Can you write a concise summary in your own words with no quotations?",
    "Can you write a balanced 'how far do you agree' evaluation with a clear verdict?",
  ],

  videos: [
    { title: "How to answer language analysis questions", channel: "Mr Bruff", url: "https://www.youtube.com/results?search_query=mr+bruff+language+analysis+question" },
    { title: "Structure questions explained", channel: "Mr Salles Teaches English", url: "https://www.youtube.com/results?search_query=mr+salles+structure+question+how+has+the+writer+structured" },
    { title: "Inference and deduction in reading", channel: "BBC Bitesize", url: "https://www.youtube.com/results?search_query=bbc+bitesize+inference+reading+skills+ks3" },
    { title: "Fact and opinion in non-fiction", channel: "Stacey Reay", url: "https://www.youtube.com/results?search_query=stacey+reay+non+fiction+reading+viewpoint" },
  ],

  quiz: {
    mcq: [
      {
        id: "cmp-quiz-mcq-1",
        extract: "Marley was dead: to begin with. (Charles Dickens, A Christmas Carol, opening line)",
        question: "What is the main effect of this opening line?",
        options: [
          "It gives a detailed description of the setting",
          "It introduces a long piece of dialogue",
          "Its blunt statement shocks the reader, and 'to begin with' hints that Marley's death is not the end of his story",
          "It tells the reader that the story will have a happy ending",
        ],
        answerIndex: 2,
        hint: "Why would a writer add 'to begin with' after saying someone is dead?",
        explanation:
          "The blunt fact hooks us, while 'to begin with' oddly suggests more is coming; indeed, Marley returns as a ghost. There is no setting description here, so the option ‘It gives a detailed description of the setting’ is wrong.",
        guideRef: "structure",
      },
      {
        id: "cmp-quiz-mcq-2",
        question: "'How has the writer structured the text to interest you as a reader?' Which question type is this?",
        options: ["Retrieval", "Structure", "Summary", "Vocabulary in context"],
        answerIndex: 1,
        hint: "Look at the key word 'structured'.",
        explanation:
          "It asks about the order, focus and shape of the text, so it is a structure question. It is not a summary question, because you must explain choices, not condense content.",
        guideRef: "question-types",
      },
      {
        id: "cmp-quiz-mcq-3",
        extract:
          "'My aunt will be down presently, Mr. Nuttel,' said a very self-possessed young lady of fifteen; 'in the meantime you must try and put up with me.' (Saki, 'The Open Window', 1914)",
        question: "What does 'self-possessed' mean in this context?",
        options: [
          "Selfish and greedy",
          "Haunted or possessed by a spirit",
          "Shy and nervous",
          "Calm, confident and in control of herself",
        ],
        answerIndex: 3,
        hint: "How does she speak to an adult visitor she has never met?",
        explanation:
          "She speaks confidently and even jokes ('put up with me'), so 'self-possessed' means calm and composed. 'Possessed by a spirit' is a trap: it takes one part of the word literally and ignores the context.",
        guideRef: "vocab-in-context",
      },
      {
        id: "cmp-quiz-mcq-4",
        question: "Which of these statements is an OPINION?",
        options: [
          "Pulau Ubin can be reached by bumboat from Changi Point.",
          "The Singapore River clean-up began in 1977.",
          "Captain Scott reached the South Pole in January 1912.",
          "Singapore's otters are the best news the city has had in years.",
        ],
        answerIndex: 3,
        hint: "Which statement could be disputed rather than checked?",
        explanation:
          "'The best news' is a judgement that people could disagree with. The other three can be checked against records, so they are facts.",
        guideRef: "non-fiction-viewpoint",
      },
    ],
    qa: [
      {
        id: "cmp-quiz-qa-1",
        question: "Explain the difference between skimming and scanning, and say when you would use each in a reading exam.",
        marks: 4,
        hint: "Two definitions and two uses.",
        modelAnswer:
          "Skimming means reading quickly to get the general gist of a text. I would use it at the start of the exam to understand what the whole passage is about. Scanning means searching quickly for one specific detail, such as a name, date or key word. I would use it for retrieval questions like 'In paragraph 2, find the year...'.",
        markScheme: [
          { point: "Defines skimming: quick read for gist / general idea", keywords: ["gist", "general idea", "overview", "main idea", "overall", "quickly read"] },
          { point: "Use of skimming: first read of the whole passage", keywords: ["start", "beginning", "first read", "whole passage", "whole text", "first"] },
          { point: "Defines scanning: searching for a specific detail", keywords: ["specific", "particular", "detail", "key word", "name", "date", "number"] },
          { point: "Use of scanning: retrieval / find questions", keywords: ["retrieval", "find", "locate", "list", "give two", "look for"] },
        ],
        commonError: "Mixing the two up: skimming is for the gist, scanning is for a target detail.",
        guideRef: "skim-scan-timing",
      },
      {
        id: "cmp-quiz-qa-2",
        extract: "Grandad lowered the newspaper, folded it into a small, hard square, and placed it on the table without a word.",
        question: "What can you infer about Grandad's mood? Support your answer with evidence from the sentence.",
        marks: 3,
        hint: "How would a relaxed person fold a newspaper? What does silence suggest?",
        modelAnswer:
          "Grandad seems angry or deeply displeased. Folding the paper into 'a small, hard square' suggests tight, controlled tension, as if he is pressing his anger into the paper. Placing it down 'without a word' implies a cold, deliberate silence, which feels more threatening than shouting and suggests he is about to confront someone.",
        markScheme: [
          { point: "Infers anger / displeasure / tension", keywords: ["angry", "anger", "annoyed", "displeased", "upset", "furious", "tense", "disapprov"] },
          { point: "Uses 'small, hard square' as evidence with explanation", keywords: ["small, hard square", "hard square", "folded", "controlled", "pressing", "tight"] },
          { point: "Uses 'without a word' as evidence with explanation", keywords: ["without a word", "silence", "silent", "quiet", "said nothing", "cold"] },
        ],
        commonError: "Stating the mood ('he is angry') with no evidence, or quoting without explaining how the clue reveals the mood.",
        guideRef: "retrieval-inference",
      },
      {
        id: "cmp-quiz-qa-3",
        extract: "Great God! this is an awful place and terrible enough for us to have laboured to it without the reward of priority. (Captain Scott's journal, 17 January 1912)",
        question: "How does Scott use language to convey his feelings on reaching the South Pole?",
        marks: 4,
        hint: "Look at the exclamation, the adjectives, and the phrase 'without the reward of priority'.",
        modelAnswer:
          "The exclamation 'Great God!' bursts out like a cry of despair, showing raw shock. The adjectives 'awful' and 'terrible' stress how bleak and hostile the place feels, and 'awful' may carry its older sense of inspiring dread. The verb 'laboured' emphasises the enormous effort they have made, which makes the phrase 'without the reward of priority' especially bitter: all that suffering, and they were not even first. Together the language conveys crushing disappointment.",
        markScheme: [
          { point: "Exclamation 'Great God!': shock / despair", keywords: ["exclamation", "great god", "shock", "despair", "outburst", "cry"] },
          { point: "Adjectives 'awful' / 'terrible': hostile place", keywords: ["awful", "terrible", "adjective", "hostile", "bleak", "dread"] },
          { point: "'laboured': enormous effort", keywords: ["laboured", "labored", "effort", "struggle", "hard work", "suffering"] },
          { point: "'without the reward of priority': bitter disappointment at not being first", keywords: ["priority", "not first", "amundsen", "disappoint", "bitter", "beaten"] },
        ],
        commonError: "Explaining the context (Amundsen won) without analysing any of Scott's actual words.",
        guideRef: "language-analysis",
      },
      {
        id: "cmp-quiz-qa-4",
        question: "Name TWO structural techniques writers use to interest readers, and explain the effect of each with an example.",
        marks: 4,
        hint: "Think of flashbacks, one-line paragraphs, cyclical endings, zooming in, cliffhangers.",
        modelAnswer:
          "One technique is a one-line paragraph, such as 'It was not Wei Jie.' at the end of 'Monsoon'. Isolating a short sentence creates emphasis and suspense, here leaving a cliffhanger. Another is a cyclical structure, where the ending echoes the opening; for example, in 'Number 47' the stubborn key appears at the start and the end. This gives a sense of completion while showing how the character has changed.",
        markScheme: [
          { point: "Names a valid structural technique", keywords: ["one-line paragraph", "flashback", "cyclical", "cliffhanger", "zoom", "shift in focus", "foreshadowing"] },
          { point: "Explains the effect of the first technique", keywords: ["suspense", "emphasis", "tension", "curiosity", "read on", "shock"] },
          { point: "Names and explains a second technique (completion, contrast, change)", keywords: ["completion", "contrast", "changed", "circle", "backstory", "echo", "full circle"] },
          { point: "Gives an example from a text", keywords: ["for example", "for instance", "such as", "monsoon", "number 47", "scrooge", "extract"] },
        ],
        commonError: "Naming language techniques (simile, metaphor) instead of structural ones.",
        guideRef: "structure",
      },
    ],
  },

  questionBank: {
    mcqPapers: [mcqP1, mcqP2, mcqP3, mcqP4],
    qaPapers: [qaP1, qaP2, qaP3, qaP4],
  },
};
