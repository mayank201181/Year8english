/* Scene 4: Kill the thesaurus (Drafting & redrafting + Titles & endings).
   Mei's flat: Rex demands 'culinary cauldron vociferates' -> 6-step Redrafting Loop (Bishop's 17 drafts) ->
   Before/After Passport draft + Hawker Centre wok -> Titles & endings (never a moral summary; 'I try again. It holds this time.'). */
scene('drafts', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('flat', engFlat(d.bg), (t, g) => { g.upd(t); g.clock(20); });
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('rex'); d.who('cliche');

  const rexCard = engCard(d.fg, '"The culinary cauldron **vociferates**!"', { w: 620, size: 32, tab: 'THESAURUS REX', tabCol: '#1F8A5C', icon: 'cross', stroke: C.bad });
  const mythC = engCard(d.fg, '"Real poets write in one flash of pure inspiration!"', { w: 640, size: 29, tab: 'MYTH', icon: 'cross', stroke: C.bad });
  const loopC = engCard(d.fg, '**REDRAFTING LOOP** (Bishop: 17 drafts!)\n1 **Generate** → 2 **Shape** → 3 **Cut** → 4 **Sharpen** → 5 **Listen** → 6 **Rest**', { w: 760, size: 28, icon: 'tick', stroke: C.good });
  const befC = engCard(d.fg, '"I have two passports, I feel **confused**, / Two different countries, I am **bemused**."', { w: 720, size: 28, tab: 'DRAFT 1', tabCol: '#C62828', icon: 'cross', stroke: C.bad });
  const aftC = engCard(d.fg, '"two passports in a drawer, / one blue, one red, / the same boy in both / **trying hard not to blink**."', { w: 720, size: 28, tab: 'DRAFT 3', tabCol: '#1E8A55', icon: 'tick', stroke: C.good });
  const qWok = engQuote(d.fg, { text: "Uncle Lim's wok roars like a small jet.", who: 'Redrafted stanza', where: "'Hawker Centre' — concrete noun + onomatopoeia", w: 700, size: 38, hl: ['wok', 'roars'] });
  const cTit = pill('TITLE: label · add context · echo a phrase · name the form (never "Untitled"!)', { size: 24, stroke: ENG.gold });
  const badEnd = engCard(d.fg, '"And that is why we should all respect every culture!"', { w: 660, size: 29, tab: 'MORAL SUMMARY', icon: 'cross', stroke: C.bad });
  const qHold = engQuote(d.fg, { text: 'I try again. It holds this time.', who: 'Final stanza', where: "'Pantoum for My Grandmother's Kitchen'", w: 680, size: 40, hl: ['holds'] });

  d.shot(0, { set: 'flat', cast: { rex: { x: 260, y: 460, s: 1.08, mood: 'smug', chomp: 0.8 }, mei: { x: 930, y: 500, s: 1.02, mood: 'annoyed' } } })
    .shot(at('no') - 0.05, { set: 'flat', cast: { mrh: { x: 220, y: 490, s: 1.02, mood: 'deadpan', mug: 1 }, rex: { x: 960, y: 480, s: 0.92, mood: 'sad' } } })
    .shot(at('myth') - 0.05, { set: 'flat', cast: { mei: { x: 240, y: 510, s: 1.02, mood: 'neutral' }, nib: { x: 980, y: 480, s: 0.9, mood: 'smug' } } })
    .shot(at('before') - 0.05, { set: 'flat', cast: { mei: { x: 170, y: 540, s: 0.85, mood: 'annoyed' }, mrh: { x: 1050, y: 530, s: 0.82, mood: 'neutral' } } })
    .shot(at('hawker') - 0.05, { set: 'flat', cast: { will: { x: 210, y: 440, s: 0.92, mood: 'happy', glow: 0.6 }, nib: { x: 1010, y: 480, s: 0.86, mood: 'smug' } } })
    .shot(at('moral') - 0.05, { set: 'flat', cast: { cliche: { x: 240, y: 450, s: 0.96, mood: 'happy' }, mrh: { x: 980, y: 490, s: 0.96, mood: 'deadpan' } } })
    .shot(at('holds') - 0.05, { set: 'flat', cast: { mei: { x: 210, y: 510, s: 1.0, mood: 'happy' }, mrh: { x: 1000, y: 500, s: 0.95, mood: 'happy', mug: 1 } } });

  d.mood('mei', at('after'), 'happy').mood('cliche', at('ending'), 'sad');

  d.pop(rexCard, at('rex2') + 0.1, end('no') + 0.15, 620, 260);
  d.pop(mythC, at('myth') + 0.1, end('myth') + 0.15, 600, 260);
  d.pop(loopC, at('loop') + 0.08, end('loop') + 0.2, 600, 280);
  d.pop(befC, at('before') + 0.08, end('why') + 0.15, 600, 215);
  d.pop(aftC, at('after') + 0.08, end('why') + 0.15, 600, 395);
  d.pop(qWok, at('hawker') + 0.08, end('hawker') + 0.2, 610, 270);
  d.pop(cTit, at('titles') + 0.08, end('titles') + 0.2, 600, 560);
  d.pop(badEnd, at('moral') + 0.08, end('ending') + 0.15, 610, 270);
  d.pop(qHold, at('holds') + 0.08, end('sigh') + 0.2, 600, 280);

  return t => {
    d.upd(t);
    qWok.mark(-1, P(t, mid('hawker', 0.4), 0.45));
    qHold.mark(0, P(t, mid('holds', 0.55), 0.4));
  };
});
