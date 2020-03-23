let canvas = document.createElement('canvas')
canvas.id = 'game-canvas'

function setup() {
  canvas = createCanvas(650, 650);
}

let blocks = []

let x = 300;
let y = 300;
let xspeed = 0;
let yspeed = 50;
let z = 0
let direction = 1;


let newBall = new Ball(x, y, 10, 0, z);
let firstBlock = new Block(200, 200, 400, 200, 0)
let secondBlock = new Block(100, 640, 500, 640, 0)

blocks.push(firstBlock)
// blocks.push(secondBlock)
let px = newBall.x
let py = newBall.y

function draw() {
  let px = newBall.x
  let py = newBall.y
  background(0);
  newBall.show();
  newBall.x = x;
  newBall.y = y
  for (let i = 0; i < blocks.length; i++) {
    block = blocks[i]
    block.show()
    newBall.checkCollide()
  }
  x += xspeed
  y += yspeed
}