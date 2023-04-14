import convertDate, { convertDueDate } from './convertDate.js';
import mapMonths from './months.js';

function remainingDays(dueDate) {
	let daysBetween = 0;
	let curDate = new convertDate();
	let deadline = new convertDueDate(dueDate);
	const yearsBetweenDates = () => {
		const deadlineYear = deadline.dueDate[2];
		const curDateYear = curDate.date[2];
		return deadlineYear - curDateYear;
	};
	const yearArr = mapMonths(
		curDate.date,
		deadline.dueDate,
		yearsBetweenDates()
	);
	for (let i = 0; i < yearArr.length; i++) {
		let month = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		for (let index = 0; index < month.length; index++) {
			if (yearArr[i][month[index]] === undefined) {
				daysBetween += 0;
			} else {
				daysBetween += yearArr[i][month[index]];
			}
		}
	}
	return daysBetween;
}

export function daysLeft(dueDate) {
	return remainingDays(dueDate);
}

export function weeksLeft(dueDate) {
	let weeks = remainingDays(dueDate) / 7;
	let days = 0;
	// Checks if there is not a full week
	if (weeks % 1 != 0) {
		days = ((weeks % 1) * 7).toFixed();
		weeks = weeks - (weeks % 1);
	}
	if (days > 0) {
		weeks = `${weeks} and ${days} days`;
	}
	return weeks;
}

export function fullDateLeft(dueDate) {
	let curDate = new convertDate();
	let deadline = new convertDueDate(dueDate);
	const yearsBetweenDates = () => {
		const deadlineYear = deadline.dueDate[2];
		const curDateYear = curDate.date[2];
		return deadlineYear - curDateYear;
	};
	const arr = mapMonths(curDate.date, deadline.dueDate, yearsBetweenDates());
	return arr;
}
