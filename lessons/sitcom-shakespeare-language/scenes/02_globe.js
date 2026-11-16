/* Scene 2: This wooden O. Will glows and takes Mei to 1599: the Globe from the Thames (flag = a play today) ->
   inside: "this wooden O", the groundlings (a penny to stand), the thrust stage (audience on three sides),
   heckling, daylight and word scenery (Macbeth), Robert the boy Juliet (women could not act until 1660),
   the 1613 fire ("a SPECIAL EFFECT") -> two stars. */
scene('globe', S => {
  const { at, end, mid } = S;
  const AMP = S.reduce ? 0.3 : 1;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.9)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('lib', engLibrary(d.bg), (t, g) => g.upd(t, 0.5));
  const out = d.add('out', engGlobeOutside(d.bg));
  let rowdy = 0;
  const globe = d.add('globe', engGlobe(d.bg), (t, g) => g.upd(t, rowdy));
  // the fire: flames along the thatch of the galleries (inside) and the roof (outside)
  const flamesIn = [osFlames(d.bg, 300), osFlames(d.bg, 300)];
  const dusk = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#0A0A30', opacity: 0 }, d.bg);
  // Robert, the boy actor, on the balcony
  const robert = G(d.bg);
  E('path', { d: 'M-40,90 L-26,10 L26,10 L40,90 Z', fill: '#F06A8A', stroke: SC_INK, 'stroke-width': 3 }, robert);
  E('circle', { cx: 0, cy: -10, r: 22, fill: '#F1C7A8', stroke: SC_INK, 'stroke-width': 3 }, robert);
  E('path', { d: 'M-24,-14 Q-26,-40 0,-38 Q26,-40 24,-14 Q30,20 20,30 L20,-10 Q0,-24 -20,-10 L-20,30 Q-30,20 -24,-14 Z', fill: '#E2B33C', stroke: SC_INK, 'stroke-width': 2.5 }, robert);   // wig
  E('circle', { cx: -8, cy: -10, r: 3, fill: SC_INK }, robert); E('circle', { cx: 8, cy: -10, r: 3, fill: SC_INK }, robert);
  E('path', { d: 'M-6,2 Q0,6 6,2', fill: 'none', stroke: SC_INK, 'stroke-width': 2.5 }, robert);
  const robArm = E('path', { d: '', fill: 'none', stroke: '#F1C7A8', 'stroke-width': 9, 'stroke-linecap': 'round' }, robert);
  op(robert, 0);
  // hazelnut shell
  const nut = G(d.cast);
  E('ellipse', { rx: 14, ry: 11, fill: '#A0662E', stroke: SC_INK, 'stroke-width': 3 }, nut);
  E('path', { d: 'M-8,-6 Q0,-12 8,-6', fill: 'none', stroke: '#E0B080', 'stroke-width': 2 }, nut);

  const mei = d.who('mei'), will = d.who('will'), nib = d.who('nib');
  const flash = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#E6F4FF', opacity: 0 }, d.hud);

  /* labels */
  const c1599 = pill('1599', { size: 44 });
  const cBank = pill('Bankside · the south bank of the Thames', { stroke: '#5AB4E0' });
  const qO = engQuote(d.fg, { text: 'this wooden O', who: 'Chorus', where: 'Henry V, Prologue', w: 560, size: 50 });
  const flagA = arrow(d.fg, 760, 210, 640, 120, { color: '#FFFFFF', width: 6 });
  const cFlag = pill('flag up = a play today', { stroke: '#E8424F' });
  const c3000 = pill('≈ 3,000 people', { size: 34 });
  const cGround = pill('GROUNDLINGS: 1 penny to stand in the yard', { size: 32, stroke: '#FFD23F' });
  const penny = G(d.fg);
  E('circle', { r: 44, fill: ball('#E8A060', '#9C5A2A'), stroke: SC_INK, 'stroke-width': 4 }, penny);
  T(penny, 0, 14, '1d', { size: 38, weight: 800, anchor: 'middle', fill: '#5A2A0A' });
  const cMrt = pill('the MRT at rush hour, but with murders', { size: 28, stroke: ENG.rose });
  const tThrust = engTech(d.fg, 'THRUST STAGE', { kind: 'drama', def: 'audience on three sides' });
  const sideArrows = G(d.fg);
  [[110, 620, 300, 560], [600, 735, 600, 640], [1090, 620, 900, 560]].forEach(([a, b, c, e]) => arrow(sideArrows, a, b, c, e, { color: ENG.gold, width: 9 }));
  const cDay = pill('afternoon · daylight · almost no scenery', { size: 30, stroke: '#FFD23F' });
  const sunG = sun(d.fg, 46);
  const qNight = engQuote(d.fg, { text: "Now o'er the one half-world / Nature seems dead", who: 'Macbeth', where: 'Macbeth, Act 2 Scene 1', w: 680, size: 40, hl: ['dead'] });
  const tWord = engTech(d.fg, 'WORD SCENERY', { kind: 'drama', def: 'the language paints time, place, mood' });
  const cRob = pill('ROBERT, 13', { size: 30, stroke: ENG.rose });
  const c1660 = pill('women could not act on the public stage until 1660', { size: 28, stroke: ENG.rose });
  const cBoy = pill('every female role: a boy actor', { size: 30, stroke: ENG.rose });
  const c1613 = pill('1613: a stage cannon sets the thatch alight', { size: 30, stroke: '#FF8A3D' });
  const stEff = engStamp(d.fg, 'SPECIAL EFFECT', '#FF8A3D');
  const rating = osRating(d.fg);

  /* shots */
  const cOut = at('bankside') - 0.05, cIn = at('woodeno') - 0.05, cOut2 = at('flag') - 0.05, cIn2 = at('yard') - 0.05;
  d.shot(0, { set: 'lib', cast: { will: { x: 760, y: 400, s: 1.0, mood: 'happy' }, mei: { x: 300, y: 500, s: 1.0, mood: 'shock' } } })
    .shot(cOut, { set: 'out', cam: [1, 1.05, 600, 350] })
    .shot(cIn, { set: 'globe', cast: { will: { x: 600, y: 400, s: 0.8, mood: 'happy' } } })
    .shot(cOut2, { set: 'out', cam: [1.05, 1.1, 600, 300] })
    .shot(cIn2, { set: 'globe', cam: [1.05, 1.1, 600, 600] })
    .shot(at('mrt') - 0.05, { set: 'globe', cam: [1.1, 1.1, 600, 600], cast: { mei: { x: 1000, y: 560, s: 0.85, mood: 'annoyed' } } })
    .shot(at('thrust') - 0.05, { set: 'globe', cast: { nib: { x: 1110, y: 340, s: 0.6, mood: 'smug' } } })
    .shot(at('heckle') - 0.05, { set: 'globe', cast: { will: { x: 600, y: 400, s: 0.75, mood: 'happy' } } })
    .shot(at('lights') - 0.05, { set: 'globe', cast: { mei: { x: 1000, y: 560, s: 0.85, mood: 'neutral' }, will: { x: 380, y: 400, s: 0.75, mood: 'neutral' } } })
    .shot(at('scenery') - 0.05, { set: 'globe', cast: { nib: { x: 1110, y: 360, s: 0.6, mood: 'smug' } } })
    .shot(at('robert') - 0.05, { set: 'globe', cam: [1.2, 1.35, 600, 260], cast: { will: { x: 300, y: 390, s: 0.7, mood: 'smug' } } })
    .shot(at('boys') - 0.05, { set: 'globe', cam: [1.35, 1.35, 600, 260] })
    .shot(at('fire') - 0.05, { set: 'globe', cam: [1, 1.04, 600, 375] })
    .shot(at('review') - 0.05, { set: 'globe', cast: { mei: { x: 330, y: 520, s: 1.05, mood: 'deadpan' }, will: { x: 860, y: 420, s: 0.9, mood: 'shock' } } })
    .shot(at('two') - 0.05, { set: 'lib', cast: { mei: { x: 360, y: 500, s: 1.1, mood: 'happy', phone: 1 }, will: { x: 860, y: 400, s: 0.9, mood: 'happy' } } });
  d.mood('will', mid('heckle', 0.6), 'annoyed').mood('will', at('lights'), 'neutral');
  d.mood('will', mid('effect', 0.35), 'annoyed');
  d.x('will', 0, { glow: 1 }).x('will', at('woodeno'), { glow: 0 }).x('will', at('effect'), { glow: 1 }).x('will', at('two'), { glow: 0 });
  d.shake(at('fire') + 0.4, 12);

  d.pop(c1599, at('bankside') + 0.05, end('bankside') + 0.2, 600, 140);
  d.pop(cBank, mid('bankside', 0.45), end('bankside') + 0.2, 600, 680);
  d.pop(qO, mid('woodeno', 0.55), end('woodeno') + 0.25, 600, 250);
  d.pop(cFlag, mid('flag', 0.55), end('flag') + 0.2, 900, 210);
  d.pop(c3000, mid('flag', 0.05), end('flag') + 0.2, 600, 680);
  d.pop(cGround, mid('yard', 0.3), end('mrt') + 0.2, 600, 120);
  d.pop(penny, mid('yard', 0.6), end('mrt') + 0.2, 160, 260);
  d.pop(cMrt, mid('mrt', 0.45), end('mrt') + 0.2, 640, 230);
  d.pop(tThrust, at('thrust') + 0.1, end('thrust') + 0.2, 600, 150);
  d.pop(sideArrows, mid('thrust', 0.35), end('thrust') + 0.2, 0, 0);
  d.pop(cDay, mid('daylight', 0.1), end('daylight') + 0.2, 600, 150);
  d.pop(sunG, mid('daylight', 0.05), end('daylight') + 0.2, 1060, 120);
  d.pop(qNight, at('scenery') - 0.05, end('scenery') + 0.3, 560, 300);
  d.pop(tWord, mid('scenery', 0.35), end('scenery') + 0.3, 560, 560);
  d.pop(cRob, mid('robert', 0.65), end('robert') + 0.2, 600, 120);
  d.pop(c1660, at('boys') + 0.05, end('boys') + 0.2, 600, 560);
  d.pop(cBoy, mid('boys', 0.6), end('boys') + 0.2, 600, 640);
  d.pop(c1613, at('fire') + 0.05, end('fire') + 0.2, 600, 680);
  d.pop(stEff, mid('effect', 0.45), end('effect') + 0.4, 600, 200, 0.85);

  return t => {
    const sh = d.upd(t);
    // the time-travel flash (on "Fifteen ninety-nine") and back
    attr(flash, 'opacity', Math.max(win(t, cOut - 0.25, cOut + 0.2, 0.25), win(t, at('two') - 0.3, at('two') + 0.15, 0.2)) * 0.9);
    // the crowd: rowdy while heckling and during the fire
    rowdy = Math.max(win(t, at('heckle'), end('heckle') + 0.6, 0.3), win(t, at('fire') + 0.3, end('effect'), 0.3));
    // the hazelnut shell, thrown at Will on "heckled"
    const nt = (t - mid('heckle', 0.35)) / 0.7;
    op(nut, nt > 0 && nt < 1.4 && sh.spec.set === 'globe' ? 1 : 0);
    if (nt > 0 && nt < 1.4) { const q = Math.min(nt, 1); tr(nut, lerp(300, 590, q), lerp(700, 380, q) - Math.sin(q * Math.PI) * 160 + (nt > 1 ? (nt - 1) * 400 : 0), 1, t * 600); }
    // word scenery: the sky darkens while Macbeth's line is on screen
    attr(dusk, 'opacity', 0.45 * win(t, mid('scenery', -0.6), end('scenery') + 0.2, 0.5) * (sh.spec.set === 'globe' ? 1 : 0));
    // the qO card and the flag arrow
    flagA.set(P(t, mid('flag', 0.5), 0.4)); op(flagA, win(t, mid('flag', 0.5), end('flag') + 0.2, 0.2));
    // Robert waves from the balcony
    const rb = sh.spec.set === 'globe' && t >= at('robert') - 0.05 && t < at('fire') ? 1 : 0;
    op(robert, rb);
    if (rb) { tr(robert, 600, 150, 1.0); robArm.setAttribute('d', `M18,24 Q40,${(0 - 18 * Math.sin(t * 8)).toFixed(1)} 44,${(-30 + 10 * Math.sin(t * 8)).toFixed(1)}`); }
    // fire on the thatch (inside view: along the gallery roofs)
    const fk = P(t, mid('fire', 0.3), 1.2, easeOut) * (t < at('two') - 0.05 ? 1 : 0) * (sh.spec.set === 'globe' ? 1 : 0);
    flamesIn.forEach((f, i) => { op(f, fk > 0.01 ? 1 : 0); if (fk > 0.01) { tr(f, i ? 1060 : 140, 160, 1); f.upd(t, fk); } });
    const rv = win(t, mid('two', 0.2), S.D + 1, 0.25);
    rating.set(1 + P(t, mid('two', 0.25), 0.5, linear), rv); tr(rating, 1030, 74);
  };
});
