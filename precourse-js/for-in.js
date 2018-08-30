var product = 
{
    name : 'Marker',
    price : 25,
    description : 'white board marker',
    rating: 4.5
}

console.log(product.name);
console.log(product['name']);

for(var key in product)
{
    console.log(key, product[key]);
}