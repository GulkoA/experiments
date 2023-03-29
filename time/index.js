document.getElementById("time").textContent = Math.floor(Date.now() / 1000)

const muteButton = document.getElementById('muteButton')
const ticksA = [
    new Audio("ticks/tickA (1).wav"),
    new Audio("ticks/tickA (2).wav"),
    new Audio("ticks/tickA (3).wav"),
    new Audio("ticks/tickA (4).wav"),
    new Audio("ticks/tickA (5).wav"),
    new Audio("ticks/tickA (6).wav"),
]

const ticksB = [
    new Audio("ticks/tickB (1).wav"),
    new Audio("ticks/tickB (2).wav"),
    new Audio("ticks/tickB (3).wav"),
    new Audio("ticks/tickB (4).wav"),
]
var muted = false

muteButton.onclick = () => {
    muted = !muted
    if (muted)
        muteButton.textContent = 'unmute'
    else
        muteButton.textContent = 'mute'
}

var iterations = 0
setInterval(() => {
    if (!muted)
    {
        if (iterations % 2 == 0)
            pickRandom(ticksA).play()
        else
            pickRandom(ticksB).play()
    }
    document.getElementById("time").textContent = Math.floor(Date.now() / 1000)
    iterations++
}, 1000)


function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}


var curBlock = 0
const maxBlock = 8

function normalize() {
    let blocksScrolled = window.scrollY / document.getElementsByClassName("block")[0].clientHeight
    
    if (blocksScrolled > Math.round(blocksScrolled) + 0.05)
        curBlock = Math.ceil(blocksScrolled)
    else if (blocksScrolled < Math.round(blocksScrolled) - 0.05)
        curBlock = Math.floor(blocksScrolled)

    if (curBlock < 0)
        curBlock = 0
    else if (curBlock > maxBlock)
        curBlock = maxBlock

    console.debug(curBlock, blocksScrolled)
    document.getElementsByClassName("block")[curBlock].scrollIntoView() 
}

var timeoutNormalizer = setTimeout(normalize, 1000)

document.onscroll = () => {
    clearTimeout(timeoutNormalizer)
    timeoutNormalizer = setTimeout(normalize, 100)
        
}
