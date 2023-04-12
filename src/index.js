import schoolTask from './schoolTask.js';
import personalTask from './personalTask.js';
import daysLeft from './daysLeft.js';

const app = (() => {
	daysLeft();

	return { daysLeft };
})();

app.daysLeft();
