import { createPopper } from '@popperjs/core';
import { differenceInDays } from 'date-fns';

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
let calculationData = cardTotal.querySelector('.card__calculation-text ~ .card__calculation-data');
let calculationSum = cardTotal.querySelector('.card__total-sum');

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
    if (earlierDateValue && latterDateValue) {
        let diffInDays = differenceInDays(reformatDateValue(latterDateValue), reformatDateValue(earlierDateValue));
        let sumOfDays = parseInt(roomPrice.replaceAll(' ', '')) * parseInt(diffInDays);

        calculationText.innerHTML = `${roomPrice} x ${diffInDays} суток`;
        calculationData.innerHTML = `${sumOfDays}₽`;

        displayTotalSumOnCard();
    };
});

// Set calculation text based on previously selected items.
calculationText.innerHTML = roomPrice + ' x 4 суток';

// Collect all calculation data to render total sum on card.
function displayTotalSumOnCard() {
    let toSum = []
    let allDataToSum = cardTotal.querySelectorAll('.card__calculation-data');
    allDataToSum.forEach(elem => toSum.push(cardStringSplit(elem.innerHTML, '₽')));
    calculationSum.innerHTML = toSum.reduce((a, b) => parseInt(a) + parseInt(b)) + '₽';
};

// Reformat date picked from calendar to make it suitable for calculation.
//          dateString looks like "01.08.2021". Just reverse numbers and join them together with "-".
function reformatDateValue(dateString) {
    let splittedDateString = dateString.split('.');
    let reversedDateString = splittedDateString.reverse().join('-');

    let nd = new Date(reversedDateString);
    return nd;
};

function cardStringSplit(stringToSplit, splittingSymbol) {
    let s = stringToSplit.split(splittingSymbol);
    return s[0];
};
