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
       arr.forEach(ele => sumArr.push(ele.reduce((accu,curr) =>  accu+curr)));
       sumArr.sort((a,b) => a-b);
       for(var i = 0;i < sumArr.length && sumArr[i]<=a; i++){
       }
       if(c.length < b)
       {
           return null;
       }
       return sumArr[i-1];
   }
   function generate(arr,n,pos)
   {
     
   }
   ys = [91, 74, 73, 85, 73, 81, 87];
   console.log(choose_best_sum(230, 3, ys));