// подключение npm-пакета Swiper (слайдер)
// banner

// special
const specialSwiper = document.querySelector('.special__slider');
export const swiper = new Swiper(specialSwiper, {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerGroup: 3,
  slidesPerView: 'auto',
  spaceBetween: 29.92,

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
