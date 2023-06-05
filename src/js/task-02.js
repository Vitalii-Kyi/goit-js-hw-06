const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');

const liEl = ingredients.map(ingredients => {
  const li = document.createElement('li');

  li.textContent = ingredients;
  li.classList.add('item');

  return li;
});

ul.append(...liEl);