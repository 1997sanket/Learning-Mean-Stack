
// Getting all HTML element objects

const form = document.getElementById('form');


const id = document.getElementById('id');
const password = document.getElementById('password');
const mobile = document.getElementById('mobile');
const address = document.getElementById('address');
const age = document.getElementById('age');



form.addEventListener('submit', function (event) {  // event consists the object of actual event.

    let errorMessages = [];


    if ((id.value.length < 3) || (id.value.length > 15))
        errorMessages.push("User id must be minimum 3  and maximum 15 characters");

    if (password.value.length < 8)
        errorMessages.push("Password must be minimum 8 characters");

    if (mobile.value.length != 10)
        errorMessages.push("Mobile must be a 10 digit number");

    if ((age.value < 18) || (age.value > 100))
        errorMessages.push("Age must be between 18 to 100");

    if (errorMessages.length > 0) {
        event.preventDefault();  // When we press submit our page is submitting, we dont want that

        document.getElementById('error').innerHTML = errorMessages.join(',  ');
    }



})
