/* Scene 3: DAFOREST, Lincoln & power devices. Library.
   DAFOREST grid -> Anaphora ("I have a dream" / "How dare you"), Epistrophe, Antithesis, Hypophora, Hyperbole ->
   Device + Quotation + Effect formula -> Gettysburg Address (2 hours vs 2 minutes / 270 words; Past -> Present ->
   Future; "world will little note" antithesis; "of the people, by the people, for the people" tricolon + epistrophe). */
scene('devices', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 26, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  const lib = d.add('lib', engLibrary(d.bg), (t, g) => g.upd(t, 0));
  T(lib.sign, 0, 52, '(no Greek boy bands)', { size: 20, weight: 700, anchor: 'middle', fill: '#FFE45C', font: FB });

  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), ethos = d.who('ethos'), pathos = d.who('pathos'), logos = d.who('logos');

  const DAF = ['Direct address', 'Anecdote', 'Facts', 'Opinions', 'Rhetorical Qs', 'Emotive lang.', 'Statistics', 'Triplets'].map(s => pill(s, { stroke: '#FF7EB6' }));
  const tAnaph = engTech(d.fg, 'ANAPHORA', { kind: 'structure', def: 'repeating words at the START ("I have a dream...")' });
  const cThreeDev = engCard(d.fg, '• **Epistrophe**: repeats at the **end**\n• **Antithesis**: balanced **opposites**\n• **Hypophora**: ask a question & **answer it**', { w: 650, size: 29, stroke: '#5AB4E0' });
  const tHyp = engTech(d.fg, 'HYPERBOLE', { kind: 'language', def: 'deliberate exaggeration for dramatic impact' });
  const cForm = pill('Device + Quotation + Effect on the listener ✓', { size: 30, stroke: C.good, color: '#C9F2D3' });

  const cTime = engCard(d.fg, '**Gettysburg, 1863:**\n✗ Everett: **2 hours** (forgotten)\n✓ Lincoln: **2 minutes · ~270 words** (immortal!)', { w: 660, size: 30, stroke: ENG.gold });
  const cPPF = pill('PAST (1776)  →  PRESENT (war)  →  FUTURE (freedom)', { size: 28, stroke: '#56D69B', color: '#C9F2D3' });
  const qNote = engQuote(d.fg, { text: 'The world will little note, nor long remember what we say here, but it can never forget what they did here.', who: 'Abraham Lincoln', where: 'Gettysburg Address, 1863', w: 740, size: 33, hl: ['say', 'did'] });
  const qPeop = engQuote(d.fg, { text: 'government of the people, by the people, for the people', who: 'Abraham Lincoln', where: 'Gettysburg Address, 1863', w: 720, size: 38, hl: ['people'] });

  d.shot(0, { set: 'lib', cast: { nib: { x: 180, y: 460, s: 0.95, mood: 'smug' } } })
    .shot(at('anaph') - 0.05, { set: 'lib', cast: { pathos: { x: 200, y: 470, s: 0.98, mood: 'happy' } } })
    .shot(at('epist') - 0.05, { set: 'lib', cast: { nib: { x: 190, y: 460, s: 0.95, mood: 'smug' } } })
    .shot(at('hyper') - 0.05, { set: 'lib', cast: { mei: { x: 230, y: 500, s: 1.05, mood: 'happy' }, nib: { x: 960, y: 460, s: 0.92, mood: 'smug' } } })
    .shot(at('linc') - 0.05, { set: 'lib', cast: { logos: { x: 200, y: 470, s: 0.98, mood: 'happy' }, mrh: { x: 1030, y: 500, s: 0.88, mood: 'neutral' } } })
    .shot(at('note') - 0.05, { set: 'lib', cast: { ethos: { x: 200, y: 480, s: 0.98, mood: 'neutral' } } })
    .shot(at('people') - 0.05, { set: 'lib', cast: { nib: { x: 200, y: 460, s: 0.95, mood: 'smug' } } });

  DAF.forEach((c, i) => d.pop(c, mid('dafor', 0.1 + i * 0.1), end('dafor') + 0.2, 510 + (i % 2) * 320, 190 + Math.floor(i / 2) * 82));
  d.pop(tAnaph, at('anaph') + 0.08, end('anaph') + 0.25, 730, 340);
  d.pop(cThreeDev, at('epist') + 0.08, end('epist') + 0.25, 730, 340);
  d.pop(tHyp, mid('hyper', 0.25), end('hyper') + 0.2, 600, 260);
  d.pop(cForm, at('spotf') + 0.08, end('spotf') + 0.25, 600, 260);
  d.pop(cTime, at('linc') + 0.08, end('past') + 0.2, 620, 290);
  d.pop(cPPF, at('past') + 0.08, end('past') + 0.2, 620, 510);
  d.pop(qNote, at('note') + 0.05, end('note') + 0.25, 720, 340);
  d.pop(qPeop, at('people') + 0.05, end('people') + 0.3, 720, 340);

  return t => {
    d.upd(t);
    qNote.mark(-1, P(t, mid('note', 0.55), 0.4));
    qPeop.mark(0, P(t, mid('people', 0.55), 0.4));
  };
});
