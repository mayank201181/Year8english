/* Ep 2, Scene 1: Context — King James I (1611), First Folio #1, Romance genre, 1609 Sea Venture off Bermuda
   ("the still-vex'd Bermoothes"), early colonisation, Montaigne's 'Of Cannibals' (canibal -> Caliban), and
   Prospero as Shakespeare's farewell ("some critics argue" = interpretation, not fact). */
scene('context', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  let stormAmt = 0;
  d.add('lib', engLibrary(d.bg), (t, g) => g.upd(t, 0));
  d.add('isl', tmpIsland(d.bg), (t, g) => g.upd(t, stormAmt));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), ari = d.who('ariel');

  /* James I & First Folio */
  const cJames = pill('1 Nov 1611 · Performed at court for King James I', { stroke: ENG.gold });
  const folio = engBook(d.fg, 'FIRST\nFOLIO\n1623', '#5A2E1E', 1.05);
  const cFirst = pill('Printed FIRST in the 1623 First Folio', { size: 28, stroke: ENG.rose, color: '#FFD0DC' });
  const tRom = engTech(d.fg, 'ROMANCE', { kind: 'form', def: 'late tragicomedy: begins in danger, ends in forgiveness & reunion', size: 38 });

  /* Sea Venture */
  const cSea = pill('1609 · Sea Venture wrecked off Bermuda (bound for Jamestown)', { size: 28, stroke: '#5AB4E0', color: '#D8F4FF' });
  const qBerm = engQuote(d.fg, { text: "the still-vex'd Bermoothes", who: 'Ariel', where: 'The Tempest, Act 1 Scene 2', w: 600, size: 42, hl: ['Bermoothes'] });
  const cAlive = pill('Every passenger survived and built new boats!', { size: 28, stroke: C.good, color: '#C9F2D3' });

  /* Colonialism & Montaigne */
  const tCol = engTech(d.fg, 'COLONIALISM', { kind: 'context', def: 'settlers claiming and ruling land already inhabited', size: 38 });
  const anag = G(d.fg);
  E('rect', { x: -370, y: -115, width: 740, height: 230, rx: 22, fill: 'rgba(14,24,40,0.95)', stroke: ENG.gold, 'stroke-width': 4 }, anag);
  T(anag, 0, -64, "Michel de Montaigne · 'Of Cannibals' (1603)", { size: 28, weight: 800, anchor: 'middle', fill: ENG.gold });
  T(anag, -185, 22, 'C A N I B A L', { size: 40, weight: 800, anchor: 'middle', fill: '#8FD3FF' });
  T(anag, 0, 20, '↔', { size: 42, weight: 800, anchor: 'middle', fill: ENG.gold });
  T(anag, 185, 22, 'C A L I B A N', { size: 40, weight: 800, anchor: 'middle', fill: ENG.rose });
  T(anag, 0, 80, 'Who is truly “savage”, and who is “civilised”?', { size: 25, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });

  /* Farewell interpretation vs fact */
  const cMe = pill('PROSPERO = SHAKESPEARE?', { size: 36, stroke: '#7FD3FF', color: '#E6F4FF' });
  const cFact = engCard(d.fg, '✗ Stating it as a **fact**\n✓ "**Some critics argue** Prospero is Shakespeare\'s farewell..."', { w: 760, size: 30, icon: 'tick', stroke: C.good, boldFill: C.good });

  d.shot(0, { set: 'lib', cast: { will: { x: 260, y: 410, s: 0.95, mood: 'smug', quill: 1 }, mei: { x: 940, y: 510, s: 0.95, mood: 'neutral' } } })
    .shot(at('romance') - 0.05, { set: 'lib', cast: { nib: { x: 220, y: 460, s: 0.92, mood: 'smug' }, will: { x: 1030, y: 440, s: 0.82, mood: 'happy' } } })
    .shot(at('bermuda') - 0.05, { set: 'isl', cast: { mrh: { x: 200, y: 500, s: 0.95, mood: 'neutral', mug: 1 } } })
    .shot(at('survived') - 0.05, { set: 'isl', cast: { ariel: { x: 240, y: 390, s: 0.95, mood: 'happy' } } })
    .shot(at('colony') - 0.05, { set: 'isl', cast: { mei: { x: 240, y: 510, s: 1.0, mood: 'annoyed', hand: 1 }, mrh: { x: 1010, y: 500, s: 0.9, mood: 'neutral' } } })
    .shot(at('montaigne') - 0.05, { set: 'lib', cast: { nib: { x: 180, y: 470, s: 0.88, mood: 'smug' } } })
    .shot(at('farewell') - 0.05, { set: 'lib', cast: { will: { x: 300, y: 410, s: 1.0, mood: 'smug', glow: 0.9 }, mrh: { x: 960, y: 490, s: 0.95, mood: 'deadpan', mug: 1 } } });

  d.x('mei', at('colonial'), { hand: 0 });
  d.mood('will', at('careful'), 'shock').mood('will', at('ruin'), 'annoyed');

  d.pop(cJames, at('james') + 0.06, end('james') + 0.2, 630, 150);
  d.pop(folio, mid('james', 0.45), end('james') + 0.25, 630, 370);
  d.pop(cFirst, mid('james', 0.6), end('james') + 0.25, 630, 560);
  d.pop(tRom, mid('romance', 0.18), end('romance') + 0.25, 640, 340);

  d.pop(cSea, at('bermuda') + 0.08, end('survived') + 0.2, 640, 140);
  d.pop(qBerm, mid('survived', 0.45), end('survived') + 0.25, 680, 310);
  d.pop(cAlive, mid('survived', 0.15), end('survived') + 0.25, 680, 520);

  d.pop(tCol, at('colonial') + 0.06, end('colonial') + 0.25, 630, 270);
  d.pop(anag, at('montaigne') + 0.08, end('montaigne') + 0.25, 660, 360);

  d.pop(cMe, mid('farewell', 0.35), end('careful') + 0.2, 630, 190);
  d.pop(cFact, at('careful') + 0.08, end('ruin') + 0.3, 630, 380);

  return t => {
    d.upd(t);
    stormAmt = win(t, at('bermuda') - 0.1, at('survived') + 0.3, 0.4) * 0.85;
    qBerm.mark(0, P(t, mid('survived', 0.65), 0.35));
  };
});
