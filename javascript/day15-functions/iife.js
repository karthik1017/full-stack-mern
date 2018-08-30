// iife-> immediately invoked function expression

//without arguments
(function()
{
    console.log('hello kathik');
    console.log('good morning');
})();

//with arguments
(function(n1,n2)
{
    console.log('hello kathik');
    console.log('good morning');
    console.log(n1+n2);
})(10,20);
