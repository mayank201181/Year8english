/* Scene 5: Voice, body & competition nerves (showpiece: Four Ps dials + Kevin's heroic 2-second strategic pause!).
   Hall rehearsal: 7 meanings of "I never said she stole my money" -> Four Ps (Pace 130-150 wpm / ~420w, Projection,
   Pitch, and Kevin's Pause!) -> Body (lighthouse eye contact, gestures, grounded posture, keyword cue cards) ->
   Nerves = adrenaline (4-in/6-out breathing, "I'm excited!", illusion of transparency) -> 5 criteria & 4 stars! */
scene('delivery', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('hall', engHall(d.bg), (t, g) => {
    g.upd(t);
    g.spot(win(t, at('kevtry') - 0.1, end('kevjoy') + 0.2, 0.2), 600);
  });
  const mei = d.who('mei'), mrh = d.who('mrh'), kev = d.who('kevin'), ethos = d.who('ethos'), pathos = d.who('pathos'), logos = d.who('logos');

  const cStress = engCard(d.fg, '**I** · **never** · **said** · **she** · **stole** · **my** · **money**\n→ **7 stressed words = 7 different meanings!**', { w: 680, size: 30, stroke: ENG.gold });
  const dials = pubVoiceDials(d.fg);
  const pauseRing = ring(d.fg, 52, '#FFE45C');
  const cPauseLbl = pill('2.0 s STRATEGIC PAUSE...', { size: 32, stroke: '#B58CFF', color: '#E6D6FF' });
  const cBody = engCard(d.fg, '• **Eye contact**: sweep the room like a lighthouse\n• **Gestures & posture**: open hands, grounded feet\n• **Keyword cue cards** — NEVER read a full script!', { w: 680, size: 28, stroke: C.good, boldFill: C.good });
  const cNerves = engCard(d.fg, '**Nerves = Adrenaline!**\n• Breathe **4 in, 6 out** · say **"I\'m excited!"**\n• **Illusion of transparency**: nobody sees you shaking!', { w: 680, size: 28, stroke: '#5AB4E0', boldFill: '#FFE45C' });
  const rating = pubRating(d.fg);

  d.shot(0, { set: 'hall', cast: { mrh: { x: 210, y: 490, s: 1.0, mood: 'neutral', mug: 1 } } })
    .shot(at('fourp') - 0.05, { set: 'hall', cast: { ethos: { x: 190, y: 480, s: 0.95, mood: 'happy' }, pathos: { x: 1030, y: 480, s: 0.9, mood: 'happy' } } })
    .shot(at('pause') - 0.05, { set: 'hall', cast: { kevin: { x: 240, y: 490, s: 0.92, mood: 'happy' } } })
    .shot(at('kevtry') - 0.05, { set: 'hall', cam: [1, 1.12, 600, 440], cast: { mei: { x: 480, y: 470, s: 1.1, mood: 'deadpan' }, kevin: { x: 760, y: 490, s: 0.85, mood: 'shock' } } })
    .shot(at('body') - 0.05, { set: 'hall', cast: { mrh: { x: 200, y: 490, s: 1.0, mood: 'neutral' } } })
    .shot(at('nerves') - 0.05, { conf: 'logos', cast: { logos: { x: 310, y: 430, s: 1.25, mood: 'happy' } } })
    .shot(at('four') - 0.05, { set: 'hall', cast: { mei: { x: 340, y: 490, s: 1.1, mood: 'happy', phone: 1 }, kevin: { x: 860, y: 490, s: 0.9, mood: 'happy' } } });

  d.lower('kevin', at('pause') + 0.1, 3.0);
  d.mood('kevin', at('kevjoy'), 'happy');

  d.pop(cStress, at('stress') + 0.08, end('stress') + 0.25, 730, 310);
  d.pop(dials, at('fourp') + 0.05, end('pause') + 0.2, 610, 290);
  d.pop(cPauseLbl, mid('kevtry', 0.55), at('kevjoy') + 0.1, 600, 170);
  d.pop(cBody, at('body') + 0.08, end('body') + 0.25, 730, 310);
  d.pop(cNerves, at('nerves') + 0.08, end('nerves') + 0.25, 810, 350);

  return t => {
    d.upd(t);
    dials.set(
      P(t, at('fourp'), 0.4) +
      P(t, at('pause'), 0.4) +
      P(t, at('proj'), 0.4) +
      P(t, mid('proj', 0.5), 0.4)
    );
    const pr = win(t, mid('kevtry', 0.65), at('kevjoy'), 0.12);
    op(pauseRing, pr);
    if (pr) {
      tr(pauseRing, 600, 270);
      pauseRing.set(clamp((t - mid('kevtry', 0.65)) / Math.max(0.2, at('kevjoy') - mid('kevtry', 0.65))));
    }
    const rv = win(t, mid('four', 0.15), S.D + 1, 0.25);
    rating.set(2.5 + 1.5 * P(t, mid('four', 0.25), 0.5, linear), rv); tr(rating, 1030, 74);
  };
});
