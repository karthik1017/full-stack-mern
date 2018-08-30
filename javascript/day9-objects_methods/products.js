var product = {
    name : 'marker',
    price : 15
}

console.log(product.name);
console.log(product['name']);

console.log(objects.keys(product));
console.log(objects.values(product));

console.log(objects.values(product).includes('camil'));
console.log(objects.keys(product).includes('description'));

console.log(product.hasOwnProperty('name'));

//adding a new property onto an object
product.description = 'white board marker';
product['company'] = 'Cello';
console.log(product);

//remove a property from an object
delete product.company;
console.log(product);

//note - cannot access properties via . operator, can only be done via square brackets
for(var k in product)
{
    console.log(`${k} - ${product[k]}`);
}
