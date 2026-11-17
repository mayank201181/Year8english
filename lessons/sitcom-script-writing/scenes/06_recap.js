/* Scene 6: Save yourself some marks (Recap). Memory hooks (SCRIPT, See/Hear/Cut, SPCLSB, CQTEL) ->
   6 exam traps, one character each -> Period 5 bell: Mei reviews Script Writing at 4 stars -> Bracket exits! */
scene('recap', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), brack = d.who('brack'), clap = d.who('clapper');

  const hooks = ['SCRIPT layout', 'See it? Hear it? Cut it!', "Some People Can't Leave Sound Behind", 'C · Q · T · E · L'].map(s => pill(s, { stroke: ENG.gold, color: '#FFE6A8' }));
  const TRAPS = [
    ['t1', 'TRAP 1', 'Never put **invisible thoughts** or backstory in stage directions — show visible action!'],
    ['t2', 'TRAP 2', '**CAPITALS + colon** in the margin, **no speech marks**, directions in **present tense**.'],
    ['t3', 'TRAP 3', 'Avoid **(angrily)** on every line, and give each character a distinct **idiolect**.'],
    ['t4', 'TRAP 4', '**Stage left** = the **actor\'s left** facing out; **downstage** = nearest the audience.'],
    ['t5', 'TRAP 5', 'Keep adaptations **consistent** with the original play\'s events and secrets.'],
    ['t6', 'TRAP 6', 'Never retell your plot in the **commentary** — **quote yourself** and explain **why**!'],
  ].map(([id, tab, txt]) => [id, engCard(d.fg, txt, { w: 680, size: 31, tab, stroke: ENG.rose, boldFill: '#FFE45C' })]);

  const rev = engReview(d.fg, { stars: 4, text: 'Script writing: 4 stars. Deducting one because I had to analyse myself.', by: 'Mei, Period 5', w: 540 });

  d.shot(0, { set: 'room', cast: { mei: { x: 240, y: 500, s: 1.08, mood: 'happy' } } })
    .shot(at('t1') - 0.04, { conf: 'brack', cast: { brack: { x: 260, y: 420, s: 1.2, mood: 'annoyed' } } })
    .shot(at('t2') - 0.04, { conf: 'kevin', cast: { kevin: { x: 260, y: 440, s: 1.15, mood: 'happy' } } })
    .shot(at('t3') - 0.04, { conf: 'nib', cast: { nib: { x: 260, y: 420, s: 1.15, mood: 'smug' } } })
    .shot(at('t4') - 0.04, { conf: 'clapper', cast: { clapper: { x: 260, y: 430, s: 1.15, mood: 'happy', snap: 1 } } })
    .shot(at('t5') - 0.04, { conf: 'will', cast: { will: { x: 260, y: 410, s: 1.12, mood: 'smug' } } })
    .shot(at('t6') - 0.04, { conf: 'mrh', cast: { mrh: { x: 260, y: 430, s: 1.18, mood: 'deadpan', mug: 1 } } })
    .shot(at('bell') - 0.05, { set: 'room', cast: { mei: { x: 280, y: 500, s: 1.1, mood: 'happy', phone: 1 }, brack: { x: 930, y: 460, s: 0.98, mood: 'happy' } } });

  hooks.forEach((c, i) => d.pop(c, mid('mnem', 0.08 + i * 0.2), end('mnem') + 0.15, 750, 190 + i * 96));
  TRAPS.forEach(([id, cardEl]) => d.pop(cardEl, at(id) + 0.04, end(id) + 0.15, 790, 380));
  d.pop(rev, at('four') + 0.05, S.D + 1, 610, 290);

  return t => {
    d.upd(t);
    if (t >= at('four')) rev.set(4 * P(t, at('four'), 0.6, ease));
    if (t >= at('exit')) {
      const p = P(t, mid('exit', 0.35), 0.7, ease);
      tr(brack, 930 + 340 * p, 460, 0.98, 12 * p);
    }
  };
});
