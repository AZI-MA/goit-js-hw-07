const ref = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    span: document.querySelector('#value')
};

let counterValue = 0;
ref.decrement.addEventListener('click', onDecrement);
ref.increment.addEventListener('click', onIncrement);

function onDecrement(e) {
    ref.span.textContent = counterValue -= 1;
}
function onIncrement(e) {
    ref.span.textContent = counterValue += 1;
}
