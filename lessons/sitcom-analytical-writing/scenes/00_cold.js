/* Scene 0: Cold open (no card). Room 8H (22 mugs!). Mei drops a 16-word Romeo & Juliet quote onto the floor ->
   Quotey crashes in with a bruised serif -> Zoom inspects zero words unpacked -> Level 1 verdict -> title card. */
scene('cold', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.94)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.add('title', engTitle(d.bg, 'Episode 15: Climbing the PEEL Ladder'), (t, g) => g.set(clamp((t - at('title')) / 2.0), t));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), qt = d.who('quotey'), zm = d.who('zoom');

  const c1 = pill('Tuesday · Room 8H ·Mug 22 / 23 · Essay Drafts', { size: 29 });
  const badEssay = engCard(d.fg,
    'Romeo climbs the wall. **"But, soft! what light through yonder window breaks? It is the east, and Juliet is the sun."** This shows he loves her.',
    { w: 780, size: 26, stroke: C.bad, icon: 'cross', tab: 'MEI\'S DRAFT' });
  const stDrop = engStamp(d.fg, 'DROPPED QUOTE!', '#D32F2F');
  const cZero = pill('16 words quoted · 0 words unpacked · "this shows"', { size: 28, stroke: '#FFB547', color: '#FFE6A8' });
  const rev = engReview(d.fg, { stars: 1, text: 'Analytical Writing. Why can\'t quotes stand by themselves?!', by: 'Mei, 12', w: 500 });

  d.shot(0, { set: 'room', cam: [1, 1.05, 600, 360], cast: { mrh: { x: 200, y: 470, s: 1.05, mood: 'deadpan', mug: 1 }, mei: { x: 900, y: 500, s: 1.05, mood: 'happy' } } })
    .shot(at('crash') - 0.05, { set: 'room', cast: { quotey: { x: 580, y: 530, s: 1.05, mood: 'shock', drop: 1 }, mei: { x: 240, y: 510, s: 1.0, mood: 'shock' } } })
    .shot(at('iam') - 0.05, { set: 'room', cast: { quotey: { x: 280, y: 470, s: 1.05, mood: 'annoyed', drop: 0.2 }, mei: { x: 940, y: 500, s: 1.0, mood: 'shock' } } })
    .shot(at('loupe') - 0.05, { set: 'room', cast: { zoom: { x: 250, y: 480, s: 1.0, mood: 'smug', focus: 1 }, mrh: { x: 980, y: 490, s: 0.98, mood: 'deadpan', mug: 1 } } })
    .shot(at('will') - 0.05, { conf: 'will', cast: { will: { x: 330, y: 410, s: 1.25, mood: 'sad', glow: 0.5 } } })
    .shot(at('conf') - 0.05, { set: 'room', cast: { mei: { x: 280, y: 500, s: 1.05, mood: 'annoyed' }, mrh: { x: 920, y: 480, s: 1.02, mood: 'neutral', mug: 1 } } })
    .shot(at('title') - 0.05, { set: 'title', cast: {
      mei: { x: 185, y: 640, s: 0.38, mood: 'happy' }, mrh: { x: 330, y: 640, s: 0.38, mood: 'deadpan' },
      quotey: { x: 480, y: 640, s: 0.36, mood: 'happy' }, zoom: { x: 630, y: 640, s: 0.36, mood: 'smug' },
      will: { x: 780, y: 630, s: 0.34, mood: 'smug' }, nib: { x: 910, y: 640, s: 0.35, mood: 'smug' }, kevin: { x: 1035, y: 640, s: 0.35, mood: 'happy' } } });

  d.shake(at('crash') + 0.05, 11);
  d.lower(['QUOTEY', 'Golden Quotation Marks. Hates being dropped.'], at('iam') + 0.1, 3.2);
  d.lower(['ZOOM', '10× Word Loupe. Unpacks single words.'], at('loupe') + 0.1, 3.2);

  d.pop(c1, at('tues') + 0.1, end('tues') + 0.25, 600, 560);
  d.pop(badEssay, at('read') + 0.08, end('crash') + 0.2, 610, 230);
  d.pop(stDrop, at('crash') + 0.08, end('who') + 0.2, 610, 390, 0.84);
  d.pop(cZero, at('loupe') + 0.1, end('mrh') + 0.2, 610, 250);
  d.pop(rev, mid('will', 0.4), end('will') + 0.25, 820, 340);

  const blackout = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#000000' }, d.hud);
  return t => {
    d.upd(t);
    op(blackout, 1 - P(t, 0, 0.45, linear));
  };
});
