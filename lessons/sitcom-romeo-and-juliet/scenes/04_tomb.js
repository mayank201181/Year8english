/* Ep 4, Scene 4: Patriarchy (Act 3 Scene 5: "disobedient wretch!"), Juliet's 42-hour potion soliloquy (Act 4 Scene 3),
   quarantined letter, Fate vs Free Will, and the tomb catastrophe & reconciliation (Act 5 Scene 3) -> 3 stars. */
scene('tomb', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('hall', engHall(d.bg), (t, g) => { g.upd(t); g.curtain(1); });
  d.add('ver', rjVerona(d.bg), (t, g) => g.upd(t, 1));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib');
  const rom = d.who('romeo'), jul = d.who('juliet');

  const tPat = engTech(d.fg, 'PATRIARCHY (ACT 3 SCENE 5)', { kind: 'context', def: 'fathers controlled daughters & arranged marriages; love required obedience', size: 32 });
  const qWretch = engQuote(d.fg, { text: "Hang thee, young baggage, disobedient wretch! / I tell thee what: get thee to church o' Thursday,", who: 'Lord Capulet', where: 'Romeo and Juliet, Act 3 Scene 5', w: 760, size: 34, hl: ['baggage', 'wretch'] });

  const cPot = pill('Act 4 Scene 3 · 42-hour sleeping potion · Abandoned by parents & Nurse', { size: 27, stroke: '#B58CFF', color: '#E6D6FF' });
  const qAlone = engQuote(d.fg, { text: 'My dismal scene I needs must act alone.', who: 'Juliet (soliloquy)', where: 'Romeo and Juliet, Act 4 Scene 3', w: 660, size: 38, hl: ['alone'] });

  const stPlg = engStamp(d.fg, 'LETTER QUARANTINED (PLAGUE!)', '#C62828');
  /* Fate vs Free Will balance */
  const fwG = G(d.fg);
  E('rect', { x: -410, y: -118, width: 820, height: 236, rx: 22, fill: 'rgba(14,24,40,0.95)', stroke: ENG.gold, 'stroke-width': 4 }, fwG);
  T(fwG, 0, -70, 'ARGUE BOTH WORKING TOGETHER', { size: 27, weight: 800, anchor: 'middle', fill: ENG.gold, ls: 1 });
  E('rect', { x: -375, y: -38, width: 340, height: 130, rx: 16, fill: 'rgba(90,180,224,0.15)', stroke: '#5AB4E0', 'stroke-width': 3 }, fwG);
  T(fwG, -205, 4, 'FATE', { size: 30, weight: 800, anchor: 'middle', fill: '#5AB4E0' });
  T(fwG, -205, 44, "'star-crossed' · plague quarantine", { size: 22, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
  T(fwG, 0, 30, '+', { size: 48, weight: 800, anchor: 'middle', fill: ENG.gold });
  E('rect', { x: 35, y: -38, width: 340, height: 130, rx: 16, fill: 'rgba(240,106,138,0.15)', stroke: ENG.rose, 'stroke-width': 3 }, fwG);
  T(fwG, 205, 4, 'HUMAN CHOICES & HASTE', { size: 28, weight: 800, anchor: 'middle', fill: ENG.rose });
  T(fwG, 205, 44, 'the feud · killing Tybalt · rushing', { size: 22, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });

  const qKiss = engQuote(d.fg, { text: 'Thus with a kiss I die.', who: 'Romeo (seconds before Juliet wakes!)', where: 'Romeo and Juliet, Act 5 Scene 3', w: 620, size: 42, hl: ['kiss', 'die'] });
  const qWoe = engQuote(d.fg, { text: 'For never was a story of more woe / Than this of Juliet and her Romeo.', who: 'Prince Escalus (final rhyming couplet)', where: 'Romeo and Juliet, Act 5 Scene 3', w: 740, size: 36, hl: ['woe', 'Juliet', 'Romeo'] });
  const rating = rjRating(d.fg);

  d.shot(0, { set: 'hall', cast: { mrh: { x: 200, y: 480, s: 0.98, mood: 'neutral', mug: 1 }, will: { x: 1000, y: 420, s: 0.9, mood: 'annoyed' } } })
    .shot(at('alone') - 0.05, { set: 'ver', cast: { juliet: { x: 240, y: 490, s: 1.0, mood: 'sad' } } })
    .shot(at('letter') - 0.05, { set: 'ver', cast: { mei: { x: 210, y: 510, s: 0.98, mood: 'shock' }, mrh: { x: 1010, y: 490, s: 0.92, mood: 'neutral' } } })
    .shot(at('kiss') - 0.05, { set: 'hall', cast: { romeo: { x: 220, y: 490, s: 0.98, mood: 'sad' }, nib: { x: 1010, y: 490, s: 0.88, mood: 'sad' } } })
    .shot(at('woe') - 0.05, { set: 'hall', cast: { will: { x: 220, y: 420, s: 0.92, mood: 'sad', glow: 0.6 } } })
    .shot(at('three') - 0.05, { set: 'hall', cast: { mei: { x: 320, y: 500, s: 1.1, mood: 'happy', phone: 1 }, will: { x: 880, y: 420, s: 0.95, mood: 'neutral' } } });

  d.pop(tPat, at('pat') + 0.08, end('pat') + 0.2, 600, 240);
  d.pop(qWretch, at('wretch') + 0.05, end('wretch') + 0.25, 600, 250);

  d.pop(cPot, at('alone') + 0.08, end('vial') + 0.2, 620, 165);
  d.pop(qAlone, mid('vial', 0.4), end('vial') + 0.25, 620, 355);

  d.pop(stPlg, mid('letter', 0.35), end('letter') + 0.25, 610, 260, 0.72);
  d.pop(fwG, at('debate') + 0.08, end('debate') + 0.25, 610, 285);

  d.pop(qKiss, mid('kiss', 0.35), end('peace') + 0.2, 610, 240);
  d.pop(qWoe, at('woe') + 0.05, end('woe') + 0.25, 620, 250);

  return t => {
    d.upd(t);
    qWretch.mark(-1, P(t, mid('wretch', 0.2), 0.4));
    qAlone.mark(0, P(t, mid('vial', 0.75), 0.3));
    qKiss.mark(-1, P(t, mid('kiss', 0.55), 0.35));
    qWoe.mark(-1, P(t, mid('woe', 0.25), 0.45));
    const rv = win(t, at('three'), S.D + 1, 0.25);
    rating.set(2 + P(t, mid('three', 0.15), 0.45, linear), rv); tr(rating, 1030, 74);
  };
});
