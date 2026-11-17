/* Scene 2: Building people out of words (Direct vs Indirect STEAL, Hyde, Scrooge's oyster, Foil characters, Character arcs). */
scene('steal', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.amber, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('shady'); d.who('omni');

  const qMary = engQuote(d.fg, { text: 'the most disagreeable-looking child ever seen. It was true, too.', who: 'Direct characterisation', where: 'Frances Hodgson Burnett, The Secret Garden (1911), Ch. 1', w: 740, size: 34, hl: ['disagreeable'] });
  const stealC = engCard(d.fg, '**INDIRECT CHARACTERISATION — STEAL**\n**S**peech · **T**houghts · **E**ffect on others · **A**ctions · **L**ooks', { w: 760, size: 28, stroke: ENG.amber });
  const qHyde = engQuote(d.fg, { text: "the man trampled calmly over the child's body", who: 'Mr Enfield on Mr Hyde', where: 'R. L. Stevenson, Dr Jekyll and Mr Hyde (1886), Ch. 1', w: 720, size: 36, hl: ['trampled', 'calmly'] });
  const qOys = engQuote(d.fg, { text: 'a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! ... solitary as an oyster.', who: 'Narrator on Scrooge', where: 'Charles Dickens, A Christmas Carol (1843), Stave One', w: 780, size: 32, hl: ['squeezing', 'solitary', 'oyster'] });
  const tFoil = engTech(d.fg, 'FOIL CHARACTER', { kind: 'drama', def: 'contrasting character highlighting the protagonist (Fred / Fezziwig vs Scrooge)' });
  const arcC = engCard(d.fg, '**CHARACTER ARC** (Dynamic vs Static · Forster\'s Round vs Flat)\n1 **Starting point** → 2 **Catalyst / Turning point** → 3 **End point**', { w: 780, size: 27, stroke: '#56D69B' });
  const cGood = pill('"as good a friend, as good a master, and as good a man"', { size: 27, stroke: '#56D69B', color: '#D0F7E2' });
  const rating = novRating(d.fg);

  d.shot(0, { set: 'room', cast: { mrh: { x: 190, y: 500, s: 0.98, mood: 'neutral', mug: 1 }, nib: { x: 1020, y: 490, s: 0.88, mood: 'smug' } } })
    .shot(at('hyde') - 0.05, { set: 'room', cast: { shady: { x: 220, y: 500, s: 1.0, mood: 'smug' }, mei: { x: 990, y: 510, s: 0.98, mood: 'shock' } } })
    .shot(at('scrooge') - 0.05, { set: 'room', cast: { will: { x: 180, y: 440, s: 0.9, mood: 'happy', glow: 0.6 }, omni: { x: 1010, y: 310, s: 0.86, mood: 'smug' } } })
    .shot(at('foil') - 0.05, { set: 'room', cast: { nib: { x: 190, y: 490, s: 0.9, mood: 'smug' }, mrh: { x: 1010, y: 500, s: 0.94, mood: 'neutral' } } })
    .shot(at('end') - 0.05, { set: 'room', cast: { mei: { x: 320, y: 510, s: 1.08, mood: 'happy', phone: 1 }, mrh: { x: 900, y: 500, s: 0.96, mood: 'happy' } } });

  d.pop(qMary, at('direct') + 0.08, end('direct') + 0.15, 600, 270);
  d.pop(stealC, at('indirect') + 0.08, end('indirect') + 0.2, 600, 270);
  d.pop(qHyde, at('hyde') + 0.08, end('horror') + 0.18, 600, 275);
  d.pop(qOys, at('scrooge') + 0.08, end('oyster') + 0.2, 590, 285);
  d.pop(tFoil, at('foil') + 0.08, end('foil') + 0.2, 600, 270);
  d.pop(arcC, at('arc') + 0.08, end('round') + 0.2, 600, 275);
  d.pop(cGood, at('end') + 0.08, end('end') + 0.25, 600, 270);

  return t => {
    d.upd(t);
    qHyde.mark(-1, P(t, at('horror'), 0.4));
    qOys.mark(0, P(t, mid('scrooge', 0.35), 0.35));
    qOys.mark(1, P(t, mid('oyster', 0.35), 0.35));
    qOys.mark(2, P(t, mid('oyster', 0.55), 0.35));
    rating.set(1 + P(t, mid('end', 0.65), 0.45, linear), win(t, mid('end', 0.55), S.D + 1, 0.2)); tr(rating, 1030, 74);
  };
});
