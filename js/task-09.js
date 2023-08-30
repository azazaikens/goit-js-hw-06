function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyHTML = document.querySelector('body');
const bthColorRand = document.querySelector('.change-color');

bthColorRand.addEventListener('click', () => {
  let buf = getRandomHexColor();
  bodyHTML.style.backgroundColor = `${buf}`;
  bthColorRand.previousElementSibling
    .firstElementChild
    .textContent = `${buf}`;
})









