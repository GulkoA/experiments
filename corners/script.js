canvas = document.getElementById('canvas');
const scale = 2
canvas.width = window.innerWidth * scale;
canvas.height = window.innerHeight * scale;
ctx = canvas.getContext('2d');

dir = {x: 1, y: 1};

dot = {x: canvas.width/2, y: canvas.height/2};

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = 'red';
ctx.lineWidth = 9
let i = 0

setInterval(function() {
    length = Math.random() * window.innerWidth / 10
    ctx.beginPath()
    ctx.moveTo(dot.x, dot.y)
    ctx.lineTo(dot.x + dir.x * length, dot.y + dir.y * length)
    ctx.stroke()

    dot.x += dir.x * length
    dot.y += dir.y * length

    if (Math.random() < 0.5) {
        dir.x *= -1
    } else {
        dir.y *= -1
    }

    // console.log(dot.x, dot.y)
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

    // change color
    ctx.strokeStyle = 'hsl(' + i + ', 100%, 50%)'

    if (i > 360) {
        i = 0
    }
    i += 0.5
}, 0)