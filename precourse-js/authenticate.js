function authenticate(array,str)
{
	for(var i=0; i < array.length; i++)
	{
	 if(array[i] === str)
	 {
		 return 'authenticated';
	 }
	}
	return 'not authenticated';
}
var passwords= ['Password123','dct@academy','qwerty','secret123','gopro123','harryp@tter'];
console.log(authenticate(passwords,'Password123'));
console.log(authenticate(passwords,'Balrog'));