import isLeapYear from './leapYear.js';
export default function mapMonths(startingDateArr, endingDateArr, yearCount) {
	let yearArr = [];
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
	for (let i = 0; i < yearCount + 1; i++) {
		const months = {
			January: 31,
			February: 28,
			March: 31,
			April: 30,
			May: 31,
			June: 30,
			July: 31,
			August: 31,
			September: 30,
			October: 31,
			November: 30,
			December: 31,
		};
		if (isLeapYear(startingDateArr[2] + i)) {
			months.February = 29;
			yearArr.push(months);
		} else {
			yearArr.push(months);
		}
		if (startingDateArr[1] + i === startingDateArr[1]) {
			const startingNumber = startingDateArr[i] - 1;
			for (let index = 0; index < startingNumber; index++) {
				delete months[month[index]];
				let indexedStartingMonth = months[month[index + 1]];
				indexedStartingMonth = indexedStartingMonth - startingDateArr[1];
				months[month[index + 1]] = indexedStartingMonth;
			}
		}
		if (i == yearCount) {
			if (endingDateArr[0] === 12) {
				months[month[11]] = endingDateArr[1];
			} else {
				month.reverse();
				for (let index = 0; index < month.length - endingDateArr[0]; index++) {
					delete months[month[index]];
					let indexedEndingMonth = months[month[index + 1]];
					indexedEndingMonth = endingDateArr[1];
					months[month[index + 1]] = indexedEndingMonth;
				}
			}
		}
	}
	return yearArr;
}
