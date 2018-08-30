var data = [
    [ 'animals',
      [
        'dogs', ['Corgi', 'Sheltie'],
        'cats', ['Tabby','Black'],
        'pigs', ['Teacup']
      ]
    ],
    [ 'guitars',
      [
        'Fender', ['Telecaster', 'Stratocaster','Jazzmaster'],
        'Gibson', ["Gibson Flying-V", 'Firebird', 'Les Paul']
      ]
    ]
  ];

  function objectifier(a) {
    var myObject = {};
    for(var i = 0; i < a.length; i++) {
        var result = a[i][0];
        myObject[result] = {};
        var values = a[i][1];
        for(var j = 0; j < values.length; j++) {
            if(j % 2 === 0) {
                myObject[result][values[j]] = values[j+1];
            }
        }
    }
    //console.log(myObject);
    return myObject;
}

console.log(objectifier(data));