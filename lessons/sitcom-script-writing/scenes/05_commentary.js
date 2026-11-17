/* Scene 5: Writing the reflective commentary (showpiece: CQTEL & the PEEL ladder on Mei's missing scene).
   Period 4 in 8H: Mei retells her plot -> Mr H crosses it out ("Tell me WHY") -> first person, purpose, audience,
   intended effect, links to Shakespeare -> Nib's CQTEL tag -> 4-rung engPeel ladder built rung by rung ->
   evaluation sentence -> Mr H's rare approval. */
scene('commentary', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib');

  const cBad = engCard(d.fg, '"In my scene, Juliet comes home and hides the potion..." → **PLOT SUMMARY!**', { w: 660, size: 29, icon: 'cross', stroke: C.bad, tab: 'NO MARKS' });
  const cFour = ['first person ("I chose...")', 'purpose & audience', 'intended effect', 'links to Shakespeare'].map(s => pill(s, { size: 27, stroke: '#5AB4E0' }));
  const tCqtel = engTech(d.fg, 'C · Q · T · E · L', { kind: 'structure', def: 'Choice · Quote self · Term · Effect · Link to Will' });

  const peel = engPeel(d.fg, [
    'I used **dramatic irony** to show the silent break in trust between Juliet and the Nurse.',
    'The Nurse says **"Your mother will weep"** while Juliet stands **"very still beneath the veil"**.',
    'Knowing about the potion turns wedding joy into **grief** and makes the veil look like a **shroud**.',
    'This **foreshadows** Act 4 Scene 5 and echoes Juliet\'s hidden sarcasm in **"Amen!"** (3.5).',
  ], { w: 790, size: 24, title: 'REFLECTIVE COMMENTARY (PEEL / CQTEL)' });

  const cEval = pill('+ brief evaluation: what you would sharpen in a redraft', { size: 28, stroke: C.good, color: '#C9F2D3' });
  const stTop = engStamp(d.fg, 'DELIBERATE CRAFT ✓', '#1E9E5A');

  d.shot(0, { set: 'room', cast: { mei: { x: 240, y: 500, s: 1.05, mood: 'happy' }, mrh: { x: 960, y: 490, s: 1.0, mood: 'deadpan', mug: 1 } } })
    .shot(at('what') - 0.05, { set: 'room', cast: { nib: { x: 190, y: 450, s: 0.95, mood: 'smug' } } })
    .shot(at('p_rung') - 0.05, { set: 'room', cast: { mei: { x: 170, y: 530, s: 0.92, mood: 'happy' } } })
    .shot(at('eval') - 0.05, { set: 'room', cast: { mrh: { x: 230, y: 480, s: 1.05, mood: 'neutral', mug: 1 }, mei: { x: 940, y: 500, s: 1.0, mood: 'happy' } } });

  d.mood('mei', at('sigh'), 'sad').mood('mrh', at('good'), 'happy');

  d.pop(cBad, mid('p4', 0.35), end('sigh') + 0.2, 610, 260);
  cFour.forEach((c, i) => d.pop(c, mid('what', 0.2 + i * 0.17), end('what') + 0.2, 530 + (i % 2) * 340, 250 + Math.floor(i / 2) * 86));
  d.pop(tCqtel, at('cqtel') + 0.08, end('cqtel') + 0.25, 700, 340);
  d.pop(cEval, at('eval') + 0.1, end('good') + 0.3, 600, 240);
  d.pop(stTop, mid('good', 0.3), end('good') + 0.3, 600, 420, 0.78);

  return t => {
    d.upd(t);
    const pv = engOut(peel, t, at('p_rung') - 0.05, at('eval') - 0.05, 730, 96, 1);
    if (pv) {
      const n = P(t, at('p_rung'), 0.45) + P(t, at('e_rung'), 0.45) + P(t, at('ex_rung'), 0.45) + P(t, at('l_rung'), 0.45);
      peel.set(n);
    }
  };
});
