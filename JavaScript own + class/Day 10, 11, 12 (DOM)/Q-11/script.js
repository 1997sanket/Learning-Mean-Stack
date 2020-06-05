let pass = document.getElementById('pass');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {

    messages = [];


    let lowerCase = /[a-z]/g;
    let upperCase = /[A-Z]/g;
    let number = /[0-9]/g;
    let symbol = /[@*&%!]/g;


    if (!pass.value.match(lowerCase)) {
        messages.push('Password must contain lowercase letter');
    }

    if (!pass.value.match(upperCase)) {
        messages.push('Password must contain an uppercase letter');
    }

    if (!pass.value.match(number)) {
        messages.push('Password must contain a number');
    }

    if (!pass.value.match(symbol)) {
        messages.push('Password must contain a special character');
    }







    if (messages.length > 0) {
        messages.join(', ');
        alert(messages);
    } else {
        alert("Submission successfull");
    }
})