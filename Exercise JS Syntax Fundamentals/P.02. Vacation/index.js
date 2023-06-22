function solvePrice(count, typeGroup, day){
    let price = 0;

    if (typeGroup === 'Students') {
        if (day === 'Friday') {
            price = 8.45;
        }else if (day === 'Saturday') {
            price = 9.80;
        }else if (day === 'Sunday') {
            price = 10.46;   
        }
    }else if (typeGroup === 'Business') {
        if (day === 'Friday') {
            price = 10.90;
        }else if (day === 'Saturday') {
            price = 15.60;
        }else if (day === 'Sunday') {
            price = 16;   
        }
    }else if (typeGroup === 'Regular') {
        if (day === 'Friday') {
            price = 15;
        }else if (day === 'Saturday') {
            price = 20;
        }else if (day === 'Sunday') {
            price = 22.50;   
        }
    }

    let tottalPrice = count * price;

    if (count >= 30 && typeGroup === 'Students') {
        tottalPrice -= tottalPrice * 0.15;
    }else if (count >= 100 && typeGroup === 'Business') {
        count -= 10;
        tottalPrice = count * price;
    }else if(count >= 10 && count <=20 && typeGroup === 'Regular'){
        tottalPrice -= tottalPrice * 0.05;
    }

    console.log(`Total price: ${tottalPrice.toFixed(2)}`);
}

solvePrice(30,"Students","Sunday");
solvePrice(40,"Regular","Saturday");