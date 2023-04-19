import createCard from './cardCreator.js';

export default function renderCards(category, taskCategories) {
	const cardsEL = document.querySelector('.cards');
	if (
		localStorage.getItem('storage-array') == null ||
		localStorage.getItem('storage-array').length < 3
	) {
		cardsEL.textContent = 'no TASKS';
	} else {
		const totalCards = createCard(category, taskCategories);
		cardsEL.append(totalCards);
	}
}
