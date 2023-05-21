//достаем списки узлов по классу и сразу представляем как массив
const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));

//функция удаляет класс у активной вкладки
const clearActiveTab = (element, className) => {
	element.find(item => item.classList.remove(className));
}

//функция устанавливает класс активной вкладки
const setActiveTab = (element, index, className) => {
	element[index].classList.add(className);
}

// обработчик клика по вкладке
const checkoutTabs = (item, index) => {
	item.addEventListener('click', () => {
	
		clearActiveTab(tabs, 'tab_active');
		clearActiveTab(tabsContent, 'tab__content_active');
		setActiveTab(tabs, index, 'tab_active');
		setActiveTab(tabsContent, index, 'tab__content_active');
	})
}

// перебираем массив вызывая на каждом элементе ф-цию обработчик
tabs.forEach(checkoutTabs);