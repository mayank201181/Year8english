/* EXIT, PURSUED BY A DEADLINE (All the School's a Stage, Ep 5): guest cast and shared props.
   Bundled after lib.js, kit.js, sitcom.js and english.js. Every top-level name starts with `scr`, except `cast`. */

ENG_TINT.brack = ['#261838', '#4A2E6B'];
ENG_TINT.clapper = ['#1A1E28', '#343E52'];

function cast(parent, kind, o) {
  o = o || {};
  if (kind === 'brack') {
    return scMake(parent, { s: o.s, mood: o.mood || 'annoyed', seed: 31, bob: 4,
      draw: g => {
        // Parchment stage-direction strip hugged by giant bold square/italic brackets
        E('rect', { x: -78, y: -96, width: 156, height: 192, rx: 18, fill: linGrad('#EFE6FF', '#D5C2FA', true), stroke: SC_INK, 'stroke-width': 4 }, g);
        // Left & right tall brackets [  ]
        E('path', { d: 'M-56,-116 L-94,-116 L-94,116 L-56,116', fill: 'none', stroke: '#7A3EC8', 'stroke-width': 16, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, g);
        E('path', { d: 'M56,-116 L94,-116 L94,116 L56,116', fill: 'none', stroke: '#7A3EC8', 'stroke-width': 16, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, g);
        E('path', { d: 'M-56,-116 L-94,-116 L-94,116 L-56,116', fill: 'none', stroke: SC_INK, 'stroke-width': 4, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, g);
        E('path', { d: 'M56,-116 L94,-116 L94,116 L56,116', fill: 'none', stroke: SC_INK, 'stroke-width': 4, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, g);
        // Top ribbon "( DO NOT READ ALOUD )"
        E('rect', { x: -66, y: -84, width: 132, height: 28, rx: 8, fill: '#7A3EC8', stroke: SC_INK, 'stroke-width': 3 }, g);
        T(g, 0, -63, 'italics', { size: 20, weight: 800, anchor: 'middle', fill: '#FFE6A8', ls: 1 });
        // Bottom badge "PRESENT TENSE"
        E('rect', { x: -68, y: 52, width: 136, height: 30, rx: 8, fill: '#FFFFFF', stroke: '#7A3EC8', 'stroke-width': 3 }, g);
        T(g, 0, 74, '(stage dir.)', { size: 19, weight: 800, anchor: 'middle', fill: '#4A1E8A', font: FB });
      },
      face: { x: 0, y: -14, eye: 16, gap: 50, mouthW: 36, mouthY: 34, lidCol: '#C5AEF2', iris: '#35185A' },
      sweat: [[-108, -74], [108, -68]] });
  }
  if (kind === 'clapper') {
    let topBar = null;
    return scMake(parent, { s: o.s, mood: o.mood || 'happy', seed: 37, bob: 3,
      draw: g => {
        // Slate board body
        E('rect', { x: -96, y: -56, width: 192, height: 158, rx: 14, fill: linGrad('#2B3340', '#171C24', true), stroke: SC_INK, 'stroke-width': 5 }, g);
        E('line', { x1: -82, y1: 42, x2: 82, y2: 42, stroke: '#5C6B7E', 'stroke-width': 3 }, g);
        E('line', { x1: -10, y1: 42, x2: -10, y2: 90, stroke: '#5C6B7E', 'stroke-width': 3 }, g);
        T(g, -48, 74, 'SC. 5', { size: 20, weight: 800, anchor: 'middle', fill: '#FFE45C', font: FB });
        T(g, 36, 74, 'TAKE 1', { size: 20, weight: 800, anchor: 'middle', fill: '#FFFFFF', font: FB });
        // Lower hinged bar with diagonal stripes
        const barB = G(g); tr(barB, 0, -68);
        E('rect', { x: -98, y: -14, width: 196, height: 26, rx: 4, fill: '#1E242E', stroke: SC_INK, 'stroke-width': 4 }, barB);
        for (let k = -3; k <= 3; k += 2) {
          E('path', { d: `M${k * 24 - 12},-12 L${k * 24 + 8},-12 L${k * 24 - 4},10 L${k * 24 - 24},10 Z`, fill: '#FFFFFF' }, barB);
        }
        // Upper snapping clapper stick (pivots at left x=-94, y=-82)
        topBar = G(g);
        E('rect', { x: 0, y: -26, width: 196, height: 26, rx: 5, fill: '#1E242E', stroke: SC_INK, 'stroke-width': 4 }, topBar);
        for (let k = 0; k < 4; k++) {
          E('path', { d: `M${20 + k * 46},-24 L${42 + k * 46},-24 L${30 + k * 46},-2 L${8 + k * 46},-2 Z`, fill: '#FFE45C' }, topBar);
        }
        // Brass hinge triangle
        E('path', { d: 'M-98,-56 L-64,-56 L-98,-94 Z', fill: '#E2B33C', stroke: SC_INK, 'stroke-width': 3.5, 'stroke-linejoin': 'round' }, g);
        E('circle', { cx: -86, cy: -68, r: 5, fill: SC_INK }, g);
      },
      face: { x: 0, y: -14, eye: 16, gap: 56, mouthW: 40, mouthY: 32, lidCol: '#3A4658' },
      upd: (t, g, st) => {
        if (!topBar) return;
        const sn = st.snap !== undefined ? st.snap : (0.35 + 0.25 * Math.abs(Math.sin(t * 2.4)));
        tr(topBar, -96, -82, 1, -26 * clamp(1 - sn));
      } });
  }
  return engCast(parent, kind, o);
}

function scrRating(parent) {
  const g = G(parent);
  E('rect', { x: -150, y: -46, width: 300, height: 104, rx: 18, fill: 'rgba(14,24,40,0.92)', stroke: ENG.gold, 'stroke-width': 3 }, g);
  T(g, 0, -14, "MEI'S REVIEW", { size: 22, weight: 800, anchor: 'middle', fill: ENG.gold, ls: 2, font: FB });
  const st = engStars(g, { size: 40 }); tr(st, 0, 26);
  g.set = (n, p) => { op(g, p === undefined ? 1 : p); st.set(n); };
  g.set(1, 0);
  return g;
}

/* Subtext iceberg: tip above water ("SAID"), huge blue body below ("SUBTEXT") */
function scrIceberg(parent) {
  const g = G(parent);
  E('rect', { x: -290, y: -180, width: 580, height: 370, rx: 22, fill: 'rgba(12,26,46,0.95)', stroke: '#5AB4E0', 'stroke-width': 4 }, g);
  E('rect', { x: -286, y: -30, width: 572, height: 216, rx: 18, fill: 'rgba(30,90,150,0.55)' }, g);
  // Tip above waterline
  E('path', { d: 'M-78,-30 L0,-138 L82,-30 Z', fill: '#F4FAFF', stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, g);
  // Huge mass below waterline
  const sub = G(g);
  E('path', { d: 'M-82,-28 L86,-28 L196,64 L140,164 L0,178 L-154,158 L-200,56 Z', fill: linGrad('#7CCBFF', '#2B6CB0', true), stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, sub);
  E('line', { x1: -280, y1: -30, x2: 280, y2: -30, stroke: '#BDE7FF', 'stroke-width': 5, 'stroke-dasharray': '12 8' }, g);
  T(g, 0, -146, 'SAID ALOUD: "Fine."', { size: 28, weight: 800, anchor: 'middle', fill: '#FFE45C' });
  T(sub, 0, 18, 'SUBTEXT (beneath)', { size: 28, weight: 800, anchor: 'middle', fill: '#0E1E36' });
  T(sub, 0, 62, '• I am hurt', { size: 25, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
  T(sub, 0, 98, '• Testing if you care', { size: 25, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
  T(sub, 0, 134, '• Secret curse ("Amen!")', { size: 25, weight: 700, anchor: 'middle', fill: '#FFE45C', font: FB });
  g.sub = sub;
  return g;
}

/* 3x3 Stage map from the actor's view facing the audience */
function scrStageMap(parent) {
  const g = G(parent), cw = 186, ch = 92;
  E('rect', { x: -300, y: -180, width: 600, height: 370, rx: 20, fill: 'rgba(14,24,40,0.95)', stroke: ENG.gold, 'stroke-width': 4 }, g);
  const NAMES = [
    ['Upstage Right', 'Upstage Centre', 'Upstage Left'],
    ['Stage Right', 'Centre Stage', 'Stage Left'],
    ['Downstage Right', 'Downstage Centre', 'Downstage Left'],
  ];
  const cells = [];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
    const x = -280 + c * cw + 2, y = -156 + r * ch;
    const isDSC = r === 2 && c === 1, isSL = r === 1 && c === 2;
    const box = E('rect', { x, y, width: cw - 6, height: ch - 6, rx: 10, fill: isDSC ? 'rgba(226,179,60,0.28)' : isSL ? 'rgba(181,140,255,0.22)' : 'rgba(255,255,255,0.07)', stroke: isDSC ? ENG.gold : isSL ? ENG.violet : '#4A607A', 'stroke-width': isDSC || isSL ? 3.5 : 2 }, g);
    const parts = NAMES[r][c].split(' ');
    T(g, x + (cw - 6) / 2, y + 38, parts[0], { size: 22, weight: 800, anchor: 'middle', fill: isDSC ? '#FFE45C' : '#FFFFFF', font: FB });
    T(g, x + (cw - 6) / 2, y + 66, parts.slice(1).join(' '), { size: 22, weight: 800, anchor: 'middle', fill: isDSC ? '#FFE45C' : isSL ? '#E4D4FF' : '#B8C9D9', font: FB });
    cells.push(box);
  }
  E('rect', { x: -220, y: 132, width: 440, height: 42, rx: 12, fill: ENG.rose, stroke: '#FFFFFF', 'stroke-width': 3 }, g);
  T(g, 0, 162, 'AUDIENCE (actor faces ↓)', { size: 25, weight: 800, anchor: 'middle', fill: '#FFFFFF' });
  g.cells = cells;
  return g;
}

/* Rising scene tension arc: set-up -> complication -> escalation -> turning point -> cliffhanger */
function scrTension(parent) {
  const g = G(parent);
  E('rect', { x: -340, y: -155, width: 680, height: 310, rx: 22, fill: 'rgba(14,24,40,0.94)', stroke: ENG.rose, 'stroke-width': 4 }, g);
  E('line', { x1: -280, y1: 100, x2: 290, y2: 100, stroke: '#7F95AB', 'stroke-width': 3 }, g);
  E('line', { x1: -280, y1: 100, x2: -280, y2: -115, stroke: '#7F95AB', 'stroke-width': 3 }, g);
  T(g, -296, -8, 'TENSION', { size: 20, weight: 800, anchor: 'middle', fill: C.muted, font: FB, transform: 'rotate(-90 -296 -8)' });
  const PTS = [[-250, 82, 'Set-up'], [-130, 48, 'Complication'], [-10, -8, 'Escalation'], [120, -84, 'Turning pt'], [245, -62, 'Cliffhanger!']];
  const curve = E('path', { d: 'M-250,82 L-130,48 L-10,-8 L120,-84 L245,-62', fill: 'none', stroke: ENG.gold, 'stroke-width': 7, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', pathLength: 1, 'stroke-dasharray': '1 1' }, g);
  const nodes = PTS.map(([x, y, lbl], i) => {
    const n = G(g); tr(n, x, y);
    E('circle', { r: 12, fill: i >= 3 ? ENG.rose : ENG.gold, stroke: '#FFFFFF', 'stroke-width': 3 }, n);
    T(n, 0, i % 2 ? -22 : 34, lbl, { size: 22, weight: 800, anchor: 'middle', fill: i === 4 ? '#FFE45C' : '#FFFFFF', font: FB });
    return n;
  });
  g.set = p => {
    p = clamp(p);
    curve.setAttribute('stroke-dashoffset', (1 - p).toFixed(3));
    nodes.forEach((n, i) => op(n, clamp(p * 5 - i)));
  };
  g.set(0);
  return g;
}
