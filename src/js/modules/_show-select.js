function showCategorySelect() {
  const multiSelect = document.querySelectorAll('.catalog-sidebar-select');
  const overlay = document.querySelector('.overlay');

  multiSelect.forEach((select) => {
    select.querySelector('.catalog-sidebar-select__over').addEventListener(
      'click',
      function (e) {
        // скрываем оверлей
        overlay.classList.remove('is-hidden');
        let checkboxes = null;

        // находим нужный список чекбоксов (или другого контента) в зависимости
        // от того, какое id у выбранного селекта
        if (select.id === 'catalog-sidebar-select') {
          checkboxes = document.getElementById('catalog-sidebar-select-checkboxes');
        } else if (select.id === 'catalog-sidebar-select-2') {
          checkboxes = document.getElementById('catalog-sidebar-select-checkboxes-2');
        } else if (select.id === 'catalog-sidebar-select-3') {
          checkboxes = document.getElementById('catalog-sidebar-select-checkboxes-3');
        } else if (select.id === 'catalog-sidebar-select-4') {
          checkboxes = document.getElementById('catalog-sidebar-select-checkboxes-4');
        }

        // показываем контент
        checkboxes.style.display = 'block';
        checkboxes.dataset.checkVisible = true;

        // останавливаем всплытие
        e.stopPropagation();
      },
      true,
    );
  });

  overlay.addEventListener(
    'click',
    function () {
      const checkboxes = document.querySelector('[data-check-visible]');
      const selectorVisible = document.querySelector('[data-check-visible="true"]');

      // проверка на существование активного селекта. без нее появлялся баг,
      // суть которого в том, что при нажатии на соседний селект, пока один
      // из них активен, активный не закрывался
      if (selectorVisible) {
        selectorVisible.dataset.checkVisible = false;
        selectorVisible.style.display = 'none';
      }

      // выключаем селект
      checkboxes.style.display = 'none';
      checkboxes.dataset.checkVisible = false;
      overlay.classList.add('is-hidden');
    },
    false,
  );
}

export { showCategorySelect };
