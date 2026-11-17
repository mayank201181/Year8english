/* Scene 1: Analysis, not retelling — and your thesis. Analusis & essayer -> Pundit analogy -> 4-level staircase on
   Caliban's "This island's mine" -> banning "In this essay I will..." -> Thesis formula + "Although..." nuance. */
scene('levels', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.94)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), zm = d.who('zoom');

  const cRoots = engCard(d.fg, '**analusis** (Greek) = untying a knot\n**essayer** (French) = to try an argument', { w: 680, size: 29, stroke: ENG.sky });
  const cPun = engCard(d.fg, '**Fan (Retelling):** "We scored!" (WHAT)\n**Pundit (Analysis):** HOW the space opened & WHY it worked', { w: 760, size: 28, stroke: ENG.gold });
  const qCal = engQuote(d.fg, { text: "This island's mine, by Sycorax my mother,", who: 'Caliban', where: 'The Tempest, Act 1 Scene 2', w: 720, size: 38, hl: ['mine'] });
  const stairs = anlLevels(d.fg);

  const cAnn = engCard(d.fg, '"In this essay I am going to write about Caliban." ✗', { w: 720, size: 29, stroke: C.bad, icon: 'cross', tab: 'ANNOUNCEMENT' });
  const cForm = engCard(d.fg, '**THESIS FORMULA:**\n**[Writer] presents** [X] as ___ and ___, **in order to** ___.', { w: 780, size: 29, tab: 'THESIS', tabCol: '#1E6E9E', stroke: ENG.sky, icon: 'tick' });
  const cAlth = engCard(d.fg, '"**Although** Prospero seems wise, Shakespeare **exposes** his cruelty towards Caliban."', { w: 780, size: 28, stroke: C.good, icon: 'tick' });

  d.shot(0, { set: 'room', cast: { nib: { x: 180, y: 490, s: 0.9, mood: 'smug' }, mrh: { x: 1030, y: 490, s: 0.92, mood: 'neutral', mug: 1 } } })
    .shot(at('cal') - 0.05, { set: 'room', cast: { will: { x: 140, y: 580, s: 0.72, mood: 'smug', glow: 0.4 }, zoom: { x: 1065, y: 585, s: 0.72, mood: 'smug', focus: 0.8 } } })
    .shot(at('announce') - 0.05, { set: 'room', cast: { mei: { x: 200, y: 510, s: 0.95, mood: 'happy' }, nib: { x: 1010, y: 490, s: 0.9, mood: 'annoyed' } } })
    .shot(at('form') - 0.05, { set: 'room', cast: { mrh: { x: 180, y: 500, s: 0.95, mood: 'neutral' }, mei: { x: 1020, y: 510, s: 0.95, mood: 'happy' } } });

  d.mood('mei', at('no'), 'shock').mood('mei', at('although'), 'happy');

  d.pop(cRoots, at('greek') + 0.08, end('greek') + 0.2, 600, 245);
  d.pop(cPun, at('pundit') + 0.08, end('pundit') + 0.22, 600, 250);
  d.pop(qCal, at('cal') + 0.05, end('l4') + 0.22, 600, 175);
  d.pop(cAnn, at('announce') + 0.08, end('no') + 0.2, 600, 240);
  d.pop(cForm, at('form') + 0.08, end('although') + 0.25, 600, 200);
  d.pop(cAlth, at('although') + 0.08, end('although') + 0.3, 600, 395);

  return t => {
    d.upd(t);
    qCal.mark(0, P(t, at('l3'), 0.4));
    const sv = win(t, at('l12') - 0.05, end('l4') + 0.22, 0.2);
    op(stairs, sv);
    if (sv) {
      tr(stairs, 600, 440);
      const n = P(t, mid('l12', 0.05), 0.35) + P(t, mid('l12', 0.55), 0.35) + P(t, at('l3'), 0.4) + P(t, at('l4'), 0.4);
      stairs.set(n);
    }
  };
});
