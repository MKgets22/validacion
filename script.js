const password_regex = /^(?=.*[a-z])(?=.*[0-9]).{6,8}$/;
const username_regex = /^(?=.*[a-z])(?=.*[0-9]).{6,8}$/;
const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const number_regex = /^[0-9]{6,16}$/;

// selectors
const countries = document.querySelector('#countries');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const phoneCode = document.querySelector('#phone-code');
const phoneInput = document.querySelector('#phone');
const passwordInput = document.querySelector('#password');
const confirm_passwordInput = document.querySelector('#confirm_password');
const formBtn =document.querySelector('#form-btn');
const form =document.querySelector('#form');





// validations
let usernameValidation = false;
let imeilValidation = false;
let phoneValidation = false;
let passwordValidation = false;
let confirm_passwordValidation = false;
let countriesValidation = false;





//funciones
const validation = (e, isValid, element) => {
    const information = element.nextElementSibling;
    formBtn.disabled = !usernameValidation || !imeilValidation || !phoneValidation || !passwordValidation || !confirm_passwordValidation || !countriesValidation ? true : false ;
    if (isValid) {
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
    countriesValidation = optionSelected.value === '' ? false : true;
    countries.classList.add('correct');
    phoneCode.classList.add('correct');
    validation(e, null, null);

});

phoneInput.addEventListener('input', e => {
    phoneValidation = number_regex.test(e.target.value);
    validation(e, phoneValidation, phoneInput)
});

passwordInput.addEventListener('input', e => {
    passwordValidation = password_regex.test(e.target.value);
    validation(e, passwordValidation, passwordInput)
});

confirm_passwordInput.addEventListener('input', e => {
    confirm_passwordValidation = passwordInput.value === e.target.value;
    validation(e, confirm_passwordValidation, confirm_passwordInput)
});

form.addEventListener('submit', e =>{
    e.preventDefault();
    const user ={
        username: usernameInput.value,
        imeil: emailInput.value,
        phone:`${phoneCode.innerHTML} ${phoneInput.value}`,
        password: passwordInput.value,
    }
})








