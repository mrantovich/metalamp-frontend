import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

let dropdowns = $('.iqdropdown');

for (let i = 0; i < dropdowns.length; i++) {
    let dr = dropdowns[i];
    console.log($(dr).find('.iqdropdown-item'));
    let dropdownItems = ["one", "two"];
    $(dr).iqDropdown({
        onChange: (id, count, totalItems) => {
        },
        setSelectionText: function(itemCount, totalItems) {
            let textArray = [];
            let text;
            let itemKeys = Object.keys(itemCount);
            let dropdownItems = $(dr).find('.iqdropdown-item')
    
            for (let i = 0; i < itemKeys.length;) {
                console.log(itemKeys[i])
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