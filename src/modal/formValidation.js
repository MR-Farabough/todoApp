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
		return errorLog('Task Name invalid');
	}
	if (getCategoryFromDom() == undefined) {
		return errorLog('Category must be filled out');
	}
	if (
		getDateFromDom()[0] == undefined ||
		getDateFromDom()[1] == undefined ||
		getDateFromDom()[2] == undefined
	) {
		return errorLog('Must enter Date');
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
