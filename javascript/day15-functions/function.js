//function declaration
function add(n1,n2)
{
    return n1+n2;
}
//function call
console.log(add(10,20));

//function expression and this function is also called as anounymous function.
var sum = function(n1,n2)
{
    return n1+n2;
}
console.log(sum);
console.log(sum(10,20));

//create a function called a findTotal (which will be a function expression) to which you pass an array of values; the fuction should return the sum of the array.
function findTotal(array)
{
    return array.reduce((accu,curr) =>  accu+curr);
}
array = [10,20,30,40,50]
console.log(findTotal(array))
