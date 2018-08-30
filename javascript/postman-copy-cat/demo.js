class Vowel {
	constructor(str) {
		this.str = str; 
	}
	
	vowelCount() {
		let count = 0; 
		const vowels = 'aeiou';
		for(let char of this.str) {
			if(vowels.includes(char)) {
				count++;	
			}
		}
		return count; 
	}	
}


function vowelCount(a){
	let vCount = new Vowel(a); 
  return vCount.vowelCount(); 
}
