var checkHandle = document.getElementById('check');
var passHandle = document.getElementById('password');
checkHandle.addEventListener('click',function(e){
if(checkHandle.checked){
  passHandle.setAttribute('type','text');
}
else{
    passHandle.setAttribute('type','password');
}
},false);
