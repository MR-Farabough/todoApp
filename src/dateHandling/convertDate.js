import errorLog from '../errorLogger.js';

export default function convertDate() {
	let date = [
		new Date().getUTCMonth() + 1,
		new Date().getUTCDate(),
		new Date().getUTCFullYear(),
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
