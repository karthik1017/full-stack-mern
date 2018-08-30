function removeZeros(a){
 var result = "";
 var numStr = a.toString();

 if(a !== 0) {
     for(var i = 0; i < numStr.length; i++) {
         if(numStr[i]!== "0") {
             result = result + numStr[i];
         }
     }
  }
  else {
      return NaN;
  }
  return +result;
}

console.log(removeZeros(1023002));
console.log(removeZeros(6006606.203));
console.log(removeZeros(0));