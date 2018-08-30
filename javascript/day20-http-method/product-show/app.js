var axios = require('axios');

var url = 'http://dct-api-data.herokuapp.com/products/302.json';

axios.get(url)
.then(function(response){
  var product = response.data;
  console.log(`${product.name}--${product.price}--${product.category}`);
  //printing the reviews of product id 302.
  console.log('Listing Reviews : '+ product.reviews.length);
  product.reviews.forEach(ele => {
    console.log(`body - ${ele.body} \n User ${ele.user} \n rating - ${ele.rating} \n\n`)      
  }); 
})
.catch(function(err){
    console.log(err);
});