export default function createLeftCard(storageArr) {
	let cardArr = [];
	for (let index = 0; index < storageArr.length; index++) {
		const taskObj = storageArr[index];
		const div = document.createElement('div');
		div.classList.add('card');
		const h4 = document.createElement('h4');
		h4.classList.add('task-Title');
		h4.textContent = taskObj.title;
		const p1 = document.createElement('p');
		p1.classList.add('task-note');
		p1.textContent = `${taskObj.note}`;
		const p2 = document.createElement('p');
		p2.classList.add('task-category');
		p2.textContent = taskObj.category;
		const p3 = document.createElement('p');
		p3.classList.add('task-dueDate');
		p3.textContent = `Due date: ${taskObj.dueDate}`;
		const p6 = document.createElement('p');
		p6.classList.add('task-daysLeft');
		p6.textContent = `Days till: ${taskObj.daysLeft}`;
		const p4 = document.createElement('p');
		p4.classList.add('task-priority');
		p4.textContent = `Priority: ${taskObj.priority}`;
		const p5 = document.createElement('p');
		p5.classList.add('task-type');
		p5.textContent = `Task Type: ${taskObj.type}`;
		const delBtn = document.createElement('button');
		delBtn.textContent = 'Delete Task';
		delBtn.setAttribute('id', 'delBTN');
		div.append(h4, p2, p5, p1, p3, p6, p4, delBtn);
		cardArr.push(div);
		delBtn.addEventListener('click', () => {
			div.remove();
			// TODO Remove or move object from main array to trash or completely delete
			console.log('cardCreator.js || DelBtn event listener');
		});
	}
	return cardArr;
}
