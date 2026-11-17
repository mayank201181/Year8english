/* Scene 6: Save yourself some marks (Recap). Memory hooks (GAP, Triad+Kairos, HSTC, DAFOREST, Four Ps) ->
   6 exam traps -> Mei saves the curry puffs & awards 4.5 stars -> Will defends 4-hour Hamlet! */
scene('recap', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('hall', engHall(d.bg), (t, g) => g.upd(t));
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), pathos = d.who('pathos'), logos = d.who('logos');

  const hooks = ['G · A · P', 'Ethos · Pathos · Logos · Kairos', 'Happy Speakers Thrill Crowds', 'DAFOREST + Four Ps'].map(s => pill(s, { stroke: ENG.gold, color: '#FFE6A8' }));
  const TRAPS = [
    ['t1', 'TRAP 1', 'Never waste your opening on **"Hello, my name is..."** — grab them with a **hook**!'],
    ['t2', 'TRAP 2', 'Never feature-spot! Write **Device + Quotation + Effect on the listener**.'],
    ['t3', 'TRAP 3', 'Don\'t mix up the triad: **Ethos** = trust, **Pathos** = emotion, **Logos** = logic.'],
    ['t4', 'TRAP 4', '**"Friends, Romans, countrymen"** is **Mark Antony**, NOT Julius Caesar or Brutus!'],
    ['t5', 'TRAP 5', 'Write for the **ear**: use **signposting**, **direct address**, and a **call to action**.'],
    ['t6', 'TRAP 6', 'Use **keyword cue cards**, **pause** around key lines, and never rush over time!'],
  ].map(([id, tab, txt]) => [id, engCard(d.fg, txt, { w: 680, size: 31, tab, stroke: ENG.rose, boldFill: '#FFE45C' })]);

  const rev = engReview(d.fg, { stars: 4.5, text: 'Public Speaking: 4.5 stars. Curry puffs saved! Minus 0.5 for Will\'s 2-hour speech.', by: 'Mei, Competition Winner', w: 550 });

  d.shot(0, { set: 'hall', cast: { mei: { x: 250, y: 490, s: 1.08, mood: 'happy' } } })
    .shot(at('t1') - 0.04, { conf: 'pathos', cast: { pathos: { x: 260, y: 430, s: 1.15, mood: 'happy' } } })
    .shot(at('t2') - 0.04, { conf: 'nib', cast: { nib: { x: 260, y: 420, s: 1.15, mood: 'smug' } } })
    .shot(at('t3') - 0.04, { conf: 'logos', cast: { logos: { x: 260, y: 430, s: 1.15, mood: 'neutral' } } })
    .shot(at('t4') - 0.04, { conf: 'will', cast: { will: { x: 260, y: 410, s: 1.12, mood: 'annoyed' } } })
    .shot(at('t5') - 0.04, { conf: 'mrh', cast: { mrh: { x: 260, y: 430, s: 1.18, mood: 'deadpan', mug: 1 } } })
    .shot(at('t6') - 0.04, { conf: 'kevin', cast: { kevin: { x: 260, y: 440, s: 1.15, mood: 'happy' } } })
    .shot(at('win') - 0.05, { set: 'hall', cast: { mei: { x: 280, y: 490, s: 1.1, mood: 'happy', phone: 1 }, will: { x: 920, y: 430, s: 0.95, mood: 'annoyed' } } });

  hooks.forEach((c, i) => d.pop(c, mid('mnem', 0.08 + i * 0.2), end('mnem') + 0.15, 760, 190 + i * 94));
  TRAPS.forEach(([id, cardEl]) => d.pop(cardEl, at(id) + 0.04, end(id) + 0.15, 790, 380));
  d.pop(rev, at('rev') + 0.05, S.D + 1, 600, 270);

  return t => {
    d.upd(t);
    if (t >= at('rev')) rev.set(4.5 * P(t, at('rev'), 0.6, ease));
  };
});
