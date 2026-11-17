/* Scene 5: Comparing two poems & PEEL (showpiece: idcVenn + 4-rung PEEL ladder on We Wear the Mask!).
   Room 8H: Many Musicians Compose (Message, Methods, Context) -> Block comparison ✗ vs Integrated comparison ✓ +
   connectives (whereas, while, in contrast, similarly) -> Venn diagram (Dunbar vs Agard) -> 4-rung engPeel ladder
   on Dunbar -> writing your own identity poem & spoken analysis without stereotypes! */
scene('compare', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(20,14,42,0.94)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), lexi = d.who('lexi');

  const mmc = ['Message (what)', 'Methods (how)', 'Context (why)'].map(s => pill(s, { stroke: '#FFE45C', color: '#FFE6A8' }));
  const cBlock = engCard(d.fg, '**Block comparison:** all Poem A, then all Poem B → **drops marks!**', { w: 660, size: 29, icon: 'cross', stroke: C.bad, tab: 'AVOID' });
  const cInteg = engCard(d.fg, '**Integrated comparison:** BOTH poems in every paragraph!\nConnectives: **similarly · both · whereas · while · in contrast**', { w: 690, size: 28, icon: 'tick', stroke: C.good, boldFill: C.good, tab: 'TOP BAND', tabCol: '#1E8A55' });
  const venn = idcVenn(d.fg);
  const cOwn = engCard(d.fg, '**Spoken analysis & your own poem:**\n• Signpost clearly & read short quotes slowly\n• Pick **one concrete detail** — avoid sweeping **stereotypes**!', { w: 690, size: 28, stroke: '#5AB4E0', boldFill: '#FFE45C' });

  const peel = engPeel(d.fg, [
    'Dunbar shows prejudice forcing a community to hide suffering behind a false smile.',
    'The personified mask **"grins and lies"** over **"torn and bleeding hearts"**.',
    '**"Grins"** connotes a fixed, painful grimace — armour rather than real happiness.',
    'Speaking as **"we"** in 1890s America, the **refrain** shows an inescapable burden.',
  ], { w: 780, size: 24, title: 'WE WEAR THE MASK — PEEL PARAGRAPH' });

  d.shot(0, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.05, mood: 'neutral', mug: 1 } } })
    .shot(at('integ') - 0.05, { set: 'room', cast: { nib: { x: 190, y: 460, s: 0.95, mood: 'smug' } } })
    .shot(at('venn') - 0.05, { set: 'room', cast: { lexi: { x: 190, y: 480, s: 0.95, mood: 'happy' } } })
    .shot(at('p1') - 0.05, { set: 'room', cast: { mei: { x: 165, y: 520, s: 0.92, mood: 'happy' } } })
    .shot(at('own') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.05, mood: 'happy', mug: 1 } } });

  mmc.forEach((c, i) => d.pop(c, mid('room', 0.25 + i * 0.2), end('room') + 0.2, 740, 210 + i * 92));
  d.pop(cBlock, at('block') + 0.08, end('block') + 0.2, 730, 320);
  d.pop(cInteg, at('integ') + 0.08, end('integ') + 0.25, 730, 320);
  d.pop(venn, at('venn') + 0.05, end('venn') + 0.25, 730, 340);
  d.pop(cOwn, at('own') + 0.08, end('own') + 0.3, 730, 330);

  return t => {
    d.upd(t);
    const pv = engOut(peel, t, at('p1') - 0.05, at('own') - 0.05, 730, 94, 1);
    if (pv) {
      const n = P(t, at('p1'), 0.45) + P(t, at('p2'), 0.45) + P(t, mid('p2', 0.5), 0.45) + P(t, at('p3'), 0.45);
      peel.set(n);
    }
  };
});
