/* Scene 0: Cold open (no card). Classroom: Mr H announces Shakespeare, Mei gives him one star on her phone ->
   the library at 4 p.m.: lights flicker, "ONE. STAR?", Will rises beside his own bust -> the aircon
   confessional -> the deal (five stars by Friday) -> "thou?" -> title card with the cast. */
scene('cold', S => {
  const { at, end, mid } = S;
  const AMP = S.reduce ? 0.3 : 1;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.9)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  /* sets */
  const room = d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(6); });
  const lib = d.add('lib', engLibrary(d.bg), (t, g) => g.upd(t, t > at('onestar') - 0.2 && t < end('who') ? 1 : 0.15));
  const title = d.add('title', engTitle(d.bg, 'Episode 1: One Star'), (t, g) => g.set(clamp((t - at('title')) / 2.2), t));

  /* cast */
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin');

  /* board writing */
  const bw = G(d.bg);
  const boardT = T(bw, 660, 260, 'SHAKESPEARE', { size: 72, weight: 800, anchor: 'middle', fill: '#C62828' });
  const boardU = E('line', { x1: 450, y1: 285, x2: 450, y2: 285, stroke: '#2E7DD8', 'stroke-width': 6, 'stroke-linecap': 'round' }, bw);

  /* labels and props */
  const c1 = pill('Banyan Hill International School', { size: 34 });
  const c2 = pill('Singapore', { stroke: ENG.rose });
  const c3 = pill('Year 8 · Tuesday · Period 3');
  const cPlan = pill('a documentary about how children learn English', { size: 30, stroke: C.muted });
  const planX = strike(cPlan, -cPlan.w / 2 + 16, 0, cPlan.w / 2 - 16, C.bad);
  const why = ['400 years old', 'boring', 'nobody talks like that'].map(s => pill(s, { stroke: C.bad, color: '#FFB3BA' }));
  const r1 = engReview(d.fg, { stars: 4, text: 'Canteen curry puff. Crispy.', by: 'Mei, 12', w: 470 });
  const r2 = engReview(d.fg, { stars: 1, text: 'Shakespeare. Boring. Nobody talks like that.', by: 'Mei, 12', w: 470 });
  const c4 = pill('4 p.m. · the library', { stroke: ENG.violet });
  const big = G(d.fg), bigT = T(big, 0, 0, 'ONE. STAR?', { size: 120, weight: 800, anchor: 'middle', fill: '#CFE6FF' });
  engOutline(bigT, '#1E2A5A', 14);
  const books = G(d.fg);
  tr(engBook(books, 'ROMEO\nAND\nJULIET', '#7A1E2E', 0.9), -110, 0);
  tr(engBook(books, 'HAMLET', '#1E2A5A', 0.9), 110, 0);
  const ac = G(d.fg);
  E('rect', { x: -130, y: -42, width: 260, height: 84, rx: 18, fill: '#FAFCFD', stroke: '#9AA6B2', 'stroke-width': 4 }, ac);
  E('rect', { x: -118, y: 18, width: 236, height: 12, rx: 6, fill: '#DCE4EA' }, ac);
  E('circle', { cx: 104, cy: -18, r: 6, fill: '#56D69B' }, ac);
  const cold = []; for (let k = 0; k < 5; k++) cold.push(E('path', { d: '', fill: 'none', stroke: '#7FD3FF', 'stroke-width': 5, 'stroke-linecap': 'round' }, ac));
  const cAir = pill('since the library got air-conditioning', { size: 28, stroke: '#7FD3FF', color: '#BDE7FF' });
  const rating = osRating(d.fg);
  const goal = pill('target: ★★★★★ by Friday', { size: 28, stroke: ENG.gold, color: '#FFE6A8' });
  const thouC = engTech(d.fg, 'THOU?', { kind: 'grammar', size: 44 });

  /* shots */
  d.shot(0, { set: 'room', cam: [1, 1.06, 640, 300] })
    .shot(at('term') - 0.05, { set: 'room', cast: { mrh: { x: 220, y: 470, s: 1.1, mood: 'deadpan', mug: 1 } } })
    .shot(at('boring') - 0.05, { set: 'room', cam: [1.05, 1.12, 700, 420], cast: { mei: { x: 700, y: 500, s: 1.3, mood: 'annoyed' } } })
    .shot(at('library') - 0.05, { set: 'lib', cam: [1, 1.12, 900, 420] })
    .shot(at('who') - 0.05, { set: 'lib', cast: { mei: { x: 420, y: 480, s: 1.15, mood: 'shock' } } })
    .shot(at('iam') - 0.05, { set: 'lib', cast: { mei: { x: 300, y: 500, s: 1.05, mood: 'shock' }, will: { x: 820, y: 400, s: 1.0, mood: 'annoyed' } } })
    .shot(at('aircon') - 0.05, { conf: 'will', cast: { will: { x: 330, y: 410, s: 1.25, mood: 'happy' } } })
    .shot(at('deal') - 0.05, { set: 'lib', cast: { mei: { x: 300, y: 500, s: 1.05, mood: 'deadpan' }, will: { x: 800, y: 400, s: 1.0, mood: 'smug', glow: 0.5 } } })
    .shot(at('title') - 0.05, { set: 'title', cast: {
      mei: { x: 240, y: 640, s: 0.42, mood: 'happy' }, mrh: { x: 420, y: 640, s: 0.42, mood: 'deadpan' }, will: { x: 600, y: 630, s: 0.36, mood: 'smug' },
      nib: { x: 780, y: 640, s: 0.38, mood: 'smug' }, kevin: { x: 950, y: 640, s: 0.38, mood: 'happy' } } });

  d.lower('mrh', at('term') + 0.2, 3.0);
  d.lower('mei', at('mei') + 0.1, 3.2);
  d.lower('will', at('iam') + 0.6, 3.6);
  d.mood('mrh', mid('term', 0.6), 'deadpan');
  d.mood('mei', mid('mei', 0.1), 'smug').mood('mei', at('review'), 'happy').mood('mei', mid('review', 0.6), 'deadpan');
  d.x('mei', at('review') - 0.1, { phone: 1 }).x('mei', end('review') + 0.3, { phone: 0 });
  d.mood('mei', at('who'), 'shock').mood('mei', at('ghost'), 'deadpan').mood('mei', at('thou'), 'annoyed');
  d.mood('will', mid('iam', 0.5), 'neutral').mood('will', mid('iam', 0.85), 'sad').mood('will', at('feelings'), 'sad');
  d.x('will', at('iam'), { glow: 1 }).x('will', at('feelings'), { glow: 0.2 });
  d.mood('will', at('later'), 'smug');
  d.look('will', at('later'), 0);

  d.pop(c1, mid('school', 0.05), end('school') + 0.4, 600, 470);
  d.pop(c2, mid('school', 0.38), end('school') + 0.4, 600, 540);
  d.pop(c3, mid('school', 0.62), end('school') + 0.4, 600, 610);
  d.pop(cPlan, at('plan') + 0.1, end('plan') + 0.3, 600, 560);
  why.forEach((c, i) => d.pop(c, mid('boring', 0.2 + i * 0.27), end('mei') + 0.2, 1000, 260 + i * 80));
  d.pop(r1, mid('review', 0.05), end('review') + 0.5, 920, 230);
  d.pop(r2, mid('review', 0.5), end('review') + 0.5, 920, 520);
  d.pop(c4, at('library') + 0.1, end('library') + 0.3, 600, 560);
  d.pop(books, mid('iam', 0.25), mid('iam', 0.7), 400, 220);
  d.pop(ac, at('aircon') + 0.1, end('stayed') + 0.2, 880, 260);
  d.pop(cAir, mid('aircon', 0.3), end('aircon') + 0.2, 820, 560);
  d.pop(goal, mid('deal', 0.7), end('later') + 0.2, 800, 170);
  d.pop(thouC, mid('thou', 0.5), end('later'), 300, 220);
  const blackout = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#000000' }, d.hud);

  return t => {
    d.upd(t);
    op(blackout, 1 - P(t, 0, 0.5, linear));
    // board: SHAKESPEARE writes itself on "this term"
    const bp = P(t, mid('term', 0.45), 0.6, linear);
    op(bw, t < at('library') ? 1 : 0);
    op(boardT, bp); attr(boardU, 'x2', 450 + 420 * P(t, mid('term', 0.75), 0.4, ease));
    planX.set(P(t, mid('plan', 0.62), 0.35, ease));
    // ONE. STAR? wobbles in glowing letters
    const bs = win(t, at('onestar') - 0.05, at('who') + 0.2, 0.15);
    op(big, bs);
    if (bs) tr(big, 600 + Math.sin(t * 30) * 6 * AMP, 380 + Math.cos(t * 27) * 4 * AMP, 0.8 + 0.25 * P(t, at('onestar'), 0.5, pop), Math.sin(t * 9) * 3 * AMP);
    // the aircon blows
    cold.forEach((e, k) => { const f = (t * 0.6 + k / 5) % 1, x = -96 + k * 48; e.setAttribute('d', `M${x},${48 + f * 60} q10,14 0,28 q-10,14 0,28`); e.style.opacity = (0.8 * Math.sin(f * Math.PI)).toFixed(3); });
    // Mei's review badge with the target
    const rv = win(t, mid('deal', 0.55), end('later') + 0.3, 0.25);
    rating.set(1, rv); tr(rating, 1030, 74);
    // Will rises out of the floor on "I am William Shakespeare"
    if (t >= at('iam') - 0.05 && t < at('aircon')) {
      const rise = P(t, at('iam') - 0.05, 1.0, easeOut);
      tr(will, 820, 400 + 260 * (1 - rise), 1.0);
      op(will, clamp(rise * 1.5));
    }
  };
});
