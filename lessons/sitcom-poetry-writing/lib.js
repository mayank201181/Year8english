/* SHOW, DON'T HAIKU (All the School's a Stage, Ep 9): guests and props for Writing Poetry & Commentary.
   Bundled after lib.js, kit.js, sitcom.js and english.js. Every top-level helper starts with `pwr`, except `cast`. */

ENG_TINT.rex = ['#0E2E22', '#1F5C42'];
ENG_TINT.cliche = ['#3B122B', '#7A2456'];

function cast(parent, kind, o) {
  o = o || {};
  const S = { s: o.s, mood: o.mood };
  if (kind === 'rex') {
    let jaw = null, mon = null;
    const c = scMake(parent, Object.assign(S, { seed: 31, bob: 3, mood: o.mood || 'smug',
      draw: g => {
        // dino spine spikes along the left book-spine
        for (let k = 0; k < 5; k++) {
          const y = -95 + k * 44;
          E('path', { d: `M-92,${y - 16} L-126,${y} L-92,${y + 16} Z`, fill: '#E2B33C', stroke: SC_INK, 'stroke-width': 3.5, 'stroke-linejoin': 'round' }, g);
        }
        // page block + chomping teeth
        E('rect', { x: -84, y: -112, width: 174, height: 224, rx: 14, fill: '#FBF3DC', stroke: SC_INK, 'stroke-width': 5 }, g);
        jaw = G(g);
        let teeth = '';
        for (let k = 0; k < 5; k++) teeth += `M88,${-80 + k * 36} L108,${-68 + k * 36} L88,${-56 + k * 36} `;
        E('path', { d: teeth, fill: '#FFFFFF', stroke: SC_INK, 'stroke-width': 3, 'stroke-linejoin': 'round' }, jaw);
        // emerald green leather cover
        E('rect', { x: -94, y: -118, width: 176, height: 230, rx: 16, fill: linGrad('#1F8A5C', '#104F34', false), stroke: SC_INK, 'stroke-width': 5 }, g);
        E('rect', { x: -94, y: -118, width: 28, height: 230, rx: 10, fill: '#0B3824', stroke: SC_INK, 'stroke-width': 4 }, g);
        E('rect', { x: -52, y: 54, width: 118, height: 38, rx: 8, fill: '#103826', stroke: '#E2B33C', 'stroke-width': 3 }, g);
        T(g, 7, 80, 'THESAURUS', { size: 19, weight: 800, anchor: 'middle', fill: '#FFE6A8', ls: 1 });
        // stubby T-rex arms
        E('path', { d: 'M82,16 Q112,18 110,36 M110,36 L120,32 M110,36 L118,44', fill: 'none', stroke: '#1F8A5C', 'stroke-width': 8, 'stroke-linecap': 'round' }, g);
      },
      face: { x: 6, y: -28, eye: 16, gap: 52, mouthW: 42, mouthY: 38, lidCol: '#176B47' },
      upd: (t, g, st) => {
        const ch = st.chomp || 0;
        tr(jaw, ch ? Math.abs(Math.sin(t * 16)) * 10 * ch : 0, 0);
      } }));
    mon = G(c.firstChild); tr(mon, 32, -28);
    E('circle', { r: 22, fill: 'rgba(255,255,255,0.16)', stroke: '#E2B33C', 'stroke-width': 5 }, mon);
    E('path', { d: 'M18,12 Q34,54 20,96', fill: 'none', stroke: '#E2B33C', 'stroke-width': 3, 'stroke-dasharray': '4 3' }, mon);
    return c;
  }
  if (kind === 'cliche') {
    const spks = [];
    return scMake(parent, Object.assign(S, { seed: 37, bob: 6, mood: o.mood || 'happy',
      draw: g => {
        // folded card back leaf
        E('path', { d: 'M0,112 C-118,40 -130,-70 -64,-104 C-26,-122 0,-90 0,-68 C0,-90 36,-124 74,-104 C138,-70 124,40 0,112 Z',
          fill: '#FFE0EE', stroke: SC_INK, 'stroke-width': 4, transform: 'translate(14 -6) rotate(5)' }, g);
        // front pink sparkly heart greeting card
        E('path', { d: 'M0,114 C-122,42 -134,-72 -66,-106 C-26,-126 0,-92 0,-68 C0,-92 26,-126 66,-106 C134,-72 122,42 0,114 Z',
          fill: ball('#FF7EB6', '#C92A6A'), stroke: SC_INK, 'stroke-width': 5, 'stroke-linejoin': 'round' }, g);
        E('path', { d: 'M0,94 C-98,32 -108,-60 -54,-88 C-22,-104 0,-76 0,-56 C0,-76 22,-104 54,-88 C108,-60 98,32 0,94 Z',
          fill: 'none', stroke: '#FFF0F6', 'stroke-width': 3, 'stroke-dasharray': '6 5' }, g);
        // gold bow at top cleft
        const bow = G(g); tr(bow, 0, -76);
        E('path', { d: 'M0,0 C-28,-22 -42,8 -12,12 Z M0,0 C28,-22 42,8 12,12 Z', fill: '#FFD23F', stroke: SC_INK, 'stroke-width': 3 }, bow);
        E('circle', { r: 7, fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 2.5 }, bow);
        T(g, 0, 68, 'XOXO', { size: 22, weight: 800, anchor: 'middle', fill: '#FFF0F6', ls: 2 });
        [[-108, -78], [112, -68], [-96, 48], [102, 42]].forEach(([x, y], i) => {
          const s = spark(g, 11, { color: '#FFE45C', seed: i * 1.7 }); tr(s, x, y); spks.push(s);
        });
      },
      face: { x: 0, y: -18, eye: 16, gap: 50, mouthW: 38, mouthY: 32, lidCol: '#F05697' },
      upd: t => spks.forEach(s => s.upd(t)) }));
  }
  return engCast(parent, kind, o);
}

