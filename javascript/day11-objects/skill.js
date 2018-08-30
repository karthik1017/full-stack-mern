var coder = {
    name:'Karthik',    
    skills: ['js','rb','py'],
    myskills: function(){
    var that = this;
    this.skills.forEach(function(element){ 
      console.log(`${that.name} knows ${element} \n`) } );
      return;
    },
}
console.log(coder);
console.log(coder.myskills());
