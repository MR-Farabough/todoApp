import errorLog from '../errorLogger.js';

export default function addToStorage(obj) {
	let storageArr = [];
	if (obj == undefined) {
		return errorLog('Task not added to storage');
	} else if (localStorage.getItem('storage-array') != null) {
		storageArr = JSON.parse(localStorage.getItem('storage-array'));
	}
	if (obj != undefined) {
		// if (prevEntries == null) {
		// 	localStorage.setItem('storage-array', JSON.stringify(obj));
		// } else {
		storageArr.push(obj);
		localStorage.setItem('storage-array', JSON.stringify(storageArr));
		console.log(JSON.parse(localStorage.getItem('storage-array'), 'TEST-ONE'));
		// }
		return;
	}
}
