# Day 5 

## New things learned today.

1. Use proper JS coding conventions for readability, and debugging if necessary.\

2. Avoid `global variablses`, `new()`, `eval()`, and `==`.

3. Declarations on top, even for loops. (like C)

4. Good practice to initialize code when we declare them. (Initializing variables provides an idea of the intended use (and intended data type)).

5. Never declare *Number*, *String* or *Boolean* objects.

6. Don't Use new Object()
    Use {} instead of new Object()
    Use "" instead of new String()  
    Use 0 instead of new Number()
    Use false instead of new Boolean()
    Use [] instead of new Array()
    Use /()/ instead of new RegExp()
    Use function (){} instead of new Function()

   Eg:  var x1 = {};           // new object
        var x2 = "";           // new primitive string
        var x3 = 0;            // new primitive number
        var x4 = false;        // new primitive boolean
        var x5 = [];           // new array object
        var x6 = /()/;         // new regexp object
        var x7 = function(){}; // new function object   

7. Use `===` instead of `==` to compare both Value and Type.

8. Use Parameter Defaults
    If a function is called with a missing argument, the value of the missing argument is set to undefined.
    Undefined values can break your code. It is a good habit to assign default values to arguments.

    Eg: function myFunction(x, y) {
        if (y === undefined) {
        y = 0;
            }
        }

9. JavaScript does not have associative array like PHP (key and value pair).

10. Test **undefined** and **not null** like this `if (typeof myObj !== "undefined" && myObj !== null)`

