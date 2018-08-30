//Missing number in array 
var array = [1,2,3,5]
function missing(array)
{
 for(var i = 0; i < array.length; i++)
 {
   if(array[i] !== i+1)
   {
       return i;
   }
 }
}
console.log(missing(array));