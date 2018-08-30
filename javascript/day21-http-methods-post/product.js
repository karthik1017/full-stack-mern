//url - http://dct-api-data.herokuapp.com/products.json
var axios = require('axios');

function Product(data)
{
    this.name = data.name;
    this.price = data.price;
    this.category = data.category;
    this.cod = data.cod;
    this.stock = data.stock;

    this.submit = function(){
        var DataToBeSent = {
            'name' : this.name,
            'price' : this.price,
            'category' : this.category,
            'cod' : this.cod,
            'stock':this.stock
        };
        axios.post('http://dct-api-data.herokuapp.com/products.json')
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err.response.data);
        })
    }
}

var p1 = new Product({'name':'laptop','price':30000,'category':'electronics','cod':true,'stock':10});

p1.submit();