// Work with burger.

const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');

burger.addEventListener('click', toggleMenuActive);

function toggleMenuActive() {
    this.classList.toggle('is-active');
    header.classList.toggle('is-active');
};