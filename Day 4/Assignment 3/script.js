class Math
{
    static square(x)
    {
        return x * x;
    }

    static cube(x)
    {
        return x * x *x;
    }
}

let m = new Math();

console.log(Math.square(2));

console.log(Math.cube(2));