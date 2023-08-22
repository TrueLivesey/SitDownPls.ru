import { el, setChildren, mount, svg } from 'redom';

// открытие модального окна
function openModal(modal, overlay) {
  modal.classList.remove('is-hidden');
  overlay.classList.remove('is-hidden');
  console.log('modal is open');
}

// закрытие модального окна
function closeModal(modal, overlay) {
  modal.classList.add('is-hidden');
  overlay.classList.add('is-hidden');
  console.log('modal is close');
}

// создание блока "мы вам перезвоним"
function createFeedback(modalWrapper, modal, overlay, modalContent) {
  modalContent.classList.add('is-hidden');

  if (document.getElementById('modal-close-content')) {
    document.getElementById('modal-close-content').classList.remove('is-hidden');
    return;
  }

  const modalCloseContent = el('#modal-close-content.modal__close-content');
  const modalLogo = svg(
    'svg.modal__logo',
    svg('use', {
      xlink: { href: 'images/sprite.svg#logo-elephant' },
    }),
  );
  const modalCloseButton = el('button#js-modal-close-btn-2.modal__close-btn');
  const modalCloseIcon = svg(
    'svg.modal__close-icon',
    svg('use', {
      xlink: { href: 'images/sprite.svg#modal-exit' },
      width: '20px',
      height: '20px',
    }),
  );
  const modalText = el('p.modal__feedback-text');
  modalText.textContent = 'Спасибо, мы\u00A0вам перезвоним!';

  modalCloseButton.addEventListener('click', () => {
    closeModal(modalWrapper, overlay);
    modalCloseContent.classList.add('is-hidden');
    modalContent.classList.remove('is-hidden');
  });

  mount(modalCloseButton, modalCloseIcon);
  setChildren(modalCloseContent, [modalLogo, modalText, modalCloseButton]);
  mount(modal, modalCloseContent);
}

export { openModal, closeModal, createFeedback };
