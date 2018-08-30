var person = 
{
    firstName : 'Vijaykumar',
    city : 'Bangalore',
}

console.log(person.firstName);

console.log(Object.keys(person));
console.log(Object.values(person));

for(var key in person)
{
    console.log(key, person[key]);
}

console.log(Object.keys(person).includes('state'));
console.log(Object.keys(person).includes('firstName'));

console.log(Object.values(person).includes('Bangalore'));