export default function saveToText() {
	const a = document.createElement('a');
	const blob = new Blob([localStorage.getItem('storage-array')]);
	a.href = URL.createObjectURL(blob);
	a.download = 'Storage.txt';
	a.click();
}
