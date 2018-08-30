class First{
    constructor(array,length){		
          this.array = array;
          this.length = length;
      }
      send(){
          if(this.array.length === 0)
          {
              return [];
          }
          else if(this.length === undefined)
          { 
              return this.array[0];
          }
          else if(this.array.length < this.length)
          {
              return this.array;
          }
          else
          {
              return this.array.splice(0,Math.abs(this.length));
          }
    }
  }
  function first(a,b){
   let first = new First(a,b);
   return first.send();
  }

console.log(first([7, 9, 0, -2])) ; // returns 7 
console.log(first([],3)); // returns []
console.log(first([7, 9, 0, -2],3)); // returns [7, 9, 0] 
console.log(first([7, 9, 0, -2],6)); // returns [7, 9, 0, -2] 
console.log(first([7, 9, 0, -2],-3)); // returns [7,9,0,-2]