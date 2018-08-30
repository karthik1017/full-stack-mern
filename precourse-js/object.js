var person = 
{
    firstName : 'Vijaykumar',
    city : 'Bangalore',
    details: function()
    {
        return 'My name is ' + this.firstName + ' and  i live in ' + this.city;
    }
};

console.log(person['firstName']);
console.log(person.firstName);
console.log(person.details());