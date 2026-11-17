/* Ep 2, Scene 0: Cold open. School hall during Singapore's 4 p.m. monsoon: Prospero hijacks the hall fans and
   spotlights -> Mr H's risk assessment -> Ariel ("Not a hair perish'd" + 5 mins off) -> Caliban's 1-star host
   review on Mei's phone -> Will brags about his last solo play -> Episode 2 title card. */
scene('cold', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  const hall = d.add('hall', engHall(d.bg), (t, g) => {
    g.upd(t * 2.4);
    g.curtain(1);
    g.spot(t < at('host') ? 0.85 : 0.3, 600 + Math.sin(t * 5) * 120);
  });
  const isl = d.add('isl', tmpIsland(d.bg), (t, g) => g.upd(t, 0.25));
  const title = d.add('title', engTitle(d.bg, 'Episode 2: The Isle Is Full of Noises'), (t, g) => g.set(clamp((t - at('title')) / 2.2), t));

  const boltHall = E('path', { d: 'M620,60 L570,210 L615,210 L555,390 L655,180 L610,180 Z', fill: '#FFF7C2', opacity: 0 }, d.bg);

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will');
  const pros = d.who('prospero'), cal = d.who('caliban'), ari = d.who('ariel'), mir = d.who('miranda');

  const cRain = pill('Tuesday · 4 p.m. · Monsoon rain + 1 wizard', { stroke: '#5AB4E0' });
  const cFan = pill('HALL FANS: SPEED 3 (MAGICAL GALE)', { stroke: ENG.violet, color: '#E6D6FF' });
  const cRisk = engCard(d.fg, 'RISK ASSESSMENT: **Magical shipwrecks — NOT COVERED**', { w: 680, size: 30, icon: 'cross', stroke: C.bad });
  const qHair = engQuote(d.fg, { text: "Not a hair perish'd.", who: 'Ariel', where: 'The Tempest, Act 1 Scene 2', w: 580, size: 42 });
  const cBreak = pill('Break requested: 5 minutes', { stroke: '#7FD3FF', color: '#D8F4FF' });
  const revCal = engReview(d.fg, { stars: 1, text: 'Showed host the fresh springs. Got locked behind a rock. Zero hospitality.', by: 'Caliban, Islander', w: 520 });
  const cLast = pill('c. 1611 · Last play Shakespeare wrote solo', { size: 30, stroke: ENG.rose, color: '#FFD0DC' });
  const rating = tmpRating(d.fg);
  const blackout = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#000000' }, d.hud);

  d.shot(0, { set: 'hall', cam: [1, 1.06, 600, 380], cast: { prospero: { x: 600, y: 400, s: 1.05, mood: 'smug' } } })
    .shot(at('risk') - 0.05, { set: 'hall', cast: { mrh: { x: 260, y: 480, s: 1.1, mood: 'deadpan', mug: 1 }, prospero: { x: 880, y: 400, s: 0.95, mood: 'annoyed' } } })
    .shot(at('hair') - 0.05, { set: 'hall', cast: { ariel: { x: 340, y: 380, s: 1.0, mood: 'happy' }, prospero: { x: 920, y: 410, s: 0.92, mood: 'smug' } } })
    .shot(at('host') - 0.05, { conf: 'caliban', cast: { caliban: { x: 300, y: 430, s: 1.25, mood: 'annoyed' } } })
    .shot(at('phone') - 0.05, { set: 'hall', cast: { mei: { x: 320, y: 500, s: 1.15, mood: 'shock', phone: 1 }, will: { x: 860, y: 400, s: 0.95, mood: 'happy', glow: 0.7 } } })
    .shot(at('title') - 0.05, { set: 'title', cast: {
      mei: { x: 140, y: 640, s: 0.38, mood: 'happy' }, mrh: { x: 280, y: 640, s: 0.38, mood: 'deadpan' },
      prospero: { x: 430, y: 635, s: 0.38, mood: 'smug' }, miranda: { x: 575, y: 640, s: 0.38, mood: 'happy' },
      ariel: { x: 715, y: 625, s: 0.38, mood: 'happy' }, caliban: { x: 860, y: 640, s: 0.38, mood: 'annoyed' },
      will: { x: 1020, y: 630, s: 0.35, mood: 'smug' } } });

  d.lower(['PROSPERO', 'Rightful Duke of Milan. Enthusiastic fan user.'], at('roar') + 0.1, 3.0);
  d.lower('mrh', at('risk') + 0.1, 2.6);
  d.lower(['ARIEL', 'Airy spirit. Overworked stage manager.'], at('hair') + 0.1, 3.0);
  d.lower(['CALIBAN', "Son of Sycorax. Original owner. Leaves 1-star reviews."], at('host') + 0.1, 3.2);
  d.mood('ariel', at('five'), 'annoyed').mood('prospero', at('five'), 'annoyed');
  d.shake(at('roar') + 0.25, 10);

  d.pop(cRain, at('monsoon') + 0.1, end('monsoon') + 0.2, 600, 130);
  d.pop(cFan, mid('roar', 0.3), end('roar') + 0.2, 600, 610);
  d.pop(cRisk, mid('risk', 0.2), end('risk') + 0.2, 680, 220);
  d.pop(qHair, mid('hair', 0.25), end('hair') + 0.2, 700, 230);
  d.pop(cBreak, at('five') + 0.08, end('five') + 0.2, 680, 560);
  d.pop(revCal, mid('host', 0.25), end('phone') + 0.15, 820, 360);
  d.pop(cLast, mid('last', 0.2), end('last') + 0.25, 600, 175);

  return t => {
    d.upd(t);
    op(blackout, 1 - P(t, 0, 0.45, linear));
    attr(boltHall, 'opacity', t < at('risk') && Math.sin(t * 25) > 0.72 ? 0.9 : 0);
    const rv = win(t, mid('host', 0.65), end('last') + 0.2, 0.25);
    rating.set(1, rv); tr(rating, 1030, 74);
  };
});
