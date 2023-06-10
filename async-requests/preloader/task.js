
// экземпляр объекта XMLHttpRequest
const xhr = new XMLHttpRequest();
//элемент анимации загрузки
const loader = document.getElementById('loader');

//открыли запрос
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
//присвоили какой тип ответа хотим видеть
xhr.responseType = 'json';

//функция которая сработает как только получим ответ от сервера
xhr.onload = () => {
		//уберем анимацию
		loader.classList.remove('loader_active');
		//сохраним в массив объект с сайта cbr c валютами
		let arrayOfCurrencies = Object.values(xhr.response.response.Valute);
		//для каждой строки массива выполним следующие действия
		arrayOfCurrencies.forEach(item => {
			
			item.Value = item.Value.toFixed(2);
			//выполним функцию отрисовки строк с валютами
			renderCurrencyItems(item.CharCode, item.Value);
		})

}

//отпправим запрос
xhr.send();

//функция отрисовывает строки с валютами
const renderCurrencyItems = (itemCode, itemValue) => {
	let html = `
	<div class="item">
		<div class="item__code">${itemCode}
		</div>
		<div class = "item__value">${itemValue}
		</div>
		<div class = "item__currency">руб.
		</div>
	</div>
	`
	const items = document.getElementById('items');
	items.innerHTML += html;
}