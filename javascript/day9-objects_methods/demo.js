function num(a,b,c)
{
  var array = [];
  if((typeof a === 'string') && (typeof b === 'string'))
  {
      a = a.charCodeAt(0); 
      b = b.charCodeAt(0);
      for(var i = a; i < b; i=i+c)
      {
        array.push(String.fromCharCode(i));
      }
    return array; 
  }
  for(var i = a; i < b; i=i+c)
  {
    array.push(i);
  }
return array;
}
console.log(num('a', "z", 2));