// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна 
// быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля,
//  выводи alert с предупреждением о том, 
//  что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, 
// собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль 
// и очисти значения полей формы методом reset.


const loginForm = document.querySelector('.login-form');


loginForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const data = new FormData(event.target);
	const Email = data.get("email");
	const password = data.get("password");
    const userData = {Email, password}
   
    if (Email === ''  || password== '') {
        alert ("Allert! Fieds are empty. Please fill out the ");
        
	} else {
       
        loginForm.reset(); 
         console.log(userData);
	}

});