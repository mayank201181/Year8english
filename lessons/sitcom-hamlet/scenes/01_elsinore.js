/* Ep 3, Scene 1: Revenge tragedy & a rotten state. Elsinore (c. 1600), revenge conventions -> Claudius + Gertrude
   ("an unweeded garden", "Frailty, thy name is woman!") -> Marcellus's "Something is rotten in the state of Denmark"
   (Act 1 Scene 4) -> Ghost reveals ear-poison ("The serpent... Now wears his crown") -> Purgatory vs devil & regicide. */
scene('elsinore', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(9); });
  d.add('bat', hamBattlements(d.bg), (t, g) => g.upd(t, 1));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib');
  const ham = d.who('hamlet'), gho = d.who('ghost');

  const tRev = engTech(d.fg, 'REVENGE TRAGEDY', { kind: 'form', def: 'wronged hero seeks vengeance; ends in catastrophic deaths', size: 36 });
  const conv5 = ['Ghost', 'Delay', 'Feigned madness', 'Play-within-a-play', 'Bloody ending'].map(s =>
    pill(s, { size: 26, stroke: ENG.rose, color: '#FFD0DC' }));

  const cWeb = engCard(d.fg, '**Claudius** (brother) murders Old Hamlet  →  marries **Gertrude** within 2 months!\nClaudius = Hamlet’s **uncle AND stepfather**', { w: 780, size: 28, stroke: C.bad });
  const qGar = engQuote(d.fg, { text: "Fie on't! ah fie! 'tis an unweeded garden, / That grows to seed;", who: 'Hamlet', where: 'Hamlet, Act 1 Scene 2', w: 720, size: 35, hl: ['unweeded', 'garden'] });
  const qFrail = engQuote(d.fg, { text: 'Frailty, thy name is woman!', who: 'Hamlet', where: 'Hamlet, Act 1 Scene 2', w: 620, size: 40, hl: ['Frailty'] });

  const stMarc = engStamp(d.fg, 'SPOKEN BY MARCELLUS!', '#1E9E5A');
  const qRot = engQuote(d.fg, { text: 'Something is rotten in the state of Denmark.', who: 'Marcellus (a guard, NOT Hamlet!)', where: 'Hamlet, Act 1 Scene 4', w: 760, size: 38, hl: ['rotten', 'state'] });
  const cMotif = engCard(d.fg, '**Motif:** rot, disease, weeds & poison · **Pun on "state":** the country AND its condition', { w: 780, size: 28, stroke: ENG.gold });

  const qSerp = engQuote(d.fg, { text: "The serpent that did sting thy father's life / Now wears his crown.", who: 'The Ghost', where: 'Hamlet, Act 1 Scene 5', w: 740, size: 36, hl: ['serpent', 'crown'] });

  const cPurg = engCard(d.fg, '**Catholic Purgatory** vs **Protestant fear:**\nWhat if the Ghost **"May be the devil"** tricking Hamlet into damnation?', { w: 780, size: 28, stroke: '#7FD3FF' });
  const tReg = engTech(d.fg, 'REGICIDE & DIVINE RIGHT', { kind: 'context', def: 'killing an anointed king was seen as a sin against God', size: 34 });

  d.shot(0, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.0, mood: 'neutral', mug: 1 }, nib: { x: 1010, y: 480, s: 0.88, mood: 'smug' } } })
    .shot(at('family') - 0.05, { set: 'bat', cast: { hamlet: { x: 220, y: 490, s: 1.0, mood: 'sad' } } })
    .shot(at('marcellus') - 0.05, { set: 'bat', cast: { mrh: { x: 190, y: 500, s: 0.9, mood: 'neutral' }, will: { x: 1010, y: 430, s: 0.88, mood: 'smug' } } })
    .shot(at('pun') - 0.05, { set: 'bat', cast: { nib: { x: 190, y: 500, s: 0.88, mood: 'smug' } } })
    .shot(at('serpent') - 0.05, { set: 'bat', cast: { ghost: { x: 230, y: 430, s: 0.98, mood: 'annoyed' }, hamlet: { x: 1000, y: 490, s: 0.95, mood: 'shock' } } })
    .shot(at('devil') - 0.05, { set: 'bat', cast: { mei: { x: 210, y: 510, s: 0.95, mood: 'neutral', hand: 1 }, mrh: { x: 1010, y: 500, s: 0.9, mood: 'neutral' } } })
    .shot(at('regicide') - 0.05, { set: 'bat', cast: { nib: { x: 210, y: 500, s: 0.88, mood: 'smug' }, hamlet: { x: 1000, y: 490, s: 0.95, mood: 'sad' } } });

  d.mood('hamlet', at('garden'), 'annoyed');
  d.x('mei', at('purgatory'), { hand: 0 });

  d.pop(tRev, mid('genre', 0.25), end('recipe') + 0.2, 610, 195);
  conv5.forEach((p, i) => d.pop(p, mid('recipe', 0.15 + i * 0.15), end('recipe') + 0.25, 360 + (i % 3) * 250, 365 + Math.floor(i / 3) * 82));

  d.pop(cWeb, at('family') + 0.08, end('family') + 0.2, 640, 240);
  d.pop(qGar, at('garden') + 0.05, end('garden') + 0.25, 640, 210);
  d.pop(qFrail, mid('garden', 0.55), end('garden') + 0.25, 640, 430);

  d.pop(stMarc, mid('marcellus', 0.5), end('rotten') + 0.2, 610, 145, 0.72);
  d.pop(qRot, at('rotten') - 0.05, end('pun') + 0.2, 610, 290);
  d.pop(cMotif, at('pun') + 0.08, end('pun') + 0.25, 610, 495);

  d.pop(qSerp, mid('serpent', 0.28), end('serpent') + 0.25, 615, 250);

  d.pop(cPurg, at('purgatory') + 0.08, end('purgatory') + 0.25, 615, 250);
  d.pop(tReg, at('regicide') + 0.08, end('regicide') + 0.3, 615, 280);

  return t => {
    d.upd(t);
    qGar.mark(-1, P(t, mid('garden', 0.2), 0.35));
    qFrail.mark(0, P(t, mid('garden', 0.7), 0.3));
    qRot.mark(-1, P(t, at('pun'), 0.4));
    qSerp.mark(-1, P(t, mid('serpent', 0.55), 0.4));
  };
});
