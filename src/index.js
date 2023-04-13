import {
	schoolTask,
	personalTask,
} from '../src/taskHandling/taskConstructor.js';
import daysLeft from './dateHandling/daysLeft.js';

const app = (() => {
	let dueDate = [2, 2, 2025];
	console.log(daysLeft(dueDate));
	return { daysLeft };
})();

app.daysLeft;
