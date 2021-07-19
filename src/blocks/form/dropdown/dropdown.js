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

const dropdownMenuCounters = document.querySelectorAll('.dropdown__counter-num');

for (let i = 0; i < dropdownMenuCounters.length; i++) {
    dropdownMenuCounters[i].addEventListener('change', doWorkWithMenuCounter);
};

function doWorkWithMenuCounter() {
    let buttonMinus = this.previousSibling;
    console.log(this.innerHTML);
    console.log(buttonMinus);
    if (numValue === '0') {
        buttonMinus.classList.add('dropdown__counter-button_disabled');
    } else {
        buttonMinus.classList.remove('dropdown__counter-button_disabled');
    };
};

const dropdownMenuButtonPlus = document.querySelectorAll('.dropdown__counter-button_plus');

for (let i = 0; i < dropdownMenuButtonPlus.length; i++) {
    dropdownMenuButtonPlus[i].addEventListener('click', makeDropdownCounterUp);
};

function makeDropdownCounterUp() {
    let counterElement = this.previousSibling;
    let currentCount = counterElement.innerHTML;
    currentCount++;
    counterElement.innerHTML = currentCount;
}