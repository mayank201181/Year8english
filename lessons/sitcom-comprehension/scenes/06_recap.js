/* Scene 6: Recap — Save yourself some marks. Mnemonics card -> 6 exam traps spoken by Question 4, Nib, Sherlock,
   Mr H, Kevin and Will -> Mei's 4-star review ("The passages are a bit long, lah."). */
scene('recap', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), qm = d.who('qmark'), shl = d.who('sherlock');

  const hooks = engCard(d.fg,
    '**7 Types:** Really Inquisitive Victors Love Solving Sneaky Exams\n**Language:** WHAT · HOW · WHY   |   **Time:** A Mark a Minute\n**Non-fiction:** Check it (Fact) or Challenge it (Opinion)',
    { w: 860, size: 26, tab: 'MEMORY HOOKS', tabCol: '#1E6E9E', stroke: ENG.sky });

  const traps = [
    ['TRAP 1', 'Stay inside the **named line numbers** — wrong lines = 0 marks.', 't1'],
    ['TRAP 2', 'Never **feature-spot** or say "makes the reader want to read on". Explain the **effect**!', 't2'],
    ['TRAP 3', '"**In your own words**" = genuine paraphrase. Never guess without clues.', 't3'],
    ['TRAP 4', '**Structure** = shifts in focus, zoom & pace — NOT metaphors or plot retelling.', 't4'],
    ['TRAP 5', '**Summary** = concise own words. NO quotations and NO language analysis!', 't5'],
    ['TRAP 6', '**"How far do you agree?"** = clear verdict ("I largely agree...") + counter-view.', 't6'],
  ].map(([tab, txt, id]) => ({ id, c: engCard(d.fg, txt, { w: 760, size: 29, tab, tabCol: '#C62828', stroke: ENG.gold, icon: 'tick' }) }));

  const rev = engReview(d.fg, { stars: 4, text: 'Reading Comprehension. Much less terrifying when you read the question. Passages still a bit long, lah.', by: 'Mei, 12', w: 560 });

  d.shot(0, { set: 'room', cast: { mei: { x: 180, y: 520, s: 0.95, mood: 'happy' }, mrh: { x: 1040, y: 500, s: 0.9, mood: 'deadpan' } } })
    .shot(at('t1') - 0.05, { set: 'room', cast: { qmark: { x: 170, y: 510, s: 0.9, mood: 'annoyed' } } })
    .shot(at('t2') - 0.05, { set: 'room', cast: { nib: { x: 170, y: 500, s: 0.88, mood: 'smug' } } })
    .shot(at('t3') - 0.05, { set: 'room', cast: { sherlock: { x: 170, y: 510, s: 0.88, mood: 'smug' } } })
    .shot(at('t4') - 0.05, { set: 'room', cast: { mrh: { x: 170, y: 500, s: 0.92, mood: 'neutral', mug: 1 } } })
    .shot(at('t5') - 0.05, { set: 'room', cast: { kevin: { x: 170, y: 520, s: 0.88, mood: 'shock', sweat: 1 } } })
    .shot(at('t6') - 0.05, { set: 'room', cast: { will: { x: 170, y: 490, s: 0.85, mood: 'smug', glow: 0.4 } } })
    .shot(at('rev') - 0.05, { set: 'room', cast: { mei: { x: 240, y: 500, s: 1.05, mood: 'happy', phone: 1 }, qmark: { x: 960, y: 480, s: 1.0, mood: 'shock' } } });

  d.mood('mei', at('long'), 'smug');
  d.pop(hooks, at('hooks') + 0.05, end('hooks') + 0.2, 600, 260);
  traps.forEach(({ id, c }) => d.pop(c, at(id) + 0.05, end(id) + 0.18, 660, 320));
  d.pop(rev, at('rev') + 0.1, S.D + 1, 600, 290);

  return t => {
    d.upd(t);
    rev.set(4 * P(t, mid('rev', 0.25), 0.7, easeOut));
  };
});
