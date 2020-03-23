let canvas = document.createElement('canvas')
canvas.id = 'game-canvas'

function setup() {
  canvas = createCanvas(650, 650);
}

let blocks = []

let x = 300;
let y = 300;
let xspeed = 20;
let yspeed = 50;
let z = 0
let direction = 1;


let newBall = new Ball(x, y, 10, 0, z);
let firstBlock = new Block(200, 200, 400, 200, 0)
let secondBlock = new Block(200, 400, 400, 400, 0)
let thirdBlock = new Block(200, 300, 400, 300, 0)

blocks.push(firstBlock)
blocks.push(secondBlock)
blocks.push(thirdBlock)
let px = newBall.x
let py = newBall.y

function draw() {
  let px = newBall.x
  let py = newBall.y
  background(0);
  newBall.show();
  newBall.x = x;
  newBall.y = y
  newBall.wallCollide()
  for (let i = 0; i < blocks.length; i++) {
    blo = blocks[i]
    blo.show()
    newBall.checkCollide(blo)
  }
  x += xspeed
  y += yspeed
}