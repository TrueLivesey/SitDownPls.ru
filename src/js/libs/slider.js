// подключение npm-пакета Swiper (слайдер)
// banner

// special
const specialSwiperElem = document.querySelector('.special__slider');
const specialSwiper = new Swiper(specialSwiperElem, {
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

// hero
const heroSwiperElem = document.querySelector('.hero__slider');
const heroSwiper = new Swiper(heroSwiperElem, {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // slidesPerGroup: 1,
  slidesPerView: 1,

  // Pagination
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
  },
});

// useful
const usefulSwiperElem = document.querySelector('.useful__slider');
const usefulSwiper = new Swiper(usefulSwiperElem, {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerGroup: 1,
  slidesPerView: 'auto',
  spaceBetween: 32,

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
