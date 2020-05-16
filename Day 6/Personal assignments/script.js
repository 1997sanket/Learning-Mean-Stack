let d = document.getElementById("d");
let p = document.getElementById("p");

d.addEventListener("click", myFunction1);
p.addEventListener("click", myFunction2);

function myFunction1() {
	alert("div was clicked.");
}

function myFunction2() {
	alert("p was clicked.");
}
