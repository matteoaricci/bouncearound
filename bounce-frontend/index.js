document.addEventListener('DOMContentLoaded', () => {
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
})

function welcomePageSetup() {
    let loginBtn = document.getElementById("login-btn")
    let guestBtn = document.getElementById("guest-btn")

    loginBtn.addEventListener("click", renderLogin)
    guestBtn.addEventListener("click", renderGuest)
}

