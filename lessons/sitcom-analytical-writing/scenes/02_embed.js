/* Scene 2: PEEL, PETAL and embedding short quotes. PEEL vs PETAL -> Juliet's "My only love sprung from my only hate!"
   -> Explain is the longest part -> Quotey's "Snip it, slip it, unzip it!" (1-8 words, woven smoothly) ->
   Kevin's colon & reporting-clause comma -> slash /, ellipsis ..., square brackets [him] -> two stars! */
scene('embed', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.94)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), qt = d.who('quotey'), zm = d.who('zoom');

  const cPeel = engCard(d.fg, '**PEEL:** Point · Evidence · **Explain (LONGEST!)** · Link\n**PETAL:** Point · Evidence · Technique · Analysis · Link', { w: 780, size: 28, tab: 'ARCHITECTURE', tabCol: '#1E6E9E', stroke: ENG.sky });
  const qJul = engQuote(d.fg, { text: 'My only love sprung from my only hate!', who: 'Juliet', where: 'Romeo and Juliet, Act 1 Scene 5', w: 720, size: 38, hl: ['love', 'hate'] });

  const ssu = [
    ['1 SNIP IT', 'cut down to 1–8 key words ("the sun")', '#FFB547'],
    ['2 SLIP IT', 'weave smoothly into your grammatical sentence', '#56D69B'],
    ['3 UNZIP IT', 'unpack connotations, method & effect (WHW)', '#5AB4E0'],
  ].map(([k, v, col]) => {
    const g = G(d.fg);
    E('rect', { x: -350, y: -38, width: 700, height: 76, rx: 14, fill: 'rgba(12,22,38,0.95)', stroke: col, 'stroke-width': 3.5 }, g);
    T(g, -320, 8, k, { size: 27, weight: 800, fill: col });
    T(g, -135, 8, v, { size: 25, weight: 700, fill: '#FFFFFF', font: FB });
    return g;
  });

  const cWoven = engCard(d.fg, 'Romeo\'s metaphor of Juliet as "**the sun**" suggests his whole world revolves around her.', { w: 780, size: 28, stroke: C.good, icon: 'tick' });
  const cColon = engCard(d.fg, '**Colon:** Hamlet\'s disgust is clear**:** Denmark is "an unweeded garden".\n**Reporting:** Mercutio cries**,** "A plague o\' both your houses!"', { w: 800, size: 26, stroke: '#B58CFF' });
  const cTools = engCard(d.fg, '**/** = verse line break   ·   **…** = words cut\n**[ ]** = grammar tweak: Prospero taught "**[him]** language"', { w: 780, size: 28, stroke: ENG.gold, icon: 'tick' });
  const rating = anlRating(d.fg);

  d.shot(0, { set: 'room', cast: { mrh: { x: 165, y: 500, s: 0.92, mood: 'neutral' }, will: { x: 1035, y: 490, s: 0.85, mood: 'smug', glow: 0.4 } } })
    .shot(at('longest') - 0.05, { set: 'room', cast: { zoom: { x: 180, y: 500, s: 0.92, mood: 'smug', focus: 0.7 }, quotey: { x: 1010, y: 500, s: 0.95, mood: 'happy' } } })
    .shot(at('weave') - 0.05, { set: 'room', cast: { mei: { x: 190, y: 520, s: 0.95, mood: 'happy' }, quotey: { x: 1000, y: 490, s: 0.98, mood: 'happy' } } })
    .shot(at('colon') - 0.05, { set: 'room', cast: { kevin: { x: 200, y: 520, s: 0.92, mood: 'happy' }, nib: { x: 1020, y: 500, s: 0.88, mood: 'smug' } } })
    .shot(at('brack') - 0.05, { set: 'room', cast: { quotey: { x: 220, y: 490, s: 0.98, mood: 'happy' }, nib: { x: 1010, y: 500, s: 0.88, mood: 'smug' } } })
    .shot(at('stars') - 0.05, { conf: 'mei', cast: { mei: { x: 330, y: 430, s: 1.3, mood: 'happy', phone: 1 } } });

  d.lower('kevin', at('colon') + 0.1, 2.8);

  d.pop(cPeel, at('peel') + 0.06, end('longest') + 0.2, 600, 175);
  d.pop(qJul, at('jmb') + 0.05, end('longest') + 0.2, 600, 385);
  ssu.forEach((g, i) => d.pop(g, mid('snip', 0.2) + i * 0.45, end('how') + 0.22, 600, 180 + i * 98));
  d.pop(cWoven, at('weave') + 0.06, end('happy') + 0.22, 600, 250);
  d.pop(cColon, at('colon') + 0.08, end('colon') + 0.22, 600, 255);
  d.pop(cTools, at('tools') + 0.08, end('brack') + 0.25, 600, 255);

  return t => {
    d.upd(t);
    qJul.mark(-1, P(t, mid('jmb', 0.45), 0.45));
    const rv = win(t, at('stars'), S.D + 1, 0.25);
    rating.set(1 + P(t, mid('stars', 0.2), 0.5, linear), rv); tr(rating, 920, 250);
  };
});
