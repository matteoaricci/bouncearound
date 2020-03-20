function renderNewUserForm(event) {
    let mainBox = document.getElementById("main")
    mainBox.innerText = ""

    let form = document.createElement('form')
    let makeAccount = document.createElement('h1')
    let name = document.createElement('input')
    let password = document.createElement('input')
    let submit = document.createElement('input')

    form.id = "create-user-form"
    makeAccount.innerText = "Create New Account"
    name.type = "text"
    name.name = "name"
    name.placeholder = "Username"
    password.type = "password"
    password.name = "password"
    password.placeholder = "Password"
    submit.type = "submit"
    form.addEventListener("submit", processCreateUser)
    
    form.append(makeAccount, name, password, submit)
    mainBox.append(form)
}

function processCreateUser(event) {
    event.preventDefault()
    console.log("creating new user....")

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
        .then(user => console.log(user))
        .catch(error => {
            alert("Username already taken or missing password")
        })
    form.reset()
}