function keyValue(a){
 var keys = Object.keys(a);
 var values = Object.values(a);
 var array = [];
 array.push(values,keys);
 return array;
}

console.log(keyValue({}));
console.log(keyValue({'name':'Rama','city':'Ayodya'}));