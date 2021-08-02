// Slider (or carousel) to slide room images on small cards.
import Swiper from 'swiper';
import SwiperCore, {Navigation, Pagination} from 'swiper/core';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

// Each slider is under .room-card__swiper container, so select them all.
const swipers = document.querySelectorAll('.room-card__swiper');

for (let i = 0; i < swipers.length; i++) {
    let swiperContainer = swipers[i].querySelector('.swiper-container');
    let swiper = new Swiper(swiperContainer, {
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
};

// Calculate all needed values on calculation card.
// Under construction.
const cardWithTotals = document.querySelectorAll('.card__total');

for (let i = 0; i < cardWithTotals.length; i++) {
    let cardTotal = cardWithTotals[i];
    let iqDropdownSelection = cardTotal.querySelector('.iqdropdown-selection');
    let days = cardStringSplit(iqDropdownSelection.innerHTML, ' ');
    let headPrice = cardTotal.querySelector('.card__head-price');
    let roomPrice = cardStringSplit(headPrice.innerHTML, ' ');
    let roomPriceRaw = cardStringSplit(roomPrice, '₽');
    let calculationText = cardTotal.querySelector('.card__calculation-text');

    calculationText.innerHTML = roomPriceRaw + ' x 4 суток';
};

function cardStringSplit(stringToSplit, splittingSymbol) {
    let s = stringToSplit.split(splittingSymbol);
    return s[0];
};
