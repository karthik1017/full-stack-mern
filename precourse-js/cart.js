var cart = [
    {
        name : 'Nike Lunar Converse',
        price : 5000,
        quantity : 2       
    },

    {
        name : 'Acer Predator',
        price : 100000,
        quantity : 1
    }
];

function calculateTotal(cart)
{
    var sum = 0;
    cart.forEach(function(item)
    {
        sum = sum + item.price * item.quantity;
    });
    return sum;
}

console.log(calculateTotal(cart));