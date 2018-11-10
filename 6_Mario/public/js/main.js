import { loadLevel } from './loaders.js';
import { loadBackgroundSprites, loadMarioSprite } from './sprites.js';
import Compositor from './Compositor.js';
import { createBackgroundLayer } from './layers.js';

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');

const createSpriteLayer = (sprite, pos) => {
  const drawSpriteLayer = ctx => {
    for (let i = 0; i < 20; i++) {
      sprite.draw('idle', ctx, pos.x + i * 16, pos.y);
    }
    sprite.draw('idle', ctx, pos.x, pos.y);
  };
  return drawSpriteLayer;
};

Promise.all([loadMarioSprite(), loadBackgroundSprites(), loadLevel('1-1')]).then(
  ([marioSprite, backgroundSprites, level]) => {
    const comp = new Compositor();
    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
    comp.layers.push(backgroundLayer);

    const pos = { x: 0, y: 0 };

    const spriteLayer = createSpriteLayer(marioSprite, pos);
    comp.layers.push(spriteLayer);

    const update = () => {
      comp.draw(ctx);
      pos.x += 2;
      pos.y += 2;
      requestAnimationFrame(update);
    };
    update();
  }
);
