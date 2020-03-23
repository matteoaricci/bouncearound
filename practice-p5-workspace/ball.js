class Ball {
    constructor(x, y, radius, speed, direction){
        this.x = x 
        this.y = y 
        this.radius = radius
        this.speed = speed 
        this.direction = direction
    }

    show(){
        stroke(100, 200, 200)
        strokeWeight(4)
        // fill(255, 255, 255)
        noFill()
        ellipse(this.x, this.y, this.radius, this.radius)
    }

    
}

function checkCollide(ball, block){
   var hit = collideLineCircle(block.x1, block.y1, block.x2, block.y2, ball.x, ball.y, ball.radius)
   if (hit) {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
        ball.speed = -ball.speed
        // let beep = new p5.Oscillator(200, 'triangle')
        // beep.start()
        // beep.stop(0.1)
        block.color = (randomColor)
        console.log(block.color)
    }
    if (ball.x >= canvas.width || ball.x <= 0) {
        ball.speed = -ball.speed
    }

    if (ball.y >= canvas.height || ball.y <= 0) {
        ball.speed = -ball.speed
    }
}