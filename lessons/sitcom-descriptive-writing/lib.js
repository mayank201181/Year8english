/* IT WAS A DARK AND STORMY PERIOD 3 (All the School's a Stage, Ep 14): art shared by this episode's scenes.
   Every top-level helper starts with `dsc`, plus `cast(parent, kind, o)` falling back to `engCast`. */

ENG_TINT.cam = ['#0E1E2E', '#1C3E5E'];
ENG_TINT.adj = ['#2E1428', '#5E2850'];

function cast(parent, kind, o) {
  o = o || {};
  const S = { s: o.s, mood: o.mood };
  if (kind === 'cam') {
    let barrel = null, recDot = null;
    const c = scMake(parent, Object.assign(S, { seed: 41, bob: 2, mood: o.mood || 'smug',
      draw: g => {
        // tripod legs / shoulder rig base
        E('path', { d: 'M-56,92 L-82,162 M0,94 L0,168 M56,92 L82,162', stroke: '#3A4652', 'stroke-width': 12, 'stroke-linecap': 'round' }, g);
        E('rect', { x: -72, y: 72, width: 144, height: 28, rx: 8, fill: '#222B34', stroke: SC_INK, 'stroke-width': 4 }, g);
        // cinema camera body + matte box hood
        E('rect', { x: -102, y: -96, width: 204, height: 172, rx: 24, fill: linGrad('#2D3846', '#182029', true), stroke: SC_INK, 'stroke-width': 5 }, g);
        E('path', { d: 'M-118,-108 L118,-108 L98,-86 L-98,-86 Z', fill: '#151C24', stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, g);
        // top carry handle + REC tally light
        E('path', { d: 'M-48,-108 L-48,-132 L48,-132 L48,-108', fill: 'none', stroke: '#3A4652', 'stroke-width': 12, 'stroke-linejoin': 'round' }, g);
        recDot = E('circle', { cx: 74, cy: -74, r: 9, fill: '#FF3B3B', stroke: SC_INK, 'stroke-width': 2.5 }, g);
        // zoom lens ring + glass element behind the face
        barrel = G(g);
        E('circle', { cx: 0, cy: -8, r: 78, fill: '#121820', stroke: '#E8424F', 'stroke-width': 6 }, barrel);
        E('circle', { cx: 0, cy: -8, r: 64, fill: ball('#2B587A', '#0F2438'), stroke: SC_INK, 'stroke-width': 4 }, barrel);
        E('path', { d: 'M-40,-44 Q-16,-60 16,-50', fill: 'none', stroke: '#9FD8FF', 'stroke-width': 7, 'stroke-linecap': 'round', opacity: 0.55 }, barrel);
      },
      face: { x: 0, y: -14, eye: 14, gap: 48, mouthW: 32, mouthY: 36, lidCol: '#1B3A54' },
      upd: (t, g, st) => {
        const zm = st.zoom || 0;
        if (barrel) tr(barrel, 0, 0, 1 + 0.14 * zm);
        if (recDot) attr(recDot, 'opacity', Math.sin(t * TAU * 1.1) > -0.2 ? 1 : 0.25);
      } }));
    return c;
  }
  if (kind === 'adj') {
    let cup = null;
    const c = scMake(parent, Object.assign(S, { seed: 43, bob: 6, mood: o.mood || 'happy',
      draw: g => {
        const skin = '#F2C5A0', hair = '#4A1E3A';
        // bouncy curls behind
        E('circle', { cx: -68, cy: -52, r: 34, fill: hair, stroke: SC_INK, 'stroke-width': 3.5 }, g);
        E('circle', { cx: 68, cy: -52, r: 34, fill: hair, stroke: SC_INK, 'stroke-width': 3.5 }, g);
        // bright cardigan covered in sticky-note adjectives!
        E('path', { d: 'M-104,140 Q-98,58 -42,50 L42,50 Q98,58 104,140 Z', fill: '#FF5FA2', stroke: SC_INK, 'stroke-width': 4 }, g);
        const notes = [[-56, 86, 'VERY!', '#FFE45C', -8], [4, 102, 'NICE!', '#8FD3FF', 6], [60, 84, 'BIG!', '#56D69B', -5]];
        notes.forEach(([x, y, tx, col, rot]) => {
          const n = G(g); tr(n, x, y, 1, rot);
          E('rect', { x: -28, y: -16, width: 56, height: 32, rx: 4, fill: col, stroke: SC_INK, 'stroke-width': 2.5 }, n);
          T(n, 0, 6, tx, { size: 15, weight: 800, anchor: 'middle', fill: SC_INK });
        });
        E('rect', { x: -18, y: 28, width: 36, height: 28, fill: skin }, g);
        E('ellipse', { cx: 0, cy: -30, rx: 72, ry: 78, fill: skin, stroke: SC_INK, 'stroke-width': 4 }, g);
        E('path', { d: 'M-74,-34 Q-76,-116 0,-116 Q76,-116 74,-34 Q46,-76 0,-70 Q-46,-76 -74,-34 Z', fill: hair, stroke: SC_INK, 'stroke-width': 3.5 }, g);
        // sticky note stuck to her fringe!
        const topN = G(g); tr(topN, 42, -96, 1, 12);
        E('rect', { x: -34, y: -16, width: 68, height: 32, rx: 4, fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 2.5 }, topN);
        T(topN, 0, 6, 'SUPER!', { size: 15, weight: 800, anchor: 'middle', fill: SC_INK });
        // iced kopi cup on the side
        cup = G(g); tr(cup, 110, 74);
        E('path', { d: 'M-24,-30 L24,-30 L18,34 L-18,34 Z', fill: '#B0723C', stroke: SC_INK, 'stroke-width': 3.5 }, cup);
        E('path', { d: 'M-26,-30 Q0,-52 26,-30 Z', fill: 'rgba(255,255,255,0.65)', stroke: SC_INK, 'stroke-width': 3 }, cup);
        E('line', { x1: 4, y1: -36, x2: 14, y2: -68, stroke: '#56D69B', 'stroke-width': 6, 'stroke-linecap': 'round' }, cup);
      },
      face: { x: 0, y: -22, eye: 16, gap: 50, mouthW: 36, mouthY: 32, lidCol: '#E3B08A' },
      sweat: [[-76, -74], [78, -68]],
      upd: (t, g, st) => {
        const jt = st.jitter === undefined ? 0.5 : st.jitter;
        if (cup) tr(cup, 110 + Math.sin(t * 28) * 3 * jt, 74, 1, Math.sin(t * 22) * 5 * jt);
      } }));
    return c;
  }
  return engCast(parent, kind, o);
}

/* Custom Singapore 4 p.m. monsoon / hawker centre set (1200 x 750) */
function dscRainStreet(parent) {
  const g = G(parent);
  // stormy violet-slate sky
  E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: linGrad('#182238', '#31435E', true) }, g);
  // heavy monsoon clouds
  [[220, 90, 1.2], [580, 70, 1.35], [960, 95, 1.25]].forEach(([x, y, s]) => {
    const cl = G(g); tr(cl, x, y, s);
    E('ellipse', { cx: 0, cy: 0, rx: 140, ry: 46, fill: '#25334A', opacity: 0.9 }, cl);
    E('ellipse', { cx: -50, cy: -18, rx: 85, ry: 38, fill: '#2E3F5B', opacity: 0.85 }, cl);
    E('ellipse', { cx: 55, cy: -14, rx: 90, ry: 34, fill: '#1F2B3E', opacity: 0.85 }, cl);
  });
  // HDB tower blocks in background with warm lit windows
  const rr = rng(53);
  [[60, 150, 210, 390], [310, 180, 190, 360], [930, 140, 220, 400]].forEach(([bx, by, bw, bh]) => {
    E('rect', { x: bx, y: by, width: bw, height: bh, fill: '#2A394D', stroke: '#1B2636', 'stroke-width': 3 }, g);
    for (let r = 0; r < 7; r++) for (let c = 0; c < 4; c++) {
      const lit = rr() > 0.42;
      E('rect', { x: bx + 20 + c * 46, y: by + 24 + r * 48, width: 28, height: 22, rx: 3, fill: lit ? '#FFE08A' : '#1E2A3A', opacity: lit ? 0.85 : 0.7 }, g);
    }
  });
  // glowing amber hawker centre pavilion in midground
  const hawk = G(g); tr(hawk, 620, 430);
  E('ellipse', { cx: 0, cy: 20, rx: 360, ry: 170, fill: glow('#FFB547'), opacity: 0.45 }, hawk);
  E('rect', { x: -280, y: -90, width: 560, height: 200, fill: '#3A281E', stroke: SC_INK, 'stroke-width': 4 }, hawk);
  // glowing amber pitched roof ("a lantern set down among the blocks")
  E('path', { d: 'M-320,-84 L-250,-148 L250,-148 L320,-84 Z', fill: linGrad('#FFB547', '#D97B1E', true), stroke: SC_INK, 'stroke-width': 4.5, 'stroke-linejoin': 'round' }, hawk);
  // fluorescent light strip + stall sign
  E('rect', { x: -240, y: -74, width: 480, height: 10, rx: 5, fill: '#E8FFF6' }, hawk);
  E('rect', { x: -230, y: -52, width: 250, height: 42, rx: 6, fill: '#C62828', stroke: '#FFE45C', 'stroke-width': 3 }, hawk);
  T(hawk, -105, -23, 'CHAR KWAY TEOW', { size: 22, weight: 800, anchor: 'middle', fill: '#FFE45C' });
  // sizzling wok flames + rising smoke puffs
  const wokFlame = E('path', { d: 'M-150,48 Q-140,12 -126,38 Q-114,4 -102,38 Q-92,16 -82,48 Z', fill: '#FF8A3D', stroke: '#FFE45C', 'stroke-width': 2 }, hawk);
  const smoke = [0, 1, 2].map(k => E('circle', { cx: -115 + k * 18, cy: 10, r: 16 + k * 4, fill: '#DCE6F0', opacity: 0.35 }, hawk));
  E('rect', { x: -250, y: 46, width: 270, height: 64, fill: '#8C9AA6', stroke: SC_INK, 'stroke-width': 3 }, hawk);
  // Table 34 on the right with plastic stools + white tissue packet choping a seat!
  const tbl = G(hawk); tr(tbl, 150, 74);
  E('rect', { x: -74, y: -14, width: 148, height: 16, rx: 5, fill: '#E2B33C', stroke: SC_INK, 'stroke-width': 3 }, tbl);
  E('rect', { x: -12, y: 2, width: 24, height: 44, fill: '#6E7B88' }, tbl);
  T(tbl, 0, -2, '34', { size: 15, weight: 800, anchor: 'middle', fill: SC_INK });
  E('rect', { x: 22, y: -26, width: 32, height: 12, rx: 3, fill: '#FFFFFF', stroke: '#5AB4E0', 'stroke-width': 2 }, tbl); // tissue packet!
  [-92, 92].forEach(sx => E('rect', { x: sx - 18, y: 8, width: 36, height: 38, rx: 6, fill: '#E8424F', stroke: SC_INK, 'stroke-width': 3 }, tbl));

  // wet glistening road in foreground
  E('rect', { x: 0, y: 540, width: 1200, height: 210, fill: linGrad('#1F2B3A', '#121A24', true) }, g);
  E('ellipse', { cx: 620, cy: 610, rx: 310, ry: 38, fill: '#FFB547', opacity: 0.22 }, g);
  // diagonal silver-rod raindrops
  const rainG = G(g), drops = [];
  for (let i = 0; i < 42; i++) {
    const ln = E('line', { x1: 0, y1: 0, x2: -14, y2: 52, stroke: '#BFE8FF', 'stroke-width': 2.5, 'stroke-linecap': 'round', opacity: 0.65 }, rainG);
    drops.push({ ln, x: rr() * 1260, y: rr() * 760, sp: 520 + rr() * 260 });
  }
  g.upd = (t, rain) => {
    rain = rain === undefined ? 0.85 : clamp(rain);
    op(rainG, rain);
    if (rain > 0.01) drops.forEach(d => {
      const y = (d.y + t * d.sp) % 800 - 40;
      const x = ((d.x - t * d.sp * 0.26) % 1260 + 1260) % 1260;
      tr(d.ln, x, y);
    });
    const fl = 0.85 + 0.2 * Math.sin(t * 14);
    wokFlame.setAttribute('transform', `translate(-116 48) scale(1 ${fl.toFixed(2)}) translate(116 -48)`);
    smoke.forEach((s, k) => {
      const f = (t * 0.45 + k / 3) % 1;
      attr(s, 'cy', 24 - f * 75);
      s.style.opacity = (0.38 * Math.sin(f * Math.PI)).toFixed(3);
    });
  };
  g.upd(0, 0.85);
  return g;
}

