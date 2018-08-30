var appHandle = document.getElementById('app');
var ol = document.createElement('ol');
var h2 = document.createElement('h2');
var text = document.createTextNode('The Products Are Listed below');
h2.appendChild(text);
var url = 'http://dct-api-data.herokuapp.com/products.json'
axios.get(url)
.then(reponse => {
    var products = reponse.data;
    products.forEach(ele => {
        var li = document.createElement('li');
        var text2 = document.createTextNode(ele.name);
        li.appendChild(text2);
        ol.appendChild(li);
    });
    appHandle.appendChild(h2);
    appHandle.appendChild(ol);
})
.catch(err => {
    console.log(err);
});