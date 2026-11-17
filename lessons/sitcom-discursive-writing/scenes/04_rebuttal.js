/* Scene 4: Steelman, don't straw-man (4 types of evidence, hypothetical honesty, Steelman vs Straw man, PEER ladder + scales!). */
scene('rebuttal', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.amber, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('hall', engHall(d.bg), (t, g) => { g.upd(t); g.curtain(1); g.spot(1, 600); });
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('onehand'); d.who('otherhand');

  const evC = engCard(d.fg, '**4 KINDS OF EVIDENCE** (strongest → weakest)\n1 **Large studies** · 2 **Expert opinion** · 3 **Real examples** (Arabian oryx) · 4 **Anecdote**', { w: 790, size: 25, stroke: ENG.amber });
  const honC = engCard(d.fg, '**HONESTY RULE**: Label practice stats **hypothetical** ("Imagine a survey...")\nand test source **bias** ("funded by a uniform seller?")!', { w: 780, size: 26, stroke: '#5AB4E0' });
  const strC = engCard(d.fg, '**STRAW MAN** ✗ (weak scarecrow)  vs  **STEELMANNING** ✓ (their strongest case!)', { w: 780, size: 27, stroke: '#56D69B' });
  const engC = pill('Rebuttal engine: "Admittedly... However... Therefore..."', { size: 29, stroke: ENG.gold });

  const peel = engPeel(d.fg, [
    'Supporters of a phone ban argue notifications **fracture concentration**.',
    'Teachers report pupils take **several minutes** to refocus after a single buzz.',
    '**This suggests that** phones quietly erode lesson time, even without texting.',
    '**Reply**: **Admittedly**, phones aid research; **however**, school laptops offer that without chats.',
  ], { w: 790, size: 24, title: 'DISCURSIVE PEER PARAGRAPH (P · E · E · REPLY)' });
  const scales = disScales(d.fg);
  const rating = disRating(d.fg);

  d.shot(0, { set: 'hall', cast: { mrh: { x: 190, y: 490, s: 0.98, mood: 'neutral', mug: 1 }, onehand: { x: 1010, y: 490, s: 0.94, mood: 'happy' } } })
    .shot(at('honest') - 0.05, { set: 'hall', cast: { mrh: { x: 190, y: 490, s: 0.98, mood: 'neutral' }, otherhand: { x: 1010, y: 490, s: 0.94, mood: 'smug' } } })
    .shot(at('straw') - 0.05, { set: 'hall', cast: { will: { x: 220, y: 420, s: 0.92, mood: 'smug', glow: 0.7 }, otherhand: { x: 990, y: 490, s: 0.96, mood: 'annoyed' } } })
    .shot(at('engine') - 0.05, { set: 'hall', cast: { nib: { x: 220, y: 480, s: 0.92, mood: 'smug' } } })
    .shot(at('p') - 0.05, { set: 'hall', cast: { mei: { x: 115, y: 585, s: 0.68, mood: 'happy' }, onehand: { x: 1090, y: 580, s: 0.68, mood: 'happy' } } })
    .shot(at('tip') - 0.05, { set: 'hall', cast: { onehand: { x: 230, y: 490, s: 0.98, mood: 'happy' }, mei: { x: 960, y: 500, s: 1.04, mood: 'happy', phone: 1 } } });

  d.pop(evC, at('evid') + 0.08, end('oryx') + 0.18, 600, 245);
  d.pop(honC, at('honest') + 0.08, end('testev') + 0.18, 600, 245);
  d.pop(strC, at('straw') + 0.08, end('steel') + 0.18, 600, 245);
  d.pop(engC, at('engine') + 0.08, end('engine') + 0.2, 600, 250);

  return t => {
    d.upd(t);
    const pv = engOut(peel, t, at('p') - 0.05, at('tip') - 0.1, 600, 95, 0.95);
    if (pv) {
      const n = P(t, at('p'), 0.45) + P(t, at('e'), 0.45) + P(t, at('ex'), 0.45) + P(t, at('r'), 0.45);
      peel.set(n);
    }
    const sv = engOut(scales, t, at('tip') - 0.05, S.D + 1, 590, 320, 0.92);
    if (sv) scales.set(14 * P(t, at('tip'), 0.6, easeOut), 'PEER + REBUTTAL', 'COUNTER');
    rating.set(2 + 1.5 * P(t, mid('tip', 0.4), 0.5, linear), win(t, at('tip'), S.D + 1, 0.2)); tr(rating, 1030, 74);
  };
});
