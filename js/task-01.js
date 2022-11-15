const categoriesAll = document.querySelectorAll(".item").length;
console.log('Number of categories:',categoriesAll);

const elements = document.querySelectorAll('.item');
const elementsData = elements.forEach((elem) => {
   console.log('Category:', elem.children[0].innerHTML);
   console.log('Elements:', elem.children[1].children.length)
});
