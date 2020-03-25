function renderLogin() {
    let navBar = document.getElementById("navbar")
    let mainBox = document.getElementById("main")
    mainBox.innerText = ""
   
    navBar.innerText = ""
    let form = document.createElement('form')
    let logIn = document.createElement('h1')
    let name = document.createElement('input')
    let password = document.createElement('input')
    let submit = document.createElement('input')
    let createButtonBox = document.createElement("div")
    let create = document.createElement('button')
    let arbitraryDiv = document.createElement('div')
    
    form.id = "login-form"
    logIn.innerText = "Login"
    name.type = "text"
    name.name = "name"
    name.id = "login-name"
    name.placeholder = "Username"
    password.type = "password"
    password.name = "password"
    password.placeholder = "Password"
    submit.type = "submit"
    submit.classList.add("submit-button")
    form.addEventListener("submit", processLogin)
    createButtonBox.id = "create-user-button"
    createButtonBox.className = 'btn btn-light'
    arbitraryDiv.className = 'text-center'
    arbitraryDiv.id = 'arbitrary-div'
    create.innerText = "Create New Account"
    create.addEventListener('click', renderNewUserForm)
    
    form.append(logIn, name, password, submit)
    createButtonBox.append(create)
    arbitraryDiv.append(createButtonBox)
    mainBox.append(form, arbitraryDiv)
}

function processLogin(event) {
    event.preventDefault()
    console.log("hit 1")
    let form = event.currentTarget
    let name = form.children.name.value
    let password = form.children.password.value

    let payload = {name: name, password: password}
    

    fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
            console.log(user)
            localStorage.setItem("userId", `${user.id}`)
            localStorage.setItem("userName", `${user.name}`)
            localStorage.setItem("userCurrentLevel", `${user.current_level}`)
            renderUserShowPage(user)
            } else {
            alert(`${user.message}`)
            form.reset()
            } 
        })
        .catch(error => {
            debugger
            alert("Sorry, there was a problem with the server!")
            form.reset()
        })
        console.log("hit 2")
}

function processLogout(event) {
    localStorage.clear()
    welcomePageSetup()
}
