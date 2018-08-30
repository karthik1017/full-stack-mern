var axios = require('axios');

function ContactForm(data){
    this.name = data.name;
    this.email = data.email;
    this.mobile = data.mobile;
    this.message = data.message;
    this.validateMobile = function(check){
    var mobileobj = {};
    mobileobj['errors'] = [];
    if(!((typeof(Number(check)) === 'number' && (typeof(Number(check)) != NaN) ))){
       mobileobj['errors'].push('it should be of number type');
    }
    if(!(check.length === 10)){
       mobileobj['errors'].push('it should be of length 10');
    }
    if(check === ''){
       mobileobj['errors'].push('it should not be empty');
    }
    return mobileobj;
}
    this.validateEmail = function(check){
    var emailobj = {}; 
    emailobj['errors'] = [];
    if(!((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(check)))){
        emailobj['errors'].push('pls give proper email id');
    }
    return emailobj;
}
    var errorArray = [];
    this.validate = function(checkData){    
        errorArray.push(this.validateMobile(checkData.mobile));
        errorArray.push(this.validateEmail(checkData.email));
        console.log(errorArray);
    }

    this.submit = function(){
        var dataToSend = {
            name : this.name,
            email : this.email,
            mobile : this.mobile,
            message : this.message
        };
        if(this.validate(dataToSend)){
        axios.post('http://dct-api-data.herokuapp.com/contact_forms.json',dataToSend)
        .then(function(response){
            console.log('data coming from the server this time');
            console.log(`response data = ${response.data}`);
        })
        .catch(err => {
             console.log(err);
             console.log('these error/s prohibbited this form being saved:')
             var errors = err.response.data;
             for(var key in errors){
               console.log(key, errors[key].join(', '));
            }
        });
    }
    else{
        console.log(errorArray);
     }
    }
}

var cf1 = new ContactForm({name : 'karthik' , email : 'karthik@gmail.com' , mobile : '7022272547' , message : 'call me  back'});

cf1.submit();