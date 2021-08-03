// Work with burger.

const headerOverlay = document.querySelector('.header__overlay');
const burger = document.querySelector('.header__burger');

const html = document.querySelector('html');
const body = document.querySelector('body');

burger.addEventListener('click', toggleMenuActive);

function toggleMenuActive() {
    this.classList.toggle('is-active');
    headerOverlay.classList.toggle('is-active');

    html.classList.toggle('is-locked');
    body.classList.toggle('is-locked');
};