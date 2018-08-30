let select1 = document.getElementById('cat');
let select2 = document.getElementById('prod');
var categories = [
    {
        "id": 1,
        "name": "Computer"
    },
    {
        "id": 2,
        "name": "Baby"
    },
    {
        "id": 3,
        "name": "Music"
    },
    {
        "id": 4,
        "name": "Kids"
    }
];

var products = [
    {
      "id": 1,
      "name": "Rustic Marble Computer",
      "price": 7997.0,
      "category_id": 1,
      "stock": 647,
      "cod_eligible": true
    },
    {
      "id": 2,
      "name": "Sleek Copper Clock",
      "price": 6177.0,
      "category_id": 1,
      "stock": 436,
      "cod_eligible": true
    },
    {
      "id": 3,
      "name": "Ergonomic Concrete Pants",
      "price": 1732.0,
      "category_id": 2,
      "stock": 68,
      "cod_eligible": true
    },
    {
      "id": 4,
      "name": "Gorgeous Linen Table",
      "price": 4667.0,
      "category_id": 4,
      "stock": 123,
      "cod_eligible": true
    },
    {
      "id": 5,
      "name": "Heavy Duty Silk Knife",
      "price": 3348.0,
      "category_id": 3,
      "stock": 37,
      "cod_eligible": true
    },
    {
      "id": 6,
      "name": "Incredible Plastic Hat",
      "price": 4277.0,
      "category_id": 2,
      "stock": 517,
      "cod_eligible": true
    },
    {
      "id": 7,
      "name": "Ergonomic Plastic Coat",
      "price": 8983.0,
     "category_id": 2,
      "stock": 420,
      "cod_eligible": true
    },
    {
      "id": 8,
      "name": "Enormous Rubber Table",
      "price": 6342.0,
      "category_id": 3,
      "stock": 583,
      "cod_eligible": false
    },
    {
      "id": 9,
      "name": "Heavy Duty Marble Table",
      "price": 9158.0,
      "category_id": 4,
      "stock": 447,
      "cod_eligible": false
    },
    {
      "id": 10,
      "name": "Intelligent Silk Bench",
      "price": 8902.0,
     "category_id": 4,
      "stock": 72,
      "cod_eligible": false
    }
  ];

window.addEventListener('load',function(){
    bulidselect(select1,categories);
},false);

function bulidselect(sel,prod){
    sel.innerhtml = '';
    prod.forEach(ele => {
        var opt = document.createElement('option');
        opt.setAttribute('value',ele.id);
        var text = document.createTextNode(ele.name)
        opt.appendChild(text);
        sel.appendChild(opt);
    })
}
select1.addEventListener('change',function(){
    let pro = products.filter(ele => ele.category_id == select1.value);
    select2.innerHTML = '';
    bulidselect(select2,pro);
},false);