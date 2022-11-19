// Напиши скрипт, который изменяет цвета фона элемента <body> 
//через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const wigetDiv = document.querySelector('.widget p span');
const bckgrColor = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener("click", (event)=>{
  event.preventDefault();
  const color=  getRandomHexColor();
  document.body.style.background =color;
  wigetDiv.textContent = color
  console.log(color);
});



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
