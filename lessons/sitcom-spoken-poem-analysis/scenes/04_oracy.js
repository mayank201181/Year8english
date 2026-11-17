/* Scene 4: Sounding like a critic (Oracy skills: PEEP, signposting, tentative language, voicing quotes + engPeel ladder).
   School hall: Mike teaches PEEP -> Signposting phrases -> Tentative phrasing ('could suggest' vs over-hedged soup) ->
   Voicing quotes without 'quote unquote' -> Showpiece engPeel spoken ladder on Edward Thomas's 'Adlestrop'! */
scene('oracy', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('hall', engHall(d.bg), (t, g) => { g.upd(t); g.curtain(1); g.spot(1, 600); });
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('mike');

  const peepC = engCard(d.fg, '**PEEP** up from your notes!\n**P**ace (steady) · **E**ye contact · **E**mphasis · **P**auses (swap "um" for silence!)', { w: 780, size: 27, stroke: ENG.gold });
  const signC = pill('Signposts: "My first point..." · "Moving on to structure..." · "To conclude..."', { size: 25, stroke: '#5AB4E0', color: '#D4EEFF' });
  const tentC = engCard(d.fg, '**Tentative phrasing**: "This **could suggest**..." · "**Perhaps** the poet implies..."', { w: 740, size: 28, icon: 'tick', stroke: C.good });
  const soupC = engCard(d.fg, '"It could maybe perhaps possibly sort of suggest..."', { w: 680, size: 28, tab: 'HEDGE SOUP', icon: 'cross', stroke: C.bad });
  const quoC = pill('Never say "quote, unquote" — slow down slightly to voice the quote!', { size: 26, stroke: ENG.rose });

  const peel = engPeel(d.fg, [
    'Moving on to **structure**, the final stanza shifts from platform silence to vast song.',
    '"**Farther and farther**, all the birds / Of Oxfordshire and Gloucestershire."',
    'Repeating **"farther"** and rolling out long county names makes one bird\'s song **ripple outwards**.',
    '**Evaluate**: alongside 1914 context, **perhaps** this ordinary minute feels like a last peaceful glimpse.',
  ], { w: 790, size: 24, title: 'SPOKEN PEEL ON "ADLESTROP"' });
  const stCalm = engStamp(d.fg, 'ZERO SQUEAKS!', '#56D69B');

  d.shot(0, { set: 'hall', cast: { mike: { x: 430, y: 460, s: 1.05, mood: 'happy' }, mei: { x: 780, y: 480, s: 1.05, mood: 'neutral' } } })
    .shot(at('sign') - 0.05, { set: 'hall', cast: { mrh: { x: 220, y: 480, s: 1.0, mood: 'neutral', mug: 1 }, nib: { x: 980, y: 470, s: 0.9, mood: 'smug' } } })
    .shot(at('over') - 0.05, { set: 'hall', cast: { mei: { x: 260, y: 490, s: 1.02, mood: 'smug' }, mrh: { x: 960, y: 480, s: 0.96, mood: 'deadpan' } } })
    .shot(at('quote') - 0.05, { set: 'hall', cast: { will: { x: 230, y: 410, s: 0.92, mood: 'happy', glow: 0.7 }, mike: { x: 960, y: 470, s: 0.95, mood: 'happy' } } })
    .shot(at('p') - 0.05, { set: 'hall', cast: { mei: { x: 115, y: 580, s: 0.68, mood: 'happy' }, mike: { x: 1090, y: 575, s: 0.68, mood: 'happy' } } })
    .shot(at('happy') - 0.05, { set: 'hall', cast: { mike: { x: 440, y: 460, s: 1.08, mood: 'happy' }, mei: { x: 790, y: 480, s: 1.08, mood: 'happy' } } });

  d.pop(peepC, at('peep') + 0.08, end('peep') + 0.2, 600, 220);
  d.pop(signC, at('sign') + 0.08, end('sign') + 0.2, 600, 230);
  d.pop(tentC, at('tent') + 0.08, end('tent') + 0.2, 600, 250);
  d.pop(soupC, at('over') + 0.08, end('hedge') + 0.15, 600, 240);
  d.pop(quoC, at('quote') + 0.08, end('quote') + 0.2, 600, 230);
  d.pop(stCalm, at('happy') + 0.15, end('happy') + 0.25, 600, 230, 0.95);

  return t => {
    d.upd(t);
    const pv = engOut(peel, t, at('p') - 0.05, at('happy') - 0.1, 600, 95, 0.95);
    if (pv) {
      const n = P(t, at('p'), 0.45) + P(t, at('e'), 0.45) + P(t, at('ex'), 0.45) + P(t, at('l'), 0.45);
      peel.set(n);
    }
  };
});
