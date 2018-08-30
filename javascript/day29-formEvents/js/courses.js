var courses = [{'name':'MERN','language':'js'},{'name':'MEAN','language':'js'},{'name':'react','language':'js'},{'name':'node','language':'js'},{'name':'rails','language':'rb'},{'name':'django','language':'py'},{'name':'iot','language':'py'}];
var select1 = document.getElementById('lang');
var select2 = document.getElementById('course');
var nameHandle = document.querySelector('#name');
var mobileHandle = document.querySelector('#mobile');
var formHandle = document.querySelector('#enquiryForm');
var hasErrors = {name:true,mobile:true};
console.log(hasErrors);
function nameValidate()
{
  if(nameHandle.value === ''){
      var spanerror = document.createElement('span');
      var text = document.createTextNode('it cannot be empty')
      spanerror.appendChild(text);
      nameHandle.name.appendChild(spanerror);
      hasErrors.name = true;
  }
  else{
    var spanerror = document.createElement('span');
    var text = document.createTextNode('');
    spanerror.appendChild(text);
    nameHandle.appendChild(spanerror);
    hasErrors = false;
  }
}

function mobileValidate()
{
  if(mobileHandle.value === ''){
    var spanerror = document.createElement('span');
    var text = document.createTextNode('it cannot be empty');
    spanerror.appendChild(text);
    mobileHandle.appendChild(spanerror);
    hasErrors.mobile = true; 
  }
  else if(mobileHandle.value.length === 10){
    var spanerror = document.createElement('span');
    var text = document.createTextNode('it should be of length 10');
    spanerror.appendChild(text);
    mobileHandle.appendChild(spanerror);
    hasErrors.mobile = true
  }
  else{
    var spanerror = document.createElement('span');
    var text = document.createTextNode('');
    spanerror.appendChild(text);
    mobileHandle.appendChild(spanerror);
    hasErrors.mobile = false;
  }
}
if(Object.values(hasErrors).includes(true)){
  e.preventDefault();
}
select1.addEventListener('change',function(){
    select2.innerHTML = 'select';
    var lan = courses.filter(ele => ele.language === select1.value);
    lan.forEach(ele => {
        var opt = document.createElement('option');
        opt.setAttribute('value',`${ele.name}`);
        var text = document.createTextNode(`${ele.name}`)
        opt.appendChild(text);
        select2.appendChild(opt);
    })
},false);

formHandle.addEventListener('submit',function(e){
    nameValidate()
    mobileValidate();
    console.log(hasErrors);
    if(Object.values(hasErrors).includes(true)){
        e.preventDefault();
    }
},false)