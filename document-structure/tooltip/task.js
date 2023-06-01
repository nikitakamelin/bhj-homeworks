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
	//console.log(item.getBoundingClientRect().x);
}

//функция обработчика клика по ссылке
const checkoutLinks = item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();

		deleteActiveTooltip();
		createActiveTooltip(item);
	})
}
//перебор массива со ссылками и выполнение функции-обработчика на каждом элементе
links.forEach(checkoutLinks);

