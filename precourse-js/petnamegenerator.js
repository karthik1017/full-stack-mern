function petNameGenerator(name)
{
	if(name.length < 4)
	{
		return 'string doesnot have proper length';
 	}
	if((name[2] == 'a') || (name[2] == 'e') || (name[2] == 'i') || (name[2] == 'o') || (name[2] == 'u'))
	{
		return name.slice(0,4);
	}
	else
	{
		return name.slice(0,3);
	}
}
console.log(petNameGenerator('Sachin'));
console.log(petNameGenerator('Elon'));