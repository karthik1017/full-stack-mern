var array = ['sheldon','leonard','penny','rajesh','howard'];
function cola(array,num)
{
    for(var i = 0 ; i<num ; i++)
    {
      var other = array.shift();
      array.push(other,other);
    }
    console.log(array);
    return `${array[0]} drank the ${num}th cola`;
}
var num = 18;
console.log(cola(array,num));