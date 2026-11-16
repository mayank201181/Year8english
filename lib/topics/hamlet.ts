import type { Topic } from "../types";

export const hamlet: Topic = {
  id: "hamlet",
  title: "Hamlet",
  subject: "Shakespeare",
  icon: "💀",
  summary: "A ghost, a murder, a prince who cannot act: 'To be, or not to be'.",
  intro:
    "A ghost walks the battlements of a Danish castle and tells a grieving prince that his father was murdered by the man now wearing the crown. What should Hamlet do, and can he even trust what he has seen? Shakespeare's longest play is a thriller, a family drama and a puzzle about how we think, and its speeches are some of the most quoted words in English. By the end of this topic you will know the story, the characters and the big themes, and you will be able to analyse Hamlet's language in sharp, well-evidenced PEEL paragraphs.",

  guide: [
    {
      id: "plot-overview",
      heading: "The story in five acts",
      discovery: {
        problem:
          "Before you read the summary, imagine this: your father has died suddenly, and within two months your mother has married his brother, who is now king. One night a ghost that looks like your father tells you the new king murdered him. List three things you might do next, and one reason you might NOT act straight away.",
        idea:
          "You have just discovered Hamlet's dilemma. Most people's lists include 'find proof first', 'tell someone I trust' or 'pretend I know nothing'. That is exactly what Hamlet does: he swears his friends to secrecy, pretends to be mad and tests the Ghost's story with a play. The reasons NOT to act at once (Is the ghost real? Is murder right? What if I am wrong?) are what drive the whole plot.",
      },
      body:
        "*Hamlet* (written c.1600) is a **revenge tragedy**: a play in which a wronged character seeks vengeance, and which ends with the deaths of the main characters. It is set at **Elsinore**, the royal castle of Denmark.\n\n**Act 1 – The Ghost.** Guards on the castle walls see a ghost that looks like the dead King Hamlet. Inside, the new king, **Claudius**, celebrates his marriage to the old king's widow, **Gertrude**. Prince **Hamlet**, still in black mourning clothes, is disgusted. The Ghost tells Hamlet that Claudius murdered him by pouring poison into his ear as he slept in his orchard, and orders: 'Revenge his foul and most unnatural murder.' Hamlet swears to act and decides to put on an **'antic disposition'** (pretend to be mad).\n\n**Act 2 – The waiting game.** Hamlet's strange behaviour worries the court. **Polonius**, the king's chief adviser, decides Hamlet is mad with love for his daughter **Ophelia**. Claudius summons Hamlet's old school friends **Rosencrantz and Guildenstern** to spy on him. A group of travelling actors arrives, and Hamlet plans to stage a play that copies his father's murder: 'the play's the thing / Wherein I'll catch the conscience of the king.'\n\n**Act 3 – The turning point.** Hamlet speaks his famous 'To be, or not to be' soliloquy, then rejects Ophelia while Claudius and Polonius spy. At the play (Hamlet calls it 'The Mousetrap'), Claudius storms out, which Hamlet takes as proof of guilt. He finds Claudius praying but does not kill him. In his mother's private room (the **closet scene**) he stabs a figure hiding behind a tapestry, thinking it is the king, but it is Polonius.\n\n**Act 4 – Consequences.** Claudius sends Hamlet to England with secret letters ordering his death. Ophelia, grieving her father, goes mad and later drowns. Her brother **Laertes** returns, furious, and Claudius plots with him: a 'friendly' fencing match with a poisoned, sharpened sword, and a poisoned drink as back-up.\n\n**Act 5 – The catastrophe.** Hamlet escapes (via pirates), returns, and reflects on death in a graveyard, holding the skull of the old court jester, Yorick. In the duel, everything goes wrong for the plotters: Gertrude drinks the poison, Laertes and Hamlet are both cut by the poisoned blade, and Hamlet finally kills Claudius. Hamlet dies in Horatio's arms ('The rest is silence'), and the Norwegian prince **Fortinbras** arrives to take the throne.",
      diagram: `<svg viewBox="0 0 320 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tension graph rising through the five acts of Hamlet"><line x1="30" y1="145" x2="310" y2="145" stroke="#475569" stroke-width="1.5"/><line x1="30" y1="145" x2="30" y2="12" stroke="#475569" stroke-width="1.5"/><text x="16" y="80" font-size="11" fill="#475569" text-anchor="middle" transform="rotate(-90 16 80)">tension</text><path d="M32 132 C 55 125, 70 90, 85 82 C 105 75, 125 78, 140 70 C 155 60, 165 32, 178 30 C 195 30, 205 70, 225 74 C 245 76, 262 40, 285 18" fill="none" stroke="#7c3aed" stroke-width="3"/><circle cx="85" cy="82" r="4" fill="#7c3aed"/><circle cx="178" cy="30" r="4" fill="#7c3aed"/><circle cx="225" cy="74" r="4" fill="#7c3aed"/><circle cx="285" cy="18" r="4" fill="#dc2626"/><text x="85" y="104" font-size="11" text-anchor="middle" fill="#3730a3">Ghost</text><text x="178" y="22" font-size="11" text-anchor="middle" fill="#3730a3">Mousetrap</text><text x="225" y="94" font-size="11" text-anchor="middle" fill="#3730a3">Ophelia</text><text x="270" y="14" font-size="11" text-anchor="end" fill="#991b1b">Duel</text><text x="57" y="162" font-size="11" text-anchor="middle" fill="#334155">Act 1</text><text x="112" y="162" font-size="11" text-anchor="middle" fill="#334155">Act 2</text><text x="167" y="162" font-size="11" text-anchor="middle" fill="#334155">Act 3</text><text x="222" y="162" font-size="11" text-anchor="middle" fill="#334155">Act 4</text><text x="277" y="162" font-size="11" text-anchor="middle" fill="#334155">Act 5</text></svg>`,
      diagramCaption:
        "Tension builds from the Ghost's revelation to the turning point of the Mousetrap play in Act 3, dips into the slower, darker Act 4, then explodes in the final duel.",
      keyPoints: [
        "Hamlet is a revenge tragedy set at Elsinore, the Danish royal castle.",
        "The Ghost says Claudius poisoned him; Hamlet tests this with a play ('The Mousetrap').",
        "Act 3 is the turning point: Hamlet spares the praying Claudius but kills Polonius.",
        "The final duel kills Gertrude, Claudius, Laertes and Hamlet; Fortinbras takes the crown.",
      ],
      thinkDeeper:
        "The only person Hamlet kills with his own hand before Act 5 is the wrong man (Polonius). Why might Shakespeare make his hero's first decisive action a mistake? What does that suggest about acting quickly versus thinking carefully?",
    },
    {
      id: "characters",
      heading: "Who's who at Elsinore",
      body:
        "Learn the characters as a web of **relationships**, because almost every key moment depends on who is related to, loyal to, or spying on whom.\n\n- **Hamlet** – Prince of Denmark, a student at the university of Wittenberg. Intelligent, witty, grieving, bitter, and given to deep thinking.\n- **The Ghost** – appears as Hamlet's dead father, old King Hamlet. Demands revenge.\n- **Claudius** – old Hamlet's brother, now king and Gertrude's new husband. Smooth, clever, a skilled politician, and secretly a murderer who feels guilt.\n- **Gertrude** – Queen of Denmark, Hamlet's mother. Her quick remarriage horrifies Hamlet. It is never made clear whether she knew about the murder.\n- **Polonius** – the king's chief counsellor. Long-winded, nosy, loves spying. Father of Laertes and Ophelia.\n- **Ophelia** – Polonius's daughter, loved by Hamlet. Obedient and controlled by the men around her; she goes mad after her father's death.\n- **Laertes** – Polonius's son, a man of action who has been living in Paris. He becomes Hamlet's rival and is used by Claudius.\n- **Horatio** – Hamlet's loyal friend from Wittenberg, calm and trustworthy. He survives to 'tell my story'.\n- **Rosencrantz and Guildenstern** – old school friends summoned by Claudius to spy on Hamlet. Hamlet sends them to their deaths in England.\n- **Fortinbras** – Prince of Norway, whose father was killed in single combat by old King Hamlet. He ends the play as king of Denmark.\n\nA **foil** is a character whose contrast with another highlights that character's qualities. Laertes and Fortinbras are both foils to Hamlet: all three are sons whose fathers have died, but each responds differently.",
      diagram: `<svg viewBox="0 0 360 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Character relationship web for Hamlet"><rect x="10" y="10" width="100" height="34" rx="6" fill="#e2e8f0" stroke="#64748b"/><text x="60" y="25" font-size="11" text-anchor="middle" fill="#1e293b">Old King Hamlet</text><text x="60" y="38" font-size="11" text-anchor="middle" fill="#475569">(the Ghost)</text><rect x="140" y="10" width="80" height="34" rx="6" fill="#fce7f3" stroke="#db2777"/><text x="180" y="31" font-size="11" text-anchor="middle" fill="#831843">Gertrude</text><rect x="250" y="10" width="100" height="34" rx="6" fill="#fee2e2" stroke="#dc2626"/><text x="300" y="31" font-size="11" text-anchor="middle" fill="#7f1d1d">King Claudius</text><line x1="110" y1="27" x2="140" y2="27" stroke="#64748b" stroke-width="1.5"/><line x1="220" y1="27" x2="250" y2="27" stroke="#dc2626" stroke-width="1.5"/><path d="M60 44 Q180 70 300 44" fill="none" stroke="#dc2626" stroke-dasharray="4 3"/><text x="180" y="66" font-size="11" text-anchor="middle" fill="#991b1b">brothers: murder</text><line x1="180" y1="44" x2="180" y2="88" stroke="#64748b" stroke-width="1.5"/><rect x="135" y="88" width="90" height="30" rx="6" fill="#ede9fe" stroke="#7c3aed"/><text x="180" y="107" font-size="12" text-anchor="middle" fill="#4c1d95" font-weight="bold">HAMLET</text><rect x="255" y="88" width="95" height="30" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="302" y="107" font-size="11" text-anchor="middle" fill="#78350f">Polonius</text><line x1="300" y1="44" x2="302" y2="88" stroke="#d97706" stroke-dasharray="3 3"/><text x="318" y="70" font-size="11" fill="#78350f">adviser</text><line x1="285" y1="118" x2="265" y2="160" stroke="#d97706" stroke-width="1.5"/><line x1="320" y1="118" x2="330" y2="160" stroke="#d97706" stroke-width="1.5"/><rect x="225" y="160" width="70" height="28" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="260" y="178" font-size="11" text-anchor="middle" fill="#14532d">Ophelia</text><rect x="300" y="160" width="55" height="28" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="327" y="178" font-size="11" text-anchor="middle" fill="#1e3a8a">Laertes</text><line x1="210" y1="118" x2="250" y2="160" stroke="#16a34a" stroke-dasharray="4 3"/><text x="214" y="148" font-size="11" fill="#14532d">love</text><rect x="10" y="160" width="70" height="28" rx="6" fill="#f1f5f9" stroke="#475569"/><text x="45" y="178" font-size="11" text-anchor="middle" fill="#1e293b">Horatio</text><line x1="140" y1="115" x2="60" y2="160" stroke="#475569" stroke-width="1.5"/><text x="70" y="140" font-size="11" fill="#334155">loyal friend</text><rect x="95" y="160" width="115" height="28" rx="6" fill="#f1f5f9" stroke="#475569"/><text x="152" y="178" font-size="11" text-anchor="middle" fill="#1e293b">Rosencrantz + Guild.</text><line x1="170" y1="118" x2="152" y2="160" stroke="#475569" stroke-dasharray="4 3"/><text x="152" y="205" font-size="11" text-anchor="middle" fill="#334155">spies for Claudius</text></svg>`,
      diagramCaption:
        "Two families collide: Hamlet's (with Claudius as murderer at its heart) and Polonius's. Dashed lines show the hidden or dangerous links.",
      keyPoints: [
        "Claudius is Hamlet's uncle AND stepfather; he murdered his own brother.",
        "Polonius is the father of Ophelia and Laertes, so Hamlet's killing of Polonius destroys that family too.",
        "Horatio is the one truly loyal friend; Rosencrantz and Guildenstern spy for the king.",
        "Laertes and Fortinbras are foils: fellow sons who act where Hamlet hesitates.",
      ],
      thinkDeeper:
        "Hamlet's first line is an aside about Claudius: 'A little more than kin, and less than kind.' Using the character web, explain the wordplay. Why is 'kin' (family) not the same as 'kind' (natural, loving)?",
    },
    {
      id: "context",
      heading: "Context: revenge tragedy, ghosts and kings",
      discovery: {
        problem:
          "In 1600 most English people were Protestant. Protestants were taught that when you die, your soul goes straight to heaven or hell. The Ghost, however, says he is trapped in fires 'Till the foul crimes done in my days of nature / Are burnt and purged away.' Why might an Elizabethan audience feel uneasy about this ghost?",
        idea:
          "The Ghost describes **purgatory**, a Catholic belief that England's official Protestant Church had rejected. So to many in the audience the Ghost's story is theologically suspicious, and some Protestants believed 'ghosts' could be devils in disguise. Hamlet himself worries: 'The spirit that I have seen / May be the devil.' His caution is not cowardice; it is a sensible fear of being tricked into damnation.",
      },
      body:
        "**Revenge tragedy** was a hugely popular genre in Elizabethan and Jacobean theatre. Thomas Kyd's *The Spanish Tragedy* (c.1587) set the pattern, borrowing from the Roman playwright **Seneca**. Typical features:\n\n- a **ghost** or crime that demands vengeance\n- a revenger who **delays**, sometimes **feigns madness**, and plots in secret\n- a **play within a play** or performance used as a trap\n- a bloody final scene in which revenger and victims die\n\nShakespeare uses every convention, then questions it. Hamlet's delay becomes the real subject of the play.\n\n**Ghosts and the afterlife.** Many Elizabethans believed ghosts were real. Catholics might see a ghost as a soul from purgatory; Protestants were more likely to fear a demon taking a loved one's form. This uncertainty gives Hamlet a genuine reason to test the Ghost.\n\n**The divine right of kings** was the belief that a monarch is appointed by God. **Regicide** (killing a king) was therefore not just murder but a sin against God and the natural order. Claudius has committed regicide, which is why Denmark feels poisoned. Yet if Hamlet kills Claudius, he also kills an anointed king. Claudius himself cynically claims 'There's such divinity doth hedge a king' (4.5) when Laertes storms the palace.\n\n**Date and texts.** *Hamlet* was probably written between 1599 and 1601 and played by Richard Burbage at the Globe. It survives in three different early printed versions (two Quartos and the 1623 First Folio), which is why line numbers and some words differ between editions.",
      keyPoints: [
        "Revenge tragedy conventions: ghost, delay, madness, play within a play, bloody ending.",
        "The Ghost describes purgatory, a Catholic idea; Protestants feared ghosts could be devils.",
        "Divine right of kings: regicide was a sin against God, making both Claudius's crime and Hamlet's revenge dangerous.",
      ],
      thinkDeeper:
        "If Hamlet's audience believed killing a king was a sin, how does that change your judgement of his delay? Is he a coward, or a thinker trapped between two sins?",
    },
    {
      id: "revenge-and-delay",
      heading: "Revenge, and thought versus action",
      discovery: {
        problem:
          "Three young men in this play have lost their fathers. Hamlet's father was murdered by Claudius. Laertes's father was killed by Hamlet. Fortinbras's father was killed by old King Hamlet. Predict how each one will react, then check below. Which reaction seems most admirable?",
        idea:
          "Laertes reacts instantly and violently: he storms the palace and says he would cut Hamlet's throat 'i' the church'. Fortinbras raises an army. Hamlet thinks, doubts, tests and delays. Shakespeare sets the three side by side so that we judge Hamlet against them. Laertes's speed makes him easy for Claudius to manipulate, which complicates the idea that acting fast is always better.",
      },
      body:
        "The Ghost's command is simple, but Hamlet's response is not. He promises to sweep to his revenge, yet the play is about **delay**: the gap between deciding and doing.\n\n**Why does Hamlet delay?** Critics have argued for centuries. Strong reasons you can use and evaluate:\n\n- **He needs proof.** The Ghost could be a devil (2.2), so he stages 'The Mousetrap'.\n- **He thinks too much.** In 'To be, or not to be' he says 'conscience does make cowards of us all' and that resolution is 'sicklied o'er with the pale cast of thought'.\n- **Religion.** In 3.3 he finds Claudius praying and refuses to kill him in case his soul goes to heaven: 'And so he goes to heaven; / And so am I revenged. That would be scann'd.'\n- **Morality and grief.** Murder, even of a murderer, is a sin; and Hamlet is depressed and disgusted with the world.\n\n**Foils.** Laertes, told his father is dead, roars 'To hell, allegiance!' and wants revenge immediately. Claudius uses his rage, saying 'Revenge should have no bounds' (4.7). In 4.4 Hamlet watches Fortinbras's army march to fight for 'a little patch of ground' and scolds himself: 'How all occasions do inform against me, / And spur my dull revenge!'\n\nThe irony is that when Hamlet does act on impulse, he kills the wrong man (Polonius), and that one rash act sets off the chain that kills Ophelia, Laertes and Gertrude. Shakespeare suggests that neither pure thought nor pure action is enough.",
      diagram: `<svg viewBox="0 0 330 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three sons who lose fathers: Hamlet, Laertes and Fortinbras"><text x="165" y="16" font-size="12" text-anchor="middle" fill="#1e293b" font-weight="bold">Three sons, three responses</text><rect x="8" y="28" width="100" height="125" rx="8" fill="#ede9fe" stroke="#7c3aed"/><text x="58" y="48" font-size="12" text-anchor="middle" fill="#4c1d95" font-weight="bold">Hamlet</text><text x="58" y="68" font-size="11" text-anchor="middle" fill="#4c1d95">father killed</text><text x="58" y="82" font-size="11" text-anchor="middle" fill="#4c1d95">by Claudius</text><text x="58" y="106" font-size="11" text-anchor="middle" fill="#4c1d95">THINKS</text><text x="58" y="122" font-size="11" text-anchor="middle" fill="#4c1d95">tests, delays</text><text x="58" y="140" font-size="11" text-anchor="middle" fill="#4c1d95">5 acts</text><rect x="115" y="28" width="100" height="125" rx="8" fill="#dbeafe" stroke="#2563eb"/><text x="165" y="48" font-size="12" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Laertes</text><text x="165" y="68" font-size="11" text-anchor="middle" fill="#1e3a8a">father killed</text><text x="165" y="82" font-size="11" text-anchor="middle" fill="#1e3a8a">by Hamlet</text><text x="165" y="106" font-size="11" text-anchor="middle" fill="#1e3a8a">RAGES</text><text x="165" y="122" font-size="11" text-anchor="middle" fill="#1e3a8a">acts at once,</text><text x="165" y="140" font-size="11" text-anchor="middle" fill="#1e3a8a">is manipulated</text><rect x="222" y="28" width="100" height="125" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="272" y="48" font-size="12" text-anchor="middle" fill="#14532d" font-weight="bold">Fortinbras</text><text x="272" y="68" font-size="11" text-anchor="middle" fill="#14532d">father killed</text><text x="272" y="82" font-size="11" text-anchor="middle" fill="#14532d">by old Hamlet</text><text x="272" y="106" font-size="11" text-anchor="middle" fill="#14532d">MARCHES</text><text x="272" y="122" font-size="11" text-anchor="middle" fill="#14532d">leads an army,</text><text x="272" y="140" font-size="11" text-anchor="middle" fill="#14532d">ends up king</text></svg>`,
      diagramCaption:
        "Foils: Laertes and Fortinbras mirror Hamlet's situation, so their swift action makes his delay stand out.",
      keyPoints: [
        "The central question of the play is why Hamlet delays his revenge.",
        "Reasons include doubt about the Ghost, over-thinking, religious fear and moral disgust.",
        "Laertes and Fortinbras are foils whose fast action contrasts with Hamlet's thought.",
        "Hamlet's one impulsive act (killing Polonius) causes disaster, so action is not simply 'better'.",
      ],
      thinkDeeper:
        "Laertes acts immediately, yet he ends up as Claudius's puppet and dies by his own poisoned sword. Does the play prove Hamlet was right to delay? Argue both sides, then decide.",
    },
    {
      id: "soliloquies",
      heading: "Soliloquies: thinking out loud",
      discovery: {
        problem:
          "Read the first two lines of the soliloquy below aloud twice: once quickly and angrily, once slowly and wearily. Which reading suits the words better? Look at 'too too solid flesh' and 'weary, stale, flat and unprofitable' for clues.",
        idea:
          "The slow, exhausted reading fits. The repetition 'too too' makes his body feel heavy, and the list of four adjectives drags, each one flatter than the last. Hamlet is not angry yet; he is depressed. A soliloquy lets the actor reveal mood through rhythm as much as meaning, and the audience learns Hamlet's private feelings before any ghost appears.",
      },
      body:
        "A **soliloquy** is a speech in which a character, alone on stage (or believing they are alone), speaks their thoughts aloud. It gives the audience direct access to a character's mind. Do not confuse it with a **monologue** (a long speech addressed to other characters) or an **aside** (a short remark to the audience that other characters on stage do not hear).\n\nHamlet has seven soliloquies (by the usual count). The 'big five' are:\n\n- **1.2 'O, that this too too solid flesh would melt'** – grief and disgust at his mother's remarriage\n- **2.2 'O, what a rogue and peasant slave am I!'** – self-hatred for not acting; plans the Mousetrap\n- **3.1 'To be, or not to be'** – life, death and why fear stops us acting\n- **3.3 'Now might I do it pat'** – spares the praying Claudius\n- **4.4 'How all occasions do inform against me'** – shamed by Fortinbras's army\n\n**Analysing the 1.2 soliloquy.** Hamlet wishes his body would 'melt' and 'resolve itself into a dew', a metaphor for longing to disappear. He calls the world 'an unweeded garden / That grows to seed', an **extended metaphor** suggesting Denmark has been left to rot and be overrun since his father's death. The reference to Eden is implied: a garden that should be perfect is now 'rank and gross'. He contrasts his father and Claudius as 'Hyperion to a satyr' (a sun-god compared with a lustful half-goat creature). Then, breaking off mid-sentence with dashes, he bursts out 'Frailty, thy name is woman!', blaming his mother and, unfairly, all women. The broken **syntax** (sentence structure) shows a mind too upset to finish its thoughts.\n\nThe soliloquy ends: 'But break, my heart; for I must hold my tongue.' Hamlet is trapped: he must hide his feelings in public, which is why the soliloquy, the one place he can speak freely, matters so much.",
      passage: {
        id: "too-solid-flesh",
        title: "'O, that this too too solid flesh would melt' (extract)",
        source: "William Shakespeare, Hamlet (c.1600), Act 1 Scene 2 – Hamlet, alone",
        text:
          "O, that this too too solid flesh would melt,\nThaw and resolve itself into a dew!\nOr that the Everlasting had not fix'd\nHis canon 'gainst self-slaughter! O God! God!\nHow weary, stale, flat and unprofitable\nSeem to me all the uses of this world!\nFie on't! ah fie! 'tis an unweeded garden,\nThat grows to seed; things rank and gross in nature\nPossess it merely. That it should come to this!\nBut two months dead: nay, not so much, not two:\nSo excellent a king; that was, to this,\nHyperion to a satyr; so loving to my mother\nThat he might not beteem the winds of heaven\nVisit her face too roughly. [...]\nLet me not think on't—Frailty, thy name is woman!—",
        note:
          "the Everlasting = God; canon = law; self-slaughter = taking one's own life; uses = ways, customs; rank = foul-smelling, overgrown; merely = completely; Hyperion = the Greek sun-god; satyr = a lustful creature, half man, half goat; beteem = allow.",
      },
      keyPoints: [
        "A soliloquy is spoken alone and reveals a character's private thoughts.",
        "1.2: Hamlet is depressed before the Ghost appears, disgusted by the 'unweeded garden' of Denmark.",
        "Broken syntax and dashes show his thoughts racing and breaking off.",
      ],
      thinkDeeper:
        "Hamlet says 'I must hold my tongue', yet he has just spoken 30 lines. Who is he really talking to in a soliloquy, and why might Shakespeare want the audience to feel like Hamlet's only confidant?",
    },
    {
      id: "to-be-or-not-to-be",
      heading: "'To be, or not to be': the great question",
      discovery: {
        problem:
          "The speech opens with a choice: 'To be, or not to be'. Before reading on, write the two options as a balance: what are the arguments for 'being' (carrying on living and suffering) and for 'not being'? Then read the speech and find the single idea that tips the balance.",
        idea:
          "Hamlet's balance tips because of fear: 'the dread of something after death, / The undiscover'd country from whose bourn / No traveller returns'. Nobody knows what comes after death, so we put up with the troubles we know. He then widens it to all of us: 'Thus conscience does make cowards of us all'. The speech is less about one sad young man and more a universal argument about why people hesitate to act.",
      },
      body:
        "This is the most famous speech in English drama. Hamlet speaks it in Act 3 Scene 1, unaware (or perhaps aware?) that Claudius and Polonius are hiding nearby to spy on him with Ophelia.\n\n**What is he asking?** Whether it is nobler to 'suffer / The slings and arrows of outrageous fortune' (put up with life's painful blows) or to 'take arms against a sea of troubles' and end them. He compares death to sleep, which sounds peaceful, until he realises sleep brings dreams: 'ay, there's the rub' (the obstacle).\n\n**Key techniques:**\n\n- **Antithesis** (setting opposites side by side): 'To be, or not to be'; 'suffer' versus 'take arms'.\n- **Metaphor:** 'slings and arrows' turns bad luck into an army firing at us; 'a sea of troubles' suggests problems too vast to fight; death is 'the undiscover'd country'.\n- **Listing:** 'the whips and scorns of time, / The oppressor's wrong, the proud man's contumely' builds a catalogue of injustices that makes life feel crushing.\n- **Rhetorical questions:** 'who would fardels bear ... ?' draw the audience into the argument.\n- **Impersonal pronouns:** he never says 'I'. He uses 'we', 'us' and 'who', making his thinking universal.\n\nThe speech ends with Hamlet's explanation of his own delay: 'the native hue of resolution / Is sicklied o'er with the pale cast of thought'. **Resolution** (determination) has a healthy, natural colour, but thinking makes it pale and sick. Enterprises 'lose the name of action'. This connects the speech to the play's central theme of thought versus action.",
      passage: {
        id: "to-be",
        title: "'To be, or not to be'",
        source: "William Shakespeare, Hamlet (c.1600), Act 3 Scene 1 – Hamlet",
        text:
          "To be, or not to be: that is the question:\nWhether 'tis nobler in the mind to suffer\nThe slings and arrows of outrageous fortune,\nOr to take arms against a sea of troubles,\nAnd by opposing end them? To die: to sleep;\nNo more; and by a sleep to say we end\nThe heart-ache and the thousand natural shocks\nThat flesh is heir to, 'tis a consummation\nDevoutly to be wish'd. To die, to sleep;\nTo sleep: perchance to dream: ay, there's the rub;\nFor in that sleep of death what dreams may come\nWhen we have shuffled off this mortal coil,\nMust give us pause: there's the respect\nThat makes calamity of so long life;\nFor who would bear the whips and scorns of time,\nThe oppressor's wrong, the proud man's contumely,\nThe pangs of despised love, the law's delay,\nThe insolence of office and the spurns\nThat patient merit of the unworthy takes,\nWhen he himself might his quietus make\nWith a bare bodkin? who would fardels bear,\nTo grunt and sweat under a weary life,\nBut that the dread of something after death,\nThe undiscover'd country from whose bourn\nNo traveller returns, puzzles the will\nAnd makes us rather bear those ills we have\nThan fly to others that we know not of?\nThus conscience does make cowards of us all;\nAnd thus the native hue of resolution\nIs sicklied o'er with the pale cast of thought,\nAnd enterprises of great pith and moment\nWith this regard their currents turn awry,\nAnd lose the name of action.",
        note:
          "rub = obstacle; mortal coil = the turmoil of mortal life; respect = consideration; contumely = insulting arrogance; quietus = release, settling of a debt; bodkin = small dagger; fardels = heavy burdens; bourn = boundary; native hue = natural colour; pith = importance.",
      },
      diagram: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A balance weighing 'to be' against 'not to be', tipped by fear of the unknown"><polygon points="160,150 145,165 175,165" fill="#64748b"/><line x1="160" y1="150" x2="160" y2="70" stroke="#64748b" stroke-width="3"/><line x1="55" y1="88" x2="265" y2="52" stroke="#334155" stroke-width="4"/><circle cx="160" cy="70" r="5" fill="#334155"/><line x1="55" y1="88" x2="55" y2="108" stroke="#334155"/><line x1="265" y1="52" x2="265" y2="72" stroke="#334155"/><rect x="5" y="108" width="100" height="44" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="55" y="125" font-size="12" text-anchor="middle" fill="#1e3a8a" font-weight="bold">TO BE</text><text x="55" y="142" font-size="11" text-anchor="middle" fill="#1e3a8a">bear the ills we know</text><rect x="215" y="72" width="100" height="44" rx="6" fill="#fee2e2" stroke="#dc2626"/><text x="265" y="89" font-size="12" text-anchor="middle" fill="#7f1d1d" font-weight="bold">NOT TO BE</text><text x="265" y="106" font-size="11" text-anchor="middle" fill="#7f1d1d">end the troubles</text><rect x="20" y="10" width="130" height="40" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="85" y="27" font-size="11" text-anchor="middle" fill="#78350f">extra weight: dread of</text><text x="85" y="42" font-size="11" text-anchor="middle" fill="#78350f">'the undiscover'd country'</text><line x1="70" y1="50" x2="60" y2="84" stroke="#d97706" stroke-width="2"/></svg>`,
      diagramCaption:
        "Fear of what comes after death ('the undiscover'd country') weighs down the 'to be' side: we 'rather bear those ills we have / Than fly to others that we know not of'.",
      keyPoints: [
        "Antithesis frames the speech: to be / not to be; suffer / take arms.",
        "Hamlet uses 'we' and 'us', not 'I', so the argument applies to all humanity.",
        "Fear of the unknown after death ('the undiscover'd country') stops people acting.",
        "'Conscience does make cowards of us all' links the speech to the theme of delay.",
      ],
      thinkDeeper:
        "Some directors have Hamlet notice Polonius and Claudius hiding before this speech. How would the meaning change if Hamlet knew he was being watched? Is it still a 'true' soliloquy?",
    },
    {
      id: "appearance-reality",
      heading: "Appearance versus reality",
      body:
        "In *Hamlet*, almost nobody is what they seem. The theme of **appearance versus reality** runs through the language, the plot and the characters.\n\n**Hamlet's 'seems'.** In 1.2 Gertrude asks why his grief 'seems' so particular. He snaps: 'Seems, madam! nay it is; I know not \"seems.\"' His black clothes are only 'the trappings and the suits of woe'; real grief is 'within' and 'passeth show'. Ironically, Hamlet is the most honest person at court, yet he soon puts on an act of madness.\n\n**Claudius the actor.** Claudius appears to be a wise, grieving king. His first speech balances opposites to sound reasonable: 'With mirth in funeral and with dirge in marriage'. Only the Ghost reveals the truth: 'The serpent that did sting thy father's life / Now wears his crown.' Hamlet realises that 'one may smile, and smile, and be a villain'. Claudius's private guilt finally shows in the prayer scene (3.3), where we see the gap between his public face and his 'bosom black as death'.\n\n**The play within the play.** Hamlet uses a fiction (the actors' play) to uncover a reality (Claudius's guilt). This is **metatheatre**: theatre that draws attention to itself as theatre. Shakespeare reminds us that the actors on his own stage are also pretending.\n\n**Spying.** Polonius hides behind tapestries; Rosencrantz and Guildenstern pretend to be friendly visitors; Claudius and Polonius spy on Ophelia and Hamlet. Even the final duel looks like a friendly sport but is a murder plot.\n\n**Dramatic irony** (when the audience knows something a character does not) is central. In the prayer scene, Hamlet spares Claudius because he seems to be praying, but the audience has just heard Claudius admit he cannot pray: 'My words fly up, my thoughts remain below: / Words without thoughts never to heaven go.'",
      passage: {
        id: "claudius-prayer",
        title: "Claudius tries to pray (extract)",
        source: "William Shakespeare, Hamlet (c.1600), Act 3 Scene 3 – Claudius, alone",
        text:
          "O, my offence is rank, it smells to heaven;\nIt hath the primal eldest curse upon't,\nA brother's murder. Pray can I not,\nThough inclination be as sharp as will:\nMy stronger guilt defeats my strong intent;\n[...]\nBut, O, what form of prayer\nCan serve my turn? 'Forgive me my foul murder'?\nThat cannot be; since I am still possess'd\nOf those effects for which I did the murder,\nMy crown, mine own ambition and my queen.\nMay one be pardon'd and retain the offence?\n[...]\n[Hamlet enters, sees him kneeling, and leaves without striking. Claudius rises.]\nMy words fly up, my thoughts remain below:\nWords without thoughts never to heaven go.",
        note:
          "rank = foul-smelling; the primal eldest curse = the curse God put on Cain, who murdered his brother Abel in the Bible; inclination = desire; effects = the things gained; retain the offence = keep the benefits of the crime.",
      },
      keyPoints: [
        "Hamlet: 'I know not \"seems\"' — he rejects false appearances, then pretends madness himself.",
        "Claudius appears a good king but 'one may smile, and smile, and be a villain'.",
        "The Mousetrap is metatheatre: a fiction used to reveal the truth.",
        "Dramatic irony in 3.3: Hamlet thinks Claudius is praying; we know he cannot.",
      ],
      thinkDeeper:
        "Claudius compares his crime to Cain's murder of Abel, the first murder in the Bible. Why is this comparison so powerful, and does his honesty in this soliloquy make you feel any sympathy for him?",
    },
    {
      id: "madness-and-women",
      heading: "Madness, and women and power",
      body:
        "**Is Hamlet mad?** After meeting the Ghost, Hamlet announces he may 'put an antic disposition on', meaning he will act strangely on purpose. So his madness starts as a disguise. But is it only an act?\n\n- **Evidence it is feigned:** he tells Horatio his plan; he says he is 'but mad north-north-west' (only mad in one direction); his 'mad' talk is full of sharp, witty insults aimed at Polonius. Polonius himself admits, 'Though this be madness, yet there is method in't.'\n- **Evidence it becomes real:** his wild, cruel treatment of Ophelia ('Get thee to a nunnery'); killing Polonius on impulse; leaping into Ophelia's grave. His grief and depression are genuine from the start.\n\nA strong answer argues that the line between acting mad and being mad blurs, which itself shows the theme of appearance versus reality.\n\n**Ophelia's madness** is real and tragic. After her father is killed by the man she loves, she sings broken songs and hands out flowers with meanings: 'There's rosemary, that's for remembrance'. Gertrude later reports that she drowned. Her madness is a **foil** to Hamlet's: his is chosen and controlled (at least at first); hers is helpless.\n\n**Women and power.** The two women in the play have little control over their own lives.\n\n- **Ophelia** is told by her brother and father to reject Hamlet; she answers, 'I shall obey, my lord.' She is used as bait so the men can spy on Hamlet.\n- **Gertrude** is judged harshly by Hamlet ('Frailty, thy name is woman!') and by the Ghost, yet she is never shown plotting. In the final scene she defies Claudius for the first time ('I will, my lord; I pray you, pardon me') and drinks the poisoned cup.\n\nThe women are mostly seen through men's eyes. Modern productions often give them more voice, asking whether Gertrude's last drink is accident, defiance, or even a choice to protect her son.",
      keyPoints: [
        "Hamlet chooses an 'antic disposition' (feigned madness), but it may become real.",
        "'Though this be madness, yet there is method in't' — Polonius senses a pattern.",
        "Ophelia's genuine madness is a foil to Hamlet's performed madness.",
        "Ophelia and Gertrude are controlled and judged by men; 'Frailty, thy name is woman!'",
      ],
      thinkDeeper:
        "Hamlet says 'Frailty, thy name is woman!' Is this a fair judgement of Gertrude, or does it tell us more about Hamlet than about women? Use evidence from what Gertrude actually does in the play.",
    },
    {
      id: "corruption-mortality",
      heading: "Corruption, decay and death",
      body:
        "**Corruption** means moral rottenness, and Shakespeare makes it physical. Images of **disease, rot, poison and decay** spread through the play like an infection. Tracing an image pattern like this across a text is called analysing **motifs** or **imagery**.\n\n- **'Something is rotten in the state of Denmark.'** Said by **Marcellus**, a guard, in 1.4 as Hamlet follows the Ghost. Not by Hamlet: a classic exam slip. 'Rotten' suggests decay hidden inside something that looks sound; 'state' means both the country and its condition. The crime at the top has infected the whole kingdom.\n- **Poison.** Old Hamlet is poisoned through the ear; the Ghost says 'the whole ear of Denmark' has been 'Rankly abused' by the lie that a serpent stung him. Lies, too, are poison poured into ears. The play ends with a poisoned sword and a poisoned cup.\n- **Gardens and weeds.** Denmark is 'an unweeded garden' (1.2).\n- **Smell.** Claudius: 'O, my offence is rank, it smells to heaven'.\n\n**Mortality** (the fact that every human must die) is the play's darkest theme. In 5.1, gravediggers joke as they dig Ophelia's grave, tossing up skulls. Hamlet holds the skull of **Yorick**, the king's jester who carried him on his back as a child: 'Alas, poor Yorick! I knew him, Horatio'. He imagines the lips he kissed, the jokes that 'set the table on a roar', and now: 'Not one now, to mock your own grinning?' He reflects that even Alexander the Great returned to dust. Death is the great leveller: kings, jesters and beggars end the same way.\n\nThis scene changes Hamlet. In Act 5 he is calmer and accepts fate: 'the readiness is all'. When he dies, his last words, 'The rest is silence', close the life of the play's great talker with the one thing he cannot put into words.",
      diagram: `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Connotation web zooming in on the word rotten"><circle cx="160" cy="90" r="34" fill="#fef3c7" stroke="#b45309" stroke-width="2"/><text x="160" y="95" font-size="14" text-anchor="middle" fill="#78350f" font-weight="bold">rotten</text><line x1="160" y1="56" x2="160" y2="36" stroke="#b45309"/><line x1="128" y1="78" x2="90" y2="62" stroke="#b45309"/><line x1="192" y1="78" x2="230" y2="62" stroke="#b45309"/><line x1="130" y1="106" x2="90" y2="128" stroke="#b45309"/><line x1="190" y1="106" x2="230" y2="128" stroke="#b45309"/><line x1="160" y1="124" x2="160" y2="146" stroke="#b45309"/><rect x="105" y="12" width="110" height="24" rx="6" fill="#fff7ed" stroke="#ea580c"/><text x="160" y="28" font-size="11" text-anchor="middle" fill="#7c2d12">decay from inside</text><rect x="5" y="48" width="95" height="24" rx="6" fill="#fff7ed" stroke="#ea580c"/><text x="52" y="64" font-size="11" text-anchor="middle" fill="#7c2d12">a smell that spreads</text><rect x="220" y="48" width="95" height="24" rx="6" fill="#fff7ed" stroke="#ea580c"/><text x="267" y="64" font-size="11" text-anchor="middle" fill="#7c2d12">disease, infection</text><rect x="5" y="122" width="95" height="24" rx="6" fill="#fff7ed" stroke="#ea580c"/><text x="52" y="138" font-size="11" text-anchor="middle" fill="#7c2d12">moral corruption</text><rect x="220" y="122" width="95" height="24" rx="6" fill="#fff7ed" stroke="#ea580c"/><text x="267" y="138" font-size="11" text-anchor="middle" fill="#7c2d12">hidden until it shows</text><rect x="110" y="146" width="100" height="24" rx="6" fill="#fff7ed" stroke="#ea580c"/><text x="160" y="162" font-size="11" text-anchor="middle" fill="#7c2d12">death, graves</text></svg>`,
      diagramCaption:
        "Zoom in on one word: the connotations of 'rotten' (decay, smell, infection, corruption, death) all link to the play's image pattern of a diseased Denmark.",
      passage: {
        id: "yorick",
        title: "'Alas, poor Yorick!'",
        source: "William Shakespeare, Hamlet (c.1600), Act 5 Scene 1 – Hamlet to Horatio, holding a skull",
        text:
          "Alas, poor Yorick! I knew him, Horatio: a fellow of infinite jest, of most excellent fancy: he hath borne me on his back a thousand times; and now, how abhorred in my imagination it is! my gorge rises at it. Here hung those lips that I have kissed I know not how oft. Where be your gibes now? your gambols? your songs? your flashes of merriment, that were wont to set the table on a roar? Not one now, to mock your own grinning? quite chap-fallen?",
        note:
          "Written in prose. infinite jest = endless jokes; fancy = imagination; abhorred = horrifying; my gorge rises = I feel sick; gibes = taunts; gambols = playful leaps; were wont to = used to; chap-fallen = with the jaw dropped (also: downcast).",
      },
      keyPoints: [
        "'Something is rotten in the state of Denmark' is said by Marcellus (1.4).",
        "Imagery of rot, poison, disease and weeds shows Claudius's crime infecting the nation.",
        "Yorick's skull (5.1) shows death as the great leveller.",
        "In Act 5 Hamlet accepts fate: 'the readiness is all'; he dies saying 'The rest is silence'.",
      ],
      thinkDeeper:
        "The play begins with the poisoning of a king through the ear and ends with poisoned weapons and a poisoned cup. Why might Shakespeare frame the whole tragedy with poison rather than, say, open battle?",
    },
  ],

  passages: [
    {
      id: "too-solid-flesh",
      title: "'O, that this too too solid flesh would melt' (extract)",
      source: "William Shakespeare, Hamlet (c.1600), Act 1 Scene 2 – Hamlet, alone",
      text:
        "O, that this too too solid flesh would melt,\nThaw and resolve itself into a dew!\nOr that the Everlasting had not fix'd\nHis canon 'gainst self-slaughter! O God! God!\nHow weary, stale, flat and unprofitable\nSeem to me all the uses of this world!\nFie on't! ah fie! 'tis an unweeded garden,\nThat grows to seed; things rank and gross in nature\nPossess it merely. That it should come to this!\nBut two months dead: nay, not so much, not two:\nSo excellent a king; that was, to this,\nHyperion to a satyr; so loving to my mother\nThat he might not beteem the winds of heaven\nVisit her face too roughly. [...]\nLet me not think on't—Frailty, thy name is woman!—",
      note:
        "Hamlet has just been told by Claudius and Gertrude to stop mourning. the Everlasting = God; canon = law; rank = foul, overgrown; merely = completely; Hyperion = sun-god; satyr = lustful half-goat creature; beteem = allow.",
    },
    {
      id: "polonius-advice",
      title: "Polonius's advice to Laertes",
      source: "William Shakespeare, Hamlet (c.1600), Act 1 Scene 3 – Polonius to his son Laertes, who is leaving for France",
      text:
        "Give thy thoughts no tongue,\nNor any unproportioned thought his act.\nBe thou familiar, but by no means vulgar.\nThose friends thou hast, and their adoption tried,\nGrapple them to thy soul with hoops of steel;\nBut do not dull thy palm with entertainment\nOf each new-hatch'd, unfledged comrade. Beware\nOf entrance to a quarrel, but being in,\nBear't that the opposed may beware of thee.\nGive every man thy ear, but few thy voice;\nTake each man's censure, but reserve thy judgment.\nCostly thy habit as thy purse can buy,\nBut not express'd in fancy; rich, not gaudy;\nFor the apparel oft proclaims the man, [...]\nNeither a borrower nor a lender be;\nFor loan oft loses both itself and friend,\nAnd borrowing dulls the edge of husbandry.\nThis above all: to thine own self be true,\nAnd it must follow, as the night the day,\nThou canst not then be false to any man.",
      note:
        "unproportioned = unbalanced, unwise; vulgar = common, over-familiar with everyone; adoption tried = loyalty tested; censure = opinion; habit = clothes; husbandry = careful management of money. Irony: the man who says 'to thine own self be true' spends the play spying and scheming.",
    },
    {
      id: "ghost",
      title: "The Ghost reveals the murder (extract)",
      source: "William Shakespeare, Hamlet (c.1600), Act 1 Scene 5 – the Ghost and Hamlet",
      text:
        "GHOST: I am thy father's spirit,\nDoom'd for a certain term to walk the night,\nAnd for the day confined to fast in fires,\nTill the foul crimes done in my days of nature\nAre burnt and purged away. [...]\nIf thou didst ever thy dear father love—\nHAMLET: O God!\nGHOST: Revenge his foul and most unnatural murder.\nHAMLET: Murder!\nGHOST: Murder most foul, as in the best it is;\nBut this most foul, strange and unnatural.\nHAMLET: Haste me to know't, that I, with wings as swift\nAs meditation or the thoughts of love,\nMay sweep to my revenge.\nGHOST: I find thee apt; [...]\nNow, Hamlet, hear:\n'Tis given out that, sleeping in my orchard,\nA serpent stung me; so the whole ear of Denmark\nIs by a forged process of my death\nRankly abused: but know, thou noble youth,\nThe serpent that did sting thy father's life\nNow wears his crown.\nHAMLET: O my prophetic soul! My uncle!",
      note:
        "Doom'd for a certain term = sentenced for a fixed time; purged = cleansed (the Ghost describes purgatory); apt = ready; 'tis given out = it is publicly said; a forged process = a false story; rankly abused = foully deceived; prophetic soul = Hamlet had already suspected.",
    },
    {
      id: "to-be",
      title: "'To be, or not to be' (opening and close)",
      source: "William Shakespeare, Hamlet (c.1600), Act 3 Scene 1 – Hamlet",
      text:
        "To be, or not to be: that is the question:\nWhether 'tis nobler in the mind to suffer\nThe slings and arrows of outrageous fortune,\nOr to take arms against a sea of troubles,\nAnd by opposing end them? To die: to sleep;\nNo more; and by a sleep to say we end\nThe heart-ache and the thousand natural shocks\nThat flesh is heir to, 'tis a consummation\nDevoutly to be wish'd. To die, to sleep;\nTo sleep: perchance to dream: ay, there's the rub;\nFor in that sleep of death what dreams may come\nWhen we have shuffled off this mortal coil,\nMust give us pause [...]\nBut that the dread of something after death,\nThe undiscover'd country from whose bourn\nNo traveller returns, puzzles the will\nAnd makes us rather bear those ills we have\nThan fly to others that we know not of?\nThus conscience does make cowards of us all;\nAnd thus the native hue of resolution\nIs sicklied o'er with the pale cast of thought,\nAnd enterprises of great pith and moment\nWith this regard their currents turn awry,\nAnd lose the name of action.",
      note:
        "The full speech is printed in the guide section on 'To be, or not to be'. rub = obstacle; mortal coil = the turmoil of life; bourn = boundary; native hue = natural colour; pith = importance.",
    },
    {
      id: "rest-is-silence",
      title: "The death of Hamlet",
      source: "William Shakespeare, Hamlet (c.1600), Act 5 Scene 2 – Hamlet and Horatio",
      text:
        "HAMLET: O good Horatio, what a wounded name,\nThings standing thus unknown, shall live behind me!\nIf thou didst ever hold me in thy heart,\nAbsent thee from felicity awhile,\nAnd in this harsh world draw thy breath in pain,\nTo tell my story. [...]\nO, I die, Horatio;\nThe potent poison quite o'er-crows my spirit:\nI cannot live to hear the news from England;\nBut I do prophesy the election lights\nOn Fortinbras: he has my dying voice;\nSo tell him, with the occurrents, more and less,\nWhich have solicited. The rest is silence.\n[He dies.]\nHORATIO: Now cracks a noble heart. Good night, sweet prince:\nAnd flights of angels sing thee to thy rest!",
      note:
        "Horatio has just tried to drink the rest of the poison to die with his friend. wounded name = damaged reputation; felicity = happiness (here, the peace of death); o'er-crows = overpowers, crows over like a winning cockerel; election = choice of the next king; dying voice = last vote; occurrents = events; solicited = prompted all this.",
    },
  ],

  quoteBank: [
    {
      quote: "Something is rotten in the state of Denmark.",
      source: "Marcellus, Act 1 Scene 4",
      analysis:
        "Said by a guard, not a nobleman, which suggests that even ordinary people sense the sickness at the top. 'Rotten' connotes decay hidden beneath a sound surface and a smell that spreads; the pun on 'state' (country and condition) shows the whole nation is infected by Claudius's secret crime.",
      themes: ["corruption", "appearance vs reality"],
    },
    {
      quote: "Frailty, thy name is woman!",
      source: "Hamlet, Act 1 Scene 2 (soliloquy)",
      analysis:
        "An apostrophe (addressing an abstract idea as if it were a person) that turns Gertrude's quick remarriage into a judgement on all women. 'Frailty' means moral weakness. The outburst, breaking into a half-finished sentence, shows how Hamlet's disgust overwhelms his reason, and invites us to question whether his judgement is fair.",
      themes: ["women and power", "grief"],
    },
    {
      quote: "Seems, madam! nay it is; I know not 'seems.'",
      source: "Hamlet to Gertrude, Act 1 Scene 2",
      analysis:
        "Hamlet seizes on his mother's word 'seems' and throws it back at her, insisting his grief is real, not an act. The bitter repetition introduces the theme of appearance versus reality, and is ironic: the man who 'knows not seems' will soon pretend to be mad.",
      themes: ["appearance vs reality", "grief"],
    },
    {
      quote: "This above all: to thine own self be true",
      source: "Polonius to Laertes, Act 1 Scene 3",
      analysis:
        "Sounds like wise, timeless advice, and is often quoted as such. In context it is ironic: Polonius is a busybody who spies, sets traps and is killed hiding behind a tapestry. Shakespeare shows that fine-sounding words do not guarantee honest actions.",
      themes: ["appearance vs reality", "family"],
    },
    {
      quote: "The serpent that did sting thy father's life / Now wears his crown.",
      source: "The Ghost, Act 1 Scene 5",
      analysis:
        "The Ghost turns the official story (a snake bit him) into a metaphor for Claudius. The serpent echoes the devil in the Garden of Eden, presenting Claudius as the source of evil in Denmark's 'garden'. The present tense 'Now wears' makes the injustice urgent: the murderer is still enjoying his reward.",
      themes: ["revenge", "corruption"],
    },
    {
      quote: "That one may smile, and smile, and be a villain",
      source: "Hamlet, Act 1 Scene 5",
      analysis:
        "The repetition of 'smile, and smile' mimics Claudius's endless false friendliness, and the final word 'villain' lands like a blow. It sums up the theme of appearance versus reality: a pleasant face can hide a murderer.",
      themes: ["appearance vs reality"],
    },
    {
      quote: "The time is out of joint: O cursed spite, / That ever I was born to set it right!",
      source: "Hamlet, Act 1 Scene 5",
      analysis:
        "The metaphor of a dislocated bone presents the whole world as broken and painful. A rhyming couplet ('spite'/'right') rounds off his reaction to the Ghost, but Hamlet calls his duty a curse; he is reluctant from the very start, foreshadowing his delay.",
      themes: ["revenge", "thought vs action"],
    },
    {
      quote: "What a piece of work is a man! ... And yet, to me, what is this quintessence of dust?",
      source: "Hamlet to Rosencrantz and Guildenstern, Act 2 Scene 2",
      analysis:
        "A soaring list of praise ('how noble in reason! how infinite in faculty!') collapses into the image of man as the purest essence of 'dust'. The contrast captures Hamlet's depression: he knows humans are wonderful but can no longer feel it. 'Dust' also foreshadows the graveyard and mortality.",
      themes: ["mortality", "grief"],
    },
    {
      quote: "Though this be madness, yet there is method in't.",
      source: "Polonius (aside), Act 2 Scene 2",
      analysis:
        "Even foolish Polonius notices that Hamlet's 'mad' answers are pointed and clever. The line supports the reading that Hamlet's madness is an act with a purpose, and became the everyday phrase 'method in his madness'.",
      themes: ["madness", "appearance vs reality"],
    },
    {
      quote: "the play's the thing / Wherein I'll catch the conscience of the king.",
      source: "Hamlet, Act 2 Scene 2 (soliloquy)",
      analysis:
        "The rhyming couplet ('thing'/'king') snaps shut like the trap it describes. Hamlet will use fiction to reveal truth (metatheatre). It also shows his caution: he wants proof before he acts, because the Ghost might be a devil.",
      themes: ["appearance vs reality", "thought vs action"],
    },
    {
      quote: "Thus conscience does make cowards of us all",
      source: "Hamlet, Act 3 Scene 1 ('To be, or not to be')",
      analysis:
        "'Conscience' here means both moral sense and reflective thought. The plural 'us all' makes Hamlet's hesitation universal rather than a personal failing, and the harsh label 'cowards' shows his self-criticism. It is the clearest statement of the thought versus action theme.",
      themes: ["thought vs action", "mortality"],
    },
    {
      quote: "My words fly up, my thoughts remain below: / Words without thoughts never to heaven go.",
      source: "Claudius, Act 3 Scene 3",
      analysis:
        "Antithesis ('up'/'below') and a closing rhyming couplet show Claudius split between empty words and guilty thoughts. The couplet creates dramatic irony, because Hamlet has just spared him for fear that his prayers were reaching heaven.",
      themes: ["appearance vs reality", "guilt"],
    },
    {
      quote: "Alas, poor Yorick! I knew him, Horatio",
      source: "Hamlet, Act 5 Scene 1",
      analysis:
        "Holding the skull of the jester who once carried him, Hamlet confronts death physically. The contrast between Yorick's 'infinite jest' and the silent, 'grinning' skull shows death as the great leveller, and marks Hamlet's move towards calm acceptance of mortality.",
      themes: ["mortality"],
    },
    {
      quote: "The rest is silence.",
      source: "Hamlet, Act 5 Scene 2 (his last words)",
      analysis:
        "A short, plain sentence from the play's most talkative character. 'Rest' means both 'what remains' and 'peaceful sleep', so the line is both an ending and a release. After a play full of words, silence is the only thing left: thought finally stops.",
      themes: ["mortality", "thought vs action"],
    },
  ],

  modelWriting: [
    {
      title: "PEEL paragraph: Hamlet's state of mind",
      task: "How does Shakespeare present Hamlet's state of mind in the 'To be, or not to be' soliloquy?",
      text:
        "Shakespeare presents Hamlet as a mind paralysed by thought rather than simply a young man who is sad. Weighing life against death, Hamlet asks whether it is nobler 'to suffer / The slings and arrows of outrageous fortune, / Or to take arms against a sea of troubles'. The military metaphor 'slings and arrows' presents bad luck as an enemy army firing at him, while 'a sea of troubles' suggests problems so vast that fighting them would be as useless as attacking the ocean. Strikingly, Hamlet never uses the word 'I'; instead he speaks of 'we' and 'us', concluding that 'conscience does make cowards of us all'. This shows that he is analysing his own hesitation as if it were a universal law, which is itself another way of avoiding action. Shakespeare therefore makes the soliloquy dramatise the play's central theme: Hamlet thinks so deeply about revenge that his 'resolution' becomes 'sicklied o'er with the pale cast of thought'.",
      annotations: [
        "Point answers the question directly and makes an argument ('paralysed by thought'), not just a description.",
        "Quotations are short and embedded in the writer's own sentences.",
        "Zooms in on technique (military metaphor) and the connotations of individual words ('sea', 'cowards').",
        "Notices something less obvious (no 'I' — only 'we' and 'us') and explains why it matters.",
        "Links back to the theme of thought versus action and the writer's purpose, ending with a well-chosen final quotation.",
      ],
    },
    {
      title: "PEEL paragraph: Is Claudius simply a villain?",
      task: "How does Shakespeare present Claudius in the prayer scene (Act 3 Scene 3)?",
      text:
        "Although Claudius is the murderer at the heart of the tragedy, Shakespeare complicates our view of him in the prayer scene by revealing a guilty conscience. Alone, Claudius confesses, 'O, my offence is rank, it smells to heaven'. The adjective 'rank' suggests a foul, rotting smell, linking his crime to the play's wider imagery of a diseased Denmark, while the hyperbole that it reaches 'heaven' shows that he knows God sees it. He even compares himself to Cain, admitting the 'primal eldest curse' of 'A brother's murder'. However, he refuses to give up 'My crown, mine own ambition and my queen', and the list, with the possessive 'my' repeated, shows that his greed is stronger than his guilt. Shakespeare therefore presents Claudius not as a cartoon villain but as a man who understands exactly how wicked he is and chooses evil anyway, which arguably makes him more disturbing.",
      annotations: [
        "Opens with a 'although... however' argument: a sophisticated, balanced point.",
        "Analyses a single word ('rank') and connects it to an image pattern across the play.",
        "Uses biblical context (Cain and Abel) briefly and relevantly, not as a bolt-on.",
        "Spots a structural feature (a list with repeated possessives) and explains its effect.",
        "Ends with an evaluative judgement about the effect on the audience.",
      ],
    },
    {
      title: "Creative speech: Horatio tells Hamlet's story",
      task: "Write the opening of the speech Horatio gives to Fortinbras and the people of Denmark after the final scene.",
      text:
        "People of Denmark, look at this hall. Four of the most powerful people in your kingdom lie still on this floor, and you deserve to know why. A prince asked me, with his last breath, to tell his story, and I will tell it truly, even where the truth is ugly.\n\nTwo months after his father's funeral, Prince Hamlet stood in this court dressed in black while everyone else wore wedding silks. He was told to smile. He could not. Then, on the cold battlements, a spirit in his father's armour told him a secret: the old king had not been bitten by a snake. The snake was wearing the crown.\n\nYou will hear that Hamlet was mad. You will hear that he was slow, or cruel, or a coward. I knew him. He was a man who would not strike until he was certain, in a court where nobody told the truth...",
      annotations: [
        "Direct address ('People of Denmark') and a command ('look at this hall') grab the audience immediately.",
        "Short sentences ('He was told to smile. He could not.') create pace and emotional punch.",
        "Reuses Shakespeare's own imagery (the serpent wearing the crown) to show close knowledge of the text.",
        "Anticipates the audience's opinions ('You will hear that...') and rebuts them: a persuasive technique.",
        "Stays in character: Horatio's loyalty and calm honesty come through in the voice.",
      ],
    },
  ],

  mnemonics: [
    {
      topic: "Hamlet's five big soliloquies, in order",
      device: "Some Real Thinkers Never Act",
      explanation:
        "Solid flesh (1.2, 'O, that this too too solid flesh would melt') → Rogue (2.2, 'O, what a rogue and peasant slave am I!') → To be (3.1, 'To be, or not to be') → Now (3.3, 'Now might I do it pat') → All occasions (4.4, 'How all occasions do inform against me'). The phrase itself reminds you of the theme: thinking instead of acting.",
    },
    {
      topic: "Who dies, in order (on stage or reported)",
      device: "Please Only Get Charlie's Lunch, Hamlet! (R&G are off having theirs in England)",
      explanation:
        "Polonius (3.4, stabbed behind the arras) → Ophelia (4.7, drowning reported by Gertrude) → Gertrude (5.2, poisoned cup) → Claudius (5.2, stabbed and forced to drink) → Laertes (5.2, poisoned sword) → Hamlet (5.2, poisoned sword). Rosencrantz and Guildenstern are executed offstage in England; their deaths are announced at the very end.",
    },
    {
      topic: "The seven big themes",
      device: "WARM CAM (Hamlet's life caught on camera)",
      explanation:
        "Women and power · Action versus thought (delay) · Revenge · Madness · Corruption and decay · Appearance versus reality · Mortality. In an essay, try to link any quotation to at least two of these.",
    },
    {
      topic: "Writing an analytical paragraph",
      device: "PEEL + ZOOM",
      explanation:
        "Point (answer the question) → Evidence (a short, embedded quotation) → Explain (name the technique, then ZOOM in on one word and its connotations) → Link (back to the question, a theme, the context or Shakespeare's purpose).",
    },
  ],

  examMistakes: [
    "Attributing 'Something is rotten in the state of Denmark' to Hamlet. It is said by Marcellus (1.4).",
    "Retelling the plot instead of analysing: 'Then Hamlet sees the Ghost and then...' earns few marks unless every event is used to make a point about language or theme.",
    "Dropping in long quotations without explaining them. Choose 2–6 words, embed them, and zoom in on a key word.",
    "Writing 'Shakespeare uses a metaphor' without saying what the metaphor suggests or why it matters. Always explain the effect.",
    "Calling every speech a soliloquy. 'What a piece of work is a man' is spoken to Rosencrantz and Guildenstern, so it is not a soliloquy.",
    "Treating Hamlet's madness as simply real or simply fake. The best answers weigh evidence for both.",
    "Using context as a bolt-on ('In Elizabethan times people believed in ghosts.') instead of linking it to a specific moment, such as Hamlet's fear that the Ghost 'May be the devil'.",
    "Writing about the characters as if they were real people with lives outside the play, rather than as Shakespeare's constructions designed to create effects and explore ideas.",
  ],

  misconceptions: [
    {
      wrong: "Hamlet says 'To be or not to be' while holding a skull.",
      right:
        "These are two different scenes. 'To be, or not to be' is in Act 3 Scene 1, with no skull. Yorick's skull appears in the graveyard in Act 5 Scene 1. Posters often combine the two images, which causes the confusion.",
    },
    {
      wrong: "'Alas, poor Yorick! I knew him well.'",
      right: "The real line is 'Alas, poor Yorick! I knew him, Horatio'. Quote it accurately in an exam.",
    },
    {
      wrong: "Hamlet is simply a coward who cannot make up his mind.",
      right:
        "Hamlet takes huge risks (following the Ghost, provoking the king, killing Polonius). His delay has reasons: doubt about the Ghost, religious fear of sending Claudius to heaven, moral disgust and over-thinking. Calling him a 'coward' is his own harsh judgement on himself, not necessarily the play's.",
    },
    {
      wrong: "Gertrude definitely helped Claudius murder her husband.",
      right:
        "The play never says so. The Ghost tells Hamlet to 'Leave her to heaven', and in the closet scene she seems shocked when Hamlet mentions killing a king. Her guilt or innocence is deliberately left open.",
    },
    {
      wrong: "Hamlet kills Claudius as soon as the Mousetrap play proves his guilt.",
      right:
        "After the play he finds Claudius praying and decides NOT to kill him, in case his soul goes to heaven. He only kills Claudius in the final scene, after Claudius's poison has already killed Gertrude and is about to kill Hamlet himself.",
    },
  ],

  expertDebates: [
    {
      question: "Why does Hamlet delay his revenge?",
      detail:
        "This is the most argued-about question in Shakespeare criticism. The Romantic poet Coleridge thought Hamlet thought too much to act. Others say the delay is practical (he needs proof; the king is guarded), religious (killing a king, and possibly being tricked by a devil, risks damnation) or psychological (grief and depression). Some critics point out that revenge tragedies need delay or the play would end in Act 1. Strong answers weigh several reasons and use the text to decide which matters most.",
    },
    {
      question: "Is Hamlet's madness real or an act?",
      detail:
        "Hamlet announces he will 'put an antic disposition on', and Polonius sees 'method' in his madness, which suggests it is feigned. Yet his cruelty to Ophelia, the rash killing of Polonius and his wild behaviour at her grave suggest grief may have pushed the act into something real. Many critics argue the point is that we cannot be sure, which mirrors the play's theme of appearance versus reality.",
    },
    {
      question: "Is Gertrude guilty, weak or a victim?",
      detail:
        "Hamlet calls her frail, and the Ghost accuses Claudius of winning her 'will' through 'witchcraft' of wit and gifts. But she never schemes on stage, seems genuinely loving to Hamlet, and her last act defies Claudius. Some productions show her drinking the poison knowingly to save her son. Feminist critics argue the play judges women through men's eyes and gives them almost no voice of their own.",
    },
  ],

  realWorld: [
    {
      emoji: "🦁",
      title: "The Lion King",
      detail:
        "Disney's The Lion King (1994) borrows Hamlet's plot: a king murdered by his jealous brother, a son haunted by his father's spirit ('Remember who you are'), and a final reckoning. Spotting the parallels is a great way to remember the plot.",
    },
    {
      emoji: "💬",
      title: "Words we still use",
      detail:
        "'To thine own self be true', 'neither a borrower nor a lender be', 'method in his madness', 'the lady doth protest too much', 'in my mind's eye' and 'brevity is the soul of wit' all come from Hamlet (some in altered form: Gertrude actually says 'The lady protests too much, methinks'). You use Shakespeare without knowing it.",
    },
    {
      emoji: "🏰",
      title: "A real castle",
      detail:
        "Elsinore is the English name for Helsingør in Denmark, home of Kronborg Castle. Famous actors have performed Hamlet there, in the very setting Shakespeare imagined.",
    },
    {
      emoji: "🧠",
      title: "Overthinking and decision-making",
      detail:
        "Psychologists talk about 'analysis paralysis': thinking about a decision so much that you never make it. Hamlet's 'pale cast of thought' is one of the earliest and most vivid descriptions of it, and it is a useful idea when you are revising, choosing options or facing a difficult conversation.",
    },
    {
      emoji: "🎭",
      title: "The actor's Everest",
      detail:
        "Playing Hamlet is seen as the ultimate test for an actor because the role is enormous and has so many possible interpretations. Comparing different film and stage versions shows how one script can create a hesitant, angry, witty or heartbroken prince.",
    },
  ],

  flashcards: [
    { front: "Who says 'Something is rotten in the state of Denmark'?", back: "Marcellus, a guard (Act 1 Scene 4)." },
    { front: "'Frailty, thy name is woman!' — who, about whom, where?", back: "Hamlet, about his mother Gertrude, in his first soliloquy (Act 1 Scene 2)." },
    { front: "'This above all: to thine own self be true'", back: "Polonius to Laertes as he leaves for France (Act 1 Scene 3). Ironic, because Polonius is a schemer and spy." },
    { front: "How was old King Hamlet murdered?", back: "Claudius poured poison into his ear while he slept in his orchard; the public was told a serpent stung him (Act 1 Scene 5)." },
    { front: "antic disposition", back: "Hamlet's phrase for the strange, 'mad' behaviour he decides to put on as a disguise (Act 1 Scene 5)." },
    { front: "Soliloquy", back: "A speech spoken by a character alone on stage, revealing their private thoughts to the audience." },
    { front: "Aside", back: "A short remark to the audience (or to one character) that the others on stage do not hear, e.g. Hamlet's 'A little more than kin, and less than kind.'" },
    { front: "'The play's the thing / Wherein I'll catch the conscience of the king.'", back: "Hamlet, end of Act 2 Scene 2: he will stage 'The Mousetrap' to test Claudius's guilt." },
    { front: "'Thus conscience does make cowards of us all'", back: "Hamlet, 'To be, or not to be' (Act 3 Scene 1): thinking and fear stop people from acting." },
    { front: "'My words fly up, my thoughts remain below'", back: "Claudius after failing to pray (Act 3 Scene 3). Dramatic irony: Hamlet spared him thinking he was praying." },
    { front: "Who is killed behind the arras (tapestry)?", back: "Polonius, stabbed by Hamlet in Gertrude's closet (Act 3 Scene 4); Hamlet thought it was the king." },
    { front: "Foil", back: "A character who contrasts with another to highlight their qualities. Laertes and Fortinbras are foils to Hamlet." },
    { front: "'Alas, poor Yorick! I knew him, Horatio'", back: "Hamlet in the graveyard (Act 5 Scene 1), holding the skull of the old king's jester. Theme: mortality." },
    { front: "'The rest is silence.'", back: "Hamlet's last words (Act 5 Scene 2)." },
    { front: "Regicide", back: "The killing of a king. Seen as a sin against God under the divine right of kings." },
    { front: "Who becomes king at the end?", back: "Fortinbras, Prince of Norway, who has Hamlet's 'dying voice' (vote)." },
  ],

  mustKnow: [
    "Can you retell the plot act by act, including the Mousetrap, the prayer scene and the closet scene?",
    "Can you explain how each main character is related to Hamlet, and who is a foil to him?",
    "Can you attribute the key quotations to the right speaker and scene (especially Marcellus's 'Something is rotten')?",
    "Can you explain what a soliloquy is and name Hamlet's five big soliloquies in order?",
    "Can you analyse 'To be, or not to be', naming at least three techniques and their effects?",
    "Can you give three reasons for Hamlet's delay and judge which is most convincing?",
    "Can you link context (revenge tragedy, purgatory, divine right of kings) to specific moments?",
    "Can you write a PEEL paragraph that embeds a short quotation and zooms in on one word?",
    "Can you argue both sides of whether Hamlet's madness is real or feigned?",
  ],

  videos: [
    {
      title: "Hamlet plot summary and analysis",
      channel: "Mr Bruff",
      url: "https://www.youtube.com/results?search_query=mr+bruff+hamlet+summary",
    },
    {
      title: "To be or not to be — performance and analysis",
      channel: "Royal Shakespeare Company",
      url: "https://www.youtube.com/results?search_query=rsc+hamlet+to+be+or+not+to+be",
    },
    {
      title: "Hamlet: context, themes and characters",
      channel: "Mr Salles Teaches English",
      url: "https://www.youtube.com/results?search_query=mr+salles+hamlet",
    },
    {
      title: "Hamlet at Shakespeare's Globe",
      channel: "Shakespeare's Globe",
      url: "https://www.youtube.com/results?search_query=shakespeare%27s+globe+hamlet",
    },
  ],

  quiz: {
    mcq: [
      {
        id: "ham-quiz-mcq-1",
        question: "Who says 'Something is rotten in the state of Denmark'?",
        options: ["Hamlet", "Horatio", "Marcellus", "The Ghost"],
        answerIndex: 2,
        hint: "It is spoken in Act 1 Scene 4 by someone watching Hamlet follow the Ghost.",
        explanation:
          "Marcellus, one of the guards, says it as Hamlet follows the Ghost. Hamlet is the most tempting wrong answer because the line sounds like him, but giving it to an ordinary guard shows that even common people sense the corruption at the top.",
        guideRef: "corruption-mortality",
      },
      {
        id: "ham-quiz-mcq-2",
        extract: "the play's the thing\nWherein I'll catch the conscience of the king.",
        question: "Why does Hamlet want the actors to perform a play that copies his father's murder?",
        options: [
          "To test whether Claudius is guilty by watching his reaction",
          "To entertain the court and cheer up his mother",
          "To distract Claudius while he escapes to England",
          "To show Ophelia that he is not really mad",
        ],
        answerIndex: 0,
        hint: "Hamlet is not yet sure he can trust the Ghost. What does he need?",
        explanation:
          "Hamlet fears the Ghost 'May be the devil', so he wants proof: if Claudius reacts guiltily to a murder like his own, the Ghost told the truth. 'To entertain the court' is tempting because it is a play, but Hamlet's aim is to 'catch the conscience' of the king, not to entertain.",
        guideRef: "appearance-reality",
      },
      {
        id: "ham-quiz-mcq-3",
        extract: "Whether 'tis nobler in the mind to suffer\nThe slings and arrows of outrageous fortune,",
        question: "Which technique is used in 'The slings and arrows of outrageous fortune'?",
        options: ["Simile", "Onomatopoeia", "Alliteration", "Metaphor"],
        answerIndex: 3,
        hint: "Is fortune said to be LIKE an archer, or described as actually firing weapons?",
        explanation:
          "Bad luck is described directly as weapons (slings and arrows) being fired at us, without 'like' or 'as', so it is a metaphor. It is not a simile because there is no comparison word. The effect is that life feels like being under constant attack.",
        guideRef: "to-be-or-not-to-be",
      },
      {
        id: "ham-quiz-mcq-4",
        question: "In Act 3 Scene 3, why does Hamlet NOT kill Claudius when he finds him alone?",
        options: [
          "He is afraid of the guards outside the door",
          "Claudius appears to be praying, and Hamlet fears his soul would go to heaven",
          "He has decided the Ghost was lying",
          "He has promised his mother he will not harm the king",
        ],
        answerIndex: 1,
        hint: "Think about religion and what Hamlet wants for Claudius's soul.",
        explanation:
          "Hamlet thinks that killing Claudius at prayer would send him to heaven: 'And so he goes to heaven; / And so am I revenged. That would be scann'd.' He wants Claudius damned. 'The Ghost was lying' is wrong: the Mousetrap has just convinced Hamlet that Claudius is guilty.",
        guideRef: "revenge-and-delay",
      },
    ],
    qa: [
      {
        id: "ham-quiz-qa-1",
        question: "Give three different reasons why Hamlet might delay his revenge. Support at least one with a quotation.",
        marks: 3,
        hint: "Think about the Ghost, religion and Hamlet's habit of thinking.",
        modelAnswer:
          "First, Hamlet needs proof, because he fears the Ghost 'May be the devil' trying to trick him, so he stages the Mousetrap play. Second, he is held back by religion: when he finds Claudius praying, he refuses to kill him because 'he goes to heaven'. Third, he over-thinks; in 'To be, or not to be' he admits that 'conscience does make cowards of us all', because thinking about consequences weakens his determination.",
        markScheme: [
          { point: "Doubt about the Ghost / needs proof", keywords: ["devil", "proof", "evidence", "trust the ghost", "ghost might", "mousetrap", "test", "lying"] },
          { point: "Religious reason (prayer scene / heaven / damnation)", keywords: ["heaven", "praying", "prayer", "religion", "religious", "sin", "damn", "soul"] },
          { point: "Over-thinking / conscience / fear, with or without quotation", keywords: ["conscience", "cowards", "thinks too much", "overthink", "over-think", "pale cast", "thought", "hesitat"] },
        ],
        commonError: "Giving one reason three times in different words, or simply saying 'he is a coward' without explaining why.",
        guideRef: "revenge-and-delay",
      },
      {
        id: "ham-quiz-qa-2",
        extract: "Let me not think on't—Frailty, thy name is woman!—",
        question: "What does this line reveal about Hamlet's feelings towards his mother? Refer to language in your answer.",
        marks: 3,
        hint: "Zoom in on 'Frailty', the way the line addresses an idea, and the dashes.",
        modelAnswer:
          "The line reveals that Hamlet feels disgusted and betrayed by Gertrude's quick remarriage to Claudius. 'Frailty' means moral weakness, so he sees her as unable to stay loyal to his father's memory. By addressing frailty directly and calling it 'woman', he turns his anger at one person into a judgement on all women, which suggests his grief is distorting his thinking. The dashes show him breaking off ('Let me not think on't') because the thought is too painful.",
        markScheme: [
          { point: "Identifies disgust/betrayal at her remarriage", keywords: ["disgust", "betray", "remarr", "married claudius", "angry", "anger", "ashamed", "bitter"] },
          { point: "Explains 'frailty' as weakness", keywords: ["frailty", "weak", "fragile", "disloyal", "unfaithful", "moral weakness"] },
          { point: "Comments on generalising to all women / dashes / broken thought", keywords: ["all women", "generalis", "every woman", "dash", "breaks off", "interrupt", "misogyn", "unfair"] },
        ],
        commonError: "Saying the line is about Ophelia. In this soliloquy Hamlet is talking about Gertrude.",
        guideRef: "soliloquies",
      },
      {
        id: "ham-quiz-qa-3",
        extract: "MARCELLUS: Something is rotten in the state of Denmark.",
        question: "How does this line introduce the theme of corruption? Explain the connotations of 'rotten' and the double meaning of 'state'.",
        marks: 4,
        hint: "What does rotten food look and smell like? What two things can 'state' mean?",
        modelAnswer:
          "Marcellus's line introduces corruption as a disease spreading through Denmark. 'Rotten' connotes decay that starts on the inside and is hidden until it begins to smell, just as Claudius's murder is hidden beneath his smooth public image. 'State' has a double meaning: the country itself and its condition, so the line suggests the whole nation, not just the king, is infected. Because a mere guard says it, Shakespeare shows that even ordinary people sense something is wrong, which builds tension and links to the play's image pattern of poison and disease.",
        markScheme: [
          { point: "Connotations of 'rotten' (decay, smell, hidden inside)", keywords: ["decay", "rot", "smell", "inside", "hidden", "spoil", "going bad", "mould"] },
          { point: "Double meaning of 'state' (nation and condition/government)", keywords: ["country", "nation", "kingdom", "government", "condition", "double meaning", "pun"] },
          { point: "Link to Claudius's crime / corruption at the top", keywords: ["claudius", "murder", "king", "crime", "regicide", "corrupt"] },
          { point: "Wider effect: spoken by a guard / image pattern / tension", keywords: ["guard", "ordinary", "marcellus", "disease", "poison", "imagery", "tension", "foreshadow"] },
        ],
        commonError: "Attributing the line to Hamlet. It is Marcellus, and noticing that adds a mark-worthy point.",
        guideRef: "corruption-mortality",
      },
      {
        id: "ham-quiz-qa-4",
        extract: "My words fly up, my thoughts remain below:\nWords without thoughts never to heaven go.",
        question: "Analyse how Shakespeare uses this couplet to reveal Claudius's state of mind and create dramatic irony.",
        marks: 4,
        hint: "Look at the opposites (up/below), the rhyme, and what Hamlet has just decided.",
        modelAnswer:
          "The couplet reveals that Claudius cannot truly repent. The antithesis between words that 'fly up' and thoughts that 'remain below' shows him split in two: he says the right words, but his mind is still on his crown and queen, so his prayer is hollow. The rhyming couplet ('below'/'go') gives the lines a final, hopeless certainty. This creates dramatic irony, because Hamlet has just refused to kill Claudius, believing his prayers might send him to heaven; the audience now knows Hamlet's reason for delay was mistaken.",
        markScheme: [
          { point: "Claudius cannot genuinely repent / prayer is empty", keywords: ["repent", "empty", "hollow", "not sorry", "cannot pray", "insincere", "guilt", "forgive"] },
          { point: "Antithesis / contrast up and below", keywords: ["antithesis", "contrast", "opposite", "up", "below", "juxtapos"] },
          { point: "Rhyming couplet effect", keywords: ["couplet", "rhyme", "final", "conclusive", "certain"] },
          { point: "Dramatic irony: Hamlet spared him believing he was praying", keywords: ["dramatic irony", "irony", "hamlet spared", "spares", "thought he was praying", "heaven", "audience knows"] },
        ],
        commonError: "Explaining the couplet but forgetting the dramatic irony, which depends on what Hamlet has just done in the same scene.",
        guideRef: "appearance-reality",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "ham-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "ham-mcq-p1-q01",
            question: "Where is Hamlet set?",
            options: ["A palace in Rome", "Elsinore, the royal castle of Denmark", "The university of Wittenberg", "The court of Norway"],
            answerIndex: 1,
            hint: "The castle's real Danish name is Helsingør.",
            explanation:
              "The play takes place at Elsinore in Denmark. Wittenberg is tempting because Hamlet studies there, but the action never goes to the university.",
            guideRef: "plot-overview",
          },
          {
            id: "ham-mcq-p1-q02",
            question: "Who sees the Ghost before Hamlet does?",
            options: ["Gertrude and Claudius", "The guards on the battlements, then Horatio", "Polonius and Ophelia", "Laertes"],
            answerIndex: 1,
            hint: "The play opens at night on the castle walls.",
            explanation:
              "The guards (Barnardo and Marcellus) have seen it and bring Horatio, who then tells Hamlet. Gertrude is a tempting distractor, but she never sees the Ghost: even in the closet scene she cannot see it when Hamlet can.",
            guideRef: "plot-overview",
          },
          {
            id: "ham-mcq-p1-q03",
            question: "How is Claudius related to Hamlet at the start of the play?",
            options: ["He is Hamlet's cousin", "He is Hamlet's father's adviser", "He is Hamlet's older brother", "He is Hamlet's uncle and now his stepfather"],
            answerIndex: 3,
            hint: "He is the dead king's brother, and he has married the queen.",
            explanation:
              "Claudius is old King Hamlet's brother (Hamlet's uncle) and has married Gertrude, so he is also Hamlet's stepfather. 'Adviser' is wrong: that is Polonius's role.",
            guideRef: "characters",
          },
          {
            id: "ham-mcq-p1-q04",
            question: "According to the Ghost, how was old King Hamlet murdered?",
            options: [
              "Poison was poured into his ear while he slept in his orchard",
              "He was stabbed during a battle with Norway",
              "A snake bit him while he slept",
              "He drank from a poisoned cup at a feast",
            ],
            answerIndex: 0,
            hint: "The official story involves a snake. The truth involves Claudius.",
            explanation:
              "The Ghost says Claudius poured poison into his ear. 'A snake bit him' is the false public story ('A serpent stung me'), which is why it is the most tempting wrong answer.",
            guideRef: "plot-overview",
          },
          {
            id: "ham-mcq-p1-q05",
            question: "What does Hamlet mean when he says he may 'put an antic disposition on'?",
            options: [
              "He will wear his father's armour",
              "He will become king",
              "He will pretend to be mad or strange",
              "He will leave Denmark",
            ],
            answerIndex: 2,
            hint: "'Antic' means grotesque or clownish; 'disposition' means behaviour.",
            explanation:
              "Hamlet plans to act strangely as a disguise, so no one suspects what he knows. 'Wear his father's armour' confuses the phrase with the Ghost's appearance.",
            guideRef: "madness-and-women",
          },
          {
            id: "ham-mcq-p1-q06",
            question: "Who is Polonius's daughter?",
            options: ["Ophelia", "Gertrude", "Yorick", "Osric"],
            answerIndex: 0,
            hint: "Hamlet loves her, and she is told to reject him.",
            explanation:
              "Ophelia is Polonius's daughter and Laertes's sister. Gertrude is the queen and Hamlet's mother.",
            guideRef: "characters",
          },
          {
            id: "ham-mcq-p1-q07",
            question: "Why do Rosencrantz and Guildenstern come to Elsinore?",
            options: [
              "To bring news of Fortinbras's army",
              "Claudius and Gertrude have sent for them to find out what is wrong with Hamlet",
              "To act in the play",
              "To arrest Hamlet for murder",
            ],
            answerIndex: 1,
            hint: "Who sent for them, and what do the king and queen want to know?",
            explanation:
              "They are Hamlet's old school friends, summoned to spy on him and discover the cause of his behaviour. 'To act in the play' is wrong: that is the travelling players.",
            guideRef: "characters",
          },
          {
            id: "ham-mcq-p1-q08",
            question: "When Claudius asks what the play is called, what name does Hamlet give it?",
            options: ["The Murder of Old Hamlet", "The Spanish Tragedy", "The Mousetrap", "The Revenger's Tragedy"],
            answerIndex: 2,
            hint: "The name describes a trap for catching something small.",
            explanation:
              "Hamlet calls it 'The Mousetrap', because it is a trap to catch Claudius. The Spanish Tragedy is a real revenge play by Thomas Kyd, not the play within Hamlet.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-mcq-p1-q09",
            question: "Who does Hamlet kill when he stabs through the arras (tapestry) in his mother's room?",
            options: ["Claudius", "Laertes", "Rosencrantz", "Polonius"],
            answerIndex: 3,
            hint: "This character loves to hide and listen.",
            explanation:
              "Polonius is hiding to spy on Hamlet and Gertrude. Hamlet hopes it is Claudius ('Is it the king?'), which is why Claudius is the tempting answer.",
            guideRef: "plot-overview",
          },
          {
            id: "ham-mcq-p1-q10",
            question: "After Polonius's death, where does Claudius send Hamlet?",
            options: ["England", "France", "Norway", "Wittenberg"],
            answerIndex: 0,
            hint: "Rosencrantz and Guildenstern go with him, carrying letters.",
            explanation:
              "Claudius sends Hamlet to England with letters ordering his execution. France is where Laertes has been living, which makes it a tempting distractor.",
            guideRef: "plot-overview",
          },
          {
            id: "ham-mcq-p1-q11",
            question: "How does Ophelia die?",
            options: ["She is poisoned by Claudius", "She drowns in a brook", "She is killed in the duel", "She dies of grief in her room"],
            answerIndex: 1,
            hint: "Gertrude describes a willow tree growing beside water.",
            explanation:
              "Gertrude reports that Ophelia fell into a brook from a willow tree and drowned (4.7). 'Dies of grief' is tempting because her madness comes from grief, but the cause of death is drowning.",
            guideRef: "madness-and-women",
          },
          {
            id: "ham-mcq-p1-q12",
            question: "What plan do Claudius and Laertes make to kill Hamlet?",
            options: [
              "To ambush him on the way back from England",
              "To accuse him of treason in front of the court",
              "A fencing match with a sharpened, poisoned sword, plus a poisoned drink as back-up",
              "To poison his food at Ophelia's funeral",
            ],
            answerIndex: 2,
            hint: "It is disguised as a friendly sporting contest.",
            explanation:
              "Laertes will use an unblunted sword tipped with poison, and Claudius prepares a poisoned cup in case that fails. The other options are not in the play.",
            guideRef: "revenge-and-delay",
          },
          {
            id: "ham-mcq-p1-q13",
            question: "Whose skull does Hamlet hold in the graveyard?",
            options: ["His father's", "Polonius's", "Ophelia's", "Yorick's, the old king's jester"],
            answerIndex: 3,
            hint: "This person used to carry young Hamlet on his back.",
            explanation:
              "The gravedigger identifies the skull as Yorick's, the king's jester. It is not his father's skull: old Hamlet died only months ago.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-mcq-p1-q14",
            question: "Who drinks from the poisoned cup that Claudius prepared for Hamlet?",
            options: ["Gertrude", "Horatio", "Osric", "Laertes"],
            answerIndex: 0,
            hint: "Claudius tells this person not to drink, but they disobey.",
            explanation:
              "Gertrude drinks to Hamlet's success and is poisoned. Horatio is tempting because he tries to drink the leftover poison at the end, but Hamlet stops him.",
            guideRef: "plot-overview",
          },
          {
            id: "ham-mcq-p1-q15",
            question: "Who takes the throne of Denmark at the end of the play?",
            options: ["Horatio", "Fortinbras", "Laertes", "Osric"],
            answerIndex: 1,
            hint: "He is a prince from a neighbouring country.",
            explanation:
              "Fortinbras, Prince of Norway, arrives as everyone lies dead and Hamlet gives him his 'dying voice'. Horatio survives but is asked to tell Hamlet's story, not to rule.",
            guideRef: "plot-overview",
          },
          {
            id: "ham-mcq-p1-q16",
            question: "Which of these is a typical convention of revenge tragedy that Hamlet uses?",
            options: ["A happy ending with a wedding", "Mistaken identity between twins", "A play within a play used as a trap", "A chorus that explains the plot"],
            answerIndex: 2,
            hint: "Think of Kyd's The Spanish Tragedy and the Mousetrap.",
            explanation:
              "Revenge tragedies often include a performance used to trap or kill, and Hamlet's Mousetrap is one. A wedding ending belongs to comedy, and twins to plays like Twelfth Night.",
            guideRef: "context",
          },
          {
            id: "ham-mcq-p1-q17",
            extract: "I am thy father's spirit,\nDoom'd for a certain term to walk the night,\nAnd for the day confined to fast in fires,\nTill the foul crimes done in my days of nature\nAre burnt and purged away.",
            question: "What religious idea is the Ghost describing?",
            options: ["Heaven, a Protestant reward", "Reincarnation", "The Last Judgement", "Purgatory, a Catholic belief"],
            answerIndex: 3,
            hint: "His sins are being 'purged' (cleansed) for a fixed time.",
            explanation:
              "A temporary place where sins are 'burnt and purged away' is purgatory, a Catholic belief that Protestant England officially rejected. It cannot be heaven, because he is suffering in fires.",
            guideRef: "context",
          },
          {
            id: "ham-mcq-p1-q18",
            question: "What is the 'divine right of kings'?",
            options: [
              "The belief that monarchs are chosen by God, so killing a king is a sin against God",
              "A law saying the eldest son must always become king",
              "The king's right to ignore the Church",
              "The right of the people to elect their king",
            ],
            answerIndex: 0,
            hint: "'Divine' means 'from God'.",
            explanation:
              "Under the divine right of kings, a monarch rules by God's will, so regicide is sacrilege as well as murder. It is not about inheritance by the eldest son: in Hamlet the crown actually passes to Claudius, not to the prince.",
            guideRef: "context",
          },
          {
            id: "ham-mcq-p1-q19",
            question: "Which character does the dying Hamlet ask to 'tell my story'?",
            options: ["Fortinbras", "Horatio", "Osric", "Gertrude"],
            answerIndex: 1,
            hint: "His loyal friend from university.",
            explanation:
              "Hamlet stops Horatio drinking the poison and asks him to live and 'tell my story'. Fortinbras receives Hamlet's vote for king, not the request to tell the story.",
            guideRef: "characters",
          },
          {
            id: "ham-mcq-p1-q20",
            question: "Which two characters act as foils to Hamlet because they also lose their fathers?",
            options: ["Rosencrantz and Guildenstern", "Horatio and Marcellus", "Laertes and Fortinbras", "Claudius and Polonius"],
            answerIndex: 2,
            hint: "One is Ophelia's brother; one is a prince of Norway.",
            explanation:
              "Laertes (whose father Polonius is killed by Hamlet) and Fortinbras (whose father was killed by old Hamlet) both act quickly, highlighting Hamlet's delay. Rosencrantz and Guildenstern are contrasting 'false friends', but they have not lost fathers.",
            guideRef: "revenge-and-delay",
          },
        ],
      },
      {
        id: "ham-mcq-p2",
        title: "MCQ Paper 2",
        passage: {
          id: "to-be-paper",
          title: "'To be, or not to be'",
          source: "William Shakespeare, Hamlet (c.1600), Act 3 Scene 1 – Hamlet",
          text:
            "To be, or not to be: that is the question:\nWhether 'tis nobler in the mind to suffer\nThe slings and arrows of outrageous fortune,\nOr to take arms against a sea of troubles,\nAnd by opposing end them? To die: to sleep;\nNo more; and by a sleep to say we end\nThe heart-ache and the thousand natural shocks\nThat flesh is heir to, 'tis a consummation\nDevoutly to be wish'd. To die, to sleep;\nTo sleep: perchance to dream: ay, there's the rub;\nFor in that sleep of death what dreams may come\nWhen we have shuffled off this mortal coil,\nMust give us pause: there's the respect\nThat makes calamity of so long life;\nFor who would bear the whips and scorns of time,\nThe oppressor's wrong, the proud man's contumely,\nThe pangs of despised love, the law's delay,\nThe insolence of office and the spurns\nThat patient merit of the unworthy takes,\nWhen he himself might his quietus make\nWith a bare bodkin? who would fardels bear,\nTo grunt and sweat under a weary life,\nBut that the dread of something after death,\nThe undiscover'd country from whose bourn\nNo traveller returns, puzzles the will\nAnd makes us rather bear those ills we have\nThan fly to others that we know not of?\nThus conscience does make cowards of us all;\nAnd thus the native hue of resolution\nIs sicklied o'er with the pale cast of thought,\nAnd enterprises of great pith and moment\nWith this regard their currents turn awry,\nAnd lose the name of action.",
          note:
            "rub = obstacle; mortal coil = the turmoil of mortal life; contumely = insulting arrogance; quietus = release; bodkin = small dagger; fardels = burdens; bourn = boundary; native hue = natural colour; pith = importance.",
        },
        questions: [
          {
            id: "ham-mcq-p2-q01",
            question: "In which act and scene does this soliloquy appear?",
            options: ["Act 1 Scene 2", "Act 2 Scene 2", "Act 3 Scene 1", "Act 5 Scene 1"],
            answerIndex: 2,
            hint: "It comes at the very centre of the play, just before the Mousetrap.",
            explanation:
              "'To be, or not to be' is in Act 3 Scene 1, just before Hamlet's meeting with Ophelia. Act 5 Scene 1 is tempting because of the famous skull image, but that is the graveyard scene.",
            guideRef: "to-be-or-not-to-be",
          },
          {
            id: "ham-mcq-p2-q02",
            question: "What is a soliloquy?",
            options: [
              "A speech in which a character alone on stage speaks their thoughts aloud",
              "A long speech made to a crowd",
              "A short comment to the audience that other characters do not hear",
              "A conversation between two characters",
            ],
            answerIndex: 0,
            hint: "'Solus' is Latin for 'alone'.",
            explanation:
              "A soliloquy reveals a character's private thoughts when they are alone. The tempting distractor, a short comment others do not hear, is an aside.",
            guideRef: "soliloquies",
          },
          {
            id: "ham-mcq-p2-q03",
            question: "Which technique is used in the opening phrase 'To be, or not to be'?",
            options: ["Simile", "Personification", "Onomatopoeia", "Antithesis"],
            answerIndex: 3,
            hint: "Two opposite ideas are set side by side.",
            explanation:
              "Antithesis places opposites together ('to be' / 'not to be') to frame a choice. It is not personification: nothing non-human is given human qualities here.",
            guideRef: "to-be-or-not-to-be",
          },
          {
            id: "ham-mcq-p2-q04",
            question: "What does the metaphor 'The slings and arrows of outrageous fortune' suggest about life?",
            options: [
              "Life is a game of chance that is fun to play",
              "Bad luck attacks us like weapons fired from a distance, and we cannot stop it",
              "Hamlet is planning to go to war",
              "Fortune is kind to those who are brave",
            ],
            answerIndex: 1,
            hint: "Slings and arrows hit you from far away.",
            explanation:
              "Fortune is pictured as an enemy firing missiles: painful, constant and out of our control. 'Planning to go to war' takes the metaphor literally.",
            guideRef: "to-be-or-not-to-be",
          },
          {
            id: "ham-mcq-p2-q05",
            question: "Why is it effective to talk about taking 'arms against a sea of troubles'?",
            options: [
              "It shows Hamlet loves sailing",
              "It suggests the troubles are small and easy to beat",
              "Fighting the sea with weapons is impossible, suggesting his troubles are endless and overwhelming",
              "It is a reference to Fortinbras's navy",
            ],
            answerIndex: 2,
            hint: "What happens if you attack waves with a sword?",
            explanation:
              "You cannot defeat the sea with weapons, so the mixed image suggests troubles too vast to fight. The option saying the troubles are small is the opposite of what the image implies.",
            guideRef: "to-be-or-not-to-be",
          },
          {
            id: "ham-mcq-p2-q06",
            question: "In 'ay, there's the rub', what does 'rub' mean?",
            options: ["An obstacle or difficulty", "A massage", "A secret", "A joke"],
            answerIndex: 0,
            hint: "In the game of bowls, a 'rub' is something that blocks the ball's path.",
            explanation:
              "A 'rub' is an obstacle. Hamlet realises the problem with death-as-sleep is that it might bring dreams. 'A secret' does not fit the reasoning.",
            guideRef: "to-be-or-not-to-be",
          },
          {
            id: "ham-mcq-p2-q07",
            question: "What does Hamlet compare death to in this speech?",
            options: ["A journey by sea", "A battle", "A play", "Sleep"],
            answerIndex: 3,
            hint: "'To die: to sleep'.",
            explanation:
              "He repeatedly compares death to sleep, which first sounds peaceful, then frightening, because sleep brings dreams. 'A journey' is tempting because of 'traveller', but the repeated comparison is sleep.",
            guideRef: "to-be-or-not-to-be",
          },
          {
            id: "ham-mcq-p2-q08",
            question: "What is 'The undiscover'd country from whose bourn / No traveller returns'?",
            options: ["England", "Death, or the afterlife", "Norway", "Hamlet's own mind"],
            answerIndex: 1,
            hint: "Nobody has ever come back from it to tell us what it is like.",
            explanation:
              "It is a metaphor for death and what lies beyond it. England is tempting because Hamlet is later sent there, but this is a metaphor about the unknown after death.",
            guideRef: "to-be-or-not-to-be",
          },
          {
            id: "ham-mcq-p2-q09",
            question: "According to the speech, why do people put up with their suffering rather than end it?",
            options: [
              "They are too busy to think about it",
              "They hope things will improve",
              "They fear what might come after death",
              "They are forbidden by the king",
            ],
            answerIndex: 2,
            hint: "Look at 'the dread of something after death'.",
            explanation:
              "'The dread of something after death ... makes us rather bear those ills we have'. Hope for improvement is a reasonable idea but it is not the reason Hamlet gives.",
            guideRef: "to-be-or-not-to-be",
          },
          {
            id: "ham-mcq-p2-q10",
            question: "Hamlet never says 'I' in this speech; he uses 'we', 'us' and 'who'. What is the main effect?",
            options: [
              "It makes his thoughts about life and death apply to all people, not just himself",
              "It shows he is speaking to Ophelia",
              "It shows he has forgotten who he is",
              "It is simply the normal way people spoke in 1600",
            ],
            answerIndex: 0,
            hint: "Who is included in 'us all'?",
            explanation:
              "The plural pronouns turn a private crisis into a universal question that includes the audience. 'Speaking to Ophelia' is wrong: he only notices her after the speech ends.",
            guideRef: "to-be-or-not-to-be",
          },
          {
            id: "ham-mcq-p2-q11",
            question: "In 'conscience does make cowards of us all', what does 'conscience' mean here?",
            options: [
              "Only a feeling of guilt about a crime",
              "Being unconscious",
              "Good manners",
              "Inner awareness and reflection, including our moral sense, which makes us hesitate",
            ],
            answerIndex: 3,
            hint: "In Shakespeare's time the word could mean thinking or awareness as well as right and wrong.",
            explanation:
              "Here conscience means our ability to reflect, including moral thoughts, and it stops us acting. 'Only guilt about a crime' is too narrow, because Hamlet is talking about everybody, not criminals.",
            guideRef: "to-be-or-not-to-be",
          },
          {
            id: "ham-mcq-p2-q12",
            question: "'the native hue of resolution / Is sicklied o'er with the pale cast of thought'. What does this image suggest?",
            options: [
              "Hamlet is physically ill",
              "Determination has a healthy natural colour, but thinking makes it pale and sick",
              "Hamlet is going to paint a picture",
              "Resolution is a disease",
            ],
            answerIndex: 1,
            hint: "Think of a healthy, rosy face turning pale.",
            explanation:
              "Resolution (determination) is pictured as a healthy face that turns sickly pale when thought takes over, so thinking weakens action. 'Resolution is a disease' reverses the image: it is the thought that sickens it.",
            guideRef: "to-be-or-not-to-be",
          },
          {
            id: "ham-mcq-p2-q13",
            question: "What is the effect of the rhetorical question 'who would fardels bear, / To grunt and sweat under a weary life'?",
            options: [
              "It asks Horatio for advice",
              "It shows Hamlet does not know the answer to anything",
              "It draws the audience into agreeing that no one would choose to suffer without a reason",
              "It introduces a new character",
            ],
            answerIndex: 2,
            hint: "A rhetorical question expects the listener to supply an obvious answer.",
            explanation:
              "The question invites the audience to think 'nobody would', pulling them into Hamlet's argument; the earthy verbs 'grunt and sweat' make life sound like hard labour. Horatio is not on stage.",
            guideRef: "to-be-or-not-to-be",
          },
          {
            id: "ham-mcq-p2-q14",
            question: "Which item in Hamlet's list of life's injustices refers to the legal system?",
            options: ["the law's delay", "the pangs of despised love", "the proud man's contumely", "the whips and scorns of time"],
            answerIndex: 0,
            hint: "Which phrase mentions courts directly?",
            explanation:
              "'The law's delay' complains that justice is slow, which is ironic in a play about Hamlet's own slow justice. 'The proud man's contumely' is about arrogant insults, not law.",
            guideRef: "to-be-or-not-to-be",
          },
          {
            id: "ham-mcq-p2-q15",
            question: "Who is secretly watching when Hamlet meets Ophelia straight after this speech?",
            options: ["Horatio and Marcellus", "Rosencrantz and Guildenstern", "Gertrude and Laertes", "Claudius and Polonius"],
            answerIndex: 3,
            hint: "Two older men want to test Polonius's theory that Hamlet is mad for love.",
            explanation:
              "Claudius and Polonius hide to spy on the meeting. Rosencrantz and Guildenstern are spies too, but they are not hidden in this scene.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-mcq-p2-q16",
            question: "How does the speech end?",
            options: [
              "Hamlet draws his sword",
              "Hamlet notices Ophelia: 'Soft you now! / The fair Ophelia!'",
              "The Ghost appears",
              "Claudius enters and arrests him",
            ],
            answerIndex: 1,
            hint: "'Soft' means 'quiet' or 'wait'.",
            explanation:
              "He breaks off on seeing Ophelia, whom Polonius has placed in his path. The Ghost does not appear in this scene; it reappears in the closet scene (3.4).",
            guideRef: "to-be-or-not-to-be",
          },
          {
            id: "ham-mcq-p2-q17",
            question: "Which of Hamlet's soliloquies comes FIRST in the play?",
            options: [
              "'O, what a rogue and peasant slave am I!'",
              "'How all occasions do inform against me'",
              "'O, that this too too solid flesh would melt'",
              "'To be, or not to be'",
            ],
            answerIndex: 2,
            hint: "It happens before Hamlet has even met the Ghost.",
            explanation:
              "'O, that this too too solid flesh would melt' is in Act 1 Scene 2. 'To be, or not to be' is the most famous, which makes it tempting, but it does not come until Act 3.",
            guideRef: "soliloquies",
          },
          {
            id: "ham-mcq-p2-q18",
            question: "Which of these speeches is NOT a soliloquy?",
            options: [
              "'What a piece of work is a man!'",
              "'O, that this too too solid flesh would melt'",
              "'Now might I do it pat, now he is praying'",
              "'O, what a rogue and peasant slave am I!'",
            ],
            answerIndex: 0,
            hint: "Check who else is on stage.",
            explanation:
              "'What a piece of work is a man!' is spoken to Rosencrantz and Guildenstern, so it is not a soliloquy. 'Now might I do it pat' is tempting because Claudius is on stage, but Claudius does not hear it; Hamlet speaks it as a soliloquy.",
            guideRef: "soliloquies",
          },
          {
            id: "ham-mcq-p2-q19",
            question: "Which statement best sums up how the speech links to the play's central theme?",
            options: [
              "It shows that Hamlet has forgotten about his father",
              "It proves Hamlet is truly mad",
              "It shows Hamlet's love for Ophelia",
              "It explains how thinking too much about consequences stops people from acting",
            ],
            answerIndex: 3,
            hint: "Look at the final line: 'And lose the name of action.'",
            explanation:
              "The speech ends by arguing that thought makes 'enterprises' lose 'the name of action', directly explaining delay. 'Proves Hamlet is mad' is wrong: the speech is calm, logical argument.",
            guideRef: "revenge-and-delay",
          },
          {
            id: "ham-mcq-p2-q20",
            question: "Which sentence is the BEST piece of analysis of the speech?",
            options: [
              "Hamlet uses lots of techniques to make the speech interesting.",
              "The verb 'puzzles' presents death's mystery as tying the will in knots, so Hamlet's fear of the unknown, rather than cowardice alone, freezes him.",
              "This quote shows that Hamlet is sad and wants to die.",
              "In this speech Hamlet talks about being and not being and then sees Ophelia.",
            ],
            answerIndex: 1,
            hint: "Look for a sentence that zooms in on a word and explains its effect.",
            explanation:
              "The best option names a specific word, explains its connotation and links it to an argument about Hamlet's delay. 'This quote shows that Hamlet is sad' is a simple point with no zooming in, and the other two are vague or narrative.",
            guideRef: "to-be-or-not-to-be",
          },
        ],
      },
      {
        id: "ham-mcq-p3",
        title: "MCQ Paper 3",
        passage: {
          id: "claudius-prayer-paper",
          title: "Claudius tries to pray (extract)",
          source: "William Shakespeare, Hamlet (c.1600), Act 3 Scene 3 – Claudius, alone",
          text:
            "O, my offence is rank, it smells to heaven;\nIt hath the primal eldest curse upon't,\nA brother's murder. Pray can I not,\nThough inclination be as sharp as will:\nMy stronger guilt defeats my strong intent;\n[...]\nBut, O, what form of prayer\nCan serve my turn? 'Forgive me my foul murder'?\nThat cannot be; since I am still possess'd\nOf those effects for which I did the murder,\nMy crown, mine own ambition and my queen.\nMay one be pardon'd and retain the offence?\n[...]\n[Hamlet enters, sees him kneeling, and leaves without striking. Claudius rises.]\nMy words fly up, my thoughts remain below:\nWords without thoughts never to heaven go.",
          note:
            "rank = foul-smelling; the primal eldest curse = God's curse on Cain, who killed his brother Abel; inclination = desire; effects = gains; retain the offence = keep what the crime won.",
        },
        questions: [
          {
            id: "ham-mcq-p3-q01",
            question: "Who speaks this extract, and what has just happened before it?",
            options: [
              "Hamlet, after meeting the Ghost",
              "Polonius, after Hamlet insults him",
              "Claudius, after the Mousetrap play has disturbed him",
              "Laertes, after hearing of his father's death",
            ],
            answerIndex: 2,
            hint: "The speaker confesses to 'A brother's murder'.",
            explanation:
              "Claudius speaks alone in Act 3 Scene 3, shaken by the play that copied his crime. Laertes is tempting because he also talks about murder, but he has no brother to have murdered.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-mcq-p3-q02",
            question: "In 'my offence is rank', what does 'rank' mean?",
            options: ["Foul-smelling, rotten", "High in status", "Arranged in rows", "Brave"],
            answerIndex: 0,
            hint: "The rest of the line says 'it smells to heaven'.",
            explanation:
              "'Rank' means foul-smelling, linking to the play's imagery of rot and decay. 'High in status' confuses the adjective with the noun 'rank' (as in army rank), which does not fit with 'smells'.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-mcq-p3-q03",
            question: "'the primal eldest curse ... A brother's murder' is an allusion to which story?",
            options: ["Romeo and Juliet", "Adam and Eve", "David and Goliath", "Cain and Abel"],
            answerIndex: 3,
            hint: "It is the first murder in the Bible.",
            explanation:
              "In Genesis, Cain kills his brother Abel and is cursed by God, the 'eldest' (oldest) curse. Adam and Eve is tempting because of the serpent and garden imagery elsewhere in Hamlet, but they commit no murder.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-mcq-p3-q04",
            question: "Why does Claudius believe he cannot be forgiven?",
            options: [
              "Because God never forgives kings",
              "Because he still has the crown, ambition and queen he gained by the murder",
              "Because Hamlet has seen him",
              "Because he has forgotten how to pray",
            ],
            answerIndex: 1,
            hint: "Can you be pardoned and still keep what you stole?",
            explanation:
              "He asks 'May one be pardon'd and retain the offence?': true repentance would mean giving up 'My crown, mine own ambition and my queen', which he will not do. 'Forgotten how to pray' misreads 'Pray can I not', which is about guilt, not memory.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-mcq-p3-q05",
            question: "What does the final couplet reveal?",
            options: [
              "Claudius has successfully repented",
              "Claudius is planning to confess to the court",
              "His prayers are empty because his heart is not truly sorry",
              "He believes Hamlet is mad",
            ],
            answerIndex: 2,
            hint: "Where do his words go, and where do his thoughts stay?",
            explanation:
              "His words 'fly up' but his thoughts 'remain below', so the prayer has failed. 'Successfully repented' is the exact opposite.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-mcq-p3-q06",
            question: "Why does this scene create dramatic irony?",
            options: [
              "Hamlet spares Claudius because he thinks his prayers are reaching heaven, but the audience hears that Claudius cannot pray",
              "Claudius knows the Ghost is watching",
              "Polonius is hiding behind the arras",
              "The audience does not know who killed old Hamlet",
            ],
            answerIndex: 0,
            hint: "Dramatic irony = the audience knows something a character does not.",
            explanation:
              "Hamlet's reason for delay (Claudius would go to heaven) is based on a false appearance that the audience can see through. Polonius behind the arras belongs to the next scene, 3.4.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-mcq-p3-q07",
            question: "What reason does Hamlet give for not killing Claudius at this moment?",
            options: [
              "He wants to tell Horatio first",
              "He does not have a weapon",
              "He has forgiven him",
              "He wants to kill him when he is sinning, so that his soul goes to hell",
            ],
            answerIndex: 3,
            hint: "Hamlet wants a revenge that lasts beyond death.",
            explanation:
              "Hamlet decides to wait until Claudius is drunk, angry or otherwise sinning, so 'his soul may be as damn'd and black / As hell'. He has his sword, which he sheathes ('Up, sword'), so 'no weapon' is wrong.",
            guideRef: "revenge-and-delay",
          },
          {
            id: "ham-mcq-p3-q08",
            extract: "Seems, madam! nay it is; I know not 'seems.'",
            question: "Which theme does this line most clearly introduce?",
            options: ["Revenge", "Appearance versus reality", "Women and power", "Mortality"],
            answerIndex: 1,
            hint: "Hamlet is objecting to the word 'seems'.",
            explanation:
              "Hamlet insists his grief is real, not a show, introducing the gap between how things seem and how they are. Mortality is linked (his father's death) but the line's focus is on seeming versus being.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-mcq-p3-q09",
            extract: "O villain, villain, smiling, damned villain!\n[...]\nThat one may smile, and smile, and be a villain",
            question: "Who is Hamlet talking about?",
            options: ["Polonius", "Rosencrantz", "Claudius", "Laertes"],
            answerIndex: 2,
            hint: "This comes straight after the Ghost's revelation in Act 1 Scene 5.",
            explanation:
              "Hamlet has just learned that his smiling uncle is a murderer. Polonius is a schemer but not a 'damned villain' who has killed anyone.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-mcq-p3-q10",
            question: "Who says 'Though this be madness, yet there is method in't'?",
            options: ["Polonius", "Hamlet", "Ophelia", "Gertrude"],
            answerIndex: 0,
            hint: "He says it as an aside after Hamlet mocks him in Act 2 Scene 2.",
            explanation:
              "Polonius notices that Hamlet's 'mad' answers make sharp sense. It is not Hamlet: he does not describe his own act this way.",
            guideRef: "madness-and-women",
          },
          {
            id: "ham-mcq-p3-q11",
            question: "In 'Something is rotten in the state of Denmark', 'state' has a double meaning. What are the two meanings?",
            options: [
              "A US state and a county",
              "A speech and a play",
              "A feeling and a mood",
              "The country/government, and its condition",
            ],
            answerIndex: 3,
            hint: "We talk about 'the state' (the nation) and 'a bad state' (condition).",
            explanation:
              "'State' means both the nation and its condition, so the whole kingdom is diseased. 'A feeling and a mood' is close to 'condition' but misses the political meaning.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-mcq-p3-q12",
            question: "Which image pattern runs through Hamlet and shows the effects of Claudius's crime?",
            options: [
              "Light and sunshine",
              "Disease, rot and poison",
              "Birds and flying",
              "Music and dancing",
            ],
            answerIndex: 1,
            hint: "Think of 'rotten', 'rank' and the poison in the ear.",
            explanation:
              "Images of disease, decay and poison show corruption spreading from the king through the nation. Light imagery is far more central to Romeo and Juliet.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-mcq-p3-q13",
            extract: "'tis an unweeded garden,\nThat grows to seed; things rank and gross in nature\nPossess it merely.",
            question: "What does the 'unweeded garden' metaphor suggest about Denmark?",
            options: [
              "Denmark has beautiful gardens",
              "Hamlet wants to become a gardener",
              "Denmark has been left untended and is being overrun by ugliness and corruption",
              "The weather has been bad",
            ],
            answerIndex: 2,
            hint: "What happens to a garden that nobody looks after?",
            explanation:
              "An unweeded garden is overrun by 'rank and gross' weeds, suggesting that, since the good king's death, corruption has taken over. It also faintly echoes the ruined Garden of Eden. The literal options miss the metaphor.",
            guideRef: "soliloquies",
          },
          {
            id: "ham-mcq-p3-q14",
            extract: "OPHELIA: I shall obey, my lord.",
            question: "What does Ophelia's reply to her father's order to stop seeing Hamlet suggest about her position?",
            options: [
              "She has little power and is expected to obey the men in her family",
              "She has secretly decided to marry Hamlet",
              "She is angry and rebellious",
              "She does not care about Hamlet",
            ],
            answerIndex: 0,
            hint: "Look at the verb 'obey' and the title 'my lord'.",
            explanation:
              "The short, formal reply shows obedience and powerlessness, central to the theme of women and power. 'She does not care about Hamlet' is tempting, but obedience is not the same as not caring.",
            guideRef: "madness-and-women",
          },
          {
            id: "ham-mcq-p3-q15",
            question: "In 'Frailty, thy name is woman!', what does 'frailty' mean?",
            options: ["Old age", "Physical beauty", "Shyness", "Moral weakness"],
            answerIndex: 3,
            hint: "Hamlet is judging Gertrude's loyalty, not her body.",
            explanation:
              "Frailty here means moral weakness: Hamlet thinks Gertrude was too weak to stay faithful to her husband's memory. 'Physical' meanings like old age miss the moral judgement.",
            guideRef: "madness-and-women",
          },
          {
            id: "ham-mcq-p3-q16",
            extract: "KING: Gertrude, do not drink.\nQUEEN: I will, my lord; I pray you, pardon me.",
            question: "What is significant about Gertrude's reply in the final scene?",
            options: [
              "She is following Claudius's orders",
              "It is the first time she openly disobeys Claudius",
              "She knows Hamlet has poisoned the cup",
              "She is speaking in a soliloquy",
            ],
            answerIndex: 1,
            hint: "Compare 'I will' with what Claudius has just told her.",
            explanation:
              "Gertrude defies Claudius for the first time on stage, and it kills her. She is not following orders; and it is Claudius, not Hamlet, who poisoned the cup.",
            guideRef: "madness-and-women",
          },
          {
            id: "ham-mcq-p3-q17",
            question: "What is 'metatheatre'?",
            options: [
              "A very large theatre",
              "A play with no words",
              "Theatre that draws attention to itself as theatre, such as a play within a play",
              "A type of stage lighting",
            ],
            answerIndex: 2,
            hint: "'Meta' means 'about itself'.",
            explanation:
              "Metatheatre reminds the audience that they are watching a performance, as the Mousetrap does. 'A play with no words' describes a mime, not metatheatre.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-mcq-p3-q18",
            question: "What is Polonius doing when he is killed?",
            options: [
              "Hiding behind a tapestry to spy on Hamlet and Gertrude",
              "Fighting Hamlet in a duel",
              "Praying in the chapel",
              "Reading a letter to the king",
            ],
            answerIndex: 0,
            hint: "His death fits his character perfectly.",
            explanation:
              "Polonius dies spying, behind the arras in Gertrude's closet. It is Claudius who prays, which makes 'praying' a tempting mix-up.",
            guideRef: "plot-overview",
          },
          {
            id: "ham-mcq-p3-q19",
            extract: "There's rosemary, that's for remembrance; pray, love, remember: and there is pansies, that's for thoughts.",
            question: "What is happening to Ophelia when she says this?",
            options: [
              "She is preparing for her wedding",
              "She is pretending to be mad to help Hamlet",
              "She is giving advice to Laertes before he leaves for France",
              "She has gone mad with grief after her father's death",
            ],
            answerIndex: 3,
            hint: "This is Act 4 Scene 5, after Polonius has been killed.",
            explanation:
              "Ophelia's broken songs and flower-giving show genuine madness caused by grief. 'Pretending to be mad' describes Hamlet's antic disposition, which is the foil to her real madness.",
            guideRef: "madness-and-women",
          },
          {
            id: "ham-mcq-p3-q20",
            question: "Which statement gives the most convincing, balanced view of Hamlet's madness?",
            options: [
              "Hamlet is completely mad from the moment he sees the Ghost.",
              "Hamlet's madness begins as a deliberate act, but his grief and rash actions suggest it sometimes slips into something real.",
              "Hamlet is never upset; everything he does is calculated.",
              "Hamlet's madness is not important to the play.",
            ],
            answerIndex: 1,
            hint: "The best answers weigh evidence on both sides.",
            explanation:
              "Hamlet announces an 'antic disposition' (so it starts as an act), but his treatment of Ophelia and the killing of Polonius suggest real loss of control. The extreme options ignore half the evidence.",
            guideRef: "madness-and-women",
          },
        ],
      },
      {
        id: "ham-mcq-p4",
        title: "MCQ Paper 4",
        questions: [
          {
            id: "ham-mcq-p4-q01",
            extract: "HAMLET [aside]: A little more than kin, and less than kind.",
            question: "This is Hamlet's first line, said about Claudius. What is the wordplay?",
            options: [
              "Claudius is kind to Hamlet, so they are closer than family",
              "Hamlet does not know who Claudius is",
              "Claudius is now doubly related (uncle and stepfather) but has no natural, loving feeling towards him",
              "Hamlet is asking Claudius for kindness",
            ],
            answerIndex: 2,
            hint: "'Kind' can mean both 'kindly' and 'natural / of the same kind'.",
            explanation:
              "'More than kin' = too closely related now that Claudius is uncle and stepfather; 'less than kind' = unnatural and unloving. The option ‘Claudius is kind to Hamlet, so they are closer than family’ reverses the meaning.",
            guideRef: "characters",
          },
          {
            id: "ham-mcq-p4-q02",
            extract: "CLAUDIUS: With mirth in funeral and with dirge in marriage,\nIn equal scale weighing delight and dole,",
            question: "What is the effect of these balanced opposites in Claudius's first speech?",
            options: [
              "They make his hasty marriage sound calm and reasonable, like a carefully weighed decision",
              "They show that he is going mad",
              "They prove that he feels no grief at all",
              "They show he is a poor speaker",
            ],
            answerIndex: 0,
            hint: "Think of a set of scales: what image of himself is he creating?",
            explanation:
              "Pairing 'mirth' with 'funeral' and 'dirge' with 'marriage' creates a smooth, balanced rhetoric that presents a shocking marriage as sensible. It does not 'prove' he feels no grief: it shows he is a skilled politician managing appearances.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-mcq-p4-q03",
            extract: "The time is out of joint: O cursed spite,\nThat ever I was born to set it right!",
            question: "What does this couplet at the end of Act 1 reveal about Hamlet's attitude to revenge?",
            options: [
              "He is excited and eager to begin",
              "He has decided revenge is wrong",
              "He thinks the Ghost was lying",
              "He accepts the duty but feels it is a curse he never wanted",
            ],
            answerIndex: 3,
            hint: "Focus on 'cursed spite'.",
            explanation:
              "Hamlet sees the world as broken ('out of joint', like a dislocated bone) and resents being the one who must fix it. 'Excited and eager' ignores 'cursed', and he has not yet rejected the duty.",
            guideRef: "revenge-and-delay",
          },
          {
            id: "ham-mcq-p4-q04",
            extract: "What a piece of work is a man! how noble in reason! how infinite in faculty! [...] the beauty of the world! the paragon of animals! And yet, to me, what is this quintessence of dust?",
            question: "How is this speech structured to show Hamlet's state of mind?",
            options: [
              "It moves from sadness to joy",
              "A rising list of exclamations praising humanity collapses into a bleak question about dust",
              "It is a rhyming poem in iambic pentameter",
              "It tells a story in time order",
            ],
            answerIndex: 1,
            hint: "Notice where the turn ('And yet') comes.",
            explanation:
              "The exclamations build humans up as god-like, then 'And yet' brings everything crashing down to 'dust', showing he knows life is wonderful but cannot feel it. It is written in prose, so the iambic pentameter option is wrong.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-mcq-p4-q05",
            extract: "Haste me to know't, that I, with wings as swift\nAs meditation or the thoughts of love,\nMay sweep to my revenge.",
            question: "Why is this promise to the Ghost ironic, looking at the play as a whole?",
            options: [
              "Hamlet never finds out who the murderer is",
              "Hamlet hates his father",
              "He compares his speed to 'meditation' (thinking), yet it is thinking that will slow his revenge down",
              "The Ghost does not want revenge",
            ],
            answerIndex: 2,
            hint: "What exactly does he say will be swift?",
            explanation:
              "He promises revenge as swift as thought, but thought is precisely what delays him for four acts. The other options contradict the plot: he learns the murderer's name in this very scene.",
            guideRef: "revenge-and-delay",
          },
          {
            id: "ham-mcq-p4-q06",
            question: "Which sentence embeds a quotation correctly?",
            options: [
              "Hamlet calls Denmark 'an unweeded garden', suggesting it is overrun with corruption.",
              "Hamlet calls Denmark. 'an unweeded garden' suggesting it is overrun with corruption.",
              "Hamlet calls Denmark an unweeded garden which suggests corruption 'Hamlet'.",
              "'Hamlet calls Denmark an unweeded garden', suggesting it is overrun with corruption.",
            ],
            answerIndex: 0,
            hint: "Only the words Shakespeare wrote go inside the quotation marks, and the sentence must still make sense.",
            explanation:
              "The option ‘Hamlet calls Denmark 'an unweeded garden', suggesting it is…’ puts only Shakespeare's words in quotation marks and flows grammatically. The option ‘'Hamlet calls Denmark an unweeded garden', suggesting it is…’ wrongly puts the student's own words inside quotation marks.",
            guideRef: "soliloquies",
          },
          {
            id: "ham-mcq-p4-q07",
            question: "Which is the WEAKEST piece of analysis?",
            options: [
              "The verb 'sweep' suggests a swift, powerful movement, which makes Hamlet's later delay more striking.",
              "By calling Claudius a 'serpent', the Ghost links him to the devil in Eden.",
              "The adjective 'rank' connects Claudius's guilt to the play's imagery of rot.",
              "This quote is good because it uses lots of words to describe Claudius.",
            ],
            answerIndex: 3,
            hint: "Which one never explains any effect?",
            explanation:
              "'This quote is good because it uses lots of words' names no technique, zooms in on no word and explains no effect. The other three each analyse a specific word.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-mcq-p4-q08",
            question: "Which quotation best supports the point 'Hamlet is disgusted by his mother's remarriage'?",
            options: [
              "'To be, or not to be: that is the question'",
              "'Frailty, thy name is woman!'",
              "'The rest is silence.'",
              "'Alas, poor Yorick!'",
            ],
            answerIndex: 1,
            hint: "Which line is about Gertrude?",
            explanation:
              "'Frailty, thy name is woman!' is Hamlet's outburst about Gertrude's quick remarriage. The others are about life, death and mortality rather than his mother.",
            guideRef: "soliloquies",
          },
          {
            id: "ham-mcq-p4-q09",
            extract: "CLAUDIUS: What would you undertake,\nTo show yourself your father's son in deed\nMore than in words?\nLAERTES: To cut his throat i' the church.",
            question: "How does this exchange make Laertes a foil to Hamlet?",
            options: [
              "Laertes, like Hamlet, wants to think carefully first",
              "Laertes refuses to take revenge",
              "Laertes would kill even in a holy place, while Hamlet spared Claudius at prayer",
              "Laertes is loyal to Hamlet",
            ],
            answerIndex: 2,
            hint: "Remember where Hamlet found Claudius in 3.3.",
            explanation:
              "Laertes would murder in church without hesitation, the exact opposite of Hamlet, who held back because Claudius was praying. Claudius also contrasts 'deed' with 'words', which hits at Hamlet's weakness.",
            guideRef: "revenge-and-delay",
          },
          {
            id: "ham-mcq-p4-q10",
            extract: "How all occasions do inform against me,\nAnd spur my dull revenge!",
            question: "What do the words 'spur' and 'dull' suggest?",
            options: [
              "His revenge is like a slow, blunt horse or blade that needs urging on",
              "His revenge is boring for the audience",
              "He is riding to England on horseback",
              "He has given up revenge entirely",
            ],
            answerIndex: 0,
            hint: "A spur is used on a horse; 'dull' can mean blunt as well as slow.",
            explanation:
              "'Spur' pictures revenge as a reluctant horse that must be kicked forward, and 'dull' suggests something blunt and sluggish. 'Boring for the audience' is a modern meaning that misses the image.",
            guideRef: "revenge-and-delay",
          },
          {
            id: "ham-mcq-p4-q11",
            extract: "I must be cruel only to be kind:",
            question: "Which technique does Hamlet use in this line to his mother?",
            options: ["Simile", "Rhetorical question", "Onomatopoeia", "Antithesis (a paradox of opposites)"],
            answerIndex: 3,
            hint: "Two opposite ideas, 'cruel' and 'kind', are joined.",
            explanation:
              "'Cruel' and 'kind' are opposites placed together, creating a paradox: his harsh words are meant to save her. It is a statement, not a question.",
            guideRef: "madness-and-women",
          },
          {
            id: "ham-mcq-p4-q12",
            extract: "we defy augury: there's a special providence in the fall of a sparrow. [...] the readiness is all:",
            question: "What change in Hamlet does this Act 5 speech show?",
            options: [
              "He has become more frightened and indecisive",
              "He now calmly accepts that fate or God controls events, and he simply needs to be ready",
              "He has decided to leave Denmark",
              "He has stopped believing in God",
            ],
            answerIndex: 1,
            hint: "'Providence' means God's care and plan for the world.",
            explanation:
              "Hamlet now trusts providence: even a sparrow's death is part of God's plan, so 'the readiness is all'. This is the opposite of the anxious over-thinking of earlier acts, and the opposite of losing faith.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-mcq-p4-q13",
            extract: "HORATIO: Now cracks a noble heart. Good night, sweet prince:\nAnd flights of angels sing thee to thy rest!",
            question: "What final impression of Hamlet do Horatio's words create?",
            options: [
              "That Hamlet was a villain who deserved to die",
              "That Hamlet was mad to the end",
              "That Hamlet was noble and good, and his soul will be taken to heaven",
              "That Hamlet will return as a ghost",
            ],
            answerIndex: 2,
            hint: "Look at 'noble', 'sweet' and 'angels'.",
            explanation:
              "Horatio, the most trustworthy character, calls Hamlet 'noble' and 'sweet' and imagines angels carrying him to rest, guiding the audience to see him as a tragic hero. Nothing suggests he will return as a ghost, despite how the play began.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-mcq-p4-q14",
            extract: "The rest is silence.",
            question: "Which reading of 'rest' is best supported by the context of Hamlet's death?",
            options: [
              "'Rest' means both 'what remains' and 'peaceful sleep', so the line is both an ending and a release",
              "'Rest' means a pause in music, because Hamlet loves music",
              "'Rest' means Hamlet is tired from the duel and needs a break",
              "'Rest' refers to the rest of the court, who must stay silent",
            ],
            answerIndex: 0,
            hint: "Horatio replies with 'Good night' and 'thy rest'.",
            explanation:
              "Hamlet means 'everything else' cannot be said, and death also brings the 'rest' Horatio wishes him. The 'tired from the duel' reading takes the word too literally.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-mcq-p4-q15",
            extract: "The spirit that I have seen\nMay be the devil: and the devil hath power\nTo assume a pleasing shape;",
            question: "Which piece of context best explains Hamlet's worry here?",
            options: [
              "Elizabethans believed all ghosts were harmless",
              "Hamlet's university taught that ghosts do not exist",
              "The Globe Theatre could not show ghosts on stage",
              "Many Protestants believed apparitions of the dead could be devils in disguise",
            ],
            answerIndex: 3,
            hint: "Remember the Catholic/Protestant split over purgatory.",
            explanation:
              "Protestant teaching rejected purgatory, so a 'ghost' claiming to come from there might be a demon tempting Hamlet to sin. The option ‘Elizabethans believed all ghosts were harmless’ is the opposite of the fear expressed.",
            guideRef: "context",
          },
          {
            id: "ham-mcq-p4-q16",
            question: "Why might Shakespeare place the comic gravediggers' scene just before the tragic final scene?",
            options: [
              "To give the main actors time to rest, and for no other reason",
              "To provide comic relief that also deepens the theme of mortality",
              "Because the gravediggers are secretly important to the plot",
              "To show that death is never serious",
            ],
            answerIndex: 1,
            hint: "Comedy and death are mixed together in the same scene.",
            explanation:
              "The jokes relieve tension, yet the skulls force Hamlet and the audience to face death as the great leveller before the bloody finale. 'Death is never serious' misses the dark purpose of the humour.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-mcq-p4-q17",
            question: "Which is the best thesis (opening argument) for the essay 'How does Shakespeare present Hamlet's delay?'",
            options: [
              "Hamlet is a play by Shakespeare written in about 1600.",
              "Hamlet delays a lot and this is shown in many ways.",
              "Shakespeare presents Hamlet's delay not as simple cowardice but as the result of doubt, faith and an over-active mind, warning that both too much thought and too little can be fatal.",
              "In this essay I will talk about Hamlet's delay.",
            ],
            answerIndex: 2,
            hint: "A thesis makes an arguable claim and previews the reasons.",
            explanation:
              "The best thesis makes a clear, debatable argument with reasons. 'Hamlet delays a lot' only restates the question, and the others are background or signposting.",
            guideRef: "revenge-and-delay",
          },
          {
            id: "ham-mcq-p4-q18",
            question: "What is the most interesting irony of Fortinbras taking the throne at the end?",
            options: [
              "Denmark falls to the son of the man old King Hamlet killed, so Fortinbras wins without striking a blow",
              "Fortinbras is Hamlet's cousin",
              "Fortinbras was the real murderer",
              "Fortinbras refuses the crown",
            ],
            answerIndex: 0,
            hint: "Remember why Fortinbras's father died.",
            explanation:
              "Old Hamlet killed Fortinbras's father; now the Norwegian prince inherits Denmark because the Danish royal family has destroyed itself. Fortinbras is not related to Hamlet and did not murder anyone.",
            guideRef: "revenge-and-delay",
          },
          {
            id: "ham-mcq-p4-q19",
            extract: "I'll observe his looks;\nI'll tent him to the quick: if he but blench,\nI know my course.",
            question: "What does Hamlet mean by 'tent him to the quick'?",
            options: [
              "Put up a tent for him quickly",
              "Make him laugh",
              "Take him on a journey",
              "Probe him to his most sensitive point, like a wound",
            ],
            answerIndex: 3,
            hint: "A 'tent' was a probe used to examine wounds; 'the quick' is the living, tender flesh.",
            explanation:
              "Hamlet will use the play to probe Claudius's conscience to the raw core; if he 'blench' (flinches), he is guilty. 'Put up a tent' is a modern meaning that makes no sense here.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-mcq-p4-q20",
            extract: "HAMLET: A bloody deed! almost as bad, good mother,\nAs kill a king, and marry with his brother.\nQUEEN: As kill a king!",
            question: "Which interpretation of Gertrude is best supported by this exchange?",
            options: [
              "Gertrude openly confesses to helping plan the murder",
              "Her shocked repetition suggests she may not have known that her first husband was murdered",
              "Gertrude is pretending to be mad",
              "Gertrude is angry that Hamlet has killed the king",
            ],
            answerIndex: 1,
            hint: "Why might she repeat his words as a question or exclamation?",
            explanation:
              "Her stunned echo 'As kill a king!' suggests this is news to her, supporting a reading of her as unaware of the murder. She does not confess, and Hamlet has killed Polonius, not a king.",
            guideRef: "madness-and-women",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "ham-qa-p1",
        title: "Written Paper 1",
        passage: {
          id: "too-solid-flesh-paper",
          title: "'O, that this too too solid flesh would melt' (extract)",
          source: "William Shakespeare, Hamlet (c.1600), Act 1 Scene 2 – Hamlet, alone",
          text:
            "O, that this too too solid flesh would melt,\nThaw and resolve itself into a dew!\nOr that the Everlasting had not fix'd\nHis canon 'gainst self-slaughter! O God! God!\nHow weary, stale, flat and unprofitable\nSeem to me all the uses of this world!\nFie on't! ah fie! 'tis an unweeded garden,\nThat grows to seed; things rank and gross in nature\nPossess it merely. That it should come to this!\nBut two months dead: nay, not so much, not two:\nSo excellent a king; that was, to this,\nHyperion to a satyr; so loving to my mother\nThat he might not beteem the winds of heaven\nVisit her face too roughly. [...]\nLet me not think on't—Frailty, thy name is woman!—\n[...]\nIt is not nor it cannot come to good:\nBut break, my heart; for I must hold my tongue.",
          note:
            "the Everlasting = God; canon = law; self-slaughter = taking one's own life; uses = customs, ways; rank = foul, overgrown; merely = completely; Hyperion = the sun-god; satyr = lustful half-goat creature; beteem = allow.",
        },
        questions: [
          {
            id: "ham-qa-p1-q01",
            question: "What has just happened in the court scene before Hamlet speaks this soliloquy? Give two details.",
            marks: 2,
            hint: "Think about Claudius's announcement and what Hamlet has been told to do.",
            modelAnswer:
              "Claudius has publicly celebrated his marriage to Gertrude, only about two months after old King Hamlet's death. Claudius and Gertrude have also told Hamlet to stop mourning in his black clothes and have refused to let him return to university in Wittenberg.",
            markScheme: [
              { point: "Claudius has married Gertrude / the marriage is celebrated", keywords: ["married", "marriage", "wedding", "remarried", "claudius and gertrude", "husband"] },
              { point: "Hamlet told to stop mourning OR not allowed back to Wittenberg", keywords: ["stop mourning", "mourning", "grief", "black", "wittenberg", "university", "stay in denmark", "not allowed"] },
            ],
            commonError: "Saying Hamlet has already met the Ghost. He has not: this soliloquy comes before the Ghost scene, so his despair comes from grief and his mother's remarriage.",
            guideRef: "soliloquies",
          },
          {
            id: "ham-qa-p1-q02",
            question: "Explain what Hamlet wishes for in the first two lines, and what this shows about his state of mind.",
            marks: 2,
            hint: "What happens to something solid that 'melts' and turns into 'dew'?",
            modelAnswer:
              "Hamlet wishes his 'too too solid flesh would melt' and 'resolve itself into a dew', meaning he wishes he could simply dissolve and disappear. This shows that he is in deep despair and feels his own body is a heavy burden he wants to escape.",
            markScheme: [
              { point: "Explains the wish: to melt / dissolve / disappear / stop existing", keywords: ["melt", "dissolve", "disappear", "vanish", "dew", "not exist", "stop existing", "thaw"] },
              { point: "Links to his despair / depression / burden", keywords: ["despair", "depress", "hopeless", "miserable", "burden", "heavy", "unhappy", "grief"] },
            ],
            commonError: "Taking 'melt' literally as being about the weather. It is a metaphor for wanting to disappear.",
            guideRef: "soliloquies",
          },
          {
            id: "ham-qa-p1-q03",
            extract: "How weary, stale, flat and unprofitable\nSeem to me all the uses of this world!",
            question: "Analyse how Shakespeare uses language in these lines to present Hamlet's view of the world.",
            marks: 3,
            hint: "Look at the list of adjectives: what kinds of things are 'stale' and 'flat'?",
            modelAnswer:
              "Shakespeare uses a list of four negative adjectives, 'weary, stale, flat and unprofitable', to show how completely Hamlet has lost interest in life. 'Stale' and 'flat' suggest food or drink that has gone off, so the world now tastes lifeless to him, while 'unprofitable' suggests nothing is worth the effort. The slow rhythm of the list, with each word heavier than the last, mirrors his exhaustion and depression.",
            markScheme: [
              { point: "Identifies the list of adjectives / listing", keywords: ["list", "adjectives", "four", "tricolon", "listing", "accumulat"] },
              { point: "Explains connotations of stale / flat / unprofitable", keywords: ["stale", "flat", "food", "drink", "gone off", "lifeless", "pointless", "worthless"] },
              { point: "Links to despair / loss of interest / rhythm", keywords: ["depress", "despair", "bored", "no interest", "exhaust", "tired", "slow", "rhythm"] },
            ],
            commonError: "Listing the adjectives without explaining what any single one suggests. Zoom in on at least one word.",
            guideRef: "soliloquies",
          },
          {
            id: "ham-qa-p1-q04",
            extract: "'tis an unweeded garden,\nThat grows to seed; things rank and gross in nature\nPossess it merely.",
            question: "Analyse the 'unweeded garden' metaphor. What does it suggest about Denmark and about Hamlet's feelings?",
            marks: 4,
            hint: "What happens to a garden when nobody pulls up the weeds? What famous garden in the Bible was ruined?",
            modelAnswer:
              "Hamlet uses an extended metaphor to compare the world, and especially Denmark, to 'an unweeded garden'. An untended garden is overrun by weeds, suggesting that since his father's death the kingdom has been neglected and taken over by ugliness. The adjectives 'rank and gross' suggest foul smells and coarse growth, which links to the play's wider imagery of rot and corruption. There may be an echo of the Garden of Eden, a perfect garden spoiled by sin, which foreshadows the Ghost's description of Claudius as a 'serpent'. Overall the image shows Hamlet's disgust and his sense that everything good has been choked.",
            markScheme: [
              { point: "Identifies metaphor / extended metaphor", keywords: ["metaphor", "extended", "compares", "comparison", "imagery", "image"] },
              { point: "Explains neglect / overrun / out of control", keywords: ["neglect", "overrun", "out of control", "untended", "taken over", "weeds", "wild", "choked"] },
              { point: "Analyses 'rank' / 'gross' and link to corruption/decay", keywords: ["rank", "gross", "smell", "foul", "rot", "corrupt", "decay", "disgust"] },
              { point: "Wider link: Eden / serpent / Claudius / Hamlet's disgust", keywords: ["eden", "serpent", "claudius", "sin", "paradise", "foreshadow", "remarriage", "bible"] },
            ],
            commonError: "Saying 'this shows Denmark has a lot of weeds'. The garden is a metaphor for moral and political decay.",
            guideRef: "soliloquies",
          },
          {
            id: "ham-qa-p1-q05",
            extract: "So excellent a king; that was, to this,\nHyperion to a satyr;",
            question: "Explain the comparison Hamlet makes between his father and Claudius. Why is it effective?",
            marks: 3,
            hint: "Hyperion is a radiant sun-god; a satyr is a lustful creature, half man, half goat.",
            modelAnswer:
              "Hamlet compares his father to Hyperion, the Greek sun-god, and Claudius to a satyr, a lustful half-goat creature. The contrast places his father at the top of creation, glorious and god-like, and Claudius at the bottom, animal-like and driven by appetite. It is effective because the extreme gap shows how disgusted Hamlet is that his mother could choose Claudius, and it presents Claudius as unnatural before we even know he is a murderer.",
            markScheme: [
              { point: "Father = Hyperion, god-like / glorious / sun", keywords: ["hyperion", "god", "sun", "glorious", "divine", "noble", "radiant"] },
              { point: "Claudius = satyr, beast-like / lustful", keywords: ["satyr", "beast", "animal", "goat", "lust", "lower", "monster"] },
              { point: "Effect: extreme contrast shows Hamlet's disgust / Claudius unnatural", keywords: ["contrast", "extreme", "disgust", "opposite", "juxtapos", "unnatural", "mother could"] },
            ],
            commonError: "Explaining only one half of the comparison. The power comes from the contrast.",
            guideRef: "soliloquies",
          },
          {
            id: "ham-qa-p1-q06",
            extract: "But two months dead: nay, not so much, not two:",
            question: "How does the punctuation and sentence structure of the soliloquy reflect Hamlet's state of mind? Use this line and one other example.",
            marks: 3,
            hint: "Notice how he corrects himself, and look for dashes and exclamation marks.",
            modelAnswer:
              "Hamlet's broken syntax shows a mind in turmoil. In 'But two months dead: nay, not so much, not two', he corrects himself mid-line, as if the shortness of time keeps hitting him afresh and makes his mother's remarriage even more shocking. Elsewhere dashes interrupt his thoughts, as in 'Let me not think on't—Frailty, thy name is woman!—', where he breaks off because the thought is too painful. Exclamations such as 'O God! God!' and 'Fie on't! ah fie!' show emotion overflowing his control.",
            markScheme: [
              { point: "Self-correction in 'not two' shows obsession with the short time", keywords: ["correct", "not two", "two months", "short time", "so soon", "quick", "repeat"] },
              { point: "Dashes / interruptions show broken thoughts", keywords: ["dash", "interrupt", "breaks off", "broken", "fragment", "unfinished", "caesura"] },
              { point: "Exclamations / emotion out of control / turmoil", keywords: ["exclamation", "o god", "fie", "emotion", "turmoil", "agitat", "upset", "overwhelm"] },
            ],
            commonError: "Naming punctuation marks without explaining what they reveal about Hamlet's feelings.",
            guideRef: "soliloquies",
          },
          {
            id: "ham-qa-p1-q07",
            extract: "But break, my heart; for I must hold my tongue.",
            question: "What is a soliloquy, and why is this final line especially important for understanding why Shakespeare gives Hamlet so many?",
            marks: 2,
            hint: "Who can Hamlet speak to honestly in this court?",
            modelAnswer:
              "A soliloquy is a speech a character makes alone on stage, revealing private thoughts to the audience. This line shows that Hamlet must 'hold my tongue' in public because he cannot criticise the king and queen, so the soliloquy is the only place he can be honest; the audience becomes his only confidant.",
            markScheme: [
              { point: "Correct definition of soliloquy", keywords: ["alone", "private thoughts", "by himself", "on his own", "inner thoughts", "speaks thoughts"] },
              { point: "Explains he must hide feelings in public, so soliloquy is his only outlet", keywords: ["hold my tongue", "cannot speak", "hide", "secret", "only place", "honest", "confidant", "public"] },
            ],
            commonError: "Confusing a soliloquy with an aside or a monologue.",
            guideRef: "soliloquies",
          },
          {
            id: "ham-qa-p1-q08",
            extract: "Frailty, thy name is woman!",
            question: "'Hamlet's judgement of his mother is unfair.' To what extent do you agree? Use evidence from this extract and the wider play.",
            marks: 4,
            hint: "Consider what Gertrude has actually done, what Hamlet assumes, and what she does later.",
            modelAnswer:
              "To some extent Hamlet's anger is understandable: Gertrude has remarried within 'two months', and he contrasts his father's devotion ('so loving to my mother') with her haste, so her loyalty does seem weak. However, his judgement is unfair in that he turns one woman's choice into a verdict on all women; 'Frailty, thy name is woman!' reveals his grief and bitterness more than the truth. In the wider play, Gertrude never plots and seems genuinely shocked when Hamlet mentions killing a king ('As kill a king!'), and in the final scene she defies Claudius to drink to her son. Overall, I largely agree it is unfair, because Hamlet judges her before he knows the facts.",
            markScheme: [
              { point: "Acknowledges why Hamlet is angry (quick remarriage)", keywords: ["two months", "remarr", "quick", "soon", "hasty", "married claudius"] },
              { point: "Argues it is unfair / generalises to all women", keywords: ["all women", "generalis", "unfair", "every woman", "sexist", "misogyn", "stereotype"] },
              { point: "Uses wider-play evidence about Gertrude", keywords: ["as kill a king", "drinks", "poison", "defies", "never plots", "closet", "innocent", "pardon me"] },
              { point: "Reaches a clear, supported judgement", keywords: ["overall", "i agree", "i disagree", "largely", "to some extent", "therefore", "conclude"] },
            ],
            commonError: "Only agreeing or only disagreeing. 'To what extent' questions reward weighing both sides before a clear conclusion.",
            guideRef: "madness-and-women",
          },
          {
            id: "ham-qa-p1-q09",
            extract: "Or that the Everlasting had not fix'd\nHis canon 'gainst self-slaughter!",
            question: "What do these lines show about the religious beliefs of Shakespeare's time and about the depth of Hamlet's despair?",
            marks: 3,
            hint: "'The Everlasting' is God and a 'canon' is a law.",
            modelAnswer:
              "These lines show that people in Shakespeare's time believed God's law forbade a person to end their own life, and that doing so was a serious sin. Hamlet wishes God had not made that law, which shows how deep his despair is: he feels life is not worth living. However, his faith also holds him back, which foreshadows how religious fear later affects his decisions, for example in 'To be, or not to be' and when he spares Claudius at prayer.",
            markScheme: [
              { point: "Explains God's law forbade it / it was a sin", keywords: ["god", "law", "sin", "forbid", "forbidden", "religio", "canon", "christian"] },
              { point: "Shows depth of Hamlet's despair", keywords: ["despair", "depress", "hopeless", "not worth", "miserable", "suffering", "wants to die"] },
              { point: "Religion holds him back / foreshadows later fear or delay", keywords: ["holds him back", "stops him", "foreshadow", "to be", "afterlife", "prayer", "fear", "delay"] },
            ],
            commonError: "Ignoring the context: the key point is that Hamlet's religion restrains him even in his darkest moment.",
            guideRef: "context",
          },
          {
            id: "ham-qa-p1-q10",
            question: "Write a stage direction (2–3 sentences) for the moment just before Hamlet begins this soliloquy, showing his mood to the audience without any words.",
            marks: 2,
            hint: "Stage directions are written in the present tense and describe what we SEE: movement, costume, lighting, objects.",
            modelAnswer:
              "The court sweeps out in a blaze of laughter and bright silks. Hamlet, alone in his black mourning clothes, stands perfectly still until the doors slam, then slowly sinks onto the empty throne steps and stares at his own hands.",
            markScheme: [
              { point: "Written as a stage direction in the present tense, describing visible action", keywords: ["stands", "sinks", "sits", "walks", "stares", "slowly", "exit", "alone"] },
              { point: "Uses a visual detail (costume / lighting / contrast) that conveys his mood", keywords: ["black", "mourning", "dim", "light", "shadow", "contrast", "court", "throne"] },
            ],
            commonError: "Writing dialogue or describing thoughts ('Hamlet feels sad'). A stage direction must show the mood through what the audience can see.",
            guideRef: "soliloquies",
          },
          {
            id: "ham-qa-p1-q11",
            question: "Write a PEEL paragraph: How does Shakespeare present Hamlet's grief in this extract?",
            marks: 5,
            hint: "Point → embedded Evidence → Explain technique and zoom in on a word → Link to theme/context. Add a second short quotation for top marks.",
            modelAnswer:
              "Shakespeare presents Hamlet's grief as so overwhelming that it poisons his view of the whole world. Hamlet wishes his 'too too solid flesh would melt', and the repetition of 'too' makes his body feel unbearably heavy, as if grief has weighed him down physically. He then describes the world as 'an unweeded garden', a metaphor suggesting that, since his father's death, everything good has been choked by 'rank and gross' growth; the adjective 'rank' connotes a foul smell of decay. This shows that his grief is mixed with disgust, especially at his mother's remarriage only 'two months' later. Shakespeare therefore establishes Hamlet as a deeply wounded hero from the very start, and introduces the image pattern of corruption that will run through the whole play.",
            markScheme: [
              { point: "Clear point answering the question", keywords: ["presents", "grief", "overwhelm", "despair", "shows that", "portrays", "depicts"] },
              { point: "Embedded, relevant evidence", keywords: ["too too solid", "melt", "unweeded garden", "weary", "stale", "rank", "hyperion", "frailty"] },
              { point: "Names a technique", keywords: ["repetition", "metaphor", "list", "adjective", "imagery", "exclamation", "antithesis"] },
              { point: "Zooms in on a word's connotations and explains effect", keywords: ["connot", "suggests", "implies", "heavy", "smell", "decay", "evokes", "effect"] },
              { point: "Links to theme / wider play / context", keywords: ["corruption", "theme", "remarriage", "mother", "whole play", "foreshadow", "denmark", "claudius"] },
            ],
            commonError: "Writing a description of what Hamlet says ('He says he wants to melt...') without explaining HOW the language creates the effect.",
            guideRef: "soliloquies",
          },
          {
            id: "ham-qa-p1-q12",
            question: "How does this first soliloquy prepare the audience for the rest of the play? Explore at least three ways.",
            marks: 6,
            hint: "Think about themes (corruption, women, appearance vs reality, delay), character and the soliloquy as a device.",
            modelAnswer:
              "First, it introduces Hamlet as a thinker whose feelings are trapped inside him: he ends 'I must hold my tongue', so we expect a hero who struggles to turn emotion into action, preparing for the theme of delay. Second, the 'unweeded garden' introduces the image pattern of corruption and decay that Marcellus develops with 'Something is rotten in the state of Denmark', so the audience already senses something poisonous at the heart of the court. Third, 'Frailty, thy name is woman!' sets up Hamlet's troubled attitude to women, which later poisons his treatment of both Gertrude and Ophelia. Fourth, the contrast between his father as 'Hyperion' and Claudius as a 'satyr' makes us suspicious of Claudius before the Ghost reveals the murder, creating tension. Finally, the line 'It is not nor it cannot come to good' works as foreshadowing: in a revenge tragedy, the audience is warned that this will end in disaster.",
            markScheme: [
              { point: "Theme of delay / inaction / trapped thoughts", keywords: ["delay", "hold my tongue", "inaction", "hesitat", "thinker", "cannot act", "trapped"] },
              { point: "Corruption / decay image pattern", keywords: ["corrupt", "rotten", "decay", "unweeded", "disease", "rank", "poison"] },
              { point: "Attitude to women (Gertrude / Ophelia)", keywords: ["frailty", "women", "gertrude", "ophelia", "mother", "misogyn"] },
              { point: "Suspicion of Claudius / appearance vs reality", keywords: ["satyr", "claudius", "suspicio", "appearance", "villain", "seems"] },
              { point: "Foreshadowing / tragic ending", keywords: ["foreshadow", "cannot come to good", "tragic", "tragedy", "disaster", "ending"] },
              { point: "Supports points with embedded quotations and explanation", keywords: ["suggests", "shows", "implies", "connot", "this means", "highlights"] },
            ],
            commonError: "Discussing only the extract and not connecting it to later events. 'The rest of the play' requires links forward.",
            guideRef: "soliloquies",
          },
        ],
      },
      {
        id: "ham-qa-p2",
        title: "Written Paper 2",
        passage: {
          id: "ghost-paper",
          title: "The Ghost reveals the murder (extract)",
          source: "William Shakespeare, Hamlet (c.1600), Act 1 Scene 5 – the Ghost and Hamlet",
          text:
            "GHOST: I am thy father's spirit,\nDoom'd for a certain term to walk the night,\nAnd for the day confined to fast in fires,\nTill the foul crimes done in my days of nature\nAre burnt and purged away. [...]\nIf thou didst ever thy dear father love—\nHAMLET: O God!\nGHOST: Revenge his foul and most unnatural murder.\nHAMLET: Murder!\nGHOST: Murder most foul, as in the best it is;\nBut this most foul, strange and unnatural.\nHAMLET: Haste me to know't, that I, with wings as swift\nAs meditation or the thoughts of love,\nMay sweep to my revenge.\nGHOST: I find thee apt; [...]\nNow, Hamlet, hear:\n'Tis given out that, sleeping in my orchard,\nA serpent stung me; so the whole ear of Denmark\nIs by a forged process of my death\nRankly abused: but know, thou noble youth,\nThe serpent that did sting thy father's life\nNow wears his crown.\nHAMLET: O my prophetic soul! My uncle!",
          note:
            "Doom'd for a certain term = sentenced for a fixed time; purged = cleansed; apt = ready; 'tis given out = it is publicly said; forged process = false account; rankly abused = foully deceived; prophetic soul = Hamlet had already suspected.",
        },
        questions: [
          {
            id: "ham-qa-p2-q01",
            question: "What does the Ghost tell Hamlet about where he is now and why?",
            marks: 2,
            hint: "Look at the first five lines.",
            modelAnswer:
              "The Ghost says he must walk the earth at night and burn in fires during the day for a fixed time, until the sins he committed while alive are 'burnt and purged away'. He is describing purgatory, where souls are cleansed of their sins before they can go to heaven.",
            markScheme: [
              { point: "Walks at night / suffers in fires for a set time", keywords: ["walk the night", "night", "fires", "fire", "burn", "suffer", "certain term"] },
              { point: "Until sins are purged / identifies purgatory", keywords: ["purg", "sins", "crimes", "cleansed", "purgatory", "days of nature"] },
            ],
            commonError: "Saying the Ghost is in hell. Hell is permanent; the Ghost's suffering is for 'a certain term', which is purgatory.",
            guideRef: "context",
          },
          {
            id: "ham-qa-p2-q02",
            question: "Why might an Elizabethan audience have been suspicious of this Ghost? Explain using context.",
            marks: 3,
            hint: "Think about the Protestant view of purgatory and what Hamlet says later about devils.",
            modelAnswer:
              "The Ghost describes purgatory, which was a Catholic belief; England was officially Protestant by 1600, and the Protestant Church taught that purgatory did not exist. So many in the audience might think a ghost claiming to come from purgatory was really a devil in disguise, sent to tempt Hamlet into the sin of murder. Hamlet shares this fear in Act 2 when he says 'The spirit that I have seen / May be the devil', which is why he tests it with the Mousetrap.",
            markScheme: [
              { point: "Purgatory is a Catholic belief", keywords: ["catholic", "purgatory", "catholicism", "pope", "catholics"] },
              { point: "Protestants rejected it / thought ghosts could be devils", keywords: ["protestant", "devil", "demon", "evil spirit", "disguise", "trick", "tempt"] },
              { point: "Links to Hamlet's own doubt / the Mousetrap test", keywords: ["may be the devil", "mousetrap", "test", "proof", "doubt", "play"] },
            ],
            commonError: "Writing only 'Elizabethans believed in ghosts'. That alone does not explain why THIS ghost is suspicious.",
            guideRef: "context",
          },
          {
            id: "ham-qa-p2-q03",
            extract: "Murder most foul, as in the best it is;\nBut this most foul, strange and unnatural.",
            question: "Analyse how the Ghost's language emphasises the horror of the murder.",
            marks: 3,
            hint: "Look at repeated words and the word 'unnatural'.",
            modelAnswer:
              "The Ghost repeats 'foul' and the superlative 'most foul', insisting that, although all murder is evil, this one is worse than any other. The list 'foul, strange and unnatural' builds to the key word 'unnatural': the murder is against nature because a brother killed a brother and a subject killed his king, breaking the natural order of family and the divine right of kings. The repetition also hammers the idea into Hamlet's mind, increasing the pressure to take revenge.",
            markScheme: [
              { point: "Identifies repetition of 'foul' / superlative 'most'", keywords: ["repetition", "repeat", "foul", "most foul", "superlative", "emphasis"] },
              { point: "Explains 'unnatural' (brother killed brother / regicide / against nature)", keywords: ["unnatural", "brother", "regicide", "against nature", "natural order", "king", "divine right"] },
              { point: "Effect: worse than ordinary murder / pressure on Hamlet", keywords: ["worse", "horror", "pressure", "urgent", "shock", "list", "builds"] },
            ],
            commonError: "Saying 'unnatural' just means 'strange'. Explain WHY it is against nature: fratricide and regicide.",
            guideRef: "context",
          },
          {
            id: "ham-qa-p2-q04",
            extract: "Haste me to know't, that I, with wings as swift\nAs meditation or the thoughts of love,\nMay sweep to my revenge.",
            question: "Analyse this promise. Why is it ironic in the light of the rest of the play?",
            marks: 3,
            hint: "Zoom in on 'sweep' and 'wings', then think about 'meditation'.",
            modelAnswer:
              "The image of 'wings' and the verb 'sweep' suggest speed and power, like a bird of prey diving onto its victim, so Hamlet seems eager and decisive. However, it is ironic because he compares his speed to 'meditation', which means deep thought, and it is precisely his thinking that delays his revenge until the final scene. The audience who knows the play hears this confident promise as tragic foreshadowing.",
            markScheme: [
              { point: "Analyses 'sweep' / 'wings' as speed, power, eagerness", keywords: ["sweep", "wings", "swift", "speed", "fast", "bird", "eager", "power"] },
              { point: "Identifies irony of 'meditation' (thought)", keywords: ["meditation", "thought", "thinking", "ironic", "irony"] },
              { point: "Links to delay later in the play", keywords: ["delay", "takes until", "act 5", "hesitat", "four acts", "slow", "foreshadow"] },
            ],
            commonError: "Explaining the speed image but missing the irony of the word 'meditation'.",
            guideRef: "revenge-and-delay",
          },
          {
            id: "ham-qa-p2-q05",
            extract: "The serpent that did sting thy father's life\nNow wears his crown.",
            question: "Analyse the serpent metaphor. What does it suggest about Claudius?",
            marks: 4,
            hint: "Where else does a serpent appear in a famous garden? And why is 'Now wears' in the present tense?",
            modelAnswer:
              "The Ghost turns the false public story, that a serpent stung him, into a metaphor for Claudius. A serpent connotes sneakiness, poison and danger hidden in the grass, which fits a murderer who killed a sleeping man with poison. It also alludes to the serpent in the Garden of Eden, which is the devil, so Claudius is presented as the source of evil that ruins Denmark's 'garden', echoing Hamlet's 'unweeded garden'. The present tense 'Now wears his crown' makes the injustice urgent: the murderer is still enjoying the reward of his crime, which pushes Hamlet to act.",
            markScheme: [
              { point: "Identifies metaphor turning the false story into truth about Claudius", keywords: ["metaphor", "claudius", "false story", "snake", "public story", "turns"] },
              { point: "Connotations: sly, hidden, poisonous, deceptive", keywords: ["sly", "sneak", "hidden", "poison", "venom", "decept", "danger", "treacher"] },
              { point: "Biblical / Eden / devil link", keywords: ["eden", "devil", "satan", "bible", "garden", "adam", "eve", "sin"] },
              { point: "Present tense 'now wears' — urgency / injustice", keywords: ["present tense", "now", "wears", "crown", "still", "urgent", "injustice", "reward"] },
            ],
            commonError: "Thinking a real snake killed the king. The snake is the cover story; the serpent is Claudius.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-qa-p2-q06",
            extract: "O my prophetic soul! My uncle!",
            question: "What does Hamlet's reaction reveal?",
            marks: 2,
            hint: "'Prophetic' means able to foresee the future.",
            modelAnswer:
              "It reveals that Hamlet had already suspected Claudius of something wicked; his soul was 'prophetic', so the Ghost is confirming what he felt. The short, broken exclamations also show his shock and horror that the murderer is his own uncle, a member of his family.",
            markScheme: [
              { point: "He had already suspected Claudius", keywords: ["suspect", "already", "knew", "prophetic", "foresaw", "felt", "guessed"] },
              { point: "Shock / horror that it is family, shown by exclamations", keywords: ["shock", "horror", "exclamation", "uncle", "family", "short", "disbelief"] },
            ],
            commonError: "Saying Hamlet is surprised it is Claudius. 'Prophetic' means the opposite: he half-expected it.",
            guideRef: "characters",
          },
          {
            id: "ham-qa-p2-q07",
            extract: "so the whole ear of Denmark\nIs by a forged process of my death\nRankly abused:",
            question: "How does this image connect to the way the king was murdered and to the theme of corruption?",
            marks: 3,
            hint: "How was the poison given? What is now being 'poured into' Denmark's ear?",
            modelAnswer:
              "Old Hamlet was murdered by poison poured into his ear. Now the Ghost says 'the whole ear of Denmark' has been 'Rankly abused' by a 'forged process', a lie. Shakespeare links the two: just as poison entered the king's ear, a poisonous lie has entered the ears of the whole nation. 'Rankly' suggests a foul, rotting smell, so the image shows corruption spreading from one crime to infect the entire kingdom.",
            markScheme: [
              { point: "Links to poison poured in the king's ear", keywords: ["poison", "ear", "poured", "murdered", "orchard"] },
              { point: "Lies as poison entering the nation's ears", keywords: ["lie", "forged", "false", "deceiv", "whole nation", "everyone", "country", "people"] },
              { point: "Corruption spreading / 'rankly' connotations", keywords: ["corrupt", "rank", "spread", "infect", "rot", "foul", "disease"] },
            ],
            commonError: "Explaining the literal meaning without spotting the link between the poison and the lie.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-qa-p2-q08",
            question: "How does Shakespeare make the Ghost a powerful and frightening presence in this extract? Give at least two methods.",
            marks: 4,
            hint: "Think about imperatives (commands), vivid images of suffering, and what the Ghost demands.",
            modelAnswer:
              "First, the Ghost speaks with commanding authority, using imperatives such as 'Revenge his foul and most unnatural murder' and 'Now, Hamlet, hear', so he dominates his son. Second, he describes his suffering in vivid, frightening images, being 'confined to fast in fires' until his crimes are 'burnt and purged away', which would horrify an audience who believed in the afterlife. Third, he uses emotional pressure: 'If thou didst ever thy dear father love' makes revenge a test of Hamlet's love. On stage, the Ghost appears in armour at night, which adds to the sense of threat.",
            markScheme: [
              { point: "Imperatives / commands / authority", keywords: ["imperative", "command", "order", "revenge his", "hear", "authority", "demand"] },
              { point: "Vivid images of suffering / fire / purgatory", keywords: ["fire", "burnt", "purged", "suffer", "torment", "doom", "night"] },
              { point: "Emotional pressure on Hamlet's love", keywords: ["love", "if thou didst", "emotional", "guilt", "manipulat", "pressure", "test"] },
              { point: "Explains effect on Hamlet or audience", keywords: ["frighten", "audience", "fear", "horrif", "dominat", "power", "threat", "tension"] },
            ],
            commonError: "Describing what the Ghost says without naming any method or explaining its effect.",
            guideRef: "context",
          },
          {
            id: "ham-qa-p2-q09",
            question: "Compare Hamlet's response to his father's murder with Laertes's response to his father's death later in the play.",
            marks: 3,
            hint: "Laertes storms the palace in Act 4 and agrees to Claudius's plot.",
            modelAnswer:
              "Hamlet promises to 'sweep to my revenge' but then delays for most of the play, testing the Ghost and thinking deeply. Laertes, by contrast, acts immediately: he storms the palace shouting 'To hell, allegiance!' and says he would cut Hamlet's throat 'i' the church'. However, Laertes's speed makes him easy for Claudius to manipulate into a dishonourable plot with a poisoned sword, so the contrast suggests that rash action can be as dangerous as delay.",
            markScheme: [
              { point: "Hamlet delays / thinks / tests", keywords: ["delay", "thinks", "hesitat", "test", "mousetrap", "slow", "doubt"] },
              { point: "Laertes acts immediately / rashly", keywords: ["immediately", "rash", "storms", "to hell, allegiance", "cut his throat", "church", "quick", "rage"] },
              { point: "Evaluates: Laertes manipulated / foil / both flawed", keywords: ["manipulat", "foil", "claudius uses", "poisoned sword", "puppet", "dangerous", "contrast"] },
            ],
            commonError: "Describing each character separately without explicitly comparing (use 'whereas', 'by contrast', 'however').",
            guideRef: "revenge-and-delay",
          },
          {
            id: "ham-qa-p2-q10",
            question: "'Hamlet was shocked.' Rewrite this as 1–2 sentences that SHOW Hamlet's shock at the Ghost's news, without using the word 'shocked'.",
            marks: 2,
            hint: "Use body language, a physical reaction or a vivid verb.",
            modelAnswer:
              "Hamlet's hand slid from his sword hilt. He stared at the pale shape in the mist, his mouth opening and closing on a word that would not come, until at last it broke from him in a whisper: 'My uncle.'",
            markScheme: [
              { point: "Shows shock through physical reaction / body language", keywords: ["hand", "stared", "froze", "mouth", "trembl", "staggered", "knees", "pale"] },
              { point: "Avoids telling / uses vivid verbs or imagery", keywords: ["slid", "whisper", "broke", "mist", "would not come", "gasp", "silence", "stumbled"] },
            ],
            commonError: "Using a synonym such as 'He was stunned', which still tells rather than shows.",
            guideRef: "plot-overview",
          },
          {
            id: "ham-qa-p2-q11",
            question: "Write a PEEL paragraph: How is revenge presented in this extract?",
            marks: 5,
            hint: "Choose one or two short quotations. Zoom in on a word. Link to the theme of delay or the revenge tragedy genre.",
            modelAnswer:
              "In this extract revenge is presented as a sacred duty that is forced on Hamlet by his father. The Ghost commands, 'Revenge his foul and most unnatural murder', and the imperative verb 'Revenge' placed at the start of the line makes it sound like an order that cannot be refused. He frames it as a test of love: 'If thou didst ever thy dear father love', so failing to act would mean failing his father. Hamlet's eager reply that he will 'sweep to my revenge' suggests at first that he accepts this duty wholeheartedly. This sets up the conventions of revenge tragedy, with a ghost demanding vengeance, but also the play's central tension, because the audience will watch the gap between this swift promise and Hamlet's long delay.",
            markScheme: [
              { point: "Clear point about how revenge is presented", keywords: ["duty", "presented", "command", "forced", "obligation", "sacred", "shows that"] },
              { point: "Embedded evidence from the extract", keywords: ["revenge his foul", "sweep to my revenge", "if thou didst ever", "murder most foul", "unnatural", "serpent"] },
              { point: "Technique named (imperative, metaphor, repetition)", keywords: ["imperative", "command", "metaphor", "repetition", "verb", "emotive"] },
              { point: "Explains effect / zooms in on a word", keywords: ["suggests", "connot", "implies", "cannot be refused", "pressure", "urgent", "effect"] },
              { point: "Links to genre / delay / wider play", keywords: ["revenge tragedy", "genre", "delay", "later", "convention", "irony", "whole play"] },
            ],
            commonError: "Explaining the plot of the scene instead of the language used to present revenge.",
            guideRef: "revenge-and-delay",
          },
          {
            id: "ham-qa-p2-q12",
            question: "'The Ghost is a force for evil in the play.' How far do you agree? Consider both sides and reach a judgement.",
            marks: 6,
            hint: "For: he demands murder, may be a devil, starts a chain of deaths. Against: he tells the truth, protects Gertrude, comes from purgatory not hell.",
            modelAnswer:
              "There is evidence that the Ghost is a force for evil. He demands that Hamlet commit murder, a mortal sin, and his command sets off the chain of events that kills Polonius, Ophelia, Gertrude, Laertes and Hamlet himself. Hamlet himself fears the spirit 'May be the devil', and Protestant members of the audience would share that suspicion of a ghost from purgatory. On the other hand, the Ghost tells the truth, which is confirmed when Claudius reacts to the Mousetrap and later confesses in the prayer scene. He also shows mercy towards Gertrude, ordering Hamlet to 'Leave her to heaven', which is not what a devil would do. Overall I disagree that he is simply evil: he is a truthful but terrifying figure whose demand for revenge, however just, brings tragedy, which is exactly the moral problem of revenge tragedy.",
            markScheme: [
              { point: "For: demands murder / sin / starts the chain of deaths", keywords: ["murder", "sin", "chain", "deaths", "causes", "demands", "tragedy", "starts"] },
              { point: "For: may be the devil / Protestant suspicion", keywords: ["devil", "demon", "protestant", "purgatory", "suspicio", "trick"] },
              { point: "Against: tells the truth (Mousetrap / prayer confirm it)", keywords: ["truth", "true", "mousetrap", "confess", "prayer", "confirmed", "honest"] },
              { point: "Against: mercy to Gertrude 'Leave her to heaven'", keywords: ["leave her to heaven", "gertrude", "mercy", "protect", "spare"] },
              { point: "Uses embedded quotations", keywords: ["may be the devil", "revenge his foul", "leave her to heaven", "murder most foul", "serpent"] },
              { point: "Reaches a clear, reasoned judgement", keywords: ["overall", "i agree", "i disagree", "to some extent", "conclude", "judgement", "ultimately"] },
            ],
            commonError: "Arguing only one side, or forgetting that the play itself never fully resolves whether the Ghost is 'honest'.",
            guideRef: "context",
          },
        ],
      },
      {
        id: "ham-qa-p3",
        title: "Written Paper 3",
        passage: {
          id: "yorick-paper",
          title: "In the graveyard (extract)",
          source: "William Shakespeare, Hamlet (c.1600), Act 5 Scene 1 – Hamlet, Horatio and the First Gravedigger",
          text:
            "FIRST GRAVEDIGGER: This same skull, sir, was Yorick's skull, the king's jester.\nHAMLET: This?\nFIRST GRAVEDIGGER: E'en that.\nHAMLET: Let me see. [He takes the skull.] Alas, poor Yorick! I knew him, Horatio: a fellow of infinite jest, of most excellent fancy: he hath borne me on his back a thousand times; and now, how abhorred in my imagination it is! my gorge rises at it. Here hung those lips that I have kissed I know not how oft. Where be your gibes now? your gambols? your songs? your flashes of merriment, that were wont to set the table on a roar? Not one now, to mock your own grinning? quite chap-fallen? Now get you to my lady's chamber, and tell her, let her paint an inch thick, to this favour she must come; make her laugh at that. Prithee, Horatio, tell me one thing.\nHORATIO: What's that, my lord?\nHAMLET: Dost thou think Alexander looked o' this fashion i' the earth?\nHORATIO: E'en so.\nHAMLET: And smelt so? pah!\nHORATIO: E'en so, my lord.\nHAMLET: To what base uses we may return, Horatio! [...]\nImperious Caesar, dead and turn'd to clay,\nMight stop a hole to keep the wind away:",
          note:
            "E'en = even, just; infinite jest = endless jokes; fancy = imagination; my gorge rises = I feel sick; gibes = taunts; gambols = playful leaps; wont to = used to; chap-fallen = jaw dropped, downcast; paint an inch thick = wear thick make-up; favour = appearance; Alexander = Alexander the Great; base = low, humble; imperious = commanding.",
        },
        questions: [
          {
            id: "ham-qa-p3-q01",
            question: "Who was Yorick, and what was he like when he was alive? Give two details from the extract.",
            marks: 2,
            hint: "Look at the gravedigger's first line and Hamlet's memories.",
            modelAnswer:
              "Yorick was the old king's jester, a professional entertainer at court. He was 'a fellow of infinite jest', full of jokes and imagination, and he was affectionate towards young Hamlet, carrying him 'on his back a thousand times'.",
            markScheme: [
              { point: "Identifies him as the king's jester", keywords: ["jester", "fool", "entertainer", "clown", "king's jester", "comedian"] },
              { point: "Gives a detail of his character / relationship with Hamlet", keywords: ["infinite jest", "jokes", "funny", "carried", "on his back", "merriment", "excellent fancy", "songs"] },
            ],
            commonError: "Saying Yorick was Hamlet's father or a soldier. Read the gravedigger's line carefully.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-qa-p3-q02",
            question: "How does Shakespeare use contrast between past and present in Hamlet's speech about Yorick? Analyse one example.",
            marks: 3,
            hint: "Compare what Yorick's lips and face used to do with what the skull looks like now.",
            modelAnswer:
              "Shakespeare contrasts the lively Yorick of the past with the bare skull of the present. Hamlet remembers 'flashes of merriment, that were wont to set the table on a roar', where 'flashes' suggests bright, sudden energy and 'roar' a whole room laughing. Then 'and now' turns to the skull's 'grinning', a grim joke because a skull has no lips and always appears to grin. The contrast shows how death strips away everything that made a person who they were, and it horrifies Hamlet: 'my gorge rises at it'.",
            markScheme: [
              { point: "Identifies past vs present contrast", keywords: ["contrast", "past", "present", "used to", "now", "before", "juxtapos"] },
              { point: "Analyses a specific word (flashes / roar / grinning / lips)", keywords: ["flashes", "roar", "grinning", "lips", "merriment", "chap-fallen", "gibes"] },
              { point: "Explains effect: death strips life away / Hamlet's horror", keywords: ["death", "strips", "horror", "disgust", "gorge", "nothing left", "mortality", "loss"] },
            ],
            commonError: "Retelling Yorick's life without analysing the language of the contrast.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-qa-p3-q03",
            extract: "Where be your gibes now? your gambols? your songs? your flashes of merriment[...]?",
            question: "What is the effect of this series of rhetorical questions addressed to the skull?",
            marks: 3,
            hint: "Can the skull answer? What does the silence suggest?",
            modelAnswer:
              "Hamlet asks a rapid series of rhetorical questions, listing the jester's 'gibes', 'gambols' and 'songs'. Because the skull cannot answer, each question meets silence, emphasising that all Yorick's life and humour has vanished. The accumulation builds a sense of loss, and addressing the skull directly (apostrophe) makes the moment personal and emotional, showing Hamlet coming face to face with death.",
            markScheme: [
              { point: "Identifies rhetorical questions / list", keywords: ["rhetorical question", "questions", "list", "series", "accumul", "repeated"] },
              { point: "No answer / silence emphasises loss", keywords: ["cannot answer", "silence", "no answer", "gone", "vanished", "loss", "empty"] },
              { point: "Direct address / emotional, personal effect", keywords: ["address", "apostrophe", "personal", "emotional", "talks to", "face to face", "directly"] },
            ],
            commonError: "Just saying 'it makes the reader think'. Explain what the unanswered questions emphasise.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-qa-p3-q04",
            question: "This speech is written in prose, while most of Hamlet's soliloquies are in verse. Suggest why Shakespeare uses prose here.",
            marks: 2,
            hint: "Who is Hamlet talking to, and where?",
            modelAnswer:
              "Prose suits the informal, conversational setting: Hamlet is chatting with his friend Horatio and a common gravedigger in a graveyard, not making a formal public speech. Prose also makes his thoughts sound natural and spontaneous, as if he is reacting in the moment to the skull in his hand.",
            markScheme: [
              { point: "Informal / conversational / talking to friend or commoner", keywords: ["informal", "conversation", "chat", "horatio", "gravedigger", "common", "low status", "everyday"] },
              { point: "Natural / spontaneous / realistic effect", keywords: ["natural", "spontaneous", "realistic", "real", "in the moment", "casual", "honest"] },
            ],
            commonError: "Saying 'prose shows Hamlet is mad'. In this scene he is calm and reflective.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-qa-p3-q05",
            extract: "Now get you to my lady's chamber, and tell her, let her paint an inch thick, to this favour she must come; make her laugh at that.",
            question: "Explain how this line links the themes of mortality and appearance versus reality.",
            marks: 4,
            hint: "What is make-up for? What does 'to this favour she must come' mean?",
            modelAnswer:
              "Hamlet imagines sending the skull to a fine lady to tell her that, however thickly she 'paint[s]' her face with make-up, she will end up looking like this skull. Make-up is a way of creating a false appearance of youth and beauty, so the line exposes it as a mask that cannot hide the reality of death. 'To this favour she must come' uses 'favour' (face, appearance) to stress that every face becomes a skull. The bitter joke 'make her laugh at that' links back to the jester: death has the last laugh. It may also hint at Hamlet's distrust of women, seen earlier in 'Frailty, thy name is woman!'.",
            markScheme: [
              { point: "Explains the meaning: however much make-up, she will become a skull", keywords: ["make-up", "makeup", "paint", "become a skull", "end up", "this favour", "face", "die"] },
              { point: "Appearance vs reality: make-up as false mask", keywords: ["appearance", "reality", "mask", "false", "hide", "disguise", "cover", "pretend"] },
              { point: "Mortality: death comes to everyone / beauty fades", keywords: ["mortality", "death", "everyone", "inevitable", "beauty fades", "leveller", "no escape"] },
              { point: "Analyses tone / bitter humour / link to women or the jester", keywords: ["bitter", "joke", "laugh", "irony", "jester", "women", "frailty", "dark humour"] },
            ],
            commonError: "Explaining only one theme. The question asks how the line links both.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-qa-p3-q06",
            extract: "Imperious Caesar, dead and turn'd to clay,\nMight stop a hole to keep the wind away:",
            question: "What point does Hamlet make by imagining Alexander the Great and Julius Caesar after death?",
            marks: 3,
            hint: "These were two of the most powerful men in history. What happens to their bodies?",
            modelAnswer:
              "Hamlet uses Alexander and Caesar, two of the greatest rulers in history, to show that death is the great leveller. 'Imperious', meaning commanding, contrasts sharply with the humble image of Caesar's dust being used as clay to plug a draughty hole. The rhyming couplet ('clay'/'away') gives the idea a mocking, sing-song finality. The point is that power, fame and status mean nothing in death, which also applies to kings like Claudius.",
            markScheme: [
              { point: "Death is the great leveller / everyone ends the same", keywords: ["leveller", "everyone", "same", "equal", "no matter", "even kings", "all die"] },
              { point: "Contrast between 'imperious' power and humble/base use", keywords: ["imperious", "powerful", "great", "humble", "base", "hole", "clay", "contrast"] },
              { point: "Power/status meaningless in death OR couplet effect", keywords: ["meaningless", "pointless", "status", "power", "couplet", "rhyme", "mock", "claudius"] },
            ],
            commonError: "Explaining who Caesar was without explaining the point Hamlet is making about death.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-qa-p3-q07",
            question: "Compare Hamlet's attitude to death in the graveyard with his attitude in 'To be, or not to be'.",
            marks: 4,
            hint: "In Act 3 death is 'the undiscover'd country'; in Act 5 he holds it in his hands.",
            modelAnswer:
              "In 'To be, or not to be', death is an abstract, frightening mystery: 'The undiscover'd country from whose bourn / No traveller returns', and fear of it 'puzzles the will' and stops him acting. In the graveyard, death becomes physical and real: he holds Yorick's skull and even smells it ('And smelt so? pah!'). Although he is disgusted, he seems to accept death as the fate of everyone, from jesters to Caesar. This marks a development: after the graveyard, Hamlet says 'the readiness is all', showing a calmer acceptance that finally allows him to act.",
            markScheme: [
              { point: "Act 3: death as frightening unknown / abstract", keywords: ["undiscover'd country", "undiscovered", "unknown", "abstract", "fear", "dread", "mystery"] },
              { point: "Act 5: death physical, concrete, real", keywords: ["skull", "physical", "concrete", "real", "smell", "holds", "body", "pah"] },
              { point: "Development to acceptance", keywords: ["accept", "calm", "readiness", "develop", "change", "peace", "resigned"] },
              { point: "Comparative language / link to action", keywords: ["whereas", "however", "by contrast", "compared", "while", "act", "action", "delay"] },
            ],
            commonError: "Writing two separate summaries without showing how Hamlet's attitude has changed.",
            guideRef: "to-be-or-not-to-be",
          },
          {
            id: "ham-qa-p3-q08",
            question: "Explain how the gravediggers provide comic relief in Act 5 Scene 1, and why this matters at this point in the play.",
            marks: 3,
            hint: "Comic relief = a humorous moment that releases tension in a serious play.",
            modelAnswer:
              "The gravediggers joke, sing and trade riddles while they dig Ophelia's grave, and the First Gravedigger outwits Hamlet in a battle of words. This comic relief releases the tension built up by Ophelia's death and Claudius's plot. It matters because the humour is about death itself, so it deepens the theme of mortality just before the tragic final scene, and it shows ordinary people treating death as part of everyday work, in contrast with the grand deaths of kings.",
            markScheme: [
              { point: "Describes comedy: jokes, songs, wordplay, riddles", keywords: ["joke", "song", "sing", "riddle", "wordplay", "pun", "funny", "witty"] },
              { point: "Releases tension before the climax", keywords: ["tension", "relief", "release", "before", "climax", "break"] },
              { point: "Deepens mortality theme / ordinary view of death", keywords: ["mortality", "death", "deepens", "ordinary", "everyday", "graves", "skulls", "leveller"] },
            ],
            commonError: "Saying comic relief makes the play 'less boring'. Explain how it relates to the themes.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-qa-p3-q09",
            question: "Compare Ophelia's madness with Hamlet's 'antic disposition'. How does Shakespeare use the contrast?",
            marks: 4,
            hint: "Whose madness is chosen? Whose is real? Who has power?",
            modelAnswer:
              "Hamlet chooses to 'put an antic disposition on', so his madness begins as a deliberate disguise with a purpose; Polonius even notices 'method' in it. Ophelia's madness, by contrast, is genuine and helpless, caused by grief after her father is killed by the man she loves. She sings broken songs and hands out flowers ('There's rosemary, that's for remembrance'), and she ends up drowning. Shakespeare uses her as a foil: her real madness shows what Hamlet is only pretending, and highlights how little power she has compared with a prince, linking to the theme of women and power.",
            markScheme: [
              { point: "Hamlet's madness is chosen / feigned / strategic", keywords: ["antic disposition", "pretend", "feign", "act", "chosen", "disguise", "method", "deliberate"] },
              { point: "Ophelia's madness is real / caused by grief", keywords: ["real", "genuine", "grief", "father", "polonius", "helpless", "rosemary", "songs"] },
              { point: "Foil / contrast explained", keywords: ["foil", "contrast", "whereas", "by contrast", "highlights", "mirror"] },
              { point: "Link to power / women / tragedy", keywords: ["power", "women", "powerless", "victim", "drown", "tragic", "control"] },
            ],
            commonError: "Saying both are pretending. Ophelia's madness is presented as genuine.",
            guideRef: "madness-and-women",
          },
          {
            id: "ham-qa-p3-q10",
            question: "How are Ophelia and Gertrude controlled or judged by the men around them? Give one example for each woman.",
            marks: 3,
            hint: "Think of Polonius's orders, Laertes's warnings, Hamlet's words and the Ghost's judgement.",
            modelAnswer:
              "Ophelia is controlled by her father and brother: Laertes warns her against Hamlet, and when Polonius orders her to reject him, she replies 'I shall obey, my lord'. She is later used as bait so that Claudius and Polonius can spy on Hamlet. Gertrude is judged harshly by Hamlet, who calls her weak in 'Frailty, thy name is woman!', and by the Ghost, who says Claudius won her with 'witchcraft'. In both cases the women are seen through men's eyes and given little chance to explain themselves.",
            markScheme: [
              { point: "Ophelia example: obeys Polonius / used as bait / Laertes warns", keywords: ["obey", "polonius", "bait", "spy", "laertes", "orders", "reject", "used"] },
              { point: "Gertrude example: judged by Hamlet / Ghost", keywords: ["frailty", "judged", "hamlet", "ghost", "witchcraft", "criticis", "blames"] },
              { point: "Overall comment: seen through men's eyes / little voice", keywords: ["men's eyes", "little voice", "no voice", "powerless", "patriarch", "controlled", "male"] },
            ],
            commonError: "Giving examples for only one woman.",
            guideRef: "madness-and-women",
          },
          {
            id: "ham-qa-p3-q11",
            question: "Write a PEEL paragraph: How does Shakespeare present death and mortality in this extract?",
            marks: 5,
            hint: "Use one quotation from the Yorick speech and one from the Alexander/Caesar section.",
            modelAnswer:
              "Shakespeare presents death as the great leveller that strips away identity, humour and power alike. Holding Yorick's skull, Hamlet asks, 'Where be your gibes now? your gambols? your songs?', and the unanswered rhetorical questions emphasise that the jester's lively personality has been reduced to silence. The skull's 'grinning' is a grim irony, because the bone can only imitate the smile of the man who once made everyone laugh. Hamlet then extends this to the most powerful men in history: 'Imperious Caesar, dead and turn'd to clay, / Might stop a hole to keep the wind away', where the contrast between 'imperious' and the humble 'hole' shows that even emperors become dust. This develops the 'quintessence of dust' idea from Act 2 and prepares Hamlet, and the audience, for the deaths of the final scene.",
            markScheme: [
              { point: "Clear point about how death is presented", keywords: ["leveller", "presents", "strips", "everyone", "inevitable", "equal", "shows that"] },
              { point: "Embedded evidence", keywords: ["where be your gibes", "grinning", "infinite jest", "imperious caesar", "clay", "alexander", "chap-fallen", "base uses"] },
              { point: "Technique named", keywords: ["rhetorical question", "irony", "contrast", "couplet", "list", "imagery", "apostrophe"] },
              { point: "Word-level analysis / effect", keywords: ["suggests", "connot", "implies", "silence", "humble", "effect", "emphasis"] },
              { point: "Links to wider play / theme", keywords: ["dust", "final scene", "readiness", "to be", "theme", "foreshadow", "whole play", "claudius"] },
            ],
            commonError: "Spending the paragraph explaining who Yorick was rather than analysing how death is presented.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-qa-p3-q12",
            question: "Explore how Shakespeare develops imagery of corruption and decay across the whole play. Refer to at least three moments.",
            marks: 6,
            hint: "Try: the unweeded garden (1.2), 'Something is rotten' (1.4), the poison in the ear (1.5), 'my offence is rank' (3.3), the graveyard (5.1), the poisoned ending (5.2).",
            modelAnswer:
              "From the start, Shakespeare presents Denmark as diseased. In Act 1 Scene 2 Hamlet calls the world 'an unweeded garden' possessed by 'things rank and gross', and in 1.4 Marcellus sums up the mood: 'Something is rotten in the state of Denmark', where 'rotten' suggests hidden decay and 'state' means the whole nation. The Ghost then reveals the source of the rot: Claudius poisoned the king through the ear, and the lie told afterwards has 'Rankly abused' the 'whole ear of Denmark', so poison spreads from one body to the body politic. In the prayer scene, Claudius himself admits 'my offence is rank, it smells to heaven', making corruption a stench even God can detect. By Act 5 the imagery has become literal: rotting skulls in the graveyard, and a final scene where poison on the sword and in the cup destroys the royal family. Shakespeare suggests that when a king is murdered, the corruption cannot stay hidden; it spreads until the whole court is destroyed and an outsider, Fortinbras, must cleanse the state.",
            markScheme: [
              { point: "Unweeded garden / rank and gross (1.2)", keywords: ["unweeded garden", "garden", "rank and gross", "weeds", "grows to seed"] },
              { point: "'Something is rotten' with analysis (1.4)", keywords: ["rotten", "state of denmark", "marcellus", "rot", "something is rotten"] },
              { point: "Poison in the ear / lies as poison (1.5)", keywords: ["ear", "poison", "serpent", "rankly abused", "orchard"] },
              { point: "Claudius 'my offence is rank' / smell (3.3)", keywords: ["offence is rank", "smells to heaven", "rank", "smell", "prayer"] },
              { point: "Ending: skulls / poisoned sword and cup", keywords: ["skull", "graveyard", "poisoned sword", "cup", "duel", "final scene", "literal"] },
              { point: "Overall argument about Shakespeare's purpose (spreading corruption / regicide / Fortinbras)", keywords: ["spreads", "regicide", "whole court", "fortinbras", "cleanse", "purpose", "suggests that", "cannot stay hidden"] },
            ],
            commonError: "Listing quotations without explaining how the imagery develops or what Shakespeare is suggesting through it.",
            guideRef: "corruption-mortality",
          },
        ],
      },
      {
        id: "ham-qa-p4",
        title: "Written Paper 4",
        passage: {
          id: "rest-is-silence-paper",
          title: "The death of Hamlet",
          source: "William Shakespeare, Hamlet (c.1600), Act 5 Scene 2 – Hamlet and Horatio",
          text:
            "HAMLET: O good Horatio, what a wounded name,\nThings standing thus unknown, shall live behind me!\nIf thou didst ever hold me in thy heart,\nAbsent thee from felicity awhile,\nAnd in this harsh world draw thy breath in pain,\nTo tell my story. [...]\nO, I die, Horatio;\nThe potent poison quite o'er-crows my spirit:\nI cannot live to hear the news from England;\nBut I do prophesy the election lights\nOn Fortinbras: he has my dying voice;\nSo tell him, with the occurrents, more and less,\nWhich have solicited. The rest is silence.\n[He dies.]\nHORATIO: Now cracks a noble heart. Good night, sweet prince:\nAnd flights of angels sing thee to thy rest!",
          note:
            "Horatio has just tried to drink the rest of the poison. wounded name = damaged reputation; felicity = happiness (here, the peace of death); o'er-crows = overpowers, crows over like a victorious cockerel; election = choice of the next king; dying voice = last vote; occurrents = events; solicited = prompted all this.",
        },
        questions: [
          {
            id: "ham-qa-p4-q01",
            question: "What does Hamlet ask Horatio to do instead of dying with him?",
            marks: 2,
            hint: "Look at 'Absent thee from felicity awhile'.",
            modelAnswer:
              "Hamlet asks Horatio not to drink the poison but to stay alive a while longer in 'this harsh world' and to 'tell my story', so that people understand the truth about what happened and Hamlet's reputation is not left 'wounded'.",
            markScheme: [
              { point: "Stay alive / not drink the poison", keywords: ["stay alive", "live", "not drink", "don't drink", "not die", "survive", "absent thee"] },
              { point: "Tell his story / explain the truth", keywords: ["tell my story", "story", "explain", "truth", "reputation", "wounded name", "tell people"] },
            ],
            commonError: "Saying Hamlet asks Horatio to take revenge. Revenge is complete; he asks for the truth to be told.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-qa-p4-q02",
            extract: "O good Horatio, what a wounded name,\nThings standing thus unknown, shall live behind me!",
            question: "Analyse what these lines reveal about Hamlet's concerns as he dies.",
            marks: 3,
            hint: "Zoom in on 'wounded name' and 'unknown'.",
            modelAnswer:
              "Hamlet is worried about his reputation, his 'name', after death. The metaphor 'wounded name' suggests that his reputation, like his body, has been injured, because to the court he looks like a man who has killed the king and Laertes. 'Things standing thus unknown' shows his fear that the truth, Claudius's murder of his father, will stay hidden. This links to appearance versus reality: Hamlet needs the reality to be told so that his actions are not judged only by appearances.",
            markScheme: [
              { point: "Concern for reputation / how he is remembered", keywords: ["reputation", "name", "remembered", "legacy", "honour", "judged"] },
              { point: "Analyses metaphor 'wounded' (mirrors his body)", keywords: ["wounded", "metaphor", "injured", "hurt", "like his body", "damaged"] },
              { point: "'Unknown' — truth hidden / appearance vs reality", keywords: ["unknown", "truth", "hidden", "appearance", "reality", "nobody knows", "secret"] },
            ],
            commonError: "Thinking 'wounded name' refers to a physical wound only.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-qa-p4-q03",
            extract: "The potent poison quite o'er-crows my spirit:",
            question: "Analyse the language of this line.",
            marks: 3,
            hint: "Notice the sounds, and think of a cockerel crowing over a beaten rival.",
            modelAnswer:
              "The alliteration of 'potent poison' uses heavy plosive 'p' sounds that suggest the force of the poison hitting him. The verb 'o'er-crows' personifies the poison as a victorious cockerel crowing over a defeated rival, suggesting it triumphs over his 'spirit'. This links to the poison imagery that has run through the play since his father was poisoned: the corruption Claudius began finally overcomes Hamlet too.",
            markScheme: [
              { point: "Alliteration / plosive sounds of 'potent poison'", keywords: ["alliteration", "plosive", "potent poison", "p sound", "harsh sound"] },
              { point: "'O'er-crows' as personification / triumph / cockerel", keywords: ["crow", "cockerel", "personif", "triumph", "victor", "overpower", "defeat"] },
              { point: "Link to poison imagery across the play", keywords: ["poison", "father", "ear", "claudius", "imagery", "corruption", "throughout"] },
            ],
            commonError: "Not knowing 'o'er-crows' and skipping it. Use the glossary: it is the most interesting word in the line.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-qa-p4-q04",
            extract: "The rest is silence.",
            question: "Why is 'The rest is silence' such a powerful final line for Hamlet? Give three reasons.",
            marks: 3,
            hint: "Think about its length, the double meaning of 'rest', and what kind of character Hamlet has been.",
            modelAnswer:
              "First, it is a short, plain sentence from a character who has spoken more than anyone else in the play, so its simplicity is striking. Second, 'rest' has a double meaning: 'everything else' and 'peaceful sleep', so death brings both an ending and release from his suffering. Third, for a man who has spent the play thinking and talking instead of acting, silence is the final end of thought: the mind that delayed him is finally still.",
            markScheme: [
              { point: "Short / simple contrasting with his many words", keywords: ["short", "simple", "plain", "brief", "words", "talkative", "many speeches", "contrast"] },
              { point: "Double meaning of 'rest'", keywords: ["double meaning", "rest", "remainder", "everything else", "sleep", "peace", "pun"] },
              { point: "End of thought / delay / mystery of death", keywords: ["thought", "thinking", "delay", "still", "mind", "undiscover", "mystery", "unknown"] },
            ],
            commonError: "Giving three reasons that are really the same point ('it's sad', 'it's emotional', 'it's moving').",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-qa-p4-q05",
            extract: "Now cracks a noble heart. Good night, sweet prince:\nAnd flights of angels sing thee to thy rest!",
            question: "How do Horatio's words shape the audience's final view of Hamlet?",
            marks: 3,
            hint: "Why is it important that Horatio, of all characters, says this?",
            modelAnswer:
              "Horatio has been the most loyal and trustworthy character, so the audience trusts his judgement. He calls Hamlet 'noble' and 'sweet', reminding us of his goodness rather than his rash acts. The gentle 'Good night' treats death as sleep, and the image of 'flights of angels' suggests Hamlet's soul is going to heaven, presenting him as a tragic hero who deserves peace despite his mistakes.",
            markScheme: [
              { point: "Horatio is trustworthy / loyal, so his view guides us", keywords: ["trustworthy", "loyal", "honest", "reliable", "friend", "trust"] },
              { point: "'Noble' / 'sweet' presents Hamlet as good", keywords: ["noble", "sweet", "good", "kind", "admirable", "hero"] },
              { point: "Angels / good night: heaven, peace, tragic hero", keywords: ["angels", "heaven", "good night", "sleep", "peace", "tragic hero", "soul"] },
            ],
            commonError: "Analysing the words without mentioning that the speaker's trustworthiness is what gives them weight.",
            guideRef: "characters",
          },
          {
            id: "ham-qa-p4-q06",
            question: "Hamlet gives Fortinbras his 'dying voice'. Explain why Fortinbras's arrival at the end is significant.",
            marks: 3,
            hint: "Think about order being restored, Fortinbras as a foil, and the irony of his father's death.",
            modelAnswer:
              "Fortinbras's arrival restores order: after the Danish royal family has destroyed itself, a strong, decisive leader takes control, suggesting the 'rotten' state may now be cleansed. He is also a foil to Hamlet, a man of action whose decisiveness contrasts with Hamlet's delay. There is irony too: his father was killed by old King Hamlet, and now he gains Denmark without a fight, so the old conflict ends with Norway winning.",
            markScheme: [
              { point: "Restores order / cleanses Denmark", keywords: ["order", "restore", "cleanse", "new start", "stability", "control", "heal"] },
              { point: "Foil: man of action vs Hamlet's delay", keywords: ["foil", "action", "decisive", "contrast", "acts", "soldier"] },
              { point: "Irony: his father killed by old Hamlet / gains Denmark without fighting", keywords: ["irony", "ironic", "father", "old hamlet", "without a fight", "norway", "wins"] },
            ],
            commonError: "Forgetting who Fortinbras is. Revise him as the third son whose father was killed.",
            guideRef: "revenge-and-delay",
          },
          {
            id: "ham-qa-p4-q07",
            question: "Who is most to blame for the tragedy: Claudius, Hamlet or someone else? Give a brief, balanced answer with evidence.",
            marks: 4,
            hint: "Consider Claudius's crime and plots, Hamlet's delay and rashness, and others such as Polonius or Laertes.",
            modelAnswer:
              "Claudius is the root cause: his murder of his brother, which he admits is 'rank' and 'smells to heaven', starts the chain of events, and his poisoned cup and plot with Laertes cause the final deaths. However, Hamlet must share some blame: his delay allows Claudius to keep plotting, and his rash killing of Polonius leads directly to Ophelia's madness and Laertes's revenge. Polonius's spying and Laertes's willingness to use a poisoned sword also contribute. Overall, Claudius is most to blame because every other mistake happens in the poisoned world his crime created.",
            markScheme: [
              { point: "Claudius's responsibility with evidence", keywords: ["claudius", "murder", "rank", "poisoned cup", "plot", "root cause", "started"] },
              { point: "Hamlet's share of blame (delay / Polonius)", keywords: ["delay", "polonius", "rash", "hesitat", "kills", "hamlet's fault", "mistake"] },
              { point: "Other characters (Polonius / Laertes / Gertrude)", keywords: ["laertes", "polonius", "spying", "poisoned sword", "gertrude", "others"] },
              { point: "Clear judgement", keywords: ["overall", "most to blame", "ultimately", "therefore", "i think", "conclude"] },
            ],
            commonError: "Blaming one character without considering anyone else; 'balanced' means weighing at least two.",
            guideRef: "revenge-and-delay",
          },
          {
            id: "ham-qa-p4-q08",
            question: "Imagine you are Horatio addressing the people of Denmark. Write the first two sentences of your speech, using at least one persuasive technique.",
            marks: 2,
            hint: "Try direct address, a rhetorical question, a command or a striking image.",
            modelAnswer:
              "People of Denmark, before you judge the prince who lies here, ask yourselves this: what would you have done if your father's ghost had named your king as his murderer? Hamlet did not choose this tragedy; it was poured into his life the way poison was poured into his father's ear.",
            markScheme: [
              { point: "Uses a persuasive technique (direct address / rhetorical question / imperative)", keywords: ["people of denmark", "ask yourselves", "would you", "you", "imagine", "listen", "?"] },
              { point: "Appropriate content/voice for Horatio defending Hamlet", keywords: ["hamlet", "prince", "father", "ghost", "poison", "truth", "murder", "judge"] },
            ],
            commonError: "Writing as a narrator ('Horatio told everyone that...') instead of in Horatio's voice.",
            guideRef: "characters",
          },
          {
            id: "ham-qa-p4-q09",
            question: "Is Claudius simply a villain? Explain your view with reference to at least two moments in the play.",
            marks: 4,
            hint: "Consider his public speeches, the prayer scene and the final scene.",
            modelAnswer:
              "Claudius is clearly a villain: he murdered his brother, married his widow and later plots Hamlet's death twice, through the letters to England and the poisoned sword and cup. However, Shakespeare makes him more complex than a simple villain. In the prayer scene he shows real guilt, admitting 'my offence is rank, it smells to heaven' and comparing himself to Cain. He is also a skilled ruler who handles the threat from Norway calmly. Yet he chooses to keep 'My crown, mine own ambition and my queen' rather than repent, and in the final scene he lets Gertrude drink the poison rather than reveal his plot. So he is a villain, but a human, intelligent one who knows he is doing wrong, which makes him more disturbing.",
            markScheme: [
              { point: "Evidence of villainy (murder / plots)", keywords: ["murder", "poison", "plot", "england", "letters", "villain", "brother"] },
              { point: "Evidence of complexity: guilt in prayer scene", keywords: ["guilt", "prayer", "rank", "cain", "conscience", "repent", "smells to heaven"] },
              { point: "Chooses evil anyway / lets Gertrude drink", keywords: ["my crown", "ambition", "my queen", "gertrude", "drink", "too late", "chooses"] },
              { point: "Clear judgement about how simple or complex he is", keywords: ["complex", "simply", "human", "more than", "disturbing", "overall", "judgement"] },
            ],
            commonError: "Only listing Claudius's crimes. A strong answer explores what makes him more than a pantomime villain.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-qa-p4-q10",
            extract: "This above all: to thine own self be true,\nAnd it must follow, as the night the day,\nThou canst not then be false to any man.",
            question: "Explain the advice Polonius gives here, and why it is ironic coming from him.",
            marks: 4,
            hint: "What does he advise? What does Polonius actually spend the play doing?",
            modelAnswer:
              "Polonius advises Laertes that the most important thing is to be honest with himself; if he is true to himself, it will follow naturally, 'as the night the day', that he will be honest with everyone else. The simile makes honesty sound as natural and certain as the cycle of day and night. It is ironic because Polonius himself is anything but honest: he spies on his own son through Reynaldo, uses his daughter as bait to spy on Hamlet, and dies hiding behind a tapestry. Shakespeare uses this irony to show the gap between appearance and reality: wise-sounding words do not make a wise or honest man.",
            markScheme: [
              { point: "Explains the advice: be honest to yourself, then to others", keywords: ["honest", "true to yourself", "yourself", "others", "any man", "be yourself"] },
              { point: "Analyses the simile 'as the night the day'", keywords: ["simile", "night the day", "natural", "certain", "inevitable", "cycle"] },
              { point: "Irony: Polonius spies, schemes, uses Ophelia", keywords: ["irony", "ironic", "spies", "spying", "bait", "scheme", "arras", "tapestry"] },
              { point: "Link to appearance vs reality / Shakespeare's purpose", keywords: ["appearance", "reality", "hypocri", "words", "wise", "purpose", "seems"] },
            ],
            commonError: "Treating the speech as pure wisdom without spotting the irony.",
            guideRef: "appearance-reality",
          },
          {
            id: "ham-qa-p4-q11",
            question: "Write a PEEL paragraph: How does Shakespeare make the ending of the play tragic?",
            marks: 5,
            hint: "Use the extract. Consider waste, Hamlet's nobility, his concern for his name and the final silence.",
            modelAnswer:
              "Shakespeare makes the ending tragic by showing a noble, intelligent man destroyed just as he finally achieves his purpose. Dying, Hamlet worries that 'what a wounded name ... shall live behind me', and the metaphor 'wounded name' shows that, like his body, his reputation is injured, because the court has not seen the truth. His final words, 'The rest is silence', are tragic in their simplicity: the brilliant mind that filled the play with soliloquies is suddenly stilled, and the double meaning of 'rest' presents death as both an ending and a release. Horatio's tribute, 'Now cracks a noble heart', reminds us of Hamlet's goodness, so the audience feels the waste of a life. This fits the pattern of tragedy, in which a hero's flaw (here, his delay) leads to the destruction of himself and those around him.",
            markScheme: [
              { point: "Clear point about the tragedy (noble hero destroyed / waste)", keywords: ["tragic", "noble", "waste", "destroyed", "hero", "loss", "presents"] },
              { point: "Embedded evidence from the extract", keywords: ["wounded name", "rest is silence", "noble heart", "sweet prince", "potent poison", "tell my story", "harsh world"] },
              { point: "Technique named", keywords: ["metaphor", "double meaning", "pun", "alliteration", "personif", "short sentence", "imagery"] },
              { point: "Explains effect on audience", keywords: ["audience", "feel", "sympathy", "pity", "effect", "suggests", "moving"] },
              { point: "Link to tragedy conventions / delay / flaw", keywords: ["flaw", "tragedy", "convention", "delay", "revenge tragedy", "hamartia", "catharsis"] },
            ],
            commonError: "Listing who dies instead of analysing how language and structure create a tragic effect.",
            guideRef: "corruption-mortality",
          },
          {
            id: "ham-qa-p4-q12",
            question: "'Hamlet is a hero who acts too late.' How far do you agree? Write a short essay plan or answer covering both sides with evidence.",
            marks: 6,
            hint: "Agree: delays from Act 1 to Act 5, spares Claudius at prayer, 'dull revenge'. Disagree: needed proof, Ghost might be a devil, acts boldly elsewhere, Act 5 acceptance. Is he a hero?",
            modelAnswer:
              "I largely agree that Hamlet acts too late. He promises in Act 1 to 'sweep to my revenge' but does not kill Claudius until the final scene, by which time Polonius, Ophelia and Gertrude are dead. He even spares Claudius at prayer, and in Act 4 scolds his own 'dull revenge'. However, his delay is not simple cowardice: the Ghost 'May be the devil', so testing it with the Mousetrap is sensible, and killing a king was a terrible sin under the divine right of kings. He also acts boldly at times, killing Polonius and sending Rosencrantz and Guildenstern to their deaths, which suggests rash action is as dangerous as delay. Is he a hero? Horatio calls him a 'noble heart', and his intelligence, honesty and suffering make the audience sympathise. Overall, Hamlet is a tragic hero whose thoughtfulness is both his greatest quality and his fatal flaw: he acts too late, but for understandable reasons.",
            markScheme: [
              { point: "Agree: evidence of delay (Act 1 promise to Act 5 / prayer scene / 'dull revenge')", keywords: ["sweep", "act 5", "prayer", "spares", "dull revenge", "delay", "too late", "final scene"] },
              { point: "Consequence of delay: others die", keywords: ["polonius", "ophelia", "gertrude", "deaths", "die", "consequence", "cost"] },
              { point: "Disagree: good reasons (Ghost may be devil / proof / sin of regicide)", keywords: ["devil", "proof", "mousetrap", "sin", "regicide", "divine right", "test"] },
              { point: "Disagree: he does act at times (Polonius / R&G / pirates)", keywords: ["acts", "rash", "kills polonius", "rosencrantz", "guildenstern", "pirates", "bold"] },
              { point: "Considers whether he is a hero (noble / tragic hero / flaw)", keywords: ["hero", "noble", "tragic hero", "flaw", "sympath", "hamartia", "admirable"] },
              { point: "Clear overall judgement", keywords: ["overall", "largely agree", "i agree", "i disagree", "to some extent", "conclude", "ultimately"] },
            ],
            commonError: "Agreeing completely without considering the reasons for the delay, or forgetting to discuss the word 'hero'.",
            guideRef: "revenge-and-delay",
          },
        ],
      },
    ],
  },
};
