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
	if (dueDate[0] > 12) {
		return errorLog(`${dueDate[0]} is not a valid month`);
	} else if (
		dueDate[1] < new Date().getDate() &&
		dueDate[0] == new Date().getMonth() + 1
	) {
		return errorLog('date is less than current date');
	} else if (
		dueDate[0] < new Date().getMonth() + 1 &&
		dueDate[2] == new Date().getFullYear()
	) {
		return errorLog(`${dueDate[0]} is less than the current month`);
	} else if (dueDate[2] < new Date().getFullYear()) {
		return errorLog(`${dueDate[2]} is less than the current year`);
	} else {
		return { dueDate };
	}
}
