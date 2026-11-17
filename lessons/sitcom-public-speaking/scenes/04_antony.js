/* Scene 4: Mark Antony & rallying the troops (showpiece: Irony Meter + PEEL ladder at the Globe).
   Julius Caesar 3.2: Brutus in prose ("Not that I loved Caesar less...") vs Antony in blank verse ("Friends, Romans,
   countrymen...") -> 5-bar Sarcasm Meter on "honourable" + grief pause ("My heart is in the coffin...") ->
   Henry V ("Once more unto the breach") vs Elizabeth I at Tilbury ("heart and stomach of a king") -> PEEL ladder! */
scene('antony', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);

  let rowdy = 0;
  d.add('globe', engGlobe(d.bg), (t, g) => g.upd(t, rowdy));
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), ethos = d.who('ethos'), pathos = d.who('pathos'), logos = d.who('logos');

  const qBrut = engQuote(d.fg, { text: 'Not that I loved Caesar less, but that I loved Rome more.', who: 'Brutus (prose)', where: 'Julius Caesar, Act 3 Scene 2', w: 720, size: 36, hl: ['less', 'more'] });
  const qAnt = engQuote(d.fg, { text: 'Friends, Romans, countrymen, lend me your ears; / I come to bury Caesar, not to praise him.', who: 'Mark Antony (blank verse)', where: 'Julius Caesar, Act 3 Scene 2', w: 750, size: 35, hl: ['bury', 'praise'] });
  const meter = pubIronyMeter(d.fg);
  const qCof = engQuote(d.fg, { text: 'My heart is in the coffin there with Caesar, / And I must pause till it come back to me.', who: 'Mark Antony', where: 'Julius Caesar, Act 3 Scene 2', w: 740, size: 35, hl: ['pause'] });
  const qHen = engQuote(d.fg, { text: 'Once more unto the breach, dear friends, once more;', who: 'King Henry', where: 'Henry V, Act 3 Scene 1', w: 700, size: 38, hl: ['friends'] });
  const qEliz = engQuote(d.fg, { text: 'I know I have the body but of a weak and feeble woman; but I have the heart and stomach of a king', who: 'Queen Elizabeth I', where: 'Tilbury Speech, 1588', w: 760, size: 33, hl: ['heart', 'king'] });

  const peel = engPeel(d.fg, [
    'Antony turns the crowd against Brutus using repetition that becomes **verbal irony**.',
    'He repeats **"Brutus is an honourable man"** right after proof that **"Caesar hath wept"**.',
    'Set beside Caesar\'s kindness, **"honourable"** sounds hollow without breaking Antony\'s promise.',
    'Shakespeare shows rhetoric\'s dangerous power to steer a crowd that thinks it chose freely.',
  ], { w: 780, size: 24, title: 'ANALYSING MARK ANTONY (PEEL)' });

  d.shot(0, { set: 'globe', cast: { will: { x: 220, y: 420, s: 0.9, mood: 'smug', glow: 0.6 }, logos: { x: 1010, y: 470, s: 0.85, mood: 'neutral' } } })
    .shot(at('ears') - 0.05, { set: 'globe', cast: { will: { x: 190, y: 430, s: 0.88, mood: 'happy', glow: 0.8 } } })
    .shot(at('irony') - 0.05, { set: 'globe', cast: { nib: { x: 180, y: 450, s: 0.88, mood: 'smug' }, pathos: { x: 1030, y: 460, s: 0.85, mood: 'happy' } } })
    .shot(at('coffin') - 0.05, { set: 'globe', cast: { will: { x: 190, y: 430, s: 0.88, mood: 'sad' } } })
    .shot(at('henry') - 0.05, { set: 'globe', cast: { will: { x: 190, y: 430, s: 0.88, mood: 'happy', quill: 1 } } })
    .shot(at('eliz') - 0.05, { set: 'globe', cast: { ethos: { x: 190, y: 470, s: 0.92, mood: 'smug' } } })
    .shot(at('p1') - 0.05, { set: 'globe', cast: { mrh: { x: 160, y: 510, s: 0.86, mood: 'neutral' }, mei: { x: 1060, y: 520, s: 0.86, mood: 'happy' } } });

  d.pop(qBrut, at('brutus') + 0.05, end('brutus') + 0.2, 600, 250);
  d.pop(qAnt, at('ears') + 0.05, end('ears') + 0.25, 690, 260);
  d.pop(meter, at('irony') + 0.05, end('weep') + 0.25, 600, 280);
  d.pop(qCof, at('coffin') + 0.05, end('coffin') + 0.25, 700, 260);
  d.pop(qHen, at('henry') + 0.05, end('henry') + 0.25, 700, 260);
  d.pop(qEliz, at('eliz') + 0.05, end('eliz') + 0.25, 700, 260);

  return t => {
    d.upd(t);
    rowdy = win(t, at('weep'), end('coffin') + 0.3, 0.3) * 0.7;
    qBrut.mark(-1, P(t, mid('brutus', 0.45), 0.4));
    qAnt.mark(-1, P(t, mid('ears', 0.55), 0.4));
    meter.set(5 * P(t, at('irony') + 0.2, (end('weep') - at('irony')) * 0.85, linear));
    qCof.mark(0, P(t, mid('coffin', 0.55), 0.4));
    qHen.mark(0, P(t, mid('henry', 0.45), 0.4));
    qEliz.mark(-1, P(t, mid('eliz', 0.55), 0.4));

    const pv = engOut(peel, t, at('p1') - 0.05, S.D + 1, 600, 92, 1);
    if (pv) {
      const n = P(t, at('p1'), 0.45) + P(t, at('p2'), 0.45) + P(t, mid('p2', 0.5), 0.45) + P(t, at('p3'), 0.45);
      peel.set(n);
    }
  };
});
