/* Scene 5: Sentence skylines, timing and ARMS (showpiece: sentence skyline + ARMS upgrade ladder).
   dscSkyline bar chart -> Some Lazy Cats Fear Mice -> Dickens's "Fog everywhere." -> Colon, semicolon, dash ->
   Kevin's comma-splice panic vs fronted-adverbial joy -> ARMS 4-rung upgrade ladder! */
scene('rhythm', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.94)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), cam = d.who('cam'), adj = d.who('adj');

  const sky = dscSkyline(d.fg);
  const cCats = engCard(d.fg, '**S**ome **L**azy **C**ats **F**ear **M**ice\n**S**hort · **L**ist · **C**omplex · **F**ronted adverbial · **M**inor', { w: 760, size: 28, tab: '5 SENTENCE SHAPES', tabCol: '#1E6E9E', stroke: ENG.sky });
  const qFog = engQuote(d.fg, { text: 'Fog everywhere. Fog up the river, where it flows among green aits and meadows;', who: 'Opening Paragraph', where: 'Dickens, Bleak House (1853)', w: 760, size: 35, hl: ['fog', 'everywhere'] });

  const cPunct = engCard(d.fg,
    '**Colon ( : )** → held breath + reveal ("one sound**:** the drip")\n**Semicolon ( ; )** → balances two linked sentences\n**Dash ( — )** → sudden jolt ("calm **—** too calm")',
    { w: 780, size: 27, tab: 'TIMING MARKS', tabCol: '#6A3AB8', stroke: '#B58CFF' });

  const cSplice = engCard(d.fg, '✗ "The rain stopped**,** the steam rose." (comma splice!)\n✓ "**Beneath the awning,** steam rose." (fronted adverbial!)', { w: 760, size: 28, stroke: C.good });

  // 4-step ARMS upgrade ladder using engPeel visual architecture + ARMS header
  const peel = engPeel(d.fg, [
    '**Remove (R):** cut "very busy", "nice", "I could see" & "!!!"',
    '**Substitute (S):** "ran quickly" → "**sprinted**"; "food" → "**char kway teow**"',
    '**Add (A):** charcoal smoke, sizzling oil & "**Nobody spoke.**"',
    '**Move (M):** save the glowing lantern echo for the final line!',
  ], { w: 800, size: 24, title: 'REDRAFTING UPGRADE — A · R · M · S' });

  d.shot(0, { set: 'room', cast: { mrh: { x: 160, y: 520, s: 0.9, mood: 'deadpan' }, cam: { x: 1040, y: 520, s: 0.9, mood: 'smug' } } })
    .shot(at('cats') - 0.05, { set: 'room', cast: { nib: { x: 160, y: 510, s: 0.86, mood: 'smug' }, will: { x: 1040, y: 500, s: 0.82, mood: 'smug', glow: 0.4 } } })
    .shot(at('punct') - 0.05, { set: 'room', cast: { nib: { x: 160, y: 510, s: 0.86, mood: 'smug' }, mrh: { x: 1040, y: 520, s: 0.88, mood: 'neutral' } } })
    .shot(at('splice') - 0.05, { set: 'room', cast: { kevin: { x: 220, y: 510, s: 0.92, mood: 'shock', bag: 1, sweat: 1 }, mei: { x: 1000, y: 520, s: 0.92, mood: 'happy' } } })
    .shot(at('arms') - 0.05, { set: 'room', cast: { mrh: { x: 135, y: 590, s: 0.72, mood: 'happy' }, mei: { x: 1070, y: 590, s: 0.74, mood: 'happy' } } })
    .shot(at('addie2') - 0.05, { conf: 'adj', cast: { adj: { x: 330, y: 430, s: 1.25, mood: 'smug', jitter: 0.15 } } });

  d.mood('kevin', mid('splice', 0.55), 'happy').x('kevin', mid('splice', 0.55), { bag: 0, sweat: 0 });

  d.pop(sky, at('flat') + 0.08, end('sky') + 0.2, 600, 255);
  d.pop(cCats, at('cats') + 0.08, end('cats') + 0.2, 600, 250);
  d.pop(qFog, at('fog') + 0.05, end('fog') + 0.22, 600, 245);
  d.pop(cPunct, at('punct') + 0.08, end('semi') + 0.2, 600, 255);
  d.pop(cSplice, at('splice') + 0.08, end('splice') + 0.22, 620, 255);

  return t => {
    d.upd(t);
    sky.set(P(t, at('sky'), 0.9, easeOut));
    qFog.mark(-1, P(t, mid('fog', 0.35), 0.45));
    const pv = win(t, at('arms') + 0.1, end('r2') + 0.25, 0.25);
    op(peel, pv);
    if (pv) {
      tr(peel, 600, 95);
      const n = P(t, mid('r1', 0.05), 0.4) + P(t, mid('r1', 0.5), 0.4) + P(t, mid('r2', 0.05), 0.4) + P(t, mid('r2', 0.55), 0.4);
      peel.set(n);
    }
  };
});
