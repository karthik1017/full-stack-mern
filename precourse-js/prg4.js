/*Write a function sum Array that takes an array of numbers and returns the sum of the positive numbers. If the array does not contain any numbers then you should return 0 */

function sumArray(numbers)
{
   if(numbers.length === 0)
   {
       return 0;
   }
   var sum = 0;
   for(var i = 0; i < numbers.length; i++)
   {
       if(numbers[i] > 0)
       {
           sum = sum + numbers[i];
       }
   }
   return sum;
}

var numbers = [10, 52, 4.5, -10];
console.log(sumArray(numbers));

var numbers1 = [10, 20, 30, 40, -10, 50];
console.log(sumArray(numbers1));

var nums = [];
console.log(sumArray(nums));