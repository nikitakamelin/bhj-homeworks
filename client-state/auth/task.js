
const url = "https://students.netoservices.ru/nestjs-backend/auth";

//если в локальном хранилище есть id пользователя, то приветствуем
if (window.localStorage.userId) {
	authorizationSuccess(window.localStorage.userId);
}

//обработчик отправки формы
document.getElementById('signin__form').addEventListener('submit', e => {
	e.preventDefault();

	//достаем логин и пароль, обрезаем у них пробелы, чтобы далее запретить ввод пустых строк
	const login = document.querySelector('input[name="login"]');
	const password = document.querySelector('input[name="password"]');
	login.value = login.value.trim();
	password.value = password.value.trim();

	//запрещаем ввод пустой строки
	if (!login.value || !password.value) {
		return;
	}

	const form = document.getElementById('signin__form');
	const formData = new FormData(form);

	let xhr = new XMLHttpRequest();

	xhr.open('POST', url);
	xhr.responseType = 'json';

	xhr.onload = () => {
		//простая обработка ошибок
		if (xhr.status != (200 && 201)) {
			alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
		}

		if (xhr.response.success) {
			localStorage.userId = xhr.response.user_id;
			//функция приветствует пользователя когда удалось авторизоваться
			authorizationSuccess(localStorage.userId);
		} else {
			//функция выводит сообщение когда не удалось авторизоваться
			authorizationFail();
			form.reset();
		}
	}

	xhr.send(formData);
})

//функция приветствует пользователя когда удалось авторизоваться
function authorizationSuccess(userId) {

	const welcomeDiv = document.querySelector('.welcome');
	const userIdSpan = document.querySelector('#user_id');
	const signinDiv = document.querySelector('.signin');

	welcomeDiv.classList.add('welcome_active');
	userIdSpan.textContent = userId;
	signinDiv.classList.remove('signin_active');
}

//функция выводит сообщение когда не удалось авторизоваться
function authorizationFail() {
	alert('Неверный логин/пароль');
}


