/* Scene 0: Cold open (no card). Room 8H at 4 p.m. monsoon (21 mugs). Mei writes "It was a dark and stormy night...
   very, very busy and nice!!!". Nib leaks at Bulwer-Lytton's 1830 cliché, Addie piles five more adjectives on,
   Cam yells "Cut! What am I looking at?!", Will boasts of 1599 shipwrecks -> step out into the rain -> title card. */
scene('cold', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.94)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.add('street', dscRainStreet(d.bg), (t, g) => g.upd(t, 0.95));
  d.add('title', engTitle(d.bg, 'Episode 14: It Was a Dark and Stormy Period 3'), (t, g) => g.set(clamp((t - at('title')) / 2.0), t));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), cam = d.who('cam'), adj = d.who('adj');

  const c1 = pill('4 p.m. · Room 8H · Sumatra Squall Outside', { size: 30 });
  const cMug = pill('Mug count: 21 / 23', { stroke: '#FFB547', color: '#FFE6A8' });
  const badDraft = engCard(d.fg, '"It was a **dark and stormy** night, and the hawker centre was **very, very** busy and nice!!!"', { w: 740, size: 29, stroke: C.bad, icon: 'cross', tab: 'FIRST DRAFT' });
  const st1830 = engStamp(d.fg, '1830 CLICHÉ!', '#D32F2F');
  const pile = ['BIG!', 'LOUD!', 'HOT!', 'CROWDED!', 'AMAZING!'].map((s, i) => chip(d.fg, s, { size: 28, fill: '#FF5FA2', stroke: '#FFFFFF', sw: 3, color: SC_INK }));
  const vf = G(d.fg);
  E('rect', { x: -300, y: -130, width: 600, height: 260, rx: 16, fill: 'rgba(10,18,30,0.85)', stroke: '#E8424F', 'stroke-width': 4, 'stroke-dasharray': '14 8' }, vf);
  T(vf, 0, -10, 'NO IMAGE FOUND', { size: 46, weight: 800, anchor: 'middle', fill: '#FF6070' });
  T(vf, 0, 44, '"busy" and "nice" are TELLS, not pictures', { size: 25, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
  const rev = engReview(d.fg, { stars: 1, text: 'Descriptive Writing. Nothing even blows up.', by: 'Mei, 12', w: 480 });

  d.shot(0, { set: 'room', cam: [1, 1.05, 620, 360], cast: { mrh: { x: 210, y: 470, s: 1.05, mood: 'deadpan', mug: 1 }, mei: { x: 880, y: 500, s: 1.05, mood: 'happy' } } })
    .shot(at('ink') - 0.05, { set: 'room', cast: { nib: { x: 250, y: 450, s: 1.0, mood: 'shock', ink: 1 }, mei: { x: 930, y: 500, s: 1.0, mood: 'shock' } } })
    .shot(at('addie') - 0.05, { set: 'room', cast: { adj: { x: 280, y: 480, s: 1.05, mood: 'happy', jitter: 1 }, nib: { x: 960, y: 460, s: 0.9, mood: 'annoyed', ink: 1 } } })
    .shot(at('cam') - 0.05, { set: 'room', cast: { cam: { x: 260, y: 480, s: 1.05, mood: 'annoyed', zoom: 1 }, adj: { x: 960, y: 490, s: 0.95, mood: 'shock' } } })
    .shot(at('will') - 0.05, { conf: 'will', cast: { will: { x: 330, y: 410, s: 1.25, mood: 'smug', glow: 0.5 } } })
    .shot(at('mrh') - 0.05, { set: 'street', cam: [1.06, 1.0, 600, 380], cast: { mrh: { x: 220, y: 510, s: 1.0, mood: 'neutral', mug: 1 }, mei: { x: 960, y: 530, s: 0.98, mood: 'shock' } } })
    .shot(at('title') - 0.05, { set: 'title', cast: {
      mei: { x: 185, y: 640, s: 0.38, mood: 'happy' }, mrh: { x: 330, y: 640, s: 0.38, mood: 'deadpan' },
      cam: { x: 475, y: 640, s: 0.36, mood: 'smug' }, adj: { x: 625, y: 640, s: 0.38, mood: 'happy' },
      will: { x: 775, y: 630, s: 0.34, mood: 'smug' }, nib: { x: 910, y: 640, s: 0.35, mood: 'smug' }, kevin: { x: 1035, y: 640, s: 0.35, mood: 'happy' } } });

  d.lower(['ADDIE', 'Adjective Addict. Five iced kopis in.'], at('addie') + 0.1, 3.2);
  d.lower(['CAM', 'Cinema Zoom Lens. Allergies: vague tells.'], at('cam') + 0.1, 3.2);

  d.pop(c1, at('fourpm') + 0.1, end('fourpm') + 0.25, 600, 560);
  d.pop(cMug, mid('mugs', 0.2), end('mugs') + 0.2, 600, 560);
  d.pop(badDraft, at('draft') + 0.08, end('ink') + 0.2, 610, 240);
  d.pop(st1830, mid('ink', 0.3), end('ink') + 0.2, 610, 400, 0.85);
  pile.forEach((p, i) => d.pop(p, mid('addie', 0.3 + i * 0.12), end('addie') + 0.2, 620 + ((i % 2) ? 140 : -90), 210 + i * 74, 1, (i % 2 ? 6 : -6)));
  d.pop(vf, at('cam') + 0.1, end('cam') + 0.25, 630, 310);
  d.pop(rev, mid('will', 0.55), end('hard') + 0.2, 820, 340);

  const blackout = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#000000' }, d.hud);
  return t => {
    d.upd(t);
    op(blackout, 1 - P(t, 0, 0.45, linear));
  };
});
