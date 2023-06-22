function sortNumbers(numbers){
    numbers.sort(function(a, b) {
        return a - b;
    });

    let output = [];

    while (numbers.length > 0) {
        output.push(numbers.shift())
        output.push(numbers.pop())
    }

    return output;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);