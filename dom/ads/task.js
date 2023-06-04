
// ! --- Не получается пока никак допилить, чтобы работало, когда ротаторов несколько ---может есть подсказки?)//
//const rotatorCasesParents = Array.from(document.querySelectorAll('.rotator'));

// const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));

// let i = 0;

// // rotatorCasesParents.forEach(item => {
// // 	console.log(Array.from(item.children));

// // 	setInterval(() => {
// // 		rotator(Array.from(item.children));
// // 	}, 1000);

// // })

// //функция принимает массив и идет по его длине увеличивая счетчик до значения длина минус 1, удаляя и добавляя при этом классы
// function rotator(array) {
// 	array[i].classList.remove('rotator__case_active');
// 	i = (i+1) % array.length;
// 	array[i].classList.add('rotator__case_active');
// }

// //в интервале запускаем функцию ротатора
// setInterval(() => {
// 	rotator(rotatorCases);
// }, 1000);


// * Решение эксперта
//собираем все ротаторы в массив
const rotators = [...document.querySelectorAll('.rotator')]; //! короткая контструкция сбора в массив ноудлиста

// проходим по массиву циклом
rotators.forEach((el) => {
	//у каждого элемента собираем чилдрены в массив
  const childrenElements = [...el.children];
  console.log(childrenElements);
  changeBlock(childrenElements);
});

function changeBlock(children) {
  const elements = children;
  let counter = 0;

  setInterval(() => {
	//каждому rotator__case удаляем класс active
    elements.forEach((el) => el.classList.remove('rotator__case_active'));

    if (counter < elements.length - 1) {
      elements[counter + 1].style.color = elements[counter + 1].dataset.color;
      elements[counter + 1].classList.add('rotator__case_active');
      counter += 1;
    } else {
      elements[0].style.color = elements[0].dataset.color;
      elements[0].classList.add('rotator__case_active');
      counter = 0;
    }
  }, 1000);
}
