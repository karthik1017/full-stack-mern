function move(a,b,c){
	if(a.length == 0){
		return 'empty array';
	}
	if(b > a.length){
		return 'element not present at the given index';
	}
	var temp = 0;
	for(var i = 0;i < a.length;i++){
		if(i == b){
			var temp = a[b];
			var first = a[c];
			var second = temp;
			a[b] = first;
			a[c] = second;
		}
	}
		return a;
}

console.log(move())