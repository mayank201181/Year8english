/* Scene 3: Sound — poems are made to be heard. Classroom.
   Alliteration = START sounds only ("clasps the crag with crooked hands") -> Assonance ("mellow wedding bells") vs
   Consonance ("black, cracked rocks") -> Sibilance (soothing OR sinister: Owen's "shrill, demented choirs of wailing
   shells") -> Plosives (p, b, t, d, k, g) & Onomatopoeia -> Wilfred Owen's "Only the stuttering rifles' rapid rattle". */
scene('sound', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(20,14,42,0.94)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(9); });
  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), met = d.who('metaphor'), sim = d.who('simile');

  const cMouth = pill('Exam tip: mouth the poem silently so you HEAR the sounds!', { stroke: '#FFE45C', color: '#FFE6A8' });
  const tAllit = engTech(d.fg, 'ALLITERATION', { kind: 'language', def: 'repeated consonant sound at the START of nearby words' });
  const qCrag = engQuote(d.fg, { text: 'He clasps the crag with crooked hands;', who: 'Alfred, Lord Tennyson', where: 'The Eagle (1851)', w: 680, size: 38, hl: ['clasps', 'crag', 'crooked'] });
  const cAssCon = engCard(d.fg, '• **Assonance** = inner **vowels** (*m**e**llow w**e**dding b**e**lls*)\n• **Consonance** = inner/end **consonants** (*bla**ck**, cra**ck**ed ro**ck**s*)', { w: 690, size: 29, stroke: '#5AB4E0' });
  const tSib = engTech(d.fg, 'SIBILANCE (s / sh)', { kind: 'language', def: 'gentle whisper OR sinister hiss — always say which!' });
  const qSib = engQuote(d.fg, { text: 'The shrill, demented choirs of wailing shells;', who: 'Wilfred Owen', where: 'Anthem for Doomed Youth (1917)', w: 700, size: 36, hl: ['shrill', 'shells'] });
  const tPlos = engTech(d.fg, 'PLOSIVES (p b t d k g)', { kind: 'language', def: 'explosive consonants: harsh, abrupt or violent' });
  const tOno = engTech(d.fg, 'ONOMATOPOEIA', { kind: 'language', def: 'words that imitate their sound: rattle · patter · hiss' });
  const qOwen = engQuote(d.fg, { text: "Only the stuttering rifles' rapid rattle", who: 'Wilfred Owen', where: 'Anthem for Doomed Youth (1917)', w: 710, size: 40, hl: ['stuttering', 'rapid', 'rattle'] });

  d.shot(0, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.05, mood: 'neutral', mug: 1 } } })
    .shot(at('allit') - 0.05, { set: 'room', cast: { mei: { x: 220, y: 500, s: 1.05, mood: 'neutral', hand: 1 }, nib: { x: 960, y: 460, s: 0.95, mood: 'annoyed' } } })
    .shot(at('start') - 0.05, { set: 'room', cast: { nib: { x: 190, y: 460, s: 0.95, mood: 'smug' } } })
    .shot(at('sib') - 0.05, { set: 'room', cast: { simile: { x: 200, y: 490, s: 0.98, mood: 'happy' } } })
    .shot(at('plos') - 0.05, { set: 'room', cast: { metaphor: { x: 200, y: 480, s: 0.98, mood: 'smug' } } })
    .shot(at('owen') - 0.05, { set: 'room', cast: { mrh: { x: 190, y: 490, s: 1.0, mood: 'deadpan', mug: 1 } } });

  d.shake(mid('owen', 0.35), 7);

  d.pop(cMouth, at('aloud') + 0.1, end('aloud') + 0.2, 730, 320);
  d.pop(tAllit, at('start') + 0.05, end('start') + 0.25, 730, 210);
  d.pop(qCrag, mid('start', 0.35), end('start') + 0.25, 730, 430);
  d.pop(cAssCon, at('asscon') + 0.08, end('asscon') + 0.25, 730, 330);
  d.pop(tSib, at('sib') + 0.05, end('sib') + 0.25, 730, 210);
  d.pop(qSib, mid('sib', 0.4), end('sib') + 0.25, 730, 430);
  d.pop(tPlos, at('plos') + 0.05, end('plos') + 0.25, 730, 250);
  d.pop(tOno, mid('plos', 0.5), end('plos') + 0.25, 730, 440);
  d.pop(qOwen, at('owen') + 0.05, end('owen') + 0.3, 730, 330);

  return t => {
    d.upd(t);
    qCrag.mark(-1, P(t, mid('start', 0.55), 0.4));
    qSib.mark(-1, P(t, mid('sib', 0.6), 0.4));
    qOwen.mark(-1, P(t, mid('owen', 0.45), 0.45));
  };
});
