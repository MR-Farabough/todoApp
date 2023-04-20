import { daysLeft } from '../dateHandling/daysLeft.js';
import renderCards from './renderCards.js';

export default function createCard(category, taskCategories) {
	const storageArr = JSON.parse(localStorage.getItem('storage-array'));
	function cardConstructor(index) {
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
		const delBTN = document.createElement('button');
		delBTN.classList.add('delete-button');
		delBTN.innerHTML = 'Delete Task';
		div.append(title, notes, dueDate, type, taskCategory, delBTN);
		document.querySelector('.cards').append(div);
		delBTN.addEventListener('click', () => {
			const indexNum = storageArr.indexOf(storageArr[index]);
			storageArr.splice(indexNum, 1);
			div.remove();
			localStorage.setItem('storage-array', JSON.stringify(storageArr));
			document.querySelector('.cards').textContent = '';
			renderCards(category, taskCategories);
			document.querySelector('.quote').textContent = `Total Tasks ${
				document.querySelector('.cards').childNodes.length - 1
			}`;
		});
	}
	// Create card for certain category and taskCategory
	if (storageArr == null) {
		return;
	} else {
		// first chunk is for all categories
		if (category == 'Total' && taskCategories == 'Total') {
			for (let index = 0; index < storageArr.length; index++) {
				cardConstructor(index);
			}
			return '';
		} else if (category == 'Today' && taskCategories == 'Total') {
			for (let index = 0; index < storageArr.length; index++) {
				if (storageArr[index].daysLeft != 0) {
				} else {
					cardConstructor(index);
				}
			}
			return '';
		} else if (category == 'Weeks' && taskCategories == 'Total') {
			for (let index = 0; index < storageArr.length; index++) {
				if (daysLeft(storageArr[index].dueDate) > 7) {
				} else {
					cardConstructor(index);
				}
			}
			return '';
		}
		// Second chunk is for personal category
		if (category == 'Total' && taskCategories == 'Personal') {
			for (let index = 0; index < storageArr.length; index++) {
				if (storageArr[index].category != 'Personal') {
				} else {
					cardConstructor(index);
				}
			}
			return '';
		} else if (category == 'Today' && taskCategories == 'Personal') {
			for (let index = 0; index < storageArr.length; index++) {
				if (storageArr[index].category != 'Personal') {
				} else {
					if (storageArr[index].daysLeft != 0) {
					} else {
						cardConstructor(index);
					}
				}
			}
			return '';
		} else if (category == 'Weeks' && taskCategories == 'Personal') {
			for (let index = 0; index < storageArr.length; index++) {
				if (storageArr[index].category != 'Personal') {
				} else {
					if (daysLeft(storageArr[index].dueDate) > 7) {
					} else {
						cardConstructor(index);
					}
				}
			}
			return '';
		}
		// Third Chunk is for school category
		if (category == 'Total' && taskCategories == 'School') {
			for (let index = 0; index < storageArr.length; index++) {
				if (storageArr[index].category != 'School') {
				} else {
					cardConstructor(index);
				}
			}
			return '';
		} else if (category == 'Today' && taskCategories == 'School') {
			for (let index = 0; index < storageArr.length; index++) {
				if (storageArr[index].category != 'School') {
				} else {
					if (storageArr[index].daysLeft != 0) {
					} else {
						cardConstructor(index);
					}
				}
			}
			return '';
		} else if (category == 'Weeks' && taskCategories == 'School') {
			for (let index = 0; index < storageArr.length; index++) {
				if (storageArr[index].category != 'School') {
				} else {
					if (daysLeft(storageArr[index].dueDate) > 7) {
					} else {
						cardConstructor(index);
					}
				}
			}
			return '';
		}
	}
}
