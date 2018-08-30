var ys = [91,74,90,85,73,81,87];
function choose_best_sum(a,b,c){
    var arr = [];
    var sumArr = [];
    for(var i = 0; i < c.length-2; i++)
    {
        for(var j = i+1; j < c.length-1; j++)
        {
            for(var k = j+1; k < c.length; k++)
            {
                arr.push([c[i],c[j],c[k]]);
            }
        }
    }
       var num = strFrequency(arr);
       console.log(arr);
       console.log(num);
       arr.forEach(ele => sumArr.push(ele.reduce((accu,curr) =>  accu+curr)));
       sumArr.sort((a,b) => a-b);
       //console.log(sumArr);
       for(var i = 0;i < sumArr.length && sumArr[i]<=a; i++){
         //  console.log(sumArr[i]);
       }
       return sumArr[i-1];
   }
   function strFrequency(a){
	if(a.length === 0)
	{
		return 'invalid input';
	}
 var count = a.reduce((accumulator,name) => { 
 if(name in accumulator)
 {
	 accumulator[name]++;
 }
	else
 {
	 accumulator[name] = 1;
 }
	return accumulator;
 },{});
return count;
}
   console.log( choose_best_sum(230, 3, ys) )