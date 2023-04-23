import { daysLeft } from '../dateHandling/daysLeft.js';
import checkEmpty from './checkEmptyPage.js';
import updateTaskCount from './taskCount.js';
import renderCards from './renderCards.js';

export default function createCard(category, taskCategories) {
	const storageArr = JSON.parse(localStorage.getItem('storage-array'));
	const overdueArr = JSON.parse(localStorage.getItem('deleted-array'));
	function cardConstructor(index, selectedStorageArr, storageArrKey) {
		const div = document.createElement('div');
		div.style.backgroundColor = 'white';
		div.style.width = '95%';
		div.style.margin = '10px';
		div.style.borderRadius = '15px';
		div.style.padding = '10px';
		if (selectedStorageArr[index].priority == 'Not Prioritized') {
			div.style.borderLeft = '8px solid green';
		} else if (selectedStorageArr[index].priority == 'Important') {
			div.style.borderLeft = '8px solid orange';
		} else if (selectedStorageArr[index].priority == 'URGENT') {
			div.style.borderLeft = '8px solid red';
		}
		div.style.justifyContent = 'space-evenly';
		div.style.alignItems = 'center';
		let title = document.createElement('h4');
		title.textContent = selectedStorageArr[index].title;
		let notes = document.createElement('p');
		notes.textContent = selectedStorageArr[index].note;
		let dueDate = document.createElement('p');
		dueDate = `Due Date: ${selectedStorageArr[index].dueDate} || ${selectedStorageArr[index].daysLeft} left`;
		let priority = document.createElement('p');
		priority.textContent = `Priority: ${selectedStorageArr[index].priority}`;
		let type = document.createElement('p');
		type.textContent = `Type: ${selectedStorageArr[index].type}`;
		let taskCategory = document.createElement('p');
		taskCategory.textContent = selectedStorageArr[index].category;
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
			const indexNum = selectedStorageArr.indexOf(selectedStorageArr[index]);
			selectedStorageArr.splice(indexNum, 1);
			div.remove();
			localStorage.setItem(storageArrKey, JSON.stringify(selectedStorageArr));
			document.querySelector('.cards').textContent = '';
			renderCards(category, taskCategories);
			document.querySelector(
				'.quote'
			).textContent = `Total Tasks: ${updateTaskCount()}`;
			checkEmpty();
		});
	}
	// Create card for certain category and taskCategory
	if (storageArr == null) {
		return;
	} else {
		// first chunk is for all categories
		const overdueTaskArr = JSON.parse(localStorage.getItem('deleted-array'));
		if (category == 'Total' && taskCategories == 'Total') {
			for (let index = 0; index < storageArr.length; index++) {
				cardConstructor(index, storageArr, 'storage-array');
			}
			return '';
		} else if (category == 'Today' && taskCategories == 'Total') {
			for (let index = 0; index < storageArr.length; index++) {
				if (storageArr[index].daysLeft != 0) {
				} else {
					cardConstructor(index, storageArr, 'storage-array');
				}
			}
			return '';
		} else if (category == 'Weeks' && taskCategories == 'Total') {
			for (let index = 0; index < storageArr.length; index++) {
				if (daysLeft(storageArr[index].dueDate) > 7) {
				} else {
					cardConstructor(index, storageArr, 'storage-array');
				}
			}
			return '';
		} else if (category == 'Overdue' && taskCategories == 'Total') {
			for (let index = 0; index < overdueTaskArr.length; index++) {
				cardConstructor(index, overdueArr, 'deleted-array');
			}
			return '';
		}
		// Second chunk is for personal category
		if (category == 'Total' && taskCategories == 'Personal') {
			for (let index = 0; index < storageArr.length; index++) {
				if (storageArr[index].category != 'Personal') {
				} else {
					cardConstructor(index, storageArr, 'storage-array');
				}
			}
			return '';
		} else if (category == 'Today' && taskCategories == 'Personal') {
			for (let index = 0; index < storageArr.length; index++) {
				if (storageArr[index].category != 'Personal') {
				} else {
					if (storageArr[index].daysLeft != 0) {
					} else {
						cardConstructor(index, storageArr, 'storage-array');
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
						cardConstructor(index, storageArr, 'storage-array');
					}
				}
			}
			return '';
		} else if (category == 'Overdue' && taskCategories == 'Personal') {
			if (overdueTaskArr != null) {
				for (let index = 0; index < overdueTaskArr.length; index++) {
					if (overdueArr[index].category != 'Personal') {
					} else {
						cardConstructor(index, overdueArr, 'deleted-array');
					}
				}
			}
			return '';
		}
	}
	// Third Chunk is for school category
	if (category == 'Total' && taskCategories == 'School') {
		for (let index = 0; index < storageArr.length; index++) {
			if (storageArr[index].category != 'School') {
			} else {
				cardConstructor(index, storageArr, 'storage-array');
			}
		}
		return '';
	} else if (category == 'Today' && taskCategories == 'School') {
		for (let index = 0; index < storageArr.length; index++) {
			if (storageArr[index].category != 'School') {
			} else {
				if (storageArr[index].daysLeft != 0) {
				} else {
					cardConstructor(index, storageArr, 'storage-array');
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
					cardConstructor(index, storageArr, 'storage-array');
				}
			}
		}
		return '';
	} else if (category == 'Overdue' && taskCategories == 'School') {
		if (overdueArr != null) {
			for (let index = 0; index < overdueArr.length; index++) {
				if (overdueArr[index].category != 'School') {
				} else {
					cardConstructor(index, overdueArr, 'storage-array');
				}
			}
		}
		return '';
	}
}
