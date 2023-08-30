const categoriesLength = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesLength.childElementCount}`);
console.log(' ')

const typesOfCategories = document.querySelectorAll(".item");

typesOfCategories.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.childElementCount}`);
    console.log(' ')
})
