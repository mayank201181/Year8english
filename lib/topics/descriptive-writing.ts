import type { Topic } from "../types";

export const descriptiveWriting: Topic = {
  id: "descriptive-writing",
  title: "Descriptive Writing",
  subject: "Skills",
  icon: "🎨",
  summary: "Show, don't tell: senses, imagery and sentence craft.",
  intro:
    "Great descriptive writing is a kind of magic trick: with nothing but words, you put a reader inside a monsoon downpour, a hawker centre at dusk or a ship breaking apart in a storm, and they feel the heat on their skin. In this topic you will learn the craft behind the trick — showing instead of telling, using all five senses, inventing fresh imagery, choosing precise words, varying your sentences and structuring a piece like a film director moving a camera. By the end you will be able to plan from a picture, write with control and redraft a flat paragraph into one that crackles.",

  guide: [
    {
      id: "show-dont-tell",
      heading: "Show, don't tell",
      body:
        "**Telling** means naming a feeling or a quality directly: *The market was busy. Mei was nervous.* **Showing** means giving the reader the evidence — the sights, sounds, actions and small details — so that they work out the feeling for themselves: *Shoulders collided in the narrow aisle; a trolley wheel rolled over Mei's toe and she did not even flinch, her eyes fixed on the exam hall door.*\n\nWhy does showing work better? Because readers believe what they **experience** more than what they are told. If you write 'the room was creepy', the reader simply has to take your word for it. If you write 'a single moth battered itself against the bare bulb, and the wallpaper hung off the wall in damp tongues', the reader *feels* the creepiness and reaches the verdict themselves — which makes the feeling theirs.\n\nA quick test: underline every **abstract noun** (a word for an idea or feeling you cannot touch, such as *fear* or *beauty*) and every **judgement adjective** (*busy, scary, beautiful, sad, amazing, nice*). Each one is a 'tell'. Then ask: *what would a camera see here? What would a microphone pick up?* Replace the tell with that evidence.\n\n- **Tell:** The hawker centre was busy.\n- **Show:** Every plastic stool was taken; a queue for chicken rice coiled past the drinks stall, and trays clattered onto tables still wet from the cloth.\n\nShowing does not mean banning every tell. A short, plain statement can hit hard *after* you have shown the evidence — 'It was the loudest place on earth.' — because by then the reader already agrees with you.",
      discovery: {
        problem:
          "Read these two sentences. (A) 'The old man was very poor.' (B) 'The old man counted his coins twice, then put the smallest one back.' Which one makes you feel something — and what did you have to do as a reader to understand B?",
        idea:
          "Sentence B never uses the word 'poor', yet you understood it instantly and probably felt sorry for him. You did the detective work, so the emotion belongs to you. That is showing: give the evidence and let the reader reach the verdict.",
      },
      keyPoints: [
        "Telling names the feeling; showing gives the evidence so the reader infers it.",
        "Swap judgement words (busy, scary, beautiful) for what a camera or microphone would pick up.",
        "A short, plain 'tell' can land hard after you have already shown the evidence.",
      ],
      thinkDeeper:
        "Some writers say 'show, don't tell' is overused — novels are full of telling. In a descriptive piece, when might a short, direct tell actually be the better choice, and why?",
    },
    {
      id: "five-senses",
      heading: "Writing with all five senses",
      body:
        "Most weak descriptions are written by someone with their eyes open and every other sense switched off. Sight matters, but readers *expect* it — sound, smell, touch and taste surprise them, and surprise makes a place feel real.\n\n- **Sight:** colour, light and shadow, movement, shape. Be exact: not 'red' but 'the red of a lantern with a candle behind it'.\n- **Sound:** use **onomatopoeia** (words that imitate sounds, such as *sizzle, clang, hiss, gurgle*) and verbs that sound like what they describe. Silence is a sound too: 'the hum of the fridge was suddenly very loud'.\n- **Smell:** the sense most closely linked to memory. 'Garlic hitting hot oil' or 'the green smell after rain' carries a reader straight into a scene.\n- **Touch:** texture, temperature, pressure, moisture — sticky tables, a cold MRT pole, air so humid it clings like a damp shirt.\n- **Taste:** often tasted through the air — salt on the lips by the sea, the metallic tang before a thunderstorm, chilli that catches the back of the throat.\n\nUse the senses *selectively*. Do not march through them like a checklist ('I could see… I could hear… I could smell…'): that is mechanical and it 'tells' the reader you are using senses. Instead, choose the two or three senses that suit your mood and fold them into strong sentences. Notice also that 'I could hear the rain' is weaker than 'the rain drummed on the zinc roof' — cut the 'I could hear' and let the sound arrive directly.\n\nA stretch technique is **synaesthesia** — describing one sense in terms of another: 'a *loud* shirt', 'a *sharp* smell', 'the *sour* yellow of the streetlight'.",
      diagram: `<svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A senses wheel: a hawker centre at dusk described through sight, sound, smell, touch and taste"><line x1="170" y1="120" x2="73" y2="54" stroke="#9ca3af" stroke-width="2"/><line x1="170" y1="120" x2="267" y2="54" stroke="#9ca3af" stroke-width="2"/><line x1="170" y1="120" x2="225" y2="120" stroke="#9ca3af" stroke-width="2"/><line x1="170" y1="120" x2="115" y2="120" stroke="#9ca3af" stroke-width="2"/><line x1="170" y1="120" x2="170" y2="186" stroke="#9ca3af" stroke-width="2"/><rect x="8" y="10" width="130" height="44" rx="8" fill="#dbeafe" stroke="#3b82f6"/><text x="73" y="28" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e3a8a">SIGHT</text><text x="73" y="45" font-size="11" text-anchor="middle" fill="#1e3a8a">smoke in amber light</text><rect x="202" y="10" width="130" height="44" rx="8" fill="#fce7f3" stroke="#db2777"/><text x="267" y="28" font-size="12" font-weight="bold" text-anchor="middle" fill="#831843">SOUND</text><text x="267" y="45" font-size="11" text-anchor="middle" fill="#831843">clang of the wok</text><rect x="225" y="98" width="110" height="44" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="280" y="116" font-size="12" font-weight="bold" text-anchor="middle" fill="#14532d">SMELL</text><text x="280" y="133" font-size="11" text-anchor="middle" fill="#14532d">char and lime</text><rect x="5" y="98" width="110" height="44" rx="8" fill="#ffedd5" stroke="#ea580c"/><text x="60" y="116" font-size="12" font-weight="bold" text-anchor="middle" fill="#7c2d12">TASTE</text><text x="60" y="133" font-size="11" text-anchor="middle" fill="#7c2d12">chilli on the air</text><rect x="105" y="186" width="130" height="44" rx="8" fill="#ede9fe" stroke="#7c3aed"/><text x="170" y="204" font-size="12" font-weight="bold" text-anchor="middle" fill="#4c1d95">TOUCH</text><text x="170" y="221" font-size="11" text-anchor="middle" fill="#4c1d95">sticky tables, wet heat</text><circle cx="170" cy="120" r="48" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="170" y="116" font-size="12" font-weight="bold" text-anchor="middle" fill="#78350f">Hawker centre</text><text x="170" y="132" font-size="12" text-anchor="middle" fill="#78350f">at dusk</text></svg>`,
      diagramCaption:
        "A senses wheel: before you write, jot one precise detail for each sense — then choose the two or three that best suit your mood.",
      discovery: {
        problem:
          "Close your eyes for thirty seconds wherever you are right now. Then write down three things you noticed. How many of them were things you saw?",
        idea:
          "None of them could be — your eyes were closed! Yet you still noticed plenty: the hum of the air-con, the smell of someone's lunch, the pressure of the chair. Those details make a place feel lived-in precisely because readers do not expect them.",
      },
      keyPoints: [
        "Sight is expected; sound, smell, touch and taste make a scene feel real.",
        "Cut 'I could see / I could hear' — let the detail arrive directly.",
        "Choose senses that suit the mood; never march through them as a checklist.",
      ],
      thinkDeeper:
        "Smell is said to be the sense most strongly linked to memory. How could you use a single smell to make a description of a place feel nostalgic, or even sad?",
    },
    {
      id: "figurative-language",
      heading: "Figurative language: fresh, not clichéd",
      body:
        "**Figurative language** means words used in a non-literal way to create a picture or idea. The main tools are:\n\n- **Simile** — a comparison using *like* or *as*: 'the queue coiled like a sleeping python'.\n- **Metaphor** — saying something *is* something else: 'the MRT carriage was a tin of sardines'. An **extended metaphor** keeps the comparison going across several sentences.\n- **Personification** — giving human qualities or actions to something non-human: 'the doors sighed open', 'the wind clawed at the shutters'.\n- **Pathetic fallacy** — a special kind of personification in which the weather or setting reflects a mood or emotion: a funeral under heavy grey cloud; a storm breaking just as a family argument explodes. The term was coined by the art critic John Ruskin in 1856.\n\nThe danger is **cliché** — a comparison used so often that it has gone dead: *as cold as ice, as quiet as a mouse, the sun was a golden ball, the wind howled, butterflies in my stomach*. Readers' eyes slide straight past clichés because they have seen them a thousand times.\n\nHow to make imagery fresh:\n- **Reject your first idea.** The first comparison that pops into your head is usually the one everybody has. Write three or four and keep the best.\n- **Borrow from the world of the piece.** In a hawker centre, the dusk sky might turn 'the colour of teh tarik'; on a ship, the clouds might be 'as grey as old sailcloth'. The image then belongs to *this* place.\n- **Make it precise.** A good comparison matches shape, sound, movement or feeling exactly. 'The rain fell like bullets' is vague; 'the rain fell in straight silver rods' shows exactly what you would see.\n- **Use fewer, better images.** Three similes in one sentence fight each other. One perfect image does more.",
      diagram: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cliché ladder: as cold as ice at the bottom, cold as a fridge door in the middle, cold as the MRT air-con at seven in the morning at the top"><defs><marker id="dscArrowUp" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#16a34a"/></marker></defs><line x1="22" y1="185" x2="22" y2="22" stroke="#16a34a" stroke-width="3" marker-end="url(#dscArrowUp)"/><rect x="40" y="18" width="292" height="46" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="186" y="37" font-size="12" font-weight="bold" text-anchor="middle" fill="#14532d">FRESH</text><text x="186" y="54" font-size="12" text-anchor="middle" fill="#14532d">cold as the MRT air-con at 7 a.m.</text><rect x="40" y="78" width="292" height="46" rx="8" fill="#fef3c7" stroke="#d97706"/><text x="186" y="97" font-size="12" font-weight="bold" text-anchor="middle" fill="#78350f">BETTER</text><text x="186" y="114" font-size="12" text-anchor="middle" fill="#78350f">cold as a fridge door</text><rect x="40" y="138" width="292" height="46" rx="8" fill="#fee2e2" stroke="#dc2626"/><text x="186" y="157" font-size="12" font-weight="bold" text-anchor="middle" fill="#7f1d1d">CLICHÉ</text><text x="186" y="174" font-size="12" text-anchor="middle" fill="#7f1d1d">as cold as ice</text></svg>`,
      diagramCaption:
        "Climb the cliché ladder: each rung is more specific and more rooted in a real place the reader recognises.",
      discovery: {
        problem:
          "Finish this simile with the first thing that comes into your head: 'The rain was as heavy as…'. Now cross it out and write three more endings. Which of your four is the best?",
        idea:
          "Your first ending was probably close to everyone else's first ending — that is exactly what makes it a cliché. Your third or fourth was likely stranger, more precise and more yours. Fresh imagery is usually found by pushing past the obvious.",
      },
      passage: {
        title: "Miranda describes the storm",
        source: "William Shakespeare, The Tempest (c.1611), Act 1 Scene 2 — Miranda to Prospero",
        text: "If by your art, my dearest father, you have\nPut the wild waters in this roar, allay them.\nThe sky, it seems, would pour down stinking pitch,\nBut that the sea, mounting to th' welkin's cheek,\nDashes the fire out. O, I have suffered\nWith those that I saw suffer!",
        note:
          "art = magic; allay = calm; pitch = thick black tar; welkin = the sky. The sea is personified as climbing up to the sky's 'cheek' and putting out the lightning.",
      },
      keyPoints: [
        "Simile (like/as), metaphor (is), personification (human qualities), pathetic fallacy (weather mirrors mood).",
        "Clichés are dead images: reject your first idea and write three more.",
        "The freshest images come from the world of the place you are describing.",
      ],
      thinkDeeper:
        "Shakespeare makes the sea 'mount' to the sky's 'cheek' to put out the lightning. Is this personification still fresh four hundred years later? What makes an image last rather than become a cliché?",
    },
    {
      id: "precise-vocabulary",
      heading: "Precise vocabulary: verbs and nouns do the work",
      body:
        "Many students try to make writing vivid by piling up adjectives: *the big, dark, old, scary, creepy house*. This is an **adjective pile**, and it actually weakens writing — each extra adjective dilutes the others, and most of them are tells.\n\nThe real power lies in **verbs** and **nouns**.\n\n- **Vivid verbs:** 'walked' tells us almost nothing. *Trudged, strode, shuffled, darted, slunk, staggered* each show a different person in a different mood. 'The rain fell' is flat; 'the rain *hammered* / *needled* / *drifted*' gives three different storms.\n- **Specific nouns:** 'tree' is vague; *rain tree, banyan, casuarina* put a picture in the reader's head. 'Bird' becomes *mynah*; 'flower' becomes *frangipani*; 'food' becomes *a plate of char kway teow glistening with lard*.\n- **Adverbs** often prop up a weak verb. 'Ran quickly' → *sprinted*. 'Said angrily' → *snapped*. Find the one verb that does both jobs.\n\nEvery word also carries **connotations** — the associations and feelings it brings with it, beyond its dictionary meaning (its **denotation**). *Slim, skinny* and *scrawny* all mean 'thin', but slim is admiring, skinny is neutral-to-critical and scrawny suggests weakness or neglect. Choose the word whose connotations match your mood.\n\nBeware the **thesaurus trap**. 'The effulgent sun irradiated the crepuscular firmament' sounds impressive and means almost nothing to a reader. Ambitious vocabulary must be *precise* and *fit the tone*, not just be long.",
      diagram: `<svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Connotation web for the word crawls in the line The wrinkled sea beneath him crawls"><line x1="170" y1="110" x2="80" y2="40" stroke="#9ca3af" stroke-width="2"/><line x1="170" y1="110" x2="260" y2="40" stroke="#9ca3af" stroke-width="2"/><line x1="170" y1="110" x2="70" y2="175" stroke="#9ca3af" stroke-width="2"/><line x1="170" y1="110" x2="270" y2="175" stroke="#9ca3af" stroke-width="2"/><rect x="10" y="18" width="140" height="42" rx="8" fill="#dbeafe" stroke="#3b82f6"/><text x="80" y="36" font-size="11" text-anchor="middle" fill="#1e3a8a">slow, laboured</text><text x="80" y="51" font-size="11" text-anchor="middle" fill="#1e3a8a">movement</text><rect x="190" y="18" width="140" height="42" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="260" y="36" font-size="11" text-anchor="middle" fill="#14532d">tiny, seen from</text><text x="260" y="51" font-size="11" text-anchor="middle" fill="#14532d">far above</text><rect x="5" y="155" width="130" height="42" rx="8" fill="#ffedd5" stroke="#ea580c"/><text x="70" y="173" font-size="11" text-anchor="middle" fill="#7c2d12">low, insect-like,</text><text x="70" y="188" font-size="11" text-anchor="middle" fill="#7c2d12">powerless</text><rect x="205" y="155" width="130" height="42" rx="8" fill="#ede9fe" stroke="#7c3aed"/><text x="270" y="173" font-size="11" text-anchor="middle" fill="#4c1d95">old and tired</text><text x="270" y="188" font-size="11" text-anchor="middle" fill="#4c1d95">(with 'wrinkled')</text><ellipse cx="170" cy="110" rx="58" ry="28" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="170" y="107" font-size="14" font-weight="bold" text-anchor="middle" fill="#78350f">crawls</text><text x="170" y="123" font-size="11" text-anchor="middle" fill="#78350f">Tennyson, The Eagle</text></svg>`,
      diagramCaption:
        "Zoom in on one word: Tennyson's verb 'crawls' makes the vast sea seem small and slow, so the eagle above it seems all-powerful.",
      discovery: {
        problem:
          "Rewrite 'The man walked down the road' three times, changing only the verb, so that he is (a) exhausted, (b) furious, (c) guilty.",
        idea:
          "Perhaps (a) trudged, (b) stormed, (c) slunk. One verb alone carries his whole mood — no adjectives needed. That is why strong writers spend their effort on verbs.",
      },
      keyPoints: [
        "One precise verb or noun beats a pile of adjectives.",
        "Replace 'verb + adverb' with a single stronger verb (ran quickly → sprinted).",
        "Choose words for their connotations, and never use a long word just to sound clever.",
      ],
      thinkDeeper:
        "Tennyson writes 'The wrinkled sea beneath him crawls'. Replace 'crawls' with 'moves', then with 'rolls'. What exactly is lost each time — and what does that tell you about how much one verb can carry?",
    },
    {
      id: "sentence-variety",
      heading: "Sentence variety and rhythm",
      body:
        "A reader *hears* your writing in their head, so the length and shape of your sentences create a rhythm. If every sentence is the same length and starts the same way ('The… The… The…'), the rhythm goes flat and the reader drifts off.\n\nThe main tools:\n\n- **Short sentences** create impact, shock or tension, especially after long ones. *Then the lights went out.*\n- **Long, flowing sentences** can slow the reader down, build a panorama, or overwhelm them with detail — useful for a crowded market or a storm that will not stop.\n- **Complex sentences** contain a main clause plus a **subordinate clause** (a part that cannot stand alone, often starting with *as, while, because, although, when*): *As the sun sank behind the HDB blocks, the void deck filled with the clack of mahjong tiles.*\n- **Fronted adverbials** are words or phrases at the *start* of a sentence that tell us when, where or how, followed by a comma: *Beneath the flickering strip-light, … / Slowly, … / Without warning, …*\n- **Lists** pile up detail. A list of three (a **tricolon**) feels complete; a list without 'and' (**asyndeton**: *lanterns, drums, firecrackers, shouting*) feels fast and crowded; a list with 'and… and… and…' (**polysyndeton**) feels endless and overwhelming.\n- **Minor sentences** are deliberate fragments with no main verb: *Silence. / Fog everywhere. / Not a breath of wind.* Used once or twice, they act like a spotlight.\n\nVary your **sentence openings** too: start with a verb ending in *-ing* (*Twisting through the crowd, …*), a preposition (*Under*, *Beyond*), an adverb, a subordinate clause, or occasionally a simile (*Like a struck gong, the thunder…*).",
      diagram: `<svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of six sentence lengths showing long sentences followed by very short ones for impact"><text x="170" y="18" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">Sentence lengths (words) — a skyline, not a flat line</text><line x1="30" y1="175" x2="330" y2="175" stroke="#6b7280" stroke-width="1.5"/><rect x="40" y="65" width="34" height="110" fill="#93c5fd"/><text x="57" y="60" font-size="11" text-anchor="middle" fill="#1e3a8a">22</text><rect x="90" y="85" width="34" height="90" fill="#93c5fd"/><text x="107" y="80" font-size="11" text-anchor="middle" fill="#1e3a8a">18</text><rect x="140" y="50" width="34" height="125" fill="#93c5fd"/><text x="157" y="45" font-size="11" text-anchor="middle" fill="#1e3a8a">25</text><rect x="190" y="170" width="34" height="5" fill="#dc2626"/><text x="207" y="164" font-size="11" text-anchor="middle" fill="#991b1b">1</text><rect x="240" y="105" width="34" height="70" fill="#93c5fd"/><text x="257" y="100" font-size="11" text-anchor="middle" fill="#1e3a8a">14</text><rect x="290" y="160" width="34" height="15" fill="#dc2626"/><text x="307" y="154" font-size="11" text-anchor="middle" fill="#991b1b">3</text><text x="57" y="192" font-size="11" text-anchor="middle" fill="#374151">S1</text><text x="107" y="192" font-size="11" text-anchor="middle" fill="#374151">S2</text><text x="157" y="192" font-size="11" text-anchor="middle" fill="#374151">S3</text><text x="207" y="192" font-size="11" text-anchor="middle" fill="#991b1b">Silence.</text><text x="257" y="192" font-size="11" text-anchor="middle" fill="#374151">S5</text><text x="307" y="192" font-size="11" text-anchor="middle" fill="#991b1b">S6</text><text x="207" y="206" font-size="11" text-anchor="middle" fill="#991b1b">impact</text></svg>`,
      diagramCaption:
        "Plot your sentence lengths. Long sentences build the scene; a sudden one-word or three-word sentence lands like a drum beat.",
      discovery: {
        problem:
          "Take your last piece of writing and count the words in each sentence of one paragraph. Sketch a bar for each. Does your chart look like a flat line or like a city skyline?",
        idea:
          "A flat line means a monotonous rhythm — the reader's attention slides. A skyline, with long sentences broken by sudden short ones, keeps the reader alert. Short sentences only feel short when they sit next to long ones.",
      },
      passage: {
        title: "Fog everywhere",
        source: "Charles Dickens, Bleak House (1852–53), Chapter 1",
        text: "Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls defiled among the tiers of shipping and the waterside pollutions of a great (and dirty) city. Fog on the Essex marshes, fog on the Kentish heights. Fog creeping into the cabooses of collier-brigs; fog lying out on the yards and hovering in the rigging of great ships; fog drooping on the gunwales of barges and small boats.",
        note:
          "aits = small river islands; cabooses = ships' kitchens; collier-brigs = coal-carrying ships; gunwales = the upper edges of a boat's side. Notice the minor sentences, the repetition of 'Fog' and the list of places spreading across London.",
      },
      keyPoints: [
        "Short sentences = impact; long sentences = flow, panorama or overwhelm.",
        "Fronted adverbials and subordinate clauses let you vary sentence openings.",
        "Minor sentences ('Silence.') are powerful because they are rare — use one or two.",
      ],
      thinkDeeper:
        "Dickens opens with a two-word minor sentence and then repeats 'Fog' again and again without main verbs. Why might a grammatically 'incomplete' style suit a description of fog particularly well?",
    },
    {
      id: "structure",
      heading: "Structuring a description: moving the camera",
      body:
        "A description is not a story, but it still needs a **structure** — a shape that carries the reader from the first line to the last. Without one, a description becomes a random list of things in a place. Think like a film director deciding where to point the camera.\n\n- **Drone shot to zoom in:** open wide (the whole city skyline, the whole bay, the whole market), then move to street level, then to one stall, then to one face or one pair of hands. This is sometimes called a **panoramic opening** narrowing to a **close-up**. The zoom makes the piece feel intimate and gives it a destination.\n- **Change over time:** describe the same place at different moments — dawn to dusk, before / during / after a monsoon storm, the hour before the festival begins and the moment the lights switch on. Time gives you natural paragraphs.\n- **A shift in weather or mood:** a turning point where the atmosphere changes — the calm shatters, the clouds roll in, the crowd falls silent. Signal it with a short sentence or a one-line paragraph ('Then the light changed.').\n- **Cyclical structure:** the ending echoes the opening — the same image, place or phrase returns, but something has changed. It gives a satisfying sense of completion: 'From the bus, the roof is still glowing…'\n- **An anchor:** a single person or object the camera keeps returning to (an old man on the void deck, a lantern, a cat) gives the piece a thread.\n\nEach paragraph should have a clear **job**: establish the scene, zoom to a detail, deliver the shift, close the circle. If you cannot say what a paragraph's job is, it probably does not need to be there.",
      diagram: `<svg viewBox="0 0 340 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Drone shot to zoom in: four frames getting narrower from whole city to street to one stall to one detail, then a shift and an echo of the opening"><rect x="10" y="8" width="320" height="38" rx="6" fill="#dbeafe" stroke="#3b82f6"/><text x="170" y="32" font-size="12" text-anchor="middle" fill="#1e3a8a">1 Drone shot: skyline, sky, weather</text><rect x="40" y="54" width="260" height="38" rx="6" fill="#e0e7ff" stroke="#6366f1"/><text x="170" y="78" font-size="12" text-anchor="middle" fill="#312e81">2 Street level: crowd and stalls</text><rect x="70" y="100" width="200" height="38" rx="6" fill="#ede9fe" stroke="#7c3aed"/><text x="170" y="124" font-size="12" text-anchor="middle" fill="#4c1d95">3 Close-up: one stall</text><rect x="100" y="146" width="140" height="38" rx="6" fill="#fce7f3" stroke="#db2777"/><text x="170" y="170" font-size="12" text-anchor="middle" fill="#831843">4 Detail: one hand</text><rect x="40" y="194" width="260" height="34" rx="17" fill="#fef3c7" stroke="#d97706"/><text x="170" y="216" font-size="12" text-anchor="middle" fill="#78350f">5 Shift in mood, then echo the opening</text></svg>`,
      diagramCaption:
        "Drone shot to zoom in: each paragraph is a narrower frame, and the final paragraph shifts the mood and echoes the opening.",
      discovery: {
        problem:
          "Think of the opening of a film you know well. Does the camera first show a face, or the whole place? Why do so many directors begin wide?",
        idea:
          "Directors use an 'establishing shot' to orient the audience before moving in close. Writers borrow the same move: start wide so the reader knows where they are, then zoom so the piece ends somewhere small, specific and emotional.",
      },
      keyPoints: [
        "Pick a structure before you write: zoom in, change over time, shift in mood, or cyclical.",
        "Signal a shift with a short sentence or a one-line paragraph.",
        "A cyclical ending returns to the opening image — changed.",
      ],
      thinkDeeper:
        "A cyclical structure returns to the opening image, 'but something has changed'. Why is an exact repeat weaker than a changed echo? What might the change suggest to the reader?",
    },
    {
      id: "viewpoint-tense-paragraphing",
      heading: "Viewpoint, tense and paragraphing",
      body:
        "**Viewpoint** is the position the description is written from.\n\n- **First person** ('I', 'we') puts the reader inside one observer's head — personal and immediate, but beware of starting every sentence with 'I'.\n- **Third person** ('he', 'she', 'they', or no person at all) works like a camera floating through the scene — it can roam more freely.\n\n**Tense** is the time the verbs place us in.\n\n- **Present tense** ('the rain hammers the roof') feels immediate, as if it is happening now.\n- **Past tense** ('the rain hammered the roof') feels like a remembered scene and is the more traditional storytelling tense.\n\nBoth are fine. What loses marks is **drifting** between them without a reason: *The rain hammers the roof. A cyclist skidded and swears.* Pick one tense and one viewpoint at the planning stage and check for slips when you proofread.\n\n**Paragraphing** shows your structure. Start a new paragraph whenever there is a change of **Ti**me, **P**lace, **To**pic or **P**erson — remember **TiPToP**. In description, that usually means each new camera position or each shift of mood. A **one-line paragraph** is a powerful structural device for the turning point:\n\n*Then the sky split open.*\n\nBut like a minor sentence, it loses its force if you use it every few lines.",
      discovery: {
        problem:
          "Spot the slip: 'The rain hammers the zinc roof. Puddles swell in the drains. A cyclist skidded and swears under his breath.' What has gone wrong?",
        idea:
          "'Skidded' has slipped into the past tense while every other verb is present (hammers, swell, swears). It should be 'skids'. Tense slips like this break the spell — the reader suddenly notices the writing instead of the scene.",
      },
      keyPoints: [
        "Present tense feels immediate; past tense feels remembered — choose one and keep it.",
        "New paragraph for a change of Time, Place, Topic or Person (TiPToP).",
        "A one-line paragraph marks a turning point, but only works if it is rare.",
      ],
      thinkDeeper:
        "Is there ever a good reason to change tense in the middle of a description — for example, in a final paragraph? How would you make the change feel deliberate rather than careless?",
    },
    {
      id: "punctuation-for-effect",
      heading: "Punctuation for effect",
      body:
        "Punctuation does not just keep you grammatically correct; it controls **timing** — where the reader pauses, speeds up or is surprised.\n\n- **Colon (:)** — introduces a reveal, an explanation or a list. The part *before* the colon must be a complete sentence. *There was only one sound: the drip of the tap.* The colon creates a tiny drum-roll before the reveal.\n- **Semicolon (;)** — joins two complete sentences that are closely linked, often to balance or contrast them. *The street was empty; the lanterns still burned.* It also separates long items in a complex list. Both sides must be able to stand alone as sentences.\n- **Dash (—)** — a single dash adds an afterthought, twist or sudden shift: *The sea was calm — too calm.* A pair of dashes lifts out an interruption: *The old man — he must have been ninety — climbed the stairs without a rail.* Dashes feel more dramatic and informal than commas or brackets.\n- **Ellipsis (…)** — three dots for trailing off, a hesitation or suspense. Use it *sparingly*: one well-placed ellipsis creates tension; five in a paragraph look like the writer cannot finish a thought.\n- **Commas** — needed after a fronted adverbial (*Without warning, the lights died.*) and to separate items in a list. A **comma splice** (joining two full sentences with only a comma: *The rain stopped, the steam rose.*) is an error — use a full stop, a semicolon or a conjunction.\n- **Exclamation marks** are rarely needed in description. Let the words create the drama.\n\nAim to use a range — colon, semicolon, dash — *accurately* and *deliberately* at least once each in a longer piece. Examiners reward punctuation that is both correct and chosen for effect.",
      discovery: {
        problem:
          "Read these aloud: (1) 'The door opened and there stood my grandmother.' (2) 'The door opened: there stood my grandmother.' (3) 'The door opened — and there stood my grandmother.' How does the timing change each time?",
        idea:
          "(1) runs straight through with no pause. (2) The colon makes a neat, held-breath pause before the reveal. (3) The dash makes a sharper, more dramatic jolt. Same words — different timing. Punctuation is how a writer controls the reader's breathing.",
      },
      keyPoints: [
        "Colon = reveal or explanation; the part before it must be a full sentence.",
        "Semicolon = joins two linked full sentences; dash = twist or interruption.",
        "Ellipsis and exclamation marks: once, if at all. Never a comma splice.",
      ],
      thinkDeeper:
        "'The sea was calm — too calm.' Rewrite this with a comma, then with a full stop ('The sea was calm. Too calm.'). Which version creates the most unease, and why?",
    },
    {
      id: "planning-redrafting",
      heading: "Planning from a picture and redrafting",
      body:
        "Many descriptive tasks give you a **picture prompt** ('Write a description suggested by this picture'). Strong writers do not describe the picture like a list; they use it as a doorway.\n\n**Planning from a picture (5–8 minutes):**\n- **Grid it.** Divide the picture into **background**, **midground** and **foreground**. Each layer becomes a camera position — and a paragraph.\n- **Zoom choice.** Find one small, human detail to end on: a hand, a face, an object (a tissue packet reserving a seat, a single lantern, a child's shoe).\n- **Senses jot.** For each layer, jot one precise sound, smell or texture the picture *cannot* show you.\n- **Mood and shift.** Decide the mood at the start and how it will change (weather, light, time, noise).\n- **Golden thread.** Choose an image you can return to at the end for a cyclical structure.\n\n**Redrafting** is where good writing becomes great. Use **ARMS**:\n- **A**dd — a sense, a precise detail, a short sentence for impact.\n- **R**emove — tells, clichés, adjective piles, repeated words, 'I could see'.\n- **M**ove — sentences or clauses so the most powerful detail lands at the end of the sentence or paragraph.\n- **S**ubstitute — weak verbs and vague nouns for precise ones.\n\nThen **proofread** for tense slips, comma splices, missing paragraph breaks and spelling. In a timed task of about 45 minutes, a sensible split is roughly 5–8 minutes planning, 30–35 minutes writing and 5 minutes checking.",
      diagram: `<svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Planning grid: a picture divided into background, midground and foreground rows, each becoming a paragraph"><rect x="15" y="15" width="180" height="60" fill="#dbeafe" stroke="#3b82f6"/><rect x="15" y="75" width="180" height="60" fill="#e0e7ff" stroke="#6366f1"/><rect x="15" y="135" width="180" height="60" fill="#fce7f3" stroke="#db2777"/><line x1="75" y1="15" x2="75" y2="195" stroke="#9ca3af" stroke-dasharray="4 3"/><line x1="135" y1="15" x2="135" y2="195" stroke="#9ca3af" stroke-dasharray="4 3"/><text x="105" y="49" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e3a8a">BACKGROUND</text><text x="105" y="109" font-size="12" font-weight="bold" text-anchor="middle" fill="#312e81">MIDGROUND</text><text x="105" y="169" font-size="12" font-weight="bold" text-anchor="middle" fill="#831843">FOREGROUND</text><circle cx="165" cy="180" r="10" fill="none" stroke="#d97706" stroke-width="2.5"/><text x="205" y="44" font-size="11" fill="#1e3a8a">Para 1: sky + skyline</text><text x="205" y="58" font-size="11" fill="#1e3a8a">(wide, mood set)</text><text x="205" y="104" font-size="11" fill="#312e81">Para 2: crowd, stalls</text><text x="205" y="118" font-size="11" fill="#312e81">(sounds, smells)</text><text x="205" y="164" font-size="11" fill="#831843">Para 3: one face,</text><text x="205" y="178" font-size="11" fill="#831843">one hand (zoom)</text><text x="205" y="208" font-size="11" fill="#78350f">Para 4: shift + echo</text></svg>`,
      diagramCaption:
        "Grid the picture into background, midground and foreground; circle one tiny detail to zoom in on; finish with a shift and an echo.",
      discovery: {
        problem:
          "Read the BEFORE paragraph in the box below and list everything you would change. Then read the AFTER version. Which of your changes did the writer make — and what did they do that you did not think of?",
        idea:
          "The redraft removes every tell (busy, colourful, loud, happy), swaps the vague nouns for specific ones, adds smell and sound, varies sentence length and ends on a single small detail. Most of the improvement comes from cutting and substituting, not from adding more adjectives.",
      },
      passage: {
        title: "Chinatown at Chinese New Year: before and after",
        source: "Original redraft written for this app",
        text: "BEFORE:\nChinatown was very busy and colourful at Chinese New Year. There were lots of red decorations everywhere and it was very loud. I could smell nice food. People were buying things and everyone was happy. It was amazing.\n\nAFTER:\nAbove Eu Tong Sen Street, a thousand red lanterns swayed on their wires, glowing like ripe fruit against the dusk. Below them, the crowd moved as one slow, shuffling animal. Somewhere a drum began — boom, boom, then a clash of cymbals — and the lion dancers surged forward, gold eyelids blinking. The air was thick with charcoal smoke and the sweet, burnt smell of bak kwa sizzling on its grill. An auntie pressed two mandarin oranges into a stranger's hands. Nobody stopped to ask why.",
        note:
          "Notice: specific place names and foods; a precise simile rooted in the scene; onomatopoeia; a dash for a sudden interruption; smell and sound alongside sight; a final short sentence that 'shows' the festive goodwill instead of saying 'everyone was happy'.",
      },
      keyPoints: [
        "Grid a picture into background, midground and foreground — one paragraph each.",
        "Plan one zoom detail, one mood shift and one image to echo at the end.",
        "Redraft with ARMS: Add, Remove, Move, Substitute — then proofread.",
      ],
      thinkDeeper:
        "In the AFTER version, the final sentence is 'Nobody stopped to ask why.' What does this sentence leave unsaid, and why might leaving it unsaid be more powerful than writing 'Everyone felt generous and happy'?",
    },
  ],

  passages: [
    {
      id: "bleak-house-fog",
      title: "London in fog",
      source: "Charles Dickens, Bleak House (1852–53), Chapter 1",
      text: "London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill. Smoke lowering down from chimney-pots, making a soft black drizzle, with flakes of soot in it as big as full-grown snowflakes — gone into mourning, one might imagine, for the death of the sun. Dogs, undistinguishable in mire. Horses, scarcely better; splashed to their very blinkers. Foot passengers, jostling one another's umbrellas in a general infection of ill temper, and losing their foot-hold at street-corners, where tens of thousands of other foot passengers have been slipping and sliding since the day broke (if this day ever broke), adding new deposits to the crust upon crust of mud, sticking at those points tenaciously to the pavement, and accumulating at compound interest.\n\nFog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls defiled among the tiers of shipping and the waterside pollutions of a great (and dirty) city. Fog on the Essex marshes, fog on the Kentish heights. Fog creeping into the cabooses of collier-brigs; fog lying out on the yards and hovering in the rigging of great ships; fog drooping on the gunwales of barges and small boats. Fog in the eyes and throats of ancient Greenwich pensioners, wheezing by the firesides of their wards; fog in the stem and bowl of the afternoon pipe of the wrathful skipper, down in his close cabin; fog cruelly pinching the toes and fingers of his shivering little 'prentice boy on deck. Chance people on the bridges peeping over the parapets into a nether sky of fog, with fog all round them, as if they were up in a balloon and hanging in the misty clouds.",
      note:
        "Michaelmas term = an autumn sitting of the law courts; implacable = impossible to calm or soften; Megalosaurus = a dinosaur, newly discovered in Dickens's time; mire = deep mud; aits = small river islands; collier-brigs = coal ships; 'prentice = apprentice; nether = lower. Dickens builds the whole opening from minor sentences (no main verbs), lists and repetition.",
    },
    {
      id: "tempest-storm",
      title: "Miranda describes the shipwreck",
      source: "William Shakespeare, The Tempest (c.1611), Act 1 Scene 2 — Miranda to Prospero",
      text: "If by your art, my dearest father, you have\nPut the wild waters in this roar, allay them.\nThe sky, it seems, would pour down stinking pitch,\nBut that the sea, mounting to th' welkin's cheek,\nDashes the fire out. O, I have suffered\nWith those that I saw suffer! A brave vessel,\nWho had, no doubt, some noble creature in her,\nDashed all to pieces. O, the cry did knock\nAgainst my very heart! Poor souls, they perished.\nHad I been any god of power, I would\nHave sunk the sea within the earth or ere\nIt should the good ship so have swallowed and\nThe fraughting souls within her.",
      note:
        "art = magic; allay = calm; pitch = black tar; welkin = sky; or ere = before; fraughting souls = the people who made up the ship's cargo. Miranda has just watched a ship wrecked by a storm that her father, Prospero, raised by magic.",
    },
    {
      id: "hawker-dusk",
      title: "The Hawker Centre at Dusk",
      source: "Original descriptive piece written for this app",
      text: "From the top deck of the bus, the hawker centre looks like a lantern someone has set down among the tower blocks: a low roof glowing amber, its edges blurred by smoke.\n\nInside, the heat arrives before the smells do. Ceiling fans churn the air without cooling it. Two hundred conversations rise and fall like surf — Hokkien, English, Tamil, Malay, laughter — and over them all rings the bright clang of a wok being struck clean.\n\nAt the char kway teow stall, the uncle works inside a cloud of his own making. His spatula scrapes and flips, scrapes and flips; flames lick up the side of the pan; a fistful of bean sprouts hits the oil and hisses like a crowd drawing breath. Nobody in the queue speaks. They watch.\n\nThen the sky outside darkens to the colour of strong kopi, and the fluorescent tubes flicker on, one by one, turning every face faintly green.\n\nAt table 34, a grandmother is peeling prawns for a boy who is old enough to do it himself. She does not mind. He does not stop her. Her fingers are quick and patient, the shells piling up beside a packet of tissues — the same packet that has reserved her seat, every evening, since long before the boy was born.\n\nFrom the bus stop, as I leave, the roof is still glowing: a lantern nobody will put out until midnight.",
      note:
        "Structure: drone shot (from the bus) → inside → one stall → one table → echo of the opening lantern image. In Singapore, a packet of tissues left on a table 'chopes' (reserves) a seat.",
    },
    {
      id: "monsoon",
      title: "Monsoon",
      source: "Original descriptive piece written for this app",
      text: "The afternoon held its breath.\n\nOver Bishan the sky had been white all day — a hot, flat white like the inside of an oven door — and the air was so thick you could have spread it on toast. On the void deck, an old man fanned himself with a newspaper. A cat lay stretched on the cool tiles, too tired to blink. Even the mynahs had stopped arguing.\n\nThen the light changed. Clouds the colour of wet slate rolled in from the east, swallowing the tops of the HDB blocks one by one. A gust snatched the newspaper and sent it cartwheeling across the car park. Somewhere, a mother shouted for her washing.\n\nThe first drops were fat and separate: dark coins on the dry concrete. Then the sky split open. Rain hammered the zinc roof of the bicycle shelter until it roared; it bounced knee-high off the road; it poured from the drains in brown, muscular ropes. Thunder cracked so close that the car alarms answered it.\n\nTwenty minutes later, it was over. The drains gurgled and gulped. Steam lifted off the road in slow, pale ghosts, and the air smelled green — of wet grass, of earth, of something washed clean. On the void deck, the old man unfolded a fresh newspaper. The cat stretched, yawned, and padded out into a world that glittered.",
      note:
        "Structure: change over time (before, during, after the storm) with a sharp shift in mood; the old man and the cat act as 'anchors' that return at the end. A void deck is the open ground floor of a Singapore HDB block.",
    },
  ],

  quoteBank: [
    {
      quote: "Fog everywhere.",
      source: "Charles Dickens, Bleak House (1852–53), Chapter 1",
      analysis:
        "A two-word minor sentence with no main verb. Because nothing 'happens' grammatically, the fog simply exists — total, inescapable and unchanging. Dickens then repeats 'Fog' at the start of clause after clause (anaphora), so the word itself seems to seep across the page as the fog seeps across London.",
      themes: ["minor sentence", "repetition", "atmosphere"],
    },
    {
      quote: "gone into mourning, one might imagine, for the death of the sun",
      source: "Charles Dickens, Bleak House (1852–53), Chapter 1",
      analysis:
        "The black soot flakes are personified as mourners dressed in black, and the vanished daylight becomes 'the death of the sun'. The metaphor turns dirty weather into a funeral, giving the whole city a gloomy, hopeless mood — a clear example of pathetic fallacy.",
      themes: ["personification", "pathetic fallacy", "mood"],
    },
    {
      quote: "Dogs, undistinguishable in mire. Horses, scarcely better; splashed to their very blinkers.",
      source: "Charles Dickens, Bleak House (1852–53), Chapter 1",
      analysis:
        "Two minor sentences, each a quick camera snapshot, like a list of exhibits. The semicolon lets Dickens add a precise, almost comic detail ('to their very blinkers') that shows how deep the mud is instead of telling us. Precise nouns (mire, blinkers) do the work, not adjectives.",
      themes: ["minor sentence", "semicolon", "show don't tell"],
    },
    {
      quote: "the sea, mounting to th' welkin's cheek, / Dashes the fire out",
      source: "Miranda, The Tempest, Act 1 Scene 2",
      analysis:
        "Personification and hyperbole: the sea 'mounts' (climbs) to the sky's 'cheek' as if the sky had a face, and puts out the lightning. The violent verb 'Dashes' and the impossible height of the waves make the storm feel cosmic — heaven and sea at war.",
      themes: ["personification", "hyperbole", "storm"],
    },
    {
      quote: "The wrinkled sea beneath him crawls",
      source: "Alfred, Lord Tennyson, 'The Eagle' (1851)",
      analysis:
        "From the eagle's great height, the vast sea becomes small: 'wrinkled' makes its waves look like old skin, and 'crawls' suggests slow, insect-like movement. One verb flips the scale of the scene and makes the eagle seem all-powerful — proof that a precise verb can carry a whole image.",
      themes: ["precise verbs", "personification", "viewpoint"],
    },
    {
      quote: "He clasps the crag with crooked hands",
      source: "Alfred, Lord Tennyson, 'The Eagle' (1851)",
      analysis:
        "The hard 'c/cr' alliteration sounds harsh and gripping, matching the claws on rock. Calling talons 'hands' personifies the eagle, making it seem almost human — or like an old, powerful king clutching his throne.",
      themes: ["alliteration", "personification", "sound"],
    },
    {
      quote: "Season of mists and mellow fruitfulness",
      source: "John Keats, 'To Autumn' (1819)",
      analysis:
        "The soft 'm' alliteration and the sibilance ('Season… mists') make the line sound slow, warm and drowsy, so the sound of the words matches the ripe, misty mood of early autumn. Description works on the ear as well as the eye.",
      themes: ["alliteration", "sound", "mood"],
    },
    {
      quote: "The river glideth at his own sweet will",
      source: "William Wordsworth, 'Composed upon Westminster Bridge, September 3, 1802'",
      analysis:
        "The Thames is personified as a calm, free individual ('his own sweet will'). The smooth verb 'glideth' and the long vowel sounds slow the line down, capturing the stillness of the city at dawn before anyone is awake.",
      themes: ["personification", "dawn", "rhythm"],
    },
    {
      quote: "the merciless iced east winds that knive us",
      source: "Wilfred Owen, 'Exposure' (written 1917–18)",
      analysis:
        "The wind is personified as a cruel attacker ('merciless') and the noun 'knife' is turned into a verb, 'knive', so the cold becomes a weapon. The weather is the enemy — a powerful, shocking example of fresh personification rather than the cliché 'the wind howled'.",
      themes: ["personification", "precise verbs", "weather"],
    },
    {
      quote: "the cold winter wind had brought with it clouds so sombre, and a rain so penetrating",
      source: "Charlotte Brontë, Jane Eyre (1847), Chapter 1",
      analysis:
        "The balanced pattern 'clouds so sombre… a rain so penetrating' gives the sentence a heavy, dragging rhythm. 'Sombre' (gloomy, serious) and 'penetrating' (piercing right through) are precise adjectives that set up the misery Jane is about to suffer — pathetic fallacy in the novel's opening lines.",
      themes: ["pathetic fallacy", "precise vocabulary", "opening"],
    },
    {
      quote: "the low leaden line beyond was the river",
      source: "Charles Dickens, Great Expectations (1861), Chapter 1",
      analysis:
        "The 'l' alliteration creates a flat, dull sound, and 'leaden' (the colour and heaviness of lead) makes the river look grey, heavy and lifeless. Seen through young Pip's eyes, the landscape feels bleak and threatening.",
      themes: ["alliteration", "connotation", "setting"],
    },
    {
      quote: "The MRT doors sighed open and the carriage breathed out a crowd.",
      source: "Model sentence written for this app",
      analysis:
        "Extended personification: the train sighs and breathes like a tired living creature. It shows the crowd's size and the weariness of rush hour without a single 'tell' word such as 'busy' or 'crowded'.",
      themes: ["personification", "show don't tell", "Singapore"],
    },
    {
      quote: "There was only one sound: the drip of the tap.",
      source: "Model sentence written for this app",
      analysis:
        "The colon creates a held-breath pause before the reveal, and saving the tiny sound for the end of the sentence makes the silence around it feel enormous. Punctuation here controls the reader's timing.",
      themes: ["colon", "sound", "tension"],
    },
    {
      quote: "The rain fell in straight silver rods, so close together that the far side of the road disappeared.",
      source: "Model sentence written for this app",
      analysis:
        "A precise metaphor ('silver rods') that matches the exact look of tropical rain, followed by a consequence that shows its heaviness. Compare the vague cliché 'it was raining cats and dogs', which shows the reader nothing.",
      themes: ["metaphor", "precision", "weather"],
    },
  ],

  modelWriting: [
    {
      title: "Dawn in the Gardens: a drone-to-zoom opening",
      task: "Write the opening two paragraphs of a description titled 'Dawn in the Gardens'.",
      text: "At six o'clock the city is still a shadow. Beyond the Gardens, the condominium towers stand dark against a sky the colour of a bruise that is beginning to heal — violet at the top, then grey, then a thin line of apricot above the trees. No traffic yet. Only the rain trees, enormous and patient, holding the last of the night in their branches.\n\nDown by Swan Lake, the water is a sheet of pewter. A heron stands at its edge on one thin leg, so still it could be a garden ornament. Then — so suddenly that a jogger on the path stops mid-stride — it stabs. When its head rises, a silver fish is flickering in its beak, and the first sunlight is flickering on the water, and the whole lake seems to wake at once.",
      annotations: [
        "Drone-shot structure: the city skyline and sky first, then Swan Lake, then one heron, then one fish.",
        "Fresh imagery: 'a bruise that is beginning to heal' links the colours of dawn to recovery and avoids the cliché 'a golden sunrise'.",
        "The minor sentence 'No traffic yet.' slows the pace and stresses the stillness.",
        "Personification: the rain trees are 'patient', 'holding the last of the night', giving the setting a calm character.",
        "The pair of dashes and the short verb 'it stabs' create a sudden shift from stillness to action.",
        "Polysyndeton ('and… and…') in the final sentence speeds the rhythm up as the scene wakes.",
        "Consistent present tense creates immediacy.",
      ],
    },
    {
      title: "Redrafting with ARMS: the MRT at rush hour",
      task: "Redraft a weak paragraph about the MRT at rush hour using Add, Remove, Move, Substitute.",
      text: "BEFORE:\nThe MRT was very crowded and busy at 8 o'clock. There were lots of people and it was very noisy and hot. I could see people on their phones. I felt squashed. It was horrible.\n\nAFTER:\nAt Raffles Place the doors sighed open, and the carriage breathed out a crowd — then, before it could close its mouth, swallowed another. I was pressed between a briefcase and a backpack that smelled faintly of curry puffs. Nobody spoke. Thumbs scrolled; earbuds leaked tinny music; a toddler on his father's shoulders stared at the ceiling as though the answers to everything were written there. The air-con roared but could not win. When the train lurched, the whole carriage swayed together like seaweed in a current, and for one long second I could not tell where I ended and the stranger beside me began.",
      annotations: [
        "Remove: every tell ('crowded', 'busy', 'noisy', 'horrible') and the weak 'I could see' have gone.",
        "Substitute: a named station (Raffles Place) replaces a vague time; 'roared', 'lurched' and 'swayed' replace 'was'.",
        "Add: smell (curry puffs), sound (tinny music, roaring air-con) and touch (pressed, swayed).",
        "Extended personification: the carriage 'breathed out' and 'swallowed' passengers like a living creature.",
        "Rhythm: the short sentence 'Nobody spoke.' is followed by a list separated by semicolons.",
        "Move: the most powerful detail (losing yourself in the crowd) is saved for the end, showing 'I felt squashed' instead of saying it.",
      ],
    },
    {
      title: "A storm at sea: pathetic fallacy and a cyclical structure",
      task: "Describe a ship caught in a storm, inspired by the opening of The Tempest. Include a clear shift in mood.",
      text: "For three days the sea had been a sheet of polished glass, and the sailors had grown lazy in the sun. They mended ropes. They sang. Not one of them looked up.\n\nOn the fourth afternoon, the horizon swelled with cloud the colour of gunmetal, and the air thickened, close and sour, the way it does before a fever. The sails hung limp. Somewhere far off, thunder muttered to itself.\n\nThen the storm arrived — not gradually, but all at once, like a door kicked open. Waves reared higher than the mast and fell on the deck with the weight of collapsing walls. Rain needled the men's faces. Lightning tore the sky apart and, for one white instant, every terrified face was printed on the dark; then blackness again, and the scream of timber, and the sea climbing, climbing, as if it meant to put out the stars.\n\nBy dawn, there was nothing. The sea lay flat and innocent, polished glass once more, and a single plank turned slowly in the sun.",
      annotations: [
        "Pathetic fallacy: the weather moves from calm to menace to fury, mirroring the sailors' danger.",
        "Three short sentences ('They mended ropes. They sang. Not one of them looked up.') build calm — and a hint of threat.",
        "Fresh imagery: 'like a door kicked open', 'thunder muttered to itself', 'Rain needled'.",
        "A semicolon and polysyndeton ('and… and…') make the climax feel relentless; the repetition 'climbing, climbing' echoes Miranda's sea 'mounting to th' welkin's cheek'.",
        "Cyclical structure: 'polished glass' returns at the end, but now the calm is sinister because the ship has gone.",
        "The final image — one plank turning in the sun — shows the tragedy without stating it.",
      ],
    },
    {
      title: "Little India at Deepavali: a sensory paragraph",
      task: "Write one descriptive paragraph about a festival, focusing on the senses and ending with a zoom.",
      text: "Serangoon Road has swallowed the sunset and replaced it with its own. Arches of light — peacocks, lotus flowers, curling golden vines — stretch from lamp-post to lamp-post, and beneath them the whole street hums. Jasmine and marigold garlands hang in heavy ropes outside the flower stalls, so fragrant that the air tastes sweet. A stallholder tips a tray of murukku into a paper bag; it rattles like dry leaves. Further along, a girl crouches on the pavement outside her family's shop, letting coloured powder fall from her fingers in a slow, careful spiral: red, then saffron, then a blue as deep as the sky above the lights. She does not look up at the crowds. She is making her own small sun.",
      annotations: [
        "Opening metaphor: the street 'has swallowed the sunset and replaced it with its own' — the lights become a new sun.",
        "A list inside a pair of dashes gives precise festival detail without slowing the main sentence.",
        "All five senses appear naturally — sight (the light), sound (the hum, the rattle), smell (the jasmine), touch (powder falling from her fingers) and taste, through the synaesthesia of 'the air tastes sweet'.",
        "The colon introduces a list of colours that builds slowly, like the spiral itself.",
        "The camera zooms from a whole street to one girl's fingers.",
        "Cyclical touch: 'her own small sun' echoes the opening sunset, ending on quiet focus amid the crowd.",
      ],
    },
  ],

  mnemonics: [
    {
      topic: "The five senses",
      device: "Some Hungry Sharks Taste Toes",
      explanation:
        "Sight, Hearing (sound), Smell, Taste, Touch. Jot one precise detail for each when planning — then use only the two or three that suit your mood.",
    },
    {
      topic: "Five sentence types for variety",
      device: "Some Lazy Cats Fear Mice",
      explanation:
        "Short sentence (impact), List (detail), Complex sentence (with a subordinate clause), Fronted adverbial (Beneath the lanterns, …), Minor sentence (Silence.). Try to use each at least once in a longer piece.",
    },
    {
      topic: "Redrafting",
      device: "ARMS",
      explanation:
        "Add (a sense, a detail, a short sentence), Remove (tells, clichés, adjective piles, 'I could see'), Move (save the strongest detail for the end), Substitute (weak verbs and vague nouns for precise ones).",
    },
    {
      topic: "When to start a new paragraph",
      device: "TiPToP",
      explanation:
        "New paragraph for a change of Time, Place, Topic or Person. In description, that usually means a new camera position or a shift in mood.",
    },
  ],

  examMistakes: [
    "Turning the description into a story: dialogue, a chase or a plot twist takes over and the actual description gets squeezed out. In a descriptive task, the place and atmosphere are the 'plot'.",
    "Adjective piles and 'very': 'the very big, dark, scary, old house' — four weak words instead of one precise noun or verb.",
    "Using the senses as a checklist ('I could see… I could hear… I could smell…'), which sounds mechanical and tells the reader you are ticking boxes.",
    "Relying on clichés — 'as cold as ice', 'the wind howled', 'a golden sun', 'butterflies in my stomach' — which examiners see hundreds of times.",
    "Drifting between present and past tense, or between 'I' and 'he', without any reason.",
    "Writing one enormous block with no paragraphs, or paragraphs that have no clear job, so there is no sense of structure.",
    "Overusing ellipsis and exclamation marks, and joining two sentences with only a comma (a comma splice).",
    "Using long thesaurus words incorrectly or piling up five similes in one sentence ('purple prose'), which makes the writing harder to picture, not easier.",
  ],

  misconceptions: [
    {
      wrong: "The more adjectives I use, the more descriptive my writing will be.",
      right:
        "Adjective piles dilute each other and are often 'tells'. Precise nouns and vivid verbs (trudged, mynah, frangipani) create sharper pictures. One well-chosen adjective beats three vague ones.",
    },
    {
      wrong: "Good descriptive writing needs long, impressive words.",
      right:
        "Ambitious vocabulary is rewarded only when it is precise and fits the tone. 'Needled' or 'leaden' are better than 'effulgent' or 'crepuscular' if the reader can instantly picture them.",
    },
    {
      wrong: "'Show, don't tell' means I must never state anything directly.",
      right:
        "It means giving the evidence first. A short, plain statement after strong showing can be very powerful ('It was the loudest place on earth.'). The problem is telling instead of showing, not telling ever.",
    },
    {
      wrong: "Pathetic fallacy means writing that is sad or 'pathetic'.",
      right:
        "'Pathetic' here comes from the Greek 'pathos', meaning feeling. Pathetic fallacy is when weather or setting reflects a mood or emotion — it can be joyful (sunshine at a wedding) as well as gloomy.",
    },
    {
      wrong: "A sentence without a main verb is always a grammar mistake.",
      right:
        "A minor sentence ('Silence.' 'Fog everywhere.') is a deliberate fragment used for effect. It is rewarded when it is clearly controlled and rare — but accidental fragments are still errors.",
    },
    {
      wrong: "I have to use all five senses in every paragraph.",
      right:
        "Choose the senses that suit the mood and the moment. A night scene might rely on sound and touch; a market on smell and sound. Forcing all five into every paragraph creates a checklist.",
    },
  ],

  expertDebates: [
    {
      question: "Is 'show, don't tell' always good advice?",
      detail:
        "Many writing teachers treat it as a golden rule, but plenty of great writers 'tell' constantly — Dickens openly comments on what he describes ('a great (and dirty) city'). Some argue the rule should really be 'show the important things, tell the unimportant ones', because showing everything makes writing slow and bloated. The interesting question is when a tell earns its place.",
    },
    {
      question: "How much figurative language is too much?",
      detail:
        "Rich imagery can make writing vivid, but stacking simile on metaphor produces 'purple prose' — writing so ornate that it draws attention to itself rather than to the scene. Some writers (like Dickens) pile images up joyfully; others (like Ernest Hemingway) cut almost all of them for plainness. Examiners reward ambition, but also control: is each image doing a job?",
    },
    {
      question: "Should a description contain a story?",
      detail:
        "Pure description with no events can feel static, so many strong pieces include a small movement — a storm arriving, a heron striking, a grandmother peeling prawns. Others argue that once a plot appears, students abandon description for action. Most teachers suggest 'a hint of narrative': something small changes, but the place stays the star.",
    },
  ],

  realWorld: [
    {
      title: "Travel writing and tourism",
      detail:
        "Travel writers and tourism campaigns use sensory description to make you long to visit a place — the scent of a night market, the cool of a temple floor. Good descriptions literally sell holidays.",
      emoji: "🌏",
    },
    {
      title: "Food writing and menus",
      detail:
        "Restaurant critics and menu writers choose precise verbs and textures — 'crisp', 'charred', 'slow-braised' — because the right word can make a reader hungry before they have tasted anything.",
      emoji: "🍜",
    },
    {
      title: "Film and theatre",
      detail:
        "Screenplays and scripts open each scene with a short description of the setting. Directors then translate those words into camera shots — the same drone-to-zoom structure you use in writing.",
      emoji: "🎬",
    },
    {
      title: "Nature documentaries",
      detail:
        "Narrators such as David Attenborough describe animals and landscapes with vivid verbs and careful pacing, often pausing to let a single image speak — showing, not telling, out loud.",
      emoji: "🌿",
    },
    {
      title: "Video game worlds",
      detail:
        "Game designers write detailed descriptions of places before artists build them, and use 'environmental storytelling' — a broken window, a half-eaten meal — to show players what happened without telling them.",
      emoji: "🎮",
    },
    {
      title: "Estate agents and adverts",
      detail:
        "Property listings and adverts choose words for their connotations: 'cosy' instead of 'small', 'characterful' instead of 'old'. Spotting this makes you a sharper reader of persuasive description.",
      emoji: "🏠",
    },
  ],

  flashcards: [
    { front: "Show, don't tell", back: "Give the reader evidence (actions, senses, details) so they infer a feeling, instead of naming the feeling directly." },
    { front: "Simile", back: "A comparison using 'like' or 'as': 'the queue coiled like a sleeping python'." },
    { front: "Metaphor", back: "Saying one thing is another: 'the carriage was a tin of sardines'." },
    { front: "Personification", back: "Giving human qualities or actions to something non-human: 'the doors sighed open'." },
    { front: "Pathetic fallacy", back: "When weather or setting reflects a mood or emotion. Term coined by John Ruskin in 1856." },
    { front: "Cliché", back: "An overused phrase or image that has lost its impact, e.g. 'as cold as ice', 'the wind howled'." },
    { front: "Onomatopoeia", back: "A word that imitates the sound it describes: sizzle, clang, hiss, gurgle." },
    { front: "Minor sentence", back: "A deliberate fragment with no main verb, used for effect: 'Silence.' 'Fog everywhere.'" },
    { front: "Fronted adverbial", back: "A word or phrase at the start of a sentence saying when, where or how, followed by a comma: 'Beneath the lanterns, …'" },
    { front: "Asyndeton vs polysyndeton", back: "Asyndeton: a list with no 'and' (fast, crowded). Polysyndeton: 'and… and… and' (endless, overwhelming)." },
    { front: "Connotation", back: "The associations a word carries beyond its dictionary meaning: 'scrawny' suggests weakness; 'slim' suggests elegance." },
    { front: "Synaesthesia", back: "Describing one sense in terms of another: 'a loud shirt', 'the air tastes sweet'." },
    { front: "Cyclical structure", back: "The ending echoes the opening image or phrase, usually with a change, giving a sense of completion." },
    { front: "Colon for effect", back: "Introduces a reveal or explanation after a complete sentence: 'There was only one sound: the drip of the tap.'" },
    { front: "Semicolon", back: "Joins two closely linked complete sentences: 'The street was empty; the lanterns still burned.'" },
    { front: "ARMS", back: "Redrafting checklist: Add, Remove, Move, Substitute." },
  ],

  mustKnow: [
    "Can you rewrite a 'telling' sentence so that it shows the feeling through precise evidence?",
    "Can you include sound, smell, touch or taste naturally, without writing 'I could see / hear / smell'?",
    "Can you identify and write a simile, metaphor, personification and pathetic fallacy — and replace a cliché with a fresh image?",
    "Can you replace an adjective pile or a verb + adverb with one precise noun or verb?",
    "Can you vary sentence length and openings, including a short sentence, a complex sentence, a fronted adverbial, a list and a minor sentence?",
    "Can you plan a structure — drone shot to zoom, change over time, shift in mood or cyclical — and explain why you chose it?",
    "Can you keep viewpoint and tense consistent, and paragraph using TiPToP?",
    "Can you use a colon, a semicolon and a dash accurately and for effect, and avoid comma splices?",
    "Can you plan from a picture using background, midground and foreground, and redraft a paragraph with ARMS?",
  ],

  videos: [
    { title: "Descriptive writing: how to get top marks", channel: "Mr Bruff", url: "https://www.youtube.com/results?search_query=mr+bruff+descriptive+writing" },
    { title: "Descriptive writing techniques and model answers", channel: "Mr Salles Teaches English", url: "https://www.youtube.com/results?search_query=mr+salles+descriptive+writing" },
    { title: "KS3 descriptive writing: show, don't tell", channel: "BBC Bitesize", url: "https://www.youtube.com/results?search_query=bbc+bitesize+ks3+descriptive+writing" },
    { title: "Writing a description from a picture", channel: "Stacey Reay", url: "https://www.youtube.com/results?search_query=stacey+reay+descriptive+writing+picture" },
  ],

  quiz: {
    mcq: [
      {
        id: "dsc-quiz-mcq-1",
        question: "Which sentence SHOWS, rather than tells, that the hawker centre is crowded?",
        options: [
          "The hawker centre was extremely crowded and busy.",
          "It was the busiest hawker centre I had ever seen.",
          "Every plastic stool was taken, and the queue for chicken rice coiled past the drinks stall.",
          "There were so many people that it was very full.",
        ],
        answerIndex: 2,
        hint: "Which sentence never uses a word like 'busy', 'crowded' or 'full'?",
        explanation:
          "The option ‘Every plastic stool was taken, and the queue for chicken rice…’ gives evidence — every stool taken, a queue coiling past another stall — so the reader concludes for themselves that it is crowded. The option ‘It was the busiest hawker centre I had ever seen.’ is tempting because 'the busiest I had ever seen' sounds emphatic, but it still simply names the quality ('busiest') instead of showing it.",
        guideRef: "show-dont-tell",
      },
      {
        id: "dsc-quiz-mcq-2",
        extract: "The rain trees held the last of the night in their branches.",
        question: "Which technique is used in this sentence?",
        options: ["Personification", "Simile", "Onomatopoeia", "Alliteration"],
        answerIndex: 0,
        hint: "Can trees really 'hold' something on purpose?",
        explanation:
          "The trees are given a human action — deliberately 'holding' the night — so this is personification. It is not a simile, because there is no 'like' or 'as', and it is not onomatopoeia, because no word imitates a sound.",
        guideRef: "figurative-language",
      },
      {
        id: "dsc-quiz-mcq-3",
        extract: "There was only one sound ___ the drip of the tap.",
        question: "Which punctuation mark best fills the gap to create a pause before a reveal?",
        options: ["A semicolon (;)", "An apostrophe (')", "An exclamation mark (!)", "A colon (:)"],
        answerIndex: 3,
        hint: "Which mark introduces an explanation or reveal after a complete sentence?",
        explanation:
          "A colon introduces a reveal after a complete sentence: 'There was only one sound: the drip of the tap.' A semicolon is tempting, but it must join two complete sentences, and 'the drip of the tap' cannot stand alone as a sentence.",
        guideRef: "punctuation-for-effect",
      },
      {
        id: "dsc-quiz-mcq-4",
        question:
          "A description begins with the whole city skyline, moves to one street market, then to one stall, and ends on an old woman's hands. Which structure is this?",
        options: ["Cyclical structure", "Drone shot to zoom in", "Change over time", "Flashback"],
        answerIndex: 1,
        hint: "Think of a camera moving from very wide to very close.",
        explanation:
          "Moving from a wide panorama to a single small detail is the drone-shot-to-zoom structure. It is not cyclical, because the ending does not return to or echo the opening skyline — it finishes somewhere new and small.",
        guideRef: "structure",
      },
    ],
    qa: [
      {
        id: "dsc-quiz-qa-1",
        question:
          "Rewrite this sentence so that it shows, rather than tells, the feeling: 'The classroom was very noisy.' Then explain in one sentence what you changed.",
        marks: 3,
        hint: "What would a microphone pick up? What are people doing? How does someone react?",
        modelAnswer:
          "Chairs scraped, a ruler clattered to the floor and thirty voices rose over each other until the teacher had to rap the desk twice before anyone turned round. I removed the 'tell' word 'noisy' and replaced it with specific sounds (scraping chairs, a clattering ruler, overlapping voices) and a person's reaction, so the reader works out the noise for themselves.",
        markScheme: [
          { point: "Includes at least one specific sound detail", keywords: ["scrape", "scraped", "clatter", "shout", "voices", "bang", "squeal", "chatter"] },
          { point: "Uses a precise or onomatopoeic verb rather than 'was'", keywords: ["clattered", "scraped", "rang", "screeched", "thudded", "banged", "echoed", "roared"] },
          { point: "Explains that the tell word has been replaced by evidence or a reaction", keywords: ["removed", "replaced", "evidence", "tell", "reader works out", "infer", "reaction", "instead of"] },
        ],
        commonError: "Swapping 'noisy' for a synonym such as 'deafening' or 'loud' — that is still telling, just with a different word.",
        guideRef: "show-dont-tell",
      },
      {
        id: "dsc-quiz-qa-2",
        question:
          "Explain the difference between a simile and a metaphor, and write an original example of each describing a place in Singapore.",
        marks: 4,
        hint: "One uses 'like' or 'as'. The other says something IS something else.",
        modelAnswer:
          "A simile compares two things using 'like' or 'as', for example: 'The queue at the bak kwa stall coiled like a sleeping python down Pagoda Street.' A metaphor says one thing is another without 'like' or 'as', so the comparison feels stronger and more direct, for example: 'At 8 a.m. the MRT carriage is a tin of human sardines.'",
        markScheme: [
          { point: "Defines simile as a comparison using 'like' or 'as'", keywords: ["like or as", "using like", "uses like", "using as", "'like'", "with like"] },
          { point: "Gives an original simile", keywords: ["like a", "like an", "as a", "as if", "as though", "as hot as", "as loud as"] },
          { point: "Defines metaphor as saying something is something else", keywords: ["is something else", "says it is", "without like", "directly", "is another", "states that"] },
          { point: "Gives an original metaphor", keywords: [" is a ", " was a ", " is an ", "became a", "turned into", "were a "] },
        ],
        commonError: "Writing two similes (or using 'like' in the metaphor), or giving clichés such as 'as hot as an oven' instead of original examples.",
        guideRef: "figurative-language",
      },
      {
        id: "dsc-quiz-qa-3",
        question:
          "What is pathetic fallacy? Write one sentence that uses it to create a tense mood just before an exam.",
        marks: 3,
        hint: "Weather or setting reflecting a feeling.",
        modelAnswer:
          "Pathetic fallacy is when the weather or setting reflects the mood or emotions of a scene or character. Example: 'Heavy grey clouds pressed down on the school roof, and the air hung thick and still, as if the whole sky were holding its breath for the exam to begin.'",
        markScheme: [
          { point: "Defines pathetic fallacy as weather/setting reflecting mood or emotion", keywords: ["weather", "setting", "reflects", "mirrors", "mood", "emotion", "feeling"] },
          { point: "Writes a sentence using weather or setting", keywords: ["cloud", "rain", "sky", "air", "wind", "thunder", "storm", "grey"] },
          { point: "The sentence creates tension (oppressive, still, threatening)", keywords: ["pressed", "heavy", "still", "holding its breath", "waiting", "loomed", "thick", "dark"] },
        ],
        commonError: "Thinking 'pathetic' means sad or weak, or writing a weather sentence that has no link to the mood at all.",
        guideRef: "figurative-language",
      },
      {
        id: "dsc-quiz-qa-4",
        extract: "Fog everywhere. Fog up the river… fog down the river… Fog on the Essex marshes, fog on the Kentish heights.\n— Charles Dickens, Bleak House",
        question: "Analyse how Dickens uses sentence structure in this extract to describe the fog.",
        marks: 4,
        hint: "Look at the length of the sentences and the word that keeps coming back.",
        modelAnswer:
          "Dickens opens with the two-word minor sentence 'Fog everywhere.', which has no main verb, so the fog simply exists — total and unchanging, as if the whole city is frozen. He then repeats 'Fog' at the start of phrase after phrase (anaphora), moving 'up the river', 'down the river' and across the 'Essex marshes' and 'Kentish heights'. This list of places makes the fog seem to seep into every corner of the landscape, so the reader feels just as surrounded and trapped by it as the people of London.",
        markScheme: [
          { point: "Identifies the minor sentence / lack of main verbs", keywords: ["minor sentence", "fragment", "no verb", "no main verb", "two words", "short sentence"] },
          { point: "Explains the effect of the minor sentence (static, total, frozen)", keywords: ["static", "frozen", "unchanging", "total", "stuck", "nothing moves", "exists"] },
          { point: "Identifies the repetition of 'Fog' (anaphora)", keywords: ["repetition", "repeats", "repeated", "anaphora", "again and again"] },
          { point: "Explains that the list/repetition makes the fog spread everywhere, trapping people", keywords: ["everywhere", "spread", "seep", "every corner", "inescapable", "trapped", "surround"] },
        ],
        commonError: "Only identifying the technique ('Dickens uses repetition') without explaining what it makes the reader feel about the fog.",
        guideRef: "sentence-variety",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "dsc-mcq-p1",
        title: "MCQ Paper 1",
        questions: [
          {
            id: "dsc-mcq-p1-q01",
            question: "Which of these sentences TELLS the reader how the character feels, rather than showing it?",
            options: [
              "Her hands shook as she unfolded the letter.",
              "She was terrified of what the letter might say.",
              "She read the first line three times without taking it in.",
              "The letter rustled in her trembling fingers.",
            ],
            answerIndex: 1,
            hint: "Look for a sentence that names the emotion directly.",
            explanation:
              "The option ‘She was terrified of what the letter might say.’ names the feeling outright ('terrified'), so it tells. The others give physical evidence — shaking hands, rereading, trembling fingers — that lets the reader infer fear. The option ‘The letter rustled in her trembling fingers.’ is tempting because 'trembling' is close to an emotion word, but it describes a visible action, not the feeling itself.",
            guideRef: "show-dont-tell",
          },
          {
            id: "dsc-mcq-p1-q02",
            question: "Which sentence appeals mainly to the sense of smell?",
            options: [
              "The lanterns glowed red against the dusk.",
              "The wok clanged against the burner.",
              "The plastic stool stuck to the backs of my legs.",
              "Garlic hit the hot oil, and the whole aisle filled with its sharp, sweet smoke.",
            ],
            answerIndex: 3,
            hint: "Which sentence would you notice with your nose?",
            explanation:
              "Garlic in hot oil and 'sharp, sweet smoke' are smells. The option ‘The lanterns glowed red against the dusk.’ is sight, the option ‘The wok clanged against the burner.’ is sound and the option ‘The plastic stool stuck to the backs…’ is touch. The option ‘The wok clanged against the burner.’ is tempting because a wok suggests cooking smells, but the sentence itself only describes the clanging sound.",
            guideRef: "five-senses",
          },
          {
            id: "dsc-mcq-p1-q03",
            extract: "The wind clawed at the shutters.",
            question: "Which technique is used here?",
            options: ["Personification", "Simile", "Onomatopoeia", "Minor sentence"],
            answerIndex: 0,
            hint: "Does wind really have claws?",
            explanation:
              "The wind is given the action of an animal or attacker clawing, so it is personification (giving a non-human thing living qualities or actions). It is not a simile because there is no 'like' or 'as', and 'clawed' does not imitate a sound, so it is not onomatopoeia.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p1-q04",
            question: "What is pathetic fallacy?",
            options: [
              "Any sentence that mentions the weather",
              "Writing that makes the reader feel pity",
              "When the weather or setting reflects a mood or emotion",
              "Comparing two things using 'like' or 'as'",
            ],
            answerIndex: 2,
            hint: "It links the outside world to an inner feeling.",
            explanation:
              "Pathetic fallacy is when weather or setting mirrors a mood — a storm during an argument, for instance. The option ‘Any sentence that mentions the weather’ is tempting, but simply mentioning weather is not enough; the weather must reflect an emotion. The option ‘Writing that makes the reader feel pity’ confuses 'pathetic' with 'pitiful'; the word actually comes from the Greek 'pathos', meaning feeling.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p1-q05",
            question: "Which of these is a cliché?",
            options: [
              "The rain fell in straight silver rods.",
              "The sky turned the colour of teh tarik.",
              "It was as quiet as a mouse.",
              "The fan churned the air without cooling it.",
            ],
            answerIndex: 2,
            hint: "Which phrase have you heard hundreds of times before?",
            explanation:
              "'As quiet as a mouse' is so overused that readers no longer picture anything — a cliché. The others are specific and fresh. The option ‘The sky turned the colour of teh tarik.’ might seem odd, but comparing a dusk sky to milky-brown teh tarik is an original image rooted in a Singapore setting.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p1-q06",
            extract: "The runner ______ up the final hill.",
            question: "Which verb best shows that the runner is exhausted?",
            options: ["trudged", "darted", "strode", "skipped"],
            answerIndex: 0,
            hint: "Which verb sounds heavy and slow?",
            explanation:
              "'Trudged' means walking slowly and heavily with effort — exactly how an exhausted person moves. 'Strode' is tempting because it suggests long steps, but it implies confidence and energy, the opposite of exhaustion. 'Darted' and 'skipped' are quick and light.",
            guideRef: "precise-vocabulary",
          },
          {
            id: "dsc-mcq-p1-q07",
            extract: "He ran quickly to the bus stop.",
            question: "Which revision replaces the verb + adverb with one precise verb?",
            options: [
              "He ran very quickly to the bus stop.",
              "He quickly ran to the bus stop.",
              "He ran fast to the bus stop.",
              "He sprinted to the bus stop.",
            ],
            answerIndex: 3,
            hint: "Look for the version with no adverb at all.",
            explanation:
              "'Sprinted' carries both ideas — running and speed — in a single strong verb. The option ‘He ran fast to the bus stop.’ is tempting because 'fast' is shorter than 'quickly', but it is still a weak verb propped up by an adverb.",
            guideRef: "precise-vocabulary",
          },
          {
            id: "dsc-mcq-p1-q08",
            question: "Which word meaning 'thin' carries the most negative connotations of weakness or neglect?",
            options: ["slim", "scrawny", "slender", "lean"],
            answerIndex: 1,
            hint: "Which word would you NOT use as a compliment?",
            explanation:
              "'Scrawny' suggests an unhealthy, bony, underfed thinness. 'Slim' and 'slender' are admiring, and 'lean' suggests fitness. 'Lean' might be tempting because it is used for meat or tough characters, but its connotations are strength, not weakness.",
            guideRef: "precise-vocabulary",
          },
          {
            id: "dsc-mcq-p1-q09",
            question: "Which of these is a minor sentence?",
            options: [
              "Silence.",
              "The hall fell silent.",
              "Everyone stopped.",
              "When the bell rang, the hall fell silent.",
            ],
            answerIndex: 0,
            hint: "A minor sentence has no main verb.",
            explanation:
              "'Silence.' has no verb at all, so it is a minor sentence. 'Everyone stopped.' is tempting because it is very short, but it has a subject ('Everyone') and a verb ('stopped'), so it is a complete simple sentence.",
            guideRef: "sentence-variety",
          },
          {
            id: "dsc-mcq-p1-q10",
            question: "Which sentence begins with a fronted adverbial?",
            options: [
              "The lanterns swayed in the warm breeze.",
              "The crowd surged and the drums began.",
              "Beneath the swaying lanterns, the crowd surged forward.",
              "The crowd surged forward beneath the swaying lanterns.",
            ],
            answerIndex: 2,
            hint: "The 'where/when/how' phrase must come FIRST, followed by a comma.",
            explanation:
              "'Beneath the swaying lanterns,' tells us where and is placed at the front of the sentence, followed by a comma. The option ‘The crowd surged forward beneath the swaying lanterns.’ contains exactly the same phrase, which makes it tempting, but there it comes at the end, so it is not fronted.",
            guideRef: "sentence-variety",
          },
          {
            id: "dsc-mcq-p1-q11",
            question: "Why might a writer place a very short sentence after several long ones?",
            options: [
              "To prove they know the rules of grammar",
              "To create impact or signal a sudden shift",
              "To slow the reader right down",
              "To add as much detail as possible",
            ],
            answerIndex: 1,
            hint: "Think of a drum beat after a long melody.",
            explanation:
              "A short sentence after long ones lands with sudden force, creating impact, tension or a shift. The option ‘To slow the reader right down’ is tempting, but it is long, flowing sentences that usually slow the reader down; a short sentence makes them stop abruptly, not linger.",
            guideRef: "sentence-variety",
          },
          {
            id: "dsc-mcq-p1-q12",
            extract: "Lanterns, drums, firecrackers, shouting.",
            question: "A list with no 'and' between the items, like this one, is called:",
            options: ["polysyndeton", "a tricolon", "a complex sentence", "asyndeton"],
            answerIndex: 3,
            hint: "The prefix 'a-' means 'without'.",
            explanation:
              "Asyndeton is a list without conjunctions, which makes it feel fast and crowded. Polysyndeton is the opposite ('and… and… and'). A tricolon is tempting, but it is a group of exactly three, and this list has four items.",
            guideRef: "sentence-variety",
          },
          {
            id: "dsc-mcq-p1-q13",
            question:
              "A description of a wet market begins at 5 a.m. as the stalls are set up and ends at noon as the floors are hosed down. Which structure is this?",
            options: ["Drone shot to zoom in", "Cyclical structure", "A shift in viewpoint", "Change over time"],
            answerIndex: 3,
            hint: "What changes between the opening and the ending — the camera position, or the clock?",
            explanation:
              "The piece is organised by the passing of time, from early morning to noon, so it is a change-over-time structure. It is not cyclical, because the ending does not echo the opening image; it simply moves on to a later moment.",
            guideRef: "structure",
          },
          {
            id: "dsc-mcq-p1-q14",
            question: "What is a cyclical structure?",
            options: [
              "The ending echoes the opening, often with a change",
              "Each paragraph describes a different season",
              "The writer describes a circle of objects",
              "The events are told in reverse order",
            ],
            answerIndex: 0,
            hint: "Think of a circle that closes back on its starting point.",
            explanation:
              "In a cyclical structure the final lines return to the opening image or phrase, usually changed, giving a sense of completion. The option ‘Each paragraph describes a different season’ is tempting because seasons are a cycle, but a cyclical structure is about the ending echoing the opening, not about seasons.",
            guideRef: "structure",
          },
          {
            id: "dsc-mcq-p1-q15",
            question: "Which sentence contains a tense error?",
            options: [
              "The rain hammers the roof and the drains overflow.",
              "The rain hammers the roof and the drains overflowed.",
              "The rain hammered the roof and the drains overflowed.",
              "The rain had hammered the roof all night.",
            ],
            answerIndex: 1,
            hint: "Check whether both verbs are in the same time.",
            explanation:
              "In the option ‘The rain hammers the roof and the drains overflowed.’, 'hammers' is present but 'overflowed' is past, so the tense drifts. The option ‘The rain hammers the roof and the drains overflow.’ is consistently present and the option ‘The rain hammered the roof and the…’ consistently past. The option ‘The rain had hammered the roof all…’ is tempting because 'had hammered' looks different, but it is a correct past perfect describing something that happened before.",
            guideRef: "viewpoint-tense-paragraphing",
          },
          {
            id: "dsc-mcq-p1-q16",
            question: "In the TiPToP rule, which four changes signal a new paragraph?",
            options: [
              "Tone, Pace, Tense, Punctuation",
              "Title, Plot, Theme, Purpose",
              "Time, Place, Topic, Person",
              "Technique, Point, Topic, Paragraph",
            ],
            answerIndex: 2,
            hint: "The capital letters in TiPToP are the clue.",
            explanation:
              "TiPToP stands for Time, Place, Topic, Person. The option ‘Tone, Pace, Tense, Punctuation’ is tempting because tone and pace matter in description, but they are not what the mnemonic stands for.",
            guideRef: "viewpoint-tense-paragraphing",
          },
          {
            id: "dsc-mcq-p1-q17",
            question: "Which sentence uses a semicolon correctly?",
            options: [
              "The street was empty; the lanterns still burned.",
              "The street was; empty and silent.",
              "Although the street was empty; the lanterns burned.",
              "The lanterns still burned; above the empty street.",
            ],
            answerIndex: 0,
            hint: "Both sides of a semicolon must be able to stand alone as sentences.",
            explanation:
              "In the option ‘The street was empty; the lanterns still…’, 'The street was empty' and 'the lanterns still burned' are both complete sentences, closely linked — perfect for a semicolon. The option ‘Although the street was empty; the lanterns…’ is tempting, but 'Although the street was empty' is a subordinate clause that cannot stand alone, so it needs a comma instead.",
            guideRef: "punctuation-for-effect",
          },
          {
            id: "dsc-mcq-p1-q18",
            question: "What is a comma splice?",
            options: [
              "Using a comma after a fronted adverbial",
              "Using commas between items in a list",
              "Placing a pair of commas around extra information",
              "Joining two complete sentences with only a comma",
            ],
            answerIndex: 3,
            hint: "It is an error, not a technique.",
            explanation:
              "A comma splice wrongly joins two complete sentences with just a comma ('The rain stopped, the steam rose.'). The other options are all correct uses of the comma — the option ‘Using a comma after a fronted adverbial’ is tempting because it involves joining parts of a sentence, but a comma after a fronted adverbial is required, not an error.",
            guideRef: "punctuation-for-effect",
          },
          {
            id: "dsc-mcq-p1-q19",
            question: "When planning from a picture, why is it useful to divide it into background, midground and foreground?",
            options: [
              "So that you can describe every object in the picture",
              "So that you can count the people accurately",
              "To give each layer its own paragraph and a camera-like structure",
              "Because examiners require exactly three paragraphs",
            ],
            answerIndex: 2,
            hint: "Think about how a film camera moves through a scene.",
            explanation:
              "The layers become camera positions, giving you a ready-made structure that can move from wide to close. The option ‘So that you can describe every object in the picture’ is tempting, but describing every object produces a list; strong writers select details rather than recording everything.",
            guideRef: "planning-redrafting",
          },
          {
            id: "dsc-mcq-p1-q20",
            question: "In the ARMS redrafting method, what does the M stand for?",
            options: ["Mark", "Move", "Metaphor", "Mood"],
            answerIndex: 1,
            hint: "ARMS is four actions you do to a draft.",
            explanation:
              "ARMS = Add, Remove, Move, Substitute. 'Move' means reordering words or sentences so the most powerful detail lands at the end. 'Metaphor' is tempting because it is a descriptive technique, but every ARMS letter is an action verb.",
            guideRef: "planning-redrafting",
          },
        ],
      },
      {
        id: "dsc-mcq-p2",
        title: "MCQ Paper 2",
        passage: {
          title: "London in fog",
          source: "Charles Dickens, Bleak House (1852–53), Chapter 1",
          text: "London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill. Smoke lowering down from chimney-pots, making a soft black drizzle, with flakes of soot in it as big as full-grown snowflakes — gone into mourning, one might imagine, for the death of the sun. Dogs, undistinguishable in mire. Horses, scarcely better; splashed to their very blinkers. Foot passengers, jostling one another's umbrellas in a general infection of ill temper, and losing their foot-hold at street-corners, where tens of thousands of other foot passengers have been slipping and sliding since the day broke (if this day ever broke), adding new deposits to the crust upon crust of mud, sticking at those points tenaciously to the pavement, and accumulating at compound interest.\n\nFog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls defiled among the tiers of shipping and the waterside pollutions of a great (and dirty) city. Fog on the Essex marshes, fog on the Kentish heights. Fog creeping into the cabooses of collier-brigs; fog lying out on the yards and hovering in the rigging of great ships; fog drooping on the gunwales of barges and small boats. Fog in the eyes and throats of ancient Greenwich pensioners, wheezing by the firesides of their wards; fog in the stem and bowl of the afternoon pipe of the wrathful skipper, down in his close cabin; fog cruelly pinching the toes and fingers of his shivering little 'prentice boy on deck. Chance people on the bridges peeping over the parapets into a nether sky of fog, with fog all round them, as if they were up in a balloon and hanging in the misty clouds.",
          note:
            "Megalosaurus = a dinosaur; mire = deep mud; aits = small river islands; collier-brigs = coal ships; 'prentice = apprentice; nether = lower.",
        },
        questions: [
          {
            id: "dsc-mcq-p2-q01",
            question: "The passage opens with the single word 'London.' What type of sentence is this?",
            options: ["A complex sentence", "A compound sentence", "A minor sentence", "A rhetorical question"],
            answerIndex: 2,
            hint: "Is there a verb?",
            explanation:
              "'London.' has no verb, so it is a minor sentence — like a heading or a camera's first establishing shot. It is not compound or complex, which both need clauses with verbs.",
            guideRef: "sentence-variety",
          },
          {
            id: "dsc-mcq-p2-q02",
            extract: "Implacable November weather.",
            question: "What does the word 'implacable' suggest about the weather?",
            options: [
              "It cannot be calmed, softened or escaped",
              "It is mild and pleasant",
              "It changes from hour to hour",
              "It is unusually warm for November",
            ],
            answerIndex: 0,
            hint: "Use the glossary — and think of someone you cannot calm down.",
            explanation:
              "'Implacable' means impossible to calm or appease, so the weather feels relentless and almost hostile, like an enemy who will not be pacified. The option ‘It changes from hour to hour’ is tempting because bad weather can be changeable, but 'implacable' stresses the opposite — that it will not ease at all.",
            guideRef: "precise-vocabulary",
          },
          {
            id: "dsc-mcq-p2-q03",
            extract: "it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.",
            question: "What is the main effect of this image?",
            options: [
              "It tells us that London had a zoo",
              "It shows that the weather is warm",
              "It describes something that really happened",
              "Its comic exaggeration suggests the mud is so deep that London feels prehistoric, as if the world has only just emerged from a flood",
            ],
            answerIndex: 3,
            hint: "'Would not be wonderful' here means 'would not be surprising'. Why might a dinosaur not be surprising?",
            explanation:
              "Dickens imagines the streets so muddy that it is as if the floodwaters have just drained away and dinosaurs might still roam — a humorous hyperbole that makes the filth seem primeval. The option ‘It describes something that really happened’ is tempting only if you miss the 'would not be wonderful' (it is imagined, not real).",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p2-q04",
            extract: "flakes of soot in it as big as full-grown snowflakes",
            question: "Which technique is this?",
            options: ["Metaphor", "Simile", "Onomatopoeia", "Minor sentence"],
            answerIndex: 1,
            hint: "Look for the comparison word.",
            explanation:
              "'As big as full-grown snowflakes' compares soot to snow using 'as', so it is a simile. Metaphor is tempting because there is a comparison, but a metaphor would state the soot IS snow, without 'like' or 'as'.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p2-q05",
            extract: "gone into mourning, one might imagine, for the death of the sun",
            question: "Why is 'mourning' an effective word choice here?",
            options: [
              "It means 'early in the day', showing the time",
              "The black soot is like mourners' black clothes, turning the dark day into a funeral for the sun",
              "It shows that people are waking up",
              "It suggests that the weather will soon improve",
            ],
            answerIndex: 1,
            hint: "Mourning (with a 'u') is not the same as morning.",
            explanation:
              "Mourning is grieving for the dead; Victorian mourners wore black. The black soot becomes the city's funeral clothes for 'the death of the sun' — the vanished daylight. The option ‘It means 'early in the day', showing the time’ is the trap: it confuses 'mourning' with 'morning'.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p2-q06",
            extract: "Dogs, undistinguishable in mire.",
            question: "What does this tell the reader?",
            options: [
              "The dogs are lost in the city",
              "The dogs are unusually clean",
              "There are no dogs in London",
              "The dogs are so covered in mud that you cannot tell them apart from it",
            ],
            answerIndex: 3,
            hint: "'Undistinguishable' = cannot be told apart. 'Mire' = deep mud.",
            explanation:
              "The dogs are so plastered in mud that they blend into it — Dickens shows the depth of the mud rather than simply saying 'it was very muddy'. The option ‘The dogs are lost in the city’ is tempting because the dogs are hard to see, but the point is the mud covering them, not that they are lost.",
            guideRef: "show-dont-tell",
          },
          {
            id: "dsc-mcq-p2-q07",
            extract: "Foot passengers, jostling one another's umbrellas in a general infection of ill temper",
            question: "What does the word 'infection' suggest?",
            options: [
              "Bad temper is spreading from person to person like a disease",
              "The people are physically ill with a fever",
              "The umbrellas are dirty",
              "The people are cheerful despite the weather",
            ],
            answerIndex: 0,
            hint: "How does an infection travel through a crowd?",
            explanation:
              "Dickens uses 'infection' metaphorically: irritation passes from one jostling pedestrian to the next like a contagious illness. The option ‘The people are physically ill with a fever’ is tempting because 'infection' literally means disease, but here it describes the spread of 'ill temper', not a fever.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p2-q08",
            extract: "since the day broke (if this day ever broke)",
            question: "Why does Dickens add the words in brackets?",
            options: [
              "To correct a mistake in the previous phrase",
              "To tell the reader exactly what time it is",
              "To suggest, with dry humour, that it is so dark the day may never have dawned at all",
              "To show that the narrator has been asleep",
            ],
            answerIndex: 2,
            hint: "What does it mean for day to 'break'?",
            explanation:
              "Day 'breaks' at dawn. By questioning whether it ever did, Dickens jokes that the fog and soot are so thick it is hard to tell day from night — gloom delivered with wit. The option ‘To correct a mistake in the previous phrase’ is tempting, but the brackets add a wry comment rather than fixing an error.",
            guideRef: "punctuation-for-effect",
          },
          {
            id: "dsc-mcq-p2-q09",
            extract: "adding new deposits to the crust upon crust of mud, sticking at those points tenaciously to the pavement, and accumulating at compound interest.",
            question: "What is the mud being compared to?",
            options: ["A layered cake", "An erupting volcano", "A flowing river", "Money growing in a bank account"],
            answerIndex: 3,
            hint: "Where else do you hear 'deposits' and 'compound interest'?",
            explanation:
              "'Deposits' and 'compound interest' are banking terms: the mud piles up and grows on itself like savings in a bank. The option ‘A layered cake’ is tempting because 'crust upon crust' suggests layers, but the extended comparison here is financial.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p2-q10",
            question: "Which phrase best describes the overall mood of the first paragraph?",
            options: ["Joyful and lively", "Peaceful and calm", "Gloomy and oppressive", "Magical and enchanting"],
            answerIndex: 2,
            hint: "Think about the mud, the soot and the 'death of the sun'.",
            explanation:
              "Mud, soot, mourning and 'ill temper' make the mood gloomy and oppressive. 'Joyful and lively' might tempt you because of the comic dinosaur and the busy crowds, but the humour is dark and the crowds are bad-tempered.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p2-q11",
            question: "The second paragraph repeats 'Fog' at the start of many phrases. What is this kind of repetition called?",
            options: ["Anaphora", "Onomatopoeia", "Oxymoron", "Sibilance"],
            answerIndex: 0,
            hint: "It is repetition at the beginning of successive phrases.",
            explanation:
              "Anaphora is the repetition of a word or phrase at the start of successive clauses. Sibilance is tempting because it is also a pattern of repetition, but it is the repetition of soft 's' sounds, not of a whole word — and 'fog' contains no 's' at all.",
            guideRef: "sentence-variety",
          },
          {
            id: "dsc-mcq-p2-q12",
            question: "What is the main effect of repeating 'Fog' so often?",
            options: [
              "It deliberately confuses the reader about the setting",
              "It makes the fog seem to spread into every corner of the scene, inescapable",
              "It shows that Dickens ran out of words",
              "It speeds the passage up into an action scene",
            ],
            answerIndex: 1,
            hint: "Each repetition takes the fog somewhere new.",
            explanation:
              "Each 'Fog' carries it into a new place — river, marshes, ships, cabins, people's throats — so it seems to fill the whole of London and beyond. The option ‘It deliberately confuses the reader about the setting’ is tempting because fog obscures things, but the repetition actually clarifies how far the fog reaches.",
            guideRef: "sentence-variety",
          },
          {
            id: "dsc-mcq-p2-q13",
            question: "How is the second paragraph structured?",
            options: [
              "It zooms in on one character's thoughts throughout",
              "It moves backwards in time",
              "It sweeps across many places — river, marshes, ships, people — like a camera panning across London",
              "It follows a single conversation",
            ],
            answerIndex: 2,
            hint: "List the places the fog visits.",
            explanation:
              "The paragraph pans from the river to the marshes, the ships, cabins, an apprentice's fingers and people on bridges — a sweeping camera movement. The option ‘It zooms in on one character's thoughts throughout’ is tempting because it does briefly zoom to the 'prentice boy', but it never settles on anyone's thoughts.",
            guideRef: "structure",
          },
          {
            id: "dsc-mcq-p2-q14",
            extract: "fog cruelly pinching the toes and fingers of his shivering little 'prentice boy on deck",
            question: "Which technique is used in 'fog cruelly pinching'?",
            options: ["Simile", "Alliteration", "Onomatopoeia", "Personification"],
            answerIndex: 3,
            hint: "Can fog choose to be cruel?",
            explanation:
              "The fog is given a deliberate, spiteful human action — 'cruelly pinching' — so it is personification. Alliteration is tempting only if you spot repeated sounds elsewhere, but the key effect here comes from making the fog a bully.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p2-q15",
            question: "Why do so many of Dickens's sentences in this passage lack a main verb?",
            options: [
              "The minor sentences create a static, frozen city in which nothing moves forward, as if time itself is stuck in the fog",
              "Victorian English did not use verbs in description",
              "To show that the narrator is uneducated",
              "To speed up the action",
            ],
            answerIndex: 0,
            hint: "Verbs are action words. What happens when there is no action?",
            explanation:
              "Without main verbs, nothing 'happens': the scene becomes a series of frozen snapshots, mirroring a city paralysed by fog and mud. The option ‘To speed up the action’ is tempting because short fragments can feel quick, but here the effect is stillness and stagnation, not action.",
            guideRef: "sentence-variety",
          },
          {
            id: "dsc-mcq-p2-q16",
            extract: "peeping over the parapets into a nether sky of fog, with fog all round them, as if they were up in a balloon and hanging in the misty clouds",
            question: "What feeling does this comparison create?",
            options: [
              "Excitement about flying",
              "Disorientation — fog above and below, as if the solid ground has vanished",
              "Relief that the fog is lifting",
              "Anger at the people on the bridge",
            ],
            answerIndex: 1,
            hint: "'Nether' means lower. Where is the sky now?",
            explanation:
              "Looking down from the bridge, people see 'a nether sky' of fog — sky below as well as above — so they seem to float, cut off from the earth. The option ‘Excitement about flying’ is tempting because balloons suggest adventure, but the image stresses disorientation, not thrill.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p2-q17",
            question: "Which comment about the passage is the most analytical?",
            options: [
              "Dickens uses lots of good words to describe the fog.",
              "The fog is described well because it is very foggy.",
              "Dickens uses a simile in the passage.",
              "The repeated minor sentences beginning 'Fog…' make the fog seem to seep into every corner of London, trapping its people in a city that cannot move forward.",
            ],
            answerIndex: 3,
            hint: "Good analysis names a method AND explains its effect.",
            explanation:
              "The option ‘The repeated minor sentences beginning 'Fog…' make the fog seem to…’ identifies specific methods (repetition, minor sentences) and explains the effect on the reader. The option ‘Dickens uses a simile in the passage.’ is tempting because it uses a technical term, but it only spots a technique without saying what it achieves.",
            guideRef: "sentence-variety",
          },
          {
            id: "dsc-mcq-p2-q18",
            extract: "the waterside pollutions of a great (and dirty) city",
            question: "What does the bracketed '(and dirty)' add?",
            options: [
              "A date for the events",
              "The name of a character",
              "A wry aside that undercuts London's grandness with an honest, slightly comic judgement",
              "A description of the colour of the river",
            ],
            answerIndex: 2,
            hint: "Read 'a great city' and then 'a great (and dirty) city'. What changes?",
            explanation:
              "The brackets let Dickens slip in a sly, deflating comment: London may be 'great', but it is also filthy. The option ‘A description of the colour of the river’ is tempting because the phrase follows a description of the river, but the aside judges the whole city, not the water's colour.",
            guideRef: "punctuation-for-effect",
          },
          {
            id: "dsc-mcq-p2-q19",
            question: "Which feature of this passage could a student most usefully borrow for a description of a hazy day in Singapore?",
            options: [
              "Using Victorian vocabulary such as 'gunwales' and 'cabooses'",
              "Repeating a key word at the start of short phrases to show the haze reaching everywhere",
              "Including a dinosaur",
              "Setting the piece in November",
            ],
            answerIndex: 1,
            hint: "Borrow the technique, not the details.",
            explanation:
              "Anaphora ('Haze on the expressway. Haze over the reservoir…') would transfer perfectly to a modern setting. The option ‘Using Victorian vocabulary such as 'gunwales' and 'cabooses'’ is tempting because the vocabulary is rich, but those nouns belong to Victorian London and would sound out of place in Singapore.",
            guideRef: "sentence-variety",
          },
          {
            id: "dsc-mcq-p2-q20",
            question: "Which of these features is NOT used in the passage?",
            options: ["Dialogue between characters", "Simile", "Personification", "Minor sentences"],
            answerIndex: 0,
            hint: "Does anyone speak?",
            explanation:
              "Nobody speaks in the passage, so there is no dialogue. Dickens does use similes ('as big as full-grown snowflakes'), personification ('fog cruelly pinching') and minor sentences ('Fog everywhere.').",
            guideRef: "sentence-variety",
          },
        ],
      },
      {
        id: "dsc-mcq-p3",
        title: "MCQ Paper 3",
        questions: [
          {
            id: "dsc-mcq-p3-q01",
            question: "Which is the strongest opening sentence for a description of the MRT at rush hour?",
            options: [
              "The MRT was very crowded.",
              "I went on the MRT and it was busy and loud.",
              "There were a lot of people on the train, which was very full.",
              "At Raffles Place the doors sighed open, and the carriage breathed out a crowd.",
            ],
            answerIndex: 3,
            hint: "Which one names a real place and makes the train come alive?",
            explanation:
              "The option ‘At Raffles Place the doors sighed open, and the carriage breathed…’ uses a specific place and personification ('sighed', 'breathed out') to show the crowd. The option ‘I went on the MRT and it was busy and loud.’ is tempting because it mentions two senses, but 'busy and loud' are tells, and 'I went on the MRT' is a flat, recount-style opening.",
            guideRef: "show-dont-tell",
          },
          {
            id: "dsc-mcq-p3-q02",
            question: "Which sentence about a monsoon downpour avoids cliché?",
            options: [
              "It was raining cats and dogs.",
              "Rain bounced knee-high off the road and poured from the drains in brown, muscular ropes.",
              "The rain came down in buckets.",
              "It was a dark and stormy night.",
            ],
            answerIndex: 1,
            hint: "Which one have you never read before?",
            explanation:
              "The option ‘Rain bounced knee-high off the road and poured from the drains in…’ uses precise, original details — rain bouncing 'knee-high', drains pouring 'brown, muscular ropes'. The others are worn-out phrases; the option ‘It was a dark and stormy night.’ is tempting because it sounds dramatic, but 'a dark and stormy night' is one of the most famous clichés in English.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p3-q03",
            extract: "The hawker centre was a furnace.",
            question: "Which technique is this?",
            options: ["Metaphor", "Simile", "Personification", "Onomatopoeia"],
            answerIndex: 0,
            hint: "Does it say 'like a furnace'?",
            explanation:
              "It states that the hawker centre IS a furnace, with no 'like' or 'as', so it is a metaphor. A simile would be 'The hawker centre was like a furnace' — that missing word is the whole difference.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p3-q04",
            extract: "The wok ______ against the burner.",
            question: "Which word is onomatopoeic?",
            options: ["rested", "shone", "clanged", "moved"],
            answerIndex: 2,
            hint: "Say each word aloud. Which one sounds like the noise it describes?",
            explanation:
              "'Clanged' imitates the metallic sound of a wok striking metal, so it is onomatopoeic. 'Shone' is tempting because it is a vivid verb, but it describes light, not sound.",
            guideRef: "five-senses",
          },
          {
            id: "dsc-mcq-p3-q05",
            question: "Describing Chinatown at Chinese New Year, which detail is most specific?",
            options: [
              "the sweet, burnt smell of bak kwa sizzling on its grill",
              "nice food smells everywhere",
              "lots of red decorations",
              "people buying things for the festival",
            ],
            answerIndex: 0,
            hint: "Which detail names exactly what it is?",
            explanation:
              "The option ‘the sweet, burnt smell of bak kwa sizzling on its grill’ names a specific food (bak kwa), a precise smell ('sweet, burnt') and a sound-verb ('sizzling'). The option ‘lots of red decorations’ is tempting because red is the festival colour, but 'lots of decorations' is vague — lanterns? couplets? paper cuttings?",
            guideRef: "precise-vocabulary",
          },
          {
            id: "dsc-mcq-p3-q06",
            extract: "In the Botanic Gardens I could see trees, I could hear birds and I could smell flowers.",
            question: "What is the main weakness of this sentence?",
            options: [
              "It uses too many metaphors",
              "It is written in the wrong tense",
              "It lists the senses mechanically with vague nouns, reporting what was sensed instead of showing it",
              "It is too long to be effective",
            ],
            answerIndex: 2,
            hint: "Count the 'I could…' phrases and look at the nouns.",
            explanation:
              "The sentence ticks off senses like a checklist, with vague nouns (trees, birds, flowers) and no precise detail. The option ‘It is written in the wrong tense’ is tempting if you think description must be in the present tense, but past tense is perfectly acceptable as long as it is consistent.",
            guideRef: "five-senses",
          },
          {
            id: "dsc-mcq-p3-q07",
            question: "Which is the best redraft of 'I could hear birds' for a description of the Botanic Gardens at dawn?",
            options: [
              "There were birds that I could hear.",
              "Birds made noises.",
              "I could hear lots of birds singing loudly.",
              "A koel's rising call echoed across Swan Lake.",
            ],
            answerIndex: 3,
            hint: "Look for a specific bird, a precise sound and no 'I could hear'.",
            explanation:
              "The option ‘A koel's rising call echoed across Swan Lake.’ names a specific bird (the koel, common in Singapore), a precise sound ('rising call') and a real place, and it removes 'I could hear'. The option ‘I could hear lots of birds singing loudly.’ is tempting because it adds detail, but 'lots of', 'singing' and 'loudly' are vague, and 'I could hear' remains.",
            guideRef: "five-senses",
          },
          {
            id: "dsc-mcq-p3-q08",
            extract: "Jasmine garlands hang outside the flower stalls, so fragrant that the air tastes sweet.",
            question: "'The air tastes sweet' is an example of:",
            options: ["Cliché", "Synaesthesia", "Onomatopoeia", "Pathetic fallacy"],
            answerIndex: 1,
            hint: "Which sense is being used to describe a smell?",
            explanation:
              "A smell (the jasmine's fragrance) is described as a taste, mixing two senses — synaesthesia. Pathetic fallacy is tempting because the setting feels joyful, but pathetic fallacy is about weather or setting mirroring an emotion, not one sense standing in for another.",
            guideRef: "five-senses",
          },
          {
            id: "dsc-mcq-p3-q09",
            question: "Which sentence uses a colon correctly?",
            options: [
              "The hawker centre had: many different stalls.",
              "Only one stall had no queue: the one selling durian.",
              "Because it was late: the stalls were closing.",
              "The uncle flipped: the noodles in the wok.",
            ],
            answerIndex: 1,
            hint: "The words before a colon must make a complete sentence.",
            explanation:
              "'Only one stall had no queue' is a complete sentence, and the colon then reveals which stall — with a comic twist. In the option ‘Because it was late: the stalls were…’, 'Because it was late' cannot stand alone, so a colon cannot follow it; a comma is needed.",
            guideRef: "punctuation-for-effect",
          },
          {
            id: "dsc-mcq-p3-q10",
            question: "Which sentence uses a dash most effectively to create a sudden shift?",
            options: [
              "The — sea was calm.",
              "The sea was — calm and blue and — nice.",
              "The sea — was calm.",
              "The sea was calm — too calm.",
            ],
            answerIndex: 3,
            hint: "A single dash can add a twist at the end of a sentence.",
            explanation:
              "In the option ‘The sea was calm — too calm.’, the dash pauses the reader before the unsettling afterthought 'too calm', turning peace into menace. The other dashes break the sentence in meaningless places; the option ‘The sea was — calm and blue…’ is tempting because it uses two dashes, but they interrupt nothing and 'nice' is a weak tell.",
            guideRef: "punctuation-for-effect",
          },
          {
            id: "dsc-mcq-p3-q11",
            question: "Which of these is a comma splice?",
            options: [
              "When the rain stopped, the steam rose.",
              "The rain stopped; the steam rose.",
              "The rain stopped, the steam rose from the road.",
              "The rain stopped and the steam rose.",
            ],
            answerIndex: 2,
            hint: "Find two complete sentences joined only by a comma.",
            explanation:
              "In the option ‘The rain stopped, the steam rose from…’, 'The rain stopped' and 'the steam rose from the road' are both complete sentences joined by just a comma — a comma splice. The option ‘When the rain stopped, the steam rose.’ is tempting because it also has a comma, but 'When the rain stopped' is a subordinate clause, so the comma there is correct.",
            guideRef: "punctuation-for-effect",
          },
          {
            id: "dsc-mcq-p3-q12",
            question: "Which sentence best uses pathetic fallacy to create a tense mood before an exam?",
            options: [
              "Heavy clouds pressed down on the school roof, and the air was thick and still, waiting.",
              "The sun shone brightly and the birds sang in the trees.",
              "It was eight o'clock on Monday morning.",
              "I was very nervous about the exam.",
            ],
            answerIndex: 0,
            hint: "Which weather matches nervous tension?",
            explanation:
              "Pressing clouds and thick, still, 'waiting' air mirror the students' tension. The option ‘The sun shone brightly and the birds sang in the trees.’ is also weather, which makes it tempting, but its cheerful mood does not match the tension asked for. The option ‘I was very nervous about the exam.’ simply tells the feeling.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p3-q13",
            question: "Which sentence contains the most precise verb?",
            options: [
              "The train went into the station.",
              "The train moved into the station.",
              "The train got into the station.",
              "The train hissed into the station.",
            ],
            answerIndex: 3,
            hint: "Which verb also gives you a sound?",
            explanation:
              "'Hissed' shows how the train moves and what it sounds like, so the reader hears the brakes. 'Moved' is tempting because it is accurate, but it is so general that it creates no picture at all.",
            guideRef: "precise-vocabulary",
          },
          {
            id: "dsc-mcq-p3-q14",
            extract: "The big, old, tall, green tree stood in the park.",
            question: "Which version best fixes the adjective pile?",
            options: [
              "The ancient rain tree spread its arms over the park.",
              "The big, old tree stood in the park.",
              "The very tall green tree stood in the park.",
              "The tree was big, old, tall and green.",
            ],
            answerIndex: 0,
            hint: "Look for a specific noun and a strong verb.",
            explanation:
              "The option ‘The ancient rain tree spread its arms over the park.’ uses one precise adjective ('ancient'), a specific noun ('rain tree') and a vivid verb with personification ('spread its arms'). The option ‘The big, old tree stood in the park.’ is tempting because it cuts two adjectives, but the noun and verb are still vague and 'stood' is lifeless.",
            guideRef: "precise-vocabulary",
          },
          {
            id: "dsc-mcq-p3-q15",
            question: "Which sentence best uses sentence structure to create a sense of crowded noise in a hawker centre?",
            options: [
              "It was loud.",
              "There was a lot of noise in there.",
              "Trays clattered, woks clanged, a child wailed, an auntie shouted an order, and over it all the fans churned and churned.",
              "The hawker centre was a very noisy place indeed.",
            ],
            answerIndex: 2,
            hint: "Which sentence piles sound upon sound?",
            explanation:
              "The option ‘Trays clattered, woks clanged, a child wailed, an auntie shouted…’ builds a long list of separate sounds, so the sentence itself feels crowded, and the repeated 'churned and churned' suggests endless noise. The option ‘It was loud.’ is tempting because short sentences can have impact, but 'It was loud' only tells.",
            guideRef: "sentence-variety",
          },
          {
            id: "dsc-mcq-p3-q16",
            extract: "Opening line: From the top deck of the bus, the hawker centre looks like a lantern someone has set down among the tower blocks.",
            question: "Which ending would create the most effective cyclical structure?",
            options: [
              "Then I go home and have a shower.",
              "From the bus stop, as I leave, the roof is still glowing: a lantern nobody will put out until midnight.",
              "It was a really good evening.",
              "The end.",
            ],
            answerIndex: 1,
            hint: "Which ending echoes the opening image?",
            explanation:
              "The option ‘From the bus stop, as I leave, the roof is still glowing: a…’ returns to the lantern image and the bus, with a change (now leaving, and the light will burn until midnight), closing the circle. The option ‘Then I go home and have a shower.’ is tempting because it also mentions leaving, but it drops the lantern image and ends on a dull recount detail.",
            guideRef: "structure",
          },
          {
            id: "dsc-mcq-p3-q17",
            question: "What does the 'Substitute' step of ARMS involve?",
            options: [
              "Swapping weak verbs and vague nouns for precise ones",
              "Adding extra paragraphs at the end",
              "Changing the whole piece into another tense",
              "Replacing your title with a better one",
            ],
            answerIndex: 0,
            hint: "Think 'went' → 'trudged', 'bird' → 'mynah'.",
            explanation:
              "Substituting means replacing weak words with stronger, more precise ones. The option ‘Replacing your title with a better one’ is tempting because it involves replacing something, but ARMS works on the writing itself — the words and sentences — not just the title.",
            guideRef: "planning-redrafting",
          },
          {
            id: "dsc-mcq-p3-q18",
            question:
              "A student redrafts 'Everyone at the festival was happy' as 'An auntie pressed two mandarin oranges into a stranger's hands.' Which skill does this best show?",
            options: [
              "Adding an extra adjective",
              "Moving the sentence to the start",
              "Removing the idea completely",
              "Substituting a tell with a showing detail",
            ],
            answerIndex: 3,
            hint: "The happiness is still there — but how is it conveyed now?",
            explanation:
              "The redraft replaces the tell ('everyone was happy') with one generous action that shows festive goodwill. The option ‘Removing the idea completely’ is tempting because the word 'happy' has disappeared, but the idea has not been removed — it is now shown instead of told.",
            guideRef: "planning-redrafting",
          },
          {
            id: "dsc-mcq-p3-q19",
            question: "Which sentence keeps the present tense consistently?",
            options: [
              "The doors open and the crowd surged out.",
              "The doors open and the crowd surges out.",
              "The doors opened and the crowd surges out.",
              "The doors had opened and the crowd surges out.",
            ],
            answerIndex: 1,
            hint: "Check both verbs.",
            explanation:
              "'Open' and 'surges' are both present tense. Every other option mixes present and past; the option ‘The doors open and the crowd surged…’ is tempting because its first verb is present, but 'surged' slips into the past.",
            guideRef: "viewpoint-tense-paragraphing",
          },
          {
            id: "dsc-mcq-p3-q20",
            question: "Which is the most effective use of an ellipsis?",
            options: [
              "The rain… fell… on… the… roof…",
              "I went to the shop… and bought some milk…",
              "The footsteps stopped outside the door, and then…",
              "It was… very… hot…",
            ],
            answerIndex: 2,
            hint: "An ellipsis works best once, at a moment of suspense.",
            explanation:
              "In the option ‘The footsteps stopped outside the door, and…’, a single ellipsis trails off at the moment of greatest suspense, leaving the reader to imagine what comes next. The others scatter ellipses with no purpose; the option ‘It was… very… hot…’ is tempting because it suggests slow heat, but repeated dots just look hesitant and weaken the writing.",
            guideRef: "punctuation-for-effect",
          },
        ],
      },
      {
        id: "dsc-mcq-p4",
        title: "MCQ Paper 4",
        questions: [
          {
            id: "dsc-mcq-p4-q01",
            extract: "The sky, it seems, would pour down stinking pitch,\nBut that the sea, mounting to th' welkin's cheek,\nDashes the fire out.\n— Miranda, The Tempest, Act 1 Scene 2 (welkin = sky)",
            question: "According to Miranda, what is the sea doing?",
            options: [
              "Rising so high that it seems to reach the sky and put out the lightning",
              "Lying calm and flat after the storm",
              "Turning into thick black tar",
              "Drying up in the heat of the fire",
            ],
            answerIndex: 0,
            hint: "'Mounting' means climbing. 'The fire' is the lightning.",
            explanation:
              "The waves 'mount' (climb) to the sky's 'cheek' and 'dash' out the 'fire' — the lightning. The option ‘Turning into thick black tar’ is tempting because 'pitch' (tar) is mentioned, but it is the sky that would pour down pitch, not the sea that turns into it.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p4-q02",
            extract: "The sky, it seems, would pour down stinking pitch\n— Miranda, The Tempest, Act 1 Scene 2",
            question: "What does 'stinking pitch' suggest about the storm clouds?",
            options: [
              "They are pale, light and fluffy",
              "They smell of flowers after rain",
              "They are thick, black and foul, like boiling tar",
              "They are bright with sunlight",
            ],
            answerIndex: 2,
            hint: "Pitch is the black tar used to seal ships.",
            explanation:
              "Pitch is thick black tar, and 'stinking' adds a foul smell, so the clouds seem heavy, dark and disgusting — appealing to sight and smell together. The option ‘They smell of flowers after rain’ is tempting because storms can bring a fresh smell, but 'stinking' rules that out.",
            guideRef: "five-senses",
          },
          {
            id: "dsc-mcq-p4-q03",
            extract: "O, the cry did knock\nAgainst my very heart!\n— Miranda, The Tempest, Act 1 Scene 2",
            question: "What does the verb 'knock' suggest?",
            options: [
              "The cry was quiet and far away",
              "The sailors' cry physically struck Miranda, showing how deeply she feels their suffering",
              "Someone is knocking at the door of Prospero's cell",
              "Miranda is angry with the sailors",
            ],
            answerIndex: 1,
            hint: "Think about a blow against the chest.",
            explanation:
              "Metaphorically, the sound of the drowning men 'knocks' against her heart like a physical blow, showing her deep compassion. The option ‘Someone is knocking at the door of Prospero's cell’ is tempting if you read 'knock' literally, but no one is at a door — the knock is emotional.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p4-q04",
            question:
              "A student's storm description moves: calm sea → clouds gathering → storm → calm sea with a single floating plank. Why is the final paragraph more powerful than simply writing 'Then the storm stopped'?",
            options: [
              "It is shorter than the other paragraphs",
              "It introduces a brand-new character",
              "It is written in the past tense",
              "The calm echoes the opening, but the plank shows what has been lost, so the reader infers the tragedy",
            ],
            answerIndex: 3,
            hint: "What does the plank tell us without saying it?",
            explanation:
              "The cyclical return to calm, now with one lonely plank, lets the reader work out that the ship has been destroyed — showing, not telling, at the most important moment. The option ‘It is shorter than the other paragraphs’ is tempting because short endings can be strong, but length alone does not create the effect.",
            guideRef: "structure",
          },
          {
            id: "dsc-mcq-p4-q05",
            question: "Which statement about 'show, don't tell' is most accurate?",
            options: [
              "Writers must never state a feeling directly",
              "Telling is always better because it is clearer",
              "Showing means adding as many adjectives as possible",
              "Showing gives readers evidence to infer feelings, though a brief tell after strong showing can be effective",
            ],
            answerIndex: 3,
            hint: "Beware of answers with 'never' or 'always'.",
            explanation:
              "Showing provides evidence, but a short tell can land powerfully once the reader already agrees. The option ‘Writers must never state a feeling directly’ is tempting because it sounds like the rule, but it is too absolute — great writers tell sometimes, deliberately.",
            guideRef: "show-dont-tell",
          },
          {
            id: "dsc-mcq-p4-q06",
            extract: "The sky was a ceiling of grey; the rain fell as it had for a week; nobody looked up any more.",
            question: "What effect do the semicolons create?",
            options: [
              "They make the sentence a list of unrelated ideas",
              "They link three balanced clauses into one long, weary sentence that mirrors the endless rain",
              "They show that the writer is unsure",
              "They introduce speech",
            ],
            answerIndex: 1,
            hint: "Why not three separate sentences?",
            explanation:
              "Joining three closely linked clauses with semicolons keeps the reader moving through one long, monotonous sentence — just like a week of unbroken rain. The option ‘They make the sentence a list of unrelated ideas’ is tempting because semicolons can separate list items, but these clauses are closely related, not unrelated.",
            guideRef: "punctuation-for-effect",
          },
          {
            id: "dsc-mcq-p4-q07",
            question:
              "A student writes a first-person description but starts eight sentences with 'I'. What is the best fix?",
            options: [
              "Rewrite the whole piece in the second person ('you')",
              "Delete every mention of the narrator",
              "Vary the openings — begin with the place, a fronted adverbial or the detail itself, keeping 'I' only where it matters",
              "Change the piece to the past tense",
            ],
            answerIndex: 2,
            hint: "The problem is repetition, not the viewpoint itself.",
            explanation:
              "First person is fine; the repetition is the problem. Varying sentence openings fixes it while keeping the viewpoint. The option ‘Delete every mention of the narrator’ is tempting, but removing the narrator entirely would change the viewpoint and lose the personal voice.",
            guideRef: "viewpoint-tense-paragraphing",
          },
          {
            id: "dsc-mcq-p4-q08",
            question: "Which is the best example of ambitious vocabulary used precisely?",
            options: [
              "Rain needled the sailors' faces.",
              "The effulgent luminescence irradiated the crepuscular firmament.",
              "The very extremely big wave was huge.",
              "The sea was magnificent, splendid and wonderful.",
            ],
            answerIndex: 0,
            hint: "Ambitious does not mean long — it means exact.",
            explanation:
              "'Needled' is an unexpected but exact verb: it shows the rain as sharp, stinging and repeated. The option ‘The effulgent luminescence irradiated the crepuscular firmament.’ is tempting because the words are long and rare, but they are piled up so densely that the reader cannot picture anything — the thesaurus trap.",
            guideRef: "precise-vocabulary",
          },
          {
            id: "dsc-mcq-p4-q09",
            question: "Which image is the freshest and most precise for a packed MRT carriage?",
            options: [
              "Packed like sardines",
              "As busy as a beehive",
              "Bodies swayed together like seaweed in a current",
              "Full to the brim",
            ],
            answerIndex: 2,
            hint: "Three of these are clichés.",
            explanation:
              "The seaweed simile is original and precise: it captures the way a packed crowd sways as one when the train moves. 'Packed like sardines' is tempting because it fits the meaning, but it is a cliché readers skim past.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p4-q10",
            question: "Why might a writer use a one-line paragraph such as 'Then the light changed.'?",
            options: [
              "To mark a turning point in mood and make the reader pause",
              "Because they have run out of ideas",
              "To begin a list",
              "To introduce dialogue",
            ],
            answerIndex: 0,
            hint: "White space around a line makes it stand out.",
            explanation:
              "A single-line paragraph is surrounded by white space, so it stands out as a structural hinge where the mood shifts. The option ‘To introduce dialogue’ is tempting because dialogue often gets new lines, but this line contains no speech.",
            guideRef: "structure",
          },
          {
            id: "dsc-mcq-p4-q11",
            extract: "Season of mists and mellow fruitfulness\n— John Keats, 'To Autumn' (1819)",
            question: "What does the repeated 'm' sound mainly create?",
            options: [
              "A harsh, violent sound",
              "A fast, urgent rhythm",
              "A sense of fear",
              "A soft, slow, drowsy mood that matches ripe autumn",
            ],
            answerIndex: 3,
            hint: "Say 'mists and mellow' slowly. Is it hard or soft?",
            explanation:
              "The 'm' is a soft, humming sound, so the alliteration slows the line and creates a warm, sleepy richness. The option ‘A harsh, violent sound’ is tempting only if you assume all alliteration is harsh — hard sounds like 'c' and 'k' are harsh, but 'm' is gentle.",
            guideRef: "five-senses",
          },
          {
            id: "dsc-mcq-p4-q12",
            extract: "The wrinkled sea beneath him crawls\n— Alfred, Lord Tennyson, 'The Eagle'",
            question: "Why is the verb 'crawls' effective?",
            options: [
              "It shows that the sea is angry",
              "From the eagle's great height the vast sea seems small and slow, emphasising the eagle's power",
              "It is an example of onomatopoeia",
              "It shows that the sea is hot",
            ],
            answerIndex: 1,
            hint: "Where is the eagle, and how would the sea look from there?",
            explanation:
              "Seen from the clifftop, the waves look like something small creeping along — which makes the eagle seem huge and dominant. The option ‘It shows that the sea is angry’ is tempting because the sea can be stormy, but 'crawls' suggests slowness and smallness, not fury.",
            guideRef: "precise-vocabulary",
          },
          {
            id: "dsc-mcq-p4-q13",
            question: "A writer describes bright sunshine and birdsong at a funeral. What might this contrast achieve?",
            options: [
              "It proves that pathetic fallacy only works for sad scenes",
              "It creates irony, making the mourners' grief feel lonelier because the world carries on regardless",
              "It is a mistake, because weather must always match the mood",
              "It shows that the funeral is a happy occasion",
            ],
            answerIndex: 1,
            hint: "What happens when the setting refuses to match the feeling?",
            explanation:
              "When the weather contrasts with the mood, it can create irony and isolation — the world seems indifferent to the characters' grief. The option ‘It is a mistake, because weather must always match the mood’ is tempting if you treat pathetic fallacy as a rule, but writers deliberately break the pattern for effect.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-mcq-p4-q14",
            extract: "The drums. The smoke. The lion's gold eyes, blinking.",
            question: "What is the effect of these minor sentences in a description of a lion dance?",
            options: [
              "They slow the scene into a calm, peaceful mood",
              "They are grammatical mistakes that would lose marks",
              "Like quick camera snapshots, they capture fragments of a noisy, chaotic scene",
              "They explain the history of the lion dance",
            ],
            answerIndex: 2,
            hint: "Think of a camera flashing from one thing to the next.",
            explanation:
              "Each fragment is a quick snapshot, so the reader experiences the dance as bursts of sound and colour. The option ‘They are grammatical mistakes that would lose marks’ is tempting because they lack main verbs, but deliberate minor sentences used for effect are rewarded, not penalised.",
            guideRef: "sentence-variety",
          },
          {
            id: "dsc-mcq-p4-q15",
            question: "Which sentence uses a pair of dashes correctly?",
            options: [
              "The old man — climbed the stairs — slowly.",
              "The — old man climbed — the stairs.",
              "The old man climbed — the stairs.",
              "The old man — he must have been ninety — climbed the stairs without a rail.",
            ],
            answerIndex: 3,
            hint: "If you remove the words between the dashes, the sentence should still make sense.",
            explanation:
              "In the option ‘The old man — he must have…’, the words inside the dashes are an interruption; remove them and 'The old man climbed the stairs without a rail' still works. In the option ‘The old man — climbed the stairs…’, removing the dashed words leaves 'The old man slowly.', which makes no sense.",
            guideRef: "punctuation-for-effect",
          },
          {
            id: "dsc-mcq-p4-q16",
            question: "You have 45 minutes for a descriptive writing task. Which time plan is most sensible?",
            options: [
              "About 5–8 minutes planning, 30–35 minutes writing, 5 minutes checking",
              "No planning, 45 minutes writing",
              "25 minutes planning, 20 minutes writing",
              "40 minutes writing, then 5 minutes planning at the end",
            ],
            answerIndex: 0,
            hint: "Plan briefly, write most, check at the end.",
            explanation:
              "A short plan gives you structure, most of the time goes on writing, and a few minutes of checking catches tense slips and comma splices. The option ‘No planning, 45 minutes writing’ is tempting when time feels short, but unplanned descriptions usually drift into lists or stories.",
            guideRef: "planning-redrafting",
          },
          {
            id: "dsc-mcq-p4-q17",
            extract: "the merciless iced east winds that knive us\n— Wilfred Owen, 'Exposure'",
            question: "Which analytical comment is strongest?",
            options: [
              "Owen uses lots of description here.",
              "The wind is very cold.",
              "This is personification.",
              "Turning the noun 'knife' into the verb 'knive' makes the wind a weapon, so the soldiers seem under attack from the weather itself.",
            ],
            answerIndex: 3,
            hint: "The best comment zooms in on one word and explains its effect.",
            explanation:
              "The option ‘Turning the noun 'knife' into the verb 'knive' makes the wind a…’ focuses on a precise word choice and explains its effect on the reader. The option ‘This is personification.’ is tempting because it names a correct technique, but naming alone, without explaining the effect, earns little credit.",
            guideRef: "precise-vocabulary",
          },
          {
            id: "dsc-mcq-p4-q18",
            question: "Which sentence best SHOWS that a grandmother loves her grandson, without naming love?",
            options: [
              "She loved him more than anything in the world.",
              "She was a very loving grandmother.",
              "She peeled every prawn for him, though he was old enough to do it himself.",
              "Love filled her heart whenever she saw him.",
            ],
            answerIndex: 2,
            hint: "Which option never uses 'love' or 'loving'?",
            explanation:
              "Peeling his prawns when he could do it himself is a small, specific act of devotion that lets the reader infer her love. The option ‘Love filled her heart whenever she saw him.’ is tempting because it sounds poetic, but it still names 'love' directly.",
            guideRef: "show-dont-tell",
          },
          {
            id: "dsc-mcq-p4-q19",
            question: "Which plan uses a 'change over time' structure for a description of the Botanic Gardens?",
            options: [
              "Dawn mist on Swan Lake → midday heat and picnickers → dusk as the bats come out",
              "Background → midground → foreground",
              "Opening image → the same image echoed at the end",
              "Sight → sound → smell",
            ],
            answerIndex: 0,
            hint: "Which plan is organised by the clock?",
            explanation:
              "Plan A moves from dawn to midday to dusk, so time organises the paragraphs. The option ‘Background → midground → foreground’ is tempting because it is also a sound structure, but it moves through space (a drone-to-zoom approach), not through time.",
            guideRef: "structure",
          },
          {
            id: "dsc-mcq-p4-q20",
            question: "You are describing a street during a night-time power cut. Which senses should probably be most prominent?",
            options: [
              "Sight, because readers always expect it",
              "Sound and touch, because the darkness limits sight and sharpens the other senses",
              "Taste only",
              "All five senses equally in every sentence",
            ],
            answerIndex: 1,
            hint: "What can you actually perceive in the dark?",
            explanation:
              "In darkness, the senses that still work — sound and touch — become vivid and unsettling, which suits the scene. The option ‘All five senses equally in every sentence’ is tempting because it sounds thorough, but forcing every sense into every sentence creates a mechanical checklist.",
            guideRef: "five-senses",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "dsc-qa-p1",
        title: "Written Paper 1",
        questions: [
          {
            id: "dsc-qa-p1-q01",
            question: "Rewrite this sentence so that it shows, rather than tells: 'Mei was nervous before her piano exam.'",
            marks: 3,
            hint: "Think about her body, her actions and one small detail in the room.",
            modelAnswer:
              "Mei wiped her palms on her skirt for the third time, but they were damp again before she reached the waiting-room door. Through the wall, someone else's scales tumbled up and down, perfect and fast, and she found herself counting the ceiling tiles just to stop her hands from shaking.",
            markScheme: [
              { point: "Shows a physical reaction in the body", keywords: ["palms", "hands", "shaking", "trembling", "sweat", "heart", "breath", "stomach"] },
              { point: "Shows a revealing action or behaviour", keywords: ["wiped", "counting", "tapped", "paced", "bit", "fidget", "twisted", "checked"] },
              { point: "Includes a precise sensory detail from the setting", keywords: ["through the wall", "scales", "ticking", "clock", "waiting room", "piano", "door", "silence"] },
            ],
            commonError: "Replacing 'nervous' with another emotion word such as 'anxious' or 'terrified', which is still telling.",
            guideRef: "show-dont-tell",
          },
          {
            id: "dsc-qa-p1-q02",
            question:
              "Write two sentences about a hawker centre at lunchtime that appeal to senses other than sight. Do not use the words 'I could hear' or 'I could smell'.",
            marks: 3,
            hint: "Let the sound or smell arrive directly through a strong verb.",
            modelAnswer:
              "Garlic hit the hot oil with a hiss, and its sharp, sweet smoke drifted across three rows of tables. Under the ceiling fans the air clung to my arms like a damp towel, and somewhere behind me a tray clattered onto the floor.",
            markScheme: [
              { point: "A precise sound detail (onomatopoeia or vivid sound verb)", keywords: ["hiss", "clatter", "clang", "sizzle", "scrape", "chatter", "roar", "shout"] },
              { point: "A precise smell or taste detail", keywords: ["garlic", "smoke", "smell", "scent", "chilli", "spicy", "fragrant", "aroma"] },
              { point: "A touch detail or senses woven in through strong verbs", keywords: ["clung", "sticky", "humid", "damp", "drifted", "heat", "greasy", "sweat"] },
            ],
            commonError: "Starting both sentences with 'I could…', which turns the senses into a checklist.",
            guideRef: "five-senses",
          },
          {
            id: "dsc-qa-p1-q03",
            question: "Define pathetic fallacy and explain how it differs from ordinary personification.",
            marks: 3,
            hint: "All pathetic fallacy involves the setting — but not all personification reflects a mood.",
            modelAnswer:
              "Pathetic fallacy is when the weather or setting reflects the mood or emotion of a scene or character, such as a storm breaking during a family argument. Personification is any description that gives human qualities to something non-human, such as 'the doors sighed open'. The difference is that pathetic fallacy specifically uses the weather or setting to mirror a feeling, whereas personification does not have to reflect any emotion at all.",
            markScheme: [
              { point: "Defines pathetic fallacy as weather/setting reflecting mood or emotion", keywords: ["weather", "setting", "reflects", "mirrors", "mood", "emotion"] },
              { point: "Defines personification as giving human qualities to something non-human", keywords: ["human qualities", "human characteristics", "human actions", "non-human", "object", "like a person"] },
              { point: "Explains the difference: pathetic fallacy must mirror a feeling", keywords: ["difference", "whereas", "specifically", "does not have to", "not all", "not always"] },
            ],
            commonError: "Saying pathetic fallacy means 'sad weather' — it can reflect any mood, including joy.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-qa-p1-q04",
            question:
              "'It was as hot as an oven.' Replace this cliché with a fresh simile for a Singapore setting, and explain why yours is more effective.",
            marks: 3,
            hint: "Borrow your comparison from the world of the place itself.",
            modelAnswer:
              "'The heat rose off the car park like the blast from an opened rice cooker.' This is more effective because readers have heard 'as hot as an oven' so often that they no longer picture anything, whereas the rice-cooker steam is a specific, familiar Singapore image that captures the wet, sudden heat of a tropical afternoon.",
            markScheme: [
              { point: "Writes a new simile using 'like' or 'as'", keywords: ["like a", "like the", "like an", "as if", "as though", "as a"] },
              { point: "The image is rooted in a specific or local setting", keywords: ["rice cooker", "mrt", "hawker", "wok", "kopi", "hdb", "void deck", "kettle"] },
              { point: "Explains that the cliché is overused / your image is fresh and precise", keywords: ["cliché", "overused", "fresh", "original", "specific", "precise", "picture", "familiar"] },
            ],
            commonError: "Swapping one cliché for another ('as hot as the sun', 'as hot as fire').",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-qa-p1-q05",
            question:
              "Rewrite this adjective pile using precise nouns and verbs instead: 'The big, dark, old, scary, creepy house.' Then explain one improvement.",
            marks: 3,
            hint: "One adjective at most. Let a verb do the frightening.",
            modelAnswer:
              "'The shophouse sagged against its neighbour, its shutters hanging by single hinges and a banyan root splitting the front step.' Instead of five vague adjectives that simply tell us it is scary, a specific noun (shophouse), a vivid verb (sagged) and concrete details (hanging shutters, a root splitting the step) show its age and menace, so the reader feels the creepiness.",
            markScheme: [
              { point: "Uses a specific noun instead of 'house'", keywords: ["shophouse", "bungalow", "mansion", "cottage", "manor", "hut", "villa", "ruin"] },
              { point: "Uses a vivid verb to show age or menace", keywords: ["sagged", "leaned", "crouched", "loomed", "hunched", "slumped", "groaned", "creaked"] },
              { point: "Explains that precise detail shows rather than tells / avoids a pile of weak adjectives", keywords: ["instead of", "adjectives", "show", "tell", "precise", "specific", "concrete"] },
            ],
            commonError: "Simply cutting the list down to two adjectives ('the dark, scary house'), which keeps the vague tells.",
            guideRef: "precise-vocabulary",
          },
          {
            id: "dsc-qa-p1-q06",
            question:
              "Explain the difference between denotation and connotation, using the words 'slim', 'skinny' and 'scrawny' as examples.",
            marks: 3,
            hint: "Same dictionary meaning — different feelings.",
            modelAnswer:
              "Denotation is a word's literal dictionary meaning; connotation is the set of associations and feelings it carries. 'Slim', 'skinny' and 'scrawny' all denote being thin, but their connotations differ: 'slim' is admiring and elegant, 'skinny' is more neutral or slightly critical, and 'scrawny' suggests weakness, bony neglect or being underfed.",
            markScheme: [
              { point: "Defines denotation as literal / dictionary meaning", keywords: ["dictionary", "literal", "actual meaning", "definition", "exact meaning"] },
              { point: "Defines connotation as associations or feelings", keywords: ["associations", "feelings", "suggests", "implies", "ideas linked", "overtones"] },
              { point: "Correctly contrasts the three words (e.g. slim positive, scrawny negative)", keywords: ["positive", "negative", "admiring", "weak", "underfed", "elegant", "neutral", "unhealthy"] },
            ],
            commonError: "Saying the three words mean different things literally, rather than that they share a meaning but differ in feeling.",
            guideRef: "precise-vocabulary",
          },
          {
            id: "dsc-qa-p1-q07",
            question:
              "Write three sentences about a monsoon downpour: one short sentence for impact, one complex sentence and one beginning with a fronted adverbial. Label each.",
            marks: 3,
            hint: "Complex = main clause + a clause starting with as, while, because, although or when.",
            modelAnswer:
              "Short: 'Then the sky split open.' Complex: 'As the first fat drops spattered the car park, a mother sprinted along the corridor to rescue her washing.' Fronted adverbial: 'Within seconds, the drains were roaring like rivers.'",
            markScheme: [
              { point: "A short sentence (around 1–6 words) used for impact", keywords: ["short", "split", "silence", "then the", "it came", "impact"] },
              { point: "A complex sentence with a subordinate clause", keywords: ["as the", "while", "because", "although", "when the", "complex"] },
              { point: "A sentence starting with a fronted adverbial followed by a comma", keywords: ["within seconds,", "suddenly,", "without warning,", "above the", "beneath the", "fronted", "across the", "slowly,"] },
            ],
            commonError: "Writing a compound sentence with 'and' and calling it complex, or putting the adverbial at the end of the sentence.",
            guideRef: "sentence-variety",
          },
          {
            id: "dsc-qa-p1-q08",
            question: "What is a minor sentence? Give an example, explain when it is effective and name one risk of using it.",
            marks: 4,
            hint: "Definition, example, effect, risk.",
            modelAnswer:
              "A minor sentence is a deliberate fragment with no main verb, such as 'Silence.' or 'Fog everywhere.' It is effective at a moment of impact or stillness — for example after a long sentence describing a busy scene, when everything suddenly stops — because it acts like a spotlight and makes the reader pause. The risk is overuse: if every other sentence is a fragment, they lose their power and the writing can look as if the writer does not know how to write complete sentences.",
            markScheme: [
              { point: "Defines a minor sentence as lacking a main verb / a deliberate fragment", keywords: ["no main verb", "no verb", "fragment", "incomplete", "without a verb"] },
              { point: "Gives a valid example", keywords: ["silence.", "fog everywhere", "nothing.", "darkness.", "not a sound", "stillness."] },
              { point: "Explains when it is effective (impact, pause, spotlight, after long sentences)", keywords: ["impact", "pause", "emphasis", "spotlight", "after long", "shock", "stillness"] },
              { point: "Names a risk (overuse loses power / looks like an error)", keywords: ["overuse", "too many", "lose power", "mistake", "error", "rare", "sparingly"] },
            ],
            commonError: "Giving a short but complete sentence ('It stopped.') as the example — it has a verb, so it is not minor.",
            guideRef: "sentence-variety",
          },
          {
            id: "dsc-qa-p1-q09",
            question: "Describe three different ways of structuring a descriptive piece.",
            marks: 3,
            hint: "Think camera, clock and circle.",
            modelAnswer:
              "First, drone shot to zoom in: start with a wide panorama of the whole place, then narrow down paragraph by paragraph to one small detail, such as a single face. Second, change over time: describe the same place at different moments, such as dawn, midday and dusk, or before, during and after a storm. Third, cyclical structure: end by echoing the opening image or phrase, usually with a change, so the piece feels complete.",
            markScheme: [
              { point: "Drone shot / panoramic to zoom in / wide to close-up", keywords: ["drone", "zoom", "wide", "panoramic", "close-up", "narrow"] },
              { point: "Change over time / dawn to dusk / before-during-after", keywords: ["change over time", "dawn", "dusk", "before", "after", "time passing"] },
              { point: "Cyclical structure / shift in mood (any valid third)", keywords: ["cyclical", "echo", "circle", "return", "shift in mood", "turning point"] },
            ],
            commonError: "Listing paragraph topics (sight, then sound, then smell) instead of a genuine structural shape.",
            guideRef: "structure",
          },
          {
            id: "dsc-qa-p1-q10",
            extract: "The rain hammers the roof. A cyclist skidded and swears. Puddles swelled in the drains.",
            question: "Correct the tense errors so that the extract is consistently in the present tense.",
            marks: 2,
            hint: "Two verbs have slipped into the past.",
            modelAnswer:
              "The rain hammers the roof. A cyclist skids and swears. Puddles swell in the drains.",
            markScheme: [
              { point: "Changes 'skidded' to 'skids'", keywords: ["skids", "cyclist skids", "skids and", "skids,"] },
              { point: "Changes 'swelled' to 'swell'", keywords: ["puddles swell", "swell in", "swell in the drains", "puddles swell."] },
            ],
            commonError: "Changing everything into the past tense instead — or missing one of the two slips.",
            guideRef: "viewpoint-tense-paragraphing",
          },
          {
            id: "dsc-qa-p1-q11",
            question:
              "Explain how to use a colon and a semicolon for effect in descriptive writing, giving an original example of each.",
            marks: 4,
            hint: "A colon reveals; a semicolon balances.",
            modelAnswer:
              "A colon comes after a complete sentence and introduces a reveal, explanation or list, creating a pause before the important detail: 'The void deck was empty except for one thing: a single red slipper.' A semicolon joins two complete, closely linked sentences, often to balance or contrast them: 'Inside, the fans churned the hot air; outside, the rain hissed on the road.'",
            markScheme: [
              { point: "Explains the colon introduces a reveal/explanation/list after a complete sentence", keywords: ["reveal", "explanation", "introduce", "list", "complete sentence", "pause before"] },
              { point: "Gives a correct colon example", keywords: [": a", ": the", ": one", ": only", ":"] },
              { point: "Explains the semicolon joins two linked complete sentences / balances", keywords: ["two complete", "two sentences", "linked", "balance", "contrast", "join", "independent"] },
              { point: "Gives a correct semicolon example", keywords: [";", "; the", "; outside", "; inside", "; it"] },
            ],
            commonError: "Using a semicolon after a subordinate clause ('Although it rained; we went out'), or a colon after an incomplete phrase.",
            guideRef: "punctuation-for-effect",
          },
          {
            id: "dsc-qa-p1-q12",
            question: "Explain what ARMS stands for and how you would use each step to redraft a descriptive paragraph.",
            marks: 4,
            hint: "Four actions — and an example of each.",
            modelAnswer:
              "ARMS stands for Add, Remove, Move and Substitute. Add means putting in something missing, such as a non-visual sense or a short sentence for impact. Remove means cutting tells, clichés, adjective piles and phrases like 'I could see'. Move means reordering so the strongest detail comes at the end of a sentence or paragraph. Substitute means swapping weak verbs and vague nouns for precise ones, such as 'went' becoming 'trudged' or 'bird' becoming 'mynah'.",
            markScheme: [
              { point: "Add — e.g. a sense, detail or short sentence", keywords: ["add", "adding", "insert", "put in"] },
              { point: "Remove — e.g. tells, clichés, adjective piles", keywords: ["remove", "cut", "delete", "take out"] },
              { point: "Move — reorder for impact", keywords: ["move", "reorder", "rearrange", "end of the sentence", "swap the order"] },
              { point: "Substitute — swap weak words for precise ones", keywords: ["substitute", "swap", "replace", "change weak", "stronger word"] },
            ],
            commonError: "Remembering the four words but not explaining what each one actually does to a draft.",
            guideRef: "planning-redrafting",
          },
        ],
      },
      {
        id: "dsc-qa-p2",
        title: "Written Paper 2",
        passage: {
          title: "Monsoon",
          source: "Original descriptive piece written for this app",
          text: "The afternoon held its breath.\n\nOver Bishan the sky had been white all day — a hot, flat white like the inside of an oven door — and the air was so thick you could have spread it on toast. On the void deck, an old man fanned himself with a newspaper. A cat lay stretched on the cool tiles, too tired to blink. Even the mynahs had stopped arguing.\n\nThen the light changed. Clouds the colour of wet slate rolled in from the east, swallowing the tops of the HDB blocks one by one. A gust snatched the newspaper and sent it cartwheeling across the car park. Somewhere, a mother shouted for her washing.\n\nThe first drops were fat and separate: dark coins on the dry concrete. Then the sky split open. Rain hammered the zinc roof of the bicycle shelter until it roared; it bounced knee-high off the road; it poured from the drains in brown, muscular ropes. Thunder cracked so close that the car alarms answered it.\n\nTwenty minutes later, it was over. The drains gurgled and gulped. Steam lifted off the road in slow, pale ghosts, and the air smelled green — of wet grass, of earth, of something washed clean. On the void deck, the old man unfolded a fresh newspaper. The cat stretched, yawned, and padded out into a world that glittered.",
          note: "void deck = the open ground floor of a Singapore HDB (public housing) block; mynah = a common, noisy bird.",
        },
        questions: [
          {
            id: "dsc-qa-p2-q01",
            question: "How does the opening line, 'The afternoon held its breath.', create tension?",
            marks: 3,
            hint: "Technique, layout, and what it makes the reader expect.",
            modelAnswer:
              "The writer personifies the afternoon as a person 'holding its breath', which suggests nervous waiting, as if something is about to happen. Because the line stands alone as a one-line paragraph, the reader also pauses, sharing that held breath. This creates suspense and makes us expect a sudden change — which the storm later delivers.",
            markScheme: [
              { point: "Identifies personification", keywords: ["personification", "personifies", "human", "like a person"] },
              { point: "Explains the suggestion of waiting / anticipation", keywords: ["waiting", "about to happen", "anticipation", "suspense", "expect", "nervous"] },
              { point: "Comments on the one-line paragraph / short sentence", keywords: ["one-line", "one line", "short sentence", "own paragraph", "alone", "single line"] },
            ],
            commonError: "Saying 'it makes the reader want to read on' without explaining what the line suggests.",
            guideRef: "structure",
          },
          {
            id: "dsc-qa-p2-q02",
            extract: "the air was so thick you could have spread it on toast",
            question: "What does this suggest about the weather, and why is the image effective?",
            marks: 2,
            hint: "What kind of air feels 'thick'? And is the image serious or playful?",
            modelAnswer:
              "It suggests the air is extremely humid and heavy, almost solid, before the storm. The image is effective because it is a playful, original hyperbole drawn from everyday life — spreading something on toast — which makes the stickiness of the humidity almost tangible and avoids the cliché 'you could cut it with a knife'.",
            markScheme: [
              { point: "Identifies humidity / heaviness of the air", keywords: ["humid", "heavy", "sticky", "muggy", "thick", "dense", "moist"] },
              { point: "Explains effect: original/playful hyperbole, tangible, avoids cliché", keywords: ["hyperbole", "exaggeration", "original", "fresh", "playful", "humour", "everyday", "cliché"] },
            ],
            commonError: "Explaining that the air is literally like butter, without linking it to humidity.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-qa-p2-q03",
            question: "Find two details in the second paragraph that SHOW the heat rather than tell it, and explain one of them.",
            marks: 3,
            hint: "Look at the old man, the cat and the birds.",
            modelAnswer:
              "One detail is the cat lying 'too tired to blink', and another is that 'Even the mynahs had stopped arguing'. The mynahs are usually loud and quarrelsome, so their silence shows that the heat is so oppressive that even the noisiest creatures have given up — the reader infers the heat without being told 'it was very hot'.",
            markScheme: [
              { point: "First valid detail", keywords: ["too tired to blink", "cat", "fanned himself", "newspaper", "lay stretched", "cool tiles"] },
              { point: "Second valid detail", keywords: ["mynahs", "stopped arguing", "old man", "fanned", "tired", "blink"] },
              { point: "Explains how the detail shows heat (reader infers; exhaustion; silence)", keywords: ["infer", "shows", "without telling", "exhausted", "silence", "oppressive", "given up", "lethargic"] },
            ],
            commonError: "Quoting 'hot, flat white' — that is a description of the sky's colour, and it uses the tell word 'hot'.",
            guideRef: "show-dont-tell",
          },
          {
            id: "dsc-qa-p2-q04",
            question: "How does the writer use the sentence 'Then the light changed.' to structure the piece?",
            marks: 3,
            hint: "Where does it come, how long is it, and what changes after it?",
            modelAnswer:
              "'Then the light changed.' opens the third paragraph and marks the turning point between the still, heavy calm and the arrival of the storm. Its shortness makes it abrupt, like a switch being flicked, and the word 'Then' signals a shift in time. From this moment the verbs become violent ('swallowing', 'snatched'), so the sentence works as a structural hinge where the mood changes.",
            markScheme: [
              { point: "Identifies it as a turning point / shift in mood", keywords: ["turning point", "shift", "change in mood", "hinge", "transition", "from calm"] },
              { point: "Comments on its shortness / abruptness", keywords: ["short", "abrupt", "sudden", "simple sentence", "brief"] },
              { point: "Links to what follows (storm, violent verbs, 'Then' signals time)", keywords: ["storm", "violent", "swallowing", "snatched", "then", "clouds"] },
            ],
            commonError: "Describing what happens next without explaining how the sentence shapes the piece's structure.",
            guideRef: "structure",
          },
          {
            id: "dsc-qa-p2-q05",
            extract: "Clouds the colour of wet slate rolled in from the east, swallowing the tops of the HDB blocks one by one.",
            question: "Analyse how language is used in this sentence to create a threatening mood.",
            marks: 4,
            hint: "Look at the colour, the verb 'swallowing' and the phrase 'one by one'.",
            modelAnswer:
              "The writer compares the clouds to 'wet slate', a precise colour image suggesting something grey, heavy and cold, which darkens the mood. The verb 'swallowing' personifies the clouds as a giant predator eating the buildings, so the storm seems alive and hungry. The phrase 'one by one' slows the action, making the advance feel steady and unstoppable, which builds a sense of threat and inevitability.",
            markScheme: [
              { point: "Comments on 'wet slate' (grey, heavy, cold, dark)", keywords: ["slate", "grey", "heavy", "dark", "cold", "stone"] },
              { point: "Identifies 'swallowing' as personification / predator imagery", keywords: ["swallowing", "personification", "predator", "eat", "devour", "monster", "hungry"] },
              { point: "Explains 'one by one' (steady, unstoppable, slow)", keywords: ["one by one", "steady", "unstoppable", "gradual", "inevitable", "slowly"] },
              { point: "Links to the threatening mood", keywords: ["threat", "menace", "danger", "ominous", "foreboding", "tension"] },
            ],
            commonError: "Retelling the sentence ('the clouds came over the flats') without analysing individual word choices.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-qa-p2-q06",
            extract: "Rain hammered the zinc roof of the bicycle shelter until it roared; it bounced knee-high off the road; it poured from the drains in brown, muscular ropes.",
            question: "How do sentence structure and language work together in this sentence to convey the power of the storm?",
            marks: 5,
            hint: "Semicolons, the repeated 'it', the verbs and the final metaphor.",
            modelAnswer:
              "The sentence is built from three clauses joined by semicolons, the second and third both beginning with 'it', so the rain seems to attack again and again without a full stop to rest — the structure mirrors the relentless downpour. The verbs escalate in force: 'hammered' suggests violent, repeated blows, 'roared' adds overwhelming sound, and 'bounced knee-high' shows the sheer weight of the water. The final metaphor of 'brown, muscular ropes' makes the drain water seem strong, alive and dangerous. Together, the structure and language make the storm feel unstoppable.",
            markScheme: [
              { point: "Comments on semicolons linking three clauses / tricolon", keywords: ["semicolon", "three clauses", "tricolon", "list of three", "no full stop"] },
              { point: "Comments on repetition of 'it' / relentless rhythm", keywords: ["repetition", "repeated", "relentless", "again and again", "rhythm", "anaphora"] },
              { point: "Analyses a powerful verb (hammered / roared / bounced)", keywords: ["hammered", "roared", "bounced", "violent", "force", "blows"] },
              { point: "Analyses the metaphor 'muscular ropes'", keywords: ["muscular", "ropes", "metaphor", "strong", "alive", "powerful"] },
              { point: "Overall link: structure mirrors / storm feels unstoppable", keywords: ["mirrors", "unstoppable", "overwhelming", "relentless", "reflects", "endless"] },
            ],
            commonError: "Writing about either structure or language, but not explaining how they work together.",
            guideRef: "sentence-variety",
          },
          {
            id: "dsc-qa-p2-q07",
            extract: "Thunder cracked so close that the car alarms answered it.",
            question: "Explain the effect of the word 'answered'.",
            marks: 2,
            hint: "What does 'answered' make the car alarms seem like?",
            modelAnswer:
              "'Answered' personifies the car alarms as if they were replying to the thunder, as though the storm and the city were shouting at each other. It also shows, rather than tells, how loud and close the thunder was: it was powerful enough to set off the alarms.",
            markScheme: [
              { point: "Identifies personification / alarms replying", keywords: ["personification", "personifies", "replying", "conversation", "respond", "talking back"] },
              { point: "Explains it shows the loudness / closeness of the thunder", keywords: ["loud", "close", "powerful", "set off", "triggered", "volume"] },
            ],
            commonError: "Saying the alarms literally talked, without recognising the personification or what it shows about the thunder.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-qa-p2-q08",
            question: "How does the final paragraph create a change in mood? Refer to at least two details.",
            marks: 4,
            hint: "Look at sounds, the steam, the smell and the last word.",
            modelAnswer:
              "The mood shifts from violent to calm and renewed. The onomatopoeia 'gurgled and gulped' makes the drains sound almost contented, replacing the roar of the storm. The steam rising 'in slow, pale ghosts' slows the pace, and the synaesthesia 'the air smelled green' suggests freshness and new life. Finally, the cat pads out into 'a world that glittered', ending on an image of light and beauty, as if the storm has washed everything clean.",
            markScheme: [
              { point: "States the shift: violent/tense → calm/fresh/renewed", keywords: ["calm", "peaceful", "fresh", "renewed", "relief", "clean", "gentle"] },
              { point: "Analyses onomatopoeia 'gurgled and gulped'", keywords: ["gurgled", "gulped", "onomatopoeia", "sound"] },
              { point: "Analyses 'slow, pale ghosts' or 'smelled green'", keywords: ["ghosts", "steam", "smelled green", "synaesthesia", "slow", "pale"] },
              { point: "Analyses the ending 'a world that glittered'", keywords: ["glittered", "glitter", "light", "beauty", "sparkle", "world"] },
            ],
            commonError: "Saying 'the mood is happy now' without analysing how specific words create the change.",
            guideRef: "structure",
          },
          {
            id: "dsc-qa-p2-q09",
            question: "Explain how the old man and the cat are used to structure the piece.",
            marks: 3,
            hint: "Where do they appear, and where do they reappear?",
            modelAnswer:
              "The old man and the cat appear in the second paragraph, exhausted by the heat, and return in the final paragraph, so they act as anchors that the camera comes back to. This creates a cyclical structure. Their changed behaviour — the man unfolding a fresh newspaper, the cat stretching and going out — shows life returning to normal after the storm, without the writer having to tell us.",
            markScheme: [
              { point: "Notes they appear at the start and return at the end", keywords: ["return", "reappear", "beginning and end", "start and end", "come back", "again"] },
              { point: "Identifies cyclical structure / anchors", keywords: ["cyclical", "circular", "anchor", "echo", "frame", "bookend"] },
              { point: "Explains that their changed behaviour shows life resuming / contrast", keywords: ["fresh newspaper", "stretched", "life returning", "normal", "change", "contrast", "relief"] },
            ],
            commonError: "Describing what the man and the cat do without commenting on their position in the structure.",
            guideRef: "structure",
          },
          {
            id: "dsc-qa-p2-q10",
            question: "Identify the overall structure of 'Monsoon' and evaluate how effective it is.",
            marks: 4,
            hint: "Before / during / after — and is it convincing?",
            modelAnswer:
              "The piece uses a change-over-time structure — before, during and after the storm — with a sharp shift in mood marked by 'Then the light changed.' It is very effective because the long, heavy stillness of the opening builds suspense, so when 'the sky split open' the violence feels even more dramatic by contrast. The quick ending ('Twenty minutes later') mirrors how tropical storms really pass, and the return of the old man and the cat gives a satisfying cyclical close. One could argue the ending is slightly too neat, but the calm after the storm makes the reader appreciate the power of what came before.",
            markScheme: [
              { point: "Identifies change over time (before / during / after)", keywords: ["change over time", "before", "during", "after", "chronological", "time"] },
              { point: "Identifies the shift / turning point", keywords: ["shift", "turning point", "then the light changed", "contrast", "change in mood"] },
              { point: "Evaluates: contrast builds suspense / drama", keywords: ["suspense", "contrast", "drama", "build", "tension", "effective"] },
              { point: "Evaluates the ending (cyclical close, realistic, or a reasoned criticism)", keywords: ["cyclical", "ending", "satisfying", "realistic", "neat", "however", "although"] },
            ],
            commonError: "Identifying the structure but not evaluating it — 'evaluate' means judging how well it works and why.",
            guideRef: "structure",
          },
          {
            id: "dsc-qa-p2-q11",
            question:
              "Write one sentence of your own, in the style of the passage, describing the moment the rain stops at a bus stop. Then name the main technique you used.",
            marks: 3,
            hint: "Aim for one precise verb, one fresh image, and no tell words.",
            modelAnswer:
              "'The last drops ticked off the bus-stop roof like a clock winding down, and a queue of umbrellas snapped shut one by one.' Technique: a simile ('like a clock winding down'), supported by onomatopoeia ('ticked', 'snapped').",
            markScheme: [
              { point: "Writes a sentence about rain stopping at a bus stop", keywords: ["bus stop", "bus-stop", "shelter", "umbrella", "drops", "rain", "puddle"] },
              { point: "Uses a fresh image or precise verb", keywords: ["like a", "ticked", "snapped", "dripped", "as if", "glistened", "trickled", "shook"] },
              { point: "Correctly names the technique", keywords: ["simile", "metaphor", "personification", "onomatopoeia", "pathetic fallacy", "alliteration"] },
            ],
            commonError: "Writing a cliché ('the sun came out and everything was happy again') or naming a technique that is not actually in the sentence.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-qa-p2-q12",
            question:
              "A student says: 'This passage would be better if it were written in the present tense.' To what extent do you agree?",
            marks: 4,
            hint: "Think about immediacy versus reflection — and the phrase 'Twenty minutes later'.",
            modelAnswer:
              "I partly agree. The passage is in the past tense, which gives it a reflective, remembered quality. The present tense ('the sky splits open') might make the storm feel more immediate, as if the reader is standing in it. However, the past tense suits the structure: phrases like 'Twenty minutes later, it was over' summarise time passing smoothly, which feels natural when looking back. Most importantly, the writer keeps the tense consistent, which matters more than which tense is chosen, so overall I think the past tense works well.",
            markScheme: [
              { point: "Recognises the passage is in the past tense", keywords: ["past tense", "written in the past", "was", "had been"] },
              { point: "Explains a benefit of present tense (immediacy)", keywords: ["immediate", "immediacy", "happening now", "in the moment", "vivid", "present tense"] },
              { point: "Explains a benefit of the past tense (reflective, suits summary of time)", keywords: ["reflective", "remembered", "looking back", "twenty minutes later", "summary", "suits"] },
              { point: "Reaches a reasoned judgement (and/or notes consistency matters)", keywords: ["overall", "i agree", "i disagree", "partly", "consistent", "to some extent", "however"] },
            ],
            commonError: "Agreeing or disagreeing without considering both sides or using evidence from the passage.",
            guideRef: "viewpoint-tense-paragraphing",
          },
        ],
      },
      {
        id: "dsc-qa-p3",
        title: "Written Paper 3",
        passage: {
          title: "Miranda describes the shipwreck",
          source: "William Shakespeare, The Tempest (c.1611), Act 1 Scene 2 — Miranda to Prospero",
          text: "If by your art, my dearest father, you have\nPut the wild waters in this roar, allay them.\nThe sky, it seems, would pour down stinking pitch,\nBut that the sea, mounting to th' welkin's cheek,\nDashes the fire out. O, I have suffered\nWith those that I saw suffer! A brave vessel,\nWho had, no doubt, some noble creature in her,\nDashed all to pieces. O, the cry did knock\nAgainst my very heart! Poor souls, they perished.\nHad I been any god of power, I would\nHave sunk the sea within the earth or ere\nIt should the good ship so have swallowed and\nThe fraughting souls within her.",
          note:
            "art = magic; allay = calm; pitch = black tar; welkin = sky; or ere = before; fraughting souls = the people who made up the ship's cargo.",
        },
        questions: [
          {
            id: "dsc-qa-p3-q01",
            question: "Who is speaking, to whom, and what has just happened?",
            marks: 2,
            hint: "Look at 'my dearest father' and 'your art'.",
            modelAnswer:
              "Miranda is speaking to her father, Prospero. She has just watched a ship being wrecked in a violent storm, and she suspects that Prospero raised the storm with his magic ('your art').",
            markScheme: [
              { point: "Identifies Miranda speaking to Prospero (her father)", keywords: ["miranda", "prospero", "her father", "daughter"] },
              { point: "Explains a ship has been wrecked in a storm raised by his magic", keywords: ["shipwreck", "wrecked", "storm", "magic", "his art", "tempest", "ship"] },
            ],
            commonError: "Thinking Miranda is on the ship, or not realising that Prospero's 'art' means magic.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-qa-p3-q02",
            extract: "Put the wild waters in this roar",
            question: "Identify two techniques in this phrase and explain their effect.",
            marks: 4,
            hint: "Listen to the first letters — and ask what creature roars.",
            modelAnswer:
              "The alliteration of 'wild waters' repeats the 'w' sound, which creates a rushing, surging sound like the waves themselves. The noun 'roar' makes the sea sound like a wild animal such as a lion, so it seems fierce, alive and dangerous. Together they make the storm both audible and threatening.",
            markScheme: [
              { point: "Identifies alliteration in 'wild waters'", keywords: ["alliteration", "wild waters", "'w'", "w sound", "repeated w"] },
              { point: "Explains the effect of the alliteration (rushing, surging sound)", keywords: ["rushing", "surging", "sound of the waves", "crashing", "rhythm", "emphasises"] },
              { point: "Identifies 'roar' as animal imagery / personification / onomatopoeia", keywords: ["roar", "animal", "lion", "beast", "personification", "onomatopoeia"] },
              { point: "Explains the effect: fierce, alive, dangerous", keywords: ["fierce", "dangerous", "alive", "wild", "threatening", "violent", "powerful"] },
            ],
            commonError: "Spotting the alliteration but explaining it only as 'it makes it stand out'.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-qa-p3-q03",
            extract: "the sea, mounting to th' welkin's cheek,\nDashes the fire out.",
            question: "Explain this image and why it is effective.",
            marks: 4,
            hint: "'Welkin' = sky. 'The fire' = lightning. Who has a cheek?",
            modelAnswer:
              "Miranda describes the waves climbing ('mounting') so high that they reach the sky's 'cheek' and put out the lightning ('the fire'). The sky is personified as having a face, and the sea as an attacker that leaps up to strike it. This hyperbole makes the storm seem cosmic, as if the sea and sky are at war, and the violent verb 'Dashes' adds force and speed, so the audience can picture an impossibly huge storm.",
            markScheme: [
              { point: "Explains the literal image: waves rise to the sky and extinguish the lightning", keywords: ["waves", "reach the sky", "lightning", "put out", "extinguish", "climb"] },
              { point: "Identifies personification (sky's cheek / sea attacking)", keywords: ["personification", "cheek", "face", "personified", "human"] },
              { point: "Identifies hyperbole / exaggeration of scale", keywords: ["hyperbole", "exaggeration", "impossible", "huge", "enormous", "cosmic"] },
              { point: "Analyses 'Dashes' or 'mounting' (force, violence, war)", keywords: ["dashes", "mounting", "violent", "force", "war", "battle", "attack"] },
            ],
            commonError: "Translating the lines without commenting on any technique or effect.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-qa-p3-q04",
            question: "How does Miranda show her feelings about the people on the ship? Refer to two quotations.",
            marks: 4,
            hint: "Look at 'suffered', 'knock' and 'Poor souls'.",
            modelAnswer:
              "Miranda shows deep compassion. In 'I have suffered / With those that I saw suffer!' the repetition of 'suffer' shows that she feels the sailors' pain as if it were her own — she is empathetic. Later, 'the cry did knock / Against my very heart!' is a metaphor in which the sound of their screams physically strikes her, showing how emotionally wounded she is. The exclamations and 'Poor souls' reinforce her pity.",
            markScheme: [
              { point: "Identifies her compassion / empathy / pity", keywords: ["compassion", "empathy", "pity", "sympathy", "caring", "kind"] },
              { point: "Uses a first relevant quotation", keywords: ["suffered", "suffer", "poor souls", "perished"] },
              { point: "Uses a second relevant quotation", keywords: ["knock", "very heart", "cry did knock", "brave vessel"] },
              { point: "Analyses a technique (repetition / metaphor / exclamation)", keywords: ["repetition", "repeated", "metaphor", "exclamation", "emotive", "physical blow"] },
            ],
            commonError: "Listing quotations without explaining what each reveals about Miranda's feelings.",
            guideRef: "show-dont-tell",
          },
          {
            id: "dsc-qa-p3-q05",
            extract: "A brave vessel,\nWho had, no doubt, some noble creature in her,\nDashed all to pieces.",
            question: "Why is the phrase 'Dashed all to pieces' effective after the two lines before it?",
            marks: 3,
            hint: "Compare the length and tone of the build-up with the ending.",
            modelAnswer:
              "The first two lines build the ship up as 'brave' and full of 'noble' people, with a slow pause in the parenthesis 'no doubt'. Then 'Dashed all to pieces' is short and abrupt, with a violent verb, so the ship's destruction arrives suddenly and brutally. The contrast between the admiration and the sudden wreck makes the loss feel more tragic.",
            markScheme: [
              { point: "Notes the build-up of admiration (brave, noble)", keywords: ["brave", "noble", "admiration", "builds up", "respect", "praise"] },
              { point: "Comments on the short, abrupt phrase / violent verb 'dashed'", keywords: ["short", "abrupt", "sudden", "dashed", "violent", "brutal"] },
              { point: "Explains the contrast makes the loss tragic", keywords: ["contrast", "tragic", "tragedy", "loss", "shock", "sad"] },
            ],
            commonError: "Explaining only that the ship sank, not why the way it is phrased is effective.",
            guideRef: "sentence-variety",
          },
          {
            id: "dsc-qa-p3-q06",
            extract: "It should the good ship so have swallowed",
            question: "How is the sea personified here, and what is the effect?",
            marks: 3,
            hint: "What kind of creature swallows things?",
            modelAnswer:
              "The verb 'swallowed' personifies the sea as a giant mouth or monster that eats the ship whole. This makes the sea seem greedy and deliberately destructive, and it suggests the ship has vanished completely, leaving no trace — which deepens Miranda's horror and the audience's sense of the storm's power.",
            markScheme: [
              { point: "Identifies the verb 'swallowed' as personification", keywords: ["swallowed", "personification", "personifies", "mouth"] },
              { point: "Explains the sea seems like a monster / greedy / deliberate", keywords: ["monster", "beast", "greedy", "hungry", "deliberate", "predator", "devour"] },
              { point: "Explains the effect: total disappearance / horror / power", keywords: ["vanished", "completely", "no trace", "horror", "power", "whole", "destroyed"] },
            ],
            commonError: "Stating 'the sea swallowed the ship' without explaining what the verb suggests.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-qa-p3-q07",
            question: "Miranda calls the ship 'A brave vessel'. Why might Shakespeare describe a ship as 'brave'?",
            marks: 2,
            hint: "Can a ship be brave? What does it make us feel?",
            modelAnswer:
              "Calling the ship 'brave' personifies it as a courageous hero fighting the storm (in Shakespeare's time 'brave' could also mean 'fine' or 'splendid'). This makes the audience sympathise with the ship and its passengers, so its destruction feels like the death of a hero rather than just the loss of an object.",
            markScheme: [
              { point: "Identifies personification / ship as a hero or a fine, splendid vessel", keywords: ["personification", "hero", "courage", "courageous", "splendid", "fine", "human"] },
              { point: "Explains it creates sympathy / makes the loss tragic", keywords: ["sympathy", "sympathise", "pity", "tragic", "loss", "feel sorry"] },
            ],
            commonError: "Taking 'brave' literally without recognising that it gives the ship human qualities.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-qa-p3-q08",
            question:
              "Write the opening sentence of your own storm-at-sea description using pathetic fallacy, then explain the mood it creates.",
            marks: 3,
            hint: "Let the sky or sea reflect a feeling before anything happens.",
            modelAnswer:
              "'All morning the sea lay sullen and grey, sulking beneath a sky that refused to lift.' This creates a brooding, uneasy mood: the sea and sky seem resentful and heavy, which foreshadows that something bad is about to happen.",
            markScheme: [
              { point: "Writes a sentence with weather or sea reflecting a mood", keywords: ["sea", "sky", "cloud", "wind", "wave", "grey", "storm"] },
              { point: "Uses an emotive or personifying word for the weather", keywords: ["sullen", "sulking", "brooding", "angry", "restless", "moody", "menacing", "furious"] },
              { point: "Explains the mood created (uneasy, tense, foreboding)", keywords: ["uneasy", "tense", "foreboding", "foreshadow", "ominous", "threat", "tension"] },
            ],
            commonError: "Writing a weather sentence with no emotion in it ('It was raining at sea').",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-qa-p3-q09",
            extract: "The storm was really bad and the waves were really big.",
            question: "Rewrite this weak sentence using precise verbs and one fresh image. Explain one change you made.",
            marks: 3,
            hint: "Cut 'really', 'bad' and 'big'. What do the waves DO?",
            modelAnswer:
              "'Waves reared higher than the mast and fell on the deck with the weight of collapsing walls.' I replaced the vague tells 'really bad' and 'really big' with a precise verb ('reared'), which makes the waves seem like rearing horses, and a fresh image ('the weight of collapsing walls') that shows their size and force.",
            markScheme: [
              { point: "Uses a precise, vivid verb", keywords: ["reared", "crashed", "smashed", "towered", "hurled", "slammed", "pounded", "lashed"] },
              { point: "Includes a fresh simile or metaphor", keywords: ["like", "as if", "walls", "mountain", "cliff", "fist", "weight of", "as tall as"] },
              { point: "Explains a change (removed tells / vague words; shows size or force)", keywords: ["replaced", "removed", "really", "vague", "tell", "instead", "precise"] },
            ],
            commonError: "Swapping 'really bad' for 'extremely terrible' — new adjectives, same problem.",
            guideRef: "precise-vocabulary",
          },
          {
            id: "dsc-qa-p3-q10",
            question:
              "Shakespeare's theatres had no realistic special effects or modern lighting. How does language do the work of scenery in Miranda's speech?",
            marks: 4,
            hint: "What can the audience 'see' and 'hear' through her words alone?",
            modelAnswer:
              "Because the stage could not show a realistic storm, Shakespeare makes Miranda's words paint it. She appeals to sound ('this roar', 'the cry'), sight and smell ('stinking pitch') so the audience builds the storm in their imagination. Huge, personified images like the sea 'mounting to th' welkin's cheek' create a scale no stage effect could match. Her emotional reaction also tells the audience how terrible the wreck was, so description and feeling together replace scenery.",
            markScheme: [
              { point: "Recognises the language creates the setting in the audience's imagination", keywords: ["imagination", "imagine", "paint", "picture", "scenery", "create the storm", "visualise"] },
              { point: "Refers to sensory language (sound/sight/smell) with evidence", keywords: ["roar", "stinking", "pitch", "cry", "sound", "smell", "senses"] },
              { point: "Refers to a large-scale image (welkin's cheek / dashes the fire)", keywords: ["welkin", "cheek", "mounting", "fire", "hyperbole", "scale"] },
              { point: "Notes that Miranda's emotional reaction signals the horror", keywords: ["reaction", "emotion", "suffered", "heart", "feelings", "response"] },
            ],
            commonError: "Writing about modern productions or special effects instead of analysing the words.",
            guideRef: "five-senses",
          },
          {
            id: "dsc-qa-p3-q11",
            question:
              "Plan a four-paragraph description of a storm at sea, inspired by Miranda's speech. Give each paragraph a clear job and name the structure you are using.",
            marks: 4,
            hint: "Change over time works well: calm, warning, storm, aftermath.",
            modelAnswer:
              "Structure: change over time with a cyclical ending. Paragraph 1 — calm: a 'sheet of polished glass', sailors relaxed; short sentences. Paragraph 2 — warning: gunmetal clouds, thunder 'muttering', the air thickening (pathetic fallacy). Paragraph 3 — the storm: waves 'rearing', lightning, the cry of the sailors; long sentences with semicolons and a final short one. Paragraph 4 — aftermath: the sea calm again, a single plank turning in the sun, echoing paragraph 1.",
            markScheme: [
              { point: "Names a structure (change over time / cyclical / zoom)", keywords: ["change over time", "cyclical", "zoom", "drone", "before", "chronological"] },
              { point: "An opening paragraph that establishes calm or the scene", keywords: ["calm", "still", "glass", "peaceful", "opening", "establish"] },
              { point: "A paragraph for the build-up or the storm itself", keywords: ["storm", "waves", "lightning", "thunder", "clouds", "warning"] },
              { point: "An ending with a clear job (aftermath / echo / zoom detail)", keywords: ["aftermath", "echo", "plank", "return", "ending", "after the storm", "wreck"] },
            ],
            commonError: "Writing a plot outline (who survives, what they say) instead of a descriptive structure.",
            guideRef: "structure",
          },
          {
            id: "dsc-qa-p3-q12",
            question:
              "'Miranda's speech is more about her own feelings than about the storm.' To what extent do you agree?",
            marks: 5,
            hint: "Weigh up the storm description against the emotional lines — then judge.",
            modelAnswer:
              "To a large extent I agree, though the two are linked. The first five lines are mostly description: the 'wild waters' 'roar', the sky would 'pour down stinking pitch' and the sea climbs to the 'welkin's cheek'. However, from 'O, I have suffered / With those that I saw suffer!' the focus turns inward, with exclamations, the metaphor of the cry that 'did knock / Against my very heart' and the wish that she were a god who could save them. Even the description serves her feelings, as the violent images show how overwhelming the wreck seemed to her. So the storm matters mainly because of how deeply it affects Miranda, which reveals her compassion to the audience.",
            markScheme: [
              { point: "Gives evidence of storm description", keywords: ["wild waters", "roar", "stinking pitch", "welkin", "dashes the fire", "storm"] },
              { point: "Gives evidence of Miranda's feelings", keywords: ["suffered", "knock", "very heart", "poor souls", "god of power", "o,"] },
              { point: "Analyses a technique in either part", keywords: ["metaphor", "personification", "exclamation", "repetition", "hyperbole", "alliteration"] },
              { point: "Explains the link: the description serves / reflects her emotion", keywords: ["link", "reflects", "serves", "shows her", "through her eyes", "overwhelming"] },
              { point: "Reaches a clear judgement (to what extent)", keywords: ["agree", "disagree", "to a large extent", "partly", "overall", "to some extent"] },
            ],
            commonError: "Agreeing or disagreeing completely without weighing evidence from both parts of the speech.",
            guideRef: "show-dont-tell",
          },
        ],
      },
      {
        id: "dsc-qa-p4",
        title: "Written Paper 4",
        passage: {
          title: "A student's first draft: Dawn in the Botanic Gardens",
          source: "Original weak draft written for this app (for redrafting practice)",
          text: "I went to the Botanic Gardens at dawn. It was very beautiful and peaceful. I could see lots of trees and flowers. I could hear birds singing. I could smell the flowers, they smelled nice. The sun came up and it was like a big golden ball in the sky. There was a lake and it was very still and there were swans on it. Suddenly a jogger ran past quickly. I felt very calm and happy. It was the best morning ever!!!",
          note: "This draft has many common weaknesses. Use it to practise spotting problems and redrafting.",
        },
        questions: [
          {
            id: "dsc-qa-p4-q01",
            question: "Identify three 'tells' in the draft (words that name a quality or feeling instead of showing it).",
            marks: 3,
            hint: "Look for judgement words and feelings.",
            modelAnswer:
              "Three tells are 'beautiful and peaceful', 'they smelled nice' and 'I felt very calm and happy'. 'It was the best morning ever' is another. Each simply names a quality or feeling instead of giving evidence for the reader to infer it.",
            markScheme: [
              { point: "Identifies 'beautiful' or 'peaceful'", keywords: ["beautiful", "peaceful", "very beautiful", "beautiful and peaceful"] },
              { point: "Identifies 'nice'", keywords: ["nice", "smelled nice", "they smelled", "smell nice"] },
              { point: "Identifies 'calm and happy' or 'best morning ever'", keywords: ["calm", "happy", "best morning", "best morning ever"] },
            ],
            commonError: "Choosing words that are weak but not tells, such as 'went' or 'lake'.",
            guideRef: "show-dont-tell",
          },
          {
            id: "dsc-qa-p4-q02",
            question: "Find the comma splice in the draft and correct it in two different ways.",
            marks: 3,
            hint: "Two complete sentences joined by a comma.",
            modelAnswer:
              "The comma splice is 'I could smell the flowers, they smelled nice.' It could be corrected with a full stop ('I could smell the flowers. They smelled nice.') or a semicolon ('I could smell the flowers; they smelled nice.') — though in a real redraft the whole sentence should be rewritten to show the smell.",
            markScheme: [
              { point: "Identifies the comma splice sentence", keywords: ["flowers, they", "smell the flowers", "smelled nice", "they smelled"] },
              { point: "Corrects with a full stop", keywords: ["full stop", "flowers. they", "two sentences", "separate sentences"] },
              { point: "Corrects with a semicolon or a conjunction", keywords: ["semicolon", "flowers; they", ";", "and they", "which smelled", "conjunction"] },
            ],
            commonError: "Replacing the comma with a colon — a colon introduces a reveal and is not right here.",
            guideRef: "punctuation-for-effect",
          },
          {
            id: "dsc-qa-p4-q03",
            question: "Identify the cliché in the draft, replace it with a fresh image of dawn and explain why yours is better.",
            marks: 3,
            hint: "Which comparison have you read a hundred times?",
            modelAnswer:
              "The cliché is 'like a big golden ball in the sky'. A fresher image: 'The sun slid up behind the rain trees, a thin line of apricot bleeding into the grey.' This is better because it shows a specific colour and a gradual movement that matches a real dawn, instead of a stock image that readers no longer picture.",
            markScheme: [
              { point: "Identifies 'big golden ball' as the cliché", keywords: ["golden ball", "big golden", "ball in the sky", "like a big"] },
              { point: "Writes a fresh, precise image of dawn", keywords: ["apricot", "slid", "bleeding", "bruise", "line of", "peach", "crept", "seeped"] },
              { point: "Explains why it is better (specific, original, readers picture it)", keywords: ["specific", "original", "fresh", "precise", "overused", "picture", "cliché"] },
            ],
            commonError: "Replacing the cliché with another one, such as 'a ball of fire'.",
            guideRef: "figurative-language",
          },
          {
            id: "dsc-qa-p4-q04",
            question:
              "Explain why the sequence 'I could see… I could hear… I could smell…' is weak, and rewrite the 'I could hear birds singing' sentence.",
            marks: 3,
            hint: "Checklist, vague nouns, the narrator in the way.",
            modelAnswer:
              "The repeated 'I could…' turns the senses into a mechanical checklist, puts the narrator between the reader and the scene, and uses vague nouns ('birds', 'flowers'). A rewrite: 'From the far side of Swan Lake, a koel's rising call echoed across the water.'",
            markScheme: [
              { point: "Explains it is a mechanical checklist / repetitive", keywords: ["checklist", "repetitive", "repetition", "mechanical", "list", "same opening"] },
              { point: "Explains vague nouns or the narrator getting in the way", keywords: ["vague", "general", "narrator", "not specific", "tells", "distance"] },
              { point: "Rewrites with a specific bird or precise sound, without 'I could hear'", keywords: ["koel", "mynah", "call", "echoed", "chirped", "trilled", "whistled", "cooed"] },
            ],
            commonError: "Rewriting as 'I could hear lots of birds singing beautifully', which keeps every problem.",
            guideRef: "five-senses",
          },
          {
            id: "dsc-qa-p4-q05",
            extract: "Suddenly a jogger ran past quickly.",
            question: "Rewrite this sentence using one precise verb instead of 'ran… quickly', and explain the change.",
            marks: 2,
            hint: "One verb that means 'ran fast'.",
            modelAnswer:
              "'A jogger pounded past, her trainers slapping the wet path.' The precise verb 'pounded' replaces the weak verb and adverb, and the sound detail shows her speed instead of telling it.",
            markScheme: [
              { point: "Uses one precise verb", keywords: ["pounded", "sprinted", "raced", "dashed", "thudded", "hurtled", "flew", "bolted"] },
              { point: "Explains that it replaces the weak verb + adverb", keywords: ["adverb", "quickly", "weak verb", "replaces", "one verb", "instead of"] },
            ],
            commonError: "Keeping 'quickly' or replacing it with 'fast', which is still an adverb doing the verb's job.",
            guideRef: "precise-vocabulary",
          },
          {
            id: "dsc-qa-p4-q06",
            extract: "It was the best morning ever!!!",
            question: "Explain two problems with this final sentence and write a better ending.",
            marks: 4,
            hint: "Punctuation, telling — and what a cyclical or zoomed ending might look like.",
            modelAnswer:
              "First, it is a tell: it states the writer's opinion instead of leaving the reader with an image. Second, the triple exclamation mark is informal and over the top; description should let the words create the drama. A better ending: 'By the time I left, the swans had drifted to the middle of the lake, and the mist had lifted so quietly that no one noticed it go.'",
            markScheme: [
              { point: "Identifies it as a tell / an opinion rather than an image", keywords: ["tell", "telling", "opinion", "states", "names", "not show"] },
              { point: "Identifies the exclamation marks as informal / overused", keywords: ["exclamation", "!!!", "informal", "overuse", "too many", "over the top"] },
              { point: "Writes an ending that ends on an image", keywords: ["swans", "mist", "lake", "drifted", "light", "silence", "path", "trees"] },
              { point: "The new ending echoes the opening or zooms to a detail", keywords: ["by the time", "left", "echo", "once more", "still", "again", "lifted"] },
            ],
            commonError: "Correcting only the punctuation ('It was the best morning ever.') without fixing the telling.",
            guideRef: "planning-redrafting",
          },
          {
            id: "dsc-qa-p4-q07",
            question:
              "Suggest a drone-shot-to-zoom structure for a redraft of this piece. Describe what three or four paragraphs would focus on.",
            marks: 4,
            hint: "Wide → narrower → narrowest → final shift or echo.",
            modelAnswer:
              "Paragraph 1 (drone shot): the city skyline still dark beyond the Gardens and the sky's colours at dawn. Paragraph 2 (mid-shot): the paths and lawns, rain trees, the first joggers and birdcall. Paragraph 3 (close-up): Swan Lake, its still surface and a heron or swan. Paragraph 4 (detail and shift): one small moment — the heron's sudden strike, or a single drop falling from a leaf — as the sun reaches the water.",
            markScheme: [
              { point: "Paragraph 1 is wide: skyline / sky / whole Gardens", keywords: ["skyline", "sky", "city", "whole", "wide", "drone"] },
              { point: "Paragraph 2 narrows: paths, lawns, trees, people", keywords: ["path", "lawn", "trees", "joggers", "mid", "narrow"] },
              { point: "Paragraph 3 closer: the lake / one area", keywords: ["lake", "swan lake", "close-up", "water", "closer", "bench"] },
              { point: "Final paragraph: a single detail / shift / echo", keywords: ["detail", "heron", "drop", "one small", "shift", "echo", "single"] },
            ],
            commonError: "Listing senses as paragraphs (sight, sound, smell) rather than camera positions.",
            guideRef: "structure",
          },
          {
            id: "dsc-qa-p4-q08",
            extract: "There was a lake and it was very still and there were swans on it.",
            question: "Rewrite this sentence to include a precise noun, a vivid verb and one sound.",
            marks: 3,
            hint: "Name the lake, make the swans do something, add one noise.",
            modelAnswer:
              "'Swan Lake lay like a sheet of pewter, and two swans glided across it without a ripple while, somewhere in the reeds, a frog croaked once and fell silent.'",
            markScheme: [
              { point: "Uses a precise noun (e.g. Swan Lake, pewter, reeds)", keywords: ["swan lake", "pewter", "reeds", "lily", "heron", "mirror", "glass"] },
              { point: "Uses a vivid verb", keywords: ["glided", "drifted", "slid", "lay", "floated", "skimmed", "sailed", "trailed"] },
              { point: "Includes a sound", keywords: ["croaked", "splash", "plop", "hiss", "call", "honk", "rustle", "silent"] },
            ],
            commonError: "Adding adjectives ('a very beautiful, still, peaceful lake') instead of precise nouns and verbs.",
            guideRef: "precise-vocabulary",
          },
          {
            id: "dsc-qa-p4-q09",
            question:
              "You are given a photograph of a hawker centre at night. Explain how you would plan a description from it using background, midground and foreground, and which detail you would zoom in on.",
            marks: 4,
            hint: "Each layer becomes a paragraph; then pick one tiny human detail.",
            modelAnswer:
              "I would divide the photo into layers. Background: the dark tower blocks and the night sky, setting the mood in my first paragraph. Midground: the rows of stalls, steam, queues and fluorescent lights, where I would add the sounds and smells the photo cannot show. Foreground: one table close to the camera. I would zoom in on a small human detail, such as an old man's hands cracking open a crab, and end by echoing the glowing roof from my opening.",
            markScheme: [
              { point: "Background used for the wide opening (sky, blocks, mood)", keywords: ["background", "sky", "tower blocks", "skyline", "wide", "first paragraph"] },
              { point: "Midground used for crowd, stalls and non-visual senses", keywords: ["midground", "stalls", "crowd", "queue", "sounds", "smells"] },
              { point: "Foreground used for close-up", keywords: ["foreground", "table", "close-up", "closest", "front"] },
              { point: "Names a specific small detail to zoom in on", keywords: ["hands", "face", "tissue", "chopsticks", "zoom", "one person", "detail"] },
            ],
            commonError: "Planning to describe every object in the photo in turn, which produces a list instead of a structure.",
            guideRef: "planning-redrafting",
          },
          {
            id: "dsc-qa-p4-q10",
            question: "Explain how the writer could add a shift in mood to this Botanic Gardens description.",
            marks: 3,
            hint: "Weather, light, sound or time — and how would you signal it?",
            modelAnswer:
              "The writer could shift from the still, silver calm of dawn to the energy of morning as the sun breaks through: the mist lifts, the light turns gold, and joggers and birdsong fill the paths. Alternatively, a sudden tropical shower could sweep in. The shift should be signalled with a short sentence or one-line paragraph, such as 'Then the sun reached the water.', so the reader feels the turning point.",
            markScheme: [
              { point: "Suggests a change in weather, light, time or sound", keywords: ["weather", "light", "rain", "shower", "sun", "mist", "time", "noise"] },
              { point: "Describes the contrast between the two moods", keywords: ["calm", "energy", "still", "lively", "contrast", "bustle", "busy"] },
              { point: "Explains how to signal it (short sentence / one-line paragraph)", keywords: ["short sentence", "one-line", "one line", "paragraph", "signal", "then the"] },
            ],
            commonError: "Adding a plot event (an argument, a lost phone) instead of a shift in atmosphere.",
            guideRef: "structure",
          },
          {
            id: "dsc-qa-p4-q11",
            question:
              "Redraft the opening of this piece as one paragraph of 4–6 sentences. Include a fronted adverbial, a short sentence for impact, personification and at least one non-visual sense.",
            marks: 6,
            hint: "Use ARMS. Cut every 'I could' and every tell.",
            modelAnswer:
              "Before the city wakes, the Gardens belong to the birds. Beyond the gates, the condominium towers are still dark, but above them the sky is bruising slowly from violet to apricot. The rain trees stand patient and enormous, holding the last of the night in their branches. Somewhere in the canopy, a koel begins its rising call. No traffic. Only the wet smell of earth, and the soft slap of a jogger's trainers on the path.",
            markScheme: [
              { point: "Includes a fronted adverbial with a comma", keywords: ["before the", "beyond the", "somewhere in", "above the", "as the", "at dawn,", "slowly,"] },
              { point: "Includes a short sentence or minor sentence for impact", keywords: ["no traffic", "silence", "stillness", "nothing", "not a sound", "short sentence", "minor sentence"] },
              { point: "Includes personification", keywords: ["holding", "patient", "sleeping", "breathing", "whisper", "belong", "stretch", "yawn"] },
              { point: "Includes a non-visual sense (sound, smell, touch, taste)", keywords: ["call", "smell", "slap", "cool", "damp", "song", "rustle", "scent"] },
              { point: "Removes the tells and 'I could…' phrases from the original", keywords: ["koel", "apricot", "rain trees", "canopy", "path", "earth", "mist"] },
              { point: "Uses precise nouns and vivid verbs throughout", keywords: ["bruising", "canopy", "trainers", "condominium", "violet", "glided", "drifted", "pewter"] },
            ],
            commonError: "Including the required techniques but keeping tells such as 'beautiful' and 'peaceful', or exceeding the length so the paragraph loses focus.",
            guideRef: "planning-redrafting",
          },
          {
            id: "dsc-qa-p4-q12",
            question: "Which single change would improve this draft the most? Justify your choice and explain why it matters more than the others.",
            marks: 4,
            hint: "There is no single 'right' answer — but you must argue for yours.",
            modelAnswer:
              "The most important change is to replace the tells with showing details. Almost every sentence names a quality ('beautiful', 'peaceful', 'nice', 'calm and happy') instead of giving evidence, so the reader is never placed in the Gardens. Fixing this forces other improvements too: to show the peace, the writer must add precise nouns (koel, Swan Lake), non-visual senses and stronger verbs. By comparison, fixing the comma splice or the exclamation marks would make the draft more accurate but not more vivid, so 'show, don't tell' matters most.",
            markScheme: [
              { point: "Names a clear single change", keywords: ["show", "tells", "senses", "structure", "verbs", "cliché", "vocabulary"] },
              { point: "Justifies with evidence from the draft", keywords: ["beautiful", "peaceful", "nice", "calm and happy", "i could", "golden ball"] },
              { point: "Explains the knock-on benefits of the change", keywords: ["forces", "also", "leads to", "as a result", "knock-on", "improves"] },
              { point: "Compares with other possible changes / weighs priority", keywords: ["by comparison", "more than", "whereas", "less important", "matters most", "rather than"] },
            ],
            commonError: "Listing several changes rather than choosing one and arguing for its importance.",
            guideRef: "planning-redrafting",
          },
        ],
      },
    ],
  },
};
