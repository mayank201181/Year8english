/* Scene 0: Cold open (no card). Room 8H, mug #17: Mr H sets "'Mobile phones should be banned in schools.' Discuss." ->
   Mei writes an ALL-CAPS rant -> Nib leaks ink -> Brass scales + One Hand and Other Hand pop up -> 1-star review -> Title card. */
scene('cold', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.amber, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.add('title', engTitle(d.bg, 'Episode 12: On the Other Hand'), (t, g) => g.set(clamp((t - at('title')) / 2.0), t));

  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('kevin'); d.who('onehand'); d.who('otherhand');

  const cMug = pill('Monday · Room 8H · Mug #17', { stroke: ENG.amber });
  const taskC = engCard(d.fg, '"Mobile phones should be banned in schools." **Discuss**.', { w: 720, size: 31, stroke: ENG.amber });
  const rantC = engCard(d.fg, '"I THINK BANNING PHONES IS STUPID AND ANYONE WHO AGREES IS CLUELESS!!!!!"', { w: 740, size: 28, tab: 'ALL-CAPS RANT', icon: 'cross', stroke: C.bad });
  const scales = disScales(d.fg);
  const rev = engReview(d.fg, { stars: 1, text: 'Discursive Writing. Two giant gloves are trying to take my phone.', by: 'Mei, 12', w: 500 });
  const rating = disRating(d.fg);
  const blackout = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#000000' }, d.hud);

  d.shot(0, { set: 'room', cam: [1, 1.05, 600, 360], cast: { mrh: { x: 220, y: 480, s: 1.08, mood: 'deadpan', mug: 1 }, mei: { x: 930, y: 500, s: 1.05, mood: 'annoyed', phone: 1 } } })
    .shot(at('rant') - 0.05, { set: 'room', cast: { mei: { x: 280, y: 500, s: 1.12, mood: 'annoyed', phone: 1 }, nib: { x: 930, y: 470, s: 0.96, mood: 'shock', ink: 1 } } })
    .shot(at('one') - 0.05, { set: 'room', cast: { onehand: { x: 210, y: 490, s: 0.98, mood: 'neutral' }, otherhand: { x: 990, y: 490, s: 0.98, mood: 'smug' } } })
    .shot(at('gloves') - 0.05, { set: 'room', cast: { mei: { x: 260, y: 510, s: 1.05, mood: 'shock' }, will: { x: 940, y: 430, s: 0.92, mood: 'smug', glow: 0.6 } } })
    .shot(at('rev') - 0.05, { conf: 'mei', cast: { mei: { x: 330, y: 420, s: 1.35, mood: 'deadpan', phone: 1 } } })
    .shot(at('title') - 0.05, { set: 'title', cast: {
      mei: { x: 170, y: 640, s: 0.4, mood: 'happy' }, mrh: { x: 320, y: 640, s: 0.4, mood: 'deadpan' },
      onehand: { x: 480, y: 640, s: 0.38, mood: 'happy' }, otherhand: { x: 650, y: 640, s: 0.38, mood: 'smug' },
      will: { x: 800, y: 630, s: 0.35, mood: 'smug' }, nib: { x: 950, y: 640, s: 0.36, mood: 'smug' },
      kevin: { x: 1080, y: 640, s: 0.35, mood: 'happy' } } });

  d.lower('mrh', at('task') + 0.05, 2.5);
  d.lower(['ON THE ONE HAND', 'Golden scale-glove. Calm, fair, measured.'], at('one') + 0.08, 2.9);
  d.lower(['ON THE OTHER HAND', 'Teal scale-glove. Lives for "Conversely!"'], at('other') + 0.08, 2.9);
  d.lower('mei', at('rev') + 0.1, 2.6);

  d.pop(cMug, at('open') + 0.1, end('open') + 0.2, 600, 560);
  d.pop(taskC, at('task') + 0.08, end('task') + 0.18, 600, 250);
  d.pop(rantC, at('rant') + 0.08, end('ink') + 0.15, 600, 255);
  d.pop(rev, at('rev') + 0.12, end('rev') + 0.25, 850, 390);

  return t => {
    d.upd(t);
    op(blackout, 1 - P(t, 0, 0.45, linear));
    const sv = engOut(scales, t, at('one') - 0.05, end('will') + 0.15, 600, 340, 0.88);
    if (sv) {
      const deg = t < at('other') ? -10 * P(t, at('one'), 0.5) : lerp(-10, 10, P(t, at('other'), 0.6));
      scales.set(deg, 'BAN', 'KEEP');
    }
    rating.set(1, win(t, mid('rev', 0.2), end('rev') + 0.25, 0.2)); tr(rating, 1030, 74);
  };
});
