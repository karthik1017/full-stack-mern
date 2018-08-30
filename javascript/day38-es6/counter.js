class Counter{
    constructor(count){
        this.count = count;
    }
    reset(){
        this.count = 0;
        return this.count;
    }
    up(){
        this.count++;
        return this.count;
    }
    down(){
        (this.count === 0)? this.count = 0 : this.count--;
        return this.count;
    }
}
module.exports = {
    Counter
}