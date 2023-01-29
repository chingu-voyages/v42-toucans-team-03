const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const rightMenu = document.getElementById('right-menu')


navToggle.addEventListener('click', () => {
    navToggle.classList.add('hidden')
    rightMenu.classList.add('show-right-menu')
})

navClose.addEventListener('click', () => {
    navToggle.classList.add('fade')
    navToggle.classList.remove('hidden')
    rightMenu.classList.remove('show-right-menu')
})
