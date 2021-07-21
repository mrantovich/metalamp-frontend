import likeImgSelected from '../../../assets/img/like-button-selected.svg';
import likeImgNotSelected from '../../../assets/img/like-button-not-selected.svg';

const likeButtons = document.querySelectorAll('.like-button');

for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener('click', changeLikeButtonState);
    likeButtons[i].addEventListener('mouseover', highlightLikeButton);
    likeButtons[i].addEventListener('mouseout', deHighlightLikeButton);
};

function changeLikeButtonState() {
    if (!this.classList.contains('like-button_is-highlighted')) {
        this.classList.add('like-button_is-highlighted');

        let likeContainer = getChildElement(this);
        let likeHeart = getChildElement(likeContainer);
        likeHeart.classList.add('like-button__heart_is-highlighted');
    };
};

function highlightLikeButton() {
    let likeContainer = getChildElement(this);
    let likeHeart = getChildElement(likeContainer);
    if (!this.classList.contains('like-button_is-highlighted')) {
        likeHeart.src = likeImgSelected;
    };
};

function deHighlightLikeButton() {
    let likeContainer = getChildElement(this);
    let likeHeart = getChildElement(likeContainer);
    if (!likeHeart.classList.contains('like-button__heart_is-highlighted')) {
        likeHeart.src = likeImgNotSelected;
    };
};

function getChildElement(thisElement) {
    let child = thisElement.children[0];
    return child;
};