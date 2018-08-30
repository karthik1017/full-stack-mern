//perform using the function.
// var obj = {n1 : 10},obj2 = {n1 : 20}
//addObj(obj1,obj2)

var obj1 = {
    n1 : 10
};

var obj2 = {
    n2 : 20
};

//accessing using the square brackets.
function addObj(obj1,obj2)
{
    return obj1['n1'] + obj2['n2'];
}

//accessing using the '.' operator.
function addObj1(obj1,obj2)
{
    return obj1.n1 + obj2.n2;
}

console.log(addObj(obj1,obj2)); //30
console.log(addObj1(obj1,obj2)); //30

var ob1 = {
    evens : [10,20,30]
};

var ob2 = {
    odds : [15,25,35]
};

function addOb(ob1,ob2)
{
    var sum1 = 0;
    var sum2 = 0;
    var array = [];
    sum1 = ob1['evens'].reduce((accu,curr) => accu + curr);
    sum2 = ob2['odds'].reduce((accu,curr) => accu + curr);
    array.push(sum1,sum2);
    return array;
}

console.log(addOb(ob1,ob2));