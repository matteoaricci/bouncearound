function loadGameHtml() {
    window.location.href = `game-level-${localStorage.getItem("playLevel")}.html`;
}

function loadGameHtmlGuest() {
    window.location.href = `game-level-${sessionStorage.getItem("playLevel")}.html`;
}

function returnHome() {
    window.location.href = "index.html";
}

function endScreen() {
    window.location.href = "end-screen.html";
}