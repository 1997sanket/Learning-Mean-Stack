let name = document.getElementById('name');
let btnEnter = document.getElementById('btnEnter');
let btnRead = document.getElementById('btnRead');



btnEnter.addEventListener('click', () => {
    let fnm = name.value;
    document.cookie = `name = ${fnm}`;
});

btnRead.addEventListener('click', () => {
    document.getElementById('h').innerHTML = document.cookie.slice(5, 12);
})