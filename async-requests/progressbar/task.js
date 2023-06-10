//индикатор прогресса
const progress = document.getElementById('progress');

//сохраняем url для дальнейшего запроса
const url = "https://students.netoservices.ru/nestjs-backend/upload";

//сохраняем форму
const form = document.getElementById('form');

//создаем объект FormFata для дальнейшей отправки
const formData = new FormData(form);

//обработчик события отправки формы 
form.addEventListener('submit', e => {
	e.preventDefault();

	// экземпляр объекта XMLHttpRequest
	const xhr = new XMLHttpRequest();
	//открываем запрос
	xhr.open('POST', url);

	//отслеживаем событие прогресса загрузки на сервер
	xhr.upload.onprogress = e => {
		progress.value = e.loaded/e.total;
		console.log(`Отправлено ${e.loaded} из ${e.total}`);
	}
	xhr.send(formData);
})