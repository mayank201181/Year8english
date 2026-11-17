/* READ THE QUESTION (All the School's a Stage, Ep 13): art shared by this episode's scenes.
   Every top-level helper starts with `cmp`, plus `cast(parent, kind, o)` falling back to `engCast`. */

ENG_TINT.qmark = ['#10263B', '#1F4B6E'];
ENG_TINT.sherlock = ['#281D12', '#523B24'];

function cast(parent, kind, o) {
  o = o || {};
  const S = { s: o.s, mood: o.mood };
  if (kind === 'qmark') {
    let tearG = null;
    const drops = [];
    const c = scMake(parent, Object.assign(S, { seed: 31, bob: 3.5, mood: o.mood || 'sad',
      draw: g => {
        // shadow + crisp A4 exam question sheet with dog-eared corner
        E('path', { d: 'M-88,-132 L62,-132 L96,-98 L96,138 L-88,138 Z', fill: '#000000', opacity: 0.25, transform: 'translate(8 10)' }, g);
        E('path', { d: 'M-92,-136 L58,-136 L92,-102 L92,134 L-92,134 Z', fill: '#FFFDF7', stroke: SC_INK, 'stroke-width': 4.5, 'stroke-linejoin': 'round' }, g);
        E('path', { d: 'M58,-136 L58,-102 L92,-102 Z', fill: '#E4DEC9', stroke: SC_INK, 'stroke-width': 3.5, 'stroke-linejoin': 'round' }, g);
        // red margin + ruled blue lines
        E('line', { x1: -62, y1: -134, x2: -62, y2: 132, stroke: '#E86B78', 'stroke-width': 2.5, opacity: 0.7 }, g);
        for (let k = 0; k < 7; k++) E('line', { x1: -88, y1: -86 + k * 32, x2: 88, y2: -86 + k * 32, stroke: '#C8E1F5', 'stroke-width': 2 }, g);
        // Q4 pill top-left + bold prompt squiggle + [4 marks] badge bottom-right
        E('rect', { x: -82, y: -124, width: 56, height: 32, rx: 8, fill: ENG.sky, stroke: SC_INK, 'stroke-width': 3 }, g);
        T(g, -54, -100, 'Q4', { size: 22, weight: 800, anchor: 'middle', fill: SC_INK });
        E('line', { x1: -16, y1: -108, x2: 46, y2: -108, stroke: SC_INK, 'stroke-width': 5, 'stroke-linecap': 'round' }, g);
        const bdg = G(g); tr(bdg, 34, 102);
        E('rect', { x: -52, y: -20, width: 104, height: 40, rx: 10, fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 3 }, bdg);
        T(bdg, 0, 8, '[4 marks]', { size: 20, weight: 800, anchor: 'middle', fill: SC_INK, font: FB });
        // little paper arms
        E('path', { d: 'M-92,16 Q-122,36 -114,68 M92,16 Q122,36 114,68', fill: 'none', stroke: SC_INK, 'stroke-width': 7, 'stroke-linecap': 'round' }, g);
        tearG = G(g);
        [-30, 30, -36, 36].forEach((x, i) => {
          const d = E('path', { d: 'M0,-10 Q8,2 0,9 Q-8,2 0,-10 Z', fill: '#7FD3FF', stroke: '#2E7DD8', 'stroke-width': 2 }, tearG);
          drops.push({ d, x, ph: i * 0.27 });
        });
      },
      face: { x: 4, y: -18, eye: 15, gap: 52, mouthW: 36, mouthY: 38, lidCol: '#EDE5CE' },
      sweat: [[-78, -80], [78, -72]],
      upd: (t, g, st) => {
        const trs = st.tears || 0;
        if (!tearG) return;
        op(tearG, trs);
        if (trs > 0) drops.forEach(({ d, x, ph }) => {
          const f = ((t * 1.35) + ph) % 1;
          op(d, trs * (1 - f));
          tr(d, x, -4 + f * 72);
        });
      } }));
    return c;
  }
  if (kind === 'sherlock') {
    let glint = null;
    const c = scMake(parent, Object.assign(S, { seed: 37, bob: 2.5, mood: o.mood || 'smug',
      draw: g => {
        // mahogany handle at the bottom
        E('rect', { x: -16, y: 78, width: 32, height: 24, rx: 4, fill: '#D49A2A', stroke: SC_INK, 'stroke-width': 3.5 }, g);
        E('rect', { x: -20, y: 98, width: 40, height: 96, rx: 14, fill: linGrad('#7A3E1D', '#4A220E', false), stroke: SC_INK, 'stroke-width': 4 }, g);
        E('line', { x1: -8, y1: 112, x2: -8, y2: 180, stroke: '#B06A3B', 'stroke-width': 4, 'stroke-linecap': 'round', opacity: 0.6 }, g);
        // brass magnifying rim + pale glass lens
        E('circle', { cx: 0, cy: -12, r: 96, fill: ball('#F2CF63', '#9C7214'), stroke: SC_INK, 'stroke-width': 5 }, g);
        E('circle', { cx: 0, cy: -12, r: 78, fill: linGrad('#E3F6FF', '#BDE3F7', true), stroke: '#7A5A12', 'stroke-width': 3.5 }, g);
        glint = E('path', { d: 'M-52,-58 Q-24,-78 10,-68', fill: 'none', stroke: '#FFFFFF', 'stroke-width': 9, 'stroke-linecap': 'round', opacity: 0.75 }, g);
        // plaid deerstalker cap on top
        const cap = G(g); tr(cap, 0, -98);
        E('path', { d: 'M-86,10 Q-52,-8 0,-6 Q52,-8 86,10 Q56,20 0,18 Q-56,20 -86,10 Z', fill: '#8C6D46', stroke: SC_INK, 'stroke-width': 3.5 }, cap);
        E('path', { d: 'M-58,8 Q-56,-48 0,-50 Q56,-48 58,8 Z', fill: '#A68458', stroke: SC_INK, 'stroke-width': 4 }, cap);
        E('path', { d: 'M-38,-8 L38,-8 M-24,-28 L24,-28 M-20,-46 L-24,8 M20,-46 L24,8', stroke: '#5C4326', 'stroke-width': 2.5, opacity: 0.65 }, cap);
        E('path', { d: 'M-10,-52 Q0,-62 10,-52', fill: 'none', stroke: SC_INK, 'stroke-width': 4, 'stroke-linecap': 'round' }, cap);
      },
      face: { x: 0, y: -18, eye: 15, gap: 48, mouthW: 32, mouthY: 36, lidCol: '#9CCBE6', iris: '#1E3A5A' },
      upd: (t, g, st) => {
        if (glint) attr(glint, 'opacity', 0.55 + 0.35 * (st.glint || 0) + 0.15 * Math.sin(t * 3));
      } }));
    return c;
  }
  return engCast(parent, kind, o);
}

