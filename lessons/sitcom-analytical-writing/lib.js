/* CLIMBING THE PEEL LADDER (All the School's a Stage, Ep 15): art shared by this episode's scenes.
   Every top-level helper starts with `anl`, plus `cast(parent, kind, o)` falling back to `engCast`. */

ENG_TINT.quotey = ['#2E1B0E', '#623B1C'];
ENG_TINT.zoom = ['#0E2433', '#1E4C6B'];

function cast(parent, kind, o) {
  o = o || {};
  const S = { s: o.s, mood: o.mood };
  if (kind === 'quotey') {
    let band = null, innerG = null;
    const c = scMake(parent, Object.assign(S, { seed: 47, bob: 4, mood: o.mood || 'happy',
      draw: g => {
        innerG = g;
        // velvet arch holding the pair of golden quotation marks together
        E('path', { d: 'M-82,-20 Q0,-128 82,-20 Q56,64 0,72 Q-56,64 -82,-20 Z', fill: linGrad('#5E1E36', '#381020', true), stroke: SC_INK, 'stroke-width': 4 }, g);
        // left golden “ mark (two curled gold droplets)
        [-108, -68].forEach(x => {
          const m = G(g); tr(m, x, -42);
          E('path', { d: 'M-16,32 Q-26,6 -6,-10 Q6,-18 14,-6 C20,4 14,22 0,22 C-4,22 -6,32 -16,32 Z', fill: ball('#FFE45C', '#B88414'), stroke: SC_INK, 'stroke-width': 3.5 }, m);
        });
        // right golden ” mark
        [68, 108].forEach(x => {
          const m = G(g); tr(m, x, -42);
          E('path', { d: 'M16,-12 Q26,14 6,30 Q-6,38 -14,26 C-20,16 -14,-2 0,-2 C4,-2 6,-12 16,-12 Z', fill: ball('#FFE45C', '#B88414'), stroke: SC_INK, 'stroke-width': 3.5 }, m);
        });
        // golden tiara trim + arms
        E('path', { d: 'M-46,-78 L-24,-98 L0,-80 L24,-98 L46,-78', fill: 'none', stroke: '#FFE45C', 'stroke-width': 5, 'stroke-linejoin': 'round' }, g);
        E('path', { d: 'M-78,24 Q-112,50 -102,82 M78,24 Q112,50 102,82', fill: 'none', stroke: '#FFE45C', 'stroke-width': 8, 'stroke-linecap': 'round' }, g);
        // sticking plaster when "dropped"
        band = G(g); tr(band, 36, -58, 1, 18);
        E('rect', { x: -24, y: -9, width: 48, height: 18, rx: 6, fill: '#F5C6A5', stroke: SC_INK, 'stroke-width': 2.5 }, band);
        op(band, 0);
      },
      face: { x: 0, y: -14, eye: 14, gap: 46, mouthW: 32, mouthY: 36, lidCol: '#7A2A48' },
      sweat: [[-92, -82], [92, -76]],
      upd: (t, g, st) => {
        const dr = st.drop || 0;
        if (band) op(band, dr);
        if (dr > 0.05) g.setAttribute('transform', `translate(0 ${(dr * 36).toFixed(1)}) rotate(${(-24 * dr).toFixed(1)})`);
      } }));
    return c;
  }
  if (kind === 'zoom') {
    let ret = null;
    const c = scMake(parent, Object.assign(S, { seed: 53, bob: 2.5, mood: o.mood || 'smug',
      draw: g => {
        // brushed silver jeweller's loupe foldable teardrop casing (swung to the right)
        E('path', { d: 'M20,-40 C110,-62 152,-12 138,42 C126,88 64,96 14,52 Z', fill: linGrad('#DCE5EE', '#8B9AA8', true), stroke: SC_INK, 'stroke-width': 4.5 }, g);
        E('circle', { cx: 112, cy: 20, r: 10, fill: '#5B6B7A', stroke: SC_INK, 'stroke-width': 3 }, g);
        // main precision brass & knurled steel lens ring
        E('circle', { cx: 0, cy: -10, r: 94, fill: ball('#546678', '#253240'), stroke: SC_INK, 'stroke-width': 5 }, g);
        E('circle', { cx: 0, cy: -10, r: 80, fill: ball('#DDEBFA', '#9BC5E6'), stroke: '#E2B33C', 'stroke-width': 5 }, g);
        // rotating cyan reticle crosshair inside the lens
        ret = G(g); tr(ret, 0, -10);
        E('circle', { r: 64, fill: 'none', stroke: '#2E7DD8', 'stroke-width': 2.5, 'stroke-dasharray': '12 8', opacity: 0.65 }, ret);
        [-68, 52].forEach(k => {
          E('line', { x1: k, y1: 0, x2: k + 16, y2: 0, stroke: '#2E7DD8', 'stroke-width': 3, opacity: 0.7 }, ret);
          E('line', { x1: 0, y1: k, x2: 0, y2: k + 16, stroke: '#2E7DD8', 'stroke-width': 3, opacity: 0.7 }, ret);
        });
        T(g, 0, 108, '10× WORD LOUPE', { size: 18, weight: 800, anchor: 'middle', fill: ENG.sky, font: FB });
      },
      face: { x: 0, y: -16, eye: 15, gap: 48, mouthW: 32, mouthY: 36, lidCol: '#8AB8DC', iris: '#12263A' },
      upd: (t, g, st) => {
        const fc = st.focus || 0;
        if (ret) tr(ret, 0, -10, 1 - 0.08 * fc, (t * (18 + 60 * fc)) % 360);
      } }));
    return c;
  }
  return engCast(parent, kind, o);
}

