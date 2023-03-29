canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

dot = {x: canvas.width/2, y: canvas.height/2}
dir = {x: 1, y: 1}

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = 'white';
ctx.fillStyle = 'green';
ctx.lineWidth = 9
length = 100

let i = 0 
setInterval(function() {
    ctx.beginPath()
    ctx.moveTo(dot.x, dot.y)
    ctx.lineTo(dot.x + dir.x * length, dot.y + dir.y * length)
    ctx.stroke()
    dot.x += dir.x * length
    dot.y += dir.y * length

    if (dot.x < 0) {
        dot.x = 0
        dir.x *= -1
    }
    if (dot.x > canvas.width) {
        dot.x = canvas.width
        dir.x *= -1
    }
    if (dot.y < 0) {
        dot.y = 0
        dir.y *= -1
    }
    if (dot.y > canvas.height) {
        dot.y = canvas.height
        dir.y *= -1
    }

    i++
    // change color
    ctx.strokeStyle = 'hsl(' + i + ', 100%, 50%)'

    if (i > 360) {
        i = 0
    }
}, 10)