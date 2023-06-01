//достаем форму и инпут
const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');

//обработчик отправки формы (нажатия на кнопку)
form.addEventListener('submit', e => {
	e.preventDefault();
	//запрещаем ввод пустой строки или пробела
	if (input.value === '' || input.value === ' ') {
		return;
	}

	//создаем задачу и сохраняем данные в объект для дальнейшего использования
	let {taskRemove, task} = createTask();

	//функция обработчик клика по крестику
	taskRemove.addEventListener('click', e => {
		e.preventDefault();
		closeTask(task);
	})
	//сброс формы (обнуление)ff
	form.reset();
})

//функция создает задачу, возвращает объект, в котором крестик и контейнер с задачей
function createTask() {
	//создаем контейнер с задачей
	const task = document.createElement('div');
	const tasksList = document.getElementById('tasks__list');
	task.classList.add('task');
	tasksList.append(task);

	//наполняем контейнер - создаем див с текстом задачи из инпута
	const taskTitle = document.createElement('div');
	taskTitle.classList.add('task__title');
	taskTitle.innerText = input.value;
	task.append(taskTitle);

	//наполняем контейнер - создаем крестик
	const taskRemove = document.createElement('a');
	taskRemove.classList.add('task__remove');
	taskRemove.innerHTML = '&times;'
	task.append(taskRemove);

	//возвращаем объект - в объекте крестик и контейнер с задачей
	return {taskRemove, task};
}
// функция закрывает задачу
function closeTask(task) {
	task.remove();
}