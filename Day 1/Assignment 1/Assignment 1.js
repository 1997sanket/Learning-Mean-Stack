function maxNumber(x,y,z)
    {
        if(y>x)
            {
                if(y>z)
                    return y;
        else
            return z;
            }
        else
            return x;

    }

var a = maxNumber(2,3,5);

console.log(a);
