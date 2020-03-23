document.addEventListener('DOMContentLoaded', pageSetup)

function pageSetup() {
    let theCanvas = document.getElementById('defaultCanvas0')
    document.addEventListener('mousedown', downClick)
    document.addEventListener('mouseup', upClick)
}

function setup() {
    canvas = createCanvas(650, 650);
}

let blocks = []
let balls = []
let x = 0
let y = 0
let xspeed = 20;
let yspeed = 10;
let z = 11
let ballSpeed = 5;


let firstBall = new Ball(300, 350, 4, 5, z);
let secondBall = new Ball(200, 250, 29, ballSpeed, z);
let firstBlock = new Block(200, 200, 400, 200, 0, '#FF1493')
let secondBlock = new Block(200, 400, 400, 400, 0, '#FF1493')
let thirdBlock = new Block(200, 300, 400, 300, 0, '#FF1493')

blocks.push(firstBlock)
blocks.push(secondBlock)
blocks.push(thirdBlock)

balls.push(firstBall)
balls.push(secondBall)
let clickData = []

function downClick() {

    let x1 = mouseX
    let y1 = mouseY

    clickData.push(Math.round(x1 / 50) * 50)
    clickData.push(Math.round(y1 / 50) * 50)
}

function upClick() {
    let x2 = mouseX
    let y2 = mouseY

    clickData.push(Math.round(x2 / 50) * 50)
    clickData.push(Math.round(y2 / 50) * 50)

    let newBlock = new Block(clickData[0], clickData[1], clickData[2], clickData[3], 0, '#FF1493')
    blocks.push(newBlock)
    clickData = []
}

function draw() {

    background(0);
    
    if (blocks.length == 0) {
        blocks.push(new Block(0, 0, 0, 0, 0, 0))
    }

    balls.forEach(function(ball) {
        ball.show()
        blocks.forEach(function(blo){
            blo.show()
            checkCollide(ball, blo)
        });
        
        ball.x += ball.speed;
        ball.y += ball.speed;
    });
}