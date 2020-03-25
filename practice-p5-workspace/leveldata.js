let ballStart = new Ball(50, 600, 15, 0, -15)

const levels = {
    levelone: {
        balls: [ballStart],
        blocks: [],
        endPoint: [new Endpoint(640, 20, 50, 50)],
    },

    leveltwo: {
        balls:[ballStart],
        blocks: [new Block(100, 650, 100, 100, 1, '#ff1493'),
                 new Block(400, 0, 400, 500, 1, '#ff1493')
                ],
        endPoint: [new Endpoint(1200, 600, 50, 50, 1)]
    },

    levelthree: {
        balls: [ballStart],
        blocks: [],
        endPoint:[]
    }
}