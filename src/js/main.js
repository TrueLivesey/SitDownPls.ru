import { el, setChildren, mount } from 'redom';
import './modules/_select';
import './libs/modernizr-custom';
import {
  loadSliderSpecial,
  loadSliderUseful,
  loadSliderHero,
  loadSliderCatalog,
  loadSliderSimilar,
  loadSliderProductPageModal,
  loadSliderProductPageModalImg,
} from './modules/_slider';
import { loadSettingsTooltip } from './modules/_tooltip';
import { showMore } from './modules/_show-more';
import { catalogRouting } from './modules/_routing';
import { openModal, closeModal, createFeedback } from './modules/_modal';
import { openMenu } from './modules/_menu';
import { createRange } from './modules/_range';
import { showCategorySelect } from './modules/_show-select';
import { formValidation } from './modules/_validate';

const locationPathname = window.location.pathname.slice(1, -5);
console.log('location pathname: ', locationPathname);
openMenu();

// отключение hover на мобильных устройствах
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobileDevice()) {
  document.body.classList.add('no-touch');
}

if (locationPathname === '') {
  loadSliderSpecial();
  loadSliderUseful();
  loadSliderHero();
  loadSettingsTooltip();
  showMore();

  const phone = document.getElementById('callback-phone');

  formValidation(phone, 'callback-name', 'callback-email');
} else if (locationPathname === 'catalog') {
  loadSliderCatalog();
  catalogRouting();
  createRange();

  const categorySidebarSelect = document.querySelector('.catalog-sidebar-select__box');
  showCategorySelect();
} else if (locationPathname === 'product-page') {
  loadSliderSimilar();
  loadSliderProductPageModal();
  loadSliderProductPageModalImg();

  // находим элементы модального окна
  const modalWrapper = document.getElementById('js-modal-wrapper');
  const modal = document.getElementById('js-modal');
  const modalImg = document.getElementById('js-modal-img');
  const overlay = document.querySelector('.overlay');
  const openModalButton = document.getElementById('js-modal-btn');
  const openModalImgButton = document.getElementById('js-modal-img-btn');
  const closeModalButton = document.getElementById('js-modal-close-btn');
  const closeModalImgButton = document.getElementById('js-modal-img-close-btn');
  const modalContent = document.querySelector('.modal__content');
  const feedbackModalButton = document.getElementById('js-modal-feedback-btn');

  // вызов функций модального окна
  openModalButton.addEventListener('click', () => {
    openModal(modalWrapper, overlay);
  });
  closeModalButton.addEventListener('click', () => {
    closeModal(modalWrapper, overlay);
  });
  feedbackModalButton.addEventListener('click', (e) => {
    e.preventDefault();
    createFeedback(modalWrapper, modal, overlay, modalContent);
  });
  openModalImgButton.addEventListener('click', () => {
    openModal(modalImg, overlay);
  });
  closeModalImgButton.addEventListener('click', () => {
    closeModal(modalImg, overlay);
  });

  // обработка нажатия на клавишу esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalWrapper.classList.contains('is-hidden')) {
      closeModal(modalWrapper, overlay);
    }
  });
}
