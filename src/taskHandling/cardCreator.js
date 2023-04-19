export default function createCard(category) {
	const storageArr = JSON.parse(localStorage.getItem('storage-array'));
	if (storageArr == null) {
		return;
	} else {
		if (category == 'total') {
			for (let index = 0; index < storageArr.length; index++) {
				const div = document.createElement('div');
				div.style.backgroundColor = 'white';
				div.style.width = '95%';
				div.style.margin = '10px';
				div.style.borderRadius = '15px';
				div.style.padding = '10px';
				if (storageArr[index].priority == 'Not Prioritized') {
					div.style.borderLeft = '8px solid green';
				} else if (storageArr[index].priority == 'Important') {
					div.style.borderLeft = '8px solid orange';
				} else if (storageArr[index].priority == 'URGENT') {
					div.style.borderLeft = '8px solid red';
				}
				const p = document.createElement('p');
				p.textContent = storageArr[index].daysLeft;
				div.append(p);
				document.querySelector('.cards').append(div);
			}
			return '';
		} else if (category == 'today') {
		} else if (category == 'weeks') {
		}
	}
}
