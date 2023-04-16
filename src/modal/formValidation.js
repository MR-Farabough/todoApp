import {
	getTaskFromDom,
	getNoteFromDom,
	getDateFromDom,
	getPriorityFromDom,
	getTypeFromDom,
	getCategoryFromDom,
} from '../taskHandling/taskSubmission.js';
import { weeksLeft } from '../dateHandling/daysLeft.js';
import errorLog from '../errorLogger.js';
const undefinedSTR = 'undefinedundefinedundefinedundefined';

export default function formValidation() {
	if (getTaskFromDom().length < 1) {
		errorLog('Task Name invalid');
	}
	if (getDateFromDom().length < 1) {
		errorLog('Must enter Date');
	}
	if (getCategoryFromDom() == undefined) {
		errorLog('Category must be filled out');
	}
	if (
		getDateFromDom()[0] == undefinedSTR ||
		getDateFromDom()[1] == undefinedSTR ||
		getDateFromDom()[2] == undefinedSTR
	) {
		errorLog('Date test');
	}
	if (
		getTaskFromDom().length > 5 &&
		getDateFromDom().length > 5 &&
		getCategoryFromDom() != undefined
	) {
		return (task = new Task(
			getTaskFromDom(),
			getNoteFromDom(),
			getDateFromDom(),
			getPriorityFromDom(),
			getTypeFromDom(),
			weeksLeft(getDateFromDom()),
			getCategoryFromDom()
		));
	}
}
