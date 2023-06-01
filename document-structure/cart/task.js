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
		//ниже нуля количество невозможно
		if (productQuantity.innerText <= 0) {
			return;
		}
		productQuantity.innerText--;
	})
});

//достаем массив кнопок 'Добавить в корзину'
const productAdds = document.querySelectorAll('.product__add');
//const cartProducts = document.querySelector('.cart__products').children;

//перебираем массив кнопок 'добавить в корзину'
productAdds.forEach( item => {
	//количество товара в корзине
	let productQuantityCounter = 0;
	
	//обработчик клика по кнопке "Добавить в корзину"
	item.addEventListener('click', () => {
		//достаем карточку товара
		const product = item.closest('.product');
		//Количество товара в корзине
		const quantityValueDiv = product.querySelector('.product__quantity-value');
		if (quantityValueDiv.innerText === 0) {
			return;
		}
		//изображение товара из карточки
		const img = product.querySelector('.product__image');
		//ID товара
		const dataId = product.dataset.id;

		//обновляем счетчик количества
		productQuantityCounter = productQuantityCounter + Number(quantityValueDiv.innerText);
		
		//достаем массив товаров попавших в корзину
		const cartProducts = document.querySelector('.cart__products').children;

		//! При конструкции указанной ниже, карточки скачут, когда меняем количество товара в корзине 
		//удаляем карточку из корзины если она уже создана (чтобы затем создать новую с правильным количеством)
		Array.from(cartProducts).forEach(item => {
			removeCartProduct(item, dataId);		
		})
		//создаем карточку в корзине
		createCartProduct(dataId, img, productQuantityCounter);
	})	
})
//функция удаления карточки из корзины
function removeCartProduct(item, dataId) {
	if (item.dataset.id === dataId) {
		item.remove();
		//item.replaceWith(item);
	}
}
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
	//return cartProduct;
}


// isCreated = Array.from(cartProducts).find(item => item.dataset.id === dataId);
//console.log(isCreated);
		
		// if (quantityValueDiv.innerText > 0) {
		// 	if (!isCreated) {
		// 		console.log("еще не создан");
		// 		isCreated = drawCartProduct(dataId, img, productQuantityCounter);
	
		// 	} else {
		// 		console.log("уже создан");
		// 	}
		// 	addAmountToCart(productQuantityCounter, isCreated);
		// 	console.log(isCreated);
		// }


// function addAmountToCart(productQuantityCounter, cartProduct) {
// 	const count = document.createElement('div');
// 	count.classList.add('cart__product-count');
// 	count.innerText = productQuantityCounter;

// 	// cartProduct.append(count);
// }