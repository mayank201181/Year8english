/* Ep 2, Scene 4: Caliban — monster or rightful heir? Confessional -> "This island's mine" -> connotation zoom on
   "sty" -> "You taught me language... I know how to curse" -> Prospero's case & "nature / Nurture" -> Act 3 Scene 2
   "Be not afeard; the isle is full of noises" in blank verse (sibilance) -> 3 stars. */
scene('caliban', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('isl', tmpIsland(d.bg), (t, g) => g.upd(t, 0));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib');
  const cal = d.who('caliban'), pros = d.who('prospero');

  const qMine = engQuote(d.fg, { text: "This island's mine, by Sycorax my mother, / Which thou tak'st from me.", who: 'Caliban', where: 'The Tempest, Act 1 Scene 2', w: 740, size: 36, hl: ['mine', "tak'st"] });
  const cMono = pill("Blunt monosyllables + present tense 'tak'st' = ongoing theft", { size: 28, stroke: C.good, color: '#C9F2D3' });

  const qSty = engQuote(d.fg, { text: 'here you sty me / In this hard rock', who: 'Caliban', where: 'The Tempest, Act 1 Scene 2', w: 640, size: 40, hl: ['sty'] });
  /* Connotation zoom web on 'sty' */
  const web = G(d.fg);
  E('rect', { x: -350, y: -110, width: 700, height: 220, rx: 22, fill: 'rgba(14,24,40,0.95)', stroke: ENG.rose, 'stroke-width': 4 }, web);
  [[-220, -52], [220, -52], [-220, 52], [220, 52]].forEach(([x, y]) => E('line', { x1: 0, y1: 0, x2: x, y2: y, stroke: ENG.rose, 'stroke-width': 3 }, web));
  E('circle', { r: 48, fill: '#3A1224', stroke: ENG.rose, 'stroke-width': 4 }, web);
  T(web, 0, 12, 'STY', { size: 34, weight: 800, anchor: 'middle', fill: '#FFE45C' });
  [[-220, -52, 'a pig pen'], [220, -52, 'dirt & filth'], [-220, 52, 'treated as animal'], [220, 52, 'locked inside']].forEach(([x, y, s]) => {
    const b = chip(web, s, { size: 24, fill: '#261428', stroke: ENG.gold, sw: 2.5, color: '#FFFFFF' }); tr(b, x, y);
  });

  const qCurse = engQuote(d.fg, { text: "You taught me language; and my profit on't / Is, I know how to curse.", who: 'Caliban', where: 'The Tempest, Act 1 Scene 2', w: 740, size: 36, hl: ['profit', 'curse'] });
  const tIrony = engTech(d.fg, 'BITTER IRONY', { kind: 'language', def: "coloniser's 'gift' turned into a weapon of resistance", size: 34 });

  const cCase = engCard(d.fg, '**The case against him:** Accused of attacking Miranda · Plots Prospero’s murder with Stephano', { w: 780, size: 28, stroke: C.bad });
  const qNurt = engQuote(d.fg, { text: 'A devil, a born devil, on whose nature / Nurture can never stick', who: 'Prospero', where: 'The Tempest, Act 4 Scene 1', w: 720, size: 36, hl: ['nature', 'Nurture'] });

  const qNoises = engQuote(d.fg, { text: 'Be not afeard; the isle is full of noises, / Sounds and sweet airs, that give delight and hurt not.', who: 'Caliban', where: 'The Tempest, Act 3 Scene 2', w: 780, size: 35, hl: ['Sounds', 'sweet', 'airs'] });
  const stVerse = engStamp(d.fg, 'BLANK VERSE', '#1E9E5A');
  const tSib = engTech(d.fg, 'SIBILANCE', { kind: 'language', def: "soft 's' sounds imitate the island's gentle music", size: 34 });

  const rating = tmpRating(d.fg);

  d.shot(0, { conf: 'caliban', cast: { caliban: { x: 280, y: 430, s: 1.25, mood: 'annoyed' } } })
    .shot(at('mine') - 0.05, { set: 'isl', cast: { caliban: { x: 210, y: 490, s: 0.98, mood: 'annoyed' }, mrh: { x: 1030, y: 500, s: 0.88, mood: 'neutral' } } })
    .shot(at('sty') - 0.05, { set: 'isl', cast: { caliban: { x: 190, y: 490, s: 0.95, mood: 'sad' }, nib: { x: 1040, y: 500, s: 0.85, mood: 'smug' } } })
    .shot(at('curse') - 0.05, { set: 'isl', cast: { caliban: { x: 210, y: 490, s: 0.98, mood: 'annoyed' }, mei: { x: 1020, y: 520, s: 0.9, mood: 'shock' } } })
    .shot(at('other') - 0.05, { set: 'isl', cast: { mrh: { x: 200, y: 500, s: 0.92, mood: 'neutral' }, prospero: { x: 1010, y: 460, s: 0.95, mood: 'annoyed' } } })
    .shot(at('noises') - 0.05, { set: 'isl', cast: { will: { x: 180, y: 430, s: 0.85, mood: 'happy' }, caliban: { x: 1000, y: 480, s: 0.98, mood: 'happy' } } })
    .shot(at('sibilance') - 0.05, { set: 'isl', cast: { nib: { x: 180, y: 500, s: 0.85, mood: 'smug' }, caliban: { x: 1010, y: 480, s: 0.95, mood: 'happy' } } })
    .shot(at('three') - 0.05, { set: 'isl', cast: { mei: { x: 320, y: 500, s: 1.1, mood: 'happy', phone: 1 }, caliban: { x: 880, y: 480, s: 0.98, mood: 'smug' } } });

  d.pop(qMine, at('mine') + 0.05, end('mono') + 0.2, 620, 225);
  d.pop(cMono, at('mono') + 0.08, end('mono') + 0.25, 620, 440);

  d.pop(qSty, mid('sty', 0.45), end('pig') + 0.2, 610, 185);
  d.pop(web, at('pig') + 0.08, end('pig') + 0.25, 610, 465);

  d.pop(qCurse, at('curse') + 0.05, end('profit') + 0.2, 620, 225);
  d.pop(tIrony, at('profit') + 0.08, end('profit') + 0.25, 620, 445);

  d.pop(cCase, at('other') + 0.08, end('other') + 0.2, 610, 200);
  d.pop(qNurt, at('nurture') + 0.05, end('nurture') + 0.25, 610, 385);

  d.pop(qNoises, at('afeard') - 0.05, end('sibilance') + 0.25, 590, 220);
  d.pop(stVerse, mid('afeard', 0.5), end('sibilance') + 0.25, 800, 420, 0.72);
  d.pop(tSib, at('sibilance') + 0.08, end('sibilance') + 0.25, 520, 525);

  return t => {
    d.upd(t);
    qMine.mark(-1, P(t, at('mono'), 0.4));
    qSty.mark(0, P(t, at('pig'), 0.35));
    qCurse.mark(-1, P(t, at('profit'), 0.4));
    qNurt.mark(-1, P(t, mid('nurture', 0.45), 0.4));
    qNoises.mark(-1, P(t, at('sibilance'), 0.45));
    const rv = win(t, at('three'), S.D + 1, 0.25);
    rating.set(2 + P(t, mid('three', 0.15), 0.45, linear), rv); tr(rating, 1030, 74);
  };
});
