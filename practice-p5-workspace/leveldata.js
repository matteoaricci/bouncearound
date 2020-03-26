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
                 new Block(450, 0, 450, 500, 1, '#ff1493'),
                 new Block(800, 650, 800, 100, 1, '#ff1493'),
                ],
        endPoint: [new Endpoint(1200, 600, 50, 50, 1)]
    },

    levelthree: {
        balls: [ballStart],
        blocks: [new Block(100, 650, 100, 100, 1, '#ff1493'),
                new Block(450, 0, 450, 500, 1, '#ff1493'),
                new Block(800, 650, 800, 100, 1, '#ff1493')],
        endPoint:[new Endpoint(1200, 325, 50, 50, 1)]
    },

    levelfour: {
        balls: [ballStart],
        blocks: [new Block(100, 650, 100, 100, 1, '#ff1493'),
                new Block(450, 0, 450, 500, 1, '#ff1493'),
                new Block(800, 650, 800, 100, 1, '#ff1493')],
        endPoint: [new Endpoint(100, 100, 50, 50, 1)]
    },

    levelfive: {
        balls: [ballStart],
        blocks: [],
        endPoint: [new Endpoint(100, 100, 50, 50, 1)]
    },

    complete: {
        balls: [new Ball(window.innerWidth/2, window.innerHeight, 15, 0, -30)],
        blocks: [],
        endPoint: []
    }
}