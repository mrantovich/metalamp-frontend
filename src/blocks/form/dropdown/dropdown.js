import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

let dropdowns = $('.iqdropdown');

for (let i = 0; i < dropdowns.length; i++) {
    let dr = dropdowns[i];
    if (dr.className.includes('iqdropdown_single')) {
        $(dr).iqDropdown({
            selectionText: 'гость',
            setSelectionText: function(itemCount, totalItems) {
                let text = this.selectionText;
                return `${totalItems} ${text}`;
            },
        });
    } else {
        $(dr).iqDropdown({
            setSelectionText: function(itemCount, totalItems) {
                let textArray = [];
                let text;
                let itemKeys = Object.keys(itemCount);
                let dropdownItems = $(dr).find('.iqdropdown-item')
        
                for (let i = 0; i < itemKeys.length;) {
                    let itemName = dropdownItems[i].innerHTML;
                    let itemQuant = itemCount[itemKeys[i]];
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
