/* Scene 6: Recap — Save yourself some marks. Mnemonics card -> 6 exam traps spoken by Mr H, Quotey, Nib, Zoom,
   Will and Kevin -> Mei's 4-star review ("My hand still hurts from PEEL rung three."). */
scene('recap', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), qt = d.who('quotey'), zm = d.who('zoom');

  const hooks = engCard(d.fg,
    '**Paragraphs:** PEEL / PETAL   |   **Explain:** WHAT · HOW · WHY\n**Quotations:** "Snip it, slip it, unzip it!" (1–8 words woven in)',
    { w: 860, size: 26, tab: 'MEMORY HOOKS', tabCol: '#1E6E9E', stroke: ENG.sky });

  const traps = [
    ['TRAP 1', 'Never **retell the plot** or write "In this essay I will..." — open with a **thesis**!', 't1'],
    ['TRAP 2', 'No **dropped quotes** or 4-line chunks! Embed **1–8 words** inside your sentence.', 't2'],
    ['TRAP 3', 'Never **feature-spot** or say "makes the reader want to read on" — explain the **effect**.', 't3'],
    ['TRAP 4', 'Replace "shows" with **suggests / implies / conveys / exposes** & zoom in on **connotations**.', 't4'],
    ['TRAP 5', 'Use **perhaps / alternatively**, and **integrate** context into the words (no bolted-on 1564!).', 't5'],
    ['TRAP 6', 'Compare **both texts together** in each paragraph with **whereas / in contrast / similarly**.', 't6'],
  ].map(([tab, txt, id]) => ({ id, c: engCard(d.fg, txt, { w: 780, size: 28, tab, tabCol: '#C62828', stroke: ENG.gold, icon: 'tick' }) }));

  const rev = engReview(d.fg, { stars: 4, text: 'Analytical Writing. Snip, slip, unzip saved my Romeo essay. Hand hurts from rung three.', by: 'Mei, 12', w: 540 });

  d.shot(0, { set: 'room', cast: { mei: { x: 180, y: 520, s: 0.95, mood: 'happy' }, mrh: { x: 1030, y: 500, s: 0.9, mood: 'neutral' } } })
    .shot(at('t1') - 0.05, { set: 'room', cast: { mrh: { x: 165, y: 500, s: 0.92, mood: 'neutral', mug: 1 } } })
    .shot(at('t2') - 0.05, { set: 'room', cast: { quotey: { x: 175, y: 500, s: 0.9, mood: 'happy' } } })
    .shot(at('t3') - 0.05, { set: 'room', cast: { nib: { x: 165, y: 500, s: 0.88, mood: 'smug' } } })
    .shot(at('t4') - 0.05, { set: 'room', cast: { zoom: { x: 170, y: 510, s: 0.88, mood: 'smug', focus: 0.6 } } })
    .shot(at('t5') - 0.05, { set: 'room', cast: { will: { x: 165, y: 490, s: 0.85, mood: 'smug', glow: 0.4 } } })
    .shot(at('t6') - 0.05, { set: 'room', cast: { kevin: { x: 170, y: 520, s: 0.88, mood: 'happy' } } })
    .shot(at('rev') - 0.05, { set: 'room', cast: { mei: { x: 240, y: 500, s: 1.05, mood: 'happy', phone: 1 }, quotey: { x: 960, y: 480, s: 0.95, mood: 'shock' } } });

  d.mood('mei', at('hand'), 'smug');
  d.pop(hooks, at('hooks') + 0.05, end('hooks') + 0.2, 600, 250);
  traps.forEach(({ id, c }) => d.pop(c, at(id) + 0.05, end(id) + 0.18, 665, 315));
  d.pop(rev, at('rev') + 0.1, S.D + 1, 600, 285);

  return t => {
    d.upd(t);
    rev.set(4 * P(t, mid('rev', 0.25), 0.7, easeOut));
  };
});
