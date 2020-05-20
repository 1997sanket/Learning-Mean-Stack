function myFunction()
{
    var arr = [2,1,5,3,4];
    var i, m;
    m = arr[0];

    for(i=1; i<5; i++)
    {
        if(arr[i] > m)
            m = arr[i];
    }

    document.getElementById("demo").innerHTML = m;
}