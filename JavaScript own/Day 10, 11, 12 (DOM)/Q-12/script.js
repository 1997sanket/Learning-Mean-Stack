let b = document.getElementById('b');
let p = document.getElementById('p');
let v = document.getElementById('v');
let btn = document.getElementById('btn');


// var total = (function (x) {
//     let tableTotal = 0;
//     return function () {
//         tableTotal = tableTotal + x;
//     }
// })();

class Total {

    constructor(tableTotal) {
        this.tableTotal = tableTotal;
    }

    get Total() {
        return this.tableTotal;
    }

    total(x) {
        this.tableTotal = this.tableTotal + x;
    }
}


let t = new Total(0);

b.addEventListener('click', () => {

    t.total(200);
});

p.addEventListener('click', () => {

    t.total(100);
});

v.addEventListener('click', () => {

    t.total(300);
});


btn.addEventListener('click', () => {
    document.getElementById('demo').innerHTML = "Total : " + t.Total + "rs";
    btn.style.display = 'none';
})



