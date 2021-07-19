const dropdownField = document.querySelector('.dropdown__field');

dropdownField.addEventListener('click', makeDropdownMenuVisible);

function makeDropdownMenuVisible() {

    let dropdownMenu = this.nextElementSibling;
    let dropdownMenuIsExpanded = 'dropdown__field_is-expanded';
    let hiddenFlag = 'dropdown__menu_is-hidden';
    let visibleFlag = 'dropdown__menu_is-visible';

    if (dropdownMenu.classList.contains(hiddenFlag)) {
        dropdownMenu.classList.remove(hiddenFlag);
        dropdownMenu.classList.add(visibleFlag);
        this.classList.add(dropdownMenuIsExpanded);
    } else {
        dropdownMenu.classList.remove(visibleFlag);
        dropdownMenu.classList.add(hiddenFlag);
        this.classList.remove(dropdownMenuIsExpanded);
    };
};