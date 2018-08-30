function factorial(a){
        var fact = 1;
        for(var i = a; i > 1; i--) {
            fact = fact * i;
        }
        return fact;
    }
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(1));
