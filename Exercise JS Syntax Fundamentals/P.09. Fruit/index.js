function calculatePriceFruit(typeOfFruit, grams, pricePerKg){
    let result = (grams / 1000) * pricePerKg;

    console.log(`I need $${result.toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${typeOfFruit}.`);
}

calculatePriceFruit('orange', 2500, 1.80);
calculatePriceFruit('apple', 1563, 2.35);