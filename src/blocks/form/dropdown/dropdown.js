const dropdownField = document.querySelector('.dropdown__field');

dropdownField.addEventListener('click', makeDropdownMenuVisible);

function makeDropdownMenuVisible() {

    let dropdownMenu = this.firstElementChild;
    let hiddenMarker = 'dropdown__menu_is-hidden';
    let visibleMarker = 'dropdown__menu_is-visible';

    if (dropdownMenu.classList.contains(hiddenMarker)) {
        dropdownMenu.classList.remove(hiddenMarker);
        dropdownMenu.classList.add(visibleMarker);
    } else {
        dropdownMenu.classList.remove(visibleMarker);
        dropdownMenu.classList.add(hiddenMarker);
    };
};