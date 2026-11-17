/* Ep 3, Scene 4: Ophelia's madness in prose, Yorick's skull (Act 5 Scene 1) & the poisoned catastrophe -> 3 stars. */
scene('ophelia', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('hall', engHall(d.bg), (t, g) => { g.upd(t); g.curtain(1); });
  d.add('bat', hamBattlements(d.bg), (t, g) => g.upd(t, 0.7));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib');
  const ham = d.who('hamlet'), oph = d.who('ophelia');

  const qObey = engQuote(d.fg, { text: 'I shall obey, my lord.', who: 'Ophelia (to Polonius)', where: 'Hamlet, Act 1 Scene 3', w: 580, size: 42, hl: ['obey'] });
  const stProse = engStamp(d.fg, 'REAL MADNESS = PROSE', '#C62828');
  const qRose = engQuote(d.fg, { text: "There's rosemary, that's for remembrance;", who: 'Ophelia', where: 'Hamlet, Act 4 Scene 5', w: 680, size: 38, hl: ['rosemary', 'remembrance'] });

  const cAct5 = pill('Act 5 Scene 1 · The graveyard (NOW bring out the skull!)', { stroke: '#7FD3FF', color: '#E6F4FF' });
  const qYor = engQuote(d.fg, { text: 'Alas, poor Yorick! I knew him, Horatio:', who: 'Hamlet', where: 'Hamlet, Act 5 Scene 1', w: 700, size: 40, hl: ['Yorick', 'Horatio'] });
  const cLev = engCard(d.fg, '**MORTALITY — Death is the great leveller:**\nJesters & emperors (even Alexander the Great) end as the same **dust**', { w: 780, size: 28, stroke: ENG.gold });

  /* Poisoned sword & cup final diagram */
  const catG = G(d.fg);
  E('rect', { x: -420, y: -125, width: 840, height: 250, rx: 22, fill: 'rgba(14,24,40,0.95)', stroke: C.bad, 'stroke-width': 4 }, catG);
  T(catG, 0, -76, 'ACT 5 SCENE 2 · CLAUDIUS’S TWO POISONS BACKFIRE', { size: 26, weight: 800, anchor: 'middle', fill: ENG.gold, ls: 1 });
  E('rect', { x: -380, y: -42, width: 350, height: 138, rx: 16, fill: 'rgba(255,96,112,0.15)', stroke: C.bad, 'stroke-width': 3 }, catG);
  T(catG, -205, 2, 'POISONED SWORD', { size: 28, weight: 800, anchor: 'middle', fill: C.bad });
  T(catG, -205, 44, 'cuts Hamlet, Laertes & Claudius', { size: 23, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
  E('rect', { x: 30, y: -42, width: 350, height: 138, rx: 16, fill: 'rgba(181,140,255,0.15)', stroke: '#B58CFF', 'stroke-width': 3 }, catG);
  T(catG, 205, 2, 'POISONED CUP', { size: 28, weight: 800, anchor: 'middle', fill: '#B58CFF' });
  T(catG, 205, 44, 'Gertrude drinks; Claudius forced', { size: 23, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });

  const qSil = engQuote(d.fg, { text: 'The rest is silence.', who: 'Hamlet (his dying words)', where: 'Hamlet, Act 5 Scene 2', w: 580, size: 44, hl: ['silence'] });
  const cFort = pill('Horatio tells his story · Fortinbras crowned King', { size: 28, stroke: C.good, color: '#C9F2D3' });
  const rating = hamRating(d.fg);

  d.shot(0, { set: 'hall', cast: { ophelia: { x: 240, y: 490, s: 1.0, mood: 'sad' }, nib: { x: 1010, y: 490, s: 0.88, mood: 'smug' } } })
    .shot(at('grave') - 0.05, { set: 'bat', cast: { hamlet: { x: 240, y: 480, s: 1.0, mood: 'sad', skull: 1 }, mrh: { x: 1010, y: 500, s: 0.9, mood: 'neutral' } } })
    .shot(at('ready') - 0.05, { set: 'hall', cast: { hamlet: { x: 200, y: 480, s: 0.98, mood: 'neutral', skull: 0 }, will: { x: 1010, y: 420, s: 0.88, mood: 'shock', glow: 0.8 } } })
    .shot(at('silence') - 0.05, { set: 'hall', cast: { hamlet: { x: 260, y: 480, s: 1.0, mood: 'sad' } } })
    .shot(at('three') - 0.05, { set: 'hall', cast: { mei: { x: 320, y: 500, s: 1.1, mood: 'happy', phone: 1 }, will: { x: 880, y: 420, s: 0.95, mood: 'smug' } } });

  d.lower(['OPHELIA', "Polonius's daughter. Controlled by every man at court."], at('obey') + 0.1, 3.2);

  d.pop(qObey, mid('obey', 0.55), end('prose') + 0.15, 610, 215);
  d.pop(stProse, mid('prose', 0.45), end('prose') + 0.25, 610, 425, 0.78);
  d.pop(qRose, at('rosemary') + 0.05, end('rosemary') + 0.25, 610, 250);

  d.pop(cAct5, at('grave') + 0.08, end('grave') + 0.2, 620, 150);
  d.pop(qYor, at('yorick') + 0.05, end('dust') + 0.2, 620, 225);
  d.pop(cLev, at('dust') + 0.08, end('dust') + 0.25, 620, 445);

  d.pop(catG, mid('ready', 0.35), end('duel') + 0.25, 610, 280);
  d.pop(qSil, mid('silence', 0.45), end('silence') + 0.25, 680, 240);
  d.pop(cFort, at('silence') + 0.08, end('silence') + 0.25, 680, 465);

  return t => {
    d.upd(t);
    qObey.mark(0, P(t, mid('obey', 0.7), 0.3));
    qRose.mark(-1, P(t, mid('rosemary', 0.25), 0.4));
    qYor.mark(-1, P(t, mid('yorick', 0.3), 0.4));
    qSil.mark(0, P(t, mid('silence', 0.72), 0.3));
    const rv = win(t, at('three'), S.D + 1, 0.25);
    rating.set(2 + P(t, mid('three', 0.15), 0.45, linear), rv); tr(rating, 1030, 74);
  };
});
