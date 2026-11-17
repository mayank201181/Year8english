/* Scene 1: Decode the question and beat the clock. Question 4's three clues -> the 7 question types mnemonic
   (Really Inquisitive Victors Love Solving Sneaky Exams) -> marks map to points -> Skim / Scan (saccades) /
   Close-read -> Kevin's "A mark a minute, a point per mark" clock. */
scene('decode', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.94)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), kev = d.who('kevin'), qm = d.who('qmark');

  const anat = cmpQuestionAnatomy(d.fg);
  const mnem = engCard(d.fg, '**R**eally **I**nquisitive **V**ictors **L**ove **S**olving **S**neaky **E**xams', { w: 860, size: 30, tab: '7 QUESTION TYPES', tabCol: '#1E6E9E', stroke: ENG.sky });
  const types = [
    ['RETRIEVAL', 'find explicit facts', '#5AB4E0'],
    ['INFERENCE', 'read between the lines', '#56D69B'],
    ['VOCABULARY', 'meaning in context', '#8FD3FF'],
    ['LANGUAGE', 'how words create effects', '#FF7EB6'],
    ['STRUCTURE', 'order, focus & pace', '#FFB547'],
    ['SUMMARY', 'condense in own words', '#B58CFF'],
    ['EVALUATION', 'judge how far you agree', '#F06A8A'],
  ].map(([nm, df, col]) => {
    const g = G(d.fg);
    E('rect', { x: -195, y: -38, width: 390, height: 76, rx: 14, fill: 'rgba(14,24,40,0.95)', stroke: col, 'stroke-width': 3.5 }, g);
    T(g, -175, -6, nm, { size: 25, weight: 800, fill: col });
    T(g, -175, 24, df, { size: 22, weight: 600, fill: '#FFFFFF', font: FB });
    return g;
  });

  const mapCard = engCard(d.fg, '**2 marks** → 2 brief points\n**6 marks** (language) → ~3 developed points', { w: 680, size: 32, stroke: ENG.gold, icon: 'tick' });
  const gears = [
    ['1 SKIM', 'title, first & last lines → the GIST', '#5AB4E0'],
    ['2 SCAN', 'eye leaps (saccades) → 1 target detail', '#FFB547'],
    ['3 CLOSE-READ', 're-read named lines slowly & annotate', '#56D69B'],
  ].map(([t1, t2, col]) => {
    const g = G(d.fg);
    E('rect', { x: -340, y: -48, width: 680, height: 96, rx: 18, fill: 'rgba(12,22,38,0.95)', stroke: col, 'stroke-width': 4 }, g);
    T(g, -310, -8, t1, { size: 30, weight: 800, fill: col });
    T(g, -310, 30, t2, { size: 25, weight: 700, fill: '#FFFFFF', font: FB });
    return g;
  });

  const clockG = G(d.fg);
  E('circle', { r: 86, fill: '#FFFDF7', stroke: ENG.gold, 'stroke-width': 6 }, clockG);
  const hand = E('line', { x1: 0, y1: 0, x2: 0, y2: -64, stroke: '#C62828', 'stroke-width': 6, 'stroke-linecap': 'round' }, clockG);
  E('circle', { r: 8, fill: SC_INK }, clockG);
  const cRule = engCard(d.fg, '**A Mark a Minute · A Point per Mark**\n(10 min reading + 1 min per mark + check)', { w: 720, size: 30, stroke: ENG.sky });
  const cWarn = pill('2 marks ≠ 10 minutes!', { size: 32, stroke: C.bad, color: '#FFD0D4' });

  d.shot(0, { set: 'room', cast: { qmark: { x: 180, y: 500, s: 0.95, mood: 'neutral' }, mrh: { x: 1050, y: 500, s: 0.9, mood: 'deadpan' } } })
    .shot(at('seven') - 0.05, { set: 'room', cast: { nib: { x: 150, y: 500, s: 0.85, mood: 'smug' }, qmark: { x: 1060, y: 520, s: 0.85, mood: 'happy' } } })
    .shot(at('marks') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.0, mood: 'neutral', mug: 1 }, mei: { x: 1000, y: 510, s: 0.95, mood: 'neutral' } } })
    .shot(at('skim') - 0.05, { set: 'room', cast: { mrh: { x: 160, y: 500, s: 0.9, mood: 'neutral' }, nib: { x: 1060, y: 500, s: 0.82, mood: 'smug' } } })
    .shot(at('clock') - 0.05, { conf: 'kevin', cast: { kevin: { x: 290, y: 430, s: 1.25, mood: 'shock', sweat: 1 } } })
    .shot(at('trap') - 0.05, { set: 'room', cast: { qmark: { x: 340, y: 470, s: 1.05, mood: 'sad', tears: 0.4 }, mei: { x: 880, y: 500, s: 1.0, mood: 'happy' } } });

  d.lower('kevin', at('clock') + 0.1, 2.8);
  d.mood('mei', at('slow'), 'shock');

  d.pop(anat, at('anat') + 0.05, end('three') + 0.25, 610, 250);
  d.pop(mnem, at('seven') + 0.1, end('list2') + 0.25, 600, 155);
  types.forEach((c, i) => {
    const t0 = i < 3 ? mid('list1', 0.05 + i * 0.3) : mid('list2', 0.04 + (i - 3) * 0.22);
    const col = i < 4 ? 395 : 815;
    const row = i < 4 ? 275 + i * 92 : 275 + (i - 4) * 92;
    d.pop(c, t0, end('list2') + 0.25, col, row);
  });
  d.pop(mapCard, mid('marks', 0.15), end('slow') + 0.2, 600, 290);
  gears.forEach((g, i) => d.pop(g, at(['skim', 'scan', 'close'][i]) + 0.08, end('close') + 0.25, 600, 210 + i * 130));
  d.pop(clockG, at('clock') + 0.1, end('clock') + 0.25, 830, 250);
  d.pop(cRule, mid('clock', 0.35), end('clock') + 0.25, 780, 500);
  d.pop(cWarn, mid('trap', 0.2), end('trap') + 0.3, 620, 250);

  return t => {
    d.upd(t);
    anat.hl(0, P(t, mid('three', 0.08), 0.35));
    anat.hl(1, P(t, mid('three', 0.45), 0.35));
    anat.hl(2, P(t, mid('three', 0.72), 0.35));
    tr(hand, 0, 0, 1, ((t * 140) % 360));
  };
});
