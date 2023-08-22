export function openMenu() {
  const burgerButton = document.getElementById('js-burger');
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');

  burgerButton.addEventListener('click', () => {
    header.classList.toggle('is-open');
    nav.classList.toggle('nav-active');
  });
}
