function difference(a,b){
  var array = [];
   if((a.length === 0) && (b.length === 0))
   {
    return 'empty array';
   }
  for(var i = 0; i<a.length; i++)
  {
   if(b.includes(a[i]) === true)
   {
    b.splice(b.indexOf(a[i]),1);
   }
  }
  console.log(a);
  console.log(b);
   array.concat(a,b);
   return array;
 }
 console.log(difference([1, 2, 3], [100, 2, 1, 10]));