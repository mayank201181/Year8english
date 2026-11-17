/* Scene 3: Keep your claims light (Formal register, impersonal constructions, hedging, discourse markers & Kevin's '; however,' rescue!). */
scene('tone', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.amber, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.who('mei'); d.who('mrh'); d.who('nib'); d.who('kevin'); d.who('onehand'); d.who('otherhand');

  const regC = engCard(d.fg, '**FORMAL REGISTER**: no slang ("loads of"), no contractions, no loaded insults ("ridiculous")!', { w: 780, size: 26, stroke: ENG.amber });
  const impC = engCard(d.fg, '**IMPERSONAL + REPORTING VERBS**\n"It could be argued that..." · "It has been suggested..." · suggest / insist / concede', { w: 780, size: 26, stroke: '#5AB4E0' });
  const hedC = engCard(d.fg, '**HEDGING LADDER**: "**Could, may, might: keep your claims light**"\nQualifiers: *some · many · often* (accurate & harder to knock down!)', { w: 780, size: 26, stroke: '#56D69B' });
  const mrkC = engCard(d.fg, '**DISCOURSE MARKERS**\nAdd: **furthermore** | Contrast: **conversely** | Despite: **nevertheless** | Result: **consequently**', { w: 790, size: 25, stroke: ENG.gold });
  const splBad = engCard(d.fg, '"Phones can distract pupils**, however,** they help with research."', { w: 720, size: 28, tab: 'COMMA SPLICE!', icon: 'cross', stroke: C.bad });
  const splGood = engCard(d.fg, '"Phones can distract pupils**; however,** they help with research."', { w: 720, size: 28, tab: '; HOWEVER,', tabCol: '#1E8A55', icon: 'tick', stroke: C.good });

  d.shot(0, { set: 'room', cast: { nib: { x: 200, y: 490, s: 0.92, mood: 'smug' }, mei: { x: 1000, y: 510, s: 0.96, mood: 'neutral' } } })
    .shot(at('imp') - 0.05, { set: 'room', cast: { onehand: { x: 190, y: 500, s: 0.94, mood: 'happy' }, otherhand: { x: 1010, y: 500, s: 0.94, mood: 'smug' } } })
    .shot(at('hedge') - 0.05, { set: 'room', cast: { mrh: { x: 190, y: 500, s: 0.96, mood: 'neutral', mug: 1 }, mei: { x: 1010, y: 510, s: 0.96, mood: 'happy' } } })
    .shot(at('mark') - 0.05, { set: 'room', cast: { nib: { x: 200, y: 490, s: 0.92, mood: 'smug' } } })
    .shot(at('splice') - 0.05, { set: 'room', cast: { mei: { x: 220, y: 510, s: 0.98, mood: 'smug' }, kevin: { x: 960, y: 500, s: 0.95, mood: 'shock', bag: 1, sweat: 1 } } })
    .shot(at('semi') - 0.05, { set: 'room', cast: { mrh: { x: 210, y: 500, s: 0.98, mood: 'neutral' }, kevin: { x: 960, y: 500, s: 0.95, mood: 'happy' } } });

  d.lower('kevin', at('panic') + 0.05, 2.8);
  d.shake(at('panic'), 10);

  d.pop(regC, at('reg') + 0.08, end('reg') + 0.18, 600, 260);
  d.pop(impC, at('imp') + 0.08, end('verbs') + 0.18, 600, 260);
  d.pop(hedC, at('hedge') + 0.08, end('qual') + 0.18, 600, 260);
  d.pop(mrkC, at('mark') + 0.08, end('mark') + 0.18, 600, 260);
  d.pop(splBad, at('splice') + 0.08, end('panic') + 0.15, 600, 265);
  d.pop(splGood, at('semi') + 0.08, end('saved') + 0.25, 600, 265);

  return t => { d.upd(t); };
});
