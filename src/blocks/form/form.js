const radioButtonLabels = document.querySelectorAll('.form__label_with-checkbox');

for (let i = 0; i < radioButtonLabels.length; i++) {
    let radioLabel = radioButtonLabels[i];
    let currentRadiosName = radioLabel.querySelectorAll('input[type="radio"]')[0];

    if (currentRadiosName !== undefined) {
        radioLabel.addEventListener('click', function() {
            if (!this.querySelector('.form__radio').checked) {
                let radios = document.querySelectorAll('input[name="' + currentRadiosName.name + '"]');
                for (let j = 0; j < radios.length; j++) {
                    radios[j].parentElement.classList.remove('text_is-normal')
                    console.log(radios[j].parentElement.classList.remove('text_is-normal'))
                };
                this.classList.add('text_is-normal');
            };
        });
    }

    
};