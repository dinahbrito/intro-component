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
        addError(firstName, 'First name cannot be blank');
    }

    if (lastNameValue === "") {
        addError(lastName, 'Last name cannot be blank');
    }

    if (emailValue === "") {
        //add error class
        addError(email, 'Email cannot be blank');

    } else if (!validEmail(emailValue)) {
        //add different error class
        addError(email, 'Please enter a valid email');
    }

    if (passwordValue === "") {
        //add error class
        addError(password, 'Password cannot be blank');
    }

}

function addError(input, message)
{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}


function validEmail(email)
{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

