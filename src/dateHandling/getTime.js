export default function getTime() {
	let time = '';
	let hours = new Date().getHours();
	hours = hours - 12;
	const minutes = new Date().getMinutes();
	const seconds = new Date().getSeconds();
	time = `${hours}:${minutes}:${seconds}`;
	setTimeout(getTime, 1000);
	return time;
}
