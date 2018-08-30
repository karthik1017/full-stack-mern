//const {Car} = require('./car.js').Car;

//common JS Modules require System

//index-car.js
const { Car } = require('./car.js');

let car1 = new Car({'name':'creta','make':2018,'color':'red','brand':'hyundai','fuelType':'deisel','seater':5});
let car2 = new Car({'name':'lancer','make':2018,'color':'yellow','brand':'mitsubishi','fuelType':'petrol','seater':5});
let car3 = new Car({'name':'roadster','make':2018,'color':'white','brand':'tesla','fuelType':'electric','seater':4});

console.log(car1.details());
console.log(car2.details());
console.log(car3.details());