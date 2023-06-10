//создаем экземпляр объекта XMLHttpRequest
const xhr = new XMLHttpRequest();

//открываем запрос
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

//устанавливаем требуемый тип ответа
xhr.responseType = 'json';

//функция которая сработает как только получим ответ от сервера
xhr.onload = () => {
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
			
			//alert('Спасибо, ваш голос засчитан!');

			//! Подскажите, пжлста
			//! здесь пытался реализовать показ результатов голосования,
			//! но респонс не виден в консоли, хотя в превью он виден
			let xhr1 = new XMLHttpRequest;
			xhr1.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
			xhr1.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
			xhr1.send(`vote=${voteId}&answer=${index}`);

			console.log(xhr1.response); 	 
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

