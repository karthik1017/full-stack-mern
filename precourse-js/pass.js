function change(x)
{
    x = 1;
    console.log(x);
}

var x = 0;
console.log(x);
change(x);
console.log(x);

function changeArray(numbers)
{
    numbers[0] = 100;
}

var numbers = [10,20];
console.log(numbers);
changeArray(numbers);
console.log(numbers);

var product = 
{
    name : 'Marker',
    price : 10
}

function halfPrice(product)
{
    product.price = 5;
}

console.log(product);
halfPrice(product);
console.log(product);