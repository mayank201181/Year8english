/* Scene 5: Across the whole novel (Subject vs Theme, Motif vs Symbol, Context + Purpose, Then/Turn/The End + engPeel ladder). */
scene('themes', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.who('mei'); d.who('mrh'); d.who('nib'); d.who('omni');

  const thC = engCard(d.fg, '**SUBJECT** = "loneliness" (one word)\n**THEME** = "Burnett suggests being needed cures loneliness" (an idea!)', { w: 770, size: 27, stroke: ENG.amber });
  const msC = engCard(d.fg, '**MOTIF**: recurring image/idea (cold & fire across *A Christmas Carol*)\n**SYMBOL**: concrete standing for abstract (locked garden = neglect/healing)', { w: 780, size: 26, stroke: '#5AB4E0' });
  const ctxC = engCard(d.fg, '**CONTEXT + PURPOSE**: 1843 "Hungry Forties" & workhouses →\nDickens exposes harsh Victorian attitudes to persuade readers to give!', { w: 780, size: 26, stroke: '#56D69B' });
  const tttC = engCard(d.fg, '**WHOLE-NOVEL TRACKER: THEN · TURN · THE END**\n1 quote from the **Beginning** · 1 from the **Turning point** · 1 from the **End**', { w: 780, size: 26, stroke: ENG.gold });

  const peel = engPeel(d.fg, [
    '**Dickens presents** Scrooge as so cold-hearted his greed has become physical.',
    '"The **cold within him** froze his old features, **nipped** his pointed nose, **shrivelled** his cheek"',
    'The **extended metaphor** of cold and verbs **"nipped"** / **"shrivelled"** imply greed attacks Scrooge himself.',
    'Describing coldness like weather prepares his **Stave Five thaw**, proving anyone can choose generosity.',
  ], { w: 790, size: 24, title: 'WHOLE-NOVEL PEEL ON DICKENS' });
  const stSpl = engStamp(d.fg, 'SPLENDID!', '#1E8A55');

  d.shot(0, { set: 'room', cast: { mrh: { x: 190, y: 500, s: 0.98, mood: 'neutral', mug: 1 }, nib: { x: 1020, y: 490, s: 0.88, mood: 'smug' } } })
    .shot(at('ctx') - 0.05, { set: 'room', cast: { mrh: { x: 190, y: 500, s: 0.98, mood: 'neutral' }, omni: { x: 1010, y: 310, s: 0.88, mood: 'happy' } } })
    .shot(at('p') - 0.05, { set: 'room', cast: { mei: { x: 115, y: 590, s: 0.68, mood: 'happy' }, mrh: { x: 1090, y: 580, s: 0.68, mood: 'neutral' } } })
    .shot(at('sigh') - 0.05, { set: 'room', cast: { mei: { x: 300, y: 510, s: 1.08, mood: 'happy' }, mrh: { x: 880, y: 500, s: 1.04, mood: 'happy', mug: 1 } } });

  d.pop(thC, at('theme') + 0.08, end('theme') + 0.18, 600, 265);
  d.pop(msC, at('motsym') + 0.08, end('motsym') + 0.18, 600, 265);
  d.pop(ctxC, at('ctx') + 0.08, end('ctx') + 0.18, 600, 265);
  d.pop(tttC, at('ttt') + 0.08, end('ttt') + 0.18, 600, 265);
  d.pop(stSpl, at('sigh') + 0.15, end('sigh') + 0.25, 600, 320, 0.95);

  return t => {
    d.upd(t);
    const pv = engOut(peel, t, at('p') - 0.05, at('sigh') - 0.1, 600, 95, 0.95);
    if (pv) {
      const n = P(t, at('p'), 0.45) + P(t, at('e'), 0.45) + P(t, at('ex'), 0.45) + P(t, at('l'), 0.45);
      peel.set(n);
    }
  };
});
