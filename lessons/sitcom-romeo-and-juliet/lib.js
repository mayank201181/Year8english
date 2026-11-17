/* TWO HOUSEHOLDS, ONE GROUP CHAT (All the School's a Stage, Ep 4): guests, Verona set and props.
   Every top-level helper starts with `rj`, plus `cast(parent, kind, o)` for engDirector / engQuizScene. */

ENG_TINT.romeo = ['#102446', '#214E8A'];
ENG_TINT.juliet = ['#3E1428', '#782850'];
ENG_TINT.mercutio = ['#26163E', '#52307C'];
ENG_TINT.tybalt = ['#3C0E14', '#7C1E28'];

function cast(parent, kind, o) {
  o = o || {};
  const S = { s: o.s, mood: o.mood };
  if (kind === 'romeo') {
    return scMake(parent, Object.assign(S, { seed: 79, bob: 2.5, mood: o.mood || 'happy',
      draw: g => {
        const skin = '#F0C7AA', hair = '#2C1B16';
        // Montague sapphire-blue doublet with silver rose brooch
        E('path', { d: 'M-98,142 Q-94,58 -40,48 L40,48 Q94,58 98,142 Z', fill: '#1E56A0', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-28,48 L0,90 L28,48 Z', fill: '#EBF4FF', stroke: SC_INK, 'stroke-width': 3 }, g);
        E('line', { x1: 0, y1: 90, x2: 0, y2: 140, stroke: '#CFE2F8', 'stroke-width': 4 }, g);
        E('circle', { cx: 42, cy: 84, r: 12, fill: '#F06A8A', stroke: '#FFFFFF', 'stroke-width': 2.5 }, g);
        E('rect', { x: -18, y: 28, width: 36, height: 24, fill: skin }, g);
        E('ellipse', { cx: 0, cy: -32, rx: 70, ry: 78, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);
        // Swept romantic dark-chestnut hair
        E('path', { d: 'M-74,-28 Q-86,-114 4,-116 Q86,-112 74,-28 Q58,-72 12,-70 Q-26,-54 -48,-68 Q-66,-60 -74,-28 Z', fill: hair, stroke: SC_INK, 'stroke-width': 3.5, 'stroke-linejoin': 'round' }, g);
      },
      face: { x: 0, y: -22, eye: 15, gap: 48, mouthW: 34, mouthY: 32, lidCol: '#E0B496' },
      sweat: [[-72, -68], [74, -64]] }));
  }
  if (kind === 'juliet') {
    return scMake(parent, Object.assign(S, { seed: 83, bob: 2.5, mood: o.mood || 'happy',
      draw: g => {
        const skin = '#F3CCAF', hair = '#241512';
        E('path', { d: 'M-76,-30 Q-96,56 -78,124 L78,124 Q96,56 76,-30 Z', fill: hair, stroke: SC_INK, 'stroke-width': 3.5 }, g);
        // Capulet crimson-rose Renaissance gown with gold square neckline
        E('path', { d: 'M-98,142 Q-92,58 -38,50 L38,50 Q92,58 98,142 Z', fill: '#C82E58', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('rect', { x: -34, y: 50, width: 68, height: 24, rx: 6, fill: '#FFF3D6', stroke: '#E2B33C', 'stroke-width': 3.5 }, g);
        E('line', { x1: 0, y1: 74, x2: 0, y2: 140, stroke: '#E2B33C', 'stroke-width': 4 }, g);
        E('rect', { x: -16, y: 30, width: 32, height: 24, fill: skin }, g);
        E('ellipse', { cx: 0, cy: -30, rx: 68, ry: 76, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-72,-28 Q-78,-112 0,-112 Q78,-112 72,-28 Q50,-70 0,-64 Q-50,-70 -72,-28 Z', fill: hair, stroke: SC_INK, 'stroke-width': 3.5 }, g);
        // Pearl & gold Juliet caplet headband
        E('path', { d: 'M-62,-82 Q0,-114 62,-82', fill: 'none', stroke: '#E2B33C', 'stroke-width': 6 }, g);
        [-40, -20, 0, 20, 40].forEach(x => E('circle', { cx: x, cy: -94 + Math.abs(x) * 0.22, r: 5, fill: '#FFFFFF', stroke: SC_INK, 'stroke-width': 1.5 }, g));
      },
      face: { x: 0, y: -22, eye: 15, gap: 48, mouthW: 32, mouthY: 32, lidCol: '#E3B99C' } }));
  }
  if (kind === 'mercutio') {
    return scMake(parent, Object.assign(S, { seed: 89, bob: 3.5, mood: o.mood || 'smug',
      draw: g => {
        const skin = '#EBC09E', hair = '#3A2318';
        // Prince's kinsman: violet & gold slashed doublet + rakish feathered cap
        E('path', { d: 'M-100,142 Q-94,58 -40,48 L40,48 Q94,58 100,142 Z', fill: '#63349E', stroke: SC_INK, 'stroke-width': 4 }, g);
        [-42, 0, 42].forEach(x => E('rect', { x: x - 9, y: 74, width: 18, height: 42, rx: 8, fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 2.5 }, g));
        E('ellipse', { cx: 0, cy: 48, rx: 64, ry: 14, fill: '#FFFFFF', stroke: SC_INK, 'stroke-width': 3 }, g);
        E('rect', { x: -18, y: 28, width: 36, height: 24, fill: skin }, g);
        E('ellipse', { cx: 0, cy: -32, rx: 70, ry: 78, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-72,-34 Q-80,-106 0,-110 Q80,-106 72,-34 Q50,-70 0,-66 Q-50,-70 -72,-34 Z', fill: hair, stroke: SC_INK, 'stroke-width': 3 }, g);
        // Jaunty tilted beret + long golden plume
        E('path', { d: 'M-82,-74 Q-10,-128 82,-86 L68,-64 Q0,-86 -68,-58 Z', fill: '#4A227A', stroke: '#FFE45C', 'stroke-width': 3.5 }, g);
        E('path', { d: 'M30,-96 Q96,-152 126,-116 Q88,-112 42,-82 Z', fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 3 }, g);
      },
      face: { x: 0, y: -24, eye: 14, gap: 48, mouthW: 36, mouthY: 34, lidCol: '#DBA986' } }));
  }
  if (kind === 'tybalt') {
    return scMake(parent, Object.assign(S, { seed: 97, bob: 2, mood: o.mood || 'annoyed',
      draw: g => {
        const skin = '#EAC0A2', hair = '#181214';
        // Scarlet & black Capulet duelist doublet + rapier hilt
        E('path', { d: 'M-104,142 Q-98,56 -42,48 L42,48 Q98,56 104,142 Z', fill: '#9E1B28', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-52,52 L52,140 M52,52 L-52,140', stroke: '#1E161A', 'stroke-width': 12 }, g);
        E('ellipse', { cx: 0, cy: 48, rx: 66, ry: 15, fill: '#F4F6FA', stroke: SC_INK, 'stroke-width': 3 }, g);
        // Swept-hilt rapier at side
        const hilt = G(g); tr(hilt, 96, 98, 1, -18);
        E('line', { x1: 0, y1: -44, x2: 0, y2: 44, stroke: '#E2B33C', 'stroke-width': 8, 'stroke-linecap': 'round' }, hilt);
        E('ellipse', { cx: 0, cy: 0, rx: 28, ry: 14, fill: 'none', stroke: '#E2B33C', 'stroke-width': 5 }, hilt);
        E('rect', { x: -18, y: 28, width: 36, height: 24, fill: skin }, g);
        E('ellipse', { cx: 0, cy: -32, rx: 70, ry: 78, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-74,-32 Q-82,-112 0,-114 Q82,-112 74,-32 Q54,-74 0,-70 Q-54,-74 -74,-32 Z', fill: hair, stroke: SC_INK, 'stroke-width': 3.5 }, g);
        // Sharp "Prince of Cats" moustache & pointed goatee
        E('path', { d: 'M-34,12 Q-16,2 0,10 Q16,2 34,12 M-10,22 L0,52 L10,22 Z', fill: hair, stroke: SC_INK, 'stroke-width': 2.5 }, g);
      },
      face: { x: 0, y: -26, eye: 14, gap: 50, mouthW: 32, mouthY: 34, lidCol: '#DAA88A' } }));
  }
  return engCast(parent, kind, o);
}

function rjRating(parent) {
  const g = G(parent);
  E('rect', { x: -150, y: -46, width: 300, height: 104, rx: 18, fill: 'rgba(14,24,40,0.92)', stroke: ENG.gold, 'stroke-width': 3 }, g);
  T(g, 0, -14, "MEI'S REVIEW", { size: 22, weight: 800, anchor: 'middle', fill: ENG.gold, ls: 2, font: FB });
  const st = engStars(g, { size: 40 }); tr(st, 0, 26);
  g.set = (n, p) => { op(g, p === undefined ? 1 : p); st.set(n); };
  g.set(1, 0);
  return g;
}

/* Verona piazza & Capulet orchard window: g.upd(t, night 0..1) shifts from blazing Italian noon to starry night */
function rjVerona(parent) {
  const g = G(parent);
  E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: linGrad('#58BAFF', '#FFE6B8', true) }, g);
  const sunG = E('circle', { cx: 240, cy: 115, r: 56, fill: '#FFE45C' }, g);
  const nightSky = E('rect', { x: 0, y: 0, width: 1200, height: 580, fill: linGrad('#0B1230', '#1D2958', true), opacity: 0 }, g);
  const starsG = G(g); op(starsG, 0);
  const r = rng(103);
  for (let k = 0; k < 24; k++) E('circle', { cx: 40 + r() * 1120, cy: 25 + r() * 290, r: 1.8 + r() * 2.5, fill: '#FFF7C2' }, starsG);
  E('circle', { cx: 240, cy: 115, r: 42, fill: '#EAF4FF' }, starsG);

  // Cypress silhouettes & terracotta Verona arcade
  [120, 480, 740].forEach(x => E('path', { d: `M${x},530 Q${x - 28},360 ${x},230 Q${x + 28},360 ${x},530 Z`, fill: '#1F5C3E', stroke: '#133B28', 'stroke-width': 3 }, g));
  E('rect', { x: 0, y: 350, width: 860, height: 210, fill: '#E8C59E', stroke: '#A67C52', 'stroke-width': 4 }, g);
  for (let k = 0; k < 4; k++) {
    const ax = 110 + k * 190;
    E('path', { d: `M${ax - 60},560 L${ax - 60},440 Q${ax},385 ${ax + 60},440 L${ax + 60},560 Z`, fill: '#5A3A28', stroke: '#8C6244', 'stroke-width': 4 }, g);
  }
  // Montague blue banner (left) & Capulet crimson banner (right)
  E('path', { d: 'M46,350 L106,350 L106,455 L76,435 L46,455 Z', fill: '#1E56A0', stroke: '#FFFFFF', 'stroke-width': 3 }, g);
  T(g, 76, 405, 'M', { size: 32, weight: 800, anchor: 'middle', fill: '#FFFFFF' });

  // Capulet stone house & orchard window on the right
  E('rect', { x: 830, y: 120, width: 370, height: 440, fill: '#D9AE82', stroke: '#8C623E', 'stroke-width': 5 }, g);
  E('path', { d: 'M815,125 L1015,55 L1200,120 Z', fill: '#B54A32', stroke: '#6E2818', 'stroke-width': 4 }, g);
  const winGlow = E('path', { d: 'M945,330 L945,215 Q1015,160 1085,215 L1085,330 Z', fill: '#FFE28A', stroke: '#5A3A20', 'stroke-width': 6 }, g);
  E('rect', { x: 915, y: 326, width: 200, height: 24, rx: 4, fill: '#B88C62', stroke: '#5A3A20', 'stroke-width': 4 }, g);
  E('path', { d: 'M1110,160 L1166,160 L1166,265 L1138,245 L1110,265 Z', fill: '#C82E58', stroke: '#FFFFFF', 'stroke-width': 3 }, g);
  T(g, 1138, 215, 'C', { size: 32, weight: 800, anchor: 'middle', fill: '#FFFFFF' });

  // Cobblestone piazza floor
  E('rect', { x: 0, y: 560, width: 1200, height: 190, fill: '#B8A590', stroke: '#7A6A58', 'stroke-width': 4 }, g);

  g.window = [1015, 275];
  g.upd = (t, night) => {
    const n = clamp(night || 0);
    attr(nightSky, 'opacity', n * 0.92);
    op(starsG, n);
    attr(sunG, 'opacity', 1 - n);
    winGlow.setAttribute('fill', n > 0.4 ? '#FFE47A' : '#4A6B88');
  };
  g.upd(0, 0);
  return g;
}
