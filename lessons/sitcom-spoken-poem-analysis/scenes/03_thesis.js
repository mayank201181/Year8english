/* Scene 3: On the surface, but really (Building a thesis + Planning a 3–5 minute talk on a cue card).
   Room 8H: Prep clock split (10/40/35/15) -> Retelling vs Thesis ('On the surface... but really...') on Dunbar's 'Sympathy' ->
   Only Lazy Students Forget Proper Conclusions -> 3-column Cue Card vs full script! */
scene('thesis', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('mike'); d.who('timer');

  const splitC = engCard(d.fg, '**PREP TIME SPLIT**\n10% **Gist** · 40% **Annotate** · 35% **Cue Card** · 15% **Whisper Opening/End**', { w: 780, size: 27, stroke: ENG.gold });
  const badTh = engCard(d.fg, '"Sympathy is about a bird in a cage that wants to get out."', { w: 680, size: 29, tab: 'JUST RETELLING', icon: 'cross', stroke: C.bad });
  const formC = engCard(d.fg, '**THESIS FORMULA**\n"**On the surface**..., **but really**..., and the poet shows this through..."', { w: 760, size: 29, stroke: ENG.violet });
  const qDun = engQuote(d.fg, { text: "It is not a carol of joy or glee, / But a prayer that he sends from his heart's deep core,", who: 'Paul Laurence Dunbar', where: "'Sympathy' (1899), stanza 3", w: 760, size: 34, hl: ['prayer', 'core'] });
  const goodTh = engCard(d.fg, '**On the surface**, a trapped bird — **but really**, human suffering and the ache for freedom.', { w: 760, size: 28, icon: 'tick', stroke: C.good });
  const olsC = engCard(d.fg, '**Only Lazy Students Forget Proper Conclusions**\n1 **O**verview · 2 **L**anguage · 3 **S**tructure · 4 **F**orm · 5 **P**ersonal · 6 **C**onclusion', { w: 800, size: 26, stroke: ENG.gold });
  const badScr = engCard(d.fg, '550-word full essay script (staring at shoes!)', { w: 640, size: 30, tab: 'NO SCRIPT', icon: 'cross', stroke: C.bad });
  const cue = spaCueCard(d.fg);

  d.shot(0, { set: 'room', cast: { timer: { x: 210, y: 490, s: 1.0, mood: 'happy', fast: 1 }, mei: { x: 1000, y: 510, s: 0.96, mood: 'neutral' } } })
    .shot(at('whatth') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 500, s: 0.98, mood: 'neutral', mug: 1 }, nib: { x: 1010, y: 490, s: 0.88, mood: 'smug' } } })
    .shot(at('dunbar') - 0.05, { set: 'room', cast: { will: { x: 180, y: 440, s: 0.9, mood: 'sad', glow: 0.6 }, mei: { x: 1030, y: 510, s: 0.92, mood: 'happy' } } })
    .shot(at('mnem') - 0.05, { set: 'room', cast: { mrh: { x: 180, y: 500, s: 0.95, mood: 'neutral' }, timer: { x: 1030, y: 490, s: 0.92, mood: 'happy' } } })
    .shot(at('script') - 0.05, { set: 'room', cast: { mei: { x: 240, y: 510, s: 1.0, mood: 'smug' }, mike: { x: 960, y: 480, s: 1.0, mood: 'shock', sweat: 1, squeak: 0.8 } } })
    .shot(at('card') - 0.05, { set: 'room', cast: { mrh: { x: 160, y: 540, s: 0.82, mood: 'happy' }, mike: { x: 1050, y: 530, s: 0.82, mood: 'happy' } } });

  d.pop(splitC, at('split') + 0.08, end('split') + 0.2, 600, 270);
  d.pop(badTh, at('badth') + 0.08, end('retell') + 0.15, 600, 220);
  d.pop(formC, at('retell') + 0.1, end('retell') + 0.2, 600, 380);
  d.pop(qDun, at('dunbar') + 0.08, end('goodth') + 0.15, 600, 240);
  d.pop(goodTh, at('goodth') + 0.08, end('goodth') + 0.2, 600, 465);
  d.pop(olsC, at('mnem') + 0.1, end('olsfpc') + 0.2, 600, 280);
  d.pop(badScr, at('script') + 0.08, end('no') + 0.15, 600, 270);

  return t => {
    d.upd(t);
    qDun.mark(-1, P(t, mid('dunbar', 0.45), 0.45));
    const cv = engOut(cue, t, at('card') - 0.05, S.D + 1, 600, 300, 0.94);
    if (cv) cue.set(P(t, at('card') + 0.1, 1.1, linear));
  };
});
