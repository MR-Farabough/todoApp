export default function getTime() {
	const clockEL = document.querySelector('.clock');
	let time = '';
	let hours = new Date().getHours();
	const minutes = new Date().getMinutes();
	const seconds = new Date().getSeconds();
	time = `${hours}:${minutes}:${seconds}`;
	clockEL.textContent = time;
	setTimeout(getTime, 1000);
	return clockEL;
}
