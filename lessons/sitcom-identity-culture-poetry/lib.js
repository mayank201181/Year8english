/* HOME IS WHERE THE KOPI IS (All the School's a Stage, Ep 8): Lexi, Suitcase, Singapore hawker set & props.
   Bundled after lib.js, kit.js, sitcom.js and english.js. Every top-level name starts with `idc`, except `cast`. */

ENG_TINT.lexi = ['#2D183C', '#562D70'];
ENG_TINT.suitcase = ['#2E2115', '#5C422A'];

function cast(parent, kind, o) {
  o = o || {};
  if (kind === 'lexi') {
    return scMake(parent, { s: o.s, mood: o.mood || 'happy', seed: 67, bob: 3.5,
      draw: g => {
        // Warm open dual-script dictionary/scroll ("Mother Tongue")
        E('rect', { x: -106, y: -96, width: 212, height: 196, rx: 14, fill: '#7A1E48', stroke: SC_INK, 'stroke-width': 5 }, g);
        // Left page (warm saffron/gold script flourishes) & Right page (English lines)
        E('path', { d: 'M-96,-86 Q-48,-96 0,-80 L0,88 Q-48,74 -96,86 Z', fill: '#FFF7E2', stroke: SC_INK, 'stroke-width': 3.5 }, g);
        E('path', { d: 'M96,-86 Q48,-96 0,-80 L0,88 Q48,74 96,86 Z', fill: '#FFFDF6', stroke: SC_INK, 'stroke-width': 3.5 }, g);
        // Decorative non-Latin script curls on left page, roman lines on right page
        E('path', { d: 'M-80,-56 L-22,-56 M-72,-56 Q-62,-36 -48,-46 Q-34,-34 -26,-52 M-78,42 Q-56,28 -30,44', fill: 'none', stroke: '#C2591B', 'stroke-width': 4, 'stroke-linecap': 'round' }, g);
        E('path', { d: 'M20,-54 L78,-54 M20,-34 L72,-34 M20,40 L76,40', fill: 'none', stroke: '#2B5B84', 'stroke-width': 4, 'stroke-linecap': 'round' }, g);
        // Gold bookmark ribbon hanging at bottom
        E('path', { d: 'M-8,86 L-14,132 L0,118 L14,132 L8,86 Z', fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 3 }, g);
        // Warm round brass spectacles over eyes
        [-27, 27].forEach(x => E('circle', { cx: x, cy: -8, r: 22, fill: 'rgba(255,255,255,0.18)', stroke: '#D49A12', 'stroke-width': 4.5 }, g));
        E('path', { d: 'M-5,-8 Q0,-14 5,-8', fill: 'none', stroke: '#D49A12', 'stroke-width': 4 }, g);
      },
      face: { x: 0, y: -8, eye: 14, gap: 54, mouthW: 36, mouthY: 36, lidCol: '#EAD7B7' } });
  }
  if (kind === 'suitcase') {
    return scMake(parent, { s: o.s, mood: o.mood || 'neutral', seed: 71, bob: 2,
      draw: g => {
        // Handle on top
        E('path', { d: 'M-38,-92 L-38,-120 Q0,-130 38,-120 L38,-92', fill: 'none', stroke: '#5A3618', 'stroke-width': 12, 'stroke-linecap': 'round' }, g);
        // Vintage leather body
        E('rect', { x: -104, y: -92, width: 208, height: 188, rx: 22, fill: linGrad('#A66A38', '#6E421F', true), stroke: SC_INK, 'stroke-width': 5 }, g);
        // Leather straps & brass buckles
        [-64, 64].forEach(x => {
          E('rect', { x: x - 10, y: -92, width: 20, height: 188, fill: '#4A2B12', stroke: SC_INK, 'stroke-width': 3 }, g);
          E('rect', { x: x - 14, y: -20, width: 28, height: 22, rx: 4, fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 3 }, g);
        });
        // Travel stickers (SG, LDN, HYD, NYC)
        const st1 = G(g); tr(st1, -32, -62, 1, -10);
        E('rect', { x: -24, y: -14, width: 48, height: 28, rx: 6, fill: '#E8424F', stroke: '#FFFFFF', 'stroke-width': 2.5 }, st1);
        T(st1, 0, 7, 'SG', { size: 18, weight: 800, anchor: 'middle', fill: '#FFFFFF' });
        const st2 = G(g); tr(st2, 30, -60, 1, 8);
        E('rect', { x: -28, y: -14, width: 56, height: 28, rx: 6, fill: '#5AB4E0', stroke: '#FFFFFF', 'stroke-width': 2.5 }, st2);
        T(st2, 0, 7, 'LDN', { size: 17, weight: 800, anchor: 'middle', fill: '#0E2436' });
        const st3 = G(g); tr(st3, -24, 64, 1, 6);
        E('rect', { x: -28, y: -14, width: 56, height: 28, rx: 6, fill: '#56D69B', stroke: '#FFFFFF', 'stroke-width': 2.5 }, st3);
        T(st3, 0, 7, 'HYD', { size: 17, weight: 800, anchor: 'middle', fill: '#0E2E1E' });
        const st4 = G(g); tr(st4, 34, 64, 1, -7);
        E('rect', { x: -28, y: -14, width: 56, height: 28, rx: 6, fill: '#B58CFF', stroke: '#FFFFFF', 'stroke-width': 2.5 }, st4);
        T(st4, 0, 7, 'NYC', { size: 17, weight: 800, anchor: 'middle', fill: '#1E1038' });
      },
      face: { x: 0, y: -6, eye: 15, gap: 46, mouthW: 34, mouthY: 32, lidCol: '#8C562B' } });
  }
  return engCast(parent, kind, o);
}

