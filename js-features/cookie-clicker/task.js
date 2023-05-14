let cookie = document.getElementById("cookie");
let clicker__counter = document.getElementById("clicker__counter");
let clicker__speed = document.getElementById("clicker__speed");

// массив, где будут храниться значения таймстемпов кликов
const arr = [0, 0];

cookie.onclick = function() {
	cookie.width === 200 ? cookie.width = 180: cookie.width = 200;
	clicker__counter.textContent++;

	let date = new Date();

	let timestamp = date.getTime(); //достаем таймстэмп в миллисекундах

	// удалим первый элемент массива
	arr.shift();
	//добавим текущий таймстемп клика
	arr.push(timestamp);

	//расчет скорости клика
	if (arr[0] != 0) {
		clicker__speed.textContent = (1000 / (arr[1] - arr[0])).toFixed(2);
	}
};
