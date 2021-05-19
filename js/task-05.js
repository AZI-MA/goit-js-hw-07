const refs = {
    input: document.querySelector('#name-input'),
    span:document.querySelector('#name-output'),
}

refs.input.addEventListener('input', changeName);

function changeName(e) {
    e.target.value.trim() !== "" ? refs.span.textContent = e.target.value : refs.span.textContent = "neznakomec"
    
}
