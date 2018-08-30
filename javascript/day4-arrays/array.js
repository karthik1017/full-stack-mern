var player1 = "Dhoni";
var player2 = "sachin";
var player3 = "virat";
var player4 = "rahul";


var players = [];//array

var player = {};//object

console.log(players);
console.log(typeof players);//object
console.log(typeof player);//object
console.log(Array.isArray(players));//true


var dream11 = ["Dhoni","sachin","virat","rahul","zaheer"];
console.log(dream11);//["Dhoni","sachin","virat","rahul","zaheer"]

console.log(dream11[0]);//dhoni "string"

console.log(dream11[10]);//undefined


// can array hold functions??  YES, it can :D

dream11[4]= "kumble";
console.log(dream11);

dream11.push("shewag");
console.log(dream11);

//dream11[10]="chethan";

console.log(dream11);
console.log(dream11.length);


console.log("total players "+ dream11.length);

dream11[dream11.length]="dhawan";
console.log(dream11);

var numbers =[10,20,30];

console.log(numbers.reverse());
console.log(numbers.sort());// works efficiently with the alphabets

console.log(dream11.sort());// sorts to the original array

var names = new Array(); // names=[];

console.log(names);

var names = new Array(2); // two empty sized array';
console.log(names);


var names = new Array(2, "chethan");//when more than one aruguments is passed in the argument...it stores as the elements
console.log(names);


var numbers= new Array(10);

console.log(numbers);// creates 10 empty sized array

numbers.push(50);

console.log(numbers);

numbers.fill(10);// fills all the elements as 10
console.log(numbers);

console.log(dream11.shift()); // 'dawan';

console.log(dream11);

console.log(dream11.unshift("raina"));//length
console.log(dream11);// unshift adds the element at the begining of an Array.


dream11.splice(1,0,"K L rahul");// adds the element the the index 1, 0  means adding to the array
console.log(dream11);

dream11.splice(3,1);// if splice method contains two arguments, first argument is the index and the second parameter is number of elements.
console.log(dream11);
var string = dream11.join();//converts array into string
console.log(string);

var array = [1,1,1,1,1];

var newArray = array.concat(dream11);sss
console.log(newArray);


