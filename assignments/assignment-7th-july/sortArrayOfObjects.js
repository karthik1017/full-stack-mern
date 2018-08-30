function sortArrayOfObjects(a)
{
 var array = a.slice(0);
 array.sort((a,b) => b.libraryID - a.libraryID);
 return array;
}
var a = [ 
    {
        title:'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];
    console.log(sortArrayOfObjects(a));