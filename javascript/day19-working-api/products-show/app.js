// url - http://dct-api-data.herokuapp.com/products.json
var url = 'http://dct-api-data.herokuapp.com/products.json'
var axios = require('axios');
//var err = 'you got an error';
axios.get(url)
.then(function(response){
  var products = response.data;
  products.sort((a,b) => a.price - b.price);
  products.forEach(product => {
    console.log(`${product.name}---${product.price}---${product.category}`);
  });
})
.catch(function(error){
    console.log(error.code);
});