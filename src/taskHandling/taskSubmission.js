// Task Submission Functionality
// Task Name
export function getTaskFromDom() {
	const taskEntry = document.getElementById('task-entry');
	const taskTitle = taskEntry.value;
	return taskTitle;
}
// Task Note
export function getNoteFromDom() {
	const noteEntry = document.getElementById('note-entry');
	const taskNote = noteEntry.value;
	return taskNote;
}
// Category
export function getCategoryFromDom() {
	const schoolBTN = document.getElementById('School');
	const personalBTN = document.getElementById('Personal');
	if (schoolBTN.checked) {
		return 'School';
	} else if (personalBTN.checked) {
		return 'Personal';
	}
}
// Date Functionality
export function getDateFromDom() {
	const dateEntry = document.getElementById('date-entry');
	const dateArr = [];
	let fullYearArr = [];
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
	if (
		year == 'undefinedundefinedundefinedundefined' ||
		month == undefined ||
		day == undefined
	) {
		fullYearArr = [];
	} else {
		fullYearArr.push(parseInt(month), parseInt(day), parseInt(year));
	}
	return fullYearArr;
}

// Priority
export function getPriorityFromDom() {
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
export function getTypeFromDom() {
	const type = document.getElementById('type').value;
	return type;
}
