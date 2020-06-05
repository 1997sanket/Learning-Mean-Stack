function sum() {

    function myFunction(total, value) {
        return total + value;
    }

    arr = Object.values(arguments); //Converting 'arguments' object to an array.

    total = arr.reduce(myFunction); //Reduce method reduces the array to a single value.
    return total;

}

console.log(sum(2, 3));
console.log(sum(2, 2, 2));