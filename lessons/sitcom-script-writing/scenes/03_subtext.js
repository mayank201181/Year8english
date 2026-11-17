/* Scene 3: Conflict, subtext & shaping pace (showpiece: the subtext iceberg & tension graph).
   Break time in 8H with a curry puff: Conflict = want + obstacle (external / internal) -> Subtext iceberg ("Fine." vs
   what lies underneath; Juliet's "Amen!") -> Dramatic irony -> Clapper's "arrive late, leave early" & rising tension
   arc -> Juliet's cliffhanger ("If all else fail, myself have power to die.") -> Pace ((Pause.), (Beat.)) & juxtaposition. */
scene('subtext', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), brack = d.who('brack'), clap = d.who('clapper');

  /* Curry puff prop */
  const puff = G(d.fg);
  E('path', { d: 'M-64,24 Q-60,-38 0,-42 Q60,-38 64,24 Z', fill: '#E8A444', stroke: '#8A5212', 'stroke-width': 4 }, puff);
  E('path', { d: 'M-64,24 Q-42,12 -22,24 Q0,12 22,24 Q42,12 64,24', fill: 'none', stroke: '#FCE0A2', 'stroke-width': 5, 'stroke-linecap': 'round' }, puff);

  const cConf = engCard(d.fg, '**CONFLICT** = **WANT** + **OBSTACLE**\n• External (character vs character)\n• Internal (torn inside one mind)', { w: 620, size: 30, stroke: ENG.rose });
  const ice = scrIceberg(d.fg);
  const qAmen = engQuote(d.fg, { text: 'JULIET: Amen! / NURSE: What?', who: 'Juliet & Nurse', where: 'Romeo and Juliet, Act 3 Scene 5', w: 660, size: 40, hl: ['amen'] });
  const tIrony = engTech(d.fg, 'DRAMATIC IRONY', { kind: 'drama', def: 'the audience knows what the character does not' });
  const cRule = pill('ARRIVE LATE · LEAVE EARLY', { size: 38, stroke: '#FFE45C', color: '#FFE45C' });
  const graph = scrTension(d.fg);
  const qCliff = engQuote(d.fg, { text: 'If all else fail, myself have power to die.', who: 'Juliet', where: 'Romeo and Juliet, Act 3 Scene 5 (scene end)', w: 720, size: 38, hl: ['die'] });
  const tCliff = engTech(d.fg, 'CLIFFHANGER', { kind: 'structure', def: 'ends on high tension or an unanswered question' });
  const cPace = engCard(d.fg, '**Speed up:** short lines, interruptions\n**Slow down:** **(Pause.)** · **(Beat.)** · silence', { w: 640, size: 30, stroke: ENG.violet, boldFill: '#E6D6FF' });
  const tJux = engTech(d.fg, 'JUXTAPOSITION', { kind: 'structure', def: 'placing comedy right before tragedy sharpens the drop' });

  d.shot(0, { set: 'room', cast: { mei: { x: 300, y: 500, s: 1.1, mood: 'happy' }, clapper: { x: 880, y: 470, s: 1.0, mood: 'annoyed' } } })
    .shot(at('want') - 0.05, { set: 'room', cast: { clapper: { x: 220, y: 470, s: 1.05, mood: 'happy', snap: 1 } } })
    .shot(at('fine') - 0.05, { set: 'room', cast: { mei: { x: 220, y: 500, s: 1.05, mood: 'neutral' }, brack: { x: 1020, y: 460, s: 0.9, mood: 'annoyed' } } })
    .shot(at('amen') - 0.05, { set: 'room', cast: { will: { x: 220, y: 430, s: 0.95, mood: 'smug' } } })
    .shot(at('irony') - 0.05, { set: 'room', cast: { nib: { x: 200, y: 450, s: 0.95, mood: 'smug' } } })
    .shot(at('late') - 0.05, { set: 'room', cast: { clapper: { x: 210, y: 470, s: 1.0, mood: 'happy' }, mrh: { x: 1040, y: 490, s: 0.85, mood: 'neutral' } } })
    .shot(at('cliff') - 0.05, { set: 'room', cast: { will: { x: 210, y: 430, s: 0.95, mood: 'sad', glow: 0.5 } } })
    .shot(at('pace') - 0.05, { conf: 'brack', cast: { brack: { x: 330, y: 420, s: 1.3, mood: 'happy' } } })
    .shot(at('jux') - 0.05, { set: 'room', cast: { nib: { x: 220, y: 450, s: 0.95, mood: 'smug' }, mei: { x: 960, y: 500, s: 0.95, mood: 'happy' } } });

  d.pop(puff, at('snack') + 0.1, end('snack') + 0.25, 580, 520);
  d.pop(cConf, mid('want', 0.2), end('want') + 0.25, 740, 340);
  d.pop(ice, at('ice') + 0.05, end('ice') + 0.25, 620, 340);
  d.pop(qAmen, at('amen') + 0.05, end('amen') + 0.25, 730, 330);
  d.pop(tIrony, at('irony') + 0.1, end('irony') + 0.25, 720, 330);
  d.pop(cRule, mid('late', 0.2), end('late') + 0.2, 620, 170);
  d.pop(graph, at('arc') - 0.05, end('arc') + 0.25, 620, 370);
  d.pop(qCliff, at('cliff') + 0.05, end('cliff') + 0.25, 720, 290);
  d.pop(tCliff, mid('cliff', 0.4), end('cliff') + 0.25, 720, 510);
  d.pop(cPace, mid('pace', 0.15), end('pace') + 0.25, 810, 360);
  d.pop(tJux, mid('jux', 0.2), end('jux') + 0.3, 620, 340);

  return t => {
    d.upd(t);
    op(ice.sub, P(t, mid('ice', 0.35), 0.5, ease));
    qAmen.mark(0, P(t, mid('amen', 0.5), 0.4));
    graph.set(P(t, at('arc'), 1.6, ease));
    qCliff.mark(0, P(t, mid('cliff', 0.65), 0.4));
  };
});
