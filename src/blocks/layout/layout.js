const layoutBackgrounds = document.querySelector('.layout__background-overlay');

function changeLayoutBackground() {
    let backgrounds = layoutBackgrounds.childNodes;
    let i = 0;
    backgrounds[i].style.opacity = 1;
    setInterval(function() {
        if (i === 0) {
            backgrounds[backgrounds.length-1].style.opacity = 0;
        } else {
            backgrounds[i-1].style.opacity = 0;
        };
        i++;
        if (i === backgrounds.length) {
            i = 0;
            backgrounds[backgrounds.length-1].style.opacity = 0;
        };
        backgrounds[i].style.opacity = 1;
    }, 5000);
};

if (layoutBackgrounds) {
    changeLayoutBackground();
};
