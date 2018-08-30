var result = {
    source : 'Bengaluru',
    destination : 'mysore',
    distance : 150,
    time : '3 hours, 30 mins'
};

function converter(result)
{
    return `The distance between ${result.source} and ${result.destination} is ${result.distance} and the time taken is ${result.time}.` 
}

console.log(converter(result))

var resultArr = {
    source : ['Bengaluru','karnataka'],
    destination : ['mysore','karnataka'],
    distance : 150,
    time : '3 hours, 30 mins'
}

function converter1(resultArr)
{
   // resultArr.source = resultArr.source.reduce((accu,curr) => accu.concat(curr),[]);
    //resultArr.destination = resultArr.destination.reduce((accu,curr) => accu.concat(curr),[]);
    console.log()
    return `The distance between ${resultArr.source[0]} and ${resultArr.destination[0]} is ${resultArr.distance} and the time taken is ${resultArr.time}.` 
}

console.log(converter1(resultArr));