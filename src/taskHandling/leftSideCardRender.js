import createLeftCard from './cardCreator.js';
// SHIT IS BROKEN
export default function renderLeftSide() {
	const cardsLeft = document.querySelector('.cards-left');
	const cardArr = createLeftCard(
		JSON.parse(localStorage.getItem('storage-array'))
	);
	for (let index = 0; index < 2; index++) {
		cardsLeft.append(cardArr[index]);
	}
}
