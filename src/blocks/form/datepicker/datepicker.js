/* import Litepicker from "litepicker";

const datePickerParentElement = document.querySelector('.datepicker__wrapper');
const datePickerElement = document.querySelector('.datepicker');

const picker = new Litepicker({
    element: datePickerElement,
    parentEl: datePickerParentElement,
    lang: 'ru-RU',
    singleMode: false,
    buttonText: {
        'previousMonth': '',
        'nextMonth': ''
    }
});

picker.on('show', () => {
    let litePicker = document.querySelector('.litepicker');
    console.log(litePicker);
    litePicker.style.top = 'auto';
    litePicker.style.left = '0';
}); */


import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker/dist/js/datepicker.min.js';


$('.date-picker').datepicker({
    prevHtml: ' ',
    nextHtml: ' ',
    navTitles: {
        days: 'MM yyyy'
    }
});
