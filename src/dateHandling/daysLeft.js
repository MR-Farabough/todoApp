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
	const yearArr = mapMonths(curDate.date[2], yearsBetweenDates());
	return yearArr;
}
