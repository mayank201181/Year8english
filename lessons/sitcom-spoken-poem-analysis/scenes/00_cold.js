/* Scene 0: Cold open (no card). School hall, mug #15: Mr H sets the unseen poem 3–5 min spoken analysis ->
   Coach Timer starts the clock -> Mike the Microphone sweats on stage -> Mei says 'Um, basically, lots of techniques' ->
   Mike squeaks, Nib leaks ink, Will heckles -> 1-star review -> Episode 10 title card. */
scene('cold', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('hall', engHall(d.bg), (t, g) => { g.upd(t); g.curtain(1); g.spot(t >= at('mike') ? 1 : 0.4, 600); });
  d.add('title', engTitle(d.bg, 'Episode 10: Unseen, Unheard Of'), (t, g) => g.set(clamp((t - at('title')) / 2.0), t));

  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('kevin'); d.who('mike'); d.who('timer');

  const cMug = pill('School Hall · Wednesday · Mug #15', { stroke: ENG.gold });
  const taskC = engCard(d.fg, '**UNSEEN POEM** · 10 min prep · **3–5 min spoken analysis** + Q&A', { w: 720, size: 30, stroke: ENG.violet });
  const badC = engCard(d.fg, '"Um... this poem is **basically** about... **lots of techniques**?"', { w: 680, size: 30, tab: 'FILLER ALERT', icon: 'cross', stroke: C.bad });
  const stSq = engStamp(d.fg, 'FEEDBACK!', '#E8424F');
  const rev = engReview(d.fg, { stars: 1, text: 'Unseen poetry. Even the microphone is sweating.', by: 'Mei, 12', w: 490 });
  const rating = spaRating(d.fg);
  const blackout = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#000000' }, d.hud);

  d.shot(0, { set: 'hall', cam: [1, 1.05, 600, 380], cast: { mrh: { x: 250, y: 470, s: 1.05, mood: 'deadpan', mug: 1 } } })
    .shot(at('timer') - 0.05, { set: 'hall', cast: { timer: { x: 300, y: 460, s: 1.05, mood: 'happy', fast: 1 }, mei: { x: 860, y: 480, s: 1.08, mood: 'shock', sweat: 1 } } })
    .shot(at('mike') - 0.05, { set: 'hall', cast: { mike: { x: 520, y: 450, s: 1.05, mood: 'sad', sweat: 1 }, mei: { x: 850, y: 480, s: 1.08, mood: 'shock' } } })
    .shot(at('squeak') - 0.05, { set: 'hall', cast: { mike: { x: 500, y: 450, s: 1.12, mood: 'shock', sweat: 1, squeak: 1 }, nib: { x: 880, y: 470, s: 0.95, mood: 'shock', ink: 1 } } })
    .shot(at('will') - 0.05, { set: 'hall', cast: { will: { x: 300, y: 400, s: 0.96, mood: 'annoyed', glow: 0.7 }, mei: { x: 850, y: 480, s: 1.05, mood: 'deadpan' } } })
    .shot(at('rev') - 0.05, { conf: 'mei', cast: { mei: { x: 330, y: 420, s: 1.35, mood: 'deadpan', phone: 1 } } })
    .shot(at('title') - 0.05, { set: 'title', cast: {
      mei: { x: 180, y: 640, s: 0.4, mood: 'happy' }, mrh: { x: 330, y: 640, s: 0.4, mood: 'deadpan' },
      mike: { x: 490, y: 640, s: 0.38, mood: 'neutral', sweat: 0.6 }, timer: { x: 650, y: 640, s: 0.38, mood: 'happy' },
      will: { x: 800, y: 630, s: 0.35, mood: 'smug' }, nib: { x: 950, y: 640, s: 0.36, mood: 'smug' },
      kevin: { x: 1080, y: 640, s: 0.35, mood: 'happy' } } });

  d.lower('mrh', at('task') + 0.1, 2.6);
  d.lower(['COACH TIMER', 'Brisk stopwatch referee. Zero extra seconds.'], at('timer') + 0.1, 3.0);
  d.lower(['MIKE', 'Stage microphone. Allergic to "um" and "basically".'], at('mike') + 0.1, 3.2);
  d.lower('nib', at('nib') + 0.05, 2.4);
  d.lower('mei', at('rev') + 0.1, 2.6);
  d.shake(at('squeak'), 14);

  d.pop(cMug, at('hall') + 0.1, end('hall') + 0.2, 600, 560);
  d.pop(taskC, at('task') + 0.1, end('task') + 0.2, 660, 250);
  d.pop(badC, at('um') + 0.08, end('squeak') + 0.15, 620, 210);
  d.pop(stSq, at('squeak') + 0.12, end('nib') + 0.15, 620, 360, 0.9);
  d.pop(rev, at('rev') + 0.12, end('rev') + 0.25, 850, 390);

  return t => {
    d.upd(t);
    op(blackout, 1 - P(t, 0, 0.45, linear));
    rating.set(1, win(t, mid('rev', 0.2), end('rev') + 0.25, 0.2)); tr(rating, 1030, 74);
  };
});
