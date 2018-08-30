class Rover{
    constructor(){
        this.xAxis = 1;
        this.yAxis = 2;
        this.facing = 'N';
        this.co={
            'N':{'R':'E','L':'W'},
            'E':{'R':'S','L':'N'},
            'S':{'R':'E','L':'W'},
            'W':{'R':'N','L':'S'}
        }
    }
    control(directions){
        var that = this;
            for(var i=0;i<directions.length;i++){
                if(directions[i]!=='M'){
                    this.facing=this.co[this.facing][directions[i]];
                }
                else{
                    if(this.facing=='S'){
                        this.yAxis-=1;
                    }
                    else if(this.facing=='E'){
                        this.xAxis+=1;
                    }
                    else if(this.facing=='W'){
                        this.xAxis-=1;
                    }
                    else if(this.facing=='N'){
                        this.yAxis+=1;
                    }
                }
            }
            return `xAxis = ${this.yAxis}, yAxis = ${this.yAxis}, facing = ${this.facing}`
        }
    }
    let rover1 = new Rover();
    var directions = ['L','L','M'];
    console.log(rover1.control(directions));