var courses = [{'name':'MERN','language':'js'},{'name':'MEAN','language':'js'},{'name':'react','language':'js'},{'name':'node','language':'js'},{'name':'rails','language':'rb'},{'name':'django','language':'py'},{'name':'iot','language':'py'}];
var select1 = document.getElementById('lang');
var select2 = document.getElementById('course');
var nameHandle = document.getElementById('name');
var nameLable = document.getElementById('lb1');

nameHandle.addEventListener('blur',function(){
   if(nameHandle.value === '')
   {
     nameLable.innerHTML='name cannot be emtpy';
   }
},false);

select1.addEventListener('change',function(){
    select2.innerHTML = '';
    var lan = courses.filter(ele => ele.language === select1.value);
    lan.forEach(ele => {
        var opt = document.createElement('option');
        opt.setAttribute('value',`${ele.name}`);
        var text = document.createTextNode(`${ele.name}`)
        opt.appendChild(text);
        select2.appendChild(opt);
    })
},false);