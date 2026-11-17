/* Scene 0: Cold open (no card). Room 8H, 20 mugs on Mr H's desk. Question 4 sobs on a curry-puff napkin because
   Mei quoted line 32 instead of lines 10-18 and copied under "OWN WORDS". Will complains about Singapore otters,
   Nib notes Mei's one-star review, Question 4 yells "I LITERALLY TELL YOU IN THE QUESTION!", title card. */
scene('cold', S => {
  const { at, end, mid } = S;
  const AMP = S.reduce ? 0.3 : 1;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.add('title', engTitle(d.bg, 'Episode 13: Read the Question'), (t, g) => g.set(clamp((t - at('title')) / 2.0), t));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), qm = d.who('qmark');

  const bw = G(d.bg);
  T(bw, 660, 210, 'MOCK COMPREHENSION', { size: 50, weight: 800, anchor: 'middle', fill: '#2E7DD8' });
  T(bw, 660, 280, 'READ THE QUESTION FIRST', { size: 42, weight: 800, anchor: 'middle', fill: '#C62828' });

  const c1 = pill('Room 8H · Tuesday · Mock Results Day', { size: 32 });
  const cMug = pill('Mug count: 20 / 23', { stroke: '#FFB547', color: '#FFE6A8' });
  const badPaper = engPaper(d.fg, 480, 270, { title: "MEI'S ANSWER — Q4" });
  T(badPaper, 0, -34, 'Asked: lines 10–18, OWN WORDS', { size: 24, weight: 700, anchor: 'middle', fill: '#1E6E46', font: FB });
  T(badPaper, 0, 14, 'Wrote: copied line 32 word-for-word', { size: 24, weight: 700, anchor: 'middle', fill: '#C62828', font: FB });
  const stZero = engStamp(d.fg, '0 / 4 MARKS', '#D32F2F');
  const cOwn = engTech(d.fg, 'IN YOUR OWN WORDS', { kind: 'structure', def: 'paraphrase — never copy the phrase' });
  const cOtter = pill('Unseen non-fiction: Singapore Smooth-Coated Otters 🦦', { size: 28, stroke: '#56D69B' });
  const rev = engReview(d.fg, { stars: 1, text: 'Reading Comprehension. Trick questions everywhere.', by: 'Mei, 12', w: 500 });
  const big = G(d.fg), bigT = T(big, 0, 0, 'READ THE QUESTION!', { size: 88, weight: 800, anchor: 'middle', fill: '#BDE7FF' });
  engOutline(bigT, '#10263B', 14);

  d.shot(0, { set: 'room', cam: [1, 1.05, 600, 360], cast: { mrh: { x: 210, y: 470, s: 1.05, mood: 'deadpan', mug: 1 } } })
    .shot(at('sob') - 0.05, { set: 'room', cam: [1.04, 1.12, 640, 440], cast: { qmark: { x: 640, y: 470, s: 1.15, mood: 'sad', tears: 1 }, mei: { x: 260, y: 510, s: 1.0, mood: 'shock' } } })
    .shot(at('mrh') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 470, s: 1.05, mood: 'deadpan', mug: 1 }, mei: { x: 980, y: 510, s: 0.95, mood: 'smug' } } })
    .shot(at('zero') - 0.05, { set: 'room', cast: { qmark: { x: 260, y: 460, s: 1.1, mood: 'annoyed', tears: 0.7 }, mei: { x: 960, y: 510, s: 0.95, mood: 'sad' } } })
    .shot(at('will') - 0.05, { conf: 'will', cast: { will: { x: 340, y: 410, s: 1.25, mood: 'annoyed', glow: 0.6 } } })
    .shot(at('nib') - 0.05, { set: 'room', cast: { nib: { x: 240, y: 450, s: 0.95, mood: 'smug' }, mei: { x: 900, y: 500, s: 1.05, mood: 'annoyed', phone: 1 } } })
    .shot(at('tell') - 0.05, { conf: 'qmark', cast: { qmark: { x: 340, y: 420, s: 1.35, mood: 'shock', tears: 1 } } })
    .shot(at('title') - 0.05, { set: 'title', cast: {
      mei: { x: 200, y: 640, s: 0.4, mood: 'happy' }, mrh: { x: 360, y: 640, s: 0.4, mood: 'deadpan' },
      qmark: { x: 520, y: 635, s: 0.38, mood: 'happy' }, will: { x: 680, y: 630, s: 0.35, mood: 'smug' },
      nib: { x: 840, y: 640, s: 0.36, mood: 'smug' }, kevin: { x: 1000, y: 640, s: 0.36, mood: 'happy' } } });

  d.lower(['QUESTION 4', '4 marks · Lines 10–18 · Never read to the end.'], at('sob') + 0.15, 3.4);
  d.lower('mei', at('who') + 0.1, 2.8);
  d.lower('mrh', at('mrh') + 0.1, 2.8);
  d.lower('will', at('will') + 0.1, 3.0);
  d.lower('nib', at('nib') + 0.1, 2.8);
  d.mood('mei', at('good'), 'happy').mood('mei', at('zero'), 'shock');
  d.shake(at('tell') + 0.1, 10);

  d.pop(c1, at('tues') + 0.1, end('tues') + 0.3, 600, 560);
  d.pop(cMug, mid('mugs', 0.25), end('mugs') + 0.2, 660, 560);
  d.pop(badPaper, mid('mrh', 0.2), end('zero') + 0.2, 620, 320);
  d.pop(stZero, at('zero') + 0.1, end('zero') + 0.2, 620, 440, 0.82);
  d.pop(cOwn, mid('zero', 0.55), end('zero') + 0.3, 620, 590);
  d.pop(cOtter, mid('will', 0.25), end('will') + 0.2, 820, 340);
  d.pop(rev, mid('nib', 0.45), end('star') + 0.2, 600, 330);

  const blackout = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#000000' }, d.hud);

  return t => {
    const sh = d.upd(t);
    op(blackout, 1 - P(t, 0, 0.45, linear));
    op(bw, sh.spec.set === 'room' ? 1 : 0);
    const bv = win(t, at('tell') + 0.05, end('tell') + 0.3, 0.15);
    op(big, bv);
    if (bv) tr(big, 760 + Math.sin(t * 28) * 5 * AMP, 340, 0.72 + 0.22 * P(t, at('tell'), 0.4, pop), -3);
  };
});
