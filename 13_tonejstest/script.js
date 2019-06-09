window.addEventListener('load', () => {
  var synth = new Tone.FMSynth().toMaster();
  synth.triggerAttackRelease('A4', '8t', '8t');
  synth.triggerAttackRelease('F4', '8n', Tone.Time('4n') + Tone.Time('8n'));
  synth.triggerAttackRelease('C4', '16n', '2n');
  synth.triggerAttackRelease('G4', '16n', Tone.Time('2n') + Tone.Time('8t'));

  synth.triggerAttackRelease('A4', '8t', '8t');
  synth.triggerAttackRelease('F4', '8n', Tone.Time('4n') + Tone.Time('8n'));
  synth.triggerAttackRelease('C4', '16n', '2n');
  synth.triggerAttackRelease('G4', '16n', Tone.Time('2n') + Tone.Time('8t'));

  synth.triggerAttackRelease('A4', '8t', '8t');
  synth.triggerAttackRelease('F4', '8n', Tone.Time('4n') + Tone.Time('8n'));
  synth.triggerAttackRelease('C4', '16n', '2n');
  synth.triggerAttackRelease('G4', '16n', Tone.Time('2n') + Tone.Time('8t'));
  //   synth.triggerAttackRelease('G4', '16', Tone.Time('2n') + Tone.Time('8t') * 2);
  //   synth.triggerAttackRelease('E4', '2n', '0:3');
  document.onkeydown = e => {};

  const getKeyFromCharCode = charCode => {
    return String.fromCharCode(charCode);
  };
});
