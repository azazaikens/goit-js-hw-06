const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredirnts = document.querySelector("#ingredients");

let elements

ingredients.map(el => {
  elements = document.createElement("li");
  elements.textContent = el;
  listIngredirnts.appendChild(elements);
})
