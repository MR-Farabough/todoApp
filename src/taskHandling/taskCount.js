export default function updateTaskCount() {
	let taskCount = 0;
	const cardsEL = document.querySelector('.cards');
	if (cardsEL.querySelector('div') == null) {
		return 0;
	} else {
		return cardsEL.childElementCount;
	}
}
