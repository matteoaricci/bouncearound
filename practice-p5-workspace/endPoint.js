class Endpoint{
    constructor(x1, y1, w, h){
        this.x1 = x1 
        this.y1 = y1 
        this.w = w
        this.h = h
    }
    show(){
        rect(this.x1, this.y1, this.w, this.h)
        fill(255, 0, 0)
        stroke(255, 255, 255)
    }
}