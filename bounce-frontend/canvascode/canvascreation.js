const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let incrementValue = 50;

function createGrid() {
    for (let i = 1; i < canvas.offsetWidth; i += incrementValue) { 
        ctx.beginPath();
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.offsetHeight)
        ctx.stroke()
    }

    for (let i = 1; i < canvas.clientHeight; i+= incrementValue) {
        ctx.beginPath();
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.clientWidth, i)
        ctx.stroke()
    }
}
createGrid()