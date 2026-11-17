/* Scene 6: Recap — Save yourself some marks. Mnemonics card -> 6 exam traps spoken by Cam, Addie, Nib, Mr H,
   Kevin and Will -> Mei's 4-star review ("My shoes got soaked during location filming."). */
scene('recap', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);

  d.add('street', dscRainStreet(d.bg), (t, g) => g.upd(t, 0.15));
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), cam = d.who('cam'), adj = d.who('adj');

  const hooks = engCard(d.fg,
    '**Senses:** Some Hungry Sharks Taste Toes   |   **Paragraphs:** TiPToP\n**Sentences:** Some Lazy Cats Fear Mice   |   **Redrafting:** ARMS',
    { w: 860, size: 26, tab: 'MEMORY HOOKS', tabCol: '#1E6E9E', stroke: ENG.sky });

  const traps = [
    ['TRAP 1', 'Don\'t turn description into an action **story** — move the **camera** instead!', 't1'],
    ['TRAP 2', 'Ditch **adjective piles** and "very" — **specific nouns & vivid verbs** win.', 't2'],
    ['TRAP 3', 'Ban "**I could see / I could hear**" checklists and dead **clichés**.', 't3'],
    ['TRAP 4', 'Keep **one tense** and **one viewpoint** — never drift mid-paragraph.', 't4'],
    ['TRAP 5', 'No **comma splices** and no **!!!** — use colons, semicolons & dashes for timing.', 't5'],
    ['TRAP 6', 'Avoid the **thesaurus trap** and five-simile **purple prose**.', 't6'],
  ].map(([tab, txt, id]) => ({ id, c: engCard(d.fg, txt, { w: 760, size: 29, tab, tabCol: '#C62828', stroke: ENG.gold, icon: 'tick' }) }));

  const rev = engReview(d.fg, { stars: 4, text: 'Descriptive Writing. Turns out one good verb beats five adjectives. Shoes still soaked.', by: 'Mei, 12', w: 540 });

  d.shot(0, { set: 'street', cast: { mei: { x: 180, y: 530, s: 0.95, mood: 'happy' }, mrh: { x: 1030, y: 520, s: 0.9, mood: 'neutral' } } })
    .shot(at('t1') - 0.05, { set: 'street', cast: { cam: { x: 170, y: 520, s: 0.9, mood: 'smug' } } })
    .shot(at('t2') - 0.05, { set: 'street', cast: { adj: { x: 170, y: 520, s: 0.92, mood: 'happy', jitter: 0.2 } } })
    .shot(at('t3') - 0.05, { set: 'street', cast: { nib: { x: 170, y: 510, s: 0.88, mood: 'smug' } } })
    .shot(at('t4') - 0.05, { set: 'street', cast: { mrh: { x: 170, y: 520, s: 0.92, mood: 'deadpan', mug: 1 } } })
    .shot(at('t5') - 0.05, { set: 'street', cast: { kevin: { x: 170, y: 530, s: 0.88, mood: 'happy' } } })
    .shot(at('t6') - 0.05, { set: 'street', cast: { will: { x: 170, y: 500, s: 0.85, mood: 'smug', glow: 0.4 } } })
    .shot(at('rev') - 0.05, { set: 'street', cast: { mei: { x: 240, y: 510, s: 1.05, mood: 'happy', phone: 1 }, will: { x: 960, y: 490, s: 0.92, mood: 'shock' } } });

  d.mood('mei', at('wet'), 'smug');
  d.pop(hooks, at('hooks') + 0.05, end('hooks') + 0.2, 600, 250);
  traps.forEach(({ id, c }) => d.pop(c, at(id) + 0.05, end(id) + 0.18, 660, 310));
  d.pop(rev, at('rev') + 0.1, S.D + 1, 600, 285);

  return t => {
    d.upd(t);
    rev.set(4 * P(t, mid('rev', 0.25), 0.7, easeOut));
  };
});
