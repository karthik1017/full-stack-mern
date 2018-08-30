var textareaHandle = document.getElementById('tArea');
var spanHandle = document.getElementById('count');
textareaHandle.addEventListener('keyup',function(){
    var counts = textareaHandle.value.length;
    if(counts !== 0)
    {
    var arrayCounts = textareaHandle.value.split(' ').length;
    }
    else{
        var arrayCounts = 0;
    }
    spanHandle.innerHTML = `you have written ${arrayCounts} words and ${counts} characters`;
},false);