/* 
   url - http://dct-api-data.herokuapp.com/products.json?category=Books
   output name - category - price - reviewcount
*/
var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/products.json?category=Books';
axios.get(url)
.then(response => {
    var products = response.data;
    products.forEach(ele => {
        console.log(`${ele.name}---${ele.category}---${ele.price}---${ele.reviews.length} `);
    });
})
.catch(err => {console.log(err)});