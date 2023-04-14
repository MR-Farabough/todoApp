import errorLog from '../errorLogger.js';

export default function convertDate() {
	let date = [
		new Date().getMonth() + 1,
		new Date().getDate(),
		new Date().getFullYear(),
	];
	return { date };
}

export function convertDueDate(dueDate) {
	if (typeof dueDate != 'object') {
		errorLog(`${dueDate} is not a valid entry`);
	}
	// better error handling
	return { dueDate };
}
