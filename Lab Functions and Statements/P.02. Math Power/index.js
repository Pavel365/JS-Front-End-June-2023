function pow(number, power){
    let result = 1;

    for (let i = 0; i < power; i++) {
        result *= number;
    }

    console.log(result);
}

pow(2, 8);
pow(3, 4);