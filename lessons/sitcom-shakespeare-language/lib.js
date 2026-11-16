/* ONE STAR (All the School's a Stage, Ep 1): art shared by this episode's scenes.
   Bundled after lib.js, kit.js, sitcom.js and english.js. Every top-level name starts with `os`.
   The recurring cast, sets and English props are in english.js (engCast, engDirector, engQuote, ...).

     osRating(parent)          Mei's running review of Shakespeare, a badge for the top-right corner:
                               "MEI'S REVIEW" and five stars. g.set(n, p): n stars filled (fractions pop),
                               p 0..1 visibility. Place it at about (1040, 70).
     osFlames(parent, w)       a row of flickering flames about w wide and 120 tall, base at (0,0); g.upd(t, k 0..1)
     osTimeline(parent, items) a horizontal timeline, 1000 wide, origin at its left end. items: [[year, label], ...]
                               g.set(p) reveals it left to right; g.dot(i) -> [x, y] of item i's dot.
*/
function osRating(parent) {
  const g = G(parent);
  E('rect', { x: -150, y: -46, width: 300, height: 104, rx: 18, fill: 'rgba(14,24,40,0.92)', stroke: ENG.gold, 'stroke-width': 3 }, g);
  T(g, 0, -14, "MEI'S REVIEW", { size: 22, weight: 800, anchor: 'middle', fill: ENG.gold, ls: 2, font: FB });
  const st = engStars(g, { size: 40 }); tr(st, 0, 26);
  g.set = (n, p) => { op(g, p === undefined ? 1 : p); st.set(n); };
  g.set(1, 0);
  return g;
}
function osFlames(parent, w) {
  const g = G(parent), fl = [], r = rng(13), n = Math.max(3, Math.round(w / 60));
  for (let k = 0; k < n; k++) {
    const f = G(g), x = -w / 2 + (k + 0.5) * w / n;
    const outer = E('path', { d: 'M0,0 C-34,0 -40,-40 -22,-70 C-12,-88 -14,-104 -10,-122 C8,-100 26,-80 30,-50 C36,-20 26,0 0,0 Z', fill: '#FF8A3D', stroke: '#C2451A', 'stroke-width': 3 }, f);
    E('path', { d: 'M0,0 C-18,0 -22,-24 -12,-42 C-6,-54 -4,-64 -2,-74 C10,-60 18,-46 18,-28 C18,-10 12,0 0,0 Z', fill: '#FFE45C' }, f);
    fl.push({ f, x, ph: r() * 6, s: 0.6 + r() * 0.5, outer });
  }
  g.upd = (t, k) => { k = k === undefined ? 1 : k; fl.forEach(({ f, x, ph, s }) => f.setAttribute('transform', `translate(${x.toFixed(1)} 0) scale(${(s * k * (0.9 + 0.12 * Math.sin(t * 9 + ph))).toFixed(3)} ${(s * k * (0.85 + 0.25 * Math.sin(t * 7 + ph * 2))).toFixed(3)})`)); };
  g.upd(0, 1);
  return g;
}
function osTimeline(parent, items) {
  const g = G(parent), n = items.length, span = 1000;
  const line = E('line', { x1: 0, y1: 0, x2: 0, y2: 0, stroke: ENG.gold, 'stroke-width': 8, 'stroke-linecap': 'round' }, g);
  const its = items.map(([year, label], i) => {
    const x = n > 1 ? i * span / (n - 1) : 0, it = G(g); tr(it, x, 0);
    E('circle', { r: 16, fill: ENG.rose, stroke: '#FFFFFF', 'stroke-width': 4 }, it);
    T(it, 0, -34, year, { size: 34, weight: 800, anchor: 'middle', fill: '#FFFFFF' });
    String(label).split('\n').forEach((l, k) => T(it, 0, 56 + k * 32, l, { size: 26, weight: 700, anchor: 'middle', fill: '#DDE7EF', font: FB }));
    return { it, x };
  });
  g.set = p => { p = clamp(p); attr(line, 'x2', span * p); its.forEach(({ it, x }) => op(it, clamp((p * span - x) / 60 + 1))); };
  g.dot = i => [its[i].x, 0];
  g.set(1);
  return g;
}
