class Particle {
    constructor(x, y, radius, direction, color) {
        this.x = x
        this.y = y
        this.color = color


        this.radius = radius
        this.xSpeed = random(-5, 5)
        this.ySpeed = random(-5, 5)
    }


}