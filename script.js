const boxes = document.querySelectorAll('.box');
const input = document.querySelector('.input');
const greetButton = document.querySelector('.greet-button');
const navTitle = document.querySelector('.nav-title');

boxes.forEach((box) => {
	box.addEventListener('click', () => {
		box.style.backgroundColor = box.textContent.trim().toLowerCase();
		box.style.color = 'white';
	});
});

greetButton.addEventListener('click', () => {
	navTitle.textContent = 'Hello, ' + input.value;
});
