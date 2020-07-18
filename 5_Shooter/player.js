class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = this.height = 20;
    this.speed = 4;
    this.bullets = [];

    this.fireTime = 100;
    this.fireTimer = null;
  }

  draw() {
    ctx.fillStyle = "#573fde";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update(keys) {
    // up
    if (keys[38]) this.y -= this.speed;
    // down
    if (keys[40]) this.y += this.speed;
    // left
    if (keys[37]) this.x -= this.speed;
    //right
    if (keys[39]) this.x += this.speed;
    if (this.x < 0) this.x = 0;
    if (this.y < 0) this.y = 0;
    if (this.x + this.width > width) this.x = width - this.width;
    if (this.y + this.height > height) this.y = height - this.height;

    if (keys[90]) {
      let now = new Date().getTime();
      if (!this.fireTimer) {
        this.fire();
        this.fireTimer = setTimeout(() => {
          this.fireTimer = null;
        }, this.fireTime);
      }
    }
    this.updateBullets();
  }

  fire() {
    let diff = 15;
    let n = 100;
    for (let i = 0; i < n; i++) {
      this.bullets.push(new Bullet(this.x + this.width / 2, this.y, 90 - diff));
      this.bullets.push(new Bullet(this.x + this.width / 2, this.y, 90 + diff));
      diff *= 2;
    }
    this.bullets.push(new Bullet(this.x + this.width / 2, this.y, 90));
  }

  updateBullets() {
    for (let i = 0; i < this.bullets.length; i++) {
      this.bullets[i].update();
      this.bullets[i].draw();
      if (this.bullets[i].y < 0) {
        this.bullets.splice(i, 1);
      }
    }
  }
}