function pwrRating(parent) {
  const g = G(parent);
  E('rect', { x: -150, y: -46, width: 300, height: 104, rx: 18, fill: 'rgba(14,24,40,0.92)', stroke: ENG.violet, 'stroke-width': 3 }, g);
  T(g, 0, -14, "MEI'S REVIEW", { size: 22, weight: 800, anchor: 'middle', fill: ENG.violet, ls: 2, font: FB });
  const st = engStars(g, { size: 40 }); tr(st, 0, 26);
  g.set = (n, p) => { op(g, p === undefined ? 1 : p); st.set(n); };
  g.set(1, 0);
  return g;
}

function pwrIdeaWeb(parent) {
  const g = G(parent);
  E('rect', { x: -390, y: -210, width: 780, height: 420, rx: 24, fill: 'rgba(16,14,34,0.94)', stroke: ENG.violet, 'stroke-width': 4 }, g);
  const nodes = [
    [0, -140, 'OBJECTS', 'jade bangle · passports', '#FF7EB6'],
    [-250, -45, 'PLACES', 'Queenstown kitchen', '#5AB4E0'],
    [250, -45, 'SOUNDS', 'rice cooker click · rain', '#FFE45C'],
    [-210, 125, 'MEMORIES', '"I remember..." lists', '#56D69B'],
    [210, 125, 'SAYINGS', 'Hokkien · "lah" & "cheers"', '#FFB547'],
  ];
  const spokes = nodes.map(([x, y, head, sub, col]) => {
    const ln = E('line', { x1: 0, y1: 0, x2: x, y2: y, stroke: col, 'stroke-width': 5, 'stroke-linecap': 'round' }, g);
    const b = G(g); tr(b, x, y);
    E('rect', { x: -135, y: -38, width: 270, height: 76, rx: 14, fill: '#1A1636', stroke: col, 'stroke-width': 3.5 }, b);
    T(b, 0, -6, head, { size: 24, weight: 800, anchor: 'middle', fill: col });
    T(b, 0, 24, sub, { size: 20, weight: 600, anchor: 'middle', fill: '#FFFFFF', font: FB });
    return { ln, b };
  });
  const ctr = G(g);
  E('circle', { r: 54, fill: ball('#B58CFF', '#6A3AC8'), stroke: '#FFFFFF', 'stroke-width': 4 }, ctr);
  T(ctr, 0, 10, 'ME', { size: 34, weight: 800, anchor: 'middle', fill: '#FFFFFF' });
  const ringEl = E('circle', { cx: 0, cy: -140, r: 148, fill: 'none', stroke: '#FFE45C', 'stroke-width': 5, 'stroke-dasharray': '10 7' }, g);
  g.set = (p, pick) => {
    spokes.forEach(({ ln, b }, i) => { const q = clamp(p * 5 - i); op(ln, q); op(b, q); });
    op(ringEl, pick || 0);
  };
  g.set(0, 0);
  return g;
}

