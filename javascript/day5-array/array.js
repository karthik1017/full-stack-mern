var str = 'js rb py';
console.log(str.split(' '));

var numbers = [1,2,3,4,5,6,7,8,9,0];
// '(123) 456-7890'
function phoneNumber(numbers)
{
    var result1 = numbers.slice(0,3).join('');
    var result2 = numbers.slice(3,6).join('');
    var result3 = numbers.slice(6,10).join('');
    console.log(result1);
    console.log(result2);
    console.log(result3);
    return `(${result1}) ${result2}-${result3}`;  
}

console.log(phoneNumber(numbers));

//concatenation methods
var arr1 = [1,2,3];
var arr2 = [2,3,7];
var arr3 = arr1.concat(arr2);
console.log(arr3);

//checking for unique array
var check = ['karthik','devaraj','kumar','pavan','kumar'];
function checking(check,string)
{
    if(check.indexOf(string) === check.lastIndexOf(string))
    {
        return 'unique';
    }
    else
    {
        return 'repeated'; 
    }
}
console.log(checking(check,'kumar'));

