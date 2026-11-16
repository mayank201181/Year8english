import type { Topic } from "../types";

// Term 3: Reading the Novel. Public-domain extracts (Dickens d.1870, Stevenson d.1894,
// Charlotte Brontë d.1855, Frances Hodgson Burnett d.1924) are printed in full; modern class
// novels are named and discussed only. Extracts labelled "Original" were written for this app.

const GREAT_EXPECTATIONS = {
  id: "great-expectations-ch1",
  title: "Pip meets the convict",
  source: "Charles Dickens, Great Expectations (1861), Chapter 1",
  text:
    "Ours was the marsh country, down by the river, within, as the river wound, twenty miles of the sea. My first most vivid and broad impression of the identity of things seems to me to have been gained on a memorable raw afternoon towards evening. At such a time I found out for certain that this bleak place overgrown with nettles was the churchyard; and that Philip Pirrip, late of this parish, and also Georgiana wife of the above, were dead and buried; and that Alexander, Bartholomew, Abraham, Tobias, and Roger, infant children of the aforesaid, were also dead and buried; and that the dark flat wilderness beyond the churchyard, intersected with dikes and mounds and gates, with scattered cattle feeding on it, was the marshes; and that the low leaden line beyond was the river; and that the distant savage lair from which the wind was rushing was the sea; and that the small bundle of shivers growing afraid of it all and beginning to cry, was Pip.\n\n“Hold your noise!” cried a terrible voice, as a man started up from among the graves at the side of the church porch. “Keep still, you little devil, or I’ll cut your throat!”\n\nA fearful man, all in coarse grey, with a great iron on his leg. A man with no hat, and with broken shoes, and with an old rag tied round his head. A man who had been soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars; who limped, and shivered, and glared, and growled; and whose teeth chattered in his head as he seized me by the chin.\n\n“Oh! Don’t cut my throat, sir,” I pleaded in terror. “Pray don’t do it, sir.”\n\n“Tell us your name!” said the man. “Quick!”\n\n“Pip, sir.”",
  note:
    "Pip is an orphan being raised by his sister; he is visiting his parents’ graves. The adult Pip narrates, looking back on his childhood. The ‘great iron on his leg’ is a leg-iron (shackle): the man is an escaped convict, later revealed as Abel Magwitch. ‘Late of this parish’ = formerly living here (now dead).",
};

const CHRISTMAS_CAROL = {
  id: "christmas-carol-stave1",
  title: "Scrooge",
  source: "Charles Dickens, A Christmas Carol (1843), Stave One",
  text:
    "Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster. The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait; made his eyes red, his thin lips blue; and spoke out shrewdly in his grating voice. A frosty rime was on his head, and on his eyebrows, and his wiry chin. He carried his own low temperature always about with him; he iced his office in the dog-days; and didn’t thaw it one degree at Christmas.\n\nExternal heat and cold had little influence on Scrooge. No warmth could warm, no wintry weather chill him. No wind that blew was bitterer than he, no falling snow was more intent upon its purpose, no pelting rain less open to entreaty. Foul weather didn’t know where to have him. The heaviest rain, and snow, and hail, and sleet, could boast of the advantage over him in only one respect. They often ‘came down’ handsomely, and Scrooge never did.",
  note:
    "Glossary: ‘tight-fisted’ = mean with money; ‘covetous’ = greedy for what others have; ‘flint’ = a hard stone that makes sparks when struck with steel; ‘rime’ = frost; ‘gait’ = way of walking; ‘dog-days’ = the hottest days of summer; ‘entreaty’ = a pleading request; ‘came down handsomely’ = a pun: rain falls heavily, and to ‘come down handsomely’ also meant to pay out money generously.",
};

const JEKYLL_DOOR = {
  id: "jekyll-story-of-the-door",
  title: "Story of the Door",
  source: "Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde (1886), Chapter 1",
  text:
    "“Well, it was this way,” returned Mr. Enfield: “I was coming home from some place at the end of the world, about three o’clock of a black winter morning, and my way lay through a part of town where there was literally nothing to be seen but lamps. Street after street, and all the folks asleep—street after street, all lighted up as if for a procession and all as empty as a church—till at last I got into that state of mind when a man listens and listens and begins to long for the sight of a policeman. All at once, I saw two figures: one a little man who was stumping along eastward at a good walk, and the other a girl of maybe eight or ten who was running as hard as she was able down a cross street. Well, sir, the two ran into one another naturally enough at the corner; and then came the horrible part of the thing; for the man trampled calmly over the child’s body and left her screaming on the ground. It sounds nothing to hear, but it was hellish to see. It wasn’t like a man; it was like some damned Juggernaut.”",
  note:
    "Mr Enfield is telling his cousin Mr Utterson, a lawyer, a story while they walk in London. The ‘little man’ is Mr Hyde. A ‘Juggernaut’ is a huge, unstoppable force that crushes whatever is in its way. The story is told second-hand: we hear Enfield’s account inside Stevenson’s third-person narrative.",
};

const RED_ROOM = {
  id: "jane-eyre-red-room",
  title: "The red-room",
  source: "Charlotte Brontë, Jane Eyre (1847), Chapter 2",
  text:
    "The red-room was a square chamber, very seldom slept in, I might say never, indeed, unless when a chance influx of visitors at Gateshead Hall rendered it necessary to turn to account all the accommodation it contained: yet it was one of the largest and stateliest chambers in the mansion. A bed supported on massive pillars of mahogany, hung with curtains of deep red damask, stood out like a tabernacle in the centre; the two large windows, with their blinds always drawn down, were half shrouded in festoons and falls of similar drapery; the carpet was red; the table at the foot of the bed was covered with a crimson cloth; the walls were a soft fawn colour with a blush of pink in it; the wardrobe, the toilet-table, the chairs were of darkly polished old mahogany. Out of these deep surrounding shades rose high, and glared white, the piled-up mattresses and pillows of the bed, spread with a snowy Marseilles counterpane. Scarcely less prominent was an ample cushioned easy-chair near the head of the bed, also white, with a footstool before it; and looking, as I thought, like a pale throne.\n\nThis room was chill, because it seldom had a fire; it was silent, because remote from the nursery and kitchen; solemn, because it was known to be so seldom entered.",
  note:
    "Ten-year-old Jane, an orphan living with her cruel aunt Mrs Reed, has fought back against her bullying cousin John and is locked in the red-room as punishment. Her uncle, Mr Reed, died in this room. The adult Jane narrates. ‘Damask’ = a rich patterned fabric; a ‘tabernacle’ = a sacred tent or shrine; ‘counterpane’ = bedspread.",
};

const SECRET_GARDEN = {
  id: "secret-garden-ch1",
  title: "Mary Lennox",
  source: "Frances Hodgson Burnett, The Secret Garden (1911), Chapter 1",
  text:
    "When Mary Lennox was sent to Misselthwaite Manor to live with her uncle everybody said she was the most disagreeable-looking child ever seen. It was true, too. She had a little thin face and a little thin body, thin light hair and a sour expression. Her hair was yellow, and her face was yellow because she had been born in India and had always been ill in one way or another.",
  note:
    "Mary has grown up in British-ruled India, ignored by her parents and waited on by servants. After her parents die in a cholera outbreak she is sent to her uncle’s lonely house on the Yorkshire moors, where she discovers a garden that has been locked for ten years. The narrator is third person and openly gives opinions.",
};

const ORIGINAL_LETTER = {
  id: "original-the-letter",
  title: "The Letter",
  source: "Original novel opening written for this app",
  text:
    "The day the letter came, the sea outside our window was the colour of a bruise.\n\nI was twelve, and I had decided that nothing interesting would ever happen to me. Mum was at the harbour office until six. Grandad was asleep in his chair, his mouth open, the newspaper rising and falling on his chest like a small grey tide. The house smelt of toast and wet coats.\n\nThe envelope was lying face down on the mat. Thick, cream-coloured, heavy as a slice of cake. When I turned it over, my own name stared back at me in handwriting I had never seen before: tall, sloping letters that leaned forward as if they were in a hurry to arrive.\n\nMiss Nell Carrow. By hand.\n\nBy hand. Which meant someone had walked up our path. Someone had stood at our door, close enough to knock, and had chosen not to.\n\nI looked out of the window. The lane was empty. The gulls had gone quiet. Far out, beyond the harbour wall, a single boat with no lights was turning slowly back towards the open water.\n\nLater, much later, I would wish I had put the letter in the fire. But I didn’t know that then. I was twelve, and I was bored, and I opened it.",
  note: "An original first chapter opening, written to practise analysing narrative voice, foreshadowing, setting and tension.",
};

const ORIGINAL_FIRST_DAY = {
  id: "original-first-day",
  title: "First Day",
  source: "Original novel extract written for this app",
  text:
    "Priya had been in Singapore for nine days, and the heat still surprised her every time the doors slid open. It was not like the heat at home in Leeds, which came in polite, short visits. This heat moved in and stayed.\n\nThe school corridor was bright and loud. Somewhere a bell was ringing, though no one seemed to be hurrying. Priya held her timetable so tightly that the corner had gone soft and grey under her thumb.\n\nRoom 8C. She checked it again. Room 8C.\n\nInside, twenty-six faces turned towards the door at exactly the same moment, like sunflowers following the sun, except that she was not the sun, and nobody looked pleased.\n\n“You must be the new girl,” said the teacher, smiling with all of her teeth.\n\nPriya nodded. She had prepared a sentence on the plane, a good one, about where she was from and what she liked. It had vanished.\n\nThen a boy at the back pushed out the empty chair beside him with his foot. He did not look up from his drawing. He did not smile. But he moved his pencil case to make room, and he kept it there, and that was something.\n\nPriya sat down. Outside, the rain began all at once, hammering on the covered walkway as if someone had been waiting for permission.",
  note: "An original extract in the third person limited, written to practise analysing perspective, setting, characterisation and endings.",
};

