const likeButtons = document.querySelectorAll('.like-button');

for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener('click', changeLikeButtonState);
};

function changeLikeButtonState() {
    if (!this.classList.contains('like-button_is-highlighted')) {
        this.classList.add('like-button_is-highlighted');

        let likeHeart = document.querySelector('.like-button__heart');
        likeHeart.classList.add('like-button__heart_is-highlighted');

        let likeHeartInsideElement = document.querySelector('.like-button__heart-inside');
        likeHeartInsideElement.classList.add('like-button__heart_is-highlighted');
    };
};