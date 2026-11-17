/* Scene 0: Cold open (no card). Room 8H, Monday Period 1 (7 mugs): Mr H reminds 8H the script + commentary are due
   Period 5 -> Mei reads her novel-style draft AND reads "Bracket, pause, unbracket" aloud -> Bracket bursts in furious
   ("Actors DO me, they never SAY me!") -> Clapper snaps Take 1 ("How do you act 'thinking about last summer'?") ->
   Will boasts about cue scripts & aircon -> Mei gives her draft 1 star -> title card. */
scene('cold', S => {
  const { at, end, mid } = S;
  const AMP = S.reduce ? 0.3 : 1;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.add('title', engTitle(d.bg, 'Episode 5: Exit, Pursued by a Deadline'), (t, g) => g.set(clamp((t - at('title')) / 2.0), t));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), brack = d.who('brack'), clap = d.who('clapper'), nib = d.who('nib'), kev = d.who('kevin');

  /* Whiteboard deadline notice */
  const bw = G(d.bg);
  T(bw, 660, 195, 'DUE: PERIOD 5', { size: 54, weight: 800, anchor: 'middle', fill: '#C62828' });
  T(bw, 660, 265, '1. Original Playscript', { size: 36, weight: 700, anchor: 'middle', fill: '#1E2A3A' });
  T(bw, 660, 320, '2. Reflective Commentary', { size: 36, weight: 700, anchor: 'middle', fill: '#2E7DD8' });

  /* Mei's disastrous novel-style draft page */
  const badPage = engPaper(d.fg, 620, 270, { title: "MEI'S DRAFT (DO NOT COPY)" });
  T(badPage, -275, -42, '"I\'m not going," Mia shouted angrily,', { size: 26, weight: 700, fill: SC_INK, font: FB });
  T(badPage, -275, 4, 'thinking about last summer.', { size: 26, weight: 700, fill: '#B8335A', font: FB });
  T(badPage, -275, 52, '[pause]   ← SHE READ THIS OUT LOUD!', { size: 26, weight: 800, fill: '#7A3EC8', font: FB });
  const badX1 = strike(badPage, -280, -50, 250, C.bad);
  const badX2 = strike(badPage, -280, -4, 150, C.bad);

  const cMon = pill('Monday · Period 1 · Mug #7', { size: 32 });
  const bigStop = G(d.fg), stopT = T(bigStop, 0, 0, 'DO NOT READ ME ALOUD!', { size: 74, weight: 800, anchor: 'middle', fill: '#E8D6FF' });
  engOutline(stopT, '#35185A', 12);
  const stUnstage = engStamp(d.fg, 'UNSTAGEABLE!', '#D32F2F');
  const cueScroll = engScroll(d.fg, 440, 190);
  T(cueScroll.body, 0, -28, 'CUE SCRIPT (1599)', { size: 28, weight: 800, anchor: 'middle', fill: '#7A1E2E' });
  T(cueScroll.body, 0, 16, '...three words cue → YOUR LINE', { size: 24, weight: 700, anchor: 'middle', fill: SC_INK, font: FB });
  T(cueScroll.body, 0, 52, '(nobody got the whole play!)', { size: 24, weight: 700, anchor: 'middle', fill: '#5A4A3A', font: FB });
  const cAir = pill('aircon: Singapore 1 · 1599 Globe 0', { size: 28, stroke: '#7FD3FF', color: '#BDE7FF' });
  const rev = engReview(d.fg, { stars: 1, text: 'My own first draft. Read the brackets aloud.', by: 'Mei, Period 1', w: 490 });
  const blackout = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#000000' }, d.hud);

  d.shot(0, { set: 'room', cam: [1, 1.05, 620, 320], cast: { mrh: { x: 210, y: 470, s: 1.08, mood: 'deadpan', mug: 1 } } })
    .shot(at('draft') - 0.05, { set: 'room', cast: { mei: { x: 260, y: 490, s: 1.15, mood: 'happy' } } })
    .shot(at('stop') - 0.05, { set: 'room', cast: { mei: { x: 260, y: 500, s: 1.08, mood: 'shock' }, brack: { x: 860, y: 450, s: 1.05, mood: 'annoyed', sweat: 1 } } })
    .shot(at('iam') - 0.05, { conf: 'brack', cast: { brack: { x: 350, y: 410, s: 1.35, mood: 'smug' } } })
    .shot(at('clap') - 0.05, { set: 'room', cast: { clapper: { x: 310, y: 470, s: 1.1, mood: 'annoyed', snap: 1 }, mei: { x: 920, y: 500, s: 1.0, mood: 'deadpan' } } })
    .shot(at('cues') - 0.05, { conf: 'will', cast: { will: { x: 320, y: 400, s: 1.25, mood: 'smug', quill: 1 } } })
    .shot(at('review') - 0.05, { set: 'room', cast: { mei: { x: 320, y: 500, s: 1.12, mood: 'deadpan', phone: 1 } } })
    .shot(at('title') - 0.05, { set: 'title', cast: {
      mei: { x: 180, y: 640, s: 0.4, mood: 'happy' }, mrh: { x: 340, y: 640, s: 0.4, mood: 'deadpan' },
      brack: { x: 510, y: 636, s: 0.38, mood: 'smug' }, clapper: { x: 680, y: 642, s: 0.38, mood: 'happy' },
      will: { x: 850, y: 630, s: 0.35, mood: 'smug' }, nib: { x: 980, y: 640, s: 0.36, mood: 'smug' }, kevin: { x: 1090, y: 642, s: 0.34, mood: 'happy' } } });

  d.lower('mrh', at('due') + 0.1, 2.8);
  d.lower('mei', at('draft') + 0.1, 2.8);
  d.lower(['BRACKET', 'A Stage Direction. Italicised. Never spoken aloud.'], at('iam') + 0.1, 3.4);
  d.lower(['CLAPPER', 'Director & Clapperboard. Arrives late, leaves early.'], at('clap') + 0.1, 3.4);
  d.lower('will', at('cues') + 0.1, 3.0);

  d.mood('will', at('aircon'), 'happy');
  d.shake(at('stop'), 12);
  d.shake(at('clap') + 0.15, 9);

  d.pop(cMon, at('mon') + 0.1, end('mon') + 0.25, 760, 560);
  d.pop(badPage, at('draft') + 0.15, end('who') + 0.2, 790, 290);
  d.pop(stUnstage, mid('clap', 0.28), end('clap') + 0.25, 780, 260, 0.9);
  d.pop(cueScroll, mid('cues', 0.2), end('cues') + 0.25, 830, 320);
  d.pop(cAir, at('aircon') + 0.1, end('aircon') + 0.2, 830, 530);
  d.pop(rev, mid('review', 0.2), end('review') + 0.3, 820, 370);

  return t => {
    const sh = d.upd(t);
    op(blackout, 1 - P(t, 0, 0.45, linear));
    op(bw, sh.spec.set === 'room' && t < at('draft') ? 1 : 0);
    badX1.set(P(t, at('stop') + 0.2, 0.35, ease));
    badX2.set(P(t, mid('clap', 0.45), 0.35, ease));
    const bs = win(t, at('stop'), end('stop') + 0.25, 0.15);
    op(bigStop, bs);
    if (bs) tr(bigStop, 600 + Math.sin(t * 28) * 5 * AMP, 580, 0.85 + 0.15 * P(t, at('stop'), 0.4, pop));
    if (t >= at('clap') - 0.05 && t < at('cues') - 0.05) {
      clap.set({ t, talk: scTalk(S, t, 'clapper'), mood: 'annoyed', snap: P(t, at('clap'), 0.22, easeOut) });
    }
  };
});
