import type { Topic } from "../types";

export const analyticalWriting: Topic = {
  id: "analytical-writing",
  title: "Analytical Writing",
  subject: "Skills",
  icon: "🧠",
  summary: "PEEL paragraphs, embedded quotations and zooming in.",
  intro:
    "Every essay you write this year, on Shakespeare in Term 1, poetry in Term 2 and your novel in Term 3, is marked on one skill above all: can you explain HOW a writer creates meaning and WHY? This topic gives you the toolkit: sharp PEEL and PETAL paragraphs, a confident thesis, short quotations woven into your own sentences, and the habit of zooming in on a single word until it gives up its secrets. Master it once and every text you ever study becomes easier to write about.",

  guide: [
    {
      id: "analysis-not-retelling",
      heading: "Analysis, not retelling: climbing the levels",
      discovery: {
        problem:
          "Read these two sentences about *Romeo and Juliet*. A: “Romeo sees Juliet at her window and says she is the sun.” B: “By calling Juliet 'the sun', Romeo suggests she is the source of all light and warmth in his life, as if his whole world now revolves around her.” Which would score more marks? List exactly what B does that A does not.",
        idea:
          "A only retells what happens. B zooms in on two words ('the sun'), unpacks what they suggest (light, warmth, the centre of the universe) and explains the effect on how we see Romeo. Examiners reward the HOW and the WHY, never just the WHAT.",
      },
      body:
        "**Analytical writing** means explaining *how* a writer creates meaning and *why* they make the choices they do. It is different from **retelling** (also called **narrating** or **summarising**), which only says *what* happens.\n\nThink of a football pundit. A fan says, “We scored in the 80th minute.” That is retelling. A pundit says, “The winger drifted inside, which dragged the defender out of position and opened the space for the goal.” That is analysis: it explains *how* the goal happened and *why* it worked. In English, you are the pundit and the writer's words are the match.\n\nTeachers mark analysis in **levels of response**: bands that describe the *quality* of your thinking, not the amount you write. Here is the climb, using Caliban's line 'This island's mine' from *The Tempest* (Act 1 Scene 2):\n\n- **Level 1 – Retelling:** “Caliban says the island belongs to him.” (Plot only.)\n- **Level 2 – Explaining:** “Caliban is angry because he thinks Prospero stole the island.” (Meaning, but no methods.)\n- **Level 3 – Analysing:** “The blunt possessive pronoun 'mine' makes Caliban's claim sound fierce and certain, suggesting he refuses to accept Prospero's rule.” (Method + effect, with accurate terminology.)\n- **Level 4 – Perceptive:** “Perhaps Shakespeare, writing in 1611 as English ships were claiming land in the Americas, wants his audience to feel uneasy: Caliban's 'mine' challenges the idea that a newcomer automatically owns what he finds.” (Alternative readings, the writer's purpose and context, all rooted in the words.)\n\nTwo traps keep students stuck at the bottom. **Retelling the plot** wastes words on what the examiner already knows. **Feature spotting** means naming a technique (“there is alliteration here”) without explaining its effect. It looks clever but earns little, because spotting is not analysing.",
      diagram: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A staircase of four levels of response from retelling up to perceptive analysis"><rect x="10" y="150" width="80" height="40" fill="#fee2e2" stroke="#ef4444"/><text x="50" y="166" font-size="11" text-anchor="middle" fill="#991b1b">Level 1</text><text x="50" y="181" font-size="11" text-anchor="middle" fill="#991b1b">Retells</text><rect x="90" y="112" width="80" height="78" fill="#fef3c7" stroke="#f59e0b"/><text x="130" y="128" font-size="11" text-anchor="middle" fill="#92400e">Level 2</text><text x="130" y="143" font-size="11" text-anchor="middle" fill="#92400e">Explains</text><rect x="170" y="74" width="80" height="116" fill="#dbeafe" stroke="#3b82f6"/><text x="210" y="90" font-size="11" text-anchor="middle" fill="#1e3a8a">Level 3</text><text x="210" y="105" font-size="11" text-anchor="middle" fill="#1e3a8a">Analyses</text><rect x="250" y="36" width="80" height="154" fill="#dcfce7" stroke="#22c55e"/><text x="290" y="52" font-size="11" text-anchor="middle" fill="#14532d">Level 4</text><text x="290" y="67" font-size="11" text-anchor="middle" fill="#14532d">Perceptive</text><line x1="30" y1="60" x2="200" y2="20" stroke="#6b7280" stroke-width="2" marker-end="url(#anlA1)"/><defs><marker id="anlA1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#6b7280"/></marker></defs><text x="60" y="30" font-size="11" fill="#374151">deeper thinking</text></svg>`,
      diagramCaption:
        "Levels of response: each step up adds something. Retell → explain meaning → analyse methods and effects → explore alternatives, purpose and context.",
      keyPoints: [
        "Analysis explains HOW (methods) and WHY (effects and purpose); retelling only says WHAT happens.",
        "Feature spotting (naming a technique without its effect) earns very little.",
        "Higher levels come from depth of thinking about a few words, not from writing more.",
      ],
      thinkDeeper:
        "Is it ever useful to retell a moment from the plot in an essay? Argue for a rule: how many words of 'what happens' are acceptable before it stops helping your analysis?",
    },
    {
      id: "peel-petal",
      heading: "PEEL and PETAL: the shape of an analytical paragraph",
      discovery: {
        problem:
          "These four sentences about *Romeo and Juliet* are jumbled. Put them in the best order. (1) “This tension between love and hatred foreshadows the tragedy to come.” (2) “Shakespeare presents Juliet's love as dangerous from its very first moment.” (3) “The antithesis of 'love' and 'hate', balanced by the repeated 'only', shows that her deepest feeling has grown out of the thing she has been taught to loathe.” (4) “When she learns Romeo's name, she cries, 'My only love sprung from my only hate!'”",
        idea:
          "2 → 4 → 3 → 1. A claim (Point), then the quotation that proves it (Evidence), then the close-up explanation of the words (Explain), then a step back to the big idea (Link). That shape is PEEL, and it works for any text.",
      },
      body:
        "A **PEEL paragraph** is a reliable structure for one analytical idea:\n\n- **P – Point:** a clear claim that answers the question (“Shakespeare presents Prospero as controlling”).\n- **E – Evidence:** a short quotation, embedded in your sentence, that proves the point.\n- **E – Explain:** the heart of the paragraph. Name the method, zoom in on key words, explore their connotations and explain the effect on the reader or audience.\n- **L – Link:** connect back to the question, the writer's purpose, a theme or the context.\n\n**PETAL** is the same idea with the explanation split into steps: **P**oint, **E**vidence, **T**echnique, **A**nalysis, **L**ink. Use whichever your teacher prefers; they lead to the same place.\n\nThe golden rule: the **Explain** section should be the *longest* part. One short quotation can feed three or four sentences of analysis. Strong writers “milk” a quotation: first the overall effect, then a single word, then a sound or structural feature, then an alternative reading.\n\nPEEL is a scaffold, not a cage. Once you are confident, your paragraphs can weave two quotations together, or loop back from the link into a new point. But every paragraph should still contain a claim, proof, close analysis and a reason why it matters.",
      diagram: `<svg viewBox="0 0 340 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A PEEL ladder: Point, Evidence, Explain, Link, with Explain the largest step"><rect x="15" y="8" width="310" height="40" rx="8" fill="#ede9fe" stroke="#8b5cf6"/><circle cx="38" cy="28" r="13" fill="#8b5cf6"/><text x="38" y="33" font-size="13" text-anchor="middle" fill="#ffffff">P</text><text x="60" y="32" font-size="11" fill="#4c1d95">Point: a claim that answers the question</text><rect x="15" y="60" width="310" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6"/><circle cx="38" cy="80" r="13" fill="#3b82f6"/><text x="38" y="85" font-size="13" text-anchor="middle" fill="#ffffff">E</text><text x="60" y="84" font-size="11" fill="#1e3a8a">Evidence: a short, embedded quotation</text><rect x="15" y="112" width="310" height="58" rx="8" fill="#dcfce7" stroke="#22c55e"/><circle cx="38" cy="141" r="13" fill="#22c55e"/><text x="38" y="146" font-size="13" text-anchor="middle" fill="#ffffff">E</text><text x="60" y="137" font-size="11" fill="#14532d">Explain: method, zoom in on words,</text><text x="60" y="152" font-size="11" fill="#14532d">connotations, effect (the longest part)</text><rect x="15" y="182" width="310" height="40" rx="8" fill="#fef3c7" stroke="#f59e0b"/><circle cx="38" cy="202" r="13" fill="#f59e0b"/><text x="38" y="207" font-size="13" text-anchor="middle" fill="#ffffff">L</text><text x="60" y="206" font-size="11" fill="#78350f">Link: back to the question, purpose or theme</text></svg>`,
      diagramCaption:
        "The PEEL ladder. Notice the Explain rung is the biggest: that is where the marks are.",
      keyPoints: [
        "PEEL = Point, Evidence, Explain, Link. PETAL = Point, Evidence, Technique, Analysis, Link.",
        "The explanation should be the longest part of the paragraph.",
        "One paragraph = one clear idea that answers the question.",
      ],
      thinkDeeper:
        "Some top-band essays do not follow PEEL in order: they might open with a quotation or end with a question. When is breaking the PEEL order a strength, and when does it become a weakness?",
    },
    {
      id: "thesis",
      heading: "Writing a thesis: your argument in a sentence",
      discovery: {
        problem:
          "The question is: 'How does Shakespeare present Caliban in *The Tempest*?' Which opening is a real thesis? (a) “In this essay I am going to write about Caliban.” (b) “Caliban is a character in *The Tempest* who lives on the island with Prospero.” (c) “Shakespeare presents Caliban as both a monster and a victim, so that the audience is left uncertain whether Prospero is a rightful ruler or a thief.”",
        idea:
          "Only (c) is a thesis. (a) is an announcement and (b) is a fact. (c) takes a position someone could disagree with, answers 'how' (both monster and victim) and hints at 'why' (to make the audience question Prospero).",
      },
      body:
        "A **thesis** (or **thesis statement**) is the one- or two-sentence argument that your whole essay sets out to prove. It goes in your introduction and every body paragraph should support it.\n\nA strong thesis is:\n\n- **Arguable:** someone could disagree. “Romeo loves Juliet” is a fact; “Shakespeare presents Romeo's love as intense but dangerously impulsive” is an argument.\n- **Specific:** it uses the words of the question and names the ideas you will explore.\n- **About methods and purpose:** it hints at *how* the writer does it and *why*.\n\nA useful formula: **[Writer] presents [X] as ___ and ___, in order to ___.** For example: “Shelley presents Ozymandias as arrogant and cruel in order to show that tyrants' power is always temporary.”\n\nAvoid **announcing** (“In this essay I will…”), **listing techniques** (“Shakespeare uses metaphors, similes and alliteration”) and **sitting on the fence** (“There are good and bad sides to Prospero”). If you want to show nuance, build it into the argument: “Although Prospero is presented as a wise father, Shakespeare also exposes his cruelty, especially towards Caliban.” The word **although** is a thesis-writer's best friend because it holds two ideas in tension.",
      keyPoints: [
        "A thesis is an arguable answer to the question, not a fact or an announcement.",
        "Formula: [Writer] presents [X] as ___ and ___, in order to ___.",
        "'Although…' theses show nuance without sitting on the fence.",
      ],
      thinkDeeper:
        "Can a thesis be TOO bold? Write one that overclaims about Hamlet (e.g. 'Hamlet is completely insane') and explain why it would be hard to prove with evidence from the play.",
    },
    {
      id: "embedding-quotations",
      heading: "Embedding short quotations smoothly",
      discovery: {
        problem:
          "Improve this: “Romeo loves Juliet. 'But, soft! what light through yonder window breaks? It is the east, and Juliet is the sun.' This shows he loves her a lot.” Cut the quotation down and weave it into ONE sentence of your own.",
        idea:
          "Something like: “Romeo's metaphor of Juliet as 'the sun' suggests that she lights up his world and that everything now revolves around her.” The quotation shrinks to two words, sits inside your sentence and leaves room for real analysis.",
      },
      body:
        "To **embed** a quotation means to weave it into your own sentence so that the sentence still makes grammatical sense. The opposite, a **dropped** or **hanging** quotation, is plonked on its own between your sentences and makes the reader do the work.\n\nThree ways to embed, from most to least fluent:\n\n- **Weave a word or phrase:** “Prospero calls Caliban a 'poisonous slave', revealing his contempt.”\n- **Introduce with a colon** (use a full clause before it): “Hamlet's disgust with the world is clear: it is 'an unweeded garden'.”\n- **Use a reporting phrase:** “When Mercutio curses 'both your houses', he blames both families equally.”\n\nRules that keep quotations accurate:\n\n- **Keep it short:** usually 1 to 8 words. If it is longer than a line, ask which words you will actually analyse.\n- **Copy exactly**, including old spellings such as 'star-cross'd'.\n- Use a **slash ( / )** to show a line break in verse: 'This island's mine, by Sycorax my mother, / Which thou tak'st from me'.\n- Use **square brackets** to change a word so your sentence flows: Caliban says that Prospero taught '[him] language'.\n- Use an **ellipsis (…)** to show you have cut words out.\n\nA good test: read your sentence aloud without the quotation marks. If it sounds like a normal, grammatical sentence, you have embedded it well.",
      diagram: `<svg viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An embedded quotation: your words, then a short quotation, then your analysis, all in one sentence"><text x="180" y="18" font-size="12" text-anchor="middle" fill="#374151">One smooth sentence</text><rect x="8" y="30" width="108" height="56" rx="6" fill="#e5e7eb" stroke="#6b7280"/><text x="62" y="54" font-size="11" text-anchor="middle" fill="#111827">Romeo calls</text><text x="62" y="70" font-size="11" text-anchor="middle" fill="#111827">Juliet</text><rect x="122" y="30" width="96" height="56" rx="6" fill="#fef3c7" stroke="#f59e0b"/><text x="170" y="62" font-size="13" text-anchor="middle" fill="#78350f">'the sun',</text><rect x="224" y="30" width="128" height="56" rx="6" fill="#dcfce7" stroke="#22c55e"/><text x="288" y="50" font-size="11" text-anchor="middle" fill="#14532d">suggesting she</text><text x="288" y="65" font-size="11" text-anchor="middle" fill="#14532d">lights up his</text><text x="288" y="80" font-size="11" text-anchor="middle" fill="#14532d">whole world.</text><text x="62" y="106" font-size="11" text-anchor="middle" fill="#4b5563">your words</text><text x="170" y="106" font-size="11" text-anchor="middle" fill="#92400e">short quotation</text><text x="288" y="106" font-size="11" text-anchor="middle" fill="#166534">your analysis</text><text x="180" y="130" font-size="11" text-anchor="middle" fill="#374151">Read it aloud: it should flow as normal English.</text></svg>`,
      diagramCaption:
        "An embedded quotation sits inside your sentence: your words, a few words of the text, then your analysis.",
      keyPoints: [
        "Embed: weave short quotations (1–8 words) into your own grammatical sentence.",
        "Use / for verse line breaks, [ ] to adjust a word and … to cut words.",
        "Choose only the words you are going to analyse.",
      ],
      thinkDeeper:
        "If shorter quotations are better, is a one-word quotation always best? Find a case where cutting a quotation too short would lose the very thing you want to analyse.",
    },
    {
      id: "zooming-in",
      heading: "Zooming in: single words and their connotations",
      discovery: {
        problem:
          "In Shelley's 'Ozymandias' the broken statue has a 'sneer of cold command'. Write down every feeling, image or idea the word 'sneer' makes you think of. Then swap it for 'smile'. How does the king change?",
        idea:
          "'Sneer' suggests contempt, mockery and looking down on others; 'smile' would suggest warmth or kindness. One word turns the king into an arrogant tyrant. That gap between what a word means and what it makes us feel is where analysis lives.",
      },
      body:
        "**Zooming in** means picking out a single word (or a tiny phrase) and exploring it in detail. It is the fastest way to move from Level 2 to Level 3 and beyond.\n\nEvery word has a **denotation**, its dictionary meaning, and **connotations**, the ideas, feelings and associations it carries. 'Home' and 'house' have similar denotations, but 'home' connotes warmth, safety and belonging.\n\nQuestions to ask when you zoom in:\n\n- **What does the word literally mean?** Then: what else does it suggest?\n- **What word class is it?** A **verb** (action word) can show force or movement; an **adjective** (describing word) shapes our judgement; a **noun** (naming word) can be a symbol.\n- **Why this word and not a synonym?** Shelley chose 'sneer', not 'frown' or 'smile'.\n- **Does it belong to a semantic field?** A **semantic field** is a group of words linked by topic. Dickens describes Scrooge with a semantic field of cold ('froze', 'frosty', 'iced'), turning his meanness into weather.\n- **What do its sounds do?** The hard 'c' alliteration of 'cold command' sounds clipped and harsh, like an order barked at a servant.\n\nNotice how Dickens piles up verbs: 'squeezing, wrenching, grasping, scraping, clutching'. Each is a **present participle** (an -ing verb form) of grabbing or holding tight, so the list itself feels greedy and relentless. Zooming in on one ('clutching') lets you say that Scrooge clings to money as if his life depends on it.",
      passage: {
        id: "scrooge-zoom",
        title: "Scrooge described",
        source: "Charles Dickens, A Christmas Carol (1843), Stave One",
        text:
          "Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster.",
        note: "covetous = greedily wanting what others have; flint = a hard stone struck with steel to make sparks.",
      },
      diagram: `<svg viewBox="0 0 340 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A connotation web for the word sneer, linking to contempt, mockery, arrogance, cruelty, superiority and scorn"><g stroke="#9ca3af" stroke-width="1.5"><line x1="170" y1="95" x2="62" y2="32"/><line x1="170" y1="95" x2="278" y2="32"/><line x1="170" y1="95" x2="50" y2="95"/><line x1="170" y1="95" x2="290" y2="95"/><line x1="170" y1="95" x2="62" y2="158"/><line x1="170" y1="95" x2="278" y2="158"/></g><ellipse cx="170" cy="95" rx="46" ry="24" fill="#fde68a" stroke="#d97706"/><text x="170" y="100" font-size="14" text-anchor="middle" fill="#78350f">'sneer'</text><g font-size="11" text-anchor="middle" fill="#1e3a8a"><rect x="22" y="20" width="80" height="24" rx="5" fill="#dbeafe" stroke="#3b82f6"/><text x="62" y="36">contempt</text><rect x="238" y="20" width="80" height="24" rx="5" fill="#dbeafe" stroke="#3b82f6"/><text x="278" y="36">mockery</text><rect x="8" y="83" width="84" height="24" rx="5" fill="#dbeafe" stroke="#3b82f6"/><text x="50" y="99">arrogance</text><rect x="250" y="83" width="80" height="24" rx="5" fill="#dbeafe" stroke="#3b82f6"/><text x="290" y="99">cruelty</text><rect x="18" y="146" width="88" height="24" rx="5" fill="#dbeafe" stroke="#3b82f6"/><text x="62" y="162">superiority</text><rect x="238" y="146" width="80" height="24" rx="5" fill="#dbeafe" stroke="#3b82f6"/><text x="278" y="162">scorn</text></g><text x="170" y="195" font-size="12" text-anchor="middle" fill="#374151">Big idea: proud, cruel, heartless power</text></svg>`,
      diagramCaption:
        "A connotation web. Brainstorm what one word suggests, then pull the associations together into a 'big idea' you can link to the question.",
      keyPoints: [
        "Denotation = dictionary meaning; connotation = the associations a word carries.",
        "Ask: why THIS word and not a synonym?",
        "Name the word class (verb, adjective, noun) and the semantic field when it helps your point.",
      ],
      thinkDeeper:
        "Dickens could have written 'Scrooge was mean.' Instead he wrote a whole list. Which is more powerful, one perfect word or a pile-up of many? Argue using the Scrooge extract.",
    },
    {
      id: "terminology-and-verbs",
      heading: "Terminology and analytical verbs: say it precisely",
      discovery: {
        problem:
          "What is wrong with this sentence? “Shakespeare uses lots of techniques such as metaphors, alliteration and imagery to make it more interesting for the reader.”",
        idea:
          "It names techniques without quotations or effects (feature spotting), and 'make it more interesting' could be said of any text ever written. Precise analysis names ONE method, quotes it, and explains a SPECIFIC effect.",
      },
      body:
        "**Terminology** means the technical words for writers' methods. Used accurately, it makes your analysis precise; used wrongly, it costs marks and credibility. A few you must use confidently:\n\n- **Metaphor:** saying something *is* something else ('Juliet is the sun'). **Simile:** comparing using 'like' or 'as' ('solitary as an oyster').\n- **Personification:** giving human qualities to something non-human. **Imagery:** language that creates a picture or sensation; always say *what kind* (e.g. imagery of decay).\n- **Juxtaposition:** placing contrasting ideas side by side. **Antithesis:** opposites set in balanced phrases ('my only love… my only hate'). **Oxymoron:** two contradictory words together ('sweet sorrow').\n- **Soliloquy:** a speech in which a character alone on stage reveals their thoughts. **Aside:** a short remark heard by the audience but not by other characters. **Dramatic irony:** when the audience knows something a character does not.\n- **Iambic pentameter:** a line of ten syllables in five da-DUM beats. **Rhyming couplet:** two rhyming lines in a row. **Caesura:** a pause in the middle of a line. **Enjambment:** a sentence running over a line break.\n\nTechnique names are only worth marks when they help you explain an **effect**. That is why your **analytical verbs** matter. 'Shows' is fine once, but precise verbs make your thinking sharper:\n\n- **suggests / implies:** hints at a meaning that is not stated outright.\n- **conveys:** communicates a feeling or idea.\n- **emphasises / highlights:** makes something stand out.\n- **evokes:** calls up a feeling or image in the reader.\n- **reinforces:** strengthens an idea already present.\n- **foreshadows:** hints at something that will happen later.\n\nBan these empty phrases: 'makes the reader want to read on', 'creates imagery' (what imagery?), 'makes it more interesting', 'paints a picture in the reader's head' (of what?).",
      keyPoints: [
        "Use a term only if you are sure it is correct AND you explain its effect.",
        "Swap 'shows' for precise verbs: suggests, implies, conveys, emphasises, evokes, highlights, reinforces.",
        "Generic effects ('more interesting', 'read on') earn nothing: be specific.",
      ],
      thinkDeeper:
        "'Suggests' and 'proves' are both verbs, but only one belongs in most literary analysis. Why is 'suggests' usually more accurate than 'proves' when writing about a writer's words?",
    },
    {
      id: "alternative-interpretations",
      heading: "Exploring alternative interpretations",
      discovery: {
        problem:
          "In *The Tempest* (Act 5 Scene 1), Miranda sees the shipwrecked lords, including the men who betrayed her father, and cries: 'O brave new world, / That has such people in't!' Prospero replies: ''Tis new to thee.' Is Miranda's line hopeful, naive, or ironic? Could it be more than one?",
        idea:
          "It can be read as joyful wonder (she has hardly seen other humans), as naivety (she cannot see that some of them are traitors), and Prospero's dry reply adds irony. The best answers hold more than one reading and decide which is most convincing.",
      },
      body:
        "Great literature is **ambiguous**: words can carry more than one meaning at once. Top-level answers explore **alternative interpretations** instead of pretending there is only one right answer.\n\nUse **tentative language** (language that shows you are weighing possibilities): *perhaps, may, might, could, possibly, it seems, arguably*. Then open up a second reading with phrases such as:\n\n- **Alternatively,** the word could suggest…\n- **On the other hand,** a modern audience might see…\n- **However,** this could also imply…\n- **At first** Prospero seems merciful; **yet** his final line could be read as…\n\nWhere do alternatives come from?\n\n- **Puns and double meanings:** when Claudius asks why 'the clouds still hang' on him, Hamlet replies, 'I am too much i' the sun', punning on *sun* and *son*: he resents being called Claudius's son.\n- **Different audiences:** a Jacobean audience in 1611 might see Caliban as a monster; many modern readers see a colonised victim.\n- **Tone:** 'O brave new world' can be sincere or ironic depending on who hears it.\n\nTwo warnings. First, every interpretation must be **rooted in the words**: 'perhaps Juliet is secretly an alien' has no evidence. Second, don't just list readings; **evaluate** them. Say which is more convincing and why: “While Caliban's curses make him seem savage, his poetic description of the island's 'sweet airs' suggests a sensitivity Prospero never acknowledges, which makes the 'victim' reading more persuasive.”",
      keyPoints: [
        "Tentative language: perhaps, may, might, could, arguably.",
        "Signal a second reading with 'Alternatively' or 'On the other hand'.",
        "Every reading must be rooted in the text, and the best answers judge which reading is strongest.",
      ],
      thinkDeeper:
        "If a text can mean many things, can it mean ANYTHING? Write a rule that separates a valid alternative interpretation from a wrong one.",
    },
    {
      id: "purpose-audience-context",
      heading: "Linking to purpose, audience and context",
      discovery: {
        problem:
          "The Prologue to *Romeo and Juliet* calls the lovers 'star-cross'd'. Many people in the 1590s took astrology seriously and believed the stars could shape a person's fate. How might that change the way an audience hears this phrase compared with you?",
        idea:
          "For an audience who took the stars seriously, 'star-cross'd' would sound like a curse written into the heavens: the lovers are doomed before the play begins. Context is useful when it changes how we read the WORDS, not when it is a random fact.",
      },
      body:
        "The **L** in PEEL is where you show you understand the bigger picture. Three things to link to:\n\n- **Purpose:** why did the writer make this choice? To warn, persuade, criticise society, build tension, create sympathy, entertain? Use phrases like “Shakespeare *may want* his audience to…” or “Blake *seems to be attacking*…”.\n- **Audience:** who was it written for and how might they react? Shakespeare's audience at the Globe included wealthy nobles and poorer 'groundlings' who stood in the yard; *The Tempest* was performed at court for King James I in 1611. A modern audience may respond very differently.\n- **Context:** the historical, social and literary background. Hamlet's father's ghost speaks of being trapped in a kind of purgatory, which would have unsettled a mostly Protestant audience taught that Purgatory did not exist. Blake's 'London' (1794) attacks a city where boys worked as chimney sweeps. Wilfred Owen fought in the First World War and wrote from first-hand experience of the trenches.\n\nThe key is **integration**. Weak context is **bolted on**: “Shakespeare was born in 1564 in Stratford-upon-Avon.” That tells us nothing about the text. Strong context is woven into the analysis of a word: “For an audience who believed the stars governed human lives, 'star-cross'd' would mark the lovers as doomed from the start, so every happy moment that follows is shadowed by tragedy.”\n\nA handy test: if you could paste the context sentence into an essay on *any* play, it is not doing its job.",
      keyPoints: [
        "Purpose = why the writer made the choice; audience = who reacts and how; context = background that changes the meaning.",
        "Integrate context into analysis of the words; never bolt on biography.",
        "Compare original and modern audiences for a perceptive point.",
      ],
      thinkDeeper:
        "Can you write a brilliant analysis of 'Ozymandias' with no context at all? What would you gain, and what would you lose, by adding that Shelley lived under a king and admired revolutions?",
    },
    {
      id: "essay-structure-comparison",
      heading: "Building the essay and comparing two texts",
      discovery: {
        problem:
          "You are writing about how Shakespeare presents Prospero. Your three paragraph ideas are: (A) he forgives his enemies in Act 5; (B) he controls Ariel and Caliban harshly in Act 1; (C) he starts to doubt his power in the masque speech of Act 4. What is the most logical order, and why?",
        idea:
          "B → C → A follows the play's journey: control, then doubt, then forgiveness. That shows the character developing, which is far more analytical than jumping around. A logical order is part of your argument.",
      },
      body:
        "An analytical **essay** is a chain of PEEL paragraphs held together by one argument.\n\n- **Introduction:** answer the question straight away, give your **thesis** and briefly signpost your ideas. No dictionary definitions, no 'Since the dawn of time…', no biography.\n- **Body paragraphs:** each begins with a **topic sentence** (the paragraph's point, using the question's key words). Order them **logically**: through the text from beginning to end, by idea, or building from the obvious reading to the most perceptive.\n- **Conclusion:** answer the question again, but with more depth than the introduction. Pull your points together, make a final judgement about the writer's purpose and add no new quotations.\n\n**Comparing two texts** (e.g. two poems in Term 2) adds one more skill: discussing similarities and differences in *what* the writers say and *how* they say it. Use **comparative connectives**:\n\n- **Similarity:** similarly, likewise, in the same way, equally, both.\n- **Difference:** whereas, however, in contrast, on the other hand, conversely, while, unlike.\n\nThe strongest comparisons are **integrated**: each paragraph discusses both texts. For example: “Both poets attack the abuse of power, but whereas Shelley mocks a single tyrant whose 'sneer of cold command' is now broken stone, Blake condemns a whole system whose 'mind-forg'd manacles' trap ordinary people.” A **block** approach (all of text A, then all of text B) is easier but often forgets to compare at all.\n\nAlways compare **methods** (form, structure, language) as well as content.",
      diagram: `<svg viewBox="0 0 340 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Essay structure: introduction with thesis, three body paragraphs in logical order, and a conclusion that answers the question"><rect x="20" y="8" width="230" height="40" rx="8" fill="#ede9fe" stroke="#8b5cf6"/><text x="135" y="25" font-size="12" text-anchor="middle" fill="#4c1d95">Introduction</text><text x="135" y="40" font-size="11" text-anchor="middle" fill="#4c1d95">answer + thesis + signpost</text><rect x="20" y="60" width="230" height="38" rx="8" fill="#dbeafe" stroke="#3b82f6"/><text x="135" y="84" font-size="11" text-anchor="middle" fill="#1e3a8a">Body 1: first idea (PEEL)</text><rect x="20" y="108" width="230" height="38" rx="8" fill="#dbeafe" stroke="#3b82f6"/><text x="135" y="132" font-size="11" text-anchor="middle" fill="#1e3a8a">Body 2: developing idea (PEEL)</text><rect x="20" y="156" width="230" height="38" rx="8" fill="#dbeafe" stroke="#3b82f6"/><text x="135" y="180" font-size="11" text-anchor="middle" fill="#1e3a8a">Body 3: most perceptive idea</text><rect x="20" y="204" width="230" height="40" rx="8" fill="#dcfce7" stroke="#22c55e"/><text x="135" y="221" font-size="12" text-anchor="middle" fill="#14532d">Conclusion</text><text x="135" y="236" font-size="11" text-anchor="middle" fill="#14532d">answer again, deeper</text><line x1="285" y1="20" x2="285" y2="225" stroke="#6b7280" stroke-width="2" marker-end="url(#anlA9)"/><defs><marker id="anlA9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#6b7280"/></marker></defs><text x="300" y="110" font-size="11" fill="#374151" transform="rotate(90 300 110)">logical order</text></svg>`,
      diagramCaption:
        "The essay skeleton: a thesis at the top, PEEL paragraphs in a logical order, and a conclusion that answers the question with more depth.",
      keyPoints: [
        "Introduction = answer + thesis; conclusion = deeper answer, no new quotations.",
        "Order paragraphs logically: through the text, by idea, or obvious → perceptive.",
        "Compare with connectives (similarly, whereas, in contrast) and compare methods, not just content.",
      ],
      thinkDeeper:
        "Integrated comparison is harder than the block method. Is it always better? Argue whether there is ever a good reason to write about one text first and then the other.",
    },
  ],

  passages: [
    {
      id: "rj-prologue",
      title: "The Prologue",
      source: "William Shakespeare, Romeo and Juliet (c.1595), Prologue to Act 1",
      text:
        "Two households, both alike in dignity,\nIn fair Verona, where we lay our scene,\nFrom ancient grudge break to new mutiny,\nWhere civil blood makes civil hands unclean.\nFrom forth the fatal loins of these two foes\nA pair of star-cross'd lovers take their life;\nWhose misadventured piteous overthrows\nDo with their death bury their parents' strife.\nThe fearful passage of their death-mark'd love,\nAnd the continuance of their parents' rage,\nWhich, but their children's end, nought could remove,\nIs now the two hours' traffic of our stage;\nThe which if you with patient ears attend,\nWhat here shall miss, our toil shall strive to mend.",
      note:
        "A sonnet spoken by the Chorus. dignity = high social status; mutiny = violent quarrel; civil = belonging to citizens; star-cross'd = thwarted by the stars (fate); traffic = business.",
    },
    {
      id: "caliban-isle",
      title: "'Be not afeard'",
      source: "William Shakespeare, The Tempest (1611), Act 3 Scene 2 (Caliban)",
      text:
        "Be not afeard; the isle is full of noises,\nSounds and sweet airs, that give delight and hurt not.\nSometimes a thousand twangling instruments\nWill hum about mine ears; and sometime voices\nThat, if I then had waked after long sleep,\nWill make me sleep again: and then, in dreaming,\nThe clouds methought would open and show riches\nReady to drop upon me, that when I waked\nI cried to dream again.",
      note:
        "Caliban, whom Prospero calls a monster and a slave, reassures the frightened Stephano and Trinculo. afeard = afraid; airs = tunes; methought = it seemed to me.",
    },
    {
      id: "ozymandias",
      title: "Ozymandias",
      source: "Percy Bysshe Shelley (1818)",
      text:
        "I met a traveller from an antique land,\nWho said—“Two vast and trunkless legs of stone\nStand in the desert. . . . Near them, on the sand,\nHalf sunk a shattered visage lies, whose frown,\nAnd wrinkled lip, and sneer of cold command,\nTell that its sculptor well those passions read\nWhich yet survive, stamped on these lifeless things,\nThe hand that mocked them, and the heart that fed;\nAnd on the pedestal, these words appear:\nMy name is Ozymandias, King of Kings;\nLook on my Works, ye Mighty, and despair!\nNothing beside remains. Round the decay\nOf that colossal Wreck, boundless and bare\nThe lone and level sands stretch far away.”",
      note:
        "Ozymandias is a Greek name for the Egyptian pharaoh Ramesses II. antique = ancient; trunkless = without a body; visage = face; mocked = imitated (and also ridiculed).",
    },
    {
      id: "scrooge",
      title: "The cold within him",
      source: "Charles Dickens, A Christmas Carol (1843), Stave One",
      text:
        "Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster. The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait; made his eyes red, his thin lips blue; and spoke out shrewdly in his grating voice. A frosty rime was on his head, and on his eyebrows, and his wiry chin. He carried his own low temperature always about with him; he iced his office in the dog-days; and didn't thaw it one degree at Christmas.",
      note:
        "gait = way of walking; rime = frost; dog-days = the hottest days of summer.",
    },
    {
      id: "hamlet-solid-flesh",
      title: "'O, that this too too solid flesh would melt'",
      source: "William Shakespeare, Hamlet (c.1600), Act 1 Scene 2 (Hamlet's first soliloquy, opening)",
      text:
        "O, that this too too solid flesh would melt,\nThaw and resolve itself into a dew!\nOr that the Everlasting had not fix'd\nHis canon 'gainst self-slaughter! O God! God!\nHow weary, stale, flat and unprofitable,\nSeem to me all the uses of this world!\nFie on't! ah fie! 'tis an unweeded garden,\nThat grows to seed; things rank and gross in nature\nPossess it merely. That it should come to this!",
      note:
        "Hamlet is alone after his mother has married his uncle Claudius barely two months after his father's death. 'solid' is the First Folio (1623) reading; the 1604 Quarto has 'sallied', which many editors print as 'sullied' (stained). the Everlasting = God; canon = law; self-slaughter = suicide; rank = foul-smelling, overgrown; merely = completely.",
    },
  ],

  quoteBank: [
    {
      quote: "It is the east, and Juliet is the sun.",
      source: "Romeo, Romeo and Juliet, Act 2 Scene 2",
      analysis:
        "A metaphor that places Juliet at the centre of Romeo's universe: she gives light, warmth and life. Zooming in on 'the sun' lets you argue that his love is worshipful and all-consuming, perhaps dangerously so. A perfect quotation to practise embedding: two words carry the whole idea.",
      themes: ["love", "light imagery"],
    },
    {
      quote: "My only love sprung from my only hate!",
      source: "Juliet, Romeo and Juliet, Act 1 Scene 5",
      analysis:
        "Antithesis balances 'love' against 'hate', and the repeated 'only' makes both feelings absolute. The verb 'sprung' suggests love growing suddenly out of hatred, like a plant from poisoned soil, foreshadowing the tragedy.",
      themes: ["love", "conflict", "fate"],
    },
    {
      quote: "This island's mine, by Sycorax my mother, / Which thou tak'st from me.",
      source: "Caliban, The Tempest, Act 1 Scene 2",
      analysis:
        "The possessive 'mine' asserts ownership bluntly, and the verb 'tak'st' frames Prospero as a thief. Ideal for a Level 4 point: an audience in 1611, as England was claiming land in the Americas, might be challenged to ask who the island really belongs to.",
      themes: ["power", "colonialism", "injustice"],
    },
    {
      quote: "You taught me language, and my profit on't / Is, I know how to curse.",
      source: "Caliban, The Tempest, Act 1 Scene 2",
      analysis:
        "Bitter irony: the 'gift' of language becomes a weapon. The financial noun 'profit' sarcastically suggests Caliban has gained nothing of value. A rich line for alternative readings: proof of his savagery, or proof of how Prospero's teaching failed him?",
      themes: ["power", "education", "rebellion"],
    },
    {
      quote: "this thing of darkness I / Acknowledge mine.",
      source: "Prospero (about Caliban), The Tempest, Act 5 Scene 1",
      analysis:
        "'Thing' dehumanises Caliban, yet 'acknowledge mine' accepts responsibility. Ambiguous: is Prospero simply claiming ownership of a servant, or admitting that the 'darkness' is partly his own? Perfect for practising 'Alternatively…'.",
      themes: ["responsibility", "power", "ambiguity"],
    },
    {
      quote: "'tis an unweeded garden, / That grows to seed",
      source: "Hamlet (soliloquy), Hamlet, Act 1 Scene 2",
      analysis:
        "An extended metaphor of neglect and decay: the world (and Denmark) has gone wild because no one tends it. Links to the play's wider imagery of rot and disease, and hints that Claudius's corruption is spreading.",
      themes: ["corruption", "despair", "decay"],
    },
    {
      quote: "Something is rotten in the state of Denmark.",
      source: "Marcellus, Hamlet, Act 1 Scene 4",
      analysis:
        "The adjective 'rotten' suggests decay spreading from within, and 'state' works on two levels: the condition of the country and the government itself. A clear example of how one word can carry a whole theme.",
      themes: ["corruption", "kingship"],
    },
    {
      quote: "A pair of star-cross'd lovers take their life",
      source: "Chorus, Romeo and Juliet, Prologue",
      analysis:
        "The compound adjective 'star-cross'd' presents the lovers as thwarted by fate. 'Take their life' is ambiguous: they are born ('take life') from the feuding families, and they will take their own lives. Context about belief in astrology deepens the sense of doom.",
      themes: ["fate", "tragedy"],
    },
    {
      quote: "sneer of cold command",
      source: "Percy Bysshe Shelley, 'Ozymandias' (1818)",
      analysis:
        "'Sneer' connotes contempt and mockery; 'cold' suggests a ruler without warmth or mercy; the hard 'c' alliteration sounds clipped and harsh. The irony is that this commanding face is now a 'shattered visage' half buried in sand.",
      themes: ["power", "pride", "time"],
    },
    {
      quote: "mind-forg'd manacles",
      source: "William Blake, 'London' (1794)",
      analysis:
        "A metaphor: 'manacles' are chains for a prisoner's wrists, but these are 'forg'd' (hammered out like metal) in the mind. Blake suggests people are trapped by ideas, fear and obedience as much as by poverty. A model of zooming in on a compound word.",
      themes: ["oppression", "society"],
    },
    {
      quote: "solitary as an oyster",
      source: "Charles Dickens, A Christmas Carol (1843), Stave One",
      analysis:
        "A simile: an oyster is tightly shut and hard on the outside. Scrooge is closed off from people. Alternatively, an oyster can hold a pearl, hinting that something precious may be hidden inside him, which the story later reveals.",
      themes: ["isolation", "redemption"],
    },
    {
      quote: "I am no bird; and no net ensnares me",
      source: "Jane, Charlotte Brontë, Jane Eyre (1847), Chapter 23",
      analysis:
        "Jane rejects the image of herself as a trapped bird. The declarative sentence and the negatives 'no… no' make her independence forceful. Context: a Victorian woman was expected to be dependent, which makes her claim bold.",
      themes: ["independence", "identity"],
    },
    {
      quote: "Shakespeare presents Caliban as both a monster and a victim, forcing his audience to question who is truly 'savage'.",
      source: "Model thesis sentence (original, written for this app)",
      analysis:
        "Why it works: it answers 'how' (two contrasting presentations), it is arguable, and it hints at the writer's purpose ('forcing his audience to question'). The embedded single word 'savage' is chosen for analysis later.",
      themes: ["thesis", "model sentence"],
    },
    {
      quote: "The verb 'clutching' suggests that Scrooge grips his money as if his life depends on it, yet perhaps it also hints at fear: a man who clutches is afraid of losing something.",
      source: "Model analytical sentence (original, written for this app)",
      analysis:
        "Why it works: it zooms in on one word, names its word class, uses a precise analytical verb ('suggests'), and then offers an alternative reading with 'perhaps'. Two levels of thinking in one sentence.",
      themes: ["zooming in", "model sentence"],
    },
  ],

  modelWriting: [
    {
      title: "A top-band PEEL paragraph",
      task: "How does Shakespeare present Romeo's feelings for Juliet in Act 2 Scene 2?",
      text:
        "Shakespeare presents Romeo's love for Juliet as worshipful and all-consuming from the opening of the balcony scene. Seeing her at the window, Romeo declares that 'Juliet is the sun'. This metaphor places Juliet at the centre of his universe: just as the sun gives light and life to the earth, she now seems to be the source of everything that matters to him. The noun 'sun' connotes light, warmth and life itself, suggesting that before Juliet, Romeo was living in darkness, which is striking given that only hours earlier he was lovesick for Rosaline. Perhaps, then, Shakespeare is hinting that Romeo's feelings are as extreme as they are sudden. Yet the image also carries danger: the sun cannot be touched without burning, which subtly foreshadows how this blazing love will destroy them both.",
      annotations: [
        "Point uses the question's key words ('presents', 'feelings') and makes an arguable claim ('worshipful and all-consuming').",
        "Evidence is two words, embedded smoothly in Romeo's sentence.",
        "Explains the method (metaphor), zooms in on 'sun' and its connotations.",
        "Uses tentative language ('Perhaps') and context within the play (Rosaline) for a perceptive twist.",
        "Final sentence links to the tragedy and the theme of fate, ending with a precise verb ('foreshadows').",
      ],
    },
    {
      title: "An introduction with a clear thesis",
      task: "How does Shakespeare present Caliban in The Tempest?",
      text:
        "Shakespeare presents Caliban as both a monster and a victim, and this double portrait is the key to the play's questions about power. Through Prospero's insults, Caliban appears savage and dangerous; yet through Caliban's own words, especially his claim that 'This island's mine' and his tender description of the island's 'sweet airs', he emerges as a dispossessed native with a poet's sensitivity. Written in 1611, as English settlers were claiming land in the Americas, the play leaves its audience uneasy about whether Prospero is a rightful ruler or a thief.",
      annotations: [
        "Answers the question in the very first sentence; no 'In this essay I will…'.",
        "The thesis is arguable and two-sided ('both a monster and a victim') without sitting on the fence.",
        "Signposts the essay's route: Prospero's view, then Caliban's own voice.",
        "Context is integrated and relevant (colonisation), not bolted-on biography.",
      ],
    },
    {
      title: "An integrated comparison paragraph",
      task: "Compare how power is presented in 'Ozymandias' and 'London'.",
      text:
        "Both poets present power as oppressive, but whereas Shelley focuses on the arrogance of one ruler, Blake condemns a whole society. Shelley's tyrant is captured in his 'sneer of cold command': the noun 'sneer' conveys contempt for his subjects, and the harsh alliteration of 'cold command' sounds like a barked order. Blake, in contrast, gives power no single face; instead he hears 'mind-forg'd manacles' in every voice, a metaphor suggesting that Londoners are chained by fear and obedience inside their own heads. Similarly, both poems hint that such power cannot last forever, yet Shelley is more hopeful: his 'colossal Wreck' lies broken in the desert, while Blake's manacles are still being forged.",
      annotations: [
        "Opens with a comparative point that covers BOTH texts.",
        "Comparative connectives ('whereas', 'in contrast', 'Similarly', 'while') signpost the comparison.",
        "Compares methods (noun, alliteration, metaphor), not just what the poems are about.",
        "Ends with an evaluative judgement about which poem is more hopeful, a perceptive final step.",
      ],
    },
    {
      title: "A perceptive paragraph with an alternative interpretation",
      task: "How does Shakespeare present Hamlet's state of mind in his first soliloquy (Act 1 Scene 2)?",
      text:
        "In his first soliloquy, Shakespeare presents Hamlet as so disgusted with life that the whole world seems spoiled. He describes it as 'an unweeded garden / That grows to seed', a metaphor of neglect in which nothing useful can grow. The adjective 'unweeded' implies that someone should be tending the garden but has failed to; perhaps Hamlet is blaming his mother, whose hasty remarriage has let 'rank and gross' things take root. Alternatively, the image may point towards Claudius, the new king, suggesting that the state itself is choking under corrupt rule. Either way, the garden becomes the first of the play's images of rot, so the audience senses that Hamlet's private grief is also a warning about the health of Denmark.",
      annotations: [
        "Clear point about state of mind, answering the question directly.",
        "Two short quotations, embedded with a slash for the verse line break.",
        "Zooms in on a single adjective ('unweeded') and asks what it implies.",
        "Offers two readings (Gertrude / Claudius) with 'perhaps' and 'Alternatively', then links them to a wider pattern of imagery.",
      ],
    },
  ],

  mnemonics: [
    {
      topic: "The shape of an analytical paragraph",
      device: "PEEL: Point, Evidence, Explain, Link",
      explanation:
        "Make a claim, prove it with a short embedded quotation, explain the method and effect (the longest part), then link back to the question, purpose or theme.",
    },
    {
      topic: "A more detailed paragraph scaffold",
      device: "PETAL: Point, Evidence, Technique, Analysis, Link",
      explanation:
        "Like PEEL, but it reminds you to name the Technique (e.g. metaphor) and then Analyse its effect separately, so you never feature spot without explaining.",
    },
    {
      topic: "What every explanation must cover",
      device: "WHW: What, How, Why",
      explanation:
        "WHAT does the writer show (the idea)? HOW do they show it (method, word, technique)? WHY (effect on the reader and the writer's purpose)? If a paragraph misses the How or the Why, it stays at Level 2.",
    },
    {
      topic: "Quotation length",
      device: "'Snip it, slip it, unzip it'",
      explanation:
        "SNIP the quotation down to the few words you need, SLIP it into your own sentence, then UNZIP it by analysing what those words suggest.",
    },
  ],

  examMistakes: [
    "Retelling the plot ('Then Romeo goes to the Capulet party and meets Juliet…') instead of analysing how the writer presents it.",
    "Feature spotting: 'There is a metaphor in this line' with no explanation of its effect.",
    "Copying out long quotations of three or four lines and then analysing none of the words.",
    "Leaving quotations hanging on their own instead of embedding them in a grammatical sentence.",
    "Using generic effects such as 'it makes the reader want to read on' or 'it creates imagery' that could apply to any text.",
    "Bolting on context ('Shakespeare was born in 1564') that has nothing to do with the words being analysed.",
    "Getting terminology wrong (calling a simile a metaphor, or calling a speech to other characters a soliloquy) so the analysis loses credibility.",
    "Writing an introduction that announces ('In this essay I will…') instead of answering the question with a thesis, or a conclusion that just repeats the introduction.",
  ],

  misconceptions: [
    {
      wrong: "The more techniques I name, the higher my mark.",
      right: "Marks come from explaining effects. One technique analysed in depth beats five techniques listed.",
    },
    {
      wrong: "Longer quotations show I know the text better.",
      right: "Short, precise quotations (1–8 words) show you have chosen exactly the words that matter, and they leave space for analysis.",
    },
    {
      wrong: "There is one correct meaning and I have to find it.",
      right: "Texts are often ambiguous. Exploring more than one reading, and judging which is most convincing, is what top answers do.",
    },
    {
      wrong: "Context means writing facts about the author's life.",
      right: "Context only earns credit when it helps explain the words or the audience's reaction, woven into your analysis.",
    },
    {
      wrong: "'Shows' is fine in every sentence.",
      right: "Precise analytical verbs (suggests, implies, conveys, emphasises, evokes, highlights) make your thinking clearer and more nuanced.",
    },
    {
      wrong: "A conclusion should summarise everything I have already said.",
      right: "A conclusion answers the question again with more depth, drawing your points together into a final judgement about the writer's purpose.",
    },
  ],

  expertDebates: [
    {
      question: "Does the writer's intention matter?",
      detail:
        "In 1946 the critics W. K. Wimsatt and Monroe Beardsley argued in 'The Intentional Fallacy' that we cannot know what a writer meant, so we should judge only the words on the page. In 1967 Roland Barthes went further in 'The Death of the Author', arguing that meaning is made by the reader. Others insist that context and purpose are essential. In school essays you can have it both ways: phrases like 'Shakespeare may want his audience to…' discuss purpose while admitting it is an interpretation.",
    },
    {
      question: "Is Caliban a villain or a victim?",
      detail:
        "Prospero and Miranda call Caliban a savage who tried to attack Miranda; he plots murder with Stephano and Trinculo. Yet he speaks some of the play's most beautiful poetry and insists the island was his first. Many modern productions, influenced by the history of colonialism, present him as an oppressed native. A strong essay weighs both readings using his own words.",
    },
    {
      question: "Is Hamlet's madness real or an act?",
      detail:
        "Hamlet tells Horatio he will 'put an antic disposition on' (pretend to be mad), and Polonius notices 'method' in his madness. Yet his grief, his rage at Ophelia and his reckless killing of Polonius make some readers think the act becomes real. Critics have disagreed for centuries, which makes it a perfect question for practising alternative interpretations.",
    },
  ],

  realWorld: [
    {
      title: "Film and game reviewers",
      detail:
        "A good review doesn't just say what happens: it explains how the director's choices (camera angles, music, dialogue) create tension or emotion. That's PEEL with a screen instead of a page.",
      emoji: "🎬",
    },
    {
      title: "Lawyers and judges",
      detail:
        "Lawyers zoom in on single words in contracts and laws ('may' vs 'must' can win or lose a case) and build an argument from evidence, exactly like a thesis supported by quotations.",
      emoji: "⚖️",
    },
    {
      title: "Advertising and politics",
      detail:
        "Understanding connotations helps you spot how adverts and speeches persuade you. 'Affordable' and 'cheap' mean similar things but feel very different.",
      emoji: "📣",
    },
    {
      title: "Sports punditry",
      detail:
        "Pundits analyse why a goal happened, not just that it did, using evidence (replays) and technical vocabulary. It's the same jump from retelling to analysing.",
      emoji: "⚽",
    },
    {
      title: "Science and history reports",
      detail:
        "Every subject that asks you to 'evaluate' or 'explain' wants a clear claim, evidence and reasoning. Analytical writing in English trains the skill for all of them.",
      emoji: "🔬",
    },
  ],

  flashcards: [
    { front: "PEEL", back: "Point, Evidence, Explain, Link: the structure of an analytical paragraph." },
    { front: "PETAL", back: "Point, Evidence, Technique, Analysis, Link." },
    { front: "Thesis", back: "A one- or two-sentence arguable answer to the question that the whole essay sets out to prove." },
    { front: "Embedding a quotation", back: "Weaving a short quotation into your own grammatical sentence, e.g. Romeo calls Juliet 'the sun', suggesting…" },
    { front: "Denotation vs connotation", back: "Denotation = dictionary meaning. Connotation = the ideas, feelings and associations a word carries." },
    { front: "Feature spotting", back: "Naming a technique without explaining its effect. It earns very few marks." },
    { front: "Semantic field", back: "A group of words linked by a topic, e.g. cold words for Scrooge: froze, frosty, iced." },
    { front: "Tentative language", back: "Words that show you are weighing possibilities: perhaps, may, might, could, arguably." },
    { front: "Six precise analytical verbs", back: "Suggests, implies, conveys, emphasises, evokes, highlights (also reinforces, foreshadows)." },
    { front: "Comparative connectives: similarity", back: "Similarly, likewise, in the same way, equally, both." },
    { front: "Comparative connectives: difference", back: "Whereas, however, in contrast, on the other hand, conversely, while, unlike." },
    { front: "Using / in a quotation", back: "Shows a line break in verse: 'This island's mine, by Sycorax my mother, / Which thou tak'st from me'." },
    { front: "Square brackets [ ] in a quotation", back: "Change or add a word so the quotation fits your sentence, e.g. Caliban says Prospero taught '[him] language'." },
    { front: "'Juliet is the sun': who and where?", back: "Romeo, Act 2 Scene 2 (the balcony scene). A metaphor." },
    { front: "'sneer of cold command': where from?", back: "Percy Bysshe Shelley, 'Ozymandias' (1818)." },
    { front: "What makes a good conclusion?", back: "It answers the question again with more depth, draws points together, judges the writer's purpose, and adds no new quotations." },
  ],

  mustKnow: [
    "Can you explain the difference between retelling and analysing, and rewrite a retelling sentence as analysis?",
    "Can you write a full PEEL or PETAL paragraph in which the explanation is the longest part?",
    "Can you write an arguable thesis that answers 'how' and hints at 'why'?",
    "Can you embed short quotations smoothly, using / for line breaks, [ ] and … correctly?",
    "Can you zoom in on a single word and explore its connotations and word class?",
    "Can you use terminology accurately and only when it helps you explain an effect?",
    "Can you replace 'shows' with precise analytical verbs such as suggests, implies, conveys and evokes?",
    "Can you offer an alternative interpretation with 'perhaps' or 'alternatively' and judge which reading is stronger?",
    "Can you link analysis to the writer's purpose, the audience and relevant context without bolting it on?",
    "Can you plan an essay with a logical paragraph order and compare two texts using comparative connectives?",
  ],

  videos: [
    {
      title: "How to write a PEE / PEEL paragraph",
      channel: "Mr Bruff",
      url: "https://www.youtube.com/results?search_query=mr+bruff+how+to+write+an+analytical+paragraph",
    },
    {
      title: "Zooming in on language: word-level analysis",
      channel: "Mr Salles Teaches English",
      url: "https://www.youtube.com/results?search_query=mr+salles+zoom+in+on+language+analysis",
    },
    {
      title: "Embedding quotations in English essays",
      channel: "Stacey Reay",
      url: "https://www.youtube.com/results?search_query=stacey+reay+embedding+quotations",
    },
    {
      title: "Writing an analytical essay (KS3)",
      channel: "BBC Bitesize",
      url: "https://www.youtube.com/results?search_query=bbc+bitesize+ks3+english+analytical+essay",
    },
  ],

  quiz: {
    mcq: [
      {
        id: "anl-quiz-mcq-1",
        question: "Which sentence about The Tempest is ANALYSIS rather than retelling?",
        options: [
          "Caliban tells Prospero that the island belonged to his mother, Sycorax.",
          "In Act 1 Scene 2, Prospero calls Caliban out of his cave and they argue.",
          "The possessive 'mine' in 'This island's mine' makes Caliban's claim sound defiant, suggesting he refuses to accept Prospero's rule.",
          "Caliban is angry with Prospero and later plots with Stephano and Trinculo.",
        ],
        answerIndex: 2,
        hint: "Look for the sentence that zooms in on a word and explains an effect.",
        explanation:
          "The option ‘The possessive 'mine' in 'This island's mine' makes Caliban's…’ names a method (the possessive 'mine'), quotes it and explains its effect ('defiant', 'refuses to accept'). The option ‘Caliban is angry with Prospero and later plots with Stephano and…’ is tempting because it mentions feelings, but it still only tells us what happens in the plot.",
        guideRef: "analysis-not-retelling",
      },
      {
        id: "anl-quiz-mcq-2",
        question: "What does PETAL stand for?",
        options: [
          "Point, Example, Theme, Argument, Language",
          "Point, Evidence, Technique, Analysis, Link",
          "Purpose, Evidence, Tone, Audience, Language",
          "Point, Explain, Technique, Audience, Length",
        ],
        answerIndex: 1,
        hint: "It is PEEL with the 'Explain' split into two steps.",
        explanation:
          "PETAL = Point, Evidence, Technique, Analysis, Link. The option ‘Point, Example, Theme, Argument, Language’ sounds plausible but 'Example' and 'Argument' are not the steps, and it loses the final Link.",
        guideRef: "peel-petal",
      },
      {
        id: "anl-quiz-mcq-3",
        question: "Which sentence embeds the quotation most smoothly?",
        options: [
          "Hamlet is depressed. 'How weary, stale, flat and unprofitable, / Seem to me all the uses of this world!' This shows he is sad.",
          "Hamlet says this quote: 'weary, stale, flat'.",
          "'How weary, stale, flat and unprofitable.' Hamlet is depressed.",
          "Hamlet finds life 'weary, stale, flat and unprofitable', a list of adjectives that drags on as heavily as his grief.",
        ],
        answerIndex: 3,
        hint: "Read each option aloud. Which flows as one grammatical sentence with analysis attached?",
        explanation:
          "The option ‘Hamlet finds life 'weary, stale, flat and…’ weaves the quotation into Hamlet's sentence and immediately analyses the list. The option ‘Hamlet is depressed. 'How weary, stale, flat…’ is the tempting one because it uses the right quotation, but it leaves a long quotation hanging between two sentences and analyses nothing.",
        guideRef: "embedding-quotations",
      },
      {
        id: "anl-quiz-mcq-4",
        question: "Which of these is an example of FEATURE SPOTTING?",
        options: [
          "Shakespeare uses alliteration and a metaphor in this line.",
          "The metaphor 'unweeded garden' suggests the world has been neglected and allowed to rot.",
          "The repeated 'only' makes Juliet's love and hate sound absolute.",
          "The simile 'solitary as an oyster' implies Scrooge has shut himself off from people.",
        ],
        answerIndex: 0,
        hint: "Feature spotting names techniques but forgets something important.",
        explanation:
          "The option ‘Shakespeare uses alliteration and a metaphor in…’ names two techniques without a quotation or any effect, which is feature spotting. The other three each quote the words and explain what they suggest, so they are genuine analysis.",
        guideRef: "terminology-and-verbs",
      },
    ],
    qa: [
      {
        id: "anl-quiz-qa-1",
        question:
          "This sentence is retelling: “Romeo goes to the balcony and says Juliet is the sun.” Rewrite it as one or two sentences of analysis.",
        marks: 3,
        hint: "Embed 'the sun', name the method, then explain what 'sun' suggests.",
        modelAnswer:
          "Romeo's metaphor of Juliet as 'the sun' suggests that she has become the centre of his world. The sun connotes light, warmth and life, implying that she has transformed his darkness into hope.",
        markScheme: [
          { point: "Embeds a short quotation ('the sun') in a sentence", keywords: ["the sun", "sun", "is the sun", "juliet is the"] },
          { point: "Names the method accurately (metaphor)", keywords: ["metaphor", "metaphorical", "comparison", "compares"] },
          { point: "Explains the connotation or effect of 'sun'", keywords: ["light", "warmth", "centre", "center", "life", "revolves", "bright", "darkness"] },
        ],
        commonError: "Rewriting the plot more neatly but still not explaining what the word 'sun' suggests.",
        guideRef: "analysis-not-retelling",
      },
      {
        id: "anl-quiz-qa-2",
        question:
          "Write a thesis statement answering: 'How does Shakespeare present Prospero's power in The Tempest?'",
        marks: 3,
        hint: "Use the formula: Shakespeare presents Prospero's power as ___ and ___, in order to ___.",
        modelAnswer:
          "Although Shakespeare presents Prospero's magic as wise and protective, he also exposes its harshness, especially towards Caliban and Ariel, in order to make his audience question whether any ruler should hold such complete control.",
        markScheme: [
          { point: "Makes an arguable claim that answers the question (not a fact or an announcement)", keywords: ["presents", "portrays", "depicts", "as both", "although", "while"] },
          { point: "Identifies at least one specific quality of Prospero's power", keywords: ["control", "cruel", "harsh", "wise", "protective", "tyrann", "magic", "manipulat"] },
          { point: "Hints at the writer's purpose or the effect on the audience", keywords: ["in order to", "audience", "question", "warn", "explore", "suggest", "purpose", "make us"] },
        ],
        commonError: "Writing 'In this essay I will talk about Prospero's power', which is an announcement, not an argument.",
        guideRef: "thesis",
      },
      {
        id: "anl-quiz-qa-3",
        extract: "In every cry of every Man,\nIn every Infants cry of fear,\nIn every voice: in every ban,\nThe mind-forg'd manacles I hear\n(William Blake, 'London', 1794)",
        question: "Zoom in on the phrase 'mind-forg'd manacles'. What do the words suggest about the people of London?",
        marks: 4,
        hint: "Take each word separately: what are manacles? What does 'forg'd' make you picture? Why 'mind'?",
        modelAnswer:
          "'Manacles' are chains or handcuffs for a prisoner, so Blake suggests that Londoners are trapped like convicts. The verb 'forg'd' evokes metal being hammered in a blacksmith's fire, implying the chains are strong and deliberately made. Yet they are made in the 'mind', which implies that people are imprisoned by ideas, fear and obedience to authority rather than by real iron. The metaphor therefore conveys that the people's oppression is psychological as well as physical, which makes it harder to escape.",
        markScheme: [
          { point: "Explains the denotation/connotation of 'manacles' (chains, prison, trapped)", keywords: ["chain", "handcuff", "shackle", "prison", "trapped", "captive", "restrain"] },
          { point: "Comments on 'forg'd' (made like metal, deliberately, strong)", keywords: ["forg", "blacksmith", "metal", "hammer", "made", "iron", "created"] },
          { point: "Explains the significance of 'mind' (mental, psychological imprisonment)", keywords: ["mental", "psycholog", "thoughts", "ideas", "fear", "belief", "their heads", "own minds"] },
          { point: "Names the method (metaphor) or draws an overall conclusion about the people", keywords: ["metaphor", "oppress", "powerless", "obedien", "society", "control", "suffering", "hopeless"] },
        ],
        commonError: "Treating the manacles as real handcuffs and missing that they exist in people's minds.",
        guideRef: "zooming-in",
      },
      {
        id: "anl-quiz-qa-4",
        extract: "My only love sprung from my only hate!\n(Juliet, Romeo and Juliet, Act 1 Scene 5, on discovering Romeo is a Montague)",
        question: "Write a full PEEL paragraph analysing how Shakespeare presents Juliet's feelings in this line.",
        marks: 5,
        hint: "Point → embed a few words → name the technique → zoom in on 'love'/'hate' or 'sprung' → link to fate or tragedy.",
        modelAnswer:
          "Shakespeare presents Juliet's love as instantly overwhelming and already tangled up with danger. On discovering who Romeo is, she cries that her 'only love sprung from my only hate'. The antithesis of 'love' and 'hate', balanced by the repeated 'only', makes both feelings sound absolute, as if there is no room in her heart for anything else. The verb 'sprung' suggests something growing suddenly, perhaps like a plant shooting up from poisoned ground, implying that this love has been born out of the very feud that will destroy it. This clash of opposites foreshadows the tragedy, reminding the audience that the lovers are 'star-cross'd' from the start.",
        markScheme: [
          { point: "Point: a clear claim answering the question about Juliet's feelings", keywords: ["presents", "portrays", "overwhelm", "conflicted", "torn", "shocked", "intense"] },
          { point: "Evidence: embeds a short quotation", keywords: ["only love", "only hate", "my only", "love sprung", "sprung from"] },
          { point: "Technique named accurately", keywords: ["antithesis", "juxtapos", "contrast", "repetition", "opposites", "exclamat"] },
          { point: "Explains the effect of specific words", keywords: ["sprung", "suddenly", "absolute", "repeated only", "grow", "both feelings", "intensity", "emphasis"] },
          { point: "Link: connects to fate, tragedy, the feud or the writer's purpose", keywords: ["fate", "tragedy", "foreshadow", "feud", "star cross", "doomed", "families", "audience"] },
        ],
        commonError: "Copying out the line and explaining what it means in plain English without naming or analysing the technique.",
        guideRef: "peel-petal",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "anl-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "anl-mcq-p1-q01",
            question: "Which best describes analytical writing in English?",
            options: [
              "Summarising the plot in the order it happens",
              "Explaining how a writer creates meaning and effects, and why",
              "Saying whether you enjoyed the text and would recommend it",
              "Listing as many techniques as you can find in the extract",
            ],
            answerIndex: 1,
            hint: "Think of the pundit, not the fan.",
            explanation:
              "Analysis explains HOW a writer creates meaning and WHY. Listing techniques ‘Listing as many techniques as you can find in the extract’ is tempting, but without explaining effects it is only feature spotting.",
            guideRef: "analysis-not-retelling",
          },
          {
            id: "anl-mcq-p1-q02",
            extract: "O, that this too too solid flesh would melt,\nThaw and resolve itself into a dew!\n(Hamlet, Act 1 Scene 2)",
            question: "Which sentence would sit at Level 3 (analysing) rather than Level 1 or 2?",
            options: [
              "Hamlet is very upset about his father's death.",
              "Hamlet wishes he could die because he is so sad.",
              "Hamlet's mother has married his uncle Claudius.",
              "The verbs 'melt' and 'thaw' suggest Hamlet wants his body simply to dissolve away, conveying exhausted despair.",
            ],
            answerIndex: 3,
            hint: "Which option quotes words and explains what they suggest?",
            explanation:
              "The option ‘The verbs 'melt' and 'thaw' suggest Hamlet…’ zooms in on two verbs and explains their effect, which is Level 3. The option ‘Hamlet wishes he could die because he…’ is tempting because it explains his feelings, but it uses no evidence and names no method, so it stays at Level 2.",
            guideRef: "analysis-not-retelling",
          },
          {
            id: "anl-mcq-p1-q03",
            question: "In a PEEL paragraph, which part should usually be the longest?",
            options: ["Explain", "Point", "Evidence", "Link"],
            answerIndex: 0,
            hint: "Where do you earn most of the marks?",
            explanation:
              "The Explain section is where you analyse methods and effects, so it should be the longest. Evidence ‘Evidence’ is tempting, but long quotations leave less room for analysis.",
            guideRef: "peel-petal",
          },
          {
            id: "anl-mcq-p1-q04",
            question: "What is the job of the 'Point' in PEEL?",
            options: [
              "To give a long quotation from the text",
              "To summarise what happens in the scene",
              "To make a clear claim that answers the question",
              "To list the techniques in the extract",
            ],
            answerIndex: 2,
            hint: "It is like the topic sentence of the paragraph.",
            explanation:
              "The Point is a clear, arguable claim that answers the question. Summarising the scene ‘To summarise what happens in the scene’ is tempting, but that is retelling, not a point.",
            guideRef: "peel-petal",
          },
          {
            id: "anl-mcq-p1-q05",
            question: "Which is the best topic sentence for a paragraph answering 'How does Shakespeare present Mercutio?'",
            options: [
              "Mercutio appears in Act 3 Scene 1.",
              "Shakespeare presents Mercutio as witty but reckless, a character whose jokes hide a fierce temper.",
              "In this paragraph I am going to talk about Mercutio.",
              "Mercutio is Romeo's friend and he dies.",
            ],
            answerIndex: 1,
            hint: "Look for the word 'presents' and an arguable claim.",
            explanation:
              "The option ‘Shakespeare presents Mercutio as witty but reckless,…’ uses the question's key word and makes an arguable claim about how Mercutio is presented. The option ‘Mercutio is Romeo's friend and he dies.’ is tempting because it is accurate, but it is plot, not an argument.",
            guideRef: "peel-petal",
          },
          {
            id: "anl-mcq-p1-q06",
            extract: "Hard and sharp as flint, from which no steel had ever struck out generous fire\n(Charles Dickens, A Christmas Carol)",
            question: "Which technique is 'Hard and sharp as flint'?",
            options: ["Metaphor", "Personification", "Oxymoron", "Simile"],
            answerIndex: 3,
            hint: "Look for a comparison word.",
            explanation:
              "It compares Scrooge to flint using 'as', so it is a simile. Metaphor ‘Metaphor’ is the tempting wrong answer: a metaphor would say Scrooge IS flint, without 'like' or 'as'.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-mcq-p1-q07",
            question: "Romeo says 'Juliet is the sun.' This is an example of…",
            options: ["a metaphor", "a simile", "personification", "alliteration"],
            answerIndex: 0,
            hint: "Does he say she is LIKE the sun, or that she IS the sun?",
            explanation:
              "Saying Juliet IS the sun is a metaphor. Simile ‘a simile’ is tempting, but a simile needs 'like' or 'as'.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-mcq-p1-q08",
            question: "What is a soliloquy?",
            options: [
              "A conversation between two lovers",
              "A short remark to the audience that other characters on stage cannot hear",
              "A speech in which a character alone on stage reveals their thoughts",
              "A poem of fourteen lines",
            ],
            answerIndex: 2,
            hint: "'Solo' is hidden in the word.",
            explanation:
              "A soliloquy is a speech by a character alone on stage revealing their inner thoughts, like Hamlet's 'To be, or not to be'. The option ‘A short remark to the audience that…’ describes an aside, which is short and spoken while others are present.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-mcq-p1-q09",
            question: "Choose the most precise analytical verb: “The adjective 'cold' ___ that Ozymandias ruled without mercy.”",
            options: ["says", "tells", "proves", "implies"],
            answerIndex: 3,
            hint: "The word hints at something rather than stating it outright.",
            explanation:
              "'Implies' fits because 'cold' hints at mercilessness without stating it. 'Proves' ‘proves’ is tempting because it sounds confident, but a single word cannot prove an interpretation; it suggests one.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-mcq-p1-q10",
            question: "Which sentence uses context most effectively?",
            options: [
              "Shakespeare was born in Stratford-upon-Avon in 1564.",
              "For an audience who believed the stars controlled human lives, 'star-cross'd' would mark the lovers as doomed from the start.",
              "Romeo and Juliet was written a very long time ago.",
              "Shakespeare also wrote Hamlet and The Tempest.",
            ],
            answerIndex: 1,
            hint: "Good context changes how we read particular words.",
            explanation:
              "The option ‘For an audience who believed the stars…’ links a belief of the time directly to the words 'star-cross'd' and their effect. The option ‘Shakespeare was born in Stratford-upon-Avon in 1564.’ is accurate but bolted on: it tells us nothing about the text.",
            guideRef: "purpose-audience-context",
          },
          {
            id: "anl-mcq-p1-q11",
            question: "Which phrase best signals an alternative interpretation?",
            options: ["Alternatively,", "Firstly,", "In conclusion,", "For example,"],
            answerIndex: 0,
            hint: "Which word opens up a second possible meaning?",
            explanation:
              "'Alternatively' introduces a different reading. 'For example' ‘For example,’ is tempting because it is a useful phrase, but it introduces evidence, not a new interpretation.",
            guideRef: "alternative-interpretations",
          },
          {
            id: "anl-mcq-p1-q12",
            question: "What is 'feature spotting'?",
            options: [
              "Finding the main theme of a text",
              "Using too many quotations in a paragraph",
              "Naming a technique without explaining its effect",
              "Spotting spelling mistakes in a text",
            ],
            answerIndex: 2,
            hint: "It looks clever but stops too early.",
            explanation:
              "Feature spotting is naming a technique ('there is alliteration') without explaining its effect. The option ‘Using too many quotations in a paragraph’ is a different problem: too many quotations crowd out analysis, but that isn't feature spotting.",
            guideRef: "analysis-not-retelling",
          },
          {
            id: "anl-mcq-p1-q13",
            question: "Why is 'This makes the reader want to read on' a weak comment?",
            options: [
              "It is too short.",
              "It uses the word 'reader'.",
              "It is not grammatical.",
              "It could be said about almost any text, so it explains nothing specific.",
            ],
            answerIndex: 3,
            hint: "Could you write this about every book in the library?",
            explanation:
              "It is generic: it could apply to any text, so it shows no understanding of these particular words. The option ‘It is too short.’ is tempting, but a short comment can be excellent if it is precise.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-mcq-p1-q14",
            question: "What is a thesis?",
            options: [
              "An arguable answer to the question that the essay sets out to prove",
              "A summary of the plot placed in the introduction",
              "The final quotation in an essay",
              "A list of the techniques you will discuss",
            ],
            answerIndex: 0,
            hint: "It's your argument in a sentence or two.",
            explanation:
              "A thesis is the arguable answer your whole essay proves. A list of techniques ‘A list of the techniques you will discuss’ is a common weak introduction, not a thesis, because it makes no argument.",
            guideRef: "thesis",
          },
          {
            id: "anl-mcq-p1-q15",
            extract: "A plague o' both your houses!\n(Mercutio, dying, Romeo and Juliet, Act 3 Scene 1)",
            question: "Which interpretation is best supported by the words?",
            options: [
              "Mercutio blames only the Capulets for his death.",
              "Mercutio blames both the Montagues and the Capulets for the feud that has killed him.",
              "Mercutio is praising both families.",
              "Mercutio is talking about an actual disease in Verona.",
            ],
            answerIndex: 1,
            hint: "Look at the word 'both'.",
            explanation:
              "'Both your houses' means both families, so he blames the Montagues as well as the Capulets. The option ‘Mercutio blames only the Capulets for his…’ is tempting because Tybalt, a Capulet, stabbed him, but 'both' shows his anger is directed at the whole feud.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-mcq-p1-q16",
            question: "Which is the best way to end a PEEL paragraph (the Link)?",
            options: [
              "That is my first point.",
              "Next I will look at Act 2.",
              "This tension between love and hate foreshadows the tragedy, reminding the audience that the lovers are doomed.",
              "This quote is really good.",
            ],
            answerIndex: 2,
            hint: "A link connects to the bigger picture: question, theme or purpose.",
            explanation:
              "The option ‘This tension between love and hate foreshadows…’ links the analysis to the theme of tragedy and the audience. The option ‘Next I will look at Act 2.’ is tempting as a signpost, but it links to nothing in the argument.",
            guideRef: "peel-petal",
          },
          {
            id: "anl-mcq-p1-q17",
            question: "Which comment about imagery is the most precise?",
            options: [
              "It creates imagery.",
              "It paints a picture in the reader's head.",
              "It uses lots of descriptive language.",
              "The imagery of weeds and rot suggests Denmark is decaying from within.",
            ],
            answerIndex: 3,
            hint: "Which one says WHAT kind of imagery and WHAT it suggests?",
            explanation:
              "The option ‘The imagery of weeds and rot suggests…’ names the kind of imagery (weeds and rot) and its effect. The option ‘It paints a picture in the reader's…’ is tempting because it sounds vivid, but it never says what picture or why it matters.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-mcq-p1-q18",
            question: "Which quotation length is usually best for embedding in an analytical paragraph?",
            options: [
              "A few words that you are going to analyse",
              "A whole speech, so nothing is missed",
              "At least three full lines",
              "None: always paraphrase instead",
            ],
            answerIndex: 0,
            hint: "Snip it, slip it, unzip it.",
            explanation:
              "Short quotations focus on exactly the words you will analyse. Paraphrasing ‘None: always paraphrase instead’ is tempting to save time, but without the writer's actual words you cannot analyse their choices.",
            guideRef: "embedding-quotations",
          },
          {
            id: "anl-mcq-p1-q19",
            question:
              "A student writes: “In Act 1, Romeo is sad about Rosaline. Then he goes to the Capulet party. Then he meets Juliet.” What is the main problem?",
            options: [
              "It uses too many quotations.",
              "It retells the plot instead of analysing how Shakespeare presents Romeo.",
              "It gets the order of events wrong.",
              "Its sentences are too long.",
            ],
            answerIndex: 1,
            hint: "Count the 'then's.",
            explanation:
              "The paragraph is pure retelling: no quotations, no methods, no effects. The option ‘It gets the order of events wrong.’ is tempting, but the order is actually correct; the problem is that the student is narrating, not analysing.",
            guideRef: "analysis-not-retelling",
          },
          {
            id: "anl-mcq-p1-q20",
            question: "Which sentence reaches Level 4 (perceptive)?",
            options: [
              "Caliban curses Prospero a lot in the play.",
              "Caliban uses language to curse, which shows he is angry.",
              "Caliban's bitter claim that his only 'profit' from learning language is the ability to curse could show his savagery, or, perhaps more convincingly, condemn a master who taught him words but no kindness.",
              "The word 'curse' is a verb.",
            ],
            answerIndex: 2,
            hint: "Look for alternatives and a judgement between them.",
            explanation:
              "The option ‘Caliban's bitter claim that his only 'profit'…’ zooms in on 'profit', offers two readings and judges which is more convincing: that is perceptive. The option ‘Caliban uses language to curse, which shows…’ is tempting because it makes a point about language, but its effect ('he is angry') is basic and undeveloped.",
            guideRef: "alternative-interpretations",
          },
        ],
      },
      {
        id: "anl-mcq-p2",
        title: "MCQ Paper 2",
        passage: {
          id: "p2-ozymandias",
          title: "Ozymandias",
          source: "Percy Bysshe Shelley (1818)",
          text:
            "I met a traveller from an antique land,\nWho said—“Two vast and trunkless legs of stone\nStand in the desert. . . . Near them, on the sand,\nHalf sunk a shattered visage lies, whose frown,\nAnd wrinkled lip, and sneer of cold command,\nTell that its sculptor well those passions read\nWhich yet survive, stamped on these lifeless things,\nThe hand that mocked them, and the heart that fed;\nAnd on the pedestal, these words appear:\nMy name is Ozymandias, King of Kings;\nLook on my Works, ye Mighty, and despair!\nNothing beside remains. Round the decay\nOf that colossal Wreck, boundless and bare\nThe lone and level sands stretch far away.”",
          note:
            "antique = ancient; trunkless = without a body; visage = face; mocked = imitated (and also ridiculed); fed = nourished (the king's passions).",
        },
        questions: [
          {
            id: "anl-mcq-p2-q01",
            question: "In the poem, who actually describes the statue?",
            options: [
              "A traveller, whose words are reported by the speaker",
              "Ozymandias himself",
              "The sculptor who carved it",
              "The speaker, who has seen it with his own eyes",
            ],
            answerIndex: 0,
            hint: "Look at the first two lines: 'I met a traveller… Who said'.",
            explanation:
              "The speaker reports what a traveller told him, so the description is second-hand. The option ‘The speaker, who has seen it with…’ is tempting because the poem begins with 'I', but the 'I' only met the traveller; he never saw the statue.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-mcq-p2-q02",
            question: "What is the denotation (dictionary meaning) of 'visage'?",
            options: ["a ruler", "a statue's base", "a face", "a desert"],
            answerIndex: 2,
            hint: "It has a frown and a wrinkled lip.",
            explanation:
              "'Visage' means face. 'A statue's base' ‘a statue's base’ is the pedestal, mentioned later in the poem.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-mcq-p2-q03",
            question: "Which pair of words best describes the connotations of 'sneer'?",
            options: ["kindness and warmth", "contempt and mockery", "sadness and regret", "fear and nervousness"],
            answerIndex: 1,
            hint: "Picture someone sneering at you.",
            explanation:
              "A sneer is a scornful, mocking expression, so it connotes contempt. 'Sadness and regret' ‘sadness and regret’ might fit the ruined statue, but not the expression itself.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-mcq-p2-q04",
            question: "The alliteration in 'cold command' mainly creates…",
            options: [
              "a soft, soothing sound",
              "a sense of joy and celebration",
              "a gentle rhythm like a lullaby",
              "a hard, clipped sound like a harsh order",
            ],
            answerIndex: 3,
            hint: "Say it aloud. Is the 'c' sound soft or hard?",
            explanation:
              "The repeated hard 'c' sounds clipped and harsh, matching a tyrant barking orders. The option ‘a soft, soothing sound’ is the opposite of the effect: soft sounds come from letters like 's', 'l' and 'm'.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-mcq-p2-q05",
            question: "Which sentence embeds a quotation from the poem correctly?",
            options: [
              "Shelley describes the statue's 'shattered visage', suggesting that the king's power has been broken.",
              "Shelley says 'Half sunk a shattered visage lies, whose frown, And wrinkled lip, and sneer of cold command' this shows he is cruel.",
              "'Shattered visage.' This shows the statue is broken.",
              "Shelley describes the statue's shattered visage on line 4.",
            ],
            answerIndex: 0,
            hint: "Look for short, correctly punctuated words woven into a sentence that also analyses.",
            explanation:
              "The option ‘Shelley describes the statue's 'shattered visage', suggesting…’ weaves two words into a grammatical sentence and analyses them. The option ‘Shelley describes the statue's shattered visage on…’ is tempting because it is short, but it has no quotation marks, so the reader cannot tell which words are Shelley's.",
            guideRef: "embedding-quotations",
          },
          {
            id: "anl-mcq-p2-q06",
            question: "Which is the correct way to quote lines 10–11 to show the line break?",
            options: [
              "My name is Ozymandias, King of Kings, Look on my Works",
              "'My name is Ozymandias, King of Kings; / Look on my Works, ye Mighty, and despair!'",
              "'My name is Ozymandias, King of Kings; - Look on my Works'",
              "'My name is Ozymandias, King of Kings' 'Look on my Works, ye Mighty, and despair!'",
            ],
            answerIndex: 1,
            hint: "Which punctuation mark shows a new line of verse?",
            explanation:
              "A forward slash ( / ) marks a line break when you quote verse. The option ‘My name is Ozymandias, King of Kings'…’ is tempting because both parts are in quotation marks, but splitting them into two quotations hides that they run on.",
            guideRef: "embedding-quotations",
          },
          {
            id: "anl-mcq-p2-q07",
            question: "What is ironic about the words 'Look on my Works, ye Mighty, and despair!'?",
            options: [
              "The king is being humble and modest.",
              "The traveller wrote them on the pedestal.",
              "The 'Works' have vanished, so the boast now mocks the king instead of frightening others.",
              "They are spoken by a god, not a man.",
            ],
            answerIndex: 2,
            hint: "Read the line straight after the inscription.",
            explanation:
              "He meant other rulers to despair at his greatness, but 'Nothing beside remains', so the boast turns against him. The option ‘The king is being humble and modest.’ is wrong: the imperatives 'Look' and 'despair' are arrogant, not humble.",
            guideRef: "alternative-interpretations",
          },
          {
            id: "anl-mcq-p2-q08",
            question: "Why is the short sentence 'Nothing beside remains.' so effective straight after the inscription?",
            options: [
              "It introduces a new character.",
              "It describes the sculptor's skill.",
              "It explains where the desert is.",
              "Its bluntness deflates the boast, showing that nothing is left of the king's 'Works'.",
            ],
            answerIndex: 3,
            hint: "Think about what comes immediately before it.",
            explanation:
              "The short, flat statement punctures the grand boast. The option ‘It describes the sculptor's skill.’ is wrong because the sculptor is discussed earlier (lines 6–8), not here.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-mcq-p2-q09",
            question: "What does the adjective 'colossal' suggest in 'that colossal Wreck'?",
            options: [
              "The statue was enormous, so its ruin makes the king's fall even more striking.",
              "The statue is still standing proudly.",
              "The statue was made of wood.",
              "The statue was tiny and easily forgotten.",
            ],
            answerIndex: 0,
            hint: "'Colossal' comes from 'colossus', a giant statue.",
            explanation:
              "'Colossal' means huge, and placing it next to 'Wreck' stresses how great things fall. The option ‘The statue is still standing proudly.’ is wrong because 'Wreck' and 'decay' show it is ruined.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-mcq-p2-q10",
            question: "Which technique is used in 'lone and level'?",
            options: ["Simile", "Alliteration", "Oxymoron", "Rhetorical question"],
            answerIndex: 1,
            hint: "Listen to the first letters.",
            explanation:
              "Both words begin with 'l', so this is alliteration. Oxymoron ‘Oxymoron’ is wrong: 'lone' and 'level' do not contradict each other.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-mcq-p2-q11",
            question: "Choose the most precise verb: “The empty desert ___ how small human power is compared with time.”",
            options: ["tells", "is about", "emphasises", "says"],
            answerIndex: 2,
            hint: "Which verb means 'makes it stand out'?",
            explanation:
              "'Emphasises' is precise: the vast desert makes the smallness of power stand out. 'Tells' ‘tells’ is vague and suggests the poem states it directly, which it does not.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-mcq-p2-q12",
            question: "Which zoom-in comment about 'shattered' is strongest?",
            options: [
              "It is a describing word.",
              "It is an adjective that describes the visage.",
              "It makes the poem more interesting.",
              "The adjective 'shattered' suggests violent, complete destruction, as if the king's power has been smashed beyond repair.",
            ],
            answerIndex: 3,
            hint: "Naming the word class is only the start.",
            explanation:
              "The option ‘The adjective 'shattered' suggests violent, complete destruction,…’ names the word class AND explores what it suggests, then links it to the king's power. The option ‘It is an adjective that describes the…’ is tempting because the terminology is correct, but it explains no effect.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-mcq-p2-q13",
            question: "'Mocked' once meant 'imitated' as well as 'ridiculed'. What does this double meaning add to 'The hand that mocked them'?",
            options: [
              "The sculptor both copied the king's expressions in stone and, perhaps, secretly made fun of them.",
              "The king laughed at his own statue.",
              "The traveller ridiculed the sculptor.",
              "The king's soldiers mocked the sculptor.",
            ],
            answerIndex: 0,
            hint: "Whose hand carved the face?",
            explanation:
              "The sculptor's hand imitated the king's passions and may also have ridiculed them, quietly exposing his cruelty. The option ‘The king laughed at his own statue.’ is wrong: 'hand' refers to the sculptor, not the king.",
            guideRef: "alternative-interpretations",
          },
          {
            id: "anl-mcq-p2-q14",
            question: "What is a semantic field?",
            options: [
              "The place where a poem is set",
              "A group of words linked by a common topic",
              "A type of rhyme scheme",
              "The dictionary meaning of one word",
            ],
            answerIndex: 1,
            hint: "Think 'family of words'.",
            explanation:
              "A semantic field is a group of words connected by topic, e.g. ruin or cold. The option ‘The dictionary meaning of one word’ describes denotation, which is about one word, not a group.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-mcq-p2-q15",
            question: "Which group of words from the poem creates a semantic field of ruin?",
            options: [
              "traveller, antique, land",
              "name, Kings, Mighty",
              "shattered, decay, Wreck",
              "sculptor, hand, heart",
            ],
            answerIndex: 2,
            hint: "Which words describe things falling apart?",
            explanation:
              "'Shattered', 'decay' and 'Wreck' all belong to the topic of ruin. The option ‘name, Kings, Mighty’ is a semantic field too, but of power, not ruin.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-mcq-p2-q16",
            question: "A student writes: “The word sneer shows he is mean.” Which is the best improvement?",
            options: [
              "The word sneer shows he is very, very mean.",
              "Sneer shows he is mean and nasty.",
              "The word 'SNEER' proves he is evil.",
              "The word 'sneer' suggests contempt, as if he looks down on everyone beneath him.",
            ],
            answerIndex: 3,
            hint: "Look for quotation marks, a precise verb and a developed effect.",
            explanation:
              "The option ‘The word 'sneer' suggests contempt, as if…’ uses quotation marks, a precise verb ('suggests') and a developed connotation. The option ‘The word 'SNEER' proves he is evil.’ is tempting because it adds quotation marks, but 'proves he is evil' overclaims and is no more precise.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-mcq-p2-q17",
            question: "Which sentence uses square brackets correctly?",
            options: [
              "The traveller says that the legs '[s]tand in the desert'.",
              "The traveller says that the legs [stand in the desert].",
              "The traveller says [that] 'the legs stand'.",
              "The traveller 'says' [the legs stand in the desert].",
            ],
            answerIndex: 0,
            hint: "Square brackets show a change made INSIDE a quotation.",
            explanation:
              "In A the capital 'S' of 'Stand' is changed to lower case so the quotation fits the sentence, and the brackets show the change. The option ‘The traveller says that the legs [stand…’ is tempting, but it uses brackets instead of quotation marks, so the quotation is not marked at all.",
            guideRef: "embedding-quotations",
          },
          {
            id: "anl-mcq-p2-q18",
            question: "Which is a valid ALTERNATIVE interpretation of the poem's message?",
            options: [
              "The poem is mainly a guide to carving stone.",
              "While the poem mocks one tyrant's pride, it could also be read as a warning that all human achievement, even art, is eventually swallowed by time.",
              "The poem proves that Shelley hated deserts.",
              "The poem shows that kings are always good and wise.",
            ],
            answerIndex: 1,
            hint: "A valid reading must be rooted in the words of the poem.",
            explanation:
              "The option ‘While the poem mocks one tyrant's pride,…’ is rooted in the text: even the sculptor's work is a 'Wreck' surrounded by 'decay'. The option ‘The poem proves that Shelley hated deserts.’ is not supported: the desert is a setting, not the target of Shelley's criticism.",
            guideRef: "alternative-interpretations",
          },
          {
            id: "anl-mcq-p2-q19",
            question: "Shelley was a radical who opposed tyranny. Which sentence uses this context best?",
            options: [
              "Shelley was born in 1792.",
              "Shelley wrote many famous poems.",
              "Shelley, who despised tyranny, may have intended the ruined statue as a warning to the powerful rulers of his own time.",
              "Context is not relevant to poetry.",
            ],
            answerIndex: 2,
            hint: "Which option connects the context to the poem's meaning?",
            explanation:
              "The option ‘Shelley, who despised tyranny, may have intended…’ uses context to explain a possible purpose behind the poem. The option ‘Shelley was born in 1792.’ is accurate but bolted on: his birth year tells us nothing about the statue.",
            guideRef: "purpose-audience-context",
          },
          {
            id: "anl-mcq-p2-q20",
            question: "Which comment on the final line, 'The lone and level sands stretch far away', is the most perceptive?",
            options: [
              "It describes some sand.",
              "It uses alliteration.",
              "It shows there is a desert.",
              "The long vowels and alliteration make the desert seem endless, so the closing image shrinks the 'King of Kings' to nothing against the vastness of time.",
            ],
            answerIndex: 3,
            hint: "Which comment links sound, image and the poem's big idea?",
            explanation:
              "The option ‘The long vowels and alliteration make the…’ analyses sound and image and links them to the poem's message about power and time. The option ‘It uses alliteration.’ is accurate terminology, but on its own it is feature spotting.",
            guideRef: "analysis-not-retelling",
          },
        ],
      },
      {
        id: "anl-mcq-p3",
        title: "MCQ Paper 3",
        passage: {
          id: "p3-prologue",
          title: "The Prologue",
          source: "William Shakespeare, Romeo and Juliet (c.1595), Prologue to Act 1",
          text:
            "Two households, both alike in dignity,\nIn fair Verona, where we lay our scene,\nFrom ancient grudge break to new mutiny,\nWhere civil blood makes civil hands unclean.\nFrom forth the fatal loins of these two foes\nA pair of star-cross'd lovers take their life;\nWhose misadventured piteous overthrows\nDo with their death bury their parents' strife.\nThe fearful passage of their death-mark'd love,\nAnd the continuance of their parents' rage,\nWhich, but their children's end, nought could remove,\nIs now the two hours' traffic of our stage;\nThe which if you with patient ears attend,\nWhat here shall miss, our toil shall strive to mend.",
          note:
            "dignity = high social status; mutiny = violent quarrel; civil = belonging to citizens; loins = the body as the source of children; star-cross'd = thwarted by the stars; but = except; traffic = business.",
        },
        questions: [
          {
            id: "anl-mcq-p3-q01",
            question: "What form is the Prologue written in?",
            options: ["A ballad", "A sonnet", "Free verse", "A soliloquy"],
            answerIndex: 1,
            hint: "Count the lines and look at the final two.",
            explanation:
              "It has 14 lines and ends with a rhyming couplet, so it is a sonnet, a form associated with love poetry. A soliloquy ‘A soliloquy’ is tempting because one actor speaks it, but the Chorus addresses the audience rather than revealing private thoughts.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-mcq-p3-q02",
            question: "What is the main purpose of the Prologue?",
            options: [
              "To introduce the Nurse as a comic character",
              "To describe the weather in Verona",
              "To make the audience laugh before the tragedy",
              "To tell the audience the outline of the story, including the lovers' deaths, before it begins",
            ],
            answerIndex: 3,
            hint: "What does the audience know by the end of these 14 lines?",
            explanation:
              "The Chorus outlines the feud, the love and the deaths. The option ‘To make the audience laugh before the…’ is wrong: the tone is solemn ('fatal', 'death-mark'd'), not comic.",
            guideRef: "purpose-audience-context",
          },
          {
            id: "anl-mcq-p3-q03",
            question: "Which is the best-supported reason for Shakespeare revealing the ending in the Prologue?",
            options: [
              "So the audience watches with dramatic irony, knowing the lovers are doomed even in their happiest moments",
              "Because he had not yet written the ending",
              "To confuse the audience about what will happen",
              "Because the actors could not perform the final scene",
            ],
            answerIndex: 0,
            hint: "How does knowing the ending change how you watch a love scene?",
            explanation:
              "Knowing the outcome creates dramatic irony and makes every happy moment bittersweet. The option ‘To confuse the audience about what will…’ is the opposite of the effect: the Prologue makes the outcome clear, not confusing.",
            guideRef: "purpose-audience-context",
          },
          {
            id: "anl-mcq-p3-q04",
            question: "In 'Where civil blood makes civil hands unclean', what does the repetition of 'civil' emphasise?",
            options: [
              "That the citizens are polite to one another",
              "That the play is set in a city",
              "That citizens are spilling the blood of fellow citizens, like a civil war",
              "That the citizens' hands are dirty from work",
            ],
            answerIndex: 2,
            hint: "The note says 'civil' means 'belonging to citizens'.",
            explanation:
              "The repetition stresses that citizens are killing citizens: the violence is within one community. The option ‘That the citizens are polite to one…’ is tempting because 'civil' can mean polite today, but here it means 'of citizens', which creates a bitter irony.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-mcq-p3-q05",
            question: "What does 'star-cross'd' suggest about the lovers?",
            options: [
              "They are astronomers.",
              "They are thwarted by fate.",
              "They are angry with each other.",
              "They are famous, like stars.",
            ],
            answerIndex: 1,
            hint: "'Cross' here means to block or oppose.",
            explanation:
              "'Star-cross'd' means the stars (fate) are against them. The option ‘They are famous, like stars.’ is tempting with modern ears, where a 'star' is a celebrity, but that meaning did not exist for Shakespeare's audience.",
            guideRef: "purpose-audience-context",
          },
          {
            id: "anl-mcq-p3-q06",
            question: "Which is the best thesis for: 'How does Shakespeare present fate in Romeo and Juliet?'",
            options: [
              "Fate is in the play.",
              "In this essay I will discuss fate.",
              "Shakespeare uses lots of techniques to show fate.",
              "Shakespeare presents fate as an inescapable force shadowing the lovers from the Prologue onwards, yet he also suggests that their own haste helps bring about the tragedy.",
            ],
            answerIndex: 3,
            hint: "Which one could someone disagree with?",
            explanation:
              "The option ‘Shakespeare presents fate as an inescapable force…’ is arguable, specific and nuanced ('yet'). The option ‘Shakespeare uses lots of techniques to show…’ is tempting because it mentions techniques, but it names none and makes no argument.",
            guideRef: "thesis",
          },
          {
            id: "anl-mcq-p3-q07",
            question: "Which word is most useful for building nuance into a thesis?",
            options: ["Although", "Firstly", "Also", "Then"],
            answerIndex: 0,
            hint: "Which word holds two ideas in tension?",
            explanation:
              "'Although' lets you hold two ideas at once ('Although Prospero seems wise, …'). 'Also' ‘Also’ only adds another idea; it doesn't create tension between them.",
            guideRef: "thesis",
          },
          {
            id: "anl-mcq-p3-q08",
            question: "Which comment on 'death-mark'd love' uses the most precise analytical verb?",
            options: [
              "The phrase is about death.",
              "The phrase says their love is death.",
              "The compound adjective 'death-mark'd' implies their love is branded for death from the start.",
              "The phrase makes the Prologue more interesting.",
            ],
            answerIndex: 2,
            hint: "Look for a verb that hints rather than states.",
            explanation:
              "'Implies' is precise, and the option ‘The compound adjective 'death-mark'd' implies their love…’ also names the word type and explains 'mark'd' as 'branded'. The option ‘The phrase says their love is death.’ is tempting because it addresses the meaning, but 'says' is vague and misreads the phrase.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-mcq-p3-q09",
            question: "Which verb means 'to hint at something that will happen later'?",
            options: ["emphasises", "foreshadows", "evokes", "conveys"],
            answerIndex: 1,
            hint: "A shadow arrives before the person.",
            explanation:
              "'Foreshadows' means hints at future events. 'Evokes' ‘evokes’ means calls up a feeling or image; it is not about the future.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-mcq-p3-q10",
            question: "Which verb means 'to call up a feeling or image in the reader's mind'?",
            options: ["reinforces", "foreshadows", "implies", "evokes"],
            answerIndex: 3,
            hint: "It shares a root with 'vocal': to call out.",
            explanation:
              "'Evokes' means calls up a feeling or image. 'Implies' ‘implies’ is close, but it means hints at a meaning, not calls up a sensation.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-mcq-p3-q11",
            question: "In 'From forth the fatal loins of these two foes', the phrase 'fatal loins' places birth next to death. Which technique is this?",
            options: [
              "Juxtaposition: placing birth ('loins') next to death ('fatal')",
              "Onomatopoeia",
              "Rhetorical question",
              "Simile",
            ],
            answerIndex: 0,
            hint: "Two contrasting ideas side by side.",
            explanation:
              "Placing contrasting ideas side by side is juxtaposition: the source of life is called deadly. Simile ‘Simile’ is wrong as there is no 'like' or 'as'.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-mcq-p3-q12",
            question: "Which phrase best introduces an alternative reading?",
            options: [
              "In conclusion,",
              "This shows that",
              "On the other hand, a modern audience might",
              "For instance,",
            ],
            answerIndex: 2,
            hint: "Which phrase opens a second possibility?",
            explanation:
              "'On the other hand, a modern audience might' signals a different reading. 'This shows that' ‘This shows that’ presents one meaning as fact.",
            guideRef: "alternative-interpretations",
          },
          {
            id: "anl-mcq-p3-q13",
            question: "'A pair of star-cross'd lovers take their life'. Which two meanings does 'take their life' carry?",
            options: [
              "They steal and they lie.",
              "They are born from these families, and they will kill themselves.",
              "They eat and drink together.",
              "They marry and travel abroad.",
            ],
            answerIndex: 1,
            hint: "Read the line before it: 'From forth the fatal loins…'.",
            explanation:
              "'Take their life' means they get their life from these families AND they take their own lives. This double meaning neatly links birth and death. The other options are not supported by the words.",
            guideRef: "alternative-interpretations",
          },
          {
            id: "anl-mcq-p3-q14",
            question: "Which use of context is best integrated into analysis?",
            options: [
              "Shakespeare wrote this play in about 1595.",
              "Verona is a real city in Italy.",
              "The Globe Theatre was built in 1599.",
              "Because many Elizabethans believed in astrology, calling the lovers 'star-cross'd' would make the audience sense that their deaths were written in the heavens.",
            ],
            answerIndex: 3,
            hint: "Which one uses context to explain specific words?",
            explanation:
              "The option ‘Because many Elizabethans believed in astrology, calling…’ connects a belief of the time to a specific phrase and its effect on the audience. The option ‘Verona is a real city in Italy.’ is accurate, but on its own it adds nothing to the analysis.",
            guideRef: "purpose-audience-context",
          },
          {
            id: "anl-mcq-p3-q15",
            question: "The Chorus asks the audience to listen 'with patient ears'. What does this suggest?",
            options: [
              "The Chorus speaks politely and directly to the audience, inviting them into the story.",
              "The Chorus is angry with the audience.",
              "The audience is hard of hearing.",
              "The Chorus is speaking to Romeo.",
            ],
            answerIndex: 0,
            hint: "Who is 'you' in 'if you with patient ears attend'?",
            explanation:
              "The Chorus addresses 'you', the audience, courteously, asking for their attention and patience. The option ‘The Chorus is speaking to Romeo.’ is wrong because Romeo has not yet appeared; the Prologue is spoken to the audience.",
            guideRef: "purpose-audience-context",
          },
          {
            id: "anl-mcq-p3-q16",
            question: "Which of these is the WEAKEST piece of analysis?",
            options: [
              "The noun 'grudge' suggests a petty, long-held resentment.",
              "The adjective 'ancient' implies the feud has lasted for generations.",
              "The Prologue has lots of words about fighting in it.",
              "The verb 'bury' suggests the parents' strife is laid to rest along with their children.",
            ],
            answerIndex: 2,
            hint: "Which one has no quotation and no specific effect?",
            explanation:
              "The option ‘The Prologue has lots of words about…’ gestures at a semantic field but quotes nothing and explains no effect. The other three options each zoom in on a word and explain what it suggests.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-mcq-p3-q17",
            question: "Which sentence links analysis to the writer's PURPOSE?",
            options: [
              "The Prologue is fourteen lines long.",
              "By revealing the deaths at once, Shakespeare perhaps wants his audience to focus not on what happens but on how and why it happens.",
              "The Chorus speaks the Prologue.",
              "The play is set in Verona.",
            ],
            answerIndex: 1,
            hint: "Purpose answers 'why did the writer do this?'",
            explanation:
              "The option ‘By revealing the deaths at once, Shakespeare…’ explains why Shakespeare might have made this choice. The option ‘The Prologue is fourteen lines long.’ is a true observation about form, but it does not say why it matters.",
            guideRef: "purpose-audience-context",
          },
          {
            id: "anl-mcq-p3-q18",
            question: "Which of these is NOT tentative language?",
            options: ["perhaps", "might", "arguably", "definitely"],
            answerIndex: 3,
            hint: "Tentative language weighs possibilities.",
            explanation:
              "'Definitely' expresses certainty, so it is not tentative. 'Arguably' ‘arguably’ may look strong, but it actually admits that others could disagree.",
            guideRef: "alternative-interpretations",
          },
          {
            id: "anl-mcq-p3-q19",
            question: "A student argues that the Prologue presents the parents as most to blame. Which quotation best supports this?",
            options: [
              "'the continuance of their parents' rage'",
              "'In fair Verona, where we lay our scene'",
              "'A pair of star-cross'd lovers'",
              "'the two hours' traffic of our stage'",
            ],
            answerIndex: 0,
            hint: "Which quotation mentions the parents and something negative about them?",
            explanation:
              "'The continuance of their parents' rage' puts the parents' anger at the centre. The option ‘A pair of star-cross'd lovers’ is tempting because it is famous, but 'star-cross'd' blames fate, not the parents.",
            guideRef: "alternative-interpretations",
          },
          {
            id: "anl-mcq-p3-q20",
            question: "Which reading of fate in the Prologue is the most perceptive?",
            options: [
              "The stars cross over the lovers.",
              "Fate is a theme in the play.",
              "Although 'star-cross'd' blames fate, the play also shows the lovers' haste and their parents' hatred driving events, so Shakespeare perhaps leaves us asking whether the tragedy was destiny or human choice.",
              "The lovers are unlucky.",
            ],
            answerIndex: 2,
            hint: "Look for a balanced argument that weighs two causes.",
            explanation:
              "The option ‘Although 'star-cross'd' blames fate, the play also…’ weighs fate against human choice and considers Shakespeare's purpose. The option ‘Fate is a theme in the play.’ is true but says nothing about how fate is presented.",
            guideRef: "alternative-interpretations",
          },
        ],
      },
      {
        id: "anl-mcq-p4",
        title: "MCQ Paper 4",
        questions: [
          {
            id: "anl-mcq-p4-q01",
            question: "What should the introduction to an analytical essay do first?",
            options: [
              "Give a dictionary definition of a key word",
              "Tell the story of the author's life",
              "Answer the question with a clear thesis",
              "Retell the opening scene",
            ],
            answerIndex: 2,
            hint: "Get to the point.",
            explanation:
              "A strong introduction answers the question straight away with a thesis. The option ‘Tell the story of the author's life’ is tempting because it seems like 'context', but biography that isn't linked to the question earns nothing.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-mcq-p4-q02",
            question: "What should a conclusion NOT do?",
            options: [
              "Introduce a brand new quotation and idea",
              "Answer the question again",
              "Draw your points together",
              "Make a final judgement about the writer's purpose",
            ],
            answerIndex: 0,
            hint: "A conclusion closes the argument rather than opening a new one.",
            explanation:
              "New quotations belong in body paragraphs where they can be analysed. The option ‘Make a final judgement about the writer's…’ is something a strong conclusion SHOULD do.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-mcq-p4-q03",
            question: "Which is the most logical order for paragraphs on how Prospero changes during The Tempest?",
            options: [
              "Act 5 forgiveness → Act 1 control → Act 4 doubts",
              "Act 4 doubts → Act 1 control → Act 5 forgiveness",
              "Act 5 forgiveness → Act 4 doubts → Act 1 control",
              "Act 1 control → Act 4 doubts → Act 5 forgiveness",
            ],
            answerIndex: 3,
            hint: "To show CHANGE, follow the journey.",
            explanation:
              "Following the play's order shows the character developing from control to forgiveness. The option ‘Act 5 forgiveness → Act 4 doubts…’ is the same journey backwards, which makes the change hard to follow.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-mcq-p4-q04",
            question: "Which connective shows a SIMILARITY?",
            options: ["whereas", "likewise", "in contrast", "conversely"],
            answerIndex: 1,
            hint: "'Like' is hiding inside it.",
            explanation:
              "'Likewise' signals a similarity. The other three all signal differences.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-mcq-p4-q05",
            question: "Which connective shows a DIFFERENCE?",
            options: ["similarly", "equally", "whereas", "in the same way"],
            answerIndex: 2,
            hint: "Which word sets two things against each other?",
            explanation:
              "'Whereas' contrasts two ideas. 'Equally' ‘equally’ might look like a balancing word, but it signals that two things are the same.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-mcq-p4-q06",
            question: "What is 'integrated' comparison?",
            options: [
              "Discussing both texts within each paragraph",
              "Writing everything about text A, then everything about text B",
              "Comparing only the titles of the texts",
              "Writing about one text only",
            ],
            answerIndex: 0,
            hint: "'Integrated' means woven together.",
            explanation:
              "Integrated comparison weaves both texts into every paragraph. The option ‘Writing everything about text A, then everything…’ describes the block method, which often forgets to compare.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-mcq-p4-q07",
            question: "Which comparison sentence compares METHODS, not just content?",
            options: [
              "Both poems are about power.",
              "'Ozymandias' is set in a desert, whereas 'London' is set in a city.",
              "Both poets were English men.",
              "Shelley uses a single broken statue as a symbol, whereas Blake builds his attack through the repetition of 'every' across a whole city.",
            ],
            answerIndex: 3,
            hint: "Methods = HOW: symbol, repetition, structure, language.",
            explanation:
              "The option ‘Shelley uses a single broken statue as…’ compares two methods (symbol vs repetition). The option ‘Ozymandias' is set in a desert, whereas…’ is tempting because it uses 'whereas', but it compares settings (content), not methods.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-mcq-p4-q08",
            question: "Which is the best topic sentence for a paragraph on Hamlet's grief?",
            options: [
              "Hamlet's first soliloquy is in Act 1 Scene 2.",
              "Shakespeare presents Hamlet's grief as so overwhelming that it poisons his view of the whole world.",
              "Hamlet's father is dead.",
              "I think Hamlet is quite sad.",
            ],
            answerIndex: 1,
            hint: "A topic sentence makes an argument about HOW the writer presents something.",
            explanation:
              "The option ‘Shakespeare presents Hamlet's grief as so overwhelming…’ uses 'presents' and makes an arguable claim. The option ‘I think Hamlet is quite sad.’ gives an opinion, but it is vague and not about Shakespeare's methods.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-mcq-p4-q09",
            extract: "There is nothing either good or bad, but thinking makes it so.\n(Hamlet to Rosencrantz, Act 2 Scene 2, explaining why Denmark is a prison to him)",
            question: "What does this line most suggest about Hamlet?",
            options: [
              "He thinks everything in Denmark is good.",
              "He secretly wants to be king.",
              "He believes our minds decide whether things are good or bad, hinting that his own thoughts are imprisoning him.",
              "He is talking about the weather.",
            ],
            answerIndex: 2,
            hint: "Focus on 'thinking makes it so'.",
            explanation:
              "Hamlet argues that thinking gives things their value, which suggests his dark thoughts make Denmark feel like a prison. A misreads the line: he says nothing is good OR bad in itself.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-mcq-p4-q10",
            question: "What is an 'aside'?",
            options: [
              "A long speech by a character alone on stage",
              "An instruction to the actors printed in the script",
              "A song performed between scenes",
              "A short remark heard by the audience but not by the other characters",
            ],
            answerIndex: 3,
            hint: "It is spoken 'to the side'.",
            explanation:
              "An aside is a brief remark the audience hears but other characters do not. The option ‘A long speech by a character alone…’ describes a soliloquy, which is longer and spoken alone.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-mcq-p4-q11",
            extract: "Though this be madness, yet there is method in't.\n(Polonius, aside, Hamlet, Act 2 Scene 2)",
            question: "What does Polonius realise in this aside?",
            options: [
              "Hamlet's 'mad' talk seems to have a sensible pattern behind it.",
              "Hamlet is completely and genuinely insane.",
              "Polonius himself is going mad.",
              "Hamlet is mad with love for Ophelia.",
            ],
            answerIndex: 0,
            hint: "'Method' means order or system.",
            explanation:
              "'Method' means a logical pattern, so Polonius senses sense behind the madness. The option ‘Hamlet is mad with love for Ophelia.’ is tempting because Polonius does believe Hamlet is lovesick elsewhere, but this line is about the order he notices in Hamlet's words.",
            guideRef: "alternative-interpretations",
          },
          {
            id: "anl-mcq-p4-q12",
            question: "Which of these is an example of dramatic irony?",
            options: [
              "A character tells a joke to the audience.",
              "A character speaks alone on stage.",
              "The audience knows Juliet is only drugged, but Romeo believes she is dead.",
              "Two characters argue loudly.",
            ],
            answerIndex: 2,
            hint: "Who knows more: the audience or the character?",
            explanation:
              "Dramatic irony is when the audience knows something a character does not, as when Romeo thinks Juliet is dead. The option ‘A character speaks alone on stage.’ describes a soliloquy, not dramatic irony.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-mcq-p4-q13",
            extract: "O, that this too too solid flesh would melt\n(Hamlet, Act 1 Scene 2)",
            question: "Which comment is most precise?",
            options: [
              "It is a sad line.",
              "The repeated 'too too' stresses how heavy and burdensome Hamlet feels his own body to be.",
              "It is iambic pentameter, so it is good.",
              "It makes the reader want to read on.",
            ],
            answerIndex: 1,
            hint: "Which comment zooms in on specific words?",
            explanation:
              "The option ‘The repeated 'too too' stresses how heavy…’ zooms in on the repetition and explains its effect. The option ‘It is iambic pentameter, so it is…’ names a feature but gives no effect, and 'so it is good' is not analysis.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-mcq-p4-q14",
            question: "What level would you give this: “The sun is a metaphor. This shows Romeo loves Juliet.”?",
            options: [
              "Level 4: perceptive",
              "Level 3: detailed analysis",
              "Level 1: pure retelling with no terminology",
              "Level 2: some explanation, but the effect is basic and undeveloped",
            ],
            answerIndex: 3,
            hint: "It names a technique, but how far does it explain?",
            explanation:
              "It names the metaphor and gives a basic meaning, but does not explore what 'sun' suggests: Level 2. The option ‘Level 1: pure retelling with no terminology’ is tempting, but it does more than retell, because it identifies a technique.",
            guideRef: "analysis-not-retelling",
          },
          {
            id: "anl-mcq-p4-q15",
            question: "What is the main weakness of the 'block' method of comparison?",
            options: [
              "It can turn into two separate essays with little actual comparison.",
              "It uses too many comparative connectives.",
              "It is not allowed in exams.",
              "It always needs more quotations.",
            ],
            answerIndex: 0,
            hint: "What might be missing if you write about text A, then text B?",
            explanation:
              "Writing about each text separately often means the two are never actually compared. The option ‘It is not allowed in exams.’ is false: the block method is allowed, it is just usually less effective.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-mcq-p4-q16",
            question: "Which sentence EVALUATES rather than just describes?",
            options: [
              "Both poems use imagery.",
              "Blake mentions chimney-sweepers.",
              "Blake's protest is arguably more powerful than Shelley's, because his suffering is happening now, in every street, rather than in a distant, ruined past.",
              "Shelley wrote 'Ozymandias'.",
            ],
            answerIndex: 2,
            hint: "Evaluation makes a judgement and gives a reason.",
            explanation:
              "The option ‘Blake's protest is arguably more powerful than…’ judges which poem is more powerful and justifies it. The option ‘Both poems use imagery.’ is a true comparison, but it only describes; there is no judgement.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-mcq-p4-q17",
            question:
              "An essay on Caliban has these paragraphs: (1) his curses; (2) his 'isle is full of noises' speech; (3) Prospero's final 'thing of darkness' line. What logic does this order follow?",
            options: [
              "Random order",
              "From the obvious 'monster' reading to a more sympathetic and complex view",
              "Alphabetical order of quotations",
              "From the longest to the shortest quotation",
            ],
            answerIndex: 1,
            hint: "How does the view of Caliban change from paragraph 1 to 3?",
            explanation:
              "The essay builds from the obvious reading (savage curses) to sympathy (poetry) to complexity (Prospero's ambiguous acceptance). It is not random: it is a deliberate climb to the most perceptive idea.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-mcq-p4-q18",
            question: "Which is the strongest final sentence for an essay on Caliban?",
            options: [
              "In conclusion, Caliban is a character in The Tempest.",
              "In this essay I have talked about Caliban.",
              "To conclude, Caliban says 'This island's mine' and 'You taught me language'.",
              "Ultimately, Shakespeare refuses to let his audience dismiss Caliban as a mere monster: by giving him both curses and poetry, he makes us question the justice of Prospero's rule.",
            ],
            answerIndex: 3,
            hint: "A conclusion answers the question with a final judgement.",
            explanation:
              "The option ‘Ultimately, Shakespeare refuses to let his audience…’ makes a final judgement about Shakespeare's purpose. The option ‘To conclude, Caliban says 'This island's mine'…’ is tempting because it uses evidence, but it only lists quotations without drawing a conclusion.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-mcq-p4-q19",
            question: "'Ozymandias' ends with an empty desert; Blake's 'London' ends with 'the Marriage hearse'. Which comparison is most perceptive?",
            options: [
              "Both poems end on images of death, but Shelley's empty desert suggests tyranny is finally erased, whereas Blake's 'Marriage hearse' fuses a new beginning with death, implying the city's suffering is passed on to the next generation.",
              "Both poems have an ending.",
              "'London' is longer than 'Ozymandias'.",
              "Both poems mention places.",
            ],
            answerIndex: 0,
            hint: "Look for a similarity, a difference and an interpretation.",
            explanation:
              "A finds a similarity (death), a difference (erased vs passed on) and explores meaning through precise words. The option ‘London' is longer than 'Ozymandias'.’ may be factually true, but it compares length, not meaning or method.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-mcq-p4-q20",
            question: "Which answer to 'Is Prospero a good ruler?' is the most perceptive and balanced?",
            options: [
              "Yes, because he is the main character.",
              "No, because he is mean to people.",
              "Prospero is presented as wise and finally forgiving, yet his treatment of Caliban and Ariel reveals a harsh, controlling side, so Shakespeare perhaps invites the audience to judge him as a flawed, very human ruler.",
              "Prospero has magic powers and a staff.",
            ],
            answerIndex: 2,
            hint: "Balanced = considers both sides AND reaches a judgement.",
            explanation:
              "The option ‘Prospero is presented as wise and finally…’ weighs both sides and reaches a nuanced judgement about Shakespeare's purpose. The option ‘No, because he is mean to people.’ takes a side, but 'mean' is vague and there is no evidence or nuance.",
            guideRef: "alternative-interpretations",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "anl-qa-p1",
        title: "Written Paper 1",
        passage: {
          id: "qa-p1-caliban",
          title: "'Be not afeard'",
          source: "William Shakespeare, The Tempest (1611), Act 3 Scene 2 (Caliban)",
          text:
            "Be not afeard; the isle is full of noises,\nSounds and sweet airs, that give delight and hurt not.\nSometimes a thousand twangling instruments\nWill hum about mine ears; and sometime voices\nThat, if I then had waked after long sleep,\nWill make me sleep again: and then, in dreaming,\nThe clouds methought would open and show riches\nReady to drop upon me, that when I waked\nI cried to dream again.",
          note:
            "Caliban, whom Prospero calls a monster and enslaves, comforts the frightened Stephano and Trinculo when they hear Ariel's invisible music. afeard = afraid; airs = tunes (also breezes); methought = it seemed to me.",
        },
        questions: [
          {
            id: "anl-qa-p1-q01",
            question: "What is the effect of Caliban opening with the command 'Be not afeard'?",
            marks: 2,
            hint: "What kind of sentence is it, and what does it show about how Caliban treats the others?",
            modelAnswer:
              "'Be not afeard' is an imperative, but a gentle one: Caliban is reassuring the frightened Stephano and Trinculo. This reveals a caring, protective side to him that contrasts sharply with Prospero's view of him as a savage monster.",
            markScheme: [
              { point: "Identifies the imperative / command used to reassure", keywords: ["imperative", "command", "reassur", "comfort", "calm", "soothe"] },
              { point: "Explains what this reveals: a gentle or caring side that challenges the 'monster' view", keywords: ["caring", "gentle", "kind", "protective", "monster", "sympath", "not a savage", "contrast"] },
            ],
            commonError: "Saying only that Caliban tells them not to be scared, without commenting on what this reveals about his character.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-qa-p1-q02",
            question: "Zoom in on the phrase 'sweet airs'. What do these words suggest about the island and about Caliban?",
            marks: 3,
            hint: "'Airs' has two meanings. What does 'sweet' add?",
            modelAnswer:
              "The adjective 'sweet' connotes something gentle, pleasant and delicious to the senses. 'Airs' can mean both tunes and soft breezes, so the island seems filled with music that drifts through the air itself, as if it is enchanted. That Caliban notices and treasures this beauty suggests he has a sensitive, poetic soul, far from the brute Prospero describes.",
            markScheme: [
              { point: "Explores the connotations of 'sweet' (pleasant, gentle, delightful)", keywords: ["sweet", "pleasant", "gentle", "delight", "lovely", "soft", "beautiful"] },
              { point: "Explains the double meaning of 'airs' (tunes and breezes) or the island as magical/musical", keywords: ["tunes", "music", "melod", "breeze", "wind", "magical", "enchant", "double meaning"] },
              { point: "Links to Caliban's character: sensitive, poetic, appreciative", keywords: ["sensitive", "poetic", "appreciat", "treasure", "loves the island", "beauty", "not a brute", "connection"] },
            ],
            commonError: "Explaining only the island and forgetting the second half of the question about Caliban.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-qa-p1-q03",
            question:
              "Improve this weak answer by embedding a shorter quotation and adding analysis: “Caliban loves the island. 'Sometimes a thousand twangling instruments / Will hum about mine ears'. This shows it is musical.”",
            marks: 3,
            hint: "Snip the quotation to the words you want to analyse, slip it into your sentence, then unzip it.",
            modelAnswer:
              "Caliban describes 'a thousand twangling instruments' that 'hum' about his ears; the onomatopoeic 'twangling' and 'hum' make the island sound alive with music, suggesting it is a place of constant, magical wonder that he loves.",
            markScheme: [
              { point: "Uses a shorter quotation (a few words rather than two full lines)", keywords: ["thousand twangling", "twangling", "hum", "instruments", "about mine ears"] },
              { point: "Embeds the quotation in a grammatical sentence of their own", keywords: ["describes", "hears", "refers to", "speaks of", "mentions", "calls"] },
              { point: "Adds analysis of a word or technique and its effect", keywords: ["onomatopoeia", "onomatopoeic", "alive", "magical", "suggest", "wonder", "hyperbole", "exaggerat"] },
            ],
            commonError: "Keeping the long quotation and simply changing 'shows' to 'suggests'.",
            guideRef: "embedding-quotations",
          },
          {
            id: "anl-qa-p1-q04",
            question: "Analyse the final line, 'I cried to dream again'. What does it reveal about Caliban's life?",
            marks: 4,
            hint: "Why would anyone cry on waking up? Think about what his waking life is like.",
            modelAnswer:
              "The line reveals that Caliban's dreams are far happier than his reality. The verb 'cried' suggests heartbreak or longing, as though waking is a painful loss. This implies that his waking life, enslaved and insulted by Prospero, is miserable, so he can only find riches and freedom in sleep. The short, simple line ends the speech on a note of sadness that invites the audience to sympathise with a character Prospero calls a monster.",
            markScheme: [
              { point: "Explains the meaning: his dreams are better than reality / he wants to escape", keywords: ["dreams", "reality", "escape", "better than", "prefers", "awake"] },
              { point: "Zooms in on 'cried' (sadness, longing, loss)", keywords: ["cried", "sadness", "longing", "heartbreak", "loss", "upset", "weep", "yearn"] },
              { point: "Links to his miserable waking life (enslaved by Prospero)", keywords: ["slave", "enslaved", "prospero", "miserable", "trapped", "suffering", "servant", "captive"] },
              { point: "Explains the effect on the audience: sympathy / challenges the monster view", keywords: ["sympath", "pity", "audience", "monster", "human", "vulnerable", "feel sorry"] },
            ],
            commonError: "Explaining only what happens in the dream and missing the sadness of waking up: whether 'cried' means wept or begged aloud, waking is painful for him.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-qa-p1-q05",
            question: "Write a thesis statement for the question: 'How does Shakespeare present Caliban in this speech?'",
            marks: 3,
            hint: "Shakespeare presents Caliban as ___ and ___, in order to ___.",
            modelAnswer:
              "In this speech Shakespeare presents Caliban as unexpectedly sensitive and poetic, a man who finds delight in music and dreams, in order to challenge the audience's assumption, encouraged by Prospero, that he is nothing but a savage monster.",
            markScheme: [
              { point: "An arguable claim using 'presents' or similar, not an announcement", keywords: ["presents", "portrays", "depicts", "as both", "although", "reveals caliban"] },
              { point: "Names specific qualities shown in the speech", keywords: ["sensitive", "poetic", "gentle", "lonely", "dreamer", "vulnerable", "caring", "lyrical"] },
              { point: "Hints at purpose or effect on the audience", keywords: ["in order to", "audience", "challenge", "question", "sympath", "monster", "make us"] },
            ],
            commonError: "Writing 'In this essay I will explain how Caliban is presented', which states an intention but makes no argument.",
            guideRef: "thesis",
          },
          {
            id: "anl-qa-p1-q06",
            question: "Identify TWO different techniques in the speech. For each, give a short quotation and explain its effect.",
            marks: 4,
            hint: "Look for sound words, a list, imagery of the sky, or lines that run on.",
            modelAnswer:
              "First, Shakespeare uses onomatopoeia in 'twangling' and 'hum', which make the island buzz with music, suggesting it is alive and enchanted. Second, he uses imagery of the sky: 'The clouds methought would open and show riches'. This heavenly vision evokes wonder and longing, as if Caliban glimpses a paradise that is always just out of reach. Enjambment across lines such as 'sometime voices / That, if I then had waked' also makes the speech flow like a dream.",
            markScheme: [
              { point: "Names a first technique accurately with a quotation", keywords: ["onomatopoeia", "twangling", "hum", "list", "noises", "sounds", "sibilance"] },
              { point: "Explains the effect of the first technique", keywords: ["alive", "musical", "magical", "enchant", "buzz", "vivid", "atmosphere"] },
              { point: "Names a second technique accurately with a quotation", keywords: ["imagery", "clouds", "riches", "enjambment", "run on", "contrast", "metaphor"] },
              { point: "Explains the effect of the second technique", keywords: ["wonder", "longing", "dreamlike", "dream like", "heaven", "paradise", "flow", "out of reach"] },
            ],
            commonError: "Naming two techniques without quotations or effects (feature spotting).",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-qa-p1-q07",
            question: "Write a full PEEL paragraph answering: 'How does Shakespeare present Caliban as sensitive in this speech?'",
            marks: 5,
            hint: "Point → short embedded quotation → technique and zoom in → alternative reading or effect → link to Shakespeare's purpose.",
            modelAnswer:
              "Shakespeare presents Caliban as deeply sensitive to beauty, which complicates Prospero's view of him as a monster. Caliban tells the others that the isle is full of 'Sounds and sweet airs, that give delight and hurt not'. The gentle adjective 'sweet' and the noun 'delight' create a semantic field of pleasure, while the reassuring phrase 'hurt not' suggests that Caliban, so often hurt himself, values gentleness above all. Perhaps this is why he responds to music so strongly: it is the one kindness the island gives him. By giving the 'monster' some of the play's most beautiful poetry, Shakespeare invites his audience to question who is truly civilised on the island.",
            markScheme: [
              { point: "Point: a clear claim about Caliban's sensitivity", keywords: ["presents", "portrays", "sensitive", "gentle", "poetic", "appreciat"] },
              { point: "Evidence: a short, embedded quotation", keywords: ["sweet airs", "delight", "hurt not", "twangling", "cried to dream", "full of noises"] },
              { point: "Explains a technique or zooms in on a word", keywords: ["adjective", "noun", "verb", "semantic field", "onomatopoeia", "connot", "imagery"] },
              { point: "Develops the effect or offers an alternative reading", keywords: ["perhaps", "alternatively", "suggests", "implies", "could", "might"] },
              { point: "Link: to Shakespeare's purpose, the audience or the monster/civilised theme", keywords: ["audience", "monster", "civilised", "civilized", "prospero", "question", "purpose", "colonial"] },
            ],
            commonError: "Spending most of the paragraph explaining what the speech means in plain English rather than how the language works.",
            guideRef: "peel-petal",
          },
          {
            id: "anl-qa-p1-q08",
            question:
              "Give TWO different interpretations of 'The clouds methought would open and show riches / Ready to drop upon me'. Which do you find more convincing, and why?",
            marks: 4,
            hint: "Are the 'riches' literal treasure, or something else? Use tentative language.",
            modelAnswer:
              "On one level, the 'riches' may be literal wealth, suggesting Caliban longs for the power and comfort that Prospero enjoys and he has lost. Alternatively, the clouds opening could be a heavenly, almost religious vision, implying that Caliban yearns for grace, beauty or freedom rather than gold. I find the second reading more convincing because the image is 'Ready to drop', gentle and freely given, which matches the tender tone of the whole speech rather than any greed.",
            markScheme: [
              { point: "First interpretation (e.g. literal wealth, power, what he has lost)", keywords: ["wealth", "treasure", "gold", "money", "power", "lost", "status"] },
              { point: "Second interpretation (e.g. heavenly vision, freedom, grace, beauty)", keywords: ["heaven", "religious", "divine", "freedom", "grace", "paradise", "spiritual", "hope"] },
              { point: "Uses tentative language to signal interpretations", keywords: ["perhaps", "alternatively", "could", "might", "may", "on the other hand"] },
              { point: "Judges which reading is more convincing, with a reason from the text", keywords: ["more convincing", "more persuasive", "stronger", "i find", "prefer", "most convincing"] },
            ],
            commonError: "Giving two readings but never deciding between them, or giving a second reading with no link to the words.",
            guideRef: "alternative-interpretations",
          },
          {
            id: "anl-qa-p1-q09",
            question:
              "The Tempest was written around 1610–11 and first recorded in performance in 1611, as English ships were exploring and claiming land in the Americas. How might this context shape an audience's response to Caliban's speech?",
            marks: 3,
            hint: "Who is the 'native' of the island, and who arrived and took control?",
            modelAnswer:
              "In 1611 English explorers were claiming land in the Americas and often described its peoples as savages. Caliban, the island's original inhabitant now enslaved by a newcomer, mirrors these colonised peoples. His tender, poetic description of the island he loves could therefore make an audience question whether the 'savage' label is fair, and whether Prospero has any real right to rule the island.",
            markScheme: [
              { point: "Accurately explains the context (exploration/colonisation of the Americas)", keywords: ["coloni", "americas", "explor", "settlers", "new world", "empire", "virginia"] },
              { point: "Links Caliban to colonised peoples (the island's native, now enslaved)", keywords: ["native", "original", "inhabitant", "enslaved", "taken", "stolen", "his island"] },
              { point: "Explains the effect on the audience (questioning the savage label or Prospero's rule)", keywords: ["question", "sympath", "savage", "right to rule", "unfair", "injustice", "uneasy"] },
            ],
            commonError: "Writing a paragraph of history about explorers and never linking it to Caliban's words.",
            guideRef: "purpose-audience-context",
          },
          {
            id: "anl-qa-p1-q10",
            extract: "You taught me language, and my profit on't\nIs, I know how to curse.\n(Caliban to Prospero, Act 1 Scene 2)",
            question: "How does the 'Be not afeard' speech challenge what Caliban says about language in Act 1?",
            marks: 3,
            hint: "In Act 1 he says language is only good for cursing. What does he use it for in Act 3?",
            modelAnswer:
              "In Act 1 Caliban bitterly claims that his only 'profit' from language is the ability to curse. Yet in Act 3 he uses language to create some of the most beautiful poetry in the play, describing 'sweet airs' and clouds full of riches. This contrast suggests that Caliban's angry words in Act 1 come from his treatment by Prospero, and that he is capable of far more than the savage both he and Prospero claim he is.",
            markScheme: [
              { point: "Explains the Act 1 claim: language used only to curse", keywords: ["curse", "cursing", "profit", "insult", "anger", "bitter"] },
              { point: "Contrasts this with the beautiful, poetic language of Act 3", keywords: ["poetic", "poetry", "beautiful", "lyrical", "sweet airs", "gentle", "contrast", "whereas"] },
              { point: "Draws a conclusion about Caliban (more than a savage / anger caused by treatment)", keywords: ["more than", "capable", "treatment", "prospero", "complex", "not just", "savage", "human"] },
            ],
            commonError: "Describing each speech separately without explaining the contrast between them.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-qa-p1-q11",
            question:
              "Plan an essay on 'How does Shakespeare present Caliban in The Tempest?' Give a thesis, three paragraph topics in a logical order (each with a short quotation) and one sentence explaining why your order works.",
            marks: 6,
            hint: "Try moving from the obvious reading of Caliban to the most perceptive one.",
            modelAnswer:
              "Thesis: Shakespeare presents Caliban as both a monster and a victim, leaving the audience uneasy about Prospero's power.\nParagraph 1: Caliban as savage and rebellious, seen in his curses and Prospero's insult 'poisonous slave'.\nParagraph 2: Caliban as a wronged native who insists 'This island's mine'.\nParagraph 3: Caliban as sensitive and poetic, describing 'sweet airs' and crying 'to dream again'.\nOrder: the essay moves from the obvious 'monster' reading to the most sympathetic one, so the argument builds towards the idea that Caliban is more human than Prospero admits.",
            markScheme: [
              { point: "A clear, arguable thesis", keywords: ["presents", "both", "although", "thesis", "monster and", "victim"] },
              { point: "Paragraph 1 topic with a relevant quotation", keywords: ["curse", "poisonous slave", "savage", "rebel", "thing of darkness", "monster"] },
              { point: "Paragraph 2 topic with a relevant quotation", keywords: ["island s mine", "island", "sycorax", "stolen", "native", "wronged"] },
              { point: "Paragraph 3 topic with a relevant quotation", keywords: ["sweet airs", "afeard", "dream", "noises", "poetic", "sensitive"] },
              { point: "Paragraphs arranged in a logical order", keywords: ["paragraph 1", "firstly", "secondly", "finally", "order", "builds"] },
              { point: "Explains why the order works", keywords: ["obvious", "perceptive", "sympathetic", "develop", "chronolog", "build", "journey"] },
            ],
            commonError: "Listing three quotations in the order they appear without any controlling argument.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-qa-p1-q12",
            question:
              "This quotation is copied incorrectly: Caliban says the isle is 'full of noises, Sounds and sweet airs'. Rewrite it correctly and explain the rule you have used.",
            marks: 2,
            hint: "'Sounds' starts a new line in the verse.",
            modelAnswer:
              "Caliban says the isle is 'full of noises, / Sounds and sweet airs'. When quoting verse across a line break you mark the break with a forward slash ( / ), keeping the capital letter that begins the new line.",
            markScheme: [
              { point: "Inserts a slash between 'noises,' and 'Sounds'", keywords: ["slash", "forward slash", "oblique", "stroke", "virgule"] },
              { point: "Explains the rule: a slash shows a line break in verse/poetry", keywords: ["line break", "new line", "verse", "poetry", "line ending", "next line"] },
            ],
            commonError: "Putting the slash in the wrong place or removing the capital 'S'.",
            guideRef: "embedding-quotations",
          },
        ],
      },
      {
        id: "anl-qa-p2",
        title: "Written Paper 2",
        passage: {
          id: "qa-p2-ozymandias",
          title: "Ozymandias",
          source: "Percy Bysshe Shelley (1818)",
          text:
            "I met a traveller from an antique land,\nWho said—“Two vast and trunkless legs of stone\nStand in the desert. . . . Near them, on the sand,\nHalf sunk a shattered visage lies, whose frown,\nAnd wrinkled lip, and sneer of cold command,\nTell that its sculptor well those passions read\nWhich yet survive, stamped on these lifeless things,\nThe hand that mocked them, and the heart that fed;\nAnd on the pedestal, these words appear:\nMy name is Ozymandias, King of Kings;\nLook on my Works, ye Mighty, and despair!\nNothing beside remains. Round the decay\nOf that colossal Wreck, boundless and bare\nThe lone and level sands stretch far away.”",
          note:
            "Ozymandias is a Greek name for the Egyptian pharaoh Ramesses II. trunkless = without a body; visage = face; mocked = imitated (and also ridiculed).",
        },
        questions: [
          {
            id: "anl-qa-p2-q01",
            question: "What do the phrases 'trunkless legs' and 'shattered visage' suggest about the statue and the king it shows?",
            marks: 2,
            hint: "What state is the statue in? What might that say about the king's power?",
            modelAnswer:
              "'Trunkless legs' and a 'shattered visage' show that the statue is broken into pieces, with no body and a smashed face. This suggests that the king's once mighty power has been destroyed too: all that remains of him is fragments.",
            markScheme: [
              { point: "Explains that the statue is broken/incomplete", keywords: ["broken", "no body", "pieces", "smashed", "ruin", "fragment", "incomplete"] },
              { point: "Links this to the destruction of the king's power", keywords: ["power", "destroyed", "faded", "fallen", "gone", "lost", "weak"] },
            ],
            commonError: "Describing the statue without saying what its ruin suggests about the king.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-qa-p2-q02",
            question: "Zoom in on 'sneer of cold command'. Analyse at least two words and one sound effect.",
            marks: 3,
            hint: "'Sneer', 'cold', and the repeated 'c' sound.",
            modelAnswer:
              "The noun 'sneer' connotes contempt and mockery, suggesting the king looked down on everyone beneath him. The adjective 'cold' implies he ruled without warmth or mercy. The hard 'c' alliteration in 'cold command' sounds clipped and harsh, like a barked order, so the very sound of the phrase conveys his tyranny.",
            markScheme: [
              { point: "Analyses 'sneer' (contempt, mockery, arrogance)", keywords: ["sneer", "contempt", "mock", "scorn", "arrogan", "looks down", "disdain"] },
              { point: "Analyses 'cold' (no warmth, merciless, emotionless)", keywords: ["cold", "heartless", "merciless", "unfeeling", "no warmth", "emotionless", "cruel"] },
              { point: "Explains the alliteration / harsh sound", keywords: ["alliteration", "hard c", "harsh", "clipped", "plosive", "sound", "order"] },
            ],
            commonError: "Writing 'there is alliteration' without explaining how the sound fits the meaning.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-qa-p2-q03",
            question: "Explain the irony of the inscription 'Look on my Works, ye Mighty, and despair!'",
            marks: 4,
            hint: "What did Ozymandias MEAN by it? What does it mean NOW?",
            modelAnswer:
              "The imperatives 'Look' and 'despair' show Ozymandias boasting: he wanted other mighty rulers to despair because they could never match his great 'Works'. The irony is that 'Nothing beside remains': his works have crumbled into the desert. Now the line means something quite different: rulers should despair because, like him, all their power will eventually turn to dust. His own boast has become a warning against pride.",
            markScheme: [
              { point: "Identifies the boastful tone / imperatives", keywords: ["imperative", "boast", "command", "arrogan", "proud", "brag"] },
              { point: "Explains the intended meaning: others should despair at his greatness", keywords: ["could never match", "jealous", "greatness", "envy", "intimidate", "impress", "outdone"] },
              { point: "Explains that his works no longer exist", keywords: ["nothing beside remains", "nothing remains", "crumbled", "gone", "desert", "ruin", "vanished"] },
              { point: "Explains the new ironic meaning (all power fades / warning against pride)", keywords: ["irony", "ironic", "all power", "warning", "pride", "fade", "temporary", "turn to dust"] },
            ],
            commonError: "Explaining what the king meant but never stating why it is ironic now.",
            guideRef: "alternative-interpretations",
          },
          {
            id: "anl-qa-p2-q04",
            question: "Why does Shelley place the short sentence 'Nothing beside remains.' straight after the inscription?",
            marks: 3,
            hint: "Think about contrast, sentence length and where it falls in the line.",
            modelAnswer:
              "Shelley juxtaposes the king's grand boast with the blunt statement that 'Nothing beside remains'. The sentence is short and flat, and it stops mid-line with a caesura, as if the poem itself falls silent. This structure instantly deflates Ozymandias's pride, making the gap between his claim and reality almost comic.",
            markScheme: [
              { point: "Identifies the contrast/juxtaposition with the boast", keywords: ["juxtapos", "contrast", "straight after", "boast", "immediately"] },
              { point: "Comments on the short, blunt sentence or caesura", keywords: ["short", "blunt", "caesura", "full stop", "abrupt", "pause", "simple"] },
              { point: "Explains the effect: deflates/undercuts pride", keywords: ["deflate", "undercut", "undermine", "mock", "pride", "comic", "humble", "puncture"] },
            ],
            commonError: "Explaining what the sentence means without discussing why its position matters.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-qa-p2-q05",
            question: "Write a thesis statement for: 'How does Shelley present power in Ozymandias?'",
            marks: 2,
            hint: "Shelley presents power as ___, in order to ___.",
            modelAnswer:
              "Shelley presents power as arrogant, cruel and ultimately temporary, in order to warn that even the mightiest tyrant will be swallowed by time.",
            markScheme: [
              { point: "An arguable claim about how power is presented", keywords: ["presents", "portrays", "temporary", "arrogant", "cruel", "fleeting", "fragile"] },
              { point: "Hints at Shelley's purpose or message", keywords: ["in order to", "warn", "message", "time", "tyrant", "purpose", "reminds"] },
            ],
            commonError: "Writing a summary of the poem ('Ozymandias is about a broken statue') instead of an argument.",
            guideRef: "thesis",
          },
          {
            id: "anl-qa-p2-q06",
            question: "Rewrite this feature-spotting sentence as real analysis: “Shelley uses alliteration in 'boundless and bare' and 'lone and level'.”",
            marks: 4,
            hint: "Embed the quotations, explain the sound and image, then link to the poem's message.",
            modelAnswer:
              "The alliterative phrases 'boundless and bare' and 'lone and level' slow the final lines down, and the soft, liquid 'l' sounds and long vowels of 'lone and level' make the desert seem to stretch on endlessly. The adjectives 'bare' and 'lone' evoke total emptiness, so nothing of the king's empire is left. This vast, silent landscape emphasises how small and temporary Ozymandias's power was compared with time.",
            markScheme: [
              { point: "Embeds the quotations in a sentence", keywords: ["boundless and bare", "lone and level", "boundless", "level sands"] },
              { point: "Explains the effect of the sound (slow, soft, drawn out)", keywords: ["slow", "soft", "long", "drawn out", "calm", "smooth", "lingering"] },
              { point: "Explains the image or connotations (emptiness, endlessness)", keywords: ["empty", "emptiness", "endless", "vast", "nothing", "desolate", "isolat"] },
              { point: "Links to the poem's message about power and time", keywords: ["power", "time", "temporary", "small", "insignificant", "pride", "tyrant"] },
            ],
            commonError: "Adding 'which makes it effective' to the original sentence instead of explaining a specific effect.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-qa-p2-q07",
            question: "Write a full PEEL paragraph answering: 'How does Shelley present Ozymandias as arrogant?'",
            marks: 5,
            hint: "Choose either the 'sneer' or the inscription as your evidence, then zoom in.",
            modelAnswer:
              "Shelley presents Ozymandias as a ruler whose arrogance is carved into stone. The inscription commands, 'Look on my Works, ye Mighty, and despair!' The imperative verbs 'Look' and 'despair' show him ordering even other kings about, while the self-given title 'King of Kings' suggests he saw himself as above every other human ruler. Perhaps the exclamation mark captures the very sound of his boasting voice. Yet because 'Nothing beside remains', Shelley turns this arrogance into a joke, warning his readers that pride in power is foolish when time destroys everything.",
            markScheme: [
              { point: "Point: a clear claim about Ozymandias's arrogance", keywords: ["presents", "portrays", "arrogan", "proud", "pride", "boastful"] },
              { point: "Evidence: a short, embedded quotation", keywords: ["look on my works", "king of kings", "despair", "sneer", "cold command", "ye mighty"] },
              { point: "Names and explains a technique", keywords: ["imperative", "exclamation", "title", "alliteration", "noun", "adjective", "verb"] },
              { point: "Zooms in and develops the effect or an alternative reading", keywords: ["suggests", "implies", "perhaps", "connot", "above", "superior", "alternatively"] },
              { point: "Link: to irony, time or Shelley's message about power", keywords: ["irony", "ironic", "nothing beside remains", "time", "warn", "message", "temporary", "fade"] },
            ],
            commonError: "Describing the statue in general without focusing on the words that show arrogance.",
            guideRef: "peel-petal",
          },
          {
            id: "anl-qa-p2-q08",
            question: "The sculptor 'well those passions read / Which yet survive'. What might Shelley be suggesting about art compared with power?",
            marks: 3,
            hint: "Whose work has lasted longer, the king's or the sculptor's?",
            modelAnswer:
              "The sculptor 'read' the king's passions so well that they 'yet survive' in stone, long after the king himself has died. This suggests that art can outlast political power: the sculptor's skill preserves, and even exposes, the tyrant's cruelty. However, the statue is itself a 'colossal Wreck', so Shelley perhaps implies that even art cannot resist time forever.",
            markScheme: [
              { point: "Explains that the sculptor understood and captured the king's passions", keywords: ["understood", "captured", "read", "skill", "carved", "recorded", "preserved"] },
              { point: "Argues that art outlasts power", keywords: ["outlast", "survive", "longer", "art", "lasted", "endures", "outlives"] },
              { point: "Offers a qualification or alternative (art too is ruined)", keywords: ["however", "wreck", "also", "even art", "perhaps", "time", "alternatively"] },
            ],
            commonError: "Ignoring the sculptor entirely and writing only about the king.",
            guideRef: "alternative-interpretations",
          },
          {
            id: "anl-qa-p2-q09",
            question: "'The hand that mocked them' can mean the hand that imitated them AND the hand that ridiculed them. Explore both readings and say which you find more interesting.",
            marks: 4,
            hint: "Use tentative language and then make a judgement.",
            modelAnswer:
              "On one level, 'mocked' means imitated: the sculptor's hand copied the king's frown and sneer accurately in stone. Alternatively, 'mocked' could mean ridiculed, suggesting the sculptor secretly made fun of the tyrant by recording his cruelty for ever. I find the second reading more interesting because it means the powerless artist has the last laugh over the 'King of Kings'.",
            markScheme: [
              { point: "Explains 'mocked' as imitated/copied", keywords: ["imitated", "copied", "reproduced", "replicated", "carved", "captured"] },
              { point: "Explains 'mocked' as ridiculed/made fun of", keywords: ["ridicul", "made fun", "laughed", "scorn", "satir", "teased"] },
              { point: "Uses tentative language", keywords: ["perhaps", "alternatively", "could", "might", "may", "possibly"] },
              { point: "Makes a judgement with a reason", keywords: ["more interesting", "more convincing", "i find", "prefer", "last laugh", "most interesting"] },
            ],
            commonError: "Choosing only one meaning and ignoring the double meaning the question points to.",
            guideRef: "alternative-interpretations",
          },
          {
            id: "anl-qa-p2-q10",
            question:
              "Shelley was a radical who hated tyranny and lived while King George III ruled Britain. Write two sentences that integrate this context into an analysis of the title 'King of Kings'.",
            marks: 3,
            hint: "Analyse the title first, then show how the context sharpens it.",
            modelAnswer:
              "The grand title 'King of Kings' shows Ozymandias claiming to be the greatest ruler of all, yet the poem leaves him as broken stone. Writing as a radical who despised tyranny, Shelley may intend this collapse as a warning to the powerful rulers of his own day: however mighty they think they are, their power will also crumble.",
            markScheme: [
              { point: "Analyses the title 'King of Kings' (supreme power, arrogance)", keywords: ["king of kings", "greatest", "supreme", "above", "superior", "arrogan"] },
              { point: "Uses the context accurately (radical, hated tyranny, monarchy of his time)", keywords: ["radical", "tyranny", "george", "monarch", "his own time", "rulers of his"] },
              { point: "Integrates context into a purpose (warning to rulers)", keywords: ["warning", "warn", "may intend", "message", "purpose", "crumble", "criticis"] },
            ],
            commonError: "Writing about Shelley's life in one sentence and the title in another without connecting them.",
            guideRef: "purpose-audience-context",
          },
          {
            id: "anl-qa-p2-q11",
            question: "Analyse the final two lines: 'boundless and bare / The lone and level sands stretch far away.'",
            marks: 4,
            hint: "Think about size, emptiness, sound and the contrast with the king's boast.",
            modelAnswer:
              "The adjectives 'boundless and bare' evoke a desert that is both endless and empty, with nothing left of the empire. The alliteration of 'lone and level' slows the line down, and the verb phrase 'stretch far away' makes the sands seem to go on for ever, like time itself. This vast emptiness contrasts with the king's boast about his 'Works', emphasising that his power has shrunk to nothing.",
            markScheme: [
              { point: "Analyses 'boundless and bare' (endless and empty)", keywords: ["boundless", "endless", "bare", "empty", "infinite", "vast"] },
              { point: "Comments on the sound (alliteration, slow pace)", keywords: ["alliteration", "slow", "lone and level", "sound", "pace", "long vowel"] },
              { point: "Analyses 'stretch far away' (time, eternity)", keywords: ["stretch", "far away", "forever", "for ever", "eternity", "time", "distance"] },
              { point: "Contrasts with the king's boast / power reduced to nothing", keywords: ["contrast", "boast", "works", "nothing", "insignificant", "power", "irony"] },
            ],
            commonError: "Only describing the desert without linking it back to Ozymandias.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-qa-p2-q12",
            question: "“'Ozymandias' is more about the power of time than the power of kings.” How far do you agree? Write a short argued response.",
            marks: 5,
            hint: "Give evidence for both sides, then decide. Use 'although' or 'however'.",
            modelAnswer:
              "To a large extent I agree, because the poem's final image is not of the king but of 'lone and level sands' that 'stretch far away', suggesting that time outlasts every ruler. The 'decay' of the 'colossal Wreck' shows time defeating even the greatest works. However, Shelley still spends much of the poem on the king's 'sneer of cold command', so it is also a sharp attack on tyranny. Perhaps the best answer is that the two are connected: Shelley uses the power of time to mock the power of kings. Ultimately, though, time has the last word.",
            markScheme: [
              { point: "Argues that the poem is about time, with evidence", keywords: ["sands", "decay", "time", "stretch far away", "wreck", "outlasts"] },
              { point: "Considers the other side: it is about kings/tyranny, with evidence", keywords: ["sneer", "cold command", "king of kings", "tyrann", "tyrant", "arrogan"] },
              { point: "Uses a counter-argument connective", keywords: ["however", "although", "on the other hand", "yet", "whereas", "nevertheless"] },
              { point: "Uses tentative language or explores how the ideas connect", keywords: ["perhaps", "arguably", "connected", "both", "might", "suggests"] },
              { point: "Reaches a clear overall judgement", keywords: ["agree", "ultimately", "overall", "to a large extent", "in conclusion", "last word"] },
            ],
            commonError: "Agreeing or disagreeing without considering the other side, or sitting on the fence without a final judgement.",
            guideRef: "essay-structure-comparison",
          },
        ],
      },
      {
        id: "anl-qa-p3",
        title: "Written Paper 3",
        passage: {
          id: "qa-p3-scrooge",
          title: "The cold within him",
          source: "Charles Dickens, A Christmas Carol (1843), Stave One",
          text:
            "Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster. The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait; made his eyes red, his thin lips blue; and spoke out shrewdly in his grating voice. A frosty rime was on his head, and on his eyebrows, and his wiry chin. He carried his own low temperature always about with him; he iced his office in the dog-days; and didn't thaw it one degree at Christmas.",
          note:
            "tight-fisted = mean with money; covetous = greedily wanting what others have; flint = a hard stone struck with steel to make sparks; gait = way of walking; rime = frost; dog-days = the hottest days of summer.",
        },
        questions: [
          {
            id: "anl-qa-p3-q01",
            question: "Identify ONE simile in the extract and explain its effect.",
            marks: 2,
            hint: "Look for 'as'.",
            modelAnswer:
              "The simile 'solitary as an oyster' compares Scrooge to an oyster, which is tightly shut inside a hard shell. This suggests he has closed himself off from other people and is impossible to reach.",
            markScheme: [
              { point: "Identifies a simile with a quotation", keywords: ["solitary as an oyster", "as an oyster", "sharp as flint", "hard and sharp", "as flint", "simile"] },
              { point: "Explains its effect", keywords: ["closed", "shut", "isolat", "alone", "hard", "unreachable", "cold", "unfeeling"] },
            ],
            commonError: "Picking a phrase with no comparison word, such as 'old sinner', and calling it a simile.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-qa-p3-q02",
            question: "Analyse the list 'squeezing, wrenching, grasping, scraping, clutching'.",
            marks: 4,
            hint: "What kind of words are these? What do they have in common? Zoom in on one.",
            modelAnswer:
              "Dickens piles up a list of five present participles, all verbs of grabbing and holding tightly. The accumulation feels relentless, as if Scrooge's greed never stops for breath. Zooming in on 'wrenching', it suggests violently twisting something away from someone, implying he takes money by force from people who can't afford it. The list therefore presents his greed as aggressive and physical, not just a habit.",
            markScheme: [
              { point: "Identifies the list / accumulation", keywords: ["list", "accumulat", "pile", "asyndet", "series", "repetition"] },
              { point: "Identifies the word class (verbs / present participles) and shared meaning of grabbing", keywords: ["verbs", "participle", "ing", "grab", "holding", "grip", "taking"] },
              { point: "Zooms in on one word and explains it", keywords: ["wrenching", "clutching", "squeezing", "grasping", "scraping", "twist"] },
              { point: "Explains the overall effect: greedy, relentless, aggressive", keywords: ["greed", "relentless", "aggressive", "never stops", "miser", "selfish", "violent"] },
            ],
            commonError: "Saying 'the list shows Scrooge is mean' without explaining what the type of words or the length of the list adds.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-qa-p3-q03",
            question: "Identify three words from the semantic field of cold and explain what Dickens suggests through this field.",
            marks: 3,
            hint: "Look in the middle and end of the extract: frost, ice, temperature…",
            modelAnswer:
              "Dickens uses a semantic field of cold, including 'froze', 'frosty rime' and 'iced'. The coldness works as a metaphor for Scrooge's lack of warmth and kindness: his heart is frozen. Because he 'iced his office in the dog-days', the field also suggests that his coldness spreads to everyone around him, chilling even the hottest days.",
            markScheme: [
              { point: "Identifies three cold words from the extract", keywords: ["froze", "frosty", "rime", "iced", "low temperature", "thaw", "cold within"] },
              { point: "Explains the coldness as lack of warmth / kindness / emotion", keywords: ["kindness", "warmth", "emotion", "heartless", "unfeeling", "uncaring", "frozen heart"] },
              { point: "Explains a further effect (spreads to others / unchanging even at Christmas)", keywords: ["spreads", "others", "office", "dog days", "christmas", "affects", "everyone"] },
            ],
            commonError: "Listing the words correctly but not explaining what cold represents.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-qa-p3-q04",
            question: "Explain the metaphor 'from which no steel had ever struck out generous fire'.",
            marks: 3,
            hint: "Flint and steel were used to make sparks for a fire. What is the 'fire'?",
            modelAnswer:
              "Flint is struck with steel to make sparks and start a fire. Dickens says no steel has ever struck 'generous fire' from Scrooge, meaning no person or event has ever managed to spark any generosity in him. The 'fire' connotes warmth and kindness, which links to the semantic field of cold: Scrooge is stone that has never produced warmth.",
            markScheme: [
              { point: "Explains the flint and steel image (striking sparks)", keywords: ["flint", "steel", "spark", "struck", "strike", "light a fire"] },
              { point: "Explains the meaning: nothing has ever made him generous", keywords: ["never generous", "no one", "nothing", "never", "generosity", "kindness"] },
              { point: "Explains the connotations of 'fire' (warmth) or links to cold imagery", keywords: ["warmth", "warm", "fire", "cold", "heat", "passion"] },
            ],
            commonError: "Treating it as a literal fire rather than a metaphor for generosity.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-qa-p3-q05",
            question: "The extract opens 'Oh! But he was a tight-fisted hand at the grindstone, Scrooge!' What is the effect of this exclamatory narrative voice?",
            marks: 2,
            hint: "Imagine someone telling you this story aloud.",
            modelAnswer:
              "The exclamations make the narrator sound like a lively storyteller speaking directly to us, almost outraged and amused at once. This engages the reader and invites us to share the narrator's disapproval of Scrooge from the very start.",
            markScheme: [
              { point: "Identifies the exclamatory/storytelling narrative voice", keywords: ["exclamat", "storyteller", "narrator", "spoken", "directly", "voice", "conversational"] },
              { point: "Explains the effect on the reader (engages, shares disapproval, humour)", keywords: ["engag", "disapprov", "outrage", "humour", "humor", "comic", "judge", "dislike"] },
            ],
            commonError: "Saying 'it makes it exciting' without explaining what attitude the voice creates.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-qa-p3-q06",
            question:
              "Improve this answer by embedding a shorter quotation and analysing it: “Scrooge is cold. 'He carried his own low temperature always about with him; he iced his office in the dog-days; and didn't thaw it one degree at Christmas.' This shows he is cold.”",
            marks: 4,
            hint: "Pick the two or three most powerful words and build your sentence around them.",
            modelAnswer:
              "Dickens claims that Scrooge 'iced his office in the dog-days', a hyperbole implying that his coldness is so powerful it can freeze a room in the heat of summer. The verb 'iced' suggests he actively makes the atmosphere hostile for everyone around him, such as his clerk.",
            markScheme: [
              { point: "Uses a much shorter quotation", keywords: ["iced his office", "iced", "dog days", "low temperature", "thaw"] },
              { point: "Embeds it in a grammatical sentence", keywords: ["claims", "describes", "says that", "explains", "writes that", "tells us"] },
              { point: "Uses a precise analytical verb instead of 'shows'", keywords: ["suggests", "implies", "conveys", "emphasises", "emphasizes", "evokes", "highlights"] },
              { point: "Analyses the effect of a word or technique", keywords: ["hyperbole", "exaggerat", "verb", "summer", "hostile", "others", "freeze", "metaphor"] },
            ],
            commonError: "Shortening the quotation but still ending with 'this shows he is cold', which repeats the point instead of analysing.",
            guideRef: "embedding-quotations",
          },
          {
            id: "anl-qa-p3-q07",
            question: "Write a full PEEL paragraph answering: 'How does Dickens present Scrooge as isolated?'",
            marks: 5,
            hint: "'secret, and self-contained, and solitary as an oyster' is full of material.",
            modelAnswer:
              "Dickens presents Scrooge as a man who has deliberately shut himself away from the world. He is 'secret, and self-contained, and solitary as an oyster'. The sibilance of the repeated 's' sounds creates a hushed, hissing effect, as though Scrooge whispers to no one, while the polysyndeton ('and… and') stretches out his loneliness. The simile of the oyster suggests a creature locked inside a hard shell; perhaps, though, it also hints that a pearl lies hidden within, foreshadowing the kinder man he will become. In this way Dickens prepares the reader for a story of redemption.",
            markScheme: [
              { point: "Point: a clear claim about Scrooge's isolation", keywords: ["presents", "portrays", "isolat", "alone", "lonely", "shut"] },
              { point: "Evidence: a short, embedded quotation", keywords: ["solitary", "oyster", "self contained", "secret", "tight fisted", "flint"] },
              { point: "Names and explains a technique", keywords: ["simile", "sibilance", "polysyndeton", "repetition", "list", "adjective", "alliteration"] },
              { point: "Develops the effect or an alternative reading", keywords: ["perhaps", "pearl", "alternatively", "suggests", "implies", "shell", "hidden"] },
              { point: "Link: to the story's purpose (redemption) or Dickens's message", keywords: ["redemption", "change", "transform", "foreshadow", "message", "dickens wants", "christmas"] },
            ],
            commonError: "Writing about Scrooge's meanness in general and forgetting the focus on isolation.",
            guideRef: "peel-petal",
          },
          {
            id: "anl-qa-p3-q08",
            question: "Explore TWO readings of 'solitary as an oyster'. Which is more convincing, given that A Christmas Carol is a story about Scrooge changing?",
            marks: 3,
            hint: "What is an oyster like on the outside? What might be hidden inside?",
            modelAnswer:
              "On the surface the simile suggests Scrooge is hard, closed and impossible to open, like an oyster's shell. Alternatively, oysters can contain pearls, so Dickens may be hinting that something precious is hidden inside him. Given that the story ends with Scrooge transformed, the second reading is more convincing: the simile quietly foreshadows his redemption.",
            markScheme: [
              { point: "First reading: closed, hard, unreachable", keywords: ["closed", "hard", "shell", "shut", "unreachable", "tough"] },
              { point: "Second reading: hidden pearl / goodness inside", keywords: ["pearl", "hidden", "inside", "precious", "goodness", "potential"] },
              { point: "Judgement linked to the story's change/redemption", keywords: ["redemption", "change", "transform", "foreshadow", "more convincing", "ending"] },
            ],
            commonError: "Giving only the 'closed shell' reading and missing the hint of hidden value.",
            guideRef: "alternative-interpretations",
          },
          {
            id: "anl-qa-p3-q09",
            question:
              "Dickens wrote A Christmas Carol in 1843, when many poor people in London lived in terrible conditions and Dickens wanted wealthy readers to be more generous. Use this context to explain the purpose of this description of Scrooge.",
            marks: 3,
            hint: "Who is Scrooge meant to represent, and what does Dickens want his readers to feel about him?",
            modelAnswer:
              "In 1843 many Londoners lived in severe poverty, and Dickens wanted the comfortable middle and upper classes to help them. By making Scrooge a 'covetous, old sinner' whose coldness freezes everyone around him, Dickens turns selfish wealth into something ugly and unnatural. His purpose is to make readers reject Scrooge's attitude and, by the end, to want to be generous themselves.",
            markScheme: [
              { point: "Accurately explains the context (poverty in 1840s London)", keywords: ["poverty", "poor", "1843", "victorian", "workhouse", "conditions", "inequality"] },
              { point: "Links context to specific words in the description", keywords: ["covetous", "sinner", "tight fisted", "cold", "greedy", "grasping", "clutching"] },
              { point: "Explains Dickens's purpose (criticise selfishness, encourage generosity)", keywords: ["purpose", "persuade", "criticis", "generous", "charity", "change attitudes", "message", "warn"] },
            ],
            commonError: "Retelling facts about Victorian poverty without linking them to the description of Scrooge.",
            guideRef: "purpose-audience-context",
          },
          {
            id: "anl-qa-p3-q10",
            question: "Why might Dickens call Scrooge an 'old sinner' rather than just 'an old man'? Analyse the word 'sinner'.",
            marks: 3,
            hint: "Where does the idea of 'sin' come from? Why does it matter in a Christmas story?",
            modelAnswer:
              "The noun 'sinner' has religious connotations, suggesting that Scrooge's greed is not just unpleasant but morally wrong in the eyes of God. In a story set at Christmas, a Christian festival, this makes his meanness seem even worse. The word also implies that a sinner can repent, foreshadowing Scrooge's eventual redemption.",
            markScheme: [
              { point: "Identifies the religious connotations of 'sinner'", keywords: ["religious", "religion", "god", "christian", "bible", "church", "moral"] },
              { point: "Explains that greed is presented as morally wrong (worse at Christmas)", keywords: ["wrong", "wicked", "christmas", "greed", "immoral", "worse", "evil"] },
              { point: "Explores the possibility of repentance / redemption", keywords: ["repent", "redemption", "forgiv", "saved", "change", "foreshadow"] },
            ],
            commonError: "Defining 'sinner' as 'a bad person' without exploring its religious weight.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-qa-p3-q11",
            question:
              "Write a thesis and two topic sentences for an essay on 'How does Dickens present Scrooge in Stave One?' Arrange them in a logical order.",
            marks: 4,
            hint: "Thesis first; each topic sentence should cover a different aspect of Scrooge and use 'presents' or similar.",
            modelAnswer:
              "Thesis: Dickens presents Scrooge as greedy, cold and isolated, yet hints that he can change, in order to show his readers that selfishness is both ugly and curable.\nTopic sentence 1: Dickens first presents Scrooge's greed as aggressive and physical, through a relentless list of grasping verbs.\nTopic sentence 2: Building on this, Dickens presents Scrooge's coldness as so extreme that it spreads to everyone around him, yet the oyster simile hints at hidden goodness.",
            markScheme: [
              { point: "An arguable thesis that answers the question", keywords: ["presents", "portrays", "although", "yet", "in order to", "thesis"] },
              { point: "First topic sentence with a clear focus", keywords: ["greed", "greedy", "mean", "miser", "money", "grasping"] },
              { point: "Second topic sentence with a different focus", keywords: ["cold", "isolat", "solitary", "lonely", "frozen", "oyster"] },
              { point: "Logical order / signposting between paragraphs", keywords: ["first", "building on", "next", "secondly", "develop", "furthermore", "moving on"] },
            ],
            commonError: "Writing two topic sentences that make the same point in different words.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-qa-p3-q12",
            question: "How does Dickens use language to present Scrooge in the whole extract? Write two linked analytical paragraphs.",
            marks: 6,
            hint: "Paragraph 1: greed (the list). Paragraph 2: coldness (the semantic field). Include an alternative reading and Dickens's purpose.",
            modelAnswer:
              "Dickens presents Scrooge's greed as violent and relentless. He is 'a squeezing, wrenching, grasping, scraping, clutching' old man: a list of present participles that all describe gripping or tearing. The verb 'wrenching' suggests he twists money away from others by force, and the sheer length of the list makes his greed feel never-ending.\n\nBuilding on this, Dickens presents Scrooge's coldness as something that infects everything around him. A semantic field of cold, from 'froze' to 'frosty rime' to 'iced', turns his meanness into weather. Because he 'iced his office in the dog-days', his coldness even defeats summer. Yet the simile 'solitary as an oyster' perhaps hints at a pearl hidden inside. Writing in 1843, when London's poor desperately needed help, Dickens makes selfishness repulsive so that his readers will choose generosity instead.",
            markScheme: [
              { point: "Clear points that answer the question", keywords: ["presents", "portrays", "greed", "cold", "isolat"] },
              { point: "Short, embedded quotations", keywords: ["wrenching", "clutching", "froze", "iced", "oyster", "flint", "rime"] },
              { point: "Accurate terminology", keywords: ["list", "semantic field", "simile", "verb", "participle", "metaphor", "sibilance"] },
              { point: "Zooms in on a single word and its connotations", keywords: ["the verb", "the word", "connot", "suggests", "implies", "noun"] },
              { point: "Alternative interpretation using tentative language", keywords: ["perhaps", "alternatively", "pearl", "could", "might", "may"] },
              { point: "Links to Dickens's purpose or context", keywords: ["1843", "poor", "poverty", "purpose", "generos", "readers", "victorian"] },
            ],
            commonError: "Writing two paragraphs that both list techniques without zooming in on any single word.",
            guideRef: "peel-petal",
          },
        ],
      },
      {
        id: "anl-qa-p4",
        title: "Written Paper 4",
        passage: {
          id: "qa-p4-hamlet",
          title: "'O, that this too too solid flesh would melt'",
          source: "William Shakespeare, Hamlet (c.1600), Act 1 Scene 2 (opening of Hamlet's first soliloquy)",
          text:
            "O, that this too too solid flesh would melt,\nThaw and resolve itself into a dew!\nOr that the Everlasting had not fix'd\nHis canon 'gainst self-slaughter! O God! God!\nHow weary, stale, flat and unprofitable,\nSeem to me all the uses of this world!\nFie on't! ah fie! 'tis an unweeded garden,\nThat grows to seed; things rank and gross in nature\nPossess it merely. That it should come to this!",
          note:
            "Hamlet is alone on stage. His father died less than two months ago and his mother has married his uncle Claudius, now king. 'solid' is the First Folio (1623) reading; the 1604 Quarto has 'sallied', often edited to 'sullied' (stained). the Everlasting = God; canon = law; self-slaughter = suicide; rank = foul and overgrown; merely = completely.",
        },
        questions: [
          {
            id: "anl-qa-p4-q01",
            question: "This speech is a soliloquy. What is a soliloquy, and why is it effective here?",
            marks: 2,
            hint: "Who is on stage, and who hears Hamlet's true feelings?",
            modelAnswer:
              "A soliloquy is a speech in which a character alone on stage speaks their private thoughts aloud. Here it lets the audience see Hamlet's true despair, which he cannot reveal to the court, so we understand his grief more deeply than any other character does.",
            markScheme: [
              { point: "Defines a soliloquy (alone on stage, private thoughts)", keywords: ["alone", "private", "thoughts", "inner", "by himself", "no one else"] },
              { point: "Explains the effect here (reveals true despair to the audience)", keywords: ["audience", "true feelings", "despair", "honest", "reveal", "secret", "real"] },
            ],
            commonError: "Defining a soliloquy as 'a long speech' without mentioning that the character is alone.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-qa-p4-q02",
            question: "Analyse Hamlet's wish that his flesh would 'melt, / Thaw and resolve itself into a dew'.",
            marks: 3,
            hint: "What happens to something that melts into dew? What is Hamlet really wishing?",
            modelAnswer:
              "The verbs 'melt' and 'thaw' suggest Hamlet wants his body to dissolve away gently, without any violent act. Turning into 'a dew' implies he wishes simply to disappear, leaving almost nothing behind. This evokes his exhaustion and despair: grief has made his own body feel like a heavy burden he longs to be rid of.",
            markScheme: [
              { point: "Zooms in on the verbs 'melt'/'thaw' (dissolving)", keywords: ["melt", "thaw", "dissolv", "verb", "liquid", "soften"] },
              { point: "Explains the wish to disappear / die", keywords: ["disappear", "vanish", "die", "death", "cease", "not exist", "suicid"] },
              { point: "Explains what this reveals about his feelings (despair, exhaustion, burden)", keywords: ["despair", "exhaust", "grief", "burden", "weary", "depress", "hopeless"] },
            ],
            commonError: "Explaining the image literally (ice melting) without linking it to Hamlet's emotional state.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-qa-p4-q03",
            question: "Analyse the list of adjectives 'weary, stale, flat and unprofitable'.",
            marks: 3,
            hint: "Zoom in on one adjective. What does the list as a whole do?",
            modelAnswer:
              "Shakespeare uses a list of four negative adjectives that drags on like Hamlet's mood. 'Stale' connotes food left out too long: life has lost all freshness and flavour. Together the adjectives convey that Hamlet finds nothing in the world worth doing, revealing a deep despair.",
            markScheme: [
              { point: "Identifies the list of adjectives", keywords: ["list", "adjectives", "accumulat", "four", "series", "build up"] },
              { point: "Zooms in on one adjective's connotations", keywords: ["stale", "flat", "weary", "unprofitable", "tasteless", "lifeless", "pointless"] },
              { point: "Explains the overall effect (despair, nothing has value)", keywords: ["despair", "meaningless", "worthless", "nothing", "depress", "hopeless", "no value"] },
            ],
            commonError: "Explaining each adjective's dictionary meaning without saying what they show together.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-qa-p4-q04",
            question: "Analyse the extended metaphor of the world as 'an unweeded garden'.",
            marks: 4,
            hint: "What happens to a garden nobody tends? What might 'rank and gross' things represent?",
            modelAnswer:
              "Hamlet uses an extended metaphor, describing the world as 'an unweeded garden / That grows to seed'. The adjective 'unweeded' implies neglect: no one has removed what is harmful, so weeds have taken over. The phrase 'rank and gross' suggests something foul-smelling and corrupt. This hints at the corruption in Denmark under Claudius and begins the play's wider imagery of rot and disease.",
            markScheme: [
              { point: "Identifies the (extended) metaphor", keywords: ["metaphor", "extended", "garden", "imagery", "compares"] },
              { point: "Analyses 'unweeded' (neglect, harmful growth)", keywords: ["unweeded", "neglect", "untended", "weeds", "overgrown", "taken over"] },
              { point: "Analyses 'rank and gross' (foul, corrupt)", keywords: ["rank", "gross", "foul", "corrupt", "disgust", "rotten", "smell"] },
              { point: "Links to Denmark, Claudius or the play's imagery of rot", keywords: ["denmark", "claudius", "rot", "disease", "state", "court", "kingdom"] },
            ],
            commonError: "Explaining that a garden has weeds but not what the weeds represent.",
            guideRef: "zooming-in",
          },
          {
            id: "anl-qa-p4-q05",
            question: "What is the effect of the broken exclamations 'O God! God!' and 'Fie on't! ah fie!'?",
            marks: 2,
            hint: "How do these sound compared with smooth, regular verse?",
            modelAnswer:
              "The short exclamations break up the regular rhythm of the verse, as if Hamlet's thoughts are collapsing. They convey overwhelming emotion: he is so disgusted and distressed that he can hardly form complete sentences.",
            markScheme: [
              { point: "Identifies the exclamations / broken rhythm", keywords: ["exclamat", "broken", "rhythm", "interrupt", "fragment", "short", "caesura"] },
              { point: "Explains the emotional effect (distress, disgust, collapse)", keywords: ["emotion", "distress", "disgust", "overwhelm", "anguish", "breakdown", "despair"] },
            ],
            commonError: "Saying 'it shows he is upset' without referring to the effect of the broken rhythm.",
            guideRef: "terminology-and-verbs",
          },
          {
            id: "anl-qa-p4-q06",
            question:
              "Hamlet wishes 'the Everlasting had not fix'd / His canon 'gainst self-slaughter'. How might a religious audience in c.1600 respond to this?",
            marks: 3,
            hint: "What did Christian teaching say about suicide? What does the line tell us about Hamlet's state of mind?",
            modelAnswer:
              "Hamlet wishes God had not forbidden suicide, revealing that he would end his life if his faith allowed it. For a religious audience in c.1600, who believed suicide was a grave sin, this would be shocking and alarming. It shows how desperate his grief has become, while also suggesting that his religious beliefs are the only thing holding him back, which might make the audience feel both sympathy and fear for him.",
            markScheme: [
              { point: "Explains the meaning: Hamlet wishes God had not forbidden suicide", keywords: ["forbid", "forbidden", "god", "law", "suicide", "end his life", "kill himself"] },
              { point: "Explains the religious context: suicide was a grave sin", keywords: ["sin", "christian", "religious", "damnation", "hell", "church", "faith"] },
              { point: "Explains the audience's response (shock, alarm, sympathy)", keywords: ["shock", "alarm", "sympath", "fear", "concern", "pity", "disturb"] },
            ],
            commonError: "Ignoring the religious context and simply saying that Hamlet is sad.",
            guideRef: "purpose-audience-context",
          },
          {
            id: "anl-qa-p4-q07",
            question: "Write a full PEEL paragraph answering: 'How does Shakespeare present Hamlet's state of mind in this soliloquy?'",
            marks: 5,
            hint: "Pick one powerful quotation, zoom in, offer an alternative reading, then link to the wider play.",
            modelAnswer:
              "Shakespeare presents Hamlet as so consumed by grief that the whole world seems poisoned to him. He calls it 'an unweeded garden', a metaphor in which nothing healthy can grow. The adjective 'unweeded' implies that someone should have tended the garden but failed; perhaps Hamlet is blaming his mother, whose hasty remarriage has let 'rank and gross' things take root. Alternatively, the image could point at Claudius, suggesting the whole state is choking under a corrupt king. Either way, Hamlet's private despair becomes the first sign that something is badly wrong in Denmark.",
            markScheme: [
              { point: "Point: a clear claim about Hamlet's state of mind", keywords: ["presents", "portrays", "grief", "despair", "disgust", "depress"] },
              { point: "Evidence: a short, embedded quotation", keywords: ["unweeded garden", "rank and gross", "weary", "stale", "too too solid", "melt"] },
              { point: "Names and explains a technique", keywords: ["metaphor", "adjective", "list", "verb", "exclamation", "imagery", "repetition"] },
              { point: "Offers an alternative reading with tentative language", keywords: ["perhaps", "alternatively", "could", "might", "may", "on the other hand"] },
              { point: "Link: to the wider play, Denmark, Claudius or Gertrude", keywords: ["denmark", "claudius", "gertrude", "mother", "state", "corrupt", "rotten"] },
            ],
            commonError: "Describing Hamlet's situation (his father's death, his mother's marriage) instead of analysing the language.",
            guideRef: "peel-petal",
          },
          {
            id: "anl-qa-p4-q08",
            question: "Who or what might the 'unweeded garden' represent? Give at least two possibilities and decide which is most convincing.",
            marks: 4,
            hint: "The world in general? Denmark? Gertrude? Look at the line 'That it should come to this!'",
            modelAnswer:
              "The garden could represent the world in general, which seems pointless to Hamlet in his grief. Alternatively, it may represent Denmark under Claudius, a state choked by corruption. It might even represent Gertrude, whose remarriage Hamlet sees as letting something 'rank' grow. The Denmark reading is perhaps most convincing, because the play keeps returning to images of rot, such as Marcellus's later line 'Something is rotten in the state of Denmark'.",
            markScheme: [
              { point: "First possibility (e.g. the world / life in general)", keywords: ["world", "life", "everything", "existence", "humanity"] },
              { point: "Second possibility (e.g. Denmark, Claudius, Gertrude)", keywords: ["denmark", "claudius", "gertrude", "mother", "court", "state", "king"] },
              { point: "Uses tentative language", keywords: ["perhaps", "alternatively", "could", "might", "may", "possibly"] },
              { point: "Judges which is most convincing with a reason", keywords: ["most convincing", "more convincing", "i find", "i think", "persuasive", "strongest"] },
            ],
            commonError: "Giving several readings with no evidence from the text and no final judgement.",
            guideRef: "alternative-interpretations",
          },
          {
            id: "anl-qa-p4-q09",
            extract: "O brave new world,\nThat has such people in't!\n(Miranda, The Tempest, Act 5 Scene 1)",
            question: "Compare Hamlet's view of the world in his soliloquy with Miranda's view here.",
            marks: 3,
            hint: "Use a comparative connective. Compare attitudes AND methods.",
            modelAnswer:
              "Hamlet sees the world as 'an unweeded garden', full of corruption and decay, whereas Miranda calls it a 'brave new world', full of wonder. Both speak in exclamations, but Hamlet's express disgust while Miranda's express joyful amazement. Ironically, Miranda is looking at men who betrayed her father, so perhaps both views are shaped more by the speaker's feelings than by the world itself.",
            markScheme: [
              { point: "Explains Hamlet's negative view with evidence", keywords: ["unweeded", "rank", "stale", "decay", "corrupt", "disgust", "negative"] },
              { point: "Explains Miranda's positive view with evidence", keywords: ["brave new world", "wonder", "amaze", "optimis", "joy", "hopeful", "positive"] },
              { point: "Uses a comparative connective and/or compares methods", keywords: ["whereas", "in contrast", "however", "both", "similarly", "while", "unlike"] },
            ],
            commonError: "Writing about the two quotations in separate sentences without ever comparing them.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-qa-p4-q10",
            extract: "the isle is full of noises,\nSounds and sweet airs, that give delight and hurt not.\n(Caliban, The Tempest, Act 3 Scene 2)",
            question: "Write an integrated comparison paragraph on how Caliban and Hamlet describe the world around them.",
            marks: 4,
            hint: "Open with a point covering both, then move between the texts with connectives.",
            modelAnswer:
              "Both characters are outsiders in their worlds, yet they describe their surroundings in opposite ways. Caliban, though enslaved, finds his island full of 'sweet airs, that give delight and hurt not', a semantic field of pleasure that reveals his love for it. In contrast, Hamlet, a prince in his own court, calls the world 'an unweeded garden' where 'rank and gross' things grow. Whereas Caliban finds beauty despite his suffering, Hamlet finds only decay despite his privilege, suggesting that how we see the world depends on our inner state rather than our circumstances.",
            markScheme: [
              { point: "Opens with a comparative point covering both texts", keywords: ["both", "each", "while", "yet they", "outsiders", "opposite"] },
              { point: "Uses evidence from both texts", keywords: ["sweet airs", "delight", "unweeded", "rank and gross", "full of noises", "hurt not"] },
              { point: "Uses comparative connectives", keywords: ["whereas", "in contrast", "however", "similarly", "unlike", "on the other hand"] },
              { point: "Analyses the methods or meaning of the contrast", keywords: ["semantic field", "metaphor", "beauty", "decay", "suggesting", "inner", "despite"] },
            ],
            commonError: "Using the block method (all about Caliban, then all about Hamlet) inside a single paragraph.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-qa-p4-q11",
            question: "Write a conclusion for an essay on 'How does Shakespeare present Hamlet's grief in Act 1 Scene 2?'",
            marks: 3,
            hint: "Answer the question again with more depth; no new quotations; end with a judgement about purpose.",
            modelAnswer:
              "Ultimately, Shakespeare presents Hamlet's grief as so overwhelming that it poisons his view of the entire world, turning life into something 'stale' and Denmark into a rotting garden. By revealing this despair in a private soliloquy, Shakespeare makes the audience Hamlet's confidants, so that we understand his pain before anyone else on stage does. In doing so, he suggests that Hamlet's personal sorrow is also a symptom of a deeper sickness in the state, setting up the tragedy to come.",
            markScheme: [
              { point: "Answers the question again with a clear overall statement", keywords: ["ultimately", "overall", "in conclusion", "presents", "to conclude"] },
              { point: "Draws ideas together (grief, world view, soliloquy) without new evidence", keywords: ["grief", "despair", "soliloquy", "world", "together", "overwhelming"] },
              { point: "Makes a final judgement about Shakespeare's purpose or wider meaning", keywords: ["purpose", "suggests", "tragedy", "state", "audience", "sickness", "foreshadow"] },
            ],
            commonError: "Repeating the introduction word for word, or introducing a brand-new quotation in the conclusion.",
            guideRef: "essay-structure-comparison",
          },
          {
            id: "anl-qa-p4-q12",
            extract:
              "Student paragraph: “Hamlet's dad has died and his mum has married his uncle so he is sad. 'O, that this too too solid flesh would melt, / Thaw and resolve itself into a dew! / Or that the Everlasting had not fix'd / His canon 'gainst self-slaughter!' Shakespeare uses lots of techniques here like metaphors and exclamations. Shakespeare was born in 1564. This shows Hamlet is sad.”",
            question: "Identify FOUR weaknesses in this student paragraph, then rewrite the first two sentences to fix them.",
            marks: 6,
            hint: "Look for retelling, a hanging long quotation, feature spotting, bolted-on context and a weak verb.",
            modelAnswer:
              "Weaknesses: (1) it opens by retelling the plot; (2) it drops a four-line quotation in without embedding it; (3) it feature spots ('lots of techniques') without explaining any effect; (4) the context about Shakespeare's birth is bolted on and irrelevant; it also ends with the vague 'shows Hamlet is sad'.\nRewrite: Shakespeare presents Hamlet as so crushed by grief that he wants simply to vanish. He longs for his 'too too solid flesh' to 'melt', and the repeated 'too' suggests his body feels like an unbearable weight, while the verb 'melt' implies a wish to dissolve quietly out of existence.",
            markScheme: [
              { point: "Identifies the retelling of the plot", keywords: ["retell", "plot", "narrat", "summar", "story", "what happens"] },
              { point: "Identifies the long, hanging (unembedded) quotation", keywords: ["long quotation", "too long", "hanging", "not embedded", "dropped", "four lines"] },
              { point: "Identifies the feature spotting", keywords: ["feature spot", "lots of techniques", "no effect", "names techniques", "list of techniques", "doesn t explain"] },
              { point: "Identifies the bolted-on context (or the vague 'shows')", keywords: ["bolted", "irrelevant", "1564", "born", "context", "vague", "shows hamlet is sad"] },
              { point: "Rewrite embeds a short quotation", keywords: ["solid flesh", "melt", "thaw", "too too", "dew", "weary"] },
              { point: "Rewrite uses a precise verb and explains an effect", keywords: ["suggests", "implies", "conveys", "evokes", "emphasises", "emphasizes", "highlights"] },
            ],
            commonError: "Spotting the weaknesses but rewriting with the same long quotation and 'this shows'.",
            guideRef: "analysis-not-retelling",
          },
        ],
      },
    ],
  },
};
