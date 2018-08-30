//without using the reverse method
var string = 'i.like.this.program.very.much';
function reverse(string)
{
   var str1 = string.split('.');
   var array = [];
   for(var i = str1.length-1; i >= 0; i-- )
   {
     array.push(str1[i]);
   }
   str1 = array.join('.');
   return str1;
}
console.log(reverse(string));