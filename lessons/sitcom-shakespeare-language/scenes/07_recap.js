/* Scene 7: Save yourself some marks (recap & Friday review payoff). Classroom: memory hooks -> 6 rapid confessional
   exam trap cards (Kevin, Nib, Mr H, Will, Nib, Will) -> Friday 4 p.m. in the library: Mei submits her four-star
   review ("It was a bit long." / "Hamlet is four hours long!" / "Exactly."). */
scene('recap', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.add('lib', engLibrary(d.bg), (t, g) => g.upd(t, 0));
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin');

  const banner = engCard(d.fg, '**SAVE YOURSELF SOME MARKS** · Six classic Shakespeare exam traps', { w: 860, size: 34, stroke: ENG.gold });
  const hk1 = engCard(d.fg, '**i-AM × 5**  =  iambic pentameter (10 syllables, da-DUM × 5)', { w: 780, size: 30, icon: 'tick', stroke: ENG.rose, boldFill: ENG.rose });
  const hk2 = engCard(d.fg, '**THOU · THEE · THY · THINE**  =  I · ME · MY · MINE', { w: 780, size: 30, icon: 'tick', stroke: '#8FD3FF', boldFill: '#8FD3FF' });

  const TRAPS = [
    ['t1', 'TRAP 1', '✗ Wherefore = "where?"\n✓ **Wherefore = WHY** (Why must you be a Montague?)'],
    ['t2', 'TRAP 2', '✗ "Shakespeare wrote Old English"\n✓ **Early Modern English** (Beowulf is Old English)'],
    ['t3', 'TRAP 3', '✗ Feature-spotting & huge block quotes\n✓ **Short, embedded** quotes + what the language **does**'],
    ['t4', 'TRAP 4', '✗ Calling every long speech a soliloquy\n✓ Listeners on stage = **monologue** · Alone = **soliloquy**'],
    ['t5', 'TRAP 5', '✗ "Thou is the posh, formal pronoun"\n✓ **Thou** = familiar (or rude) · **You** = polite & formal'],
    ['t6', 'TRAP 6', '✗ "Shakespeare invented the word lonely"\n✓ **Earliest recorded user** in surviving print'],
  ].map(([id, tab, text]) => [id, engCard(d.fg, text, { w: 660, size: 30, tab, tabCol: '#C62828', stroke: ENG.gold, boldFill: C.good })]);

  const cFri = pill('Friday · 4 p.m. · Review submitted', { stroke: ENG.gold });
  const rev = engReview(d.fg, { stars: 4, text: 'Shakespeare: pretty good once you get the heartbeat. Still a bit long.', by: 'Mei, 12', w: 540 });
  const big4 = G(d.fg), big4T = T(big4, 0, 0, 'FOUR?!', { size: 96, weight: 800, anchor: 'middle', fill: '#CFE6FF' });
  engOutline(big4T, '#1E2A5A', 12);
  const c4hrs = pill('Hamlet uncut ≈ 4 hours!', { size: 32, stroke: ENG.rose, color: '#FFD0DC' });
  const rating = osRating(d.fg);

  /* shots */
  d.shot(0, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.0, mood: 'deadpan', mug: 1 }, mei: { x: 980, y: 510, s: 0.95, mood: 'happy' } } })
    .shot(at('hooks') - 0.05, { set: 'room', cast: { mei: { x: 180, y: 510, s: 0.95, mood: 'happy' } } })
    .shot(at('t1') - 0.05, { conf: 'kevin', cast: { kevin: { x: 250, y: 440, s: 1.2, mood: 'sad', bag: 1, sweat: 1 } } })
    .shot(at('t2') - 0.05, { conf: 'nib', cast: { nib: { x: 250, y: 420, s: 1.2, mood: 'smug' } } })
    .shot(at('t3') - 0.05, { conf: 'mrh', cast: { mrh: { x: 250, y: 430, s: 1.25, mood: 'deadpan', mug: 1 } } })
    .shot(at('t4') - 0.05, { conf: 'will', cast: { will: { x: 250, y: 400, s: 1.15, mood: 'smug', quill: 1 } } })
    .shot(at('t5') - 0.05, { conf: 'nib', cast: { nib: { x: 250, y: 420, s: 1.2, mood: 'smug' } } })
    .shot(at('t6') - 0.05, { conf: 'will', cast: { will: { x: 250, y: 400, s: 1.15, mood: 'sad', glow: 0.4 } } })
    .shot(at('submit') - 0.05, { set: 'lib', cast: { mei: { x: 300, y: 500, s: 1.1, mood: 'happy', phone: 1 }, will: { x: 880, y: 400, s: 0.95, mood: 'happy' } } })
    .shot(at('whyfour') - 0.05, { set: 'lib', cam: [1, 1.06, 600, 430], cast: { mei: { x: 300, y: 500, s: 1.1, mood: 'deadpan' }, will: { x: 860, y: 400, s: 1.0, mood: 'shock', glow: 1 } } });

  d.mood('will', at('hours'), 'annoyed').mood('mei', at('exactly'), 'smug').mood('will', at('exactly'), 'sad');
  d.shake(at('whyfour') + 0.05, 8);

  d.pop(banner, at('intro') + 0.08, end('intro') + 0.2, 620, 230);
  d.pop(hk1, at('hooks') + 0.08, end('hooks') + 0.25, 690, 240);
  d.pop(hk2, mid('hooks', 0.5), end('hooks') + 0.25, 690, 420);

  TRAPS.forEach(([id, cardEl]) => d.pop(cardEl, at(id) + 0.06, end(id) + 0.18, 800, 380));

  d.pop(cFri, at('submit') + 0.08, end('submit') + 0.2, 600, 140);
  d.pop(rev, at('four') + 0.05, end('exactly') + 0.8, 580, 360);
  d.pop(big4, at('whyfour') + 0.04, end('long') + 0.1, 860, 190);
  d.pop(c4hrs, at('hours') + 0.06, end('exactly') + 0.8, 580, 600);

  return t => {
    d.upd(t);
    const rv = win(t, at('submit'), S.D + 1, 0.25);
    const stars = 3 + P(t, mid('four', 0.25), 0.5, linear);
    rating.set(stars, rv); tr(rating, 1030, 74);
    rev.set(stars);
  };
});
