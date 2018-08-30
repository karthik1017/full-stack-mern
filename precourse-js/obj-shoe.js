var name = 'Airmax 2017';
var price = 3299;
var freedelivery = true;
var sizes = [7, 7.5, 8, 9];
var colors = ['blue', 'black', 'red'];
var description = 'Very comfortable running shoe';
var details = 
{
    asin : 'B076C565GF'
}

var getdetails = function()
{
    return 'Im a function'
}

var shoe = 
{
    name : 'Airmax 2017',
    price : 3299,
    freeDelivery : true,
    sizes : [7,7.5,8,9],
    colors: ['blue', 'black', 'red'],
    description : 'Vey comfortable running shoe',
    details: 
    {
        asin : 'B076C565GF'
    },

    getDetails: function()
    {
        return this.name + ' ' + this.price + ' ' + this.freeDelivery + ' ' + this.sizes + ' ' + this.colors + ' ' + this.description + ' ' + this.details.asin
    }
}

console.log(shoe);
console.log(shoe.name);
console.log(shoe.getDetails());