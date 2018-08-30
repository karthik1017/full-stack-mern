function iPush(array,num)
{	
	array[array.length]= num;
	return array;
	
}
var array = [1,2,3];
var num = 4;
console.log(iPush(array,num));