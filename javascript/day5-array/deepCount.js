function deep_count(array)
{ 
    var count = 0;
    for(var i = 0;i< array.length;i++)
    {
        if(Array.isArray(array[i]) === true)
        {
            count++;
            count+=deep_count(array[i]);
        }
        else
        {
            count++;
        }        
    }
    return count;
}
console.log(deep_count([1, 2, 3]));
console.log(deep_count(["x", "y", ["z"]]));
console.log(deep_count([1, 2, [3, 4, [5]]]))