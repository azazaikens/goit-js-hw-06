const form = document.querySelector('.login-form')
let inpEmail = form.elements[0];
let inpPassword = form.elements[1];



form.addEventListener('submit', ev => {
    ev.preventDefault();

    switch ('') {
        case inpEmail.value:
            alert('введіть email');
            break;
        case inpPassword.value:
            alert('введіть password');
            break;
        default:
            let userObj = {
                email: inpEmail.value,
                password: inpPassword.value,
            }

            console.log(userObj);
            break;
        }
        form.reset();
    // if (inpEmail.value == '') {
    //     alert('введіть email');
    // }

    // if (inpPassword.value == '') {
    //     alert('введіть password')
    // }
})