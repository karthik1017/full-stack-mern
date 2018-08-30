class Car {
 constructor(data = {}){
     this.name = data.name;
     this.make = data.make;
     this.color = data.color;
     this.brand = data.brand;
     this.fuelType = data.fuelType;
     this.seater = data.seater;
     this.xAxis = 0;
 }
 details(){
     return  `\n\t\tname = ${this.name}
                make = ${this.make}
                color = ${this.color}
                make = ${this.make}
                color = ${this.color}
                brand = ${this.brand}
                fuelType = ${this.fuelType}
                seater = ${this.seater}`
 };
 reset(){
    this.xAxis = 0;
    return this.xAxis;
 }

 getPosition(){
    return `${this.name} - ${this.xAxis}`;
 }

 move(){
     this.xAxis=+ 1;
     return this.xAxis;
 }

 reverse(){
     this.xAxis -= 1;
     return this.xAxis;
 }
}

module.exports = {
    Car
}
