/* SIMILE IS NOT LIKE A METAPHOR (All the School's a Stage, Ep 7): Metaphor, Simile, Volta & poetry props.
   Bundled after lib.js, kit.js, sitcom.js and english.js. Every top-level name starts with `ptk`, except `cast`. */

ENG_TINT.metaphor = ['#3D1622', '#78283E'];
ENG_TINT.simile = ['#162E44', '#2A587E'];
ENG_TINT.volta = ['#261644', '#4E2B86'];

function cast(parent, kind, o) {
  o = o || {};
  if (kind === 'metaphor') {
    return scMake(parent, { s: o.s, mood: o.mood || 'smug', seed: 53, bob: 3.5,
      draw: g => {
        // Bold fiery lion-mane sunburst + crimson velvet cape ("I AM A LION!")
        let mane = '';
        for (let k = 0; k < 14; k++) {
          const a0 = k / 14 * TAU, a1 = (k + 0.5) / 14 * TAU, a2 = (k + 1) / 14 * TAU;
          mane += (k ? 'L' : 'M') + `${(Math.cos(a0) * 86).toFixed(1)},${(-24 + Math.sin(a0) * 86).toFixed(1)} L${(Math.cos(a1) * 116).toFixed(1)},${(-24 + Math.sin(a1) * 116).toFixed(1)} L${(Math.cos(a2) * 86).toFixed(1)},${(-24 + Math.sin(a2) * 86).toFixed(1)} `;
        }
        E('path', { d: mane + 'Z', fill: linGrad('#FFB547', '#D9481E', true), stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, g);
        E('path', { d: 'M-96,138 Q-92,58 -40,48 L40,48 Q92,58 96,138 Z', fill: '#A81C3A', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('circle', { cx: 0, cy: -24, r: 70, fill: '#E8A86B', stroke: SC_INK, 'stroke-width': 4 }, g);
        // Gold crown
        E('path', { d: 'M-38,-86 L-44,-122 L-18,-102 L0,-128 L18,-102 L44,-122 L38,-86 Z', fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, g);
        E('rect', { x: -64, y: 82, width: 128, height: 34, rx: 10, fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 3.5 }, g);
        T(g, 0, 106, 'IS! (NO LIKE)', { size: 19, weight: 800, anchor: 'middle', fill: SC_INK });
      },
      face: { x: 0, y: -22, eye: 15, gap: 50, mouthW: 38, mouthY: 34, lidCol: '#D48E50' } });
  }
  if (kind === 'simile') {
    return scMake(parent, { s: o.s, mood: o.mood || 'happy', seed: 59, bob: 4,
      draw: g => {
        const skin = '#F2C6A0', hair = '#2E4A7D';
        // Bright sky-blue jacket + giant glowing "LIKE / AS" badge across front
        E('path', { d: 'M-98,138 Q-94,58 -40,48 L40,48 Q94,58 98,138 Z', fill: '#3A9AD9', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('rect', { x: -18, y: 26, width: 36, height: 28, fill: skin }, g);
        E('ellipse', { cx: 0, cy: -30, rx: 70, ry: 76, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-72,-30 Q-76,-114 0,-114 Q76,-114 72,-30 Q54,-74 0,-70 Q-54,-74 -72,-30 Z', fill: hair, stroke: SC_INK, 'stroke-width': 3.5 }, g);
        // Oversized LIKE / AS comparison badge
        const bg = G(g); tr(bg, 0, 96, 1, -3);
        E('rect', { x: -78, y: -26, width: 156, height: 52, rx: 14, fill: '#FFFFFF', stroke: '#B58CFF', 'stroke-width': 5 }, bg);
        T(bg, 0, 9, 'LIKE / AS', { size: 26, weight: 800, anchor: 'middle', fill: '#5A2CA0', ls: 1 });
      },
      face: { x: 0, y: -20, eye: 15, gap: 48, mouthW: 36, mouthY: 32, lidCol: '#E2B28A' },
      sweat: [[-72, -68], [74, -64]] });
  }
  if (kind === 'volta') {
    let spinG = null;
    return scMake(parent, { s: o.s, mood: o.mood || 'happy', seed: 61, bob: 6,
      draw: g => {
        spinG = G(g);
        // Electric violet & teal U-turn arrow character
        E('circle', { r: 86, fill: ball('#9C6BFF', '#5328A8'), stroke: SC_INK, 'stroke-width': 5 }, spinG);
        // Curved turn arrow crest on top
        E('path', { d: 'M-58,-68 A72,72 0 1,1 62,-62', fill: 'none', stroke: '#56D69B', 'stroke-width': 14, 'stroke-linecap': 'round' }, spinG);
        E('path', { d: 'M42,-88 L76,-56 L36,-46 Z', fill: '#56D69B', stroke: SC_INK, 'stroke-width': 3, 'stroke-linejoin': 'round' }, spinG);
        E('rect', { x: -58, y: 44, width: 116, height: 30, rx: 10, fill: '#1A0E36', stroke: '#FFE45C', 'stroke-width': 3 }, spinG);
        T(spinG, 0, 66, 'YET / BUT', { size: 19, weight: 800, anchor: 'middle', fill: '#FFE45C', ls: 1 });
      },
      face: { x: 0, y: -14, eye: 16, gap: 50, mouthW: 36, mouthY: 30, lidCol: '#7B4CE0' },
      upd: (t, g, st) => {
        if (spinG && st.flip) tr(spinG, 0, 0, 1, st.flip * 360);
        else if (spinG) tr(spinG, 0, 0, 1, Math.sin(t * 2.5) * 6);
      } });
  }
  return engCast(parent, kind, o);
}

function ptkRating(parent) {
  const g = G(parent);
  E('rect', { x: -150, y: -46, width: 300, height: 104, rx: 18, fill: 'rgba(18,14,38,0.94)', stroke: ENG.violet, 'stroke-width': 3 }, g);
  T(g, 0, -14, "MEI'S REVIEW", { size: 22, weight: 800, anchor: 'middle', fill: ENG.violet, ls: 2, font: FB });
  const st = engStars(g, { size: 40 }); tr(st, 0, 26);
  g.set = (n, p) => { op(g, p === undefined ? 1 : p); st.set(n); };
  g.set(1, 0);
  return g;
}

/* Connotation web around a central zoomed word ("feathers") */
function ptkWeb(parent, word, items) {
  const g = G(parent);
  E('rect', { x: -310, y: -165, width: 620, height: 330, rx: 22, fill: 'rgba(16,14,38,0.95)', stroke: ENG.violet, 'stroke-width': 4 }, g);
  const POS = [[-200, -95], [200, -95], [-215, 10], [215, 10], [-160, 108], [160, 108]];
  const spokes = items.slice(0, 6).map((txt, i) => {
    const [x, y] = POS[i], s = G(g);
    E('line', { x1: 0, y1: 0, x2: x, y2: y, stroke: '#7F68B8', 'stroke-width': 3.5 }, s);
    const w = Math.max(150, textWidth(txt, 22, FB, 700) + 32);
    E('rect', { x: x - w / 2, y: y - 22, width: w, height: 44, rx: 22, fill: '#281E52', stroke: '#5AB4E0', 'stroke-width': 3 }, s);
    T(s, x, y + 7, txt, { size: 22, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
    return s;
  });
  E('ellipse', { cx: 0, cy: 0, rx: 86, ry: 40, fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 4 }, g);
  T(g, 0, 10, word, { size: 30, weight: 800, anchor: 'middle', fill: SC_INK });
  g.set = p => spokes.forEach((s, i) => op(s, clamp(p * 6 - i)));
  g.set(0);
  return g;
}

/* Side-by-side Petrarchan vs Shakespearean 14-line sonnet comparison */
function ptkSonnetCompare(parent) {
  const g = G(parent);
  E('rect', { x: -340, y: -175, width: 680, height: 350, rx: 22, fill: 'rgba(16,14,38,0.95)', stroke: ENG.violet, 'stroke-width': 4 }, g);
  const left = G(g); tr(left, -168, 0);
  T(left, 0, -132, 'PETRARCHAN (14)', { size: 25, weight: 800, anchor: 'middle', fill: '#5AB4E0' });
  E('rect', { x: -135, y: -110, width: 270, height: 120, rx: 12, fill: 'rgba(90,180,224,0.22)', stroke: '#5AB4E0', 'stroke-width': 3 }, left);
  T(left, 0, -60, 'Octave (8 lines)', { size: 24, weight: 800, anchor: 'middle', fill: '#FFFFFF' });
  T(left, 0, -24, 'ABBA ABBA', { size: 22, weight: 700, anchor: 'middle', fill: '#BDE7FF', font: FB });
  T(left, 0, 34, '↻ VOLTA AT LINE 9', { size: 22, weight: 800, anchor: 'middle', fill: '#FFE45C' });
  E('rect', { x: -135, y: 52, width: 270, height: 96, rx: 12, fill: 'rgba(86,214,155,0.22)', stroke: '#56D69B', 'stroke-width': 3 }, left);
  T(left, 0, 96, 'Sestet (6 lines)', { size: 24, weight: 800, anchor: 'middle', fill: '#FFFFFF' });
  T(left, 0, 128, 'CDECDE / CDDECE', { size: 20, weight: 700, anchor: 'middle', fill: '#C9F2D3', font: FB });

  const right = G(g); tr(right, 168, 0);
  T(right, 0, -132, 'SHAKESPEAREAN (14)', { size: 25, weight: 800, anchor: 'middle', fill: ENG.rose });
  ['Quatrain 1: ABAB', 'Quatrain 2: CDCD', 'Quatrain 3: EFEF'].forEach((s, k) => {
    const y = -110 + k * 54;
    E('rect', { x: -135, y, width: 270, height: 46, rx: 10, fill: 'rgba(255,181,71,0.2)', stroke: '#FFB547', 'stroke-width': 2.5 }, right);
    T(right, 0, y + 30, s, { size: 21, weight: 700, anchor: 'middle', fill: '#FFE6A8', font: FB });
  });
  T(right, 0, 78, '↻ VOLTA AT LINE 13', { size: 22, weight: 800, anchor: 'middle', fill: '#FFE45C' });
  E('rect', { x: -135, y: 92, width: 270, height: 56, rx: 12, fill: 'rgba(240,106,138,0.28)', stroke: ENG.rose, 'stroke-width': 3 }, right);
  T(right, 0, 128, 'Couplet (2): GG', { size: 23, weight: 800, anchor: 'middle', fill: '#FFFFFF' });

  g.left = left; g.right = right;
  return g;
}
