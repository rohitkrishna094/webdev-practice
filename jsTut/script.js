// setup
let width = 600;
let height = 600;

let c = document.getElementById('myCanvas');
c.width = width;
c.height = height;

let ctx = c.getContext('2d');

game = () => {
  draw();
};
handle = setInterval(game, 1000 / 60);

window.addEventListener('keydown', e => (keys[e.keyCode] = true), false);
window.addEventListener('keyup', e => delete keys[e.keyCode], false);

let keys = [];
let p = new Player(width / 2, height - 20);
let noOfEnemies = 10;
let enemies = [];

spawn = n => {
  for (let i = 0; i < n; i++) {
    let rx = 20 + Math.random() * (width - 20);
    let ry = (Math.random() * width) / 4;
    enemies.push(new Enemy(rx, ry, Math.random() / 4, 20));
  }
};

spawn(noOfEnemies);

draw = () => {
  if (enemies.length < 5) {
    spawn(noOfEnemies);
  }

  // background color
  ctx.fillStyle = 'rgb(51,51,51)';
  ctx.fillRect(0, 0, width, height);

  p.update(keys);
  p.draw();

  for (let i = 0; i < enemies.length; i++) {
    let e = enemies[i];
    e.update();
    e.draw();
    if (e.y > width) {
      enemies.splice(i, 1);
    }
  }

  let bullets = p.bullets;
  for (let i = 0; i < enemies.length; i++) {
    let e = enemies[i];
    if (collEnemyBullet(e, bullets)) {
      spawnOrDie(e, enemies, i);
    }
  }

  if (keys[81] || collPlayerEnemy(enemies, p)) {
    ctx.font = '30px Arial';
    ctx.fillText('Game Over!!! Refresh the page', 0, height / 2);
    clearInterval(handle);
  }
};

spawnOrDie = (e, enemies, i) => {
  let newWidth = e.width / 1.5;
  let granularity = 5;
  if (newWidth < granularity) {
    enemies.splice(i, 1);
  } else {
    let rx = e.x + (10 + Math.random() * 10);
    let ry = e.y + (10 + Math.random() * 10);
    let e1 = new Enemy(rx, ry, e.speed * 2, newWidth);
    let e2 = new Enemy(rx, ry, e.speed * 2, newWidth);
    enemies.splice(i, 1);
    enemies.push(e1);
    enemies.push(e2);
  }
};

collEnemyBullet = (e, bullets) => {
  let res = false;
  for (let i = 0; i < bullets.length; i++) {
    let tempRes = collided(e, bullets[i]);
    if (tempRes) {
      res = true;
      break;
    }
  }
  return res;
};

collPlayerEnemy = (enemies, player) => {
  let res = false;
  for (let i = 0; i < enemies.length; i++) {
    let tempRes = collided(player, enemies[i]);
    if (tempRes) {
      res = true;
      break;
    }
  }
  return res;
};

collided = (a, b) => {
  let res = b.x + b.width > a.x && b.y + b.height > a.y && a.x + a.width > b.x && a.y + a.height > b.y;
  return res;
};
