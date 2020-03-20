document.addEventListener('DOMContentLoaded', () => {
    welcomePageSetup()
})

function welcomePageSetup() {
let loginBtn = document.getElementById("login-btn")
let guestBtn = document.getElementById("guest-btn")
let newUserBtn = document.getElementById("new-user-btn")

loginBtn.addEventListener("click", renderLogin)
guestBtn.addEventListener("click", renderGuest)
newUserBtn.addEventListener('click', renderNewUserForm)
}

