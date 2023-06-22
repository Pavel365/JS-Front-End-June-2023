function findSameNumbers(number) {
    number = String(number);

    let isSame = true;
    let sum = 0;
    
    let firstDigit = number[0];

    for (let i = 0; i < number.length; i++) {
        sum += +number[i];

        if (number[i] !== firstDigit) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

findSameNumbers(2222222);
findSameNumbers(1234);