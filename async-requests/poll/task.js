//создаем экземпляр объекта XMLHttpRequest
const xhr = new XMLHttpRequest();

const url = 'https://students.netoservices.ru/nestjs-backend/poll';

//открываем запрос
xhr.open('GET', url);

//устанавливаем требуемый тип ответа
xhr.responseType = 'json';

//функция которая сработает как только получим ответ от сервера
xhr.onload = () => {
	//простая обработка ошибок
	if (xhr.status != 200) {
		alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
	}
	
	//функция отображает на странице вопрос (title) из опроса
	setTitle(xhr.response.data.title);

	//из ответа сервера сохраним массив ответов
	let answersArray = xhr.response.data.answers;
	
	//сохраняем Id опроса
	const voteId = xhr.response.id;

	//функция отображает кнопки с ответами принимая массив ответов
	renderAnswerButton(answersArray);

	let buttons = [...document.getElementsByClassName('poll__answer')];

	//обработчик события нажатия на кнопку с ответом
	buttons.forEach((item, index) => {
		item.addEventListener('click', () => {
			
			alert('Спасибо, ваш голос засчитан!');

			//отправляем другой запрос на сервер чтобы получить результаты опроса
			let xhr1 = new XMLHttpRequest();
			xhr1.open( 'POST', url);
			xhr1.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );

			//обрабатываем ответ от сервера
			xhr1.onload = () => {
				//достаём массив объектов с результатами опроса из респонса сервера
				const votesArray = JSON.parse(xhr1.response).stat;
				let sum = 0;

				//наверное, не совсем корректно, но таким образом убираем кнопки, чтобы заменить результатами опроса
				document.getElementById('poll__answers').innerHTML = '';

				// получаем сумму голосов для дальнейших расчетов
				votesArray.forEach(item => {
					sum = sum + item.votes;
				})
				//! 2 подряд цикла выглядит не очень, что-то не доходит откуда еще взять сумму голосов
				//построчно отрисовывем результаты опроса
				votesArray.forEach(item => {
					
					let html = `
					${item.answer}: ${((item.votes/sum)*100).toFixed(2)} % <br>
					`;

					document.getElementById('poll__answers').innerHTML += html;
				})
			}
			xhr1.send(`vote=${voteId}&answer=${index}`);
		})	
	})
	
}

xhr.send();

//функция отображает на странице вопрос (title) из опроса
const setTitle = (title) => {
	document.getElementById('poll__title').innerHTML = title;
}

//функция отображает кнопки с ответами принимая массив ответов
const renderAnswerButton = (answersArray) => {

	const answersDiv = document.getElementById('poll__answers');
	const classHTML = 'class="poll__answer"'; 

	//для каждого элемента массива рисуем кнопку
	answersArray.forEach(item => {
		
		let hmtl = `
		<button ${classHTML}>
		${item}
		</button>`;
		
		answersDiv.innerHTML += hmtl;
	})
}

