/* Scene 5: Weigh it, judge it, finish it (WJF conclusions, no fence-sitting, qualified judgements + Scrooge discursive novel essay). */
scene('verdict', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.who('mei'); d.who('mrh'); d.who('nib'); d.who('onehand'); d.who('otherhand');

  const fenC = engCard(d.fg, '"There are good points on both sides, so you decide!"', { w: 680, size: 28, tab: 'FENCE-SITTING', icon: 'cross', stroke: C.bad });
  const wjfC = engCard(d.fg, '**WJF CONCLUSION** (zero new arguments!)\n**W**eigh strongest points · **J**udge ("**On balance...**") · **F**inish with a final thought', { w: 790, size: 26, stroke: ENG.amber });
  const qualC = engCard(d.fg, '**QUALIFIED JUDGEMENT**: "Yes, **provided that**..."\nPhones stored in lessons, allowed on the journey!', { w: 750, size: 27, icon: 'tick', stroke: C.good });
  const qUni = engQuote(d.fg, { text: 'A uniform should make pupils equal, not identical.', who: 'Model Final Line', where: "'Should school uniform be compulsory?' — memorable contrast!", w: 700, size: 36, hl: ['equal', 'identical'] });
  const novC = engCard(d.fg, '**DISCURSIVE NOVEL ESSAY**: "Is Scrooge\'s change believable?"\n• Against: overnight speed  |  • For: Stave Two boy + **"solitary as an oyster"** + **moral fable** genre!', { w: 800, size: 25, stroke: '#5AB4E0' });
  const scales = disScales(d.fg);

  d.shot(0, { set: 'room', cast: { mei: { x: 230, y: 510, s: 1.0, mood: 'smug' }, mrh: { x: 970, y: 500, s: 0.98, mood: 'deadpan', mug: 1 } } })
    .shot(at('wjf') - 0.05, { set: 'room', cast: { onehand: { x: 190, y: 500, s: 0.94, mood: 'happy' }, otherhand: { x: 1010, y: 500, s: 0.94, mood: 'happy' } } })
    .shot(at('equal') - 0.05, { set: 'room', cast: { nib: { x: 210, y: 490, s: 0.92, mood: 'smug' } } })
    .shot(at('novel') - 0.05, { set: 'room', cast: { mrh: { x: 180, y: 510, s: 0.94, mood: 'neutral' }, otherhand: { x: 1020, y: 500, s: 0.92, mood: 'smug' } } })
    .shot(at('bel') - 0.05, { set: 'room', cast: { onehand: { x: 190, y: 510, s: 0.92, mood: 'happy' }, mei: { x: 1010, y: 510, s: 0.96, mood: 'happy' } } })
    .shot(at('sigh') - 0.05, { set: 'room', cast: { mei: { x: 300, y: 510, s: 1.06, mood: 'happy', phone: 1 }, mrh: { x: 890, y: 500, s: 1.02, mood: 'happy', mug: 1 } } });

  d.pop(fenC, at('fence') + 0.08, end('nofence') + 0.15, 600, 260);
  d.pop(wjfC, at('wjf') + 0.08, end('wjf') + 0.18, 600, 260);
  d.pop(qualC, at('qual') + 0.08, end('qual') + 0.18, 600, 265);
  d.pop(qUni, at('equal') + 0.08, end('equal') + 0.2, 620, 275);
  d.pop(novC, at('novel') + 0.08, end('earned') + 0.18, 600, 235);

  return t => {
    d.upd(t);
    qUni.mark(-1, P(t, mid('equal', 0.4), 0.4));
    const sv = engOut(scales, t, at('unbel') - 0.05, end('earned') + 0.2, 600, 500, 0.76);
    if (sv) {
      const deg = t < at('bel') ? -10 : lerp(-10, 11, P(t, at('bel'), 0.8));
      scales.set(deg, 'EARNED FABLE', '1 NIGHT?');
    }
  };
});
