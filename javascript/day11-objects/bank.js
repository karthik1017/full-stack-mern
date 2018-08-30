var customers = {
    accNum:'KAR1234',
    name: 'karthik',
    balance: 10000,
    transaction: function(a,b){
    if(a === 1)
    {    
        this.balance += b;
        return `your updated balance is ${this.balance}`;
    }
    if(b > this.balance)
    {
      return `you have insufficient balance you have only ${this.balance}`;
    }
    this.balance -= b;
       return `you have successfully withdrawn ${b}rs and remaining is ${this.balance} `;
    },
    display: function(){
       return `${this.accNum},\n ${this.name},\n ${this.balance}`;
    }
};
console.log(customers);//object
console.log(customers.transaction(1,1000));//deposit
console.log(customers.transaction(0,5000));//withdraw
console.log(customers.display());//balance  