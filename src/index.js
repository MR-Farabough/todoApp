import schoolTask from './schoolTask.js';
import personalTask from './personalTask.js';
import daysLeft from './dateHandling/daysLeft.js';

const app = (() => {
	let dueDate = [2, 2, 2030];
	daysLeft(dueDate);
	return { daysLeft };
})();

app.daysLeft;
