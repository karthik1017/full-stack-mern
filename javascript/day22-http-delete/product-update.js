var axios = require('axios');

var id  = 319;
var url = `https://dct-api-data.herokuapp.com/products/${id}.json`;

axios.put(url,{  
    price :10,
    stock :100 
})
.then(response => {
    console.log('updated data are given below');
    console.log(`id = ${response.data.id}`);
    console.log(`price = ${response.data.price}`);
    console.log(`stock = ${response.data.stock}`);
})
.catch(err => {
    console.log(err);
});