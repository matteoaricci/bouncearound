document.addEventListener('DOMContentLoaded', pageSetup)

function pageSetup() {
    document.addEventListener('mousedown', downClick)
    document.addEventListener('mouseup', upClick)
}

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight)
    canvas.parent('#main-canvas')
}


let blocks = []
let balls = []
let endPoints = []
let x = 0
let y = 0

levels.complete.balls.forEach(ball => balls.push(ball))
levels.complete.blocks.forEach(block => blocks.push(block))
levels.complete.endPoint.forEach(end => endPoints.push(end))
let clickData = []

function downClick() {

    let x1 = mouseX
    let y1 = mouseY

    clickData.push(Math.round(x1 / 25) * 25)
    clickData.push(Math.round(y1 / 25) * 25)
}

function upClick() {
    let x2 = mouseX
    let y2 = mouseY

    clickData.push(Math.round(x2 / 25) * 25)
    clickData.push(Math.round(y2 / 25) * 25)

    let newBlock = new Block(clickData[0], clickData[1], clickData[2], clickData[3], 0, '#FF1493')
    blocks.push(newBlock)
    clickData = []
}

function draw() {
    clear()

    background('rgba(0,0,0,0)');



    if (blocks.length == 0) {
        blocks.push(new Block(0, 0, 0, 0, 0, 0))
    }
    balls.forEach(function (ball) {
        ball.show()
        endPoints.forEach(function (point) {
            point.show()
            checkGoal(ball, point)
        })
        blocks.forEach(function (blo) {
            blo.show()
            checkCollide(ball, blo)
        });

        ball.x += ball.xSpeed;
        ball.y += ball.ySpeed;
    });
}