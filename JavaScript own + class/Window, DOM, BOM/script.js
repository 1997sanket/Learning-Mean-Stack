//window.alert(location.href);

// let x = prompt("Please enter the secret pin", "");

// if (x === "Sanket") {
// 	document.getElementById("h").innerHTML = "Welcome " + x;
// } else {
// 	setTimeout(() => {
// 		document.getElementById("h").innerHTML = "Sorry, wrong pin. ";
// 		setTimeout(() => {
// 			window.close();
// 		}, 2000);
// 	}, 0);
// }

//window.document.getElementById("h").innerHTML = "Welcome Sanket";

// Window is a root global object, which has various objects, one of which is document.

//var x = window.document; //getting ref of object document
//var y = x.getElementById("h"); // functions returns an object which is caught in y
//y.innerHTML = "Welcome"; //Now y has ref to html object which has id = 'h'. And innerHTML is a property of html object.

var Person = function (name, age) {
	(this.name = name), (this.age = age);
};

var Person1 = new Person("Sanket", 22);

document.getElementById("h").innerHTML = Person1.name;
console.dir(Person);
