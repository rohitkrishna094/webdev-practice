class Enemy {
  constructor(x, y, speed, width) {
    this.x = x;
    this.y = y;
    this.width = this.height = width;
    this.speed = speed;
  }

  update() {
    this.y += this.speed;
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
