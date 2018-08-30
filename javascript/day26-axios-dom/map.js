var name = 'karthik';
var skills = ['rb','js','py'];
skills.forEach(ele => {
    console.log(`${name} knows ${ele}`);
})
var result = skills.map(ele => {
    return `${name} knows ${ele}`;
})
console.log(result);