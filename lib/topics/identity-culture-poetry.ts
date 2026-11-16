import type { Topic } from "../types";

// ---------------------------------------------------------------------------
// Texts. Public-domain poems are printed in full; the three Singapore poems are
// ORIGINAL poems written for this app. Copyrighted modern poems (Bhatt, Agard,
// Alvi, Nichols, Dharker, Osundare, Afrika) are discussed and quoted only in
// short phrases.
// ---------------------------------------------------------------------------

const MASK = {
  id: "we-wear-the-mask",
  title: "We Wear the Mask",
  source: "Paul Laurence Dunbar, Majors and Minors (1895) — public domain",
  text:
    "We wear the mask that grins and lies,\nIt hides our cheeks and shades our eyes,—\nThis debt we pay to human guile;\nWith torn and bleeding hearts we smile,\nAnd mouth with myriad subtleties.\n\nWhy should the world be over-wise,\nIn counting all our tears and sighs?\nNay, let them only see us, while\n        We wear the mask.\n\nWe smile, but, O great Christ, our cries\nTo thee from tortured souls arise.\nWe sing, but oh the clay is vile\nBeneath our feet, and long the mile;\nBut let the world dream otherwise,\n        We wear the mask!",
  note:
    "Paul Laurence Dunbar (1872–1906) was the son of parents who had been enslaved in Kentucky. He wrote this about thirty years after slavery ended in the USA, when Black Americans still faced violent prejudice. Glossary: guile = deceit, trickery; myriad = countless; subtleties = clever, careful evasions; over-wise = too knowing, prying; vile = foul, worthless; clay = earth (and, in the Bible, the human body).",
};

const BAZAARS = {
  id: "in-the-bazaars-of-hyderabad",
  title: "In the Bazaars of Hyderabad",
  source: "Sarojini Naidu, The Bird of Time (1912) — public domain",
  text:
    "What do you sell, O ye merchants?\nRichly your wares are displayed.\nTurbans of crimson and silver,\nTunics of purple brocade,\nMirrors with panels of amber,\nDaggers with handles of jade.\n\nWhat do you weigh, O ye vendors?\nSaffron and lentil and rice.\nWhat do you grind, O ye maidens?\nSandalwood, henna, and spice.\nWhat do you call, O ye pedlars?\nChessmen and ivory dice.\n\nWhat do you make, O ye goldsmiths?\nWristlet and anklet and ring,\nBells for the feet of blue pigeons\nFrail as a dragon-fly's wing,\nGirdles of gold for the dancers,\nScabbards of gold for the king.\n\nWhat do you cry, O ye fruitmen?\nCitron, pomegranate, and plum.\nWhat do you play, O musicians?\nCithar, sarangi and drum.\nWhat do you chant, O magicians?\nSpells for aeons to come.\n\nWhat do you weave, O ye flower-girls\nWith tassels of azure and red?\nCrowns for the brow of a bridegroom,\nChaplets to garland his bed,\nSheets of white blossoms new-gathered\nTo perfume the sleep of the dead.",
  note:
    "Sarojini Naidu (1879–1949), nicknamed ‘the Nightingale of India’, was a poet and a leader in India’s struggle for independence from British rule. Hyderabad is a historic city in southern India famous for its markets. Glossary: wares = goods for sale; brocade = rich cloth woven with raised patterns; girdles = decorated belts; scabbards = sword sheaths; citron = a large lemon-like fruit; cithar, sarangi = stringed instruments; aeons = ages; chaplets = garlands for the head.",
};

const TAGORE = {
  id: "where-the-mind-is-without-fear",
  title: "Where the mind is without fear (Gitanjali 35)",
  source: "Rabindranath Tagore, Gitanjali (1912), in Tagore’s own English translation — public domain",
  text:
    "Where the mind is without fear and the head is held high;\nWhere knowledge is free;\nWhere the world has not been broken up into fragments by narrow domestic walls;\nWhere words come out from the depth of truth;\nWhere tireless striving stretches its arms towards perfection;\nWhere the clear stream of reason has not lost its way into the dreary desert sand of dead habit;\nWhere the mind is led forward by thee into ever-widening thought and action—\nInto that heaven of freedom, my Father, let my country awake.",
  note:
    "Rabindranath Tagore (1861–1941) was a Bengali poet, musician and thinker. He translated his own poems into English for Gitanjali (‘song offerings’), and in 1913 became the first non-European to win the Nobel Prize in Literature. India was then ruled by Britain. The whole poem is a single sentence: a prayer to God (‘my Father’) for the kind of free, open-minded country Tagore hoped India would become.",
};

const COLOSSUS = {
  id: "the-new-colossus",
  title: "The New Colossus",
  source: "Emma Lazarus (1883) — public domain",
  text:
    "Not like the brazen giant of Greek fame,\nWith conquering limbs astride from land to land;\nHere at our sea-washed, sunset gates shall stand\nA mighty woman with a torch, whose flame\nIs the imprisoned lightning, and her name\nMother of Exiles. From her beacon-hand\nGlows world-wide welcome; her mild eyes command\nThe air-bridged harbor that twin cities frame.\n“Keep, ancient lands, your storied pomp!” cries she\nWith silent lips. “Give me your tired, your poor,\nYour huddled masses yearning to breathe free,\nThe wretched refuse of your teeming shore.\nSend these, the homeless, tempest-tost to me,\nI lift my lamp beside the golden door!”",
  note:
    "Emma Lazarus (1849–1887), a New York poet from a Jewish family who worked with refugees, wrote this sonnet in 1883 to raise money for the Statue of Liberty’s pedestal. In 1903 it was fixed on a bronze plaque inside the pedestal. The ‘brazen giant of Greek fame’ is the Colossus of Rhodes, an ancient bronze statue of the sun god. Glossary: brazen = made of brass or bronze (also ‘shameless’); twin cities = New York and Brooklyn, then separate cities; storied pomp = grand, legendary show; refuse = rubbish; teeming = overcrowded; tempest-tost = thrown about by storms.",
};

const NOBODY = {
  id: "im-nobody",
  title: "I’m Nobody! Who are you?",
  source: "Emily Dickinson (written about 1861, published 1891) — public domain",
  text:
    "I’m Nobody! Who are you?\nAre you – Nobody – too?\nThen there’s a pair of us!\nDon’t tell! they’d advertise – you know!\n\nHow dreary – to be – Somebody!\nHow public – like a Frog –\nTo tell one’s name – the livelong June –\nTo an admiring Bog!",
  note:
    "Emily Dickinson (1830–1886) published only a handful of poems in her lifetime; nearly 1,800 were found after her death. Early printed editions altered her dashes and words (one changes ‘they’d advertise’ to ‘they’d banish us’). livelong = whole, long-lasting; Bog = a marshy wetland full of croaking frogs.",
};

const HAWKER = {
  id: "hawker-centre-7pm",
  title: "Hawker Centre, 7 p.m.",
  source: "Original poem written for this app",
  text:
    "Steam lifts off the chicken rice like a curtain going up.\nSomeone has choped our table with a packet of tissues —\na small white flag that does not mean surrender\nbut mine.\n\n“Uncle, one kopi-O kosong, can?”\n“Can, can. You sit first, I bring.”\nA dozen words, and the deal is done:\nno please, no thank you, nothing wasted —\njust the quick, warm shorthand\nof people who have queued together for years.\n\nMy cousin from London calls it broken English.\nListen again, I tell her.\nListen to the lah that softens an order into a favour,\nthe ah that shrugs at the end of a sentence,\nthe leh that leans on you like an old friend.\n\nHokkien, Malay, Tamil, English,\nstirred in one pot, the way\nthe prata man folds butter into dough —\nover, and over, and over —\nuntil no one can say where one layer ends.\n\nThis is not broken.\nThis is mended:\na language stitched from every boat that ever docked here,\nspoken loud and easy under the ceiling fans\nwhile the whole island queues for its dinner.",
  note:
    "Singlish is the informal English of Singapore, mixing English with words and grammar from Hokkien, Malay, Tamil and other languages. Glossary: choped = reserved (Singaporeans ‘chope’ a seat by leaving a tissue packet on it); kopi-O kosong = black coffee with no sugar; Uncle/Auntie = friendly, respectful ways to address older people; lah, ah, leh = Singlish particles that add tone and feeling to a sentence; prata = roti prata, a folded, buttery flatbread.",
};

const PAATI = {
  id: "in-paatis-language",
  title: "In Paati’s Language",
  source: "Original poem written for this app",
  text:
    "My grandmother speaks to me in Tamil\nand I answer her in English:\ntwo rivers running side by side\nthat never quite agree to meet.\n\nShe calls me kanna, and the word\nis warm as the kolam she draws each dawn\nin rice flour on the doorstep —\nwhite lines looping, looping,\nso that nothing gets lost.\n\nBut I get lost. Her stories\ntravel further than my vocabulary,\npast the last bus stop of words I know,\ninto a village I have only seen\nin a photograph with a folded corner.\n\nI nod. I smile. I catch\none word in five, like rain\ncaught in cupped hands at the window,\nmost of it running through.\n\nTonight I asked her, slowly, badly,\nin her own language, Paati, are you tired?\nand her face opened like a door\nI had not known was shut.\n\nShe laughed, corrected me — twice —\nthen held my wrist, as if\nmy clumsy sentence were a bangle\nshe had given me years ago\nand I had finally put it on.",
  note:
    "Glossary: Paati = grandmother (Tamil); kanna = an affectionate name, roughly ‘dear one’; kolam = a looping pattern drawn in rice flour at the doorway each morning in many Tamil homes, said to welcome good fortune.",
};

const FROM = {
  id: "where-are-you-from",
  title: "Where Are You From?",
  source: "Original poem written for this app",
  text:
    "The new teacher asks it kindly,\nbut the question lands on me\nlike a suitcase I have packed too many times.\n\nFrom a flat in Dubai with sand on the windowsill.\nFrom a school in Hong Kong where I learned to say sorry\nat three different volumes.\nFrom a passport with more stamps than friends.\n\nFrom my mother’s Chennai, which I visit\nthe way you visit a museum of your own face —\neveryone saying, You look just like her,\nin a language I can only half give back.\n\nFrom Singapore, now: from the lift that smells of rain,\nfrom the void deck where the uncles play chess,\nfrom the MRT voice that tells me every morning\nto please mind the platform gap.\n\nI mind it. I mind the gap\nbetween every place I have been.\nMaybe I am the gap —\nthe narrow space where the train stops\nand the doors open both ways.\n\nAsk me again. I will say: here.\nI will say: everywhere I left a little of myself.\nI will say: I am from the question.",
  note:
    "A ‘third culture kid’ grows up in a country (or several) different from their parents’ home culture. Glossary: void deck = the open ground floor of an HDB flat block in Singapore, used for chatting, games and events; MRT = Singapore’s train network, whose announcements ask passengers to ‘please mind the platform gap’.",
};

// ---------------------------------------------------------------------------
// Diagrams (inline SVG)
// ---------------------------------------------------------------------------

const DIAGRAM_WEB = `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Identity web: the self at the centre, linked to language, family memory, heritage and roots, place and belonging, values and faith, and how others see me">
<g stroke="#94a3b8" stroke-width="2">
<line x1="170" y1="100" x2="70" y2="30"/><line x1="170" y1="100" x2="270" y2="30"/>
<line x1="170" y1="100" x2="62" y2="100"/><line x1="170" y1="100" x2="278" y2="100"/>
<line x1="170" y1="100" x2="70" y2="170"/><line x1="170" y1="100" x2="270" y2="170"/>
</g>
<rect x="18" y="17" width="104" height="26" rx="8" fill="#dbeafe" stroke="#2563eb"/><text x="70" y="34" font-size="11" text-anchor="middle" fill="#1e3a8a">Language</text>
<rect x="218" y="17" width="104" height="26" rx="8" fill="#fce7f3" stroke="#db2777"/><text x="270" y="34" font-size="11" text-anchor="middle" fill="#831843">Family memory</text>
<rect x="10" y="87" width="104" height="26" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="62" y="104" font-size="11" text-anchor="middle" fill="#14532d">Heritage &amp; roots</text>
<rect x="226" y="87" width="104" height="26" rx="8" fill="#ede9fe" stroke="#7c3aed"/><text x="278" y="104" font-size="11" text-anchor="middle" fill="#4c1d95">Place &amp; belonging</text>
<rect x="18" y="157" width="104" height="26" rx="8" fill="#ffedd5" stroke="#ea580c"/><text x="70" y="174" font-size="11" text-anchor="middle" fill="#7c2d12">Values &amp; faith</text>
<rect x="218" y="157" width="104" height="26" rx="8" fill="#fee2e2" stroke="#dc2626"/><text x="270" y="174" font-size="11" text-anchor="middle" fill="#7f1d1d">How others see me</text>
<circle cx="170" cy="100" r="30" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<text x="170" y="104" font-size="13" font-weight="bold" text-anchor="middle" fill="#78350f">ME</text>
</svg>`;

const DIAGRAM_SWITCH = `<svg viewBox="0 0 340 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="One speaker code-switching between Standard English at school, Singlish at the hawker centre and English mixed with Tamil words at home">
<defs><marker id="idcArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4338ca"/></marker></defs>
<circle cx="40" cy="85" r="28" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
<text x="40" y="82" font-size="11" text-anchor="middle" fill="#312e81">one</text>
<text x="40" y="96" font-size="11" text-anchor="middle" fill="#312e81">speaker</text>
<g stroke="#4338ca" stroke-width="1.5" fill="none">
<line x1="66" y1="75" x2="92" y2="32" marker-end="url(#idcArrow)"/>
<line x1="68" y1="85" x2="92" y2="85" marker-end="url(#idcArrow)"/>
<line x1="66" y1="95" x2="92" y2="138" marker-end="url(#idcArrow)"/>
</g>
<rect x="95" y="12" width="238" height="38" rx="6" fill="#dbeafe" stroke="#2563eb"/>
<text x="103" y="27" font-size="11" font-weight="bold" fill="#1e3a8a">Classroom: Standard English</text>
<text x="103" y="42" font-size="11" fill="#1e3a8a">“Could I have a black coffee, please?”</text>
<rect x="95" y="66" width="238" height="38" rx="6" fill="#fef3c7" stroke="#d97706"/>
<text x="103" y="81" font-size="11" font-weight="bold" fill="#78350f">Hawker centre: Singlish</text>
<text x="103" y="96" font-size="11" fill="#78350f">“Uncle, one kopi-O kosong, can?”</text>
<rect x="95" y="120" width="238" height="38" rx="6" fill="#dcfce7" stroke="#16a34a"/>
<text x="103" y="135" font-size="11" font-weight="bold" fill="#14532d">Home: English with Tamil words</text>
<text x="103" y="150" font-size="11" fill="#14532d">“Paati, shall I help with the kolam?”</text>
</svg>`;

const DIAGRAM_ROUNDEL = `<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rhyme map of We Wear the Mask: three stanzas built on only two rhyme sounds, with the refrain We wear the mask closing stanzas two and three">
<text x="170" y="16" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">A rondeau: two rhymes and a refrain</text>
<text x="10" y="40" font-size="11" fill="#374151">Stanza 1</text>
<g font-size="11" text-anchor="middle" font-weight="bold">
<rect x="70" y="27" width="34" height="20" rx="4" fill="#bfdbfe"/><text x="87" y="41" fill="#1e3a8a">a</text>
<rect x="108" y="27" width="34" height="20" rx="4" fill="#bfdbfe"/><text x="125" y="41" fill="#1e3a8a">a</text>
<rect x="146" y="27" width="34" height="20" rx="4" fill="#fed7aa"/><text x="163" y="41" fill="#7c2d12">b</text>
<rect x="184" y="27" width="34" height="20" rx="4" fill="#fed7aa"/><text x="201" y="41" fill="#7c2d12">b</text>
<rect x="222" y="27" width="34" height="20" rx="4" fill="#bfdbfe"/><text x="239" y="41" fill="#1e3a8a">a</text>
</g>
<text x="10" y="82" font-size="11" fill="#374151">Stanza 2</text>
<g font-size="11" text-anchor="middle" font-weight="bold">
<rect x="70" y="69" width="34" height="20" rx="4" fill="#bfdbfe"/><text x="87" y="83" fill="#1e3a8a">a</text>
<rect x="108" y="69" width="34" height="20" rx="4" fill="#bfdbfe"/><text x="125" y="83" fill="#1e3a8a">a</text>
<rect x="146" y="69" width="34" height="20" rx="4" fill="#fed7aa"/><text x="163" y="83" fill="#7c2d12">b</text>
<rect x="184" y="69" width="110" height="20" rx="4" fill="#1f2937"/><text x="239" y="83" fill="#ffffff">We wear the mask.</text>
</g>
<text x="10" y="124" font-size="11" fill="#374151">Stanza 3</text>
<g font-size="11" text-anchor="middle" font-weight="bold">
<rect x="70" y="111" width="34" height="20" rx="4" fill="#bfdbfe"/><text x="87" y="125" fill="#1e3a8a">a</text>
<rect x="108" y="111" width="34" height="20" rx="4" fill="#bfdbfe"/><text x="125" y="125" fill="#1e3a8a">a</text>
<rect x="146" y="111" width="34" height="20" rx="4" fill="#fed7aa"/><text x="163" y="125" fill="#7c2d12">b</text>
<rect x="184" y="111" width="34" height="20" rx="4" fill="#fed7aa"/><text x="201" y="125" fill="#7c2d12">b</text>
<rect x="222" y="111" width="34" height="20" rx="4" fill="#bfdbfe"/><text x="239" y="125" fill="#1e3a8a">a</text>
<rect x="260" y="111" width="74" height="20" rx="4" fill="#1f2937"/><text x="297" y="125" fill="#ffffff">REFRAIN!</text>
</g>
<text x="10" y="160" font-size="11" fill="#374151">a = lies / eyes / sighs / arise …   b = guile / smile / while / vile …</text>
<text x="10" y="178" font-size="11" fill="#374151">The tight, repeating pattern traps the speaker, like the mask itself.</text>
</svg>`;

const DIAGRAM_ZOOM = `<svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Connotation web for the word mask: disguise, performance, protection, lies, a fixed smile with no feeling, and something that can be taken off">
<g stroke="#a8a29e" stroke-width="1.5">
<line x1="170" y1="95" x2="65" y2="30"/><line x1="170" y1="95" x2="275" y2="30"/>
<line x1="170" y1="95" x2="55" y2="95"/><line x1="170" y1="95" x2="285" y2="95"/>
<line x1="170" y1="95" x2="65" y2="160"/><line x1="170" y1="95" x2="275" y2="160"/>
</g>
<g font-size="11" text-anchor="middle">
<rect x="10" y="18" width="110" height="24" rx="12" fill="#e0f2fe" stroke="#0284c7"/><text x="65" y="34" fill="#0c4a6e">disguise, hiding</text>
<rect x="220" y="18" width="110" height="24" rx="12" fill="#e0f2fe" stroke="#0284c7"/><text x="275" y="34" fill="#0c4a6e">theatre, a role</text>
<rect x="2" y="83" width="106" height="24" rx="12" fill="#e0f2fe" stroke="#0284c7"/><text x="55" y="99" fill="#0c4a6e">protection, shield</text>
<rect x="232" y="83" width="106" height="24" rx="12" fill="#e0f2fe" stroke="#0284c7"/><text x="285" y="99" fill="#0c4a6e">lies, deceit</text>
<rect x="10" y="148" width="110" height="24" rx="12" fill="#e0f2fe" stroke="#0284c7"/><text x="65" y="164" fill="#0c4a6e">frozen smile</text>
<rect x="220" y="148" width="110" height="24" rx="12" fill="#e0f2fe" stroke="#0284c7"/><text x="275" y="164" fill="#0c4a6e">can be taken off</text>
</g>
<ellipse cx="170" cy="95" rx="42" ry="24" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<text x="170" y="100" font-size="14" font-weight="bold" text-anchor="middle" fill="#78350f">mask</text>
<text x="170" y="198" font-size="11" text-anchor="middle" fill="#374151">Effect: the smile is a survival strategy, not happiness.</text>
</svg>`;

const DIAGRAM_VENN = `<svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram comparing We Wear the Mask and Half-Caste: differences on each side and shared features in the overlap">
<circle cx="130" cy="112" r="88" fill="#bfdbfe" fill-opacity="0.6" stroke="#2563eb"/>
<circle cx="230" cy="112" r="88" fill="#fecaca" fill-opacity="0.6" stroke="#dc2626"/>
<text x="95" y="16" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e3a8a">We Wear the Mask</text>
<text x="268" y="16" font-size="12" font-weight="bold" text-anchor="middle" fill="#7f1d1d">Half-Caste</text>
<g font-size="11" text-anchor="middle" fill="#1e3a8a">
<text x="88" y="80">hides pain</text><text x="88" y="100">“we”: collective</text><text x="88" y="120">rondeau form</text><text x="88" y="140">Standard English</text>
</g>
<g font-size="11" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="180" y="80">prejudice</text><text x="180" y="100">repetition</text><text x="180" y="120">questions</text><text x="180" y="140">pride</text>
</g>
<g font-size="11" text-anchor="middle" fill="#7f1d1d">
<text x="272" y="80">confronts</text><text x="272" y="100">“I” and “yu”</text><text x="272" y="120">free verse</text><text x="272" y="140">Creole spelling</text>
</g>
</svg>`;

