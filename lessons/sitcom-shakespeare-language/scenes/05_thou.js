/* Scene 5: Thou, thee and wherefore. Mei's HDB flat at 7 p.m. Will has followed her home; Early Modern vs Old
   English -> thou (familiar / rude) vs you (polite / formal) -> Ah Ma shuts Mei's "thou" down from the kitchen ->
   thou/thee/thy/thine table -> Gertrude vs Hamlet pronoun clash (Act 3 Scene 4) -> Juliet's "wherefore = WHY"
   with Nib leaking ink -> "lonely / eyeball / swagger" and Nib's EARLIEST RECORDED USER stamp -> Mei confessional. */
scene('thou', S => {
  const { at, end, mid } = S;
  const AMP = S.reduce ? 0.3 : 1;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  const flat = d.add('flat', engFlat(d.bg), (t, g) => { g.upd(t); g.clock(19); });
  const mei = d.who('mei'), will = d.who('will'), nib = d.who('nib');

  /* opening & Early Modern English */
  const c7pm = pill("7 p.m. · Mei's HDB flat, Queenstown", { stroke: ENG.teal });
  const cKitchen = pill('← Ah Ma in the kitchen', { size: 28, stroke: '#FFB547', color: '#FFE6A8' });
  const cNot = pill('Narrator: he was NOT quiet.', { size: 32, stroke: ENG.rose, color: '#FFD0DC' });

  const emeOk = engCard(d.fg, '**Early Modern English** (c. 1500–1700)\nShakespeare, the King James Bible', { w: 720, size: 30, icon: 'tick', stroke: C.good, boldFill: C.good });
  const oldNo = engCard(d.fg, '**Old English** (c. 450–1150)\nBeowulf — looks like a foreign language', { w: 720, size: 30, icon: 'cross', stroke: C.bad, boldFill: C.bad });

  /* thou vs you */
  const cPoshQ = pill('Is THOU the posh one?', { size: 36, stroke: ENG.rose });
  const tThou = engTech(d.fg, 'THOU', { kind: 'grammar', def: 'singular & familiar — closeness or superiority', size: 42 });
  const fam6 = ['friends', 'family', 'lovers', 'children', 'servants', 'insults!'].map((s, i) =>
    pill(s, { size: 28, stroke: i === 5 ? C.bad : '#8FD3FF', color: i === 5 ? '#FFB3BA' : '#FFFFFF' }));
  const tYou = engTech(d.fg, 'YOU', { kind: 'grammar', def: 'polite, formal, respectful — or plural', size: 42 });
  const pol3 = ['polite & respectful', 'strangers & superiors', 'more than one person'].map(s =>
    pill(s, { size: 28, stroke: ENG.gold, color: '#FFE6A8' }));

  /* Ah Ma exchange */
  const bMei = engBubble(d.fg, 'Ah Ma, **thou** art the best cook\nin Queenstown!', { size: 30, tail: 'down' });
  const bAhma = engBubble(d.fg, 'Did you just **thou** me?!\nTo your grandmother, you say **YOU**.', { size: 32, tail: 'left' });

  /* pronoun grammar table */
  const tbl = G(d.fg);
  E('rect', { x: -460, y: -150, width: 920, height: 300, rx: 22, fill: 'rgba(14,24,40,0.95)', stroke: '#8FD3FF', 'stroke-width': 4 }, tbl);
  T(tbl, 0, -104, 'PRONOUN TABLE', { size: 28, weight: 800, anchor: 'middle', fill: ENG.gold, ls: 2 });
  const cols = [['THOU', 'I (subject)'], ['THEE', 'me (object)'], ['THY', 'my'], ['THINE', 'mine / before vowel']];
  cols.forEach(([oldW, modW], i) => {
    const cx = -330 + i * 220;
    E('rect', { x: cx - 98, y: -80, width: 196, height: 126, rx: 14, fill: 'rgba(255,255,255,0.07)', stroke: 'rgba(143,211,255,0.45)', 'stroke-width': 2.5 }, tbl);
    T(tbl, cx, -26, oldW, { size: 36, weight: 800, anchor: 'middle', fill: '#8FD3FF' });
    T(tbl, cx, 24, '= ' + modW, { size: 24, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
  });
  E('rect', { x: -410, y: 70, width: 820, height: 56, rx: 12, fill: 'rgba(226,179,60,0.16)', stroke: ENG.gold, 'stroke-width': 2.5 }, tbl);
  T(tbl, 0, 108, 'thou **art**   ·   thou **hast**   ·   he / she **hath**', { size: 30, weight: 700, anchor: 'middle', fill: '#FFFFFF', boldFill: ENG.gold });

  /* Gertrude vs Hamlet pronoun switch */
  const qGert = engQuote(d.fg, { text: 'Hamlet, thou hast thy father much offended.', who: 'Gertrude', where: 'Hamlet, Act 3 Scene 4', w: 760, size: 34, hl: ['thou', 'thy'] });
  const qHam = engQuote(d.fg, { text: 'Mother, you have my father much offended.', who: 'Hamlet', where: 'Hamlet, Act 3 Scene 4', w: 760, size: 34, hl: ['you'] });
  const cClash = pill('warm parental THOU  ↔  cold distant YOU', { size: 30, stroke: ENG.rose, color: '#FFD0DC' });

  /* Juliet wherefore */
  const qRom = engQuote(d.fg, { text: 'O Romeo, Romeo, wherefore art thou Romeo?', who: 'Juliet', where: 'Romeo and Juliet, Act 2 Scene 2', w: 760, size: 38, hl: ['wherefore'] });
  const cWhere = pill('WHERE are you, Romeo?', { size: 34, stroke: C.bad, color: '#FFB3BA' });
  const whereX = strike(cWhere, -cWhere.w / 2 + 18, 0, cWhere.w / 2 - 18, C.bad);
  const stWhy = engStamp(d.fg, 'WHEREFORE = WHY', '#1E9E5A');
  const cWhyMon = pill('WHY must you be a Montague (her enemy)?', { size: 30, stroke: '#56D69B', color: '#C9F2D3' });

  /* First recorded use */
  const words3 = ['lonely', 'eyeball', 'swagger'].map(w =>
    chip(d.fg, '“' + w + '”', { size: 40, fill: '#2E1E4A', stroke: ENG.gold, sw: 4, color: '#FFE6A8' }));
  const stRec = engStamp(d.fg, 'EARLIEST RECORDED USER', '#D32F2F');
  const cSame = pill('Not necessarily the inventor!', { size: 30, stroke: ENG.gold });

  /* Mei's confessional social post */
  const postCard = G(d.fg);
  E('rect', { x: -250, y: -150, width: 500, height: 300, rx: 24, fill: '#FFFFFF', stroke: SC_INK, 'stroke-width': 4 }, postCard);
  E('circle', { cx: -185, cy: -92, r: 28, fill: '#AFC7EA', stroke: '#5E86BF', 'stroke-width': 3 }, postCard);
  T(postCard, -185, -82, 'WS', { size: 24, weight: 800, anchor: 'middle', fill: '#1E2A5A' });
  T(postCard, -140, -96, '@will_shakes', { size: 28, weight: 800, fill: SC_INK });
  T(postCard, -140, -66, 'Posted c. 1607 · Coriolanus', { size: 22, weight: 600, fill: '#5A6B7A', font: FB });
  T(postCard, -210, 4, '“Feeling **lonely** today. Might', { size: 30, weight: 700, fill: SC_INK, boldFill: ENG.roseDk });
  T(postCard, -210, 44, 'go **swagger** with my **eyeball**.”', { size: 30, weight: 700, fill: SC_INK, boldFill: ENG.roseDk });
  const postTag = chip(postCard, 'FIRST POST THAT SURVIVED', { size: 24, fill: '#E8F7EE', stroke: '#1E9E5A', sw: 3, color: '#145A38' });
  tr(postTag, 0, 108);

  /* shots */
  d.shot(0, { set: 'flat', cast: { mei: { x: 820, y: 470, s: 1.0, mood: 'annoyed' }, will: { x: 360, y: 390, s: 0.92, mood: 'happy' } } })
    .shot(at('eme') - 0.05, { set: 'flat', cast: { will: { x: 200, y: 430, s: 0.9, mood: 'smug' }, mei: { x: 1060, y: 530, s: 0.82, mood: 'neutral' } } })
    .shot(at('posh') - 0.05, { set: 'flat', cast: { mei: { x: 860, y: 480, s: 1.0, mood: 'neutral', hand: 1 }, will: { x: 220, y: 420, s: 0.9, mood: 'happy' } } })
    .shot(at('you') - 0.05, { set: 'flat', cast: { nib: { x: 230, y: 470, s: 0.92, mood: 'smug' }, mei: { x: 1050, y: 530, s: 0.82, mood: 'neutral' } } })
    .shot(at('test') - 0.05, { set: 'flat', cast: { mei: { x: 740, y: 480, s: 1.05, mood: 'happy' }, will: { x: 1040, y: 410, s: 0.85, mood: 'happy' } } })
    .shot(at('forms') - 0.05, { set: 'flat', cast: { nib: { x: 140, y: 560, s: 0.72, mood: 'smug' } } })
    .shot(at('signal') - 0.05, { set: 'flat', cast: { will: { x: 160, y: 470, s: 0.82, mood: 'neutral' }, nib: { x: 1090, y: 560, s: 0.68, mood: 'smug' } } })
    .shot(at('romeo') - 0.05, { set: 'flat', cast: { will: { x: 170, y: 450, s: 0.82, mood: 'happy' }, mei: { x: 1060, y: 540, s: 0.82, mood: 'happy' }, nib: { x: 140, y: 610, s: 0.62, mood: 'smug' } } })
    .shot(at('words') - 0.05, { set: 'flat', cast: { will: { x: 250, y: 430, s: 0.95, mood: 'smug', quill: 1 }, nib: { x: 980, y: 480, s: 0.9, mood: 'smug' } } })
    .shot(at('post') - 0.05, { conf: 'mei', cast: { mei: { x: 310, y: 420, s: 1.35, mood: 'smug' } } });

  d.mood('will', at('quiet'), 'smug').mood('will', at('not'), 'happy');
  d.x('will', at('not'), { glow: 1 }).x('will', at('eme'), { glow: 0.2 });
  d.x('mei', at('opposite'), { hand: 0 });
  d.look('mei', at('test'), -1).mood('mei', at('grandma'), 'shock').x('mei', at('grandma'), { sweat: 1 });
  d.x('mei', at('forms'), { sweat: 0 }).look('mei', at('forms'), null);
  d.mood('will', at('like'), 'happy');
  d.mood('nib', at('where'), 'shock').x('nib', mid('where', 0.3), { ink: 1 }).mood('nib', at('why'), 'annoyed').x('nib', at('words'), { ink: 0 });
  d.mood('mei', at('why'), 'shock');
  d.mood('will', at('recorded'), 'shock').mood('will', at('same'), 'annoyed').mood('nib', at('notsame'), 'deadpan');
  d.shake(at('grandma') + 0.08, 9);
  d.shake(mid('recorded', 0.2), 8);

  /* pop cues */
  d.pop(c7pm, at('seven') + 0.1, end('seven') + 0.2, 620, 120);
  d.pop(cKitchen, mid('ahma', 0.3), end('ahma') + 0.2, 340, 290);
  d.pop(cNot, at('not') + 0.05, end('not') + 0.25, 620, 160);

  d.pop(emeOk, mid('eme', 0.12), end('eme') + 0.25, 650, 250);
  d.pop(oldNo, mid('eme', 0.55), end('eme') + 0.25, 650, 440);

  d.pop(cPoshQ, at('posh') + 0.08, end('posh') + 0.15, 580, 200);
  d.pop(tThou, at('opposite') + 0.08, end('opposite') + 0.25, 600, 210);
  fam6.forEach((p, i) => d.pop(p, mid('opposite', 0.28 + i * 0.11), end('opposite') + 0.25, 420 + (i % 3) * 200, 390 + Math.floor(i / 3) * 84));

  d.pop(tYou, at('you') + 0.08, end('you') + 0.25, 660, 230);
  pol3.forEach((p, i) => d.pop(p, mid('you', 0.3 + i * 0.2), end('you') + 0.25, 660, 400 + i * 78));

  d.pop(bMei, at('test') + 0.05, end('test') + 0.15, 680, 250);
  d.pop(bAhma, at('grandma') + 0.05, end('like') + 0.2, 430, 340);

  d.pop(tbl, at('forms') + 0.05, end('forms') + 0.25, 660, 340);

  d.pop(qGert, mid('signal', 0.32), end('pronouns') + 0.25, 630, 220);
  d.pop(qHam, mid('throws', 0.25), end('pronouns') + 0.25, 630, 430);
  d.pop(cClash, mid('pronouns', 0.15), end('pronouns') + 0.25, 630, 600);

  d.pop(qRom, mid('romeo', 0.25), end('why') + 0.25, 610, 220);
  d.pop(cWhere, at('where') + 0.05, end('why') + 0.25, 610, 410);
  d.pop(stWhy, at('why') + 0.08, end('why') + 0.25, 610, 520, 0.82);
  d.pop(cWhyMon, mid('why', 0.42), end('why') + 0.25, 610, 635);

  words3.forEach((w, i) => d.pop(w, mid('words', 0.25 + i * 0.22), end('notsame') + 0.2, 620, 200 + i * 96));
  d.pop(stRec, at('recorded') + 0.1, end('notsame') + 0.2, 620, 490, 0.72);
  d.pop(cSame, at('notsame') + 0.05, end('notsame') + 0.25, 620, 615);

  d.pop(postCard, mid('post', 0.15), end('post') + 0.4, 830, 390);

  return t => {
    d.upd(t);
    qGert.mark(-1, P(t, at('pronouns'), 0.45));
    qHam.mark(-1, P(t, mid('pronouns', 0.35), 0.45));
    qRom.mark(0, P(t, at('why'), 0.4));
    whereX.set(P(t, at('why'), 0.3, ease));
    if (t >= at('grandma') && t < end('grandma')) {
      tr(bAhma, 430 + Math.sin(t * 28) * 3 * AMP, 340);
    }
  };
});
