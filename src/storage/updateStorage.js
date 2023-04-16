// for every item in the local storage change daysLeft by running the function again. This function needs to run at MID NIGHT EVERYNIGHT
import { weeksLeft } from '../dateHandling/daysLeft.js';

export default function updateStorage(storageArr) {
	if (storageArr == null) {
		return;
	} else {
		let updatedStorage = [];
		for (let index = 0; index < storageArr.length; index++) {
			storageArr[index].daysLeft = weeksLeft(storageArr[index].dueDate);
			updatedStorage.push(storageArr[index]);
		}
		console.log(updatedStorage);
	}
}
