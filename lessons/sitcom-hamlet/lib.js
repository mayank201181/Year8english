/* TO BE OR NOT TO BE (LATE) (All the School's a Stage, Ep 3): guests, Elsinore battlements and props.
   Every top-level helper starts with `ham`, plus `cast(parent, kind, o)` for engDirector / engQuizScene. */

ENG_TINT.hamlet = ['#121422', '#282E4A'];
ENG_TINT.ghost = ['#0F2430', '#214E63'];
ENG_TINT.polonius = ['#2D2010', '#5C4222'];
ENG_TINT.ophelia = ['#1B2D24', '#385C49'];

function cast(parent, kind, o) {
  o = o || {};
  const S = { s: o.s, mood: o.mood };
  if (kind === 'hamlet') {
    let skullG = null;
    return scMake(parent, Object.assign(S, { seed: 61, bob: 2, mood: o.mood || 'sad',
      draw: g => {
        const skin = '#F0CBB1', hair = '#18151C';
        // Inky black mourning doublet & silver prince medallion
        E('path', { d: 'M-98,142 Q-94,58 -40,48 L40,48 Q94,58 98,142 Z', fill: '#191924', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-36,52 L0,86 L36,52 L24,44 L0,68 L-24,44 Z', fill: '#F4F6FA', stroke: SC_INK, 'stroke-width': 3 }, g);
        E('path', { d: 'M-30,66 Q0,106 30,66', fill: 'none', stroke: '#C9D3DC', 'stroke-width': 4 }, g);
        E('circle', { cx: 0, cy: 96, r: 9, fill: '#E2B33C', stroke: SC_INK, 'stroke-width': 2.5 }, g);
        E('rect', { x: -18, y: 28, width: 36, height: 26, fill: skin }, g);
        E('ellipse', { cx: 0, cy: -32, rx: 70, ry: 78, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);
        // Tousled dark Wittenberg-scholar hair falling across forehead
        E('path', { d: 'M-74,-28 Q-84,-114 0,-116 Q84,-114 74,-28 Q62,-68 30,-66 L10,-46 L-4,-68 Q-48,-68 -74,-28 Z', fill: hair, stroke: SC_INK, 'stroke-width': 3.5, 'stroke-linejoin': 'round' }, g);
        skullG = G(g);
        tr(engSkull(skullG, 0.72), 116, 46);
        op(skullG, 0);
      },
      face: { x: 0, y: -24, eye: 14, gap: 48, mouthW: 32, mouthY: 34, lidCol: '#DFB89E' },
      sweat: [[-72, -68], [74, -64]],
      upd: (t, g, st) => {
        const sk = st.skull || 0;
        if (skullG) { op(skullG, sk); if (sk > 0) tr(skullG, 0, Math.sin(t * 2.5) * 4); }
      } }));
  }
  if (kind === 'ghost') {
    let halo = null, tail = null;
    return scMake(parent, Object.assign(S, { seed: 67, bob: 7, mood: o.mood || 'annoyed',
      draw: g => {
        halo = E('ellipse', { cx: 0, cy: -10, rx: 175, ry: 205, fill: glow('#6FE3E8'), opacity: 0.45 }, g);
        const body = G(g, { opacity: 0.92 });
        tail = E('path', { d: '', fill: '#9CCAD6', stroke: '#4E8696', 'stroke-width': 4 }, body);
        // Spectral plate breastplate & pauldrons
        E('path', { d: 'M-96,134 Q-96,56 -44,48 L44,48 Q96,56 96,134 Z', fill: linGrad('#B8DCE6', '#689AA8', true), stroke: '#3A6878', 'stroke-width': 4 }, body);
        E('ellipse', { cx: -76, cy: 68, rx: 32, ry: 22, fill: '#CBE8F0', stroke: '#3A6878', 'stroke-width': 4 }, body);
        E('ellipse', { cx: 76, cy: 68, rx: 32, ry: 22, fill: '#CBE8F0', stroke: '#3A6878', 'stroke-width': 4 }, body);
        E('line', { x1: 0, y1: 52, x2: 0, y2: 130, stroke: '#3A6878', 'stroke-width': 4 }, body);
        E('ellipse', { cx: 0, cy: -34, rx: 70, ry: 80, fill: '#DCF4FA', stroke: '#4E8696', 'stroke-width': 4 }, body);
        // Spectral grey kingly beard
        E('path', { d: 'M-56,-2 Q-60,58 0,74 Q60,58 56,-2 Q38,26 0,24 Q-38,26 -56,-2 Z', fill: '#9AB8C2', stroke: '#4E8696', 'stroke-width': 3 }, body);
        // Open-faced Danish battle helm + crown rim + plume
        E('path', { d: 'M-74,-44 Q-78,-126 0,-130 Q78,-126 74,-44 L56,-56 Q0,-80 -56,-56 Z', fill: '#A8D0DC', stroke: '#3A6878', 'stroke-width': 4 }, body);
        E('path', { d: 'M-56,-102 L-40,-128 L-18,-108 L0,-136 L18,-108 L40,-128 L56,-102 Z', fill: '#FFE45C', stroke: '#8A6A18', 'stroke-width': 3 }, body);
      },
      face: { x: 0, y: -30, eye: 14, gap: 48, mouthW: 32, mouthY: 38, lidCol: '#B2DCE6', iris: '#1E4E5E' },
      upd: (t) => {
        const w = Math.sin(t * 3.0) * 14, w2 = Math.cos(t * 2.2) * 10;
        if (tail) tail.setAttribute('d', `M-82,128 Q${(-52 + w).toFixed(1)},176 ${(-8 + w2).toFixed(1)},184 Q${(34 + w).toFixed(1)},192 ${(20 - w2).toFixed(1)},208 Q${(76 + w).toFixed(1)},178 82,128 Z`);
        if (halo) attr(halo, 'opacity', 0.36 + 0.14 * Math.sin(t * 2.6));
      } }));
  }
  if (kind === 'polonius') {
    let scrollG = null;
    return scMake(parent, Object.assign(S, { seed: 71, bob: 2, mood: o.mood || 'smug',
      draw: g => {
        const skin = '#F2C8AA';
        E('path', { d: 'M-102,142 Q-98,58 -42,48 L42,48 Q98,58 102,142 Z', fill: '#8A5628', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-58,64 Q0,118 58,64', fill: 'none', stroke: '#E2B33C', 'stroke-width': 7, 'stroke-dasharray': '10 5' }, g);
        E('ellipse', { cx: 0, cy: 48, rx: 68, ry: 18, fill: '#FFFFFF', stroke: SC_INK, 'stroke-width': 3.5 }, g);
        E('rect', { x: -18, y: 28, width: 36, height: 24, fill: skin }, g);
        E('ellipse', { cx: 0, cy: -32, rx: 72, ry: 80, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);
        // Fussy white side-tufts, pointed goatee & flat velvet cap
        E('path', { d: 'M-42,10 Q0,30 42,10 L14,68 L0,78 L-14,68 Z', fill: '#E6E2DA', stroke: SC_INK, 'stroke-width': 3 }, g);
        E('path', { d: 'M-78,-78 Q0,-122 78,-78 L66,-60 Q0,-84 -66,-60 Z', fill: '#5A2A18', stroke: '#E2B33C', 'stroke-width': 3.5 }, g);
        scrollG = G(g);
        E('rect', { x: 88, y: 10, width: 44, height: 112, rx: 8, fill: '#FBF3DC', stroke: '#8B5A2B', 'stroke-width': 3.5 }, scrollG);
        E('line', { x1: 98, y1: 34, x2: 122, y2: 34, stroke: '#8B5A2B', 'stroke-width': 3 }, scrollG);
        E('line', { x1: 98, y1: 54, x2: 122, y2: 54, stroke: '#8B5A2B', 'stroke-width': 3 }, scrollG);
        E('line', { x1: 98, y1: 74, x2: 122, y2: 74, stroke: '#8B5A2B', 'stroke-width': 3 }, scrollG);
      },
      face: { x: 0, y: -28, eye: 13, gap: 48, mouthW: 30, mouthY: 34, lidCol: '#E2B596' },
      sweat: [[-70, -72], [72, -68]],
      upd: (t, g, st) => { if (scrollG) op(scrollG, st.scroll === 0 ? 0 : 1); } }));
  }
  if (kind === 'ophelia') {
    return scMake(parent, Object.assign(S, { seed: 73, bob: 2.5, mood: o.mood || 'sad',
      draw: g => {
        const skin = '#F4D0BA', hair = '#8C5230';
        E('path', { d: 'M-76,-30 Q-96,54 -80,122 L80,122 Q96,54 76,-30 Z', fill: hair, stroke: SC_INK, 'stroke-width': 3.5 }, g);
        E('path', { d: 'M-96,142 Q-90,60 -38,50 L38,50 Q90,60 96,142 Z', fill: '#5B8A72', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-30,50 L0,78 L30,50 Z', fill: '#FBF3DC', stroke: SC_INK, 'stroke-width': 3 }, g);
        E('rect', { x: -16, y: 30, width: 32, height: 24, fill: skin }, g);
        E('ellipse', { cx: 0, cy: -30, rx: 68, ry: 76, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-72,-28 Q-76,-112 0,-112 Q76,-112 72,-28 Q48,-70 0,-64 Q-48,-70 -72,-28 Z', fill: hair, stroke: SC_INK, 'stroke-width': 3.5 }, g);
        // Rosemary & wildflower garland
        [[-46, -82, '#5BD27A'], [-16, -92, '#F06A8A'], [18, -92, '#FFE45C'], [48, -82, '#B58CFF']].forEach(([x, y, col]) =>
          E('circle', { cx: x, cy: y, r: 9, fill: col, stroke: SC_INK, 'stroke-width': 2 }, g));
      },
      face: { x: 0, y: -22, eye: 15, gap: 48, mouthW: 30, mouthY: 32, lidCol: '#E4BEA6' } }));
  }
  return engCast(parent, kind, o);
}

function hamRating(parent) {
  const g = G(parent);
  E('rect', { x: -150, y: -46, width: 300, height: 104, rx: 18, fill: 'rgba(14,24,40,0.92)', stroke: ENG.gold, 'stroke-width': 3 }, g);
  T(g, 0, -14, "MEI'S REVIEW", { size: 22, weight: 800, anchor: 'middle', fill: ENG.gold, ls: 2, font: FB });
  const st = engStars(g, { size: 40 }); tr(st, 0, 26);
  g.set = (n, p) => { op(g, p === undefined ? 1 : p); st.set(n); };
  g.set(1, 0);
  return g;
}

/* Elsinore's midnight battlements (Kronborg Castle): starry night, moon, stone crenellations, torches & creeping mist */
function hamBattlements(parent) {
  const g = G(parent);
  E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: linGrad('#0B1024', '#1C2848', true) }, g);
  const r = rng(89);
  for (let k = 0; k < 22; k++) E('circle', { cx: 40 + r() * 1120, cy: 24 + r() * 320, r: 1.5 + r() * 2.5, fill: '#FFFFFF', opacity: 0.5 + r() * 0.4 }, g);
  // Cold Danish full moon
  E('circle', { cx: 960, cy: 125, r: 90, fill: glow('#CFE8FF'), opacity: 0.45 }, g);
  E('circle', { cx: 960, cy: 125, r: 44, fill: '#EAF4FF' }, g);

  // Distant Elsinore turret silhouettes
  E('path', { d: 'M80,480 L80,250 L125,180 L170,250 L170,480 Z M1010,480 L1010,230 L1065,155 L1120,230 L1120,480 Z', fill: '#141B30', stroke: '#2A3656', 'stroke-width': 3 }, g);

  // Drifting eerie mist bands
  const mist1 = E('ellipse', { cx: 420, cy: 455, rx: 380, ry: 48, fill: '#6FE3E8', opacity: 0.16 }, g);
  const mist2 = E('ellipse', { cx: 830, cy: 485, rx: 360, ry: 44, fill: '#6FE3E8', opacity: 0.14 }, g);

  // Crenellated stone parapet & flagstone walkway
  let wall = 'M0,560 L0,430 ';
  for (let x = 0; x < 1200; x += 120) wall += `L${x},430 L${x},475 L${x + 55},475 L${x + 55},430 L${x + 120},430 `;
  wall += 'L1200,560 Z';
  E('path', { d: wall, fill: '#3A4252', stroke: '#202530', 'stroke-width': 5 }, g);
  E('rect', { x: 0, y: 550, width: 1200, height: 200, fill: '#282E3B', stroke: '#181C26', 'stroke-width': 4 }, g);

  // Flickering wall torches
  const flames = [];
  [230, 970].forEach(x => {
    const tc = G(g); tr(tc, x, 465);
    E('path', { d: 'M-8,40 L8,40 L14,0 L-14,0 Z', fill: '#5A3A1A', stroke: SC_INK, 'stroke-width': 3 }, tc);
    const fl = E('path', { d: 'M0,0 C-18,-10 -16,-42 0,-64 C16,-42 18,-10 0,0 Z', fill: '#FF9F43' }, tc);
    E('circle', { cy: -26, r: 58, fill: glow('#FFB547'), opacity: 0.45 }, tc);
    flames.push(fl);
  });

  g.upd = (t, mist) => {
    const m = mist === undefined ? 1 : mist;
    tr(mist1, Math.sin(t * 0.5) * 45, 0); attr(mist1, 'opacity', 0.14 * m);
    tr(mist2, -Math.cos(t * 0.42) * 50, 0); attr(mist2, 'opacity', 0.12 * m);
    flames.forEach((f, i) => tr(f, 0, 0, 0.92 + 0.14 * Math.sin(t * 11 + i * 2), Math.sin(t * 8 + i) * 6));
  };
  g.upd(0, 1);
  return g;
}
