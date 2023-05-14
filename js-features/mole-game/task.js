let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

let hole = function getHole(index) {
	return document.getElementById(`hole${index}`);
}

//создал флаг чтобы таймер не вызывался при каждом клике. Переменная меняется на true во время клика по ячейке
let isTimerStarted = false;
let timerId = null;

//сброс очков
function reset() {
	dead.textContent = 0;
	lost.textContent = 0;
}

for (let i = 1; i < 10; i++) {

	hole(i).onclick = function() {
		
		// таймер ограничивающий время игры
		if (!isTimerStarted) {
			timerId = setTimeout(() => {
				alert("Время вышло");		
				isTimerStarted = false;
				reset();
				//location.reload();
			}, 7000);
		} 
		
		//логика набора очков
		if (hole(i).className.includes("hole_has-mole")) {
			dead.textContent++;
			isTimerStarted = true;
		} else {
			lost.textContent++;
			isTimerStarted = true;
		}

		//условие победы
		if (dead.textContent === "5") {
			alert("ПОбеда");
			reset();
			clearTimeout(timerId);
			//location.reload();
		}

		//условие поражения
		if (lost.textContent === "3") {
			alert("Вы проиграли!");
			reset();
			clearTimeout(timerId);
			//location.reload();
		}
	}
}