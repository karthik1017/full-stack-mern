var n1 = 10;
var n2 = 20;
function add(n1,n2)
{
    n1 = 1000;
    n2 = 2000;
    var n3 = n1 + n2;
    return n3;
}
console.log(add(n1,n2));
console.log(n1); //10
console.log(n2); //20
//console.log(n3); //reference error
var names = ['Alice', 'Alice', 'Tiff', 'Bruce', 'Alice'];
function count(names)
{
var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
return countedNames;
}
console.log(count(names));