var x = 10;
var y = 13.5;
var z = 80;
var a = -123;

console.log(typeof x);//operator
//math objects
console.log(Math.PI);//property
console.log(Math.pow(z,x));//method
console.log(Math.sqrt(z));//method
console.log(Math.abs(a));//method
console.log(Math.ceil(y));//method//method
console.log(Math.floor(y));//method
console.log(Math.round(13.5));//method
console.log(Math.min(x,y,z,a));//method
console.log(Math.max(x,y,z,a));//method
console.log(Math.random());//method

var a='10',b=15,c='19.9',d=20;
console.log(String(b)+20);//1520
console.log(Number(a)+b);//25

console.log(parseInt(c));//19
console.log(parseFloat(c));//19.9

console.log(String(b));//'15'
console.log(Number(a));//10

console.log(Number.parseInt(c));//19
console.log(Number.parseFloat(c));//19.9

//The + operator
console.log(5+5);//10
console.log('hello' + 'world');//'helloworld'
console.log(5 + '5');//'55'
console.log(5 + 5 + '5');//'105'
console.log(5 + '10' + 15);//'51015'
console.log('5' + 10 + 15);//'51015'
console.log('5'+ (10 + 5));//'515'

//some cases

var numbers = '10 20 30';
console.log(numbers.split(' '));// ['10','20','30']
console.log(parseInt(numbers));// 10
console.log(parseInt(numbers));// 10
console.log(Number(numbers));// NaN

 