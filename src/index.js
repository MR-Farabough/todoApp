import getTime from './dateHandling/getTime.js';
import formValidation from './modal/formValidation.js';
import { openModal, closeModal } from './modal/modal.js';
import addToStorage from './storage/localStorage.js';
import saveToText from './storage/saveToText.js';
import updateStorage from './storage/updateStorage.js';
import renderLeftSide from './taskHandling/leftSideCardRender.js';

// Update due dates, time, and render cards
updateStorage(JSON.parse(localStorage.getItem('storage-array')));
getTime();

// Save Data to text file
const saveBTN = document.getElementById('saveData');
saveBTN.addEventListener('click', () => {
	saveToText();
});

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

// Submit BTN controls
submitBTN.addEventListener('click', (e) => {
	e.preventDefault();
	if (!formValidation()) {
		e.preventDefault();
	} else {
		const storageArr = JSON.parse(localStorage.getItem('storage-array'));
		addToStorage(formValidation());
		updateStorage(storageArr);
		console.log(storageArr);
		closeModal(modal, taskModal);
	}
});

// TODO Form Submission Validation CSS
// TODO Display card in specific section
// TODO A touch of CSS and layout correction
// TODO Add a blank task to verify the days left will change
// TODO Decide how to retrieve tasks so that it will display information
// TODO Calendar display functionality
// TODO Category change based on button input (css to show which category you are in)
// TODO Create 'AI' that will change task priority based on parameters (due date, category (school prioritized), type of task, etc)
// TODO Upcoming events functionality
// TODO REMINDER functionality
// TODO ASSIGNMENTS for school. Important events for personal
// TODO Decide when to save everything incase of a crash
