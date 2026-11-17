/* Scene 3: What, How, Why — analysing language. Nib leaks ink at "makes the reader want to read on",
   Mr H & Question 4 build WHAT-HOW-WHY, Will & Mei unpack Dickens's "solitary as an oyster" (shell + hidden pearl!),
   zoom in on "nipped", zoom out to -ing participle list & extended metaphor of cold -> two stars. */
scene('language', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.94)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), qm = d.who('qmark');

  const cBad = engCard(d.fg, '"Dickens uses a simile... to **make the reader want to read on**."', { w: 720, size: 30, stroke: C.bad, icon: 'cross', tab: 'EMPTY EFFECT' });
  const stEmpty = engStamp(d.fg, 'NO MARKS!', '#D32F2F');
  const whw = [
    ['WHAT', 'short, embedded quotation', '#5AB4E0'],
    ['HOW', 'technique or word class (simile, verb...)', '#FFB547'],
    ['WHY', 'precise effect on the reader (THE MARKS!)', '#56D69B'],
  ].map(([k, v, col]) => {
    const g = G(d.fg);
    E('rect', { x: -340, y: -44, width: 680, height: 88, rx: 16, fill: 'rgba(12,22,38,0.95)', stroke: col, 'stroke-width': 4 }, g);
    T(g, -310, 10, k, { size: 34, weight: 800, fill: col });
    T(g, -170, 8, v, { size: 26, weight: 700, fill: '#FFFFFF', font: FB });
    return g;
  });

  const qOys = engQuote(d.fg, { text: 'Hard and sharp as flint... secret, and self-contained, and solitary as an oyster.', who: 'Narrator', where: 'Dickens, A Christmas Carol, Stave One', w: 780, size: 35, hl: ['solitary', 'oyster'] });
  // oyster prop that opens to reveal a glowing pearl!
  const oys = G(d.fg);
  const botS = E('path', { d: 'M-84,12 Q0,62 84,12 Q44,26 -84,12 Z', fill: '#7D8B99', stroke: SC_INK, 'stroke-width': 4 }, oys);
  const prl = E('circle', { cx: 0, cy: 4, r: 22, fill: ball('#FFFDF8', '#D9CBB8'), stroke: ENG.gold, 'stroke-width': 3 }, oys);
  const topS = G(oys);
  E('path', { d: 'M-86,10 Q-40,-56 84,6 Q10,18 -86,10 Z', fill: '#94A3B2', stroke: SC_INK, 'stroke-width': 4 }, topS);
  const cShell = pill('1 Hard shell → clamped shut, isolated', { stroke: '#FF9F43' });
  const cPearl = pill('2 Hidden pearl → warmth buried inside!', { stroke: ENG.gold, color: '#FFE6A8' });

  const qNip = engQuote(d.fg, { text: 'The cold within him froze his old features, nipped his pointed nose', who: 'Narrator', where: 'A Christmas Carol, Stave One', w: 760, size: 35, hl: ['cold', 'nipped'] });
  const cNip = engCard(d.fg, 'Verb **"nipped"** → sharp frostbite + a miser **pinching** every penny!', { w: 720, size: 29, stroke: ENG.sky, icon: 'tick' });
  const cList = pill('squeezing · wrenching · grasping · scraping · clutching', { size: 27, stroke: '#FF7EB6' });
  const tExt = engTech(d.fg, 'EXTENDED METAPHOR', { kind: 'language', def: 'frost, rime & ice carried across the whole passage' });
  const rating = cmpRating(d.fg);

  d.shot(0, { set: 'room', cast: { mei: { x: 280, y: 500, s: 1.05, mood: 'smug' }, nib: { x: 940, y: 460, s: 0.95, mood: 'neutral' } } })
    .shot(at('ink') - 0.05, { set: 'room', cast: { nib: { x: 260, y: 450, s: 1.0, mood: 'shock', ink: 1 }, mei: { x: 960, y: 510, s: 0.95, mood: 'shock' } } })
    .shot(at('whw') - 0.05, { set: 'room', cast: { mrh: { x: 160, y: 500, s: 0.9, mood: 'neutral' }, qmark: { x: 1050, y: 500, s: 0.9, mood: 'happy' } } })
    .shot(at('oyster') - 0.05, { set: 'room', cast: { will: { x: 150, y: 490, s: 0.82, mood: 'smug', glow: 0.4 }, mei: { x: 1050, y: 530, s: 0.88, mood: 'neutral' } } })
    .shot(at('zoom') - 0.05, { set: 'room', cast: { nib: { x: 150, y: 510, s: 0.82, mood: 'smug' }, mrh: { x: 1060, y: 520, s: 0.85, mood: 'happy' } } })
    .shot(at('stars') - 0.05, { conf: 'mei', cast: { mei: { x: 330, y: 430, s: 1.3, mood: 'happy', phone: 1 } } });

  d.mood('mei', at('shell'), 'happy').mood('mei', at('nip'), 'happy');

  d.pop(cBad, mid('bad', 0.15), end('ink') + 0.2, 600, 250);
  d.pop(stEmpty, mid('ink', 0.35), end('ink') + 0.2, 600, 410, 0.85);
  whw.forEach((g, i) => d.pop(g, mid('whw', 0.15 + i * 0.25), end('why') + 0.25, 600, 210 + i * 116));
  d.pop(qOys, at('oyster') + 0.05, end('pearl') + 0.25, 600, 210);
  d.pop(oys, at('shell') + 0.05, end('pearl') + 0.25, 600, 415);
  d.pop(cShell, mid('shell', 0.25), end('pearl') + 0.25, 600, 535);
  d.pop(cPearl, mid('pearl', 0.35), end('pearl') + 0.25, 600, 615);
  d.pop(qNip, at('zoom') + 0.05, end('nip') + 0.25, 600, 235);
  d.pop(cNip, at('nip') + 0.08, end('nip') + 0.25, 600, 470);
  d.pop(cList, at('list') + 0.1, end('ext') + 0.25, 600, 260);
  d.pop(tExt, at('ext') + 0.1, end('ext') + 0.3, 600, 440);

  return t => {
    d.upd(t);
    qOys.mark(-1, P(t, mid('oyster', 0.45), 0.5));
    const open = P(t, mid('pearl', 0.25), 0.7, easeOut);
    tr(topS, -84, 10, 1, -34 * open);
    topS.setAttribute('transform', `translate(-84 10) rotate(${(-34 * open).toFixed(1)}) translate(84 -10)`);
    op(prl, open);
    qNip.mark(1, P(t, mid('zoom', 0.6), 0.4));
    qNip.mark(0, P(t, mid('ext', 0.2), 0.4));
    const rv = win(t, at('stars'), S.D + 1, 0.25);
    rating.set(1 + P(t, mid('stars', 0.2), 0.5, linear), rv); tr(rating, 920, 250);
  };
});
