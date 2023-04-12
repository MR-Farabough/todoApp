import errorLog from './errorLogger.js';

export default function convertDate(dateArr) {
	if (typeof dateArr != 'object') {
		errorLog(`${dateArr} is not a valid ENTRY`);
	}
	dateArr[0].length = 1 ? (dateArr[0] = `0${dateArr[0]}`) : dateArr[0];
	dateArr[1].length = 1 ? (dateArr[1] = `0${dateArr[1]}`) : dateArr[1];
	return console.log(dateArr);
}
