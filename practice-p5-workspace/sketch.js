let canvas = document.createElement('canvas')
canvas.id = 'game-canvas'

function setup() {
  canvas = createCanvas(650, 650);
}

let blocks = []
let balls = []

let x = 0 
let y = 0
let xspeed = 20;
let yspeed = 10;
let z = 0
let direction = 1;


let firstBall = new Ball(300, 350, 10, 5, z);
let secondBall = new Ball(200, 250, 29, 5, z);
let firstBlock = new Block(200, 200, 400, 200, 0)
let secondBlock = new Block(200, 400, 400, 400, 0)
let thirdBlock = new Block(200, 300, 400, 300, 0)

blocks.push(firstBlock)
blocks.push(secondBlock)
blocks.push(thirdBlock)

balls.push(firstBall)
balls.push(secondBall)

function draw() {
  background(0);

  balls.forEach(ball => {
    ball.show()
  });
  for (let i = 0; i < balls.length; i++) {
    ball = balls[i];
    for (let i = 0; i < blocks.length; i++) {
      blo = blocks[i]
      blo.show()
      checkCollide(ball, blo)
    }
    ball.x += ball.speed;
    ball.y += ball.speed;
  }
}