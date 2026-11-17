/* Scene 5: Follow-up questions without panic (PACE routine + weighing alternative readings + 5 assessment criteria).
   School hall: Timer rings 4:00 -> Mr H challenges Mei on Dunbar's 'Sympathy' -> Kevin panics (`bag: 1`) ->
   PACE routine -> Mei cites 'upward to Heaven' vs 'bruised' wing -> 5 criteria + Dickinson's 'It asked a crumb - of me.' */
scene('questions', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);

  d.add('hall', engHall(d.bg), (t, g) => { g.upd(t); g.curtain(1); g.spot(1, 600); });
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('kevin'); d.who('timer');

  const qAsk = engCard(d.fg, 'Follow-up Q: "Could someone argue the ending of **Sympathy** is actually **hopeful**?"', { w: 760, size: 28, tab: 'CHALLENGE', tabCol: '#D97706', stroke: ENG.gold });
  const paceC = engCard(d.fg, '**PACE** Routine\n**P**ause · **A**nswer directly · **C**ite the poem · **E**xtend or Evaluate', { w: 760, size: 28, stroke: ENG.violet });
  const weighC = engCard(d.fg, '1. Hopeful reading: **"plea, that upward to Heaven"** (hasn\'t given up)\n2. **However**: wing is **"bruised"**, cage stays shut → hope is real yet **fragile**!', { w: 780, size: 27, icon: 'tick', stroke: C.good });
  const critC = engCard(d.fg, '**5 ASSESSMENT CRITERIA**\nUnderstanding · Analysis · Terminology · Personal Response · Delivery', { w: 760, size: 28, stroke: ENG.gold });
  const qDick = engQuote(d.fg, { text: 'Yet - never - in Extremity, / It asked a crumb - of me.', who: 'Emily Dickinson', where: "'\"Hope\" is the thing with feathers', final lines", w: 720, size: 36, hl: ['crumb'] });

  d.shot(0, { set: 'hall', cast: { timer: { x: 240, y: 470, s: 1.0, mood: 'happy' }, mrh: { x: 920, y: 480, s: 1.0, mood: 'neutral', mug: 1 } } })
    .shot(at('uhoh') - 0.05, { set: 'hall', cast: { kevin: { x: 300, y: 500, s: 0.92, mood: 'shock', bag: 1, sweat: 1 }, mrh: { x: 920, y: 480, s: 1.0, mood: 'neutral' } } })
    .shot(at('pace') - 0.05, { set: 'hall', cast: { timer: { x: 220, y: 480, s: 0.96, mood: 'happy' }, mei: { x: 960, y: 490, s: 1.02, mood: 'neutral' } } })
    .shot(at('ans') - 0.05, { set: 'hall', cast: { mei: { x: 210, y: 500, s: 1.02, mood: 'happy' }, mrh: { x: 1000, y: 490, s: 0.95, mood: 'happy' } } })
    .shot(at('crit') - 0.05, { set: 'hall', cast: { nib: { x: 200, y: 480, s: 0.9, mood: 'smug' }, will: { x: 1010, y: 420, s: 0.9, mood: 'happy', glow: 0.6 } } })
    .shot(at('sigh') - 0.05, { set: 'hall', cast: { mei: { x: 320, y: 490, s: 1.08, mood: 'happy' }, mrh: { x: 880, y: 480, s: 1.04, mood: 'happy', mug: 1 } } });

  d.pop(qAsk, at('ask') + 0.08, end('notrap') + 0.15, 600, 220);
  d.pop(paceC, at('pace') + 0.08, end('pause') + 0.2, 600, 230);
  d.pop(weighC, at('ans') + 0.08, end('weigh') + 0.2, 600, 235);
  d.pop(critC, at('crit') + 0.08, end('crit') + 0.2, 600, 230);
  d.pop(qDick, at('pers') + 0.08, end('sigh') + 0.15, 600, 250);

  return t => {
    d.upd(t);
    qDick.mark(0, P(t, mid('pers', 0.6), 0.4));
  };
});
