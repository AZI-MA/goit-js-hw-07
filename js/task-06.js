const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', onValidate);
function onValidate(e) {
    if (Number(e.target.dataset.length === e.target.value.length)) {
        changeClass('valid', 'invalid')
    } else { changeClass('invalid','valid') }
};

function changeClass(add, rem) {
    validationInputRef.classList.remove(rem);
    validationInputRef.classList.add(add);
}