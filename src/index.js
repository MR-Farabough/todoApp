import {
	schoolTask,
	personalTask,
} from '../src/taskHandling/taskConstructor.js';
import { daysLeft, weeksLeft, fullDateLeft } from './dateHandling/daysLeft.js';
import getTime from './dateHandling/getTime.js';

const app = (() => {
	let dueDate = [4, 18, 2023];
	console.log(`Days Left: ${daysLeft(dueDate)}`);
	console.log(`Weeks Left: ${weeksLeft(dueDate)}`);
	console.log('Full Format:', fullDateLeft(dueDate));
	getTime();
	return { daysLeft, weeksLeft, fullDateLeft };
})();

app.daysLeft;
app.weeksLeft;
app.fullDateLeft;
