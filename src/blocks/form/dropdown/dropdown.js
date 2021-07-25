const dropdownFields = document.querySelectorAll('.dropdown__field');

for (let i = 0; i < dropdownFields.length; i++) {
    let dropdown = dropdownFields[i];
    dropdown.addEventListener('click', makeDropdownMenuVisible);
}

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

    selectAllCounterButtonsPlus(dropdownMenu);
    selectAllCounterButtonsMinus(dropdownMenu);
};

function selectAllCounterButtonsPlus(menuElement) {
    let dropdownMenuButtonsPlus = menuElement.querySelectorAll('.dropdown__counter-button_plus');
    for (let i = 0; i < dropdownMenuButtonsPlus.length; i++) {
        let button = dropdownMenuButtonsPlus[i];
        button.addEventListener('click', function() {
            makeDropdownCounterChange(button, 'up')
        });
    };
};

function selectAllCounterButtonsMinus(menuElement) {
    let dropdownMenuButtonsMinus = menuElement.querySelectorAll('.dropdown__counter-button_minus');
    for (let i = 0; i < dropdownMenuButtonsMinus.length; i++) {
        let button = dropdownMenuButtonsMinus[i];
        button.addEventListener('click', function() {
            makeDropdownCounterChange(button, 'down')
        });
    };
};

function makeDropdownCounterChange(button, changeWay) {
    let counterElement;
    let buttonMinus;
    
    if (changeWay === 'up') {
        buttonMinus = getPreviousSibling(button, '.dropdown__counter-button_minus');
        counterElement = getPreviousSibling(button, '.dropdown__counter-num');
        let currentCount = counterElement.innerHTML;
        currentCount++;
        counterElement.innerHTML = currentCount;
        dropdownFieldText.push(currentCount);
    };
    
    if (changeWay === 'down') {
        buttonMinus = button;
        counterElement = button.nextElementSibling;
        let currentCount = counterElement.innerHTML;
        currentCount--;
        counterElement.innerHTML = currentCount;
        dropdownFieldText.push(currentCount);
    };

    if (buttonMinus.classList.contains('dropdown__counter-button_disabled')) {
        buttonMinus.classList.remove('dropdown__counter-button_disabled');
    };
    
    if (counterElement.innerHTML === '0') {
        buttonMinus.classList.add('dropdown__counter-button_disabled');
    };
    
};

// tool to get previous element with certain selector
function getPreviousSibling(elem, selector) {
    let sibling = elem.previousElementSibling;

    // if there's no selector, return the first sibling
    if (!selector) return sibling;

    while (sibling) {
        if (sibling.matches(selector)) return sibling;
        sibling = sibling.previousElementSibling;
    };
};