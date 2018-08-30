function greet(fname,lname)
{
 //this.fname = fname;
 //this.lname = lname;
 this.greetings = function(){
 return `hello, ${fname} ${lname}`}
}

var greetings1 = new greet('karthik','devaraj');
console.log(greetings1.greetings());