function anlRating(parent) {
  const g = G(parent);
  E('rect', { x: -150, y: -46, width: 300, height: 104, rx: 18, fill: 'rgba(14,24,40,0.92)', stroke: ENG.sky, 'stroke-width': 3 }, g);
  T(g, 0, -14, "MEI'S REVIEW", { size: 22, weight: 800, anchor: 'middle', fill: ENG.sky, ls: 2, font: FB });
  const st = engStars(g, { size: 40 }); tr(st, 0, 26);
  g.set = (n, p) => { op(g, p === undefined ? 1 : p); st.set(n); };
  g.set(1, 0);
  return g;
}

function anlLevels(parent) {
  const g = G(parent);
  const steps = [
    ['LEVEL 1 · RETELLS', '"Caliban says it\'s his." (plot only)', '#FF6070', 76],
    ['LEVEL 2 · EXPLAINS', '"He thinks Prospero stole it." (no method)', '#FFB547', 124],
    ['LEVEL 3 · ANALYSES', 'Possessive "**mine**" = fierce, defiant claim', '#5AB4E0', 176],
    ['LEVEL 4 · PERCEPTIVE', '**1611** New World ships → challenges Prospero\'s right', '#56D69B', 228],
  ];
  const els = steps.map(([hd, bd, col, h], i) => {
    const s = G(g), x = -345 + i * 230, y = 110 - h;
    E('rect', { x: x - 106, y, width: 212, height: h, rx: 14, fill: 'rgba(12,22,38,0.95)', stroke: col, 'stroke-width': 4 }, s);
    T(s, x, y + 32, hd, { size: 19, weight: 800, anchor: 'middle', fill: col, font: FB });
    engWrap(bd, 20, 188, FB, 700).forEach((ln, k) => T(s, x, y + 62 + k * 25, ln, { size: 20, weight: 700, anchor: 'middle', fill: '#FFFFFF', boldFill: col, font: FB }));
    return s;
  });
  g.set = n => els.forEach((s, i) => op(s, clamp(n - i)));
  g.set(0);
  return g;
}

function anlWeb(parent) {
  const g = G(parent);
  const nodes = [
    [-250, -90, 'contempt', '#5AB4E0'],
    [250, -90, 'mockery', '#5AB4E0'],
    [-280, 10, 'arrogance', '#FFB547'],
    [280, 10, 'cruelty', '#F06A8A'],
    [-210, 105, 'hard "c" barked', '#B58CFF'],
    [210, 105, 'heartless power', '#56D69B'],
  ];
  const spokes = nodes.map(([nx, ny, tx, col]) => {
    const sp = G(g);
    E('line', { x1: 0, y1: 0, x2: nx, y2: ny, stroke: col, 'stroke-width': 3.5 }, sp);
    const c = chip(sp, tx, { size: 24, fill: 'rgba(12,22,38,0.96)', stroke: col, sw: 3, color: '#FFFFFF' });
    tr(c, nx, ny);
    return sp;
  });
  const hub = G(g);
  E('ellipse', { rx: 98, ry: 48, fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 4 }, hub);
  T(hub, 0, 11, '"sneer"', { size: 36, weight: 800, anchor: 'middle', fill: SC_INK });
  g.set = p => spokes.forEach((sp, i) => op(sp, clamp(p * 6 - i)));
  g.set(0);
  return g;
}
