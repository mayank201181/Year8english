/* Scene 0: Cold open (no card). Room 8H, Term 2 Poetry (9 mugs!). Will assumes all 154 sonnets are the whole
   syllabus -> Mr H lists Blake, Dickinson, Wordsworth, Rossetti, Tennyson, Keats, Owen -> Will is outraged at
   Wordsworth's clouds -> Mei writes "makes the reader want to read on" & calls "like a thunderbolt" a metaphor ->
   Nib leaks ink -> Simile & Metaphor burst in ("We are NOT twins!") -> 1 star -> title card. */
scene('cold', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(20,14,42,0.94)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(9); });
  d.add('title', engTitle(d.bg, 'Episode 7: Simile Is Not Like a Metaphor'), (t, g) => g.set(clamp((t - at('title')) / 2.0), t));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), met = d.who('metaphor'), sim = d.who('simile'), vol = d.who('volta');

  const bw = G(d.bg);
  T(bw, 660, 185, 'TERM 2: POETRY', { size: 52, weight: 800, anchor: 'middle', fill: '#6D28D9' });
  const bPoets = T(bw, 660, 265, 'Blake · Dickinson · Wordsworth\nRossetti · Tennyson · Keats · Owen', { size: 30, weight: 700, anchor: 'middle', fill: '#1E293B', lh: 42 });

  const c154 = pill('154 Sonnets (1609) · all by Will', { size: 30, stroke: ENG.gold, color: '#FFE6A8' });
  const cBad = engCard(d.fg, '"Tennyson uses a **metaphor**, \'**like** a thunderbolt\', which **makes the reader want to read on**."', { w: 680, size: 29, icon: 'cross', stroke: C.bad, tab: 'DOUBLE CRIME!' });
  const cNotTwins = pill('SIMILE (like / as)  ≠  METAPHOR (IS!)', { size: 34, stroke: ENG.violet, color: '#EDE2FF' });
  const rev = engReview(d.fg, { stars: 1, text: 'Term 2 Poetry: 1 star. Metaphor and Simile are yelling in stereo.', by: 'Mei, 12', w: 500 });
  const blackout = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#000000' }, d.hud);

  d.shot(0, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.05, mood: 'deadpan', mug: 1 }, will: { x: 930, y: 420, s: 0.95, mood: 'smug', glow: 0.6 } } })
    .shot(at('cloud') - 0.05, { conf: 'will', cast: { will: { x: 340, y: 410, s: 1.25, mood: 'annoyed', glow: 1 } } })
    .shot(at('spot') - 0.05, { set: 'room', cast: { mei: { x: 240, y: 500, s: 1.08, mood: 'happy' }, nib: { x: 920, y: 460, s: 0.98, mood: 'shock' } } })
    .shot(at('not') - 0.05, { set: 'room', cast: { simile: { x: 340, y: 490, s: 1.05, mood: 'annoyed', sweat: 1 }, metaphor: { x: 850, y: 480, s: 1.05, mood: 'smug' } } })
    .shot(at('rev') - 0.05, { set: 'room', cast: { mei: { x: 320, y: 500, s: 1.1, mood: 'deadpan', phone: 1 } } })
    .shot(at('title') - 0.05, { set: 'title', cast: {
      mei: { x: 150, y: 642, s: 0.38, mood: 'happy' }, mrh: { x: 290, y: 642, s: 0.38, mood: 'deadpan' },
      simile: { x: 450, y: 642, s: 0.38, mood: 'happy' }, metaphor: { x: 605, y: 640, s: 0.38, mood: 'smug' },
      volta: { x: 760, y: 642, s: 0.36, mood: 'happy' }, will: { x: 905, y: 632, s: 0.34, mood: 'annoyed' },
      nib: { x: 1020, y: 642, s: 0.34, mood: 'smug' }, kevin: { x: 1110, y: 644, s: 0.32, mood: 'happy' } } });

  d.lower(['SIMILE', 'Compares with LIKE or AS. Keeps things separate.'], at('not') + 0.1, 3.0);
  d.lower(['METAPHOR', 'Says X IS Y. Bolder. Not Simile\'s twin.'], at('lion') + 0.1, 3.0);
  d.mood('will', at('others'), 'shock');
  d.x('nib', at('ink'), { ink: 1 }).x('nib', at('not'), { ink: 0 });
  d.shake(at('not'), 9);

  d.pop(c154, at('154') + 0.1, end('154') + 0.2, 660, 540);
  d.pop(cBad, mid('spot', 0.2), end('ink') + 0.2, 580, 250);
  d.pop(cNotTwins, mid('lion', 0.25), end('lion') + 0.25, 600, 175);
  d.pop(rev, mid('rev', 0.15), end('rev') + 0.25, 800, 360);

  return t => {
    const sh = d.upd(t);
    op(blackout, 1 - P(t, 0, 0.45, linear));
    op(bw, sh.spec.set === 'room' && t < at('spot') ? 1 : 0);
    op(bPoets, P(t, at('others'), 0.4, linear));
  };
});
