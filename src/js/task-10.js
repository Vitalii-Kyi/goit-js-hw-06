const refs = {
  controls: document.querySelector('#controls'),
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

let boxSize = 30;

refs.createBtn.addEventListener('click', () => {
  const amount = refs.input.value;
  createBoxes(amount);
});

refs.destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const boxesMarkup = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesMarkup.push(box.outerHTML);
    boxSize += 10;
  }

  refs.boxes.insertAdjacentHTML('beforeend', boxesMarkup.join(''));
};

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  boxSize = 30;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};