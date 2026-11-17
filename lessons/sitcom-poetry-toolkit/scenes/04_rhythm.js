/* Scene 4: Rhythm, metre & rhyme (showpiece: scansion strips for Sonnet 18 & The Tyger + ABABCC rhyme scheme).
   Rhythm vs metre -> "An iamb runs a-WAY (da-DUM); a trochee is a TI-ger (DUM-da)" -> Will's Sonnet 18 scanned in
   iambic pentameter -> Wordsworth's tetrameter vs Blake's trochaic forge & galloping anapaests -> Full, half/slant,
   internal & eye rhyme -> ABABCC rhyme scheme in Daffodils -> 3.5 stars. */
scene('rhythm', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(20,14,42,0.94)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };
  const panel = (w, h) => { const g = G(d.fg); E('rect', { x: -w / 2, y: -h / 2, width: w, height: h, rx: 22, fill: 'rgba(16,14,38,0.95)', stroke: ENG.violet, 'stroke-width': 3.5 }, g); return g; };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(9); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), sim = d.who('simile');

  const mkStrip = (sylls, stress, title, sub) => {
    const p = panel(1080, 280);
    T(p, -500, -96, title, { size: 26, weight: 800, fill: '#FFE45C' });
    T(p, 500, -96, sub, { size: 22, weight: 700, anchor: 'end', fill: C.muted, font: FB });
    const sc = engScan(p, sylls, { stress, size: 42, maxW: 980 }); tr(sc, 0, 26);
    return { p, sc };
  };
  const son = mkStrip(['Shall', 'I', 'com', 'pare', 'thee', 'to', 'a', 'sum', "mer's", 'day?'], 'u/u/u/u/u/', 'IAMBIC PENTAMETER · 5 IAMBS (da-DUM ×5)', 'Shakespeare · Sonnet 18 (1609)');
  const tyg = mkStrip(['Ty', 'ger', 'Ty', 'ger,', 'burn', 'ing', 'bright'], '/u/u/u/', 'TROCHAIC · HAMMERING (DUM-da)', 'William Blake · The Tyger (1794)');

  const cFeet = engCard(d.fg, '• **Iamb**: da-DUM (*a-**WAY***)\n• **Trochee**: DUM-da (***TI**-ger*)', { w: 620, size: 32, stroke: ENG.violet, boldFill: '#FFE45C' });
  const cRhyme = engCard(d.fg, '• **Full rhyme**: *trees / breeze*\n• **Half (slant) rhyme**: *soul / all* (uneasy!)\n• **Internal rhyme**: chimes inside one line', { w: 660, size: 29, stroke: '#5AB4E0' });
  const cEye = pill('eye / symmetry = historical or EYE RHYME', { size: 30, stroke: ENG.gold, color: '#FFE6A8' });
  const cScheme = engCard(d.fg, '**Daffodils rhyme scheme:**\ncloud (**A**) · hills (**B**) · crowd (**A**) · daffodils (**B**) · trees (**C**) · breeze (**C**)\n→ **ABABCC** (ends on a **rhyming couplet**!)', { w: 700, size: 27, stroke: '#56D69B', boldFill: '#FFE45C' });
  const rating = ptkRating(d.fg);

  const corner = (who, x, y, s, mood, ex) => ({ [who]: Object.assign({ x, y, s, mood }, ex || {}) });
  d.shot(0, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.05, mood: 'neutral', mug: 1 }, mei: { x: 960, y: 500, s: 1.0, mood: 'happy' } } })
    .shot(at('son18') - 0.05, { set: 'room', cast: corner('will', 1070, 580, 0.58, 'smug', { glow: 0.7 }) })
    .shot(at('tetra') - 0.05, { set: 'room', cast: corner('mrh', 130, 620, 0.62, 'neutral') })
    .shot(at('rhyme') - 0.05, { set: 'room', cast: { nib: { x: 200, y: 460, s: 0.95, mood: 'smug' } } })
    .shot(at('eye') - 0.05, { set: 'room', cast: { will: { x: 220, y: 430, s: 0.95, mood: 'smug' } } })
    .shot(at('scheme') - 0.05, { set: 'room', cast: { simile: { x: 200, y: 490, s: 0.98, mood: 'happy' } } })
    .shot(at('three5') - 0.05, { conf: 'mei', cast: { mei: { x: 320, y: 430, s: 1.28, mood: 'smug', phone: 1 } } });

  d.pop(cFeet, at('trick') + 0.05, end('trick') + 0.25, 600, 290);
  d.pop(cRhyme, at('rhyme') + 0.08, end('rhyme') + 0.25, 730, 340);
  d.pop(cEye, at('eye') + 0.1, end('eye') + 0.25, 730, 340);
  d.pop(cScheme, at('scheme') + 0.08, end('scheme') + 0.25, 730, 340);

  return t => {
    d.upd(t);
    const vSon = engOut(son.p, t, at('son18') - 0.05, end('son18') + 0.2, 600, 310, 1);
    if (vSon) {
      son.sc.set(P(t, at('son18'), 0.7, linear));
      son.sc.marks(P(t, at('son18') + 0.25, 0.7, linear));
      son.sc.feet(P(t, mid('son18', 0.45), 0.7, linear));
      const a = mid('son18', 0.32), b = mid('son18', 0.86);
      son.sc.ball(t >= a && t <= b ? (t - a) / (b - a) * son.sc.n : -1);
    }
    const vTyg = engOut(tyg.p, t, at('tetra') - 0.05, end('tetra') + 0.2, 600, 310, 1);
    if (vTyg) {
      tyg.sc.set(P(t, at('tetra'), 0.6, linear));
      tyg.sc.marks(P(t, at('tetra') + 0.2, 0.6, linear));
      const a = mid('tetra', 0.52), b = mid('tetra', 0.82);
      tyg.sc.ball(t >= a && t <= b ? (t - a) / (b - a) * tyg.sc.n : -1);
    }
    const rv = win(t, mid('three5', 0.1), S.D + 1, 0.25);
    rating.set(2.5 + P(t, mid('three5', 0.2), 0.5, linear), rv); tr(rating, 1030, 74);
  };
});
