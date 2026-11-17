/* Scene 4: Stagecraft & adapting Shakespeare. School hall (engHall).
   Some People Can't Leave Sound Behind (Set, Props, Costume, Lighting, Sound, Blocking) -> proxemics & levels ->
   3x3 stage map from the actor's view (stage left = audience's right; downstage centre = power spot under spotlight) ->
   3 adaptation types (modernise, missing scene, flip viewpoint e.g. Caliban's "This island's mine") -> consistency
   rules -> Will's "swagger" & Nib's FIRST RECORDED USE stamp -> 3.5 stars. */
scene('stage', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  const hall = d.add('hall', engHall(d.bg), (t, g) => {
    g.upd(t);
    g.spot(win(t, at('dsc'), end('dsc') + 0.3, 0.25), 600);
  });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), brack = d.who('brack'), clap = d.who('clapper');

  const spSix = ['Set', 'Props', 'Costume', 'Lighting', 'Sound', 'Blocking'].map(s => pill(s, { size: 28, stroke: '#FF9F43' }));
  const tProx = engTech(d.fg, 'PROXEMICS', { kind: 'drama', def: 'distance between actors = closeness or rejection' });
  const tLev = engTech(d.fg, 'LEVELS', { kind: 'drama', def: 'height on stage = power & status' });
  const smap = scrStageMap(d.fg);
  const cThree = engCard(d.fg, '**Three ways to adapt Shakespeare:**\n1. **Modernise** the setting\n2. Write an offstage **missing scene**\n3. **Flip the viewpoint** (Caliban / Ophelia)', { w: 660, size: 29, stroke: ENG.gold });
  const qCal = engQuote(d.fg, { text: "This island's mine, by Sycorax my mother, / Which thou tak'st from me.", who: 'Caliban', where: 'The Tempest, Act 1 Scene 2', w: 720, size: 36, hl: ['mine'] });
  const cConsist = engCard(d.fg, 'Keep the **dramatic core**, echo a real quote, and stay **consistent** with the play!', { w: 660, size: 30, icon: 'tick', stroke: C.good, boldFill: C.good });
  const stFirst = engStamp(d.fg, 'FIRST RECORDED USE', '#D32F2F');
  const rating = scrRating(d.fg);

  d.shot(0, { set: 'hall', cast: { clapper: { x: 260, y: 470, s: 1.05, mood: 'happy', snap: 1 } } })
    .shot(at('space') - 0.05, { set: 'hall', cast: { nib: { x: 200, y: 460, s: 0.95, mood: 'smug' } } })
    .shot(at('left') - 0.05, { set: 'hall', cast: { mei: { x: 180, y: 510, s: 0.95, mood: 'neutral', hand: 1 }, brack: { x: 1030, y: 460, s: 0.88, mood: 'annoyed' } } })
    .shot(at('dsc') - 0.05, { set: 'hall', cast: { clapper: { x: 190, y: 480, s: 0.92, mood: 'happy' } } })
    .shot(at('adapt') - 0.05, { set: 'hall', cast: { mrh: { x: 200, y: 490, s: 1.0, mood: 'neutral', mug: 1 } } })
    .shot(at('caliban') - 0.05, { set: 'hall', cast: { will: { x: 210, y: 430, s: 0.95, mood: 'happy', glow: 0.6 } } })
    .shot(at('rules') - 0.05, { set: 'hall', cast: { mrh: { x: 200, y: 490, s: 1.0, mood: 'neutral' } } })
    .shot(at('swag') - 0.05, { set: 'hall', cast: { will: { x: 320, y: 430, s: 1.0, mood: 'smug' }, nib: { x: 880, y: 460, s: 0.95, mood: 'annoyed' } } })
    .shot(at('three') - 0.05, { set: 'hall', cast: { mei: { x: 340, y: 500, s: 1.1, mood: 'happy', phone: 1 }, clapper: { x: 860, y: 470, s: 1.0, mood: 'happy' } } });

  d.mood('will', at('stamp'), 'annoyed');

  spSix.forEach((c, i) => d.pop(c, mid('spclsb', 0.25 + i * 0.11), end('spclsb') + 0.2, 540 + (i % 3) * 210, 260 + Math.floor(i / 3) * 90));
  d.pop(tProx, at('space') + 0.08, end('space') + 0.25, 720, 240);
  d.pop(tLev, mid('space', 0.5), end('space') + 0.25, 720, 430);
  d.pop(smap, at('actor') - 0.05, end('dsc') + 0.25, 610, 330);
  d.pop(cThree, at('adapt') + 0.08, end('adapt') + 0.25, 730, 330);
  d.pop(qCal, at('caliban') + 0.05, end('caliban') + 0.25, 720, 320);
  d.pop(cConsist, at('rules') + 0.08, end('rules') + 0.25, 730, 330);
  d.pop(stFirst, at('stamp') + 0.08, end('stamp') + 0.3, 600, 220, 0.82);

  return t => {
    d.upd(t);
    qCal.mark(0, P(t, mid('caliban', 0.35), 0.4));
    const rv = win(t, mid('three', 0.15), S.D + 1, 0.25);
    rating.set(2 + 1.5 * P(t, mid('three', 0.25), 0.5, linear), rv); tr(rating, 1030, 74);
  };
});
