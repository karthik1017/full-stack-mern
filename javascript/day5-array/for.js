var check = ['karthik','devaraj','kumar','pavan','kumar'];
//array traversal using for loop
for(var i =0; i<check.length;i++)
{
    console.log(check[i].toUpperCase());
}
console.log('i am out of loop');

check.forEach(function(check){
    
})
var numbers1 = [10,20,30,40,50,60,70,80];
function add(numbers1)
{
    var sum = 0;
    for(var i =0 ;i<numbers1.length;i++)
    {
        sum=sum+numbers1[i];
    }
  return sum; 
}
console.log(add(numbers1));

//addition of elements in the even index
function evenAdd(numbers1)
{
    var sum = 0
    for(var i = 0;i< numbers1.length ;i=i+2 )
    {
      sum+=numbers1[i]
    }
    return sum;
}
console.log(evenAdd(numbers1));

//exercise add even numbers and count odd numbers
var nums = [10,15,20,25,30,40]
function sumCount(nums)
{
    var sum = 0;
    var count = 0;
    var array = [];
    for(var i=0;i<nums.length; i++)
    {
        if((nums[i]%2) === 0)
        {
            sum+=nums[i];
        }
        else{
            count++;
        }
    }
    array.push(sum,count);
    return array;
    //return console.log(`the sum of even numbers = ${sum} and the count of odd numbers =${count}`);
}
console.log(sumCount(nums));