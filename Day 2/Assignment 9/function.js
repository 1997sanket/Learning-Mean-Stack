function myFunction()
{
    var s = document.getElementById("txt").value;   // Taking value of input in 's'

    var pos = s.search("@");    // Searching and getting position of '@'    

    if(pos >= 0)    // If it is present, it will return it position and that has to be between 0 and length-1 of the array. Or else it gives -ve.
        document.getElementById("demo").innerHTML = "Yes, @ is present at position: " + pos;   
    else
        document.getElementById("demo").innerHTML = "Sorry, @ is not present.";
}