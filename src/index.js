import getTime from './dateHandling/getTime.js';
import formValidation from './modal/formValidation.js';
import { openModal, closeModal } from './modal/modal.js';
import addToStorage from './storage/localStorage.js';
import saveToText from './storage/saveToText.js';
import updateStorage from './storage/updateStorage.js';
import renderCards from './taskHandling/renderCards.js';

// Update due dates, time, and render cards
updateStorage(JSON.parse(localStorage.getItem('storage-array')));
console.log(JSON.parse(localStorage.getItem('storage-array')), 'Log One');
getTime();
renderCards('Total');

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

// Category Buttons
let category = 'total';
const totalTaskBtn = document.querySelector('.total-taskEL');
const todaysTaskBtn = document.querySelector('.todays-taskEL');
const weeksTaskBtn = document.querySelector('.weeks-taskEL');
const pageLocationEL = document.querySelector('.page-location');
const cardsEL = document.querySelector('.cards');

totalTaskBtn.addEventListener('click', () => {
	category = 'Total';
	pageLocationEL.textContent = `${category} Tasks`;
	cardsEL.textContent = '';
	renderCards(category);
});
todaysTaskBtn.addEventListener('click', () => {
	category = 'Today';
	pageLocationEL.textContent = `${category}'s Tasks`;
	cardsEL.textContent = '';
	renderCards(category);
});
weeksTaskBtn.addEventListener('click', () => {
	category = 'Weeks';
	pageLocationEL.textContent = `Current Week`;
	cardsEL.textContent = '';
	renderCards(category);
});

// Submit BTN controls
submitBTN.addEventListener('click', (e) => {
	e.preventDefault();
	if (!formValidation()) {
		e.preventDefault();
	} else {
		addToStorage(formValidation());
		updateStorage(JSON.parse(localStorage.getItem('storage-array')));
		console.log(JSON.parse(localStorage.getItem('storage-array')), 'log two');
		closeModal(modal, taskModal);
	}
});

// TODO Form Submission Validation CSS
// TODO Category change based on button input (css to show which category you are in)
// TODO Create 'AI' that will change task priority based on parameters (due date, category (school prioritized), type of task, etc)
// TODO Upcoming events functionality
// TODO REMINDER functionality
// TODO ASSIGNMENTS for school. Important events for personal
