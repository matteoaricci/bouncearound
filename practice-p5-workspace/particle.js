class Star {
    constructor(x, y){
        this.x = x
        this.y = y
    }

    show(){
        noStroke()
        fill(255)
        ellipse(this.x, this.y, 16, 16)
    }

}