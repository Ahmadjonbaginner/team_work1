const btn = document.querySelector('.navbar__btn'),
    menu = document.querySelector('.navbar__menus');

btn.addEventListener('click', () => {
    btn.classList.toggle('click--btn')
    menu.classList.toggle('check--menus')
})