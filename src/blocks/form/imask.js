import IMask from 'imask';

const maskedTextFields = document.querySelectorAll('.form__text-field_masked');
let maskOptionsForDate = {
    mask: Date,
    lazy: false,
    autofix: true,
    blocks: {
        d: {mask: IMask.MaskedRange, placeholderChar: 'Д', from: 1, to: 32, maxLength: 2},
        m: {mask: IMask.MaskedRange, placeholderChar: 'М', from: 1, to: 12, maxLength: 2},
        Y: {mask: IMask.MaskedRange, placeholderChar: 'Г', from: 1990, to: 2999, maxLength: 4},
    }
};

for (let i = 0; i < maskedTextFields.length; i++) {
    IMask(maskedTextFields[i], maskOptionsForDate);
};