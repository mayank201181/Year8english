/* Scene 1: Think before you shout (Discursive vs Persuasive vs Argumentative + CID Introductions). */
scene('spectrum', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.amber, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.who('mei'); d.who('mrh'); d.who('nib'); d.who('onehand'); d.who('otherhand');

  const latC = pill('Latin discurrere = "to run to and fro" · Montaigne essayer = "to try"', { size: 26, stroke: ENG.gold });
  const specC = engCard(d.fg, '**THE SPECTRUM**\n• **Persuasive**: 1 side + emotive tricks\n• **Argumentative**: 1 side from para 1 + logic\n• **Discursive**: **both sides fairly** → verdict at the **end**!', { w: 780, size: 26, stroke: ENG.amber });
  const cmdC = pill('Command words: "Discuss" · "Consider both sides" · "To what extent"', { size: 26, stroke: '#56D69B', color: '#D0F7E2' });
  const cidC = engCard(d.fg, '**CID INTRODUCTION** (keep your verdict secret!)\n**C**ontext (why now) · **I**ssue (name both sides) · **D**irection (signpost weighing)', { w: 790, size: 26, stroke: '#5AB4E0' });
  const badC = engCard(d.fg, '"In this essay I will..." · "The dictionary defines..." · "Since the dawn of time..."', { w: 760, size: 26, tab: 'BANNED OPENINGS', icon: 'cross', stroke: C.bad });
  const qZoo = engQuote(d.fg, { text: 'Supporters see modern zoos as arks for endangered species; critics see them as prisons, however well decorated.', who: 'Model CID Introduction', where: "'Should zoos still exist?' — vivid balanced contrast!", w: 770, size: 32, hl: ['arks', 'prisons'] });

  d.shot(0, { set: 'room', cast: { nib: { x: 200, y: 490, s: 0.92, mood: 'smug' }, mrh: { x: 1000, y: 500, s: 0.96, mood: 'neutral', mug: 1 } } })
    .shot(at('disc') - 0.05, { set: 'room', cast: { onehand: { x: 190, y: 500, s: 0.95, mood: 'happy' }, otherhand: { x: 1010, y: 500, s: 0.95, mood: 'smug' } } })
    .shot(at('test') - 0.05, { set: 'room', cast: { mrh: { x: 190, y: 500, s: 0.96, mood: 'neutral' }, nib: { x: 1010, y: 490, s: 0.9, mood: 'smug' } } })
    .shot(at('bad') - 0.05, { set: 'room', cast: { mei: { x: 210, y: 510, s: 1.0, mood: 'happy' }, otherhand: { x: 1000, y: 500, s: 0.95, mood: 'happy' } } });

  d.pop(latC, at('latin') + 0.08, end('latin') + 0.18, 600, 240);
  d.pop(specC, at('pers') + 0.08, end('disc') + 0.18, 600, 270);
  d.pop(cmdC, at('words') + 0.08, end('test') + 0.18, 600, 260);
  d.pop(cidC, at('cid') + 0.08, end('secret') + 0.18, 600, 265);
  d.pop(badC, at('bad') + 0.08, end('bad') + 0.18, 600, 265);
  d.pop(qZoo, at('zoos') + 0.06, end('zoos') + 0.25, 600, 285);

  return t => {
    d.upd(t);
    qZoo.mark(-1, P(t, mid('zoos', 0.35), 0.45));
  };
});
