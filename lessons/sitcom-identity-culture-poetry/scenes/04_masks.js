/* Scene 4: Masks, form & zooming in (showpiece: Dunbar's rondeau + Kevin's Dickinson dashes + D-C-E-L zoom!).
   School hall: Dunbar's We Wear the Mask (1895) & rondeau form -> Agard's free verse in Half-Caste ("de whole of yu
   eye") & Checking Out Me History ("Dem tell me" -> "I carving out me identity") -> Kevin's caesuras in Dickinson's
   "I'm Nobody! Who are you?" -> Tagore's anaphora (1912) -> D-C-E-L ("huddled" & "narrow domestic walls") -> 4 stars! */
scene('masks', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(20,14,42,0.94)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('hall', engHall(d.bg), (t, g) => g.upd(t));
  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), kev = d.who('kevin'), lexi = d.who('lexi'), suit = d.who('suitcase');

  const qDun = engQuote(d.fg, { text: 'We wear the mask that grins and lies, ... / With torn and bleeding hearts we smile,', who: 'Paul Laurence Dunbar', where: 'We Wear the Mask (1895)', w: 720, size: 35, hl: ['grins', 'bleeding'] });
  const tRond = engTech(d.fg, 'RONDEAU + REFRAIN', { kind: 'form', def: '2 rhyme sounds + returning refrain = trapped like the mask' });
  const cAgard = engCard(d.fg, 'John Agard (free verse):\n• *Half-Caste*: Picasso & piano keys → **"de whole of yu eye"**\n• *Checking Out Me History*: **"Dem tell me"** → **"I carving out me identity"**', { w: 710, size: 26, stroke: '#FF7EB6', boldFill: '#FFE45C' });
  const qDick = engQuote(d.fg, { text: "I'm Nobody! Who are you? / Are you – Nobody – too?", who: 'Emily Dickinson', where: "I'm Nobody! Who are you? (1891)", w: 680, size: 38, hl: ['nobody'] });
  const qTag = engQuote(d.fg, { text: 'Where the world has not been broken up into fragments by narrow domestic walls; ... let my country awake.', who: 'Rabindranath Tagore', where: 'Gitanjali 35 (1912 · Nobel Prize 1913)', w: 740, size: 33, hl: ['narrow', 'awake'] });
  const tDcel = engTech(d.fg, 'D · C · E · L', { kind: 'language', def: 'Denotation · Connotations · Effect · Link (Dogs Chase Every Lizard)' });
  const cHudd = engCard(d.fg, '**"huddled"** vs "crowded":\nConnotes cold, fear & pressing together for warmth → instant sympathy!', { w: 690, size: 28, stroke: '#5AB4E0', boldFill: '#FFE45C' });
  const rating = idcRating(d.fg);

  d.shot(0, { set: 'hall', cast: { mrh: { x: 200, y: 490, s: 1.0, mood: 'neutral', mug: 1 } } })
    .shot(at('rond') - 0.05, { set: 'hall', cast: { nib: { x: 200, y: 470, s: 0.95, mood: 'smug' } } })
    .shot(at('agard') - 0.05, { set: 'hall', cast: { lexi: { x: 200, y: 480, s: 0.96, mood: 'happy' } } })
    .shot(at('dick') - 0.05, { set: 'hall', cast: { kevin: { x: 230, y: 490, s: 0.92, mood: 'happy' } } })
    .shot(at('tag') - 0.05, { set: 'hall', cast: { mrh: { x: 200, y: 490, s: 1.0, mood: 'neutral' } } })
    .shot(at('dcel') - 0.05, { set: 'hall', cast: { nib: { x: 190, y: 470, s: 0.94, mood: 'smug' }, suitcase: { x: 1020, y: 490, s: 0.88, mood: 'happy' } } })
    .shot(at('walls') - 0.05, { set: 'hall', cast: { mei: { x: 260, y: 490, s: 1.08, mood: 'happy', phone: 1 } } });

  d.lower('kevin', at('dick') + 0.1, 2.8);

  d.pop(qDun, at('dun') + 0.05, end('dun') + 0.25, 720, 310);
  d.pop(tRond, at('rond') + 0.08, end('rond') + 0.25, 720, 330);
  d.pop(cAgard, at('agard') + 0.08, end('hist') + 0.25, 720, 330);
  d.pop(qDick, at('dick') + 0.05, end('dick') + 0.25, 720, 320);
  d.pop(qTag, at('tag') + 0.05, end('tag') + 0.25, 720, 320);
  d.pop(tDcel, at('dcel') + 0.08, end('dcel') + 0.2, 610, 290);
  d.pop(cHudd, at('hudd') + 0.08, end('hudd') + 0.25, 610, 310);

  return t => {
    d.upd(t);
    qDun.mark(-1, P(t, mid('dun', 0.55), 0.4));
    qDick.mark(0, P(t, mid('dick', 0.45), 0.4));
    qTag.mark(-1, P(t, mid('tag', 0.55), 0.4));
    const rv = win(t, mid('walls', 0.45), S.D + 1, 0.25);
    rating.set(3 + P(t, mid('walls', 0.55), 0.5, linear), rv); tr(rating, 1030, 74);
  };
});
