const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredirnts = document.querySelector("#ingredients");

// let buf = '';
const items = ingredients.map(el => {
  const elements = document.createElement("li");
  elements.textContent = el;
  // buf += `<li>${el}</li>`
  return elements
})
listIngredirnts.append(...items);


// listIngredirnts.insertAdjacentHTML('beforeend', buf)

