function repeat_string(string,num)
{
	if(num === undefined)
	{
		return 'Error in string or count';
	}
	var str = '';
	for(var i=0; i<num;i++)
	{
	str+=string;
	}
 return str;
}
console.log(repeat_string('a',4));
console.log(repeat_string('a'));