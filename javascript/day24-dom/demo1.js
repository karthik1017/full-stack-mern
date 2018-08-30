function conversion(input)
{
    var keys = Object.keys(input);
    var values = Object.values(input);
    var array = [];
    array.push(values,keys);
    return array;
}
console.log(conversion({'name':'Rama','city':'Ayodya'}));