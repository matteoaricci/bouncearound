function renderUserShowPage(user) {
    console.log(user)
    let mainBox = document.getElementById("main")
    let navBar = document.getElementById("navbar")
    let navHello = document.createElement("div")
    let navLevels = document.createElement("button")
    let navLogout = document.createElement("button")
    let playLevel1 = document.createElement("button")
    let playCurrentLevel = document.createElement("button")
    
    navBar.innerText = ""
    mainBox.innerText = ""
    navHello.innerText = `Welcome, ${user.name}`
    navHello.id = "nav-hello"
    navLevels.innerText = "Levels"
    navLevels.id = "nav-levels"
    navLogout.innerText = "Logout"
    navLogout.id = "nav-logout"
    navLogout.addEventListener("click", processLogout)
    playLevel1.innerText="Start New Game"
    playLevel1.addEventListener("click", () =>{
        localStorage.setItem("playLevel", 1)
        loadGameHtml()})
    playCurrentLevel.innerText="Continue Current Level"
    playCurrentLevel.addEventListener("click", () => {
        localStorage.setItem("playLevel", localStorage.getItem("userCurrentLevel"))
        loadGameHtml()})
    
    navBar.append(navHello, navLevels, navLogout)
    mainBox.append(playLevel1, playCurrentLevel)
}