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

    checkCollide(){
       var hit = collideLineCircle(block.x1, block.y1, block.x2, block.y2, this.x, this.y, this.radius)
        
        if (hit != true && this.x >= canvas.width || this.x <= 0) {
            xspeed = -xspeed
            } 
        if (hit != true && this.y >= canvas.height || this.y <= 0) {
           yspeed = -yspeed
            }

        if (hit) {
            yspeed = -yspeed
            let beep = new p5.Oscillator(100, 'triangle')
            beep.start()
            beep.stop(0.1)
        }
    }
}
