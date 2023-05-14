let element_sec = document.getElementById("timer_sec");
let element_min = document.getElementById("timer_min");
let element_hrs = document.getElementById("timer_hrs");
let link = document.getElementById("link");


// расчитываем оставшееся время в секундах чтобы остановить по нему таймер
let remainedTime = Number(element_sec.textContent) + Number(element_min.textContent)*60 + Number(element_hrs.textContent)*3600;

let intervalId = setInterval(() => {

	remainedTime--;

	if (remainedTime >= 0) {
		element_sec.textContent--;
	} else {
		clearInterval(intervalId);
		link.click();
		//alert("УРааа!");
	}

	if (element_sec.textContent < 0) {
	
		if (element_min.textContent != 0) {
			element_min.textContent--;
		} else {
			element_hrs.textContent--;
			element_min.textContent = 59;
		}
		element_sec.textContent = 59;
	}
	//console.log(remainedTime);
}, 10); // 