String.prototype.lengthEx = function()
{
    var count = 0;
    for(var i = 0; i < this.length; i++)
    {
     if(!((this[i].charCodeAt(0) >= 32) && (this[i].charCodeAt(0) <= 64)))
     {
      count++;
     }
    }
    return count;
}
function find(str)
{
    var array = str.split(' ');
    var total = [];
    array.forEach(ele => {var obj = {}; obj['count'] = ele.lengthEx(); obj['str'] = ele; total.push(obj)});
    total.sort((a,b) => b.count-a.count);
    console.log(total);
    return total[0].str;
}
console.log(find('hello@@!********** goodmorning bye bye'));
