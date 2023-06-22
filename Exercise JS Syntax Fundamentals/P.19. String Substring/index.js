function findWordInString(word, data){
    let text = data.toLowerCase().split(' ');

    for (let el of text) {
        if (word === el) {
            console.log(word);
            return;
        }

    }

    console.log(`${word} not found!`);
}

findWordInString('javascript', 'JavaScript is the best programming language');
findWordInString('python','JavaScript is the best programming language');