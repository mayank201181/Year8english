/* Scene 0: Cold open (no card). School hall (engHall): curry-puff crisis -> Mei hides behind 6 A4 sheets reading
   "Hello, my name is Mei..." -> Mr H sighs -> spotlight hits Ethos, Pathos & Logos ("Aristotle's Triad, 4th century BC!")
   -> Will is jealous of their spotlight -> 1 star -> title card. */
scene('cold', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('hall', engHall(d.bg), (t, g) => {
    g.upd(t);
    g.spot(win(t, at('chord') - 0.1, end('math') + 0.3, 0.25), 600);
  });
  d.add('title', engTitle(d.bg, 'Episode 6: Friends, Romans, Year 8'), (t, g) => g.set(clamp((t - at('title')) / 2.0), t));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), ethos = d.who('ethos'), pathos = d.who('pathos'), logos = d.who('logos');

  const cCrisis = engCard(d.fg, '**EMERGENCY:** Canteen curry puffs → plain rice cakes?!', { w: 660, size: 31, stroke: C.bad, tab: 'CRISIS' });
  const badSheet = engPaper(d.fg, 540, 220, { title: 'PAGE 1 OF 6' });
  T(badSheet, -240, -10, '"Hello, my name is Mei, and today', { size: 25, weight: 700, fill: SC_INK, font: FB });
  T(badSheet, -240, 32, 'I am going to talk to you about snacks..."', { size: 25, weight: 700, fill: SC_INK, font: FB });
  const zzz = pill('87% of listeners asleep in 4 seconds 💤', { size: 29, stroke: '#5AB4E0', color: '#BDE7FF' });
  const cBand = pill('ARISTOTLE\'S TRIAD · est. 4th century BC', { size: 32, stroke: ENG.gold, color: '#FFE6A8' });
  const rev = engReview(d.fg, { stars: 1, text: 'Six pages of A4 mumble. Even I fell asleep.', by: 'Mei, 12', w: 490 });
  const blackout = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#000000' }, d.hud);

  d.shot(0, { set: 'hall', cam: [1, 1.05, 600, 360] })
    .shot(at('enter') - 0.05, { set: 'hall', cast: { mei: { x: 900, y: 470, s: 1.05, mood: 'happy' }, mrh: { x: 220, y: 500, s: 1.0, mood: 'deadpan', mug: 1 } } })
    .shot(at('chord') - 0.05, { set: 'hall', cast: {
      pathos: { x: 340, y: 460, s: 0.95, mood: 'happy' },
      ethos: { x: 600, y: 450, s: 1.02, mood: 'smug' },
      logos: { x: 860, y: 460, s: 0.95, mood: 'neutral' } } })
    .shot(at('jealous') - 0.05, { conf: 'will', cast: { will: { x: 340, y: 410, s: 1.25, mood: 'annoyed', glow: 0.8 } } })
    .shot(at('review') - 0.05, { set: 'hall', cast: { mei: { x: 320, y: 500, s: 1.1, mood: 'deadpan', phone: 1 } } })
    .shot(at('title') - 0.05, { set: 'title', cast: {
      mei: { x: 150, y: 642, s: 0.38, mood: 'happy' }, mrh: { x: 290, y: 642, s: 0.38, mood: 'deadpan' },
      ethos: { x: 450, y: 640, s: 0.38, mood: 'smug' }, pathos: { x: 600, y: 640, s: 0.38, mood: 'happy' },
      logos: { x: 750, y: 640, s: 0.38, mood: 'happy' }, will: { x: 910, y: 632, s: 0.34, mood: 'annoyed' },
      nib: { x: 1020, y: 642, s: 0.34, mood: 'smug' }, kevin: { x: 1110, y: 644, s: 0.32, mood: 'happy' } } });

  d.lower(['ETHOS', 'Credibility & Character. Lead vocals.'], at('chord') + 0.1, 2.8);
  d.lower(['PATHOS', 'Audience Emotion. Spotlight hog.'], at('band') + 0.1, 2.8);
  d.lower(['LOGOS', 'Logic, Facts & Evidence. Owns a clipboard.'], at('math') + 0.1, 2.8);
  d.mood('mei', at('sigh'), 'sad');

  d.pop(cCrisis, at('crisis') + 0.1, end('crisis') + 0.25, 600, 320);
  d.pop(badSheet, at('bad') + 0.05, end('sigh') + 0.2, 540, 280);
  d.pop(cBand, at('band') + 0.08, end('math') + 0.2, 600, 150);
  d.pop(zzz, mid('math', 0.2), end('math') + 0.25, 600, 620);
  d.pop(rev, mid('review', 0.15), end('review') + 0.25, 800, 360);

  return t => {
    d.upd(t);
    op(blackout, 1 - P(t, 0, 0.45, linear));
  };
});
