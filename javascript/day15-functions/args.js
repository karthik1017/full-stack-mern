var details = function(name,city)
{
    console.log(name);
    console.log(city);
    console.log(arguments);
}

//equal args and params
details('ani','blore');

//1 extra args,being ignored in params list, but still available in arguments.
details('ani','bangalore','1234567890');

//1 less, params now holds undefined for the missing args
details('ani');