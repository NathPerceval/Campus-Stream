const hamBar = document.getElementById('hamBar');
const close = document.getElementById('close');
const nav = document.getElementById('mainNavbar');

if (hamBar) {
    hamBar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}