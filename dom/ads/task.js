
// ! --- Не получается пока никак допилить, чтобы работало, когда ротаторов несколько ---может есть подсказки?)//
//const rotatorCasesParents = Array.from(document.querySelectorAll('.rotator'));

const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));

let i = 0;

// rotatorCasesParents.forEach(item => {
// 	console.log(Array.from(item.children));

// 	setInterval(() => {
// 		rotator(Array.from(item.children));
// 	}, 1000);

// })

//функция принимает массив и идет по его длине увеличивая счетчик до значения длина минус 1, удаляя и добавляя при этом классы
function rotator(array) {
	array[i].classList.remove('rotator__case_active');
	i = (i+1) % array.length;
	array[i].classList.add('rotator__case_active');
}

//в интервале запускаем функцию ротатора
setInterval(() => {
	rotator(rotatorCases);
}, 1000);

