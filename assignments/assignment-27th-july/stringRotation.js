function rotateStr(a){
    let result = [];
    let myString = a.charAt(0).toUpperCase() + a.slice(1);
  for(let i = 0; i < myString.length; i++) {
    let char = myString.slice(0,1);
    let string = myString.slice(1) + char;
    myString = string;
    result.push(myString);
  }
  return result;
}

console.log(rotateStr('hello'));
console.log(rotateStr(''));