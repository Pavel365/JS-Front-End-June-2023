function listEmployees(input){
    input.forEach(employee => {
        console.log(`Name: ${employee} -- Personal Number: ${employee.length}`);
    });


    //Complex logic
    const employees = input.reduce((acc, curr) => {
        acc[curr] = curr.length;
        return acc;
    }, {});

    Object.entries(employees).forEach(([name, number]) =>{
        console.log(`Name: ${name} -- Personal Number: ${number}`);
    });
}

listEmployees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]);