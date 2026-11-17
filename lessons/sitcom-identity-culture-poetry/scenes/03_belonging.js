/* Scene 3: Migration, place & two worlds. Library with Suitcase.
   Displacement vs Belonging -> Grace Nichols's Island Man ("the sound of the sea" / "emerald island" vs "Another London
   day" / "grey metallic" + drifting unpunctuated lines) & Hurricane Hits England ("the earth is the earth is the earth")
   -> Emma Lazarus's The New Colossus (1883 Statue of Liberty sonnet) -> Third culture kids & Where Are You From? (MRT gap). */
scene('belonging', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(20,14,42,0.94)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('lib', engLibrary(d.bg), (t, g) => g.upd(t, 0));
  const mei = d.who('mei'), nib = d.who('nib'), lexi = d.who('lexi'), suit = d.who('suitcase');

  const cDisp = engCard(d.fg, '• **Displacement** = feeling uprooted & out of place\n• **Belonging** = feeling accepted & at home', { w: 660, size: 30, stroke: ENG.violet, boldFill: '#FFE45C' });
  const cIsl = engCard(d.fg, 'Grace Nichols (*Island Man*):\n• Dream: **"the sound of the sea"** · **"emerald island"**\n• Waking: **"grey metallic"** traffic · **"Another London day"**\n• Unpunctuated drifting lines mirror waves & half-waking', { w: 710, size: 26, stroke: '#56D69B', boldFill: '#FFE45C' });
  const cHurr = pill('Hurricane Hits England: "the earth is the earth is the earth"', { size: 27, stroke: '#5AB4E0', color: '#BDE7FF' });
  const qLaz = engQuote(d.fg, { text: 'Give me your tired, your poor, / Your huddled masses yearning to breathe free,', who: 'Emma Lazarus', where: 'The New Colossus (1883, Statue of Liberty)', w: 720, size: 36, hl: ['huddled', 'free'] });
  const tTck = engTech(d.fg, 'THIRD CULTURE KID', { kind: 'context', def: "growing up outside your parents' home culture" });
  const qGap = engQuote(d.fg, { text: 'Maybe I am the gap — / the narrow space where the train stops / and the doors open both ways.', who: 'Speaker', where: 'Where Are You From? (Singapore MRT)', w: 720, size: 35, hl: ['gap', 'both'] });

  d.shot(0, { set: 'lib', cast: { suitcase: { x: 220, y: 490, s: 1.0, mood: 'neutral' } } })
    .shot(at('drift') - 0.05, { set: 'lib', cast: { nib: { x: 190, y: 470, s: 0.94, mood: 'smug' }, lexi: { x: 1030, y: 490, s: 0.88, mood: 'happy' } } })
    .shot(at('laz') - 0.05, { set: 'lib', cast: { suitcase: { x: 200, y: 490, s: 0.96, mood: 'happy' }, lexi: { x: 1030, y: 490, s: 0.88, mood: 'happy' } } })
    .shot(at('tck') - 0.05, { conf: 'mei', cast: { mei: { x: 300, y: 430, s: 1.28, mood: 'happy' } } });

  d.pop(cDisp, at('disp') + 0.08, end('disp') + 0.25, 730, 320);
  d.pop(cIsl, at('island') + 0.08, end('drift') + 0.2, 620, 300);
  d.pop(cHurr, at('hurr') + 0.08, end('hurr') + 0.25, 620, 320);
  d.pop(qLaz, at('laz') + 0.1, end('give') + 0.25, 620, 310);
  d.pop(tTck, at('tck') + 0.08, end('tck') + 0.2, 790, 330);
  d.pop(qGap, at('gapm') + 0.05, end('gapm') + 0.3, 790, 350);

  return t => {
    d.upd(t);
    qLaz.mark(-1, P(t, mid('give', 0.4), 0.45));
    qGap.mark(-1, P(t, mid('gapm', 0.55), 0.4));
  };
});
