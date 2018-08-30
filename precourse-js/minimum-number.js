function makeEven(numbers)
{
    var sum = 0;
    numbers.forEach(function(n)
    {
        sum += n; 
    });
    if(sum % 2 === 0)
    {
        return 2;
    }
    else
    {
        return 1;
    }
}

var numbers1 = [1,2,3,4,5];
var numbers2 = [1,2,3,4,5,6,7];

console.log(makeEven(numbers1));
console.log(makeEven(numbers2));
