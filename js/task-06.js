const validationInput = document.querySelector('#validation-input');
const validInputLength = validationInput.dataset.length;

validationInput.addEventListener('blur', () => {
    if (validationInput.value.length == validInputLength) {
        // validationInput.setAttribute('class', 'valid');
        validationInput.classList.remove('invalid')
        validationInput.classList.add('valid')
    } else {
        // validationInput.setAttribute('class', 'invalid')
        validationInput.classList.remove('valid')
        validationInput.classList.add('invalid')
    }
})
