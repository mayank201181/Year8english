/* Ep 4, Scene 3: Act 3 Scene 1 — the turning point! "Wisely and slow" & "violent delights" -> blazing heat pathetic
   fallacy -> Romeo refuses Tybalt (dramatic irony) -> Mercutio dies in prose ("a grave man", "A plague o' both your
   houses!") -> Romeo kills Tybalt ("O, I am fortune's fool!") -> comedy turns to tragedy. */
scene('turning', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('ver', rjVerona(d.bg), (t, g) => g.upd(t, 0));
  const heatOverlay = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#FF7A2F', opacity: 0 }, d.bg);

  const mrh = d.who('mrh'), nib = d.who('nib'), kev = d.who('kevin');
  const rom = d.who('romeo'), mer = d.who('mercutio'), tyb = d.who('tybalt');

  const qSlow = engQuote(d.fg, { text: 'Wisely and slow. They stumble that run fast.', who: 'Friar Laurence', where: 'Romeo and Juliet, Act 2 Scene 3', w: 720, size: 38, hl: ['slow', 'stumble'] });
  const qViol = engQuote(d.fg, { text: 'These violent delights have violent ends', who: 'Friar Laurence', where: 'Romeo and Juliet, Act 2 Scene 6', w: 700, size: 38, hl: ['violent'] });

  const tPath = engTech(d.fg, 'PATHETIC FALLACY (ACT 3 SCENE 1)', { kind: 'language', def: "weather reflects mood: 'these hot days, is the mad blood stirring'", size: 32 });
  const cIrony = engCard(d.fg, '**Dramatic irony:** WE know Romeo just married Tybalt’s cousin; **Mercutio** thinks Romeo is being cowardly!', { w: 780, size: 28, stroke: '#FF9F43' });

  const qGrave = engQuote(d.fg, { text: 'Ask for me tomorrow, and you shall find me a grave man.', who: 'Mercutio (in prose)', where: 'Romeo and Juliet, Act 3 Scene 1', w: 740, size: 36, hl: ['grave'] });
  const stPun = engStamp(d.fg, 'PUN: SERIOUS / DEAD', '#7A1E9E');
  const qPlague = engQuote(d.fg, { text: "A plague o' both your houses!", who: 'Mercutio (neither Montague nor Capulet)', where: 'Romeo and Juliet, Act 3 Scene 1', w: 700, size: 42, hl: ['plague', 'both'] });

  const qFool = engQuote(d.fg, { text: "O, I am fortune's fool!", who: 'Romeo', where: 'Romeo and Juliet, Act 3 Scene 1', w: 600, size: 44, hl: ["fortune's", 'fool'] });
  const cTurn = engCard(d.fg, '**ACT 3 SCENE 1 = THE TURNING POINT**\nComedy & hope die with Mercutio  →  Romeo **banished**  →  unstoppable **tragedy**', { w: 800, size: 28, stroke: C.bad, boldFill: C.bad });

  d.shot(0, { set: 'ver', cast: { kevin: { x: 210, y: 500, s: 0.85, mood: 'happy' }, mrh: { x: 1010, y: 490, s: 0.92, mood: 'neutral' } } })
    .shot(at('heat') - 0.05, { set: 'ver', cast: { nib: { x: 200, y: 490, s: 0.9, mood: 'smug' }, tybalt: { x: 1000, y: 490, s: 0.98, mood: 'annoyed', sweat: 1 } } })
    .shot(at('villain') - 0.05, { set: 'ver', cast: { tybalt: { x: 230, y: 490, s: 1.0, mood: 'annoyed' }, romeo: { x: 970, y: 490, s: 0.98, mood: 'happy' } } })
    .shot(at('grave') - 0.05, { set: 'ver', cast: { mercutio: { x: 240, y: 490, s: 1.0, mood: 'sad', sweat: 1 }, romeo: { x: 990, y: 490, s: 0.98, mood: 'shock' } } })
    .shot(at('fool') - 0.05, { set: 'ver', cast: { romeo: { x: 230, y: 490, s: 1.02, mood: 'sad', sweat: 1 }, mrh: { x: 1010, y: 490, s: 0.92, mood: 'deadpan' } } });

  d.mood('mercutio', at('plague'), 'annoyed');
  d.shake(at('grave') + 0.08, 9);
  d.shake(at('fool') + 0.1, 9);

  d.pop(qSlow, mid('slow', 0.35), end('slow') + 0.2, 610, 235);
  d.pop(qViol, mid('violent', 0.18), end('violent') + 0.2, 610, 235);
  d.pop(tPath, at('heat') + 0.08, end('heat') + 0.25, 600, 240);

  d.pop(cIrony, mid('refuse', 0.35), end('refuse') + 0.25, 600, 230);

  d.pop(qGrave, mid('grave', 0.35), end('grave') + 0.2, 615, 220);
  d.pop(stPun, mid('grave', 0.72), end('grave') + 0.2, 615, 430, 0.8);
  d.pop(qPlague, mid('plague', 0.35), end('plague') + 0.25, 615, 245);

  d.pop(qFool, mid('fool', 0.28), end('fool') + 0.25, 620, 235);
  d.pop(cTurn, at('shift') + 0.08, end('shift') + 0.3, 615, 265);

  return t => {
    d.upd(t);
    attr(heatOverlay, 'opacity', 0.16 * win(t, at('heat') - 0.1, end('fool'), 0.4));
    qSlow.mark(-1, P(t, mid('slow', 0.55), 0.4));
    qViol.mark(0, P(t, mid('violent', 0.35), 0.35));
    qGrave.mark(0, P(t, mid('grave', 0.7), 0.3));
    qPlague.mark(-1, P(t, mid('plague', 0.55), 0.4));
    qFool.mark(-1, P(t, mid('fool', 0.45), 0.35));
  };
});