function dscRating(parent) {
  const g = G(parent);
  E('rect', { x: -150, y: -46, width: 300, height: 104, rx: 18, fill: 'rgba(14,24,40,0.92)', stroke: ENG.sky, 'stroke-width': 3 }, g);
  T(g, 0, -14, "MEI'S REVIEW", { size: 22, weight: 800, anchor: 'middle', fill: ENG.sky, ls: 2, font: FB });
  const st = engStars(g, { size: 40 }); tr(st, 0, 26);
  g.set = (n, p) => { op(g, p === undefined ? 1 : p); st.set(n); };
  g.set(1, 0);
  return g;
}

function dscSkyline(parent) {
  const g = G(parent);
  E('rect', { x: -390, y: -135, width: 780, height: 270, rx: 20, fill: 'rgba(12,22,38,0.95)', stroke: ENG.sky, 'stroke-width': 4 }, g);
  T(g, 0, -96, 'SENTENCE LENGTHS — BUILD A SKYLINE, NOT A FLAT LINE', { size: 23, weight: 800, anchor: 'middle', fill: ENG.gold, font: FB });
  E('line', { x1: -330, y1: 86, x2: 330, y2: 86, stroke: '#7F9BB2', 'stroke-width': 3 }, g);
  const bars = [[22, '#5AB4E0', '22w'], [18, '#5AB4E0', '18w'], [25, '#5AB4E0', '25w'], [2, '#F06A8A', 'Silence.'], [15, '#5AB4E0', '15w'], [3, '#FFB547', '3 words.']];
  const els = bars.map(([v, col, lb], i) => {
    const x = -285 + i * 110, bh = Math.max(12, v * 5.8);
    const r = E('rect', { x: x - 34, y: 86 - bh, width: 68, height: bh, rx: 6, fill: col, stroke: '#FFFFFF', 'stroke-width': 2 }, g);
    const t1 = T(g, x, 116, lb, { size: 20, weight: 700, anchor: 'middle', fill: col === '#5AB4E0' ? '#DDE7EF' : col, font: FB });
    return { r, t1, bh };
  });
  g.set = p => els.forEach((b, i) => {
    const q = clamp(p * 6 - i);
    attr(b.r, 'height', b.bh * q);
    attr(b.r, 'y', 86 - b.bh * q);
    op(b.t1, q);
  });
  g.set(1);
  return g;
}
