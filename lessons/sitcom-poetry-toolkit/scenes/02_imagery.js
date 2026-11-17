/* Scene 2: Imagery — Metaphor vs Simile showdown in the library (showpiece: "feathers" connotation web!).
   Simile ("And like a thunderbolt he falls") -> Metaphor ("Tyger Tyger, burning bright") -> Extended metaphor
   (Dickinson's 1,800 poems; "Hope is the thing with feathers" + connotation web) -> Personification ("wrinkled sea
   beneath him crawls") -> Pathetic fallacy ("sedge has withered") -> Symbolism & Semantic field -> 2.5 stars! */
scene('imagery', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(20,14,42,0.94)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('lib', engLibrary(d.bg), (t, g) => g.upd(t, 0));
  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), met = d.who('metaphor'), sim = d.who('simile');

  const qSim = engQuote(d.fg, { text: 'And like a thunderbolt he falls.', who: 'Alfred, Lord Tennyson', where: 'The Eagle (1851)', w: 660, size: 40, hl: ['like'] });
  const qMet = engQuote(d.fg, { text: 'Tyger Tyger, burning bright, / In the forests of the night;', who: 'William Blake', where: 'The Tyger (1794)', w: 680, size: 38, hl: ['burning'] });
  const qHope = engQuote(d.fg, { text: '"Hope" is the thing with feathers - / That perches in the soul -', who: 'Emily Dickinson', where: '"Hope" is the thing with feathers', w: 700, size: 36, hl: ['feathers', 'perches'] });
  const web = ptkWeb(d.fg, 'feathers', ['light & airy', 'flight & freedom', 'soft & warm', 'fragile in storm', 'small bird', 'survives the gale!']);
  const qSea = engQuote(d.fg, { text: 'The wrinkled sea beneath him crawls;', who: 'Alfred, Lord Tennyson', where: 'The Eagle (1851)', w: 680, size: 40, hl: ['wrinkled', 'crawls'] });
  const tPers = engTech(d.fg, 'PERSONIFICATION', { kind: 'language', def: 'human qualities given to something non-human' });
  const qKeats = engQuote(d.fg, { text: 'The sedge has withered from the lake, / And no birds sing.', who: 'John Keats', where: 'La Belle Dame sans Merci (1819)', w: 700, size: 36, hl: ['withered'] });
  const tPath = engTech(d.fg, 'PATHETIC FALLACY', { kind: 'language', def: 'weather or nature reflecting human emotion' });
  const tSem = engTech(d.fg, 'SEMANTIC FIELD', { kind: 'language', def: 'cluster from one area: hammer · chain · furnace · anvil' });
  const rating = ptkRating(d.fg);

  d.shot(0, { set: 'lib', cast: { simile: { x: 240, y: 500, s: 1.0, mood: 'happy' }, metaphor: { x: 960, y: 490, s: 1.0, mood: 'smug' } } })
    .shot(at('sim') - 0.05, { set: 'lib', cast: { simile: { x: 190, y: 500, s: 0.98, mood: 'happy' } } })
    .shot(at('met') - 0.05, { set: 'lib', cast: { metaphor: { x: 190, y: 490, s: 0.98, mood: 'smug' } } })
    .shot(at('feath') - 0.05, { set: 'lib', cast: { mei: { x: 190, y: 510, s: 0.98, mood: 'happy' } } })
    .shot(at('pers') - 0.05, { set: 'lib', cast: { nib: { x: 190, y: 470, s: 0.95, mood: 'smug' } } })
    .shot(at('sem') - 0.05, { set: 'lib', cast: { mrh: { x: 200, y: 500, s: 1.0, mood: 'neutral', mug: 1 } } })
    .shot(at('two') - 0.05, { set: 'lib', cast: { mei: { x: 340, y: 500, s: 1.1, mood: 'happy', phone: 1 }, metaphor: { x: 860, y: 480, s: 0.98, mood: 'smug' } } });

  d.pop(qSim, at('sim') + 0.05, end('sim') + 0.25, 730, 320);
  d.pop(qMet, at('met') + 0.05, end('met') + 0.25, 730, 320);
  d.pop(qHope, at('ext') + 0.08, end('ext') + 0.2, 730, 320);
  d.pop(web, at('feath') + 0.05, end('feath') + 0.25, 740, 340);
  d.pop(qSea, at('pers') + 0.05, end('pers') + 0.25, 730, 270);
  d.pop(tPers, mid('pers', 0.35), end('pers') + 0.25, 730, 500);
  d.pop(qKeats, at('pathf') + 0.05, end('pathf') + 0.25, 730, 270);
  d.pop(tPath, mid('pathf', 0.35), end('pathf') + 0.25, 730, 500);
  d.pop(tSem, mid('sem', 0.25), end('sem') + 0.25, 730, 340);

  return t => {
    d.upd(t);
    qSim.mark(0, P(t, mid('sim', 0.4), 0.4));
    qMet.mark(0, P(t, mid('met', 0.5), 0.4));
    qHope.mark(-1, P(t, mid('ext', 0.55), 0.4));
    web.set(P(t, at('feath') + 0.1, 1.4, ease));
    qSea.mark(-1, P(t, mid('pers', 0.5), 0.4));
    qKeats.mark(0, P(t, mid('pathf', 0.45), 0.4));
    const rv = win(t, mid('two', 0.15), S.D + 1, 0.25);
    rating.set(1 + 1.5 * P(t, mid('two', 0.25), 0.5, linear), rv); tr(rating, 1030, 74);
  };
});
