/* Scene 4: Apostrophes, homophones and speech. Apostrophe's ONLY two jobs (never plurals: bananas, the 1990s!) ->
   1 Omission (don't, it's = it is) -> 2 Possession (girl's, girls', children's!) -> Possessive pronouns NEVER take
   an apostrophe (its, hers, yours, theirs, whose) -> Homophones (they're/their/there, who's/whose) -> Speech + TiPToP! */
scene('apostrophe', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.95)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mugs16 = spgExtraMugs(d.bg);
  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), kev = d.who('kevin'), apos = d.who('apos');

  const cNoPl = engCard(d.fg, '**NEVER FOR PLURALS!**\n✗ banana\'s · ✗ 1990\'s   →   ✓ **bananas** · ✓ **the 1990s**', { w: 760, size: 28, stroke: C.bad, icon: 'cross', tab: 'MENU CRIME' });
  const cJobs = engCard(d.fg,
    '**Job 1 — Omission:** don\'t · they\'re · **it\'s** (= it is)\n**Job 2 — Possession:**\n• Singular: **the girl\'s** bag\n• Plural ending in s: **the girls\'** room\n• Irregular plural: **the children\'s** toys',
    { w: 780, size: 26, tab: '2 JOBS ONLY', tabCol: '#6A3AB8', stroke: '#B58CFF', icon: 'tick' });

  const cIts = engCard(d.fg, '**Possessive pronouns = ZERO apostrophes!**\n**its** · **hers** · **yours** · **theirs** · **whose**\n"The dog wagged **its** tail." ✓', { w: 760, size: 28, stroke: C.good, icon: 'tick' });
  const cHomo = engCard(d.fg, '**they\'re** (they are) · **their** (belonging) · **there** (place)\n**who\'s** (who is) · **whose** (belonging)', { w: 780, size: 27, stroke: ENG.gold });
  const cSpch = engCard(d.fg, '**SPEECH RULES:**\n**"I\'m cold,"** she said. (comma **inside** closing marks!)\n**New speaker = new line** (**TiPToP**: Time, Place, Topic, Person)', { w: 800, size: 27, tab: 'DIALOGUE', tabCol: '#1E6E9E', stroke: ENG.sky });

  d.shot(0, { set: 'room', cast: { apos: { x: 200, y: 490, s: 0.98, mood: 'annoyed', sweat: 1 }, mei: { x: 1010, y: 520, s: 0.92, mood: 'shock' } } })
    .shot(at('job2') - 0.05, { set: 'room', cast: { mrh: { x: 160, y: 520, s: 0.88, mood: 'neutral' }, mei: { x: 1030, y: 530, s: 0.9, mood: 'happy' } } })
    .shot(at('its') - 0.05, { set: 'room', cast: { apos: { x: 175, y: 500, s: 0.92, mood: 'happy' }, nib: { x: 1030, y: 500, s: 0.88, mood: 'smug' } } })
    .shot(at('speech') - 0.05, { set: 'room', cast: { kevin: { x: 185, y: 520, s: 0.92, mood: 'happy' }, mrh: { x: 1025, y: 510, s: 0.9, mood: 'neutral', mug: 1 } } });

  d.pop(cNoPl, at('sob') + 0.06, end('sob') + 0.2, 600, 240);
  d.pop(cJobs, at('job1') + 0.06, end('child') + 0.22, 600, 250);
  d.pop(cIts, at('its') + 0.06, end('its') + 0.2, 600, 250);
  d.pop(cHomo, at('homo') + 0.06, end('homo') + 0.22, 600, 255);
  d.pop(cSpch, at('speech') + 0.06, end('tiptop') + 0.3, 600, 255);

  return t => {
    const sh = d.upd(t);
    op(mugs16, sh.spec.set === 'room' ? 1 : 0);
  };
});
