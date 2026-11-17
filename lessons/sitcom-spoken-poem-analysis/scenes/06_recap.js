/* Scene 6: Save yourself some marks (Recap: mnemonics, 6 exam traps, Mei's 4.5-star review). */
scene('recap', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);

  d.add('hall', engHall(d.bg), (t, g) => { g.upd(t); g.curtain(1); g.spot(1, 600); });
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('kevin'); d.who('mike'); d.who('timer');

  const h1 = engCard(d.fg, '**TSST** (Read 1) · **Only Lazy Students Forget Proper Conclusions** (structure)', { w: 780, size: 27, stroke: ENG.violet });
  const h2 = engCard(d.fg, '**PEEP** up from your notes (delivery) · **PACE** (follow-up questions)', { w: 740, size: 28, stroke: ENG.gold });
  const traps = [
    ['TRAP 1', 'Don\'t **retell** stanza by stanza — argue an **"On the surface... but really..."** thesis.'],
    ['TRAP 2', 'Don\'t **feature-spot** ten devices — zoom in on **three rich moments** + effects.'],
    ['TRAP 3', 'Never read a **full script** head-down — use a **cue card** and silent pauses!'],
    ['TRAP 4', 'Don\'t confuse **speaker** with **poet**, and never skip the **volta** or ending.'],
    ['TRAP 5', 'Embed **short quotations** and voice them by slowing down — never "quote unquote".'],
    ['TRAP 6', 'Never freeze on "I don\'t know" — **pause**, return to the poem, and think aloud!'],
  ].map(([tab, txt]) => engCard(d.fg, txt, { w: 750, size: 29, tab, tabCol: '#6A3AC8', icon: 'tick', stroke: ENG.violet }));

  const rev = engReview(d.fg, { stars: 4.5, text: 'Unseen Spoken Analysis. Ten minutes prep is stressful, lah, but Mike survived.', by: 'Mei, 12', w: 540 });
  const rating = spaRating(d.fg);

  d.shot(0, { set: 'hall', cast: { mei: { x: 240, y: 490, s: 1.0, mood: 'happy' }, mike: { x: 960, y: 470, s: 0.96, mood: 'happy' } } })
    .shot(at('t1') - 0.05, { set: 'hall', cast: { mrh: { x: 200, y: 490, s: 1.0, mood: 'neutral', mug: 1 } } })
    .shot(at('t2') - 0.05, { set: 'hall', cast: { nib: { x: 200, y: 480, s: 0.92, mood: 'smug' } } })
    .shot(at('t3') - 0.05, { set: 'hall', cast: { mike: { x: 210, y: 470, s: 0.98, mood: 'happy' } } })
    .shot(at('t4') - 0.05, { set: 'hall', cast: { will: { x: 200, y: 420, s: 0.92, mood: 'smug', glow: 0.6 } } })
    .shot(at('t5') - 0.05, { set: 'hall', cast: { kevin: { x: 210, y: 500, s: 0.9, mood: 'happy' } } })
    .shot(at('t6') - 0.05, { set: 'hall', cast: { timer: { x: 210, y: 480, s: 0.96, mood: 'happy' } } })
    .shot(at('rev') - 0.05, { set: 'hall', cast: { mei: { x: 830, y: 490, s: 1.1, mood: 'happy', phone: 1 }, will: { x: 990, y: 420, s: 0.88, mood: 'shock' } } });

  d.mood('will', at('half'), 'annoyed').mood('mei', at('ten'), 'smug');

  d.pop(h1, at('h1') + 0.08, end('h2') + 0.15, 600, 195);
  d.pop(h2, at('h2') + 0.08, end('h2') + 0.15, 600, 315);
  ['t1', 't2', 't3', 't4', 't5', 't6'].forEach((id, i) => d.pop(traps[i], at(id) + 0.06, end(id) + 0.18, 690, 280));
  d.pop(rev, at('rev') + 0.1, S.D + 1, 380, 310);

  return t => {
    d.upd(t);
    const r = 3 + 1.5 * P(t, mid('rev', 0.3), 0.5, linear);
    rev.set(r);
    rating.set(r, win(t, at('rev'), S.D + 1, 0.2)); tr(rating, 1030, 74);
  };
});
