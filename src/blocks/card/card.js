import { createPopper } from '@popperjs/core';

const tooltipIcons = document.querySelectorAll('.card__calculation-tip');

if (tooltipIcons) {
    
    for (let i = 0; i < tooltipIcons.length; i++) {
        let ticon = tooltipIcons[i];
        let tooltip = ticon.querySelector('.card__calculation-tooltip');
        
        let toptions = { placement: 'top' };
        let additionalOptions = [
            { name: 'eventListeners', enabled: true },
            { name: 'offset', options: { offset: [0, 40] } }
        ];
        let additionalOptionsWithoutListeners = [
            { name: 'eventListeners', enabled: false },
            { name: 'offset', options: { offset: [0, 40] } }
        ];

        let popperInstance = createPopper(ticon, tooltip, toptions);

        function showTooltip() {
            tooltip.setAttribute('data-show', '');
            popperInstance.setOptions({ modifiers: [ additionalOptions ] })
            popperInstance.update();
        };

        function hideTooltip() {
            tooltip.removeAttribute('data-show');
            popperInstance.setOptions({ modifiers: [ additionalOptionsWithoutListeners ] });
            popperInstance.update();
        };

        const showEvents = ['mouseenter', 'focus'];
        const hideEvents = ['mouseleave', 'blur'];

        showEvents.forEach(event => {
            ticon.addEventListener(event, showTooltip);
        });

        hideEvents.forEach(event => {
            ticon.addEventListener(event, hideTooltip);
        });
    };
};

// Calculate all needed values on calculation card.
// Under construction.
const cardTotal = document.querySelector('.card__total');

// Get room price that is in card header.
let headPrice = cardTotal.querySelector('.card__head-price');
let roomPrice = cardStringSplit(headPrice.innerHTML, '₽');
let calculationText = cardTotal.querySelector('.card__calculation-text');

let dpLeft = cardTotal.querySelector('.date-picker-container__left-part');
let dpRight = cardTotal.querySelector('.date-picker-container__right-part');

document.addEventListener('click', function() {
    let earlierDate = dpLeft.querySelector('.date-picker');
    let latterDate = dpRight.querySelector('.date-picker');
    let earlierDateValue, latterDateValue;
    if (earlierDate) {
        earlierDateValue = earlierDate.value;
    };
    if (latterDate) {
        latterDateValue = latterDate.value;
    };
    if (earlierDate && latterDate) {
        let diffInMs = new Date(latterDateValue) - new Date(earlierDateValue);
        let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
        console.log(diffInDays);
    }
});

// Set calculation text based on previously selected items.
calculationText.innerHTML = roomPrice + ' x 4 суток';

/* for (let i = 0; i < cardWithTotals.length; i++) {
    let cardTotal = cardWithTotals[i];
    let iqDropdownSelection = cardTotal.querySelector('.iqdropdown-selection');
    let days = cardStringSplit(iqDropdownSelection.innerHTML, ' ');
    let headPrice = cardTotal.querySelector('.card__head-price');
    let roomPrice = cardStringSplit(headPrice.innerHTML, ' ');
    let roomPriceRaw = cardStringSplit(roomPrice, '₽');
    let calculationText = cardTotal.querySelector('.card__calculation-text');

    calculationText.innerHTML = roomPriceRaw + ' x 4 суток';
}; */

function cardStringSplit(stringToSplit, splittingSymbol) {
    let s = stringToSplit.split(splittingSymbol);
    return s[0];
};
