/* Scene 2: Block versus point-counterpoint (5–8 min T-chart plan, Block vs Alternating, put your side second). */
scene('structure', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.amber, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('lib', engLibrary(d.bg), (t, g) => g.upd(t, 0.06));
  d.who('mei'); d.who('mrh'); d.who('nib'); d.who('onehand'); d.who('otherhand');

  const planC = engCard(d.fg, '**45-MINUTE CLOCK**\n**5–8 min** T-chart plan (pick best 3 + verdict!) · **~30 min** write · **5 min** check', { w: 790, size: 26, stroke: ENG.gold });
  const blkC = engCard(d.fg, '**BLOCK STRUCTURE** (safe & clear)\nIntro → For 1, 2, 3 → "However, there is another side..." → Against 1, 2, 3 → Conclusion', { w: 790, size: 25, stroke: '#56D69B' });
  const altC = engCard(d.fg, '**ALTERNATING STRUCTURE** (point–counterpoint clashes!)\nAspect 1 (wellbeing: For vs Against) → Aspect 2 (cost: For vs Against) → Conclusion', { w: 790, size: 25, stroke: '#5AB4E0' });
  const balC = pill('Fairness ≠ identical word count! Represent both sides honestly.', { size: 26, stroke: ENG.amber });
  const secC = engCard(d.fg, '**PRO TIP**: Present the side you finally **agree with SECOND** —\nit stays fresh in the reader\'s mind right into your conclusion!', { w: 760, size: 27, icon: 'tick', stroke: C.good });
  const rating = disRating(d.fg);

  d.shot(0, { set: 'lib', cast: { mrh: { x: 200, y: 500, s: 0.98, mood: 'neutral' }, onehand: { x: 1000, y: 500, s: 0.94, mood: 'happy' } } })
    .shot(at('block') - 0.05, { set: 'lib', cast: { mrh: { x: 180, y: 510, s: 0.94, mood: 'neutral' }, otherhand: { x: 1020, y: 500, s: 0.94, mood: 'smug' } } })
    .shot(at('fourday') - 0.05, { set: 'lib', cast: { mei: { x: 200, y: 510, s: 0.98, mood: 'happy' }, onehand: { x: 1000, y: 500, s: 0.94, mood: 'happy' } } })
    .shot(at('second') - 0.05, { set: 'lib', cast: { nib: { x: 200, y: 490, s: 0.9, mood: 'smug' }, mei: { x: 960, y: 510, s: 1.02, mood: 'happy', phone: 1 } } });

  d.pop(planC, at('tchart') + 0.08, end('pick') + 0.18, 600, 265);
  d.pop(blkC, at('block') + 0.08, end('block') + 0.18, 600, 265);
  d.pop(altC, at('alt') + 0.08, end('fourday') + 0.18, 600, 265);
  d.pop(balC, at('mythbal') + 0.08, end('mythbal') + 0.18, 600, 265);
  d.pop(secC, at('second') + 0.08, end('check') + 0.2, 600, 275);

  return t => {
    d.upd(t);
    rating.set(1 + P(t, mid('fresh', 0.65), 0.45, linear), win(t, mid('fresh', 0.55), S.D + 1, 0.2)); tr(rating, 1030, 74);
  };
});
