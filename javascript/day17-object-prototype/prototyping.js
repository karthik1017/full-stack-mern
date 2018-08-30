// The prototype property allows you to add properties and methods to any object (number, boolean, string, date, array, object and user defined objects).

String.prototype.toCapitalize = function(){
    return this[0].toUpperCase() + this.slice(1);
}

Array.prototype.unique = function(){
    var result = [];
    this.forEach(ele => {
        if(result.indexOf(ele) < 0)
        {
            result.push(ele);
        }
    });
    return result;
}

Array.prototype.first = function(){
    return this[0];
}

Array.prototype.last = function(){
    return this[this.length - 1];
}

Array.prototype.randomArrayElement = function(){
    return this[Math.floor(Math.random() * this.length)];
}

String.prototype.camelCase = function(){
    var array = this.split(' ');
    var str = '';
    str = array[0] + array[1].charAt(0).toUpperCase() + array[1].slice(1);
    return str;
}


Array.prototype.deleteAt = function(num)
{
   this.splice(num,1);
   return this  
}
Array.prototype.delete = function(name)
{
    this.forEach(ele => {
        if(ele === name)
        {
            this.splice(this.indexOf(ele),1);
        }
    });
    return this;
}

var name = 'karthik';
var numArray = [1,2,3,5,4,8,4,5,4];
var nameArray = ['karthik','vijay','karthik','sachin','rahul'];
console.log(numArray.randomArrayElement());
console.log(nameArray.randomArrayElement());
console.log(numArray.unique());
console.log(nameArray.unique());
console.log(numArray.first());
console.log(numArray.last());
console.log(name.toCapitalize());
console.log(nameArray.delete('karthik'));

var player = 'rahul dravid';
console.log(player.camelCase());