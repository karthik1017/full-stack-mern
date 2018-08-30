var n = 50;
var randomNumber = Math.round((Math.random() * 100));
console.log(randomNumber); 

if (n > randomNumber)
{
    console.log('n is greater');
}
else if (n < randomNumber)
{
    console.log('n is lesser');
}
else 
{
    console.log('n is equal to randomNumber');
}