const reveals = document.querySelectorAll('.reveal');

//функция определяет находится ли элемент внутри вьюпорта
function isInViewport() {
	return (reveal.getBoundingClientRect().top < window.innerHeight &&
	reveal.getBoundingClientRect().bottom > 0) ? true: false;
}

//обработчик при скролле страницы проверяет видим ли элемент и добавляет класс если видим на странице
const checkoutReveals = item => {
	window.addEventListener('scroll', () => {
		if (isInViewport) {
			item.classList.add('reveal_active');
		}
	})
}
//перебираем массив с блоками класса reveal
reveals.forEach(checkoutReveals);

