/* Scene 4: The heartbeat (showpiece: the scansion ball). Lunch in 8H: an iamb is da-DUM, penta = five, so ten
   syllables -> Romeo's line scanned with a bouncing ball -> i-AM x5 -> Mei's kaya toast line scans perfectly ->
   the heartbeat skips: "To be, or not to be, that is the question" has eleven (feminine ending) and Kevin is the
   caesura -> trochaic inversion ("Now is the winter...") -> the witches' trochees -> three stars. */
scene('heartbeat', S => {
  const { at, end, mid } = S;
  const AMP = S.reduce ? 0.3 : 1;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.9)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };
  const panel = (w, h) => { const g = G(d.fg); E('rect', { x: -w / 2, y: -h / 2, width: w, height: h, rx: 24, fill: 'rgba(14,20,40,0.94)', stroke: ENG.rose, 'stroke-width': 3 }, g); return g; };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(6); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin');

  /* the strips (each on its own dark panel) */
  const mk = (sylls, stress, title, sub) => {
    const p = panel(1120, 300);
    if (title) T(p, -520, -100, title, { size: 28, weight: 800, fill: ENG.gold });
    if (sub) T(p, 520, -100, sub, { size: 24, weight: 700, anchor: 'end', fill: C.muted, font: FB });
    const sc = engScan(p, sylls, { stress, size: 46, maxW: 1020 }); tr(sc, 0, 30);
    return { p, sc };
  };
  const soft = mk(['But', 'soft,', 'what', 'light', 'through', 'yon', 'der', 'win', 'dow', 'breaks?'], 'u/u/u/u/u/', '10 SYLLABLES · 5 IAMBS', 'Romeo · Romeo and Juliet, Act 2 Scene 2');
  const kaya = mk(['To', 'day', 'I', 'want', 'to', 'eat', 'some', 'ka', 'ya', 'toast.'], 'u/u/u/u/u/', "MEI'S LUNCH ORDER", 'Mei · Year 8, Period 4');
  const tobe = mk(['To', 'be,', 'or', 'not', 'to', 'be,', 'that', 'is', 'the', 'ques', 'tion'], 'u/u/u/u/u/u', '11 SYLLABLES', 'Hamlet · Hamlet, Act 3 Scene 1');
  const win_ = mk(['Now', 'is', 'the', 'win', 'ter', 'of', 'our', 'dis', 'con', 'tent'], '/uu/u/u/u/', 'TROCHAIC INVERSION: DUM-da first', 'Richard · Richard III, Act 1 Scene 1');
  const dbl = mk(['Dou', 'ble,', 'dou', 'ble,', 'toil', 'and', 'trou', 'ble'], '/u/u/u/u', '4 TROCHEES: DUM-da ×4', 'Witches · Macbeth, Act 4 Scene 1');
  const plus1 = chip(tobe.p, '+1', { size: 34, fill: ENG.rose, color: '#FFFFFF', stroke: '#FFFFFF', sw: 3 });
  const tag = (strip, k) => strip.sc.items[k];

  /* chips */
  const tIamb = engTech(d.fg, 'IAMB', { kind: 'form', def: 'unstressed + stressed: da-DUM', size: 44 });
  const cEx = pill('a-WAKE · to-DAY · be-LIEVE', { size: 34, stroke: ENG.rose });
  const penta = G(d.fg);
  const pts = []; for (let k = 0; k < 5; k++) { const a = -Math.PI / 2 + k * TAU / 5; pts.push([Math.cos(a) * 70, Math.sin(a) * 70]); }
  E('path', { d: 'M' + pts.map(p => p.join(',')).join(' L') + 'Z', fill: 'rgba(240,106,138,0.25)', stroke: ENG.rose, 'stroke-width': 6, 'stroke-linejoin': 'round' }, penta);
  pts.forEach((p, k) => T(penta, p[0] * 1.45, p[1] * 1.45 + 10, String(k + 1), { size: 28, weight: 800, anchor: 'middle', fill: '#FFFFFF' }));
  const cPenta = pill('PENTA = 5 · 5 iambs = 10 syllables', { size: 34 });
  const iam = G(d.fg);
  for (let k = 0; k < 5; k++) { const c = chip(iam, 'i-AM', { size: 40, fill: k % 2 ? '#3A1A2A' : '#2A1A3A', stroke: ENG.rose, sw: 3, color: '#FFFFFF' }); tr(c, (k - 2) * 170, 0); }
  const toast = G(d.fg);
  E('path', { d: 'M-90,40 L90,40 L80,-30 Q80,-60 50,-60 L-50,-60 Q-80,-60 -80,-30 Z', fill: '#E8B060', stroke: '#9C6A20', 'stroke-width': 5 }, toast);
  E('rect', { x: -70, y: -14, width: 140, height: 14, rx: 6, fill: '#7CC08A' }, toast);
  E('rect', { x: -66, y: 4, width: 132, height: 10, rx: 4, fill: '#F2E6C0' }, toast);
  const tFem = engTech(d.fg, 'FEMININE ENDING', { kind: 'form', def: 'an extra unstressed 11th syllable' });
  const tCae = engTech(d.fg, 'CAESURA', { kind: 'punct', def: 'a strong pause in the middle of a line' });
  const cSpell = pill('not pentameter: a spell', { size: 32, stroke: '#B58CFF' });
  const fingers = G(d.fg), fingT = T(fingers, 0, 0, '', { size: 64, weight: 800, anchor: 'middle', fill: ENG.gold });
  engOutline(fingT, '#2A1A22', 10);
  const rating = osRating(d.fg);

  /* shots */
  const bottom = { mrh: { x: 120, y: 640, s: 0.62 }, will: { x: 1090, y: 600, s: 0.55 }, mei: { x: 1090, y: 640, s: 0.6 }, nib: { x: 110, y: 620, s: 0.55 } };
  const corner = (who, mood, extra) => ({ [who]: Object.assign({}, bottom[who], { mood }, extra || {}) });
  d.shot(0, { set: 'room', cast: { mei: { x: 600, y: 520, s: 1.25, mood: 'annoyed', hand: 1 } } })
    .shot(at('iamb') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.05, mood: 'neutral' } } })
    .shot(at('penta') - 0.05, { set: 'room', cast: { nib: { x: 200, y: 450, s: 0.95, mood: 'smug' } } })
    .shot(at('soft') - 0.05, { set: 'room', cast: corner('will', 'happy', { glow: 0.6 }) })
    .shot(at('stresses') - 0.05, { set: 'room', cast: corner('mrh', 'neutral') })
    .shot(at('iam') - 0.05, { set: 'room', cast: { mei: { x: 600, y: 560, s: 1.0, mood: 'happy' } } })
    .shot(at('kaya') - 0.05, { set: 'room', cast: corner('mei', 'shock') })
    .shot(at('yes') - 0.05, { set: 'room', cast: { mei: { x: 330, y: 520, s: 1.1, mood: 'happy' }, will: { x: 860, y: 420, s: 0.95, mood: 'shock' } } })
    .shot(at('skips') - 0.05, { set: 'room', cast: { will: { x: 600, y: 440, s: 1.0, mood: 'neutral' } } })
    .shot(at('tobe') - 0.05, { set: 'room', cast: corner('will', 'sad', { glow: 0.6 }) })
    .shot(at('eleven') - 0.05, { set: 'room', cast: corner('mrh', 'neutral') })
    .shot(at('trails') - 0.05, { set: 'room', cast: corner('nib', 'smug') })
    .shot(at('kevin') - 0.05, { set: 'room', cast: { kevin: { x: 600, y: 520, s: 0.7, mood: 'neutral', sweat: 1 } } })
    .shot(at('winter') - 0.05, { set: 'room', cast: corner('mrh', 'neutral') })
    .shot(at('witches') - 0.05, { set: 'room', cast: corner('will', 'smug', { glow: 1 }) })
    .shot(at('three') - 0.05, { set: 'room', cast: { mei: { x: 360, y: 520, s: 1.1, mood: 'happy', phone: 1 }, will: { x: 860, y: 420, s: 0.95, mood: 'happy' } } });
  d.mood('will', at('basically'), 'smug').mood('will', at('hungry'), 'deadpan').mood('mei', at('hungry'), 'annoyed');
  d.mood('kevin', mid('caesura', 0.45), 'happy').mood('kevin', mid('caesura', 0.8), 'sad');
  d.lower('kevin', at('kevin') + 0.1, 3.0);

  d.pop(tIamb, mid('iamb', 0.15), end('iamb') + 0.2, 720, 240);
  d.pop(cEx, mid('iamb', 0.55), end('iamb') + 0.2, 720, 420);
  d.pop(penta, at('penta') + 0.05, end('penta') + 0.2, 720, 270);
  d.pop(cPenta, mid('penta', 0.45), end('penta') + 0.2, 720, 450);
  d.pop(iam, mid('iam', 0.25), end('iam') + 0.2, 600, 200);
  d.pop(toast, mid('yes', 0.3), end('hungry') + 0.2, 600, 200);
  d.pop(tFem, mid('eleven', 0.45), end('trails') + 0.2, 600, 590);
  d.pop(tCae, mid('caesura', 0.35), end('caesura') + 0.2, 600, 150);
  d.pop(cSpell, mid('witches', 0.7), end('witches') + 0.2, 600, 590);

  // which strip is on screen
  const STRIPS = [[soft, at('soft') - 0.05, end('stresses') + 0.2], [kaya, at('kaya') - 0.05, end('kaya') + 0.3], [tobe, at('tobe') - 0.05, end('caesura') + 0.2],
    [win_, at('winter') - 0.05, end('winter') + 0.2], [dbl, at('witches') - 0.05, end('witches') + 0.2]];
  const ballOn = (strip, line, f0, f1) => { const a = mid(line, f0), b = mid(line, f1); return (S._t >= a && S._t <= b) ? (S._t - a) / (b - a) * strip.sc.n : -1; };

  return t => {
    S._t = t;
    d.upd(t);
    STRIPS.forEach(([st, a, b]) => {
      const v = engOut(st.p, t, a, b, 600, st === tobe ? 320 : 330, 1);
      if (!v) return;
      st.sc.set(P(t, a, 0.8, linear)); st.sc.marks(P(t, a + 0.3, 0.8, linear));
    });
    // Romeo's line: the ball bounces in time with Will's reading, then the feet are numbered and key words glow
    soft.sc.ball(ballOn(soft, 'soft', 0.02, 0.98));
    soft.sc.feet(P(t, at('stresses'), 1.0, linear));
    if (t >= mid('stresses', 0.35) && t < end('stresses')) [1, 3, 7, 9].forEach((k, i) => soft.sc.hit(k, 0.6 * wave(t, 0.8, i * 0.2)));
    // Mei's kaya toast
    kaya.sc.ball(ballOn(kaya, 'kaya', 0.28, 0.98)); kaya.sc.feet(P(t, end('kaya'), 0.6, linear));
    // Hamlet: eleven syllables, the extra one droops
    tobe.sc.ball(ballOn(tobe, 'tobe', 0.02, 0.98)); tobe.sc.feet(P(t, at('eleven'), 0.8, linear));
    const extra = tag(tobe, 10);
    if (t >= mid('trails', 0.2)) tr(extra.it, extra.cx, 18 * P(t, mid('trails', 0.2), 0.8, ease), 1, 14 * P(t, mid('trails', 0.2), 0.8, ease));
    else tr(extra.it, extra.cx, 0);
    op(plus1, P(t, mid('eleven', 0.25), 0.3, linear)); tr(plus1, extra.cx, 120);
    // Kevin pops out of the comma after "be"
    if (t >= at('kevin') - 0.05 && t < end('caesura') + 0.2) {
      const be = tag(tobe, 1), q = P(t, at('kevin') - 0.05, 0.6, pop);
      tr(kev, 600 + be.cx + be.w / 2, 320 + 30 + 90 + 120 * q, 0.45 * Math.max(0.05, q));
    }
    // winter: the first foot glows; witches: every foot
    win_.sc.feet(P(t, mid('winter', 0.3), 0.6, linear));
    win_.sc.ball(ballOn(win_, 'winter', 0.38, 0.72));
    dbl.sc.ball(ballOn(dbl, 'witches', 0.3, 0.62)); dbl.sc.feet(P(t, mid('witches', 0.62), 0.5, linear));
    // finger counting
    const fc = win(t, mid('lunch', 0.3), end('lunch') + 0.2, 0.2);
    op(fingers, fc); if (fc) { setText(fingT, String(Math.min(11, 1 + Math.floor((t - mid('lunch', 0.3)) * 4)))); tr(fingers, 600, 200 + Math.sin(t * 12) * 4 * AMP); }
    const rv = win(t, mid('three', 0.1), S.D + 1, 0.25);
    rating.set(2 + P(t, mid('three', 0.15), 0.5, linear), rv); tr(rating, 1030, 74);
  };
});
