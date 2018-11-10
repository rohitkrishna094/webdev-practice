import { loadLevel } from './loaders.js';
import { loadBackgroundSprites, loadMarioSprite } from './sprites.js';
import Compositor from './Compositor.js';
import { createBackgroundLayer } from './layers.js';
import Entity from './Entity.js';
import { Vec2 } from './math.js';

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');

const createSpriteLayer = (entity, pos) => {
  const drawSpriteLayer = ctx => {
    entity.draw(ctx);
  };
  return drawSpriteLayer;
};

Promise.all([loadMarioSprite(), loadBackgroundSprites(), loadLevel('1-1')]).then(
  ([marioSprite, backgroundSprites, level]) => {
    const comp = new Compositor();
    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
    comp.layers.push(backgroundLayer);

    const pos = new Vec2(64, 180);
    const vel = new Vec2(2, -10);

    const gravity = 0.5;
    const mario = new Entity();
    mario.pos.set(64, 180);
    mario.vel.set(2, -10);

    mario.draw = function drawMario(ctx) {
      marioSprite.draw('idle', ctx, this.pos.x, this.pos.y);
    };
    mario.update = function updateMario() {
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;
    };

    const spriteLayer = createSpriteLayer(mario);
    comp.layers.push(spriteLayer);
    const update = () => {
      comp.draw(ctx);
      mario.update();
      mario.vel.y += gravity;
      requestAnimationFrame(update);
    };
    update();
  }
);

continue at 9:40 seconds on 3rd video