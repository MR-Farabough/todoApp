import convertDate from './convertDate.js';

export default function daysLeft(dueDate) {
	let curDate = [
		`${new Date().getUTCMonth()}`,
		`${new Date().getUTCDate()}`,
		`${new Date().getUTCFullYear()}`,
	];
	convertDate(curDate);
	dueDate = '12 / 12 / 2023';
	// let daysRemaining = dueDate - curDate;
	// console.log(dueDate, curDate, daysRemaining);
}
