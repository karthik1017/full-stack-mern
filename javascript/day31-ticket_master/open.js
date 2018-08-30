var axios = require('axios')
var tickets;
axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=671a7695f19b162f')
.then(response => {
    tickets = response.data;
    console.log(tickets);   
    for(var i = 0; i < tickets.length; i++ )
{
    console.log(tickets[i].ticket_code);
    axios.patch(`http://dct-api-data.herokuapp.com/tickets/${tickets[i].ticket_code}?api_key=671a7695f19b162f`,{status:'open'})
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    });
}
 
})
.catch(err => {
    console.log(err);
})
