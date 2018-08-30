// es5 -- object prototype function
//firstName, lastName, details(), greet()
//properties - firstName, lastNmae
//methods - details, greet
function person(firstName, lastName)
{
    //while creating an object,you are assigning default values
    this.firstName = firstName;
    this.lastName = lastName;

    this.details = function(){
        return this.firstName + ' ' + this.lastName;
    };

    this.greet = function(){
        return 'Hello, My name is ' + this.firstName;
    };
}

var p1 = new person('Ravi', 'Subbu');
console.log(p1.firstName); // 'Ravi'
console.log(p1.lastName); // 'subbu'
console.log(p1.details()); //
console.log(p1.greet());//

var p2 = new person('Madhu', 'Priya');
console.log(p2.details());
console.log(p2.greet());

//es6
//print () is a method
//this.name and this.average are properties
//this is oops syntatical sugar for object building

class players{
    constructor(player,avg = 0.0){
        this.name = player;
        this.average = avg; 
    }

    print(){
        return `player : ${this.name} :: average : ${this.average}`;
    }
}

var player1 = new players('sachin', 48.7);
var player2 = new players('arjun T', );
var player3 = new players('virat',53.7);
player3.secondName = 'kohli';
console.log(player3.secondName);

console.log(player1.print());
console.log(player2.print());
console.log(player3.print());