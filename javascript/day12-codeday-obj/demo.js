
function objectifier(arr){
    var resultObj = {};
    
    for(var i = 0; i < arr.length; i++){
      var properteyName = arr[i][0]
      // console.log(properteyName)
      resultObj[properteyName] = {};
  
  
    // console.log(resultObj)
    var values = arr[i][1];
    // console.log(values);
    for(var j = 0; j < values.length; j=j+2){
      //if(j % 2 === 0){
        resultObj[properteyName][values[j]] = values[j + 1]
        console.log(j);
        //}
      }
    }
    return resultObj
  }
  
  // function objectifier(arr) {
  //   var obj = {};
  
  //   for (var i = 0; i < arr.length; i++) {
  //     var propName = arr[i][0];
  //     obj[propName] = {};
  
  //     var values = arr[i][1];
  //     for (var j = 0; j < values.length; j++) {
  //       if (j % 2 === 0) {
  //         obj[propName][values[j]] = values[j + 1];
  //       }
  //     }
  //   }
  //   return obj;
  // }
  
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
  
  
  console.log(objectifier(data));