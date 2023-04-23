import convertDate from '../dateHandling/convertDate.js';
import mapMonths from '../dateHandling/months.js';

export default function getOverdueDays(storageArr) {
	let overdueArr = [];
	let curTaskArr = [];
	if (storageArr != null) {
		if (storageArr.length > 0) {
			const number = storageArr.length;
			let daysBetween = 0;
			for (let index = 0; index < number; index++) {
				let curDate = convertDate();
				let deadline = storageArr[index].dueDate;
				const yearsBetweenDates = () => {
					const deadlineYear = deadline[2];
					const curDateYear = curDate.date[2];
					return deadlineYear - curDateYear;
				};
				const yearArr = mapMonths(curDate.date, deadline, yearsBetweenDates());
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
							deadline[0] == new Date().getMonth() + 1 &&
							deadline[2] == new Date().getFullYear()
						) {
							daysBetween = deadline[1] - new Date().getDate();
						} else {
							daysBetween += yearArr[i][month[index]];
						}
					}
				}
				if (daysBetween < 0) {
					storageArr[index].daysLeft = daysBetween;
					overdueArr.push(storageArr[index]);
				} else {
					curTaskArr.push(storageArr[index]);
				}
			}
			if (
				overdueArr == [] &&
				JSON.parse(localStorage.getItem('deleted-array')) != null
			) {
				overdueArr = JSON.parse(localStorage.getItem('deleted-array'));
				localStorage.setItem('deleted-array', JSON.stringify(overdueArr));
			} else if (overdueArr.length > 0) {
				localStorage.setItem('deleted-array', JSON.stringify(overdueArr));
			}
			localStorage.setItem('storage-array', JSON.stringify(curTaskArr));
		}
	}
}
