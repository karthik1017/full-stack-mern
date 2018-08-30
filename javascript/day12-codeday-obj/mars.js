function moving(start,movements)
{
    var move = {
        'N' :{
            'R':'E',
            'L':'W',
            'M':function(x,y)
            {
              x = x+1;
              return [x,y];
            }
        },
        'S' : {
            'R':'W',
            'L':'E',
            'M':function(x,y)
            {
                x=x-1;
                return [x,y];
            }
        },
        'E' : {
            'R':'S',
            'L':'N',
            'M':function(x,y)
            {
                y = y+1;
                return [x,y];
            }
        },
        'W' : {
            'R':'N',
            'L':'S',
            'M':function(x,y)
            {
                y = y-1;
                return [x,y];
            }
        }
        };
    var x = start[0];
    var y = start[1];
    var pos = start[2];
   // var final = [];
    var co = [];
    var ele = 'L'
    //console.log(move[pos]);
    //console.log(move[pos]['M'](x,y));
    //console.log(move[pos].M(x,y));
    //console.log(move[pos][ele]);
    movements.forEach(ele => {if(ele === 'L' || ele === 'R'){pos = move[pos][ele]}else{co = move[pos]['M'](x,y); x = co[0]; y = co[1] }   });
    console.log('x = '+x);
    console.log('y = '+y);
    console.log('pos = '+pos);
    //co.push(x,y,pos);
    return co;    
}
console.log(moving([1,2,'N'],['L','M','L','M','L','M','L','M','M']));