function pwrLadder(parent) {
  const g = G(parent);
  E('rect', { x: -340, y: -215, width: 680, height: 430, rx: 22, fill: 'rgba(14,22,38,0.95)', stroke: ENG.gold, 'stroke-width': 4 }, g);
  T(g, 0, -172, 'LADDER OF ABSTRACTION: CLIMB DOWN', { size: 26, weight: 800, anchor: 'middle', fill: ENG.gold });
  const rungs = [
    ['CULTURE & IDENTITY (abstract)', '#FF6070', '#3D1420'],
    ['food and family at home', '#FFB547', '#3D2A12'],
    ["Ah Ma's kitchen dumplings", '#5AB4E0', '#122C42'],
    ['floury thumb pinching each fold, steam on glasses', '#56D69B', '#103828'],
  ];
  const els = rungs.map(([txt, col, bg], i) => {
    const r = G(g), y = -112 + i * 82; tr(r, 0, y);
    E('rect', { x: -290, y: -28, width: 580, height: 58, rx: 12, fill: bg, stroke: col, 'stroke-width': 3.5 }, r);
    T(r, 0, 9, txt, { size: i === 3 ? 23 : 26, weight: 700, anchor: 'middle', fill: '#FFFFFF' });
    return r;
  });
  g.set = n => els.forEach((r, i) => op(r, clamp(n - i)));
  g.set(0);
  return g;
}

function pwrPantoum(parent) {
  const g = G(parent);
  E('rect', { x: -430, y: -155, width: 860, height: 310, rx: 22, fill: 'rgba(14,20,40,0.95)', stroke: ENG.violet, 'stroke-width': 4 }, g);
  T(g, 0, -112, 'PANTOUM WEAVE: "TWO AND FOUR GO FORTH"', { size: 28, weight: 800, anchor: 'middle', fill: ENG.gold });
  const cols = { A: '#9AB4C4', B: '#FF7EB6', C: '#9AB4C4', D: '#56D69B', E: '#5AB4E0', F: '#FFB547', G: '#B58CFF', H: '#FFE45C' };
  const stanzas = [['A', 'B', 'C', 'D'], ['B', 'E', 'D', 'F'], ['E', 'G', 'F', 'H'], ['G', 'C', 'H', 'A']];
  const boxes = stanzas.map((st, i) => {
    const b = G(g), x = -290 + i * 194; tr(b, x, 18);
    E('rect', { x: -74, y: -92, width: 148, height: 196, rx: 12, fill: '#1A1836', stroke: '#5A4E8C', 'stroke-width': 3 }, b);
    T(b, 0, -64, 'Stanza ' + (i + 1), { size: 20, weight: 700, anchor: 'middle', fill: C.muted, font: FB });
    st.forEach((l, k) => T(b, 0, -24 + k * 38, 'Line ' + l, { size: 26, weight: 800, anchor: 'middle', fill: cols[l] }));
    return b;
  });
  g.set = p => boxes.forEach((b, i) => op(b, clamp(p * 4 - i)));
  g.set(0);
  return g;
}
