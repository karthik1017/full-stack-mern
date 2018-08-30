var number = [10,15,20,25,30,35];
function findEvensCount(numbers)
{
   var count = 0;
   for(var i = 0; i<numbers.length ;i++)
   {
       if((numbers[i]%2) === 0 )
       {
           count++;
       }
   } 
   return count;
}
console.log(findEvensCount(number));

function findEvens(numbers)
{
    var evens = [];
    for(var i =0; i<numbers.length; i++)
    {
        if((numbers[i]%2) === 0)
        {
            evens.push(numbers[i]);
        }
    }
    return evens;
}
console.log(findEvens(number));

function isElePresent(numbers,num)
{
    var isFound = false;
    for(var i = 0; i<numbers.length; i++)
    {
        if(numbers[i] === num)
        {
            isFound = true;
        }
    }
    return isFound
}
console.log(isElePresent(number,35));
console.log(isElePresent(number,90));