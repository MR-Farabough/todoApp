import createCard from './cardCreator.js';

export default function renderCards(category, taskCategories) {
	const cardsEL = document.querySelector('.cards');
	if (
		localStorage.getItem('storage-array') == null ||
		localStorage.getItem('storage-array').length < 3
	) {
		const img = new Image();
		img.src = 'imgs/cat.png';
		img.style.height = '35%';
		img.style.width = '35%';
		img.style.minHeight = '300px';
		img.style.minWidth = '300px';
		cardsEL.appendChild(img);
	} else {
		const totalCards = createCard(category, taskCategories);
		cardsEL.append(totalCards);
	}
}
