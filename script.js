function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove("menu--open")
}

let openMenuIcon = document.getElementById("open-menu")
openMenuIcon.addEventListener("click", openMenu)