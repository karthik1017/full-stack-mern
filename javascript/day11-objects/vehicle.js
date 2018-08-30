var car = {
    model: 'swift',
    manufacturer: 'maruthi suzuki',
    carstate:false,
    xAxis:0,
    start:function(){
       this.carstate = true;
       return `the engine is started`; 
    },
    stop:function(){
       this.carstate = false;
       return `the engine is stoped`;
    },
    drive:function(){
        if(this.carstate){
            this.xAxis++;
            return `the car is moving in the gear ${this.xAxis}`;
        }
        else{
            return `start the car first`;
        }
    },
    current:function(){
        return `i am at ${this.xAxis} position`;
    },
    reset:function(){
        this.xAxis = 0;
        this.carstate = false;
        return `${this.xAxis} and ${this.carstate}`;
    }
}
console.log(car);
console.log(car.start());
console.log(car.drive());
console.log(car.current());
console.log(car.reset());