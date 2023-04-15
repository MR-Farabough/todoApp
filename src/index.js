import {
	schoolTask,
	personalTask,
} from '../src/taskHandling/taskConstructor.js';
import { daysLeft, weeksLeft, fullDateLeft } from './dateHandling/daysLeft.js';
import getTime from './dateHandling/getTime.js';
import { openModal, closeModal } from './modal/modal.js';

// let dueDate = [4, 18, 2023];
// console.log(`Days Left: ${daysLeft(dueDate)}`);
// console.log(`Weeks Left: ${weeksLeft(dueDate)}`);
// console.log('Full Format:', fullDateLeft(dueDate));
getTime();

// Modal Control
const openModalButton = document.getElementById('new-task-button');
const closeModalButton = document.getElementById('close-button');
const taskModal = document.getElementById('task-modal');
const submitBTN = document.getElementById('submit-task');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

openModalButton.addEventListener('click', () => {
	openModal(modal);
});

overlay.addEventListener('click', () => {
	closeModal(modal, taskModal);
});

closeModalButton.addEventListener('click', () => {
	closeModal(modal, taskModal);
});

// Task Submission Functionality
// Task Name
function getTaskFromDom() {
	const taskEntry = document.getElementById('task-entry');
	const taskTitle = taskEntry.value;
	return taskTitle;
}
// Task Note
function getNoteFromDom() {
	const noteEntry = document.getElementById('note-entry');
	const taskNote = noteEntry.value;
	return taskNote;
}
// Category
function getCategoryFromDom() {}
// Date Functionality
function getDateFromDom() {
	const dateEntry = document.getElementById('date-entry');
	const dateArr = [];
	const fullYearArr = [];
	let year = '';
	let month = '';
	let day = '';
	// value string
	for (let index = 0; index < 10; index++) {
		dateArr.push(dateEntry.value[index]);
	}
	//month
	for (let index = 5; index < 7; index++) {
		month += dateArr[index];
	}
	//day
	for (let index = 8; index < 10; index++) {
		day += dateArr[index];
	}
	// year
	for (let index = 0; index < 4; index++) {
		year += dateArr[index];
	}
	fullYearArr.push(month, day, year);
	return fullYearArr;
}

// Priority
function getPriorityFromDom() {
	const urgentPriority = document.getElementById('Urgent');
	const importantPriority = document.getElementById('Important');
	const notPrioritizedPriority = document.getElementById('Not-Prioritized');
	if (urgentPriority.checked) {
		return 'URGENT';
	} else if (importantPriority.checked) {
		return 'Important';
	} else if (notPrioritizedPriority.checked) {
		return 'Not Prioritized';
	} else {
		return 'Not Prioritized';
	}
}
// Type

// Constructor for tasks

submitBTN.addEventListener('click', (e) => {
	e.preventDefault();

	const task = new personalTask(
		getTaskFromDom(),
		getNoteFromDom(),
		getDateFromDom(),
		getPriorityFromDom(),
		'Task'
	);
	getDateFromDom();
	console.log(task);
	closeModal(modal, taskModal);
});

// TODO Form Submission to TASK OBJ
