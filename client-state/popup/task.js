//функция установки куки
function setCookie(name, value) {
	document.cookie = name + '=' + encodeURIComponent(value);
}

//функция получения куки
function getCookie(name) {
	const pairs = document.cookie.split('; ');
	const cookie = pairs.find(p => p.startsWith(name + '='));

	return cookie ? cookie.slice(name.length + 1): undefined;
}

//функция удаления куки
function deleteCookie(name) {
	document.cookie = name + '=' + '; max-age=0';
}

const modalWindow = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

//обработчик клика на крестик, закрываем окно и устанавливаем куки о закрытии окна
modalClose.addEventListener('click', () => {
	modalWindow.classList.remove('modal_active');
	setCookie('modalClosed', "yes");
})

//если куки о закрытии окна нет, откроем окно
if (getCookie('modalClosed') !== 'yes') {
	modalWindow.classList.add('modal_active');
}

