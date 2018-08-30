//find number of times names
var students = ['pavan','chethan','karthik','vijay','pavan'];
function findCount(students,searchEle)
{
    //es6 method of filter()
  var result = students.filter(student => student === searchEle);
  if(result.length === 0)
  {
    return `${searchEle} is not in the list`
  } 
  return `${searchEle} appears ${result.length} times`;
} 
console.log(findCount(students,'pavan'));
console.log(findCount(students,'ganesh'));