export function openModal(modal) {
	modal.classList.add('active');
	overlay.classList.add('active');
}

export function closeModal(modal, form) {
	form.reset();
	modal.classList.remove('active');
	overlay.classList.remove('active');
}
