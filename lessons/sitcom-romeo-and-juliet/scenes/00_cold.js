/* Ep 4, Scene 0: Cold open. Verona added to the Year 8 WhatsApp group chat -> Tybalt in all-caps ("I hate the word") ->
   Mercutio ("Prince of Cats") -> Romeo moping over Rosaline -> Juliet summarises their 4-day speedrun -> Mei gives
   1 star -> Will defends the Prologue spoiler -> Episode 4 title card. */
scene('cold', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(10); });
  d.add('ver', rjVerona(d.bg), (t, g) => g.upd(t, 0));
  const title = d.add('title', engTitle(d.bg, 'Episode 4: Two Households, One Group Chat'), (t, g) => g.set(clamp((t - at('title')) / 2.2), t));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will');
  const rom = d.who('romeo'), jul = d.who('juliet'), mer = d.who('mercutio'), tyb = d.who('tybalt');

  const cPing = pill('📱 94 unread messages · "YEAR 8 VERONA GROUP CHAT"', { stroke: '#56D69B', color: '#C9F2D3' });
  const qHate = engQuote(d.fg, { text: 'What, drawn and talk of peace? I hate the word / As I hate hell, all Montagues, and thee.', who: 'Tybalt', where: 'Romeo and Juliet, Act 1 Scene 1', w: 740, size: 35, hl: ['hate', 'hell'] });
  const cCats = pill('Mercutio’s nickname for Tybalt: "Prince of Cats"', { size: 28, stroke: '#B58CFF', color: '#E6D6FF' });
  const qMope = engQuote(d.fg, { text: 'O brawling love, O loving hate', who: 'Romeo (about Rosaline)', where: 'Romeo and Juliet, Act 1 Scene 1', w: 620, size: 40, hl: ['brawling', 'loving'] });

  const cDays = engCard(d.fg, '**Sunday:** meet at party · **Monday:** secretly marry · **Thursday dawn:** tomb!', { w: 760, size: 28, stroke: ENG.rose });
  const rev = engReview(d.fg, { stars: 1, text: 'Four days from "hi" to double funeral. Zero impulse control.', by: 'Mei, 12', w: 500 });
  const cPro = pill('c. 1595 · Ending revealed in the Prologue!', { stroke: ENG.gold });
  const rating = rjRating(d.fg);
  const blackout = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#000000' }, d.hud);

  d.shot(0, { set: 'room', cast: { mei: { x: 320, y: 500, s: 1.15, mood: 'shock', phone: 1 } } })
    .shot(at('hate') - 0.05, { set: 'ver', cast: { tybalt: { x: 240, y: 480, s: 1.0, mood: 'annoyed' }, mercutio: { x: 970, y: 480, s: 0.98, mood: 'smug' } } })
    .shot(at('mope') - 0.05, { set: 'ver', cast: { romeo: { x: 240, y: 490, s: 1.0, mood: 'sad' }, juliet: { x: 960, y: 490, s: 0.98, mood: 'deadpan' } } })
    .shot(at('spoiler') - 0.05, { set: 'room', cast: { mei: { x: 280, y: 500, s: 1.1, mood: 'shock', phone: 1 }, will: { x: 890, y: 410, s: 0.98, mood: 'smug', glow: 0.8 } } })
    .shot(at('title') - 0.05, { set: 'title', cast: {
      mei: { x: 140, y: 640, s: 0.38, mood: 'happy' }, mrh: { x: 280, y: 640, s: 0.38, mood: 'deadpan' },
      romeo: { x: 430, y: 640, s: 0.38, mood: 'happy' }, juliet: { x: 575, y: 640, s: 0.38, mood: 'happy' },
      mercutio: { x: 725, y: 640, s: 0.38, mood: 'smug' }, tybalt: { x: 870, y: 640, s: 0.38, mood: 'annoyed' },
      will: { x: 1020, y: 630, s: 0.35, mood: 'smug' } } });

  d.lower(['TYBALT', "Juliet's cousin. Types exclusively in ALL CAPS."], at('hate') + 0.1, 2.8);
  d.lower(['MERCUTIO', "Prince's kinsman. Neither house. Professional menace."], at('cats') + 0.1, 2.8);
  d.lower(['ROMEO', 'Montague son. Currently sad about Rosaline.'], at('mope') + 0.1, 2.8);
  d.lower(['JULIET', 'Capulet daughter, 13. The only one with a plan.'], at('fourdays') + 0.1, 2.8);

  d.pop(cPing, at('ping') + 0.08, end('ping') + 0.2, 650, 230);
  d.pop(qHate, at('hate') + 0.05, end('cats') + 0.2, 610, 225);
  d.pop(cCats, at('cats') + 0.08, end('cats') + 0.2, 610, 455);
  d.pop(qMope, mid('mope', 0.35), end('mope') + 0.2, 600, 230);
  d.pop(cDays, at('fourdays') + 0.08, end('fourdays') + 0.25, 600, 230);
  d.pop(rev, mid('spoiler', 0.3), end('spoiler') + 0.2, 585, 310);
  d.pop(cPro, at('chorus') + 0.08, end('chorus') + 0.25, 585, 220);

  return t => {
    d.upd(t);
    op(blackout, 1 - P(t, 0, 0.45, linear));
    qHate.mark(-1, P(t, mid('hate', 0.35), 0.4));
    qMope.mark(-1, P(t, mid('mope', 0.55), 0.4));
    const rv = win(t, mid('spoiler', 0.55), end('chorus') + 0.2, 0.25);
    rating.set(1, rv); tr(rating, 1030, 74);
  };
});
