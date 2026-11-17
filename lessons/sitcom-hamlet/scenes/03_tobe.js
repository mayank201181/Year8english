/* Ep 3, Scene 3: To be, or not to be & why Hamlet delays. NO skull in Act 3 Scene 1 -> antithesis, "slings and
   arrows" & "sea of troubles" metaphors -> Kevin's caesuras -> "undiscover'd country", universal "we/us",
   "conscience does make cowards" -> Act 3 Scene 3 prayer dramatic irony ("My words fly up") -> Foils Laertes &
   Fortinbras + Polonius stabbed behind the arras! */
scene('tobe', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  let spotOn = 0;
  d.add('hall', engHall(d.bg), (t, g) => { g.upd(t); g.curtain(1); g.spot(spotOn, 230); });

  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), kev = d.who('kevin');
  const ham = d.who('hamlet'), pol = d.who('polonius');

  const stNoSkull = engStamp(d.fg, 'NO SKULL IN ACT 3!', '#C62828');
  const qTobe = engQuote(d.fg, { text: 'To be, or not to be: that is the question:', who: 'Hamlet', where: 'Hamlet, Act 3 Scene 1', w: 720, size: 40, hl: ['be', 'not'] });
  const tAnti = engTech(d.fg, 'ANTITHESIS', { kind: 'structure', def: 'opposites balanced side by side: to be / not to be', size: 35 });

  const qSlings = engQuote(d.fg, { text: "Whether 'tis nobler in the mind to suffer / The slings and arrows of outrageous fortune, / Or to take arms against a sea of troubles", who: 'Hamlet', where: 'Hamlet, Act 3 Scene 1', w: 770, size: 33, hl: ['slings', 'arrows', 'sea'] });
  const tCae = engTech(d.fg, 'CAESURA', { kind: 'punct', def: 'mid-line pauses slow the rhythm as Hamlet hesitates', size: 34 });

  const cDread = engCard(d.fg, 'Fear of **"The undiscover’d country"** (death) stops us · Uses **"we" & "us"**, never **"I"**!', { w: 780, size: 28, stroke: '#7FD3FF' });
  const qCow = engQuote(d.fg, { text: 'Thus conscience does make cowards of us all;', who: 'Hamlet', where: 'Hamlet, Act 3 Scene 1', w: 720, size: 38, hl: ['conscience', 'cowards', 'us'] });

  const cPray = pill('Act 3 Scene 3 · Claudius kneeling alone: Hamlet spares him!', { size: 28, stroke: ENG.gold });
  const qWords = engQuote(d.fg, { text: 'My words fly up, my thoughts remain below: / Words without thoughts never to heaven go.', who: 'Claudius', where: 'Hamlet, Act 3 Scene 3', w: 760, size: 35, hl: ['up', 'below'] });
  const tIrony = engTech(d.fg, 'DRAMATIC IRONY', { kind: 'drama', def: 'Hamlet thinks Claudius is praying; WE hear his prayer fail', size: 33 });

  /* Three grieving sons comparison */
  const sons = G(d.fg);
  [
    ['HAMLET', 'THINKS & TESTS', '#B58CFF'],
    ['LAERTES', 'RAGES & IS USED', '#FF6070'],
    ['FORTINBRAS', 'MARCHES & WINS', '#56D69B'],
  ].forEach(([nm, act, col], i) => {
    const bx = G(sons); tr(bx, (i - 1) * 265, 0);
    E('rect', { x: -120, y: -64, width: 240, height: 128, rx: 18, fill: 'rgba(14,24,40,0.95)', stroke: col, 'stroke-width': 3.5 }, bx);
    T(bx, 0, -12, nm, { size: 30, weight: 800, anchor: 'middle', fill: col });
    T(bx, 0, 32, act, { size: 24, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
  });
  const cArras = pill('Closet scene (Act 3 Scene 4): rash stab behind the arras!', { size: 28, stroke: C.bad, color: '#FFB3BA' });

  d.shot(0, { set: 'hall', cast: { hamlet: { x: 230, y: 470, s: 1.0, mood: 'shock', skull: 1 }, mrh: { x: 990, y: 480, s: 0.95, mood: 'annoyed', mug: 1 } } })
    .shot(at('oops') - 0.05, { set: 'hall', cast: { hamlet: { x: 220, y: 470, s: 1.0, mood: 'sad', skull: 0 }, nib: { x: 1030, y: 500, s: 0.85, mood: 'smug' } } })
    .shot(at('kevin') - 0.05, { set: 'hall', cast: { kevin: { x: 210, y: 500, s: 0.85, mood: 'happy' }, hamlet: { x: 1020, y: 480, s: 0.92, mood: 'sad' } } })
    .shot(at('dread') - 0.05, { set: 'hall', cast: { mrh: { x: 190, y: 490, s: 0.92, mood: 'neutral' }, hamlet: { x: 1020, y: 480, s: 0.95, mood: 'sad' } } })
    .shot(at('prayer') - 0.05, { set: 'hall', cast: { mei: { x: 210, y: 510, s: 0.98, mood: 'shock' }, hamlet: { x: 990, y: 480, s: 0.98, mood: 'annoyed' } } })
    .shot(at('wordsfly') - 0.05, { set: 'hall', cast: { nib: { x: 190, y: 500, s: 0.88, mood: 'smug' } } })
    .shot(at('foils') - 0.05, { set: 'hall', cast: { mrh: { x: 170, y: 540, s: 0.82, mood: 'neutral' } } })
    .shot(at('arras') - 0.05, { set: 'hall', cast: { polonius: { x: 320, y: 470, s: 1.05, mood: 'shock', sweat: 1 }, hamlet: { x: 900, y: 480, s: 0.98, mood: 'shock' } } });

  d.shake(at('arras') + 0.15, 8);

  d.pop(stNoSkull, mid('noskull', 0.35), end('noskull') + 0.2, 610, 230, 0.82);
  d.pop(qTobe, mid('oops', 0.3), end('anti') + 0.2, 620, 220);
  d.pop(tAnti, at('anti') + 0.08, end('anti') + 0.25, 620, 440);

  d.pop(qSlings, at('slings') + 0.05, end('kevin') + 0.2, 610, 235);
  d.pop(tCae, at('kevin') + 0.08, end('kevin') + 0.25, 610, 475);

  d.pop(cDread, at('dread') + 0.08, end('dread') + 0.2, 605, 220);
  d.pop(qCow, at('cowards') + 0.05, end('cowards') + 0.25, 605, 385);

  d.pop(cPray, at('prayer') + 0.08, end('heaven') + 0.2, 605, 215);
  d.pop(qWords, mid('wordsfly', 0.28), end('wordsfly') + 0.25, 615, 235);
  d.pop(tIrony, at('wordsfly') + 0.06, end('wordsfly') + 0.25, 615, 465);

  d.pop(sons, at('foils') + 0.08, end('foils') + 0.25, 640, 270);
  d.pop(cArras, at('arras') + 0.08, end('arras') + 0.3, 610, 190);

  return t => {
    d.upd(t);
    spotOn = win(t, at('oops') - 0.05, end('cowards') + 0.2, 0.25);
    qTobe.mark(-1, P(t, at('anti'), 0.4));
    qSlings.mark(-1, P(t, mid('slings', 0.45), 0.45));
    qCow.mark(-1, P(t, mid('cowards', 0.35), 0.4));
    qWords.mark(-1, P(t, mid('wordsfly', 0.55), 0.4));
  };
});
