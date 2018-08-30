for(var i = 1; i <= 20; i++)
{
    console.log(i);
}

var numbers = [10,20,30,40,50];
for(var i = 0; i < numbers.length; i++)
{
    console.log(numbers[i]);
}

var languages = ['javascript', 'ruby', 'python', 'java'];
for(var i = 0; i < languages.length; i++)
{
    console.log('I like ' + languages[i]);
}

var products = [
    {
        name: 'Marker'
    },

    {
        name: 'Scale' 
    },

    {
        name: 'Board'
    }
];

for(var i = 0; i < products.length; i++)
{
    console.log(products[i].name);
}