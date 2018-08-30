function solution(number){
    var value = 0;
    var romanStr = '';
    var  roman = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    for(var i in roman){
        while(value + roman[i] <= number){
           value += roman[i];
           romanStr += i;
        }
     }
    return romanStr;
   }
console.log(solution(2008));
	