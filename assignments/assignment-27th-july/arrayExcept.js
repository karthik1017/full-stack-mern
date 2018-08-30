function arrayExcept(a,b){
 if(!Array.isArray(b)) {
     a.splice(b,1);
 }
 for(let i = b.length - 1; i >= 0; i--) {
     a.splice(b[i],1);
 }
 return a;
}
console.log(arrayExcept(['a', 'b', 'c', 'd', 'e'], [1,3]));
console.log(arrayExcept(['a', 'b', 'c', 'd', 'e'], 1));