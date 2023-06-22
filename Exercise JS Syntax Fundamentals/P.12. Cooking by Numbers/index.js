function cookingNumber(number, op1, op2, op3, op4, op5){
    number = parseInt(number);

    if (op1 === 'chop') {
        number = number / 2;
    }else if(op1 === 'dice'){
        number = Math.sqrt(number);
    }else if(op1 === 'spice'){
        number += 1;
    }else if(op1 === 'bake'){
        number *= 3;
    }else if(op1 === 'fillet'){
        number = number - number * 0.20;
    }
    console.log(number);

    if (op2 === 'chop') {
        number = number / 2;
    }else if(op2 === 'dice'){
        number = Math.sqrt(number);
    }else if(op2 === 'spice'){
        number += 1;
    }else if(op2 === 'bake'){
        number *= 3;
    }else if(op2 === 'fillet'){
        number = number - number * 0.20;
    }
    console.log(number);

    if (op3 === 'chop') {
        number = number / 2;
    }else if(op3 === 'dice'){
        number = Math.sqrt(number);
    }else if(op3 === 'spice'){
        number += 1;
    }else if(op3 === 'bake'){
        number *= 3;
    }else if(op3 === 'fillet'){
        number = number - number * 0.20;
    }
    console.log(number);

    if (op4 === 'chop') {
        number = number / 2;
    }else if(op4 === 'dice'){
        number = Math.sqrt(number);
    }else if(op4 === 'spice'){
        number += 1;
    }else if(op4 === 'bake'){
        number *= 3;
    }else if(op4 === 'fillet'){
        number = number - number * 0.20;
    }
    console.log(number);

    if (op5 === 'chop') {
        number = number / 2;
    }else if(op5 === 'dice'){
        number = Math.sqrt(number);
    }else if(op5 === 'spice'){
        number += 1;
    }else if(op5 === 'bake'){
        number *= 3;
    }else if(op5 === 'fillet'){
        number = number - number * 0.20;
    }
    console.log(number);
}

cookingNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop' );
cookingNumber('9', 'dice', 'spice', 'chop', 'bake','fillet' );