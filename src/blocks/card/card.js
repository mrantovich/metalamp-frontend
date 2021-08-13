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

if (cardTotal) {
    displayTotalSumOnCard();
    updateCalculationCardData();

    document.addEventListener('click', function() {
        updateCalculationCardData();
    });
};

function updateCalculationCardData() {
    // Get room price that is in card header.
    let headPrice = cardTotal.querySelector('.card__head-price');
    let roomPrice = cardStringSplit(headPrice.innerHTML, '₽');
    let calculationText = cardTotal.querySelector('.card__calculation-text');
    let calculationData = cardTotal.querySelector('.card__calculation-text ~ .card__calculation-data');

    let dpLeft = cardTotal.querySelector('.date-picker-container__left-part');
    let dpRight = cardTotal.querySelector('.date-picker-container__right-part');
    let earlierDate = dpLeft.querySelector('.date-picker');
    let latterDate = dpRight.querySelector('.date-picker');
    let earlierDateValue, latterDateValue;
    let diffInDays, sumOfDays = 0;
    if (earlierDate) {
        earlierDateValue = earlierDate.value;
    };
    if (latterDate) {
        latterDateValue = latterDate.value;
    };
    if (earlierDateValue && latterDateValue) {
        diffInDays = differenceInDays(reformatDateValue(latterDateValue), reformatDateValue(earlierDateValue));
        sumOfDays = parseInt(roomPrice.replaceAll(' ', '')) * parseInt(diffInDays);

    };

    calculationText.innerHTML = `${roomPrice} x ${diffInDays} суток`;
    calculationData.innerHTML = `${sumOfDays}₽`;

    displayTotalSumOnCard();
};

// Collect all calculation data to render total sum on card.
function displayTotalSumOnCard() {
    let calculationSum = cardTotal.querySelector('.card__total-sum');
    let toSum = []
    let allDataToSum = cardTotal.querySelectorAll('.card__calculation-data');
    allDataToSum.forEach(elem => toSum.push(cardStringSplit(elem.innerHTML, '₽')));
    let innerTextSum = toSum.reduce((a, b) => parseInt(a) + parseInt(b));
    if (innerTextSum < 0) {
        innerTextSum = 0;
    };
    calculationSum.innerHTML = innerTextSum  + '₽';
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
