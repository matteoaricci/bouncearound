document.addEventListener('DOMContentLoaded', () => {
    let loginBtn = document.getElementById("login-btn")
    let guestBtn = document.getElementById("guest-btn")

    loginBtn.addEventListener("click", renderLogin)
    guestBtn.addEventListener("click", renderGuest)
})



