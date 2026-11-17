/* Scene 2: Fresh imagery and pathetic fallacy. Addie's "cats and dogs / cold as ice" clichés -> Cliché Ladder
   ("cold as the MRT air-con at 7 a.m.", "straight silver rods", "colour of teh tarik") -> Personification
   (MRT doors sighed) -> Pathetic fallacy (John Ruskin, 1856, Greek pathos = feeling!) -> Miranda's storm -> two stars. */
scene('imagery', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.94)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('street', dscRainStreet(d.bg), (t, g) => g.upd(t, 0.9));
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), cam = d.who('cam'), adj = d.who('adj');

  const rungs = [
    ['FRESH ✓', '"cold as the **MRT air-con at 7 a.m.**"', C.good],
    ['BETTER', '"cold as a fridge door"', '#FFB547'],
    ['CLICHÉ ✗', '"as **cold as ice**" / "cats and dogs"', C.bad],
  ].map(([tag, tx, col]) => {
    const g = G(d.fg);
    E('rect', { x: -350, y: -40, width: 700, height: 80, rx: 14, fill: 'rgba(12,22,38,0.95)', stroke: col, 'stroke-width': 4 }, g);
    T(g, -320, 8, tag, { size: 26, weight: 800, fill: col });
    T(g, -145, 8, tx, { size: 26, weight: 700, fill: '#FFFFFF', font: FB });
    return g;
  });

  const cLocal = pill('"straight silver rods" · dusk the colour of teh tarik', { size: 28, stroke: '#FFB547', color: '#FFE6A8' });
  const tPers = engTech(d.fg, 'PERSONIFICATION', { kind: 'language', def: '"the MRT doors sighed open... breathed out a crowd"' });
  const tPF = engTech(d.fg, 'PATHETIC FALLACY', { kind: 'language', def: 'weather mirrors mood (John Ruskin, 1856 · pathos = feeling)' });
  const cJoy = pill('Not "sad & pathetic" — joyful sunshine counts too!', { size: 27, stroke: C.good });
  const qMir = engQuote(d.fg, { text: "the sea, mounting to th' welkin's cheek, / Dashes the fire out.", who: 'Miranda', where: 'The Tempest, Act 1 Scene 2', w: 740, size: 37, hl: ['mounting', 'cheek', 'dashes'] });
  const cPurp = engCard(d.fg, '**TRAP:** Stacking 5 similes = **purple prose**.\nOne sharp image beats three tangled ones.', { w: 700, size: 29, stroke: C.bad, icon: 'cross' });
  const rating = dscRating(d.fg);

  d.shot(0, { set: 'street', cast: { adj: { x: 200, y: 520, s: 0.95, mood: 'happy' }, nib: { x: 1010, y: 500, s: 0.9, mood: 'annoyed' } } })
    .shot(at('ladder') - 0.05, { set: 'street', cast: { mrh: { x: 160, y: 540, s: 0.88, mood: 'neutral' }, mei: { x: 1040, y: 540, s: 0.88, mood: 'happy' } } })
    .shot(at('pers') - 0.05, { set: 'street', cast: { cam: { x: 180, y: 520, s: 0.92, mood: 'smug' }, nib: { x: 1020, y: 500, s: 0.9, mood: 'smug' } } })
    .shot(at('pathos') - 0.05, { set: 'street', cast: { mei: { x: 200, y: 530, s: 0.95, mood: 'neutral' }, nib: { x: 1010, y: 500, s: 0.9, mood: 'happy' } } })
    .shot(at('miranda') - 0.05, { set: 'street', cast: { will: { x: 160, y: 510, s: 0.85, mood: 'happy', glow: 0.8, quill: 1 }, mrh: { x: 1040, y: 530, s: 0.88, mood: 'deadpan' } } })
    .shot(at('two') - 0.05, { conf: 'mei', cast: { mei: { x: 330, y: 430, s: 1.3, mood: 'happy', phone: 1 } } });

  d.pop(rungs[2], at('ice') + 0.1, end('rods') + 0.2, 600, 360);
  d.pop(rungs[1], at('cliche') + 0.15, end('rods') + 0.2, 600, 260);
  d.pop(rungs[0], at('ladder') + 0.1, end('rods') + 0.2, 600, 160);
  d.pop(cLocal, at('rods') + 0.08, end('rods') + 0.25, 600, 470);
  d.pop(tPers, at('pers') + 0.08, end('pers') + 0.25, 600, 240);
  d.pop(tPF, at('pf') + 0.08, end('greek') + 0.25, 600, 220);
  d.pop(cJoy, at('greek') + 0.1, end('greek') + 0.25, 600, 390);
  d.pop(qMir, at('miranda') + 0.05, end('miranda') + 0.25, 600, 240);
  d.pop(cPurp, at('purple') + 0.08, end('purple') + 0.25, 600, 260);

  return t => {
    d.upd(t);
    qMir.mark(-1, P(t, mid('miranda', 0.4), 0.5));
    const rv = win(t, at('two'), S.D + 1, 0.25);
    rating.set(1 + P(t, mid('two', 0.2), 0.5, linear), rv); tr(rating, 920, 250);
  };
});
