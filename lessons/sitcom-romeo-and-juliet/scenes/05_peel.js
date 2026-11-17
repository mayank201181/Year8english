/* Ep 4, Scene 5: Eight Bs & Mei's Verona PEEL ladder ("Juliet is the sun" + "kill the envious moon" + Kevin's
   triumphant comma after "However,"). */
scene('peel', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });

  const mei = d.who('mei'), mrh = d.who('mrh'), kev = d.who('kevin');

  /* 8 Bs grid */
  const bs8 = G(d.fg);
  E('rect', { x: -500, y: -175, width: 1000, height: 350, rx: 24, fill: 'rgba(14,24,40,0.95)', stroke: ENG.rose, 'stroke-width': 4 }, bs8);
  T(bs8, 0, -124, 'THE PLOT IN EIGHT Bs', { size: 28, weight: 800, anchor: 'middle', fill: ENG.gold, ls: 2 });
  ['1. Brawl (1.1)', '2. Ball (1.5)', '3. Balcony (2.2)', '4. Bride (2.6)', '5. Blood (3.1)', '6. Banished (3.1)', '7. Bottle (4.3)', '8. Burial (5.3)'].forEach((lbl, i) => {
    const bx = G(bs8); tr(bx, -355 + (i % 4) * 236, -38 + Math.floor(i / 4) * 124);
    E('rect', { x: -108, y: -44, width: 216, height: 88, rx: 14, fill: 'rgba(255,255,255,0.08)', stroke: i < 4 ? '#56D69B' : C.bad, 'stroke-width': 3 }, bx);
    T(bx, 0, 10, lbl, { size: 24, weight: 800, anchor: 'middle', fill: '#FFFFFF' });
  });

  const cTask = pill('Task: How does Shakespeare present Romeo’s feelings in Act 2 Scene 2?', { size: 28, stroke: ENG.gold });

  const peel = engPeel(d.fg, [
    'Shakespeare presents Romeo’s love for Juliet as **overwhelming** and worshipful.',
    'At night he declares "**Juliet is the sun**" and urges her to "**kill the envious moon**".',
    'The **metaphor** makes her his centre of light/life; **personifying** the pale moon rejects cold Rosaline.',
    '**However,** the violent verb "**kill**" hints that even love speaks of death, **foreshadowing** the tomb.',
  ], { w: 795, size: 23, title: "MEI'S ROMEO & JULIET PEEL" });

  const bKev = engBubble(d.fg, '“However,” — PERFECT COMMA USE!', { size: 30, tail: 'down' });
  const stTop = engStamp(d.fg, 'TOP BAND · MUG #11', '#1E9E5A');

  d.shot(0, { set: 'room', cast: { mei: { x: 150, y: 580, s: 0.78, mood: 'happy' } } })
    .shot(at('task') - 0.05, { set: 'room', cast: { mrh: { x: 210, y: 480, s: 1.0, mood: 'neutral', mug: 1 }, mei: { x: 1010, y: 510, s: 0.95, mood: 'happy' } } })
    .shot(at('p1') - 0.05, { set: 'room', cast: { mei: { x: 170, y: 520, s: 0.92, mood: 'happy' } } })
    .shot(at('kevin') - 0.05, { set: 'room', cast: { kevin: { x: 280, y: 500, s: 0.95, mood: 'happy' }, mei: { x: 920, y: 500, s: 1.0, mood: 'smug' } } })
    .shot(at('sigh') - 0.05, { set: 'room', cast: { mrh: { x: 340, y: 480, s: 1.1, mood: 'happy', mug: 1 }, mei: { x: 880, y: 500, s: 1.02, mood: 'happy' } } });

  d.pop(bs8, at('eightb') + 0.05, end('eightb') + 0.25, 620, 310);
  d.pop(cTask, at('task') + 0.08, end('task') + 0.2, 610, 220);
  d.pop(bKev, at('kevin') + 0.06, end('kevin') + 0.25, 520, 240);
  d.pop(stTop, at('sigh') + 0.08, end('sigh') + 0.4, 620, 220, 0.82);

  return t => {
    d.upd(t);
    const pv = engOut(peel, t, at('p1') - 0.05, end('p4') + 0.3, 750, 90, 1);
    if (pv) {
      const rungs = P(t, at('p1'), 0.5, easeOut) +
        P(t, at('p2'), 0.5, easeOut) +
        P(t, at('p3'), 0.55, easeOut) +
        P(t, at('p4'), 0.55, easeOut);
      peel.set(rungs);
    }
  };
});
