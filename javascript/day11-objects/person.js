var student = {
    name: 'Rakesh',
    city: 'Tumkur',
    education: 'BCA',
    college: 'SIT',
    sayName: function(){
        return `My name is ${this.name}`;
    },
    whichCity: function(){
        return `I'm from ${this.city}`;
    },
    myEducation: function(){
        return `My education is ${this.education}`;
    },
    myCollege: function(){
        return`i studied in ${this.college}`;        
    }
};
console.log(student);
console.log(student.name);
console.log(student.sayName());
console.log(student.whichCity());
console.log(student.myEducation());
Console.log(student.myCollege());