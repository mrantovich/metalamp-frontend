// Slider (or carousel) to slide room images on small cards.
import Swiper from 'swiper';
import SwiperCore, {Navigation, Pagination} from 'swiper/core';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

// Each slider is under .room-card__swiper container, so select them all.
const swipers = document.querySelectorAll('.room-card__swiper');

for (let i = 0; i < swipers.length; i++) {
    let swiperContainer = swipers[i].querySelector('.swiper-container');
    let swiper = new Swiper(swiperContainer, {
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
};