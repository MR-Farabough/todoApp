import errorLog from '../errorLogger.js';
import createCard from './cardCreator.js';
import checkEmpty from './checkEmptyPage.js';

export default function renderCards(category, taskCategories) {
	const cardsEL = document.querySelector('.cards');
	if (
		(localStorage.getItem('storage-array') == null ||
			localStorage.getItem('storage-array').length < 3) &&
		(localStorage.getItem('deleted-array') == null ||
			localStorage.getItem('deleted-array').length < 3)
	) {
		checkEmpty();
	} else {
		const totalCards = createCard(category, taskCategories);
		cardsEL.append(totalCards);
	}
}
