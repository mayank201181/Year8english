/* Scene 6: Save yourself some marks (Recap). Memory hooks (SMILE, WHAT/HOW/WHY, Iamb/Trochee, Cool Tigers...) ->
   6 exam traps -> Mei awards How Poems Work 4.5 stars -> Will outraged that Wordsworth beat Episode 1! */
scene('recap', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 26, fill: o.fill || 'rgba(20,14,42,0.94)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(9); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), met = d.who('metaphor'), sim = d.who('simile'), vol = d.who('volta');

  const hooks = ['S · M · I · L · E', 'WHAT? HOW? WHY?', 'iamb a-WAY · trochee TI-ger', 'Cool Tigers Quietly Creep...'].map(s => pill(s, { stroke: '#FFE45C', color: '#FFE6A8' }));
  const TRAPS = [
    ['t1', 'TRAP 1', 'Never stop at feature spotting, and ban **"makes the reader want to read on"**!'],
    ['t2', 'TRAP 2', 'Write **"the speaker"**, not "the poet" — the **"I"** may be a persona!'],
    ['t3', 'TRAP 3', 'Don\'t copy whole stanzas: embed **2 to 6** zoomed-in words inside your sentence.'],
    ['t4', 'TRAP 4', 'Never ignore **form & structure**: track line breaks, caesuras, and the **volta**.'],
    ['t5', 'TRAP 5', '**Simile** = *like / as*; **Metaphor** = *IS*; **alliteration** = **start** sounds only!'],
    ['t6', 'TRAP 6', '**Free verse** still has **deliberate** line breaks and structure!'],
  ].map(([id, tab, txt]) => [id, engCard(d.fg, txt, { w: 680, size: 31, tab, tabCol: '#6D28D9', stroke: ENG.violet, boldFill: '#FFE45C' })]);

  const rev = engReview(d.fg, { stars: 4.5, text: 'How Poems Work: 4.5 stars. Saying "perhaps" for a second reading is a cheat code.', by: 'Mei, Term 2', w: 540 });

  d.shot(0, { set: 'room', cast: { mei: { x: 250, y: 500, s: 1.08, mood: 'happy' } } })
    .shot(at('t1') - 0.04, { conf: 'nib', cast: { nib: { x: 260, y: 420, s: 1.15, mood: 'smug' } } })
    .shot(at('t2') - 0.04, { conf: 'mrh', cast: { mrh: { x: 260, y: 430, s: 1.18, mood: 'deadpan', mug: 1 } } })
    .shot(at('t3') - 0.04, { conf: 'kevin', cast: { kevin: { x: 260, y: 440, s: 1.15, mood: 'happy' } } })
    .shot(at('t4') - 0.04, { conf: 'volta', cast: { volta: { x: 260, y: 430, s: 1.12, mood: 'happy' } } })
    .shot(at('t5') - 0.04, { conf: 'simile', cast: { simile: { x: 260, y: 430, s: 1.15, mood: 'happy' } } })
    .shot(at('t6') - 0.04, { conf: 'metaphor', cast: { metaphor: { x: 260, y: 430, s: 1.12, mood: 'smug' } } })
    .shot(at('rev') - 0.05, { set: 'room', cast: { mei: { x: 280, y: 500, s: 1.1, mood: 'happy', phone: 1 }, will: { x: 920, y: 420, s: 0.98, mood: 'shock', glow: 0.9 } } });

  d.mood('will', at('half'), 'annoyed');
  hooks.forEach((c, i) => d.pop(c, mid('mnem', 0.08 + i * 0.2), end('mnem') + 0.15, 760, 190 + i * 94));
  TRAPS.forEach(([id, cardEl]) => d.pop(cardEl, at(id) + 0.04, end(id) + 0.15, 790, 380));
  d.pop(rev, at('rev') + 0.05, S.D + 1, 600, 270);

  return t => {
    d.upd(t);
    if (t >= at('rev')) rev.set(4.5 * P(t, at('rev'), 0.6, ease));
  };
});
