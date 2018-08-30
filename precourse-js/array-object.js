var products = [
    {
        name : 'Nike Lunar Converse',
        price : 5000,
        quantity : 1
    },

    {
        name : 'Acer Predator',
        price : 100000,
        quantity : 1
    }
]

console.log('Total Products in cart', products.length);

for(var i = 0; i < products.length; i++)
{
    console.log(products[i].name + ' ' + products[i].price + ' ' + products[i].quantity)
}

products.forEach(function(product)
{
    console.log(product.name + ' ' + product.price + ' ' + product.quantity);
})