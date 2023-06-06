const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function changeSize() {
    text.style.fontSize = `${this.value}px`;
};

fontSizeControl.addEventListener('input', changeSize);

console.dir(fontSizeControl);