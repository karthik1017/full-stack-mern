var axios = require('axios');


var id = 35;
var url = `http://dct-api-data.herokuapp.com/contact_forms/${id}.json`;

axios.delete(url)
.then(response =>{
   console.log(response.data);
})
.catch(err => {
   console.log('code', err.response.data.status);
   console.log('error', err.response.data.error);
});
