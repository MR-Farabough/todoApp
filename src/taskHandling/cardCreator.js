export default function createCard(category) {
	const storageArr = JSON.parse(localStorage.getItem('storage-array'));
	if (storageArr == null) {
		return;
	} else {
		if (category == 'total') {
			for (let index = 0; index < storageArr.length; index++) {
				const div = document.createElement('div');
				div.style.backgroundColor = 'white';
				div.style.width = '95%';
				div.style.margin = '10px';
				div.style.borderRadius = '15px';
				div.style.padding = '10px';
				if (storageArr[index].priority == 'Not Prioritized') {
					div.style.borderLeft = '8px solid green';
				} else if (storageArr[index].priority == 'Important') {
					div.style.borderLeft = '8px solid orange';
				} else if (storageArr[index].priority == 'URGENT') {
					div.style.borderLeft = '8px solid red';
				}
				div.style.justifyContent = 'space-evenly';
				div.style.alignItems = 'center';
				let title = document.createElement('h4');
				title.textContent = storageArr[index].title;
				let notes = document.createElement('p');
				notes.textContent = storageArr[index].notes;
				let dueDate = document.createElement('p');
				dueDate = `Due Date: ${storageArr[index].dueDate} --- ${storageArr[index].daysLeft} left`;
				let priority = document.createElement('p');
				priority.textContent = `Priority: ${storageArr[index].priority}`;
				let type = document.createElement('p');
				type.textContent = `Type: ${storageArr[index].type}`;
				let taskCategory = document.createElement('p');
				taskCategory.textContent = storageArr[index].category;
				if (taskCategory.innerHTML == 'Personal') {
					taskCategory.style.backgroundColor = 'lightgreen';
					taskCategory.style.padding = '5px';
					taskCategory.style.width = 'fit-content';
				} else {
					taskCategory.style.backgroundColor = 'lightcoral';
					taskCategory.style.padding = '5px';
					taskCategory.style.width = 'fit-content';
				}
				div.append(title, notes, dueDate, priority, type, taskCategory);
				document.querySelector('.cards').append(div);
			}
			return '';
		} else if (category == 'today') {
		} else if (category == 'weeks') {
		}
	}
}
