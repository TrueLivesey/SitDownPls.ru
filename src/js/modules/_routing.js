import { el, setChildren, mount } from 'redom';

function catalogRouting() {
  const router = document.getElementById('js-router');
  let checkboxesArr = document.querySelectorAll('.catalog-check__input');

  // перебираем чекбоксы и задаём каждому обработчик с вызовом функции
  checkboxesArr.forEach((check) => {
    // проверка активных чекбоксов. если такие есть, то создаём айтемы
    // (свойства чекбоксов) в маршруте
    if (check.checked) {
      createDomRouter(check, check.parentNode.textContent, router);
    }
    // вызываем функцию по созданию айтемов в маршруте при клике на чекбокс
    check.addEventListener('change', () => {
      createDomRouter(check, check.parentNode.textContent, router);
    });
  });

  // создание нового фильтра в маршруте
  function createDomRouter(checkbox, value, container) {
    // DOM-элементы
    const routerItem = el('#js-router-active.router__item');
    routerItem.dataset.value = checkbox.dataset.value;
    const routerTextPrimary = document.querySelector('.router__text--primary');
    routerTextPrimary.classList.remove('router__text--primary');
    const routerSlash = el('span.router__splash');
    routerSlash.textContent = '/';
    const routerText = el('span.router__text');

    // меняем id новому айтему
    if (document.getElementById('js-router-active')) {
      document.getElementById('js-router-active').id = '';
    }

    if (checkbox.checked) {
      // проверка категории "скидка" на чекбокс "не важно". если он активен,
      // то чекбоксы "более" и "менее" сбрасываются.
      // кнопка "не важно"
      if (checkbox.dataset.value === 'not-important') {
        const discountBlock = checkbox.parentNode.parentNode;
        const more5000 = container.querySelector('[data-value="more-than-5000"]');
        const less5000 = container.querySelector('[data-value="less-than-5000"]');

        if (more5000) {
          more5000.remove();
        }
        if (less5000) {
          less5000.remove();
        }

        discountBlock.querySelector('[data-value="more-than-5000"]').checked = false;
        discountBlock.querySelector('[data-value="less-than-5000"]').checked = false;
      }

      // кнопки "более 5000" и "менее 5000"
      if (
        checkbox.dataset.value === 'more-than-5000' ||
        checkbox.dataset.value === 'less-than-5000'
      ) {
        const discountBlock = document.querySelector('.catalog-filters__discount');
        const notImportant = container.querySelector('[data-value="not-important"]');

        if (notImportant) {
          notImportant.remove();
        }

        discountBlock.querySelector('[data-value="not-important"]').checked = false;
      }

      routerText.textContent = value;
      routerText.classList.add('router__text--primary');

      setChildren(routerItem, [routerSlash, routerText]);
      mount(container, routerItem);
    } else {
      // находим и удаляем последний айтем, у которого data-value = true
      const routerItemSelected = router.querySelector(`[data-value="${checkbox.dataset.value}"]`);

      if (routerItemSelected) {
        routerItemSelected.remove();
      }

      // задаём цвет предпоследнему элементу в коллекции, если был выключен
      // последний чекбокс, и оставляем цвет последнему элементу в ином случае
      const routerCollection = document.getElementById('js-router').children;
      const routerItemArr = document.querySelectorAll('.router__item');
      routerItemArr.item(routerCollection.length - 1).classList.add('router__text--primary');
    }
  }
}

export { catalogRouting };
