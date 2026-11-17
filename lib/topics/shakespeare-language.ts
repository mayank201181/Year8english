import type { Topic } from "../types";

const JAQUES: string =
  "All the world's a stage,\nAnd all the men and women merely players;\nThey have their exits and their entrances,\nAnd one man in his time plays many parts,\nHis acts being seven ages. At first the infant,\nMewling and puking in the nurse's arms.\nThen the whining schoolboy, with his satchel\nAnd shining morning face, creeping like snail\nUnwillingly to school. And then the lover,\nSighing like furnace, with a woeful ballad\nMade to his mistress' eyebrow. Then a soldier,\nFull of strange oaths and bearded like the pard,\nJealous in honour, sudden and quick in quarrel,\nSeeking the bubble reputation\nEven in the cannon's mouth. And then the justice,\nIn fair round belly with good capon lined,\nWith eyes severe and beard of formal cut,\nFull of wise saws and modern instances;\nAnd so he plays his part. The sixth age shifts\nInto the lean and slippered pantaloon,\nWith spectacles on nose and pouch on side;\nHis youthful hose, well saved, a world too wide\nFor his shrunk shank, and his big manly voice,\nTurning again toward childish treble, pipes\nAnd whistles in his sound. Last scene of all,\nThat ends this strange eventful history,\nIs second childishness and mere oblivion,\nSans teeth, sans eyes, sans taste, sans everything.";

const JAQUES_NOTE: string =
  "Spoken by the melancholy lord Jaques to Duke Senior and his followers in the Forest of Arden. Glossary: mewling = whimpering; pard = leopard; sudden = rash, hot-headed; capon = a fattened chicken (a bribe was often a gift of food); saws = sayings; modern instances = everyday, commonplace examples; pantaloon = a foolish old man from Italian comedy; hose = stockings/breeches; shank = leg; treble = high voice; sans = without.";

const PROLOGUE: string =
  "Two households, both alike in dignity,\nIn fair Verona, where we lay our scene,\nFrom ancient grudge break to new mutiny,\nWhere civil blood makes civil hands unclean.\nFrom forth the fatal loins of these two foes\nA pair of star-cross'd lovers take their life;\nWhose misadventured piteous overthrows\nDoth with their death bury their parents' strife.\nThe fearful passage of their death-mark'd love,\nAnd the continuance of their parents' rage,\nWhich, but their children's end, nought could remove,\nIs now the two hours' traffic of our stage;\nThe which if you with patient ears attend,\nWhat here shall miss, our toil shall strive to mend.";

const PROLOGUE_NOTE: string =
  "Spoken by the Chorus before Act 1 begins. Glossary: dignity = rank, status; mutiny = violence, riot; civil = belonging to citizens (and also 'polite'); loins = bodies (where children come from); star-cross'd = thwarted by the stars, ill-fated; misadventured = unlucky; overthrows = ruin, downfall; death-mark'd = marked out for death; but = except; nought = nothing; traffic = business; miss = be missing, fall short.";

const SONNET18: string =
  "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate:\nRough winds do shake the darling buds of May,\nAnd summer's lease hath all too short a date;\nSometime too hot the eye of heaven shines,\nAnd often is his gold complexion dimm'd;\nAnd every fair from fair sometime declines,\nBy chance or nature's changing course untrimm'd;\nBut thy eternal summer shall not fade,\nNor lose possession of that fair thou ow'st;\nNor shall Death brag thou wander'st in his shade,\nWhen in eternal lines to time thou grow'st:\nSo long as men can breathe or eyes can see,\nSo long lives this, and this gives life to thee.";

const SONNET18_NOTE: string =
  "Published in 1609. Glossary: temperate = mild, even-tempered; lease = a rental agreement with an end date; date = duration; the eye of heaven = the sun; fair (noun) = beautiful thing, beauty; untrimm'd = stripped of its decoration; thou ow'st = you own; eternal lines = lines of poetry that will last for ever.";

const HAMLET: string =
  "To be, or not to be, that is the question:\nWhether 'tis nobler in the mind to suffer\nThe slings and arrows of outrageous fortune,\nOr to take arms against a sea of troubles,\nAnd by opposing end them. To die, to sleep—\nNo more; and by a sleep to say we end\nThe heart-ache and the thousand natural shocks\nThat flesh is heir to: 'tis a consummation\nDevoutly to be wish'd. To die, to sleep;\nTo sleep, perchance to dream—ay, there's the rub:\nFor in that sleep of death what dreams may come,\nWhen we have shuffled off this mortal coil,\nMust give us pause.";

const HAMLET_NOTE: string =
  "Hamlet, Act 3 Scene 1. Hamlet thinks he is alone (though Claudius and Polonius are secretly watching). Glossary: slings = catapults; outrageous = violent, savage; consummation = ending, completion; devoutly = sincerely, prayerfully; perchance = perhaps; rub = obstacle (from the game of bowls, where a 'rub' knocks the ball off course); mortal coil = the turmoil and fuss of mortal life (and perhaps the body wrapped round the soul).";

const CALIBAN: string =
  "CALIBAN\nBe not afeard; the isle is full of noises,\nSounds and sweet airs, that give delight and hurt not.\nSometimes a thousand twangling instruments\nWill hum about mine ears; and sometime voices,\nThat, if I then had waked after long sleep,\nWill make me sleep again: and then, in dreaming,\nThe clouds methought would open and show riches\nReady to drop upon me; that, when I waked,\nI cried to dream again.\n\nSTEPHANO\nThis will prove a brave kingdom to me, where I shall have my music for nothing.";

