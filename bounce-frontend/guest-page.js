function renderGuest() {
    let mainBox = document.getElementById("main")
    let navBar = document.getElementById("navbar")
    let navHello = document.createElement("div")
    let navLogin = document.createElement("button")
    let playBtn = document.createElement("button")
   
    mainBox.innerText = ""
    mainBox.className = 'text-center'
    navBar.className = 'text-center'
    navHello.innerText = `Welcome, Gamer`
    navHello.id = "nav-hello"
    navLogin.innerText = "Login"
    navLogin.id = "nav-login"
    navLogin.className = 'btn btn-light'
    navLogin.addEventListener("click", renderLogin)
    playBtn.innerText="Play"
    playBtn.id = 'play-game-btn'
    playBtn.className = 'btn btn-light'
    playBtn.addEventListener("click", () => {
        localStorage.setItem("playLevel", 1)
        loadGameHtml()
    })
    
    mainBox.append(playBtn)
    navBar.append(navHello, navLogin)
}