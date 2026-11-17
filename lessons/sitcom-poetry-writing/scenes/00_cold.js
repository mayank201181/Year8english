/* Scene 0: Cold open (no card). Room 8H, mug #14: Mr H sets the identity poem + commentary portfolio ->
   Mei writes 'sad / bad', Nib leaks ink -> Lady Cliché pops up with 'tears like rain' -> Thesaurus Rex
   crashes in and chomps Mei's notebook -> Will demands soul -> 1-star review -> Episode 9 title card. */
scene('cold', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.add('title', engTitle(d.bg, "Episode 9: Show, Don't Haiku"), (t, g) => g.set(clamp((t - at('title')) / 2.0), t));

  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('kevin'); d.who('rex'); d.who('cliche');

  const bd = G(d.bg);
  T(bd, 660, 215, 'TERM 2 PORTFOLIO', { size: 48, weight: 800, anchor: 'middle', fill: '#6A3AC8' });
  T(bd, 660, 285, '1. Original Identity Poem', { size: 34, weight: 700, anchor: 'middle', fill: SC_INK });
  T(bd, 660, 345, '2. Critical Commentary', { size: 34, weight: 700, anchor: 'middle', fill: '#1E7A5A' });

  const cMug = pill('Room 8H · Monday · Mug #14', { stroke: ENG.gold });
  const badDraft = engPaper(d.fg, 540, 220, { title: "MEI'S DRAFT 1" });
  T(badDraft, 0, -10, '"My culture is big and sometimes I\'m sad,', { size: 25, weight: 700, anchor: 'middle', fill: SC_INK, font: FB });
  T(badDraft, 0, 34, 'Feeling confused is really quite bad."', { size: 25, weight: 700, anchor: 'middle', fill: '#C62828', font: FB });

  const cCli1 = pill('"tears like rain"', { stroke: '#FF7EB6', color: '#FFD6EA' });
  const cCli2 = pill('"a heart of gold"', { stroke: '#FFD23F', color: '#FFF2B2' });
  const cRex1 = pill('rain → PLUVIAL PRECIPITATION', { size: 28, stroke: '#56D69B', color: '#C9F7E0' });
  const cRex2 = pill('sad → LUGUBRIOUS', { size: 28, stroke: '#56D69B', color: '#C9F7E0' });
  const stChomp = engStamp(d.fg, 'DRAFT EATEN', '#1F8A5C');
  const rev = engReview(d.fg, { stars: 1, text: 'Writing poetry. My homework is inside a dinosaur.', by: 'Mei, 12', w: 500 });
  const rating = pwrRating(d.fg);
  const blackout = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#000000' }, d.hud);

  d.shot(0, { set: 'room', cam: [1, 1.05, 620, 340], cast: { mrh: { x: 220, y: 480, s: 1.08, mood: 'deadpan', mug: 1 } } })
    .shot(at('easy') - 0.05, { set: 'room', cast: { mei: { x: 310, y: 500, s: 1.15, mood: 'smug' } } })
    .shot(at('leak') - 0.05, { conf: 'nib', cast: { nib: { x: 360, y: 410, s: 1.35, mood: 'shock', ink: 1 } } })
    .shot(at('cliche') - 0.05, { set: 'room', cast: { mei: { x: 280, y: 510, s: 1.08, mood: 'shock' }, cliche: { x: 850, y: 390, s: 1.05, mood: 'happy' } } })
    .shot(at('rex') - 0.05, { set: 'room', cast: { cliche: { x: 240, y: 420, s: 0.9, mood: 'shock' }, rex: { x: 820, y: 450, s: 1.15, mood: 'annoyed', chomp: 1 } } })
    .shot(at('chomp') - 0.05, { set: 'room', cast: { mei: { x: 290, y: 510, s: 1.05, mood: 'deadpan' }, rex: { x: 820, y: 450, s: 1.15, mood: 'smug', chomp: 0.4 } } })
    .shot(at('will') - 0.05, { set: 'room', cast: { will: { x: 320, y: 410, s: 1.0, mood: 'annoyed', glow: 0.8, quill: 1 }, rex: { x: 870, y: 460, s: 1.05, mood: 'smug' } } })
    .shot(at('review') - 0.05, { conf: 'mei', cast: { mei: { x: 340, y: 420, s: 1.35, mood: 'deadpan', phone: 1 } } })
    .shot(at('title') - 0.05, { set: 'title', cast: {
      mei: { x: 180, y: 640, s: 0.4, mood: 'happy' }, mrh: { x: 330, y: 640, s: 0.4, mood: 'deadpan' },
      will: { x: 480, y: 630, s: 0.35, mood: 'smug' }, nib: { x: 630, y: 640, s: 0.36, mood: 'smug' },
      rex: { x: 790, y: 640, s: 0.38, mood: 'smug' }, cliche: { x: 950, y: 640, s: 0.36, mood: 'happy' },
      kevin: { x: 1080, y: 640, s: 0.35, mood: 'happy' } } });

  d.lower('mrh', at('task') + 0.1, 2.8);
  d.lower('nib', at('leak') + 0.1, 2.6);
  d.lower(['LADY CLICHÉ', 'Sparkly greeting card. Zero original thoughts.'], at('cliche') + 0.1, 3.2);
  d.lower(['THESAURUS REX', 'Fat green thesaurus. Zero chill. Eats first drafts.'], at('rex') + 0.1, 3.2);
  d.lower('will', at('will') + 0.1, 2.6);
  d.lower('mei', at('review') + 0.1, 2.6);
  d.shake(at('rex'), 12);

  d.pop(cMug, at('open') + 0.15, end('open') + 0.2, 660, 540);
  d.pop(badDraft, at('easy') + 0.1, end('easy') + 0.25, 790, 360);
  d.pop(cCli1, mid('cliche', 0.25), end('who1') + 0.15, 560, 240);
  d.pop(cCli2, mid('cliche', 0.55), end('who1') + 0.15, 560, 330);
  d.pop(cRex1, mid('rex', 0.25), end('rex') + 0.2, 520, 210);
  d.pop(cRex2, mid('rex', 0.6), end('rex') + 0.2, 520, 300);
  d.pop(stChomp, at('chomp') + 0.2, end('chomp') + 0.25, 560, 360, 0.9);
  d.pop(rev, at('review') + 0.15, end('review') + 0.3, 850, 390);

  return t => {
    const sh = d.upd(t);
    op(blackout, 1 - P(t, 0, 0.45, linear));
    op(bd, sh.spec.set === 'room' && t < at('easy') ? P(t, at('task'), 0.4, ease) : 0);
    rating.set(1, win(t, mid('review', 0.2), end('review') + 0.3, 0.2)); tr(rating, 1030, 74);
  };
});