export const identityCulturePoetry: Topic = {
  id: "identity-culture-poetry",
  title: "Poems of Identity & Culture",
  subject: "Poetry",
  icon: "🌏",
  summary: "Language, belonging, heritage and the self in poetry.",
  intro:
    "Who are you, and who decides? The poems in this unit ask that question through grandmothers’ languages, market stalls, migrant journeys, masks and mother tongues. You will learn to read how poets build identity into the very shape and sound of a poem — and to write and speak about it with confidence, comparing poems and even writing your own.",

  guide: [
    {
      id: "identity-themes",
      heading: "What are poems of identity and culture about?",
      discovery: {
        problem:
          "Without using your name, write five different answers to the question ‘Who are you?’ Then sort them: which answers were about a place, a language, your family, what you believe, or how other people see you?",
        idea:
          "Identity is not one thing — it is made of layers. Some layers are given to you (where you were born, your family’s language), some you choose (your values, your friends), and some are pushed onto you by other people (labels, stereotypes). Almost every poem in this unit is about the tension between these layers: inside versus outside, here versus there, the old language versus the new.",
      },
      body:
        "**Identity** is your sense of who you are. **Culture** is the shared way of life of a group: its languages, food, faith, festivals, clothes, stories and manners. **Heritage** is what is handed down to you from earlier generations. Poems of identity and culture explore how these fit together — and what happens when they do not.\n\nAn identity anthology usually returns to the same big **themes** (the central ideas a text explores). Learn them as a set, because exam questions often ask you to trace one theme across two poems:\n\n- **Language and identity** — a mother tongue, a dialect or an accent as part of the self (Sujata Bhatt, *Search For My Tongue*).\n- **Heritage and roots** — the pull of a family’s homeland (Moniza Alvi, *Presents from my Aunts in Pakistan*).\n- **Belonging and displacement** — feeling at home, or out of place. **Displacement** means being moved, or feeling moved, away from where you belong (Grace Nichols, *Island Man*).\n- **Migration** — journeys between countries and the welcome or hostility at the end (Emma Lazarus, *The New Colossus*).\n- **Dual or hybrid identity** — belonging to two cultures at once. **Hybrid** means a mix of two things.\n- **Family memory** — grandparents, photographs, recipes and objects that carry the past.\n- **Prejudice and pride** — being judged by others, and answering back (John Agard, *Half-Caste*; Paul Laurence Dunbar, *We Wear the Mask*).\n- **Finding your voice** — claiming the right to tell your own story (Agard, *Checking Out Me History*).\n\nThe poets are often writing from experience. Bhatt was born in India and lives in Germany; Agard and Nichols grew up in Guyana and moved to Britain; Alvi was born in Pakistan and raised in England. Knowing a poet’s background is useful **context** (the situation a text was written in) — but always use it to explain the poem, not instead of the poem.",
      diagram: DIAGRAM_WEB,
      diagramCaption:
        "Identity has many strands. Most poems in this unit pull on two or three at once — and show the strain when they pull in different directions.",
      keyPoints: [
        "Identity = who you are; culture = a group’s shared way of life; heritage = what is passed down.",
        "Core themes: language, heritage, belonging and displacement, migration, hybrid identity, family memory, prejudice and pride, finding your voice.",
        "Use a poet’s background as context to explain the poem, never as a replacement for analysing it.",
      ],
      thinkDeeper:
        "Is identity something you discover (it was always there) or something you build (you make it as you go)? Pick one poem from this unit and argue which view the poet seems to hold.",
    },
    {
      id: "language-identity",
      heading: "Language as identity: tongues, dialect and code-switching",
      discovery: {
        problem:
          "Read these two lines aloud: (1) ‘Could I please have a black coffee without sugar?’ (2) ‘Uncle, one kopi-O kosong, can?’ Both ask for the same drink. Which tells you more about the speaker — where they are, who they are with, and how they feel?",
        idea:
          "Line 2 places the speaker instantly: Singapore, a hawker centre, a relaxed relationship with the stall-holder (‘Uncle’), a shared local code. Language does not just carry information — it carries belonging. That is why poets of identity so often write in dialect, mix languages or put another script on the page.",
      },
      body:
        "Your **mother tongue** is the first language you learn at home. For many people in this unit’s poems, it is not the language of school, work or the country they now live in — and the poems ask what happens to the self when one language takes over from another.\n\nKey terms:\n\n- **Standard English** — the form of English used in formal writing and most exams, with agreed grammar and spelling.\n- **Dialect** — a variety of a language with its own words and grammar, linked to a place or community (e.g. Caribbean Creole, Singlish).\n- **Non-standard / phonetic spelling** — spelling words as they sound in an accent, e.g. Agard’s ‘Explain yuself’ in *Half-Caste*.\n- **Code-switching** — moving between two languages or dialects, sometimes within a single sentence, depending on who you are talking to.\n- **Creole** — a full language that develops when two or more languages mix over generations (many Caribbean Creoles mix English with West African languages).\n\n**Sujata Bhatt’s *Search For My Tongue*** turns the word ‘tongue’ into an **extended metaphor** (a comparison developed across a whole poem). The speaker fears that if you have two tongues, your mother tongue would rot and die while you speak a foreign one. In the middle of the poem, lines in **Gujarati script** appear on the page, with a guide to how they sound. An English-only reader cannot read them — so for a moment *we* are the outsiders. Then the mother tongue grows back in her dreams, like a plant: ‘a stump of a shoot’ that finally ‘blossoms out of my mouth’.\n\n**John Agard** writes in **Caribbean Creole spelling** (‘wha yu mean’) to insist that his voice does not need ‘correcting’ into Standard English. The spelling makes the reader hear his accent — a political choice as much as a sound effect.\n\nIn the original poem below, a Singaporean speaker defends **Singlish** against a cousin who calls it ‘broken English’. Notice how the poem itself code-switches between Singlish dialogue and Standard English narration.",
      passage: HAWKER,
      diagram: DIAGRAM_SWITCH,
      diagramCaption:
        "Code-switching: the same person uses different ‘codes’ in different places — and each code carries a different kind of belonging.",
      keyPoints: [
        "Dialect, non-standard spelling and mixed languages show a speaker’s identity and community on the page.",
        "Code-switching = moving between languages or dialects depending on situation and audience.",
        "When poets print a language the reader cannot read (Bhatt’s Gujarati), they make the reader feel like an outsider.",
      ],
      thinkDeeper:
        "The cousin in ‘Hawker Centre, 7 p.m.’ calls Singlish ‘broken English’; the speaker calls it ‘mended’. Which word do you think is more accurate — and does it matter who gets to decide what counts as ‘proper’ English?",
    },
    {
      id: "heritage-family",
      heading: "Heritage, roots and family memory",
      discovery: {
        problem:
          "Think of one object in your home that came from an older relative — a piece of jewellery, a recipe, a photograph. Write three words describing what it looks like, then three words describing what it means to you.",
        idea:
          "Your first list is concrete (you can see and touch it); your second is abstract (ideas and feelings). Poets use objects in exactly this way: a **symbol** is a concrete thing that stands for an abstract idea. A bangle, a kolam, a salwar kameez — each becomes a way of holding heritage in your hands.",
      },
      body:
        "**Heritage** is what is passed down; **roots** is the metaphor poets use for it — something underground that feeds you, which you cannot always see. Poems about heritage often hinge on a **symbolic object** or a **family member** who stands for the old country.\n\n**Moniza Alvi’s *Presents from my Aunts in Pakistan*** centres on clothes sent to a girl growing up in England: a salwar kameez ‘peacock-blue’, ‘candy-striped glass bangles’. The girl admires them but feels ‘alien in the sitting-room’ wearing them and longs for ‘denim and corduroy’. The clothes symbolise a heritage she loves but cannot quite wear comfortably. By the end she pictures herself ‘of no fixed nationality’ — a phrase that sounds like an official form and captures her in-between identity.\n\n**Sarojini Naidu’s *In the Bazaars of Hyderabad*** (1912) celebrates Indian culture through a market. Each stanza asks a group of traders ‘What do you …?’ and they answer with lists of rich goods: ‘Turbans of crimson and silver’, ‘Saffron and lentil and rice’. Written while India was under British rule, the poem’s pride in Indian craft, colour and music can be read as a quiet assertion of cultural confidence. Its final stanza moves from a bridegroom’s crown to ‘the sleep of the dead’ — the market contains a whole human life.\n\nIn the original poem below, a speaker who cannot fully speak her grandmother’s Tamil tries one sentence — and is rewarded. Notice how **similes** (comparisons using ‘like’ or ‘as’) turn language into physical things: rivers, rain, a door, a bangle.",
      passage: PAATI,
      keyPoints: [
        "Heritage poems often turn on a symbolic object (clothes, jewellery, food) or a family member.",
        "Alvi’s clothes show a heritage admired but not fully ‘worn’; Naidu’s market shows a culture proudly celebrated.",
        "Track how the speaker’s feelings about heritage change from the start of the poem to the end.",
      ],
      thinkDeeper:
        "In ‘In Paati’s Language’ the speaker’s clumsy sentence becomes ‘a bangle / she had given me years ago’. Why might the poet compare language to jewellery rather than, say, a tool? What does the comparison suggest about how heritage is passed on?",
    },
    {
      id: "belonging-displacement",
      heading: "Belonging, migration and displacement",
      discovery: {
        problem:
          "Close your eyes and name one sound that means ‘home’ to you, and one that means ‘away’. Now imagine waking up in a new country still hearing the ‘home’ sound in your head. What would the moment of waking feel like?",
        idea:
          "That gap between the dream-world and the real one is exactly the structure of Grace Nichols’s *Island Man*. Migration poems often use **contrast** — two places, two soundscapes, two selves — and they place the reader in the uncomfortable space between them.",
      },
      body:
        "**Migration** is moving from one country to live in another. A **migrant** may feel **displaced** (out of place) or may slowly build **belonging** (feeling accepted and at home). Many poems capture the in-between stage.\n\n**Grace Nichols’s *Island Man*** follows a Caribbean man in London who wakes each morning to ‘the sound of the sea’ in his head — the ‘blue surf’ of his ‘emerald island’ — before the noise of traffic on the North Circular road drags him back to ‘Another London day’. The poem contrasts warm, colourful Caribbean images with the ‘grey metallic’ city. Its lines drift across the page without punctuation, like waves or like a mind half-asleep.\n\nIn ***Hurricane Hits England***, Nichols imagines a Caribbean-born woman during the great storm that struck England in 1987. The hurricane, a familiar force from ‘home’, arrives in her new country; she calls on it (‘Talk to me Huracan’) and ends with the realisation that ‘the earth is the earth is the earth’ — she can belong in both places.\n\n**Emma Lazarus’s *The New Colossus*** (1883) speaks from the receiving side. The Statue of Liberty becomes ‘Mother of Exiles’, welcoming ‘your tired, your poor, / Your huddled masses yearning to breathe free’. It is a rare migration poem of pure welcome — which is why it is still quoted in debates about immigration today.\n\nA **third culture kid** is a child who grows up outside their parents’ home culture, often moving between countries. Many students at international schools in Singapore are exactly this — and in the original poem below, the simple question ‘Where are you from?’ becomes complicated.",
      passage: FROM,
      keyPoints: [
        "Migration poems often contrast two places through imagery, sound and colour.",
        "Displacement = feeling out of place; belonging = feeling accepted and at home.",
        "Look at where a poem ends: does the speaker reach belonging, stay divided, or redefine ‘home’?",
      ],
      thinkDeeper:
        "In ‘Where Are You From?’ the speaker says ‘Maybe I am the gap’. Is being ‘the gap’ presented as a loss, a strength, or both? Find two details that support your answer.",
    },
    {
      id: "prejudice-pride",
      heading: "Prejudice, masks and pride",
      discovery: {
        problem:
          "Read the first line of Dunbar’s poem: ‘We wear the mask that grins and lies’. Before reading on, jot down: who might ‘we’ be? Why would anyone wear a mask that grins? What is behind it?",
        idea:
          "The mask is a **metaphor** for the smiling, cheerful face that people facing prejudice may feel forced to show to survive. Dunbar, the son of formerly enslaved parents, writes for a whole community (‘we’) whose pain the world refuses to see. The grin is not happiness — it is armour.",
      },
      body:
        "**Prejudice** is judging someone unfairly, often because of their race, religion or background. **Racism** is prejudice based on race. Poems in this unit answer prejudice in very different ways — by hiding, by mocking, by educating and by protesting.\n\n**Paul Laurence Dunbar’s *We Wear the Mask*** (1895) speaks for Black Americans after slavery. The mask ‘grins and lies’ (**personification** — giving human actions to an object), hiding ‘torn and bleeding hearts’. The world sees only smiles; God alone hears ‘our cries’. The poem is a **rondeau**, a strict French form (see the form section), and its refrain ‘We wear the mask’ keeps returning like the mask itself.\n\n**John Agard’s *Half-Caste*** takes the offensive label ‘half-caste’ (once used for people of mixed race) and pushes its logic until it collapses. If mixing makes you ‘half’, is Picasso’s painting half? Is English weather half? Is a Tchaikovsky symphony, played on black and white keys, half? He ends by inviting the listener to come back with ‘de whole of yu eye’ and hear the other half of his story — the prejudice belongs to the listener, not to him.\n\nIn ***Checking Out Me History***, Agard criticises the **Eurocentric** history (focused on Europe) he was taught in Guyana: 1066, Columbus, Florence Nightingale, nursery rhymes — but not Toussaint L’Ouverture, Nanny of the Maroons or Mary Seacole. The refrain ‘Dem tell me’ shows who controlled his education; the final line, ‘I carving out me identity’, shows him taking that control back.\n\nTatamkhulu Afrika’s ***Nothing’s Changed*** returns to District Six in Cape Town, flattened under apartheid, and finds a smart new inn that no sign marks as whites-only — ‘but we know where we belong’. His anger is physical: his ‘hands burn’ for ‘a stone, a bomb’. Niyi Osundare’s ***Not My Business*** shows a speaker who ignores the arrests of his neighbours as long as no one takes ‘the yam / From my savouring mouth’ — until they come for him.",
      passage: MASK,
      keyPoints: [
        "Dunbar hides pain behind a mask; Agard mocks and confronts prejudice; Afrika protests; Osundare warns against silence.",
        "Labels (like ‘half-caste’) are themselves a form of prejudice that poems can take apart.",
        "Pride often appears at the end of these poems: the speaker reclaims their identity on their own terms.",
      ],
      thinkDeeper:
        "Dunbar’s speakers hide their pain; Agard’s speaker refuses to. Which response to prejudice do you find more powerful in a poem — and is ‘hiding’ ever a form of strength?",
    },
    {
      id: "form-voice",
      heading: "How form shows identity: refrains, ‘you’ and the shape on the page",
      discovery: {
        problem:
          "Read Dickinson’s poem below aloud twice: once ignoring the dashes, once pausing at every dash. Which reading sounds more like a real, slightly breathless person whispering a secret to you?",
        idea:
          "The dashes create **caesura** (pauses inside lines) that make the voice hesitant, intimate and conspiratorial. Form is not decoration — the way a poem is built on the page shapes how we hear the voice, and the voice is the speaker’s identity.",
      },
      body:
        "**Form** is the overall type and shape of a poem; **structure** is how it is organised and how it moves from start to end. In identity poems, the form often *is* the message.\n\n- **Refrain** — a line or phrase repeated through a poem. Dunbar’s ‘We wear the mask’ returns like a burden the speakers cannot put down; Agard’s ‘Dem tell me’ hammers home how history was imposed on him.\n- **Anaphora** — repeating the same word at the start of several lines: Tagore’s ‘Where … / Where … / Where …’ builds a vision brick by brick.\n- **Second person (‘you’)** — direct address pulls the reader in or confronts them. Bhatt begins ‘You ask me what I mean’; Agard demands ‘Explain yuself’; Dickinson whispers ‘Who are you?’. Ask: who is the ‘you’ — a friend, a critic, the reader, a whole society?\n- **Rhetorical question** — a question asked for effect, not for an answer.\n- **Fixed forms** — Lazarus uses a **Petrarchan sonnet** (14 lines: an eight-line octave and six-line sestet, with a turn or **volta** between them). Dunbar uses a **rondeau** (only two rhyme sounds plus a refrain). Strict forms can suggest control, tradition or entrapment.\n- **Free verse** — no regular rhyme or metre. Agard, Nichols and Bhatt use it, often without standard punctuation, to make the voice sound natural, spoken and free of ‘rules’ imposed by others.\n- **Scripts and layout on the page** — Bhatt’s Gujarati script, Nichols’s drifting indented lines, Agard’s missing full stops: the visual shape tells us something before we read a word.\n- **Enjambment** — a sentence running on from one line to the next without a pause; **end-stopped** lines finish with punctuation.\n\nIn Dickinson’s poem below, the speaker proudly chooses to be ‘Nobody’ and mocks the ‘Somebody’ who croaks their own name like a frog to ‘an admiring Bog’. Identity here is private and chosen, not public and performed.",
      passage: NOBODY,
      diagram: DIAGRAM_ROUNDEL,
      diagramCaption:
        "Dunbar’s rondeau uses only two rhyme sounds and returns to its refrain: a tight, looping form that mirrors the mask the speakers cannot remove.",
      keyPoints: [
        "Refrain, anaphora and direct address (‘you’) are key tools for voicing identity.",
        "Strict forms (sonnet, rondeau) can suggest control or entrapment; free verse can suggest freedom and a natural speaking voice.",
        "Always ask WHY the poet chose the form, not just WHAT it is.",
      ],
      thinkDeeper:
        "Agard writes in free verse with Creole spelling; Dunbar writes a strict rondeau in Standard English. Both are responding to prejudice. Why might a poet choose a traditional European form to protest — and why might another poet reject such forms entirely?",
    },
    {
      id: "connotation-zoom",
      heading: "Zooming in: connotation and the power of one word",
      discovery: {
        problem:
          "Lazarus could have written ‘your crowded masses’. Instead she wrote ‘your huddled masses’. Write down every picture and feeling ‘huddled’ gives you that ‘crowded’ does not.",
        idea:
          "‘Crowded’ only tells us there are many people. ‘Huddled’ suggests cold, fear, poverty and people pressing together for warmth and protection — it makes us pity them and want to help. That extra layer of meaning is **connotation**, and examiners reward students who zoom in on single words like this.",
      },
      body:
        "**Denotation** is a word’s dictionary meaning. **Connotation** is the set of ideas, feelings and associations a word carries beyond that meaning. ‘Home’ and ‘house’ denote similar things; ‘home’ connotes warmth, family and belonging.\n\nTop analysis zooms in on a single word and unpacks it in four steps (**D-C-E-L**):\n\n1. **Denotation** — what does the word literally mean here?\n2. **Connotations** — what does it suggest? List two or three associations.\n3. **Effect** — what does it make the reader think, feel or picture?\n4. **Link** — how does it connect to the poem’s theme or the poet’s purpose?\n\n**Worked example — ‘narrow domestic walls’ (Tagore).** *Domestic* denotes the home; *narrow* denotes small width. But the connotations of ‘narrow’ include narrow-minded, mean and restrictive, and ‘walls’ suggests barriers that divide people. Together they suggest that prejudices learned at home — caste, religion, region — split the world into ‘fragments’. The effect is to make division seem small and petty compared with the open ‘heaven of freedom’ at the end, supporting Tagore’s vision of a united, open-minded India.\n\nGood words to zoom in on in this unit: ‘mask’, ‘guile’ and ‘vile’ (Dunbar); ‘huddled’, ‘refuse’ and ‘Mother’ (Lazarus); ‘tongue’, ‘rot’ and ‘blossoms’ (Bhatt); ‘alien’ (Alvi); ‘mended’ (Hawker Centre); ‘fragments’ and ‘awake’ (Tagore).",
      passage: TAGORE,
      diagram: DIAGRAM_ZOOM,
      diagramCaption:
        "Zooming in on ‘mask’: each connotation opens a new reading, and together they show why the grin is protection rather than joy.",
      keyPoints: [
        "Denotation = dictionary meaning; connotation = associations and feelings.",
        "Use D-C-E-L: Denotation, Connotations, Effect, Link to theme.",
        "Choose words that are surprising or loaded — and explain why that word, not a synonym.",
      ],
      thinkDeeper:
        "Lazarus calls the migrants ‘wretched refuse’. ‘Refuse’ means rubbish. Is the Statue insulting the migrants, or quoting how the ‘ancient lands’ see them? How does your answer change the meaning of the poem?",
    },
    {
      id: "comparing-poems",
      heading: "Comparing two poems: message and method",
      discovery: {
        problem:
          "Here are two sentences. A: ‘Dunbar writes about hiding pain. Agard writes about the term half-caste.’ B: ‘While Dunbar’s speakers hide their pain behind a smiling mask, Agard’s speaker refuses to hide at all, confronting the listener directly.’ Which is a real comparison — and what words make it so?",
        idea:
          "Sentence B compares in the same sentence, using a **comparative connective** (‘While’) and a precise shared idea (how each speaker responds to prejudice). Sentence A just describes two poems one after the other. Real comparison links the poems at every step.",
      },
      body:
        "A comparison question asks you to explore **similarities and differences** in two areas:\n\n- **Message** (what): the ideas and attitudes — e.g. both poems explore prejudice, but one hides pain and the other confronts it.\n- **Method** (how): the techniques — voice, form, structure, language, imagery, sound.\n\nThe best answers make an **integrated comparison**: each paragraph discusses both poems around one shared point, rather than writing all about Poem A and then all about Poem B (a **block comparison**, which tends to lose marks because the link comes too late).\n\n**Comparative connectives:**\n- *Similarity*: similarly, likewise, both, in the same way, equally.\n- *Difference*: whereas, while, however, in contrast, on the other hand, unlike.\n\n**A strong comparison paragraph:**\n1. A shared point of comparison (‘Both poets explore how prejudice forces people to hide their true selves…’).\n2. Evidence and analysis from Poem A.\n3. A connective and evidence and analysis from Poem B.\n4. A judgement: what is the key difference, and why might the poets differ (context, purpose)?\n\nGood pairings in this unit: *We Wear the Mask* and *Half-Caste* (responses to prejudice); *Island Man* and *Where Are You From?* (belonging and displacement); *Search For My Tongue* and *In Paati’s Language* (language and heritage); *In the Bazaars of Hyderabad* and *Hawker Centre, 7 p.m.* (celebrating culture through a market); *The New Colossus* and *Where the mind is without fear* (visions of an ideal nation).",
      diagram: DIAGRAM_VENN,
      diagramCaption:
        "A Venn diagram makes planning a comparison quick: differences go on each side, shared features in the overlap — then build each paragraph around one row.",
      keyPoints: [
        "Compare message (what) and method (how).",
        "Integrated comparison (both poems in every paragraph) beats block comparison.",
        "Use comparative connectives — whereas, similarly, in contrast — and end with a judgement.",
      ],
      thinkDeeper:
        "Is it more revealing to compare two poems that are very similar or two that are very different? Choose a pairing from this unit and argue your case.",
    },
    {
      id: "writing-speaking",
      heading: "Analysing, speaking and writing your own identity poem",
      body:
        "This unit is assessed in three ways: **analytical writing**, **verbal (spoken) analysis of a poem** and **writing your own poem with a commentary**. The same core skill sits under all three — explaining how a writer’s choices create meaning.\n\n**1. The analytical paragraph (PEEL).** **P**oint (a clear idea answering the question), **E**vidence (a short, embedded quotation), **E**xplain (technique, connotations, effect on the reader), **L**ink (back to the question and the poem’s theme or purpose). Embed quotations inside your own sentences: *Dunbar’s speakers smile ‘With torn and bleeding hearts’, a violent image that…*\n\n**2. Verbal analysis.** Speaking about a poem uses the same thinking, but your listener cannot re-read, so:\n- open with a one-sentence overview of the poem’s message;\n- **signpost** your ideas (‘My first point is…’, ‘Turning to the ending…’);\n- read short quotations aloud slowly, then pause before explaining them;\n- use the poem’s structure as your route (opening → turning point → ending);\n- finish with a personal response: what the poem made you realise.\n\n**3. Writing your own identity poem.** Start from something concrete: a sound, a food, an object, a phrase someone in your family says. Choose your form *for a reason* (a refrain for something that keeps returning; code-switching to show two worlds; free verse for a speaking voice). Then write a **commentary**: a short explanation of your choices and their intended effects, using the same terms you use for published poems.\n\n- *Commentary sentence starter*: ‘I chose to … in order to …, so that the reader …’\n\nAvoid **stereotypes** (over-simplified, fixed ideas about a group). The strongest identity poems are specific and personal — your Paati’s kolam, not ‘Indian culture’ in general.",
      keyPoints: [
        "PEEL: Point, Evidence (embedded), Explain (technique + connotation + effect), Link.",
        "In spoken analysis, signpost, read quotations slowly, and follow the poem’s structure.",
        "In your own poem, be specific and choose form deliberately; the commentary explains why.",
      ],
      thinkDeeper:
        "Is it possible to write a poem about your identity that is honest without being a stereotype of your culture? What choices would help — and what would hurt?",
    },
  ],

  passages: [MASK, BAZAARS, TAGORE, COLOSSUS, HAWKER],

  quoteBank: [
    {
      quote: "We wear the mask that grins and lies,",
      source: "Paul Laurence Dunbar, ‘We Wear the Mask’, line 1",
      analysis:
        "Personification makes the mask an active liar: it ‘grins’ (a wide, almost forced smile) and ‘lies’. The collective pronoun ‘We’ shows the speaker voicing a whole community. The opening sets up the gap between outer appearance and inner suffering that drives the poem.",
      themes: ["prejudice", "hidden identity", "community"],
    },
    {
      quote: "With torn and bleeding hearts we smile,",
      source: "Paul Laurence Dunbar, ‘We Wear the Mask’, line 4",
      analysis:
        "A violent image of injury (‘torn and bleeding’) is placed in the same line as ‘smile’, a stark contrast that exposes the cost of hiding pain. The heart symbolises emotion, so the damage is inner and invisible to the watching world.",
      themes: ["prejudice", "pain", "appearance vs reality"],
    },
    {
      quote: "We sing, but oh the clay is vile / Beneath our feet, and long the mile;",
      source: "Paul Laurence Dunbar, ‘We Wear the Mask’, lines 12–13",
      analysis:
        "‘Sing’ suggests outward cheerfulness, but the conjunction ‘but’ swings to the reality: the ground is ‘vile’ (foul) and the journey ‘long’. ‘Clay’ also echoes the Bible’s idea of humans made from clay, hinting at suffering that is bodily and lifelong. The road metaphor suggests the struggle for equality is far from over.",
      themes: ["prejudice", "endurance", "faith"],
    },
    {
      quote: "What do you sell, O ye merchants? / Richly your wares are displayed.",
      source: "Sarojini Naidu, ‘In the Bazaars of Hyderabad’, lines 1–2",
      analysis:
        "The question-and-answer structure turns the poem into a lively dialogue with the market, like a walk through its stalls. The archaic address ‘O ye’ gives the traders dignity and grandeur, and ‘Richly’ establishes a tone of admiration and cultural pride.",
      themes: ["culture", "pride", "heritage"],
    },
    {
      quote: "Sheets of white blossoms new-gathered / To perfume the sleep of the dead.",
      source: "Sarojini Naidu, ‘In the Bazaars of Hyderabad’, final two lines",
      analysis:
        "The final stanza moves from wedding garlands to funeral flowers, so the market contains the whole cycle of life. ‘Sleep of the dead’ is a gentle euphemism, and ‘perfume’ appeals to smell, making even death part of a beautiful, continuing culture.",
      themes: ["culture", "life cycle", "tradition"],
    },
    {
      quote: "Where the world has not been broken up into fragments by narrow domestic walls;",
      source: "Rabindranath Tagore, ‘Where the mind is without fear’, line 3",
      analysis:
        "The metaphor of ‘narrow domestic walls’ suggests that small-minded prejudices (of caste, religion or region) divide humanity into ‘fragments’, like something smashed. ‘Narrow’ connotes narrow-mindedness, so division is presented as petty compared with Tagore’s open, united vision.",
      themes: ["freedom", "unity", "nation"],
    },
    {
      quote: "Into that heaven of freedom, my Father, let my country awake.",
      source: "Rabindranath Tagore, ‘Where the mind is without fear’, final line",
      analysis:
        "After seven lines of anaphora (‘Where…’), the single sentence finally reaches its main verb in a prayer: ‘let my country awake’. Awakening is a metaphor for a nation rising from the ‘sleep’ of colonial rule and ‘dead habit’ into true, inner freedom.",
      themes: ["freedom", "nation", "faith"],
    },
    {
      quote: "Mother of Exiles. From her beacon-hand / Glows world-wide welcome;",
      source: "Emma Lazarus, ‘The New Colossus’, lines 6–7",
      analysis:
        "The metaphor ‘Mother of Exiles’ turns a metal statue into a caring parent who adopts the world’s homeless. ‘Beacon’ suggests guidance and safety, and the alliteration of ‘world-wide welcome’ makes the greeting sound warm and generous.",
      themes: ["migration", "belonging", "welcome"],
    },
    {
      quote: "Give me your tired, your poor, / Your huddled masses yearning to breathe free,",
      source: "Emma Lazarus, ‘The New Colossus’, lines 10–11",
      analysis:
        "A list of the powerless builds sympathy, and ‘huddled’ connotes cold, fear and poverty. ‘Yearning to breathe free’ makes freedom as essential as air. The imperative ‘Give me’ reverses expectations: America asks for the people other nations reject.",
      themes: ["migration", "freedom", "welcome"],
    },
    {
      quote: "I’m Nobody! Who are you? / Are you – Nobody – too?",
      source: "Emily Dickinson, ‘I’m Nobody! Who are you?’, lines 1–2",
      analysis:
        "The exclamation and direct question create an intimate, playful voice that pulls the reader into a secret friendship. Capitalised ‘Nobody’ turns being unknown into a proud identity, rejecting the idea that worth depends on fame.",
      themes: ["identity", "privacy", "voice"],
    },
    {
      quote: "‘a stump of a shoot’ … ‘it blossoms out of my mouth’",
      source: "Sujata Bhatt, ‘Search For My Tongue’ (short phrases only — copyrighted poem)",
      analysis:
        "The extended metaphor of the tongue as a plant moves from damage (‘stump’) to full flowering (‘blossoms’), showing that the mother tongue survives and regrows. The natural imagery suggests that heritage language is alive, rooted and impossible to kill completely.",
      themes: ["language", "heritage", "dual identity"],
    },
    {
      quote: "‘Explain yuself / wha yu mean’",
      source: "John Agard, ‘Half-Caste’ (short phrase only — copyrighted poem)",
      analysis:
        "Imperative and phonetic Caribbean spelling confront the listener directly, demanding they justify the label ‘half-caste’. Writing in his own voice rather than Standard English is itself an act of pride, refusing to be ‘corrected’.",
      themes: ["prejudice", "language", "pride"],
    },
    {
      quote: "‘I carving out me identity’",
      source: "John Agard, ‘Checking Out Me History’, final line (short phrase only — copyrighted poem)",
      analysis:
        "The metaphor of ‘carving’ suggests effort, strength and permanence — identity is shaped deliberately, like sculpture. The present participle (‘carving’) shows the process is ongoing, and the Creole grammar keeps the speaker’s own voice to the very end.",
      themes: ["finding your voice", "history", "pride"],
    },
    {
      quote: "This is not broken. / This is mended:",
      source: "Original poem ‘Hawker Centre, 7 p.m.’ (written for this app)",
      analysis:
        "Two short, parallel declarative sentences reverse the cousin’s insult. ‘Mended’ connotes care, repair and strength, presenting Singlish as a language skilfully stitched together from many cultures rather than a damaged version of English.",
      themes: ["language", "pride", "hybrid identity"],
    },
  ],

  modelWriting: [
    {
      title: "PEEL paragraph: Dunbar’s mask",
      task: "How does Dunbar present the effects of prejudice in ‘We Wear the Mask’?",
      text:
        "Dunbar presents prejudice as forcing a whole community to hide its suffering behind a false display of happiness. From the opening line, the speakers ‘wear the mask that grins and lies’; the personification makes the mask itself a liar, while the verb ‘grins’ suggests a smile that is too wide to be real — something fixed in place rather than felt. This contrast between appearance and reality becomes brutal in the image of smiling ‘With torn and bleeding hearts’, where violent physical language exposes pain the world never sees. Crucially, the pronoun is always ‘we’, not ‘I’: Dunbar, the son of formerly enslaved parents, is speaking for Black Americans in the 1890s, suggesting that this mask was not one person’s choice but a survival strategy forced on a people. The repeated refrain ‘We wear the mask’ reinforces this, returning at the end of the second and third stanzas as if the speakers can never take it off.",
      annotations: [
        "Point answers the question directly and names the key idea (hiding suffering).",
        "Quotations are short and embedded inside the student’s own sentences.",
        "Zooms in on single words (‘grins’, ‘we’) and names techniques (personification, contrast, refrain).",
        "Context (Dunbar’s background, 1890s America) is used to explain the pronoun choice, not bolted on.",
        "Final sentence links structure (the refrain) back to the theme of entrapment.",
      ],
    },
    {
      title: "Integrated comparison: two visions of welcome and belonging",
      task: "Compare how ‘The New Colossus’ and ‘Island Man’ present the experience of arriving in a new country.",
      text:
        "Both poems explore migration, but while Lazarus imagines the moment of arrival as a warm embrace, Nichols shows that, even years later, the migrant’s heart may never fully arrive. Lazarus personifies the Statue of Liberty as ‘Mother of Exiles’, a maternal metaphor that promises care and acceptance; her ‘world-wide welcome’ is generous, glowing and immediate. In contrast, Nichols’s Island Man wakes each morning to ‘the sound of the sea’ from his ‘emerald island’, and only reluctantly surfaces into ‘Another London day’. The vivid green of ‘emerald’ against the city’s ‘grey metallic’ noise suggests that London, however familiar, still feels cold beside his memories. The poets’ forms reinforce this difference: Lazarus’s controlled Petrarchan sonnet builds to a confident, rhyming declaration, whereas Nichols’s unpunctuated free verse drifts between dream and waking, mirroring a mind caught between two homes. Ultimately, Lazarus writes from the perspective of the welcoming nation, which may explain her optimism; Nichols writes from inside the migrant’s experience, revealing that a welcome at the door does not guarantee belonging.",
      annotations: [
        "Opens with a shared point and a clear difference in a single sentence (‘Both… but while…’).",
        "Every quotation from the copyrighted poem is a short phrase, embedded.",
        "Comparative connectives (‘In contrast’, ‘whereas’) keep both poems in play throughout.",
        "Compares method (form: sonnet vs free verse) as well as message.",
        "Ends with an evaluative judgement that explains WHY the poems differ (perspective).",
      ],
    },
    {
      title: "Own poem + commentary: ‘Two Spoons’",
      task: "Write a short poem about an aspect of your identity, then a commentary explaining your choices.",
      text:
        "Two Spoons\n\nAt school I eat with a spoon and fork,\nneat as a sentence with all its commas in.\nAt Paati’s, the spoon waits in the drawer\nand my right hand learns the rice again —\nwarm, then warmer, the way her stories are.\n\nTwo spoons, my mother jokes, for one mouth.\nI tell her one is for eating\nand one is for remembering.\nI never tell her which is which.\n\nCommentary: I chose to build the poem around one concrete detail — eating with cutlery at school and with my hand at my grandmother’s house — because a small, physical habit can show a big idea about having two cultures. The simile ‘neat as a sentence with all its commas in’ links school to rules and Standard English, while the repetition ‘warm, then warmer’ makes my grandmother’s home feel more and more intimate. I split the poem into two stanzas to mirror the two worlds. The final line is deliberately ambiguous so that the reader, like me, cannot neatly separate the two halves of my identity.",
      annotations: [
        "Starts from a specific, personal detail rather than a general statement about a culture — avoiding stereotype.",
        "Uses a clear technique in each part (simile, repetition, stanza structure, ambiguous ending).",
        "The commentary names techniques AND explains their intended effect on the reader.",
        "Commentary uses ‘I chose… because… so that…’ to show deliberate craft.",
      ],
    },
    {
      title: "Spoken analysis opening (verbal analysis)",
      task: "Give the first minute of a spoken analysis of ‘In the Bazaars of Hyderabad’.",
      text:
        "Today I’m going to talk about Sarojini Naidu’s ‘In the Bazaars of Hyderabad’, a poem published in 1912, when India was under British rule. In one sentence: it’s a celebration of Indian culture, told as a walk through a busy market. I’d like to make three points — about its structure, its sensory language, and its surprising ending.\n\nMy first point is about structure. Almost every stanza is built on a question and an answer. Listen: ‘What do you sell, O ye merchants?’ … and then the answer, ‘Turbans of crimson and silver’. It feels as if we are walking from stall to stall, asking questions — so the poem makes the reader a visitor, invited in. And that old-fashioned phrase, ‘O ye’, gives these ordinary traders real dignity, almost as if they were royalty.",
      annotations: [
        "Overview sentence first, so the listener knows where the talk is going.",
        "Signposting (‘My first point…’, three points announced) helps a listener who cannot re-read.",
        "Short quotations read aloud with a pause (‘Listen:’), then explained.",
        "Conversational but precise: technique (structure, archaic address) + effect.",
      ],
    },
  ],

  mnemonics: [
    {
      topic: "The five lenses of identity to look for in any poem",
      device: "PLACE",
      explanation:
        "Place (where the speaker is from / now lives), Language (mother tongue, dialect, code-switching), Ancestors (heritage, family memory), Community (belonging, or prejudice from others), Expression (finding a voice, pride). Run each poem through all five to find your best points.",
    },
    {
      topic: "Zooming in on a single word",
      device: "D-C-E-L: Dogs Chase Every Lizard",
      explanation:
        "Denotation (literal meaning), Connotations (associations), Effect (on the reader), Link (to theme or the poet’s purpose). Use it every time you write ‘the word X suggests…’.",
    },
    {
      topic: "What to compare in two poems",
      device: "Many Musicians Compose (Message, Methods, Context)",
      explanation:
        "Compare the Message (ideas and attitudes), the Methods (voice, form, structure, language, sound), then use Context to explain WHY the poets differ. Keep both poems in every paragraph.",
    },
    {
      topic: "Writing an analytical paragraph",
      device: "PEEL",
      explanation:
        "Point (answer the question), Evidence (short embedded quotation), Explain (technique, connotation, effect), Link (back to the question and theme).",
    },
  ],

  examMistakes: [
    "Quoting long chunks of a poem instead of short, embedded phrases — examiners reward precise selection, not copying.",
    "Feature-spotting (‘This is alliteration’) without explaining the effect on the reader or the link to identity.",
    "Treating the speaker as automatically the poet: say ‘the speaker’ unless you have good reason (and even then, be careful).",
    "Bolting on context (‘Agard was born in Guyana in 1949’) without using it to explain anything in the poem.",
    "Calling dialect or Creole spelling ‘bad grammar’ or ‘spelling mistakes’ rather than analysing why the poet chose it.",
    "In comparison answers, writing all about Poem A and then all about Poem B with no comparative connectives until the end.",
    "Ignoring the ending: many identity poems turn in the final lines (Agard’s ‘carving’, Bhatt’s ‘blossoms’), and missing the turn misses the message.",
    "Making sweeping or stereotyped claims about a whole culture (‘all Indian people…’) instead of discussing this speaker in this poem.",
  ],

  misconceptions: [
    {
      wrong: "Non-standard spelling in a poem means the poet could not spell properly.",
      right:
        "Poets like Agard choose phonetic spelling deliberately to capture an accent and voice, and to challenge the idea that Standard English is the only ‘correct’ way to speak.",
    },
    {
      wrong: "A poem about identity always ends with the speaker happily ‘finding themselves’.",
      right:
        "Many end in tension or ambiguity: Alvi’s girl is ‘of no fixed nationality’, and Island Man must still face ‘Another London day’. Look for what is unresolved.",
    },
    {
      wrong: "Code-switching shows someone is confused about who they are.",
      right:
        "Code-switching is a skill: fluently moving between languages for different audiences. In poems it often shows a rich, hybrid identity.",
    },
    {
      wrong: "Old poems written in Standard English and strict forms can’t be about protest or identity.",
      right:
        "Dunbar’s rondeau (1895) is a powerful protest about racism, and Naidu’s and Tagore’s poems (1912) express national and cultural pride under colonial rule.",
    },
    {
      wrong: "‘Culture’ just means festivals, food and costumes.",
      right:
        "Culture also includes language, values, manners, beliefs, humour and ways of thinking — the less visible things that shape identity, like Singlish particles or the way a grandmother calls you ‘kanna’.",
    },
  ],

  expertDebates: [
    {
      question: "Is the speaker of ‘We Wear the Mask’ defeated or defiant?",
      detail:
        "Some readers see the poem as a lament: the speakers are trapped, smiling while bleeding, with only God to hear them. Others argue the mask is a deliberate, intelligent strategy — the speakers choose what the world sees (‘let them only see us’), and the final exclamation mark sounds almost defiant. Your view will shape how you read the refrain.",
    },
    {
      question: "Does ‘Search For My Tongue’ celebrate having two languages or mourn the loss of one?",
      detail:
        "The poem begins with fear that the mother tongue will ‘rot and die’, but ends with it blossoming back. Some critics read it as a triumphant celebration of a bilingual identity; others note that the mother tongue only grows back overnight while the speaker dreams, suggesting the fear of loss is never fully overcome in waking life.",
    },
    {
      question: "Is ‘The New Colossus’ a description of America or a challenge to it?",
      detail:
        "Lazarus wrote of a welcoming ‘Mother of Exiles’ at a time when America was also passing laws to exclude some migrants (the Chinese Exclusion Act of 1882). Is the poem a celebration of what America was, or an ideal that holds the nation to account? It is still quoted on both sides of immigration debates today.",
    },
  ],

  realWorld: [
    {
      title: "Four official languages",
      detail:
        "Singapore has four official languages — English, Malay, Mandarin and Tamil — and its national anthem, ‘Majulah Singapura’, is sung in Malay. Many Singaporeans code-switch between several languages every day.",
      emoji: "🇸🇬",
    },
    {
      title: "The Singlish debate",
      detail:
        "Singapore’s government launched the Speak Good English Movement in 2000, while many writers and comedians proudly use Singlish as a marker of local identity. Is it ‘broken’ English or a creative, living dialect? It is the same argument Agard’s poetry makes about Caribbean English.",
      emoji: "🗣️",
    },
    {
      title: "Hawker culture recognised by UNESCO",
      detail:
        "In December 2020, Singapore’s hawker culture was added to UNESCO’s list of the Intangible Cultural Heritage of Humanity — official recognition that shared food, places and talk are part of who a people are.",
      emoji: "🍜",
    },
    {
      title: "A poem on a monument",
      detail:
        "Emma Lazarus’s ‘The New Colossus’ was placed on a plaque inside the Statue of Liberty’s pedestal in 1903, and its lines ‘Give me your tired, your poor’ are still quoted by politicians and protesters arguing about immigration.",
      emoji: "🗽",
    },
    {
      title: "A poet who wrote anthems",
      detail:
        "Rabindranath Tagore wrote the songs that became the national anthems of both India (‘Jana Gana Mana’) and Bangladesh (‘Amar Shonar Bangla’) — poetry shaping the identity of whole nations.",
      emoji: "🎶",
    },
    {
      title: "Third culture kids",
      detail:
        "The term ‘third culture kid’ was coined by the American sociologist Ruth Hill Useem in the 1950s. Today international schools are full of students who answer ‘Where are you from?’ with a list of countries.",
      emoji: "✈️",
    },
  ],

  flashcards: [
    { front: "Identity", back: "Your sense of who you are — shaped by language, family, place, values and how others see you." },
    { front: "Heritage", back: "Traditions, languages, objects and values passed down from earlier generations." },
    { front: "Code-switching", back: "Moving between two languages or dialects, depending on the situation or audience — sometimes within one sentence." },
    { front: "Dialect", back: "A variety of a language linked to a place or community, with its own words and grammar (e.g. Singlish, Caribbean Creole)." },
    { front: "Displacement", back: "Being moved, or feeling moved, away from where you belong." },
    { front: "Connotation", back: "The associations and feelings a word carries beyond its dictionary meaning (its denotation)." },
    { front: "Refrain", back: "A line or phrase repeated through a poem, e.g. ‘We wear the mask’ (Dunbar) or ‘Dem tell me’ (Agard)." },
    { front: "Anaphora", back: "Repeating a word at the start of successive lines, e.g. Tagore’s ‘Where…’." },
    { front: "‘Mother of Exiles’ — who and what?", back: "Emma Lazarus’s metaphor for the Statue of Liberty in ‘The New Colossus’ (1883): a caring, welcoming mother for migrants." },
    { front: "‘torn and bleeding hearts’ — which poem?", back: "Dunbar, ‘We Wear the Mask’ (1895): the hidden pain behind the smiling mask of Black Americans facing prejudice." },
    { front: "Which poem puts Gujarati script on the page?", back: "Sujata Bhatt, ‘Search For My Tongue’ — making English-only readers experience being outsiders." },
    { front: "What is the form of ‘The New Colossus’?", back: "A Petrarchan sonnet: an octave (8 lines) describing the statue, then a sestet (6 lines) in which she speaks." },
    { front: "What is the form of ‘We Wear the Mask’?", back: "A rondeau: 15 lines on only two rhyme sounds, with the opening words returning as a refrain." },
    { front: "Integrated comparison", back: "Discussing both poems in every paragraph around one shared point, using comparative connectives." },
    { front: "‘narrow domestic walls’ — which poem, what idea?", back: "Tagore, ‘Where the mind is without fear’: petty prejudices that split the world into fragments." },
    { front: "Third culture kid", back: "A child raised in a culture different from their parents’ home culture, often moving between countries." },
  ],

  mustKnow: [
    "Can you name the core themes of the anthology and match at least two poems to each?",
    "Can you explain how dialect, phonetic spelling, mixed languages and scripts on the page show identity?",
    "Can you zoom in on a single word using D-C-E-L and explain its connotations?",
    "Can you identify a refrain, anaphora, direct address, rhetorical question, sonnet, rondeau and free verse — and explain why a poet used them?",
    "Can you write a PEEL paragraph with short, embedded quotations and a link to theme?",
    "Can you use context to explain a poem (not just list facts about the poet)?",
    "Can you write an integrated comparison of two poems, covering message and method, with comparative connectives?",
    "Can you give a two-minute spoken analysis of a poem with an overview, signposting and a personal response?",
    "Can you write your own identity poem with specific, non-stereotyped details, plus a commentary explaining your choices?",
  ],

  videos: [
    { title: "Search For My Tongue — analysis", channel: "Mr Bruff", url: "https://www.youtube.com/results?search_query=mr+bruff+search+for+my+tongue+analysis" },
    { title: "Checking Out Me History — analysis", channel: "Mr Salles Teaches English", url: "https://www.youtube.com/results?search_query=mr+salles+checking+out+me+history" },
    { title: "Comparing poems — how to structure your answer", channel: "Stacey Reay", url: "https://www.youtube.com/results?search_query=stacey+reay+how+to+compare+poems" },
    { title: "Poems from other cultures", channel: "BBC Bitesize", url: "https://www.youtube.com/results?search_query=bbc+bitesize+poems+from+different+cultures" },
  ],

  quiz: {
    mcq: [
      {
        id: "idc-quiz-mcq-1",
        question: "What does the term ‘code-switching’ mean?",
        options: [
          "Writing a poem in a secret code that only some readers understand",
          "Changing the rhyme scheme halfway through a poem",
          "Moving between two languages or dialects depending on the situation or audience",
          "Translating a poem from one language into another",
        ],
        answerIndex: 2,
        hint: "Think about how you might speak differently to a teacher, a friend and a grandparent.",
        explanation:
          "Code-switching is moving between languages or dialects (e.g. Standard English at school, Singlish at a hawker centre). Translation (option D) is tempting but different: translating replaces one language with another, whereas code-switching mixes or alternates them in real use.",
        guideRef: "language-identity",
      },
      {
        id: "idc-quiz-mcq-2",
        extract: "We wear the mask that grins and lies,",
        question: "Which technique is used most clearly in this line from Dunbar’s ‘We Wear the Mask’?",
        options: ["Personification", "Onomatopoeia", "Oxymoron", "Hyperbole"],
        answerIndex: 0,
        hint: "Can a mask really do these things on its own?",
        explanation:
          "The mask ‘grins’ and ‘lies’ — human actions given to an object, which is personification. It is not an oxymoron (two contradictory words side by side, like ‘bitter sweet’); the contrast between smile and lie is an idea, not a two-word phrase.",
        guideRef: "prejudice-pride",
      },
      {
        id: "idc-quiz-mcq-3",
        extract: "A mighty woman with a torch, whose flame\nIs the imprisoned lightning, and her name\nMother of Exiles.",
        question: "What does the metaphor ‘Mother of Exiles’ suggest about the Statue of Liberty?",
        options: [
          "She is strict and will punish newcomers who break the rules.",
          "She was built by migrants who had been exiled from Greece.",
          "She guards America by keeping foreigners out.",
          "She offers migrants the care and protection of a parent.",
        ],
        answerIndex: 3,
        hint: "What do we expect from a mother?",
        explanation:
          "A mother cares for and protects her children, so the metaphor presents the statue as welcoming exiles as if adopting them. Option C is tempting because she is ‘mighty’ with a torch, but the poem rejects the conquering ‘brazen giant’ model: her power is used to welcome, not to repel.",
        guideRef: "belonging-displacement",
      },
      {
        id: "idc-quiz-mcq-4",
        question: "Which sentence is the best example of an integrated comparison?",
        options: [
          "‘Island Man’ is about London. ‘The New Colossus’ is about New York.",
          "While Lazarus presents arrival as a warm welcome, Nichols suggests that even years later the migrant’s heart remains elsewhere.",
          "Both poems are good poems that use lots of techniques to show their ideas.",
          "First I will write about ‘Island Man’, and then I will write about ‘The New Colossus’.",
        ],
        answerIndex: 1,
        hint: "Look for a comparative connective and a precise shared idea in one sentence.",
        explanation:
          "Option B links both poems in one sentence with the connective ‘While’ around a precise shared idea (arrival and belonging). Option A mentions both poems but simply places two facts side by side with no comparison or analysis.",
        guideRef: "comparing-poems",
      },
    ],
    qa: [
      {
        id: "idc-quiz-qa-1",
        question:
          "In ‘Search For My Tongue’, Sujata Bhatt describes the mother tongue regrowing as ‘a stump of a shoot’ that finally ‘blossoms out of my mouth’. Explain how she uses the tongue as an extended metaphor.",
        marks: 3,
        hint: "What two meanings does ‘tongue’ have? What is it compared to as the poem develops?",
        modelAnswer:
          "Bhatt plays on the double meaning of ‘tongue’ as both a body part and a language, so losing her mother tongue sounds as painful and physical as losing part of her body. She develops this into a plant metaphor: the tongue is first a damaged ‘stump of a shoot’, but it grows and ‘blossoms out of my mouth’, connoting new life and beauty. This extended metaphor suggests that her heritage language is alive and rooted in her, so even when it seems to die it grows back stronger, showing that her Gujarati identity cannot be destroyed.",
        markScheme: [
          { point: "Explains the double meaning of tongue (body part and language)", keywords: ["double meaning", "body part", "language", "mother tongue", "physical", "part of her body"] },
          { point: "Identifies the plant / growth imagery (stump, shoot, blossoms)", keywords: ["plant", "stump", "shoot", "blossom", "grow", "flower", "bud"] },
          { point: "Explains the effect: heritage/identity survives and regrows", keywords: ["survive", "cannot be destroyed", "grows back", "regrow", "alive", "stronger", "identity"] },
        ],
        commonError: "Calling it a simile, or explaining only the plant image without linking it to language and identity.",
        guideRef: "language-identity",
      },
      {
        id: "idc-quiz-qa-2",
        extract: "My cousin from London calls it broken English.\nListen again, I tell her.\nListen to the lah that softens an order into a favour,\nthe ah that shrugs at the end of a sentence,\nthe leh that leans on you like an old friend.",
        question: "How does the poet present Singlish positively in these lines from ‘Hawker Centre, 7 p.m.’? Refer to at least two techniques.",
        marks: 4,
        hint: "Look at the repeated imperative, and at how the particles are described as if they were people.",
        modelAnswer:
          "The poet challenges the cousin’s insult ‘broken English’ with the repeated imperative ‘Listen’, which commands both the cousin and the reader to pay closer attention, suggesting that Singlish only seems broken to someone who has not listened properly. The particles are then personified: the ‘lah’ ‘softens an order into a favour’ and the ‘ah’ ‘shrugs’, so tiny words are shown to carry real feeling and politeness. The simile ‘leans on you like an old friend’ makes Singlish sound warm, relaxed and loyal. Together these techniques present Singlish as a rich, emotional language that expresses belonging, not a mistake.",
        markScheme: [
          { point: "Comments on the repeated imperative ‘Listen’ / direct challenge", keywords: ["listen", "imperative", "command", "repetition", "repeated", "challenge"] },
          { point: "Identifies personification of the particles", keywords: ["personification", "personifies", "shrugs", "softens", "human"] },
          { point: "Analyses the simile ‘like an old friend’", keywords: ["simile", "old friend", "friend", "warm", "loyal", "comfort"] },
          { point: "Links to the idea of Singlish as expressive / a source of belonging, not broken", keywords: ["belonging", "not broken", "pride", "feeling", "emotion", "identity", "community"] },
        ],
        commonError: "Describing what Singlish is in general instead of analysing the poet’s techniques in these lines.",
        guideRef: "language-identity",
      },
      {
        id: "idc-quiz-qa-3",
        extract: "This debt we pay to human guile;\nWith torn and bleeding hearts we smile,",
        question: "What does the phrase ‘torn and bleeding hearts’ suggest about the speakers in Dunbar’s ‘We Wear the Mask’?",
        marks: 3,
        hint: "Think about the contrast with ‘smile’ in the same line, and what the heart symbolises.",
        modelAnswer:
          "The violent imagery of ‘torn and bleeding’ suggests the speakers are suffering deep emotional pain, as the heart symbolises feelings. This is placed in direct contrast with ‘we smile’ in the same line, which shows the gap between the cheerful appearance they show the world and the wounded reality inside. It suggests prejudice forces them to hide their suffering, making the reader realise how much pain lies behind the mask.",
        markScheme: [
          { point: "Identifies deep (emotional) pain / suffering", keywords: ["pain", "suffering", "hurt", "wounded", "injured", "anguish"] },
          { point: "Explains the heart as a symbol of emotion / violent imagery", keywords: ["heart", "emotion", "feelings", "violent", "imagery", "symbol"] },
          { point: "Notes the contrast with ‘smile’ / appearance versus reality", keywords: ["contrast", "smile", "appearance", "reality", "hide", "mask", "pretend"] },
        ],
        commonError: "Taking the image literally (they are physically injured) rather than as a metaphor for emotional pain.",
        guideRef: "prejudice-pride",
      },
      {
        id: "idc-quiz-qa-4",
        question: "Compare how ‘Island Man’ (Grace Nichols) and ‘The New Colossus’ (Emma Lazarus) present arriving in a new country. Use a short quotation from each.",
        marks: 4,
        hint: "One poem speaks from the welcoming country; the other from inside the migrant’s mind years later.",
        modelAnswer:
          "Both poems explore migration, but Lazarus presents arrival as an immediate, warm welcome, whereas Nichols suggests belonging may never be complete. Lazarus personifies the statue as ‘Mother of Exiles’, a caring parent offering ‘world-wide welcome’. In contrast, Nichols’s Island Man still wakes to the sound of his ‘emerald island’ and only reluctantly faces ‘Another London day’, so London feels grey and dull compared with his memories. The difference may come from perspective: Lazarus writes from the welcoming nation’s point of view, while Nichols writes from inside the migrant’s experience.",
        markScheme: [
          { point: "Valid quotation and comment from ‘The New Colossus’", keywords: ["mother of exiles", "welcome", "huddled", "golden door", "lamp", "beacon"] },
          { point: "Valid quotation and comment from ‘Island Man’", keywords: ["emerald", "london day", "sea", "surf", "grey", "north circular"] },
          { point: "Identifies the key difference (welcome vs lingering displacement)", keywords: ["whereas", "in contrast", "however", "while", "unlike", "difference"] },
          { point: "Explains a reason or wider point (perspective / form / similarity of theme)", keywords: ["perspective", "point of view", "both", "similarly", "sonnet", "free verse"] },
        ],
        commonError: "Writing two separate mini-essays with no comparative connectives, or quoting long lines from ‘Island Man’ instead of short phrases.",
        guideRef: "comparing-poems",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "idc-mcq-p1",
        title: "MCQ Paper 1",
        passage: MASK,
        questions: [
          {
            id: "idc-mcq-p1-q01",
            question: "In ‘We Wear the Mask’, who is the ‘We’ most likely to represent?",
            options: [
              "Dunbar and his immediate family only",
              "Black Americans facing prejudice in Dunbar’s time",
              "A company of actors preparing for a play",
              "Everyone who reads the poem",
            ],
            answerIndex: 1,
            hint: "Think about Dunbar’s background and when the poem was written (1895).",
            explanation:
              "Dunbar, the son of formerly enslaved parents, uses ‘We’ to speak for Black Americans who had to hide their pain to survive prejudice. The actors option is tempting because masks suggest theatre, but the mask here is a metaphor, not a literal stage prop.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-mcq-p1-q02",
            extract: "This debt we pay to human guile;",
            question: "What does ‘guile’ mean?",
            options: ["Kindness", "Laughter", "The law", "Deceit or trickery"],
            answerIndex: 3,
            hint: "The mask ‘lies’; what quality in other people might it be responding to?",
            explanation:
              "‘Guile’ means cunning deceit. The speakers ‘pay’ the debt of wearing a mask because the world around them is deceitful and cruel. ‘The law’ may tempt you because ‘debt’ sounds legal, but guile is about trickery, not legal rules.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-mcq-p1-q03",
            question: "What is the form of ‘We Wear the Mask’?",
            options: ["A rondeau", "A Petrarchan sonnet", "A haiku", "Free verse"],
            answerIndex: 0,
            hint: "Count the lines and the rhyme sounds, and notice the repeated opening words.",
            explanation:
              "It is a rondeau: 15 lines built on just two rhyme sounds, with the opening words (‘We wear the mask’) returning as a refrain. A sonnet is tempting because it is a famous fixed form, but a sonnet has 14 lines and no refrain.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p1-q04",
            question: "The words ‘We wear the mask’ return at the end of stanzas two and three. What is this repetition called?",
            options: ["Caesura", "Enjambment", "A refrain", "A volta"],
            answerIndex: 2,
            hint: "Songs have this too — a repeated part.",
            explanation:
              "A line or phrase repeated through a poem is a refrain. A volta is a turn in argument (as in a sonnet), not a repeated phrase.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p1-q05",
            extract: "Why should the world be over-wise,\nIn counting all our tears and sighs?",
            question: "What is the purpose of this question?",
            options: [
              "It asks the world to help count the speakers’ tears.",
              "It shows the speakers are confused about why they are sad.",
              "It is a rhetorical question suggesting the world has no right to pry into their suffering.",
              "It asks God to forgive the world for its cruelty.",
            ],
            answerIndex: 2,
            hint: "Does the speaker expect an answer? What does ‘over-wise’ suggest about the world?",
            explanation:
              "This rhetorical question implies that the world should not be allowed to know (‘count’) their private pain — the mask protects them. Option A takes the question literally; the speakers actually want to keep their tears hidden.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p1-q06",
            extract: "We smile, but, O great Christ, our cries\nTo thee from tortured souls arise.",
            question: "Who is ‘thee’ in these lines?",
            options: ["The reader", "Christ (God)", "The world", "The mask"],
            answerIndex: 1,
            hint: "Look at who is addressed directly earlier in the same sentence.",
            explanation:
              "The speakers cry out to ‘great Christ’, so ‘thee’ is Christ — God is the only one who hears their true pain. ‘The world’ is tempting, but the poem insists the world sees only the smile.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-mcq-p1-q07",
            extract: "We smile, but, O great Christ, our cries",
            question: "What is the effect of the word ‘but’ in this line?",
            options: [
              "It marks a sharp contrast between the outward smile and the inner cries.",
              "It shows that the speakers have stopped smiling for good.",
              "It introduces a joke to lighten the mood.",
              "It shows the speakers agree with the world.",
            ],
            answerIndex: 0,
            hint: "‘But’ is a conjunction that usually signals contrast.",
            explanation:
              "‘But’ swings from the public smile to the private cries, exposing the gap between appearance and reality. It does not mean they stop smiling — the next lines show them still singing and still wearing the mask.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-mcq-p1-q08",
            extract: "We sing, but oh the clay is vile\nBeneath our feet, and long the mile;",
            question: "What does ‘long the mile’ most strongly suggest?",
            options: [
              "The speakers are on a real walking journey across America.",
              "The speakers enjoy travelling long distances.",
              "The road to freedom is short and nearly finished.",
              "The struggle against prejudice is long and exhausting.",
            ],
            answerIndex: 3,
            hint: "Read the journey as a metaphor.",
            explanation:
              "The ‘mile’ is a metaphor for the struggle the speakers must endure, and ‘long’ suggests exhaustion and no end in sight. Option A reads the line literally, missing the metaphor.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-mcq-p1-q09",
            question: "The refrain ends with a full stop in stanza two but an exclamation mark in stanza three. What is the most likely effect of this change?",
            options: [
              "It raises the emotional intensity, making the final line sound more forceful or defiant.",
              "It shows the speakers have finally removed the mask.",
              "It is a printing mistake with no effect.",
              "It shows the speakers are excited and happy.",
            ],
            answerIndex: 0,
            hint: "Say both versions aloud. How does your voice change?",
            explanation:
              "The exclamation mark makes the last refrain louder and more intense — a cry of anguish or defiance. Option D is tempting because exclamation marks can show excitement, but nothing in the final stanza is happy: the clay is ‘vile’ and souls are ‘tortured’.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p1-q10",
            question: "How many different rhyme sounds does Dunbar use across the whole poem (not counting the refrain)?",
            options: ["Five", "Fourteen", "Two", "None"],
            answerIndex: 2,
            hint: "Listen to the line endings: lies, eyes, guile, smile…",
            explanation:
              "Every line ends with either the ‘-ise/-ies’ sound (lies, eyes, sighs, arise) or the ‘-ile’ sound (guile, smile, vile, mile). Only two rhyme sounds is a rule of the rondeau. ‘Fourteen’ confuses this with the number of lines in a sonnet.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p1-q11",
            question: "Which piece of context is MOST useful for understanding the poem?",
            options: [
              "Dunbar was born in Ohio in the winter.",
              "Dunbar’s parents had been enslaved, and Black Americans faced severe prejudice in the 1890s.",
              "Rondeaus were popular in medieval France.",
              "Dunbar wrote some poems in dialect and some in Standard English.",
            ],
            answerIndex: 1,
            hint: "Which fact explains WHY people would need to wear a mask?",
            explanation:
              "The history of slavery and continuing racism explains why a community would have to hide its pain behind smiles. The rondeau fact is true and relevant to form, but it does not explain the poem’s central message as directly.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-mcq-p1-q12",
            extract: "And mouth with myriad subtleties.",
            question: "Here ‘mouth’ is used as a verb. What does ‘mouth with myriad subtleties’ suggest?",
            options: [
              "The speakers sing loudly and joyfully.",
              "The speakers refuse to speak at all.",
              "The speakers eat carefully to avoid offence.",
              "The speakers say countless careful, polite things they do not truly mean.",
            ],
            answerIndex: 3,
            hint: "To ‘mouth’ words can mean to say them without real feeling.",
            explanation:
              "To ‘mouth’ words is to say them emptily; ‘myriad subtleties’ suggests countless careful evasions. So the speakers speak, but only in a guarded way that hides their true feelings. Option B is tempting because masks hide faces, but the line shows them speaking, not silent.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-mcq-p1-q13",
            question: "Which line most directly describes the mask physically concealing the speakers’ faces?",
            options: [
              "Beneath our feet, and long the mile;",
              "To thee from tortured souls arise.",
              "It hides our cheeks and shades our eyes,—",
              "In counting all our tears and sighs?",
            ],
            answerIndex: 2,
            hint: "Look for parts of the face.",
            explanation:
              "‘It hides our cheeks and shades our eyes’ names the face directly — the mask covers expressions that might betray pain. ‘In counting all our tears and sighs’ mentions tears, but it is about the world prying, not the mask covering the face.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-mcq-p1-q14",
            question: "Which is the WEAKEST piece of analysis of ‘We Wear the Mask’?",
            options: [
              "The violent image ‘torn and bleeding hearts’ exposes pain the smiling mask conceals.",
              "Dunbar uses lots of techniques like rhyme, which makes the poem good.",
              "The collective ‘we’ shows the mask is a shared survival strategy, not a single person’s choice.",
              "The returning refrain mirrors the way the speakers can never remove the mask.",
            ],
            answerIndex: 1,
            hint: "Which one names a feature but says nothing about its effect or meaning?",
            explanation:
              "Option B is feature-spotting: it names ‘rhyme’ but gives no effect or link to the poem’s ideas, and ‘makes the poem good’ is a vague judgement. The others each link a precise technique to meaning.",
            guideRef: "writing-speaking",
          },
          {
            id: "idc-mcq-p1-q15",
            question: "In ‘Half-Caste’, why does John Agard refer to Picasso mixing colours and to English weather mixing light and shadow?",
            options: [
              "To show that mixing creates something whole and valuable, making the label ‘half-caste’ look ridiculous",
              "To show off his knowledge of art and the weather",
              "To argue that people of mixed heritage should become painters",
              "To complain about the weather in England",
            ],
            answerIndex: 0,
            hint: "Would anyone call a Picasso painting ‘half’ a painting?",
            explanation:
              "Agard pushes the logic of the label until it collapses: nobody calls a masterpiece or the weather ‘half’, so why call a person ‘half’? Option D is tempting because he does joke about English weather, but the joke serves the argument against the label.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-mcq-p1-q16",
            question: "Which poem includes lines written in Gujarati script?",
            options: [
              "‘Island Man’ by Grace Nichols",
              "‘Checking Out Me History’ by John Agard",
              "‘Blessing’ by Imtiaz Dharker",
              "‘Search For My Tongue’ by Sujata Bhatt",
            ],
            answerIndex: 3,
            hint: "This poem is about fearing the loss of a mother tongue.",
            explanation:
              "Bhatt places Gujarati script in the middle of her poem, so English-only readers experience being outsiders. Agard also writes in a non-standard form, but it is Caribbean English spelling, not another script.",
            guideRef: "language-identity",
          },
          {
            id: "idc-mcq-p1-q17",
            question: "Which word best describes the tone of the final stanza of ‘We Wear the Mask’?",
            options: ["Joyful", "Indifferent", "Anguished", "Comic"],
            answerIndex: 2,
            hint: "Look at ‘cries’, ‘tortured souls’ and ‘vile’.",
            explanation:
              "‘Cries’, ‘tortured souls’ and ‘vile’ create an anguished tone of deep suffering. ‘Joyful’ might tempt you because the speakers ‘smile’ and ‘sing’, but that is only the mask — the stanza exposes the pain beneath.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-mcq-p1-q18",
            question: "CHALLENGE: Why might Dunbar have chosen a strict, traditional form like the rondeau for a poem about racism?",
            options: [
              "Because free verse had not yet been invented in 1895",
              "Because its tight, looping pattern mirrors the speakers’ controlled, trapped smile — and proves his mastery of a respected form",
              "Because rondeaus are always about sadness",
              "Because the rondeau was invented by Black American poets",
            ],
            answerIndex: 1,
            hint: "Think about what strict rules and constant returns might symbolise.",
            explanation:
              "The rondeau’s few rhymes and returning refrain create a sense of constraint, like the mask; writing it perfectly also shows a Black poet mastering a prestigious European form. Option A is false — Walt Whitman was writing free verse decades before 1895.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p1-q19",
            question: "CHALLENGE: ‘This debt we pay to human guile’. What does the metaphor of a ‘debt’ suggest about wearing the mask?",
            options: [
              "The speakers borrowed money and must repay it.",
              "The speakers feel grateful to the world for its kindness.",
              "Wearing the mask is something the speakers enjoy and choose freely.",
              "Wearing the mask is a forced payment the speakers must keep making to survive a deceitful, cruel world.",
            ],
            answerIndex: 3,
            hint: "Who usually decides that a debt must be paid — the payer or someone else?",
            explanation:
              "A debt is an obligation imposed on you; the speakers ‘pay’ with their hidden pain because the world’s ‘guile’ demands it. Option C contradicts the idea of a debt, which is owed, not freely chosen.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-mcq-p1-q20",
            question: "Which is a genuine SIMILARITY between ‘We Wear the Mask’ and Agard’s ‘Half-Caste’?",
            options: [
              "Both are written in Caribbean Creole spelling.",
              "Both are rondeaus.",
              "Both respond to prejudice people face because of race.",
              "Both use the collective pronoun ‘we’ throughout.",
            ],
            answerIndex: 2,
            hint: "Think about message, not method — the methods are very different.",
            explanation:
              "Both poems answer racial prejudice, though in different ways (Dunbar hides pain; Agard confronts the listener). The other options are differences: Agard writes free verse in Caribbean spelling with ‘I’ and ‘yu’, while Dunbar writes a Standard English rondeau with ‘we’.",
            guideRef: "comparing-poems",
          },
        ],
      },
      {
        id: "idc-mcq-p2",
        title: "MCQ Paper 2",
        passage: BAZAARS,
        questions: [
          {
            id: "idc-mcq-p2-q01",
            question: "What is a ‘bazaar’?",
            options: ["A royal palace", "A busy market", "A place of worship", "A wedding ceremony"],
            answerIndex: 1,
            hint: "Merchants, vendors and pedlars all work here.",
            explanation:
              "A bazaar is a market, especially in South Asia and the Middle East. ‘Wedding’ might tempt you because of the bridegroom in the last stanza, but the whole poem is set among market stalls.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-mcq-p2-q02",
            question: "How is most of the poem structured?",
            options: [
              "As a list of rules for traders",
              "As a story told by one merchant",
              "As a series of questions to groups of traders, each followed by their answer",
              "As a letter to the British government",
            ],
            answerIndex: 2,
            hint: "Look at the first line of each stanza.",
            explanation:
              "Each stanza asks ‘What do you…?’ and the traders answer with lists of goods, creating a lively dialogue. It is not one merchant’s story — many different groups (vendors, goldsmiths, musicians) reply.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-mcq-p2-q03",
            extract: "What do you sell, O ye merchants?",
            question: "What is the effect of the old-fashioned address ‘O ye merchants’?",
            options: [
              "It gives the ordinary traders dignity and grandeur, as if in an ancient song.",
              "It makes the merchants sound rude and unfriendly.",
              "It shows the speaker cannot speak modern English.",
              "It suggests the merchants are British.",
            ],
            answerIndex: 0,
            hint: "Where else do you hear ‘O ye…’ — in everyday chat, or in hymns and old poetry?",
            explanation:
              "‘O ye’ is an archaic, formal way of addressing people, found in scripture and songs, so it elevates humble traders. Option C is tempting but wrong: Naidu chose the style deliberately for its musical, respectful effect.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p2-q04",
            question: "Which line appeals MOST to the sense of hearing?",
            options: [
              "Tunics of purple brocade,",
              "Saffron and lentil and rice.",
              "Mirrors with panels of amber,",
              "Cithar, sarangi and drum.",
            ],
            answerIndex: 3,
            hint: "Which line lists things that make sounds?",
            explanation:
              "A cithar, a sarangi and a drum are musical instruments, so the line fills the market with sound. ‘Saffron and lentil and rice’ appeals mainly to taste and smell, not hearing.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-mcq-p2-q05",
            question: "Which lines rhyme in each stanza?",
            options: [
              "Lines 1 and 2, 3 and 4, 5 and 6",
              "Lines 2, 4 and 6",
              "Every line rhymes with every other line",
              "None — the poem does not rhyme",
            ],
            answerIndex: 1,
            hint: "Stanza 1: displayed … brocade … jade.",
            explanation:
              "Lines 2, 4 and 6 rhyme (displayed/brocade/jade; rice/spice/dice), while lines 1, 3 and 5 do not. This steady, chiming rhyme on alternate lines helps give the poem its song-like feel. Couplets (option A) would need neighbouring lines to rhyme.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p2-q06",
            extract: "Bells for the feet of blue pigeons\nFrail as a dragon-fly’s wing,",
            question: "What technique is used in ‘Frail as a dragon-fly’s wing’?",
            options: ["Metaphor", "Personification", "Simile", "Onomatopoeia"],
            answerIndex: 2,
            hint: "Look for ‘like’ or ‘as’.",
            explanation:
              "It compares the delicate bells to a dragon-fly’s wing using ‘as’, so it is a simile. A metaphor would say the bells ARE a wing, without ‘like’ or ‘as’.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-mcq-p2-q07",
            question: "The final stanza moves from ‘Crowns for the brow of a bridegroom’ to ‘the sleep of the dead’. What does this movement suggest?",
            options: [
              "The market sells goods for the whole cycle of human life, from celebration to death.",
              "The flower-girls are tired of their work.",
              "The bridegroom dies on his wedding day.",
              "The market is about to close for the night.",
            ],
            answerIndex: 0,
            hint: "What two big life events are mentioned?",
            explanation:
              "Flowers serve both a wedding and a funeral, so the market — and the culture — is present at every stage of life. Option C reads too literally: these are different customers and different occasions, not one man’s story.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-mcq-p2-q08",
            question: "Naidu published this poem in 1912, when India was ruled by Britain, and she was a leader in the independence movement. How might this context shape a reading of the poem?",
            options: [
              "The poem is secretly an attack on Indian traders.",
              "The poem praises British goods sold in Indian markets.",
              "The poem’s pride in Indian craft, colour and music can be read as a confident celebration of Indian culture.",
              "The context has no connection to the poem at all.",
            ],
            answerIndex: 2,
            hint: "Whose goods and skills does the poem celebrate?",
            explanation:
              "Every item is Indian-made and lovingly described, so under colonial rule the poem quietly asserts the richness of Indian culture. Option B is wrong: nothing in the poem mentions British goods.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-mcq-p2-q09",
            extract: "Saffron and lentil and rice.",
            question: "What is the effect of repeating ‘and’ in this line?",
            options: [
              "It makes the market sound empty.",
              "It slows the list down and suggests abundance — there is plenty of everything.",
              "It shows the vendor is unsure what he is selling.",
              "It creates a rhyme with the line above.",
            ],
            answerIndex: 1,
            hint: "Compare it with ‘Saffron, lentil, rice.’",
            explanation:
              "Repeating ‘and’ (polysyndeton) stretches the list, making the goods feel plentiful and lingering. Option D is wrong because the rhyme comes from the end word ‘rice’, not from the repeated ‘and’.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-mcq-p2-q10",
            question: "Which word best describes the overall tone of the poem?",
            options: ["Bitter", "Bored", "Fearful", "Celebratory"],
            answerIndex: 3,
            hint: "How does the speaker seem to feel about everything she sees?",
            explanation:
              "Rich colours, music and lavish lists create a celebratory, admiring tone. ‘Fearful’ might tempt you because of the daggers and the dead, but they are presented as beautiful objects and customs, not threats.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-mcq-p2-q11",
            question: "In Moniza Alvi’s ‘Presents from my Aunts in Pakistan’, what do the clothes sent by the aunts mainly symbolise?",
            options: [
              "The girl’s Pakistani heritage, which she admires but finds hard to wear in England",
              "The aunts’ wish that she would become a fashion designer",
              "The girl’s dislike of all bright colours",
              "Her school uniform in England",
            ],
            answerIndex: 0,
            hint: "She admires the salwar kameez but feels ‘alien in the sitting-room’.",
            explanation:
              "The clothes stand for her heritage: beautiful, but not quite comfortable in her English life. Option C is wrong because she clearly admires the colours (‘peacock-blue’); the problem is belonging, not taste.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-mcq-p2-q12",
            question: "Alvi’s speaker describes herself as ‘of no fixed nationality’. What does this phrase suggest?",
            options: [
              "She has lost her passport.",
              "She is proud to belong completely to England.",
              "She feels in-between, not fully belonging to either Pakistan or England.",
              "She wants to move to a third country.",
            ],
            answerIndex: 2,
            hint: "The phrase sounds like language from an official form.",
            explanation:
              "The bureaucratic-sounding phrase captures an identity that does not fit neatly into one box. Option B is the opposite: the whole poem shows she does not feel completely English or completely Pakistani.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-mcq-p2-q13",
            question: "Alvi’s speaker feels ‘alien in the sitting-room’ wearing her new clothes. What does ‘alien’ suggest?",
            options: [
              "She feels strange and out of place, even in her own home.",
              "She is pretending to be from outer space.",
              "She feels relaxed and comfortable.",
              "Her family do not recognise her.",
            ],
            answerIndex: 0,
            hint: "Think about the connotations of ‘alien’ — foreign, not belonging.",
            explanation:
              "‘Alien’ connotes something foreign that does not belong, and setting it in a familiar ‘sitting-room’ makes the displacement stronger. Option D overstates it: the poem does not say her family fail to recognise her.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-mcq-p2-q14",
            question: "What is a symbol in poetry?",
            options: [
              "A word that sounds like the noise it describes",
              "A concrete object that stands for a bigger, abstract idea",
              "A line repeated throughout a poem",
              "A comparison using ‘like’ or ‘as’",
            ],
            answerIndex: 1,
            hint: "A dove and peace; a bangle and heritage.",
            explanation:
              "A symbol is a concrete thing that represents an abstract idea, like clothes representing heritage. A comparison using ‘like’ or ‘as’ is a simile — a different technique.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-mcq-p2-q15",
            question: "Which definition best fits ‘heritage’?",
            options: [
              "The country you currently live in",
              "Your favourite hobbies",
              "The traditions, languages and objects passed down from earlier generations",
              "The rules of a poetic form",
            ],
            answerIndex: 2,
            hint: "It is something you inherit.",
            explanation:
              "Heritage is what is handed down — languages, customs, stories, objects. The country you live in now may be different from your heritage, which is exactly the tension many identity poems explore.",
            guideRef: "identity-themes",
          },
          {
            id: "idc-mcq-p2-q16",
            question: "Why does Sujata Bhatt print Gujarati script in the middle of ‘Search For My Tongue’?",
            options: [
              "To make the poem longer",
              "Because she could not find the English words",
              "To teach readers to write Gujarati",
              "To show the mother tongue’s living presence and make English-only readers feel like outsiders",
            ],
            answerIndex: 3,
            hint: "How do you feel as a reader when you reach lines you cannot read?",
            explanation:
              "The script puts her mother tongue physically on the page and reverses the usual situation: the English reader becomes the outsider. Option B is wrong — she writes fluently in English elsewhere in the poem, so it is a deliberate choice.",
            guideRef: "language-identity",
          },
          {
            id: "idc-mcq-p2-q17",
            question: "Which is the best SIMILARITY between ‘In the Bazaars of Hyderabad’ and the original poem ‘Hawker Centre, 7 p.m.’?",
            options: [
              "Both are written entirely in Singlish.",
              "Both celebrate a culture through a busy place where food, goods and voices mix.",
              "Both are sonnets.",
              "Both describe a market closing down for ever.",
            ],
            answerIndex: 1,
            hint: "Think about setting and attitude.",
            explanation:
              "Both poems use a lively public space — a bazaar, a hawker centre — to celebrate a culture with pride. Option A is wrong because Naidu writes in formal Standard English and even the hawker poem only uses Singlish in its dialogue.",
            guideRef: "comparing-poems",
          },
          {
            id: "idc-mcq-p2-q18",
            question: "CHALLENGE: Some critics argue that Naidu presents an idealised picture of India that leaves out poverty and hardship. Which lines MOST support this view?",
            options: [
              "Girdles of gold for the dancers,\nScabbards of gold for the king.",
              "What do you weigh, O ye vendors?",
              "What do you sell, O ye merchants?",
              "Saffron and lentil and rice.",
            ],
            answerIndex: 0,
            hint: "Which lines focus on luxury and royalty rather than ordinary life?",
            explanation:
              "Repeated ‘gold’ for dancers and a king focuses on luxury and splendour, supporting the idea of an idealised picture. ‘Saffron and lentil and rice’ actually shows everyday food, which works against the criticism rather than for it.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-mcq-p2-q19",
            question: "CHALLENGE: Read ‘WHAT do you SELL, O ye MER-chants?’ aloud, stressing the capitals. The pattern of one strong beat followed by two light ones gives the poem…",
            options: [
              "a slow, heavy rhythm like a funeral march",
              "no rhythm at all, like prose",
              "a rhythm that matches iambic pentameter exactly",
              "a lilting, song-like rhythm, like the calls of a busy market",
            ],
            answerIndex: 3,
            hint: "DUM-da-da, DUM-da-da… does it feel heavy or dancing?",
            explanation:
              "The triple, dancing beat (DUM-da-da) feels musical and lively, matching the bustle and chanting of the market. It is not iambic pentameter, which is a da-DUM pattern repeated five times.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p2-q20",
            extract: "Sheets of white blossoms new-gathered\nTo perfume the sleep of the dead.",
            question: "‘The sleep of the dead’ is an example of…",
            options: ["Euphemism", "Onomatopoeia", "Oxymoron", "Hyperbole"],
            answerIndex: 0,
            hint: "It is a gentler way of describing something difficult.",
            explanation:
              "A euphemism replaces a harsh idea (death) with a softer one (sleep), so the poem ends gently rather than grimly. It is not hyperbole, which is deliberate exaggeration.",
            guideRef: "connotation-zoom",
          },
        ],
      },
      {
        id: "idc-mcq-p3",
        title: "MCQ Paper 3",
        passage: COLOSSUS,
        questions: [
          {
            id: "idc-mcq-p3-q01",
            question: "What form is ‘The New Colossus’?",
            options: ["A rondeau", "A Petrarchan sonnet", "A ballad", "Free verse"],
            answerIndex: 1,
            hint: "Count the lines: how many are there, and how are they divided?",
            explanation:
              "It has 14 lines split into an octave (8 lines, rhyming abbaabba) and a sestet (6 lines, cdcdcd): a Petrarchan sonnet. A rondeau has 15 lines and a refrain, which this poem does not.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p3-q02",
            extract: "Not like the brazen giant of Greek fame,\nWith conquering limbs astride from land to land;",
            question: "What is the ‘brazen giant of Greek fame’?",
            options: [
              "The Statue of Liberty",
              "A Greek soldier",
              "The Colossus of Rhodes, an ancient bronze statue",
              "A ship that brought migrants to America",
            ],
            answerIndex: 2,
            hint: "Look at the poem’s title: this is the NEW Colossus, so what was the old one?",
            explanation:
              "The ‘brazen giant’ is the Colossus of Rhodes, a huge bronze statue from ancient Greece. The Statue of Liberty is tempting, but the poem says the new statue is ‘Not like’ this giant.",
            guideRef: "belonging-displacement",
          },
          {
            id: "idc-mcq-p3-q03",
            question: "Why does the poem begin with ‘Not like…’?",
            options: [
              "To define the new statue by contrast: her strength is welcoming, not conquering",
              "To show that the poet dislikes all statues",
              "To admit that the Statue of Liberty is smaller and less impressive",
              "To praise ancient Greece as the ideal nation",
            ],
            answerIndex: 0,
            hint: "What does the old giant do with its ‘conquering limbs’? What does the new statue do?",
            explanation:
              "By opening with what the statue is NOT — a conqueror — Lazarus makes her welcoming power stand out. Option D is wrong: the poem rejects the ‘storied pomp’ of the ‘ancient lands’ rather than praising it.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-mcq-p3-q04",
            extract: "A mighty woman with a torch, whose flame\nIs the imprisoned lightning,",
            question: "What does ‘the imprisoned lightning’ describe?",
            options: [
              "A storm over New York harbour",
              "The statue’s anger at migrants",
              "Prisoners held on an island",
              "The torch’s flame, pictured as a metaphor for captured, controlled power",
            ],
            answerIndex: 3,
            hint: "Read it with the line before: ‘whose flame / Is…’",
            explanation:
              "The flame IS ‘the imprisoned lightning’ — a metaphor (the torch was electrically lit) suggesting enormous power held under gentle control. The storm option reads the image literally.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-mcq-p3-q05",
            question: "Where is the volta (turn) in this sonnet?",
            options: [
              "At line 1, with ‘Not like’",
              "At line 6, with ‘Mother of Exiles’",
              "At line 9, when the statue begins to speak",
              "In the final word, ‘door’",
            ],
            answerIndex: 2,
            hint: "In a Petrarchan sonnet the turn usually comes between the octave and sestet.",
            explanation:
              "At line 9 the poem turns from describing the statue to letting her speak (‘“Keep, ancient lands…” cries she’). ‘Mother of Exiles’ is a key phrase, but it comes in the middle of the octave’s description.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p3-q06",
            extract: "“Keep, ancient lands, your storied pomp!” cries she\nWith silent lips.",
            question: "The statue ‘cries’ ‘With silent lips’. What is the effect of this contradiction?",
            options: [
              "It shows the poet made an error.",
              "It suggests the statue speaks through what she stands for, not with a real voice — her message is understood without words.",
              "It shows the statue is too shy to speak.",
              "It suggests nobody can hear the statue’s message.",
            ],
            answerIndex: 1,
            hint: "A statue cannot literally speak. How, then, does it ‘cry’?",
            explanation:
              "The paradox shows that the statue’s meaning speaks for itself: she ‘cries’ her welcome symbolically. Option D is tempting, but the message is clearly delivered — the poem goes on to print it.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p3-q07",
            extract: "Your huddled masses yearning to breathe free,",
            question: "What does ‘huddled’ suggest that a word like ‘crowded’ would not?",
            options: [
              "Cold, fear and vulnerability, as people press together for warmth and safety",
              "That the people are excited and celebrating",
              "That the people are rich and comfortable",
              "That the people are very tall",
            ],
            answerIndex: 0,
            hint: "Picture people huddling. Why do people huddle?",
            explanation:
              "People huddle when cold, frightened or poor, so ‘huddled’ creates pity and a sense of need. ‘Crowded’ only tells us about numbers. Option B ignores the vulnerable connotations entirely.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-mcq-p3-q08",
            extract: "The wretched refuse of your teeming shore.",
            question: "‘Refuse’ means rubbish. Which reading is MOST convincing?",
            options: [
              "The statue believes migrants are worthless.",
              "The poet is describing litter on the beaches of Europe.",
              "The poem is criticising America for being dirty.",
              "The statue echoes how the ‘ancient lands’ treat these people as rubbish — and welcomes them anyway.",
            ],
            answerIndex: 3,
            hint: "Whose shore is ‘your teeming shore’? Who has thrown these people away?",
            explanation:
              "‘Your’ refers to the old countries: they treat the poor as ‘refuse’, while America takes in what they discard. Option A ignores the context of welcome — the statue goes on to say ‘Send these… to me’.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-mcq-p3-q09",
            extract: "I lift my lamp beside the golden door!",
            question: "What does the ‘golden door’ symbolise?",
            options: [
              "A real gold gate on Ellis Island",
              "Entry to America and the opportunity of a better life",
              "The door of a rich person’s house",
              "The end of a journey into poverty",
            ],
            answerIndex: 1,
            hint: "Think of the connotations of ‘golden’ and what a door leads into.",
            explanation:
              "‘Golden’ connotes value and opportunity, and a door is an entrance — so it symbolises entry into a promising new life. Option A takes the symbol literally; there was no golden door.",
            guideRef: "belonging-displacement",
          },
          {
            id: "idc-mcq-p3-q10",
            question: "Why did Emma Lazarus write ‘The New Colossus’ in 1883?",
            options: [
              "To raise money for the statue’s pedestal",
              "To protest against the statue being built",
              "To win a competition organised by the French government",
              "As a speech for the President",
            ],
            answerIndex: 0,
            hint: "The statue needed something to stand on.",
            explanation:
              "Lazarus wrote it for an auction to fund the pedestal; in 1903 it was placed on a plaque inside the pedestal. The statue was a gift from France, which may make option C tempting, but the poem was written for an American fundraiser.",
            guideRef: "belonging-displacement",
          },
          {
            id: "idc-mcq-p3-q11",
            question: "In Grace Nichols’s ‘Island Man’, what does the man hear at the start of the poem?",
            options: [
              "His alarm clock",
              "Children playing in a London park",
              "The sound of the sea and surf from his Caribbean island, in his head",
              "A hurricane hitting England",
            ],
            answerIndex: 2,
            hint: "The poem’s subtitle says he still wakes up to a particular sound.",
            explanation:
              "He wakes to the ‘blue surf’ of his ‘emerald island’ — a memory or dream in his head — before London’s traffic takes over. Option D confuses this poem with Nichols’s ‘Hurricane Hits England’.",
            guideRef: "belonging-displacement",
          },
          {
            id: "idc-mcq-p3-q12",
            question: "In ‘Island Man’, the ‘emerald’ island is contrasted with London’s ‘grey metallic’ sounds. What does this colour contrast suggest?",
            options: [
              "The man prefers modern cities to islands.",
              "London is more beautiful than the Caribbean.",
              "Both places are exactly the same to him.",
              "The island feels vivid, natural and precious, while London feels dull, harsh and artificial.",
            ],
            answerIndex: 3,
            hint: "Compare the connotations of ‘emerald’ (a jewel) and ‘grey metallic’.",
            explanation:
              "‘Emerald’ connotes a precious, vivid green; ‘grey metallic’ suggests dull, cold machinery. The contrast shows where his heart lies. Option A reverses the poem’s attitude.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-mcq-p3-q13",
            question: "Grace Nichols’s ‘Hurricane Hits England’ ends with the line ‘the earth is the earth is the earth’. What does this repetition suggest?",
            options: [
              "The speaker is confused and repeating herself.",
              "The speaker realises she can belong anywhere, because the whole earth is one home.",
              "The hurricane has destroyed the earth.",
              "The speaker wants to return to the Caribbean immediately.",
            ],
            answerIndex: 1,
            hint: "What has the storm shown her about the connection between her old home and new home?",
            explanation:
              "The repetition stresses that the same earth lies under England and the Caribbean, so she can belong in both. Option D is the opposite of the poem’s resolution, which accepts her new home.",
            guideRef: "belonging-displacement",
          },
          {
            id: "idc-mcq-p3-q14",
            question: "What does ‘displacement’ mean in poems about migration?",
            options: [
              "Being moved, or feeling moved, away from where you belong",
              "Moving the lines of a poem around the page",
              "Replacing one word with a synonym",
              "Travelling for a holiday",
            ],
            answerIndex: 0,
            hint: "Dis-place: out of place.",
            explanation:
              "Displacement is being, or feeling, out of place. Option B confuses it with layout; while poets may play with layout, that is not what the term means.",
            guideRef: "belonging-displacement",
          },
          {
            id: "idc-mcq-p3-q15",
            question: "Tagore begins line after line with ‘Where…’ in ‘Where the mind is without fear’. What is this technique called?",
            options: ["Onomatopoeia", "Oxymoron", "Anaphora", "Assonance"],
            answerIndex: 2,
            hint: "It is a kind of repetition at the start of lines.",
            explanation:
              "Repeating a word at the start of successive lines is anaphora. Assonance is the repetition of vowel sounds inside words, not a repeated opening word.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p3-q16",
            extract: "Where the clear stream of reason has not lost its way into the dreary desert sand of dead habit;",
            question: "What does this metaphor suggest?",
            options: [
              "India needs more rivers to water its deserts.",
              "Habits are always good because they are traditional.",
              "Reason is dangerous and should be avoided.",
              "Clear, fresh thinking can be swallowed up and lost in lifeless, unthinking tradition.",
            ],
            answerIndex: 3,
            hint: "What happens to a stream that runs into a desert?",
            explanation:
              "A stream that runs into sand dries up; likewise reason dies when it is lost in ‘dead habit’. The alliterative ‘dreary desert… dead’ makes blind tradition sound lifeless. Option A reads the metaphor literally.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-mcq-p3-q17",
            question: "In the final line of Tagore’s poem, who is addressed as ‘my Father’?",
            options: ["The British king", "God", "Tagore’s own father", "The reader"],
            answerIndex: 1,
            hint: "Earlier the mind is ‘led forward by thee’. The poem comes from a collection of ‘song offerings’.",
            explanation:
              "Gitanjali means ‘song offerings’ to God, and the whole poem is a prayer; ‘my Father’ and ‘thee’ refer to God. Tagore’s own father is tempting, but the religious context and capital ‘F’ point to God.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-mcq-p3-q18",
            question: "Tagore’s whole poem is a single sentence. What is the main effect?",
            options: [
              "It builds a long chain of hopes that reaches its main verb only in the final prayer, giving the ending great force.",
              "It makes the poem confusing and impossible to follow.",
              "It shows Tagore did not know how to use full stops.",
              "It makes the poem sound like a shopping list.",
            ],
            answerIndex: 0,
            hint: "When do we finally reach ‘let my country awake’?",
            explanation:
              "The ‘Where…’ clauses build suspense until the main clause, ‘let my country awake’, arrives at the end, like a climax. Option B is wrong because the anaphora gives the long sentence a clear, followable pattern.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p3-q19",
            question: "CHALLENGE: Which statement best explains how Lazarus’s statue differs from the ‘brazen giant’?",
            options: [
              "She is bigger and more frightening.",
              "She is made of gold rather than bronze.",
              "Her power is turned outward to welcome the powerless, rather than to conquer.",
              "She represents Greek culture rather than American culture.",
            ],
            answerIndex: 2,
            hint: "Compare ‘conquering limbs’ with ‘mild eyes’ and ‘world-wide welcome’.",
            explanation:
              "The old giant has ‘conquering limbs’; the new statue is ‘mighty’ but has ‘mild eyes’ and offers ‘welcome’. Her strength protects rather than dominates. Option A gets the contrast backwards.",
            guideRef: "comparing-poems",
          },
          {
            id: "idc-mcq-p3-q20",
            question: "CHALLENGE: What do ‘The New Colossus’ and Tagore’s ‘Where the mind is without fear’ have most in common?",
            options: [
              "Both are written in Caribbean dialect.",
              "Both present an ideal vision of a nation defined by freedom.",
              "Both are sonnets with a volta at line 9.",
              "Both are about returning to a childhood home.",
            ],
            answerIndex: 1,
            hint: "Think about the big idea each poem hopes for or celebrates.",
            explanation:
              "Lazarus imagines America as a refuge for those ‘yearning to breathe free’; Tagore prays for India to wake into a ‘heaven of freedom’. Option C is wrong — only Lazarus writes a sonnet; Tagore’s poem is a single free-verse sentence.",
            guideRef: "comparing-poems",
          },
        ],
      },
      {
        id: "idc-mcq-p4",
        title: "MCQ Paper 4",
        passage: HAWKER,
        questions: [
          {
            id: "idc-mcq-p4-q01",
            question: "In ‘Hawker Centre, 7 p.m.’, what does ‘choped’ mean?",
            options: ["Chopped up", "Cleaned", "Reserved", "Sold"],
            answerIndex: 2,
            hint: "What job is the packet of tissues doing on the table?",
            explanation:
              "In Singlish, to ‘chope’ a seat is to reserve it, often by leaving a tissue packet. ‘Chopped’ is tempting because it looks similar, but it is a different word.",
            guideRef: "language-identity",
          },
          {
            id: "idc-mcq-p4-q02",
            extract: "a small white flag that does not mean surrender\nbut mine.",
            question: "What is the effect of this image?",
            options: [
              "It suggests the speaker has given up and lost the table.",
              "It overturns the usual meaning of a white flag: instead of surrender, it claims ownership.",
              "It shows the hawker centre is a battlefield where people fight.",
              "It shows the tissues are dirty.",
            ],
            answerIndex: 1,
            hint: "What does a white flag usually mean? What does it mean here?",
            explanation:
              "A white flag usually signals surrender, but this one says ‘mine’ — the poet playfully reverses the symbol, showing a local custom with its own meaning. Option A uses the usual meaning, which the poem explicitly rejects.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-mcq-p4-q03",
            extract: "Steam lifts off the chicken rice like a curtain going up.",
            question: "What does this simile suggest about the evening?",
            options: [
              "The food is too hot to eat.",
              "The hawker centre is about to close.",
              "The speaker dislikes the smell of food.",
              "The scene is like a show beginning, full of life and anticipation.",
            ],
            answerIndex: 3,
            hint: "When does a curtain go up?",
            explanation:
              "A curtain rises at the start of a performance, so the simile presents the hawker centre as a stage about to come alive. Option A focuses on the steam literally rather than the comparison.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-mcq-p4-q04",
            extract: "A dozen words, and the deal is done:\nno please, no thank you, nothing wasted —",
            question: "What do these lines suggest about Singlish?",
            options: [
              "It is efficient, shared shorthand between people who understand each other well.",
              "It is rude because it leaves out please and thank you.",
              "It is too complicated for visitors to learn.",
              "It is only used for buying coffee.",
            ],
            answerIndex: 0,
            hint: "Read on to the next lines: ‘the quick, warm shorthand / of people who have queued together for years’.",
            explanation:
              "The poem presents the brevity as ‘warm shorthand’ built on years of shared life, not rudeness. Option B is the outsider’s view that the poem goes on to challenge.",
            guideRef: "language-identity",
          },
          {
            id: "idc-mcq-p4-q05",
            question: "Which line from the poem is written in Singlish?",
            options: [
              "Listen again, I tell her.",
              "This is not broken.",
              "Can, can. You sit first, I bring.",
              "spoken loud and easy under the ceiling fans",
            ],
            answerIndex: 2,
            hint: "Look for grammar that differs from Standard English.",
            explanation:
              "‘Can, can. You sit first, I bring.’ uses Singlish grammar (repetition of ‘can’, leaving out ‘it’). ‘Listen again, I tell her’ is informal, but its grammar is Standard English.",
            guideRef: "language-identity",
          },
          {
            id: "idc-mcq-p4-q06",
            question: "What role does the ‘cousin from London’ play in the poem?",
            options: [
              "She represents an outsider’s judgement that Singlish is ‘broken English’, which the speaker challenges.",
              "She is the stall-holder who serves the coffee.",
              "She teaches the speaker how to speak Singlish.",
              "She agrees that Singlish is beautiful.",
            ],
            answerIndex: 0,
            hint: "What does the cousin say, and how does the speaker respond?",
            explanation:
              "The cousin’s phrase ‘broken English’ gives the speaker something to argue against, which shapes the rest of the poem. Option D is the opposite: the speaker has to tell her to ‘Listen again’.",
            guideRef: "language-identity",
          },
          {
            id: "idc-mcq-p4-q07",
            extract: "stirred in one pot, the way\nthe prata man folds butter into dough —\nover, and over, and over —\nuntil no one can say where one layer ends.",
            question: "What do these lines suggest about the languages that make up Singlish?",
            options: [
              "They are kept strictly separate.",
              "They are blended so thoroughly that they can no longer be pulled apart.",
              "They are fighting for control.",
              "Only English matters; the others are decoration.",
            ],
            answerIndex: 1,
            hint: "What happens to butter folded into dough again and again?",
            explanation:
              "Folding butter into dough creates layers that cannot be separated — like languages blended into one way of speaking. Option A is the opposite of ‘no one can say where one layer ends’.",
            guideRef: "language-identity",
          },
          {
            id: "idc-mcq-p4-q08",
            extract: "This is not broken.\nThis is mended:",
            question: "Which technique do these two lines mainly use?",
            options: [
              "Onomatopoeia",
              "Rhetorical question",
              "Enjambment across a stanza break",
              "Parallel short sentences that contrast two opposite words",
            ],
            answerIndex: 3,
            hint: "Look at how the two sentences are built.",
            explanation:
              "The two sentences share a structure (‘This is…’) and swap one word, setting ‘broken’ against ‘mended’ — a parallel, contrasting pattern that sounds like a firm verdict. There is no question mark, so it is not a rhetorical question.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p4-q09",
            extract: "a language stitched from every boat that ever docked here,",
            question: "What context does this line point to?",
            options: [
              "Singapore’s history as a port where traders and migrants from many places arrived",
              "Singapore’s famous fishing industry",
              "A tailor’s shop at the hawker centre",
              "The speaker’s cousin arriving from London by boat",
            ],
            answerIndex: 0,
            hint: "Why might many different languages have arrived in Singapore over the centuries?",
            explanation:
              "Singapore grew as a port, so people from China, the Malay world, India and Europe all brought their languages — which ‘stitched’ together into Singlish. The cousin option takes ‘boat’ too literally.",
            guideRef: "language-identity",
          },
          {
            id: "idc-mcq-p4-q10",
            extract: "while the whole island queues for its dinner.",
            question: "What is the effect of ending with this image?",
            options: [
              "It complains about long queues in Singapore.",
              "It suggests food is scarce.",
              "It presents the whole nation united in a shared, everyday ritual.",
              "It shows the speaker is impatient and hungry.",
            ],
            answerIndex: 2,
            hint: "Who is in the queue? ‘The whole island’.",
            explanation:
              "‘The whole island’ turns a meal into a picture of national togetherness — everyone shares the same place and language. Option A misreads a warm, communal image as a complaint.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-mcq-p4-q11",
            question: "In Agard’s ‘Checking Out Me History’, what does the repeated phrase ‘Dem tell me’ emphasise?",
            options: [
              "That the speaker loves his school teachers",
              "That history was imposed on him by people in authority, without his choice",
              "That the speaker cannot remember anything",
              "That the speaker is telling the reader a story",
            ],
            answerIndex: 1,
            hint: "Who controls what ‘me’ learns?",
            explanation:
              "‘Dem’ (them) — the authorities — decide what he is told, so the refrain stresses a Eurocentric history imposed on him. Option D ignores who is doing the telling: it is ‘Dem’, not the speaker.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-mcq-p4-q12",
            question: "In ‘Checking Out Me History’, which figure does Agard say he WAS taught about at school?",
            options: ["Toussaint L’Ouverture", "Nanny of the Maroons", "Mary Seacole", "Florence Nightingale"],
            answerIndex: 3,
            hint: "Three of these are Black or Caribbean heroes left out of his lessons.",
            explanation:
              "Florence Nightingale appears in the history he was ‘told’, while Mary Seacole — a Jamaican nurse who also cared for soldiers in the Crimean War — was left out. Seacole is the tempting distractor precisely because Agard sets the two nurses side by side.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-mcq-p4-q13",
            question: "What does ‘Eurocentric’ mean?",
            options: [
              "Focused on Europe and European viewpoints, often ignoring other cultures",
              "Written in the euro currency",
              "Centred on the countries of Asia",
              "Balanced between all world cultures",
            ],
            answerIndex: 0,
            hint: "Euro- + centric (centred on).",
            explanation:
              "Eurocentric means centred on Europe, often at the expense of other histories — the problem Agard attacks. ‘Balanced between all world cultures’ is the opposite.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-mcq-p4-q14",
            question: "Tatamkhulu Afrika’s ‘Nothing’s Changed’ is set in District Six, Cape Town. Why is this setting important?",
            options: [
              "It is where the poet went on holiday.",
              "It is a famous beach resort.",
              "Under apartheid it was declared a whites-only area and its residents were forced out, so it symbolises racial injustice.",
              "It is where Nelson Mandela was born.",
            ],
            answerIndex: 2,
            hint: "Think about apartheid and forced removals.",
            explanation:
              "District Six was declared whites-only in 1966 and its mixed community was evicted and the homes bulldozed. The poem shows that, even after apartheid, inequality remains. The Mandela option is simply untrue.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-mcq-p4-q15",
            question: "What is the main message of Niyi Osundare’s ‘Not My Business’?",
            options: [
              "Staying silent while others suffer injustice leaves you unprotected when it comes for you.",
              "It is wise to mind your own business.",
              "Farming yams is the best way to stay safe.",
              "Governments always protect their citizens.",
            ],
            answerIndex: 0,
            hint: "What happens to the speaker at the end?",
            explanation:
              "The speaker ignores his neighbours’ arrests as long as no one takes ‘the yam / From my savouring mouth’ — until the authorities come for him. Option B is what the speaker believes at first; the ending proves him wrong.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-mcq-p4-q16",
            extract: "How dreary – to be – Somebody!\nHow public – like a Frog –",
            question: "What is Dickinson’s simile ‘like a Frog’ mocking?",
            options: [
              "People who live near ponds",
              "People who seek fame by loudly announcing themselves",
              "People who are shy and quiet",
              "People who are afraid of animals",
            ],
            answerIndex: 1,
            hint: "What does a frog do all June long, and who listens?",
            explanation:
              "A frog croaks its own name to ‘an admiring Bog’ — a comic picture of famous people performing for an audience that is hardly worth impressing. Shy, quiet people are the ‘Nobodies’ she sides with, not the target.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p4-q17",
            question: "What is the main effect of Dickinson’s many dashes in ‘I’m Nobody! Who are you?’?",
            options: [
              "They show the poem is unfinished.",
              "They replace all the rhymes.",
              "They create pauses that make the voice sound hesitant, breathless and confiding.",
              "They separate the poem into numbered sections.",
            ],
            answerIndex: 2,
            hint: "Read it aloud, pausing at each dash.",
            explanation:
              "The dashes create caesuras, so the speaker sounds as if she is whispering a secret. The poem still rhymes (you/too, Frog/Bog), so option B is false.",
            guideRef: "form-voice",
          },
          {
            id: "idc-mcq-p4-q18",
            question: "Which sentence is punctuated correctly?",
            options: [
              "In Half-Caste Agard demands that the listener, Explain yuself.",
              "In ‘Half-Caste’, Agard demands that the listener ‘Explain yuself’.",
              "In ‘Half-Caste,’ agard demands that the listener explain yuself.",
              "In Half-Caste, Agard demands that the listener explain ‘yuself.’ ‘Wha yu mean.’",
            ],
            answerIndex: 1,
            hint: "Poem titles and quotations both go in quotation marks; names need capitals.",
            explanation:
              "Option B puts the title and the embedded quotation in quotation marks and capitalises ‘Agard’. Option C is close but lowercases the poet’s name and does not mark the quotation.",
            guideRef: "writing-speaking",
          },
          {
            id: "idc-mcq-p4-q19",
            question: "CHALLENGE: The poem’s dialogue is in Singlish, but its narration is in Standard English. What is the best explanation of this choice?",
            options: [
              "The poet could not decide which language to use.",
              "Standard English is used to show the narration is more important than the dialogue.",
              "It shows Singlish should only be spoken, never written.",
              "It shows the speaker code-switching fluently, proving Singlish is a choice of identity, not a lack of ‘proper’ English.",
            ],
            answerIndex: 3,
            hint: "If the speaker can do both, what does that prove to the cousin?",
            explanation:
              "Because the speaker clearly commands Standard English, her use of Singlish is a deliberate expression of belonging — which defeats the ‘broken English’ insult. Option B is tempting but the poem treats Singlish as precious, not as less important.",
            guideRef: "language-identity",
          },
          {
            id: "idc-mcq-p4-q20",
            question: "CHALLENGE: Which is the strongest thesis statement for comparing ‘Hawker Centre, 7 p.m.’ with Agard’s ‘Half-Caste’?",
            options: [
              "Both poems defend a mixed identity against an outsider’s insult, but where Agard confronts his listener with mocking questions, the hawker-centre speaker invites her cousin simply to ‘Listen again’.",
              "Both poems are about Singapore and the Caribbean.",
              "‘Half-Caste’ is a good poem and ‘Hawker Centre, 7 p.m.’ is also a good poem.",
              "Agard was born in Guyana, and the other poem was written for an app.",
            ],
            answerIndex: 0,
            hint: "A thesis needs a shared idea AND a precise difference.",
            explanation:
              "Option A names a shared theme (defending mixed identity against an insult) and a precise difference in method (confrontation versus invitation). Option D gives facts about origin but makes no argument about the poems.",
            guideRef: "comparing-poems",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "idc-qa-p1",
        title: "Written Paper 1",
        passage: TAGORE,
        questions: [
          {
            id: "idc-qa-p1-q01",
            question: "Identify two things the speaker hopes for in his country: one about the mind or head, and one about knowledge, words or reason.",
            marks: 2,
            hint: "Look at the first four lines.",
            modelAnswer:
              "First, he hopes for a country ‘Where the mind is without fear and the head is held high’ — where people are brave and live with dignity. Second, he hopes for a place ‘Where knowledge is free’, so that everyone can learn.",
            markScheme: [
              { point: "A hope about the mind/head: without fear, head held high, dignity", keywords: ["without fear", "fearless", "head is held high", "head held high", "dignity", "brave", "courage"] },
              { point: "A hope about knowledge, words or reason: knowledge free, words from truth, clear reason", keywords: ["knowledge is free", "knowledge", "truth", "reason", "education", "learning"] },
            ],
            commonError: "Giving two hopes from the same line, or describing the poem generally rather than identifying specific hopes.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-qa-p1-q02",
            question: "Explain the effect of the repeated word ‘Where’ at the start of seven lines.",
            marks: 3,
            hint: "Name the technique, then think about rhythm and how the vision builds.",
            modelAnswer:
              "The repetition of ‘Where’ at the start of each line is anaphora. It creates a steady, chant-like rhythm, like a prayer or a hymn, which suits the poem’s religious address to ‘my Father’. It also builds Tagore’s vision step by step, adding one quality of the ideal country after another, so that the final line, ‘let my country awake’, arrives with great force.",
            markScheme: [
              { point: "Names the technique (anaphora / repetition)", keywords: ["anaphora", "repetition", "repeated", "repeats"] },
              { point: "Explains the rhythmic / prayer-like effect", keywords: ["rhythm", "chant", "prayer", "hymn", "incantation", "musical"] },
              { point: "Explains the cumulative build-up to the final line", keywords: ["build", "builds", "climax", "cumulative", "step by step", "list", "final line"] },
            ],
            commonError: "Only saying ‘it repeats Where for emphasis’ without explaining what is emphasised or how it builds.",
            guideRef: "form-voice",
          },
          {
            id: "idc-qa-p1-q03",
            extract: "Where the world has not been broken up into fragments by narrow domestic walls;",
            question: "Analyse the phrase ‘narrow domestic walls’. What does it suggest about the divisions Tagore wants to remove?",
            marks: 3,
            hint: "Zoom in on ‘narrow’ and ‘walls’. What kind of divisions might be learned at home?",
            modelAnswer:
              "‘Walls’ are a metaphor for barriers that separate people, and ‘domestic’ suggests these barriers are learned at home or within one community — prejudices of caste, religion or region. The word ‘narrow’ connotes narrow-mindedness, so the divisions are presented as small and petty. Together with ‘fragments’, which suggests something smashed, the phrase shows that Tagore sees prejudice as breaking humanity apart, and wants an open, united world instead.",
            markScheme: [
              { point: "Walls as a metaphor for barriers / division between people", keywords: ["barrier", "divide", "division", "separate", "metaphor", "wall"] },
              { point: "Connotations of ‘narrow’: narrow-minded, petty, restrictive", keywords: ["narrow-minded", "narrow minded", "petty", "small-minded", "restrict", "limited", "closed"] },
              { point: "Links to prejudice (caste, religion, region) or Tagore’s vision of unity", keywords: ["prejudice", "caste", "religion", "unity", "united", "together", "fragments"] },
            ],
            commonError: "Taking ‘domestic walls’ literally as the walls of houses without exploring the metaphor.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-qa-p1-q04",
            extract: "Where tireless striving stretches its arms towards perfection;",
            question: "Identify two techniques in this line and explain their effect.",
            marks: 3,
            hint: "Can ‘striving’ really have arms? Listen to the repeated sounds.",
            modelAnswer:
              "‘Striving’ (effort) is personified as someone who ‘stretches its arms’, which makes hard work seem alive, eager and reaching upward. The sibilance in ‘striving stretches’ creates a sense of effort and strain, almost like a long breath. Together these present a nation where people never stop trying to improve, which links to Tagore’s hope of an awakened, active country.",
            markScheme: [
              { point: "Identifies personification (striving stretches its arms)", keywords: ["personification", "personified", "personifies", "arms", "human"] },
              { point: "Identifies alliteration / sibilance (striving stretches)", keywords: ["alliteration", "sibilance", "s sound", "striving stretches", "repeated sound"] },
              { point: "Explains effect: effort, reaching, constant self-improvement", keywords: ["effort", "reach", "improve", "hard work", "eager", "never stop", "ambition"] },
            ],
            commonError: "Naming both techniques but giving no effect, or calling the line a simile.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-qa-p1-q05",
            extract: "Where the clear stream of reason has not lost its way into the dreary desert sand of dead habit;",
            question: "How does Tagore use contrasting images in this line to present his ideas about reason and habit?",
            marks: 4,
            hint: "Water versus desert; ‘clear’ versus ‘dreary’ and ‘dead’.",
            modelAnswer:
              "Tagore builds an extended metaphor that contrasts water and desert. Reason is a ‘clear stream’, connoting freshness, movement and life, whereas habit is ‘dreary desert sand’ where a stream would dry up and vanish. The alliterative ‘dreary desert… dead’ makes blind tradition sound heavy and lifeless. The contrast suggests that thinking for yourself keeps a nation alive, but unthinking habit can swallow and kill fresh ideas — so he wants India to keep questioning rather than simply follow old customs.",
            markScheme: [
              { point: "Identifies the metaphor/contrast of stream and desert", keywords: ["stream", "desert", "contrast", "metaphor", "water", "sand"] },
              { point: "Analyses connotations of the stream (clear, fresh, alive, flowing)", keywords: ["clear", "fresh", "flowing", "life", "pure", "moving"] },
              { point: "Analyses desert/dead habit (lifeless, dry, alliteration of d)", keywords: ["dreary", "dead", "dry", "lifeless", "alliteration", "barren"] },
              { point: "Explains Tagore’s message about thinking freely vs blind tradition", keywords: ["tradition", "think for", "question", "custom", "free thinking", "blindly", "progress"] },
            ],
            commonError: "Describing the images without explaining what reason and habit stand for in Tagore’s argument.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-qa-p1-q06",
            question: "Tagore published this poem in 1912, when India was ruled by Britain. How does this context deepen the meaning of the final line, ‘Into that heaven of freedom, my Father, let my country awake’?",
            marks: 3,
            hint: "What might ‘awake’ suggest the country has been doing? What kinds of freedom are there?",
            modelAnswer:
              "Under British rule, India was not politically free, so a prayer for ‘my country’ to ‘awake’ suggests rising from a long sleep of colonial control. However, Tagore’s ‘heaven of freedom’ is more than political: the earlier lines describe freedom from fear, prejudice and ‘dead habit’. So the context shows he wants India to win not only independence from Britain but also inner, mental freedom.",
            markScheme: [
              { point: "Links ‘awake’ to rising from colonial rule / political freedom", keywords: ["british", "colonial", "independence", "rule", "empire", "political"] },
              { point: "Explains ‘awake’ as a metaphor (sleep / unaware / rising)", keywords: ["sleep", "awake", "wake", "rise", "rising", "metaphor"] },
              { point: "Notes freedom is also inner/mental (fear, prejudice, habit)", keywords: ["inner", "mental", "mind", "fear", "prejudice", "habit", "spiritual"] },
            ],
            commonError: "Stating the context (‘India was ruled by Britain’) without connecting it to specific words in the line.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-qa-p1-q07",
            question: "The whole poem is one sentence. Explain why this structure is effective.",
            marks: 2,
            hint: "Where does the main verb finally arrive?",
            modelAnswer:
              "Because the poem is one long sentence, the reader has to hold all the ‘Where…’ clauses in mind, building suspense until the main clause, ‘let my country awake’, arrives at the end. This makes the final prayer feel like a climax, and the unbroken sentence mirrors the ‘ever-widening thought’ Tagore hopes for.",
            markScheme: [
              { point: "Explains the build-up / suspense until the main clause or final line", keywords: ["suspense", "build", "climax", "final line", "main clause", "end", "wait"] },
              { point: "Links the unbroken structure to meaning (unity, widening thought, a single prayer)", keywords: ["unbroken", "unity", "widening", "prayer", "flow", "continuous", "one breath"] },
            ],
            commonError: "Saying only that ‘it is long’ without explaining what the length achieves.",
            guideRef: "form-voice",
          },
          {
            id: "idc-qa-p1-q08",
            question: "Compare how Tagore (‘Where the mind is without fear’) and Lazarus (‘The New Colossus’) present an ideal nation.",
            marks: 4,
            hint: "Both are about freedom — but one looks inward at a people’s minds, the other outward at welcoming strangers.",
            modelAnswer:
              "Both poets present an ideal nation defined by freedom. However, Tagore looks inward: his ideal India is free in its mind, ‘without fear’ and not broken by ‘narrow domestic walls’, and it is still only a hope, expressed as a prayer. In contrast, Lazarus looks outward: her ideal America is a ‘Mother of Exiles’ that welcomes ‘huddled masses yearning to breathe free’ from other countries. Their forms differ too: Tagore’s single, flowing sentence builds to a prayer, whereas Lazarus’s controlled sonnet ends in a confident declaration, ‘I lift my lamp’.",
            markScheme: [
              { point: "Identifies the shared idea: freedom / an ideal nation", keywords: ["both", "freedom", "free", "ideal", "similarly"] },
              { point: "Tagore point with evidence (inner freedom, unity, prayer)", keywords: ["without fear", "narrow domestic", "prayer", "awake", "mind", "fragments"] },
              { point: "Lazarus point with evidence (welcome to migrants)", keywords: ["mother of exiles", "huddled", "welcome", "golden door", "exiles", "lamp"] },
              { point: "Comparative difference in focus or form", keywords: ["whereas", "in contrast", "however", "sonnet", "single sentence", "unlike", "while"] },
            ],
            commonError: "Writing about each poem separately without any comparative connective or shared point.",
            guideRef: "comparing-poems",
          },
          {
            id: "idc-qa-p1-q09",
            extract: "We smile, but, O great Christ, our cries\nTo thee from tortured souls arise.\nWe sing, but oh the clay is vile\nBeneath our feet, and long the mile;",
            question: "How does Dunbar show the speakers’ hidden suffering in these lines from ‘We Wear the Mask’?",
            marks: 4,
            hint: "Look at the pattern ‘We smile, but…’ / ‘We sing, but…’, and the word ‘tortured’.",
            modelAnswer:
              "Dunbar repeats the structure ‘We smile, but…’ and ‘We sing, but…’, so each outward show of happiness is immediately undercut by the reality beneath it. The phrase ‘tortured souls’ suggests intense spiritual agony, far deeper than physical pain. Their ‘cries’ rise only to Christ, implying that no human listens. Finally, the ‘vile’ clay and ‘long the mile’ form a metaphor of a hard, endless journey, showing that the suffering of racism is daily and long-lasting.",
            markScheme: [
              { point: "Analyses the repeated ‘We smile/sing, but’ contrast", keywords: ["but", "contrast", "repeated", "repetition", "smile", "sing"] },
              { point: "Analyses ‘tortured souls’ / deep inner pain", keywords: ["tortured", "souls", "agony", "spiritual", "inner pain", "anguish"] },
              { point: "Comments on cries to Christ / only God hears", keywords: ["christ", "god", "prayer", "no one", "nobody", "only god"] },
              { point: "Analyses the journey/clay metaphor (vile, long the mile)", keywords: ["vile", "clay", "mile", "journey", "road", "long", "endless"] },
            ],
            commonError: "Retelling the lines in modern English rather than analysing specific word choices and structure.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-qa-p1-q10",
            question: "Write three lines of your own, each beginning with ‘Where…’, describing your ideal school or community. Then explain one choice you made.",
            marks: 3,
            hint: "Use anaphora like Tagore, include at least one concrete image, then use ‘I chose… so that…’.",
            modelAnswer:
              "Where every accent is a welcome, not a joke;\nWhere the canteen queue sounds like six languages laughing;\nWhere no one asks ‘Where are you really from?’\n\nI chose to end with a question people often ask in a hurtful way, so that the reader realises how a single sentence can make someone feel they do not belong. The canteen image makes the ideal concrete and familiar.",
            markScheme: [
              { point: "Uses anaphora — three lines beginning ‘Where’", keywords: ["where", "anaphora", "repetition", "repeated"] },
              { point: "Includes a concrete image or detail (place, sound, object)", keywords: ["canteen", "playground", "classroom", "table", "queue", "sound", "door", "like"] },
              { point: "Explains a choice and its intended effect", keywords: ["i chose", "so that", "because", "effect", "to show", "to make"] },
            ],
            commonError: "Writing vague abstract lines (‘Where everyone is nice’) with no concrete detail, or forgetting the explanation.",
            guideRef: "writing-speaking",
          },
          {
            id: "idc-qa-p1-q11",
            question: "‘Tagore’s poem is more a prayer than a protest.’ How far do you agree? Refer to the poem in your answer.",
            marks: 5,
            hint: "Consider who is addressed, the tone, and the context of British rule. A strong answer weighs both sides.",
            modelAnswer:
              "To a large extent I agree, because the poem is literally a prayer: it addresses ‘my Father’ and asks God to ‘let my country awake’, and its anaphora gives it the rhythm of a hymn. Its tone is hopeful rather than angry; it never names an enemy. However, it is also a quiet protest. Written in 1912 under British rule, its hope for a land ‘Where knowledge is free’ and ‘the head is held high’ implies that these freedoms are currently missing. It also criticises India’s own ‘narrow domestic walls’ and ‘dead habit’. So I would argue it is a prayer in form but a protest in effect — it protests by imagining something better.",
            markScheme: [
              { point: "Evidence it is a prayer (my Father, thee, hymn-like anaphora)", keywords: ["my father", "thee", "god", "prayer", "hymn", "religious"] },
              { point: "Notes the hopeful, non-angry tone", keywords: ["hopeful", "calm", "gentle", "tone", "not angry", "peaceful", "optimistic"] },
              { point: "Evidence of protest: implies missing freedoms under British rule", keywords: ["british", "colonial", "protest", "missing", "implies", "independence"] },
              { point: "Notes criticism of India’s own divisions or habits", keywords: ["narrow domestic", "dead habit", "fragments", "caste", "division", "its own"] },
              { point: "Reaches a balanced judgement", keywords: ["overall", "however", "to some extent", "both", "in conclusion", "ultimately", "i would argue"] },
            ],
            commonError: "Only arguing one side, or giving an opinion without close reference to the words of the poem.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-qa-p1-q12",
            question: "Write a PEEL paragraph answering: ‘How does Tagore present his vision of an ideal country?’",
            marks: 6,
            hint: "Point → embedded evidence → explain technique and connotation → link to theme and context. Aim for two pieces of evidence.",
            modelAnswer:
              "Tagore presents his ideal country as one that is free not only from foreign rule but from fear, prejudice and blind tradition. He begins with a nation ‘Where the mind is without fear and the head is held high’, an image of dignity in which people can stand tall rather than bow. Through anaphora, each new ‘Where…’ adds another quality, building a vision that grows like the ‘ever-widening thought’ he prays for. The metaphor of ‘narrow domestic walls’ that break the world into ‘fragments’ shows that he also criticises divisions within India itself, as ‘narrow’ connotes small-mindedness. Finally, the prayer ‘let my country awake’ presents freedom as an awakening; written in 1912 under British rule, this suggests that true independence must begin in the mind before it can exist in politics.",
            markScheme: [
              { point: "Clear point answering the question (free in mind, united, awakened)", keywords: ["presents", "vision", "ideal", "free", "freedom", "united"] },
              { point: "Embedded evidence from the poem", keywords: ["without fear", "head is held high", "narrow domestic", "fragments", "awake", "clear stream"] },
              { point: "Names and explains a technique (anaphora, metaphor, personification)", keywords: ["anaphora", "metaphor", "personification", "alliteration", "repetition", "imagery"] },
              { point: "Analyses connotations of a specific word", keywords: ["connotes", "suggests", "connotation", "implies", "narrow-minded", "dignity"] },
              { point: "Links to context (British rule / 1912)", keywords: ["british", "1912", "colonial", "independence", "rule", "empire"] },
              { point: "Links back to the theme of freedom / identity of the nation", keywords: ["theme", "identity", "nation", "awakening", "true freedom", "mind"] },
            ],
            commonError: "Long quotations with little analysis, or explaining what the poem says without discussing how (techniques).",
            guideRef: "writing-speaking",
          },
        ],
      },
      {
        id: "idc-qa-p2",
        title: "Written Paper 2",
        passage: PAATI,
        questions: [
          {
            id: "idc-qa-p2-q01",
            question: "Which two languages are mentioned in the first stanza, and who speaks each one?",
            marks: 2,
            hint: "Read the first two lines.",
            modelAnswer: "The grandmother (Paati) speaks Tamil, and the speaker answers in English.",
            markScheme: [
              { point: "Grandmother speaks Tamil", keywords: ["tamil", "grandmother speaks", "paati speaks", "grandmother tamil"] },
              { point: "Speaker answers in English", keywords: ["english", "speaker answers", "i answer", "answers in english"] },
            ],
            commonError: "Naming the languages without saying who speaks which.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-qa-p2-q02",
            extract: "two rivers running side by side\nthat never quite agree to meet.",
            question: "Explain what this metaphor suggests about the grandmother and the speaker.",
            marks: 3,
            hint: "Rivers that run side by side are close — but do they join?",
            modelAnswer:
              "The two languages are compared to two rivers ‘running side by side’, which suggests the grandmother and grandchild live closely together and are connected. However, they ‘never quite agree to meet’, implying that the language barrier keeps them slightly apart. ‘Agree’ personifies the rivers, hinting that the separation is almost a stubborn habit on both sides, which sets up the speaker’s later attempt to cross it.",
            markScheme: [
              { point: "Identifies metaphor of two rivers = two languages / two people", keywords: ["rivers", "metaphor", "two languages", "tamil and english", "two people"] },
              { point: "Explains closeness / connection (side by side)", keywords: ["side by side", "close", "together", "connected", "near", "parallel"] },
              { point: "Explains separation / language barrier (never quite meet)", keywords: ["never meet", "barrier", "apart", "separate", "gap", "distance", "never quite"] },
            ],
            commonError: "Explaining only the closeness or only the separation instead of the tension between them.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-qa-p2-q03",
            extract: "white lines looping, looping,\nso that nothing gets lost.\n\nBut I get lost.",
            question: "How does the poet use the repetition of ‘lost’ across these lines?",
            marks: 3,
            hint: "What is the kolam designed to do? What happens to the speaker straight after?",
            modelAnswer:
              "The kolam’s looping lines are drawn ‘so that nothing gets lost’, presenting the grandmother’s tradition as something that holds things together. The very next stanza opens ‘But I get lost’, repeating the word to create a sharp contrast: the tradition keeps everything safe except the grandchild, who cannot follow her stories. The short sentence and the stanza break emphasise the speaker’s sense of disconnection from her heritage.",
            markScheme: [
              { point: "Explains the kolam as protecting/holding things together", keywords: ["kolam", "nothing gets lost", "protect", "hold together", "safe", "tradition"] },
              { point: "Identifies the contrast created by repeating ‘lost’", keywords: ["contrast", "repetition", "repeated", "but i get lost", "irony", "ironic"] },
              { point: "Links to the speaker’s disconnection from heritage/language", keywords: ["disconnect", "cannot follow", "heritage", "language", "stories", "outsider", "left out"] },
            ],
            commonError: "Noticing that ‘lost’ is repeated but not explaining the contrast between the two uses.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-qa-p2-q04",
            extract: "past the last bus stop of words I know,\ninto a village I have only seen\nin a photograph with a folded corner.",
            question: "Analyse how these lines present the speaker’s distance from her grandmother’s past.",
            marks: 3,
            hint: "Think about the bus-route metaphor and the details of the photograph.",
            modelAnswer:
              "The metaphor ‘the last bus stop of words I know’ presents vocabulary as a bus route: the grandmother’s stories travel beyond where the speaker’s Tamil can take her, so she is left behind. The village is only known through ‘a photograph’, a second-hand, frozen image, and the ‘folded corner’ suggests it is old, much-handled and slightly damaged — like the speaker’s fading link to that past. Together these images show that her heritage feels real but out of reach.",
            markScheme: [
              { point: "Analyses the bus-stop metaphor (vocabulary as a route that ends)", keywords: ["bus stop", "metaphor", "route", "journey", "left behind", "limit", "vocabulary"] },
              { point: "Analyses the photograph as second-hand / distant knowledge", keywords: ["photograph", "only seen", "second-hand", "picture", "never visited", "image"] },
              { point: "Explains ‘folded corner’ (old, worn, fading link) or overall distance from heritage", keywords: ["folded corner", "old", "worn", "fading", "damaged", "out of reach", "distance"] },
            ],
            commonError: "Explaining what a bus stop is literally rather than what the metaphor says about language.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-qa-p2-q05",
            extract: "I nod. I smile. I catch\none word in five, like rain\ncaught in cupped hands at the window,\nmost of it running through.",
            question: "How does the poet use sentence structure and imagery to show the speaker’s experience of listening to Tamil?",
            marks: 3,
            hint: "Look at the length of the first sentences, then the simile.",
            modelAnswer:
              "The short sentences ‘I nod. I smile.’ suggest polite, automatic responses, as if the speaker is pretending to understand. The simile ‘like rain / caught in cupped hands’ shows she is trying hard to hold on to the language, but ‘most of it running through’ suggests most of the meaning slips away however hard she tries. The image is gentle and sad rather than angry, showing longing rather than rejection of her heritage.",
            markScheme: [
              { point: "Comments on short sentences (polite, automatic, pretending)", keywords: ["short sentence", "short sentences", "pretend", "polite", "automatic", "fake", "nod"] },
              { point: "Identifies and explains the simile (rain in cupped hands)", keywords: ["simile", "rain", "cupped hands", "hold on", "trying"] },
              { point: "Explains that meaning slips away / sense of loss or longing", keywords: ["slip", "running through", "lose", "loss", "longing", "escape", "most of it"] },
            ],
            commonError: "Ignoring the sentence structure and only discussing the simile.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-qa-p2-q06",
            extract: "Tonight I asked her, slowly, badly,\nin her own language, Paati, are you tired?\nand her face opened like a door\nI had not known was shut.",
            question: "Why is this stanza a turning point in the poem? Refer to language and structure.",
            marks: 4,
            hint: "What does the speaker do for the first time? What does the simile reveal?",
            modelAnswer:
              "This stanza is the turning point because, for the first time, the speaker speaks Tamil instead of English. The adverbs ‘slowly, badly’ show it is difficult and imperfect, which makes the effort more touching. Her question, ‘are you tired?’, shows care for her grandmother. The simile ‘her face opened like a door’ shows the grandmother’s joy, and the twist that the speaker ‘had not known’ it ‘was shut’ reveals that there had been a hidden barrier between them all along — one that a single sentence in the mother tongue can open.",
            markScheme: [
              { point: "Identifies the change: speaker speaks Tamil/her grandmother’s language for the first time", keywords: ["first time", "her own language", "speaks tamil", "in tamil", "turning point", "change"] },
              { point: "Comments on ‘slowly, badly’ (effort, imperfect)", keywords: ["slowly", "badly", "effort", "imperfect", "difficult", "tries"] },
              { point: "Analyses the door simile (opening, joy, welcome)", keywords: ["door", "simile", "opened", "joy", "welcome", "happy"] },
              { point: "Explains the hidden barrier (‘had not known was shut’)", keywords: ["shut", "hidden", "barrier", "had not known", "closed", "did not realise"] },
            ],
            commonError: "Summarising the stanza without explaining WHY it marks a change in the poem’s direction.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-qa-p2-q07",
            extract: "then held my wrist, as if\nmy clumsy sentence were a bangle\nshe had given me years ago\nand I had finally put it on.",
            question: "Analyse the final image of the poem. What does it suggest about language and heritage?",
            marks: 4,
            hint: "Why a bangle? Why ‘given me years ago’? Why ‘finally’?",
            modelAnswer:
              "The simile compares the speaker’s ‘clumsy sentence’ to a bangle, so language becomes a precious piece of jewellery that can be worn. The idea that it was ‘given me years ago’ suggests heritage is a gift already offered by her grandmother, waiting to be accepted. ‘Finally put it on’ implies the speaker has at last chosen to wear her heritage, and the grandmother holding her ‘wrist’ is a tender, physical gesture of approval. The ending suggests heritage does not need to be perfect to be meaningful — even a clumsy attempt is treasured.",
            markScheme: [
              { point: "Identifies the bangle simile/comparison of language to jewellery", keywords: ["bangle", "simile", "jewellery", "jewelry", "comparison"] },
              { point: "Explains heritage as a gift passed down (given years ago)", keywords: ["gift", "given", "passed down", "inherit", "years ago", "heirloom"] },
              { point: "Explains ‘finally put it on’ as accepting/wearing heritage", keywords: ["finally", "put it on", "accept", "embrace", "choose", "wear"] },
              { point: "Comments on tenderness / imperfection being valued (wrist, clumsy)", keywords: ["wrist", "tender", "clumsy", "imperfect", "approval", "pride", "love"] },
            ],
            commonError: "Treating the bangle as literal rather than as a comparison for the sentence.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-qa-p2-q08",
            question: "How does the speaker’s relationship with Tamil change from the beginning to the end of the poem?",
            marks: 3,
            hint: "Track three moments: the opening, the middle stanzas, and the ending.",
            modelAnswer:
              "At the beginning, the speaker only answers in English, so the two languages are like rivers that ‘never quite agree to meet’. In the middle she feels lost, catching only ‘one word in five’. By the end she has tried to speak Tamil herself, and her grandmother’s delight shows the gap can be crossed: the poem moves from separation and frustration to connection and acceptance.",
            markScheme: [
              { point: "Beginning: separation — answers in English / rivers never meet", keywords: ["beginning", "start", "english", "never meet", "separate", "rivers"] },
              { point: "Middle: lost, understands little (one word in five)", keywords: ["middle", "lost", "one word in five", "struggle", "does not understand", "frustrat"] },
              { point: "End: connection / acceptance after speaking Tamil", keywords: ["end", "connection", "accept", "bangle", "speaks tamil", "closer", "crossed"] },
            ],
            commonError: "Describing only the ending, without showing the development across the poem.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-qa-p2-q09",
            question: "Compare how ‘In Paati’s Language’ and Sujata Bhatt’s ‘Search For My Tongue’ present the fear of losing a mother tongue. (Quote ‘Search For My Tongue’ only in short phrases.)",
            marks: 4,
            hint: "Bhatt uses a plant metaphor and fears the tongue will ‘rot’; the Paati poem uses rivers, rain and a bangle.",
            modelAnswer:
              "Both poems explore the fear of losing a heritage language, and both end hopefully. Bhatt presents the loss in violent, bodily terms: the mother tongue might ‘rot and die’, and it regrows as ‘a stump of a shoot’ that ‘blossoms out of my mouth’. In contrast, ‘In Paati’s Language’ presents the loss more gently, through images of rain ‘running through’ cupped hands. Another difference is how the language returns: in Bhatt’s poem it grows back by itself while she dreams, whereas the speaker in ‘In Paati’s Language’ has to make a deliberate, clumsy effort, rewarded by her grandmother’s joy.",
            markScheme: [
              { point: "Shared idea: fear of losing heritage language / hopeful endings", keywords: ["both", "fear", "loss", "losing", "similarly", "hopeful"] },
              { point: "Bhatt evidence and analysis (rot, stump, blossoms, plant metaphor)", keywords: ["rot", "stump", "shoot", "blossom", "plant", "die"] },
              { point: "Paati evidence and analysis (rain, rivers, bangle, one word in five)", keywords: ["rain", "rivers", "bangle", "one word in five", "running through", "cupped"] },
              { point: "Clear difference (violent vs gentle; returns by itself vs deliberate effort)", keywords: ["whereas", "in contrast", "however", "violent", "gentle", "effort", "dream"] },
            ],
            commonError: "Quoting long passages from ‘Search For My Tongue’ or writing about one poem only.",
            guideRef: "comparing-poems",
          },
          {
            id: "idc-qa-p2-q10",
            question: "In Moniza Alvi’s ‘Presents from my Aunts in Pakistan’, how does the speaker feel about the clothes she is sent? (Quote only short phrases.)",
            marks: 3,
            hint: "She admires them, but something stops her feeling comfortable in them.",
            modelAnswer:
              "The speaker admires the clothes: images such as a salwar kameez that is ‘peacock-blue’ show their beauty and richness. However, she feels ‘alien in the sitting-room’ wearing them, and she longs for ‘denim and corduroy’, the clothes of her English friends. Her mixed feelings show that she loves her Pakistani heritage but does not feel she fully belongs to it — she is ‘of no fixed nationality’.",
            markScheme: [
              { point: "Admiration / beauty of the clothes", keywords: ["peacock", "admire", "beautiful", "lovely", "rich", "bright"] },
              { point: "Discomfort / feeling out of place", keywords: ["alien", "out of place", "uncomfortable", "awkward", "embarrassed", "strange"] },
              { point: "Explains her divided identity / longing for English clothes", keywords: ["denim", "corduroy", "no fixed nationality", "divided", "two cultures", "in-between", "belong"] },
            ],
            commonError: "Saying she simply hates or simply loves the clothes; the point is her mixed feelings.",
            guideRef: "heritage-family",
          },
          {
            id: "idc-qa-p2-q11",
            question: "Imagine you wrote ‘In Paati’s Language’. Write a short commentary (3–5 sentences) explaining two choices you made and their intended effects.",
            marks: 5,
            hint: "Use ‘I chose… in order to… so that the reader…’. Name the techniques precisely.",
            modelAnswer:
              "I chose to open with the metaphor of ‘two rivers running side by side’ in order to show that my grandmother and I are close but separated by language. I repeated the word ‘lost’ across a stanza break so that the reader feels the contrast between the kolam, which keeps everything safe, and me, who cannot follow her stories. I placed the turning point in the fifth stanza, when I finally speak Tamil, and used the simile of a door opening so that the reader shares my surprise at her joy. Finally, I ended with the image of a bangle to suggest that heritage is a gift which only matters once we choose to wear it.",
            markScheme: [
              { point: "Writes in the first person as the poet (I chose…)", keywords: ["i chose", "i used", "i decided", "i wanted", "i placed", "i repeated"] },
              { point: "Explains a first choice with a named technique", keywords: ["metaphor", "simile", "repetition", "rivers", "door", "bangle"] },
              { point: "Explains a second choice with a named technique or structural feature", keywords: ["stanza", "structure", "turning point", "short sentence", "ending", "stanza break"] },
              { point: "Explains intended effect on the reader", keywords: ["so that the reader", "reader", "in order to", "effect", "feel", "realise"] },
              { point: "Links choices to the poem’s theme (language, heritage, connection)", keywords: ["heritage", "language", "connection", "grandmother", "identity", "belong"] },
            ],
            commonError: "Retelling what happens in the poem instead of explaining WHY the writer made choices.",
            guideRef: "writing-speaking",
          },
          {
            id: "idc-qa-p2-q12",
            question: "How does the poet present the connection between language and family in ‘In Paati’s Language’? Write an extended answer (two developed paragraphs).",
            marks: 6,
            hint: "Cover the opening barrier, the imagery of loss, the turning point and the ending. Embed short quotations.",
            modelAnswer:
              "The poet presents language as the bridge — and the barrier — between generations. At first, the metaphor of ‘two rivers running side by side’ that ‘never quite agree to meet’ shows that the grandmother and grandchild are close in love but separated by speech. The grandmother’s affectionate Tamil word ‘kanna’ is compared to the warmth of her daily kolam, linking her language to home, tradition and care. Yet the speaker ‘get[s] lost’ in her stories, catching only ‘one word in five, like rain / caught in cupped hands’, a simile that shows effort and sadness as meaning slips away.\n\nThe turning point comes when the speaker asks, ‘slowly, badly’, a simple question in Tamil. The simile ‘her face opened like a door / I had not known was shut’ reveals both the grandmother’s joy and a hidden distance the speaker had not realised. The final image of the sentence as ‘a bangle / she had given me years ago’ suggests that language is a family heirloom, already offered and waiting to be worn. Overall, the poem suggests that family connection does not depend on perfect fluency: even a clumsy attempt to speak a grandparent’s language can open a door between generations.",
            markScheme: [
              { point: "Clear overview: language as bridge/barrier between generations", keywords: ["bridge", "barrier", "generations", "connection", "separate", "gap"] },
              { point: "Analyses the rivers metaphor or opening separation", keywords: ["rivers", "side by side", "never quite", "metaphor", "never meet"] },
              { point: "Analyses imagery linking language to home/tradition (kanna, kolam)", keywords: ["kanna", "kolam", "rice flour", "tradition", "warm", "home"] },
              { point: "Analyses the imagery of loss (rain, cupped hands, lost)", keywords: ["rain", "cupped", "lost", "one word in five", "slips", "running through"] },
              { point: "Analyses the turning point / door simile", keywords: ["door", "turning point", "slowly, badly", "shut", "opened", "first time"] },
              { point: "Analyses the bangle ending and draws a conclusion", keywords: ["bangle", "heirloom", "gift", "overall", "clumsy", "finally"] },
            ],
            commonError: "Working through the poem line by line as a summary instead of building an argument about language and family.",
            guideRef: "heritage-family",
          },
        ],
      },
      {
        id: "idc-qa-p3",
        title: "Written Paper 3",
        passage: FROM,
        questions: [
          {
            id: "idc-qa-p3-q01",
            question: "Identify one place the speaker has lived in the past and the place where the speaker lives now.",
            marks: 2,
            hint: "Look at stanzas two and four.",
            modelAnswer: "In the past the speaker lived in Dubai (and Hong Kong). Now the speaker lives in Singapore.",
            markScheme: [
              { point: "A past home: Dubai or Hong Kong", keywords: ["dubai", "hong kong", "flat in dubai", "school in hong kong"] },
              { point: "Current home: Singapore", keywords: ["singapore", "void deck", "mrt", "lives now"] },
            ],
            commonError: "Naming Chennai as a past home — the poem says the speaker visits Chennai, their mother’s city.",
            guideRef: "belonging-displacement",
          },
          {
            id: "idc-qa-p3-q02",
            extract: "but the question lands on me\nlike a suitcase I have packed too many times.",
            question: "Analyse the simile in these lines.",
            marks: 3,
            hint: "What does a suitcase connote? What does ‘packed too many times’ add?",
            modelAnswer:
              "The simile compares the question to a suitcase, an object that connotes travel and moving home, so it immediately links the question to the speaker’s many relocations. The verb ‘lands’ makes the question feel heavy, as if it drops onto the speaker. ‘Packed too many times’ suggests weariness: the speaker is tired of moving and tired of explaining, so a simple, kindly question carries a weight the teacher cannot see.",
            markScheme: [
              { point: "Identifies the simile and the suitcase’s connotations of travel/moving", keywords: ["simile", "suitcase", "travel", "moving", "relocat", "luggage"] },
              { point: "Comments on weight / ‘lands’ (heavy, burden)", keywords: ["lands", "heavy", "weight", "burden", "drop"] },
              { point: "Explains ‘packed too many times’ (weariness, tired of explaining)", keywords: ["too many times", "tired", "weary", "exhausted", "repeated", "fed up"] },
            ],
            commonError: "Saying ‘it is a simile because it uses like’ without exploring what the comparison suggests.",
            guideRef: "belonging-displacement",
          },
          {
            id: "idc-qa-p3-q03",
            extract: "From a passport with more stamps than friends.",
            question: "What does this line suggest about the speaker’s life? Explain the effect of the comparison.",
            marks: 3,
            hint: "Passport stamps record journeys. Why would friends be fewer?",
            modelAnswer:
              "Passport stamps record each new country, so having ‘more stamps than friends’ suggests the speaker has moved so often that friendships have not had time to grow. The comparison is witty but sad: it measures a life in border crossings rather than relationships. It suggests that a well-travelled, international life can also be a lonely one.",
            markScheme: [
              { point: "Explains stamps = many countries / moving often", keywords: ["stamps", "countries", "travel", "moved", "moving often", "journeys"] },
              { point: "Explains the effect of fewer friends (no time to build friendships, loneliness)", keywords: ["lonely", "loneliness", "few friends", "no time", "friendships", "isolated"] },
              { point: "Comments on the tone/comparison (witty but sad, humorous, ironic)", keywords: ["witty", "humour", "humorous", "sad", "ironic", "comparison", "bittersweet"] },
            ],
            commonError: "Taking the line as a boast about travel and missing the loneliness it implies.",
            guideRef: "belonging-displacement",
          },
          {
            id: "idc-qa-p3-q04",
            extract: "From my mother’s Chennai, which I visit\nthe way you visit a museum of your own face —",
            question: "Explain the metaphor ‘a museum of your own face’.",
            marks: 3,
            hint: "What do you do in a museum? Whose face is on display?",
            modelAnswer:
              "A museum is a place you visit as an outsider to look at things from the past, so the speaker treats Chennai as somewhere to observe rather than live. Yet it is a museum of ‘your own face’: relatives see the mother’s features in the speaker, so the speaker’s heritage is written on their body. The metaphor captures an unsettling feeling of being both a visitor and an exhibit — connected by blood, but distant in experience and language.",
            markScheme: [
              { point: "Museum = visiting as an outsider / looking at the past", keywords: ["museum", "visitor", "outsider", "observe", "past", "look at"] },
              { point: "‘Own face’ = family resemblance / heritage in the body", keywords: ["own face", "look like", "resemblance", "mother", "features", "blood"] },
              { point: "Explains the tension: connected but distant", keywords: ["distant", "both", "connected", "belong", "strange", "unsettling", "tension"] },
            ],
            commonError: "Explaining only the museum idea and ignoring the twist of ‘your own face’.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-qa-p3-q05",
            extract: "From Singapore, now: from the lift that smells of rain,\nfrom the void deck where the uncles play chess,\nfrom the MRT voice that tells me every morning\nto please mind the platform gap.",
            question: "How does the poet make Singapore feel like home in this stanza?",
            marks: 3,
            hint: "Look at the kinds of details chosen and the senses they appeal to.",
            modelAnswer:
              "The poet chooses small, everyday details rather than famous landmarks: a lift, a void deck, a train announcement. These sensory details — the smell of rain, the sound of the MRT voice — show the speaker knows Singapore from the inside. The repetition of ‘from’ builds a list of belonging, and ‘every morning’ suggests routine, which is what makes a place feel like home.",
            markScheme: [
              { point: "Everyday / ordinary local details rather than landmarks", keywords: ["everyday", "ordinary", "local", "void deck", "lift", "mrt", "routine"] },
              { point: "Sensory imagery (smell of rain, sound of the voice)", keywords: ["sensory", "smell", "sound", "senses", "rain", "voice"] },
              { point: "Structure/repetition of ‘from’ or routine builds belonging", keywords: ["repetition", "from", "list", "every morning", "belonging", "familiar"] },
            ],
            commonError: "Listing the places without explaining how the choice of details creates a sense of home.",
            guideRef: "belonging-displacement",
          },
          {
            id: "idc-qa-p3-q06",
            extract: "I mind it. I mind the gap\nbetween every place I have been.",
            question: "Explain the wordplay on ‘mind’ in these lines.",
            marks: 4,
            hint: "‘Mind the gap’ is a safety warning. What else can ‘I mind’ mean?",
            modelAnswer:
              "In the train announcement, ‘mind the gap’ means ‘be careful of the space’. The speaker then turns the phrase into a pun: ‘I mind it’ also means ‘I am bothered by it’. The ‘gap’ also shifts meaning, from the space between train and platform to the emotional distance ‘between every place I have been’. The wordplay shows how an ordinary, repeated phrase from daily life can suddenly express a deep feeling of displacement.",
            markScheme: [
              { point: "Explains the literal meaning (be careful of the gap)", keywords: ["careful", "warning", "safety", "literal", "train", "platform"] },
              { point: "Explains the second meaning of mind (bothered, upset, care about)", keywords: ["bothered", "upset", "care", "pun", "double meaning", "wordplay"] },
              { point: "Explains the shift in ‘gap’ to an emotional/geographical gap", keywords: ["gap", "between", "places", "distance", "emotional", "space"] },
              { point: "Links to displacement / not fully belonging", keywords: ["displacement", "belong", "in-between", "third culture", "identity", "home"] },
            ],
            commonError: "Explaining only one meaning of ‘mind’, so the pun is missed.",
            guideRef: "connotation-zoom",
          },
          {
            id: "idc-qa-p3-q07",
            extract: "Maybe I am the gap —\nthe narrow space where the train stops\nand the doors open both ways.",
            question: "How does the metaphor in these lines change the speaker’s view of having no single home?",
            marks: 4,
            hint: "What happens at the gap between train and platform? Is it a negative or positive place?",
            modelAnswer:
              "The speaker moves from minding the gap to becoming it: ‘Maybe I am the gap’. The tentative ‘Maybe’ shows a new idea forming. At first a gap sounds like an absence, but the speaker redefines it as the place ‘where the train stops / and the doors open both ways’ — a point of arrival and exchange. The doors opening ‘both ways’ suggest the speaker can move freely between cultures. So the metaphor turns displacement into a kind of strength: not belonging to one place means being open to many.",
            markScheme: [
              { point: "Notes the shift from minding the gap to being the gap / tentative ‘Maybe’", keywords: ["maybe", "i am the gap", "becomes", "shift", "tentative", "uncertain"] },
              { point: "Explains the gap as initially negative (absence, emptiness, danger)", keywords: ["absence", "empty", "emptiness", "nothing", "danger", "negative", "missing"] },
              { point: "Explains ‘doors open both ways’ (exchange, moving between cultures)", keywords: ["both ways", "doors", "between cultures", "two ways", "exchange", "freely"] },
              { point: "Concludes that displacement becomes a strength/openness", keywords: ["strength", "positive", "open", "opportunity", "advantage", "many"] },
            ],
            commonError: "Treating the gap as purely negative and missing the positive reinterpretation.",
            guideRef: "belonging-displacement",
          },
          {
            id: "idc-qa-p3-q08",
            question: "Comment on how the poet uses repetition to structure the poem. Refer to at least two examples.",
            marks: 3,
            hint: "Look at how lines in the middle stanzas begin, and how the final stanza is built.",
            modelAnswer:
              "The poet uses anaphora of ‘From…’ in stanzas two to four, turning the poem into a list of places that answer the teacher’s question; the list shows how many places make up the speaker. In the final stanza, the repeated ‘I will say:’ gives three different answers, moving from ‘here’ to ‘everywhere’ to ‘I am from the question’. This builds to a confident climax: the speaker no longer needs one answer.",
            markScheme: [
              { point: "Identifies the repeated ‘From…’ (anaphora / list)", keywords: ["from", "anaphora", "list", "listing", "places"] },
              { point: "Identifies the repeated ‘I will say’ in the final stanza", keywords: ["i will say", "final stanza", "three answers", "ending", "last stanza"] },
              { point: "Explains the effect: builds to a confident climax / identity made of many places", keywords: ["climax", "builds", "confident", "many places", "no single", "more than one", "build-up"] },
            ],
            commonError: "Spotting repetition without explaining how it shapes the poem’s argument.",
            guideRef: "form-voice",
          },
          {
            id: "idc-qa-p3-q09",
            question: "Explain how the final line, ‘I will say: I am from the question’, works as an ending.",
            marks: 3,
            hint: "Go back to the title. How has the speaker’s relationship with the question changed?",
            modelAnswer:
              "The final line loops back to the title, giving the poem a circular structure. At the start, the question ‘lands’ on the speaker like a heavy suitcase; by the end, the speaker claims the question itself as a home. This suggests the speaker has accepted that their identity is defined by movement and uncertainty, and turns a question that once caused discomfort into a confident statement of who they are.",
            markScheme: [
              { point: "Notes the link back to the title / circular structure", keywords: ["title", "circular", "loops", "back to", "beginning", "cyclical"] },
              { point: "Contrasts with the opening (question as burden / suitcase)", keywords: ["suitcase", "burden", "heavy", "discomfort", "start", "opening"] },
              { point: "Explains acceptance / confident new identity", keywords: ["accept", "confident", "claims", "identity", "proud", "peace"] },
            ],
            commonError: "Saying the ending is ‘confusing’ without trying to interpret it.",
            guideRef: "belonging-displacement",
          },
          {
            id: "idc-qa-p3-q10",
            question: "Compare how ‘Where Are You From?’ and Grace Nichols’s ‘Island Man’ present the experience of living between places. (Quote ‘Island Man’ only in short phrases.)",
            marks: 4,
            hint: "Island Man is pulled back towards one remembered home; this speaker has many homes. How does each poem end?",
            modelAnswer:
              "Both poems present people who live between places, but Island Man is pulled towards one remembered home, whereas the speaker of ‘Where Are You From?’ has many. Nichols contrasts the ‘emerald island’ of the man’s dreams with London’s ‘grey metallic’ noise, so London never quite replaces the Caribbean, and he faces ‘Another London day’ with weary resignation. In contrast, the speaker in ‘Where Are You From?’ moves from the burden of the ‘suitcase’ question to a confident ending, ‘I am from the question’. Island Man stays divided; this speaker turns being divided into a new identity.",
            markScheme: [
              { point: "Shared theme: living between places", keywords: ["both", "between", "two places", "similarly", "displacement"] },
              { point: "Island Man evidence and analysis", keywords: ["emerald", "grey metallic", "london day", "sea", "island", "north circular"] },
              { point: "‘Where Are You From?’ evidence and analysis", keywords: ["suitcase", "gap", "i am from the question", "passport", "museum", "both ways"] },
              { point: "Clear difference, especially in the endings (resignation vs confidence)", keywords: ["whereas", "in contrast", "however", "resignation", "confident", "unlike", "ending"] },
            ],
            commonError: "Comparing only the settings (London vs Singapore) instead of the speakers’ feelings and the poems’ methods.",
            guideRef: "comparing-poems",
          },
          {
            id: "idc-qa-p3-q11",
            question: "Write 5–8 lines of your own poem titled ‘Where I’m From’, using at least two techniques from this unit (e.g. anaphora, a simile, a word from another language, a refrain). Then write one sentence explaining a choice.",
            marks: 4,
            hint: "Be specific: a smell, a sound, a phrase someone in your family says. Avoid general statements about a whole culture.",
            modelAnswer:
              "I’m from the hiss of the pressure cooker at six,\nfrom Paati’s ‘eat first, study later’,\nfrom a school bag heavy as a small country,\nfrom ‘lah’ and ‘aiyoh’ and ‘sorry, sorry’,\nfrom the gap where two languages hold hands.\n\nI chose to repeat ‘from’ at the start of each line so that, like the poem in this paper, my identity builds up as a list of small, specific things.",
            markScheme: [
              { point: "Uses anaphora or a refrain", keywords: ["from", "i am", "i'm", "where"] },
              { point: "Uses a simile or metaphor", keywords: ["like", "as if", "heavy as", "metaphor", "simile"] },
              { point: "Includes a specific, concrete detail (sound, smell, object, phrase)", keywords: ["smell", "sound", "hiss", "kitchen", "bag", "lah", "paati", "grandmother"] },
              { point: "Explains a choice and its effect", keywords: ["i chose", "so that", "because", "in order to", "effect"] },
            ],
            commonError: "Writing general statements (‘I am from a great culture’) instead of specific, sensory details.",
            guideRef: "writing-speaking",
          },
          {
            id: "idc-qa-p3-q12",
            question: "‘The speaker of “Where Are You From?” is unhappy about having no single home.’ How far do you agree? Write an extended answer with close reference to the poem.",
            marks: 6,
            hint: "Find evidence of unhappiness, then evidence of acceptance or pride. Which wins by the end?",
            modelAnswer:
              "There is clear evidence that the speaker finds having no single home painful. The question ‘lands’ on them ‘like a suitcase I have packed too many times’, suggesting weariness, and ‘a passport with more stamps than friends’ hints at loneliness. Even in Chennai, the speaker is a visitor to ‘a museum of your own face’, connected by family resemblance but distant in language.\n\nHowever, the poem does not end in unhappiness. The everyday details of Singapore — ‘the lift that smells of rain’ — show the speaker can build belonging. The wordplay on ‘mind the gap’ turns into the bold metaphor ‘Maybe I am the gap’, a place ‘where the doors open both ways’, which presents in-between identity as openness. The final stanza’s repeated ‘I will say’ builds to the confident ‘I am from the question’. So I only partly agree: the speaker begins weary and lonely, but by the end has turned having no single home into a source of identity and even pride.",
            markScheme: [
              { point: "Evidence of unhappiness/weariness (suitcase, too many times)", keywords: ["suitcase", "too many times", "weary", "tired", "burden"] },
              { point: "Evidence of loneliness or distance (stamps than friends, museum)", keywords: ["stamps", "friends", "lonely", "museum", "half give back", "distance"] },
              { point: "Evidence of belonging in Singapore (everyday details)", keywords: ["singapore", "lift", "rain", "void deck", "mrt", "uncles"] },
              { point: "Analyses the gap metaphor as positive reinterpretation", keywords: ["i am the gap", "both ways", "doors", "gap", "open", "metaphor"] },
              { point: "Analyses the confident ending (I am from the question)", keywords: ["from the question", "i will say", "ending", "confident", "climax"] },
              { point: "Reaches a balanced overall judgement", keywords: ["partly agree", "overall", "however", "to some extent", "ultimately", "by the end"] },
            ],
            commonError: "Agreeing or disagreeing completely, ignoring the change in feeling across the poem.",
            guideRef: "belonging-displacement",
          },
        ],
      },
      {
        id: "idc-qa-p4",
        title: "Written Paper 4",
        passage: NOBODY,
        questions: [
          {
            id: "idc-qa-p4-q01",
            question: "In the first line, what does the speaker say she is, and what does she ask the reader?",
            marks: 2,
            hint: "Read line 1 carefully.",
            modelAnswer: "She says she is ‘Nobody’, and she asks the reader, ‘Who are you?’",
            markScheme: [
              { point: "She says she is Nobody", keywords: ["nobody", "i'm nobody", "i am nobody", "is nobody"] },
              { point: "She asks who the reader is", keywords: ["who are you", "asks the reader", "asks who", "question"] },
            ],
            commonError: "Paraphrasing so loosely that the exact claim (‘Nobody’) is lost.",
            guideRef: "form-voice",
          },
          {
            id: "idc-qa-p4-q02",
            question: "Explain the effect of Dickinson’s dashes in this poem.",
            marks: 3,
            hint: "Read the poem aloud, pausing at each dash. What kind of voice do you hear?",
            modelAnswer:
              "The dashes create caesuras — pauses in the middle of lines — so the voice sounds hesitant and breathless, as if the speaker is whispering. This makes the poem feel intimate and secretive, matching the instruction ‘Don’t tell!’. In ‘How dreary – to be – Somebody!’ the dashes also slow the line down, isolating ‘Somebody’ for mocking emphasis.",
            markScheme: [
              { point: "Identifies pauses / caesura", keywords: ["pause", "pauses", "caesura", "break", "stop"] },
              { point: "Explains the voice: hesitant, breathless, whispering, intimate", keywords: ["hesitant", "breathless", "whisper", "intimate", "secret", "conversational"] },
              { point: "Links to a specific example or emphasis (Don’t tell, Somebody)", keywords: ["don't tell", "somebody", "emphasis", "emphasise", "dreary", "isolate"] },
            ],
            commonError: "Saying the dashes are ‘just punctuation’ or that they show the poem is unfinished.",
            guideRef: "form-voice",
          },
          {
            id: "idc-qa-p4-q03",
            extract: "How public – like a Frog –\nTo tell one’s name – the livelong June –\nTo an admiring Bog!",
            question: "Analyse how Dickinson mocks the idea of being ‘Somebody’ in these lines.",
            marks: 3,
            hint: "What does a frog do? Who is listening? Why ‘livelong June’?",
            modelAnswer:
              "The simile ‘like a Frog’ compares famous people to a frog croaking its own name, a comic and undignified image of self-promotion. ‘The livelong June’ suggests this boasting goes on tediously all season. The audience is only ‘an admiring Bog’ — a muddy swamp — so the admiration that famous people seek is shown to be worthless. Dickinson suggests that a private identity is better than a public one.",
            markScheme: [
              { point: "Analyses the frog simile (croaking own name, self-promotion)", keywords: ["frog", "simile", "croak", "own name", "boast", "self-promotion"] },
              { point: "Comments on ‘livelong June’ (endless, tedious)", keywords: ["livelong", "june", "endless", "all season", "tedious", "boring", "long"] },
              { point: "Analyses the ‘admiring Bog’ (worthless audience) / value of privacy", keywords: ["bog", "swamp", "worthless", "audience", "mud", "privacy", "private"] },
            ],
            commonError: "Describing the frog literally without explaining who or what it represents.",
            guideRef: "form-voice",
          },
          {
            id: "idc-qa-p4-q04",
            question: "How does Dickinson make being ‘Nobody’ sound appealing rather than sad?",
            marks: 3,
            hint: "Look at the friendly question, ‘a pair of us’ and ‘Don’t tell!’.",
            modelAnswer:
              "Dickinson capitalises ‘Nobody’, turning it into a proud title. The direct question ‘Who are you?’ and the delighted ‘Then there’s a pair of us!’ make being Nobody feel like belonging to a secret club with the reader. ‘Don’t tell!’ adds playful conspiracy, so anonymity becomes exciting, private and shared — while being ‘Somebody’ is called ‘dreary’.",
            markScheme: [
              { point: "Capital ‘Nobody’ as a proud title / identity", keywords: ["capital", "capitalised", "title", "proud", "name"] },
              { point: "Creates friendship or a secret club with the reader (pair of us)", keywords: ["pair of us", "friend", "club", "together", "belong", "reader"] },
              { point: "Playful secrecy (Don’t tell) and contrast with ‘dreary’ Somebody", keywords: ["don't tell", "secret", "playful", "dreary", "contrast", "fun"] },
            ],
            commonError: "Assuming the poem is about low self-esteem rather than a proud choice of privacy.",
            guideRef: "form-voice",
          },
          {
            id: "idc-qa-p4-q05",
            question: "Dickinson’s poem says identity can be private and chosen. Agard’s and Dunbar’s poems show identity being judged by others. Explain this difference in a short paragraph.",
            marks: 4,
            hint: "Who decides who the speaker is in each poem?",
            modelAnswer:
              "In ‘I’m Nobody! Who are you?’, the speaker chooses her identity freely and keeps it private, even mocking those who seek public recognition. In contrast, Agard’s speaker in ‘Half-Caste’ has a label forced on him by others, and must answer it with ‘Explain yuself’. Dunbar’s speakers are judged so harshly that they must wear a mask to survive. The difference shows that the freedom to define yourself privately is not available to everyone: for those facing prejudice, identity is something others try to control.",
            markScheme: [
              { point: "Dickinson: identity freely chosen / private", keywords: ["chooses", "chosen", "private", "freely", "nobody", "privacy"] },
              { point: "Agard: label imposed by others / challenged", keywords: ["half-caste", "label", "explain yuself", "imposed", "forced", "agard"] },
              { point: "Dunbar: identity judged / hidden behind mask", keywords: ["mask", "dunbar", "hide", "judged", "survive", "grins"] },
              { point: "Explains the significance (freedom to self-define depends on prejudice/power)", keywords: ["not everyone", "prejudice", "power", "control", "in contrast", "whereas", "freedom"] },
            ],
            commonError: "Discussing each poem in isolation without explaining the difference the question asks for.",
            guideRef: "comparing-poems",
          },
          {
            id: "idc-qa-p4-q06",
            question: "Describe two features of the form or structure of ‘I’m Nobody! Who are you?’.",
            marks: 2,
            hint: "Count the stanzas and lines; listen for rhymes.",
            modelAnswer:
              "The poem has two short four-line stanzas (quatrains). It uses rhyme, such as ‘you’/‘too’ in the first stanza and ‘Frog’/‘Bog’ in the second, which adds to its playful, song-like tone.",
            markScheme: [
              { point: "Two stanzas / quatrains / eight lines", keywords: ["two stanzas", "quatrain", "four lines", "eight lines", "two verses"] },
              { point: "Rhyme (you/too, Frog/Bog) or exclamations/questions", keywords: ["rhyme", "frog", "bog", "you", "too", "exclamation"] },
            ],
            commonError: "Naming features vaguely (‘it has lines’) without precise detail.",
            guideRef: "form-voice",
          },
          {
            id: "idc-qa-p4-q07",
            question: "How does John Agard use humour in ‘Half-Caste’ to challenge prejudice? (Quote only short phrases.)",
            marks: 4,
            hint: "Think about Picasso, English weather and Tchaikovsky — and the tone of ‘Explain yuself’.",
            modelAnswer:
              "Agard uses mock-serious logic to make the label ‘half-caste’ look ridiculous. He asks whether Picasso mixing colours makes a ‘half-caste’ painting, or whether English weather, mixing light and shadow, is ‘half-caste’ too. Since nobody would call a masterpiece or a symphony ‘half’, the absurd comparisons expose how foolish the label is. His tone is sarcastic and confident (‘Explain yuself’), which reverses the power: the person using the insult is made to look ignorant. Humour lets him challenge prejudice without appearing hurt, and invites the listener to laugh at the label rather than at him.",
            markScheme: [
              { point: "Identifies the absurd/mock-logical comparisons (Picasso, weather, Tchaikovsky)", keywords: ["picasso", "weather", "tchaikovsky", "piano", "painting", "symphony"] },
              { point: "Explains how the comparisons expose the label as ridiculous", keywords: ["ridiculous", "absurd", "foolish", "silly", "makes no sense", "illogical"] },
              { point: "Comments on sarcastic/confident tone or direct address", keywords: ["sarcastic", "sarcasm", "mocking", "tone", "explain yuself", "confident", "ironic"] },
              { point: "Explains the effect: reverses power / listener looks ignorant", keywords: ["reverses", "ignorant", "power", "listener", "laugh at", "challenge"] },
            ],
            commonError: "Quoting long sections of the poem, or saying the poem is ‘funny’ without explaining the purpose of the humour.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-qa-p4-q08",
            question: "In ‘Checking Out Me History’, how does Agard show why knowing your own history matters to identity? (Quote only short phrases.)",
            marks: 4,
            hint: "Think about ‘Dem tell me’, ‘Bandage up me eye’, the heroes he discovers, and the final line.",
            modelAnswer:
              "Agard shows that being taught only European history damaged his sense of self. The refrain ‘Dem tell me’ stresses that others controlled his learning. The metaphor ‘Bandage up me eye with me own history’ suggests his education blinded him to his own past, as if wounding him. By contrast, he describes Caribbean and African heroes such as Toussaint L’Ouverture and Mary Seacole with vivid, admiring imagery. The final line, ‘I carving out me identity’, shows that learning these histories lets him shape his identity for himself.",
            markScheme: [
              { point: "Refrain ‘Dem tell me’ shows imposed history", keywords: ["dem tell me", "refrain", "imposed", "control", "authority", "them"] },
              { point: "Analyses blinding/bandage imagery", keywords: ["bandage", "blind", "eye", "metaphor", "wound"] },
              { point: "Mentions the heroes he reclaims (Toussaint, Nanny, Seacole, Shaka)", keywords: ["toussaint", "nanny", "seacole", "shaka", "heroes", "maroon"] },
              { point: "Analyses the ending / taking control of identity", keywords: ["carving", "identity", "take control", "reclaim", "final line", "ending"] },
            ],
            commonError: "Listing the historical figures without explaining how they relate to the speaker’s identity.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-qa-p4-q09",
            question: "How does Tatamkhulu Afrika show in ‘Nothing’s Changed’ that inequality has survived the end of apartheid? (Quote only short phrases.)",
            marks: 3,
            hint: "Think about the smart new inn, the speaker’s anger and the title/final line.",
            modelAnswer:
              "Afrika shows that although apartheid laws have ended, inequality remains in a hidden form: no sign marks the smart new inn as whites-only, ‘but we know where we belong’, suggesting separation is now enforced by money and unspoken rules. The speaker’s anger is physical — his ‘hands burn’ for ‘a stone, a bomb’ — showing how deeply the injustice hurts. The title, repeated as the final line, insists bluntly that ‘Nothing’s changed’.",
            markScheme: [
              { point: "Hidden/unofficial segregation (no sign, we know where we belong, the inn)", keywords: ["no sign", "know where we belong", "inn", "unspoken", "hidden", "whites only"] },
              { point: "Speaker’s anger (hands burn, stone, bomb)", keywords: ["hands burn", "anger", "angry", "bomb", "stone", "violent"] },
              { point: "Title/ending emphasises no real change", keywords: ["nothing's changed", "title", "final line", "repeated", "ending", "no change"] },
            ],
            commonError: "Explaining apartheid history at length without analysing the poem.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-qa-p4-q10",
            question: "Explain how the structure of Niyi Osundare’s ‘Not My Business’ supports its message. (Quote only short phrases.)",
            marks: 4,
            hint: "Each stanza tells of a neighbour taken away; then the speaker repeats his question about the yam. What happens at the end?",
            modelAnswer:
              "The poem is built as a pattern: each stanza describes another neighbour — Akanni, Danladi, Chinwe — suffering at the hands of the authorities, followed by the speaker’s repeated, selfish question, ‘What business of mine is it’, as long as no one takes ‘the yam’ from his ‘savouring mouth’. The repetition shows his indifference hardening as the injustice grows. The pattern then breaks in the final stanza, when the jeep comes for him. This structural twist makes the message clear: staying silent while others suffer leaves you defenceless when it is your turn.",
            markScheme: [
              { point: "Repeated pattern of neighbours being taken (Akanni, Danladi, Chinwe)", keywords: ["akanni", "danladi", "chinwe", "neighbours", "pattern", "each stanza"] },
              { point: "Refrain/repeated question showing indifference (yam, business)", keywords: ["yam", "business of mine", "refrain", "repeated", "selfish", "indifferent"] },
              { point: "The pattern breaks/twist when they come for the speaker", keywords: ["twist", "breaks", "jeep", "comes for him", "his turn", "final stanza"] },
              { point: "Links structure to message about silence and injustice", keywords: ["silence", "silent", "injustice", "speak up", "defenceless", "message"] },
            ],
            commonError: "Summarising the plot without explaining how the repetition and the final twist create meaning.",
            guideRef: "prejudice-pride",
          },
          {
            id: "idc-qa-p4-q11",
            question: "Compare how Dickinson (‘I’m Nobody! Who are you?’) and Bhatt (‘Search For My Tongue’) use direct address — the word ‘you’ — to involve the reader.",
            marks: 5,
            hint: "Dickinson’s ‘you’ is a friend; Bhatt begins ‘You ask me what I mean’. Is Bhatt’s ‘you’ friendly, puzzled, or challenging?",
            modelAnswer:
              "Both poets use the second person to pull the reader into the poem. Dickinson’s ‘Who are you?’ is warm and conspiratorial: she invites the reader to be a fellow ‘Nobody’, creating a ‘pair of us’ against the public world. In contrast, Bhatt opens with ‘You ask me what I mean’, which positions the reader as someone who does not understand and needs an explanation — perhaps an outsider who speaks only one language. Bhatt then makes that outsider feel it by printing Gujarati script the ‘you’ cannot read. So Dickinson’s ‘you’ creates friendship and shared secrecy, whereas Bhatt’s ‘you’ creates distance at first, so that the reader experiences the speaker’s sense of being divided between languages.",
            markScheme: [
              { point: "Shared method: second person draws the reader in", keywords: ["both", "second person", "direct address", "you", "involve", "draws"] },
              { point: "Dickinson: friendly, conspiratorial ‘you’ (pair of us)", keywords: ["pair of us", "friendly", "conspiratorial", "secret", "who are you", "warm"] },
              { point: "Bhatt: ‘you’ as questioner/outsider (You ask me what I mean)", keywords: ["you ask me", "outsider", "questioner", "does not understand", "explain", "question"] },
              { point: "Bhatt makes the reader experience exclusion (Gujarati script)", keywords: ["gujarati", "script", "cannot read", "excluded", "exclusion", "outsider"] },
              { point: "Clear comparative judgement (friendship vs distance)", keywords: ["whereas", "in contrast", "however", "while", "unlike", "difference"] },
            ],
            commonError: "Describing each poem’s ‘you’ without comparing what relationship each creates with the reader.",
            guideRef: "comparing-poems",
          },
          {
            id: "idc-qa-p4-q12",
            question: "Compare how Dunbar (‘We Wear the Mask’) and Agard (‘Half-Caste’) present responses to prejudice. Write two integrated comparison paragraphs.",
            marks: 6,
            hint: "Paragraph 1: message (hiding vs confronting). Paragraph 2: method (form, voice, language). Use connectives in every paragraph.",
            modelAnswer:
              "Both poets respond to racial prejudice, but while Dunbar’s speakers hide their pain, Agard’s speaker refuses to hide at all. Dunbar’s community ‘wear the mask that grins and lies’, smiling ‘With torn and bleeding hearts’ so that the world cannot see their suffering; only God hears ‘our cries’. In contrast, Agard confronts the person using the label directly with ‘Explain yuself’, turning the accusation back on them. Where Dunbar’s response is a survival strategy shaped by the danger Black Americans faced in the 1890s, Agard’s is a challenge from a confident speaker in modern Britain.\n\nTheir methods differ just as sharply. Dunbar writes a strict rondeau in Standard English, its two rhyme sounds and returning refrain mirroring the trapped, controlled smile. Agard, however, writes free verse in Caribbean spelling, refusing both the rules of form and the ‘correct’ English of those who judge him. Dunbar’s collective ‘we’ speaks for a whole people, whereas Agard’s ‘I’ addresses ‘yu’ one-to-one, ending with an invitation to come back with ‘de whole of yu eye’. Ultimately, both poems expose prejudice, but Dunbar makes us feel its hidden cost, while Agard makes us laugh at its foolishness.",
            markScheme: [
              { point: "Shared point: both respond to racial prejudice", keywords: ["both", "prejudice", "racism", "racial", "similarly"] },
              { point: "Dunbar: hiding pain (evidence: mask, grins, bleeding hearts)", keywords: ["mask", "grins", "bleeding", "hide", "hidden", "cries"] },
              { point: "Agard: confronting (evidence: explain yuself, label)", keywords: ["explain yuself", "confront", "challenge", "label", "half-caste", "direct"] },
              { point: "Compares form (rondeau vs free verse) or language (Standard English vs Creole spelling)", keywords: ["rondeau", "free verse", "standard english", "creole", "phonetic", "form"] },
              { point: "Compares voice (we vs I/yu) or tone", keywords: ["we", "collective", "i and yu", "voice", "tone", "pronoun"] },
              { point: "Uses context and/or a final evaluative judgement with connectives", keywords: ["1890s", "context", "ultimately", "whereas", "in contrast", "overall"] },
            ],
            commonError: "Writing a block comparison (all Dunbar, then all Agard) and quoting long lines from ‘Half-Caste’.",
            guideRef: "comparing-poems",
          },
        ],
      },
    ],
  },
};
