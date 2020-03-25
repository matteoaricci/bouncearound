function renderNewUserForm(event) {
    let mainBox = document.getElementById("main")
    mainBox.innerText = ""

    let form = document.createElement('form')
    let makeAccount = document.createElement('h1')
    let name = document.createElement('input')
    let password = document.createElement('input')
    let submit = document.createElement('input')

    form.id = "create-user-form"
    makeAccount.id = "create-title"
    makeAccount.innerText = "Create New Account"
    name.type = "text"
    name.name = "name"
    name.placeholder = "Username"
    name.id = "creat-user-name"
    password.type = "password"
    password.name = "password"
    password.id = "create-password"
    password.placeholder = "Password"
    submit.type = "submit"
    submit.classList.add("submit-button")
    form.addEventListener("submit", processCreateUser)
    
    form.append(makeAccount, name, password, submit)
    mainBox.append(form)
}

function processCreateUser(event) {
    event.preventDefault()

    let form = event.currentTarget
    let name = form.children.name.value
    let password = form.children.password.value

    let payload = {name: name, password: password}

    fetch('http://localhost:3000/users', {
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
            }
            else {
            alert(`${user.message}`)
            } 
        })
        .catch(error => {
            alert("Sorry, there was a problem with the server!")
        })
    form.reset()
}