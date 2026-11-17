/* Scene 2: Titles, endings and the volta (Spot the shift: Rossetti's 'Remember', Yeats's 'Innisfree', Thomas's 'Adlestrop').
   Library: Before → Turn → After -> Petrarchan octave/sestet volta at 'Yet' -> Turn words & place shifts ('pavements grey') ->
   Openings ('Yes.'), Kevin's full-stop Caesura ('The steam hissed.'), and Enjambment across stanzas -> 3 stars! */
scene('volta', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('lib', engLibrary(d.bg), (t, g) => g.upd(t, 0.08));
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('kevin');

  const spineC = pill('Poem as a journey: BEFORE  →  VOLTA (TURN)  →  AFTER', { size: 28, stroke: ENG.gold });
  const tVol = engTech(d.fg, 'VOLTA', { kind: 'structure', def: 'the turning point / shift in a poem (Italian: "turn")' });
  const qRos = engQuote(d.fg, { text: 'Yet if you should forget me for a while... / Better by far you should forget and smile', who: 'Christina Rossetti', where: "'Remember' (1862), lines 9 & 13 — octave commands, sestet frees", w: 760, size: 34, hl: ['yet', 'forget', 'smile'] });
  const turnW = pill('Turn words: but · yet · still · now · however · tense/place shift', { size: 26, stroke: '#5AB4E0', color: '#D4EEFF' });
  const qYea = engQuote(d.fg, { text: 'While I stand on the roadway, or on the pavements grey, / I hear it in the deep heart\'s core.', who: 'W. B. Yeats', where: "'The Lake Isle of Innisfree' (1890), stanza 3", w: 760, size: 34, hl: ['pavements', 'grey', 'core'] });
  const qHis = engQuote(d.fg, { text: 'The steam hissed. Someone cleared his throat.', who: 'Edward Thomas', where: "'Adlestrop' (1917), stanza 2 — full-stop caesura", w: 720, size: 36, hl: ['hissed', 'throat'] });
  const tCae = engTech(d.fg, 'CAESURA', { kind: 'punct', def: 'mid-line pause isolating tiny sounds in stillness' });
  const rating = spaRating(d.fg);

  d.shot(0, { set: 'lib', cast: { mrh: { x: 220, y: 500, s: 1.0, mood: 'neutral' }, will: { x: 960, y: 420, s: 0.92, mood: 'smug', glow: 0.6, quill: 1 } } })
    .shot(at('octave') - 0.05, { set: 'lib', cast: { nib: { x: 180, y: 490, s: 0.88, mood: 'smug' }, mei: { x: 1030, y: 510, s: 0.9, mood: 'shock' } } })
    .shot(at('sestet') - 0.05, { set: 'lib', cast: { will: { x: 190, y: 430, s: 0.9, mood: 'happy', glow: 0.7 }, mei: { x: 1020, y: 510, s: 0.9, mood: 'happy' } } })
    .shot(at('signals') - 0.05, { set: 'lib', cast: { mrh: { x: 200, y: 500, s: 0.96, mood: 'neutral' }, nib: { x: 1010, y: 490, s: 0.88, mood: 'smug' } } })
    .shot(at('open') - 0.05, { set: 'lib', cast: { mrh: { x: 200, y: 500, s: 0.96, mood: 'neutral' }, kevin: { x: 1010, y: 510, s: 0.88, mood: 'happy' } } })
    .shot(at('enjamb') - 0.05, { set: 'lib', cast: { mei: { x: 320, y: 500, s: 1.08, mood: 'happy', phone: 1 }, will: { x: 900, y: 430, s: 0.92, mood: 'happy' } } });

  d.lower('kevin', at('caesura') + 0.05, 2.6);

  d.pop(spineC, at('journey') + 0.08, end('volta') + 0.15, 600, 220);
  d.pop(tVol, at('volta') + 0.1, end('volta') + 0.2, 600, 340);
  d.pop(qRos, at('octave') + 0.08, end('sestet') + 0.2, 600, 280);
  d.pop(turnW, at('signals') + 0.08, end('signals') + 0.2, 600, 250);
  d.pop(qYea, at('yeats') + 0.08, end('grey') + 0.2, 600, 290);
  d.pop(qHis, at('open') + 0.15, end('caesura') + 0.2, 600, 270);
  d.pop(tCae, at('caesura') + 0.1, end('caesura') + 0.2, 600, 500);

  return t => {
    d.upd(t);
    qRos.mark(0, P(t, at('yet'), 0.35));
    qRos.mark(1, P(t, mid('sestet', 0.4), 0.35));
    qRos.mark(2, P(t, mid('sestet', 0.6), 0.35));
    qYea.mark(-1, P(t, mid('grey', 0.3), 0.5));
    qHis.mark(-1, P(t, mid('caesura', 0.25), 0.45));
    rating.set(1 + 2 * P(t, mid('enjamb', 0.6), 0.5, linear), win(t, mid('enjamb', 0.5), S.D + 1, 0.2)); tr(rating, 1030, 74);
  };
});
