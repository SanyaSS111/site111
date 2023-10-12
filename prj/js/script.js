let switchMode = document.getElementById("switchMode");
const isDark = localStorage.getItem("dark");
if (parseInt(isDark)) {
    let theme = document.getElementById("theme")
    theme.href = "css/dark-mode.css"
}

switchMode.onclick = function () {
    let theme = document.getElementById("theme")
    if (theme.getAttribute("href") == "css/style.css") {
        localStorage.setItem("dark", 1)
        theme.href = "css/dark-mode.css"
    } else {
        localStorage.setItem("dark", 0)
        theme.href = "css/style.css"
    }
}

let menu = document.getElementById("menu");



menu.onclick = function () {
    let menuNav = document.getElementById("menuNav");
    let menuLines = document.querySelectorAll(".menu-button__line");
    let close = document.getElementById("close");
    if (menuNav.style.opacity == "0") {
        menuNav.style.opacity = "1"
        for (const line of menuLines) {
            line.style.opacity = "0";
            line.style.display = "none";
        }
        close.style.display = "block"
    } else {
        menuNav.style.opacity = "0"
        for (const line of menuLines) {
            line.style.opacity = "1";
            line.style.display = "block";
        }
        close.style.display = "none"
    }
}