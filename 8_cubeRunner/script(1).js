var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var width = 1000, height = 500;

var keys = [];

var score1 = 0;
var score2 = 0;

var player1 = {
	x : 40,
	y : 40,
	width : 20,
	height : 20,
	speed: 4
};

var player2 = {
	x : width - 40,
	y : 40,
	width : 20,
	height : 20,
	speed : 4
};

var cube = {
	x : Math.random() * (width - 20),
	y : Math.random() * (height - 20),
	width : 20,
	height : 20
};

var speedCube = {
	x : Math.random() * (width - 20),
	y : Math.random() * (height - 20),
	width : 10,
	height : 10
};

var deleteCube1 = {
	x : Math.random() * (width - 20),
	y : Math.random() * (height - 20),
	width : 10,
	height : 10,
	speed : 4
};

var deleteCube2 = {
	x : Math.random() * (width - 20),
	y : Math.random() * (height - 20),
	width : 10,
	height : 10,
	speed : 4
};

var growCube = {
	x : Math.random() * (width - 20),
	y : Math.random() * (height - 20),
	width : 15,
	height : 15
};

window.addEventListener("keydown", function(e){
		keys[e.keyCode] = true;
	}, false);

window.addEventListener("keyup", function(e){
		delete keys[e.keyCode];
	}, false);

function game(){
	update();
	render();
}

/* up:38 down:40 left:37 right:39*/
/* w:87 s:83 a:65 d:68*/
function update(){
	//player 1
	if(keys[38]) player1.y -= player1.speed; 
	if(keys[40]) player1.y += player1.speed;
	if(keys[37]) player1.x -= player1.speed;
	if(keys[39]) player1.x += player1.speed;
	
	if(player1.x < 0) player1.x = 0;
	if(player1.y < 0) player1.y = 0;
	if(player1.x + player1.width > width) player1.x = width - player1.width;
	if(player1.y + player1.height > height) player1.y = height - player1.height;
	if(collision(player1, cube)) process1();
	if(collision(player1, speedCube)) processSpeed1();
	if(collision(player1, growCube)) processGrow1();
	if(collision(player1, deleteCube1)) processReset1();
	//move deleteCube1
	moveCube(player1, deleteCube1);
	if(collision(player2, deleteCube1)) resetDeleteCube(deleteCube1);
	if(collision(cube, deleteCube1)) resetDeleteCube(deleteCube1);
	if(edgeCollide(deleteCube1)) resetDeleteCube(deleteCube1);
	
	//player 2
	if(keys[87]) player2.y -= player2.speed; 
	if(keys[83]) player2.y += player2.speed;
	if(keys[65]) player2.x -= player2.speed;
	if(keys[68]) player2.x += player2.speed;
	
	if(player2.x < 0) player2.x = 0;
	if(player2.y < 0) player2.y = 0;
	if(player2.x + player2.width > width) player2.x = width - player2.width;
	if(player2.y + player2.height > height) player2.y = height - player2.height;
	if(collision(player2, cube)) process2();
	if(collision(player2, speedCube)) processSpeed2();
	if(collision(player2, growCube)) processGrow2();
	if(collision(player2, deleteCube2)) processReset2();
	//move deleteCube1
	moveCube(player2, deleteCube2);
	if(collision(player1, deleteCube2)) resetDeleteCube(deleteCube2);
	if(collision(cube, deleteCube2)) resetDeleteCube(deleteCube2);
	if(edgeCollide(deleteCube2)) resetDeleteCube(deleteCube2);
}

function edgeCollide(cube){
	var status = false;
	if(cube.x <= 1 || cube.y <= 1 || cube.x + cube.width >= width-1 || cube.y + cube.height >= height-1){
		status = true;
	}
	return status;
}

function resetDeleteCube(cube){
	cube.speed = 1;
	cube.x = Math.random() * (width - 20);
	cube.y = Math.random() * (height - 20);
}

