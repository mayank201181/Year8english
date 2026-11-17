/* Scene 2: Phrases, clauses and four sentence types. Phrase vs Main clause (Full Stop) -> Subordinate clause
   (AAAWWUBBIS + Kevin after fronted subordinate clause!) -> Relative clause -> Simple (clauses, not length!),
   Compound (FANBOYS / Semicolon + Orwell's striking thirteen), Complex, Minor ("Darkness."). */
scene('clauses', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.95)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mugs16 = spgExtraMugs(d.bg);
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), semi = d.who('semi'), stop = d.who('stop');

  const cPhr = engCard(d.fg, '**Phrase:** "under the old bridge" (no subject + verb)\n**Main clause:** "**The river froze.**" (stands alone!)', { w: 780, size: 28, stroke: ENG.sky, icon: 'tick' });
  const cSub = engCard(d.fg, '**AAAWWUBBIS** (subordinating conjunctions):\nAfter · Although · As · When · While · Until · Before · Because · If · Since', { w: 820, size: 25, tab: 'SUBORDINATE', tabCol: '#6A3AB8', stroke: '#B58CFF' });
  const cFront = engCard(d.fg, '"**Although she was terrified,** Lina stepped forward."\nFronted subordinate clause → **comma** right after it!', { w: 780, size: 27, stroke: C.good });
  const tRel = engTech(d.fg, 'RELATIVE CLAUSE', { kind: 'grammar', def: 'who, which, that, whose — describes a noun' });

  const cTypes = engCard(d.fg,
    '**Simple:** 1 main clause (even 20 words long!)\n**Compound:** 2 main clauses + **FANBOYS** (For, And, Nor, But, Or, Yet, So) or **;**\n**Complex:** main + subordinate   |   **Minor:** no main verb ("**Darkness.**")',
    { w: 840, size: 25, tab: '4 SENTENCE TYPES', tabCol: '#1E6E9E', stroke: ENG.gold });
  const qOrw = engQuote(d.fg, { text: 'It was a bright cold day in April, and the clocks were striking thirteen.', who: 'Opening Sentence', where: 'George Orwell, Nineteen Eighty-Four (1949)', w: 780, size: 34, hl: ['and', 'thirteen'] });

  d.shot(0, { set: 'room', cast: { mrh: { x: 175, y: 500, s: 0.92, mood: 'neutral' }, stop: { x: 1020, y: 530, s: 0.9, mood: 'deadpan' } } })
    .shot(at('sub') - 0.05, { set: 'room', cast: { nib: { x: 165, y: 500, s: 0.88, mood: 'smug' }, kevin: { x: 1025, y: 520, s: 0.9, mood: 'happy' } } })
    .shot(at('simple') - 0.05, { set: 'room', cast: { mrh: { x: 160, y: 510, s: 0.88, mood: 'neutral' }, semi: { x: 1035, y: 500, s: 0.9, mood: 'smug' } } })
    .shot(at('orwell') - 0.05, { set: 'room', cast: { will: { x: 165, y: 495, s: 0.85, mood: 'smug', glow: 0.4 }, mei: { x: 1030, y: 520, s: 0.92, mood: 'happy' } } });

  d.pop(cPhr, at('phr') + 0.06, end('main') + 0.2, 600, 245);
  d.pop(cSub, at('sub') + 0.06, end('front') + 0.2, 600, 185);
  d.pop(cFront, at('front') + 0.06, end('front') + 0.2, 600, 365);
  d.pop(tRel, at('rel') + 0.08, end('rel') + 0.22, 600, 250);
  d.pop(cTypes, at('simple') + 0.06, end('cmplx') + 0.25, 600, 195);
  d.pop(qOrw, at('orwell') + 0.06, end('cmplx') + 0.25, 600, 420);

  return t => {
    const sh = d.upd(t);
    op(mugs16, sh.spec.set === 'room' ? 1 : 0);
    qOrw.mark(-1, P(t, mid('orwell', 0.45), 0.45));
  };
});
