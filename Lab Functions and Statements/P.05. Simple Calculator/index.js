function calculator(num1, num2, operator){
    let calculations = {
        'multiply' : num1 * num2,
        'divide' : num1 / num2,
        'add' : num1 + num2,
        'subtract' : num1 - num2
    };

    console.log(`${calculations[operator]}`);
}

calculator(5, 5, 'multiply');

// const calculator = {
//     multiply : (x, y) => x * y,
//     divide : (x, y) =>  x / y,
//     add : (x, y) => x + y,
//     subtract : (x, y) => x - y,
// };

// const calculate = (num1, num2, operator) => calculator[operator](num1, num2);