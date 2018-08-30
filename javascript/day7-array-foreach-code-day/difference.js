function difference(array)
{
    var temp = array;
    var array1 = array.slice(0,array.length/2);
    console.log(array1);
    console.log(array);
    var array2 = array.slice((array.length/2),array.length);
    console.log(array2);
    var sum1=sum2=0;
    for(var i=0;i<array1.length;i++)
    {
      sum1+=array1[i];
    }
    for(var i=0;i<array2.length;i++)    
    {
      sum2+=array2[i];
    }
    var diff = sum1 - sum2;
    if(diff > 0)
    {
        return `we should add ${diff} to 2nd part of array`;
    }
    else
    {
        diff = Math.abs(diff);
        return `we should add ${diff} to 1st part of array`
    }
}
console.log(difference([1,2,3,4,5,6]));