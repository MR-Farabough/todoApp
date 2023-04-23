import getTime from './dateHandling/getTime.js';
import formValidation from './modal/formValidation.js';
import { openModal, closeModal } from './modal/modal.js';
import addToStorage from './storage/localStorage.js';
import saveToText from './storage/saveToText.js';
import updateStorage from './storage/updateStorage.js';
import checkEmpty from './taskHandling/checkEmptyPage.js';
import getOverdueDays from './taskHandling/overdueDays.js';
import renderCards from './taskHandling/renderCards.js';
import updateTaskCount from './taskHandling/taskCount.js';

// Update due dates, time, and render cards
getOverdueDays(JSON.parse(localStorage.getItem('storage-array')));
updateStorage(JSON.parse(localStorage.getItem('storage-array')));
console.log(
	JSON.parse(localStorage.getItem('storage-array')),
	JSON.parse(localStorage.getItem('deleted-array')),
	'storageArr || deletedArr'
);
getTime();
renderCards('Total', 'Total');

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
let category = 'Total';
const totalTaskBtn = document.querySelector('.total-taskEL');
const todaysTaskBtn = document.querySelector('.todays-taskEL');
const weeksTaskBtn = document.querySelector('.weeks-taskEL');
const overdueTaskBtn = document.querySelector('.overdue-taskEL');
const pageLocationEL = document.querySelector('.page-location');
const cardsEL = document.querySelector('.cards');
document.querySelector(
	'.quote'
).textContent = `Total Tasks: ${updateTaskCount()}`;
checkEmpty();

const homeButton = document.querySelector('.home-icon');
const personalButton = document.querySelector('.personal-button');
const schoolButton = document.querySelector('.school-button');
let taskCategories = 'Total';

totalTaskBtn.addEventListener('click', () => {
	category = 'Total';
	pageLocationEL.textContent = `${category} Tasks`;
	cardsEL.textContent = '';
	renderCards(category, taskCategories);
	document.querySelector(
		'.quote'
	).textContent = `Total Tasks: ${updateTaskCount()}`;
	checkEmpty();
});
todaysTaskBtn.addEventListener('click', () => {
	category = 'Today';
	pageLocationEL.textContent = `${category}'s Tasks`;
	cardsEL.textContent = '';
	renderCards(category, taskCategories);
	document.querySelector(
		'.quote'
	).textContent = `Total Tasks: ${updateTaskCount()}`;
	checkEmpty();
});
weeksTaskBtn.addEventListener('click', () => {
	category = 'Weeks';
	pageLocationEL.textContent = `Current Week`;
	cardsEL.textContent = '';
	renderCards(category, taskCategories);
	document.querySelector(
		'.quote'
	).textContent = `Total Tasks: ${updateTaskCount()}`;
	checkEmpty();
});
overdueTaskBtn.addEventListener('click', () => {
	category = 'Overdue';
	pageLocationEL.textContent = `Overdue Tasks`;
	cardsEL.textContent = '';
	renderCards(category, taskCategories);
	document.querySelector(
		'.quote'
	).textContent = `Total Tasks: ${updateTaskCount()}`;
	checkEmpty();
});

homeButton.addEventListener('click', () => {
	taskCategories = 'Total';
	cardsEL.textContent = '';
	renderCards(category, taskCategories);
	document.querySelector(
		'.quote'
	).textContent = `Total Tasks: ${updateTaskCount()}`;
	document.querySelector('.category-title').textContent = 'All Categories';
	checkEmpty();
});
personalButton.addEventListener('click', () => {
	taskCategories = 'Personal';
	cardsEL.textContent = '';
	renderCards(category, taskCategories);
	document.querySelector(
		'.quote'
	).textContent = `Total Tasks: ${updateTaskCount()}`;
	document.querySelector('.category-title').textContent = 'Personal Category';
	checkEmpty();
});

schoolButton.addEventListener('click', () => {
	taskCategories = 'School';
	cardsEL.textContent = '';
	renderCards(category, taskCategories);
	document.querySelector(
		'.quote'
	).textContent = `Total Tasks: ${updateTaskCount()}`;
	document.querySelector('.category-title').textContent = 'School Category';
	checkEmpty();
});

// Submit BTN controls
submitBTN.addEventListener('click', (e) => {
	e.preventDefault();
	if (!formValidation()) {
		e.preventDefault();
	} else {
		checkEmpty();
		addToStorage(formValidation());
		updateStorage(JSON.parse(localStorage.getItem('storage-array')));
		console.log(JSON.parse(localStorage.getItem('storage-array')), 'log two');
		cardsEL.textContent = '';
		renderCards(category, taskCategories);
		document.querySelector(
			'.quote'
		).textContent = `Total Tasks: ${updateTaskCount()}`;
		closeModal(modal, taskModal);
	}
});

// TODO Form Submission Validation CSS
// TODO Category change based on button input (css to show which category you are in)
// TODO Create 'AI' that will change task priority based on parameters (due date, category (school prioritized), type of task, etc)
// TODO Upcoming events functionality
// TODO REMINDER functionality
// TODO ASSIGNMENTS for school. Important events for personal
