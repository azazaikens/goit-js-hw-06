const validationInput = document.querySelector('#validation-input');
const validInputLength = validationInput.dataset.length;

validationInput.addEventListener('blur', () => {
    if (validationInput.value.length == validInputLength) {
        validationInput.setAttribute('class', 'valid');
    } else {
        validationInput.setAttribute('class', 'invalid')
    }
})
