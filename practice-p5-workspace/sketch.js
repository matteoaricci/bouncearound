document.addEventListener('DOMContentLoaded', pageSetup)

function pageSetup() {
    document.addEventListener('mousedown', downClick)
    document.addEventListener('mouseup', upClick)
}

function setup() {
    canvas = createCanvas(1250, 650);
}
  

let blocks = []
let balls = []
let endPoints = []
let x = 0
let y = 0




levels.levelone.balls.forEach(ball => balls.push(ball))
levels.levelone.blocks.forEach(block => blocks.push(block))
levels.levelone.endPoint.forEach(end => endPoints.push(end))
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
        endPoints.forEach(function(point){
            point.show()
            checkGoal(ball, point)
        })

        ball.x += ball.xSpeed;
        ball.y += ball.ySpeed;
    });
}