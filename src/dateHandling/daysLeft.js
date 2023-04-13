import convertDate, { convertDueDate } from './convertDate.js';
import mapMonths from './months.js';

export default function daysLeft(dueDate) {
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
	let dayCount = 0;
	for (let index = 0; index < yearArr.length; index++) {
		// console.log(yearArr[index].May);
	}
	return yearArr;
}
