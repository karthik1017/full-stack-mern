var names = ["Bob", "Bill", "Bo", "Ben", "Bob", "Brett", "Ben", "Bill", "Bo", "Ben", "Bob", "Ben"];

function strFrequency(a){
  if(a.length === 0) {
    return 'invalid input';
  }
  var count = a.reduce((accumulator,name) => {
    if(name in accumulator) {
      accumulator[name]++;
    }
    else {
      accumulator[name] = 1;
    }
      return accumulator;
  },{});
  return count;
 }

 console.log(strFrequency(names));