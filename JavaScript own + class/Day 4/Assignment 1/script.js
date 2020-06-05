let factorial = ()=> {
    let fact = 1;
   let x = document.getElementById("num").value;
   //alert(x);
   x = Number(x);
    try{
        if(x<0)
            throw "Please enter positive number;"
        if(x=="")
            throw "Please enter a number";

        if(x>=0)
            {
                for(let i=2; i<=x; i++)
                {
                    fact = fact * i;
                }
        
                document.getElementById("demo").innerHTML = fact;
            }
        
    }

    catch(err){
        alert(err);
    }

    
}