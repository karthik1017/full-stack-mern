var string = 'i.like.this.program.very.much';
function reverse(string)
{
   var str1 = string.split('.');
   str1 = str1.reverse();
   console.log(str1);
   var str2 = str1.join('.');
   return str2;
}
console.log(reverse(string));