var employees = [
    {
        name : 'Suresh',
        department : 'Sales'
    },
    
    {
        name : 'Deepa',
        department : 'HR'
    },

    {
        name : 'Vijay',
        department : 'IT'
    },

    {
        name : 'Mani',
        department : 'Sales'
    }
];

console.log('Employees in Sales Department');

//for(var i = 0; i < employees.length; i++)
//{
    //console.log(employees[i]);

    //if(employees[i].department === 'Sales')
    //{
       // console.log(employees[i].name)
    //}
//}

employees.forEach(function(employee)
{
    //console.log(employee);
    if(employee.department === 'Sales')
    {
        console.log(employee.name);
    }
})

console.log('Employees in Sales Department');
employees.forEach(function(employee)
{
    //console.log(employee);
    if(employee.department === 'HR')
    {
        console.log(employee.name);
    }
})

