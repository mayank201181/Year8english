/* Scene 2: Pick your shape on purpose (Choosing a form + Traditional forms).
   Library: SILENCE PLEASE "(especially sonnets, Will)" -> Form vs Structure -> Free verse (not "anything goes"),
   list poem (anaphora), dramatic monologue ('The Suitcase Speaks') -> Sonnet (Shakespearean vs Petrarchan volta) ->
   Haiku (kigo + kireji), Ghazal (radif, qafia, takhallus), Pantoum ("Two and four go forth", Malay pantun). */
scene('forms', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  const lib = d.add('lib', engLibrary(d.bg), (t, g) => g.upd(t, 0.1));
  const note = G(lib.sign); tr(note, 80, 44, 1, 5);
  E('rect', { x: -115, y: -18, width: 230, height: 36, rx: 4, fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 2.5 }, note);
  T(note, 0, 7, '(especially sonnets, Will)', { size: 18, weight: 800, anchor: 'middle', fill: SC_INK, font: FB });

  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib');

  const fvsCard = engCard(d.fg, '**FORM** = overall shape & rules  |  **STRUCTURE** = how ideas develop inside it', { w: 780, size: 30, stroke: ENG.gold });
  const tFree = engTech(d.fg, 'FREE VERSE', { kind: 'form', def: 'no fixed metre or rhyme — line breaks hold the shape' });
  const stMyth = engCard(d.fg, '"Free verse means anything goes!"', { w: 580, size: 30, tab: 'MYTH', icon: 'cross', stroke: C.bad });
  const tAna = engTech(d.fg, 'ANAPHORA', { kind: 'structure', def: 'repeating words at the start of lines ("I am from...")' });
  const tMono = engTech(d.fg, 'DRAMATIC MONOLOGUE', { kind: 'form', def: 'one persona speaking to a silent listener' });
  const qSuit = engQuote(d.fg, { text: "You think I'm empty now. Look closer. / I still hold the shape of everything", who: 'The Suitcase', where: "'The Suitcase Speaks' (dramatic monologue)", w: 740, size: 34, hl: ['empty', 'shape'] });
  const sonCard = engCard(d.fg, '**SONNET**: 14 lines · iambic pentameter\n• **Shakespearean**: 3 quatrains + couplet (ABAB CDCD EFEF GG)\n• **Petrarchan**: octave (8) + sestet (6), **volta** at line 9', { w: 760, size: 28, stroke: ENG.rose });
  const qSon = engQuote(d.fg, { text: 'But thy eternal summer shall not fade,', who: 'Shakespeare', where: 'Sonnet 18 (1609), line 9 — the volta', w: 720, size: 36, hl: ['but', 'eternal'] });
  const hkCard = engCard(d.fg, '**HAIKU**: 5–7–5 in English · one present moment\n**kigo** (season word) + **kireji** (cutting dash —)', { w: 720, size: 29, stroke: '#56D69B' });
  const ghCard = engCard(d.fg, '**GHAZAL**: independent couplets · rhyming **qafia** + repeated **radif**\npoet signs their name (**takhallus**) in the final couplet', { w: 760, size: 28, stroke: '#FFB547' });
  const pan = pwrPantoum(d.fg);
  const cMalay = pill('Malay pantun → Pantoum (heritage form!)', { stroke: '#56D69B', color: '#D0F7E2' });

  d.shot(0, { set: 'lib', cam: [1, 1.08, 920, 140], cast: { mrh: { x: 240, y: 500, s: 1.02, mood: 'neutral' }, mei: { x: 860, y: 510, s: 1.05, mood: 'neutral' } } })
    .shot(at('free') - 0.05, { set: 'lib', cast: { mei: { x: 280, y: 510, s: 1.08, mood: 'smug' }, nib: { x: 920, y: 470, s: 0.92, mood: 'annoyed' } } })
    .shot(at('list') - 0.05, { set: 'lib', cast: { mrh: { x: 210, y: 500, s: 0.98, mood: 'neutral' }, nib: { x: 1010, y: 480, s: 0.85, mood: 'smug' } } })
    .shot(at('sonnet') - 0.05, { set: 'lib', cast: { will: { x: 210, y: 430, s: 0.95, mood: 'happy', glow: 0.8, quill: 1 }, nib: { x: 1030, y: 490, s: 0.82, mood: 'smug' } } })
    .shot(at('haiku') - 0.05, { set: 'lib', cast: { mei: { x: 230, y: 510, s: 1.02, mood: 'smug' }, mrh: { x: 990, y: 500, s: 0.95, mood: 'deadpan' } } })
    .shot(at('ghazal') - 0.05, { conf: 'nib', cast: { nib: { x: 240, y: 430, s: 1.2, mood: 'smug' } } })
    .shot(at('pantoum') - 0.05, { set: 'lib', cast: { mei: { x: 170, y: 540, s: 0.86, mood: 'happy' }, mrh: { x: 1040, y: 530, s: 0.82, mood: 'happy' } } });

  d.mood('mei', at('notany'), 'shock').mood('mei', at('kigo'), 'annoyed').mood('mei', at('fit'), 'happy');

  d.pop(fvsCard, at('shape') + 0.08, end('shape') + 0.2, 600, 270);
  d.pop(stMyth, at('free') + 0.1, end('free') + 0.15, 620, 250);
  d.pop(tFree, at('notany') + 0.1, end('notany') + 0.2, 600, 280);
  d.pop(tAna, at('list') + 0.1, end('list') + 0.2, 600, 270);
  d.pop(tMono, at('mono') + 0.08, mid('mono', 0.45), 600, 230);
  d.pop(qSuit, mid('mono', 0.35), end('mono') + 0.2, 600, 320);
  d.pop(sonCard, at('sonnet') + 0.1, end('petrarch') + 0.2, 620, 240);
  d.pop(qSon, at('petrarch') + 0.1, end('petrarch') + 0.2, 620, 470);
  d.pop(hkCard, at('kigo') + 0.05, end('kigo') + 0.2, 610, 290);
  d.pop(ghCard, at('ghazal') + 0.1, end('ghazal') + 0.2, 740, 380);
  d.pop(cMalay, at('pantoum') + 0.1, end('fit') + 0.2, 600, 560);

  return t => {
    d.upd(t);
    qSuit.mark(-1, P(t, mid('mono', 0.6), 0.4));
    qSon.mark(0, P(t, mid('petrarch', 0.5), 0.35));
    const pv = engOut(pan, t, at('pantoum') + 0.05, end('fit') + 0.2, 600, 310, 0.94);
    if (pv) pan.set(P(t, at('twofour'), 1.4, linear));
  };
});
