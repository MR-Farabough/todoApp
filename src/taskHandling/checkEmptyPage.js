export default function checkEmpty() {
	const cardsEL = document.querySelector('.cards');
	if (document.querySelector('.quote').textContent == 'Total Tasks: 0') {
		const img = new Image();
		img.src = 'imgs/cat.png';
		img.style.height = '35%';
		img.style.width = '35%';
		img.style.minHeight = '300px';
		img.style.minWidth = '300px';
		cardsEL.appendChild(img);
	}
}
