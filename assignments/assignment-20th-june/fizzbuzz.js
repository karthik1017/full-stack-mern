function fizzy(n) {
    if (n % 15 === 0) {
      return "FizzBuzz";
    }
    if (n % 3 === 0) {
      return "Fizz";
    }
    if (n % 5 === 0) {
      return "Buzz";
    } 
    if ((n % 5)!== 0 && (n % 3)!== 0 && (n % 15)!== 0) {
    return "";
    }
  }
  
    console.log(fizzy(6));
    console.log(fizzy(10));
    console.log(fizzy(15));
    console.log(fizzy(7));
  