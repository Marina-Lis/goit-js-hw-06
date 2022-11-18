// Напиши скрипт который, при наборе текста в инпуте 
//input#name-input (событие input), 
//подставляет его текущее значение в span#name-output. 
//Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" 
//placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputText = document.querySelector('#name-input');
var nameOutpur = document.querySelector('#name-output');

inputText.addEventListener("input", (event) => {
        if(nameOutpur.textContent.trim().length-1===0){
        nameOutpur.textContent ='Anonymous'}
         else {    
            nameOutpur.textContent = event.currentTarget.value;}
         })