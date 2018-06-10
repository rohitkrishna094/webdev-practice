let canvas = document.getElementById('myCanvas');
let width = canvas.width;
let height = canvas.height;
let ctx = canvas.getContext('2d');
let fps = 60;

let keys = [];
let keyCodes = {
    'left': 37,
    'up': 38,
    'right': 39,
    'down': 40,
    'shoot': 90,
};

let player = {
    pos: { x: width / 2, y: height - 40 },
    vel: 20,
    dim: { width: 20, height: 20 },
    update: function () {
        if (keys[keyCodes.left]) {
            let res = boundCheck({ x: this.pos.x - this.vel + 1, y: this.pos.y }, { width: this.dim.width, height: this.dim.height });
            if (res === 'none') this.pos.x -= this.vel;
            else this.pos.x = 0;
        }
        if (keys[keyCodes.up]) {
            let res = boundCheck({ x: this.pos.x, y: this.pos.y - this.vel }, { width: this.dim.width, height: this.dim.height });
            if (res === 'none') this.pos.y -= this.vel;
            else this.pos.y = 0;
        }
        if (keys[keyCodes.right]) {
            let res = boundCheck({ x: this.pos.x + this.vel, y: this.pos.y }, { width: this.dim.width, height: this.dim.height });
            if (res === 'none') this.pos.x += this.vel;
            else this.pos.x = width - this.dim.width;
        }
        if (keys[keyCodes.down]) {
            let res = boundCheck({ x: this.pos.x, y: this.pos.y + this.vel }, { width: this.dim.width, height: this.dim.height });
            if (res === 'none') this.pos.y += this.vel;
            else this.pos.y = height - this.dim.height;
        }
    },
    draw: function () {
        ctx.fillStyle = "#0263ff";
        ctx.fillRect(this.pos.x, this.pos.y, this.dim.width, this.dim.height);
    }
}

let bullet = {
    pos: { x: player.pos.x, y: player.pos.y },
    vel: 4,
    dim: { width: 5, height: 5 },
    update: function () {
        if (keys[keyCodes.shoot]) {
            this.pos.y -= this.vel;
        }
        let res = boundCheck(this.pos, this.dim);

    },
    draw: function () {
        ctx.fillStyle = "#eaf2ff";
        ctx.fillRect(this.pos.x, this.pos.y, this.dim.width, this.dim.height);
    },
}


// dim is the dimensions of the object
function boundCheck(pos, dim) {
    if (pos.y < 0) return 'top';
    if (pos.y > height - dim.height) return 'bottom';
    if (pos.x < 0) return 'left';
    if (pos.x > width - dim.width) return 'right';
    return 'none'; // just there so js wont complain
}

window.addEventListener('keydown', function (e) {
    keys[e.keyCode] = true;
}, false);

window.addEventListener('keyup', function (e) {
    delete keys[e.keyCode];
}, false);

function update() {
    player.update();
    bullet.update();
}

function draw() {
    player.draw();
    bullet.draw();
}

function game() {
    clear();

    update();
    draw();
}

function clear() {
    ctx.fillStyle = "#777777";
    ctx.fillRect(0, 0, width, height);
}

setInterval(game, 1000 / fps);