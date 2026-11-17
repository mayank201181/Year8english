/* UNRELIABLE (All the School's a Stage, Ep 11): guests and props for Reading the Novel.
   Bundled after lib.js, kit.js, sitcom.js and english.js. Every top-level helper starts with `nov`, except `cast`. */

ENG_TINT.shady = ['#281E14', '#523B24'];
ENG_TINT.omni = ['#241C3B', '#4A3878'];

function cast(parent, kind, o) {
  o = o || {};
  const S = { s: o.s, mood: o.mood };
  if (kind === 'shady') {
    return scMake(parent, Object.assign(S, { seed: 47, bob: 2.5, mood: o.mood || 'smug',
      draw: g => {
        // popped-collar tan trenchcoat
        E('path', { d: 'M-108,140 Q-102,52 -42,42 L42,42 Q102,52 108,140 Z', fill: linGrad('#C9A06A', '#8C6638', true), stroke: SC_INK, 'stroke-width': 5 }, g);
        E('path', { d: 'M-58,56 L-76,-12 L-30,36 Z M58,56 L76,-12 L30,36 Z', fill: '#B58B54', stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, g);   // popped collar
        E('path', { d: 'M-24,44 L0,96 L24,44 Z', fill: '#2B3642', stroke: SC_INK, 'stroke-width': 3 }, g);
        E('path', { d: 'M-8,52 L8,52 L12,110 L0,124 L-12,110 Z', fill: '#B8335A', stroke: SC_INK, 'stroke-width': 2.5 }, g);
        [-24, 24].forEach(x => { E('circle', { cx: x, cy: 96, r: 6, fill: '#5A3A1A' }, g); E('circle', { cx: x, cy: 124, r: 6, fill: '#5A3A1A' }, g); });
        // head + shadow under fedora
        E('ellipse', { cx: 0, cy: -28, rx: 68, ry: 74, fill: '#E8BC96', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-64,-50 Q0,-34 64,-50 L62,-78 L-62,-78 Z', fill: 'rgba(20,14,24,0.32)' }, g);
        // tilted noir fedora
        const hat = G(g); tr(hat, 2, -82, 1, -7);
        E('ellipse', { cx: 0, cy: 12, rx: 108, ry: 20, fill: '#6E4E2E', stroke: SC_INK, 'stroke-width': 4.5 }, hat);
        E('path', { d: 'M-66,10 L-52,-46 Q0,-60 52,-46 L66,10 Z', fill: '#85603A', stroke: SC_INK, 'stroke-width': 4.5, 'stroke-linejoin': 'round' }, hat);
        E('rect', { x: -58, y: -6, width: 116, height: 14, fill: '#2B1B12', stroke: SC_INK, 'stroke-width': 3 }, hat);
      },
      face: { x: 0, y: -18, eye: 14, gap: 48, mouthW: 36, mouthY: 34, lidCol: '#C99B74' },
      sweat: [[-76, -34], [78, -28]] }));
  }
  if (kind === 'omni') {
    let cloud = null, bins = null;
    return scMake(parent, Object.assign(S, { seed: 53, bob: 7, mood: o.mood || 'smug',
      draw: g => {
        E('ellipse', { cx: 0, cy: -10, rx: 165, ry: 185, fill: glow('#FFE6A8'), opacity: 0.42 }, g);
        // lavender cape & dress above the cloud
        E('path', { d: 'M-82,88 Q-78,24 -36,16 L36,16 Q78,24 82,88 Z', fill: linGrad('#9C7CFF', '#5E3FA8', true), stroke: SC_INK, 'stroke-width': 4 }, g);
        E('ellipse', { cx: 0, cy: -42, rx: 64, ry: 70, fill: '#F3CDB0', stroke: SC_INK, 'stroke-width': 4 }, g);
        // silver-violet updo hair + star tiara
        E('path', { d: 'M-66,-44 Q-72,-118 0,-122 Q72,-118 66,-44 Q48,-82 0,-78 Q-48,-82 -66,-44 Z', fill: '#E2D9F8', stroke: SC_INK, 'stroke-width': 3.5 }, g);
        E('circle', { cx: 0, cy: -124, r: 28, fill: '#E2D9F8', stroke: SC_INK, 'stroke-width': 3.5 }, g);
        E('path', { d: 'M-34,-94 L0,-118 L34,-94 Z', fill: '#FFD23F', stroke: SC_INK, 'stroke-width': 3 }, g);
        // fluffy golden-rimmed cloud base
        cloud = G(g); tr(cloud, 0, 98);
        [[-86, 8, 44], [-40, -8, 52], [18, -10, 56], [78, 6, 46], [-10, 18, 58]].forEach(([x, y, r]) =>
          E('circle', { cx: x, cy: y, r, fill: '#FFFFFF', stroke: '#E2B33C', 'stroke-width': 4 }, cloud));
        E('ellipse', { cx: 0, cy: 10, rx: 112, ry: 34, fill: '#FFFFFF' }, cloud);
        T(cloud, 0, 18, 'ALL-KNOWING', { size: 19, weight: 800, anchor: 'middle', fill: '#6A48D8', ls: 2 });
        // brass opera binoculars
        bins = G(g); tr(bins, 92, 18);
        [-18, 18].forEach(x => {
          E('rect', { x: x - 14, y: -22, width: 28, height: 44, rx: 8, fill: '#E2B33C', stroke: SC_INK, 'stroke-width': 3.5 }, bins);
          E('circle', { cx: x, cy: -18, r: 10, fill: '#7FD3FF', stroke: SC_INK, 'stroke-width': 2.5 }, bins);
        });
        E('rect', { x: -8, y: -6, width: 16, height: 10, fill: SC_INK }, bins);
      },
      face: { x: 0, y: -36, eye: 15, gap: 48, mouthW: 32, mouthY: 32, lidCol: '#E0B596' },
      upd: t => { tr(cloud, Math.sin(t * 2) * 4, 98); tr(bins, 92, 18 + Math.sin(t * 3) * 4, 1, -8); } }));
  }
  return engCast(parent, kind, o);
}

function novRating(parent) {
  const g = G(parent);
  E('rect', { x: -150, y: -46, width: 300, height: 104, rx: 18, fill: 'rgba(14,24,40,0.92)', stroke: ENG.amber, 'stroke-width': 3 }, g);
  T(g, 0, -14, "MEI'S REVIEW", { size: 22, weight: 800, anchor: 'middle', fill: ENG.amber, ls: 2, font: FB });
  const st = engStars(g, { size: 40 }); tr(st, 0, 26);
  g.set = (n, p) => { op(g, p === undefined ? 1 : p); st.set(n); };
  g.set(1, 0);
  return g;
}

function novThought(parent, text, w) {
  const g = G(parent), bw = w || 340;
  E('ellipse', { cx: 0, cy: 0, rx: bw / 2, ry: 56, fill: '#FFFFFF', stroke: '#6A48D8', 'stroke-width': 4 }, g);
  E('circle', { cx: -bw * 0.25, cy: 68, r: 11, fill: '#FFFFFF', stroke: '#6A48D8', 'stroke-width': 3.5 }, g);
  E('circle', { cx: -bw * 0.32, cy: 90, r: 6, fill: '#FFFFFF', stroke: '#6A48D8', 'stroke-width': 3 }, g);
  String(text).split('\n').forEach((l, i, a) => T(g, 0, 8 + (i - (a.length - 1) / 2) * 28, l, { size: 23, weight: 700, anchor: 'middle', fill: SC_INK, font: FB }));
  return g;
}

function novPyramid(parent) {
  const g = G(parent);
  E('rect', { x: -450, y: -185, width: 900, height: 370, rx: 24, fill: 'rgba(14,20,36,0.95)', stroke: ENG.amber, 'stroke-width': 4 }, g);
  T(g, 0, -142, "FREYTAG'S PYRAMID: EVERY ROCKET CLIMBS, FALLS, RETURNS", { size: 25, weight: 800, anchor: 'middle', fill: ENG.amber });
  const pts = [[-360, 110], [-200, 110], [0, -78], [200, 56], [360, 56]];
  const path = E('path', { d: 'M' + pts.map(p => p.join(',')).join(' L'), fill: 'none', stroke: ENG.amber, 'stroke-width': 8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', pathLength: 1, 'stroke-dasharray': '1 1' }, g);
  const labels = [
    [-280, 148, '1. Exposition', '#5AB4E0'],
    [-135, 8, '2. Rising action', '#FFB547'],
    [0, -104, '3. CLIMAX (peak!)', '#FF6070'],
    [150, -6, '4. Falling action', '#B58CFF'],
    [285, 98, '5. Resolution', '#56D69B'],
  ];
  const lEls = labels.map(([x, y, txt, col], i) => {
    const b = G(g);
    if (i === 2) E('circle', { cx: 0, cy: -78, r: 13, fill: '#FF6070', stroke: '#FFFFFF', 'stroke-width': 3 }, b);
    T(b, x, y, txt, { size: 24, weight: 800, anchor: 'middle', fill: col });
    return b;
  });
  g.set = p => {
    path.setAttribute('stroke-dashoffset', (1 - clamp(p)).toFixed(3));
    lEls.forEach((b, i) => op(b, clamp(p * 5 - i)));
  };
  g.set(0);
  return g;
}
