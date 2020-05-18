// Two major ways of inheritence in JS
//1. Making objects using function constructor

function Person(name, yearOfBirth) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
}
// Attaching our calculateAge function to the Person Prototype

Person.prototype.calculateAge = function () {
	return 2019 - this.yearOfBirth;
};

// Created from Person prototype, which is nothing but prototype property of Person object.

var sanket = new Person("Sanket", 1997); // Has all the properties of Person object.
var fathima = new Person("Fathima", 1997); // Has all the properties of Person object.

console.log(sanket.calculateAge());
console.log(fathima.calculateAge());

/* 
   But what if we had million of functions inside Person ? We would then have millions of copies inside its instances as well. 
   Which is obviously not good practice right ? we want to save memory.
   So what could we do is, instead of attaching the functions directly to the Persons instances, we could attach them
   to the prototype from which the Person instances are created (which is nothing but prototype property of Person).
   By doing this we have only 1 copies of our functions and we could use them in all the instances of Person.
*/

// Now we have 2 objects, sanket and fathima.

//2. Creating objects using Object.create

var car = {
	name: "",
	color: "",
};

// Car is a literal object which is created directly from Object.prototype and that is obvious.

var mercedes = Object.create(car);
mercedes.name = "Mercedes";
mercedes.color = "White";

console.log(mercedes.color);
mercedes.price = "1 crore";

// mercedes is a literal object which is created from Car as a prototype(parent) and Car is created from Object.prototype

/*
	Object.create is easier to read and understand when dealing with multiple inheritence, since we dont have to worry 
	about the parent(prototype) it was created from. Here we are using the car object itself as a prototype.
*/
