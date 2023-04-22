// for every item in the local storage change daysLeft by running the function again. This function needs to run at MID NIGHT EVERYNIGHT
import { daysLeft, weeksLeft } from '../dateHandling/daysLeft.js';
import { remainingDays } from '../dateHandling/daysLeft.js';

export default function updateStorage(storageArr) {
	if (storageArr == null) {
		return [];
	} else {
		for (let index = 0; index < storageArr.length; index++) {
			let results;
			if (storageArr[index].dueDate == undefined) {
				results = '';
			} else {
				results = storageArr[index].dueDate;
			}
			if (remainingDays(storageArr[index].dueDate, results) == -1) {
				const indexOfEl = storageArr.indexOf(storageArr[index]);
				let newStorageArr = [];
				let deletedArr = [];
				console.log(
					JSON.parse(localStorage.getItem('deleted-array')),
					'deleted array updateStorage.js line 17'
				);
				if (JSON.parse(localStorage.getItem('deleted-array')) != null) {
					deletedArr = JSON.parse(localStorage.getItem('deleted-array'));
				}
				if (storageArr.length == 1 && deletedArr.length == 0) {
					newStorageArr = JSON.parse(localStorage.getItem('storage-array'));
					deletedArr.push(storageArr[indexOfEl]);
				} else {
					if (JSON.parse(localStorage.getItem('deleted-array')) != null) {
						deletedArr.push(storageArr[indexOfEl]);
					}
					newStorageArr = storageArr.slice(indexOfEl, 1);
				}
				localStorage.setItem('deleted-array', JSON.stringify(deletedArr));
				localStorage.setItem('storage-array', JSON.stringify(newStorageArr));
			}
		}
	}
	let updatedStorage = [];
	let passedDuedate = [];
	const deletedArr = JSON.parse(localStorage.getItem('deleted-array'));
	if (deletedArr != null) {
		for (let index = 0; index < deletedArr.length; index++) {
			if (deletedArr != null) {
			}
			deletedArr[index].daysLeft = `${remainingDays(
				deletedArr[index].dueDate,
				deletedArr[index].dueDate
			)} days behind`;
			passedDuedate.push(deletedArr[index]);
		}
	}
	for (let index = 0; index < storageArr.length; index++) {
		storageArr[index].daysLeft = weeksLeft(storageArr[index].dueDate);
		updatedStorage.push(storageArr[index]);
	}
	localStorage.setItem('deleted-array', JSON.stringify(passedDuedate));
	return localStorage.setItem('storage-array', JSON.stringify(updatedStorage));
}
