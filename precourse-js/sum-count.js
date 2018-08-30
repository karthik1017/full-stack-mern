function sumCount(numbers)
{
    var sum = 0, count = 0;
    numbers.forEach(function(num)
    {
        if(num >= 0)
        {
            sum = sum + num;
        }
        else
        {
            count = count + 1;
        }
    });
    return [sum, count];
}
var numbers = [10, -10, 20, -20, 30, -30];

console.log(sumCount(numbers));