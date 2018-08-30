function findUnique(a){
var uniqueNumber = [];

var sortedArray = a.sort(function(a,b){
    return a - b;
});

if(a.length == '') {
    return null;
} else {
for(var i = 0; i < sortedArray.length; i++) {
    if(sortedArray[i] !== sortedArray[i+1] && sortedArray[i] !== sortedArray[i-1]) {
        uniqueNumber.push(sortedArray[i]);
        }
    }
}
    return uniqueNumber[0];
}
console.log(findUnique([1,8,1,8,6]));
console.log(findUnique([]));