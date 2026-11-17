/* Ep 3, Scene 2: Appearance vs reality & The Mousetrap. "Seems, madam! nay it is; I know not 'seems.'" ->
   "one may smile, and smile, and be a villain" + antic disposition -> Polonius's ironic "to thine own self be true"
   & "Though this be madness, yet there is method in't" -> R&G spies vs Horatio -> Metatheatre ("The play's the thing") -> 2 stars. */
scene('seems', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('hall', engHall(d.bg), (t, g) => { g.upd(t); g.curtain(1); });

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib');
  const ham = d.who('hamlet'), pol = d.who('polonius');

  const cTheme = pill('THEME: APPEARANCE vs REALITY', { size: 34, stroke: ENG.violet, color: '#E6D6FF' });
  const qSeems = engQuote(d.fg, { text: "Seems, madam! nay it is; I know not 'seems.'", who: 'Hamlet', where: 'Hamlet, Act 1 Scene 2', w: 720, size: 38, hl: ['Seems', 'is'] });
  const qSmile = engQuote(d.fg, { text: 'That one may smile, and smile, and be a villain', who: 'Hamlet', where: 'Hamlet, Act 1 Scene 5', w: 720, size: 38, hl: ['smile', 'villain'] });
  const tAntic = engTech(d.fg, 'ANTIC DISPOSITION', { kind: 'drama', def: 'putting on strange, mad behaviour as a disguise (or does it turn real?)', size: 33 });

  const qTrue = engQuote(d.fg, { text: 'This above all: to thine own self be true', who: 'Polonius (to Laertes)', where: 'Hamlet, Act 1 Scene 3', w: 700, size: 38, hl: ['true'] });
  const stSpy = engStamp(d.fg, 'IRONIC: HE SPIES!', '#C62828');
  const qMeth = engQuote(d.fg, { text: "Though this be madness, yet there is method in't.", who: 'Polonius (aside)', where: 'Hamlet, Act 2 Scene 2', w: 720, size: 36, hl: ['madness', 'method'] });

  const cFriends = engCard(d.fg, '✗ **Rosencrantz & Guildenstern** = school friends hired to **spy**\n✓ **Horatio** = Hamlet’s one calm, truly **loyal** friend', { w: 780, size: 28, stroke: ENG.gold, boldFill: C.good });

  const tMeta = engTech(d.fg, 'METATHEATRE (THE MOUSETRAP)', { kind: 'drama', def: 'a play-within-a-play: using stage fiction to catch real guilt', size: 33 });
  const qPlay = engQuote(d.fg, { text: "the play's the thing / Wherein I'll catch the conscience of the king.", who: 'Hamlet', where: 'Hamlet, Act 2 Scene 2', w: 740, size: 36, hl: ['thing', 'conscience', 'king'] });

  const rating = hamRating(d.fg);

  d.shot(0, { set: 'hall', cast: { mrh: { x: 200, y: 480, s: 0.98, mood: 'neutral', mug: 1 }, hamlet: { x: 980, y: 480, s: 0.98, mood: 'annoyed' } } })
    .shot(at('nay') - 0.05, { set: 'hall', cast: { hamlet: { x: 210, y: 480, s: 1.0, mood: 'annoyed' }, mei: { x: 1020, y: 510, s: 0.92, mood: 'neutral' } } })
    .shot(at('advice') - 0.05, { set: 'hall', cast: { polonius: { x: 220, y: 470, s: 0.98, mood: 'smug' }, nib: { x: 1010, y: 490, s: 0.88, mood: 'smug' } } })
    .shot(at('spies') - 0.05, { set: 'hall', cast: { mrh: { x: 200, y: 480, s: 0.98, mood: 'deadpan' }, hamlet: { x: 1010, y: 480, s: 0.95, mood: 'sad' } } })
    .shot(at('trap') - 0.05, { set: 'hall', cast: { will: { x: 200, y: 420, s: 0.9, mood: 'happy', quill: 1 }, hamlet: { x: 1000, y: 480, s: 0.98, mood: 'smug' } } })
    .shot(at('two') - 0.05, { set: 'hall', cast: { mei: { x: 320, y: 500, s: 1.1, mood: 'happy', phone: 1 }, hamlet: { x: 880, y: 480, s: 0.98, mood: 'smug' } } });

  d.pop(cTheme, at('theme') + 0.08, end('theme') + 0.2, 600, 175);
  d.pop(qSeems, mid('nay', 0.28), end('nay') + 0.2, 615, 240);
  d.pop(qSmile, mid('smile', 0.2), end('antic') + 0.2, 615, 225);
  d.pop(tAntic, mid('smile', 0.72), end('antic') + 0.25, 615, 450);

  d.pop(qTrue, mid('advice', 0.35), end('ironyP') + 0.2, 615, 230);
  d.pop(stSpy, at('ironyP') + 0.08, end('ironyP') + 0.25, 615, 440, 0.8);
  d.pop(qMeth, mid('method', 0.3), end('method') + 0.25, 615, 260);

  d.pop(cFriends, at('spies') + 0.08, end('spies') + 0.25, 610, 290);

  d.pop(tMeta, at('trap') + 0.08, end('couplet') + 0.2, 605, 195);
  d.pop(qPlay, at('couplet') + 0.05, end('couplet') + 0.25, 605, 415);

  return t => {
    d.upd(t);
    qSeems.mark(-1, P(t, mid('nay', 0.55), 0.4));
    qSmile.mark(-1, P(t, mid('smile', 0.45), 0.4));
    qTrue.mark(0, P(t, mid('advice', 0.65), 0.35));
    qMeth.mark(-1, P(t, mid('method', 0.55), 0.4));
    qPlay.mark(-1, P(t, mid('couplet', 0.35), 0.4));
    const rv = win(t, at('two'), S.D + 1, 0.25);
    rating.set(1 + P(t, mid('two', 0.2), 0.45, linear), rv); tr(rating, 1030, 74);
  };
});
