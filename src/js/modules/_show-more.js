export function showMore() {
  const showMore = document.getElementById('js-show-more');
  const productsLength = document.querySelectorAll('.product-card').length;
  let items = null;
  let count = null;

  if (window.screen.width > 1024) {
    items = 8;
    count = 8;
  } else if (window.screen.width > 768) {
    items = 6;
    count = 6;
  } else {
    items = 6;
    count = 4;
  }

  showMore.addEventListener('click', () => {
    items += count;
    const productsArray = Array.from(document.querySelector('.products').children);
    const visibleItems = productsArray.slice(0, items);

    visibleItems.forEach((e) => e.classList.add('is-visible'));

    if (visibleItems.length === productsLength) {
      showMore.classList.add('is-hidden');
    }
  });
}
