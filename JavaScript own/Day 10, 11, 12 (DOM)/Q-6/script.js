
let btn = document.getElementsByName('rad');

btn[0].addEventListener('click', myFunction);
btn[1].addEventListener('click', myFunction);

function myFunction(event) {
    let radBtnClicked = event.target;
    let radValue = event.target.value;

    let result = document.getElementById('result');
    let no1 = document.getElementById('no1');
    let no2 = document.getElementById('no2');
    no1Value = Number(no1.value);
    no2Value = Number(no2.value);

    if (radValue === '+') {
        result.value = eval("no1Value + no2Value");
    } else if (radValue === '-') {
        result.value = eval(no1Value - no2Value);
    }
}