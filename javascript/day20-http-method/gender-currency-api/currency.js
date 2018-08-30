var axios = require('axios');
var from = 'USD';
var to = 'INR';
axios.get(`http://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}&compact=y`)
.then(response => {
  var value = response.data;
  //console.log(value);
  //console.log(value[`${from}_${to}`].val);
  var dolar = 100;
  var conversion = dolar * value[`${from}_${to}`].val;
  console.log(` ${dolar}$ = ${conversion}rs`);
})
.catch(err => {
    console.log(err);
});
