const { Counter } = require('./counter.js');

let c1 = new Counter();
let c2 = new Counter();

console.log(c1.count);
console.log(c1.up());
console.log(c1.up());
console.log(c1.up());
console.log(c1.down());
console.log(c1.down());
console.log(c1.down());
console.log(c1.down());
console.log(c1.down());
console.log(c1.up());
console.log(c1.reset());