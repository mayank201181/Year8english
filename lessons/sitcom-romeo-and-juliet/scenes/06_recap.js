/* Ep 4, Scene 6: Recap — Memory hooks + 6 exam traps + Mei's 4-star Term 1 Shakespeare verdict! */
scene('recap', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.add('ver', rjVerona(d.bg), (t, g) => g.upd(t, 1));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib');
  const rom = d.who('romeo'), jul = d.who('juliet'), mer = d.who('mercutio'), tyb = d.who('tybalt');

  const banner = engCard(d.fg, '**ROMEO AND JULIET** · Memory hooks & six exam traps', { w: 830, size: 34, stroke: ENG.gold });
  const hk1 = engCard(d.fg, '**Plot:** 8 Bs (Brawl → Burial) · **Sonnet:** 4 + 4 + 4 + 2 = 14 lines', { w: 800, size: 29, icon: 'tick', stroke: ENG.rose, boldFill: ENG.rose });
  const hk2 = engCard(d.fg, '**6 Deaths:** My Teacher Paints Really Joyful Landscapes (Mercutio, Tybalt, Paris, Romeo, Juliet, Lady Montague)', { w: 820, size: 26, icon: 'tick', stroke: '#5AB4E0', boldFill: '#5AB4E0' });

  const TRAPS = [
    ['t1', 'TRAP 1', '✗ "Wherefore art thou Romeo?" = "Where are you?"\n✓ **Wherefore = WHY** (Why must you be a Montague?)'],
    ['t2', 'TRAP 2', '✗ Thinking they date for months\n✓ Compressed into **about four days** (Sunday → Thursday)'],
    ['t3', 'TRAP 3', '✗ Calling Tybalt her brother or Mercutio a Montague\n✓ Tybalt = **cousin** · Mercutio = **Prince’s kinsman** (neither house!)'],
    ['t4', 'TRAP 4', '✗ Calling Act 5 Scene 3 the turning point\n✓ **Act 3 Scene 1** = turning point · **Act 5 Scene 3** = catastrophe'],
    ['t5', 'TRAP 5', '✗ Picking ONLY fate or ONLY free will\n✓ Show how human **haste** & hatred work **with** fate'],
    ['t6', 'TRAP 6', '✗ Retelling the story & dropping long quotes\n✓ **Embed** short phrases & **zoom in** on word connotations'],
  ].map(([id, tab, text]) => [id, engCard(d.fg, text, { w: 675, size: 29, tab, tabCol: '#C62828', stroke: ENG.gold, boldFill: C.good })]);

  const rev = engReview(d.fg, { stars: 4, text: 'Gorgeous shared sonnet. Minus 1 star because one delivered WhatsApp would have saved six people.', by: 'Mei, 12', w: 545 });
  const rating = rjRating(d.fg);

  d.shot(0, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.0, mood: 'deadpan', mug: 1 }, mei: { x: 980, y: 510, s: 0.95, mood: 'happy' } } })
    .shot(at('hooks') - 0.05, { set: 'room', cast: { mei: { x: 180, y: 510, s: 0.95, mood: 'happy' } } })
    .shot(at('t1') - 0.05, { conf: 'juliet', cast: { juliet: { x: 250, y: 430, s: 1.2, mood: 'annoyed' } } })
    .shot(at('t2') - 0.05, { conf: 'romeo', cast: { romeo: { x: 250, y: 430, s: 1.2, mood: 'shock' } } })
    .shot(at('t3') - 0.05, { conf: 'tybalt', cast: { tybalt: { x: 250, y: 430, s: 1.2, mood: 'annoyed' } } })
    .shot(at('t4') - 0.05, { conf: 'mercutio', cast: { mercutio: { x: 250, y: 430, s: 1.2, mood: 'smug' } } })
    .shot(at('t5') - 0.05, { conf: 'mrh', cast: { mrh: { x: 250, y: 430, s: 1.2, mood: 'neutral', mug: 1 } } })
    .shot(at('t6') - 0.05, { conf: 'nib', cast: { nib: { x: 250, y: 420, s: 1.2, mood: 'smug' } } })
    .shot(at('four') - 0.05, { set: 'ver', cast: { mei: { x: 270, y: 500, s: 1.08, mood: 'happy', phone: 1 }, will: { x: 900, y: 400, s: 0.96, mood: 'happy', glow: 0.6 } } });

  d.pop(banner, at('intro') + 0.08, end('intro') + 0.2, 620, 230);
  d.pop(hk1, at('hooks') + 0.06, end('hooks') + 0.25, 690, 230);
  d.pop(hk2, mid('hooks', 0.42), end('hooks') + 0.25, 690, 415);

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
