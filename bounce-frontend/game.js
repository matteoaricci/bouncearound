window.onload=function(){
    let gameAudio = document.getElementById('game-music')
    gameAudio.dataset.status = "on"
    // gameAudio.play()
  }

document.addEventListener("DOMContentLoaded", () =>{
    gameSetup()
})

function gameSetup() {
    let level = document.getElementById("level")
    level.className += 'text-center'
    level.innerText = `Level ${localStorage.getItem("playLevel")}`
    let audioDiv = document.getElementById('level-title')
    audioDiv.className = 'text-center'

    let mainBox = document.getElementById("main")
    let audioBtn = document.getElementById('audioBtnGame')
    
    audioBtn.innerText = "Audio"
    audioBtn.className = 'btn btn-light'
    audioDiv.append(audioBtn)
    
    audioBtn.addEventListener("click", pauseSoundGame)
}

function pauseSoundGame() {
    let gameAudio = document.getElementById("game-music")
    if (gameAudio.dataset.status === "on"){
        gameAudio.pause()
        gameAudio.dataset.status =  "off"
        
    }else {
        gameAudio.play()
        gameAudio.dataset.status = "on"
    }
}