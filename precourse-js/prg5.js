function isDivisible(n,x,y)
{
    if ((n % x === 0) && (n % y === 0))
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(isDivisible(3,1,3));
console.log(isDivisible(100,5,3));
console.log(isDivisible(12,2,6));
console.log(isDivisible(12,7,5));

