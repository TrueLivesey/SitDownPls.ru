import './choices.min';

// header cities select
const selectHeaderCity = document.querySelector('#select-city');
const choicesHeaderCity = new Choices(selectHeaderCity, {
  searchEnabled: false,
  itemSelectText: '',
  sorter: function (e) {
    return e.label.length;
  },
});

selectHeaderCity.addEventListener('click', () => {
  selectHeaderCity.classList.toggle('js-flip');
});

// header categories select
const selectHeaderCategory = document.querySelector('#select-category');
const choicesHeaderCategory = new Choices(selectHeaderCategory, {
  searchEnabled: false,
  itemSelectText: '',
  sorter: function (e) {
    return e.label.length;
  },
});
