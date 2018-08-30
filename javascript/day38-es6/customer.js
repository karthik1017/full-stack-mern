class Customer{
    constructor(data = {}){
       this.name = data.name;
       this.Accno = data.Accno;
       this.balance = data.balance;
    }
    transcations(code,amount){
        if(code === 1) {
            this.balance = this.balance + amount;
            return `You deposited : ${this.balance}`;
        }
        else if (code === 0 && amount > this.balance ) {
            return `The amount is insufficient for the specified withdrawal`;
        }
        else if(code === 0 && amount <= this.balance) {
            this.balance = this.balance - amount;
            return `Your current account balance is ${this.balance}`;
        }
    };
    balance(){
        return `Your current balance is ${this.balance}`;
    };
}
module.exports = {
    Customer
}