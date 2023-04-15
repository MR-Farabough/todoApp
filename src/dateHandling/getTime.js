export default function getTime() {
	const clockEL = document.querySelector('.clock');
	let time = '';
	let hours = new Date().getHours();
	let minutes = new Date().getMinutes();
	let seconds = new Date().getSeconds();
	if (hours > 12) {
		hours = hours - 12;
	}
	if (seconds < 10) {
		seconds = `0${seconds}`;
	}
	if (hours < 10) {
		hours = `0${hours}`;
	}
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	time = `${hours}:${minutes}:${seconds}`;
	clockEL.textContent = time;
	setTimeout(getTime, 1000);
	return clockEL;
}
