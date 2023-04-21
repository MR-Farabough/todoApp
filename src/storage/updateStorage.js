// for every item in the local storage change daysLeft by running the function again. This function needs to run at MID NIGHT EVERYNIGHT
import { weeksLeft } from '../dateHandling/daysLeft.js';
import { remainingDays } from '../dateHandling/daysLeft.js';

export default function updateStorage(storageArr) {
	if (storageArr == null) {
		return [];
	} else {
		for (let index = 0; index < storageArr.length; index++) {
			if (remainingDays(storageArr[index].dueDate, storageArr[index]) == -1) {
				const overDueArr = storageArr[index].dueDate;
				const daysOverDue = remainingDays(
					storageArr[index].dueDate,
					storageArr[index]
				);
				const indexOfEl = storageArr.indexOf(storageArr[index]);
				const newStorageArr = [];
				const deletedArr = [];
				if (storageArr.length == 1) {
				} else {
					if (JSON.parse(localStorage.getItem('deleted-array')) == null) {
					} else {
						deletedArr.push(storageArr[indexOfEl]);
					}
					newStorageArr = storageArr.slice(indexOfEl, 1);
				}
				localStorage.setItem('deleted-array', JSON.stringify(deletedArr));
				localStorage.setItem('storage-array', JSON.stringify(newStorageArr));
				console.log({ newStorageArr, overDueArr, daysOverDue, indexOfEl });
			}
		}
	}

	let updatedStorage = [];
	for (let index = 0; index < storageArr.length; index++) {
		storageArr[index].daysLeft = weeksLeft(storageArr[index].dueDate);
		updatedStorage.push(storageArr[index]);
	}
	return localStorage.setItem('storage-array', JSON.stringify(updatedStorage));
}
