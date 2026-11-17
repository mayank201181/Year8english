/* Ep 2, Scene 5: Dreams, mercy & the PEEL ladder. Act 4 masque ("We are such stuff / As dreams are made on" +
   Globe pun) -> Act 5 Ariel teaches pity -> "The rarer action is / In virtue than in vengeance" -> breaks staff &
   drowns book -> Antonio silent + Miranda's "O brave new world" ("'Tis new to thee" dramatic irony) -> Epilogue ->
   Mei's 4-rung PEEL ladder zooming in on "sty" -> Mr H reaches for Mug 9. */
scene('mercy', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  let spotOn = 0;
  d.add('hall', engHall(d.bg), (t, g) => { g.upd(t); g.curtain(1); g.spot(spotOn, 340); });
  d.add('isl', tmpIsland(d.bg), (t, g) => g.upd(t, 0));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib');
  const pros = d.who('prospero'), ari = d.who('ariel'), mir = d.who('miranda');

  const cMasque = pill('Act 4 · Wedding masque broken off as spirits vanish', { stroke: ENG.violet, color: '#E6D6FF' });
  const qStuff = engQuote(d.fg, { text: 'We are such stuff / As dreams are made on, and our little life / Is rounded with a sleep.', who: 'Prospero', where: 'The Tempest, Act 4 Scene 1', w: 760, size: 35, hl: ['dreams', 'sleep'] });
  const tMeta = engTech(d.fg, 'METATHEATRE & PUN', { kind: 'drama', def: "'the great globe itself' = the Earth AND Shakespeare's Globe", size: 33 });

  const qTen = engQuote(d.fg, { text: 'Mine would, sir, were I human.', who: 'Ariel', where: 'The Tempest, Act 5 Scene 1', w: 620, size: 40, hl: ['human'] });
  const qRarer = engQuote(d.fg, { text: 'The rarer action is / In virtue than in vengeance', who: 'Prospero', where: 'The Tempest, Act 5 Scene 1', w: 700, size: 38, hl: ['virtue', 'vengeance'] });
  const qAbj = engQuote(d.fg, { text: 'But this rough magic / I here abjure', who: 'Prospero', where: 'The Tempest, Act 5 Scene 1', w: 620, size: 40, hl: ['rough', 'abjure'] });
  const cBreak = pill('Breaks staff · Drowns book', { size: 30, stroke: '#5AB4E0', color: '#D8F4FF' });

  const cAnt = pill('Uneasy edge: Antonio says NOTHING', { size: 30, stroke: C.bad, color: '#FFB3BA' });
  const qBrave = engQuote(d.fg, { text: "O brave new world, / That has such people in't!", who: 'Miranda', where: 'The Tempest, Act 5 Scene 1', w: 680, size: 38, hl: ['brave'] });
  const tIrony = engTech(d.fg, 'DRAMATIC IRONY', { kind: 'drama', def: "Prospero replies ''Tis new to thee' — we know Antonio is a traitor", size: 32 });

  const qEpi = engQuote(d.fg, { text: "As you from crimes would pardon'd be, / Let your indulgence set me free.", who: 'Prospero', where: 'The Tempest, Epilogue', w: 740, size: 36, hl: ['free'] });
  const cHands = pill('Short couplets · Power passes to THE AUDIENCE', { size: 28, stroke: ENG.gold, color: '#FFE6A8' });

  const peel = engPeel(d.fg, [
    'Shakespeare presents Caliban as **degraded** yet sympathetic, not a one-note monster.',
    'Caliban protests to Prospero, "here you **sty** me / In this hard rock."',
    'Zooming in on the verb "**sty**" (a pig pen) shows he is penned up like an **animal**.',
    'Invites a **colonial** reading of stolen land — **however**, his plot keeps our view balanced.',
  ], { w: 790, size: 23, title: 'CALIBAN PEEL + ALTERNATIVE VIEW' });
  const stMug9 = engStamp(d.fg, 'MUG #9 EARNED', '#1E9E5A');

  d.shot(0, { set: 'hall', cast: { prospero: { x: 230, y: 450, s: 0.95, mood: 'sad' }, will: { x: 1030, y: 430, s: 0.82, mood: 'smug' } } })
    .shot(at('tender') - 0.05, { set: 'isl', cast: { ariel: { x: 240, y: 390, s: 0.95, mood: 'sad' }, prospero: { x: 990, y: 460, s: 0.95, mood: 'neutral' } } })
    .shot(at('edge') - 0.05, { set: 'isl', cast: { mrh: { x: 190, y: 500, s: 0.9, mood: 'neutral' }, miranda: { x: 990, y: 490, s: 0.98, mood: 'happy' } } })
    .shot(at('newtothee') - 0.05, { set: 'isl', cast: { nib: { x: 200, y: 500, s: 0.88, mood: 'smug' }, prospero: { x: 1000, y: 460, s: 0.92, mood: 'deadpan' } } })
    .shot(at('epilogue') - 0.05, { set: 'hall', cast: { prospero: { x: 320, y: 450, s: 1.0, mood: 'sad', cloak: 0, staff: 0 } } })
    .shot(at('peelP') - 0.05, { set: 'hall', cast: { mei: { x: 170, y: 520, s: 0.92, mood: 'happy' } } })
    .shot(at('evidence') - 0.05, { set: 'hall', cam: [1, 1.08, 480, 460], cast: { mrh: { x: 420, y: 480, s: 1.15, mood: 'happy', mug: 1 }, mei: { x: 860, y: 500, s: 1.05, mood: 'happy' } } });

  d.x('prospero', mid('abjure', 0.55), { staff: 0, cloak: 0 });

  d.pop(cMasque, at('masque') + 0.08, end('masque') + 0.2, 620, 140);
  d.pop(qStuff, at('stuff') + 0.05, end('globe') + 0.2, 610, 235);
  d.pop(tMeta, at('globe') + 0.08, end('globe') + 0.25, 610, 465);

  d.pop(qTen, mid('tender', 0.45), end('tender') + 0.2, 620, 230);
  d.pop(qRarer, at('rarer') + 0.05, end('rarer') + 0.25, 620, 230);
  d.pop(qAbj, at('abjure') + 0.05, end('abjure') + 0.25, 620, 230);
  d.pop(cBreak, mid('abjure', 0.55), end('abjure') + 0.25, 620, 440);

  d.pop(cAnt, mid('edge', 0.35), end('edge') + 0.2, 600, 165);
  d.pop(qBrave, at('brave') + 0.05, end('newtothee') + 0.2, 610, 225);
  d.pop(tIrony, at('newtothee') + 0.08, end('newtothee') + 0.25, 610, 450);

  d.pop(qEpi, mid('epilogue', 0.25), end('epilogue') + 0.25, 740, 250);
  d.pop(cHands, mid('epilogue', 0.55), end('epilogue') + 0.25, 740, 465);

  d.pop(stMug9, mid('evidence', 0.35), end('evidence') + 0.35, 640, 210, 0.82);

  return t => {
    d.upd(t);
    spotOn = win(t, at('epilogue') - 0.05, end('epilogue') + 0.2, 0.25);
    qStuff.mark(-1, P(t, mid('stuff', 0.45), 0.45));
    qTen.mark(0, P(t, mid('tender', 0.7), 0.3));
    qRarer.mark(-1, P(t, mid('rarer', 0.5), 0.4));
    qAbj.mark(-1, P(t, mid('abjure', 0.3), 0.35));
    qBrave.mark(0, P(t, at('newtothee'), 0.35));
    qEpi.mark(0, P(t, mid('epilogue', 0.7), 0.3));

    const pv = engOut(peel, t, at('peelP') - 0.05, end('peelL') + 0.3, 745, 95, 1);
    if (pv) {
      const rungs = P(t, at('peelP'), 0.5, easeOut) +
        2 * P(t, at('peelE'), 0.6, easeOut) +
        P(t, at('peelL'), 0.55, easeOut);
      peel.set(rungs);
    }
  };
});
