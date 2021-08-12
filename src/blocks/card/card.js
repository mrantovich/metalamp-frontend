import { createPopper } from '@popperjs/core';

const tooltipIcons = document.querySelectorAll('.card__calculation-tip');

if (tooltipIcons) {
    
    for (let i = 0; i < tooltipIcons.length; i++) {
        let ticon = tooltipIcons[i];
        let tooltip = ticon.querySelector('.card__calculation-tooltip');
        
        let toptions = { placement: 'top' };
        let additionalOptions = [
            { name: 'eventListeners', enabled: true },
            { name: 'offset', options: { offset: [0, 40] } }
        ];
        let additionalOptionsWithoutListeners = [
            { name: 'eventListeners', enabled: false },
            { name: 'offset', options: { offset: [0, 40] } }
        ];

        let popperInstance = createPopper(ticon, tooltip, toptions);

        function showTooltip() {
            tooltip.setAttribute('data-show', '');
            popperInstance.setOptions({ modifiers: [ additionalOptions ] })
            popperInstance.update();
        };

        function hideTooltip() {
            tooltip.removeAttribute('data-show');
            popperInstance.setOptions({ modifiers: [ additionalOptionsWithoutListeners ] });
            popperInstance.update();
        };

        const showEvents = ['mouseenter', 'focus'];
        const hideEvents = ['mouseleave', 'blur'];

        showEvents.forEach(event => {
            ticon.addEventListener(event, showTooltip);
        });

        hideEvents.forEach(event => {
            ticon.addEventListener(event, hideTooltip);
        });
    };
};
