function moving(start,directions)
{
   const co = {
    'N' : {'R':'E','L':'W'},
    'S' : {'R':'W','L':'E'},
    'E' : {'R':'S','L':'N'},
    'W' : {'R':'N','L':'S'}
   };
   var rover = {
    x :start[0],
    y :start[1],
    pos :start[2],
    control(directions,co)
    {
        for(var i=0;i<directions.length;i++)
        {
            if(directions[i]!=='M')
            {
                this.pos=co[this.pos][directions[i]];
            }
            else
            {
                if(this.pos === 'S'){
                    this.y-=1;
                }
                else if(this.pos === 'E'){
                    this.x+=1;
                }
                else if(this.pos === 'W'){
                    this.x-=1;
                }
                else if(this.pos === 'N'){
                    this.y+=1;
              }  }
           }  
       }
   }
   rover.control(directions,co);
   return `${rover.x} ${rover.y} ${rover.pos}`;
}
console.log(moving([1,2,'N'],['L','M','L','M','L','M','L','M','M']));