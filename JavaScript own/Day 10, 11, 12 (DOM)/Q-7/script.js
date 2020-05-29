let p = document.getElementsByTagName('p');

let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    console.log(p.length);
    let h1 = document.createElement('h1');
    h1.innerHTML = p.length;
    document.getElementsByTagName('body')[0].appendChild(h1);
    document.getElementById('div').style.backgroundColor = 'lightblue';


})