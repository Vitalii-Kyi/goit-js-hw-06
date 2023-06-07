const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    let name = nameInput.value.trim();
    nameOutput.textContent = name ? name : 'Anonymous';
});