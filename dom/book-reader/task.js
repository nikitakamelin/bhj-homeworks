//достаем в виде массива список узлов с классом font-size (кнопки A)
const fontSizeElements = Array.from(document.querySelectorAll('.font-size'));

//функция удаляет класс у активного элемента
const clearActiveElement = element => {
	element.find(item => {
		item.classList.remove('font-size_active');
	});
}
//функция присваивает класс активному элементу по нужному индексу
const setActiveElement = (element, index) => {
	element[index].classList.add('font-size_active');
}

//функция обработчик клика на кнопки переключения шрифта 
const checkElement = (item, index) => {
	item.addEventListener('click', (e) => {
		//убираем стандартное поведение у ссылок 
		e.preventDefault();
		//удаляем класс активного эл-та
		clearActiveElement(fontSizeElements);
		//устанавливаем класс новому активному эл-ту 
		setActiveElement(fontSizeElements, index);

		//удаляем классы влияющие на размер шрифта контента
		item.closest('.book').classList.remove('book_fs-small');
		item.closest('.book').classList.remove('book_fs-big');

		//присваиваем новый размер шрифта контенту в зависимости от нажатой кнопки
		if (item.classList.contains('font-size_small')) {
			item.closest('.book').classList.add('book_fs-small');
		};
		if (item.classList.contains('font-size_big')) {
			item.closest('.book').classList.add('book_fs-big');
		};
	})
}
//перебираем массив элементов и вызываем на каждом индексе функцию checkElement
fontSizeElements.forEach(checkElement);