/* Custom Singapore Hawker Centre set at 7 p.m. */
function idcHawker(parent) {
  const g = G(parent);
  // Warm tropical dusk sky glimpsed at sides + sheltered high hawker roof
  E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: linGrad('#2B1D38', '#4A2C40', true) }, g);
  E('path', { d: 'M0,0 L1200,0 L1200,130 L0,130 Z', fill: '#1E2836', stroke: '#0F1722', 'stroke-width': 4 }, g);
  // Ceiling fans spinning under the shelter
  const fans = [];
  [[280, 58], [920, 58]].forEach(([x, y]) => {
    const f = G(g); tr(f, x, y);
    E('rect', { x: -4, y: -58, width: 8, height: 50, fill: '#7C8B99' }, f);
    const bl = G(f);
    for (let k = 0; k < 3; k++) E('path', { d: 'M0,0 C22,-16 86,-20 98,-5 C86,9 22,10 0,0 Z', fill: '#DCE6F0', stroke: SC_INK, 'stroke-width': 2.5, transform: `rotate(${k * 120})` }, bl);
    E('circle', { r: 12, fill: '#9AA8B6', stroke: SC_INK, 'stroke-width': 3 }, f);
    fans.push(bl);
  });
  //Tiled back wall + two glowing hawker stalls
  E('rect', { x: 40, y: 130, width: 1120, height: 420, fill: '#EAE2D3', stroke: '#9E9482', 'stroke-width': 4 }, g);
  const stall = (x, w, col, num, title, sub) => {
    const s = G(g); tr(s, x, 155);
    E('rect', { x: 0, y: 0, width: w, height: 360, fill: '#261C18', stroke: SC_INK, 'stroke-width': 4 }, s);
    E('rect', { x: 8, y: 8, width: w - 16, height: 86, rx: 8, fill: col, stroke: '#FFFFFF', 'stroke-width': 4 }, s);
    T(s, 24, 42, num, { size: 22, weight: 800, fill: '#FFE45C', font: FB });
    T(s, w / 2, 50, title, { size: 32, weight: 800, anchor: 'middle', fill: '#FFFFFF' });
    T(s, w / 2, 80, sub, { size: 20, weight: 700, anchor: 'middle', fill: '#FFF3C4', font: FB });
    E('rect', { x: 0, y: 245, width: w, height: 115, fill: '#C9D3DC', stroke: SC_INK, 'stroke-width': 4 }, s);
    return s;
  };
  const sKopi = stall(90, 480, '#1E7A5A', '#01-18', 'UNCLE KOPI & TEH', 'Kopi-O Kosong · Kaya Toast');
  stall(630, 480, '#B83227', '#01-19', 'HAINANESE CHICKEN RICE', 'Steamed · Roasted · Lime Juice');
  // Tall brass/steel kopi pot + steam on counter
  E('path', { d: 'M360,400 L372,320 L414,320 L426,400 Z', fill: '#D8E2EC', stroke: SC_INK, 'stroke-width': 3.5 }, g);
  E('path', { d: 'M372,340 L336,318', stroke: '#D8E2EC', 'stroke-width': 8, 'stroke-linecap': 'round' }, g);
  const steam = heatWaves(g, { n: 3, h: 55, spacing: 16, width: 4, color: '#FFFFFF' }); tr(steam, 392, 310);

  // Hawker floor + iconic round yellow fibreglass table with tissue packet & floral kopi cup
  E('rect', { x: 0, y: 550, width: 1200, height: 200, fill: '#8A8275' }, g);
  const tbl = G(g); tr(tbl, 600, 640);
  E('rect', { x: -24, y: -10, width: 48, height: 120, fill: '#5A6570', stroke: SC_INK, 'stroke-width': 4 }, tbl);
  E('ellipse', { cx: 0, cy: -14, rx: 250, ry: 44, fill: '#F2C138', stroke: SC_INK, 'stroke-width': 5 }, tbl);
  // Tissue packet ("choped!")
  const tis = G(tbl); tr(tis, -95, -24, 1, -8);
  E('rect', { x: -34, y: -16, width: 68, height: 32, rx: 6, fill: '#FFFFFF', stroke: '#2E7DD8', 'stroke-width': 3 }, tis);
  T(tis, 0, 6, 'TISSUE', { size: 15, weight: 800, anchor: 'middle', fill: '#2E7DD8', font: FB });
  // Traditional green-rimmed kopi cup & saucer
  const cup = G(tbl); tr(cup, 88, -28);
  E('ellipse', { cx: 0, cy: 16, rx: 34, ry: 9, fill: '#FFFFFF', stroke: '#1E7A5A', 'stroke-width': 3 }, cup);
  E('path', { d: 'M-22,-22 L22,-22 L18,14 L-18,14 Z', fill: '#FFFDF7', stroke: SC_INK, 'stroke-width': 3 }, cup);
  E('ellipse', { cx: 0, cy: -22, rx: 22, ry: 6, fill: '#2B160C', stroke: SC_INK, 'stroke-width': 2.5 }, cup);
  E('circle', { cx: 0, cy: -2, r: 7, fill: '#D93848' }, cup);

  g.table = [600, 610];
  g.sKopi = sKopi;
  g.upd = t => {
    fans.forEach((bl, i) => bl.setAttribute('transform', `scale(1 0.26) rotate(${((t * 260 + i * 60) % 360).toFixed(1)})`));
    steam.upd(t);
  };
  g.upd(0);
  return g;
}

