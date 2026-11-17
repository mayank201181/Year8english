/* Scene 6: Save yourself some marks (Recap: mnemonics, 6 exam traps, Ah Ma's kitchen & Mei's 4-star review). */
scene('recap', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.add('flat', engFlat(d.bg), (t, g) => { g.upd(t); g.clock(19); });
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('kevin'); d.who('rex'); d.who('cliche');

  const h1 = engCard(d.fg, '**Old Photos Make Sounds** · **SEE it, OWN it, PIN it** · **Two and four go forth**', { w: 780, size: 28, stroke: ENG.violet });
  const h2 = engCard(d.fg, 'Commentary: **I Invent Fresh Tunes, Rewrite, Evaluate**', { w: 720, size: 30, stroke: ENG.gold });
  const traps = [
    ['TRAP 1', 'Don\'t **tell** with abstract nouns — **show** with concrete objects and actions.'],
    ['TRAP 2', 'Dodge **forced rhymes** and worn-out **clichés** ("tears like rain").'],
    ['TRAP 3', 'Never break lines randomly on **"the"** or **"and"** — justify every break!'],
    ['TRAP 4', 'Precise **concrete nouns** & verbs beat pompous **thesaurus stuffing**.'],
    ['TRAP 5', 'Never end with a **moral summary** — end on a **resonant image**.'],
    ['TRAP 6', 'Commentary: quote with **slashes**, explain **effects**, show a **redraft** & **evaluate**.'],
  ].map(([tab, txt]) => engCard(d.fg, txt, { w: 740, size: 30, tab, tabCol: '#6A3AC8', icon: 'tick', stroke: ENG.violet }));

  const ahmaB = engBubble(d.fg, 'Your dumpling holds its shape!\nAnd the poem is **not bad, lah**!', { size: 30, tail: 'left' });
  const rev = engReview(d.fg, { stars: 4, text: 'Writing Poetry & Commentary. Seventeen drafts is a lot, lah, but Ah Ma liked it.', by: 'Mei, 12', w: 540 });
  const rating = pwrRating(d.fg);

  d.shot(0, { set: 'room', cast: { mei: { x: 240, y: 510, s: 1.0, mood: 'happy' }, nib: { x: 960, y: 480, s: 0.9, mood: 'smug' } } })
    .shot(at('t1') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 500, s: 1.0, mood: 'neutral', mug: 1 } } })
    .shot(at('t2') - 0.05, { set: 'room', cast: { cliche: { x: 230, y: 460, s: 0.98, mood: 'annoyed' } } })
    .shot(at('t3') - 0.05, { set: 'room', cast: { kevin: { x: 220, y: 510, s: 0.9, mood: 'happy' } } })
    .shot(at('t4') - 0.05, { set: 'room', cast: { rex: { x: 230, y: 470, s: 1.0, mood: 'smug' } } })
    .shot(at('t5') - 0.05, { set: 'room', cast: { will: { x: 210, y: 430, s: 0.92, mood: 'happy', glow: 0.6 } } })
    .shot(at('t6') - 0.05, { set: 'room', cast: { nib: { x: 210, y: 480, s: 0.92, mood: 'smug' } } })
    .shot(at('kitchen') - 0.05, { set: 'flat', cast: { mei: { x: 820, y: 500, s: 1.1, mood: 'happy', phone: 1 }, will: { x: 540, y: 430, s: 0.9, mood: 'shock' } } });

  d.mood('will', at('whyfour'), 'annoyed').mood('mei', at('drafts'), 'smug');

  d.pop(h1, at('hooks') + 0.08, end('hooks2') + 0.15, 600, 230);
  d.pop(h2, at('hooks2') + 0.08, end('hooks2') + 0.15, 600, 355);
  ['t1', 't2', 't3', 't4', 't5', 't6'].forEach((id, i) => d.pop(traps[i], at(id) + 0.06, end(id) + 0.18, 690, 340));
  d.pop(ahmaB, at('kitchen') + 0.05, end('kitchen') + 0.25, 390, 280);
  d.pop(rev, at('four') + 0.1, S.D + 1, 360, 330);

  return t => {
    d.upd(t);
    const r = 3 + P(t, mid('four', 0.4), 0.5, linear);
    rev.set(r);
    rating.set(r, win(t, at('four'), S.D + 1, 0.2)); tr(rating, 1030, 74);
  };
});
