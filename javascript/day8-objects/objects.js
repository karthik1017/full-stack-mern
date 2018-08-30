// An order is an unordered, key index, collection of values.
var product = {
    name: 'marker',
    price: 25,
    units: 5,
    marker:'camlin'
};

var player = { name:'virat', captain:true, avg:50.7, country: 'India', age:30};

console.log(product);
console.log(player);

//accessing the object elements.
console.log(player.name);
console.log(player['name']);
console.log(product['marker']);
console.log(product.marker);

console.log('name',player.name);    
console.log('captain',player.captain);

//checking typeof
console.log(typeof player);
console.log(typeof player.name);
console.log(typeof player.captain);
console.log(typeof player.avg); 