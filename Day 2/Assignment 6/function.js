function myFunction()
{
    var x = document.getElementById('a').value;
    document.getElementById('a').value = "";
    document.getElementById('b').value = x;
}