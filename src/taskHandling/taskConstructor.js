export default class Task {
	constructor(title, note, dueDate, priority, type, daysLeft, category) {
		this.title = title;
		this.note = note;
		this.dueDate = dueDate;
		this.priority = priority;
		this.type = type;
		this.daysLeft = daysLeft;
		this.category = category;
	}
}
