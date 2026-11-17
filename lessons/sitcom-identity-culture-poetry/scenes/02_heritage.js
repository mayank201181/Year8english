/* Scene 2: Heritage, symbolic objects & Ah Ma. Mei's HDB flat (engFlat; Ah Ma NEVER drawn, uses engBubble at g.door!).
   Symbolic objects -> Alvi's Presents from my Aunts in Pakistan ("peacock-blue", "candy-striped glass bangles",
   "alien in the sitting-room", "of no fixed nationality" — unresolved!) -> Naidu's In the Bazaars of Hyderabad (1912)
   -> Ah Ma calls from kitchen doorway -> In Paati's Language ("two rivers running side by side" / bangle) -> 3 stars! */
scene('heritage', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);

  const flat = d.add('flat', engFlat(d.bg), (t, g) => { g.upd(t); g.clock(20); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), lexi = d.who('lexi');

  const tSym = engTech(d.fg, 'SYMBOLIC OBJECT', { kind: 'language', def: 'a concrete family item standing for abstract heritage' });
  const cAlvi = engCard(d.fg, 'Moniza Alvi (*Presents from my Aunts in Pakistan*):\n• **"peacock-blue"** outfit & **"candy-striped glass bangles"**\n• Feels **"alien in the sitting-room"**\n• Ends **"of no fixed nationality"** (in-between!)', { w: 700, size: 27, stroke: ENG.violet, boldFill: '#FFE45C' });
  const qNai = engQuote(d.fg, { text: 'What do you sell, O ye merchants? / Richly your wares are displayed.', who: 'Sarojini Naidu', where: 'In the Bazaars of Hyderabad (1912)', w: 710, size: 36, hl: ['richly'] });
  const bAhma1 = engBubble(d.fg, 'Mei! Come and taste the soup,\ntell me enough salt or not!', { size: 30, tail: 'left' });
  const qPaa = engQuote(d.fg, { text: 'as if / my clumsy sentence were a bangle / she had given me years ago', who: 'Speaker', where: "In Paati's Language", w: 700, size: 36, hl: ['bangle'] });
  const bAhma2 = engBubble(d.fg, 'Your Hokkien still clumsy, Mei,\nbut better than the noisy ghost!', { size: 30, tail: 'left' });
  const rating = idcRating(d.fg);

  d.shot(0, { set: 'flat', cast: { nib: { x: 260, y: 480, s: 0.95, mood: 'smug' }, mei: { x: 930, y: 500, s: 1.0, mood: 'happy' } } })
    .shot(at('alvi') - 0.05, { set: 'flat', cast: { lexi: { x: 220, y: 490, s: 0.95, mood: 'happy' }, mrh: { x: 1030, y: 500, s: 0.88, mood: 'neutral' } } })
    .shot(at('naidu') - 0.05, { set: 'flat', cast: { lexi: { x: 210, y: 490, s: 0.95, mood: 'happy' }, nib: { x: 1030, y: 490, s: 0.88, mood: 'smug' } } })
    .shot(at('ahma') - 0.05, { set: 'flat', cast: { mei: { x: 820, y: 500, s: 1.05, mood: 'happy' }, will: { x: 1040, y: 430, s: 0.9, mood: 'shock' } } })
    .shot(at('paati') - 0.05, { set: 'flat', cast: { mei: { x: 230, y: 500, s: 1.02, mood: 'happy' } } })
    .shot(at('ahma2') - 0.05, { set: 'flat', cast: { mei: { x: 640, y: 500, s: 1.02, mood: 'happy', phone: 1 }, will: { x: 960, y: 430, s: 0.95, mood: 'happy', glow: 0.7 } } });

  d.pop(tSym, at('sym') + 0.08, end('sym') + 0.25, 620, 310);
  d.pop(cAlvi, at('alvi') + 0.08, end('unres') + 0.2, 620, 310);
  d.pop(qNai, at('naidu') + 0.05, end('cycle') + 0.2, 620, 310);
  d.pop(bAhma1, at('ahma') + 0.05, end('ahma') + 0.25, 430, 350);
  d.pop(qPaa, at('paati') + 0.05, end('paati') + 0.25, 730, 320);
  d.pop(bAhma2, at('ahma2') + 0.05, end('ahma2') + 0.3, 390, 350);

  return t => {
    d.upd(t);
    qNai.mark(0, P(t, mid('naidu', 0.6), 0.4));
    qPaa.mark(0, P(t, mid('paati', 0.65), 0.4));
    const rv = win(t, mid('bow', 0.25), S.D + 1, 0.25);
    rating.set(1 + 2 * P(t, mid('bow', 0.35), 0.5, linear), rv); tr(rating, 1030, 74);
  };
});
