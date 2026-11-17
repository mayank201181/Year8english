/* Scene 4: Structure — follow the writer's camera. Question 4 buzzes Mei for analysing a metaphor in a structure
   question -> Language = words vs Structure = architecture -> Marley opening -> Storyboard of 'Monsoon' (WIDE SHOT ->
   MID SHOT -> CLOSE-UP -> one-line minor sentences -> CLIFFHANGER) -> Kevin relieved no comma splice -> Cyclical. */
scene('structure', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.94)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), qm = d.who('qmark'), shl = d.who('sherlock');

  const cQ5 = engCard(d.fg, '**Q5:** How has the writer **structured** the text to interest the reader?', { w: 740, size: 30, tab: 'STRUCTURE', tabCol: '#1E6E9E', stroke: ENG.sky });
  const cWrong = engCard(d.fg, '"uses paragraphs... and the metaphor **silver curtain**" ✗', { w: 700, size: 29, stroke: C.bad, icon: 'cross' });
  const stWrong = engStamp(d.fg, 'LANGUAGE ≠ STRUCTURE!', '#D32F2F');
  const cArch = engCard(d.fg, '**Language** = the words\n**Structure** = the architecture (order · focus · pace · shifts)', { w: 760, size: 29, stroke: ENG.gold, icon: 'tick' });
  const qMar = engQuote(d.fg, { text: 'Marley was dead: to begin with.', who: 'Opening Line', where: 'Dickens, A Christmas Carol (1843)', w: 680, size: 42, hl: ['dead', 'begin'] });

  const fWide = cmpFrame(d.fg, 250, 175, '1 WIDE SHOT', 'Sky over\nToa Payoh', '#5AB4E0');
  const fMid = cmpFrame(d.fg, 250, 175, '2 MID SHOT', 'Mei waiting ·\nforeshadowing', '#56D69B');
  const fClose = cmpFrame(d.fg, 250, 175, '3 CLOSE-UP', 'One raindrop\non her wrist', '#FFB547');
  const fCliff = cmpFrame(d.fg, 250, 175, '4 CLIFFHANGER', '"It was not\nWei Jie."', '#F06A8A');

  const cMinor = engCard(d.fg, '**"Then another. Then a thousand."**\nIsolated one-line paragraph → accelerates **pace**!', { w: 720, size: 29, stroke: '#FFB547' });
  const tCyc = engTech(d.fg, 'CYCLICAL STRUCTURE', { kind: 'structure', def: 'ending echoes the opening — with a change (Number 47)' });

  d.shot(0, { set: 'room', cast: { qmark: { x: 200, y: 490, s: 0.95, mood: 'annoyed' }, mei: { x: 1000, y: 510, s: 0.95, mood: 'happy' } } })
    .shot(at('buzz') - 0.05, { set: 'room', cast: { qmark: { x: 220, y: 480, s: 1.0, mood: 'shock' }, mrh: { x: 1020, y: 500, s: 0.95, mood: 'deadpan' } } })
    .shot(at('marley') - 0.05, { set: 'room', cast: { will: { x: 180, y: 490, s: 0.85, mood: 'smug', glow: 0.5 }, nib: { x: 1050, y: 510, s: 0.82, mood: 'smug' } } })
    .shot(at('cam') - 0.05, { set: 'room', cast: { sherlock: { x: 140, y: 590, s: 0.68, mood: 'smug' }, mrh: { x: 1070, y: 590, s: 0.72, mood: 'neutral' } } })
    .shot(at('minor') - 0.05, { set: 'room', cast: { mei: { x: 200, y: 530, s: 0.92, mood: 'happy' }, kevin: { x: 980, y: 540, s: 0.85, mood: 'happy' } } })
    .shot(at('cliff') - 0.05, { set: 'room', cast: { sherlock: { x: 150, y: 560, s: 0.75, mood: 'smug' }, nib: { x: 1060, y: 540, s: 0.78, mood: 'smug' } } });

  d.shake(at('buzz') + 0.08, 8);

  d.pop(cQ5, at('trap') + 0.05, end('buzz') + 0.2, 600, 170);
  d.pop(cWrong, at('para') + 0.1, end('buzz') + 0.2, 600, 340);
  d.pop(stWrong, at('buzz') + 0.08, end('buzz') + 0.2, 600, 460, 0.76);
  d.pop(cArch, at('arch') + 0.08, end('arch') + 0.25, 600, 290);
  d.pop(qMar, at('marley') + 0.05, end('marley') + 0.25, 600, 280);

  d.pop(fWide, at('wide') + 0.05, end('cliff') + 0.2, 210, 230);
  d.pop(fMid, at('mid') + 0.05, end('cliff') + 0.2, 470, 230);
  d.pop(fClose, at('drop') + 0.05, end('cliff') + 0.2, 730, 230);
  d.pop(fCliff, at('cliff') + 0.05, end('cliff') + 0.25, 990, 230);

  d.pop(cMinor, at('minor') + 0.05, end('kevin') + 0.2, 560, 470);
  d.pop(tCyc, at('cyc') + 0.08, end('cyc') + 0.3, 600, 440);

  return t => {
    d.upd(t);
    qMar.mark(-1, P(t, mid('marley', 0.45), 0.5));
  };
});
