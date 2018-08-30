function wave(a){
    let string = a.toLowerCase();
    let result = [];
    for(let i = 0; i < string.length; i++) {
        if(string[i] !== ' ') {
            result.push(string.slice(0,i) + string[i].toUpperCase() + string.slice(i + 1));
        }
    }
    return result;
}

console.log(wave('Gap'));
console.log(wave('hello'));