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
                console.log(dropdownItems[i].innerHTML)
                console.log(itemCount[itemKeys[i]])
                text = itemKeys[i] + ' ' + itemCount[itemKeys[i]];
                textArray.push(text);
                i++
            };
            let textToDisplay = textArray.join(', ')
            return `${textToDisplay}`;
        },
    });
};