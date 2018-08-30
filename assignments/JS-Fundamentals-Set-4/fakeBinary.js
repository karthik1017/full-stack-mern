function fakeBinary(a){
    var result = '';
    for(var i = 0; i < a.length; i++) {
        if(a[i] < '5') {
        result += '0';
        } else if (a[i] >= '5') {
            result += '1';
        }
    }
    return result;
}

console.log(fakeBinary('3457'));
console.log(fakeBinary('1234'));
