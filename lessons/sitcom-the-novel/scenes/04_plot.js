/* Scene 4: Every rocket climbs, falls, returns (Plot vs Structure, Freytag's pyramid, in medias res, cliffhangers, pacing). */
scene('plot', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.amber, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('hall', engHall(d.bg), (t, g) => { g.upd(t); g.curtain(1); g.spot(1, 600); });
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('kevin'); d.who('shady'); d.who('omni');

  const pvsC = engCard(d.fg, '**PLOT** = what happens   |   **STRUCTURE** = order, pacing, shifts & chapter hooks', { w: 770, size: 28, stroke: ENG.amber });
  const pyr = novPyramid(d.fg);
  const toolC = engCard(d.fg, '**TIME & SHAPE TOOLS**\n**in medias res** · **flashback** · **foreshadowing** · **circular structure**', { w: 760, size: 28, stroke: '#5AB4E0' });
  const cliC = engCard(d.fg, '**CLIFFHANGER**: Dickens published *Great Expectations* in **weekly parts**!', { w: 740, size: 28, icon: 'tick', stroke: C.good });
  const kevC = pill('Pacing: 1 huge sentence + 6 commas = slow, reflective churchyard...', { size: 25, stroke: '#B58CFF', color: '#EADBFF' });
  const qHold = engQuote(d.fg, { text: '“Hold your noise!” cried a terrible voice,', who: 'The convict (Magwitch)', where: 'Charles Dickens, Great Expectations (1861), Ch. 1 — structural shock!', w: 720, size: 38, hl: ['hold', 'noise'] });
  const cVerbs = pill('Structural verbs: opens with · zooms in · interrupts · returns to', { size: 26, stroke: ENG.amber });
  const rating = novRating(d.fg);

  d.shot(0, { set: 'hall', cast: { mrh: { x: 200, y: 490, s: 0.98, mood: 'neutral', mug: 1 }, will: { x: 1000, y: 420, s: 0.92, mood: 'happy', glow: 0.6 } } })
    .shot(at('frey') - 0.05, { set: 'hall', cast: { nib: { x: 140, y: 550, s: 0.78, mood: 'smug' }, mei: { x: 1060, y: 550, s: 0.8, mood: 'shock' } } })
    .shot(at('tools') - 0.05, { set: 'hall', cast: { omni: { x: 200, y: 310, s: 0.88, mood: 'happy' }, nib: { x: 1010, y: 490, s: 0.88, mood: 'smug' } } })
    .shot(at('serial') - 0.05, { set: 'hall', cast: { will: { x: 220, y: 420, s: 0.94, mood: 'happy', glow: 0.8, quill: 1 }, mei: { x: 990, y: 500, s: 0.95, mood: 'happy' } } })
    .shot(at('kev') - 0.05, { set: 'hall', cast: { kevin: { x: 240, y: 500, s: 0.9, mood: 'happy' }, shady: { x: 960, y: 490, s: 1.0, mood: 'annoyed' } } })
    .shot(at('shift') - 0.05, { set: 'hall', cast: { mrh: { x: 240, y: 490, s: 0.98, mood: 'happy' }, mei: { x: 920, y: 500, s: 1.05, mood: 'happy', phone: 1 } } });

  d.lower('kevin', at('kev') + 0.05, 2.6);
  d.shake(at('shout'), 12);

  d.pop(pvsC, at('pvs') + 0.08, end('pvs') + 0.18, 600, 250);
  d.pop(toolC, at('tools') + 0.08, end('circ') + 0.18, 600, 260);
  d.pop(cliC, at('serial') + 0.08, end('serial') + 0.18, 600, 260);
  d.pop(kevC, at('kev') + 0.08, end('kev') + 0.15, 600, 230);
  d.pop(qHold, at('shout') + 0.06, end('shout') + 0.2, 600, 265);
  d.pop(cVerbs, at('shift') + 0.08, end('shift') + 0.25, 600, 250);

  return t => {
    d.upd(t);
    const pv = engOut(pyr, t, at('frey') - 0.05, end('climax') + 0.2, 600, 285, 0.95);
    if (pv) pyr.set(P(t, at('frey'), 1.5, linear));
    qHold.mark(-1, P(t, mid('shout', 0.2), 0.35));
    rating.set(2 + P(t, mid('shift', 0.7), 0.45, linear), win(t, mid('shift', 0.6), S.D + 1, 0.2)); tr(rating, 1030, 74);
  };
});
