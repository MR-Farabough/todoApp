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
import Task from '../taskHandling/taskConstructor.js';

export default function formValidation() {
	if (getTaskFromDom().length < 1) {
		errorLog('Task Name invalid');
		return false;
	}
	if (getCategoryFromDom() == undefined) {
		errorLog('Category must be filled  out');
		return false;
	}
	if (
		getDateFromDom()[0] == undefined ||
		getDateFromDom()[1] == undefined ||
		getDateFromDom()[2] == undefined
	) {
		errorLog('Must enter Date');
		return false;
	}
	if (
		getTaskFromDom().length > 1 &&
		getDateFromDom()[0] != undefined &&
		getDateFromDom()[1] != undefined &&
		getDateFromDom()[2] != undefined &&
		getCategoryFromDom() != undefined
	) {
		const obj = new Task(
			getTaskFromDom(),
			getNoteFromDom(),
			getDateFromDom(),
			getPriorityFromDom(),
			getTypeFromDom(),
			weeksLeft(getDateFromDom()),
			getCategoryFromDom()
		);
		return obj;
	}
}
