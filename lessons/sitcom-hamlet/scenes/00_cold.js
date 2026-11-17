/* Ep 3, Scene 0: Cold open. Library SILENCE PLEASE sign updated ("this means you, Will") -> The Ghost of Old King
   Hamlet moves in (Will is jealous: "I played you in 1600!") -> Hamlet agonises over kopi vs iced Milo ("One star
   for speed") -> Polonius peeks out from behind the hall curtain -> Episode 3 title card. */
scene('cold', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  const lib = engLibrary(d.bg);
  // Running gag §5.7: extra note taped under SILENCE PLEASE
  const note = G(lib.sign); tr(note, 0, 50, 1, -2);
  E('rect', { x: -136, y: -20, width: 272, height: 40, rx: 6, fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 3 }, note);
  T(note, 0, 8, '(this means you, Will)', { size: 22, weight: 800, anchor: 'middle', fill: SC_INK, font: FB });
  d.add('lib', lib, (t, g) => g.upd(t, t < at('kopi') ? 0.65 : 0.1));

  const hall = d.add('hall', engHall(d.bg), (t, g) => { g.upd(t); g.curtain(0.45); });
  const title = d.add('title', engTitle(d.bg, 'Episode 3: To Be or Not to Be (Late)'), (t, g) => g.set(clamp((t - at('title')) / 2.2), t));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will');
  const ham = d.who('hamlet'), gho = d.who('ghost'), pol = d.who('polonius'), oph = d.who('ophelia');

  const cPlayed = pill('Globe fun fact: Will played the Ghost in 1600!', { size: 28, stroke: '#7FD3FF', color: '#E6F4FF' });
  const drinks = G(d.fg);
  E('rect', { x: -240, y: -74, width: 480, height: 148, rx: 20, fill: 'rgba(14,24,40,0.94)', stroke: ENG.gold, 'stroke-width': 3.5 }, drinks);
  T(drinks, -125, -8, 'KOPI O', { size: 34, weight: 800, anchor: 'middle', fill: '#FFB547' });
  T(drinks, 0, -4, 'OR', { size: 28, weight: 800, anchor: 'middle', fill: '#FFFFFF' });
  T(drinks, 125, -8, 'ICED MILO?', { size: 34, weight: 800, anchor: 'middle', fill: '#56D69B' });
  T(drinks, 0, 44, 'Elapsed thinking time: 20 minutes', { size: 24, weight: 700, anchor: 'middle', fill: C.muted, font: FB });

  const rev = engReview(d.fg, { stars: 1, text: 'Held up the canteen queue for twenty minutes debating hot vs cold.', by: 'Mei, 12', w: 500 });
  const cCurt = pill('WARNING: Never hide behind curtains in Act 3', { size: 28, stroke: C.bad, color: '#FFB3BA' });
  const rating = hamRating(d.fg);
  const blackout = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#000000' }, d.hud);

  d.shot(0, { set: 'lib', cast: { ghost: { x: 340, y: 400, s: 1.0, mood: 'annoyed' }, will: { x: 860, y: 400, s: 0.98, mood: 'shock', glow: 0.9 } } })
    .shot(at('kopi') - 0.05, { set: 'lib', cast: { hamlet: { x: 300, y: 490, s: 1.05, mood: 'sad' }, mei: { x: 920, y: 500, s: 1.0, mood: 'annoyed', phone: 1 } } })
    .shot(at('curtain') - 0.05, { set: 'hall', cast: { polonius: { x: 360, y: 460, s: 1.0, mood: 'smug' }, mrh: { x: 880, y: 480, s: 1.0, mood: 'deadpan', mug: 1 } } })
    .shot(at('title') - 0.05, { set: 'title', cast: {
      mei: { x: 140, y: 640, s: 0.38, mood: 'happy' }, mrh: { x: 280, y: 640, s: 0.38, mood: 'deadpan' },
      hamlet: { x: 430, y: 640, s: 0.38, mood: 'sad' }, ghost: { x: 580, y: 625, s: 0.36, mood: 'annoyed' },
      polonius: { x: 730, y: 640, s: 0.38, mood: 'smug' }, ophelia: { x: 875, y: 640, s: 0.38, mood: 'neutral' },
      will: { x: 1025, y: 630, s: 0.35, mood: 'annoyed' } } });

  d.lower(['THE GHOST', 'Spirit of Old King Hamlet. Likes dramatic fog.'], at('spirit') + 0.1, 3.0);
  d.lower(['HAMLET', 'Prince of Denmark. Overthinking since 1600.'], at('kopi') + 0.1, 3.0);
  d.lower(['POLONIUS', 'Chief counsellor. Professional curtain enthusiast.'], at('curtain') + 0.1, 3.0);
  d.mood('will', at('played'), 'annoyed');
  d.mood('polonius', at('mug'), 'shock');

  d.pop(cPlayed, mid('played', 0.45), end('played') + 0.25, 600, 175);
  d.pop(drinks, at('kopi') + 0.08, end('kopi') + 0.2, 620, 220);
  d.pop(rev, mid('queue', 0.3), end('queue') + 0.25, 620, 320);
  d.pop(cCurt, mid('mug', 0.25), end('mug') + 0.25, 620, 195);

  return t => {
    d.upd(t);
    op(blackout, 1 - P(t, 0, 0.45, linear));
    const rv = win(t, mid('queue', 0.55), end('mug') + 0.2, 0.25);
    rating.set(1, rv); tr(rating, 1030, 74);
  };
});
