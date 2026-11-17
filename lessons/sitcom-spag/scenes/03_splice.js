/* Scene 3: Defeating the comma splice (enter Semicolon!). Kevin's paper-bag panic -> 3 legal fixes: Full Stop,
   Semicolon see-saw (Aldus Manutius, 1490s), or Conjunction -> the "; however," adverb trap -> Dickens's deliberate
   Tale of Two Cities antithesis -> $5m Oxford comma -> Colon drumroll, Dashes, Brackets & Hyphens! */
scene('splice', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.95)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mugs16 = spgExtraMugs(d.bg);
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), semi = d.who('semi'), stop = d.who('stop');

  const cCrime = engCard(d.fg, '"The match was cancelled**,** it had rained all night." ✗', { w: 760, size: 29, stroke: C.bad, icon: 'cross', tab: 'COMMA SPLICE!' });
  const stSplice = engStamp(d.fg, 'COMMA SPLICE!', '#D32F2F');
  const seeSaw = spgSeeSaw(d.fg);
  const cFixes = pill('3 Fixes:   Full Stop ( . )   ·   Semicolon ( ; )   ·   Conjunction (because)', { size: 25, stroke: C.good });

  const cHow = engCard(d.fg, '**TRAP:** "however" & "therefore" are **adverbs**, NOT conjunctions!\n✗ "I was tired, however, I kept going."\n✓ "I was tired**; however,** I kept going."', { w: 800, size: 26, tab: 'HOWEVER TRAP', tabCol: '#C62828', stroke: ENG.gold });
  const qDick = engQuote(d.fg, { text: 'It was the best of times, it was the worst of times,', who: 'Opening Line', where: 'Dickens, A Tale of Two Cities (1859)', w: 740, size: 36, hl: ['best', 'worst'] });
  const cOxf = pill('2017 Oxford comma lawsuit: $5 million! · Non-defining clauses take commas', { size: 25, stroke: ENG.sky });
  const cCol = engCard(d.fg,
    '**Colon ( : )** → complete main clause FIRST, then list / reason / reveal\n**Dashes ( — )** → dramatic jolt   |   **Brackets ( )** → quiet aside\n**Hyphen ( - )** → joins words ("well-known")',
    { w: 820, size: 26, stroke: '#B58CFF' });

  d.shot(0, { set: 'room', cast: { mei: { x: 200, y: 520, s: 0.95, mood: 'happy' }, kevin: { x: 980, y: 520, s: 0.95, mood: 'shock', bag: 1, sweat: 1 } } })
    .shot(at('fix3') - 0.05, { set: 'room', cast: { stop: { x: 165, y: 540, s: 0.85, mood: 'deadpan' }, semi: { x: 1030, y: 510, s: 0.88, mood: 'smug' } } })
    .shot(at('fixconj') - 0.05, { set: 'room', cast: { mrh: { x: 165, y: 510, s: 0.9, mood: 'neutral' }, semi: { x: 1030, y: 500, s: 0.88, mood: 'smug' } } })
    .shot(at('dickens') - 0.05, { set: 'room', cast: { will: { x: 165, y: 500, s: 0.85, mood: 'smug', glow: 0.4 }, kevin: { x: 1020, y: 530, s: 0.88, mood: 'happy' } } })
    .shot(at('colon') - 0.05, { set: 'room', cast: { nib: { x: 165, y: 500, s: 0.88, mood: 'smug' }, mrh: { x: 1030, y: 510, s: 0.9, mood: 'neutral' } } });

  d.shake(at('panic') + 0.06, 9);

  d.pop(cCrime, at('crime') + 0.06, end('panic') + 0.2, 600, 225);
  d.pop(stSplice, at('panic') + 0.08, end('panic') + 0.2, 600, 390, 0.84);
  d.pop(seeSaw, at('fix3') + 0.08, end('fixsemi') + 0.22, 600, 265);
  d.pop(cFixes, mid('fixsemi', 0.35), end('fixsemi') + 0.22, 600, 415);
  d.pop(cHow, at('fixconj') + 0.08, end('how') + 0.22, 600, 255);
  d.pop(qDick, at('dickens') + 0.05, end('dickens') + 0.2, 600, 240);
  d.pop(cOxf, at('oxford') + 0.08, end('oxford') + 0.22, 600, 260);
  d.pop(cCol, at('colon') + 0.06, end('dash') + 0.3, 600, 255);

  return t => {
    const sh = d.upd(t);
    op(mugs16, sh.spec.set === 'room' ? 1 : 0);
    seeSaw.set(t);
    qDick.mark(-1, P(t, mid('dickens', 0.35), 0.45));
  };
});
