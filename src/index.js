import Task from '../src/taskHandling/taskConstructor.js';
import { daysLeft, weeksLeft, fullDateLeft } from './dateHandling/daysLeft.js';
import getTime from './dateHandling/getTime.js';
import { openModal, closeModal } from './modal/modal.js';
import {
	getTaskFromDom,
	getNoteFromDom,
	getDateFromDom,
	getPriorityFromDom,
	getTypeFromDom,
	getCategoryFromDom,
} from './taskHandling/taskSubmission.js';
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

// Constructor for tasks

submitBTN.addEventListener('click', (e) => {
	e.preventDefault();

	const task = new Task(
		getTaskFromDom(),
		getNoteFromDom(),
		getDateFromDom(),
		getPriorityFromDom(),
		getTypeFromDom(),
		weeksLeft(getDateFromDom()),
		getCategoryFromDom()
	);
	console.log(task);
	closeModal(modal, taskModal);
});

// TODO Form Submission Validation
// TODO Display card in specific section
// TODO A touch of CSS and layout correction
// TODO Store Tasks in an ARRAY
// TODO Add a blank task to verify the days left will change
// TODO Save taskArr to LocalStorage
// TODO Decide how to retrieve tasks so that it will display information
// TODO Write (LocalStorage || Array) to text file
// TODO Calendar display functionality
// TODO Category change based on button input (css to show which category you are in)
// TODO Create 'AI' that will change task priority based on parameters (due date, category (school prioritized), type of task, etc)
// TODO Upcoming events functionality
// TODO REMINDER functionality
// TODO ASSIGNMENTS for school. Important events for personal
// TODO Decide when to save everything incase of a crash
