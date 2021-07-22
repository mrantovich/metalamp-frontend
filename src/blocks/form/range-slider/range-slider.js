import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

let rangeSlider = document.querySelector('.range-slider');

noUiSlider.create(rangeSlider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});