function loadUsername() {
    let usernameEl = document.querySelector('.player-name')
    usernameEl.textContent = localStorage.getItem("username") ?? 'Mystery player'
}

loadUsername()