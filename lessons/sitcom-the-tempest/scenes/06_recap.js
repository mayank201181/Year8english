/* Ep 2, Scene 6: Recap — Memory hooks + 6 exam traps + Mei's 4-star review + Prospero sets Ariel free! */
scene('recap', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.add('isl', tmpIsland(d.bg), (t, g) => g.upd(t, 0));

  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), kev = d.who('kevin');
  const pros = d.who('prospero'), cal = d.who('caliban'), ari = d.who('ariel'), mir = d.who('miranda');

  const banner = engCard(d.fg, '**THE TEMPEST** · Memory hooks & six exam traps', { w: 820, size: 34, stroke: ENG.gold });
  const hk1 = engCard(d.fg, '**5 Acts:** Storm → Schemes → Spells → Show → Set free', { w: 780, size: 30, icon: 'tick', stroke: ENG.rose, boldFill: ENG.rose });
  const hk2 = engCard(d.fg, '**Foils:** AIR-iel vs CLAY-iban · **Shipwrecked royals:** S-A-G-A, F', { w: 780, size: 30, icon: 'tick', stroke: '#7FD3FF', boldFill: '#7FD3FF' });

  const TRAPS = [
    ['t1', 'TRAP 1', '✗ "Everyone drowns in Act 1"\n✓ Magical **illusion**: "**Not a hair perish\'d**"'],
    ['t2', 'TRAP 2', '✗ Giving "O brave new world" to Ferdinand\n✓ Spoken by **Miranda**; "**brave**" = **splendid**'],
    ['t3', 'TRAP 3', '✗ Calling Caliban "just a monster"\n✓ Weigh **both** sides: **victim AND villain**'],
    ['t4', 'TRAP 4', '✗ "Prospero IS Shakespeare retiring" as fact\n✓ Present as **interpretation**: "**some critics argue**"'],
    ['t5', 'TRAP 5', '✗ Writing "the reader" & neat happy ending\n✓ Write "**the audience**" · **Antonio stays silent**'],
    ['t6', 'TRAP 6', '✗ Dropping four-line quote boulders\n✓ **Embed** short quotes & **zoom in** on one word ("**sty**")'],
  ].map(([id, tab, text]) => [id, engCard(d.fg, text, { w: 660, size: 30, tab, tabCol: '#C62828', stroke: ENG.gold, boldFill: C.good })]);

  const rev = engReview(d.fg, { stars: 4, text: 'Great storms, elite Caliban poetry. Minus one star because Antonio left Prospero on read.', by: 'Mei, 12', w: 540 });
  const stFree = engStamp(d.fg, 'DISCHARGED!', '#1E9E5A');
  const rating = tmpRating(d.fg);

  d.shot(0, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.0, mood: 'deadpan', mug: 1 }, mei: { x: 980, y: 510, s: 0.95, mood: 'happy' } } })
    .shot(at('hooks') - 0.05, { set: 'room', cast: { mei: { x: 180, y: 510, s: 0.95, mood: 'happy' } } })
    .shot(at('t1') - 0.05, { conf: 'ariel', cast: { ariel: { x: 250, y: 410, s: 1.15, mood: 'happy' } } })
    .shot(at('t2') - 0.05, { conf: 'miranda', cast: { miranda: { x: 250, y: 430, s: 1.2, mood: 'happy' } } })
    .shot(at('t3') - 0.05, { conf: 'caliban', cast: { caliban: { x: 250, y: 430, s: 1.2, mood: 'smug' } } })
    .shot(at('t4') - 0.05, { conf: 'mrh', cast: { mrh: { x: 250, y: 430, s: 1.2, mood: 'deadpan', mug: 1 } } })
    .shot(at('t5') - 0.05, { conf: 'nib', cast: { nib: { x: 250, y: 420, s: 1.2, mood: 'smug' } } })
    .shot(at('t6') - 0.05, { conf: 'kevin', cast: { kevin: { x: 250, y: 440, s: 1.2, mood: 'happy' } } })
    .shot(at('review') - 0.05, { set: 'isl', cast: { mei: { x: 280, y: 500, s: 1.1, mood: 'happy', phone: 1 }, prospero: { x: 920, y: 460, s: 0.95, mood: 'neutral', cloak: 0, staff: 0 } } })
    .shot(at('off') - 0.05, { set: 'isl', cast: { ariel: { x: 340, y: 390, s: 1.05, mood: 'happy' }, prospero: { x: 880, y: 460, s: 0.98, mood: 'happy', cloak: 0, staff: 0 } } });

  d.pop(banner, at('intro') + 0.08, end('intro') + 0.2, 620, 230);
  d.pop(hk1, at('hooks') + 0.06, end('hooks') + 0.25, 690, 240);
  d.pop(hk2, mid('hooks', 0.48), end('hooks') + 0.25, 690, 420);

  TRAPS.forEach(([id, cardEl]) => d.pop(cardEl, at(id) + 0.06, end(id) + 0.18, 800, 380));

  d.pop(rev, at('review') + 0.05, end('review') + 0.25, 600, 350);
  d.pop(stFree, mid('free', 0.25), end('free') + 0.5, 600, 220, 0.88);

  return t => {
    d.upd(t);
    const rv = win(t, at('review'), S.D + 1, 0.25);
    const stars = 3 + P(t, mid('review', 0.2), 0.45, linear);
    rating.set(stars, rv); tr(rating, 1030, 74);
    rev.set(stars);
    if (t >= mid('free', 0.35)) {
      const fly = P(t, mid('free', 0.35), 0.8, easeIn);
      tr(ari, 340 + fly * 260, 390 - fly * 260, 1.05);
    }
  };
});
