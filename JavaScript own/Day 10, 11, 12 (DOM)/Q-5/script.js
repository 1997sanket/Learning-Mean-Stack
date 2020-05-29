let opt = document.getElementsByTagName('select')[0];
console.log(opt);
opt.addEventListener('change', (event) => {
    console.log(event.target.value);
    document.getElementById('p').style.fontSize = event.target.value;




});