export const theNovel: Topic = {
  id: "the-novel",
  title: "Reading the Novel",
  subject: "Novel",
  icon: "📖",
  summary: "Narrators, characters, settings, themes and structure.",
  intro:
    "A novel is hundreds of pages of choices: who tells the story, where it begins, what the weather is doing, which object keeps coming back. In this topic you will learn to spot those choices and explain why a writer made them, using some of the greatest openings in English fiction (Dickens, Brontë, Stevenson and Burnett) alongside the novel you study in class. By the end you will be able to track a character or theme across a whole book and write about it like a critic, not a summariser.",

  guide: [
    {
      id: "reading-like-a-writer",
      heading: "Reading like a writer: the novel as a set of choices",
      discovery: {
        problem:
          "Imagine you are about to write a novel about a lonely child who finds a friend. Before you write a single sentence, list at least four decisions you will have to make. (Think: who tells it? where? when does it start?)",
        idea:
          "You probably listed things like: who narrates (the child, or an outside voice?), where and when it is set, whether to start calmly or in the middle of the action, how to show the child is lonely without saying ‘she was lonely’, and how it ends. Every one of those is a **choice**, and every choice has an **effect** on the reader. Analysing a novel simply means noticing a choice and explaining its effect.",
      },
      body:
        "A **novel** is a long work of **prose fiction**: invented stories written in sentences and paragraphs rather than lines of verse. The word comes from the Italian *novella*, meaning a ‘new’ kind of tale. Novels usually have many characters, several settings and a plot that develops over many chapters.\n\nThe most important idea in this whole topic is that a novel is **constructed**. Pip, Scrooge and Jane Eyre are not real people who happened to be written down; they are made out of words chosen by a **writer** (the real person, e.g. Charles Dickens). When you analyse, you are always asking what the writer did and why.\n\nThat is why strong answers name the writer and use active verbs: *Dickens presents…*, *Brontë suggests…*, *Burnett contrasts…*. Weak answers talk about characters as if they were friends: *Scrooge is mean because he just is*.\n\nUse three questions on every extract:\n\n- **WHAT** is happening or being shown? (the content)\n- **HOW** has the writer shown it? (the methods: narration, word choice, imagery, sentence structure, structure of the chapter)\n- **WHY** did they do it? (the effect on the reader and the writer’s purpose or message)\n\nA summary answers only WHAT. Analysis lives in HOW and WHY.\n\nYou will meet two kinds of method. **Language** methods work at the level of words and sentences (a simile, a list, a verb). **Structural** methods work at the level of the whole text (where a chapter starts, a flashback, a shift in focus, a cliffhanger). The best answers use both.",
      keyPoints: [
        "A novel is constructed: characters and events are the writer’s deliberate choices.",
        "Name the writer and use active verbs: ‘Dickens presents…’, ‘Brontë suggests…’.",
        "Ask WHAT, HOW and WHY; summary is only WHAT.",
        "Methods can be language (words, sentences) or structure (the order and shape of the story).",
      ],
      thinkDeeper:
        "If every detail in a novel is a choice, does that mean every detail must be meaningful? Think of a detail in your class novel that seems unimportant. Argue for one possible reason the writer included it, then argue against yourself.",
    },
    {
      id: "narrative-perspective",
      heading: "Narrative perspective: who is telling the story?",
      discovery: {
        problem:
          "Rewrite this sentence three ways: ‘I opened the door and my heart hammered.’ First as ‘She…’, then as ‘You…’. Read all three aloud. Which feels closest to the action? Which feels strangest?",
        idea:
          "‘I’ puts you inside one head; ‘she’ lets you watch from a little further away; ‘you’ drags the reader into the role of the character, which feels intense but odd. Same event, three different relationships between reader and story. That relationship is what **narrative perspective** controls.",
      },
      body:
        "The **narrator** is the voice telling the story. Never confuse the narrator with the **author**: Charlotte Brontë was not an orphan locked in a red-room; she created a narrator, Jane, who was. **Narrative perspective** (also called **point of view**) is the position the story is told from.\n\n- **First person** uses ‘I’ and ‘we’. The narrator is a character in the story, e.g. Pip in *Great Expectations*, Jane in *Jane Eyre*, Tommo in Michael Morpurgo’s *Private Peaceful*. Effect: intimacy and direct access to thoughts and feelings, but we only know what this one person knows, and they may be biased.\n- **Second person** uses ‘you’ as the main character. It is rare in whole novels because it is hard to sustain; it can feel immersive, accusing or unsettling.\n- **Third person limited** (sometimes called **close third person**) uses ‘he’, ‘she’ or ‘they’ but stays close to one character’s thoughts. John Boyne’s *The Boy in the Striped Pyjamas* stays close to nine-year-old Bruno, so we see the world through his limited understanding.\n- **Third person omniscient** (‘all-knowing’) can move into any character’s mind, knows past and future, and often comments on the action. Dickens’s narrator in *A Christmas Carol* chats to us directly and judges Scrooge openly.\n\nSome novels use **multiple narrators**. R. J. Palacio’s *Wonder* is told in sections by Auggie and by people around him, such as his sister Via and his friend Jack; Malorie Blackman’s *Noughts and Crosses* alternates between Sephy and Callum. This lets readers see the same events from different sides.\n\nAlso notice **tense**. Most novels use the past tense, which feels like a story being remembered or retold. The **present tense** (‘I open the door’) creates immediacy, as if events are unfolding now.\n\nWhen you write about perspective, always go one step further than naming it: say what it lets the reader know or feel, and what it hides.",
      diagram:
        '<svg viewBox="0 0 330 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four narrative perspectives compared as camera positions"><rect x="5" y="5" width="155" height="85" rx="8" fill="#fef3c7" stroke="#d97706"/><text x="82" y="26" font-size="13" font-weight="bold" text-anchor="middle" fill="#92400e">First person: I</text><text x="82" y="46" font-size="11" text-anchor="middle" fill="#92400e">camera inside one</text><text x="82" y="61" font-size="11" text-anchor="middle" fill="#92400e">character’s head</text><text x="82" y="79" font-size="11" text-anchor="middle" fill="#b45309">close but limited</text><rect x="170" y="5" width="155" height="85" rx="8" fill="#fce7f3" stroke="#db2777"/><text x="247" y="26" font-size="13" font-weight="bold" text-anchor="middle" fill="#9d174d">Second person: you</text><text x="247" y="46" font-size="11" text-anchor="middle" fill="#9d174d">camera pointed at</text><text x="247" y="61" font-size="11" text-anchor="middle" fill="#9d174d">the reader</text><text x="247" y="79" font-size="11" text-anchor="middle" fill="#be185d">immersive, unsettling</text><rect x="5" y="100" width="155" height="85" rx="8" fill="#dbeafe" stroke="#2563eb"/><text x="82" y="121" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Third limited: he/she</text><text x="82" y="141" font-size="11" text-anchor="middle" fill="#1e3a8a">camera over one</text><text x="82" y="156" font-size="11" text-anchor="middle" fill="#1e3a8a">character’s shoulder</text><text x="82" y="174" font-size="11" text-anchor="middle" fill="#1d4ed8">one mind, some distance</text><rect x="170" y="100" width="155" height="85" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="247" y="121" font-size="13" font-weight="bold" text-anchor="middle" fill="#14532d">Third omniscient</text><text x="247" y="141" font-size="11" text-anchor="middle" fill="#14532d">camera high above</text><text x="247" y="156" font-size="11" text-anchor="middle" fill="#14532d">seeing every mind</text><text x="247" y="174" font-size="11" text-anchor="middle" fill="#15803d">all-knowing, can judge</text></svg>',
      diagramCaption: "Think of narrative perspective as where the writer places the camera.",
      keyPoints: [
        "The narrator is not the author: the narrator is a voice the author created.",
        "First person = intimate but limited; third limited = one character’s view with some distance; omniscient = all-knowing and can comment.",
        "Multiple narrators let the reader compare versions of the same events.",
        "Always explain what the perspective reveals AND what it hides.",
      ],
      thinkDeeper:
        "*The Boy in the Striped Pyjamas* is told in the third person but stays tightly with Bruno. Why might that be more powerful than letting Bruno narrate in the first person, or using an all-knowing narrator who explains everything?",
    },
    {
      id: "unreliable-narrators",
      heading: "Unreliable narrators, older narrators and dramatic irony",
      passage: GREAT_EXPECTATIONS,
      discovery: {
        problem:
          "Read the first paragraph of the Great Expectations extract. The child Pip is described as ‘the small bundle of shivers’. Would a frightened small boy describe himself like that? Who is really choosing those words?",
        idea:
          "No frightened child calls himself ‘a small bundle of shivers’. That witty, slightly sad phrase belongs to the **adult Pip**, looking back. *Great Expectations* has a **retrospective narrator**: we feel the child’s terror and hear the grown man’s wry, sympathetic voice at the same time. Spotting this double voice is a top-level reading skill.",
      },
      body:
        "A narrator is a character too, so their account can be limited, biased or simply wrong. An **unreliable narrator** is one whose version of events the reader cannot fully trust. Narrators can be unreliable because they are:\n\n- **naïve**: too young or innocent to understand what they see (Bruno in *The Boy in the Striped Pyjamas*);\n- **biased**: they dislike someone, or want to look good themselves;\n- **deceptive**: they deliberately hide or twist the truth;\n- **confused or disturbed**: frightened, ill or not thinking clearly;\n- **distant**: remembering events from long ago, so memory has been reshaped.\n\nWhen a narrator misunderstands something the reader *does* understand, the result is **dramatic irony**: the reader knows more than the character. With a naïve narrator this can be heartbreaking, because we can see the danger the character cannot.\n\nMany classic novels use a **retrospective first-person narrator**: an older person telling the story of their younger self. In *Great Expectations* the adult Pip describes his childhood. Notice the **dual perspective**: the child’s experience (terror in the churchyard) is filtered through the adult’s vocabulary and judgement (the long, controlled sentence; the gentle humour of ‘infant children of the aforesaid’). Jane Eyre is narrated the same way.\n\nHow do you spot an unreliable narrator?\n\n- Other characters react in ways that do not match the narrator’s version.\n- The narrator contradicts themselves or leaves obvious gaps.\n- The narrator’s strong feelings colour every description.\n- The narrator admits that memory is uncertain (‘seems to me’, ‘as I thought’).\n\nUnreliability is not a flaw in the novel. Writers use it on purpose to make readers think, judge and read between the lines.",
      keyPoints: [
        "An unreliable narrator’s account cannot be fully trusted: they may be naïve, biased, deceptive, confused or distant.",
        "Dramatic irony: the reader understands more than the character or narrator.",
        "A retrospective narrator gives a dual perspective: the child’s experience in the adult’s words.",
        "Unreliability is a deliberate technique that makes readers read between the lines.",
      ],
      thinkDeeper:
        "Every first-person narrator is selecting what to tell us. Is there such a thing as a completely reliable first-person narrator? Use a narrator you know to argue your case.",
    },
    {
      id: "characterisation",
      heading: "Characterisation: how writers build people out of words",
      passage: CHRISTMAS_CAROL,
      discovery: {
        problem:
          "Look at the second sentence of the Scrooge extract: ‘a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!’ Count the words describing Scrooge before the noun ‘sinner’. What do most of them have in common, and why pile up so many?",
        idea:
          "Most of them are ‘-ing’ words describing hands gripping and pulling: squeezing, wrenching, grasping, scraping, clutching. Together they make Scrooge’s greed physical, as if he is always tightening his grip on money. Piling them up in a **list** makes the description relentless and almost comic: the narrator seems unable to stop. That is **characterisation** through language.",
      },
      body:
        "**Characterisation** is the way a writer creates and reveals a character. There are two broad kinds.\n\n- **Direct characterisation**: the writer or narrator *tells* us what the character is like. ‘Everybody said she was the most disagreeable-looking child ever seen’ (*The Secret Garden*).\n- **Indirect characterisation**: the writer *shows* us, and we infer. If a character trips a child and walks on without looking back, nobody needs to write ‘he was cruel’.\n\nIndirect characterisation usually works through five channels. Remember them as **STEAL**:\n\n- **S**peech: what they say and how (Magwitch’s ‘Hold your noise!’ is all commands).\n- **T**houghts: what we learn from inside their head.\n- **E**ffect on others: how other characters react to them.\n- **A**ctions: what they do, especially under pressure.\n- **L**ooks: appearance, clothing, body language.\n\nWriters also use **names**. ‘Scrooge’ sounds harsh and tight, and became so famous that ‘a scrooge’ is now a dictionary word for a miser. ‘Hyde’ sounds like ‘hide’, fitting a man of secrets.\n\nDickens is especially fond of linking inside and outside. In the extract, Scrooge’s coldness is emotional, but Dickens makes it physical: ‘The cold within him froze his old features’. His frostiness is so strong it affects the room around him (‘he iced his office in the dog-days’). This is an **extended metaphor** of cold running through the whole description.\n\nWhen you analyse a character, avoid simply listing adjectives (‘Scrooge is mean, cold and lonely’). Instead pick one precise method and zoom in: what does *this word* or *this action* make the reader think and feel?",
      diagram:
        '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="STEAL: five ways readers infer character"><circle cx="160" cy="100" r="38" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/><text x="160" y="97" font-size="12" font-weight="bold" text-anchor="middle" fill="#4c1d95">The</text><text x="160" y="112" font-size="12" font-weight="bold" text-anchor="middle" fill="#4c1d95">character</text><line x1="160" y1="62" x2="160" y2="38" stroke="#7c3aed" stroke-width="2"/><line x1="124" y1="88" x2="80" y2="72" stroke="#7c3aed" stroke-width="2"/><line x1="196" y1="88" x2="240" y2="72" stroke="#7c3aed" stroke-width="2"/><line x1="136" y1="130" x2="105" y2="160" stroke="#7c3aed" stroke-width="2"/><line x1="184" y1="130" x2="215" y2="160" stroke="#7c3aed" stroke-width="2"/><rect x="110" y="8" width="100" height="30" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="160" y="28" font-size="12" text-anchor="middle" fill="#92400e">S: Speech</text><rect x="4" y="56" width="106" height="30" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="57" y="76" font-size="12" text-anchor="middle" fill="#92400e">T: Thoughts</text><rect x="198" y="56" width="120" height="30" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="258" y="76" font-size="11" text-anchor="middle" fill="#92400e">E: Effect on others</text><rect x="40" y="160" width="110" height="30" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="95" y="180" font-size="12" text-anchor="middle" fill="#92400e">A: Actions</text><rect x="170" y="160" width="110" height="30" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="225" y="180" font-size="12" text-anchor="middle" fill="#92400e">L: Looks</text></svg>',
      diagramCaption: "STEAL: the five channels of indirect characterisation. Names and narrator comments add direct clues.",
      keyPoints: [
        "Direct characterisation tells; indirect characterisation shows and makes the reader infer.",
        "STEAL: Speech, Thoughts, Effect on others, Actions, Looks.",
        "Names, symbols and extended imagery (like Scrooge’s cold) also build character.",
        "Zoom in on one precise method rather than listing adjectives.",
      ],
      thinkDeeper:
        "Dickens tells us directly that Scrooge is an ‘old sinner’. Is direct characterisation always weaker than indirect? When might a writer deliberately choose to tell rather than show?",
    },
    {
      id: "character-change",
      heading: "Tracking how characters change across the novel",
      discovery: {
        problem:
          "Here are three moments from A Christmas Carol, out of order. (a) Scrooge becomes ‘as good a friend, as good a master, and as good a man, as the good old city knew’. (b) Scrooge is ‘solitary as an oyster’. (c) Scrooge is shown visions of his past, present and possible future by three spirits. Put them in order and name what happens in the middle that makes the change possible.",
        idea:
          "The order is (b), (c), (a). The middle stage, the spirits’ visions, is the **turning point**: it forces Scrooge to see the effects of his choices. Any character change needs a cause. When you write about change, you must explain *what* changes, *when* and *why*, using quotations from different points in the novel.",
      },
      body:
        "Characters in novels are not frozen. A **dynamic character** changes in an important way during the story; a **static character** stays essentially the same. The novelist E. M. Forster, in his lectures *Aspects of the Novel* (1927), also separated **flat characters** (built around a single idea or quality) from **round characters** (complex, and capable of surprising us).\n\nThe shape of a character’s change is called a **character arc**. A typical arc has:\n\n- a **starting point**: how the character is first presented (often in the opening chapter);\n- a **catalyst** or **turning point**: the event, person or discovery that pushes them to change;\n- an **end point**: who they have become, and what that shows.\n\nScrooge’s arc is famous because it is so complete: from ‘solitary as an oyster’ in Stave One to a man who becomes ‘as good a friend, as good a master, and as good a man, as the good old city knew’ in Stave Five. Mary Lennox in *The Secret Garden* changes from a sour, ‘contrary’ child who has never cared for anyone into a girl who looks after a garden, a cousin and herself.\n\nTo track change in your class novel, keep a **character log**: for each major character note a quotation from the beginning, the middle and the end, plus the chapter. When you write an essay, use these to show movement: ‘At first… However, after… By the end…’.\n\nAlso ask *why the writer wanted this change*. Dickens wanted readers to believe that even the hardest person can change and that generosity matters; Burnett suggests that care and fresh air can heal both bodies and minds. A character’s arc is often the clearest route to the novel’s **message**.",
      diagram:
        '<svg viewBox="0 0 330 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scrooge character arc from cold to generous"><line x1="20" y1="140" x2="315" y2="140" stroke="#64748b" stroke-width="1.5"/><text x="168" y="162" font-size="11" text-anchor="middle" fill="#334155">Stave One → Stave Five</text><path d="M30 120 C 90 120, 120 115, 160 85 S 250 40, 305 30" fill="none" stroke="#d97706" stroke-width="3"/><circle cx="30" cy="120" r="6" fill="#1e3a8a"/><circle cx="160" cy="85" r="6" fill="#7c3aed"/><circle cx="305" cy="30" r="6" fill="#16a34a"/><text x="30" y="92" font-size="11" text-anchor="start" fill="#1e3a8a">Start: cold,</text><text x="30" y="106" font-size="11" text-anchor="start" fill="#1e3a8a">‘solitary as an oyster’</text><text x="168" y="108" font-size="11" text-anchor="start" fill="#5b21b6">Turning point:</text><text x="168" y="122" font-size="11" text-anchor="start" fill="#5b21b6">the three spirits</text><text x="318" y="13" font-size="11" text-anchor="end" fill="#166534">End: ‘as good a man</text><text x="318" y="26" font-size="11" text-anchor="end" fill="#166534">as the good old city knew’</text></svg>',
      diagramCaption: "A character arc: starting point, turning point, end point. Always explain the cause of the change.",
      keyPoints: [
        "Dynamic characters change; static characters stay the same.",
        "A character arc = starting point, turning point (catalyst), end point.",
        "Track change with quotations from the beginning, middle and end.",
        "A character’s change often reveals the writer’s message.",
      ],
      thinkDeeper:
        "Some readers find Scrooge’s overnight transformation too sudden to be believable. Using what you know of how Dickens structures the story, build the best defence you can of his choice.",
    },
    {
      id: "setting-atmosphere",
      heading: "Setting and atmosphere",
      passage: RED_ROOM,
      discovery: {
        problem:
          "In the red-room extract, list every word connected to the colour red (there are at least four). Then jot down three feelings or ideas the colour red can suggest. Which of those fit a child locked in the room as a punishment?",
        idea:
          "You should find ‘red-room’, ‘deep red damask’, ‘the carpet was red’, ‘crimson cloth’ and even ‘a blush of pink’. Red can connote anger, danger, blood, shame, passion and power. Jane has just lost her temper and is being punished, so the room seems to reflect her rage and her fear. A setting can mirror a character’s feelings.",
      },
      body:
        "**Setting** is where and when a story takes place: the physical place, the time (season, time of day, historical period) and the social world (rich or poor, rules and expectations). **Atmosphere** (or **mood**) is the feeling a setting creates for the reader: tense, eerie, peaceful, oppressive, joyful.\n\nWriters use setting to do much more than show a backdrop. A setting can:\n\n- **create atmosphere**: Dickens’s ‘bleak place overgrown with nettles’ and ‘dark flat wilderness’ make the churchyard feel lonely and threatening before the convict even appears;\n- **reflect a character’s feelings**: the red-room’s colour and chill mirror Jane’s anger and isolation;\n- **symbolise an idea**: in *The Secret Garden*, a locked, neglected garden that slowly comes back to life parallels Mary’s own growth;\n- **build tension**: Enfield’s empty, lamp-lit streets ‘as empty as a church’ make the reader expect something to happen.\n\nA key technique is **pathetic fallacy**: giving human feelings to weather or nature, or using weather to reflect mood. Scrooge is compared to weather (‘No wind that blew was bitterer than he’); the rain at the end of a chapter can feel like grief or relief.\n\nWhen you analyse setting, look for:\n\n- **senses**: what can be seen, heard, felt? The red-room is ‘chill’ and ‘silent’;\n- **colour and light**: red against glaring white, darkness against lamps;\n- **verbs that make places active**: the bed ‘stood out’, the mattresses ‘glared white’;\n- **similes and metaphors**: the bed ‘like a tabernacle’, the chair ‘like a pale throne’ (both make the room feel grand, religious and judging).\n\nThe best answers link setting to character or theme: not just ‘the room is scary’ but ‘the room seems to sit in judgement on Jane, just as the Reed family does’.",
      diagram:
        '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Connotation web for the word red in the red-room"><ellipse cx="160" cy="95" rx="48" ry="26" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/><text x="160" y="100" font-size="14" font-weight="bold" text-anchor="middle" fill="#991b1b">red</text><line x1="125" y1="78" x2="80" y2="42" stroke="#dc2626"/><line x1="195" y1="78" x2="240" y2="42" stroke="#dc2626"/><line x1="112" y1="98" x2="62" y2="98" stroke="#dc2626"/><line x1="208" y1="98" x2="258" y2="98" stroke="#dc2626"/><line x1="130" y1="116" x2="95" y2="150" stroke="#dc2626"/><line x1="190" y1="116" x2="225" y2="150" stroke="#dc2626"/><text x="72" y="36" font-size="12" text-anchor="middle" fill="#7f1d1d">anger, rage</text><text x="248" y="36" font-size="12" text-anchor="middle" fill="#7f1d1d">danger, warning</text><text x="34" y="102" font-size="12" text-anchor="middle" fill="#7f1d1d">blood, death</text><text x="286" y="102" font-size="12" text-anchor="middle" fill="#7f1d1d">shame, blush</text><text x="90" y="166" font-size="12" text-anchor="middle" fill="#7f1d1d">wealth, power</text><text x="232" y="166" font-size="12" text-anchor="middle" fill="#7f1d1d">passion, fire</text><text x="160" y="186" font-size="11" text-anchor="middle" fill="#475569">Which fit Jane’s situation? (anger, punishment, Mr Reed’s death)</text></svg>',
      diagramCaption: "Zoom in on one word: list its connotations, then keep the ones that fit the character’s situation.",
      keyPoints: [
        "Setting = place + time + social world; atmosphere = the feeling it creates.",
        "Settings can create mood, mirror feelings, symbolise ideas and build tension.",
        "Pathetic fallacy uses weather or nature to reflect human emotion.",
        "Always link setting to character, theme or tension, not just ‘it is scary’.",
      ],
      thinkDeeper:
        "Brontë could have locked Jane in a cupboard or an attic. Why is a grand, rich, rarely-used bedroom where her uncle died a more powerful choice of setting? Find at least two reasons.",
    },
    {
      id: "plot-structure",
      heading: "Plot and structure: the shape of the story",
      discovery: {
        problem:
          "Think of a film or book you know well. On a scrap of paper draw a line graph: time along the bottom, tension up the side. Mark the moment of highest tension. Is it right at the end? What happens after it?",
        idea:
          "Most stories peak *before* the very end. After the highest point (the **climax**) there is usually a drop in tension while loose ends are tied up. That rise-peak-fall shape was mapped by the German writer Gustav Freytag in 1863 and is now called **Freytag’s pyramid**. Try the tension-graph tool in this topic to plot your class novel.",
      },
      body:
        "**Plot** is *what happens*: the sequence of events. **Structure** is *how the writer arranges* those events: what order, what pace, where chapters begin and end, and whose point of view we follow when.\n\n**Freytag’s pyramid** describes a classic five-part shape:\n\n- **Exposition**: introduces characters, setting and situation.\n- **Rising action**: complications and conflict build tension.\n- **Climax**: the turning point and highest tension.\n- **Falling action**: consequences unfold; tension eases.\n- **Resolution** (or **dénouement**): loose ends are tied up; a new normal.\n\nNovels play with this shape using structural techniques:\n\n- **Flashback**: jumping back in time. Morpurgo’s *Private Peaceful* moves between the present night and Tommo’s memories.\n- **Foreshadowing**: hints of what is to come. ‘Later, much later, I would wish I had put the letter in the fire’ warns us of trouble.\n- **In medias res**: starting in the middle of the action (Latin, ‘into the middle of things’).\n- **Cliffhanger**: ending a chapter on unresolved suspense. Dickens published many novels in weekly or monthly parts, so cliffhangers kept readers buying the next one.\n- **Multiple or dual timelines**: Louis Sachar’s *Holes* weaves a present-day story with stories from the past that turn out to be connected.\n- **Circular structure**: ending where it began. John Steinbeck’s *Of Mice and Men* begins and ends at the same pool by the Salinas River.\n- **Shifts in focus**: from wide description to one detail, from one character to another, from calm to action.\n\nChapter **openings** and **endings** deserve special attention. An opening must hook the reader; an ending must make them turn the page or pause to think. In the Great Expectations extract, a long, calm, scene-setting sentence is suddenly broken by a shout: ‘Hold your noise!’ That shift from stillness to violence is a structural choice that creates shock.\n\nWhen you write about structure, use words like *opens with*, *shifts*, *contrasts*, *builds*, *interrupts*, *returns to*, *ends with*, and always say *why* the writer arranged things this way.",
      diagram:
        '<svg viewBox="0 0 330 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Freytag pyramid showing exposition, rising action, climax, falling action and resolution"><polyline points="15,150 70,150 165,40 250,120 315,120" fill="none" stroke="#d97706" stroke-width="3"/><circle cx="165" cy="40" r="6" fill="#dc2626"/><text x="42" y="168" font-size="11" text-anchor="middle" fill="#334155">Exposition</text><text x="70" y="100" font-size="11" text-anchor="middle" fill="#334155">Rising</text><text x="70" y="114" font-size="11" text-anchor="middle" fill="#334155">action</text><text x="165" y="26" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">Climax</text><text x="247" y="72" font-size="11" text-anchor="middle" fill="#334155">Falling</text><text x="247" y="86" font-size="11" text-anchor="middle" fill="#334155">action</text><text x="283" y="140" font-size="11" text-anchor="middle" fill="#334155">Resolution</text><line x1="10" y1="160" x2="10" y2="30" stroke="#94a3b8" stroke-width="1"/><text x="8" y="22" font-size="11" text-anchor="start" fill="#64748b">tension</text></svg>',
      diagramCaption: "Freytag’s pyramid: tension rises to a climax, then falls to a resolution.",
      keyPoints: [
        "Plot = what happens; structure = how and in what order the writer arranges it.",
        "Freytag’s pyramid: exposition, rising action, climax, falling action, resolution.",
        "Key structural devices: flashback, foreshadowing, in medias res, cliffhanger, dual timelines, circular structure.",
        "Openings hook; endings propel or reflect. Always ask why the writer arranged it this way.",
      ],
      thinkDeeper:
        "*Private Peaceful* opens near the end of the story in time, then fills in the past. What does a writer gain, and what risks losing, by letting readers sense the ending before they know the events?",
    },
    {
      id: "themes-motifs-symbols",
      heading: "Themes, motifs and symbols",
      passage: SECRET_GARDEN,
      discovery: {
        problem:
          "Which of these is a theme of The Secret Garden, and which is just its subject? (1) ‘A garden.’ (2) ‘Care and connection can bring neglected things, and neglected people, back to life.’ What makes the difference?",
        idea:
          "(1) is a **subject**: what the book is about on the surface. (2) is a **theme**: a big idea or message the novel explores, phrased as a statement about life. Good essays turn one-word themes (‘friendship’, ‘power’) into ideas: what does the novel *suggest* about friendship?",
      },
      body:
        "A **theme** is a central idea the novel explores, such as power, prejudice, friendship, growing up, guilt or identity. Themes are not the same as the story: the story is what happens; the theme is what it *means*.\n\nTop answers express a theme as an **idea** rather than a single word. Compare:\n\n- ‘The theme is loneliness.’ (a label)\n- ‘Burnett suggests that loneliness makes people unkind, and that being needed can cure it.’ (an argument you can prove)\n\nA **motif** is an image, object, idea or phrase that **recurs** through a novel and builds meaning each time it returns: cold and fire in *A Christmas Carol*; doors and keys in *Strange Case of Dr Jekyll and Mr Hyde* and *The Secret Garden*; digging in *Holes*.\n\nA **symbol** is something concrete that stands for something abstract. In *The Secret Garden* the locked garden, shut up for ten years, can symbolise grief and neglect; its return to life symbolises healing. In Stevenson’s novella, the shabby back door can symbolise the hidden, secret side of a respectable man.\n\nNotice how the opening of *The Secret Garden* plants these ideas. Mary’s ‘sour expression’ and ‘yellow’, sickly face make her a kind of neglected plant herself; the repetition ‘a little thin face and a little thin body, thin light hair’ stresses how underfed in every sense she is. The narrator’s blunt comment ‘It was true, too’ is surprisingly harsh, and makes us curious whether this unlovable child can change.\n\nHow to analyse a theme across a novel:\n\n- Find where it is **introduced** (often early, quietly).\n- Track how it **develops** through key events and characters.\n- See how it is **resolved** or left open at the end.\n- Ask what the writer wants us to **think** or **feel** about it.",
      keyPoints: [
        "A theme is a central idea; phrase it as a statement, not just a word.",
        "A motif recurs and gains meaning; a symbol is concrete and stands for something abstract.",
        "Track a theme: introduced → developed → resolved, then ask what the writer wants us to think.",
        "Openings often quietly plant the novel’s themes.",
      ],
      thinkDeeper:
        "Can a symbol mean something the writer never intended? If a reader finds a convincing symbolic reading that the author did not plan, is that reading wrong?",
    },
    {
      id: "context-whole-novel",
      heading: "Context, purpose and writing about the whole novel",
      discovery: {
        problem:
          "Your teacher asks: ‘How does the writer present loneliness across the novel?’ You have three brilliant quotations, but all three come from Chapter 1. What is the problem with your plan, and how would you fix it?",
        idea:
          "The question says **across the novel**. Three quotations from one chapter can only show how loneliness is *introduced*, not how it *develops*. Fix it by choosing evidence from the beginning, middle and end, so your essay can show change or development. This is the single biggest difference between a good and an excellent whole-novel essay.",
      },
      body:
        "**Context** is the background that helps explain a text: the **historical and social** world it was written in, the writer’s **life**, and the **literary** traditions it belongs to. The **writer’s purpose** is what they wanted to achieve: to entertain, warn, persuade, criticise society, or make readers feel or think something.\n\nExamples from our extracts:\n\n- *A Christmas Carol* (1843) was written in the ‘Hungry Forties’, when many poor families faced the workhouse. Scrooge’s cold questions in Stave One, ‘Are there no prisons?’ and ‘And the Union workhouses?’, voice harsh attitudes Dickens wanted readers to reject. His purpose was to persuade the comfortable middle classes to show charity.\n- *Strange Case of Dr Jekyll and Mr Hyde* (1886) appeared when respectable Victorian gentlemen were expected to hide any unrespectable behaviour. The idea of a hidden second self explores that hypocrisy.\n- *Jane Eyre* (1847) was published under the male-sounding pen name ‘Currer Bell’. Jane’s cry of ‘Unjust!—unjust!’ and her refusal to stay silent challenged ideas that girls should be obedient and grateful.\n\nUse context **only when it sharpens your point** about the text. Weak: ‘Victorian times were very poor. Scrooge is mean.’ Strong: ‘By making Scrooge repeat arguments that real Victorians used about the poor, Dickens forces readers to hear how heartless those arguments sound.’\n\n**Writing about a whole novel**\n\n- Start with a **thesis**: a one-sentence argument answering the question.\n- Choose **quotations from different points**: beginning, middle (turning point) and end.\n- Use **short, embedded quotations** you can memorise, e.g. ‘solitary as an oyster’.\n- Show **development**: ‘At first…’, ‘This shifts when…’, ‘By the end…’.\n- Mix **close analysis** (one word) with **big-picture** comments (structure, character arc, purpose).\n- End with a **judgement** about the writer’s message.\n\nA simple **theme tracker** helps you revise: draw a line for the novel, mark five key moments, and write one memorised quotation and one word of analysis under each.",
      diagram:
        '<svg viewBox="0 0 330 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Theme tracker timeline with beginning, middle and end evidence"><line x1="20" y1="70" x2="310" y2="70" stroke="#475569" stroke-width="3"/><circle cx="40" cy="70" r="8" fill="#2563eb"/><circle cx="165" cy="70" r="8" fill="#7c3aed"/><circle cx="290" cy="70" r="8" fill="#16a34a"/><text x="40" y="50" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Beginning</text><text x="165" y="50" font-size="12" font-weight="bold" text-anchor="middle" fill="#5b21b6">Turning point</text><text x="290" y="50" font-size="12" font-weight="bold" text-anchor="middle" fill="#166534">End</text><text x="40" y="98" font-size="11" text-anchor="middle" fill="#334155">theme</text><text x="40" y="112" font-size="11" text-anchor="middle" fill="#334155">introduced</text><text x="165" y="98" font-size="11" text-anchor="middle" fill="#334155">theme tested</text><text x="165" y="112" font-size="11" text-anchor="middle" fill="#334155">or shifts</text><text x="290" y="98" font-size="11" text-anchor="middle" fill="#334155">theme</text><text x="290" y="112" font-size="11" text-anchor="middle" fill="#334155">resolved</text><text x="165" y="145" font-size="11" text-anchor="middle" fill="#64748b">one quotation + one analysed word at each point</text></svg>',
      diagramCaption: "A theme tracker: evidence from the beginning, turning point and end lets you show development.",
      keyPoints: [
        "Context = historical/social, biographical and literary background; purpose = what the writer wanted to achieve.",
        "Use context only when it sharpens a point about the text.",
        "Whole-novel answers need a thesis and quotations from the beginning, middle and end.",
        "Show development with ‘At first… This shifts when… By the end…’.",
      ],
      thinkDeeper:
        "Do you need to know about Victorian workhouses to understand *A Christmas Carol*? Argue whether a reader with no historical knowledge would still grasp Dickens’s message, and what (if anything) they would miss.",
    },
  ],

  passages: [GREAT_EXPECTATIONS, CHRISTMAS_CAROL, JEKYLL_DOOR, RED_ROOM, SECRET_GARDEN],

  quoteBank: [
    {
      quote: "the small bundle of shivers growing afraid of it all and beginning to cry, was Pip",
      source: "Pip (adult narrator), Great Expectations, Chapter 1",
      analysis:
        "The metaphor ‘bundle of shivers’ reduces Pip to a tiny, shaking object, stressing his vulnerability. Placing ‘was Pip’ at the very end of a huge sentence of graves and wilderness makes him seem small and lost in a vast landscape. The wry phrasing reveals the adult narrator looking back with sympathy.",
      themes: ["vulnerability", "childhood", "narrative voice"],
    },
    {
      quote: "“Hold your noise!” cried a terrible voice",
      source: "The convict (Magwitch), Great Expectations, Chapter 1",
      analysis:
        "The sudden imperative breaks the calm, reflective opening, creating shock. Magwitch speaks only in commands and threats, so his speech characterises him as violent and desperate. The structural shift from stillness to sound mirrors Pip’s fright.",
      themes: ["fear", "crime", "power"],
    },
    {
      quote: "soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars",
      source: "Pip describing the convict, Great Expectations, Chapter 1",
      analysis:
        "The repeated ‘and’ (polysyndeton) builds a relentless list of passive verbs: things have been done *to* the man. Although he is terrifying, the list quietly invites sympathy, suggesting he is also a victim of a harsh world. This complexity hints at the convict’s later importance.",
      themes: ["suffering", "crime", "sympathy"],
    },
    {
      quote: "secret, and self-contained, and solitary as an oyster",
      source: "Narrator describing Scrooge, A Christmas Carol, Stave One",
      analysis:
        "The simile compares Scrooge to an oyster, closed in a hard shell. The sibilance of ‘secret… self-contained… solitary’ sounds hissing and cold. Yet an oyster can hold a pearl, hinting that something valuable might be hidden inside him, foreshadowing his change.",
      themes: ["isolation", "greed", "redemption"],
    },
    {
      quote: "He carried his own low temperature always about with him",
      source: "Narrator describing Scrooge, A Christmas Carol, Stave One",
      analysis:
        "Part of an extended metaphor of cold: Scrooge’s lack of warmth is emotional, but Dickens makes it physical, as if he chills every place he enters. This links to the motif of cold and warmth that tracks his transformation.",
      themes: ["isolation", "cold vs warmth"],
    },
    {
      quote: "Marley was dead: to begin with.",
      source: "Narrator, A Christmas Carol, Stave One (opening line)",
      analysis:
        "A blunt, short opening sentence that hooks the reader with death. The colon and ‘to begin with’ create a chatty, almost joking omniscient voice, while foreshadowing that Marley will not stay quietly dead.",
      themes: ["death", "narrative voice", "the supernatural"],
    },
    {
      quote: "as good a friend, as good a master, and as good a man, as the good old city knew",
      source: "Narrator describing Scrooge, A Christmas Carol, Stave Five",
      analysis:
        "The triple structure and repetition of ‘good’ sound joyful and complete, mirroring the many negative words piled up in Stave One. Scrooge’s transformation now reaches every role he plays: friend, employer and human being.",
      themes: ["redemption", "generosity", "change"],
    },
    {
      quote: "a man of a rugged countenance that was never lighted by a smile",
      source: "Narrator describing Mr Utterson, Strange Case of Dr Jekyll and Mr Hyde, Chapter 1",
      analysis:
        "The opening direct characterisation presents Utterson as serious and restrained, a model of Victorian respectability. The light imagery (‘never lighted’) introduces a novella full of darkness and hidden feelings.",
      themes: ["respectability", "restraint"],
    },
    {
      quote: "the man trampled calmly over the child’s body",
      source: "Mr Enfield describing Hyde, Strange Case of Dr Jekyll and Mr Hyde, Chapter 1",
      analysis:
        "The verb ‘trampled’ suggests an animal crushing something underfoot, but the adverb ‘calmly’ is what horrifies: Hyde feels nothing. The contrast between violence and calm characterises Hyde as inhuman before we even see him.",
      themes: ["violence", "duality", "evil"],
    },
    {
      quote: "a blind forehead of discoloured wall",
      source: "Narrator describing the door’s building, Strange Case of Dr Jekyll and Mr Hyde, Chapter 1",
      analysis:
        "Personification turns the building into a face with no eyes. A ‘blind’ wall suggests secrecy and refusal to be seen, so the setting itself becomes a symbol of the hidden life behind a respectable front.",
      themes: ["secrecy", "setting as symbol"],
    },
    {
      quote: "I resisted all the way: a new thing for me",
      source: "Jane (adult narrator), Jane Eyre, Chapter 2 (opening)",
      analysis:
        "A dramatic chapter opening in medias res. ‘Resisted’ shows Jane’s defiance, while ‘a new thing for me’ signals a turning point in her character: this is the moment she stops accepting injustice silently.",
      themes: ["injustice", "rebellion", "identity"],
    },
    {
      quote: "looking, as I thought, like a pale throne",
      source: "Jane describing the chair in the red-room, Jane Eyre, Chapter 2",
      analysis:
        "The simile turns an ordinary chair into a ghostly seat of judgement, as if an invisible ruler sits in it. ‘As I thought’ reminds us the image comes from a frightened child’s imagination, filtered by the adult narrator.",
      themes: ["fear", "power", "the supernatural"],
    },
    {
      quote: "the most disagreeable-looking child ever seen. It was true, too.",
      source: "Narrator describing Mary Lennox, The Secret Garden, Chapter 1",
      analysis:
        "Direct characterisation that is startlingly blunt for a children’s book. The short follow-up sentence confirms the gossip, making the narrator seem honest and unsentimental, and making the reader curious whether such an unlikeable heroine can change.",
      themes: ["neglect", "change", "narrative voice"],
    },
    {
      quote: "It was the sweetest, most mysterious-looking place any one could imagine.",
      source: "Narrator describing the garden, The Secret Garden, Chapter 9",
      analysis:
        "Superlatives (‘sweetest’, ‘most mysterious-looking’) make the garden feel magical and full of possibility. ‘Mysterious’ keeps the sense of secrecy, while ‘sweetest’ contrasts sharply with Mary’s ‘sour expression’ in Chapter 1, hinting that the garden will change her.",
      themes: ["growth", "secrecy", "nature"],
    },
  ],

  modelWriting: [
    {
      title: "PEEL paragraph: how Dickens presents Scrooge",
      task: "How does Dickens present Scrooge in the extract from Stave One?",
      text:
        "Dickens presents Scrooge as a man so cold-hearted that his meanness has become physical. The narrator tells us that ‘The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek’. The extended metaphor of cold turns an emotional quality into a bodily one, as if years of refusing kindness have frozen his face. The verbs ‘nipped’ and ‘shrivelled’ make the cold seem to attack him, implying that his greed harms Scrooge himself as much as anyone else. This matters because Dickens is setting up a character arc: if Scrooge’s coldness is described as weather, then, like weather, it can change, and the warmth he finds in Stave Five will feel like a thaw. In this way Dickens prepares readers for his message that even the hardest heart can be melted by generosity.",
      annotations: [
        "Point answers the question directly and names the writer.",
        "Evidence is short, accurate and embedded in the sentence.",
        "Names the technique (extended metaphor) and then zooms in on two verbs.",
        "Offers an interpretation (his greed harms himself) rather than describing.",
        "Links to the whole-novel structure (Stave Five) and the writer’s purpose.",
      ],
    },
    {
      title: "Setting paragraph: the red-room",
      task: "How does Brontë use setting to present Jane’s situation?",
      text:
        "Brontë makes the red-room feel like a courtroom in which Jane, a child, is on trial. The furniture is described with religious and royal imagery: the bed ‘stood out like a tabernacle’ and the white chair looks ‘like a pale throne’. A tabernacle is a sacred shrine and a throne is a seat of power, so the room seems grand, holy and judging, while Jane is small and powerless inside it. The colour red is repeated (‘deep red damask’, ‘the carpet was red’, ‘crimson cloth’), and its connotations of anger and blood mirror both Jane’s rage at John Reed and the death of her uncle in this very room. Even the explanations in the final sentence, ‘chill, because it seldom had a fire; it was silent, because remote’, sound logical, yet they leave the room cold, silent and isolated, exactly like Jane’s position in the Reed family. The setting therefore becomes a symbol of her imprisonment and the unfairness she suffers.",
      annotations: [
        "Opens with an interpretive point (room as courtroom), not a description.",
        "Groups two similes as evidence for one idea.",
        "Explains connotations of colour and connects them to plot and character.",
        "Notices sentence structure (‘chill, because…’) as well as imagery.",
        "Ends by naming setting as symbol and linking to theme (injustice).",
      ],
    },
    {
      title: "Whole-novel paragraph: tracking change",
      task: "How does Dickens present change in Scrooge across A Christmas Carol?",
      text:
        "Across the novella, Dickens uses the motif of cold and warmth to chart Scrooge’s transformation. At first Scrooge is ‘solitary as an oyster’, a simile that shuts him inside a hard shell, and he ‘iced his office in the dog-days’, refusing warmth even to his clerk. The turning point comes when the spirits force him to witness the consequences of his choices, so that his own memories and fears break open the shell. By Stave Five Dickens reverses his opening technique: instead of a list of greedy words, he repeats ‘good’ in the triple ‘as good a friend, as good a master, and as good a man’. The mirrored structure shows the change is total, reaching every relationship. Dickens, writing in the 1840s when many poor families faced the workhouse, uses this complete transformation to persuade readers that it is never too late to choose generosity.",
      annotations: [
        "Thesis-style topic sentence names a motif that runs through the whole text.",
        "Evidence comes from the beginning, the turning point and the end.",
        "Comments on structure (Dickens mirrors his opening list) as well as language.",
        "Signposts development: ‘At first… The turning point… By Stave Five…’.",
        "Context is used briefly and purposefully to explain the writer’s aim.",
      ],
    },
  ],

  mnemonics: [
    {
      topic: "Five channels of indirect characterisation",
      device: "STEAL",
      explanation:
        "Speech, Thoughts, Effect on others, Actions, Looks. When you analyse a character, check each channel and pick the one with the richest evidence.",
    },
    {
      topic: "Freytag’s pyramid (the five stages of plot)",
      device: "Every Rocket Climbs, Falls, Returns",
      explanation:
        "Exposition, Rising action, Climax, Falling action, Resolution. Picture a rocket: launch pad, climb, peak, drop, landing.",
    },
    {
      topic: "Writing about a theme or character across the whole novel",
      device: "Then, Turn, The End",
      explanation:
        "Then: how it is presented at the beginning. Turn: the turning point where it shifts or is tested. The End: how it is resolved and what that suggests about the writer’s message. One memorised quotation for each.",
    },
    {
      topic: "Questions to ask of any extract",
      device: "WHAT, HOW, WHY",
      explanation:
        "WHAT is happening (content), HOW the writer shows it (methods), WHY they chose it (effect and purpose). A summary stops at WHAT; analysis lives in HOW and WHY.",
    },
  ],

  examMistakes: [
    "Retelling the plot instead of analysing: if a sentence could appear on a book-jacket blurb, it is probably summary, not analysis.",
    "Treating characters as real people (‘Scrooge should have been nicer’) instead of as the writer’s constructions (‘Dickens presents Scrooge as…’).",
    "Confusing the narrator with the author, e.g. writing ‘Charlotte Brontë was locked in the red-room’.",
    "Using quotations only from the opening chapter in an essay that asks about the whole novel, so no development is shown.",
    "Naming a technique (‘this is a simile’) without explaining the effect of the specific words.",
    "Long, dropped-in quotations of three lines or more instead of short, embedded phrases.",
    "Bolting on context (‘In Victorian times people were poor’) without linking it to the writer’s purpose or a specific quotation.",
    "Writing ‘the theme is friendship’ without saying what the novel suggests about friendship.",
  ],

  misconceptions: [
    {
      wrong: "The narrator and the author are the same person.",
      right: "The narrator is a voice the author created. Dickens is not Pip; Brontë is not Jane. Even an omniscient narrator is a crafted persona.",
    },
    {
      wrong: "Third person always means the narrator knows everything.",
      right: "Third person can be omniscient (all-knowing) or limited (staying close to one character’s view). Much modern fiction uses close third person.",
    },
    {
      wrong: "The climax is the last event in the book.",
      right: "The climax is the point of highest tension and the turning point; it is usually followed by falling action and a resolution.",
    },
    {
      wrong: "A theme is a one-word topic such as ‘love’ or ‘war’.",
      right: "That is a subject. A theme is the idea the novel explores about that subject, e.g. ‘war destroys innocence’.",
    },
    {
      wrong: "Context means writing a paragraph of history at the start of the essay.",
      right: "Context is useful only when woven into analysis to explain why a writer made a choice or how readers might respond.",
    },
    {
      wrong: "An unreliable narrator is a sign of bad writing.",
      right: "Unreliability is a deliberate technique that creates dramatic irony, mystery and makes readers judge for themselves.",
    },
  ],

  expertDebates: [
    {
      question: "Is Scrooge’s overnight change believable?",
      detail:
        "Some critics argue that a lifetime of greed cannot vanish in one night, so the ending is a fairy tale. Others reply that Dickens carefully prepares it: the Ghost of Christmas Past shows Scrooge was once a lonely, feeling boy, so the change is a return rather than a miracle. A third view is that believability does not matter because *A Christmas Carol* is a moral fable designed to persuade, not a realistic study.",
    },
    {
      question: "Is Hyde a separate being, or Jekyll’s true self?",
      detail:
        "Readers disagree about whether Hyde is an alien evil released by a potion or simply Jekyll with his respectable mask removed. The second reading makes the novella a criticism of Victorian hypocrisy: the danger is not a monster but the hidden desires of a ‘good’ gentleman. Evidence can be found for both, which is why the debate lasts.",
    },
    {
      question: "Do we need to know what the writer intended?",
      detail:
        "Some critics argue that a writer’s intentions are unknowable or irrelevant, and that meaning is made by readers (the idea known as the ‘intentional fallacy’). Others argue that context and a writer’s purpose stop interpretations becoming wild guesses. In exams, the safe and sophisticated approach is to write ‘the writer may suggest…’ and support every reading with evidence.",
    },
  ],

  realWorld: [
    { title: "Films and TV adaptations", detail: "Directors face the same choices novelists do: whose eyes we see through, when to flash back, where to end an episode on a cliffhanger. Spotting these choices makes you a sharper viewer.", emoji: "🎬" },
    { title: "Box-set cliffhangers", detail: "Dickens kept readers buying weekly instalments with cliffhangers; streaming services do the same with ‘next episode’ countdowns. Serial storytelling is 180 years old.", emoji: "📺" },
    { title: "Spotting bias in the news", detail: "Recognising an unreliable narrator trains you to ask who is telling a story, what they want, and what they might be leaving out: essential for reading news and social media.", emoji: "📰" },
    { title: "Empathy", detail: "Studies in psychology suggest that reading fiction may improve our ability to understand other people’s thoughts and feelings. Seeing through Pip’s or Jane’s eyes is practice at seeing through anyone’s.", emoji: "🤝" },
    { title: "Video games and interactive stories", detail: "Many games put you in the second person (‘you’) and use foreshadowing, branching plots and unreliable narrators to keep players hooked.", emoji: "🎮" },
    { title: "Your own writing", detail: "Every technique in this topic is a tool for your creative writing: choose a narrator deliberately, plant foreshadowing, make your setting mirror your character’s mood.", emoji: "✍️" },
  ],

  flashcards: [
    { front: "Narrator vs author", back: "The author is the real writer; the narrator is the voice they create to tell the story." },
    { front: "Third person limited", back: "‘He/she’ narration that stays close to one character’s thoughts and knowledge (e.g. Bruno in The Boy in the Striped Pyjamas)." },
    { front: "Third person omniscient", back: "An all-knowing narrator who can enter any character’s mind and comment on events (e.g. A Christmas Carol)." },
    { front: "Unreliable narrator", back: "A narrator whose account cannot be fully trusted: naïve, biased, deceptive, confused or remembering from a distance." },
    { front: "Dramatic irony", back: "When the reader knows or understands more than a character does." },
    { front: "Retrospective narrator", back: "An older narrator looking back on their younger self (adult Pip, adult Jane), giving a dual perspective." },
    { front: "Direct vs indirect characterisation", back: "Direct: the narrator tells us what a character is like. Indirect: we infer it from speech, thoughts, effect on others, actions, looks (STEAL)." },
    { front: "Dynamic vs static character", back: "A dynamic character changes significantly (Scrooge); a static character stays the same." },
    { front: "Pathetic fallacy", back: "Using weather or nature to reflect human feelings or mood." },
    { front: "Freytag’s pyramid", back: "Exposition, rising action, climax, falling action, resolution." },
    { front: "Foreshadowing", back: "A hint or warning of something that will happen later in the story." },
    { front: "In medias res", back: "Latin for ‘into the middle of things’: starting a story in the middle of the action." },
    { front: "Motif vs symbol", back: "A motif is a recurring image or idea; a symbol is a concrete thing that stands for an abstract idea." },
    { front: "‘solitary as an oyster’", back: "Narrator on Scrooge, A Christmas Carol, Stave One: simile showing his isolation, shut inside a hard shell." },
    { front: "‘Hold your noise!’", back: "The convict (Magwitch) to Pip, Great Expectations, Chapter 1: an imperative that shatters the calm opening." },
    { front: "Circular structure", back: "A story that ends where it began, e.g. Of Mice and Men begins and ends at the same pool." },
  ],

  mustKnow: [
    "Can you identify first, second, third limited and third omniscient narration and explain the effect of each?",
    "Can you explain why a narrator might be unreliable and how that creates dramatic irony?",
    "Can you spot a retrospective narrator’s dual perspective (child’s experience, adult’s words)?",
    "Can you analyse characterisation using STEAL and zoom in on a single word?",
    "Can you trace a character arc with quotations from the beginning, turning point and end?",
    "Can you explain how a setting creates atmosphere, mirrors feelings or works as a symbol?",
    "Can you label Freytag’s pyramid and spot flashback, foreshadowing, cliffhangers and circular structure?",
    "Can you express a theme as an idea, and tell the difference between a motif and a symbol?",
    "Can you use context to explain a writer’s purpose instead of bolting on history?",
    "Can you plan a whole-novel essay with a thesis and evidence from across the book?",
  ],

  videos: [
    { title: "Narrative perspective and unreliable narrators", channel: "Mr Bruff", url: "https://www.youtube.com/results?search_query=mr+bruff+narrative+perspective+unreliable+narrator" },
    { title: "A Christmas Carol: Scrooge in Stave One", channel: "Mr Salles Teaches English", url: "https://www.youtube.com/results?search_query=mr+salles+a+christmas+carol+stave+one+scrooge" },
    { title: "Freytag’s pyramid and narrative structure", channel: "BBC Bitesize", url: "https://www.youtube.com/results?search_query=bbc+bitesize+narrative+structure+freytag+pyramid" },
    { title: "Writing about a whole novel: theme and character essays", channel: "Stacey Reay", url: "https://www.youtube.com/results?search_query=stacey+reay+how+to+write+about+a+novel+theme+character" },
  ],

  quiz: {
    mcq: [
      {
        id: "nov-quiz-mcq-1",
        extract: "Marcus watched the door. He was sure it had moved, though he told himself it was only the wind.",
        question: "Which narrative perspective is used in this extract?",
        options: ["First person", "Second person", "Third person limited", "Third person omniscient"],
        answerIndex: 2,
        hint: "Look at the pronouns, then ask: whose thoughts can we see, and how many minds?",
        explanation:
          "It uses ‘he’, so it is third person, and it stays inside one character’s mind (‘He was sure… he told himself’), so it is third person limited. The tempting answer is omniscient, but an omniscient narrator would move between minds or tell us what Marcus cannot know, such as whether the door really moved.",
        guideRef: "narrative-perspective",
      },
      {
        id: "nov-quiz-mcq-2",
        question: "In Freytag’s pyramid, what is the name for the turning point of highest tension?",
        options: ["Climax", "Exposition", "Resolution", "Rising action"],
        answerIndex: 0,
        hint: "It sits at the very top of the pyramid.",
        explanation:
          "The climax is the peak of tension and the turning point. Rising action is tempting because tension builds there, but it leads up to the climax rather than being the peak itself.",
        guideRef: "plot-structure",
      },
      {
        id: "nov-quiz-mcq-3",
        extract: "secret, and self-contained, and solitary as an oyster.",
        question: "Which technique does Dickens use in ‘solitary as an oyster’ to describe Scrooge?",
        options: ["Metaphor", "Personification", "Pathetic fallacy", "Simile"],
        answerIndex: 3,
        hint: "Look for a comparison word.",
        explanation:
          "The word ‘as’ makes this a simile: Scrooge is compared to an oyster shut inside its hard shell. Metaphor is the tempting distractor, but a metaphor says something IS something else, without ‘like’ or ‘as’.",
        guideRef: "characterisation",
      },
      {
        id: "nov-quiz-mcq-4",
        question: "Which of these is expressed as a THEME rather than just a subject?",
        options: [
          "A garden",
          "Kindness can change people more than punishment can",
          "Victorian London",
          "A boy and his grandfather",
        ],
        answerIndex: 1,
        hint: "A theme is an idea or message about life, usually phrased as a statement.",
        explanation:
          "‘Kindness can change people more than punishment can’ is an idea the novel explores and argues, so it is a theme. ‘A garden’ and ‘Victorian London’ are subjects or settings: they name what a book contains, not what it suggests.",
        guideRef: "themes-motifs-symbols",
      },
    ],
    qa: [
      {
        id: "nov-quiz-qa-1",
        question:
          "Explain the difference between direct and indirect characterisation. Give a short example of each (you may invent your own).",
        marks: 4,
        hint: "One tells; one shows. Think STEAL for the second.",
        modelAnswer:
          "Direct characterisation is when the narrator tells the reader outright what a character is like, for example ‘Mary was the most disagreeable child anyone had seen.’ Indirect characterisation is when the writer shows the character through their speech, thoughts, effect on others, actions or looks, so the reader has to infer what they are like. For example, ‘He stepped over the fallen child without breaking his stride’ shows the character is cruel without ever using the word ‘cruel’.",
        markScheme: [
          { point: "Defines direct characterisation as the narrator/writer telling the reader", keywords: ["tells", "telling", "told", "states", "outright", "directly says", "explicitly"] },
          { point: "Gives a valid example of direct characterisation", keywords: ["was a", "was the", "disagreeable", "was cruel", "was kind", "was mean", "was selfish"] },
          { point: "Defines indirect characterisation as showing, so the reader infers", keywords: ["shows", "showing", "infer", "work out", "implied", "speech", "actions", "steal"] },
          { point: "Gives a valid example of indirect characterisation through action, speech or looks", keywords: ["stepped", "trampled", "walked past", "said", "shouted", "smiled", "ignored", "without"] },
        ],
        commonError: "Giving two examples that are both direct (e.g. ‘He was angry’ and ‘She was sad’), or defining the terms without any example.",
        guideRef: "characterisation",
      },
      {
        id: "nov-quiz-qa-2",
        extract:
          "…and that the distant savage lair from which the wind was rushing was the sea; and that the small bundle of shivers growing afraid of it all and beginning to cry, was Pip.",
        question: "How does Dickens make the young Pip seem vulnerable in this sentence? Refer to language and sentence structure.",
        marks: 4,
        hint: "Zoom in on ‘bundle of shivers’ and on where Pip’s name is placed.",
        modelAnswer:
          "Dickens presents Pip as tiny and helpless. The metaphor ‘the small bundle of shivers’ turns him into a shaking object rather than a person, so the reader feels how small and cold he is. The verbs ‘growing afraid’ and ‘beginning to cry’ show his fear building gradually. Structurally, Dickens holds back ‘was Pip’ until the very end of an enormous sentence filled with graves, wilderness, river and a ‘savage lair’ of sea, so Pip appears last and smallest, lost in a huge, threatening landscape.",
        markScheme: [
          { point: "Identifies the metaphor ‘bundle of shivers’ and its effect (small, object-like, shaking)", keywords: ["bundle", "shivers", "metaphor", "object", "small", "shaking", "trembling"] },
          { point: "Comments on the verbs of fear: growing afraid, beginning to cry", keywords: ["afraid", "cry", "crying", "fear", "scared", "beginning", "growing"] },
          { point: "Comments on sentence structure: Pip’s name delayed to the end of a long sentence", keywords: ["end of the sentence", "long sentence", "last", "delayed", "placed at the end", "structure", "finally"] },
          { point: "Links to the threatening landscape making him seem lost or alone", keywords: ["landscape", "savage", "lair", "lost", "alone", "wilderness", "surrounded", "isolated"] },
        ],
        commonError: "Writing ‘Pip is scared because he is crying’, which repeats the text, instead of analysing the specific words and the sentence’s shape.",
        guideRef: "unreliable-narrators",
      },
      {
        id: "nov-quiz-qa-3",
        question: "What is foreshadowing? Explain why writers use it, giving an example.",
        marks: 3,
        hint: "Definition, purpose, example.",
        modelAnswer:
          "Foreshadowing is when a writer drops a hint or warning about something that will happen later in the story. Writers use it to build suspense and tension, because readers sense trouble ahead and want to read on to find out what happens; it also makes the ending feel planned rather than random. For example, ‘Later, much later, I would wish I had put the letter in the fire’ warns that opening the letter will lead to something bad.",
        markScheme: [
          { point: "Defines foreshadowing as a hint or warning of a later event", keywords: ["hint", "clue", "warning", "later", "future", "what will happen", "suggests what"] },
          { point: "Explains a purpose: suspense, tension, makes reader read on, makes events feel planned", keywords: ["suspense", "tension", "read on", "curious", "anticipation", "dread", "planned"] },
          { point: "Gives a valid example", keywords: ["for example", "such as", "later, much later", "candy", "oyster", "letter", "e.g."] },
        ],
        commonError: "Confusing foreshadowing with flashback: a flashback goes back in time; foreshadowing hints forward.",
        guideRef: "plot-structure",
      },
      {
        id: "nov-quiz-qa-4",
        question:
          "In The Boy in the Striped Pyjamas, the story stays close to nine-year-old Bruno, who does not understand what is happening around him. Explain why a writer might choose a narrative viewpoint that does not understand events, and the effect on the reader.",
        marks: 4,
        hint: "Think about the gap between what the character knows and what the reader knows.",
        modelAnswer:
          "A naïve viewpoint like Bruno’s means the reader often understands far more than the character does. This creates dramatic irony: we recognise dangers and cruelties that Bruno misreads, so innocent remarks become disturbing. This makes the reader feel tension and dread, because we can see where events are heading when he cannot. It also makes us work actively, reading between the lines rather than being told, and it highlights the writer’s message by contrasting a child’s innocence with adult cruelty, which is more shocking than having it explained directly.",
        markScheme: [
          { point: "Explains the gap: reader knows or understands more than the character", keywords: ["reader knows", "understand more", "knows more", "gap", "naive", "innocent", "not understand"] },
          { point: "Names dramatic irony", keywords: ["dramatic irony", "irony", "ironic", "knows more than", "reader understands"] },
          { point: "Explains emotional effect: tension, dread, sympathy, horror", keywords: ["tension", "dread", "sympathy", "horror", "shock", "heartbreaking", "uneasy", "disturbing"] },
          { point: "Links to purpose: reader reads between lines / contrast of innocence and cruelty / message", keywords: ["read between", "infer", "contrast", "innocence", "message", "purpose", "cruelty", "makes us think"] },
        ],
        commonError: "Saying the narrator is ‘bad’ or ‘wrong’ rather than explaining that the limited view is a deliberate choice with an effect.",
        guideRef: "unreliable-narrators",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "nov-mcq-p1",
        title: "MCQ Paper 1",
        passage: GREAT_EXPECTATIONS,
        questions: [
          {
            id: "nov-mcq-p1-q01",
            question: "Who narrates the Great Expectations extract?",
            options: [
              "An all-knowing narrator outside the story",
              "The convict, describing his escape",
              "The adult Pip, looking back on his childhood",
              "The young Pip, describing events as they happen",
            ],
            answerIndex: 2,
            hint: "Look at the tense and at the vocabulary. Does it sound like a small child?",
            explanation:
              "It uses ‘I’ and the past tense, and phrases such as ‘My first most vivid and broad impression’ are an adult’s words, so it is the adult Pip remembering. The tempting answer is the young Pip, but a terrified small child would not describe himself as ‘the small bundle of shivers’.",
            guideRef: "unreliable-narrators",
          },
          {
            id: "nov-mcq-p1-q02",
            question: "‘the small bundle of shivers’ is an example of which technique?",
            options: ["Metaphor", "Simile", "Personification", "Onomatopoeia"],
            answerIndex: 0,
            hint: "Is there a ‘like’ or ‘as’? Is Pip described as being something he literally is not?",
            explanation:
              "Pip is described as being a ‘bundle of shivers’ with no ‘like’ or ‘as’, so it is a metaphor. It is not a simile because there is no comparison word, and not personification because it makes a person into a thing, not a thing into a person.",
            guideRef: "unreliable-narrators",
          },
          {
            id: "nov-mcq-p1-q03",
            question: "What is the main effect of holding back the words ‘was Pip’ until the very end of the long first-paragraph sentence?",
            options: [
              "It shows that Pip is proud of his name",
              "It reveals that Pip is the narrator’s younger brother",
              "It makes the sentence easier to read aloud",
              "It makes Pip seem tiny and lost at the end of a long list of graves and wild places",
            ],
            answerIndex: 3,
            hint: "Think about what comes before Pip in the sentence and how much space it takes up.",
            explanation:
              "Pip appears only after the churchyard, the dead family, the marshes, the river and the sea, so he seems small and overwhelmed by a vast, bleak world. The sentence is not easier to read; its length is exactly what makes his late appearance so effective.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-mcq-p1-q04",
            question: "In ‘the distant savage lair from which the wind was rushing was the sea’, what does the word ‘lair’ suggest about the sea?",
            options: [
              "It is calm and welcoming",
              "It is like the den of a wild, dangerous animal",
              "It is too far away to matter",
              "It is dirty and polluted",
            ],
            answerIndex: 1,
            hint: "What usually lives in a lair?",
            explanation:
              "A lair is the den of a wild beast, and ‘savage’ adds violence, so the sea seems like a predator waiting to attack. ‘Distant’ might tempt you towards ‘too far away to matter’, but the wind ‘rushing’ from it shows its threat reaches Pip.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-mcq-p1-q05",
            question: "Which structural shift happens between the first and second paragraphs?",
            options: [
              "From dialogue to description",
              "From calm reflection to sudden, violent speech",
              "From the present to the future",
              "From Pip’s view to the convict’s thoughts",
            ],
            answerIndex: 1,
            hint: "Compare the first word of paragraph two with the mood of paragraph one.",
            explanation:
              "Paragraph one is a slow, reflective description; paragraph two bursts open with the shout ‘Hold your noise!’. That jolt mirrors Pip’s shock. It is not a shift into the convict’s thoughts: we never see inside his head, only Pip’s.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-mcq-p1-q06",
            question: "What type of sentence is ‘Hold your noise!’?",
            options: ["A question", "A declarative statement", "A sentence with no verb", "An imperative (a command)"],
            answerIndex: 3,
            hint: "Is the speaker telling, asking or ordering?",
            explanation:
              "It begins with the verb ‘Hold’ and orders Pip to do something, so it is an imperative. It ends with an exclamation mark, but it does contain a verb, and its job is to command, which shows the convict’s aggression and control.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p1-q07",
            extract: "A man who had been soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars",
            question: "What is the name for the repeated use of ‘and’ in this list?",
            options: ["Polysyndeton", "Asyndeton", "Alliteration", "Oxymoron"],
            answerIndex: 0,
            hint: "‘Poly’ means many; ‘a-’ means without.",
            explanation:
              "Polysyndeton is the deliberate repetition of conjunctions such as ‘and’. Asyndeton is the opposite: leaving conjunctions out (‘soaked, smothered, lamed’). The extra ‘and’s slow the list down so each injury lands separately.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p1-q08",
            extract: "soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars",
            question: "Which is the best interpretation of this list?",
            options: [
              "It shows the convict is a skilled fighter",
              "It shows the weather is warm and dry",
              "It suggests the man has suffered, so even while he is terrifying he invites some sympathy",
              "It proves that the convict is innocent of any crime",
            ],
            answerIndex: 2,
            hint: "Who is doing the action in each phrase: the man, or things around him?",
            explanation:
              "Each phrase describes something done TO the man (soaked, lamed, cut, stung, torn), so Dickens invites pity even as the convict frightens Pip. It does not prove he is innocent; it only complicates our first impression of him.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p1-q09",
            question: "Which detail most clearly tells the reader that the man is an escaped prisoner?",
            options: ["He has no hat", "His teeth chattered in his head", "An old rag is tied round his head", "There is a great iron on his leg"],
            answerIndex: 3,
            hint: "Which detail is something only a prisoner would wear?",
            explanation:
              "A ‘great iron on his leg’ is a shackle, which prisoners were forced to wear. The other details (no hat, a rag, chattering teeth) show poverty and cold, but anyone sleeping rough might have them.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p1-q10",
            extract: "“Oh! Don’t cut my throat, sir,” I pleaded in terror. “Pray don’t do it, sir.”",
            question: "What does Pip’s speech here reveal about him?",
            options: [
              "He is rude to his elders",
              "He is terrified but still polite, repeating ‘sir’",
              "He is brave and defiant",
              "He is joking and does not believe the threat",
            ],
            answerIndex: 1,
            hint: "Notice the verb ‘pleaded’ and the repeated form of address.",
            explanation:
              "‘Pleaded in terror’ shows fear, and the repeated ‘sir’ shows a child who has been taught politeness even to someone threatening him, which makes him seem more innocent. Nothing in the speech is defiant: he begs rather than resists.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p1-q11",
            question: "Which phrase best describes the atmosphere Dickens creates in the first paragraph?",
            options: ["Bleak and threatening", "Cheerful and busy", "Warm and cosy", "Peaceful and holy"],
            answerIndex: 0,
            hint: "Look at ‘raw’, ‘bleak’, ‘nettles’, ‘dark flat wilderness’, ‘leaden’, ‘savage’.",
            explanation:
              "Words like ‘bleak’, ‘wilderness’, ‘leaden’ and ‘savage’ create a cold, empty, threatening mood. A churchyard might suggest ‘peaceful and holy’, but Dickens fills it with graves of a dead family and nettles, so it feels lonely, not peaceful.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-mcq-p1-q12",
            question: "What is a retrospective narrator?",
            options: [
              "A narrator who repeats important information",
              "A narrator who tells the story only in the present tense",
              "An older narrator telling the story of their younger self",
              "A narrator who is a ghost",
            ],
            answerIndex: 2,
            hint: "‘Retro’ means backwards.",
            explanation:
              "A retrospective narrator looks back on their own past, like the adult Pip or the adult Jane Eyre. The present tense is the opposite: it creates immediacy, as if events are happening now.",
            guideRef: "unreliable-narrators",
          },
          {
            id: "nov-mcq-p1-q13",
            question: "Which definition of dramatic irony is correct?",
            options: [
              "When a character says the opposite of what they mean",
              "When the weather reflects a character’s mood",
              "When the reader knows or understands more than a character",
              "When a story begins in the middle of the action",
            ],
            answerIndex: 2,
            hint: "Think about the gap between the audience and the character.",
            explanation:
              "Dramatic irony is the gap between what the reader understands and what the character understands. Saying the opposite of what you mean is verbal irony or sarcasm, which is the most tempting distractor.",
            guideRef: "unreliable-narrators",
          },
          {
            id: "nov-mcq-p1-q14",
            question: "The Boy in the Striped Pyjamas uses ‘he’ but stays close to Bruno’s limited understanding. Which perspective is this?",
            options: ["Third person limited", "First person", "Second person", "Third person omniscient"],
            answerIndex: 0,
            hint: "‘He’ rules out two options. Then ask: how many minds do we see into?",
            explanation:
              "Third-person pronouns plus one character’s viewpoint make it third person limited. Omniscient is tempting, but an all-knowing narrator would explain what Bruno misunderstands, which would destroy the dramatic irony.",
            guideRef: "narrative-perspective",
          },
          {
            id: "nov-mcq-p1-q15",
            question: "Which sentence is written in the second person?",
            options: [
              "I ran until my lungs burned.",
              "You run until your lungs burn, and still the footsteps follow you.",
              "She ran until her lungs burned.",
              "They all ran, though none of them knew why.",
            ],
            answerIndex: 1,
            hint: "Second person casts the reader as the character.",
            explanation:
              "‘You run… your lungs… follow you’ makes the reader the character, which is second person. Option A is first person; C and D are third person.",
            guideRef: "narrative-perspective",
          },
          {
            id: "nov-mcq-p1-q16",
            question: "Which of these is NOT a reason a narrator might be unreliable?",
            options: [
              "They are too young to understand what is happening",
              "They are biased against another character",
              "They are remembering events from many years later",
              "They tell the story in the past tense",
            ],
            answerIndex: 3,
            hint: "Which option describes how almost every novel is written?",
            explanation:
              "Almost all novels use the past tense, so it is not in itself a sign of unreliability. Youth, bias and the distance of memory can all distort a narrator’s account.",
            guideRef: "unreliable-narrators",
          },
          {
            id: "nov-mcq-p1-q17",
            extract: "My first most vivid and broad impression of the identity of things seems to me to have been gained on a memorable raw afternoon towards evening.",
            question: "What does the phrase ‘seems to me’ suggest about the narrator?",
            options: [
              "The adult narrator admits that memory is not completely certain",
              "Pip is deliberately lying to the reader",
              "Pip is confused about where he is standing",
              "The convict has told Pip what happened",
            ],
            answerIndex: 0,
            hint: "Is he stating a fact or giving his impression of something long ago?",
            explanation:
              "‘Seems to me’ is a hedge: the older Pip is reconstructing a memory and admits it may not be exact, which reminds us we are hearing a retrospective account. Nothing suggests deliberate lying; he is being honest about uncertainty.",
            guideRef: "unreliable-narrators",
          },
          {
            id: "nov-mcq-p1-q18",
            question: "Why does Dickens list the names of Pip’s five dead infant brothers?",
            options: [
              "To show Pip has a large, lively family",
              "To show that Pip is proud of his ancestors",
              "To make the passage purely comic",
              "To stress how much death and loss surrounds Pip, making him seem alone",
            ],
            answerIndex: 3,
            hint: "They are all ‘dead and buried’. What does that leave Pip with?",
            explanation:
              "The list of graves shows that Pip’s whole family (except a sister we hear of elsewhere) is gone, so he stands alone among the dead. There is some dark humour in the legal phrase ‘aforesaid’, but the passage is not ‘purely’ comic.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-mcq-p1-q19",
            question: "Which is the best-written analytical sentence about the convict?",
            options: [
              "Dickens uses lots of descriptive words to describe the convict.",
              "The convict is scary because he is very scary and Pip is scared.",
              "The verb ‘seized’ suggests sudden, violent control, showing how powerless Pip is in the convict’s grip.",
              "In this extract Pip goes to the churchyard and meets a man with an iron on his leg.",
            ],
            answerIndex: 2,
            hint: "Look for the sentence that zooms in on one word and explains its effect.",
            explanation:
              "Option C names a precise word, explains its connotations and links it to Pip’s situation. Option A is vague (‘lots of descriptive words’), B is circular, and D is plot summary.",
            guideRef: "reading-like-a-writer",
          },
          {
            id: "nov-mcq-p1-q20",
            question: "Which best sums up how Dickens presents the convict across the whole extract?",
            options: ["As purely comic", "As frightening but also pitiful", "As kind and gentle", "As calm and in control of himself"],
            answerIndex: 1,
            hint: "Weigh his speech against the list of what has happened to him.",
            explanation:
              "His threats make him terrifying, but the list of injuries and the fact that he ‘limped, and shivered’ make him pitiful too. He is not calm or in control: his teeth chatter and he is lamed and soaked.",
            guideRef: "characterisation",
          },
        ],
      },
      {
        id: "nov-mcq-p2",
        title: "MCQ Paper 2",
        passage: CHRISTMAS_CAROL,
        questions: [
          {
            id: "nov-mcq-p2-q01",
            question: "In the phrase ‘a tight-fisted hand at the grindstone’, what does ‘tight-fisted’ mean?",
            options: ["Physically strong", "Mean with money", "Quick to anger", "Hard-working"],
            answerIndex: 1,
            hint: "Picture a fist clenched round a coin.",
            explanation:
              "‘Tight-fisted’ means unwilling to spend or give money: a miser. ‘Hard-working’ is tempting because of ‘at the grindstone’, but ‘tight-fisted’ itself is about meanness.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p2-q02",
            extract: "a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!",
            question: "Which technique is Dickens mainly using here?",
            options: ["A rhetorical question", "Pathetic fallacy", "Onomatopoeia", "A list that piles up descriptive words (accumulation)"],
            answerIndex: 3,
            hint: "Count how many describing words come before ‘sinner’.",
            explanation:
              "Seven describing words are piled up before ‘sinner’, a list (accumulation) that makes Scrooge’s greed seem overwhelming. Some of the words sound harsh, but the main technique is the list, not onomatopoeia.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p2-q03",
            question: "What does the simile ‘solitary as an oyster’ mainly suggest about Scrooge?",
            options: [
              "He is closed off from others, shut inside a hard shell",
              "He enjoys eating seafood",
              "He is secretly very rich",
              "He is slippery and dishonest",
            ],
            answerIndex: 0,
            hint: "The key word is ‘solitary’. What protects an oyster?",
            explanation:
              "An oyster is sealed inside a hard shell, and ‘solitary’ means alone, so the simile shows Scrooge has shut everyone out. ‘Secretly rich’ is a clever idea (an oyster may hold a pearl) but it is not the main meaning the word ‘solitary’ points to.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p2-q04",
            extract: "Hard and sharp as flint, from which no steel had ever struck out generous fire",
            question: "What does this image suggest?",
            options: [
              "Scrooge works as a blacksmith",
              "Scrooge is physically very strong",
              "No one has ever managed to spark any generosity or warmth in him",
              "Scrooge has a fiery temper",
            ],
            answerIndex: 2,
            hint: "Flint and steel were struck together to make sparks. What sort of fire is mentioned?",
            explanation:
              "Flint gives sparks when struck with steel, but no one has ever struck ‘generous fire’ from Scrooge: he has never been moved to kindness. ‘Fiery temper’ is tempting because of ‘fire’, but the image says there is no fire in him at all.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p2-q05",
            question: "Images of cold, frost and ice run through the whole first paragraph. What is this called?",
            options: ["An extended metaphor", "A single simile", "A flashback", "Dramatic irony"],
            answerIndex: 0,
            hint: "It is one comparison developed over many sentences.",
            explanation:
              "A metaphor developed across several sentences (‘froze’, ‘frosty rime’, ‘low temperature’, ‘iced his office’) is an extended metaphor. A single simile would be one comparison using ‘like’ or ‘as’.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p2-q06",
            question: "Why does Dickens say Scrooge ‘iced his office in the dog-days’?",
            options: [
              "To show that Scrooge owns a dog",
              "To show his coldness never changes, even in the hottest weather",
              "To show that his office has no windows",
              "To show that he likes to keep food fresh",
            ],
            answerIndex: 1,
            hint: "Check the glossary: what are the ‘dog-days’?",
            explanation:
              "The dog-days are the hottest days of summer, so even then Scrooge’s office is ‘iced’: his coldness ignores the seasons. The phrase has nothing to do with owning a dog, which is the trap for readers who skip the glossary.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p2-q07",
            extract: "They often ‘came down’ handsomely, and Scrooge never did.",
            question: "What is the joke in this sentence?",
            options: [
              "Scrooge never goes downstairs",
              "Scrooge is never sad",
              "The weather is never bad in London",
              "Rain comes down heavily, but Scrooge never ‘comes down’ with money generously",
            ],
            answerIndex: 3,
            hint: "‘Came down handsomely’ had two meanings. Check the glossary.",
            explanation:
              "It is a pun: weather ‘comes down’ heavily, and ‘to come down handsomely’ also meant to pay out generously, which Scrooge never does. Reading it literally as going downstairs misses the double meaning.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p2-q08",
            question: "Which type of narrator tells this extract?",
            options: [
              "First person: Scrooge himself",
              "Second person",
              "A third-person omniscient narrator who comments on and judges Scrooge",
              "A third-person limited narrator inside Scrooge’s head",
            ],
            answerIndex: 2,
            hint: "Does the narrator use ‘I’ about Scrooge, or judge him from outside?",
            explanation:
              "The narrator calls Scrooge ‘he’, sees him from outside and openly judges him (‘old sinner!’), which is typical of an omniscient narrator. A limited narrator would show Scrooge’s own thoughts, and Scrooge would never call himself a sinner.",
            guideRef: "narrative-perspective",
          },
          {
            id: "nov-mcq-p2-q09",
            question: "What effect does the opening exclamation ‘Oh! But he was a tight-fisted hand at the grindstone, Scrooge!’ create?",
            options: [
              "A formal, distant tone",
              "Confusion about who the narrator is",
              "A lively, chatty voice that shares strong feelings with the reader",
              "Mystery about who Scrooge is",
            ],
            answerIndex: 2,
            hint: "Read it aloud. Does it sound like a textbook or like someone talking to you?",
            explanation:
              "‘Oh!’ and the exclamation marks make the narrator sound like a storyteller bursting with opinion, drawing the reader in. It is the opposite of formal and distant.",
            guideRef: "narrative-perspective",
          },
          {
            id: "nov-mcq-p2-q10",
            question: "Is Scrooge characterised mainly directly or indirectly in this extract?",
            options: [
              "Mainly directly: the narrator tells us what Scrooge is like",
              "Mainly indirectly, through his dialogue",
              "Mainly indirectly, through other characters’ reactions",
              "Neither: the extract does not characterise him",
            ],
            answerIndex: 0,
            hint: "Who is speaking: Scrooge, other characters, or the narrator?",
            explanation:
              "The narrator tells us outright that Scrooge is ‘covetous’ and an ‘old sinner’, which is direct characterisation (with plenty of imagery). Scrooge does not speak in this extract, so it cannot be characterisation through his dialogue.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p2-q11",
            extract: "nipped his pointed nose, shrivelled his cheek",
            question: "Which part of STEAL does this description belong to?",
            options: ["Speech", "Looks", "Thoughts", "Effect on others"],
            answerIndex: 1,
            hint: "It describes his face.",
            explanation:
              "The nose and cheek are physical appearance, so this is Looks. Effect on others would describe how other people react to Scrooge, which is not happening here.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p2-q12",
            question: "Which best describes Scrooge’s character arc across the whole of A Christmas Carol?",
            options: [
              "Static: he stays exactly the same",
              "He begins kind and becomes cruel",
              "He changes because he inherits a fortune",
              "He begins isolated and greedy, and after the spirits’ visits becomes generous",
            ],
            answerIndex: 3,
            hint: "Think of Stave One versus Stave Five, and what happens in between.",
            explanation:
              "Scrooge is a dynamic character: the spirits’ visions are the turning point that changes him from a miser into a generous man. He is already rich, so money is not what changes him.",
            guideRef: "character-change",
          },
          {
            id: "nov-mcq-p2-q13",
            extract: "External heat and cold had little influence on Scrooge. No warmth could warm, no wintry weather chill him.",
            question: "What is the most important idea Dickens establishes here?",
            options: [
              "Nothing outside Scrooge can change him, which makes his later transformation more striking",
              "Scrooge enjoys bad weather",
              "Scrooge is physically ill",
              "Dickens is describing a real storm in London",
            ],
            answerIndex: 0,
            hint: "Think about how this links to what happens to Scrooge later in the novella.",
            explanation:
              "If even weather cannot affect Scrooge, he seems impossible to change, so when the spirits do change him the transformation feels remarkable. The extract is not describing a specific storm; the weather is a comparison.",
            guideRef: "character-change",
          },
          {
            id: "nov-mcq-p2-q14",
            question: "E. M. Forster called a character built around a single quality, who never surprises us, a…",
            options: ["Round character", "Dynamic character", "Protagonist", "Flat character"],
            answerIndex: 3,
            hint: "The opposite of round.",
            explanation:
              "Forster’s term is a flat character. A round character is complex and can surprise us. ‘Dynamic’ describes change over the story, which is a different idea.",
            guideRef: "character-change",
          },
          {
            id: "nov-mcq-p2-q15",
            question: "The name ‘Scrooge’ is now used in everyday English to mean…",
            options: ["A ghost", "A miser: someone mean with money", "A businessman", "A grumpy elderly person"],
            answerIndex: 1,
            hint: "What is Scrooge’s defining quality in Stave One?",
            explanation:
              "‘A scrooge’ is a dictionary word for a miser, showing how powerful Dickens’s characterisation was. ‘Grumpy elderly person’ is tempting, but the word specifically means someone mean with money.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p2-q16",
            question: "Which quotation best supports the point ‘Scrooge is isolated from other people’?",
            options: [
              "‘a tight-fisted hand at the grindstone’",
              "‘his thin lips blue’",
              "‘secret, and self-contained, and solitary as an oyster’",
              "‘covetous’",
            ],
            answerIndex: 2,
            hint: "Which quotation is about being alone rather than about money or appearance?",
            explanation:
              "‘Secret’, ‘self-contained’ and ‘solitary’ all suggest isolation. ‘Tight-fisted’ and ‘covetous’ support a point about greed, and ‘thin lips blue’ is about appearance.",
            guideRef: "context-whole-novel",
          },
          {
            id: "nov-mcq-p2-q17",
            question: "What was Dickens’s main purpose in writing A Christmas Carol (1843)?",
            options: [
              "To explain scientifically how ghosts work",
              "To persuade readers to be generous and to care for the poor",
              "To describe the weather in Victorian London",
              "To show that money is the key to happiness",
            ],
            answerIndex: 1,
            hint: "Think about what Scrooge learns and why that might matter in the ‘Hungry Forties’.",
            explanation:
              "Dickens wrote in a time of great poverty and wanted comfortable readers to feel responsible for the poor; Scrooge’s change models that. The novella argues the opposite of ‘money is the key to happiness’.",
            guideRef: "context-whole-novel",
          },
          {
            id: "nov-mcq-p2-q18",
            question: "A Christmas Carol opens: ‘Marley was dead: to begin with.’ What is the main effect of this first line?",
            options: [
              "It hooks the reader with a blunt, surprising statement about death in a chatty voice",
              "It shows that Marley is the narrator",
              "It tells us that Scrooge killed Marley",
              "It creates a calm and happy mood",
            ],
            answerIndex: 0,
            hint: "Why would starting with a death make you read on? What does ‘to begin with’ add?",
            explanation:
              "Opening with a death is startling, and ‘to begin with’ sounds conversational, as if the narrator is settling in to tell a tale (and hints Marley will matter later). Nothing suggests Scrooge killed him; that is reading in something the line does not say.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-mcq-p2-q19",
            question: "Which is the best-written analytical sentence?",
            options: [
              "Scrooge is described as cold, which shows he is cold.",
              "Dickens uses a simile, ‘solitary as an oyster’.",
              "This quote is effective because it makes the reader want to read on.",
              "The verb ‘shrivelled’ suggests Scrooge’s meanness has dried him up, as if greed is draining the life from his body.",
            ],
            answerIndex: 3,
            hint: "Which sentence explains the connotations of a specific word?",
            explanation:
              "Option D zooms in on one verb and explains what it suggests. B names a technique but explains nothing; C is a generic comment that could fit any quotation; A is circular.",
            guideRef: "reading-like-a-writer",
          },
          {
            id: "nov-mcq-p2-q20",
            extract: "No wind that blew was bitterer than he, no falling snow was more intent upon its purpose, no pelting rain less open to entreaty.",
            question: "Why does Dickens compare Scrooge to harsh weather in this way?",
            options: [
              "To show that Scrooge loves winter",
              "To describe the setting of London in detail",
              "To make Scrooge seem harsher than nature itself, almost inhuman",
              "To foreshadow a storm later in the story",
            ],
            answerIndex: 2,
            hint: "Each comparison says Scrooge is MORE bitter or determined than the weather.",
            explanation:
              "Each clause claims Scrooge outdoes the weather in bitterness and stubbornness, making him seem colder than nature: almost a force rather than a man. The sentence is about Scrooge, not the setting, so ‘describe London’ is a trap.",
            guideRef: "characterisation",
          },
        ],
      },
      {
        id: "nov-mcq-p3",
        title: "MCQ Paper 3",
        passage: RED_ROOM,
        questions: [
          {
            id: "nov-mcq-p3-q01",
            question: "Brontë repeatedly mentions red (‘deep red damask’, ‘the carpet was red’, ‘crimson cloth’). What is the main effect of this repetition?",
            options: [
              "It creates an intense, dominant colour suggesting anger, danger and blood",
              "It shows that the Reeds have poor taste in decoration",
              "It creates a calm and restful mood",
              "It shows that Jane’s favourite colour is red",
            ],
            answerIndex: 0,
            hint: "List the connotations of red, then think about why Jane is in the room.",
            explanation:
              "Red dominates the room and connotes anger, danger and blood, which fits a child who has just raged at her cousin, locked where her uncle died. Red is not a calming colour, and nothing suggests Jane likes it: the room is a punishment.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-mcq-p3-q02",
            extract: "A bed supported on massive pillars of mahogany, hung with curtains of deep red damask, stood out like a tabernacle in the centre",
            question: "A tabernacle is a sacred tent or shrine. What is the effect of comparing the bed to one?",
            options: [
              "It makes the bed seem soft and cosy",
              "It shows that the bed is old and broken",
              "It makes the bed seem grand, holy and imposing, as if the room is a place of judgement",
              "It shows that the Reed family is poor",
            ],
            answerIndex: 2,
            hint: "How would a small child feel in front of a shrine?",
            explanation:
              "A tabernacle is sacred and awe-inspiring, so the bed looms over Jane like something holy and judging. ‘Massive pillars’ also stresses size, so ‘soft and cosy’ is the opposite of the effect.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-mcq-p3-q03",
            question: "Which technique is used in ‘looking, as I thought, like a pale throne’?",
            options: ["Metaphor", "Simile", "Alliteration", "Hyperbole"],
            answerIndex: 1,
            hint: "Look for the comparison word.",
            explanation:
              "‘Like a pale throne’ uses ‘like’, so it is a simile. Metaphor is the tempting option, but metaphors make the comparison without ‘like’ or ‘as’.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-mcq-p3-q04",
            question: "What do the words ‘as I thought’ remind the reader?",
            options: [
              "That the room really is haunted",
              "That Jane is lying to the reader",
              "That the narrator is omniscient",
              "That the image comes from a frightened child’s imagination, remembered by the adult narrator",
            ],
            answerIndex: 3,
            hint: "Whose impression is ‘a pale throne’?",
            explanation:
              "‘As I thought’ flags that this was young Jane’s perception, so we see the room through a scared child’s eyes, recalled by the older Jane. It is first person, so it cannot be omniscient, and nothing suggests she is lying.",
            guideRef: "unreliable-narrators",
          },
          {
            id: "nov-mcq-p3-q05",
            extract: "Out of these deep surrounding shades rose high, and glared white, the piled-up mattresses and pillows of the bed",
            question: "What is the effect of the white bedding ‘glaring’ out of the dark red room?",
            options: [
              "It shows the room is tidy",
              "It shows that it is winter",
              "It makes the room seem cheerful",
              "It creates a stark, unsettling contrast, as if something ghostly is staring out of the darkness",
            ],
            answerIndex: 3,
            hint: "What does ‘glared’ usually describe a person doing?",
            explanation:
              "‘Glared’ suggests an angry stare, and white against deep shades looks ghostly, so the bed seems to watch Jane. White can suggest cleanliness, but here the verb makes it threatening rather than tidy or cheerful.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-mcq-p3-q06",
            extract: "This room was chill, because it seldom had a fire; it was silent, because remote from the nursery and kitchen; solemn, because it was known to be so seldom entered.",
            question: "How is this sentence structured?",
            options: [
              "As a rhetorical question",
              "As a pattern of three adjectives, each followed by a reason, building a sense of isolation",
              "As a flashback to Jane’s past",
              "As a cliffhanger",
            ],
            answerIndex: 1,
            hint: "Look at the repeated word ‘because’ and the words before it.",
            explanation:
              "‘Chill… silent… solemn’ are each followed by ‘because…’, a tripled pattern that piles up reasons why the room is cut off from life and warmth. It is a statement, not a question, and it describes the present situation rather than flashing back.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-mcq-p3-q07",
            question: "What is pathetic fallacy?",
            options: [
              "Using weather or nature to reflect human feelings or mood",
              "A character making a foolish mistake",
              "A narrator who cannot be trusted",
              "An exaggeration for comic effect",
            ],
            answerIndex: 0,
            hint: "‘Pathetic’ here comes from the Greek for feeling.",
            explanation:
              "Pathetic fallacy gives nature or weather human feelings or uses it to mirror a mood, such as a storm during an argument. ‘A narrator who cannot be trusted’ is an unreliable narrator, a different term.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-mcq-p3-q08",
            question: "Which best explains how the red-room setting reflects Jane’s situation?",
            options: [
              "It shows that Jane is rich and comfortable",
              "It shows that Jane loves grand rooms",
              "Its colour, chill and silence mirror her anger, fear and isolation",
              "It shows that Jane is happy at Gateshead",
            ],
            answerIndex: 2,
            hint: "Link three features of the room to three feelings.",
            explanation:
              "Red mirrors anger, ‘chill’ and ‘silent’ mirror coldness and loneliness, and the solemn, judging furniture mirrors her fear: the room reflects her inner state. The room is grand, but Jane is imprisoned in it, not comfortable.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-mcq-p3-q09",
            question: "Which of these is NOT an element of setting?",
            options: ["The tense the narrator uses", "The historical period", "The physical place", "The social world of the characters"],
            answerIndex: 0,
            hint: "Setting = where, when, and in what kind of society.",
            explanation:
              "Tense is a feature of narration, not of setting. Setting includes place, time (including historical period) and the social world, such as the class divide between Jane and the Reeds.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-mcq-p3-q10",
            question: "A gloomy grand house, a room where someone died, and a child terrified of a ghost: these features belong to which tradition?",
            options: ["Science fiction", "Romantic comedy", "Detective fiction", "Gothic fiction"],
            answerIndex: 3,
            hint: "Think of castles, ghosts and dread.",
            explanation:
              "Gothic fiction uses gloomy old buildings, death, the supernatural and terror, and Brontë borrows these features for the red-room. Detective fiction centres on solving a crime, which is not what this scene does.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-mcq-p3-q11",
            question: "Which is the correct order of Freytag’s pyramid?",
            options: [
              "Exposition, climax, rising action, falling action, resolution",
              "Rising action, exposition, climax, resolution, falling action",
              "Exposition, rising action, climax, falling action, resolution",
              "Exposition, falling action, climax, rising action, resolution",
            ],
            answerIndex: 2,
            hint: "Every Rocket Climbs, Falls, Returns.",
            explanation:
              "Exposition introduces, rising action builds, climax peaks, falling action eases, resolution settles. Option A puts the climax before the build-up, which makes no sense: tension must rise before it peaks.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-mcq-p3-q12",
            question: "What does ‘in medias res’ mean?",
            options: [
              "A story told by many narrators",
              "Starting a story in the middle of the action",
              "Ending a story where it began",
              "A story set in the Middle Ages",
            ],
            answerIndex: 1,
            hint: "It is Latin: ‘into the middle of things’.",
            explanation:
              "In medias res means plunging straight into the action without a slow introduction. ‘Ending where it began’ is a circular structure.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-mcq-p3-q13",
            question: "What is a flashback?",
            options: [
              "A hint of what will happen later",
              "A scene that jumps back to an earlier time",
              "A chapter that ends in suspense",
              "A story told from two points of view",
            ],
            answerIndex: 1,
            hint: "Which direction in time does it move?",
            explanation:
              "A flashback moves back in time to show earlier events. A hint of the future is foreshadowing, the most commonly confused term.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-mcq-p3-q14",
            question: "Why did Dickens often end sections of his novels on cliffhangers?",
            options: [
              "He disliked writing endings",
              "Publishers had banned happy endings",
              "Cliffhangers were required by law",
              "His novels were published in instalments, so suspense made readers buy the next part",
            ],
            answerIndex: 3,
            hint: "Think about how Victorian readers received his stories.",
            explanation:
              "Many of Dickens’s novels came out in weekly or monthly parts, so leaving readers in suspense kept them buying, just like a TV series today. The other options are invented reasons.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-mcq-p3-q15",
            question: "Of Mice and Men begins and ends at the same pool by the Salinas River. This is an example of…",
            options: ["Circular structure", "In medias res", "A cliffhanger", "Multiple narrators"],
            answerIndex: 0,
            hint: "The story comes back round to where it started.",
            explanation:
              "Ending where the story began is a circular structure, which can suggest that characters are trapped or that nothing has really changed for them. A cliffhanger leaves suspense unresolved, which is different.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-mcq-p3-q16",
            question: "Holes weaves Stanley’s present-day story together with stories from the past that turn out to be connected. This structure is best described as…",
            options: ["Circular structure", "In medias res", "Multiple (dual) timelines", "A single flashback"],
            answerIndex: 2,
            hint: "More than one time period runs through the whole book.",
            explanation:
              "Several interwoven time periods form multiple timelines. It is more than ‘a single flashback’ because the past stories return again and again across the novel.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-mcq-p3-q17",
            question: "Noughts and Crosses alternates between Sephy’s and Callum’s first-person voices. What is the main effect?",
            options: [
              "It makes the plot deliberately confusing",
              "It hides both characters’ thoughts",
              "It shows that only one of them is telling the truth",
              "It lets the reader see events from both sides of a divided society",
            ],
            answerIndex: 3,
            hint: "The two narrators come from opposite sides of a divide.",
            explanation:
              "Alternating narrators let readers experience the same world from both sides, building understanding of each. Multiple narrators actually reveal more thoughts, not fewer, so B is wrong.",
            guideRef: "narrative-perspective",
          },
          {
            id: "nov-mcq-p3-q18",
            question: "Chapter 2 of Jane Eyre opens: ‘I resisted all the way: a new thing for me’. Which structural technique does this opening use?",
            options: [
              "Starting in the middle of the action (in medias res)",
              "A circular ending",
              "A description of the weather",
              "A flashback to Jane’s birth",
            ],
            answerIndex: 0,
            hint: "Is Jane calmly setting the scene, or already struggling?",
            explanation:
              "The chapter opens mid-struggle as Jane is dragged to the red-room, plunging us straight into action. It is not a flashback to her birth or a weather description.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-mcq-p3-q19",
            question: "Which sentence is the strongest analysis of the setting?",
            options: [
              "The room is red and scary.",
              "Brontë repeats red (‘crimson’, ‘deep red damask’) so the room seems to burn with the anger Jane has just shown, making the setting a mirror of her feelings.",
              "The red-room is a room in Gateshead Hall where Jane is sent.",
              "There are lots of colours in the description, which makes it good.",
            ],
            answerIndex: 1,
            hint: "Which one uses evidence AND explains an effect linked to character?",
            explanation:
              "B embeds evidence, explains connotation and links setting to Jane’s feelings. A is a basic opinion, C is summary, and D is a vague judgement with no explanation.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-mcq-p3-q20",
            question: "Which word best describes the atmosphere of the red-room?",
            options: ["Playful", "Welcoming", "Oppressive", "Chaotic"],
            answerIndex: 2,
            hint: "It is heavy, still, cold and judging.",
            explanation:
              "‘Oppressive’ means heavy and weighing down on someone, which fits the massive furniture, drawn blinds, chill and silence. ‘Chaotic’ is wrong because the room is still and silent, not disordered.",
            guideRef: "setting-atmosphere",
          },
        ],
      },
      {
        id: "nov-mcq-p4",
        title: "MCQ Paper 4",
        passage: ORIGINAL_LETTER,
        questions: [
          {
            id: "nov-mcq-p4-q01",
            question: "‘the sea outside our window was the colour of a bruise’. What does this description suggest?",
            options: [
              "The sea is a pretty purple colour",
              "The narrator has hurt herself",
              "The sun is setting",
              "Pain or damage, hinting that something harmful is coming",
            ],
            answerIndex: 3,
            hint: "What causes a bruise?",
            explanation:
              "A bruise is a sign of injury, so the image tints the whole setting with pain and hints at trouble ahead. The narrator is not literally hurt; it is the sea that is described.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-mcq-p4-q02",
            question: "Which narrative perspective is used in this extract?",
            options: [
              "Third person limited",
              "First person, with an older narrator looking back",
              "Second person",
              "Third person omniscient",
            ],
            answerIndex: 1,
            hint: "Look at ‘I was twelve’ and ‘Later, much later, I would wish…’.",
            explanation:
              "It uses ‘I’, and ‘Later, much later, I would wish’ shows the narrator is older, looking back. It is not third person, since there is no ‘she’ for the main character.",
            guideRef: "narrative-perspective",
          },
          {
            id: "nov-mcq-p4-q03",
            extract: "Later, much later, I would wish I had put the letter in the fire.",
            question: "Which technique is this?",
            options: ["Foreshadowing", "Flashback", "Pathetic fallacy", "In medias res"],
            answerIndex: 0,
            hint: "Does it point forward or backward in time?",
            explanation:
              "It hints that opening the letter will lead to regret, so it points forward: foreshadowing. A flashback would show earlier events, not hint at later ones.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-mcq-p4-q04",
            extract: "the newspaper rising and falling on his chest like a small grey tide",
            question: "What is the best interpretation of this simile?",
            options: [
              "It shows Grandad is dangerous",
              "It shows Grandad is reading the newspaper",
              "It links the calm, ordinary home to the sea that dominates the story, suggesting a peaceful rhythm",
              "It shows the house is flooding",
            ],
            answerIndex: 2,
            hint: "He is asleep. What is ‘rising and falling’ with his breathing?",
            explanation:
              "The newspaper moves with his breathing like a gentle tide, a calm image that also keeps the sea present even inside the house. He is asleep, so he is not reading, and nothing is literally flooding.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-mcq-p4-q05",
            extract: "Miss Nell Carrow. By hand.",
            question: "Why might the writer place these words in a paragraph of their own?",
            options: [
              "To slow the pace and create calm",
              "To show the narrator cannot read",
              "To isolate a key detail and create a pause of suspense",
              "To introduce a new narrator",
            ],
            answerIndex: 2,
            hint: "What happens to your reading when a paragraph is only five words long?",
            explanation:
              "A one-line paragraph makes the reader stop and focus on the strange detail ‘By hand’, building suspense. It does slow the pace, but the effect is tension rather than calm.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-mcq-p4-q06",
            extract: "Someone had stood at our door, close enough to knock, and had chosen not to.",
            question: "What is the main effect of this sentence?",
            options: [
              "It makes the visitor seem friendly",
              "It suggests the postman was lazy",
              "It explains who sent the letter",
              "It creates unease, because a stranger came close but kept themselves hidden",
            ],
            answerIndex: 3,
            hint: "Why would someone come right to your door but not knock?",
            explanation:
              "The sentence turns an ordinary delivery into something sinister: someone was near but secret. It explains nothing about who sent it, which is exactly why it is unsettling.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-mcq-p4-q07",
            question: "Which sentence from the extract uses nature to reflect the growing tension?",
            options: [
              "The house smelt of toast and wet coats.",
              "The gulls had gone quiet.",
              "Mum was at the harbour office until six.",
              "I was twelve.",
            ],
            answerIndex: 1,
            hint: "Look for an animal or the weather behaving in a way that matches the mood.",
            explanation:
              "Sudden silence from usually noisy gulls makes the world seem to hold its breath, mirroring Nell’s unease. ‘Toast and wet coats’ is a homely sensory detail that creates comfort, not tension.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-mcq-p4-q08",
            extract: "Far out, beyond the harbour wall, a single boat with no lights was turning slowly back towards the open water.",
            question: "What does this detail most likely add?",
            options: [
              "Mystery: a secretive boat leaving could be linked to whoever delivered the letter",
              "It shows it is a busy fishing village",
              "It proves the boat delivered the letter",
              "It creates a cheerful ending to the scene",
            ],
            answerIndex: 0,
            hint: "Why might a boat travel with ‘no lights’?",
            explanation:
              "A lightless boat slipping away suggests secrecy and invites us to connect it to the mysterious visitor. ‘Proves’ is too strong: the writer only hints, which is what creates mystery.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-mcq-p4-q09",
            extract: "I was twelve, and I was bored, and I opened it.",
            question: "What is the structural effect of ending the extract with this sentence?",
            options: [
              "It ends on a decision that propels the reader into the next chapter",
              "It resolves the mystery of the letter",
              "It flashes back to an earlier time",
              "It introduces a second narrator",
            ],
            answerIndex: 0,
            hint: "Do we find out what the letter says?",
            explanation:
              "The chapter stops at the moment she opens the letter, so we must read on to discover its contents: a hook-ending. The mystery is not resolved; that is the point.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-mcq-p4-q10",
            question: "The extract begins ‘The day the letter came’ and ends ‘I opened it.’ What is the effect of this framing?",
            options: [
              "It gives the whole novel a circular structure",
              "It shows the story begins in medias res",
              "It focuses the reader on the letter as the key object driving the plot",
              "It creates a dual timeline",
            ],
            answerIndex: 2,
            hint: "What is mentioned in both the first and the last sentence?",
            explanation:
              "Opening and closing on the letter tells us it is the centre of the story. It is not a circular structure, because the ending moves forward (she opens it) rather than returning to where things began, and we cannot judge the whole novel from one chapter.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-mcq-p4-q11",
            extract: "I was twelve, and I had decided that nothing interesting would ever happen to me.",
            question: "Why is this sentence ironic?",
            options: [
              "Because Nell is lying about her age",
              "Because it is written in the present tense",
              "Because it is pathetic fallacy",
              "Because the opening line has already told us something is about to happen to her",
            ],
            answerIndex: 3,
            hint: "Read it alongside the first line of the extract.",
            explanation:
              "‘The day the letter came’ has already signalled that something significant is coming, so young Nell’s belief that nothing will happen is ironic: we know more than she did. It is in the past tense, not the present.",
            guideRef: "unreliable-narrators",
          },
          {
            id: "nov-mcq-p4-q12",
            question: "How is Nell characterised by the final sentence, ‘I was twelve, and I was bored, and I opened it’?",
            options: [
              "As cautious and sensible",
              "As curious and restless, acting on impulse",
              "As frightened and timid",
              "As angry and rebellious",
            ],
            answerIndex: 1,
            hint: "What reasons does she give for opening it?",
            explanation:
              "She opens a mysterious letter because she is bored: curiosity and restlessness win over caution. She is not frightened or timid; a timid character would have left it alone.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p4-q13",
            extract: "tall, sloping letters that leaned forward as if they were in a hurry to arrive",
            question: "Which technique is used to describe the handwriting?",
            options: ["Pathetic fallacy", "Onomatopoeia", "Alliteration", "Personification"],
            answerIndex: 3,
            hint: "Can letters really be ‘in a hurry’?",
            explanation:
              "The letters are given a human desire, hurrying to arrive, which is personification and makes the letter feel urgent. Pathetic fallacy specifically involves weather or nature, not handwriting.",
            guideRef: "characterisation",
          },
          {
            id: "nov-mcq-p4-q14",
            question: "What is a motif?",
            options: [
              "A recurring image, object or idea that gains meaning each time it returns",
              "The main character of a novel",
              "The final chapter of a novel",
              "A type of narrator",
            ],
            answerIndex: 0,
            hint: "Think of the sea in this extract, or cold in A Christmas Carol.",
            explanation:
              "A motif keeps coming back (like cold and warmth in A Christmas Carol) and builds meaning. It is not a character or a narrator.",
            guideRef: "themes-motifs-symbols",
          },
          {
            id: "nov-mcq-p4-q15",
            question: "Which is the best thesis statement for the essay ‘How is loneliness presented across the novel?’",
            options: [
              "Loneliness is in the novel a lot.",
              "In this essay I will talk about loneliness.",
              "The writer presents loneliness as a trap the main character slowly escapes, suggesting that being needed by others heals isolation.",
              "Loneliness means being alone and sad.",
            ],
            answerIndex: 2,
            hint: "A thesis is an argument about the whole novel that you can prove.",
            explanation:
              "Option C makes an arguable claim about how the theme develops and what it suggests. B only announces the topic without arguing anything, and D is a dictionary definition.",
            guideRef: "context-whole-novel",
          },
          {
            id: "nov-mcq-p4-q16",
            question: "You are planning a whole-novel essay on a character. Which choice of evidence is best?",
            options: [
              "Three quotations from Chapter 1",
              "One short quotation each from the beginning, the turning point and the end",
              "No quotations: just retell what happens to them",
              "Two long quotations, each copied out as a whole paragraph",
            ],
            answerIndex: 1,
            hint: "The question is about the WHOLE novel.",
            explanation:
              "Short quotations from across the book let you show change and development. Three quotations from one chapter can only show how the character starts, not how they develop.",
            guideRef: "context-whole-novel",
          },
          {
            id: "nov-mcq-p4-q17",
            question: "Which sentence uses context most effectively?",
            options: [
              "By having Scrooge repeat real Victorian arguments about the poor (‘Are there no prisons?’), Dickens forces readers to hear how heartless those views sound.",
              "Victorian times were very poor. Scrooge is mean.",
              "Charles Dickens was born in 1812.",
              "In the olden days people did not have phones.",
            ],
            answerIndex: 0,
            hint: "Good context explains a writer’s choice and links to a quotation.",
            explanation:
              "Option A links context to a specific quotation and to Dickens’s purpose. B places context next to a point without connecting them, and C is a true fact that does nothing for the analysis.",
            guideRef: "context-whole-novel",
          },
          {
            id: "nov-mcq-p4-q18",
            question: "In The Secret Garden, a garden that has been locked for ten years can stand for grief and neglect. The garden is therefore being used as a…",
            options: ["Flashback", "Narrator", "Pathetic fallacy", "Symbol"],
            answerIndex: 3,
            hint: "A concrete thing standing for an abstract idea.",
            explanation:
              "A physical object representing an abstract idea is a symbol. Pathetic fallacy is tempting because a garden is part of nature, but pathetic fallacy is nature reflecting a mood in a particular moment, not an object carrying a meaning across the novel.",
            guideRef: "themes-motifs-symbols",
          },
          {
            id: "nov-mcq-p4-q19",
            question: "Why might the writer choose an older narrator who can say ‘Later, much later, I would wish…’?",
            options: [
              "To confuse the reader about when the story is set",
              "To show the narrator has forgotten everything",
              "To create suspense by letting the older narrator hint at consequences her younger self could not know",
              "To turn the story into the second person",
            ],
            answerIndex: 2,
            hint: "What does the older Nell know that the twelve-year-old does not?",
            explanation:
              "The retrospective narrator knows how things turned out, so she can drop ominous hints that build suspense. She clearly remembers vividly, so ‘forgotten everything’ is wrong.",
            guideRef: "unreliable-narrators",
          },
          {
            id: "nov-mcq-p4-q20",
            question: "Which word best describes the overall atmosphere of the extract?",
            options: ["Cheerful", "Uneasy", "Comic", "Romantic"],
            answerIndex: 1,
            hint: "Think of the bruise-coloured sea, the silent gulls and the boat with no lights.",
            explanation:
              "Ominous details (bruise, silence, a hidden visitor, a lightless boat) create unease. There are homely touches (toast, a sleeping Grandad), but they make the threat feel stronger by contrast rather than making the mood cheerful.",
            guideRef: "setting-atmosphere",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "nov-qa-p1",
        title: "Written Paper 1",
        passage: JEKYLL_DOOR,
        questions: [
          {
            id: "nov-qa-p1-q01",
            question: "Give two details from the first half of Enfield’s account that show how deserted the streets were.",
            marks: 2,
            hint: "Look before the two figures appear.",
            modelAnswer:
              "Enfield says there was ‘literally nothing to be seen but lamps’, and that ‘all the folks’ were ‘asleep’, so the streets were ‘as empty as a church’.",
            markScheme: [
              { point: "Nothing to be seen but lamps", keywords: ["nothing to be seen", "but lamps", "only lamps", "lamps", "nothing but"] },
              { point: "Everyone asleep / as empty as a church", keywords: ["asleep", "empty as a church", "as empty", "folks asleep", "no one", "nobody"] },
            ],
            commonError: "Giving the time (‘three o’clock’) as a detail of emptiness, or giving two details that say the same thing.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-qa-p1-q02",
            question: "How does Stevenson build tension before the collision? Refer to language and structure.",
            marks: 3,
            hint: "Look at repetition and at what Enfield starts to ‘long for’.",
            modelAnswer:
              "Stevenson repeats ‘Street after street’ so the walk feels endless and eerie, as if the empty city goes on for ever. Enfield ‘listens and listens’, and the repetition shows his nerves growing until he ‘begins to long for the sight of a policeman’, which suggests he senses danger before anything happens. The long, rambling sentence delays the event, so when ‘All at once’ two figures appear, the sudden shift makes the reader alert.",
            markScheme: [
              { point: "Repetition of ‘street after street’ makes the walk endless/eerie", keywords: ["street after street", "repetition", "repeats", "endless", "eerie", "goes on"] },
              { point: "‘listens and listens’ / longing for a policeman shows growing unease", keywords: ["listens", "policeman", "nervous", "uneasy", "anxious", "danger", "fear"] },
              { point: "Structure: long build-up then sudden ‘All at once’", keywords: ["all at once", "sudden", "long sentence", "delays", "build up", "shift", "structure"] },
            ],
            commonError: "Explaining what happens (‘he walks home late’) rather than how the writing makes it tense.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-qa-p1-q03",
            extract: "the man trampled calmly over the child’s body and left her screaming on the ground",
            question: "Analyse how this phrase presents Hyde.",
            marks: 4,
            hint: "Zoom in on the verb and the adverb, then put them together.",
            modelAnswer:
              "The verb ‘trampled’ suggests an animal or a stampede crushing whatever is in its way, so Hyde seems brutal and inhuman. However, the adverb ‘calmly’ is even more disturbing, because it shows he feels no shock or guilt. The contrast between a violent action and a calm manner presents him as cold-blooded rather than simply clumsy. The image of the child ‘left… screaming’ stresses her vulnerability and his indifference, making the reader horrified at Hyde before he is even named.",
            markScheme: [
              { point: "Analyses ‘trampled’: animal-like, crushing, brutal", keywords: ["trampled", "animal", "crush", "stampede", "brutal", "beast", "violent"] },
              { point: "Analyses ‘calmly’: no emotion, guilt or shock", keywords: ["calmly", "calm", "no emotion", "no guilt", "doesn't care", "does not care", "indifferent", "cold"] },
              { point: "Notes the contrast between the violent act and the calm manner", keywords: ["contrast", "juxtaposition", "yet", "however", "despite", "even though"] },
              { point: "Explains effect on the reader / vulnerability of the child", keywords: ["reader", "horrified", "shocked", "child", "vulnerable", "innocent", "screaming"] },
            ],
            commonError: "Only analysing ‘trampled’ and missing that ‘calmly’ is the most shocking word.",
            guideRef: "characterisation",
          },
          {
            id: "nov-qa-p1-q04",
            extract: "all lighted up as if for a procession and all as empty as a church",
            question: "Explain the effect of the two comparisons in this phrase.",
            marks: 3,
            hint: "A procession is full of people; a church at 3 a.m. is not. What does that contrast do?",
            modelAnswer:
              "The comparison to a ‘procession’ suggests the streets are lit for a crowd, so their emptiness feels strange and unnatural, as if something is missing. The simile ‘as empty as a church’ adds a silent, solemn, even eerie atmosphere. It is also ironic, because a church is a holy place, yet these streets are about to host an act of evil, so the comparison quietly sets good against evil.",
            markScheme: [
              { point: "Procession: lit for a crowd, so the emptiness feels unnatural", keywords: ["procession", "crowd", "celebration", "unnatural", "strange", "expected"] },
              { point: "‘As empty as a church’: silent, solemn, eerie", keywords: ["church", "silent", "solemn", "eerie", "still", "quiet", "simile"] },
              { point: "Irony/contrast: holy place vs coming evil", keywords: ["holy", "irony", "ironic", "evil", "good and evil", "religious", "contrast"] },
            ],
            commonError: "Simply saying ‘it is a simile that describes the street’ without explaining what the comparison suggests.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-qa-p1-q05",
            question:
              "The trampling is not described by the narrator but by Mr Enfield, retelling it to Mr Utterson. What is the effect of presenting Hyde through a second-hand account?",
            marks: 4,
            hint: "Think about distance, mystery and how far we can trust a story told by someone else.",
            modelAnswer:
              "Because we only hear about Hyde through Enfield’s story, we see him from the outside and never enter his mind, which keeps him mysterious. Enfield’s own reactions (‘hellish to see’) shape how we feel, so we receive a frightened witness’s version rather than neutral facts. The second-hand frame also feels like gossip passed between respectable gentlemen, which fits a novella about secrets and reputations. Finally, the distance builds suspense: the reader wants to meet Hyde directly to judge him for themselves.",
            markScheme: [
              { point: "Hyde seen from outside / no access to his thoughts, so he is mysterious", keywords: ["outside", "mystery", "mysterious", "thoughts", "don't know", "do not know", "unknown"] },
              { point: "Enfield’s reactions colour the account / reliability", keywords: ["enfield", "witness", "opinion", "reliable", "biased", "his view", "perspective"] },
              { point: "Links to gossip, reputation, secrecy among gentlemen", keywords: ["gossip", "reputation", "secret", "respectable", "gentlemen", "story within"] },
              { point: "Builds suspense / reader wants to meet Hyde", keywords: ["suspense", "curious", "want to know", "read on", "tension", "intrigue"] },
            ],
            commonError: "Calling it ‘first person’ without explaining that it is a story inside a third-person narrative, or not explaining any effect.",
            guideRef: "narrative-perspective",
          },
          {
            id: "nov-qa-p1-q06",
            extract: "It wasn’t like a man; it was like some damned Juggernaut.",
            question: "What does this sentence suggest about Hyde? Comment on the word choices.",
            marks: 3,
            hint: "Notice ‘it’ rather than ‘he’, and look up what a Juggernaut is in the note.",
            modelAnswer:
              "Enfield refuses to call Hyde a man, using ‘it’ and ‘wasn’t like a man’, which dehumanises him. A ‘Juggernaut’ is a huge, unstoppable force that crushes anything in its path, suggesting Hyde is mechanical, merciless and impossible to stop, even though he is a ‘little man’. The word ‘damned’ adds a hint of hell and damnation, linking Hyde to evil.",
            markScheme: [
              { point: "Dehumanising: ‘it’, ‘wasn’t like a man’", keywords: ["it", "not human", "inhuman", "dehumanise", "dehumanises", "not a man", "monster"] },
              { point: "Juggernaut: unstoppable, crushing, mechanical force", keywords: ["juggernaut", "unstoppable", "crushing", "force", "machine", "mechanical", "merciless"] },
              { point: "‘damned’: hell, evil, damnation", keywords: ["damned", "hell", "evil", "devil", "damnation", "sinful"] },
            ],
            commonError: "Treating ‘damned’ only as a swear word, rather than noticing its religious connotations of hell.",
            guideRef: "characterisation",
          },
          {
            id: "nov-qa-p1-q07",
            extract: "It sounds nothing to hear, but it was hellish to see.",
            question: "What is Enfield suggesting in this sentence, and how does it affect the reader?",
            marks: 2,
            hint: "He is admitting a problem with his own story.",
            modelAnswer:
              "Enfield admits that his words cannot capture how horrifying the scene was: something about seeing it was ‘hellish’ in a way that cannot be explained. This makes the reader imagine something even worse than what is described, so Hyde becomes more frightening because the true horror is left unspoken.",
            markScheme: [
              { point: "Words cannot capture the horror / seeing was worse than telling", keywords: ["cannot describe", "can't describe", "words", "worse to see", "indescribable", "can't explain", "cannot explain"] },
              { point: "Reader imagines something worse / horror left unspoken", keywords: ["imagine", "imagination", "unspoken", "worse", "more frightening", "mystery"] },
            ],
            commonError: "Paraphrasing the line without explaining why leaving horror undescribed can make it scarier.",
            guideRef: "characterisation",
          },
          {
            id: "nov-qa-p1-q08",
            question: "Using STEAL, explain two ways Hyde is characterised indirectly in this extract.",
            marks: 4,
            hint: "We never hear Hyde speak or think here. Which channels are left?",
            modelAnswer:
              "First, through his actions: he ‘trampled calmly over the child’s body’, which shows cruelty and a total lack of feeling. Second, through his looks and movement: he is ‘a little man who was stumping along’, and ‘stumping’ suggests heavy, awkward, aggressive steps rather than a gentleman’s stroll. A third channel is his effect on others: Enfield finds the sight ‘hellish’, and the girl is left ‘screaming’, showing the horror he causes.",
            markScheme: [
              { point: "Names actions as a channel", keywords: ["actions", "action", "what he does", "trampled", "a for actions"] },
              { point: "Explains the action: cruelty, no feeling", keywords: ["cruel", "cruelty", "no feeling", "heartless", "calmly", "cold"] },
              { point: "Names a second channel: looks or effect on others", keywords: ["looks", "appearance", "effect on others", "reaction", "little man", "stumping", "hellish"] },
              { point: "Explains the second channel’s effect", keywords: ["awkward", "heavy", "aggressive", "horror", "frightened", "screaming", "disturbing"] },
            ],
            commonError: "Choosing Speech or Thoughts, which do not appear for Hyde in this extract.",
            guideRef: "characterisation",
          },
          {
            id: "nov-qa-p1-q09",
            extract: "Well, sir, the two ran into one another naturally enough at the corner; and then came the horrible part of the thing",
            question: "How does Stevenson structure this moment to shock the reader?",
            marks: 3,
            hint: "Compare ‘naturally enough’ with ‘the horrible part’. Where does the semicolon fall?",
            modelAnswer:
              "Stevenson first makes the collision seem ordinary, ‘naturally enough’, lulling the reader into thinking it is a simple accident. The semicolon then creates a pause before ‘and then came the horrible part’, which signals a sharp turn and builds dread. This shift from normal to horrible makes the cruelty that follows more shocking because it comes out of an everyday moment.",
            markScheme: [
              { point: "‘naturally enough’ makes it seem ordinary / an accident", keywords: ["naturally", "ordinary", "normal", "accident", "everyday", "innocent"] },
              { point: "Pause/semicolon or ‘and then’ signals the turn", keywords: ["semicolon", "pause", "and then", "turn", "delay", "signal"] },
              { point: "Shift from normal to horrible creates shock or dread", keywords: ["shift", "contrast", "shock", "dread", "horrible", "sudden", "change"] },
            ],
            commonError: "Ignoring structure and only commenting on the word ‘horrible’.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-qa-p1-q10",
            extract:
              "It was two storeys high; showed no window, nothing but a door on the lower storey and a blind forehead of discoloured wall on the upper; and bore in every feature, the marks of prolonged and sordid negligence.",
            question:
              "Stevenson’s novella was published in 1886, when respectable Victorian gentlemen were expected to hide any unrespectable behaviour. How does this description of the building where Hyde enters introduce the idea of hidden, secret lives? Use the context in your answer.",
            marks: 5,
            hint: "Personification of the building; windows and eyes; Victorian respectability and secrecy.",
            modelAnswer:
              "Stevenson personifies the building as a face with ‘a blind forehead’, so it seems to have no eyes and refuses to be seen into, just as a secret life is hidden from view. It ‘showed no window’, suggesting there is no way of looking inside, and the single door implies a hidden entrance for someone who does not want to be noticed. The ‘sordid negligence’ suggests something dirty and shameful behind the respectable streets around it. For Victorian readers, who lived in a society obsessed with reputation, this building symbolises the shameful side that respectable men kept concealed, preparing us for the revelation that Jekyll, a respectable doctor, and Hyde share the same house.",
            markScheme: [
              { point: "Identifies personification: ‘blind forehead’ as a face", keywords: ["personification", "personifies", "face", "forehead", "blind", "human"] },
              { point: "No windows / blind = cannot see in = secrecy", keywords: ["no window", "can't see", "cannot see", "hidden", "secret", "concealed", "blind"] },
              { point: "‘sordid negligence’ suggests something shameful/dirty", keywords: ["sordid", "negligence", "dirty", "shameful", "neglected", "seedy"] },
              { point: "Links to Victorian respectability/reputation context", keywords: ["victorian", "respectable", "respectability", "reputation", "society", "appearances"] },
              { point: "Links to the theme of duality or Jekyll’s hidden self", keywords: ["duality", "double", "jekyll", "two sides", "hidden self", "symbol", "symbolises"] },
            ],
            commonError: "Writing a paragraph of history about the Victorians without connecting it to specific words in the extract.",
            guideRef: "context-whole-novel",
          },
          {
            id: "nov-qa-p1-q11",
            question:
              "Rewrite the moment of the collision in 2–3 sentences from the girl’s first-person point of view. Then explain one effect of the change of perspective.",
            marks: 3,
            hint: "Use ‘I’. What would she feel, see and hear? Then compare with Enfield’s view.",
            modelAnswer:
              "I was running so fast that I did not see him until the corner. Then something heavy struck me and I was on the cobbles, and a boot pressed down on my back as if I were a doormat. I screamed, but he did not even look down.\n\nThe first-person view puts the reader inside the victim’s pain and fear, which makes us feel the cruelty physically, whereas Enfield’s account keeps us at a distance as shocked onlookers.",
            markScheme: [
              { point: "Consistent first-person viewpoint of the girl", keywords: ["i was", "i felt", "my", "me", "i screamed", "i ran"] },
              { point: "Includes vivid sensory or emotional detail", keywords: ["felt", "pain", "heavy", "boot", "cobbles", "scream", "fear", "cold"] },
              { point: "Explains an effect: closer to victim’s feelings vs distance of witness", keywords: ["inside", "closer", "feel", "sympathy", "victim", "distance", "intimate", "empathy"] },
            ],
            commonError: "Slipping back into ‘she’ halfway through, or writing the rewrite but forgetting the explanation.",
            guideRef: "narrative-perspective",
          },
          {
            id: "nov-qa-p1-q12",
            question: "How does Stevenson present Mr Hyde as frightening in this extract? Write a developed answer with at least two pieces of evidence.",
            marks: 6,
            hint: "Plan: setting that builds dread → Hyde’s action → the language Enfield uses for him. Use PEEL.",
            modelAnswer:
              "Stevenson makes Hyde frightening first by surrounding his appearance with an eerie setting. Enfield walks through streets ‘as empty as a church’ at ‘three o’clock of a black winter morning’, and the darkness and silence make the reader expect danger before Hyde even arrives.\n\nHyde’s action is the most horrifying detail: he ‘trampled calmly over the child’s body’. The verb ‘trampled’ makes him sound like a beast, while the adverb ‘calmly’ shows he feels nothing, so his cruelty seems cold and deliberate rather than accidental.\n\nFinally, Enfield’s language strips Hyde of humanity: ‘It wasn’t like a man; it was like some damned Juggernaut.’ The pronoun ‘it’ and the image of a crushing, unstoppable force present Hyde as something mechanical and evil, and ‘damned’ links him to hell. Because we see him only through a horrified witness, he remains mysterious, which makes him even more frightening. Stevenson is preparing readers for a novella about the evil that can hide inside a respectable world.",
            markScheme: [
              { point: "Argues a clear point about how Hyde is made frightening", keywords: ["stevenson presents", "frightening", "makes hyde", "presents hyde", "terrifying", "menacing"] },
              { point: "Analyses setting building dread (dark, empty streets)", keywords: ["empty", "church", "black winter", "three o'clock", "lamps", "setting", "dark"] },
              { point: "Analyses ‘trampled’ and/or ‘calmly’", keywords: ["trampled", "calmly", "beast", "animal", "no feeling", "cold"] },
              { point: "Analyses dehumanising language: ‘it’, ‘Juggernaut’, ‘damned’", keywords: ["juggernaut", "inhuman", "not like a man", "damned", "dehumanise", "monster"] },
              { point: "Comments on second-hand perspective/mystery", keywords: ["enfield", "witness", "mystery", "mysterious", "second-hand", "told by"] },
              { point: "Links to writer’s purpose or theme (evil hidden in respectable society, duality)", keywords: ["purpose", "theme", "duality", "evil", "respectable", "hidden", "victorian"] },
            ],
            commonError: "Retelling the incident in order without analysing any individual word choices.",
            guideRef: "characterisation",
          },
        ],
      },
      {
        id: "nov-qa-p2",
        title: "Written Paper 2",
        passage: SECRET_GARDEN,
        questions: [
          {
            id: "nov-qa-p2-q01",
            question: "Give two physical details from the extract which suggest that Mary is unhealthy.",
            marks: 2,
            hint: "Look at her face, body and colouring.",
            modelAnswer: "She has ‘a little thin face and a little thin body’, and ‘her face was yellow because she had… always been ill’.",
            markScheme: [
              { point: "Thin face/body", keywords: ["thin", "little thin", "thin face", "thin body", "skinny"] },
              { point: "Yellow face / always ill", keywords: ["yellow", "ill", "sick", "always been ill", "sallow"] },
            ],
            commonError: "Giving ‘a sour expression’, which describes her mood rather than her health.",
            guideRef: "characterisation",
          },
          {
            id: "nov-qa-p2-q02",
            extract: "everybody said she was the most disagreeable-looking child ever seen. It was true, too.",
            question: "Is this direct or indirect characterisation? Explain the effect of the short sentence ‘It was true, too.’",
            marks: 3,
            hint: "Who is telling us about Mary? Then think about how blunt the second sentence is.",
            modelAnswer:
              "This is direct characterisation, because the narrator tells us plainly what Mary is like. The short sentence ‘It was true, too.’ confirms the gossip instead of defending Mary, which is surprisingly blunt and almost funny. It makes the narrator seem honest and unsentimental, and it makes the reader curious, because it is unusual for a story to begin by agreeing that its heroine is unpleasant.",
            markScheme: [
              { point: "Identifies direct characterisation", keywords: ["direct", "tells us", "told", "narrator tells", "states"] },
              { point: "Short sentence is blunt / confirms the gossip", keywords: ["blunt", "confirms", "agrees", "short sentence", "harsh", "honest"] },
              { point: "Effect: narrator seems honest / reader curious or amused", keywords: ["curious", "honest", "unusual", "surprising", "funny", "humour", "intrigued"] },
            ],
            commonError: "Calling it indirect because ‘everybody said’ it, but the narrator then confirms it directly.",
            guideRef: "characterisation",
          },
          {
            id: "nov-qa-p2-q03",
            extract: "She had a little thin face and a little thin body, thin light hair and a sour expression.",
            question: "Analyse how Burnett uses repetition and word choice in this sentence.",
            marks: 4,
            hint: "Count the ‘thin’s and ‘little’s. Then look at the last word.",
            modelAnswer:
              "Burnett repeats ‘thin’ three times and ‘little’ twice, so the sentence itself seems underfed, stressing how small and neglected Mary is. The repetition sounds like a list of faults, almost like someone criticising her, which matches the gossip about her. The final adjective ‘sour’ shifts from her body to her mood: like sour milk, it suggests something that has gone off, implying that her unhappiness has spoiled her nature. Together these words make her unappealing but also a little pitiful.",
            markScheme: [
              { point: "Identifies repetition of ‘thin’ and/or ‘little’", keywords: ["repetition", "repeats", "thin", "little", "three times", "repeated"] },
              { point: "Explains effect: small, frail, neglected, underfed", keywords: ["small", "frail", "neglected", "underfed", "weak", "fragile", "uncared"] },
              { point: "Analyses ‘sour’: gone off, bitter, unpleasant mood", keywords: ["sour", "bitter", "gone off", "unpleasant", "grumpy", "spoiled", "taste"] },
              { point: "Overall effect: unappealing but pitiable", keywords: ["pity", "sympathy", "pitiful", "unlikeable", "unappealing", "sorry for"] },
            ],
            commonError: "Noticing the repetition without saying what it makes the reader think about Mary.",
            guideRef: "characterisation",
          },
          {
            id: "nov-qa-p2-q04",
            question: "What kind of narrator tells The Secret Garden, and how can you tell from this extract?",
            marks: 3,
            hint: "Pronouns, then: does the narrator give opinions?",
            modelAnswer:
              "It is a third-person narrator, because Mary is called ‘she’ rather than ‘I’. The narrator seems omniscient and outside the story, because they know what ‘everybody said’ and give their own judgement (‘It was true, too’). They also explain Mary’s background, that she was born in India and had always been ill, which shows wider knowledge than one character’s view.",
            markScheme: [
              { point: "Third person: ‘she’", keywords: ["third person", "she", "her", "third-person"] },
              { point: "Omniscient/knows what everybody said or gives opinions", keywords: ["omniscient", "all-knowing", "opinion", "judgement", "everybody said", "comments"] },
              { point: "Explains background beyond one viewpoint", keywords: ["india", "background", "always been ill", "explains", "knows", "past"] },
            ],
            commonError: "Saying ‘first person’ because the narrator gives an opinion: opinionated narrators can still be third person.",
            guideRef: "narrative-perspective",
          },
          {
            id: "nov-qa-p2-q05",
            question: "Why might Burnett choose to open her novel by presenting her heroine as unlikeable?",
            marks: 3,
            hint: "Think about character arcs and about what makes readers keep reading.",
            modelAnswer:
              "Starting with an unlikeable heroine is surprising, which hooks the reader. It also gives Mary somewhere to travel: if she begins sour and ‘disagreeable’, her change later in the novel will feel greater and more satisfying. Finally, it lets Burnett explore her message that people are shaped by how they are treated, since a neglected child has never been taught to be kind.",
            markScheme: [
              { point: "Surprising opening hooks the reader", keywords: ["hook", "surprising", "unusual", "curious", "intrigue", "read on"] },
              { point: "Creates room for a character arc / change", keywords: ["change", "arc", "develop", "transform", "grow", "later"] },
              { point: "Links to message: neglect shapes behaviour", keywords: ["neglect", "treated", "upbringing", "message", "never loved", "how she was raised", "shaped"] },
            ],
            commonError: "Saying ‘to make us dislike her’ and stopping, without explaining what the writer gains.",
            guideRef: "character-change",
          },
          {
            id: "nov-qa-p2-q06",
            question:
              "Read the note under the extract. How does this context help explain Mary’s behaviour at the start of the novel, and what might Burnett be suggesting?",
            marks: 4,
            hint: "Her parents; the servants; what she has never had to do.",
            modelAnswer:
              "Mary grew up in British-ruled India, ignored by her parents and waited on by servants who had to do as she said. Because nobody loved her and she never had to consider anyone else, she became spoilt, bad-tempered and selfish. This suggests Burnett believes children are shaped by how they are cared for: Mary is not simply ‘bad’, she has been neglected. It prepares for the novel’s idea that care, nature and friendship can change her.",
            markScheme: [
              { point: "Ignored or neglected by her parents", keywords: ["ignored", "neglected", "parents", "unloved", "not loved", "no attention"] },
              { point: "Waited on by servants / spoilt / never had to think of others", keywords: ["servants", "spoilt", "spoiled", "waited on", "got her way", "selfish"] },
              { point: "Burnett suggests behaviour comes from upbringing", keywords: ["upbringing", "shaped", "not her fault", "caused", "because of", "environment"] },
              { point: "Links to later change through care/nature/friendship", keywords: ["change", "care", "nature", "garden", "friendship", "heal"] },
            ],
            commonError: "Writing about India in general instead of linking the context to Mary’s character.",
            guideRef: "context-whole-novel",
          },
          {
            id: "nov-qa-p2-q07",
            extract: "It was the sweetest, most mysterious-looking place any one could imagine. (Chapter 9, when Mary first enters the garden)",
            question: "How does this description of the garden contrast with the description of Mary in Chapter 1, and what might the contrast suggest?",
            marks: 4,
            hint: "Find the opposite of ‘sour’. What might the garden do for her?",
            modelAnswer:
              "The superlative ‘sweetest’ is the direct opposite of Mary’s ‘sour expression’ in Chapter 1, so the garden seems to hold everything Mary lacks. ‘Mysterious-looking’ suggests secrets and possibilities waiting to be discovered, which mirrors Mary herself: a neglected place, like a neglected child, may hide life. The contrast suggests the garden will change her, so the setting works as a symbol of the growth and healing she will experience.",
            markScheme: [
              { point: "Identifies the superlatives ‘sweetest’ / ‘most mysterious-looking’", keywords: ["superlative", "sweetest", "most mysterious", "mysterious", "most"] },
              { point: "Contrasts ‘sweetest’ with ‘sour’", keywords: ["sour", "opposite", "contrast", "unlike", "whereas", "sweet"] },
              { point: "Mystery suggests hidden life/possibility, mirroring Mary", keywords: ["secret", "hidden", "possibility", "discover", "mirror", "like mary"] },
              { point: "Garden as symbol of growth/healing; it will change her", keywords: ["symbol", "symbolises", "growth", "heal", "change", "transform"] },
            ],
            commonError: "Describing the garden only, and forgetting the comparison with Mary that the question asks for.",
            guideRef: "themes-motifs-symbols",
          },
          {
            id: "nov-qa-p2-q08",
            question: "What is a motif? Explain how keys or doors could work as a motif in The Secret Garden or Strange Case of Dr Jekyll and Mr Hyde.",
            marks: 3,
            hint: "Definition, then an example, then what it builds up to mean.",
            modelAnswer:
              "A motif is an image, object or idea that recurs through a novel and gains meaning each time. In The Secret Garden, a locked door and a buried key keep the garden shut away; when Mary finds the key and opens the door, the motif comes to stand for unlocking her own feelings and her ability to care. Each return of doors and keys builds the idea that people, like places, can be shut up and then opened again.",
            markScheme: [
              { point: "Defines motif as recurring image/idea", keywords: ["recurring", "recurs", "repeated", "keeps coming", "returns", "again and again"] },
              { point: "Gives a valid example of keys/doors in one of the texts", keywords: ["key", "door", "locked", "garden", "jekyll", "back door"] },
              { point: "Explains the meaning built up (secrecy, unlocking feelings, hidden self)", keywords: ["unlock", "secret", "hidden", "feelings", "open up", "shut away", "hidden self"] },
            ],
            commonError: "Defining a symbol (one object = one idea) without the key idea of repetition.",
            guideRef: "themes-motifs-symbols",
          },
          {
            id: "nov-qa-p2-q09",
            question:
              "‘Nature’ is a subject in The Secret Garden, not yet a theme. Turn it into a theme statement, then explain how the garden supports your statement.",
            marks: 4,
            hint: "What does the novel suggest ABOUT nature? Use ‘Burnett suggests that…’.",
            modelAnswer:
              "Theme statement: Burnett suggests that caring for nature can heal people who have been neglected. The garden has been locked away for ten years, just as Mary has been ignored, and when she starts to look after it, both begin to grow. By working outdoors Mary becomes stronger and kinder, so the garden’s return to life mirrors her own, supporting the idea that nature and care together restore health and happiness.",
            markScheme: [
              { point: "States a theme as an idea, not a single word", keywords: ["suggests that", "shows that", "can heal", "can help", "idea that", "message"] },
              { point: "Garden locked/neglected parallels Mary", keywords: ["locked", "neglected", "ten years", "abandoned", "like mary", "parallel"] },
              { point: "Caring for the garden makes Mary grow/heal", keywords: ["grow", "healthier", "stronger", "kinder", "care", "heal"] },
              { point: "Explains how the garden’s revival mirrors her change", keywords: ["mirror", "reflects", "symbol", "as the garden", "comes back to life", "revival"] },
            ],
            commonError: "Writing ‘The theme is nature’, which simply repeats the subject.",
            guideRef: "themes-motifs-symbols",
          },
          {
            id: "nov-qa-p2-q10",
            question: "Describe Mary Lennox’s character arc in three stages: starting point, turning point and end point.",
            marks: 3,
            hint: "Disagreeable and alone → discovering something → who she becomes.",
            modelAnswer:
              "At the start Mary is sour, selfish and lonely, a ‘disagreeable’ child who has never cared for anyone. The turning point comes when she discovers the hidden garden and begins to tend it, making friends along the way. By the end she has become healthy, caring and happy, someone who helps others rather than ordering them about.",
            markScheme: [
              { point: "Starting point: disagreeable, sour, selfish, lonely", keywords: ["disagreeable", "sour", "selfish", "lonely", "spoilt", "contrary", "unpleasant"] },
              { point: "Turning point: finding/tending the garden or making friends", keywords: ["finds the garden", "discovers", "key", "garden", "robin", "friend", "dickon"] },
              { point: "End point: healthy, caring, happy, kind", keywords: ["healthy", "caring", "happy", "kind", "kinder", "helps others", "generous"] },
            ],
            commonError: "Describing only the start and the end, with no cause for the change.",
            guideRef: "character-change",
          },
          {
            id: "nov-qa-p2-q11",
            question:
              "This sentence drops a quotation in clumsily: ‘Mary is unpleasant. “a sour expression”.’ Rewrite it with the quotation embedded in your own sentence, and add a brief explanation.",
            marks: 2,
            hint: "Weave the quoted words into a grammatical sentence of your own.",
            modelAnswer: "Burnett describes Mary’s ‘sour expression’, suggesting that her unhappiness has turned her bitter and unpleasant.",
            markScheme: [
              { point: "Quotation embedded grammatically within the student’s own sentence", keywords: ["describes", "mary's", "with a sour", "sour expression", "her sour", "presents"] },
              { point: "Adds an explanation of the effect", keywords: ["suggesting", "suggests", "implies", "shows", "bitter", "unhappy"] },
            ],
            commonError: "Keeping the quotation as a separate fragment after a full stop.",
            guideRef: "context-whole-novel",
          },
          {
            id: "nov-qa-p2-q12",
            question: "How does Burnett make Mary an unappealing but intriguing character in the opening of The Secret Garden?",
            marks: 6,
            hint: "Plan: direct characterisation and narrator’s bluntness → repetition of ‘thin’ → ‘sour’ and ‘yellow’ → why we want to read on.",
            modelAnswer:
              "Burnett deliberately opens with an unattractive heroine. The narrator reports that ‘everybody said she was the most disagreeable-looking child ever seen’ and then bluntly agrees: ‘It was true, too.’ This direct characterisation is surprising because a narrator usually defends the main character, so the reader is jolted into curiosity.\n\nThe repetition of ‘thin’ and ‘little’ makes Mary seem small and starved, while her ‘yellow’ face shows she has ‘always been ill’. These details invite pity as well as dislike: she seems neglected rather than wicked.\n\nThe adjective ‘sour’ suggests something that has gone bad, implying her unhappiness has spoiled her temper. However, things that have gone sour can be remade, and the reader senses that this is the beginning of a character arc. Because the opening gives Mary so far to travel, it makes us want to discover what will change her, which is Burnett’s way of hooking us into a story about growth and healing.",
            markScheme: [
              { point: "Clear argument: Mary is unappealing yet intriguing", keywords: ["unappealing", "unlikeable", "intriguing", "curious", "burnett presents", "hook"] },
              { point: "Analyses direct characterisation / narrator’s bluntness", keywords: ["direct", "it was true", "blunt", "narrator", "everybody said", "disagreeable"] },
              { point: "Analyses repetition of ‘thin’/‘little’", keywords: ["thin", "little", "repetition", "repeats", "small", "starved"] },
              { point: "Analyses ‘sour’ or ‘yellow’", keywords: ["sour", "yellow", "ill", "bitter", "gone off", "sickly"] },
              { point: "Explains sympathy/pity alongside dislike", keywords: ["pity", "sympathy", "neglected", "sorry", "not her fault", "lonely"] },
              { point: "Links to structure/arc: space for change, reader wants to read on", keywords: ["arc", "change", "grow", "read on", "transform", "later"] },
            ],
            commonError: "Only proving Mary is unpleasant and forgetting the ‘intriguing’ half of the question.",
            guideRef: "characterisation",
          },
        ],
      },
      {
        id: "nov-qa-p3",
        title: "Written Paper 3",
        passage: ORIGINAL_FIRST_DAY,
        questions: [
          {
            id: "nov-qa-p3-q01",
            question: "Which narrative perspective is this extract written in? Give one piece of evidence.",
            marks: 2,
            hint: "Pronouns first, then: whose thoughts do we see?",
            modelAnswer:
              "It is third person limited: Priya is called ‘she’, and we see only her thoughts and feelings, for example that ‘the heat still surprised her’ and that the sentence she had prepared ‘had vanished’.",
            markScheme: [
              { point: "Identifies third person limited", keywords: ["third person limited", "third-person limited", "close third", "limited"] },
              { point: "Gives evidence: ‘she’ plus access only to Priya’s thoughts", keywords: ["she", "her", "surprised her", "vanished", "only priya", "priya's thoughts", "her thoughts"] },
            ],
            commonError: "Writing ‘third person omniscient’: we never enter the boy’s or the teacher’s minds.",
            guideRef: "narrative-perspective",
          },
          {
            id: "nov-qa-p3-q02",
            extract: "It was not like the heat at home in Leeds, which came in polite, short visits. This heat moved in and stayed.",
            question: "How does the writer use personification to present the heat?",
            marks: 3,
            hint: "What kind of guest pays ‘polite, short visits’? What kind ‘moves in’?",
            modelAnswer:
              "The writer personifies the heat in Leeds as a polite guest who pays ‘short visits’, but Singapore’s heat ‘moved in and stayed’ like an uninvited lodger who will not leave. The contrast shows how overwhelming and inescapable the new climate feels. It also hints at Priya’s feeling that everything about her new life is bigger and more intrusive than what she knew at home.",
            markScheme: [
              { point: "Identifies personification: heat as a visitor/guest", keywords: ["personification", "personifies", "guest", "visitor", "visit", "human"] },
              { point: "Explains contrast: polite/short vs moved in and stayed (overwhelming)", keywords: ["moved in", "stayed", "overwhelming", "inescapable", "won't leave", "constant", "contrast"] },
              { point: "Links to Priya’s feelings about her new life", keywords: ["priya", "new", "unfamiliar", "homesick", "different", "overwhelmed", "feelings"] },
            ],
            commonError: "Calling it a simile (there is no ‘like’ in ‘moved in and stayed’).",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-qa-p3-q03",
            extract: "Priya held her timetable so tightly that the corner had gone soft and grey under her thumb.",
            question: "What does this detail show about Priya, and why is it more effective than saying ‘Priya was nervous’?",
            marks: 3,
            hint: "Show, don’t tell. What has she been doing for a long time?",
            modelAnswer:
              "It shows that Priya is anxious, gripping the timetable as if it is the only thing she can control. The fact that the corner has gone ‘soft and grey’ suggests she has been clutching it for a long time, so her nerves are lasting, not momentary. It is more effective than ‘nervous’ because the reader infers the feeling from a precise physical action, which feels real and lets us share her tension.",
            markScheme: [
              { point: "Identifies nerves/anxiety", keywords: ["nervous", "anxious", "anxiety", "worried", "tense", "scared"] },
              { point: "‘soft and grey’ suggests prolonged gripping", keywords: ["soft and grey", "long time", "clutching", "gripping", "tightly", "worn"] },
              { point: "Explains show-not-tell / indirect characterisation / reader infers", keywords: ["show", "infer", "indirect", "action", "physical", "not tell", "realistic"] },
            ],
            commonError: "Only saying ‘she is nervous’ without explaining why the method works better.",
            guideRef: "characterisation",
          },
          {
            id: "nov-qa-p3-q04",
            extract: "twenty-six faces turned towards the door at exactly the same moment, like sunflowers following the sun, except that she was not the sun, and nobody looked pleased.",
            question: "Analyse how the writer uses this simile and then twists it.",
            marks: 4,
            hint: "What do sunflowers suggest? Then what does ‘except that’ do?",
            modelAnswer:
              "The simile ‘like sunflowers following the sun’ captures how every face turns at once, which makes the class seem uniform and Priya the centre of attention. Sunflowers usually connote warmth and happiness, so the image briefly seems welcoming. The writer then undercuts it with ‘except that she was not the sun, and nobody looked pleased’, which reverses the positive connotations. This twist mirrors Priya’s disappointment and self-consciousness, and the dry, wry tone shows us her sharp, nervous awareness of being judged.",
            markScheme: [
              { point: "Identifies simile and the simultaneous turning (all eyes on her)", keywords: ["simile", "sunflowers", "all at once", "same moment", "attention", "stare", "everyone"] },
              { point: "Explains positive connotations of sunflowers/sun", keywords: ["warm", "happy", "bright", "welcoming", "positive", "cheerful"] },
              { point: "Explains the twist/undercutting: ‘except that’", keywords: ["except", "twist", "undercut", "reverses", "contrast", "but"] },
              { point: "Links to Priya’s feelings: self-conscious, judged, disappointed", keywords: ["self-conscious", "judged", "unwelcome", "disappointed", "awkward", "embarrassed", "exposed"] },
            ],
            commonError: "Explaining the simile but ignoring the ‘except that’ twist, which is the most interesting part.",
            guideRef: "characterisation",
          },
          {
            id: "nov-qa-p3-q05",
            extract: "“You must be the new girl,” said the teacher, smiling with all of her teeth.",
            question: "Give two different interpretations of ‘smiling with all of her teeth’.",
            marks: 3,
            hint: "Is it a warm smile, or could it be something else? Remember, we see through Priya’s eyes.",
            modelAnswer:
              "One interpretation is that the teacher is being enthusiastic and very welcoming, smiling widely to make Priya comfortable. Another is that the smile seems forced or even predatory: showing ‘all of her teeth’ can sound fake or slightly threatening, like an animal. Because the extract is in third person limited, the odd phrasing may tell us more about Priya’s nervous perception than about the teacher herself.",
            markScheme: [
              { point: "Interpretation 1: warm, enthusiastic, welcoming", keywords: ["welcoming", "friendly", "enthusiastic", "warm", "kind", "wide smile"] },
              { point: "Interpretation 2: forced, fake or threatening", keywords: ["forced", "fake", "false", "threatening", "predator", "animal", "artificial"] },
              { point: "Links ambiguity to Priya’s viewpoint / nervous perception", keywords: ["priya's", "her view", "perception", "nervous", "limited", "through her eyes", "perspective"] },
            ],
            commonError: "Giving one interpretation twice in different words.",
            guideRef: "narrative-perspective",
          },
          {
            id: "nov-qa-p3-q06",
            extract: "Room 8C. She checked it again. Room 8C.",
            question: "What is the effect of the repetition and the short sentences here?",
            marks: 2,
            hint: "Why would someone check something they already know?",
            modelAnswer:
              "The repetition of ‘Room 8C’ shows Priya anxiously double-checking, revealing her fear of making a mistake. The short sentences slow the pace and mimic her nervous, jerky thoughts, building tension before she opens the door.",
            markScheme: [
              { point: "Repetition shows anxiety / double-checking", keywords: ["repetition", "checking", "double-check", "anxious", "nervous", "mistake"] },
              { point: "Short sentences slow pace / mimic thoughts / build tension", keywords: ["short sentences", "pace", "slow", "tension", "thoughts", "jerky", "pause"] },
            ],
            commonError: "Saying the repetition is ‘for emphasis’ without saying what it emphasises.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-qa-p3-q07",
            extract: "He did not look up from his drawing. He did not smile. But he moved his pencil case to make room, and he kept it there, and that was something.",
            question: "How does the writer characterise the boy? Focus on how his actions are presented.",
            marks: 4,
            hint: "He never speaks. Notice the repeated ‘He did not…’ and then ‘But…’.",
            modelAnswer:
              "The boy is characterised entirely through actions, since he never speaks. The repeated structure ‘He did not look up… He did not smile’ makes him seem shy, awkward or unfriendly at first. The conjunction ‘But’ then turns the paragraph: moving his pencil case is a small, quiet act of kindness. The polysyndeton in ‘and he kept it there, and that was something’ slows down to value the gesture, suggesting that his kindness is real precisely because it is understated, and hinting that he may become Priya’s friend.",
            markScheme: [
              { point: "Characterised through actions, not speech", keywords: ["actions", "does not speak", "doesn't speak", "silent", "what he does", "never speaks"] },
              { point: "Repeated ‘He did not…’ suggests shy/awkward/unfriendly", keywords: ["did not", "repetition", "shy", "awkward", "unfriendly", "distant", "quiet"] },
              { point: "‘But’ marks a turn to a small kindness", keywords: ["but", "turn", "kindness", "kind", "makes room", "gesture", "pencil case"] },
              { point: "Effect: understated kindness / hint of friendship", keywords: ["understated", "friend", "friendship", "hope", "something", "genuine", "quiet kindness"] },
            ],
            commonError: "Concluding the boy is simply rude, missing the turn at ‘But’.",
            guideRef: "characterisation",
          },
          {
            id: "nov-qa-p3-q08",
            extract: "Outside, the rain began all at once, hammering on the covered walkway as if someone had been waiting for permission.",
            question: "How might the final sentence reflect Priya’s feelings? Explain using the idea of pathetic fallacy.",
            marks: 3,
            hint: "When does the rain start? What has just happened?",
            modelAnswer:
              "This is pathetic fallacy because the weather seems to reflect Priya’s mood. The rain begins ‘all at once’ just as she sits down, as if tension that had been building is finally released. The simile ‘as if someone had been waiting for permission’ suggests relief, as though the world, like Priya, can finally let go now that she has found a place to sit.",
            markScheme: [
              { point: "Identifies pathetic fallacy: weather reflects mood", keywords: ["pathetic fallacy", "weather", "reflects", "mirrors", "mood"] },
              { point: "Timing: rain begins as she sits / release of tension", keywords: ["sits down", "release", "tension", "all at once", "finally", "timing"] },
              { point: "Interprets feeling: relief / letting go", keywords: ["relief", "relieved", "let go", "permission", "relax", "calm", "safe"] },
            ],
            commonError: "Reading the rain only as sadness without linking it to what has just happened.",
            guideRef: "setting-atmosphere",
          },
          {
            id: "nov-qa-p3-q09",
            question:
              "Write ONE sentence that shows (without telling) that Priya feels lonely at lunchtime. Then name the STEAL channel you used and explain why it works.",
            marks: 4,
            hint: "Do not use the word ‘lonely’. Think about what she does or notices.",
            modelAnswer:
              "Priya unwrapped her sandwich slowly, folding the foil into smaller and smaller squares so she would have something to do with her hands while the laughter rolled past her table.\n\nThis uses Actions (from STEAL): her pointless folding shows she has no one to talk to, and the contrast with the ‘laughter’ around her makes the reader infer her loneliness without being told.",
            markScheme: [
              { point: "Sentence avoids the word ‘lonely’ or a direct statement of the feeling", keywords: ["unwrapped", "sat", "watched", "folded", "stared", "pretended", "alone at"] },
              { point: "Uses a concrete physical detail or action", keywords: ["hands", "sandwich", "table", "seat", "phone", "chair", "bag", "foil"] },
              { point: "Names a STEAL channel", keywords: ["actions", "looks", "thoughts", "speech", "effect on others", "steal"] },
              { point: "Explains that the reader infers the feeling", keywords: ["infer", "work out", "show", "without being told", "implies", "suggests"] },
            ],
            commonError: "Writing ‘Priya felt sad and alone’, which tells rather than shows.",
            guideRef: "characterisation",
          },
          {
            id: "nov-qa-p3-q10",
            question:
              "Rewrite the first sentence of the extract in the first person. Then explain one thing the writer would gain and one thing they would lose by narrating in the first person.",
            marks: 3,
            hint: "Change ‘Priya… her’ to ‘I… me’. Then think about intimacy versus distance.",
            modelAnswer:
              "‘I had been in Singapore for nine days, and the heat still surprised me every time the doors slid open.’\n\nGain: first person would bring us even closer to Priya’s private thoughts and voice, making the reader share her nerves more intimately. Loss: the slight distance of third person lets the narrator describe Priya from outside (gripping her timetable until it goes ‘soft and grey’) in a way that would sound odd if she said it about herself.",
            markScheme: [
              { point: "Correct first-person rewrite", keywords: ["i had been", "surprised me", "i had", "my", "me every time"] },
              { point: "Explains a gain: intimacy, closer to thoughts, voice", keywords: ["closer", "intimate", "intimacy", "her voice", "thoughts", "personal", "direct"] },
              { point: "Explains a loss: distance, outside view, narrator’s descriptions", keywords: ["distance", "outside", "lose", "describe her", "observe", "objective", "less"] },
            ],
            commonError: "Giving a gain and a loss that are not actually linked to the change in perspective.",
            guideRef: "narrative-perspective",
          },
          {
            id: "nov-qa-p3-q11",
            question: "How is the extract structured to interest the reader? Think about where it begins, where the focus moves and where it ends.",
            marks: 4,
            hint: "Outside heat → corridor → doorway → classroom → one small gesture → outside rain.",
            modelAnswer:
              "The extract begins with a wide focus on Singapore’s heat, establishing setting and Priya’s sense of being an outsider. The focus then narrows step by step: the corridor, the door of Room 8C, the classroom of faces, and finally one boy’s small gesture with a pencil case. This zooming-in builds tension and then releases it in a tiny moment of kindness. The extract ends by moving back outside to the sudden rain, which frames the scene with weather at the beginning and end and suggests a shift in Priya’s mood from pressure to relief.",
            markScheme: [
              { point: "Opening: wide focus on heat/setting", keywords: ["begins", "opens", "heat", "setting", "wide", "singapore"] },
              { point: "Focus narrows / zooms in through the extract", keywords: ["narrows", "zooms", "zoom", "focus", "moves", "closer", "step by step"] },
              { point: "Turning point / tension released in the boy’s gesture", keywords: ["boy", "gesture", "pencil case", "turning point", "kindness", "release"] },
              { point: "Ending: returns outside to rain, framing / mood shift", keywords: ["ends", "rain", "outside", "frames", "framing", "relief", "returns"] },
            ],
            commonError: "Retelling what happens in order instead of explaining why the writer arranged it that way.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-qa-p3-q12",
            question: "How does the writer present Priya’s feelings about her new school? Write a developed answer.",
            marks: 6,
            hint: "Plan: overwhelmed (heat) → anxious (timetable, Room 8C) → exposed (sunflowers, teacher) → relief (boy, rain).",
            modelAnswer:
              "The writer presents Priya as overwhelmed by her new life. The heat ‘moved in and stayed’, a personification that makes Singapore feel intrusive compared with the ‘polite, short visits’ of home, suggesting she feels unsettled and homesick.\n\nHer anxiety is shown rather than told. She grips her timetable until ‘the corner had gone soft and grey’, and the short, repeated ‘Room 8C… Room 8C’ mimics her nervous double-checking.\n\nInside the classroom, she feels exposed. The class turns ‘like sunflowers following the sun’, but the writer twists the simile with ‘nobody looked pleased’, revealing her fear of being judged; even the teacher’s smile ‘with all of her teeth’ seems unsettling through Priya’s eyes. Her prepared sentence has ‘vanished’, showing how nerves have silenced her.\n\nFinally, the mood shifts to relief. The boy’s wordless kindness, ‘and that was something’, gives her a foothold, and the rain that begins ‘as if someone had been waiting for permission’ acts as pathetic fallacy for tension finally released. The writer therefore traces a journey from anxiety to the first small sign of belonging.",
            markScheme: [
              { point: "Overall argument about her feelings (overwhelmed/anxious → relieved)", keywords: ["overwhelmed", "anxious", "journey", "shift", "feelings", "presents priya"] },
              { point: "Analyses the heat personification / homesickness", keywords: ["heat", "moved in", "personification", "homesick", "leeds", "polite"] },
              { point: "Analyses show-not-tell anxiety: timetable or Room 8C", keywords: ["timetable", "soft and grey", "room 8c", "repetition", "checked", "nervous"] },
              { point: "Analyses the sunflower simile or teacher’s smile (feeling exposed/judged)", keywords: ["sunflowers", "simile", "teeth", "judged", "exposed", "nobody looked pleased"] },
              { point: "Analyses the boy’s gesture and/or rain as relief", keywords: ["boy", "pencil case", "rain", "pathetic fallacy", "relief", "permission"] },
              { point: "Comments on perspective or structure (third person limited, mood shift)", keywords: ["third person", "limited", "structure", "through her eyes", "ends", "shift"] },
            ],
            commonError: "Listing techniques in the order they appear without building an argument about how her feelings change.",
            guideRef: "characterisation",
          },
        ],
      },
      {
        id: "nov-qa-p4",
        title: "Written Paper 4",
        questions: [
          {
            id: "nov-qa-p4-q01",
            question: "What does ‘context’ mean when writing about a novel? Name and explain three kinds of context.",
            marks: 3,
            hint: "History/society, the writer’s life, and other books.",
            modelAnswer:
              "Context is the background that helps explain a text and the writer’s choices. Historical and social context is the world the novel was written in, such as poverty in the 1840s for A Christmas Carol. Biographical context is the writer’s own life, such as Dickens’s experience of hardship as a child. Literary context is the tradition a book belongs to, such as the Gothic features in Jane Eyre’s red-room.",
            markScheme: [
              { point: "Historical/social context explained", keywords: ["historical", "social", "society", "time period", "history", "when it was written"] },
              { point: "Biographical context explained", keywords: ["biographical", "writer's life", "author's life", "life of", "experience", "biography"] },
              { point: "Literary context explained", keywords: ["literary", "genre", "gothic", "tradition", "other books", "other novels"] },
            ],
            commonError: "Giving three historical facts instead of three different kinds of context.",
            guideRef: "context-whole-novel",
          },
          {
            id: "nov-qa-p4-q02",
            extract:
              "(a) ‘secret, and self-contained, and solitary as an oyster’ (Stave One)\n(b) Scrooge is shown his lonely childhood and the lives of the Cratchits by the spirits (Staves Two to Four)\n(c) ‘as good a friend, as good a master, and as good a man, as the good old city knew’ (Stave Five)",
            question: "Using these three moments, explain how Dickens presents Scrooge’s change across A Christmas Carol.",
            marks: 4,
            hint: "Beginning → turning point → end, then a sentence on why.",
            modelAnswer:
              "At the start, the simile ‘solitary as an oyster’ shows Scrooge shut away from others inside a hard shell. The spirits’ visions are the turning point: seeing his own lonely past and the Cratchits’ struggles forces him to feel sympathy. By Stave Five, the triple repetition of ‘good’ shows his change is complete, reaching every role he has: friend, employer and man. The movement from isolation to connection shows Dickens’s message that anyone can choose generosity.",
            markScheme: [
              { point: "Explains the starting point: isolation (oyster)", keywords: ["oyster", "solitary", "isolated", "alone", "shell", "closed"] },
              { point: "Explains the turning point: spirits’ visions cause change", keywords: ["spirits", "visions", "turning point", "cratchits", "past", "sympathy", "shown"] },
              { point: "Explains the end point: repetition of ‘good’ / generous", keywords: ["good", "repetition", "generous", "friend", "master", "complete"] },
              { point: "Links change to Dickens’s message/purpose", keywords: ["message", "purpose", "dickens wants", "anyone can change", "generosity", "redemption"] },
            ],
            commonError: "Retelling what the spirits show him instead of analysing how the change is presented.",
            guideRef: "character-change",
          },
          {
            id: "nov-qa-p4-q03",
            extract: "“Unjust!—unjust!” said my reason (Jane Eyre, Chapter 2)",
            question:
              "Jane Eyre was published in 1847, when girls were expected to be obedient and grateful. How might readers then and now respond to Jane’s cry of ‘Unjust!’?",
            marks: 3,
            hint: "Consider the repetition and dashes, then compare 1847 readers with readers today.",
            modelAnswer:
              "The repeated exclamation and the dash make Jane’s protest sound urgent and passionate, as her sense of injustice bursts out. In 1847 some readers may have been shocked that a girl questioned her elders so fiercely, because obedience was expected. Modern readers are more likely to sympathise and admire her, seeing a child standing up to cruelty, which shows how Brontë challenged the expectations of her time.",
            markScheme: [
              { point: "Analyses repetition/exclamation/dash: urgency, passion", keywords: ["repetition", "exclamation", "dash", "urgent", "passionate", "repeated"] },
              { point: "Explains a likely 1847 response: shocked, disapproving", keywords: ["shocked", "disapprove", "1847", "victorian", "disobedient", "improper", "expected"] },
              { point: "Explains a modern response: sympathy, admiration, Brontë challenging norms", keywords: ["sympathy", "admire", "modern", "today", "challenge", "brave", "stand up"] },
            ],
            commonError: "Giving only one audience’s response when the question asks about readers ‘then and now’.",
            guideRef: "context-whole-novel",
          },
          {
            id: "nov-qa-p4-q04",
            question:
              "Write a thesis statement for the essay question ‘How does Dickens present the importance of generosity in A Christmas Carol?’ Then explain what makes it a strong thesis.",
            marks: 4,
            hint: "A thesis argues; it does not just announce the topic.",
            modelAnswer:
              "Thesis: ‘Dickens presents generosity as the force that saves Scrooge, transforming him from a frozen, isolated miser into a warm member of society, to persuade his Victorian readers that caring for the poor benefits giver and receiver alike.’\n\nIt is strong because it makes an arguable claim rather than restating the question, it covers the whole novella (from miser to changed man), it names a method (the cold and warmth imagery) and it states Dickens’s purpose.",
            markScheme: [
              { point: "Thesis makes an arguable claim, not just the topic", keywords: ["presents generosity as", "argues", "suggests that", "shows that", "claim", "argument"] },
              { point: "Covers development across the novella", keywords: ["from", "transform", "change", "whole", "beginning", "end"] },
              { point: "Refers to a method or image", keywords: ["imagery", "cold", "warmth", "structure", "character arc", "method", "symbol"] },
              { point: "States purpose or message", keywords: ["purpose", "persuade", "message", "readers", "victorian", "poor"] },
            ],
            commonError: "Writing ‘In this essay I will talk about generosity’, which announces rather than argues.",
            guideRef: "context-whole-novel",
          },
          {
            id: "nov-qa-p4-q05",
            question: "Explain the difference between plot and structure, and why a writer’s structural choices matter. Give an example.",
            marks: 4,
            hint: "WHAT happens versus HOW and in what ORDER it is arranged.",
            modelAnswer:
              "Plot is what happens in the story: the sequence of events. Structure is how the writer arranges those events, including order, pace and where chapters begin and end. Structural choices matter because the same events can feel completely different depending on their arrangement: they control tension, surprise and what the reader knows when. For example, Private Peaceful moves between the present night and Tommo’s memories, so the reader senses a dreadful ending approaching while learning the past, which creates suspense and sorrow.",
            markScheme: [
              { point: "Defines plot as what happens / events", keywords: ["what happens", "events", "sequence", "storyline", "story"] },
              { point: "Defines structure as arrangement / order / pace", keywords: ["arrange", "arrangement", "order", "pace", "how the story", "chapters"] },
              { point: "Explains why structure matters: tension, surprise, what reader knows", keywords: ["tension", "suspense", "surprise", "reader knows", "effect", "controls"] },
              { point: "Gives a valid example", keywords: ["private peaceful", "holes", "of mice and men", "flashback", "cliffhanger", "circular", "for example"] },
            ],
            commonError: "Using ‘plot’ and ‘structure’ as if they mean the same thing.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-qa-p4-q06",
            question: "Describe how tension usually changes across a novel, using Freytag’s pyramid. Why is the climax usually not the very last event?",
            marks: 3,
            hint: "Name the stages, then think about what readers need after the peak.",
            modelAnswer:
              "Tension starts low in the exposition, builds through the rising action as conflicts grow, and peaks at the climax, the turning point. It then eases in the falling action and settles in the resolution. The climax is not usually the last event because readers need to see the consequences of the turning point and how characters have changed; the falling action and resolution tie up loose ends and show the meaning of what happened.",
            markScheme: [
              { point: "Names the stages in order", keywords: ["exposition", "rising action", "climax", "falling action", "resolution"] },
              { point: "Describes tension rising to a peak then falling", keywords: ["builds", "rises", "peak", "highest", "falls", "eases"] },
              { point: "Explains why the climax is not last: consequences, change, loose ends", keywords: ["consequences", "loose ends", "changed", "aftermath", "resolve", "meaning"] },
            ],
            commonError: "Saying the climax is the ending, or listing stages without describing tension.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-qa-p4-q07",
            question:
              "Compare the narrators of Great Expectations (the adult Pip, looking back) and A Christmas Carol (an all-knowing, chatty third-person narrator). How does each affect the reader?",
            marks: 4,
            hint: "Inside one mind versus above everyone; memory versus judgement.",
            modelAnswer:
              "Great Expectations uses a retrospective first-person narrator, so we experience Pip’s fear from inside while hearing the adult’s wry, sympathetic voice; this creates intimacy and a double perspective. However, we only know what Pip knew, so mysteries remain. A Christmas Carol’s omniscient narrator stands above the story, judging Scrooge openly (‘old sinner!’) and chatting to the reader; this creates a storytelling, moral tone and guides our opinions. The first draws us into a character’s experience; the second steers us towards the writer’s message.",
            markScheme: [
              { point: "Pip: retrospective first person, intimacy / dual voice", keywords: ["first person", "retrospective", "intimate", "inside", "adult", "looking back", "dual"] },
              { point: "Pip: limited knowledge, mysteries remain", keywords: ["limited", "only knows", "mystery", "doesn't know", "does not know", "restricted"] },
              { point: "Carol: omniscient, judges and chats to reader", keywords: ["omniscient", "all-knowing", "judges", "chatty", "comments", "old sinner", "addresses"] },
              { point: "Comparative conclusion: experience vs guidance towards message", keywords: ["whereas", "however", "compared", "both", "message", "on the other hand", "while"] },
            ],
            commonError: "Describing each narrator separately with no comparison words.",
            guideRef: "narrative-perspective",
          },
          {
            id: "nov-qa-p4-q08",
            question:
              "Choose ONE of these novels: Wonder (multiple narrators), Holes (interwoven timelines) or Of Mice and Men (circular structure). Explain how its structure affects the reader.",
            marks: 3,
            hint: "Name the structure, give a concrete detail, explain the effect.",
            modelAnswer:
              "Wonder is told by several narrators: Auggie and people around him, such as his sister Via and his friend Jack. This structure lets the reader see Auggie both from the inside and through others’ eyes, so we understand why people react to him as they do. It builds empathy, because we learn that each character has struggles of their own, not just Auggie.",
            markScheme: [
              { point: "Identifies the structural feature correctly", keywords: ["multiple narrators", "narrators", "timelines", "past and present", "circular", "begins and ends"] },
              { point: "Gives a concrete detail from the novel", keywords: ["auggie", "via", "jack", "stanley", "camp green lake", "pool", "salinas", "kate barlow"] },
              { point: "Explains the effect on the reader", keywords: ["empathy", "understand", "different sides", "connect", "trapped", "suspense", "effect"] },
            ],
            commonError: "Retelling the plot of the chosen novel without explaining the structure’s effect.",
            guideRef: "plot-structure",
          },
          {
            id: "nov-qa-p4-q09",
            extract:
              "A: ‘Dickens’s simile “solitary as an oyster” suggests Scrooge has sealed himself off from human contact.’\nB: ‘In Stave One, Scrooge refuses to give money to charity and is rude to his nephew.’\nC: ‘The verb “trampled” makes Hyde seem animal-like and brutal.’\nD: ‘Brontë’s repetition of red mirrors Jane’s anger.’",
            question: "Which sentence is the weakest piece of analysis? Explain why, then rewrite it to make it analytical.",
            marks: 4,
            hint: "Which one could appear in a plot summary?",
            modelAnswer:
              "B is the weakest because it only retells events: it has no quotation and no explanation of a method or effect. Rewrite: ‘Dickens shows Scrooge’s meanness through his cold questions about the poor, such as “Are there no prisons?”, which make his attitude sound heartless and force the reader to reject it.’",
            markScheme: [
              { point: "Identifies B as weakest", keywords: ["b is", "sentence b", "option b", "b,", "b because"] },
              { point: "Explains why: summary, no evidence or analysis", keywords: ["summary", "retells", "plot", "no quotation", "no analysis", "no evidence", "describes"] },
              { point: "Rewrite includes embedded evidence", keywords: ["prisons", "workhouses", "humbug", "quotation", "such as", "for example"] },
              { point: "Rewrite explains an effect or method", keywords: ["suggests", "makes", "shows", "heartless", "effect", "reader"] },
            ],
            commonError: "Choosing D because it is short; it is brief but it does make an analytical point.",
            guideRef: "reading-like-a-writer",
          },
          {
            id: "nov-qa-p4-q10",
            extract: "a blind forehead of discoloured wall (Strange Case of Dr Jekyll and Mr Hyde, Chapter 1)",
            question: "Explain how a setting or object can work as a symbol, using Stevenson’s description of the building with the door as your example.",
            marks: 3,
            hint: "Symbol = concrete thing + abstract idea.",
            modelAnswer:
              "A symbol is a concrete thing that stands for an abstract idea. Stevenson personifies the building as a face with a ‘blind forehead’: it has no windows, so no one can see in. The building therefore symbolises secrecy and the hidden, shameful side of a respectable person’s life, which is exactly what the novella goes on to explore through Jekyll and Hyde.",
            markScheme: [
              { point: "Defines symbol: concrete thing representing an abstract idea", keywords: ["stands for", "represents", "symbolises", "abstract", "concrete", "idea"] },
              { point: "Analyses ‘blind forehead’: no windows, cannot see in", keywords: ["blind", "forehead", "no windows", "cannot see", "can't see", "face", "personification"] },
              { point: "Links to secrecy / hidden self / duality", keywords: ["secret", "secrecy", "hidden", "duality", "jekyll", "respectable", "shameful"] },
            ],
            commonError: "Describing the building without saying what it stands for.",
            guideRef: "themes-motifs-symbols",
          },
          {
            id: "nov-qa-p4-q11",
            question:
              "How does Dickens present change in Scrooge across A Christmas Carol? Write a developed whole-novel answer using evidence from the beginning, turning point and end.",
            marks: 6,
            hint: "Thesis → Stave One evidence → the spirits → Stave Five evidence → method across the novella → purpose and context.",
            modelAnswer:
              "Dickens presents Scrooge’s change as a complete thaw, from a frozen, isolated miser to a warm-hearted man, to persuade readers that it is never too late to choose generosity.\n\nAt the beginning, Scrooge is ‘solitary as an oyster’ and ‘He carried his own low temperature always about with him’. The extended metaphor of cold makes his meanness seem physical and permanent; he even ‘iced his office in the dog-days’.\n\nThe turning point comes through the spirits, who make Scrooge witness his own lonely childhood and the struggles of the Cratchit family. Structurally, Dickens moves him through past, present and future, so his change is earned step by step rather than sudden.\n\nBy Stave Five, Dickens mirrors his opening: instead of a list of greedy words, he repeats ‘good’ in ‘as good a friend, as good a master, and as good a man’. The motif of cold has given way to warmth, showing a total transformation.\n\nWriting in the 1840s, when many poor families faced the workhouse, Dickens uses Scrooge’s journey to argue that the comfortable classes can and should change. The arc is therefore not only a personal story but a moral lesson for society.",
            markScheme: [
              { point: "Clear thesis about the nature of the change", keywords: ["dickens presents", "transformation", "thaw", "change", "from", "thesis"] },
              { point: "Evidence and analysis from the beginning (oyster, cold)", keywords: ["oyster", "solitary", "low temperature", "cold", "iced", "flint"] },
              { point: "Explains the turning point: spirits’ visions", keywords: ["spirits", "ghost", "past", "cratchit", "visions", "turning point"] },
              { point: "Evidence and analysis from the end (‘good’ repeated)", keywords: ["good", "stave five", "friend", "master", "generous", "repetition"] },
              { point: "Comments on structure or motif across the novella", keywords: ["motif", "structure", "mirrors", "warmth", "extended metaphor", "staves"] },
              { point: "Links to context and purpose", keywords: ["victorian", "workhouse", "poor", "purpose", "persuade", "1840s", "society"] },
            ],
            commonError: "Spending most of the answer on Stave One, so the change itself is barely shown.",
            guideRef: "context-whole-novel",
          },
          {
            id: "nov-qa-p4-q12",
            question:
              "‘In a great novel, the setting is as important as any character.’ How far do you agree? Refer to at least two of the novels or extracts you have studied.",
            marks: 5,
            hint: "Give a judgement, two examples of setting doing important work, a counter-argument and a conclusion.",
            modelAnswer:
              "I largely agree, because in the best novels setting does far more than provide a background. In Jane Eyre the red-room, with its ‘deep red damask’ and chair ‘like a pale throne’, mirrors Jane’s anger and makes her punishment feel like a trial, so the room almost acts upon her like a character. In The Secret Garden, the locked garden is central to the plot and to the theme: as it comes back to life, so does Mary.\n\nHowever, settings only matter because of the characters who experience them. The red-room is frightening because we see it through a terrified child; without Jane, it is just a bedroom. Characters also drive the plot through their choices, as Scrooge’s decision to change shows.\n\nOverall, setting can be as important as a character when it shapes mood, mirrors feelings and carries themes, but it gains its power from the people within it.",
            markScheme: [
              { point: "States a clear judgement (how far they agree)", keywords: ["agree", "disagree", "largely", "partly", "to some extent", "i think"] },
              { point: "Example 1: setting mirrors character or creates atmosphere, with evidence", keywords: ["red-room", "red room", "red", "throne", "churchyard", "marshes", "streets"] },
              { point: "Example 2: setting as symbol or driving theme/plot", keywords: ["garden", "symbol", "theme", "door", "pool", "camp green lake", "locked"] },
              { point: "Counter-argument: characters drive plot / setting depends on characters", keywords: ["however", "on the other hand", "characters drive", "choices", "depends", "without"] },
              { point: "Balanced conclusion", keywords: ["overall", "in conclusion", "ultimately", "therefore", "to conclude"] },
            ],
            commonError: "Agreeing completely and never considering the other side, which ‘How far’ questions require.",
            guideRef: "setting-atmosphere",
          },
        ],
      },
    ],
  },
};
