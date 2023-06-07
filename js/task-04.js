const counterValue = document.querySelector('#value');
const incrBtn = document.querySelector('button[data-action="increment"]');
const decrBtn = document.querySelector('button[data-action="decrement"]');

let countVal = 0;

incrBtn.addEventListener('click', () => {
    countVal += 1;
    counterValue.textContent = countVal;
});

decrBtn.addEventListener('click', () => {
    countVal -= 1;
    counterValue.textContent = countVal;
});