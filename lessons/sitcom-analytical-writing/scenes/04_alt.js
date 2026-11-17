/* Scene 4: Alternative readings and integrated context. Hamlet's "unweeded garden" -> tentative words (perhaps,
   might, could) + Reading 1 (Gertrude) vs Reading 2 (Claudius) -> Miranda's "O brave new world" vs "'Tis new to thee"
   -> bolted-on 1564 Stratford crossed out -> integrated Elizabethan astrology on "star-cross'd"! */
scene('alt', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.95)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), zm = d.who('zoom');

  const qGar = engQuote(d.fg, { text: "'tis an unweeded garden, / That grows to seed; things rank and gross in nature", who: 'Hamlet', where: 'Hamlet, Act 1 Scene 2', w: 780, size: 33, hl: ['unweeded', 'garden'] });
  const cTent = pill('Tentative words: perhaps · may · might · could · arguably', { size: 26, stroke: '#B58CFF' });
  const cR1 = engCard(d.fg, '**Reading 1 (perhaps):** blames Gertrude\'s hasty remarriage.', { w: 740, size: 27, stroke: '#5AB4E0' });
  const cR2 = engCard(d.fg, '**Reading 2 (Alternatively):** blames Claudius\'s corrupt rule — then **judge** which is stronger!', { w: 740, size: 26, stroke: '#56D69B' });

  const qMir = engQuote(d.fg, { text: "O brave new world, / That has such people in't!  —  'Tis new to thee.", who: 'Miranda & Prospero', where: 'The Tempest, Act 5 Scene 1', w: 780, size: 33, hl: ['brave', 'new'] });

  const cBolt = engCard(d.fg, '"Shakespeare was born in **1564** in Stratford-upon-Avon..."', { w: 740, size: 28, stroke: C.bad, tab: 'BOLTED-ON CONTEXT' });
  const boltX = strike(cBolt, -330, 0, 330, C.bad);
  const cInt = engCard(d.fg, '**INTEGRATED CONTEXT:**\nFor an audience who believed in astrology, "**star-cross\'d**" marked the lovers as doomed by fate from the Prologue.', { w: 780, size: 27, stroke: C.good, icon: 'tick' });

  d.shot(0, { set: 'room', cast: { will: { x: 160, y: 500, s: 0.85, mood: 'smug', glow: 0.4 }, nib: { x: 1040, y: 510, s: 0.88, mood: 'smug' } } })
    .shot(at('r1') - 0.05, { set: 'room', cast: { mei: { x: 150, y: 575, s: 0.78, mood: 'happy' }, zoom: { x: 1055, y: 575, s: 0.75, mood: 'smug', focus: 0.7 } } })
    .shot(at('mir') - 0.05, { set: 'room', cast: { will: { x: 180, y: 500, s: 0.85, mood: 'happy', glow: 0.5 }, mrh: { x: 1030, y: 510, s: 0.9, mood: 'deadpan' } } })
    .shot(at('bolt') - 0.05, { set: 'room', cast: { mei: { x: 190, y: 520, s: 0.92, mood: 'happy' }, mrh: { x: 1020, y: 500, s: 0.92, mood: 'deadpan', mug: 1 } } })
    .shot(at('hurt') - 0.05, { conf: 'will', cast: { will: { x: 330, y: 410, s: 1.25, mood: 'sad', glow: 0.6 } } })
    .shot(at('stars2') - 0.05, { set: 'room', cast: { nib: { x: 180, y: 500, s: 0.9, mood: 'smug' }, mei: { x: 1020, y: 520, s: 0.92, mood: 'happy' } } });

  d.pop(qGar, at('ambig') + 0.05, end('r2') + 0.2, 600, 175);
  d.pop(cTent, at('tent') + 0.08, end('r2') + 0.2, 600, 315);
  d.pop(cR1, at('r1') + 0.06, end('r2') + 0.2, 600, 405);
  d.pop(cR2, at('r2') + 0.06, end('r2') + 0.22, 600, 505);
  d.pop(qMir, at('mir') + 0.05, end('ctx') + 0.2, 600, 240);
  d.pop(cBolt, at('bolt') + 0.08, end('cross') + 0.22, 600, 245);
  d.pop(cInt, at('stars2') + 0.06, end('stars2') + 0.3, 600, 260);

  return t => {
    d.upd(t);
    qGar.mark(-1, P(t, mid('ambig', 0.45), 0.45));
    qMir.mark(-1, P(t, mid('mir', 0.35), 0.45));
    boltX.set(P(t, at('cross') + 0.08, 0.45, ease));
  };
});
