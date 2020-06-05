function myFunction()
{
    var no = document.getElementById("txt").value;
    if(no.length === 10)
        document.getElementById("demo").innerHTML = "Yes, it does.";
    else
    document.getElementById("demo").innerHTML = "Sorry, it doesnt.";
}