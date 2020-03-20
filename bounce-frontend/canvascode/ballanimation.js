
let x = canvas.width/2;
let y = canvas.height-30;

let dx = 2
let dy = -2

let ballRadius = 10

let color = "#0095DD"


function draw() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        dy = -dy;
    }

    x += dx;
    y += dy;
}

setInterval(draw, 10)