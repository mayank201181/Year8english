/* Ep 3, Scene 5: Climbing the Hamlet PEEL ladder. Classroom (Mug 10: TO TEA OR NOT TO TEA) -> 5 soliloquies
   mnemonic ("Some Real Thinkers Never Act") -> 7 themes ("WARM CAM") -> Mei's 4-rung PEEL ladder on "To be, or not
   to be" -> Will's proud "aircon in my eye". */
scene('peel', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib');

  const cMug10 = pill('Mug #10: "TO TEA OR NOT TO TEA" (finally relevant!)', { stroke: '#FFB547', color: '#FFE6A8' });
  const cSol5 = engCard(d.fg, '**Some Real Thinkers Never Act** (5 big soliloquies):\n1. **S**olid flesh (1.2) · 2. **R**ogue (2.2) · 3. **T**o be (3.1) · 4. **N**ow might I (3.3) · 5. **A**ll occasions (4.4)', { w: 830, size: 27, stroke: '#B58CFF' });
  const cWarm = engCard(d.fg, '**W · A · R · M   C · A · M** (7 themes):\n**W**omen · **A**ction vs thought · **R**evenge · **M**adness · **C**orruption · **A**ppearance vs reality · **M**ortality', { w: 830, size: 27, stroke: ENG.rose });

  const cQ = pill("Task: How does Shakespeare present Hamlet's mind in 'To be, or not to be'?", { size: 28, stroke: ENG.gold });

  const peel = engPeel(d.fg, [
    'Shakespeare presents Hamlet as a mind **paralysed by over-thinking**, not simply a coward.',
    'He weighs "**The slings and arrows**" against "**a sea of troubles**", saying "**conscience does make cowards of us all**".',
    'Military imagery feels relentless; "**sea**" seems vast; "**us**" (never "I") turns hesitation into a universal law.',
    'Dramatises **thought vs action**: determination is "**sicklied o\'er with the pale cast of thought**".',
  ], { w: 800, size: 23, title: "MEI'S HAMLET PEEL + ZOOM" });

  const stTop = engStamp(d.fg, 'TOP BAND!', '#1E9E5A');
  const cAir = pill('Definitely just the library aircon.', { size: 28, stroke: '#7FD3FF', color: '#E6F4FF' });

  d.shot(0, { set: 'room', cast: { mrh: { x: 220, y: 480, s: 1.05, mood: 'deadpan', mug: 1 }, nib: { x: 1000, y: 480, s: 0.9, mood: 'smug' } } })
    .shot(at('warm') - 0.05, { set: 'room', cast: { mei: { x: 200, y: 510, s: 0.98, mood: 'happy' }, mrh: { x: 1020, y: 490, s: 0.9, mood: 'neutral', mug: 1 } } })
    .shot(at('p1') - 0.05, { set: 'room', cast: { mei: { x: 170, y: 520, s: 0.92, mood: 'happy' } } })
    .shot(at('bravo') - 0.05, { set: 'room', cast: { mrh: { x: 280, y: 480, s: 1.05, mood: 'happy', mug: 1 }, will: { x: 880, y: 410, s: 0.98, mood: 'sad', glow: 0.8 } } });

  d.pop(cMug10, at('tea10') + 0.08, end('tea10') + 0.2, 620, 150);
  d.pop(cSol5, at('sol5') + 0.08, end('sol5') + 0.25, 610, 290);
  d.pop(cWarm, at('warm') + 0.08, end('warm') + 0.25, 610, 290);
  d.pop(cQ, at('task') + 0.08, end('task') + 0.2, 610, 220);

  d.pop(stTop, at('bravo') + 0.1, end('proud') + 0.3, 600, 210, 0.85);
  d.pop(cAir, at('proud') + 0.08, end('proud') + 0.35, 600, 560);

  return t => {
    d.upd(t);
    const pv = engOut(peel, t, at('p1') - 0.05, end('p4') + 0.3, 750, 90, 1);
    if (pv) {
      const rungs = P(t, at('p1'), 0.5, easeOut) +
        P(t, at('p2'), 0.5, easeOut) +
        P(t, at('p3'), 0.55, easeOut) +
        P(t, at('p4'), 0.55, easeOut);
      peel.set(rungs);
    }
  };
});