export const shakespeareLanguage: Topic = {
  id: "shakespeare-language",
  title: "Shakespeare's World & Language",
  subject: "Shakespeare",
  icon: "🎭",
  summary: "The Globe, blank verse, iambic pentameter, soliloquies and 'thou'.",
  intro:
    "Before you can analyse The Tempest, Hamlet or Romeo and Juliet, you need the toolkit every Shakespeare expert carries: who he wrote for, how his theatre worked, and how his language ticks. In this topic you will learn to hear the heartbeat of iambic pentameter, notice when a character drops from verse into prose, decode 'thou' and 'wherefore', and read any extract by paraphrasing first and analysing second. Master this and every Shakespeare lesson this year gets easier.",

  guide: [
    {
      id: "life-and-times",
      heading: "Shakespeare's life and times: Stratford, London and two monarchs",
      discovery: {
        problem:
          "Macbeth was first performed around 1606, three years after a Scottish king, James VI, also became King of England. The play is set in Scotland, is full of witches, and shows the noble Scottish lord Banquo as the ancestor of a long line of future kings. Before you read on, make a guess: why might Shakespeare have chosen THIS story at THIS moment?",
        idea:
          "James I was the company's royal patron, he was fascinated by witchcraft (he wrote a book about it), and he claimed Banquo as his ancestor. Macbeth flatters the king who paid for Shakespeare's company. Context is not trivia: it explains choices inside the play.",
      },
      body:
        "**William Shakespeare** was baptised in **Stratford-upon-Avon**, a busy market town in Warwickshire, on 26 April **1564**. His father, John, was a glove-maker who became a town official; his mother, Mary Arden, came from a farming family. He probably attended the local grammar school, where boys spent long days learning Latin, reading Roman poets such as Ovid and even acting out Latin plays: excellent training for a future playwright.\n\nIn 1582, aged 18, he married **Anne Hathaway**, who was 26. They had three children: Susanna, and twins **Hamnet** and Judith. Hamnet died in 1596, aged 11. From 1585 to 1592 there are almost no records of Shakespeare at all; historians call these the **'lost years'**. By 1592 he was in **London** and well enough known as a writer for a jealous rival's pamphlet to sneer at him as an 'upstart crow'.\n\n**Patrons** were essential. A **patron** was a powerful noble or monarch who protected and supported a company of actors; without one, travelling players could be arrested as vagabonds. From 1594 Shakespeare wrote and acted for the **Lord Chamberlain's Men**. When **Elizabeth I** died in 1603, **James VI of Scotland** became **James I of England** and took the company under his own protection: they became **the King's Men**.\n\nContext explains choices inside the plays:\n- Under Elizabeth I (reigned 1558–1603), history plays such as *Henry V* celebrated England's past, but writers had to be careful: an official called the **Master of the Revels** read and licensed every play, and could cut anything politically dangerous.\n- James I was fascinated by witchcraft (he wrote a book on it, *Daemonologie*, 1597) and traced his family back to Banquo, so *Macbeth* (c.1606) flattered the new king.\n- Outbreaks of **plague** regularly closed the London theatres, so companies toured the country or performed at court.\n\nShakespeare became a **shareholder** in his company, grew wealthy, bought New Place, one of the grandest houses in Stratford, and died there on 23 April **1616**. In **1623** two fellow actors, John Heminges and Henry Condell, collected 36 of his plays in the **First Folio**. About half had never been printed before: without the Folio we might have lost *Macbeth*, *Twelfth Night* and *The Tempest* for ever.",
      diagram: `<svg viewBox="0 0 640 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of Shakespeare's life from his birth in 1564 to the First Folio in 1623"><line x1="20" y1="78" x2="620" y2="78" stroke="#64748b" stroke-width="2"/><g font-family="sans-serif" text-anchor="middle"><circle cx="40" cy="78" r="6" fill="#7c3aed"/><text x="40" y="64" font-size="12" font-weight="bold" fill="#4c1d95">1564</text><text x="40" y="30" font-size="11" fill="#1f2937">Born in</text><text x="40" y="44" font-size="11" fill="#1f2937">Stratford</text><circle cx="118" cy="78" r="6" fill="#7c3aed"/><text x="118" y="98" font-size="12" font-weight="bold" fill="#4c1d95">1582</text><text x="118" y="116" font-size="11" fill="#1f2937">Marries Anne</text><text x="118" y="130" font-size="11" fill="#1f2937">Hathaway</text><circle cx="196" cy="78" r="6" fill="#7c3aed"/><text x="196" y="64" font-size="12" font-weight="bold" fill="#4c1d95">1592</text><text x="196" y="30" font-size="11" fill="#1f2937">Writing</text><text x="196" y="44" font-size="11" fill="#1f2937">in London</text><circle cx="274" cy="78" r="6" fill="#7c3aed"/><text x="274" y="98" font-size="12" font-weight="bold" fill="#4c1d95">1594</text><text x="274" y="116" font-size="11" fill="#1f2937">Lord Chamberlain's</text><text x="274" y="130" font-size="11" fill="#1f2937">Men formed</text><circle cx="352" cy="78" r="6" fill="#b45309"/><text x="352" y="64" font-size="12" font-weight="bold" fill="#92400e">1599</text><text x="352" y="30" font-size="11" fill="#1f2937">The Globe</text><text x="352" y="44" font-size="11" fill="#1f2937">is built</text><circle cx="430" cy="78" r="6" fill="#b45309"/><text x="430" y="98" font-size="12" font-weight="bold" fill="#92400e">1603</text><text x="430" y="116" font-size="11" fill="#1f2937">James I: they become</text><text x="430" y="130" font-size="11" fill="#1f2937">the King's Men</text><circle cx="508" cy="78" r="6" fill="#7c3aed"/><text x="508" y="64" font-size="12" font-weight="bold" fill="#4c1d95">1616</text><text x="508" y="30" font-size="11" fill="#1f2937">Dies in</text><text x="508" y="44" font-size="11" fill="#1f2937">Stratford</text><circle cx="586" cy="78" r="6" fill="#15803d"/><text x="586" y="98" font-size="12" font-weight="bold" fill="#14532d">1623</text><text x="586" y="116" font-size="11" fill="#1f2937">First Folio</text><text x="586" y="130" font-size="11" fill="#1f2937">published</text></g></svg>`,
      diagramCaption:
        "Key dates: from Stratford to London, from the Lord Chamberlain's Men to the King's Men, and the First Folio that saved half his plays.",
      keyPoints: [
        "Born 1564 in Stratford-upon-Avon; died 1616; the First Folio (1623) preserved 36 plays.",
        "Companies needed a patron: the Lord Chamberlain's Men became the King's Men under James I in 1603.",
        "Plays were censored by the Master of the Revels, and context (monarch, plague, religion) shaped what was written.",
      ],
      thinkDeeper:
        "Shakespeare's company depended on royal favour, and every play was checked by a censor. Does that mean we should read the plays as royal propaganda? Find one reason to say yes and one reason to say no, using Macbeth or Henry V.",
    },
    {
      id: "the-globe",
      heading: "The Globe: groundlings, boy actors and 'this wooden O'",
      discovery: {
        problem:
          "Imagine you must perform a terrifying night-time murder scene at 2 o'clock on a sunny afternoon, outdoors, with no lights, no curtain and almost no scenery. How would you make the audience believe it is pitch dark?",
        idea:
          "You make the characters SAY it. Macbeth, before the murder, tells us: 'Now o'er the one half-world / Nature seems dead'. With no lighting, the language had to paint the time, place and weather. This 'word scenery' is why Shakespeare's speeches are so full of description.",
      },
      body:
        "In 1599 Shakespeare's company built **the Globe** on **Bankside** in Southwark, on the south bank of the River Thames, just outside the control of the City of London authorities (who disliked theatres as noisy places that spread disease and idleness). They built it partly from the timbers of their old playhouse, The Theatre in Shoreditch, carried across the river after a quarrel with their landlord.\n\nThe Globe was a roughly circular, open-air **amphitheatre**; in *Henry V* the Chorus calls a theatre 'this wooden O'. Around 3,000 people could squeeze in.\n\n- **The yard**: standing room around the stage, open to the sky. Entry cost **one penny**. The people who stood here were called **groundlings**.\n- **The galleries**: three tiers of roofed seating round the edge, costing two pennies (three for a cushion). Wealthy spectators could even pay to sit in the Lords' rooms beside the stage.\n- **The stage**: a **thrust stage** that pushed out into the yard, so the audience surrounded the actors on three sides. This closeness made **asides** and **soliloquies** feel like private conversations with the crowd.\n- **The heavens**: a painted canopy over the stage held up by two great pillars. Gods and spirits could be lowered from it.\n- **The trapdoor**: a hatch in the stage floor for graves, devils and ghosts; in *Hamlet* the Ghost's voice 'cries under the stage'.\n- **The tiring house**: the backstage area where actors changed ('attired'), with doors onto the stage and a balcony above, perfect for Juliet.\n\n**Why this matters for the language.** Performances happened in the afternoon, in **daylight**, with very little scenery. So the words had to create the setting. Critics call this **word scenery**. And because the groundlings were close enough to touch the stage, and could heckle, eat and wander about, Shakespeare mixes soaring poetry with jokes, fights, songs and puns to keep everyone watching.\n\n**Boy actors.** Women were not allowed to act on the English public stage until 1660, so every female role (Juliet, Lady Macbeth, Ophelia, Miranda) was played by a **boy apprentice** whose voice had not yet broken. This adds a twist to comedies such as *Twelfth Night* and *As You Like It*, where a girl disguises herself as a young man: the original audience watched a boy playing a girl playing a boy.\n\nIn 1613 a cannon fired as a special effect during *Henry VIII* set the thatched roof alight and the Globe burned to the ground; it was rebuilt the following year. Today's **Shakespeare's Globe**, a careful reconstruction close to the original site, opened in 1997.",
      diagram: `<svg viewBox="0 0 440 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bird's-eye plan of the Globe Theatre showing the tiring house, thrust stage, pillars, yard and galleries"><g font-family="sans-serif"><circle cx="180" cy="150" r="135" fill="#fde68a" stroke="#92400e" stroke-width="2"/><circle cx="180" cy="150" r="100" fill="#dcfce7" stroke="#15803d"/><rect x="115" y="12" width="130" height="40" rx="4" fill="#78350f"/><text x="180" y="37" font-size="12" text-anchor="middle" fill="#ffffff">Tiring house</text><rect x="125" y="52" width="110" height="80" fill="#d6b48a" stroke="#78350f"/><rect x="164" y="62" width="32" height="18" fill="none" stroke="#78350f" stroke-dasharray="3 2"/><text x="180" y="75" font-size="11" text-anchor="middle" fill="#451a03">trap</text><text x="180" y="102" font-size="12" text-anchor="middle" fill="#451a03">Thrust stage</text><circle cx="138" cy="122" r="5" fill="#451a03"/><circle cx="222" cy="122" r="5" fill="#451a03"/><text x="180" y="126" font-size="11" text-anchor="middle" fill="#451a03">pillars</text><text x="180" y="185" font-size="12" text-anchor="middle" fill="#14532d">Yard: groundlings</text><text x="180" y="201" font-size="11" text-anchor="middle" fill="#14532d">stand for 1 penny</text><line x1="235" y1="62" x2="330" y2="62" stroke="#78350f"/><text x="334" y="60" font-size="12" fill="#78350f">Heavens:</text><text x="334" y="74" font-size="11" fill="#78350f">canopy over stage</text><line x1="305" y1="150" x2="330" y2="150" stroke="#92400e"/><text x="334" y="146" font-size="12" fill="#92400e">Galleries:</text><text x="334" y="161" font-size="11" fill="#92400e">roofed seats,</text><text x="334" y="175" font-size="11" fill="#92400e">2 to 3 pennies</text><text x="180" y="304" font-size="12" text-anchor="middle" fill="#1f2937">Open to the sky: lit only by daylight</text></g></svg>`,
      diagramCaption:
        "A bird's-eye plan of the Globe. The thrust stage puts the actors in the middle of the crowd, which is why asides and soliloquies work so well.",
      keyPoints: [
        "The Globe (1599, Bankside) was an open-air 'wooden O'; groundlings paid a penny to stand in the yard.",
        "Daylight performances with little scenery meant language had to create time, place and mood ('word scenery').",
        "All female roles were played by boy actors until 1660.",
      ],
      thinkDeeper:
        "A groundling paid one penny and stood for up to three hours, close enough to touch the actors. Would that make an audience more or less forgiving than a modern cinema audience? How might it shape the way Shakespeare writes his opening scenes?",
    },
    {
      id: "genres",
      heading: "Comedy, tragedy, history and romance",
      discovery: {
        problem:
          "Here are three play endings. (a) Four couples marry and everyone dances. (b) The stage is covered with bodies and a new ruler takes charge. (c) An old magician forgives the enemies who ruined him, his daughter becomes engaged, and he gives up his magic. Match each ending to a type of play before reading on.",
        idea:
          "(a) is a comedy (As You Like It ends with four marriages), (b) is a tragedy (Hamlet ends exactly like this) and (c) is a romance: the ending of The Tempest, where forgiveness and reunion replace revenge. Endings are the quickest clue to genre.",
      },
      body:
        "A **genre** is a type of story with expected features. When Heminges and Condell printed the First Folio in 1623, they sorted the plays into three groups: **Comedies**, **Histories** and **Tragedies**. Later critics added two more labels.\n\n- **Comedy**: confusion, disguise, mistaken identity, quarrelling lovers and clever wordplay, ending in harmony, usually with one or more **marriages**. 'Comedy' does not have to mean laugh-out-loud: it means the story moves from disorder to order. Examples: *A Midsummer Night's Dream*, *Twelfth Night*, *As You Like It*.\n- **Tragedy**: centres on a **tragic hero**, usually a person of high status, whose **fatal flaw** (the Greek term is *hamartia*), such as ambition, indecision, jealousy or rashness, leads to their downfall and death. The audience feels pity and fear. Examples: *Romeo and Juliet*, *Hamlet*, *Macbeth*, *Othello*, *King Lear*.\n- **History**: dramatises the lives of English kings and their wars, e.g. *Richard III*, *Henry V*. These plays explore power, rebellion and what makes a good ruler.\n- **Romance** (a later critics' label): the late plays *Pericles*, *Cymbeline*, *The Winter's Tale* and *The Tempest*. They blend tragedy and comedy: families are separated by shipwreck or exile for years, magic and the supernatural appear, and the ending brings **forgiveness and reunion** rather than death. (The First Folio actually printed *The Tempest* first, among the comedies.)\n- **Problem plays** (a label invented in the 1890s): *Measure for Measure*, *All's Well That Ends Well* and *Troilus and Cressida*, plays whose 'happy' endings leave the audience uneasy.\n\n**Genre is a set of expectations, and Shakespeare loves to bend them.** *Romeo and Juliet* begins like a comedy, with joking servants, a masked party and love at first sight, then lurches into tragedy in Act 3 when Mercutio is killed. *Hamlet* is a **revenge tragedy**, a popular Elizabethan genre, yet its hero spends most of the play *not* taking revenge. Spotting how a play follows or breaks its genre is a high-level analytical move.",
      keyPoints: [
        "Comedy moves from confusion to harmony and usually ends in marriage.",
        "Tragedy shows a high-status hero destroyed by a fatal flaw (hamartia).",
        "Romances (e.g. The Tempest) end in forgiveness and reunion; histories dramatise English kings.",
      ],
      thinkDeeper:
        "Romeo and Juliet has jokes, a party and a secret wedding in its first half. Is it a comedy that goes wrong, or a tragedy from the very first line? Use the Prologue to support your answer.",
    },
    {
      id: "verse-prose-rhyme",
      heading: "Verse, prose and rhyming couplets: who speaks what, and why switches matter",
      discovery: {
        problem:
          "Read the passage below aloud: Caliban, the 'monster' servant, speaks first, then the drunken butler Stephano replies. Look at how each one sits on the page and listen to how each one sounds. Which is poetry and which is ordinary speech? Which speaker seems more sensitive and imaginative?",
        idea:
          "Caliban speaks in verse: capital letters at the start of each line, a regular rhythm, rich images of music and dreams. Stephano, a supposedly 'civilised' European, answers in flat prose and only thinks about getting free music. Shakespeare uses the form itself to make us question who the real 'savage' is.",
      },
      passage: {
        id: "caliban-isle",
        title: "'Be not afeard': Caliban and Stephano",
        source: "William Shakespeare, The Tempest (c.1611), Act 3 Scene 2",
        text: CALIBAN,
        note: "afeard = afraid; airs = tunes; twangling = twanging, jangling; methought = it seemed to me; brave = splendid.",
      },
      body:
        "Shakespeare writes in three modes, and switching between them sends a signal to the audience.\n\n**Blank verse** is **unrhymed iambic pentameter**: lines of ten syllables with a da-DUM rhythm (see the next section). It is the default for noble characters, serious matters, love and powerful emotion. You can spot verse on the page because each line begins with a capital letter and the lines stop before the right-hand margin.\n\n**Prose** is ordinary language with no fixed rhythm, running right across the page. Shakespeare often uses it for:\n- lower-status characters: servants, the drunken Porter in *Macbeth*, the Gravediggers in *Hamlet*, Stephano and Trinculo in *The Tempest*\n- comedy, banter and jokes\n- letters and documents read aloud\n- **madness or breakdown**: Lady Macbeth's sleepwalking scene ('Out, damned spot! out, I say!') is in prose, because her controlled, commanding mind has collapsed\n- pretended madness: Hamlet switches to prose with Polonius when putting on his 'antic disposition'\n\n**Rhyming couplets** are two consecutive lines that rhyme. Shakespeare uses them to:\n- **end a scene** with a satisfying click (vital in a theatre with no curtain): 'The play's the thing / Wherein I'll catch the conscience of the king.'\n- sum up a wise point, like a proverb\n- mark the **supernatural**: witches, fairies and spirits often chant in rhyme, frequently in shorter lines\n- show lovers in harmony: Romeo and Juliet's first conversation (1.5) forms a shared sonnet\n\n**Status is the rule of thumb, but the switches are where the marks are.** The 'monster' Caliban speaks some of the most beautiful verse in *The Tempest*, while the drunken Europeans speak prose. Hamlet discusses the wonder of humanity ('What a piece of work is a man!') in prose. Whenever a character moves from verse into prose, or two characters suddenly begin to rhyme, ask: **why here, and why now?**",
      keyPoints: [
        "Blank verse = unrhymed iambic pentameter: nobles, serious matters, strong emotion.",
        "Prose: low status, comedy, letters, madness or breakdown.",
        "Rhyming couplets: scene endings, wise sayings, the supernatural, lovers in harmony.",
        "A switch between modes is a signal: always ask why it happens at that moment.",
      ],
      thinkDeeper:
        "If Caliban, a servant called a 'monster', speaks in beautiful verse while his European masters speak prose, what is Shakespeare suggesting about who is truly civilised? Could there be another explanation for the switch?",
    },
    {
      id: "iambic-pentameter",
      heading: "Iambic pentameter: the heartbeat of Shakespeare's verse",
      discovery: {
        problem:
          "Read this line aloud and tap the table on every LOUD syllable: 'But soft, what light through yonder window breaks?' How many syllables are there, and how many taps? Now try the witches' line 'Double, double toil and trouble'. What is different about where the taps fall?",
        idea:
          "Romeo's line has 10 syllables and 5 taps, alternating quiet-LOUD: but SOFT, what LIGHT through YON-der WIN-dow BREAKS. That is iambic pentameter. The witches' line starts LOUD-quiet (DOU-ble, DOU-ble) and is shorter: a different rhythm that makes them sound unnatural.",
      },
      body:
        "Read 'Shall I compare thee to a summer's day?' aloud and you will hear a pattern: shall I com-PARE thee TO a SUM-mer's DAY. That pattern is **iambic pentameter**, the heartbeat of Shakespeare's verse.\n\nBreak the term into parts:\n- A **syllable** is a single beat of sound: 'sum-mer' has two syllables.\n- Some syllables are **stressed** (said louder and longer, marked /) and some are **unstressed** (marked x).\n- An **iamb** is a pair of syllables: **unstressed then stressed**, da-DUM, as in 'a-WAKE', 'to-DAY', 'be-LIEVE'.\n- Each unit of rhythm is called a **foot**. **Pentameter** means five feet in a line ('penta' = five, as in pentagon).\n\nSo **iambic pentameter = five iambs = ten syllables**: da-DUM da-DUM da-DUM da-DUM da-DUM. It is close to the natural rhythm of English speech (and to the beat of a human heart), so it can sound poetic and natural at the same time.\n\n**How to scan a line.** Marking the stresses is called **scansion**.\n1. Count the syllables. Ten? It is probably pentameter.\n2. Mark the stresses on the important words (nouns, verbs, adjectives) and on the stressed syllable of longer words (DIG-ni-ty, VE-ro-na).\n3. Divide the line into five feet and check the pattern.\n\nTry: 'Two HOUSE-holds, BOTH a-LIKE in DIG-ni-TY'. Ten syllables, five beats. (Notice that the metre puts a light beat on '-ty'; in natural speech we would not lean on it, and actors balance the two.)\n\n**Squeezing and stretching.** To keep the ten-syllable line, words are sometimes squeezed (**elision**): 'o'er' for 'over', 'ne'er' for 'never', 'ow'st' for 'owest'. Sometimes an accent tells you to sound an extra syllable: 'cursèd' is said CUR-sed.\n\n**Why it matters for analysis:** words that land on the stresses are spotlighted, and because the pattern is so regular, any **break** in it (next section) stands out. Never just say 'this is iambic pentameter' in an essay: say what the rhythm *does* at that moment.",
      diagram: `<svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scansion of the line But soft, what light through yonder window breaks, showing five iambs of unstressed then stressed syllables"><g font-family="sans-serif" text-anchor="middle"><text x="44" y="32" font-size="14" fill="#64748b">x</text><text x="92" y="32" font-size="16" font-weight="bold" fill="#b91c1c">/</text><text x="140" y="32" font-size="14" fill="#64748b">x</text><text x="188" y="32" font-size="16" font-weight="bold" fill="#b91c1c">/</text><text x="236" y="32" font-size="14" fill="#64748b">x</text><text x="284" y="32" font-size="16" font-weight="bold" fill="#b91c1c">/</text><text x="332" y="32" font-size="14" fill="#64748b">x</text><text x="380" y="32" font-size="16" font-weight="bold" fill="#b91c1c">/</text><text x="428" y="32" font-size="14" fill="#64748b">x</text><text x="476" y="32" font-size="16" font-weight="bold" fill="#b91c1c">/</text><rect x="70" y="52" width="44" height="32" rx="5" fill="#fee2e2"/><rect x="166" y="52" width="44" height="32" rx="5" fill="#fee2e2"/><rect x="262" y="52" width="44" height="32" rx="5" fill="#fee2e2"/><rect x="358" y="52" width="44" height="32" rx="5" fill="#fee2e2"/><rect x="454" y="52" width="44" height="32" rx="5" fill="#fee2e2"/><text x="44" y="73" font-size="12" fill="#475569">But</text><text x="92" y="74" font-size="15" font-weight="bold" fill="#7f1d1d">SOFT</text><text x="140" y="73" font-size="12" fill="#475569">what</text><text x="188" y="74" font-size="15" font-weight="bold" fill="#7f1d1d">LIGHT</text><text x="236" y="73" font-size="12" fill="#475569">through</text><text x="284" y="74" font-size="15" font-weight="bold" fill="#7f1d1d">YON</text><text x="332" y="73" font-size="12" fill="#475569">der</text><text x="380" y="74" font-size="15" font-weight="bold" fill="#7f1d1d">WIN</text><text x="428" y="73" font-size="12" fill="#475569">dow</text><text x="476" y="74" font-size="15" font-weight="bold" fill="#7f1d1d">BREAKS</text><path d="M24 96 v6 h88 v-6" fill="none" stroke="#7c3aed" stroke-width="1.5"/><path d="M120 96 v6 h88 v-6" fill="none" stroke="#7c3aed" stroke-width="1.5"/><path d="M216 96 v6 h88 v-6" fill="none" stroke="#7c3aed" stroke-width="1.5"/><path d="M312 96 v6 h88 v-6" fill="none" stroke="#7c3aed" stroke-width="1.5"/><path d="M408 96 v6 h88 v-6" fill="none" stroke="#7c3aed" stroke-width="1.5"/><text x="68" y="120" font-size="11" fill="#5b21b6">foot 1</text><text x="164" y="120" font-size="11" fill="#5b21b6">foot 2</text><text x="260" y="120" font-size="11" fill="#5b21b6">foot 3</text><text x="356" y="120" font-size="11" fill="#5b21b6">foot 4</text><text x="452" y="120" font-size="11" fill="#5b21b6">foot 5</text><text x="260" y="150" font-size="13" fill="#1f2937">da-DUM x 5 = iambic pentameter (10 syllables)</text></g></svg>`,
      diagramCaption:
        "Romeo's line (2.2) scanned: five iambs, each an unstressed syllable followed by a stressed one. The stresses fall on the key words: soft, light, window, breaks.",
      keyPoints: [
        "An iamb = unstressed + stressed (da-DUM); pentameter = five feet; so ten syllables per line.",
        "Blank verse is unrhymed iambic pentameter.",
        "Scansion = marking stresses; words on the stresses are emphasised.",
      ],
      thinkDeeper:
        "Shakespeare's verse is regular enough to have a heartbeat but loose enough to sound like real speech. Why might a playwright want both, rather than a strict, rhyming, sing-song rhythm like a nursery rhyme? When DOES he choose the sing-song?",
    },
    {
      id: "breaking-the-rhythm",
      heading: "Breaking the rhythm: feminine endings, trochees and shared lines",
      discovery: {
        problem:
          "Count the syllables in 'To be, or not to be, that is the question'. Is it ten? Where does the line seem to 'fall away' at the end? Why might that suit a young man who cannot make up his mind?",
        idea:
          "It has eleven syllables: the extra, unstressed '-tion' at the end is a feminine ending. Instead of landing firmly on a stressed beat, the line trails off, unresolved, just like Hamlet's thinking. Variations in the metre are clues to a character's state of mind.",
      },
      passage: {
        id: "to-be-or-not",
        title: "'To be, or not to be' (opening)",
        source: "William Shakespeare, Hamlet (c.1600), Act 3 Scene 1",
        text: HAMLET,
        note: HAMLET_NOTE,
      },
      body:
        "Once you can hear the heartbeat, you can hear when it **skips**, and Shakespeare's skips are often deliberate.\n\n**Feminine ending**: an extra, unstressed eleventh syllable at the end of a line. 'To BE, or NOT to BE, that IS the QUES-tion' trails away on '-tion'. Feminine endings can sound uncertain, unresolved or emotionally unsettled, and Hamlet's great speech of indecision is full of them ('to SUF-fer', 'of out-RAGE-ous FOR-tune'). A line ending on a stress has a **masculine ending**, which sounds firm and decisive.\n\n**Trochaic inversion**: the first foot is flipped from an iamb (da-DUM) to a **trochee** (DUM-da). 'NOW is the WIN-ter OF our DIS-con-TENT' (Richard III, 1.1) hits the very first word hard, grabbing the audience's attention. Inversions create emphasis, urgency or a jolt.\n\n**Trochaic metre for the supernatural**: the witches in *Macbeth* chant 'DOU-ble, DOU-ble, TOIL and TROU-ble; / Fire burn and cauldron bubble.' This is not pentameter at all but shorter, rhyming lines built on four trochees (**trochaic tetrameter**), often with the last weak syllable chopped off. The beat feels like a spell: hypnotic and unnatural, setting the witches apart from humans.\n\n**Shared lines**: one line of pentameter split between two or more speakers. The second speaker picks up the rhythm instantly, which can show intimacy, agreement, rivalry, or fast and panicky exchange. Just after Duncan's murder, Macbeth and Lady Macbeth share lines in tiny fragments: 'Did not you speak?' / 'When?' / 'Now.' / 'As I descended?' (2.2). It sounds like two terrified whispers in the dark.\n\n**Short lines and pauses**: when a verse line has fewer than ten syllables, the missing beats can be filled with silence: a pause, a look, an action, or shock. In Hamlet's soliloquy the full line 'Must give us pause. There's the respect' has only eight syllables, and the missing beats seem to fall right after 'pause', so the rhythm literally pauses.\n\n**Caesura**: a strong pause in the middle of a line, shown by punctuation: 'And by opposing end them. To die, to sleep'. Many caesuras make speech sound broken and hesitant.\n\nRemember: never just *spot* a variation. Explain what it **does**: a broken rhythm often means something has broken in the character.",
      keyPoints: [
        "Feminine ending = an extra unstressed eleventh syllable; it can suggest uncertainty or unease.",
        "Trochaic inversion flips the first foot (DUM-da) for emphasis; the witches use trochaic tetrameter.",
        "Shared lines show characters finishing each other's rhythm: intimacy, conflict or panic.",
        "Short lines and caesuras create pauses; broken rhythm can mirror a broken mind.",
      ],
      thinkDeeper:
        "Is it 'reading too much into it' to link a feminine ending to Hamlet's indecision? After all, many calm characters' lines have feminine endings too. What would convince you that a metrical variation is deliberate rather than accidental?",
    },
    {
      id: "archaic-language",
      heading: "Thou, wherefore and 'tis: decoding Early Modern English (and the words he gave us)",
      discovery: {
        problem:
          "In the balcony scene Juliet asks, 'O Romeo, Romeo, wherefore art thou Romeo?' Romeo is actually hiding just below her, and she does not know he is there. If 'wherefore' meant 'where', would the rest of her speech ('Deny thy father and refuse thy name') make sense? What else could 'wherefore' mean?",
        idea:
          "'Wherefore' means WHY. Juliet is not looking for Romeo; she is asking why he has to be Romeo, a Montague, the son of her family's enemy. The rest of the speech is all about names. Many 'old' words are false friends that look familiar but mean something else.",
      },
      body:
        "Shakespeare wrote in **Early Modern English**, the same language as ours but about four hundred years younger. (It is **not** Old English: that is the language of *Beowulf*, which you could not read without translation.) Most of it is readable once you know a few patterns.\n\n**Thou and you.** In Shakespeare's time English had two words for 'you':\n- **thou / thee / thy / thine**: the *singular, familiar* forms, used to close friends, family, lovers, children, servants and God, and also to insult someone.\n- **you / your / yours**: used to superiors, in polite or formal situations, *and* whenever more than one person is addressed.\n\nThe four 'thou' forms work exactly like I / me / my / mine:\n- **thou** = the subject: '**Thou** art more lovely'\n- **thee** = the object: 'Shall I compare **thee**'\n- **thy** = possessive before a consonant: '**thy** father'\n- **thine** = possessive before a vowel ('**thine** eyes') or standing alone ('the fault is **thine**')\n\n**A switch is a signal.** In *Hamlet* 3.4 Gertrude rebukes her son: 'Hamlet, **thou** hast thy father much offended.' He throws her words back: 'Mother, **you** have my father much offended.' She uses the parental 'thou' and means his stepfather Claudius; he uses the cold, formal 'you' and means his murdered father. A whole argument lives in two pronouns.\n\n**Verb endings.**\n- With *thou*, verbs end in **-est** or **-st**: thou **art** (are), thou **hast** (have), thou **dost** (do), thou **knowest**, thou **wilt** (will), thou **canst** (can).\n- In the third person, **-eth** or **-th** = modern **-s**: he **hath** (has), she **doth** (does), it **speaketh** (speaks).\n\n**False friends and handy words:**\n- **wherefore** = why; **anon** = soon, at once; **ere** = before; **hence** = from here; **hither** = to here; **whither** = to where\n- **would** = wish ('Would I were...' = I wish I were); **an** = if; **marry!** = indeed! (an oath, 'by the Virgin Mary')\n- **prithee** = please (I pray thee); **sirrah** = how you address an inferior (often rudely); **fie** = shame!; **alack** = alas\n\n**Contractions** squeeze words to fit the metre: **'tis** (it is), **'twas** (it was), **o'er** (over), **ne'er** (never), **e'en** (even), **i' th'** (in the).\n\n**The words he gave us.** The *Oxford English Dictionary* lists Shakespeare as the **earliest recorded user** of well over a thousand words (a figure of about 1,700 is often quoted). 'Earliest recorded' is the careful phrase: many words were probably already being spoken, and he is simply the first writer whose use survives. Examples include **assassination** (*Macbeth*), **lonely**, **eyeball**, **bedroom**, **swagger** and **dauntless**, and phrases such as 'the **green-eyed monster**' (Iago, *Othello*), 'a **wild-goose chase**' (Mercutio, *Romeo and Juliet*) and 'the **be-all and the end-all**' (*Macbeth*). He made words by:\n- **functional shift**: changing a word's class, e.g. a noun used as a verb: 'Grace me no grace, nor uncle me no uncle' (*Richard II*)\n- **adding prefixes or suffixes**: 'lone' + '-ly' = lonely; 'daunt' + '-less' = dauntless\n- **compounding**: joining two words, 'eye' + 'ball' = eyeball\n\nSo his language was *new and daring* to his first audience, not old-fashioned. Don't panic over every word: read to the punctuation, get the gist, then look up the two or three words that really matter.",
      diagram: `<svg viewBox="0 0 460 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Table matching thou, thee, thy and thine to I, me, my and mine"><g font-family="sans-serif"><rect x="10" y="10" width="440" height="34" rx="6" fill="#ede9fe"/><text x="65" y="32" font-size="12" font-weight="bold" text-anchor="middle" fill="#4c1d95">Like modern</text><text x="180" y="32" font-size="12" font-weight="bold" text-anchor="middle" fill="#4c1d95">Shakespeare</text><text x="340" y="32" font-size="12" font-weight="bold" text-anchor="middle" fill="#4c1d95">Job and example</text><text x="65" y="70" font-size="13" text-anchor="middle" fill="#1f2937">I</text><text x="180" y="70" font-size="14" font-weight="bold" text-anchor="middle" fill="#b91c1c">thou</text><text x="340" y="70" font-size="11" text-anchor="middle" fill="#1f2937">subject: thou art lovely</text><line x1="10" y1="82" x2="450" y2="82" stroke="#e5e7eb"/><text x="65" y="105" font-size="13" text-anchor="middle" fill="#1f2937">me</text><text x="180" y="105" font-size="14" font-weight="bold" text-anchor="middle" fill="#b91c1c">thee</text><text x="340" y="105" font-size="11" text-anchor="middle" fill="#1f2937">object: I compare thee</text><line x1="10" y1="117" x2="450" y2="117" stroke="#e5e7eb"/><text x="65" y="140" font-size="13" text-anchor="middle" fill="#1f2937">my</text><text x="180" y="140" font-size="14" font-weight="bold" text-anchor="middle" fill="#b91c1c">thy</text><text x="340" y="140" font-size="11" text-anchor="middle" fill="#1f2937">before a consonant: thy name</text><line x1="10" y1="152" x2="450" y2="152" stroke="#e5e7eb"/><text x="65" y="175" font-size="13" text-anchor="middle" fill="#1f2937">mine</text><text x="180" y="175" font-size="14" font-weight="bold" text-anchor="middle" fill="#b91c1c">thine</text><text x="340" y="175" font-size="11" text-anchor="middle" fill="#1f2937">before a vowel or alone: thine eyes</text><rect x="10" y="190" width="440" height="28" rx="6" fill="#dbeafe"/><text x="230" y="209" font-size="12" text-anchor="middle" fill="#1e3a8a">you / your = polite, formal, to a superior, or plural</text></g></svg>`,
      diagramCaption:
        "The four 'thou' forms behave exactly like I, me, my and mine. 'You' was the respectful (or plural) form.",
      keyPoints: [
        "Thou/thee/thy/thine = familiar or insulting; you = polite, formal or plural. A switch signals a shift in the relationship.",
        "-est goes with thou (thou hast); -eth = modern -s (he hath, she doth).",
        "Wherefore = why; 'tis = it is; anon = soon; ere = before.",
        "Shakespeare is the earliest recorded user of words like 'assassination', 'lonely' and 'eyeball', which is not quite the same as inventing them.",
      ],
      thinkDeeper:
        "Modern English lost 'thou' and now uses 'you' for everyone. What have we gained, and what have we lost? How would you show intimacy, or contempt, in modern English without it?",
    },
    {
      id: "dramatic-devices",
      heading: "Dramatic devices: soliloquy, aside, dramatic irony and more",
      discovery: {
        problem:
          "Read the Prologue to Romeo and Juliet below. By line 6 ('A pair of star-cross'd lovers take their life') the play has not even started, and you already know how it ends. Why would a playwright give away the ending?",
        idea:
          "Knowing the ending moves the suspense from WHAT happens to HOW and WHY it happens. It also creates dramatic irony for the whole play: every hopeful moment becomes painful, because we know what the lovers do not. And it introduces the theme of fate: the 'stars' are against them from the start.",
      },
      passage: {
        id: "rj-prologue",
        title: "The Prologue to Romeo and Juliet",
        source: "William Shakespeare, Romeo and Juliet (c.1595), Prologue",
        text: PROLOGUE,
        note: PROLOGUE_NOTE,
      },
      body:
        "**Dramatic devices** are techniques that only work in a play, because they depend on the relationship between the characters on stage and the audience watching.\n\n- **Soliloquy**: a character who believes they are **alone on stage** speaks their private thoughts aloud. Because characters rarely lie to themselves, soliloquies are our most reliable window into a mind (Hamlet's 'To be, or not to be'; Juliet's 'Gallop apace'). They build intimacy: the audience becomes the character's confidant.\n- **Aside**: a short remark spoken to the audience (or to one other character) which the others on stage **do not hear**. Hamlet's very first line is an aside about his uncle: 'A little more than kin, and less than kind!' Asides make us complicit: we share a secret.\n- **Monologue**: a long speech by one character **to other characters**, who are present and listening. Jaques' 'All the world's a stage' is a monologue to the Duke and his followers, not a soliloquy.\n- **Dramatic irony**: the **audience knows something a character does not**. When Romeo finds Juliet in the tomb and believes she is dead, we know she has only taken a sleeping potion. The gap between our knowledge and his creates almost unbearable tension.\n- **Foreshadowing**: hints of what will happen later. The Prologue tells us the lovers will die; when Juliet first falls for Romeo she says, 'My grave is like to be my wedding bed' (1.5).\n- **Puns and wordplay**: a **pun** uses a word with two meanings, or two words that sound alike. The dying Mercutio jokes, 'Ask for me tomorrow, and you shall find me a grave man': *grave* means serious *and* a place for the dead. Puns show wit, hide pain, or reveal hidden meanings.\n- **Stage directions**: Shakespeare's printed directions are rare and brief ('Enter Ghost', 'Exeunt' = they leave, the famous 'Exit, pursued by a bear' in *The Winter's Tale*). Most directions are **embedded in the dialogue**: 'But soft, what light through yonder window breaks?' tells the actor to stop, look up and see Juliet at her window.\n- **Comic relief**: a funny scene or character placed in or just after a tragic moment to release tension, and often to make the darkness darker by contrast. Straight after Duncan's murder, the drunken **Porter** in *Macbeth* jokes that he is the porter of hell-gate; in *Hamlet* the **Gravediggers** banter about death while digging Ophelia's grave.\n\nWhen you analyse a scene, always ask: **what does the audience know or feel at this moment that the characters do not?**",
      keyPoints: [
        "Soliloquy = alone, true thoughts; aside = brief, unheard by others; monologue = long speech to listeners.",
        "Dramatic irony = the audience knows more than the character; foreshadowing = hints of what is to come.",
        "Most stage directions are embedded in the dialogue; comic relief releases and sharpens tension.",
      ],
      thinkDeeper:
        "If the audience knows from line 6 of the Prologue that Romeo and Juliet will die, is every happy moment in the play secretly a sad one? Does dramatic irony make a play more enjoyable or less?",
    },
    {
      id: "reading-an-extract",
      heading: "How to read an extract: paraphrase first, then analyse",
      discovery: {
        problem:
          "Read the first five lines of Jaques' speech below once, quickly. Now, without using a single technical term, write ONE sentence saying what he means. Then read the explanation.",
        idea:
          "Something like: 'Life is like a play: everyone is just an actor who comes on, plays different roles at different ages, and then leaves.' If you can say it simply, you are ready to analyse it. Paraphrase first, analyse second: you cannot explain the effect of a line you have not understood.",
      },
      passage: {
        id: "seven-ages",
        title: "'All the world's a stage' (the Seven Ages of Man)",
        source: "William Shakespeare, As You Like It (c.1599), Act 2 Scene 7",
        text: JAQUES,
        note: JAQUES_NOTE,
      },
      body:
        "In class and in tests you will be given 15–30 lines of Shakespeare and asked to analyse them. Do not start by hunting for techniques. **Understand first, analyse second.**\n\n**Step 1: Context.** Who is speaking, to whom, where in the play, and what has just happened? Read the introduction printed above an exam extract carefully: it is a gift.\n\n**Step 2: Read to the punctuation, not to the line-ends.** Verse sentences often run over the end of a line (**enjambment**). Pause at commas and full stops, not at the end of every line, and the sense appears.\n\n**Step 3: Paraphrase.** Put each sentence into your own modern words, in the margin. 'All the world's a stage, / And all the men and women merely players' becomes 'Life is like a play; people are only actors.' If you cannot paraphrase it, you cannot analyse it.\n\n**Step 4: Spot the big moves.** What is the speaker trying to do: persuade, grieve, mock, plan, confess? Where does the mood or argument **turn**? Is it verse or prose? Thou or you?\n\n**Step 5: Zoom in.** Choose 3–4 short, rich quotations. For each one, name the technique (metaphor, simile, pun, list, imperative, metrical variation...), explore the **connotations** of key words (the ideas and feelings a word suggests beyond its dictionary meaning), and explain the **effect** on the audience and the link to a theme.\n\n**A worked example.** Jaques' soldier is 'Seeking the bubble reputation / Even in the cannon's mouth.'\n- *Paraphrase*: he will risk being blown up just to become famous.\n- *Analysis*: the metaphor 'bubble reputation' suggests that fame is shiny and attractive but fragile and empty inside, gone in an instant. 'The cannon's mouth' personifies the gun as a monster ready to swallow him. Jaques mocks young men who throw their lives away for something so hollow.\n\n**Avoid feature-spotting.** 'Shakespeare uses a metaphor' earns almost nothing. 'The metaphor \"bubble reputation\" suggests fame is fragile and empty, so...' earns the marks.",
      diagram: `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five steps to reading an extract: context, read to the punctuation, paraphrase, spot the big moves, zoom in"><g font-family="sans-serif"><rect x="20" y="12" width="330" height="36" rx="6" fill="#dbeafe" stroke="#3b82f6"/><text x="185" y="35" font-size="12" text-anchor="middle" fill="#1e3a8a">1. Context: who, to whom, when, what just happened?</text><line x1="185" y1="48" x2="185" y2="60" stroke="#64748b" stroke-width="2"/><rect x="20" y="60" width="330" height="36" rx="6" fill="#dbeafe" stroke="#3b82f6"/><text x="185" y="83" font-size="12" text-anchor="middle" fill="#1e3a8a">2. Read to the punctuation, not the line-ends</text><line x1="185" y1="96" x2="185" y2="108" stroke="#64748b" stroke-width="2"/><rect x="20" y="108" width="330" height="36" rx="6" fill="#dbeafe" stroke="#3b82f6"/><text x="185" y="131" font-size="12" text-anchor="middle" fill="#1e3a8a">3. Paraphrase each sentence in modern English</text><line x1="185" y1="144" x2="185" y2="156" stroke="#64748b" stroke-width="2"/><rect x="20" y="156" width="330" height="36" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="185" y="179" font-size="12" text-anchor="middle" fill="#78350f">4. Big moves: purpose, turns, verse or prose, thou/you</text><line x1="185" y1="192" x2="185" y2="204" stroke="#64748b" stroke-width="2"/><rect x="20" y="204" width="330" height="36" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="185" y="227" font-size="12" text-anchor="middle" fill="#78350f">5. Zoom in: technique, connotation, effect, theme</text><path d="M362 14 h8 v128 h-8" fill="none" stroke="#3b82f6" stroke-width="2"/><text x="378" y="82" font-size="13" font-weight="bold" fill="#1e3a8a">UNDERSTAND</text><path d="M362 158 h8 v80 h-8" fill="none" stroke="#d97706" stroke-width="2"/><text x="378" y="203" font-size="13" font-weight="bold" fill="#78350f">ANALYSE</text></g></svg>`,
      diagramCaption:
        "Understand first (steps 1–3), analyse second (steps 4–5). Skipping straight to step 5 is the most common reason for weak Shakespeare answers.",
      keyPoints: [
        "Understand before you analyse: context, read to the punctuation, paraphrase.",
        "Then find the purpose and the turns, and zoom in on 3–4 short quotations.",
        "Technique + connotation + effect + theme beats naming a feature.",
      ],
      thinkDeeper:
        "Jaques ends with 'Sans teeth, sans eyes, sans taste, sans everything.' Is his view of life wise or merely gloomy? Straight after the speech, the young hero Orlando enters carrying Adam, his loyal, generous old servant. How does that entrance answer Jaques?",
    },
  ],

  passages: [
    {
      id: "seven-ages",
      title: "'All the world's a stage' (the Seven Ages of Man)",
      source: "William Shakespeare, As You Like It (c.1599), Act 2 Scene 7: Jaques",
      text: JAQUES,
      note: JAQUES_NOTE,
    },
    {
      id: "rj-prologue",
      title: "The Prologue to Romeo and Juliet",
      source: "William Shakespeare, Romeo and Juliet (c.1595), Prologue: the Chorus",
      text: PROLOGUE,
      note: PROLOGUE_NOTE,
    },
    {
      id: "sonnet-18",
      title: "Sonnet 18: 'Shall I compare thee to a summer's day?'",
      source: "William Shakespeare, Sonnets (1609), Sonnet 18",
      text: SONNET18,
      note: SONNET18_NOTE,
    },
    {
      id: "to-be-or-not",
      title: "'To be, or not to be' (opening)",
      source: "William Shakespeare, Hamlet (c.1600), Act 3 Scene 1: Hamlet",
      text: HAMLET,
      note: HAMLET_NOTE,
    },
    {
      id: "caliban-isle",
      title: "'Be not afeard': Caliban and Stephano",
      source: "William Shakespeare, The Tempest (c.1611), Act 3 Scene 2",
      text: CALIBAN,
      note: "Caliban, the island's original inhabitant now forced to serve Prospero, speaks verse; the drunken butler Stephano answers in prose. afeard = afraid; airs = tunes; twangling = jangling; methought = it seemed to me; brave = splendid.",
    },
  ],

  quoteBank: [
    {
      quote: "All the world's a stage, / And all the men and women merely players",
      source: "Jaques, As You Like It, Act 2 Scene 7",
      analysis:
        "An extended metaphor comparing life to a play: people are 'merely players', actors with no real control who follow a script and then exit. The adverb 'merely' shrinks human importance, setting up Jaques' cynical, melancholy view of life. It is also a playful in-joke, spoken by an actor on a stage to an audience, probably in the newly built Globe.",
      themes: ["life", "time", "theatre"],
    },
    {
      quote: "Sans teeth, sans eyes, sans taste, sans everything.",
      source: "Jaques, As You Like It, Act 2 Scene 7",
      analysis:
        "The repetition of 'sans' (without) strips the old man of his senses one by one, building to the crushing final word 'everything'. The list's rhythm slows and hammers, mimicking decline. Old age is presented as 'second childishness': life comes full circle back to helplessness.",
      themes: ["age", "death", "time"],
    },
    {
      quote: "Two households, both alike in dignity, / In fair Verona, where we lay our scene",
      source: "The Chorus, Romeo and Juliet, Prologue",
      analysis:
        "The Prologue opens with balance: two equal families, 'alike in dignity', so neither is the villain. 'Fair Verona' sounds beautiful and civilised, which makes the 'mutiny' and 'civil blood' that follow more shocking. The phrase 'lay our scene' openly reminds us we are watching a play.",
      themes: ["conflict", "family"],
    },
    {
      quote: "A pair of star-cross'd lovers take their life",
      source: "The Chorus, Romeo and Juliet, Prologue",
      analysis:
        "'Star-cross'd' suggests the lovers are thwarted by the stars, so their fate is fixed before the action begins. 'Take their life' is a double meaning: they are born from ('take their life' from) their parents, and they will take their own lives. The Prologue creates dramatic irony for the whole play.",
      themes: ["fate", "love", "death"],
    },
    {
      quote: "Shall I compare thee to a summer's day? / Thou art more lovely and more temperate",
      source: "Sonnet 18, lines 1–2",
      analysis:
        "The sonnet opens with a rhetorical question, then immediately rejects the comparison: the beloved is better than summer, gentler and more 'temperate' (even-tempered). The intimate 'thee' and 'thou' create closeness. Line 1 is perfect iambic pentameter, as calm and controlled as the beloved.",
      themes: ["love", "beauty", "nature"],
    },
    {
      quote: "So long as men can breathe or eyes can see, / So long lives this, and this gives life to thee.",
      source: "Sonnet 18, final couplet",
      analysis:
        "The rhyming couplet makes a confident claim: as long as people exist to read it, 'this' poem will survive and keep the beloved alive. The repetition of 'So long' and 'this' stresses endurance. The poem argues that art can defeat time and Death, and 400 years later, here we are reading it.",
      themes: ["time", "art", "immortality"],
    },
    {
      quote: "To be, or not to be, that is the question",
      source: "Hamlet (soliloquy), Hamlet, Act 3 Scene 1",
      analysis:
        "An antithesis (to be / not to be) frames Hamlet's debate about whether to live or die. The line has eleven syllables, a feminine ending that trails off on '-tion', mirroring his unresolved, hesitating mind. As a soliloquy it gives us unfiltered access to his private thoughts.",
      themes: ["death", "indecision", "action"],
    },
    {
      quote: "A little more than kin, and less than kind!",
      source: "Hamlet (aside), Hamlet, Act 1 Scene 2",
      analysis:
        "Hamlet's first line is an aside: Claudius cannot hear it, so we immediately share Hamlet's secret hostility. The pun on 'kin' (family) and 'kind' (natural, and also affectionate) suggests Claudius is now too closely related, as uncle and stepfather, yet acts unnaturally. The alliteration makes it biting and witty.",
      themes: ["family", "corruption"],
    },
    {
      quote: "Now is the winter of our discontent / Made glorious summer by this sun of York",
      source: "Richard, Duke of Gloucester (soliloquy), Richard III, Act 1 Scene 1",
      analysis:
        "The line opens with a trochaic inversion ('NOW is'), seizing the audience's attention. The seasonal metaphor turns misery ('winter') into triumph ('summer'), while 'sun of York' puns on 'son', meaning his brother King Edward IV, son of the Duke of York. Richard's wit is dazzling and sinister.",
      themes: ["power", "ambition"],
    },
    {
      quote: "Double, double toil and trouble; / Fire burn and cauldron bubble.",
      source: "The Witches, Macbeth, Act 4 Scene 1",
      analysis:
        "Instead of iambic pentameter, the witches chant short, rhyming lines in trochaic metre (DOU-ble, DOU-ble). The falling rhythm, repetition and rhyme make the lines sound like a spell, setting the witches apart from the human characters and creating an unnatural, sinister mood.",
      themes: ["supernatural", "evil"],
    },
    {
      quote: "Be not afeard; the isle is full of noises, / Sounds and sweet airs, that give delight and hurt not.",
      source: "Caliban, The Tempest, Act 3 Scene 2",
      analysis:
        "Caliban, treated as a 'monster' and a slave, speaks gentle, lyrical blank verse full of sound imagery ('noises', 'Sounds', 'sweet airs'). The soft sibilance soothes his frightened companions. Because the 'civilised' Stephano replies in coarse prose, the verse form challenges our view of who is truly savage.",
      themes: ["nature", "power", "colonialism"],
    },
    {
      quote: "Ask for me tomorrow, and you shall find me a grave man.",
      source: "Mercutio, Romeo and Juliet, Act 3 Scene 1",
      analysis:
        "Even while dying, Mercutio puns: 'grave' means serious and also refers to the grave he will lie in. The joke shows his wit and bravado, but makes his death more painful. This is the moment the play turns from comedy to tragedy.",
      themes: ["death", "conflict"],
    },
    {
      quote: "O Romeo, Romeo, wherefore art thou Romeo?",
      source: "Juliet, Romeo and Juliet, Act 2 Scene 2",
      analysis:
        "'Wherefore' means 'why', not 'where': Juliet asks why Romeo must be a Montague, her family's enemy. The repetition of his name shows her longing, and the familiar 'thou' shows intimacy. Romeo overhears her, which creates dramatic irony: she thinks she is alone.",
      themes: ["love", "identity", "family"],
    },
    {
      quote: "Mother, you have my father much offended.",
      source: "Hamlet, Hamlet, Act 3 Scene 4",
      analysis:
        "Hamlet echoes his mother's rebuke ('Hamlet, thou hast thy father much offended') but switches her familiar 'thou' to a cold 'you' and her meaning of 'father' (Claudius) to his murdered father. The parallel structure turns her words into a weapon, and the pronoun switch signals the breakdown of their relationship.",
      themes: ["family", "betrayal"],
    },
  ],

  modelWriting: [
    {
      title: "PEEL paragraph: Jaques' view of life",
      task: "How does Shakespeare present human life in Jaques' 'All the world's a stage' speech?",
      text:
        "Shakespeare presents human life as a short, pre-scripted performance in which people have little real control. Jaques opens with the extended metaphor 'All the world's a stage, / And all the men and women merely players', comparing every human being to an actor following a script. The adverb 'merely' is dismissive: it shrinks our hopes and achievements to roles we play for a while before our 'exits'. This cynical view is developed through the soldier, who seeks 'the bubble reputation / Even in the cannon's mouth'; the metaphor 'bubble' suggests fame is beautiful but hollow and fragile, ready to burst at any moment, so the soldier risks his life for nothing. By ending the speech with the hammering repetition of 'sans teeth, sans eyes, sans taste, sans everything', Shakespeare makes old age a slow stripping-away of the self, so that life comes full circle to 'second childishness'. However, because Jaques is known in the play as a melancholy character, and because Orlando immediately enters carrying the loyal old servant Adam, Shakespeare invites the audience to question whether this bleak vision tells the whole truth.",
      annotations: [
        "Opens with a clear, conceptual point that answers the question directly ('a short, pre-scripted performance').",
        "Short, embedded quotations rather than long chunks.",
        "Zooms in on single words ('merely', 'bubble') and explores their connotations.",
        "Names techniques (extended metaphor, repetition) but always explains their effect.",
        "Tracks the structure of the speech from start to end (stage, soldier, old age).",
        "Ends with an alternative interpretation using context within the play: a top-band move.",
      ],
    },
    {
      title: "Analysing form: verse and prose in The Tempest",
      task: "How does Shakespeare use verse and prose to present Caliban and Stephano in Act 3 Scene 2?",
      text:
        "Shakespeare uses form to overturn the audience's expectations about who is 'civilised'. Caliban, whom Prospero calls a slave and whom the other characters call a 'monster', speaks in delicate blank verse: 'Be not afeard; the isle is full of noises, / Sounds and sweet airs, that give delight and hurt not.' The gentle iambic rhythm and soft sibilance in 'Sounds and sweet' make his speech soothing, almost musical, as if he has absorbed the island's magic into his language. In contrast, the European butler Stephano replies in flat prose: 'This will prove a brave kingdom to me, where I shall have my music for nothing.' Usually, verse belongs to high-status characters and prose to low-status ones, so by giving the beautiful verse to the servant and the grasping prose to his would-be master, Shakespeare suggests that sensitivity and imagination do not depend on rank. Stephano hears wonder and thinks only of getting something for free, which hints at the greed behind his dream of ruling the island.",
      annotations: [
        "Treats verse and prose as a choice with meaning, not just a feature to label.",
        "Quotes both characters briefly and compares them directly ('In contrast').",
        "Combines form (blank verse, iambic rhythm) with language (sibilance).",
        "Shows awareness of the convention (verse = high status) and how Shakespeare breaks it.",
        "Links to big themes: civilisation, power and colonisation.",
      ],
    },
    {
      title: "Paraphrase then analyse: the Prologue",
      task: "How does the Prologue prepare the audience for the tragedy of Romeo and Juliet?",
      text:
        "Paraphrase: Two equally important families in Verona have an old feud that breaks out into new violence. Their children fall in love, are doomed, and die, and only their deaths end the feud. The play will show this story in about two hours.\n\nAnalysis: Shakespeare prepares the audience for tragedy by revealing the ending before the action begins. The phrase 'star-cross'd lovers' suggests that the stars, and therefore fate, are against Romeo and Juliet from birth, while 'death-mark'd love' makes their relationship sound branded for destruction. Because we know they will die, the whole play is soaked in dramatic irony: every hopeful moment, such as the secret wedding, becomes painful to watch. Ironically, the Prologue is written as a sonnet, the traditional form of love poetry, yet it is full of 'grudge', 'mutiny' and 'rage', so even its form blends love with violence, exactly as the play will.",
      annotations: [
        "Shows the two-stage method: a plain paraphrase before any analysis.",
        "Analyses specific words ('star-cross'd', 'death-mark'd') for connotations of fate.",
        "Explains dramatic irony as an effect on the audience, not just a definition.",
        "Comments on form (the sonnet) and links it to the play's themes: a high-level move.",
      ],
    },
  ],

  mnemonics: [
    {
      topic: "The rhythm of iambic pentameter",
      device: "'i-AM, i-AM, i-AM, i-AM, i-AM' (or: to-DAY i WANT to EAT a PLATE of CHIPS)",
      explanation:
        "Say 'I am' five times, stressing 'AM'. That is five iambs: unstressed then stressed, ten syllables. If a line of Shakespeare matches that beat, it is iambic pentameter. The chips sentence is a real line of iambic pentameter you can use to check yourself.",
    },
    {
      topic: "The four 'thou' forms",
      device: "THOU, THEE, THY, THINE = I, ME, MY, MINE",
      explanation:
        "Swap in the 'I' word to find the right 'thou' word. 'I am' → 'thou art'; 'love me' → 'love thee'; 'my book' → 'thy book'; 'mine eyes' → 'thine eyes'. Like 'my' and 'mine', 'thy' comes before a consonant and 'thine' before a vowel or on its own.",
    },
    {
      topic: "The eight dramatic devices",
      device: "Some Actors Mumble; Some Directors Fear Pun Contests",
      explanation:
        "Soliloquy, Aside, Monologue; Stage directions, Dramatic irony, Foreshadowing, Puns, Comic relief.",
    },
    {
      topic: "Reading an extract",
      device: "Can Readers Paraphrase Shakespeare? Zoom!",
      explanation:
        "Context → Read to the punctuation → Paraphrase → Spot the big moves → Zoom in on 3–4 quotations (technique, connotation, effect, theme). The first three steps are understanding; only the last two are analysis.",
    },
  ],

  examMistakes: [
    "Feature-spotting: writing 'Shakespeare uses iambic pentameter' or 'this is a metaphor' without explaining the effect at that moment.",
    "Translating 'wherefore' as 'where' and building a whole argument on the misreading.",
    "Calling every long speech a soliloquy: if other characters are listening (like Jaques' audience), it is a monologue.",
    "Retelling the plot instead of analysing the language of the printed extract.",
    "Quoting huge chunks of verse instead of short, embedded quotations of a few words.",
    "Saying 'Shakespeare wrote in Old English': it is Early Modern English.",
    "Ignoring the introduction above an extract, then misidentifying who is speaking or to whom.",
    "Stating that Shakespeare 'invented' a word as a certain fact, instead of saying he is its earliest recorded user.",
  ],

  misconceptions: [
    {
      wrong: "'Wherefore art thou Romeo?' means 'Where are you, Romeo?'",
      right: "'Wherefore' means 'why'. Juliet is asking why Romeo has to be a Montague, the son of her family's enemy.",
    },
    {
      wrong: "Shakespeare's plays are written entirely in rhyming poetry.",
      right: "Most of the verse is unrhymed blank verse; large parts of many plays are in prose. Rhyme is used for special effects such as scene endings, spells and lovers in harmony.",
    },
    {
      wrong: "Women played the female parts at the Globe.",
      right: "Women could not act on the English public stage until 1660. Juliet, Lady Macbeth and Miranda were all first played by boy actors.",
    },
    {
      wrong: "Only high-status characters speak verse and only servants speak prose.",
      right: "It is a tendency, not a rule. Caliban, a servant, speaks beautiful verse; Hamlet, a prince, often speaks prose. The exceptions are exactly where the interesting analysis lies.",
    },
    {
      wrong: "Shakespeare definitely invented every word he is credited with.",
      right: "He is the earliest recorded user of many words. Some were probably already in spoken use, and researchers keep finding earlier examples of a few of them.",
    },
    {
      wrong: "'Thou' is the old, posh, respectful way of saying 'you'.",
      right: "The opposite: 'thou' was the familiar form (for friends, lovers, children, inferiors, God, or insults). 'You' was the polite, formal form.",
    },
  ],

  expertDebates: [
    {
      question: "How much should we read into the metre?",
      detail:
        "Some scholars and actors (notably those trained at the RSC and the Globe) treat every feminine ending, short line or shared line as a deliberate clue to performance and emotion. Others point out that Shakespeare wrote fast, that early printers made mistakes and moved line breaks, and that many 'irregular' lines are simply natural speech. Most agree the patterns matter overall, but argue about individual lines.",
    },
    {
      question: "Did Shakespeare write Shakespeare?",
      detail:
        "Since the 1800s some people have claimed that a better-educated aristocrat, such as the Earl of Oxford or Francis Bacon, wrote the plays. Almost all academic historians reject this: Shakespeare's name is on the published plays, fellow writers such as Ben Jonson praised him as the author, and Heminges and Condell, his fellow actors, collected his work. The debate is interesting mainly for what it shows about snobbery: the doubt began because people could not believe a glover's son from Stratford was a genius.",
    },
    {
      question: "Was Shakespeare a word-inventor or a word-recorder?",
      detail:
        "The figure of about 1,700 'new' words comes from older dictionary evidence. As digitised libraries of early books grow, researchers keep finding earlier uses of some 'Shakespeare' words, suggesting that he often recorded lively everyday speech rather than inventing it. Others argue that his genius lay in daring new combinations and in using ordinary words in new grammatical ways, which nobody can take away from him.",
    },
  ],

  realWorld: [
    {
      emoji: "🗣️",
      title: "You already quote him",
      detail:
        "If you have ever been on a 'wild-goose chase', felt the 'green-eyed monster', called something 'the be-all and end-all' or said a result was 'a foregone conclusion', you have spoken Shakespeare.",
    },
    {
      emoji: "🎤",
      title: "Rhythm in rap and speeches",
      detail:
        "Rappers, poets and speech-writers control stressed and unstressed syllables just as Shakespeare did. Knowing where the stresses fall will help you in the Public Speaking Competition: stress the words that matter and pause at the caesuras.",
    },
    {
      emoji: "🎬",
      title: "Films built on the plays",
      detail:
        "West Side Story retells Romeo and Juliet in New York; The Lion King borrows its plot shape from Hamlet; 10 Things I Hate About You is based on The Taming of the Shrew. Spotting the original helps you see how stories are adapted.",
    },
    {
      emoji: "🏛️",
      title: "The Globe today",
      detail:
        "Shakespeare's Globe on Bankside, London, is a reconstruction where you can still stand in the yard as a groundling and watch plays in daylight, close enough to be spoken to in an aside.",
    },
    {
      emoji: "📱",
      title: "Formal and informal 'you' today",
      detail:
        "French (tu/vous), German (du/Sie) and Spanish (tú/usted) still have a familiar and a polite 'you', just as Shakespeare's English had thou and you. If you learn one of these languages, you already understand the idea.",
    },
  ],

  flashcards: [
    { front: "Iambic pentameter", back: "Five iambs per line (da-DUM ×5): ten syllables, alternating unstressed and stressed." },
    { front: "Blank verse", back: "Unrhymed iambic pentameter: Shakespeare's default for noble characters and serious matters." },
    { front: "Feminine ending", back: "An extra unstressed (eleventh) syllable at the end of a line, e.g. 'that is the QUES-tion'. Can suggest uncertainty." },
    { front: "Trochaic inversion", back: "Flipping the first foot from da-DUM to DUM-da for emphasis, e.g. 'NOW is the winter of our discontent'." },
    { front: "Shared line", back: "One line of verse split between two or more speakers, e.g. Macbeth 2.2 'Did not you speak?' / 'When?' / 'Now.'" },
    { front: "Soliloquy", back: "A speech by a character alone on stage, revealing their private thoughts to the audience." },
    { front: "Aside", back: "A brief remark to the audience or one character that the others on stage do not hear." },
    { front: "Dramatic irony", back: "When the audience knows something a character does not." },
    { front: "Groundlings", back: "Audience members who paid one penny to stand in the yard of the Globe." },
    { front: "The King's Men", back: "Shakespeare's company after 1603, when James I became its patron (formerly the Lord Chamberlain's Men)." },
    { front: "thou / thee / thy / thine", back: "Familiar forms of 'you' (subject / object / possessive before consonant / possessive before vowel or alone). Like I / me / my / mine." },
    { front: "wherefore", back: "Why. 'Wherefore art thou Romeo?' = Why are you Romeo?" },
    { front: "hath / doth / -eth", back: "has / does / modern -s ending (he speaketh = he speaks)." },
    { front: "'A pair of star-cross'd lovers take their life'", back: "The Chorus, Romeo and Juliet Prologue. Fate is against the lovers; foreshadows their deaths." },
    { front: "'All the world's a stage'", back: "Jaques, As You Like It 2.7: an extended metaphor of life as a play in seven ages." },
    { front: "Hamartia", back: "The fatal flaw of a tragic hero (e.g. ambition, indecision, rashness) that leads to their downfall." },
  ],

  mustKnow: [
    "Can you outline Shakespeare's life and explain how patrons, Elizabeth I and James I shaped his plays?",
    "Can you describe the Globe (yard, galleries, thrust stage, heavens, trapdoor) and explain how daylight performance and boy actors affected the writing?",
    "Can you name the features of comedy, tragedy, history and romance, and place The Tempest, Hamlet and Romeo and Juliet?",
    "Can you tell verse from prose on the page and explain why a character switches between them?",
    "Can you scan a line of iambic pentameter and spot feminine endings, trochaic inversions and shared lines, saying what each does?",
    "Can you use thou/thee/thy/thine correctly and explain what a switch between 'thou' and 'you' reveals?",
    "Can you translate common archaic words (wherefore, anon, ere, hath, doth, 'tis) in context?",
    "Can you define and give an example of soliloquy, aside, monologue, dramatic irony, foreshadowing, pun, embedded stage direction and comic relief?",
    "Can you paraphrase an unseen extract before analysing it in PEEL paragraphs?",
    "Can you explain what 'earliest recorded user' means, with examples of words and phrases from Shakespeare?",
  ],

  videos: [
    {
      title: "Iambic pentameter explained",
      channel: "Mr Bruff",
      url: "https://www.youtube.com/results?search_query=mr+bruff+iambic+pentameter+shakespeare",
    },
    {
      title: "Inside Shakespeare's Globe Theatre",
      channel: "Shakespeare's Globe",
      url: "https://www.youtube.com/results?search_query=shakespeare%27s+globe+theatre+tour+groundlings",
    },
    {
      title: "Shakespeare's language: thou, thee and you",
      channel: "Royal Shakespeare Company",
      url: "https://www.youtube.com/results?search_query=RSC+shakespeare+language+thou+you",
    },
    {
      title: "Soliloquy, aside and dramatic irony",
      channel: "BBC Bitesize",
      url: "https://www.youtube.com/results?search_query=bbc+bitesize+shakespeare+soliloquy+aside+dramatic+irony",
    },
  ],

  quiz: {
    mcq: [
      {
        id: "shk-quiz-mcq-1",
        question: "How many syllables does a regular line of iambic pentameter have?",
        options: ["Five", "Eight", "Ten", "Fourteen"],
        answerIndex: 2,
        hint: "'Penta' means five, but each iamb has more than one syllable.",
        explanation:
          "Pentameter means five feet, and each iamb has two syllables (da-DUM), so 5 × 2 = 10. 'Five' is the tempting distractor: that is the number of feet (and stresses), not syllables. Fourteen is the number of lines in a sonnet.",
        guideRef: "iambic-pentameter",
      },
      {
        id: "shk-quiz-mcq-2",
        extract: "O Romeo, Romeo, wherefore art thou Romeo?\n(Juliet, Romeo and Juliet, Act 2 Scene 2)",
        question: "What does 'wherefore' mean in this line?",
        options: ["Why", "Where", "When", "Therefore"],
        answerIndex: 0,
        hint: "Think about what Juliet says next: 'Deny thy father and refuse thy name'.",
        explanation:
          "'Wherefore' means 'why': Juliet asks why Romeo has to be a Montague. 'Where' is the classic misreading because the word looks similar; she is not searching for him (and does not know he is below).",
        guideRef: "archaic-language",
      },
      {
        id: "shk-quiz-mcq-3",
        question: "Who were the 'groundlings' at the Globe?",
        options: [
          "Actors who played ghosts rising through the trapdoor",
          "Wealthy spectators who sat in the Lords' rooms",
          "Stagehands who swept the stage between scenes",
          "Spectators who paid a penny to stand in the yard",
        ],
        answerIndex: 3,
        hint: "Where would you be if you were on the ground?",
        explanation:
          "Groundlings paid the cheapest price, one penny, to stand in the open yard around the stage. The trapdoor option is tempting because the trap is in the ground, but groundlings were audience members, not actors.",
        guideRef: "the-globe",
      },
      {
        id: "shk-quiz-mcq-4",
        question: "What is the key difference between a soliloquy and an aside?",
        options: [
          "A soliloquy is always in prose; an aside is always in verse",
          "A soliloquy is a speech by a character alone on stage; an aside is a brief remark the other characters on stage do not hear",
          "A soliloquy is spoken to other characters; an aside is spoken to God",
          "There is no difference; they are two names for the same device",
        ],
        answerIndex: 1,
        hint: "Think about who else is on stage, and how long the speech is.",
        explanation:
          "A soliloquy is a (usually long) speech by a character alone, revealing their thoughts; an aside is a short comment made while others are present but unable to hear. The option ‘A soliloquy is always in prose; an aside is always in verse’ is wrong because both are usually in verse in serious scenes; the option ‘A soliloquy is spoken to other characters; an aside is spoken to God’ describes a monologue rather than a soliloquy.",
        guideRef: "dramatic-devices",
      },
    ],
    qa: [
      {
        id: "shk-quiz-qa-1",
        question:
          "Explain the difference between verse and prose in Shakespeare's plays, and give two reasons why a character might switch from verse to prose.",
        marks: 3,
        hint: "Think about rhythm, status, and a famous sleepwalker.",
        modelAnswer:
          "Verse (usually blank verse) is written in lines of iambic pentameter, with a regular da-DUM rhythm and a capital letter at the start of each line; prose is ordinary speech with no fixed rhythm that runs across the page. A character might switch to prose because the scene becomes comic or informal, for example banter between servants. They might also switch because they are losing control of their mind: Lady Macbeth speaks prose when sleepwalking ('Out, damned spot!'), showing that her once-commanding mind has broken down.",
        markScheme: [
          { point: "Verse has a regular rhythm/metre (iambic pentameter) in set lines; prose has no fixed rhythm", keywords: ["iambic", "pentameter", "rhythm", "metre", "meter", "no fixed", "ordinary speech"] },
          { point: "Reason 1: comedy, informality or lower status", keywords: ["comic", "comedy", "joke", "informal", "low status", "lower status", "servant", "banter"] },
          { point: "Reason 2: madness, breakdown or loss of control (with example)", keywords: ["madness", "mad", "breakdown", "loss of control", "lost control", "sleepwalk", "lady macbeth", "antic"] },
        ],
        commonError: "Saying verse always rhymes. Most of Shakespeare's verse is unrhymed blank verse.",
        guideRef: "verse-prose-rhyme",
      },
      {
        id: "shk-quiz-qa-2",
        extract: "To be, or not to be, that is the question:\n(Hamlet, Act 3 Scene 1)",
        question:
          "Count the syllables in this line, name the metrical feature at the end of it, and explain its possible effect.",
        marks: 3,
        hint: "Count carefully: is there one syllable more than usual? Where is it?",
        modelAnswer:
          "The line has eleven syllables instead of the usual ten. The extra unstressed syllable at the end ('-tion' in 'question') is called a feminine ending. Instead of landing firmly on a stressed beat, the line trails away, unresolved, which mirrors Hamlet's uncertainty: he cannot decide whether to live or die, or whether to act.",
        markScheme: [
          { point: "Eleven syllables", keywords: ["eleven", "11", "extra syllable", "one more than ten", "one too many"] },
          { point: "Names the feminine ending (extra unstressed syllable)", keywords: ["feminine", "extra syllable", "extra unstressed", "weak ending"] },
          { point: "Effect: trailing off / unresolved, linked to indecision or uncertainty", keywords: ["uncertain", "indecis", "unresolved", "trail", "hesita", "unsettled", "doubt"] },
        ],
        commonError: "Counting ten and calling it 'perfect iambic pentameter', or naming the feature without explaining its effect.",
        guideRef: "breaking-the-rhythm",
      },
      {
        id: "shk-quiz-qa-3",
        extract:
          "GERTRUDE: Hamlet, thou hast thy father much offended.\nHAMLET: Mother, you have my father much offended.\n(Hamlet, Act 3 Scene 4)",
        question:
          "Explain the difference between 'thou' and 'you' in Shakespeare's time, then explain what the switch in this exchange reveals about the relationship.",
        marks: 4,
        hint: "Which word is familiar and which is formal? And who does each speaker mean by 'father'?",
        modelAnswer:
          "'Thou' was the singular, familiar form used to family, friends, lovers, inferiors, or as an insult, while 'you' was polite and formal, used to superiors or to more than one person. Gertrude uses the parental 'thou' to scold her son as a mother would a child, and by 'thy father' she means his stepfather, Claudius. Hamlet copies her sentence exactly but swaps to the cold, formal 'you', refusing her intimacy, and by 'my father' he means his murdered father. The switch shows the relationship breaking down: he is accusing her rather than accepting her authority.",
        markScheme: [
          { point: "'Thou' is familiar/informal (family, friends, inferiors, insult)", keywords: ["familiar", "informal", "intimate", "close", "inferior", "affection"] },
          { point: "'You' is polite/formal/respectful (or plural)", keywords: ["formal", "polite", "respect", "superior", "plural", "distant"] },
          { point: "Gertrude's 'thou' = parental scolding / authority; she means Claudius", keywords: ["claudius", "stepfather", "parent", "scold", "mother", "authority"] },
          { point: "Hamlet's 'you' = coldness/distance/rejection, accusing her; he means his dead father", keywords: ["cold", "distance", "reject", "accus", "dead father", "murdered", "breakdown"] },
        ],
        commonError: "Thinking 'thou' is the more respectful word because it sounds old-fashioned.",
        guideRef: "archaic-language",
      },
      {
        id: "shk-quiz-qa-4",
        question:
          "Explain three ways in which performing at the Globe Theatre shaped Shakespeare's writing.",
        marks: 3,
        hint: "Think about the time of day, the audience and the actors.",
        modelAnswer:
          "First, plays were performed in the afternoon in daylight with very little scenery, so Shakespeare used 'word scenery': characters describe night, storms or places so the audience can imagine them. Second, the audience included groundlings who stood in the yard close to the thrust stage, so he mixed poetry with jokes, fights and puns to hold everyone's attention, and the closeness made soliloquies and asides feel personal. Third, female roles were played by boy actors, which he exploited in plots where girls disguise themselves as boys, as in Twelfth Night.",
        markScheme: [
          { point: "Daylight / no lighting or scenery → descriptive 'word scenery'", keywords: ["daylight", "word scenery", "scenery", "no lighting", "afternoon", "describe"] },
          { point: "Groundlings / mixed audience → humour, action, puns to hold attention; closeness suits asides", keywords: ["groundling", "audience", "jokes", "humour", "humor", "puns", "thrust", "aside"] },
          { point: "Boy actors played women → disguise plots / limits on female roles", keywords: ["boy", "boys", "disguise", "female role", "women", "apprentice"] },
        ],
        commonError: "Listing facts about the Globe without explaining how each one affected the writing.",
        guideRef: "the-globe",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "shk-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "shk-mcq-p1-q01",
            question: "In which town was William Shakespeare born in 1564?",
            options: ["London", "Stratford-upon-Avon", "Oxford", "Canterbury"],
            answerIndex: 1,
            hint: "It is a market town in Warwickshire on the River Avon, and he died there too.",
            explanation:
              "Shakespeare was baptised in Stratford-upon-Avon in April 1564 and died there in 1616. London is the tempting answer because he made his career and fortune there, but he was born, married and buried in Stratford.",
            guideRef: "life-and-times",
          },
          {
            id: "shk-mcq-p1-q02",
            question: "Why were female roles such as Juliet and Lady Macbeth first played by boys?",
            options: [
              "Boys were paid more than adult actors, so companies preferred them",
              "Shakespeare believed female characters were best played by children",
              "There were very few female characters, so it hardly mattered",
              "Women were not allowed to act on the English public stage until 1660",
            ],
            answerIndex: 3,
            hint: "It was a matter of custom and law, not of choice or cost.",
            explanation:
              "Women did not perform on the English public stage until after the Restoration in 1660, so boy apprentices whose voices had not broken played the female roles. The 'very few female characters' option is wrong: plays have major female roles such as Juliet, Lady Macbeth and Rosalind.",
            guideRef: "the-globe",
          },
          {
            id: "shk-mcq-p1-q03",
            question: "In 1603 Shakespeare's company was renamed 'the King's Men'. Which monarch became its patron?",
            options: ["James I", "Elizabeth I", "Henry VIII", "Charles I"],
            answerIndex: 0,
            hint: "This monarch was already king of Scotland before he came south.",
            explanation:
              "When Elizabeth I died in 1603, James VI of Scotland became James I of England and took the Lord Chamberlain's Men under his patronage as the King's Men. Elizabeth I is tempting because she reigned for most of Shakespeare's career, but a queen's company would not be 'the King's Men'.",
            guideRef: "life-and-times",
          },
          {
            id: "shk-mcq-p1-q04",
            extract: "Now o'er the one half-world\nNature seems dead, and wicked dreams abuse\nThe curtained sleep.\n(Macbeth, Act 2 Scene 1)",
            question: "Why did Shakespeare need lines like these, describing night-time, in his plays at the Globe?",
            options: [
              "Candles on the stage made the theatre too bright for night scenes",
              "Plays were performed in afternoon daylight with little scenery, so words had to create the darkness",
              "Macbeth is speaking to the witches, who need to know what time it is",
              "Descriptions filled the time while stagehands changed the heavy scenery",
            ],
            answerIndex: 1,
            hint: "When did performances at the open-air Globe take place?",
            explanation:
              "The Globe was open to the sky and plays ran in the afternoon, so 'word scenery' told the audience it was night. The scenery-change option is tempting but wrong: the Globe used very little scenery, which is exactly why description mattered. Macbeth is alone here, not with the witches.",
            guideRef: "the-globe",
          },
          {
            id: "shk-mcq-p1-q05",
            question: "Which feature is most typical of a Shakespearean comedy?",
            options: [
              "The hero is destroyed by a fatal flaw",
              "It dramatises the reign of an English king",
              "Confusion and disguise are resolved into harmony, usually with marriages",
              "It is written entirely in prose",
            ],
            answerIndex: 2,
            hint: "Think of how A Midsummer Night's Dream or Twelfth Night ends.",
            explanation:
              "Comedies move from disorder (mistaken identity, disguise, quarrels) to order, usually ending in one or more weddings. 'Written entirely in prose' is wrong: comedies mix verse and prose. The fatal-flaw option describes tragedy, and the English king option describes a history.",
            guideRef: "genres",
          },
          {
            id: "shk-mcq-p1-q06",
            question: "What is the Greek term for the fatal flaw that leads to a tragic hero's downfall?",
            options: ["Catharsis", "Soliloquy", "Volta", "Hamartia"],
            answerIndex: 3,
            hint: "It begins with the same letter as Hamlet.",
            explanation:
              "Hamartia is the tragic flaw or error (ambition, indecision, rashness) that destroys the hero. Catharsis is tempting because it is also a Greek tragedy term, but it means the audience's emotional release of pity and fear, not the hero's flaw.",
            guideRef: "genres",
          },
          {
            id: "shk-mcq-p1-q07",
            question: "Which of these plays is usually classed as one of Shakespeare's late 'romances'?",
            options: ["Hamlet", "Henry V", "The Tempest", "Romeo and Juliet"],
            answerIndex: 2,
            hint: "Look for magic, a shipwreck, separation and forgiveness.",
            explanation:
              "The Tempest, with its magic, shipwreck and ending of forgiveness and reunion, is a romance. Romeo and Juliet is tempting because it is a love story, but 'romance' here is a genre label for the late plays, and Romeo and Juliet is a tragedy.",
            guideRef: "genres",
          },
          {
            id: "shk-mcq-p1-q08",
            question: "Why is the First Folio of 1623 so important?",
            options: [
              "It preserved about half of Shakespeare's plays, which had never been printed before",
              "It was the first play ever printed in England",
              "It was Shakespeare's own autobiography, written in his final years",
              "It contained detailed lighting instructions for each scene",
            ],
            answerIndex: 0,
            hint: "Think about which plays we might have lost without it.",
            explanation:
              "Heminges and Condell collected 36 plays, about half of them (including Macbeth and The Tempest) printed for the first time. It could not be his autobiography: it was published seven years after his death by fellow actors.",
            guideRef: "life-and-times",
          },
          {
            id: "shk-mcq-p1-q09",
            question: "Where was the Globe Theatre built in 1599?",
            options: [
              "Inside the Tower of London",
              "Next to St Paul's Cathedral",
              "In Stratford-upon-Avon",
              "On Bankside in Southwark, south of the River Thames",
            ],
            answerIndex: 3,
            hint: "It was outside the control of the City of London authorities, across the river.",
            explanation:
              "The Globe stood on Bankside, Southwark, beyond the City authorities who disapproved of theatres. Stratford is tempting because of Shakespeare's link to it, but his theatre career was in London.",
            guideRef: "the-globe",
          },
          {
            id: "shk-mcq-p1-q10",
            question: "How did Macbeth (c.1606) appeal to King James I?",
            options: [
              "It mocked Scotland, which James disliked",
              "It featured witches, which fascinated James, and presented his ancestor Banquo as noble",
              "It was set in London to celebrate his new capital",
              "It showed a king who refused to have any heirs",
            ],
            answerIndex: 1,
            hint: "James wrote a book about witchcraft and traced his family tree to a character in the play.",
            explanation:
              "James had written Daemonologie about witchcraft and claimed descent from Banquo, whose descendants the witches show as kings. Mocking Scotland would have insulted the Scottish-born king, so the option ‘It mocked Scotland, which James disliked’ is wrong.",
            guideRef: "life-and-times",
          },
          {
            id: "shk-mcq-p1-q11",
            question: "What was the job of the Master of the Revels?",
            options: [
              "To lead the actors in rehearsals",
              "To compose music for the plays",
              "To read and license plays, censoring anything dangerous",
              "To collect the penny entrance fees from the groundlings",
            ],
            answerIndex: 2,
            hint: "This was a government official, not a member of the company.",
            explanation:
              "The Master of the Revels was a court official who licensed every play for performance and could cut politically or religiously risky material. 'Lead the actors in rehearsals' is tempting because 'Master' sounds like a director, but he worked for the crown, not the company.",
            guideRef: "life-and-times",
          },
          {
            id: "shk-mcq-p1-q12",
            extract: "Can this cockpit hold\nThe vasty fields of France? Or may we cram\nWithin this wooden O the very casques\nThat did affright the air at Agincourt?\n(The Chorus, Henry V, Prologue)",
            question: "What is 'this wooden O'?",
            options: [
              "The round, wooden theatre the audience is sitting in",
              "A golden crown worn by King Henry",
              "The trapdoor in the middle of the stage",
              "A barrel used as a stage prop",
            ],
            answerIndex: 0,
            hint: "Picture the theatre from above. What shape is it, and what is it made of?",
            explanation:
              "The Chorus apologises that a small, round wooden theatre must represent the huge battlefields of France, and asks the audience to use their imaginations. The crown option is tempting because the play is about a king, but the Chorus is talking about the playhouse ('cockpit').",
            guideRef: "the-globe",
          },
          {
            id: "shk-mcq-p1-q13",
            question: "Which statement best describes a soliloquy?",
            options: [
              "A character alone on stage speaks their private thoughts aloud",
              "A character makes a quick comment that others on stage cannot hear",
              "A character delivers a long speech to a crowd of listeners",
              "Two characters share a single line of verse",
            ],
            answerIndex: 0,
            hint: "'Solo' is hidden in the word.",
            explanation:
              "A soliloquy is spoken by a character alone (or believing they are alone), revealing their true thoughts. The quick, unheard comment is an aside; the long speech to listeners is a monologue, which is the most tempting confusion.",
            guideRef: "dramatic-devices",
          },
          {
            id: "shk-mcq-p1-q14",
            extract: "CLAUDIUS: But now, my cousin Hamlet, and my son—\nHAMLET [aside]: A little more than kin, and less than kind!\n(Hamlet, Act 1 Scene 2)",
            question: "Which dramatic device does Hamlet use here?",
            options: ["Soliloquy", "Monologue", "Aside", "Prologue"],
            answerIndex: 2,
            hint: "Claudius is standing right there. Does he hear the insult?",
            explanation:
              "Hamlet makes a short, bitter comment that Claudius does not hear: an aside, which lets the audience share his secret hostility. It is not a soliloquy because Hamlet is not alone and the line is very short.",
            guideRef: "dramatic-devices",
          },
          {
            id: "shk-mcq-p1-q15",
            question: "In the final scene of Romeo and Juliet, Romeo believes Juliet is dead, but the audience knows she has taken a sleeping potion. What is this device called?",
            options: ["Foreshadowing", "Comic relief", "A pun", "Dramatic irony"],
            answerIndex: 3,
            hint: "Who knows more here: the audience or the character?",
            explanation:
              "When the audience knows something a character does not, it is dramatic irony, and here it creates agonising tension. Foreshadowing is tempting, but foreshadowing hints at future events; this is about a gap in knowledge in the present moment.",
            guideRef: "dramatic-devices",
          },
          {
            id: "shk-mcq-p1-q16",
            extract: "Ask for me tomorrow, and you shall find me a grave man.\n(Mercutio, dying, Romeo and Juliet, Act 3 Scene 1)",
            question: "What makes this line a pun?",
            options: [
              "'Grave' means serious, and also a place where the dead are buried",
              "'Tomorrow' rhymes with 'sorrow'",
              "Mercutio is speaking in an aside",
              "The line is a perfect line of iambic pentameter",
            ],
            answerIndex: 0,
            hint: "Look at one word that can mean two things at once.",
            explanation:
              "A pun plays on two meanings: Mercutio will be 'grave' (serious, for once) and in his grave (dead). The 'tomorrow/sorrow' option is wrong: there is no 'sorrow' in the line, and rhyme is not a pun anyway.",
            guideRef: "dramatic-devices",
          },
          {
            id: "shk-mcq-p1-q17",
            question: "Which is the clearest example of comic relief?",
            options: [
              "The Prologue of Romeo and Juliet announcing that the lovers will die",
              "The drunken Porter joking that he is the porter of hell-gate just after Duncan's murder",
              "Hamlet's soliloquy 'To be, or not to be'",
              "The witches chanting 'Double, double toil and trouble'",
            ],
            answerIndex: 1,
            hint: "Look for humour placed right next to horror.",
            explanation:
              "The Porter's drunken jokes come immediately after the murder of Duncan, releasing tension while keeping the theme of hell. The witches' chant is tempting because it is rhythmic and strange, but it is sinister, not comic.",
            guideRef: "dramatic-devices",
          },
          {
            id: "shk-mcq-p1-q18",
            extract: "But soft, what light through yonder window breaks?\nIt is the east, and Juliet is the sun.\n(Romeo, Act 2 Scene 2)",
            question: "How does this line work as an embedded stage direction?",
            options: [
              "It tells the stagehands to light candles in the window",
              "It tells the audience it is sunrise, so the scene is set in the morning",
              "It tells the actor playing Juliet to sing",
              "It tells the actor to stop, look up and notice Juliet appearing at the window above",
            ],
            answerIndex: 3,
            hint: "'But soft' means 'wait, quiet'. What does the actor physically do?",
            explanation:
              "Embedded directions are actions built into the dialogue: 'But soft' (wait) and 'what light through yonder window' tell the actor to pause and look up as Juliet appears on the balcony. The sunrise option is tempting, but it is night; 'the east' and 'the sun' are a metaphor for Juliet.",
            guideRef: "dramatic-devices",
          },
          {
            id: "shk-mcq-p1-q19",
            question: "In Twelfth Night, Viola disguises herself as a young man. Why might this have been especially funny for Shakespeare's original audience?",
            options: [
              "Viola was played by a boy, so the audience watched a boy playing a girl playing a boy",
              "Women in the audience were not allowed to laugh at disguises",
              "Disguise plots had been banned by the Master of the Revels",
              "The actor playing Viola was usually the oldest man in the company",
            ],
            answerIndex: 0,
            hint: "Remember who played every female role at the time.",
            explanation:
              "Since boy actors played women, a girl disguised as a boy created layers of pretence that the audience could enjoy, with jokes about the 'girl' looking boyish. The 'oldest man' option is wrong: female roles were taken by boys whose voices had not broken.",
            guideRef: "the-globe",
          },
          {
            id: "shk-mcq-p1-q20",
            question: "Why might Shakespeare place the Porter's comic scene IMMEDIATELY after Duncan's murder in Macbeth?",
            options: [
              "To give the audience a break so they forget about the murder",
              "To release unbearable tension, while his jokes about hell-gate darkly remind us what has just happened",
              "Because the groundlings would leave if there were no jokes for ten minutes",
              "Because the Porter is the most important character in the play",
            ],
            answerIndex: 1,
            hint: "Comic relief does two jobs at once. What are his jokes actually about?",
            explanation:
              "Comic relief lets the audience breathe, but the Porter imagines himself as gatekeeper of hell, so the comedy sharpens our awareness of the damned act inside the castle. 'Forget about the murder' is the tempting oversimplification: the scene keeps the murder in our minds through contrast and irony.",
            guideRef: "dramatic-devices",
          },
        ],
      },
      {
        id: "shk-mcq-p2",
        title: "MCQ Paper 2",
        passage: {
          id: "rj-prologue",
          title: "The Prologue to Romeo and Juliet",
          source: "William Shakespeare, Romeo and Juliet (c.1595), Prologue: the Chorus",
          text: PROLOGUE,
          note: PROLOGUE_NOTE,
        },
        questions: [
          {
            id: "shk-mcq-p2-q01",
            question: "The Prologue has 14 lines of iambic pentameter rhyming ABAB CDCD EFEF GG. What form is it?",
            options: ["A ballad", "A Shakespearean sonnet", "A haiku", "Free verse"],
            answerIndex: 1,
            hint: "Count the lines: this is the form of 154 poems Shakespeare published in 1609.",
            explanation:
              "Fourteen lines of iambic pentameter with three quatrains and a final couplet make a Shakespearean sonnet. Free verse is wrong because the Prologue has a fixed metre and rhyme scheme; a ballad uses short four-line stanzas.",
            guideRef: "verse-prose-rhyme",
          },
          {
            id: "shk-mcq-p2-q02",
            question: "Who speaks the Prologue?",
            options: ["Romeo", "Friar Laurence", "The Chorus", "Prince Escalus"],
            answerIndex: 2,
            hint: "It is a narrator figure who stands outside the story.",
            explanation:
              "The Prologue is spoken by the Chorus, a single narrator who addresses the audience directly before the action begins. Prince Escalus is tempting because he also speaks with authority about the feud, but he is a character inside the story.",
            guideRef: "dramatic-devices",
          },
          {
            id: "shk-mcq-p2-q03",
            question: "In 'Two households, both alike in dignity', what does 'dignity' mean?",
            options: ["Pride", "Good manners", "Wealth", "Rank or status"],
            answerIndex: 3,
            hint: "The Chorus is comparing the families' position in society.",
            explanation:
              "In Shakespeare's time 'dignity' meant rank or social status: the Montagues and Capulets are equally important families. 'Good manners' is a tempting modern reading, but the families are about to fight in the streets, so the line is not praising their behaviour.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p2-q04",
            question: "What does the repetition in 'Where civil blood makes civil hands unclean' emphasise?",
            options: [
              "That citizens are killing fellow citizens, so the city's own people are stained with blood",
              "That the families are very polite to each other in public",
              "That the Prince's soldiers are keeping the peace",
              "That the lovers wash their hands before the wedding",
            ],
            answerIndex: 0,
            hint: "'Civil' means 'belonging to citizens', as in 'civil war'.",
            explanation:
              "Repeating 'civil' stresses that this is violence within one community, like a civil war: citizens' blood stains citizens' hands. There is also irony, because 'civil' can mean polite, which is exactly what the families are not, so the 'very polite' option misreads the irony as literal.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p2-q05",
            question: "What does 'star-cross'd' suggest about the lovers?",
            options: [
              "They are famous, like stars",
              "Their fate is opposed by the stars: they are doomed",
              "They meet at night under the stars",
              "They are angry with each other",
            ],
            answerIndex: 1,
            hint: "Elizabethans believed the stars could control human destiny.",
            explanation:
              "To be 'star-cross'd' is to have the stars (fate) set against you, so the lovers are doomed from the start. 'Meet at night under the stars' is tempting because of the balcony scene, but the word is about destiny, not setting.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p2-q06",
            question: "'A pair of star-cross'd lovers take their life' has a double meaning. What are the two meanings of 'take their life'?",
            options: [
              "They live long lives and die peacefully",
              "They enjoy life and take risks",
              "They are born from these families, and they will kill themselves",
              "They steal from their parents and run away",
            ],
            answerIndex: 2,
            hint: "Look at the line before: 'From forth the fatal loins of these two foes'.",
            explanation:
              "The lovers 'take their life' (are given life, born) from the two families' 'loins', and they will 'take their life' by suicide. The 'long lives' option contradicts the whole Prologue, which stresses their early deaths.",
            guideRef: "dramatic-devices",
          },
          {
            id: "shk-mcq-p2-q07",
            question: "By revealing that the lovers will die, the Prologue creates which effect throughout the play?",
            options: ["An aside", "Comic relief", "A feminine ending", "Dramatic irony"],
            answerIndex: 3,
            hint: "For the whole play, the audience knows something the characters do not.",
            explanation:
              "Because we know the ending and the characters do not, every hopeful moment is coloured by dramatic irony. An aside is a device spoken by a character, not an effect created across a whole play.",
            guideRef: "dramatic-devices",
          },
          {
            id: "shk-mcq-p2-q08",
            question: "In 'the two hours' traffic of our stage', what does 'traffic' mean?",
            options: ["Business or action", "Crowds of people", "Vehicles on a road", "Arguments"],
            answerIndex: 0,
            hint: "The Chorus is describing what the actors will do for two hours.",
            explanation:
              "'Traffic' here means business or dealings: the action that will fill the stage for about two hours. 'Crowds of people' is tempting because of the modern sense of traffic, but the line is about the performance itself.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p2-q09",
            question: "What is the purpose of the final couplet: 'The which if you with patient ears attend, / What here shall miss, our toil shall strive to mend'?",
            options: [
              "To warn the audience that the play may be cancelled",
              "To tell the audience who the villain is",
              "To ask the audience politely to listen patiently, promising the actors will work hard to make up for anything missing",
              "To announce that the play will be a comedy",
            ],
            answerIndex: 2,
            hint: "'Toil' means hard work; 'mend' means repair or improve.",
            explanation:
              "The couplet is a modest, polite appeal: if you listen patiently, our efforts will fill any gaps. The 'comedy' option is wrong because the Prologue has just told us the lovers die, which signals tragedy.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p2-q10",
            question: "Why is it ironic that the Prologue is written as a sonnet?",
            options: [
              "Sonnets were banned in Verona",
              "Sonnets were the traditional form of love poetry, yet this one is full of hatred, violence and death",
              "Sonnets are always comic",
              "Sonnets are normally written in prose",
            ],
            answerIndex: 1,
            hint: "What were sonnets usually about in Shakespeare's time?",
            explanation:
              "The sonnet was the classic form for love poetry, so using it for a story of 'grudge', 'mutiny' and 'death' blends love with violence, just like the play. Sonnets are not 'normally written in prose': they are always in verse.",
            guideRef: "verse-prose-rhyme",
          },
          {
            id: "shk-mcq-p2-q11",
            question: "How many syllables are there in 'Two households, both alike in dignity'?",
            options: ["Eleven", "Twelve", "Eight", "Ten"],
            answerIndex: 3,
            hint: "Two / house / holds / both / a / like / in / dig / ni / ty.",
            explanation:
              "Counting carefully gives ten syllables: a regular line of iambic pentameter. Students often get eleven by miscounting 'households' as three syllables; it has two.",
            guideRef: "iambic-pentameter",
          },
          {
            id: "shk-mcq-p2-q12",
            question: "In 'Doth with their death bury their parents' strife', what does 'doth' mean?",
            options: ["Does", "Did not", "Should", "Must"],
            answerIndex: 0,
            hint: "It is the old third-person form, like 'hath'.",
            explanation:
              "'Doth' is the old form of 'does' (just as 'hath' = has). 'Did not' is tempting because 'doth' looks like a contraction, but it is simply a verb form.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-mcq-p2-q13",
            question: "What does the adjective 'ancient' in 'From ancient grudge break to new mutiny' suggest?",
            options: [
              "The families are very old people",
              "The grudge is about an ancient Roman law",
              "The feud has lasted so long that its cause is lost in the past, yet it keeps flaring up",
              "The grudge has finally ended",
            ],
            answerIndex: 2,
            hint: "Notice the contrast between 'ancient' and 'new' in the same line.",
            explanation:
              "'Ancient' suggests a long-standing hatred whose origin no one remembers, contrasted with 'new mutiny', a fresh outbreak of violence. The idea that the grudge has ended is the opposite of what the line says.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p2-q14",
            question: "Which sound technique is most prominent in 'From forth the fatal loins of these two foes'?",
            options: ["Assonance of 'oo' sounds", "Alliteration of the 'f' sound", "Onomatopoeia", "A rhyming couplet"],
            answerIndex: 1,
            hint: "Look at the first letters: From, forth, fatal, foes.",
            explanation:
              "The repeated 'f' sounds (From, forth, fatal, foes) are alliteration, linking 'fatal' and 'foes' so that the families' hatred sounds deadly. There is no onomatopoeia: none of the words imitates a sound.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p2-q15",
            question: "In line 11, what does 'nought' mean?",
            options: ["Naughty", "Not yet", "Knotted", "Nothing"],
            answerIndex: 3,
            hint: "It is related to the word 'nought' in 'noughts and crosses'.",
            explanation:
              "'Nought' means nothing, as in the zero of noughts and crosses: nothing could end the parents' rage except their children's deaths. 'Naughty' is a tempting look-alike, but it does not fit the sentence.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-mcq-p2-q16",
            question: "Which is the best paraphrase of 'Which, but their children's end, nought could remove'?",
            options: [
              "Only the deaths of their children could end it",
              "Their children could remove it, but chose not to",
              "Nothing could remove their children from Verona",
              "Their children ended the feud by getting married",
            ],
            answerIndex: 0,
            hint: "'But' here means 'except', and 'end' means death.",
            explanation:
              "'But' means 'except' and 'end' means death: nothing except the children's deaths could stop the parents' rage. The marriage option is tempting, but the secret marriage does not end the feud; the deaths do.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p2-q17",
            question: "Which word rhymes with 'scene' at the end of line 2?",
            options: ["mutiny", "dignity", "unclean", "foes"],
            answerIndex: 2,
            hint: "In an ABAB pattern, line 2 rhymes with line 4.",
            explanation:
              "The first quatrain rhymes ABAB: dignity/mutiny ‘mutiny’ and scene/unclean ‘dignity’. 'Dignity' is tempting because it is near, but it rhymes with 'mutiny' in line 3.",
            guideRef: "verse-prose-rhyme",
          },
          {
            id: "shk-mcq-p2-q18",
            question: "How does knowing the ending change the way an audience watches Romeo and Juliet?",
            options: [
              "It removes all tension, because there is nothing left to discover",
              "It shifts the suspense from WHAT will happen to HOW and WHY it happens, making hopeful moments painful",
              "It makes the audience hope the Prologue is lying",
              "It means the audience can ignore the first three acts",
            ],
            answerIndex: 1,
            hint: "Think about watching a film when you already know a character will die.",
            explanation:
              "Knowing the outcome creates a different tension: we watch the lovers walk towards a fate they cannot see. The 'removes all tension' option is the tempting misjudgement; dramatic irony actually intensifies emotion.",
            guideRef: "dramatic-devices",
          },
          {
            id: "shk-mcq-p2-q19",
            question: "Which is the best interpretation of 'death-mark'd love'?",
            options: [
              "Their love is remembered with a gravestone",
              "Their love makes them dislike death",
              "Their love causes other people to die, but not them",
              "Their love is marked out for death from the beginning, like a target branded by fate",
            ],
            answerIndex: 3,
            hint: "Think of something being 'marked' in advance, as a target or a branded animal is.",
            explanation:
              "'Death-mark'd' suggests the love is labelled for destruction before it starts, reinforcing fate and foreshadowing. The 'gravestone' option is tempting because a grave carries a marker, but 'mark'd' describes the love itself, from the start.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p2-q20",
            question: "Which sentence is the best analysis of 'star-cross'd lovers'?",
            options: [
              "The compound adjective 'star-cross'd' suggests the lovers are thwarted by fate itself, so the audience watches them with pity, knowing they cannot escape.",
              "Shakespeare uses a word with a hyphen in it, which is a technique.",
              "'Star-cross'd' means the lovers are stars, which shows they are famous.",
              "This quote shows that Romeo and Juliet are lovers who are star-crossed in the play.",
            ],
            answerIndex: 0,
            hint: "The best analysis names the technique, explores meaning AND explains the effect.",
            explanation:
              "The option ‘The compound adjective 'star-cross'd' suggests the lovers are…’ names the technique, explains the connotation (fate) and the effect on the audience (pity). The option ‘This quote shows that Romeo and Juliet are lovers who are…’ is the classic weak answer: it just repeats the quotation without explaining anything.",
            guideRef: "reading-an-extract",
          },
        ],
      },
      {
        id: "shk-mcq-p3",
        title: "MCQ Paper 3",
        questions: [
          {
            id: "shk-mcq-p3-q01",
            question: "What is an iamb?",
            options: [
              "A stressed syllable followed by an unstressed one",
              "An unstressed syllable followed by a stressed one",
              "Two stressed syllables together",
              "A line of exactly ten syllables",
            ],
            answerIndex: 1,
            hint: "Say 'today' or 'believe' aloud: da-DUM.",
            explanation:
              "An iamb is unstressed then stressed (da-DUM), as in 'a-WAKE'. The option ‘A stressed syllable followed by an unstressed one’ is a trochee (DUM-da), its mirror image and the most common confusion. A ten-syllable line is a line of pentameter, not a single iamb.",
            guideRef: "iambic-pentameter",
          },
          {
            id: "shk-mcq-p3-q02",
            question: "In 'iambic pentameter', what does 'pentameter' tell you?",
            options: ["Ten feet in a line", "Four feet in a line", "Six feet in a line", "Five feet in a line"],
            answerIndex: 3,
            hint: "'Penta-' as in pentagon.",
            explanation:
              "'Pentameter' means five metrical feet per line; with iambs (two syllables each) that makes ten syllables. 'Ten feet' is tempting because there are ten syllables, but a foot contains two syllables.",
            guideRef: "iambic-pentameter",
          },
          {
            id: "shk-mcq-p3-q03",
            question: "What is blank verse?",
            options: [
              "Unrhymed iambic pentameter",
              "Rhyming couplets of iambic pentameter",
              "Prose written with no punctuation",
              "Verse with no regular rhythm at all",
            ],
            answerIndex: 0,
            hint: "'Blank' refers to the missing rhyme, not the missing rhythm.",
            explanation:
              "Blank verse keeps the iambic pentameter rhythm but has no rhyme; it is Shakespeare's main dramatic verse form. 'No regular rhythm' describes free verse, which is the tempting confusion.",
            guideRef: "verse-prose-rhyme",
          },
          {
            id: "shk-mcq-p3-q04",
            extract: "But soft, what light through yonder window breaks?\n(Romeo, Act 2 Scene 2)",
            question: "Which syllables carry the stresses when this line is scanned as iambic pentameter?",
            options: [
              "But, what, through, -der, -dow",
              "But, soft, what, light, through",
              "soft, light, yon-, win-, breaks",
              "Every syllable is stressed equally",
            ],
            answerIndex: 2,
            hint: "Tap da-DUM five times: the stress falls on every second syllable.",
            explanation:
              "Scanned as iambs, the stresses fall on the even syllables: soft, light, YON-der, WIN-dow, breaks, which are also the most meaningful words. The option ‘But, what, through, -der, -dow’ lists the unstressed syllables, the exact reverse.",
            guideRef: "iambic-pentameter",
          },
          {
            id: "shk-mcq-p3-q05",
            question: "Which of these lines has a feminine ending (an extra unstressed eleventh syllable)?",
            options: [
              "Shall I compare thee to a summer's day?",
              "But soft, what light through yonder window breaks?",
              "To be, or not to be, that is the question",
              "Two households, both alike in dignity",
            ],
            answerIndex: 2,
            hint: "Count the syllables. Which line ends on a weak, falling syllable?",
            explanation:
              "'To be, or not to be, that is the question' has eleven syllables, ending on the unstressed '-tion'. The other three have exactly ten. 'Two households...' is tempting because '-ty' sounds weak, but it is the tenth syllable, so there is no extra one.",
            guideRef: "breaking-the-rhythm",
          },
          {
            id: "shk-mcq-p3-q06",
            question: "Which line begins with a trochaic inversion (DUM-da instead of da-DUM)?",
            options: [
              "But soft, what light through yonder window breaks?",
              "Now is the winter of our discontent",
              "Two households, both alike in dignity",
              "In fair Verona, where we lay our scene",
            ],
            answerIndex: 1,
            hint: "Which line hits its very first word hard?",
            explanation:
              "'NOW is' flips the first iamb into a trochee, giving Richard's opening soliloquy a commanding punch. 'In fair Verona' starts regularly: in-FAIR, a normal iamb.",
            guideRef: "breaking-the-rhythm",
          },
          {
            id: "shk-mcq-p3-q07",
            extract: "Double, double toil and trouble;\nFire burn and cauldron bubble.\n(The Witches, Macbeth, Act 4 Scene 1)",
            question: "How does the witches' rhythm differ from the iambic pentameter of the human characters?",
            options: [
              "It is exactly the same, to show the witches are human",
              "It is prose, with no rhythm at all",
              "It is blank verse with feminine endings",
              "It uses short rhyming lines in a falling trochaic rhythm (DUM-da), like a chant or spell",
            ],
            answerIndex: 3,
            hint: "Say 'DOU-ble, DOU-ble' aloud. Where does the stress fall, and how long are the lines?",
            explanation:
              "The witches use shorter lines in trochaic metre (four beats, stressed then unstressed), with rhyme, which sounds hypnotic and unnatural, setting them apart from humans. It cannot be blank verse: blank verse is unrhymed pentameter, and these lines rhyme.",
            guideRef: "breaking-the-rhythm",
          },
          {
            id: "shk-mcq-p3-q08",
            extract: "LADY MACBETH: Did not you speak?\nMACBETH: When?\nLADY MACBETH: Now.\nMACBETH: As I descended?\n(Macbeth, Act 2 Scene 2, just after Duncan's murder)",
            question: "These fragments together form one shared line of verse. What is the most likely effect?",
            options: [
              "Rapid, broken exchanges that sound like frightened whispers, showing panic and tension",
              "A calm, relaxed conversation between a happy couple",
              "A comic exchange intended to make the groundlings laugh",
              "A soliloquy in which Macbeth reveals his thoughts",
            ],
            answerIndex: 0,
            hint: "Think about when this happens and how short each part is.",
            explanation:
              "The tiny fragments, picked up instantly, create a jittery, whispered rhythm that conveys terror and guilt just after the murder. It cannot be a soliloquy, because two characters are speaking to each other.",
            guideRef: "breaking-the-rhythm",
          },
          {
            id: "shk-mcq-p3-q09",
            question: "In Shakespeare's plays, prose is most often associated with which of these?",
            options: [
              "Kings declaring war",
              "Lovers in serious, passionate moments",
              "Comedy, lower-status characters, letters, and madness",
              "Supernatural spells",
            ],
            answerIndex: 2,
            hint: "Think of the Porter, the Gravediggers and Lady Macbeth sleepwalking.",
            explanation:
              "Prose often signals comedy, informality, lower status, documents or a mind that has broken down. Supernatural spells are tempting but are usually in rhyme and short lines, not prose.",
            guideRef: "verse-prose-rhyme",
          },
          {
            id: "shk-mcq-p3-q10",
            extract: "Out, damned spot! out, I say! One: two: why, then 'tis time to do't. Hell is murky!\n(Lady Macbeth, sleepwalking, Macbeth, Act 5 Scene 1)",
            question: "Lady Macbeth usually speaks commanding blank verse. What does her switch to prose here suggest?",
            options: [
              "She has become a servant",
              "Her controlled mind has broken down under guilt",
              "She is making a joke to lighten the mood",
              "She is reading out a letter",
            ],
            answerIndex: 1,
            hint: "What is her state of mind while sleepwalking?",
            explanation:
              "The loss of verse mirrors the loss of control: her guilt has shattered the confident woman of Act 1. The 'reading a letter' option is tempting because she does read a letter in prose in Act 1, but here she is reliving the murder in her sleep.",
            guideRef: "verse-prose-rhyme",
          },
          {
            id: "shk-mcq-p3-q11",
            extract: "The play's the thing\nWherein I'll catch the conscience of the king.\n(Hamlet, end of Act 2)",
            question: "Why does Shakespeare often end a scene with a rhyming couplet like this?",
            options: [
              "Because actors forgot their lines without rhyme",
              "Because the Master of the Revels required it",
              "To show the speaker is a supernatural creature",
              "To create a clear, satisfying sense of closure in a theatre with no curtain",
            ],
            answerIndex: 3,
            hint: "How would the audience know a scene had ended at the Globe?",
            explanation:
              "With no curtain or lighting change, a rhyming couplet 'clicks' a scene shut and leaves a memorable final idea. Supernatural characters do use rhyme, but Hamlet is human, so that option does not explain this couplet.",
            guideRef: "verse-prose-rhyme",
          },
          {
            id: "shk-mcq-p3-q12",
            question: "If a servant addressed a king as 'thou', how would it sound to an Elizabethan audience?",
            options: [
              "Shockingly rude or over-familiar",
              "Extremely respectful",
              "Normal and polite",
              "Like a sign that the servant is speaking to more than one person",
            ],
            answerIndex: 0,
            hint: "'Thou' was for equals, family, inferiors... and insults.",
            explanation:
              "'Thou' was the familiar form, so using it to a superior would be insolent. 'Extremely respectful' is the tempting modern assumption, because 'thou' sounds old and formal to us, but the respectful form was 'you'.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-mcq-p3-q13",
            extract: "GERTRUDE: Hamlet, thou hast thy father much offended.\nHAMLET: Mother, you have my father much offended.\n(Hamlet, Act 3 Scene 4)",
            question: "What does Hamlet's switch from his mother's 'thou' to 'you' most suggest?",
            options: [
              "He is speaking to several people at once",
              "He has forgotten the correct grammar",
              "He is distancing himself from her and turning her rebuke into an accusation",
              "He feels especially close and affectionate towards her",
            ],
            answerIndex: 2,
            hint: "'You' is formal. Why would a son suddenly be formal with his mother?",
            explanation:
              "By refusing the familiar 'thou' and echoing her sentence with 'you', Hamlet becomes cold and accusing, throwing her words back at her. 'Several people' is tempting because 'you' can be plural, but he is clearly addressing Gertrude alone ('Mother').",
            guideRef: "archaic-language",
          },
          {
            id: "shk-mcq-p3-q14",
            question: "Which word correctly fills the gap: 'I will remember ___ eyes for ever'?",
            options: ["thou", "thine", "thee", "thy's"],
            answerIndex: 1,
            hint: "Which form goes before a word starting with a vowel, like 'mine eyes'?",
            explanation:
              "'Thine' is the possessive used before a vowel sound (like 'mine eyes'), so 'thine eyes'. 'Thee' is the object form ('I love thee'), not a possessive. 'Thy' would be used before a consonant, and 'thy's' is not a word.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-mcq-p3-q15",
            question: "In 'He hath a noble heart', what does 'hath' mean?",
            options: ["Had", "Hates", "Is", "Has"],
            answerIndex: 3,
            hint: "-th endings are the old version of our -s endings.",
            explanation:
              "'Hath' is the old third-person form of 'has', just as 'doth' = does. 'Had' is tempting, but 'hath' is present tense.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-mcq-p3-q16",
            question: "A servant says, 'I will come anon.' What does 'anon' mean?",
            options: ["Soon, at once", "Never", "Alone", "Without being seen"],
            answerIndex: 0,
            hint: "It is a word about time.",
            explanation:
              "'Anon' means soon or right away. 'Without being seen' is tempting because it looks like 'anonymous', but the two words are unrelated.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-mcq-p3-q17",
            question: "What is the full form of the contraction ''tis'?",
            options: ["This is", "It was", "It is", "There is"],
            answerIndex: 2,
            hint: "The apostrophe replaces a missing letter at the start.",
            explanation:
              "''Tis' is short for 'it is' (the 'i' of 'it' is dropped). 'It was' would be ''twas'.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-mcq-p3-q18",
            question: "Why does Shakespeare often write 'o'er' instead of 'over' or 'ne'er' instead of 'never'?",
            options: [
              "To make the words look more old-fashioned on the page",
              "To squeeze two syllables into one so the line fits the ten-syllable metre",
              "Because printers ran out of the letter 'v'",
              "To show that the character has a regional accent",
            ],
            answerIndex: 1,
            hint: "Count the syllables in 'over' and in 'o'er'.",
            explanation:
              "This squeezing, called elision, turns two syllables into one to keep the iambic pentameter regular. 'To look old-fashioned' is tempting to modern eyes, but these were normal contractions of the time, used for rhythm.",
            guideRef: "iambic-pentameter",
          },
          {
            id: "shk-mcq-p3-q19",
            question: "In The Tempest, the 'monster' Caliban speaks beautiful blank verse ('Be not afeard; the isle is full of noises') while the European butler Stephano answers in prose. Which interpretation is best supported?",
            options: [
              "Shakespeare made a mistake and forgot Caliban was a servant",
              "Prose is always more beautiful than verse",
              "Stephano is the hero of the play",
              "Shakespeare challenges the audience's assumption that the 'civilised' Europeans are superior to Caliban",
            ],
            answerIndex: 3,
            hint: "Remember that verse usually belongs to higher-status characters.",
            explanation:
              "By breaking the usual verse/prose pattern, Shakespeare gives the servant the finer, more sensitive language, inviting us to question who is truly 'savage'. A 'mistake' is very unlikely: the contrast in the same scene is too pointed.",
            guideRef: "verse-prose-rhyme",
          },
          {
            id: "shk-mcq-p3-q20",
            question: "Some editions print 'cursèd' with an accent on the 'e'. What does the accent tell the actor?",
            options: [
              "Sound the extra syllable (CUR-sed) so the line keeps its ten-syllable rhythm",
              "Say the word in a French accent",
              "Shout the word",
              "Skip the word entirely",
            ],
            answerIndex: 0,
            hint: "It is the opposite of elision.",
            explanation:
              "The accent shows that '-ed' is pronounced as a separate syllable, needed for the metre. 'Shout the word' is tempting because accents can look like stress marks, but here it only tells you to sound the syllable.",
            guideRef: "iambic-pentameter",
          },
        ],
      },
      {
        id: "shk-mcq-p4",
        title: "MCQ Paper 4",
        passage: {
          id: "seven-ages",
          title: "'All the world's a stage' (the Seven Ages of Man)",
          source: "William Shakespeare, As You Like It (c.1599), Act 2 Scene 7: Jaques",
          text: JAQUES,
          note: JAQUES_NOTE,
        },
        questions: [
          {
            id: "shk-mcq-p4-q01",
            question: "Jaques speaks this to Duke Senior and his followers, who are listening. What kind of speech is it?",
            options: ["A soliloquy", "An aside", "A monologue", "A prologue"],
            answerIndex: 2,
            hint: "He is not alone, and it is far too long to be a quick remark.",
            explanation:
              "A long speech delivered to other characters who are present and listening is a monologue. 'Soliloquy' is the tempting answer for any famous long speech, but a soliloquy requires the speaker to be alone (or think they are).",
            guideRef: "dramatic-devices",
          },
          {
            id: "shk-mcq-p4-q02",
            question: "What is the central technique of the whole speech?",
            options: [
              "An extended metaphor comparing life to a play",
              "A rhyming couplet repeated throughout",
              "Dramatic irony about a secret plot",
              "Onomatopoeia imitating the sounds of the forest",
            ],
            answerIndex: 0,
            hint: "Look at 'stage', 'players', 'exits', 'entrances', 'parts' and 'scene'.",
            explanation:
              "The comparison of life to a play runs through the entire speech (stage, players, exits, entrances, parts, acts, scene), making it an extended metaphor. There are no repeated rhyming couplets: the speech is in blank verse.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p4-q03",
            question: "Within the metaphor, what does 'His acts being seven ages' mean?",
            options: [
              "Each man performs seven different plays",
              "A man must act seven times before he is famous",
              "Life is divided into seven acts of performance on seven different evenings",
              "A man's life-play is divided into seven stages, like the acts of a play",
            ],
            answerIndex: 3,
            hint: "Plays are divided into 'acts'. What are the 'ages'?",
            explanation:
              "Just as a play is divided into acts, a life is divided into seven ages, from infant to old age. The 'seven different plays' option is tempting, but Jaques describes one play (a single life) with seven parts.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p4-q04",
            question: "What is the effect of describing the infant as 'Mewling and puking in the nurse's arms'?",
            options: [
              "It presents babies as sweet and innocent",
              "The ugly, noisy verbs make the first age unglamorous and comic",
              "It shows the nurse is cruel",
              "It foreshadows the baby becoming a soldier",
            ],
            answerIndex: 1,
            hint: "What do 'mewling' (whimpering) and 'puking' (vomiting) sound like?",
            explanation:
              "The harsh, almost onomatopoeic verbs strip away any sentimentality: from the start, Jaques presents life as messy and undignified. 'Sweet and innocent' is the opposite of the effect of 'puking'.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p4-q05",
            question: "Which technique is used in 'creeping like snail / Unwillingly to school'?",
            options: ["Personification", "Metaphor", "Simile", "Oxymoron"],
            answerIndex: 2,
            hint: "Look for the word 'like'.",
            explanation:
              "The comparison uses 'like', so it is a simile: the schoolboy moves as slowly as a snail, showing how much he does not want to go. Metaphor is the tempting near-miss, but a metaphor compares without 'like' or 'as'.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p4-q06",
            question: "What does 'Sighing like furnace' suggest about the lover?",
            options: [
              "His sighs are hot, loud and exaggerated, mocking his over-the-top passion",
              "He works as a blacksmith",
              "He is calm and patient in love",
              "He is ill with a fever",
            ],
            answerIndex: 0,
            hint: "Think about the sound and heat of a furnace.",
            explanation:
              "Comparing his sighs to a roaring furnace exaggerates his passion to the point of comedy: Jaques mocks young lovers. 'Ill with a fever' takes the heat too literally; the image is about emotional excess.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p4-q07",
            question: "Why is it funny that the lover writes 'a woeful ballad / Made to his mistress' eyebrow'?",
            options: [
              "Eyebrows were a fashionable subject for serious poems",
              "His mistress has asked him to write it",
              "Ballads were always comic songs",
              "Writing a whole sad song about an eyebrow shows how absurd and exaggerated young love is",
            ],
            answerIndex: 3,
            hint: "Is an eyebrow a sensible subject for a sorrowful song?",
            explanation:
              "Choosing such a tiny, silly subject for a 'woeful' (sorrowful) song mocks the lover's self-important melodrama. The 'fashionable subject' option is a trap: the humour depends on the subject being ridiculous.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p4-q08",
            question: "What does the metaphor 'the bubble reputation' suggest?",
            options: [
              "Reputation is something that grows larger every year",
              "Reputation is attractive but fragile and empty, and can burst in an instant",
              "The soldier enjoys blowing bubbles",
              "Reputation is as strong as a cannon",
            ],
            answerIndex: 1,
            hint: "What happens to a bubble when you touch it?",
            explanation:
              "A bubble is shiny but hollow and pops instantly, so the soldier risks his life ('Even in the cannon's mouth') for something worthless and short-lived. 'Grows larger' focuses on the swelling of a bubble but ignores its fragility, which is the point.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p4-q09",
            question: "The justice is 'Full of wise saws and modern instances'. What are 'saws'?",
            options: ["Carpentry tools", "Bribes", "Sayings or proverbs", "Legal punishments"],
            answerIndex: 2,
            hint: "It is related to 'say'.",
            explanation:
              "'Saws' are old sayings or proverbs, and 'modern instances' are commonplace examples: the justice is full of clichés. 'Carpentry tools' is the tempting modern meaning, but it makes no sense here.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-mcq-p4-q10",
            question: "What is a 'pantaloon' in the sixth age?",
            options: [
              "A foolish old man, a stock figure from Italian comedy",
              "A pair of trousers",
              "A brave old soldier",
              "A judge in retirement",
            ],
            answerIndex: 0,
            hint: "The next lines mention spectacles, a pouch and stockings now far too big.",
            explanation:
              "The pantaloon was a stock character in Italian comedy: a foolish, skinny old man. 'A pair of trousers' is tempting (the word 'pantaloons' later came to mean trousers), but here it describes the man.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p4-q11",
            question: "What does 'sans' mean in 'Sans teeth, sans eyes, sans taste, sans everything'?",
            options: ["With", "Lots of", "Strong", "Without"],
            answerIndex: 3,
            hint: "It is borrowed from French.",
            explanation:
              "'Sans' (from French) means 'without': the old man loses his teeth, sight, taste and finally everything. 'With' is the exact opposite, a common slip.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-mcq-p4-q12",
            question: "How is the speech structured?",
            options: [
              "It moves randomly between the ages",
              "Chronologically from birth to death, ending in 'second childishness', so life comes full circle",
              "It starts with old age and moves backwards to infancy",
              "It is a dialogue between seven different characters",
            ],
            answerIndex: 1,
            hint: "Look at the order of the ages and the phrase 'second childishness'.",
            explanation:
              "The speech moves in order from infant to old age, and 'second childishness' links the final age back to the first, creating a circular structure. It is not a dialogue: Jaques describes all seven figures himself.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p4-q13",
            question: "How does the phrase 'Last scene of all' continue the speech's main idea?",
            options: [
              "It suggests Jaques is about to leave the stage",
              "It introduces a new metaphor about painting",
              "It continues the theatre metaphor: death is the final scene of life's play",
              "It is a stage direction telling the actors to exit",
            ],
            answerIndex: 2,
            hint: "Which earlier words also come from the theatre?",
            explanation:
              "'Last scene' completes the extended metaphor begun with 'stage' and 'players': death is the end of the play. It is not a printed stage direction; it is part of Jaques' spoken verse.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p4-q14",
            question: "What does 'mere oblivion' mean here?",
            options: [
              "Complete forgetfulness and nothingness",
              "A short rest",
              "A happy retirement",
              "A famous reputation",
            ],
            answerIndex: 0,
            hint: "In Shakespeare 'mere' often means 'complete' or 'utter'.",
            explanation:
              "'Mere' meant total or absolute, and 'oblivion' is a state of forgetting or being forgotten: old age ends in utter nothingness. 'A short rest' is too gentle for the bleak tone of the final lines.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p4-q15",
            question: "According to the Oxford English Dictionary, Shakespeare is the earliest recorded user of which of these words?",
            options: ["Water", "Mother", "King", "Assassination"],
            answerIndex: 3,
            hint: "Basic everyday words go back to Old English, a thousand years ago.",
            explanation:
              "The OED's earliest recorded example of 'assassination' is in Macbeth ('If th' assassination / Could trammel up the consequence'). Words like 'water', 'mother' and 'king' existed in Old English centuries before Shakespeare.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-mcq-p4-q16",
            question: "The phrase 'the green-eyed monster', meaning jealousy, comes from which play?",
            options: ["Hamlet", "Othello", "The Tempest", "Romeo and Juliet"],
            answerIndex: 1,
            hint: "It is spoken by Iago, a villain who stirs up jealousy.",
            explanation:
              "Iago warns Othello of jealousy, 'the green-eyed monster', in Othello Act 3 Scene 3. Hamlet is tempting because it is so often quoted, but this phrase belongs to Othello.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-mcq-p4-q17",
            question: "Which character's banter gives us the earliest recorded use of the phrase 'wild-goose chase'?",
            options: ["Hamlet", "Prospero", "Mercutio", "Jaques"],
            answerIndex: 2,
            hint: "He is Romeo's quick-witted friend, famous for puns.",
            explanation:
              "Mercutio uses 'wild-goose chase' in a battle of wits with Romeo (Romeo and Juliet, Act 2 Scene 4). Jaques is tempting because his speech is in this paper, but the phrase is not his.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-mcq-p4-q18",
            question: "Why do careful writers say Shakespeare is the 'earliest recorded user' of a word rather than that he 'invented' it?",
            options: [
              "Because the word may already have been spoken; his is simply the first surviving written use",
              "Because Shakespeare stole all his words from other writers",
              "Because no dictionaries existed until the 1900s",
              "Because it sounds more impressive",
            ],
            answerIndex: 0,
            hint: "What can written records prove, and what can they not?",
            explanation:
              "Written evidence only shows the first surviving use; people may have been saying the word already, and researchers keep finding earlier examples. 'Stole all his words' is an exaggeration with no evidence.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-mcq-p4-q19",
            question: "Straight after this speech, Orlando enters carrying Adam, his loyal and generous old servant. How does this entrance comment on Jaques' speech?",
            options: [
              "It proves that Jaques is completely correct about old age",
              "It shows that Orlando has not been listening",
              "It is a comic interruption with no link to the speech",
              "It challenges Jaques' bleak picture: Adam is old but full of loyalty and worth, not 'sans everything'",
            ],
            answerIndex: 3,
            hint: "Does Adam fit Jaques' description of the 'last scene of all'?",
            explanation:
              "Adam is old and weak but deeply loyal and loving, so Shakespeare's staging questions Jaques' cynical claim that old age is 'mere oblivion'. The option ‘It proves that Jaques is completely correct about old age’ is tempting because Adam is physically frail, but his character contradicts Jaques' idea that old age has nothing of value.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-mcq-p4-q20",
            question: "Which is the best paraphrase of 'His youthful hose, well saved, a world too wide / For his shrunk shank'?",
            options: [
              "He has saved money from his youth to buy new clothes",
              "The stockings he has kept carefully since youth are now far too big for his shrunken legs",
              "He travels the world wearing the same stockings",
              "His legs have grown stronger with age",
            ],
            answerIndex: 1,
            hint: "'Hose' are stockings or breeches; 'shank' means leg.",
            explanation:
              "He still wears the stockings he looked after ('well saved') from his youth, but his legs have shrunk so much that they are 'a world too wide'. 'A world' is an exaggeration meaning 'far', not literal travel.",
            guideRef: "reading-an-extract",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "shk-qa-p1",
        title: "Written Paper 1",
        passage: {
          id: "sonnet-18",
          title: "Sonnet 18: 'Shall I compare thee to a summer's day?'",
          source: "William Shakespeare, Sonnets (1609), Sonnet 18",
          text: SONNET18,
          note: SONNET18_NOTE,
        },
        questions: [
          {
            id: "shk-qa-p1-q01",
            question: "Paraphrase lines 1–2 in modern English.",
            marks: 2,
            hint: "'Temperate' means mild and even-tempered.",
            modelAnswer:
              "Should I compare you to a summer's day? You are more beautiful than summer, and gentler and more even-tempered too.",
            markScheme: [
              { point: "Asks whether to compare the person to a summer's day", keywords: ["compare you", "compare", "summer's day", "summer day", "should i"] },
              { point: "Says they are lovelier and milder/gentler than summer", keywords: ["more beautiful", "lovelier", "more lovely", "gentler", "milder", "calmer", "even-tempered", "temperate"] },
            ],
            commonError: "Copying the original words instead of putting them into modern English, or translating 'temperate' as 'hot'.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-qa-p1-q02",
            question: "Name the poetic form of Sonnet 18 and describe its rhyme scheme.",
            marks: 2,
            hint: "Count the lines and track the rhyming words: day/May, temperate/date...",
            modelAnswer:
              "It is a Shakespearean (English) sonnet: fourteen lines of iambic pentameter. It rhymes ABAB CDCD EFEF GG, which is three quatrains followed by a rhyming couplet.",
            markScheme: [
              { point: "Identifies a Shakespearean/English sonnet of 14 lines", keywords: ["sonnet", "fourteen", "14 lines", "shakespearean", "english sonnet"] },
              { point: "Gives the rhyme scheme / three quatrains and a couplet", keywords: ["abab", "cdcd", "efef", "gg", "quatrain", "couplet"] },
            ],
            commonError: "Calling it a Petrarchan sonnet, which has a different rhyme scheme (an octave and a sestet).",
            guideRef: "verse-prose-rhyme",
          },
          {
            id: "shk-qa-p1-q03",
            question: "Line 9 begins with 'But'. Explain how the poem changes direction (the volta) at this point.",
            marks: 3,
            hint: "What have lines 1–8 been about, and what is promised in lines 9–14?",
            modelAnswer:
              "Lines 1–8 list summer's faults: rough winds, a short 'lease', a sun that is too hot or 'dimm'd', and the fact that all beauty fades. At line 9 the word 'But' marks the volta, or turn: the speaker now claims the beloved's 'eternal summer shall not fade'. The poem moves from the weakness and decay of real summer to the permanence of the beloved, preserved in poetry, which prepares for the confident final couplet.",
            markScheme: [
              { point: "Lines 1–8 focus on summer's flaws / beauty fading", keywords: ["flaw", "fault", "fade", "decline", "too hot", "short", "imperfect", "rough winds"] },
              { point: "Identifies 'But' as the volta / turn", keywords: ["volta", "turn", "shift", "change direction", "line 9", "however"] },
              { point: "After the turn: the beloved's beauty is eternal / will not fade", keywords: ["eternal", "not fade", "for ever", "forever", "permanent", "last", "immortal"] },
            ],
            commonError: "Saying the volta is in the final couplet. In this sonnet the main turn comes at line 9.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-qa-p1-q04",
            question: "Analyse the line 'And summer's lease hath all too short a date'.",
            marks: 3,
            hint: "What is a lease, and when does it run out?",
            modelAnswer:
              "Shakespeare uses a legal metaphor: summer is like a 'lease', a rental agreement that ends on a fixed date. This suggests summer does not really belong to us; it is only borrowed and must be handed back. The phrase 'all too short' emphasises how quickly it ends, presenting summer, and by extension all natural beauty, as temporary.",
            markScheme: [
              { point: "Identifies the metaphor (legal/contract)", keywords: ["metaphor", "legal", "contract", "rent", "lease"] },
              { point: "Explains that summer is borrowed/temporary and must end", keywords: ["borrow", "temporary", "end", "fixed date", "expire", "runs out", "not own"] },
              { point: "Comments on 'all too short' / effect: beauty is fleeting", keywords: ["too short", "fleeting", "quickly", "brief", "transient", "time"] },
            ],
            commonError: "Treating 'date' as a romantic date rather than the end date of a lease.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-qa-p1-q05",
            question: "Identify the technique in 'the eye of heaven' and explain its effect.",
            marks: 2,
            hint: "What is being described, and how?",
            modelAnswer:
              "'The eye of heaven' is a metaphor (and personification) for the sun, giving it a human eye that watches from the sky. This makes the sun seem powerful and all-seeing, yet the poem then shows that even this mighty sun is flawed: it is 'too hot' or 'dimm'd' by clouds.",
            markScheme: [
              { point: "Identifies metaphor/personification for the sun", keywords: ["metaphor", "personification", "personifies", "sun"] },
              { point: "Explains effect: powerful/watching, yet still flawed", keywords: ["powerful", "watch", "all-seeing", "flawed", "too hot", "dimm", "human"] },
            ],
            commonError: "Saying 'the eye of heaven' refers to God without linking it to the sun shining in the same line.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-qa-p1-q06",
            question: "Count the syllables in line 1 and name its metre.",
            marks: 2,
            hint: "Shall / I / com / pare...",
            modelAnswer:
              "Line 1 has ten syllables (Shall / I / com / pare / thee / to / a / sum / mer's / day). It is iambic pentameter: five iambs, each an unstressed syllable followed by a stressed one, e.g. shall I com-PARE thee TO a SUM-mer's DAY (the stresses fall on I, -PARE, TO, SUM- and DAY).",
            markScheme: [
              { point: "Ten syllables", keywords: ["ten syllables", "10 syllables", "ten", "10", "ten beats"] },
              { point: "Names iambic pentameter (five iambs / da-DUM)", keywords: ["iambic", "pentameter", "five iambs", "da-dum", "iamb"] },
            ],
            commonError: "Counting 'summer's' as one syllable and getting nine.",
            guideRef: "iambic-pentameter",
          },
          {
            id: "shk-qa-p1-q07",
            question: "Line 5, 'Sometime too hot the eye of heaven shines', begins with a stressed syllable: SOME-time. Name this variation and explain its effect.",
            marks: 3,
            hint: "Which foot is flipped, and what does a stress on the first word do?",
            modelAnswer:
              "The line begins with a trochaic inversion: the first foot is a trochee (SOME-time, stressed then unstressed) instead of an iamb. This puts weight on the opening word and breaks the smooth rhythm at the very moment the speaker describes the sun becoming 'too hot', so the disrupted metre mirrors summer's harshness and unreliability.",
            markScheme: [
              { point: "Names trochaic inversion / trochee", keywords: ["trochaic", "trochee", "inversion", "inverted", "reversed foot"] },
              { point: "Explains it emphasises the first word / breaks the rhythm", keywords: ["emphasis", "emphasise", "emphasize", "stress", "break", "disrupt", "jolt"] },
              { point: "Links effect to meaning: summer is harsh/unreliable/too hot", keywords: ["harsh", "unreliable", "too hot", "imperfect", "flaw", "uncomfortable"] },
            ],
            commonError: "Naming the feature correctly but not linking it to what the line describes.",
            guideRef: "breaking-the-rhythm",
          },
          {
            id: "shk-qa-p1-q08",
            question: "Why does the speaker address the beloved as 'thee' and 'thou' rather than 'you'?",
            marks: 2,
            hint: "Which form was familiar and which was formal?",
            modelAnswer:
              "'Thou' and 'thee' were the familiar, intimate forms of 'you', used for loved ones and close friends. By using them, the speaker creates a sense of tenderness and closeness, as if speaking privately to someone he loves rather than formally addressing a superior.",
            markScheme: [
              { point: "Thou/thee were familiar/informal forms", keywords: ["familiar", "informal", "singular", "close", "loved ones"] },
              { point: "Effect: intimacy/tenderness/love", keywords: ["intimacy", "intimate", "tender", "affection", "love", "closeness", "personal"] },
            ],
            commonError: "Saying 'thou' is more formal and respectful; it was the opposite.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-qa-p1-q09",
            question: "Analyse the final couplet: 'So long as men can breathe or eyes can see, / So long lives this, and this gives life to thee.' What claim does the speaker make, and how does the language support it?",
            marks: 4,
            hint: "What is 'this'? Look at the repetition and the rhyming couplet form.",
            modelAnswer:
              "The speaker claims that his poem ('this') will keep the beloved alive for as long as humans exist to read it. The repetition of 'So long' stresses endurance, and the repetition of 'this' points proudly to the poem itself. The rhyming couplet ('see'/'thee') gives the ending a confident, final click, like a promise being sealed. The poem therefore argues that art can defeat time and Death, a claim proved true every time someone reads it today.",
            markScheme: [
              { point: "Claim: the poem will make the beloved live for ever / immortal", keywords: ["immortal", "for ever", "forever", "live on", "eternal", "survive", "outlast", "keep the beloved alive", "never die"] },
              { point: "Identifies 'this' as the poem itself", keywords: ["the poem", "this poem", "poetry", "the sonnet", "verse", "lines"] },
              { point: "Comments on repetition of 'So long' / 'this'", keywords: ["repetition", "repeat", "so long", "anaphora"] },
              { point: "Comments on the rhyming couplet's confident/final effect, or art defeating time", keywords: ["couplet", "rhyme", "confident", "final", "conclusion", "defeat time", "art"] },
            ],
            commonError: "Saying the beloved will literally never die rather than living on through the poem.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-qa-p1-q10",
            question: "How is Death presented in line 11, 'Nor shall Death brag thou wander'st in his shade'?",
            marks: 3,
            hint: "Notice the capital letter and the verb 'brag'.",
            modelAnswer:
              "Death is personified with a capital letter and given the human action of boasting ('brag'), as if he is an arrogant enemy who likes to show off the people he has captured. 'His shade' suggests the dark shadow of the underworld. By saying Death 'shall' not brag, the speaker defies him, suggesting poetry is strong enough to defeat even Death.",
            markScheme: [
              { point: "Identifies personification of Death", keywords: ["personification", "personified", "personifies", "capital", "human"] },
              { point: "Explains 'brag': arrogant, boastful enemy", keywords: ["brag", "boast", "arrogant", "proud", "show off", "enemy"] },
              { point: "Explains the speaker defies/defeats Death through poetry; or 'shade' = darkness/underworld", keywords: ["defy", "defeat", "power", "shade", "shadow", "dark", "underworld"] },
            ],
            commonError: "Identifying personification but not explaining what 'brag' suggests.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-qa-p1-q11",
            question: "Write one line of your own in iambic pentameter about a modern summer's day. Then mark which syllables are stressed by writing them in CAPITALS.",
            marks: 2,
            hint: "Aim for ten syllables alternating da-DUM. Try reading it aloud while tapping.",
            modelAnswer:
              "the TRAFF-ic HUMS, the PAVE-ments SHINE with HEAT. Ten syllables, five iambs, with stresses on TRAFF-, HUMS, PAVE-, SHINE and HEAT.",
            markScheme: [
              { point: "Writes a ten-syllable line on the topic", keywords: ["ten", "10", "summer", "sun", "heat", "beach", "day"] },
              { point: "Marks five stresses alternating unstressed/stressed (iambs)", keywords: ["five", "5", "iamb", "stress", "capitals", "da-dum"] },
            ],
            commonError: "Writing a line with the right number of syllables but stresses in the wrong places (e.g. starting with a stressed word every time).",
            guideRef: "iambic-pentameter",
          },
          {
            id: "shk-qa-p1-q12",
            question: "Some readers argue that Sonnet 18 is less about the beloved than about the poet's own power. How far do you agree? Refer closely to the poem.",
            marks: 5,
            hint: "Look at how much the poem actually tells us about the beloved, and how much it talks about 'this' poem.",
            modelAnswer:
              "I largely agree. Although the poem begins by praising the beloved as 'more lovely and more temperate' than summer, we learn almost nothing specific about them: no name, appearance or personality. Most of the octave is spent describing summer's flaws, and after the volta the focus shifts to the speaker's 'eternal lines'. The final couplet's repetition of 'this' ('So long lives this, and this gives life to thee') puts the poem at the centre, as the thing that 'gives life'; the beloved becomes dependent on the poet. However, the poem could also be read as a generous act of love: the speaker uses his talent as a gift to protect the beloved from Death, so the praise and the poet's confidence work together. Overall, the poem seems to celebrate art's power to defeat time as much as it celebrates the person.",
            markScheme: [
              { point: "Clear judgement / line of argument", keywords: ["agree", "disagree", "partly", "largely", "to some extent", "overall"] },
              { point: "Notes the beloved is described vaguely / little detail", keywords: ["vague", "no detail", "no name", "little detail", "general", "nothing specific"] },
              { point: "Uses 'eternal lines' or the couplet's 'this' to show focus on the poem/poet", keywords: ["eternal lines", "so long lives this", "gives life", "so long lives", "the poem", "poet"] },
              { point: "Considers the alternative: it is an act of love / gift to the beloved", keywords: ["love", "gift", "generous", "protect", "however", "alternatively", "on the other hand"] },
              { point: "Links to theme of art defeating time/Death", keywords: ["time", "death", "immortal", "art", "defeat", "eternal"] },
            ],
            commonError: "Agreeing or disagreeing without quoting, or ignoring the opposite view entirely.",
            guideRef: "reading-an-extract",
          },
        ],
      },
      {
        id: "shk-qa-p2",
        title: "Written Paper 2",
        questions: [
          {
            id: "shk-qa-p2-q01",
            question: "Describe three features of the Globe Theatre.",
            marks: 3,
            hint: "Think about where people stood or sat, the shape of the stage, and what was above and below it.",
            modelAnswer:
              "The Globe was a round, open-air 'wooden O' with a yard in the middle where groundlings stood for a penny. It had a thrust stage that pushed out into the yard so the audience surrounded the actors on three sides. Above the stage was a painted canopy called the heavens, held up by pillars, and in the floor was a trapdoor used for ghosts and graves; around the edge were three tiers of roofed galleries for wealthier spectators.",
            markScheme: [
              { point: "Open-air / round / yard for standing groundlings", keywords: ["open-air", "open air", "round", "circular", "wooden o", "yard", "groundling"] },
              { point: "Thrust stage surrounded on three sides", keywords: ["thrust", "three sides", "jutted", "pushed out", "projecting"] },
              { point: "Heavens / trapdoor / galleries / tiring house", keywords: ["heavens", "trapdoor", "trap door", "galleries", "gallery", "tiring house", "pillars", "balcony"] },
            ],
            commonError: "Describing a modern theatre with curtains, lighting and seats for everyone.",
            guideRef: "the-globe",
          },
          {
            id: "shk-qa-p2-q02",
            question: "Who were the groundlings, and how might they have influenced the way Shakespeare wrote?",
            marks: 3,
            hint: "Where did they stand, how much did they pay, and how might they behave?",
            modelAnswer:
              "The groundlings were the poorer spectators who paid one penny to stand in the open yard around the stage. Because they were close to the actors, noisy, and free to heckle or wander, Shakespeare had to keep them gripped, so he included jokes, puns, fights, songs and comic characters alongside the poetry. Their closeness to the thrust stage also made asides and soliloquies feel like direct, personal conversations.",
            markScheme: [
              { point: "Groundlings paid a penny to stand in the yard", keywords: ["penny", "stand", "standing", "yard", "cheapest", "poorer"] },
              { point: "They were close/noisy/could heckle, so had to be kept engaged", keywords: ["heckle", "noisy", "rowdy", "close", "attention", "engaged", "bored"] },
              { point: "Influence: humour, action, puns, comic relief, or intimate asides", keywords: ["jokes", "humour", "humor", "comic", "puns", "fights", "action", "aside"] },
            ],
            commonError: "Assuming the groundlings could not understand the poetry; Shakespeare wrote for everyone at once.",
            guideRef: "the-globe",
          },
          {
            id: "shk-qa-p2-q03",
            question: "Explain why female roles were played by boys in Shakespeare's theatre and how Shakespeare sometimes used this in his plots.",
            marks: 3,
            hint: "When could women first act on the English public stage? Think of Twelfth Night or As You Like It.",
            modelAnswer:
              "Women were not allowed to perform on the English public stage until 1660, so female roles were played by boy apprentices whose voices had not yet broken. Shakespeare used this in comedies such as Twelfth Night and As You Like It, where a heroine disguises herself as a young man. The original audience watched a boy playing a girl playing a boy, which added extra layers of humour and confusion about identity.",
            markScheme: [
              { point: "Women were banned from the public stage (until 1660)", keywords: ["not allowed", "banned", "forbidden", "1660", "illegal", "could not act"] },
              { point: "Boys whose voices had not broken / apprentices took the roles", keywords: ["boy", "apprentice", "voices", "unbroken", "young"] },
              { point: "Disguise plots (e.g. Viola, Rosalind): layers of pretence/humour", keywords: ["disguise", "viola", "rosalind", "twelfth night", "as you like it", "girl playing a boy", "dresses as"] },
            ],
            commonError: "Saying women were 'too shy' to act, or that it was Shakespeare's personal choice.",
            guideRef: "the-globe",
          },
          {
            id: "shk-qa-p2-q04",
            question: "Explain why acting companies needed a patron, using the King's Men as your example.",
            marks: 3,
            hint: "What could happen to unprotected travelling actors? Who became the company's patron in 1603?",
            modelAnswer:
              "A patron was a powerful noble or monarch who protected and supported a company. Without one, actors could be treated as vagabonds and arrested, and they would struggle to get permission to perform. Shakespeare's company began as the Lord Chamberlain's Men; in 1603 the new king, James I, became their patron and they were renamed the King's Men, which gave them status, protection and invitations to perform at court.",
            markScheme: [
              { point: "Defines a patron: powerful protector/supporter", keywords: ["protect", "support", "noble", "powerful", "sponsor", "monarch"] },
              { point: "Without one actors risked arrest as vagabonds / lacked permission", keywords: ["vagabond", "vagrant", "arrest", "permission", "licence", "license", "legal"] },
              { point: "King's Men example: James I from 1603 (formerly Lord Chamberlain's Men)", keywords: ["james", "1603", "king's men", "kings men", "lord chamberlain"] },
            ],
            commonError: "Confusing a patron with a paying customer in the audience.",
            guideRef: "life-and-times",
          },
          {
            id: "shk-qa-p2-q05",
            question: "Compare the typical features of a Shakespearean comedy with those of a Shakespearean tragedy.",
            marks: 4,
            hint: "Think about how each one ends, what drives the plot and how the audience feels.",
            modelAnswer:
              "A comedy is driven by confusion, disguise, mistaken identity and witty wordplay, and moves from disorder to harmony, usually ending in marriages, as in Twelfth Night. A tragedy centres on a high-status hero whose fatal flaw (hamartia), such as Macbeth's ambition or Hamlet's indecision, leads to downfall and death. Comedies leave the audience feeling joy and relief, whereas tragedies make them feel pity and fear. Both can include jokes and love, but the direction of the story is opposite: comedy moves towards union, tragedy towards destruction.",
            markScheme: [
              { point: "Comedy: confusion/disguise/mistaken identity/wordplay", keywords: ["confusion", "disguise", "mistaken identity", "wordplay", "misunderstanding"] },
              { point: "Comedy ends in harmony/marriage", keywords: ["marriage", "wedding", "married", "harmony", "happy ending"] },
              { point: "Tragedy: high-status hero with fatal flaw (hamartia)", keywords: ["fatal flaw", "hamartia", "tragic hero", "high status", "high-status", "noble"] },
              { point: "Tragedy ends in downfall/death; audience pity and fear (or contrast stated)", keywords: ["death", "deaths", "downfall", "dies", "pity", "fear", "destruction"] },
            ],
            commonError: "Defining comedy as 'a funny play' without mentioning structure and ending.",
            guideRef: "genres",
          },
          {
            id: "shk-qa-p2-q06",
            question: "Why is The Tempest usually called a 'romance' rather than a comedy or tragedy?",
            marks: 3,
            hint: "Think about magic, separation, and how the play ends.",
            modelAnswer:
              "The Tempest is one of Shakespeare's late plays that critics call romances. It blends tragedy and comedy: Prospero and Miranda were cast out to sea and Prospero has been wronged, yet the play includes magic and spirits (Ariel) and a shipwreck that separates characters. Instead of ending in revenge and death, it ends in forgiveness and reunion: Prospero forgives his enemies, Miranda is engaged to Ferdinand, and Prospero gives up his magic.",
            markScheme: [
              { point: "Mixes tragic and comic elements / late play", keywords: ["mix", "blend", "both", "late play", "tragicomedy"] },
              { point: "Magic/supernatural, shipwreck or long separation", keywords: ["magic", "supernatural", "ariel", "spirit", "shipwreck", "separation", "storm"] },
              { point: "Ends in forgiveness/reconciliation/reunion rather than death", keywords: ["forgive", "forgiveness", "reunion", "reconcil", "engaged", "marriage"] },
            ],
            commonError: "Thinking 'romance' just means a love story.",
            guideRef: "genres",
          },
          {
            id: "shk-qa-p2-q07",
            extract: "PORTER: Here's a knocking indeed! If a man were porter of hell-gate, he should have old turning the key.\n(Macbeth, Act 2 Scene 3, immediately after the murder of King Duncan)",
            question: "Explain why this moment can be called comic relief and why Shakespeare places it here.",
            marks: 3,
            hint: "What has just happened? What is the Porter joking about?",
            modelAnswer:
              "This is comic relief because a drunken, joking Porter appears straight after the horror of Duncan's murder, giving the audience a moment to laugh and release tension. It is written in prose, which suits his low status and informal humour. However, his joke that he is the 'porter of hell-gate' is darkly ironic: Macbeth's castle has truly become a kind of hell, so the comedy actually reminds us of the evil that has just been done.",
            markScheme: [
              { point: "Humour that releases tension after a tragic moment", keywords: ["release", "tension", "relief", "break", "laugh", "humour", "humor"] },
              { point: "Placed straight after Duncan's murder", keywords: ["murder", "duncan", "after", "killing"] },
              { point: "Irony: 'hell-gate' reflects the castle's evil / heightens horror", keywords: ["hell", "irony", "ironic", "evil", "dark", "contrast", "heighten"] },
            ],
            commonError: "Saying it is 'just a funny bit' without linking the hell imagery to the murder.",
            guideRef: "dramatic-devices",
          },
          {
            id: "shk-qa-p2-q08",
            extract: "ROMEO [aside]: Shall I hear more, or shall I speak at this?\n(Romeo and Juliet, Act 2 Scene 2, while Juliet speaks on her balcony, unaware he is below)",
            question: "Identify the dramatic device and explain its effect on the audience.",
            marks: 2,
            hint: "Can Juliet hear him?",
            modelAnswer:
              "This is an aside: Romeo speaks to himself and the audience, and Juliet cannot hear him. It draws the audience into Romeo's excitement and dilemma, and adds dramatic irony, because we know he is listening while Juliet believes she is alone and is revealing her secret feelings.",
            markScheme: [
              { point: "Identifies an aside", keywords: ["aside", "asides", "unheard", "cannot hear", "can't hear", "to the audience"] },
              { point: "Effect: audience shares his thoughts / dramatic irony / tension", keywords: ["dramatic irony", "share", "secret", "unaware", "tension", "complicit", "thoughts"] },
            ],
            commonError: "Calling it a soliloquy; Romeo is not alone, as Juliet is on stage above.",
            guideRef: "dramatic-devices",
          },
          {
            id: "shk-qa-p2-q09",
            question: "Explain what dramatic irony is, using the tomb scene at the end of Romeo and Juliet as your example.",
            marks: 3,
            hint: "What does Romeo believe, and what does the audience know?",
            modelAnswer:
              "Dramatic irony is when the audience knows something that a character does not. In the tomb, Romeo believes Juliet is dead, so he drinks poison to join her, but the audience knows she has only taken Friar Laurence's sleeping potion and will soon wake. This creates almost unbearable tension and pity, because we want to shout a warning that he cannot hear.",
            markScheme: [
              { point: "Definition: the audience knows more than a character", keywords: ["audience knows", "knows more", "character does not", "unaware", "we know"] },
              { point: "Example: Romeo thinks Juliet is dead but she has taken a sleeping potion", keywords: ["potion", "sleeping", "not dead", "asleep", "friar", "poison"] },
              { point: "Effect: tension / pity / frustration", keywords: ["tension", "pity", "frustrat", "suspense", "helpless", "tragic"] },
            ],
            commonError: "Confusing dramatic irony with a character being sarcastic.",
            guideRef: "dramatic-devices",
          },
          {
            id: "shk-qa-p2-q10",
            question: "A modern script might say: '(A storm begins. Thunder.)' Shakespeare usually put directions inside the dialogue instead. Write one line of dialogue that tells the audience a storm is beginning, and explain why Shakespeare relied on this method.",
            marks: 2,
            hint: "Your character should describe what they see or hear, so the audience imagines it.",
            modelAnswer:
              "'Hark, how the heavens crack! The sky grows black as pitch, and rain lashes the trembling trees.' Shakespeare used embedded stage directions like this because the Globe had little scenery and no lighting, so the characters' words had to tell the audience what was happening and set the mood.",
            markScheme: [
              { point: "Writes a line of dialogue that conveys the storm", keywords: ["thunder", "storm", "rain", "lightning", "wind", "sky", "hark"] },
              { point: "Explains reliance on embedded directions: little scenery/no lighting/daylight", keywords: ["scenery", "lighting", "daylight", "embedded", "imagine", "word scenery"] },
            ],
            commonError: "Writing another bracketed stage direction instead of a line of speech.",
            guideRef: "dramatic-devices",
          },
          {
            id: "shk-qa-p2-q11",
            question: "Explain how Macbeth reflects the interests of King James I.",
            marks: 3,
            hint: "Think about witches, Scotland and Banquo.",
            modelAnswer:
              "James I was fascinated by witchcraft and had written a book about it, Daemonologie, so the witches would have gripped him. He was also Scottish, and the play is set in Scotland. Most importantly, James believed he was descended from Banquo, so Shakespeare presents Banquo as noble and shows his descendants as a long line of kings, flattering the company's royal patron.",
            markScheme: [
              { point: "James's interest in witchcraft (Daemonologie)", keywords: ["witch", "witchcraft", "daemonologie", "supernatural"] },
              { point: "Scottish setting / James was Scottish", keywords: ["scotland", "scottish", "scot", "james vi", "king of scotland"] },
              { point: "Banquo as noble ancestor / line of kings flatters James", keywords: ["banquo", "ancestor", "descend", "flatter", "line of kings", "patron"] },
            ],
            commonError: "Saying Macbeth was written for Elizabeth I.",
            guideRef: "life-and-times",
          },
          {
            id: "shk-qa-p2-q12",
            question: "'Shakespeare wrote for the groundlings, not for the nobility.' How far do you agree?",
            marks: 5,
            hint: "Think about jokes and fights, but also about verse, kings and the patron. Could he write for both at once?",
            modelAnswer:
              "I only partly agree. There is clear evidence that Shakespeare wrote for the groundlings: his plays are full of puns, fights, bawdy jokes and comic characters such as the Porter and the Gravediggers, which kept a standing crowd entertained. However, he also wrote for the nobility and the monarch: his company depended on royal patronage as the King's Men, plays such as Macbeth flattered James I, and much of his writing is complex blank verse about power and kingship. He also performed at court and later at the indoor Blackfriars theatre, which charged higher prices. The best view is that he wrote for everyone at once: a single scene, like Hamlet's banter with the Gravediggers, can make the groundlings laugh while giving educated spectators serious ideas about death.",
            markScheme: [
              { point: "Clear judgement", keywords: ["agree", "disagree", "partly", "to some extent", "overall", "both"] },
              { point: "Evidence for groundlings: jokes, puns, fights, comic characters", keywords: ["jokes", "puns", "fights", "comic", "porter", "gravedigger", "humour", "humor"] },
              { point: "Evidence for nobility/monarch: patronage, flattery of James, court performances", keywords: ["james", "king's men", "patron", "court", "flatter", "nobility", "blackfriars"] },
              { point: "Complex verse/ideas aimed at educated spectators", keywords: ["verse", "complex", "educated", "kingship", "philosoph", "poetry"] },
              { point: "Conclusion that he wrote for a mixed audience at once", keywords: ["everyone", "mixed", "all", "both at once", "whole audience", "different levels"] },
            ],
            commonError: "Arguing only one side, or assuming groundlings could not enjoy poetry.",
            guideRef: "the-globe",
          },
        ],
      },
      {
        id: "shk-qa-p3",
        title: "Written Paper 3",
        passage: {
          id: "to-be-or-not",
          title: "'To be, or not to be' (opening)",
          source: "William Shakespeare, Hamlet (c.1600), Act 3 Scene 1: Hamlet",
          text: HAMLET,
          note: HAMLET_NOTE,
        },
        questions: [
          {
            id: "shk-qa-p3-q01",
            question: "Paraphrase lines 1–5 ('To be, or not to be... end them') in modern English.",
            marks: 3,
            hint: "Hamlet sets up two choices: put up with suffering, or fight back. 'To be' means to exist.",
            modelAnswer:
              "The real question is whether to go on living or not. Is it braver to put up quietly with all the cruel blows that bad luck throws at us, or to fight back against our endless problems and, by fighting, bring them to an end?",
            markScheme: [
              { point: "Whether to live or die / exist or not", keywords: ["live or die", "to live", "living", "exist", "alive", "die", "life or death"] },
              { point: "Option 1: endure/suffer the blows of bad luck patiently", keywords: ["put up with", "endure", "suffer", "accept", "tolerate", "bad luck", "misfortune"] },
              { point: "Option 2: fight back against troubles and end them", keywords: ["fight", "fight back", "resist", "take action", "oppose", "end them", "end the problems"] },
            ],
            commonError: "Translating 'take arms' literally as picking up weapons for a battle.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-qa-p3-q02",
            question: "Is this speech a soliloquy, a monologue or an aside? Explain your answer.",
            marks: 2,
            hint: "Does Hamlet believe anyone is listening?",
            modelAnswer:
              "It is a soliloquy. Hamlet believes he is alone and speaks his private thoughts aloud, so the audience gains direct access to his mind (even though, ironically, Claudius and Polonius are secretly watching).",
            markScheme: [
              { point: "Identifies soliloquy", keywords: ["soliloquy", "soliloquies", "soliloquay", "solo speech"] },
              { point: "Reason: he thinks he is alone / private thoughts revealed", keywords: ["alone", "private", "thoughts", "nobody", "no one", "himself", "inner"] },
            ],
            commonError: "Calling it a monologue because it is long; length is not the test, being alone is.",
            guideRef: "dramatic-devices",
          },
          {
            id: "shk-qa-p3-q03",
            question: "Line 1 has eleven syllables. Name this feature and explain how it might reflect Hamlet's state of mind.",
            marks: 3,
            hint: "Where is the extra syllable, and is it stressed?",
            modelAnswer:
              "The extra unstressed syllable at the end ('-tion' of 'question') is a feminine ending. Rather than finishing firmly on a stressed beat, the line falls away and feels unresolved. This mirrors Hamlet's indecision: he is caught between two choices and cannot settle on an answer, so even the rhythm refuses to land.",
            markScheme: [
              { point: "Names a feminine ending", keywords: ["feminine", "weak ending", "extra unstressed", "extra syllable"] },
              { point: "Describes the effect: falling/unresolved/trailing", keywords: ["unresolved", "falls away", "trail", "falling", "unfinished", "soft"] },
              { point: "Links to Hamlet's indecision/uncertainty", keywords: ["indecis", "uncertain", "can't decide", "cannot decide", "torn", "doubt", "hesita"] },
            ],
            commonError: "Spotting the eleven syllables but not explaining why it matters.",
            guideRef: "breaking-the-rhythm",
          },
          {
            id: "shk-qa-p3-q04",
            question: "Analyse the metaphor 'The slings and arrows of outrageous fortune'.",
            marks: 3,
            hint: "What are slings and arrows? Who is firing them?",
            modelAnswer:
              "Shakespeare uses a metaphor of warfare: bad luck ('fortune') is pictured as an enemy firing 'slings and arrows' at us. This suggests that suffering comes from a distance, unexpectedly, and that we are helpless targets who cannot fight back. The adjective 'outrageous' (violent, savage) makes fortune seem cruel and unfair, showing how attacked and powerless Hamlet feels.",
            markScheme: [
              { point: "Identifies a metaphor of weapons/battle", keywords: ["metaphor", "weapon", "battle", "war", "attack", "missiles"] },
              { point: "Explains fortune/bad luck as an enemy attacking us; we are helpless targets", keywords: ["enemy", "target", "helpless", "powerless", "victim", "from a distance"] },
              { point: "Comments on 'outrageous' / cruelty of fate", keywords: ["outrageous", "cruel", "violent", "savage", "unfair", "fate"] },
            ],
            commonError: "Saying Hamlet is literally being shot at.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-qa-p3-q05",
            question: "'Or to take arms against a sea of troubles'. Why is the image of fighting a sea so striking?",
            marks: 3,
            hint: "Can a soldier defeat the sea?",
            modelAnswer:
              "The image is a mixed metaphor: weapons ('take arms') are combined with 'a sea'. A sea is vast, endless and impossible to defeat with a sword, so the image suggests that Hamlet's problems are overwhelming and that fighting them may be hopeless, or even suicidal, like a man wading into the waves to fight them. It also implies the troubles keep coming like waves.",
            markScheme: [
              { point: "Identifies the metaphor (mixed: weapons + sea)", keywords: ["metaphor", "mixed", "take arms", "weapons", "sea"] },
              { point: "Sea suggests troubles are vast/endless/overwhelming", keywords: ["vast", "endless", "overwhelm", "huge", "waves", "never-ending", "infinite"] },
              { point: "Fighting it seems hopeless/impossible/suicidal", keywords: ["hopeless", "impossible", "futile", "pointless", "suicid", "cannot win", "drown"] },
            ],
            commonError: "Explaining 'a sea of troubles' as 'a lot of troubles' without exploring why a sea is a powerful choice.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-qa-p3-q06",
            question: "Hamlet says ''tis nobler' and ''tis a consummation'. What does ''tis' mean, and why might Shakespeare use contractions like this?",
            marks: 2,
            hint: "Count the syllables in 'it is' and in ''tis'.",
            modelAnswer:
              "''Tis' means 'it is'. Shakespeare uses contractions like this to squeeze two syllables into one, so the line keeps to the ten-syllable rhythm of iambic pentameter; they were also normal in everyday speech at the time, making the verse sound natural.",
            markScheme: [
              { point: "'Tis = it is", keywords: ["it is", "it's", "it is short for", "means it is"] },
              { point: "Purpose: fit the metre / syllable count / natural speech", keywords: ["metre", "meter", "rhythm", "syllable", "pentameter", "natural", "fit"] },
            ],
            commonError: "Writing ''tis = this is'.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-qa-p3-q07",
            question: "Explain the effect of the repetition and pauses in 'To die, to sleep— / No more' and 'To die, to sleep; / To sleep, perchance to dream'.",
            marks: 3,
            hint: "Look at the punctuation in the middle of lines. How does the thinking move?",
            modelAnswer:
              "The phrases 'To die, to sleep' are repeated, and the dashes and semicolons create caesuras (pauses in the middle of lines). This makes the speech sound like real, hesitant thinking: Hamlet keeps returning to the same idea, testing it. When he adds 'perchance to dream', the repetition leads him to a new and frightening thought, so the broken rhythm shows his mind circling and then stumbling over a fear.",
            markScheme: [
              { point: "Identifies repetition of 'to die, to sleep'", keywords: ["repetition", "repeat", "repeated", "to die, to sleep", "echo"] },
              { point: "Identifies pauses/caesura created by punctuation", keywords: ["caesura", "pause", "dash", "semicolon", "punctuation", "broken"] },
              { point: "Effect: hesitant, circling thought / reaching a frightening idea", keywords: ["hesita", "thinking", "circling", "uncertain", "debate", "fear", "dream", "thought process"] },
            ],
            commonError: "Naming 'repetition' without saying what it shows about how Hamlet is thinking.",
            guideRef: "breaking-the-rhythm",
          },
          {
            id: "shk-qa-p3-q08",
            question: "What does 'ay, there's the rub' mean, and why is it a turning point in the speech?",
            marks: 2,
            hint: "A 'rub' in the game of bowls is something that knocks the ball off course.",
            modelAnswer:
              "It means 'yes, that's the problem' or obstacle. It is a turning point because Hamlet had begun to think of death as a peaceful sleep, but now realises that death might bring frightening dreams, the unknown afterlife, which stops him from acting.",
            markScheme: [
              { point: "Meaning: there's the problem/obstacle/catch", keywords: ["problem", "obstacle", "catch", "difficulty", "snag", "drawback"] },
              { point: "Turning point: fear of dreams/afterlife stops the attractive idea of death", keywords: ["dream", "afterlife", "unknown", "fear", "turning point", "changes his mind", "stops"] },
            ],
            commonError: "Thinking 'rub' means to massage or that 'ay' means 'I'.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-qa-p3-q09",
            question: "Explain the meaning of 'When we have shuffled off this mortal coil'.",
            marks: 2,
            hint: "'Mortal' means human and subject to death; 'coil' meant turmoil or fuss.",
            modelAnswer:
              "It means 'when we have died' and escaped the troubles and turmoil ('coil') of human life. 'Shuffled off' makes dying sound like casually shrugging off a burden or an old coat, and 'coil' may also suggest the body wrapped around the soul.",
            markScheme: [
              { point: "Meaning: when we have died", keywords: ["died", "die", "death", "dead"] },
              { point: "Explains 'coil'/'shuffled off': escaping life's turmoil / shedding the body", keywords: ["turmoil", "trouble", "fuss", "burden", "body", "shed", "shrug", "escape"] },
            ],
            commonError: "Thinking 'coil' means a spring or snake.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-qa-p3-q10",
            question: "Hamlet often speaks prose elsewhere in the play, especially when pretending to be mad. Why is it significant that this speech is in blank verse?",
            marks: 2,
            hint: "What does verse usually signal, and what is Hamlet doing here?",
            modelAnswer:
              "Blank verse usually signals seriousness, nobility and deep emotion. Here Hamlet is alone, not putting on his 'antic disposition', so the verse shows that this is his sincere, private self thinking about life and death, in contrast to the mocking prose he uses to fool other characters.",
            markScheme: [
              { point: "Verse signals seriousness/nobility/deep emotion", keywords: ["serious", "noble", "emotion", "status", "important", "profound"] },
              { point: "Shows his genuine/sincere self, contrasting with feigned madness in prose", keywords: ["genuine", "sincere", "real", "true", "not pretending", "antic", "feigned", "act"] },
            ],
            commonError: "Saying all of Hamlet's lines are in verse because he is a prince.",
            guideRef: "verse-prose-rhyme",
          },
          {
            id: "shk-qa-p3-q11",
            question: "Explain what a trochaic inversion is, using Richard III's opening line 'Now is the winter of our discontent' as an example.",
            marks: 3,
            hint: "Mark the stresses on the first two syllables.",
            modelAnswer:
              "Iambic pentameter normally begins da-DUM. A trochaic inversion flips the first foot to DUM-da, a trochee. In 'NOW is the WIN-ter OF our DIS-con-TENT', the stress lands on 'Now', so the very first word is hammered home. This grabs the audience's attention and makes Richard sound commanding, as he seizes the stage in the play's opening soliloquy.",
            markScheme: [
              { point: "Definition: the first foot flipped from iamb to trochee (stressed-unstressed)", keywords: ["trochee", "flip", "reverse", "stressed then unstressed", "dum-da", "inverted"] },
              { point: "Applies it: stress falls on 'Now'", keywords: ["now", "first word", "first syllable", "starts with a stress", "now is"] },
              { point: "Effect: emphasis / attention / commanding", keywords: ["emphasis", "attention", "commanding", "powerful", "punch", "strong", "confident"] },
            ],
            commonError: "Thinking trochaic inversion means the whole line is reversed.",
            guideRef: "breaking-the-rhythm",
          },
          {
            id: "shk-qa-p3-q12",
            question: "How does Shakespeare use language and structure in this extract to present Hamlet's state of mind? Write two PEEL paragraphs.",
            marks: 6,
            hint: "Consider the opening antithesis, the feminine endings, the metaphors, the caesuras and repetitions, and the pause after 'Must give us pause'.",
            modelAnswer:
              "Shakespeare presents Hamlet as a mind torn between two choices. The speech opens with the antithesis 'To be, or not to be', setting existence against non-existence in perfect balance, and the line's feminine ending trails off on '-tion', so even the rhythm cannot settle. The paired metaphors of suffering 'The slings and arrows of outrageous fortune' or taking 'arms against a sea of troubles' present both choices as painful: one makes him a helpless target, the other a man hopelessly fighting the ocean. This shows Hamlet feels trapped whichever way he turns.\n\nThe structure also mirrors his thinking. The repetition of 'To die, to sleep', broken up by dashes and semicolons, creates caesuras that make the speech sound hesitant, as if he is testing the idea aloud. Death at first seems attractive, 'a consummation / Devoutly to be wish'd', until 'ay, there's the rub' marks a sudden turn: the fear of 'what dreams may come' after death. The extract ends on 'Must give us pause'; in the play this line is two syllables short ('Must give us pause. There's the respect'), and the missing beats fall just after 'pause', so the metre enacts the paralysis that stops Hamlet from acting throughout the play.",
            markScheme: [
              { point: "Point about indecision/being torn/conflict", keywords: ["indecis", "torn", "conflict", "uncertain", "two choices", "dilemma"] },
              { point: "Analyses the antithesis 'To be, or not to be'", keywords: ["antithesis", "opposite", "to be, or not to be", "balance", "contrast"] },
              { point: "Analyses a metaphor (slings and arrows / sea of troubles)", keywords: ["slings", "arrows", "sea of troubles", "metaphor", "take arms"] },
              { point: "Comments on metre: feminine endings or the pause/short line at 'Must give us pause'", keywords: ["feminine", "short line", "give us pause", "metre", "meter", "rhythm"] },
              { point: "Comments on structure: repetition, caesura, the turn at 'there's the rub'", keywords: ["repetition", "caesura", "the rub", "turn", "dash", "structure", "pause"] },
              { point: "Links to wider play/theme: inaction, fear of death/afterlife", keywords: ["inaction", "delay", "revenge", "afterlife", "fear of death", "paralysis", "throughout the play"] },
            ],
            commonError: "Retelling what Hamlet says line by line without analysing how language and structure create his state of mind.",
            guideRef: "reading-an-extract",
          },
        ],
      },
      {
        id: "shk-qa-p4",
        title: "Written Paper 4",
        passage: {
          id: "seven-ages",
          title: "'All the world's a stage' (the Seven Ages of Man)",
          source: "William Shakespeare, As You Like It (c.1599), Act 2 Scene 7: Jaques",
          text: JAQUES,
          note: JAQUES_NOTE,
        },
        questions: [
          {
            id: "shk-qa-p4-q01",
            question: "Paraphrase the first four lines of the speech in modern English.",
            marks: 2,
            hint: "Exits and entrances suggest more than going through doors.",
            modelAnswer:
              "The whole world is like a theatre and every person is just an actor in it. We all come on stage when we are born and leave it when we die, and in one lifetime a person plays many different roles.",
            markScheme: [
              { point: "The world is like a stage/theatre and people are only actors", keywords: ["theatre", "theater", "stage", "actor", "play", "acting"] },
              { point: "Exits and entrances = birth and death / one person plays many roles", keywords: ["born", "birth", "death", "die", "many roles", "different roles", "many parts"] },
            ],
            commonError: "Copying the lines with only one or two words changed.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-qa-p4-q02",
            question: "Explain how Shakespeare develops the extended metaphor of life as a play throughout the speech.",
            marks: 3,
            hint: "Find theatre words at the start, the middle and the end.",
            modelAnswer:
              "The metaphor begins with 'All the world's a stage' and 'merely players', establishing that people are only actors. It is developed through 'exits' and 'entrances' (death and birth), 'parts', 'acts' and 'he plays his part', so each age is a different role. It ends with 'Last scene of all', making death the final scene of the play. Sustaining the metaphor suggests life is scripted and temporary, with people having little control, and it is witty because it is spoken by an actor on a real stage.",
            markScheme: [
              { point: "Opening: 'stage'/'players' establishes the comparison", keywords: ["stage", "players", "merely", "actors", "world's a stage"] },
              { point: "Development: exits/entrances/parts/acts", keywords: ["exits", "entrances", "parts", "acts", "plays his part", "role"] },
              { point: "Ending ('last scene') and effect: life as scripted/temporary/no control", keywords: ["last scene", "scripted", "temporary", "no control", "performance", "final scene", "pretend"] },
            ],
            commonError: "Only discussing the first line instead of tracing the metaphor through the speech.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-qa-p4-q03",
            question: "Choose TWO of the seven ages and explain how Jaques mocks each one. Quote from the speech.",
            marks: 4,
            hint: "Look at the schoolboy, the lover, the soldier or the justice. Which details make them look silly?",
            modelAnswer:
              "Jaques mocks the lover, who is 'Sighing like furnace, with a woeful ballad / Made to his mistress' eyebrow'. The simile exaggerates his passion into hot, noisy sighs, and writing a sad song about an eyebrow makes young love seem ridiculous. He also mocks the soldier, who seeks 'the bubble reputation / Even in the cannon's mouth'. The metaphor of a bubble suggests fame is fragile and empty, so the soldier foolishly risks death for something worthless.",
            markScheme: [
              { point: "Chooses an age and quotes accurately (age 1)", keywords: ["furnace", "ballad", "eyebrow", "snail", "unwillingly", "satchel", "whining"] },
              { point: "Explains how age 1 is mocked (technique/effect)", keywords: ["exaggerat", "ridiculous", "absurd", "silly", "simile", "over the top", "mock"] },
              { point: "Chooses a second age and quotes accurately (age 2)", keywords: ["bubble", "cannon", "oaths", "capon", "saws", "belly", "pard", "quarrel"] },
              { point: "Explains how age 2 is mocked (technique/effect)", keywords: ["fragile", "empty", "worthless", "foolish", "metaphor", "hollow", "pompous", "greedy"] },
            ],
            commonError: "Describing the ages without explaining how the language mocks them.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-qa-p4-q04",
            question: "Analyse the final line, 'Sans teeth, sans eyes, sans taste, sans everything.'",
            marks: 3,
            hint: "Look at the repeated word, the list and the final word.",
            modelAnswer:
              "The repetition of 'sans' (without) at the start of each phrase creates a slow, hammering list in which the old man loses his teeth, sight and taste one by one. The list builds to the crushing final word 'everything', showing that old age strips away not just the senses but the whole self. Ending the speech with this bleak line leaves the audience with a sense of loss, supporting Jaques' cynical view that life ends in 'mere oblivion'.",
            markScheme: [
              { point: "Explains 'sans' = without and the repetition", keywords: ["without", "repetition", "repeated", "anaphora", "sans"] },
              { point: "Comments on the list building to 'everything'", keywords: ["list", "build", "climax", "everything", "one by one", "lose"] },
              { point: "Effect: bleak/loss of self/decline; cynical view of life", keywords: ["bleak", "loss", "decline", "decay", "cynical", "helpless", "oblivion", "nothing"] },
            ],
            commonError: "Mistranslating 'sans' as 'with'.",
            guideRef: "reading-an-extract",
          },
          {
            id: "shk-qa-p4-q05",
            question: "Translate these into modern English: (a) 'thou hast', (b) 'he doth', (c) 'wherefore', (d) 'anon'.",
            marks: 4,
            hint: "-st goes with thou; -th means -s; one of these is a famous false friend.",
            modelAnswer: "(a) you have; (b) he does; (c) why; (d) soon, or at once.",
            markScheme: [
              { point: "(a) thou hast = you have", keywords: ["you have", "(a) you have", "a) you have", "you've"] },
              { point: "(b) he doth = he does", keywords: ["he does", "does", "(b) he does", "b) he does"] },
              { point: "(c) wherefore = why", keywords: ["why", "(c) why", "c) why", "for what reason"] },
              { point: "(d) anon = soon / at once", keywords: ["soon", "at once", "shortly", "straight away", "right away", "immediately"] },
            ],
            commonError: "Translating 'wherefore' as 'where'.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-qa-p4-q06",
            question: "Write ONE sentence (or two short lines) that a character might say to a close friend, using thou, thee, thy and thine correctly.",
            marks: 4,
            hint: "Thou = subject (I); thee = object (me); thy = possessive before a consonant (my); thine = before a vowel or alone (mine).",
            modelAnswer:
              "'Thou art my truest friend; I give thee thy sword again, and thine honour is safe with me.' Here 'thou' is the subject, 'thee' the object, 'thy' comes before the consonant 's' in 'sword', and 'thine' comes before the vowel sound in 'honour'.",
            markScheme: [
              { point: "Uses 'thou' as a subject", keywords: ["thou art", "thou hast", "thou shalt", "thou wilt", "thou dost", "thou"] },
              { point: "Uses 'thee' as an object", keywords: ["thee", "give thee", "love thee", "tell thee", "thank thee"] },
              { point: "Uses 'thy' before a consonant", keywords: ["thy ", "thy sword", "thy friend", "thy name", "thy heart"] },
              { point: "Uses 'thine' before a vowel or standing alone", keywords: ["thine", "thine eyes", "thine honour", "is thine", "thine own"] },
            ],
            commonError: "Using 'thee' as a subject ('thee art') or 'thy' before a vowel.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-qa-p4-q07",
            question: "Explain why the line 'O Romeo, Romeo, wherefore art thou Romeo?' is so often misunderstood, and what Juliet actually means.",
            marks: 2,
            hint: "What does 'wherefore' look like, and what does it mean?",
            modelAnswer:
              "People assume 'wherefore' means 'where', as if Juliet is looking for Romeo. In fact it means 'why': she is asking why Romeo has to be Romeo, a Montague and the son of her family's enemy, which is why she goes on to say 'Deny thy father and refuse thy name'.",
            markScheme: [
              { point: "Misread as 'where'", keywords: ["where", "looking for", "searching", "location", "find him"] },
              { point: "Actually 'why': why must he be a Montague / her enemy's son", keywords: ["why", "montague", "enemy", "name", "family"] },
            ],
            commonError: "Explaining the misunderstanding but not what Juliet really means.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-qa-p4-q08",
            question: "Explain the difference between saying Shakespeare 'invented' a word and saying he is its 'earliest recorded user'.",
            marks: 2,
            hint: "What do written records prove?",
            modelAnswer:
              "'Invented' claims he created the word himself. 'Earliest recorded user' only says that his writing is the first surviving written evidence of it: the word may already have been in spoken use, and researchers sometimes find even earlier written examples.",
            markScheme: [
              { point: "'Invented' = he created it himself", keywords: ["created", "made up", "came up with", "first to make", "coined"] },
              { point: "'Earliest recorded' = first surviving written evidence; may already have been spoken", keywords: ["written", "record", "evidence", "spoken", "already", "surviving", "earlier examples"] },
            ],
            commonError: "Treating the two phrases as meaning the same thing.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-qa-p4-q09",
            question: "Give TWO phrases that are first recorded in Shakespeare and are still used today. For each, explain its modern meaning and name the play it comes from.",
            marks: 4,
            hint: "Think of jealousy, a pointless search, or the most important thing of all.",
            modelAnswer:
              "'The green-eyed monster' means jealousy; it comes from Othello, where Iago warns Othello against it. 'A wild-goose chase' means a hopeless or pointless search; it comes from Romeo and Juliet, in Mercutio's banter with Romeo.",
            markScheme: [
              { point: "Phrase 1 named", keywords: ["green-eyed monster", "green eyed", "wild-goose", "wild goose", "be-all", "foregone conclusion"] },
              { point: "Phrase 1 meaning explained", keywords: ["jealous", "pointless", "hopeless", "most important", "inevitable", "useless search"] },
              { point: "Phrase 2 named", keywords: ["wild-goose", "wild goose", "be-all", "end-all", "foregone conclusion", "green-eyed"] },
              { point: "Correct source plays given", keywords: ["othello", "romeo and juliet", "macbeth", "iago", "mercutio"] },
            ],
            commonError: "Choosing proverbs that existed long before Shakespeare, such as 'dead as a doornail'.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-qa-p4-q10",
            question: "Explain three ways in which Shakespeare created or reshaped words, with an example of each.",
            marks: 3,
            hint: "Changing a word's job, adding to a word, and joining words together.",
            modelAnswer:
              "First, functional shift: using a word as a different word class, such as turning the noun 'uncle' into a verb in 'nor uncle me no uncle' (Richard II). Second, adding prefixes or suffixes to existing words, such as 'lone' + '-ly' to give 'lonely', or 'daunt' + '-less' to give 'dauntless'. Third, compounding, joining two words together, such as 'eye' + 'ball' to make 'eyeball'.",
            markScheme: [
              { point: "Functional shift / changing word class, with example", keywords: ["functional shift", "word class", "noun into a verb", "noun as a verb", "uncle", "verb"] },
              { point: "Prefixes/suffixes, with example", keywords: ["prefix", "suffix", "lonely", "dauntless", "-less", "-ly", "un-"] },
              { point: "Compounding, with example", keywords: ["compound", "joining", "eyeball", "bedroom", "two words", "cold-blooded"] },
            ],
            commonError: "Listing words without explaining how they were formed.",
            guideRef: "archaic-language",
          },
          {
            id: "shk-qa-p4-q11",
            question: "Write a rhyming couplet in iambic pentameter that could end a scene in which a character vows revenge. Then explain why Shakespeare often ended scenes with rhyming couplets.",
            marks: 3,
            hint: "Two lines, ten syllables each, da-DUM rhythm, rhyming final words.",
            modelAnswer:
              "'Tonight I swear by every star above, / I'll pay my brother back for stolen love.' (Two ten-syllable iambic lines rhyming 'above'/'love'.) Shakespeare often ended scenes with rhyming couplets because the Globe had no curtain or lighting changes, so the rhyme 'clicks' the scene shut, signalling an exit, and leaves the audience with a memorable final thought.",
            markScheme: [
              { point: "Writes two lines with a rhyme", keywords: ["rhyme", "rhymes", "couplet", "two lines"] },
              { point: "Lines are (roughly) ten-syllable iambic pentameter on the revenge topic", keywords: ["ten", "10", "iambic", "pentameter", "revenge", "swear", "vow"] },
              { point: "Explains purpose: closure / signals end of scene (no curtain) / memorable", keywords: ["closure", "end of the scene", "end the scene", "no curtain", "signal", "memorable", "exit", "final"] },
            ],
            commonError: "Writing two rhyming lines with no regular rhythm, or forgetting to explain the purpose.",
            guideRef: "verse-prose-rhyme",
          },
          {
            id: "shk-qa-p4-q12",
            question: "Straight after this speech, Orlando enters carrying Adam, his loyal old servant, who has given Orlando his life savings and followed him into exile. Is Jaques' bleak view of life presented as the truth? Refer to the speech and the context.",
            marks: 5,
            hint: "Consider how convincing the speech is, who Jaques is ('melancholy Jaques'), and what Adam's entrance shows.",
            modelAnswer:
              "Jaques' speech is powerful and persuasive: the extended metaphor of the 'stage' and the hammering list 'Sans teeth, sans eyes, sans taste, sans everything' make life seem a pointless performance ending in 'mere oblivion'. However, Shakespeare does not present this as the whole truth. Jaques is known in the play as a melancholy, cynical observer, so his view is coloured by his personality. Crucially, Shakespeare immediately brings on Adam, an old man who should be 'sans everything' but who has shown loyalty, generosity and love by giving Orlando his savings. The staging therefore answers Jaques: old age may weaken the body, but it does not destroy human worth. Shakespeare lets the audience enjoy Jaques' wit while questioning his conclusion.",
            markScheme: [
              { point: "Acknowledges the speech's persuasive power with a quotation", keywords: ["sans", "stage", "oblivion", "persuasive", "powerful", "convincing"] },
              { point: "Notes Jaques' melancholy/cynical character colours his view", keywords: ["melancholy", "cynical", "gloomy", "pessimis", "character", "bias"] },
              { point: "Uses Adam's entrance as a counter-example", keywords: ["adam", "orlando", "loyal", "generous", "servant", "savings"] },
              { point: "Explains how the staging challenges Jaques (old age keeps worth/love)", keywords: ["challenge", "contradict", "question", "undermine", "counter", "however", "worth", "love"] },
              { point: "Reaches a balanced judgement", keywords: ["overall", "balanced", "partly", "not the whole truth", "therefore", "conclusion"] },
            ],
            commonError: "Simply agreeing with Jaques without considering the context of the scene.",
            guideRef: "reading-an-extract",
          },
        ],
      },
    ],
  },
};
