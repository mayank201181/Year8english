/* Scene 1: Word classes, roots and RAVEN. Jabberwocky ("slithy toves did gyre") -> Proper & abstract nouns ->
   Modal verbs -> "-ly" adjective trap ("lonely" -> FIRST RECORDED USE stamp!) -> Determiner ("my") vs Pronoun ("mine")
   + Prepositions -> Greek & Latin roots (chron, bene, mal) -> Kevin's RAVEN! */
scene('words', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.95)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mugs16 = spgExtraMugs(d.bg);
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin');

  const qJab = engQuote(d.fg, { text: "'Twas brillig, and the slithy toves / Did gyre and gimble in the wabe:", who: 'Lewis Carroll', where: "'Jabberwocky' (1871)", w: 760, size: 35, hl: ['slithy', 'toves', 'gyre'] });
  const jabTags = [
    ['slithy → ADJECTIVE', '#FFB547'],
    ['toves → NOUN', '#5AB4E0'],
    ['gyre → VERB', '#56D69B'],
  ].map(([s, col]) => pill(s, { size: 26, stroke: col }));

  const cNouns = engCard(d.fg, '**Proper nouns:** Singapore, Prospero (capitals!)\n**Abstract nouns:** courage, jealousy, freedom\n**Modal verbs:** can · could · might · must · should', { w: 780, size: 27, stroke: ENG.sky });
  const cLy = engCard(d.fg, 'Most **-ly** words = adverbs ("quickly")\nTRAP: **friendly · lovely · lonely** = **ADJECTIVES**!', { w: 740, size: 28, stroke: '#F06A8A' });
  const stRec = engStamp(d.fg, 'FIRST RECORDED USE', '#D32F2F');

  const cDet = engCard(d.fg, '"**my** bag" → **determiner** (before noun)\n"the bag is **mine**" → **pronoun** (stands alone)\n**Prepositions:** under · through · beside · during', { w: 780, size: 27, stroke: '#B58CFF' });
  const cRoots = engCard(d.fg, '**ROOTS:** **chron** = time · **bene** = good · **mal** = bad\n→ **malevolent** = wishing harm!', { w: 760, size: 28, stroke: ENG.gold });
  const cRav = engCard(d.fg, '**R · A · V · E · N**\n**R**emember: **A**ffect = **V**erb  |  **E**ffect = **N**oun\n(British: **practise** = verb · **practice** = noun)', { w: 760, size: 28, tab: 'MNEMONIC', tabCol: '#1E6E9E', stroke: C.good, icon: 'tick' });

  d.shot(0, { set: 'room', cast: { mrh: { x: 170, y: 500, s: 0.92, mood: 'neutral', mug: 1 }, mei: { x: 1030, y: 520, s: 0.92, mood: 'happy' } } })
    .shot(at('nouns') - 0.05, { set: 'room', cast: { nib: { x: 170, y: 500, s: 0.88, mood: 'smug' }, mrh: { x: 1030, y: 500, s: 0.9, mood: 'neutral' } } })
    .shot(at('ly') - 0.05, { set: 'room', cast: { will: { x: 170, y: 490, s: 0.86, mood: 'smug', glow: 0.5 }, nib: { x: 1030, y: 500, s: 0.88, mood: 'annoyed' } } })
    .shot(at('det') - 0.05, { set: 'room', cast: { nib: { x: 170, y: 500, s: 0.88, mood: 'smug' }, mrh: { x: 1030, y: 500, s: 0.9, mood: 'neutral' } } })
    .shot(at('raven') - 0.05, { set: 'room', cast: { kevin: { x: 200, y: 520, s: 0.92, mood: 'happy' }, mei: { x: 1010, y: 520, s: 0.92, mood: 'happy' } } });

  d.mood('will', at('stamp'), 'annoyed');

  d.pop(qJab, at('jab') + 0.05, end('pos') + 0.2, 600, 215);
  jabTags.forEach((c, i) => d.pop(c, mid('pos', 0.15 + i * 0.25), end('pos') + 0.2, 310 + i * 290, 415));
  d.pop(cNouns, at('nouns') + 0.08, end('verbs') + 0.2, 600, 250);
  d.pop(cLy, at('ly') + 0.08, end('stamp') + 0.2, 600, 225);
  d.pop(stRec, at('stamp') + 0.05, end('stamp') + 0.22, 600, 400, 0.82);
  d.pop(cDet, at('det') + 0.06, end('det') + 0.22, 600, 255);
  d.pop(cRoots, at('roots') + 0.08, end('roots') + 0.22, 600, 250);
  d.pop(cRav, at('raven') + 0.06, end('raven') + 0.3, 600, 255);

  return t => {
    const sh = d.upd(t);
    op(mugs16, sh.spec.set === 'room' ? 1 : 0);
    qJab.mark(-1, P(t, at('pos'), 0.45));
  };
});
