let inputs = document.getElementsByTagName('input');



console.log(inputs);

let txt = document.getElementById('txt');


inputs[1].addEventListener("click", myFunction);
inputs[2].addEventListener("click", myFunction);
inputs[3].addEventListener("click", myFunction);

function myFunction(event) {
    console.log("hi");
    btnClicked = event.target;
    txt.style.color = btnClicked.value;
};