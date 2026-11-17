/* Scene 6: Alone on stage (dramatic devices & Mei's PEEL ladder). School hall: Drama Club -> soliloquy ("To be") ->
   Mei's confessional ("soliloquy with worse lighting") -> aside ("more than kin") + Mr H hears Mei's tea aside ->
   monologue ("All the world's a stage" = NOT A SOLILOQUY) -> dramatic irony (Juliet asleep in tomb) ->
   foreshadowing (Prologue) -> S A M S D F P C mnemonic -> paraphrase first -> Jaques's "bubble reputation" &
   Mei's 4-rung PEEL ladder -> Mr H's rare happy sigh. */
scene('devices', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  let spotOn = 0;
  const hall = d.add('hall', engHall(d.bg), (t, g) => { g.upd(t); g.curtain(1); g.spot(spotOn, 360); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib');

  const cClub = pill('Friday · Drama Club (nobody asked Will)', { stroke: ENG.violet });

  /* soliloquy, confessional gag, aside, monologue */
  const tSol = engTech(d.fg, 'SOLILOQUY', { kind: 'drama', def: 'alone on stage, speaking private thoughts aloud', size: 40 });
  const qTobe = engQuote(d.fg, { text: 'To be, or not to be, that is the question:', who: 'Hamlet', where: 'Hamlet, Act 3 Scene 1', w: 680, size: 38 });
  const cWorse = pill('= SOLILOQUY (with worse lighting)', { size: 32, stroke: ENG.rose, color: '#FFD0DC' });

  const tAside = engTech(d.fg, 'ASIDE', { kind: 'drama', def: 'short remark to the audience; others on stage do not hear', size: 40 });
  const qKin = engQuote(d.fg, { text: 'A little more than kin, and less than kind!', who: 'Hamlet', where: 'Hamlet, Act 1 Scene 2', w: 700, size: 38, hl: ['kin', 'kind'] });
  const bTea = engBubble(d.fg, '(Aside) Five cups of tea today...', { size: 30, tail: 'down' });
  const bHeard = engBubble(d.fg, 'I HEARD THAT.', { size: 34, tail: 'down' });

  const tMono = engTech(d.fg, 'MONOLOGUE', { kind: 'drama', def: 'long speech addressed to characters listening on stage', size: 38 });
  const qStage = engQuote(d.fg, { text: "All the world's a stage, / And all the men and women merely players;", who: 'Jaques (to Duke Senior & lords)', where: 'As You Like It, Act 2 Scene 7', w: 740, size: 34 });
  const stNotSol = engStamp(d.fg, 'NOT A SOLILOQUY', '#C62828');

  /* dramatic irony: Capulet tomb vignette */
  const tIrony = engTech(d.fg, 'DRAMATIC IRONY', { kind: 'drama', def: 'the audience knows something a character does not', size: 38 });
  const tomb = G(d.fg);
  E('rect', { x: -340, y: -120, width: 680, height: 240, rx: 22, fill: '#161A2C', stroke: '#7C8894', 'stroke-width': 4 }, tomb);
  E('rect', { x: -220, y: 20, width: 320, height: 64, rx: 8, fill: '#8C96A4', stroke: SC_INK, 'stroke-width': 3 }, tomb);
  // sleeping Juliet silhouette + Zzz + potion bottle
  E('ellipse', { cx: -160, cy: 4, rx: 24, ry: 20, fill: '#F1C7A8', stroke: SC_INK, 'stroke-width': 3 }, tomb);
  E('path', { d: 'M-136,4 L60,12 L60,24 L-136,24 Z', fill: '#F06A8A', stroke: SC_INK, 'stroke-width': 3 }, tomb);
  const zzz = T(tomb, -90, -34, 'z  z  z', { size: 32, weight: 800, fill: '#8FD3FF' });
  const vial = G(tomb); tr(vial, 200, 10);
  E('path', { d: 'M-14,-44 L14,-44 L14,-24 L32,16 Q34,36 16,36 L-16,36 Q-34,36 -32,16 L-14,-24 Z', fill: '#B58CFF', stroke: '#FFFFFF', 'stroke-width': 3 }, vial);
  T(tomb, 200, 78, '42-hr potion', { size: 24, weight: 700, anchor: 'middle', fill: '#E6D6FF', font: FB });
  T(tomb, -60, -74, 'WE KNOW: she is only asleep!', { size: 28, weight: 800, anchor: 'middle', fill: ENG.gold });
  const bAsleep = engBubble(d.fg, "Romeo, NO! She's ASLEEP!", { size: 34, tail: 'down' });

  /* foreshadowing */
  const qPro = engQuote(d.fg, { text: "A pair of star-cross'd lovers take their life;", who: 'Chorus', where: 'Romeo and Juliet, Prologue', w: 720, size: 38, hl: ["star-cross'd"] });
  const tFore = engTech(d.fg, 'FORESHADOWING', { kind: 'structure', def: 'clues or warnings early on about what will happen later', size: 36 });
  const cHow = pill('We watch HOW it happens, not WHAT', { size: 30, stroke: '#5AB4E0', color: '#BDE7FF' });

  /* S A M S D F P C mnemonic grid */
  const mnem = G(d.fg);
  E('rect', { x: -510, y: -195, width: 1020, height: 390, rx: 24, fill: 'rgba(14,24,40,0.95)', stroke: ENG.gold, 'stroke-width': 4 }, mnem);
  T(mnem, 0, -142, 'SOME ACTORS MUMBLE; SOME DIRECTORS FEAR PUN CONTESTS', { size: 26, weight: 800, anchor: 'middle', fill: ENG.gold, ls: 1 });
  const DEV8 = [
    ['S', 'Soliloquy'], ['A', 'Aside'], ['M', 'Monologue'], ['S', 'Stage directions'],
    ['D', 'Dramatic irony'], ['F', 'Foreshadowing'], ['P', 'Pun'], ['C', 'Comic relief'],
  ];
  const devItems = DEV8.map(([L, word], i) => {
    const g = G(mnem), cx = -360 + (i % 4) * 240, cy = -44 + Math.floor(i / 4) * 140;
    tr(g, cx, cy);
    E('rect', { x: -108, y: -50, width: 216, height: 100, rx: 16, fill: 'rgba(255,255,255,0.08)', stroke: i < 4 ? '#FF9F43' : '#5AB4E0', 'stroke-width': 3 }, g);
    T(g, 0, -4, L, { size: 42, weight: 800, anchor: 'middle', fill: ENG.rose });
    T(g, 0, 34, word, { size: 24, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
    return g;
  });

  /* extract strategy & Mei's PEEL ladder */
  const cSteps = engCard(d.fg, '1. **Paraphrase** in plain English first   →   2. **Analyse** what key words **do**', { w: 820, size: 32, stroke: ENG.gold });
  const qBub = engQuote(d.fg, { text: "Seeking the bubble reputation / Even in the cannon's mouth.", who: 'Jaques', where: 'As You Like It, Act 2 Scene 7', w: 720, size: 34, hl: ['bubble'] });
  const peel = engPeel(d.fg, [
    'Jaques **mocks** young soldiers who risk their lives chasing **fame**.',
    'He says a soldier goes "Seeking the **bubble** reputation / Even in the cannon\'s mouth."',
    'The metaphor "**bubble**" suggests glory looks **shiny**, but is **fragile** and **empty**.',
    'Ambition seems **hollow** — explaining what the metaphor **does**, not just naming it.',
  ], { w: 780, size: 24, title: "MEI'S PEEL PARAGRAPH" });
  const stAstar = engStamp(d.fg, 'TOP MARKS', '#1E9E5A');

  /* shots */
  d.shot(0, { set: 'hall', cast: { will: { x: 420, y: 400, s: 0.9, mood: 'happy', quill: 1 }, mrh: { x: 960, y: 470, s: 0.95, mood: 'deadpan', mug: 1 } } })
    .shot(at('soliloquy') - 0.05, { set: 'hall', cast: { will: { x: 360, y: 410, s: 0.95, mood: 'sad', glow: 0.7 }, mrh: { x: 1060, y: 540, s: 0.75, mood: 'neutral' } } })
    .shot(at('camera') - 0.05, { conf: 'mei', cast: { mei: { x: 310, y: 430, s: 1.35, mood: 'neutral' } } })
    .shot(at('worse') - 0.05, { conf: 'mei', cast: { mei: { x: 280, y: 440, s: 1.25, mood: 'annoyed' }, will: { x: 880, y: 420, s: 1.05, mood: 'smug' } } })
    .shot(at('aside') - 0.05, { set: 'hall', cast: { mrh: { x: 200, y: 470, s: 0.95, mood: 'neutral' }, will: { x: 1040, y: 430, s: 0.82, mood: 'smug' } } })
    .shot(at('tea') - 0.05, { set: 'hall', cast: { mei: { x: 340, y: 510, s: 1.15, mood: 'smug', look: 0 }, mrh: { x: 880, y: 460, s: 0.95, mood: 'deadpan', mug: 1 } } })
    .shot(at('mono') - 0.05, { set: 'hall', cast: { mrh: { x: 180, y: 480, s: 0.9, mood: 'neutral' }, will: { x: 1070, y: 450, s: 0.78, mood: 'smug' } } })
    .shot(at('irony') - 0.05, { set: 'hall', cast: { nib: { x: 160, y: 480, s: 0.85, mood: 'smug' } } })
    .shot(at('asleep') - 0.05, { set: 'hall', cast: { mei: { x: 600, y: 520, s: 1.2, mood: 'shock', hand: 1 } } })
    .shot(at('prologue') - 0.05, { set: 'hall', cast: { will: { x: 180, y: 430, s: 0.85, mood: 'smug' }, nib: { x: 1070, y: 500, s: 0.78, mood: 'smug' } } })
    .shot(at('mnemonic') - 0.05, { set: 'hall', cast: { nib: { x: 1120, y: 600, s: 0.6, mood: 'smug' } } })
    .shot(at('extract') - 0.05, { set: 'hall', cast: { mrh: { x: 200, y: 480, s: 0.95, mood: 'neutral' }, mei: { x: 1020, y: 520, s: 0.9, mood: 'neutral' } } })
    .shot(at('point') - 0.05, { set: 'hall', cast: { mei: { x: 170, y: 520, s: 0.92, mood: 'happy' } } })
    .shot(at('sigh') - 0.05, { set: 'hall', cam: [1, 1.08, 480, 460], cast: { mrh: { x: 420, y: 470, s: 1.15, mood: 'happy', mug: 1 }, mei: { x: 860, y: 500, s: 1.05, mood: 'happy' } } });

  d.mood('mrh', at('heard'), 'annoyed').look('mrh', at('heard'), -1).look('mrh', at('mono'), null);
  d.mood('mei', at('heard'), 'shock').mood('mei', at('rules'), 'annoyed');

  /* pop cues */
  d.pop(cClub, at('hall') + 0.1, end('hall') + 0.2, 600, 130);
  d.pop(tSol, mid('soliloquy', 0.2), end('honest') + 0.2, 760, 210);
  d.pop(qTobe, at('honest') + 0.05, end('honest') + 0.25, 760, 420);
  d.pop(cWorse, mid('worse', 0.25), end('worse') + 0.25, 620, 170);

  d.pop(tAside, mid('aside', 0.15), end('kin') + 0.2, 640, 200);
  d.pop(qKin, mid('kin', 0.25), end('kin') + 0.25, 640, 420);
  d.pop(bTea, at('tea') + 0.05, end('tea') + 0.15, 360, 270);
  d.pop(bHeard, at('heard') + 0.02, end('rules') + 0.2, 860, 240);

  d.pop(tMono, mid('mono', 0.12), end('mono') + 0.25, 620, 180);
  d.pop(qStage, mid('mono', 0.42), end('mono') + 0.25, 620, 380);
  d.pop(stNotSol, mid('mono', 0.72), end('mono') + 0.3, 620, 560, 0.82);

  d.pop(tIrony, at('irony') + 0.08, end('tomb') + 0.2, 640, 175);
  d.pop(tomb, at('tomb') + 0.05, end('tomb') + 0.2, 660, 430);
  d.pop(bAsleep, at('asleep') + 0.05, end('asleep') + 0.2, 600, 250);

  d.pop(qPro, mid('prologue', 0.25), end('fore') + 0.25, 620, 220);
  d.pop(tFore, at('fore') + 0.05, end('fore') + 0.25, 620, 430);
  d.pop(cHow, mid('fore', 0.45), end('fore') + 0.25, 620, 585);

  d.pop(mnem, at('mnemonic') + 0.05, end('mnemonic') + 0.3, 560, 360);

  d.pop(cSteps, mid('extract', 0.15), end('extract') + 0.2, 620, 230);
  d.pop(qBub, at('bubble') + 0.05, end('bubble') + 0.2, 620, 430);
  d.pop(stAstar, mid('sigh', 0.35), end('sigh') + 0.4, 640, 220, 0.85);

  return t => {
    d.upd(t);
    spotOn = win(t, at('soliloquy'), end('honest') + 0.2, 0.25);
    qKin.mark(-1, P(t, mid('kin', 0.55), 0.4));
    qPro.mark(0, P(t, mid('prologue', 0.55), 0.4));
    qBub.mark(0, P(t, mid('bubble', 0.45), 0.4));
    tr(zzz, 0, Math.sin(t * 3) * 6);

    if (t >= at('mnemonic') && t <= end('mnemonic') + 0.3) {
      devItems.forEach((it, i) => op(it, P(t, mid('mnemonic', 0.12 + i * 0.09), 0.25, linear)));
    }

    const pv = engOut(peel, t, at('point') - 0.05, end('link') + 0.35, 740, 95, 1);
    if (pv) {
      const rungs = 2 * P(t, at('point'), 0.6, easeOut) +
        P(t, at('explain'), 0.55, easeOut) +
        P(t, at('link'), 0.55, easeOut);
      peel.set(rungs);
    }
  };
});
