function squareSum(a){
    var result = 0;
    for(var i = 0; i < a.length; i++) {
        result += Math.pow(a[i],2);
    }
    return result;
}

console.log(squareSum([1, 2, 2]));