var source = 'banglore';
var destination = 'mysore';
var distance = 150;
var timeTaken = '3 hours 30 mins';
var computeTime = function(speed){
    return distance/speed;
}

console.log('the distance from ' + source + ' to ' + destination + ' is ' + distance + ' and the time taken is ' + timeTaken);

console.log(`the distance from ${source} to ${destination} is ${distance} and the time taken is ${timeTaken}`);

console.log(`the time taken at a speed of 50 is ${computeTime(50)}hrs`);