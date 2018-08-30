function countUpThenDown(number) 
{   
    var array = [];
    for (var i = 0; i <= number; i++)
        {
            array.push(i);
        }
    for(var i = number-1; i>=0; i--)
    {
        array.push(i);
    }
    return array;
}
  
  console.log(countUpThenDown(2));
  console.log(countUpThenDown(0));
  