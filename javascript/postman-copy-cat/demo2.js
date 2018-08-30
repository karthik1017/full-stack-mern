function arrayExcept(a,b){
    console.log(a);
    console.log(b);
    if(typeof b === 'number')
    {
        a.splice(b,1);
        return a;
    }
    else{
        for(let i = 0; i < b.length; i++)
        {
            a.splice(b[i],1);
        }
        return a;
    }
   }
   console.log(arrayExcept(['a', 'b', 'c', 'd', 'e'],[1,3]));