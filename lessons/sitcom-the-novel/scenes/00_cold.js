/* Scene 0: Cold open (no card). Room 8H, mug #16: Mr H announces Term 3 — The Novel ->
   Will is outraged ('Three hundred pages of PROSE?! Where are the iambs?!') -> Shady lies via speech bubble
   while Mr H deadpans behind him -> Omni floats in with binoculars reading thought bubbles -> 1-star review -> Title card. */
scene('cold', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.amber, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.add('title', engTitle(d.bg, 'Episode 11: Unreliable'), (t, g) => g.set(clamp((t - at('title')) / 2.0), t));

  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('kevin'); d.who('shady'); d.who('omni');

  const cMug = pill('Term 3 · Room 8H · Mug #16', { stroke: ENG.amber });
  const bigBook = engBook(d.fg, 'THE\nNOVEL\n300 pp.', '#9C4A16', 1.15);
  const stProse = engStamp(d.fg, 'PROSE?!', '#C62828');
  const shadyBub = engBubble(d.fg, '"Mr H wept with joy!\nI fought off a **tiger**!"', { size: 28, tail: 'down' });
  const thMei = novThought(d.fg, 'Mmm... canteen\ncurry puff...', 290);
  const thWill = novThought(d.fg, 'Dickens sold HOW\nmany copies?!', 310);
  const whwC = engCard(d.fg, 'A novel is **constructed**! Name the writer + ask **WHAT, HOW, WHY**.', { w: 740, size: 29, stroke: ENG.amber });
  const rev = engReview(d.fg, { stars: 1, text: 'The Novel. Three hundred pages and a lying detective.', by: 'Mei, 12', w: 500 });
  const rating = novRating(d.fg);
  const blackout = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#000000' }, d.hud);

  d.shot(0, { set: 'room', cam: [1, 1.05, 600, 360], cast: { mrh: { x: 230, y: 480, s: 1.08, mood: 'deadpan', mug: 1 } } })
    .shot(at('outrage') - 0.05, { set: 'room', cast: { will: { x: 780, y: 400, s: 1.02, mood: 'shock', glow: 1 }, mrh: { x: 220, y: 490, s: 1.0, mood: 'deadpan', mug: 1 } } })
    .shot(at('shady') - 0.05, { set: 'room', cast: { shady: { x: 320, y: 500, s: 1.08, mood: 'smug' }, mrh: { x: 640, y: 490, s: 0.92, mood: 'deadpan', mug: 1 }, mei: { x: 960, y: 510, s: 1.0, mood: 'deadpan' } } })
    .shot(at('omni') - 0.05, { set: 'room', cast: { omni: { x: 580, y: 270, s: 0.96, mood: 'smug' }, mei: { x: 200, y: 530, s: 0.92, mood: 'happy' }, will: { x: 980, y: 450, s: 0.9, mood: 'shock' } } })
    .shot(at('nib') - 0.05, { set: 'room', cast: { nib: { x: 220, y: 480, s: 0.95, mood: 'smug' }, mrh: { x: 980, y: 500, s: 0.95, mood: 'neutral' } } })
    .shot(at('rev') - 0.05, { conf: 'mei', cast: { mei: { x: 330, y: 420, s: 1.35, mood: 'deadpan', phone: 1 } } })
    .shot(at('title') - 0.05, { set: 'title', cast: {
      mei: { x: 170, y: 640, s: 0.4, mood: 'happy' }, mrh: { x: 320, y: 640, s: 0.4, mood: 'deadpan' },
      shady: { x: 480, y: 640, s: 0.4, mood: 'smug' }, omni: { x: 650, y: 625, s: 0.36, mood: 'smug' },
      will: { x: 810, y: 630, s: 0.35, mood: 'annoyed' }, nib: { x: 950, y: 640, s: 0.36, mood: 'smug' },
      kevin: { x: 1080, y: 640, s: 0.35, mood: 'happy' } } });

  d.lower('mrh', at('novel') + 0.05, 2.5);
  d.lower(['SHADY', 'Unreliable narrator. Definitely making half of this up.'], at('shady') + 0.1, 3.2);
  d.lower(['LADY OMNI', 'Omniscient narrator. Sees every mind on the premises.'], at('omni') + 0.1, 3.2);
  d.lower('mei', at('rev') + 0.1, 2.6);
  d.shake(at('outrage'), 12);
  d.mood('will', at('deny'), 'annoyed');

  d.pop(cMug, at('term3') + 0.1, end('term3') + 0.2, 660, 540);
  d.pop(bigBook, at('novel') + 0.08, end('outrage') + 0.15, 530, 310);
  d.pop(stProse, at('outrage') + 0.15, end('outrage') + 0.2, 530, 490, 0.9);
  d.pop(shadyBub, at('shady') + 0.08, end('mei') + 0.15, 340, 230);
  d.pop(thMei, mid('omni', 0.28), end('deny') + 0.15, 230, 290);
  d.pop(thWill, mid('omni', 0.55), end('deny') + 0.15, 950, 210);
  d.pop(whwC, at('nib') + 0.08, end('nib') + 0.2, 600, 280);
  d.pop(rev, at('rev') + 0.12, end('rev') + 0.25, 850, 390);

  return t => {
    d.upd(t);
    op(blackout, 1 - P(t, 0, 0.45, linear));
    rating.set(1, win(t, mid('rev', 0.2), end('rev') + 0.25, 0.2)); tr(rating, 1030, 74);
  };
});
