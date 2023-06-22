function printEveryNthElement(array, n){
    let arr = [];

    for (let index = 0; index < array.length; index+=n) {
        
       arr.push(array[index]);
    }

    return arr;
}

printEveryNthElement(['5','20','31','4','20'],2);
printEveryNthElement(['dsa','asd','test','tset'],2);
printEveryNthElement(['1','2','3','4','5'],6);