function cmpRating(parent) {
  const g = G(parent);
  E('rect', { x: -150, y: -46, width: 300, height: 104, rx: 18, fill: 'rgba(14,24,40,0.92)', stroke: ENG.sky, 'stroke-width': 3 }, g);
  T(g, 0, -14, "MEI'S REVIEW", { size: 22, weight: 800, anchor: 'middle', fill: ENG.sky, ls: 2, font: FB });
  const st = engStars(g, { size: 40 }); tr(st, 0, 26);
  g.set = (n, p) => { op(g, p === undefined ? 1 : p); st.set(n); };
  g.set(1, 0);
  return g;
}

function cmpQuestionAnatomy(parent) {
  const g = G(parent);
  E('rect', { x: -490, y: -84, width: 980, height: 168, rx: 22, fill: '#FFFDF7', stroke: ENG.sky, 'stroke-width': 4 }, g);
  const zones = [
    { x: -460, w: 230, col: '#FFE45C', tag: '1 WHERE', sub: 'lines 10–18' },
    { x: -216, w: 468, col: '#FF9F43', tag: '2 COMMAND + FOCUS', sub: 'explain in your own words...' },
    { x: 266,  w: 196, col: '#56D69B', tag: '3 MARKS', sub: '[4 marks]' },
  ];
  const boxes = zones.map(z => {
    const b = G(g);
    const hl = E('rect', { x: z.x, y: -32, width: z.w, height: 58, rx: 12, fill: z.col, opacity: 0 }, b);
    const lb = chip(b, z.tag, { size: 22, fill: z.col, color: SC_INK, stroke: SC_INK, sw: 2.5 });
    tr(lb, z.x + z.w / 2, -62);
    op(lb, 0);
    return { hl, lb };
  });
  T(g, -446, 6, 'From lines 10–18,', { size: 31, weight: 800, fill: SC_INK });
  T(g, -196, 6, 'explain in your own words why...', { size: 31, weight: 700, fill: SC_INK });
  T(g, 364, 6, '[4 marks]', { size: 31, weight: 800, anchor: 'middle', fill: '#1E6E46' });
  T(g, 0, 62, 'Read ALL THREE before your pen touches the page.', { size: 25, weight: 700, anchor: 'middle', fill: '#4A5B6C', font: FB });
  g.hl = (k, p) => { p = clamp(p); op(boxes[k].hl, 0.55 * p); op(boxes[k].lb, p); };
  return g;
}

