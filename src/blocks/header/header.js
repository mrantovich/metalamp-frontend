// Work with burger.

const headerOverlay = document.querySelector('.header__overlay');
const burger = document.querySelector('.header__burger');

burger.addEventListener('click', toggleMenuActive);

function toggleMenuActive() {
    this.classList.toggle('is-active');
    headerOverlay.classList.toggle('is-active');
};