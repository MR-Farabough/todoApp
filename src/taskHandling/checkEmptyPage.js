export default function checkEmpty() {
	const cardsEL = document.querySelector('.cards');
	if (
		document.querySelector('.quote').textContent == 'Total Tasks: 0' &&
		cardsEL.querySelector('img') == null
	) {
		const arrOfImages = [
			'imgs/cat.png',
			'imgs/cat1.png',
			'imgs/cuteDog.png',
			'imgs/dog-watermelon.png',
			'imgs/dog1.png',
			'imgs/dog2.png',
			'imgs/dogYawn.png',
			'imgs/hampster.png',
		];
		const number = Math.floor(Math.random() * arrOfImages.length);
		console.log(number);
		const img = new Image();
		img.src = arrOfImages[number];
		img.style.height = '35%';
		img.style.width = '35%';
		img.style.minHeight = '300px';
		img.style.minWidth = '300px';
		cardsEL.appendChild(img);
	}
}
