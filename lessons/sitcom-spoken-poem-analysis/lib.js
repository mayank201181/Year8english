/* UNSEEN, UNHEARD OF (All the School's a Stage, Ep 10): guests and props for Unseen Poems & Spoken Analysis.
   Bundled after lib.js, kit.js, sitcom.js and english.js. Every top-level helper starts with `spa`, except `cast`. */

ENG_TINT.mike = ['#162234', '#2C4668'];
ENG_TINT.timer = ['#38141E', '#6E2438'];

function cast(parent, kind, o) {
  o = o || {};
  const S = { s: o.s, mood: o.mood };
  if (kind === 'mike') {
    let waves = null;
    return scMake(parent, Object.assign(S, { seed: 41, bob: 4, mood: o.mood || 'neutral',
      draw: g => {
        // feedback shockwaves (hidden unless squeak > 0)
        waves = G(g);
        [-1, 1].forEach(sd => {
          E('path', { d: `M${sd * 92},-70 Q${sd * 124},-35 ${sd * 92},0`, fill: 'none', stroke: '#FF6070', 'stroke-width': 6, 'stroke-linecap': 'round' }, waves);
          E('path', { d: `M${sd * 112},-88 Q${sd * 152},-35 ${sd * 112},18`, fill: 'none', stroke: '#FFE45C', 'stroke-width': 5, 'stroke-linecap': 'round' }, waves);
        });
        // chrome stand + tapered mic body
        E('rect', { x: -10, y: 74, width: 20, height: 96, fill: linGrad('#E6EEF4', '#7F8E9C', false), stroke: SC_INK, 'stroke-width': 4 }, g);
        E('ellipse', { cx: 0, cy: 168, rx: 64, ry: 14, fill: '#2B3642', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-42,10 L42,10 L30,86 L-30,86 Z', fill: linGrad('#3A4756', '#1C242E', false), stroke: SC_INK, 'stroke-width': 5, 'stroke-linejoin': 'round' }, g);
        E('rect', { x: -12, y: 34, width: 24, height: 32, rx: 6, fill: '#121820', stroke: '#7F8E9C', 'stroke-width': 2.5 }, g);
        E('circle', { cx: 0, cy: 44, r: 5, fill: '#56D69B' }, g);   // ON switch
        // silver mesh grille head
        E('circle', { cx: 0, cy: -42, r: 78, fill: ball('#E9F1F7', '#8B9AA8'), stroke: SC_INK, 'stroke-width': 5 }, g);
        let mesh = '';
        for (let a = -54; a <= 54; a += 27) mesh += `M-68,${-42 + a * 0.8} Q0,${-42 + a * 1.05} 68,${-42 + a * 0.8} `;
        E('path', { d: mesh, fill: 'none', stroke: '#6E7D8C', 'stroke-width': 2.5, opacity: 0.55 }, g);
        E('rect', { x: -82, y: -48, width: 164, height: 14, rx: 7, fill: '#5AB4E0', stroke: SC_INK, 'stroke-width': 3.5 }, g);
      },
      face: { x: 0, y: -42, eye: 16, gap: 48, mouthW: 34, mouthY: 34, lidCol: '#B8C6D4' },
      sweat: [[-82, -84], [84, -76], [-92, -20]],
      upd: (t, g, st) => {
        const sq = st.squeak || 0;
        op(waves, sq > 0.02 ? 0.5 + 0.5 * Math.abs(Math.sin(t * 28)) : 0);
        if (sq > 0.02) tr(waves, 0, 0, 1 + 0.1 * Math.sin(t * 35));
      } }));
  }
  if (kind === 'timer') {
    let hand = null;
    return scMake(parent, Object.assign(S, { seed: 43, bob: 3, mood: o.mood || 'neutral',
      draw: g => {
        // lanyard + whistle at bottom
        E('path', { d: 'M-36,84 L0,136 L36,84', fill: 'none', stroke: '#E8424F', 'stroke-width': 7 }, g);
        E('rect', { x: -16, y: 132, width: 32, height: 22, rx: 8, fill: '#E6EEF4', stroke: SC_INK, 'stroke-width': 3.5 }, g);
        // top crown + side clickers
        E('rect', { x: -16, y: -124, width: 32, height: 24, rx: 6, fill: '#E2B33C', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('circle', { cx: 0, cy: -136, r: 20, fill: 'none', stroke: '#E2B33C', 'stroke-width': 6 }, g);
        [-62, 62].forEach(x => E('rect', { x: x - 12, y: -102, width: 24, height: 18, rx: 5, fill: '#E8424F', stroke: SC_INK, 'stroke-width': 3.5, transform: `rotate(${x < 0 ? -32 : 32} ${x} -92)` }, g));
        // brass & crimson stopwatch body
        E('circle', { cx: 0, cy: -8, r: 96, fill: ball('#F2C94C', '#A87C14'), stroke: SC_INK, 'stroke-width': 5 }, g);
        E('circle', { cx: 0, cy: -8, r: 80, fill: '#FFFDF6', stroke: '#C62828', 'stroke-width': 6 }, g);
        for (let k = 0; k < 12; k++) {
          const a = k / 12 * TAU;
          E('line', { x1: Math.cos(a) * 66, y1: -8 + Math.sin(a) * 66, x2: Math.cos(a) * 74, y2: -8 + Math.sin(a) * 74, stroke: SC_INK, 'stroke-width': k % 3 === 0 ? 4 : 2 }, g);
        }
        hand = E('line', { x1: 0, y1: -8, x2: 0, y2: -64, stroke: '#E8424F', 'stroke-width': 4, 'stroke-linecap': 'round' }, g);
        // referee headband
        E('path', { d: 'M-86,-48 Q0,-70 86,-48 L82,-32 Q0,-54 -82,-32 Z', fill: '#1B2733', stroke: SC_INK, 'stroke-width': 3.5 }, g);
        T(g, 0, -44, 'PREP REF', { size: 16, weight: 800, anchor: 'middle', fill: '#FFE45C', ls: 1 });
      },
      face: { x: 0, y: -10, eye: 15, gap: 48, mouthW: 34, mouthY: 36, lidCol: '#F2D680' },
      upd: (t, g, st) => {
        const sp = st.fast ? 240 : 45;
        hand.setAttribute('transform', `rotate(${((t * sp) % 360).toFixed(1)} 0 -8)`);
      } }));
  }
  return engCast(parent, kind, o);
}

function spaRating(parent) {
  const g = G(parent);
  E('rect', { x: -150, y: -46, width: 300, height: 104, rx: 18, fill: 'rgba(14,24,40,0.92)', stroke: ENG.violet, 'stroke-width': 3 }, g);
  T(g, 0, -14, "MEI'S REVIEW", { size: 22, weight: 800, anchor: 'middle', fill: ENG.violet, ls: 2, font: FB });
  const st = engStars(g, { size: 40 }); tr(st, 0, 26);
  g.set = (n, p) => { op(g, p === undefined ? 1 : p); st.set(n); };
  g.set(1, 0);
  return g;
}

function spaZoomWeb(parent) {
  const g = G(parent);
  E('rect', { x: -370, y: -175, width: 740, height: 350, rx: 22, fill: 'rgba(14,20,38,0.95)', stroke: ENG.violet, 'stroke-width': 4 }, g);
  T(g, 0, -134, 'CONNOTATION ZOOM: ONE WORD, MANY LAYERS', { size: 24, weight: 800, anchor: 'middle', fill: ENG.gold });
  const spokes = [
    [-220, -52, 'imprisoned / trapped', '#FF6070'],
    [220, -52, 'owned by others', '#FF6070'],
    [-220, 76, 'put on display', '#FFB547'],
    [220, 76, 'protected? (surprising!)', '#5AB4E0'],
  ];
  const els = spokes.map(([x, y, txt, col]) => {
    const ln = E('line', { x1: 0, y1: 12, x2: x, y2: y, stroke: col, 'stroke-width': 4 }, g);
    const b = chip(g, txt, { size: 24, fill: '#1A1636', stroke: col, sw: 3, color: '#FFFFFF' }); tr(b, x, y);
    return { ln, b };
  });
  const ctr = chip(g, '"cage"', { size: 38, fill: '#FFE45C', stroke: SC_INK, sw: 4, color: SC_INK }); tr(ctr, 0, 12);
  g.set = p => els.forEach(({ ln, b }, i) => { const q = clamp(p * 4 - i); op(ln, q); op(b, q); });
  g.set(0);
  return g;
}

function spaCueCard(parent) {
  const g = G(parent);
  E('rect', { x: -360, y: -185, width: 720, height: 370, rx: 18, fill: '#FFFBEB', stroke: '#D97706', 'stroke-width': 4 }, g);
  T(g, -325, -138, 'THESIS: On the surface... → but really...', { size: 25, weight: 800, fill: '#92400E' });
  E('line', { x1: -330, y1: -116, x2: 330, y2: -116, stroke: '#D97706', 'stroke-width': 3 }, g);
  T(g, -320, -82, 'POINT', { size: 22, weight: 800, fill: SC_INK });
  T(g, -90, -82, 'SHORT QUOTE', { size: 22, weight: 800, fill: SC_INK });
  T(g, 165, -82, 'EFFECT', { size: 22, weight: 800, fill: SC_INK });
  const rows = [
    ['1 Language', '"only the name"', 'proved wrong by list', '#1E3A8A'],
    ['2 Structure', 'st.4 blackbird', 'silence → vast song', '#78350F'],
    ['3 Form', '"drew up there /"', 'halts like the train', '#6A1B9A'],
  ];
  const rEls = rows.map(([p, q, ef, col], i) => {
    const r = G(g), y = -36 + i * 50; tr(r, 0, y);
    T(r, -320, 0, p, { size: 23, weight: 700, fill: col, font: FB });
    T(r, -90, 0, q, { size: 23, weight: 700, fill: col, font: FB });
    T(r, 165, 0, ef, { size: 23, weight: 700, fill: col, font: FB });
    return r;
  });
  E('line', { x1: -330, y1: 96, x2: 330, y2: 96, stroke: '#D97706', 'stroke-width': 3 }, g);
  const foot = T(g, -320, 142, 'ME: personal line + why   |   END: back to thesis!', { size: 23, weight: 800, fill: '#14532D', font: FB });
  g.set = p => { rEls.forEach((r, i) => op(r, clamp(p * 4 - i))); op(foot, clamp(p * 4 - 3)); };
  g.set(0);
  return g;
}
