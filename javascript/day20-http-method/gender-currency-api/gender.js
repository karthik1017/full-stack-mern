var axios = require('axios');
var key = 'pRPLCejozFwCHFbVCR';
var name = 'krishna';
var uri = 'http://www.gender-api.com/get';

//axios.get(`http://www.gender-api.com/get?name=${name}&key=${key}`)

// OR


// axios.get(uri,{
//     params:{
//         name : name,
//         key: key
//     }
// })

//OR
axios.get(uri,{
    params:{
        name,
        key
    }
})
.then(response => {
    var name = response.data;
    console.log(name.gender);
})
.catch(err =>{console.log(err)});