function cmpFrame(parent, w, h, title, sub, col) {
  const g = G(parent);
  col = col || ENG.sky;
  E('rect', { x: -w / 2, y: -h / 2, width: w, height: h, rx: 18, fill: 'rgba(12,22,38,0.94)', stroke: col, 'stroke-width': 4 }, g);
  // viewfinder corner brackets
  const bx = w / 2 - 18, by = h / 2 - 18, L = 22;
  let cr = '';
  [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([sx, sy]) => {
    cr += `M${sx * bx},${sy * (by - L)} L${sx * bx},${sy * by} L${sx * (bx - L)},${sy * by} `;
  });
  E('path', { d: cr, fill: 'none', stroke: '#FFFFFF', 'stroke-width': 3.5, opacity: 0.7 }, g);
  T(g, 0, -h / 2 + 38, title, { size: 26, weight: 800, anchor: 'middle', fill: col, ls: 1 });
  if (sub) String(sub).split('\n').forEach((ln, i) => T(g, 0, 8 + i * 32, ln, { size: 25, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB }));
  return g;
}

function cmpScale(parent) {
  const g = G(parent);
  E('rect', { x: -90, y: 120, width: 180, height: 18, rx: 8, fill: ENG.gold, stroke: SC_INK, 'stroke-width': 3 }, g);
  E('rect', { x: -10, y: -80, width: 20, height: 204, rx: 6, fill: ENG.gold, stroke: SC_INK, 'stroke-width': 3 }, g);
  const beam = G(g); tr(beam, 0, -70);
  E('rect', { x: -230, y: -7, width: 460, height: 14, rx: 7, fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 3 }, beam);
  E('circle', { r: 14, fill: ENG.sky, stroke: SC_INK, 'stroke-width': 3 }, beam);
  const pan = (x, label, col) => {
    const p = G(beam); tr(p, x, 0);
    E('path', { d: 'M0,0 L-58,86 M0,0 L58,86', stroke: '#C9D6E2', 'stroke-width': 3 }, p);
    E('path', { d: 'M-72,86 L72,86 L56,116 L-56,116 Z', fill: col, stroke: SC_INK, 'stroke-width': 3.5 }, p);
    T(p, 0, 152, label, { size: 24, weight: 800, anchor: 'middle', fill: '#FFFFFF', font: FB });
    return p;
  };
  const pL = pan(-195, 'COUNTER-VIEW', '#FF9F43');
  const pR = pan(195, 'EVIDENCE FOR', '#56D69B');
  g.set = deg => {
    tr(beam, 0, -70, 1, deg);
    tr(pL, -195, 0, 1, -deg);
    tr(pR, 195, 0, 1, -deg);
  };
  g.set(0);
  return g;
}
