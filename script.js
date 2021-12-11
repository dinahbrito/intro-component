const submit = document.getElementById('submit');

const validate = (e) =>
{
    e.preventDefault();
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');

    if (firstname.value === "") {
        document.getElementById('error').style.display = 'grid';
        document.getElementById('error-icon').style.display = 'block';
    }


}



submit.addEventListener('click', validate);