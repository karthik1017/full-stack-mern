function binaryToNumber(a){
 var decimalSum = 0;
 var count = 0;
 var revArr = [];

 count = a.length - 1;
 while(count >= 0) {
     revArr.push(a.pop());
     count--;
 }
 for(var i = 0; i < revArr.length; i++) {
     if(revArr[i] === 1) {
         console.log(revArr[i]);
         decimalSum += Math.pow(2,i);
     }
 }
 return decimalSum;
}

console.log(binaryToNumber([0,0,0,1]));
console.log(binaryToNumber([0,0,1,0]));
console.log(binaryToNumber([0,1,0,1]));
console.log(binaryToNumber([0,1,1,0]));
console.log(binaryToNumber([1,0,1,1]));