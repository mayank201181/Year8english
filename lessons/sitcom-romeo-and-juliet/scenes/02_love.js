/* Ep 4, Scene 2: Love — Petrarchan clichés for Rosaline ("cold fire, sick health") vs the shared sonnet in Act 1
   Scene 5 ("two blushing pilgrims") -> Act 2 Scene 2 orchard window ("balcony" never appears!), "Juliet is the sun",
   "wherefore = WHY", "What's in a name?", and "Too like the lightning" -> 2 stars. */
scene('love', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  let nightAmt = 0;
  d.add('ver', rjVerona(d.bg), (t, g) => g.upd(t, nightAmt));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib');
  const rom = d.who('romeo'), jul = d.who('juliet');

  const tPet = engTech(d.fg, 'PETRARCHAN LOVE & OXYMORON', { kind: 'language', def: "one-sided pose + opposite words ('cold fire, sick health')", size: 32 });
  const qPil = engQuote(d.fg, { text: 'My lips, two blushing pilgrims, ready stand / To smooth that rough touch with a tender kiss.', who: 'Romeo (shared sonnet with Juliet)', where: 'Romeo and Juliet, Act 1 Scene 5', w: 750, size: 34, hl: ['pilgrims', 'kiss'] });
  const cSac = engCard(d.fg, '**Shared sonnet (14 lines)** + religious imagery (**pilgrim, shrine, saint, prayer**) = **mutual & sacred**!', { w: 790, size: 28, stroke: C.good, boldFill: C.good });

  const cWin = pill('Fact check: the word "BALCONY" never appears — it is a WINDOW!', { size: 28, stroke: '#7FD3FF', color: '#E6F4FF' });
  const qSun = engQuote(d.fg, { text: 'But soft, what light through yonder window breaks? / It is the East, and Juliet is the sun.', who: 'Romeo', where: 'Romeo and Juliet, Act 2 Scene 2', w: 750, size: 35, hl: ['light', 'window', 'sun'] });

  const qWhy = engQuote(d.fg, { text: 'O Romeo, Romeo, wherefore art thou Romeo?', who: 'Juliet', where: 'Romeo and Juliet, Act 2 Scene 2', w: 700, size: 38, hl: ['wherefore'] });
  const stWhy = engStamp(d.fg, 'WHEREFORE = WHY!', '#1E9E5A');

  const qRose = engQuote(d.fg, { text: "What's in a name? That which we call a rose / By any other word would smell as sweet.", who: 'Juliet', where: 'Romeo and Juliet, Act 2 Scene 2', w: 740, size: 35, hl: ['name', 'rose'] });
  const qLight = engQuote(d.fg, { text: "Too like the lightning, which doth cease to be / Ere one can say 'It lightens.'", who: 'Juliet', where: 'Romeo and Juliet, Act 2 Scene 2', w: 720, size: 35, hl: ['lightning'] });
  const tFore = engTech(d.fg, 'SIMILE + FORESHADOWING', { kind: 'structure', def: 'dazzling but brief — warns how fast their love will end', size: 33 });

  const rating = rjRating(d.fg);

  d.shot(0, { set: 'ver', cast: { nib: { x: 210, y: 490, s: 0.9, mood: 'smug', ink: 1 }, romeo: { x: 990, y: 490, s: 0.98, mood: 'sad' } } })
    .shot(at('feast') - 0.05, { set: 'ver', cast: { romeo: { x: 230, y: 490, s: 0.98, mood: 'happy' }, juliet: { x: 970, y: 490, s: 0.98, mood: 'happy' } } })
    .shot(at('sacred') - 0.05, { set: 'ver', cast: { mrh: { x: 200, y: 490, s: 0.95, mood: 'neutral', mug: 1 }, juliet: { x: 990, y: 490, s: 0.95, mood: 'happy' } } })
    .shot(at('nobalk') - 0.05, { set: 'ver', cast: { will: { x: 200, y: 420, s: 0.9, mood: 'smug' }, juliet: { x: 1015, y: 270, s: 0.72, mood: 'happy' } } })
    .shot(at('sun') - 0.05, { set: 'ver', cast: { romeo: { x: 220, y: 510, s: 0.98, mood: 'happy' }, juliet: { x: 1015, y: 270, s: 0.72, mood: 'happy' } } })
    .shot(at('lightning') - 0.05, { set: 'ver', cast: { nib: { x: 190, y: 500, s: 0.88, mood: 'smug' }, juliet: { x: 1015, y: 270, s: 0.72, mood: 'sad' } } })
    .shot(at('two') - 0.05, { set: 'ver', cast: { mei: { x: 320, y: 500, s: 1.1, mood: 'happy', phone: 1 }, romeo: { x: 880, y: 490, s: 0.98, mood: 'smug' } } });

  d.pop(tPet, at('petrarch') + 0.08, end('petrarch') + 0.25, 600, 260);
  d.pop(qPil, mid('feast', 0.35), end('shared') + 0.2, 600, 230);
  d.pop(cSac, at('sacred') + 0.08, end('sacred') + 0.25, 600, 275);

  d.pop(cWin, mid('nobalk', 0.3), end('nobalk') + 0.2, 540, 175);
  d.pop(qSun, at('sun') + 0.05, end('sun') + 0.25, 520, 260);

  d.pop(qWhy, mid('why', 0.2), end('why') + 0.25, 520, 225);
  d.pop(stWhy, mid('why', 0.65), end('why') + 0.25, 520, 425, 0.82);

  d.pop(qRose, at('rose') + 0.05, end('rose') + 0.25, 520, 250);
  d.pop(qLight, at('lightning') + 0.05, end('lightning') + 0.25, 535, 225);
  d.pop(tFore, mid('lightning', 0.45), end('lightning') + 0.25, 535, 450);

  return t => {
    d.upd(t);
    nightAmt = t >= at('nobalk') - 0.1 && t < at('two') - 0.05 ? 1 : (t >= at('feast') - 0.1 && t < at('nobalk') ? 0.55 : 0);
    qPil.mark(-1, P(t, at('shared'), 0.4));
    qSun.mark(-1, P(t, mid('sun', 0.45), 0.45));
    qWhy.mark(0, P(t, mid('why', 0.5), 0.35));
    qRose.mark(-1, P(t, mid('rose', 0.35), 0.4));
    qLight.mark(0, P(t, mid('lightning', 0.35), 0.35));
    const rv = win(t, at('two'), S.D + 1, 0.25);
    rating.set(1 + P(t, mid('two', 0.2), 0.45, linear), rv); tr(rating, 1030, 74);
  };
});
