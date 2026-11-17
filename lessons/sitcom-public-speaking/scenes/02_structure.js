/* Scene 2: Structuring a speech (Happy Speakers Thrill Crowds: Hook -> Signpost -> Three points + Counter-argument
   -> Close with Call to Action & Cyclical echo) -> 2.5 stars. */
scene('structure', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(8); });
  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), ethos = d.who('ethos'), pathos = d.who('pathos'), logos = d.who('logos');

  /* 4-box speech skeleton strip across top */
  const skel = G(d.fg);
  const SBOX = [['1 HOOK', '#FFE45C'], ['2 SIGNPOST', '#5AB4E0'], ['3 THREE POINTS', '#56D69B'], ['4 CLOSE', '#F06A8A']];
  const sboxes = SBOX.map(([lbl, col], i) => {
    const b = G(skel); tr(b, -390 + i * 260, 0);
    E('rect', { x: -115, y: -38, width: 230, height: 76, rx: 16, fill: 'rgba(14,24,40,0.95)', stroke: col, 'stroke-width': 4 }, b);
    T(b, 0, 10, lbl, { size: 26, weight: 800, anchor: 'middle', fill: col });
    return b;
  });

  const hooks4 = ['rhetorical question', 'startling statistic', 'bold claim', 'short anecdote'].map(s => pill(s, { stroke: '#FF7EB6' }));
  const bMeiHook = engBubble(d.fg, '"Put your hand up if a warm curry puff\nhas ever saved your Tuesday!"', { size: 28, tail: 'left' });
  const tSign = engTech(d.fg, 'SIGNPOSTING', { kind: 'structure', def: 'a roadmap so listeners never get lost' });
  const tTri = engTech(d.fg, 'TRICOLON', { kind: 'structure', def: 'rule of three: complete, balanced, memorable' });
  const cCount = engCard(d.fg, '**Counter-argument + rebuttal:** raise the other side\'s best objection fairly, then overturn it!', { w: 660, size: 29, stroke: '#FFE45C' });
  const tCall = engTech(d.fg, 'CALL TO ACTION', { kind: 'grammar', def: 'imperative commands telling listeners what to do next' });
  const tCyc = engTech(d.fg, 'CYCLICAL STRUCTURE', { kind: 'structure', def: 'circling back to echo your opening hook' });
  const rating = pubRating(d.fg);

  d.shot(0, { set: 'room', cast: { logos: { x: 200, y: 500, s: 0.95, mood: 'happy' } } })
    .shot(at('hook') - 0.05, { set: 'room', cast: { pathos: { x: 200, y: 490, s: 0.95, mood: 'happy' } } })
    .shot(at('tryhook') - 0.05, { set: 'room', cast: { mei: { x: 240, y: 510, s: 1.08, mood: 'happy', hand: 1 } } })
    .shot(at('sign') - 0.05, { set: 'room', cast: { logos: { x: 200, y: 500, s: 0.95, mood: 'neutral' } } })
    .shot(at('three') - 0.05, { set: 'room', cast: { nib: { x: 200, y: 470, s: 0.92, mood: 'smug' } } })
    .shot(at('counter') - 0.05, { set: 'room', cast: { ethos: { x: 210, y: 490, s: 0.98, mood: 'smug' } } })
    .shot(at('close') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 500, s: 1.0, mood: 'neutral', mug: 1 }, nib: { x: 1020, y: 480, s: 0.88, mood: 'smug' } } })
    .shot(at('two') - 0.05, { set: 'room', cast: { mei: { x: 340, y: 510, s: 1.1, mood: 'happy', phone: 1 }, pathos: { x: 880, y: 480, s: 0.98, mood: 'happy' } } });

  hooks4.forEach((c, i) => d.pop(c, mid('hook', 0.2 + i * 0.17), end('hook') + 0.2, 560 + (i % 2) * 320, 350 + Math.floor(i / 2) * 86));
  d.pop(bMeiHook, at('tryhook') + 0.08, end('tryhook') + 0.25, 750, 390);
  d.pop(tSign, at('sign') + 0.08, end('sign') + 0.25, 730, 390);
  d.pop(tTri, at('three') + 0.08, end('three') + 0.25, 730, 390);
  d.pop(cCount, at('counter') + 0.08, end('counter') + 0.25, 730, 390);
  d.pop(tCall, at('close') + 0.08, end('close') + 0.25, 620, 390);
  d.pop(tCyc, at('cycle') + 0.08, end('cycle') + 0.25, 620, 390);

  return t => {
    d.upd(t);
    const sv = win(t, at('hstc'), at('two') - 0.05, 0.25);
    op(skel, sv); tr(skel, 600, 175);
    sboxes.forEach((b, i) => op(b, P(t, mid('hstc', 0.2 + i * 0.16), 0.35, pop)));
    const rv = win(t, mid('two', 0.15), S.D + 1, 0.25);
    rating.set(1 + 1.5 * P(t, mid('two', 0.25), 0.5, linear), rv); tr(rating, 1030, 74);
  };
});
