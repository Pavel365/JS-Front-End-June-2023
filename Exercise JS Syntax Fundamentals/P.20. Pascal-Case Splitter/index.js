function pascalCaseSplitter(input){
    let result = '';
    let output = [];
    result += input[0];

    for (let char of input.slice(1)) {
        let isTrue = (containsUppercase(char));

        if (isTrue) {
            output.push(result);
            result = char;
        } else {
            result += char;
        }
    }

    function containsUppercase(str) {
        return Boolean(str.match(/[A-Z]/));
    }

    output.push(result);
    console.log(output.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');