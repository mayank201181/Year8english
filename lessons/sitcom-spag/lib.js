/* LET'S EAT, GRANDMA (All the School's a Stage, Ep 16 — Series Finale!): art shared by this episode's scenes.
   Every top-level helper starts with `spg`, plus `cast(parent, kind, o)` falling back to `engCast`. */

ENG_TINT.semi = ['#0E262E', '#1E5260'];
ENG_TINT.stop = ['#26141A', '#4D2632'];
ENG_TINT.apos = ['#241438', '#4A2B72'];

function cast(parent, kind, o) {
  o = o || {};
  const S = { s: o.s, mood: o.mood };
  if (kind === 'semi') {
    const c = scMake(parent, Object.assign(S, { seed: 59, bob: 3, mood: o.mood || 'smug',
      draw: g => {
        // cool leather collar behind the lower comma body
        E('path', { d: 'M-76,12 L-96,-24 L-44,-4 L44,-4 L96,-24 L76,12 Z', fill: '#1C252E', stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, g);
        // lower comma tail + body (cousin to Kevin, in cool teal-indigo)
        E('path', { d: 'M36,76 Q58,136 18,186 Q-12,212 -46,206 Q-12,182 -6,138 Q-4,112 -10,94 Z', fill: ball('#2BA39A', '#155A56'), stroke: SC_INK, 'stroke-width': 5, 'stroke-linejoin': 'round' }, g);
        E('circle', { cx: 0, cy: 36, r: 68, fill: ball('#2BA39A', '#155A56'), stroke: SC_INK, 'stroke-width': 5 }, g);
        // upper semicolon dot!
        E('circle', { cx: 0, cy: -86, r: 44, fill: ball('#56D69B', '#1E7A50'), stroke: SC_INK, 'stroke-width': 5 }, g);
        E('ellipse', { cx: -16, cy: -104, rx: 12, ry: 7, fill: '#FFFFFF', opacity: 0.35, transform: 'rotate(-25 -16 -104)' }, g);
        // cool relaxed arms
        E('path', { d: 'M-68,36 Q-102,52 -92,84 M68,36 Q102,52 92,84', fill: 'none', stroke: SC_INK, 'stroke-width': 8, 'stroke-linecap': 'round' }, g);
      },
      face: { x: 0, y: 26, eye: 13, gap: 44, mouthW: 32, mouthY: 34, lidCol: '#1E7A74' } }));
    // dark aviator sunglasses over Semi's eyes!
    const shd = G(c.firstChild); tr(shd, 0, 24);
    [-24, 24].forEach(x => {
      E('path', { d: `M${x - 22},-12 L${x + 22},-12 L${x + 18},12 Q${x},20 ${x - 18},12 Z`, fill: '#101820', stroke: '#FFD23F', 'stroke-width': 3.5 }, shd);
      E('line', { x1: x - 12, y1: -6, x2: x + 4, y2: 8, stroke: '#9FD8FF', 'stroke-width': 3, 'stroke-linecap': 'round', opacity: 0.65 }, shd);
    });
    E('line', { x1: -4, y1: -8, x2: 4, y2: -8, stroke: '#FFD23F', 'stroke-width': 3.5 }, shd);
    return c;
  }
  if (kind === 'stop') {
    const c = scMake(parent, Object.assign(S, { seed: 61, bob: 1, mood: o.mood || 'deadpan',
      draw: g => {
        // shadow + heavy granite-crimson full-stop sphere
        E('ellipse', { cx: 0, cy: 112, rx: 78, ry: 16, fill: '#000000', opacity: 0.3 }, g);
        E('circle', { cx: 0, cy: 8, r: 96, fill: ball('#C63B4B', '#6E1824'), stroke: SC_INK, 'stroke-width': 6 }, g);
        E('ellipse', { cx: -36, cy: -44, rx: 24, ry: 12, fill: '#FFFFFF', opacity: 0.22, transform: 'rotate(-28 -36 -44)' }, g);
        // crossed no-nonsense arms across the front
        E('path', { d: 'M-64,46 Q0,66 64,46', fill: 'none', stroke: SC_INK, 'stroke-width': 11, 'stroke-linecap': 'round' }, g);
      },
      face: { x: 0, y: -6, eye: 15, gap: 52, mouthW: 34, mouthY: 36, lidCol: '#8F2432' } }));
    return c;
  }
  if (kind === 'apos') {
    const c = scMake(parent, Object.assign(S, { seed: 67, bob: 7, mood: o.mood || 'annoyed',
      draw: g => {
        // high-flying golden-violet apostrophe curl (hovers above the ground!)
        E('ellipse', { cx: 0, cy: 130, rx: 46, ry: 10, fill: '#000000', opacity: 0.2 }, g);
        E('path', { d: 'M28,-10 Q52,58 12,106 Q-14,128 -42,120 Q-10,98 -6,58 Q-4,34 -12,18 Z', fill: ball('#B58CFF', '#623AA2'), stroke: SC_INK, 'stroke-width': 5, 'stroke-linejoin': 'round' }, g);
        E('circle', { cx: 0, cy: -52, r: 74, fill: ball('#B58CFF', '#623AA2'), stroke: SC_INK, 'stroke-width': 5 }, g);
        E('ellipse', { cx: -28, cy: -92, rx: 18, ry: 10, fill: '#FFFFFF', opacity: 0.28, transform: 'rotate(-28 -28 -92)' }, g);
        // tired eye-bags from menu crimes
        E('path', { d: 'M-38,-36 Q-24,-28 -10,-36 M10,-36 Q24,-28 38,-36', fill: 'none', stroke: '#4A2478', 'stroke-width': 3 }, g);
        E('path', { d: 'M-72,-30 Q-104,-8 -94,24 M72,-30 Q104,-8 94,24', fill: 'none', stroke: SC_INK, 'stroke-width': 7, 'stroke-linecap': 'round' }, g);
      },
      face: { x: 0, y: -58, eye: 14, gap: 48, mouthW: 30, mouthY: 34, lidCol: '#8A5CE0' },
      sweat: [[-76, -104], [78, -96]] }));
    return c;
  }
  return engCast(parent, kind, o);
}

/* Stack of 16 extra mugs on Mr H's shelf/desk so Ep 16 hits all 23 mugs! */
function spgExtraMugs(parent) {
  const g = G(parent);
  const cols = ['#F06A8A', '#5AB4E0', '#FFE45C', '#56D69B', '#B58CFF', '#FF9F43', '#FFFFFF', '#8FD3FF'];
  for (let row = 0; row < 2; row++) for (let k = 0; k < 8; k++) {
    const m = G(g); tr(m, 380 + k * 32, 434 - row * 28, 0.72);
    E('path', { d: 'M-14,-18 L14,-18 L12,16 L-12,16 Z', fill: cols[(k + row * 3) % cols.length], stroke: SC_INK, 'stroke-width': 2.5 }, m);
    E('path', { d: 'M14,-10 Q22,-8 20,2 Q18,10 12,8', fill: 'none', stroke: SC_INK, 'stroke-width': 2.5 }, m);
  }
  return g;
}

function spgSeeSaw(parent) {
  const g = G(parent);
  E('path', { d: 'M-36,70 L0,10 L36,70 Z', fill: ENG.gold, stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, g);
  const plank = G(g); tr(plank, 0, 10);
  E('rect', { x: -370, y: -8, width: 740, height: 16, rx: 8, fill: '#2BA39A', stroke: SC_INK, 'stroke-width': 3.5 }, plank);
  const bL = G(plank); tr(bL, -210, -48);
  E('rect', { x: -155, y: -32, width: 310, height: 64, rx: 14, fill: 'rgba(12,22,38,0.96)', stroke: '#5AB4E0', 'stroke-width': 3.5 }, bL);
  T(bL, 0, 8, 'The match was cancelled', { size: 24, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
  const semiB = chip(plank, ';', { size: 38, fill: '#FFE45C', stroke: SC_INK, sw: 3.5, color: SC_INK }); tr(semiB, 0, -48);
  const bR = G(plank); tr(bR, 210, -48);
  E('rect', { x: -155, y: -32, width: 310, height: 64, rx: 14, fill: 'rgba(12,22,38,0.96)', stroke: '#56D69B', 'stroke-width': 3.5 }, bR);
  T(bR, 0, 8, 'it had rained all night.', { size: 24, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
  g.set = t => tr(plank, 0, 10, 1, Math.sin(t * 2.2) * 3.5);
  return g;
}

function spgDinnerBanner(parent) {
  const g = G(parent);
  E('rect', { x: -430, y: -74, width: 860, height: 148, rx: 22, fill: '#FFFDF7', stroke: ENG.gold, 'stroke-width': 5 }, g);
  const left = T(g, -370, 18, "Let's eat", { size: 64, weight: 800, fill: SC_INK });
  const commaGlow = E('circle', { cx: -78, cy: 12, r: 44, fill: glow('#FFE45C'), opacity: 0 }, g);
  const commaT = T(g, -78, 22, ',', { size: 84, weight: 800, anchor: 'middle', fill: '#4A4FB8' });
  const right = T(g, 165, 18, 'Grandma!', { size: 64, weight: 800, anchor: 'middle', fill: SC_INK });
  const sub = T(g, 0, 58, '', { size: 24, weight: 800, anchor: 'middle', fill: '#C62828', font: FB });
  g.set = hasComma => {
    const p = clamp(hasComma);
    op(commaT, p); attr(commaGlow, 'opacity', 0.85 * p);
    tr(right, lerp(115, 175, p), 18);
    setText(sub, p > 0.5 ? '✓ DIRECT ADDRESS — Dinner is saved!' : '✗ OBJECT OF "EAT" — Ah Ma has locked the kitchen!');
    sub.setAttribute('fill', p > 0.5 ? '#1E8A55' : '#C62828');
  };
  g.set(0);
  return g;
}
