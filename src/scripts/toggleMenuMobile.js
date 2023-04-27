const btnMenuMobile = document.getElementById('btnMenuMobile');
const sobre = document.getElementById('menu-sobre');
const experiencia = document.getElementById('menu-experiencia');
const competencias = document.getElementById('menu-competencias');
const logo = document.getElementById('menu-logo');

function toggleMenu(event) {
    if (event.type === 'touchstart') {
        event.preventDefault();
    }
    const nav = document.getElementById('menu-mobile');
    nav.classList.toggle('active-menu');
}

btnMenuMobile.addEventListener('click', toggleMenu);
btnMenuMobile.addEventListener('touchstart', toggleMenu);

sobre.addEventListener('click', toggleMenu);
experiencia.addEventListener('click', toggleMenu);
competencias.addEventListener('click', toggleMenu);
logo.addEventListener('click', toggleMenu);