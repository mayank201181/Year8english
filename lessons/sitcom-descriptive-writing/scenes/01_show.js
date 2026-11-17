/* Scene 1: Show, don't tell — and use all five senses. At dscRainStreet (hawker centre at dusk).
   Tell vs Show (stools & chicken-rice queue; old man's coins; short plain statement after showing) ->
   Some Hungry Sharks Taste Toes -> cutting "I could see / hear" -> onomatopoeia, smell & memory, synaesthesia. */
scene('show', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.94)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('street', dscRainStreet(d.bg), (t, g) => g.upd(t, 0.35));
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), cam = d.who('cam');

  const cTell = engCard(d.fg, '**TELL:** "The hawker centre was **busy**."', { w: 680, size: 30, stroke: C.bad, icon: 'cross' });
  const cShow = engCard(d.fg, '**SHOW:** "Every plastic stool was taken, and the chicken-rice queue coiled past the drinks stall."', { w: 760, size: 28, stroke: C.good, icon: 'tick' });
  const cCoin = engCard(d.fg, 'Not "he was **poor**" → "He counted his coins twice, then put the smallest one back."', { w: 760, size: 28, stroke: ENG.gold });
  const cAfter = pill('Show the evidence FIRST → then a short plain line hits hard!', { size: 27, stroke: ENG.sky });

  const cMnem = engCard(d.fg, '**S**ome **H**ungry **S**harks **T**aste **T**oes\nSight · Hearing · Smell · Taste · Touch', { w: 740, size: 30, tab: '5 SENSES', tabCol: '#1E6E9E', stroke: ENG.sky });
  const cBad = engCard(d.fg, '"**I could see** smoke. **I could hear** a wok. **I could smell**..."', { w: 720, size: 29, stroke: C.bad, icon: 'cross', tab: 'CHECKLIST TRAP' });
  const tOnom = engTech(d.fg, 'ONOMATOPOEIA', { kind: 'language', def: 'words that imitate sounds: clang, sizzle, hiss' });
  const cSmell = pill('Smell → memory: charcoal smoke · wet earth · kaya toast', { size: 27, stroke: '#FFB547' });
  const tSyn = engTech(d.fg, 'SYNAESTHESIA', { kind: 'language', def: 'blending two senses: "the air tastes sweet"' });

  d.shot(0, { set: 'street', cast: { mrh: { x: 180, y: 520, s: 0.95, mood: 'neutral', mug: 1 }, cam: { x: 1020, y: 520, s: 0.92, mood: 'smug', zoom: 0.6 } } })
    .shot(at('stools') - 0.05, { set: 'street', cast: { mei: { x: 180, y: 530, s: 0.95, mood: 'happy' }, mrh: { x: 1030, y: 520, s: 0.92, mood: 'happy' } } })
    .shot(at('plain') - 0.05, { set: 'street', cast: { nib: { x: 180, y: 510, s: 0.9, mood: 'smug' }, cam: { x: 1020, y: 520, s: 0.92, mood: 'happy' } } })
    .shot(at('check') - 0.05, { set: 'street', cast: { mei: { x: 200, y: 530, s: 0.95, mood: 'happy' }, nib: { x: 1010, y: 500, s: 0.92, mood: 'shock', ink: 0.8 } } })
    .shot(at('onom') - 0.05, { set: 'street', cast: { mrh: { x: 170, y: 520, s: 0.92, mood: 'neutral' }, will: { x: 1030, y: 500, s: 0.85, mood: 'happy', glow: 0.4 } } })
    .shot(at('syn') - 0.05, { conf: 'nib', cast: { nib: { x: 310, y: 420, s: 1.22, mood: 'smug' } } });

  d.mood('mei', at('cut'), 'shock');

  d.pop(cTell, at('tell') + 0.08, end('stools') + 0.18, 600, 185);
  d.pop(cShow, at('stools') + 0.06, end('stools') + 0.22, 600, 345);
  d.pop(cCoin, at('coins') + 0.08, end('plain') + 0.2, 600, 225);
  d.pop(cAfter, at('plain') + 0.1, end('plain') + 0.25, 600, 385);
  d.pop(cMnem, at('senses') + 0.08, end('senses') + 0.25, 600, 240);
  d.pop(cBad, at('check') + 0.08, end('cut') + 0.22, 600, 245);
  d.pop(tOnom, at('onom') + 0.08, end('smell') + 0.2, 600, 215);
  d.pop(cSmell, at('smell') + 0.08, end('smell') + 0.25, 600, 385);
  d.pop(tSyn, at('syn') + 0.1, end('syn') + 0.3, 790, 330);

  return t => {
    d.upd(t);
  };
});
