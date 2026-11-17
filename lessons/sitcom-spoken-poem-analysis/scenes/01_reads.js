/* Scene 1: Read cold without panicking (Three reads, TSST gist, context clues, zooming in on 2–3 rich details).
   Room 8H: No single secret meaning -> 3 reads (literal, shifts, language/sound) -> TSST (Speaker ≠ Poet) ->
   'Adlestrop' gist + 'Unwontedly' from context -> Feature + Effect -> Connotation Zoom ('cage', 'unzips'). */
scene('reads', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('mike'); d.who('timer');

  const mythC = engCard(d.fg, 'Myth: "There is ONE secret meaning I have to guess!"\nTruth: Unseen tests your **method** + **evidence**.', { w: 720, size: 28, icon: 'tick', stroke: C.good });
  const threeC = engCard(d.fg, '**THREE CALM READS**\n1. **Story / literal gist**   2. **Shifts & structure**   3. **Language & sound**', { w: 760, size: 28, stroke: ENG.gold });
  const tsstC = engCard(d.fg, '**TSST** (Read 1 — WHAT?)\n**T**itle · **S**peaker (persona ≠ poet!) · **S**ituation · **T**one', { w: 740, size: 29, stroke: ENG.violet });
  const qAdl = engQuote(d.fg, { text: 'Of heat the express-train drew up there / Unwontedly. It was late June.', who: 'Edward Thomas', where: "'Adlestrop' (1917) — context: express train at tiny village = unusually!", w: 760, size: 34, hl: ['unwontedly'] });
  const feC = pill('Golden annotation rule: FEATURE + EFFECT ("so what?")', { size: 28, stroke: '#56D69B', color: '#D0F7E2' });
  const zoomC = pill('Depth > Breadth: zoom in on 2–3 rich details, not 10 labels!', { size: 27, stroke: ENG.gold });
  const zWeb = spaZoomWeb(d.fg);
  const qUnz = engQuote(d.fg, { text: "The sky unzips at four o'clock; / the heat steps back, ashamed.", who: 'Original unseen practice', where: "'Rain on Orchard Road'", w: 720, size: 36, hl: ['unzips'] });

  d.shot(0, { set: 'room', cast: { mrh: { x: 210, y: 500, s: 1.0, mood: 'neutral', mug: 1 }, mei: { x: 990, y: 510, s: 0.96, mood: 'neutral' } } })
    .shot(at('three') - 0.05, { set: 'room', cast: { timer: { x: 210, y: 490, s: 0.98, mood: 'happy' }, mrh: { x: 1010, y: 500, s: 0.92, mood: 'neutral' } } })
    .shot(at('persona') - 0.05, { conf: 'nib', cast: { nib: { x: 280, y: 420, s: 1.25, mood: 'smug' } } })
    .shot(at('gist') - 0.05, { set: 'room', cast: { mei: { x: 210, y: 510, s: 0.98, mood: 'happy' }, mrh: { x: 1010, y: 500, s: 0.94, mood: 'neutral' } } })
    .shot(at('how') - 0.05, { set: 'room', cast: { nib: { x: 190, y: 490, s: 0.9, mood: 'smug' }, mrh: { x: 1020, y: 500, s: 0.92, mood: 'neutral' } } })
    .shot(at('cage') - 0.05, { set: 'room', cast: { will: { x: 160, y: 460, s: 0.85, mood: 'happy', glow: 0.6 }, mei: { x: 1050, y: 520, s: 0.85, mood: 'happy' } } })
    .shot(at('unzip') - 0.05, { set: 'room', cast: { mei: { x: 200, y: 510, s: 0.98, mood: 'happy' }, mike: { x: 1010, y: 490, s: 0.95, mood: 'happy' } } });

  d.mood('mei', at('unwont'), 'shock').mood('mei', at('context'), 'happy');

  d.pop(mythC, at('myth') + 0.08, end('myth') + 0.15, 600, 270);
  d.pop(threeC, at('three') + 0.08, end('three') + 0.18, 600, 270);
  d.pop(tsstC, at('tsst') + 0.08, end('persona') + 0.15, 680, 290);
  d.pop(qAdl, at('gist') + 0.08, end('context') + 0.2, 600, 280);
  d.pop(feC, at('how') + 0.08, end('zoom') + 0.15, 600, 240);
  d.pop(zoomC, at('zoom') + 0.08, end('zoom') + 0.2, 600, 340);
  d.pop(qUnz, at('unzip') + 0.08, end('depth') + 0.2, 600, 280);

  return t => {
    d.upd(t);
    qAdl.mark(0, P(t, at('unwont'), 0.4));
    const zv = engOut(zWeb, t, at('cage') - 0.05, end('cage') + 0.18, 600, 310, 0.94);
    if (zv) zWeb.set(P(t, at('cage') + 0.1, 1.1, linear));
    qUnz.mark(0, P(t, mid('unzip', 0.25), 0.4));
  };
});
