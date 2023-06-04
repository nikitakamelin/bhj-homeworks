//достаем массив со ссылками
const links = Array.from(document.querySelectorAll('.has-tooltip'));

//функция удаляет все элементы с классом active
const deleteActiveTooltip = () => {
	let activeTooltips = Array.from(document.querySelectorAll('.tooltip_active'));
	activeTooltips.forEach(item => item.remove());
}

//функция создает и добавляет контейнер с подсказкой
const createActiveTooltip = item => {
	let divTooltip = document.createElement('div');
	divTooltip.classList.add("tooltip"); 
	divTooltip.classList.add("tooltip_active");
	divTooltip.innerText = item.title;
	divTooltip.style.left = item.getBoundingClientRect().left +"px";	
	divTooltip.style.top = item.getBoundingClientRect().bottom + "px";
	item.after(divTooltip);
	
	return links.indexOf(item);
}
// в переменную сохраняем значение индекса активной ссылки
let activeIndex = -1;

//функция обработчика клика по ссылке
const checkoutLinks = (item,currentIndex) => {
	
	item.addEventListener('click', (e) => {
		e.preventDefault();

		deleteActiveTooltip();

		//если индекс нажатой в данный момент ссылки (currentIndex) не равен 
		//сохраненному в переменную activeIndex значению, то создаём подсказку
		currentIndex != activeIndex ? activeIndex = createActiveTooltip(item) : activeIndex = -1;
	})
}
//перебор массива со ссылками и выполнение функции-обработчика на каждом элементе
links.forEach(checkoutLinks);