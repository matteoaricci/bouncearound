function renderLogin() {
    let mainBox = document.getElementById("main")
    mainBox.innerText = ""
    
    let form = document.createElement('form')
    let logIn = document.createElement('h1')
    let name = document.createElement('input')
    let password = document.createElement('input')
    let submit = document.createElement('input')
    

    form.id = "login-form"
    logIn.innerText = "Login"
    name.type = "text"
    name.name = "name"
    name.placeholder = "Name"
    password.type = "text"
    password.name = "password"
    password.placeholder = "Password"
    submit.type = "submit"
    form.addEventListener("submit", processLogin)
    
    form.append(logIn, name, password, submit)
    mainBox.append(form)

}

function renderGuest() {
    console.log("skipping to guest account")
}

function processLogin(event) {
    event.preventDefault()
    console.log("logged in")
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
        .then(user => console.log(user))
        .catch(error => {
            alert("No user found with those credentials")
        })
    form.reset()
}


//     fetch("http://localhost:3000/monsters", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(monsterPayload)
//     }).then(r => r.json())
//     .then(monster => renderMonster(monster))
//     .catch(error => console.log(`Paul's error: ${error}`))
//     form.reset()
