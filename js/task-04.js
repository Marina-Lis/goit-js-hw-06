// Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться 
//текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай
// или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const incrementBtn = document.querySelector('[decrement]');
const decrementBtn = document.querySelector('[increment]');
const valueCalc = document.querySelector('value');

let CountButtonClicks = 0;


const counterInc = ()=>{
  
    if(incrementBtn.addEventListener('click', incrementBtn)){
        valueCalc=CountButtonClicks+1;
    }
    return valueCalc
    // increment (value){
    //     this.value+=value;
    // },
    // decrement(value){
    //     this.value-=value;
    // }
};
// const counterAmount =()=>{
//     if 

// }

// incrementBtn.addEventListener('click', counter.increment);
// decrementBtn.addEventListener('click', counter.decrement);