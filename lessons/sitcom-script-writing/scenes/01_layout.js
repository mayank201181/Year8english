/* Scene 1: Page layout & stage directions. Classroom. No narrator -> SCRIPT mnemonic on a real script page
   (Scene heading, dramatis personae, CAPITALS + colon, no speech marks, present-tense directions in brackets/italics,
   Enter/Exit/Exeunt) -> Bracket's "See it? Hear it? Or cut it" test -> Mei's "basically" makes Nib leak ink ->
   Will's "Exit, pursued by a bear" & embedded stage direction ("Wilt thou be gone?") -> 1 page ≈ 1 minute. */
scene('layout', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), brack = d.who('brack'), clap = d.who('clapper');

  /* Annotated model script page */
  const pg = engPaper(d.fg, 580, 390, { title: 'PLAYSCRIPT LAYOUT (SCRIPT)' });
  const pgLines = [
    ['SCENE 1. A bus shelter. Night. Rain.', '#92400E', 24, 800],
    ['(LEO sits alone. Enter KAI, soaked.)', '#6B21A8', 24, 700],
    ['KAI: You waited.', '#1E293B', 26, 800],
    ['LEO: (quietly) Bus is late.', '#1E293B', 26, 800],
    ['(Thunder. Exeunt.)', '#6B21A8', 24, 700],
  ].map(([txt, col, sz, wt], i) => T(pg, -255, -100 + i * 54, txt, { size: sz, weight: wt, fill: col, font: FB }));
  const noQuotes = pill('NO speech marks · NO "she said"', { size: 30, stroke: C.good, color: '#C9F2D3' });
  const tExeunt = engTech(d.fg, 'EXEUNT', { kind: 'drama', def: "Latin: 'they go out' (2+ characters)" });

  /* See it? Hear it? Or cut it! cards */
  const cWrong = engCard(d.fg, '(She **feels guilty** about last summer.) → invisible thought!', { w: 640, size: 30, icon: 'cross', stroke: C.bad, tab: 'NOVEL NARRATION' });
  const cRight = engCard(d.fg, '(She **hides the bag of broken china**.) → visible action!', { w: 640, size: 30, icon: 'tick', stroke: C.good, boldFill: C.good, tab: 'SEE OR HEAR IT', tabCol: '#1E8A55' });
  const tParen = engTech(d.fg, 'PARENTHETICAL', { kind: 'drama', def: 'short (delivery cue) before a line — use sparingly!' });

  /* Shakespeare's bear & embedded stage direction */
  const qBear = engQuote(d.fg, { text: 'Exit, pursued by a bear.', who: 'Stage direction', where: "The Winter's Tale, Act 3 Scene 3", w: 680, size: 44, hl: ['bear'] });
  const bearPaw = G(d.fg);
  E('circle', { cx: 0, cy: 14, r: 28, fill: '#6B4423', stroke: SC_INK, 'stroke-width': 4 }, bearPaw);
  [[-30, -22], [-10, -34], [12, -34], [32, -20]].forEach(([x, y]) => E('ellipse', { cx: x, cy: y, rx: 10, ry: 13, fill: '#6B4423', stroke: SC_INK, 'stroke-width': 3 }, bearPaw));
  const qDawn = engQuote(d.fg, { text: 'Wilt thou be gone? it is not yet near day', who: 'Juliet', where: 'Romeo and Juliet, Act 3 Scene 5', w: 720, size: 38, hl: ['day'] });
  const tEmbed = engTech(d.fg, 'EMBEDDED DIRECTION', { kind: 'drama', def: 'setting & action built into the dialogue' });
  const cMin = pill('1 formatted script page ≈ 1 minute on stage', { size: 32, stroke: ENG.gold, color: '#FFE6A8' });

  d.shot(0, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.05, mood: 'neutral', mug: 1 } } })
    .shot(at('scriptm') - 0.05, { set: 'room', cast: { nib: { x: 180, y: 450, s: 0.95, mood: 'smug' } } })
    .shot(at('nomarks') - 0.05, { set: 'room', cast: { mrh: { x: 180, y: 480, s: 1.0, mood: 'neutral' }, brack: { x: 1050, y: 460, s: 0.85, mood: 'happy' } } })
    .shot(at('test') - 0.05, { set: 'room', cast: { brack: { x: 200, y: 460, s: 1.0, mood: 'smug' } } })
    .shot(at('basic') - 0.05, { set: 'room', cast: { mei: { x: 260, y: 500, s: 1.08, mood: 'neutral', hand: 1 }, nib: { x: 880, y: 450, s: 0.98, mood: 'shock' } } })
    .shot(at('bear') - 0.05, { set: 'room', cast: { will: { x: 220, y: 420, s: 0.95, mood: 'smug', glow: 0.6 } } })
    .shot(at('onepage') - 0.05, { conf: 'clapper', cast: { clapper: { x: 340, y: 430, s: 1.3, mood: 'happy', snap: 0.9 } } });

  d.lower('nib', at('scriptm') + 0.1, 3.0);
  d.x('nib', at('leak'), { ink: 1 }).x('nib', at('bear'), { ink: 0 });
  d.mood('nib', at('leak'), 'annoyed').mood('will', at('embed'), 'happy');

  d.pop(pg, at('scriptm') + 0.05, end('exits') + 0.2, 650, 310);
  d.pop(noQuotes, at('nomarks') + 0.1, end('pres') + 0.2, 650, 565);
  d.pop(tExeunt, mid('exits', 0.25), end('exits') + 0.25, 650, 585);
  d.pop(cWrong, at('test') + 0.1, end('test') + 0.25, 730, 260);
  d.pop(cRight, mid('test', 0.5), end('test') + 0.25, 730, 450);
  d.pop(tParen, mid('leak', 0.45), end('leak') + 0.25, 580, 230);
  d.pop(qBear, at('bear') + 0.05, end('bear') + 0.25, 710, 300);
  d.pop(bearPaw, mid('bear', 0.4), end('bear') + 0.25, 1080, 500, 1.1, -14);
  d.pop(qDawn, at('embed') + 0.05, end('embed') + 0.25, 710, 280);
  d.pop(tEmbed, mid('embed', 0.35), end('embed') + 0.25, 710, 510);
  d.pop(cMin, mid('onepage', 0.25), end('onepage') + 0.25, 810, 350);

  return t => {
    d.upd(t);
    pgLines[0].style.opacity = P(t, mid('scriptm', 0.35), 0.3, linear).toFixed(3);
    pgLines[1].style.opacity = P(t, at('pres'), 0.3, linear).toFixed(3);
    pgLines[2].style.opacity = P(t, mid('castlist', 0.45), 0.3, linear).toFixed(3);
    pgLines[3].style.opacity = P(t, mid('nomarks', 0.3), 0.3, linear).toFixed(3);
    pgLines[4].style.opacity = P(t, mid('exits', 0.2), 0.3, linear).toFixed(3);
    qBear.mark(0, P(t, mid('bear', 0.45), 0.4));
    qDawn.mark(0, P(t, mid('embed', 0.55), 0.4));
  };
});
