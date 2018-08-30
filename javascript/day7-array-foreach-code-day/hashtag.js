function hashTag(string)
{
	var array = string.split(' ');
    var str = '#';
    if(string.length >= 140)
    {
      return `not posible for ${string.length} of characters`
    }
    else if(string.length === 0)
    {
      return 'empty string';
    }
	for(var i = 0;i<array.length;i++ )
	{
		str+=array[i].charAt(0).toUpperCase()+array[i].slice(1);
	}
	return str;
}
console.log(hashTag('Hello World'));
console.log(hashTag('hello thank you for taking my kata'));
console.log(hashTag('hello thank you for taking my kata fdksfn sdfsdf sdf sd fsdf dsfsdfsdfkfdsksd;kfsdkf;sdkfjsd;kfjksd;fksdnfdsfsdgsdggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg'));

