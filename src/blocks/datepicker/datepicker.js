import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker/dist/js/datepicker.min.js';

const calendarOptions = {
    prevHtml: ' ',
    nextHtml: ' ',
    navTitles: {
        days: 'MM yyyy'
    },
    offset: 0,
    todayButton: true,
    clearButton: true,
    range: true,
    dateFormat: 'd M',
    multipleDatesSeparator: ' - '
};


$('.date-picker').datepicker(calendarOptions);

$('.date-picker_single').datepicker({
    range: false,
    dateFormat: 'd.mm.yyyy'
});

function changeTodayText() {
    let todayButtons = $('.datepicker--button[data-action="today"]');
    for (let i = 0; i < todayButtons.length; i++) {
        let tdButton = todayButtons[i];
        $(tdButton).on('click', function(e) {
            //e.preventDefault();
            let dp = $(this).parent().closest('.datepicker');
            dp.removeClass('active');
            document.activeElement.blur();
        });
        todayButtons[i].innerHTML = 'Применить';
    };
};

changeTodayText();
