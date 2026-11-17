/* Scene 5: Be your own critic (Writing the commentary + PEEL ladder).
   Room 8H: Commentary ≠ summary -> First person + 6 steps: I Invent Fresh Tunes, Rewrite, Evaluate ->
   Influences (Sujata Bhatt's 'it blossoms out of my mouth'), slashes ( / ) for line breaks, tentative phrasing ->
   Showpiece engPeel ladder on Mei's jade bangle stanza + honest evaluation! */
scene('commentary', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.who('mei'); d.who('mrh'); d.who('nib'); d.who('kevin');

  const badSum = engCard(d.fg, '"I used enjambment to make it flow."', { w: 580, size: 32, tab: 'VAGUE', icon: 'cross', stroke: C.bad });
  const mnemC = engCard(d.fg, '**I Invent Fresh Tunes, Rewrite, Evaluate**\n**I**ntentions · **I**nfluences · **F**orm · **T**echniques · **R**ewrite · **E**valuate', { w: 780, size: 28, stroke: ENG.gold });
  const qBhatt = engQuote(d.fg, { text: 'it blossoms out of my mouth', who: 'Sujata Bhatt', where: "'Search for My Tongue' — named influence!", w: 680, size: 38, hl: ['blossoms'] });
  const cSlash = pill('Self-quote rule: use " / " for line breaks!', { size: 30, stroke: '#B58CFF', color: '#EADBFF' });
  const cTent = pill('Tentative phrasing: "I hoped this might suggest..."', { size: 28, stroke: '#5AB4E0', color: '#D4EEFF' });

  const peel = engPeel(d.fg, [
    'I used **sound imagery** in stanza one to capture unspoken generational worry.',
    '"my grandmother\'s jade bangle / **tapping** the table like a **question** / she never quite asks"',
    'Onomatopoeia in **"tapping"** and enjambment after **"question"** let the reader sense her fear I am losing Hokkien.',
    '**Evaluate**: stanza three is looser, so in another draft I would cut the flip-flops line.',
  ], { w: 780, size: 24, title: 'COMMENTARY PEEL + EVALUATE' });
  const stTop = engStamp(d.fg, 'TOP BAND', '#1E8A55');

  d.shot(0, { set: 'room', cast: { mei: { x: 270, y: 510, s: 1.05, mood: 'neutral' }, nib: { x: 940, y: 470, s: 0.95, mood: 'shock', ink: 1 } } })
    .shot(at('mnem') - 0.05, { set: 'room', cast: { mrh: { x: 190, y: 500, s: 0.98, mood: 'neutral', mug: 1 }, mei: { x: 1030, y: 510, s: 0.9, mood: 'happy' } } })
    .shot(at('slash') - 0.05, { set: 'room', cast: { kevin: { x: 250, y: 510, s: 0.88, mood: 'happy' }, nib: { x: 960, y: 480, s: 0.9, mood: 'smug' } } })
    .shot(at('p') - 0.05, { set: 'room', cast: { mei: { x: 120, y: 590, s: 0.68, mood: 'happy' }, mrh: { x: 1090, y: 580, s: 0.68, mood: 'neutral' } } })
    .shot(at('top') - 0.05, { set: 'room', cast: { mei: { x: 300, y: 510, s: 1.08, mood: 'happy' }, mrh: { x: 880, y: 490, s: 1.05, mood: 'happy', mug: 1 } } });

  d.pop(badSum, at('sum') + 0.1, end('ink2') + 0.15, 610, 270);
  d.pop(mnemC, at('mnem') + 0.08, end('mnem') + 0.2, 600, 270);
  d.pop(qBhatt, at('inf') + 0.08, end('inf') + 0.2, 600, 280);
  d.pop(cSlash, at('slash') + 0.08, end('tent') + 0.15, 600, 250);
  d.pop(cTent, at('tent') + 0.08, end('tent') + 0.2, 600, 350);
  d.pop(stTop, at('top') + 0.2, end('top') + 0.3, 600, 330, 0.95);

  return t => {
    d.upd(t);
    qBhatt.mark(0, P(t, mid('inf', 0.45), 0.4));
    const pv = engOut(peel, t, at('p') - 0.05, at('top') - 0.1, 600, 95, 0.95);
    if (pv) {
      const n = P(t, at('p'), 0.45) + P(t, at('e'), 0.45) + P(t, at('ex'), 0.45) + P(t, at('l'), 0.45);
      peel.set(n);
    }
  };
});
