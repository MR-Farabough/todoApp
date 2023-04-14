export default function getTime() {
	const clockEL = document.querySelector('.clock');
	let time = '';
	let hours = new Date().getHours();
	const minutes = new Date().getMinutes();
	let seconds = new Date().getSeconds();
	if (seconds < 10) {
		seconds = `0${seconds}`;
	}
	time = `${hours}:${minutes}:${seconds}`;
	clockEL.textContent = time;
	setTimeout(getTime, 1000);
	return clockEL;
}
