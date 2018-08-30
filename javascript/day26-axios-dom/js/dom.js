window.addEventListener('load',function(){
    var appHandle = document.getElementById('app');
    var links = [{
             title: 'Website',
             url: 'http://www.dctacademy.com'
         },
         {
             title: 'Facebook',
             url: 'http://facebook.com/dctacademy.bangalore'
         },
         {
             title: 'github',
             url: 'http://github.com/dctacademy'
         }];
    
     var tableHandle = document.createElement('table');
     var theadHandle = document.createElement('thead');
     var tbodyHandle = document.createElement('tbody');
     var tableHead1 = document.createElement('th');
     var tableHead2 = document.createElement('th');
     var text1 = document.createTextNode('TITLE');
     var text2 = document.createTextNode('URL');
    
     tableHandle.setAttribute('border',1);
     
     tableHandle.appendChild(theadHandle);
     tableHandle.appendChild(tbodyHandle);
     
     theadHandle.appendChild(tableHead1);
     theadHandle.appendChild(tableHead2);
     tableHead1.appendChild(text1);
     tableHead2.appendChild(text2);
     
     for(var i = 0; i < links.length; i++)
     {   
         var tableRow = document.createElement('tr')
         var tableData1 = document.createElement('td');
         var tableData2 = document.createElement('td');
         var link = document.createElement('a');
         link.setAttribute('href',links[i].url);
         console.log(link);
         tableHandle.appendChild(tableRow);
         tableRow.appendChild(tableData1);
         tableRow.appendChild(tableData2);
         var data1 = document.createTextNode(links[i].title);
         var data2 = document.createTextNode(links[i].url);
         link.appendChild(data1);
         tableData1.appendChild(link);
         tableData2.appendChild(data2);
     }
     appHandle.appendChild(tableHandle);
     
     console.log(tableHandle);
},false);

