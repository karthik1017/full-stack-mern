var axios = require('axios');

var url = 'http://dct-api-data.herokuapp.com/users/16.json';

axios.get(url)
.then(response =>{
  var user = response.data;
  console.log(`\n ${user.username} \n`)
  var total = 0;
  user.orders.forEach(element => {
     total+=element.order_total; 
  });
  if(total > 15000){
      console.log('prime customer');
  }else{
      console.log('not prime customer');
  }
})
.catch(err => {console.log(err)});