var axios = require('axios');
var url = 'https://jsonplaceholder.typicode.com/users';

axios.get(url)
.then(response => {
    var data = response.data;
    data.forEach(ele => {
        console.log(`name:  ${ele.name}`);
        console.log(`username:  ${ele.username}`);
        console.log(`email:  ${ele.email}`);
        console.log(`address: ${ele.address.street}, ${ele.address.suite}`);
        console.log(`city: ${ele.address.city}`);
        console.log(`zipcode: ${ele.address.zipcode}`);
        console.log(`geo: ${ele.address.geo.lat}, ${ele.address.geo.lng}`);
        console.log(`phone: ${ele.phone}`);
        console.log(`website: ${ele.website}`);
        console.log(`company: ${ele.company.name}`);
        console.log('\n');
    });
})
.catch(err => {
    console.log(err);
});