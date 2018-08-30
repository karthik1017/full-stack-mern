//Any variable defined outside of a function , is a global variable in javascript
var name = 'Ani';

function sayHello()
{
    return ' Hi ' + name;
}
console.log(sayHello());

function person()
{
    //a variable defined inside a function, its availablity is only withi the function, these variables cannot be accessed outside the function
    //in javascript variables ae function scoped
    var city = 'Blore';
    console.log(city);
}
person();
//console.log(city); // cannot access the city variable that hsa been defined inside the person function

function movie()
{
    // if variables are defined without the keyword var, they become a global vaiable and are available outside the function
    actor = 'jackie chan';
    console.log(actor);
}
movie();

var n1 = 10;
var n2 = 20;

function add()
{
    //here we are directly able to assign new values to our global values.
    n1 = 100;
    n2 = 200;
    //var n1 = 100;
    //var n2 = 200;
    return n1 + n2;
}

console.log(add()); // 300
console.log(n1); // 100
console.log(n2); // 200

var a1 = 15;
var a2 = 25;
function sum()
{
    var a1 = 150;
    var a2 = 250; 
    return a1 + a2;
}
console.log(sum()); //400
console.log(a1); //15
console.log(a2); //25   