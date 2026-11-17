/* Scene 1: Writing for the ear & Aristotle's triad. Classroom (8 mugs).
   Ear vs eye (heard once -> short sentences, repetition, direct address) -> GAP (Genre, Audience, Purpose) ->
   Rhetorical Triangle (Ethos + Malala's "one book and one pen", Pathos, Logos, Kairos) -> rhetoric is neutral, blend all 3! */
scene('triad', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(8); });
  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), ethos = d.who('ethos'), pathos = d.who('pathos'), logos = d.who('logos');

  const cEar = engCard(d.fg, 'Written for the **EAR**: listeners hear each sentence **once**!', { w: 650, size: 32, stroke: '#5AB4E0' });
  const cGap = engCard(d.fg, '**G**enre · **A**udience · **P**urpose\n(persuade · inform · inspire · commemorate)', { w: 650, size: 30, stroke: ENG.gold });
  const earPills = ['short sentences', 'repetition', 'direct "you" & "we"'].map(s => pill(s, { size: 28, stroke: C.good, color: '#C9F2D3' }));
  const tri = pubTriangle(d.fg);
  const qMal = engQuote(d.fg, { text: 'one book and one pen', who: 'Malala Yousafzai', where: 'United Nations speech, 2013', w: 620, size: 42, hl: ['book', 'pen'] });
  const cMyth = engCard(d.fg, 'Rhetoric ≠ lying! The tools are **neutral** — blend **Ethos + Pathos + Logos** honestly.', { w: 680, size: 30, icon: 'tick', stroke: C.good, boldFill: C.good });

  d.shot(0, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.05, mood: 'neutral', mug: 1 } } })
    .shot(at('gap') - 0.05, { set: 'room', cast: { nib: { x: 200, y: 450, s: 0.95, mood: 'smug' } } })
    .shot(at('short') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.05, mood: 'neutral' } } })
    .shot(at('eth') - 0.05, { set: 'room', cast: { ethos: { x: 210, y: 470, s: 1.0, mood: 'smug' } } })
    .shot(at('eth2') - 0.05, { conf: 'ethos', cast: { ethos: { x: 320, y: 430, s: 1.3, mood: 'happy' } } })
    .shot(at('pat') - 0.05, { set: 'room', cast: { pathos: { x: 210, y: 460, s: 1.0, mood: 'happy' } } })
    .shot(at('log') - 0.05, { set: 'room', cast: { logos: { x: 210, y: 460, s: 1.0, mood: 'neutral' } } })
    .shot(at('kairos') - 0.05, { set: 'room', cast: { nib: { x: 200, y: 450, s: 0.95, mood: 'smug' } } })
    .shot(at('lie') - 0.05, { set: 'room', cast: { mei: { x: 230, y: 500, s: 1.05, mood: 'neutral', hand: 1 }, mrh: { x: 960, y: 480, s: 1.0, mood: 'deadpan', mug: 1 } } });

  d.pop(cEar, at('ear') + 0.08, end('ear') + 0.2, 740, 320);
  d.pop(cGap, at('gap') + 0.08, end('gap') + 0.2, 740, 320);
  earPills.forEach((c, i) => d.pop(c, mid('short', 0.15 + i * 0.25), end('short') + 0.2, 740, 230 + i * 92));
  d.pop(qMal, mid('eth2', 0.35), end('eth2') + 0.25, 820, 350);
  d.pop(cMyth, at('neutral') + 0.08, end('neutral') + 0.25, 610, 260);

  return t => {
    d.upd(t);
    const showTri = (t >= at('eth') - 0.05 && t < at('eth2') - 0.05) || (t >= at('pat') - 0.05 && t < at('lie') - 0.05);
    op(tri, showTri ? 1 : 0);
    if (showTri) {
      tr(tri, 750, 350);
      op(tri.eth, P(t, at('eth'), 0.35, linear));
      op(tri.pat, P(t, at('pat'), 0.35, linear));
      op(tri.log, P(t, at('log'), 0.35, linear));
      op(tri.kai, P(t, at('kairos'), 0.35, linear));
    }
    qMal.mark(-1, P(t, mid('eth2', 0.6), 0.35));
  };
});
