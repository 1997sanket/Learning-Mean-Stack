function myFunction()
{
    var arr = [2,3,1,4,5];
    
    // Sorting numerically

    document.getElementById("demo").innerHTML = arr.sort(function(a, b) {return a - b} );

    // The function inside sort is called 'Compare function'. When we just use sort, it sorts considering the values as string and not as nos.
    // So what comapre function does is, it compares 2 values and sorts based on the result.
    // Eg: 2,3 are taken as arguments in a and b, a-b = -1 which is a negative value, it will stay as it is.

}