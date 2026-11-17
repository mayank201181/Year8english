/* Scene 6: Save yourself some marks (Recap: mnemonics, 6 exam traps, Mei's 4-star review). */
scene('recap', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('kevin'); d.who('shady'); d.who('omni');

  const h1 = engCard(d.fg, '**WHAT, HOW, WHY** · **STEAL** (Speech, Thoughts, Effect, Actions, Looks)', { w: 770, size: 28, stroke: ENG.amber });
  const h2 = engCard(d.fg, '**Every Rocket Climbs, Falls, Returns** · **Then, Turn, The End**', { w: 740, size: 28, stroke: '#5AB4E0' });
  const traps = [
    ['TRAP 1', 'Don\'t retell plot or treat characters as real mates — write **"Dickens presents..."**'],
    ['TRAP 2', 'Never confuse **narrator** with **author**, and spot **unreliable** narrators!'],
    ['TRAP 3', 'Third person isn\'t always omniscient — check **third limited** vs **omniscient**.'],
    ['TRAP 4', 'Don\'t quote only Chapter 1 — track **beginning, turning point, and end**!'],
    ['TRAP 5', 'Phrase a **theme** as a full idea, and weave **context** into purpose!'],
    ['TRAP 6', 'Use **short, embedded** quotations ("solitary as an oyster"), never slab quotes.'],
  ].map(([tab, txt]) => engCard(d.fg, txt, { w: 750, size: 29, tab, tabCol: '#B57B12', icon: 'tick', stroke: ENG.amber }));

  const rev = engReview(d.fg, { stars: 4, text: 'Reading the Novel. Cliffhangers are sneaky, and Hamlet is still longer.', by: 'Mei, 12', w: 540 });
  const rating = novRating(d.fg);

  d.shot(0, { set: 'room', cast: { mei: { x: 240, y: 510, s: 1.0, mood: 'happy' }, nib: { x: 960, y: 480, s: 0.9, mood: 'smug' } } })
    .shot(at('t1') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 500, s: 1.0, mood: 'neutral', mug: 1 } } })
    .shot(at('t2') - 0.05, { set: 'room', cast: { shady: { x: 220, y: 500, s: 1.0, mood: 'smug' } } })
    .shot(at('t3') - 0.05, { set: 'room', cast: { omni: { x: 210, y: 320, s: 0.9, mood: 'happy' } } })
    .shot(at('t4') - 0.05, { set: 'room', cast: { kevin: { x: 210, y: 510, s: 0.9, mood: 'happy' } } })
    .shot(at('t5') - 0.05, { set: 'room', cast: { nib: { x: 200, y: 480, s: 0.92, mood: 'smug' } } })
    .shot(at('t6') - 0.05, { set: 'room', cast: { will: { x: 200, y: 430, s: 0.92, mood: 'smug', glow: 0.6 } } })
    .shot(at('rev') - 0.05, { set: 'room', cast: { mei: { x: 830, y: 510, s: 1.08, mood: 'happy', phone: 1 }, will: { x: 990, y: 430, s: 0.88, mood: 'shock' } } });

  d.mood('will', at('prose'), 'annoyed').mood('mei', at('ham'), 'smug');

  d.pop(h1, at('h1') + 0.08, end('h2') + 0.15, 600, 215);
  d.pop(h2, at('h2') + 0.08, end('h2') + 0.15, 600, 340);
  ['t1', 't2', 't3', 't4', 't5', 't6'].forEach((id, i) => d.pop(traps[i], at(id) + 0.06, end(id) + 0.18, 690, 320));
  d.pop(rev, at('rev') + 0.1, S.D + 1, 380, 320);

  return t => {
    d.upd(t);
    const r = 3 + P(t, mid('rev', 0.3), 0.5, linear);
    rev.set(r);
    rating.set(r, win(t, at('rev'), S.D + 1, 0.2)); tr(rating, 1030, 74);
  };
});
