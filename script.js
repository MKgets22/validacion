const password_regex = /^(?=.*[a-z])(?=.*[0-9]).{6,8}$/;
const username_regex = /^(?=.*[a-z])(?=.*[0-9]).{6,8}$/;
const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const number_regex = /^[0-9]{6,16}$/;

// selectors
const countries = document.querySelector('#countries');
const usernameInput = document.querySelector('#username');

// validations
let usernamevalidation = false;

[...countries].forEach(option => {
    option.innerHTML = option.innerHTML.split('(')[0];
});

usernameInput.addEventListener('input', e => {
    // Se evalúa y se guarda en la variable 'usernamevalidation'
    usernamevalidation = username_regex.test(e.target.value);
    const information = e.target.parentElement.children[1];
    
    if (usernamevalidation) { 
        usernameInput.classList.add('correct');
        usernameInput.classList.remove('incorrect');
        information.classList.remove('show-information')
    } else {
        usernameInput.classList.add('incorrect');
        usernameInput.classList.remove('correct');
        information.classList.add('show-information');
    }
});