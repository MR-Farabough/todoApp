import convertDate, { convertDueDate } from './convertDate.js';
import mapMonths from './months.js';

export function remainingDays(dueDate, pastDateArr) {
	let daysBetween = 0;
	let curDate = convertDate();
	let deadline;
	if (pastDateArr) {
		deadline = pastDateArr;
	} else {
		deadline = convertDueDate(dueDate);
	}
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
			} else if (
				dueDate[0] == new Date().getMonth() + 1 &&
				dueDate[2] == new Date().getFullYear()
			) {
				daysBetween = dueDate[1] - new Date().getDate();
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
	if (weeks % 1 != 0) {
		days = ((weeks % 1) * 7).toFixed();
		weeks = weeks - (weeks % 1);
	}
	if (weeks == 1 && days == 0) {
		weeks = `${weeks} week`;
	} else if (weeks > 1 && days == 0) {
		weeks = `${weeks} weeks`;
	}
	if (days > 1 && (weeks > 1 || weeks < 1)) {
		weeks = `${weeks} weeks and ${days} days`;
	} else if (days == 1 && (weeks > 1 || weeks < 1)) {
		weeks = `${weeks} weeks and ${days} day`;
	} else if (days > 1 && weeks == 1) {
		weeks = `${weeks} week and ${days} days`;
	} else if (days == 1 && weeks == 1) {
		weeks = `${weeks} week and ${days} day`;
	}
	return weeks;
}
// TODO This function needs to return x years x months x days left
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
