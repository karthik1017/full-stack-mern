function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    if (str.length == 0) {
        return 'string is empty';
    }
    return newString;
}
console.log(reverseString('hello'));
console.log(reverseString('Greetings from the moon!'));
console.log(reverseString(''));
