const canvas = document.getElementById("myCanvas");
const horizDiv = document.getElementById('grid-horizontal')
const vertDiv = document.getElementById('grid-vertical')
let ctx = canvas.getContext("2d");
let incrementValue = 50;

function createGrid(color = '#000000') {

    for (let i = 1; i < canvas.offsetWidth; i += incrementValue) { 
        let newDiv = document.createElement('div')
        ctx.beginPath();
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.offsetHeight)
        newDiv.append(ctx.stroke())
        newDiv.className = 'horizontal-line'
        newDiv.id = `h-${(i / 50) + 0.98}`
        horizDiv.append(newDiv)
        ctx.strokeStyle = color
    } 

    for (let i = 1; i < canvas.clientHeight; i+= incrementValue) {
        let newDiv = document.createElement('div')
        ctx.beginPath();
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.clientWidth, i)
        newDiv.append(ctx.stroke())
        newDiv.className = 'vertical-line'
        newDiv.id = `v-${(i / 50) + 0.98}`
        vertDiv.append(newDiv)
        ctx.strokeStyle = color
    }
}
createGrid()