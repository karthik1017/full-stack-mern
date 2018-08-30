const { Customer } = require('./bank.js');

let c1 = new Customer({'name':'karthik','Accno':'KB123','balance':500000});
console.log(c1.checkBalance());
console.log(c1.transaction(1,500));
console.log(c1.checkBalance());
console.log(c1.transaction(0,5000000));