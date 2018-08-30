var superHeroes = [
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
];
function superPower(a,b){
	if(b === undefined)
	{
		return 'invalid input';
	}
  var string = a.find((ele,i) => ele['name'] === b);
  console.log(string);
 if(string)
 {
	// var str = a[i].powers.join(', ');
	 return string;
 }
	return `${b} is not in the super heroes list`;
}
console.log(superPower(superHeroes,'Molecule Man'));
console.log(superPower(superHeroes,'Iron Man'));
console.log(superPower(superHeroes,''));