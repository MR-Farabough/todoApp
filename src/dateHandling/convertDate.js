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
	if (
		typeof dueDate != 'object' ||
		dueDate[0] > 12 ||
		dueDate[0] < new Date().getMonth() + 1 ||
		(dueDate[1] < new Date().getDate() &&
			dueDate[0] == new Date().getMonth() + 1) ||
		dueDate[2] < new Date().getFullYear()
	) {
		return errorLog(`${dueDate} is not a valid entry`);
	} else {
		return { dueDate };
	}
}
