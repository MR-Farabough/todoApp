import createCard from './cardCreator.js';

export default function renderCards(category) {
	const cardsEL = document.querySelector('.cards');
	if (localStorage.getItem('storage-array') == null) {
		cardsEL.textContent = 'no TASKS';
	} else {
		const totalCards = createCard(category);
		cardsEL.append(totalCards);
	}
}
