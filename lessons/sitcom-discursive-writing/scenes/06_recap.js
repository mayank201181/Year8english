/* Scene 6: Save yourself some marks (Recap: mnemonics, 6 exam traps, Mei's 4.5-star hedged review). */
scene('recap', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('kevin'); d.who('onehand'); d.who('otherhand');

  const h1 = engCard(d.fg, '**CID** (intro, keep verdict secret!) · **PEER** (Point, Evidence, Explain, Reply)', { w: 780, size: 27, stroke: ENG.amber });
  const h2 = engCard(d.fg, '**Could, may, might: keep your claims light** · **WJF** (Weigh, Judge, Finish)', { w: 770, size: 27, stroke: '#5AB4E0' });
  const traps = [
    ['TRAP 1', 'Never blurt your **final opinion** in the introduction — save it for the end!'],
    ['TRAP 2', 'No one-sided **persuasive rants**, slang, contractions or loaded insults.'],
    ['TRAP 3', 'Don\'t **sit on the fence** ("you decide"), and zero **new arguments** in the conclusion!'],
    ['TRAP 4', 'No weak **straw men**, and label practice numbers **hypothetical**!'],
    ['TRAP 5', 'Always **explain** evidence ("This suggests that...") — never drop and run.'],
    ['TRAP 6', 'Joining two full sentences with **"however"**? **Semicolon before, comma after**!'],
  ].map(([tab, txt]) => engCard(d.fg, txt, { w: 760, size: 29, tab, tabCol: '#B57B12', icon: 'tick', stroke: ENG.amber }));

  const rev = engReview(d.fg, { stars: 4.5, text: 'On balance, 4.5 stars — provided nobody confiscates my phone on the MRT.', by: 'Mei, 12', w: 540 });
  const rating = disRating(d.fg);

  d.shot(0, { set: 'room', cast: { mei: { x: 230, y: 510, s: 1.0, mood: 'happy' }, onehand: { x: 970, y: 500, s: 0.94, mood: 'happy' } } })
    .shot(at('t1') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 500, s: 1.0, mood: 'neutral', mug: 1 } } })
    .shot(at('t2') - 0.05, { set: 'room', cast: { nib: { x: 200, y: 480, s: 0.92, mood: 'smug' } } })
    .shot(at('t3') - 0.05, { set: 'room', cast: { otherhand: { x: 210, y: 500, s: 0.96, mood: 'smug' } } })
    .shot(at('t4') - 0.05, { set: 'room', cast: { will: { x: 200, y: 430, s: 0.92, mood: 'smug', glow: 0.6 } } })
    .shot(at('t5') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 500, s: 1.0, mood: 'neutral' } } })
    .shot(at('t6') - 0.05, { set: 'room', cast: { kevin: { x: 210, y: 510, s: 0.9, mood: 'happy' } } })
    .shot(at('rev') - 0.05, { set: 'room', cast: { mei: { x: 830, y: 510, s: 1.08, mood: 'happy', phone: 1 }, will: { x: 990, y: 430, s: 0.88, mood: 'smug' } } });

  d.pop(h1, at('h1') + 0.08, end('h2') + 0.15, 600, 215);
  d.pop(h2, at('h2') + 0.08, end('h2') + 0.15, 600, 340);
  ['t1', 't2', 't3', 't4', 't5', 't6'].forEach((id, i) => d.pop(traps[i], at(id) + 0.06, end(id) + 0.18, 690, 320));
  d.pop(rev, at('rev') + 0.1, S.D + 1, 380, 320);

  return t => {
    d.upd(t);
    const r = 3.5 + P(t, mid('rev', 0.3), 0.5, linear);
    rev.set(r);
    rating.set(r, win(t, at('rev'), S.D + 1, 0.2)); tr(rating, 1030, 74);
  };
});
