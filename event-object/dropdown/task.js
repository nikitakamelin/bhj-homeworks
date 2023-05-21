//const dropdown_lists = Array.from(document.querySelectorAll('.dropdown__list'));

//достаем списки и представляем в виде массивов - потребуется, если кнопок будет несколько
const dropdown_values = Array.from(document.querySelectorAll('.dropdown__value'));
const dropdown_items = Array.from(document.querySelectorAll('.dropdown__item'));

//обработчик клика по кнопке, раскрывающей список
const checkoutDropdown = item => {
	item.addEventListener('click', () => {
		item.nextElementSibling.classList.toggle("dropdown__list_active");
	})
}

//обработчик клика по списку, присваивающий новое значение кнопке
const checkoutList = item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		item.closest('.dropdown__list').classList.remove("dropdown__list_active");
		item.closest('.dropdown__list').previousElementSibling.textContent = item.textContent;
	})
}

//перебор массивов с кнопками (если кнопок будет несколько)
dropdown_values.forEach(checkoutDropdown);
dropdown_items.forEach(checkoutList);