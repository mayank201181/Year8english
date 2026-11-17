/* Scene 5: Form, structure & the Volta (showpiece: Kevin's caesura + Volta's sonnet comparison + Tyger PEEL ladder!).
   School hall: Stanza names 2..8 (Cool Tigers Quietly Creep...) -> End-stopped vs Enjambment vs Kevin's Caesura
   ("Yes. I remember Adlestrop—") -> Volta flips in! Petrarchan (line 9, Rossetti's Remember) vs Shakespearean
   (line 13) -> Ballad, elegy, ode, haiku, villanelle, cyclical structure ("Could" -> "Dare"), free verse ->
   4-rung engPeel ladder on Blake's The Tyger! */
scene('form', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 26, fill: o.fill || 'rgba(20,14,42,0.94)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('hall', engHall(d.bg), (t, g) => g.upd(t));
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), vol = d.who('volta');

  const stz = ['2 Couplet', '3 Tercet', '4 Quatrain', '5 Cinquain', '6 Sestet', '7 Septet', '8 Octave'].map(s => pill(s, { stroke: '#FFB547' }));
  const tEnd = engTech(d.fg, 'END-STOPPED vs ENJAMBMENT', { kind: 'structure', def: 'pauses at line end  vs  runs straight over the line break' });
  const tCae = engTech(d.fg, 'CAESURA', { kind: 'punct', def: 'a deliberate pause IN THE MIDDLE of a line' });
  const qAdl = engQuote(d.fg, { text: 'Yes. I remember Adlestrop—', who: 'Edward Thomas', where: 'Adlestrop (1917)', w: 620, size: 42, hl: ['yes'] });
  const sonCmp = ptkSonnetCompare(d.fg);
  const qRoss = engQuote(d.fg, { text: 'Better by far you should forget and smile / Than that you should remember and be sad.', who: 'Christina Rossetti', where: 'Remember (lines 13–14, after the volta)', w: 740, size: 35, hl: ['forget', 'remember'] });
  const cForms = engCard(d.fg, '• **Cyclical structure**: *Could frame* → ***Dare** frame*\n• **Free verse**: no fixed rhyme/metre, **deliberate** line breaks!\n• Plus **ballad**, **elegy**, **ode**, **haiku**, **villanelle**', { w: 700, size: 28, stroke: '#56D69B', boldFill: '#FFE45C' });

  const peel = engPeel(d.fg, [
    'Blake presents the creator as terrifyingly powerful through a **semantic field** of blacksmithing.',
    'The speaker demands, **"In what furnace was thy brain?"**',
    '**"Furnace"** connotes blinding heat, while trochaic hammer-blows enact the violent forging.',
    'This inspires awe — or **perhaps** fear at a maker who **dares** create something so deadly.',
  ], { w: 790, size: 24, title: 'THE TYGER — TOP-BAND PEEL (+ ALTERNATIVE READING)' });

  d.shot(0, { set: 'hall', cast: { mrh: { x: 200, y: 490, s: 1.0, mood: 'neutral', mug: 1 } } })
    .shot(at('ends') - 0.05, { set: 'hall', cast: { nib: { x: 200, y: 470, s: 0.95, mood: 'smug' } } })
    .shot(at('caes') - 0.05, { set: 'hall', cast: { kevin: { x: 230, y: 490, s: 0.92, mood: 'happy' } } })
    .shot(at('volta') - 0.05, { set: 'hall', cast: { volta: { x: 230, y: 480, s: 0.98, mood: 'happy' } } })
    .shot(at('ross') - 0.05, { set: 'hall', cast: { nib: { x: 190, y: 470, s: 0.92, mood: 'neutral' } } })
    .shot(at('wson') - 0.05, { set: 'hall', cast: { will: { x: 190, y: 430, s: 0.9, mood: 'smug', glow: 0.6 } } })
    .shot(at('free') - 0.05, { set: 'hall', cast: { mrh: { x: 190, y: 490, s: 0.98, mood: 'neutral' } } })
    .shot(at('p1') - 0.05, { set: 'hall', cast: { mei: { x: 160, y: 520, s: 0.9, mood: 'happy' } } });

  d.lower('kevin', at('caes') + 0.1, 2.8);
  d.lower(['VOLTA', 'Italian for "turn". Flips the poem at line 9 or 13.'], at('volta') + 0.1, 3.2);

  stz.forEach((c, i) => d.pop(c, mid('rooms', 0.2 + i * 0.1), end('rooms') + 0.2, 520 + (i % 3) * 220, 200 + Math.floor(i / 3) * 86));
  d.pop(tEnd, at('ends') + 0.08, end('ends') + 0.25, 720, 330);
  d.pop(tCae, at('caes') + 0.05, end('caes') + 0.25, 730, 210);
  d.pop(qAdl, mid('caes', 0.35), end('caes') + 0.25, 730, 420);
  d.pop(qRoss, at('ross') + 0.05, end('ross') + 0.25, 730, 330);
  d.pop(cForms, at('free') + 0.08, end('free') + 0.25, 730, 330);

  return t => {
    d.upd(t);
    if (t >= at('volta') && t < at('volta') + 0.9) {
      vol.set({ t, talk: scTalk(S, t, 'volta'), mood: 'happy', flip: P(t, at('volta'), 0.7, easeOut) });
    }
    const showCmp = (t >= at('sonnets') - 0.05 && t < at('ross') - 0.05) || (t >= at('wson') - 0.05 && t < at('free') - 0.05);
    op(sonCmp, showCmp ? 1 : 0);
    if (showCmp) {
      tr(sonCmp, 730, 330);
      op(sonCmp.left, 1);
      op(sonCmp.right, P(t, at('wson') - 0.05, 0.35, linear));
    }
    qAdl.mark(0, P(t, mid('caes', 0.5), 0.35));
    qRoss.mark(-1, P(t, mid('ross', 0.55), 0.4));

    const pv = engOut(peel, t, at('p1') - 0.05, S.D + 1, 720, 92, 1);
    if (pv) {
      const n = P(t, at('p1'), 0.45) + P(t, at('p2'), 0.45) + P(t, mid('p2', 0.5), 0.45) + P(t, at('p3'), 0.45);
      peel.set(n);
    }
  };
});
