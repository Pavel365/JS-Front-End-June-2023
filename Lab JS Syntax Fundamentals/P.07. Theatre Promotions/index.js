function solveSingleTicket(typeOfDay, ageOfPerson){
    let price;

    if (typeOfDay === 'Weekday') {
        if(ageOfPerson >= 0 && ageOfPerson <= 18){
            price = '12$';
        }else if(ageOfPerson >18 && ageOfPerson <= 64){
            price = '18$';
        }else if(ageOfPerson > 64 && ageOfPerson <= 122){
            price = '12$';
        }else{
            price = "Error!";
        }
    }else if(typeOfDay === 'Weekend'){
        if(ageOfPerson >= 0 && ageOfPerson <= 18){
            price = '15$';
        }else if(ageOfPerson >18 && ageOfPerson <= 64){
            price = '20$';
        }else if(ageOfPerson > 64 && ageOfPerson <= 122){
            price = '15$';
        }else{
            price = "Error!";
        }
    }else if(typeOfDay === 'Holiday') {
        if(ageOfPerson >= 0 && ageOfPerson <= 18){
            price = '5$';
        }else if(ageOfPerson >18 && ageOfPerson <= 64){
            price = '12$';
        }else if(ageOfPerson > 64 && ageOfPerson <= 122){
            price = '10$';
        }else{
            price = "Error!";
        }
    }

    console.log(price);
}

solveSingleTicket('Weekday', 42);
solveSingleTicket('Holiday', -12);
solveSingleTicket('Holiday', 15);