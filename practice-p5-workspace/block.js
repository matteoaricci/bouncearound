class Block{
    constructor(x1, y1, x2, y2, direction){
        this.x1 = x1
        this.x2 = x2
        this.y1 = y1 
        this.y2 = y2 
        this.direction = direction
    }
    show(){
        stroke(255,20,147)
        line(this.x1, this.y1, this.x2, this.y2)
    }
}

