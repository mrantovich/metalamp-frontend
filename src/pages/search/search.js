const filterToggle = document.querySelector('.search__filter-toggle');
const filterMenu = document.querySelector('.search__filter-area');
const html = document.querySelector('html');
const body = document.querySelector('body');

filterToggle.addEventListener('click', toggleFilterMenu);

function toggleFilterMenu() {
    this.classList.toggle('is-active');
    filterMenu.classList.toggle('is-active');

    html.classList.toggle('is-locked');
    body.classList.toggle('is-locked');
}