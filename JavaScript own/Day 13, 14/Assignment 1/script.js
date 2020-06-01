

let x = setInterval(myFunction, 1000);
function myFunction() {
    let d = new Date();
    document.getElementById('div').innerHTML = d.toLocaleTimeString();
}