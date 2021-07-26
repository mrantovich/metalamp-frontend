import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

let dropdowns = $('.iqdropdown');

for (let i = 0; i < dropdowns.length; i++) {
    let dr = dropdowns[i];
    console.log(dr.className.includes('iqdropdown_single'));
    if (dr.className.includes('iqdropdown_single')) {
        $(dr).iqDropdown({
            setSelectionText: function(itemCount, totalItems) {
                //return `${totalItems}`;
                console.log('sdfsd')
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


/* for (let i = 0; i < singleDropdowns.length; i++) {
    let sdr = singleDropdowns[i];
    $(sdr).iqDropdown({
        setSelectionText: function(itemCount, totalItems) {
            //return `${totalItems}`;
            console.log('sdfsd')
        },
    });
}; */