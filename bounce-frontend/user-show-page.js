function renderUserShowPage(user) {
    console.log(user)
    let mainBox = document.getElementById("main")
    let navBar = document.getElementById("navbar")
    let navHello = document.createElement("div")
    let navLevels = document.createElement("button")
    let navLogout = document.createElement("button")
    
    navBar.innerText = ""
    mainBox.innerText = ""
    navHello.innerText = `Welcome, ${user.name}`
    navHello.id = "nav-hello"
    navLevels.innerText = "Levels"
    navLevels.id = "nav-levels"
    navLogout.innerText = "Logout"
    navLogout.id = "nav-logout"
    navLogout.addEventListener("click", processLogout)


    navBar.append(navHello, navLevels, navLogout)



}