class Ball {
    constructor(x, y, radius, xSpeed, ySpeed) {
        this.x = x
        this.y = y
        this.radius = radius
        this.xSpeed = xSpeed
        this.ySpeed = ySpeed
        this.speed = 0
        this.dnorm = {}
        this.ref = {}

    }
    show() {
        stroke(255, 255, 255)
        strokeWeight(4)
        fill(255, 255, 255)
        ellipse(this.x, this.y, this.radius, this.radius)
    }
}

function checkCollide(ball, block ) {
    if (ball.x > width && ball.xSpeed > 0) {
        ball.xSpeed = -ball.xSpeed;
    } else if (ball.x < 0 && ball.xSpeed < 0) {
        ball.xSpeed = -ball.xSpeed
    } else if (ball.y > height && ball.ySpeed > 0) {
        ball.ySpeed = -ball.ySpeed
    } else if (ball.y < 0 && ball.ySpeed < 0) {
        ball.ySpeed = -ball.ySpeed
    }
    var hit = collideLineCircle(block.x1, block.y1, block.x2, block.y2, ball.x, ball.y, ball.radius);
    if (hit) {
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
        block.color = (randomColor)
        
        calculateVectors(ball, block)
    }
}
// let randomNote = Math.floor(Math.random() * 440)
// let beep = new p5.Oscillator(randomNote, beepType)
// beep.start()
// beep.stop(0.5)
// let arr = ['sin', 'sawtooth', 'triangle', 'cos']
// let beepType = arr[Math.random(4)]

function calculateVectors(ball, block) {
    //create line vectors
    line.vec = {}
    line.vec.x = block.x2 - block.x1 
    line.vec.y = block.y2 - block.y1 
    //get the normal vector
    line.len = Math.sqrt(line.vec.x ** 2 + line.vec.y ** 2)
    line.vnorm = {};
    line.vnorm.x = line.vec.x / line.len;
    line.vnorm.y = line.vec.y / line.len
    //normalise ball data
    ball.speed = Math.sqrt(ball.xSpeed ** 2 + ball.ySpeed ** 2)
    ball.dnorm.x = ball.xSpeed / ball.speed 
    ball.dnorm.y = ball.ySpeed / ball.speed
    //reflection using vectors
    let dd = (ball.dnorm.x * line.vnorm.x + ball.dnorm.y * line.vnorm.y) * 2
    ball.ref.x = line.vnorm.x * dd - ball.dnorm.x 
    ball.ref.y = line.vnorm.y * dd - ball.dnorm.y 
    // calculte new ball speeds
    let len = Math.sqrt(ball.ref.x * ball.ref.x + ball.ref.y * ball.ref.y)
    ball.xSpeed = (ball.ref.x / len) * ball.speed
    ball.ySpeed = (ball.ref.y / len) * ball.speed
}

function checkGoal(ball, point){
    let hit = collideRectCircle(point.x1, point.y1, point.w, point.h, ball.x, ball.y, ball.radius * 2)
    if (hit) {
        // ball.xSpeed = 0
        // ball.ySpeed = 0
        setTimeout(() => {
            ball.xSpeed = 0
            ball.ySpeed = 0
            blocks = []
        }, 2000);
    }
}