function deg2rad(d) {
  return ((2 * d) / 360) * Math.PI;
}

let H = 0;
let M = 0;
let S = 0;
setInterval(() => {
  let minute = document.getElementById('minute');
  let hour = document.getElementById('hour');
  let second = document.getElementById('second');

  S = new Date().getSeconds() * 6 - 90;
  M = new Date().getMinutes() * 6 - 90;
  H = new Date().getHours() * 30 - 90;

  second.style.transform = 'rotate(' + S + 'deg)';
  minute.style.transform = 'rotate(' + M + 'deg)';
  hour.style.transform = 'rotate(' + H + 'deg)';
}, 10);

function vec2ang(x, y) {
  angleInRadians = Math.atan2(y, x);
  angleInDegrees = (angleInRadians / Math.PI) * 180.0;
  return angleInDegrees;
}

function ang2vec(angle) {
  var radians = angle * (Math.PI / 180.0);
  var x = Math.cos(radians);
  var y = Math.sin(radians);
  var a = new Segment(0, 0, x, y);
  var u = a.normal().unit();
  return [u.vecx, u.vecy];
}

let nc = document.getElementById('notch-container');
let angle = 0;
let rotate_x = 120;
let rotate_y = 0;

for (let i = 0; i < 60; i++) {
  let thin = document.createElement('div');
  let x = rotate_x * Math.cos(angle) - rotate_y * Math.cos(angle);
  let y = rotate_y * Math.cos(angle) + rotate_x * Math.sin(angle);
  let r = vec2ang(x, y);
  thin.className = 'thin';
  thin.style.left = 122 + x + 'px';
  thin.style.top = 127 + y + 'px';
  thin.style.transform = 'rotate(' + r + 'deg)';
  nc.appendChild(thin);
  angle += (Math.PI / 300) * 10;
}

// reset
angle = 0;
rotate_x = 120;
rotate_y = 0;

for (let i = 0; i < 12; i++) {
  let notch = document.createElement('div');
  let x = rotate_x * Math.cos(angle) - rotate_y * Math.cos(angle);
  let y = rotate_y * Math.cos(angle) + rotate_x * Math.sin(angle);
  let r = vec2ang(x, y);
  notch.className = 'notch';
  notch.style.left = 122 + x + 'px';
  notch.style.top = 127 + y + 'px';
  notch.style.transform = 'rotate(' + r + 'deg)';
  nc.appendChild(notch);
  angle += (Math.PI / 60) * 10;
}
