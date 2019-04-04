window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = ['#60d394', '#d36060', '#c060d3', '#d3d160', '#606bd3', '#60c2d3'];

  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    document.body.style.webkitTransition = 'background 0.3s';
    document.body.style.background = colors[(index + 1) % colors.length];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener('animation', function() {
      visual.removeChild(this);
    });
  };

  const map = { Z: 0, X: 1, C: 2, V: 3, B: 4, N: 5 };
  document.onkeydown = e => {
    const charStr = getKeyFromCharCode(e.keyCode);
    if (charStr in map) {
      const pad = pads[map[charStr]];
      pad.click();
      pad.style.boxShadow = `0px -10px 50px white`;
    }
  };

  document.onkeyup = e => {
    const charStr = getKeyFromCharCode(e.keyCode);
    if (charStr in map) {
      const pad = pads[map[charStr]];
      pad.style.boxShadow = 'none';
      document.body.style.background = 'white';
    }
  };

  const getKeyFromCharCode = charCode => {
    return String.fromCharCode(charCode);
  };
});
