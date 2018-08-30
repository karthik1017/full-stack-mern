function frequency(string)
{
	var freq = {};
	for(var i=0; i<string.length; i++)
	{
		var count = 0;
		for(var j=0; j<string.length; j++)
		{
			if(string[j] === '\0')
			{
				continue;
			}
			if(string[i] === string[j])
			{
				string[j]='\0';
				count++;
			}
			freq[string[i]]=count;
		}
	}
	return freq;
}
console.log(frequency('abca'));
console.log(frequency(''));