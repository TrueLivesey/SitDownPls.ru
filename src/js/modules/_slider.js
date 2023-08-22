// special
function loadSliderSpecial() {
  const specialSwiperElem = document.getElementById('special-slider');
  const specialSwiper = new Swiper(specialSwiperElem, {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 32,
    lazyLoading: true,

    breakpoints: {
      320: {
        slidesPerGroup: 1,
        slidesPerView: 'auto',
      },

      577: {
        slidesPerGroup: 3,
        slidesPerView: 'auto',
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });
}

// hero
function loadSliderHero() {
  const heroSwiperElem = document.getElementById('hero-slider');
  const heroSwiper = new Swiper(heroSwiperElem, {
    // Optional parameters
    direction: 'horizontal',
    lazyLoading: true,

    // Pagination
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      clickable: true,
    },
  });
}

// useful
function loadSliderUseful() {
  const usefulSwiperElem = document.getElementById('useful-slider');
  const usefulSwiper = new Swiper(usefulSwiperElem, {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerGroup: 1,
    slidesPerView: 'auto',
    lazyLoading: true,

    breakpoints: {
      320: {
        spaceBetween: 12,
      },

      577: {
        spaceBetween: 32,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });
}

// catalog-products
function loadSliderCatalog() {
  const catalogProductsSwiperElem = document.getElementById('catalog-products-slider');
  const catalogProductsSwiper = new Swiper(catalogProductsSwiperElem, {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    lazyLoading: true,

    breakpoints: {
      769: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesColumn: 3,
        spaceBetween: 32,
        grid: {
          rows: 3,
          fill: 'row',
        },
      },

      577: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesColumn: 2,
        grid: {
          rows: 3,
          fill: 'row',
        },
      },

      300: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesColumn: 2,
        spaceBetween: 16,
        grid: {
          rows: 3,
          fill: 'row',
        },
      },
    },

    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });
}

// products-similiar
function loadSliderSimilar() {
  const productsSimilarSwiperElem = document.getElementById('products-similar-slider');
  const productsSimilarSwiper = new Swiper(productsSimilarSwiperElem, {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    lazyLoading: true,

    breakpoints: {
      1025: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 32,
      },

      769: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 32,
      },

      577: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 32,
      },

      320: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.products-similar-next__icon',
      prevEl: '.products-similar-prev__icon',
    },
  });
}

// product-page-modal
function loadSliderProductPageModal() {
  const productsProductPageModal = document.getElementById('product-page-modal-slider');

  let productPageModal = new Swiper(productsProductPageModal, {
    // Optional parameters
    loop: false,
    lazyLoading: true,

    breakpoints: {
      769: {
        direction: 'horizontal',
        slidesPerGroup: 4,
        slidesPerView: 'auto',
        spaceBetween: 38,
      },

      577: {
        direction: 'vertical',
        slidesPerGroup: 4,
        slidesPerView: 'auto',
        spaceBetween: 18,
      },

      320: {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 38,
      },
    },
  });
}

// product-page-modal-img
function loadSliderProductPageModalImg() {
  const productsProductPageModalImg = document.getElementById('product-page-modal-slider-2');

  let productPageModalImg = new Swiper(productsProductPageModalImg, {
    // Optional parameters
    loop: false,
    lazyLoading: true,

    breakpoints: {
      769: {
        // direction: 'horizontal',
        slidesPerGroup: 2,
        slidesPerView: 'auto',
        spaceBetween: 78,
      },

      577: {
        // direction: 'horizontal',
        slidesPerGroup: 1,
        slidesPerView: 'auto',
        spaceBetween: 78,
      },

      320: {
        // direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 16,
      },
    },

    navigation: {
      nextEl: '.product-page-modal-slide__next',
      prevEl: '.product-page-modal-slide__prev',
    },
  });
}

export {
  loadSliderSpecial,
  loadSliderHero,
  loadSliderUseful,
  loadSliderCatalog,
  loadSliderSimilar,
  loadSliderProductPageModal,
  loadSliderProductPageModalImg,
};
