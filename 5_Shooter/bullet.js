class Bullet {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.width = this.height = 4;
    this.angle = angle;
    this.speed = 8;
  }

  update() {
    let angleRadians = (this.angle * Math.PI) / 45;
    let newX = this.speed * Math.cos(angleRadians);
    let newY = this.speed * Math.sin(angleRadians);
    this.y -= newY;
    this.x -= newX;
  }

  draw() {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
