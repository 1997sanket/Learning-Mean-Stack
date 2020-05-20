function myFunction()
{
    var x = document.getElementById("txt").value;

    // I want to throw a message if user enters something other than the given instruction.

    try
    {
        if(x=="") // Checking if user kept the textbox empty. BTW this could also be done by the 'required' attribute of HTML.
            throw "empty";
        if(isNaN(x))
            throw "not a number";
        x = Number(x);
        if(x<5)
            throw "less than 5";
        if(x>10)
            throw "greater than 10";
    
        
       
    }

    catch(err)  // Catching the erro thrown message thrown in 'err'.
    {
        alert(err);
    }
}