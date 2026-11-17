/* Scene 0: Cold open (no card). Queenstown hawker centre at 7 p.m. (idcHawker): UNESCO 2020 -> Mei chopes the
   table with a tissue packet -> Will orders in Early Modern English -> blank stare -> Mei orders "Uncle, one kopi-O
   kosong, can?" -> Nib calls it broken English -> Lexi (Mother Tongue) & Suitcase appear -> 1 star -> title card. */
scene('cold', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 29, fill: o.fill || 'rgba(20,14,42,0.94)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('hawker', idcHawker(d.bg));
  d.add('title', engTitle(d.bg, 'Episode 8: Home Is Where the Kopi Is'), (t, g) => g.set(clamp((t - at('title')) / 2.0), t));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), lexi = d.who('lexi'), suit = d.who('suitcase');

  const cUnesco = pill('Queenstown Hawker Centre · UNESCO Heritage (2020)', { stroke: ENG.gold, color: '#FFE6A8' });
  const cChope = pill('tissue packet = SEAT CHOPED ✓', { stroke: '#5AB4E0', color: '#BDE7FF' });
  const bBlank = engBubble(d.fg, 'Uncle:  "...?"', { size: 34, tail: 'down' });
  const qKopi = engQuote(d.fg, { text: '“Uncle, one kopi-O kosong, can?”', who: 'Speaker', where: 'Hawker Centre, 7 p.m. (Singapore)', w: 660, size: 38, hl: ['can'] });
  const stCode = engStamp(d.fg, 'CODE-SWITCHING!', '#56D69B');
  const rev = engReview(d.fg, { stars: 1, text: 'Will\'s hawker ordering: 1 star. Asked for "darkest Arabian berry".', by: 'Mei, 7 p.m.', w: 500 });
  const blackout = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#000000' }, d.hud);

  d.shot(0, { set: 'hawker', cam: [1, 1.05, 600, 380], cast: { mei: { x: 260, y: 520, s: 1.05, mood: 'happy' } } })
    .shot(at('willtry') - 0.05, { set: 'hawker', cast: { will: { x: 300, y: 440, s: 0.98, mood: 'smug', glow: 0.6 }, mei: { x: 920, y: 520, s: 1.0, mood: 'deadpan' } } })
    .shot(at('meitry') - 0.05, { set: 'hawker', cast: { mei: { x: 280, y: 520, s: 1.08, mood: 'happy' }, nib: { x: 930, y: 490, s: 0.95, mood: 'annoyed' } } })
    .shot(at('lexi') - 0.05, { set: 'hawker', cast: { lexi: { x: 360, y: 490, s: 1.02, mood: 'happy' }, suitcase: { x: 850, y: 500, s: 1.0, mood: 'happy' } } })
    .shot(at('rev') - 0.05, { conf: 'mei', cast: { mei: { x: 320, y: 430, s: 1.28, mood: 'smug', phone: 1 } } })
    .shot(at('title') - 0.05, { set: 'title', cast: {
      mei: { x: 165, y: 642, s: 0.38, mood: 'happy' }, mrh: { x: 320, y: 642, s: 0.38, mood: 'deadpan' },
      lexi: { x: 485, y: 642, s: 0.37, mood: 'happy' }, suitcase: { x: 655, y: 642, s: 0.37, mood: 'happy' },
      will: { x: 820, y: 632, s: 0.34, mood: 'smug' }, nib: { x: 955, y: 642, s: 0.35, mood: 'smug' }, kevin: { x: 1080, y: 644, s: 0.33, mood: 'happy' } } });

  d.lower(['LEXI (MOTHER TONGUE)', 'Dual-script dictionary. Speaks every Auntie\'s language.'], at('lexi') + 0.1, 3.0);
  d.lower(['SUITCASE', 'Sticker-covered traveller. Lives between two homes.'], at('suit') + 0.1, 3.0);
  d.mood('will', at('blank'), 'sad');

  d.pop(cUnesco, at('hawk') + 0.1, end('hawk') + 0.25, 600, 175);
  d.pop(cChope, at('chope') + 0.08, end('chope') + 0.25, 600, 480);
  d.pop(bBlank, at('blank') + 0.05, end('blank') + 0.25, 600, 280);
  d.pop(qKopi, at('meitry') + 0.05, end('broken') + 0.2, 600, 260);
  d.pop(stCode, mid('lexi', 0.25), end('suit') + 0.2, 600, 210, 0.82);
  d.pop(rev, mid('rev', 0.15), end('rev') + 0.25, 810, 360);

  return t => {
    d.upd(t);
    op(blackout, 1 - P(t, 0, 0.45, linear));
    qKopi.mark(0, P(t, mid('meitry', 0.5), 0.35));
  };
});
