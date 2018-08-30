//3 student objects with name ,email and course
//you will need to push 3 objects into student array
//iterate over the students array
//1.display elements at each index {}
//2.display student info 'name' | 'email' | 'course'

var student1 = {
    name:'karhtik',
    email:'karthikdevaraj1017@gmail.com',
    course:'MERN'
};

var student2 = {
    name:'vijay',
    email:'vijay@gmail.com',
    course:'MERN'
};

var student3 = {
    name:'pavan',
    email:'pavan@gmail.com',
    course:'MERN'
};

var studentArr = [];
studentArr.push(student1,student2,student3);
console.log(studentArr);

//iteration of eeach object in array
for(var i =0; i<studentArr.length; i++)
{
    console.log(`student ${i} = ${studentArr[i]}`);
}

//for each only 3 arguments is possible in for each the 1st argument will hold the element the second argument will hold the index and the 3rd argument will hold the entire array as value.

studentArr.forEach((element,i) => {
 console.log(`${i+1} | ${element.name} | ${element.email} | ${element.course} `);
 console.log('\n');
});