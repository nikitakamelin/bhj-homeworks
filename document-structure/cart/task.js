//достаем элементы управления количеством
const productQuantityControls = document.querySelectorAll('.product__quantity-controls');

//перебираем массив с элементами управления количеством
productQuantityControls.forEach( item => {
	//достаем кнопки плюс, минус, а также количество 
	const productQuantityInc = item.querySelector('.product__quantity-control_inc');
	const productQuantityDec = item.querySelector('.product__quantity-control_dec');
	let productQuantity = item.querySelector('.product__quantity-value');

	//добавляем обработчики клика по кнопкам плюс и минус
	productQuantityInc.addEventListener('click', () => {
		productQuantity.innerText++;
	})
	productQuantityDec.addEventListener('click', () => {
		//меньше 1 количество добавить невозможно
		if (productQuantity.innerText <= 1) {
			return;
		}
		productQuantity.innerText--;
	})
});

//достаем массив кнопок 'Добавить в корзину'
const productAdds = [...document.querySelectorAll('.product__add')];

//перебираем массив кнопок Добавить в корзину
productAdds.forEach(item => {

	//достаем карточку товара который хотим положить в корзину, и контейнер с количеством
	const product = item.closest('.product');
	const quantityValueDiv = product.querySelector('.product__quantity-value');

	//обработчик клика по кнопке Добавить в корзину
	item.addEventListener('click', () => {

		//достаем массив товаров попавших в корзину
		const cartProducts = [...document.querySelector('.cart__products').children];

		//если в корзину уже добавлен товар, который мы хотим добавить снова, находим этот элемент
		let foundinCart = cartProducts.find(item => item.dataset.id === product.dataset.id);

		//если элемент в корзине найден, меняем количество
		if(foundinCart) {
			console.log("меняем количество");
			addAmountToCart(foundinCart, quantityValueDiv);
		} else {
			//иначе отрисовываем элемент в корзине
			console.log("рисуем элемент");
			const img = product.querySelector('.product__image');			
			createCartProduct(product.dataset.id, img, quantityValueDiv.innerText);
		}

	})
	
})

//функция создания карточки товара в корзине
function createCartProduct(dataId, img, productQuantityCounter) {

	const cartProducts = document.querySelector('.cart__products');
	const cartProduct = document.createElement('div');
	cartProduct.classList.add('cart__product');
	cartProduct.dataset.id = dataId;

	const cartImage = document.createElement('img');
	cartImage.classList.add('cart__product-image');
	cartImage.src = img.src;

	const count = document.createElement('div');
	count.classList.add('cart__product-count');
	count.innerText = productQuantityCounter;

	cartProducts.append(cartProduct);
	cartProduct.append(cartImage);
	cartProduct.append(count);
}

//Функция добавляет количество товара в корзине
function addAmountToCart(productInCart, productToAdd) {

	let amountInCart = +productInCart.querySelector('.cart__product-count').innerText;
	let amountToAdd = +productToAdd.innerText;

	amountInCart = amountInCart + amountToAdd;

	productInCart.querySelector('.cart__product-count').innerText = amountInCart;
}