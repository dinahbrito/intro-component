const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e =>
{
    e.preventDefault();

    checkValue();
});

function checkValue()
{
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const passwordValue = password.value;


    if (firstNameValue === "") {
        addError(firstName, 'First name cannot be empty');
    } else {
        removeError(firstName);
    }

    if (lastNameValue === "") {
        addError(lastName, 'Last name cannot be empty');
    } else {
        removeError(lastName);
    }

    if (emailValue === "") {
        addError(email, 'Email cannot be blank');

    } else if (!validEmail(emailValue)) {
        addError(email, 'Looks ike this is not an email');
    } else {
        removeError(email);
    }

    if (passwordValue === "") {
        addError(password, 'Password cannot be empty');

    } else if (passwordValue.length < 8) {
        addError(password, 'Password must be at least 8 characters long');
    } else {
        removeError(password);
    }
}

function addError(input, message)
{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function removeError(input)
{
    const formControl = input.parentElement;
    formControl.classList.remove('error');
}

function validEmail(email)
{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


