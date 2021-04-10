const container = document.getElementsByClassName('container')[0]
const navlinks = document.getElementsByClassName('nav-links')[0]

container.addEventListener('click', () => {
    nav-links.classList.toggle('active')
})