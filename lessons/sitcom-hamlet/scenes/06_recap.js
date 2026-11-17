/* Ep 3, Scene 6: Recap — Memory hooks + 6 Hamlet exam traps + Mei's 4-star review + Polonius agrees! */
scene('recap', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.add('bat', hamBattlements(d.bg), (t, g) => g.upd(t, 0.8));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib');
  const ham = d.who('hamlet'), gho = d.who('ghost'), pol = d.who('polonius'), oph = d.who('ophelia');

  const banner = engCard(d.fg, '**HAMLET** · Memory hooks & six exam traps', { w: 800, size: 34, stroke: ENG.gold });
  const hk1 = engCard(d.fg, '**Soliloquies:** Some Real Thinkers Never Act · **Themes:** WARM CAM', { w: 800, size: 29, icon: 'tick', stroke: ENG.rose, boldFill: ENG.rose });
  const hk2 = engCard(d.fg, "**Deaths in order:** Please Only Get Charlie's Lunch, Hamlet! (Polonius → Ophelia → Gertrude → Claudius → Laertes → Hamlet)", { w: 820, size: 26, icon: 'tick', stroke: '#B58CFF', boldFill: '#B58CFF' });

  const TRAPS = [
    ['t1', 'TRAP 1', '✗ Giving "Something is rotten..." to Hamlet\n✓ Spoken by the guard **Marcellus** (Act 1 Scene 4)'],
    ['t2', 'TRAP 2', '✗ Holding a skull in "To be, or not to be"\n✓ **To be** = Act 3 Scene 1 · **Yorick’s skull** = Act 5 Scene 1'],
    ['t3', 'TRAP 3', '✗ Misquoting "Alas, poor Yorick! I knew him well"\n✓ "**Alas, poor Yorick! I knew him, Horatio**"'],
    ['t4', 'TRAP 4', '✗ Calling Hamlet’s madness simply fake OR simply real\n✓ Weigh **both**: **antic disposition** blurring into real grief'],
    ['t5', 'TRAP 5', '✗ Calling every speech a soliloquy\n✓ "What a piece of work is a man" has **listeners** (R & G)'],
    ['t6', 'TRAP 6', '✗ Assuming Gertrude helped murder Old Hamlet\n✓ Her knowledge is **left open** ("Leave her to heaven")'],
  ].map(([id, tab, text]) => [id, engCard(d.fg, text, { w: 670, size: 29, tab, tabCol: '#C62828', stroke: ENG.gold, boldFill: C.good })]);

  const rev = engReview(d.fg, { stars: 4, text: 'Masterpiece, 10/10 soliloquies, minus 1 star for accidentally stabbing the curtain guy.', by: 'Mei, 12', w: 540 });
  const rating = hamRating(d.fg);

  d.shot(0, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.0, mood: 'deadpan', mug: 1 }, mei: { x: 980, y: 510, s: 0.95, mood: 'happy' } } })
    .shot(at('hooks') - 0.05, { set: 'room', cast: { mei: { x: 180, y: 510, s: 0.95, mood: 'happy' } } })
    .shot(at('t1') - 0.05, { conf: 'ghost', cast: { ghost: { x: 250, y: 410, s: 1.15, mood: 'annoyed' } } })
    .shot(at('t2') - 0.05, { conf: 'hamlet', cast: { hamlet: { x: 250, y: 430, s: 1.2, mood: 'sad' } } })
    .shot(at('t3') - 0.05, { conf: 'will', cast: { will: { x: 250, y: 400, s: 1.15, mood: 'annoyed', quill: 1 } } })
    .shot(at('t4') - 0.05, { conf: 'polonius', cast: { polonius: { x: 250, y: 430, s: 1.2, mood: 'smug' } } })
    .shot(at('t5') - 0.05, { conf: 'nib', cast: { nib: { x: 250, y: 420, s: 1.2, mood: 'smug' } } })
    .shot(at('t6') - 0.05, { conf: 'ophelia', cast: { ophelia: { x: 250, y: 430, s: 1.2, mood: 'neutral' } } })
    .shot(at('four') - 0.05, { set: 'bat', cast: { mei: { x: 270, y: 500, s: 1.08, mood: 'happy', phone: 1 }, polonius: { x: 920, y: 480, s: 0.98, mood: 'deadpan' } } });

  d.pop(banner, at('intro') + 0.08, end('intro') + 0.2, 620, 230);
  d.pop(hk1, at('hooks') + 0.06, end('hooks') + 0.25, 690, 230);
  d.pop(hk2, mid('hooks', 0.45), end('hooks') + 0.25, 690, 415);

  TRAPS.forEach(([id, cardEl]) => d.pop(cardEl, at(id) + 0.06, end(id) + 0.18, 800, 380));

  d.pop(rev, at('four') + 0.05, end('fair') + 0.5, 595, 360);

  return t => {
    d.upd(t);
    const rv = win(t, at('four'), S.D + 1, 0.25);
    const stars = 3 + P(t, mid('four', 0.2), 0.45, linear);
    rating.set(stars, rv); tr(rating, 1030, 74);
    rev.set(stars);
  };
});
