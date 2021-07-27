import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

function declOfNum(n, text_forms) {  
    n = Math.abs(n) % 100; 
    var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
};

let dropdowns = $('.iqdropdown');

for (let i = 0; i < dropdowns.length; i++) {
    let dr = dropdowns[i];
    if (dr.className.includes('iqdropdown_single')) {
        let ddd = $(dr).iqDropdown({
            onChange: function(id, count, totalItems) {
                function hideOrShowButton(buttonSelector) {
                    let buttonName = $(dr).find(buttonSelector)[0];
                    let isVisibleClass = 'iqdropdown-menu-button_is-visible';
                    if (buttonName) {
                        if (buttonName.classList.contains(isVisibleClass)) {
                            if (totalItems === 0) {
                                buttonName.classList.remove(isVisibleClass);
                            };
                        } else if (!buttonName.classList.contains(isVisibleClass) && totalItems > 0) {
                            buttonName.classList.add('iqdropdown-menu-button_is-visible');
                        };
                        
                    };
                };

                hideOrShowButton('.iqdropdown-menu-button_clear');
                hideOrShowButton('.iqdropdown-menu-button_apply');
            },
            selectionText: 'гость',
            setSelectionText: function(itemCount, totalItems) {
                let text = this.selectionText;
                text = declOfNum(totalItems, ['гость', 'гостя', 'гостей']);
                return `${totalItems} ${text}`;
            },
        });
    } else {
        $(dr).iqDropdown({
            onChange: function(id, count, totalItems) {
                function hideOrShowButton(buttonSelector) {
                    let buttonName = $(dr).find(buttonSelector)[0];
                    let isVisibleClass = 'iqdropdown-menu-button_is-visible';
                    if (buttonName) {
                        if (buttonName.classList.contains(isVisibleClass)) {
                            if (totalItems === 0) {
                                buttonName.classList.remove(isVisibleClass);
                            };
                        } else if (!buttonName.classList.contains(isVisibleClass) && totalItems > 0) {
                            buttonName.classList.add('iqdropdown-menu-button_is-visible');
                        };
                        
                    };
                };

                hideOrShowButton('.iqdropdown-menu-button_clear');
                hideOrShowButton('.iqdropdown-menu-button_apply');
            },
            setSelectionText: function(itemCount, totalItems) {
                let textArray = [];
                let text;
                let itemKeys = Object.keys(itemCount);
                let dropdownItems = $(dr).find('.iqdropdown-item')
        
                for (let i = 0; i < itemKeys.length;) {
                    let itemName = dropdownItems[i].innerHTML;
                    let itemQuant = itemCount[itemKeys[i]];
                    itemName = itemName.toLowerCase();
                    text = `${itemQuant} ${itemName}`;
                    textArray.push(text);
                    i++
                };
                let textToDisplay = textArray.join(', ')
                return `${textToDisplay}`;
            },
        });
    };
};
