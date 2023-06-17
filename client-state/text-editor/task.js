let textarea = document.getElementById('editor');

//при вводе информации в поле, запишем ее в localstorage
textarea.addEventListener('change', (e) => {	
	localStorage.setItem('editor', e.currentTarget.value);
})

//заполним поле редактора информацией из локального хранилища
textarea.textContent = localStorage.getItem('editor');

const button = document.querySelector('button');

//обработчик клика на кнопку Очистить
button.addEventListener('click', e => {
	localStorage.removeItem('editor');
	textarea.value = '';
	//location.reload();
})