# Day 2

## New things learned today (Refer W3schools -> String methods)

1. We can have primite string variables `var x = "Sanket";` or we can even declare string object like `var y = new String("Sanket");`

2. Here `x != y`, even if we had `x` as an object handle still `x != y`. Since **Comparing two objects in JS will return false**

3. `==` equates **values** eg: Here *x is equal to y in value*, but `===` equates both **value and types**, eg: Here **x is not
    equal to y** since one is string and other is an object.

4. We can search string within a string using `indexOf("demo")` or `search("demo")` methods.

5. We can break and take part of a string using the `slice(7,13)` (13th not included) method.

6. A string can be converted to an array with the split() method
   Eg:  var txt = "a,b,c,d,e";   // String
        txt.split(",");          // Split on commas
        txt.split(" ");          // Split on spaces
        txt.split("|");          // Split on pipe
        var txt = "Hello";       // String
        txt.split("");           // Split in characters

7. All JavaScript data types have a valueOf() and a toString() method.

8. In order to change an element of a string, first convert it to an array.

9. JavaScript variables can be objects. Arrays are special kinds of objects.
   Because of this, you can have variables of different types in the same Array.
   You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array

10. In JavaScript, arrays use numbered indexes. In JavaScript, objects use named indexes.

11. When using `sort()` function in an Array, it sorts considering them as string, but what if we want to sort considering them as 
    numbers ? We can use this `var points = [40, 100, 1, 5, 25, 10]; points.sort(function(a, b){return a - b});`
    Example:

    The compare function compares all the values in the array, two values at a time (a, b).
    When comparing 40 and 100, the sort() method calls the compare function(40, 100).
    The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
                               
