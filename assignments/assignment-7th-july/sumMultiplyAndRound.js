function sumMultiplyAndRound(a,b,c){
    var result = Math.round(c * (Math.round(a + b)));
    return result;
}

console.log(sumMultiplyAndRound(2, 3.5, 6.2));
console.log(sumMultiplyAndRound(2, 3.5, 0));
