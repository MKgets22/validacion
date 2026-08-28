const password_regex = /^(?=.*[a-z])(?=.*[0-9]).{6,8}$/;
const username_regex = /^(?=.*[a-z])(?=.*[0-9]).{6,8}$/;
const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const number_regex = /^[0-9]{6,16}$/;

// selectors
const countries = document.querySelector('#countries');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email')
const phoneCode = document.querySelector('#phone-code')
const phoneInput = document.querySelector('#phone')

// validations
let usernameValidation = false;
let imeilValidation = false;
let phoneValidation = false;

//funciones
const validation = (e, validation, element) => {
    const information = e.target.parentElement.children[1];

    if (usernameValidation) {
        element.classList.add('correct');
        element.classList.remove('incorrect');
        information.classList.add('information')
        information.classList.remove('show-information');

    } else {
        element.classList.add('incorrect');
        element.classList.remove('correct');
        information.classList.add('show-information');
        information.classList.remove('information');

    }
}

[...countries].forEach(option => {

    option.innerHTML = option.innerHTML.split('(')[0];
});

usernameInput.addEventListener('input', e => {
    // Se evalúa y se guarda en la variable 'usernameValidation'
    usernameValidation = username_regex.test(e.target.value);
    validation(e, usernameValidation, usernameInput)
});

emailInput.addEventListener('input', e => {

    imeilValidation = email_regex.test(e.target.value);
    validation(e, imeilValidation, emailInput)

})

countries.addEventListener('input', e => {
    const optionSelected = [...e.target.children].find(option => option.selected);
    phoneCode.innerHTML = `+${optionSelected.value}`
});

phoneInput.addEventListener('input', e =>{
    phoneValidation = number_regex.test(e.target.value);
    validation(e, phoneValidation, phoneInput)
});






