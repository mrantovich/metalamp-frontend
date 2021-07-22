import noUiSlider from 'nouislider';
import wNumb from 'wnumb';
import 'nouislider/dist/nouislider.css';

let rangeSlider = document.querySelector('.range-slider');

let rangeUiSlider = noUiSlider.create(rangeSlider, {
    start: [0, 10000],
    step: 500,
    margin: 500,
    connect: true,
    range: {
        'min': 0,
        'max': 15000
    },
    format: wNumb({
        decimals: 0,
        thousand: '&ensp;',
        suffix: '&#8381;'
    })
});

let rangeText = document.querySelector('.form__range-text');
rangeUiSlider.on('update', changePriceRange);

function changePriceRange() {
    let lowerPrice = readRange()[0];
    let upperPrice = readRange()[1];
    let textTemplate = `${lowerPrice} - ${upperPrice}`
    rangeText.innerHTML = textTemplate;
};

function readRange() {
    let range = rangeUiSlider.get();
    return range;
};