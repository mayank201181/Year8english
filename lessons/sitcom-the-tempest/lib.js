/* THE ISLE IS FULL OF NOISES (All the School's a Stage, Ep 2): guests, island set and props.
   Every top-level helper starts with `tmp`, plus `cast(parent, kind, o)` for engDirector / engQuizScene. */

ENG_TINT.prospero = ['#1D1238', '#3F2870'];
ENG_TINT.caliban = ['#162B20', '#2E5940'];
ENG_TINT.ariel = ['#0D2E46', '#1F6A8E'];
ENG_TINT.miranda = ['#381628', '#6B2D4C'];

function cast(parent, kind, o) {
  o = o || {};
  const S = { s: o.s, mood: o.mood };
  if (kind === 'prospero') {
    let cloakG = null, staffG = null, orb = null;
    return scMake(parent, Object.assign(S, { seed: 37, bob: 2.5, mood: o.mood || 'smug',
      draw: g => {
        const skin = '#ECC2A1';
        // Ducal tunic underneath
        E('path', { d: 'M-96,142 Q-92,58 -40,48 L40,48 Q92,58 96,142 Z', fill: '#3E255B', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-18,48 L18,48 L14,140 L-14,140 Z', fill: '#C99A2E', stroke: SC_INK, 'stroke-width': 3 }, g);
        // Star-embroidered magic cloak (can be hidden in Epilogue with cloak: 0)
        cloakG = G(g);
        E('path', { d: 'M-116,144 Q-114,50 -48,44 L-20,66 L-34,144 Z M116,144 Q114,50 48,44 L20,66 L34,144 Z', fill: linGrad('#2B1654', '#160A30', true), stroke: '#E2B33C', 'stroke-width': 4, 'stroke-linejoin': 'round' }, cloakG);
        [[-78, 92], [-62, 124], [76, 90], [64, 126]].forEach(([x, y]) => E('circle', { cx: x, cy: y, r: 5, fill: '#FFE45C' }, cloakG));
        E('ellipse', { cx: 0, cy: 48, rx: 66, ry: 16, fill: '#F4EBD3', stroke: SC_INK, 'stroke-width': 3.5 }, g);
        E('rect', { x: -18, y: 26, width: 36, height: 26, fill: skin }, g);
        E('ellipse', { cx: 0, cy: -34, rx: 72, ry: 82, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);
        // Silver-streaked wizard hair & long beard
        E('path', { d: 'M-72,-40 Q-86,-106 0,-116 Q86,-106 72,-40 Q82,18 68,42 Q56,4 58,-44 Q0,-76 -58,-44 Q-56,4 -68,42 Q-82,18 -72,-40 Z', fill: '#7B7785', stroke: SC_INK, 'stroke-width': 3.5, 'stroke-linejoin': 'round' }, g);
        E('path', { d: 'M-58,-4 Q-64,66 0,96 Q64,66 58,-4 Q42,26 0,24 Q-42,26 -58,-4 Z', fill: '#9A96A4', stroke: SC_INK, 'stroke-width': 3.5, 'stroke-linejoin': 'round' }, g);
        // Ducal velvet cap
        E('path', { d: 'M-74,-82 Q0,-138 74,-82 L62,-66 Q0,-96 -62,-66 Z', fill: '#5B1E48', stroke: '#E2B33C', 'stroke-width': 3.5 }, g);
        // Magic staff
        staffG = G(g);
        E('line', { x1: 118, y1: -110, x2: 108, y2: 145, stroke: '#6B4423', 'stroke-width': 11, 'stroke-linecap': 'round' }, staffG);
        orb = E('circle', { cx: 118, cy: -124, r: 22, fill: ball('#7FD3FF', '#2E5A9E'), stroke: '#FFE45C', 'stroke-width': 3.5 }, staffG);
      },
      face: { x: 0, y: -32, eye: 14, gap: 50, mouthW: 32, mouthY: 36, lidCol: '#DFB392' },
      upd: (t, g, st) => {
        op(cloakG, st.cloak === 0 ? 0 : 1);
        const sf = st.staff === 0 ? 0 : 1;
        op(staffG, sf);
        if (orb && sf) attr(orb, 'r', 21 + 3 * Math.sin(t * 4));
      } }));
  }
  if (kind === 'caliban') {
    return scMake(parent, Object.assign(S, { seed: 41, bob: 2.5, mood: o.mood || 'annoyed',
      draw: g => {
        const skin = '#B68460', hair = '#26201B';
        // Weathered moss-green & woven island tunic
        E('path', { d: 'M-106,142 Q-100,56 -42,48 L42,48 Q100,56 106,142 Z', fill: '#3D6B48', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-82,56 L58,140 L94,140 L-42,48 Z', fill: '#7A5434', stroke: SC_INK, 'stroke-width': 3.5 }, g);
        // Seashell cord
        [-26, 0, 26].forEach((x, i) => E('ellipse', { cx: x, cy: 76 + (i === 1 ? 6 : 0), rx: 9, ry: 7, fill: '#F7EBCB', stroke: SC_INK, 'stroke-width': 2.5 }, g));
        E('rect', { x: -22, y: 26, width: 44, height: 28, fill: skin }, g);
        E('ellipse', { cx: 0, cy: -32, rx: 76, ry: 82, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);
        // Wild salt-tangled hair & leafy sprig
        E('path', { d: 'M-80,-26 Q-96,-92 -52,-112 L-38,-92 Q0,-128 42,-96 L58,-112 Q96,-88 80,-24 Q68,-64 46,-68 Q0,-82 -48,-68 Q-68,-62 -80,-26 Z', fill: hair, stroke: SC_INK, 'stroke-width': 3.5, 'stroke-linejoin': 'round' }, g);
        E('path', { d: 'M46,-94 C66,-116 94,-108 82,-82 C68,-78 52,-82 46,-94 Z', fill: '#5BD27A', stroke: '#22844A', 'stroke-width': 2.5 }, g);
        E('path', { d: 'M-52,18 Q0,48 52,18 Q40,42 0,46 Q-40,42 -52,18 Z', fill: '#3A3028', opacity: 0.55 }, g);
      },
      face: { x: 0, y: -26, eye: 15, gap: 54, mouthW: 36, mouthY: 36, lidCol: '#A47250' },
      sweat: [[-76, -72], [78, -66]] }));
  }
  if (kind === 'ariel') {
    let wings = null, halo = null;
    return scMake(parent, Object.assign(S, { seed: 47, bob: 8, mood: o.mood || 'happy',
      draw: g => {
        halo = E('circle', { cx: 0, cy: -16, r: 155, fill: glow('#7FD3FF'), opacity: 0.45 }, g);
        wings = G(g);
        [-1, 1].forEach(sd => {
          E('path', { d: `M${sd * 36},30 C${sd * 145},-60 ${sd * 165},40 ${sd * 74},92 C${sd * 130},110 ${sd * 110},156 ${sd * 40},116 Z`,
            fill: 'rgba(159,226,255,0.55)', stroke: '#5AB4E0', 'stroke-width': 3.5 }, wings);
        });
        const skin = '#D8F4FF';
        E('path', { d: 'M-78,136 Q-72,58 -32,50 L32,50 Q72,58 78,136 Q36,154 0,136 Q-36,154 -78,136 Z', fill: linGrad('#5CE1E6', '#2E8BC0', true), stroke: '#1B5678', 'stroke-width': 3.5 }, g);
        E('rect', { x: -16, y: 30, width: 32, height: 24, fill: skin }, g);
        E('ellipse', { cx: 0, cy: -30, rx: 68, ry: 74, fill: skin, stroke: '#3A8FB7', 'stroke-width': 4 }, g);
        // Wind-swept cyan-silver hair
        E('path', { d: 'M-70,-34 Q-78,-108 -10,-124 Q24,-142 54,-114 Q88,-96 70,-30 Q52,-72 10,-76 Q-44,-76 -70,-34 Z', fill: '#7CE8FF', stroke: '#2B7A9E', 'stroke-width': 3.5, 'stroke-linejoin': 'round' }, g);
        E('circle', { cx: 0, cy: -84, r: 8, fill: '#FFE45C', stroke: '#B57B12', 'stroke-width': 2 }, g);
      },
      face: { x: 0, y: -24, eye: 15, gap: 48, mouthW: 32, mouthY: 32, lidCol: '#B6E6FA', iris: '#165272' },
      upd: (t, g) => {
        const fl = 1 + 0.08 * Math.sin(t * 9);
        if (wings) wings.setAttribute('transform', `scale(${fl.toFixed(3)} 1)`);
        if (halo) attr(halo, 'opacity', 0.36 + 0.14 * Math.sin(t * 3.2));
      } }));
  }
  if (kind === 'miranda') {
    return scMake(parent, Object.assign(S, { seed: 53, bob: 2.5, mood: o.mood || 'happy',
      draw: g => {
        const skin = '#F2C9AC', hair = '#4A281A';
        E('path', { d: 'M-72,-30 Q-94,50 -78,116 L78,116 Q94,50 72,-30 Z', fill: hair, stroke: SC_INK, 'stroke-width': 3.5 }, g);
        E('path', { d: 'M-96,142 Q-90,60 -38,50 L38,50 Q90,60 96,142 Z', fill: '#E87A96', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-30,50 Q0,76 30,50', fill: '#FFF3D6', stroke: SC_INK, 'stroke-width': 3 }, g);
        E('rect', { x: -16, y: 30, width: 32, height: 24, fill: skin }, g);
        E('ellipse', { cx: 0, cy: -30, rx: 70, ry: 76, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-74,-26 Q-78,-112 0,-112 Q78,-112 74,-26 Q52,-70 0,-64 Q-52,-70 -74,-26 Z', fill: hair, stroke: SC_INK, 'stroke-width': 3.5 }, g);
        // Sea-hibiscus flower tucked by ear
        const flw = G(g); tr(flw, 64, -56);
        for (let k = 0; k < 5; k++) E('circle', { cx: Math.cos(k * TAU / 5) * 10, cy: Math.sin(k * TAU / 5) * 10, r: 9, fill: '#FFE45C', stroke: '#C98A12', 'stroke-width': 2 }, flw);
        E('circle', { r: 6, fill: '#E8424F' }, flw);
      },
      face: { x: 0, y: -22, eye: 15, gap: 48, mouthW: 32, mouthY: 32, lidCol: '#E2B698' } }));
  }
  return engCast(parent, kind, o);
}

/* Mei's running star review badge for Ep 2 */
function tmpRating(parent) {
  const g = G(parent);
  E('rect', { x: -150, y: -46, width: 300, height: 104, rx: 18, fill: 'rgba(14,24,40,0.92)', stroke: ENG.gold, 'stroke-width': 3 }, g);
  T(g, 0, -14, "MEI'S REVIEW", { size: 22, weight: 800, anchor: 'middle', fill: ENG.gold, ls: 2, font: FB });
  const st = engStars(g, { size: 40 }); tr(st, 0, 26);
  g.set = (n, p) => { op(g, p === undefined ? 1 : p); st.set(n); };
  g.set(1, 0);
  return g;
}

/* A Jacobean wooden galleon, centred at waterline (0,0) */
function tmpShip(parent, s) {
  const g = G(parent), i = G(g); tr(i, 0, 0, s || 1);
  E('path', { d: 'M-90,-10 L90,-10 L68,36 L-68,36 Z', fill: '#7A4A24', stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, i);
  E('rect', { x: -86, y: -24, width: 46, height: 18, fill: '#9C6B3E', stroke: SC_INK, 'stroke-width': 3 }, i);
  E('line', { x1: 0, y1: -10, x2: 0, y2: -130, stroke: '#4A2A12', 'stroke-width': 7 }, i);
  E('line', { x1: -48, y1: -20, x2: -48, y2: -98, stroke: '#4A2A12', 'stroke-width': 5 }, i);
  E('path', { d: 'M-4,-118 Q36,-86 4,-40 L-42,-40 Q-16,-82 -4,-118 Z', fill: '#FBF3DC', stroke: SC_INK, 'stroke-width': 3 }, i);
  E('path', { d: 'M-50,-92 Q-24,-68 -46,-36 L-76,-36 Q-60,-66 -50,-92 Z', fill: '#F4E6C4', stroke: SC_INK, 'stroke-width': 3 }, i);
  E('path', { d: 'M0,-130 L30,-122 L0,-114 Z', fill: '#F06A8A', stroke: SC_INK, 'stroke-width': 2 }, i);
  return g;
}

/* Prospero's island set: sunny turquoise bay -> stormy purple tempest with g.upd(t, storm 0..1) */
function tmpIsland(parent) {
  const g = G(parent);
  E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: linGrad('#5EC8F8', '#D6F5FF', true) }, g);
  const stormSky = E('rect', { x: 0, y: 0, width: 1200, height: 520, fill: linGrad('#160E2E', '#35255A', true), opacity: 0 }, g);
  const sunEl = E('circle', { cx: 960, cy: 110, r: 54, fill: '#FFE45C' }, g);
  const boltEl = E('path', { d: 'M840,0 L790,140 L835,140 L770,310 L875,115 L825,115 Z', fill: '#FFF7C2', opacity: 0 }, g);

  // Turquoise sea + animated wave crests
  E('rect', { x: 0, y: 410, width: 1200, height: 170, fill: linGrad('#1CA3B8', '#0F6B82', true) }, g);
  const ship = tmpShip(g, 0.72);
  const waves = G(g);
  for (let k = 0; k < 9; k++) E('path', { d: `M${k * 145},${448 + (k % 2) * 28} q24,-12 48,0 q24,12 48,0`, fill: 'none', stroke: '#BCEFFF', 'stroke-width': 4, opacity: 0.75 }, waves);

  // Sandy island shore & lush hills
  E('path', { d: 'M0,520 Q340,455 760,505 Q1020,535 1200,490 L1200,750 L0,750 Z', fill: linGrad('#F5DC9B', '#D9B66C', true), stroke: '#B8944A', 'stroke-width': 4 }, g);
  E('path', { d: 'M-20,540 Q180,320 360,510 Z', fill: '#2D8A56', stroke: '#1B5A37', 'stroke-width': 4 }, g);

  // Prospero's rocky cell (left)
  const cell = G(g); tr(cell, 140, 495);
  E('path', { d: 'M-130,40 Q-120,-130 0,-140 Q115,-125 125,40 Z', fill: '#6E6A68', stroke: '#3E3A38', 'stroke-width': 5 }, cell);
  E('path', { d: 'M-48,40 Q-48,-58 0,-60 Q48,-58 48,40 Z', fill: '#261C28', stroke: '#3E3A38', 'stroke-width': 4 }, cell);

  // Sycorax's cloven pine tree (right)
  const pine = G(g); tr(pine, 1085, 515);
  E('path', { d: 'M-18,20 L-24,-180 L-6,-95 L8,-185 L22,20 Z', fill: '#6B4423', stroke: '#3E2410', 'stroke-width': 4, 'stroke-linejoin': 'round' }, pine);
  const fronds = G(pine);
  [[-95, -180], [-35, -230], [40, -225], [95, -175]].forEach(([dx, dy]) =>
    E('path', { d: `M0,-175 Q${dx * 0.6},${dy - 25} ${dx},${dy}`, fill: 'none', stroke: '#227A48', 'stroke-width': 18, 'stroke-linecap': 'round' }, fronds));

  g.ship = ship; g.cell = [140, 495]; g.pine = [1085, 515];
  g.upd = (t, storm) => {
    storm = clamp(storm || 0);
    attr(stormSky, 'opacity', storm * 0.92);
    attr(sunEl, 'opacity', 1 - storm);
    attr(boltEl, 'opacity', storm > 0.4 && Math.sin(t * 21) > 0.78 ? storm : 0);
    tr(waves, Math.sin(t * (1.2 + storm * 4)) * (16 + storm * 22), 0);
    tr(ship, 760 + Math.sin(t * 1.5) * 14, 412 + Math.sin(t * 3) * (4 + storm * 14), 0.72, Math.sin(t * (2 + storm * 5)) * (3 + storm * 16));
    tr(fronds, 0, 0, 1, Math.sin(t * (1.8 + storm * 7)) * (3 + storm * 14));
  };
  g.upd(0, 0);
  return g;
}
