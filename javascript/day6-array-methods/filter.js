//declarative programming functions
var numbers = [20,10,15,25,20,30,35];
var result = numbers.filter(function(n){
    return (n%2) === 0;
});
console.log(result);

var greater25 = numbers.filter(function(n){
    return n > 25;
});
console.log(greater25);

var greater250 = numbers.filter(function(n){
    return n > 250;
});
console.log(greater250);

//es6 method for filter
var evens = numbers.filter(n => n%2 === 0);
console.log(evens);

var students = [
    {
        name: 'ravi',
        gender: 'male'
    },
    {
        name: 'revati',
        gender: 'female'
    }
];

var values = ['dct',560011,'academy','bangalore',430];
function filterstrValues(values)
{
    var str = values.filter(function(v){
        return typeof(v) === 'string';
    })
    return str;
}
console.log(filterstrValues(values));

function filterValues(values,type)
{
   var str = values.filter(function(v) {
       return (typeof(v) === type);
   });
   return str;
}

console.log(filterValues(values,'string'));
console.log(filterValues(values,'number'));

//es6 method for filter
function filtering(values,type)
{
    return values.filter(v => typeof(v) === type);
}
console.log(filtering(values,'string'));
console.log(filtering(values,'number'));

//find() method
//for the element which exists
var names = ['karthik','ramesh','suresh','jaggesh','karthik'];
var present = names.find(function(name){
    return name === 'suresh';
});
console.log(present);

//for element which doesnot exists
var present = names.find(function(name){
    return name === 'komlesh';
});
console.log(present);

//for elements which has duplicate values 
var present = names.find(function(name){
    return name === 'karthik';
});
console.log(present);

//es6 syntax for find() method
var present = names.find(name => name === 'ramesh');
console.log(present);