function moveCube(player, deleteCube){
	if(deleteCube.x <= player.x && deleteCube.y < player.y){
		deleteCube.speed = player.speed - 3;
		deleteCube.width = player.width - 20;
		deleteCube.height = player.height - 20;
		if(deleteCube.width < 10 || deleteCube.height < 10){
			deleteCube.width = 10;
			deleteCube.height = 10;
		}
		if(player.speed % 2 !== 0) deleteCube.speed--;
		deleteCube.x += deleteCube.speed;
		deleteCube.y += deleteCube.speed;
	}
	if(deleteCube.x > player.x && deleteCube.y <= player.y){
		deleteCube.speed = player.speed - 3;
		deleteCube.width = player.width - 20;
		deleteCube.height = player.height - 20;
		if(deleteCube.width < 10 || deleteCube.height < 10){
			deleteCube.width = 10;
			deleteCube.height = 10;
		}
		if(player.speed % 2 !== 0) deleteCube.speed--;
		deleteCube.x -= deleteCube.speed;
		deleteCube.y += deleteCube.speed;
	}
	
	if(deleteCube.x >= player.x && deleteCube.y > player.y){
		deleteCube.speed = player.speed - 3;
		deleteCube.width = player.width - 20;
		deleteCube.height = player.height - 20;
		if(deleteCube.width < 10 || deleteCube.height < 10){
			deleteCube.width = 10;
			deleteCube.height = 10;
		}
		if(player.speed % 2 !== 0) deleteCube.speed--;
		deleteCube.x -= deleteCube.speed;
		deleteCube.y -= deleteCube.speed;
	}
	if(deleteCube.x < player.x && deleteCube.y >= player.y){
		deleteCube.speed = player.speed - 3;
		deleteCube.width = player.width - 20;
		deleteCube.height = player.height - 20;
		if(deleteCube.width < 10 || deleteCube.height < 10){
			deleteCube.width = 10;
			deleteCube.height = 10;
		}
		if(player.speed % 2 !== 0) deleteCube.speed--;
		deleteCube.x += deleteCube.speed;
		deleteCube.y -= deleteCube.speed;
	}
}

function render(){
	context.clearRect(0, 0, width, height);
	
	context.fillStyle = "blue";
	context.fillRect(player1.x, player1.y, player1.width, player1.height);
	context.fillRect(deleteCube1.x, deleteCube1.y, deleteCube1.width, deleteCube1.height);
	
	context.fillStyle = "green";
	context.fillRect(player2.x, player2.y, player2.width, player2.height);
	context.fillRect(deleteCube2.x, deleteCube2.y, deleteCube2.width, deleteCube2.height);
	
	context.fillStyle = "red";
	context.fillRect(cube.x, cube.y, cube.width, cube.height);
	
	context.fillStyle = "white";
	context.fillRect(speedCube.x, speedCube.y, speedCube.width, speedCube.height);
	
	context.fillStyle = "black";
	context.fillRect(growCube.x, growCube.y, growCube.width, growCube.height);
	
	context.fillStyle = "black";
	context.font = "bold 20px Garamond";
	context.fillText(score1, 10, 30);
	context.fillText(score2, width - 20, 30);
}

function processGrow1(){
	player1.width += 7;
	player1.height += 7;
	if(player1.height > 50 || player1.width > 50) {
		player1.width = 50;
		player1.height = 50;
	}
	growCube.x = Math.random() * (width - 20);
	growCube.y = Math.random() * (height - 20);
}

function processGrow2(){
	player2.width += 7;
	player2.height += 7;
	if(player2.height > 50 || player2.width > 50) {
		player2.width = 50;
		player2.height = 50;
	}
	growCube.x = Math.random() * (width - 20);
	growCube.y = Math.random() * (height - 20);
}

function processSpeed1(){
	player1.speed++;
	if(player1.speed > 10) player1.speed = 10;
	speedCube.x = Math.random() * (width - 20);
	speedCube.y = Math.random() * (height - 20);
}

function processSpeed2(){
	player2.speed++;
	if(player2.speed > 10) player2.speed = 10;
	speedCube.x = Math.random() * (width - 20);
	speedCube.y = Math.random() * (height - 20);
}

function processReset1(){
	player1.speed = 4;
	player1.width = 20;
	player1.height = 20;
	deleteCube1.x = Math.random() * (width - 20);
	deleteCube1.y = Math.random() * (height - 20);
}

function processReset2(){
	player2.speed = 4;
	player2.width = 20;
	player2.height = 20;
	deleteCube2.x = Math.random() * (width - 20);
	deleteCube2.y = Math.random() * (height - 20);
}

function process1(){
	score1++;
	cube.x = Math.random() * (width - 20);
	cube.y = Math.random() * (height - 20);
}

function process2(){
	score2++;
	cube.x = Math.random() * (width - 20);
	cube.y = Math.random() * (height - 20);
}

function collision(first, second){
	return !(first.x > second.x + second.width  ||
			 first.x + first.width < second.x   ||
			 first.y > second.y + second.height ||
			 first.y + first.height < second.y);
}

setInterval(function(){
		game();
	}, 1000/60);