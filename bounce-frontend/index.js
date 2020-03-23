document.addEventListener('DOMContentLoaded', () => {
    homeScreen()
    let gameTitleHomeBtn = document.getElementById("game-title")
    gameTitleHomeBtn.addEventListener("click", homeScreen)
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
    let navBar = document.getElementById("navbar")
    let mainBox = document.getElementById("main")
    let enter = document.createElement("h1")
    let loginBtn = document.createElement("button")
    let guestBtn = document.createElement("button")

    navBar.innerText = ""
    mainBox.innerText = ""
    enter.id = "enter"
    enter.innerText = "ENTER"
    loginBtn.id = "login-btn"
    loginBtn.innerText = "Login"
    guestBtn.id = "guest-btn"
    guestBtn.innerText = "Continue As Guest"

    loginBtn.addEventListener("click", renderLogin)
    guestBtn.addEventListener("click", renderGuest)

    mainBox.append (enter, loginBtn, guestBtn)
}

