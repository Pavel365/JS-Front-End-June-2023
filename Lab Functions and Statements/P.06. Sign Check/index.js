function checkSign(...numbers){
    let negativeNumbers = 0

    for (const num of numbers){
        if (num < 0){
            negativeNumbers += 1;
        }
    }

    if (negativeNumbers % 2 === 0){
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

checkSign(5, 12, -15);
checkSign(-6, -12, 14);
checkSign(-1, -2, -3);
checkSign(-5, 1, 1);