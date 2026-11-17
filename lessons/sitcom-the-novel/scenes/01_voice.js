/* Scene 1: Who's holding the camera? (Narrative perspective + Unreliable & Retrospective narrators).
   Library: Narrator ≠ Author -> 1st, 2nd, 3rd limited, 3rd omniscient ('Marley was dead: to begin with.'), multiple narrators ->
   Unreliable narrator + Dramatic irony -> Retrospective narrator in Dickens's 'Great Expectations' ('small bundle of shivers'). */
scene('voice', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.amber, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('lib', engLibrary(d.bg), (t, g) => g.upd(t, 0.08));
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('shady'); d.who('omni');

  const ruleC = engCard(d.fg, '**NARRATOR ≠ AUTHOR**\nBrontë (real writer) created Jane (fictional voice).', { w: 720, size: 29, stroke: ENG.amber });
  const povGrid = engCard(d.fg, '**CAMERA POSITIONS**\n• **1st ("I")**: intimate, limited, biased   • **2nd ("you")**: immersive, rare\n• **3rd limited**: one character\'s shoulder   • **3rd omniscient**: all-knowing', { w: 790, size: 26, stroke: '#5AB4E0' });
  const qMar = engQuote(d.fg, { text: 'Marley was dead: to begin with.', who: 'Omniscient narrator', where: 'Charles Dickens, A Christmas Carol (1843), Stave One', w: 680, size: 38, hl: ['dead'] });
  const cMul = pill('Multiple narrators (Wonder, Noughts & Crosses) = compare viewpoints!', { size: 26, stroke: '#56D69B', color: '#D0F7E2' });
  const tUnr = engTech(d.fg, 'UNRELIABLE NARRATOR', { kind: 'structure', def: 'naïve, biased, deceptive, confused or distant' });
  const tIro = engTech(d.fg, 'DRAMATIC IRONY', { kind: 'drama', def: 'the reader understands more than the character/narrator' });
  const qPip = engQuote(d.fg, { text: 'the small bundle of shivers growing afraid of it all and beginning to cry, was Pip.', who: 'Adult Pip (retrospective narrator)', where: 'Charles Dickens, Great Expectations (1861), Chapter 1', w: 760, size: 33, hl: ['bundle', 'shivers', 'pip'] });
  const cRet = pill('RETROSPECTIVE NARRATOR: child\'s terror + adult\'s wry words!', { size: 27, stroke: ENG.amber });

  d.shot(0, { set: 'lib', cast: { mrh: { x: 200, y: 500, s: 0.98, mood: 'neutral' }, shady: { x: 990, y: 500, s: 0.96, mood: 'smug' } } })
    .shot(at('first') - 0.05, { set: 'lib', cast: { nib: { x: 170, y: 510, s: 0.85, mood: 'smug' }, mei: { x: 1040, y: 520, s: 0.88, mood: 'neutral' } } })
    .shot(at('thirdo') - 0.05, { set: 'lib', cast: { omni: { x: 210, y: 310, s: 0.9, mood: 'happy' }, nib: { x: 1020, y: 500, s: 0.86, mood: 'smug' } } })
    .shot(at('unrel') - 0.05, { set: 'lib', cast: { shady: { x: 240, y: 500, s: 1.0, mood: 'smug' }, mei: { x: 980, y: 510, s: 0.96, mood: 'shock' } } })
    .shot(at('pip') - 0.05, { set: 'lib', cast: { will: { x: 180, y: 440, s: 0.9, mood: 'sad', glow: 0.6 }, nib: { x: 1030, y: 500, s: 0.86, mood: 'smug' } } })
    .shot(at('hide') - 0.05, { conf: 'mrh', cast: { mrh: { x: 330, y: 420, s: 1.3, mood: 'neutral', mug: 1 } } });

  d.pop(ruleC, at('rule') + 0.08, end('rule') + 0.18, 600, 270);
  d.pop(povGrid, at('first') + 0.08, end('thirdl') + 0.18, 600, 275);
  d.pop(qMar, at('thirdo') + 0.08, end('thirdo') + 0.18, 640, 270);
  d.pop(cMul, at('multi') + 0.08, end('multi') + 0.18, 620, 460);
  d.pop(tUnr, at('unrel') + 0.08, end('irony') + 0.15, 610, 230);
  d.pop(tIro, at('irony') + 0.08, end('irony') + 0.2, 610, 390);
  d.pop(qPip, at('pip') + 0.08, end('retro') + 0.2, 600, 275);
  d.pop(cRet, at('retro') + 0.08, end('retro') + 0.2, 600, 505);

  return t => {
    d.upd(t);
    qMar.mark(0, P(t, mid('thirdo', 0.55), 0.35));
    qPip.mark(-1, P(t, mid('pip', 0.35), 0.5));
  };
});
