function findNotBookedTables(array)
{
	var tables = [];
	for(var i=0 ;i < array.length; i++)
	{
		if(array[i] === 'not booked')
		{
			tables.push(i);
		}
	}
	return tables;
}
	var array = ['not booked','booked','booked','not booked','not booked'];
	console.log(findNotBookedTables(array));
			