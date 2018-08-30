 var student = ['karthik','karhtikdevaraj1017@gmail.com','7022272547','MERN','reference'];
 console.log(student);

 var studentNested = [
     ['name','karthik'],
     ['email','karthikdevaraj1017@gamil.com'],
     ['phone','7022272547'],
     ['course','MERN'],
     ['source','reference']
 ];
 console.log(studentNested);

 var studentObj = {
    name:'karthik',
    email:'karthikdevaraj1017@gamil.com',
    phone:'7022272547',
    course:'MERN',
    source:'reference',
    skills:['js','ruby','py','php'],
    education:[
        {
            puc:2014
        },
        {
            degree:2017
        },
        {
            masters:2018
        }
    ]
};
 console.log(studentObj);
 console.log('puc year',studentObj.education[0].puc);