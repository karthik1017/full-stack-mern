// url - http://dct-api-data.herokuapp.com/products.json
var axois = require('axios');
var url = 'http://dct-api-data.herokuapp.com/products.json';

// axios.get(url)
// .then(function(response){
//    var products = response.data;
//    console.log('listing Products',products.length);
//    products.forEach(function(product){
//        console.log(product.name);
//    });
// })

axois.get(url)
.then(function(response){
 var products = response.data;
// listing all products with name price and category
// products.forEach(element => {
//      console.log(`${element.name}---${element.price}---${element.category}`);
// });
// listing all proucts whoose cod is eligible is false.
// var codEn = products.filter(ele => ele.cod === false);
// console.log(codEn);
// console.log(codEn.length);
//listing all products belonging to grocery category
//  var grocery = products.filter(ele => ele.category === 'Grocery');
//  console.log(grocery);
// listing all the products which is out of stock.
//  var out = products.filter(ele => ele.stock === 0   );
//  console.log(out)
//products price is greater than 2500
// var great = products.filter(ele => ele.price > 2500)
// console.log(great)
// products price b/w 2500 and 3500
// var bet = products.filter(ele => ele.price >= 2500 && ele.price <= 3500);
// console.log(bet);
// products form category books and games
var bookGame = products.filter(ele => ele.category === 'Books' || ele.category === 'Games');
console.log(bookGame);
console.log(bookGame.length);
})
console.log('fetching data from server');