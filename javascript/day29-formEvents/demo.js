function fakeBinary(a){
    var str = '';
    for(var i = 0; i < a.length; i++)
    {
        console.log(a[i]);
        if(parseInt(a[i]) < 5)
        {
            str += '0';
        }
        else{
            str += '1';
        }
    }
    console.log(str);
       return str;
   }
   console.log(fakeBinary('3457'));