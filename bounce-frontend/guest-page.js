function renderGuest() {
    let mainBox = document.getElementById("main")
    let navBar = document.getElementById("navbar")
    let navHello = document.createElement("div")
    let navLogin = document.createElement("button")
   
    mainBox.innerText = ""
    navHello.innerText = `Welcome, Gamer`
    navLogin.innerText = "Login"
    navLogin.id = "nav-login"
    navLogin.addEventListener("click", renderLogin)

    navBar.append(navHello, navLogin)
}