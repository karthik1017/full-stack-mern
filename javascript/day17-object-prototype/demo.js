function colorAssociation(a){
    var array = [];
    a.forEach(ele => {
    var obj = {}; 
    obj[ele[0]] = ele[1]; 
    array.push(obj)
});
    return array;
   }
   console.log(colorAssociation([["white", "goodness"], ["blue", "tranquility"]]));
