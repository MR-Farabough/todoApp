import createCard from './cardCreator.js';

export default function renderCards() {
	const cardsEL = document.querySelector('.cards');
	console.log(cardsEL, 'LOG ONE renderCards');
	if (localStorage.getItem('storage-array') == null) {
		cardsEL.textContent = 'no TASKS';
	} else {
		const totalCards = createCard('test');
		console.log(totalCards, 'log RENDER CARDS');
		cardsEL.append(totalCards);
	}
}
