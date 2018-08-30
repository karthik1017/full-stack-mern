var name = 'karthik';
var city = 'BENGALURU';
var state = 'KarNataKa';
var sentence = 'hi i am KArthik, hi Hello world';

console.log(state.length);
console.log(name.toUpperCase());
console.log(city.toLowerCase());

console.log(sentence.indexOf('am'));
console.log(sentence.indexOf('lo'));

console.log(sentence.lastIndexOf('hi'));
console.log(name.charAt('3'));

function convert(str)
{
 var str1='';
 console.log(str); 
 var cap = {'A':'a','B':'b','C':'c','D':'d','E':'e','F':'f','G':'g','H':'h','I':'i','J':'j','K':'k','L':'l','M':'m','N':'n','O':'o','P':'p','Q':'q','R':'r','S':'s','T':'t','U':'u','V':'v','W':'w','X':'x','Y':'y','Z':'z'}; 
 for(var i=0 ; i < str.length ;i++)
 {
     console.log(cap[str[i]]);
     str1=str1+cap[str[i]];
 }
 console.log(str1); 
 return str1;
}
console.log(convert('KARTHIK'));

function number(phone)
{
 var firstHalf = phone.slice(0,3);
 var middle = phone.slice(3,6);
 var last = phone.slice(6,10);
 return console.log(`(${firstHalf}) ${middle}-${last}`);
}
number('1234567890');