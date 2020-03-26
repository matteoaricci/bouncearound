window.onload=function(){
    let introAudio = document.createElement('audio')
    let body = document.getElementById('body')
    introAudio.src = "../bounce-frontend/assets/audio/gametheme.mp3"
    introAudio.id = "intro-audio"
    introAudio.loop = "loop"
    introAudio.dataset.status = "on"
    body.append(introAudio)
    introAudio.play()
  }

document.addEventListener('DOMContentLoaded', () => {
    homeScreen()
    let gameTitleHomeBtn = document.getElementById("game-title")
    gameTitleHomeBtn.addEventListener("click", () => {
        window.location.href = "index.html";
        homeScreen})
})

function homeScreen() {
    if (localStorage.getItem("userId")) {
        let payload = {id: `${localStorage.getItem("userId")}`}
        fetch('http://localhost:3000/user/finduser', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
         })
        .then(response => response.json())
        .then(user => renderUserShowPage(user))
    }
    else {
    welcomePageSetup()
    }
}

function welcomePageSetup() {
    let newSpan = document.createElement('span')
    let navBar = document.getElementById("navbar")
    let mainBox = document.getElementById("main")
    let enter = document.createElement("h1")
    let loginBtn = document.createElement("button")
    let guestBtn = document.createElement("button")
    let audioBtn = document.createElement("button")
    let newDiv = document.createElement('div')
    
    navBar.innerText = ""
    mainBox.innerText = ""
    enter.id = "enter"
    enter.innerText = "ENTER"
    loginBtn.id = "login-btn"
    loginBtn.className = 'btn btn-light'
    loginBtn.innerText = "Login"
    guestBtn.id = "guest-btn"
    guestBtn.className = 'btn btn-light'
    newDiv.className = 'login-buttons'
    guestBtn.innerText = "Continue As Guest"
    audioBtn.innerText = "Audio"
    audioBtn.id = "audio-btn"
    audioBtn.className = 'btn btn-light'
    audioBtn.addEventListener("click", pauseSound)
    newDiv.append(loginBtn, guestBtn, audioBtn)

    loginBtn.addEventListener("click", renderLogin)
    guestBtn.addEventListener("click", renderGuest)
    newSpan.append(enter)
    mainBox.append (newSpan, newDiv)
    flickerText(`${enter.id}`)
}

function pauseSound() {
    let introAudio = document.getElementById("intro-audio")
    console.log(introAudio.dataset.status)
    if (introAudio.dataset.status === "on"){
        introAudio.pause()
        introAudio.dataset.status =  "off"
        console.log(introAudio.dataset.status)
    }else {
        introAudio.play()
        introAudio.dataset.status = "on"
        console.log(introAudio.dataset.status)
    }
}