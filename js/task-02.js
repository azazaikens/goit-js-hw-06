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
let buf = '';
ingredients.map(el => {
  // elements = document.createElement("li");
  // elements.textContent = el;
  buf += `<li>${el}</li>`
  // listIngredirnts.appendChild(elements);
  // console.log(buf)
})

listIngredirnts.insertAdjacentHTML('beforeend', buf)