function idcRating(parent) {
  const g = G(parent);
  E('rect', { x: -150, y: -46, width: 300, height: 104, rx: 18, fill: 'rgba(18,14,38,0.94)', stroke: ENG.violet, 'stroke-width': 3 }, g);
  T(g, 0, -14, "MEI'S REVIEW", { size: 22, weight: 800, anchor: 'middle', fill: ENG.violet, ls: 2, font: FB });
  const st = engStars(g, { size: 40 }); tr(st, 0, 26);
  g.set = (n, p) => { op(g, p === undefined ? 1 : p); st.set(n); };
  g.set(1, 0);
  return g;
}

/* Integrated comparison Venn diagram: We Wear the Mask vs Half-Caste */
function idcVenn(parent) {
  const g = G(parent);
  E('rect', { x: -345, y: -170, width: 690, height: 340, rx: 22, fill: 'rgba(16,14,38,0.95)', stroke: ENG.violet, 'stroke-width': 4 }, g);
  T(g, 0, -130, 'INTEGRATED COMPARISON: MESSAGE & METHOD', { size: 24, weight: 800, anchor: 'middle', fill: '#FFE45C' });
  E('circle', { cx: -115, cy: 18, r: 128, fill: 'rgba(90,180,224,0.25)', stroke: '#5AB4E0', 'stroke-width': 4 }, g);
  E('circle', { cx: 115, cy: 18, r: 128, fill: 'rgba(240,106,138,0.25)', stroke: ENG.rose, 'stroke-width': 4 }, g);
  T(g, -170, -76, 'We Wear the Mask', { size: 21, weight: 800, anchor: 'middle', fill: '#9FD8FF' });
  ['hides pain', 'collective "we"', 'strict rondeau', 'Standard English'].forEach((s, i) => T(g, -172, -32 + i * 32, s, { size: 19, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB }));
  T(g, 170, -76, 'Half-Caste', { size: 21, weight: 800, anchor: 'middle', fill: '#FFB3C6' });
  ['confronts openly', '"I" and "yu"', 'free verse', 'Creole spelling'].forEach((s, i) => T(g, 172, -32 + i * 32, s, { size: 19, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB }));
  T(g, 0, -34, 'BOTH', { size: 20, weight: 800, anchor: 'middle', fill: '#FFE45C' });
  ['prejudice', 'repetition', 'pride'].forEach((s, i) => T(g, 0, 0 + i * 30, s, { size: 19, weight: 800, anchor: 'middle', fill: '#FFE6A8', font: FB }));
  return g;
}
