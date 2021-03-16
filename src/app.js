const hambButton = document.getElementById('hamb')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hambButton.addEventListener('click', toggleButton)