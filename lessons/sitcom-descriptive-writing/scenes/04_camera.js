/* Scene 4: Move the camera — don't start a car chase! Cam freezes Mei's ninja chase -> camera zoom funnel
   (1 Background lantern roof -> 2 Midground char kway teow smoke -> 3 Close-up Table 34 tissue packet ->
   4 Shift one-line paragraph -> 5 Cyclical lantern echo) -> Kevin's TiPToP -> fixing tense drift. */
scene('camera', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.94)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('street', dscRainStreet(d.bg), (t, g) => g.upd(t, t >= at('shift') ? 1.0 : 0.35));
  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), kev = d.who('kevin'), cam = d.who('cam');

  const cChase = engCard(d.fg, '"Suddenly ninjas rob the drink stall and Uncle Lim jumps a motorbike!"', { w: 740, size: 28, stroke: C.bad, icon: 'cross', tab: 'STORY TRAP' });
  const stFreeze = engStamp(d.fg, 'NOT A CAR CHASE!', '#D32F2F');

  // concentric zoom frames narrowing down the stage
  const frames = [
    [760, 62, '1 DRONE / BACKGROUND: glowing amber roof among HDB blocks', '#5AB4E0'],
    [640, 62, '2 MIDGROUND: heat, fans & char kway teow smoke', '#56D69B'],
    [520, 62, '3 CLOSE-UP: Table 34 — peeling prawns & tissue packet', '#FFB547'],
    [440, 62, '4 SHIFT: "Then the sky split open." (one-line para)', '#F06A8A'],
    [720, 62, '5 CYCLICAL ECHO: the lantern roof still glowing in the rain', '#B58CFF'],
  ].map(([w, h, txt, col]) => {
    const g = G(d.fg);
    E('rect', { x: -w / 2, y: -h / 2, width: w, height: h, rx: 14, fill: 'rgba(12,22,38,0.95)', stroke: col, 'stroke-width': 3.5 }, g);
    T(g, 0, 8, txt, { size: 23, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
    return g;
  });

  const cTip = engCard(d.fg, '**TiPToP** = new paragraph for change of:\n**Ti**me  ·  **P**lace  ·  **To**pic  ·  **P**erson', { w: 720, size: 29, tab: 'PARAGRAPHS', tabCol: '#1E6E9E', stroke: ENG.sky });
  const cTense = engCard(d.fg, '"The rain **hammers** (present)... a cyclist **skidded** (past)" ✗\nPick **one tense** & **one viewpoint** — and keep them!', { w: 760, size: 28, stroke: ENG.gold, icon: 'tick' });

  d.shot(0, { set: 'street', cast: { mei: { x: 220, y: 520, s: 1.0, mood: 'happy' }, cam: { x: 1000, y: 510, s: 0.98, mood: 'shock', zoom: 1 } } })
    .shot(at('zoom') - 0.05, { set: 'street', cam: [1.0, 1.08, 620, 410], cast: { cam: { x: 140, y: 585, s: 0.72, mood: 'smug', zoom: 0.8 }, mrh: { x: 1070, y: 585, s: 0.75, mood: 'neutral' } } })
    .shot(at('cyc') - 0.05, { set: 'street', cast: { nib: { x: 150, y: 560, s: 0.76, mood: 'smug' }, cam: { x: 1060, y: 575, s: 0.75, mood: 'happy' } } })
    .shot(at('tiptop') - 0.05, { conf: 'kevin', cast: { kevin: { x: 300, y: 430, s: 1.2, mood: 'happy' } } })
    .shot(at('tense') - 0.05, { set: 'street', cast: { mrh: { x: 200, y: 520, s: 0.98, mood: 'neutral', mug: 1 }, mei: { x: 1000, y: 530, s: 0.95, mood: 'happy' } } });

  d.shake(at('freeze') + 0.08, 9);
  d.lower('kevin', at('tiptop') + 0.1, 2.8);

  d.pop(cChase, at('chase') + 0.08, end('freeze') + 0.2, 600, 230);
  d.pop(stFreeze, at('freeze') + 0.08, end('freeze') + 0.2, 600, 390, 0.82);

  const cues = ['p1', 'p2', 'p3', 'shift', 'cyc'];
  frames.forEach((f, i) => d.pop(f, at(cues[i]) + 0.05, end('cyc') + 0.25, 600, 130 + i * 74));

  d.pop(cTip, at('tiptop') + 0.08, end('tiptop') + 0.25, 790, 330);
  d.pop(cTense, at('tense') + 0.08, end('tense') + 0.3, 600, 250);

  return t => {
    d.upd(t);
  };
});
