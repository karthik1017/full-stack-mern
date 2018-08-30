var axios = require('axios');
var id = 2;
var url = `https://dct-api-data.herokuapp.com/users/${id}.json`;

axios.delete(url)
.then(response => {
    console.log(response.data);
})
.catch(err => {
    console.log(err);
});