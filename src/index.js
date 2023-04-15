import {
	schoolTask,
	personalTask,
} from '../src/taskHandling/taskConstructor.js';
import { daysLeft, weeksLeft, fullDateLeft } from './dateHandling/daysLeft.js';
import getTime from './dateHandling/getTime.js';
import { openModal, closeModal } from './modal/modal.js';

let dueDate = [4, 18, 2023];
console.log(`Days Left: ${daysLeft(dueDate)}`);
console.log(`Weeks Left: ${weeksLeft(dueDate)}`);
console.log('Full Format:', fullDateLeft(dueDate));
getTime();

// Modal Control
(function modalControl() {
	const openModalButton = document.getElementById('new-task-button');
	const closeModalButton = document.getElementById('close-button');
	const taskModal = document.getElementById('task-modal');
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
})();

// TODO Form Submission to TASK OBJ
