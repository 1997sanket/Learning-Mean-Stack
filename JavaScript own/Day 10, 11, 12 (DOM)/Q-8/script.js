let olElement = document.getElementsByTagName('ol')[0];

let firstLiElement = olElement.children[0];
let secondLiElement = olElement.children[1];
let thirtLiELement = olElement.children[2];
console.log(secondLiElement);

function Dagestani() {
    firstLiElement.remove();
}

function Chechnian() {
    secondLiElement.remove();
    thirtLiELement.remove();
    let sanket = document.createElement('h1');
    sanket.innerHTML = "Sanket the Irish is back 8)";

    olElement.appendChild(sanket);
}