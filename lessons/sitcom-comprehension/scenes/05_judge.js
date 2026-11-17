/* Scene 5: Non-fiction, summary and evaluation (showpiece: the weighing scale + PEEL ladder on Scott's journal).
   Check it or Challenge it (1977 river clean-up vs "best news" / "awful place") -> Summary rules ->
   "How far do you agree?" scale + full engPeel ladder -> Question 4 cries happy tears! */
scene('judge', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.94)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), qm = d.who('qmark'), shl = d.who('sherlock');

  const fapv = ['FORM', 'AUDIENCE', 'PURPOSE', 'VIEWPOINT'].map((s, i) => pill(s, { size: 30, stroke: ['#5AB4E0', '#56D69B', '#FFB547', '#F06A8A'][i] }));
  const cFact = engCard(d.fg, '**CHECK IT → FACT**\n"In **1977** the Singapore River clean-up began."', { w: 680, size: 29, stroke: C.good, icon: 'tick' });
  const cOp = engCard(d.fg, '**CHALLENGE IT → OPINION**\n"the **best news** in years" · "an **awful** place"', { w: 680, size: 29, stroke: '#FF9F43' });
  const cSum = engCard(d.fg, '**SUMMARY RULES:**\nSelect · Condense · **Own words** · 1 point per mark\n✗ NO quotations · ✗ NO language analysis', { w: 760, size: 28, tab: 'SUMMARY', tabCol: '#6A3AB8', stroke: '#B58CFF' });

  const scale = cmpScale(d.fg);
  const cGift = pill('"HOW FAR do you agree?" → agree PARTLY ("I largely agree, although...")', { size: 26, stroke: ENG.gold, color: '#FFE6A8' });

  const peel = engPeel(d.fg, [
    'I **largely agree**: shaped for future readers, despite its diary form.',
    'Counter-view: gale notes & "**two cups of tea**" are practical log entries.',
    '**However**, "Should this be found" & "**English gentleman**" address a public audience.',
    'Knowing "**our dead bodies must tell the tale**", Scott writes public testimony.',
  ], { w: 800, size: 24, title: 'EVALUATION LADDER — SCOTT\'S JOURNAL' });
  const stFull = engStamp(d.fg, 'FULL MARKS!', '#1E9E5A');

  d.shot(0, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.0, mood: 'neutral', mug: 1 }, mei: { x: 1000, y: 510, s: 0.95, mood: 'neutral' } } })
    .shot(at('check') - 0.05, { set: 'room', cast: { sherlock: { x: 160, y: 510, s: 0.88, mood: 'smug' }, mei: { x: 1030, y: 520, s: 0.9, mood: 'happy' } } })
    .shot(at('scott') - 0.05, { set: 'room', cast: { nib: { x: 180, y: 490, s: 0.88, mood: 'smug' }, qmark: { x: 1030, y: 500, s: 0.9, mood: 'neutral' } } })
    .shot(at('eval') - 0.05, { set: 'room', cast: { mrh: { x: 170, y: 500, s: 0.92, mood: 'neutral' }, qmark: { x: 1040, y: 500, s: 0.9, mood: 'happy' } } })
    .shot(at('p1') - 0.05, { set: 'room', cast: { mei: { x: 135, y: 585, s: 0.72, mood: 'happy' }, qmark: { x: 1080, y: 585, s: 0.68, mood: 'happy' } } })
    .shot(at('tears') - 0.05, { set: 'room', cast: { qmark: { x: 420, y: 470, s: 1.1, mood: 'happy', tears: 1 }, mei: { x: 840, y: 490, s: 1.05, mood: 'happy' } } });

  fapv.forEach((c, i) => d.pop(c, mid('nonfic', 0.25 + i * 0.16), end('nonfic') + 0.25, 360 + (i % 2) * 480, 230 + Math.floor(i / 2) * 100));
  d.pop(cFact, at('check') + 0.1, end('scott') + 0.2, 600, 210);
  d.pop(cOp, at('chal') + 0.1, end('scott') + 0.2, 600, 415);
  d.pop(cSum, at('sum') + 0.08, end('sum') + 0.25, 600, 290);
  d.pop(scale, at('eval') + 0.08, end('task') + 0.2, 600, 300);
  d.pop(cGift, mid('eval', 0.45), end('task') + 0.2, 600, 560);
  d.pop(stFull, mid('tears', 0.45), end('tears') + 0.3, 620, 200, 0.88);

  return t => {
    d.upd(t);
    scale.set(Math.sin(t * 2.5) * 8);
    const pv = win(t, at('p1') - 0.05, end('p4') + 0.25, 0.25);
    op(peel, pv);
    if (pv) {
      tr(peel, 600, 95);
      const n = P(t, at('p1'), 0.45) + P(t, at('p2'), 0.45) + P(t, at('p3'), 0.45) + P(t, at('p4'), 0.45);
      peel.set(n);
    }
  };
});
