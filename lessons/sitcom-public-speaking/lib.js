/* FRIENDS, ROMANS, YEAR 8 (All the School's a Stage, Ep 6): Aristotle's Triad band & rhetoric props.
   Bundled after lib.js, kit.js, sitcom.js and english.js. Every top-level name starts with `pub`, except `cast`. */

ENG_TINT.ethos = ['#162640', '#2B4878'];
ENG_TINT.pathos = ['#3C1228', '#73224C'];
ENG_TINT.logos = ['#122D3D', '#225875'];

function cast(parent, kind, o) {
  o = o || {};
  if (kind === 'ethos') {
    return scMake(parent, { s: o.s, mood: o.mood || 'smug', seed: 41, bob: 2.5,
      draw: g => {
        const skin = '#8D5A38', hair = '#1E2430';
        // Sharp navy suit + gold lapels + TRUST star badge
        E('path', { d: 'M-104,140 Q-100,56 -42,48 L42,48 Q100,56 104,140 Z', fill: '#1C355E', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-30,48 L0,132 L30,48 Z', fill: '#FFFFFF', stroke: SC_INK, 'stroke-width': 3 }, g);
        E('path', { d: 'M-10,56 L10,56 L14,118 L0,132 L-14,118 Z', fill: '#E2B33C', stroke: SC_INK, 'stroke-width': 3 }, g);
        // Gold star badge
        const bd = G(g); tr(bd, 54, 96);
        E('circle', { r: 22, fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 3 }, bd);
        T(bd, 0, 7, '★', { size: 24, weight: 800, anchor: 'middle', fill: '#7A4E08' });
        E('rect', { x: -18, y: 26, width: 36, height: 28, fill: skin }, g);
        E('ellipse', { cx: 0, cy: -34, rx: 72, ry: 80, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);
        // Slick hair with silver credibility streak
        E('path', { d: 'M-72,-44 Q-78,-122 0,-122 Q78,-122 72,-44 Q54,-82 0,-80 Q-54,-82 -72,-44 Z', fill: hair, stroke: SC_INK, 'stroke-width': 3.5 }, g);
        E('path', { d: 'M-28,-108 Q10,-116 44,-92', fill: 'none', stroke: '#D8E2EC', 'stroke-width': 7, 'stroke-linecap': 'round' }, g);
        E('rect', { x: -58, y: 112, width: 116, height: 28, rx: 8, fill: '#0E1E38', stroke: '#E2B33C', 'stroke-width': 2.5 }, g);
        T(g, 0, 132, 'ETHOS', { size: 19, weight: 800, anchor: 'middle', fill: '#FFE45C', ls: 2 });
      },
      face: { x: 0, y: -24, eye: 14, gap: 50, mouthW: 36, mouthY: 36, lidCol: '#75482B' } });
  }
  if (kind === 'pathos') {
    let halo = null;
    return scMake(parent, { s: o.s, mood: o.mood || 'happy', seed: 43, bob: 5,
      draw: g => {
        halo = E('circle', { cx: 0, cy: -16, r: 155, fill: glow('#FF7EB6'), opacity: 0.42 }, g);
        // Giant dramatic magenta heart character with stage cape
        E('path', { d: 'M-92,48 L-112,138 L112,138 L92,48 Z', fill: '#7A1642', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M0,108 C-98,42 -118,-44 -66,-92 C-32,-122 0,-90 0,-64 C0,-90 32,-122 66,-92 C118,-44 98,42 0,108 Z',
          fill: ball('#FF5FA2', '#B81D5E'), stroke: SC_INK, 'stroke-width': 5, 'stroke-linejoin': 'round' }, g);
        // Shimmering teardrop brooch
        E('path', { d: 'M64,20 Q76,40 64,52 Q52,40 64,20 Z', fill: '#7FD3FF', stroke: SC_INK, 'stroke-width': 2.5 }, g);
        E('rect', { x: -62, y: 106, width: 124, height: 30, rx: 10, fill: '#3C0E24', stroke: '#FF9EC7', 'stroke-width': 3 }, g);
        T(g, 0, 127, 'PATHOS', { size: 19, weight: 800, anchor: 'middle', fill: '#FFD2E8', ls: 2 });
      },
      face: { x: 0, y: -18, eye: 17, gap: 52, mouthW: 38, mouthY: 34, lidCol: '#D9387C' },
      upd: (t) => { if (halo) attr(halo, 'opacity', 0.32 + 0.16 * Math.sin(t * 3.2)); } });
  }
  if (kind === 'logos') {
    return scMake(parent, { s: o.s, mood: o.mood || 'neutral', seed: 47, bob: 2,
      draw: g => {
        // Crisp geometric clipboard/tablet scholar with graph glasses & bar-chart chest
        E('rect', { x: -84, y: -96, width: 168, height: 214, rx: 18, fill: linGrad('#E8F6FF', '#BFE3FA', true), stroke: SC_INK, 'stroke-width': 5 }, g);
        E('rect', { x: -44, y: -116, width: 88, height: 28, rx: 8, fill: '#5AB4E0', stroke: SC_INK, 'stroke-width': 4 }, g);
        // Mini bar chart on torso
        [[-52, 34, '#FF6B5C'], [-18, 54, '#FFC247'], [16, 74, '#56D69B']].forEach(([x, bh, col]) => {
          E('rect', { x, y: 98 - bh, width: 26, height: bh, rx: 4, fill: col, stroke: SC_INK, 'stroke-width': 3 }, g);
        });
        E('line', { x1: -64, y1: 98, x2: 58, y2: 98, stroke: SC_INK, 'stroke-width': 4 }, g);
        // Square cyan glasses frame around eyes
        [-27, 27].forEach(x => E('rect', { x: x - 22, y: -52, width: 44, height: 34, rx: 6, fill: 'rgba(90,180,224,0.16)', stroke: '#1B4F72', 'stroke-width': 4.5 }, g));
        E('line', { x1: -5, y1: -36, x2: 5, y2: -36, stroke: '#1B4F72', 'stroke-width': 4 }, g);
        T(g, 0, -96, 'LOGOS %', { size: 18, weight: 800, anchor: 'middle', fill: '#0E2436', font: FB });
      },
      face: { x: 0, y: -35, eye: 13, gap: 54, mouthW: 34, mouthY: 42, lidCol: '#9AD2F5' } });
  }
  return engCast(parent, kind, o);
}

function pubRating(parent) {
  const g = G(parent);
  E('rect', { x: -150, y: -46, width: 300, height: 104, rx: 18, fill: 'rgba(14,24,40,0.92)', stroke: ENG.gold, 'stroke-width': 3 }, g);
  T(g, 0, -14, "MEI'S REVIEW", { size: 22, weight: 800, anchor: 'middle', fill: ENG.gold, ls: 2, font: FB });
  const st = engStars(g, { size: 40 }); tr(st, 0, 26);
  g.set = (n, p) => { op(g, p === undefined ? 1 : p); st.set(n); };
  g.set(1, 0);
  return g;
}

/* Aristotle's Rhetorical Triangle + Kairos centre */
function pubTriangle(parent) {
  const g = G(parent);
  E('rect', { x: -310, y: -185, width: 620, height: 370, rx: 22, fill: 'rgba(14,24,40,0.94)', stroke: ENG.gold, 'stroke-width': 4 }, g);
  E('polygon', { points: '0,-130 -210,120 210,120', fill: 'rgba(255,255,255,0.05)', stroke: '#FFE45C', 'stroke-width': 5, 'stroke-linejoin': 'round' }, g);
  const mkNode = (x, y, name, sub, col) => {
    const n = G(g); tr(n, x, y);
    E('rect', { x: -88, y: -34, width: 176, height: 68, rx: 16, fill: col, stroke: '#FFFFFF', 'stroke-width': 3.5 }, n);
    T(n, 0, -4, name, { size: 26, weight: 800, anchor: 'middle', fill: SC_INK });
    T(n, 0, 22, sub, { size: 19, weight: 700, anchor: 'middle', fill: SC_INK, font: FB });
    return n;
  };
  g.eth = mkNode(0, -130, 'ETHOS', 'trust & character', '#FFE45C');
  g.pat = mkNode(-200, 120, 'PATHOS', 'audience emotion', '#FF7EB6');
  g.log = mkNode(200, 120, 'LOGOS', 'logic & evidence', '#5AB4E0');
  g.kai = mkNode(0, 32, 'KAIROS', 'the right moment', '#56D69B');
  return g;
}

/* Rising 5-bar sarcasm meter for Mark Antony's "honourable" */
function pubIronyMeter(parent) {
  const g = G(parent);
  E('rect', { x: -300, y: -145, width: 600, height: 290, rx: 20, fill: 'rgba(14,24,40,0.95)', stroke: ENG.rose, 'stroke-width': 4 }, g);
  T(g, 0, -104, '"BRUTUS IS AN HONOURABLE MAN" × 5', { size: 26, weight: 800, anchor: 'middle', fill: '#FFE45C' });
  const COLS = ['#9FD8FF', '#7CC0FF', '#B58CFF', '#FF7EB6', '#FF4D6D'];
  const LBLS = ['1 polite', '2 doubt', '3 sting', '4 bitter', '5 SARCASM!'];
  const bars = [];
  for (let k = 0; k < 5; k++) {
    const x = -236 + k * 102, bh = 38 + k * 34;
    const b = G(g);
    E('rect', { x, y: 88 - bh, width: 78, height: bh, rx: 8, fill: COLS[k], stroke: '#FFFFFF', 'stroke-width': 3 }, b);
    T(b, x + 39, 118, LBLS[k], { size: 18, weight: 800, anchor: 'middle', fill: '#FFFFFF', font: FB });
    bars.push(b);
  }
  g.set = n => bars.forEach((b, k) => op(b, clamp(n - k)));
  g.set(0);
  return g;
}

/* Four Ps vocal delivery dials */
function pubVoiceDials(parent) {
  const g = G(parent);
  E('rect', { x: -310, y: -155, width: 620, height: 310, rx: 20, fill: 'rgba(14,24,40,0.95)', stroke: '#5AB4E0', 'stroke-width': 4 }, g);
  T(g, 0, -112, 'THE FOUR Ps OF VOCAL DELIVERY', { size: 28, weight: 800, anchor: 'middle', fill: '#FFE45C' });
  const ROWS = [
    ['PACE', '130–150 wpm (≈420 words / 3 min)', 0.56, '#56D69B'],
    ['PAUSE', 'before & after key lines!', 0.72, '#B58CFF'],
    ['PROJECTION', 'diaphragm → back wall (no shout)', 0.68, '#FFB547'],
    ['PITCH', 'varied intonation · no uptalk', 0.64, '#FF7EB6'],
  ];
  const rows = ROWS.map(([name, note, pos, col], i) => {
    const r = G(g), y = -58 + i * 58;
    T(r, -278, y + 8, name, { size: 24, weight: 800, fill: col });
    E('line', { x1: -105, y1: y, x2: 85, y2: y, stroke: '#3B5268', 'stroke-width': 10, 'stroke-linecap': 'round' }, r);
    E('circle', { cx: -105 + 190 * pos, cy: y, r: 12, fill: col, stroke: '#FFFFFF', 'stroke-width': 3 }, r);
    T(r, 104, y + 7, note, { size: 19, weight: 700, fill: '#E2EEF8', font: FB });
    return r;
  });
  g.set = n => rows.forEach((r, i) => op(r, clamp(n - i)));
  g.set(0);
  return g;
}
