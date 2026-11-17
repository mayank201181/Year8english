/* Ep 2, Scene 3: Power, magic & 'My liberty'. Cloak, staff & books -> "A prince of power" (enjambment + plosive p
   alliteration) -> Kevin spots Prospero's angry interrupted dashes -> Ariel demands "My liberty." (4-syllable short
   line) -> Prospero threatens the split oak -> Wise father-ruler vs controlling tyrant balance -> 2 stars. */
scene('magic', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('isl', tmpIsland(d.bg), (t, g) => g.upd(t, t >= at('oak') && t < at('tyrant') ? 0.55 : 0));

  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), kev = d.who('kevin');
  const pros = d.who('prospero'), ari = d.who('ariel');

  const c32 = pill('Singapore: 32°C · Prospero: still in velvet wizard cloak', { size: 28, stroke: '#FF8A3D' });
  const sym3 = ['MAGIC CLOAK', 'WOODEN STAFF', 'SECRET BOOKS'].map(s =>
    pill(s, { size: 28, stroke: ENG.violet, color: '#E6D6FF' }));

  const qPrince = engQuote(d.fg, { text: 'Thy father was the Duke of Milan and / A prince of power.', who: 'Prospero', where: 'The Tempest, Act 1 Scene 2', w: 720, size: 38, hl: ['prince', 'power'] });
  const tEnj = engTech(d.fg, 'ENJAMBMENT + ALLITERATION', { kind: 'structure', def: "line break isolates 'prince of power'; plosive 'p' sounds proud", size: 32 });
  const cDash = engCard(d.fg, 'Broken syntax & dashes: **“— I pray thee, mark me —”**\n12 years later, Prospero is still too furious to finish a sentence!', { w: 760, size: 28, stroke: '#B58CFF' });

  const qLib = engQuote(d.fg, { text: 'My liberty.', who: 'Ariel', where: 'The Tempest, Act 1 Scene 2', w: 500, size: 52, hl: ['liberty'] });
  const tShort = engTech(d.fg, 'SHORT LINE', { kind: 'structure', def: '4 syllables — leaves a tense, defiant silence', size: 34 });
  const cOak = engCard(d.fg, 'Prospero’s threat: **“rend an oak / And peg thee in his knotty entrails”** for **12 winters**', { w: 780, size: 28, icon: 'cross', stroke: C.bad });

  /* Wise ruler vs Tyrant balance */
  const scaleG = G(d.fg);
  E('rect', { x: -410, y: -125, width: 820, height: 250, rx: 22, fill: 'rgba(14,24,40,0.95)', stroke: ENG.gold, 'stroke-width': 4 }, scaleG);
  T(scaleG, 0, -74, 'WEIGH BOTH SIDES IN YOUR ESSAY', { size: 28, weight: 800, anchor: 'middle', fill: ENG.gold, ls: 1 });
  E('rect', { x: -370, y: -42, width: 330, height: 136, rx: 16, fill: 'rgba(86,214,155,0.14)', stroke: C.good, 'stroke-width': 3 }, scaleG);
  T(scaleG, -205, 4, 'WISE FATHER-RULER', { size: 28, weight: 800, anchor: 'middle', fill: C.good });
  T(scaleG, -205, 46, 'protects Miranda · forgives', { size: 24, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
  T(scaleG, 0, 34, '⚖', { size: 52, anchor: 'middle', fill: ENG.gold });
  E('rect', { x: 40, y: -42, width: 330, height: 136, rx: 16, fill: 'rgba(255,96,112,0.14)', stroke: C.bad, 'stroke-width': 3 }, scaleG);
  T(scaleG, 205, 4, 'CONTROLLING TYRANT', { size: 28, weight: 800, anchor: 'middle', fill: C.bad });
  T(scaleG, 205, 46, 'enslaves Caliban · rules by fear', { size: 24, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });

  const rating = tmpRating(d.fg);

  d.shot(0, { set: 'isl', cast: { prospero: { x: 260, y: 460, s: 1.0, mood: 'smug', sweat: 1 }, nib: { x: 980, y: 490, s: 0.88, mood: 'smug' } } })
    .shot(at('prince') - 0.05, { set: 'isl', cast: { prospero: { x: 220, y: 460, s: 0.95, mood: 'smug' }, mrh: { x: 1030, y: 500, s: 0.88, mood: 'neutral' } } })
    .shot(at('dashes') - 0.05, { set: 'isl', cast: { kevin: { x: 220, y: 500, s: 0.82, mood: 'shock', sweat: 1 }, prospero: { x: 1010, y: 460, s: 0.9, mood: 'annoyed' } } })
    .shot(at('liberty') - 0.05, { set: 'isl', cast: { ariel: { x: 260, y: 390, s: 0.98, mood: 'annoyed' }, nib: { x: 1030, y: 500, s: 0.82, mood: 'smug' } } })
    .shot(at('oak') - 0.05, { set: 'isl', cam: [1, 1.07, 320, 440], cast: { prospero: { x: 280, y: 450, s: 1.05, mood: 'annoyed' }, ariel: { x: 930, y: 400, s: 0.92, mood: 'shock' } } })
    .shot(at('tyrant') - 0.05, { set: 'isl', cast: { mei: { x: 220, y: 510, s: 0.98, mood: 'shock' }, mrh: { x: 1030, y: 500, s: 0.9, mood: 'neutral', mug: 1 } } })
    .shot(at('two') - 0.05, { set: 'isl', cast: { mei: { x: 320, y: 500, s: 1.1, mood: 'deadpan', phone: 1 }, prospero: { x: 880, y: 460, s: 0.95, mood: 'annoyed' } } });

  d.shake(mid('oak', 0.5), 9);

  d.pop(c32, at('props') + 0.08, end('props') + 0.2, 620, 140);
  sym3.forEach((p, i) => d.pop(p, mid('symbols', 0.1 + i * 0.18), end('symbols') + 0.2, 620, 195 + i * 78));

  d.pop(qPrince, at('prince') + 0.05, end('plosive') + 0.2, 620, 220);
  d.pop(tEnj, at('plosive') + 0.08, end('plosive') + 0.25, 620, 445);
  d.pop(cDash, at('dashes') + 0.08, end('dashes') + 0.25, 620, 310);

  d.pop(qLib, mid('liberty', 0.5), end('shortline') + 0.25, 630, 230);
  d.pop(tShort, at('shortline') + 0.08, end('shortline') + 0.25, 630, 445);
  d.pop(cOak, mid('oak', 0.35), end('oak') + 0.25, 630, 215);

  d.pop(scaleG, at('debate') + 0.06, end('debate') + 0.25, 620, 310);

  return t => {
    d.upd(t);
    qPrince.mark(-1, P(t, mid('plosive', 0.4), 0.4));
    qLib.mark(0, P(t, at('shortline'), 0.35));
    const rv = win(t, at('two'), S.D + 1, 0.25);
    rating.set(1 + P(t, mid('two', 0.15), 0.45, linear), rv); tr(rating, 1030, 74);
  };
});
