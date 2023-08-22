import noUiSlider from 'noUiSlider';
// import Inputmask from 'inputmask';

function createRange() {
  // const rangeSlider = document.getElementById('js-range-slider');
  const rangeSlidersArr = document.querySelectorAll('.catalog-filters-price__slider');

  // так как на сайте используется два слайдера, мы перебираем их циклом,
  rangeSlidersArr.forEach((rangeSlider) => {
    if (rangeSlider) {
      // подключение плагина noUiSlider
      noUiSlider.create(rangeSlider, {
        start: [500, 250000],
        connect: true,
        step: 1,
        range: {
          min: [500],
          max: [250000],
        },
      });

      // находим у дива со слайдером предыдущий элемент и в нём нужные инпуты
      const input0 = rangeSlider.previousElementSibling.querySelector(
        '.catalog-filters-price__input-1',
      );
      const input1 = rangeSlider.previousElementSibling.querySelector(
        '.catalog-filters-price__input-2',
      );

      const inputs = [input0, input1];

      // округляем значения чисел, которые дает нам плагин
      rangeSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
      });

      // функция изменения расстояния слайдера
      function setRangeSlider(i, value) {
        let arr = [null, null];
        arr[i] = value;

        rangeSlider.noUiSlider.set(arr);
      }

      // набор масок для ввода числа
      const im = new Inputmask('999 999', {
        placeholder: '',
      });
      const im2 = new Inputmask('99 9999', {
        placeholder: '',
      });
      const im3 = new Inputmask('999999', {
        placeholder: '',
      });

      function createMask(input, length) {
        if (length === 5) {
          im2.mask(input);
        } else if (length === 6) {
          im.mask(input);
        } else if (length <= 4) {
          im3.mask(input);
        }
      }

      // начальная маска для второго инпута со значением 250 000
      createMask(input1, input1.value.length);

      // используем событие "change" для добавления маски в зависимости от
      // количества символов в value инпута
      rangeSlider.noUiSlider.on('change', () => {
        createMask(input0, input0.value.replaceAll(' ', '').length);
        createMask(input1, input1.value.replaceAll(' ', '').length);
      });

      // изменяем расстояние слайдера и устанавливаем маску при изменении
      // значения инпута
      inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
          let currentValue = e.currentTarget.value.replaceAll(' ', '');

          setRangeSlider(index, currentValue);
          createMask(input0, currentValue.length);
          createMask(input1, currentValue.length);
        });
      });

      // наложение эффектов фокусировки
      // находим контролы и коннекты
      const handles = document.querySelectorAll('.noUi-handle');
      const connect = document.querySelectorAll('.noUi-connect');

      // задаем цвет контролу, когда инпут выделен
      handles.forEach((handle) => {
        handle.addEventListener('focus', () => {
          connect.forEach((connectElem) => {
            connectElem.style.background = '#7033AC';
          });
        });

        // убираем цвет, когда фокус с инпута пропадает
        handle.addEventListener('blur', () => {
          connect.forEach((connectElem) => {
            connectElem.style.background = '#A65CF0';
          });
        });
      });
    }
  });
}

export { createRange };
