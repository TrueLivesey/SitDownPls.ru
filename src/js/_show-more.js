const showMore = document.getElementById('js-show-more');
const productsLength = document.querySelectorAll('.product-card').length;
let items = 8;

showMore.addEventListener('click', () => {
  items += 8;
  const productsArray = Array.from(document.querySelector('.products').children);
  const visibleItems = productsArray.slice(0, items);

  visibleItems.forEach((e) => e.classList.add('is-visible'));

  if (visibleItems.length === productsLength) {
    showMore.classList.add('is-hidden');
  }
});
